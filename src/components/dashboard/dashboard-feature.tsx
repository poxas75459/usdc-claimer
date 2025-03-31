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
    "EEtzfweiWiz5BZPUsfSvEDbXWg7teYk1jcfgRqRL7tctxBQmwvKNogDW1ngZqCwDf2g2aXesc948tfQdxezGCAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqredmjnmM3yaUyNGSNMjbFzTLfzimZdKkC1XUftzZypYuiQytNpgbyBLrAbEz1t5d9AwLooQZsaT5dWhf4K9cd",
  "key1": "3LJpg9JynPTwBrbT58YoAv7uUWvoAn45wVj62ocMCKvRKrWb53kj6vNn5NgRjtJLeaFEKuf32kwPR9x7K8ZgB2T2",
  "key2": "2oFBvaiAfj2foaLj2nDCSKoVUcMPv3sPwRRh1gHbTZFgcHTr5JiyhqFzmmioysboRak7X253gtKzrkn1ZpUs5YNG",
  "key3": "2tstfyZjq86GHqMETpq3CNWeuYKGMpDh5s3thRvPCQaiv7b6iLumgGdhKvFWy6YgSK1XHX1bB2ZdKzqxsZpxkqtg",
  "key4": "2cHUs8baM6RCcJvufBQfpn8xDZBQ9FaSp21DA1deRyLrLXNrbmU4FtvdMFuxwnhdHUhzFV5h3bTT5yuPznV174jD",
  "key5": "5kWkqxDh9Z2y25Z3W2jNdAfnpyMM44mVHuwD1C4LxdKjQmT84Z6uN1zbcvt82MntaWAYXAPs5fBKSne1pqvh1RDd",
  "key6": "434XkmXMPFNBJrjK4UzAJBAn8tyjmVuRPouis1DFZ4N49YUuALJjGMdsWwy48BBFirJbhEZ863sGtWA6dHNwKr5Z",
  "key7": "28msRyPqnabbLVUErciFTw8RjHyASy127o5ns5g1ad4dR94nacsYvpuPWHZ8XoxFJXrLZuJsEaBiYwPybskbi6sW",
  "key8": "5AUAwRLpNHtjWkkgrhTPsPpWRzYyv1NskzD5aBg76k5tKNiFKzme2JKsHQehD2PtoAcgFrGSRCp4R84NPZvq2nFC",
  "key9": "4Kv7a9SQb7mUsVEstDBCtL2vcKCgy2VVfVYhEkSSmnfiVHkwBgwwLVrKVGVszyUPXUJfxTfe9ZW9ufdctKXPjiA6",
  "key10": "V9qbHsCzzfLni8VZvpt33uVaQHUzPt6evniWah5Zw1CwL7pa2jvSWParz8rcbBdmM3M4xKRxXb2AQ5LTAspU2Ee",
  "key11": "2SznZgqav7YMpGYq3CjZ8DyucQhMb3qdSK7tab8rBdWW3mkZEtN43AV5AMVMaLqMQaFB1yqm5BqfVXiodELfKez2",
  "key12": "2UHG6AhMLhkh49gksHoqrKYXiTRrRos1G19Dj1UCAVa7kBpQELg8fP2ApTFyYANMqzrLMLuu8rGzcjXYrFH1jHew",
  "key13": "3YZ5JWPXJ9JJ7mf23FRQcQ226RWQsxBU9EQ6jfpBUco28wdT759CoBP8rPEvo9LaXVtkpGqysoijMoDyfyjnh3Dz",
  "key14": "52FqYdc5wyDKnEfZw26gC13aKtJgcuJ84P6d2BvwVdePGYEFUjNmqdibHJGVpt2z7mhTD5HWmJAWv67gQ3B1RTdT",
  "key15": "4wvEwC46eUHw9Y4fEEYQsTWfASCXZ8H7AR21ZXfBrnAuYqprrT47CL2m9Lygfg3KGHseijbzaEAbK3mTh1Xeufap",
  "key16": "48oZnbMJZSnyW3pAYUbtxuEthBDNdVKcrJwgfDspC4qfbvenr58Cj2WMak9VejmvDLuoY3vZfifpYo8NVVF2vHTr",
  "key17": "3K5ZudHQz3fhUnykff2rYZ42pVCrMwrwvLKECsVMX6dVxEqLjdbDuYTnzmPQ1YueKSumd3uXTiU3hYUp4zuFeZJa",
  "key18": "5qgxUTQ1Jd2ZecsE6Xn4BmMvwaj3CZMjZA7X35zSJkCKNWqNWEXBrUTmELnAhwcWAZzu3wmRmhitSzXEbvJKHJwD",
  "key19": "3yBPoNy8hYh4o7Eai2YawMN52zDxzrw4QJA2imbt6XmpsXRKEGukRqkVsQLM72kMmswhXAo9YPvUSXviLt7nDmpq",
  "key20": "3TTogr89BfQ6WKmyZs33Bi58T2MuauHXkxUyMPyoCaD17t3QwxJNA8uKjy9QjuUkr8ZNWrsgkZ4VAGzr6vFMavch",
  "key21": "5PfHKby28DDRJA3avXZrjiWaQ6eNrKLjsTwqw167HVbSk1FTL8Nb3TFLye5siREgvUV6npyPG1ugQuh6bApJF58P",
  "key22": "nqJmRPrAbmjGtsXTy47SGFTa2CKnFUNbHE9Z2ayS9zh5iNMCY5MvCXqb2m6hYD9XYwFGyb98jiG83iU1ZtruUV9",
  "key23": "EKCyL9sVNA5Y3RrXvxk5WCw9jk3VMvKnWfYh3fwosKh9GD58wnVS61gD53iAFDJMdob7uLHA2DYzQe3Zfy2FeMh",
  "key24": "2NBFtjmaqi7JctnHhQcPgedh4vfighQpgbiMHGdTujAq9qoK8Avw6wYwG1PRmhFh6aKsGEBJunmiTqvqc5Eok6bh",
  "key25": "2Ac2NQMYRTUngMADHJpydHYzDDNjn8PAKhBCVNB4ULHmWEg1AY5fvmdCbmT1LKp4JtXwYrwdicfKi5vB8hAvQr9N",
  "key26": "3y8kcLRtFY4vG9jPcJ4xbDwrhyvJsisvbuepL4RyUP8RDCyUpwmHcr5WK2TNrdjuEAAJLKGmkK8ZmdveGTR2CxnG",
  "key27": "ERibCzgfW38xYUfnMKwAh7AijM3y86J5NoijDrcKneFTWhyTVLrUESLjRGTtcmB2Gp4hJQBDHPr4sDhVqQyZukE",
  "key28": "cowS6Jt54MM9yFX2Skpzn3XmNdQotdjg7GH8RBtetVq8UbYwHMTeFzXHhf2cxam4aKxwVijNuDuycrpzgHr9ope",
  "key29": "4KYuctuLs5ke64AcSXwHFotBkRdyBsqRLMZLP4YURQDrd1u9Zv7LDFSuDb6JoPVi8JAM2B36AHcxvAfCwsW67Whn",
  "key30": "QyX7G3EsnkjaiXmKY17FwNJhTC95cTw6iBu6pfxTi2G9Nk2WVLLuvbU7ZHD51F7FPyRYq7KM88VdYKAu4uAyrac",
  "key31": "5p1SGRmC3DBhpverKhQCq1oh91JPYt233HjAkw87C9NxLtYGj3UWwh7VjzPngcaDdgkuRnoeKX1wkLJn2YTDVupr",
  "key32": "5j6coEk1fXPsmfXow3Ruu1iUy9P2NzYuhtTu9zQCeMwPtBuRvDQBgZcd68TL2TeJaFo68P5F9A4bNc1nsucC6KdK"
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
