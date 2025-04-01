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
    "64XFxdv92kDAJDX4ysHDnUvVTaHKjYSy5c4T3FGDsB3VS2HLUhViJrorPHiauaUdTTnCLxj9FtubZzUcVy2oSR4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67irXnYLXTpzFh7PgQ935tCaxVx5f3BTN4ycmjcfTRWy6dZuYxdfj3mKHDYynNTszwbmj4WtCEWmDscz9xxrUaqf",
  "key1": "XmMH26cJgYhpTzaxXfofSqMHgg8zinBxGtWZ2EX3vspLHecyEg1JM5QE5XKWFy2MXT3yhXeUKErqR1qZ9n7FEwE",
  "key2": "3gzgrGYT4bS5dX7hGVqCpQUktnuzuzp25pTxQ8qMSapYWQFoUSzqvLp3erqyza94pYJtChWRL4DHZqJKGXerqxSR",
  "key3": "KHXi6bCsykuziwVjpcWTpxgVJpKYC9VkK8KQMRKYSMzpYCRV8LZs6wpJG4qVLafkWZzwbHRERGi7nV3E1YQeUv3",
  "key4": "319CGxcuJdR79FFSvqzs6CHADsDDT6CsXEZY3LRb5TuobqVYsdh2fofdPyZvJxiqzpoFH3c89c2kT9GXCo9ALVS1",
  "key5": "3YqjQqYZAhupu7ZMxRhjgxhKtc3LxwCRiawHtVpdeZNooEnKwCcbWYgPzWRJzyx24SFDMjM8DUzs7CyyXmay5wk6",
  "key6": "2C2kdUUuvGxVEB5kvy54wK8RnCmJHeBtPzLEjHtu91k5SSf9giBDRWPqtUqEDaFvxdJv9NcyaUjysR3vgAYbeLBv",
  "key7": "gFGd1sMCJ9XscRDFibdqNAcPBE3VGe5MzKBe2EgEoTJdDJAe8GvczSxJCM1ka6AtnbLnhsPJ77izgtrp38hTzG9",
  "key8": "kqTXtZppgdTwjYyNTveW4XjevysXgGmbKjSAeJ92xJPQzWVyVnARTJhknV4qCiWxrszgbL1qj16HkP5gjc7pDpc",
  "key9": "4RUYzx47c9TS9im9j5m6TdfnSESh2W4LneV6LRbGuRT1hJ2d8iUGM5axfoNrNbWLGGGEogqwFKaA7EBDnzYhWqF5",
  "key10": "gqD5vvDX85FjW8NDUmasHdj6aGczkJA3qSjyMGAJBkCKzDW6ZTLNYt2A9W9VMBPmc8Zun9LYWQozQL4rBX5xDVT",
  "key11": "4PGGpir25KuSzLaXnRBopUKKQG2CEkojQWsZhdpH5NVVd1vYPA8DL8A2vhxfQDS6vpeQLG5iU3WXj95Jxh5FdXdR",
  "key12": "3TG1CoBzqYfXHvBbX1KqtJrMJwSLveJ94sc8rPPDZ9oZi792zaXyyg4vGn84AbS89VeiMRxdsNZwadP8ML8Wy3iW",
  "key13": "2PjYnKKQPxL6UcmTpcSebLACH59jYx38EKmqQoHfEfo7fZATdZThiaiFuS9zGh9wLteHu8cscGMYakc9f6uVWD6a",
  "key14": "2nq6kFtmEaWSEpHUT9a55FXVs48rCZQk7KoZhBdUq96hEEcmXckoHDbDCAZQYNzuTHTsmNxSigd4XXcoHFZe66H3",
  "key15": "36PuqN1E4og6YcZKK88SvmUe29ATSoJDw9eaofGxX59F8cjWxBE9gp17V3vzQZnuBRbRA4mHw7TKMHahXNAyuZyX",
  "key16": "4g6z6aBZiBABN532r3JPNYVYxhf4GBvMKWcV83kQGCbYN7EirwaFiE5rUsoEzz13zwr4Ev21L3nZ1kWbSs5tJHDv",
  "key17": "4zGSKVaw9oAHXM3eGdx9rEs2FtRagU5xsufs12aEmhCV1Ei2FsJifvkMZqmQFiqFuLfvXy91n78tYEDgPZt3B7b1",
  "key18": "4h8Hiue5rTMZ2xeZtALJWiazAPyxK44LmqaXtXmZwhGyazwcNgNxGw3Xca9mWgt6kVRrsKYKMpj9q1EE6C3tmYL4",
  "key19": "4HA8QRZCGHGKtKUqsLxs8ktdGd4js98qaJsgCPoytuhqNWG3ohXfDoTMxiLAdwMBrzQ3CwEeSSUCvipzy8TLbfTt",
  "key20": "3iM9GyKvEg6q4EorCgXokNfEqQFyCGaPK9ohmE95V48mptLSKkn6JeAG4mFBoL6yg9A1hr39Enhww8YLogqzYssh",
  "key21": "3iAYF2dmhW5zcnDMbxYfPyF2AE9wotLH3xoZfaoFe6LG9rv8j4z1rHUmKEcdw18ZdNRT4uEpEBWhaydGYD6PfMiN",
  "key22": "5bjaXpPVk5Gz7iaMKvdC7XtDWcqn4x9cARzv8fWkwmNBj3zBF2qBa1J3ZExXXFjAZUom6PMZ9BDYjey3husxK532",
  "key23": "HZgj31pC7eNuLmGJXd5ci7aKwyEXbCwmZW2kkNqy5edVPwgBB9Jj1TK65VprZsHTkBVb1aS8RWjA11yK6iUYF4U",
  "key24": "596MGZx9QaHYDCT7dozbmSiUnXhkHbLGD8qdjWNKCgx4sS2ZxvQudrnys9pHFcyrk3AWosyL4xYUhiJ7a4MdUpas",
  "key25": "4zaAirNuXaLGB4RTVNw9hQgsXY1vWmWAaqcJWHFLcsRaSVJWsoPcK4MW9JByd92owNgRMAb1reaJW6KLcGydmhJb",
  "key26": "3PHG6A2TjFpwDf1h539sr8vEPV7GC5EdhiVWrMQrSfgr5kneyBMHqVDk8URkz5emoYvZSobEJUuZousbUx3GMimp"
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
