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
    "2UtXYQzBqtbxyWUstEoJp97HTbLEE6zzYB1Q3gKEQKbnqqrUCgWDkisSUWBDNgTLoZ7XqbbXBu222tHVyTRZB1Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqdPKDT48cviXAeSvVYpat1v2E3ArTRD6yQdSky3v6Zpxq1nPbMSHxDDS77F9L44a5usq3uGnLXfEAuXq3Cp45b",
  "key1": "43S2myKgoSJk6QAmMtgeq6QrPahTkgEoeUMZjcjmsGXZMt9EYGnnttSug3LSb4aoCSd2P7dXyNyt6Bzwca9XkqdS",
  "key2": "571odnkArGcQv7Vq9Key7635oiEbX9j5W2auQYsAdoaWkSzwS5KKumw6tgFSkmo3xTpb8soBe14vBXSJbUVtStFH",
  "key3": "3GLSBz6bb99VCgsRKDSb48VT8GRDN1SydkVc1o4b3JbApYzrjhTD1QcBpfWgFB6wcZYc5QEH398kkLznS459Ww6v",
  "key4": "21KTvJn4CLD8iEVNoGi7eCLANZoXG16rNCRZHTxHQdKpQDsALdWZizs5PZUbqBPWqkxDQVu8ggfLbNqpeiqBthRh",
  "key5": "z26wavrxaH2vEUbvtxaATqDF3NWWWG3HjffdvNDfTBBrZpa52tLtEJ8N7XdCbJUzJj6pKaMzq3iFTFvP8Q8xmaN",
  "key6": "5cQJLwYaSnL883CE85suBjyftcjhB3NNaHmdqkoCuaZ6zy8BbxzoGvQtxv393GqXEgP82sddHH1Lt75uU8medBc6",
  "key7": "2FbSCvtxc5TKxvpQ1hkstQrMbh2zEgWqsiJw3YcVxPSWnLLUqtXSsUWzAJML5MvwxM1tWUeT53zo9m2jzTtEyPY2",
  "key8": "4tie7pEbsKEkhaVTSsbwFjg6D3HwTmeJhBiSUyXSjXUqTcLnVSkaNUq5dPNHyquDLuJ9dGH2wG6yg4MmtnFxDp8A",
  "key9": "3B1TYqQyH8w7AzPgAuyuLZa8YJfA2P4x98WaQ5a9zZg1MiRiYySVMq9wbhTDehoECGapHCANj1AzBq2a6XUiNndg",
  "key10": "qTXKqY9zKo5KNGnzTHhkuyQ2zrE81z8GwPcxSoVPRssYPFcrsDJcAdo1FZUXdBMEN9vNaCS2V23QYoMZPsWxhhq",
  "key11": "591BuCiR9bYbyVuxFb3fD1zYiRdeJYd5QjJJ9mxQgyAgdQ8HwMJGYgM38pQw5HNwmaBTVUNRhb9UJa1XUq4JX52H",
  "key12": "2KJ2DoYwqSwgbPXaPbB2zuFPg6qFbtBoLaEMjP693ETXRVN5bycFYNpQZZdp6M1nW5gSR9VJyJdH7Sdfd3s825Zk",
  "key13": "5sWp8coHbZAxGP3vpSp6anJU9WLfmAxQejrDxDXLJzxBhWkhNeV9HgccCLzq7pamZZ397YxHKrH4i9s7wLgg1tRk",
  "key14": "5vmAKe75PK5ZumJkqLhZdRqD4aTE6NGDNVc17Pv4tf6X6qW4rMEC7jGgH62A1HNGQPCdFFecoKz8jVXAzBPFDteF",
  "key15": "5GE8wrhHm35ypEKWUCBFcFEBpVHKcpBMZUgmESDyGS8EyfMYHF6tnwGsEt9EyAijyvZV1aUaAg1BMhPAzPjoVEcA",
  "key16": "51kJdu6iKxE9xPLgab7JCb2wPkchTkAweU9bRGGRX6bjckqXq8urm48U9cx9VXCHH6wKxkGwEVuAvN8RLqWnAKHW",
  "key17": "nzvdEVseTfDrejCeWsbQvxdye3AW3neqF1GcEEQy24fskrQ1BCSnaA7x2sQ4MWwnpA29MPmkKUHDq4SvVPr9Wx2",
  "key18": "8Q5R7GmoEAjegGXTPpe4CZU1hHEqUPumu8ixYf7Nc2Vp7DpdbDdMR6hc1Mo2EjaLV2FQ55PdddCK8w7eSgZ3sTG",
  "key19": "16Wc6zkzc4kG39PVxz5JmrViVjd4j4CCoYEfAz7zR4SUXrknRxCxTU6zbVg1SfMUcqN7731UHVtetgPDWZiDUpd",
  "key20": "LYYQH6AXnvfcjqE6pPLD9BfPzfRFpi9PfgEaqze32EDtUwcA22kxcRNxVma5tKaHux7zGx4U9h2k88XRKZCyKxb",
  "key21": "rfVWHHCTzD6xEKg4JNPvhxEJ7XADHWtSs6Twb5UEv5oBv2MAZgzev7iqN5t1g2rPsY984qSY5pDcKuc6kaCud3E",
  "key22": "5yQDsRXJFbFMBQBnFiuYmUv3VqX8JzM7igGdUL8KEc1fsF6aRYTqaPSu45PduEC8hN1Ub7UH2RecgTBhzvHXPsb9",
  "key23": "5KDPw17J4NkaVDrZhbhP15x2niPssagjzMAszLrLfMeKFJvuWhNDdcLms1nHbGFH7C38tmfDeRkLXreCU3zQAYoL",
  "key24": "2BvvSU44rBMkU1fJRHEWwzvh7DJfNAGCfNFepULcGZLh4k7n6DjsPNsa1cz7YQt5JPmontAEGNPjCZC2C783Yup7",
  "key25": "4JrzPu8Hj7QeAnoKPkvjEAtmUNDEMKXTfmxQfQsMgTgKKEEFdWWDV6DS8kX5y14GouXDRRcagLqRGktBT6kS6ikh",
  "key26": "3cXSZDAfcdWEfPMnPWqT4tTRn7gYV3wSxaW1ELhDrUMrTKzAzjrb36ByhASU95NYumQLHdb1gatoL8Rsy5DY8BnP",
  "key27": "KNSr9hnmXgv2FhvNYqCanBPt2Lf2BwZDvkdehW5V6HXT3jkEDoRUZvSj1VvTRqbix9fyXGDB3xiTirmpdLoedNW",
  "key28": "4WRKACHW8GTKTkfmmWb7VKmeERNaNokUwFFg2pDncmwbcwMLXGThZRwHAPa6mQLrGQ4mKza6hLzeax1AWeCqUQuH",
  "key29": "4DodWYEK6HbY2wTS2NsNmphPu85dGPirgJNgu4eSzhpUrzyYT4C8pJQ8x3pHBAofNmusVVXmcC1NQpJ119R5KcbT",
  "key30": "2syeTahqM9D11Uw4xiL91Fz56LCQNNNMBXkuf2xvRsfuZihJqSeB1A6prca1YgDNXpYpWmPHS4BteZcZ9wce6vBj",
  "key31": "2jsWtYfBv4AUsZYUSnSVrvijSxDsEXkWzPSz7rT9WCQNGSQyxjL9SoUwt5wq4jxwUeSJAneY3X888LkKcHuLProx",
  "key32": "3qzN7m3zSTEWqJvzin44eFsRXy8XgUWD6CpN5aRRn1JxGpvHD2eyr8afkNpu14Sz13QtKw3jt11x9r95WzDnjf81",
  "key33": "4FaXyHH1hAKeBx65rUYyYCYKLuaYHdk4X54nahfTG8H1sXGBkqMGZXo4kZmdTvnB6qric27qWaipKSJhcvHZ1FFh",
  "key34": "2dpqGUkz1VqfCe1r7JdBEZnqaBXAu6ogBUcDgcvwp2DhSSuDb3Y8TUCeb43JYMVH3z6Ewij8ddT4TdjwgqgkLgJz",
  "key35": "4EMfuVUGaE1d9fUUGBpT6XKcxvegVRQw68hUeW2TDU7ZHQYFtzKVEypLBCd1TBRBLqb8hNBoTBTo67y9yXmVyuu3",
  "key36": "27g6sqr3Wt6KGwzizpX6QGgNVoG6PKbjeefTY75moodMWBJmfYFsesocpvpvNVfDKNcg9pvnPvzNukaC7Gi4jYVc",
  "key37": "57xKi742HHiUSWwqaewobXHha1z9pDv1d4qvarhM8ccNcG5vmPVw9XGQ9Sen1WUPhW8pXh1rnrUrVc2bLuV1A5Rb"
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
