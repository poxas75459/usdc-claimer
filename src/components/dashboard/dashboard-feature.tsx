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
    "63DdtcSzRSCqKTFHfAhLNGKc72QduBTFLWkPUGnFfQ2qRkBerZaTWr1DP49xzxcDA8oRAtUSVyEyriVzHXaKZxZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rq4GGBbvtX3UWGK9bbStNPEapQGQxMBcAdDDiEo4ELcK7q5FARBNMT3gpeAs13d5QdDA5Gdx4bpTrRTCgy2dim",
  "key1": "2zYEDEx7i2bFTtNyrNMJ2jdLM4AmMtav3vstMrDBr6q5ZXGPPyUC5B3aY5oij1tzesX8ootr3qKLzz4KderBw2rV",
  "key2": "1CWq1UuMSAJfWcPkesYR8MvJWJUMsESQcpMnavgbGRo6LXu5HdxbyeQEtoqgmP7ia5mNEmJGWbZ5RfZBh6CBmrQ",
  "key3": "45EiUfZ9H5ACxgMs6bnm59Yob8934ChuB2Ad8TgeQnMV45G1UyfyLFWDEeKfmiew7yu6MfpbrKpF5VfnBFEKjEZt",
  "key4": "FbJNJAFewH1QnG2fL6ocDw6iQ2fUDmmXY2tXy7p72QEFVvRVsPcB5vvQ9PHaywPWUckshqq1cDh1ytYRiY9H9as",
  "key5": "3QEcHYx6EuzuFLUyn6izseFHNPBkTXjfGGJu2fr5RUWnnQ3p6fBTzJwFBRHWyxPfxTck5JQoNDgCK35BduuHPWpm",
  "key6": "3kugN95f5B7cHtD6xTZEsbaMAUnqgwh6d9hz369L6aQ5T73QurYbhYbVtKyPrJqBie9oKLekcMDkXogS7mEK6ZmF",
  "key7": "QzxNE61P3BKDpnxBKuNygKRWTvkrJCQjrCxfccEJNSE9YUrE6CEjP1oHctiqr3rKT8U24kbY54ddKmCuusZVSE2",
  "key8": "5JWXoMoJ5HNyXJcLSCQU69yqrTQjKnHUwcRq7eKPrKyEVzaupporXEGtuhbSg4uU3hBfka8eTZrh4Th4oihUM14k",
  "key9": "2rseLYwuMaoFYsA3ZxFoyJGnxby9xSNU7F7fNWWqPxkXvLQXRkxAn7rKL5daJ19RnfDQL9BzPmqwEm5TfHQm9XZo",
  "key10": "2d73Yzpk2qVmxZ3pPVgj5TY4RU3XKumJSeNYoQauNhNQ9xd5CURz4hpq2dKWQHY3WkYxkmX1s5SirimhJjoi2NxP",
  "key11": "3vfuMryU81SQSQgvxhajG9ETyyAi7hTiuvrFWZ7LvFQtZYQci2wkGwHWCrZoTxir4qV7mumN28MhFNKUZZjNoMAw",
  "key12": "3m7L3RKt7ykChhUD4DSqoXaLBMEFCKXqUXUCVxBP9K795KAudmnVRehKb6SFpiWJrgwDwavChWnGHTq3S8wnunth",
  "key13": "27bMJ7cACbaRtZw2xrzaTVXnjiKpyW2LaWDJH3EuqBdhrjLo1ZUtFKkKBcU5X9fd7ec7CuSSgLyLj3h9GGDZDnKS",
  "key14": "4xWkKbtuxE5XaVj9XXGKjy7wkxduiF6PVggJEH4F5V3n6ePi1ETFfF3Qt3F9kHVrLq8fNceRjWF7XVKphGAAKqBG",
  "key15": "3qWCVjpqnxC3M6NQVA3ZPibCpP24JAjhqfdFSz8v3cTnRyGcRnsDBM9i6TGkB1eyHPY5fYfiW5RzWiHPnNAk7VZi",
  "key16": "2EpAFZJ4smnFgkA5EPbzAL5pkfE6dhnXt9pNZvtqKm7mrN2idf1rPRrrp93LozpbySoaBkrZ5C91gnmgMyLwtELy",
  "key17": "2EYYfCFaVeugJ13G9jAoosNSGHa6TytE5AUWxMq9gApM47tLSweNbu8MWx2WkjTWDEWHSZUEyv3NEeZe3YasGjaB",
  "key18": "VdqrAm5DAHZNUywQkzKE1PDQEco5uLaZrrhbta3pEBwSpn4eo1X6ixrSWPCAgzC4o8vcBQkHCgrBQA1WaDDVSzD",
  "key19": "5i1PK5K4FExJMLHr6kUN8VCJpvYiFYev9PLncnA7kVZBNmfHBX7PyR3MwHvQgszukYmQYeTrsfZ2CEXomhUKocfB",
  "key20": "3EQDUgNFmaGG3R8jyqs98zwMqZbFUCY5m1i3zT5bC4GVc7cNzHFq1kcT6FBn2dtrRNrHTFc7N4BoRWTmieqmZgUa",
  "key21": "3nDhnmeqbjjQBy3LxiVfNqTXPssm5SDemhtKiuoJws2enscV1wa9sPJZeyF4U2F8s1sKpxWXqRgKj7YGVMkt6jtZ",
  "key22": "3iSds9EgHtAoa4F2PCUK5VSmPra2WHGPw79teYeqDzbsZFK5eCnzH4takAHd9p63TtoU4a193z5Sr2FT1zfxQYCj",
  "key23": "Rx5HgtyvsLme8H9dwGkA2jQjjJhKASSp8a1vgnvqaJjazNsnJ1JAd9Gap74TQa3dSWM7YMZUyQqkhLFJmQ9kasc",
  "key24": "4NQKba99tSgKSxMeou4ddgEymAi42wKsAaSS1pYFY4bem1WVZdYtWuFaKeS8Rxd3gf61u2zFDtciEHzenWddNMjk",
  "key25": "3RqDVEcbVP1inRhchXtvkp5jCSrh5XC9oPwDL2s5UE6wc2ijbp8RH56TkQyc54WHbgQ1pHma49m5bydy92rMWXi2",
  "key26": "38ksDmLhA4Yr6gxPGi3JcSbDt9TgejHHdfHcLqdqSf4gQqSQXn4Pk6on4x8QfSQN8wjwArjLea7eLcsyNuciHDgW",
  "key27": "9BpPzQCaRybVkFcmRPq1qYaBkoLKJneQFCYpXXHakHghDxRJRWZUm4zXdP5Lwmz9JXUQqGKTstV1WpvQL2jetEu",
  "key28": "5JocStD7ztoaQynCQTeiJ1Zg1f5fz4Lv1PYoQvPGGif65PRxVDUFaEme9pt5to51VNC8BbrkT3XNmgfFB9qwgnRf",
  "key29": "5Dz6Tp9Wd6xyLMF7WQdknS6RQrGMTGMJ4Vo2vQS4swQNpG4fNZsyMt14JJuasLUK52ebvhHi18ZEsDyL54JhyhtH",
  "key30": "9aB7us2pwDWycxgNGMDydg6nHzoQknyG1it9811SrL3YS1TWaaDNRT71nzfbgi4yTu5TqA63YYrEcroG9ctdxXo"
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
