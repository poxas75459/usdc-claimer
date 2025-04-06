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
    "2VVENsVXZ6qpRcMEgnih5EBnwVYFmuDWiXA8T4miiDS3T7h8Kc97wnFRPBzJzyuUrPXbZF96pkaK19onXgAxRiQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSzBvDqHr8aG9dD5KsZjFe5KC3AfhSiiH9gwGwK4fYHAhYodAMbSMda8ZQsrAxmVUt9W2eTi1SjHCCHmYwv7Wq8",
  "key1": "4Pmca33fqhoDLu11FZ2Ep7SBTJQ23kvxmK89Geavi9AZUgNEEs2GuXzoxQqyEeABCKgE76y3C2NHtnTVh5P92K8z",
  "key2": "PBpbKCGJ4KZuLGqp8NsSVZ5Wf51Ppx5fvWKNxsZvZmH3F4VHEjCcMLb6kiy3iws9FqUb13sLPz3hwojmTkQozhF",
  "key3": "3fF1ECzXKMrdHv15sE1Lyk8jY6pb8xiTLqqrQv7rZtM1HRNmpJhmRK8pMCfAG5nURQnq9skRa2qdhbXjwoZjhkxt",
  "key4": "4BiE76U2Ut2wMNQVuG2K6sc1GJJvFXyYv63PeawUSXhfjA5MkxA6fvGT8RXX2n2Y3K6ymY63qpoBdvNTPeuzGTU4",
  "key5": "2p8KTx3XcDMbf3Q9zTKHsEpZTfF16UrKRJSiK2BQfnWVgaC1hKiEKBS9rNCdv6be9KZfGCvfBwxPxGqvPEz2opXa",
  "key6": "5DP1v4eN3hwAjfAFqdtrv8FwzuoGuyjCHpc4nrT61bFTmqRRrDQ9hKjZpLgZ7SRNECdMv1JYidNuDYuSmkkHqKXX",
  "key7": "4gcD7DDHDeakWxpMr2cVZ9ncGCswmPKHvKMyJJKwgMcAUUGu1o2VRShxvK3JBU3bEdmckWaeWsKFZeZKXAzukTuQ",
  "key8": "4Nxf7xKS5LkJafAG18SZB3G47PuHzNiS1hmxmWLhiSz2hZRohnBHjNTXtF52yTTLqzSmtKTRGCyy7diz2bEpXt4p",
  "key9": "5dqZWancgHcQPAZzzqvrfyGd8Nk5agdEPkYY33G2iY4A1dWhzqbdGKJ4rW1dQ8kwy9uN25Qf3aX8bxrBnS9GtaJn",
  "key10": "2ay39ZwayAjQL3sQxnxXpJR5qbJz5cPnWNJCJJHt1bN2NTmZwuvQDeJHe8EYvaU7qWxzYx1ZXankJPQgpUQzv3qR",
  "key11": "3rzHarXpz5RM8A11bFff54pRCLcDM3FDy84h93crykc3Driq3rs3ALcvRQ7keKet29LdYvXV9kucc239ftKsvbJP",
  "key12": "RwgQWVjgBFEcUiYdUsRHGJQ1H6Vtsby7PLTaJc5F54x9jY6eqhVZhLqbAV28zxxCbZEgts6Rjao67A458VE9q6C",
  "key13": "k1jjQfDJEi7Lqs6jp7HeWBwBQNNM2978z5GMtSMzhrq7GmBq9dBAXLQcV5JQNLED8GZSKZRRCLBJHgneuM8EsJp",
  "key14": "1kDxcJwD1EpXyPoY86Sa6zsPB23NyqrBvCMVYwgzR6wAHjRwbV8X9VDQbkkxcaEeRe2NhujTiXo6i7vUG5Xj85S",
  "key15": "4K1QAfjEe7aNuEQGNnbKDXJr8rEejF7iaAGpDRDX2S1X3dN4mLmF6Gpfss4emc9rVaPdA89PV5VN2JTK2WoJFHGp",
  "key16": "4FyjP5sKy9PbTYFmtyLRk6NViwKWebrmA6Zv8xMP8d85STYqDAFcRGDt9sTKxAAzrM8m6x8rSp9PNQgPMVMqezAj",
  "key17": "586bnVkU75bZUjR3q3cGChh1N91fwvBCS7gBxafQHdr6gUeGk8oyFhtGUgubjTjPpshUvpsgH2TQ1aEkCyJm3AJy",
  "key18": "4P3trXM5sidicCJ6xMVEskQeM9jjCMsSeJgBqRxcDEEc5CnqgfkgKkpr2cLYWzHFznAc9HAMKrWyk2yWX17o1vaY",
  "key19": "AWLedFopmcJnnF4mfgnLxpbj4zfa1vSobjjy66BmHSJ8eLsG7GEgdFBephtGfp2v7SbvKstNdNpkiQaBdUdvTSy",
  "key20": "21nunXTY4w7HgrFXBguQ7Y6cyF4T9isb5XEeaqZ3x8EdbaSha97Ew8EunuQDsQtR4MggkQUgn3UC6U336BMYiHHo",
  "key21": "5R8cy8HW9N1CwnTfJUKfrxEhCutXqhrhVASKP1kd6rS6QJHdwFjYnnvkZVuRUCLkMCAZm9peWunxTRD69uTYpXMj",
  "key22": "3HUKqTaPSVbPDTEVLu9nBRABWDKqn3g9EcQc9FYdKzfubwRcXJL9WhAH3QkGrLrr8b89HUkuU6xEJrVbAHY5sjJ7",
  "key23": "WDjUKRBgwLTFUh9ZCgF7ruSHxZQjQSXbNdapeKBispyJ1mqCqapLGroWZJjEvNFeiuJFhxCgNCZg2CGktzeD2o1",
  "key24": "dydwiCsFfBdgRNfGjVtzWouJ6rxmGpiY25DJyG4HhvBvfhYbADsTh3BarvVX1Yn9vXa4Nj7rykypgcWV3ncpZ7P",
  "key25": "2WQBfVDwTgj5GXnGcfEEodYdasXCSdFfpWub77GbLbxiSLhrYW8MKJwzRDRpNbR6nHTcvPzTQ4zqQBQyniCztDPq",
  "key26": "2JGTfr6N7RXEhBHQ9d1XCG3bTXQpDWQFyp8W8jcF4KkbeRyYzfHbKFATz9qyQKqp7rAdUo81pCUz8YYcRMg5tost",
  "key27": "2EzWX8CjSZdq3AE3LfJa6SZTszCWBHsBirGBzhGQ94T6vadnJURbYRUEdM3xKD7tabc7aFBnG8DCRWYPQuVdAKZW",
  "key28": "SCNa1V7s7wqjYfrUu1EZAcF4tStVpizLntSaKmYnYSkvFjfeYsxic6fnXBeFw6UHaMv8Vw6VFjXg29LhmwWhQyS",
  "key29": "FnQqN3UDZJWcLPyMPrmjFpyMbtGtM9uMT5cvJsoutehW2MMFzj8v3kr9Sji6QMtTPCmh8C3FhsBqjWJsaXaAJSr",
  "key30": "3NBn3n7DdfVpvPJTiMxdB7LHYSNmKJHWkxgQAGDVokVJSn4wGBq6wravU1GtiH7XmX8UEoNJWZHx5QqPjjzaAEGV",
  "key31": "3ZViaPVC77yHsb3ebywabm7Y7pLQXviXLfVR5Eh37RtefZnu8kSHEigd1hNY9MnQyjLcg3dpbZMqcniB4wb83aJe",
  "key32": "r8hEvYu58A8oAK8X3biR7qD3234nyJJCZ2QieeEEA6ZqS2p5V6rjS1thGDiaGFvw2wo58GF1ktZdLTdjM8Lgfny",
  "key33": "EqD4g6meKkgoFBwyrWwawXTELtd7MjHDiVmwWR1tJy2XAVQAQPmVJj3vuiDATw9KxD8jW4ygzUHgxMdPtxispcJ",
  "key34": "4M2Vo7Kkvuz4JLaA3n97WixwB9RKzuRvYd41vw44DZ9sSHk72LcLXdyffEaA214FkkUVDoMpiamLjZpAGeTTpokF",
  "key35": "5indCrBybsbbwx7AP7Y73or35ncRRFPoVoV4Rg7f34jd8jiw911V9pnwJtBqB99NTvdp2ZsWVwUSwJJRNU5A96S3",
  "key36": "2GvcGKKUgr4aLXvW84dLunRxhSmipL7ydSei9kMAxq8UF6N9x8pSwd9YiNTcbexxpMLTUSavwmjgUs4LqaBtwdK8",
  "key37": "275LpUjmXKCTe5mRXNqBckrAHKuYkUzrvwBx3oCdHirABQGCHJxeKShdaHqiyc5u24AoNsHwsWCbPwyzx2AdMjhC",
  "key38": "4tZx82ebG4X5nc7LmZvMNNYuMcFQQ5P4hY1kW6bQSJb9k9USX4iaCcrN89ViTaqEnYfQ6sB5YuB86G2xeSH7FbRc",
  "key39": "61n3oQxwjU1QPBaJJPzAT3AFzJRVX8uSe1AJLQj3JhtqnYDGA2LG7KZbZL9E2CytKyhG53mXvJPqVtjFbmzP12bW",
  "key40": "3CiiCiNyB4pNGuzFacWDV2ra2vdWAcv2WaQ6ZojKJ97UeYHix4MJJc12gdBMGJPEtGS69G66bCDJD7FRad4MZ9u8",
  "key41": "3t8MF42U7JbeCsYGDBooPqGycnkMndJMQBXXgtLEsDx1r2hctkFVZ1k8CbPoXofyPUWzfBV4nX5EHzfAiVHNDewh",
  "key42": "2iNeQ1aEJCNioFwyd9R8X2HZovBHKbWnzzsT1PxJ2EhiL8ieJ4fnn9LKHnUDhRgrqxQMtLZvvNYVECAx1yYe7uL5",
  "key43": "25jZhdqbgh6qr3SXPiMiwQcwZyYR8o45B5CNHcALepA7Maj8iRZrbEx9FJzbPbG8d1cKk2gANXPdPrdJyPpVTpEN",
  "key44": "o19QfRgMwas9NgV5vhv5oyGYoFxLHZ3k8y4gknKth3CabrmZkePb7VkvcADrjJFWEX7W4hCkXroH2vv7YJHqsEG",
  "key45": "4kjQ58GSsHguSi5bacYSLGdv1KLbVWYvLPs6TwuzrxMC3Crk2s2dKgQbcddJJJ6cEcwoeKnfLFYF9gxmu2T8ioSL",
  "key46": "3nEsLANZcKEwXP7Xj5KZAp5rcenNe2nX5zcjxq6mUCjJDoXfPd2R4vW2bpauyJWbRF8gokW57S9KcUobt3aoPzZF",
  "key47": "4F68bpVWZZBQtuAaiUfiKbPJJnM3zNDpRbMvH7LxkpJ6Dc1LpimwbanY3DJd7P8kSntzWFKVzXE2S3bSe751reed",
  "key48": "4dp9zzbfYdjrvWJYCJArPFYuvsjDNj5LeGEtjhDKLWbstXTTf3MiBXPB5nGCEHxP4Fo7HvK2D4gm4eCFvG4gqHXG",
  "key49": "5K7qjFVYgE1MPJrnViLdMiRYs4Y6zJj4zyrKHZomYA3ZAP6Rfrkufa5qmEwggsmGskUPSfsCNokS69qGwHuQLy4s"
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
