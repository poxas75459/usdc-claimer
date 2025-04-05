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
    "4zSMbNkRZ29fNzvjz8G9a9Zmz4wKfFZd32uybtkPsVvKa9c5bBxmy9Hygx5ryqDntqhvv4Aup2FGyHCLXa3PNJCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1nSzD96rGnwHNLcNZw8uRp68ppG29mVVJZ7Emj5akq9fXerzVB2E7HnVi4wUHKY8433fqxyCXcmtyRBaNvgiCY",
  "key1": "4xQALQYt8ojg8WqbboBciJufvpwm16UebNSr5QY6vYndQmhnRK4YZqUnVHpx7RUahPKzgCQT3SixRSzCBrodFihF",
  "key2": "3CrbBZD7Pk2WD4CeSLxozuwF4FADSxhwug3JQmhjengCiLqBdBtq3hmB8wX2JYY5HU58cmR83zBFayrM5ZydufVt",
  "key3": "2aKrVLiDGRV2q233npeyr3xJKf27CQLJp6AU5KDikNXhqJ6GopAuoiH9vA4jPqBFG4GQQAtYzPRmHSCL9LddAMSp",
  "key4": "4zmKTB7kGwQaNtrhqdE5EKfCDzwA6C9kAEEVSYLT53aPUrFHjHZRXdGLmtmaMd798srP9sPad4hVrVzMgFf8yNXJ",
  "key5": "383Q4C8u7THvkfC7M1LPQagK7TyUxMY7PyodCQg4bNsjk8VKUQBPYt6BZYDfvXywrp45tws1UVsfoFZbMpb2ANHy",
  "key6": "2x17A5jFbBc955dFsNP11NSy9gdCXJ4mvaCSPu2Nny9UAzVZTayKZzSUMybyYvfNGAU73xLFu6kA68NMKAbwdwuz",
  "key7": "4ZSafEXVj58JQ9VDKwNF56N2gqvyvWjpcyhDbfLvBAU6RR5n3ZbFqALYwcM67gPrzCiQnSqmQNzG4XvNRpWVMGCb",
  "key8": "5W2pTzcezQw1zuTbEfTqGxuNGg3Np9UvvwHg9Ehdofrxsur5ycYZaJEAHLsb9mdG6chNCEGQd4dsbZJHTw4MhhnZ",
  "key9": "T8RP26vUst6oUpCdWqs5EGdnQtpffLpkp4KKLRzZBXtmvoGxYH1zErsHHJPs2W3jSbnP8M5Dc5jzmY4Zsjw8mmY",
  "key10": "5PRxgpXD4VtSXc7431NXL6nMYGQ3wKM7CAcf2tCncXjcW7zAzocPg883b72W5sidvd3yh74xJPGLe3Nh835kWrZo",
  "key11": "4bHButaG4fKuN4153A1hPD8duUS1Y7qAzZ9MrXiiVFVtWhJScu9dvMPzFPvq4dARvWi3dJXtQLrUUdZbNL24JFoj",
  "key12": "5NYd7KU4DEuFWerJE4oCNSQjV7rMSw7qLBUJo4gVkkfbKLFt8ZG7wZBivdeiY6Gtrjz5ZQpLgfecVoKBLDcocDWV",
  "key13": "2EKyiochKi9aurJA2gtge1jtgMsoDDNu9ndH1znRjSu8eujFf2JKpFgBFmNtVBsaiymCgCn5DZyqTD1sNm5gPSnr",
  "key14": "3QtJE1Sab6r4S7Z3uMqpdgrdaQzLAtgCxR5qbEWMPsrG9xb2KPRzTfeRbQ9bd8FYDw67CiBoAe4wwtdxXKV7n9FF",
  "key15": "3jgiCnUiGGPXg4sZ8DJr5gGtmcjgLxzyHzgH1DF1qFmcau74TjBPc42KjcY1vvp2RDQJFrTXY29edcdHKNYKbuM3",
  "key16": "27QpfPSyC4MJRHy4fjDybbyhM6tnnes9st7aGCnWGNpaQkFV6pxAYoXaZ4FrbYra7HDsSf6ZDytcWnmqPVV6L3Q7",
  "key17": "3jQNK9TBPjjXpBUYYWm86rVvoj6cbnJjYAfwQnmHxXzZwZDNDGwhexCYhb3N41VP3JEreYoMwbjQEygay4qhzfox",
  "key18": "4BkHE7HLhaFuoaGEck1jFV2PBU1PscDaqt7BExq8cSHweCFHi2HWwo357S7pSWjGXAAWxZ1EkunsNL5E3j8u787Z",
  "key19": "4WHqiDfhoZNgJSXEQF8MddNjYcmMJzGjkcwvyYQYfXK1C2GxGTczzouaKCXJ19idMPchKQAtEKHEgiargZUyhtZ6",
  "key20": "5miMabxkMMeX3dqMiU95TaFDtHi1XUL9DCqdokAXVS6G9PDrV43Jm2rFKyQBdU7hMNKjvVSszciRE13skgDijNwT",
  "key21": "yUqDLis2jR2VY6R1XFqj6yVhiqqbJa3wQzJWoY5wG3W544zgZ7TLPFRGv44gUpMdchDxdzRky4KqPydedi5BEjT",
  "key22": "42WpbbCpR5QsQyTMdheKkxArhxw6TejGH5wF2U84KZA9B1ipLByhoCnaU8v9kZoMEFwESzGCKDUMTUvkifdPfC5j",
  "key23": "2EaeSY8CXH4DErByL9avfisC4XokMvm1VQHs4Xv3uAStjqHtUCP9xJcEKkDcEPdyPBQ955sUf1KmF2uuf5LXqrkd",
  "key24": "5UQDWCbiNFRoV9KrjuSFSKPzUfasP6Smtkb2dAdKgaP7tokFgYYdYt45MsUCjLqTqpXQpUsQjtqqL2HhsWhsEctk",
  "key25": "2kXXr54mGowKQLWCgVSSzmhMdPD8kCU2JaUzzmE5JnXjdqvrgiM6RBEkxxKohs8FeY8vQhzkvWjY7Qzswq6R4Dc1",
  "key26": "RKjdaaHRzxcdDzyBo5fbYwR2BsFUVRfoek1eq3UmxhMiWvMBeso6sTzZEudDGqkgFxPReL6iri4JeeQ24fd3PdL",
  "key27": "5RjW65gFV7zmHfJHeYQbU6B4XpVZUH6W5vgrjehcpJAVfjkHYhuqUFwRdFztxha44wHTGUjpqhHnD9mfdLMwAMmj",
  "key28": "3bCaHaPeEZCA1JxvSpbmGapsxmVeo3XVqaWc6M8V57HQxnXmRX7xeEjp1e5Jrwsr6TnXxwAJVNkUMJydcjhU8ns",
  "key29": "5UmH9LGsVsF3DtQgaz9uWQSsxaiMG1CcJab4PFCpKnqVtu4qVgmeNU825yBhFDeBmefH6v7Jf9JbBu6Lk6gwH915",
  "key30": "2t1BLMK1h45HQgRSsDQGDjWNG73KESDkvrjpd5wH8STujkSV3osKa4Xk8RZkF6sx7319arhaeMsy8JuM2RdHSNaQ",
  "key31": "5F881ev3uBaUD8GbgnCVVRU7y7nBNMG8prhsLPuWFngAhm2hc43gVgqocCLJihPaFdf96xoZE6BtLz8uwt88XTJ3",
  "key32": "5N2VJzFszE3m9WPbaffDZ81pscevtQiZhiYQgCYaRVGnSvrupZSnADFjgwJ1RSyJXVYjWrDH9ssMHxHePWWS6WZG",
  "key33": "3FEy9VQ1NhMMvXnzRZkcF9qPnd4Af7oWyDsFeGntNd8sVGJdXz91Pnsx7WtaJSyuxGoNZDVkgjxhPkcc4pUkEdXS",
  "key34": "2Pu2AKVspf9qDVtzK4VUzrjwfXBiyjFa4FtFeRjgENfeHQUvqfp4r72svegkTZoWMvZZP6sQHMvBrFEmta9Pmryo",
  "key35": "3XGiEVppB2g4gpHZRKtikRuQj5NksEAzcew7mW9D6Dtd4VtecYGKbptm1YysEau4nZdqZPvSxdDWBJK9KfKHKgb4",
  "key36": "5DpVVGWbqNTRvnifLF7FtsF5yadoCdqjRiXzAB24vp7EmUH4utDKBp2yuLysCRx9RC6UNNtUvPaYdYEjAMKmLbrg",
  "key37": "5jnCLVxWDW7NRKATcVNZ9ZLqF41JsfpvVXcBvVmVKTUTGMNL9dkL4kWkLWzwWN5Qhg5orZLBgwbN7WZH8UZpN6bD",
  "key38": "3Hi5nxHufxLeJ6U8togTjmZjmDBgTqqjCm7Ehq5WQWSazLtJDqPH5VNBSAB4c1csD1JnmrcbLjcYGSthfxysbPVf",
  "key39": "3jVx6ybe1JbPN57bNmrJELz86Xyvhz8DgZenwThLu6PjutBgmmmJ9Wb829oWdjhcvcz5vLt2N1CunoCuEgJti3N6",
  "key40": "3inPUYA6SQNA1BmBEnLRFF6DSmJm92WodpmysaFMcweaSkuWqvQMeDHvBgVyKj8MtDBrPTP6pJZobyGQmVT5eMR"
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
