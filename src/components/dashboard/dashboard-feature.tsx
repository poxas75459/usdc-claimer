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
    "seZQK8X7nKEUtBwffcdrudWaBjv27jHGnfJRpa14pdFGnL3Eft4iinpLAc3WJREYGui4uNxk6JLQGZWE6gMwaVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGMwB5rczd694dbuvs2aNTA4sHdnP51XZTCeoPGSCazcKifbRsYfjnbu2uNG3fW3rWBfkf4yL6f84FmPDT1qiLY",
  "key1": "3DPhRwZjw8bBTvdWuoU21GeQoNoztWiFjqohpHt6mGoTthc1PW4vZWKHoBJ7wZWZzxtFi6JxXJco7yE18m7Kc3v3",
  "key2": "3Tuej9DDALyaHC9Ud2C4zdbPNkV9u5aMukQcnxNTauRMaJVjL7WGEVS5Atb8Gm3WzcfSSua9yGvQMebdAP6HN34h",
  "key3": "2LikcrzU9bxMtLB9zBYgerBMvZ7PCpUBPB9XfNWpEfynY25gp3df8JgXK75B8zQwbHHQUTUjBwmRMNXZ5WgwtP2Z",
  "key4": "2jY93QtsXaEkbSf4EKEm35HnnUPp9sFdpUHLnHgpxqa7kTugSxDwRiwnHc3cW2WvMJYv78hR5VvRYm4kLoobCWHk",
  "key5": "3Wv4mYwMJEFECWM2WPtzXBdBK3x6tHyw97fzuLtiqi2KqZtUfxSSF4aMvtHFpfuu1b3MjjwBhTHuPYyFj4UGPmbF",
  "key6": "6rbJ9NFFS9jkPGQGuv5UcWZNWSRgLmYXi8BE5NGvFzjLSDzmXGXZXzU1nbMAwcNsXasoYMHsGSkPGPQq7sWTo5f",
  "key7": "3KhQE1ngD86t6vz32BZXjkEFAV6ponYSGuUQCJgWDifK5VXEVK72EwhBKhsTGxSDQgvqerfKotXZU482XGFnjAgU",
  "key8": "477u1SFeUCVNgz7kYc5wff7ZZed4CNu1aJGmhsRc2Lfbsy462HbkjLUEBJeWGuM4LLD8rMxz9kL9d3fkSVuJj67w",
  "key9": "37nGaFuGLFh7jcvTSkgeu5RCR6iQGGgYQicxQqk7o5RSaKXdXswAw9uaVM2inYTtp97XC47oZKzs4Y6XowmMup9m",
  "key10": "3yEPq4ue5CGcLKr7Jkdth3yPorQY4UW11WvH52SLjuDEmh5BF9sptbY4wUFptCwrgWLyegKLqAc2G6QaMtTaTmAB",
  "key11": "5rPCRVzXPrusw6PsEJU4UHXjWMzajUBYn1sCxTmthtgR9nd1to2XNTFSHFjhrDDqRRqFcLPxAnKHfeYC5dYj618Z",
  "key12": "5ZU8ZvwvAfKh9LXfpFSWYmbKbY8fCURmgLqSyApC48tp9MJ9YmiaWm974iPGe458hkoXfNDVS6MJLbpFqKvo1bUr",
  "key13": "5KzVQLk2n5YgtBjKB8rsSJArQXfjqbpKjmqs8uwmkuzaadkfexTB3usPMYB7zAiwVr7iWa6ssxLVMzcCYPncL5sP",
  "key14": "Gaf83umBffcq5jTzU4QU8fvrXZ2S4NGsZdsL46UA9gXHHzdrQqQoBgyFV1zR9LorxLVxsTdbu2MfHXtzbdtXSzj",
  "key15": "4BtrdTVXMjVZqc5czMrcGFJNFikLV3SPFjMbjtyE1ca6oWrb2yWeeQegMpdT62xynqk9SP741CxnXA5PcGp9MkKs",
  "key16": "9jwa58FDtmRANGvSvwxNVSUJ2aWgWwuhD2jZGDZamdTrFxHKEi7zuUZe7NEWHNYcLZXsJXSVJ6iETRRWcSrTZvF",
  "key17": "55TPjZ1sogethAkF1shrUniYRUzCTBsHDZp551rpM7fAZdNkCUTZ8FnVjBEKJhvCPzwgMp7FmT75jKG8TyKBf7mG",
  "key18": "j3sRwfEjngnVKTwHJ3aWBnMyBAk7GwBnEkh24ZgdLfm3U4Ji7BgxRzZorRnpYm5VUTEtsDNbbSg8um3Hoz89Uch",
  "key19": "5GYu3PvStgv1jmzZRHRZGd8E4p36b9N1DFFNTx4YfA1WzuyXHRk1ys7hZE5fzXeN18mWwe7Xer2LTe5xJPa8gV5h",
  "key20": "Vzy2ajg1RvtcBQvA3RntJx2ZCSfWWV1mMTv1TjsGNf7LRDuGfMAuQpET8W1rcP8Z8YwQHxKx7vX3CxxFFe9TVGo",
  "key21": "54v896FF2FTVEy6ZvKeXcn6C5J7YHgTDEPFdExc9vBkc4euqqfvUgbpf9H2Eo5F3SmXdq7VrPjTog9rEntRU4v7F",
  "key22": "23DX73nnQaT3yndmK7xGQGFzTMPUeUAVGquyG1fx4zhrwgkz3571srzL8Z58bNE7BHMgFR5rj6SuRfPr3hw3LsVH",
  "key23": "49NaDXpHWEcrmkGbdRrcbwLRVTDPbNtiKGFSCGc2uaLHPUCRa6JSBLYGCmZ9PVrF6wWFDvgF36g8oXFzuhqxYTt8",
  "key24": "ohM2oGmEpdSwJBrHp551FFRQnRGzpypqaBDqBiXaHA4rBnCBgXTGijJH6sYEWTb9vfhizKAVisuSdeGDoP2MQP9",
  "key25": "2vgARAA7gykquTkr9PevXkJHfRAVWb2FyhpLYi1njTpShukfyStmCaNrniYLbWw1Mn1njv3YxeFr5twaRCQZTKkZ",
  "key26": "3f768eUvLMaASVqe3WQ8Rzib7aUqZ7gppu8KzmbsPZzAjN37DRLrGB36HmgEWrPaz714VKXDoHN6QVyX5PskSrt2",
  "key27": "44dm3J6hNVhUUaXM6spoqjhbyEac1pn8CdqhZGLXL4GpwianyK7iUy859VdNbFBALwPfKxsscMu4n8eT5siuhvPt",
  "key28": "3NrDVrHzaSfzLQUik4yyB4Q8YQSrM2qdqxCaK8U2dsShBDGJxAe6wLGczGG2MunwEUgotKZfofdzhuMJq54pkaAs",
  "key29": "4GhhVmP5iVGzP4i7XyesgZ9MvjX6uneET3bUdsXmMTNbixKC5eD9f6BzXnhZdp8y4be3MBxoRSjfwgxKXL4Qe8Q7",
  "key30": "ZA7Spo6ZcNu5DUn73HMWFN3ZAK1TqaqucTNzSt2BkXddJze7S4Loo6kpzusXgDU5pVRNjrtihsmQ6dYjaE7BHSx",
  "key31": "48upmz678ta6mZApgNYA1A23r8b2JVPdke2H6F9FCU7zBUwgXbx6LxJjzW4ZJDFMx6VSvet4tAnytGe1EtGuyshE",
  "key32": "2zvss1MHooJGqKHs1tAER8gmykcUDYmtm11onyYZFFGAhzGwv8tMYSK3w1Z4X3ZRzVLrxbzWp9gcjfXa26RwF1yF",
  "key33": "4o4SeG83q5yqYUdr9znPERjnmVRk3BEAgRG3yymjcRdrVMKqoCg8xuhtp6tyjKGv7DxamniUrSwiFtjYfnaWh6Kg",
  "key34": "2GjUxwXjHL9kPLpwKaScnwDYG98X3oqJskF6eYGxAgapAB4BUwKxotdiZP5r5gM5yijKujm8h6ynxNq8GmJcACrz",
  "key35": "2NJLCJbL8e8YfwFW22vcRE9sAJ3nv8waoTQ7nr7uwuRS3hE9Xq2UNZWCqrs9hqAZGwWYNjJrA9868kWdxSSGuu4s",
  "key36": "2pB3PWCsJQJXm2qrkH55mboSKaisQ9Wk1zY5JRd9ND4jBXQEzXJUFcNkRwQc412YDdTEt11ebYz5dSESjbwdnBsd",
  "key37": "2Qjih9cCCbq8QTxecPwWRgPoNCy6sUq5DdqqdCx8TsvUMXBdWpCRRJTUUYK1x7tvL2nSpMEypyXJPMMGyToU81Eg",
  "key38": "2YNuBcHBWPok5tWvUF8qbGgSXjSQqDq3W42tRvW9NTEV3ka8XYW3iHAXqXxCV8opo5EpsRfgcQjFRF2oKVcjKPo5",
  "key39": "64rAECnk9PjkbX5Mx1KtVZz1TbGknSvWd6pJisGCrtpZxhx1hKcXAYH4cLpiWYSivN92RwQneTLw9oCtxBQTiuUn"
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
