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
    "36rzr79e7ijrgg9vnYkQybcsXeEJjAv4qkhSnkqVC5PohjLcAkbHAGZm6uaVDBWCfcdG7FkKkC7YFxEkfae71rzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCZj7L3KuxFjfMY5S9TcJeYjAnTuJ41oEu9CViM9veynimdXpzz29DB5yjsiPi49D4BE8iMMsU6EBZG6cMzBSxz",
  "key1": "2y1bGaF6RhpNo2y9Xbkqs4Yma7kC8WaDNrzXDnqhxG66sht85UiTrSQLDGVYNe7dxLygFBWgtoQWvTy5aGw38dtL",
  "key2": "3KCG1RsQmXcpjaUmqJwDaxhka3aFXuKAnGC11xqSdLAFoUYipXZ7FzRVw823aFbgv1rEJvd2fR46uw1pw4aG3U8T",
  "key3": "21MoyhLCJrcmkK7WKPatvakwWiJmaAHrJB5no3CxtjwaSCpDEAstZror9LCLbPUWdPz25NfojL7dfJ31Mubht2Zj",
  "key4": "24yRWdDQ7vjBswvymeHTe1tpKzCaTcE1Lup9YwqzikorBZZCMh8nJ9a84rkMLwChwMscQBx7TrSXueWdeXN1dVDY",
  "key5": "4R66khn2EM3KRb6ASbQ2DJfnPt1DYTfpGX6UVW1qYNCS2gjK4zWpY5LtG8GCGMQrfRvS5GoYXXN71dzVjeDnMVek",
  "key6": "4jLkYFifh59MB83VdYh1zKGJcjQ5yAKReUmpfdWJEQZWezLqtWCrUzwZ4grJhjxQEFHQY44HDQMN8U29gD7wa1Tt",
  "key7": "vhqXnQ3BexTUg33drHCBXC1zcCRa9EJ3XA7R2fZzEBWoQMk2hQ6tX1BtBMfvUBqWGgqpBmNEw9pGpncdovyXyGN",
  "key8": "5QxknAHjtdcgRSdfYzJbKerLZgbMEfhPcac3eaK1xmR3PnmjpbLr5n86dTndSSy37ZeLoXCGvQxXHyypDmLysuTT",
  "key9": "3BxeiJdrCoKV25oBhmEApMQ4uubFFk8MhLZdghm3Exqxe5hmZqGR8kVJRz5SbjJ8wrxdixEr7qH1Gr2fBbRoTEyr",
  "key10": "3hid8vS8Fnr8FNYBzVqJvyXzPbSQpL5NjUsGJYD3Zmay7B2wE58SKA3WH4Wo75DXPNBAjgJHeWBso2FTQk6CbwV4",
  "key11": "2QsdKTaWU6UDeFfbQdpQDC7pPbXcxFbJ1afjSuMpcqJk4BBnkyZ6kZ22dXqjPAeAXfY7WbpPcZEszBkD4qNa4Zyz",
  "key12": "2v9AhjAm1v5UAG7ytWn6KBF3FSgaFdvAmsj9DjUN1UHpH7GE2gNHenZioL2rmRUy8wQeatQuW2DMiqV3niS59S4r",
  "key13": "4fU1NrVSLDJYLfMyJhYeCDQMSoLiNwmdSw96RSnDFz94cUVtf4ewT143vBEUobgqc8ZL4UfYV32LrvzsUJz6fcfj",
  "key14": "27XkKVFcWpkjp3MJXGipuWympLMFkw1LBJZ2jq9QpYhNgBvbAB9JTB7Eu8TAFrWjJv8chYDL3c9mUiR9tXyx4aPN",
  "key15": "3Gxdfq5GFAqvEwzWMvDc1kDy2o3ZpDEsgQ4dviWBdLZGA4mpgrpnbNA2zZb3dEihyCRdjskAmQTfxd4EsM7sQnqQ",
  "key16": "3UKgd1W2qgXGiRwYeSWaScUvsHoRUMVs3rf1opxqTqYoc13wbf8EkFP1YUxSPv8EPA55tQD7zBYESWxgdrqEuqXV",
  "key17": "2G3iWSEyRQxn5NGxRjAq2FTYZVrjenT2XcEybhUwy5wKRusU5VSiwPWSUp1tCArDZdwvFvqBVN1GqT1JSngrMnez",
  "key18": "4Qgorh4yGAeFZDvuq7SoMctq4Q41msjPrKM15RvsobQASg7xQjj2dJ6sSdhAZXzYu4YFhqZz7nwqEBRocFbRtqQ6",
  "key19": "3d7pARMme4xb1xHKiATswsVWmHDLQsjhPaEcsYW6JSEKKiMBUAiFcWjHS7DQw9XQEjUPZtRSaZr9wU7wDwXhrvcJ",
  "key20": "x6wmXSf8a44W8XpC9V74pMRYE2ZZZJn7Ms7QMgxKH34pvAyp14jNHNthzTZppf2hfLc8v93ra7axUSSBucd9NVf",
  "key21": "62cZ19ns9K7Xthq9PHvEGheatmzm7pLLZsjw1BkFYjtbrssBCdbarkujd1Ze4kmKXUJJZyMhc3jDNUbmpC4Fo8y9",
  "key22": "3giL94LATZcNNbqzQEQH2J7V6TPqozJ9EQyAhskfXth43tdJJ7rVhaYhQGEJ9x4TEBq5B4ow6Y24hVTQ4jAZeEyj",
  "key23": "3zAKXqYPZbPP4tAC2XmJ4h24FwdkPPMwmErcNXDeCpU4axgWThfSq5r1pRAteoQWav6LUSzSKEnRvTDkJJTKWhzq",
  "key24": "253otcmZh74N9HhKQK7vbeFxKdVwSdFEeFPr77WmC3AH7t7Ct5i6bXKenMGVrtc6vWcR3a9kHokgx4xDxDt2DkbF",
  "key25": "2AusBip9yYoDQgFPegsYQGGWfkcmjQrZPo8Ruo6fDZVh2soVwLYafg2GnE4sMwWmcbULqsaQwNaBWj6N2wmv75iM",
  "key26": "4tHem9t4mcD4iSHqUMB1aQoTmdUzgQGMCN4xnWmfsfCJ25QohRpgBuYrTv4QWJXJHjy4pKwZ7vKq8nQGgamkKGsZ",
  "key27": "4oqNLyHDBGDq8CtadNj7FsRAh4iNiDQnyRptmRdpDATvfKV99hQsiuJK7iZsW3xjmFchGcmGKVjojR7dbVacSdky",
  "key28": "3NtLrNH7UUS7CztxVJQY2NqjNNsTmzbTgt4cyQ5Lfwnh2ASqQchJcZKTdMRbWttFRkdBBPozJHyf48eAKXrdvGi6",
  "key29": "651EHpGdhprLxUTRMvYsKrkox2N1LPhxD57N88PkT32mugmHx3KfhqKEfZ6qhr8gMYf137ayVuXQvf2QjC5qTeLB",
  "key30": "814ap8k71uetWAVQ8D7v475CFcrRTTN1ggwafLSsRHY9d4MJBmHsvFec5d7KJRCZP5Lst53YndY1ggBMQGpWY9K",
  "key31": "582mkKPx5DJTxPH1vN6M1Cpe35fRLXVnCDD2nxnxYry5tDWJcrDYa1bAYPQANTfGaegRbwBpNVA7GPxndREdroKq",
  "key32": "5GsHcwSMx1QtP2eroRpBgBrHGZ48pw2uGgv7bRyXWQVa61codtKDigGZa3A4UtYSXB49za63weL9yanpmbkhy8gv",
  "key33": "5VFJ1Th8czRk2ty8HWWkhT7CH5n13AAxoKTaeJsVwUJj9ZucbDxGLZuYqXZTPGXFedAHsDJy2wh2LD79Yf7ZCf26",
  "key34": "5jATQUrSF7J431FRQdS72N7dq4QTbUNPZ2WBC4Cm1FbQs48AJPzzpvf7UPHZMM3x5mJwN6LTBpFaMvfKR4tH7arS",
  "key35": "5WFmaossjXDLWa8KSnbDdRHtkdMt7Bp1NDge2hqE3pGwFVcx7ggWsv97B8StpY4s6WaZbk8wJoFNb38Kyk51uSuU",
  "key36": "3SXaMun41ZGYCMyRKyceh8nBd5VmubdCaF8CCA3RP73XjJ3DtU4YtL9AbZDVnP73VsbAkQ6Cx9kTsqXhMMNDaQYr",
  "key37": "4Tp6qkfz8PPJyCvnDRRSW5VGrtfcSfxDhFTSGMZt344TW9xM118ZfNMP1h3P5q9tdDTtn8vc38FKd3gXQjb9u1MG",
  "key38": "5FKkKGXBJVPywHBem26evK9JHy5XDjUz28tod27efJ4j1W1Tp3J7bZswnzgFoAvbfsUQwY44KgT27omNnnmM7Aux",
  "key39": "2QpJhzqFAWYbXZcDfUiSNsxed5dikPPPtpCLUQQsNfCovRV9eTUGTLhkksWJNW332mow4q3C2qhtajLkuhphjmqA",
  "key40": "K3YqgVv6rVnevAbEXPZ9qhicLTMZxHgyeMT1SYaMc3FKMz1PDEeUjUMJVWgSRhiD6JfPrEuj3wqLXeCPzTzvJg2",
  "key41": "TViPQFWckw3DcG12K5KpRFjgtV6G8A2GUgX2bCFP95c9kGyPNRQM29RGELvday99BJqj9i8rctwNzA25E1dUqr5"
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
