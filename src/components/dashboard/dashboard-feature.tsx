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
    "4uyQqLrL1331Q1A5mPbwKK4DHsEMShJu6GWFkMSQZJQHqs3HEhw1weBTuTTfXgmHG1pTdMBnZovRy1NUKjLMsUqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhLKx5SQwDLL2T3FtBBapTJCPG76MUTyLbAakcPrEQB5Zytk3MAVxdzy1cqFSa6PABoQa2FRt6Bxvk7u56rUuFX",
  "key1": "3m9Z6SDVEouyE49mhg15QdQFVS77miQsSvqvjmX1bFUZhnzkYWAHcCU2rXXLcicRCaZuSbiTfMbuHeyVojetv2bb",
  "key2": "2MsvRvhM6c7PnnGPDsb3na6KbNbg97iWK6G1ykyj6p7YSmiADMEaQA92WD3WxUzgTbyJDGho1FcvNoSTFFwrd9xr",
  "key3": "K8VNQijNF9oa2tVrPbYB8Au37pBP8etxpfDbPChDKXbGN7BBYQLvE5mYYFkagVzEV1jKrsVDby4nSLXbAxLm2gW",
  "key4": "3h3dFbveYh3vE2rifpHfRNgM3dtbQcvKVRdhBjVB4qvmADbMMYH5Vfzyugpm2j8WUta2icGLHNsYAXSn2VPRQvBJ",
  "key5": "32zLbEw5PKWStNkUKhG5zgcPKXDGZNq9ES9p8zpVqkD9e3cTG7kgC9an7HH113gmuvpA1iuUiY43ZQF3X3tiSDr4",
  "key6": "3w6rktZbjJsfTq2cHDinKx6Q2M3WV4LnPqybRKJL7J9jrmWtQugAG4i9QepFf79LQmJQJenFy22uUeWmTokmWqRw",
  "key7": "2b6FaXgKyKDKCRuVvZL52bAi7TYHmpoZq7NKEbKjToesteKh4zP6mTY3sThfuV4wKy8geWbzfRZueefejGs33Qe7",
  "key8": "5DD2Up1Gm9U6ibJskPGPzBn4CTa9QEndTBT7jfEu6yVF8L5auHgUx3WtUCdymhSLszKYbPckHnMNhscPrCj6s4UM",
  "key9": "58uspnUBS6tLH3dKyEbm62bYEeR3nrtH42x6XDivZK5ZK6ezsZ2a7RUZDGZVZbnLuPKZGvEKQogZW7LGGJ5FKExw",
  "key10": "iQKnPgxJkZCByhR3n2uRW2m8g9gHL1gtJhq5gRw5ckiWe45uhKah6QjPnhsarVdXbu2wWm7dz4Vnr4k7EzxVt2t",
  "key11": "4V9BRnvehQek4eC9ko9Xbs9bgzS9vyHphAFqc7kYR78LyjoX97DmbYyZCRbpSnNTbbYxQQBryiLWXK18GvyhLh8N",
  "key12": "5i7AbiWMREYDHaMeZdrGyEHXurraUFH7pUE2VCa6MySJay6wkuknm4MZYxAoTezD6Zu3QpWXQs4BXmj4g1KVR6p7",
  "key13": "587pAMSnVUmFYKi2Tnux46gK4kgwMzaxnyuTrmeQ6yAm7czmjVwVNkwdxwNjkwuTuMri5D5gk1cMzbV1qW4fbW2r",
  "key14": "4p2W2dREP2TGSBzi3ZJrErAoKpc6VH6pzG52wRSa8VQiv8cMirLGHcgpJHg2S2S4yeGds5PGhZAnkBYLwAhZRgYT",
  "key15": "JXSQU1FZ6duva6NmZoCM8vJk25NEeuE5YRKSTVqrVkqExvPzqiaXYyyRCot3BydwizNXHxZNRRxPFr7gYGyvEMh",
  "key16": "41kobyQzP4kZ5fJbxhiZn485wfcrvt1mhwUFFpwh6nA1o22G45RDNZKQ2NriEVhFVSEQmpNsBqGNWthuFCtL5jQo",
  "key17": "5LUvo6creBVP3s1z6dy4LmPFViKeVhVBPozbcanUQoRWVM5DQBDfZynA4sHUmw2Y1PQAMPph8wJxme4vuTKFeNbX",
  "key18": "4wEs1uizpVyPD5uUH5yvwJk5JALmt2tnNoqByFCZCoCtijBUec7bzxKzwBdh6TpBirT5DhETjm7t6oaqgMEqdM5L",
  "key19": "4va14gABVVcZzyCz1QTnqFbvevoujQVQYseJmxgfTNFQbSRriDx7jVBYZuJPxuFhNxPZ2S6gqeoU214fMcZ1iuUg",
  "key20": "PEutq4Y1UMjNjxuvSbfkLaJWmsQpDpMhULu51RQU73shf49r8yzjXnZFrdo7qqCPupYsZTy9zRusey8p1mvwsdh",
  "key21": "2Mx9YcYaRNCqLDSuzKEUJZLWeukjxU6pGYiwYiNBR3eYHxNh99bZtxJDEmQ5Rjj1wKP9AfXPTCzyFdwPh5ipHQoB",
  "key22": "54tZHjiskbRT3U4SMTG4DzVPL7WytyZtYi8tEJyxDfK5KnPMx6ik7jTCsfypeAYdSiEcWwHy9jVFbZNDf3sSXf6E",
  "key23": "43MS8g9CdU3psswWigfUb8ZGN7ZrYYtWn5RgwVUBorQFqTGYpHxi8dgsMNjzF5Y9epTFyBJZaynN1KZFQF1x1Gub",
  "key24": "5Q7oy3QwGTMTbXgXXGpTL7PesXYE4Vhi8TDwLFGkwKrJW5wWofPVGKaT7LQCHauAts3pmyt2RXGigazxdyvPqRBv",
  "key25": "4o9wErHo2CgU4dLtzUNN2kixpqCjTzTw18PVaRRMTBVeYHCe8ryEZfD3U7JqYhjmwLQQS1J2bJ418Q3WmZ313iEY",
  "key26": "LWbxraBHG8LXfRt5mD8AwvBAZDpozTxP3SKP1pQhLz56B9yMyu1NDBJzKd2Vuko9qRNPiV8XcUTRk3EjgLogUhu",
  "key27": "5uf7w1BWn89RuUznMGkua5eJndm3Nq1SjqtxejHHLw6bMBW8grLVFbcvGLTzf6FJ88MkMtGXymZVLAqxAfe52ii",
  "key28": "457qQFAStydA6hySQX3Mr3xPFWo37WvgwYuoE9JPK6zyFAWHU5FrsVcUE6gTcLpV3omnC6vHf9mc8bVRK5Qey9cm",
  "key29": "2Nvqk8RSTyWjeoP9PQ8Q2C8WiAjx1kpbYr5HRNTQWpmHwjTgSKJhBYK17hqmbASKDK9K3g4uXdbhs4WV7rfnCuof",
  "key30": "4u74hHP9ug7GFgv5zDMAuXe3gGeduBcmhe3HPCUsp9KsvBn3s4PR4CCVDAxxRzVYFBDhN6d5FQx3khWDpKmVu2zk",
  "key31": "35DEXuEYVqGdByednUvA6Q7LeEYAE3V1hhZhensSEiQPwR52WeLjueskYarnQhF9twVdsLSHBB7XwcUc18RrJLvZ",
  "key32": "4rhZ6nr2MhL5FEh3gWuGF5nVZaR29hyh6tB5pVnXzvTn2ZKH8jv45DFx7zS63fb6QAonNhC9LQifyQfuupQsJJQT"
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
