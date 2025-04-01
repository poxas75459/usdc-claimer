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
    "2nScHxpxvdgeovcSoyzt9ttPNn3sGp5Cxnc7vptZQsPvyA9cdmJTrvmVjRTMY1Xf54oTsARQaY2bsxhpkwWMsLbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXhn56MQHYxDn7zDvXzvLowJG3YnvCkA4KPVmdSSLMcCpiTinu4zSksQqzGsDy8PedDHG9cQxsqCLYjc14Hb1gX",
  "key1": "2CEkPaqPBvgULwJGtrWbBHc2X1G83eteG8QDunLXUiRmAxcQCzcYkYUZ8tEPUTqwyvBi8qBXHoCxK8GMkXaYYUGj",
  "key2": "4NEgAuEQGCRbAAoZKfuRYwy6tPqGvo7XhQqApSF5m2FEXVy73M7Q5kzaLzzKnW3mo5kq7CowFP2dJUzwarvMxj86",
  "key3": "kh1mZD4wkNn1W2Xq9ZMxEYsvbUehuCPbsGUrd6bFNZoeUSqesr43q4nbKWAC5LXS2v9xvDEBUKyqCeXZom4DwFh",
  "key4": "5G2FPdVhq2TRmYCDqWm5zdRcNVS6ubEVJz9eScHPXwBCfVtR8whPB4AiHj2YWcTgCTzmRRqJckSpX4qQKVxfVe2J",
  "key5": "25i9EjFTCas9c8FGeZ5xK86jNWtrgV95AEGf4B8BufSL2ZiSr4cJr8xShB8wWy3HPHhbgYNtZ5Leaaxtoje8WU4B",
  "key6": "jSxi6dTGfP7W3ZEhm8fMxy8wnqwjRVDzL2Q3ucN9ukK2occhPChTpwt4hXtLFsfbkxuzxkmqYjrTM8BYWLnoQSj",
  "key7": "HxkRYqBApPGhGPMWZ4xeMyiXYh4tQThdfzLAbcULjWFsUJZfc6mDmbm4EyCCu4bRr1xeNZhADZPSiqfJzg5J3vQ",
  "key8": "3yFbQra7JNEDPbeWui8fGgc8SfuKLm64bj8Kro2B4yTHGUiJWVGwu2TodUvmuddzbcGDp9y1GiimKDALgptBjYRN",
  "key9": "58HgkiqCjUYVpm6L3BoneHbsBHrazhoKQXPc3M3wpDGiU9sjY8LKHANRCArtKdBrKJLwWmGbHUZ7rNYWvj2Hx1fb",
  "key10": "4w4tsCyXbQ4UnwH8GGUcU1BKxgQrTNkvdP87NuU7K6Hks6T3jQuKPVeySSk94iu7sS2UYGLP5ZU2WDEpj3HoZxpG",
  "key11": "4t9FQJfGZRkUijjwPkpPELhKA79tBfSz3hESW4npxKvn8xUW84shXyKzU26D4wxQAFQWNxuD5eSTCcyUR5D8HrK5",
  "key12": "5vFgnfburDKsYXvSwcoWE58XhqeZsVeD69gMSG7b7QuaTtM8vinmG2ryhEaEfKzC3hFh2tLVL1McfL1UK2ueja5E",
  "key13": "2UnbGSFLoMS4cwXVhUrcTcTh6Bnze2VJe7ADvqc3eVvp6bH1YKEHKzEDVyS1mpkRzRCgNQe31bCBnw1ywMJvSt99",
  "key14": "XsJTQErqoE1k8aqXg9ZD82pnzV97ghTKniegXdtHgiqJNVmKxN98vc2snJHxVzgsHjd2vKfSJ5Qeg8g7w3FuDkQ",
  "key15": "3y6XSqk3SLu9o9hqJegpBojHAqY5VfUA962P1ffrerpyT8XD5AynpWbWD6VRnEGN96BMXdex8UiqcZoMWoFasVe6",
  "key16": "5157UJ1vbD5YU2GtosY3uHiNjeKwyAjDgSGsmYZrBvgTKHHGkTboXG7Je2dR8NJSyNyEBcz8mR9TWPa9N5jGphUY",
  "key17": "3FiZexyMjD4yEk33iYdpAgQ6GKaayi6A3tveokdh5xnb2EDbdDBapckBstRmg6fvMkoxcFrNKF41V7ABNfacjwVo",
  "key18": "3ck8F4jPtLEragitUfN9vEmEtui9NzP8fto3XGokheSNjrJhdoE7Jp2SQVPMZTfQdNw4iPsKQJjFQGZtKssU8dKd",
  "key19": "4c8JbsmkWcgskwUUSapUyLK95Cs7PSerXZjQK45yvYewnUedcPgMjc415oCUWBLG2c3y2xqbeWTaka5L5HLsHWuN",
  "key20": "2CgWaAoyvDdLutDQjNn8DRGvcAnHy86NtCAn7CofqKQKnF86N7XzBKb29snwpDBJq3VE6kWmsE1ja5ig8h5mGAq1",
  "key21": "4SdiquzGXvBLrmrsrqC6Tufgtp2u3RnNgFNGyurdyRH5jgDP1Jb8jXTw3WLeTxDfqa46VYqhPdNk21YVkEEV936U",
  "key22": "dSVoyRU7oX92mP1qjWkLwS4JyQgZNE7PyHZnsSYdLXBTMBqaPkVJttkjaqdzbkaWNCuVkEM5zeNVcaWC2Yqs66b",
  "key23": "vUpht9d78GiLo54XWeTW4xHyrbEiA8ZXwG2gfUSoUmHEMDJUwQgBWVWdQam1FzVy8EUFqpzsEXjG2A6wLaUD14L",
  "key24": "2Jpss9E2GFvho7PGjJmsypk8jHYmkKVgFMPw6PjKh2bUjhq8oNibu9bcp1RxKL7QWPCT3yiVbJs5rW4ABEb21E6i",
  "key25": "4Sdyq95nb1xALaQtnag3Mn6cwoNZC8LBNWsDiPfd3oRZPWaGUQ4bmmXofSojBNPYx6JjECvibgquieAd5U6aNT1M",
  "key26": "3Wq1J48E5aqA7hyFSKKeA2QV83RRf61FaSULLDs4f4tBcxFws4CEFeinr5WUEREqcEXVRRScwNf5AXboQKBr7EAY",
  "key27": "2ZnR9TTP2xQn2LAeKEXzPpnMKSUkujveAi5SfXVaK1QgkiTtU574CovMRQzG3m8hSqEWBnM3LhKtEq7Cjd3SBut",
  "key28": "2iC3AgMPGNUzAkUe5DpGg8zAdKaRtA8rb3jM8tNgPHN6RZQDtGBuwSBeD8suP91A9feCeZqar4wxeWq2PUNRBkke",
  "key29": "grSC8uWUKJGUG4jpbD1GAJztEJW8MAzCYJY8x2EsFYSLUg22qBsgVYuZV2yVvYVLpSbDZyoBFhFFkikpMjY1rL9",
  "key30": "n8km2B2DBoWzgFVEAx6DhYitEt649QGbWSFg1nCaCoXRhGEopp3QNQLhRC2L7Q7QpZLxYtBQNL9EroLrQLiUDwF",
  "key31": "22Q7tVqSrdvFVKVaeT1StL6Ft7UMeNfScHFHJ4aWiCyEaQu2yLdoCqc6bkZvv94mx9QHzgHkJbfNU3PUzxtRDMXJ",
  "key32": "52P4jJgXvqxBirkN2XphGutHoxQSo7gLT1DaVxwQvXgxGTco342PugHY4d1uNRL5sT5ejvh7w5xocMsKQpn2KP1r"
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
