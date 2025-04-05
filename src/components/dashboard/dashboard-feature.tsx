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
    "3qHpMMztc214PZK9wYbBrvXuUwKABG6ECCTXreE4Q3ehxNSc1MWLYyrc1n6a58j5gGdxavrKwWBbLwrJqTahbqgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjNnoVxi9R4FmfAChQBQjJr5oeRyQQpDiBJqP3rzt6d4g6iVuoMJnrtpV2Pg7Rs1VkD7kdkfQYpKu3ddSknMo3r",
  "key1": "4GFWcqbbn6AAgrqJv9LrYLcbH7sW5w81hudEJztmLq26y1isEpn1KgB8EaBavbuQP86acqvzxvQSYEg2o9TGvseM",
  "key2": "2ZhiyWT3pSjFtWTzW9YZsw33isFch1Fyddcn7Pk47PTTvDRcGpPnDPNBQQHLFXydsAFfPfb9skB1c51pcCSiUBjK",
  "key3": "3Uv6Dcs9VjEam7C1SnukvPuack96GsmSrGBrV3YSHC3KM4jqq3tY2t2DzognzoCbPNqKsME1nB3kNe884QDgMT5K",
  "key4": "5PKf5tTkDwFcMfCU6VC7q2cPsNF5ghvQSHHRKmNujqcXmtJx6GRQBPjeSsZfqBwyJTqRnqLxkagWp5cFo9u7v6QQ",
  "key5": "3pE3hkzar6J2icWxrKCxwnqj4XUXFcY7q5TrPJbM33v3mhxN6ACuTKWPfz4wDy9k3r9VPuck5iwabHd4eaCcfo7X",
  "key6": "2T8eheNT2aPoat1uTyM28AwmSVK5eA72tANnh7MXMF9G2o82jqVc3FVpMni31uuhtdR58KWRWbF6q6hHLEuh8g8A",
  "key7": "4rcdJr3a56xwKt8C5PMKJnCMj4RK7aoS5nRmY3uiwsru6sem1eqEeKCSmJaRrJPAYXNLn21egdm8R73HtRrYZ7vr",
  "key8": "42xodYmDdDGN5VBPibF6v11T4mEjwz5niFeTHuj5KbubVApT6KwCaaALms5YH1kMNHYMEty3T9U2MnLVRkCNdVjA",
  "key9": "3m9FzzDsQmRgSrAaYRopnHzw58MsQXNhQz8KkYXQ5QDMByjhTykaHneZDMJCdGrmC1yUKXyqbqRQALZcthJ8Jeab",
  "key10": "5AqQxBPnutWvbahCfua7gCbTe7B5KdAqU9KnqmZUpEuJ3YvGj883R5iWNVjZnhde3wVVSJrr4MMxChmzCWhHu8KF",
  "key11": "42aLXYQsz7Kg21PC8XaUAGotMDCNco61siun1jzVifGY2DQYeSGguhiaJPsAL8YZ8vKytmh2VbV4mMYr3UmeN9Qw",
  "key12": "23U2eHH8CbaWcPrYKbf5fW9XQdxysiirPSAaHo56u2k4LiedEL2kCCPDT74Jyds2eS51T1LRPf8LjzqmcscKrGJx",
  "key13": "3bi1pEuKfA8LQwqGEmMvDoJ5YnTi7SikvxgHijCngMbCUf8tFhtCVpNzGSjdVpUULw9k98WjqEjQFtZ7ct7GCfZr",
  "key14": "42SYfKVfSqjJg8dMqcvnHzNsjPjjzVqaMfM7aCgq7k9RYWZv4J47JwnXERypQdFxjY7v2JNDLFNywqLCDZGA9vNH",
  "key15": "4hdUep7yNuVR7rNtfGWmLvqXG8thgF5YyVWGz7bfXb2jeeBd55BDWMD3VjCsG2L32frPaCgR5TF87EL2uZAPfq61",
  "key16": "3YaPrs5svKTykKCKVYRx9eZSKY5SXRxDaxQUCgamhLuhgRKNJ3Pk9NwS8etFVCPWYyA6qATx4o32FGjQo9CgB9Ze",
  "key17": "1jT8SQbvtgSESwQYGhwYq1u119mqvHyuuEMv2Xz6VteoSVea4U8StiQ9v1Tvgfan3fSyc8oFAevRhsY1XRYqjSM",
  "key18": "676MvV3dQ4i5m1p9aXc8P7ZWibWEc1TE1JKiysypN8ey1KKxiNtUwHFerArhZHThETyvdN2FC7a2xHaNtYZ1SVH2",
  "key19": "3vvDVTu3uGtS5uGaqGeXj7DgrrAxpcPLM8RAh8fedAZwMwQrECSHqXnvQQZW7X9awUu6qg4agyzjUzPGANcWRJVS",
  "key20": "4QzDV38paii9dVj8cMDWSXcSwk8Nj1tNTBMzFHK1ExXbXZyCDaSs6vFGERA1LjAg5sayXWmDsPvq7cspz91EU6hH",
  "key21": "476WoCNwfsPhwnz6wxKREMMXQ2rsjUEN9W3Nd43KsfqYRgtnqRmPyFPca766vSX1CTZjTXnPsKNPszkWWDeXAFeC",
  "key22": "49z4eiwpU9jnkQ2MYwNTxA26uKEtzy79TMHA1pujooNPkagkR4HD9C8cGtHLG7rkVW4yAgeWpgD3tiJXeUZnR91j",
  "key23": "3GD7HWxEWyzV6GesbkRpu6iSfpVxeKLRfAz6uyFNKDpga16cRX21U3DLrNq9CD8CQsbvkDNTm2B63VuqSZUJrNvG",
  "key24": "2p5GFMDrxieaoHzSpJQ68wHVB5aTHR69L49qVSu1oTxNwhTD2uswLw2PgqCtw5jeQpxkLW5XPhCxi5LkWUVnVKu6",
  "key25": "Z5zwsrPgoMt3HRFmY7zaSmBSmQXUdQQ793qNxkyKb6ftB6qFTyRuRVoBL4T2a1Gx4G5o5ZkBpSqBznXnQjVDPgz",
  "key26": "2BG7CdsPCHRnVe5fZtnmHy5SCfDeyZytCLSrz3Vbw8xX2nw8eFYErWkPFCd3qG5Bdbs2r3WGd1iLmPk7BLt2Qzoe"
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
