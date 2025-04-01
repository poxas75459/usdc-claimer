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
    "4iv1NLAKTkvdvgH6v6XqAHFEpkXqogAq6AdAymowiKQEQJCrsP4Qpbiyj44eq3YeZhFSdsicHnQaqQCs966THwZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njd69tfeCJPZRcwuwEz5YPg61KevAr4CjTK3h81tPzAgKJPAYKY4AFmM7uweVcbaGKMDfsWtEGsj9BuzRdXoPou",
  "key1": "27hRciFN7garXLMGXo4wcdYvbgCUoX2o9EpcHkwFhGCimoWcLSYhR3PVHvS2cK5fa6wueVewnm6tSTgwqxYBzNi6",
  "key2": "3dnQPyYLJvTrdysVvNYava29WQ241waeU6vaqf9PnKi391NunuEoNher4bjAWtkfPqq9XLKPzmFwLZqwQQnZApCJ",
  "key3": "3ppgr9sku6kyZHMSL8CC2qcxtnpNvns3NXD3qAwNycxiZCL8rb9B8JzGH2yuffCXdTgXokZ2MiK92L2X9sw1WtmX",
  "key4": "5naieoa9bZBMEK4bZNyDj9ni2pAKTwoy9wRdhVtDqM2wzy1CXHx9cM5y8EaQsxyEp2MoWCVCD2ZQGJhwJJ686MTz",
  "key5": "4RWU4vD1QhsJad9B73jMZET4wCKDCGTkfZFCMpyXx89dMfRwBoarkvtsMcwjtiavpCUpYeMRv9LyXyQmHcENfZS6",
  "key6": "45mMwTydbDK84ucPKaf2r12aEE2iX3XGmvra4hhzjFJjeTP4FcbzEgQ2zqH4qCNuk731GtxM49jeFhfuAPT54dbt",
  "key7": "2LcQ3MFW3YnpZvGPZDSVC6gBn9oiuwB3phNWQmgoW5g9H3BigLdLUTQhinkPBCBSR3AerqhfnwzT9hhkjmyAp52L",
  "key8": "2FeQgCnthqCgPcEjvnXHa3R6oGfoZsknF9vYkohLdP3ZCpjmfEHLbbdxCtF6J9GGYu56tGVeUHESkS2Khcry2u5z",
  "key9": "3T2na37cbX5n2BaT2JHdB9LadBuoUxNwRzk31F26EfmdZkqn99ugvHxW7bZ2qc6tFCJ4zB8SXEkS3RAHkbzXuxxU",
  "key10": "4FgqZqDB8SaGYZpcsPJ41Dajokzhrwtvr1pw5RwV4Sx7kDtEKNTUA12v9uT5WTu9erFwDS7pwJV7d8tKC4xaC5Gw",
  "key11": "ieSuVFRqy56aNm5aLLjR8HRk5dHxGcAN3nhZPDWzTTBqsU3ySwJ8vDmedgCAsvgoGTBSQKCxV1V7Hv34jKPQHEb",
  "key12": "nExNGKxhw6eWeqaSmHU3vuRh9qpSdq1ygQD2ZLxYpR51pEN6Moz7bA86zBgFD45Mp85JQ5RioNuuYbSVkUaDH3S",
  "key13": "331fFFu6pbX6YUGfn9kMwcTeXtSFimoPHyMBnnzk3mfrNQ1vnwiUfhVxgeBSQbWVbwsTBBm7HqhtoBZekBK3tj3u",
  "key14": "3L271CXbxxoWNZefu1g7HVq963wuzTFeC2EHTAP8Wf1mQ9A8y2NTGYtVmafpbeme25T4w84f5VF1BJKSUFNeLFi8",
  "key15": "36mAhfGTvJ8bYiPJF52rJYbhF36hpV5dPxUkb9S4h1NiqYk1ixd5pQgj5ZBdrM6tjy7NB4NSLjBHX8fTMWFjMzBw",
  "key16": "325TyKVmsTTw2eujJFNYCXV9Vn9tatr45mY5uRSbsGUM4DyKsEoFjvJY4skfoheDC8gxCMSvHsErxAvYcc5FBQFi",
  "key17": "3k1tmSTRXtBT3Uh1R8ZVAYZxTAot6HSw1Z5FkvVM8idkYqUkhmJvPoMEKMPztMisqN2UzGCKcN2aopFYyjdv826h",
  "key18": "57YDDwoBi7myTM7FLTS6DzuJKzQeNj8DyGmfa1mNjQLLPuH5432w2MTBs87GMjUPpQDiek86FATAf54ZfQ5kCrK2",
  "key19": "3kbCDDmj5PXX1bQAoQG23gC16VSm3t8B18zJnP1K8ca16YH1PUs5BmDb5TEhk2ng9YyBJkTrjjyQxjH4fNm29ESa",
  "key20": "uYqqFXFWTRYn695135PwSRSFVbRgsvqhASMnkkYiXE4bzk8gaJah5i4NJAkQJMBLn8pmzY3jQk5LTRgvcw2Uw8Y",
  "key21": "4r5MgZ22cUWBE3TCx2aDUTBjKFMazZrcqz8tZ64etrCuauWNZJgj5XaVxHonGZqDQqgBZRRxuZn66kEHmgEhtPAh",
  "key22": "4ConL5RvNaPAXTu71nmLgSjDRa41KgFid5Dy47o9ZEv5Z9JS36fEqSng9o3aeWNHjuv46HmyCFAveKhVsXVDKhwK",
  "key23": "51vCJxbLE3X5oDXS3BfqGZ6AVoaBcdvbXv9QBdPdSCw8tEwYhP4sfhNhXaYCtHRuYKsaE3trsjdM7CwfXsN9aL7q",
  "key24": "4w5NdCBxGzJbxLDyA3Ezf9CEmwsv9YKZ3fHgWvVwbGCYopnqomEkbAyowkHiHpYUPAVMXdGP2BYxXkULrC2RaAqj",
  "key25": "5uZrAn1pJbwK9FXXk4sCS1i4F96wbMrp4apfKWtdxRpdR9QhkqVc7ug9aEfbWqxTYzbEzuTfZJBSD3KyvXaxvhWh",
  "key26": "5YQHEEQ8BbwdSJupCTPpJf3M6fPr7X2ta5VEDQsxiMBg1PWjTSc3baYUbB6RYCwzEBLbvjdv6HLC9ti2z6czdFPs",
  "key27": "5j9ekakWgAL4NASsG5aobVWR7oyC6m4Kc9mQoDheT3dKsR4XHRMfs3AkviUKM6tk6H5TmvDAtsF4pUfSvWTZLHuA",
  "key28": "35uZnMQZvzJXb4eepr8Qq5jn9giBhZehbVmRt5fapKqgJGbUxmDzNm5gAg4RuUPsG9UhW4kuYWaGj4E5XGXzznJ5"
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
