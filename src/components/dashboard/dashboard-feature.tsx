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
    "3JUFWAbYsQTZ2PByr37c7ucwXKNkkpx3pBP9KDok32iEaPHUT1k7m4q7xgJh6n3bSqGkUM5cnKMBV7x15GHskUDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odyJ9wvKjZVmMGSM8r2iQNtZME1r1ASa2wTgHWmUjKiL6VJxwLUcUaMYHZgRMiSfosBSNLqtm2y8FVbNUiiKSrV",
  "key1": "5AmZWL9TTRoFwUs2L77FdPFuMQNABe1cJFa8mmEMk7wgiuHgKm2LW6NCv3m3jmwthUNeVZ7p5AHRtQmPupAJmgR9",
  "key2": "nYaKkjAvQYLFvkuUnCNiyyMohBCFZeuEViScHBB4qx5evvq97Zj7hJABxMKYi9JtSYSwmRA1KjNkMQbYqxTi7Cz",
  "key3": "41zSQjSVgMYug1V9GP6YHDZ1xzzAeh9EvNFyanDcdjfqZ8fyi1ujBsf77vBSZL1sU9NAabdsvnGnLvUh3r3ywkZb",
  "key4": "26Ec32tjZPYihwKXatYUfmc8SaeL1e416SrKuBak6xCEkv1ma1wYjUkyhRdrUh4fot8WfJEFKy8mB3p9314yPcZU",
  "key5": "4RGG6HBYS1k1tGAcksdm49DfsJ9HP9t1DMWUnSWFxbT6T1MuG4VtbsbTsJCeD8tWT6AqpveUEt9Pj22rQPZu23bA",
  "key6": "4M7V7mJWh6T4pGuF16zUCfCtxsPyzSLoYxY2zzYVu75HgTcLnKwCkXiAqpUr6YiQo9z7ZCF9UjGPZcRkV9161xgk",
  "key7": "37aZhyzbnsedEorVNUCeXxYXgN2qcdGT2WRUvkRo3hH4dfkBrScDVsFf9qg7VhmKnm8myByj7EaRcwTfYS7rUYAM",
  "key8": "5oqpWsYAUiciWZvz9uD5wfFRDi8RrV5WKuFa28vK3yDPjz4dNa2p2ZoBAM4dtLuaMC6rfMP3VrSCH9ABwDfzJhxV",
  "key9": "212uDDwbQhR7dAM6EAxNGwFbPu79dSPjNoFXyVJzB5ne3gfJzAeM5RbU3GaSPaeexjf1knwPSNo8RD8Lue9hRA4Y",
  "key10": "2vcwVVnfaQuEAHCAmXgMPfn5R6vKYAn7QGZRd8MEo9ACjCJgnRRcZjZi2Msg54dkVFD7iQ1SKBfyU6TJW8hprJtk",
  "key11": "LJjFTuARiK7hYs6KjPdDPew5gPMBgzNRRGC7DvBWbUuC893wgxWHohfiK5hBo6U5jRZYX2fjWJ8uu25CtQjbhdJ",
  "key12": "3gSrd9G8HEczJ8abSNWs3x1xe54wcFvz4qwfYTn96ETFw8dz55GALokYzdsqgfAXzWno7iJtRvNbb4akFNCU1pXd",
  "key13": "TmYhSEEn6LvwaFJuJev1hA29CeCCptQaTNRJ3GFJuFojbCf6BgdykBfJo7JukpJYf1KQmhAYuZYGdR45jYBMqDj",
  "key14": "5E3XzhZnvFcffBLM48As1PzzorzXjH2KRgeT43fDAsvywYKeX5Rk82oBjGXzWsmfF6bbRaV9CpWWBJkcJuZHoJs5",
  "key15": "2n1GK8ENpm8Dj4QvNTTjfuv6R28ZLo5k6DoZcpzPWYCocUMFsGr1TZE2pf1wijPHMYtjKtNqiWk5Lx6UdtjF6ei1",
  "key16": "2MebmaJLaNDd1ZCBTDVeTeJpVzn6KByFcS1PuLowREwLjUTZDSy15dPcRqUFLihR2keDtnsug16uDjKAmzPsqBfg",
  "key17": "3362wWo9NMEreYGeDfdZgiFinsdA72Ws3HgKg4GPu7xZLyRgHpbHrkrS1NTT2Rare498bF48AC82xHzJvsUtbTt7",
  "key18": "pEyFMkdTcKpNgaLtYfcshCherERHrAiikNtmZKmeQWam4z1un7K7KxPCVjFKZiZyVyztrFnnJLyQUZH2JsWvrpp",
  "key19": "5PGw27a2efbba1giJ5J5kc48XmnSZ9UCJGoGxipkuMpSs2Zq5VLAS1c6WTKEaez2xDyQZK3of1ZDhTfHicUckJMS",
  "key20": "4b1CHowGpMye4YMd6Jhsow5n8gyJB9MJvpUu2zRxnWb71UBAJ9X8cvAmV142W8pkuC7bck1Vh4MFGM5gktoSyPq5",
  "key21": "4PWkSjypvXkte8ByF9iUmgJf8SrAu27nNRjVruVMKf6RZ49rsSLGqK7zpVyRgut4y4TkkZXEmH947Fyq41JNSSRV",
  "key22": "4hwtCyPRNJtc7oSgixY9UU7DxHybUfHVYU1RVQwrH4BvS2dKof8hB22n2MsLuvAqCtFxpZoSdvsBJbzjo4mpwzAJ",
  "key23": "4bnY24yfTFSy3mDhJdhNZx1Hxve7pSSAVtUCDhbcXSe4LrPTyLoBGySqXtWrcy4r3Ubj4qnch5ay6N23hRaxZ18x",
  "key24": "54ybPAuo3TrTjwo7Ayyosz2aNutedNgYS3YkyBurLRYKrSq7eD5S5pQtUdJQcY3YA8pGVbwrJWrxfVWBqZc29MRt",
  "key25": "uQk4e3C2WxqoZqLngda6EAKXbwatMbJLTU2D5gaxx8WT36kdygGa53VoLohmMhaEaj2mNK4oejhkWU4Ee4QqUMS",
  "key26": "5aZAAsgL1ChBhwNoDox8jnEz43NXjqahpjTSMVNCztU8ozWEQg4mzX3EtzCbC8GEB3RP5y84p9PNdkSfTgYRLGbi",
  "key27": "5sSJBwYSk7iZZRb5Q7fXWVCk3Aa75Un8HsKS8sFUsbtSxjQKB4T8zyfmd2BsBouk7aMVRUgwcH5FMmrqQ3TBJqH6",
  "key28": "4V5ohyNEQDq4ezNLaqirFHwtnsSJcctNB57NtiEnRtxNzxM7gqdHZAYATfC7y7aLFAb93hxHY77ATuxU7zCsZDBU",
  "key29": "FQQ6M6NhP2UjjBHe3RLn7DWwEgRz8BYAzw3vYmvXc53gexUsXwX7tgC72SK78BHtUt5T6R1RK3sPGvCt3etepQa",
  "key30": "4Hucn3oczSM3upPS6GELtDrsVG7GRJEhpXmmjBekQiaepLu5k81ZGqoz37zgL9VPnPdPDk7u2tCC1nTSf8sVcwQf",
  "key31": "d8a27ycgPGd8SCyDXWC5byVNtWWWKS3c8QDMT9MbAbLf9kt7YR8qZyjZdv5EnWPBsWS9QKTuTNPSwxprY4xAPq3",
  "key32": "3AtyQJSeX6pVWLMzBgNm76BSzWa9UPRZhFtSKi8QewULH7MM6AAcqdKvA71ZC1ntrnh962UCy3p7Sh5QwXhKK9qt",
  "key33": "4M8ayg5UynJz6k8gC3XyTRjHBK63aqZz4DzsiCb1HHCojSUoro7kW1vy22bySq3AReGif94sz5Vc7x7P9JKSMuGy",
  "key34": "2SWzHEjf2p1hriEoS7mCRgKqepGTnALeKdp1MX7kv1zTmvto9NZiejHURj7p63Cgn1HoARq7T7jgDEc5Eg4TDSMx",
  "key35": "3uwNEZFDT1cku2JY6zFg5bGk5qQdDAUFPg8yLPyJ7QKm3gMBLkJgM3c7BG9nf5FAbfmRm7z4khBDt63jBUbWN2tT",
  "key36": "2wFemqdfBTomf3n5wpY9HCXnjnmVddcxsPkGWK3QoGfmhPwh7nypQncXZKAjHa45da29fCoQ5ztr6iNSAjDzXLmq",
  "key37": "5xvhjtXubj6kFYcVGndJxJDWCWmZ5PGwNFBzbLxwPMpHBTMB3k8DRtC52ju6wdYNqMoHu553qU6zAwoswUxGAas1",
  "key38": "5cCitjbz9ZpXcTUQMeFZvLQoPGqhZQpDHrMnRpEi6FrZJJdob97Tx2N7xYCk4rfAz69JbwEXAZgKZGuahuBNAtop",
  "key39": "56eECihpzgUjKxgn9ai6kPz22m3z4o84F8T8EmYbpc3x9MXmKY7NBgWkJaFrYw7yvFRJKhHEvbehTQL8T9hvZwcZ",
  "key40": "4CYAw7m9BrrRdVtwefpTLvrw3q5MMQMfTsP85an4goawdY2Sq7uAH2YpP7RDLvV8RZThXt2V5NztESbc1QGsgGXk"
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
