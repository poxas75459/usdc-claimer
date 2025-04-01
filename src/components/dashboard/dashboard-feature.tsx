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
    "5FMWTsvD86Ew8PyDukTfRxvsEDAtFY9bfqZ8P4WrtdGVkbQcNRM1CSzHbsP1VzjF5B4Kaog1yZR5M7CsDQ3PbCEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4nhR7WyiWk7ex6zp7aQZcKqXEp79kdD5uYy8vcAM7V427YsrToFQUDgv8MS5Tzi1SJGwguRfmdgwvn6MXsrLQp",
  "key1": "4EVAwitdDr2kzyjbcRTNmRGgqHyPeWaHnS1dCuexnqM3hZ8Zx2NSPukaeoJzbbPs2o3fJeqXn9MZGqE62A3gW8Ah",
  "key2": "2DRG9UodEqxAJJTzVHEXUEcK17kUq2awmgNCZKFhZcLPXiT2eQs2haMpq8ANPf2ksTr8Eni7zeJykDtzPyYhvBNa",
  "key3": "55G1a7NhBqqF3yD9Bht1JBuQjE5TeBczdRbv9zVFs7wAhbXLTkx9k1TpxdR1vtZF9mxMw1cG4dVpRjiwNjpHRDK2",
  "key4": "5PFrEo3FaiwmvG2nu5aS7pZTYVL1oKnpK6R7uCjsgqiGVXxS2MnVxUCPqw2hEyBXaykq5kDq96GAsi8kPmBwcKqs",
  "key5": "2RKwfMb38uH31cvVzQWdk5JFtprzxMngjJDLwSpEzBYUHd2TvoTdweJeRsVyyWK4yVNZzToAKatpaj4nGDMZ4poZ",
  "key6": "3jcUnj5LPyV9EYBSbVhv37J5C5Hrq47sHLxoHKzWWs79yf2i8Arpu8mTZoEDvLeAdVNfSdghJn1zqUvpcK7VtSYj",
  "key7": "5VXeZPo9L9ywfJkjRKC5rqFEcfHLyUg7Vpoq12jgVg5VZQvMkdNbcV1gwExk79aexZELMkkixkect1oBWhQYWhrd",
  "key8": "2Sntr7zcB3fJh15zY6zaXEAEwdGU8Rrf9VvyVPWPcvkPivo34wumDdH5uGt14rBdHbVyWjYaxCzgcrLueaYPHUY8",
  "key9": "5xh831Ezg2UaSnrsyx8T3NeG8BMJuaWfqCYppWHvW5bdfJH7E4fbm3VXG32b8WhBaYdtyvPpj9D2mqrtWx5GpNJv",
  "key10": "3TyLrLGYzz8WiTaoQi9dv6yeWZYioj76fPKDdk3WUK7jq425Q8X2VVWxkr9mCgodNuXcMgDgggvDNAn3zX6fMXR4",
  "key11": "4YFH2srUJQhHLyeWKpmR4V1UoGcXQmCrA54oKPE92AR7X3RZbf5T5usrB6gmmiFcehktqk1kD8H13mrGzC3CBT7z",
  "key12": "348jWBPwwRguExNAKkWV9EhY1b3Z97MC6arcSjT1bmszNvHurChjLNNuBQq42PK5zfuP2caPXexQraaR6o1X2dpA",
  "key13": "5iP2mGexJ93bR4Lb8rTnhJfceuJU56r31RNk9kCKwmQf79fc7CFhz6t8UY1hRBpwd2KDyrtnXk76xFwMzRC4yzrM",
  "key14": "Sw6266Q287DP455q2yafZneskpBke6KyPvvWiS8b7dT1SBrsnGxNDie6cmWCHJJUoFyWJ52N4Azc3rpTasJz8xe",
  "key15": "4qQqstezH6wuHJ9tki3fow26dqftNJqccvDKEW2e7bZEXBzyziM6aFL1C7yHcR4VwQdxDLw7kPqRmYhixZgvsDw3",
  "key16": "sADoZ9EieZ49BpukRQTZX7BFnffVYsCRgwnkEC85J9CipA2PyCLYupdoGzx5BbBuamU5KjQ3nfySzDJVyhn4FKC",
  "key17": "3cvbcHaE2NxSBg9Mcazw6ct1N8pz7LJEP1tcroBHAUz4a2F5QgC6Qf21osWHL7GF3e5DiJpNcQ3U9W6AAV9c9gGM",
  "key18": "HPcTzRnaHdtmAw3yYSJF2KnS8G3uNASLRRYJ3j9vLNi2Jb5ccg36FbtfLi1etGqPxF6BuJFmMitrb2sajvUkjWy",
  "key19": "2PeYLEH2Uc9M2jDciwystg5mNp3Ay17FEaFh7Wj2WJEqE9DNwnskCGXthVLppVvrfhQHv2Rpnu9HgGJYmt1EfYMH",
  "key20": "eeR1jsgaqYZsthna7fJyXdvo8SKtHanCQjQ2A4AVCe1hc7skhVr5LEy5kSBEVaQv31WEhyLkKcNfgS3SrhsoD4C",
  "key21": "37sdRNnT9RSPAshuVMRDMMwH8n1AHayyadNRKCpLqLehd2R3FNUenXMDzEtpfhsSUHUCHMgkdcdrSfwjBVvbqsxc",
  "key22": "2LX6FTetUdbNTmeN9zDby8rjBHiLR5bXGRz6aDduxpTSsyj4JsGF5wqzkZZcAg4Z1FNmvsN5ZcqL6MCxvXTUa64j",
  "key23": "67NRpxakV23UaL6EydfqhbFjx7LwJTQfJ3wZxcz2MMdPuvTRNjDmaPTtd8RxwqXTiAycrJfmh4YGU6kecA9gEMXg",
  "key24": "iDxHXD7mR1hAZjgPoZFHhroiawz7XS8h2anXthXN9eiJnh36gUzPCFJ98sE7ohMyGwPRtW5JEZgVsYyQir7kmZs",
  "key25": "3T3zaroMvxo6pV255FgJ3jv9NtwNxKuTUd8MVBcAfvkdjpPC5REM6KCivEznWuaygi1xDepwUaaXJC7WVF9g7k8X",
  "key26": "2drKVVcAaEMiA3UevoCS4P6QaMZvaVK7fTveWvdQyWABm72W8it4PCJ95Qv2fUsFnhqUix7reKcjeWzYjeTcGiNw",
  "key27": "PKg6jjYVbS6NP2quBY8SEjuqrhpSfNAGt3iFoyyHwJZpmJHaCX51vdy3Pu599vaZtQ5A8yse1s7Eeo6KKL1Njep",
  "key28": "4KxjvRKDXU7igoNan1EWhay3PBykUoYHdKDwoHM8uZR82NZrta4Qnmu7trCKbfWpG6wUyVs34v6QdFFq5bbakwGu",
  "key29": "4SFzXPxRhhY1DRnDjcTG9pACPYUm5G75KW9gpxruFFLUMjzwyovQesrGwDWkHzp6u2MMZKb6tuJ22hBV4BUCjQSx",
  "key30": "uwBBuqzUSYEisTFrzXZHokRHgkE5ExSUgEGt35TP7r8G3M4c2vVqGbhq7Ux27UhytNBVL5rn9Pwj5ex4Qa9qaFs",
  "key31": "5tHBhihHGoxRbr3CYr7y7kBTjCjeaRVhUyJgSNRVFo9RY9TxL5rYYUcWnxLW9dAKm8deKm8G7iFqXkFmWzgHLcFA"
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
