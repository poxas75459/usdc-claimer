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
    "5CoP7KoUnF6fPCXYFRxb4K54qTYMfYdd3n94sd8XsmofrK4Lc7YguKLnjc3t3ycpAK5c6UMEfsD3oVsFir8RvuEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59whJcoMmQfYqokGu3yVpoX6HL94NXFdo9DRkHcw9ZLKDVf9bYiLgYwh9b6KWGhhStz4wPoZGYvafiogxj2W1GDv",
  "key1": "viRFd1o94joS3VsvhqW8J4BmMNWJztraNEYYjiMRrpikYTdAtRyfe7V8msdDEUpuhGnGVh4p5yXFvrnixhiXGX5",
  "key2": "JhnvGEoERrQzF133zKte5rL7HqN8k7BU5HJAjLFnyi1Cb5RYJWkk6Y6UUM6aroELLuRqCPyN9MsEEBk4xp631qh",
  "key3": "4F2ZNV4P4f4H7kxzpHszKhVR27gUt2uYWtBxdEJH9vVZEvWubRKZAdnxLtPdu4Yx8XKw7BPhLAnQBGKVokMSrjjP",
  "key4": "5grjG8Edn67s8Tx7tpub6i5qzYEsMV6kdchDt5TTZRaS2PQSaUviDrT1LhptNdRBQngKqxiHkWAx9hGu5AqmwXmH",
  "key5": "4noAjBnBXh5Yez2EAM8AKz3qU6eRtDuFkqzmL6bqJupwQD9aZbaj3KtnrfwWMbFMbiw8tZ49eC3kiUVWBjd2mDx6",
  "key6": "2eaeYw3YN7FvLY43ZDMNr9B8pPy7ba7TUJxbQL6vTCwN4wS6snsyGPHVEF4gpP2wooVaeBCi6sg95e7QVDRjKxVa",
  "key7": "2zmZ1Eh3B2QbsoShyw8yWEYbdaxsorYbmiHRXjC4VgWAH8qZ8oiioGwX1SiV9Vxq5YHaBkqcZv62qpnnpqprcu6n",
  "key8": "5JEmutJkNKivFPjsdns46J1BemBweJEZQWfQJLLVSnS4bn4tPtj171rSUzaFDxH9T2vAMe1xPjVVbwzYGsdggUsM",
  "key9": "UTSpGRDnsNXv8rZ4ZQaewQC1yRuodpuahPRgpdLMHRzqG34mwEpHuX2H1AxPxQ4nu5mmaaLZ6xfFSzeWMtKnzA2",
  "key10": "L9bFfPKMff6wRaomvGj1FZu3GCNKdynwhrvxptdDYDaPqfKgGhEMXeERzn1KNiB4PjTBcfVYMfpSgfjrXu7epeq",
  "key11": "Pnnua4HaCvp52FZEnQQEjxN8k3Gw1SJNtDW3kQbHdavGPybWCcwwy5fuVw7s2hGmiLJEBNpBjTeRUomHNCHu8sk",
  "key12": "5hSVFABZ3wLK1bmoapNM2o3z6NVbvu37BE5e5dhqCHZzCDbh2vuvYiTnN8BDeC8rzU4mTD2YPh6mhsvRsNa9R6sz",
  "key13": "35xuPUMcKYM5Vs7jckvEJY2XnjyaMKNDJBQTjwiZAXppHHjeu7Sc5k6bE1zSAhRo6pnwBjCH5oZ1v5SKZ2neJqfV",
  "key14": "4eKrbtst4tL9K9LwkhiMSm7xr7KGFpCNM7FQYNwsMwBkBwTucxphaJoRRV3cWA4VAnmwQzvKnHVs6Wj874iDimNP",
  "key15": "wQDZVs5tDcEh8zjWqpUwDPSKunVGjkksXeNXfCsLgBXGGg1eQCFrieXq9vb4ag8db8FnxSw5dBhPrN97fZkzkR7",
  "key16": "27oBgAsQ1bACNnRApjf2dPhgkY9ze4a2VxG4FCNgPdEjKUprf3ReTo1vo5qYSEgzMTT9HdZUgRhmHBpgbXyngmmz",
  "key17": "MznXcCZectva5d1w2mZRJdyt5hL7HbR9JCWsLsQJwypfRUrjuSadXSvFN9UacoweEyR52haGHCvz3Jm7LFRGXNn",
  "key18": "WyY6RUoR6Gk8g7MEyq7hQKd9H6cq2CVAQPNvR8cUE9JQmKiwGC7CpuWnzSRj9A5mMRSw2viWBKDCzgDkCqKPfKJ",
  "key19": "2VNDqow7HY8nB8bnepen94WiTuGPTnTM2xsRE8tivdpKDDGq8mE13tNoUsCWdWFCwSBKAW4Hwu1NzPS7acDE2fh8",
  "key20": "5umq8QsvDd6cEkdeFv88D8jqoeB2BocfM5Z1tuwr2ZKyJd9a5nvdVARVjPGoXxUgVYDsvWBKVr6A2SbEXNqLbzvw",
  "key21": "2mQo5bFcAyvneQ6LwUoQzjLBGuyRuxjNMMyTSdFMALam2V4viiNkMnzB3zFKT5CytFCfUqbMLccV82kDJaJFgLcw",
  "key22": "wcYK5YagYt2spXnWhVkXw9kmXb2F2yBuUmb2n3ZSYQSHPBeuF8rrJWGH6pSPPXrrpZiaQZESnxecY3VgTaSbt9E",
  "key23": "36oAnWceMd2XGhSomVLKtrku2TaLLEPpbitkoeKB14C5C3SuKMGHRDzNip9Lgts9prG5HgNDJoZX1bBmeva9XAPo",
  "key24": "MjhTt59215uujDg2Lx1Df6tTnan1FmtrYuE9VZvrpch2U8u7XNQdVJ8S1aUhmTfNP5kZGbhr2nopEQChXgWZ89K",
  "key25": "2XKd3T3g9HATAsGdP8hwNyUouRHHrXzBFA8vKJ84nMBUfP49xV4HuQgEPMUPmtUVB1HVsR4tbZ8mqrgMkh163o3p",
  "key26": "23MiLFEAtEHTMJxXpgaYuL8YoSRp3eY289Ei5EpCARmYeZULCFfPsA5TCNswEDKZ5nKggtDxJDiKu777e1UvFkb6",
  "key27": "5a9fqnYPoQtpx3BrXo9p1ji7GXHrmjzuYYKDWm6mJk1S6abHLnfSASpwM5DaD1bF4m3qVDTeRysbym7SGTX7Fd9P",
  "key28": "9wTGpwsiaYrVwVtKXKgM9hPs39inwY7BiqCV2u97meQJhdvbwStfQzCDzg9ExVYYLSV5fR7YHq3AqzoxJNgnu9d",
  "key29": "2C1wdQe25keqvQxguQ7dzYaTAzXkaYdnxFoewriZD91rcumogpKXGVpg7rKH2MFDmGTsb7oxCKnD6p8cUaPTFtdj",
  "key30": "b6npAoPJ5aoj5fe1v4JtS2f4SDj3xm7bopUxccnzvXQw6UBYwusUcu6eW9aAFHzDkmqPf52igPRSGggG2gBaSVH",
  "key31": "3AAAPrErhPYTC1Kjs4RU9ejbQxk9tT7tx5pp9UL1VZkhgkk32eQruMtgcwCwJ22JtCFhxddBtDBDFiDxF3izDbZa",
  "key32": "LTpk1Xgpe2BsAyrVvDc7zgwDXgV5Ad8uryM9ixWeTK4R9HXvcehqx8X4xDJV9p4uyfLmRJJvXJvjhvf1jJ7ukYw"
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
