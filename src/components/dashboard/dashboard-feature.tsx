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
    "5mjHayyZUNtg95UZ6xqV8qQjen5CYmsLmVu18j2pzi7bVj1ED3YJggnE94NUTg5u8ydaqXJKAjjs7qQNRCeHKPZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcE1V8T8Vob66TCSzeUneqkQRMQKPwKXgdz3uu7CF8i8Pz4eBhucYXkUFN3LaddfkSQ7eFhcdbYSm6MoAj46xCy",
  "key1": "2UnchgkZL33SEVDGmrB9a7BxndHQ9qx7PVrjtsstP2kUzVxFsvE6RF19L7qGd4kaQL7Y8hnNE3bk8Sw5P64QmWxo",
  "key2": "4SZz7wPhnzXNqcA1yWhZZmBjGbR8vxExhcGki3TazMXUifTXn3oGZYGDmNCJ9TNgWyurnQmNHSgB8YKRcLZuUMzb",
  "key3": "pU8wYx29PnSBteWVDNkUfd9fmGexNLTY3hYEuAPXoHY2NPEfsCcbQVWdEW14tQhmUQkkA6EpBJzdSnrAz69GXvf",
  "key4": "21BH2AcrnB9JEWwQgwkF8jTVcAXhhcdFsZonid8pUjjtPkJYgz2UGBopoEMbtuz8iUALVWCGo7BGVALr13Jj25X4",
  "key5": "tz6JMpdX3PuTvo38jukcc3ueWzWbcWXqvjgr5AzSDXvMWtwcrAedFjfskt51MMtdgF6SCw1fnd1Qs9GL6hSN5s2",
  "key6": "5EUes9nGRgdgY1qAUBnmK8VHKX3UamA18aD7k5ZpQa95WpomUgJfpZ2VS8J9SZkSXA6XTG8cw6D4j8FoyHWcDuzV",
  "key7": "3cR24GSEtyx6inxNC4qaST9DLkT39G8tKu6B8tsKAyoG7Jv763rPu5jUXBEL1eg9nhjRihWfPYdGyABwxX7uuCCQ",
  "key8": "5h6yVDf2YbGUgvba9BcCCqqCM4jkVRP9VvAqxgKcDQSRg6nEiZXpvWZE9RPdpGUUPkV1W5TFTzZNeWZxr61EZ5xx",
  "key9": "3NxVNqJjX9KcHxtiqTY2DGbSdHBaqKX9iDkTBzS57SQWxydsugnT8DUqQqRxSxKDTbwcK7LNyLvdaYTYBZJYvcbN",
  "key10": "3Yv2sNFrkLRXCb6p3Q2xexRxT5CgVjFUUMm9FAzSaxN9y9AnfPaKfbG2HmoqGccJUnr283MYaDjLNSLxHn1GxD3Z",
  "key11": "58mqivdFPoeBbdWBHHt8A8du6DtoGczn5n3eTrGbWyxe1USE8YzeKNSNLYpfGn15Li2Eitp3ZHBEQmb66Xs7cAWj",
  "key12": "2mRJcTjRERi7mtAiMAmFoJW1djFPbD98K1DkR6xN7LKbzDLssMXpdrFSDYCttntPwJewgEhkTUp96TsbsYXDHZSu",
  "key13": "5b9558mQHRLnk7Jpbe5eLcVR18sMEvW95NBTQKgp5HEN8qoZVVBXSvBMW2Rk6wrGnw2XxXNLNv2Ku4j5NrVhx6n4",
  "key14": "3N3cCpg2eisMD16o6QwEmPpNub72BzwXvYNBJa3hb27qhQa8gTwQhk2vC1Reeoe6GNT4nBYnicEiQv1bGByrj8wP",
  "key15": "BX8Vt8WVqjGFH7djsZFjAeNCLjRz3b885B7aF36ufxtj6fqVp8aK6y4DeQ554t3SyadujhaQjePZUTPHSjwZLJd",
  "key16": "2tnyTH7bmvxK5DenZS3T3TGa5SLpBusnAXrnFPhz2W2oDwodZG8RGZjsUf3vki8tXyxuqhbHF1GwJvvL6bMfXGyJ",
  "key17": "4dFx8B7pAdGKonSuGXgPCMXkXjYDc19GCWu1P2w8Yet4pdBfMXT362BFxxAD2jJgPWn6BqeBuEdvGWez661Drvjn",
  "key18": "5YQZbeevp7EQVznJPYS32ARACdNmJ1TxMnJCY8N3L3AkEaAm64LLrXuwmxbFLWJmkXubcDmfsZMgvaJ2WqJ1GiJK",
  "key19": "4D3a4W9CmjaoveDhTDqM8TyWzKGLCNdUzm9y48S3YgaXHsY4TF5DcjsCvkfUrRhaPTJUZkfyZFA8KcLUbtLHYyBu",
  "key20": "2kaBvnX1YKtdHw81n5698nNbFgwjEbjBbqjeVgmQBrqH8uwkLSUxhCRrAt4WVz8S1GD2CxVG8WLHxs2QS1Gp4NtC",
  "key21": "fATodtih1kmtCyqEFbrNb6knxTjvXJMUAT5BuKtU3fomDdVmrQ7KWyAEamZSjSkb9qc3Rv9hLAotdP4RPApuhSK",
  "key22": "2Wd7hgxcho6EmX6yJqnA65RrSPBE2ewA4jVNrgL8kp4ikppcDekCZichChGmt6U6DHWdzNDvzEWEBuwnvdGjWzhs",
  "key23": "2gAAV3WKU77o7KLuX5JCNsMnUKtV2e3TK95vBRrhD1TnEcftMu1stpA6C6JjL55qvALNPxd1QMMiR9FLBKqETrb3",
  "key24": "2Q354eNpw6c1t8qBEphY8aZAL7vQWF5qgArK6wDa1MNkvpxPLNFDw5c8QosRZgcBAyDJTL6bGnC2KWMD9jLgMhQp"
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
