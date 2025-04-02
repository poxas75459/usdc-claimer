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
    "2rXvnGGyX6uwkFCrfFwijZsWVRHsPGRrLXVUydVTpoSh3h6u9NJeRxFimWEgNxR1L9XzchD67VLi5QWo7R3FctHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2wjnWBQJCwqx4PDtM286UahL2hhgADjXQUdUu9Z8LBZPHPUTNYrUwhUaM2j3ZSMaSWZgn18XferAw81JRJU4uq",
  "key1": "2TNxaepX1XMefu8WRLzV5zxvrF7B7EeRaYQh73CBXp3pd5VvhcCE8zuLLLsn5gan6LKDrpqeLHCG2kNNaVtkBve5",
  "key2": "3UnZvqqEmAu7kKnPKxz2kczLigyLLaKeuvPC9HdR43nbSHhfKtVYDu79FPXdyKfspGj6sJTaDRUFtTRk35byMWmR",
  "key3": "2HyFCufpi7dqqFvapJienN4dqN8Fwe9hNVJ7q9ythwU5JJgtiydi6AqmouFiUKMzcw57mjYTko86UqbMan3Fbzyj",
  "key4": "yw9cgPs6xsUyFmyPz3QHKJcg1Tx43GZacDUej41i5Rv5WxwoA3SQYcUwe4nhpmrujuhSw6DU2DWVuh4NrevTJQE",
  "key5": "49rLVW45Df61jN8unxUrs1uwhMzAGpDXSPbjZUeHAgW8nTQ1aTGx1u2wYAAYmUyaFoWEH96yjYgV1x3Ggg1CH2eo",
  "key6": "35arotM3TVvAZB24YT28mtJ2Q6evT49Q7umDFrWz1ZPnmy8vYzm5tquH2FUceEQDu9ErCmnF5Smbtp7Xp1Um5PtK",
  "key7": "4ESSfz2Y3FAz1biyNed4kDrsZKReMEJVEd4Mge7EFtw6Ae5dWp2vQtcdKyq7TEdvRMN8MVsFyKzgjXef4xyjHrbb",
  "key8": "3ehSCzLZk5rUm8zeGBQ4tbYQ4W55Xsk4wZTMNSke8p5Rg6dKWkNrR2R2dJ154ycTokpQHjQ129U8NPEXY59gQuin",
  "key9": "4my9eZ36tzwAqKynGN8apQV6HTodgSpUmNq7q8pMDnMGfvJ6d1B2Z1dSmzpvTibTAA6g8bfRQM5bz55nTYkUMG3C",
  "key10": "5r87XvjcNSzf31wNYS2jLMYUPiPn32URShpQKSKJefA7sqQpS5iksJrFCmVZU7Q4EM4zLZyz62caSvSRt9NKrhCC",
  "key11": "2TRPnJFzpL8qADAMDzE3WRWUqfVErZvCQa4YRRTCxuZRftEz4gpuQSKurVNhkCfuG1qLpqPbu9A3F7LuKNATgsAV",
  "key12": "3stZhG2RCvaf9cakVHtB3bUFZPixHkSNnKVGUj5a7kyEfYDnmzevhaSuTv5jGLsZjdow8s5PaNmNMmUHAh2Yre8V",
  "key13": "3t4bt6usiErpv2PfjHXQCiYUR4vzYDBKkJWbKCgN2mBPMw1QfvPatVuUy9QwkgUi2jkfjYwufiRgn2e7C8cBGU1C",
  "key14": "LJfHf7v7WsDqpJjE6i8S5HMu9kEEUfEWMzWEFpiWzVMUuksYA2nPwanr5r4YF6r23PhqEe7ZcoY7wUvUYxHXhTP",
  "key15": "21iSx4oK5gJFxkHSbu7UgU7e614DnDiSozsc43UFjou3Q8GxiResWLksjsa8Ph2xBk5ata9KHUgGJ8R4wkpw72dt",
  "key16": "5sLU5Ki7JYa4fMs2hYdptVMBnd7Yy1PiUWNC5J4CwpxpH7LcPVwEo8DmfRjEL7mibYYfpp19NhbamABYyvVDmAie",
  "key17": "Gs35p67L2iWCisNfNmAKZrs56DwNQw3rJPKBvqbW8NkGAiZPsF5cen4VBnJgAL6tiBhg7ndKGFuiL9TUvMc7AEs",
  "key18": "44uCWDymEwKhuPgchU6EL73Jsh5Xw3yYiZqNcCRSjEmzsfuJxRMKTmqTUCJWqZH2wgudHqgWtz4DMUz4vtbUJpYo",
  "key19": "2JwzyzMg8dk68wHenxf4f5y4ejJCJW4N8a4LQjrdBFSWyWv5Y87vtkx1DFAL6dVKqqQhesHzVa3VC7nMUY89qKPx",
  "key20": "2sTsVjAwpRWvU5pqh8trPbo1K6DGXrQKhJjtGebJWJ8eEix9cVSoKWjVzsDznHpNrkx8stauHGkJaPsdnH9qttAs",
  "key21": "5D1nrseszrC8AkfCbr3dscywQ9nbdJCwHijHDHkLqMxkSgPjT8nJ3AoN99pVLH9Pquz82jF3TGLB8xFT3UhXFe7q",
  "key22": "kVzFzXEXkLzwjLnrNSCn1Tx8Z24a6ayZBBeRteCuXc9LJVSCHcbB52JP9p5tmJAVtKqfdKK6MPFzfZkLJHFRH3q",
  "key23": "4rzNdeMCv5uvX6ue6KBSm9xgRHGeX5EtQQvMo6eUBmR6tXVp9UBtFsuuNodnsBbLd3S1dNL7Zmpwp4EfhexEGYqk",
  "key24": "4XEcBZscpw5Ybih5pbJaYUHUQ6f8h6etZG35pyifUCLMmA9cR4CN4Jyy4Zo5iTEEfLFEYaiQyarr9UsrgKNpcfrq",
  "key25": "46F8GgaGn5WNRxsc2NnYyph5n82XNVHFTjoKbzxjVW46yr6Ut2QLWMjpG3Fhws1VtvPWDgg3gQjfCVsUdRWPG444",
  "key26": "2QfpnoF8wYTJWovCcXm9hYUa7ieixZGcBt4hwZziA1XLS9vUHJpmLZkgJgkLpEbVUy1DpFfp2fbXpFaLNMipnLgS",
  "key27": "2Jr34NT2GEpvmdvpvCgCxYgqbyMgFK1WoRSMZNx6waWaMzMxXveaAYrhwFMaZpqxAjWT5BZmunKmeMkasaihrSUJ",
  "key28": "2yXr3d39qdvQkQGiAjiHAps5p8xDTtCYeba1fEhqwrQE4ifKuquksCXBd3LduSxuQdfhHa2B6u6Peyb7ZKnygUVm",
  "key29": "2nNqGfA9oZohebcPiyrTgwvQfaN7jcXHPidzLvvhGqHK9rWsVr43WZbJ18puYG7zXiSNEzurhVJsVgz3JuybTnyr",
  "key30": "3QZbovPqpPLyoB4civJcgdDmx7ytCCFrpTWPjWhJ319e8BaKDPoHbcEFNPMTnTAB9svM81r1MfFzfe5c9r9aaDYr",
  "key31": "2Wf9BorHFiEuu9BtAcyXUHUquR6SciWLEDUoCGu2CiKSWYicM5euaftmzvuw9D1i6X6mDCWfZ7P3oAah4RUpwE6q",
  "key32": "54jvN41Ee5viK8hTRnHrgYymcm943ijq1rVrEierLd299fzjHU1LcewSMTtFrWLsiDki9wT8pfwxrEsnaz2RWp11",
  "key33": "66iBnQRYdPQA5FFcEKGTb2rAPFcXJ1aLtYFJRi98PBwSbfnDgxDu8KRshg3dHf7ghwDE1gLu9MWgZU86eyw1EYF4",
  "key34": "5jHMNpcF33s7vDg3novjs53iPcWE4DnB4kXm6KGkuw33f9wxsVneTeCYzaTYRQQUPdq7b1k73GNVLxLLjMHjMDvg",
  "key35": "4VY2Z7UYdWLV7E5C8VsZmvxDqtotC6xAB3JSk134pcRjD9CgYNNKzDgsEicycYVybwcfRuF3zqLUYaczzk45bJZz",
  "key36": "2zGweDk7rRZHbSgwaW2ua2JoDEmrU43JMKawPX65TAXKLffTxMA4mBBEsBVy5Swq83LARsGucNMVfHxte4N3fDcy",
  "key37": "3MiisjcKpnuX4RHYiGWifnjZZH44zQvvjxr5gbvfCNSRC884BXcuWPD2LD8JkUYTSjvXFtwUqQPvWdmbxkFcdJR6",
  "key38": "5wfJH31yKvE8RYNMGontoAkvrpxJJ1qDCbyCcp4f14hWtPAviu8n7D9yJDbKkACiWwNAEbhJ8p6zsSTutyWJne15",
  "key39": "27Ta68fqPS3r43F3Vs4rrh8NGds9WCqDz3Y9ADujhmktokxLF7SroWEyUKKHZUJpnBzdCJZF4tb2jEQJ8cFo6xCX",
  "key40": "5EUTJCu6yeeTasZM9EeH151mt7fPCtxMrTeC4TWoQvnnk3hY8z5KJYuRSuerKym7mr12QGcCSKqvZJyuxmVejgJn",
  "key41": "XfNYT4C1zVBTCZu687go5eoP6JS6FGYwQjYyJcErW99U83qi9dKbxNBzrN7fcEYFFrdbFKwMKtv7CbPcqzM9hSd",
  "key42": "3AsAjLkSEXFnno52m53FuvuKWvEsvMq8u3FiNPqnxvJ4tq5vCwFhFwMNicJSZQBHvw4fXgXzsy6573TmhNHz3ZhY",
  "key43": "4jd9tc9uKizxKqCva7z13juXf7W6n1yJC8Ahc9cG3uzVcM1Yiv7xWsGntS2HXj27vRgD5ALsx696mdqZULH7T5tk",
  "key44": "283uvoqAGixeA1GkECkVLfGBeDGc7NoyUGvX4PcTCM9THbSFnxLXdskHoYn8pmFH9cgzMc3YHWATagWmkxZtnzHV"
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
