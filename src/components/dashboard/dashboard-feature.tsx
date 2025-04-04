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
    "24amK4SLDFRVw4P8eQzkY961q3yJeJJJ1X6HtjJLfejMKQcr7ZMLC1cdzpRLwrfmjteDUPYoJYHY3CkqRTkxLNuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63W3GrMKFF6q8E947T4dNjM1RRBhfkBHFn4fxitzx9QATowcoPgtqkSTtfqrDdpW3TayLsdSv5aXszKduyFngUuh",
  "key1": "4EoFobryJ5fSxksBSUGiTw7s837q6g9ZhikwSNB2147WzAcSJjfk1gNUKNiWH5EYQ7BdjxKH7LEsFp1LfnvqWaRz",
  "key2": "481yhrbM291m2dz1zimfKsWCL52hFAiYyCR9NF6VgvvVFpF5VRw81oaDrDGZ8MKQJoY77a8xEDAncAtAPhyLgEWj",
  "key3": "3ewYwJigNNpPFbmH3Q45MsS12PtJxrLq1HmzEgeoJtWydLUt5my6e9TEdS23aHW5SdNdzE6ZCGZ3NZsEgnd2GN6H",
  "key4": "qq78RKCHdXKAm9jrK9UVhg6WisAQgGcD1mRDx3Xd5wHQts8wHAYrWwCDvkyCwkuNKfRFTiCsTtzAZPpU1VYFoRP",
  "key5": "LE36s61kwpKRVyC4BKaUZALp7nXNu5wN2yj44mMYJuKRhuWmHGdfdANTZyT61TtLAaCYzRTvL31aYrJY5r7ExdX",
  "key6": "2GcvtoiSuRC9DDw1u5fKWo7UjyGSKN8abojNSvpc7y5HkixEqDy7TYhX865XAcRdbvushwyrWRfWdtFLctE3hpsn",
  "key7": "3AnPBrHJcLUieD7ECdmf6paoZ183Sn9Qpw8779PfYCMULB1HTvAgjMe5FDnReXL2CXQPUEDYshKWr1MXcqqvGSkc",
  "key8": "2QHwKfCdyPn9pivdu85Ge1ZemqbhwH4t94Gzvzhv93Ljva5Zv2vMZUknPMNnfNDi2gijXqFkm2x78UCZcVfAe8CR",
  "key9": "53LtoN31GYzMUdmvdtaoHbcdzmP3h8jHcQAjNdPzFcfWgkBDMYtbTcD3kfaAyJUknrYTyoUtY4tT2oT2XTakpmKR",
  "key10": "drzpnM4uoh65Do675bZDpXkpgtmAJcuL6EAQqDSKf1gV7nXNuhdXTX7cNE7xZgDe5h11vd3fwRVrENv1RGmcBL2",
  "key11": "3y4y5WTRZ3c4jkuobphtkkWNmpUbKqmbFCAnpMMyG6rBrFU6JYBUNXMZHq1dJnzuaFSmgTpcv9pCk64kaPG8v5uJ",
  "key12": "3PSz7fy8tEGidZbM9BVkuMJf6ryWdipP9wvnMw2UMMc1k5Mq8oHw5yJnEQikiuvYym1mVYK3gTDVHeeDVm9GNTFU",
  "key13": "4BRbLoK5ucZv6s1XeLjqc3U6qYGZnJ6P2osUbDGP2SYbKuvD4Cao1ySkn6oPzM3ALi29wSxoTFU84qL88UCDhSLJ",
  "key14": "2Ju4Cbv9nLzQ8vHuHdS6zN6fAQt6mi4rvoo882FZSsVABhtGiQKxSFJkMgUAY6yMuXgC8Z6qY4ZE7JYdDpiThjKf",
  "key15": "5y2UwBRM8PN15hM5Uxu4kucYKtMDirQQAhB8299g8fR1cvpVgkKb9fYk2dLJToYAjg9t9k7WE65AQdejfYoV3G8A",
  "key16": "66gwnuomRK6SjR1JTqzaientTwqbJGHWSTQbx8UY4dC9SmQKRAkFZT5Y45anZKA5zgRkrPGPm4hHBwZQgVgWaV9W",
  "key17": "4aa9JjDKT8Wbrcop3T8YGgXKTBqyyuKwvwsNhPA22XQEpe7udUYBpWRDY7QnF1GxNAGrFNNMekX1kgmciEuX4UTE",
  "key18": "34L4LTFzYCaYXoFD1GKRG72Ej9nF4hNTU9wiHaUiReGtTiPUgxYkMwjt5oGvsbCymCza1DJM9c3HRS1TiLBYiEwp",
  "key19": "azoK7AmSp8rfsqDyTtuLs4mBTJkYLbXpz6gcJSMAKjV31w2fKV4VHw9ZiCVxEU1MgkSUw7DvhkwicMentSkP9uq",
  "key20": "446Ko3pKBq4sSdzUVPwrD7GJ5R5QygFYBuhMfW2HkyFbP2UCD7RCJFhYs4yfeiiiMk852Suv4suetBVtUpYYu19w",
  "key21": "47WtSeSqmj6usi9ypBSrFUWbfxQBNZ51jVED5MmKCwCRaXa2VMC3v3fzCxZbENVCy1HTkMBGpbnFxgTKVA9pzCRH",
  "key22": "32uT6XR49zpxGHMj5GQi8PpLsgwdxnLAk4YpKwRcHxV9jFqb6QoZtFfqz2RZ2YYx9DHd56WgwRxRQzEXiTFxddzS",
  "key23": "5G5y3c38vmgzrcZxmyinecWKW2tasNnu3Q6ECLzqgZn3hB5YJRHueis66kYZvZq5qrT6uNeGjBGk38XW7G2ufucp",
  "key24": "3cT9db1AVW1NacszZemNDGDdRkEVgn8xajEdTw8GkT8PCeZNQb6r5WeqSj8VTfdpkg52xu7zAak8SmQYoWdFHr4M",
  "key25": "3d9mjiC8QFuGn8F4PVHekSy8yvKyxbgvqnwt3Tkq9JpFQ1M8GKeyneaFx4J28W1pTGG55yPSwMiwkFNNTKTdm1MT",
  "key26": "WkVa5KNe5UyLgtTrCL7qri7WqMCFYTXtVoxyGkmRkTobkvHjyYDEewP6wXSoid4DTwfwQRmJR13AyrTPFobbe7f",
  "key27": "S6C3RFYSDZ6uv1aADVWsCUSECpBHEKRuUTupYLcYaL9iR6AmQbEVpvkyTm7R3wByha318GbHApF1HMBrKYs6LPR",
  "key28": "4fkA9NVtmgvopSYN8LwLTh7C88iGU493YkwtrosCXMWPdLxVYyZFnkfPRvmwKMDR93YyKgTGz4U319Jivz9EFfGm",
  "key29": "4wpYZMdqesPyfa184qNRPmAFUcGkFzrzCppbECgjvtYDnKB4DvTSsjc3fPZuYEiJUVe6uAng1qA8Ey24HBJBFZWg",
  "key30": "5DYTcMJfhxGgeSrJ7JmN2aD6zQYj8XYXyM6KgWKgStcUPrp2KeRV1UgFXGRcvqEzqA3tZtXeBHBNSbpSpw8va8yh",
  "key31": "Ja8gL2jcM8FBqMXvKh9vUfL9GVqWGg864EeuNeBzPLR87e75oPvTxT1Z8Zxufbyd1zhjyraXFrXS1j1f43PoV7i",
  "key32": "5vbBdueGDWK8Dy1aQdx7DEwJJnNGPGubdbAd1DcCyBeT6WYhUkiAdH8TmvQSUDHL7jZe2dQuBfQyMzSWfYwLMBA9",
  "key33": "42gJd6k5qsg2CKf1munrXRhcAeHqv5CaVWgjQwni3pkbaagnzB4Z7FfZj1CfH1WjHZxTBxBhGBDHbnaTLqbQe4hq",
  "key34": "58WgLtW8i5Z84tqN4XbPScuUkVyQL1Dg1Sf2X1Vw1eeLYUNN4b28izZxWjCJQ5xgAw9mHxS5Uy7dAQtGiiU4X49Y",
  "key35": "4oyFU5sfd4JYu6Y4ghiF4rSsMGnP6wxC2hBinm3JSrqG5NkWsqhE2WbFt3gSWZTk3ZmDvMGmvX8MrgGSXhwPX33c",
  "key36": "44E269q4gb3SbjvWHA8UtSTwhaBDcSbSFRkMGCYaPtiGmLxRa5L5Whh84KKRnJw41AbWmdHDfTJrZQsonBG3qBDZ",
  "key37": "sb25NVxCKMQtXY3137oLExfQ2egzJCreCTLdofCTAhLeag2rkDM3VeXxXeQ7StDBSeYTuBw3MkqbzTYjp6AkBBF",
  "key38": "5uSKqVCQvL4XgmC6sCdiC6Ba2rUC9REPhCMNoSp9WrpySfJbJyFmqyZ1ucYqp8eFb24izaKYooDL86NDaGZDKmST",
  "key39": "3khsmfyoRaoPRUW5a3mrw5x7JJ3jrF3RN1WHH7ixcUTVXf9uUKWKB7wXaGMascjKbjdGhA5pFN13o8nNr36wGYpd",
  "key40": "3nPQGXuX9kBF1tD8WRc4zU52X1QEuTuu5LAcFMT9UumQuUMgK3Pagy4x5jDcWpLPhbQwk3sWrTWC2xpZEk6LHwAc",
  "key41": "5BKVsyncRZsfnftwWN5FHaU8YdNkAkWWCuAkGgBwjktYKKyLELsYexgXk7uG5M992cRMecaMUeMvwNNvVV8CHF5s",
  "key42": "2ugJcfbLXJSxkP6YLxQ639apeVCozBr7z8Ln5bKW31VRwFqC1Q3SVtTpvUGbhonznhF59rakZ27oDXsqjt9ZaJus",
  "key43": "3wwURQ9ecZeU1bdnXe2ZpeE6bYTJi1Qgt8FvcNfYcaRxsfNTncNuFVctU48Kw5WVtyRXUP48NZbkpN4LjydjxSFL",
  "key44": "2YEgfVno8k6h3hLvbvjzbm3APj9GBh4sT6UAtYPqoksMjEhJER7agu6rqyWh5g5XMwHQth4u29CJcAVCRAks4HSc",
  "key45": "6gEZLbLkXU2g6qhuwjVaLqP4UsTroK4yT489p1qp1daFE9YwwaUPgSdTrwChu2noDPHewDcU9bKiEnNzRaidJp5",
  "key46": "53B1wF25syyyTEfM9HDGcf3JTCshAFCJdH9oRkygUHykaeERUYu8M33XxcTYLyVJTyKAkitGrBqQ7QuHBxNsBLF7",
  "key47": "2a8eCCFjxqhu9VddYCqjotoiYoREckAHRaxx2kNTgd7d69SEnaijYF9eUfSDYCDiqMN4PtQWv3RvpRECRNZpkH7M",
  "key48": "5UwzPVeA7qbfHCm3hhQYdCybtNtfk6tC2nzJ4viaBBoGsCQsehpJndF9ZCBYrpYEhvz9e31YdzPy7LTQoFnXiboS",
  "key49": "ACia26Ga1cvnnhs6XiipS6zVGxH6Dj9yCx47GhS4TqVuCqDZ51tcBLuz2NotgJ8AraSytWhDTn2gAB3USASd5J1"
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
