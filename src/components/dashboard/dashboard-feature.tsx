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
    "3aexBL7RbM1CwXJw97R8EkxGBSVZ7rw7JCMWELNFT3G4xx9RDF12uQvnzbeHsXMVgJEZBbWdcw4BtFhzbQ7NsyCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W5ZCF5WLsC1pzoDRDftSkwp2jSvR9Tu4oNvAwoVFG9QjjBsfnBLGknkDftmGrUprJZS9DXxzQnVWj1aH4CoXBHt",
  "key1": "2ENAmFT19w1Z5MDT4JoYZqUL4Zj4BA8heuYxo62GJymizUXZ3Ge5i81V2DEaXRXY9kCvJgsNzRUDGBFkYfDW29WJ",
  "key2": "4FsoxKKkqWQuE8w937Y9jiEpihvYvJq5XMEhvxsB4RHUbEb5qp9GAruWRJLWhMEsXtKEv9zKLNtY97RfJFUd6tRq",
  "key3": "2vSVnJqmMd2P86UDxBuzndQjQ2rh41aFzMWeMdmAds6tpLGPkQbkKV2KogUXwMrzhLgpDSSuztEDC7diZc2Cziw6",
  "key4": "2JhFuL4CdUMf9E73WGexnCjitgQ5D6VYKcHStCjBnikS6HbvGFe4ibPfir6eRJELZ6NTWX6U6UHUoWaXinJXuRxj",
  "key5": "2RyPrWSZNfzmXNde8QhSMhGubyGY1XS1PCC9XuGYanf21xbqZtqpxL5oZU1AG3NJZreDV3N92GE4a5VNF9C5CwxD",
  "key6": "59ok8UGDcAK4Gim1DvcohLuSaU4AdmDXsujjRH8WUyyBxnUJvGhGJUPLZAEft2TQUPbYUwBnz1NAt4HsqYsmdJkb",
  "key7": "Pwv1JAwBhb6ezedNfZc6rGhsNfGPFMWpxZ8FgKZRAvGtJ7UadFLREu6vrXtGggjG3Ed7dmcLcit1eB9ULRfRReu",
  "key8": "4B24p1WJcLnXHKmoYkoE1d7m5to9QSZ4nF1XyhGfYgL3fq8TnjogQtNtiVRQi4XtpZyqXh7X7JygaLHP72GTq2tG",
  "key9": "5RvTnmAErcvtQWGXfcrqCkYZkvuEu6i5rphDcbg5fV8r8Q7N1FnNfHPoTfcGnV8EQDvigqUZh8be3MtPPWyLejfC",
  "key10": "2ijFMqjytioSzBXPtWzGtTevgGjjdC4dQtK9FxJJQofpJAPdumXnPpGHdZ3rRwFcbFqqLGKgj2bw8RQH8kw9cSHe",
  "key11": "3jTjNMWiCY1a2fv4QBC8mQDhTBpgD3S5UiDkDtrm62RS335CQWXGWd5LWjUdcAwL6dTkdRpELzzD8Aq75uxUXKRs",
  "key12": "35QfRfc9Z96m55arFozbffacKmvPPqBtjN46FXVavzYaX3Q8Xg2q6kqN7QvyxJq2saTVLRtvS25rPvJpzMqdV3aX",
  "key13": "4g9NyezXMGXpmwN2vVSfkApQ7sM7Fa7uFTyYnJeimYcv1NCqgWbn25Y8M8SAreEKQZMS6ZbH2Kbz52xtiLZyK9eT",
  "key14": "4rsE34A9iPSzpK85HrBTVzhbHfQd2G6H7JvpLcmzsDhBLgePJuXMBB1BsMhu3iwg35wkxsaHMWYF7V7SgQtcssum",
  "key15": "9zjxdSJGvWCV9KQVKZRMYmbUU3eUa9Hmm87krAD9Ptfb4wBqSguyLmLPjAFLiupash2Kk1LhLhfn96wLvqCRjw5",
  "key16": "5kEJHzApHkxMjqquuDZwhfxQohhzzzsyRsFjHQ8YqjXnUUbZpS7MKqxs2yktsL7sZUNYcBrY9NrhRRsuCmYgQqfx",
  "key17": "5Q6vSL3UYeEsJja6A85HYXYqBzeHok7DfbVWHAMJwctzfqGdTFoy8XgJEr4HwHCg2sGkdDidVU8cHQXt3t7F6Wpa",
  "key18": "4135zNbMTw4fpncv6D2bxYsErSs1xy3DK8MqPqNGvbtHTQ9Qrcxd7zL4PWU1jtUFWEZofE7uxNpMBVzr88JutKQo",
  "key19": "5LNmiknVrzhNZDJSmGHQAe8ckeB6fSKsb92CfcFbKokgx1qg8YW6beuSBnfCADozJTcdMPPfAwDYGCzVkQXRVuda",
  "key20": "4UAthjUXvrz5FvywpjAZA2EwjdcDnYVBWpu9oXtaQPQwPe8Sxbvv8TGHTy3vkJg3EScB6ajkgkJi4A4jwtZo45na",
  "key21": "2tga8qr4Jn87BWtE4SJ3hngz2KbDQ4WSbzgH4zqfDqmRwFfp5AndjChJcDf5qSuhqFPdMQUkAwr6LcAQpF99Ho3u",
  "key22": "tUbE5F9YEJ9oqAtYbRsVzzbnYvrhnfkq9hJCENibS8vrTfiAchC82abxmn5beN5wnWT6MMhVR36rXZrcJowSAkH",
  "key23": "2AqyeKdJCSpcf7Sp7RmKbgDSUZhWKVgsF3oZasTpcKLH25aVtEKdSQMyjDVbLvaZu6jK97ADe6pSfrJekyqbxZdU",
  "key24": "5pemVjBJ7fWkda2uDQw21crf2ccYn4FDRw1ZUPZE1g7h29k5q1RAmFcEWqUP4AZzd9SCaKdrjYWsvBYjmN2tcAAA",
  "key25": "64wKcAwkhgHmMpPddHJnfh853j7VozCvgzYvesuVbCPHkypNSXVCLF9vtahoowuruMp3Jw5C3qBTZxKi5zRDQzqK",
  "key26": "3zDcvHuk2UbaHv6LKxFGB3S3YtdczcMDMFV6Bwi7UNitmKuDcpmzSFRjXLY5udSF5qc2cfg2PRGTeNGGHC36cfzM",
  "key27": "5PZ5wtJLVWL8ZhjthGRATwHesERZeSCpfuP6DeEPy6Lmb4YiFThL6MLrC7MA5CDsyYTBFyRCri9prnA6kKQZqWdQ",
  "key28": "skEPww5CsrtM7kvtpehR6KeM7KdZWfJ5Za1n2cRk4367QCMgRACtf79Pr7J6kXugDiR1kubk3WdZGLPSfhy5eHV",
  "key29": "5wwfxwjuJ7npRBveghTB7MFjKNgMYonKJQ981NZWsiaW7ns26X7jF3bPyuxYMxGHxEiQozXNQUq94QFYQNR9Y27u",
  "key30": "5EAs1vWFGLUtFLuNDxEj1UTXkRpUe39apo4x2SDwfkP8MkUsLn2cAcmM73DZXMSh8qJ7gwHhyYDScar49ZJivPKX",
  "key31": "64HLD22ujnSK9yLPjY4Ro4eX7U7vJBrQmKNc3r9qarDWoKBa92hBL522yp2XqwXS8tvMaMeacqYWMLpXEN4xJ4iS",
  "key32": "3E6EjyJawHPXq2Jw1397Z4GC8TofurFY4JmSX5eCBcRxxRNmdJdi972ZPXro92e3k7ibTo9g6UgXRPJAVMi1sn5Q",
  "key33": "3ddctn8EakZxfbPXj36iRdwXfpRHwg4CUqaZRF2ENtQwDLfYytYA28fV5T3WvoaDFk3mn1DAXSEyJEdyQUmYvmYn",
  "key34": "61fQepd3Rii1ueUeEv6qNDszrdHCvkwrpZoMMtwNpfM2xaedrE15eEPi8ka7kZhMvoiq2THwgzETYX2oMCYkCxqX",
  "key35": "2e7MrcRMYeDuhnvppuFpP2UdqXFyAPysqDJ8uxcCiRShMrWsRBtfyCKbUS1rX2VsXhqy9GTKu3rHdig144GjwQFP",
  "key36": "23KsvNUThnQ3fC8EhqmC9hNnB8gJcxXFR4tqSgCxFg4KoLnKAGNjuPss8GcCZhPKpbYszTqqFGrQKCxPWiYBPpR7",
  "key37": "9i5KwG2LRNz1bZGBtwg4fp6oc4MYNaMRrwYstdyJuZgJxK8KqjfdwMgVWorXZeWHks4eAFsaucUokeQrUa4WL1V",
  "key38": "2YXKCvxaoqASPkHQEyJyWgAMJTkYAsHfPNiddFxaP6uyMFmJr1w9JazMzh2MDj2paiLQRfFg4AGzWLLG5Ug58AJQ"
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
