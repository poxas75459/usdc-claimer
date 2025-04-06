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
    "3USAT2kuDquV7KGHweeSpNzta4NshUHysyqZPbFPJ1ipdn1vwM2n19YV1b6Cou4zoeytYpjenzuM2VCJ1YufznYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oTsaNSeV6Jm2e6KGfoeZpNv1mQKWE5iJTjfDCV7ekcNGGSvQXWYC4LrRM9DWBuxkyPjsnxUxvMTDdfBiWtTcXjn",
  "key1": "3HkZxdUCZ6bDEhA3c43vvMNo3zj8WcfzQhzfKR3ojybuYiXV2tbP1Z5GYeTTYDCqiVy5x2unPoEBRSiuMSv5HXeb",
  "key2": "5XWgRtMvQ46BsdTbrfMi9gSDRpNy9EzQ9sdiKzuTp4Bih933CjKn7YXVARkMgRCb9LsyVDeg5dMCVLTUtkPL87Ci",
  "key3": "4naqxnB6ibaSMhx7tPphE9v5HNLXy6rVUew1StBUsaQfPrJU3ueU6CCwZ1tjXXYwD7hvSXZ9Us3Y44chjcYTVxGA",
  "key4": "2Tw5j78qevwHNUP77i1MgAz91adF7VdtBuvf99DXdpHEAAqS3cgKKLJ5jTUeUYAkBDAKtwpNTBS9uz9JNxo5ieDL",
  "key5": "56RwZDvYVXBNVYwgHjfgb8pGFcTgkTqFmGqDyC3PXSSUTEXGjBrAxLtutsg4i2nKzeo6TzDaqifeSgZwaWTdGKcC",
  "key6": "58k12wb8bW72XN1ptWfu8QUa3oheUdVro1evwuEH1yUcYqKs3GPVdAbhW6Bmn8aEUUoFMwExmkMfxaRARLHFkiEA",
  "key7": "4AFu8c2aeU2USvSsmepirj7dakFnXoUkuN3ibpKTcPKfpLHr9Y2cyadJ9qdFvLCsuUZjJzPicaogfW5Hn1ifkhUX",
  "key8": "2iHfUiYNGg71ygMvuG9CzdHpMM7T5LsXT9FF2rbuRu8XdofzZuVDcpX5Q6fxKZtCQJtmqYq5nJRywTYU6WAUFNpX",
  "key9": "3XV1UC17VyDQmcPJ9GjmBF7QNJL5DFH51BsDaYmDddDwZ3ssfmuT2iXr85GebGzgE25HXn4sEKnrzbTitFNdpyV7",
  "key10": "4CJ1CwwRaDh7niaKTzcySEuviXF244dh2aYcF2mc1usZLVG7SYv7Qhf9Y6McruepXyjfQszEyd5uUGtsNfPLvhTY",
  "key11": "4Krv415dYDGAoMBKpCEhHMr8E3W6a9bVEyF7VmC59LfnkuFTUqTQJgN3CXoprUCf8zqpXDFqzk51fujM2F85z7ai",
  "key12": "2GfCtJbhv2f7vQ9YtCvRwnFACmnHB9SaMsQ1NFeAJFzr4YrVUA2k3W13eERp5iW8UqXExaXS3f7XwiowVWyGi6F4",
  "key13": "4bWjusx9iHktyb5rFAxf4nYoJaG2YHK8MW8JUgT3z5TFaJiadCmfticHAHoeN4MNynu2pEYRcJZLhAuCM3mM6wBA",
  "key14": "3qp7Fdg6Yo6tHSBtnjZFhran3z3i5Jswb8yQ3fmu1bbRNtXFkbhuSRotkLhSEZZn3Lj5nk9twdeJA2q5DcVhuPoj",
  "key15": "57okxwBz3LA2H8BKkPSLcgMMtAkiFuQx7CtTFJzHEnLvtRomjDUA1p1r5Ps778sZrEoxQPqMC1jCSPUFU4yaHcTH",
  "key16": "4WvErtJH7PLVrYGeZtW7Qgit6VwgjLLUjeWVupqWAigpi31LuLgTREyMKsYEzq6dSykQySCLfWJkqkzQyKQ8d8sv",
  "key17": "3xc5zwfoR1Rg1AG23beUXiKgZrq4WgeYdxVcHeycCQSMpc9Z65HQkacc189bRMRMVZ4SoP2XHayT6dxEDxtaGRRv",
  "key18": "26UPkWkUMUA7qGpV3hRisL3uoRNYNbn7i7ocn5WqZunxLe8jNfMUMawsdpe1647nnxTp6148zRY4Mq23xzrc9uNh",
  "key19": "3p94xVgs3JyX8G6LGn445Rk2bfddh458Mo2j3T38uuZHK4jAjVNF26PGsU93rX28dgKceD2NqwBRcVWRNwKLtBbk",
  "key20": "2eLTtGHAwupjxbXwaHzefFGxavuhQKYsL7YgJ3HwCS8HSVWLrizbGUhSXyCZjk694VxeMK8zbjbmvtKeB38f3KZS",
  "key21": "64cL4Y3qHhqTS2tUK856QS2u3jwh2Bpx5mtgRZKFSiuPTThJKyFLKGtQ5p35hygXs6rKtoBuRwNqqzFXC2dpqnVw",
  "key22": "FFZcM11S5BSXSu7x6GUv1tBbrmhu8A5tjTRdfes5P5tRF4Dh7RU2UzRFA6F7V8BnQYUUc3DnnsbyVRhGYpiMxmW",
  "key23": "5gZ7QGuhVUESpLoxeVLsdgPiCK8jPxg8fEXrtR137jcXZwi2NBDAo4FpGN5opBMrgh63BRYZABSasNr6GzS7oXVq",
  "key24": "5SJ7gjT99kDZuBncxqAD5dKVxRm9m2hF4JRQdyioYQmzMfhkbbLzEUB8xEfvzT7iz2g19dw7iTCHxnN6gZSVNAoH",
  "key25": "3HVb4JQcmFCbPoTSWv2ZCVXA3SXxXJQaTkDmRWcnztqhAxpgXUN4QN9aq5i2d5t5zbcbox9i3YbRK78hLdR9DTZ5",
  "key26": "4oHMqWkGP7Vv6nCRpWakVfuDVvxtDpLctVh9bG7RBN8jsiFhVg4BCnWqMJr1Kiq33Ts1NNfwtyJnLz1gjoDQT5rn",
  "key27": "3MTMByTVa2UyRtZFqQSK91nGDDKntw4NhDL7AHKLSJdmAMksv39LYBVsD5KnaJq5GYrrkdgcad1rYqHKaCtFQC21",
  "key28": "9zKgmi3TbscvnPgPYdtBSKM3XNJwJvFcfQ93PyNfjBQoMzupuFwtc7xj7PGNRoCbKf6FC2kY1FEQNVMsaARdUC4",
  "key29": "5CZFHVNijkrgRQSoRxmebh4vt4cs2FXThYpkNDn2BBZAQfN71Q88fn8ZK9Vgt2MgX6joknSMrk6Cq6iteckiyGR2",
  "key30": "4BjZpEttC6RnXV5VwD7eLgPHwm6UJ3Ntkm8mNDstJX9b7xnnaZCe4MYL4toJBinQdjztdzbBnZ2cXrNC4r1hwT4g",
  "key31": "3BQ8sMTegoNEDLkLxidGE2AZKvz2ED3sgKkyRMvYPMFzcxH7SE7E5hG82b3SJL6s5ei2wktU2gTFQYkGDkpXxBJK",
  "key32": "67QpBopu4PgSxTRQZ3hGfd3e5r5wu1cYqU897ZibYnBwo9SAyU52aJh4pxem336wtAGKxdsUJfEt8YtzbM3Z1zxj",
  "key33": "5qZAZsR4RSsW4oipGViTj3B1vw3KRoeFP4J2nhMYrQuuMEasuRP1Lyc5YkP6jUx5FfyzGMcQR8aTJLzcNfW75Vfc",
  "key34": "BYMkJWmoWayVKCpDnwDkE9PSxJmzasqPXnV9uVbHpQcnZ6aSveCKeM8f3863ot2d5yYUWFhHWtpKxfZPQtME9BW",
  "key35": "Cks9e6vHqcY4inWCEHggt2b7Msk5fVbT25HkLVWfpnLwx57hJwaALM6igU8LqFR5JVY8f2pWMUztib3PPuG5pdK",
  "key36": "54mudKTmEZ7qVW2RhhNTybgw36UJge5am1Ka54YyCQyPkEiBtXv5f1R9reyXZSWhM9cX35uaADR7U814o29Rvht8",
  "key37": "fkE6urUj8XewasBLnriNPAJa8qPiJnvmdpT4FKSgrEtCoEK8Ya3q5FwDaJtkfxg2kE2LhwEan5aTTWuUGjkXykS",
  "key38": "64PL22dZaxYX9bpZJ52YA1MbeacZ1HrcTyA4bZN2ecLWDgBfAkaWg2HAEXLCVWoirrGcBsmgruyyHE8QAhc5dH69",
  "key39": "2FEHdPDS3G6LctJ3RpsGKizGadH5krALuvZEDyKntfGzTT7oeKcRJoF898vngh2pBmSBkXyktGyvdzm2iFrUXpWp",
  "key40": "4TKpfm6JW6YFRu1Z5YD7ydbzxJsuXtPw6dn6KypBQnGcLcAWos7syjv46LzQgZa3e8sWc8LRoAgZ6oPTGyF1s6FB",
  "key41": "4zDHsg2gZjWj5bkNAT4t9ZWWDhJXiFau7MGAY6yLNNiktmjWqtULPML5GMjpLtSRNYKtm9pV7tWCx6x6FLiLy6W4",
  "key42": "63LnbMUdSBQv1RhYkmztgn5KAAmXApJqvNNMfJBqe6MgXHyij97Wt3icEUpDUiMyDj6D75NJokA18Batj73Q2SJo",
  "key43": "2uCw6FNTFJKSbCEtsf7SAnaspgLYdvSB6eqid6kzhJ2kc3Fyfz4gNRf7aW6yfBfuNQPtN6PaU6b3cb7GwthBrxkx",
  "key44": "5xx7s8MFbf936ekukuNdWqZFZBAxqWerXZPQhdfHeT8pD6E7kj9Sa7AAS6E9HDPkxGEKWDZJeRsyCmQu7KqWkoRF",
  "key45": "5wDpkG5D5tfdsne7DngdJQQyfUL4YcdPsZp6MY7Ljk1XtWPt2gYjj79fawDbKzyz8yfE2hYEcmC2d1QQ4hFK3oeh",
  "key46": "5fcdtkug5dPcD7HKbVqEq5GqKZ4C2nAXhhsSi89VH1zbbZ6qxiA7UXVATt76bVSjWVGDH8XpvUaPieN4qGmCyyRj",
  "key47": "22EWvETyqxqvxMPLg22ZUaZBiVdrzkf4FhqJLkgiHDguj7F5qxwJvMSc6pCdQE9Cn4mRgCtpfprK74v6gLJPYeQM"
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
