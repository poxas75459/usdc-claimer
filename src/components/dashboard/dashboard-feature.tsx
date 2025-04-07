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
    "2ozjmRdP93KCEiwFzRYAWyUFUuwQES9w396oH1399wJyNyK3uiC4GtYR2CPk2foUnBWV3qDGPStyikFrmcSbLkVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQ9ecqJSz2k98nLuD88qoX6Xug5TKnPdx9LZCfTWXD6yYbhuVRPyt9dWer1ZT9uYzanwcdtT6N3PJcn1see6o1k",
  "key1": "3yTsgbNu1FwSKm41m4JDbKkUZLhooNDp7b9Ri1hN7HYF5MiqpvMhFCWb3WNXBDo1ZWEnbqCxvJ8wQ55vUiQigouz",
  "key2": "5yTANqgywZSjKq2SA5dHbdcsdfvj6yjXCsDxSpaq13RYsLgU8WBchuZ7cCWqUYGzCHredhboeC5BaB7kHxTxSzPG",
  "key3": "3Q3biZmboEXkagx8pawtJaBjQuEVWP5hCAgi65gE9jaEKzetumR5v5vf2uj81p6iQ57GsKKPJEGXQe9oymX3oreg",
  "key4": "5kyzY8xYgncKqm9iZNXyzLoiTcSDGefzaeRmmEyezMfUAziEte1YW9whPYQCoiXT7X7uAZLeGpsbkzFp6YQkc97T",
  "key5": "3XjXee5EbLRdqM1y7ikfr4i3G7JpC2x8avRT1w12RhaVvhpxwzgE5mgMRVfGghtFye746mMdJowEJMvKmxXcRxbF",
  "key6": "5u4Sm4HRhW1RSb5G5yq86s6hFZ7VhipxRR4ywF6r4zpxgt1CVxE1Eob72vthVv7nSM55cG2WmVdwjxwLb5PrbXG1",
  "key7": "5Sh8eVvFzfzvebcxvdDR2vv4odBhMi7kQ7H845E3F1h55A8Xb8U7yzcUo6pcrR3DKLHAnDPP1ysMPZye7Z5egYza",
  "key8": "2HMN1UNzDggxLDQVNxd9Hbq3gLV5KNQGKVoKkyiXKhxQoGnie6L4dCL6fWUWuvSV5vUH7A4S88wZqwRErVUjCeJ1",
  "key9": "pWhkmP1Qi9AfjGLWnaBJ1545TPp3mNMKBkuGW4iyYf9Mb37GRXwCTZMiTBUfj4WKqqEy4dAjo6hpDQ3gbpNvdJd",
  "key10": "4WJb21MYaX5cpYG7zE5UEdSDCcNpRFcZ1zuA2XdF6DNFBNQ4kRJLz56Q9DAc1amKzJXT6ksiqE1WpzCoqB7mo6sN",
  "key11": "5HPCckDXhAUcqtJjbYAiYNHejviZywjg5Kk3NB5heEZFbhkHFfFcHsY5PFY97b1nytFgsFGR6G1YFkzLjcaZMvM4",
  "key12": "tHNE76PASW2WbAM4KpeMk4KYQdcRWJG43W1KfKv8jkijLhsYNGWkR19NkotVJUXVZmQpRcPxeSzV5VW4rsWc1j3",
  "key13": "666jH6D5Qr52N42eQTYoCNnTrkYmxHg4kdjENYM6H5NwkU9f9mGbcv7AkxuMv5hS86pNAgcVD8YjLBtCXPNwF6Mw",
  "key14": "2YdbqdieeyFhmwU547KP2isENGcqYn8f5pZ1XMu2AN2xWivaJ1QYAtewqN78QU9aSWSnxLtkvi8MywkafQejg3zM",
  "key15": "49FEwULxRL16cbhuHudDTcy29BzXxAcimJDCLQDMa3d6cURc4ihdrgmRHGSBDyDtGJPAtBi8iFsFtWFeBVVBJnAX",
  "key16": "66JQThubsxpF7Nr2nNRHHjqbjVAoTLNauu5ToBnr61FqipusgDhTQofJuzAgUxCSzx7W7qXnfCFD8cHqof24s9sk",
  "key17": "3whz5TVxJAj9RwNvyrzccQTdG3smzhzskhiNYfKArch5FVFJcyfjSZj2BYdQCbHjiLjrf1Pcv85ruraXEZBCmyqo",
  "key18": "59sdXNCxi9RrKDV4WX7RoTt4eEQjFndpvZDp6Gx7vcJKzsJAe8y8fY6HvzELdbBBThmHvpTZ3fJZFuMuNsmePvqo",
  "key19": "2qAfoamXj2hxZMzi7ZfFV9V9LrCicvg4EdD45cqe797mUjKik7fdiKqt5FbP1UHofXiLkJwrCbgBZszttf9wVe1t",
  "key20": "4nbtnMk3d2DEs3etbWZnsKgRLaYq5u8zZ311YKMv2oKwvWaQzcW7MPHVLVCRH62TpV9RvTHkk8Gw4bhBRRrGnWPU",
  "key21": "5KxR9N23MEVjgad1Fw27hAzwydTFufmXJoa3aCGTJRE9ZjS8ToHQXkD8Z3m7FtQZxPBgzvhYd3ht5PtLP3kGpuZj",
  "key22": "4EXmxnpv4BtPorW6fJaSWYyWNysksQ4xPsXhDbkL1ys3wkZLWUjTmfgpQkTT8zufEqHRApLVkYSME48r16LeCaVg",
  "key23": "3HwkkPqqtGQ6mu6hNTTn8BaqE1BVdX6DGU2nunUcMwE6gXAGg3UzGkzdjzMsH7dW1zAgnVpzaJ3LKQp3RVXFEnki",
  "key24": "5agShFqaAw1tJKp76fbY8nxnFE9NM5BzYQj8CbvQNdVqaF7vpwiw7hLF4c94np29Uy8Tg3HcpGReCz6RQQG7KPhz",
  "key25": "4ikFXe6dsyLm8kP66W8cjr9JoQcBjNCsnzfTUyceFbMXRh8sNWmd4MWpby7C5oiGLbV9LSaDPzh4qgzmPQxfyaho",
  "key26": "4W3JQ1r7n2DDA3wzdKBUEymWGEaU9tsACYPnwEj1mjkfGNh1uvdfmaVsJrh5RSY8Xdr7CtsfM6Ntm7MfyLetwNLE",
  "key27": "4QLzapu4oucg24ic1i2W8YXWqnMFebiY4ZLzdVnVcqnLvpZkMQqm26jAqkN68uDq7tDKarCZTYEjTADGnCdoTYbw",
  "key28": "2d5b3e76jL23Yi3tAivwHz42Lo5KAG5H9RpoHq7YFiyNd5zuev5pnNt8E7iFe9siJg6ifQQLF2ojamymEXgJK4qK",
  "key29": "24Wj3kK3d8pHNqc8in9DQFAdx3gT3umqwjQQMpyKSxoYmNuQD61rruYaaY7pf3KYCpGJQZ92sRWXpE4y51c2AE1Z",
  "key30": "43qWxNwpLJezVyd6pfdDzb91ebLeLorM4G26S1kZQeffLHbHWjbavoJVzPHNpt1GNpqNMApB6AdpagFxfuGiFprA"
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
