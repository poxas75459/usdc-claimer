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
    "2g6UodqdTXgK26gL4WjFi7Qn8eNQ7NWsCXnnpqF7y2UmyCknDAcLckwVh3zRDjca13cG1h7ZNY8AsB3nb5irvLhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxVjHK9WxCRTN86vnwQhraLhbMTJtRbYXYs7nsLG7mpQccHpVSJSpyzvYQcALkMV4Fz1CUb8bjBBH3SF5LaLKzc",
  "key1": "3m2PVXAGTTN1hbRnqL6T7kiPkcb2mky1TH3tNsBVMiJSJPnpHYAWLZiNKmr74VhtCfeMdXmwy3vJSNVtL6HEut7S",
  "key2": "43RLhPXYN6usfpASTwFkMkKjN52t6uwZ7MQmvHmsPduz9ecci9ddjdz4iByzJbjqvfsLasARa7JFnyEzs2DeHKzf",
  "key3": "FRnC9QDbRqm8LRFRSuoVdRmwn8BvQkb1P6UxEt85jdyYhgJ3VpD5wcf1JEnczu9db1sTE2DdDhFrpyrS7XFvLgs",
  "key4": "5a68TnvUasFoCr2ecnPuHLZDSRX56eKffkzn5JFjrgnL63DE4joa5uLuFChpKkd7r1kQF1h9b26P4CzZfyVKk4Dk",
  "key5": "5NU6XpC8uNUXvFVuBD6B8mGmwaSfow9oyMHFNjdfL9i2s5pSktNPr7DYcbUfAEmqkk6Be2Jz5VkDXqzTk7YqUCJ9",
  "key6": "23Qyo9VPKmMdPbtyWwCKr3c59hTyf4RqtahZQyM43Cjwezu7MqhVa7AcTfK5ZQeRTvg4yEXXt4qKqfX5Yw3Y4zyH",
  "key7": "5EsTCgygBN8rDonnYCf8P4My7LKCLKWEEkfhegZk94MvwetMREPNRQwqRdRcma8NbmQmSXEpQeTY1vmmLANCnq2L",
  "key8": "2CtRtmJVL7arnk8Q5zPfxntJgw28LobgZDCKjc5ucYUicSum4uBugkJKieKQZrexed37baQebfEWXL3mhzkCwkXr",
  "key9": "4vk4TXEBFHJy7jkB4Ssjm1J2tCmwbYTZWfbKgpAKMhEoFR4x7U55HJL5FWMyH8pxXe1wKoCgkXdRodwnn13PueY4",
  "key10": "63CPZf851hPJFVfoR5od6AMvAB4zXgFieByuxgfxyN6PiNckya6ZSmHFZMf744UijeJDX8egXK1H3PpgziFm94kD",
  "key11": "4zrkmbQ4MuR3yvT8SBWSbvddsr2thkmzMybcCBfmJLn6AHGNRGnPc9qeaSwXcRx8YTqWLbzDuyHzSygbEA42nYQn",
  "key12": "2Vj84DdaphSfq9gqgo5NnbAGmXfMPGBjHHaxfqCcR6vAoqSHm3oD7CtnhRQ9dJmrUN22WbGEJqvzK9gnCgocw2bC",
  "key13": "63FFr6TfmLCk7eusv3eReLzVYRuUnoStvKEcZbbQG6bux6pxPjRqA7EeykCjqguQrADSmuaKydAvKe2vdwxAYUnv",
  "key14": "yRWPuh4gSV5S1W1k19B2faugzGj5iBZdHnjvRiRCgVQh4caGHLHXASqFad7WYcpPa5wrKaHJjRuYcyfALLsCugq",
  "key15": "4yWuqLxjfhCx36QjfmHyxYaPn1H9fYLpm8opmyoSsJ7SxtaygCwMWz4eKcWseYmGEbBWREmyFuxQUa5uXvV8F5T5",
  "key16": "5XJhy2LeUQonqBHLH1Q4ZHnP23MnoEDwdpV4atUTHG4cuCXAVF49LcmtQcwXf3crnJHENcmsRTDf97hfcRAMDwQB",
  "key17": "5CyVniSDkjyPbEd6eydbN4sb3TqfPZV4HEfDZTeA4shJHuQ5VTHRFNXWn14NW5YXeTJzHARreiAdph1jaZo9j4p3",
  "key18": "34UJQHmZBbAn46SvJECuWr23nZppdq6eSu9yQkCFVBD7JbR19ZSh9KotEZXTJvFy33QtVLeWxyLyGnPKNEuNPXP",
  "key19": "Eq5vh4aBG16EWAwJDp2UxWLbZyUTPZ8ug5ozbZQxko8XRCCTXTj5U2mEhJwJmGZMmx8viTBVUh4CrcWsuH6yJrR",
  "key20": "4uqkkPQVucX16hwoJTEqjnHrQjnnRANMiZSCLJA2B9nM8g8gBNqrEt7QFEtdwe4nrG6DANiAxD5RurmPwvjqDuu5",
  "key21": "4tweSLPb8CS38qaikdxzYWBE7HEyKMJetWJoCehrMN6MNBK5j1y15sUoXUjtPWSBdfTLFefZghkpkG3r9xejCL33",
  "key22": "4dFNF8uwg3mFu8WLYK5b6VhMYrZdZD4Vnz5XFb3wXx7jVUJDfQnCsDSja21TeZWS7YmKe3LwjtbBMCi4b9f4td6S",
  "key23": "64KYGbLucYDZVrUcEZ7T961eLWjRSXMQ7SUoBt5mxR2ri1ZeDBeQftrpSipQe1TyN4j6UUGCo5oi1xpdEseC93Ey",
  "key24": "2zUWTwjz6ndigbRdud7nksjAwFXHFChpHuNj8iQh637pGktojGpbqcZQKrjf6Sc2hQErHAB4rqFXqrgKJujLM9FT",
  "key25": "2EUx13WFVYMnp1hh8Dp5W1WwpfEoxhzPWUEUwM9EnScsvsXhWHMN2j6ib25A91MBsRYbXEzaY7t4yG4Hth3yn2wa",
  "key26": "2kUv3wVb6cCBCgQTJnVdz6LwNiSN27U6TndyWiXpTwD9qvh4SA9f55kDJoJq6iyGUXeCG4Dd4Pz3C5Kyeta9B7bz",
  "key27": "nbBV7EngKPtzdiFy23Z6KK4BtNy83nQddRGqaovPtgpJQca466bqxynoDhht9544s7MkfEsDRhDTwDQdPgpsQ3d",
  "key28": "2k5vzvdGkGAhJb67R86fm4FkKYgQJGX6SaX6YMjMHiPQWJFdEyK9nmTyvP599xEPU3vhpVktrqud4uSETQpYePK2",
  "key29": "5ojcb2i9Lz7VVLHq8H3CvAYpbSKFd82b96GVTraPozzgKcfHoDfgGj9CqZeA6WFo658cjGEsxigeFmcTbPQCwFca",
  "key30": "i882CyJH8DXuhK9BVK4EcgSBkZyWdi6RSjK8k9tpWfR6EeTzzR9QPi9m95QKmhQF66kJXh7JM6Lxbk3QMdFrx3C",
  "key31": "361UmP22Mhc9TCXvfnJprF1CDPeBEGUynUa7NTMtoDZcTk8TWgjqFFKS5ANQzhFk6ec5YL3UG7VAGps6U977VFXb",
  "key32": "ogEQNksU6d14HfEjgwycNmM4CqKgFcvM1xiFCJJAphdjZA3Udw5cMXUpEJ9BXZyrquDV8GsgonR7zzjtPyR1LXT",
  "key33": "5UKTN5MSikV65t3pEbAnFYeyYxzJyLKCAvzXwPuAgYscHPNzDJqGvUp82Pk4yFTuE4u2qzacmuVetvggb8fpKpvu",
  "key34": "28aoJPPiLB9wpMz9wDPPALTYkpCMLE4xLStDhBqRVrxT9qkXG6kKm4t3dGW5C76hXPFdUNgsvQM2rFNJWSWJacdN",
  "key35": "3VfftYyRcKZmaaia2j47dq41i8xgj39PHJzvKfP8UCy3CjFHzvfCqPFPWR9bfufQ4tAeKWoqLpfcZ5MhVRrF6hn7",
  "key36": "3GaoBejxHRwMA36svf8XVYxkixHRXw5ENSwxY19bya8gMHxLfvC1rf6TbeCGGaP5s46YRmouorGCPH2YC7kXjKfY"
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
