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
    "MAMbjPwpU4ivhURCUwo4uWcgnYraHAeMDD2KnEa1jkwLq89pXh8ED82XfuyRybFAk9hKkNhuhbZoCDGUTJnAfYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64AZ8D3GdX3gG55iAcj6mz5CZwAzSV7tMZ8fjRB18RUsai7dubnRGizuSkArsGGcTtTKG12ByfxZLwURmGQ9zeDQ",
  "key1": "42SWKvCN41b2b5Vfc5AaxNFC3NuWyySQ1gqkgUV7fb5Lb8Z7aq7msjzHgrn1SSCGi99sCGN2rYRmXUcLGTu5WN9U",
  "key2": "VdiLCd9cnPsUVnNiTvZTxr8yjvrYZwHLK7GWkrooxQ5dpXGUmp8hFjNcHH3ssukxzkp59cP4KF6qQGEqkSpTEMG",
  "key3": "2gniMrWoqWQxv5WY6toWNVuq8K4MwBeXAgy8VfBs5ddmrwKqdXr4eZYZRgbcDq3C3KCeqyvx1fUdAhFr4vyw5d8H",
  "key4": "536Xsn7Gr5uQySxxADYT1CLxPgPJQteKzhmsQy57ikjYK1YPPMdMoLqKqyFNiFdAHhhzB8rkSZUEnpPHkHCY3y8Y",
  "key5": "2VRkvCUuBK6GjdRHjBXZUW5vun8NKhdTio2xArybWNqfZfvVcXiJvWu3DN2zbaYfPKCMaojewCgke1feeUZT4U93",
  "key6": "5B66cLiA2cZADaAAMMUhW4ypMULGgVxPPvoL3RQmqvUkCyYLvhdu8jESaPK61f1bv1onJ7ybkiSJ4nDfNWMjdhud",
  "key7": "51dnHizZ63tQFBCUN6qLweMkFUN5fB6HucUe6c8jXawsBcD9As8UKWnc4oCvdABhdUuAYAjPWEKUfWz5oSvjSJvg",
  "key8": "3avvcQvXZ5oqvv3LwF9cWRBTCvUzNpE3SNP3rizX34MPnpbFfJLVE1JH6bQ67FHi3QYDrmnYa1JpCXCPHcHMCyuC",
  "key9": "4VBiAnpS9rsJWBxz3BH6UDk5VcMxjhzaZKSLyKHF6gQGjJnmRo8GjVZASiM2gw6FjDhmiJCA1RgKjG8sZGn1XXH5",
  "key10": "661r5tufVxnKkJZ1e1MyE1SkfZw9Gkw28UT7yXSXRwW8HoEcXHzVP3A72QLSmNHyFLuq9tS4TUkoE6GkpfmzbBs7",
  "key11": "5himgoAxfCU3jMkdWDXW4KiTuxMuPmwJbrAaJ2XJ8QvQ4ysSmsVWdi5yDLVPHHn7ezhR6PYb5jprzCUJopYpGbNu",
  "key12": "3Ein6zG9noG5Hd2oqrG2dAc8MCRiunK3xe3iBejPJ333Ae6nPJsYotWUsTHU5NBJqNwwMaAGc4T2C7GcpeRCP9aC",
  "key13": "2BbrtpPKsY9BPw1zxxAkmqLThqG4mY5wtRac3cS2vqYEr2LvfBNZKvoiuqspmS3STruHTkEDMvjX137aqEt5C9km",
  "key14": "8i12RkDrwXM72xt38VK2nDHgmoHAt6L4fMLeK7yewGpsxzSLt52HyeSu1LZzWXPndMMkpvFPNuMcBueX4FiVMZb",
  "key15": "AUdCKqxDZ2mmMwS4hsqsDwpXpXZNd6bge43dzQT6HHqnnp71iAUEy8zUpZiV7JY5egekh1NPVzSbbvo6UMzufg1",
  "key16": "2XVcmMCrGt1BCEYvMhgZY5wY2dJk1TuEDsCxxj5A6vPenwVThvLtbT5DduW8dmmnAXFM3ddgtZudmNXqNckd5rpF",
  "key17": "3iUX46tN84PGduKh8sbmmgmybU1mZjKkygrSddDREZba8tVV2abhNSz3cfnY82M43ZjG1dwLay7cc8KRKNH5hGzX",
  "key18": "4AGESe3XiAfPHGty37XQVZ159RwzzHbAN1cXBPDgLK3hn9ZBaW93uYgEmBKcWV1KvQCzsVnf8B3tGRB3GabzS1hm",
  "key19": "w9L6H2WQRdv8QeEqodYruFvHxYF2EPRbC8maKqesZApmWwiVSemE3P7rpptVfHmZ9AdpAihuyY9awoTQPDcWG8N",
  "key20": "2w3zqsVRa8Xy4Pz5ayv9dDiDuSBnu4ewkF4fBMmUMrzEUezjo5uG2fGDyMW1ashRyKyZE5iUR6WntmBy8e4VxV1h",
  "key21": "3fVnEucQatW3ZEKCbs5echNLnasKXHPNCawoeP3L5eXU9g4C2tmpyURbZVXNWrixAWaYgyw6hTwRjUN7xsec857y",
  "key22": "2YTiiyYNq5t2hhB69qV4p9q2BNVLey7SQNjxQUnpVdvc6pYqWKZ3Fyu97BGmoTgWaVWYfwQX91fP4zcVEeF6FNFk",
  "key23": "2XL76BQwuG96daogfxkbF3tqLwBFNyqvqBgDBzLmQ39smcmfQmQJ2zZd8Gv7wNhD9hhwpmULkiPim5pc5PgJu8PZ",
  "key24": "TQoxbVPqcgfJxkn13WYuZzC86GcT4DBHkeZA9vCLVheqpG1ce2F4HMmP6syP8kFNGCn2tRxftLh98x8ceq4QePz",
  "key25": "3Mrm4uu9shvKEGc3B6DPPiU3HdbDfe1Roxs9sNLRyU2do5HQFuf7T3TQiqcgsRFfkwaDmTi6yonezp7F5ztYPgYC",
  "key26": "3Qc9Z1QcSR6CZ1yPXSfp4Xpq4E2s4FLF3aDxeedpFzvtrQ8QyUgrFVvkkeQuwBLFdDDH97wHT82TBGwdLdaZaxk7",
  "key27": "2rBiEC6Z2CxFrfPBURGDESXMz5EjitQJknrewBhLGyVGvNCmS6c5p8E4B73mbspq24HAYwnLVrgvjToQRL4zQ9Vu",
  "key28": "2N4RbnHn12QGshx24omMyJaWe3DyhpFUmENnG54gEVswWdpd8xzG7HFEvmfLhSzjcWnxReD3ZrF8P52dLzwWey7J",
  "key29": "3xFbENwdJD2XaY9afNyKEJTghYKh8aBm5wbK3G9DAWNzpJKEfJxxXnRTej6wP45AWmPMz8YkH2BB3dwNt8p26o6m",
  "key30": "5THXBPWDdBsFfA5okoVbv3wop1tE6asKWRmjLFg5taLX6oVj7t3V9TCQ12q56vwXCiBQy1k9GpVt56S1nQ8LTZJ5",
  "key31": "4kDr9koW4EAyuV2N39eZb8r8nQtjRw2HtMNdZpTs9xzv27wneq51tFCdERu2PD5zdmQtezvEKNXoH8ydpNRC93Ko"
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
