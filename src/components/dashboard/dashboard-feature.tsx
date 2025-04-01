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
    "Vxawrn3ZThrb4FwmhfGYxvzXMaR4eYLahk9sv6C8EHDZ1ptssA2GbSJG7HGmLgvg2hTLtuxWtTT4tnMnq4kDdyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJVK7DmNrZfJJxFsmtgYViE4fq8VUXSNMAGzaRjbScV8u8nhA426VVf899GBXMkbQq7MBBrzGbb8og5G6nduW1H",
  "key1": "3XxVUDCPgFrK6Bof55fF9SdMrBu3X2xTtCqJ5yu52zC4ZNZsb8rRtseyjJAWf1FG3wYZgwbmuApms3gJdccsftys",
  "key2": "5UREJp8xczS3hFCxRpsRbANedSihFG1nQNcSJpfNrskF9WWzrHrx2agAthdT5ZSJV5SiiFBPv2RD3y1EmyEhEt7r",
  "key3": "5vpHRaBpapTopZNWZWhWfvtm8JWSHM9iNMWiXjX11vBDmTfUCbZC2gG9vkPSjNGTAaxPc1yiDcWaTsDiAPPVXhPa",
  "key4": "2FgXWaXNQEzoRS6484iC8Y8HVcpyFJxpr9jP7fn7J7TC67CCk7tq9osYVv5dEheUMRacnfp8Vdezc9rHFgaW7Xto",
  "key5": "42hoj7cvGNFjNJiQ1g7VnvHQx9NRFqyW4rJGWVXkQxLEzoBZFu9epxMsrH9gWAYUSzAnoiWtgLSHnTkBwfGua7qD",
  "key6": "55RVQdxoA4UbASDC2Ygc953f3iAMMnCWznueGsW89Eu7tmGLco8JF3AE34RCEq9ajQPTtCEnYExQdNt7yCsRGWq6",
  "key7": "38R7dc3vGWtnpbAHygvaYoLbQkLiZhv1nfhyfLGakyMoDt6HNF49HfT4NAWTXx6YNJGmmwNJ9DGkeEn3xdzLSCdF",
  "key8": "5TY25aQtPGqphL6fGMN2Cj5WUCPmiWbjfXD6Pn1EHR894Lty2smqTDtgUcQ8CFK1jKxLXwNSiB2BtjmsKGAjLhD2",
  "key9": "33jfST4g6sztFfkr11obB5LNeCoHhxwqKFmdzmwgr1qQZKBhVaeQc22BgWwsywTR3Tti5ZuehtsFW8eXjEhKPP1n",
  "key10": "53yCyVosRpqCoMG1MnsuVUTs8i9sQatTdFMNqM75ctnBrXiqzqgYaAKw3oh3Yi5NdWF234oM69bL2Bi3L9DV5XnX",
  "key11": "4HbT1sgmjqDgMmjvSNCcrt2DKrqoVUN6PRk4Qs37RKH5GEK5YdqJj237zoSycgMP21EtdzytoBSLpqrWK1tGMaJL",
  "key12": "3b1Z99Nv4p6rkf7Yqvu7WRqFrNxJhhfWuEUX81gaoFZr9PW77gBiDtwbb5CbKNLdriUG7uPzG6XvRDrzCymYK2py",
  "key13": "64WCeLVxqCjwJQzT7WWsqTverHb7DRWucqkjjFtWeh77jprMKocMTSD3BqpHZpEBW5DzwevKbTRtSeCu7ncSgArZ",
  "key14": "AbaFCBMZhHsoMifRo8prhfzFcKzd6Dsbg3Yutbpsk9e4WzJK7qtCyjJQwFdKhXDmCLiaYMift5Sbzre2wn4aPXN",
  "key15": "4QHujVfqmSLLCcef4z73rvn6T7H6C7wK62NfaaRe9SafXEKrKbLp8JjeMdYRGpeMxn9bcsuKStiRbnEb11SUF4Bn",
  "key16": "62CuWySARkaCxoi4sztNqtopkxyLD62y6qt7e9fhFTJpNur6rVg4kF7D1HfutjrP3wsfEjbWPdrCwu7gNTmCqAvn",
  "key17": "4eSJvYShhLDDnBhYhCK2cQzUh484TesFsQrYYzsa9RMWGhXt28QrCJMMQFFFzRjTihD9P5QRGDDPtDxViRxMYHDv",
  "key18": "pW4pAkz5Z9ABLSmSbWGYwdhvwSnYmRCBLB6ofJMx99XQmMY1799yGXW7xKy4YWHFcsLSf98SdX31aJdXG88eLf4",
  "key19": "45DGGtxTZor8mWU2mvoj2TxGNzazhe3Usb2wxQjyq8buEfhnNPDzp8QXum2gY3fvTb2fVktDVh4faUfVsWt9zio5",
  "key20": "44S3sC5xsp2xnr9ApmRFxVmx3Do8FpdPYjuFiuxY9QwhkxsuLZpuRMiKshRDxbzrt9JyF4YDMffNw8jCg3uSJQqM",
  "key21": "bgKRXH3fai2qSdntmekFpHqWui49TkrZf1J2gHDBR5qebaeGhQeUSK4DMDs4KxEKAinnUsn1Up46m4rCXmSG2bV",
  "key22": "ML73yKf39hCzf2EuWPR6oKGTQGNZmpU5dUhSLiLDSTSRq3WMZc8Jer2KBf2j4vaY9DDBUHXSisMVtGD5hsaxs8x",
  "key23": "cz2KmJfBjQccV4WxZADSNxATjX9oLJXZ3fC9AEQrjVJjVsmyXMHp2H6i6hnnK7rPiUmNqwKXd9JF3mYxt6vRzKe",
  "key24": "2wWQYqu9ukiobdrFrRF6FTaHNnWLEouZDGhXkScuEQQ8RdzYwrWHm1fuDnN7jZeo1pn75t8DuEd9ZgzG4fWLvxCQ",
  "key25": "49EuabpYhAs9w8HRUh6iJ6A6nV9aQYbGZk99CT4JynCW9PwSjXKDVdMz9xBFKTuuBNEwPxR3XFz7KtaEavR8arMG",
  "key26": "51m8yisMCkAhciwaH7RJNJs5KLcsnuPjTXXHr4EM4KpDsL6HTBGchjUK4hvi5KMyoPwsznLZJWjDhD28vvMaQk5q",
  "key27": "5NkkeA31KhEmmEhvWNuZmxiT7FcyyVFdLgqHcDwjnxbgPenibGdUezYnWFgsTdhE5CHww8BfiCxWy6xJ1NaMAoVB",
  "key28": "59hZggLMAQ6QCPiZ5XKgTsx24em9u8QjhtdaMo5Qh3FzJPurfLELeXrFGQeL5o3wVPT7Ge26wXspj36j5iL6ktWU",
  "key29": "YM462PLvzrjxq5xLauwzWcF7HThYwmAasYMBmMvtzKatfkN8YhcJa8ahYCk3wRBKi3y6nwXW99o6ryLw2CEuS3e",
  "key30": "47WEUHAZ6d1o7dhtqDPBpFDkRrQoywfUJmdKtjUoP2aDibg4YcDUrJTmuZcKvn5mypaL66jG2VSaNmdG2Yd93Nfh",
  "key31": "5HwuS1PG1YotGttCCHCFHjwpusFgDnpQs7VujwdXwLXGVqxDqy7jeB1AGXrtEM1KoFK11316ypW7VpEWkdWUFVve",
  "key32": "2ncv8WE4ZP2a6T7MAeYkvhsuB8JJPVgKRvkudQyRRXQmMuMmLUriTnPo5sb89ZXQnRnZyJbK3HPC6wsZVL8xFpbT",
  "key33": "5f2yG9tko3gRmuLzEYxLmCJu9TSncFhrTEN4mTGCxN8ApaQyQxjfmT13mF8zHcMRpdqoSPaw6qpJUXQzsJ7oxcYk",
  "key34": "3ssztwdQvShoSq9fFu5p5y6R6EQWoP46gf6NkVNSFcKVg2axe2HEpNYuzDiFC8cha99JZLhCXyPiuJS2zWW8e22u",
  "key35": "4qcjd6tAV8213727P9CanV6MRCwipsoHHxwi3sWrfsbn42MjmkYTEh5rsru6RE26UUUEyfdS7zk2NRTV9vHTDTio",
  "key36": "4Wzqsc5DPS8nZvgr42FeXN8uhTxABbPEt33cRv5vTMjAdq65deAKb8xR1YPFQavZgHNua3vhAP19m5zgAFm6Rnam",
  "key37": "4sJdvFSPhzAw2BAixsezF8pk8HVxR1bwErEfLmdGdFbxsCJ4tgnbecC1vY76pwGLSxpbh44PNZJ4U3X5zEAm6qB5",
  "key38": "3uzcD1Q4gMXbFsZTuEketJwxFxpgzPRquBqHdWUtKde3yj11SChXxtxFndz4osrdyZjU6zqzKes6W3tzkd1iCzK",
  "key39": "2isRsgaLcojDZrXyppMY5kjmxH7AV5SUKh1xGEKYYbGUGnq6XBeSHYVbK3PCrXT2SrmWsp3QNYeaMimu4wqkDoQq",
  "key40": "4cmNadrm6yoRQ2F9ZssDvDykX6rpwYtPhTHXcorAiqyGqzJ2H5cSamVCpqpCQH9WDGVMTd6B8o8f73hhADYaUsbN",
  "key41": "27pNHTDZwarauVRaF6ymFhMs2qaWUosoo6unynL5dtvQ2ryDLk8aMwRHPvPYcR1YmbLPn2pu6LtDHzEs34Z1QyCu",
  "key42": "4be1uaznYcoAAtdBsGNwy9WzrAsQpGXMfVo5ZmeZVTAr31UoJeZejHbWGSJvwbdgJ5yz5G2wwVuDbsUK5eo1h7VN",
  "key43": "3WbdeaWi5nUNi56HQTQAacZsiGnZcMMCZaVAbhzP6LTDiJVmYwHpGjHjNaaDNbbFXwBnx5E6qu45gJsYfS2YiaWF",
  "key44": "5zikp1ySGYcJmnZH8njYBnL29r4LWjQR3hpxMjNMHA45StADgNjKQnbWMTkjbCdyD6boD6WvT1Fg4ZwdXF3jbQSS",
  "key45": "63FF77rEuDG6bPE4ctR85V2EEAieEw7uVvfPEJedBLjGGd7NwNBPJKRcZ9TKgweNcYVZKkgMQJNgF9CBJ6CEQFpK",
  "key46": "5G1oWbZ8Lg7bvp86uSRwAYKR74jDGeM3WPGXAeRC79hbYb1eFjSZKvkLqvcJA9w6UzpLFMMQf6U4Acmagg9SujPH",
  "key47": "2roicwQChoBzsw7xefNxteXYQBSGUg1zfEY3vZM5DrToHDcL4Pgd1wsGLQJpKxLqDXjmozsZRbmDpYHHSn1nC6Zg",
  "key48": "5pgPtDZvEK4CyWUiT51mk7ypD1ghmgZDWqcrJrQ1p1UNxPP95RzzpggchUoBk3bSibiYeKLe7Jo6uL3KvNWciW7F",
  "key49": "38HSKBSQEG5swsFR2hxvYBAvjHcFE8SdsosfTWoJJ4F3o6QL7oUczSeDs4LUScHUdg4DC7D5fA6D9AVPQvQtveT8"
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
