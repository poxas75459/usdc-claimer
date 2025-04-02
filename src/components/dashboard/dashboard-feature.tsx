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
    "y1tgR2WM1C7UuoxZsona3jaMiAFecyuajkeAyEbYt5Vo39P8NcxtzVNuDATEUJCKPGR3a4Z5t8w3ZoRiymyiwuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tzcS7T8ck3UzSsTJXzTZaSGzYgvhLfgaAqCUq8eQXwfmPP9LZz1tyAPxW981wS6sWytzYvDLu22XgntdXEFQdn",
  "key1": "3TLyNfj82rGCR9vykwJNshZqK6hKbe6prAanTjfXNmAEn6kpeMegqq18bnssh7YFGzVNMT2ACZXArNMiFjLvzpr",
  "key2": "3YSAXUGKdnKkz3zzdTEVZKm8JP6G7tYuNnn5bGThNa8ZBHgf86hDv5PXkjgPQEFQrs6Busq9aPNybr6cAcj1wq6E",
  "key3": "5PPZ3NsGQBPJ5DqXyEXiGL4bBW5QZpSiC7E5ZR4bszG9PMAM5SKMrmATNxeR9NS2hqqXRbMCyfrRcfCwNpjgcnRX",
  "key4": "57fost53fJriuExcpGzky8Ck4kvp5zhdEcXijH9Xio3fDRvYyZ5rnzuEn1yx6RrriNAooMTA6f4woD7XuXYhxEQp",
  "key5": "4P6Ek9yJdiRUuQvFPcNTnJvQAEG7Wk49k3LottEXRP5TLtHKXAyZ6RpAYT5PNZ2kQq4TSHHESShDhJk9GFNkTFsJ",
  "key6": "26rP43jbmEj77SK2PGH1TNS8Ugby5WnTopJTi5QEiYHxvMqyADcfQQ5mWHJU7w4QXk43tDJGLhES8Ed9zDfwDiUN",
  "key7": "rpmFMGgoChi7Z2a2B9qWTy9hpXrU6dLt283ne8z8cWQSGLvh4safVpPpCudfEzJE9mR659hDripnfMZYZirvSZh",
  "key8": "3WXNjeAK5xge4mHBwBwjExn2ASKxmwkxmXMgrPmGW6x6ALX5WjGH2U5nRQ2cGPjonoCCkwzfbAUNtNw5ac5KM7e",
  "key9": "3PRUEmmBNVws4R8qgtj2LfA6ZRi3fFUbFAhtZbTjnJHgv1VSeHWCzRZJNabQPNBmb7NyaL2RYRjmKTSziv1Qx2QH",
  "key10": "62UpJpSLS8oEanrtcXccpFM2N7nqazyuScvF8aVkKfUk8nXi9zGgPGvGygpcy4RYiWQUG21BBVKMza1s48RAKP3u",
  "key11": "54WzVpoFz9Angfu1apiTrnbsDBUveKjq3skF4m5jyDdQpy1wG31KkBujjDSUPjEc9yWD67t81Cwn59jww472JztW",
  "key12": "VBKYtZFbfCTLvfCuqH6ETK29iFTSJsupTkhQdu12ax7PVnMj4SoYLcGJmkgRaU7hYekkduBMAw1yMWutu2b6J9M",
  "key13": "4U8BDi8RnuyF8DhkThUPXYeicB9A73MZXug2FGaBNJDsSQgUHUHaDrVgKTz9QqmRRVPC4gsYw3YkomTt4GGK8h8N",
  "key14": "54joYLNsXHSbCuWLaAbs85QBr9EjXdJFbzH8uY8hQdiFGfAs7qRPN2dYWEBETD7CjV48hNeT1zCxyTuRJjsDFHSA",
  "key15": "5o7NAxmexvsh33NQEostP1TEDEaUq7TfEHzde5hnEYfWMv89ybpiwjwezhd9qr4JGNirhAQwNLt2fvS5GWQ3azJe",
  "key16": "38R9pVowGMxndJk93jRBYQFw61etGhixRXfLxyzR7a6sS3G8gF78HvfZtUyPCUhU3qThsCErj3HSnQqHodknSDxT",
  "key17": "4A14GkSpXEpkxfgytCkJXDooJ1ZNTTSsVLDxHbcvKPcs8a4akxFpazrX1HtKTvHP33wZXgcjcd5QsJX48NjQqN6p",
  "key18": "N2wHjCQedRvYkeZds7moXCt1i54n4W5KGLjDF4qjqQ4r1QsjH7xcChnJMim2PfZHGkXuXkm9Frd1sE5dEEMDjV2",
  "key19": "5vK5zutEodeF5SUdGVfwx6EmCVam3iRtZVtLBtGXnC2u2jwX86W7iWYgPsSr2xSU8FxDDGk2NzC6nMtcScN1iP7Q",
  "key20": "XEqcE6dSW8XngxfyjKHt2VNuJ8VD8RRQjXszzZf7tVXfarurE2bpT6WYKprWPrkfJ3toW9FN7pBsthELwmWiqh5",
  "key21": "5YsAhr1NRqCEmfA33AdLH9yUW5Nw26hNc9NxvgENcoZ6Y8JT97ry7fELoQmT6RtmuW8sh9J358dhmQdwpdHmFUFq",
  "key22": "5FrCkQ3MBVDxDLgLUKrhiLFhYsGoLUJaJkEQ3x5kvQZBx42YfdVjpVs8HzKTjeNo6YNGR3crDh5uGMYCYjw8F3Qp",
  "key23": "3NYTWVxefkbPUDpiGafL9LVjUQhmApqcBvkt86YcTLxCGGiGAY6vSym72xTsuayMkQH1dgt64zjCgQzcs9nKi4DV",
  "key24": "4MLBE9mRP1CxSxW6b9dvZZPrb4vcWBBtz8KgFYeyfPSnepEpr6YPhVauVVKXvqLZtzusvqu3Ee92EAPmUcMvinfS",
  "key25": "5kRQPmkSZhDAmZ7Mt2hTe6LbnTSEfzVhFKgrmsSmsT3ZYTdcCqXeSgeGMGiXmsDHhykheaZNUuN4tiuDMnwuK9wi",
  "key26": "5fi42ACV97RgAxE9N1nngqNH1v34ocdjqbPrv3JZoUZyG7YeMCtM8XvNCUJ99hksBsu4VUwHFfVQ9RVG3KYGtkEe",
  "key27": "2ksY9fmLYaFThRyowVdd5d2BoMAoWCsEVsS36U2ebpm5YWCiDqt7jUaRTXXLPgCtcHaJrmVitn5B2mEKywjCiiPM",
  "key28": "5jQUMgmnU8eS26xuTLe94W329R5Fw4kqvJWpGZrZXe8rU6534rkcWQLvwFdL51LRZQjSsNFvF9T7SrwzyYUvcXYt",
  "key29": "2JpQRqXVcKCdxmLXHxRkwhxQAophgHRd6b7bhftwdttgVv87KAnxdXgdtqt7QgktKNRwCVx95hwSPdCx8RjmBi4Q",
  "key30": "37w85xGQy4osRvkAde9XSf1rpex7ET7wETGV6PzjJ9Hk6wqmDDj8jqDcagEJTiU2GFyyjTy9AW7xnW5XUZPGysj6",
  "key31": "3zaqhMuuAyG1YzpfgVNUnZWuFyTsLa3if8pFCnsPSZ1u7mg2zG1ErygMSEPVmaceG2RgfzeDQ17pVZsrVRXsTFju",
  "key32": "k2KDxvymYHLEbT2r4winSxc1jhnteh8PuiAbFE6A36nv13JH7wJPSQw3NM6dpzNFBse5cXfTFKqDDTsGku1huPe",
  "key33": "3iJibtrL8poH7Y8pQYTdDCSsM2tfgDXZhitr6ANj9Stghiiiatbw8Qs3XP7wKJk2pu6XxPS9E3FHpx81nbHofPpY",
  "key34": "JsZP3nV3RCyyyG4cXMLotAXafwBseXEXMCxrcAUjRA959FBQ6vqmRfWHprLEf3XSqygwJz8ctyd4r5dsDzcwTpQ",
  "key35": "25upEmw5tVf56tmuBVNag1ku4t9j4wNazbnWQF1SDbHQWbNHVqa76APYU56qKBpsReTkdXGusC9raeVixyCnBJr8",
  "key36": "4H3nQkXbkjB8cyPA4wb2HtYCwgKw8PPTSDCHgt557KGRAWsgEWdLwSD2KPmSi7XqJfMghRbxxiUqsm5GpcF25kpp",
  "key37": "2CjsVyUpPUb7mNApZeerYZ7b2doQcSAoG4TUoSQcpKC6EM4fU1WaekdbipZ9G5KW5HqbERgJRuN7A1RuuiSXv7it",
  "key38": "4JSmpkm4mx1eJDsHbJMexygX57GyLZG5nVKU84517PFw2koDBVwMVgUNkabnMfGQX21TG1MJCZqcWczduY47sxuP",
  "key39": "4YAFtXoBdt4tHuh5nAaerF4s7RAPZN6qqvGAU5EZJd32j536mcoL2vgq2fCsspJeru55rfoMQ1FDdH7LFbSWnxKk",
  "key40": "4kX1cFgEAbcFyeMyeGTj8hUN8S3QtMBu799UPKe46T2PFw7vGo1cEEZbWBxm5rRNNtwP4xwY7W6hDA4aP4HYngJ2",
  "key41": "2BqsJ4xqpnfBDnA5N5iG5MvRbw5Tzk4fqp4Zi6a59pPNnkXQgmm7FMnm35EJD47z8HnuJNkAkGKF6zhF4ZzFYxYd"
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
