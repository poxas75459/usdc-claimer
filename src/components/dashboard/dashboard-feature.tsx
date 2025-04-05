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
    "4W4fwaNhS1tenUEBLVpwd6pfLDV2MKwTWVndTC5FBr1VCJ66S6WoU9xebhaWAELsbXoBMRqg5dfRuTp5FHwvVF7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "svavkK1NvtnLz7HFkQe14Asejo5XLoJx7YPFhJEsHP3GEyWCae6mTJfaFyWEbeGY9LGdbucCLfq3VA1h2dbTk7g",
  "key1": "3LCFZZhLffJYoXPMG4RiaUruWbQJKqdQe9HQuS97DK6vHE41QwAFzFKpauiHgwhcLNNJQeSVSiVSodm22zDHNdWB",
  "key2": "4Wjd9LV6ebVSdpULiMY3nK8Zi41JJT3AiNLSLzhorm7tDiGnSaHozaWE1WdQG9UduR496f57gEUvDTtjxF8kRfKe",
  "key3": "6dW2Mvy5zDXpbuBkp6NFDizN2RQV2iZv2CkVCjeWQLUxW5mbqEE2kiA3qcdD2DAPCMfGYSur7gMP7EiaZXWho2f",
  "key4": "5H2KrB5FoCHGfiqqCMWoZSAoGTNtEzxiz8YDGEL6YnmaHWDsHZ8Jnx2VBZPTY3TXWbL2Ef8RdvumPCCVHsWPBJpP",
  "key5": "5V2XMGYoAr8am38L4WXwr51ve2BRjNvJ2Zbba6WtfTpxexeYcAM76DfXThiUTC1BPYP59yFrX9WRRcwGJH5bDD28",
  "key6": "3Mkwhovxs2Ye171JmJvvYmWhUikzwqk6dD8SU8NucE6UcVN22RvJVR3GNiAawcPboXVisUdxs8J5vNp7Yt5sJdv7",
  "key7": "3gyRFsccLD2nMesJpgPPDJNCXuzDudbACtEmXmFXAHmPRoC2ZQKPU2KqFk3m1aLLiNzmsYbNCCLK3LRczzzNuH77",
  "key8": "4Eqgccd6SWAggUrXZzDprTB4NoYkmy1kgzCBdYKg9w7YwXKXQadM1X3rirrdreHBBL5zmMvJ5Ya8tq4vSrEPweQJ",
  "key9": "67eAfxPR4WjRqCPRKEYzuCFoCAy89NjZ8fewEP57BiuEF1FzpZqPu9tDHJt3GEFSMsCv4zeDSxGocrtBsNuSNeFo",
  "key10": "Bmf4Dmk8UqtHp6wfKBFKK2tkuc58gnHbJ4HHLTndns48bwA8qJ7hxwsuka2oK28ExxzNivtkXTAdn1LRvuU2ubR",
  "key11": "2hisnqFQS4wJpNHQPJUmNxgu2moVEvfdYyr7M7d9ht1FpZ6qPQ36ncWBtksrwLzBo3dZKXbn7nKkzqnJN6keKTGT",
  "key12": "RaKRWz1TMtza6VgXK318RYva2RdAVm69KAsq2hBi7tcN9NaEE3dtZrz2RQZGxUaAreyv9VqiMc3Us7NidfdAXpT",
  "key13": "49SYFvcJqnQHpaqr2AyR3nFZ3DYt97w2jPxEKXVf9eFK7rrXqxH6Nd1Jbv5DHeskHY6TdCydfgMCGZtHxTofcQoS",
  "key14": "gw1FhuNfeW7Vsyr3XDHRsgm55ssmPqaB2x9ocr9Mfmk1ToYdkMR2Z2Ugpfxfkim9PhwaXUoVwEfb4Q8KXnnKiyS",
  "key15": "2SG3zoB1FkcWKiAL8QX9tGdxqcFaCDy6Lx4VHTPqWzaJmbtFcoHeHsVUi4L5uGHXzQxpfjpEV9qKNxyTWpCdhYmS",
  "key16": "3opDVzxy27KRscY4DjZsXUnpRZCP73LcUbjihCiqfJk2tRw8sNvG71D8jHo1dVwSXwcXXCWbUkD9V1KymLn1DCTm",
  "key17": "2Jpde9TnvwkJhVLda9ayRjGdBkRwAKmx9GgPNYEfFNDjRA8oPfNrCC3GKepwtkanucF5V1UYoeET6hXCPxPjgr6G",
  "key18": "4nweUsLZRvDwxKJ5PBP7GQvzGeWobXdjG9HQ383FW8qDHZw7sqkvB4EybCTQX15t3G6F68ZfYKEGG28rz58MQWko",
  "key19": "33Uz3YULQ7bMzQHdYdBDPe9TNJu5RkX8k3bUP85KWcPEASYPNxtDYddVyZHSoZabqqubKj4WzCf3tFCc7nWuASDZ",
  "key20": "32W6rmffKRrxMnTJKEZkqPMoxKoVct8F7E5Dpm5dDYVkLryK45HezsU14jMgLx9bHZHAKkFkbDhQmZZZCHpmzsRC",
  "key21": "qqwWZpccLYaxxEjt39qCmuKFw7DDS7SyQxyiseQdJxz3jNyCS8DL1YeKrW5sQkUJaQqzMPvKMBVZHpD7NVMGWGy",
  "key22": "2DWhZi2wEFnUDAMV4p8Hpcpjjm4yq2B9WDKGDAgb2V8NBHPmAvvL5BjqhosVRvqYse8nCVhHNBtAoCqAtLLLoaBs",
  "key23": "b7q6Q4PxM78c3F8yzHFpHxrXFinXNhSC2GjMUjPY49k954N19KJELmyb6f8JVTB8xyTXBdpcuv9y6ZAGuGX4Gdn",
  "key24": "415pLLi25nGzD2bCpy89tzNW4D7onndt58Nz5aVr9RpZzbxmitjHSjQtH6qo3MEK85jT5GLoPsjtgobKBbA4Ybjg",
  "key25": "DDXfVhz2ip9pcQR2GQZVf4L96AGEENafKDripimpofkjFFXA8opw85CusMXWjaqdRL2CRAKhQFKnVLSwNRHHZ71",
  "key26": "61Y8vaCYMzBYn2bh1QHqZVRDPbBHcbEAtZqmY4ojpq8sxp9dKehLXjvBLw1proDHueSuU3iuNosrBDNsSRwb9jdx",
  "key27": "4XpF9tQX2RarVndyiHVLuCQdc1X1cLoDbpyugDYq8KmCux9yJgHhmcK4YB7GBExt1k1muQNGQ9tHmb7kpnbJBjJH",
  "key28": "rpKPWF6aBQmvznSxg4VvRLz57MGtT5AG78TpyvPtCas6gsVsQLrtgK254i1fpNxcBGhMmSeSDjAvfeZPRdZBiLQ"
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
