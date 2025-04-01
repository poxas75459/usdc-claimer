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
    "2iLNhhmsCTBQUxWH8fLosso5DwGgFh4r8vPNUmv7wpsBrQVdRmnnhPeS362K6q8tDAX2HjcoFqXSoEoTY7TU5tXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnVA7HaiG6erEtmn7N22F2zjxzQ6gDbjPwh4YTXv3srycKMmPfitdDSpj3T7YwzWPUN5HRn94xsxj2T5R9nkuwJ",
  "key1": "3kF5KcFtveosSgPZo3PTMNpA6S5nVZrFX6xn4124bL4p9xWuKFuBMZmQRJdGWcQDXmy6L28Z5VWbE9Y96Qq9juUr",
  "key2": "33ApQWsz1JrnsN1R5vzCtzRmY5cTjHVtkjQyfvEXYiiRgKb6RootFox9hUtJ1R1jMVDChP3rqUiPWbu6K3BFaDfe",
  "key3": "4tLw3QohhnHbvPwfhsy8yU2tuwnTAutPQLbv4KZNnWBGVRoFwceqnTndFAKBpWz6xYtJKEnYWhnSwR5vYCbDyLd3",
  "key4": "4gRw5gfSQztop6sy2dHFkRnYd3zF5iDTowbQ1imQQ5JA6iG8tKpnivmCntVXej7xzyAXrdPHbQQg8CFUi993jg6K",
  "key5": "4Y3tXrVxdnPXJxBxjs2atCi7KsaHRa7oKV4F5QYfoMgpvB5dqAqzqLLPx4EwLugKB1J9Mi7TgkTroVc9SbgUqvgs",
  "key6": "33gdYmqG9yTjVDniCjg8JzicideQF6TtUcUWhkbSyy1qFiFRtJuJ5CCqfoz6jVg6oNcn29FcadGoHBPJVMhHJ49r",
  "key7": "4P9eouMC3uuPsxxwQ4NHvXogRwUBpMLXqpMEMHyv5brhfp35KwNLsepBoPgYPgSRKoJELZR2qPiF3KUwCqYswcfV",
  "key8": "4brwTGeXNbAP4oVngaJoTj642kVwTtkn2bb9WDLXBVhaSDfHN43G6jZb4gnLKMKtGaMjZBBJkcYvt3Md1QberePF",
  "key9": "4HW7erq7piJNCPb7uddV5gsBL36NHkVyWqqb8zbZhKNgMGzRPpinEdmvRbMh85NAvGGVWgjV1YU5D4iT5bmG8sYc",
  "key10": "4uQJETetsDcZMgaR7gbYsjApQb3Jns5rBckxCy5wX1GsLjzY8TBr9Sywy2Uxn19CMC28GQvtkzvAMVR6Y9FUaF1V",
  "key11": "3WLTEdkBvYz3XCQpYbYJZPk8ot8zZnKUTc5zixHoMTjssvuBS5uatqacj6wA3kf4orfhJWbNQDmaXh2FSAKgEYzM",
  "key12": "3TyvjxQfayyj6TW7XkWpQz4y2jAR41jBEwj3mJo97sYTSKmM1JXnAuKA6aEjricwJt8emSQ7CvqgFhRF9NNmB6Zb",
  "key13": "2YM9aSaWWB3i5DWmbAvcFLgujuNiZZTCxSXXvyL24ZzwxD6H8ogzPvCnKP5JJzzBXjfWJHgP5zzifFLpyQ1HaXBA",
  "key14": "2PJagDUc51CMQZ2jmv9z5rHhLFpDScCA6oaiwuB7ZCe52sWBULb3uCyKsgoLnXHD7wQe4nnj1L1cNDrNYAphd9hF",
  "key15": "3WuT8PiRZ924v3VWeQmQdQeRhe7bzVpBSNTxqvVHMsuZL7Z1c57RKjrYrvGp47agqNkuWCmPHsDfZTkjoTDU2y7B",
  "key16": "XqGrkAEu1YYkV7znXkX3pb9zAiD9Kpob7pPVSWp4bw5RcQTzVjd5n7JfFwjMgkh5KgXsFaF3souwLx6Pq2E9KWH",
  "key17": "5UuVqUA8ySazZgR26hW1PXcXzHW4UBrSzsfkegJa5ojy1LQLXH4tx3YoBxfnxfobKbgLLGSFA61oPad5Nu6qBUzX",
  "key18": "2SYw7Dm7AoXhtXAouE3PPnZmeYP4oPCDCusASM6X264jLyCrxAwxMwV7jiWuWLjeHaLUtyHcFHWMSXy7oGxqZiYf",
  "key19": "SHj5VWkteG4KPkZQLShn7vzhrpKehPrcHubxheztrhkx3uedbiNJMx1wm8GvSSucsEUbKmqMN6xADRVmKbVQHiD",
  "key20": "2aM7vjQ55WuaXunBTeTzVxaVeSHuVS8eGnYekj1hr21JJmnZhMRMWgK9oSVvQXg4MhknJWJdMdx1hSQuMReSQRXx",
  "key21": "5mUSp8M3TofTHpbJxtw7dsQCsY167bqsG9VCvyXzxADFqDbdKWZ29rGaELUEg7BSYZ9zefGmEHfiWEXaT325GH8",
  "key22": "4epPxZqQUQfsCxj1rdo2iXedXKVPSdEMD4FjW2Ti7qH995SpgvgNDLRHDScpNwWn7hgHCawNzNzBrWJSdyo2bQHN",
  "key23": "4SeV3b5cgHtgYBydgCdazQ8fSPK4bmHPjjbKgngnCg7dpvNEA893wMBWCjpZbJK8AGukr18y9GVPRqExXv9yuscD",
  "key24": "4vTydNW9vwSAu8EtFyrDu8EbSAP1MXDzpbxEKF6jYjMEbLBNba3pWK2japCiSnv6pD5w5m1wDJegspSRaTZmvJdG",
  "key25": "2hWMrzpjyQZiEREYeHMxw2gDeTmDy1CArnesJzckTDDXW7haQM5YXdQ6LGKLz9cnQjMg17A1t77J2awWfMndzTtM",
  "key26": "MF6a9to3Autwn5VZJ7s114DTS3Q2x84u8jxqCJgy6H4U6Nvvu1mWCFeqfFHGbsmNy5bYbtN7su9iznLqWkwChfF",
  "key27": "3jsLqdC2LyfTWueYb3MWwiCzR4CKXSAiPPhpCdrZZCRGxBsvCXMFR2mrbp5rnGADPZB5CPxkZW1JChiu1WTtp6hj",
  "key28": "2Pjpbx4VP7eSeWe4U5rBfHCZhdzveEhV68amM7vefQfDTLJkVcmqD5pHZnECNgqyEFeTqy7NkYyB7rXBPkPGt64Z",
  "key29": "4koTdbEsbkY9rZtYEamFA8KnHpzdMT5rEiuURrHiAuvqGGxnNMxZb6eJy8LBaGuCtF8iHSXzHHAHiRNmkoHbbzF2",
  "key30": "32SYLHtXrxKTxgFECGMuBVdYHyD97yG2KnMBjmkxXfWCicSeJBdF3KQ9PAmP9qNZCGib9kqLSMt1reDBLLVCMhTG",
  "key31": "3AC2E6NxBUpdJeHe7dReB8sYh4EVm6YkVhwinC9EVmRXjA4UVkFwq7pZ6xwcsLxamwAYD4ysZkutbGTXuVPKmqFE",
  "key32": "5xDBENjDip3wcmNm3D8A2LhwzLnsUe6HkPkK1BeDbtEeVGZP8WP3MkhTsmydxudBukWSPq4zCRQQCbXUcFsBTi6t",
  "key33": "4bfwgoSR9fCvjZpPyPJdJeXEBwknZ7Vx2FN7daKFRoXfWcV2cGinNTfD5J8aEMzMVPhaVFRgfizDF6ifycXVSYP5",
  "key34": "2v9AZ3aCB5YhmC3yagSwrdd9wxZdYxb9K421b5uFgUzs73VkrrLvSXFuhthikJyZboDhaKheJiyAMMPdxJNjbWUE",
  "key35": "5D8n7vRGVctAcX1XNe8V5Z16n7JpWYaVuE4wYM2j7u4oTwQhrfzqLDy7Xr8HNzuCPxMMytbJ6BqvuCnt3hoYJG2o"
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
