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
    "4borQeheVTnnSPaf5nRUZRZ2yNcwy5Trjx49T9XKCMmCgHzk4ttxrdCFN6XrR44V8SvBhukdaUV5RzdrPKeBpNzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6k3j1nQqgmARbqD4yTZGccq6w4cNYkQCtSpdjX3Hr5N3YqVhwSNX8kr7vTBnWNJJHQ7p6Gnoau7cSw8JiQ5Zdp",
  "key1": "BmG8PvTVfcwQYU9sQzDY8dwUtqzr5NnSY1K9cNRf8Dk9MNr9AAKLHzWWEAWVWXXJ1V3nEhgM4MjgsaJHjpLW3yj",
  "key2": "uzF7XuEgLnjvmHocqs7m51HPezPDpDbVnQ3AcUwULwFfu5nCv9SM6bLZpBZiBULyDpt8bzV2X1UvxyfRb8a31M1",
  "key3": "3tW6AAvDjqYXKeKm5hWDWKVBjzdFDc6jCuSzhQXVMsMH5nN7QRMyf7AZQDnuHvqZJmt5vTX4iwimcnHSJoZ9gc7u",
  "key4": "5xstjhjb7iakGZ337mb3H2RrQ7Dueug24VMZcXe2Ci8JAktMYE9xHRPxfmGc81G7pMesmJhUqRVK4LcUTMJYTzLh",
  "key5": "4CCC5RFhWpn4cBJP4Q7m4qU7cnnt9ZDSuYFEJdNMoeFBeBoTShyQP4Cagivoa6iotxnfXeEhczhRK385n2wv598y",
  "key6": "4ZwkSpPtNDG9BT1aP1WuLwA4sezFrK5XnUmfpaZueDq5oNtGYTx3bevaXkbPCUp4tnixN1UGjYUte4bhNpWdSmiq",
  "key7": "BaKEMB2rRovaKNp9i7VdcVaZgByLKx3ei2yXV9kTqTj3hetQPqjNqA4GDvYeXru7VmXWsxnqz1sgzrpBQaoaqpp",
  "key8": "3noMxBMWTgWcooeG7RX5rJjwKKJLupe9pdWFbQe5DXLBcas5EQmMuWgEoE2Jy4hGMA6hgJfycAoQnkLdfsQzadD7",
  "key9": "4F1UZaWcUuKfR6wMLV4BADQMPCe9wQr7a5RxNGSNvKE5QpKFGCZY1K3kVXAxofjC7JLQAJiUQHCZBmK45d9DwWwV",
  "key10": "3rikRTQPPVU5cj362CydhExCVZdKgpjh5sF56CajK2jVH3QEEHKj41WpUdhLBpK4RbEhWpDj9YdrPAEgy9zWvFmo",
  "key11": "j6qBMDwhmAUnfir97bZyarYwKUpjW9wnTaBMfX7zmCJ67XSgJqhpXrWojamdL49naj3PLaBo1ABn9QMKKADLpGD",
  "key12": "vSvB2nH5MMS9qXmELc1A8y7JEvmykHzruQ4g6NXFRUHk4o9ii6F6MAtBR8yKyf5YvkQs1xvRNL2LSuwixvoihPF",
  "key13": "65FEaunEvaLtKJXhnrY4V2Qm3mjRz3mDCGTMncSF6sgVQ9k5pxc9KRFodX5wd8xZVyjMVWZZdrRy9fi5m6wRPuHp",
  "key14": "5E1Bt68zfxi4znqdkvMzFQCDoWnPqmvyBdityq6HQ8rrcuX3LLXDe2Ex93NCZVNUmAhy2SFkHjN7bnpaSWxDwEbW",
  "key15": "5hgABwEv5WTJFXWPyWqUaRZ9AJBzRGpiS1E7H9TD8kYhuJN4hMnMXjRiCemXTnJTYpaPDeqX9AdowaWzRFZvJpZW",
  "key16": "3G77VR1K3tq6o4xG32mHkNfJ8YVE6PEz7uTNHnq3yuLfgGuMTFfssQ3MxFnzheYShXZAVeUArB5MTSyDpBZmckfZ",
  "key17": "2KV4YjV1YvErNH7NPrA2aSEYmHyJjHZCWrPxeddxs64ep5vEYqYY9tECCp8prfeZ3btMpWCpKwvhDYfMt4Xx5nt",
  "key18": "hiqEc6LvRSFZEjRdvRLXoh51BWZj4PHrbK4DFf4HQsRpVh8XGSznU8mMjGoA3fnbh8xnsRpcc32i3zbNggkxmTn",
  "key19": "3aEjhW6GafZ5MDK41weX2Rn8MwL3aEudobkwvUBSvwsHGuBTxqPv5XHdXrpoa5FVDTCdj5JdtzdcHHQTUND5znkc",
  "key20": "tS9FarpDtQ6fQQrMDAJAzqju1x3svJA3ykFPyEwWrCosh1rd9PqJ8QQKakjswCVwzBCJy5WsLG7GNAF6NDWuFwc",
  "key21": "biPteUTX13MyNCZRcozxjifhZh63jvzKi1QpoFAttC6Hs89L36bV6XxrgHHegdLyB12BVjYPs1WwkDWBXdGRwik",
  "key22": "2kufPYmmcTTMsCST4fXaJ1RkwHxYM9ErUad1q4qfDEZ2cWH6uXUb3d3AVvCMQzhheZcNCT66b9t5uMTfTj2MUwda",
  "key23": "2bbnYYCyJFAuGnzNm3u7nvJUuMB48kr9UjCxnAns8PijREyGGyrB2hmDDaLJkjAW1XNMGryDgp6jpCQcKQQUZuom",
  "key24": "4S7BimPxAfsNnKT4R5BMWPYskJ2TubtMMxWKTQU58Lg9joFAieSyVAekBiJnESLabAQWcebkcTVzJvuvAyWcCuSk",
  "key25": "2tcyUUCKxUaG4ibRwXJhSBicHKGfijDQPVs4yD4GTVsNaB3zEBBMHbZa3p2DHi66tzjSK6WtWi3AxdnySRxHBjXv",
  "key26": "4K2b2bg4txWCNngLaS1oU4BjFsaMBG3wtoYTgyEouStpcPsMT2GpTyFoGMPLsneUUshtEdWvNUViPJHFjB5zu5Ss",
  "key27": "4mUzLuQzCJo3PovF7xU9Hm4b3E2k4oARbRgUN9HahzqUP2Gif6xJTYVAMycssLtrXfmq9YxtQgqvhQwWUyaQvEDE"
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
