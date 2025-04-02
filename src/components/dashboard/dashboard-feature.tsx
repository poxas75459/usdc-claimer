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
    "3MtycaKztjRkkQomtaDr6iYBaqBfxUHugi5yNpfffCugaZn5tAQsB1KXzakbi9seAHwY52i62MiT7JAjtVEmB8nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLfcW4THbVoL2ufcznZZUVnhoBJGfkoaBiHy236rVcRiKHWMmUwYAm1iASb8dtUX3dYz1YSQ4H95UrJpFv3nC4c",
  "key1": "3z1ADXAQbBGbrj6vNGtdHyahHRJ5KVWHn3KVajU7kzxhR5TenumNqxQGJoHJijghzyAEMoEYn4vdV7hmMLbPiuWJ",
  "key2": "2UxsAb3qZtwUs5NMBr3f8eYntu66qamAj7wYFnivDoL8Sk7KsSA6Mud2mhA7afmoSqR7c9Hj1NaEHYdVidjXimSo",
  "key3": "YE2UUYqfvpso3srNp9gjcmFLcd7siuX3Fjx76GwfB8bd9mgrkbte4MoZjENPo3Ezw7QUsTpRnACPqyRrEv8g9XJ",
  "key4": "NRxX8X653vC1HqvDtiXmTTgDni7rdme75C9RrdVVp2rmkCGsL4Z7gqkpke7uT6NxtPr71XBcW1qv4zD6YRkMji5",
  "key5": "3GZvuKUC2yHdCyctzV4KaNP9fESY55a3bkKAferTgADKW5HAf7vKjb2u9LbX35z24Cjr5x8PT2DVVcQAiLYgpwLG",
  "key6": "3NucHV5QZx64jaLujCw8qiTjwRAbAqyEk6bSMkMEddUYQGP7rPDsEjUarmTc6Pp5tXTdU7YvjksZcVV3gk1JGnkq",
  "key7": "wW4ysPDFDnJLe93mXiZZ1WqS7QDzedQCgafixLj9z7rZs1f3hH4oe1we1anyzi8FozmJzzQcPaTXwY97Be8WvGz",
  "key8": "5oNi2AwcpdbmEVrynGmqwoDHguEypZaMKJQfK2Z5T8xJaySsxNJrtCkXKeapjTBLZnS8zabtEPxjJYmJqWqeYzm6",
  "key9": "2dDufTAfgAFQJuiGxHV74xyZtwVQS2XSoDhH5F5gbZUZzhQp8zs9vru57p5T43E18d2Ga2AdqG3Dn9Hz1DMKY91b",
  "key10": "5KCV2WAciNd6pxvZi2sckxhgfhwDUyKppcVrB7qs8ShBMwtKdQXPuCk1cVoq9fhKBTGzuKDEo3nGw3Bh2gqSGvNJ",
  "key11": "66NXmuhUPHuvubnhA4JH7kmWshaT5KtsBLhwE3itrQ9nJ8gReih9PWD7ft8Hj48qffCkrJBSZywykhMcopQ6XJ89",
  "key12": "2JkkURRJY3VaZkVVPFxVVnrB3gfVujTUX8VfmUfpxzzdcGaZ2FExNWabsn9rhdYWm8R9FX5debGKH9K8bemmjgXW",
  "key13": "4qnQXnYDc3nZVtF5TAgmwWQJqHGzpta1iDhnphmaBgjsG1mquUbrmTSHBrEdBoMRxQuTrZeZUR6zcDXqVNejNpLx",
  "key14": "5rYwzfdJRJir7z9KjtoA5vXTuVh6QiGKRtfTWqGycNZzjBTf7DgPAQGknKDgXcmaRWj8T5MFfYwto6nQxmTYNpmE",
  "key15": "3QcJgjcj9rv9tuubW2D9yyMNZscyuncUFF2KDskW2uVvy9vLKrzCgNbuLiYkmL6stQ7jS88bvgvJfokc7R7z3Wqv",
  "key16": "5w25Euq3LoGE3DA6B34wRvpg6t61o8PE2qjJybBGajBMjrnBqQnJdgrtZDUBEjhqnP8YnoUyxEqU8bMoLwtr5NGS",
  "key17": "24w3Kx1WQ5Njay921D1A9TxBGKEJHgw4GHHj2AyWKuWKMDKbPKVBG2H9XMNdePvQ7tujZg7bHrrUwbtWE4DZggNR",
  "key18": "2shwmnM7t92hrZTyN462v1osokJdx3twkZmcuh89gWbKCKFmMPhnr9DE42ivQihwe7U9VrerEvZEGrBLh3KozbnN",
  "key19": "5UUuERjr8YfPRtfJqmrcMUgyW1Qnfihdgj7S52fQ8k1Q9RnoAfSDDCjdrZdSTSNkkDw8R5BJNqpS5djXa9Hzw44n",
  "key20": "5TE1L8nmYGnBT1bLWa3CkgBtUpspC9jjAd4EQTPzQ82omPPoa84sfxNB37cj1JJniitwh1VhQ4ZrDGVA9hQFwoJs",
  "key21": "2s35tkZXWYy4uEEHct3JeAZz9HWympvRF6orrsHPLSoxt944LG4T1ADJh2zo9U2HGWmv5GbonaBfiPLiDxaUJ4EJ",
  "key22": "65YLnVUN3g3p53rpgsnFCeCr3k6tJUoEgMBvHMbnrENTU3ts6ySbCbm43Mt3rLFA72dbx5Xxy17tbAswS5KHnb55",
  "key23": "5NvLc5bxLVDNKxzEt5Gm3jb5CNycQWHcRY9Ec8pkgKqSWLifZqgDfeR3LGFJGYV3RJjfJKDzcgztZkYtrBKPuJxY",
  "key24": "5MzZpLai5rCKyotvoCNig4dVBQgb31sBzUxxvz1U338orKXusRHjbSN9camCwdVfMReMvYmSaLGT9Ejpx8gDxZZM",
  "key25": "4qJoKBD4mvnyTPkgkLuqKY57Fe2WnWhSQpcb2yMX16mk8b1kYsr7zby8pyc2tJAViSYEcgx3MTyikW5sEAAoE4r",
  "key26": "5ifK5j7yizuM2hZdKDDtDb6SMQrHrGKteWmxdvnwaVyiY8Tr9AtrQi6BHFcwPFozNpRHykQwarXhAprdZghEkRfM",
  "key27": "hQhq71GfzgheiJ9rdQ9ndGB8VM1kFrzVpPVTdJxoukPsem7Wr56f58HD3VN7TqAoKcN5LusrcUnCXEd5oKe5seA",
  "key28": "4hNXPDUAGpC9L4HBhsZNW2vPz67o3BHxMCyFYrdFkdGVrjarRzJvNijGJeM5yn4cVJeu7C6EwQtCc3tZsL4HedrB",
  "key29": "oFDUkdz4tyGPe8CUYJH5c9GHgmRao2mEjv89LcDmHYCEqgxwPR9o2j1zrqFmfChP1dR4AFYtm2dqcpyJyNPtqgu",
  "key30": "5PT1LyHH1vnDtz59iWT9h2Uewy29AAaeq3hnkRUazZCzMDZxtAFD2Qm8RUXxsikjBmagDrX1PrAp67VRNPEPuaPx",
  "key31": "2rJKPnKRki2X43BwbNTcmpkdfTzJidt5RoUF7b7M4xEZbC5x6eFM8YEWQ5hgRS43Gceq54f16vqnaSyaGPmYSSbv",
  "key32": "7hV8HyiQRAjhbgTYvHidvU2ee5KWYGSJ9VNrPWdQozDxpf4G35iKC76usJbAETLXxWaNVTTfFKyKDvZZPU1cosr",
  "key33": "4af326Mwst2iJewTZhbuVimo8FPNYHjHHJ8VorudhwwhJuja5wkKRQDwpTka1Ei7HB7gPeMs1b38bMA6hFiGJTQw",
  "key34": "6FZQZLbffCgPxD3XRix3CNVZrdk2rYZMkVYfgRfyEVJWzopTU6CcZyMpLQgoaiE8aJsEY6FoiQRchvLwTTY3rej",
  "key35": "5Sdmx1qpirCReERdUcdY2ReBE4c8NrLSgDC1r9nCWY2XuQAnRPLzfdZvfuMLiwnoPrBqBP4PonY1daoiKnW2pRSs",
  "key36": "393CpbSAoqZeSsmiBo3pfrfWRefEiW4V3EKiCxwnBH54RbSmARj5hqEBwAS5cqaG3fQQTAGQqfkzEzrnTqaLJk4k",
  "key37": "3SGdG9Hm86XNqErwZdAFhA9Qn33wwDsvjCAiHAzjhgj9TvFpqsAuRyd6oMqgdJ8xif5c2QdR86AgFmBV1YKYf5pg",
  "key38": "4gjQSyQnKrMCvSB489VComGSwKaT4tAeiebL6Hw3y1CKRpFZ3KKkVRUtH7zVX1Jweg1YYnCqyjnmUvcDsDhs2D2M",
  "key39": "WM2gBmYnixTXzUEgc3akTPrkZEmpBTtqwYX4Kqim951JDm38uex6f4N5PsXqkV4tE4KxpzrQYFcdeHvyVjaXHg3",
  "key40": "QfGKNGZwy2T8g8vCrTPBSR6sTYhv9eY6YkSr2ekFVmpC8c4xdhouVPx8zC18HHwHnVjFRnH1Up4Jd36tT7BMppg",
  "key41": "4jinYZHKAxcvjgir63HW5iZNswVFaDT9roSnwnKkBFNWSQVKBWVqdaVTDAA8ueSiMXisv891N8qvJbSDcQvEU21G",
  "key42": "2MTJTLfEJYKcCqMapxMEH545NQ12Zj3zF62NdYD8Vsghk9XdRoecwCPsa2v9xs7NBb8Lu6YgAs3StMy7qc3Ap8hm"
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
