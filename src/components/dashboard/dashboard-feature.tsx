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
    "5nTuatDHaENCKHek5FyNCQZGGCixMHKq5GHaKhZuWekcZdasFELaF98zZXq7SzjpcuaGTJcHXdUx58xRTmJqrNau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDLRHhenJMNaDtZQNN26dzYBVSsDoL29t8zC11CjcySS3WLZW6gF1sDq9zugFtLjZeuXFzAHadqrAqMCVntvdRK",
  "key1": "5XB37ZVAg3Jo6o9jLEnLJeqFNAgrDjoTJYAQJcpzAHKFhVkeLuoh3MmS4QNnWoW8iwHRrxLDagHSZAXhQL16Co52",
  "key2": "2Y2SN4qKRMj2Qbx3tnpNKKQkZ6guf4Lxkygz5vSD2kNu4LYidvJGANn8ky1nSmHHQ8hSAU8cRqqhYUYsqtrd4SpV",
  "key3": "2fg3Uw3E11mNiZ5a9jg4DyRqTyyHxDjb5bk2rk5vxu9rxsraHGoc4mAoqdxdAaxbLo9JEVNnrN7C6kdwAQJUAw1i",
  "key4": "26xBoFXbeqL17brzG5Zu4sVwnDQsaqogsxibj9QsSKrq73KBwXfdXtxskoJmthLiRa2qzjDY76t1a9WZoZBTvQdZ",
  "key5": "5Ac8uKEetzHNzHpRZZjbyUXESSJydinCdEsDDwKZZQgk2EwJgmWUsMgHKfgV2mT8wbASg79fZvLF7QiwoQQbgqKU",
  "key6": "2X2umAN1he5RAP2BdU6TtXKKRj9atvyVooHAVvBeuf5MNhZm2qTvsxUDX5wsWXxAsH5Sfy28zaxan9co6CnrTtxx",
  "key7": "395U4FYJX843KCicm3b74mT7ehDDVf3ZBWJUUvLyJbudN47AwVxMGTanYobKJutG8RijwVsAyKSmesxaG7E185qg",
  "key8": "2fiEmUgB3EWEYPiSc3ieW8c2qnYn9qKKK8ZWjkY8XHeo9LQWM6eRMCPcPjSuCTdKfwmXB5pcDFUdnVbDPr5XoSoc",
  "key9": "8v8dbWU7BVCHqUNYHtk5qKknWUJCPeqab8fno6i4KpCtvm5cSWZYqMJtNjQNPhJHUnXwbXpWR1Fb8wb1qANKkfS",
  "key10": "126drGGxXeMJUKPnEHbABuLMDaHQotzeuYhedhnRr6jCghLqbNZbqAueMm8jSFF8cD5nPWzE7vC9srJnt2T4Y4s7",
  "key11": "2Ypu5tPL44JXhtVQAPxeu8hhrs77pusYtn8gCNtGdJ2igsBpAabnWAMzceNyXzdLc6hA5m3wweWaXTTvuzCxaAAy",
  "key12": "3WBqMDmNLXx96EBYPGw5WxSbGGEFMKVjbZboJEcaXLWViEFKeaQiAQxvNDfA1ya8FBLYf7aergDf7y51yf2tCQk4",
  "key13": "5fsYgBwDrCB4n8eDuCzTDh2CnLSgz2A6YYPVfvuH1Z5NbUT4anEZYBP7VD6JXEuesHRXcjs8Z8sJ5ydgJxwy4hMe",
  "key14": "5i7BayAhL4pvJ1JFk75J1FA17HodcxG3M56SuD3LrtmUSA4ihR6ZPGPpTbFXWp1p7Up4vKMBpfkyu759t7rFvW47",
  "key15": "5PnJrxza2qBFYQVxmo4Abkb7A3bmx4XcJBYcgpEhFedwTm8nCgXwCixNB5YnPeV9wMCWH3cBLaeFuFB5AfSqe2dT",
  "key16": "3JcXDcrzbc3Gx1ksikxhJ9GRyYAnz3bXiiQGbKv5pmL8bXpUZkHBYEeoybZ594dAfMpV5vVqN6nXFuE58VNUG5XJ",
  "key17": "3JdgFtx6T9ZT2SF3YNnu6sMXEgFCveyaSNWg4G4tAr9ARkDaF9NNLsvbBVqmhoN2fgoRcTG8YNwVS74W2f56SrZk",
  "key18": "21NJJRmriazCKtMqr27rF5h58LSAS9rgGmjhfTFySTozmVX4eopJps4ohF4ZzDjmBevxHNxN1BcYZWduinodWmZJ",
  "key19": "2rTAyywRASPbKWCkWNxp6puzZwBqpbvtXbpDhCsxBiKVh17YpC1STnEEYhV2KDyRn5sxR5sg3Zj6iRA6EAjcm1wS",
  "key20": "3mVZKs6MhVPVWWTGe11413VSN5YHQsKVTryDhAExdPBYqfZQXxUBWVsNsmAXmxZjqdrq1XhsFRjzFLjvsocAqvvE",
  "key21": "3s7eNGpv8EW2CRwrscLTJUPWMBWNAjsj8QRkw72J1wVPngMGWciCrudp4pd6JLnFxaJYJAvYD21wcSCax1i1CP4r",
  "key22": "4nUdujw1KBAAXQYT5CHpiCtJSyJttAiivfXZg6ZqyfX9scrNg9v19wDUZ9Jwzh2NWNkRW3GwNWdXVgc4f8VTfusb",
  "key23": "EqKAjUqYH2LdJqNKEWwzqe1ow54PDGsNoVZFTuZfhFUeKCq6PEy96crXEiNKvSUXj5t4uXhj7v9wXc3oT3ueWu6",
  "key24": "5AG2iNHYHAKRkX69tedGF7eZVn14A5AVfV3ZVAchqpiMzrBGCiouMzUY8aBTRe3aUUYD5e4BXNvujFXsvvTzmXo2"
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
