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
    "4UrpmMnvEhap9MjEu1TgJEQMTSrt73wUPRuTMK6BXvrDMq6b44EdhiNsAtswoedNwqRuJQh6HaTWrC9CXykfkRvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ET6wAY5r9RUrdUFkD8CYS4mGJmYY135EifnL98JeTtnrVKdZDyb2EJ3oTJwYiKMawsYCH8qYmzgdQo1x3Tzkjj",
  "key1": "Q2QkMK9e8jMkrRCyAWS2pCUgfB4SSusFmEeTbFeX5EJsmNuyARmQRsY5DuDnHCKxkubUAAwaRegRsshmZcaur4m",
  "key2": "2yZcoDJkPgRifTYhYhCyRFrhPYHeYy1KwHsmJ1fKf7AALoaougtBkyiY5ve19Ho2WZwkrZLyYEczF3fQY7AYxSRA",
  "key3": "28cdN4sGzrTsqMHcqw26jLYZmrDKwfzEWUQGirxHZeSA33nwMbyXicGgjnmL7RyXZhAxuwJeyWbfj5D1KAZ4ffHA",
  "key4": "3nkzqELNAii6sfb2fznyFXGjSn3icPkCpDbQdeWgQQJnkDrnRV6RyMGY8eaMqJChTeun62GjQdwrXMxH9dwkaG7y",
  "key5": "AXPVJErxWYa5hitxrnZwS4LJQasfZzvWfxJnraZRek7GafFU622bNG9CHA7oR95QJG3WfFrVUN4QgZcMnHNQedV",
  "key6": "q4Z8trpwHaYwjHcHCuVqw6WNveBdc7ExvatZHgzUZPhqfVraUq1h2Cy2pFXztS9myUhFutmZjLqrT6TC9vte93J",
  "key7": "4o2z3rN7Z2dPj6TeGpVYz96XqkQYbCaHJYdoDWTiWTCmeTEHQVf8PLASMmPAx8cEeu56NPgYeVyVte4eyjfC8pUW",
  "key8": "2EHRtocFDfZiybuUyK5PBjDNixHgMfKdumaQ42pUyjGXF7TfLZU9kuh1edrrrFZy49aCrR9FrdzyJhh3QW7DrLpg",
  "key9": "57bBxh5a4b7SG4afXXR7i3Kt1uC7xEPkJHR2pgpR5icW7jCoZGJaXnoPknPdYyRDeuLiBA53Wzirq321CXXwXTJs",
  "key10": "5qXQBWBFuEKmvagbuS8rSHVxPyZXHC1s7dcwxzMTqPB8jkDegnmpys8gYUNeQyBHx63M5QihbXBzrLaUaSf1Ti1a",
  "key11": "48WwmpYFCM6v5BZNnjwmyNXPoWXnKWjsXYEVeySD8GYeNyGHkMTwQXEZU9Tc61jkLR4s5USkXNGsLupdiSY6fi16",
  "key12": "42Cs5drkAQUzA7sEJTkmTmxutrepD7ivLNxEWXe4HXy2AvPWRRBgAAYfJr3aFM2sQudGY65VRgXwUoVLj4LkFbB7",
  "key13": "3FNsJr71tVmNSQnYApgBDmJPu1USzaCaxEcyrHeKMRTPpm5NErAMNAPHPNVfhiSeNQSz9i7bssRzY5U8Esm6BsBV",
  "key14": "5fwE1yYVFKEziGLBjYzQujjrk4oiCa9NVVrwUz812hFX5pcskqRbTwSfJ3tZdNFPFTx5LAw3QZZ2GDhoPoWRqdWW",
  "key15": "644i7DDwSSrSre1EeAMRgq2pv9WK574r3PwrNSBpsrwJKbkgW2fbnQ1en3VQBtauCo3VX3DhzvuaSVusrDXQ1XN7",
  "key16": "3AGqztmKLkPUgcsMo9Zrwh4W7N6N246HK1vuEabBHLQHLrSrSTWoJEo29SiJ2JpVp5qsHWM6ZdpGMLL6XkDawtzC",
  "key17": "4TH98ZXH9D2ochEN4dm7zYhEcwB5n5LgAucdA5vMs5VdwCiTALmnVqkYHY9tN5M8DCZocpPKYMLURasFWA7LFJd",
  "key18": "3JReUoW1v1weXaJNAKXbyoBeoGFFXm56W1oSMS98UL8K3xRUN3YGapWvLeP51nLoaWPr1hAcDursnjvNirVzy5Xa",
  "key19": "3tTn8xEQ2gWmCfibUHjTaG22ttdcmcXtfiEgdTghukaqwG1PDhkqUsj9XEH3ZMzLWYLCAqeJz1arWvDp9iS9pnJZ",
  "key20": "4SXf9LA3XWPEcSW1gaYtd7H7bophCqwZactv1se86YJCdgkCBpTYP7fw71GE4W8vNhoVRDUsTbc22yfEDqQBykaM",
  "key21": "cjc4bPtMt4aqmaoVvoxfkMuFUWj2CQwR5bafVkRrULFxc9TYjgmrFPSLYDNduuJtkmmqmP6MtihShnj7rzmVEeh",
  "key22": "3D5nYK5QP5EzJxADtZ6AHM9zwvC89fz9EnTmsR4uuJsevb433dHBP9kYG7QV23xsLJQo2tuNzXWeKmgfdPjXv811",
  "key23": "kYoS3zqByUZZspw4d5jbJfpRvwaQkSmRSF54eML6bxdbmMBmdcHTuuVwARMNcZPCmnU6Zqgnkt8rMyZ5NDJTqZM",
  "key24": "5zdCQdPKRuve9PDSSFKZVyM14K86RAyNMNnKgoVsyKeiUNzhT4rpuVBBtJMkCw2nBJS3PwsRU9sK27eNzmn8rGB",
  "key25": "3cPML55XjpxADcJ5rZcDKEb6hVby6jS6fKZWSv88y18gGTa681P3AsZ6AmfKkeXR6JjkvpnCXb9zStsu7jTqeYR2",
  "key26": "2f3KDU7EGDqUitZynpCZVc3EkfpvVQxULfCYRPSf6ZAyF9R7paWxgWD3k42dAPS6eXBb6CwzWZLaqFjW39T2Lwq3",
  "key27": "3H2AxGSB82LYKQhB1edEtD2f3WNq8gr5ndSTTVfWMKCsiUw5y1s99rHipwmDpBndwL7jKJfxyCV6mtNyiLQuw11C",
  "key28": "2DVYKAmFESnLuCSF3bHsW6sHcJPXn38mykMsQ8REKx9DWK5wnWWWy3PMioa9BfrBmZ32SM3iuoyy6n2aeYhrEJSW",
  "key29": "XTyCbPQMETy4Qqnpksyjbm8CMRgadgqosmXyQ4SorCokX5HtmeGGSBx13uzvWcGiPpgB3UYjPhcvCvtxuyVyBXo",
  "key30": "yPrhikHRaynEp33GjQhQfSk9ujNxhh5vTYs5DDaYWQeKxjyEYqLf6NULTSeCPzhhBJACD9mAUTt5oZaXLL4kJrt"
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
