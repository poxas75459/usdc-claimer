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
    "3UuYZnJEbzU44wGt8VkySuXF5z6ReHcQVfqVQf2W4fVTDcDr4kDtFKB7nJeR9v9WGDNVTw9koi55VQDB6CrDt7NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caUdBkuKgMZgnM8m8edQFJ63KuEAGxHZ9ifNqqSRqduEVhRx585Sr6nxiZ6kZanmEUuebMaaDpmzcEr6xi5mPFW",
  "key1": "5QM2Ran7QrxZjjpkQgeRFUrP6W2DjVSPHopd3DXhu7urSWiaCoTh5rjX3oKpWweSbsPQo63CeQUESrH26cRGoYQc",
  "key2": "5S1SX56GGxSbXPUsMX3Khz6jEQe9KqLTLcsePxHkwKt2DaasfGJRPrP4QKpme1zTkPtUA26capmdhUwwiQPpoDvY",
  "key3": "yhP9JeQmDPg9xXQi6x7F6bKUksDS6gpW3KQMtSc4XfPY9Q2VxNuwrFHLk5vBxKahZMzyxW51CQu2boCMSTkSa5j",
  "key4": "33y7WwUBdjpKjYi66b9tKyoo2Gbz8nXH3obCJDFCKqPQMYA37VbYeLmhaJ4qCyhUyA5H2yZYavnncP4omf9ci5Rx",
  "key5": "66DAxrcNTXRycw9vxjjQ5C4uSkimz2QmwXobcYupG6Viby8qdRbUCQjhU7mNysG3NuVtZxmh15rb5kVg564a31uF",
  "key6": "2Dt4QkHUjxmni9KugZgTutUviA6wAEoWvKAWrBxCkb7sHzpiVnJKkdLchG2eReqWzXMiT3PWsaSdZDaXsfbVdwFR",
  "key7": "2Sit56DR6X4KQzqcC8qe9eLEcFqLD2763PMdaPg32LBk2QvDMuiq8yUuCFUmwDPyHpfwCUJe66Z5sxLvqDDztb2z",
  "key8": "4yYv4qDxspcPx7BYpAL5oJcyw3bGXfTtQu6RshL34a31bANomXh3hhRM8W4XMkUVhHtqDQHK2EfP8qw5PoHqtNry",
  "key9": "4qWgWbNyV59aA8vhvKe2FBy1j5zduFKfaqFFk48VxtY2WGBeGWXoLuCjAgS7iTnZpqJzkqYp7VG51iqopGtE4eib",
  "key10": "2ne5zjzDeoVX4gUxX2CrL8eq1SEqw9oEFbqoMC1qZUELgo1RQYqjRRDPFhWwgHP8cuCL4J9Q3yHddnCE9XdWrKk7",
  "key11": "1FBs8sLdo1F7RTpVC8WoT49yu7fsW9tgFiPkhjyoVqxaY99EnfvHjRsAkN8EZXUzdsrDWJ1kEAWq1sfDEgoGWAU",
  "key12": "4XQFa6K3Zridpo6Aut6CdrCU3YfxDdn9axssyLnxbneQbGrRp8hRPHSrsB49ShbHaXhYrHSTR1a23sycDeC57gXD",
  "key13": "4rLWTBYUiVYXrSnN1zq5SjVMpMp2LN43oK31Gn1ZWTa8Qi1PnyqennPHMYdZTk8V919EtG94wcAuVe6jxVv7GsK7",
  "key14": "5TZVqj8DJbNRQgvwjc1bMq7ZaNEQ927PdQvqWLAePBoaQkAokN1FrfqGRdTTBQPe1ibBsjh4y9Jvzq3RjBTomDo4",
  "key15": "SBYs8K98GA1XmwtuwWnesN8JnfXjBRBNM2Tmh1xZWWe5iMDAjbQ97pDM4ipSsQg5zUJvcnW52BCV3fam2Axp6Jz",
  "key16": "25tHfhg4V6HZsW9rgjLpkxR4eqgi73F8Fg2r4j8UZSS3pMS7G2G5vPvfz4SWXyfTMQwhMgnZpU31jZKBvEd6sCYm",
  "key17": "5nZabrZjTv6ZtuRmdCe3AfwPDLE8jPQEENpvGmwVCsuLkEAF2Kf4MweHG4MjryGDoVry1NTZkUUHJXEDSg872NLc",
  "key18": "4Zs929a6oCfmExbsczzvrst7faR8Ujgury14m7j8FHBrrtWc9W7Nzgaws6ALzqfKeHCqVMdq8pXa2ra2ygqHe9wu",
  "key19": "2VWSGKDjmRr3AstKKqsoVjMX5HBD9PGEu3PHLnpr2fLZeybVBtrQE58LksKLgmGxNf8u4tWYYj49hF8ncBsjaPmk",
  "key20": "sAe71dGMyHNngx1MHWpxgxde1Hvw9Bd9F2w1DvKua9VcYsHLbc7ibsgGCrCLNqtfJH6RH14Xo4tWHUHcS67jZdd",
  "key21": "4bCHBDSVXCbin3SJB6E1mdpvsJGvnBaEAwHmtmd5uSdrHyk3iKcBpoYeL3qFkYA5hRkQFzmcMgzxQYzetWzCDARX",
  "key22": "5jobUrXWgdWbrq6xwYxzL5CnRAwNfTZyPNLuNZcuWbk4svmauVGAQfS3qcyi3hhUauCfrfqqADkcGtpHdY6zmajM",
  "key23": "451zev7i1mcgJvqVEQKLVWMxNo4ZoJwhiqyVVBs5TEeCAZbXU6syUgbFmz7J4hFLMBsRcjfaYLEeDw3Q8f6Jzpsu",
  "key24": "2Y9vAEQvbrgb46jorrAHVLuez9uWu6mzAc8Z9dwZHs6Rg6fdoDjvEoM1QwDHqSHtaTA8tRSt6KEB1pZsmAfwKeQi",
  "key25": "2hybDN2ydeHwkJTnGwj6zAswj3thzoJUrfZWXvw3FFkqcFTFi3RjWLnJy9wr9wKYtNTjQcQ4BxpPAnc9wTbes27o",
  "key26": "1DRTZ3MGRGkXP2UKDxdb4FvufsbL927Q6yAGxQ998vaXbPRyHnZADkEvpTAuud4bTADv41gzMSBC1dvyjZriUMX"
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
