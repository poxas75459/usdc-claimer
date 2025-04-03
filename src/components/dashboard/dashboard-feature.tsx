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
    "5QaYt3Rv3tXvNHJJLvpiawt6XURCCGWy9ZxxpoFqZPiGJMUC9YhAm6Qa62GXSU1SB9z4tzbhg4CjMN5YZXBZpMTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYpWCUsczsMA9aDkv5nruADJGjdR6YAvaXvTwVMKqJbURv1dqCSPXEY881KJRHZvwUaTqwyyzYq75N9bZDFe5nY",
  "key1": "5RU91Bo7RN7JVmJGNHwd4s7hEhKdWZYYMnzxeHFwR41brRbyWahLnMS4KnU2Jw79ovey7JpuZ2hJoeGfej1V11Su",
  "key2": "4cjCh9Jes8F4KhJqDB8wyAC8EgciUxv6BC2FnPMDxXh1DoWXv9gErrNumAGKfcNV93bwbEsGHj3QNvZEciwUTtM8",
  "key3": "56mzA15wTBm1e8L8M8a5oggM4dUwke8d3QdptHWbDp6KrBMpDBtpZtcbC4fvNipdCvh8QNvSjF8PaoBjjcT9wdEH",
  "key4": "5mgGT93XpCeyCWvQ5szxq5KBvrgC223pAMjitDWG9W89KHP9pFb9Aei249seN7UUQF43WafFZ5JB474AVu3TAbaQ",
  "key5": "yQQ3EhzRp6GRPFyENMkNwL1sEnYeWqAtirYcHiRvbpV5HMEmQCJk9vX8hyd8Z7mMWPbjoHVf4mUZq1yQf2oZHpu",
  "key6": "2X1AMuvuQagABusKJMi4YwfrPMzXTATxVWScMavjo1GiT11xv13M1RoDV3rMmxDHd2RDJez1yNRbx9JePDES3nnM",
  "key7": "3ohwoZoXBbCB5Z47UqJN6GKj8VerheQksx5AF1sw1vHmyDuXALAKkp1qbWCbyZANyXuoMckth83bzEZW2Met9MtW",
  "key8": "2ur2M2oSc5X2hpiEs5NMVStB8GaFrch9axPbwqPwBw2RzLrEU3G9vAgkr9mMZF4gKcE46G86doHxmP1H9pHenmEL",
  "key9": "5dhMaa3s3dabj2bi8Z1Ro83co59cvDq7oxodnAP53GeUc3bGkNQtVuVYC4cXiZXMBvc87qUh3fPmBCJtvx6g5Fp8",
  "key10": "4HZiCwcTQpjXRdPgjCRiZ4JtRGbKj96PovaR2ZP83MWAHjiirKmFU6jdBRbKVYMphiBUt6zASAgyvaD9CYj8H1X2",
  "key11": "3Twza7GAffukLw1C54FJdvDMRRTetCBAdQGT37ubK8kLdYQFeAdmAeci4hD1WBcVaiy1qVuLxQWgjsdGDBumxkwV",
  "key12": "33TprJEHpSS9L6hJ4NuJ5634YzKigdM9mE8pUD2HL1mf98Un5k1Uuow1KPo3dGiGcajMUZjkSf7Vjo4K8fekZuyS",
  "key13": "35Xjjt9NxNBpkakRXV2Jg2w9k1XRK2LveFzP9nfUTob2a9fquFUyYTCUR7FjueMVJH4jh6qCHQ88uWU79htBqEzk",
  "key14": "3L3G7KyuK9gVrvvaBGVuKkk5r4e1ehjsmWjV8FEup8p9UkPq4c4VqK4Z1UVVMdQ7mFzQ9L92iWFKrd6W44mLLvZY",
  "key15": "2jfoQ3DJ5LEXqx3o4Boq7ZQs8T6RnttFh3WdKhd795McChy188RN5NR2tqmU4e4D4siuuj2wBSxAJfMwjAEqcQPf",
  "key16": "DAkrXYV6KnXLoTGVeP2oVQUhnLUFq4qSYA4mroaJxrcTkKuD86ptvLc2dwzKiUJCbgxk2wxgL9G55BAwrFws4Yu",
  "key17": "4ksBLDpejASPCC84xHdGThgr3nAFUTWoo654XE88u1C8hpyThvmKGZpMeypA2snZNF39KnHJuyTmtLpL6K6e9nfb",
  "key18": "5aENjmfDzZhA45r7zJke45eSVs15mu5XurX4EXhnYD2pDoijb5hgr6ceHCVL62d8j58czDSthhrNpqfWT6owPqVJ",
  "key19": "36UdhbdnZDBVtrdksxDyFR7xfUB15H4fuaPEsNdEKmNVczfqMFdiu58RXnrzRPpjLdhrowYjVMro3JFFUTC6VpyF",
  "key20": "5qrS6TGLWyrasXpnnvB1YFxjLVzMs9N2XJufw1bjDUMwEE9RwXkm6CogzDoFutyLgXJJfTp4Gutn5jvE12RDYYrh",
  "key21": "2FpW5wurio22n1QqLS4fXvNcDBK2iT7iPB9XknUhGsGi6wnh5Dafgvwc7GgGeaDsu1yJN3cdGQWRMEAietQDX8fX",
  "key22": "5av2oYwTFdEAE6ZaFBPCTmcdetuNbw2H3q7RUj1xfnb882QGbH5dnySjeB4yPszBPopRRtuVU5Majqdeu51kzxqZ",
  "key23": "G4QW3sN5MvHidsxsouanjim4P4jHHXtD8PsdLfJguuFvmVsoxQL9C3jeH9CWyu2g92ffHEtQZ7QxcxXAaUDyqK8",
  "key24": "3P4JjEcYdHH3V7bt1j1ExhJkN6EGNcoGL9fGtoaXrVFWJAeDj7hy15s95qEDxn54dNUxvmDZ4NnrZtYbj8EnKFA2",
  "key25": "5UYfu4RH7bW8h6DCC94hpTR6Kt5sX6GwL4gPj5zt9yv1aNXfbQKBungKHsMuYksr2QHHUfmY1hKLSQEvKHP5uV7y",
  "key26": "5aKBSSJWCz9iAjNr6wBrNrTh8RTMXyZH1KWdrjAejPWQKLc9NiF7Q3Eddk2jphTmkf7fNGat8WJb8VXUpygH7kng",
  "key27": "3uctad71GqCCNWgkb5GnafteAcYPNmoxHFza8j6e9HnFgsHh4uQkokVCxbKCbTuZTAn8LY6kNC14hgiVG8bq8sC5",
  "key28": "3KVpSG4LamoA6aJhTTCcFQqgnxwChaFMHSQc7NxkspRp6hgycvCqTJVTt1pGMVdxQ2Agk8TgKUo1WWcFu8m9a7KF",
  "key29": "2opegx5f2r1JLx8YCgY8TvnWNZwU4tFJUK49nrpacZSf6oFwDsw59Ematj7ZgdrSqXFjS6xkBQFWztynYNAsqsvN",
  "key30": "373feg98XLKp33Xb4PubXGVv2zeWJ7ZqVxTX2MPbTX7nMEAPfKKGNJDn1w4fLhWZg6wzJLf333JRVKacgq3A6CiZ",
  "key31": "673og7AJ3uSvdV7fvuL93dH5fiurm4oj5f6uWWBxRkL5L3WTCRyKKjmMLDm6QX3XMq9AJKaUwWJeLRD51NcrohY6",
  "key32": "2hSHkyA2mbS5pSn6d9W7pLrg3ZV7ZnSyRUQk5NsYQTDjR8z3UpM1AX71P6s6aCGN4VWHRLyd6KYXm6X8bK73R6Te",
  "key33": "3EBoHwjfXPChRSLmShgAkJqob1kvDaYKiBxh5pS9SVP1397AQKeceXfFH9LsCiGj7ib9UerVEENQTSNma81Zk8xK",
  "key34": "s1y7h1mHX6ioeBskGGqBHSM7G4cPfxniCmYCgL1kZvbZGVNDUcM65bBR2JW1tyX6v56Av4jqFa6oAoX6dF937ci",
  "key35": "2BFrtdxuFYFuG3yg6f214DH4Nv8WF1giyWyN9d8ChBQRSK83nfpHCn5cu6PKv7nri2NsVcrRMgJtU1XqScDgATC1",
  "key36": "3m1yWYhwcXWT7z3G1MC5sjamxFfVPrihotVuH3wp13oyRTLVzy2PQkwDHvG5fqa4DuXGvJvDhVZZchGRfg7o1hke",
  "key37": "2eeebMCRWmSXQpbkvKzFFVQUaNtgqY8kYbNzRhiRwQx3th1QoFoBfYmWY7zzJen8vQiCM2YoosrXVi3174dmE4c9",
  "key38": "21RBkcqYUcrEcTLkhpwuJpPEjw95XWkq8ohDTEV2Ghzj6iAgfYyee4wcSmM2UA6DCnFL9VFPGqCNigzBxEVtSNyM",
  "key39": "3AT2RmvbAzM2nVv2qyphShridr23jN8xKh7BnnQtQgWdLDCQ9CC48TSErV2p8YfMvS5unJWogaagmYGbvy5xMzU4",
  "key40": "24WHuNdzeCfC5qKpP3Pm5XqbjgtW1Z9gDVxdJQcf4T5rQFGibBAxE1c9qGpbEsu98U2PvJfCxHddkF1LR2nMFyVb",
  "key41": "398Q3bTDgbvh4H2DivGs7ez5KaQMQ3j6UFyU86t8A7U3tvyDCgyvaGZGK8etZaw4zsLfkHzRfh9Z9LKGVfkCeYhA",
  "key42": "21D2JZZTcyuZdqNCqQDc5fnnBez9DPpZ2tsU4Mu73uiC8Lw5UQRL1wJ9jqizhsuDmAc8haZi5vZQ6kAZSDTJv2JZ"
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
