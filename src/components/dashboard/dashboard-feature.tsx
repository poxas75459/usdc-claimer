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
    "2897wGtn2VL18WniDdKq6md4viDkgbsCZnnvcvPR7Bzmg4d52X4dDvutG8pGFSAvWGneTx5Nh87ZncgxuFXW665L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BabEQTcDp9K81k5M2WwsZdKkx8F286LQMMh6U8PUMMqHr89VdcJTTAfWmQoTKj5uoYpgNRUBnFyvFbUjnjSnWL",
  "key1": "4sse4N9QF5QqLQfayztLYnghLYimqNvuncA8sPXb49rz26dkdpVvnwNovVSdKBS6KWgH5yVCEjXo9KzaAbbLPLyJ",
  "key2": "DzuDdgzLyocE7vxQMYGcx4hUZ67KJ5w2HL9vQruz5SZuqMmbZm8HP3XwKYodRxkuQuzc7W2trhNtHdUkKK1vLQh",
  "key3": "UknY1AVWFkF7tFdcxH1A5KTfyzLqSE31R5fd38NAnP93QVwus5yz8C4hrfyhGuVgHZrmicTqBb9WfxgUABkYYwd",
  "key4": "uoDvAS5py7ydQHwyR38nNyVtWTXTNqB6pakK1NhFGejuTVHG7rFtjakFKf6wuU7psLfxWVDugE1TqreVRAnAfS7",
  "key5": "4p9Lx3X7HU2StxnuBX4cwujgqybrm8Yxkt3JsUT3bBoo2hThLF6J92p7SehvGu9GC7qiLXWyaWQgJFdaA9QTdCMQ",
  "key6": "U3j18e9Z7Ba2bctV5mhEktktUQ5NMi4ny7vCR431D7TxDsUZbzc8pBBUpiK3kuohTNnE1FZF8NWYWBoZmaBoEbY",
  "key7": "EVNSoWRhjD12FZjpJnuYnao68tjmeZjpVdxjDhtWPYzSMBAx1DMhvBc7rfjUAnXxEUQ2fkMXmoLSaBvcXPtN1jm",
  "key8": "3yyKG1cCq7CPYfXGwirKHFWyDmjKMbMZeXRvLbCuapUsU1nxh93tbvbkJtpUfBtrZo3X1Ghit61KHQ1uS2GMCZrR",
  "key9": "3qn5aKQ8xKALGw7ce8yJqqPj8QAEFNCiysHdwTnp3jBcrwAztZ5kDJdCpGBZmBKNpqCbFvN5BmYva9cji8f85Ca9",
  "key10": "3Si59fTfDb6mVEcuakjxUWqGB6CQkCQiSBM8HiXmpJtJfAu39ar8SdaQVECwGU745VzpZiUcoGdFS1Ygz2ZR9kh9",
  "key11": "34TWuRGGtqfBFqNtx5R7nysd1z6kLttopnCzbbrxjJu9ojV1yjbtS2cX7fy6qK7PcoAD4uG7DArkw4ePeBxXsa2X",
  "key12": "62hQnQu7jsZoCdMkSNuyTxhsNxNeNuqm9GVwnTmPpSbidWiq6noKJ4Ns6kmUuk7uZiyE8dAgxPKY7Q4Wz9GFijq",
  "key13": "9yJMNE7jJr5BtzT7werDQqSB84gAJVKD58QbzohGkN6v7zqWimWJoRdmW23uF9hVXpDHzdxUy8uAbMf32FU7pLn",
  "key14": "3wsoEPounFyyszKWPaJL9UsHESkDnZFEyUYcTNTibxCEdFuWgbindX8suPfsobLwB1XGu79PA6Lk9MkyzAb2fi11",
  "key15": "2PBnppQYS8Y7TtYycjhKV1tisRuUyoKmyQ8QKrDLURXmCHrRqiPk7t7pUcve7TboUnbefCF2hrRsnUJjDyCr2PN4",
  "key16": "31SZjC4KWVGf5c7hkrJbyT4mZc7umHnKpDfNc3nBHXrabKLWKu6hA7AfzCdi3dRDk8soTTBq7TSNLpYXdpKx1tT9",
  "key17": "5N48TdgFSwd3GRoCBBaVR8hTYQXnDBTNMffDuvZZFovpMoQNRLpafBHUdAPgAq74Pc1tcppMY1zVuEHeYnaYX2Ye",
  "key18": "33Xu7mPm2k6h4B3ZQ64WNPo31qCv6RFVmvk3xzCW5ampj5GybcmZ3GMSRJEubbzMoqKC2fvEGUHFejrEVFGYqeY9",
  "key19": "4ymk5RmfhNhyXRiqgKozDDQaZ3tcn3FWwUxtLx4zn5KDQWizBuSHJTKXkHq1jakHKbCyEQnd1on99nEtSHKFxfUo",
  "key20": "4eFR5SUwEKTLjV5S39m6zEVHaPh1htLZU4Zzc2ejG7CgJtuA33EPkSts2TiQKtL5tToRfXNyqRhfLZszN3w9yCf6",
  "key21": "45dYSwhBzQUUfLWy3X4tsL1SYQAE1mbY4ycYoojY4wcCyngVgxG4RiXXH9RUE9ycjyLfX3nBpzEWH73tXRTB3CPD",
  "key22": "3v8zr5oF7Q3PyAewDXev2fcBGd4YXhpQZMBKwnzPrNs1ApEiEr2mhNUdmEPWbgNkio8MjnPNWAm4x4puuSYZFa79",
  "key23": "4WHun2Lsnd3sELCbD3Ki8WwWf11iFJwUYuiTrduRigLEHSwSQ4e6ba1ucTUX1V6f6CkKAGJnVX6ry9ZVbY5VFyGx",
  "key24": "jR1pxYyeWUNhtTHg1fF6S5yNivpWEwp4cUy2PAT76RpoyytaHzCs4bLmzqqYz9eJHRURZHeCUBGGUexD94hb9Yf",
  "key25": "4sNTkmQ1cipRxukG8yTQ7tGwteJTQkX8QxPDk3GBQGHU9WHynLeqQWMcg2sE2abmxPCQkw6Bwy8teY7XBXUQSc8R",
  "key26": "44finW2jxfEqpkThGqoMdFKJmp8caJoJjPxrj3HFDu3mjfyfQDRBtHwp5j6Pm9hnvFwgyePjvdfpeKpLs8e4h3ff",
  "key27": "3UHpyuSyck2cwCURFzNaStVwQK31hVNcZj2xeEvAwCeMN2BJvnDrscVTZynBZ5pn7B1cjeoo7nm4JnYZDBBq91Zk"
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
