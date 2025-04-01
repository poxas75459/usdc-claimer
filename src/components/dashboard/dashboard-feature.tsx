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
    "5Xag7p8cGUa3im89uFky8ehfjbrtfvBUT2GqUVT4PU1GWqWjoYxtsjJiDyowWCxVX9YkQ6wsNJrynV9C3GtxJJ4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBSyHuaTxsuv4jd3GDrrhYjt5W5mv3Nc2rzxaZzAsG7vBqFAfiQHbeYyNwbx8xvDKPaSkNrgjA1Qdc1mW32G7qx",
  "key1": "4diUybRJ1fsbfZiySrqL4aKt3NU3hag4uJNQerdrX1sTtgiJMjeE7nvV49H7HzCHFWypRFFF9hSzztHPfysvtHE1",
  "key2": "4KFKUiFDav9VQs3JjF5nPPprqBTZe4sqCFMHwqaD6BsANjrXT6VLqbk333qxzM8CLuM2gdq4zKkHmmu9Qjxxmpgb",
  "key3": "5nYrYHkdZrEKc7KQ2DPBEgips8n5hiBVgWQxmFUnjc3Gh2ZtoUVVr7qV1ZKjXUd3GHUvNSnNzGNKoFQEwfiWK9D8",
  "key4": "4qSmdozUUdm1ReNwBt1mSZAaRHD69qmh62MUyWx8chjGKdQaSCYxrX8rkKmZFEjcEeFGAumM6dZv6u7ZRp2dEVcU",
  "key5": "3cp9oY5nhXcvB2uesS8hcZhZX75V3cS2ACzZNgXb9Gd4TmYsYpKFhqCoHktrD9M2vY1eFtV4VUcgDFX73dxgckRY",
  "key6": "2ZA1kbuhoQmMSQCJWf5UhvkNfa8eh2xeUZ1Dy81AvAi2HonjXF2ELjwPpi58N1ARAB3CML8Wh4LRwPHucGasiGi",
  "key7": "42HKJ7updW37ZUfL1yX6E6CxC4dHjpasfWGPXnWcUWkPqGTf5DvBasabjJevKyDvV4ddb1ZzAxw8KxSTPznEdDT8",
  "key8": "qKbpBFDEqLMYVGU1q14rD6motT4Y6CMpANaMCBz9ced7JpHw7DH6Ty2aMpQWrDG361tDVEWeZH9ejsqxWEVymeU",
  "key9": "4YLDVtYAz3pH4LzLcbKTxh6omMcZb2rrbDBXzD5cYyjhJKVLf82rviSedHL6t75azZJDLQk4ABxYBNdVbxHx3Bcd",
  "key10": "mSk2KGRmcBX77zeWbxA1T9t4562d5VkbGnUyE9qrJQGNTgrobHtd1hX1ugmPkhcoogo6HFmS1B8QQeC6SXR6vVW",
  "key11": "ZwwUCopuqKNFh6nmFLWtRBn3KmhiWJoNWCf15Cmbivft9dVdCBzupyRJmLkNJ7R2MosiNJSv3QkKzKiYr2xnvUa",
  "key12": "57T5cx8a7drGPJnHPXYpvaPzdWj7c6AJL3TsdwHWhQbrHiv8GZb66Y3kLtELzRkJAHXg4dtmFAFm6LdPtNYC7kiG",
  "key13": "3Y1HyALaFH2pLCvEp4dBksTUY38KyUfUhZEkv6ugLovgR9j8scyK6qNRrBndaaeb8xsq8NkixuQzZV8NtWfVs6nf",
  "key14": "JZTG6uyDS6op4YaXvaK3YeXeWBXxTKTqaBet1aVRsNcrDEmq53Gez6x46ohmqqrzXGAp9W74Xu8n2Gxk2w6ay3K",
  "key15": "2Qix5mKqQ296WvjFoJMyyzJKioty4Z7hWUqCXnTYJGu3KcDHz9cnuCS22kmuEuBSfJUCBh5ApchDpkgm1Pp6DDoh",
  "key16": "22ZAen1VGpPHCGBiyUfRtvkoG5uN7ytUb1bSGUHJj5uRKKak7fivuHpSGrJM8K6fXP9SPpAejWRhW8kWCdCo2NWb",
  "key17": "3ZGcEzbPqwKTGdbdgDsmP5e1RosKPWmsCckDsEvndiSjoyRQbPgEpfkukQuPCpeKPYNjsW1M6mzTauT2XXT7cQFr",
  "key18": "5DrA8b6Hr97ZrPkbPmhe1S8GavfnFr2FGhs8Ab9Kstqw7KDLubDw8YdLrHJMHjzncYvQthNEaUmRqkXyuFS8VqsR",
  "key19": "21rNMUwtNrLgM8yPaCbu7bXZhRHiv5p2CuKA4CkJpacKyrsCWjHLZaHWEXEKUUDbuhaWRtU7uruu6tLGbiXGGSmP",
  "key20": "4LwHHqxCxBRsHaNBMCV37diajJhXWu78Mm8z4onCbivvQTT43UEaooT8Q9yWBnsfH4Gzm4Ur62Zhqq34RWXRuB4P",
  "key21": "3s3YaWShtiLkc41jnncHAGKo6bXJHZQ6LZynP6sUz3zLFBAAV6YnP5D9eMLJaMVU5pmDJsjCHCShyYj6BeKRDc4u",
  "key22": "3nTEx9Z4JNwyyUtvCzKb77xXvKNXX4tvdiKKZZjeu4BFn19Gm2kTKNfyvY2G8M5y86aKQrBDzEBp7F9zXmTAATm8",
  "key23": "5SjHR4wN3CjFY4um4KeWoXo3VtYxXQirJ1jgeTypN4umYhGqHLVJTFxwC6rdibhUjvnWJLxb3fdb4Yu9xHV1hfun",
  "key24": "5ajCqHKCHRUZm5Unoev3sFiyqpWyTSSMxgAWf8KyvwXw6bD6saggjhVVmvFdnuNihyEtrTa8zd8qpeixwqjWM8vB",
  "key25": "zZVspfctGNVNJ2AtQaJZ6rRkUW3mFkc6QpX1SgUYQxh1w1o3YFCfwg6PgsEGXwkNX5Jwe7Zn45nj3iXmAbASuw9",
  "key26": "4d4ibH7PydxnfZENV7wiUjrU9rcDwiLVF8EnRC6DgpSXDLqw85npcEr4LSL4UrNpmxyyy7wr1ZJHAcyJvpnCbFWq",
  "key27": "GwZ7jjNrzLqNYDSjAAs3oaqLLVhStBkwSZf5ChYb85pHkYEEQqRwQskVF1sWk24Ns3P8SrFLtk8nFaT6NRAjGe4",
  "key28": "5XueLAtNPtvBaM7bKb89PYyyX3WwGshL1ACjQAYXnbc44h2JQPzS6TTkHngviN5HyedB9HdVRBGoXunpeViVYLq5",
  "key29": "63QnAn7xv1Q3Fw7smapDZ9Fp2wx71JdrBkGnv9NuC4uWxBDZeBEpSmRfQypJyFoMiexErvifbWBbY9z3SPYf9edL",
  "key30": "3Zdo57FaDMmZV2gbe8aRsn5sbe7DC4r4oUh2hSVYfv35fZPgZVtEPBwsAc88B3hxuMaPL9dd8tN5Hp6Q79x9v5NM"
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
