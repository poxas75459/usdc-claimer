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
    "49v5iRGWYqYEEjBJgXU6egvrvR3nqHgB2aJWE7gJYnML1wpRphonKh8D2PZWoNgT1wcYcJqeS29Wdo1PMbsJQzs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2XKoHj8zr8d32JaxpEq1Jvu6Qxy7FYVMSz12iPDg4NDUwxqJJuCi5MS1nQPqf3GBSanP9Arq7LkoSU3xM9bFVc",
  "key1": "3dYW1D1fxUE2eezy14AZrnneuWgfv84EH7NXrnbfCb8kemoyfzwAJiEPxFhRGcSiWUPD45UJ87rE1mzEKEzTyoBS",
  "key2": "5jxyuaLWaen3dBZ3Kvuj1jVqqS9Kw97DCfbhN2Pdmwp6k4JVxck6LdDT2p6e2jScFuA9SYC3DzDHnTrFAzCDda8U",
  "key3": "2v2N8XNGdnwTY7CFzbCYFg1nUTZAbTukW9oaNtPejQmiVBjfiXZS1s6QQNf2hMMqQy8rES8eDozH8x72xTxkSVaf",
  "key4": "3CYKjdFgrMNF1ZGxEyQu2yBYuiHtEVwj2Jny1dQJ97FSC2x38SbsDAFDtt27CAXKvfE2TDrcdV8TmG4b5tKwnUaS",
  "key5": "5n2M7eZ7YymNte5orZxMQkRezyBCgsqucTLVP98RuD6sLumrvHoQadEofcn2ibsZgjCitN55YBMKWBPxtprqrWMJ",
  "key6": "2JH6Z5YBgoYNTMs8oCPUJw8DkJhSGfpiKRmWJNZF76uJDoDkv7qV4evx75q4ixBcDKw6Kzu2r8qhMgEfMDyVYhPF",
  "key7": "56mBmE23gDvEJCUbKRxhTKJVCCn71YMwiBZ7pDM5bLwf6tr7p8Qp6ycxAA9ezYZkYHTegfohkmLt8ejhuEjD697V",
  "key8": "C3fNzdCCENxWWVfbMYWuSGR9toHGLkjhxh7URmKssepMUXwYHTbsvzmDGLTw4KPaZsenUDjynDxA1xaZywVjuPe",
  "key9": "3FHEFxvvtTpWob7xnUS168cFTfs9W733hGDbBvRNWBsDzGifw7xfLtG7SjwdzwvXsw2ZSBuYaoqPVXu34u1xXpp6",
  "key10": "41QKHMiQVc8XFWkKbnokiBjRKuVsgKnVcp25XtUV9Qq1aQumCSf9ZSqqZmsvMCmogoVqCfv6CSDgbwNTSrcYJaMg",
  "key11": "63uZHj3eCog4Uk5eT2ogNoziSsFMXcnAbJApDcpzCf3EL8gFWSwKoU8B4qCBk9teVVLaqFs4PUgryvwyU2uoFrZQ",
  "key12": "AtHQL73cHqPyBD8RdSDXYGjuQbu3KtqCAkFQ9iQBvjD4Dhn8CPmD2tqfNsjazEsVWbkrbhbNqF5cQjbRyCqqB7N",
  "key13": "2rbP2t59qpXH6q4ueHbjxeWw1XhVdpJ5KtAzuEMWS9iGkMhw9T3uPhakZ9xd52rrPvpuVaspKYFe7K5k49jwDTtc",
  "key14": "3pZbMTwjHmfS9zVk7UjfB9AwaYqC2ExE7VUWgF8jkFQcMskN7146HgQqcUsk79bitUsPRfbQSyuexYcYiRKCtA6v",
  "key15": "27hNTjnLosnzG1YFZ9WriDjbo6BsaVMmKyxeFJ2f2NKqvsioiRuBPvwUKznGLyGuh95rCnSLmz92WRQ5jvKiQKvt",
  "key16": "3tuEmZ72rQvSszp74iNrzniUWuVyYQDb8DmUg4AtgQBVUbakCKEPCXL31R9cBt89Au6uosTUtApT5bsAWkXiMY1o",
  "key17": "DFB2KqQbo82ycvM4omFdkuxWDbcV3ZPomP7GGb2PzgsSSo5iNWfNjsTfQEX8ZMsKxrCnjRSeWJ9jBbot96fEBrZ",
  "key18": "DWHxCEGUdbLBLcrcc8TcFJEQT2wqjruRLZTMcg1ac8u57HnzwhmFZp88QatCGsSdkKzRia43Tq1Eb6u8CjRz8xy",
  "key19": "3BwDuAkLx7ksVNtVJuGe92aQSy6o5cvysdfR1tRhxejsX1dDBZ5pkxv8fS1UVbtw18DeWVeDRS3p2UWCUrm67orQ",
  "key20": "4n9du3z4Mdqb1owaX8wVyYmph2ME52zTNqCtccG6xQgd26Fbfno4mdrf1NkKBGHHutisyh1FUnAoNuDd7spNnuyC",
  "key21": "4eMZwtvnPBfVhfE1ZnTxdCYwPtdfJJZk1uDqBN5mg1SuMVKvREVMAa1NVosyQ8YwtfjxvFMxjaqZBaTF555HoHyv",
  "key22": "4wjdAQW3peKUcAbDJy5DynB6NAHRkidLv7HqtmSNv2wQTwPa3BT8oo4Vjb2B1dca7k7tzi8ndhKdgDJobxG5Hau6",
  "key23": "46Wxb6cxAWdV4o5UqyKujxzQXNbvQASa28e4WfaPzkUAWAMDw8CiFtKxb9mNvbg2fPtGDwnZ7yCi12Q2s3yShEu",
  "key24": "2t84VmNFHSL6LJU21jeqWWBJ6o5h46NaAouZujPbcuepEJXnygm2MM53WwuBAWw5LMYQkPHnfYDgrGjEvxfKDPKL",
  "key25": "457EkUp5brNzpZ2CkeoXPYRm3YAEfDnGVWSMNS1Cq1UMywsiDJHgFBLMWVqRNzURvzftiZjUNHNd9nofZqAF6aHt",
  "key26": "5bMnWZkm3vmDVatPUV3a2WQx4qHaFpM9WCoWGXdWYR9KJAtzVckttcYVYY461Te6p8hAcRCjciuSEX68niZVAaAu",
  "key27": "ZCoPUm5KafHMYEMT1ANqrEdSBu63jm914KmrC552vGWYLCbo4LefB1cfzALzCxbosr5mM6bznwcmPC4BUeDMha8",
  "key28": "2GPMhTuCtMJiMffgatQU83gZdhU3ouFU7Wq3PZfoEir49J5TWG4wP2wKPvRc7wbkf67TwmWG4M16qeopNbYcGc7H",
  "key29": "3ASw5P4iox974KtqqMUJkHMuH9RNwHkvW4XNFZvTYXGVDMf9Z1oSLeUKYRx8Nu1HiDVCM7WbwDJDWfzAoQaGTkYr",
  "key30": "3mB19wZdt6Kp1YurLxZxRQYadTeLzwj7M66YATfz4Hi131pByxxMJeRtiHjpKxy47BeMHBGV4FsEhFoP4yWrK9fc",
  "key31": "JbYQ1ECejzaDHigrLfbAM9pdoi9toP89dCnzqe4Qo68hxv32heKYXUFTrMi2HHPt6iGetz3oi5ymVskiNuA8Q3Y",
  "key32": "51qjM9HbbRYXhMfoHrttafKXZratKeEVSq2JZFUosh1BRpaZdJwkuey77yRGFSvBR35t5wHom26RHfzGs1QNL4Fa",
  "key33": "4iUpUEP65aXNU4nn4bNMK2AaQWLV754P1b1jJ8hYqvsXfLB66c5kF5AvimQNon45HibY3DFJc3VsZ9QrECTW5g8F",
  "key34": "4Ewu116wtT3RrnyricUe4zpcybvkKcpXXZz5WaqBodt8o3uS3G9KSZv7h1KESVHWTGNxANY6ZU3BFN8k16xgpKBz",
  "key35": "64d2meL6rBAQSXH4ctEyHeCXu6icr56EE5w5m3Cg3QGUEKgwrDomA1gfjP28haqhcdHmryGLfo5WJMHJLTaTeH5k",
  "key36": "3gmBs7JXD7AeRzBApPGiVchjB9RFCvTeVe64gQhdi9qChU6wRpxBupSKFKvi1TMCKp6cchiTAszGMNDQ1n9HywGD",
  "key37": "462LXKNR5PMoyaKwB56rx7WSYGCch5q5ees4nUhdtxSppjxijLcaQzheQfeMEGVb3vXCVK4BqbNwxkxmzkxcHbfj",
  "key38": "3cmyUxArP2rEUsy1iKGraMytxxyujWQLwR3jDCuskrEtxKyT7dTMxUzpGK4yxgHdsUm1rWpMZoA9fP8eUDtyUmop",
  "key39": "269JHTcSiitTb4kR1mjb277nmaUpDxKELp6amo3nSaRzkMntfka8i9oKyN1s1c6xiTnEmuRUgxrYnqNGV2afjMEK",
  "key40": "2f3fwt4tjSQxcXvipaHatenTt5rD4mxWscaWTLBStpj1d3nLNb5sSZLHn77yWD29LShfL5bAdSenNhnR7dTA2Wan",
  "key41": "2xA9LqnQGt8Suc6NhSSuUuDkoYxr9xbxK78q4d1ukGHD6PQaeUA3QPNoR8CvdMsiLfQazdqsD9rYiHL6RZ3Y23qd",
  "key42": "37gRnRfuSUG3x2n8ruF5hTr92E1sMRPaJXxJ5JGuCqRTZ5qannqrR7FEqGqSF9n4QCiPQ3AFtRkBndbGoLYEKNpV",
  "key43": "zUmurRKRopGwc9vTutQ4RBej9yFvhYMTttc63tYU28cfn5HvWzBFaRjPhaxPg7Z5n2XeNsjvMMw1fMdWU7KTELp",
  "key44": "2rL8xqE7m7hpyjUjCBK3pbaYYMT8gW8dTktSQjbzEUJUtS8ega4Va9tyh6rzsTeATSvC99ew3ZR6TvRXAy1TxgA5",
  "key45": "oFa8xbKwyRLjaSqhEVsy9vsTgvgvcJJVD7oM9RcyaxDzhpiqCLgVnYf8RrKwFQHMrXaZDaAbQgp6vFeP61AforL"
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
