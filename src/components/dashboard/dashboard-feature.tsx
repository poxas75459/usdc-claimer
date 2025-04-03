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
    "3TZD7MWbekkXPmxjtork2mnLmQjP3RMd5gDBHPkfDkbcxocVhLWLFPuxqBDk7K6USNrWZZQ6jJKkLnGXFRrnMkQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ypxe7FPRg2vmWHH2gALwL31zKqkFnBxo7ZKERbsp1fyKtPqN3WFTyMbDPxG4PSsLpZkgCGJ92juULWqkoFAhs7n",
  "key1": "ynxEHh9si8MdChVBN5FqJtkcugdiP3yrDgBng1VfFFpnxVzck7NGT4Zai89nA2HX3mxD8CmjpePoAht1o2Rs8C2",
  "key2": "5jZjEWNxmoLBxXwpJnWqpybB9Ubw1guXSbaAykXdA8tms4S3cmSYZs9nbSzTWgqU6iafAZWtc4bjmc4kg7qZZqNY",
  "key3": "4LZDpf3TS5psPCtDDvk7QoVmMbzvgdTZ56CDMsBYidy5gTRL6oJoDE3oz83xi3W475ZKWoeinR8G39DTjaqkruZU",
  "key4": "2R2EnNSk1iTXtFUzv2XsK6j1nz2rewjVidTpgF4ZQ1sFqMH3teufhAUtCwCqAhqMmkbMJ1WzAvbKHBJfsVbiSmCY",
  "key5": "3x4G83Y7rCagMEYmyJrfBtXAoPZU2WDnhE2qBcGMWmtqat6KnY2r3kUY4NwF7QrLvbW7V3pDSaWeVBNeGQgw1N7m",
  "key6": "4MQDS8uFvN7jToz9HpypsV8vrqth6v4MSXxNZ1Qju6etULRA1KtMW67Ya1FPXaNuyk3vCZV3j6b7Y2gUxsnxhy1v",
  "key7": "5XgaVymb54NoCwDviMU2DBhmoaFLavj7tiPHhCRhCr2dnAPzGQizDBqWpXWeaZYdL8orCCv6Z9WuJ3VLyupgdiy9",
  "key8": "4rgufashf9GvgkqWKH1gQ3AnkwCkjfPY4LKkxvdAeq4DkaPXzvGj8KSPumpp53kxYBA1kLvLjRJi1Et1fEPKzpRG",
  "key9": "3hf94nSVSQQcKcJbLXPGv66JULC3HeZYzNG1z1bQRCNzqe4BiFHGAqrKrk9ikCEkK65qfae8HnuP7BE8cNTVdmqc",
  "key10": "5tMbCtJvsfSyMgD1edSpFDZeEbX6uZbMhnN7tJD5LhDThkVEXYbM1VFzN7oixa15vroY8yNiarNLV55S3xkvyuRR",
  "key11": "3ZkQztR5LqgWuioCPfmpGjXSL1w2zb6BJSPq9FLBimPsGwbtACR1CRFf68KfWcxVNjZGvTUUPj6WkswYBJ7ves2t",
  "key12": "4xT8ERvqVeUb5M8uikxKvgZnqHSiZWVF9eH8WNt17DnVDP9EESgCDzGiDxPykQPCk69raxHtSYu76hNrqofDQTDK",
  "key13": "4FwTTVbhHuVHmMfrzCCY4psu2PGcaoTFRAZ9HN2JX2cr4NUEipP1nmVW3KJdDbjr6FZMEWYUmE9WTfzebQa62XYj",
  "key14": "64e8hUtVwaUsqxHy1RbMjVFvnt7nEnVyH1tKAXUwEMH7VwafCto43oS4isBsZVpahZMfw6EWTuNV3nMJDUdaUrPf",
  "key15": "31KVWKHXbpL9ZZvUAHq8HSYjxMKSXLxkUxiLGJtQhT2xupBxBdqEZa28ZWCyfxhxvtDGoHBbbjuz9pZ6unFzcagw",
  "key16": "4AcYqciZtmCdCyYUAYfdvYWnCdgSSUr2cidEGySX48QabW7tJFr9kTVtYsgq7ynDZ7dC98AeS5LgHVy28ZGbjrtq",
  "key17": "FpuG4aTUzNXqPy3sM2tJWoAdVfegpy6nmMkyfZaxALFKhmkt9NR6W1XS3PJ9bxrq3oZJkb7yBgYzBH99aPHThqv",
  "key18": "4FELTtyGveyfeqKdAiskVA1FCwMjs2kRvU2u98MTgLr1xzhGMqzKncLtpBzRKquSDzFrPP2bJkYER8nZrzNQsqD",
  "key19": "5aoRUmdtdhH8BLU52u65dDNEr5cUpFWdcFc436thToLb44hBNJAGCyHy8ko6RkDK8GVoEY735R7F9B9NfgMchp9Q",
  "key20": "5G2qsJDGMschrCJu47sbsaC41Jh33G5HyYGiGTcfMhTNWTfvsycAL7DqXtfB2cH1cMeFhVqgTM9Rt6XyoTAB9BN6",
  "key21": "TNHM7UuCtzHcakF5iyKwhxV2eADNkFzcH4qrC8EaCWVcnqJ5VW7pcbq6Lj5qjFxteAfqJjBdNwrTfZFL5oiBVns",
  "key22": "45F5AceYGADhZVc4zz7YMSUAb5iHMsmu4dd5QyHibWidfFYhAymSRoZ6WHuKKhB72pZH7dWcBppFfxENRZj9eNv2",
  "key23": "3DKreitsG3stLSurYmsEDCXAGFfSuVciFiYckfA3Ef4E25odqWfjtQmo6ZdKm7MvvWi2rWbJaKGzFCNs2C6vYys5",
  "key24": "3FmgnAxD1LRk76C3LyneLEqbEch1DKxWGYkSFtvzhiHs3PnhDuQqenDSLR3ZrwQpPKExibguodAmcnPLWgBXzcfg"
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
