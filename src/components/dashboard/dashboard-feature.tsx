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
    "3e2K8yvuRtPdFtQnuTzPFDaa4S6SSPNyiCFTEvQ55hCsD53kVNMFUDL66RYih565KFPbdyfrdnnqiTG44AKkWbar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWo44fHA7j5wnGbCRzwj1r6bFtiS4yXcUC1A1yET2VGd5tN8DyyU2eiKKPqBJGNkrf6wWdHeB7zW57SwbdrE8Y3",
  "key1": "RXr9qAc9pzfmvdBgdZso1yYfMLqVtRzzx1ufxmE2352iL4DcSkSYcPrGiRo3hpFs6Vh3Y3KPkepc1GY9yuFAuGZ",
  "key2": "33wrj5KizTk6gk2D3geS6Z1afjSmtWS4SzLgu1wSP1Z2KXdopi4yS4Rw52n5N7XY4PkPRYjsUCJ3tbcPGQJWsPhe",
  "key3": "5pfVRxnCp6Jf91NjDzTnDXDTwzLbHfc2oR8SCtkcpUpJWnfewuRoKsv7BoZmeRJuwtVZTe5UNXVRkqzm5tcKyJpw",
  "key4": "25UBPkt8pVW4KXyFVNeg7Q13tVSNxMj8WWT7w7SdfFyVsqXMSGkfRkyGXygqK93PuEJecHVUPkR4NTWRsAP2Eq9B",
  "key5": "RDQeLo9LsbEA55V6EJZS9RqBKdY6SbefTXxxQxgUesbwtvPbVac1FGW8mewWafPV7hL7bXw2k3aFkrmdVC2id8c",
  "key6": "33KvJtWbYNddo5EVF1nYoMAuMKFyxm836mwaKzhNhBboWcBJQcUX64J3BrktFz8ZqQN7uVVaVJD9pCVjoBfo9zcs",
  "key7": "3TxwtahreKAVYZV5nPJvSjohMaTVKwdZmCVyt9XEseDxicbk53dUuNKDoQT28wtgXqDerym1nB8sUEJCePoQaPs7",
  "key8": "5ktMVKvJ74VPpgxd9eAmmj9E6eLH8CPXXNzdV8uSLV9Tsn2Aa99AvB9PzkWYxKp2G8MJLkeJmPe8fvE4DY6HdGEX",
  "key9": "5kLtjAigYZq4BtaD8dSXThzefagkxiwbeG772484vMfo87o68S6BVhmZV3FPBnGnKMuURFHaDsEjYevrfPjk5aHB",
  "key10": "58SKxb1zreTtUfntqLzS63RHStujkLvxa2a9qgPb6mvQVuuY72tE3gp448wWggGvy5Hfjc1Z2iDyauxH4a7oHLBH",
  "key11": "4yZMgcAvdgKiBwgaHxerfV1AEGS4iZYVGvFzx3su19HW8QJY94FR6JjRyiWFL4yBSnZWV1EfRA1STbp5EP9XgnDG",
  "key12": "26mnQynrwmiyj1u2tvWR1oKQyARtqujevguCD6b9NifTDKnse4QSrSeKp7sqNyYYHBftZLHjkyCcwDSmrkmvSbkN",
  "key13": "RyCdbHww2UHW9hMQCTZ4bxSKGLHYzbKD2Bz4JyyLcawb3pdN9DyPEQnKP38Hjoyb9G9Mi6Ta5RKaWSZfE9pB8ax",
  "key14": "ZhuVxpAgBwK4QeGqEa2mVuonshgDDkAFPXA2LRA7SJ4Rw6oC9ionnGkjdQg7MmNdj7v9277aeDbqn4shPejScnw",
  "key15": "2nsAQurQj2j83uDKLEtCgiLfYzfJtoMqMhz2FFzGtackPXdyz4jrXZvCDGNpyVFxDYHG3MWMr62JbVG7guiAjHT9",
  "key16": "4LTe4CZsiLQ53eMkZXkbi9kj4wMcp1zAtCVm5vVzpneA2vuQX4WEdrRYwRJfsTLGwmJp5Hoxt4RoYUFjjBB1Z4x6",
  "key17": "254q8YiKfJyXgivcBWdPLyuxdY5Fsp7a5viVxb2sfowyvz2LBxkJxpD6ifHsyfUkkyHVDBEuMbtruahNscTbngVw",
  "key18": "7c6EyvcckXrwYfVM9emhCSdQzSvRznhYXCpUYitAfoprbhKjVFXhzTXRt4RBjHZEqeuLvzyrJq3r94yeUNxFqbY",
  "key19": "58m277w6dujMLEES3Tzr5AZszvCB2yYZ2A4xyCQUFVQAF3VK3e1aqhs6eLCM5msofn8pJLkUcPazeMY9ugQ6ivNk",
  "key20": "3ktxtNS92b1zRGpXYsRDTgPxqDsCcrzAF5n7K8DyTnJU56Pa5RMbaoqGwocWj8ahEARJb4BUnsDCiq2t1FZWKRtD",
  "key21": "5GKLB2zDJ1zsstVkEhVE5vdfjDJBt4XUbQaaim84wXuxzdpcpToqQyXhr3iJHsd5DwpCdR8MgHuGLCtG4BrDTMD7",
  "key22": "4R4vfQZZNUmsP33eQthQ2vPnGtaQPjWrPDYoZWmoFj9RTRuyyiL57knzEVkCPLDkXFquvqVPJF8rua3qRPSv9JbY",
  "key23": "2BKGisBnrjUVmYaw8fQpUKEdRfMBmMoYhRN1bedmurygSQmEaCJEhyH8aYcXpfuAZfgrT4PvsU7V437dcQdjm8HZ",
  "key24": "2R2KDkM5oByh8GMTaYjuCnqWhsE38Xu1EVJ8q3GVxNqr1wwxuFbt5TCbmES73yM1hZqGR3kyb82ggtF1H3Dj8RHi",
  "key25": "4jvXAbF5Vq4DrAYSv23Mo9DxF5uYBdHV12s4oVbQqbocVDXFjp5JKMn2oAfSwjPgeMAbkQ2xWQEHs9ivxPVHnkGa",
  "key26": "3Aco6ka3Umbn9QYdYx7FpGDaNtdVpJ5ZWJmAHABndKz5wyQmhMQLioXpsv1Vu24Gjh4L5o3Kt4pqBFWHHbi7JjdR",
  "key27": "3QSWawRFiZcLkYBCNEktro7xoRe3XxpokWVfTLENrPSo2iLp8mMXXJfGapbYMwEFXNNJDds736EDq8xizxcuFJRB",
  "key28": "2LXgB285pxFRKmhLsoAEbwau2KujPfdnYeVACsSVNUG23fMz8DJ3b29xiQLHaYXmSy2ifrQ1HCEcjpvnqBzjDh6R",
  "key29": "5Yu6zdKVewJevUd4Npvg56n6NFzb4nZJpNtCuYfkXbgskGBp6FBxYV7XRYwPoL4DPvDP9KVWcJafdgHB98yyZmv4",
  "key30": "497e9v6Bzi1XPiv6QgvUbKCW3KvmN9MZGBJT52o5pmi2aW9krnGASnPua7KGXwtb9WGrJLnZaFUaZV269TZd9dhx",
  "key31": "2q85ouKL5YHdQsJf1J2Neuuc7mDLcQHQZtz3pPurNVLmK2ubJJ2fvZHq1n9fj8TuJWu7iu3vJ4DHZJVhW62ZcudR",
  "key32": "4CxaCN2spJmG8matTPirqwAg6eEhnhjGCBTKyGzjCNW37NQoUZJkLj5cpbLnhosxiFiDK6vtrfBLMnyfeuw4aB24",
  "key33": "2ZmN5sLhuvn3vyy5YkAx3AGn1YkxX7gyY7UsuD8LP4P4HwHUoAoXHhZRcspTw8A8T7C6UDjn3F1jSXeERnLKsPJN",
  "key34": "46howfvGPfYq2L1FcgQXHEkKmw4Zcgh63U1zfxvvcYoUSqZxzEdjzzKtCN8tcpQDhyRKLB9H2djksQPfMb9B3hSB",
  "key35": "33XSfaLNepkKcyDviZAGpW3e5YAUxtKsbC6HuwSTgbKXLoo5JiXiMUqs5xfC5cSSR2d9cB1o5UqWy7K6NrwkmmgA",
  "key36": "4kBuQY7iasPaR6fWsdNiCNA1YZQ4KTBfed2YVmiWL2Vrofo8Z1BU7TuKVKgmdXMf4KSGauwvnptPwAHq44VEVrVe",
  "key37": "5UYnrFTewAWe9FfG7bAb5dnP46WMAhPHs9dXxAgz8RZi1GM1uqhqJ7o6P7jZaC9KQ2RKUbFcFdAikbMRQ8Wep4CY",
  "key38": "2XHyt6tUjboFWkp7UXz12RyguCzczHueZmdBkmp6NNBBWg5RoXCSLtKQA8ncUYqfx6hujND9FksfLFPv2pDDmUyQ",
  "key39": "o3nDm4rFyoajkdwPMKoh5PmVaZZDxycLbVBrySpXNRYbuYUBTNn3HZmPH1JVFn2LkigLvjKc3wQKZQRXrNkXcpT",
  "key40": "gR9uz55C8xNL76YrsutvepgjvkDUENYhRSqJKBtwGcFnghzTREk4DXwBZPAZQLT3ZN7JJ5TKcwnE9zb3eYy51mn",
  "key41": "p2YhZVpi5BMiUQYjW8m5c5xVAGcsXZLsWD9W2YCucVET79h21gCiP1Uk8z2Hj8oYNaxhsVAdA1cFB8xtjX6bFiV"
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
