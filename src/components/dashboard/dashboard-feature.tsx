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
    "5uJtMzhWiVUpvZisV1NyDgWHdw94b7zWC3x1paUgHPmz5ozVT8yHi1WzjEmg7P2hpkhdJPpPv45X97YXdTTtKArX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9nTFDyo8kuj2y8QQLyYW2Dt3Nd9Tonbb7ybuwXjxXGzL5JabrBv99c47ui87vdTmS72fKymg4oxmFuowJrAbvs",
  "key1": "3pXZiNoy9TBfW8qc53wcS7gTTVdyxsVNpyMdTB7B8idtNB2Pm3hdUdjFwj4DdNEiCEbSzAdYM7Lw4E1nZvNYPdSc",
  "key2": "5nBroGmXxVLCTdF4cypAv6xmkQZw8NEdRVwbuVYiNvVHKkrRPp37qFAcj3vgn7pz4jsdwhpsohWChGRdEuMsmLH",
  "key3": "DyPTgE9BGyiZTSrNrHwsH2Yt3HwkTZdcBjmSYDndQQnucN2gVsEEvqAUYsU2485pDSi1z66gLzahd7hib9uJhJK",
  "key4": "3HoSWVD6h3faSkKbbyDepyy6UMn8k1FHCZDJDEQw1uAz2cEjnnMe1bGzx3nHTURmwh1fgJCHup73iSgQB5uaEJnM",
  "key5": "37x1Tav23ny9QStrYDLhQ7791nyiU8Rts2Dc4WiV5ntf7mxowcPmRqMSd9TnM274Md4mDASHav7tBfoo3q1F79LD",
  "key6": "5eriEEGeXC2g74HE9UvYpHjemgGGvJVCQ6P5mxz7k9fVycuwzkoYVf4xmybEcb7pMDJj4Cbo6N6z5DFac3WHz79E",
  "key7": "2dud3JkJNCpNGXT9UERZ9pW67xsxPzEj1L8vkvTfWAutrxYmYY9tELPiP49guvokvAWjqXKJkjCzxL4ad4EwCwEB",
  "key8": "5iHJcDRTx7aFUAqG9DbaCSnxqcGQZPZAZToPfbNyL3yFpjF9aRHharJvJSkT3t9CHzwY6trLmwnM49zVWnwx2v1",
  "key9": "4qcQNyNhLLFLvQSYSrEQAAgf52SdvAvbQNFngohrP5BiUYPFgQhDAmqBLrHDeAVK4b8CxXP3T4BZ7GifVpxMJXr8",
  "key10": "2u7fnt5fCuujtGZmrVkGui5dFE3qTQmk5FjLtuve4JWvyuLBQrPg7sMLqobrfRMRrWVh5Tnx9bCMZXH1YxiPpTSq",
  "key11": "zRA3PFBE32b3BpFKGudAnone3Wfs8Z7oXCmwunVaV8Cec5TEAL2LkUkxWLf99sGjSFuyyxQATPvpdnw9NFkKzhG",
  "key12": "FQE1xAAmqWbToGnhyWuM6LJt1E8zuFezAvZugiZ7HG2iBJA5RyzQS5e8PQmxtXXskjamuXTQunyMfZoa9dKUxRM",
  "key13": "5pTKm7cAzxcRMraBmCdabRyEzx4kmziL93DeT9V3BYEDNP1dewpzweiSYAVxAfCwoFEkjnAhoyGGW4foP29Wsrg3",
  "key14": "5PBx9pD1t1wiiw8PyAFBqwoherPE94ChzfC1x6tQisKx9Y8dUQcWUMLXST4rL8mUP2kxi3BvP6qYA3WkZxJ2VqX4",
  "key15": "4YSwymJcbyFGtTCe97eqWmtePrHqtGWewUzPhzeSppPCHtdesk7nZskiSUc1tZd3kqAxEKb8mf5WQB414JrxNhdc",
  "key16": "2DNk9iEQqBoozMLuWxqtAr6iekj7Xd417uFAMj8abU4nMd2aV3ThrXz4nLYjWu4yqkkmgdPGkrXYY54SQpiuomEK",
  "key17": "5MC7Rq1Jwcd1m3XSu6R4wTbkaqTWTM1UAqmynuRnaU8VJFaG2j5B1sdwNcAp9q89p86b6GDgsrCD9bqFyfRYWURV",
  "key18": "4inRw6UTn6RyeRN6CZLeH5LEsS5WNpM1nbi6WFm38C22B3mF5RMqDm9kNzHxcp6f4QFHM82mu9HCdxmZcj9JHUU7",
  "key19": "CjZteMQhLC7ph27No1CJFXdTWZszVUU1dxMDLQpNQimqjQbbJkkNdfAgP21bug5ZQ8RwKLbFp6NV1joDvcYG8GP",
  "key20": "4L3udHrJpRG2TmLUXkGpgVA4vvz8XfqVGDShxiC7Taze3DVvr25HdJ8RZMP478kxsNJNw3UdHjBBsFMDDNyzmZkg",
  "key21": "51dupzxy8QZcSAUL5cdJagXEGSndkLPjoPvwXm5EifpujnNDSvAKYzGuDVSwBzFYhjiJv3eiRhqW56auSxoekDAQ",
  "key22": "3SaXrTLXjaJimBrvmJVLxfXz4SUAqGcoY4fYffwqMFZ5nAmJy2rQtwNfwZtkWaX8UJXynTwbPdKg3rtnn7yTRFzR",
  "key23": "27PEw7UDVgJULNQHfFhFR6KCmkuSKqdcZubjHr2st5ou9v76ansPQaKsvFjZGfCFq5agAzfVZ4EUjaAN2gtMx8BK",
  "key24": "2NqdidAirN8BRDtgh2rb6tK398nT3cwo5V4vj9a1zaDktU6nqz3iVBEYjohaqA7yNrDMbghLph6m6xFZ1qvit1bM",
  "key25": "4JodPfzZXnzErYquprgWP85LR6h32HGMvLhmVSaP3JGMybwi4qPAVZNwfBGeqoVR3fG9t8cZ7EfX1YcAapXCDivm",
  "key26": "294vEwUWijxRzZ8bsm7d3b1sZaBQzM6njVJAAAfc7nNoeCzfsVoMVu9MrQ7xK5Rqes55TyuJBkY2Sv4cZaATvgnb",
  "key27": "3r8ZtZMKVYZM3YAD216SuJcqFWVN5nKw6igCtKpD8mUYJRYf6MZJaF7xT1jjt9J7ipHBktmBwDasxziQ79sSzWhL",
  "key28": "3B6UVqcGPkD3U4mUnWjKeucmHpB1dsRVUD81WTVsVcvxtfYAiGpzdwMwJenFs4jk5zXCckb8MvHGu5WQhRwZdrh9",
  "key29": "55nX7xvj3Mit7RBoEth7riwgSJEqohBqyZvMR6pETUtPQBaxTGSLJ4eS1og7oM6Bu3zcxxREVWmk3Qbw9Bu3WM1H",
  "key30": "4MYnhYdywPTv7JZSJWU1S8rTUzxUEWqSfGaJM42PPGVsUZrQQ5MWRL3kBZmAPQbx4cxBvFoyrrweVCf8nGhUC5uN",
  "key31": "5F7uc5arnLabRVdy2ZAnm7HbrgBoQw76CJLcCCnieQBf1z9AHWnMH6fonL72Ziqk2wtjH847mkog8qkghFeWyk7t",
  "key32": "29nJVt4NdUq5GUcz8TC8NjUaKUx76CnWsVMFN8acYK3KRAAmfTuvcMzVeVxne6Ws9YZH2gN55BWR4N8495vCE9pf"
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
