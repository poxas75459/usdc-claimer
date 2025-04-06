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
    "2QMw3GTfequpCiegwpW8xULTjALQetm8C6DscxkGPxD6AwQRpVteMHEPALuJWZWuhHWNBcCMb4xt1R4qZeQ2efSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nz4RwqdJsW8vvfxCkpXKjvyg1Skzg11RkTtewFdM4BvF9qTp7UqnWmHZgGSTvXbcYWgPEb6VGV2HDJYXTkXrcUC",
  "key1": "XSHEcAT3itthDsUfpWhwNajbuPpFsc3YPgjmk5Bt9Ggd1pm4cuWJsCuvmYm4uN2NLnFPoX8RoifMoHLAGdmXXon",
  "key2": "2Z6CAKRCgXCeeNoRvjfJtKrxWUEc7fiWY5nMGW5591ni22Fv8ijGAdwve2QuPUgZa3s8vgRVeB4e5qCXijmVwQmN",
  "key3": "2mrSg2ft9aaixb7V5syPbYXp58TT4moBKD6GUGjqPGFx28VdFBmdXqAzaTcYR6rMhipHchhwpg1Azid8YGP7irnm",
  "key4": "2j6ufDpo2eeRzMtVgqENxVHUjrb3NvdDz5oCgHUDdLJvNjifDbBrVYpeqGoBAmU6hhJWchUMsax7jMQ38scvEWrT",
  "key5": "4NNmwnQyML4YZEp9i7qhVqcXHSqDK96tS3pvXemZBMSdu3jYC19nk5v8Lvcc37aGKkZJ1v4ZWHauXQjTWz1frAQV",
  "key6": "4bQZe5UM7SghefZzMxs3VL5QR3dTz2BSFR9hjGxgXL4FYFqdVJ9uimcRMnSEfKFbZVoVPVJrTd8ZTVVThYe5bvQq",
  "key7": "5qet3qGWJJJ9QS5L1JrncKBSoLG2unso4RmXVTZPPdxRyCCg8f4owQ5iFx4i5g8APhtGxGFtULAuFsBrTiNUacwt",
  "key8": "65qpMFwhwev6hYQujNcr4sMRptGBAuCmjjd7qfkJjXVm9LF6xHYEc6tXh2YBpKy18zobB3UowyXxjQ7nmsXVtd2e",
  "key9": "5n4iUvsFdapTCpyEEEXh5zrGhU2fjrtgS9ioRYNLvtWx2LHTnVZBN9hyoGpKfYCgoDMz2xNFhuM58aYLeK171DL1",
  "key10": "2JAqyQWEhrE2wV7HViNP6DwLbgpQY1X5mv9TsPk3bSpaPmsNcZrxtgr5HcyXYa4zvTdrjFJyP8EdDr7LYJ8F6KUC",
  "key11": "34wdsUwKiAfggJ6SnbenMzo6HxkqQJBnxRJgKYz7cbTsdN7rYQEK4xuKcpkabZGzdbwwCpeVoME4wpLQsREGKFSC",
  "key12": "4zrvu5zhUC3kenF3GvpB2E2eBDAq9EkXRAtoDDuoZFg1wdYv9z1zQh4J311KNu1bTGUv3FidC2J7ghmW4Bc8oEHZ",
  "key13": "4JDP4sxxHcUCi8ZuHEvQcx85CEE9HULZHfcAoJ2im5cC2k5YT9Zrc9gLQXE8N5UJg19mGtn6Hpa2jtYRZeg35voM",
  "key14": "23JjpbJLhBEAHw1XVrRoyEVKCZXGEkLbTTAjQrkNW6gxVfb1BkujsPKvVkEXzAULgJb6T69ZYfzQLLKD8DQrqAyR",
  "key15": "2Ux6rBPtYrjBqTCKn8HJ74gWdrDwdXwrB5NWhjz8vxLfMeaXwJweVLaoUEPoYNrLPxbqbTuiMG7jkp1X4iQEE7tr",
  "key16": "5hfsiCnqbQWfFDQp57CmR3xk6cHusVVqzteNzTjSxuyE8qjDjPWC61pP7DmXSwCSCyPYWJKKSUS52RwbZKPETXXM",
  "key17": "4qcpz9mhqzrzrk7jkh71BKntFBm1EfKnSk5YMBN2Xiff2M9GZGHhLBa9xcAhCiRp17LDkq8bP63k2EV1yAz55bVx",
  "key18": "3LhAJJGU7EwwbmoxNSy9mDBZg7pXtkrq6kLPMUtsWvNy7sTrEMPeXAZ8ERu1hYspjG14gtCzt9WoM11YQnSoDtLi",
  "key19": "3AMDgYZknQ9Ykw6ika4LdiUsdCSvuqT9qM2HNCqr8mYwdS676ESeSRm3rHQGHiW3wK47HSTx8De1KQmCh3M6R9bv",
  "key20": "5Kdmdvf9tqzLNdNrFV6VKg44cdkBfWTKhCAphxfKyLVzoYvMC6UP9SfRAcPJwP9ZAR2ksv3qJZFevjo5abtURU5Q",
  "key21": "F81HMrPTGadkScTPJH8obG7QEuXQwPjgoWPHYUdeAR2w1xJrTNdmjifG9CKEZ5Bb6keKGVdZdkaGRtijE3xqEha",
  "key22": "4brhGQVAHBAfZWoyAmw8kbxzcY8kpYDZefNyPxaDaeQennwTZqdkHajDrMZuNKrAYWFYSNZcmoVVp43THVHRDCYr",
  "key23": "34GnFRvd4XGLsuDJSYLNP8NTuurfqh5dWeJur5LkjvvnwMUd1FgoECde6hHpEUVoxxWAPM2XvMd5Lbj8B2J898W7",
  "key24": "2UexhQjDFihPAb85dgYfmpWvseGy7DdAGYrzuDqjjsrVUQ4wBMEG9sEDv4dwtSthfFmH9sNnx7nci7znRRSbzoM1",
  "key25": "66aVMdJXCRzzCdfhs8axLJxisao3FQUud1aJGBP56JD9YQNDuEcjk6t5D5CtBDJQX6kEJvjPZpPy2bDxF5RsGeKt",
  "key26": "2HbQKJzuk3xbzCLwe38kPNRucCDQF9M8NuGzRDFyS8aWVk51sTE37Re8QgXnAVakaVbv89fCpLrYAppecdPpapR5",
  "key27": "5oY2ZAS4bfae1ztEwEQvHGv4xocsnYWpZr4fh8UBWwpx4KcrwGnnjhuvDbVkc3FMaRfcYmurLV1f4R9krDtruuKt",
  "key28": "4Mr2K6PxbVwh7ueasJE4qsyUPSa1wnb1sd5Ls9i7Kk7U5W4Fs5inTS9LSZYzSXm1QeZTbfU9aLmZbciMaN3wvwDK",
  "key29": "2sRVvRoFq8ALgx2iCxcSSgc5sm5LSqWKs2JUdjEtak41v9oQo9Rq82G9okWHYp51eax2mZyjDHxKaSVhtW4Nhq9b",
  "key30": "cgC4Ww1oMcbGyru48wrebcw43vmrG1H1ZH1hkMPnQvv4jtvUXWXa8ZeozJxvuwFyAKjecG3ruDM96FASrVaHwVc",
  "key31": "5V7YbQZTQLDArFi6Qf433n71P9VYqTVxtjQQLJ6gT1X5CEpwVTgZrpRtrih4qNPvBUN9txv51cToCXz6GUe7ehzY",
  "key32": "4jCsukJDdP1zCACwuZExLh4A3XqDmukxXhVFgKr1TB1T5V9gggFn1K7DaxCk9iqVgaFHejGgjL2a61fVXsm8Lwqt"
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
