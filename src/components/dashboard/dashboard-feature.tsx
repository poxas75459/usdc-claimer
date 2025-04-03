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
    "5xuhpcHkyAatHg2y19Gbk6et2jSRcULYLPbTrLaDPH2EEFKYM8D3mRpsw2VwY2MNiHTZrXkX8Huf6cVgpTBD4GoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wa1fav2Br6EEr98TXttDKbwtoeGuk1C2kDLPFNbrJfLkCeD4pmZ7JwGu62Jk6vLuLWmUdKEkBX72FKjim2ZT6ft",
  "key1": "F8FYnKwRT6HGKwx1s4q8EGBHPtoy2WJdeJzFCKPZ2zdBazftw1a9pybru9vJAJCBinQGfncDux1Jz3A75qoWuZL",
  "key2": "5bH87LMN8up8YgTJcsBfEJBvRh7u2wBFavbCDrp6ag99X3jYVugeSB1qF9yckZsFKgSaQPXRLLRkkqpXmAEaZQxC",
  "key3": "5zvavgFmEi5csLHHVEmfFfYJYAmfcfTmUUhfvbGACayU1Muq3Df1f8XKXHzjYqDt6KtVYR2MHC3zMudoLHXnHExV",
  "key4": "4erhzUbi6FenmGB4PauwdxYomZ9cCeMnsWuP2Kv4vyYTb3PxwiVhRCMb1w9qs2U9VY5qA8wC1iGhby4M76cabLsk",
  "key5": "dQM2GAt32oAZy5UCRUQvmzzuK774K9Xp6EtSTVHb78BXCqv4r8UUu5Q96AUuoAXf8zWaGpo1fKqDdmFN8gm61ph",
  "key6": "4zfSuHbXtWX8kjtVf2phhMUYAKaGi7wduEtw6TKxbosYAunB6PiiHrX5PVLf4FQCxZpuvw6349o8Acp4GAmZ7qix",
  "key7": "2CjcXYGnAeHLWKwWGu9s3QzUvbeTVPrSYBqQRS6L8cLwYUJUr7XMURdDwHxTfsRMFfGMBw1FKry8hRBKMc8Vhkok",
  "key8": "2TnFE6Qu6MLregRkbY86cpzts5mkU782absxrgcwAaJv9jEBt5E1bJRn7ikxi7weuCyqzr4QLateqo2caWKN1Nz3",
  "key9": "3a2tCEGh7a3ZcyFLqWvDgCX5akGnrah9xp68quVJsE36PFiXEB3HqRz7Mvum2oe9HWjK8YWH6ZEQWMM1PKgQuKBa",
  "key10": "EH1Eih2CHfmRmBq3GFA3LostuCrCtdMFkxEu4HkorXDH9RSVtUX3FitUqauzoNeZyr5opycTSt8EFRyswqQwfh4",
  "key11": "4bjwCddAMxMdXrbaTaZg65zLJzvXfWMHhhfFx45ThSLvELyvRYC1Wh55L4zimJeF4MXPGeyWx1PGfpJK3mHnPT1a",
  "key12": "2ydm4A9NG3SmceG1q5UiFUr8sVYDutGocJREFRCnvptyqffH4KgbPyBM5aWnr4aed1d6fenW2eiypYShif3fMRhN",
  "key13": "3BRNkKciXhUeHchqWgrPFzPce3a4BDXrhStTYi5cxAnjn4dEhXmwW3mDwMT8BBerHwWyA94seHJN6311aszdLy1b",
  "key14": "4rWibgxgwnVf5E7ECHhuRaW65bMvrskD8jF81ptidqMfugVdzK3i3T1E6WDeVJPDeycf1KKsxZNvyvDU2j5fmW2x",
  "key15": "5vDpMezdAfpxZNagZWixXHnbuk17D3tg1AbznAgkqqwoAW4a3HZ89XSkgrFxhPyKRNPsXU1L6nxh7XVWJTK7MbK9",
  "key16": "5VdRcfyhqw4AZvaxKUx1Ko3mA2viEAo9mQosciMZQmZvAjSJsWkkyaqWTKDSbMeB7V5bSwVKkUrXH5kbDwp5UQT4",
  "key17": "3xHtK9YAZxgL8FrXGjesgjFVf4u5TJjrCxAUQX6qxTfe2s8uvANdf5SPtCzgvfVzuPuCotznfJ53pNd9t6hsWVrW",
  "key18": "5rfFaAWa97B1bzTQaRNHeMDMHrtPPy6bNL89rTbEjcFmKLJ4WqBXPmswqYkdEn7imi7o2ZfZwQhUsszMgZs2bPK5",
  "key19": "2eyRmrcF2LdmK3ogGuC5YNKbaMj89zXw4Li7NvWaEtvXVwqQsGF2QoNjMLtF7KheefUvH2P5xAwKwX3b7PUP1Jxj",
  "key20": "5Wv1WDMHfjPDUpK3NeWQqif9HxPb6134phZCVu9xsqGKARyv3i6SqsLgCXjh5cFAwzQMutfGSNXQYDrSPvEc64QT",
  "key21": "2smvgSrG8XpANGAV4jFg6aKRdysfic8ovTe8L43EmvGfNqTVaza61RtwVkvpzFs2U6WEzDKjhUrQboSJvaf8c7b7",
  "key22": "GWqeZXUDpbf1XPFYcCX5x5NUHC7GtPY9FrYqeakbCgE5WbmPuA19Uxue59933nWg8sbMgyb7CDH99Xr1ZwdGY9N",
  "key23": "2bsRsq6vy8WE9rhU3uni9dMkphXzk717mjgBzbk9DYffjrBPRaweoJpXafko1CsD5i2Q94weZQ2pM8FWnbkNdNji",
  "key24": "42ec1XVV14wgnJn4auK4AxNd5AmG8oUC9PQtRNMywgmCDD7g4ShDcopja4qk1YRkVMgoNUPqY1qsuGfYNkCYsDXg",
  "key25": "4zrApBAm7wffBjj37fhHdawMte1RdEzdqt9jvYNoxNdsrtX37HtarheuMQ4LzcpU8DeAw3eeYnZP51C6DhtUHGmn",
  "key26": "3mb7VvYzbT7BfLAY7LdxxhzeTyJ7FHbSXffkSqqJi8AiLPsp564tMPbdbrWh8wmS2FrH56HSKRaeiVFZZrwxKn9C",
  "key27": "jyRGRehDmqUy2K5ntvcW7KHpZrCKkpF5Wogu4ew2sZLmJ3EgTaQthixDoYNESUjDDdRwPbvscnYNFoMSWQgN3oF",
  "key28": "27MSYaVHRnAUTV3XaCM6VSnBNbkyQMVhzs5cevJt6sUctri3FZGCnhQNoyD6gcvoXDrRfUL2EYj2Shxn6tbwERe4",
  "key29": "3x5mx1RWCknHBaD34PPLd2K8wwkS4hARAWJEhqDv74Mk5KBSzMmUvZzYdBWHDpivhyxP8id7T9S9wWFFZ8gm2c9o",
  "key30": "5KMPUkxkeLUuy22A4b56eJNUAhodb8wGmc8waxw696yzqUkpL1FaRgENv7GtK5rHyjDRkWDk3aGVZbadcEJGKiK7"
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
