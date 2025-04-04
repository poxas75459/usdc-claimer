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
    "123zBwbjGVmCzK96N8nXZfA3so5cDrDWbVpFTqx1aqZtd5pyni2WxKUbmfaa8Z2sRCCSEUWaXpqFLf9ZhGXvjFEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYtFpBatCTPbUwvDMWnVqhAm2hiBag72PQxydHeKo8KX7RDumkd9ozNVSzKT9sGGQkc46GLRRr4HbtJQUFTkWDJ",
  "key1": "5mLv3REXYbpEyu168RPJneCXbrLnaDoWJddAq3YEb8VcX54kM94GXtEKuWpxUwL5msmFRtWWxErQx3KDpFWuCWyb",
  "key2": "5fCzT4GrLSqpnBvs4teHqBMydAXVwxJop2pUi5H2zV7GzcizQFmx7XsYQ8rM3C5Htxb2aPa2dKQM3wwtbXjoES2A",
  "key3": "5eeGXjVwSW8dPpSM2UWC3jDU8WxZgsuXzcTg3ifwEXPAMBX7SAWuEqNjgpKvPnmSjrCjMQ7vFGsjfyMpTCCRXy64",
  "key4": "4x59MnSUnkspoeM3fRws77PVwsWy9H7DTxjiv8jWNZcEBLRLPrTMaHGEzHzACN2qrLJKm7ZvFhzx3zGqzcGCzvAS",
  "key5": "5ZTjy8pm3vuXZm5ypwewdBRHfKCcUthHPP1b1wKfynVxKUqGpV6qoNbB512v6vAmHxcvcq9YhJd3ZPdqdeFcd8As",
  "key6": "4fWCFWsmrxGjZtw6Ugy5nvb3NnhVS4v9cX3XmpcKJK7UU3WAieSK8j8ZzeVaLWg792kKX1ftKcafwN2vkMdJaUgN",
  "key7": "5CCkvtHJZjfFyQ9FouMgUm2WEmEf47jn7fGsqd9bEMHDCRU2Egkxaik2jHQyhYHVWdCDacPuG4MBRqmGUVewHBW7",
  "key8": "4W8TgL6zFK4X5VH5Jha4xkBfHszBtLVHqJTNe3vPXWe3Zu9wWXKcdFzWY4oJZZEowrrefUPvox5NPpiTUPBEsc7J",
  "key9": "2MCWUWaMMaqnToTsYPKti7sjnetoZEohc3PLf15FoHciwLv52jtSEpMsPF914cjVStcmFgzNhHtKVGArdDFsUdg2",
  "key10": "4qY5rLnv9ou4aErP17uuK77MS2ot2LZqe8237KiwxKAVpMpEa4CzghJYAxvgsLQc4ZFvbgs3S7HRZVqDJ6bRnMQw",
  "key11": "3QVzdvdGykWk74hCDNmkxwRT7c9UbjPE3vBhb85oSVU4grfAB7oxPFTyzXR95jZdjwkN5mdpCrnKpQEcYCQv5DoD",
  "key12": "3AtVtkx22pcUPybAwGNCKMkf1GNa2QGxt5LKCf2h5UK1jx9wkoj4RqzMrUf7VPDhxz9DwMp5f7np19CxoG4XUMZC",
  "key13": "3kUXwSzNUpX3HXfCbBtqBWWQ7tdzMdMKjNaGjNHgGdRwoTZhdRG18TrhqTmhe7S3ErY5LFaNZ3PCnHRoQnDQZ1rB",
  "key14": "5wAifVwwAQx2AVBT3Pn6kW3gZJgJz6oLR4q4nrkH3jjD92UiL4AyW51hX4gtLVJNNzzCEsDV8xkeNieNqC68safh",
  "key15": "Xh62b7PTBFBKyGSacGG3VGpvDNg8FuatUcyak86n2yvKvN432XRHTGFB67igAEaBFyewVTvvzpC85dgrFrBw4FX",
  "key16": "5GTJ5r6yKdeetYe46c5sxUbzL7kVumdRKA7fjh5piGmR28x5S65bjqidSfS1z6WULuDFYaYBcyYK5sscqMjX31fa",
  "key17": "2K6vc8XahxWBmZWoMg65rXq9x18hKyV2vpmYh1YzzUc2HCB3ymBysJXJnpf7yxL3MzPBwiTfyRHqRfcjTgC2FbLD",
  "key18": "2J1QCXxK7QtFKmEW9oc8g2AQD7BPcEUjQpdR5oJHH5eiijkDT6MexmaUTqpvrWu7KZsNd1i8uX9DqecTNVDN7zMx",
  "key19": "4eDqr7NTkv4p4gesu8QYLmdd5dVE6SNhNuk2cR9UX6mbZYQqRjKR5rcd67GBcsWgtE9Lq5BkUC4kTmyGexwRSGqV",
  "key20": "2Y1M8e3z14N3f1CrTyaKZL7jutTsLMMgpXMbwJRGtU8T6s7wGFTuz9ouh2HtfdE2qtvRxBsKKXMGYuMCXqg6ayon",
  "key21": "krF9qqJfNJw3LTsvPoNWyrBYf4vntR8Mm2utYAsrXUuXRryWtwCuC6RjExaJtJ5bGmywUBnuLGYR8pY29gGRCd4",
  "key22": "2vDtCK6NdJXFMPEvTpUw1geknDwMLNhi5uUqFqxsuGdtspNXmUzvv5BtTSQFPEBkshhVz1xabHFdtV7rjfrVhKfG",
  "key23": "2kbb9LVQtqigvqypXDzfU2mnPkA2Kbpa5vFQuvcSSTFKYdivpvGCddZ4rSxazd7diBixStCrHsYZmdbmqhxbGZ8E",
  "key24": "2LV6RgjqY1iBvLfjUVGSSJ3v8FPjer8s4NxGrbN7EH9cNH8yeDAm6nBi1ZLXVCD9fL8RjAURYWZaeFf9JdCbDeJM",
  "key25": "4G65243tHrNn8xJPN9oeuvh9E5wWdr3SCUQ2g4Hi77KQVfokzNFsnqtWjyczsjyWTLRq9SgquyXD8SeXKyCRDvBg",
  "key26": "wBatgpxpi8bRiQaXgTT6PvKeRYwWUxsPPXCC5Gm1aKx5ghzwmwLC9UzMK5XHEVi5eTaAwrKJaZF17GsqTeudj76"
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
