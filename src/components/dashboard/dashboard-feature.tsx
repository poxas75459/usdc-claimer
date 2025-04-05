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
    "2SZCG5XtUVD4E26Qi4stEcs4SdsUu6a8NtaFPWc5kHp3LDbViELzqfDGgagPNECeopisDKqwJWrfXgWS4FCppcqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMuMZs1XfHGNhWSQ3gTL33DZmYFHjXH7c9kGDqFfbT7Mfj58spJLYrGVEe979hZ1caFykdUf8ChAUQhfTVZFmAK",
  "key1": "4g1XbqYNtkDWKGW6oYYx7h5Vc5LqDGLqcWZwUxwZzAuEsKWewgef42aZP2MV6wXLEJgn8gkxBmd7UugUpDPXdxHV",
  "key2": "5M26927a27VmUDGycCHE5MpChyBR9kP6Mcg515aUpG9w46QSncZHu2ZkNojSEauKjSHj36UsteYGYk7BBZDdN3H8",
  "key3": "4cNwvouc1DnooMLzzsaU1BorsHUG4SbuEhDPDshqsJph8C1e3nU9u4igdBAbARPoqTJx3pDg8UqmfbnW7eZH4ZbG",
  "key4": "3FsAQsaXSNcDte6H3pN7B68ksj1xj4jFUANuv9tJggfkY7JEdBfMDwmX8uuzbacEoCMpSHGtmiMLSNFpnSDep76s",
  "key5": "3ECXG8ju6UKuJ6FcnHNkxKiefAtrpkYrHXd1xza94V74CgKq49jNtL7Yh9hEE64mhwELGwjos4aGaahRkfNdMbtP",
  "key6": "r54vod2r5T894wLhdsXRkrJo5xhKS7ALArX2DT75cHx7tWXCCujcYgxsur1DC23wAEbJsUb5c6zm1HssNAmrCdc",
  "key7": "5bf9YCNncyvh1obYbnP7GexQWw3Anzwy1gR8PxTqsT7dKHB4Pq9EKWLHQzjbMtcb7W1ccU1Aw8JQgFcjf2n667Jr",
  "key8": "4E658H9GgxGjyKpD8RZ2QQk4iCfKsVxb2hp13eJD7nnwscqThotj53SZMWnKsqB5pnLZorm9vQR1v9q6iL1fFjVV",
  "key9": "5FXGeAF5A16pYRyHTszRXjyaBtFUe65uVDvwjeENGZvp8H2PohE3BLFr6gFVePVLiXMa8ZgzTKmvRW6NFQ45AVah",
  "key10": "28F1JydkvTtNDHxfEymHePwoboSK9TtGofN19A47HM9uG2fGFjg4fe8CwJsS6bpE5SDfB8ceSo6RFMopRMocVpaN",
  "key11": "2Vn9JevM42X7kLnrXtwwuDZyhx5ed2dDaWTm8boNC5fqms8k3VBnAL3mLRE3xHWrP18C4AXFpURAuyFEXFw4haa4",
  "key12": "5fsd3MzfqxciF5YjCTfJNbc8otVaaM3Ut7UMqizf8VaEQXBXG2zWAQ2wdhMNECVAZ7onGUTi3wVYWEC4u29LC8PQ",
  "key13": "56MgdB6LAfCUAG8WR2kjxAxMuXpn4uDReAgcaPSqB4pF53Hvj2FtPEmV1u3e9fZa8NeDJNgxRUDtgpZPRXaSPJvx",
  "key14": "B3kUjx6tNLm95zs87Czm6kfhCtiZKho5yH1NmqH3Ta5HjPX5tivy1VoP3P5pue3ssQrzDK2EfcDB6LzE3xhPfKM",
  "key15": "ckJjsfFiYCyrf1fZomcsJvs3Z5qEkEnEZa9eBzQeaMQ16S4K4SnfQvL3zppk318jEEuktM4izHVoZ8sVRnriwWm",
  "key16": "2vHi6YW3vPpy2Swz3Us47beWyW4yTL2QN8yuG4y8JYC9XEs25qvfxGPtHweoqjSwudb5FgpADbseF3koGrJoYuZs",
  "key17": "62UMxqgg518QQLQJSr3Rd7zFXkTuQeiM7nAVo6pXX7XFLeYD9iRUMWqWvvjwu88WCVutWEyBsoYmiuLjR7dbdub",
  "key18": "42QtPddYb4Fr1n52TUJ4taDxX2LRPqoMgAfxf6aPUBdbnMtfZZ1UWaoviY4ucbhB6445phW891pt7kcyuLfD45pZ",
  "key19": "2M3XVrWiJcxiKNH2iw3XjnsxZA47gusp5yHvWujajMeDeTDEnddLSbdTVgwzLbwAecUEko4cPCrPHvLyQppumZkn",
  "key20": "4uc2WzJ5S4EBwXu9r9EETXpDr4DuvpzvTnNdn6Wt29zdSZm9XUopzfAQ67bEUnpCwkPyuuKhZF2cAth7enKym1PK",
  "key21": "4oF9mAi4mUrsfRARb3brvCcvKXNwDbNymSYKYtJge9R23aQDF1BHfUviaGCxriF56p51BH5ebzMqE6v2AXtn499h",
  "key22": "4XtGWzAJXsDYFsZrrjiy41582etf6UTm9n7unrmAjoiRgFjqNYcmobiWKTbGwGAyhxUtzfX4SPJZQUdsVxzpmHsD",
  "key23": "kYNM2dPJgMEeXtDYkMTH6qzZvDWf2akyGxCu5EpLQicLyZHLx2MiyN4nJ9q5CphWRssdRpBVcTyem2ZvwTmA7uh",
  "key24": "M716apeTyNz3z3wZwLBNwACZxSBTzF7h8gEFctxRKMjtGUYPwa12YJSnhKR9u91QmXvFriPZ4o23FVUd2NsU8T7",
  "key25": "5KeCLSP7QsV97ThufXMsKfY5FtSLwx26jCnTjYw3zegnkRQBF8pPnLhp5KT9m8od4yZCnh8CLSBvmUyhfQKLSNd7",
  "key26": "4njiMC24KLfCALbLoRjzDANxhMYQ9i9ZrQYU1a1nT18jBwpNxCcLrhwqpDyJzUi2mmABhrJmJBp4cDx5C5dRsmMd",
  "key27": "XVmjYtyZuqnWih978w8LUjRM2NtHtCFJDoJzrzA1BUydRZvghGgVq41jsSBac7xTCjaFAS5fYQu6oyqDT6rrETK",
  "key28": "55QywgKjrU4WfKEYNL561uQNJeVPzXDvShhnBFKkUbm3qHLBMicbL7F2qEeKQo4bsUvEfJzFxdQXvjNm6tVKJzMp",
  "key29": "5eYjM6k2LxUw7GkJHa7jG56HaMUFmSPr4qs9hELgkGCb9usnTSGuEJzG28stiRhecwJjpgwLqZK87XF5uHtdouyn",
  "key30": "64WqSzKtFwdBwx6LSfwUrfrCkt6jvji1ATpWRMR95XmbGG1be5JwrotcA6Fv2yFLmV2FN4XwuBRScRi92jiR6Sqv"
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
