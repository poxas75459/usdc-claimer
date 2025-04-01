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
    "5eLWYzw1LQvk9begkJK7wu9NaybwYs19XJ32yKjaGUDZ3SLs7HwzPXjPWDGm1PBbZTeNqAvaHHyceq3gLL3Jt3SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sFR2pxosYULSsgzvmgpXqaQFi1qNekYyBvDCpzNN8Pyc85ZQxbgYQkAvF9qrC6rBPEnCG8Yi5kzBA8JvTxzReQ",
  "key1": "4edmsWk1qz2Hof2nWFQMdUAp3Mm2cLjRBBpqEDHRdEnCbVMipoG2Mx4rKi7x4EDC5zreiaKsHM9JBJMGrmM6Pqx3",
  "key2": "5Bx6QHUjg1mKu4LVsWLAwvharXHsSfdfvduMfZERkLc8D86tECi1jbxmcdQ88iwzuRjT1SnEXSv5dJL57dAcn8XQ",
  "key3": "5YpnmfR8WuhZehPmmF6sZUJKsC9bDKyhLcZm4yGa8ZJuN4o1Km13cpQw8ULgDzRKXJqjsgFnx93B2FYyRZwDjixU",
  "key4": "gXKkoDNqmBQroQNeT6KKt2iE72Xhu15985iKk7VVqi1oyLqe2AmbePMCmJmESiaGRSwPuTLrxuWT9du9t8QRezx",
  "key5": "2ccD4iGgxsktW16onvFSnY6z65zsbwgNvQxer1TEam8AjpYgAeSgEDSzGS6Ugd3D3ZzeckB5WXCrxdyhFuvBpX7k",
  "key6": "43SCtawvGicA3LNpmgVtMysgpdcbvBS71XoywnMGmF6SYLniTPY2pE8HNGX7Vs3pJ1LTyk5Pn6gg9a5co7dzGtmp",
  "key7": "2L2e95JjzWmsDhK5PXbbkuc4iPcuJS5P622f2FZwG3Vaq33M1jnDm8MzobUar9acnEfC21dQnWrx3ruF9cvDwNxj",
  "key8": "5HNVuHJ6tWnbQs466KmxmExRg3NjZWnpyCbvbp7TwfcUxyu5zw2qUWnqKbBhFhsMHS4KHbRoQsEC2aJCCZxjGpK4",
  "key9": "2x4RKrBhwDsoS922QMRStEw2HHHe18xq3prw9hcL59EPXK6CozM4XoC9cJB4D8rdyAg4tHdX4QukzqcRt3wZaBtD",
  "key10": "2zLVJAtdzbsFXpdJF25HHqc91SsZpvBGHP6xbudNgAZWm2nHPeykqnmhkmCs5u4UQQ5ySNE7WZu2iD49RUNoJvnr",
  "key11": "5LQcvwD84onGQjc7TdGSZcPUaY6cpyLmpVc5DcxNkvwfYWLqiWpVBWheZFpPZxQcRYXWSaNMtMC5GDiHBQBhnGn8",
  "key12": "3r8MV6AxZjXHx9quEkeKq79ipbk8bF46RRVYq5bUeRbVS8aXoLX4JVw59s4b985oyxUFjWC2Sy9uNaz9MuBpa6UH",
  "key13": "38VKpZaSKC5wjoHSrurkDhB9TViabnvxQV4uiBGbgAZuRUTRjpFWZFwvxnhkgTDJ5tNEGknEQtSfsMGFGTU1645U",
  "key14": "5DFZXnnsUfe6Qdch5xMsGJCor6hGjWWioqLSDokipp2XMLpeeiNdBqrwBVKHP23zP5mZofmuptZYGsYQLLUcJ9hV",
  "key15": "5yVaAg7yG213hX2gjD1N1ZXFJr3KZugiEMNxNMdfprX43YT2NRuBHenUhxfY4Te55sKDFtK2fjttnyLQJvHST9s3",
  "key16": "1VidmXw5xoSd7XYLrp5EUyATFMb9NVqUrzciwQB22SqLuaNcxZgVSaBTzN3UmE2XPY9wMdLKi9LiJnfv58vts2K",
  "key17": "2YkjiMXrt6uGXQ6EqtRqm28mBVg4uiuG4tJoCaxGrdJSHJiLUeUxVKMCFQfM1T2qdn16BtZNCJA6bKd3cBaG4FSk",
  "key18": "3qEUaxRa77kPkwbjzNMPR6NrihZeQdVAFVvebD47NThjCMk7uYqfGgJWSQJXkR22uuQsHJrs1Akh3saJckaqaJei",
  "key19": "3yH5UKd3d8RJayYuKmJV8K913AJxHmEummCnhFw4TPquR42okfr3RBmYeWng6f8TnWDnNPryDNPBmCuLUAaEwuEn",
  "key20": "45Z85Hh1gDYh693MQmYTEN42doSPSBGE2bJhP9vNRYpSSxzhJ2XBMeu4upicZVAcYpLf99ySXqqXcVxAU2XmgCLF",
  "key21": "2ipT3oj6VBtuM1FCfhPTbvFu5mJwa9kmPLzm6XKDyA6obg9q4Ga8EeSyyCHqykXjP4MSPb5n9kpG76wbNaJEyrkP",
  "key22": "3RXfv2hibqHMQiRJK6omvxUT39wSSNECHTE9BE1FgwkJ9vJGt2jChRPhiu2YpU3EuhapF6rm8SE2wMeBYiaLBj6v",
  "key23": "65VGK4FDkA9UPXyny2CVEeRZRtBrWoWUY4oR1cN9iBjEJGuuBhC5XvWGAwnV1VyWXhGxi9nYpkBUf21nCcgqsk9r",
  "key24": "4f7UZ11sVjiur4b4MqXd7Mj4KKkj8CZFQRrhs1aGzEFoabaESWLNiXUug1SeW3qxZxeTut6LPj3jopAmBSPTEBJ5",
  "key25": "3jzn9us7xCQW5wDYbxu1iZh2idXuMNTyzgxdYLG5WGSuMxHTSPg5L1fcCA2ijV1mJTRvaC4T2dJqTZxjV3vsruKr",
  "key26": "629oT9uPKjiMpQkjVhk8wAAUNkgoKPYu21SVTRcU4CAcW4YVHCR9AXdcxdkGjJnestnrA3ieAcEhccowv1WTfU4f",
  "key27": "ppTgVhYb8WaKojx8faNzUrQ4wHdhKP9wBWsohhFkEFZtMgCvBKYb15zxbregyd1jndBBgdHdXGYy4Yuy3xiNywr",
  "key28": "3WMsJTbQpycgJHmrpbzSWvmSaVEnEN3Jk2NcvWToLZf9UHPxkMTtZnuQ2BWc5jivcUpGJ6XWv2WZXDTLzvjQAByJ",
  "key29": "4ZH41PQQbBuF4QAoxbf6Ht2YvxkfdzQT5RBoKFY4Gn1afbTH6GSbQNPhcccBTm3A1r9w11Ytr31xUSN7rEjjScYy",
  "key30": "HvbJ4ze36o67CnsATYViZxtNmCtcoWD3Yj923SSYMmh8qzqNEYMMtpnHVCv1vznHGYmg9AwhgLNgkeDxM3iPB45",
  "key31": "36CSme2WRMmif8pqePXGQ6KMgvnniHkMDpdiA7yBudb5cAodbz6y6xqBP1Q9MimVHwycJUV1PdAvicnnUMEM2LHv",
  "key32": "4T6p2NdorE1QFWQBGJ2sGXGNARoUv2J5pX74sgWtB48gUaiiGxoVWYQxAom7Exudvv1LodXgU3mk1eZiLMX4ybep",
  "key33": "4ji2aNkiudETQTAhy8149YWgtiYXUgP36wEgvnPKNz38E5qdmhN9gQoLjAmJDNiNKEQZpus7eMiw1kCMtprkf2PD",
  "key34": "5PCJDN2cfeqT5q8cxPZnij6sMXenMHtTLMZTsywxittWBG6w9oRNKgzS66cYgvsBYzM5rM6qvZkGWsMnQmGu3Hau",
  "key35": "3fSf32AskF5jKvPT82AwZjwjTYwKgEfpRPKBLFKEGdJbFqRikGjRhkaEvppYCPrsG6Lnm2nSJfewW37L36BB6CuF"
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
