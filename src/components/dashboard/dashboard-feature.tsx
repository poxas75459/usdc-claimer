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
    "FFfQYTotPoZvuTFTASYAPg63uDH6YqdZc6sF9rffdKgJpB7L91q4SUnn2r7SpyU6JvCJN2KBeNKg5uyzd2aSLcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7FEbmccCjzYki4upYTv4DkUKhunMMWYYhBEukF8y6cXibebbZr9YEaaowsH2xqzgw3vj1cYokUPWLtfw5Vxjfe",
  "key1": "32kBqMDCBGzbyAcmbT5ZF7wJz39E3divMy9JXiDPwnMqqEpM8h7L1swPHUGU1RnerFELPaPiieUJC12AyYqD7ABn",
  "key2": "2tLVyEgDUjvKiNpVrQmgPtQ3aMpsaFjb8V1hMEcP2GdmkSeaiPG5uQaPwetYjhmDyi9fMHVBtpn3DFhgtFoBrm2p",
  "key3": "2QBesiUZ3AuhpbAMciJNf4qKDruPo3bvyfC1tQmDAT1a8deyhXAjtGKgMVngTYLxkXYuqVgeJhdLJFsFAvaxHyer",
  "key4": "3RXiUoWi5KNFqA8zQRgYiYK2o7Vbpyt6qcv5ZkauAKCUMuBx4t8gMnJU1LUhxDvw2kft48zxyVxsY7dgqhf3AvhW",
  "key5": "R59pUBxFT6cEMcTPnUasYRwpMhoAmMoTKx7GapDT6yhTA9U7An8pQqfepeFUxakBshp9ihXwRZq1gZssW38ftDb",
  "key6": "3CGwu8wEzn63LXx2UymiEVRz5KeFjeXwqmYVtZvY7LjQyKGMBFNiVSkbUrirKVWUemhPMXVcrYerUvGGdKRgY4Xf",
  "key7": "3uo21LRQP4sxMyJNEhHNckYPULgYGghAx1xvBLuHaGiom5f2vyzLG1heemQTmv3acHNmCm89bLAHa9qvedLbes5A",
  "key8": "54u9jiLpBAoDxwFrFQiCNwMtwHaBwx2M4pHqtNDjUX9fVGGNhavHWm39DdbViDJLh3rKUgpbx7U3VHpBnb1byuZM",
  "key9": "2oKgbpa1upWP9xta3aeyAY9GXKT62ukd34hzSp7zsQB9HHMKKNqVsaATig415Vom14TScmUY6bdPi1o2bR2DjD9",
  "key10": "52H1vLa1VJZktxBvyMAzMwgzxyBLG2et2aoUpmT5DQdU41XD5Z7uATAQUESs18gNtNAgQmqi2DVpgtFSKoqpkfM",
  "key11": "357oLpWbaVQfaoHFNYNRpbmPPdLmPzrE2h9vLiw6PSwiEJYJMczo6bfAJFstxF9T15GN3YpcwWDPMJCes9L9wQnC",
  "key12": "dFSDrL512gk9JE4ST7koqLz3SRC8rM1tsdzrJu42begqy3Fz4hSh6s19y4tbLvNE59FYF4hZ3k75Gwe6KpEGQbk",
  "key13": "5AwKk58ghahwTWZqwXkpXrXLSFE2d9TzToWijNidW5Psh1gSD4yEEECJA3nSysBMVJw5LNnNBQ6GBarBYwdJ7kVT",
  "key14": "3eYtk6Lr9FzLG71yafdXsFjbknuJdg4c1JyiQEDnTd9JMEsL54NDj3sm7UTMgZ7TH8sRbp3xajJeN8NX73M6m2Tp",
  "key15": "4KSBHjLmyJh2YhvWzwpVoAcDxDo1kjZEmzhmKm97brSwEvMoPPqJD5CEjVXsSWrJEreagH4yA3aP6y7eBsy5NaeM",
  "key16": "3pXaTV112Ff7MHgoN6q6Gg6bNauuUYzvL2Zd2fPxQeZotSJjdS2Qe68TDTCuYmibSYLMf2SaieZ2XvpP8TqRhkav",
  "key17": "4eKyRxH35kfWyJ1xz9kuLUGgpK8WVphDVYzJjRx52mTB61GusJt1XicUjU2ywpJVwD8StXCYpCughsYfxPM6i84",
  "key18": "3s6VWW4S23cuQpMypgxgjLbDSKWh93CQcyV84qzzdgbcqu18MJVxT5iL1mYWg9fiFdvU8CgVsCjYqHw2FdQ8NDjG",
  "key19": "36FWjTnPvzKHYBsPWCQn4A8P3XDXRx4VFSQa3Zi4BPoRyHxzKD6kN8ozi7YrAWtYWVFjSNUPMYFeQjs2mi8NHJde",
  "key20": "cgCavVT4rijf1J51LHsQmGCu14iJoVQrdtL5bsuHUAB4Q1CVLtiGa18DZBDGhkMsxMVu3W5MECqvVZfKDxEg9ih",
  "key21": "4hDU65pMo2i7eTMatQ1Zkhj2uUv34xsxmWzbJjAsaCmXDqdfcyic7cAiAbDEZHzkRA61VFZxhPVuoFCjVYMEUZ5L",
  "key22": "TnytC8N3mcwKrfJLGrMoQZLK6ewFtXRSVUyCJwqkhf75fwP4tG4aQ3ZPmbDzGtrTcxxUa6y2D8L9A9H4F2ZTyzi",
  "key23": "5CEL1iBjnxBBR67gqEsgJcnJYrdzZdHaGg9Y4AwfbmbkZ2Zuj1Fe2CW9wcs7tCCCKAvFY4oZf9YcJcBWiwD4feoH",
  "key24": "2GzGzK5yYYJAhDJhoQarQxX4b5uW7Qhby97QD8i1mtt7E2dVH3LEuVhGfY4A3pv4eQFRR7LhpPtx9GugwXw6HHKN",
  "key25": "4zqtRNiWhq7PAh9PNLB2dwsvjWUi8voHVEM6t829yMJxEJdv1DycwemR7kd23KdSmvVJ6guzcjXcavbNJPDgU3Xc",
  "key26": "4M15Chskeg8YXG9zz2RgsK4wfsK5syuD35mQBkNcJ9H82U8rcDebcthMW527vo15EDssvqeVLb5WfJK1GPW7Ttkz",
  "key27": "2iQt4AhDGddjLVsF72W31voH2cJLduW1rw3xKa6sseAo1kMFyPW2153iarhxiks9BZ9PBLxFs7ZQTvpLLhtVuvxh",
  "key28": "3Hp9FGna51HzNvQEPBGpiuFBQH5e4YBNWP1qqJWHhYMwarjMJmCg9WC4aQUK7dYXisiNY7Tpk4GBzKqCbdk8arBs",
  "key29": "3H34Zom7Zq8PKpnq57XN14bAwAH1c6B8EEPbpPDXJVnvfuxqV8XomfAfPgB7otqekMCD3vC24Q4dmwRoEbXC14x8",
  "key30": "3iD633JphrM32JmehAMyaFYoxsqvxN4kTks77wLaGZGR1et19M1vBBU4EmfyC3SrL3TfZxnJoHrxD16zvrPF2W6S",
  "key31": "2ZW1fVKvTSUvHE8aChJg4QaC9sLuxudgVmfJypYg8doAnTqhUsCFCCYBBKAyRGggZfQ7n39qh9XwRtbGKbP2HwdW",
  "key32": "5u6WmyQVQhNQcV17bD35rQXFMBAitpTbE8pZbr59BGRia1rdoj5X7kgh5X7zweE3v3ksDX4ekWRPjK4xhTXDRnk5",
  "key33": "34GczW2BfM8TF4jn3NPFpZ3vcZYVLEaJhbE7DzkCfXh6F2rNoPJoyEruFfQaS8cKHXzSUMtHUv9ERT9gEQDWs6Ye",
  "key34": "4etq3BXcnH9UYZvBpauKMuZSFbpPgNxWBa1rCDWaLnSoEC8b1r3eSC9bwqr2sKWp96RhXvi77nEtUf2ZCNZr4Xyv",
  "key35": "56Zkap367XFzT5SvvNyCwA7zTWkAYkntdDJZWFDabsn9DgdTqhsh9RBhTSWt4tWyen2bnThXTvkvhutip63ym1PE",
  "key36": "3cQ1iNYdbpvjxDpYc1fVr4AyBnuNHtreKLy2vfRfDnXSCcJxf8wYNy8FvjRCwv3M8P49hBzZBBuFda1QqkJbqvDg",
  "key37": "3xmWzWsd3LgVpQjTRqcDJGoXfQvJzxYfy3UHks8wuyPH4i27eznthtRuVQwMGiu6B9iXzGdQ187UHREe75hLZhqa",
  "key38": "Aap5JCcsA7ndL3v3YC9YkFu34UCMWXPMoLh2uo8vwYNDD2VzWY1hpznm2CMBTjeKRC7PKw1kqtRz9ciyLcZjnhc",
  "key39": "2bENMJvfQjR5aq1PJznE5Rw52Kp1yWbZcdfvekJREhtFbnsheRvQAiWJuD9Uydi6sk7tY2jjhL4UT7ixEDiJFEfR",
  "key40": "5iXSm54Z5UX3E4VTHZmk3jen3d3oazY94vTsUufbgQMPNYBRfQ6BzhDwM8KSGHzWvmS4QUeH1zvFMmrU4mRho5AS",
  "key41": "4E9aoZVeWD6Sk4xMyAfayKdtkfUibnXm5e4tJi4Qv4sByKGthmtkhtvgHK9bpuXSr1YV896eZ7kXKpp4uH1uqXMv",
  "key42": "5bMU4X6dL5VLkMPW3meBTqg3B9sk51phHSmaaJ2bieh67LTehpEPKkVKBRrybXjoeCCjoam1jRcUARbbzaS5MxMt",
  "key43": "Yxmgw8W92LWA3JY3ZEcRvCdYMvmyDHk74bBv4xKJdYX18qKYoJ6T5xgPkRGib4Wa1V1tnUZxDVHiNArkhVAJbRm",
  "key44": "5CncGNvx1w3pFXeX6EnhRoB23yHaEHUKpqYkZDRVkUini1Y2wdzW5rSYQ9tBr8JEFAtV9h3LvQTbX8jTAQqTioRz",
  "key45": "4csucnkMUxfYu4KiMkjUdA5Sxw5Ga6NFsmUhhLYzUifmeeVQQqDh9JrqdaLfF65LvnATHMmriaYqT8yrnnSG3JEU",
  "key46": "3FAsM9fL2z7L9HSVJ7d4krDRnbtzuhRhfmvohuSntSU5sLrvogqc9ieTgZXS4S92McaYFoavWmPJZan9ig17AjGP",
  "key47": "585F4x1HUaNVheTFvGmKE1BvS4jhMygLsuKNzytpZrGJhSFZS9k7KK8i6JvfmZ3N22qd7wnwonKP3AVFfhvbUeZS",
  "key48": "vQvcGyyP8xTydCKZzcxUpB4AWtbHGZcRSSeE1d2Zi7F5g5MikaDiZM8nFauaRx8ciUf2Jq7h2YzabP2nuRJMeUA",
  "key49": "hLKrN8MX2XrxPhwBqnZpC8qjg9HL89CjStQthEbtdLp1DUA1H1b46KsJ7oMvS2UqZ5GEMExa4XueMVyysjPAkc2"
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
