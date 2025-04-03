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
    "5eUn4Sz8Hf9UVgv2zhk8AQztz2geRKLmunLjP9298BKbSnzZoFBopJWJsKXwBaSxJpgb95pcDu1HLE8vNcZ32Hr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LCdCts2PRnMVW9YorDntxcskDueWSPXqpjVXH8XCwZ1goXh8iFFjF2vn76w6vvqYoFz6YP8jSQ1JaM5ga6oQigr",
  "key1": "5z4bKFUVGKb6LuvYke2vvX1NtmvVQjnpEZimRWA5pSL48SoRVoa6t4VxsAf8HNJPEYq6xzmKiVbZDFxkyAxniZ6C",
  "key2": "2ZJxnxjYqn5aUGYYksucuwmZCKQhG2zHEqSBp9kPRMSw5vnU1Fh8UwSJmBRWUoJAuWqRCz9T2GsjuzuFXR9a7EHC",
  "key3": "3oSUVDbbCNGB25gELbXyn3VMG6t7DnYibkkBRiHKtRkQyJJRNJwvXZooG8HXi2FYPpQ1JLV7xcoK6GApkjsNbyXj",
  "key4": "4ZJSo9HtBkdCH7F9a7Xy4iMowdf2Bv6DXCuTTkau1aWfadQtngYThmYaH2woi66okfTq9XzV32ZCEeKS2hENmrwg",
  "key5": "3XyYXXUz2qqrAgtkVLeixFefjnx3MrfZGNEaKdTyzAjH9nD8NYwTgTB5TvxDYRmbKZErSYbTuMJa3G8sHfHQmRiX",
  "key6": "56dpCnZiLk43FEofzhmnyDiGmstDGo383WyQfDKfKAMhP9Kg976JgsN2kLtf7oKPCe1GM4WYEQgsnev3ab8zxFGM",
  "key7": "4t5DretvqmdzUkaECPR7YwtQsCQ5h8K5eBCCXpxyPr5CZZLsHkiBZTY9mkfKWEyEFijrDJCtuVTWTFhrGs1fmhj4",
  "key8": "2oTQJBjjSgpH5tW8TchJZvTNxY1e4oFwa2w2h4ejWnUvJRpNgrTNawUEbjvrn7wqLVNsH5artBEUWRRtsTvRfNem",
  "key9": "pf1uZEQkiXPJH6KF5imMdHpYCeghNnvdy6w4nDnBA47L2dDZ5xMdFS2Tq8tv2bBNMTYVh7p5YczrFYctxtCSJxq",
  "key10": "3SdwjLnnfe67hNLvhptAZHJZuzWCNa3pGWMNpWGY25j44A2H7NH8ZacHCfTNnbEY6kK6hkjMoeFovLFrjU4YLs4w",
  "key11": "3g3CYqdwBuLHbdUo7oFgo6QfrMVfocJVmkMnaYWt3WiQ6hwUd4E3moFtuwBzf9C2dtEwCKTWThfn4x8DmVDxkh53",
  "key12": "3UjMtq9uLfhdaKpLrTkyee5tX2QZRT4FNs2CDcyJq2cKnTTrebFY77ToaEd2Y9s3NCJkEprp95do1ud8BKGhpKS7",
  "key13": "2DGMy141M2S3ftnXkgav6oB9q48eGWfUUFXUoGoCZFjH849eW6Jv9JbDSNzUqCLKRuoBHpTgVo53YgKALADsk66m",
  "key14": "24ZPkxkSUhzEtokZXJRsUwK6vgyRde4dYsv6T1WMRdFuE4jc1h9z19Ypbc1nB77ikxCsPZRJyCacYUPQdNBQJ135",
  "key15": "gsvFiGuzDsCXBEBfb81x2k833Hb7zpdTqdyZMB8e8gUXj3PxfqUW2YGHhjyoY7JDEKwiUCdgPEAbMVPNabAxRDJ",
  "key16": "P8HSDfr2nXVxBYJGMf9DjywzjUXas7izKjgjebhtX1nwCv6Pj7QUMt87D3agm6qaXk5tSCH2kmctJnjNotinR7B",
  "key17": "8zesrXb24RKm7sbtRuKRxbFbGqYb3DdtCQXGbp5uWei2Z5n54nJ5C3s8jZKNdgoVWYZbv5onU9q5MPhQAXWrF1r",
  "key18": "36Apq4djSkRR6mxqR9eHpSXUeGCXBv9xWqGQhPz15w9H5kisVM5KX3FqrehRPkUpP67ghc2LHbuRyt9etBVHH5Lt",
  "key19": "2jTfKtm8Hn2kag9GTkTFcSm9gd4Zt8B13SUY9C3zWfXNcc1aZCCPUBThsyNUQnRqjnBpzRtX9wmPu3ZAQHf7DQtr",
  "key20": "672zgXpJxSJ3sP96xxE4wFiN5v98nPPCpkb27JuXvXYXXYcNVguw4yQGnmvtdf8qPykiyjWatNrMHa2KMgW1DLNW",
  "key21": "4npTHwqkAq9jRxhfirEFd9Qj6aAhHWy2mHnv529jLzxzhgarbQMshWpXGK1esh5vtGfo5UwVMmiHHWrpXh4cHXYu",
  "key22": "4syYrypd54AEGZc7kbxjA2j9XVtLEMrSGszHWhDPfgm6wehmagAs4MZdBwGq7jK92Jv7u3CkoTyzwk12SiVq3SNn",
  "key23": "Uew1kBUPogiTcgRSjLZ41bYDfFfeWJu8LPAnwVgXHM3zfc2npMDAwh4azRCnKZq6fjG8qibyvS9VYrHAWGzYsSJ",
  "key24": "2KaF1SS4b6UjCKfw2NMpcobfrvc5XZ1yyP8sHeKAzZLdHEFMo1uA8MaQGv7UHxxqWBTUt33Hr18LXJi1QxXUS4QP",
  "key25": "5nqczArHz5krXkudHXDAWhgFE18v792VFmEZUZ545UajAA3srrETw9T1wXCYvkpvxFgkCvMLQMbfzJjPtfBZLZsE",
  "key26": "5a2hBNC14PytCHBx9QfNCxpZUuwFWgfbcRGPSsQQk65Gcw5949Y37AoMX3A4vQKjxtXWHFRihavtxA7Xt2EL4h3A",
  "key27": "5ayy88DhjNTNXZxWecMNHzDDNkcBJRNMbLoEs3AxAUzTxXxFENToGcxdCw12Yt1eUeRq1pvfLLamDKcxypom78Ty",
  "key28": "3weBvTAvbtfByijtKkBFUDi3ffGB3QhKSiGqKyi9YqyokZEUpEWHqvSV9qAmQfxox9VQ9FHf1L82FKtKZSqJrsHs",
  "key29": "2STEiEkosNCHnssXDz5SX9BJT2zbmk3YqVxRJGabdYszkUJXxwkDeoV64VnqG1YmYyJW2uZqi7mEHrK4sJn3MQGL",
  "key30": "36CjZefuSeKtRESU4AHinFU4pTJp6o7ivA2iXWpxqkiwvv3qQmBNTSDaaBL28HSjW4xQG1t9rhvtzvjE4sdEN483",
  "key31": "45t3SFEEsiXUBxeLUuL9j9auaGKjhDPFZ6vwjyuh1SbbQEHUJaDmmTze6f6YEYXqF6DrBZXmgP4swjrCYDBhJFyG",
  "key32": "4eY7FCTiyLJ93gfZX2Mr2e3eUUFmM8RuN55HeAaVPXz3VPtVqZ6ptu1dd86PU4DfN4qagyuch9og3kVJom23fqGk",
  "key33": "48Yp9sxQzYprmPvuvFVcDc9DXi6jBueyidLAAxE4qEqAYTBo2fApDKitFZH5sVKhYNaMjTTcsGyr6xhLqNAwkk69",
  "key34": "5TqsLNv4BWkCfBWNAtNFbsQ94ET2YQzs6ijkSVpzyPjwzEvfsm8nTuxG4x2hDGZLJr46TEMjvpAbEDJGJUjmvGEm",
  "key35": "5Tt1XXq1s9HEmj8De2TdwgVUvtroJLkSAC2vdTjFZ1AsnQAtVb6f5JfcUPHasTQAncnTwPX9mDQCZSqcwu7FFqsi"
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
