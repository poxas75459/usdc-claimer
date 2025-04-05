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
    "5bD5KP4kwtnNm2qyHxemb9F5W5qB8t6tAvnvZZNgXqDJYxzQjEQdTebTMW32QRzT5po68goaCZ7r4r69XxGsKnmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poUsnqKvBkuDyrGG5xcwrkZiCF8sUYnCksQk6zFWN9RnmuFEQCNaJzDtn6FfUrtHHpwDtsQaDQxQbecW88bdYx",
  "key1": "UyPH8RrzaVCwjhCGvnP5z7J8La8V47Sge2P7umKRSmSeG4fCuiFsVToyUG1SGMBK1QcsZVbwYevdbfyFNeck3K3",
  "key2": "3fWHomXGAiybnAtQz5xcXdyqGxnXfjAVkvGWhVupYs47maiYgRckeQqyX7Yj7xMA68vsD2cfEVVyinuqhiSh3wW9",
  "key3": "3JRVQADisyLcuLyh9x6Yc7Va4HPfLFh1NE5N5oQKFC8Mf3zDZHLNpyoCgzXaAvLDAU4AweS9LuRjfpYmgX8p3rJ5",
  "key4": "3UBUQkQQp4mLF4G4BrRCbRjSEdDkH2eNS1YGqfUM3i5LoTERUivXkqQLqTz86A93Bjqua9SAXc76FAHs2KKetMBP",
  "key5": "52b1QhHSbBgLJjde2D52Qa4QPvJ33s76KwKjSwpQR5duUEEWEjRgWtfHfALHHyRQSNFbiEoXvJda3dD2dgWtTs8m",
  "key6": "3vQNg4HjqfQb2T9hsZePqLPmQjqfNYHKZyeKzNZi7zBwseStUYBnSADT6VQGeiMb4sveswRyqxzU1PBUSEuNnga9",
  "key7": "4zkKLCHTyhryJZ3akSBovFtfN4eh9yF8XwCuCVxNFX5tBpsjYHxD3TNWDX3V7NyUEjvacrwTafJczaFXuEe6kZHu",
  "key8": "5by9iGU6tm1yMPNPxXTy6yynXWvdrkoJRBPfWVFSgi5bv7f8GkFKGH6UkaX4w6ui39R9kKMiGCNu2GieG1cRMYnP",
  "key9": "5LuX6iVbu4kuVm2PNssMSqGDpCuAjFLgrT6WJABkMc3dVkHUPV3is3BoZfh8hQLFyiXLTFrb5Z9g27XDtyeNdHh9",
  "key10": "2dt11jc6krE7LwEnDTvZ7DGuYXkNq9QoWdSLaCQXn7AG8nku5zeXgW71yox6mzTkbmMcKixYZH7MXMcD2aNeg3Nr",
  "key11": "hg8JMPGm2bdaQoV6HgEkkCsyUt5bM6gEVJzHB3e5n5bXuqbq6cePbQYKnYzmekmMrBahekt9FYMcN26NPu5EbEk",
  "key12": "HbqohtucBedrc18Ft7rK8ZmfYkMmbq28LS6pLfHhJeNaVRHQJbk1f6MMHCPw3fw7NrkHkC8W1hVwvg9s7vFNvjm",
  "key13": "2HzpsuQxGsiRXYrdCzE2rrfqrhrU2QaiVHmmJRLwz4ncyTw7mvQjqaSJAuj12cd81woFume6beW5R1cN9dXHNMvh",
  "key14": "4K9XGmJBN5czreRCYZMNFHcqNJkrjj6o5ziHUv7AZWV1zHMSjAoERYgXWiUTFSQxUEH1ThC8qKfU1HyL2WVuEv17",
  "key15": "2T8SDGrydFenFygFWtwyzSePsXReTvFf8FCZHNkRQh8BMqMhJMxWjPumeGXm49xmAZgHSMCYtdt7pmZNzScfsyhT",
  "key16": "3UzUhjU6KqKerHzDYyhTRMszGjiB8tsKBH75MWXv61qbSMjv9Q1czrfuAQgsRojX9mZ9Q1Cg4Qg9UXidEx6K8ppc",
  "key17": "65oCHjAAPMuXeYY88txQJHNenM3fs5aGJgqTHpBWNj9EjeaifURZGMb3VEs7rjsUC5yBTVWM79D9HmMTjFHwtVtR",
  "key18": "4R37RMvu72butu3CN4YNDoNwPayYTCBYgagfKDvRCamurF97L5qzxHCjTs3xwtiRapmDouUC6N87D68zcvMvsX7e",
  "key19": "28vQQiThMS8j6Tcuy1RT1TLxXJJYjte912q21WrDT7WfARsG96LA75kH5nvqZ6cCj1m5Kiy1oRPzQPxjWgvS4Hz4",
  "key20": "4ZuQdQp4XasxK5C1oqUKznr4Y52zmUEEA43NsFJbhqg3Tdg8WQWv6VotoMBzC6YPinYxxt4zANyx4v4zUn6XXBbB",
  "key21": "5YU1Cu9kYZY9CxfcUKkgogdk5ZjHtJfpCGZ95VdksC5L6Bui7GnqLoVBkRmpc6vrxQe3KiyoBNkcHsVp44pJUApm",
  "key22": "3nQtGXgphRd9dNEJzQJCCzrzrC2yRNBTht5Re7mWEMHaVHPLfKMDz7NmAKSvZSHRhkFGQao619Ts5wG2EN1MnCYz",
  "key23": "5HKjyzyG3jmExYmcW7n8ExvNXLTcWjCt4TmDLGB1AgoYoqVRAZMHgciLRWu9Jwe7fiRBfajKyWFHtsUPmnZrjiuY",
  "key24": "5KqFb8w3F5e634ENFGbB3MFtqnQYcUKoRZWUUTQg7nGpf1tjAUzKwYkutAoG1rarmTiANVMBAzVathSiKnoUTjGA",
  "key25": "tiGQyMLfTcawt8zYVTm9CVxF7cRQk8qWHTKwejdf8Lv8wCZqxzEd9qYrHFqnNSCkNQ6fJBpvwS1CXJiKjRctDHq",
  "key26": "2DB2aMAEs68AftGcdHKHMRouU4WAt68oMFRxV37HQ5ejM73rkZXNJUYpBUfzGSEVY9rffx2eTbudDDacQuik25rq",
  "key27": "LbDEhJJ7oBhme5i5eYf1dcnDXKdUVLN2e8Pxn8MnxEMh1YvzxiTgUuts26sjgcuyBeStb3C9ex23ENjjmS3ZPnJ",
  "key28": "aQQNEoc5GQRSSeGesxgfd96dFcuD41P66L3K9o49KBhg7Sboc5AP8HaKiJv2qntuBcKXc55nSB7adk3eEh9TgvL",
  "key29": "2qUz5C74vRFzt36G3SqhjYhpfXgxQ8XJBBe4xjRnhwox4FgSHaniJtTLedGcyouV9NFAZnpC7tJECX1H5NUx9EKq",
  "key30": "fXwSLCjE7zWB6FeU3wEhhtWVr2Xio1mwHL2GePk7FDumdDffe9uDet4LGGLddURfWH7YpCpUuHiZwtvPRcvpAQ7",
  "key31": "513tWbFpoxMS9ni2HkZAMUrs5vYdWzTZC7TqnqRSMpD4oXQ5NQzFaKb5ohcG6VAbVWjqyBeWUVNMu3akmrWxxRkB",
  "key32": "2Det7upcFMEEhLn1V1XWUZ2PbtvEAj2bhoAEbV5a5c4Brwu9D1ovNoYgW14FmefMaQJB2eoBPC1ofkMngTK6xX5h",
  "key33": "5pfPaKCFRQ7Q5TqrZRxxCmvkTyvL6ccCtyx39DjZzkXEqcBdDt7LL8XiEgTAPMFndAvYQYpSxy7czRyGP4cGJY26"
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
