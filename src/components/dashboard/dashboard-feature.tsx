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
    "4sFGJbHAnKnT18PxQFXYqwWJJ9jzYuh5cKByza5XziNoYzd7U7VzoVVUmHwABKcCSeDXEYyiikNLwVmPHm5H4Tpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1moVLksCyJ9q93gv1K9jBjdxUbya6p1KgGpqqqMMXe7dy5Z2Bd4vhYLBJVWd8Sqiv8Xhu9WVzWGDa5o5BcUoQa",
  "key1": "55LwwDisiLWYci2Z6Z4MKEZ74fV1iYZgrccDx9LZCr3rTN3VXZAtZpFFTWbS6Uc2yDS22ErjnfYMg6fymBBGNxiF",
  "key2": "4d4QTaWtuC5sM5E6AdJyK3GrgW8fXxevn1Urzbz94X3K31H6mtH1CSHcmMZP5dK3CPQqCoZikJG4eziwzenZCCPK",
  "key3": "2nVNgtPWX7vRwkWcgpxUPfxbKw2pUuW1vvvR82ZLV6Zoj7yESWdaZxDUJkehpJi2gxkCGoubgF2qhPPRZuajRg8p",
  "key4": "2J9AWvnhPy58CrSD9UXVv5fsq3AzgzL8tiLtUwysQzVKy4fwtzVjUtBRTJWPJ3CHKScz7HqpBib4Tbv6X7hE4s9z",
  "key5": "4RCGLwGXgNYm57J5rpkeYoVvRqvJooBX3wqNsWXgu5MNomvLSA9r5VpYiDw3VELTUxzrYchBadiSwNPHhhqSeUSz",
  "key6": "5q1s3nGhBS48P56N9shnugjGpUZLSd1H2D7dmQ2u2icuCPzo1hQCk3gygnn5irLEwe3iALZ5oPB7h3duUtNussYq",
  "key7": "3e2ZSN5mWyK3ofZSZahXVTQfkYN98URwQzQkDZiwck776yhCcpf4kRfxLe1i8rXtN8P5f7taaMwAUjKxYfSxb4Gw",
  "key8": "4GjBPbrT8Sgz6HCikiEBUDEL5LS5ugsotQkBvV819b7T4n1qwyJYvmXvgJjrQBGnPaoWyukUoFX8Ukj9wHbWtESJ",
  "key9": "mdwHjUAP1kXF5yAzDH1f7Uny5m2upDUQBgDWPxWihXwRQnBozQvyZjW87YtmwVcuJnURJkixwtfMmnLhbENAFmb",
  "key10": "3z2cWc3QMCeCgcv5mXbuLDqkL6v5JmgTPKRLxyWcw7M6V3wypdDrN2gmbNRXxF5FvvbK8sRf7t42nZV8bfNQtZaD",
  "key11": "4UhhUrBurt8JUS9ofbr5bkz6WKPA8d8iLYuc5pSuc2JHUyjtxtJgZ9r7qo7rmuNeaHUjpAsEQDbs1rzKeNwSiKv5",
  "key12": "5WjbViQHSgmktwJHQqkB49JteWJpXyJB7Ev1kDt4mA7RkAzUW3r31zqopsXdyMCVG6XLj39fcvzve9RwtEc8qtwv",
  "key13": "3bwiEJWuA4V2Lb2VQ11q7r8C3RAdEj37NQUmnp1CNkpjdKtniChyPbhfaA5hcbZaZTumQBCFdg2MrunCziG6hweL",
  "key14": "2BZ5ccVrV8bEQaqRdA6ooRWBi7FFx9h8u15off6qANzq3AvYW5N8FrLdqJC5W1gwS5xGZhyDREFLDbqzCSiQBb7D",
  "key15": "5WN4QM63REHnDqCaqHvoWucP3SbdXnV9nsdTxHHw3nKXhLAD1WojV4Se4p6FCC9PvLzAL87MSYHKC6iyaSzV7771",
  "key16": "2ZJQWcX8HsrM6knstfmasycJhdjzNFbnV3gz1Nqk824cPco93PWSnEt61XdtV1P2uUrA4Yv5yHMA8yvuAHyA2YYB",
  "key17": "43d2uZjBY9wyFcfMmot8Y6iDxoqeGQqvru9xa4dSpP9BtHSf3po1QTBK4LZMndStaexjU2Bzq5wQdEn5PWT9fBbz",
  "key18": "25i4ykvB7zPJVwTyfgTQEoCDfWMbMkoYRpJ71xVsfzxK6kv8E4MA5Yp8x1GZ9EkVLPXhT57oBpoRaTHgwuBtdc2Z",
  "key19": "3QAdeLyyyyic7jyCAmGt4ZpqmT5KunWoYMNxm2AE8FSCHptv85oqvnMD23nuWG4VTsmSux1RazFdkLjWb5GPEeHj",
  "key20": "3M352a232q2Abbgz8Gu4bXj5GCeKphk4eJzYxJfSZdLNm5tGP2ok5GwDjCXGze2Q5TFMcjTgG2FJMfEV5yjdRwb3",
  "key21": "tJ7oXdfwT3BCWq3irumQyqTsEyqYu2psmSVzMsaFiVSwEyiNP83mwohaD6Kb6dkvPKoLBo9mzPAeFyvFuLUhvuo",
  "key22": "5grPgwPMiUDTUMpZv1dSc7x5wwrxBkotJXCn5uyaD21H3c6wsTDPhSRiJoQ3EFnFqs2JrDA5AUfzgh4Scqtx1R7h",
  "key23": "4iQr5DCj473ZiugAKgDatQd9j5YJbGCUPjErAETm7ZHfrAfJo9Kvti1P6dEDwdie5YqPfsEqpZZurSi9tYP9qwpc",
  "key24": "2dq2EuJ7hasbjWz94LRBa9eWHnxeddwMxbxdL6QWgcbKQBP9tzzmQhpfcVYFuqujLyrWswTtJduPQfCqdT789vUC",
  "key25": "525E1fr1ohtsemTFkFP99QNpkSDzxEii71YiwvRfWYU97UqBLJNrv8e7B7vmRk49KaHHPQqajEYcP5MiCk4Gnnm3",
  "key26": "4mQQASqKbXb5tRh5xSq7T8BoLATvzivPSHy7iaS4CYtvhwNGvFUEvUFZg5dQ2G24boELCZJMBgAMYCRT1jMDuHt8",
  "key27": "4RYjSn4VGW5hs5Nsr42Q32cwpm9RKf7oz8FipTbVynBAZFrimDz4F4UT5MPnAXerusPq8Kpz1NsWVcgFQNBezkKz",
  "key28": "4RXTNR3gsBikSfcGHSRChzq7t3wfzp964GScv5QezTLQX4Pf4BHsZ9CbYj6j1UZak7JevpnmxTvStPPZFJ9TjPwD",
  "key29": "WL2LHGSgtgqmUf5BstjdZ9upkCwnfjEna49D7ore1pXmUgWcovj6NrJiU2KscKyTCn7zEgm4rbdo28PbXwgCGvD",
  "key30": "4evXWJPT9jVPjYEwTv7p6sBDAzxawKYdf8qqPqFoQmyWiyHXPB2sz9zmJmz6Fw8idiNfs5KJkdKEEpAnmSs3bYqL",
  "key31": "3JFRBXuaJd9i7zxhnMBhtVWqqw6nid41XYHhvdG84cjztwRGqnz8LhoqdZhk5HC5UjigpoRpWMnduMVmjSPKWGtB"
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
