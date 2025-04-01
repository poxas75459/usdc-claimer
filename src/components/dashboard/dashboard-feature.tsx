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
    "2jj429JuU6BnLDmGqDHznJGMXRJf2RPnuwu66V5rXJUANduxcXNpNvxDYnK4DfQswzjS4yC8FpbhCeMpkXws1bfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6ehPjmgkjnNdhgWUDghnTqVyVCD1XuX4tK7oYYGMTtS7U915Ts2wM5taWBCoJpX5DG4BSMxcXQNihLiLkcKdBP",
  "key1": "5DoqPiDSCAeRYcSApJT68QLbBFthrWPERVqvVTK1QrdYsHk6k8t6k4ow8krVSpkJe7AkFtq3LhfLABq9y7wfXNJW",
  "key2": "jvKSXC8u3Zqq8J9uH2psaALjSdyeZkJy6pBV7KzZNruKU3x4oSn15dBnXK2i4EgtBsw2RQQ3fz2iShcY7ed2ie6",
  "key3": "xSGCcoG9yGAGUqt8H9FBUtCt2KYfxQLofM8mFdoMJdGVThvvGwDUH9pSQm4nqUYjh99AocZR8Lszg7fvrW8W3bo",
  "key4": "3cKKXdjmiAkmYsCvK3kSEMniQay9y7VfQLh2Lc39gmNz8pud2ubQ6r722ggiH82ZKRDGsiuMYEhzp17Ho1cUxyxu",
  "key5": "MUF2uNLJmg1hP46zATaLavMqg9yxsJZEB6Dmi8HVe8YXAq5QWdMdP8zJ1uBeg3HTVLfPg3Gt5wjTLvaybpvd7vA",
  "key6": "5krdG8dF27De74pYtvde3pB6Mk6qmAbe9jyahwAYqVDMTps5qjoSdRNc5ownuP6fZ2AKNXGnmTLXMT5KFXPC9wq2",
  "key7": "2WAF2rH9wyxvPAszWTpqMToHWHhwU2tjEhrymrSXRSNscQbUC1jbvpekh5B54sbDi3sGSPrhN1KkMex9SjQdSF5A",
  "key8": "g66ybAw7CBL7QtX81SWurKu1vbAtGoYqDTyXMPEfJw5R38y7FV8oKJPDwzzraLNnLKMb1yBni71UNKetJTvED7M",
  "key9": "4WcQSNVbE3Esm9ke9csBwgk9hxPMySBuDjEZCcLH9h83V8aiBaCEvTwy14eeJySrYryNTLhnqr5FgDL9ECbA18K1",
  "key10": "4kyMPtYSy27AqJfz3jUFuXH6wpDRHjantemQ1Sa1PNUNYNVjLk71U5gsYpFu5xndSQBFgBVSctNG6t9EmBJ12hds",
  "key11": "4g4qZdhdyCsauunoXEDr9MzStLjnT3qXL69fJETBfbMJDodCGrouDZaQugCTzwxUM6fZ6CAcFzM4MpYtNaFETygM",
  "key12": "3uKVUKKfJfH2b3cGJjkd9MtCjtns2frPwpuVmt6PBmXzLKWTNm8FMcyiPEYbNnhKRHqjhmErsPEmcVkALsBpiRvX",
  "key13": "649sBKcA2WvUsLjE29uNN2hBr59nbyHUB9MnKttgj4nSNkH8YSqHYRqAT4ZcMq8b9La8RueXYG476LzPMApRaGnH",
  "key14": "5MMUnzwanrv4DvEoyBAz4MyT3KHNNgpUSQznnu1QmLZ3x4rQBfFUMuWL2Us3AQqRHmAXtC9tSF59HTHFAGTS2vWn",
  "key15": "2GWPUsr1oYFbBL8PcMjA8wJxdZAix5WEd5aFPQS3GFXtwxtgcP6mxXParNNFFW1CZmpqazdaxGi9xRUK82BSXup9",
  "key16": "5Q9uvQSKwhR1YS6xYc4tkLUyDfatiBBXY8FVGwHvLCWb1fBsVjTzQqigkdpxoTeHhbAmvYnh15jP2sGrYcr4fFcC",
  "key17": "5LJ7TqGyjRFUzGeiCFmgyyjT3mLGyjA7PiGXuxAuCFcDddvAB6t2DoBTSFdw1k6dCxb5xf4pz2bVFKy9LBjCStHS",
  "key18": "5aSoCcFH57htdhyo28sD2UL31oUszJg6QkCQqsikvQFcvByx5eMED1qroZuEPs1LSit7Djdj1CDXvf9bfQ6bC9ff",
  "key19": "23rGuQ8an7VWpfMmomryV2YVcnTHCdwDFACALV2t3uov3VwohQCmbrEV7GoHsad4ac7LzEy8vEjagyTB2w2eErc9",
  "key20": "4bQeACgRUERJk7PyMw2a4nfstgsSVe4fvX2KohWhtCVomYdAmthTpcrA9JiV8AyrzKiZMJc9pFySdD4ftPbiQNtt",
  "key21": "3oTTxaGhtVgq49Gg9NFpzhetbwi6ujJXhMd3LiqVfudtXGnNvTrdUCtZpsYj42GeGQ26et4b9A3p8HmQBYMQwZfP",
  "key22": "3KVQegbvVm5t5k6g1u2X5pGMtU1E8bUartDCEkG8n6uVQgNxxPJTHEodKJPQ4LRM4sKGYo6W9sC7G76PUbWosUY6",
  "key23": "zkw33jXcSeuLaPdZafEAW5wEH9Uidj841qFqQUA4ZNfVN7xQJG9Zi3nvhPhd5Z6qECzNyZNv88EjZ66HZjsDBAU",
  "key24": "AHECHXnATzwutZzeCShn6H2vXLqtmqhWompbopgYbHgJSPNSMp5iwwqqYNQzskpi5gdufKBrE8unn6GHjcWPSq5"
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
