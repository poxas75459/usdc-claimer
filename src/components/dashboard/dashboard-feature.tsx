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
    "3EZzFs4z98p8hQKQFQp4zvTXyz9kEV3wM9Zs1AhED3HruVWa4Zx9Fj4F332iaqk47AWgTTECrL6QDvNiK8fzkY23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgdBJhibB7wZnSnCVuDeZHaSyZijaqTYrjANrxqSdCZkfVrCfPUp5eLfVBtVA9Nt1N2CeufSv7ty7SThqvXh1jY",
  "key1": "2t2aEopKNES5H8ae9DH9Tv1FmHggVvkFjQLTgUPcJNQG5kd9Pd3HmpACYfSHjEHPCuuXFLCWSLYTiaSW7ne9YQTn",
  "key2": "ZqWo4vPPGx2saJbtXNn8sQFZARdpipmZmAQbCgeCUPRYZrHoCvx31gTJjyfGCToibtMP3ZDjzfkvoMCg5Zpeebd",
  "key3": "49wf6iQzUSGQkUMMUKK8fuqv5pjt71NfehjqtQ52ihnhKrLPKF3iwtDG4sxwtcdwAL4mAMYLbxCua8EeJuzHhbcd",
  "key4": "5k2MLhY8NTjcVW9oSWcBMHcPUn2zf5PWVn31PFGeNyjZiz1pVjHPGeuphj1xgwuhjxUyc5eSEMSJuK9sWqZHEgJh",
  "key5": "3gXR9LVSnvVS8t9Ac4f5ooyTcUYq6tpGttVWYig3p9sL2CWi7xVFKmypYcBwBQd9prVCLJRV2kP5h7jDt6E1LpDn",
  "key6": "5VSDgW7VPNNgPdKeAfppxGiZ77ki6HPscBWzByxFsvLZ9wksB5428gBgetStQoJNpDushPrJB1yibmnDLu8Pvx4r",
  "key7": "3F2Q6ZUoyPgqR7Y4ry17ZKEsHgiLr9aVcuewQqmAFmHWz9eWcPioS112wDeVR1GZszHXjLLUf45JsRp3kbkBZ64H",
  "key8": "23x6b2nEoBcsC5pcoiAu9FBuUsifsLh6N8jQARERq5cYmqvpKKKSgJRz4S1Y7kK9oj3U8vuKLQnYadhBeSPyfbk3",
  "key9": "3Gx8LMPwHHbFhGrx3Ze8AWp99w7rbUHKThmKGTnndN5FpVgjw8EFUc9X8vXdq7p6AaXi6cxRAD3yTFRdJhYPSxEH",
  "key10": "3aS2FNuFjUrEqUENwNzbdsvzSZD98FTPXcSDpuEE8c8BJM3ykefDSCnodJNfJnmd4bSFNTW1E5Dum8HkToMPnQw4",
  "key11": "5wvya4ZceKuNXE8EixrDrLSZLZLuHRsyDpV1N32CNzV9FsFyT5bMXLcPTQwBVVSC9J164MtdeZytjz13NeFF51hb",
  "key12": "jFScELXnNMvZJ6SqqctCvNzn7ys1wk5Agkb2DhGWg3vW8KHoVjbJZRCL451txUXmgZcnTEW87jTuCuJ8f8fD7xG",
  "key13": "3C6mFALckiHKSHsYR4FzBmq53D3k1kP1pPLGYYrXKtympKrT5XYb5QqymPoYfRhwHMf9vJPfQS8L5kY91r8QKJms",
  "key14": "3WgRm7eFyDF6PQvnyuQ7GmfK4w6zDrM6H6CCNVRHqJjns4ARE4dP4kK6aCSGxHNHWoms7EbYdtiLcttoUFX5SeS1",
  "key15": "3k8ypSyAFjYewQqYf1fUKLo9wSa2Bm7ifgmxqCBb3gPHqCC4t4tR8rtnLKeDTx2vJaRj96m3stMZEWTpMef1Hch2",
  "key16": "r4g9tr1VZFRgvHe8DezuHpSBEQzfFEJh4ioZiDx9DNUwFuL83aHacbWn5WhXzJBzovRicwBZFa6gdCwjq2KKkvN",
  "key17": "4gnugtHjGX713m9d6v3r5keawjfCeY7MQGcUdjvtvDuAdaog9X48fbBUVk4oHZnYxskT8XeZzsT7EpT5fgZxzRN9",
  "key18": "2UNZ2BHx4FLXfrxN316eB4T8i5PkPcSAeSm4m7xnc1V8khQEG7B4mpiy3PtYH2V432vxyG8TymqWGtwQNT86pF4C",
  "key19": "2bTsMvEqj4tkK9NK6tPaYffPiZ542JKhWEDCdzJ5FAmnEr3KZJzS2pUh8zPhERYfRNKxAeo5Qou7SgY819Y3ZSSJ",
  "key20": "33PVrDmU7oZ1xjWcbUk7LRQ6KvCJiwKiUWQ8frGeet4NwzsG4h8iETFdzqJRivoHzMBdeDB6i7796pVXVkUZWB6o",
  "key21": "3DMXQtwtpDeU9zarhKRZeoGjQQ44mmybBCZD6GMYoBb96BFFGTUEFduewrpYq36XXvaEZjEgjLJLveR5NqnzEbgr",
  "key22": "c51H1CeX5LChrkwjwnomGp5Dfj5YeQBdKzBDFiexknjXAtdPfs4QF8QZq88uirTCsWx5jHUqw5j8PG9dCNtpCZh",
  "key23": "2RsUCFiWvsHW3ohDpTG17JHR45Bkd7v2pKfdf234Wd2njT5YfDfJZyTHa9eWt9FXEFpMJ5onhQZ5Kfqaev2Ts4cx",
  "key24": "FCf1vZwsNd2UAhFyvaFEEv431RD9AncVEL4d6gUckPwMRiVMtqDxozfZLa3ZzhP2ntFgudxkHks9sB6Y37boLzM",
  "key25": "JqRnYAJmFf74tBWXxevUrtcygf7wb9GPfc7yNhi5RH1JHngmrm4o8Vhjv7Vx9nE29j7HmjyzCvbGePBBqginX6W",
  "key26": "5NDVCHL2Tn1aotVfGfVUnpNVHqQnX3JCLPEHzPN69chbUnXm8Y1KjEBtER2LgsJrAgyppKNHeVuR1LNquCLQwk7E",
  "key27": "ofnfLdd6xUL4FCNeZZXoFNMEswSk3AqepfMnUx6hq2FEwTM3SohFULA2V1urkruHsV9pVJ4X5hnsskR67v9cwoE",
  "key28": "4AG8bs9hFdHpdNPPgo1HudyWjuMuBgLPsEj9HPWF9M7cfz5ireEnLUfXJfDD4VrVF3x9fRAnUNBLgNmJCFrnL2B4",
  "key29": "2MjT5Eh7Tk6365hkH9XvbYnDdDvkbemSevceC9s942LBRoyhJUhRgtKsLFLPRvh9dbxqi8Tf5tsEg6P4TBSRU5qZ",
  "key30": "2Xbkn2DNSp5FBu3tbRNox7JxXP4fDWd6cibxNjZ4JchqWLV5fE81cFuMyr31HH6f6TeaFhAznxyPhyyXS9adfZDz",
  "key31": "4F1ydYGXYDPkK1MNL9L8KAz4DzERWNyhHKqoYuPieVpwPdHbGgBWMP6o51e4pqLq2kkABpkXPt7VBgMXhqU9SqHY",
  "key32": "5GQ3RfSCcJqsX1DBNbx8xbSCSnGDALSC4KHGEVJMZiNXrPw3CibQF9jdTizRkdkC4c5AuZM98Xga7pZ7N4aRZGvJ",
  "key33": "586pJjrXDvnGgGyeHYrcQ4dR2VJoKpLYQ5JZ9KNxr6hnvNPcQJF26XunkduhSKUNGAwAqa6RshyQuZe24SKa67pX",
  "key34": "7ke4WShjYfdzSDaszKEmAbQFKDLVXZsFznmp7BhG6VNnKTBG6UqSxUzPZ2gnxX1G6d9XAnwhnYjyAjQVkxqgKk4",
  "key35": "5fryVVSpGfstd5cdTA8FzaQK5wuGcSaZSVimrQm1JqBRRuF2vjhJjGksvk2gMNLVe3trZZS1vSrTkiVd6W3EKHHG",
  "key36": "5JVGcUMbTr6TnGkH1GgXAsWx6qfKypsTcU3rCS2Weoe2ffnveLTeqCvwL3RzyLycSdgeQA9Rxbsk6fWBB3TdkK5g",
  "key37": "2hwBVetGNZeWfah3Gq9epfJ7iQA3pYSTdoGFuFRgc98zYX8FxAPq7DtRN2gNKvkcchBRzu2fK1idJiSjh5wyfy89",
  "key38": "c1YoC1TuNhsYJe9x3hK6VVPofxZmRGvK93oruxnkYmP7G7inN7W4sZX6VML4M1GREGmVE3NrES3qjssWSPtaUxZ",
  "key39": "3PnQhMybFfRGtoJMaRCymieSAsCHP5kvnT35hrzYFCYUFFy6ya93cwPr4Gz8EP1trnR7i3C16w52L6Zgz6wGtqz"
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
