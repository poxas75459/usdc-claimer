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
    "3BbTmg653Ejvwrk3fk9S9ibwBSzmdugJrcjnF5PEuA6F1HooUyDwHsKpfLHyx1y6SnkZLKtHMhQoBBEsU2tx2RWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VozQpt36j6DQVTZiSFvcJMfLscHT75HaZmR6ZqNKEzuqS1oX5sMuAuaN5U3Zos5AvUsawLvAQE717tqa9Mve4ex",
  "key1": "2ZtBdsN9xsCKu3LgkZVbQk7VYMRDjejM2vYTUFojS9W1n1PPJvDxiRJdqEsUYe8EMpY4Ubt7hWx4LCgXrw6BHqPi",
  "key2": "4uV8zByXgzr6wk74hRVguKrug7TwN7mgSRq8s8gaWNC3yvtYB24vfbXQQCZCuoNBJiKV7wENgCWYZXCGW5MfSLRe",
  "key3": "2FuiPbG6fbNjKjDyniYU1dAXhGRVcKwPxoxoirQfZBpAQVYNZHjDBFa3387XPEF2KYrYkHR2ctY8wnRrTFUdwz8s",
  "key4": "3Eip6moj1HSd5nAJcAxTMcxui1DFdubDiv5H32rborjiouArPizhDiCc9MRjCh6chvacvQWDvZtkpBHK6UAQeKrF",
  "key5": "4s9qKQfqQJh3HBaGFCB1o2fudqbuKUQPDfuauCWonqBadtc3xXM8PEKutSKFrZKsa4kmAAuJwiptHKc18sVp4t7M",
  "key6": "NEZdpViL9mQ4yBswxSV5iHgXFGQBDJZKrPoCAunCThDARauEA6EJkWRJbD6b3wJEMCajfi4wzMFWtkdxwFBwMKm",
  "key7": "4zqZY9NzGvG5m5zaFQMY7jQJvAJDZsd7UpARkYKx8dm8FWLLecNiM8YqnjWA7fzuVmwW9WM4ykN4JgCL9Jc11PjJ",
  "key8": "2SxBFNXG6UugwoubADtB1Y8oMFBDQACLpLuKQ4JWokx7zZ623MWTiwKFVbyi8Z8pJTKUADQnvjXqbNPEBFg8qL3f",
  "key9": "3scUWAHW2kY9ZCZ9zLj1WrQZKgxwNyc8UgHHF5Fkoe79PeaFZDHzHpYKS2rSfX1DcAasXsQ3z3SWMw5s7Ssqkq4R",
  "key10": "24MbAHJdGvJGtyJQkHswwp8t9UgtMGtGCh9nzcayq8MffCRzpX7s79q9aN4XEs3P9DVUDZRXYXURauW4LnZkkppW",
  "key11": "49eAwnjpbgW8YqE6w5DgJVFjNotzx37BVMvmGjanMpE2p1M28vdqNhAVqC6YoWKWXytxPSCViJYYtFeRdbiFpeXR",
  "key12": "JbzXevPzFVFofTX4RPajr2a5PwpmtZM9jtDPai6wjyXLjx2yxn8mcrXRPHDFYXaeUtrYebG3P2VELCFspAgoBDr",
  "key13": "GAWqL2ofURXxuwJqQGqb2Dc7uDCdTNFYQXwqexvHkkKdiymuGHraEXQbrnRFTbipeDwEXkNschqAvfUYrPTHvDe",
  "key14": "m9yhCfxbE9A1674xSqEDdRp2u7Go82RDfoiTwhHcKKym2vSi1LCCeKYyFjnF3uxjTrkBz5uA8RBwfccRP8Gnd5S",
  "key15": "2m8pZKUVugqquCaPqZd9nMpbysNMEqEfzv2Q1VbCcadbu5wnUwfYmXLyJ6P6q8P8AkgnXip7vpzryFXG3uQ5Foqj",
  "key16": "2ZksEPHEQfmPv9d84SgdKMMgViwPQJaDvFgs22G3iXKgBH15E3Zjv2L4kdCqXo9RznSecyTbgBS845rXNmG8Lt5p",
  "key17": "3YkpDYKjsgSDAr9FxowZ7bhdHKyudo3k7zWRzpuJzYVn1Mqi46g9NTUFu7irbL35UNQqkqMem826kWStPM1MobA",
  "key18": "rNXuiKKP3pJEri7MsfBgevr39dLEzXnXrGbRbaxcuoWxraCvTXFD1R2XRnCEjfhcVqk7A6jwdiLopQT9b8G2yd1",
  "key19": "2t3mfYtYWJKtzvrPx1WFg8Bx7UWFMWsX6psB9SqZpo3P368Be1R5aEn5g8kDGYxCKMKAsPxVAUAF5iyTrTGn61eN",
  "key20": "4dvbvmyii3JU8iTCKQy3USBgUxMe7Xf9GnUkvVvkNJozkyDGyBRysSLDo3pLWkuxKsV3x5ECH5HuThjEmfQ4nD8T",
  "key21": "5FyM2YUXwhU2oUmQMLWdG9G3diCGB2Ry9jCiMT7VLP2HdYzse4WzUvjfz5gYWV5K2jGUurZxEdBWwpoFRjGiZbLj",
  "key22": "4qA4grgxDoGJPiK1pTxSzBFpUS9Z14BxbQjyFFpaVDndAC4TYzb5zTjemXZr1xmc2wjTRzLVzC4v5FBZEyfj4vTM",
  "key23": "3b6GV1zxerobxAacQLzUESgPLRmZQwkTt3ubj8CdQqGPxrH1R2YbXLgLu5gcNEmQipBhzdZe9TUBd8LYktiPA1tx",
  "key24": "bhwi9xXV5YqUU7FLZCw3VDrByX8gpHLRdxEyTuMonrUqNRV1B7Lz3GoGmudcLbCyYkbT9gqKZfJ2M7gwcYzJNx2",
  "key25": "2w1q8fEt9tmJ5mrvMBawsEgvtvw22aJza7N8g9DpE2vWiGYYfRkSo4MCmyvjs9qFpSeJsXmP3QwgkWM14m2LnqA5",
  "key26": "2JLPxk6xj3PxH4hH1NxswhtuQbEAZyiWu6hWJzaTfnUB7r3apM5BhvfP4CUr3a3AjkHonqyDDr1nC8QsCbxkT9ES"
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
