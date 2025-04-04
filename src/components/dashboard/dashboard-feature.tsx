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
    "5fX51A9V3Ae46jeugdY9XZAvAJxk5NL7aqGQyy8bSg3U62R4p3HV4p3z5SpWKUkvdiPgbwFCU1XYSbnDbdfyWPxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prjy1QSBMxKxsdQxh7czK5cDJwW1FR6PBv6Y32q599dFWcz2MCz29N5ptsndSsSgPvZCq1bFVt5KpQL83KQffsJ",
  "key1": "4ieZxPh4KJP2A37NswcUs5wN9z9Gy8KYgqq2CU9VSUUMRA729cHEUnubTCBs1NWmRX3Sikdz7ftW9KRhQUzqKkpt",
  "key2": "3US2r1FSjmffUKgZheLsHbn7t4fFbYhS8XSgZ79XpHCPwqywdBsUfYxDH1ThYun23zQakpHYrx5dVRD4QkyL4qZH",
  "key3": "63C48cd6P4Dw4KXjmswGrr3pTSkEmUE8ngnYrCJrYZLMESphrwsBk6Ut5V8siHH6fJ5doQL6MUXVfNYprVfMrirp",
  "key4": "v648UjSn9kam5UwEyVQTo1Wf3xswcr24C6JBtJwzijF9LZw1FMCoXYQ7mwoTYVmjAkomu1MbmQRwkWgN7NC5o1Q",
  "key5": "3rjySoaVZRL5KSW5TwYKgrqmu6vZtCTp7pnWhdPqPg23suG8TyRrXxSm1fs59HYMNEpvcEwF7drKAdhoES5JHCfe",
  "key6": "53TY4BXLuBwwiVyicBy9cefQDBMuuofD8H4yorFqdn2ZAVjLSMkhqwgcxB739QgjN5C9BANbPisSBbpTLpgiS7K8",
  "key7": "3rfV4RHHSHQFeqZYurNk1i27s84WdvTji44pUd4hiQ6NTEqEeyZcr3xkcJ9CsF7Hp8YYktjDXhf4N6wi8UVVJhhf",
  "key8": "4gLT3f8QCH5m8CForon9JMYYanjYNjt9PuCnyq991xWgsiLga3TeinudBioUFaDn9ycWCHk3fXzd5kcxie9mPk7P",
  "key9": "3qsp16NyALqUjZAsNnscsdMQS22oU7aNGWtXc2GiG7SFAUNGtHeLGfjfaTWDCQx2j4TfwnR66K9GV6jjrAtjZ2Ti",
  "key10": "VX88oQCyaH4j1S54u96zwZT6rC7X5o59EZD8dov9hR4JzTK9ZjhR7NRDPXLgH736e5wMmasaC2yAWVbs3NUQm7K",
  "key11": "3RjcvY33tbH4TsqdvgP3S1e3RSwdXKW6G8gQqgfe6qr47y9SHQsRe1kSpx9FwCM4xiueDeTsGMPUo64iQSkzPpHv",
  "key12": "5iCMQFfkv6XSuDbuRdrPdHFCXYgehgnEWqPY4u8f886J8msNSQf1VQAg41ksD47ocC1VUqbGiheg6t9B5t9p1SZv",
  "key13": "3Kvgmaic6FDBjTks8psYRbCfwvuiBqBrGHFUuZGMUorRTZzAiLGWLgQt2aNYRp2ZUBA3EFvBQN7pFnQVDKcobYKJ",
  "key14": "5bbPPGgvjyR8ayhQjAsa5RsGyEprbBFG7D1va3hSLLGKQ3CVFrNYaTAA45KsZSYLbAGG7XHeKgT7wRP7PeeTuFxd",
  "key15": "4QETmvfg8WGxxVzPZwStPixZRBTmimp96GJWVWrejWF3hpjtQUpuJ7pNEnGyXnAdvKbDfyri1sDf3HADPHnZ9gFj",
  "key16": "2UrCTYs9maD9fN7sxmxsQC7ap9buwM7Vmgrz5h6MFzvMzEeLTGHNJJZmbxYmG9aa6RqDihBSKZXqEH69aHgNYvR1",
  "key17": "33DX9k5t9jNACphmNZJmdZK53bfNQZ5c2n6KVjGPXtbbRp8LT7s27zUCJKm1EgRbtQMGHffSYPJBmyKgZZQtC36X",
  "key18": "67YcineW5FxetptxBk3E5W8kRyH9g9ZWP3baVGNYTXdiVgQ1JTZanwYy4sc7KQVd9nanwXegCMzEwFef3NCaidcp",
  "key19": "3VZAjYYtBttowk4tY8oyCwjzSmBxCBbcRsXudNJnQL51b7fDQxT3EVDunBUSCiwbRWUMAFvugcamn89qeK3Bqn2F",
  "key20": "2yTXfQU4r4d6KgGL4BbWWVPTcecD8coLBB7fvTYCFFRrwR4YA1qVDhvPjegTo9pBaZHrDHRYUo3DpSxk9VqkUv7G",
  "key21": "xEUyuFLqhozc8JvQFjXdd4E88a5cmtp5tXHn8SHMUQqAhy7iXikREV7tNUiXz5amWTMWiS45JWxa7sstS384Pav",
  "key22": "5HZbYnvrc8JqzvhhCFxZ4orbftqmRSEN5FNMb17J2uphTKebAF1Q9Pj2dNsPYXC85Qf5tT9nJwgE98GkcahJkRsH",
  "key23": "3SANLg5oJaVm8RAGm3KzouvKiLbD8NHkhuMQLSNyr7AaFTXVJd5sDjQM2BCjRrLBJUz5naBxvZqMHUgRQ7jJPCC2",
  "key24": "QstjLAmftNePh5M9V6vLBouevrJXonhr7LodEMm1k2XwJYRxke79khUr49f26msssASAiwapyzmFPduiWS3ZC5f",
  "key25": "4GDKjft7pzdaiTJUTVsppctzxvHWFjRpkLee5QMwj6TotPcyabQwgt47XuRN4CCWgeBvHxBAG3717dTrLX4NW4ZL",
  "key26": "597F12Refu3vHQmm2W3DKL6QsC362ZxL3r8pHHC8kuBEgKeiGYbsj6C34TJVjeAiE8MGrUgPFyjGSh91peiz6RVt",
  "key27": "649N8Kd1hiycxUfAYFUCAbBAyfBN2R3VaBYoTnvcjeb64EsMwWMqDiGVr4Er6GvJwV8ZPHK5xYJzi9CKKiSfvkSh",
  "key28": "3qs3NwNPo4LZMH1sJU7DXNjL2MeqijAz1kWvdhfYJSuMQRN9f8kXNiTRaJLFan83EMbUcGuTLYg7KGXMWeW9mqnP",
  "key29": "5u24aURUowpRjCDCke2HTKoh6RiFnfWLNPsPSSwYwap2Mki9uEvnY6LjocSDPr7wxM7r7nkpweyqTMDSk9ZfJiNP",
  "key30": "w32qJCh5rxSwmwQsrt8JT1x8oLUNRCm1xSz74UeFQjzUhqdMMsuy8n8veGw4zakS8EZFtD9hNxMKty9F2JnBB9x",
  "key31": "8fvYS1SqmDNuTvCnqrXBJvyYV1h2D8qf8AnCpcZX5d3pjmBEpYkeaXZ6UZrVvZ2HQKRgtbW2pHxHccSXdFWMZ7v",
  "key32": "3Y4CQUyzhaEqaRhGqtrJSxKiSEruQGrBA5hPHFJubSTZ14oq4qfT4ZoXA1nQWHHSTirU3prjeHHBsUHNXZzojoZR",
  "key33": "3qr3sZq3jGAPbAzc1wkSoHzhFGUrwJwr6nfuqws8bTWpDYivd2qCR2KrBQeZbVrT44rfgyeGLh76TRJU37EJ1dgy",
  "key34": "3rZeJbeLMZm6vo49u8433eoHXyaCGAhiq3oBe1BTXJVAV2BJV9gUT1zsfZUCdgxbzH31gjRfmv1zeJsuN8XsEa7k",
  "key35": "4rJmXXxwAqQEKApuePi4iXcHGgx4tivNtCGAidMJpayEa8kRLdDHSB2i8cXPaSX9FS5zeng1fgKwD9CS2s32waym"
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
