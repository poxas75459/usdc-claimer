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
    "2PwKgVeFL6Cc5JYp4yNMEzXNh86gu1s1SQNtVozAbRXPViN6v6xVUNr16UuEzXejsANopZneTH7C3ZVYkv4RCqrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fKW8nC1BwBhBEVqxoyaZLwQwu9UiirCQVbzysRYpwmKYzHsz27utPscbNW5pMoGF7hbTLKBG4fF1qBWBiPvywh",
  "key1": "3kUUiEyPz2C9hR6hdxc6HbXgMybUuTPQJtcNoDw7djmCa1CwrpZCnU95kseSkfaxVKwbX1YqkbLQvaTLFucNzxGN",
  "key2": "3hbbgsAtLm463EsQoMqCnTdw1Bd2PZN6thRpQTwVS3qwY2yds9ZiXzipheTWzxL38orbg1LDsKFkBa3abgwquMAf",
  "key3": "5WXi19eX8y5J6yDZjquEwVyg2wXAyM24eFnnsZCtr4LPRKN8xyzkK6m7TxwpJMa3eg79NFY8Y1M3QFKUHkorejY1",
  "key4": "5Xr7dGAHYzUmgfEqWwHB7RxUjSkk17vFtvxEqUUz7St8yDY1eeoesWbZd4qoGu6XGsx33jUwfVqpTuxeofKdtkGw",
  "key5": "38zRwMtNKWJfffHb2tXhizpt2ZhMZ7z6fWC7wQa8KgnTDbn5SPYR3VFx25TEDwfkX3h9Mw39sZP6w3otw4C6CSLx",
  "key6": "59Npxv48SfAL84T3UFwopbDCSpd1u4PthMzggAKZrpgS8VTyg4TuCfVYENrAu9cpvrzttVwx6AqNED17eTtoscHc",
  "key7": "qaCgXH84qiWxGAVwt3HRkpjtNoAHo22Ut8ZBf6TjQ7Fz6vEy6ApSrCFpaqwYdsea5KfDMcVH52rJesKcipvKdj5",
  "key8": "4aEHJjpCZbozdW8FDkqo3KPB4xrajrNtvojBwNzVudt7hb7z2MwrhrEJdhjXKnXj3MxmpfcSyjoKMWqWnbJk1jhV",
  "key9": "3Yy7yuw5Zu87xPjfjzzTPv24D9DGgtS5T13wJL2zWA6JsN5o39tnRYEL3Q8BFgDtUeghLvFyerechsQ6NxGMebNv",
  "key10": "4MkrdYrUZeLqSDAaXZzm4QPjArDfZwje9Wd5kQVHpEgkgkbEcK5ihJSJc6bdiM3ZcMMv5DFFmgZcpMYJoJ5ABw5b",
  "key11": "84GaD9td9oaciPDLNrissrF3tH3YsWhH7TQfHXhsApzRUxmmkxj7dknJUZeawP8P6dYqMMgfCb7pkoVVzcE4dh9",
  "key12": "43T6H86eWFHmCErPdmTXBCzy3tvv2uTvo8sX3nJmUL37bM3a9daiiNZsCmKfPaa3VeyU36Qtk6MDk5EdXyga3v2N",
  "key13": "2toK3bPWSqJxd4WVtodaDUcZV7mmRrupqEZdzYbffFKJ7YLsrgwNF6yPo66ZnPRDqvswNQHrCHDtK4pgLhWvQqAS",
  "key14": "4rD9GpxqrkCCSTitPQ312qQLgyei8FKk1B7Q33pj9nLR828Y6gPrBLiM1SonE69XVj9CxsAkdXzTJLdKbySjwYcu",
  "key15": "Leqvss8s5ez4CJXJjEACbPWM9BrctreA4sFG6Sx1KBcRLaHGMXVL6D3bU2V7p53YNLz3PAd6gpcjhopaGVXvH9y",
  "key16": "2fXBEc9wqmtY9gHP3irc8QmapvkAHLGPneJ473LxCBckgg4kqKon2Q8Y7HG6ej5QoKcHJzFBjt6odVmmGwsRQ1xb",
  "key17": "5qv2CUqTjNQsouGSGzPsgzegVAfJLdRiGjru1L9exJqGUJNewJE3PKHKQ8jbzFmRzh85zdC4VGGTsRUexSxGwjJx",
  "key18": "2TTn28G9RfRRfew7CX311S4ycB4XGbH21YFLGg2K1jW7dq89KiuyNb1RCHigpHdinFxW4vSgGZbgYWqFEuC44ejf",
  "key19": "4GJZ9JzVwnvDxNiZW6neYWorcsNbFcvrrnBE8543K3pHxSunAu8svmjF9meJJTGX9xG4nDK8gFjieExMCKCN4k6c",
  "key20": "241111mEhb3Y8wdetqsgHZwsPipH9qYvqij9baH4KWNUmCQwA6k5X38vWycsLAwLSDUFvfhbXhL85iNpaXxx1bL8",
  "key21": "3yMESwbkNSQWxK9qj5EomhA62KDzVkkSSstApk7ciS5wqpF735BSXfB4rdjw8s7VpyYjY7uqWS9Ko3piubocDAfF",
  "key22": "3nbu3P2k4gPvj1JLTq3cdGc4CAQpn9vzaZtUT5EpSRAnyaJT98vSposacAGqVtKkiwdXYGYVr6d9VTCxitYzm6RH",
  "key23": "5SXodsDLbUKC8PNc1wRytePoAWkRhcuwQQaX7ofCGqEZCnEoHepDhTD3y8zNfvawzsqsou2RVjJs4VDDC13NFFMQ",
  "key24": "3PdrJKwFWXutDiiUoZyd4gt6Z4GHydjMDbzPjV9TZW6N4Y37RcJuQHGp7gUpeh84emotTP8vDXBDbugMdD1G6eRm",
  "key25": "235iFkX3VsJ6AgP5Q8s5o365QAqNHbeJsXpq87qjiSZtCM7M1sPMqtq9BR97dEb7M8K7ci4oxECCDxsRnE3GVEeC",
  "key26": "3mVGJfXxUjK6RpZduCVdsFJtvMLQmb16nWVchLKgPaP8z2a1L6f7m7wYRoTsVpEKn3D3XjAU7dkUrm6w349XLAyP",
  "key27": "3XQVFu1J42XqLN1amHDBCRh2V3KMxRDJmQsbD74dxuwJ4P4gaoF1UMFS4RLbHagv1Ek4WWRVgyTp5QUSLvJdfSmt",
  "key28": "2S86cujv4165GVeTrh9upv6jScZgDaqZZG8AP33kKqBMTaTLo6Kxm2YpHjH2miB1SqTmNL81nqPKALYqZJ15Jm3m",
  "key29": "1sn1XRuEnqGp7nHxDi4yFRm4sBhmYrSyULKzg6AnA3TpuofkTYGqWGCLyxrYUZyddywCtJ1sfQBS65zZRZ7vdM1",
  "key30": "2PCeCfyRfstm5e8eniYHGvi7XHMzKa7SMqTnPFqaVbAQLmrR7S5mwGKP9ngXQKgeuKt8yUS4kCRKZrtZiPU2EFVu",
  "key31": "5i5sLxjp8rvM58RkgbNwnt7qWKpKjud3tCX9QTuahq4YDmW9bSoejvnoYktXSsqpyAZEv7NVpyuTi4D5kQ5tPMmX",
  "key32": "2JvdPYWQDtbZ6122kTo25C7RUY4eNGB2XnUfp6KpyixyasQsAGSPhZQ3nUtztp5BKCH7gpmN5QErsZ52dF5sYurS"
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
