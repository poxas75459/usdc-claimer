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
    "5C3wptZqwVg8ct58Dz7nxg7BH9aa1rRdkFNmmxuKe2szSjqBfBMhdWrGsoXLAz1PGARQw7AotwWXqvHmDpeasJCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLZp2GFSUbRArABTiMNNK4TXW42v3V4BGjHbLhfH8TVneTKLUsy3iqJnWKDVrF6GAQa6YnAe9ZZK99NFL4oBCug",
  "key1": "5g3JGbwX169yACuQPzU6bRT8WZXwb5G1MvYA8CGt3xwFGwhdF8cZpfB59C7UJgWzGmYcb7wFKC7NGs9mFtwP2Zbk",
  "key2": "3zuGgpWMdHseE2qWB1DXuaTCniWrPQn5z1nGXXmdL7tBjhA8xpgaBKYvvMjRx4SyrHmLcVALQWz3QmdWbZvJtPps",
  "key3": "cmCF4aqiFBfT2NQULg93MZy3gF2djorqczegFLwrGEAvDPxTJMdDAsWrkETokrGoN3haF8HsHdW5chwco6aXYEU",
  "key4": "4n9sCvDCUch5CpwZ8CJo8gPeJYpcsVXZfsMNDxoc4N4CzCTBGZtCRoRSLQT3anYfqkGRJk2vw9HrQjzM65KbYTXW",
  "key5": "65iUPc5mt7PFMJsDGyxBFRG9MGK5t62yP3C3XdCV4iPsXhyBKLwJpja46CfBAkdtGBmTottF1yYXcaStyvGrHZDa",
  "key6": "2KH6XztQfV41HCzdCy7FvEFZSU9W6mRkGYCG5z7HFhpN4cZ4uYXb779M3aRZbVEHuxFQxBx83ygzyGWKK4ChA8Ti",
  "key7": "VMtYvJrPfUNSkyKuSe7zy9XmvUbtfjsaxLFAiaPfoLaaaxLJ2jrjxeXrduKgTtzYaGhBtwJQQGdZY7S7aTPZJBx",
  "key8": "5p2ugGg2FpeisphrDzoteuHwjFuJemsPaUh3eFdTXLzb5jeHxsLzHNURk5Jh1KAD2W7Fnaneofkc946p8Uu7F2wG",
  "key9": "4njeXHVe7Fw6RuBgKVy88PhrR5GF3n116w4WhrPmPAE5wneMW2nhfVYVxYM9BxoXzHqY4XRzJuPTA4NrVVF12D61",
  "key10": "53M7X54zzG3tSopVdgFhhcwsYzuZTq3jb3gZGrJc1tcP2oKChQoZY1eVibB7rB4o1WfNPcWPACR4UBbkKFGySHR2",
  "key11": "4rWJfXQUZj3ugGuTSNHJ9ke1acWVZNbkc53Ehehe2b63r3PYFESxaW2T7LFvzQzqgMfiTKAdYJL1ACQd5yJVSEh8",
  "key12": "4q2M87WuqrHbow26m9TeTAeKDJW81G1cdQwnBjmGirPNouBBECYYWd4GKjt8gEr7MCvLmAUdMTGhrpABpvhfwgC5",
  "key13": "2pMQCUxR7Y44hfV1xQAwAYSxz4yVsTSqMjRGFUKipALfPf2JK8pE4H29f95yLgWkQQWLSyS9BNhgT22j96DN6ptQ",
  "key14": "3sQXt9Bba3jSFahUiBaxycwB1T5kiDBPVvQAqug22UPqf3QYpgsNdpvERrHav5jSqDUQYZQwQwZrfo1hvtkKDWWA",
  "key15": "3m4xhxzLEVDczpiw16JuCgXJKJDWZEnPMFeh4RCNvoJsMENPJ2jDHuFCa9x4JynXBomazuoZVdXyNmC9JMaG4m7F",
  "key16": "xRib2ECBe7pJzAKh4ffiWUjTqXZtbQ1h6vZwzWXiWf8WRb7S3mtqhgMyvHmsnoUzpQpVBMtw9VujHgXLD8brZhM",
  "key17": "WeDZrfnCtLH55PLG5g3uavAnexSKwdwvFDkYXJzpQTLhM3Tp1CA4E9sRQn33HAi9gbcj5J86kW66Un7DzYG16XM",
  "key18": "59pgFD4zLiddLeQMzsRY4wbyrphLAHfdHncnPtVQeqana4tT9J3BsRH9QskjY7CUcLucxqCDprtWKv7pfNJc2bgc",
  "key19": "2g3ijMBHbQLAPzDReS3KBbA4Meh5f4Gp3H1QLGafLGVHsKf8ANuCrh28S7o8zUkKrpbVbqSPXt1fTob5LMepzCo4",
  "key20": "43JWCxXVzmEr9C8gtEJdo8pc64TZhUGVk3bpUPZZWXHFbs2x4JphMuK8sPhdeeRF9GrNiANXSvHEqzRdRdsdBD1u",
  "key21": "4v8swxGrGUqKQtciuiSk12oGpnN5Hb1zM3QgwdqKRRHLyr77jT8RrTopzwKycYj63xueS2cuQ6GdeUALD3B4foDB",
  "key22": "21LJPuAdimeXyH5nBd8rTtVDY2k3aUrFbaAhvfCJHM7L9Te3i2tzCheDotnsBnjE43sRryjRCmGtfWtfeRqyhvzh",
  "key23": "47nAyAhsHqgX1injPz2TVuNj5k7GcoyrbUYxNpN8BQXaxtevax8p5x1r5BB4e55dVBtaeo7u4RRv83XX3WXLzRiZ",
  "key24": "5WUBS3pzFkXgxy2hj2FuaqkjxNhZNU6hKLAR6MrQjH7QfZZqknYuqfdnqcxiHKoJrq36H6qSgqqjgF1nbF2khSB6",
  "key25": "4vxdAAb4HX2G8MT9ndrmPcAmXpLTGRMN4S215nQys4YbVPH7fqykMTAQosJHiyawKQRqU8X3iyTFkZ3Ws4F4kLFV",
  "key26": "3maVyaMZ9EtbEyuvSkLoSKWGU6bDsF8kEgeH2ZSeSQPHgzBXuqKSn3Juux52yTQ4NqWiQxRQJrg2rQfZdQbJq1Qm",
  "key27": "2RVD1rqAAKXzSTpdwuDRrrsqKkzWY7NtqyDwzfCUjqAafPtb7H3YoJ6TQr35Z1VdmRTeZ5xtiZnFaAN44LV9Eh7i",
  "key28": "5fhgGmEoiGAz3e4ziXAG4tTd6RYtLGhZZo6PGEFtX6NcgNQdkvNQjikDsiaJ1neEHevGLtVyxiVg9tBAHhwLjmt5",
  "key29": "nTUrGcKmoAF1DoTnGhUcQuDs8h7u33wqwuKaxj3UWxof1DH7Zv3xhR1NRGqGHjRBp67bESFxrNxQwXUJD4dP8za",
  "key30": "3i5UAa3rLPtfB58uoEusa1mrFMXm8fSNdiFtKmnEC7FPeUxMZ19xkUS7pA4koXtCEzowYKEp9XbFHz1enWBDwboX"
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
