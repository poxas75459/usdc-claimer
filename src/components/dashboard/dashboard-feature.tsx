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
    "z2wPKztqzSQt8ZdeHfDa5nXcTNdc66ia5vijqDPdLoqun6R94C8MvvKvXyXeBmi7hX5J1AfkfTBDJbxn6y5gwmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHAG6c8sFx7W5va2gCBinxehC8LAabnPV7DrN8KdcqkXAxrMBycBjf2pm2cWRFzjFfNb3iNaFoPh5MyhbsPRUBs",
  "key1": "ksVDmiVKDzYrXcVc1HbByaJHFf36CQoWkoGuYDmqwqMAmZ3imHqHS1rwjakNWmWcT6EzQHYTjr21WisUg29m8pN",
  "key2": "3Hfh7Dz1y5k9YE9SUZN3MSTdMgsNrmhfC8zh9n29AxP7k4HMAvdt3EW5BSbGsxDXz3iQ5tpDYGbKwotVHCnZY9BN",
  "key3": "HnxKh1Z3mTeaL12GTAvGTfNgy8avG87G6h5xv7PWWGLjNx3Nv4JTmVsPXz1g4P2Lj4iJNRKBKbzX2HrQoGiYkBD",
  "key4": "2mGh9QiUTGBtzzq8JdVqi3XeDusdYYLvR9wZPAHbPrx3QxoxYare9PoHBSNH9iMicVCUTPJu6VnzAHaKzccLu9Fo",
  "key5": "2F5GFq6ZQc4DEdjLikzD7CiHJmYpS96wuVQi71vqCenZTyfhu8R2px9QQtD4PeiNHWzJ889FMLVNENAC4UgvUibu",
  "key6": "32LzZjuQ8jQYxbicj5LQG69pmmSCdh1ypxFwvmEGFJNu9MsyRBqvJKbN9pDZiy3s2ewNTc1fVoJUJJM1bJcH1dRi",
  "key7": "3oSnBDxrwzUyjhJzkgF2PGXGCyQ8hA5ACZs4qBhaeErtuRNcKddo6JG6kJe1iHeZwB2nmXbf2Y6qdVW8BSUH7zMt",
  "key8": "5mJYak1PtxSF94cFPZHN3hSK7nGs7EGnKB3CmkbuQsTukWZYsvqdNUF7m87151pX1LqMPWUbiovVE8kNo9oxJBvi",
  "key9": "4QzPNTyR7UsqCx5zceuZCvKhsshXLaudkXoQuzozTEk5Rih1md4qHxGbhkAJTn5EbeZLF2BQU8rFvZDBRsFvN9Fb",
  "key10": "2kBHMcHVSRfFQvw1FJppdV7xSu9jnBm7aPMoDEPp352FxjM7odnDMLeFTeoGtTy2UwQMB4d6yFewp9nEHccUjfGQ",
  "key11": "4d1s8TLKLEbovqbw78xRDQJaQJoqRuMbugRZZ5aezvQDLEkYBwE5uHn8RXFmusXbbK1S4wLgn1LPwdeuT3wyxwp",
  "key12": "fpQj9oJNw8oBQM8tBUTTgE8D45TeamoBNUQZdAhv8uSSH3isBQUpNpVfuPSKRyQ39pq32xExVGCBB3uYRSDiAVc",
  "key13": "33bhqaCgcb1NkT5YzgXD6RNzUwTbi1PKAYE3SctXAkhGAa5t9X9rkX3zNQeDoAvu7JVgQ1hsgq5KqPsM9kijH8KD",
  "key14": "3C8iSprZpV6v8UPa5qPj9aFKAsD6Y6atprHi82py2re75YUUHu6zj7wNkci4aYpVFDAebFkqmgEBV4trsPSZHpL3",
  "key15": "4v7xg17ekNMai1V6uT2mYP2G1EY9dE81tZZK2dtXeKtZoVZ99ackfJoQRwqYfpzRvaaWsqUSgFECmCTkDbUVgfR7",
  "key16": "3sg9E3bBxVDnrRk8MGRwRRGjKPV7AUfU6NdGrwJm37K1AUnpxEf8WHrAfcdaWf5y4FdSLhjaTef9JeCV9Ug5nd9E",
  "key17": "4n8Jh3o1dFbFpaoWVvhnngxu6WLpc8YPM3muzSWp8S9gykpndFd8tgE9GFdby5ub1QoxoobxHhz1LU91JJ3g82XQ",
  "key18": "4TS8q5YuzmzTB53RLbhwLCNrXeGvtRfrGNpHVmXcJdJYVAE3cMDCwXNkTSWa6te7haKfTYU2E1eNWF9DxjkaemPz",
  "key19": "22PptPL6GyqiFeSGyUuphndhtsvggA26C43QLpVB17LcW3ekFZTpkVbC2YdvTQsQH4zXRcZ6gxMLZcj1dS7hWstC",
  "key20": "2NUfumpcXL8mzJWkS69tiw236gyGcmY4sF5EH4Y5bY7G1oysvmyZbQZi1raQpr3h3xjYjYRH4igoUkRxiSKVToh8",
  "key21": "5oDLVDmDKnpeSeX2p93XLn5itXRYwt7RyYiHTzs3TjyH2S4EdVFbzg6jQWAbhFxpyuDJLXmPRKARV46iukHhRHTT",
  "key22": "2rcPApfGYi6TKAFMgsBdHpGZmVqk7gyc6byKVGBZUzcvaK2myxxofkZPFz8jWnfkR2LvT91Cuacdz4LWRrQa27u7",
  "key23": "2chcx5TFP3jg93zXcfJbP3GEtimMVsUbAmhvENAJHwHHPztCM8VU5dpi5maETYuHxPrgJGTrkiqtoZrsxkM4VQ6E",
  "key24": "2mD76W2FSgTiSn5wD5RRkVJbMcx9wyLoQyWAyCiLHuVohvz8QETqhGdF3E2VjEhtNBwpKqn465J2kYKXWrKyFLJ5",
  "key25": "45inMeRvHhX8RMTDFZd6KLGdUvqdBHv2Krgo6HZHCkj5DYx5AgR9M3vdZsr2tSEUyfVMsKF8jeZthrwAQ4na1AEX",
  "key26": "3Jz5uCHqS83TFA5ahkHnysBeQxpPq6BePuhL4bWuQ1N1axbNV3v6HDQyWGYCPtGmtzgtsnQkhkQjR5KJvzpb2rzo",
  "key27": "56N2i3i64F2nqPHdhwP3myvX2tsoxisefsnqy8bDko2uBqNZpfviMqjhscsj9kXezJKtbunuR1wSDSxbzV9KJJ5k",
  "key28": "S8Ri7mRPSckToSBMLwwKQHvypQXNqSbvvZeuzCrRnx4bxRBA3iUFyvcCfQxgYBzeYgk1gxLLHNrWK9EGYJLFMQe",
  "key29": "2GB4qKz9dWneu1xAACtnB1qrHU8abvFpY1F8jsuMRg63MWnX5z6YNjY2gFmnXNhxr6WcHYtm5x7Db5C9AjpMQXnk",
  "key30": "4Bqi6peRCiYLrrFFGR9rf4rgwxQ8j4x6DmnQmk74LxzJHr77bP9m2YUecDcSoQV42b7tnYAG4Bt6SxTSVxZ4fbSP",
  "key31": "H2duzMfXEKFPyXjp16WEYDzagV2UhxydL86P9PYb79meFNhsiZXP53QC4aarRPSu6kjMs3hSVUJfAXmABQDuNHr"
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
