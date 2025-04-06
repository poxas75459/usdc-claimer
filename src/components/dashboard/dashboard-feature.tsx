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
    "2kuBmjpEhVRVihp2N6AUqLNzzPx6ii8UsWiznn6KK6VdsXDfSyjz9S6y1XmLpaq4TyUqCNW3RgWvefeXLtmVZkoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYvRonpJ3uR2sYpyRZBYq2Z9NMVZC6zUhDxM8LwFjSLBBBH827i2NHUhmZQ5gdAKDh7DkL83ri1evBMMwL4wpbt",
  "key1": "4Tka7AfWh8bVkYymVh2D3ukcKqj9amN1VKPU35ChLUmgWqFPNCQeRnEQxnDBnmJUu1gBWY4z1HQAzXJmMcPGskSc",
  "key2": "2WJE9iJQqk4q8WvuYfyPaRa9KFpPMtMWFo8noTBJ7GxUvJFWBvhQXzHpnw5Es8Xiyd8qgAyAnDxy9QP5zjN6RQDw",
  "key3": "3X2xnkCYmGBaVPd8KzsavmBBozFN2tNHDX4YeVwsE2n96hYo71isYEX5iAjHG816nZ36abpv6P3KEnBdVAEKThWZ",
  "key4": "5CtwMLB9D52nts8YJNqinhh8geYEwxsTEDz2puDb3EcVcw9VqD2j1HhSXwEYBvpr7oTtu9jndFEMjGQyuaysehxt",
  "key5": "4mL8o9NPMZeXdyY4rebftto43nkfw5FE69WRymYG479xTbtodh5wGCSwKEZhgZzbhH1eTuBBVA1Vrun28zWU1Duv",
  "key6": "4i5eniveVvyrUoSq1Ciutc2w4kqPzhPERTzVkAy7h6hnRcyJJx5bSHmjkVoXbAAcfwwS15ELKPiFZM8tP7ur5unk",
  "key7": "mbVnK9gDUNW7r4wDQQdisR5uTvsSsicf5iNnexWaNbAaBQfzFeuHrvcxF1QjhCgcbRwSivorDZnmhLurRUT2H2E",
  "key8": "3kh9FiuWG1SvAwKikFrryHZ6ZnRsfvhtQuB6PzTT4vYAnk2SzG4LHhJtoAuUoGUobjzYmGunYiCXTAzUSBdMuu4f",
  "key9": "JdqXUBkSNPWPDnxeMifvPvsMwcSv72kjvVqLWvj8U73LqnChjpo5AZEDFoRBEdRmkf4mJBbNbHwzMoZ95q2em9H",
  "key10": "5aRYfS8niwJkZAoMhFBjhkGCDMbx42PMJR1kCXfmQhKJLDboguAk7QCnRfLTDT8vQgkmvePUFRi6fuqaDsJw7LAp",
  "key11": "4tYoNEzabb1yYJLnsmWLxazYFD1544J4ydV4SURcCkGmdcW4HM7D6cvNp5RKC6S6chqPCd97LM5A8VSkGiBtuZLj",
  "key12": "keGPPb1efVShcqgSeY7VgyPjCCDiYaMFNWxfme9NaNeSLkJru1PJxLGA8HvsxH9yjdnk3Hb4eUXCTuFyuXoPvaF",
  "key13": "5YEXz6gPGaXzca3FZuQxLpzHQqiMeyY4dmriURZMExs7evxXPuP1pRhc774j1dZBW9gvvqPVCGm5HXwQVPgnmJ2L",
  "key14": "FkTi9J4MYbHM7SmLwPLAY2acbGAB9A48x96NL2CAeZpt7ULo6qDBDWZrcuYVZBB5p8GeYnRmfFpPBxrrcjPiaFG",
  "key15": "3u7pkwBztpag7FRZkHK9HiL7m9iXNFX6iwFvHX2G1yKrQkyKe1xbxg8v7F8CGM2zzAxer2C9cZPDQMft4yzmynnu",
  "key16": "2Rtg9oiuFSvZTRkJaiLfDsLjYNHmaLfzEG7KFPWrGKrsQHz8zWmLSUNkCxPC18iYGxoSyjK2GKd1DzcBUy8DwJUy",
  "key17": "3aG3Ecx6X7NVonPciwHSHJRDpFqEvAqPfUX4W1Y8ADviHce7k9mFoEeptANbvhTG3TocsXf7meCRpm1ULJKr6Kpu",
  "key18": "4pGwKCdioiTFysbpQe6KTCxTQPNRkJjtowDjzq6PMBSiGrcTJ7fANQHzvjhhbq7WPweHeP6dYcf61vg13Wkbqt4U",
  "key19": "5R7k6yxZXBJAV8RwtgtMMh2ExVGPaaFxEq5emzZmWhjLTCFbBkpEyUXc9yNLA6495U2ZFPjC1HTDvUkdPJk9NeWD",
  "key20": "5HZ9mNoth9cfRYF51ka5NWu4GueDLXV5m5oNDogNdZJyBrpRBY59VvNMjdnT9N2kZeNgd5aTH4ou3o1aj4MVnJiE",
  "key21": "2xuPdtSkEjAwEemZjfFXSeCH2BfmXmbJHFM2qDq2TrdboQZvYeX7e8kdQGBprQjnT6Ms8CJfB5GG5MZ9HHKqgGQG",
  "key22": "352ezPbueyXxp3VvKDSLP1H8Pct8RqQoHNEgp3v8zag66xFq3QdR6SSHFN13arTz5Vc96vvkoKrJmG1GbMMHix9X",
  "key23": "43SQiKvqRa9kTsXKcqjSi4USC9DWkSbtAZtL75zNPEtpxo7jvfe3PbouqFeKAcgHKDzoDytSH2crW8WoMThmi7f2",
  "key24": "2Va5eHKJskBs6cHMf2mrjiT43upnBTFm774AcvRP7qEfKr5K6m8GxFpwsSn75CTKiwnaNPfkuNTVPzr6JoejgEN2",
  "key25": "4QH2aBTrftdkWtWGnB1R4JGSF1Ps8b5V6NuyuKaUC7ANimRG8JFABCxU2cgr3GM22NMDFpYXT6DfVNLjqoRNUtCB",
  "key26": "2jQu8PBWRkA7CdRmCidJDGfM9Vcy6YnJDJkcBny6pdv8WwRGwQCtVVse6hErFvbGXD4m3TpXAboUBeqcRiEiJubt",
  "key27": "3LoZTe9q6gCFVAzDTQEapCveUTkJvb5evkpCmsAjTMxu6JSFVhC1aqFtY9LW2SPNbu5upEzsQX7TzktZuMQ9id5G",
  "key28": "4JmCDndzTBf7X9Va4ouCJqvnYEFcZMFry2Gw7VZmxaS64g1f1rQzmJcEccUQm35iB26qjBzkiq9SzAq3ihof13We"
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
