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
    "2i6bsZUAWj4e8yEgvsNwHo9YGdaSow9DF285V3jjA9phobySajqjTNDFWbGBgmzcgUDJC5A4YUht6Hs2gVfD2TTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWLUuZC8gw3G6to974VhR9UGsN9Ee1rjgmuZVrdHBzvKMJDH549ZCYtEvmJHLhpJWpZezzuas9UTC75GXK4ihdq",
  "key1": "5Porq9Tcu8vcQMud68GwiPdBt3hCXYhrorrhuJkAZFLMM9vnmfGPk6ma4jjdULrXKV9FLapMyeBvoczVxWDjuMg4",
  "key2": "3796nxkQ577SdYAxoibybEPndhZppSjefnTrx8JGVGBuhBNLixgn2jJ7iopVmbuJmqv1QnXjzpTiX1KdNVmTdVWv",
  "key3": "4NrbDaffMnK6v1Cdzfr3dQuNyMNp8LVkrXvhz8MXB4h3MN1mbBVfKTA2Sn63Ro9xXovcXERbZtd9KZf9SxVGNFM6",
  "key4": "4PFDV3kLuiFyy84iPBQudGCG2gi1ZzDrNUBDzKhL1MAM9DVx2mfXrRGxYdmjU3X3faRsEcoM3JHqFTqU45r4WteF",
  "key5": "124iDcHN1gX6dVgsdPwJJJZBp1LyG9sm6st1TJ6hCBXM5dP2FG8zv7sCWtgJPJksNxTNspdet1XAJQU86iEyeZ2g",
  "key6": "FpeGHiB9rP8MMbeAT5iYFmTePGwdETofge43rTR44kXtHetaK4jkNf2tcmGUa8sbzvWkFeiQxpLTWiVFNcf58Ef",
  "key7": "3SLH2Cw7wqmTy5o6df83qXC4FHw7CTRrzRAFtX9Ek9fgvWZbW3p9JVBj2NRisdyJ9zkdGga9tpgjoF2jnWYm22bz",
  "key8": "2FDp4ineWRwc2D6J1UjsJsHDpLNCucWWWt333CvxDaR4jYpu5i19TFtaNEEuwfdQRLWsCGFnswQtCgvtrEcnUH9q",
  "key9": "61uVozteHnAi36jL1LdmdSwf4TgAqA5gW7KH91F9KFvX9uZFUUKoPbVr3jsr9HtfFqTLMSXJz1TyE6Aj37UYwaKK",
  "key10": "4tobSK8WEZZc5nh5G68pLV2L8nuihJG85ZmfvcaT2j4MCxfkgZ8PMDgEEtf6EcruBBzTq1o3VoCY852MBGDjqAgD",
  "key11": "2emh2p2HpJWpc4CfyscC3avvH6YMyZTrmkmZ5KpcAjRnj56LCpiR2W76WgQJVeAX8ko7hWR56DpxFyj7Q3FF9jBC",
  "key12": "VpTVxXzsN2yGbxnatbm8uF9CSYDwpfWHLbPmyVNw1GW5zSKED5R1o1XhWWQ6oQuUS3q41ou8Cio1Xwem5KVz1ab",
  "key13": "5qG2et1RC7Cq1eU97J65kBNoHC6FaMjbqGKS7RN32ngKn3QF28oRVZuzTFuwaehmQ3NUqhtdzZySBgPNURrgJP2N",
  "key14": "4faRqWy55Mg29Xy84m6tUAD9b1gGG1UnFvwoTkJLKLQb87Gccx5dQshM83HDQw4TF36Yaaun4QNcquyXoqXWKtim",
  "key15": "4ZH6RafFrVMavjdpTE1LkWMLdndVA6FSABbCVxi9KhFotkbXzJA4HsCfLmiUrqiKZWdLRqPXaEPpeM8x9CbiVUQ3",
  "key16": "2wfNK9gZQ7jUNXTSGKoCmhSAyxzKBjUyymof4dtzzsB5XfsHXUPwfmTUzA635RDkPPddnCBn7Bf9kG4v5WqdfbZC",
  "key17": "2pBEecgHgTQxNyCfYcHCWwf96CTDmPGqWvP3CZ7vmyTJSoYVma1jBrbD1LEcwioyynwu4VoPzVrpqQSgM1QQMjcf",
  "key18": "4GKfCqPdueqsGtUYjMdkFjBEbqeoFcP45uTAZ5JnfFcuSqRx3qVMKKNFdzXydmtbBn82SUGvcNuhqumLLMUkciM2",
  "key19": "55o8HHJNZ2hUMAN3ubQsZ12sDSvCNdS4cp1HLYca61FhxSzaTRnAE9kqcqHFMUohJ3sjkQEyqGKSigcmJpUvWLo2",
  "key20": "2PYHHFMGHs7cqB1G7Yui22edzGsQghDJUjDy5ecwEgpFf7wVhqnv95mEGrd9WmSFri3zKxrQ3rzaSA4UFcpkUNFX",
  "key21": "3YWsyGQkw36JmpQA3WuSj86JVMZY8rXbYTpL75Xi8R5DC5dMHojMYjNYtUWXa8c6GKX6FHbgVNYmdM2Pz5UTQZZr",
  "key22": "2mzfvsvNswM1LxcaV22QLuB62JjAhgSgRuKgGME3D43LAQzHzySzHjV1BgNqAxpoUgVwGQRHV4fSimx5VWkW433i",
  "key23": "5XkxUEpyAMsd1qVVWjrM3VrZMNmbzor8vQY8FjsRH3xGW8yH3DeJMTrYSRJuA4VrgsYq1Wqf3aJEdXzb5no1LyTC",
  "key24": "4CHs99JvtTcX3KiuxYz3ddvFjDiQ8UvyK4qz1rMReXkpERPc1vkJuNYqQPEiSQCk9jFc642qs5MvhezLF3u6mYc7",
  "key25": "4CvvpDGZTR9UwmGveFMtiezdt22SLyBniTHaPxSVqjfQ2w38i9GNBcah1wx3ghw7RAZWLPrkHSKMKtE5C5zztXsa",
  "key26": "4CKaBGqH72v1WkgRdfyQaiAhZFULwSaKBVVm4MbP6K7JbebwjisKRm6pysxH5aFDnF8CE7U6jPE3fgdrHN94PDP7",
  "key27": "5dik9bdEd3XJdaGViS9GZ9Rquc6e9sDTKQf3EccDSFs7eogoapYue92jj1bi2E5DfFMv9eKvd7uzavLE2jtsbSQw",
  "key28": "21opnAdGUpJZBicHsLJKirvjZezbRHPsiaRBnUJGserSGok4gF9XBsdPzUtPY818fHkFy44CxMLUyWJ4WeNhaQbD",
  "key29": "5GcQYLy4u2rZ8dX3XvWik3sfCXVwuY4Q3nv9SCG4xDq5WSwtNJnFRoztiaXp6EDXGfMNsmyVV4Nx4aWV2nsP6KMb"
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
