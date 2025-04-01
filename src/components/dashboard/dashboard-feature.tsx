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
    "3CJxAJbHnUyMzxDWwyXGW81ycR9L9eafPdEiLv6obe1CALgvWDXPkKMH4Uwr4HsVnMJZumkJvcFoCTJN4qtL8DRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3qXvSeDNAfxdqVrsBLyFQkZ9d3Ta19JmYfvQA68LUgVF8axc5k3xFAfvgBqRU7ZHAKNkPryd3FbkjLKANP9tp4",
  "key1": "5qX72iYcrn7fByYcK8cyR9uE4zCSR5YSJJN1i8pdVHaNUULRGp7522xfUjgcKQrWwARx6XsXK6h6ZoJ8BhoXam2x",
  "key2": "3VsJC6bLvquR6NxNRkECoGZnQGzDWBPfubMWNfXsA1XXRBLNn4v7EzHh5c2ofGio6cR49dGr1WMTVunhLTmFDh7P",
  "key3": "3iHtHrTQsNX8Ye8jdkbKx9AeGnFNAe6ACrJPnQSvUie3A2p4v582Farbk91BYxvSworbiiNT8ueyWb2qhhcaazEb",
  "key4": "3Amq3XKTa3e71wf8ceGZjdoNNCSGDFBgDqyvEGYKw5iiLF4HHjVkGNCp4DEe3LP9pLn72LiRfcTBLu6iJPVL7Hsk",
  "key5": "2p9MNdEKpF6m49RfxjzPfai8U9B2Mq8ZUuxA9bHDSeFk31S2w24GjUJf9eyhocYY7EdvaU5h2sYrefHHn497t2zW",
  "key6": "iJ5BT99unP1jzZ1vUs56dgFsLEv9NQhB2H5dEhR2fdMipyJU7rNTLiWbuo1waE8N5N98qzgx9t9hxovNz1m8uPC",
  "key7": "4s8vFtRaDSFZJpUpedCzbdMMnJicWh5upZ9L3Gvqx6bvUpfALMmKHBUnbe29jdejvigvYhj1oEXB7GNFLoWXg6GB",
  "key8": "3Skst4R8dSeU64LqqxHrnUbQj7MoBsD68gzoauvzpLZTcYxRQeV8FsshcfkJpoSeQJGL4PtkP8bLrW18Paaw3S6a",
  "key9": "5nSxoJEBh1TwWs4BjfctGHvdbKvAtt2RHRa9VcPxG66gfL84b64PBHqNuwyF9mx5MDrBnoCzQ15JA82ZkH7Kj6kt",
  "key10": "38CRXCkuYSNpx9Vqbw8dM5FEtAp9yzhjopvcxpNUMUPPGfg6MUCXvabm2GEgvvpWagCjhc4YmhkfL4trFy9sV7sf",
  "key11": "4xoeBeV4fQ6eiUDJS9uigXJYJ1AFGjYfYwWE5ssJJih7KkPxN69Ku6eyUQRo3AGmEhivweXHrPzY1sJGtneTJXSn",
  "key12": "2hE6j8iS6PPdiviUUah2yRHaUPUoes8ABL32M8CWP5DevnngRFiGZkdQBNC8rXHh19Ugg5J526StAjjz9hq8fiXZ",
  "key13": "4JuB4TgDNDDETzq9D8Kaa35jr3F4yasUEXmc2m4Zg8k2TE8rqT4EsUKZpQkDWZPpQHncSoCwq5LmatrDbtEdhCGh",
  "key14": "66s1MZtNf26AjFwnt7Cuwnx2gR9Qyoe26gJ4DXmutveiKvMpqUZv1SXvMv2JT1D7LgyTFKwVAd9RVtG61bVK89JF",
  "key15": "4MmFEco1eGghtSh7AwYtXQNGFL4TgbWzR5jYbUHN9g7NibbVGwGLRhmyGr2b1xMKv8AkdkGAmVWnLBtpLGtk7h3o",
  "key16": "3YgfCV9nqMHBv7N2wUbsy84FXcndxpGLWPj6HrRWT9U23q6P1oTzPyiEtPd8RcPPEwquAAMrZFZFdPQFmokX5893",
  "key17": "2UKMcFkULy4sm39YoyQSsKmygPDp7jkoKmaFuen3Uw4QF5CCyT1wDdBxDG65ZwJ8rP4JbASRX4Kf8LzJcySGsbad",
  "key18": "ohYQcactybGXqafxxz6D9vSrivC5SUZCMtcC5ycwEdsG1FheHCSFZDFczJdJgXi8trwAfH3RBF9nFFxdtDehrJA",
  "key19": "2sf2KEtmvMhyQBhmzPx1Jazgijen1enTobW3nEWzZjPJpPE4A4LhjqVTVsQL5VXfwB88J3G1knJyHTd1dHvXggEW",
  "key20": "ms24a844aW1U69848Atk9aKVQe49SfWTHz8eDYjtdC7RSfcyVUeZqEYjC6aA6M2FNMYEhjfWuzqMQFtBbD8rHXY",
  "key21": "4achqSLZg8yo7utRZrMsAkmjDLWSBvYY7wqtEDSpymkH8sCm7r9qJFtLC4dxvXbuMk7DX81JVJBoi1gGMUPgmEEo",
  "key22": "5FqUJ8SB6C2vtKFujAEXv328JpXrNJBYpkAKDhh2jXC72RSbpHiReAskBTWACwwj1KXkY6ckAW7BHC3am5VxjQnm",
  "key23": "2sH73aHBvSf4E7bFTLkTzFFJtGYRW7nXcGJwQWHwLoNr3XAYkQZtCo1Cev5cgH4toPGnDnTyCUgepmSh22MTRdcL",
  "key24": "5kRdPasgnpXggsBCDSBBRFUjQKpQnBVWcTcjmUSkkt1qWJaHQc1i8hXG7ayvbWmuHPvwV3Nd29Bz53GM7vN9yooJ",
  "key25": "3mQf5FqFzAHe8uitGbvPcyE3JpSuhwQELK7wfPciGqPMA3iTXZR93iE7Z2e8FFeRCc29y6iv2ABenwHvTftMKysA",
  "key26": "3n57Hqdx3Qe8Xw6hYZr5eL4hLKgqasRS6H9DsGmojBLRDgMenJvWf9YRVp4Lrh5pR4AGo71Vh5jaHuPHWiP3jhg1",
  "key27": "3MqmgWo6bXGLCeStHQTKLPodkMhgmSzbm1XjZoXFAAsguN6duAHuQCFuQH6sv86kHQaFLZAbvDaPvebyX6XSkaEM",
  "key28": "2CSmVPRRXdN2Y5xiSH1NRHzpJW1fsX1tsD83qg3HLxGVHYPXwZv1hE8FKF76zVTtrpNpcHJzJM7oFEjPKwoK17D2",
  "key29": "2wJs6g3LdmmcVhSxKoAPWjfCfvhDCadyYaF9UkD2beTHuEZzvdTHoSJLWZFQnzqvokgZ1wyRzMyDcnRgPp3k5TK2",
  "key30": "36ooG8GKTRCm3aJJRAS9yHNCHX3jr9GTHXD59FNERVNRySLumaQeUxbB3cBFZiFUQAs3gbveZQAvSDtCenAz7Z7S",
  "key31": "pav6VYLtkDediBmqk7BmjejidxvUK5mJiBiCuVZAYkcNMgpyLuWnWZLjdPa7gwkyeeQEJwoZy4bVsATvSeYfEdT",
  "key32": "44KopsQuVWZxKCyfZVeyGCYkZ1sX3cdDQUia6XAchPaiEEgnjevMShWtj7kPFRhrXV77mVLMTe8JCkHtMHUgzdcN",
  "key33": "52aBFpUyFisKQzz8oLm751DKe8wZ5USojM3vNCRjzsuTNn6WNFbeU7LmB2jpXZXtREtLoopU5ZP5poUqLBSnVuJJ",
  "key34": "2G9CauuP3WKKEFYdCt4cR2iTgmxkTqUuqv4qBeTZQF7h3SDCT8ohLak5zh7bgmmbXr3Q1x5jBnwUpHXL9GmpZ1Xb",
  "key35": "v8RMdcrhcEsEsYqvqRFxokJUEWsr6ZtsuRxAe46f8vHS6pdqsj2yo98cApMxi4taHwiqjui2sjDMVRmGKTHghQ6",
  "key36": "4HJq7CSoWS91he2HJv2QAWkL1cNe5SZANKtMizR6V9TRMfE26r8QneNkZ4QJHyQPseQCDRsUJxBajPPFPQyop5uN",
  "key37": "3Qm59e77tk6WK8e2xzca7s2B52ZmeoxTX9jes8hmRCosDaonHuq56Azo4Ahea2Y1Zk6weZWB1gEsEdJpUnNtBPmM",
  "key38": "4Jh7pu9fFhLi7pKdvE9S3UnPPhvCCee2mKhGebjFGyN5dvQnsUSEKkWXiuQSPetaMgfzqBs5wK1Jg7je7gqeRX1i",
  "key39": "4UksvtRw66i98F2VdACUYZrwLHMDv8CM6QxBoPGRLJSguXr12AiMDBsB98y5uViyfSWN54s7yCbyvPSMxvkR8AZ",
  "key40": "4Q3zBsRZXvAW98v5YBw2yuVRzaWKPjkxLoZrgfmdpeUVLokFbyzTR7BFhsjxvtEo6pZ4BLKovoJUAxMEVmBtjTZq",
  "key41": "5Wa7VmLqGXH74cHAUU2TJVT7MgnQT5NH4yiR882JvftfauW4egaMEAFuMerDA7WvbS7ZoRQEkcFobesj3BwgTorM"
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
