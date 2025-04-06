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
    "2FzstyZ65A1JUWHidh4nw79aSx7HqJFfyTahxTDtxFRfJuTAy96qWqpyDJPK4oUw9Hqf3AaCu4E4FJgUCcYsX9V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjRjURovfGnau5697niTx1hNavgY4GwSWgGdp7GFq6xKFKGPFvqCVZuoWczvvvY9UXA3Akn87KsGD6x2DvbMA8z",
  "key1": "3aKobuJyNVigRbScDJD6akmsVRfYcHeHbF8B9tx6NLhTeXLwY3aFNK7GDzfuzsRpwEkFEAcQPcJfpC736yhiLsgF",
  "key2": "3QteELKLDUaNu2LFBetviYgEbmAozwEHAXBjwdfsWheyK2vgZL58oHEbUUuhamRaRmv2fLRwHS29UmSiMsY9DwXL",
  "key3": "3ducw55wHE4zcuW9YHAtuMizqJKDdoC4sGrVffkjizdNfcdtn8t5fVRJSo86dMAeU814TVBWZgqPrToGqViEF8Uf",
  "key4": "4AoL4BdXuH6a1o4Je2LfijrfSNeSPDJ9xb8cozUoJJyeM9cpAWHdvXoXHkXuHAVEyQvUujNEHWoRRhSoGh293z3u",
  "key5": "sCauFdEj5pi7Maz5SD19GDoBf8ww9K1XGLuEwiN71Qs3WhGUeRq2jWitTxK14PQgSfXJ3ppQpDb9PnwqncmncdL",
  "key6": "4X5v9z5CHNdSS525MWb8fsTyp8SMS6srkLLMA8tqd5qQWLsQZ8CAHEMXTtpZQ1PqUEb5rSfNWvaXAGzwqicDMntn",
  "key7": "2k2stw6y3UrSzmJGU5DB912j4KMGWcBhtE5yj2ArDJLmHyFuvCHBEVsXxmFHTfeDniXKMLiTctfQ37yjWTPHM3ef",
  "key8": "3MvfTwHuLKModvLkFssB5QreMXPpEVczq7yKpCphScxkAdp1Myc45ZMcUQccHkoSYKwXk9iCtX3ywhiceYkhkHnq",
  "key9": "5jv5FA9RrGZsPj3GbmdkJFYpwT2kaHtFhuFSriQ9Yu4HgGZ3iDpVnCtcR9v1U1JHHqvZhUKYCpYWZaou5oBrUuDA",
  "key10": "2c4hUhEPPZETe1aYi2GmXXXAzeTPXjyoNzs5Lm2DvMYLHPjtnvMRYNDGmzsGzZEb82wh3aeBkjDXn6Gbkj7WLZUR",
  "key11": "3fyTEV37GLN14Lt6noMG6FHnincNnPuGngW6UE61Ssqz5didiX945AnyXEejNWm3p1qKnYMaZWsbQDhtWqGV4ioW",
  "key12": "3ug8MGPwjRLscpjqxwcUdenYkndsV5xnyEQ8t5kQEsbrZqMWRjeLu8oqtZFwnF1kRNY7LDEjyQ76QsA6gLTxjyFy",
  "key13": "2SLusNqFf8sxaW2n24RhidQS46aLjDhv3mwK8yVy9xfpABZg9CjSfiWUwuQDeWencWCetpFJBpJpwTLakZic8Q51",
  "key14": "3Y9AHTrV96SDbodfw7PtDaMToWS5LkdqN5CRFHpVmuTWpinP7DugMLTKEVopKiMVAGNehLfepKG6fy5NzvXM48E8",
  "key15": "yRgRCNPq9AFvpEQBWUS2pUFRfGUF5eTidqoSvoB5z6e8bEjha5iy5x5YcxK2Xk55e5n4kW7QHsNdNELBmV2xXhq",
  "key16": "EKRepczMV55KZrnqb5paeh5BjXfSkRfnpekvsVgWT9x4TN3hcyWxfALJuqTpyAW5TyXuDnvhzPV1JjakwrNtJ14",
  "key17": "3u1ke17kAkQSnFqZ38odTQSVgD26pMhJZhwj5mt3pWtKtq6KoJNZQ9WuB34Aneppx3WfnjvZWQLtRMJpN3Sab6Jo",
  "key18": "5EgnwzN9b5E798C9Puc4twoKt1JeQoP1XVCijVoLt6SxMF4nfq8S68zRW6A76pyCf5ft2pdNCksi3EGrnAdqm6kC",
  "key19": "B4BmjUP7TMpFtWRrmJi2vAYznmGqhjGiBYBhEqC7u98qDjbPqKynSrV1se1FYF4cQZCZw9GZu4F8SwYGr6CBZJi",
  "key20": "2kDo1TAc1vkFd2Z9KUdcwZujib7uL2C8zGJndNt1oSvw8csgWJFBQkakXMzAnUNEgZnxymcztBCsMYpR3zoNmpJY",
  "key21": "24qPhiJh9F4jfNeT1PgQw2E7FifCstG7Er2qEdtt7Vey7rhWzd1uUyPBgrkd2MmuvTXiqZkJ9TXuvw4f1tRQ2eon",
  "key22": "62s5BScVTr7oRT9Xd9mj3qoChfyNEgt3vqfvJpUCjrpDGpFA2n8mfUH9MJqLidkPGaEkbW2NY3NTc76jM1ZUs7V4",
  "key23": "3q5AsPdZ5FPLEhXedV65V47widdSzEBFvrAB6b9QsRXJMEhDk7MtB9Gj9CfkfnYeDumLEobJutQc8emxi436oYXq",
  "key24": "4YEgTY9CiGyCRKyHjf3RMYaNKcPPZbkmgYQ7bjTuRtBi4VjM4ZEKM3p56XF7Rd2JrfrxYJSjsZbj9LZLYWYZ6Hu2",
  "key25": "32uamxuWpT6NmWgJCFxEhEMKg39maWT6tvy2ELB2FqfdULXu4Lwp111bdNvW1niGA3BUkHwne7Mq9v7mN9MpoGBt",
  "key26": "2eaXUHJidNiBDZHZ3vSaoQpn9HULo15b1HQJvr9w4Sx8jBSFN1i9oWpC3UX184LWWHQKfwwD5RNNi7BD7wwqPK6w",
  "key27": "64Ncyb3C1AhUXWYiUKoiNb39anCPgsi2kJSaymPXo6tezxsuFRcNP68V6AKCuwt8qKdSkA3qNUPrTwXv4yy6vgX2"
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
