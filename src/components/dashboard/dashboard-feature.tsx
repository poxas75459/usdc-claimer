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
    "3WXTCfRKseChrLRqR3kHsT4fwXPTRGTHjAKQ4Mn65swoQo7ePvahmHZE7Hi5xRy7kM1mYpScKyrYWF2zKb5MgoiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1nmmtpSuKviYwsxSDA2QittNQBwYtQK1iXxUydonnQRfHftPtvuxbfQh6JvXm6f7ryK8982biTMxdUNeJa8mVQ",
  "key1": "tkqbk5zADaAxUFwGtF6BCZXSeLpGEAPcST2oVcCnCf9LNpd7oo4idtvejTdHYEA42dKEPWFkcrQ2g2Kr7KkZTmL",
  "key2": "3PQ56bDc1QZYJUxbb6Hcy94mCZPy3ty1iR5TwbBPi4T7DvUrJdCJ5XuxoZ1MUyLTdcJL68LQAwCmqTHGkGN2NizU",
  "key3": "2cTSTshGnCaBYqFRyZkrj8ZTrvNh5WHfvYzBzKqP43s1jvTPoGQ2hJZ7z7GKsnTk64CZ2uKPADWcYLC9XdWuDKYS",
  "key4": "468cdsDdLk7XjBzYMeMRdAMrqKBUpdvXLejMJYLcqLqGboLAzxFDVB1N8uxx8GXZup8JNqS8j6XrUUEr6oy6PoZE",
  "key5": "PbqpTPVKotqtqEchkQVLKQjBQYxufWjrgNd6hxC5Weew6MaXyqALiX32bjeuDkhmL7kamNrDguGbBjtWroSRGHL",
  "key6": "59Kv2yfFP3mztPZASGJgMPAk1jaLGYhwwqnmXqYpd9vuxW9GycYf3UxDHpmX2RYtmTAB6FvSiZrrEDX3rAzKQUAk",
  "key7": "52Jg14FTveJmRFqbk3mHBSdaZnf6yZskbE37kUBxUBG1AxRpGKYwZKVqeko7vJcU28Sa43nnDsR6GKDbzJV7xeZD",
  "key8": "5kKjKf4JcoqMJ2bKs8FNEL3iRrNtxN9uZ2yD4gRRpnYk1FfCEwTGD8SsCQgPCQkN25BU7G3EQeu7Eq4Lq4A9HcYt",
  "key9": "27SxCcXpZZVGb9z4pJA3nnYTv4wuZPwAb5PLJvAnbYmPotc1WdwaAZpHppap9bN1WNJbzRpax48v3SP3nXYJBk3P",
  "key10": "3FzJ79S1vVLM7TRTPP1eBvAnRCUPXfAtNjASBcKj3L6eUU1dwggqPzN7WYXfLAje4Pu2t6dnMQMTY83jwhnGyT1w",
  "key11": "5v9ukAfGRTFtuseccRJFFnyuaJ6yHJ3pYzALSd4yGPTpoWGFKjgXaw5Y6LCoW7nk18mr2yP2yRb596DJf9UJa7cw",
  "key12": "4EidBY1t2zcNQymjxRt1NTedg1zXmWfX4at9L8wCkAG557aq6A5Tk8X5J2wDEGYTxUqwpsFh9cFw2mPvk6QcbsKE",
  "key13": "48VKGHuUwcaYbmcoBYrwyKNkVfTjRjVaomyHWQ5Auyue48YWpChSCAnA1XpydXBguN4PUg2tpUFYsPfANju4wpxr",
  "key14": "2LzEGAqjgb5CFH66qzhPQU2TEipjynXY5gxpQeDQBb72Mv7yGTuSVL2GUnopRoRRhydqACn5mZtqraWh2kWaALvx",
  "key15": "2gP2gy53RWA2moVtq3oyZ5R7mskmYGqR54qxhLXFToxgJKi62DvNKYWr3QJnvg9ygTg3HBPQ4fMMpFoUQcJZdnqq",
  "key16": "5BuUJeTayvEBQhSJERaH8idfsR9GDo36ehomrHwPfh8Dxh3YtGg4vEEsTd1XGPPNhaUfKKyYEYGW9hkLNo6jgWJz",
  "key17": "3VDSRJok8koQQ8VWUGDozEiPHFp7sfKU9o4d1d44T8nkt3k5J22nTfVxPA4wqSqAaJ1LQUUi1c8itnTAahejkFpt",
  "key18": "3qGFQi3wSxgZS6guQDjCrk6QLRrMtjjMW6V3BeQDb3xMzjTjRwV7nv99vXCpzNzsxLriZordqsFJG7J4bSDKPTGV",
  "key19": "65xDTTdJntAsFDcRYLJHYJhvjwbfVdW8FGyFPLHfFxEZN9DvwiqfVV5aBYtamCWKcLQEJ5Nk4FSa32ngwteT8vzB",
  "key20": "2sW1ZDDN62jFK5JTa3G1jZvNvcdoEkF8TvLV2RfhR3XRuhq9KAh5jGSFrRgmbH5B1n6oC1Le5sRfGs4Hh5DvKt37",
  "key21": "37P88kLAPQoj91wPTarUfmrs7mzbjFntRPteE54BcLwvjsSefAbiCuxRa4ReCP5iTsho54yEkDjW8dt8mxdUUx5m",
  "key22": "7nxed3rXY9RMmKgxskZkXuVRwcSTdxmopRCgmgZBXxsCfUVJCEyqbGfYFzBV1fQTEZbt7e1DK4erZBD7aaukXsi",
  "key23": "2XHoFYreyuvwX4oGCQWACCu5iX9Tb3iHKGC7kZeKiCxsog8V7F5oAKYojeX8WKFrRU4K7JqP7ExCRFH1mu9AwVjp",
  "key24": "4ZntuaTZ5rQBxkB3XRHVJWd1kVfi99qtqVcunPeNzdtbgSZn2kzNSigMtX9tdoj9JemMRKWLequKyjWgm1MNE9du",
  "key25": "28fwsErjrBBssgZdyYaZopTEa4w5dTzu1yc1EMtAbZXHQ43TGRTaeD7HWUdcuDRCJPt6QBoeRLTMFR5Wp59ejuNJ",
  "key26": "5JwB3L6Evh57ffA8TuZ3rEEKje9dw1JXFvCDNSQ7ozKPAwTwt1R62BJSfREf7MBgVPCK4MTfZ64ZtkaB4K99v88f",
  "key27": "2GM2heDcZGAFzM2i7qg4UoZMUHdN1882cboNQdaHvixNCQ87hGhzsMANabEp1XBvNrrGRL6HXVcxKdCfWeRQuww8",
  "key28": "2oCxEAVNNKg1vgZkTpRa3PpTRWRn9jmcrZp7ZNWeJogVJtadR75Pd3UHkgp5tWXsTqQMhJkYGfA3dSk9vjbUcUty",
  "key29": "3ADKPinKa11maUrxQCFZ1Z1N5KkN1sYD6bWsumRmCw5H6mkKuB19vyetZSVkJgPxnUstBux63kiKHKzJMZNuP4yN",
  "key30": "HEybkW3wEDaUSRaVU7b4rKFdLwCFywNLcVzm8Fndd1kVgTGdsyKGZ5ae7bBPVfB4vauqkFiySQ58chNRjLL6R6d",
  "key31": "3oep8cYceDPpnX7rGnkhMn6ZC75i2TQfreci1yosANjrvXjH1CpJKn8eY2iLxMGVG7eeyf2N8w8PpywPZaAQhQ7M",
  "key32": "5XpeYkFejYGd551o6bW6jzQzWAXh4QPAssR4WwnEiA26Lrer7NMDE57jg9MgJNvg4dPQVQLX3R6i5vRZRrij4EZC",
  "key33": "4sb8HJ69pD6nPHHE49xVbukV61pmjhxCrYQ7Gs7KF1zAXxDMziUJHWb6SkSsUnZoG44bteD8tF9ZW7xPg93osqaa"
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
