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
    "3nbF8A2ztMbUHQdRjwWVqn5YgLXjT36paw59eU8fvjExqetXcHTUR8B1NDTZ2J5Tx25dUaMaz1hmmKaEzTjDh8Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sTKKokSJTyNjUkfoSAhbAvX2BGHEYyyoQrMGbwM3dGgSYccAhtjVqtgRwx6hScj82f4aPdVesJhDgrsFDBLdunz",
  "key1": "4AzDKM3zSwQKLu49VjaRa2gHeV9gu2u7JFMaLqBeFnpfCnekdt8DeenRNQAEk3krR68MGEM4GopYiQYCqMkRJ3BZ",
  "key2": "64XrWyBFegURvQ6KbqycVaztMLwGMAbKKf2TXTYD4BNSyBSEKWcoztkWFZsyEMMbHT79dtPXiC2hT6wpth4RD1Pr",
  "key3": "2CJU9dwtJWBweYUKcksAP61LfAFdg5oonnftYn8iMJTVzigTSVKt3u37AswABawLsmMbtgZPUVD6hSsXspo7WFD9",
  "key4": "3fjXNz3abZgJfHfsCyuJLeweNz7vC4giDhwDWgVMFMjp9sx9LGRrEpGxJaV6rr3S6QZGmMtE9o1kVcN3q5AdMDfP",
  "key5": "4w9SUAFZt7bXm1sUCFjP9ByTCufE4xwBKQWFUygKHpETKKQPACpt68saFeNJtBtm155P7fYPQFRRe4T13NmszZ2v",
  "key6": "3Lrvs7ofB45ScsUbXhj3gCr4SELdCMsnDv2WBtXcNDkFQ4ac8wVu5MzAB2gC4MXq7AY1H3p8QSyohe1bgxLoF1UF",
  "key7": "4kXb2fbSF3oLLMg6zMYDrBXCPofBDd9nAHcCAFDYuUMtstUC9UJWb9DogKSUgeprmyr1XxnNQiw6xBhjbQi87soQ",
  "key8": "3Laf64CC5PUR695cGZjsDDT9bmy7Mm2PjGUkXD6bp4Vs9o3gF4L4ttuNH6sECnaksfZwZac5koxDAWwhRbhWAd2k",
  "key9": "3FkVNv55PoycxvvP2T8eaUJiG2wBdqsRv7RPb18wbzjypgmCnAqe9JmveGAgxEuwJKGdnTHrS9rKQYT4Tft958m",
  "key10": "5vksUq8A13Evep5omNer2aZTDFBAjJUnUK5X9t4KPYM1c1MiKfJUbjh5t76be928Yyr4JQJYjNKoav2qqKm8WzjW",
  "key11": "3nBzbjqBWZ4TW2UsMHtQPBfMAfifoHvtGk6QJXirJKJ81pb5KDDgdCFtXzDgUGSnMs5dh3sKx2XzGRQ8kqVaQa9T",
  "key12": "hAbRXp5VzDugXXnYAcADbMtH5siwVEv8nJziqun8ZqTeWA7CZew4ixgcDcA7FqcPs7sm6mRnS2GWBivEP12YBjy",
  "key13": "o9d5LbdJLSDAoVdBCPowhZNLbZkhQhmnHm2ah4EnrAXuL5YAJe2ZLYoZgcSgHfkZkchZ4bCLnkYMfFak7qHdSE2",
  "key14": "LfjrszkoHHX9vfUNdQ7HY7VQrTQ7F2xRcAi2Ktfsc2GRT7C4Ag2Pr2q8KjN2GoxyoLRSpbLrVN9cofTmtr8kVfn",
  "key15": "4ne4BE1hbeKQkbRTDpuDBhmDMggQuwrWo2HfkM3YeVk4tp8m4WM3qPWwyhDM4JWBG9GF5FctRAFTE5ZXrAFXH18a",
  "key16": "5kxpMcTjs2iWxX2JTo8jNwokL4UCmd4SaGedTkpiK1H7j43LUQKapRHR8HgiBDvrYBZ2di7Sy4gV1d7bfbkcTt7Q",
  "key17": "4nDUHCEnyfPkF3mkuNgDSH8VYNWJnyV5iAMJ7wD7ZBCASaTjCDhTA2WwzQaiY9vj8uZyDJ2iog4u2zxKXi566QQA",
  "key18": "4jyhPRmDF2r36FxfevBG5KfS8a5vqKsANDL4WpC7KrfXr27nxcmZL7eRyhyX8t8BCThpJQVg7kpQiMEUMj4xnEXp",
  "key19": "2BchaCys1AVEBYZsDhbr4Jbyg1UMqEuGVsVtMJ3bYBPk4DA6gC75dEfW6M6n7LiYnAvnzQpDYKXkzKYvMtN1cmxA",
  "key20": "8nE2f1NwpbwN4GCfhK1HCzp3yNhbSt9hPCyHnvWe78Pd3qtjBAC17sS88t4tLfkY8UQEyrRbAgrNFjGSMF2cFdV",
  "key21": "57wH72YjSfidAipvf3T2vkxB9VbncVsDJzkb43G2yY4ngKAQfkecbksZEq35dycP3YoQ6xJ25zsfuKHw8bo3FYUM",
  "key22": "3JL4X5a4DAGHHXceZESJGiHLJ2uMfZP6C7BFydM8PchHQUFFjZaRhF2ABJ3kmYm26buy8xL5nDJBkPwbWX2MvT3R",
  "key23": "o2AmY7KkavVXVYVdtWqbNpSgr3yNSUTCvZ4kBybYWj22ah8cpkJK4xKecwhVFXVgB1ULW8cAWGyGcfNN2smBfkA",
  "key24": "FBs9MZxG2jTDitZE9ZBXpQ5nxJ2UHin4NiqqVVPorYMaCauW7GhvofErZjEPuPqZZamjPUo6hqFGkpV2r6sN2B7"
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
