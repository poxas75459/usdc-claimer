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
    "4uUze4AnSu2dPPNLKdrfFh4LWpschVBBJmCAeVRJMZjR2PxD5GGJP4R9R9SpUcVKs5tXs1b39oTyDb8jDG6Q5yhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYCNUDit3swRKc3TXjzhm7J4B2qUQhkXTPJC7P9YzzpueCAeAH7CBv1k2KhZJ5HC3hWbBb8aywGVJvshMY8utBU",
  "key1": "2cj3ZCBQVYif33sP4wctQaUqN9JLY9QbMb4REE4X3Pb3Dk5gvAUgYhcxdn1x5vfHE46rWCMPWNDXW52UVxkRvC8w",
  "key2": "biLKGCrwk6FuhvmydzBGHUYpvQFbj2DEzvS9E5a6xQMgtz9X7iNitaYdYF8dQTb7fXotfNRNGtF6tFw2LCbzqod",
  "key3": "4Uo4La8s8uzPkYa8yj9MyW7zDPLqKQErtXZaMUc99fS32UJhMRVMDP6HBvBEHLvAzy9ANjXvkEgqLfJ6j8YtNiGb",
  "key4": "43GNCeCEZo2NNij9shC76Bx7YMidGwM5FWw4b8R6C71T2DLXc1YaK3NxKL2o6hVoonJvdjmd3iYDgkxj3FTwTNwf",
  "key5": "5pPRoohYBayQnxJEk463JsmgV3TBmQQdPwyeseNJQ54JFse3MeA8WR2nWUPubtzoUge3Ak3JSEuSu1zMvaaN35oQ",
  "key6": "3TVwcsMmeMPzhveZZHRPJ3qKmsuUyBGG2K3y9F5f4GndVTip6CxrCaD8F8AUqRw2HRm6AjNLqJmM6wkQGAhZzF5r",
  "key7": "2afg69LuxpK1JSYymXKUysmAABZDH4W7vHvJwqvUNvsp6dnpcpBBJEZVMirooRUTc4EbujTwWAjFJHiTbSKGJg83",
  "key8": "4VQLgum4s8zQpP5vUBX6eV5gfBzpiyZ8hzmC8UaqsY92JsHLySwwrcicvgSYy8iK6YVxxfmnBmsciygugd3xTUtf",
  "key9": "4Dr4PeK6TRMngNBSfWcZ2AvDVqg7TyV9qtkyQBtFZZuc8Cmu4RKXmViGysSYWzEzEwRBsXTCUfmufkPVwNSp5fwP",
  "key10": "3cyN4133XWnMuGfUSVKD2FHoQtnEq1DVvjCWSVbGVJk1ty8cUz2GFrL38TK1cMQGvoVQi849NRYbHjZmNE7Wh6wJ",
  "key11": "4dWFe6PgmMkyqPxHtBCfMn1gceemd4qGVuRMEoVxJbCz31jHLnRX1fQ23LBCgDyWNnnBMuZZoKYmPiuhJj35Zc7C",
  "key12": "3g53RyvZRVBQod1fybVot6B13BzBLh83jv3cKb11QDAQ6rDToDNjFo4i3fYoojztrLku1raJRj1hAPVDyCFo8oMA",
  "key13": "2fEpP6uQccr6VoVAbJAuJQwTgQyWtsTM9NwviBkDoWhvr4FgrD6Cvc72D6SkotNT6ww2E4uV9VoiZSRtcGgwQBC8",
  "key14": "3hGMV7FWW2DPvnKhUMNUELW1mKFy4bGjLjoDfxw8b3h24ayMgd4xtmRBGuQmGvtEzT8Jsyv7dFdRrL49jkPsKuYD",
  "key15": "3vzJ5DmWmUvVzfpiGJhEc4e1KwGHDS2huSB7aa6bUf2Hnnp3BjFm8vVWsNVTcxsJTNgzBM4dYytZMrkgbmq4UQZW",
  "key16": "5W1S9PbqGdLYyfL2g5nVeR98tpeMdApTygdFtPztpUr2WJAwng9ygjQvNowCTxtLJe3aJhPa6vvENwsMKWXv3qsw",
  "key17": "613QCJqcGPUejLDiJcTx2GJWoXn4Z3DDo4nQGsGxVEEH1UWwHBG866btRLYN9vZRZArzPUzrzUqcEZv2SZw5TQPw",
  "key18": "59FW6csAKoDrApBSTHCuPxDtjE8RQvx6PgvgWvC7KiKbckmNBFZobsKcFtchqCABwMmt23CGP5cwijofAzna4WTB",
  "key19": "2pf9AXkJeMK5FHGsiibtX4u1tC4E9ZWErf9PrxALTKRiWXDrhD5VkgD4VnM6si6Z9P7iS61iqxXmNZLMfacWuLMJ",
  "key20": "4KqXpDFfpDsC1fUxxDo3MJkzMVbFVXQjZUbJGbDsztN8ZgRBXy7SjTWATstdjmbXmswGM4dg85DfqTnjr5EXRXpt",
  "key21": "2tFJZ3xgYbYoqJGnex1Z4ysoySiJFWDrLBALx3vCgV1xm1MYAA24sdJ2MeJZRGcTPMukpndiMZ1KbNgAc526d2i6",
  "key22": "25hioBNzeyS6GcJHNgKEgC3nwSCzLveRkJr8AWMdgqPj6kx4v3qgJb5S25qiRaRNAkStd6dS4j5aow8ED7CbUbZ9",
  "key23": "XTkHYbFXCYDPitozw8QXgRJLLwxLVThtWuxdXAYPHsnwyWxqdJm5ZHpzqKBSfwLUCvjefZHAVQVJnBNt9rCR61w",
  "key24": "5i2QV2ZWFfoj9Zp3QLr7zR56JUZRvyeA4bwEz58sUwChUxSAzbFvYy9zmPEmdjH9EFX8KDZqQa8Zy2zqoxWkbB99",
  "key25": "3Avu3z5xWvkjVR8fZPSQakjDfPgfPHYpdDQpUUQVUUMCim1Eqxn7FsG51m6oZPLHrfY5xbxzkPjgP8GQeYWUrLsa",
  "key26": "4Jwjwx7wgJ66qS7fxRxRHkLFBoU89xGL3F6xcC2bUWHLQxGgR6hX8E8pkYvaGwovgd5LDEd5fXTksQNaXkcWRSb4",
  "key27": "61aoef1rPnRHkko6uTTHUG3UffK2r3WPGhbF69jeAH4xqLDT72ttuZNVHrzApEfZkhA8EGPKxJLyZpZmKZKXQNtL",
  "key28": "4Bsjdv3G6sCR18KBh5D5R4vvo7cFNM7BtMg5dwzdNsCao5L7mFmZuEsfiU7navShjhoFPQ4ygJVJa16gMDQ2MRoz",
  "key29": "5QD2Gax85taXq61uqozhmeqES3fY6RM5Xsz6TF9XUChwgaHxDJUDs9r4w61mHAevgGNiaZioDkWPpRBcwfhhP1o7",
  "key30": "5WMNbk7evL19JwShuyB6esP7uF2Tp7zU4kdzGaL2rovzn1Njqu7BfRFZ3zimVYhBCUXRmhJJ68dNgTVXqj4cmDuk"
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
