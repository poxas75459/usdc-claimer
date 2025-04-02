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
    "2FwUM1DQqixk8uGvRYLHwTHt1B5ReKJ73HyyZrZxaPvBr6CB13Vc3VWmwSvdUEaRBuRtXCj36HR66nnHrM5VAgnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJs6niQ56rfGdaVirNYPxGxJqRPgP279EiMBfPMxeEWTDAa14s1i7qJQyHCnCfW7mCLB18VKYhFWgkEWjMqfXiE",
  "key1": "2WFWkZ5z3ySRNkCksUa6CiHx4xvVWTN94auJxj2Sgx8nRTwWMwou7Cjvsei36v3Q8MJ5BpQeXSDwSirVjXMGvg2b",
  "key2": "2iQdBdwryWYuzHyT5DmUJpRrXcM4jYKgT478zJBevcBmwLNfQNTaJPnkCm8Dj1m1LHu6qhZZTDzzVDn3V7TTjBuL",
  "key3": "2W3A6Qupb1o7HLx5raW7NffUfFJkJWy3AqtHH8jSAceEQm8Krv42xiyVTG74xyZmkwUw3TCmrs7r94gLFb9rw5XK",
  "key4": "31Rhc9NZXJXyQb42dYHK4EsxmJWr6a4bXtkNZNCiYanTGRwtGaANnJExpe3gBT3JhAS23daWTEZpYXC9ewCH8AVM",
  "key5": "2J9ydizzeL4XZRPiW2eToKQPQm5UULXfKA6qxVSvrUjWjVuMSC9kMmzbdXyJUbLV7Jb9cy8CNMKvTz1WF33N1XYr",
  "key6": "fbuHFCqd4UaQNgHUhxrg4Fx3jqmCNud716J2JstiuWCZxeYHyfTAdsWzEEKzJL9bWC46LA8yHZfJyRDL552SVNY",
  "key7": "58GLxp9eVtmqZGueqRicxzjc2wfh44mSMyF8546pzptsGzX3y7UjAcYJLCk6xRUnxX3uLjVE1wCy1Cu8gwEZB87t",
  "key8": "2Ad5ifhVeCTSs5okAs7PwR7XTjePPvUAD1vT8k8qHXdLgCMRK3VsibdXZm7P53MbqK5Eotuos9QnFKrC5bdy2SUv",
  "key9": "5hvkgoRK22TtGHWR8tA2Kt49hy5HCKJP9W5M99i6whJsVGtUQfxnPvXAJTCBjBsdwxYxsBYKT7TtoGy6oLAcTjzd",
  "key10": "3gfVHWiRvsZnrFeYdSEG6rCrHKiUDHncYEvMjWaW7z8iZpydTYgzN1yVD9UdYiHWVzNqaW28q84tuzg7sQjxmNns",
  "key11": "2zYRGCkykp8wCGnFx2AzvPieq8DuY5BiX4nuKw3yMY1Y4m1wRsgByJXBHXHfjQGL9YyBdHb4ZXZ3L7nr6yfvuDZz",
  "key12": "254CsCLRjrjLwmEUPkwH94CDPX5qAT7WcAdRJtXCfm4uR5kBUHwrMCv9fSzYZpuZiuYYUP9cwGX9bytHfsnTAFMT",
  "key13": "34wmiCjdTR8KQTUgMHx5e7djRAHEYyBEQA6ttYbsZkDWLiR9aTmtfXxP8rymt28Bxu9WhRvWjXKTv3rZLKuzWnDR",
  "key14": "2Hm8HiLEuSZrBr3ucSfy8LqY8UZ5bzXSNsAouwSX97SBKeriS6yif4FieY9qNwbP2qyQ1z2BaHT1WNWEyMReD2W7",
  "key15": "5G1fUbRNXZvuKkv1Ydaf6xLuD8vJ4E5JqsDwKWLD4zdpLeaL5FbUx3vWCK8dz7WndB7q7tiMtTjk3AmbwsYkES27",
  "key16": "2dfZqyLRxg63BzqAQxRzC9Cq4YSYpGNdyBRQuvnWMyz7UdrYTvEUvmi23XueH7g9EfvhgzXtLbWZHSVFVtSEoHhX",
  "key17": "4AmntgdXaxVFf2Uw8Nj7zUyGtxwbAUSN2CwKkH4Rjc9eXhUyjhgHTiiTUupLBf3GLnnBLPfH7ZVhUcTo73vRT18e",
  "key18": "2rs973TPNec6LieLDp3mxv3va7fQsu13xBwjmNnkPbxm7Pf1bHifRa3TjRHLuxu2VCn7gETGpGrKfDqkWoY2qGwL",
  "key19": "5pyGSxd2uGoVo4EpkRq1273yacgmSTS55NghRZzQafJ1mwXDm32BSiUuqubafZ2QDnKjnWBZdrXG96FQF1Z6MYRt",
  "key20": "5JPfexJfQtHbsgkUqgJpCeig9rRCUkfzWDLWAw8L6B1S8oPzQ39ek9Cja2fNv17JcCAeCdLYarH5jeL584yKQNTf",
  "key21": "2YXvDdQhSSrse7YQbzkJCGG9BRWNXGvShr5hvvWktsrDfENbViSGGxn18PsaqZLz2gfdbycTNGDnJxkPCm9g7od6",
  "key22": "2SMfRKA82x1NZTYt8A3MwBR1urJ1DFRunZqRDVp3KzPQEvDvNUaeofMrxzfwqrrJdPRGP8eKYrYGauWkwBz2ocEv",
  "key23": "2gN1gVN581ES4FMeahtHJWQ5ycVpHX7tntZRiVZY5Bk9YV4YKutRVXDoZUt74uor3sBJryK39EifHG9kmGoJrmKg",
  "key24": "63ViGszyMt9udLUzhH77U2QEivWzRgXTQhzmANYWHjQcr5vTgPjR2ZpCF5YRRyYYHfVKMmWXcyi4i1Xndaytk44n",
  "key25": "4mCtJQp9JMcQivVmLjucitgbjgMqenhNgeRyY7zRn1iwMJro74yvJaJXEGuMqRPX1jz6akXntULSZYHEGMecuAcU",
  "key26": "BSmPDEqjrL4rgHVLGtAMGaTQFjgFdisuTkJM5HcDWzq19ikfnhxahrwCCnMqbqXx8UJwx3Vc2ZPSAFMH1uGEWZr",
  "key27": "5wjHgnNtGhyZRLJYbrUh9XZP39YqW3AxQgZZCW1AB1U9NjL8G4MunN3n86V6wKhcb8FsA5dkVdpUDk6Y8A2qXLUJ",
  "key28": "54dFRMoK57fo8nzRqK3hUotsRcp81B7sbdNNbkmKBpU1D7vtvSRLQGJ2eV3fSiNbeSaHXpcw2whdRaJ9U2Xr25o9",
  "key29": "5hkbA3HsFPtQvxUoe1o388RDgwEGoCjfj21BTtQ4mFqFX1LZahkBbYBS479DsAjgM9erjtLAwSfZrWmSnSfShdYb",
  "key30": "5KpsJ3oLLYwJZf4wUq4LzU3ESqDFQW9c1MpJusBP5oV8qdMWqCkdZUxmnD1xn7KGXY3bPfobwG6gpbaZv5sirnpK"
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
