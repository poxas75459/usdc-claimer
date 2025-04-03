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
    "2NksKb4H7VxCkWXfSWnmNiRKJtQv7cfgjH2rsaGGdCYgthYDL7stAA9nanhFUwYdVgYEAUov2TEf84gk4tBdRBUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nd6HDE7GVBYVsvE2BinbJWRtuPgerVNaGrXBih5eUyazDTqQJUHkf7avwdrKrBU8NWALwprTnVRN8zGU7XTMtge",
  "key1": "2arqcBv5tw4rApbF7zderTGa4bTkpYHE93pNCXdkT3vnfiVzWbEMa1SgP1Mu1WySmDHdK4eXpEFEHMCjCaeUZN1X",
  "key2": "4xjACW4x2wnbjrh9CjJB8yfEgRkCYVQQVF2Rx6Uzgx3eeQfy9uoSdZDjSkGYUwX6UtPGf8WQXFh84vfavkc2DMys",
  "key3": "4wgCYACChJzumBy6mh3Ja4zrYszGR5CKq5mft7YAooRrfrzxtJDdfTCcaxfFtiEKysEUKecnYmgsydJjwWBJ7X5W",
  "key4": "54rPEzbxSN7sFxUHt1KS3poHLHAVcWhKCXvWsakSNVodAWrezz9AtNc88Nt5Hd9T6cn2rrLNDUnqnHsG6vscsGiN",
  "key5": "xUsE2DDxkNghkdcjsYfo4q8JSmtifr6AzaQzXuwXZg9Yk6fAhB328xprBMApHQaTTxbpgASUqsGCNjFrHUFYh8d",
  "key6": "2JgGZFEsPikwma1cqoxopTYr34YN7xaxhqoaxu9Ei4gEta4Jnqx4yvtYKpzmAzHKBHHYJUT22fCRdBaCQWKBF6uF",
  "key7": "3nJK2tiYpeJ5Fcm8Vxc8PyC5SFNUBfqXn8yZyopWQ5a5BB2dQD88mPpYgz3oDpkrKTdS5bkdbTJyxgpGdotLFB6r",
  "key8": "23PKa7snc5nmYs24om3FUEfpo3hMg9JAUiLf19p2aB9BjLcBGQtfaDgqKN5Qf9AHjGNqtuoptPad31764JUJPqAH",
  "key9": "2xE1isi7Q7TCERXMuafoNbxivtzkzkbcU8DgkQnGFE2wAKiXeDg1WGvLf2qiv8gdfWWqsCv95fvsNhq478ijqHfh",
  "key10": "5JBwUXnpcoo3Hz7q1JF5sT6GD6vZuEEAhzz9Ho9mYzdzxbNCkk92qsYxyF9Qqnetvhb46dWFHvx7gwuBBbXZmkNn",
  "key11": "62NNXzZpf2FyRRTHqLXr86uWrBjcLcMhJoW9Ko8QGrihRCNExfuTb1LA5QyEqxdvD5NovBxbZx5r9MwFcSEBNT3U",
  "key12": "5WRdMBaiKa9p8P8wBHUkeQ4Ep8nuUB89VipNSxJPtvhDFMBqe5N39j5sWAxgPaRVkG769rjMGNB9dDkaEVitHtrU",
  "key13": "46wuMicuRhRVSC9FSemVSejXDMaWQifzWgxw3a2anJ8PTWzYRM5ARLn18sL6AxLxsRt91QoSDhbhzeMQcFvXrwwV",
  "key14": "5awASU9uWmRK46fNQJb1aMQkCgc6eS2qPv1LrP5vBrxcD86c3mKS2nx6S9oCKXVqKFwjjjft2J6BYVf3GEHRheP3",
  "key15": "5fxAtfcF8dq22qKAjLauymZZVv6xRKUx2SgYA4U9P1cTTHDWuKQZLWu8hLy9djqPRubHnLDPmC61shPrQkgxBwVx",
  "key16": "5VmzjmfhaeF9zLNG3516hoALmhTBB2z3rScnS6tPhDZCS5CePrNSy3fz22uv9y8z7G1mmdWp8Cs8fmYik5PguugR",
  "key17": "5436MHcB3d1QCyvecS82CesVvJP2P29twNTmsqCiPfeSUD1DieDqvNfiNWrDBzLbDRq11xQyYoSu2xw8osKBCsTC",
  "key18": "1c7Cp6L9Ukv4H1eLm3yzVXAKCZGJoQPKcerEFKcMM22BKRdhumoJSKP4jEM2uCk7q2o1hiQGQWrgELanTJoaa23",
  "key19": "Kpw4YqUmRUBXszHgk3Td7jBKz37QA2ALdU4NJUiVhU1gpgCuuay3wp1NvAccWUk9sDE9f4YGhb3BA6cbg2wRy54",
  "key20": "369YPBakDjMJgYJAJKvuPKpFE722C1dHxjWMLQB5EAPaKsqgnFs8uQd7FuBw5aQWyGTRKJRHyHWPWER4e5hNx4qu",
  "key21": "3MHejQCGw4uvS7ANzkDu3dCxPUucNsL1aDKQzETMZM2JzfFEtQm8YmmCR5a5kbMKP5HzEL2zo8AU2vre6whahn91",
  "key22": "3t8s1NQqAhik9Nr4tacnW5JejdawSmRCquFWXz9EHNfP4yqoPaZBfsbaa17PHG8jBHEjnFo9iodq5BNQscyLwdTJ",
  "key23": "4cUeh5mCSosU5mw2yyD1XnGmPBz3bUkCJkLDNRdgmqvKt9rZ1zhKZvPzuYBGeN87T7DakQsxRsdNnxHWVYE2vF1L",
  "key24": "3izDMsoUnawWNasVLDovPdAU1EbeVjq3BczcqAc2PcXN7FAKMdb1TamkvMqscrXrLqMMNT6ZS1G35smLCxyt5rF7",
  "key25": "5Xww6QdW9SsWwnTRhbAfmoR1yJ1EKrVVvW6Cdob5UkYirNQYeUWfwRbsnZjXFyxXoxY1GED2NBiTDcBH99TwikHv",
  "key26": "4ovJQmUmh56maYNZXNfhzZEQuzWDqoPKfnQcPpsGqRNWdMfhZHnLSPKLknkamJKmkAkQeZsijEkQJQEQ9HpD6Wud",
  "key27": "2gwgczmvPanXskjYT4F1fRw8NciyGpMmm3Efvcggv7T2TgJjXKmTqVvDzBaKo1jeTAGVTe43bGxJdnaVSjaJLM3i",
  "key28": "4Svk7ajyb9GPr8baKTfcWVRXVzhnBghehm7kJSERynqqVSbQoTGgrxczzQif34qLAAKruvyYV7WdwxbJ6iZzwYev",
  "key29": "8Am2q8uhjpaqYEooXqDnKsPuSWtjQRXuQc577Q1VnZRzH82wem1BkMufs2pAhnxBL4Xm1HPGNp8rnwHpY5UiEU7",
  "key30": "3Ua2Vm8FPXkPGHP1BHawVJogQckF36gWh3zyqjYwaX6e1683Ke9wohm9tJcpYvmCwP1sU7dswNpQG5ATJ29m9tSk",
  "key31": "3a1CWEYhxo3W9Jp54JHacWx33vfAHTkAZqaJvirNZxJHxP4nUQUXpwhsbgjbZVYCunDnpqG5BTXrYALnBJM4Wisd",
  "key32": "LLj2J5ZSP52YXPZTuebSwTtix9XBHgp8zaCAqK1gK7b4pwDALyDuCTedjsiCjFLU5vrZpc8CkJs3ghcso3b9xxw",
  "key33": "52ZHq13UyutNHwucWVVC7Hn3zPvxkk5KChsXMtndqBRvW8iAQTJphJrQAGuAsjD9XrigPpLN9iopKbMMmji3GknT",
  "key34": "47mr1s7XtFKBBtXMC5HahgEBFSXTbGyQXSF1v3B4D2oAcZuYxTzNQZYnJzPiPcJrh7QWD3Wc4q7JfnfYL6e45rse",
  "key35": "2m1RYiyuXkMrG6Y5XqWgK5yENNrUazuPXVRtFC2rkr7L33buyM3rSHrp51ebaMbrL5ssw6D9hmZaAipf5FfMUjGz",
  "key36": "HuDxgZ6FWDxXJmjRXhy7kV1sq2QRTTrexrMV6KqRqQEBD6hFHvmPvr6z6ESpZrKuqJhVHox7MotSQfP2jhQfshv",
  "key37": "5yVJ9REifDHDHy9Q76b2kKgADEDdz6dVwZH4fHHZeWefYQc3VSsNG8PqaHUqux5xw6yXd8GztxkbYF74SnrxKztc"
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
