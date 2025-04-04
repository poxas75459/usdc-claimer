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
    "5GrVbauhpBw41oHjnvLPZZnNhKKf416FunAyFbzFXjdu2MDpi6icagLGvcme1Gs46j5iBb88xco5KrYwszgsvmMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kjbJfRkrf1j7vLDUc4MGEPqbmXt4tH3XHxUiXbUfbNfMGu5aJAN5YLu1UncfZjJ7nYXhJBJSkuEuNCEWfahKof",
  "key1": "zsrc6nHbyM2Hv15ZvggHR9rLVAEpppKqwRafP6XZMst3rvAMxZV5E66qStBB3BckRJTpfhzbBdVLsYBEKZQVCSe",
  "key2": "K4r2Ay8LWhpCiqZnZhHpYpw8vwcj4cpsnnzc7g2c7ekouDtydawUyvqq2BJp1FqUvS6jzt6LPGbYMA8H4TFWtzs",
  "key3": "5Bzgfm1XgkXmT8G3PsTnpgvff8RYpbUwbjt3ierHNjccgxGKv6uVn2GrLJC89ocbqdgDJ2fCts7LX8ayFsE6of4f",
  "key4": "55iT5xDzwudNk7iQ7TTX9uewpMg5fwSbMgS4fi4FfGhVmnYGPjU6Zkr7hXNPiRJJFxLCMVdgnRnkfFb7WSDnih7e",
  "key5": "L71bEhVy3K8go9aTCjPswJGvVyva7cMBrfxVXZJ87fgx1aokuHbtKKghxpguxprb2fJmXCYbZjddhc9JxeMKerw",
  "key6": "3oB7dP6zCwB3j3MyDrGrbRn3QnYdDPSRSjrXdj8djF2dTXZvVxLYb5F5yJ1AbnmmMuMj83bEWRzRmqmCcgYnuxgn",
  "key7": "35pu6YFtkm9c1LmsxZhpjFtASRcbxdngXF5M8idYQLtVa3MZnZUXK99zEQHB8RTu2mksqHyUiVtAjNQyuHW29htv",
  "key8": "3VjzdAUyrZyCHHV1WN1omxH1VjVBK3BAoGqHwTee6jdPQ8UzCe2hgaJdDhLnCraZGtffavmQuCNCfUQMQwceav77",
  "key9": "2dnanc4msWoiUEZDuMKWdQKgwgYLqu3i8aJm2o3xG8n21JWDTSckR8sjpW4wa6qsFbR47pZ4q6PPHQDGDBmgA1Ed",
  "key10": "4nMHvK7pZ62mcD1mpZuH8w4NFb81Xyriy4XMH1ucRpT6it691JoxZKZjvgXjvHcMCWNZn8wZpRW1v1jvLjBDoYmF",
  "key11": "2w9uiZm4vfqjoi7DC6fajxEAJKiKQT62d21tqG46YDMn2tiWUYc2UH9fXSKek1Cd4y7ASLi3jBCBVp8gZwmDrn3g",
  "key12": "R8aZ9ttMBfHsCv7RHgYMmAq3ZSkwFrn78d6X3Ne6R9QU7G7RErNbrMZKU3tSp79M64T3f4nmQqZxW8UWSLrNN6U",
  "key13": "4pc4vXM6QC98qWUeL8AYtszzJdqW4M5CnoPAWGGQrMdH8xLWXL2pgyi8DBzPdWWK2478d5EhzNZ37Vc1RaWHFzq8",
  "key14": "4GcQjGe4LfvT7L36G3qZmsKQp5ywS1UytcGzQ2g51HHf6hdraCAWDwbhXJYqDowruJaP7emRW9EgzmndcuU4iCgx",
  "key15": "59A5iFivSeEudUVvo19cwV2zEuYfCXBu1k9AhrUZmngpJLo1BJYWNLSGr3diGWQvhGNPDkd9g2eRBkdi6C6TExnG",
  "key16": "2zQeQ3hz7S6333VoMtjLFEcccG6AB4XWvERJWcT4nQR1SuDzFq4WwBDukNaTHdH5DQr5NrkfiDkNJuJg4czSCXJT",
  "key17": "47yJaurqgsGJRjLaK7d3SG7DfdRyhSiChAgqwAnAyuCDQ1yWbYbyYQ7h1ZjnfBmXGGuwcMohSERAmeQCoTcgJCNg",
  "key18": "3hUYjJWNq4M6DVPHymNurzEpdxAhuLhjQsaebzXdJNtU2Fperpp2zyRH12M2FDMcD4s7y4RfYAKva5dHNXN2FTGD",
  "key19": "pvsXQdvPn1Q1inA7E4Gh1YpBF5ZfQyu14RvpN8X3Wobtv9pr8bnPrjpUSPuQgLfhnPBXX6GTWuQ6QZ68ZSBdBWS",
  "key20": "wxcY5nK2efr7pugnGEscnGPPTzVsD5MmaEyzxMy6JWKNmQMwyGZG7TVxxHLR2tMvguUNVRrciBpCZDxVQEovBYh",
  "key21": "5TWn4Udo92AgGzrMHeViawRbqG86nvbYk4XrLtmiwsiVfU38DAkDaJRAWZbhoXCF3tGsnkhxA88EXeZ8cW7XmZAN",
  "key22": "2vXPUwPJj91EM8hCLJ6gx6ajVBu7p5ZXSrFGgEQHJ3E7Az1vZLSoLHUJe7RjLNGdALKMmPmL6VASFc2ErrCS55wV",
  "key23": "5BWgoUiMLQ7vL5cBZWxzPjoqjrm8RdNXMJ64uAWwdgvmBNJm83XdGuzaGePNmhqjJQ4CPHke2Uph6XpuMZnF7jzb",
  "key24": "3ftdMJCvm4xGtRUstfB5T8WLDnigPiKFFvN9C3hArJ3cwQu5GTkWNwLR2SfcMbko8DFXetCTtpTPRBWWX8xnTZSb",
  "key25": "56ypimvZEsgBgyn1NZboVfPvgXoCb8wCnjhFCZ63CDH83L9ZYH4QgZUnDw5T14JYGqAvtYAf5mFfzdebhi65Ap3j",
  "key26": "28GewowXTLdgk4efWGhqfNR7XYQig26e9BRCQK2imr7i5p6hFSQH99bSkikMNKeuTNU7GAR7tyPrdiXkTnA2beg6",
  "key27": "2ECiSWpwmMfUWy9c13KNEhzzis4mJZmyu3Qec5pVxKyzQFMSRrWVS3fApP4h4WBCr1TXLNPRCFEsengpXw6SLS9i",
  "key28": "4EsCsy1hStMURexBZGStkMeYUqRn92Q7uBtJKUqtZYd12YXmExd5eZo8MUyGoveq53YSVmZhiE1ticyGf792b1ZZ",
  "key29": "2PLUeR5Vy7CmmVif8g99xo6VAURNDd2CxxchBG3aTctVvSovWLtkGtYMe5k2ZbE46MY7kU5jezLgmBRh9aYvoc4R",
  "key30": "2x74EcwH721gaLgEjmhK6YUvXTCAjqhre3LKLHdemNBdE6K999Gvsbckh3LBgUrQ1dzrFgXgrDVYs6LdKTAtV5TL",
  "key31": "3vVNwbejfRMCqL9jtpV2szDpiW1m9nhHz9iy6U6xz3hqTvBtZc8je263QY6ZDCaCxS1ERUPEnAqy5ZwfS2jVRzKa",
  "key32": "S3QWYQ3wrDqHHmyMN8B6KAptG3eKCczNz2fNMdtqREvrYXzfSg9ZpiYEgQyMsAztuUt2MeTW54VWNPsvMvWSeVC",
  "key33": "5KdehLTSf8KvKJg6iqE7tT37UJUeq143nYgHPe7cxoNaGZmEP7bAoXcjV29fBmjKM7BRw2R7KVyb339x44QW6LWv",
  "key34": "H8o79ogfYsm35gc85T1yTey5JnYrox7DyhyVrnQXaybtbwa6xSU3REfaEYVpuXLeyuZpX9AvDmvTMJ3cvXZiGQt",
  "key35": "4Nr1ztwEopTYc71xmyZimFBf5f1wsNy1BPkQYCTfLjw9CqEzMp8xhSw9Scmghf4QoJNgWWus2vgUji5Hfm4hMvQh",
  "key36": "28nYMvoYaQRyKomH775Q3pZEz8U5KZ3pHwa3kKzU7vqTFt6BAn5CyhBqQnawScyXrCcaXvs86fabiHYWmpiY8J3m",
  "key37": "3UYQbsTNot3kWygPriLswipWt6Fp9tMb6MUE6GYa9duA3D5cHT4GpU8J6ZFmanDEX1QQFcUM7eurvqgCm6FWRvkv",
  "key38": "3yQYzV3NLWdGKKvQsqaU8KzNuJymZLvGNuFnGmrKrJKm53Afk1MDRjum985kwu972BXCZuBn5mEQ5mZRHKf1pb3k",
  "key39": "2qpmG8jEH7KMepeaEMnpxxet5yApioEHAoDXCETxk1ftbS2XL6p5K7gk8JJadVKNVN1ymvNtwSA1QZruDhpjMshk",
  "key40": "4CvrYJwBDKg21qTBUUUv3tNk2GsaqwhYtU8qRbdzCDNVftqD1ZyML8sBijCizUwSyz54oAdUUUMXy9LEKPqg6GWi",
  "key41": "2PzGui57oE8pUFDoHozmcaiSVEPs11wXN3KVoGQhpSC1kbEiFgtrBJv9BN5zRPVDehqWoPc91E36iSsjgTabX8J",
  "key42": "5KMPpaUvDXXzFA6pAMQw678DKuXQn1CDR9wUZYmgvfmduuR6ffCLYoCaKptEcTSYexJG5mHVu6umCBmcrFdZ2JjW",
  "key43": "5kizQJ5j125JfwVRuv9p8UFj2J7LxBkes5dMP7YhMnZSeJMWWx7YRHZyu9tmdrfsztiCoYwTzmNnqUVKfmcfspWx",
  "key44": "5UVhYeiV4gkbumgU5dXQApZvApLN3a11X1QDaovJA5wNGKJYpKGYvpnyU6Xt7XceK8Mcd21tHp3ZcFEnTCh4xYub",
  "key45": "8U4mcX9aQEJZbUVVnRbF4NDzvsKq73SXtDaZgnhfNTyrQcRukAtGTjyq66HN7HxTxjoYHsdyddcp3fTB47BJZHf",
  "key46": "Gta2fX9DmJLXQehwiaK8kiQNtGTJNi6ei2eusQ9jEFVtcRjmsa7rCAcXAKKkMk2t9hQvPfDenfbWqmg89pxnQjc",
  "key47": "5VDGt93u6i13giSQJg7CMS8bE3BXxFaJGaPnFoq2NeCLEJAhGWqEMA9BoL39eNvWnkgGru3XemVP5LyDLuZSgE85",
  "key48": "4NcLe3bNEjP7AosC5epyycqj2isY4Z7vVNDDLpjHtnYfJMLQYLMkYPz7eNMXL9r72nwZAp7FHfxihYLoCruPpytY",
  "key49": "4ZHadVuFdZzgLGqN1BFyJzF2ip7Ja3VSvbSAZdATdGMpHnotLbR3drwAYd5Nv5RDer8ceuBVMKiDFYLjiTizG9Yg"
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
