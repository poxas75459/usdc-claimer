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
    "2k4cek9Nn9MshvJxicu67XR4f1PVspf4JnpKSpK2YbmpLzcngmeP9mSmEMYAJjeGGzkB5LP9ocvgbRC92eWrPCqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPZ9oxxEbM2eDA5ZDdyU6rVm6Gcoa4CajWhQ5JW3Dnc9YeRyATxbp2EfswgHhZP1pDgKQ4rnfgV2iTYBSupGBCL",
  "key1": "5Gja4En17yd8TxqZueH59aDNRTWMmzWPddJqMkwHaRLjHkhrPsiUPRjg2owuuHTtfbQGnbFt8aN4Q1BeZjkpS6kC",
  "key2": "3ywv84oUbbaQpQ7ggNbuTPo53AahraFhTQD4wLvWcm77C3nGSGmq1Zswj7rpqofoy4zRdJvUrfKkfmecMk16JPy7",
  "key3": "5skyjveS82HeSHunEDadVuQAyFzi4ssym57rRYHYZyPD2ws57fqMPXpLYEhfkKmTixFs1YLh97rX4yRayAgUMN5i",
  "key4": "LGo4quCRdx8v6qp1rjhFq2d9AicUPM13A1xh9CUa7DygaPTxEHfDkqHf4L49BnqfJbqho2Qth95FR9wQCKbnmSQ",
  "key5": "12A7S9FDqRiJSJvBs9SRcJu7g7ceHM9dbLe4Mhe3pzXsVGGL2e5UTe2Nf2hYfLWBZGyyffz6CyFgkiTRkyo3PLLC",
  "key6": "3XHMxNgCuz93hL1YXJLxftfrGiBhg947ZWg2VzniKoQeQyQhBSGN5mSPeBa4CwyDEg53ArgCS89NDFK1Us3SWuEs",
  "key7": "ktsgp2YnWGvnLDSEZpFBySXsHzDrBgVPvtG96ay5Vjpd3k7V9VJtM7VvaJ5WbhdC5AX1HipnVk8Koi2A8bkQLQU",
  "key8": "2S4suUuAVxNQuuVcQQrzDz1Hbefuk87youKJoEL6jiPXPjTERfTkE86TMe3x6UqWcvxFtmMxQdLtoebLQ7dMwL1d",
  "key9": "5in9mvkCUHF1jT2JHxvz7n545QZaWuzzW8Mh3BPZxbm3CyJsaJhoARedjHUawfwPEEaZx5FXzoEibHQ8PgPrGFER",
  "key10": "5hW7kRn547Z8LYzb8epDsxC7PsBU1dEXY5YRThnCWm1P4p1Vh7LBJZRBQbCzYr1tVNR9XqiiD4ioyis8UsvcKQNx",
  "key11": "5Db3zFYFchFoynfMej9RbCQ5quyZggGyCa2yfrm9ZMzrXrSSDzXVJqcTqyKdsTLUtrjA5KaBgSMwJTGwQMVCrKqS",
  "key12": "5o2MyUUTHcDVgLCHvgh4KJGHKRktenokT7bLxjzwfH2UYA3nK2nyFsPa8stjLzo17MXhLp5J7bCTj2VheadfRnzm",
  "key13": "4vxy2W2MQvJKFx1vqT3iEEAgjm5RDFV5BbDrp4658WH6KZ32r1a1mzPbooKmkGX73fL4MtPApDcZAHFP24wfZQGH",
  "key14": "mFXXTCPiAmLdowa6PXqnWcSdGafoSbdqYow8BCpP6nURCCVVrE5A94UjinLuPdYHGdeVYw9zfv65Bu4aKCijNMa",
  "key15": "33sAQgc3rLA9ryyP7PrcB8RhV5XUweT4nfew7WWvSogfPiDd8B2wFMEN88ND9F9uE6hDTsxh32EjHRWjLfKDSkCk",
  "key16": "XmHgJn9818bHFDggZ5at1sUieU9nUBLqfspC3jABwUjWWV3f3BsZ1czvquiKkUNwSrpD2edHC7u67drgunUmAEq",
  "key17": "31THWH8cwf4WNadsbZLvXmS7RnTngNK5SJxJFhMb1sX7dM6a2ZDZE7qXQxeH1bqW27HCpqWyEMzd9k3GTh6gp2Fr",
  "key18": "3RZfUVJASq9fB3V4T8UzBK1MuSYgKk7dnSKkvLo9BbhN96JpZQdy5FvsSMhcbbbTtsB95DtASFaFcdHVcKMKJD7m",
  "key19": "5M8mCRGhVuBnXkDCUXUrYvfjW5emw2BXVoUSaQgc4rMRkU5v8ASKbLBZZ5BsCZy99CULakPdZT2TzkGmbx6n3gkX",
  "key20": "5SRBQtf2BBbLeD3sKvmKtAg7bvpW8xaCQkzbNSNPqHJGqq9vUL4KB6GcjmYpZpRyxWFA7Y2SsCbU9oXkwBzWxNMi",
  "key21": "3fch9j4QdwKzWc7PTLtPshjxQbm7AHVyhNBcFnVXEjukPN7pHL6rfJ1o1WRiM5MdWjArysbnBZXACNmnoek9xwnA",
  "key22": "4zh2f6g9Co6uPx1XBtHyBZqYDteQdANm4uvi5hXcn3HfgPbJEoN3SaaHqDBrW6juFAQ4dDqcKfrTczAJrvDgUAaJ",
  "key23": "5hrHk33YrmDdTSwSxkyoF2tL5zoTNx8tyv3Da1fSS2jANfBexTcf8qK5EGNBdQ5JpR4HDuem7kA3WUmrMpiBsLNA",
  "key24": "QTrLykGU7EkSjvMTj3TUNCSogJJiq85QCDBE6EWgn4FGSg1WzN8oG71re3dBLpTbAjKY4a8inFbNZuED8fpKRyF",
  "key25": "3kMBWtQ6txCY1sCHvhMAMik3MKmRxyc9scvnrLRUQMaM83qa7pm2AeHDxM7Su1VvuG8jFXdZT2738DgTECfuGZLD",
  "key26": "3P1dmixBW2szN6CKdk1ToiSDSGk26bDpsd8xgNVjd6nUF2RUjFeGuqyX4TkVjMnJHW3RvBbWFBgdZR1z2zbYjP14",
  "key27": "24b9GVCd4DAaMeAU9k7Dgr9ngJbw6XYULScC8Q5pLzJQys1xTAqGCWaGaKopawHWviUG8Hwkia8hr5BQviywmZn7",
  "key28": "3esYy5cv5vsrGPEgKcaRgVXvd785W2HejMs8Q46d5rYUtmvhqU1KHnuM6NhtfiBz4vd3mUabPF8SAwimcUVK8cGf",
  "key29": "5Ph49bgxwLmkB9viAyBC8mNDbJszWS9hHmfKeNCJxN24z8WdGPdXrQ4fwy5gcpxGvvmzr95D5Yoq89Nv18BRiy1K",
  "key30": "3venBUPkg8zAHcxy4bZ4rFteRmSnXJHQA2xFwqmkj9HxNiuVsC2nV1N3RWipk914y23rVgBzAdBQ9dZLiQ4a3dTQ",
  "key31": "3bvBahDDMp64AAdV1CV2zX714AG82APg3HhRT5xSSY2qw3iynrmgo716Ttwfsx1e6KMwuFM9eQ5oAphKTxrSdZB2",
  "key32": "4XdwV2aeEeALjNMeozDztxLzry8XbHUfGFyhbRoaY9WJgNZzbDaNKivUiXivUa7ihoLLXND4wYha5kFXh29jxFB4",
  "key33": "4M5RxrZ6K3CWrDPn9LxcummeA9oVGkm3Auiv3Ey24nqMaZUcJmvGnhmxGGdBaAohKh5ugkws2ajk799MAMd4QFQ4",
  "key34": "m17naivn17fQn3KgAYV2X7Ad2EsNkTafxiaWNXMR5aPaRoNx3c9xppueUgfwceKKT38hGahx8XJsWgS4LAnnJFM",
  "key35": "2eDFS3Q1C7E4vZtE1LvNnmCQMtiidtWnBpCDS7eWBVY1o1Nnmv4rw8s2MeFxhZxcUFwchauG3n5csvVGigAYSozj",
  "key36": "3yjBUu9d7zfjJdLtA2k4KrrSGQhHW9PRGq5KKuU3hSqUvYCw8LhnzhkkvvRh6gFc9CjYJqqt6ioVvvxABVR3Hztt",
  "key37": "43GYWXPFZkoKkbB4wzyrtXuA9qabKC4ps6f4K46HBF3r1y5CmDxVewBfqQwS593T7ouEWu5DYTDvK4cNyEqz5Ak6",
  "key38": "3V7cXrtNAQ8gWK1LzZWPuGb4cUeDWrUgt43THsXfkvQyTtdZRf3jYVC3GCVQqzL8wx5boMuafBwvRS4wHbDqwdNx",
  "key39": "5sF1eJz8h4QdPe4e1eK73EXd8A5jewo6b4P2WkgUfMU1JADDF7RZnHpfDmbHgrpNYrNnv4ghTfGE4JR1weG3p1Se",
  "key40": "5dXrAN3CDnMQLpjCHR8YSwDGpT7f6dFCTAwZxziJ6LAoxXpzwzMz8UA879V2FKrdL9tD4679CQWgtvpTB6rZmJpo",
  "key41": "3qX6gwPM7Ct8wbD7LAdLkryg4rhyCHvvMHNnxEoK4kZkeHZqcu3fB8uCNr62Hkhz1AX2a1X7mr7yEZZN3qhf4tfo",
  "key42": "41uv6ojgKLPSoarQ6qJUU68oJHgcFGvryg1PaaoKBp6yXbxfjY4bbFNUrDW1J5jy9CCPgsLh5o4CRk2TExJxmZ57",
  "key43": "vQSzzvnSPcz35rVtBvRCtEcvQsyDhAJPybyn5JubcoEUZSJcMuwUrp9fLCzTcQCvrrLJdbaWVnCChTEVpe2Qdae"
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
