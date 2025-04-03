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
    "PvT2gCrZXufqtuWXUJpsuhVs4uZxvJZJ81R6hypcnGXGGefYX3cKUZ9xhiDRDHcPgEo4mU4FKXkrwUkQmkQiQyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnTyqbwYTQVosx4FHyabaaKtLZnZ4abwUP2WHKzwyi2KmmHiNsYhBHJgRXsV6JfYWLLELSYLm2zjqTbSLtVAjyZ",
  "key1": "2BTgj2YFXS3PMfcoqXww24ZEP6FdzY8oJqtbYPKVDSeVor13jWLBqnZqnEcVtc1aG7tgFWqpmauWwGAyCjjKQnbe",
  "key2": "3gmsQ9ZyybK9KSo47T8griwq2z4FRura5GPeGcydc2THhe22k4E189FVBXumLpvN7sVY6xRshFZ8y4fceoLFDpRy",
  "key3": "3vHkEw3gaHYZd2QvojRtkiYQsmRLb4syYmxLqjTwU8crKYJLV48xZLryGPRqyREk3r4rK78gpSY6ZTFhLwGrxGTA",
  "key4": "2XACc9Ks8cfYCk34m55BFZyoWM45vURFGrvWMDkxoJ7MbtsHVdT3GwjeLue4ZreDhgZvvkdaUadixziJMdHU7qr7",
  "key5": "VwbfiVEZZYFoH1W2DcD4xHyuW1WNqcNp1e5kA9BXQtPjjQ53VPUzvaAKErZc4Q7Cg2vXMhMMH2hGtXNEGoz8oeT",
  "key6": "5f9bF95FD3pqeKV6wogjvyguNpBFfao1wjoCuoWiyt9BDtTEY7fHjSaQjA1YYs3dYo5KyuUMSPwVtMUhmqYyFBf8",
  "key7": "27CMdKBTp1antcAKzfzLGfNVUWtg5RiHGkv48SnrVRTgVVzksK9HuL2sKN12NsufC24gmogB9SAL4iDCQYUUeJ4M",
  "key8": "2g7CZYSvKNmr7nnvRE135pNSHv78vkPkztcrt3TC1hnpE1sb1fPJcuskhNmLwUisvvqnaEA6KVU6MgyfwX9vwMnK",
  "key9": "3MbMaLwxtNXrw24FckVKWyS2sok7gaC7BwkHBmmxfrzZgVXSj9ELW3oK26uavxgVRMKJwiBNZwAYFsnCpY42Xk8c",
  "key10": "BzRX3s4Rsri6dXpDkPtbmvhz6zibwiRTzuu6z6yvusn27vhrfHVZiQCvM7T6GqBKsj45W16UkWbbqaqj4iBQfD6",
  "key11": "ppnKC2dKdNvcEGRMiJdeRGcV8YsQ7seG49LcHZnpn1SKRcKTDHS3GjYVKqza1ScP46JWrX2QbqrEkqN7DZqh8dq",
  "key12": "4ttTMrbD2VfmwEPRyj3UdEhKg2cjGos5o9tKvsbEnX4kAB9Zsffbo1KHoefNt4e2CKrUFJfxa2c5Wv5kXEw8fqSg",
  "key13": "5aPgzrbdZ8arWaBwSjGYu8Zbn9aooP1NYw56yHFcxJWoqM23qLEFHF6rWkVD9NmRc5nXXys7v5wW53JMM7kFVuGd",
  "key14": "m9yKhtsSvcVJzPoWpb4DWAwp1wyzFnLSZ97pJVQNts1ikgKbkFK8CLxnzSrKS7adfs5bzq5fZjoaYa4mu91vwHP",
  "key15": "2JwY3JYev1t3HgpQPKhD4h4N1i2NihNFekxn5HCMnUYrAMpD5tVpqq6hvGDJUoRs5NQjf7sLgjRvUhRVniZsJFfP",
  "key16": "4fAV7TqCKWsPsn8LLQHxffLh7VXzWUHKxNhEV6jTwWeXWchG4fL5xPETysaMjN7kSjhiFii4B3wZF7vti7iFyuXw",
  "key17": "44fh3ZVAVLnNFFPe7yAUvo9V2PjbygYzFgBrK6EC8VKrkWqFBAKjMr6LFfopa8NCnbLvfYhSLhjQDyuvajVdxNRD",
  "key18": "5hDreVqsrSXZyERT8YR4LPLkeNQUk1yv7JKWrGGHhubPkKC6cJi2jMTZNDJhH47pg9z7PYoDMdQ9XCovu1wDmuzn",
  "key19": "3AtnveqyBX6BgRTrLqZZcVa3wvRcBGfvQLpCMeamPQL3eyUS3hmSPpRoJpTrK4wfPqNYawtbgBsreW6abuxztg7V",
  "key20": "tMoASDeP1jbWo81Tr58eLjvyKKTUdPKmZhswJjzeNshx1E1PaHRMZFAmqC72vJHdSGBYYmzsnKD68npH2VPoQaH",
  "key21": "wgKYm9fREVHove9uGUqtxWYRLU63vn2Xmr5eYmRbqM6UhP4HeXaVno25qNrXD3banBCycD4GYmouKf18dP8mYXX",
  "key22": "qbLrWYCzWxdfmhyc2DP8v28kSgU2KG4UA6LS4nYZFx11CX8xMav8foshHyTZKBoG7J9uo7gdGjzzkwvaptY4J6Y",
  "key23": "2ToaAba3QLJbC15ZQSCUZZoHejxFRaspKdHvjnqThVbkwVC62zLMw2hKKGwLxciQGQDypHSyv41r2FHdRGjXAQcF",
  "key24": "7crctwL9m88JBouAhKUtRSy3iPr1S5Q1BQi1P7xuvDzxf4HDGTnJomo2JDbmEGsM3gvFeDsPpnAswZcGp2V6Y1v",
  "key25": "4ydMfb4VjvKrLADRACCbeJGST2AATvgWiGdLPAk4QPWFdfBdeFjzzFXHdueiqWojXfzzjAcN1GHv9e6oDviM6uoU",
  "key26": "boqxyKhTZouTW2WhEYfWfBwQ5nssPbQXivZp1yBju8dZy3VPq51ihJm4ZKLaPV7jNKfgT89Szv3cDyefzfAGFYB",
  "key27": "41iBJUvPAAdMoayjQxKaMcbiTziGRZeXMFawUYX3kq7FmyDX2vQc1UQAMWdxvr6iBuyhKag4M6ViTLEfsHHjsV2B",
  "key28": "62M7dG2epueVpTYTB9AJUm3rTxDYSrpZBphtd698TxTa12Yk6LZoxYqDAbfB2Y7DEU6jfkSkpJbczcQNLbqyFMPC",
  "key29": "5vYfuBkBs8nqAM9vxTDPpcxGaXTkQJ5h8CCWWLwyaU6KZ4xonBxeJrieJJ4spu44CjmsFsne4GPUdtGbE87DVfwJ",
  "key30": "4mx1fiscPT2L5vBoMhMZJdEQAf77zcoKkcgtNtGXQvzPD9R7J1Ezs8FQQ5Ffr1YGm3rfxp3zGZRkpafk3bsqLbkj",
  "key31": "k5hxBVe3fvJzPwH6AeXGnm5ZETQ988KSPP2SfbemMX6qPkJCgpAyRFH9stsCtFrb47Z2HDzrddxKrEnzZAfuMip"
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
