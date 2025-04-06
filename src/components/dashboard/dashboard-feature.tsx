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
    "3ryLmzttX3gWdXM6BdzHo2ZmdLD5zAwuPJRUpWFNRJtchCudDgda2fKYNZiubm6jF8ateUtSjpsnkogiuPz9zUov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4AAo6b7JLKdmG8KmXFWY8FfQhy3GtJiQFTqpvunjAVvp1Gs81eER2wKBWkpNnCXjxWdmsbT5XvTRgHegdQiULT",
  "key1": "2L8ZzuFNnthzAncgAHpa7xC5dGpEW56ebxzpLCTsHYiJE2PHwD7D6i8dXSWB1hRniFhzpcZchG37UHW2EvcimN1j",
  "key2": "3bJ4uJqzQHxZW7e5vwy9oVd7w3NAgQyCG4UHtMLbRPvMwmie3Uo6jeXYqorVUzJC9PG1fcqGpqrthKrK6qu1Zqdu",
  "key3": "5Pacn9fVBTAGu1c238fBBtTjsVLrg5FQiMCZK8VtSwdgvGeMrzWJw4q4S51YeXpnt2KHwPe3evD7JSnaCMvthzgP",
  "key4": "tH9Jai5W5hwmSxm84nmxWyDkxreAS3N6oP73uA1fNwJbAWPHNq2Qx4YvMumEdMnKxJaBTvDM1mpruB3yx7wJpFF",
  "key5": "3CLN9s9AgWbz6BiHJ454XQBLzyj8aeWNAiLX2fdJPbzHvsdTazV2DA4KMcW9tTc8tBPiWDSncEksVGiU8jaNnBD8",
  "key6": "4KhKBRCA32E4sRRJTjPQQfbDnA2K5dh7Y8fNW8t8uBgj9usAT1AU4R4cyH4aCv9fQYZiuy5TTPXhfGFQFV6TzqTJ",
  "key7": "31YdjbqFeTZTdqTQN9JBadFpTCSSW1HMfuaEWEiPnKX5A3RLb15wTdUGWm1bJ7NQqfE9a8wxoPaaBM6bmUUpiYbX",
  "key8": "3VaPZcGjVuHZ4JmDBmNq4oizueUquEH53rjiP9vhjpQ7GcN3ePYU7rpNdBEQPzLrLZJr15oHucaRGAsCNmcYfyDA",
  "key9": "4TJZmV7fQD4qvPa6Cd28ABmt9thetadCWwNRLYiQQ58vWNf2ytVEsZAUoYUoDpFUrd2GeGR9L3WcNEbx9X4B28wZ",
  "key10": "5fP99QC6JGJVFkwNSYYCAVWTVewKZ9xJh2eCnzphRQAbhPJhovrZ1Lrj6esu4nbn1E9L675NQuYscnkL5199JU7j",
  "key11": "y2We2EYwFrFxYQaxFenSgVvu23h7thVHdq2ARZZ1kpbE9ynYW4uuWzSwBw7VG7X7PxLWJxe2asSYWJ378jgCXsD",
  "key12": "4o33esGXuebCtWxh1Sv6rC2dMd59BKgnwZ7R42G3Mqm2dR84W6sLstk2xuyDAczNEJxjULK5SsaJVH7ic1u9U6u2",
  "key13": "KpyYKenCoVUcjF7XVt2ydeeaF4gR1GQp8d2uADuypc6byWoikU4mewAsrhh4HhMYKQqWAoS3cCbYy7hznf5Ck5q",
  "key14": "Z4wH7Z9T8hPG8bEMcrwLczic1au4WpmUQb5wTZrJdjhkvLRuHKXcXZcdkbug3ZqefDyYB7p2aeuuMXS3H1iX2HZ",
  "key15": "2jCFqn6srTQHmT7DcPkuLdg7F5zQUKHoUFzpjfjSyooBvLBwYvNgwk1zTo3XLRsEJ4hXBa1UYG1uRjN8pqbK94Zb",
  "key16": "2C2nCGCY9hfwuTxeSyXmGSa9Y8kN9c81hkaD1e8APiWdTJAx1DF3gtQJmZ6NWJe6ew2SFRUaYRhgnTaWiD4siPgB",
  "key17": "5gqm7brwjSTWzjowT6c1gXezHdykwpGs2cJsk7cmNSKNs1BWGBFipsSi82jVASf4bMEJXerZRaNDL3gGLVkWYSzX",
  "key18": "4seocyDqgsHEzzeZx4K5eu9DHQ5H9LpbcMbSjh4gBwvnrAnU1o1wG4n7HcDUaz666VceiWXZGGN4RtjXohmxo8rV",
  "key19": "3pfxC6Sm9dUT3V27JiQvf4cR2LrXqEjZQuR7ofMbS1fbCrrQdqfYFfKSF6zEGZNnZR2M17SLSe4La3kVdnKCGqyT",
  "key20": "3nQTNnJFGiiAq5KHgrQYD5skPJVEJbDuFzv7R5TfCamWahpDAsYiZpksUQ8k5eBkodS7cMkVjFxehfQ5NMd12att",
  "key21": "EwGFw7tmuZD57ikAkP522Sd4su2d59rMQiqhuACdPktvvsFwrheidVE7zsZZ5cicRyYjcJDEj8LWrGAmHo7uUgP",
  "key22": "5UVw8K9CKyBxXhx2fzcQQvVnxyzdsUHM5c5Z261YiuPNr7beXwfVoaQRBiFHzWVQdbDNVCPaYbwrR5AAuVMn5Ese",
  "key23": "5uswfcs1N161zBCUdpYHFzc66MifFMbpaLjfen3Jif13moEeg1GQ8Bmow8NMGDWi8a9ubMCQbQuomGvhh8QYPAh6",
  "key24": "ayTtxd2fGjjE2mvvMtu9WwJtHzpWDoiJnn3PPhHZpatq7YZJTSiLXNMYg3pqmV8DfXQ8pSj3cG8AsE2RwoS8iF6",
  "key25": "4ppD7wckxTYkeSYScKCP3DNKTMJSF2FUAvQErhji4xkNsENEHHGNRa9TTpTjANEq4g8fVFBxxnu7uSwp92BQD7va",
  "key26": "e6kDTFKCZuELH6k2sGj62u5o5v7o9c4M939NMS7qhk3Dxcph4UVS1Zy6FMVShmcNuC169hQ2rSut96VM7uDy9ak",
  "key27": "5qvCihfwT9Vp4EgjXdYgVXK5dYqaZUdSefJyjGEPd1kG1q6sBfjgKJBRpWmoxAX9yUhBkaMXvrQffW91P3Wu7ip4",
  "key28": "2Lz1GDcgapAcH6cegcbFnfcjENoczTwCVT4o2va8NphQGPe2TPsuG4tmjMaBMA5H2ATzTfzSJV122RYq7NsH5TzL",
  "key29": "61jo8wQhBcmz1TwDf2C3f5MDeGp5VbrdL3d9cTMLzp8fmrZVG65Hj3BKyANE89JknVPN1QC3AZuicfFAmBC9r69m",
  "key30": "3JMfVEiyjL5DZYp4oF8wZ84WwR5DoM6A7dJPK21gp7cBA6kQMQx6oK1M3wo8ntFxrrJ28Rc4L6u6A29NKXqtDZ2Y",
  "key31": "sWEM6v5fXTqCGtTwL9JABHZaF4DBzjYNgFsCWKS7DGm3hJcc1keA4bpB6zr84nAvqifdJtJzs2AjnQyqKenFQku",
  "key32": "4Ku9K7ALfn5Q8X7QxrDjiDqsh3u3xi9f7BgfWyia8HTwLwueqXWNji8LLJeYP7HuUiXsoxjKXmaoh3tfc1Pt231u",
  "key33": "4noqaJZWFkbhoxB4ZagVbPLHdBjnjtXEuLdk1t1XWoGmCVrWZhbGBLHy9VMPPqbkC7e3qwR6ARbCzwmWGzdKqyjd",
  "key34": "VyGtcuqiAXk1EUiku1np52tA6AbgeBGLpuofeefWq3jYcJUBBwkJ9TCfWGw69G7Nao2Ga34Yk3TYjUrUgTwEfTw",
  "key35": "if5Y1iEskDhX1fpG9nXwNzKEsL6sx2xwMf8gg7v1U7vs6TUPPUK5ghNxpreohU8zNzjo2yx4ToTxu4FoRnHxqwj",
  "key36": "57sX5W5SXFzvTvTBrpznZbsBDLwSY44csWPfEwAKmVLeEuEi2FtWzk55tgFJzGe1T6Qhg9PHm663BHnXxwhTZ2Ue",
  "key37": "gxcBuqSGivP2fgUHiNXey3MsW3foMHx9Eqa2xCF9kbTzLiwuenD6KMuuW9xZeMreWZRyhj4p66YtLzFpamkDcLn",
  "key38": "8dcS3ERuU83KDnpfyFQ4GojgCrLJwKJ161GJGWijhZr6HAzfwp4bhFQ5LoDY23spciXrHeBcmUi39CPZNhA3xKx",
  "key39": "X6HVKsvAs6WgfdnLwMBYGiBEV4uaa1VPHPyNxAEhTVfY3eKBEt2bDQK2utyaSTUy8uPcRhwQdqcBM67j7y5UQs9",
  "key40": "3MjrkQ55w7ww65xsaSwZp1tpdLLdZ3k94hGzf1hTWT1yE6piHYCnfLZT22KoeGhYyfLLGixZjDDroLvzgWFTQvUe",
  "key41": "2Kad36paYFe9jVW7kzwZa3F4hjpTJDUiw56e27VT47Eh1FzW3BgY8ru71MS875adAJ2QDcJGWkyeKNpau3ks51UN",
  "key42": "34BZHkEtgLzxggCSMf268Xaz7eYfTb8VfzYgoYrNeCdnBjkGoXgjDD4zsVZN7ibxNA6k6F97eE6WjZA44pEWdGJ2",
  "key43": "2KadrxUbo1NkQL1PmuJkPHQgta44Q72nTUhgaRsPTu3sxkjGrWwTf8rg7J8H8vpBETALjTnNEWXzvBeZXfRUz82x",
  "key44": "42hx5hZ3WL7qepfnicNH8xdtfn1iXVDKCeubon4ANvtTvg6AMyUDeAGUYKsyRddFhm1MvtsZCkBwrVijZGfM8yjQ",
  "key45": "2eCPGr3TniDMaVnTykyAFAzXydsSekbhbYLxiWifncoBP9KAwrbW2xXjkpH5aDmy92cGecqZgXDgjRh81uR8Q5Da",
  "key46": "3equo2mReYgLQoj725Cqau8tiZSKFxNDTjV9zfLriTVr1HkhmZnAZ73YbNSPoMusz78v29tM1PmgSf6Vsqesi1eZ",
  "key47": "52Lmk81RHFzVE42vFnBdR9EqKJarmkU8szxqATsaZuYBv8jtXpZyRyjT76CNZT49zakTCtgEXdMDR9fAfM5drPD"
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
