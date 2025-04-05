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
    "4HCbtxhao6QdAk1kXjRLYnbT9UJxJ5dUeRxnY7yc1aHM1PuNXK9A7s9aV4tR5vLFQg1rJs5uEKdA4z3xi7qCMgeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSyVBAnXJC3ikRcrNafpohzBi8xQQquKcVKsbWh8dVSgAo2un2meHJFwdRJrr9pK1Ccj5G1XrxdX1XyAr8eH8dK",
  "key1": "2JjtFSYqTSnCGRqMHvT4XozgzPBjM7Lhyrh4soo6CepYdth7prjXTDGKqA13FfQXY4fMKFB8HTTLxfrqUsvwfUJL",
  "key2": "4E2392RHMw2JRZbHh6566KrepdJxtPpjDMaBeidnY76uoLgLEibwbfLpCnAadLFNutLt7yX9zWBop2f8kcdM44cd",
  "key3": "2qwhyTUZ2kty5qzXiCduU3fBTnWBJ8csK6gdD3eGcBvzp5q4Aw8nWAvHfyTUL4Krap6genjkgz3AJBKaj6qJpwfi",
  "key4": "5jRzPhMieHUDEPuo2YiJ2xmDcEHa53V6NvM98XJTTBsRjVD37v5C92yd2VviGM6eyCaakfNtu2ACVzuShcZVDJet",
  "key5": "5z62aPiGg1ihqMAX5v1LSv7J3iZDyken63rzk5A7jUFWvWjxSTmcQ5kqvizdYsaSwU3BL4Q8HrrTxgWG3qvET6NK",
  "key6": "3XDmeaJ1VjAbJs8BVa1CZG8vCS7y1wEbynLEZSiBkjWcSYgewhj4qdLpvGHRA9DLi9qBXYXgYnrg59jPVvpLn8Uw",
  "key7": "5fAR81ejanfwy4VmxCL95ZEByUTQfVw5z5TvCwBuZtw91wtuHvHsLAGM5fLDLPBzmWGv44K9fMVfjqjea2ACjHnm",
  "key8": "PhyqSRhqn1Kc3BgV7QSaUSDvB4cqrRtjiV9FH4bg97bUfDJ7yY8XS7cMMFpKKhLgFJdLH7TBoyAESJG6mSysKp9",
  "key9": "5uDo6G5F6TkMbtYhXnmi4obVz8WEZhq35YqYKA4r4BPMMKBmFvec3xVd6S4dt9rDCASejbKvpzLwmipd2iDe67AR",
  "key10": "5yHWV8xJNNo8gbnXJEVXBrm2yM2Xs8sPTKd5TA6xJWEfz7NxY1QJJ4fMNzBLWWrFd4y6Zx6qgmWExYDMkARoPe1G",
  "key11": "2jWRRbH2QqANks551RWMUCRetRFM4m1CAF8jxEjNvN2ggZqBEGeiE64anfg1F6EE35mvn8sC6K71QzwN7GrCwS8M",
  "key12": "AE9QSgVggafbNGnikjzq1i6HSjXgzK8rkt8knRoHeWG8qjaDU4bPb97Q4GxPCc45WWAiCcEG3ENTRuc42hEmfYP",
  "key13": "5yoUngcmPXE14PSXCyAdmT1JUVwQadiKqBFy5SokRX93qHBn4DHq3YbGhCuddXKmcmYysXBHZFn44BUz22zx81df",
  "key14": "57kY6DhnjNL3iWqbX1q6KhoJqdAVXWDH2L7y1f6ufgV2ouBPEyHE2LHa45ZKfW17jmGGYsJWy243fhswP5E1Vb9A",
  "key15": "MiaiD3VjkrViVXMrpoioQZkYshJskyjeBKHdU4pu8yMCFoDMDwa1UjD2H91NvthuKhswVg3idnev8zryVADpUqA",
  "key16": "21KE7XRwZVntrDVLSJvVum8LdcqSE2pVEm8sUFFhXCe8iQJbWuMbmpn7MoY4KLqCNrkNrMqjKkymAUHr2zCjUTAa",
  "key17": "3Sg7vzjgRL5RqL5GHHFJCfT3wJ5ktvWL7uP9dzysuhuBquE6W63AfeQeAMM4YC4qoHM67pMMyVbPabUWuqATvGnC",
  "key18": "5bLSvqDkar9j7QSK7df4ZscDWQ7YKHAUasvZb6oLEe9z6kLKdC3DBubRuU4TTPFUdfPLx6ywG2qKWPNCT4oEgxsK",
  "key19": "4D3XYAhKXY9KtvGdzu3P7S77U72KHFx5J4iNYujTdgAWCp2D5RStM1DbMo4uF22T9RCdSRjn8cDzwMDaWbBQYQ4t",
  "key20": "3PxVceZwVNgsugYZYr3NrxzC9gkgrNDfTUNLfgtoWuiER61fn6nnj5NnuTHM8jEwrweRoLe76iRp29pZ22jDg3QH",
  "key21": "59sgjGTEc4B1iEQoRuRUN1xbpR5DADdUcoJK4pGPLAmMqANFUKYWUUor26RrUHRxHT9PYLx1kb1dCFdZL4YjqxTf",
  "key22": "28aGK7N3JGdFe5FUtm9WMot9EgMGYuUx7MjDAbTpPMVVxawXv6b9uKQ8qCEJvMHFr9ceZBUsfddRRs9AgUDEn7Tn",
  "key23": "ir8ds8qwjPmtTLHTs9vm6MeJ5FBvToggvFXtjExDFxqehmFvvoYFkxTMprgVjC5xXzcWarBGZ7FBmvcQF76dum2",
  "key24": "4rjUuo7PpC59Cx2NVWUXNBFqVdebD3PDLAraXgPpujXhzBphz2yVzFNPPBeBpxepnDtpx5S43wN9mFV9VtNngfd5",
  "key25": "3pJ8GKwq5bBkJPPNyfsp76iJvucbmkEKHaoioWJN4jy3pFvbVm6W85r82iFFRGGKfUwpmhLBAQNyvgcoKtPw46GZ",
  "key26": "3EP12gUDfTctdqMtHTZfB3XMopXYZh4rDjyJAjvxU8JF3QUQCuZbn7yrEjB3RhEQSQnqGmTH3jFikgRy5Q8txTCG",
  "key27": "2HArainhVpfp4q6A2Huh628Lh1reKoaivU8gZWojdKjbMK7MVn4Q5eFHYckd9KeMHZCu2NbjhMEyQMaDz1GtmJ6a",
  "key28": "53rMLnohTT8wjWD99mVWfGghrSfBTUPudt55PTJYb7g1tJ76VNuCUwNevvFxD7yNLqzg8HvojK2XUjwmyU1tEwFN",
  "key29": "3sRwztfYXdnxASd1FwitL2Z8coLYEBFp1QUhpDdf2aj8cSE8Qz5d5AJVes66iNdMAtnFjHSpchHeUuL6q9P6payc",
  "key30": "E782WxSGAgKR2YCTFLLaZZm5zhScJU6uWXPnDZ4jTshWGztfr1aL6hZS6LCY4aWaiQh83M9A8UXFeyR2eSp8iMe",
  "key31": "hGcL9vgkDKyFvyZEudk2BoWeRKNTWFsckDbn1Ysj7iBPR1nkji5g9diQEozh7epYuvkwBjT5AUBc2CRgXVwZLEj",
  "key32": "3tGhC2f5F5DhMYcbNrasBKen954yTufpVe7n82FjDmWZyZ6RggUmUceY9EabiNEa4BNDQGSYM1DaBvCjbVsYF7ZQ",
  "key33": "FiCZC3AFsmGasZpGnV5uQA8RzvjU1DjjQariFPvfkcGaLDXCRgfs7p9DBDvoMftexy4mVsLBLmyWw739feNrCzf",
  "key34": "LKaD8FMXBavR3egGq28xNbpKwgYL62frveW1GFGKEDq4rdVKFdRk1nJEsohkNqw6PbxDCrEc5kbxmqUNKMYnQMd",
  "key35": "3XrnY1qLq2nhxt9TSYxbduFqZqoGhQ9Bbs4shCak7M8ajckEAnbx2hQEobMma2j3JQHHVHp3AV9vr1arUP72GG8w",
  "key36": "55h97CSkzwJouA14kmVuwCccfoaDNTeu6Qwy3ALJDm2onh45FaFxz68UCQEK9JjY1w93UVizwZhFb8pMmcodkXD8",
  "key37": "5ct8tbUgaGs1oLFAC8jRR3osz5pMuT3jhZZhiKRkFzH82ujZRb4Dr6S93VBoSokkLi85pMGQHvtfK2XxgJeLAdti",
  "key38": "3gradVcmPKxEUYPm78szxVd3E8ACqLf3Xx3FncrZWXBLL2wWxioeN2bg9CsTp5cnup2D8hyCnvuEWUx1bvkTN4fd",
  "key39": "34QWWDyqm7iRnxxsYxU3rMsG2j3f2uZAvpCw8hvu8rGhubvU58LgzuGGGUDjYPAS12dVvkQGEQdxCcqMCeYXLPeY",
  "key40": "2KjJt2Lv2WuETZsQEBR9YjT5568jrfMo7Q5RtnES9sGmmUjNazGvKzruio5nBK9hVFpSdh6vXTHPpQ982QqbFqpH"
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
