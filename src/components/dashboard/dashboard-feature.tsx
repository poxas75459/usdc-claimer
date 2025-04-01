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
    "2dCQezLftKPXVE5fVuSaKy2ekEYtwhm2MQfwSD8fGfn49Gji4pYnpLxkXRVJHBg6J4waLddwpPm5aiGLTXSjQePm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5iKecNPuAj2Pyk6hWdceWkHYQPe2iSJuKbkf4k3LLiDVVtrza8tRh2hx4P3qKtEPMZpVeBSBEPgSaLMijXT2Pe",
  "key1": "5UN4tHAPfMKn97gzScv4U4aRTPQA2SDr87A56yc7zY5BotfvH5EBrMeMPNha4zUjanuERdbo6mNNMwZ4bFQat9Z3",
  "key2": "43TDWGGqPbNE3WVQKPqwzE3nBZqNuSkUZ4fPSf9Hm453d6bDB4eTzw5Xd4KtrkACk21AqJvqUL38Xtrur8TrVTAk",
  "key3": "5kPVxm81gvu849YAyzDLpCWHs7J3mQ6BcMDZHtPpNfNsLzSDFLQdoMfWjXy75zE7WmraoWqi9kor9iMVk34pyySQ",
  "key4": "4E6trsTFJYwkebBufepmGELWuPJ8aa1wwKTCGa9CrxN28bYHL1sWj7gQiwWrZkEVowk8GXDV3pxjAavumPPuLKEj",
  "key5": "5UHD6NbA985Hqhe418PayeUA88JgNG4Uv7cC6u2AMEFFH2vbuZYb5YGWWsqAm2TUiTH4dtQyuwAun3UVD8X2vRaP",
  "key6": "4aSkmXQ4AbYwtSBdxN3FhNa7TfnVizbeYBrcJbLpnR3aBAK3KzcesL3LZn5Cf8M2HkagQbqfVBLdmVBNA4KyYYt9",
  "key7": "3Pks2ZV56EjHutBH3JhJprBCG5rk1QrNUr1vZNyExm6RD6QJGJdjqBd65UvoZNTAXDPAPHqd7vbTMWW4Qifqqxdx",
  "key8": "5VLRKrbgb3znupwjFtb5rj24AChiVHbkf6wqfh4wWLWqVjdhk2WaKYcibHW9ASaZC2YbR99dLkogMyHitA5FpakL",
  "key9": "i2sqsVBGGqzKrwMB1xXu77x3rGLYiSRVfAuj8KmEm5eTeL8dubj3iNNhCbGR4C6mMxW4SSatUhbrJFVoJMj7yZS",
  "key10": "TKr5niSPXsdEY6Sru8gVpZxojd53PdxbTfvBRP55r9GJUFXn4v1qVafyRhE2df9myPFYRafvAV9vNX7VfHiPLFr",
  "key11": "3EnFkGSeCFQfvmyBpi6nnJwJtQ5NAJjX5xKDq4nEihcRA6H1wLxaMF9dHx8rpfNc9kcbhZTiYny4Th3HGsRuhCeE",
  "key12": "2oM894PaMD68bhKf3FbYrmAzWHCQLfNR3dZcG3DrBf5rEVWFZosNFdnBH3CaWsjr6f5j7oK6xxwS8Zj2J9DoGXFh",
  "key13": "3V9MnzvDVzNHDWvxYNVJASHoH8C4993iftboiyv9mZ7Ld7nkwrNKFf39s3rStvAvkM66DMcfHM7rP1hRwZnVX9R",
  "key14": "5HbtCPdFtj2GTAPiUPaBnhtkPggj7KcASf9dF7ZENrVYGtjz3PKNNc6xic9nR35gxkKcaejb1tHn1rahTJTi2qbY",
  "key15": "5525FVYLmQfFzLoo2Kgh8nNZWphrodccw6FhZyRfThiUrGMuRPgRftHpYYVzjHigfpTz2HyWGARAauLGwbxfmVcp",
  "key16": "3jT7Yyt89aZZEvzdALiRkPDLNhxD1S7DJMqwmdKu9Be1ZGEZcjSP4D8n8pUkvaY1mxr8eakRQH6tAfcE8tY6kaxf",
  "key17": "64c7GQaPXTaKDvjr5ARUzAT6uBJNL1arouuSBGjn7swKif4gWk1gi4V5b5BQf9PH6XKwW9rAQnH6m9LCDZd1i7Th",
  "key18": "4QapuN4poowXAxVC2CjALXNEzdg22hr3T1xgKyWF8xp9GTdVMVv8X1gsLEbJySPzrrH9gVEMwJzt59QMbFUkSMBh",
  "key19": "4yeK3vxGTtsiCVignf68vV8VBh2bZVqSB1DED8DHDzuqUwHV4EQLsKu55DZNRvMCmUATsct7uYRYWPMGJgyy3SV4",
  "key20": "ueSThrG3vpkYswBoLwFSgvXzRNyTMK2AadcyM75EqeHBrGYbh6cmBmZaL8vMQxmE33oK7grAfh2PLv56KygAWV5",
  "key21": "65cW3fNMcHRFvyA6kYF4dxQXRDycobpin2Z8cmT3vJSUvU28dBYuM9R7y1SJefmBk8DPcTAGQvTag3GTR6x7ocLw",
  "key22": "3tcsqhyDF3K6NiyPMSttDEazfacfy2HQPMd3DxWokvRQTdNoLAfTYK9vuuUztXyypeAz5gCWThW43NgNt4wHdwfb",
  "key23": "3J8Ya262Bjx7R9bJhtX4qw2K3cAmW7x5PRj33HHFwN2gpG3TVez9nQuM2y5QQ4WCv4movVGWSQvNzgjCcTQ216LH",
  "key24": "3gXYLFEzvP3LZeQ9rdeYikeF68zopd4LMdZrdwpEYTw5nGDdMnGQ4LLZc5QQ8ATxhobZqWiUtscGavuLUaVBJTax"
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
