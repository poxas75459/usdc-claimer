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
    "3czsdr3ASNG9Gor8Mpfc7XnVZ2fjQtnN147FYspmHZ3GHS9ASrPdsMWPuJQohPCDZkFPLeL3dqLgRjsPgEwKa8Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BunzPzH1WkXkMVKfpnoPX5s4uBMHBAaNu8GXY6xN3owURHaXVW7FJbkLkFfUPGGj9AkHHm18n7o3pons6vNiuVC",
  "key1": "5swEiooEZGFmgnQM7qD9fxzMAj7jkQq633ztXM9kBVBvtHXvAnJWLrGRbeZHvT6hHXReMn4Az8bsa4KJiuVh5isQ",
  "key2": "Z96114gXkojJ5AHVDj1bi9bUWRrRqRY5uX81Xjq2SCpeW2rPGKuDRHMWWC6yni1Ar7BA5pb6BFNejjbZWp2WwUw",
  "key3": "ieVVqbCLZU9EcdrBzi7sBzrEj9XTVso57AZNjqraqNuz1rqx4Evs1NXYAsjTEtoubZDL19zkcsXQ6miQc7JTq2W",
  "key4": "4tkTRb7JT5r5hErBWtun7jJXkmCCY5EK4xGJp4yQqXqGyk6NfWYZg1YL5btGmnjyL39KszSRgoJU4PDcfrxLJdse",
  "key5": "2AnSKiN9L6xTeTMPFnbw187w3V4qrARn4j7Wy93qRfvhxCPikq7sCspN8YurGRBVVNNQFF38reeWuZwPkokpEPqR",
  "key6": "2U9GgHCJmaSr4qywmYgwnBYwMzPqSTKHTcyd6qDHfn5HqggtrNaCuvfAhJ2H9LxoSihPuJcGwheeixpzTjDLxHZB",
  "key7": "58b659yJmxcgorup5E6tcJraCYZimWKgspaviVoZQiU3r2KnVa2Md5ZHYnZtD3DiyKs5qcXHXVeXBsDuVeWSGX5M",
  "key8": "5CybuPM7NrzCuX6N5RMciyZo8rYffSucRWRD9UStJrKTxdQtGDEq1eMA6X9DdSpdV6YKSEsqYtd7oQhUnKtWN6LT",
  "key9": "4y9oHSiuwNKiUEcpqKJdLpWjbXUGMnhKAzwt8Fw9G36crJR6PucEzufsit7546sHdYV9HRcqAC1SP4XQfR31bLEw",
  "key10": "22x66KjBCQPpW11UEBJik3nh7zbsod4AT2kiaUArtrhAi1rewuCt4wFQwLRxvzdDyREeXX6XxGXTsyPWTm4yhLkm",
  "key11": "K66Npbf1Xrwm1Jk4h33syqcwBgDSXKj3hJQgKhDWULQPPakb7Vz4mkmebWaadpLf2k11mVzCSCSDAE2HE6HBbMQ",
  "key12": "2jqHCxU73VkvyrZYzUqXZUAMjb8GdjPt8DYAYomT8QFAWhtLDfaeV44NxAUwZrr9BCjmFn8nKzeTwNcaapryVZno",
  "key13": "5dUo4Qi9TsSHbbLVDuVYvrNqtNUJ3dTcBKr6nP5gh8ympkNZ1y8bLXaxvJM1z6WFetzFsjcxVs7kyyojhv8JQwEX",
  "key14": "EnshCNHbchB17Ze4paaKsNj6dWT2EBL4viUKYkagmNi3grzz7CBm53VrQTLNxtpyMqBgk6JF58HoMhZGiatiHjt",
  "key15": "tK7qMXMGimr3HjKfRPTehrSzV4Bd2LLZ18it2wUDmNXusZfe74md6mikiJ46kmjy5rEvNsGUMsTZPqUCd4SWYaX",
  "key16": "5cPEoixT2Uf8wx1bocFq1sWs5sjeHb3fndvvaj3Y4DicW6PG3hdRi54iy65reY5FdjaJ8ehnHGzAusTEPApkcxvd",
  "key17": "1LYwQs84Arnp8kXBHd8FuSNg6coGGfjP1L5GdcYLcrUUg8vRG2C6QaWEcVJsnbJtnVNxJh8rdHh9YZUpVnfcFo7",
  "key18": "3nGbEeuaeqSV9KZbiEvDhGQMx3JrYJnRaK5Si7jMNEd1QU91sEo4YLmYv6Yb9DRYHaGqDVuW9vpqXLiSKGr1qWbv",
  "key19": "tnQ94HX7SFQjJA1Djk3m9pXymidTsKs34YGDmgngSgYgZQfE6TYL5zqsZGiPkjpPvf8CsHcYEJt5StKVqrQryJS",
  "key20": "3ZdnX3CUjiK8vE2MeyEwohD3Q1ud9WXYNmNmv62hq1toRScZm56jaqaTpBYPAMEMxWE5tVhEg3BnNq4DvPM7HmbB",
  "key21": "49bgJPT9iNSaUbQRfoiRop6YVBrHYf76aC9X4WJfzstcd87rU3dzpqtKiob5JriR3SDfDJzkzY1bof1AKTJFG4cV",
  "key22": "55Y4C8oWGTf6x6FqZ7rNvh8Hyp57HgKrkgknYTXiMep6n6QyJphprBWJcgvUj4je1MaE8h5roxzUqKmRMNwfp4DZ",
  "key23": "3wjGQxgYcGiHa9kGfZMJ3hSSquu6fwz1nGwMS63kTGGQPKihFQktzL3WzzrUhV4Tub8JaSvLD8MZEMP1xSDcmJ5n",
  "key24": "27uE3Ut9NfoEAKkJTXdwVo1uhVQacPPA3ezXtpT4dfFffkpUx6sXdsargezArxszs7T8WftaCFKcqHtnkXgcPWEY",
  "key25": "4JyT9MNKaV98APhbZqPRLdcV5R3sZh9LfWP6hmzvviTPFHnBynwuCewmxRDT64UbqqoxbvKzEwpFYh3Rzpvuxbqm",
  "key26": "27aU8KdTJUgazeCVCt1KoDyrtHHThyT6kRMsSmx6p7ETH6SWKomi7Fh3iRaHJEJT34TXCN4HMUZB81vNa9NmpTmH",
  "key27": "AyvjH65LTsJ9amt5U3dTmHmYurLinMTh8RT3RJiJyskqpWyAegHqHu49P9j9iVeVxnK8SpRX2E1KwNbPJ4GB7c9",
  "key28": "5CPnTuugBdZmGcCcwGxRiag8xc3K7S7FoFLKzS2VRPp7gWHbeog2XRXySVAJQsZuYuavYVioGVGctvyyLnuCdNwZ",
  "key29": "GDBhBT2i33ihyPQq5vijkoGfwwGHpxTcKVWJr8wWXyYGHHL7D8CdQpUmQU6S9AuK4N8Gz6yDsayDhLp3fgRNVaA",
  "key30": "5mzEBd6KCEcjQSDZdM1QnAzGnhMFUGBv12rU4jv5PzdtHY8t5innMvmMnZ4Gccsfzx8Rt3PxtniSCjW1f6jjtdta",
  "key31": "2N9wMC7HQcSJb6CCKcKXynQyWZvoXyGCDnXBrqNVyfLz25my7jJSEVLrpN8oEH9LtFLCqbWiEaSHDBBHJnBicdHc",
  "key32": "oPzRhWsM1TxDYczmWARfxg6DtH5dF7UDXXcfauL237HFnPinEGfcUFcw3eGz2BLVgym4sRiNN5HxL9FLd69qxwd",
  "key33": "CF5p9FPBMkHXRd2g4Zo9CmvHVekBFqZop5pdyuAK4LSpKAnqftQyo5ByDVZ65NLdGeCWWAqEnyLwGfuhCvSk1iy"
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
