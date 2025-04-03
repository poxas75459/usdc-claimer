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
    "3MyEjrPgTGeBj9aBWBCxETb5wMpa8ysUgKmfmRyeHAdjiVU6KuapTcHivNeudpdiydf7mNHPHH9xxAirvSUD6njo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xnDWpoLJaW6C52Fft5hTYmAyHhcM45Q1ZdFPiXasLhS4pMPwfsnnQPe3aoMKaWRHrhVFytg8UQAkg3QLPamioZ",
  "key1": "3FNMhaara8LacvwgBaSAqJiEc84FH4LoxNkJVnbDXYm1CS1JqYDGKbMg7ahdEV4moaZUQTX7tKNYkgqMK3goaeuF",
  "key2": "5gUG137Mdu16bnfuJfKXEPQpQ6UyRjs9kF5q6eavi9PnEyBSJ1z1DP2fshkmrr7aqMHCdjcHnY8venAq8mZzmtHe",
  "key3": "63hZccqH6Zg5xLLPYwjK9evr7wezkxgic9WQkjY8Ap4JiDJcvacAxdL6zZ9N1aCETzEfgvLhm4wWDKL4uyLS2Z7k",
  "key4": "537pmQCSHyHFtwWWFFBCir4oAaDQN2fR3zEy6Ai5oe8scosuQFQaaKmY7f9ok6B2sSaUhgs4rRmYsQ9EMdwzQh93",
  "key5": "WMUhquepTUiho1crdkhkiEXzgNrBF8ch9NYN7XTymdbdwFVNgpX9RHUuiaMKZw1KwQGnY8iDg2LTxuWswsrjS9G",
  "key6": "4jm9Vjz6QY1d7F7wxVvzMeSFiGtCtixnFv9fRJJswfT5kAyUtnQFAi9yLFRP4Uo5m7n6grHTjLomhtB458wxJ8Cj",
  "key7": "2GRJN4c29arAgaH3jVZmXsgKwgj5EyttBPqChMjELTMQ7vkTCc4bSczBGNKMyDEzMzbddrzEAPTSQT9DT3Y3QmAu",
  "key8": "ttdJrwkote8grK9ypvS5RvuuA9pMqniG39yUJKM3CyPrAXivMByTxPkKcaUTzV7xJHAtMW4j733A7VPpLoLdEzE",
  "key9": "3tEqKeBRYvncdHwK18bAHjAfkhxtXVBzukfyNr9N9cAF4boBm4pTTBhUrEVePREk3HWwMebLuCYThpEPFZk3h5tV",
  "key10": "977EzSY8oxC54iJSf2jfF16CAFX2xtiYAhqAPp1kqeRkDNQ9bdmacAcUVgNJ7C3KGUvnQjJrycjmaTcu9XQtFee",
  "key11": "3c5Rjs2tayx3jeuzp2pvd35watzgXv3iv9JWUaDuX2xki3kj1Lt5RQhshd6DJJKnWahQJkJEApiLEyZaoZPQgR68",
  "key12": "Za4u3WFP1VYU8DfZWiv4V7tXudoV4odgqD727f4E8gnANum2ozE554NauU9ttwDtzXCGKVHa65jL8oBNjiFNURw",
  "key13": "41U6ZTAqABSDuvsr5jTeBqU5jo3XLWMD7tvyKZeMU1MkmQukwUC3YfvodzVUezj2uXv7QSUq1JqYGPLTkn3W26VK",
  "key14": "f5MrEh9WHQMiSCR5GjbRMwayEGfNvJQYNcXGsYpi2RdVDrhWJw8e3QbBBzUJBU59nGjXufrKKo9FicAva6Uq7nQ",
  "key15": "3MV3S92D4h2zCgjUq1XfBFoDCh9yf7e1n1Vu5snwwTXZ9knpeoRAuHXsNcZe93XCr7oBkPbeKaF6zTC29VUi9M3c",
  "key16": "nDvgSQFpTZsb5eFFS6RzjoXDkb7TQV4x5A86zdT5oeXAhtzbtrL8g1Uw4C2sdP3PdZDdRpKobQQJMtwhR7pCLvT",
  "key17": "5D6h2Xw4sdUMxrf6VF6R2tGcXnMcfQRPxcq3ugx6UjawKXkNMxy9iQBehy6sQCu8Us9QT2S5SB82h6crrnnBmTsu",
  "key18": "gJNH4QqioauBZeLQQcxKiruCmky4vcAF7e8V8HwqKHPvdtPGpyLmgrvGaGyoX21V7u6jCvZ5YirfTitV95cCxbV",
  "key19": "3w5goGEyHgeRC17R3dyoWkrkfmDHoDswyXWyDNRPCq9fYxVVRg15mfpArzqNUTRjLkMW2yhj5739CckUWtc291rk",
  "key20": "5cesrdTePHYFzVbH6aTAs8ejrc8C5xNRZkSZbfi85jEU1TgcFfTYrT5XK1pDjPEGEbDYXBw3sGx9Lkihbdjj648k",
  "key21": "5oR3H7iRNvhMAoWGVkP1XtPeAykiyw6BTKFDSsZ5fMrfAWMELwTurmRNUqo82eozCWjhVfCqg4ntPMtzarPh8975",
  "key22": "61gwtCUU8AcpBMoazojuJHmByaFm3VZ8qrNPNCsZiPua1kZi5MW2oZUvx8emueLVmHT2NPfLXACdPZVhLJg754o9",
  "key23": "3PdtsZcbMaKwR4jqop4A5tHuPe9q2GUs4UEKAnFQ1mzEJQeQQMJU9xY3aJhHXuPN1b6jf7iAVCn7JMf8dNuhMXG4",
  "key24": "4X5NC5cCDVpC5exTLEEo3NkEBG1AsvmPF2CHjXhNNopJaz7SbQnh3WxVVMV9CFRG5ziaKBTnsJXJZSySJ4UQ1FWN",
  "key25": "5PGFv5gRNxqsy3CnLQD6GXqAZdKmYMYRphoE4B6nPFnbczrDbYrK215bmDX7cH44Vms58gtZgN4krmviT2ShDHBN",
  "key26": "62qm8P6FbwyN7y7opY1KpZHpBDbGd98VNfW6RKVxm45RMcjb4FKqymMid3gEqKKp2ZHVaTppnZpfUJdSM923LcrZ",
  "key27": "2pjVcSNu6BBZMFEdhs3HzfxarkTm1VuDTBKfuDsSKD7fsvQ38YvZDAxhrz5KXKJD4M2nTCsfv1U7TE6mNxcxBHe8",
  "key28": "q1r4BWnCppomuPL8CMGhBRwwPMiR34qZhVyYJDXNVgtzEHTbekKHCSsrLykZTNw9yEHnavrtCqx7t452XLR6Urs",
  "key29": "3TKijWff3pzaUF7BsbdDcB2BPxsPZp6Ud1SmxUVLwjwZq3BCunbqfxBKp3g2f6sXNfBvq2zpfPwhUC7Ef2yUgMiN",
  "key30": "3tjcNyV3SjikuFa514jrrN3bDXEGRSERBXP1WdU8nQCcjRnTQRVndn6N96P5h8nZhQcCQUHPkuDVPtXurXAwKyF9",
  "key31": "54xxe2NaCMWL8akRzhsnPALZG6p4WuuwweUTVUHcZ2apkkdHJnYEkxDrZ7Mzz4Cer4W1V1hKEpixDKuEmXBysPNx",
  "key32": "WUYVfmS3Nnz4HCg8gpzpA3uNLThDerxzW8FdH4wQravWGQZGHq49wWY3yarpRqis7sN2sMzwvVAAypovkEkfLdg",
  "key33": "2YUsa2ZH1Nj5XLokisweiVCFSzx8emYCy9fRhMmAP39MmksKDvvLnTau5QLzFGGYLJ9EJpHJJMGjiPvAYBC73psn",
  "key34": "2EqNDJwwZdVALQfqciYSLYG5gsu7XHZdB5aj9G8LQx5DKqojfjpMtv28KXqWH5gPEXkvwQyThS66Ak8jZrZnz3oK",
  "key35": "3zqPEtc1zcXbRbW2AbxVyhJufkoHWPMzaqexDKuyz4fwcGsWUbaaJjxGbTgFFdtBXTKr2hpn3T3x4AuGG8UPj46c",
  "key36": "4Hi54aB2X7MAx6sZVxFCwJvo2RarYeRsdpHMjVTZG2bVLZ2pszdi1JAsdUE31RcShX2aPhc2ajk7fk2t75UgkpxG",
  "key37": "4Esa7y63hzpBdAbiZz3nJaQtezX721s16GLbdFqvnZpnnjBrKFeGXqRBLM7nvajbALneC2AL53LBSdnbbKkCz1FF",
  "key38": "2UkLo8ogzzxh9Vw4eCgoMQ5r4CGrAJZbEPZMFdaSFoVtUUaGSDq8pNWan5DWmNzAMbamNYTNwQ3zTXd5oTf1x1xN",
  "key39": "2MX3s2kyGWBNREXFUx3ThLLh19kT8oaZMPV9XDL7pLsQUvSuLJg7zDWNZQvkaaGTV4jk2BsXbaC9emSmt3JN2r3v",
  "key40": "5ioXocsNe37WD6JtBq2EPkhpgNpjMPi7WmAia4XtTMgnik4N2pbujAitVMXuMgNLeRKdjvuhXJQA64R7u7dFJ17R",
  "key41": "18bJqERhpJbaX2S7HGAqN4nV2SybcXqNv5XT3beDHJWFGynKqbANPmK95xch5KYrAaK49BEMphk4wtF9kj8hxjw",
  "key42": "2DABKYStU2EXjAXfd6sX6Ufbs4njfyr2rXykj8GxQtVJ8xMN3VpVbNYmhW1Li3dies7LbYQXoL9z2yYWPx7ayvF1",
  "key43": "4Bon57HFqrLTtLFiB1sNZZLGq9j2hbpn9RQTvvEWg5f2ThSqgVoGgjtvvyfmYAy9SpdfQkC739XYcrbPw36KjYrx",
  "key44": "5WrQorQ4q6eGHHzcXJLEjThvzr1Drk3KxtQt3TJjBsnmp8HfHbWj6QfU5R4FQdSeQw2c2ehxbLf1b2ya3a9VD89n",
  "key45": "4cYz7GjJKxRypFutSCaDEPz4HE7revnUsYDDebjvbRPLbZ8QsCFSMY7uGbirpJvMNkydTNNX6MiE6qCrLspsStF5",
  "key46": "4jXazTtRxDWvqGWCucWJm7mj3nWgFeVVFwVZMJmtr5sVtxWXGsn2j4j91UEJuuVr4qiAxWJM41w84ZpBkg9PhmM9",
  "key47": "3huEJgLgFF4SQ2eFbewyxeBRdvqUCvjXyTwbS4z5AH9gBzXzXRWdn1sni29PvejGfzRemRpwKW8S3M3VcHCtKS5n"
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
