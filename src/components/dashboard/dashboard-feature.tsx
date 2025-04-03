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
    "2LcqqvxahMqPbensTHr6wV59GosLGwcwuCYoL5TtgFEMZfDLV9gegstgQu2dZtjCQ93Ty1HtDUbVE7SwUoBsoQge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKQtKgvtATfLiNbXAV2HDgcjRusTaUU1JoeXwqkTwn1PVE8sqEiokYEMpJmHT81FNZVarFVEQMDHmToT5noYJDA",
  "key1": "3VNSk6DgNfHWrubY6bpFkwMqhVzcykGzDsJLKTZGh6oEMuo5vhMEiMRDDXKtiTkoCBGEGNQNwDPkSfxnx5ssAWXY",
  "key2": "3ez5MZ5c3erkQ6fm4JSkjEj6JHPbQcvfdaPzFD4CCtkpERLmCevrgu92X1HGaEXv2mzWKZvzPZTgy8yc7eLxen95",
  "key3": "4pgwv2uL6GDv6u94JAvzqCZHzb6qwmk4fwK3tt9AcLqqZsvZGuHAbfz1ZF2DbfppLdWxUY4p5CX4RHxo6G9Zyrhx",
  "key4": "38T42KxtZnCnTDDs7ViFpvsFV53BWGMm6amV2yJXwmXYxXUyTXZcJf7tAf5XcNDTx4hv5QJpeYrfAyCo2K6YmbAv",
  "key5": "mrZdSbQzsux3mtidLkZwNcNgDgG6Up3KU7HkFkTsjC3sLaXRX1aBMymhr3dGGvM4anhh6oCqBnU4CwF8wigtwxG",
  "key6": "4kTVbARcNVdCGZobdbPoA7jtWRHfH34vJ1LKo4ccnUiw2weAYNAE384s1ndAM36oRf29qdj83LeGHGxJUNnKGHFH",
  "key7": "4QeqsQbDJy2UrGzTfCs3eAa87vDCnoSkxAaTeHg4MErMar5xVuaubgdqPv94Ao4VrfdxWVGGJdUPvA5e7xBaWR5",
  "key8": "3MPj4nz3gXNGGpW2RJmScy6pvUKmKQSXPToWtbiia8m6BXBoe2e6Nk8KhAY1unz5hRLmTAt8gU3TechcuXFGuo8x",
  "key9": "1274yZoN2TzYZSpT4SeKfbexJQ4c3wjVyxQkoERaMMHdtRFL1TBcjeeovdS4FSuEgoJRchGC5U1xBGEkvUikTvTC",
  "key10": "4F5Tw5Y2jFG8jNPqBgfsdmkJHYBmkVpR3JrwSmoKU2YvLT5okHDFsYn41uQvFg6RfpmMy87xM1bWYYwvSaVQva5G",
  "key11": "YUBc3sHtEBcqznLUY9PfY8mWetUB8WJtQ2oULSZv6VFAcxbByaDCyLU8ix8ZQCz15ENwztL135z2qGu331AEf3y",
  "key12": "2fx1UbAmY637ZeciQyg2nJccuT7LFeLFUdMSZRe85fPy5NGqdLorA96PQLiPFHY238UH7n2UArNzMx6aaFwijUwd",
  "key13": "5Hbez4Liv5YfirYrdC2kakbJQ7hni5itrzYhb68CQRnNVnJUgugx6FBvW299NJdznfJfXfddeY9Pqv814wUAi7o8",
  "key14": "2Zx5F7GgAMFCYXb69G97VTeQ7bfNtpYeeNzVE3NB3M8tDkzXtNuvUQc78w7vxUDMgdiQD8qqmaNvm11S78DjD84b",
  "key15": "56MMAuKy444wAvJ1TeSMpHwvyTWiySabHCNaoDsmFvfbSCBUTB6bhL9jEEb2tVyGp8VjRA4diF6PBUTsAqmzZKbb",
  "key16": "4S3ffpHBQ4GZXoggByUx4m2qZgRaNPCVu98W3jdD5AKTcWXcsvfSuatfEdtpxYyA5e1L8Z3v7SWebpyQ7DruAjWc",
  "key17": "5e6K85z9WeFxyb9bC5SFmJzSH1Mg1UmUFLAmgY2F2P2SPP4Q7ivQWYGXEK7WhfeJiQZAd87VRr8qfqRTsxkYETiQ",
  "key18": "4ChCvm28dJwUF3cr6HZXjrzQ2dMmUgmAPKAsNUtEexjTCGSU4BTnCDEem5aND32Bx39se1fup3GSGbwkk1DVffP8",
  "key19": "BaGM1PR7njpsxfRnCYhBs2xqaGGsAioGhjj7TPt3ewKxLuqrDo8iqhHWhE7mFHMz2M7mECwH5C7cknKWKsvd8RS",
  "key20": "4wHisZsj8Qbs1tL1sUYM24Ss2TeD1BzXLtjpT27r6yMaLbsVoa1sXqbwAQ9DadCXMyxZHD8Ci5YwusrKoHnDTkGH",
  "key21": "2P2gnJR9H4ga75MjaDy9ozMVzrhJ3jFcxkCHpeVJwG2uRVauQk1stxTmSEh2ntyfisbDb85DBrmcnvCXr8kHDkZn",
  "key22": "4cFKGhiMXZxvLy1AnUvM9rsQE212V8UZo8AF7ybwa9qrGfcpuB9Q6DDVuc3vg2q9x8ssdCd65cV3s1A2BTWmZRQ8",
  "key23": "51j5AavY13DYogM5WiC8GkJpV4HMHxLerqzHUwujzJWey7T9UkiHr5jAJNRsPRAtMFS2FqAV3ggoutCcpiciXC3v",
  "key24": "5awp8dn1bpEWfnRQicsaYXeqgSN9uu9UN3oS8Mrpybn1aBDQenHb6qVopJz2kTk2FV4iNnRYvssmEw4Kbgj8MMTy"
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
