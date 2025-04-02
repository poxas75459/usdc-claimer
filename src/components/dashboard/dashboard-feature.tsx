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
    "27F4wnvEviLr2m5J4yh5GMYnN6RegHbNt7ks1phkBGvvR6gZJvdhYUYoKeXwb5UggaMEvEAEBUcYeXdgKUP1oEnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b7H5ioeUNgZdmSXfxy7F23QaTQ1qpewNU6JcJYR8s9GQzjLL3wBM1TZSTtbBprGv7rP1si7Sw5bz3mwLSe8rzv2",
  "key1": "391bPvsT2RLDUmBvz5FuHBDwiHKbgoJyDjkBkTDyHsuvzCh8nDH6MKH4QRsnnaj2yjAu9tm8EXqiN5xu6Mo6gzxN",
  "key2": "4CQSz8hfduzCYBewqcGAEfKknE4es2VK6Xj73hNVuXqgYN2zyUTsAHpNmGSc9QvSa4NVEcVxMNmH8dHCSz7SmPus",
  "key3": "4EvWvPQisTvrtoyPMMmZ2mKD8iyoF1zN9n3XUwGENpUjSJ7yRJ1w1XdcnFtSPv441mnadqnV1xfUdHRpPwhPpEZg",
  "key4": "2DWyv73tNAgC93mWBNAnfX3oGjHFDNtdLE37fLFxLwY1HeDrUitbNwHPRfhzzc7qNmw8BQA3RPqiZtfomAuoyGJE",
  "key5": "2LGF5oF24nS3Z6PDRsLB7rpqYFLqB13srsLFyng64LdQE53ugKrWx1wWx8vC9G4nQLDnyXFcqhtjSx1twcMPtEAm",
  "key6": "2csq4cq8tsZuQFTGCib5LqdUDj891p86oopiCKec98NJQ8TLrQVsr7sCTj42tfMsmVdtfH3bEEYt9hDnF52VTuM5",
  "key7": "3w1tqudaeL8P6HY7r6eBmrtyBN11bCvqmjwAGPSQqEiBRYbiwS1uckkbrf2w5HfcmKSMYokwCrJumpWUWqVrLgDU",
  "key8": "5K6RWyrddcGMGj32gXBY1pY5u3wvcBF1FydUgFCLpWVuWZEQBgtQ8Dnx6Gga8MB7UyaBDD8Dg9ZuCP8AYNX8M8Ym",
  "key9": "QascYDZgXXZz75A9AwhLr9cev6GDPBsmiaozdJoEd9NDYWBShCDmfWiH5RxP1EeD6jWRfML9Fg8inCZ28UXAojb",
  "key10": "3FJXmkc2ZMcb5FNB495Bf4UbYhFDbCHgrTjNQ8Wzbi3Y44fuhoXx58YmCUW57GakHYC2cfEuGPdBPxgEWjZoCvcy",
  "key11": "34YvwfbMBBfv9KczWrfVLe7x25BTFDf4YckCtGRmAt2i86Kta8GBNjZAsqiBVwu3z48VQqUhcb7z8Wzo5SqyLbWG",
  "key12": "5o7akgJc8V6GDdEgkYAS3vQxdVGxed3xCCkUFi3QFLLzT5rP2r6TBkCneRaGnhUdLwwVkZXBQ6SzkpTRiEFrZz2v",
  "key13": "2kbqJQaH9mvXThseEumuGt6LMoUepHpLFfP4twy3bQx56s9tj9sk16RKDqmdH4XTtFQyYRWgX1vNgQmpeMcTkJAH",
  "key14": "4V7MWGotm6izHvx3MbE6EjfRZJuWjE7C5vo65ZvirWDerAzQys4ZtJkMB8VmKFQ1VGPLDCXyhHYQjJ9SvqonmpZm",
  "key15": "21KvFAXYSj8SMnY9d2vxkB7KrD1kr8hQg1XzUFNCJD6f6obcHUgkWAR84B8arjwtg9Ms3JSX2vnZJhNeh3PGBdJK",
  "key16": "d8erKpug2v56k7RPbQSpwaL4GMUWSpiBxynMS4PNuJAdSFf6SqBM7neNRkZfsiMm1TpepiJzpaUBggxLxahKEJg",
  "key17": "5ZJLRbnoPWCFKWNtXjEzyJ1fT1Grtmuze3UAHRYogxhqqs5esKeQJ1Homt8ZgeMQ4VuPXhjhhWkW6jREZcQT6bL7",
  "key18": "4EyvHNBB6pxCCxVJ6UtwXWKky6oktXv7kVH18HdTXfYBexngMsS4kkkzMQJV6qdK6DGYSNC3PFrJBrVaXPysrNEw",
  "key19": "jmsdaASZikig1MoGTFTxN46ZuycdKmRw1LTxsGcxZaqwhUxZfHYX85Zx7fzXWK8wu2uzHbr1ZxhQjgYfQAz3f9h",
  "key20": "5QtXCx1uZxspigJrs2AGeCjsjyVe66UZYSyoQ7e4E53ws1VdHPaJEGnQ2mShKGXKH42biVE8s21KPvYQEMFMaAcC",
  "key21": "5WwvKDju8ot3m9JW9T8T5u6shkVvV3CcfkHuKpYfKNQSRgc4S4dbiyENhpqrG7sCQ7cK1tYshTyS6Q7woph3qqQN",
  "key22": "XTGdhHHmAFhBAnyQ3be7N7D7RhweBZqHDHrxFGXdyuTGp4dimhnDrU8jLjw3Mecasf8mRgN3WE8GGTkgwcwpoin",
  "key23": "4evjnJVAZ9S5GVfiKyHdNcNvrPEz7dctLAR4dmXpugnhybb22r7bLsmu8Tf6StdsYzDPsX4bpSRqb1DtsA6oWrSm",
  "key24": "3m3GU8fPAc3ovGCeRSFh9cPcrgQ1a1bLJWLXUdp7G6wqFhR88kNt5B5ZxoDRv4rm2HDfXkHsSLf6o85HxDQ8AJDS",
  "key25": "3HsAUAtoVLEu61usqvFXMBmvN1uhfryYwuPCPEoBtW2wNQKHQofxNQpBN79po8u3nVTDEg47RHUi2fq2WUxNM3b3",
  "key26": "3aWbgj7HX4TtfNLj3L4iFK17r5g3BXNaTLZKVmu7F6K5gvNiBN71tsocg3LLfsCVUMjafYWP4iA6RFpUoPm62ZJw",
  "key27": "59ULvBEXCbh33nCLaxkvo1RwoszuzWFPNDQ1qoKtoq8w1ARfkgtz2byV3KLb7AWYTSJzmteGtzvrPvkRh6XDLtLw",
  "key28": "3SL5wYqemu6yHvnGADSMo4dTqe4XGRb4tXr2MutaawFdCukoGxoU5jDXDdGMaCZ6xohzjxkiBGujKpzEke4Exbi1",
  "key29": "5uj5ChXGehLmDGShnc6MfQJoEJjAkQALezN1bs6NSzuw1us4jjTDGDidmEayRTqa38cmFTB2Xz1sigsYj7XwNQhM",
  "key30": "2tkFppQVU8k7aMXzTHbop5uSn57LbJVhJqppLZTyh29XL1hZNboPgtRtvQfdVShFB5hNDyF312Xwd8UyeRceowDq",
  "key31": "aiqs3za4mEhsob3P63ttXdHmAPYfS1ogcirRZnjbomHbmc1nb8ZNwJsRHqUKGQBq5kni1X2i81cf7rBpqNmqoQ1",
  "key32": "5Xk3n9BNYbu69MGttQiBazFctujqacc2L91vBpgR49fqHSThv8MsWEvo8g9wnC7c9C85cJvcAmGUdRF4UPtZPpSv",
  "key33": "3ax2SE6tAkj2eN722Cj3vaABcD4arEX9NC5mqNQunaQCNxGc964xtKztxxZeW4PR5RxX8XDfCL8Yr5zMQTEbuT3B",
  "key34": "3MF1b29Vg81irU4kycXhQGf4RfhgFaMULnPzX8FyoBzxdUnNDhR9BVu8o13yKvsrnArofN7i4JuR4FdvqcUYYumP",
  "key35": "3Z1MapUYaFPm29zH2rFyLErkGLpZJtEBK5DJzmzW5qG9opsRACc1j755gPJdVNghfrp5c6mxMqK1UozfadZqEp7K",
  "key36": "26jt2qBLaXfCcnfAtEoVNYAMoMJQj4azssummqv1m9KErECUygkcbanrbtC334iUwQunJPazVPH6CfaoDquuowfm",
  "key37": "58cgeDA11CZftTUVAU8EPs8T9cNmbgCAjkifKAtqHKnmapXtoCLUBPcSj3kjktzRyieCcPs3sUA3JaU1T41mXnpw",
  "key38": "ajhS97HxB9taRYtrg6VTta5hREBCJxXWpcfQegNwtBu91BX6ybX3V5gf2GtcpyjbLremBuVvSVv6wph7AmcGkL6",
  "key39": "5pzCFAXw4SB35EudqMDZvdMhedUDqJHZY7d85p22eXBF9Em23U8fZ5GMjeU2zj7RJXp1PgFsqemN42P8ijTpmpes"
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
