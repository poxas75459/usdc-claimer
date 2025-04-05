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
    "kFtksbHkuy6dnKXDzKZW7MoSh2MUV8i2crQLgCqQ8Swv375q6ZqUmKy6bbxXFqyrT4pn3Pm8AVtWkehJoWcLoKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wigPSjQYXeUXkysoGdS6DQUwc4Z5fVPiSQdyoDgR2dmsoiUxeX6dxaFWLe8DXoiDaGTF8fn79uMXimfdYe2QMpM",
  "key1": "5UbV6baBqcyuL2LEXMWhUNPuAecTbBPdgqGHwpqZLaNyoFK6PYao9DywWrFFxhdpLKuBFomjaCyLU5zvvVmaHa9y",
  "key2": "2zGyXiNZzb1fQxjC4AKZNwMGvfqfBgvWAuvNX1hcrTDkDV2fZ4VDgPr9d7JPdr7nWE2TSJ1SFUe5azBu8TP7r6Lx",
  "key3": "38Q848SawrZvLUCAVFMqZBhPy6hPE5PLdmK9shnesXQyFt6vgTjy6oSas5w5Dy8EwzZmuve7fMcK1fdt32221Wid",
  "key4": "3u9c7ULKNwyEWQs4BTA2QHUXgBSRHzPy8uUYA6AKi7GqMCb73uuU22ctrdtsFQEmFfKMEhFtvtQr1V1AH1DDfyCQ",
  "key5": "aaD1GDAdE1iDoa5H3t4hL5vrjuKRcpXGihpDEq1dY4vvd2RuHgDrtNuc1h39XChGhtwSePwk2g7bWgPQJaimW69",
  "key6": "NC2Z326VhSd8jVBDwHFykLNFcqM4EmSBMKv4tVP7VtmQdPiZEESYD5Y2G8GsfSad2WocobRkuApcnsvqnjQaTvU",
  "key7": "bPwJDQ4F4eRVfPMNuWahe7dsbziXo2npteXyj7Q2Sr2cJmxeZXZAQEr1mzspinjZER14tnDbwRKqjsiyaTN5Dxd",
  "key8": "kfBJD8Yi5gv6i4VgEV1DaJBBiigip5WJ7Ae22GhF8vLVwCL81kNFTSBoDg7wFcCty9VNE4GZxtqqVJfqqzQeHhV",
  "key9": "2EzaRqWXZDNwF7zGedqWZEKKveqK8hbB5B2hkdQDfkKLVVMeVWL7WjPnVSzBmoFicCSfGgFQ5DXhsCGoxp2QfYhp",
  "key10": "5BYZFxFfn2nwSE8xR8FYyuWm7mokAv1BdvwGgnGEDWomQmbCjk2TV6Dsdo2efTcrAmFfgpNgyVWdCE82RELWHPzM",
  "key11": "2TfwQjnribPZbEjVNLkz6uYSECm8Ft7rUsBxo1h6YrDnp59wsX3xYxjcyUXrYDDZYZopNprxF5a46GPkHNNSv5um",
  "key12": "4ZhBnJvfcUd6dpPUt53xkKuUkgLhQKMb5aPqQ2Me18vBHVxAVHxxYzZKe1YMKCLALhPH8sDTsz385TNVemGeStG4",
  "key13": "3X5fcXr4Ca9RVdgUu8sewpVe9kbwM9LwARx41whqX8ax9pYsmMJgdTnjwJi5AnSL5FNF213zjxmeKFVwdxW2t59K",
  "key14": "3MHdSVyWRdEocKF8yk4PKwf2xenFX8gxb9VWixXNtYVNbjVZbvEpb9wtutkXxfUmzGgqCC2KS3txoTG1A5ps4q35",
  "key15": "RX4sFKaw3w8x68aCUigJKR8ghe2TnvjknqUn7Qc1FUkyhDdMBGpevuNB5vMca449qsbrYM6FS2Soo3mPx1xmtsR",
  "key16": "34PdixAs3mvaV3CCi4izdNYzaJ5P8Ep9bf43i3R5Fdou4495ouy1YGEgVstULeQLW3Ens1BaaPM3WeELpMGJuBKQ",
  "key17": "jYJnYvoN8JA7n14VQb7UxYB4G5CjFVyG3wqM8zq4Z8nTZopsZpMPeY6RkWjhY3fET7mZyMRiDtezqZQEgoRVy2h",
  "key18": "2GwVdbwJPE2LQw8JiTk6Fdjj6yqaPwLuJDaKcT8b8J5Pxigj5ynFgn5wNvJJfgNYG9dWNbcgJURhPFSSNiEmZbPH",
  "key19": "3hoAvMFc9jAgvRYk7Hne3jodWKkSqeUuNW7bTZWtoyXFyZJ3p1S9srqxku2bZY89DspSjW3EeCw5fZoRB6RSh3sk",
  "key20": "4X9fecRCG4ror6MjFNnA53XucjFf5UvAV7xJwXodNTi5SjqQTJ76Vk7PPbWggsAdApXqS6Arsm1828CQPqNE1Yym",
  "key21": "2dcYBw79QoSMp5nTQD27oHh63mjWKpiiKxAhWALUpVmTvSHMP4cVwUjNVtwV94Dd19XNV2naB8vzWyB6f6b2gECL",
  "key22": "3NUuTR3wefeYtb2XYuLZtzzWotdahcEb5bu6xQ5HdBKimbScAD2ARHJVdEBZx8MjGsh4MT7uM8FuvDYUMBdw8Wxq",
  "key23": "68DKKyRKvUCWSX1Le9EFUudc92T2Mg1SH2kyBNi9rLyKtsdV7mRVPWU2369timDLU13MLBYLJNsXnEN9aKBqt4W",
  "key24": "3ReQKH5bdWs3rFQ7Uc8Dzx1XvqyBLQbSC4scrsxG8ZmWhy6FK7VUYExAz9yNXB1ECL6rcw2sDAqV33yo7iWHFJa8",
  "key25": "3Gc2XWjWCtcUiuQL2V3eSQMsXzrFPNYiRkPEuvC3TaZ38fRFoUx1icWAeTCtxfKri2CZQc5mcG9NyyUCvgp51Z9x",
  "key26": "5z83HGa348P34wfaQS6XZSvh9DyzvhuhhGLJeueew97mPREE5U6THwxGwUzr81g58tSo7jc1nqpi8rMPyR4kB4nB",
  "key27": "2V5kKi4T1Hxed7Pmi7tC6M2X4CpBrqnr2su9ugY3V2AuEUn6Hj2gvvfSUK4gNZCsZf9JJETq83jQfgJg3Az2imH1",
  "key28": "42oiRfsN8dmbPYrASkTEQmaLbtgd79mrBLcruPawV1fVU8brrjPGSZGBAZxibGXpQ4txbxzkVzYyXErFYZwXzCc",
  "key29": "9tqEThHXZdnKW812GkUFb9TWxMCAs8r9Yp6dnjNjKhXqGWPy9zqD8zAJPCG7N4htLxuZ3hGrnNMMHdp1qXAit1J",
  "key30": "27cruivY57KoFLscCEbENdABwGPyLBzXBVbAgZvfcxJinSmyM1JZRstmZZP9E2vkQqdpNRRDFZzgXkeqPewb43bT",
  "key31": "3LcWGVhLPE3yApe8jPVazjdC7fwhfUhYUsNvUbBgxTuet7kcgd35Cf2DzVPEDtBCFSeCCVB8s19FeJg1G3MoaRJC",
  "key32": "2HrwwYDvVnWKJXKHzSocpCsdTWX1ZzaQZg5KJUFcAL3Wq41oAgpZWVTcYFKUvxV2LVhn3qXMXEhbrZutttdtbadj",
  "key33": "4dbcu64k28ETeB98B9ZozvbkTABjJrmswq9P8GBJJsPxXcRGn3C26AUV8oBFpkjmdCPWxYY1ZA97iZYiPdiMdbcH",
  "key34": "3D5vR9k3BFRLpCJE5gfnYQ9dTqbtNJJVXQvXCRD4yf6ymkyPXUpmqh8pNzZNe2zT7nDK4NQ6nrfRMqjZwm6GeAgs",
  "key35": "3ip6F7gqGNu3G62wFJeZ7CSUN6XaTgGjgS9tbvmP7wnhAVeopSTsrnvdVca2X7CADnBWWiVUCgLpckRuGJwqw9mN",
  "key36": "26vx3cq4Ayu8hyUacE3QPerFFM5nCNQqLp8UJcwawtvvoRSazP5uZyFTxZZLGXep2jDAx3CbxVzDEjvaaQPGw4dW",
  "key37": "5D6qSvxtsNY5KntwjKmMbeTMtF8nc6oyUxXQsn4cNyxChsyqVcELiVQ4uUZuuBfauUJBvTU7Y4GtUnn4xiuwsKe6",
  "key38": "4jJxa6CENPGuiHFSLdqfXkRxjqGB8z6yN5R2aNj5HbYNs3GkzjCqaQwMFaQUyKNUjq9eyeeuhTCevrJV9whio7Ep",
  "key39": "49uPGDG5ELrvrhoZEF3TE2JtzqdqfhCRAnTCxpzXYTyLgwEsHsJiYU3VviJkvNsgD1tQ5bBaaCCNgTDbrKwsW7b4",
  "key40": "NYHam9KV5Q6wDpxVCsjDoHENNjUdngRruDmDYgHxAz5ABUdjvVpGaQaiVB43pGvQUonpBVcHmfJzpWknZunKce7",
  "key41": "5TitQjfX65As6PujNcbCQBJbAE8x8ZUmWxVeinCsgFhe6n8cyPtefVYzfQMPBXc1vKqtkxZ9WA3aoqBbmTLLsFKg",
  "key42": "2DhTdfXk36LJEUHRwRhquNVK36tJBYdS6fDfVvxXo62YChkxmWWE4r5x4evjsgFP8DGgbnkRUphV3MZF68QKkXpK",
  "key43": "5tkhMBaSSiHUxdsKByap1YXxZHhAUVDb9bQjzX3eSxNtQKjgaEsCSdqNarxh5FicrVd9xy4cEB6EqanuJrwZv4gc",
  "key44": "37rS7zVgvuZ5nYR7vUibGQifXwcEoNPLZEU1Dsc9cyW8zcTB9gmmNaTeBPG97rYg29DyTbtLVbZHJ4qnNM4yB8CS"
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
