/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3tP165uQ6obFTbHnv5bsrVQ4Fxfh1Wf7jyhEuGRf7uvh2z4uWXDbE9uwDBAtE4hkBgwt7JqLBdsP74sgwg1Ewad7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9PeMJYmetrdPtAjUcPZPfuyhwYrFqxMnY2y94WrxBSkitmXvjD8vp9o4T4aFUxZXFb3E16wRKxtF4YiWmAb1h5",
  "key1": "3DEitMx4m4yFWrrUXqQpmubCTRRz7JNPnVU3DgDduwQx1Dsnv6zUig5E16TPVgZA46a6P6m8FF3YQynEPCsKfRVn",
  "key2": "3y6FVgHiLXJNWfLfmyjcZqnaCTpps8CJFaeoCEXmTE9MxFUsWdbryxVFanetXFq5JUFD8JYJvEuPBZJ64LmVAsQD",
  "key3": "GDY9BVRDvncX7M17WzTrAzxS5EbZiMHECwJCpUS5eLGh2GHkpdoNUYxHt8eaKCLMQ6DXBNNuEX4nvmmUNDCCBjc",
  "key4": "5XSW5SKKb9u7XBstTXRN4gRs5G7MMGBrDjkxNkvoDnE8SsEcWLqtbKhEXBfV9W7CmbgSkmYJfMdKacbAcHVBwmqf",
  "key5": "biXGC6MEzinK768R2S8ddkuK5LpMvyYJwreHJ99mbcRJo4qHwkf7MmwLPQg7Zmuq9iPyZCEqZR88DvSo73cX3PQ",
  "key6": "3Ssv34VNXFFWSGny7FCUNEyL7WxwVcFeKP9zcQmgMNmxWF1h91dxMr2T9ivr9Funk1EHAMToSbHj8Hvp6cBDzeTZ",
  "key7": "3mYNpF8qdE7iNgkYuXhhUDGuesMb7MjnGty1Pt7S44PnhRhzCLxhc1k8i3ccZC1fcAb98VUiV11kNWS5P5wmJWBm",
  "key8": "4RSdL1QEzGv3m6kX39aExhbco27pCFqDp3JM9r3FDyjvbe8GYzm9TyukzcE7VPkhdiA1k7iJABPuZ7XFYWnZgmtt",
  "key9": "4T16TZp3P6MXtFm5USce9jVKH1GMa6RHCYohhoQtuzkCay4tvHwgKbpRCavfz9T1H4yEn18HgjWUmermyAN1qFkN",
  "key10": "mW27852qtVFHNa6wqVsBV6hJ2PxQFaFYKT1LNcE6v3UA6DikQH7vrFcjqPrMqx1U5SabVhnfaSRXcGjU9JvWGrq",
  "key11": "2ZSwS9NUGsiBFcDnhMmPf1EY5oRq8HTQ8gtz4F2tmwayXftbV4TXytts8ej1wj5Ue2KuVFcm7nKo7Hb6sw2g2S2P",
  "key12": "xX9gkPLNMV1LWHQ9664bZsK2Lq4528JTYKvo2k5cQe9vMsLz2v6FN8tveqrFQ7JLtiEat2G3MR8eAz8yr9kTx12",
  "key13": "3bXW6AKYr7gE6B6PdfRqQK4St1rQkiuEqW1R8oeUmgT9AY3bF1M92aUSa7uUerAjFQSaUxH13Tf5qSEmeXHk82Kg",
  "key14": "4SYdUcdjEU5PTYUTV89WT74d8334tfR63zq83atYo37Jx2Ph11QaV1kNqGgi2kAaTbivc3vqKnm4zZXbwciuBnr4",
  "key15": "5iVJm5Zm7Bjpx3VNbChuCxFcrL8MvummCb2co5tBLY9z6beSYywTSVVnfsWsXN9MjVJgqkHw3dVsJWyKt7p24Yvm",
  "key16": "3Rf8g9vC3PzyCoVjThigUuY78yMnQXHuWqtGzGpKiWiXk4VnSCkzf2UUt2beBSLgMK372zm1YPjjprhwy9FjQBcP",
  "key17": "4uGs4G1M158xpmdQXcLNVx1dHNAjTZcYRnHytw5uN6MfJ5CxDXDAdHdndC6bUTgPRxHQ6U4YB1F6TbYiqGfBqthe",
  "key18": "44nrEopK8az31XEqYzdPs1sXZBGhnDrcVUzhBgWNDC5waNd11JsvDT2sdJ9i14ZALbXSD52tpQg8RCpmjsN3aDYM",
  "key19": "3wVGCQUUNqVk9xFcv8kGBromzTGntgJLwUaJF4kJsMm85C3ud6Afdt2apzpKiYzYKpWTDSynemUJwTLFSLN9WtSY",
  "key20": "3Do3iFLw7C7pa4p3Szsw6371oXVyJiUFuRkxgGC7kNUAAPV2rJTHjY3JNFfsG1qayWfEuWdryBe7wdkUnfoB8Qdw",
  "key21": "2FdP7atva9doWPUftqDJTKzpzXAGundgGWPCCUa85aYb27LebLHKho2WSotfmq1pnhoiHVazSjyBZwenjq26K4jc",
  "key22": "5gWzmCWeo4risVwDFoXeqzJ9eJaPZ63KJnKRoSQkbRUXvCeyDNJSkKL99BdXnWnNHhQ32n3PEUD4ih1ERLM6EAio",
  "key23": "2698k5NcKyAhQ9ED493JnZYdr9TWop36jQz2NrvaKwYTf6cUNhjHAfpCKHhBveD1ghtkky3HRpm4tJG3NEyi2L4p",
  "key24": "5ywrh64tijHKvzP9LQRL6pHj1yWSRfnUPDSJXP3eHrwMvbRTDvnD18CRcxR8iYmvvWo9oabJayDDeyoADuXfjXtb",
  "key25": "DEZ7LnfMn2owgM3MdvQ1Uv5aXG4d7aMd8ZJkMCRE5C7uQWyF1hj74YXcdpijaSKpG2tDr5hkSTTCgXEdTTpDDM3",
  "key26": "2bmHrtUqrMs8v3H5Hcp2pqY4MrmEd9s3XceYTN2FYG7YTPbrpdanqyjWx4rcqv6Gu6banMHtP54tuBLsCddmcBK7",
  "key27": "eUP2ft2CiNebLHQEBUjbPnZL3mEwQht2cUbxxJScLD6DcXVB2YRH7t158ocnyo4G1zvCv9r5Nme9Gku5wNCgcxY",
  "key28": "52YechLSDV6oHDeHfNoiHn5f5MSxt9kjdWDMhD5B7Cc66CVpyoj67FgtxiFQXnwCkj2dgnkZtcLmzG4pP6fPw4cX",
  "key29": "4AkyHrcB9ApsU1MDnNz1bGTUfvsH4Hca2cE4AMzR1qFYsSiQcLNwResm17cwipw9SMJoTr96Z8noW8PDshq22GtH",
  "key30": "2trkqoDjXxbXA7N1W1LXauKx1X9RrwKr3rfwJZGWdVoQBPT72foE3SG6LVs2PH2JLDQuEcBeDYcRG7XBiLbzd5zW",
  "key31": "4dxK2BK2KbgdpkxuQXDqYxvLxNCc7uwtfoXCQNmxekAE9sNpR9rBpuV1rN5WTPeZL4g7ffUuLEVtsssyT5GMNta7",
  "key32": "bkGqKSmdDfCcAw6jEMDfEyEiC6yMoHNjCxhDvoNu7UyaDKTTKFvQt9aPeZGwVu2Pvcmg3ijCiNoxT2RYegCV8Yw",
  "key33": "337rDTT1ZktnTURrEUn4EJZ7gRpUpTL9ZnqRxUrBqCtBDejx7JjZSRdXQw5YXmxcSVk3HdAF8yqbvkUdZMYYpcBi",
  "key34": "35VwfZ5oi2PcFqWHpyhjuMYbB2grrzTwMcZDPSQu7zGwEGZPnbqmtMccc6ihSxmWgTsZ746pMpcjsUGPJdi6z79L",
  "key35": "4miEYksiiwFxf6b2HczDWk3wCxjuk1Tz4zHHRQ4BeEbBL4uUK47zysfqLAdJiE16mZt2GnEVATj7bR2fTP1f6zQ6",
  "key36": "3PCDJ2tyM7xPHEeiQqziCWGDrjNXDmJh7m1WnBWS3n7wAVhPxWFV6Z3JE7eZgrQiXz1PcPK17T5wdoZ4Qk8dcRVw",
  "key37": "4HQ5qCrd1G8oVABAU76mnreUKqqm32QqcinB382qjmSBFsWxwZmRMZWL8RSqDAjLRuSo6aSYt3DKnDjMZMo6fy8V",
  "key38": "63DmvdUZr1f7A5oRJyvivrM8XigqBtbuc6zKH8ycjgukXpmUBYqNC5iZsbqJHpg4mvwupQjX6y2kZvCZ4gpfnBGy",
  "key39": "3fQxTjgsU2PjNUzpYCVomXqr9HoTLKyaB3y6kMUo4B16afC3wRNfaMWm6ipbQ8TRhRW3oaUA8UtYjTVQyVxSvcpG",
  "key40": "4aWs73hqeYk8YuNVtd6eYBfdXxiqy2jVXcZYvviJNFmPAWNP861to1mr15RunwFvcGTid3ibmNy3pg9b6WTbN4fp",
  "key41": "37rd6apGQhhNJDjU7M3ypAts7S4LbRksLvspY7vVCFk81fLzpbmaonekH3WTFBFk4YeLXgFWSu6MrxWnagh3fiRU",
  "key42": "2XfPyUuXktR78VdbhosFA8Lu4JTmZ3Qa79B2uvYGFuEgG2xGU5yubs8bYSQxP9H2aGufSJ6MjDRwqPT5K9yFFkq5",
  "key43": "8KZLcsZ8PUcscoxMirtEVxM3ZeqsTBYj8n6yWpxDrTz6ZjMPkXR4x649uULgjAoYJtJwSacSbv5DU7WthCHMwiz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
