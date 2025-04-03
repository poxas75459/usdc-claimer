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
    "4QRKckK1FxQB2SCyifFsvtJE2uRnJ4kwHTBZHSTVZCFjwUE3pEYzgnMqmguBTCfxTKMsD7PZ3RdzxPMzLApufXuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tk85XwSg93R4w55yQSGd5mCGhdWtxpJeDwYjjcYhSi9tfLZA9W29HG6ShzryJTZ6shadfMR1uTonrrgyYDjiP2",
  "key1": "2SZYWaKpzePqNb8REoS8QVASr7UQ7pgwkgJajFwfwqjANTXar4yWtDYUPATfQH7yMUTGJU5inzPvXyVKJwnGuZ7V",
  "key2": "4HMEgcDY85pbXccAbx2n7mbm9oDsWzuWDMinawR1S7x3ZrtcgMZ4j9WtBVWYHbYjpAn7EXmVd1xcucXq4iKtFrTV",
  "key3": "3ARLyhW2vHrYsif9u8hD5dduUUjKoY1T6LWSxYjnuux7n4SMX8J93iqJUo2z1akdK3R5rSZfNUJXyey7vAuSnJv4",
  "key4": "4DQvXbeKq2qNXYZygSG4TLbTYJzMnkF91JmYm5fUy39MtakXtXmer3KeNEdXhfPKokBWQ8v23XQ2AreNNWFqKFyg",
  "key5": "2BsHYPhYQ5LjFDqJJacCVAiXPDoX2KvAjXXoXChJN5A5uiSxCfcdQ8QVK6m4EWk5W6NWwZf3dQ2hfXjKMt5pcFrp",
  "key6": "4EEDX49HArvVh8RzTiRTRas1MTMRKoqQRaTtZxTi1yjftCzgPA2Lpt24aogzLAe6nNy9fn9neJLYphPAsRP8Jvmc",
  "key7": "59WwXGhqPkvMMEkjpnNy5zQU61S5yBibxNAmDTr15YqPY1CJfWcJ7zZEWZuD83KVVHVvz2pPdRQ4ydf5MSqUVcdh",
  "key8": "2mtvmZyyE2AySsJYkutamRfFbi6HqgarfYPkK41n4WjAd2oW7YBDwJQqT7XJAoBc4RkKRYkBw1C5MBHbJeYyrtbc",
  "key9": "62mr7vUM48E1vNLPFohHNt3KDdLHoEGY3hhNw6wDS9GBksPjWojr9T2VcocTUwE5zg8oq9SkXPoVHzWP5zHKQaWc",
  "key10": "5X4rhh9aQaBbfxH2pLKY12BAgiUK8Jxky5p7sTzafdbJoNGBhwsD2VvV13HJo4LsLJAXLJU3G5nL5Gpm7vp5SZGD",
  "key11": "5rfyiveuKyGDX7yreJrHtKhgY6VwwrKNH83QPTmPnaNN7PZDu3C8o3PbunpzqQwJhxWThAW5uGET5FuJyaEZgDFg",
  "key12": "4MSsnmFJ3q51HuUAhxx8bFX27Lq2MXupqkjsbCu1ioaY4TPcALbzHSEhr3642NrGLhNrVwrNhEj4Zs8NynkXgpca",
  "key13": "5o9dnGStpwSM9KTK39yKp6SzyMWbZNEqMFDCbWhAt6EwArRQbbyoGqraKj2KgNrnqdxzpgYAPAGYdieag58SdWN8",
  "key14": "5ozTcCVdwiAqGf29GtJGCtqV1M7xFbmWLhjoHDDyUhfvFBAjBG188jYbdJZTEeVgrv8xjmWW6SZATXFaBGuwsGTf",
  "key15": "4pCmMMrvVNCuUJfRk9vNijQfBda9eSrAUWcDkvMfpmQHbnkk4hPSAKD8LVcZNFiTMq7rfBRcGCHbb1SASNsMs7UF",
  "key16": "2oVV15EAgRr96i7wwWYwhQikJqAAtEc5CU4p9Bz1tGvmLJQ87wEwyfu49i8Lk2dwHJLk8UX5JTQeGTmiPvTm9UTU",
  "key17": "3jDMfts17PtgS6FBf8enjwypGeAcoFqoz4u5NfQHPagk4M3QMJ9zgKRYMGtGzQdGt2QhSerbXy55f3ePvtx9ogYZ",
  "key18": "4NEw74QQJcBycbdJiaoMXWfu7avHRVhKq2UCHSxnUw4KptGR7wkDkyEoMp4CCqyLnDFpj8eRKdPefb4nFwnsgfdW",
  "key19": "xggneonvTAEWNH8oV6yQUjqY1eMyz3ABSqf5rfbspB2ypXeK31YVdHfv5RnhCCb7tD3oBfxv4MhFwEBpSv8nLQd",
  "key20": "5tLBQcR3oeYEJWf7rEKhf4mYzWdAgzCAXYBvGJcw6Ge4J2QMA9rTujQaaCwj9A81wjgzMVJSQXbRrBNe3D4UqBLi",
  "key21": "5BhEzApK2xXmNRg5LSubxjgveB61YDcKM2KDSwLLPj1GFfbrDGgx3LBpJiGLk8rjMWugABykQDuMkgneoZMXW6WF",
  "key22": "49AZDdjwXSpmoXybwXBpzZk3fhUp8rzQCvKeDEbAaWtaBxfppPpCznM5wYM4kHYtd8AbfpuQwHyia9dYeND7UrhU",
  "key23": "2b3X9e5nRXGKmgksYXiUA7TbzdcGxkDrXW1KoaSFgKpp7GmCu44C7hzyHMfn8YejFMiMKkEf1S55vUizr1Rtg5FL",
  "key24": "4NvNDKCTWUWqyJapaR4zJGx36s7NZui9WLSjpVR1xFwm1Ti1a2zPigFmdxArtas5hQZjgbwX9KAPoBffmRoVbW8w",
  "key25": "5mk6CCc4etxCoqsXMio5rmUnEtnGKhZmFYqpyfyTfHftYaAfU4TGGxJkpWfz4v2kpkefNT8SuceSkojEU9n3Hztk",
  "key26": "2gk459FJ8nE4YoZUv2TdMVKgRrHnuCwbpyUpT5oaSfVe7fnehg16UbXAyvBYFemGHRw2rxGp9riXLvrhGjKvMGPJ",
  "key27": "qHh5otQ92riZj9aCGzZTso6B1dq8PHa98oL9iM2EqnMi89urm2emho6aUYcHFJg1F2wXVWitZBbjxRJk27h9ZNj",
  "key28": "4Zqy97aXbWEk13orHTS6juathyqJxriHQaYpH8gH3N9d2udDo119oub1KajDs3Uj8vjVKgKV1gguw6azhAXZzNWw",
  "key29": "5DvEesw4SWxDaxFxhPTzWmKJNLc5vqgUM9QNyQbSfrF4xUfvYxe5SBgVWRKGi4wfnsePPozb1jjQtLaoncQFWb5h",
  "key30": "2UNLYqcZ5CQyRFnk8iihb2F1oA5TAE2Wj6sYFp4KFjyx4qAtfKYmb3nxCemZBEXeySC2xquRZjgr7tgMx35xbKcw",
  "key31": "4XrQubkwctzyTiEo6wHV3rU43EC1a3YHN4mpxxAUM3xNDAsfBoVEcPFjNJ1jRaUoQfhHoBSM43PCHse5aJbtwZRC"
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
