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
    "4JXtamipLqj8AvL3Jh48w2tYPSkfoHrezeRMqmy6HBVNKdhRfaY6wgPYsXTrRLnmyGqnpL96CzTFPJ57TK4FBwjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PERNwpwyU9HVx2brVUQHCvKnEaiTrAMQL2U4tb4eQizVjPCcFfJFSr73fRd7wLoEY1frgejKCdzNBcvE8jj57T",
  "key1": "3531ZLU79WrtwnDcghtvvXGWHTUGyGPeSVRHPLLe8PH14ZVhYutiBkan7P7RjJEMaGtQUVketUNnWjcCZ4o7r1Vo",
  "key2": "4rx2ZytGeSUcVLNetCM6X9GcXdPyjKTnEP5KSDLVFiswse5BCNf4e5k2TGvhGRXJPJWHZBGQG7kQWbLDeep6DWj6",
  "key3": "3RtxTYcLvha8tYjkVSNYLPSPkxan6kBrh6VXEBZgxqwj8K7xpgkd9yTZxn2y8jspkFd1ABjagozaQZLnynvU8nkE",
  "key4": "3kz9vx27WhaTzew2M7bACHtbgrSZYopyCxRbyYBxGk8V3D7G2jMq4JZEH2HuRU1S7n4LyH4MnJeVc8ANfrFpwKR9",
  "key5": "4qJQBVSp2aZGvMPwWbyGh362aX6R28oqABJrWSzXMVuKWsbZBG4kxzP23y5uRnjbWKmZLaEXetZwS6axhgC5Esu9",
  "key6": "3of9RMdFQEEK5DgXyTmmsrBbPctr7ZGUNADLsFcB4PYXoF3ZeKYkpEjxcqRwXY4PKGepZDWaumtc98hzuzgA764H",
  "key7": "4gWxQv9k8GAog2A4bWM1i7KmDioCx2ztxVyZqyrz7PonrDD4NrFyKBR4Wdpd4KwnhgBnLD9nsMYqWYjX9DKuRenc",
  "key8": "2QYSLZyWjkwPckfogeqYakdKNVfxNYBfsYXMCiChZTbRsujqmqEh1vKk2XxpaRvKRHswCU9E5PncVdwGg5jrA7ti",
  "key9": "g5eHMxi1BsjVECqR2iRbWEmAC8wtRTsEtuoxinLhBWWGcEXW9aXADoXTUfHnpUujfK1u8Ebbbtk4WWupVZJAFo8",
  "key10": "313avz3WqcQhxM5LDYfBi7vo5TNNfFK2nVHkfkCpr5zkMzqr5g5ikC4WPrFHifQLkEj1TGwm5rsn318yadh4Busz",
  "key11": "3qyzSd8AUHoQFXNUJ8LoXJccNDB2koMyeKj9Mj8yPPjCs7do658LLYQnoqSPfhPsoMt3iTtA8qik5w77DP1Pooar",
  "key12": "5kwmxMYT7BazP4sXLb1ZWU1AcnPeoAaQJkyeHpRPJPoQBoALrTzpkhnfUzh2YwnYJmrt4kwUiooX2wxuArCqFhbv",
  "key13": "3AoipQy9qFswNiU1TPnPTMLqMzPoQ8xsvxvBhsmpH33LjpDzTiA4kWiHVRLU1ERYnRCNqsEG1sWowAwZeceyGDyj",
  "key14": "3yK3v9FJpnxEvABoy4eKJUSuT1JLSjSrZpge1iYkVWqkVmsxr7H7nyFpGdaZTNfYHwLHx9CFHLQiqUp5R4L7Y4u9",
  "key15": "2iKsnV33gxEGUTzU8koEanNZJ9dJX3drw4gYwqpcuP9JHxgnFcnueSf4bRWkQfXSNLdvi8b4Av5zmFCpPe2LSmDb",
  "key16": "TC6C3fZg5ntJHDphWLZZdTS6iJsmGHQgyDh9krB7QWQg33F4SLKogyXwhpZyS676iHsEgyYtKppScUhgAauFQNc",
  "key17": "4Db7fPVz554xC3zypAhH35wmMqvTy5KoRmEuPqAWZqmtbBbGv3K75B5Ry3gyY7YC14ySzQ9hfiLDudH5bc7kjeJi",
  "key18": "4j6kPXPo4QdZVqiLLzYoqg2Rq7R1faZhYjifvh3kta115KViPP7uwa5aKXpYHjgtz8zSUHc7HZzry4vfCidWhqY8",
  "key19": "32LUBxEGz9C4922iVLQ3mNKkFKkuUH575xDiR4jPoJJrB95ocpaRvbYn9KbmE8LoAbnM1vk4aHgtzkFFL8N7D7eu",
  "key20": "7BJf7nsfnzP7Ktgw7XKepKtKTvoyJrxLxCSwB5my4JPaRW8rnguhaaqx4muCXzy7RqAPHD8ZNza7WqESAeFh3jn",
  "key21": "3yb1DviisKLM8uXanAauAntU1RbTWaSooHdpH34hz3SSDudkM2vNPzzU5M5oCQQhWnZxNtC74jvRWE6h7S8hfjy2",
  "key22": "3DoSQo3f7fY9k2Q5sj1nB8jofX32D944xJzYBqCJDyEJpqxgQJGtUjNzbbFZKrhy9G4j7osSp6R54dKWhwAPhRFG",
  "key23": "2nbxjwVSdQGvgbnRysAZYBwEeM6a1QZ3pQAJ4J5yUk8jH1LkqxeAJjwZENSh1ub6j6o7aUfkfvksG4ZeQxmjGRwE",
  "key24": "2GUFCvuoof3oDJCsiqDFxE4WG9ocEuh1d6i7MYwtMT9B6C3iCrYPvkkhou1BjPPS9YBvkpX3SvNHp3B9Q9D2Ucqr",
  "key25": "zU6vDHxhgo4sBrNUjnernCUx646GYrrQEpcgDsYv5vB4aNdodGWZCDm4ZmJq92Yg3Qgtv1QkrLARrk4V7dwrH9T",
  "key26": "3bV2mN2FkkjHYAJXVYYdBh9SZkDEoi4m4Jw5x9NmkMbDDysX88JLZfGPj1bgbX1yYUosH6kBVHpjwm8bhBScWadx",
  "key27": "2iTkg4azjJtaUQAPd7vFft25rGEWP3wUVhLbTxeS4As38pT2BxWWwtBgYo6qqFb9zfXUch9VSbNdjmtNLYmucD81",
  "key28": "5Gs3j7Q4uqGTbNcHW4yEoaz9AFhiRPtfYQh9s6vyUdjHFYWjynvZUn8vHPKnoVjVfJfLcgympeVjbtxr4sAXp18Y",
  "key29": "2MFetHLgYEZ62zmZ9ogtj2LHJHvicByoko657cenzSKxjPJ2hExrTXpvx5JdQSQEFLiuwy5NFPkY8SErWyMDXHvi",
  "key30": "2jhf2sKADWUYS5vFe7dsxECaFKUEtvgsbPsUTvSghVjcsU73bhvjN3UUUGp12n8bEoWLwa7B7ESjG3M3rj4fMtrc",
  "key31": "4366PZNksXikRnX4XyUHCYsMBaVe9kgg9PvCpLP36SsMWxb4Xg6cfGfbxua67KX3ESERiQqq9UUKDaAfuVvhYAAS",
  "key32": "36YfgnQgNxZpsY5u43Ta7GGwJ7Vv5r73sNzaz93jbjFRe5qbhjo7JirvMwTt5uHNXccWPwH7eHraQ99wUFhgqid1",
  "key33": "5s5f2ETiDrbDjwRPGJtyn71TwHJHWrEDEMd2Le9W7Sp4Ju4wFrvPCFzGn7QQaYVE3TGhogNp5qG3oU9oAsasM1we",
  "key34": "339b3b3ycaiBk8hKEwg6SwfDYJj2nw4JFSQSfsyhu4qJTSC33giWCLayzeMuetPJDAvH6ws9R9htrmrqgYwrDePn",
  "key35": "3KHf5oT24TLFuCoxUFgdgrJtndcpQDNPpAfWwNjtBzHXhWhYxChNUyZpdTPnYYLHgyE48RqohPPFqsnZuvUA5WsL"
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
