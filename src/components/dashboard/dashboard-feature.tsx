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
    "59GYqmT7NppwEMxpd6tEHVDEKABtHXNUBginknU23FVt4wUppAsgEaMeQutdGE5ZWBSDqSQgtjA8xwrNxq8Ww96p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsymCjtQSkS6QQryumCuiZZ5bYYvWfLfzCAop9yA58XDMpoT6usRJyqQ4YREBEZYC2UBu7MFPTd4Cn2hbPTGRmH",
  "key1": "4FaEGvgqsMx63QqJrS3t8E4xSpoyC2XCqNswoufX9EruucN95HtZhdGSSKZXG4YoVmfDDotKGmj5wnJBqCS2n6MH",
  "key2": "32A8wZ8aeaWu1XSA36BFYNiPpEJKoTL6t4ajk2Ksu1hWNBNxrwKo9npP8aZqQ5gD6LGZVkN3TJbswaMrZcdLLVif",
  "key3": "3Ci29ibsm85DazbGWGne2JnjKXqbJwJQbBD9P5g9ENLohpuJswFYBgyLa164cT2uXT1mEC4LSwJy5orauZGPjsUm",
  "key4": "3rLQeraa25RMae1uk5jpzhRetCyS9JMbebiiCQEspB9bwsvMrAJjSUEazPvBARHchHuBT41aac3nXnzq3iDmrdcc",
  "key5": "5GxUMh7V1vbNkFahxeSHuhpo2G3jqs3Lry1CvQzTD3U9PuMCcwTPvUJvw4Vq4WZ4tiwEY9EcaMSWH1BUvxeToytR",
  "key6": "2ocPnPrrs8BHAF1hXhVf5h4oniwcVzD8crmjqUWkYyTjcDY25DgEVMxVGfzJV3mjCNh9e5LJevNhC7bDSmt2vN1Q",
  "key7": "5NkEsZUQBh1gS4YE2jc3y1TrLUiyjvx6ATqj1qHB7Mi3Se5wbTLNK5coMeZRn9BAVj1nqaPxwGgRvS1HSAhfj2Fa",
  "key8": "2vKqDwL2ZrjksWfPdBeg7rXvorREddN1ED87XVEs8w6FB6FSk8smpisc6K7RFKrZ7tkeUDKeFguVTzNqw7aoGMgB",
  "key9": "3YD2f68E3rawYdGkFXuj4Kt4VjcN8kye4XzW8vFBSTCKQiK94iHAgFDjYWgmj2ypmwRr1dHkt3mXFxhEKKemY2Wm",
  "key10": "MZpUYiWPqSKp5pKqE9zWdnVmVEMkTZnsLh8rGP72dvBjay2XDdqsWqL2UnbpyM4nkk5bQzdguhTVnmGKQnf227g",
  "key11": "361eNRpV74bdcQhGCHzUBbik1fQr75RTXpshynbXZTvJqmeKxkTBPLjTbnBhucEepJyEjiHv7eC7MRyg7nKzT3fA",
  "key12": "4VcHqzxC9y4SCyQgVJxF1TmsHXay6tg6KJqykLBcCJZDmb1JwLwfqowhkEwECGPwjsHqkQLyhKxCHeJsZrzPooqN",
  "key13": "64WsWteRKeJSRp7CDX4sS173X3486v9hNFsJUxp1Ee4qAYEe1hRWDgJwdQJbktEhmqcLeAvH8GvA1h7pBAV9y5xG",
  "key14": "4uQTgZwhbpxxM6xsxnZpZmzAZy8Vq2UcavRqMqyTGEFgwoD5oxRbeBn3TwJwZdZxUYp7UPeqq3WAP2HddMqBNXtp",
  "key15": "3deDyhP1MbAbAi6A3RDyo1FzG6KrYXbiVSU6wDB6EeWZYKrNX8wwQVAEsy2HUtK9U56LZk8c3S4M8hfzJE4QZd6r",
  "key16": "2yVFmJ1pCb3n9pjQwb4nm1UptDYHJYLMmNunEeusqAUTN7rJ6J66dZ6cs8B41fsPxnBxCWCbYTZFZaDK2SF2xeN9",
  "key17": "9ae9y6UDyQyLBbgYcqiPoYzVAWt1yf1enDj5aHZStk2Ui6AFy7dG8cjdVvxDDjkq85CNvYrAuywUK8zKCbrdmFs",
  "key18": "3MvyTBBJWLLb1VjcZW9RXKzyaHZZaLTeCicHYHTLZA3oNJuygEqSYQTsktne1vhFTuEmtzuXM3aLdUahNospg24n",
  "key19": "5f3GTokaNVizF6W7FhqUV5R5gZ5gt5oM6xCdzfCx22gn9kgSaYQm2hshWEVWvXcXSyirATqcDHy7eDqtZ2fntRHn",
  "key20": "3uw2yhtuacWxNSMZKFVcdCaPhXukhQicXtjHeWweXEpzsBfmwFKdm6t4DmTHWeyRzW25AtK46tkUZpP8e8YdnSrN",
  "key21": "dV2RxzzicgX7w18tzPSciu9q9VdDye9mJAELQjiPqCKQusLeyYUqN6gU8f8Dto5VJ2NWX11tzXk5zw9Rvvp91vG",
  "key22": "52dqsjWkkG16VAFtEtkyaa4UDA7ZJrmd4M3ZWatQUjKYywpBwC8WRatNHTWTzHuLPZ1mnRkpuqRMo4JeLXoFk2NH",
  "key23": "4sGS9XwkkyCRsvvo5oJ3BNMnCAVT6MRCwkEYWSXRpGELvkfp7WRHGBtWj331NxToGnf8WzaLzMzkFNUkkyypbKWk",
  "key24": "5SzvSJe1BxrRNFD1Ud72uoT6H4x4PddQTVc54vxCnUrAkd9tZRRo59hc4j3Q2mpWUG495jbyUQ7hcn4UwMtYnVio",
  "key25": "2cPx8SAjSd84xaoDMjg5qoDionDfcjFC9XFeAVzTYVpaqniwzgTrVYrCXUi6QtLQqSUAGrdEMpv9htnmCU9Axmej"
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
