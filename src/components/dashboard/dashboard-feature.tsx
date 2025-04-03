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
    "26b4geajvdFETSQ8n5ZxXSHgMg6DbFEQ7T1NU615DQDv4coGBKBR9jvrZsouuM1wKRAD1P6v8YunoceZ1qDnAXKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNc64BkJQ7N1JejGmtZk6qYFHPUTAa4txvNXFNuqy6feCVzdwaiesmqYQz9XRyWpR1oZfYJ1eYvm2Ea3HnSS5y3",
  "key1": "5kiuX52BkBeMUsS4LWV3xvwY4YGmeYm4eKsJJxyqzJ5JuHe17TsQqdaJXivMh3ML86JSWB2chYQoiaG4NNnnwiGC",
  "key2": "3hzrwPBK7WEASkEnN1x8fAngGn3zddu2NAw3K9gGNKizTTxejaBDE1dRwNhDdjcm4jCYdgpm3nkKAgdDWfAHMQ9n",
  "key3": "668FpoydeAeFpxkX1LuqSFSpN761A2ZvFKiEb9qShMaUezF4p1RQZuxKGFtNqzuiRXxPLMr2AfvvuAp3qMHrxdRa",
  "key4": "2Hh9QPkDkBHMJYy3ZEQdkZqT4NFcSCNBP6QRoMxZFA4YaHbCbn2eRVzuYHgZfPNm5oy472Rze7SXu1cdzhd2fwcV",
  "key5": "5bMR8AHMdKmoBUDGyGKJXSAuuCUuHULgkCsTSX6YGbY5PGuHPaUvq3MraBkNqqSyiCLtuEToRLnWVaZhBQ5poJnE",
  "key6": "3AZtPHJPhqAJHtPzfbpYWcQWhd3wVCH3i4At39uzuCZ6CkQrAPxk2KE7w5nkZHfTGZVuWcYV5coRv2tjiruPKfCf",
  "key7": "5YfZexZfoHhsQ7ZvxBbWN9QGjkzf999gufvqxResr9MFeh2nW8TYugQpDs7yxiRenftZdpyT8jd6rDYNU3SAzPtk",
  "key8": "2r8SKyP9Rk3xFJikYkdgiM4sE6Rb5HJkFtn5gz4PWTuNa7GKSQs9wbes1kgHtJ1Eaf53viN6hoHRK44VSmgGwLRp",
  "key9": "4Z9DUFaxszsXC4JbDtqzTC2Qs5H9qhKRyt6LSG9c9rWAf3TPWN99VrLAabYM7uufWCsXXSARD2esRN7E4X9Q4Bco",
  "key10": "5mpfnAnrjdnYTqmnyjbuAMTT7xYduNwrZnXyS68ZXaLPemyqxAH2bu2jz3ES35NkETwjy9sGBroWrAvCDFUK8B1o",
  "key11": "3hX9grBbivPDRCCpo4vgeGiooeULokpTEmukN45UuNZ6QFpRsx4hHdZi8pdJfox5VUZ2xUeHnXcJbfGto8UkAmzW",
  "key12": "KMrEXNRMrpjexNhUnhpnvZ2wM2Ct9fWL5B3wF4FCF1FuayKTEy7tVuq62QoLuEz57LAGPbb7Dy6DhMf2G1FbUkD",
  "key13": "5AyuT5UWyeCx88akejURhtLgFBeU6zVL725ZWCRv4YHzwoYr7UZUYVHwCnC2dhQPjURELiJvvaGp246zjJKDA3U4",
  "key14": "5AsWeY4i7SNRAxqnxVhD8mkDQBGzjHP6Nf6X979YF57MeuUpE5zQKMENpVMiUEzyXwztzAMvtJW8aidR8r6fiJNi",
  "key15": "46fXjMMBeKgiXBvgM4suymkpHFXPpgEXbwpEfctVH78133rqFfbqANgymKTfSaecJXDVMKnyugZczaXx1G8zVZ9F",
  "key16": "21vYLoQvi9PHcBR4Kv3oxpqL2mvxAkiKpoDv7LUCnWCN1Nnd2jwx4oQKH5uPrQSvvvrarWbri4HZz9D3CT95DDMi",
  "key17": "5NuusWrbzf9M1aXuxXaGF6cUGSkpA4KZW5HfuhehA9YDH6jVPReVMPeF66fdcWGbdn4hzWmmuLDibgwqcqhtynTz",
  "key18": "F2Y4HHxDdJZdihMpspXgKwYXKtq82ABmrBbHbcUbxCmQT4Gt3m5FBkqPTL2FHToKMMiCGkNjvXoBSQ1SWXAaau4",
  "key19": "RyBQDeu4ZVi2Df6t3X2RWPGHD9XH1m5PocrJW9ymjsyJkUfNHMz4M7QfeFzP88L12oDo7q1Qo9s2VXz781wEhoA",
  "key20": "3LiLFKyZZvw2iXzL4yYc5sR63i36fA9BQgB3qtfpwebUDh7MvGkZscQ7yJJp42stDsbyA7fWL7uncC1BXe8b7Lwm",
  "key21": "57q63tAT7Awv9hNZsWopVSafG9aLLaJjRxcZrt333FGeN8hc6NDTbhsTrneS13CrR96wMavPQZvKLh3ND6XSRP11",
  "key22": "4WTDTgQTdpPuxQPw4KHTnnUsbnuoLprRLz1oNQtrMTxfDk3i9YUSPmUncVn8wnpwhEL3gS9Bnw8enUxPgViy5tKS",
  "key23": "3RtuG551v8AANNpiEKfyeMYHPfv8V7RsVTvweteE293tQtP15JTDf4gU6vC3edZ4HDPXHfdz7gy78v57HNT5e2cp",
  "key24": "JgNxm8CEKzFDu2SkmJWuhfTWveCkuTRDW39VuLWfio4W2fBq3z2q8n9xaFYBydEqWCnyns52u5BxJssa512zTWj",
  "key25": "2CcAXSL9HG7EdcTaZBajLEGTGTVnEM9cfbzqo5ZhM1BVGFUYdEQQEQgzE5Tcww1Lep9vvbGaYjX97WhQA6mUn9bU",
  "key26": "sp37NwBUdRmftF4EGCwRmppy4D3sQKrC2MeYemh2JvDJi9XYunza6pd9Cg7NURPrDa8Q3yoPkN856eyRaZD18VV",
  "key27": "zqs6LmMzDzUVLHoi3kHx1UgvgJweR3c8m2Um1hwEf2w6TH91hd4LUFFfvNwR5ifCYFvfRqLDwYf5H6x7XR7gxE4",
  "key28": "Gm37to9XMwAKVqe6mdW45gGwk5GfPtXqBsRxEp1xoRJJfwRb8mWCyjrSH1ojRHH7ddPyntznYxfEesXPyJQ8A7T",
  "key29": "2xAYZxGCLXoU5GZaucsA6iz3A5fwXdUZtDKby2TogJMmCjT98mT6TW3f993bMBq3Gv3y1UirnZ8M4WnmrLr4b3pY",
  "key30": "5Sh8KxuUH8fVvNNG2tmWq8SryUMNH9DGMfAjxcbeLzU2e7c7f6zxgVqAX6P1bL6TCM7j1mrQ87uzKNDwC9FgmXgS",
  "key31": "42aQAP1qJmqa1NQ8vWvnKMDG68tBLEwLCbGhVLXmbuNoVyp9qTF5jRPGVJWCckrZD1qb89rx75f5pWd7CBPtgnbq",
  "key32": "2ejaiMiWX33EG6GYB4uxHAsGLswiPrPTEa2yRrgwFdAX3az4xDYQvuXeWGKAk9sVv1pRtTSojsT28ApatAQsxiUh",
  "key33": "44rUKDXHhEBYNagT1X86AD7V85rSzmhc9qK7d4HMUkR7gewbonv4BnMQ7aJHtx6EtFwc6cPW8AXK21JZmV4iDaWC",
  "key34": "3x65Poo6wEp8XdcvYt1c2EWzBW2k9hCxyGw3VKf8EUKeQ9TU3biZ81mbNeGR11n7LPSf4fDCEQGefEfzRdyhspyN",
  "key35": "3QBfrr5hfa9s4KQvrWfoqqVyFTuQZbyrJ1jkwCuN1KW5V8cKZ9njTc2hiig5jJzauToA7Pftis4a6iYa1A5EfR2Z",
  "key36": "3GoHZz1WNxM46CE36MDZ4VoDyEYKuJXWChkuBqsuCVqsAM24pEP8gMkcaz2aaEKA692Nkw5YyL69Jrs2TJJSeyay",
  "key37": "4dBvwEH84knRtRkYwnnny6K4nNFwzt1V9vCgsu6wywsoSvXE3jmw9CaknXuwbrCTJp7Adi1WnP6cB38BsuAHJsgz",
  "key38": "3Yb2Hqe87TGUdPQg5TunT8QhMv4r2ng1MysiNbk1vJN97kfDV8NnHshpfN7wwS7ZP42z9nusSBegDTvcZY3ZrFRV",
  "key39": "5TGHRu6GAyUhymFH8PU3fb4qgcJJLhzzVQ2uoXoSKAXq5YNaaferfr3WrhUCXR5niycWcHuKPCFY71VCtieV68yw",
  "key40": "5oohnRrwMkign1RCev27CPKAA9ZaMKs6W2yuf8Gk34Ln3uRYzvjSMpeGfb391ymNwEzyWrpuWDwqP9P1u48nCVDj",
  "key41": "3qSLDUUgJ1eXx8pHjNANXbBu2cVwtQ2Z1PxoqUPqhxY6x1xoGVyDMRvtkBW5c8F7AeiwqEQv8E5iyxxocZhDwUCz",
  "key42": "3DKhTRenAM6LCQ3jpKi1QErzC9FFSMunxz6BLkapcAxCU8bkAhL81fE9RwTqZcnJUmpjxvTcg7ASLs885RCF9V3P",
  "key43": "3j4EfKPj6DYyznbcBQ6yxZUPz6BASrT5cV75zznrFgD16Da2wJP4FMmfDnUEq16KLXut5L6RPP8HYLpiUMjpDuHr",
  "key44": "2AfZrNjMbfBu9vH9USteKL7UsTjavXozbqmrRKfwgpFAVUne3Kab8zgaEYCQzHyw1kbPYmu6QjEjvEBJ9HJX29p6",
  "key45": "2ES1sHGdky64CHE5B5RALsENvxjDgtv324tqumhDGQKwj1UGAcjSHhRkHcgwriv1adgGbaMUyK2MribUvzXCMMDU"
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
