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
    "5pzkGhS2viPZgygWEKyyU76AdyzAE6vhfXW7XqBooEkf28k4Z3bT2ZWtCZcnfBTjySqRvcVURLFwqUsMhpFJPvSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7u3NCE9foojKa9SXWccHQNsqQtkctj2MFm2meGg3qmsYFwYyPfS49nMBaC5utAVPPgVbfyhSdqGWnoe8DAxppK",
  "key1": "3wPytCxJDQUecfoC9pNWQEKt8cRHzD55qBLHdQzgBHGbJgKq47jhnBTr9AfTeVQva2uUeBHNwGPRjoxbHmGLWwxR",
  "key2": "4tzuqNHHW22SYpjU8vzgLgekdLaDpYG2LWHrn1UKG2q7PXA6DQuFp2PngGhkt18hsG8Kucr9vw2JYajXtGgHyfPq",
  "key3": "5uZYjLwsSGTCf9khyMkYgtJ6B8mRKzjt3bswbPSs3jXjzxMXyFXSYMMLPkb5fiHPL7nTdPBSw8NKAaBC11QhTFss",
  "key4": "4dvv8U7zHnxFtspMjMdDoqmw5AYpuRMGXd261SY4fG8nt9UjwVWsFghbWSXEPcnQrHAdZ2fdzMDyeF6mFAe9Gbce",
  "key5": "4JTckAAvyCMWj4tBx61NFKf7ogYhkTW9Ddb2tjrJBDBT29q1i1VWnzTNFxzERtbCMnkm7Ce6KTNkusjXcE5A7DRL",
  "key6": "3pAWnfLPcXU6oRgC4RwNT5N9cAV5hQXQumSNPHZnsWbJHUebK3QNowegS9of9Y3CuSwYifPHrwMJbhvPmPBDnQju",
  "key7": "2sb55oL85C6dGya8jaLtvSCL6eJ6JPgBp68AY14seMHYYRumXxUptwkT1NHPAJxG7WTWsJWHoL6DFCu5wiFGUAZZ",
  "key8": "3iuS4ukMefShsRFq4UuxmaUXmfnUyWH3QGJEb5m1rZrkYWW5RffsFThJndv8QHWmmPP8SHxtifEMgP2Ee3RrmUtj",
  "key9": "67RCs7pdq7HT64ZSA861uvc8nSarJYjzCCdzbH4cqLY3FbT49KXABxepz7CBRLiV43uXN2EBYku6ZxJZ9rU1RQBW",
  "key10": "3BTWvxXShgkFaFbD4n7gpG936QPaSLYN1W7BM7ajD14MzDDLzX1MAPHqtZYE5EMN81oLQ1ZKy2ccf2Kz4bi4cfcj",
  "key11": "5dKcYF1sjjJvx5kBfJBctXgcw5LsMa31ZgkJdrzfM9oWSua6GkAiw53wGc3FUyLoCgBRPpKVspwrLkaNQPLRdCwU",
  "key12": "2PW6aiDunAVP9xWjoFUT8yuJ9pJq26wiuhivdhZsJQKsWeSPJYG2muFMvhoZhfvcDF2voPFZVS881KJt2ixLBNrP",
  "key13": "2KZMo467XRNSi2TNvzZPgxpwa5KSEeQDD8i2nPVysxN8miirsLcMdY7wKaFpHEpeTgFKeEWidE7RnYz9Kz64xkPU",
  "key14": "4EpfiQsaeamKqfYce48jQVFsmdqwLDmCaVmQjho2zFPFq1ucJg4GefmToeSHQ3vqAPBsxzBzo819DahzpUD85L6b",
  "key15": "MEoPvkPnMiRm2zm9cTeMbMs7oApnpWjDZSu3YovEqQLZ77PnvMirWieJgfK75gn3ZNrawNnXaGkFU7qzEJXHBCF",
  "key16": "3WrP4jfMqypnuF4yrbXDYViKLcdW7Ls6mQxkQW2hdiUb25LFexvDwzJ2CkcUoKgKLXZvjpzxwjfuyXj5XB9QTbwq",
  "key17": "541EWoPvotWQUL8KzpwyStbSF255ogoU8geGodCjmar5MXs5DoQhX3vsh9dXfnnTfJfpEbtM1VgkzPxREKygm82S",
  "key18": "RcC6Wrf9jyKV3VvkSAcn8ciUGkQV4nV5ddet9mSV6oGRaZuQUGp4iGKE7C7JBerR63hTJXYJoTP91tK21HHbyZp",
  "key19": "2Qc4WUg4VYVdKDUWcPxEf1vwk5JwSwsVypuD5uR3SCaZkirPftyyEPMGp1zJzjte3x9JuSrbXnNXwf9oRytEaYLg",
  "key20": "4HF7AsuTtRwew9mT6va9wQqe6poc5X6EYopY6nY2QAn82zCesFD4ZKRw4i7sNTNetVpW6y5C5yziz33n4HoK1KkN",
  "key21": "2LUYBYrT8QyCyLe2ipfQc6yRzk5HY2cbfiC9zDUesBRfgyiNwtrjrW9cySA1cskBhyTDKw8go5jkHhvRuFAubipu",
  "key22": "3s2ehrwSUAn4EnmCvs59vhZrMWuepgu1U3ej1HHm11AfayPYFEmQvWWw753truVBQzkP6C7vuCqu9yHXGLLLh7ae",
  "key23": "5aNKGnUsa5egkPBGWSFjWB1pPuRD8J7rKZeABLNE9NGSYtthBgC7T26iYfEZNGKUpEX46mBcz4tW1bAyfusBayCu",
  "key24": "M9XNkumFSmearEGhco7jtH4fd7LzeBcu7vqTy9Km68TLdLTT9CJ2q7kHs5bfsWAkovNzRaU5mTo8yfTZimcw2WS",
  "key25": "4N6CJZtRurxdBbnz135nQ6jtTWUBrREaeSqWiMH7u1HK1ZwYdmfCGEqxLAYUY7uMTnoq7KGCvzDGd2K8s1h71yA2",
  "key26": "573fCNWpkkDUqKjtZqjVL2zTrmyhJzyAWTCs6R9dRnU9FdsSE9LyCZAb4YR1eaHJCDPG6rVKXbTn2hU7qNcrepfa",
  "key27": "2y1CArwxdo5MtGpGeqFrjuGhiuqA91sFnFB6gt8szeMf4YAhhjzMRPNCejh4fdoibGe4E353nSmr9HtAPNmN2kYN",
  "key28": "4K1HvaJSHMw3Ki7Y4KD8wt2pGZMsg2xshgWFNkjciUdyANbFMs7UaYs1Y2XuL4D7i2ig1Uqg4bHuqaZEkMG8BV3b",
  "key29": "DYCTWhyEvsBCA6XBV9qkojv5QAtALMV3VucGqS4vNRD4TnJkUhzgMLk2SHAcriGog3gRMrDJYBwgDupXsyia2mc",
  "key30": "2PBpDgPiSMqnYbeb2hxSzoSoD6z52hRegj1qhvQREgdBZcHfo5rZgztu4WBqo9TAnWHcoZdvC7nmZFVdXGq1RaAv",
  "key31": "2BcQ5qi7BeuGnCrMJSktaA4ww6Lo9oxgiLnTtvxybdsk8bipetdJKpTMMxNMEhqLspfz9Unzmxm2Tmh3jnFaoPpK",
  "key32": "3BS81sHEAEdJYqMbNurz27EHJs7XaNoh4sT1hJbQUGtMTPnQGkbv8dKdkcK9paktYFm6kFLtt1mxPAyvEkGko7mF",
  "key33": "PsNnupSkEoXVT5gZyDDpbxM3GWnHE33frgttDrJhpUUog3ZTELYsWiQGmTGHaFRN5n5mhTCWS3SoHunq6Q82d15",
  "key34": "2r9kTdeW1hviMpygyTd8SdTv5aNRdbtLVFn7B29RrjgUmvD9vk34vtehcxYpWiZh8PE32vMfm5qY7hMb3izWd96C",
  "key35": "2bk7S5jEnsN8HCksGa21toBqejWMgPQG2Lhe4rZ3gvrW8hejF7t9vsDSWKame6U6KFZi1nB87B8rgftEy3YAM4Ax",
  "key36": "5aYXgvr9bjdR88Vn1HPhRSByeBw7jKKQ9RGchzfaXHasM6JBmYg3gZiauKGifDnAKBwDQQjs7ZkJpDMEdhbeG6n1",
  "key37": "37je9HXRMRRmjJbraBfZZwDa4eqYmhmtS5kuqBapJ8fzMAcxKqzykcPiYLWfJo2mMdi32yoExiTxXstK4XV9zdT4"
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
