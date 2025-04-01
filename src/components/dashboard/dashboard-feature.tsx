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
    "U2XabXaCbvMmjdj8ynRWohQ1qjX93yRzUfEibtUBSPqGgLPg9Bo4CC7ykpYS3aU6iWBY4345zGtBciR8PEkae8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ud9861ddDMbDBworSggAtCBCoLd127pRXL1xLdMobtgQBLFm1WURiarcGd3q2r5RhxRDLECUQVMZdYN6qGPsfCK",
  "key1": "5ZqJrZ7E6AFn9gSjrtk8mu6aavZxGbcDCp5sYwVJdKUEeDAB4tuakqebLWABMoosA247p6Zm51TkoyR3ZErenydG",
  "key2": "3HFCro68GdyJYzTkhf7uYuj7PByfEpus18XZUNSYB4bFWiaW9QJcRWj4ZLFTN91LqNsbzQvL2ydfDsFhPFGQxXgu",
  "key3": "46jWLSxhny5ptasUAPvqBjCAJrLy2wv2thUVkHTPTuxhfPotNJhZdRxYxueJn4Aj1GS4Ssqv9pjNvANpXzSAXKVs",
  "key4": "3qaneYaZXNbsncd48RbryW9vvKVq2JdLE2mxJygkbsDVntm9gGXi2hbRt7i3Lmi9YojbEEMxpuc96UYfJANb6gzd",
  "key5": "3hL5iqVDfQzLAXnMmx1QS4fPpxdhiVvXpFb9dsdatyu5v9XXuKbKUCKWpek8RPbgNAyrWydkN4QxkQv2657W6hMV",
  "key6": "5eQFPKTw1DB6AKycuHKQ5orZ1xi4y3RLqEetHkpHXWt8x2ZGWhEU5X6BbqgYWArwDgm3cqktQPEYvuHRPPWJ6Csr",
  "key7": "2PbcNSwhXvrAbj791PHQSYZEY6nwk4fTgbFWLvvcXYJ7Hgo4YQhkJThh9pJdkbRXwNXdpFkhecxzffXr7RzERHEq",
  "key8": "bBLwU9oUX2tN1dKoXHwjDBdAq18Gv7Gx7QFD5naRYHt2JCf4sTbNkWvPiZqL96rBn15b9JZqKAoAnM9oq5JUwTt",
  "key9": "5bNWkYJDz8SYSDZDxSeBoaYoeLBB25GGY26int97QH2H5mKbVbViruAmBaoC3GKKPeC69unW1V48p6QBYusccyof",
  "key10": "sjLJFWQ1zPAahLkv6Na43gXA7vpDn1PEjYg3hYGU45F9Fiyz3PVuqEgdqxgbkFVisi9ujMyWeoF6tkhnFTAq8CL",
  "key11": "2d4GuJVK1KxsQkYDumSqqaQF6oywfAE2wUh8qJ2GCERXSH9iGApW8mLi7QrSh5fVWc716QTQmxYH8zwrL2DbDZCi",
  "key12": "4SKuXaJ4Yvpie4sTGwDLnazNjkTnF5Qq9z3Y8oRYbTahBAcBg3c73tC4g1kHaEZraXj3RcmzaANVxB5tFJPY91nN",
  "key13": "2CBNKw7QyqnXpaFkmPWcTKD9SR5NUmfwREFS1gfbsCAKK5QB54NKPBAjizrtLBTjcZ2Wgdg1gb6w5mT8c9n1bdnN",
  "key14": "3idL9wsts7F2JW5NzYzfUNduR4E2b42Bxmm18hgDgunQaacMtJfxPxpLMR5DSUus8XXEkRXz44WwjeiLAhdr7twD",
  "key15": "W4hwabAKodxGhnKf4BpqBD4PjTmNt6ZtjZPmDZxMa1kcUPMzzyFirqBvJyb2huxPc3g9i2Xne4kkhRvJgEPcFps",
  "key16": "5YbNTh3T47F3SAXRkCP6YWDfpnPnnTZeveqcSrKfJsN3k3iY4wzeiqR2mK5bC65Jp98iukYGSymBNWx4raEgbQwj",
  "key17": "67DnH6eYezzbCUhnWxXqunPK1dDKmAwKBLGPCP2arc3sG8rgb78GgLMKtScJM5tQWBQ4k2R7yFVP7VceYEkfpP6Y",
  "key18": "46mRP3VLTLP8vmYLMJ7E21NfdXc6HowNJ86pCgZNsvvnGwgEnhAkCEbE4YLpQLuyBVR1zaDCdPHoevB7qNv5VJAS",
  "key19": "ywGpFKThd2FgLf1eEE4LuAWBAaGBz6RRRFrxJzCTAXHAXSKoefY9NvEkaLVt7RQisQk1KVbN2Jn2gRhpRABsVd6",
  "key20": "3cqK8vvQsg2nb4BfKMeBQSodrFVZUjFECYKjXPE4Np2bZWBWBPXoPy4jFgQtsBHCk8kS3yYXrJWeuHqm8bzCjWki",
  "key21": "KVgj4zxEMp23bL98B5fmca62M2SprnaW56UBGNu3r37BQkbRgj4VrhEhRpZf4j65XyrxkopQwNELdznzEidTD1k",
  "key22": "5UYFVHir918Vea1xw6u9GZgXEbTUNT6h1XMuL41GS8RpXvjPnNrq7AVczagpAP93y5w156Nce4dFjyfituYqjAeA",
  "key23": "4UuN5mdv8NEkrV9beAtzcCeXjirhgoyihNC2dyHN6MymYCKqHBR3YZGXnpg6SMnMzP9QUHRyge1iTZPiThzuAuAV",
  "key24": "3MLygzN7gqags4Bj2h8oSAxkksuWuLDhwQ2YKj1GMA5G1kJx7K8pdf4VqD1cP45pCXa5PMHgxT19fnkzUzrzoU9b",
  "key25": "4izJeGtNmDfNW7rCoTmHeFtJV8VdxiYDY4Zn27FgEBrVBwzg3ZCMt9oNm4mmueZpgitTdUY25G2qxSCQG1xg7Fcj",
  "key26": "28iuonSWuPgQoqH8HBAZJUPgk8V9aJwdemHcQum8e4aiikZadf53YhH893RbdJAGVEJF4pcGs2WeZsES9KdcyE4i",
  "key27": "4RbskStVD6YRLFHhuay2fo9rGFQc7JXaUx17JbKNMbgtf36FE2eAQusPbvfVpYNyb3D6WSiCe1xWuwmpySTTBhMA",
  "key28": "hcYA6KxhU4kRdEsqsDMX3133oVL83g876cNWXDD5disjqUFB3RcMX326buK5yY4XuQ9NkaN1dsoNwdeHbsE4UjM",
  "key29": "3FzpuHF5xCjP6TRgSi3HL6zcQoj2hs5qnnC4KAVaEsYJJ57N3mk5BBQcq19VTSDrGF7phsii5QFPmGo3now4BPC6",
  "key30": "53UNyKMpkkDbkQRREWWL7xJ86oKpiLUWruKzyCCJMJKRFamuVFm6vypzxVbRyqMHE8126niUmqFfjgtY6HYGXh9g",
  "key31": "C7uonkfG8M79vYjKv8pG49usMR34z9pwDx8hArdJNfjBxBnU3mzf2v2Fv56gMTiuALGDLccxzq59h8Qq8bpHHHu",
  "key32": "fZbcA2CysRbttkbNkke1RYjGjFH7HASvpc8zyqewpjVS7EKVQRTA3EJCRrRLcsVRfd3UFCYFEwWAMsN5uTLqmZ7",
  "key33": "56n65UurrZLsacUVwYinci5W3rrnCscQ1een7n3BgdQdUiiqESPW1BCjPwmhscviDm3S1FVNF8DzY13mZKyUfrSD",
  "key34": "5ghCthc6rNmh3mAp6Gz5Tjj77AoBNEANbzgwT2tBzDVyRw6yXhHDEPSsaXvdF3uFMse6Wd6ypc64BJqc861ANbWu",
  "key35": "4a9EscCcD6zD9L6FQbFhWMgVoe6aRw1DG9UBWxwYSrXv6Nnw2Wz681wZ5WZQyHNytbb6D6QkrzbrcPdAyo9mAE2J",
  "key36": "43d965cYbib5eSRGDLoe38JFeNUf58ggDwEquge8RhcNhkLEqfKga877SiKMpRLWGhWgzem3FaTagqM5dXpSwXPk"
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
