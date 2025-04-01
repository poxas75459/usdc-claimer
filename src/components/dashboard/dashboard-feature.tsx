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
    "2vyMzTZrsT996wrHnvRG4cXHVmhgbAfMwkHfexuen3tb2uWeyQAZMC76fpDXyMsWDJ48HVMHhgsmnobguyAcjrzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5zR1DgZsy5kS85UotNDAQpoYVay3jfzNL3XoDwBDSSyMNZ8afb1uTYgJSE1hN7DKR2YDXgwTZd87P8JYCJCum8",
  "key1": "4eg8o5jKWT6qFqz5yZmGUFGJttEUrawJ3cwzNbPw3t7dcbtUK9s1rjaF551kdcJ9R9oFzjmQtAhGzMDquYPwzYzA",
  "key2": "39cstvNb78y8rumc6tFb2PFLa7yhY6FwnEovbR8p8U2aavnUMEhegGWPFQ9bTMNbTwrvSK4qt8dru55HvVudUXjp",
  "key3": "2QBPy3Y7XKBgG6Cm133uxNxkgXEZsGdSmavAVAfXkxPu5ux2MoZVWNnRhMs2ZjdoGUBPgRa8Lq4XGCn3Ddhzo5aW",
  "key4": "3SNw4XxUKFtw1vGRqx4AECpiLFzLe2QkygfjLMxwsjbkzPhYfgRHMGBxxRX9rPVGgopLG5RVcsEPufaZ5RPVav1w",
  "key5": "4AUN93tu5FrxM5HqSmBSAcNjmCxjDn7TjaQYjgE24idhpzE473BSgcifrsHxfGxnuqSwxiUYCchdb14VBseEG5sH",
  "key6": "2gRPH9FP7KX8DgP4rNatAcWD1Bo2bkbcuR4xmBdD9P3XhcR2sLKBXRTRejWE8qoAsCAKo3237X5KJtt3EQdQyPKq",
  "key7": "5XYk95dN1v6wJsaxzUN6LFMUiWafGQpAzTo8RDNrML5aiJifmLwbtViFm7WLMoRRHseeWnEvoRVthd8XSQbsawg8",
  "key8": "3rhNkmJfUk5iTMBB6ym8onMAuV9w3UYThLgRtehpi5JhQsFxdVFXJCpmTx1FxoE8m8Fhi4HamWhD1AeLNK2GGPEg",
  "key9": "ssfHC9Y7pyrmFSoLeeb35ohXfJC9ft9s96hLGAiztBjSvVuaRuYmoJHqsmHrqA3DaevUMK44qHdwYfdEX8eQcB6",
  "key10": "649K28DdVs6rNF3GFSpHNDP2pHL7LS355reBtxL9p1YzSyAUMtQAPNvtzEfAoih24q6nF19orjeeNeHvZYxpoT2o",
  "key11": "4SQF1PAXy7yCBqek55oKKmrcVdBQ3aHDev46Y5RsBwcUrbv85GJdVnSxwfRADV23zzYpJid366x6FBYSsnpQMryV",
  "key12": "2CRqN94UebEKiUQENee2C26iiHJsY3eQy89CiXEA9frZxevA6ZnupK9ZQp32bczAsXKDDwdyNNk4S2UXJ2yg49CK",
  "key13": "R4CZHKmHr6Z2YuQSvqQuYtofShkUu4jd92mmhcCpXK2D2f3bZZmsAc18eEsBMEiybbsWNcrrKqjVCSWbX4HBH4S",
  "key14": "ghjNtbnWwhCLAH7vLz2YbFNwMXTGSF7Zu3JqxTXN2V8a1gk4ZCQZVgD1E1hhVX2Vzy2kgbNvYPtHZuYUcPma5pZ",
  "key15": "4jzc5bgvxExHBzxc2jroLris7ziYqs4bHyJDD6EbRDiGJGsjTvpfCJ5Jk155HiMEvRV8ceVravAN1GcNqMStCRXJ",
  "key16": "56xnjr5PHqo7WwFA9pRPE55Soj8XwwLnwcBN63pw9QENUdNKsTczVJj6GMwebBKSmVqgSPSVFDB2JnMkWrZxSmGK",
  "key17": "3xEqJmPdfVpxiQmMmPXZoC7YmMxHNkV23GrisagRDQ7T6UkFT5kFHbaNqstMAgtaeTgGMKdwe38CFfe3o19qTRZj",
  "key18": "5qcHzgzGY3CUYCujf15JujBTBdqHyfkBDAitKsdy8VYGShffFeoky3un62SPgV5RphTX2KDhBvMbGEMp59t7i4qh",
  "key19": "3hSjRe9rtau5gN5EjxTBL2QNxaf21zsaefVY2CjXhfB5XQe4fXa7p5yZpgPK2PtxWvpsL9vrctDDLXeiQeiTrxXe",
  "key20": "2zjhzCqCBDPqvPxYLt4y5F82rDtpRxqHJpdebTYqosgBYfSp8pgnvqnZQdsmrfMx89sVorL1RiqkcibxfGm8uQXM",
  "key21": "5ZK3jKH9jXzssXdGo5P4GT52JJVdDG327rBwvs1zNKqvur5RRdFuBRtoGmAzpoAciCNfLihx9VLEgjvM4JywRU3i",
  "key22": "5fNX4disPUMY7xzHcgZfdnqxgh1sw3dUWbvkV5dHVPwqhxzXHGMtnQ4t6eaWsUSKATdKMQ5GffYmW9dB4V5DKXK",
  "key23": "LS8XScBwzWTeD2bAyJr2s7o2hxD9fVFNJVusspWcaJCeNVGvsouraPJNEwG9h7ppLkTpVz95tHUrBkR18LUet4E",
  "key24": "56nR7gVAHdZZhzQWfYqEws87UKjMCyCtRLgF5NXnYmdegrLDF3v4TYrBi3G7AXxBfQALQ8w1vHdMcpy8ACLCJ14Z"
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
