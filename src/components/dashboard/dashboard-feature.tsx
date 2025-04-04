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
    "5oFfRKUTNCxjfeBDCSpy5pKVUSPiPkd7Y98mGnW842iYGCztxvyP84UFNM9GxfZRYbYGmh6hZ6sc6bnBCojyVvVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GgJ35wyAqXcxHh4fYY5jCd2BwXXnFPLgMgNeAJg4jwyy8xMJezUGpjMhJeqxAHzTfcDgkn53LSRnYhQquVwU14p",
  "key1": "9gVedd3vHLbFiVT4b5scqGqmFnEUwcS2bE7Y35ejh5rkhtvWVS4Eop1JvMSJ3HxnWMykvPMicGBFygHzh9oZfLG",
  "key2": "4hdzJjpgpDNZtMReZxm9mYz7MVVj6HABGRvnZtYuPUKiqUx2J7ViMG9rWmpeFjdyqXLkdeh3ddrKHbCASmPvHzqB",
  "key3": "23i3LuYuEjGEKWLAjw51gyZbu4AqjCKBY7QrGsQhHHfakRQ5MdcZkTmFcw5ADL4PLixhVfdGvgRz5ZK8PEBjUNVK",
  "key4": "2KJhRX6FxcRuoAK4rQFxXNF7135bQCqEec144Cww7G2t97MpGPRNPTqYmH8NS6QADdXcKjAJqYAhxZ92oNRy83Wa",
  "key5": "4QqpyvuXS1yZj5cFgt4ymCxMM3VyRBeXQSW8F62osYFepM7T6XPN5QTe1g4MWnikGBXcKYi2PUYhmeNtUFJW9jMb",
  "key6": "4nFT7LZF1KxSEJt19k9WMMy7anNLhZjHSugnaQnGKhpe2VnMn52X4iiuFTrzkp9NDJjgXkKZ679oNwJ1ctrVzCTm",
  "key7": "RHj158mkz6uxisBPsP3eEzCyiJPLB2NszuPiZmcArbwD1HsQ8b8SsMkAkTGGWryo266fiSHbmbVmHB35Nujqi2b",
  "key8": "3kbpg7x382gtXfmDuMCwVqmukkgyxTR6uwfk89cpb1cBvxMgzW26R3AqqC7LTnso2CD9awjxdrRwG4jb8yWFbR6W",
  "key9": "2NVcqJJj7cvvBvLCyfN1kgSvLiqXJAumQXE85m2kJShBjii9DQdFMus1EHid3ZYFPNt9esLLXxM9sS8w6pEN7q8p",
  "key10": "4WMSNJQAycozfG39q4Z8BjfT1CqnZuP2knuN2UyGGWVDLjVFPEBdPQ2JtuFXJpLztcwTDBxSc81Rk5nbiMuhtn5V",
  "key11": "5hgMkcmmF7kMVkGPFWoZW4dx596VKNhMfr4bXBU7SZpYPUj4KuRvErE6kKMLGEUcdqiX6wWcQQPgNRCHUceFo6My",
  "key12": "44kShCuvA3G5tjR3Q6P97mx5hsWhXoVQxT5ptS2mHjadXqNLXDc56mxz15Z273Pi5T3x2sZbEKhiZiTSRjPK8DmF",
  "key13": "3KNEaHE2aUAjVEVDQCnZpUBxZmQwLdVQZ7vpGKpoeMa6ZaKG9nkn1AJrPvtWRfAfXH7HQBZpfg1NzgTAFEWKLezu",
  "key14": "4tqzRjxX9kbinYjys8QVNXJa5Umd2ERKFGx2hyc3291ZpMaKTub7GYBED8PFsnTcNf48xpyco3WLyHje341nMWvG",
  "key15": "4heQcbGiqRuKKerTrNm3h4F43g6hPKDgfyVyJhCieKmR2j94epR2zTGvLpB6Qx1ApCMPy364uZMQNkcj8C8RHrSh",
  "key16": "5R4eWGZSK2im5T6KhMEUbN4xBEDwtjwTvTReJrPf7WQGfUfg1JwqspcRo11536PHw6sbzXqQNq9yhvUwZn4reZUd",
  "key17": "eWAnqnZKEz4CBj96VUoyaK9j94ztZrotChg9uQ3BBzjgCjNjgGMANpzuoRrSZp8ttAhrDwUo3podvbgxoLd7659",
  "key18": "2CMiQaRW4juCT4XXGk9PxGFH5GUwE5BQa52QvPXyrhvpB7VaBWDXwMgT2bWD3yMHbkiJfHV85nvcNLNQokyjJcSH",
  "key19": "2MzAWNktRBPDLWUZffJTJxWxQRdwhiYhhF5YaVtsHAA4ZMpwg3xoM7ohiLxK7MTL4AJVCZKPNwTKtrYc11Rmxi2D",
  "key20": "zdfCqGDwHoW8nPBngyVAUFZPGi1bwyRgNVtajTjpwEk19pF1LpzsJmA8w3LLKD1QTX4d8YoRVdiwmZSHCWUGYBC",
  "key21": "3GgbgyaNtP5rW6USxoJNqvpUfjjY9cL69oYkubpUx7oBm3kQd3TZckVgRYF2syDMCFjXXYTMEdfbsF7m2ALFMcRd",
  "key22": "3nkCR1k798qNYHQxy8RcpKZcwDrQ9Bj5Nw1HX3Qb16RjthiGVNFT72GkQ6AQRP9cki75JugVfCkAHhRAsJwtyCSh",
  "key23": "Rkp1kMUqPC9KBZ8qjso2xSjetS5kYZ6KG5RjnP62t1tHXj6uwWc9bHheRjbcZFEMkDxDtEBbxJdQSvoPmZr7KpE",
  "key24": "Rweojng3GWcaELBVYCamcp8TZn4DfPEASdBSaWexJNF3Lm9dSZakZgirvHVJbgghHP1mecyuCWecS4CaB3d4rXg",
  "key25": "46mZw4vS4gHLbh8isrH1D5HYQjgcvuadgrzmUdQWxWP9JpHShQw21s3Nj13Z9T6jpyfJPwgNvBiDWzmP7BYKBiE8",
  "key26": "3HedTPFoTKygZyr3AQZK6K5z1YwMJNr9QQkWQetkozJvGeqbvguFXHENr4VPa92VpqwZKmExsiNxK2h89qPQcd8h",
  "key27": "28oCPZ2BfiJAsBZ8Lkc2CwWJBZkeKXQjgYiAAfVFHseZPyTQc2wEtzYk2tGNEfTKVoTTX9K8iDRiUAu9XgLrfQC7",
  "key28": "3Jtufkxsj5r9iJ9KipWsZZfNVPPt7jgDC7QWqekqt9PwqTN7RzLBvTzZvDGVrJUCHobRhZv66PkDkb9aq7XfyUGZ",
  "key29": "4k9LcVmnm8BCEyc4qkwfbQ29vdPc9N1r66CfJQCpeG7FAp6iT6bBu1R8oQkAWtbnAfG4EFQfvhovA7ixxucdd6nh",
  "key30": "VrdHeaypjWk3Qt769R7s2zZPVoWrXyu8x3poYgQSRUjP5Ek1p5yyMRW2r7nCzR2cBpUEChnuynLY3zEDGM8jk3B",
  "key31": "4qKajjqUTuphWuiB7ujHdH9PwPCJPscntdkoDxRpHrvmcE8wiiNFdXY6gtUxMsNu8xMXjDYVqBBUHQPwVVSVFMpM",
  "key32": "3rCGZWxgsoZRRe7yvpoP3PoApDcsT8DQS7berQLaa7624qPuiffskfGSVFcDjT9n13BffubVWeFuQAxBs6SdfzVE",
  "key33": "4Zuw8mDw9ieZXdjRbkMGThLGS2vfXbUMRVoVgXfBBxJwJ9GCQ75NLywqM9uoiDNFHeHjrBUBYswyabVKyL8NHP5r",
  "key34": "2nDn9Z67JFY1PZFKcsuj5L2nLtmdaQCHKPVPqUmHATCni731DYWHSBc5wMqFQnLjdvhR4x6mBdLCsUF6nEwZshof",
  "key35": "2pFDk8Zz6b3JQgRe4PySsSfgSSF8cj7thPzCvLkQwAqUFFnC39DHw2TaJiQPmEnG3CkP4b67PGEDgCb5LYMK8HX5"
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
