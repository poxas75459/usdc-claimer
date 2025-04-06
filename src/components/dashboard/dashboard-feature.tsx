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
    "5x4GpWYpuU2p7xK1pvL3f6jDpzos1bcv1mpsQE5EAF4RL32mR2GZBvcGjBK3uveKBgyRi7fboSgpzuWfBMeNrLXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJN9pT9sLHCg7Lsej3WkjLdFhBf1SfESN3sWZod22LeEBq2Ro7NR1StGJgZafMCaqTmDwAP6pv889T4dnzYiBWD",
  "key1": "2XecShjeiMeKKadBwtvzWgGKDieEPTc15b6oQb3b9csGjxhHGMAcepSRm8GKxk1ZGCWWbq6Fb3LTTexTyvEru5KH",
  "key2": "3N49YYy46NyDEH83RvMEb845MCiByfwtuAb1QhT5pFMmVw8hCYnQbiP2StbZPZCWzYuyPQo8HCEXqgi6iKdNp3Ze",
  "key3": "3USEkKbquGXuD54JRsbDWR8mAxsw4aUYj58y5YJwmoj6QjsJcaY2BaoUrS5DD55sWYymFfUeKH5WMLhPYkTd7Wy2",
  "key4": "2WYec12FRZRFVipcLKQMLm5FG8Mkai7itfLKcsntz3bNVaA2HGLvSxYxqxJZhm1G3VrCDMM9ZrPqAg2WikTMMcH4",
  "key5": "65VP5ejzELq5VRc7fLbFiEC6FdxoRaC5DRk4Q4N89V7N2VLz4rt4wPYULLfFvy8x2Peo3KVtCBbMYJ4FQcaNxiXL",
  "key6": "v28KSkG8a2SgfMSMAxt9KbkEcnsUb416ntacv9d3vysRhTrps8QpYWaNxKJqTHBTmkb7VThAysx6rrdkL616AAr",
  "key7": "3wgrCkwUpQJbp7EkuYvFEJCYNGy3jFFcx5LUf6xQkmhLZ3kE88CMD7HaYPyDu842auznNTnDorZwmNjzn8FP6NDm",
  "key8": "4MtTVw4f6Ntt4oFJgXNjGYUR9spUwDCKEV7W3ppYHxnZjeQN7SX7nYLHBRAEyBYoHMZDPWCecz2Ru4TSFd74wsnC",
  "key9": "pHMC22M78amY1VaaskGLSwctfdKsKuLsrb8oqfNReM8qBV66V4q2gKu5kdErW9Uq3Z2X5sFyqg45PUDNS8T8Zxs",
  "key10": "2xCKrgbPHFEsFYHVjKYd2Jg22o1pPRC7puy9gEacA2jHFJsfCdzm9CCaUske8Yd89Yba313LX6dt4x6Nf7rdszyE",
  "key11": "2RnRnkHRJDnBttxdSmBkdkmdmSFHKBse3sLAxjmbFt6xMyRSmXVZmFA57JGRLmGjbwKRGNM2WBsDk4JzvN4gDQ7c",
  "key12": "4VmYcGRCU68XZio36fZnq7akmxHwanwsR9VBVMLSmY1p9spr96AEUNrGodLxxzcKB3117MY883Ey1CitxtnLtvEk",
  "key13": "vbtfrLnRUouc2Y46ak2tWPDyE4PpMFwJ7Nv92BHo4zQpznhv8sf8s5t8CfGnZyCAgk3VdypaViqCA8oVpM36rUz",
  "key14": "2Csv5XJDi3jCdDiBn8SFiALnqqgBqTArNmqxQrWf3VfVZmqXDEv6SvGaN358Tjxa2mYtcYigTTBsC9TCDa4dnKwS",
  "key15": "2hwfE3p1ebQ1gwoAiSPHs1YCqPGrjQWEaZofmamH7sQK6cAqe9wx6gDZosXX6uGtGymEn3QLLGL6BQdXEsYZwL2g",
  "key16": "5eZ2VRfTx4LjNmRQANReAR8WgvbPSse1HRphbXQ5ahQKpsxahDYqTava58X29dMsFQ16mXqStnrXZFSdgXfS1d9v",
  "key17": "2vRXzZ8z9AEADQYfcEukgb8TNbkpSDoPjutPmQ8hmvL6rAYTci5ibobBUUELzkgrgDxCguqKMrAhdBgDTH5xvzMk",
  "key18": "5njRFhVKCLmMBXrNLJSPG61prSeAyjHZQg3iBmxBCSsNAnHY3CTc2dvsWzmCHQGstthy6wGJGeancETebP8r85Bd",
  "key19": "2Y6AVgyCxXbg33YjjbeSz6UvJST13CmMeVZaG3hFRjpCqekSJnSWXmZF314w7iq9WaXzhDzto8Qef4ejBTnk36Gm",
  "key20": "5Lnh4MLejxKszUjaQavBZumSsA9FfCEat1a3EyoXNx63FCaxQr6qj6niuUGxZUQhnxXHxc1A7jnGH1vXwbzqNvpD",
  "key21": "482oebdH7A9n26Q6TH7tf1PNMm8HWxYhh2vBe9mxrHwwCtAaJtLUjVUD61P8wEvL6pm2ZtAY5UyXT2t9x4baKwYP",
  "key22": "2GjYRoACQRqaWsbm2Bb9wFnPYcFUGhKkzK1KMjkV4iPyvLf1QGRzvg4sPWW8airow5PGW9zHXERUEEBKM2jDGQqE",
  "key23": "2AUzo5ZgwQpyDjdUCbLnP1J9rPA36EZzoQWtf7NSV9f1ZEJ5zmxF1onKxWBzNcm9WJjneMkFKrs6CPtWUaUdBt3h",
  "key24": "LzPsJATQrLQPkfZJG7WmNWPWkCfHLVuK1kiXvai14tKW641ofokCE7EkdBMEcHw8g4UwZ4AFeLpVoGuA1aJYaQX",
  "key25": "4YoySUZp12w56FAmK6SHFxqxFPQC1SGAKiz7iV9HSoGCkckNb63UGqWvoMAMAwxZwtDj7qNGJPNS1mcnmuXo4TXr",
  "key26": "2kMJnak3XQChcHqqB2fPD6fxfSvQhRqwpYBGg1o9JK9byttxjXgzcURkVrpTkXwRFAdxZeSYsBWGH6BJxMNNJoFh",
  "key27": "Zjtm5xp2PkVM8mTHdnjMeSPphFYxbAGokvsWKA82ySp8ekP1uCyDQgvU6vLsRfF27j1uR8x8DnktDPJn5msjtf4",
  "key28": "46vmt7YidPoeSy44bojQuhHHTMkGePmBwATotD4DvrqPs7kbzRfFqmHPwahqDPzCFXqcy5VE9VgCDKW3NzUK8qq1",
  "key29": "4oyP2m2Pc67MXhskPfQVAqxewbX3ZEMZNaTxZZRuBEpWPQqQSESKYbqyQiAiG44p33DSyXyAGdepi3cdZJ27EdMy",
  "key30": "4myMnWcdQwV6hvjgVGNM5rK3Eqtmn8ssD1Y9MP2dwdTfeDj7R8D8Xidyc8dvff6E52Ktt6BXBNG8a2bCBA5xtHRW",
  "key31": "3rBCgJNSkFbrkerdv89nt19XTfnq22ComAzKBntkpXzcTXQRj4T6QY5uUz55WtmTrANyJC5vhn92eyiEwvMrBLSP",
  "key32": "2LM6VtssT6aJVFxyJPNxPLLRzuUb6scU9dW15KNweheaPSvpig5hNvjriegH7rr8SKUyqDiPoYpy3t8kGvPozdzy",
  "key33": "3dFYPQQCyG3a19vd954YVEiZEcR9HofPJFPMZC4P3VPtFmA6DrsrTZ1PBjnfVn2kUMQaZdTaC4fjgansyLYWYJ2j",
  "key34": "ewsD8KSJfYRKR4NWGN7k9TfBAej6Xvi8Tum2bn9PzKLhgLRj9PdkxnEWxNt6G9zUhPTTbboSBfCJQ7778YkLo2J",
  "key35": "RgsEF58L1mpdHawifcdzmL2tNYASrt8GjXN5h5hKS24chcSymMMkFL21W2LmGmNyPcBLuB8dgtwkqLTxzWzbBES",
  "key36": "5krCVGqQaMQGGJtVKRUR3PR3tavJJAupFLxQnjNPWjNFUT3wh9kqzny8Rk43JFA4d32Ht3uLxFYKm7oXCbZvSQTR",
  "key37": "4SUA71D1DGE7wuWbYSdoNTMHLoTfG3YbcHDEzPu5baAx9j3BKECybdwBNfUmqaATpcQWqyh4MM7Lc24JhzDE5u2P",
  "key38": "54xTnszx7xCokiUX9aEFZLwdXwiLNspEHt7rCcpaP2FEysGSfb8Ydx9u3rTGrvFMArLHqYJkCyLqZg8vWAL4v4Ts"
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
