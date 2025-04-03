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
    "61DZn3Hg4daDsUEmeXTWsBZu7f4DjqFcqfE2HSyATXwuv77FAsvokkwtcgFAvnpZa217ouwM1aTPjXdrzc3U74eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8Ji9ssoJcWt56d3ZS7HuQjuj6ZUEfcmhicxfPBsVFN1KUHkEQY2B2ynCPM5vHtXKH8K4HCJcwSXP3fzEAJ5sNN",
  "key1": "3im7YsQPEtqtYbAehU4Z6AnGwnkEuNzHzKfw1ssd3umjmmMPv1iQc9oaSmDk9N7vLFuvwtjj4sJkoNAF8PKQD5Je",
  "key2": "2rpGkUN1xZD1z2o3x9UUjNbn1vwkjdnUKYfiRNbKx52zP843u4KqLbscUwirN7MbcFQpVDcD9DYUBXMbPj57mfWY",
  "key3": "2ho9oPDWhMs1ScUTucZU23z9hCjfUp2crMf2JBUbZw4RwBoxgUWAPYd9UQyQNibcacbZpjPhh5VHk6bMjvFFZafe",
  "key4": "3nmXzVAWYJ1RMgnZ9TT1B4LbWquUJdu1aM6hCSQ1C7VZYstffkjrSXJYmzJ5AJCaswjY41P6cn78Jx5oDB2Vveuz",
  "key5": "3JBP5qZqKX55uEanftc3SWJmQVVF9JoViVdEr85ze3Kxpguy2zBfUpN6J9oLeNjFZtu3oDh64sBvtK5FaSiFNkJK",
  "key6": "3c3xq7yxzcBAJ4GkaeKZ1PJuFJy4sy9j8oJKmTLpCAyWZ4wJUt1HYxTZ4pJMSvVprBioUour7KkFDXCGWJkFPuyo",
  "key7": "3wz4FyBeahs7UHyFDcksPsq8o5gj6N41q96mAwWnDHZfH3FaVUNfcPoLPxKjXBBRQTa8GGdAmBLcN5pz22yZ5FUn",
  "key8": "C2CHvz5HxdmW5XaTfDcizj4zoo56sHGZciiH4Ry5wNW2NTQu2r85AH1yzpEbiLjq9WuPvGtnS8dtqggCGR6jSBz",
  "key9": "34nnyNdpQoJxuwwjrqHmv4Er1zKySMBWK5N1nvDzQMrK6Eg6htXUDoaoZAqcTB4YWmscFq73kznnScGqvznEJCPE",
  "key10": "TBUKfBQVwXFnTz29h41zTyw411udzyhWYmMkNPtxEJW4wuk8LRQkjpWw75SNL1PhQdXZ73EBjs21WRVjoGM48D6",
  "key11": "2Y68U77v3qwZxhBEnBdNjh6oBP9pBSKVWH3LME6hsUk46jPs9Ga86vxhzkV5eJzjPMAfosakJKDN1C8Mki5LBd3k",
  "key12": "4KSSVUMfZ146HUCzcHjS5Ty24rE6xDqhH2CaT94Q6q1KPbxTPtDYqmkAd6ALczXvXJ1VDDPY3s6hvep3LJpNy1YT",
  "key13": "5rGS9iNPY3zyGfjfj2zziajTFETMYdKbgkCUJ8JcrByDmMqJhcf6G8NoatAF531XHfc5exSN8VT49uNbVKFBdT3N",
  "key14": "5JghvimBm9qWsxzDpPeD2wUk6cFxLjeYsBVm8eMMhdaCNpqzV1dDbyVjRQY7uwBvLeFH93k7Toqwxuiz6nWrZ4fE",
  "key15": "3HpSGHMqUESSGRsj1da7qi8YSVrv9n83KdH8RnFXdV8E7GoSUQEvJUdQcU94djxg5E599KVFrVy6Uxv6e82rLYZ5",
  "key16": "y5rTA9MRjoFpcJLciUfN6UFd9K8mokkgWXFBzb22kHtg2wB7THjkeAX8MkLhkKPxQYbUtNUMB8SmSSGX98zfEzT",
  "key17": "cRYNBP9PX95LGUTv2vxQwr2nznAg1Jqh2tzcQRmuMw1BQ6pwQfPCnMfSEdzUaDjKAGvMZ36gEkNBEhRibNLrHyz",
  "key18": "5QwXcfswo4BMiC66iXAjjyTryQ4pWosspLmNCqJBrzLhUMEjL2doqSA7xQ3tro2FBvxPVKGp97AY1dgSVSWGG7UP",
  "key19": "2ZbBxZKG2q9GoTaeGUZuhKf7ZbvQooNV3MnQZ1zKr7ybgZY4wgyNfs4mcSTYEsgwgPxmyNrP275Mfw7s4FJGPpnX",
  "key20": "4ZVDoSWdEZTbeAffhYkaiSSHbAeMatCFokjdp9gVjHAZ3v2otWqxDSVLoXE2i8rK9xea7syoxXRAc2CGhjhnWPiN",
  "key21": "4PtCQPQv7Kq4S1dQpk41wwSqxvQcmmz5QtBCB6qfCqNhyCg3UW8QpResLjwjkGemESGcMBR3sYcK9Q9yTSHS8mR6",
  "key22": "n37UUmYJTQRXmuuRvA6kki1C1oAa2zXbjPw6V3aghA4853HB7GRPagVwEHgtr7QQ3BzYyWDuWDiPuVAus5GNKrE",
  "key23": "AaG8uAsT7S4d9JLadizXCpkq88ujgnXS2o6m6TpfQ2J8k6rRkaRQjsRfy4BuasmgnjmMb6z59aZbPyTUWECYMxQ",
  "key24": "3cMRqXxrMUvoiFoupdSKJkVP2CuHhB2dwmWwZPPyEsCUzo1rXZfxq63jpHMHqQifoVkYTU4EY1Hyy8QimjVPpfju",
  "key25": "4UybLFrhyVckawgiZxdE4dq8wbDA8EbHhXBxNzsebjFaDN9MUjvf3aZF6JjPXXh2oCs3FqBfsQM3fuTcFyTvtT6h",
  "key26": "5YxjVUBK3quMmfoEhQskmGyiWFVAmGekKac9zBtbdT4QbMsXqnqi6Bqqg6y6rKMy86xvBJMdxnjP4ArjVEGsUphm",
  "key27": "3wS3NEVWrbMFk9U73nTnLBfRddztrHcqWoHzfYfhEXYzZSC8nChRw2ASx1wuUwiEusGEagF6YkfTCQHTm1sHitRe",
  "key28": "2QwpE2um7Mq3LGyWDsDkWa68EZg6Nq9uMcF6XthHjyY8BTJ8D8cEHz6sEpWMk8tnD5HXkb5TV4FXoiMo4b96Ycti",
  "key29": "4JkhKFZd7TijJE2dRA71yPbKrxjdgfEzvq46A9AgsCXLGsgKcqGXuM37w3nFmuVtS4zDoGuPyguJYbJi5CRKbTkR",
  "key30": "38RfReUNbgTbeQ5XSFJJpU4bMNefnN28ER1GEjX62vU2XwDQRac2wMSonTFjzy9rBSCp1oFJSrY74dZW3L6UVdxh",
  "key31": "63TjGSAz4aoAV6PqJZ49XwQ53oTGz17tukMnhBJtN3HvoZuecdrTNw5sYSR9sBdKpSUNAso4nSG4FGfgt7nZjLqZ",
  "key32": "6Xce8rJ5xzPjzaqtQLPFMC4HJLRpAVTzBfe2V24hEEW8gnVMebMAP6KysCAeumaz8A6US4Vb81d2enfW2H6KQvH",
  "key33": "HRWp6Ka5G2dKKEvY7g6qFx5ogfiCH3t85gvSE5eEFwvqJ5yVxHsZ2nhe99qbCR3giGhL9n1k2aWsbSCUYQG3occ",
  "key34": "4SYVX71xDATH4KfbKtiWEQyDzSKhKFvXSZ1YnmGmqXYF3dBKVGymWEXymQbYEnysBcXFiK95odqDYv1cNFCh6RBw",
  "key35": "3Zcc28aNqxridN9nPgBrHQgfQoDAJg4hguwqaeSqYMotnmXTcp6MczgNhdVhcBdZHBZtrdxq1hHhXhgVRdyzdxHi",
  "key36": "2fGUtwJ4rYbfPEsRebKgsr5NBPJhCeVmbbfiuEAWG8zNomw89eGkniRWur5qz4rBjTQjEFVAg5QMtvRgFbrLRECK",
  "key37": "28ow2WtNN8CLTzULMGJUpjJotVqNuMNSbm9fFu3YFZTkaB9ys7bvxJtUthxF1Z5faqNXELSDG3ryTF2pb1H4hegg",
  "key38": "2Pb9JfLe6Xr3wpsz4zVzZPVVam9sYYpo5qQFBYRUx1PMpN2aD3NuDN8qrBGBomgJJjrCTLh2n7AGkaMPjJdcii1M"
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
