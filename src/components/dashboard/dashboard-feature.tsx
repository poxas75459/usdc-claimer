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
    "2MnCXuLSsfwC2NeqTFf2jUtWkE85y5FsPexDQE11GaKBu9TyrDQpzqJTm5ho5NDZPwjxtfDTrTZzfD9iuAu5kU8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eeXpgbYpJ2j2zSC3fyMzgzTzzNA2FofZ3guJkH9V1SobPdLXm2deDxjK9fZbayijSgT9q2hVXs6RWrFrCYNAqeY",
  "key1": "5o5Y9XESgx2Noiounwjefr5Aj1NnLn5yzytCvAAg7WENcx8XxNNoQwEgu1nWVrbVjWLh2vSuQeWk8LeuB6GDpQam",
  "key2": "5d94sW38g215cHd45paTXeP6Pe5uLLPebEK4xANhvrUd2wLqxK7aQbyCTxXVrqqHAV4d48hS9hv4AUWT4k3rZcqd",
  "key3": "xmZ9nUEnk6jM6dUTW1ptUxPi6uJZixXsV1FMdiuGxB6VZQoGFJ1kZ4ooh6tiGSfZur3KFP7pcSxikkWWc143bSh",
  "key4": "3VihEzPK7JoGJbmepVjhdefALStdV8UJ358KaAG4BbWFD9T81mwgF9ZHu6PQVKjreGs6ejT1qXHfpLVSvHy6SzRy",
  "key5": "3Xs1FckWMQ65DvzgB9VLBkNM5qAJWMzJ1HpCThPcCZMR87LGrbxsCnWkdUnczTo675CkbGBfddiPNHqnhiebGtAp",
  "key6": "18Qq2ze4VMBdXuxVAxchXG24td44ymPWDrGp2ZMb1iMJKBKYp2KCg7szNrfL1xjrgBtHULaE3B4Riyb69RfVywf",
  "key7": "oCcNGpSbTeecv14gHdCLdPFHqtJBQv2YhgRWBREDjSn4yKmv73gLZmoaPyYVHUVTQGLhw2UCgXx8siYTLtsiaFC",
  "key8": "5gAZgyQRzbGksxSLtaNMzyJh6geKoq3rSYd4anJVkXx51qSXN3XYRPGFAk5mHPYRFE7AfUovTBsyUnuGFp4mwZBM",
  "key9": "62nmsqKcT2s3aZ8QrLRxXkUoSvaDnah7o2fmkyBvCmhKWpJ47zGMQ4o6nbE8RC8j2SN8x2XVJ9HesZDVkSXVnDC5",
  "key10": "ks8e9g1ro6cGVwhemLEBGnW2uto4UU9sVYmZP7Zxu1vqbnzWVpWLobfmhYV7m4NCHHJmNAX75cE2YogpPuCpH3o",
  "key11": "3nq3WGb3oP8BtfC4WcVnNxAGDXCWya2TvXWUY1j887UnLFq3n32abarG1wzJnFmSbb4JNmtAEh8oMkVVPNnh1zLr",
  "key12": "4XjSua5NZjrKsZDVhbRN3k65jwzCk5sUC1GJyjJP2tdA7kmPhSnXABUKZKMrJLFuZQ2rcKNkUShi51n7MGTyZXVH",
  "key13": "xHna5rc4NCHaj3AYxELBGxM1XB6iEBM2LwD7G3a6rzijoqYnvuf5mQrkA8YfhHCYTSusGeFupXZka5Q1aG6DmT7",
  "key14": "2qBzGUz4kV4EYRxytV4BEaCnFBC8U4DcAQSe3CoeHfN4E9ZoFRFF8FjjAHpLhxbGRBiNnZpjMxCKMJ6FSknPWeBo",
  "key15": "5s25AaBnsm3EKjwMai3NvAN85t4QjCFRnwUiz7wdF5p5ueNiEXLUXQWW718EBUFzBYccoVnS5fCujpVeJqmD3jex",
  "key16": "5MTCDAUXN59mpBnpxB2TwLiHJibdxoj5owAhFHCzm79df2shp86Hyp6TrAd9ExmSuWZhAMXyKZJ9jWtHrV6fzvLR",
  "key17": "2UERZYouRUsYTVSP6nR64VzxLzTyQy53vDPrESEA95AwYrDKjNMU5orogXbAzuzMLscswv8ZCpUExdn6vf1L27Jt",
  "key18": "5fGdfYQCgGWop4f4k1iwdk6ymtqVG4464Fo2EDbngugv8JfXN6E3ixVXgnUp6z62mRNopcBPNdfEUaxq5bVbhUGW",
  "key19": "5MeTqhNuPdxN7TrM9GbMVf2iLReDGd9NrtvoLpK2gViVJfxsYAzkBK1gANmM79G865ZP4WFHSCXgt8bGf89XCDtE",
  "key20": "46QoDPwWTsdWkw39GcZS1LGckUhKzRDpGQkMM48MHNwrtwCPdyGuXsCcBCnFcXATYL7epsKxoXS1VLKytvxkU6pR",
  "key21": "5uCtaqiYr78EcAqeHqFviqcsFxWchzffrB49WUdLE6Xcx5jpP9heBAskx3HWQWxFZxZfBYV6HE6AR2i383UzGXt4",
  "key22": "632yymCRRtPhKR7vcpC2aniqju5wmsgKFdHxEoym9uUpZe4hnLZ7BzpAEYi5LHEwjqabu4AXEsEGn22mxYuWbGUn",
  "key23": "2Fak18Ry9K7uTAAoGAc2BXahUNRcHoYvE3xXji2me5hJZEtCS1VVHZGr3ybFXPEk9bdtatyytFcdmjA6QvxTpwn7",
  "key24": "1TBwVEvmmZm6QjFJUg3wmaP16PMNay4F9LpZuRLFW5sMrt9rKV675NcYgsMn79uXr5Cv88kgNjv3Zp33CL1pYH1",
  "key25": "hbQcu9P9k4AfkaBqbGBUf3j5Msp2ZXUn1ZczGBbCjoeqxstXAGhjo3NTwZ6cz5KLcYQtmvjHeiNnBLpQA1a59RG",
  "key26": "5NkaCkkwpxtC32xiQn2jmg21VrPrxNMWgcpaSoWfeoy78eGxU8PmwFUxwvtuEx4m58WKne3MaMSKKp5YR7ydvaX5",
  "key27": "3FiCaLLRsGTcKa4VHsEdWnMGwuzqam1JuGhuE7vrH8HuM2rnYheWVMiP54ExyEZg7ZxnRfodmkqbmMnwN4FjVVJZ",
  "key28": "31LPT1y7iyQcYiYbp4ToJjWWmSqNcGnqeJkxHBUgFnaVKcuEsXXX465WEiB1YcNx32cmgPN6tju5zPbeHwGGADvT"
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
