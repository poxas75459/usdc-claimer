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
    "3MkRg7U24KrR77V4XfKb84Z5yWo6CfB8qhmyf3hXdsdDH2a1SycGrm13jTYz1Zz16BjHq93KXVLKoPpenvzDyRcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZB113GApisBvLYKSxEkDpkLdCzSwTtZhxFPJEHdH714B4jhP3k4SB2E5ALQqAT3P9rSXkvm7JkTPHNxrYXNccsD",
  "key1": "5ws35bNNDPsnkPNTe9yM7S8SXKkrgavkzJzQYXSX1KSFssj1ckSPYDGy1JmuTw1vukpLfprSUF6Ji5joegKMRtEo",
  "key2": "5pFC19gw6mqqZ46ziPmD5B3JB1T3FCwdNRZnBi55TFt6bK1cfnuGGfaQnYBQceJAGM4T8aNdJDK9isQvTEucck6X",
  "key3": "5c1bjWihMJCZnnDwPtA6D1KAfh2tYV9Yr9gJcn6gka1MWCxVU39wwLHK68XkrB2eCjGNVREH7YxEkJ9mKc79rmmM",
  "key4": "2XX6VSfwbGczkTDJfwr6TagfMSgtXApJ3FPqgGahGR54cohK1wprpAfiUt8K3XcgpCkiJgkJWvySEsYhj2UFvoVY",
  "key5": "49AauUGJ9sWkPTHKAih6xJsQ9os7hLgTnFnWGKKMBrz2ydwzsnYkhTZVDZb1jn3HtmX5woA8WDZ794LGci4TsCnR",
  "key6": "5dDhM6AgcdbAx4mjygPvEjk1GRuoqYotcsbzry5CH6Q32FenFX58rv4iv9KchyJYgbxuN3x7wc9iNjaTQG1vgRdi",
  "key7": "69W26hmsXhrsdyGSgxxsRNkjSQwZP2xiG1pe4JZY1P9MDT8YLfbWZvZrZbbUBsVMK5PeVha3KQeGdZXiQhgVVHd",
  "key8": "4E5RucrNvoZuKZ7daaXi8sM4RrRAB67qMxjXy5dWj2wtndP3ZKmAgECM1td1tNYSVs2CPgHNwwxQzrY1CUGb8XFQ",
  "key9": "4i6e8pNwZW91ud7SNGw2FUxXuq9KpGr6ytN4ANFVYLer4R6iQsNMLByfKbYtGa45xxa5zcU4jAvxBmJoZgiC9A8z",
  "key10": "56ascchpN4sg3ZXo8Tii5La895AQDNNncoTjJ14wxx6mNTyRjWdtneoju5yPMLJzv2XdE6CS3AWPYEz3gXEAAz7j",
  "key11": "5bEjbc4ERtBAoppWtpzL7hSwXVq2LT9SLiaaEnvRyEsaoF9SJkacu1Bn4EKKAfy6ShuFYdqwFPVF6Te9ysqU53dU",
  "key12": "2XjfywFnqGBZnRaASF9bE33kruotjeuYxcihfpD1aPP3w4cyPxe24xGkimEakK1CCr7t1yZrGa52om24beXMNj3A",
  "key13": "2oz8i2TeMEWKRLPaDApsnHEmUgHvq383Jazp78EvwaFftfMES4yp4cwfHfk3YuJDFFQwoT1iTMdcf1gbEtCEeG77",
  "key14": "2CCUmBdDcGGEWrVXWxrqNXWyNR3NwjHSdw7KmQP6SqXU8bMKk2ECfpgVi3TgDjHCKsfxwjTWxxPKruo1RXttAkQR",
  "key15": "3aDmLzrr8j7mHwPJpW4njSUs1bAhjodR72Cxa1vNVCSGo8fZiE6oFXHg6chj7MqCxhRVzLWwPe957D2vBNcXWwiK",
  "key16": "4gY9RYVv7BQZjjY5bmk4JLFApA1WuTg9vegFUoz7iVRfHREGZTMU4hkFQTTXFdbCUVGbNNf2Q9fwWvpBNTvhyY8y",
  "key17": "2k73XfUW1YQ4t6RpoTmqJtUU91o4pp3ZH6uTvDPCongAP97UX4gUYWaEGpA45DqUyk4EDNnmNbT6J1NRAjZFSb3p",
  "key18": "4oyMequdrrRG4CD1rzSrKeP1QaD7gtS3ZoCeudEokZmeoQiA7CrEz8MuuiNPvPwV21sTTC6E5LRMZF4h1oS4QNgD",
  "key19": "3aHa6K5YZapFiohCPMWYoKnb16RALrHFgfaiQYRcHvkCBwPTvgcjuFNZ8Lh9Q9GbUwWriXgd4pofafvGJYZKR99o",
  "key20": "LX9gdfTbo4a3xeKyveNwevkuDk3cMymZM8eDT67nTcG5BcCJTQkSfp1tHyP4XE5bm7fibVQLym38WzbGXLfggKL",
  "key21": "e6T48xFkLuJ1a6aqh2tkmQULpQejgBzB5K8hRSV192KM6oBwSoG3ga42taFSjQtXakvoTyYV1rvH34snJdP3cZR",
  "key22": "3EnnxZAabSwtRnS6w3DhMFmCCq3nFawnEH6cfKA79ZinP7TJaQEHHBvo3sD2Q5yN6wXneb2iGYcxpd8CraMVeMit",
  "key23": "2GN4Wag7Hx28fVeCcU7kE7Hfqpbn6x3FrpDaHCf1au318FFp5SAeGpvE5z8WGhFvkyc1JasJEsQyh2VGCFh56Pjv",
  "key24": "sZGgttAi7u174s36hkwpGgUDZ7ncZ8QMUZCwTNce72hCrjvsAb36XqSwpPkKsKSBDBfzcgkvpHvpyfFEnNQKfiZ",
  "key25": "4Hie2kv94TDVmUmSdkyqUG4sfD9K49mdEhwqnhE9LhMPxFfsF5zSD1Y6HVTBPvbSWUuCiCWsqMoZtZdmDQY2iSax",
  "key26": "3dhzNRZJRkHWgQt3PMexvK1WvKwedAccEx9vpncNd39gByVKQsQeYX4kzqE2rwugaNxZMzZUAV7q6Y7UdrF94LvH",
  "key27": "3V1e7hAEcADs2PH8jPhygLF8LeHRhKYsxWPk1y1APmbgarDAQdSPJQpas8hqoUkrY95YU56oTqRxjniM2tDQP8ZR",
  "key28": "3QEHD7nTmbX89YS8XNi5VaEezu8vVUfmTbkeiX5Zyq1oJQ3PNd8jS5rjnZtSZUHVvCwev7RoSdhwKSjCcxzEHeoN",
  "key29": "3v3MnLHBmbBJsnAag4EhoBUcXbbPxHhuM1fRvGtnrHsYPir8oX93JV2J1WE2W2Scrkpifw2wuakSyKinGGsjG42c",
  "key30": "12j5ADBdrGz4FVwc3bNkJuXYyS3VBfKa2wq4zRheLCx8cc2FxXHAj3bneDpwg6L1bmA2ddgXryM2DCVNFcNpNho",
  "key31": "Wr57EBCnzz3evtmXBACMB97i9o62WBS77JCX587NDSTPcR96Dmj1dj7bm1WfVDwxed1ZavzynEqQ7LyUuCsRrQu"
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
