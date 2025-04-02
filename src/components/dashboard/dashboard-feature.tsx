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
    "4R8vpAC72DkC5bGBMVWVL2WFMhkNeZETjG8DiHpXx7JS9fvtxHmZmVgB9haUB7LwZ8yV9usDiT9KcpufvAbm21kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHsdCsxWRY3VKwhSrDEn6ZR9CyKoD1FJJLMVAAigSbm4hdGnjstvVEVc9zg1ygYbuF7T4rCdo97mGiQra7TVuuz",
  "key1": "2eNdmq9iMNSdbEuCnege9ezaxZhKHoxjy5r29hA8ypV7U9Q4Mze3YG4vpnqkFaxoh9QvDN7pptjAxk4BVvpCYZM4",
  "key2": "4Lqwm6QAexKBMzTggeBybmGL2B1Udwmronn2rUChPXsShY3DGftSC1VzNdurzivFuS1NYaAL2C4f6eU34d6q1y21",
  "key3": "sc4HfkDkgo62Ajje95UZN39fJLoLufNazi5Ny7J5P4r5i2cvNy93BGkVpC5fqw2M6BywdiFHr21sKK9MdSmXhcb",
  "key4": "sk8ewU4XgCoXgjxsvwhcwLLFWvaUnA94dyqdKvGMHykHeDbHvFqsuPUyRgzSefutNGVAv6ZJzhUrbwHPsufMuY2",
  "key5": "5jDpCDiFu5mkPTEGr2AFewbtgSRNGTeyLoVp4eDF5hHsWfbW6gHfaoKvGwUna49sYiSQUZh6pqVVJyTW5aHHhxz8",
  "key6": "2tmDXQ41H45ka6UYkybd4RPMMxtq7HofaDDjS6SZugNBoDFrNvBwPAtpc8EzVGredefQorsNaZQ7bwNQiv2WT5v5",
  "key7": "2YaHb5iaNuJhW5L32YC98QigT8So3xWdut6wxBM89TMjk8RS4zjSQ2VueJdM8m6qZP6E3w4xjKDcGVgT8CdB39ZZ",
  "key8": "4PHYtk8US3NE7bM1UYHfY8JzKcNfcMziKMecZhRP9FwYbUKrURCgiTdnnoXxmGEj9rybTo5RYwJT3W7tNZF73w3D",
  "key9": "5zxK1YAZSpY81rBtBrc1erSxwWny7i8dzXNbvge4cfuRDoUCu7X1C8TcpGiuSACtm4FYYhmnis6ey7HznXwsUGCn",
  "key10": "2YrgvoyjT57zdmqTm7h87Yrdh7d6jZHZZefPDvZ7iG4TMuSq85wQP8JSZwQ6gpa6gATPJWjGpo5VhL6zjqeJbNs9",
  "key11": "3fjThusUkkVvB3aXcFF6QV2yZVZ2HdxPnTawwNVrfJZ3kub3m2951xUBzRQ1FSDLo52ThksU3YKbcX3mEvCE7mmH",
  "key12": "3ZwZm6g2Vaje6Q4fREqBL7N7ixMM7LdUGdPBczAMr65EMryo4qFgR2nfsbV8tH8y3P4KWmzxkYyJR1AAXitxHQ1r",
  "key13": "3ViW4TJeJM7Q2yKaURfbYdhxX8z8uMMvnhcXZ8LDdAd8aajwZr2Ve4GsHSvobqMbzXPWZSdJGD9c3tYnjzvnHCRx",
  "key14": "4FL9Y5VvdxEmWHE9EGYKDEcbZeAuATuTQJb777zsaiwmE8hswuDbegEKggW7x8piSgErJpDgtnw6p9g1EyGB6HmA",
  "key15": "3CQDad3izJr5xxkosTHXgMstP8chNCKCdbatY71zhPTVVGnAXSAJZviZkhp1r7kfy7LvMz3vKQBcBrLMH1QaMJQg",
  "key16": "4unAzUm26fd6d8bJZyJNWYdrLxMHkqaQwptEocCogmipM3CWjhSE1urJ9iHTmyNrJ3St5buKEZS9aAoi2qRFEfk1",
  "key17": "3SSEqpXiTdWayhGGVb7p1H6WiQVBi7oLPrHszC8CRzdNYXEWQf8Sm7sJmHPEZbeR5XKVCFPCYLX8RiZ6VjFdNYaZ",
  "key18": "1z38DSYUWSwDSRgxe7yU85xSiwuLKL7hLGYu1CFyDHExcEnpnNKuZy2vw3E8zXbg5R8gP9Pg8jhgQ2uB8wDvw7E",
  "key19": "5nK8s2wi6Gs838yij4Puxq14PPrCRPyp68xpbEy2Y9HHKYbMcLcbrD5NMZgdMyoYZ17JiUoT1UANDCVoL82Sbgot",
  "key20": "5gyyvmkCLynD3JF3dBbRFkYvrRQaiSP7n2ymHAqH6xW94NhwJU9LBPshMupLH26Kj5qeeBUwbWLxhQHZ6MnyLVAi",
  "key21": "4PD484MJMmzr2j8ndfjPZPD5sdupatiGbtzqWY84mNudgrXRL51ySGeS2M4ZvjZAQGpAvZwrE6MNrkRZxjk8HuQr",
  "key22": "4Dq1otG2TbvNdF1e1bBxj9NZTmtqmoQupUSrMSYjUUz8hTCgbyNwPC27R4855MHTtrSz8nz46psKfH2UFpb7eZVV",
  "key23": "5UTWpyvp5j1zWc5oxkueKt8aDHzVB4BDM2BETKs3HvkfChHmegThqNHgD4jBaj5uYjoBKosanUSmZr8GC35pC1Gm",
  "key24": "4rqmqs5CM2agvLj8oHTrEuXx6y1DsG4MncB3fP44fwg8yXNyokNjkzGnvkBwUryLXQwGM4CfawP85xeftEkChFw3",
  "key25": "b719yaDJ8jeHzG61pLua2S8rZ19y1mjfxkxK32V3nmmngTaB6nNGPewnnpKFoM7JGeB4XGGjN4h4dXSK9pasEwV",
  "key26": "5ShsrST7VUxRmQPeiR8hajAN6LoXJYXT7PF39msL4Nf1WdRzGZbBrv81MtEdvMzajRHdrYd964cHeAG6CrvL5Sfd",
  "key27": "2kFyanHwowdf1mWmQn9dRLxaHJbG7h4DJPktMFYvcESfXdJ9557vCtFifr2jacMafVf8j4ktua9svvxsvwTztGed",
  "key28": "2KJTU1Lt7Hqs3XUFe6QdFRA3hP1jCHR4NU47snfGeChA8WYB9SQZaASJJwvWmhy7McuL7UFKYj2t4dNsA318pVJ6"
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
