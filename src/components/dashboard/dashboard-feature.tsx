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
    "C1M6b7Y9V3Q59Z5aUWVU5kNshANoVgea9uHXrTp98Kz2JeGtygQYFY28aC5BQRmL5S5nH5XkWkDEhGwZMGL348h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCbfQUsDQYX3ZvLMABKQsJAcQT4aNHprS8fwRP9avjL77nSjd5yXo1CwYyocyzBxqnkDveJWABcp4Tex6jM1MFQ",
  "key1": "556dDFqrKWMHzeNJAxDQ2JRD6nHrM7g49KL5NYr9P9zyRjowEqy5aFvRhMHcmtFSjPpAFVPojmNu3Ao71AN68scz",
  "key2": "2PzekzLY8Yymo2qyKwwDDKyxJQTA9rw6disvttsjSpkxk54rUxLYuikHdTieb2JWy8tzandG7YFTJzZccdjBHXLC",
  "key3": "7R7QXVG5yLm9aW67Wc5Kyb97nJ5A6fxEEhuGiMaff9pkMzcDNbKn3iYfr6hvDnHztJrE5TZxv7kcEMMQhYr15am",
  "key4": "3ejtrjeKBVuNTpqqbZGNndjQZ8yFo1an8bsRUgbf9e3qTZNL4qfCX7iS1KkcjgZ1DZdzU8mnhiGJ3GE1zojs6SKc",
  "key5": "66WL36b311pWH86FXHGugUGcVkFtCyVAUjCqT7fQQApvfF6vMmqMHi9VSTLppxwYSA8UGsrLUbMaQJxDgeKYaSF5",
  "key6": "5RzpcYWi3zUBRjexszbp9W4qNLDpzvcB8MjpBjMQiDQ9DikChb4UfcPM923YP58VNBew31xoY5jDzv7ZvNBiGjqY",
  "key7": "4DxZ7RgvfAjDR2v3V33v9EXk7qXVFDNr5VRY6YP79948S9bsviMmLiwXyieBRtVZHt7bVn6UcLxE63F8yrgLYp5U",
  "key8": "5aUe8BU2YWgPdNQJVdYKtb8AyzNGkhVt2SDf85r5hzeXZMMf6qvd1k3okTynYSWF9aCU1BVQ4p29Z8t1YvcnFZLQ",
  "key9": "5Js6UMHk8zzTPjVkVqXCHGNij62v9TXZzExkbzvZkfNwc5DKuXgv15pbBxEY1jHDq3kTPMNEZvDSwsNb6FHoCWyZ",
  "key10": "2XiGqWie2B54RmR5VQ8ECQWv1qgHgtZAF6PDSJZ6SXemSUApeWUWzYwxAtYV4taf8y2dwkeKrP2vczpxLDMk3Vt1",
  "key11": "2LNmGzRbbsoQeVxCz5SiiZG4TML953qjArNfZ6H8tuwwRcYLQqk7C1sSpHnqD4H5m4G7FAK8VdgAjNg5MBKcwP2C",
  "key12": "3dv476ptAYUueJiFikQ9xAPTzJ8UdytvusezKZ9rL9tTU8PrySkLaMFENXg5kBBEUXmpdSv65qWK3BmTmJYziFLc",
  "key13": "4xeQ6nM9yV1vgFV5VWthjohzTEJzsbpyDsnimF9tfP9EhFhXfG1M3YysEjQyFkcmBQ7JitKcgiQHPKDyHNVP3iwE",
  "key14": "3cqzVteGhTZwZLV7VEPNQeU6wibw1JvfL81QPj21Ruas4sEBDwKPz2C6mpFDUrHsRCJxYLmbKRJRnJm9wTrxuPDW",
  "key15": "Lf8EpdD3paynRckTvtWL8Tx5YMWZzNQALwkVJ5awDwpaD4uSCTtFpAZaVvfgAmukCUNt2RRk5fQrgogve3vCDs4",
  "key16": "DKRgxKkVVJYLErKThdbcbKhJp1TGWSL1bhtHJBiAhL4j42ThYiF4CmY7oA6Qnn6RoH1ysD6JabgJS25LBaKdGsG",
  "key17": "etSEDt5J8dTk3CkS9QFxrw7Q49ALaWK2oy5mb5zcQRBjaQCknFf8GihGbsyVLbJUNwexMQWHvd2UbvUbKktE6r6",
  "key18": "4WSDuT9Rj8WwJCtdFczWFWcgP4ztxieSXLouK14WqhvNvSFWqbtBoR4V9oj1RY5eVBNCYRCoazR29ENyjT1sVem4",
  "key19": "5cCifhGZkchM7gB4MxjWTyAdvFYdZh1PoXfX9zwJesLfPTS2XDmtrDyhHb7xuEu4Q7M9ifYj5tR7RrLPatVpR37g",
  "key20": "4FCJmZpVJ3Stc6SnEP6g1HX4frnWBfhBqis29TenqGioRt14b5JEH9E2oUf4jevREuGu9nHcUpAAQ8qhYSaC56cf",
  "key21": "26ypQyUo6MwUGxjnea4fw3yfdYJ892CzF9nbUkvejXGaHdw5BEXd48zirEiq4i4CR5MV8VMmffBi5twGFr3e9Vzj",
  "key22": "JEEQr6FFD1kE8DjAtje8N2ejZu7cidaWXUZvap5qcgR3EapuRLvT8GucDoaG7hEciUaPLBcG9t1rdS3WjxQxfqu",
  "key23": "4xKqupvPMKtd9Zp83ED7VTuWG4hb2rrbnW1HkQWSZG9xtEuYohLkgVWzXyu5Do8Neaxy8EvcPWvLJCcTUig25C73",
  "key24": "2hRqMZ7jvKJkg3q8fwuiyZJYr3TpKQeuD4jsXQfH3ZPbCcGgw7uTzcDCDheemXPS1UdLqHwPsUXsy6NabzD84s6P",
  "key25": "5C7nNix21yyWH3bdez8UErL1QmZqWrS5CmBUZu8aQed2Yquf8tsQnRNizeBvY3UaSHVFd7SyktbZEPpcDSkw2G2Y",
  "key26": "2LoB4jwymbqmm1sgwqu1NUomoFDjZSq2RRkZPtoLfF62A5N2J9gCST5KkYTENZcD6MRXZ2Yx2CFBGvPMvpArYEnF"
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
