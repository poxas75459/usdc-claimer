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
    "5xAdBGpwurQ9Ha3DapjLix9Cd8GJjVwxckx8b95kiV6c8vVuidd6b77u6wCaYtBceybY9yPWjJSPjV5GcPH5rqCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvgZWSDmBoRmfnA7f1L9YxxcQhRevqdbxyzGQjo83ZYtpqrapmbGm1jzjG91ud62mjFefXrMv2jFHDL6MDgxb4X",
  "key1": "mKJGcEoKkLjxjaq4LVbfaPzRFBiBNndFNxcw7V388LeAwmomw6egW7RTayA9pFKj3UmQe2PUumwGb5PMjR1CtgX",
  "key2": "4Fx7AKm5ACK7vZFq7LXf5DNYwxMwjqEbQxx6PttVEiGsNPRKbx3d3FUPP4wt91vqSvA12jnxqum8dAM5VNfRmN9f",
  "key3": "3KnhKEwj8hFcuaZ8qkPoDBCLoWAGgmnkDjtf8fsizSKQR1zHDNkvVs8oRxLqAEk3dFzmwC3ivdC5cHNEHU6wTNBk",
  "key4": "5fA7n8VFk3UXAdnGcJbJyPzuFBgdUBwSKyLpYJEpEk8sgcaFV631Li2XuTQua4oRkVEZHq9N3u5S8mTHFTPCSyvS",
  "key5": "2bmQwjheZJJQ5t1JxybErn8TPeYWgUrhaWKamjDsgbpxveEt4KzG6947qQWFrZTuqqaKsT5T8cfL7KUidTmrQ3C4",
  "key6": "3TxKYmmmnbkFwRNi7JJfbQZEQpnDiHnXbm8u2dp27b6cQcTfvrxHMPQXj3SFKcActXGt7NJLCJMbW4yyTg1o3Hv9",
  "key7": "2oQCSQEi1FvYiuTEQDjwKetJucTeHPMsucN7UDMgmV7nMqYV5WQs973Kvotyk8W8TkDtNQPtk1fdAu8rZMMxFEyv",
  "key8": "4bWY3JvprDjymHrQrPsdAWF7CXCPwP3NZgqUqGZsLwkhT6NkVy51HwWJztqDWaxUHKh6FiAmFJXUBAGLTMSVKNqd",
  "key9": "5Ltc5QRzGu5knbG2wHJPqNJ8RJuKNSWt7iLmC9JxEM3sPz8svRjvnaK7WZKYbVoeUxVWVkSPfNparzGiRm3Rq3fX",
  "key10": "3V4A7KPMDrUeaxGE4oLYjv616huCjCHDDb4r7jwyYtQvivwrFeBaTbLCM1mRauYV9zU7o7r5bX8gEPADGp1KpSpS",
  "key11": "5A89GD2aNoYzmtnMEpiAAYeUZcEycrkRudDzKEp8VMAqWFSZ1eCKqaSpEBWp4RQn56ajUUckoognYBG3Hm7rXvjQ",
  "key12": "5dcvuXjvn8GZ3ianPdz6PHdoUJweU8aFbgsSiELGKoNTC5RkvLgHv7nc2M77rbHN5Tx3VYD42UGYLP7UbTSVPpP3",
  "key13": "m5jQ2jrYU8k16B1shK4THXiYfRnrBmULpje7AEp76BsNqWqiH69vw7WeENcGW1Me9Bamou88Y4ZDtaME8pLwxin",
  "key14": "RVENQZAp4yeit3L8jehEjj4xVJDnbDKqaSRJE7RTxC5TgeSXbUt9TLMq69cmmd2nxppkdPWSAkwMNtoHEVVj8vT",
  "key15": "54EzhYxKWFL4X56izQYftk3qs7H6XUng4UBd3SCyy4NHiN59fp37oJWPUfo5GuuWQ6qj1v4wmjERGHxDM5MAVYQX",
  "key16": "4owEdDNmLPpUJWzt7jnGBpHUtFYvA45krUZBBYt1spg6vzvsZnkzfdryzKD9vwaRMoATcSWBGD2R8PAfwRNmr5EP",
  "key17": "4MDY9h4S5Pg14kWKTQZ2UvtYSZGkZ5winXnVoWxm356YxydGkyX9wzk5n9ExEX8taG9etxU6FjSrpMKFxZxXQWmc",
  "key18": "57h5LbyFZitivv9naWyeYkbvjTpNeqER58EaxRMwjvmBwKbxnsQy4sJHDKzfSDgZaoPxr53Nt4bWs3Tu2tX7Wsve",
  "key19": "4eP2798YbgidDcU5xz2S716E5wRe7RsWzvthZw5rNmfKeQh4E6WDVKe13otnkvPWP6r5HR2F39iNjx5FU1HCf55e",
  "key20": "2y4JeVT95J22xVfAryybLiJiznkNPvaJGC9frKubxQjQjBCDjzCPx9hj9V3hVaTXigiYVZ9vMq6SjZCossMT58n1",
  "key21": "5ReV6kQsBpY8HShXxMmCegtyDNjHwN9ca3GxRfgxeHvjx23wsx94xLD3KB3vXgBP6s2Gz7jSwt2Fn5BMbTUJxTo3",
  "key22": "32Ssp2Q6DNsHy5czwbkWCAX8CnWopRyntRf8fiRCk1x3FhM9J1Uf9B4G8oenH6SWSSwrqgs6MB7k6MTYQZG58krK",
  "key23": "TQsDHcckDwzhXdGQ41kT2hHUQrw4fLLn77C4VXsiw7DXR5TQ1E15uzi9CbqmNPdCzhDXmStUqUtbxhebzERW8wC",
  "key24": "4vXrRLKGohc6v2VgwgJa3tEUVE4xa4u9udGnX7xXAuzz43wdCsggVPSQSkurwokUSrxsnBnhHKEVpkPAk4En9RVn",
  "key25": "4ohcsBpMb15sDJ8okSKcJ59STydt3sq7PDDazVF8y32asX94jErjCJReQG8pm5dZszdwz4RjxAJyhkceXxwuaSUz",
  "key26": "2vaJVw6ncPsrdfhTxnAD9ycLXgXPopLh338xy5un14m7CdvDJrbE6R11VigKKDmVZmqz4LpVH6WnCSD1fE2M9XUt",
  "key27": "4dQXUzEbFzECsoi9x681BmMyp7BJZqSCdGka11qsuugF5Am9FCsqFMLvvReaQo3Pc3r6sagZtFqLVUWLm2QSXXU2"
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
