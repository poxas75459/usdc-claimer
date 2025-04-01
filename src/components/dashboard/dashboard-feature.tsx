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
    "4uu1EPF8GLD3Yu9fZTfE3LsXWg6S6yV61QrjTtVNjdHzabfgZKaCQgTguRm7CcjThGHax2tqaX4YKVtmAva7KVFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMn3RG3BLmaDzadrYu4tbwL4S66qaYuEVEuvKeRzAcCyFzaYSFpB5J2WY8BFeGG1iqdTbpMKxfmSCL5sytEVT8U",
  "key1": "2wK8urDYcafWMpZbi3roxvfiNF3siRWNnjafbk3pV1Riix5mP6egQqPYfXb7LKTKH4YdFV4WB6cjygBt2r2FDwfh",
  "key2": "3XvushDYXpe4kmS6MwWEdxVz3Ujr3oe84ourY5nMwsw9Nt8wBNgLVvTSDc9UqhzdU3SUfYP8bu2En9hJJQyrQKvy",
  "key3": "5JrtUrWEQFcKckUvhDgiKFUvms6JVnp8ryqarQm22xUn6kuKuBtrcEx7UyV35LcSzQ5PXNcJ3uF7nJBQHKy9vHgi",
  "key4": "HG6UWqfZXLZUsDWxpXj4YrXJ6KPP3oWCDFqY7fUQ7BRey1UAjzFR5jdWWC2gPiwGoVM82KuMtDkbPNDe7c6qkhR",
  "key5": "29hJ9QJj4mXcJGVV9hRhPNYF8QszfCCwU35JRpSx982uCGkbZVWNetq3VBUPesvVjNR5zALLM5VCEm6TCw52oGHi",
  "key6": "61TZ3aKLYW2Te7HmL9cYExdnmW5dC9eCswWgC5xgFN8EywYDdtEyNTUwX1Z5AdhLbd4zNDyKMkHAoA3L5g3BPCKQ",
  "key7": "4QWuuBAJxFhRmCesqd83tEMuXomwwzd8Srbe6w7wGVyrxxZi5XyqJUbkQu4ZDh9Rjk3xVkkV1raHWzJNGav37HFR",
  "key8": "yeoCYj8RKpSusAUzLMS2qJcQSbcT7k89yw8bQKpZnTFMmPy5hHxqvgueEZZgdjzMmAm7TDf6EzQ2Ekg4u37XKxz",
  "key9": "m1mq9EypR8NccEb1Gc2of3RebKo3xZ8FsJK5dRxPBp3hrUvinALvYwNKKaQRp4VV5xZrRGLoio1iEynxUf4g77n",
  "key10": "3Y9urAwRKR9UhdgTwkDdwd9ZrUdbB4GVVB9cWrLQv4ENenL6Rw6VqGGpdZ5mZPekt8CpCCr7kJz6jerKGKhbqkWM",
  "key11": "5PS9VAcj6cEtVGEy2gpHceYEY5VDhq1ZhMNhe8WA8q9ASRFDmQTEGPdaYXhCD7ytvG55bLFY55JPedu3re8mLFuR",
  "key12": "2cbPUKsk6tWy29ZYihrrz82C5MKqczPrMNqpAHhLPLAKZNFzeBUB8dzEHQmPwXz2U1nouQJECRLZ6QmfhVmLHaL8",
  "key13": "3SjzujgW9C1Y6zkxd6NgTN7WWNJVgjKDJAt72wnJSynjmPdW577ocwGjgGd95UhnGtSQceM75Jgt44h2GzbK7VHX",
  "key14": "3XrphqYJLS8v2XQN4VWH6hXK3Mw8yA228XuWTEX93H7oRk1MXc1jH2tziFnUMJtthX1u4hiJwt6p4HQaCAbS1eva",
  "key15": "5mBYrqjRncqHajeSFE9cMPxWHbKcnR6299QTqgbm4LMx3VKx4rXLdeDfkbQK6oz64QeVSbXQpWoMVMpxYtvayGue",
  "key16": "4ZmLeNWHghXF5mN1n7CXs3owwcRMpvYUQ7CL6spzmKGXk6rY1z2vjgF8Cu4gShDwHpXKzsZYQZEz6nqJNMUgfXB1",
  "key17": "3yK2Hw3V2nTmtRLbdV6GDuNfWYD6cs4bCkdUEjzCAxPygXujzyzfNAG6qTY8oadE3ymxwvTwtjqpmaYwKCCaoZWq",
  "key18": "csbgujqkLBaEiM7zM8ywp3WcNNsyZHnohS3rAXggSsfWLxp6NhneGCMLsH3JcRjfu2RfnQ9zLJCg6espCFPM1zY",
  "key19": "5vHnk6rHeYwpxEDyqbaWWqUagf1oeSysUb1PdCjsLf6AoDpcbh95wgF59Eyzcd1zYRuCYGATeGLipnS1A8yQkkc",
  "key20": "5xtTuBq6mkvXp8nromTpMjmRmrqa9zZUbjwg3ULHT826ZvFt3Y7iG9P2fxNB8UiGBrYxXfn5RXKJu4T8Ze7msMCq",
  "key21": "4qsW32K9ZZoG9r4cfnFm1h31X5wScpfpcnetH5pUJaa2FBZtSn1QT1UbMSro9j9inUVRhgoN2BwTbQLbSrb3x6BX",
  "key22": "27rMpxmKQhDT8KDwWcezyT9bfPDgCi14Nihfv8c3KLrbU8Kc3duCwAiP6d6BGhqjGkykzqURNmG1NSuZJVWG2Dsv",
  "key23": "2A31uPqTHpwGPYmhSSTwviaycS7EFDeZW3s3jKm7ZQkC2oLdRSCdwCXPh5xHhba4WASGDZgBJh5osKoeH8BwpTu2",
  "key24": "UXzd7VPC1cxQEs1R27bdHPbku2v85xefLLDXSB6bShYmrBXw42YWbQSTtQPK4xcawCH6AFubkB632zjifKQeSg4",
  "key25": "2Viv1cMEJnPLgfYBhyYjLKcu1Rt9v3HnV9t12QptkPf4Cv77u6j4dSDYizdVecTte6kiJPsxVEhnPWQbTPLLeWFU",
  "key26": "5UGtFgAyi3ANDrXYjKQWJzKBnydbtWtFxovXnkiJ22ngz2tMLP3vq9X9RsfY1U99ahGNNfSR8pAAYS8k8wNCXbG8",
  "key27": "xSGB52GFRHuZXeYREPJ6vPRKSuEvXLubeVatAgGf2yHcxNn3HysZmC2FsXrbF4TBDSkRYoMK93bFG4swyH9nSrc"
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
