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
    "5TMhGKgqF1t65BJBubwm2SZaDNWLMR4gbPGpAgmT4cg5Vxx6v1jerkSN35KZeXnC3Pse2fnn4q5WSKCvhsFZZW7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssF7HfEqqAdYnLAKopBTwPuQjzeaGj5A39xjkZedAGZEviNYdi6GdDgcoDyqoqZMf5cqV85jtRamPaL7tr3o2Rm",
  "key1": "b94yMzKepk2JSyvsU8U39TV8qooXFiUqwzToNF9pYCuk4ESgiWiFqrnoN2o2PQbn1u1NrA567SSNxRQrRaZtNZH",
  "key2": "WQMtprKzQszdsQ7dETp2m62p9eei7S5eS1YW7QeG85REW2JqUMjFK87phURdvSpWxjZaAestNi17as1VE6wgPM8",
  "key3": "fMkoJy715fimpPdiLDa1baPwGgwFnyFUJ8ViZQKqcKXRDanUaA8YvFepyGxJG1S9kGc7R2opkZgsWXhVmWGRHyW",
  "key4": "3zT8WvVGVxjKwwnZZqH55z6dFfwmLmBeHw6vVgm8gGwUBy9nbJrWH4VbV4yxXGqW1BCBn4hi2WT85WEGszmka4Jn",
  "key5": "2y1qQwUzydzr93quGsEgENYLeSPZnvKMPMM5zf6P7g68ZKzvBe71EXQh9j8gzDfCpZfATk7covSU4g5oeXehb5MG",
  "key6": "3FRgfpDvKAPrcRscGz5hwrvTSbaZBRbGxRncew9PsusYb3iqo4HsPhnyj8gZxdt1ke8XaD3ZtrgkrvBaHtuF76j",
  "key7": "2q6teztiEwHpbStJcRky1rvWDJDmGqY1eQeunf6wp3AirBvkzperm37BBxGEyXY2Krie8jH3oXRMBfkCSuHTDbTm",
  "key8": "2wjameyp3DhjbAvjiGu5LgzsZvfB84xHj4v4A9NtNzg2Bzf6hLr4UM3RmjaY7vQPx4pwMMf3M66LaX79DzMa3dSC",
  "key9": "bWNaMx4NQ4uFugS8tU8rAdGLezqZhBZyNEnxnMMqZwMLb1SR63nJjPNKHgjTFK6MGdZdMUM7awM4xcaTQgKAukj",
  "key10": "9Uzoi1TtCTyzW8s5mtntomnyuZhCrVaLrBe4kvpGuLGEBN44scL9u6Pb3PpsNXcyLzbiDtiy4H1xkNdgp7dfkVb",
  "key11": "4QoBcovpz3ZaDRuY2wRmjPqc1eWTsGj6WLk7xzHrq3fUC54rwJc14t4h86bPsg1DhehdAfR48gap3AjUYiRMnMik",
  "key12": "5aD9fBR5XAsw5EkyS4gh6CnF74df5xBimreP9xHQgGQtEE9DDxDC2NcShPkpCePe3wbgbaCiQbtYz4h8Pg2kPQcR",
  "key13": "3QfmDN8JNhvWJdG321ecjZGsjMC6yYqLvBnthcuUCu4FDwrUUrXBfuXghv5QARsSsnFdsuYka6Vb3X5RuPFuhmF",
  "key14": "2QJez16LbMDCgY6tKtWLL3zPjZfBpuj3x9hZPhTb5HkN6aq3JMRN1GJbPDs7eAEA8tQdh5Voe8qiUuyaf9C9i2CH",
  "key15": "5mrFjupvjcXz41j6pFo93raScCh6QCcnVRq7KgHSsLWX8NcLiggx7J2CoaPBMcDaJhZ92TherFzTQ8KJvwRqpTfa",
  "key16": "WXQhCRtgruuS59M3rB8zvG1Uh56DCXoVTf6UT1JjBWpoVm9UPN5ecPvVQ6KjZssBKGLogesMJ7CTdjG6xUXNhTy",
  "key17": "5jgqYzBDeRmysgBpTpAc6qtNZLpTzzbghw9VSnBjSxcgzXaSRxLwydpcgYikTYEP31MX88ej5H82C4GXnnSyGCgv",
  "key18": "4AonKYwyZeLr2U8VXCZQjnoKFKcpYywsnX2pjec728Hioq91UWppMe9mxY3HGwb3XbwayJeWra7Wbry9MpQcmj5L",
  "key19": "5DbuAMFdXH5jXJqb9j3wXBch9ywJ8EwW6ioQUBBWwnHW8derxjtxpGdK7QNfNZXKuSmmVWqtPkeDHrzMRqB3NPKk",
  "key20": "4yLvQhHfzd8x2UBhZGTJbNWbaqr6DEJ1WStot1b9wc6fHMk7Brff24Ys9ardfg2wC5QkkxjsAMhmTxfnVtrGxTAT",
  "key21": "5hSB9WsgfGoefrGuk8nUBWUjkqCUYMtSGZYwy1nGyhN5zw9naTQBKZtC81ALXhXWxFhKsUhj5yHu5kb2rvHmw8Qa",
  "key22": "2Uk5xh42DsUJWVJ3YC5XQwvePipFZcqntZQkAzqdo1w8d49hf4sFW1Z9uRZ4QxGhYVsPNRcWJxT5nuxusx3KPtzN",
  "key23": "5JeonzfavhRyDjmBgxrUo4f4rvPaTM4XK4yWf6RUNPBtL7xJjioXK24zDy3DCbXGn51eMJ8TRHDouMb55enTLS5B",
  "key24": "3ztY6QUhLJDSV35ziYafLHesTizLmBcMbEenNvQakkiCFi5ubsGyzA9UDkE2tQ6L35CoMEgNL7gRxbLJqXy71rqE",
  "key25": "5seAqj6nfEhL15FVsXdEM8T3ZKYXKE6mZGg9F3iYj5z19MJapi3m4Q7NoyPc37tahhp1sZawNdX12QhcTuPndubE",
  "key26": "45LTr35GTYBUFpzgxryxdxkqM8PQDGBbNSPCHtd7DC6j76NRPVP3wa3qc4WsgQbXPbgeLWpkCn9dGGnPyCSgU6wh",
  "key27": "RYSQxDKPsu4MF19LFLD1TgE1u43UgJ58Kfg9Ut3XfrfrmkWdi8Z5vquNhaagQk26udtuD7Fx6ksBrBpEFJus2if",
  "key28": "64LHvczcbg8EiG3Qkmn37aZfSyw4bpAPfDgNDi2HnkmjmNZwvMS2NTS83hcLpGYeAHqihizmrZwdas4gVb84NMP7",
  "key29": "2cfzwhDGy5dMdvS1nrecdife81yJ5NcamK7RGYyKiqttsrNB1wC3jh5r66eb1Zvfhk4BBEhnVMzcJfvXSYEQPv78",
  "key30": "5Ti5AZtGoqYw2UGDhQdFor8hWtKEkKd23LuoUDQBudHKapbxf48FenU4S3AypVDdWnEZjUiftPn49oH1JECKPkaz",
  "key31": "5ouXFpL5XqNtrs813G4zWASdy6Na4DpGGKtcPTDTafxzUQ6KHVn38WvitSbKQZ3K91iXB7htvyicYVwJYdKTV8L1",
  "key32": "4Batv3Rqb2CbiZtfDVmR7zKmMtgs7cd1tRzzrzuUxkk1w8yUWpSbRD5z9UGo95aB3AgwwTHgv4UL86zxYGxfzZDX"
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
