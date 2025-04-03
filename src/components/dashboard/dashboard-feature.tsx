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
    "2ZV4QbGXqJBoLardy4SDdipzBitYTvrgqCkUaWNCWWfPKX9Rb9o45hnqjL9QXzuGTmzUwPQGiry82YHfkdytvhNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9WupGFCQ6HErAVUVxvyhc8CJhgkbKMWkFo7AW3inreLJu19LWRMDeQjig3codryPkc94XvXNMUXcAY8DvQeGRU",
  "key1": "4sQqGzydqsQ4xnjb3tV39LeuFW2aMibeoVvJtRQsmvVxCTnEVqJ9GLx3oAHDZWe4KuvUH3FWMu4S1FqJY1CuLWnC",
  "key2": "2ztA7zZ3y1KFaSmJ4Dik5hZ5GvhdeH3wn7KCwpWCEc2DBz5kzZgiVSYNeweKbC9cWFz8Jp7Q1zV2qV9f4XeoGX4F",
  "key3": "331FbfgsyWQmLA4zHkvWEhWVhL3QVYkvrtiVBbx6EzbziULQbENpjQo9J9uUJxYbD3iP9oGSccjkUrH2fFBTj6ef",
  "key4": "633KXnXUpDyxa8ND4NcYzmGmpHmA7VDLaVRTyYGDXL6MAmn13qrv6FYLwfLr4TYN79Ca283MdBeue3f4aGCoBCqj",
  "key5": "4YUQcCszVuEZwqFtfPvV57XbsNLL31RvqqmnXiqcaAxe2vfNj9jghepQwdHn4nkq3grbB4zQiukqiEcUQpspNpHt",
  "key6": "Z7cm1YGcWmLepecCGt6Q37UHmSBjkpvCL16ztkpueLDY448cw47EVFqFD3gy96qe9JYLzrNYykehUes3eZVfKDb",
  "key7": "4teaEk5Tf8tpEMDLdz76NMMbagcRfwnjTWZUwrw6qivnPSaBtbwprEqSkK8Yo45VY82HMectr2D47PVse5pWrR4f",
  "key8": "5L5E8Mj5ogmeMSMnQpxeL39B3Yp8zFb8UpcZ52MtN5nScfmSPdtcxAdAAjKLLBSU78TRErSp7eyvsAH7EbHoP4B5",
  "key9": "2MdPDZy6wkFHYKNrHDocx4PTQCp1FcWFjdPrFn9rExx9SZXGPnvW9oQhUMzos3vDg24NF6jgxQ1AsPtV8QQKTd2U",
  "key10": "5PhVxb6axDBCgtrNwugMC4RtH1ALmagd9jPyFFhpijvvHJ3DXbz8Vy6d5Y5Dvc7W7czkhtuzbtTSMungXWuVBHuq",
  "key11": "5nfYN5eDHdjDuW8tgPbWADCY5ZnWmoNYPJ2xXakwCHdi2GXhYgsKALzwVrm2btiQCFgbVbtUdiBmku8ybaXgB1Ed",
  "key12": "2tV4uR8624tyjNmhxNZTyBEjiXPLenZ1WhYqxdXrAiQFB5XKr5zaEGqeeKT3usFcUE1CkenTQ5UHTC6mkRTmTzrX",
  "key13": "48BYpsM74EFW1viawEoBUcjMF3otPJK1a7x3XS7dUSGucjELK5emdNKShPUFt4Cmqk8UvQbzbpzX3au9VduRaKyP",
  "key14": "61q4WL688d1Ah6YkTLM6udAyiufLujaQizEERDbUr8RtuqvgmiEWRTKdxFLWE4p6eJcF724W8ses9J2acyiBNHJG",
  "key15": "5mVRcQb4Xnoe28AeRvFbtRDotoVPMCnkePUUnu65RUFdWZKqdL1iQAndrRARFiTJ2eFrmVjThoPBrhgjVwoA9qJQ",
  "key16": "4GhC8ZemS6nPQ4Brktw63aQLEcW4sCBMC7zBLeTJCQBbnWm921nRWPCQziBRt55yZWPriMDHWBn8KGL8377nW4jQ",
  "key17": "3ozchjmcHLhZjTNNvzMXF5B2XWi8QqeuW2wV4NAqhvXhcWjvjcjun66v2BKjjMYYcTvrV5iCekVDStiQt5dk4hWk",
  "key18": "eRutqPRcx7CdtrLRLa5xU3Z3X7wg1GAfZzMKnjkiocChxvoQ9H9ZQtAXXgGhqbRuYXuyk7cRgKgNHB67AvPkAQ4",
  "key19": "5UGT8ZaPxHBWxGjTCiea5VG5tdCeiqYCexGxRGzAJf3VcHEsxz2NmM3mQE8UqhqUdHt7RegoU4RyYLmRUcgab9i6",
  "key20": "23XjLJ5KnnhzFfHpaj9nXFoKLssu9LHFavr4u1RbgHk2xao4HeMLUiPCG63i1b8sLPC7cyNd28Q5HY6DQ76QAKmG",
  "key21": "4N1mdHBN4d7MBc3HZLAZSmzi4BggfnDgSV3M7P4w6yhJndHn8n1gbKjMZ9gewXoyb2BB4e63junn7JXaZvRZvt98",
  "key22": "U1qNiYy7wgXxzwxUnfnZBPZFVB47MHKerMkyCPu5DiweNVD24MeM5rdBMemGb54aqhVDvRnyc9RfnMpV3htjgBx",
  "key23": "5kJ7cLgZdzPzjZHH1MrEChKy11BCuzPjb85AVSeD59iDXzc1zzNeXCRCmdkBDFhvEqa3cF76Pot2borAjaBtBF7y",
  "key24": "AFiQHQpWX8L6iUZae8rkG7X8S9UMVuhTuWnXgnxcXx3mH4qMu9mG9iZ1YPQmN7hHGf3kyBhzxujyj54HU1mimY9",
  "key25": "4NijJJ3YWuMdC9hDR9wPZcFoVLmRbRGUgfseDpNWvqQoXaKZTNNNX34cCYBMhPTY22mmt8NaX3UEd7qDUXaEDAmR"
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
