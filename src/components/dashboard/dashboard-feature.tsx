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
    "51L3BBx2A8CjF5JXwMe3jps4Ruz8nZsdwyuXR5SgAURutgq832ucmnKHDPrnBRXYA8NUXAtvdT1AmtVhdmwjikbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qv6UT4nkv3s4W1vHvLTsBBuzGszrPhMNCXRM1Qw15TmtidY9iN8bvXdFjHcUxXj8DGiGi8od1LvFf4eMFxsfkM6",
  "key1": "2LnxS22coq45LB8tu3i2pLa6LdAcvHMbHjoaDGW64nKjMjzESu5F1PMLijJbAnhBNZneQDfMvX7qN2ZM4oEHgA5M",
  "key2": "66q3hYDTLtXYbLmuY5ZxAepw3DagxfaoMdG1yCdZ9gb2fvnAicUxAskHvnB8Bfx77KfoHK3A5bcZ3hUVqJFGPkyN",
  "key3": "2dsrj8HcuDurLuRtWj4cJhEzXXCe1GwWvQLb3UR4eKEKoZYPsGg3vWKYh7QocHxoUEGTNpBshoQQA9gSk4BHZxHe",
  "key4": "2FSJW1xmXhPGL9RpTRNKLLGAnceKPALjBoH3CUzuhNLz5iwuyxnvnVgH82jx5yqfydZTaaJKoYCTzux7AKNgvt46",
  "key5": "1sY79efdTKkkFrEoVr4aSfntqvLsLLJypKKJPnQGjRqVDq3WoiTKgE4G6tF5wfH8UMSSssjzx4YU65azGktkYkJ",
  "key6": "2z2jnrvEDEZwU28TKrhsRC1miYhn8C42F2DnwsP55Gyt3Dzn59Nkfat1eyxfXetf6pL2ZgW8Se6CKtTfejVmqovX",
  "key7": "2hDfsvfrXZX5mBnXA3kub6Z8X5x733z5UFc5crXbkgU6jHAxEDvCbx5kFX4Py7FQcHUhLzd55hMnz8AeWBhMMG1i",
  "key8": "2BPM8LTEJJqihLvxTWdcNdapiTzkXLPuwcLN4AAv3gzeA6oE3iSLB1Twa53adUtnP9MUNoARqFjZu4msVRskempW",
  "key9": "H1irNPGkSkGagqRXVNw13bg3hxszsk3YZKZdxEooEybVkBETtJ9txBAQh5QmZBknPvL9a5mxPu5EaRxGZzmxFuf",
  "key10": "2eg1eSK8Q4p3Q5W65Y8bPLYKXrm7zaKLetjwe4ccPXK4EUTHbZZW2AgnKn2noVbt7Srn6Y8MMvA3eMiGSN11gdVv",
  "key11": "4hR8ZRBuzLxjTU3eazE5gPLJA5KimAZKBUMgFkv6JyD2EKoXB4VMoPiE1z1qaw9nLMW9fpnBYXAJcUpBCBY25u7B",
  "key12": "3TZHkDmuHdKtf4pwkT2mYY1UFSbcCut7wbLRoNthUxWt7PKYdsCvRShhB9ahrSDzytdRhRjZxeV2zGJVL3Q3prNK",
  "key13": "2okfP8DPxPbHEt1N1fqxfBpoH7drRNLAoZLNZ9BMqN4RpbAKNqZpF5Xy88rkQBLjkZq519pQ52jDqZJeYnEYf9Zp",
  "key14": "26636GsFjMTpD2G9e6gvjNDDS7auorJYwpxgr966R3V8yyR6Kn1wMeL71FwDbEvdNuXw6FeSCvojC3PhnvMspfJJ",
  "key15": "3fD9eNWVnxhYqVUWCthquGP4nF8qPRjWTJYoZH4PLh9J7zP6voXqyHw1VvnvLqE16rPVdxZFfb4tJhns3g8w9bAS",
  "key16": "4tbGVar7GsHhqpQceYizkCZ6cTdS8gRbDEThWshSos6i6xD5iH74ag9h4G9BhfeGGJbJsXUjXe6Y4LxmjSvPaChZ",
  "key17": "2vvNkUQakhEtXpBgN2VXNw6nnt2xSrQmCC9nBGhW9WEkiH5fUJcHxbgns12uxL7ZhkhwcdPMMJWEoWaNwhzuGQje",
  "key18": "4v7ZwHhhmaqc6aad6qUSwuLgA5crCSawaHg2Kjs5ATSaur4NYQ4o91qF6pCuJMtqYXM6ZnmDpSUyEDmrefLd1n8P",
  "key19": "2sLHyoY2N9zpHrAnW8JyngqHw5o5feogN9GHf4c7jRqHZGhUdTQLdPKCGo4cAv4nZn92NxnaFa2LR4BVTn375gL3",
  "key20": "2YATZLn8ozfiT7vi1wxqHNpuUL3xU5D6JUSWhotzLpf8d98BELs2G3utpBqHFfH2T5udVrMgs2g1DmDQ9XWtXB4V",
  "key21": "5zqa8c2C6LZ4zqnf2inwaHzbopK9nubt3Tt2fER6hHwtPytAsejqgRSpyP8wsj8Uw4AdY9p53LqTqTuWUgRTggD2",
  "key22": "4jCozquhMnEw9F4QkHAtc56tYuYNCD5GdrWYYkAoUora8iHSfseNke4y8GDkpXBwMVEwUAKx8eZ34gAENZmq5hG4",
  "key23": "3v3QsoctPADKCdbkNgQEBHvwt29YaDjnn1t9KPVKHJ7u3RTMwfHzEUca4wRv49HJGUHAnnhLUxig5ecn7o7mGZnc",
  "key24": "4NLdTYfGVZUSybtUamCMBXKtiJi3uoTzCJcQTTkKsV4Jsh9MvchRcv2akrTEAoXFw7X1SbhkMSSnNhXaRBXkz5ee",
  "key25": "3Rog5cM5oKxxr9w3rTZUJJWrUPsKPwcHooK15At4uWHCDxE5aShdEF9M6T3MnjtHXdJVkSVPHyQzQPe2CuQ6YzcJ",
  "key26": "2Xm9REd3D7d5eZYFwvhbQ9cDAWKvHHanwZkLYjbzxS6xv5tPrdqEhTuzZzTXjT83K4iWZ4MxAQ37rN5LPtwNpMeC",
  "key27": "3XSKcdnPV1V24CETgTuYDLqimfCTokBCQCHj7UAbq2z47AYBw48B2BEdAzniyZRkJ62171s8QzXCYmpPBWXAemQo",
  "key28": "43qARyH65beBjinbmCoF7T9tiZMYjR6vHyw1yudZoxknMqEsvYtgdWAgnKujDpggRM7wuevpkMrMevPK9JBMseaW",
  "key29": "ziD6hSXZRPL1XmPTDSxUmQEKKR1hY8VMyGydoFmGPx34D2ivwcfKQoww6VJkEgBEoYAjPCtJ2x7D17sUMm1oJ3T",
  "key30": "56M5wjFRtEqwZEqXYnnu1DKuUo6X32LToQVwKP6LTd5TfxhYizHv49pitq9WGAf5nQjHQAddsaVyz4gxSD47RMsH",
  "key31": "3d4ff2zwpNt6VxWvJXzS1JUUS5nFmoxqd2vfmwRHUeqPxBK3SHeDjm3sPbkdsjiSi3vRofzUoc8gbNzVZpsnR6rf",
  "key32": "4cB1kqQEVTcWk8v4tdRhJFBi9M9Gk5bC4EUTkzR4t7PYKfv2U8ciPoMKUqi8nVj4VxPpdyBuwF9xk2mHpscxzYjN",
  "key33": "4bEmeym6Pq3EjEonYDoghHFkpC8qEdVCgYJXPAyuGu83zArBgKVsgeaiqgB6E9dquuR5MPeRx2HLhHppZ6u1jvAt",
  "key34": "3D9vtuHobnayANRZLQyhd44eRu6BwMLqCdYv8v4SqgiHurq2qR8YohnTDeFMkEGDpR19rYF2UKDg8m7xoeHHkWjE",
  "key35": "4GwS1kswtUVdSVQMrnJCEsbTcKMwWaDMrJ9rjGz8BWVoVvzBCMppyFgNaiPpkqgsXA1FezPv3cwP1Ck5mEUV5L3Q",
  "key36": "3ZcP8vFuhA45sKVzxZ2YUxkMEpo3uToRQ17BjUg218UmZu2Aqbs6krc8iHDatX2tq6kaLeb5riUSPdpueBi3WDf4",
  "key37": "4ZdA4LFQNKcbmVW7EsDNzKj3vrd7A52noctKajXsfRysG1y7P6C9FnJn22kwQXdArDKftL7qkLPKLHGJXcoVojwF",
  "key38": "2m4AdY41x6iPWgeQAw67i2LmLTH4WhzLntKDJoNq8tMvqRU3MLUtbqL2wMHGY9Yz59pA1HsUs34DqjRQaUmUKcnd",
  "key39": "3ruUJ8BRLZxVNMy8Lf2adKTt7dBKPUBmrZmLaVcKT6a1bGxSD4gd6QHUgHW4vLWB6FjAHVKcw5vridcEAWfXy2Go",
  "key40": "5ZZCuqUP6GXz7WRexTK63Hsm9bXuXYCYzjrKUjz344mspwGjimuE3orcfHjaGESDcWSnk9FJi81M7z25UoNLebfe",
  "key41": "2kaDWFjqXVpyyZwLahPJ7zyiePox7WWojj1qwqQW64ZJ9qEQgJbe3VmYo6XFt9MaGy4AKEsXPtUhzPYzyGncBJkL"
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
