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
    "4s7c2XRkT2CWViPETTu539Vi9fwChwQiMYfZVpBQumUpsoKETkGe7h5W5nYjqRTHuLxmYnMLrYD23dY7sA5WkQxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhiKHXHYPU1J1KRG6FhyXDdydj23EkS4mAT9z3ck1gj4KJqMofUp83Q88LtW9mQUnJwg5KDxugkxhceH5Wiu1Yz",
  "key1": "2BHKjBzRpsmdoMNYzfF4HQqeioYub2xeikxLTZb4rgEEkyw7UzDMqxL7iht2hf2jtU1qS7hTNYmMoGKS2MgboEhS",
  "key2": "3aTR28ZxPqYNmfmUconPESfXsB1RnWgdvU5JVTv1PBSatRJJYThftsfvwijbF1GUC7jHTdMJB8UJCn9eXHFzQH4y",
  "key3": "4iU2dHJoki3t3qYEboLE8My62pSChoCU5pj1NEEYfM52VoEpkDgiVisQcTBxKwtjNGGAfsnxPiJ3v8tAd4Nhx9P8",
  "key4": "H6gWjL6vBaetBtcSxmGTHC15FsnJWfRuAkQbTF7qvmgJC9uHLHyriWQUwn2YwuqFZbJHmDBf8ijGVH1ti1CWaSH",
  "key5": "3jmBSKs3wCkahtwfgSzXJNUyLcSgHVPjvzx7vBSo9m1pN68b9VySMB5KNbd2uquRu3vvA6qJ95pebYiLFkGpAEay",
  "key6": "rRqmCPE9MVBKDWyKuxZdYyFrzEgmjcuFr1Yhd3fu41KWxyMWEsEaZQwNZoUEEWuBdUEPCRs5Uzf2HEUva6ngaAu",
  "key7": "4uczBxj8XC5T2rrufErPiW9ExyZ2sVDc2EVBoqF4LBUThoZ1UQbkZjWsHP7oUvF1T4SpTvtxfpgHVPzegqhCWq87",
  "key8": "qUiJhcngga6CyJAiuZ3rFyZtwcsfYuFqDNRsNgRNzjZUq9RJaPnXRU9eBAFQuB4Lrton6VBE7tXxnzKJ75EWYKv",
  "key9": "pCGk3Ngb4WWBTBWbXGpDeJr6vFv29MjHc9e3YutDCiVHubfYfjcibBLNLn4qnEcp2cUxYBLdU18PWKPtfVRs9YH",
  "key10": "5b72LaSmgzMLuF5EW6ME8mEiWELmo3gKjkAJAXN7sFRhQbo2Uu1hKZevgEMT7Lt1JHxMG7MtF2EPdee7zZf9YoMX",
  "key11": "jHDQdrtWb8HepNjVkgioV8R1apTFKzUxCSwpk9g2LsAFp7iPvNVZdafPaXfHs1MsHoafvcfyevTJcvFHuLrJ8j3",
  "key12": "3A2pK78U8j5FBTKG6bEsLXucKUbhVn1Gu5f8EQ4ev9ZrDGfph46hk2HCVD8vaXbCrVB6pDSuq2PRJuu7ZFNXdrXL",
  "key13": "2StuuEmuJHijkPcai9SgAhPvkuPtkEAQvWX3ssaLhauAAP4cKcSLtiMyb3ZbB5s8cnsqbKEwZPtmtuV8fNhGKbNE",
  "key14": "4FzLDze7onEXCj91BhEcniihLytWj2eBZmHt5MXTX38ieasCMspLMP2pMBc7bGNvN6PPNR4Ny5GjN6321K6KxFDg",
  "key15": "3ETjymwmac3HYcCEGX3bZyT7fWwp4FwbaRkP3oFbUikattevZws6dGovwB3NAf7ZhKMq7G9XTXH5U8wLdUn3CTeg",
  "key16": "Ezr2ytqFz6mofVG7aDFia2K5ugHxEzgPig4TSvWh9HfigtxTRqdc8GinQJLvz7TrxWfXSk7efbbKVus132Vizma",
  "key17": "3RqDMwkpWer5oWUf7eNjkcvWvBFNPbDbbC9p8AK3bvA34iBFSRLNHum5JtEL1UBZkSara8puqCAfzCmxkpUbTzeL",
  "key18": "2kyakuxnjsSv4eJoA43gGU8TNNT914wBW7myaaVmhw78UANZGVc14MrJ2Je7zxcR9GQr2FzmzSQSPfRcqyRudjVm",
  "key19": "3ponvPURmxsPEV49NEEL6GAxF2C2sxBmGBioE686koMFTDQa8ihSyZUWXo8ke4JuzMTvAK2sdqJdFHqXPzDwiEh7",
  "key20": "3wqWvk7PnmfoRkAADzXEkRCykXPLfyyyK6WAd3ieWc3mDNT8obnEbfcF8uGULftZYiYPTtaNLVcMKhMrYPrxg8Kk",
  "key21": "z9YvygPMVY9xw9EmLeJLELRSNxAo2rYj2y2yoFSw4GLSMEYKohvBRs5TRMo4DM3LqEA89BbbqH5UVP5hFa2EBKF",
  "key22": "3WhVjJRPZR2w2hCAnLLvhCikWke61hrMWw6hR7XhvGmjG8ZY9eM26gmTQ1FzqyVDY2TxKDZwRh3kTwp8xaVMUcpT",
  "key23": "3gomU9BYryYcQJeSMT2KwyqYdi3qD3roJckttkDGd8rc6Qp9YrjB4jUniPonsbyJXkuPmPfrNWxm5KTuTA6tSt3k",
  "key24": "233N4r5HosGLtxopjTPJys56zABTKkUBQDRkexMoACguCA7FNtoYWQwDC8g8Q8ETVSEsSnjNqyeeCadRaBijMPU2",
  "key25": "4bHzPoxXhnzan9MMKg8rwb18bAGP3VswUkvsLkp6j7B2qCfdWwvNNsmFw1K8gvH3qyc87E2DmL8QHpRmsQmZBrw",
  "key26": "XPQCKgLVwaMcRvzKFJopPFvpaJNfarowtCWuU88jGVBTTJJD13chHEgjRGRo1ALrFeYN5bCWRgWCUN1qRLtmTt8",
  "key27": "34btK13DdpJEqsXj932DZicLvetRoRBSGLzWfcGdHLQazxPDant9ir39JM3e8DvytbmRfqhZJDgPiM4sQ5S1RTof",
  "key28": "4oVckMmsTrQU2XBgirqiHucnGanaBC2xn76kLpZEVwsajhn92wzj4iCzRhno7hSk26dMp8xXAFYJAhAJpnFtFJtg",
  "key29": "DemjN29FACokAB14Wp3YtbrBYzUHKHi4xSxjjKXFrUqo4VpnArHi3ycLgtMJsGRy9KuiEJip7oc4BmDZy19vkrZ",
  "key30": "4yy4Hj8qNUwmVu5UoZ6u4GgpopWqWPBLBGXnzcN98qKZHUJboJ6Qfvd5iDfsBfcoT1bJutQH4gXnVSHerrkRbxDo",
  "key31": "36oVt1eCNFQERUbRcoDR7atew4ceFCbu3Q8NSbiZgPtdR6w2tthk5U8HEmUprM9RYHf6aYs1R6ruCjstZTZBtZDr",
  "key32": "5L93pJUzvWb9ZvWkoQjfYn8seaV9hgrvdpyriFzbLj4moiyHQgzuJvXRwHXuf6DawtWWFwvWNmsrFgoyib1rL5ou",
  "key33": "4qMjChqA1pWmPoM4M96pE8pz9JuUudZokGLaVs7HmCJmVEvhSyAuKwAH2W2GfjjVkHKLxGAHGEPuSFFt5H38XrRy",
  "key34": "4BNi2x2rBg848X3W8MAJwM227N3Cz8roN2t4wB66dyiaBoKpogPWFQYvHhJiD13uzCSCkbwD3r4xCmybSmmKjeVU",
  "key35": "SoMQU7PZztv4J5tpxUkaAzAUgjswy2D2Ccudh97xqubAxx6uEP5GpGbnPhCw97FzaHZWTqhCLSaFNREzRVcGpBj",
  "key36": "4nsHW9AAeiGhH6XuVNqweoFnt5RLKCpqQieXu1QiqmsA6tXofZKUNx9dXiYm5P6NiYvtGdPHspHdBreqzrPAAX1B",
  "key37": "67kvh4n4C5maeVob1Bm89FpJbS33xBrVr48JN7mW1RUaFWSvFDVF8mf6kJnTu1fsYSQ6rwifMA9cyQu7EZLWYEYc",
  "key38": "3WE8wops6ipDgQRVbY76YGg6ai8KdDBR6nzLvGUzoxrXixfniw9YjRsC6zX9y95c3xchMHYNicrBSkrrzMb3XBQ5",
  "key39": "Zi6JG5tS6Ak1owCzTsuw2B1yF3A7S4ie3HUwFN9h5DjK1JQyJo9qNug9iG3JWFpPYDQoLyavgjCvSiUeYeAhV5J",
  "key40": "4q85cTg8uZhYB3WbZJkELF54c4jvSrFxCDUNn8cJ1Code3cJU2rbSr7LExyfXM62YxoFGMhJAM6VGxY4EpHt2rKU",
  "key41": "U9Z42cdZqRMtbiFj3mQJDpxLrFsMRkBJTj6Mo4xV7jSeTs78Y7Q6V1L4XopkxAzShvEZRC3fBUesknegiutqQDT"
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
