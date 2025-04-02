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
    "2TPvER8yNUxMS84eyRFFsa5HPC3BpbjPzwPPtW7kJPebtjhiz1gFB9k44P44KdaQ5WfwbTqZ9GALT1wunrEQDwmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4NbAExrXt48uqpz4wwsoTVk4egf5J22qxKP9xm1tkPUrytmSacQHYfVJ2fpSuf5h9UR4nRz6spuRtPGS63Pkja",
  "key1": "5b64JwQGG2u6p4FhfvMngJPwwd1x4Nht62ZS3bAvACpLrh4wUrjcMjYBdE6DF9qcKYsvg2HXWhtXLmbksiQe9Kks",
  "key2": "3pg9ragx3c2Jg5EY61RLh8WhEu3AcjW5gEqzAW19LwDhJhoNbXWLtovZouh555MnqdG5Pgs6C1C7tHaa5MPZqnbC",
  "key3": "2vSjmnpYiHy8YE8yxugyifFg7HTvzN99VnSaaMZ1FLyY4JnGAR2VQm4PYRumsHVvsuu4fKjSS61TCpfG82ni839M",
  "key4": "yg3cWxCiJuWFoRKiRXkbCe5HaFkFjjDiuLGbD8Lf4e1QAQbwG1NYnnBLuM4V6VKhN5UrfKQReYGB8YSSwr8ppmV",
  "key5": "5Vku6B5HhL91oKLSexCXZUU8hbPbBnANLpcDV8ibqnqzdiX5DqoJ8ZGKHCLynNsdksS6rq83mZuyEVUdQJHLP6kU",
  "key6": "3Xx6BaWXFnisKAmxzY1aiiKNC6uSCtZr8s2DfABBtWwrLgmWwZY7iqQbow73BsjaCfCZkChuyNsUptZrZaY4JwJQ",
  "key7": "4z5T63zDtyJkv2VKkb5ib78c9w9aibRR8ozSQaMGnZEdJYy18583DuAyx3D7tFXvr3NUDtcXspXEiDbSpB3yX8mf",
  "key8": "2E1zp519cetyBHJL4RZfnVzQp1Guuih8fGXQLaN9BQAkjyHVFczpVVPxqLnu6XCvxRYWoW4vN73FUe4X9pqUoiRT",
  "key9": "JmerjdDMRnR9a9ywg5JGtowA4KFhgAnWpc9BqanZW3FmypD3iAkH4ctHkAcZtausvKWGb71WyGfjMFNkKAfhfnx",
  "key10": "5979dpvW8v194pZ7HT5R5uE8xgK5PLL7DToQUnjkHd2mpq374mhnt8psaPUu3JRgVKg7tvCpFs9tKjbj3UAkb2o6",
  "key11": "3U3FehNnPjN1DuLFKEuf1hbrHD5WLjTuRTCzi7DhMQUkBqmd9pJNCVciZQNQAJJQTH8GMe2H2TLqjqiqM7uw12H9",
  "key12": "46b973NsZQt5fJey7dQaeL3AVNJ2qEQ1jZQCVDpsgUP9pyXxJxZiZepT1w3suv9wDhgdiNXz3VVQzGN4HcXgFy1W",
  "key13": "5hb6jtss3rvJdtBkB4J9t34WtoaYpa3jN4QKdNs2ooSV6oDumKwFP7m4xHMVUWD8fpAFzWZGGh69hkBYhyRW4KXF",
  "key14": "4ZsXyPjKC7CfbYt2D7XmtZeLsJaNeCXJgMhD1ZZBncoZLtpjvssLQiyexzwjTTAy1jM3hbXSuwzTyuUZ4WHumBic",
  "key15": "CurCjpDM9KH45Ntbb7QFaqsMAW3GSsKNmPP3yzbRqNQkipzRQWnL9caBzKXvMZA3qw2gsTQHHidBX39t1Qn8gp1",
  "key16": "5LUiiuzHRAVuUAFsVwsDqG8TLUQCp5VGcWhndgZsfKG5EDmewzzjJLqTAf3z9PVdtG2k66hXuS2EQRdXrbrME4Jp",
  "key17": "3ZMMso1GMVUM8mbgGUQCwt1CU9Tm8dTmZnfddfqcJK9Yn4b861zWg8osMQkJE1cFuRsiruCXBgLtXJ2TwN8QRa1U",
  "key18": "4NbTU4yjDv5Umdw4VBoeiLtf4bgW2hj7tKGyG4ipserujoyZRsfEm1oh5gqS8oycCzXos3Zzg1i4wWEgTGcnNoXE",
  "key19": "GXvC7hwsXtUxefEyAGHYa9zC9cfonrMPnBg7uhJo7cL9Sa7LW6SzqoZHh43NB9CZQWsqmL8eNt6z4Rd1XwJJm9i",
  "key20": "26ixtJZBZv96gH1LJ2L79SgwqPZoACBeUb2MGJWK8xqDMig1JJQRShmo6RJ731Jddm7jqUJVK4TtpvnDUHHnZjYQ",
  "key21": "47CFCEpbp58H1W42hYnedncjW5R9CLv1yPK7Fgoxn4GEQZdrQYsEEjoAS26wAzdQQTZuMYYgn7YEohkXa5TTPLmj",
  "key22": "6WomP1BRLAG58fEUpr5M7EY6qCmcLmAEQ7QKp97uzNpLtjG1SuK6Ln7p1d4q4ENSCKFfsrgffQbi1ky6ypyMgKh",
  "key23": "hCiBPRwjEFnU5Pdsd7ETY7m4Z5unG5DLnwCA1dzEDdRYyBtcqpUMMRdJ8B8aCjoHLP6cSWjwoW7GYLvronEG1AE",
  "key24": "5VjBLTMVpyT5T6T3Sdm9iW8Xyg3284CUPF1M5CF6wLjUFmYHUUJvmMYd7Miiqm579AEfGficnGwMkmmaqjRT8UMS",
  "key25": "5QiDFphAfii7YHpDGhMYpc6QMMMqd3rabb1SjY9MXQWUh9cGsfhvruexbkZoeUtHXZ1eZMpzTyaoi2x2NkP55dSc",
  "key26": "35QnEcr8vzjVh9aqATZoBk5pYALhrDbj8aL54Z6T94WGf1d2TBqee63ZSEffxYk3gjuBki1JSJNuXFBEPMGtNHJM",
  "key27": "4md58tQeR4USypExTXm8qxWvRAjagx8HvkyW2mAqjnnsEcs4RTcicchdbzzYDFMCbKTytyXxH5orh27SoyCpK9go",
  "key28": "3Mw6QQn6wETcmttekZbChLy96fAraeiqTR97TFyvVmQ5e2vkXJmUyisS8FiKyScHDDV24YCgNhFbaZcoxw8sRFmK",
  "key29": "3j3u5BJcxdjxZ95VwyXe88Dscjex8HahUkJv6SsiRXTnUBidmZ98S4YNC7vzo3Rke6xAxyX9UwNpWUHehCqbZjEF",
  "key30": "4HPCQrvcGNYZzWfUBTSxBbU9vJH7SCPT77NfHoZVR8YJnFrLmm8SsC7HiEQVcVirWfvF426UwNq9MeGrr6GmFMvh",
  "key31": "5x8Xib3fXXeWSaKiirMotBz1Y2igorDwFaS6mX6XAdXsf2dwSqKUCcJ98BPb3Zo9Vhn9mUDBB4ro6JbA1GctAA4u",
  "key32": "2w8f9QyeUj6X3AbZC77bV2ich3yyhcxy4UEX46ajBYsfeSbjDwT1WGcoMDhHcg5ws3CrUsg3vZTy8gpPfayqYzET",
  "key33": "4caiBcgjQvtKcffFtTE3Qvbqn6L28bRa3RsQEGmCWTXNhDhe2KyYmiFJzULwFiFpVZuxU8BDZawjqvj2eGAftEL2",
  "key34": "LZ1ifx6TYbNUowE5QyqD3HsSavL7iqv8MZYd4VrwpzR1hUvYS8MEeFgviKW2KaYNiQXs2dJUQfZR4aezfsGypFk",
  "key35": "3GyNbwV1Ev9G9V1sWNywkKyHvjscb2gnBzpRnwSNx5dwJUzdxxisMnxuPUYRQHxgtcHZfj6dZ2KTr32ESGRvBSMb",
  "key36": "41bckyV21Ea6QZuPBdhAw1grvYvHEpsygG2NAcQHJNVPBZa4TidkKGD71hWpuSwF8AUJ4p9uDjHZAAU3wdUbtkCL",
  "key37": "5bNaM4zMHnqW82mUR5aEi9vyjLaZbcjhQBKbk97DtR8mqZPmHkP2TswKwyB2EiNFP5Lz5AvWGijKPAeQUd8xdc1r",
  "key38": "4jNR6nrdorEboVKC8oJmNb6C4PcByQE5tWKMVtfA22xrPhvN7ECB9LhK5KE9nyyXvteoyjfPgh2qNbNrYCNaeVzP",
  "key39": "2jmZoe2BpMJkvAfpm5SWMYz64vKgyCnM5a6tAqUodeVdW2uSxdMYmpPkGdUjuUxjc7gaa9SwEwvR1RAtzLWmvAuA"
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
