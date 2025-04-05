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
    "wx9crC786U1zhSEwgjbAByaSezGxKbvSCTKvp6pg2Z2gDcyMBF6a86NvVjJhktz48dx1vDUNueBbbK2kG8WNH65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6umBmrqMWi4bEu4ubAZDHwx8M668LKJBuhzSkLyQ8duwM7awrhqYaM625jECcaNkgcKPbiMyWC2qEKhAHkFrdp",
  "key1": "2kVX3hfnuRzNsNb42RbQXzywThfEP2tgXFSzc24yH8JtTj299hrGCPSUtYq9KSzt7m51WkFLRvh2krDWeoZiDKmu",
  "key2": "rEsbADa7wUBgtA6wP4kHwHrTPgZ2mZbTdqgh3LU8mRwyx5UY29w7bcQG3x3FUCCEq3aBQmUoB4gzB1WLBzg4c2t",
  "key3": "4xNSJkBtsVriEKkYtNFPG5JPtfu29JFheATBuFKswFauQPEeZnEWo3RFi2Kyg4EL1A2kABGCmhGqkKfi8omnsLPK",
  "key4": "45S7PxBtowG4vQ3pj4AiSvZfyw3ARvsLG1zBF7T3QC4JT6SgS5xfAm9JquSits3oV7TBujFo5VpHNZ3JNn7Fcetx",
  "key5": "5C2UFPr5qhYqitTHLJ17AM73puEuSeCi3dJfyxcVkHXREQ8nqujLeKuxC5EhEmqmsvyKuBUfJruSKUnZMLtDtzAe",
  "key6": "4XrUz5ophVsnn8Qr9HEmg6WbtaBeQAym3P23LBjaJzagmxoYoKgx3R2drcwHAmT7pWVf35NAwm6fsdJQMroPAtDC",
  "key7": "6kxp6rx2z9m9vW8UDFaACY3GhX3MEih5S4K1jkLvD4YpyqzkhnvedXxgTtFuBCEaBAvFiSuRRyQSZuwyVVHcLUT",
  "key8": "38So43XBKygRrY7BH6VzARy9CfmGA7vxYSazgfWyU98hZUuWWmgacKKy13TbLwWAg2NjEzHsRkppnskWQ8dvMFWH",
  "key9": "2GtGyvCwuYrPYFDzQDGPkWoYZtZBBbVzYVfaDAVUuxMF71cYW3v9WaW8VgSwmASUobN8oVuSGWZfepHPJPhBjt8C",
  "key10": "49UUgFgJoMQhF9V6nLk7r4jchWgzBLrKoUroBGMeaZZRvFzwPfQnBpEM9nqDgn1onGhbNPmxq1ARi4h1WkCPPHJh",
  "key11": "5XYY6Xo6CrmAtN7Yv4LDpxQxRNpigcY4iNmY1PrQotsjaCKCvAFLzibC4KH2ZAE6UBKvV51wh128DD6Nqh3yVkjZ",
  "key12": "Co6k64LqeMZPjZEa4RoyNg4dB57VJHKyEnwdTVyZGMUuc5DvSKEMeWz8JiH7qiGvLaJhVDEyL5Do8SjFtCuyDiA",
  "key13": "RUCTXjnzwExBb4gb6HNJMtXL83KYpfBZivFNrVD1AsZKSyauHuiXGFEjWKAU9Z2TCAiWFWqhWJJ4ekfXFAVqFUP",
  "key14": "3q3ghGwyMYW4qnWeX9gTfX5EbC1ryeBN93r2YeupXKzXtKNNJquVCt2B2fxP65B8qN2Ja6g97V244rCG9RSzr3Kg",
  "key15": "5M5EA8JxLhkRtHPQ7TV1zEiPXW7qTfyfaR6si2wRJvBT1dihDkz85ibRK5tnHJbkqKiD7z1waSpGxfRgrPvbVHPK",
  "key16": "3UPPkLpXPqsf1eMTwsq28hg4kA2omz8SqNQchd5mDC89hfqQKsp2Nb4biJmqeWeiYEcrAcH4xKBVdHeuD4ys4goU",
  "key17": "2xxxb1HD6PxVwHBtSDTSyoC6QaAea29Dbq7L3oEknTBBb3EVDuE2XcyRsLyVB9sKoXW6Ce75XQSE3u1kYiHBqVaZ",
  "key18": "29T1dFTf35Db9iRCWGG4vDQjZnXytXvtZ6g4DVULpjiDE9AvtFqdFFD2Fdhk98ASjYoBaHiVM6wyqH9epuM88emc",
  "key19": "9CdvUDwhhUMVXSUiBgjFvxJ9EXuaoHKMybz3UzXbLZfp6T3rgJeh7iyNWHPLhqyuT216xs4N93kmxfcH7VB6Uc6",
  "key20": "2RydnX4Q7iYVexSP8XAyZwFXfTjtrGjo3N2TEjtSUgaQK83aVfqboiLoiCmxJ4ecsDMt89qp2F8bDMumm6Q593Kt",
  "key21": "5heXMSgaiGm2LMBHTzFAUCKJkgdPEXRvUjJvbXmGd7ZU2Csw1JXhq2FiLvWb6M3Pztqon7sEmVbZh64L9ALMHr9E",
  "key22": "29PqKv95NJEzfEaZqaEPVsVQJE9rUc68ND8kRWAELoMqwWTznXZjEtzuc5Sn4eSfuSq6c2N1zAhNhtRL5obZLQsv",
  "key23": "2hzFzAtAczXD2JFxD46HoviwbMKbtBcp1jiMHvzf7JuUEFvLAAFWQcGfMJ5gHCfKeN6Kf4WAiZTgi4asKAAomMJt",
  "key24": "3dkNohL4oTyTmxVRRamJ9UvBDt18PQfh3kisCadNuhmYCitAVmVsQ2utimNERfkGik8DkWXNCNiUXgFb5GDcWyH9",
  "key25": "4pUBNg9EZgrZ9SZJnJX55hfbaQTGRvHtqdynT6XRoLbL2CBvgxuhfcgh62Q657fDySt7cbnBR2aym3qBxY9eUivb",
  "key26": "MMsS13UfgZVJFyS5PNhVf1YqoGRMrkVYBuonkeJZEAX8Ape3Q7aLmoARzLThr7PTeb9P6f1VcqbvQS4on6ubwMj",
  "key27": "5F1ycJJ7qbfzcegY1nUhNgt6sLWwytPWTFieorN2neZDbhTUtqP5yMkzoTMnu8Y8XMwQnjtsyJezTwHEqVMxDw98",
  "key28": "2nog1N6dtpWNQMVFwyqkWeFztTjSw67SUcBr7Yny3Jb7DgNkMZYS2BzDW9VdWNL4KMuqCPdhGGFqyu2N1mioZARF",
  "key29": "5kKHvHGYN8ZsmzhgGB7tLQFFeQgdeQYSuiCMXYX9FFWPA7JLCe8akdL4NEycFZTiTFtfF3dJEGFCUoB2GfaFuARR",
  "key30": "33NQv7BbTsLSTthpkPTKG8CGC4WfgyP51oUfGn9RpHzuWZtNyYn1XW6SGvLNrQRtWiZ7XvkzpdP1eDazgyxi5uwj",
  "key31": "2yS1DCsq581gcdTXCZLtABBB392ACw6g9tVwBEDFSwLwkAkjFpeEmnQSK8YGbKSJQbP56GfocRGonHDXgJeVQgsL",
  "key32": "NJ9fTvJtk9dWrtYXDBqbZC7GSEgNMe5UKqThzpTDHH763Ks1o1RjYYeAezSoa3Z4HJc3dh8vM9nHjeaDmwQpyMn",
  "key33": "5edPsAYRoDjruANH1y9oN7jXVNTiHRUjL5SKLXgLGPKxjb1UyyPJU9TD9pNAaTCLf3e3e66G9Va8o8C2VZEufF3a",
  "key34": "3U8HsGTM1wqbGLk3bbXUUVr6WCPQif17Zki9V6AvFFUKfrUaB2Gav9BkX4QxwWJ6vXH4bcG6kgeksY5TEYxZXhVJ",
  "key35": "3gt7PkA3js9xRQ9J3xrLeVqx2y9gMxSZneCU4tef6MkGVPkLYe1XGxqQwxWars2ebLFK4W31B889oidmUhHqoYjB",
  "key36": "2r5GRSpV4WngwbreHunL1Amg82TCzD5vTkHV7Y2QSXtsHeZQYySjYWyZPYtzGKhnFK9ELyCyPbosfUvwHSDiY4Wp",
  "key37": "3GhZNA7Lftru7tAZV77arZKRqjddvE7Q5kYn6ajBpPN8Pjb2qdzmYyTPZhBVfp3YPzu7Rk2evvCfuntGE5tH73zE"
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
