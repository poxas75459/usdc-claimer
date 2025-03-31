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
    "5W7ZMxA5DZScUZwh5oHFL8eDXong9hMuNU8MjDKPYGLV7tdLf1WPeivehX5AbDmrBdBzZBeghG4RVWZY9oSmFcsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uirFqhyLHRyxkCzduf86PK55HkxE9DSU9HPC4v3DBejXcW2TDRBMMhGP8oZTRqrLn7cDfLzkzRdB89rBDynq8Wk",
  "key1": "3K16hEtABYUYKrV4YVcMzXQ1HupPGcHmuuaqiv5F6cNWyghRhZYXdKwstAobKk3kGq23CuhmBXc9AuKRTqF9pSxE",
  "key2": "54YTGaooAhEDujL7uyhk6FTaXR9wxMoMBmDzazKWv3yf3tDYzFCHp8yauBsVJ1Zj5GG4xKU28UiqJt2Bkt9gcmDy",
  "key3": "XdNah1aXEpRjnnW5d67DSV5YNFMGPYj9xCz9YNDt7zQMcCBvcqmue3Fd52skP9RsMii1VbfmL8j5cR4QLtimihB",
  "key4": "4PEVimkCm8J8P2VLnHjF3KSXe73wU6SmM2RF7gTCVSTgBhCMU746sq8efqxMuDCKNyeATEB7AyvXYYyS9kmtLM7R",
  "key5": "5oc3zxrPkZaYgV85vpanexh4zHuADd2tNjYRBMB7DVuseSoY7gSZyHgJUDwnYJL7AyJa4xGbvGQTSCC8hHHFHrmu",
  "key6": "4tNcnM9LUPJtRvvdWyNkq4DWZ9A87UqQi2XK2smrTKH5TnX2AqJkqrn9VPS6S8uVZbEWkoPNngWo98buozpRKd5L",
  "key7": "5JbDdNgCom17JDjwEFe4or1rfxDvKBPyVo9WomuRZCuc1SAScXmL81rVQV4EN4DrseCkPCfuqSSFG43dSTSR9XHW",
  "key8": "4ocraCvsKLBt64c9XMR6rarnh8hp9hVsnMmWu6guEkbaCTx56RNydPjfitZmTGR1SvymyTdcypkSBWvJqDrHokzL",
  "key9": "5drmuh2fmgcU4fcVMQVCNbRzP4zreU9Q6a8PRQG1R9kGd28SCGbuDxB61FXuSjAuWttzrxJ6ygnzPYoxgrGSkGN8",
  "key10": "4y4M8ViTMfdime5jZvh1mDwcQdN6Hpo9Dp1qvzkvjepvEAb8HC95sGmJgctEDfi5tC7Mqsk8XAWCJpThse3uS6hp",
  "key11": "3fJbduBAzxQ6swFgVX595JqEYVyyeEq74SzrC4wTwRTjDCqNWsWYgR6kd6NaZkxVecV66xSJ6ySJn5nb23Rg9QMn",
  "key12": "T8mSCRftNBfbqFGncthbkapC61Kgu9SsKQBUxVDXMubXLjarK1ZFuidZcveHPdhLMSKZqxkQ6BUE7b8HFWVwYiD",
  "key13": "3bnSbefRNvWwCjuJkKY4Vzxg4B3LfZxvrnvFq2YUssreW9bvf1wbFqu3SJd18NtCP3zgiatXL6U9hzWhNwBm7iCU",
  "key14": "KnrYqwH4md15uDAtLxPywqxkUU6BayRavy5DTPincmV3PGUB1UAbYUgmcpUB8DYZxo3epBiB94gC98G9Pz2umjs",
  "key15": "2BsXBywTzkPRA9MyAo7xuN8XibrtVVtdFqGaAkY4rWydTqhoJQWQujHinrkWJmtySU7Akb212aeRFKXd8ZXHFSbW",
  "key16": "5FXXyiT11whxQEovj68y3xtJMykGaJMp9PnXxKiZNLFt1M7Lzx6mhnaRL3Kp1czPMzhsVQyHRDKCMtn5DJrhuXse",
  "key17": "5eueUPikFB95CxrcduhvZbPRGikdMXQV7GwsufD8JqmhRGwQ3pggZEgfue8wvZ91PR3LrP5oT5NABxPjBzGP26ZQ",
  "key18": "suXZcGcHCdDyXCeFNhgJHDCQPpDAndTVsAhZ5bAZYyUoXcJcv3da2QcbrkcuebsB5Zyv1q3EupNAFf5Fj3wZHJ9",
  "key19": "5WySBVDW4wo5HCKWcgzEz1xhxwyDT9u75MDG2BoWhTTkw6Tju8H353e263EPLJkPgS6HWWog68y4HwJvNBBNedtu",
  "key20": "2HWRmP14zKgBQhZKAabzbxoLcZX2TtxmeCb3Jhm7PLpUZTNVmhCstZr3FCg5SmhpSiTiZG2Aru3QNGUixytPBDMJ",
  "key21": "2PfKm3eNg9kNsCUkVEMGZtuTmerDH7pWj19sXkvx2xsJwezdmWiPPxf4CL1VMz19Fp3SDM7ZAkC6HgVHahAHH1gA",
  "key22": "2Shm476pgh9NzXt2c9F5hEYausZ82nNt2BNgW7qreTfBRcWxrjnBmqpkhqc5wwrz4dGscuiuJDGpHZGotfn4BX73",
  "key23": "5C12HMW6tFv2T71bpYntiNbPNz6kCUaaU4Mvj4Qqjn6jb46i2fSVoLoD1m43QCQYWbDQs8cD6LMgtVDmnxLiisso",
  "key24": "4eVCQM18NpDpBwXxcSDuBvUTCu2ytZgGDRXvYGhT2dSe6WiGY5jqmARGW16GFN22bV5YZwmq25gBXAK2Tqh8HEiM",
  "key25": "5WbTSjmreLorsBDALy78tmw2JzzdqT4jbFSgXEohwBzwUbwFsACNNfYH349NfVKLG7wnErj8vXogRj9X1iKDbSt9",
  "key26": "4JZiK6ZszuPQKJ5h19razTbsLKMhw8VoriyXxnQtw9o6qCL2W6HjiVnuefGMHxz2GHZP8UC2LWySnTDECjWTs8ki",
  "key27": "cdgzX3f1iYVzQRb9D1wzKJUdkxQgN5KEJPG7w2Y17kjdrbbQ5xecgcfB8PiZsCXVsiKfoGmNteWxx9enDxCLEE9",
  "key28": "jwpjUGJxL5ZQVR2EUCRaoCEKq8KERJWBAvNowxGtpBuWrJDN1hGYNDA5sHVdJ5hbr1bArktSX8oszBpdRHWVw1G",
  "key29": "3Vpd67Ufb19FYmefG77eup7Cbq3ZREuCcZi2EHyCsoc345hhrQeJa6LQG2W3xucGuHdnABAtFfsMzpEEU8TfCeuh",
  "key30": "2G4Y1tXaTfurfsjBWjueiZpFT2JyRoXLLUZjNNp1MK2nFrFo9ZAGBHhKMCsEhGDjj69X87FoExVrgJutU7ZbiFMN",
  "key31": "4W3AJMBwfY5hjXBZuVYpw4Sp8zE4yvpeJpLAnRGU1RorxYcMs6B2kVtKHmVP9NdK5HcM4FNmSKkghjFKwsK5Lk12",
  "key32": "5FSTgwehg98zDuqXWXPEzUKCkW2MAxDLY5zovvFcspxAZUHgsbwavkBtZnkBCuJWWAa2kcXqPX4hGn13EC1tNLnH",
  "key33": "3cs7PrkTWbQC8pUQypFZJuob7QpwQ8bjKKTVfuMtS2PJtuXcmzYw9mxds2fN7KzeFkM7yV4Rxxv5eYZng7UMTQaq",
  "key34": "5Jw4g2SHcdFq1uJnqP1poYAULDCHzraZdk36QhUKvPEwwcuH6Q2kbNpStS3tbVNSA99HRove28sTgWRN3DGBeEws",
  "key35": "5b6eyCG3WHTsZuce8YRTWuhTxhiJHdMxfrZ21yUPnHkqiupQ8KCVZFZuJfaRh2DMYbAFn8XWNy4Fg3fzFho6zVac"
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
