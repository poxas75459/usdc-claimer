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
    "3MTbYTgoU6fiqumYiFcV6PEsC8pZgZ7WatW6PTgVoPALqrgj3cgdZ6qegzBvadY8RNyzHLLZaxE8fe6pbBHxnCHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBzCnBvPEQusqQi2EgkUTDrwqqwA3hweKzrjdFUE1jgKLM5vRV3i5ss4fcxD9BeEV9ZGp35zoRzXhnTiiZEHEu",
  "key1": "5Du65dgpoU6V1e1JfyPqsMEC87PfGcbvxHyCwsa1D6QqkGmzEUuTPqjdqHx7MpJQbT24G3JTnoKPRexhxth6pbtC",
  "key2": "39ARjwnH4hf3aVY7wBJj7N17fR8FzZbYg5vEsJ8cd1VWAQFkAhD7xuRmwU3ihSLniBMAG2pKLdZUJ1q5JtZw8Vm1",
  "key3": "45EJKfwZVQXupRzyCyiP8p9qYCFimNk9UoJkJ7PXqn4QWv9F53ZwWG9ygZRm9fFeqgpL6QUs5U38dwr8LVoUCBKc",
  "key4": "3eYTGe91kPiPiAA1enLSBoVoX8ibSRteHLPKfWf9UDgo7A67ZX7cjioWF7Y8GqQ6npm7g6vi9NvoiszaiUpjKqJe",
  "key5": "5GQZT7j836wsqC2a9UnMKA1jgHT2yggEBstFV65Jb46QEm16F6WDaxRhH7C2PWzeZsdcuBr1nnr1A9g6uhyM7stG",
  "key6": "XZYEn8fFohHCMTBJ3uHY9mcvhj5Lgy8XMznHEeFL4jGS7JE2TVAG6jijmwDDpf7f9RHkdQbKjxoUwBPtRTRreBU",
  "key7": "ZKSp4YjqEmaBCZLyN8j7NoqTueSEGRLLCXaZBZjzHNKiDAr3iq1HJJHSge6E2zuqUQhi6tPWhRgVh8pe3jejgpz",
  "key8": "2XUN178FhV79y7ur1EKZDQBixhD97XHDt4q7zzG7Rv3c5aePbQiqqNwJL2NWqvbuCGhCjSQbGbgTnTStodX2Bw7V",
  "key9": "4zAzRgXkzKvE9qDgXmmvRGZiUFWGiksvpjHEZP9ZrvARLjU8VVUxhUSn7NKQQMRa7UjVCiVmqTcWt9nUEqhDrrsN",
  "key10": "2y4HdQE6gDw54yJbPwW38Wamn3GaUuZyKvm5P9Kw7e3DUdEqbsfTBejcrYz39p29JN19bHbPUfDJyZxh6oBUDoeR",
  "key11": "3c2okYsruEN2VQGtpvTszHb7L2cDwjY7oQXXU4sKthoN8qhXVtFmzVxpjPJbN6N5gheyyz9otQbxjH3LoCt9vqR5",
  "key12": "4YN9zSZnec7PBeHihZc6kTK2bP4jusRLYYYPJBQbwjWecDpfDLt6PymomPDQvfBFc91hVTuV5sNi6pPfgGruavf4",
  "key13": "56WEMnuBFUDUmUq5sR5RDP3j26w6yRmH3w2dwgUJAwu4DJ2zknFkNXKEbDUdMorjwit76sx8cWJ2tRmyGx6FnCEf",
  "key14": "3mEoSiRP38RSB7aM5q7LAtEYP8KdC9gRyj7V43WgW9hWpgRvtevSHGTve8Bqzn7X6CUtVbBfzDGgDi3cjfsZmZw",
  "key15": "2gDjMyroxmMjw11mNtvmGQC79YiL8BgLZchHD4reghxd9kDsuRrjFKurQ3L7RP5sMwiBdVwsV2mxe3z1JibYokj2",
  "key16": "2V8uemHQRNYzamCaVQ7uYf4LNYggo9X2dWb7LYPykbSFBHwdqC99TkHp1vLrdj73J52ry6Ysaddro9ENAz6PzABE",
  "key17": "61jEourQJNr4SzzzwkL3WE1XkebvQpYrZE8vuRJjiZogbMeBF1WQzoWmnN2nruJ1pWFXMkSryeXN2uDURT26jmJM",
  "key18": "51Ud5tjwwnkfKeSxdhrN5RkFgxagE9An4VixuueUuscKVa7xCUvfpjqegtWEmQm3ypFcE6YUpTqGK6VxChBybW7y",
  "key19": "56fCfpFaZTLcm5QJW33J9fZRTMnFHSHNgNMhBdeLPktoAx9Bj1TCHZnhhRR9DhzHnuMANvaVLpuDXVDRCUQMMXht",
  "key20": "4Wm2BLxWpsXBDE4RP3WNVWQU2twTPua35T5xMWH8517cGtNdxWwG1gX7Uzbit8At243fw6yKy1sPxSfQbFnRvSDg",
  "key21": "4rhRJ5AoKWSBDwbeULR8E8T4A2BrQZuX2McFWUW43monoE7pxcyXWP2w33j1QZqdcjCgWhdsxxSkbJCakijY1frr",
  "key22": "3Jsbss2v49SuYiPQrzhV4EyXLyuVjNB9JsQf6ZUjoyi9XmY9TnXtTMn7hKiBB64gakbAU8yMBEwHHTc31fLPHCHZ",
  "key23": "5mQhQ3EnURuVo8Pejh8YEto5BBQyQbtS6tWAqRx1VtzRGiCKzhLnfGnXBJZBxoSLYYuWWjM7zuJzbkYRfC35Metk",
  "key24": "5JCnRaKeYvgAu8eZuQFqDSFYLPAzbQLa8BQMuU1FkacnBS8b97PbvtDaGTcJb32pueYXk2iJZpsPtm7Qp2FM4XdR",
  "key25": "5ZS2UZt484xu6Z5mK7wacVmMLH584KkrnFFRzMmanFB1nRDqwSDsmJHXVcWNC95kc6d27pWUx5Xz6sYbyxRqaf7n",
  "key26": "3hUA2Xan6avdmH5ysxqmaG7UqbHX5GyJkpU6ShCf3TvRah3Tav32tXuKk7jTSLmobmXm5LuDNReY26CRsMvk9t7w",
  "key27": "5JnzY5DAhofzaVV57PH166u9UEpp9zpcqhaxey3S7JZinNjrZFcooYsbCBaAig3yrCvA3kDf1i1JUcXueAvf93ur",
  "key28": "5sMJ8Aecjmifxd1d58we3NUgeHZd7M3ELCqbjLxHJ5kLDhzXBikBVD7fZKZfh24iQouKE1behgu54LdHEXgQ7CU6",
  "key29": "5eh97Zty2DHvhkFsyGd1y8MtAbtqXrEWE4CUMZDqmCaZkQ8EpwBV7smuPXGiiktg1DqXn5zqSb5SFhPcWipNzYV1"
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
