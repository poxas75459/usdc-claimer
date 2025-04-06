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
    "24kNs9Djj7ivdC6aVyf4KUgtF3VcMaxdnhdhWCx2XRFpNcy1tnRyo5Z9Km8LkWy35Mn9wVEPE12G6bYrtBkHay6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FueWu8QNi5aM2HME9kLitvytN3gwUCN7FTc6ZD1B3ph7joesWHqekG6HCDXFRim7FTcqjYQTwPyx1rJgtQyNSui",
  "key1": "EDPYEZ6EMRZgQ6tsAiZjhmLLKiiqEsWnVadmJQdYkEuAPpT1SdJhHSJvnbgSybSXwrqxYMgYgNXArAwVVmDCnz1",
  "key2": "5HqJDcQTd7PFQkn5s2DonoggzWiojvFKxFeRj1dfnLFJXSWV3dqJz9rUsbsZmoUKmiZeLn6rcRTVgiSAUmPfvKHh",
  "key3": "3iK4Ru88W7dRqyrHEZFHMV3aTBPPJQaqNYAFsKUR8Gp4zQy7K5GVTvZcLX2PnpXGVfSThCG2oty281sKpCp1TJsB",
  "key4": "2U87TCsa6YaHMQoh9VUXAo6VmHD7UzyKQ4zUgMmapg22tPup1ncWKguRyvwgmwTyWHtWiuJSYKYkbNEhqwo7KDfz",
  "key5": "4XTf9KJSNDkqxLta8Zqe1JaXVV6Rx6KL2rxddHTkjpUnSSgWb4N5zdoghpqb3VjMLEHBczFAWfUDugogaof41L6B",
  "key6": "5AAe3rRTp4AvA8W89F4HPb59BosEn4asCAYu7pCwJDb2WbhzFwwgzTBroXKngpuVCm7gfN6kmv2iZxCxHwa15sJM",
  "key7": "3e31TNsvh1n1xHb16VmbGqbwdXP2L1M4FRSA2oGWaVaNRjdai3AEVMMHCz4mCKXXeKhiyntYPgvtHRgpahAAdrqP",
  "key8": "bB9LugCktSdvwB6YBJJqvjPQQRDxLQGXJbLoMetsvybYzQXUQB4RmA6qRrQPVbQLAfQWdJkZRsyLEa3qy1fgPT6",
  "key9": "4x6nYB1KdxdhBAFeYf5RjvBzkuus6aRuxWtMJyQFxo9Vu2DHGBELFh9YsWSvdPZUVH1Ea6UckFfK67FZdtbAjLYv",
  "key10": "4Q2MPJLC55yyTp9GBBHH6mteLKJtcGEqjrjeLBdp7BUm8CF2xZop8Yvjeuxz9VJoeECQ7JxWSexGWbbXfft6o9oK",
  "key11": "5W7k4ppWPjiDG7abWgz7ktJk3EVfMJL6gsDv4bYhjkRpRApzafgk8FmGFEDGnfxU5Ceay1eTV5vrhA8oojghAoav",
  "key12": "3j2vQkRd8NjFjXzNpA2SduSTBDAt8xY11NrhtSXqYswg6aoi73aicEd1m81uV9LMXraSG6Nq5cbfXnxqW35wuQgJ",
  "key13": "DyXoCGqQkr7YweVLWE2kbFwzZ1JAgveoq54ULyGUvBdy6opqYEFGwp12yWjuTvQR3QDa6yR4K2TeWrFGzx3EuCi",
  "key14": "5mioWuCzGY6LgMPovSetRFXHN5n6DKu9DnY5qki7wXV5b5yjsA1mwvShQr2gTMNbaHGKTAeBxCBiQnYD4p8kBnXs",
  "key15": "mh4zGP3hzeWWjBPxfG3qHB9eZz7EvdvAqyXSz9JsV1GNZmtYecTMdAGAsB8vibpiEw8pNWNpaUVkQcJtS2ARyqb",
  "key16": "493jY9e6nsRovi71tuvnbNkhz4EEXcMyunNME4RH27ZMPr2A1kJeSCqyMyuwumx9XKzgEMK5V9HFog4HBeE37cts",
  "key17": "3fhYsL1r75mLcnf5B2gvrRwe8bqLkEWRAfyBpyDVZTeRyLjmfGAfFrsMprzihpQn6wcyZcQhEefrnoPf3ehgEvyG",
  "key18": "E8yefvvUXrMie66HJMFJ1yhBkBiCePT9QXQG5SqP86aSAecMGj2BsdbTpWQLSzHkQPm2Vzj5rwYzsQ6vRmubZxC",
  "key19": "4yGQxdnkuVGmpSn9WVZnDBsRb7dR6jiPyVoXssN7MBwoXBzchgnbvzgGPPty7e8Yz5K6khb8oqk2wKr5kyDJfpPM",
  "key20": "4RnanVTvoJe5wSnBHsvNDwMFe4KmHqYYBM51jnZRg93TA9KJSwdCdmNpM8rRKLeMi5DmRk7rmGA9fvot5iFutwxs",
  "key21": "2AdaQtVrVu5muQMXdzeUwqJyt6PdBnjeJ6kizAxjyCTcm3nJN3hi5qfrUacsjGAq5fX9fETrwk3CVvy7gG45XjbT",
  "key22": "JxSwJxFpYQHUttbt5H4XjWfHEo3GENrMcRkkXJP6B1xCCFijw9aCyJn4uoS2Muc3LHTW3NCfpF3gZXJhhSuPeDx",
  "key23": "ucKcAvMtLG5xacYyHCwx2cosajR5zbvZNvCqvqfg8cXTVeAQeujAL1MbW3Q6xqD2VmYd1R68zk27yWkKHihJ9wS",
  "key24": "xU5EnpHCWQmySauwAgrYsm778UoJgk4j4aHfk5kfhWRVDqvwySKQt28J3k36Wm8tYxqTYXzPKYorPcMGzDmVdUd",
  "key25": "53wLfRVGkdrX7vCGVcKaz6TF3ESGdD99rXgtvWpXwxw6VU3KB6hzT1UzVL9CnCNPYmTqFd7CnHzLwGdguTx993ob",
  "key26": "3AYGQbKvMw5dE7XwxKV8u4vwWjHEuynvFKrYmsu6Ud5BKWxjrDxMSThzeC7isq8p5QegJq8p9DdswF79SeKucwzo",
  "key27": "5r9fFFUMViQra7vDLpL3fEt9vpiTvPyf3pJ1yys2fTZrBDjGRXfZgmbKvQBYYZG3vVDFRgb3mvA9kCojwYucQsuG",
  "key28": "3pvEXUnjH8rQdWFWvkqcCGzoeVxLknCoVDUGSTuN4PdECnJEwMu4CDSE7XTZSFtDaQzXo6jb9uNSD2Xk57QPjWrx",
  "key29": "4z73NHVF2p57eDxv7ZC13dy6ZpvMnZFVL3CeP3bRyJ5BgatyYue8javU4bZVEJS6nyxpEWJbrEtbqCzxexP3YjRK",
  "key30": "LMzWD9DFrDdRysZutY5d9xFr6vrG8taQ4Fn81vWqbJrgvdXEQSSW8L6oXQMTMGDhFGpvhTdPmPSL4HBheBeU6Fd",
  "key31": "5xDZPen9UjUpJTLqxhbfMrmWQb6H59bNWrpRuu7WNV3E4gh6qME8g1yG85nYAXS9Xeg6jWDmuc9WnsCdYSr7onSt",
  "key32": "2bam2vSEzPktGXgMupFGtestMBQJP23tYx78j1MdnpcApZT1wHHmyUVm5ojZpLhXxb9EsR89ZHbaCX3udcENxmyQ",
  "key33": "45pbJRmd1ExzvMMQ8wpF5aPhkCLWxaAEXcqrTmDiY2pLPyLWwqQt1BYUgxEqFZRXQyp54jPvyMZTBYQCVv2YRe2H",
  "key34": "FEZTmEJ5Aqi8SDas9ewyxs5JoJDfcz8i7o9iQ7qntu3TMEtajzBy6H1e1JwSJzVzAVWKKhvLHW9FRymYgC3mAWd",
  "key35": "P3kLvneHPA4RzGBk8SfyXLWi2vih2AZtvxfbu8av5W74Tj18MnXyzgHJXJ8ZMsERVD6UqmR1HgY8i31JpmRRyHm",
  "key36": "3CiBxHQWgAfw3gd3hGShXQ9oZuKCf4bPVjrz6E9vhoEAVYdJm1xgPF55vm48w1B7GszytowHub9EUsTHhFSXA3Dw",
  "key37": "1eFoWkRq1u1saTcvo3SFjw7FHsL7uw7DUaboCzzFp3hLtoLo5FR3bNfbtxjTcwWa6YnyvtB6biJq8EEpJpVkY6Z",
  "key38": "2y55GGeM9RWCpTjtSWowKNffDopiQ1cKeefhmFj39quj5xEYf8MNWTh6YEEupnAdWxBCQdFyKJKRQaZMCJiatr1H",
  "key39": "31uakVCKPkE2cLuwDm55BipuVKyS5f3z7PYto2F7dkGdPue4sH4tQpvK8Ce3CWyAP3qjt9P4avU61fgFFqJ4Bssh",
  "key40": "4TSrvAiLuBQuhNxuHzBMgFJF18Z8Zs8LUDvtSRXwshgK2PxZX5baTFj2L6uh5bpVYqevzq757uhSRY88tPSG3W6i"
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
