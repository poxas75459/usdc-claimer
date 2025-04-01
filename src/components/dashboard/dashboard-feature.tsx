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
    "5rmnzUiUkFxDKZqQCnYAcDssi3hpYRBEKL9ZuTNqKyfgbMTMV7CaNRLNv9xRpLXLLov4baLSKbwdnttnwoyuRVSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g13hXYuBp6i86yUEbav1Kxvycwdvw9XZPEBNoCwCkhbRpavFpAkx6GT1i9t9t7jzZTK7oTvbtq3TUB6JCFfHRUy",
  "key1": "5uXU2vDMkhYez74a3hqe9uw6HECKQVpwxzTkYYAK1nYB921nA1e4hsLvY51hmGWyDPB8uCHN36UQAxmg4e26SJWU",
  "key2": "2HWbsDs9knYd9dcRpyMGNQCD6Xry8SZpcaaaE6t5Bg5RRieq76Aey6cn9toy56o7CcjGWnaiFfGXBkYnLGWPi3Bk",
  "key3": "5v2tWK47iDYfmH3eYtj6mTxosrLFne8fFEccjv8g86tuxCo2AhaEqYwga3dXoAN4H7jck2Gbt1vATaAVFGZtKoeY",
  "key4": "4P5QJzrL84W8DWHyy8hB9J6tKFGbUTAKXeW5ayhYbn8Zsma7N6HAgA5c8CTWLJudimqaZdsLJubrXC7K8DhhUWqm",
  "key5": "57z7SMYixFfekPdtLEwKYd6STFbce4NYwufrvZbw7S6UHa5H3gSomvDmiVe7d3u6C7pTFx3W7WyvSocQAdsovBDc",
  "key6": "4EoUX6v3iP3iAVxLyrW5VZCCVLCJNndN5wrH6MTNoL4MbcePruf65uETbH628dZnu64FPGzzWGUGWwRpuGsvYG1P",
  "key7": "nML4LYeRBjNAB8FPAkmgbCUWUVwoejmWfysc5iUFzfQTQXuN98FPgkeekgJvpDQntrvpQDeTosqqmS6g9JFpaF3",
  "key8": "3Y2nbSPGXQcEXkQXYe2KNMce7ywesR9v6qYTioLNqpmE76do7ipWy9Fhzi44w1EVwKk5ArzRTGmBfhykna87q3ER",
  "key9": "x7BKfe3VpNtXjEdR5L7NNUZwhWzi6u89p6LWfq95atUicWVnhtaKyE5NQC7sKmtQzkQCRrcpsF7Ysxv7Ckku3pW",
  "key10": "51pkH32HNG9YAkb2jXTjZYJW13NEFNRC3QjQgoNmCq334AXE48zSqycrFy5DKiKLii6W4bQBxSa1s1562uzjhxb2",
  "key11": "3BKAwyAKc4eEx7HJxrJsyhqAoGjyb5SFBQUhRjTANNcpXQygHDodtafhAg7pRgmTmoNYPPbrwZig71bY3xzWgoHd",
  "key12": "25RLXfrPYWZNaV7Xsg2zio4C1N4hspRZ7rPobknSL7ySSRBnTU3PFsS6ux1CASvVkZSmrroxW6dgJPuYzbuk7i62",
  "key13": "5kMGU2dNHyUAh4qVSMrdHRRZGVDBL6JUy8K6vPd1G6uwnSzaDPrHZLJxZvAxX5eE28qWoMFmgyQ7HsehFYSpZ65y",
  "key14": "61BPvnpfmBz8yrm2dcusSFAiUTuZcsw6nLkcTTPesZaZWzLm2RPf8JkfeGW6HqsJSzzjnVfoGLui9JfyKWVaA7d3",
  "key15": "4cGQVismLjpZV6ATg9ex4v5aCyupgz9uEhV8r2XFJ9U7AcQsH5A34tJuKmT43zdSUen78Vx9XLkoPxFpZBZksk8v",
  "key16": "27dqoh5VtDFYHusi1s42uqd43mJAoVxYVqC8f3gkZ4YPsGdBU12kLJhBhHdVdP7HnNpFVZggboqmn5kQYX71bYXv",
  "key17": "2DG2nJXN6babLkCn8neBdXJpWK8TybCigsTpprAS6ZcELNrSoY6Ws3uMCkbcWEgahZSirb672BRcbNxRc9G3RkvX",
  "key18": "2U1j1oM61b24xHHqytpBNtQf7Cjy6ifz7hzgu4c9NudFTWeF6SzqU9WXKz2mkua4rP62fVNYvy98VHvPsEUoN41F",
  "key19": "49hRYmKn3EF5c8JQa8uVNaR5KYXzDkQnrWk2J8v9N6w35wEYBjyMQKg8zPeURtX6bZssquncbVFC5CCvNnRsZs4n",
  "key20": "QMuYPEknzPxhLSeV4T6wWGuubFU8Yn9zh7o32G8TXmmzFpxZuSMsLg9R5z9r3JvwRoqkkgWCNBzV7XxsugghwTt",
  "key21": "3wGDSrjVaJ6tK7owXAvPsUb7zSDGNnEGsYJKeRtgFCb7uzZSP8TKYtKYUg6kLwRqawj5Cggvb7omF2aJBq9uX4rK",
  "key22": "5scD4S9cgZUUkSKW7jMekTLPphPY9C2SMafB1TFy3EgojT2nWiTBgDM9oMcNcbL9tB6rZDNPiHegLodv5mPEFZzf",
  "key23": "63NPZVYp3wvdK6b6CBx5dRupKobJ7pEqd9BjQHtKGLYYnw3nvgQaWceofU5a3bGCVWbujoeJiroJPauKuwmWSRAV",
  "key24": "2GbqiemofTgE7k8KW6oJV4DZfKL4VetrH5Ugvpit9RRGVw6AHnZKhdKz3VVuyXJ5Y3fvFdd3jLWoLjnFkuXGhrw",
  "key25": "62T7HzpJbB23W1195WhfSoeHo9MmuEgStRdGDeJ8wbt2WBcGgZhHeQCHhr44qQsPHXdrZa1nAwRBCUjGM7xjiRS1",
  "key26": "4DnnxxfAAbGhstk2KVFRNCc5nL97QUFjGNq2BmiF1YkBkSsMrgL848hRw8Jetm55yqe5TME9HHwqEQpKJVCQXpoL",
  "key27": "5D6sU9g6ESu8qMhLVEvDGXheMAdB2ubGZSuWAiGQrWrYNAwBrn7tYF5tNnmfs9We1jvViSmqshzTNLCd4jKYGcKZ",
  "key28": "4Q4Pk1yJ1apyrrmKJ6WC2zQTMBinE9NKbwLHxoUrVxNNXwqmpSJyGvWqYkrE3h9mrjXyMDNP3YikdZCwBQ8Jwp2o",
  "key29": "yuL41BTuSuGfJAB1zxiS39MM1Fp3t9e9JVUffvxbFYJKgANeD8qcyZQgxUaiwXVFbrRFa66iLigxH9UZ48rgcLL",
  "key30": "424mj2RifvsTzoU97HYAeTgg7xnMx9WMJ1dFnXFXmVoujbeELkL35A7Eg9MuyTb4RGvNxSGHUXNmew4PMcMGFSjx",
  "key31": "3p4aFCzEQFwCQpmeYTkNpc2Ev7p2f1k4ZkaBrxAvkeKZboTdvEHS7bZMy1QxmkzyJsFVBMUnynFTJCC64rQox27r",
  "key32": "56QK5yWPSe4umE8WuPoXKp4q4tbx4BXiQn3DjR6x6oK756f27WivNLdGMkfcR83vtSfREmyjx7TZCfsdCXTY3MQi",
  "key33": "3sSMG9pqaG8N8nc21hnqCFJcb9P8ECNgWoCT7a1tATRNdfVTQdVmSP4i4aNhfahTNj2a23KQt7iTMpGWsekLEnRy",
  "key34": "44nqDvKfFcvm78MxwsPUPrzQEPtETNsrcMh1EnAijbhAR55tMZ4Lew4rh4QREeN9pe5tYjByHQYR6p1rCfzswbZi",
  "key35": "43LTzhffGMRyzt8Fmqb2xAFPYxSesx6qGwnqSEtKgEHow2M8XoM8zVhFtXKBBh2FykVCznfeTXc4ChUWnxyj4Hh2",
  "key36": "Tf26goUDGXttVHQrpbQMrJvESyeXE2ii3eBLjpmYysJkR9JZUr5xXv3vLVeV8ceRZANTBXpqw3MT1uj8UDCTzff",
  "key37": "wrZ64bbSzZuWPmWZo7UgowDTbVJEUGtXMcR47jZ6bYRQ6tMcxJmr96HESPqKCUqDjky1vNaF7meiPmrVYz9DUVu",
  "key38": "4dKge1844z3aBrJXFybJcU3KKfm1QuvRJwN5parLzaNCNob4xniEsKbqFtMYDyonv3wR91Ua3y5u35FfPw4nPKD9",
  "key39": "5KJmAHsfTkgngPAKLzXSn42QNs7Ga5Pu4THdYuUwgiXUQosBDwxyBvyRYGHRbN2rTVrTwcX3xi7E5RFks9QNrXUU",
  "key40": "5ndyPJJFyWBrpJhG1T6sEucmB32fdRKSxYCvzmMVF2kZWDhWtdaYcQ5xSyc1VRr9CRUE3kJxkiN998s8QMkhV1Tc",
  "key41": "2RSnpPqbvx4kEh4YZvrNqqesoiKCjnr2gbUJ1Aij6F8nVTYTYmrn24yFwL98JyAV4hpRLxf6tAXBzRtKPKwbfeBA"
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
