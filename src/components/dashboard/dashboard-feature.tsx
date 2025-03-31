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
    "5bEfJd5NVPWP8dynmqmvaXpkMmrCzYDGfuBudpuEUkukyqmP5cwemVAG1sbGJRm5PAXYkVj2ZaHwQG3tN4nY7iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oWecPmwQEaiAeXZc2ynEmX9mXVMi38SW3xwKAEze29FswygzmEEBTtTGHAADeatzgepArHQeKtiCP9nPUTY7U7N",
  "key1": "5F8WApfqUjjJaV6BTVzPLbCuzmQXH3EKThEPdNL4rP7izxpxd1xsJ3dxohm4Ur76sj83NCPTgXp6f66hcDekLbNn",
  "key2": "37ohrCMz8euwSsyPo6jFBcEdhjQUNpjtxSZqMiBbQSD7pkhXjCKZQBHqeR5zW27533boBHNZNfefzj81UYui5Utb",
  "key3": "5WDfYfxgh1HCyVw7BAizW2xGC9au9K99c1uRCXYrTDoYZFWAcqaTTGomQqSF7ZrEkMbq6rNFFjvBXR7uxHdQ9LrF",
  "key4": "5jrxXXH6dzDUG5AaHQqjMsNzEvnSK7EbssKjq5MAu2h1PmLKdJFCp1P72Bm7hKd9Xw8tyN2LAKjTzWjspjmMkBra",
  "key5": "5hMzAFRJnCTzmHWcnaYERCve1dceA1kuvFgHEr39fvMzftZVaj9RfxB7qo5oWAuqErTvjhanTmz9PfEwLSiqdQeD",
  "key6": "2sb771SS6bxJNvUUccMtKRaXXtYrb1XWMW9kLrUg8dsey7Pn5B4m4xZrgzc3edgoksHDQ8XoFospC9Q7pjiKLaKh",
  "key7": "48za4igNqar72raeDTpvJHhZyvnvRLEdLRGhE1rvJGtB8KSbD3tBrZBrVNH7vEaZiyiFFCv9Kq1sco7nXXCjkbFz",
  "key8": "5NwHkh7PW71zZd6oe3eN6AfMf1ovdMAKd6rs976Jde39YwqY6iydJiDvYG2yzRoLF4KvrmkYVMpokZ6dH6g6AhB8",
  "key9": "3tMB2gQJRTbQtTKykUtA83CgtiduKDTvDYCixpQDvzaPpyvhgsjHYXeec2qbGeEvqyefmHTfp74aZwkfvnEfkxfe",
  "key10": "ErVrT56w3iYJc4254c8gEiqhQSEKYkrjRAEYoLCHo8kKkaCawCEAZFhwDWPL54DCKt7FKdpHg8fLHxHhMWAypko",
  "key11": "2Lopa5AMZvrQw7BuPpnuBbnKT1W1P2eCUdkge2jYz5EGgMkAmFLvzWBgnAyJge9NzSyQYeUn2gEGLS2HbkTX1CFD",
  "key12": "63mFdxiymS1gNWneELEG4UiHyL77KYWUfbTiXn7ijgxPh3RHjt7P8jmJhEyi145AQKeZR4sefhqeVDcCk3TZmQuA",
  "key13": "48zADhNZwzvvZP8WFnZWNcmW2Nms48DSE3atUmKCMn9Ny5QVGwu5x6EH6HiVMC1gjbhot46Zy5yhKSnCRzNYEjyi",
  "key14": "4VgCAWTRk1HRw9v1JQh2YTDPBA7cmQPSENpGMMkStYKU1nA8YpSECdo3JSdPc1L18hr2bEDHMBLKc4ToiMBfjJjq",
  "key15": "3GPV6i4ZXDaeTgXGNMnEk4Pieszs6qNF6hXyNneJxHJ7y171Awhk7zXxDuc5zvjjXaXvABSPn9bqGpJmRQUrhqoB",
  "key16": "2ULXWPXNuBt6MfxRuTsNJQb4vfCwWurU4vDGNNp8Z63YTzhmmoDxBEyc4jJSaVXLzPb7SgAAEZb55GhQJ3dYuPmT",
  "key17": "5vfmyqSeBMSayZ3cMjCq6mwreNVQgpv54S8Yj1BhSDt6RLjio9MZSyoyMU6i2YQdGFvKkRt97r7XgbVjA9N9vv2i",
  "key18": "2q65kqu4nGACWJFkJRPiqoUbhhxAyNTuQXjN8mftw4dbzuBnRMXEQP4eNkTruDp7jpvPisH3CE7otX9AgB69PHq8",
  "key19": "bRaMpwip3vuWg1NEbzfc1nYcgX4aBMZDFEKkk6hMxrT5CsmTMj4xupEm6TaCAdSv38ZXBGtzgbdx2fS9WQ78kC2",
  "key20": "i4QEtrtWtb3ZHVCQ5fEaYTBizQPWGSjzpLqX14iM7UEsvpK4pFy9qorpfTevAN4iGPR4bKB7QHBQXEzvPW9NRDj",
  "key21": "4Q1G4oxAKZnQBHf4wgZT9qYv7jaPw9n1CUiKvfRsqnj2vJSBa1VK2NaffZt8FHSfgvj9sqSaSBAda2BdbgUjfy8j",
  "key22": "3VNHSRDwyTiMscy3CB47jHz71g6avZs2dTHG3TKcnF72tQycpUgGd13GudRi4PGr1eYZhobGsXP4m2PoiwKBCWcx",
  "key23": "GAWnVcPCEcQhP3n89YDBU8jAQSz6LmELgjckxumXK6un5XGiYe6FfnxRZkakotzmZ2pEk4Ede2jR7cZ2MWG8zX3",
  "key24": "3CWsU9nySrLGtgVg1h6xLwn4v74L1P4CBiGwnq3RpEHHzpYWzsUv97bd12xRWHyD2wEG4WWpZdGw6PzrdpcvbdMW",
  "key25": "3q9xj44BtZMZd53bHnmbJdmNEFXyKxKtnLozUwmu54YKnGp8tydRyPDP4U96UKL4jDcb5ybuhRVUMeVMsz3RSaGw",
  "key26": "4aRKSiURuiC3DFUnczBjvChz4goY8py9W9hXyzyJ4gtWhgc2iG18FykJt1Qg5cZ2UmQqQVLJndJEjWgAadVCGigq",
  "key27": "G9qGiijRNjzrpRGJUM6nDs4hPxC4XfHTNLvyBYBTs1xL7QZzhM8jcTR81BBgJneso4qJsAD27dnMwMSTQhMdQpT",
  "key28": "35ACG48cR6vARea5XMbdv5ikHYz7vHPYikDB55fV3gjtyDRS6cyQ6GZ4JQ2VQNtELPDBJqHvqi3hBA6WaXAnA4UD",
  "key29": "5z2ct9Ech2T1g6EVqJKGrofZrW5ikP5y6Hxm6xMT79wzcRWQtuscmt3SbBJZAT1hZWvUM4pThKANvgB27dd3Gqky",
  "key30": "3eR3agTNHb5nBQBDaCsbwbnBqk1jvop2PEoACAzCcXUyRQeXxf6Fh1RsGX6rn8AF8Qf7Zp4GB1EH45H6W1uMA4DU",
  "key31": "FtccBUMGHPyu3ervMNFYVvcZqeR7uPCUGoS68bsXqRYU6uJ4db1EDwWaex1H855Lo16oAWrRnkxoqDCES8yqRjB",
  "key32": "4w5624Zz7C1bJdbCNJFpBPpR1cwQPaPr7Yi6unMZzQJnhZZNY6QGMRquB2ab692Spafc2ukqZAqXvKyoARx3EMY6",
  "key33": "5RN8MvhVLKuPv39CsEjThdQn3dWXbtSKpsrbmuXeXUNeEsSeZzTuEpMj5tdVMDegMSXXQ5ihfrX95SGezs1zqr5h",
  "key34": "VzawnnGLaJBweSew5HoGSE56ACaKVdLAUeVgHYLJ2m2gR2j6MguFiMd39BdSift7DwttbW8pidmo1Nvpxibx4fw",
  "key35": "5x8bb8MEsmYUsfyVYpxvCgbhYT598gQHoETWvjTaRrecXDqK9CnjysTL5RydejnSvvqiCvPt1NdPWc4uer8Ep9JZ",
  "key36": "Zv5K9y3mfJZkBrdVkY4eZdJTjs9sk6RdaLWdhTYzSHg36Sbjicc3FLkZVAi6c1GdkcE4faWU4fc4mTsfo2fU3wr",
  "key37": "3f5yByw7sdE3FVLHYQVxUYd9PtbyCkMgQwYpDo28tWEF32RvdYbYwaVDA8a67RkeJiwmf4EZnaruk2yuvatYXpmK"
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
