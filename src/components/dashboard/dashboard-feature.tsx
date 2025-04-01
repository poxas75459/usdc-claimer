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
    "wcy57CrjQJkNtEe5x7ujoFAUhvb8HVnLSeCRLpi942BGQfY5w4Muq37ADfQzP8Hxhy7jaFM1H5xo7adHHkU3iG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMxYwSVE22d7rVLKdshUxU6x2reaHjGpx9qEtKggQb598yyXFZKcTv45crHBfjMa9EQZQvMec6DMGdcL9JBtpi9",
  "key1": "3eyhDhH6zhq8V8zWgaQ6a43qPjyjAtCdT5ff7QYMRe2UCaGuDtDcdFxvNXQvijLLpibw2Ct4kdsohVPmGRLMZQ9o",
  "key2": "5P16xSvFdgfYekxpaf41DPDfDQbiFxUz8Ex6KfzZgMHCoBCfqep8xxMbie7C25FmtcjEKgtTjCUhrsSxRHbutPEG",
  "key3": "5bCLPrTxNnksxmNjvNyHBzuVzmy8LSVZzwgSckJ5r1poMyWjLpAowi6WMhQreuGN1qNtPpcVMQYr3eMAYQvygwfN",
  "key4": "2vGg4qoFhoFYtEcrnPVaczotyXqFcRK8xB1Ey3BC5BgQc7tEXpt1Ejvz2mXazDqN5xAQvF7Vcouc6jPm8eGdnTHB",
  "key5": "2JG2RNQcrNfQSLFnnogin6VDn57jpBULZd6XAFsobEb2XGmfEpdzpzqd9AeLhaXMZ5DPBeRVQLN8gKuZXiBHmutJ",
  "key6": "22HpQ6f4dEGPrBNUcj2cSzc7k5swbBykN68D2u8UN5qMqPhfUC9M7zkMp9HcZn2vt7JUGxgPbFsfL8Y5pTjyWSZV",
  "key7": "2rHK6zv4UmjoRYHZdYZZUX2tU3WPZk6iUwJxFCjp2PZ88CpscfsqxBh4Muh63uNFnqx7USLdW6hcwTE7aygkWTAi",
  "key8": "LmWT7gJ3YZzCJVRHupAY3sreoLdpXXfU7iD4VkQjTx6qLCBX1iqqnxY5bse4WdV7XwjdcTDh6sXyHwwYsSaRU5x",
  "key9": "3zXCS6esY2Pv7uFgDk4W63MCRdc5JqHqXemb2PH5Th7zV63qtP2dV3Wev2UFpUDTtj1dqYZp1FnCG8Yw6jRqUqzt",
  "key10": "3eGqcgxtTGWuTknXAHVNznvRZBobRbxZec3ZZ3MXehz18eK81f66PErEgJAiDWTvkfoyQe7iw6YQMHrCuJrEe19M",
  "key11": "4wBEB4yGbMkBPNBpsKU58n9Fhj6tE32Rb3QgS2jyXmwsu5vVwBz3ViY5bF53v2GabCzev17CkEeXzSQPJComzMFt",
  "key12": "3CD1ahgmqtNpKf9iETYa8jLs2hyXqNAcJCBVDcJFxHh3rAk5P6XCQWFo7io4rmHfdMWKchExKZHiFpAawrmgptN8",
  "key13": "32MuKeMhX86ecZYm5N5MK3b28noscwDnJ6pRkhrdvzhLQzxe2rMQN3eUYxaFxRBDUbij3pFo1BaTFUghsXXwuJsz",
  "key14": "5tZp6wDmdnXUH13awmBLuvJJSED9PRebXFhaCW3NSw66h8hMwHEhaZcz1CaBvBhkyuuC4syJMmiu7sfE4tX5rJdG",
  "key15": "382m9EKvgeqSgpp344M4bDEz77fq2tuzhxYzJ5YnRRUh2pGKShzJXJnZyC8H6YP57y2mtgyA4bdgCX4Z6jphFZ5T",
  "key16": "3ygjLkBc7CT46bMjQZK8VJnieaGrmS6uwJVTayk5cVfqfesJTUACqGLWN5kBbkH3jNXebTfnaTiTR7owxdSYkRn7",
  "key17": "26uKVPZqKzxYYYxsz9ZoZrFmnLgAxSZJ1HNSyjzYJaiCsvWTz2ArjqX8cVFsaVAvUi7Dpx5MeMLRFYpR3a1dQC4g",
  "key18": "2UDTnLNyckUZ69RyEA1ubYXiaiZouZHPCRigSXR3AAqm2TS1LtbzsLMeLT8wVczmEUAst8RfgqZK16UJwJB8rQyw",
  "key19": "23YcjRQtNtE71v6pWp7tdxuJxMF52h9iDRfQZsR35Vj9VtJdeNQvZBPjY68LkHCfQKVg54xuSJMzMHaTegcn4JYx",
  "key20": "2jb5rzYYFW35bF6fEqXPPWMNBAgiiD4kSo7urB3EK6o2kjjHabvNaW3XkxTz8iRTwSRiGLNczLykyAwM16Y5dt1u",
  "key21": "2jS4xuwP1Xh8pX4JLv5cY41D5BGcetVDwJc1zwGhDeY5Tg3EsETAkJ9T1XPFSKT9bSvMDm1PXmJVBB3qcVy1kLMU",
  "key22": "3AWNMQD3zzzSX3YxyQ1usxKzhDtyH5qpYmyBWK3SgAoG1VypZYsczgM6vpYW2uPkRHSF55NJmKXqJqgWCi1nsgy1",
  "key23": "2q5d31hy923tTB5FruahoZ8oBkSgfk7jKsZauhuoGy7ws9k15dWMqyk2j9gmD8LMANjxRMprra1J4tbdS6DJVyPk",
  "key24": "9x8GpQ94N1PnJttAWv5BruBuP53SgjurbW7zg4mLXnjshChP84TjUkZFTLPHz2kMe8xGFF711osZXxJVDbbajer",
  "key25": "5PhEGyV17NytwGMQRW9ZemMsjoQqZ4SE2SwPkfC9pJ5mqbzvh3cCdYXFkUXq3RxzKZzBVJG2WEkBWYST1v3nDPCZ",
  "key26": "3qu8qcJZ868gmyzPcN17z8n7ihyNhDrbnFfY4MnmDXDHo9mLAuzhHujEz1911siekGwbHsARNFCASBCYKirdZWVg",
  "key27": "4vHBytgWtUqFu7TiJrduVy95ZZhG9riyH1WHietBU6Y3fQ5g8s71oBCDCeoz1J91AHvSrsmdF5wZJpiGrixVtLiA",
  "key28": "4CxKRR2ffaNMoAkKzckSQvYStYYqLVSb1d7KNTcwRLMdshSi1roQSHgkvSK3CudiP1K9ftCdDFKh6fNWNBw5tUMm",
  "key29": "5XmYk1oH5ciWhGMoSFpQPMexVKob1LnxfhbgnEbVDwNZUpz54yfm8UCqAfpr1d5cZderFaXh8XRwUQ7CeF8YwBTF",
  "key30": "3fsyRKCb7qFkcTnHBjHQptYFju4qLuRC5uYxaikfNvMDWAFwo85dR2dodgDkPNFaaFirsngLAk6H8wgStQjPfbxr"
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
