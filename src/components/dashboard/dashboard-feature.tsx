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
    "3Mgb4CVCMtuvZfhbD51eJnfRNd1bTzQP423LLjyWgs4wHxyp5XQHNeBpyoaRZLJu6R7voDBuWPmQQHCMp7CuDYvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wt8hsYRcUCKRfep8jeMm4g9VUsRKU8hqPBwTUzDpNzKsHEfmEt9VsKTUru2N6FYSi3M9KpjvvWM1LrGzScB9VBP",
  "key1": "SZFVLpzvr6dbNuWp4ed4LJKAtV6z59BNFxSahnsyvNMHSHhyZbUNnFGw2d8xjrtyC6HMRej16dSJTW2r9XJ9fP6",
  "key2": "27z7xigXAQcKcNDHr7oiPSKtZ4yDYTWoPEbZewCNRh2hd5sfYyeuwgt1kP5FKcxyvBaQpkoFEn79zLZibAw1Bihu",
  "key3": "2rzDfwNKK3JKBkcgu63Xh2v3THf5oVrkiXSL1o8mfbFtUV4xqgzaD8UmBeMzB3CFkvt7EKb6VzYMUG45s4wHSpi4",
  "key4": "4MDiTmx5nRYAgoRZdDgQf16GQBn4ks51tmG4GYFqg9VhXmqoikeVHcVDqw3VWaFrqrCjRgLqvpaviiDVAnoo8rcP",
  "key5": "4fAS9moC9Hkjp1W1RSR2Nwu8euYRAEhYW2SiGPtM3PgUzzQDcDfaBkpC3FWgzwqQ9TTQiKzDa6LiNYYpqdH4CrnV",
  "key6": "3JvZY1bnDPSVX5hoPijDwVN4YxJk319BueZ8EjY8a1k2fjoyE7KLeQVepfwe35uRPXA4RMLkdc7AsR3diVJHufSn",
  "key7": "2rr5TFA5uJWrtcWv7A6su6pLiTJYFUkrYdddyXj3tGmbtZkWBC4wbfUVJjqjnEkH4atXvktHsopWQj3GnH22Jwc5",
  "key8": "3P8R3vLXB6F5xfjjZGrq6Bc74gy7bCP1p9CkdsT6BLRD3k9v72vFAYFzbSru1uria9NsnC2Jd5q6pb1sBtS1qPVz",
  "key9": "52k3aQqcKqCYhKGtG1NtrBgc6A91icWw46oSszMuRqqcEkE9nL7QbtJrMa72VCjPaeGHSGwF9xFhBbTS5nMrXW1P",
  "key10": "5tMq8r8aRAUA7aapRYVpy212EzjNz6WBcBkgVTbeDwzSHKGUbxwMc3Ch6J5tiubnhPK7BiFB9zBpRKjbFtpNNodh",
  "key11": "38xVN9JUhVu8NEhBBW2TjAaYJF7GrzKnVv2SSjR7eib5p3VQkgHLpLhGEEx1ngWdgVUrxaRwL9EWZcYGLSg6wqcp",
  "key12": "34UEWyX91ZY1fG1vyq32KSXetqscPnohpshqoU8pexoJS6h6t6LgtRvWiXy4BSASK22VLmawvPdaYnkESUBygpXa",
  "key13": "4x8rt2NtqKnmhUETDut2aiv3wZfcyWkWB3uRZJjoU2z1ohGJiWPPEGmrEy9fSmPJA3pPv4CURMvJ5hzzyDWLHooU",
  "key14": "3eq3u1CkapU3eYcQDY4QDw45N61SiVgdyPJCJmaKfKopffcm7eo9gj4XsiMDrgck2ehVtmh9HokkqvzdgS2Hf7hf",
  "key15": "3ff1RgQeCvuPUHM4dxeye8cydtqMcizruqR19xJC59HF2Fcb1M3FsiUX7SvySikHQNtPzFRhs55QoQBozFwQNqEe",
  "key16": "5XpizwjUgyT5HmigFdv3XpVEvZhwsWCLYvag4oj23QG2NW513tg4paHZvJLUTAiLHbuiztJktRuFvtY2WRCa2gFW",
  "key17": "62jF35fQXiStqk2EPuqxmLv5nDECew8aDnvemBdffWLpfjCRemnK2aG3j2EzcmFxPhz6hYWbKVXFHNgbyTcC9BYK",
  "key18": "wTMXJqfNSpNj57zzbGW6qpLW1AQVfBEV6smaMohGkhmoh7qAMRATZg4N5GRmJCn9RQtJUYxht6VmJDUz8MMcNnN",
  "key19": "4zoR5CTnpkBgevxKeejJdcAZSGD8xJ3VHouHoLuAUxAkzxMPnB6PrTs4SF2Qhu4KLcs9erNfcVQGRnGFUKjoBxKD",
  "key20": "5xpEbGC5Np1eUQmDowE35KQZDYwFSBmFTX1BvYj3YDWsr5vJST4kCRczLXaYuXeBfGyrnfQ2acZBz62UJ9aQ1Ads",
  "key21": "2Wf8up9jJE4KtYoA4F9MuMy2H9QswtqtmfT7MrAyXTeyDdPBnNvu14nEX4fK8HzC5YHyUaCUC5c6kVhb4tcBe53Z",
  "key22": "4rx6fvhkxZccLbtAUgxo4AoqDTWfXhhTvzN4fkbsuQ6L1kcweDtf1eQCi35UfK7nsTSkuQV97dQHioyrzpyqhDaM",
  "key23": "5rxetK8KzMf3eFXXywyrmeccco69dnN8W437j5QtpD6GF1hGWMTDDUzJYoYXKiD6njaujCVyAjZrzZ8GZqybZHxP",
  "key24": "FBSgmZYT24W3ihv7Ad6bVrVbJYh5kCY5JCiiBECUc19BhQqppDgoRqWpdsCLAsrnQ3y68YNkVBWghEa7mSWK4oH",
  "key25": "5DWCkUp38Ywk18qnandtPQiQ5pMqLzhAsgvP9warvGuJy1muTZLEQWvtEcPaFimctC2WS3avuFcDsiQcK2aPwuzZ",
  "key26": "2JatPt8GUBrG3GRtarHKHvXXG4ZBVxHj2bqktKH396czwaaewbhiN1GiVm8fgnE27uF1QCjYbPwKcCo9hXFPj3vY",
  "key27": "2AcYXbAu45zgX7eFg3n4MoZqbnSz8uWxLurKGsfmQ2yJrALrvwhYU7d24ckhvnMBQBQc4U89gr9ArepCic11g4Zm",
  "key28": "3joJ1gXT8WNcya8h7QaRCec6dAchpDx4VY62KS4U9fm2uLQS3dtWgoGcdHb21RwGkDDXMxPY4w6aunGQroSgzeP1"
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
