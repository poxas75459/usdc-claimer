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
    "35zRa6WjtfLXapJuRiZK2fZbwfMdMrVR3WuKtQXbrtixebB2zkd8erhujp4oUwSoTJZv6zV2wNVYhHE9sHMgYJuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ju5A9QaWNdjpy72AAJY4toBMcT4SuDsvwyxZBHjiNUa3cAAeWQ8dHbpE73gNVmQmvt8jmcquLscAiHyGpVjvyzY",
  "key1": "5XBqHe8SF2tHn3PvSxQDvRUN9MAhiX1WBdhF1bozQn6ZzZzJ6tQVz1zHqjvDhZHh5ftYRW3PZrX5tGoEdRL9gerb",
  "key2": "Hr948vEDDoxWsZJqHmmmGXgBJCUDLrKr4sbNXUJvh6AuWrMtwh4ejx8GXsDwUyG9rxtpSskNXouzbxQ1CMZeziG",
  "key3": "47jV2oCW1TzSWoY3GvHjUbbADE7A1k65SQNbhtU8kLyRN4Y8S2rayM1PTyDyNL5UdPgPZMxybFqPAFwQhrWD6fXM",
  "key4": "5MKjXdnZ7BQg7k5pVkf5QFz9u6DQkyDqojL551hfhSVvGUEK1aCZJ3VdURdZRK9S2N2uPZDuVez4LaHCafCJeoRL",
  "key5": "2VSEKYKTREWBiHf62U2mUtMkJeodZNpsmuJjk2pGzL95GH3uPhXU1ZpG3XhHvvErFEgNWKgKiy6HgG5ua4BRYoUU",
  "key6": "4ZhjqDy2eRhYTXE6QrftkhmdHdWFTpZUDuJHCkxvZUT8EGzcNSjD8Av63z4A6ragH7NewW4HWjhfALhGnq4ytzQJ",
  "key7": "2YBqHrubTFioZxk9wzdrYcTguHjQqZpAJttxDBWSEXaNGRACQ32hHtsC8xsk5pQeAzmjwiY2KNhxxQ9MeS3TCGzT",
  "key8": "2VPBJMZP7uTwYR7MAG8Jz6nLdYzdEW5GbcsVmYvRh5fS2snGcG33CgYfVsK3fCJStVH91BkQuhKSNhD3fVQkXUDC",
  "key9": "5udEYhcwr5UJzZWCMGn6j2biRA7UmBQjdBLZ4MbhcuWeH3kD7AhNUyaNxH9wmoUR361ZRdAoCnxVZPUU5ddxkDS",
  "key10": "2AvxZQqkxu2f48PJK4vm7extgyELBK5uy9GBKamMRzVw85fGmhQfBVPjMKoAVMBxbRdDWL2VGMStJ4pBag4t2CgB",
  "key11": "2ctY6bcqPP8Nt1MGwDz9N9MVSJduiXArpDdKz3fMr5gKYJo7yJnmLYE5YDYeoacnQooxdMM24m93H3qAH7bqRvEN",
  "key12": "2AFCbcKnqNMqdSR2ZkqSxQYn8H4GC2s2QXPEtULVFitwG8uEerNSvvekJCQ3DKeq51YnnLBW6k81MKW2xBF88fGb",
  "key13": "4GeESLn72xi6qWDgRVJ2vqq5qe1VTRccpuBBAmYoyhsjCmZ5Tn3mHtUKYAnuAfphQgfiDEv8tmW1Sa21WfiDbTVy",
  "key14": "pnzQxeGaxJ8szcQMayGoBsB98jZWjj82nGf1kpVBtZJf3bEoXNKLAJUvne5u3RDRJsGzWyYCiu4CscEP1iDN63z",
  "key15": "348upVaHwTNxLVcqmbq43eR7Xfe1r2WsWh5Z5HtLS7PoNBo9MWX5ZrX1jkEtNo8UGSUbRVkLKCRBnzjhWSmwnHhv",
  "key16": "MhtTe89MqEUCvfh3A9bHEgUeFmWW4CBXbMjJn2VbQ4eH6NS9X9t71Mhj38WAerwe9uLTeNEh3XWHXhR1ch9VoAD",
  "key17": "39weZKKphBayYLVfS9KC8SBciX54V1sks3cFFVwXqmjF668BK3GAEQBud27AhCffaUjq2ggbNTwQNcATxSBtdX1Y",
  "key18": "4ab35PurPVxy3mTDTe57TRKFf8mczBuZ68nEn4JmufkU6r6DoqQzmv2j7fUw58djjuiuPszhnne8GQU7bviQqFgA",
  "key19": "38PmPgiuYaiQw1ffZggJ24FtjtCiwP7QoM2GPHEu5rv44o3JGUyLGVMf7wA8EGVHRZvPjxq2C1zmcYC47CZsg71y",
  "key20": "5dzb1RKwLkyfumrUX3urDTy3g5pnZ2p6Fo9fCQsEAQbxDchco5qamysQjD9KJuazRggweGGUBJgrGxEe8Wi2FbYk",
  "key21": "2z6pKRfi13Wota8fpsxNrfVA463xMwabBgaZWbgwNdgaMFWjTRQrYXAwgGfRoZbyiXxEtYQdgJZ53bhiMvqppUtd",
  "key22": "4eZpndfgkNQLFtxqUNo4PUtt791zrB8PwiBwrD3ULGJBk4orniLXcnS3H2Ph8nza4bZJgUL5RyRqUUpexx3NzJ3f",
  "key23": "2pkgoGt1u4BkgZ4Ae87mvWowKBDYGmBxhJk3qyMtWKXHEYNGfX87CQQ6L9sbk7hmbXAC37KVcN6BPvdbu4RNXbUb",
  "key24": "4VTaW87JqGK2o92iBu6vjGRtExVmTrDBZHcymA2XjKQRqb2UHXZfWBuyHTfdqp937EamEGwusJ1MZJVn59hFVowJ",
  "key25": "5TgEckkJXoVwxkKFCix3Kv8HuvBVZMyFUzbnDruLBMtTkAYSSdqq5HpCtn4w1EU5TXRz39XyM5wnTva8c9GXj7XV",
  "key26": "51DpAYLzZenXqffukXzpcXtLcWspZWmXWjxW4QgwQnK45AMk7SqMtrH3Epz2d8q6XWULMs57hUAURG2uS8m1hE1q",
  "key27": "65zk73SX2C5HjivdVC3ZX64du6DtJN1XnzUmmmCX2Jq2Rv11Myqt5cJ6JvhqbrWnoZL5FV5cNE97GSwMsdhyUrDk",
  "key28": "39xNBq9KMqtfeonashYRovsErW3UPz96auW6sRMPzULqNMjgH7LUfDj1Bn7GeK9qJR1MDCAz5nzfjBEgtYQSkWch",
  "key29": "3jiRQdwNSjpRVmfnxCzjnjFJLVwKyjxBk2McFBVKK1pVZQhqDhMAh9XThaKs8Dkdo1RPgZ4sYqBcJyFybRybyZpR",
  "key30": "2bZWNZtotcvzW55DZUWNygSE1F4wp47zCY8HajdanuGTXzuR9yLepbLWGu47NBY3X34YqmAP3a2XsXynnQir9F4i",
  "key31": "4v6vzX7eG4SbzpHaGWdgHziwvH5LLWPfWLumGitBeR32hNMxJ2MuP1Zwj8Xd72LTixVN1ZTCmmbEfG9ddqi6SrgA",
  "key32": "2rfUH1ZSpK3XAj71FjwVynukp7G63dTJSZ8pyPivHSJtPGsH2TL9FVPZ98bSd2n8nA69sW6MAYf7GhL5bbjbLe6B",
  "key33": "4VAUBiAofqLqf4p3EBg8eMVpXGbDzmcWtWJ4TeCzYFvUxt212WapRpENSsdV1EtQoqtXKW7AJD5QUNVPNSZ1Rbpz",
  "key34": "2jegbQfEWDHMCCSjp96zUBrYmvYDy8X8DsWy8JNV1mAu3bKs3TX967tFKfxdTZgEhjX8JKAevUvT8si7T1Fy7dMe",
  "key35": "FcvgQWU457xw1WLww3oyK1DDCecLKgkbDBaTGpPsoNegn3phHTQ9oHx1G9sL9KPFHrvdBuv7hgJ27qiCkKu7Qky",
  "key36": "58WMMtfK43d3DE5v21ns8SWisp131inFxZKE1Zo8WtyBy5jCGeMNwFX27iaJyRXoP4F9Jx5fsP9DZbphoy2dRVv8",
  "key37": "2hQsDs9xjUtvinsoc2fcSyK2gRo9oeJbwgHgCvRsupTeg2m6M7DxeMxBNky68cvBvFh33opEB7crkncoLn4cDc88",
  "key38": "4uk7jbPJpVt8K46BRgt1ui8WBVYEFoRKEWUiRCivn1MSziMdxUR563WGuSv1a6QfBpMcmrWA4YAoo7fzbGWLdcbj"
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
