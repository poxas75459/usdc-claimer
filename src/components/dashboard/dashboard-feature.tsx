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
    "22UQj8MVshyS6tC85Dz6THjmrLGhN2NCVyBy7ijymE9h2PopKcvWtDDSFQH6m6N7bkw5BDALVf36nRGRDB9yH4Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y6SSHqLiyCGNbXLcaZ4LqiVNxubDUUE7b3ivVE2YSBTubet1x31BsZMv8isCURAcZbtxB3NAeU6mEFqnWhysr",
  "key1": "2XtHm7GDQX9xWkdp38r3c91nwG5bsEFDCUCnLwH8EbRnYCKF4k56TkBMBmxxQFkKdc7ycci9hXRN6H2VaXVCpJ4g",
  "key2": "5SNUBGwFrrsvj9AbAJxXfwtojmFYVVZ53UiVqXuJwbpHPj3F6DZfUzFta7qo3ydcP9UCoPNTzeZ2RacysceiNuMH",
  "key3": "2yGpCM66zNovzMi2zvJ4dFAr76y7MzhVrwxgjrNoTLBR4mZHrnb6p6kbPiVX5ccERvnmsighcERU1Qt3ppA8bDiu",
  "key4": "2JdqQyKBAuzp3XACG1syZw1JQTC3kah1zsfWttRz75tgtakaPw7qKt1sDPJczbVMfXkLw6747Kp9DrFBh7484aXf",
  "key5": "Gn2pBrc2iKCjakxKvdFpFgRuMSb7gXJEF7HUXGXRRncJFkAxvyv955noXj61gYpReiRtFnsuT6nXabQc1mBfiVt",
  "key6": "4ffcRQmhRNPtrnChHSDCBiXCbadwHc4JxRowXW96RDJLdCt9wkPZi4Fm7iA9YB4bMiX7xw2ssarZhncZzrgowbB",
  "key7": "3HB9USLSPyD1Lu5DTyJ1sPfLorXbdr4RchNLLyrguuwbGJveRfrz3aA9Akj3JH1cu8fKhwFmZ4G1tN17jknY1nsD",
  "key8": "4CceQL2dMmChE5kNjnxAMCHFCainDwuSE4LG5P2sm1cdBCvUjeAsusAZMTjyRkCmrkh8SzBYNsMf89PBmw9SsYfV",
  "key9": "2bW8AwEGN1byzaF1GppEC2D5MbfWHkWYmd2gqZuekH1sJ3RmbaoZnGZ2c1czpi6FjTMHSrJnE5axDHCBEGXsrCfe",
  "key10": "59JgRxXHXupEKC4cK8btqpXyvbVEmS6wtTD4KFJx5P8a6Rv9exuUiz83qN1nR4914cQMbjyJJqhea1smzqAhTUMg",
  "key11": "2jxocA1mjZrnEeDDuYsxKf13bXpym3vbP7NxgMgiK5WFkJJ8QdxMa4SFMG9j4yEY3BJrBBK91KTKyaEYg1qL2LtM",
  "key12": "5B96RdS7M2eaMEiz3g99KbJbdTqpB4TYicdtb7UuJ8rVrxFfMLATHsoaMSWdaQqqoLyNkucoqgkxCB6LeLQnaXJg",
  "key13": "2bEE1LB1gagjf7ntpUpeNUhjw5p2qz2XpoV7515bYsTVbKBcLUDkPMuZuexDiaMa6MEr2nBQcpZXGJdHoMG3F3Pz",
  "key14": "acx34eXHfshA7nFxkRcdGztxfQzQqLLbpc7G2ktfDhtTFB8orQ1tKcksa5NHEZSNNKmZNtFiyjRiPt6TKmbCjPJ",
  "key15": "5cSQhcNhqsZunixsNRZNUMU5Az5sCueQSKUhRfqPhZciwZgQbJLMu134UGd898QijocH6jGK3Wf55FUpvfmRrZdw",
  "key16": "2Aog3n1GAgHk58b5XERr1TikWMcdxmz16yAXX3WAF1cqgz9g8WUywTJsadB11dKmWBqNQtWHLU6EDke9odu1XWJq",
  "key17": "5ce9zsLQFLkFtCGMUSmki4ZBRvtvGtdh413zrpWrtunvpr1HujvUMSKP3WdDwDNsiMChyrMM7kKJCmPbxWwpyisU",
  "key18": "4716rGyHbZqygwGi7uSpm8t1w961u2A5h7mhN24aQDgtaN5vmvAfkr7tRZPDXrp75Y5rBSJbStynjnHiUJV2MHGH",
  "key19": "5Ke8NkRpnYc3hFXjWz9D8a2LwXc5cntYT43K6px9zpXMcqfJtagRuu7JCEzTuEvNnAUt2nqcu87fap9SCJSCiP3r",
  "key20": "EbbM7UsXAZm1zR5P7xbhhxkFtzaZt5p9co1WShdqSthq2U1nvewMw2dUtMQtrKR3LLvYg1bVKrHL7JNX4oQ7rkz",
  "key21": "3YBwhuK9qtbbWdThMxjrnxc3X7Mre4YtXefE4JCArMVUdHiFoEarhDcrnHhMdw1T1RRu8zYN2ANr3MQPsCCzjdVe",
  "key22": "5HtbcM3eTN7Yjs2bABaA9fkNoEb6n2fV1YvcQs5GnCaGqDMVMpi72E7TUS5vM2q12G6mueFwvFpjaFTb9S5jfQcx",
  "key23": "4dkXq5N6oyMXd4118VzeBys8d13hafTnEcvR42A1vn2Y5mz3pfv8omLKLvZaunqtWVYBaXGFjYfX12nivAQMUAe",
  "key24": "3LpgMwdiVHvyAZNaGne2uTvzj52SSZv8rwkmWiCxzZz3FygbifMBBqwHCDx6DzkkGSHVihZ8DjfcXbY6YVHntEXh",
  "key25": "5pxyLPoPtqJpPDaQeGKXWq32o8qvmthJu9vjTLzytfJPEepij8rvm9t6yAs9KfFzfDHBWidhjQ7XbqokhXYYXa4j",
  "key26": "3KjqoVubzRNdh53yTDJbbdPyMEeWZnzLYPG2RdCzoppxmy6DDigiNzwUy3A1C5akdweuUqY5DQKL2g767FRJ1Wpj",
  "key27": "3QedsAffdtZEfH1fwncGNnPpPdzVzgf8FBcdfziEur5JqNEitCacxYgy6eVSYDYSPvoVKyanUejQSDqRVddt4q1F",
  "key28": "3qRWu9KoVT1ZfjB66Z78iGJeiw8b44eZBzEYqNi592vNJv3yEVGAQ3aaXYG2uXCmYryZzD5gs6j6HtvtkKn3qtkT",
  "key29": "JQ2mpbxJ5ASpB5qKaJduG5zmJZjS7T6yjmBcGmNYBMa3Kphz3PYyahzprk7MTJQssjSWLKyC7QEgG1Sa5d8XToD",
  "key30": "sVzSJwK7ALthKyS3ULQtKpTqNsbH6mdYgbbSiBfAjHGv1SWtQf8QYxhuwx2FfkwVKBtf7qSseo3FVZFBk9CXDSW",
  "key31": "3mWg7jSnFDCEfBvfxmLmHDjTdEvhYPTs9Kpj65ztNkvQSaZh2hMsFfnDHWoSPkgEaBpqQk4msam6QcZPNu9rYtEh",
  "key32": "4kyCGKo6rbVtXn5ifhFWtXuL372vkBhH1GoMWHHnByHZ8S5VqutEo8Gp8yp7p9epDxLhraFzWdMKbbVfTYGEH6Ga",
  "key33": "28YridaC4swdGD4AWZ5gcgY75ZM8KMYtrcdgaEDUAEHox34gExRsCdSZEUsbP4KfYr6aAv6rVaZyK1VSyhSVRB1V",
  "key34": "5QmTsxTdZvSjfwTTKpd3P2fhk4h7UCYdva1saVBCGCeRG3bxBULaSNGkgc8bhJXu4TESC8KgqbbnAamrJNwRgcJx",
  "key35": "QThBSFfrrnjycEBxNYuwkbRAbhkP6fFTjKVDEuZEuabP9nr3jsWMGFR7zQNnH13T1K9BJvESj3bDBrgJ5TtaN9z",
  "key36": "574osgwmviAFo7TPeLSNdfdQaeKd47o78qirwhVqufpHhwzpzkYECeSW9pwJDgKYuhwfyiSsWNsqUrJk1ByJe1tf",
  "key37": "3YA7WCCB1EbtD1jWcvvTzncp8SeKCpevYFcBLnxinbABXss2jzqy9TF1AMuKtdPBXfSqoGv4MPxjHMePJJ88rHnB",
  "key38": "5TprLk9CY9e9i4vHiJwpxT1ZGxmUpUp8npJUD3DtEuvhLL3L6Hpa9mFavZq4CheGiVUxvdTqBvpfWJTWNfBeFHMn",
  "key39": "5GV3Ef2FmdXgYuauimeJqAXzbVoxwvgwzPwwb2N8Lpj2j3TptdfaKhm4VdgD8TRjbp1ZvozSHViHPrQrMTD41VFT",
  "key40": "5H4zpyvXifhXMLEL6Dhj8nmkQazu3dnMssbNAuMnGfwa2tXzAwPfHEWjKq9uYXbekhbQz4YN5NGHzSjWQssMuR7N",
  "key41": "4rGkZZLJLyBWMASJNbc7NwnjVrcmWRY6vLU1YiaP3Q5NHa6r2eo4SxTzUv5jTC6Wdo1aTsyvPYKCSTMw5MAcP58k"
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
