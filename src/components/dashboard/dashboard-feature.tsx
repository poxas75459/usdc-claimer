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
    "2FZEsg73Kmf21tegb92rWgcJ1B6VXmD6qaiJEiDZJXKZ5HK3Yd11eY6MdgnJ3SmS3HuyPBLr413gRzXUx8Y7ZvWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VpQNLAm7eKVbRxvAmaAky2JYx9gguhXjQsHJ4csyYphcGdASZ7u9Jta5HC8Sik8hgXH3ecg3yuWxXuPSdLu4BVR",
  "key1": "2a4pedaGqUEygzNschpt6yytvsDX4MLhLupZXsP7SK7TLXYERsasLb9kcCWar7UoMgaZWTpwjytWKLkwAhxjGxoD",
  "key2": "5DzKbbnuNvbZgT4ocjz2RFe3pKUfVESbK2dzHvbHUawEBEjPL4kXUBgidG45f172mWqcQXdgSCks9u1U1PN9jRgz",
  "key3": "4yh5ALm9qq1jgHB8bVzesft6rwgBN8svCKiotb9XvCbNobxjUyBqhnf3TYUX5uP2KEwHrTTgkGLhx2LYCQKc3PES",
  "key4": "3RGxFk13ZFoAgyzwnxtG36sQXYa7cCfDbwKTaAnddHLLhReUy8xwmE7GLZqrEjYSTcxJvxqbxCyEYMwfU3MUcocr",
  "key5": "4ey7NVDZ65HkQwdEn47Rqm9RVqbm8QEbyYepwLffNt3XNxrM9X4njRn8bBLHDNyHKHgGDjbBbHhCgg72vB4NMybZ",
  "key6": "sMWC1U1HNbaE5p2uMp2c5WuKuZy6zuMBLupz2gkf742yDwk5yQw5iM5zAZtTyo5NYsrynKBAm9aZ74X3vgFJ25m",
  "key7": "RuFDMZTDhvsjv5e1MnGZv11jecHAvAAeVJSL4rEEQDaSdFquyzm5k8ac83PaB6QreCcwZvTdEG7aruNN9f6jZsP",
  "key8": "MfpYe7PZAGptpbPSseBo2g8PtVggX78bgtzr8dkYMebQdcpnhAWNPFumAdNqAKBaVqVgn95LkCYVA5gkmpJamNj",
  "key9": "2CNeNDAR4ScxqVoPrziZeoQGecYhn3jWRBQkeZpYNeMa84oxJAT4AnNkH9XDfMzXBjcigqRhnocmEtCbCGkCqwZq",
  "key10": "2UtjgJkgDDpuLcjuXM5qJJnmnGukRQp9piC2RqES8LEqZNzA74xp2FjBQS5gya2wDZzjRWe5BFjGK3S488MKRCSh",
  "key11": "5bTSHCZVyuPemfrr34KK8UCuyGeXNriXX8bg8KQ214hbTKmf6pnqKBt8WH1ePaTGc1wRwhVQqk3LozQCPG4oT87n",
  "key12": "2Wj9pvbEo1TRXCh83v3ZDaJTxxecR57MNh8K8CxRB4KFvDXY795t7M61oDZ6f1P4saBtqQC6PvAUEkyHQdgVpGh8",
  "key13": "2xFEhAkhdzWdVVi5zr8Tvwo3Y296z3cLyc2t5a3sdEtEM7oZrrN9ZPigZuiPcahsnc9f18Hn2hptLqtgnZHf3VGD",
  "key14": "4aqZfmSyJpinnZ1nXHSjpbeGLp21dCJ32yx5Vg4VUFadZ8d9r21XxuFLzehPCnNRm5jW17fwaTcRoErU6GWrsdTF",
  "key15": "4qrKCatxDRcFNvJmGSVXu4soN1Rn5KiE21FS45VwHZh6Z4eUM7GbCvh8zUY6M67ZbRHbSU5s4h9f9s55uwHgTnEE",
  "key16": "66yWEnCRkpQEP331dHp5SMbe8GWWLWcGq1tXgmKB1MnaC3iARTj7oaEBvzYMvTCG6LfgfUfLD1tn941Z6wFdSLqe",
  "key17": "43kVzMuA8jWko8bw95R172NDEnuXFb1nvZ2JmeNSz3zkEqNFDz2G3nJzvgcePQWoRhczqsxAwGxgF3YT4xabPtG5",
  "key18": "4wxR4YgX7EYb7aHLHF5aS1LuFroCMyruu67dmLCrSSeAdpYKLT4p4NsAqpZmDepPqeSXXaM2rHQNUDDP2amGnbTN",
  "key19": "5S1q5Bjkt98L3uPonu9mGKpmjCZvR4XpMtZsGTFhvQBcFgQ3MtcifGAtBXZLZ8jmyBU5ahL6n2q4qVnqa8nj2Dea",
  "key20": "2NZfaboNCSRhPg4jCCwhvFNEumoYCo6pSfaRji5f7hxaDnQcYLABrQVM1Wixi5JEik9mvbC63LjCorxgpPJuBPmX",
  "key21": "4BWxJWcvX7ZTMRHuqF5tBy9wZBSLJTRZBiTp5Qknf2e1aXHvMAd1S7Vvfn9CHdYqKn8hV8G7hS25BFiBG1LR96Fq",
  "key22": "2EmabUP56CvyEE1sb8s2xdPnUph1qz3mYBXuCjVFX7w9GvGEVMjY577k6VDE958BHu6NZeovQAkbPojqXZ6gHxVd",
  "key23": "5KGK83YCk14fVjgbchG6q7fDBEeWoNTAHska9qVXpB8FYn926cX7qhipYrhBEnVGiGSR3kpyaDhB59eApXB83cY7",
  "key24": "wSCnomvbKadVX64N5btyNP1jt3p4u51zGtHC3JejuGdM3N5DVJgjBFqT7jMY5NCzRapQXgicgTkTUEVA7fE4mQi",
  "key25": "2XcqwdvEsxMTKeXJn94mg7v8F1NKECs9rW6sa4aptSumi3a5z7LHjCrWzNGw1bDaLSTDFY3FeXhj7LztpQeE6roZ",
  "key26": "2GokCVeRemRyye1Fbx9KuCyPKGxXmwCkPxcRJ5XZAWxGtKd29M2apP5TdjzpvQ9mQ5ct8GumBDTVvQJ2fWkuGvK1",
  "key27": "4FXvFwMCTrz1Vq5gnxbksD4pP6gZTx1PL786BEvMLHsHce26anAgs1K22aToSCM67vVrenvb4ehzebQEaJM6B4fd",
  "key28": "5A5qdZ2ZENLfzN4q9MCgUySWmWmXypwJHrHDnJv3bZWnRdGt14KfWViwhJiWBUxJLUtbtXffq3rBH3vxz5A5Ui3Z",
  "key29": "52dpaHTmNP2uRLi37rMifQDM4bxBLb2cKchqjHvvBEmsMGhisUeL28b8BBGj98Bw3NWBDb9QQKy7efv2VNHP8xUu",
  "key30": "586j4BJ8XYfcNJnZ2TZdkevT8bYMWAmhvk2mkowS52AmpYeSg9xJkx57AJqWeUeXxU8YL7DbTvU4uDADcDnuGhVX",
  "key31": "3Bk7jQSoJaJq2CQWPj1nqi16maYCVTXuBwyAcc3gVcyyrXceW5aDNa3iCLFYLDzGhzHzVQ3NbJZRnd25VsvukWX7",
  "key32": "31iFHCNfB7yReeKTWdkmA9J1NRBdpPm6cLCWib8FbMEpuvSF6SUr9rESEkAp1KGidEijeudHXiybeN8frecnDJq2",
  "key33": "3zG648raSJ3pXCFf9geJjzmQg8DPaKb9qh4cY3yU9wnLKWosqh7jxrMGMTEybqAwGD9wksvQXPnEryinawwFfe1e"
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
