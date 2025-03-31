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
    "5y9R4R2QVHoqsZWU8WbgyJDfAANC3m429TfCMo4sJQUy4aSKpUQWn4uaanBSJX9mopZ41EFgxgTvaTyurvbBs4be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSwUewpHLo7J1AkvTn9mRi5gb4wUDq7ZPMHRLP3771XfyFAJkCjQvsHKdgEhHdf1UmoDwCJvemUQ95xasm1Ags1",
  "key1": "5SK5nTeaftj7jLbC8XXyH8SnjvyKMAJTrunAY8v6Y2kozF7njV8BVx5RuaUvQNxpLNVoXLLHTNQ5DuwodhxXWe7q",
  "key2": "2a2Tsb5DtLLPK4fnZ8edy97WnWo1dNWgZhicbZcAbBz8VWHpqgP7L7EerDHw3H5N5m2WNEDLLVw3EqTNVtnvQGJM",
  "key3": "RoG4rSzHvWFvLt1kdT2u5yNNnuCaSjteqy79dpmuRKp4sDXDAm6zGVUvmX7jy6ULayeT8vXBP1gFeid2gUGXEjB",
  "key4": "3NCWGV6MQzhM7gfscQ8S2cDyH4HbugyDfZ9Fa9NhVuAEcqLvFKPDeSLNWJu5ufD1MbwPRmxrCWcL8okYADSUbMQc",
  "key5": "5JpxCdeecb6oe5pQmABpwGGKJZzNknivtAHZLio5En79hBHny9k7Ju6TF1U7spJWGnG6YKLtgAVffaFoEzRbyivT",
  "key6": "5oJiEx3V7gYVMdRXKn6oNpmwz1mGVqA4Aiw1arRudb8NKGD5g2w3Qrr4amaAamZqXmeewFmVbBFuUsgPjMk1zPEy",
  "key7": "5WjUXAGQe7UZT5wc37JvPKwsHejNxBpKpqH5YYG1f11tFSDpSuH7TqUEFMKZCfWLfYQTDGyBg2B7UyecJVCgqRkF",
  "key8": "28M5o7xAtXqZLcN8ee7Xz55XXVM4cJ9pLU9M9tnGrKbfXfmmJgaEN3WSFkAbj1onSNSwYBjRkfkfwSB3faGfWjYK",
  "key9": "2P5Yc6i7NRE5MYmaXNtGCeU5zpg2BNkWA5uiYpqFJCpLrbBTv599uHSvHNzhRGmTQ6dDDDW36Yc8DREBuQ3AJUZ2",
  "key10": "651Uju7f1C9sU2uo7eqw1fpJVKpoY8aD4FrJWBBgsL4yMHzLbf1LTUsw6VA2HN5BDWSfbJ3cuH7qGPioJJAnTHBe",
  "key11": "2c6e2fzkq5TzvXJGueqYveY7zS3zxoW5YWocDu8AWqoDoLSta1wn37YvCb9GfAfyWPXiiYffcCvjyYfgk8gZgYac",
  "key12": "3CL25RSpX2CzroKx3989YrzNoY4E2Q2sVS6JTPTUkVupDqKzZXYEQZVJSpdjNzMtnMcS335L32txyJ1GfX4Nv43",
  "key13": "5kt9aB8HopPZoeCUc433iAZtbsFxqESAstsxiK8qS6Q5vAZTbSTVkjnFVF4n4zg3cHQkPgvktVBVjF24YHRPAm3r",
  "key14": "2jr7QzbSZbygCXmeCWnc7itXwbHfVj6Cie2TS4dcVAddGX25JhDSBJ5Xt1FJHqhvjhzLrc9YrQCvspfc4YUFRQ6H",
  "key15": "3nRgNkd1V3ZJtt4hEWVJaTJCF2ep9oGcDKwt8edE7ba9DAYD1oXhYBRM12ZL118dpnpuixaFFv9S7niChKd4H7Fq",
  "key16": "4ew2V1fe1ZDeZCrRnJS9G9L7KbSrAoyoCBw2VeagvBTf1FBfwq8HqDENWndy82KTJgG8uAQJCpu1PpqwXSB1a4GE",
  "key17": "247ptnjVCXcKWdYhPQ5ojNoPj14f51FBjPvBkswsLV6DoJg8yxwTqdp2p4WqKR8sXARye7sn3pBR4vN4Hr833Mrc",
  "key18": "4urzZVWhEwWSDqeSn3a2FYtkWNzZ7c5i9rSuTAotcomdRGaPWzRRpEwR3RsSrYhj3yj8PhqcKCapiiCGwndd6hq7",
  "key19": "4a4PQhWeZ1zR4YainNj4a8CudhBipc81pR7iozwGcVDV9Svdo9AmwPrh4LRFyQoTjegqhb2pNNxWridj2jX2BDGi",
  "key20": "k6eyJ8BJok8MzHGAWtsCXyywnpAkC3J5pFgpWsRaWF5aMwNLxsiyMXqoPKoUGJjAccM4iMDYDEm9mgZX1cYr5JZ",
  "key21": "3XcrmjziLUnPSa6TRMkCiGqneUmavHxDPoPvCPRz2aS9NBUJMcCvCB1GtocNLroP6AjnZJWNB9D8wMYDB5gMT78c",
  "key22": "3uG9iLyMYPkkbTgBhJw1md5ahnxPEhCzQykwfeHq79Ar7YFdAtYZpXCkE27DEBiSqquBGR2EPv6vR3Jh2DbdPorH",
  "key23": "Dd9CceesdXKEm1xwfoF4wswT5dk9xSVhRx4Ngk5HpcPa5b5Z2nmBVDZkYWxRceTpwL9m7dt4MZojrqWReLcSrnf",
  "key24": "4tFhbe51pDnkADuzq9NFaY4nYzoaMPW6NNY5VP8g5U3j4Cb4ESnntyv6kiSEbgrL15udcxnVjzYSC2KuEEo3xybN",
  "key25": "3cNZqP1DvxgPFRMjpj5BeH2efkCLJnRkTHJjSp3TVNXAwswf161dmH8JgdmPpdfBrZa1rwv2YgmUqtjGKYtBvV4A",
  "key26": "2fv1LxpSSrRsjYiKDJbdcDeV2chANkBUvAk5r8BvxNFoBFXwEALmvBnXmrjpG9chor6LPNpGwhsGCJ4RtgPjkMrM",
  "key27": "5zKXeQHwqYPnt8kqQDWM7i9gu85eathXi7zDtfyMoR22nHrA7T6joURB6oHLuczqceHpQhnRBgACQaUPXB7EctpJ",
  "key28": "4R94psTEmcRv7Jh59YRRBujYhLu5j5w8TxSkTBwBUe3iCKqkXrczpm2AP2yuBmnRgjgRWSULCvLdU4x7wvrXB27c",
  "key29": "4BbdGrCae2DmTr2anqj8uXnGGob94UyXRbLcEWxrZdwjS6KhymSwkPocDbAr11NQuZA4UzKrvhQTVABc1yEN5RUe",
  "key30": "4YKkw8kUuA6vYiHus79n2VDPUej8D3e3t7bJ7bZjBPHvgse4tqQQsgsjgs92CHQyiqWnEXWGny7yNG3xuzcpGvYm",
  "key31": "2QTDL2iPm3ko28dGKTMnxiBE3ZiUJqxt5kvxwfAe3YadDsUBgoWB1cGvzEt6g6XmAU7EnvRLDKtfL66wKmTWfrtD",
  "key32": "57i715uJcFzmkS8RZ4jSm55brkKREKMEyJzMwhtoH38ixiYJrXUTrbYMT4QMCNztuK8BW3TrcVgoHrT3k7kPuksg",
  "key33": "B5PmRqWT136yTZRZESh2pqryuSjq87Vwk7Wre4fN4UH8jAt8GmxVahT8cg8uLkibqGeankWcTjBaPnVJGTFWV2R",
  "key34": "3whgNojfCAdxx7kaGmbFzHDLXVJ2HdwyydRT7j7MQ4TWzyTrVAx6VmtJrLKMm5FSPwoWKYpHF7cbi8PUGMM2hfCe",
  "key35": "4RbdcX93LvZk1YF7z5ixLF1nFqmu5sQzWsBBAo4MpfUuzxZZsR8QNfyTZ6F83CJh3Mv5qiQ4ohrd5f2Y38mp7uQZ"
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
