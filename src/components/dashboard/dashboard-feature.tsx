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
    "3mEAKXhg5kNTUmPjDQuKv2SgGkAKaEwexmgo83Z6531W7SL6V9im3J2dk4uwfV72d6h6MDDZQxmchn6daN9PzZ6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQ9bgiLBrrsVEwpTjK6Z7tmJMTyeFf6F8rXyJzbn7atd2Pr2sez4CazdZ12R7qEZXFRLZD5qbnRsaCV3PDmWDAm",
  "key1": "42gAoa441xanLQJJoeesiT3yj1wFDJH1v5JSbCejM1YTbhU1VQ6HD98K6KQrehk3kLX2goJCNNQK6h2gXHMzNHe3",
  "key2": "2KwfsJRmBxGTmH5tjygieDz2Gf5CRHspVFsFQNYy5Htx9vZz8aVZaWGZrDMvGou3R8nGQHGX5YST76v2wNUWtCSo",
  "key3": "4W459qhq8BWJo7o3ToA37NhepUem7PC9sfD99uAdJqWALmrxoQkZcwbzrKRqdQWxw3UrCahtGgogh8uK7BV6dBDk",
  "key4": "31R6s4BkZXTZmWsmyAxrMPyyR6tP413eviELN3hMinhPJGmtfcaoMDuwi7uyWXCAWfov2rDhtkYG49CiAWbv7sXT",
  "key5": "2o6Mbx46y9AH36BbyfXnsjPLqaaS9sEVGcCBXY9BZBsyc1YMwgss8EJz8PB2kNHHukakXhW8amhi4XL4AR7UkfNN",
  "key6": "4niYYt4mGcVanPMyW8KEna1FLWpLY1Y4PNHyh1Xe6biAXuyHoFNAAytUWvfNeAS4rH9dAort258JaNE6YW12E3Hz",
  "key7": "61FTsfGVzyyRYUDqdxGVjetuREJykF2KicSSFNsRhZZ11xXsuZsu3MP7RhrdwGL3jndGPyVGcdRrBJjue6Xa872Z",
  "key8": "P2VmtTN6SDGgMAbFMAsFtvLnn8UoF4CjLdG1ZtvGRnJ6zNeRWyJ6wdWiEFnsZ9YP8exyUZ8BPoDBaNtrXW9sAJv",
  "key9": "248sXt54BJJryEp1N1jMp6wcPJunBKdcJpkTK9mH2DiNHCfzJfae96aCHt3CEoD6vtRUbewiQA83YMchWpvxgd5b",
  "key10": "229Sfe5w5ovjfRAKMswGaZV9RFfS674uki1hEc9yDVPxrwgRaLvwEFbjJjanuozEp78uEsVtE9X9mkb9ZtxYqXxx",
  "key11": "5geFACcWscVh1ZuQsVzvh2Fwyy475iq83Zttuht1WqJKF7xzpS51YasowumDRE4GM8A8p7hUu9JMNdhsZimfeDKE",
  "key12": "5Z75keEZMnTfVCiDjPez8izNsh5edeAyymntnKpzwuowTft8fLD2HZ553Doy5sEK6PnFginAvmyLDfBKMGMygrU5",
  "key13": "5kimKWdUHEp2ZMcdc7EWgpw8RQv4BNsoAgZM6nj465YQKyJJDi3JqLW36wC3SN4GckWmb6Dt394346PoBS39JhTr",
  "key14": "3KCbnwJYe7gDgpyet49LnigoeuFwoitL9s7gnBQrdp1Wt3gt1oXMr7GfZnujNqR89wHPfzVM67b1djpXgcPcziev",
  "key15": "4ko2JQbAfKc7EDQfBBJ1TvrDgQNiSrgzBDj7kWCtgx5W5yRp3L4v9cZFugcYLX78knY8fvquT3tff7aiS5GRqySp",
  "key16": "2XCvr7BjPzR3nZPHWWE8KSAoVgWVzjjb3a8QALx79iZY7NL5HSkag46fbvn5QWGdXHLeNWwMgvWNTDTjLFFsbGQJ",
  "key17": "5a9vchKygLSdxq3XQz4NDeTJLbxXNBCN1xFM6NiLy8QrdYBtLAxBZsgBdNpU9epHDSqcJz9iU2S7Q3anUdfZomzL",
  "key18": "jw2rZ9iR6dmpEUuvKeJatdMRCSmAbR8k16H3V3r8HYNWEefLgTbsrr7nXuyGhsY93JvRTrGCPQN1ruqAxFJTBpo",
  "key19": "5aUU4cEetKd3ggro6CVLaydNKJaU9qrqQkNJ3Cw9uxaYscproDWEmp6iRh2VBLKgZc6BUv29XvFagnFFopK9J76K",
  "key20": "FQAFXxjuZUPANpRM1xTgjVuVjEyp1GXddeXd71ca2YsuwmBsPuJP9ht38v4AUYzak2C8U7KXdMEZVHWi3rt5rxq",
  "key21": "4sTvUcfoja7wjJxNUK4afDArkfqyD5iRDRZhYA9VTWYnbcgCybwDFLZFjpqX4Yxz9NJaZKBeWCGa21SLpWit2emW",
  "key22": "p7ELnYfPP8qug6TbkQwPUbK2HT2PzcLuXx3vq843x96KErAbmQa5G4aMykLFQh4Nk7oT1XRmJR5tnnp6tR2o1jE",
  "key23": "2Jt2Bj19aEnXZkGwpDjvVPWJvF6hdU8YxUVYzfqPhCPQ2VQtvxCRxjYaDEeXc9WgXgvYPdgohyYszLaGPFJy8k3V",
  "key24": "5chfAyH3vuGz4jkyhCJUKhp3cvwYtjnXwM3X7zTL3qToMDy5xjwWNG9VBLVLERg6tMHn3iNFcuDA76cX3WHZo7y9",
  "key25": "49hEv5Xz3fz6Z2FySEkFFR2LmTqmpuhmx5TM7zBsPW5s76wmh8Ej86uEjH9ZLShkPhe23wo91WE7ynPwNGHZq8aV",
  "key26": "2rpf5fBNruFXZsUqmXpoYzwoRbJggZKduGbo8sNYmtZARHJdkbZekutFeNikAvnKdAiJsr5D1DztSbrxpTs6VUYk",
  "key27": "35BPuE5mnqw8RfLZSR6BavXpLwo8SpMfCeTp4Db8wW68Hx5E7nj2mJZweu2gyRbZD1EqWRDsLzo5ijLYgRji7yBE",
  "key28": "1HsaaKs8kyaBdv73Hyv1Dhn18HhBFPrbGcg4QWoFED22UNqKkbhXcDMLcKsww3taL2reByn37Ng5eR5Cj6nPdKv",
  "key29": "5zrpiEDKXw8qdihjgiGnb4bt21wFLTygbTVTGZkqCXoAbrZa5qtsVnWBQZcGQMLdu1XC8LbreTEWR85KecWNr4dG",
  "key30": "5uZKBnPyhn79joZQrhH7Nex5TE33KX1dVuiwCk9gPtN64xe25eKt9t97d8rDf1J3t8XexJ7JbktheEwtvrh1KviM",
  "key31": "F16cRpYuhrebqcj25kcXVQFKzqu6FAvxxoTR6VbzsfFJZV2TgD9PbfuRdXkvhpWn9egnvs8SvVgMDGJzy5fzXTp",
  "key32": "4HZoXqLLc8MJmGQZfU1i5X2Qdm9z6o5J1qFx4ZaR3AETMStzyz1Q3rWXB8YCppf36u3Koa1wcBTacqrHZwnMw3pB",
  "key33": "NFFh1msLwutvbWCdXh6un4nxaU7Eh7Decicm4cB5NyrV55jUTZhteyMZAXzvi2GFpS4dAZ6DRDFkJPMnXYZW7qQ",
  "key34": "5dCr1K8rZVPuEGZ37r5qAFzavGh3HmVr1sV64cGw6HKQVP4vh4zvkgiFGk2bBGsuQGu1hkZybqXmtHpTrUgioTsq",
  "key35": "5Co5UQTj9yJH5JxmHYc44P41h7fHCmpyHs4HgQ22NSkhr7cER3yqb9vJsnYqASNHkdFf1kCcetbtFRpY3iu6Te1u",
  "key36": "67H96eW23UjNspm6kKNtWr9iFwWVVG2noaWndFEH4az3jADCNCpSUy8WjE6pAma8LhhDNLF5XafczBWEHhp3HGFi",
  "key37": "15shy7PEWfPDWm47F6sNbd1RDtKhmAQNiDnhSrwbLSSXhkWQk8t5FuRiQbmxwt8eJCzQnhasdUgpFM5xm8pRFcT",
  "key38": "3pd9cBKNUGSUfuprcZxV8pVZDJFE8Vnpfp1HvRQfrDFGWQNgMMxAykdeCpzGgFndppnxYTBtqUfp1Amn7J6c6AB9",
  "key39": "5916FiL6tJWzWaDttU2deriSMK9iWUpQ4qn1rtw4oLaMCLUFo3XNxt64jjtvKz5m7LPpG9VZgkw4YwybXCvZkgme",
  "key40": "dwNFT8qG2hG747n8yVQtbkjRBUZonYcFq1sRHqLLNdAC3Tkesea57nXxZsk86UCUWv4btHACpvEbRSRqYsYH1XD",
  "key41": "5LvVmhux5CafZGBSMbWBKfPgugpBnXNmedVACBqPJgDXyaMtVG6csUdGLdoKtvExjUvAXFYKzdJxfgvjbKoHVLQK",
  "key42": "62e7kHq4JuVNrFpRKDZtmeeSED7RKLE2D77pTC7D2XZuZQytzsxpNMEBoggQsxYhcPoSF9aqjsG2EcyqNhGVD7cW",
  "key43": "5fXAZagxnhE1FJGR6e8q74X5sxugPEbFw5WEXr9sNAG1BSXCaUUYj1A4r2FemAk6X45QutT4Xu9mUDrf6LXC7rzq",
  "key44": "5nhAsT2fYTC8iRH2ekHUdqvzZ8ejK6tVNuaq13fD13n7h7gqxCP7fY7kpWrMUCaEQjjZXWBePytDZN1GmifKerrk"
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
