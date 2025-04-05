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
    "5AUQR21sohCRuGiZAuvo1QdRHiMVy6YeGHYpR7Loh6ergvu3F6H2tNrvqEt8EwvpUGuow9mnHQoJjPnQEoLXpura"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FkjV52vWL5fYhghbNSLXyqPuRsVwmysG8p7ncrC3X7zT4RqB7AYchkwVwyjrEtAji5bHk8ARqumm3DWiMFUMA1",
  "key1": "3yhUkgmrH3ERXzcChdKVSP48TbBc4a3U2nUQeBJZ2uXm4f6rcUfhcBxir6J85od97SH6afgp3Z89WU5PYpqGnuP4",
  "key2": "2Y34f6mhdX8b35KxAL7WktD8P3C2rJL2nEGJk8jXkqeCzTsmDaMGn6ZePq2q1LPsd84oS9aWytPmHcAouHim3R2u",
  "key3": "5t26vMWinSr1AH12j2euMQTHxvBLpr7EsTx28uvECUYsdXe7eK5e8c1o5vZXmzYGq4QwwdaS8VhwDPa1GzWdDMNw",
  "key4": "3i7bWmeeX2wvFMAtjHVKSRwPLTMnra9iJrYykuVzgPNZpWebKmtjjv8QHVbDrLA7ayfL6QbGVqgrAtdBeMaKcEZq",
  "key5": "5WMeHEKgAHJ5L8VUFwYoK7ousgVhvPeynY8twLFbKLiVyydH8Bbzvgyc6EqZQVepFBXD6YKByLr85YAqsrYXrSKV",
  "key6": "ESbuK9ZPoHVws7LDCxJUCFgHpXRj4aMFWUycpJs2x3naAj96NTyLA4HwS3fDUGf1jmuJkydKtutLJXdKvqem4jH",
  "key7": "24VidpdbEpg7AKHdpjjN8VxNfs51AuhDWPMnAptksFjXGwsc2mN2SP5nWMX4KNm7Jer7LXLJgmN36jn1A3k5wyQA",
  "key8": "4YfD912zNX9X36gHq34Hqt8SpRxgfDGW3YZobzroJNPJmDBxZMk1KgwPKwhxoCcR4p7yvBxGtmPLTx43Gz8yhe8i",
  "key9": "3R9eAu3PxGomtaXwL91kE374mgCTDrS5Lo3acPJ89L2t6qmQbow3iQozayLWBrH426MrZahjiX2fjkBBrK1aw9nr",
  "key10": "3ZNK7d7zZTHjBPzPutXR9R565DrsBLJzjJ7JLRxUnL3Sr3seojZknHtsNukUf2ycpewKwdPrfaJWscV8SAJ4ZBz7",
  "key11": "4dQLLqiugWB8T2byGaEGeXqGQTuoG4AG96QicrCE7rh6H3gacMihTJXnChHw6Zhg582DzsUmunURqJqNkssi6xVX",
  "key12": "3VxyrBg8ePxGWaCVmpcU3JHABtnWqLPZcmEFBVMRSkP3w9HXo7LPjRN1scR1T9fyJw9Pb84zc6CudqhbsW3QpNaN",
  "key13": "3DP2SL5TdGMkormCQdjiF52Q3SweTxtcQcEizvSmiieYMpABFHBrtFa1AD2W7V7AaskhUhv9B5SKsaopwnRvhepk",
  "key14": "2bd5e3ET1x3JCUC2cdb2VjfsyCzZoazccHFPWNnW72gZBFgroT7sutxwzQ43pnsKeWcEcdZjYWkFc3JGRuEvFYT4",
  "key15": "3Y6PFAq61GBhY7kNrgu4cWb4xrzePNwtDz5yy47JoMVGc9Xf72RQy3LSbnam7QsBohPPgZ1qHMZHjU7qTP37duwS",
  "key16": "2EsWjit3MQq9Pjg1sz5odrdG8oREPMwS8AVa5qQUbYM8gBcwJsHELVUckUs7Wa3wPb5ecUXodKobxdp4DSqo2FjX",
  "key17": "4K4budYKtsjhDGqB92AHZnZXgqdehDSeTSAnzCdNcrRLybbnn8EVDwuoRm3oh9LYMoRH5nZLAUAQRuVgYbVaYUXW",
  "key18": "EoZRSd3edsCtfkQcjshyv3e66tidagPkePyTntHZ69JDVyRH1gY6H4uS9rQx2ZNDW84iLQx3t65E9eoyDkUeUHz",
  "key19": "55FGgiTtaXvomq4crP5WHQeMN8Q92nNx8gMwcsfQqKQDBj5aHwShJhj3PFitjH6kkKpSLuaeBcmASKBvY5dnPrxe",
  "key20": "2DQa3pTgyJkVjubCscSZCyrtv7dEfyo9B5fPxMKCwsEU5tCgConPhU246R6tQWw4sNzdDmo41iceNBrVkBDdXtjD",
  "key21": "3zag3cezEkkCHS6AFzm4amm1TqFJB4qduz7G4EyurgqeGqTpWZeMUZDJZUKFwzwQPc1Z8uRhHbHeK1h2qKtoPKNp",
  "key22": "2CDVBeFid8d65QFCMafpWboJgY6yB4dawaBc7nHCjGStRU9fSwo6Hq79WyS9VFZheySUNrL5zmppkKUjNM89sCPB",
  "key23": "2j9kgKa2PfgN2FAE5NHKQuRdLMZoX3FRheMPruW3A7tctiBDKy4ybL6GxXkWtceR1Jjy3WqFGWA512k8qhE5J15D",
  "key24": "23Z7cBHAwkkNzbwJciA2VeLYb1RqMgV1FhfCfwpPTTcrFJmqbKLNa55LMSF2VN3GuJJfdqDUV4GDhgtDUjeHwrS3",
  "key25": "xwKQbaaGDHgNXhySnD1H6qCRajj22Tk8QN8CWxHXuufjwJffqz6etsJT5PuvBJJjiMLXn6vAFmngGiKr3UNUHzE",
  "key26": "2SV4fbWeJMzVq36qjKcjNuaUXQEgio4typND5KFYXcfhb12kckoAeg5Yu1D9sqUSCSFSyAYTTnvYAHqpc9b4j3rP",
  "key27": "5BGNtiGvKZuDQaHm21Yy2qxq8kixC7eggCwj65ntEkbhnbfPrU9QrcnrzUyRrTLGxXj4sx3oBgDJXwGvDPBcgsin",
  "key28": "4DjSjuBiU3HnAyp5EWVZyEYwuoupDTGc2nYf7TjZKJYLM9qnACka5AGw1dXfadJ7DobEU3w7B3FQhv12ExTNEjeB",
  "key29": "2eQkR49QscygdWMQ3tfNAtYaHUBkzbJjHSF5BBF7cBgPphXHNLgSn5x1ghqvR2J2A3qVH31ikSfimmtDkmK5jVME",
  "key30": "2rD8FWq2jLqne9KBFVZQMzM8NY8RBHrMMLLe5AesGbCEsRRDexSsfchrpUeENdMZvjint68Y2AHVX2KWGwmS6oht",
  "key31": "4SPhjSPjH7Q8uirvbyQ824YCYBk7TAs59EkhuLg7a42dz6TEYkMknwRWb9w4GD3r8Acpws5rJvipSw7NVybYKo68",
  "key32": "ES1NmMaPQFCLyEHVnw9F79AVGzFffFjPJrbmZGKPz82YmdshLCvigLZ3fJjs4tSfeAt734cTTBeFmVn7e9MZjPk",
  "key33": "25LuP3CygN9aY9jKnW8P2XDLuqmDCjK99tMMuzPN4XepVUzEo2Hd3mc5uWhLkmG79q2r69ZCbHPX51wob8k7B8tS",
  "key34": "zRBuCJFySb99VtUm7fS5DPyHMeaSwRuhDBtVcFQrVixavw4Xs19gYJ6uMHV5YUE2KQtxajNicPRwnJ16735QUQP",
  "key35": "5h9yEFMnvK86PuKHXuSjG7t3rSETig29tcdVTY7nLS3MBPbidvS8jte9jC29UGfgSdD6Jsx3TgXbF2Q7pBW6HEh1",
  "key36": "doRXdgwwJeMtAahyWzqDV5siiFMTxZY36WjZQjCSiPeGRqa4oAKcd3k9eqqi4Zz67C1xEyNH2se9sgxZ38eCkTU",
  "key37": "3xRv4JXeewAefAcTky3pd46kJBnzTGmMJP69RYzvaQJx3YtLf6zatXCzLbszEt6qLyvm51s8LHEnobetE25e5N1c"
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
