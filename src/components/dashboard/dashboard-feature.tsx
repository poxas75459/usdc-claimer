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
    "yQBW6WevfF2jPgCMw1vcEjc27GQ49tCPHYbPVAG9fRXzuN6j8nke4sPz1LHE6NgpakGCmoieCmeuDXHnziEqNwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdEvCJtSbViB7GdQ7Yieqvehbjcg6h3dM3WRp8tL1k2SdCL27Rn5KSHTbizJPbihfb51pVXiSphHpADsi58Dcuo",
  "key1": "4bZVEUhUBM1UsWCiGCt2VzzwBRqqTbpZTGARLhdYVtijL48xzAkquSzRqdfw2WaiQ8FCa3eqBWjpmuyuVwvGmquZ",
  "key2": "3TWVKuhHnGtT6W4wdLo6TdFM9fmWa3A8QRwJ31S4oV4DjcCZifnRXVnHn7HywPqkoFB8EY3M9TTWmhEGQeMaU9yz",
  "key3": "4Yapo1fygQztZmu42RH3pNKjM3puAZcsTUwLhaq5PFst7SFsnkwgUa9aGsj3Cn2Mes8Rghra3Vz7xDD4uW3d7WQE",
  "key4": "2WYF9McyQmeZKYBwor4p6yZAJAiJtsUjPTrhgXANSQxsndGQ8kJsayfoHsunc74bSJm2c2ewssbAx49swPtDDKcD",
  "key5": "3YcD8URaJYggtaD35mijyTZGy23CLgFwhqehZA1EfrW3q5xPEi1bXcb9zFHrE3B2hpUvnEzZsWJdUEbkU56pp5S2",
  "key6": "3g4KMoWRSwtQJF54hVRwFoN72TsWUGRLge65v54uZB5L2Aw1L9szQe6F8GmWBr2m1PD72Ba9J2AaC2fALwJZS1QH",
  "key7": "4J5pVtDd1iLrcZWGmsvbNvg1WefC4vBJCkFcRkNAXUcJJQexmaK231udgrvajG4Q4FPM6pxZPdWCR2Di8hBKLP1v",
  "key8": "2TDk4ofcZNpSikyCKkudJSJMW8uBfHpKECEm8mxfHCcLAyZ4qvh3JuA5vHFfQcAnQ2JyWvShtwzYFSMaR9aYiGxv",
  "key9": "5StzZdtx669mrhiUfpSiBPiERvVEZidJMJRPCE6pqRB97FeQa8QiDwqbVUrdvtKJyUHrymuyadhom12FxZ5kDWSd",
  "key10": "2CKPippm738XudkF86nrkGJ2m3mBeNEYCpUaEqyX9KfjVjt7QMJuPFVF7MRvAAEfvdHWhi8VXV55xk4ZZ4K3knAz",
  "key11": "2VHEB4XqYTCDU3yceuQb8juxeJUKhrATfDoNsiobGCrxwZCzw74BTg7EWj3dzmndeUn77rrrmg7LtcrjfpRLFNo2",
  "key12": "65XzoPvZYhxs1vPefMnVPNBR8fuA3mwy9koegETUn63npLRuWFpVutBSMgRKeTzAdfe2EzpKtGfUyfT36WZU3yK",
  "key13": "4ANznwkvpMV6wJnXZ71jpgKFPquGyrgJY738rEpuGcCQdWYEK1DSPH5VmpiLTmc1eeV8ks6GB9vWCnNsotjFkCJo",
  "key14": "5pbfk7xnk5CteedqTZpabHumfievF3kEegT92tdqWNWRJQZ4eS3v2acgUCX55ajELoAzi2kGz7QMZvWUEfofSaCa",
  "key15": "2Cx7afunZbzZU6gWtwRQ16rBeC3uSJMxjUhLVJZmJNtNqaX6LP7n5BpDmZAVfXfi98nkwermHXwVrRWsjJrpJiRw",
  "key16": "3YnQjxStBaNfuAxEWuYnjQLKdg9URzTyhpMJ5wze3Nfb6HoCoj4TpXbkRKsK1SqjQ5M8dMRWGzXzKrM2HDVKzcb7",
  "key17": "4Y8fEiA6BpfgACWQ3fLccMSShfVbd9HB3qHN8s6Dxnt6PJ43671ze8o3KJoBpQFfBY13cPMTFGbQH6N8aiRKng74",
  "key18": "4LVr9qFPDuBzS3FTimpvzXrjfh28qidg8yqYLUomFAs9vBQPQoTZHMGJ9gYLxxkHV3qfWXGSwEFQQPj8nqrUwF5Y",
  "key19": "2F5RHKsh1NvT459zTq3rL8GgLV3vtmLRSJdYkkTXjDZbY3fYxmLgNYfc3GfcvRXeZKGBngtcmprrpUSvGYafJRS3",
  "key20": "odeapdqBVL39sFwXYBthVvgixLGLegqreB2Bpb1pNQ2Yo2hcNBrWHbkaWen8D3xLNLaDb3gEXjhn851DoyevvAx",
  "key21": "3L9pBuQQX3YFWe6eJaR2uGnxppiZUZgEVbbXkgLHkjhR4dNrYCYLeS7mvfGngn7cNLzrPAkd5ku4Apbkr56LowTV",
  "key22": "5xympcw5YwAJphENKFXnGsqZXn9vxYKSawp18iCiSAPetm3zoh7dh6Y5GCbpWoWUEUSEYMDpMaQKvcnQVmhJgbx2",
  "key23": "2dLQ71dGNS7qcu4Te8gwzw76g2BwCom26nYGCpo7Y7ZinPaHEikkAV1YzxRZ3xTFUCdBuZwr6acHc4evFeZivm6m",
  "key24": "2jZdXjTuYv5y9peQkJSF7GJGgBGLXezuqx3zVYTuh7JvB4PYNJiJZ35DrmmEkuFSkjBoY2fsn4iqCtVFw2Fi5ApT",
  "key25": "4NvfxRSxpXD7SPbBofrLam2FjTfuh2DxrxWmB2dXx5xNdVzvNfryG14BNDyLU5efrHBHeXDfnTGks28KfWASHSub",
  "key26": "2uo2mwJsynzfUp3rx6GmmFj4BpEFzneeRbnUiy2Mh1QZrqNHWT7s47yULgXrkTfNRCuq6HuJbzLhxw7dkPbhZWHH",
  "key27": "3Qx9EvnjcwWNqkXVtovJTo1MR4U2WYTUgfkeRt23c8gzrrgvjs46rxJaieFCPvorcYAL8N3AivFVFbQYMwHNJn5u",
  "key28": "QA7P2TMVW3eYmZJHVPM3Wd3cnHvsLmYjiVmruoUbFGhgcGP2zwZK9iqMLBqX22mYVPA8WA2XrpbTWCwYbCM3fzq"
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
