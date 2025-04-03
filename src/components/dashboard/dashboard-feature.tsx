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
    "3CkvMvryvZokNcd2ihTDhcxLoShxF8zAyc4mmnVUg4apjPQfwCtZPBeerwxXdiHvm8qKzVv1B2EiTWsRTrT2BzHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWJBaRtXmZ35eeH5w6BdnNoPVxUqGuYdAtzixTbn5veQuJAReJSrKcoWxKmmJqjyqoG4pvpVZyq6nsZqUqHMGCH",
  "key1": "4bcHcNazCNt8KZPEtgjPxofVxsLp1pzaV94AEsJmYxz66shB2kwnpqL2uvbzVdGB9ABxEgUb5DSdaUECb8JEsaRk",
  "key2": "645wZXbBCBx1V1r3rsnFp4fkMRyV1e3JaChwbahed8gNYMZDqQMXs3n52PePzjDGeHwBu8EuH21gDG5Wxcv4DbER",
  "key3": "37eSYk3XRUxKH86k152U7h1DPcVvmLQGqV9TGMkqWiUE2AfLtZLm7yzmqBQcQ2VeqQZSWy8szdYgCg9p5aRHMSvW",
  "key4": "41vMt7MBa6CMiGKixXYDFjb3cQLXax8HNqtbxKrTc3siZygGA9WQ6jP3hM1k1nYB6Pd4WnH6SH3qh5bqc2tG1QoB",
  "key5": "48Zcy9cMh249TnhUvfdC84Eioq4o1LYZXx1jPnXJcbLEDWxGAwxgZmRwRTXkoacr4v8Q1S813wtX1hn746gudQfn",
  "key6": "qkk83SeXVT6Gg8uWNscLVKHcQ7kSXwLfrXGJ4THLevswfHJydr59tsEgSffoTaQ7sT1V1yPqEJ9BeHyBijRiN4o",
  "key7": "3bsJF2KGtgtze7JcqTfCNM3sEjRpFPuFGi325MPXZweU6nEbNBvr2konotVvMZEN3Sn19tjqqN2An1YrnhLmGVsb",
  "key8": "4kx2XyVnxTkdXmiLqatxjPxenUAvgZURdyTWiDTaufSyZjfXbnnVTBbBB9cdiWngFKGeGPcWXR6eJv8qVKG6XFFy",
  "key9": "49EtMJ8c1HyU4FL8w8AwMTR4bapBQqqmzqomNDrKciwc5rpch7JAV81yEkAfkfNstvw5A37fZLQAff1C9SSHs5Ea",
  "key10": "D6VVy92rUULujpRUbFvDSTm9KTRSvcyzD1FgbSRwFq4DFYgD1AzLqpyzqYzUwTHHFgS82AGcQaQxpT6KtcL3YZi",
  "key11": "445Rb9vWi2pvVSNKVsndUXZXNNzJ1qNtBcrL78YdVLwHquZLjWY5TdtHn3S8SfrUzXKbd4GRAmtuRefxEUUUe9SH",
  "key12": "5bgQUCT4wo1FTsuAu4TRxDk43yyfyVjzps6Ca687Aj23hVK3he4Tu9vguPwwNWBYfXpPhCUMbksHeNgcbPrQQEsQ",
  "key13": "DAvWe7TbPrxh1EfkA1Ht3kyxf5bVCCdX8hUe924DqKjbHKTjTG3BJ5tiuDkHJwzj8tB72Pt1bHi9keh263d76f5",
  "key14": "8KYmmyYuykABM7DEPNJ6s4T14gZgB3PELJucRds3kgPpxCny5JPSb4kbTfTipqhZv25vV92GYxC2vHxBAe2xWyb",
  "key15": "63WVGKpRea2jA1xEJEoh1PRgwcYRMAMGHjhkj8ZzPtPfNS46ABr7ahAzKd3KnbzapNGc7KZjC7SCWZhr1nnxCQPR",
  "key16": "364pEqBPaiexBTuv7t2YvzfgY1YhnwX1PaLUHnxMqzBQj7Vi7TKayk4hwRs2vCDgJHGrkHX34PXBFa7F4NTqCS3i",
  "key17": "2iYYg3HwHrzWG8NAJU1YXF4kR1tps8V25qEQR8z86KoSupUcNn7aDgZzeKAEgzU3Q1ttuPnK1Sw5tNe5gtJwv4gx",
  "key18": "4ntr3Zg5k7CPSg1aWUyUWDVi65K8hcQJccVGXVQtiLk8zjjDPqh3DSn6RqnCPHobswVvFaGXyEQkkL9mbNcsmw8o",
  "key19": "sYKtt1HXD6R7tr8nhCvAGGMqGophewgdGLxHx2zkz8WRqWepHdUo6zmRGTvDnrCBcBYyH83iQpkAoWDkNZ9UBqz",
  "key20": "jYN5JZAFT32WVQ989Z6QxgNxPRT9z9c7TNMhJwWGCrtQB9aT2n3bfEdcaairvAB4wB3jcEDqpSvkMd6B77de9Qd",
  "key21": "3kmYSP5QTgVcENndUMynBnMeyyMuvkuNCdGmWGZfG9R3ceKH4mHsXbR3qpABRVbSL4sag6zVLqZBdjkJJBzVYSEC",
  "key22": "4UXLaDokMPx1ZjjhzStXNXJWV3wH5UwYN4dy6HsD58Zp6uwfCP7ge3s3ActsMdYzw68HAcbeALqG6YqGgiVtUs1h",
  "key23": "3wFJ1PMBNQGcntzz5fiKS16nwuCY7Swv3cjFy4Fuvgo8jaghVTTC1XrsYeSZxiMMxwATyKnVrJ1wVWebJdPDQR9g",
  "key24": "v9D76hFEp4PXTjdzibve13Lp4C2fQz7ewYToasqWSAtngCim3KzBMC7QaK87g7bLivhNLpXM8k4T39EJVUtFkqx",
  "key25": "4viYxY5Nn9EGpNGFD5MTsPFzhCrRWe9Ea3oPyjt2XBQDAqEQvPKdJ5STj4UzrRbUDgWMfWtiwkbPi6Foj81GEokC",
  "key26": "25DDnZzLoCS4agZdqTcriypaBX8uqgEXWfVzkqqkPSxEwVorWyMxaZsE1j3kkPhueDxyeK8j4NyYRwwgNTq9deFb",
  "key27": "5HEQ4R8gfei7jNPThZ8aRMUUTn6rAahWGFakwBXPLv7vroDuFHgnVqjZLC5nYtCfCkYKWj9TjNcKby5Z3WjhSwJE",
  "key28": "5HNKscD5HBdYbYkihW7t9QV4VFL9S7cN2Zn9csU1bFv9JYy7cguY1ezxeKc3FTVZ4fPRYWLfxpcmsgBX3Ad2Gcvf",
  "key29": "2sNAfWwuLJJqwJjzTtzv7MNyn8aA2sJpVbdq4HZSykN4V7DYokYpFfyM8zUTAWPQN3WeXyRSh95qqaesUhGnLUUn",
  "key30": "2DLnywoa1t7XgSPvAbFk3PWWfjqDHGKXEhawgzG1W2QPp2xmQzASMqzVCsKh66uzgncm3zTPHDAdX8BJWGbKqhJ3",
  "key31": "2mt6RLvH26ih7P1ySsREgUNLAssjPyAnxcKo25xJJAaxkGbkpFSMR98Tex2trqWguSBqma1kWtxVkKww4FaD7WHi",
  "key32": "5ARz5BLk6j6t1ogfA5msAsG7a7FB3ktNHkFKkFUHRXoxJSECpB6pcY14mLp9SkcToKQHBsPUAcT1K1g919SHhRrt",
  "key33": "61x8QDmJ3UXqNwcTHFYtfmTAPHsKEWUFhhfvdGPLpnhZ4DpwQT4b4C2tQkFQ4b8G6KTMw9BGnF6fqodDxJBNdFNk",
  "key34": "56W8tS57WsdLiiUp3j73S4DuCiUXv43BiABftn1DLY9MyERCHKwG5RPND4rErXksrg4WqBm1kpHVbBF5QPeio8ij",
  "key35": "3SiGPZWvLYrF5v3to6kLr3DdXQQQ9ouPXxvaeyonmzaX3etWq8QjvBqrahiK1wkw3ezZtUN59urJdD2H61h1V1u9",
  "key36": "3MbG4ckQwtXGdwibGCRdB86CyV7TtzfScfE1xqpnerS6xVfLcnA24TV4vD86Mt1maZgsASQHWcq3aWCYYmtJ2AmY",
  "key37": "4eZapXUpsb5vmUWPHrDbdYiW7RR7nNbNQbBW6GWicWu32Nvsh4qtd74x4pvpNQnncuU5gCAmws6vaDqdGx4ooVwz",
  "key38": "5fgeqLG9bJoDatTm1UbbizituNao2ixwSwcMXXgVzsoozpqNSirPvUNTqFzkppMytEQtousbjizrVXHjEzz1F66b",
  "key39": "3x7T4PfMrHLYuyutFa1SZ4P9EPXsfks1WNK9z3GiHncXi5fMBiKdZaywRnZhsGDqrBvXjHtxhasHY1fD1ryd6Guo",
  "key40": "4bfTexmdYQxmtMXHE6kPkJ89qpeTRVmw2ypYTir7CdETtAMjVwgYm1VrmDCfubNJnci8nn95KaBoGfqu8xG6LiLi",
  "key41": "1x9PCssvVrmjdHpHGGYHhBSNGKxQYVojjRXLTGdxAoThGq2QPR8NyFBuNNqbcFukzHMKU4VYCA44zRXmPyFJFJ",
  "key42": "4YtUD128ygGGbZL1aAL26jpjkJ8yndN92eY8VmfGE73vmew1NjrtxyqNB5WHaVXz2mAYvCkj48tvvPYnRraGqwzo",
  "key43": "3foK4diP4QCfYjSCqim5y19ATwJsTnfVZC2ftkM3Qi5W16kVcenUUeP9pw8v5niUiGn3DcEtst6QU7dQLAkEBKNW"
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
