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
    "WKCBcEjeWKCNP1m18Rn7W8GyjZj9BVcU41kVDUwjfTFmDAgtBiwDLV13P64VESg5AaM2vDyepwiRBy4CjKXUWFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9r7dUL2fRo78GrNw9FMqnafshpb5TEhmUBnGr7C9xvSvu9iT5J4rWvPDnupTPwja7RWdd6NRMDgyAb5q8x8nGok",
  "key1": "3EnTEJJa3MHXiGMPTZvXyBzuPffwvwWyGM9JUUhFoFzxhG2ayvzoieykUWn1JeaQjQ4pJ7UPH1ktBeRZp1DU8e4p",
  "key2": "3Pvaj8BwGPyP1xa2b3M8YxCZ7i2reEZDMqPXKuPYgMqaLGodRuEwMqrBSikJSHCwWNVxyU6e8B91KX98hzfBM454",
  "key3": "2U1Vo7MpQLes2v6yK8WVnC4A9CndTTvqMKL8MhL9u9dcwyBaF1HdPDYLZkwHGdYCU6SvUVy7x6f3C73dQGo7LP8q",
  "key4": "KbcPdrjmmadvoHdqZYAs4KTNXyyMzXbZAkki7AbPde6qE1SNgQ4fRZhf8nXZYhS2oCfsSoMSQpcJR9maVZanRP4",
  "key5": "57edPMMnz9QUDdDks598trq7EYGcCzX1TGwqRt91BNmXyJiTLrNDZ98U6v9GNmb9pMMAgky344JoqscUvDiaC3xB",
  "key6": "5HkaPSEVsKD67xpNcjeCbH7Dxqfm4xSCVvUhh4VDYkGyQ9XHMDZFc9ATtbmA1hcy3gg2r6J14T52vTpxCpyAvn3n",
  "key7": "587GWpJfjtNgYTh4armwYxLoTu5ef1cZbLN9K84AohvhkKKHFekn1Ug2nGz7hGdXQnM9EQLQMZnayirhpVCRRsC1",
  "key8": "3kTzUaqoEJ75zogboEbb6w7BbqYzTerYggj5edr3cFLV8EcgjCWX8qrnJy2WUmefiescSjnwHjUNygQ2LsHX7HWZ",
  "key9": "4xyHnkjwsFzMNanAiXcxVR3DqxKwiTK23Ck6K4F8MEBdHmmewDHzVeZ2jQqABLqNYcRhC1Jo579NLsDJqCKA7fhF",
  "key10": "39Yf6G3Qu9noqVuqMHHYB5YMy9yCWB6H6Z9zuJ7KNUkWpRcEws3SQZMQnGumM9YNsQY8hcQ1nhiisTnN9uSGhof6",
  "key11": "4GB15w6t1cdtAHZvqJdecyqhC6euNAav9aVHBErKBLrAcXoNhB9yq1CJgFanqdt7KtQXZu691KybwZBoh734gG3j",
  "key12": "45iSX2coYdVzQuhfqMaU9q5GtwdGMkGsfvMW854xcYhzwTYvCMdx2Q2j8dmVRSq4ZqzQBYHLHeyiuPiq97Agt3rc",
  "key13": "MK4xfuETzNPefmV4bgUKazM35LZDkquwLUgWjKe8e3ujvxtbWyrbghg8yA83kQXViba15Uou8dU7iUp68bxW5oW",
  "key14": "47QKaiG365UwPSxV6zU1PfCBYrgUT9N3DpsFTXySPjzUqVfMUApLzk2pgLgTz49q7SP9R694MKGFw9ZEqtXcXNeQ",
  "key15": "qUau4xfVpwFWRmo67Mh4pEU9gT9MAigcFUykwRyrRzB3ZwBrtUgXFnsncq9TComhExcG5H94FrF2JgAZ4knT5mZ",
  "key16": "5xWpNmy3AcEwPZiyWkbmS6FLF1e5gmcZ37AhJU5fjUeWPrxeFrDk47rECn7Ja6E2z9A6mtAZPAuhz8CZabJB3c27",
  "key17": "3YpUymecYZ4amhmgpT8uzKCEYsL5Q4ZKUS2zYxLWwMcdGzjwkdszSBBMp4yT6SkTuwomF5obFLA3QaPt6j6fZ2Uy",
  "key18": "UPgTqjFUod4QZC1MVgC2DXdM6VFYXEc2sjkGPhwmGTUEXoqWR3ThMVTJ1Wh4BpiKVmpXRdzQLiux8KNwpjLiZMu",
  "key19": "5uNTEYxHXEHF9VDXWWDXajg9eCYL5Eo5GrSHuDMdeQEJa7YeWk6HiaarhcgG7c2xkEBiDgcUzHhSFMDqYq1A5ZXX",
  "key20": "5o9ZmirKjTruT6UiUZ6yfrhPQBe3iqt1P7dvU5UhtSbf2kbbrswHfSuZKXuyhVUphuh1H59nPEk2KagC9LoL1R5",
  "key21": "5getWhGzDtsmgmjTDGUsbPtoG8QnHaCm8x1aWabzZgG4rmWheCR7n1sVNTJTJv3qVgqa6Syd1Q4SyuAyFRwBAbEF",
  "key22": "2SJzUboSLEzg42DdZFGR4JtiB6Tm2MxKmNcH9dH8uKU6RtYYusdLQ6D9hSHUbCBTZCmT1XiBfsmLVAYVFXuRqEiX",
  "key23": "3kLEmYdY8MgAJgZQqMsTNz4QMjBm7LNa3cUTofdr6r37AbStdiiy1WAp793VshuUoR7xZNz44LhnpgKq4XGeN6Lv",
  "key24": "23vnPgBVTfDPdH5rq6Mqjqh7qDNbALKjeWc8fsFY16TLhEJ4XPcPVfXAmNRgkx1ZaGM9ySAKLV1BKr7deDqnSEtM",
  "key25": "5trTSSDtaiRve3bY8UPrLR5LXoQJe29oPGZkvqUzYHZgDjHAMK2rFDWMZgHszqYHf4YWWqsNVxEAB2Q7RiiYNr2s",
  "key26": "4M6iFndDgo45Sqs9QEZZAJxbke2xCTxFaXrKqxC9njsLiso8qGfoLeumSKe49UKnFxx2FHCgsEBqZHFPXTL73Ywm",
  "key27": "5BL4uqahWMyRsPutRd4ybUvG6AdBejnfttVrRs78JTiQ2z4F5Li2q2aGDgHRtXrgGDxDZzDfsT34ZxSrzzfuMhGg",
  "key28": "45qeQ9hwP3QVKjJ4UEB7rymgaR3wYs94JNTeChnmKt2ptcehaLrvUppNdHvqJxCdxDPo6humcYc9VKmwrrEG2WSQ",
  "key29": "2qwiPb9wY7mWfxAXvB6LLdbLj1qLFhmDPRQgym7forF75bmjuDHmwwgyu9ddAqb4NM5ckAFYfvWnnZD5RbY7kZ6B",
  "key30": "L6MGdJuhPYp7kskCzwYwo4xzAdTKRg6pUzHQbRrB8nAaNBM6ARwpAaqaQudHdt6fGmrm3zjAACVwRs9usvMnq2E",
  "key31": "5ZXhqWoZFUjpPfTQVuDToQ2eKytYBAsz8zi7L2EWLX9KJfMWGjvkwJxoVEv9gvWwiwThowpb34TkeTRytwBx7viv",
  "key32": "5u36rbjPYnqqmg3bLgZBUeHLABga5mWqvkjVGkGXdebic2SAuY6P4NLnp7w4eHCW2HgQgScQEbDf9zezBFARs1sU",
  "key33": "3d1C9sdMNLg8HL6Wi1dmn5G4Hgg7j6X8yfbm2TgmP8S8uiSpM5Co2y57NtWMpFV62ZDPKy1cJk4aaNNK7yhGeZEm",
  "key34": "2vkAuYSikmHXWWgA5Q9w2fm7JZSFL9cScSior12hceWJWcq5jzskUGG8Mdm5PNgMhWagU2nbxfpgL5pPpnhWpTyZ",
  "key35": "YSEvKGEJYbEUQH1QxuHcYCnLmfxNb9MA87nZcCmbYuyx86qhyh6qajX6EL9qhwB6V2sWgnM9xz1GgvcqTx9Fa8b",
  "key36": "3S6SQYHsgZyzHd4hmV6qG4Sa8FVTsn7ndr6u47US2BqkQAmqGzyKzSnFymgSrhGhi9QwXtqPEZwbhMuCP3Zcchx5",
  "key37": "3rvDJGdTCDiNqymWBzheLxgeNJLUc2oRaMwt6eRV6u7VWNy29zoCSn64syFemRswrrkHgtsh76zdEau9oK3Q9Y3r",
  "key38": "4DmZ7bQPY7VBFMHNifZBhXPDdr415DgUJzReKUFBB63x3zndv8PsDJg5zYZ4bP7kQfZ2AjnvSYqm8SGREkD9iSdD",
  "key39": "4nGHVJyNQKEsSe7LSvPrJ1FAgmpjCt8dPgFrcm61PpWRmedrrmfp9u3cVevcLysXdZqqzNyR8DSBDWYeyT2sL9pa",
  "key40": "4eTeaxzTeqftGNCw67uVCPBYaY5QZ1wKAWSdGFEJzMt8aiUNB7tyYXCE4zrV1N9PxnY1f1ip9tQVZJruyh6AbCTT",
  "key41": "55Q3dgQjHd9bgxGoorFfKNAKgkbSr52tPn9gzMuzCCjjzG2sUm7ucSYaoVmsidJ3rsWLyPzctZ7k21ABprZheRyv",
  "key42": "4wqNM2ThbisfCnuL7vJPG1HKU6hKLqeaUiseKmM4PFaXdAy2AjAiEXqoo69Laqdw1KZqDT72MWQMqhPGz1j9LXEh",
  "key43": "2APACH9rjdAGcmgiwPJujBv6MYz27WAyVPJDeKDbykaH4kpztpvinu2abc4tKSgY3gyCe7TG8DQ3JNZsS6gFpGsk"
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
