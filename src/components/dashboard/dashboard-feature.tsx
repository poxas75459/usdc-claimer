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
    "wKYay4mpuHn2FjhXM3oywjWaVs4WoB3NTZpkyhcwHnV71ijKZDpWMW9AQ4YNCdzCuuCVy6PZnyT4zMYpmWTDaJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XaZNzggs6WKupUSAoqyXq7ugNxcrBxeu8fM8wqYuRSbSUX3R9RLGSJi4q42CZGoVegXe8JTzuXkc3G18zTiEU6u",
  "key1": "4CHj3kejFjf3PvTnUZKDaYtLm47SUr1yVxznq6VBTRUFex9ckDcAc26WMXzhvdt68Avrb5TAEMBcETMXtRzKDKLR",
  "key2": "5nvRScYRWvF5SwkuZ6qiQQ4trtYWh8jWdVe8ScUVSQ2hwwAsipi6dDRUzK4AsweEhnJcT2iqH6DRibc4eM8k7Jkp",
  "key3": "3JKfpszXsdXzGn5EKQkMfzbLDUGxFCKGc8RjB2sFbXvsPLkQC6XWZpyJo6JmRUgmfjFDnWagwDQiducakbfaHByW",
  "key4": "1dyVMYBGSmfgLQWozrgXm1ueWHsgvQKndwbeMKJitYdtQGZBSYXCbjjGx9vzdSQ8xKyNvKQyicr1XEg3uHygLXt",
  "key5": "G7uWyo6Vmufh5H2z1bvP5xipbnmg1uAcCH7NaE987juDq5apQYcp4e3DGz63KbTD2H9Y3rGsJVkybBu1xMAMQ3r",
  "key6": "4VEWc6ZGGDWDdKqVHNPXhpwVuNsHG6PawRtuYN2jhPBnYZm96vkyybX3y3XD1DtBvtWRoDRbCC171x96SKc67cpD",
  "key7": "4aY21UKmLLSo65b71E7fR1q9rZdzfyCutJoybF8GxkHQRU3BsEnZ58CB3bNskxeASvH2NoFPBkBbWv1S2unATi6k",
  "key8": "5HjqaApjE9DHxJkPZ9y1Qd1fYfaBjt2Gbbeth5A81p11WAd2iMoiiXp5DU5Wv2jSrkWHkTuGL8LcGRtdqE2ocaUk",
  "key9": "5FjbD3Tv8PVHkccQkzx3nBzjSJaoJsNpiPve6JyC6puDDfGAkkVASUT3tHSFPfavQZ1SbFEUTLotNeA57RWrV5bL",
  "key10": "w5CfJv2jiW7rNy4qfwA7qFVqaVNXc3jBY2jNc1keRahbDTgYZEwmx4nG2kLy9qepAubitCVApPqVzebwbKAt1bH",
  "key11": "2mqr18Tk5x63aJeN8c7oN4eAnrd3moJLoora3KLfK5u6Q5yrmbyACvxoKVYKSDurVpZuRx6GqwWBpN3qqSARx5Cm",
  "key12": "v7oabktwojMi44LPa4hrNnYU2T9MMVMqk6HxbFQaKRKnf7m5TF4sFUtyfwsJMvBiigzad6z16XV4efy53cbemTZ",
  "key13": "3aZyyaThggN1nu39fYWEBnqjcsDNVy6jdnvfze43Bo4b3g9BXhDCVq7D7c7t4GgRHyADpGSXkfY943atNGHHohY9",
  "key14": "3cqTcpmzG3a6qTbtvsgpNda2b4oD9zbWCGUVWpvWmvsiNG14BE8NrP8J13qVvYwHcZEDEYERwwHDkmRu12v8KC86",
  "key15": "4i6igDrhJLBpUen5Ft4qM5p6WemRiL4G6jfqbzkz2fVtntQnyXwwv9s3PnLdAawN3NFTaWZBazei1nFXHbKi3Zto",
  "key16": "GVNXKLUpSKJuaPpeiMcNAviqcoKsQqnkc2cRbo7WMv6RbS5ZwNdg8Z9JyaUiK3br2ZSFRJfRvKwiCDW37LaqvWm",
  "key17": "3mX5hgNBD2YZmDsvDVteqNmZnCRLNh8yqE2DRpCkYKAT2fkTo4zuWrisBbHe1QNXe6z52f1UrgcU8oeeUDsoSzMb",
  "key18": "5Hm7ZJyrixo8zwSqBivMUhHe7fmisSYLAi6BLGLCKJ3HVEpFbQR8RZ7dCr7imk9z44gQGQX2bvJszDhcoG4xNWUp",
  "key19": "NaECd7vrWRCCiEPmBrqfoFj3WXX5L2XqL5xqtqATrc4Ps6mWxqbqvrtBid1a7VoCFz9EMijHtyJKtJ6moTwD59d",
  "key20": "32wY1XCJyJ6nbYHUEUoB7wD8A61q8tMgwy7aEyijhGJEpHkg3wiMMWwfB6npEwp8cRrrwabKVthfBrePsRPwuTek",
  "key21": "3tii8wA4z8Lz6uA3vGxp3TmSckj3NpS96ChQZcNLRFHoS5eGBpAgvcyHPkwZVZAJN6qT4wFfY64qLCMReYfV2x92",
  "key22": "4ZnHcbDoJzp2wnXAVhnecA6wtSL6cPLfq6xugSztywx6ygVyxudgcVtsvWAUH4FCuvzL7BkzsapvWs46n37ZA7LG",
  "key23": "4BSwHrrk1Yc7vYjixz587RCvUnWgTvuSYrZcA2yXD1AtgeFtx4UzhvGhMyhppBwyCLY5LtStgGQLn34pxjeGmiCD",
  "key24": "4cXjgUhKyW3ogcAmNvLH79yjubUgKBvtXmM7JN3nrjMMRbKRFKzkDnLJHiyB4PcxYbccpPzp7ThH6hS8HyrJ2pBn",
  "key25": "2bkqMt76ZEJLwS2yercqKun1AVYZ9dP3UNDPPGqfqy81ocgwxKVb1eeD4JCuu9tAjToNVMyNnbTwYZn4GJj1fvFh",
  "key26": "5XWEpdaaR7PYE4L8mymL9jbYeZYPtNUpbzChRnvfmKPa8vntyYhXqpxBpFkZDbDzzQFBm8FTAR3H9Uar2eHfByW2",
  "key27": "4s1mZ7QhTMpVDPNWjU1Aqik63RfJVWmvpGwAGwQJ1wJMbGXk1PDFAnEY519goVMaVSVnMiuH4nCyQMzf2eSBc1By",
  "key28": "A56kF9FfQcFLhKPZXvtktKyNruwtkffgYQkRiBqoHuym6RgisUscXREYUam9jZfPsYeL8FvEDgUt91XsU4JRPTv",
  "key29": "qGUFn2wNgFgK7UXDYXcbkkyEsGx8BPW6LhrBb1X5nrYtTgBeMN6X8bdnutSnSZFqZHr4NSVkMcfPyJcBoaBGCdP"
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
