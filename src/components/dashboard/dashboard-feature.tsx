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
    "4X7cj7Kq67QeHy8PoWj1v9RhcdRudgpGaPqehHGsEAzDS19bmKw5mS7KZn9xv5xuyyQgy54hpGezyhkp9ftCpeVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGjujDxBe7tVy7K5HqTrNDc2UrAFS8oZMPWgMFoNfo4Bke4V6WifA3kZb4sbE4pK1NgbTVdkRjBw12FjTKRr5wT",
  "key1": "ru8SactSbkGMQThovHtsCcmmpKGAZceoggPdbWtAXBf7ZS6GJEg5NRv9nT5pzGZyHLgsPDQ6s6o5LjoPgv2cwaz",
  "key2": "3hmZBuppRtwRhzEcqXVMZv8kEYaKFCsVFXAbTmeeJqAJUJJ1d5BK4SVDJqZBJTwwZzgYKxNcHLVEj6p6GLLfhzHv",
  "key3": "2RrxpE8Po3pHEj9HPV5WbzkUYxESWGUVgYerAzUHCHghybALNcDCd71S6hmBZeRbh2q8XyQm7DrYffmWCSUo3Wny",
  "key4": "4pdvDnA5mfiQrf3JJGAuDJioXL3XEDhZBJUh3CdgW8pa76DYafBRfk5Lkpzpzcwibej3YkqfDgpomPaU3KQZCEib",
  "key5": "3LpXRfb1kMFDg65WbnLz9CMAVpf1jvmFUkqKDvyhHQ5rUUwvm9sCsYnvhbZZ9rL9Hy16vayWgaZz1AigiFgAszTN",
  "key6": "3xvnHn8kr34ghHst9k3QNC46joci3aPvu8QjK53jz3a6MY9YWUK3mYMSJuS54iqNYskBGhs9oEpNLwJWS8GfJ49x",
  "key7": "5oPxfTxeeC7he7drKixbXUoGjuAdVP78MgF9RraSzMmaCgFdKXGy6WtqkFpAktn9jdfJK6q7pA8zLhvwxaBpSFgd",
  "key8": "5yLu8rRnyFCA3T8s3BAzwou8ATwz4jqXfSFFuCMTFMsiAK4thqMaMznnS27g36oDBqK9xFURyZKot63DRqFd5wMe",
  "key9": "ADQtKyRXUDf7tLZWEczq7XooJC42FCNEZxVzAXNiZsXKVZgMvsfKi4efmxuquVYipweksHZ5TGNWdXQzG7Qfokk",
  "key10": "4p2bbFHcDCPkKnPW7qx728q3WcjkKSJd2wQdkfRYKtKyJR7yN4wTbBvBooUwqxoiRQcqGMmPNGg2P962HJUVhA8v",
  "key11": "x9U6ux1aLZsxbZX5TRNJg6t3N1FjufuEQYoo8PUocVbHWfmLgGyGRTgnM28Q2bN5C4UuxmoCh8ky4AFs328vk72",
  "key12": "mLwps7hDxfbo2wDeoyRvmpZzgo1Afc37p9685r1UtaBGWLVSbv2p7QAdmJxvcy4N4qfKfDuvwcTJApMnjHAjLeo",
  "key13": "qnEPDYvcT4eyUAATtggZZmcfceWotMbnmhWmAuE3Dpu36AYdTjuAZxFt7VFtHe32w3pqHtNcKrkoEYqnA7VmieF",
  "key14": "3mxHahvRavsb9DFnARuEtjKKbtNXWRW3ybw7mGJSeKYqskQpSFxCErQF9hGWbZBPJeqq9QZUmPzH6CdZyARWr4wF",
  "key15": "dRWG7xPWTKdFQRTb5c3RVZgR1yYxsT1iM1HFwW1Lh5erfLfZJarzLPQLZqt149SpiosEuEsYACjkF7oVX6viPBy",
  "key16": "2FCopu8Zh3xejdDuZypM6ukLE8sgu8pFVJK8rb6EBCbrCcijxHhZcoTPMiECcBrCfDZ8dNxKVzbvGhNSZRxNsiFn",
  "key17": "5zPzkxWaXHMeZcT5msYZrnEsjEmZnX12z1rWT9VyfwpMFcADs5AVQautngTEpchJ31qk9gggbcDyKntMUJLvrZNP",
  "key18": "3b6jt13QeH5kwdv1jyNXAHG54i3C7iBWJJosBVQk9qJsKWoXyoPwDghRrVXmKtJQf4zbDwUCGBipjYj72kSAQUaG",
  "key19": "5pDF25Py1VE3tRDfs9ZR5J46W7VSkPi9HEn4JSKHpiqzCaMTuH3VbKbGFPAJGGgR4VFc1NiM2asSfLvkjmzdawre",
  "key20": "5p4veTC4KQgfqLS3o6NnjAUo4D6Cgg9LGWmczHZ1hXJcLioF6gd6mEjWENqaL4Vj9Jsg6nMqJZcmVDjdVNXguXeN",
  "key21": "9MdKe3kuForxE1G5osQYsYhkoLcJiWbCfiyDX9qTEvfgDtyjtN8FVdusP1GeRCD6pJfWkoGCwP1BAj1FVoY5xyA",
  "key22": "xRjH7vJd9vYuSoQE3tpiqTRY6TfxPWA4Se3VbR1ez9B8A4xynDcBGhMTxfpYbuZNdp1uN8g1CmAQeGJR9uC1mWk",
  "key23": "2oE71fsG6r2v3oTk4bavNE9KpUWy3s11QiHquhZW9Mykf5sWw74LU83A6aJhrqz5miXrfSPPDpidjziwX9hr2PT9",
  "key24": "2HP5YC9Rv94v4kmjE2kpckJTa6BMqjEoBxcq5iUqJr7otArcKdjG5fWs4k6tkT23W95PcEhCUybmYCZujDbkXpEj",
  "key25": "31uABWqTZC9ARULdqgEpFFgBHJCPRmLmRhTMpQdkBYonR9VqrUXCCc7axryxPwsWYJcZHWgBTmn8rQgky3UrMRrp",
  "key26": "AR7woWZPu4RvKUe1HmTaTJMZcVdajpcEAdCZMTTcuuGegEkz6A5NPZSKJKgVBZX246aTHzuaFQGCKMbwUo49Zxs"
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
