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
    "3DbfCwc7jxgyzjS6KsHcKKFicFWXrpPkxjHesDu5J11dydUe45VK6egqDWRjHPtfD7Bye9VBW8gtBtygt5RkVSrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xru32WqchrAbtBFe4TrveaZfNURxeqqvAtMeLsFX8RKE2Vh8RBb7kbATkRUHDPZvoTnEa6SJHLK79Grvz195h7",
  "key1": "5v1nAvTtLn68BMDBN7EUZ5bGVXAM2MvkKqG96ZBAdj6H94uoVd7sijK9SFMcoDQLy8JowaAKH7asgVddo8FPZRvp",
  "key2": "3jt34NkdMBxW9snTFhX7jmEqgANPwNXEzJwg7Ee42Wmpmke6CSVLS1SpatdzRHTava66xRUcuCbih5FZwRfjoPP8",
  "key3": "3WbWRGyEL53BPXvPm1qgxeWZrkf1SoCA6xevhph9YP1NZe153FbEF2WajXbtRbhdG4hiakr9MVkG1RcxitfqL2Dh",
  "key4": "4Mu7okgWyFTiAK7VdvVorbJwz3pZArKutUmebzqStro6AaF75bz8eVjKayRfVzyoKRii8Q2e7r2NNGcitgn6u2iz",
  "key5": "2WcdCwiJ7b2hGro2hq26s9zvnLGjMEPR5jkzZoULTkmiGsMB1Duck31hr2RmGfYp1LpBozwzDy2MX3PhmgCPBwVX",
  "key6": "2Fptev4ru88uSBtRR1zSugDAmjX6qFghJ6cCHbZGwZFZNmnnJjTfHeYBoVbvHuvL3HoAunnZJ57k5ZUFWMBU62ui",
  "key7": "49xKrYZS7kbd65W8g91thkXEgovFkAcMCSJm5MWpDry58usSwnpg2cmpMic5ynWQE6T8jWpbQEuyvBmPDvhvpMsj",
  "key8": "2uSdgA73VfiCcAFQLHMEFDNiZdvSZpWDFy4ZKKUhzouiycYXkR2S6x6MdNKm4dmHvhmGkyFTR2Hvio65mBN9Ry73",
  "key9": "2xG8W2DmSsBJLCC1DLzoCj4udUt8H56VAjiDJs2B9sFH1EiNrXFVEHdvMqzwt1JnCmMUjikbHpgnAphwcy62xAhg",
  "key10": "2nBunuy5eyWAhP4bBi4xTMUfknQKt6tP44wwGxAHGsLqDdSuiCXk6FEX2fia4dWqW3YaEMkjDKiiStfDJFz2ng3y",
  "key11": "2xssKBzqEgChb2Pz59cJehHB5vMMf3o6m4AfNERmCgqggo99DqBPAAruQDF157Hur9sqFgckvgFwo524A1Pbuzcu",
  "key12": "647osriqWf6Z2CKtGB8Mo3Kh492aprenh4DJjyNuLjibkEjWDXWj9jfPWRMvdscYBbLQxU9veLf7kbGBCCaHP1Rs",
  "key13": "3V3U8XVNDcWhb2wcvn9aYkd2AdnVaFvwHE1T3bs6n57JmN7fvjwUQHuMyKNaZy3aNtZVqnrQAYUrde2HWZU2TVsH",
  "key14": "4AnhtvQgx8RdDzXKSqX8txTfF2YdngSouAxDHTwqhMEY5Fuc2SAF6aF3bHui8dgX8Pt1Fe9Jgtfn2FkaX8eiUBMj",
  "key15": "WY9noEY5fYSJP7aRgiPDQZGoiHtQzqRr3BfYyWi8NNDK7isCnD1NcRmgKFcAdnd5VwMLBW51ttXLLqZS4AHGCPw",
  "key16": "UvBVjGBUPPjFCJYKirki6tudXFM1NaFjaCQWsjNNKFmoobJe14R6B8RcseKbgDF5fiDUMgPDadZZMv5CywvCpr1",
  "key17": "AGSgtfTUHvqaMVnXtzZGV6kbSqRtCHM8frgEyqZmay2HEtzF3DrPCZdnd7BFzYsvpgpUZC8NKNYSwdE3dKxNass",
  "key18": "4JbH8XHA6addoUyFin4MUu5q1i2Ze9mxJPqTzv56W2KQNL7JzvgPw1fBxRTRVooNsLQejq1Bu6QNybR7SVnVx9vn",
  "key19": "4vsLyZDVPqPVMouc81hss6Acz3gWe1LCuTZUBYQMr4TaaqNtwJ5Z4j8UW29dnZRSH94dtusSHfmCc4QNhbwxEKVM",
  "key20": "5Xr3H9s6toVpWkgKjfsY7dCvEHxupnwG8tRPuFVLuCtbZjGeBkDiKJ1XTG1p37PrCWTYqfENBm6KDmHSr2puJ92n",
  "key21": "3ewTHRhe8QXjs44m9CT6Zf3UtMy3pWiZYLv8y1KgeWzoLUCF6fLLUbv6MQx5PT1jGHbrNdLL51iwnBJLts3fRWQp",
  "key22": "3j3Di57L7mukTwNCQGoURj8st56fbsXcKwoV6wem3V5D1rpD6zQrYeS7Nentaw84erMdbQBFAaCYCAh6ENwopkj7",
  "key23": "32gXG3oHNhukmFuEmHTZ1zvoFgCNpwhbzbeBNEjCqGUKQsJsCpyhy8zePnswUXSYdYJsV6tyzL7ZPVp8UonWzTCF",
  "key24": "4ZZycnftTtCnQ75psksQ8FkE1yjpwFpioyxNVnvaBFpkZhr9kgCyB2vV5CDA7Q4vmEfSnVXdDwn7FmUnuGvCoYvB"
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
