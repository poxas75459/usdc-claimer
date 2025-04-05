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
    "4r56B7RHaKEtWD4eX6CJgKdWBM9gqFWkrF52R1FeQXK2xAMVd3QTbMTu3Zep9n7XGtRpNqX21k6NC3GKirttTvJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onypgNgpYCs4DRuSLVXP84vwAajT3SgqdKGxQkvxoybyMk6SNhejxATPb115XcfNaFXZUQp85VMB1SU54Mbjb6S",
  "key1": "5GvCrgnUBWMvwRgbPrx2H9cbhT7Pk9gMmBBqmB9Xb8NrBHQadMmSPKVrvH4p98ZWHB1JmkJZb9CQmw9ipNd3aA2V",
  "key2": "5DwxdNn9JYb4sTNhufij4mSFqwNjdu5U5DBqL9c2SZGizzFxBvVR3wit9fGLdH7rrn9RZTpEa3oR7tMft3pNXK4j",
  "key3": "BpYvAK9oMyJMKui4XkzhbUi7idNGHWcbpLeAHN92RfiGdmqQfAoimk4zwv6ZEytWmBfUTqVvVvnXJHwmDKQToBh",
  "key4": "2pYCU8czCgAWttcAZu2REWSHrB8LvDZQYFKGFnqEmRPpZq6aRAb7wR2RrGQYDrQbDdT4B1AvihaDeYj7bHXGf6p1",
  "key5": "3tBYahyfEFEWDZBEGzFJbLVCFc13fjNQjiL4S7MaJpBZczdeA7M17JH5dmAGMGmV3ArJuzoUrBA5GEeyHBtWnxeR",
  "key6": "HqkSnTrNrqfyEB1iEGeLE21b93QQXz8p9DLyiLYsjUS9fuUJnUoPEnkwU7kLcnZtg53P1nCV66P5m4ijPNoR19J",
  "key7": "4ZGUX6QRPCtLMWq5L2oUkTztX1uYnU4smiQbgn9SvXbvFt1vX6txg9gn9ERLvX6SPZNh8of95z8PpoDNpUGs6A5",
  "key8": "2yjerWTrjugMxNBWniQhuvQ183q4tvXKXFk5wy4RWM52cqRq9wmRhbW4jr4NckxkrQJkTwVFuawESkXM4oV1Uawe",
  "key9": "5zkcoDYhfKfSgCrz6CDzJsSPDWdx92ib944HhMSHAitmXzdT4M3Dazgnd5r1J7Y4T75f6FKJEQPsjwYMeCZE9wEP",
  "key10": "5QFmRnnF15psNEPgPmsuGbNy1sKRvfovWLw81UG8tSZQKgEqKDHnSJPrEUW7Mr7Q7udChDqrAdFoMfe1yMw9XDbn",
  "key11": "63cNUwdVVicM9ycVLSJnvBAM5RUJsongsdNGYB3Cj68UZod178ob989xxezCzjiXugaxgw4WUFQaBqEwciTVhs4E",
  "key12": "5GyoXNitPK1aAc2Zu16Pz9j2BQgoXZZYVYKRYpv9WX3VicZmHFybdhuordmkLdxJrofP3QVvhVnUVG5N3LQeh3gm",
  "key13": "tf2VDixzDApi34jtfjAc4VxZUYH8V5uUoq9RYaDPh494AhYNnHCJwV8T5CjXHW2fR4ACtc37ooet6BbNpWUUoty",
  "key14": "4nAsVeTjHdqjK6QqP944SdUzwSEVvvcXXN4WL3KV2qtMViUGB3M7nsbkfacs25CnAXFSdFY6UYZW1QJH7NHybWwL",
  "key15": "3ykYE7tkmzDpV4dB6R12vdWtfDBXhatwyid6jT6kBszJx5qZBYvz7nKa5trKXzqSnPGeetDUEc89CGvrtpfLbZgq",
  "key16": "3au27vtWs932Wr4i3Snb1BaPqDmZVCrDUbgWpqv6eY2DRRuwXzgCeayP6YEd67w6f8vNCFHjQWQArcMqit9DVRew",
  "key17": "5FSYvoGBrJjB7r9ajNLRjMG4SgReWPQ4pXv1EG8j9PTQ7W6hs3G84GBuURKxp1NDqpUV1B4ZaMT5tjEtTLnuHY6P",
  "key18": "4U71b2rt7SnSx2ALQzZnE3WctG5XXMUwvtx5AjNchSpNegffnAYGNgMSWVRHMtyBGapQhbsBKqSVx1M8fvAPKhLd",
  "key19": "2BTXCRW5A55eRMw9exSjwuzWGDq77PkvzzKRMLX7VmjkVbeQUeMqMZLhcYdv1kqv3HbkU3UoVCvnC2CiZuofSUx",
  "key20": "3p8zCJN8ZCaTobBbE66zPFcd48vJeBZvLXnETqKuDz3cd87GKDpkvNfCQEDsH4ft5qtuN7GjQn9NcbdUHF15U7Xx",
  "key21": "3Y3jUE6KpyEX7bqw9c8KVgu6Zcnu2TmVm9geSMTykajU5gxUrygvhsUG7z7oFGs5qcAAsnkR8E4XGY1PaexE8U9A",
  "key22": "2BQF5VEx192mncLTQTTvEVR8gmcAv32GJVogRcQSoFgKtjAWD6f25thN4B41L9oYF2eLJed1HLMyuEVJ1AbXD5Jk",
  "key23": "4iLEPKgih1pWGnBZQaNk6snvHXMnRJiwnoCE6WD9q9aZcm2piZREKxHuWMsMVcHkS7zAmTvDjAVFM5ennVYYBsFb",
  "key24": "33ZvxwNyV3hkpcH5fmXES2VA3RMcuLSGoAukLDffwshm9xwKXVq8mQ8GXG4wruAsVuAFLXQg1smUv7h8rQuBiTKj",
  "key25": "5p6fJ6XqyfX5Dy5i6ZJvJtr4bxxZAsbXLo8sUHZVoDM9E6J7aFKf6U6iZi1guyG62mNACy3Jr7mCGZ77yLCWMc8k",
  "key26": "5GWoowAMcf4bPLUCWczDeEx4dZHRoP72HRCVBhwJyNHKEAAbSzSnC1qaGmAszBeXuE9shyPnEyg6SmJCoopbuR37",
  "key27": "3mYS5eEcZJ8Hmu2suJfEkfbkUKj5QLrPsfBtrw5jheMA6CUSVFAxH5PnEXaFNPr6H2Vyb7P1zwfPB1ijm37xyxCr",
  "key28": "5197CXZrpnLr4vvJYMn9ZhHgw4xqAeCfhnaFWaekAQSYRRF1DQ7Cy3QTYfrUgWH9B8wn1BkXTfzfosYttiErjGGZ",
  "key29": "5nHPBUWs9V3ejzbZfbys8fAnzenTNyxrGKU45znYb5ojhvkjjJ9uwHE5tE2TnaAdjruytD5eAjDKoXjY8XveQ7F9",
  "key30": "25DmF2SmNji9yQnXo3PNM5pLZ8PRpTEYrG6bQFBspFbJtaxx6B65euyN7KJG99BzfkvDMGqsd6Wp1Y48r8T4m5QL",
  "key31": "gV6o2y4NgWczKpTHvN1ghVqAdLwagZNMXF8s3NTCB2Fp48Gb2zh8BxGRgQVKjiBpkXiiCmdwu8TBxCqcRZ4C2k6",
  "key32": "tE9K2wUGfXK2Xmn3XAT1UzqiVxWyu8tHzHzcPH3L4Hbs2gnRrpHXNbvVNJat4eh2v1gbrAekRTK91Nk4bepxmPV",
  "key33": "4JnhJ9fJj4WGWbJ3hkJrKkSUjFYygiZG29V2Z4dY1vy1dBwzNbv7kPyZtDn8hGJy3x55XJMqiBVB62xPH1JiSdRj",
  "key34": "4ZajG3rBjzy77VTj72GXt7J2EgW65Aqddq1tsY644RB4TrQuK1Xa6cmNYeofu4Q2M3ZDqxmAby5Xe4znCY3oe5aG",
  "key35": "5geEeTwLoHomVtC29c4nUAkM2FQFaBrLHMNnq7heuaypXtjpiY3Y3HGqDThjedTzHtkirCikS48pJ3Eq66kKaRsm",
  "key36": "3pUh4Pu9ZthBSYohi6kWXN6aa7jqoCEXU5wfAuy1UhguWMq2rueHBEiWNvXBNmnhWPp75Dg61sEh4nQgGrYmmV3m",
  "key37": "2PJ92i8y8KmUivbii9GuQ9xkyQriFFPVNDwKWZfivL8Qq1jd6X2owFiWxTndgKBnxuqTTaHh6PiHXfc4GquJTQ5r",
  "key38": "3CZfSjDijjCLTXW9LuyzNZ4qxrcpW5Hp1nnrTfSK2YMKr2ZnZPMuV35xKZ2e5D84456zThSHQdWCMFE7Rso289JF",
  "key39": "oeHbGzMKeJffoAkYdJM2QB3mpwkPxx9Tr9hfAWx4Sv5bMS2DKGc2q2Jt7GKzmhFgrzXNTz5XxjE5kEn7kdrKD39"
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
