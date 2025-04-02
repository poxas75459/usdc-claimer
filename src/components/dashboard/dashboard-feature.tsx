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
    "8kTaiH4FHKMfD2NcuvzE6TTHMohsLHHNbmaqG29yDnmjuTY1kjaWwYgcRtwmPrpQZLGaYgeZ4N2Y4V2mZGSifEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CxWcuTMuUMhF19bYbbD5rbFuRVuRU9qHg7MuE3Smsv4kn7kDjzfW51RBZouTvuDqzwvp8i4PjN9qi6ZS6bRtfwA",
  "key1": "KvTdPBTqEKBpMb7gp54ymEHooVfhvvHGt9ktF85YxqEAwuFHY4xszQYn38WUMPYo8jDxoDX14sz5jP2s5r1mfn5",
  "key2": "5ggCN3QZtSfpsg6vJNiA3XChV499cEjXnCnqq5gPXdVLeLcGaQKM1w3beHHDiuXHwYXndWoTRR7rfFaPFyeZ5ZmV",
  "key3": "2CmSmrkkRumjBhHyJsRwVu2H28WBk9GNzWapymaZNEt3BydQgWEzFwSAu8pxfMSnDgQRGx9MSpLZYqQaUQ18wmr4",
  "key4": "C28SMf64F4Paq8ttJhjMxWo2EqPT55JjmqEpV49zMMbUrRKXnaHVSEQWEyi5WvRvhBQzyNegpbXrYJR8YM6iidd",
  "key5": "2YC583mCALTtEiKFpG1sgH4Q2ANYkhK59QhGCv4URJYToJDek1gQDy8W91DPTgBLR8gGUPqCDVYPiqcT8LYNNoht",
  "key6": "49fC8MgXqNYLHxPmRuDYs1BDjAwR1rJRXi81tdhYEq8PQiohuYfSN2s9CchAhVPHFtCxpnYsypYsoNyDcisVHjm",
  "key7": "25dMiAeyW2qwz9MqysNo8XSkUfB2TiK6zENUJE45crZhseHZtMKLfhQZmx97ETxpeATWvoApzfmfE3qWCeqNm46E",
  "key8": "hEo4r41N1s6KckeaE81PdnTRmC94TNkoyJFe5cuLXdghR6Cp9DqRuWjwRhb9sT2JprCQUvS1Y6f2wLajZUs1KiW",
  "key9": "3S8fKgEfY1wB5oLmi93MfrxiAniQeB2WqDqFeSovtPQwQi6Sk3xYzxxNHbg5wuxpV4wiQuPRwYzdBDBw94vg3qJt",
  "key10": "5JoVwaGqPLTQBGBniTpr2PuJyxaGTgnhFvYNoZUvv9v9bmwD4MwQt1vP1DFhXvwnVPyEjgH2VHuxtSbcV3BAoKkc",
  "key11": "2p6mbmdJhgPkx7vBezsqgjbAkDU9ryknBkPZGzAyijhWmjtirvhT83SGoqBt9dFPKRwTtfXjAyeRcL9hh1SCee8L",
  "key12": "3oZKDvC6MBKwdFiTguFUcWszfUMU7r4bHXtc8o4xtPS8bPKXXjbDYujHu45ByJPQg3mHm71x4xvzc3iKJ1XFFfEk",
  "key13": "3BnDir2onRNKvfxTsgZBhQzj2x3raTwWdHcFFXQXsSbrwovF3SQit1UBKUw4ibAUfQzDGhvy1Uq8yHnQGWrcQnhk",
  "key14": "nmxQUrN2n3CbiveQLuCyke2Gr2MPNzodkAtsbZtFULt7QC82LyuMLcy5ppBQGsJPABBGqEdd11U965eJTYyDmxQ",
  "key15": "2arDtUHGHSvV2VEBdqHjWr32Xm7XjTZuLMCnFd6seUBD9acfKna4q7tS6He8P3uP9a4VBtWjj9xSu51iV6K6KTxa",
  "key16": "3itSD5sVGdKJHuUCGrTo9QoKc7UYSCoBHKSUbwj9kHR6ajysJjUotojAYyHibXT6YT6Cvrr7qHrLZpyW2JbfT7HU",
  "key17": "2NZCuRD5UaFBcTApzYLhzkxLFjvxGdaFsYuvN7EG1meqVT5pbJnqM2dsWAUcqy8JAnwCAvMu5TosQUwZuEST6Qs7",
  "key18": "3RbCcnLCSoq4tKv21Hzu8xv23urtZF8GYZ8z2VkrdnZaZKxJqtKd5KNNRgPPwULGEXGAEUdWed7TWpYBNrDshspb",
  "key19": "5AZhhB2WBHbfWs432hqVS1g8DhZnJHdwQM17iDs3hUbrnAoibv1hemKGcukChc9CnDAGvXQCNzUaVGvt4Ec9qjG5",
  "key20": "3eD54guCX63LtT3T8s2ctKUX3FGkcZZBMKxodduG8dkQtvZVpa4CyagDDkq45Rd6dsaMrk6cJB6M1R9bdvD5M6Dg",
  "key21": "4F8ZtjaocbLm9UBXXuFT5RGqMFtgz6sA8tya5Vzw6TWarFh24PpecGzBUgZUy7CGeNDfdsp5AqKfG95Pd71K2MFY",
  "key22": "5SdoC5CYfsPdC2P2JEon4MxB3v6tFrb3VDuCh8wEPEXAzLAZVdsZMXAzgUd65YbwC23jCZkW8fWQwT9aSPhHc5fB",
  "key23": "45U3z1hid7syfAkZUPjdPg4LQdRTmQo4SFEwLQZJwXitKKzYim52jDEXToGyBFQMDLqy7cAEnzng81vFEN3aAeJe",
  "key24": "5th5oUtTWC59a9WqA4nAhFYJgGN3SV9rNpnXbCy95Sy4bUQKFPqKr8QebVpxfy5YPMMmVAiYVk3zqUJTu9VTPhJb",
  "key25": "2apnBhYEGUmkjLc4EkYsjEzz3e6bziEuD6unh7MPN2tJpeJBGs8Z6vR3uyZEj26KAoJXisBJJam5DtKigfiBF6ur",
  "key26": "2P3x6hGq4vFwiSSa11n3yKExgPMgn34riBqZ2N9FQVfTYTtfV9f2yaya4j3ekgRGSfxUuWgPqoF2Hupbcu8YdHbU",
  "key27": "2zWDDuZ5A2DFnbe6b56rESRfz5C7SYPPvyZDx5jmzEFMLAQ3vf81PSqQDSG4meAE63ATZngngp1bQJBaXi3jWkUb",
  "key28": "3oK3MFjahmfKQP59mA81DcjhSnuE6bLv96LnErgfyCdvUSdfjCYj5f7n3hSExbaj7f9Hqk7GxEEVGeyKv3aPWjEQ",
  "key29": "2jWrugfaPUtsqngaKqPHonJWYNCT6kLrUVY9WKihkNHoKjqQ2cUeNuMXScewHNUqf3L548MCn7bzjvK7caQqqoUZ",
  "key30": "38keJM2sMHcZi2w3aC8EN2mLvFSsNUm2BfwezZegaBkaoeQ5XtcZeAJJK48sPF6cky9TscJ99WW1cZJv59d74bvW",
  "key31": "4fZ2cXkHhrcY3NDrHdzfpejSM9dSWpwtCnxWHPn1KzY5t6B4C7gYiDkVTa6ht12X3C91LCr3LqTUpXov3VqksNAQ",
  "key32": "2Zt9mvh1u7Yh35wpGfiXzC7EfsShizCDRiuMiSeWFpGBrGbQ9teYpRFWxEjFQuPgXiZ8irH5QK4nQwPi2pr3byAY",
  "key33": "m6pgqe1RqjfA7soae3zKUg14Jp6vnRqP78pLxoCSnaZ5vwHwM77ePzSfC7Fzhnt2J9KUZCbdGupPUyc4yekeJRU",
  "key34": "4fJzHYrpo8Rp7Ci9QT2MRFdyQkbr8BkY8M5YaCSwDxwo87rGZP2p37LZn3kxar6moYcbjg6EV5Xfyi3uje7t1Vrb",
  "key35": "cKJ2k13fHU2ZUshhX2StyzPypKLMYhBareB7nDLYgTAC1ftqZod4MBSpLyL5mZaS4pokd4FQ2iDbNdEpwFSw9KX",
  "key36": "4hg4Q1d9qzggcK4GKvFQaB5L7tmpZm1dJSEtWMVwQToyjfjyYLe8JsTZVZmjPbL9NS9jSSWxyAyGUGUjXw1zGkAT",
  "key37": "3bjYZjrSSpyTf5Uw7ZQmqF3Tp7k6YEJNAiZh9B3nyKaLW1BmpbdEwfcS5oAubRxjNZZhp8oSLFn7zAwAzu4Sau1x",
  "key38": "5oitAkatJr1hGnDc6uRxeursvvLfehoMrYnSvFDYXJGfQKxDE4hPymnEqoQoNhfNiLAVVKywWAsTZfnxpSiiePsB"
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
