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
    "FazigFLbS55hHMxDFxZBN3PnciyRJjTDiBwXz1LUuwaPJbpHYbeFe8D2a9uw1xaKXbqSsMmUs68Mu8rX8YuN5tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMr1KFBeggUdmMcPj6pnPFmjNGxKQ794thoXruaK9NLoEMY6DyrBGhibja7qxKGKdEG7gCNKtzgus5TL6mgpbDZ",
  "key1": "3duWqmccvUd2JTJnxJamQJGQnTuY2KhpUGUiU9rc5ekYBs2mjKLFxk4tnHsFPDLEf3K17drSU99FLVjoAMPL1gKB",
  "key2": "2H8RCiAcRRHwMsjsvU2GEoc3GNzjSxh8XmoMx71V1bwpHcD6Q3BmJyRZCfWRGjUgAjsfR9S6GAM2zX2DQLcYbYtN",
  "key3": "2DT8TEUhsJjSimU4S823Eb8WK6MZio1Zam6dYeUnaeKMQkN798HgvPzhdwqW1hRw2nzuk14DNNLZBwYMfmEufo7E",
  "key4": "ZowJ1RrCYgPLrZDxC2UCbMQcZqxq82QsfFnr4TuernkYYDraQBGi5H4G79P6VVBsmWwDvCqmbXdCkDbB3ibtyK3",
  "key5": "fhsoyUMa2wABa5jwuWSL9P44y34ETWQi3QpmXZoBz1ayFu6kREx5zvoE1vKTzRbAAgDfwJeFL7KTCuWFCeV4BTk",
  "key6": "4zXoJzzH58qXMYFsDRMwCL16XudF2ggCrb4GLKLnWKnt4pHDpFs2dgQyULd6JskiMYJysw8GnqRpkginw8E2i4BX",
  "key7": "54Ut9ZbP5HYbRUaG8c9CqXxv68FaXY5wmNSTtZW2gMhZCsy5Y2puhivPzW6WrgPTdsVoGPQZpeFjAAsNZ3PXW9az",
  "key8": "4n5ZXhCQZ5k5GXM8Ketxqrz8kVhAGHpjTHoTjJh5cRDYfmJvN8Tfk91E355bXrQR3gGVKAVwtbA1MXF1dWAZ3XKm",
  "key9": "22vyYg7fL2JSkvEdNuw13Z8KsdhiFXWihJCuXt2u5HUyYt33d71HSmeETWcQmFLbA4QAymTT6kUhHLEJh9wYnG56",
  "key10": "4XXUQAcr1exDctQbbeTjQb1gfhCTbCSx9B4q5XcXzcBrh2zHofmBtfB5GRT3gS5TG952p8pXEvtgprbCUtYR8Mb2",
  "key11": "2Bb6WZGQDh3GcVR8eP8ZqS5Txibu7FocfYY79dDFckjFhgF196ZSVjs8UdFPPzBqgUtRCb6R5SPavqUsZM55GXVM",
  "key12": "4HfCJEQGkVNNBxEso2qiLMTYoJqtEMcwWdfdTNKKFu7S7Q5HCCEC7By2xFm6ZKiURAeYKfrFMuDzk4F3MrtZhZpV",
  "key13": "gMGfes9WyxaPY2iUj8kTsDJYLcHz4ksNS7KZvomi23tAnNVw3Lw7TJRc4PvaJRLXYu5nqY5iAL2ooY8MCGKspet",
  "key14": "5oFhjYUUs4HxfViR6THAhokxrvWPmkDA5RGHZ9gZYmTLFMJR4memQyb79x3kLojD7BA7fnUVSbrQcgUQfYJhktQW",
  "key15": "3UVQMzYnJe1ECmvFwEJ7KezhtHJ8PpFz4rNYsGZj3umZPhw4xCLZhxTM3yQtGe2j95xRRwbd5PBsPcQPeQvuCSvm",
  "key16": "3hDXvKkM2Xo657xASRmE5vLUKcMnS14F6DTVWBt63btnfFqP9UVTFxapw2yiRaENaiimCoUnaF1aosmEB6w6fDqN",
  "key17": "3GG6J4qe7o9VE79HETxBoVBgW4V6Gbz4gt9vE1hzP7vVnrxRoNoReNEcQo5un8YbvFHdUqRXtucDVB5g3Mjx5ebr",
  "key18": "2Az2T9v1N4ojAfxRrT3EMjGxr68xMRgBb29Nhia6Vz18HnaiDwT7nGnToA2HBUMbEcwByUAnngYweApbymvhYD1N",
  "key19": "4kNButzzUwGC9NrYMgK3AtNbudkiSi7iSxuVBDu4PWyh8Zx2DZMGB48EK5UVkHsbVRHxujBcY7Mnru2UuGJ5n3vi",
  "key20": "33pYFic9PTyQxLqY7R2Zs55mphbAaf6YP5CMk7mxe118Pw4eQjZHXojLiRPs6PrpqprkNBbpTk6vS6iWVdCfN42d",
  "key21": "3jvDe4p8GPaTa99apvpfXCHCH1dKrheDHfJQZdky3ykJtpV8ZGSvFmSKV5gjp3HwjAoBhaVwczuxdTa71KazgwPk",
  "key22": "4MQWje1fPh5K4GGJzXt5TvqAeMqFNS8t3t86XYFDxR9EJCZHbNwnaUcUD8tP5b6WLd1k6WwFaJsYjtNpErxcnpfB",
  "key23": "2ynZhfZPWML34GJq7Y41Qr27pBwhgym3rm6C6HWVuG3yTpkXB49xgYzdNNFT7S2qy3TDusNv5A5jD7faNdEksjx1",
  "key24": "5sv1AyzKWY5MornJFM4Mjghf5z7xRFihx65hyiVz66Bj1woS18iFSm1PZPaz3qGS4VCcKnVCbSQ8HQBg78sjwn5A",
  "key25": "35zoXna8Zshbuw5ryakvLQTTseiAbTeExUr7CuF2EAmd8BeipisNs1M4y21wDtGVFW7KH16wbKBHax1161Rrh21D",
  "key26": "SD331uwgHiVKhDsURoUSHXZrupDBkt4VZpYkqzJyy1qaPwbQNJwP5FsaijFQQodSuDDT6fkCkfvL77DTR7svpFS",
  "key27": "dT21odY5gEoY6puXZt1wEfmvfQXmJUspmeyfgWEXeWUiMU11N4zBbzdRRP1E7LXL1L42qv8uWSyGXtpekKTpXqx",
  "key28": "31zAyGJwSVE7VuYD21vzaBhVa4c8d5QySxjq3ZJ6riFHwsi3VcXWUBTScLE3eo9Zc661djdtuncpsoT1juUTpTYv",
  "key29": "43x4qnkBWoYfvDqnQLwcEJw8bsG9B4iWrHsZyGwVtnGZdtpKxSr6VJyvbLZ72iUYTq1WQqe6jNLc37VTk6t6BZ47",
  "key30": "5PdKUpJmh7656SnUdXiGxxbaz6krBw7pYKXKL2fsGDFikYPeQdHXNxBSKodzTAHLYE3oti7AE4z4nXxGqm3Ho8SN",
  "key31": "2Q3ybZh2HDzTKqr6oZCjgsKEK7kLAmh3LgbTo222idWtsgkJYWjK3DQYRdjYEqXsBdP7orXs3NCxas9hGzyUKbfL",
  "key32": "t9VtMQD1MbDCNy7Uk6t6k2psQ8ne8qHMBk6D7HeJ9956EahrkszLh64fuKqwEZKDbf4DFuVscFYxCjhsHLuW1fS",
  "key33": "3z1tmsYc59mtUJK1NPnRg4GBF1bL4K1hRESzcpJyLuKFJRVSveUZ7a4JZCffyhHEejba7LREURWqddCaURFJUXxh",
  "key34": "3wHwmzesGpnwY7t2RmpGWWgqFo4SFegMeqbtZFiuW8xAAvF86dJejZBrXbd8pYUY9FiYAALmYGspydQ3Ji3AjXc9",
  "key35": "5pdKrekcXtMNvsFmvtTotY7kVWHMKDjRmgbLpTm1joMtYBbhnYfixPbG8LTzLmYqp3q8LXEkodpk6SVFyT5yCgDF",
  "key36": "4Ny8bEC28KRaqASxhiGMn9eWfksrj2WiA1pZqcA2gKCAqVAGXfFWbV7CaQ8RYXXUCLcpdvEeTMtLqS7CYs7EhAgb",
  "key37": "YLd2DXudM8ao61MaMRGasnBX6CifwFMUom1QY76YyZDKrLoVThwYcwQ5ShXSQruL9USdnwgEDJBiJq32R3BzHBT",
  "key38": "35sNseT5983sBra58kTaN2fWirjkSK6GhfRNdaJkiXgLfi2Q3dbCfY2MjFNavnD4d5B75VU2xGG62aDaDjaGbALd",
  "key39": "5XbaRNyxydXbvMERNVVKjg2pH6tyHhmkyZ5jN3jyUtXwRmgwFvr6H9bZfgSi21Ej8wX9ZyXA5MyvyvdR9wmGgg6A",
  "key40": "23dHiNtWWXiRR1xowF5jPGKAUJ5FWoFXgQ2VUtwQiDozqCFD9PjMjsDDz9HjLrFcVtUCd3y4WAHScpqBKjjYKvCZ",
  "key41": "3ccEPoLzkXkdcJ9m8C7V8CDAso8SKgxQdrJvERJiberJCQPPCVi5UhzdpgP9ANrYjZ7PgD4m6Gfb1oULbk59piHi",
  "key42": "5HGrmqPmYsRm3owHmo7dcGwjV1fMdK5eAKUi1QLB2vxvhE3sTB5zzQML3UVPEgNZSJW3L8JV9JPNND5RaZAUmibr",
  "key43": "4jXitVqNFTFT72URum3KQ83G94JRddQ85aK7hd5SB9NANn8qJq7qkdJnh4w4Fu5xtAto5C2dCs7r7oERVSqRetv5",
  "key44": "MA2DndXWB98nh858yy5ieNLHv6Gw9oyR8rsxo41i7b8PiuSkY56gfPas4XnFtMJtt7ufCk67Ser79UYM73jfU72",
  "key45": "iKbx18qM8nXRgfMfN7e1rwHtYkeQUyoivdqzEJipZU3cAchrBT3b6Z6pDfZhBGSTKgPfoLEuaKWSgiTkq36qXGn",
  "key46": "5SBjqtwwYTqnULfGBKSaXqNSm3EzMyeHUSa4LXdhoXWGukLCGqzQRN3d4B2wiyb8hExXA1S2Xdkweqgn3wVapvYu",
  "key47": "N3QYFH6BkvHdn9GPYqnRsTPqnTHHwtW2KigggW7JkRh5s2pQp9BGcCNkZehij8yQuktdLQM14EHG94XkhNqqn6s",
  "key48": "4byFqFHj4xS8bQMUvwxvcGDutkdVDvhimy8KvtF2SxoUvQK7E6NwjzyNnuL9Grfu89uNGgm9fQNdcQqvfEynyYtp"
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
