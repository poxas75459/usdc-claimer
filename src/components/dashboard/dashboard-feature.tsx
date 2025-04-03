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
    "3KVm8QYGW5KxFjXTwMVHL55MiDq7LHdZ3EgS4j6dJJ7FXMRWjfeQnKrigk7dpZ7UKPpDN5YsNYgV4DzAqqdQ3gJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkSiKH6oB4bBMp8bJh6v5XpNRWxzzmBG7V1oAVrcqV4bURdoVa5ZPdLg7AiqQ5CBvE4EMx7dr3PRx8i21dxDa8i",
  "key1": "3H3c5bkccw58Ymj1hLs65fWvGkBjT65fmYTkFv4HTQ3rTrQ8yNB9KAoVJUTUYFen5GTBPdvYepkdidt7MWLQK1c3",
  "key2": "D44Fnx9A44XjnuMqTGu5oia14g1uZekf6jYLzjkb6y6DuHoN6oSY18d3BsWtUchrQLn3R1nfhLPYnQm4pQU5kF2",
  "key3": "27zkL6hJfv5kjhKhQ4RCXdacbNpTBmEZwFs2C9m25xf6bGWR3wtLoUpRtu8vbqWZWr9nhAkaTkM9ayYrZfp1EcBV",
  "key4": "5o3fny6km2uT1fC1iF9ymLemYbepvNJW5H6NQHNMSyfELGnZtbhcWKCht2Duv8NYJ2fi6JGNR3n2g5fwSnakF8R7",
  "key5": "TeeMqLRgnNb11TXQjzrc1DaePef2EfsRRz2CBNno9xDSBdY2xgtGHsDwHgfhFwqpHHVnpgstM8DSiC4pejDfdxY",
  "key6": "4uxeGUtFEPrdZdwbPh1MxLdN1JniPhAEuxNXyJy1FiJMXejERvEYEX4Xg17J9C3r4wdChARW4Gt4fKJf6Emv6JYF",
  "key7": "65KRG53CuEm7KV88gyGYKaZpCbzgcA8Gsoo9EBZuRrH3fhvrGjp1pJEi5rzoicFaCZ6tPNm7DFw47ptZLhE6UvMC",
  "key8": "4hPm938df3Z7CdDKyhFLoxjZavQGPxUV2nW2WopSFQekfQqSiN5DYNoqLDCjZLV177BErQMKcynpk9Sjjv8SPwXz",
  "key9": "4P4hLnJ7KCxF8he76aUsj8rsEQEgk83yFyHWoX8D9gEg1yzVuW9D2TLEsZo1PDFDwwL4jPbquyRehTvH4YZqVVvq",
  "key10": "5e76ahyeUqrn6zc4MN6TgYMbZsjuRrQ6FmisvCDGxM8xKJsXtZ8sYZ6828oXiYJ1MC3kGyRTZ2qybhPk3RQFpy17",
  "key11": "xP3ZDmFwSafbcjCnJu3qZH63N828dr5uu74vtesrQDFtJXtcQLuxxmY1zWSBgubo4r7whNueMhARVbBDhR6sejE",
  "key12": "3VKLBED8T55V3eFs7TA3vgD5xVhLdzrPWNVd7p5UksJTf9icuAPLoVWykWL3rMcJqz6VY276rGP8sJw9pfaSgA12",
  "key13": "2SD5M7ZSg7qqtFjPJoCquCxpJHik6sJHCV7QcSyMA7ekAFayReJpJHGbLwzn7pYSphNXzktesnAVt7f4ZpGeK3Q3",
  "key14": "3WKfpZKdXHcLPF7DqEYfnzbjBx4fpkCZAASwkTBvuMckMUcpfm8CfL2erziKNiZPfvfdAAXdd9zPo9DqvUHCc3XY",
  "key15": "39P9EeabQpGzyZssjubwrubPPJXA7op7JNoFHerBd2fFRLRNb6peiDrHqDjTYAyoWRRJDfYj1KNnetu2RBJNyv8b",
  "key16": "4JdPZ7LoD1hfrkzqQ5izopkdkE1FRzYovMXgAQXpUUwAtyoppnatnoGfKrVP48MzufV8FgMHHdK62mtbqR3dUcHQ",
  "key17": "3oaLK1U5QJRkrDDz6udKQv1AdRxUWx9qqV25VfoeK3NuLaAjghLLAbNrgh6QXZqGkzqHiFyMrvVYVnzV2koBavxs",
  "key18": "5zrSz6ti918hPgayh95tKLLHAAq3JsvfwTr6QxcT83A8M58SjGLDFYrnieBafUQ93udZswhPxgVUhFQ7vcBJHgS2",
  "key19": "3rj2L6vGSPVEfHXx6b3gAgii6x4LbX4vUvgNJbQZwLwmyfWP4KgNH34AWXckJMPSCsPgchY6Uz9yijCPnHR9XPE4",
  "key20": "KWEspCKA8BhUAbYcAcvWm4dqG29aLe5VQGWnhz75VHkvF52Cvdts5YRsNYXdzSsWqRNHeS3XVjJzYUhUtyGLiT8",
  "key21": "rdrbiJLmGZQpxcwyeYa1ytDN8uSwyegRaJdwWjbSuUJ41ZskDXCXEVoDczzRMfHNWUYreSAevfvPwqGL4ELVQLw",
  "key22": "26aZnbkfXTvHGuNGe6hNtxopmoc4u9dGKGSh9ehLUpCSaSng9XF6hHd6DUEWioGPYaq7KGWJxW2Ug7nSmfhRvTS3",
  "key23": "2Enz8Ee3ga1ZebNgQcMPN8PMsthYvgBybsGKxoJinP3qNAKjvRdrYdd5WdsVoGsk8VAkg4fRJSG7R2K1UWTUPUPd",
  "key24": "4RXZDo8ghV3gabZemczUFXkeCMHCu4WYx767DDSebstKZbDAFaMtwnTdbiAUFi1TCkcXzPoXyL9696P6Rnxi7iLg",
  "key25": "56L9w4vLYPxUPFBZ2BUNExViHw4eK3t32FwgXi65BiNvqyXg69XAPdscA4oANWCBvZ4hTK4JcZH8jXLYK8mXBmYe",
  "key26": "2841spT9PYZSTBntoi1GWwxpHDDE66ZvU6VZMUaHjkDTDPgkg9BpiHBvgv9vfMazY6zSSeqiBTvTe6kLfV6tntNL",
  "key27": "4afKJ4dC72XFDxVYdSuR5Vsji9CCFSZG6nX3FHv5jZ8KnN3LBX5uAxNtpybFPZx6cxsxV67CVnNbJcQGkMp5WgBn",
  "key28": "2veHW7b84patiq56hRGeKdWBJRnYRHxD1X3wojNGJA9g5UrDjSSXia4waEWNKGtsCRkAJFAXA84YPb4uQhSXoe9D",
  "key29": "4M7pfWkHaucUh6LzMcbJ7hK6J5MPRJsEonGTz6S7b8sJhzKxEKpbhL7pP9TmkT2QgYH66xsz6h26rF8VkH732oDN",
  "key30": "5EqHzQNZR7w6eqC19C9DPPyM4YNcK8aSf8d1aBZbRXnCwdpGVJ8jiy87jKRTnXrcjY2HsE9kK3oLoT9Pu6FjW3Vr",
  "key31": "5YCBPCypPpkdHDZD3JaiMLet9sToxqrx4G87FuccHgUBw97zxB5giEQanVaG1hZeX4qsqR5diJuviNMbhncC7EcY",
  "key32": "4o34QJotwDxgRfJ6mG8NifNnvAd2DRaRovZYwge74HDqQ3DVn9NxQLzPRuUgy1CTw2wvxbWc8c1odoqzGPtshRwk",
  "key33": "4FahWti9tudash9jimqzYE2P7mfDvAFhHziRPpiuVUvias7AQ95dNXz8D2M2Xqs3AMpC8GvjSaZGvW6CiB9m3jb7",
  "key34": "pKimjyaByvUZrCELd16hVMWRK3zcwPPSLwTpfMLccRa24TqA5CN3Vhd34n9v8AW2gRh9eg6z44aFtwFsnQ1x8Ck",
  "key35": "GtKwW5WMusg8zhUfZmNaKxN3xMJ5kYuAAJBDsgLXcCk6P5cMRqzBw1D8RN6J3bMxmmvT7UzVA4uw7oTbqnBXmQN",
  "key36": "5XjrcHTXBRuj2KLewwoDDnhoCdzSVRzuynEumRUcfRx3PUS9jxAfGXs3izs7LhjzXwtqb4jzSDr6aMG6DvHHfCTz",
  "key37": "2mdVuGbzA9dLUYHaLdgauJLiAQM6CDeLC1c2fcv3k18PXBuxt2qeH2DD6y8HAXnGx4xYFhFu3w5Vpp5oAJM94Ng8",
  "key38": "5oG8Sf5iyayHoYjNZ5Ld3NcjxG9VLx4yW443wYJT4Fm3nRcqSZokB9dEZ9Q8oGTrK1fZe1VGFShDfSNptE7ZvCWT",
  "key39": "pGLGgxG79ei3A8KeWZAuWGs9Ksak6uU39rB1EeutUmSnZAkv4DsKMQtSNYZdQ38SxQgu7Uz1JtjibQvrAW897zA",
  "key40": "3HuNnf2kJmEhdVQRzid9cQ8G8Wk5xP7fJa3uoTrq36CMDQ2Nsu7Dm741uezwNKZRKJiXGeA7DoEcfNaAqLGWFQvg",
  "key41": "PKcKrCe1DecGfNuLiNvXRNpsFPUyhhYjAbn8EruptWgfVnrDRT34KV4sHd4KFj2nu7dGztr5g3H4iYThGcgB8xQ",
  "key42": "3bx5G1LMRdZUvxxXtAVZE3KNU7F6sucjuST4Q4XUmdvWkLxd7Cu3prB6SBYZf2WfZinwpXpraXrokG9Q9Vw1Mq19",
  "key43": "2Zch3VMpvQeSxhZf98U3mgDxR2LEH4K53ZWsf6MF4fquVYt9WhQy1qxAyL9MjcYQEuWBr9AKFHxQUS8eMRyKrLSt",
  "key44": "2GvbUvXHV1TZSUxQJ6kCet2dQDQhM9nhWtCkEQbh1Uqwa1KNxpFyfaLK6ATFTHLKeQ3snN2quEkTH59uJy6mQwxo",
  "key45": "23j5diYB8t6TdrAJ6zMjjL41LDeiPEXnKMuCYCvEGcXmmWu2XfJGwDwqH1EYyyiaSwK6pPtupFmvZukGLRk2aKQU",
  "key46": "qjZob6aCcHeAEuRWzsqqTgQX2mNKaKNSBGF7rK5uoLFGNzYQrbin1WU4EyY3E4Aijkw5PuHWK5gcxSvJcusM5uu"
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
