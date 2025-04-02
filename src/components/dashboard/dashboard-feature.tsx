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
    "62uDqCkygn8w8BMpWeLLnFZcbgWSNd5kvDYZGxng6fVMREyuhX214h7zM4nV8pxVwYPsrNDb2U7Cju4V1LXkrSgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VjfMtqtqTd2yk1kZ1XXyzj37VHxy3fwWxoDxGMYRZvTgQKLPZWWSLL5LiTa8s9QP9giTX5LvLr77cSVL55CsBUH",
  "key1": "BEyznby714ArVihD7MUw1W2ezrXm6qNJAeLMtDWLfdTL2hmJgjYdDPSozDvouYjVv7UyA332W5rgDY3EktoXubV",
  "key2": "4SUsmz5WL8evdR9Lhx5NzbeysXAkZWfMXH4BvAjiFFir7LXFKzAJ7s1kBDqEdhHAgdDatvYoLQSmXhs6pswZDiso",
  "key3": "55R56Hu9yPMHJN6FsrFVvwVfbbkpsRwHzeaAK8vensDUacX6H4Shbk8MWWSor4mAzzzGRishbML6jxtavwd76qNt",
  "key4": "4XzDpWyWxqp2qnhMgKiAbmZK526NEBme66YabEKvqRqLYK9TeduS4tK5DYN2Q2nRAEnqmE9uTqpBvM5jToJRJKBE",
  "key5": "4XDzEqHghmVWu9x89G42NEbDoDo7SFKziDvmepo5ihZL9g1YtPfXz6YPfuLV2cZA8g89NCs6N68UgfY4sJMr1wuV",
  "key6": "125FhuHtNivy9cpCFd6Y9EYFNvS6DgT9a9VCyod9HBCaVjXUgjmnT627f8ZPenBx2f4umaZdEvU1f26T7BjxwvTx",
  "key7": "3YipmgXifvpyufbse66izJEgaVXkZQeqkRgFfDjrCzUk65aa1L1h2L37CyW4tTximVwBrdoW4mawAfh7SWg5vb6q",
  "key8": "3WyKer9e4RrDSsDoQrt9SwVfb8bAyWu2ab6bZN7kyjb8rLrw5tRo7HaRiR91mdZeYyaMPT2QLUHtMLnF3m4HFfdp",
  "key9": "3R2Ryzxf5Fa5XFFaBvjunfY4dFzCsxwzKY5HEPu9zMxbTo8j1JEDZ2ekX1iYBT6UWJPoj682YFLcfTEzemEMZtHy",
  "key10": "4V1JKn3ZzH8vsBG19vQoQ9ByGsHR5ahaSFqQVyrAL27GGf9i33gowgfrmtzLQx1rLZgK3rh5qWSfj36t2QyWq9su",
  "key11": "1dQSku54VBvmPwv7gPKW38LX8QBNtHqacGB7Wp4SNC1D8M859gAU7Z2yfpTuHxQaNFgwmeBMkmraV7Aa6PRXpsx",
  "key12": "5jKZCpbGvsvy3JCrdPPMkM2V3kzrEFhsfUR55FywPtRX7qcGVVBLUWcEP5imhBfbFsSFpEAdQz3hmYCxororftH1",
  "key13": "2zhzkDBx8N98oYPZmrF6xQLY1FLspk6ebSwtBQN37RxFmhzWhuy354aqdgaiYmEgTmRJrzZp74RezbR3AtXikqQh",
  "key14": "a1ZRi1p91QaYTb9wLiTQxoQ3tvaq94PjprrHf5hGRdaxYc1RzgC4HVrtrsuyhfDJ11UFukXF8xaHHitbyFTkZeW",
  "key15": "5g4WpmH6H7o4SUTQyzYP6D7ZQqfcUjwVXhEn49gQdC8V3hXGKD6d8FXA1WK7SXJwmW2L4NE9GC27dUkyq5BuY6hH",
  "key16": "42tvJtunE2poCgnL2RZhaP9asCrcPK96tguomyLNdvJKXmJu2L5JqKBdSnVYdfiLUE1Rvu7xxGbPfGygjgtah5J8",
  "key17": "B3vtn3KrAxotrsgwggNf8QHWCroGzB3cpbyWSE6j6o8zgSxnpg7nRVEkRejqYZW3EbTSgT1qwbL6E85g8HAYeK7",
  "key18": "2yNA126mfCkMkjwWsSxStuSS67yn2p19XbwVpomhABNCjXc2ZNZMHk9vtfAXZLsYHPpry9BmEov7PPtrYB2yTczu",
  "key19": "3rPwMvHyyCdgL6qPEd5QavSovNB1FgQLou5HF5764gcFJfKC7nY7SSkNKYUpm5BCRGZQVPbAEEmJGouTwS62GnQ2",
  "key20": "62BFHEULoYLtnMEjyFa7vXLD4KfAZW8MVcbGycSsY72a2d86xymSDbzgCRoaXfCWBwcEwJUaQXa8Fm8gJ3KddzVg",
  "key21": "4QjJc2z8LmAH1Seg4wBqrewqwExytsxBUdDcUJaowWoyHAnTazAEJ3CXNhEL9hG8EAxi7CrBHfrWdWrk9bDgThr9",
  "key22": "FFBGSU8TvK2G5Ro9a7GhUvukpiKAefJX2UWkA5yHUnF76g6ZowxPw5Q9ZKdXxmPsEW9jzMpkK3rBkJc5zg1nzUH",
  "key23": "4kbGxRcmLFHz3XmPRc176APxSc9qGFrSzgQLKyfpdZqcPombnwoMYT1N7qtdp6haWPEahk4wZGqcHvYyVnWxLSZo",
  "key24": "65mMWWBFmqbopQgFFjQzwLA36VZry71DUJpQWq8Jm4Jw6mfh2x3DGpgciYgzvhDiwL9FietX6US3dEUQzzjRpPYk",
  "key25": "3WZmvinzVChUv5fJkVJzQFc7u8d2WGJZ1j3XJN8rC5RjAxMFFbdTnsbSs2UtamavqeHxB5vKiyUxDXoqTjCoBh1G",
  "key26": "54mRgZVxpLcRsdcjfdGaDfBP416PCXauKKz7E1vVNvRUp8wm9rpHxtf6Gfm2JhsQim3AtZzDtzhZfFWnn4PcaKfy",
  "key27": "7PNAPJeS4v4MrH8ZJQvFH4kqJByuR4LwNyW8NhhMhCTeKWyZud26r9P78sLMDqMXt6A8tUZ2YNTh6LsGycuxKgu",
  "key28": "4m1GUNgQpLm34Ji5H4Npp7rY5PkNiif6AdUoabeHqKbKCgxwkrR3M5W9h6afF7CMNMBpdM6cwRe7WHaeawCmiPJ2",
  "key29": "4RH7HAZRTcDi4MvfqN7enBCKxSuzP9xPWGCsf1vNgu4anZhcHL9UzWyRie5TWVxwQ1RftwBVFp38BV6TiDMGCKa9",
  "key30": "4Vs5xd9BWqF18GG8k8o3nKhBvhoQidhRFQKfHuE8NgsUzZLnX6Y3X9p2dfsNsRpEjDL22QGTLrMHFgvV6bX7K7Qt",
  "key31": "3EhgHpXUMMgvM7js1FPSsTfxDgGR6vWajVkp7ybMsR92QDEUL1j5nJ9m1Gt6gmRif2CPYttme57c1JscHEALzfn7",
  "key32": "4huGKC8xhBAS996eTzF1vqrEgJpRgBCXCogKh652NafTjwZrHVbsK6jrYVALc8oCkTV1daHtujTq56RrUBev3NGJ",
  "key33": "24ZFfJiBVJmYz5yH2PYucTWTUuQLSKo54TRS4FKKQSKXhX7TUtLYH9F72QL3FGSfmty3VtvJfbHXx2oh88HjzZJ8",
  "key34": "5uSpNhxiU2SxykkB2RyRHvG5E7BEi7mP9f3tf7TrgSd4u18QtxKRF7FXBd2ViBJ4LT3b1f1qijzzBFcsqY3JUGsA",
  "key35": "3JbR15XwYUzo8NKQnCUhwauNuxq5TCo2rPWRwPd2ahxjZnJ5S31Ms44yA2RHFgjEA2gcCHwFK91ueTU9gvwKApYH",
  "key36": "1BtrXc3vsEEUKhAUHaSd7JLab6XEpJ2oUSFe4R4yPVrezfHGoVGRkk6fQUHGdCUPm5HMdhumagWiQzB8j7wABbf"
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
