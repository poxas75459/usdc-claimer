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
    "4Me5pWFjAWWwtAhg8T9EmsMnPKVwniBFYsdjB98CHzY8QwWWHYuk359z1SaC2fQREucrraN628Vrz9T8iE9aXRkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e53CrCftnSNHgDkJTqazuvGZP8dFKCHbCTacSnGMVr8c9Km7k81rFXErdiiAxt9vK8v95vkWTdRq9Aij3uQZ8Mq",
  "key1": "5ro7N6MefeKhzjG1pXjVd3cmutn7C8K9xpNN6rorm8gMdgUh4r1x9bBRwraK2TkCw3g1wGQz69VLw7uDw4HV6bQm",
  "key2": "TnwD77XXfXzBNQfgpFfH3VMwiRNndps4KEjZYBRqnLJUAesgPS8ymC2EVNUS6BQ35negzhW11vkGsXDQDNTaMr4",
  "key3": "4sKaahhpdXPp64fcEnyfzCTq9gdHW8eitjNRy2wbQg9nmmXiox1EgECsXC4XzuqJHjrK7rqcAFW2Kx9L2YsgMGg4",
  "key4": "61GVWqXKp1mtsaVSkzsVPLqu5QnYzkW2uBikVGkL1cjBFvSnAPS6PZwJgCiaLDJr1SfSZHQXQVKisGan1gU339S5",
  "key5": "4V2tEkA7ZHZ6VWsGBKsteKV13gzB1SZZgALE4c5gkJmDRgTibnjTtrniYB2nc8AAoSHrCKznuruN6hbswFrkTcCj",
  "key6": "34jbNYbohjqzbiqoJB7TGgdwBfGGKhUhHoY9MCXL1R5f2ge32StWtq9vmAAV2YhWXC3iVfdEiZTKQ5i7mgK6qqGt",
  "key7": "5S7kYH3zxBxDS3CcvySanxM5BFLKAcaN9yDXL3gYRUCXEiugQeoKGgsMusyPWk2CHJuGDDjCAQtsdXPnUMX62tCS",
  "key8": "pMQ9qdwszTfyZwKvrELaQg1m4gB5GQoamWxLTdVFrsmfgtUwwnZdM3tv5aqMqmr5K2kE517VwdvujiV9HjNPZPb",
  "key9": "Zedu91BB6QDnLe7WLJ71t7buSJGSqVuNDZFsJNGcrZSY6Szj8xRX4fFqim8cPazy2LXSWagRrn2MKEGCh2zbP47",
  "key10": "fTc32JCLL293nkS86oNYi5YZF91H2XDANHW7GXQKu56nKYfKbsQaTpBXagJjMAgzNBEYJdcVVHEXMF7m8RT7qV4",
  "key11": "2MDMajk9V7UVeTuHbmiBFBaDRVyANCPrubjSCdRHJjzB88qwTYRGV7LHaoyNweqKPEwY4KBweHpbxU4XZNQURkCc",
  "key12": "5WJ36vNmuvancY42zJmoB4DHiTVaHKmskpFnddUGmVFt7t5scRBC1rjfjRELwJ2zPankaqqJFPbXobzY6D3MbV7D",
  "key13": "4Mm6Ah4jj87bNNRXq2cyQhFx1RVWisjfqXsW9Y7WNihiBYA2tXYNXNd2YMiBZ6SXugE16m2kDe1uxTNTdFBX58vE",
  "key14": "4bB25TNrcvbr3i8v9MvV8NeCayg7LSvHZQxTcCDtsRSKEGpJEe5u1FB7Nn6S71gRwii9bZstLc7AVnFaSCHAoBUc",
  "key15": "59CQ28Zzc3vE26bLxjx7QZ24tjb8FDMY2kFR6muGUfrKvkEhPp9GrRmMjPqM2sWjvHP1g7MdJnV1Szdyiw939n3d",
  "key16": "4gVQQZ6DnGdrkZnVY1NjJm6CZcFc2xeevqnw3KSNrNDtky62nECDxrrGDKb8t4byNTEz61oHXN13kZgnoQik37Z8",
  "key17": "48uqLHyST8PguKM3Et8eYXjx6vFrqLxDKyGPCC5HbrrnATdx2vT3kUKLdk2J67gLnA189pqeNFsde2vww5i2a2Yd",
  "key18": "4dGu3oNbJNHQU3ASSezyZdR2ie3VBiCyZATiXg1t1THKTXLnSWF4uVxE9GjWPdC2kA983s6Mnww87BMTYpZGjqmm",
  "key19": "4hseFoapT1NY9P6pFsW828sCjQr7VYrqtmzE5SC4TnkyyupjnaEwRiTMtTZVXBKbKrSy5Fgkwko4ndQu4r8z9N1R",
  "key20": "369Gv9T877qeMj26L5cSd2ojJHXrtTojVKNMw7yYJFqzYmR5B5TXy8JsJKghEFZGrCcVGTRsWC2Fb8Pwmg4RcsiT",
  "key21": "9oBh2J4vUc6L59ebLSu4zResd6phFQ9LJR1ao5vpLvoibE7dYCroLNmuoSnwML4kTyVa9G1RsMLHxXhTjiBXfUd",
  "key22": "2EzgRLjjfoQd1W6mSJPizCfnTuyMDNdcYpUD5Bv3gSgL5LRzDt57QLZMfw3uxB32uJADBEHLrwe55Kh3EBWu7uLS",
  "key23": "4xVRA3bFLpL5rSqkspku1JvvhYY8K8JsZCR7CyMcKYRD9jGSPaZ9G55gXqG416dMKiGE9GDn3WLGHVLJHWqJw2a6",
  "key24": "4BZ3XJ5SLK9HLfxkgRaeNt4GqSNvbdXDwwE2fPdDVPp7EgvRw3rZoSj28R4CjTMMgrjbzhThGivamnbX3cAS2mVG",
  "key25": "5Xoknrf7nZBqypMAoVzT9nb52ki2bhV2vdedzGQcDhZWK6VGnKd2t5LDQEJxknBfDwG9fvTGs5NvMcZ5fbBNXmmL",
  "key26": "5ubCCT6ZEVNkMQWbE6K6cH7EatfKj1QECnhuT2uBHYxAF1R7ECfcukz4zB4u4YDgY6CerfqPtiYjmA1PoHsfuVbn",
  "key27": "4F8MMeA6McXkR8usWxuZhtDVXGTbMcNY5dpq83WBen7xhdJ8HdnrgtWnNiTipq8NfoprDKJXcSVBJgGHZ2kcXmMH",
  "key28": "3PJTWHKBVfTgYnwwauHqZuumv8PBfMAoG6c184nnCPaefowFgM8kGzE3ZEsF5ZHNeP2JDZWy3pZFF4XwtGCsKXGn",
  "key29": "2MRBHy4AvdrEAKiZJBkA2CzLCMDwEUUp9PgmXNSB7L3yXtm5yUDDrKkCarNJe1LGjGjyvmAqEGxCqFHpky8DytKJ",
  "key30": "5f4JVPh7AojuykL2b4WE9Pm4WmizW3zLzNfUkqXk3B78aaeQ2w6nXn1SzqdSQd1HDPSAqBrzAuq6FuMPwzZNTyhL",
  "key31": "2VT6b8Gi6X6SdjUJ3YNKcaZReiR6iZSrcA59g3DHbxHoV4MgBfG4EnmecMhbQmcpsKgSyVQc3L8MMVsWVC8hCZRs",
  "key32": "64FN7Mn49jXxd832gLTAGGtmrC62uvXfqdb6N3xo9zbp4yBRdUyeLD2RR9nrY9kvtVeDk2sceiTQe1Y5UJxbsrrn",
  "key33": "57XAdv6GkoFMq4V5shisDxMdvzyDTALkTquYUJEfmTzqyi6GuMtBY6s8t7XjauzNKJp9DkmvNWK6fdFuhEEbfXeZ",
  "key34": "35DHT8M27WdYCppT8nfn9bv6PUFGt3pcZh5UZSdFeiZNiZVUd5sExbp3bPZF2KXkr2C87iue9KrQqw8A2Y6iMh1n",
  "key35": "2Pz4PxXF6iku2wU5FCjPG46qEr5DpoWA9dk8Bn4fcMkHDC6M76iGjk7dzUKTZe1pLED1eykEGUz9yEmRHkLPZFga",
  "key36": "2kgGhHdtNQVWDw4RP1oFNGZcuGRTthpHkNTGzWCQHDfCrpu44r7jwPDjYp6FBL46o1oxp2nCxmopitWaCpcv35eP",
  "key37": "2LfVwkVF4Kf5EozHcCwT7W1EMzrPSXTmQYxrWfrZS4Zg4RW447zepeP6o3iycut7bpWF7BoeNsoF3ffyDQdRdFsV",
  "key38": "Zt3kn1Kn9TdcSAjiif7gQeSqJ8u7othhibMCtUK7mSByTEuWLAyd6kvez47VCuHfULwkKzK5L2bTMoyBLuepXW6",
  "key39": "21CXjsLJL2qmZycqfpg6RWhSo15fJCRYFyjkki3As9XeWD6RMvQw5E3A6QwhJcvPXvkJVGFtjgdsp2Kuq7kybucH",
  "key40": "593EF8yeGADtogKBngtUoT9RHvSuppbUCKz4xT7JUqvegPKJE5aDxB3gxrSyy1r7ETapHgf8kSX5bDwSsBgtTTNQ",
  "key41": "gEXqEK4oB9Mp6nTqtseCue4LsjBnEDPyDhdWRfT4psMNCDscQHhhEY22udfzBJJnwsm4r22r9oSrfL7HGthEsHB",
  "key42": "53b6H1z1uADhCnbEeFTEKStxpasygofVUg2XbtaWvHi89nqhTMR5cS6iQbDTbQrVmtsGvbigWEsoaMiseMfoV53p",
  "key43": "5NfspdwpG66tZWLasN8bJNRLUVTrhK9AJoqs5kUYDsrWmdd2Sm8SCBUPPULjwzprmeYsJp9PhtpPUJzzghfEQhVu",
  "key44": "uhH9sAusQWsdCjHmB8ByMeaLEVxPcp8yjhQM2R2goGsxKJn5kstyiMb13KpFQ9aUG4Pzko41CYBcYhF4HC5bDp7",
  "key45": "5keqzwGzEMjvz4iZWKGN87DivAm6sow9pGCkjAtXfeq9Q1HY6xTqni2noVu4wyciXNDR97mjH9a7EFqzfysKn9oj",
  "key46": "3tRZKdPLUoP24bpsXDxJ3U23ZKgcgfGb7tr7rjnb4ccsg3M7JsipCS5jHxumgW4XS2rGFmtmMmEwGmXyTPFsH2Lo"
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
