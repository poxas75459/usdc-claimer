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
    "3o5ZiPxZVLuiSyerYxL8tHhs1LKTRMSTM27KzRHBkBuzF5axWJZ6VbbTc1P89RLKjngweroWy1S1xTUSdqsZD6Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2XjzoQmsSNsEaywrTGAqv4U2uaLFzWtzzqhzgfr5ZH9u5dgtPU2kCjpMNYpV4TrzJiqWnHpYmR1sfRuWdWYTZi",
  "key1": "3adLys85wPT3sRPoptc5CPGZprNMD7V6wzvfAuVhB8oqt42TZqzAwtqFaUSSuyc1BnBQVrQzEjVZNZynedAEwnus",
  "key2": "2ksYnh11u58qsYeaMSeZda3Y7REcZ1uw53QHsYKyEzB7553DFZSaSyqVihC5wVJAD7tbbLheV8LFPTnjghoBuWVW",
  "key3": "3zYV814jc865gZ2jiK3vbkkUgWzyBLu1bWvawnqJdjY2FazEnAJMkBNny4g5V2SurrwWyT7JEvm8BAgFrrXsr1ie",
  "key4": "2gim64Pe5gpo8XHzDxDQRYNMw1ikj3BRsiWTfKTPg9sxe5HcXKLyZDLfiNvebZd88EG5Qffm9f5o2tj6uo1YKjp8",
  "key5": "2XCsJfs5PTyNCoMc6KbD2Bv6ENYRuwhQaPbTfvdFGfvQ2Q4ZS26NyueqtDXiwMsbf6XRFYie8aGLBjwssjiTnoLR",
  "key6": "4vRDVQrZTcZxgC7c3uRW6Lgd7jodLD6EKMs17GL4VDNycbVCXjBrvx5hfcsG5osDvE949H4y5EGZbrrc6qHP5mVK",
  "key7": "5u3DAsToEEraN3ggw74Ko4pU4aAFs2rCapLoKNiZrLRri7mT5e8irkxyx71GN2GBScgAEYq945d43msCvXGLJ6Wx",
  "key8": "4uN5e2DXB4TEEtS8mpUvtd7TPyiqHcHGTsGFvh5V8qLFo9DsFtTsTq7V3m5pxAvDuhZor2VmnvHrru5vGJywzaMf",
  "key9": "kz2fV3ypAxGF5ejmszLHUAiMiU4Vq8c3FHyb2z3t3Lu9h5DbpRn7d1minNWyLckAbaUPduYGyJbiM7PJj27EPmS",
  "key10": "394YpZgZfkKfHbpfu3QhR6133L9gEdx9cTiTEaNHuHhFDWvuLXBBcneXMMGo4kZPvnYywGRJL6GfMRVPbFprqH57",
  "key11": "2vpNW2Hz1vRAYyMWe2aBKEpd2En6o6DpXUTZ95GLnPAnmF59qCNRPapP1vEWoFvTXqwbPF4N2gQ5bW34iKvmbEGP",
  "key12": "3Sz17KSMnmkZm8iGFBb22hEUs72rASSLxyU7pt28YZMKwXEVEbZjwgsBVURqNNY248A8NathhuPxcfb9snMf1LU8",
  "key13": "t9FRtgTJtFjQxvtg4o8cvrRSSMLC4vVCnt8aqaoShg1ipQ5iaMfX2kSKDNZEb9QWQA9ccZxjCACE9wvEwPCAzA5",
  "key14": "5gmTG7sbKuj2iEd45DCzCGDKW4rNUqfx7NbAH7aKktK2o18dqFCVtQH9h6E1tTjYTRPvmx46HgxpdUtuMuoRSYEr",
  "key15": "EMZataVxo3qhFwKbefc4Y9YpLJiBFVKqKsQz5gEQLEf8uqnBkTWmNXu9r1Wx6CJeYmB8h4iC74WsmKJ8G6Gk13i",
  "key16": "3HRhjUwETHPrkBge6JiHyVeEttzb8bkf3Z92L62sFFay37WrRhWws3u6K4rqytW9XRnpBP3voJKDZXSPPGxU8utA",
  "key17": "33A5ZhUp7Zjr8p5Q1pCPyfTcmo2SSnC4kqDym6fUkJftpxViZpSq92GutHjwP7wV56nUqXVUKqpo5G9frDV2ZxkX",
  "key18": "PVG35UtRCzQ72MMkM62s87s42xHnx9EJBmtZ53muQsZamLZ4H5QWuYzPF8mWL2eqi2AHfrSXmnSPx1YM7VS4vDK",
  "key19": "xLS8MKva4LPcqkt2Nq7WaFsp2czCjAcW9sJSwZC9RvRmbX2kFvFDq1hkBTCBzNcAgGemXfznTxFmNjjpJ5ecrrB",
  "key20": "5FaDjhPMxmrmtepUAfQ7f5xiu1Pk4osWMyB8ZmgvsmBeWY5hZmzVby3DZKx4CdmRH8qVuDmbg4mQVbWhJQf8EEXp",
  "key21": "EPYzebZ1TwFiJCnjRND9B6Dy47nGmp4FdoYRPbLXVNAPCoqYGEVEC7fAi3GDzbZdJoVyrZ82koiD9vSTdapugms",
  "key22": "2RBHQhuhpqoAopbB4fBopHzzEmnPt6Q4hWgCGMbf8pA7oXXYGgWfzLr2RCqGYs24pqBWCX6HJeWFrjvXTVR6793r",
  "key23": "2pwGVsb9uocBVsBYwfeiYQQvC2C3rYDEQftnGyStLAnGZpi642AVwwPs2v9HWemmjc3iezESU8ogCqjQmcSizoEj",
  "key24": "2jhGqRPA9GY7F42R37iAgP8fWU75v3x6Hzqb7BPck1bd1g98uqmX4dzq58UaLgyQqgakvnRYxa8JNjApjCrj3PPH",
  "key25": "5QkFh46i1iLhKNpZxn8RsYKCGkBUevzLV6ZhRoszh7yYycLdEj1zF4MzxC6x1wTDxwjKZ3wYuwkQTgyDG9rhuNDX",
  "key26": "5LJYh3cRDS2g2KiVRJRaFfRpmugWbLCw692m1iE4DB6uhHbRdUNhrkFmM6Ab242MXHYr1H1uZrztqFXftSEqcLpM",
  "key27": "3Z55wzt4UMLwCaxYwFdPEoyGJWY3FcHWiAhjigQq4uHdtVqiHFU34JEjn8PJMF7T2Mw9awtjWrduVJDJzvDNM5EU",
  "key28": "hW5xfTbwUs2pBKAwdUDBASD79cdidwijWjRSJtSCdK9u7Le919vQmqfRGvGbJPUS6uwcRXLbRKA4GoBepFYD9oY",
  "key29": "4gowxyP5LBCGnabKxWc7FBdj475XueQb9CvRi6mNkJkqunJB5u9ZDWtT6Q6Fkz2dAd78KpRkdZrrigUxswrQgcpR",
  "key30": "fnVsYheVhQdY7c5jWQpSnJ2LGLjXzCkbVSLiDWdP71ZEKQfiC3xmbEzFmeWH5TJ7hyB7Sq1CcVcywHPYxyn9xhH",
  "key31": "67raP26XdFMksB2rvHduS69qj8v3x3nJxH4LqiqiRwEXwpsmuYyk6KeLcBwjAKhqX8D6tsmYDhx1fEp7P4LMEaJz",
  "key32": "3gDm2hxs7B9e2D7MU8rPGrK8koZH5zE85uZGi3j1xThsdAvr1sQTKo3gqXjAMfJYEaXu4oy6PbpkcchByvWk8uw4",
  "key33": "4L5Qke5ZecQ3bFNviYNNAw6wExKxLr9LHS1e3AD6VzjfHKFo4oqE7jCjF31iUqQ8mcTyqJynbXroRRk64wvcPVb1",
  "key34": "2ZQn4dTH9MFxgdFsxZ8VGmBzpPRBdZrC75Cv7W99ut17JHK1ua8J7YJ6DG5QKuyuSkrV28athVdVcHRczNVA19M4",
  "key35": "5PDA1PhydEFUVBdUNMp9KK2ko6yeG8RXHFyqCYD588ZNdKaw3CHnTdaZaiX4JcfxhDkDCy1NYb5a1nTArVodqtDZ",
  "key36": "pu77gy4ojcaHAR52QJ2hoHvqVheoJoQF5Dh3bqTMrWo2nTQH9E1bk4mtYdgsqe5kaRpNXxCk6Cn71hJGPjNU3rT",
  "key37": "4c24WWto54HScRUX2fNFUkEdwyTo43r7vJVZrGQvRpcNYhTJqykWzrhCxT6Cn9a4wshqqYTFDSMmcC3qbPYd9n7g",
  "key38": "2ELtj74KQxRy8XrMPtrGJBoTc3SspWgFdTjUgrTsZgANaENxwoYsLtYZmeeNFzrQHEQEPbZk8amF9JrUQpEb5wkX",
  "key39": "5oggeRP8kd5nCFfN5BQMijZxZRVXioAWDVD1m3mMxqQhsT7dHZhbJwKjHSRJArtyJ34NT3gSDNy6ANN5uzCJj8Wq",
  "key40": "5QXvw1YpVeRwSM9AjUGCxwy77VY1H3mDMiXT5jvQzQ9rtozEq9zbtXvzrpDynv4TPbYvFYCQzNM8rdXLEcgdkjUf",
  "key41": "4G7wNTaPJcWjyQtMChQGjZ2vknGC4g92Mp2VSzyjxpx1nBAQV9gbRZXBT7QJg4WbpaFEMRae6T7HF9rmzFnRG7vj",
  "key42": "5K8FyWSTGxTHKaaUouTheSazdoGnJmeVFvQd4CfYh9EXtjnBMeD9D7T1KkBsHjYGMBmynx4v3GeBbT1G2FTNoici",
  "key43": "4nGwFv7AiU5jcVCJQexGLLjA3twbM3r6uTJ1PZ9aewuuTztM95rN2S4xWZADM18SBM3CPpBWjy14yLiWdaBxaW9X"
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
