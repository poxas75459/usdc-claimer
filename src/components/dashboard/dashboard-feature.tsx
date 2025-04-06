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
    "2FuCFTq2t1TXSZe3gDJ4sM5pkX3MeJ7U54sBN3X1Q7jJgiUR5FG5DKAHSVcj6oJ6U4K4jYm5P4qnFxeofh6AwJvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YuNz8k15tgNeeTtWxArD3StE2VpgHNcBf61wUC4Cz8jCq1Nym9yMwTQH6Wn1fyz436FA52Rew4MaqPnbTgmZ8jA",
  "key1": "3X4xiU5RzybPBM2MrowJogFbQTvdYQDGkiwGKt5VvnK5yEGY8X4j38MLdG78kx7DaHhFhfqo31Ee1NwDZBX9BphD",
  "key2": "5doq7wy2wXKhZLQUis6Xqdn4D9FwTvXpjD4FaF7KnvHjMVBin4E9dZxBks847LebyntZGcadaqUaYXgp8bbfXzTS",
  "key3": "YZXacXxjoQY9BpZq2Ld86T8Q4GCCrKkvkoCHkLTdFEikNC2CcMHfPbuM5hWjScak5mXka1uxdh5w3CYtFtw4Awb",
  "key4": "4prLvTA163Xj9kjmyt49zP7V3vv2d5ZxsEkBQja5jFcMRN45ybqjv4u1FbAZkZ4x8iyuXsoGstoxEtCzsWJ1EkMh",
  "key5": "hzE3374XSsjbZUFVMf4bUg7ebdYsnQb2V3yzKHeXwJGH5K37eL6NRsgHZhyb3xFhwUBec2pDSxtXdiyHd7R4iRu",
  "key6": "5GKFKvPJyAyLHbJzPinUYz2FqWiKY4utRWVDVc4GFgdAvfwdDn91Uy1njoHzQVX2Gdx1yo7SBkG1EMqzdwCvcFSt",
  "key7": "2VkdLnWKGZVK7avEqkkcnsdMJocwfwfUoPJaJhx2z9Z8YbkEi5sLqVHTYVnPytpExALwjeiufGo2ruGnRP8B9x2n",
  "key8": "2vKnkfD6PWHNJibfSwepyWMQo9pqLvDdxPhgqaEZW8RvCkrDvpJwTA4L5ibZPiLSnP15y6ykJ3Kj1YsivJt4bk29",
  "key9": "3LniKdoYD9hwJRVtWERFBr966SqbhT5dkCZF7mYbW9depJsEXiYbH71LEHgrgJ7KjVjrUgARY6paP5Ejk1ixtJcJ",
  "key10": "3TjFMaP4HEuW47U3rqQg9tsaqvX5tgMGFwMR834ABzLUvt51dZ2Ecdt9WxgGqsj66cZdFuGZRwFDzxv3WnT6Bo76",
  "key11": "5y3bHnbDQ5Tax8tKaQhcdu1EJwG94MJDKaKmJz1Wwk2zZXL7LoDx4gGTf1Eh6iZqGdsz3K1MnDv9TdQYk7NkzmJ2",
  "key12": "c47aDaut3cu1q93CoMJgLf5JzoYFiWKotmMs5x29R9UW65weQmRWdPuywUvRbEp5JBnU4S8CeDnD8ZasUATCtZe",
  "key13": "5bdLdojDbY7gUVgn3gFB5ekQ7aswj7oHdVMvMReYL3TRMCQivCosXWLJNZe66qLDmywww3KhQtAMguSELpUfmz8y",
  "key14": "4CjrwE7u6AB44KCn1HSf243uoWJ6M9eEY8C8JEmkX5rbeD95ZU2X1yfLjpL4VQWN1yoQpshVx1jTyY9k89QA87wt",
  "key15": "2ivLWWwnivJEmNc1NJNGdTQHGo8ViRSDLZWrGv9NGrGJaTnZciCJajxkQdutWwYGSNacGBaUaZYq8akenxzZPhJ5",
  "key16": "4fqSmPU9qBNMNcB5KMMLM2LBXpnGThwkwMg7LiozNS56mFnDDgZiL6p4tSWJ2tbj7r2caWGjyrPnWYV87ecoGywA",
  "key17": "22e7XnQjKisuoeEMSyhu1LN78svBANhGQtTngeki559jvtQJpC89gAziHChbgyUcNDvnrzGZMzpeZE42xeeCBpeg",
  "key18": "2UrC1d7DsGY6YqQ3pWQgydqQkgXuQd1tiJJYsX4FpmqvHGeTLutEV2TtBj87ZGqZ5G5vLWz6KcdNzV96UigKCQux",
  "key19": "2SMPbqyqjdDYAeKzFJygVfNtNKnRA1KCpbuV6XK9dwrTwjECb2XKp3ogV4Z1qmCDCG6sjaHna3EqCR3zuqNrTKio",
  "key20": "2WtUJN7VLx4wpxvmfiZQwM9ePczcy9kex1fMz4NHpGqoJg47XCS46ytsWhXWE2ui7M4XswKcoiT7muZBYJD93E9g",
  "key21": "5GFBQ1gKRtxp3aTXrFrNQnnQfYcpaKNpA1aNEwUEt6avNQpj4bdasanSMkejN7J8WH5XvcVp3peY31xxaR9Pg2HW",
  "key22": "5tWTJUf6Z3gDSYEk5woX9WWLgbhbVuyvHDW7AAFM1zpVDLRVQK6T6cHgLsTmzSp3jCCCAnEwAbkNNdmK1ppCVV2X",
  "key23": "2E31UTYA8cs5miKdFgiJwv7SMaquGbCj61HRk74KnvzjRbkXGBh3iUBKosTmbvmBSGu7cnaRoynJZgGbpbcML7ey",
  "key24": "2f8tSg6Kxb9PydaVYtNLbXb15U45bxnnmJeKPibRJacBRiLDw8r7yP1AZ4LUatxZq8wCo4QdLXryrpShKQFj41AM",
  "key25": "644wecwpqR6Se1VzEi6wjMyQN4d25prdhWJQRRtCYVr93zpZYvG4FozmCDCsfpTC64SNqCurqJJMNUnpEUokWGxS",
  "key26": "4PGXnSkdostbGJfkivQ8xSiyBg2rj7c74VHqkga18pHj9kfMb3uABChQndJ4o7CSD4cx6J8SpYHvBBuqGMhsZsdR",
  "key27": "4Gq7eqnjTYnmXUB5euZDDnjeY7UpFVoLwLLodCZvkfk3hpy3xufMd7yBUozg1SVBr7hzgrVzA6Gcq1Rnfv4JdeRB",
  "key28": "4yfTqJgwRKiqfrG4YYoq4LyBNMqi9dFKxMppwcRsT5nN9KuVKzoExumWmNXKhU7gtrHvhw14x5WP6ZccakKK3Dun",
  "key29": "3rhPFKg6JV2Sa1MbDcGa3JPZSQbxxDmVcDiYLseJNzgRTwJnE7XrFL8ESd7Fvxq5ZCyQYdkTDDk6kyXTMXN8cVd3"
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
