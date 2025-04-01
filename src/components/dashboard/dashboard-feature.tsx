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
    "2SL4EYzH1M2tfaYUEy1aHFmf7tUqRghicMdd6UVsggNAGausqsHGCgxqNmXNxsooCC1K8K2yXavqUSpF9KJatfM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4548jyC1EEAYLxbfnUzanupoCNohcNLPX4XTMfFs5uhvySmvbk4fG4JokYyc2oaobPAaRMHDaqCLRu2LyGLkbegR",
  "key1": "4PmeuQKks4XicUS788i2eh8m58MNnzwkm1Wrseo1MxoC1jp54wq2yf9HAQerg1xtzmCoVBLrfFJ8CD7G8fqrmdtz",
  "key2": "2LBeqdq97C6qk85da51devjCXh8AgWpw4Cgt3155ryf5q7arnBj7Kcp1j7gdsM47U6cPQ572g4Hei2gtSDvBRU1V",
  "key3": "Fmau1GzoFzxiGgVMHwSDxBTum2xP5m9bSYeNYHyazAMw7d8UxBSNyhmZTRdjZxsroH4yaqLMVDUKcaxrt5ZxPeD",
  "key4": "RhQ3WGJ3pa4xyyFFA8epgDcuV4ZJLa3nq5P6hQN1kisuegajJ3EBRzyvBpqABsQ7XGjYtVNXB2vwYeXigy5zAWu",
  "key5": "5yx3BZ4pR5BNcHeZjLWhbz9nbwfm315DNYfjuDiWUiMNt4CdvSAowS8sJuukurhAfg17GBDksc8S3GXzVbLr3HBU",
  "key6": "2zYegR9VJiAVUATNs7yZ4DGViUkgFfnkMfDr1jrR1hvkJTdNbJJiedvCWiKWHiCuLG6FRWZw6eZit4gphcHWmvrm",
  "key7": "2TCvuTCBbVugxQxtZBxCXpdCp1Xx3s9gR5k8NY8K4caAr7PfmKLSTR8oiBEU35P6AZkBrTiFekWTx3dNd9yxmqgM",
  "key8": "4f1fJy482zf12mpxXRU6c2wrf5MunUVftFZi7NNHDBBmZdTwGgWuR4U6xA8ki916eTpjhr1MhAy7CckgQPqtLitD",
  "key9": "3MDU5Vh8yCCqmRe6X3hExdfkZ33muVQPswTePnQxsshkUu8GVgWMPPhVcKc1yLvvAQeo13XF3vHiCCALf7H38amP",
  "key10": "5o1Q98ko6hp1PuFtfJsUn9rfBgwiWQaNanaaDSCYZemdwySo2WvJ1AF8UiEivwCY6tYkrpMoSUqEvfGvE4PrFXqa",
  "key11": "JASsvuerKy5JkS7wTNzSYDBGJ3aWTJyycfMN8MrcZGU4m8TPybp5RqW5DPugEEX7xdePn97TuphiZK9xL9xWxBW",
  "key12": "2WtNY3kTGk1BDDRcTTXbNiDdhZDqsoF2hTcVCCSGB3uXCv77zUtvWPmvmf77kDh8635dCYqqS1fHq9YEZPRZCLwA",
  "key13": "ziGvLB5SMD9hM5gmL2Abv1dCAFmDtSHtWpD1Xox8Uk3YnusA8uDQRHtLjvT8u2sWoFyVPL631eaX4y75ua5CAg5",
  "key14": "TeKLfKqbo2orskBWRkQt451vDQkemQxvoktDJR8B6SWuBaSm397baL2zAL9HEQU78M2heZnvKdCMzeEab3u5P33",
  "key15": "46CxUU2mGipdov9J8UHpNm9wD9otnkgwcGrDCJzyx6TEPFSBvfyC8dfJoH3mMcoG4oNamqZBDrfrHHXVQgjmJkZQ",
  "key16": "5qbbZrfD5KSRkXWFvK6i8kaS1R6sUwKrFPD3RyEcAP7VZ15HN6cm1WAAx5LUhUhi6LEpEkrDQNiBNkTgdNNWrdcs",
  "key17": "WbHjCyj2iP1WTBA5c3WjNJa7zEaA8m7Cfu4Q8sWaSg6Q6Jv3gcpVyPMkxxsj4sXrxwGQ7F8UbFMTHUR5Vm4cBkU",
  "key18": "67bksk9yoiFeqrnHZHziYEYiBmniP4mNu8X1pWRtcKq99VjonArMaHXDLnQMshZbRKfS38L4NUkjfvoUKGR1Rftd",
  "key19": "53KJA8yVe1GGAuLnuc4LkBFU5V7mPRE7L8zfFNdwfBmRvZWka3QC2WASoBqDCBZfehENpJ98gxpg596uqN7y992p",
  "key20": "5CXuDSiUoyMtDvHWRCr32ffTCYosArrgC1sHqxNTHKpuzRTqWNJzvM67Ht7xsNiFczekjKfQ4DRetUJPh4GC49VR",
  "key21": "4NoKGzTx1XL52ifu4WDbuM1VTpAL6w7GAERYttgcm63frnBaZxBQaJh5gBkCih6vxkdddHnfwkd9dzvgxUoJE3KE",
  "key22": "63MxtRoAgkHMMybaTLZLJKzuzMbv3NAC4vMRTLJ2GkVsgdfgnkav7iWSW5dhB335WapenUQzCifwobSPi9wpZjQ2",
  "key23": "2p2N7s6fJvRhYNoHxTuJdrJWXY4R4QyEpzn37vrPUbqt8JeekZaqkwFqoCDfpf3jdw2KdHTwJYnwAEiNRjb3U8QN",
  "key24": "5zV7EcG1yr2dFjzkoAwhetTJXVpvpHkxRi3KBxDPtahStCGm5ACet1hF83NDuV5uyXpGWvxJUhDz4KhdJu4cZsZX",
  "key25": "4kov7jgyTGp7UUqwoivBwpGqFU8gwdrLynMWvEiJidZj9R9yKDLXU4oKZ1GEvtuKrvcnGxrviJk4V51eqV6Ycjf9",
  "key26": "2LtUhkZpmNdxs1g3u8nRmaQXcW12C2i95amhGFPYMtewrvKV8cZw6vuonYvy3x3q8dFFDZdsnA2M64JtKBKz5yF9",
  "key27": "2tdJT82gsREQxDLR49PZ6mcmmMF3LMvPzb8MEdE2R4VW7v8mcf67L19iStAQhZiBpSWzXsSvXFhA79uGLkbnSL2x",
  "key28": "5AUj3ZdQowLardqkAg7aSp9aFNe6NC6SF1yaFgyw2Qd8ZndH2c3ctWosiC9pj3h5LhA4uh1RsPjHtfSikb7re2NB",
  "key29": "5bKXAvpRsLT8eyMRrSwhrc6WQVY8KzKxgyQrR6suEcntiiXBf93g3xo5LLRcqdghXabDhnbLf67zThcqMei7RWDf",
  "key30": "2xtWo1zyJaeNneLcVpsJrKbW5Xctg9BKvbTVSoq3yP1f8EsxqkLgZ4TF4TyHWqKyvh4sQ17kKSP4nwfgqF5pCHZc",
  "key31": "nDipH235apYxbdNCJffnbs2kTGHwfrSARHkGuNRdZTMpCfhf6bTdFD1iWyvYus88ikiVGnQkXWymWToxD9mBjPZ",
  "key32": "3B3YvmmrzH1Emu2Er1DpqXToWLC2pQUvj4NiGfC5AbFMrqpftUuDPzWWNs7btA8bd8weVoCjzxBwKzkymHhZrqBQ",
  "key33": "xCMoEk7QDRnKQADAqztDdZjx9mjMvvjTTmEy18LtfVYS4GTE3VVxyeM7aA9zvXJtoVhH8YcivkZnfo9ascrvb9y",
  "key34": "2DN1V4PwsNMndERVbVcq7JQ68JNBJJmzozrqHtbhmQFnDbQDRVxmPsMopYLTNCAhG6uqL8PDqFBNi1F5bLzRXJuR",
  "key35": "2mfxGSaqCeyGULrbyR4fjybeEfJoRBMupTyL1h3X8zmtnb8rTTkiARLCat7QhE5Tds1Axw5m3qLJWz4i3mnFvhkD",
  "key36": "65QURQ1XsHF1gtMvN2DpgpsTEHGecKpdxV1sBDyE3YR243a6CZw7fgxw1mTCDHVMnji9Ht8yxJS2nSxLey8A76t4",
  "key37": "3KatdpDAuHNvynwR72rkiciUYsnSZN6c9AnDASwBzNxH7Zz7FNa4Ep43KG1GxUG1r7TuXnbXPZoeWzoNnNjtXHjm",
  "key38": "343faHPAauBhgA2821RUG5N1fyD8hMBWnMRxDiQYfePYhh7kwQokm734c4UytjCA71XgAFEqNAPwNbRJXqBrrfMP",
  "key39": "bGpYMAgrjQ7Z44pvFPnA6LHNujypzW1M8k7AHRtCWu919f2L5kh6i6KsNKB4ji4s8UBHaahpaz6HgJmK7SHUPiz",
  "key40": "59xFJUj29z66Lpt25jTaun1SWeM8rnEfdRRLVfF8NghAevK7ctbg5aSByU6TjwnqHqrknd4ppuPnkwoUQSDmpFXN",
  "key41": "3km7cpvubR7DkdiEU1JqJbMKt3aP2vyt89HaCK3poewPW9jFrNmErTUSYZs3vqoBcu1LWhnVdBkPC57MGXmpyVot",
  "key42": "3xgYhUwK5aeo1gcmzaFHcXy2NL2RUf25eXdyH1iRVbkD52UMSQPRZxoFTURheFYjq9k2mjHyqKYE18pPCkbSCimC",
  "key43": "2CW5DjFZ4zqQMJYTTHUDY1bxCFch3cptcjZqpqUhkWeLv9Rs3FmkXf3GniQ9rFreMDkVzJqodhUCxXiXCxbTJ7Qm",
  "key44": "iZprfFToiWEzDC8S3XwZPDVw1rLkLKciYghx7paMJrKDfuDz25WuXkhc43X18S4Ptxd3PJzUKJ9t8RE5nz6VHem",
  "key45": "2gzhKgsQyQFsY5Jc6jKZLbf8GbFAxn6XueR3usiqGWjzSbZS8TC22yHNQahKNVd8YTGpWGCiK6pXuN7bz58hiJ93"
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
