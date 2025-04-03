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
    "4arUDQsyuwuPUgbbpT6ZYkgLV2vUQLS8yGJbePGREKZJvvnUV8rB7rr9pRvWFdiZbE5mBHoXjHf7sjmrNywoJkDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xk1BWgnwydoWcwLFHWjuWJD2VzSg9uKX2u1GHacQZvdWg257CkVtQ6uXbnndD5SkXTns1Z5D3YfFjpY7ncfk2pc",
  "key1": "Cha5j584eHjQDvzbvbNFCJF4HijVzjTKvUBgSiR5HAL2TaRg4Zf5Vnke37h32RJBmLwk1KZPDmdUy7ERDjBFCuW",
  "key2": "49eo9QbjdUs2dRN7gH8bq5vA53FVan4V4rX715QboFSywF6jyg8dC19D14R1wYNSsXd2wFn1e4oHfjL1m63xdmkR",
  "key3": "34Giswps8JT8WtvZ566sPnCUH7276WiZmakJHM3ZikEN7kknSjUtUWoh96CTmLgdudpKtWPADXj9hrVTLgWkejxK",
  "key4": "3ouuGWskwvG3Y8Bg8osJsw8dtPKCJpFvt4KT6SjeGu6AHuawpc4bxkDZquakTN25WHBULuUVB6cKzidBNw7dch94",
  "key5": "21PnjQfXecSx6zBUxTyKWUtqo3FG4V5ry14p3q9V8tGN8rbcBAzJoGTJE3Ao87zCcJebwW7pebFJXnFF5GfCvY5Q",
  "key6": "m9j9bi8SbUXmVq71dpzgAFayq7iCYTwWXSRxbKtCFsq838cEzWDSj4xM5y8g21jFW1vssvYnYPhxF57mjMx3zrM",
  "key7": "4gq8L29ETdqp1wAXdDvyj6GJMPjX6EkkfxgagUYjjULjghAQUyZ341vfiUmxCn4jtBeDDmSEeR7RRfpWeHSRapNC",
  "key8": "3rhUtATgemV7DegxD4zAjNUpZwKDLdvBzVmkf3YMEQZHF9y6k4BAVKsd6x6sWQWz3igSRgFaWSFddnvGYSNWtNgx",
  "key9": "4dhPyanmbVEGwtJXoisDMnWgtbj157YmA6bKrgXVQz5UtBnVig1vNNdsNzTvSkXvtAvFVxeoRikyqCarzz6fUeoQ",
  "key10": "5aRgHrMJFQseBaTb4a1Qjs79xfTUDXUPTDGAe7HwN3z6JCCq9EgAoZhHbvQYudRAJUWZcMDCwNPjZ6NGKWDQbweU",
  "key11": "v7KqdGPkPt6Hr3Jmwmuyjs7apeCNBZnY5D8bwKcgXvPt8hhvuUKJB8y96j8gFkr4cKawU5HrCRCVHZRgrno1ut7",
  "key12": "2gqdVxg3jBEbQP6PBKAazrT8RRi5AriWRTwGMvUvgaspcehA1Yrgfb2oaCoMKEvg2Yc1QuDZm2Rku2So1GotgapN",
  "key13": "2C9AnwzqCisrdfCwTXHAzkfvfuo33wS7NP5zbBbuifFCp9EQUj9LqMrxq4gQQTdgYvmUGWA9CgZiMZ55YCfAe5E3",
  "key14": "xgYfvcJzFhxvmV6VS3QPPAhbiAab8EGStCrp2eQrazJfhYjeUcwkuqqK4BacnEvWDUZPYHRVPuwz84yF6ZSyYgF",
  "key15": "62MKwVmGPdfQc8SSf3GTMpneG15gLgnM5iLH9hNjxMuaoBEyhN581KSfAAJsEsx4eqqeNCyEoZfehrzjiGADC3P",
  "key16": "ALTdWEHExsjJDi3jg668AFXupjRmg5eMgeseBGDHSjB3Gi9kPEibZ7vMZXJWZkiBbgMBc1g8PzUYy9VofPXSDo5",
  "key17": "2mHSinJ5iupoJ7sha8SSV6AR9CXisdiiH7eH1PFn1N19T1aWresdHbBPCUoetTsjnuQkJrU94kPfZFFNNFLUvxeW",
  "key18": "5DvKYMJ7zimVMsZHPxMrocc9WtzmH3x7whJmxvVQuVh1rSHQtdBet2ETB38LHdFjezZmnTVLpaf8Huxca5kbNZ4D",
  "key19": "4QB7KgpNSbi7Dna5XXDFgszkSVqyxeZdQuSKYFy6Xc3bLQNfRNwvsqRiYUYF7CzZjiRBNSsQQFXAAW7HHKXXJCMs",
  "key20": "3NL4atCRNyTNjf9rTwviTnt4raZDborYg97pVQuhfMiJ2t96sEjFNBtV1egowiU2KyM8ur3xASFvfi5Po8aPtEp3",
  "key21": "W7rB3u2mABehMWFLnFpnGNhUVNmZYb76LJ5jzW5F73fnjasT42R8yivrbdS9mm8rc5Jzb6tfkBwqWXgbnVq9JZf",
  "key22": "4RDwu8m5bY8WseAmLJtSBycB2TbRxNCS56iXWdGh96eodkCe7SVud854dQxEiLZr4NkaBk2YYokwjdxywdUGHSAE",
  "key23": "Cz69QCsxjRExcFMaGJqzWHtd686hvg8SAiYPcbbcdCtWv5dJ3aBefbsBj4FAgNEfdsoPdY7chR1HMU2AjsYfimu",
  "key24": "5F7dGJSRjwJNCKUs77JgUu22sh4K9YrqNK5T4WNFpuTBCLfr1LVYwzTPZseQC6vzE9MD4KjaCQhw7FR88R3cW3Li",
  "key25": "2wTi92Z8EvTCLF6W18SikTctLu2E4gZD7wT5nXqDxKYJimqRWTSUYpM2SF5osYnNKJFrpkv3YfpJ4JbM8K28tsKJ"
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
