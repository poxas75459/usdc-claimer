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
    "2kPXFaenTTN7msbPMt6nc3aHWZC1ceWjuvfTtko3wTDPfwUyRzxM72uJMR5nPLXKALxxQiFFLXErFmYn6LJNhPBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZJYrnBab2hRsbEy8B8LJ9WbSpmvZwfPYLV2mHGk6m4zrroMs6H3Pb8BbtVhQ2NfzFv1kEDAejyykXVyYx6wE2x",
  "key1": "4yDti1c9Rp93trhwVCtckGHDHxA2noXCNz9iiLJEdhAPxnkakJ3kPX46nhVcSD4TLiuTd1FvJ7mX5Gv51KDnz2V4",
  "key2": "5Ck6BHNMm71iYxu2Q8AmUL3jLVRx554geg5dQk2itSkRckmkxTNtxYjx6QbLkPc7MANCsBzxiDBeUhzpPKKVYqz",
  "key3": "4ntBGMMTkbNvS5U7GLnh2p8GBjf2j1D3s63v7Z2m4NauRynmMC27EAHW7VSnbL2eHB3fxLE9pBMTephbSX7z1AmW",
  "key4": "4EXkmt2yJxwAzgicBuXKhmRYAoftLizp9gGJh8juR6Q7VG7vHhoAw6qEaL7tz2rsc5NHJqNRBhouZnnzkc4X8S3q",
  "key5": "paMC17NKniWSDMSUv9hVcNfcff4K2a7ifkFjPCrqBcHx6wafgQJTiHB7iQP8cVyiobxhnS9756MVWxFeJKQsVPi",
  "key6": "4aUUGGZULhQhzrQ4j8aimPgcnGiYiduUnNDms5ZeruWrBt8LWM8w54sbGnDtL6TmSL6ovAtXidHHyLDj5MmVBxSQ",
  "key7": "7fC9yNCrtwfH2JjSAkgwGXFEUtEsGaetermSr6gvYWs7yVQkdLuf1Go3xeS6Dr73MZAxNsV5Kj2CiYmZCadCfuN",
  "key8": "4DTRURhzPCPMt9FDhdXvHgA2fgZbUmxXT3yQJiyg72cbaFhetT1HmUjkjMeXb7hMn89zRzzdyzG5bs9QY5j5uyiz",
  "key9": "jHDqM8c3hFg3jboJcsgPuybpLoc5L2xSMMe2D4zcwz3bSBiu8vq45b2B1ZynPYkFStxYxQJXjHpby9Fcc7cWU3y",
  "key10": "4xwz4NKGe71Zi9fGJZWNeyAUZBsFNmjJrfTuSztytDJATLzZ3oCmQAZr1XruSmGADxQJKqT7S2Ky6Sg5dykwyfv8",
  "key11": "6KirV4uK5yXVebq74CQoFpCmViVU76w5TDzbADBMmajpyzNQG5VvbUs6kzx68z7xSVvWXtcLqw4gsCRo2QbWsgH",
  "key12": "3a8J77yN1kpwwMB85vKfcmrdL8KRa4C8hNidjiPzKwaAfxtXH3KUeifubRuJCWKFagyQZE7E2QPJ4stdTbonatkN",
  "key13": "3E6e7kD4DjWakb6AJZfc33Qv1faJjXvn6V2wKVZV8TP7vK16gTDhz5SWhpeNuuqY1kcbjged6oEBfTvmHHGrNXYw",
  "key14": "2FdjeBXUfZNTWTCKvgVwrxXHmhQLBJXH8UVEd1hoqAZfYcNusV6Z2g1qWKj6E6Qucr3SDUTPyk4r4Nhhk5GCRx2D",
  "key15": "2r6DCvSHwHZLFJY2NYCig7GS5tdN97aAha429Rzk5WXXQNJN3M2MbSRjtNGijZuxEz1wMH9itnTcKT8dAxWAvWZf",
  "key16": "Nm3VT7h892sUVTvppN4dPubRmv3fTWYVCinTtaXvTZ4FBWtzenV822r7cmv43Y5KSkLfrJNFNZ4PRZAA6HkoSGU",
  "key17": "3LZAD6DQP2FDkm8tV9V4CjxzRbJctWKepHHyYsdwDrEGzA7RBNRvAY86ja1G7PeKszTh8a1qw6qyjpF1d2XTBGTc",
  "key18": "3meKRDccNYVFYsZTtBzFqjUsDgpyJHADy4ChPM3ebNdg3xocKYq9cqCyy1gXfwa1BkqG8skoVtxSfrAPP3P8iPcE",
  "key19": "25xmCN776VFrYraAq7a5cehnnuBS8K5QWDukz1eQeHKJvtfCKhgsV4HkW6XP8DMvoTmvNukNFyGQSpif7u6w7cc4",
  "key20": "3Qr4G1418m8yEJdgXmkduahYcKotg4LUbRcZVaXTGn2mykhQ7zV9xZbFRBABN7RdKkkteAHqywYgrMJmtLFGWrM7",
  "key21": "58aMmuyMPRxJ5KJ7KfjJrBxuMKRPDhH466Lw7nCbXLo9Pgp94sZLUbxxC18XFgWx4NDeAuBoteMwDHvLHzjV1nAg",
  "key22": "5EJxFdzkWehkbvdjJDXksEmBji6wAhRRS4pPD7Y3XDFuKnN8s4TaL91g74g6TQ7bADoVoLJiZtbxrgSEMsQMFvCK",
  "key23": "3oN7XaV5QU2veVbRT9B7JR4UsJGgmAWPZ4JXfK6Exbn8WxPNQnK8TQhjQ72Lb9xZMvLyjD4uuBpiKJiW9xFzH8U3",
  "key24": "2LZQ39obYd8Mvz2eW3wcSjiGMcup7DUNyYvRsyYcvACzBUuQgYvosQtqjySBdNT2JXt55p4kE6i683cFabjoHdN5",
  "key25": "3Nn9iiWfdp7HKVcszN9Jj8CWdrohmgx57dPiAHMtikeemskAUtS1jFTQxRd587v3sjz2adBWdv95U2PeHXhFSpwK",
  "key26": "S3wiGjiYDTczh2zqSMdwyBrX4bCcdnd5WrTa6jfY45jkGrBLPRdiaHYv2oAzHQ7vG3Wt38oeD9aYeZc8eyF6w1h",
  "key27": "3Ldd1MCEmXaMUwM3N5xipyc9xkvdvHkwNquZqPmMcHTEgcXaGTtaXUGZCjAJcGMPhj7cvrFXm2YdEVWX8sHfqJPP",
  "key28": "2VhGHLtpj33TXhWua9eqtJ9UvZoWxrU5bdyqjc5hkz7W4ruhKqvJsNw1j7RTiY4b23B2cnC7HwNo2DbruY9t74SK"
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
