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
    "3pckZSAUczY7ftS3TpAq48BN4tMXrE52hXqevWZHNGdp5NnkSGaL1Xo2RQhNdc44nCKhb6ucwgXirHxG1BTsXjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEiqZ1bJhLeXcyRZvBpCNsRuh3KTPYnVZdRzB9RGYnT6Gq4mtPEGSuomfC5527fEg8XR7kJQmET4rA3Ws68FNJE",
  "key1": "57GvEx1rqawXMuqFrpKGW1qYwbwbBqjKLr4TmyfavrCeZT3W2DkSBFLRxMB1Yiro6yBaKubNeL7b7pTybB32EEkQ",
  "key2": "3MotT82sDogMfvacbo4gessXsJFtSJTDbwat9Y7uNeWRBvfFWRDreDMUKi1L5yxMSVi6HPao9WkTHGvujbvt9gfz",
  "key3": "4WwdYkn9iqmi4YYe24NBgeCVn4LhS6J58jQZjcoZJxkzQTxw2e1k8URU2XVaaurTyXx5qB6XupPsnZSqqzr27Ucn",
  "key4": "vbFfYG1N5ctp8RPe7gLjQKzxroeP8b1oU2xowuxSeKJ7Fevfqmch9phz4WQAoYH2d4BJH3DgQrP74EBtHwyVrVd",
  "key5": "54hT2XWTFZ7yvcQ7qCnc98QeS1pKfdqVgt8XtKEDnTs4xJRHkrHUPJ6xSQD4Ai3xmQDEVtggnkCQH6ZWcAgVjchq",
  "key6": "yxK7KZYtD2t1PDxkcgGr9SPLMUYiJQZ5PPSiUnmaNrrYVoBoB7xBF4RNZykqi18yQ4Gf7o87MYBWWL5qh5GUo1k",
  "key7": "5ExpRnSwGd1PD4FnYbK8z6nSfbYYCC99u393JFVVEWYz8nmTKANczED5sQqZSVEDB5vRqvt5aMLVQ6H9LxNNUpys",
  "key8": "5CH9eBUg3AE5dEFLSHzZLLC2wfDGRcocLfR52486tksJEPsHyHhTsRBmN6w4t2oDJVCs8TidJvikJwcHTKDVsTQh",
  "key9": "3LduEkHQiMPX3bh1NLvMxzRk53whc7DVvWaNCYBviD1KZoLvNo59QKn7FtCqpvgZCkcE5DrohzV9w4rjir2rHnJV",
  "key10": "4EiYrrbrQaP2KEe3idx7sHFitnzzmwqpAu5bHpdVpMWaQoUgNkbonBFVJFxGfhDaX6RY7G8y6F1J3vmEXAHQ4x9a",
  "key11": "48f1R4Wig64GyBaifwRJ3kvYGSWyGkxSNRW8p77BayN1h1WKe2Fskh3D5WUPQ9dEBfLNSFkYhV7KAKprGfTpG2Tp",
  "key12": "SpHxa2xMLtKVMqXU9q5WYFwxGJwgFgajMzRo3cvR9bFcw8rWcbf3TKG1QJ2DhpYkwqaegj3W5ZEUTibFnLVe6eT",
  "key13": "3zBc7xySMzp7uTkF2kkE3qPzR6w9J3FQdDMuYUFkPH6H1MAwJP78vxw373LfUJjf1HFxMrzY6X5TTiNcJLE9X4PE",
  "key14": "LVMC15QRhj7wxiFWMvK28wQjVUFEz8A3D29HzboGqHZNb2TAGdZqCKBJUCAWJEM1JtEnmXUU2FXQ9uwWpTns98N",
  "key15": "4TWShsHQ1grSJsxzKejmVASVHxLbxV7z26rrHTMPRdUrU5Dawv9TYwq11MdiChWZPk5HAWmXGeSAZHXcsqPQNCK7",
  "key16": "2kizXaMm52Ss4QX2GfUkrzUcDPwqHxXXhecuFNmoLLNYrT6nUDPpr6dhadVWVD1bMbfUgpZF9cnMvgz2qSgmTHbk",
  "key17": "3tshr3dMgchyXjk2diZhnGB9tdK1v7eE981mVhxWiv1cFUMjUxHTkhycWuSqDVCgkLd8sxbeDWbFHnf25sGUTcjP",
  "key18": "3hvoEXRabunUcyb5TBctKrNp4Vu7tNETWEGGuqbX66xXPLQ3m22ix3y8kR4aL1Uxh3b1BgfzV4WTGve4MJvevHDs",
  "key19": "oHPK2uCxTPRWmjXSdWJKSzbEJyhWYYqKnq2tQAacDgc5b8tXtB5eGT7bP6D7byNNsKNrujaV5B9EzeAC8amAQC7",
  "key20": "24KJJe7trCbaKiGSUheZQy5wK3Zejk4VSznDveA7xTER5AUQPJQRm6MDjXvSMpJcpNcJacCsb7LeJNwZYy7hmKrM",
  "key21": "4uDcJJ6jgmaHFdbbyTRPdGs2UAXK1a35zKEy9poyZk6UaJKwYTyUdkU5qCbiVs6SnioauGthgvRfmCuhYEr8K1j9",
  "key22": "3JqEE92wTFUmi4Mom8DRQPMenhEgJNCeaftod4HtkqjCxGJLTw6zMqN1zHJUjDdFfLpgmuYB4LPEKGfUKCFZgUt5",
  "key23": "4TD7JKFe798e5zCaBAG4w1UWHG9WUMWHkBUF6qNnaxRBtkfs1ngg99LM5RfPXzKju6D4T4LPZk8vdB1W5ddUXEXR",
  "key24": "3oJGAcu6gNAVFXgfayjR6BREsam6bciEqKKn6VAZmE4qZnPyYgmaES6GbCzmaZ5spF1N2UoVV1xmcBLAJ2z1eQgL",
  "key25": "5gf9481BBdF4vbBHs1f1Sc6CjNiLRXerJtKzWpDkQUS8gm3KAiJsJWnfN5BkEjAETRrykRYA4vPFTFzPreriWvRc",
  "key26": "4ouePiacbgWZRXuYEyQoFc6M8SoADaygy1sd1emwQLvA9zbGCCHv2zdUaMDQQ99E8wpjgPVcNjHGoAcKUsHNzRtG",
  "key27": "4tHeuQWYjiBpxRs9yAQmTaE87LmquQQBWUQJyqVFxT919fNt2CYZN7ppmvNBVxqYuH5gocPcR4p7jRSgGFnYyT3D",
  "key28": "gqbRzTypjUkwcy3Ug3JfYbMhNsoPqAJt9XMnzKqtTWViF58ktXMggKG4PWFsBtGzCD9LHpwEiPNRm7bfNfvS9Yp",
  "key29": "2bcAiR4oRqn67sKEREqunJxcE3yCZSkz5nAKkjrebLMFF35zPRjvJB4vbUyTESYKwiUftYVatsemswAtmXcRzHUV",
  "key30": "3HJiVAC2ioZ2TZv8zgjQtUBrhH9wgZS2yM9oW266eSRHWbiN9rX7Hpxvp2aUXsrfZK97QdonjK67j7g6Y6u2ZYos",
  "key31": "3CwfRBwZfqh6iGZJNKPV1LCVvRSRQ9kq9pEEEw3hdokPZDW1JD16At3tcav7SmVCFXmprGheJb5Hm97Cigbkyjr9",
  "key32": "hnC2LK4Q4iE7zR6mV7Hq6GS6h5ub7p4eSc2TLEyB4RSXqEH3XvDWAmsU5vkiMovBdEDga2Dmug5bstPT9vobz1o",
  "key33": "5aex9ndRTPgVEudSY2Gm8kgoBYSnCdywrKPfEcm6AXt8u8BqHwh6kmvXs24VrXvgAGT7gwvsBJUbcxorNHitYhk1",
  "key34": "2kk7GfLGo61GmvVVt241hqDekfxF7LKafQ3DQJmvX2qfv42rT11Mfa7Wb2C7VX8vdwmWfm7EUxAEgwtSvmHrMJxE"
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
