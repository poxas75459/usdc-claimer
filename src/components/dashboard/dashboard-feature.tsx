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
    "4ZzgoeUvAFYVB7Nz5Rtu11Up4geMdqq3cPuBWUcGZQQy5kFr1Hy3ZtvTfRLftQZBfifJwghmN88B5TPEdxBUmD9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369KCATYAgq3TBWeRmm6TFscy1WifdMrV5HWoxbYnkLzdBSvZFaCv2ngZ7M8epZPdvdx9Tn5hJLYQuvb4QrfcWKV",
  "key1": "5VwJiqDuBXhZSTUPF6yFA4ab8vhRpNh48smKzR61V2EtaxGgyyMurAK9umkroWG7wDQgPdkCouRHkHdWCsQTzp6L",
  "key2": "3FQL21E3GUNVuSXtaezGtfH9gvDpidBgztu1N9ciLUQiQcsrQzham9mRBENSjP653mtzokCYWHSPxQX5vWDRCqBx",
  "key3": "xWXKpxrUWm7kaYv5bJj7w896yrqZNZoT7e7ca9moiLKCmztoaEs7ji9xc6b2HXju8srC8BNaRgmtutiEnE4RuKV",
  "key4": "5NSnRPvrPEUD838CJ4ytiVJZmUTJ9VxfXgk2E3SqcweX5292NdV78sveG9qguFNERAHbwU6V5qnyoPytBtCH15Yp",
  "key5": "4D7w9exp82i3cZrwN7U9vYkPhrGcvgkxjuMwzU7eo38iLDboKkhozVtptFrC32HFRQewnQjetWzWDZJf7wZFj694",
  "key6": "5LVKemfwxTG6j2cR9TM9ueGX8e7fsbz4gr4SuWWpdqtPbSJz4uwB3VExxgi9ksUXEQhjTS77V8NTYH4U4NrdWWko",
  "key7": "2WLVQ5yVKs2Mht4TSTE6sgoEax8p5iSERxWmgprcVMuV8D5m4sgCwWTbiMC7iEPTLZuJdyLNmSEY43gR2bgbhnPu",
  "key8": "2zZQxYgE6EvYo9F95cQays4ME8ei1xdUsaHUnqkUNggbA1VK8pgc8xbX6umVfEwJYc5bVXRuFisSmW3PDzndLYjk",
  "key9": "5YYwaCfQ2AJ8YtnuJdAN7RQ735xW6RGLZrT4248CZmeVXkfdKTPGxCUnrFmc67VAL4K7AWCYXTXMk5DvRu67MM17",
  "key10": "yutiJ9oAU2DAH276cm8XDi4EPbpA2AUmgCLavUAViakLhNkLWayW2MC8eMLZBPnHbseLp9PGFc8vcLCGG6XvKBX",
  "key11": "HA7p2hoogtgPYYTMc1c1v91taqkLzTNJzJajPGkzhH5hoFev2v4thfy5zr953nuteK6zXRDsL4XFe1hGp1sWWhD",
  "key12": "4p1qzRpTmXzCYuAU6rgTicZt4VUvpsHxX879snk8d5LFmy3dWPA8tJhPPC3r3nHooQeYJoJ9Hkyi5x7j96be5uGZ",
  "key13": "42zYYj38zPDJyy9A6Lm4b3LS8dXjQ5pznVC8pY1LWNuUb4gXomtMiFRpLdWLBFzqVW7awBVsa9oSs18m7KW5LHmY",
  "key14": "66vaEMQU2nDX9w6trFvnAKjdQrkzhupgyTogUbytzaxCRn3JVyu79NaM98Fjc9fd4uzn7EyGzLruspKUV586LJSp",
  "key15": "3cCsFi6MhTxktDPqQZGzzA9QwvD1zsBn83DFZ2fpopMg3y3M2xZgEcHEYdUTfjT6Qkeuv2E4MNRMsKbhwT41hwu8",
  "key16": "4rkMWgHwf1adn8xWNhYusbAswMKTYfLh3FaZjPDBYCZVUtVG51QKUGPhGJ5yzMtpbN4JomzPD3aLMf3f5xcYqNwq",
  "key17": "49CEk35VeX2cjH2d9vEnU2qPkof19K1eDFTr5UFtsrpDS5Xm4UsMSbCSW2Mpd6d4sahiCGYDRTGqsHqbK5rHvEaD",
  "key18": "4HgBnXM96vMDL4UNm12EKaf94dNZe7tzZjr9EyfzRKZ6zEvuemh14g1pdkWNGmBDi5J6k9V3w4ZdrSH7vWrGCWYz",
  "key19": "542Cek9fRqfv7RyZBVbUeKMBAmVojBv6K3SZMVHxVGfenW6CvvwMKZyYo38o4sUcy1kinuVHNACjjuyUuQbHXqDN",
  "key20": "5bAkPkjbkLmo9A2M3x9gR7k4QuVpufgEkd9wFWxCdLokbNrWgiQVsYPzemqugQabYseJpgDEBAgcXycFhDwXp9mF",
  "key21": "5hutWraUEL8ZJPreFQ3Wk3qp3t2pQ9DakRGKwFxx7eZdh2Nt39VWK4kYL9SQvajrdrRCUEpsJ4Xfucjg74jgvkoC",
  "key22": "B1imeHRkGgZSQpD3PiUg5qZzAgLQqvJHCR179mjvKMDiSkveKq5AtrzqEc7V1JDnjZwFk8dZ1D7BLzkPX3ZUi5Z",
  "key23": "2ef9JfcEfeZyvmVPzUhiHEqezMHvXYg8pe9ueLjFLsedtCGkGBGcqzXMN4EE89ZQjy2GuAr5LqdQcqdDZxUD3F8g",
  "key24": "5ezasStesqH8k9w62yGJ3WDXhLDFGghsSGGyjNFNpucjNRJpQEwV2vay4gK5AdxwXAumnWXRTtYmAVCkMF8FbCJr",
  "key25": "5nsHeuDDTjzB78vUDA4YQz2d5wY3aABN9CSFwPVyowaSpL6f4sStVMXgZsDjLKXEym3JzEWXrULwGQzUUHek6WGK",
  "key26": "3shkwQVFBaPR97Y4H5sU8K3hQeJaiBQWDqyVSW1PNgxt34VzdXMbHXGWumQYmh9Szs5Mre7q7Fks9EjA8m1fKE2t",
  "key27": "Tiu6hSGQFAKGskP5KwTyDtNGCfjLjyid7VSyp8TCTryGB2kufjXFFiH5b1uToBK6DcrKBZE2onXjMM4VcwQTdfC",
  "key28": "z2XjLGY5oeKf9zbReHPh2iinZAHyWrFv9uSPzTrKxMh2e21cj5QLmciHQcPPYmsgMxQrFcACFRkhmSx1N5GJNcd",
  "key29": "2FRDFhjNWgkyw4SR15tCAmoZzQngZjetDfvkmkyejKvJPqu3KVr7wRgEu9SdygdRAGDiGBg2AqRw5btoNC3ugB9m",
  "key30": "LHx8yuCxtuhwJ6DD6SHdMMFnhgyEmwibdyNhGAGpoL7AtRXnZH7QK1ozdMuo3Nz7q9SRRb5HtqhmH2BjHQqQZMs",
  "key31": "3Xc3QW6xawqkHymiS6eZvS4rh3PTzD89pbTMfYpqXAbUk4mLA4JwTWNi99nTafJehMgsnEEYwbtRe2XZh3p2cSeh",
  "key32": "21ee7hG1qcbFRLivcJfKQDFvNhrMAUK6RqsWkKSC5tq3gAvC9QWqoigM1GBbwF3eUjSUEbtM6NCUBv5ehVBz6uM7",
  "key33": "fNj4Q9mzFzzcDsZUYWaXEAd4a8F2EaKM75BjbhkeDxXL9QHqHmdwQ2ineYYsnF92JdrrdjupRurwJvfBSM2ZSH9",
  "key34": "5ze3xJrGfWTvAUXcDaqbCqWNJQNw5Ro9rrRjEtJiRWGczu5B9UJEH6LGZVos3X6schd8NRduJkxZFk1qcK3Hcdoc",
  "key35": "5T4SWbJaHByD2dqc4tv6igwvpbhofghN558kTS3iEeYrEGZKrTfzcHyqwfD4hXEZ4xtoL6Y5an15eQCx4gGiQjrc",
  "key36": "2ezu8iMdn7PvxFV9rCgtsVu84k5LAXq5G2CGFq5q7ysyzAYqxjp5FruJgLJX9uR5pRG58rby7mmuLhMqcyY48XNr",
  "key37": "4q7ckTQ85pAzZKgW9sbBEE6DNPJQt5SvyjByqe1KGZvmQBJsBmXNrrr6piyKNwvY6RH2U81V4di6cHuN1vL5v3FC",
  "key38": "3KUdfPNwthsHsikZkkZHWfr3EfnM3Xhz6hqXtS318PUpAgfDPpmSFZHnozNXGqvXAoz2NVUiM2wixV33EaqUonwc",
  "key39": "5374giRhuU4DcoVteVYtGazJGioPAhetrnkLPdLeLS3mj4TRywVcwiCo85Zuk7iMpTMbsTVigTLi7UHoEYbfwXdV",
  "key40": "5anjZjjSruBjKCqAtGAw46m9XgArtnfUX326DJCkBs4fdkGVTNeAiYLmXRBUhsyMg74fqc4MhLFrnQDByUMkMsEt",
  "key41": "4SiHkVx86wmcgdGGfc95NSNDzEcxRCFrhVgL2Ah1kM6FPfPrjk78ZYBJvKgxpxWbHa5YYLTZUewbmLg8jmssjVTN",
  "key42": "5n3dtw3uQ291GevT8dTvWHXCssb3pv6TYt5sGUc9efjpR79CzeE5uKMotgRX22kM1otazxmSpWicUeEH7xDrPQ7K",
  "key43": "2yoLZ3zE4Uq7BTvtEiPgcgrwPb2tRHiDrytK1ZTxReWeYaLNZotpFabq2mBj2P2vmp4vmDPTET7txc5c17vqQiHR",
  "key44": "5mf5PxFr22t3zHKK58wPvwqadByzGF8c243HQMiXo1t3qdTFXA9ZGPtybHka2KU1qxd62pm9K2bvPWhuPhb7xXTB",
  "key45": "5g2zUQXt5GmTqQMdHbHTikdjpf2R9tWMrNwr3r4oK7BKPAqf2bYSBRpQEDnnuJZfSgwzSTDmuGCPzVecqdyiy8bQ",
  "key46": "4u5URWw52ZQgtSsNtyPqYsz6uxuGJYher69qsBAuuk2KXRL5aVkeW6KGQABNreqWLCeD9bsHVY5fWcgwCfBmtU88",
  "key47": "2e2synnKgG2DZ16ga2bZCZSmNhvQoPwWZjMn2FmJ5hAQenBh6XdUwfN5aNx98TfqQTNj5rmJufW9WSqTXHH5VnBz"
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
