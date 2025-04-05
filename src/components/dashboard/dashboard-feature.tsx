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
    "3MZikBtx98YWXew4iiHto7S3pVVRdnLa6u4HnFLeCQKmATUGJojNpVvJXuf5rmLSbPVQVRJmJ46xg1rat7P5JG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFAMCJkby7T5E1HKk5hjGzuThFyx1VngW1qqMhFsZ2MBpEeNzjTZNMDZmEoJ8PGT8gQPUhSXs9iKd8JH16zfjJ4",
  "key1": "3PCmSh3zbQ3Yxo7uX44W689RAf2NkjEfGSxLRVbzDHYoXdpytk4wBUyHmjvKDsNCLSktcBXAjWVY3uRJU2SRhM2W",
  "key2": "2HeBvDnuvQWEJEtCcgBrL9QbBQcCd3k1TENVeAC3erLVV3fgz45SfTkV26kv2vsKqGJ8qWQ6oEPJc3oz51R912v6",
  "key3": "4hufLc3PSEcRVB6XbKRvcJAFmLwr2zTTp4kWRJ8vdHNVhnxTJ6SCcCzi2SW8HyZD8jFZpKHqgFbddXnFHfRpLsdr",
  "key4": "3m8w933yJVidZejp2WDHeqTKqNTQ3s86p6JfNMZUA9j1vp56ZRbit9dpp2yngGJFX9gBtE7MLGF1yvEXGRWsWNE9",
  "key5": "39qMxiU6iLiboC75Qb9WH8qxp11bc9caXNp8taptvNq67XNHT3CJ351N2ieq7zS3ccF3QkaPFDRzDYUmXqXjdDkK",
  "key6": "EwkTWAdG7MkVuz7nEPdQMwwX8ru7HcHwZwvLX6kZ41abA9GgFmFWYiU1VQ5SnXmiBYKqLgfTEHFTXzvn3qiie3b",
  "key7": "3cCLP1NkRgaCx9RwUDXYCVAtu5tdPdVK6NeAGSLSXYcPZmq1ZQc46a2mzxy2hE8FELRejeiPk4jRzJm7rwo79ZYa",
  "key8": "9jKkNBjcAHWxnefXkpPR2Za5Kcn67LTvJg8PBuP3Y22f91TfwysrvKmn95v4qZDyDPqpktfqds5tYfFmsmnNHq9",
  "key9": "54CFfthVUukceRtnR3eDN59Ap8tvBWpD494mhZAhyRBE1nLxYGQ9ndmP4kUhQwbbQHwd1kgykJQEHjsYicgMFWHw",
  "key10": "56cvVaggpurY7Vp52tkXk4522jhF3KL4EgBD7soRENkcJVMyQHh1FfaLbWLoiHc41brcMc7ziesPZpaZiosyZWS1",
  "key11": "2GHseiceTgwuuCQaXujV6qAVDEqaESt7TkccyU2ARfXQVuobbaktFPQpwvnkYo5CBG4RwBKj6NPJLM7R2Pgz93Bd",
  "key12": "67217B8TyBvaRS61d36ejC3H4FQ94SRzPLFeZdiUtZ2HVJUaTYMD6ZMGgKgRyHRE7JhZ5FGhNYrWJ7Aq6DwEPjM7",
  "key13": "2SS8REjBeW8N8HUfx2rb3gi7XwxwcwRjKBkWAcAf29bfvk2EVJJToEeEBNb9fUjx7pMYrtSAwZn6pYaJV3f4PTX4",
  "key14": "2ZhmKHHpbCfKpbkoa3MuPPoYbRadrSWzFwEezz29dExyYCtb5zcRTvQ5HChuvgqVaevfRCsfQU7JEY4Hycvhg5jX",
  "key15": "4DtjQtaAuJDnK4eVJeCTnpUBkv6oR6AejR9eheZY9wQdp5zuni8o9EoHviZGLN6ssnsLwFhrgZdnYf2FQshTGRun",
  "key16": "cT22uc7R3WMHU17zjAzLARjTcFu5TEpA7MBJbfQTXLC27412LPGKxKyCSxsFThMhdudMC51SnYjbNaMbuZyFM8Q",
  "key17": "4ZTvNiVwGPy6rJhr6LUQJhgyDKSt4m3dBKN4DkYWaULHPobZTQCXZArbcxT9Dk6dnEDzPhQ3y5xSFeCQphkz97nd",
  "key18": "49Ftv6fSinLSiNhiwqAdzGanRxtBfN4ZQTJk5BqArtfWwmZU8cUozCgTUEJqXUjQQVXg41KfD3foC7xVqDwQcuLB",
  "key19": "5f3ScbxwnQpV2aDarsUcdZ9miNhZHXax8ozVnynUBDrN6wC9QZ1wz5oSDvW5eVHFjfNNNHDRjiGP7PYaLgP3M48s",
  "key20": "5sW5vuWUYyM66GaWVEKh1WYSTd4mCeHLDqyZBY8wrKFYdAfa2tcdMbiEA7XMXctmSJgeExe6v8yZvRR1KjcDyPKD",
  "key21": "677bYHNBJzo2nLHciHg4rwEdwkpXeVCQzCdDcXXhPyvWEiZdXnHACfU4aLq79CXQxDDWiiiXcG1DTYw2Ef2TnmTa",
  "key22": "ieGZiEXtevfndCoTpqKY4AkbtFgTF8UpiCnprcKAumLMMtph9b6ij5TCxGRj71ar3p1SaLpoWcDB9VvqPHQ9ZKD",
  "key23": "g1A9UNaGXoZhShEcXpjVqkEFr7NcXifxejeZEEKfaYmJVafg7FSUsheRhjdu3KoFkAa7Uwte4gDsQzcQqDfRSg7",
  "key24": "35UVBdNzMZ6nPZ1uHiuzHEQfwRtmAmDoAiviNkL37j7MgBdRVD8UnV5b5XX3JBS5DJKWvFv6AS51gLM2HPASsPxW",
  "key25": "2nPgzCrjSrTMStxu9NJK8uSE3aP8xPpVhi7anMns6ouPpG1639C9o6gFoNz2VB4rJb3Gxr5dPucbkWg8KHmLH1qR",
  "key26": "jQYMuRGSvDLCJq7RA3CVnq84mJQkLiV2YeQqqZ9WAKRGze1GQ2GaSHnWNrVCMXfdd15tS4RjzndJrVeFgmTeaaC",
  "key27": "cdYV74PSj9Zt5XiEKLntMn5xUip6bS9eTMwcUuSXWvU1AJZinxKwEF53LCMFmBjmNxiayZQWgDxuJyV8XKGj6Yb",
  "key28": "56DALtrgyhqjro3V5QuoGLzkw97Y8RQ9hvUWTZDS5N8YgoBFg9tjjBdBfaAEBB9XxUbYPJBceN2QNzmCvTELAQeV",
  "key29": "5YSsEF9t55nNrWBDh6PMiiKXiwsdN4Zi3eha532vSBSbfDLGWn8dp8YedajhFYi2HsD8Amf4vi9DigQaAuEs4Xfx",
  "key30": "3xxxdBKYF2GvCsRrnJJKEiQALhkAAY4mRQPSYPGxsGLdkdwoJ2YCRx2unuZDh4q5ennTs1qDSJSoZQzKq9ZF5AZp"
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
