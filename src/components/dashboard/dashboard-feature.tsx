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
    "ntrnupTiAmfvwFyQ1ZDpJLfed6yeWkqXmUdTWFi3aUsFWuephvauu8urKkTXeHwuwC2gbRbpnPof47V69pQ8j8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hguuYD1CmxqSSpw3AMEiSS5iqQ3E93Rs1vn4fMEpvznmLJS1E5kQCVxTsyEG9woGA33Hg6gWvRUrBBVkUaXZPQr",
  "key1": "r5jiTUq5qc3kLFtDQCQZuSY5sSrh8cfC7ZEkFZ97dzFKHxcUHRbYJHuuVKN5UmDB27hSRQZLMga2aopofh2sntA",
  "key2": "3kfvjJdNRkua8w1K4sHuxNYCrG5BYnHdvtgz8AN8KtWEivhGwJpwqRb4jPKFsuojyg7hWx5yuRJdgLNhazHHqhq5",
  "key3": "3XHxxw4hfrDdHqZUn32AfJfZTDKhLVc6aFPnKkuYciBGKZajWMi1PnCHQtZfxAATbLA61xDXgYu69uoqEEmZb9KZ",
  "key4": "hBikjN7yUyZ3CmHapyoLb8AsxrXjjLu2Hg3g79zDpTSCUhKHWQcVAhWpzWAPwdMSnDFU4PSghVn9QQ5Hgwk6aV2",
  "key5": "3Uyt7xf197N3sHxZDkkDsdNF2qQxhctJq91mJenfmqMKKWQim7Yuvye5VxT8bC52fZCTqRjDbbK5TLjQifWR5Y8q",
  "key6": "3AP52R39kQYS8srqmrmLkfaRapTwu7pP2pHiMXHx4KLPGHDtmphXoHBhXWC4SPtSKm7CTkabKjXusdtDBQeNakLi",
  "key7": "52EnkyiKikVkeshsGHERG33BXABAY2JpCEVnB3imPGhd4qpVT8aaQ6VWcwQpBkLCyyHCM3SpJ6FHWh7Vmwep2gvj",
  "key8": "3nu5dksCxAM1obwuVMd39qDsJwXraoYSSALfcWTLmzAfJBzZVWKH7nXHcGw42BUHUWqmv4cXjv8ajygW2AzFqVda",
  "key9": "1mV3Jbm7dFxcwFDbjVwcb59xzEJsnv6cFWDsBU59ykZB7YEZdANGZUNZH5nHQ86W2nfnDhU4tYyVvFAKeqynL8J",
  "key10": "UVYUkb42TkJ7pVHF2uSK6icCzkw4HQueKGdQvVA6wCt9dpRRNbwQGyhqzL8HyfXpbPr2YFzxsKPZ5snobk9yn6k",
  "key11": "3cRtALt3GEekjCN45dbsuX4T4aec7bqz1BDvN4M2bTgAaFJZDyoRuyHnYzgr86EfogwQbh8gEH4eMx8dBFez3fQc",
  "key12": "4sEnd1cpU6KRejyRir15B8GFCztHLUJLBv2aRMxZooxYoJ5meRUi9DksfEnN7f2mYjFWnKZL4L8EKJtUPubQTasM",
  "key13": "37irP3QuV2PrWeNVs1Xe8bjgFMoM6jro1PNHcAaTp5ffT8dwVZ76ShsxU4bkQtiKK3sSYWvfvecae4rYCtVVNeK4",
  "key14": "2WYQQEbaFTFhTCkL2a4dD4niaWUA1svU9TSbWzfzNYt3riQnRhXzrGL8NPHrM18hBryLuhxLbvL9nj8Ngzt4tUoi",
  "key15": "3L8ySsk6fzb8GerWewjCnxRRUVVVh5c5RZH5qTev61TefxukNypruNVc517rCXXaKcErmYgV7jKW2HHJTiPLCmNT",
  "key16": "5zksF5gmwEJmZhL8jrLyMQu4hSpbzkWkSm1sAFWarUmZgQk8nkTQ5W8BUQavrEK7ZLukMrYDkc6mZQRFC2PRm5me",
  "key17": "xpwxyxbKe45zFaLzCAZ7eTUrMGYa3YBLo8Pvt1dntoDg6n4Dqwj7LLX8VNA3BEYbbtZViVjsbSghyQBHyVBEe8q",
  "key18": "5x4aZjHAmpit2XHTXDN5qMYMcQqRuct9NWaKTSL5C26t4BoRnvo4XBLHK468cuTrmGhc8Y6m3M6vUkkpac7LFWgk",
  "key19": "4ddsu3Eo4jamXqcwEVPiwZqCT6vq926PAdZsEFjNyGwZ7zQih6zccyTxULUUXG5xPWDDQqSXvG1XxSDNWa3rAZk3",
  "key20": "4CRx7J9Bakd6mEuts1AGk35BgJcwXRb473uMcXFr5ZpVaaGjcwMYj9abfCBMJ4tF6R1jJUKJoHvDaNT8ApE6njMT",
  "key21": "tZwVvZrT95fieFcjrRBdJBLdUAfntuASoStL5HwR7EqCvhNC44pRNsUDpF2t1ihRXxiRuYMRt4GKYRw4yDgqYWw",
  "key22": "3oYcJ92biB3a8yTXdjwL4MmEzTu1oR3J3FR4kSF9X1FuzsBdgmhiAR1SDDVDT3maj2ezKNbCvrzhtYUQ4U49e8sH",
  "key23": "HxHt7LEL9Q9AyZVJQLVVThMAsLjA7JQssU8TqyVBS2exMUVnqNNQGfKND5oavzHLoRGM5YKT8GsZ1DZwr5Y49W9",
  "key24": "3UXJxbX9D1qj7dk3b7P6xspiBz1nYpasPnW7TvvAMH8XrGYBYvyK7pdQUJ1gzhX8UFHYbZPa4TbFxjuSka3Hqhvd",
  "key25": "3NVqF9CvvZyhnaSaME8TXi8Hdp9rYyhY5Gh8cgVEHqbtXGRyi3qJPNji38m7DVonLaP6KLof1msP2CQ4oSBnBgtc",
  "key26": "2Zou2GW4LpDAtzMeCC2dmC3ZgbHjFNLphwSoCmtyTtrC5UQk3GRSStD669RTtmTrRn2gHkpRHpJb56XRnNB7w7u3",
  "key27": "4xbUfoxn6aQcH4DyooYf7f8jMESeaAX7Y1Gc2xoV7f2TmHe6o5tiHJdGDrT7dzjdQQDr5dry2Ttu1k7pgjSgJc1k",
  "key28": "5kyPg5xd6pmhBSXrXy22zRtFsLa5qbUkndVJTJ7PrDoc98khxjGEZmN3tTo4oYqy88NqGmcR7qnjgnL4t2vPLBLi",
  "key29": "2ZVTXnB6Pyuxygaux4Db6jmPgRDjXxrCrziMMo59vSSbLThRJ4ryPjbr7skqqTcv48WNfrGFaQbqkTscaS8PbP9v",
  "key30": "2LgywBJLX8kzFpUvYCxi8kW3AWRS5L1ySqQcoWATfLUDyLaLKoL7bhoLgXZt7v9fy9MxCXexTeUXKHzFCCMM6EnP",
  "key31": "34D9QTcTb9ELL95HvzWdVBGi7NsdxLs7TGLkFAG4dztJ8FjbGa95JzbCNRbWqG8q3vLmKG4kukMYRHcEp5egYqx6",
  "key32": "3TwMuQ6CkqDJx1rydmgQViFQEC3kidWFvHEL27Mb4L8jsXir3vXfkVqy8m1pRkVsBw5X1Bz7aYyGZ7Us6cxnXT4b",
  "key33": "2MResxaonoLPdavNvd98EgDGF977uTQy9prLxMPmixytY3VBdnFfttR5ydMPGGpLKfkJBB31QYNVDrb9iH1pc6KP",
  "key34": "2B6gPJNxBrwuoLgHnd9uEacq31bc4qK86G2BJndDY6ySMgyQKgdxaA3z6KsQV2WnSyh3YHCKgdk4WpbEnnt1Ei9n",
  "key35": "RuckatDm97Ne4EWHi9CpiH1inxdoj7tEZAQ5nvkLGtdCWgVMqqJUbxVMyr2kL4iPbc8rMScCiYJjXCvxegamrvG",
  "key36": "3NqhAiHzXFE94HFFRboFnrE38vuKT7ancXzssr8Ge7AbCmWZTiJ1tPKMJLLHgHo4CdNMFNv9TGZSvEAYSqhcrjmD"
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
