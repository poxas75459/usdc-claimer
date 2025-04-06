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
    "YsNj1dVuvJmE1A68tnkxGzQdTEHKgcgunX3VCHEEP23UqQt4bwpTvEsFebdFMYEgXi9YfEgScCmPKH8FZP9VygE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGVj2wNMLWsfJWRotfqwmjXKwz9ovXgsP3SxjA8CK3tgjYdVTrFqRXZwBb1SnDWceMJYimVkmwjix32LBTNKpmE",
  "key1": "3riawwUJ4DVkoyf1g2kR6mTYK2DJpAsmibY6oWtM5vf5DsDeSfFRUhRDJpFGywNUPaYc7G8PnA35EDLXqjA4141v",
  "key2": "3EKEeKxVyYvQpJ9DY4pT6seJGuXuc52VWavpARiqYJytUeZ8oPtRTi7mRfmmDZLfMLVJLSgMqwgUsADCNwRDLHuB",
  "key3": "4uN3zLohJUGotPuwozzZvNufqpjQamqEVsbdJnmjwMRybv4nvAz8XqgeNobQCDY4ycuths5JLTargad1cvciCzhJ",
  "key4": "3tnahyjJ7y2DLF9zFDX5UATAH5xUD9Dm7isd7XwbWfsExJRp8ZZ9LSXVUEyECSy5FMhYdJSvtF7Byi3pjxPPYZ8t",
  "key5": "2deXncKTMqTcST6JiitkNKxTDYXJ9TTDrkGjw4rQLRHUwmgqgwRdEyvgVPDrJESC3pRhsZdwPHRkiKEQszp9ADR5",
  "key6": "2fj7mokSZJHL7k16bREG7nRYetnP3bBkAJs6VL9J8XqS5o9zY95q6aTH1qSxCGEMXyg219FkPryymD3TSFxbUJtd",
  "key7": "42qPRryEhuwHFKZqtaJ75CXCGfzYfkfwGcfTjR8YjF6BVpxQGTpfdu2Ccy7R88pzZa6uf5nHa5fzwumCRd7gGStE",
  "key8": "4uhysHN8fMbj7v8JxFUCMskkWE4uhZhM3JALgPWGkZ2poRzUR5TU5wq3p9pu4WwhC8GM1wysCxCbEcLHTWkZVzq7",
  "key9": "4cZ36g76ZVkhenTcVKrJ1fPRGTPmFYRXENyrb39b8U6c4c1Scbjid8jhPxNA4Zb8nP6p31mWMmeiiKhgEfYb21HY",
  "key10": "3EvpSPFoiWzAK6b8szJHYh21nPFm5GupDzQc1hLD3hMpxfhVJkq6cPZocbfeVxzg2Xpc9tSHgkKkLBN2SbAsDRPt",
  "key11": "24zQbDjxSztjNa5rEZHdjwSbmNE5UgyzpCPZ9Unne7C9RRq4S3oC317sXqwmkAkqUnA6SAenAEZbC9Tn347HfsBa",
  "key12": "2JXJfHCTAotR53MSD6djTmHwf9TZ97hhPaSANBg7ZdbiVVY5MTF74e6qmezbiZktfogsjD4j9oMg7VcF9R1j9RFv",
  "key13": "62xVqahHeYqmDipr959uvppxdP2rm5EYSWvqAggb5wSFfsvEWc9RgrzqK47bFGNLeyRs7ioMdhT8keG5bh3mFvd9",
  "key14": "mW8ysX7cH94ZC76TZFTMfwVvDdSmG95pKZvvU3c9gx9cw3ZFNirvGqYDh7kGJtdpy9X4FfBLZwn66R9F6BqTctA",
  "key15": "aEsa8ZJu8bvoLssrBEfCYAAbr9bvPZy7nYuJp2mPtGzPhQkChtM8u8hpk1nKnE9qNBRqFpJd2A9gp4ex4LiiMrk",
  "key16": "syDDSuU44HizM5MVcfSsyYP66KSsKAm7keAULVSWCmJbvGtvJZfj4iw1tCFPDkeMMVYRmHLKYavd4HgyddszGSj",
  "key17": "5jF6jG4vsnxWSKUSrtJpzdxTjRa67cu2FcWkqCD9yPkbifAP1XP7AxLbEsnyFJ5CMJvScBnW2Scy9pBNqFxAxt7g",
  "key18": "2b8Fd93HH8uyxikLZTQoMtyBAC9CDXqq7GA4SMcPhDjwA6qE8x9Gg3J58drRpr7zPnfHkRzWnmVhRz4sXVYyeVqb",
  "key19": "3RyW8xfch5WXWWLC9UYqDYdWuRpVMWfpqbUtUYb8HqHqnffhpTDKTtb3o9CdF5hQ4923zbUH484nXfzwXcTi2vkd",
  "key20": "5xjccXMLSjC7rvFCcqiGpSNZsSBrTZ9FbTk2b3FUz1tsKuXFNR5JadusL2XZWzAi5bwUv5NNWQ3F1n4bAcE8v5Zw",
  "key21": "5ZcPUEAVqffVrMPFaAfCvQ4hFJzwKBJNxzkbnaJxnF6kQK8xjWUtJuvKv82miQsyT2ym6EJzsrcGRiuJBgYe4HGB",
  "key22": "saS5nxqkZiYVxJrftFxdhqd12Y9R7Jj6HdoC5sDg722aH1VYHHn4YBfNy5pwy1YiPDPKRJhy76nWU5RqXz3djoM",
  "key23": "56z2DrRdEjLUCidFkMRmK3vDsysudX6HJsSQWpopd3WQvkyE7pXtMfWuF73gNEqjbHcegV8iukghvuWm7wQG5okM",
  "key24": "67gPoPonoMhZsxGgfmv5wPRsy72mu5V54y9daqpT7oscqyW993mctYVE3de1QFsKDRVXhbZdZj9aYWkPR1bk2bhx",
  "key25": "2rGYHrhnyAQFU2Lf3RBX3nc9o5sxQasSNAuwEj2NcM5Xmz2pHJJAgYnurVRaLZCYm22hWiq5quPL8xnjhcrs64cn",
  "key26": "3yj9YzTvnK5HgDWGAxE3M8juZJxLdAjbjer2nxkBGJPR7jWuV3Q2DEESZxFbHLhJ6RY9RHMzMPYnt8m8LZ1DQENA",
  "key27": "2j7G2mpML1Seh4hWY5my5Y6QFT9auwcaLRrNX4TD7wi3ZVn2f5fS2EZUEKsZ7oLAnW7HUf7Cbr4a1ASDyxvm8YyP",
  "key28": "GSMceM6KqSjHtvV6Y1GErdbqdP3HPjxSpg8gxk5H9vkXnmPQxwoLBNcXDdTZQC8MEa4vpz7q1GzKSpKJg7jg38h",
  "key29": "5LFnKiuTSrZe2DaSRnSwdEsDyTERGSJbGVYU91CcQXt6B154KQXBZB9H8sfSArQkHKENRhaMAoFU7YGsjB28Gmek",
  "key30": "5SPcyCRYPRh12ngDynSc2kChGR9883j2iud9ZC6mbFSyRXwMCYWtp9UGmQJnYRpLJsHSBV8vCeYgCGFD5uVNzVyc",
  "key31": "2QEYoArY2hQtgWYKC87gjC1gttkrSVTPL8PCxP2RX8ySkJDtgPJ73hUApLXMvG2TKXQhGLh6aPTZtW6n4Jyw4owZ",
  "key32": "3j2rkKj1j7v1Dnjsvabx7m6DMigb1kV5J3NeUZde3Xj8HwZNHR37QKVZfs2B5aeVEP45HyAegfmVzMef7VMaYFpD",
  "key33": "36McevXWenQJaoeNJz9cMGEs7MvjHBad4EVjwWg9992D5TrQ45g3ASSv9KckeRPBpVzcnt4FEZqmEYagbBdSq7SN",
  "key34": "3BystdvoKfAfohDvGrSZw9T178fVQtjbZBRnqAfsk5frc5jyBhcJUycYLMC5U2uogVMEBBPGJKv1UCSF6wLtYJ27",
  "key35": "5V9eQFTCiaLRAACwg22T6rGE9LpKsWPxNsDUHesbbMTCcdVBdguofVjLWpWnsaXxF5EMAQkH6foiL6tAjmSLooo9",
  "key36": "3vJEyKnTtRJfs5ryXva296Yq8kwYoorrRHgr1o3cDTB6AMLLrKfakxkKyxaTWeX5bDy8VQKupaCr1HUi5zhTF5PU",
  "key37": "5XHGjWFvjKSdSkvwqd23gu8p64HgYSyFQthwaRu47gL9geGsj4CQPtFifm3tTAYq6SpwJ8T3DfjXnU36DRMrWvGQ",
  "key38": "3fRxRrmiS82by8xea8jNydeZ7b4ekbfN9AVyY4qe4KX6rLajNxi5t1oyMKsmUbcvxJ9KHohRiieqovx6GgQ5M2wq",
  "key39": "2h4CmHrgXu2GQQxDhJTyvwj4u9tTNzYjJRjK1G6zhbBWgjBLqcbg2FQJfyKvapwLqPKWaq4NkTRLysnWZqV26B4x",
  "key40": "5QSJpexBynENARQkqgwRYw9B4XSHMXxEtCkiMDjwcrJqU5XEFPgwSXCNbYxnzEUhyRtcog8Pcy5FvxHEwD7i49dS",
  "key41": "4zWut2jc1Fxzx1gBqesobJgjiEBqCtUFWYz21UVZ98xKXRtNDaifQEdACYjWJjTpBGoP2Ym2u2zUN8pqtyW77K7D",
  "key42": "4VfbgwH3bQTzr9gAycMw7dRpd3K9fqsgdfKwgoXjbcdC3Ctw9qjLcgGkk1vx2voomkSV6cUpk9HGijU9GraKfgBk",
  "key43": "fHQbxQzYN8UPGfP43rX4XUSeBiTjJxtgQduT7muibEkMq3ShLffZ4kyoMLEohUu4AxReuZQQVG2REihsH9zCMPo",
  "key44": "4RaeAaGAFvcxtt2Y5NM7n9k716dhgdtuHHntX5gM34EEtbx6o4JJcQAht9dw5SxohUPSw45WyG11dYCPZJQkoYs4",
  "key45": "3mSzLZ5AhQ6LdjpARNsJWwGvZVTWmEfnuf6mHE4hci4EJqF77MBa6ftBsxMGiLFf8AX8ULCSrHpMauivq83VjXMm",
  "key46": "5WFzq7sfvm2KdYgU3TKiN1o9u9B9Ty1ZjCNpoDLnCzJ8Swffqtb6y9jhjJpRAHZJBuAnZtPDiUeBTJgCzdKGQcsb",
  "key47": "dPNdkePDN4YWydHaVv2eJDsgSYN46BC8u8wtd43ydePF2PFMUgxNWjQJ3obH1ZD1dzBiesMUqeFag8SRXxzwWQj",
  "key48": "4ouMbLUt5fuBYpVtxee3vQ3dacgTW6bK1XzQXWXJZ3djiJpcUYLryeVmTSxHj15W2UX1Y9JS79DgFtQbtbgVNBMh",
  "key49": "4LwV3SzSHyeLcYsjz9PcPbdaW6evgSRHACXVBywrEjsLFCccwNusWSPLzRCWkV3xyTE1pD6qkSjCXTr9zjZrZDEE"
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
