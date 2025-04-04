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
    "4pWErnzEgSWPjotwahw4ZhxEZYSJv4yQs2fLZ8a3sLPZX31ABHX6oodS9mAwd1gP6KDQ1XsQYjye1fsKX6Df9tPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzHSM1ouZoN7giSrTSeoWs5gJoHmctfihESN7CDm8jkWhG972ZQCBGYiHdapcv8GsT8yqhp1iftLUABnZ9PQK6a",
  "key1": "5kjDrGUgU7y8WzpqaYMaxKd881pQVpCfeMVVEkAQn9sHUvrczZX74HgmP7DJGm6djvnPDSStE4vzT75LZjprjyz1",
  "key2": "4gjbttm52sWhyE7W8qFZKjq1t59UDhbTgHiY8LUUxtBvebHFBfdfT7aipWx7VKUhzRumtpyYAkxDChLfocNUJMEZ",
  "key3": "4CERLQKfB8YBQeyLCcmPNJSLEjP5i6vbCDrxLx8rxvumgvkuMn2r72NHz2raykFx5LPW6TVSqSAb8kyZ8wugqyKq",
  "key4": "DDeDQTmUL3Cjq5FcQb4p7AdV9LXRxgvFuKzoZn35YPqzMD6qq3A6gBFjGwPFRvVMbWRscBN1UEpHcCyogaEw5pE",
  "key5": "4aDCKppUay4tbAR7KLRKGMcodRhtfB8oTUUyvwFNkEScqP3mgdK2j73k16AzbPrb6Y5xRPq4J6Y1B62UVmtA1bJ2",
  "key6": "5ZvUNGbFnEhb95YQdzLjEET6ZMCrSry43eZGiW1Pn2wbV1rB9j8izFkwEVH3j1C5Jq2YqVKcGp66gDFa611DW5Tu",
  "key7": "3ssRzC6sE9BQ5jRokRmDPEzJ2DMmDEncZ7gKCesX4GVrWUNKcg8z9SKBDe4XjBxgdb946KFsKeVW2fX6TjstP7bo",
  "key8": "5GNfcYUx7GyYTYRXEJjt7XWvb1GdQQZ3LdteqgdAuV3qHRGajgYxoWxvpePaGtTBX3af535R2nNannTRW7kVKeXe",
  "key9": "LydCNpkLGrNYJAkECyBpjns8tRxJDzdv9nXvKx3WMAxZHpPurrSHqYECtb9rSYMVWKAKsFTxikkmC6EuUsaSwDM",
  "key10": "22SZa1dTu29KHQ72zzSH5AUvNwP7ydhcR4Tv8PMmLFubDv1PkK8WPqiYgZ1xH4nQUwadoCgno9oWiVoDgFPKUjVm",
  "key11": "5X4HkkiYKA8tQo4jBhBqpbeb6iPgMzf1qJg5U8ezPQiNS1RFFPYNzc6mFiFoVgAmBSbu5vMiJJitbyfRW4ND4zUW",
  "key12": "446eatveWeiBjostkzscSTy58Ayx8SKa1SNJcVaCRHrUUfA8H9LnSpwQBQscTJNfYrvZ3wXhMjYbR5TJijWysris",
  "key13": "H9VMGT6JUL7wqgJgVHKCyNjLnzvGDbafxz67kUERUMeCgtVAvtFfGdYHUntgjz5LmTCgNr1Gmj9w7EEr6FpHaNc",
  "key14": "4BxGsbWi6g8u45mKDnrTYqvrAmZzc6cccS4VFhn1paNo8AV4L4QFwEttQAxzsdUNTEGibsavMoPNVNPcMRL3LpuK",
  "key15": "5FBfxHaiMkt3UqrwtZtbcUzY8X9Qt5fMYpxG6e9x6eaaSYAFrpdCeA1yhKpGg8PQvucGPcPqxPS8hg1XXrdG3ecm",
  "key16": "3sJ2vQg6bDMBUqUM92qrTX5m3UWtnGEzHFiPz9gYLp5RSUTX343az1WPMDmQEa7LqTViMMnWSBrNWhYBKeXbXgXF",
  "key17": "s6tEo1WNX5BGAay6s31WDCJoGumsDc7icNozuc4Ew1LwrRxv6fXYEda6vSxLS8wchoXrj5sXkdLjr3ovjM3LMrA",
  "key18": "4YUoJyy6NjQoXWL2oBNhTuf3dZqouKhVaS37J9b5vyuNLbGvfbo6nJCexQUA5K4xh8PrMFdykVaLvTJwbjXGk6g",
  "key19": "2tx7AtMHjzASMjkfJ8tBouxECZQNHvmemHsiEsU7dyQzL5yp7jtNb6n3swX89huyatoTSogZW8rym2uiV4FtpGLM",
  "key20": "nERnjBGFh6QKgmmKKeEKNSR5bTfcMCSMRSvTCvozaCkqrNWi8xVFYkbzrJV3sZjT9EoLRL57ybeTvHGTiWvSWS8",
  "key21": "2BZf3Lwmmr9fjH1Vgu9QTnxDKRKBHThMHz2hwYCGg9grYW3y5kXSptPaG5E5fVsX2w7ftB77jbsSRaWawjYke9Av",
  "key22": "2UY2VKEXpd4Y1Z1rGeyAJNu5UqnbVizoH1QQLroUa2vEPcXARsQHarfEyzk1XR4qyhJx9voYwXBQuMW51uFJHhh8",
  "key23": "5rYL94daCdh3fx4LqZEBXkTfziz5Uq3dc7R5zQhSoRVme9w4qTzBMjKjiAZ5ZzKsgrApG8bVfADVsuAWYiB5TNPd",
  "key24": "3CGi2n7P4FtyZBD5dBFuJAVvCsn6P6msX6p1W8prqYWJusJGniWoRBmWtMAhB6pwMPWhGwLuFNA3UhH8CwdUNdvw",
  "key25": "5HRQPBBbZpSjRcCaW6Cj31cRwLeQyy3j77AxdaEtWfS9nkb6CN7HLgyowuK6ndQXF7HqsoRK9PnmJt1p16PCZD8p",
  "key26": "4hSLAWPwVXbcmWRaGssds5NQjGG5uStJ9mHA2rY8knh3BVmpLA24vjiiV9kXjmQe97Nmenv59ohGD2xZQWjTgvBd",
  "key27": "xWgkS6eEvvQj3H4F22GwidFGuPppbCWqVRw5TBEk2DpJiw2VYAkGmqTMqK4hvgwtD8dEyKoeC3GabtedDhqa73V",
  "key28": "4BhW1yM3QrRA9FcUHQ35t4yLDkx4C46DuJcPqP9X2znPAbDAkRJbQcUspKdeuHL1zLvto3nWsEfzAXNHa2zgphSU",
  "key29": "RqmMm1KvdfTRGL8btxBX64oKj8zHaF3cUzF62vuQFt56uzM1NUVZcRahe5JvDKTG772BzVd1KNQkhm1NNWMpWny",
  "key30": "3J7yvhGv4oXkKirWoz8T5xQdRbK8BmqN5Cd9MSYdvwcnuJnMSBq1Sime7WkCFWdJDB2oYyEvxRBzxBkFqmGBBQAo",
  "key31": "4HmPTUb175LhRb7sABCVigjRLeSs1uNmbAxikztcWNhKc8vHTFbzJw93xpiHUK486o78S8WihZzj91MZt8RCQCFC",
  "key32": "4DbHwJeqzHXWm3YYqwwcv6ZcidD6vqFuGZbNZybCmmwbKnD6i3MzfDrkfsoMHRiz8WC1oi1WpfU449zQGqaZ1UQR"
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
