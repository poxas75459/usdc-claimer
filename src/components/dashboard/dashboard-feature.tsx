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
    "3K4MY58Jx3X8S9Wq6amhx25CxRWDBf6sf8CEnSTrA9bhRZRJmESiinVczZ2YdfBLY2nRjwgCbgVqjGtmqfofP7Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSXUA736EDBD5ZVivPZDKpzTfQSTnMkWfamBB4FkbaDRJ6627TGA2vEvMEctXmJDqCDZbfHpdVUDZpUUTWpM7PL",
  "key1": "3e6of1tN918e79nZzenHUABE3FyoeybQ1ngFAsdxbQAyPwLQyeTrDq36nUcXGuZUF5xS32A61Ymqa5ayFsnNpJz6",
  "key2": "268Lo2ME2t2UQCRFxRAkmq9DV7siLgxLgEay4nbCgFKoU1hBAYVz3z3hyrmD1WFz4ufA247qYGHxhgrQWxVspXMQ",
  "key3": "3XirdAtaUkXp3KjmGTESETSATFsfQjHyWEVioWFhchpg3wpYTfgzGaarBDh8uFrhdJRGvcPC9NALc1YCFYVqEseV",
  "key4": "3jx7grNACpEc1vxCm5vEUPz6cwPBAizEYCNuS2YUAvazts5UHYckzTDdoR2uqtGf6zrDG53yWD54wjg2D9V9jxDr",
  "key5": "4gbuQiciWi5q3s7E3zT1fHk19qqKS3LnSSntcK2fySgkJ88vH3Eh5wr2Prr2xXAQHa5LcWsUDGP631y1jhdB1fQm",
  "key6": "5B8g5YBfAeUDffiQezpTYTTMefzvJMdmGex6SDibtkon75UznpCPvwokGPDVDEvZC4TKJBrFdZPQDFoBX1jX5LxG",
  "key7": "4tPdutjPyis4Nj1wD433ZABmLaFkMayHFJ1MaphEo3eyLCjiJ6GSr3Lan4aD1if4bdYPNshzi79Vt1UTbDXBLocv",
  "key8": "AWW1YJjUHubg68jjvH7fZ1kWPQGXQtx794FLeSyyNzxTggNvkW7ZHZyhwGqTCU5BMYwuSw3mCEHgFMn1jonANs4",
  "key9": "4KeWa24gDiHFEKSZRqJw663ZprMVXgDatiYzYpyqvGkaYvgeJSJD2sLWnDne3jvo9pmL97VH2nEFYhHLE67zXVSU",
  "key10": "3ATGCC6wKxUHRpczF7siSYafEWtU41MJGbNPRPp6zb7AiyQMZh8Z6Ga6oC356DyA2uMRjfSjaJ64xtgHixpH938E",
  "key11": "48kVNN4DQCSdWh1Ha4hMAUWQn4qMqF8H3DstPoCUCmembnLVzjtQSPSUCg2ScaChHZ7zQESAEegJ2vXx8CBTNSBv",
  "key12": "2wWRarnBYvTtA1THkcCvZJg95cMypCd8zExNrAgJVJqKMF2YB2idrcib7xZyZ9UbeWeGrb98gJYxs8wmC7DCEjB4",
  "key13": "4MscxPyYMT16fGxBcBbdpZrkCLRMzHTmdV5AvZA9GUP3eZbnJpe66ZheCGgZh2kQ28TjzSobTB51DbKP6nSNJcdP",
  "key14": "5CyLiCiP1LcYdMxt7iC54az61Dh2YQ2vse2gRNWGXYDEJFGyve49U7eMgb8iSVn2qNEcvashEcCoairghDCScjwL",
  "key15": "3iTnt2UBrLCt5xh55pcqpf6PAvGPBn7ZDELACWb2dhbW5WyAkuxZJuCchP5ZicjWq7vDhN7rFBSGLb7fDKp8Qxzv",
  "key16": "2axz45rZLdFfGGFJkGvGTjgCKdKoXusUcyq6sDNGpiF77w9SzKbYdToe3e3G92qMRmA59pF88JTatSY3csteeWJE",
  "key17": "ckMvhnCTW4HuQ3BEAkLeAbDDw3L85vv3xTeVTEq8yWxDHgXhAqtDT9dkv8Jc3BmPTwjuJemDSakfqQocrfNVGXp",
  "key18": "z3a22GPq3AKRpuCEvZC6eEJxUt7VTh4av7Y3kMkpknxYX9fC8YqdJ7RKKfNYozjQcdgZ3wnP58t83g7xwQ7fMKJ",
  "key19": "3mSEhXR8vWadpzc43rnrTVWT6MrLE1ZrNx4K4aRhToMSxPnSvjA54khT1NsuyAUB1Gv4wA3x2fNMo5qg8x6gGwZr",
  "key20": "4aZHofCN46mkCphAprqxSixGzsVH7ZUsAvyDb4BXgr698LmMbn2JSLEfdjJFiz7SMeEfUtxx82gWmmFL7PQCseHA",
  "key21": "127UJeTtFV84bSyM5V69EuuuFxyxmVzJLtRXBDNNEH8AiuuUYgeNDmAbTzY5cEcwSGgv89nWc9ZtrUa5WfMAM8uC",
  "key22": "5WnzWhcDFDqobBdFG5hGAXE73tkFuAKEnYcZgMqJ32oNy7qae1je4zaPQs25w325r1793RGxuDUeVi75UWxGPskd",
  "key23": "TuaygW42tmavPqqkegr5oFG11HkLsk6EkEw9uUGQa62ueac5yRC4RrZe9uraLjytwz7mXF2p3unYP17at4ArpN5",
  "key24": "37iX5dQo2YuuvGj16vCoGTuLP3fGU5s8naoKEKiBdjBRhRGe1rMVor9iiv3HGcZMcUphNTZbb6nMJWXAKydA6Sc3",
  "key25": "43Ds2XvQd1gNwHjp8VnrKEU1XAJ9VAMWpNrTS4Cdp2PWZ9PYJBdEVrFmEMwtrzknRPTHVH4zhQfh4aKfeMxF1WFq",
  "key26": "5m154444NXVwE439Fi6Hkuuvnt3zEFntKFcHcivz4xaD8nSBaoc97GLunKhvQFP2hmunfk1tX52sgyAvdvmENew6",
  "key27": "4m6boMbncjHc8XGU3PDntHiTcDXJdMrHx8yQ2XzkJvGdpjMrw3pdzYZofbXcstY1bY1uu2TfMmyxxZfKw4kpd5Us",
  "key28": "38qWPewq1P977kwHTJ29dYcTLVgJEHAeV8rYmTidmTepfWRBctVupRg59XouE1xAXxi4ywi8scj8oWeiY21g9GvH",
  "key29": "rXFBXg1xLfZDkeWMYfuwBhAW8dYUmoq3qP1MTcKa4NxQLx8Fwjnghmc7PQruyNCnRgADPXFbEE7hAhvHrcvSow4",
  "key30": "2G3wnAFthMikeMq39tyTacSyd9CmFk2ffdhabt8UtK8N88WB85ZRVJ9s4ZSRdhXeJNswSuQPPCETNE7SuBhYX5gd",
  "key31": "3A6cmoxRWURkCVW7C5QprM5x5kFLWkV2ATadUNvhhRn5uAJvvwNE8PNZJtpidTDvSrHS5UmbfN7WsK62pXBL4GWa",
  "key32": "3JrNuSUJJteEx99fJXsRDkfrVHQyZVSSeAVFBQT3u2UQGRhFHQtm2NqdSXgtcU9KvyGpFt7D9gj4EEQFT4pPN72X",
  "key33": "3RFFpfsqR9HUbBQ4AvDWyLE3EnR4bwhf8NwN52DaSsaaQ7yEtzg7LvhrN1Ujv6sAuDdpVUgedSZujEQeD7vcYAFZ",
  "key34": "2Ko4MhuXW3XCnJRvckxHxph4J9vfSTGU5dismw2ryEg45W2BQcDEURw1nQXpDaKpLLp72VYcqNi62jPggcZ2Fu1J",
  "key35": "yLvp94DF7vSYYEdJadwMRrz2hKet8Rkq1SGhRSopL5cCj7xrXwvrxfpXimgbFFCpAPDmAtcBknZSrB9aQ6FFzrs",
  "key36": "3xeWVz2QdgcqKfbBfHYdjCwzMRPUxDEz9bJKkw9wxd57XGPg9Xx5VuqK6NwwznqTKz4uL455XPQMjLYm3h44zWNs",
  "key37": "2Wx5MNmNhNdMBv5bC6xRsHiPKP76ZeupXuwCmhKRLZuPq3s6zkkjH7yB2davc981bFcqWc9CLfw3RCy49E8R93WL",
  "key38": "2xHoLBXEBAkwEfsZBJAz1v5jX7uN1WmSWjoj4baEGiJTFnhgoARLjSd8VNoH87sWMefoL7m6LR3osNG6agRFYjx",
  "key39": "6A15ACTip3wgAcfVZfJxFHoJVye2HfA6W1HL62n94PFPzk5KSx8E1PnVfvFHcdMBfkpUe1D7wACD9Se9NAvhj7A",
  "key40": "4cMhb9RhjYPtDHHD179Kz2mfomkfgPXmfVc5YvBxxNFroAwwtHHaJQKpEmPoF2p2PTaYuAQxaYt7W5Q4SneeJSJq",
  "key41": "3MLHPqRRYE1kEhAbf4rVt9VM5oL7aMVt7EQ5YMsgAvrtUoTJNZkR8YFfjATwCZiHGtiD4npavARgDZjifwQuPTo",
  "key42": "2Vyaczd2UzwwZdKNNdo1dgJerrdnkzwvMz8UenEPeWvGFdhcFfeHT3qoSWfze9Ajy7zz2KN1Y3Q4nT1U9vvnRMzd",
  "key43": "3davNPj9R1cjjzf5hh1zhU9jB83pGhbjGAgWhCr7hWxxZfgKidK7g2WBcQvV7SA2Jkuv1s2SQzDquWVzYvbTSABW"
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
