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
    "gasBk2Z4iYo54BdwqBv2muRVoHQdLaENZxj8macMw5kQhMGmeEQFiGKyeXiGdadGv1npShpdwuUsaRGNZKrLZiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMo3aBq9WhPddsaGT16DFiAhuX4Hs6MUfNwsvp9Xaw3g26nAiMkmf8EyeNgsDSugXpaKBRHCreYoendCy4jsTir",
  "key1": "2HZcAwLpnkJCkH5ENLNsALaq4LfZryvgCgcELnYHpCLkkXykURyd6Z9RWg1ToKoZ2Y7j2PwQtrJ8BHzrj7EpWWxu",
  "key2": "atuPbTT2KoRtcfYbM9mV4EDFTJuVBXGma4ht3NiatAg3tZq7ya5vrhVgqNPxn9WayukuoS9PPZD4n8T7FHFGuZF",
  "key3": "431RypayLgdpfUHvQLME243iRoDTDiTn9VnXj753JUKkNNPDjVqDkxCkXX91YpHr88p3bY1prXxNzDNmLHdGB1f4",
  "key4": "4TezLvLeTijoAyzB1eKLdkhSqP9QqCvidKcfFqByYZwH8z9EdUnDyVw59KJp36EcvHYB8bBScb4J5QWiMzRoeNSZ",
  "key5": "5EpSxLJXTgfxm8Etc2K1QDmW5wJdfeTPkQpZ8BvTTWJCpbJdZqhQBHUoCnViBgJzq4ywTMAfuf1KCkPTF1GjxRjb",
  "key6": "5nb571wGfAytVMqt4erBr5pzzGpbuhnZL8djKR89zZFiWuZKbtyezZ2U6xuFR3jpMPokUHmfJYq6RXzq7LtaMkAh",
  "key7": "4MbGwsGUb6rLoPAAXqCZG1qydwaRUHFdbjEAaN4JVEYm6rtRcBhXps1qhLwo97cb5os85885zqpu9i5ZbZFADvJy",
  "key8": "2ZhnnrLNd6t9nrRQ17YNhPHd5Et7JrxMjAz5y6vCr89uU3cCicLC2iUrhzAFzXVyMjypbvjZwDrUksxynWtkweXN",
  "key9": "4HbjJthwufwgMZipf9qT2nwn1pa3AiGzfwceo3HofBvFSJZSw4R1JMj845gZHdZcT8qs9RD1NyHiUNUMYziPuMNx",
  "key10": "3sZYrrkJkrikTKcqFZ97Gt2QrTzqJvAqLuRGH4UQRmyfeoe4DmcnZegM1faEmwp6TpESVLkhw9XELgn6NWj4zndw",
  "key11": "4bhdKEPsRgETRHGGmDyYzaRkpdEWFGghDrz4wu3vUqqWbrqXRcSAS9nRrxpnnyBLbJCULh2ys122K6Z9rTJK5Twd",
  "key12": "4rnervadnTDoZAgZk3dNWdEQA4Ay33obrtsmJCHfYuiAzV6ShYHwQdnWJZD6ESzRdUC4bvP4GgMBr7a6EzHyC37E",
  "key13": "5zxxTQnLBpHxhj2Yy51t8hEDDyNj4gP3HLHFTFnXzRqT3J2sCjWKzk7R9ezciM7SjrihMBbFtBeSxRczs7Mh3TKW",
  "key14": "49TrNAPntB8Sajj22ZsqHxc7HZNfpMoEqECBkJNMVe1vFj34ttdPWp5bqYqspui4yqqLPE2LRNcbrRMXeG8dS7UA",
  "key15": "rUNoRJPAbcyuwJ5k26cju9agQLBpqSfhmM8eGYCHdADHfLcyJSdaoYm76EZ4W57EAvf3DqNcBb427aPb71hFXPW",
  "key16": "2P8RgDer3eFtwqbQJMsbEoVGqgf27mGP3Nqb3VpEeHXqqQP49EQowVyv6m1oWdagw4JWKkJ6tGzozepxXiwtvQ93",
  "key17": "5TdAvnFhvthJXEyMMVRNm3ZwN7ZgrizSvE63F6hMyW3x6JzakZVoBPPmg4TAzb3uKQSTZLuM597GSYZ7W3wVtMXH",
  "key18": "V8mufTF2Fd3f6HSWtbnpu4wTAgruoG2Hyg1Sn5BbXPGQks45Cb4EPyzCHFWmdam5mXHtqpSDaVV1HJhrdVRic2T",
  "key19": "3HPtzBW11MBn23SwhBJiJzwq3qFVxAaDepf4npxJfeppYyQ5Qi1cwGamtZHtCciHeaPtdaUfHQSAJU32SezW1Lh7",
  "key20": "2FyQFrs5AMPMiTF1BUamuMa5tJ2Hs4WSjj4DEA72gkpJWiNXxuaAKDyMKDrwadVcSps5zM65hpZnTR8GJKXATXi9",
  "key21": "2eC5GA5diWwsVwNJPtjypWSTDZqJtMwauyBftM5s2unViXUefr2eTvRDXswmVJdzrESiXutZwzQic8tmCmnrQMSE",
  "key22": "HT616VpCk9WCHw4Y1wduaxbYtnNFRHzZEjFCGEjt2wAku8VD8CZG7qcNCPhgY32KnUTu6BTpfa4N5tpZoRXnJzg",
  "key23": "51NECBYXYt5EBCskPu1Kq2G5agoKAocie9UenXWMRBVFk5QjqKbzsi4kK94N2TLUc22SJ96SfKjAcekbsZwdyjPc",
  "key24": "3Pog2Rz4tb7hzyghqExbXe8CipokiTRBa6zHWBebyMNT9H2opWiz6wDjy6iVPjkG7VCFSdjsfEZbo5EgBx1S8nC8",
  "key25": "2tYabgbeBFG7nHy3tK1g2QTtB8ZBRsBSJffqgbFSHLNCr7Z3CrU34SQrkhT1RDJLvCMXYDF6TrPBj5MCjx2HFxeP",
  "key26": "5VLAs9upvYzHHCMntUbg5JyYQqoHdjY8hp8K5df6TNqAVHRGqbB9vah9JPL5rNtB1jcrbfwX4jhALbdhYHACkCpq",
  "key27": "Ce5XkgjqZPWTd6DPc8qdcCSgvFJaay7xJk2rfHXVcZuLQvRXjDjpopsRKmNHdcUehtbVQ7QF4QaqoBbnq1UYbAw",
  "key28": "2YNPGKt3zufBTdPx4ghJBoVcdbvwHj6nz8MaYpdV8fPSq3cyVxJd4PdkVuEsvTfjgowDvWHvMrFRLrKMyrr93hWQ",
  "key29": "5Ww7wxwX7WFeD5TChQqyLUrx71JvPQPBsjsmaGw2RJximrBHAKtxYwyKLtPZ542hWkYDJoiWEqwGaNB5y1cdNpNT",
  "key30": "49rjtTxW3r7sSsjYi3f15rb54VvoMfmm8DMcbY9A8vbeZ1y589kZyYpXEuAxskLuaHz3sZs7TJk7u3FbKHnMf7be",
  "key31": "4dtsn6BN39xj7u39ipa947R4sSiQc1sQ1jsHC3kNWAKd33k2Ww5w25UBsvrt6vZ6Frezp5jqo4qh4tAQwk3NFofp",
  "key32": "jwh5Ax4fzQ5eKNr82nqzjg1q6HF6STUVD6WoP8F7tXoUtpFf81Sk4mJkWxaiLsHuhrZDeVgyL1FQuFo7FEZ9e6W",
  "key33": "4o62RKwfPcXw9Gb3tqPoBHwuz26oqPb3MAjQcxYXHX2deNLxWf9wBf4KXj5DAz3p3ukSHUVDfKhzoA4QSzysFj4m",
  "key34": "4CYuqmyxZBLJfRhD3chJhe7dT28NSzSB3tansWHA6p6MPJaFHYPRhPrSZRJexBjMFWEEp8x8BT9wfmGXgnFP7YtL",
  "key35": "nAwNRoV8xSjaBX77yTgzUoDKy7boKS7SrdX9k37Gf6igGHDSXTkLrDjgWdJGRY6hKUyVipWxxCWRryYAFNuwjPo",
  "key36": "4vAg2RiZo91mpPWQofLqJjt1676KBYa9PmcPgEi8B6vgtHWBAKHPhggq8oiWQTkoF6kZsVgQUg5DCRNSE9W9pWJp",
  "key37": "3Ag8UY6bLrV2qeCwm9VzopBJjXVduHbbdfmg3sM457SRPEEKnchdMTFxg9apbqjQdwaALq7tNTAz5TThvyKekPSo",
  "key38": "3UTkvUAmjfXwqCMp2NkP9rgVtBf4FsqAPem1JWukrruCrnB5CKY1ux3QT7GXzGy6Qg5mBLwb1RHRRrEf7qEj8F2Z",
  "key39": "4sLvXkTJWJhHzEjxEGYdLHKwo6hv4fqrSzUnrg7YhvUU3GsYWz14mkjmL98bBadHZVeGveZJitpqMXNWMMPXV7pd",
  "key40": "aHnAGe5g3t2NXih8V2dsMRPcjJmUEuwz65rbPMf1eZJAiSBsgufCVA7BSHnodTbUronCbQayFtQqE5RAwPz69do",
  "key41": "2zU9of2hftLTqgHhadEUPBoSZwKtVg4veVudY8A1iqPzjnfCz1du4rHiZEdKcUHhqu4bv63Bd5jduggR1fzWJDCg",
  "key42": "2b65xpSgFRSS7isWt9CSHiRyvqhRfzzr1wzKA284K4NGnK4eGm5HNxWCFc6HicjKBQSaEFrBcZZ8tDF9Prres7pd",
  "key43": "2mnC2aJKfWUf8Rzo1fskNV2gWAGEPbdjnJEnjuZjaV8N9x7fZKbGuExvFrWZA67jxjfpafGAQg8w9G6TNMk5hetU",
  "key44": "4CHMmmadGhuPTQtXJmMRQg1Rqi68vpmrA159q8bAKPrUrCdpcwavbkinkGkhuwwCWaxTkDAaPm5ADjskQD3juBf5",
  "key45": "2pWEysEdYZYiR8Q9DeZfELuMCBb1QChHKFF3cNCbwi2b8Tuj6rHzDj4XafYi8Hjgd99s3BjhBRJ8quxgmEMVai4z",
  "key46": "P64Nrxtzvsxk592o4C5wkZ6JgbcKgCYkaCQAqiGJA19DTTe7ewS2QpudTwUYeAZt18LmKoPFj7oeA6xQpGsaK77",
  "key47": "5x5qKUDweXeDo2UddfqNQL41QwdeUXtHkN93GzEKS8DtbESTh7CZMt6g9jBbBibhTH2Rfx7Mx4eRGT1YtJoCjW1v",
  "key48": "528JMbvBe1HwwbHaqRFbwzCZ6effRMRcJ4JkLfQQiRDHjJ8VqfD6FG9DUmmJ7G6g58A7NcXGViiTHkDfq2yL4GBR",
  "key49": "43nFReqaZRGkb11osh3iypEFguX2LmDNuDrMM7fXDPJWRG5xiz9nqju2tuZpFbPJiiwEW3wfJye66gm5wU5WbP6j"
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
