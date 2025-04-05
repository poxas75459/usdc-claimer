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
    "3Lg7YxkAXKoznHUQhaUcu1dbFuR97geanMFvwnKqcZKHEkDQYa6ZRHMTrtaTGmo1dMmWXmbuhMikS5wYsoEatfyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPR8Gi3ZCPyRBcxBJtHzQoDHDTTFpzYp17ZS4i4WbkZF12tdX6KpK7XSabUVp21awZ4qJRKvRpLfo1yX6ZrhZT4",
  "key1": "3Bsp9AUo212X4W7dBtcptGE18bKDaTyh5twqQspEs3X593SaZn8vr8AiACMjDc8MhonHusQTpdaUW2A1tMTA1LyN",
  "key2": "2mvmH2gbXrUscTohoC6erNzeLjE1UgBqy14VsLDvGPuF34cnbMnY81wwYotVEAVwXWPyFTpSWJPw8abykSQSAb8U",
  "key3": "5seBQBaUJjDNNgA5fEPsKf7riZCzKfkCH15V9D7SgGnv422TfQXAseNQE3WtgbTJMYGJ5anG8Bp26cR4vq13gVBK",
  "key4": "41YHk1vYvJff7BHpo4b96PmKxYRd4gXkFyBX8hwNkdAEtoqKyJvnago1kTrfJxFVUGwD7qCJBJdHYhoiqPbgJVX8",
  "key5": "64mwXVKHooHpGMo8rHzoNHEceT31pDXfBKbu2agEHhFZzqz7qLpC894T7YGPFcV57x8uNzAzyqpvmBo6xGwSSUA1",
  "key6": "4gdQTu7FNSUyid8hRFJDUKWSuvREAReZwyPhYGftz7XbWaX8hGGytwrkcCdFHaco43NMbidURGJHDQJxaQ717bwo",
  "key7": "z6RS9TjHsjTMuhUP4vPu5vaZHe1peYt8q5Rtojt7ZQXseTyzXDu3XBigR4S3NaGBb222F5CBEXTiMDQyucDAkGu",
  "key8": "4v8JEZuSW96QXyEb9WpaXhq6HsNUxzcEkW8g9kzm33L1dboGhRyddoUij3dUjcnfXRhg2x4ZGFpFsWjo4LjPUNdG",
  "key9": "fDPJE44c8vvM6WHkarSDEWNoJCHhhiPnxCULQWzpf1ZR2JpefCkFMLwww3h22HCE89EWAcFNw4g4ezty7h6PuoZ",
  "key10": "3ZWifCNqoPMgNB7UG5eeL8mHNQ8RYftUvbTJeKrQPPP9ecrcTZtcbf5YBDQS2DosBE6hrnUD47nbmnoBoZyALRNy",
  "key11": "5cWyW8irHKL95H2a5LHM15ABmrrUCZBemDfXdRnd72cDEKvS1rDTud4bFCaWEXtBwX8nNkKgbXL2aP3gqfqN29TW",
  "key12": "u1m9tyHijE7sKobsUgJ57kbVPorTkYX7MpHqzR3ZBfShJsNfYuMdL8xUW17i7dtVX3rzkcZeQkEcK5tT963bVmL",
  "key13": "672MJUrmi1RzMQmFYg9hSnsVbF2ZZM1jwbGEgngvMKk7omvsGYGrhwk83fVkEvSV2jBgHkmF8dbVF46pmdCzz2E2",
  "key14": "5ePjRqcpqkyfwjJUu7f3xE51VogYoGVon6Kbnwism17aETgzctNZzsAoXAieNbcfa1xZ9GGKPk6gRB4iPEj6Wddx",
  "key15": "3ehgFJav3mD4z1ThqxspitiPACMHqtdWjjwCpwbBUAtc9JwkJe41ZcvhKzVPHWQQeh2UhELAaoLueREKb3h4iZRS",
  "key16": "2NFuB3zkFtL62ZSLQKGXSDDtAkqXYqtUj1u6kmA4R4Y1PGRJ4d3KkE3dS3Jyz237x6VQvPE6zsCAU6wootFmvxSd",
  "key17": "2xaFfvvpQcT55zsyBnmekx9rRWVCzbbFKVhEQzSgn6Uir7oMqDAf4ZQ7aQ1hn6E1gm1YEGxE31YS5tgmHTA9N8Mc",
  "key18": "5ZLCXHvqbc7SgdkbpGEhabBMmMbeuUQ5s17QvGB5oHoZ4g8ewoKtaTCAk5bZuZMS7jD1GaGbpc2CENCiDMCzKRhr",
  "key19": "4XJe5E6zX1asoKAFZvWmK2Sfh7KMFJXFWK4yeVbE4dbUdMyP68iZEaP6A5sp7fhkag87wP3yKkbmz1pQ4oX9edEw",
  "key20": "31SvvV1F1MCUkgYherK9Ke1UHH3sM7qwzXzV1oYa3keEvm9iVTt5L1nQRJ4VMneattrMdWoYuQWAQggxmSj94qwh",
  "key21": "4kN9SttRxnnaSvYGD3buP47q7D3138Sr4fyPgFTYfziBghm3Z5K7M8w4vNtShL5pRpQgmNMfgC34YRqKjmahFafk",
  "key22": "P7DH6pUevYqGnWLq5g4zCJGnVudWqqaxTq3Ty76voSVCPc9s4c3VgjSsGZrTEPE4iyzCYXuoJDLRkfG3FSJBvCg",
  "key23": "4Mtibp3H8mifKqZQ46HcdgW7ucDQfpMe7tRrZWjFGrTQ2Y4jzKGT68AabZwnDCJy7w6fDRmeyMtknbDG3J93pJRF",
  "key24": "kHqjmfPWLyjXZ1CmvtxtfEru3bSGPT977KQjRthsYEQFHk7DgBkBgn7yyUFcwhZdrbgdW4TmCXZqwdeF4J4FcEY",
  "key25": "5bZLueJiQpGYsKFk5ZW3PHTQ1bbvEh2sFsCST3d3299QK3iiq9U7ukPwe8fyKgXtv8kGt5nKDNpVAqhyvK4686Y8",
  "key26": "3cdf5mi9LWtrURQem2aNY9mwjoUg7ThkWPBvdHPLfQJMxoDqGrjtqXmohN9UN9H8ddN5bP9nFzkXZCpibioeLqJQ",
  "key27": "pGpuDh173q2QoChJx5x7ZqB5HFY2ovqCZzswnjddnbDNfR2GKVTepXwX3fHW25iJA3i3cHYXwegeamAQVdArH1w",
  "key28": "5ebVoKeeepR9P6Fxrhjs8toLhtj15AbJ6DGYP1XBMvhwZbp9hzCLSqzjPjuoX3sfjaiewwFeTugWHZZf3EewHcAu",
  "key29": "j4G5ttiVDraK4DGP4XW25criYPg379EwpnrYT2bR64ExTDNjScjhfDf5nTKSNhcNfJsvgAynScaGQk46WD2W6yN",
  "key30": "5uE6qZExE2hP7XD9k4DjXg3MY4K9SqSbskLUDTkKME3kQ7FZf2BHMidLRpQMebVCsgwcyqTDiJxg6X7yAPW1ETeZ",
  "key31": "49fGaMsG9P9GtvbzxMVDsf9ZxuRCKpHCzMaVgPAnw8yDikYLbnYXx4jGrBoKrTPD4xgAJqGkApgLW4ac6arhFVSL",
  "key32": "58DjF46VozvLAcN9ZMGR8u1Y1aefvJJk5yWf75TmRVX1H4baxrviLUGEJtHdZSSSGRnM9mtoiZLFGGjvi32mWm4G",
  "key33": "5dwBSeafYoPsV95Eu5SToY34QMqSdzWKPUwGWWFssnsg3HubihchYT9GjUztCQe3bfhAvzojDn8EFgfrZhNk9QDw",
  "key34": "5XvX45qhwXXXr345m2hFbmY16DVGdRuiUEekaiipcAwA8kdmcgKhRqa868vwRZ6yVunnwR4pswcKUXiWkitCVGtm",
  "key35": "3CDSnmT6tQmBj8xHjNZssBngUjGSo3nG4562etHS3mZ7E7FqVC8xstfXu9vqgR2AhWLTqB8RQgqJf31g2K1k9jkz",
  "key36": "4cGkJeLmjrw8ZqpBonuvZSBMvbXpHNCZ8zM4mix8JWim5tyANWt5XSbmgWEasKSkUAfTWMBQZkjptqPr1vbWgKSf",
  "key37": "36SxuUkP3S1KHKpopVBVsPFa4Mmyn5upDr2HPpozAF2VEPDDXtpYwtAtTAMLbgAmePsXadQKrftrBkRHNSTB2bnj",
  "key38": "58QAKLw6K73uGNbdwj7GahvyYER8EtFuhh4KpMPVs6A1Bvb6irxfow6eEZUcVgntdeJVzYGRCdS2h9dvArQrfsfX",
  "key39": "A8Yrk1GX77ex9QD69bNXFQ8T7XLM8L9ERdx7pt2eHF6fwaTn1m2z1Nc6VCpbecv2TH6MVJ6bsxEqs4SQqBswHC1",
  "key40": "4RMpQNruYYd6n4PJFdCQn2FZkDJZp3PPNfDy9w14yXJ181gTGYRWaBDrnpNUWabcYSs81oX1bieVXMPcioBRD1Ca",
  "key41": "5tuftXXvbNpDZ7RmdFY2KgcG66AfKPwz58dwmshWkwUvXngCbZCu1ukJ2BpbH1Rx7Az3hexNoJWXKoQAmJZpNQMu",
  "key42": "4yZMJ9nQvLE3iYYW3WShwiMQZPoHSrTJ4K8hTZu82hRcrcrgJrTFRSSQcdyFW6AtdhGoHXWjteio6yodRyBNgmP4",
  "key43": "2JxixQ7AWKqv86kpcmVqhScNyZd8gTgFAYDTun8yVHs5AfuBgpW6DDtL5KQmeE3aU9eov5ewqMStquJ9kvo6qamd",
  "key44": "65nNQ4MoFvS9K4pNLoo6hNZJN3NDRws2tKaKwuMZnq7Xxht7o6s88HHEtsVfkQvrS1qdyLysEc9oju9fqcFiZEHS"
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
