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
    "3JJytNArdTUihF6jfDugZaH3m45P2VZrX3HUYh2pwZ4BYUQXEFa9n4M9V6H3GSiFF42gCzYHkg2nkHuaJYpZyPss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEScH1LqWRh2hfH2Wsw4zruv6QVyriE58vBa6oHZHAZK1jEwjhpct5qSf7PvCAmtTsmHEVi8ifc9RqRmRMECQ6g",
  "key1": "2ovyhTrZkBtfcuAovi7AKNuLiZ1SBE9yopvsxVWLTm9bSoXPURypvxAzZx9uqico7kniZ73Pki83E6ZpHDU5fUce",
  "key2": "3pYeBNayS6RaWVQKFj2ZzjKtZAAAksoFojYQxztmGJm9wBmWz5gNbJ6u34uEkz81VAeP3imK2jU1cAmf1gzsiWZs",
  "key3": "5K8GoER6Zog3pHKWXvbKAFAsL76cuzptbECsbjMzucZPhYUw4RUiAGNgfWygsJFxUbDtkLm24RDKGTmomFMvAWBe",
  "key4": "4C6rsWZeC5nQjeSarDEPmmNaQrfLV67q6mxcJH3hGqkSQ5pKqFgFTwhLQV48WasRkQ93sWksSWyAQSB43ZoF4Qn3",
  "key5": "EBG68j34XYqcdiWj7Z9Gpr8QGtTxQLZ7hapYW9p95PcWbVvhveqm415VKGj6ZeYgebbFx2smp2M9PNt2S7AFihE",
  "key6": "3FknGXJaAnrn8kmKBCcYVBoQRe8APc5qgGRkbWuDHVDtND6U1qpPogxT52N8w42APCnsYcr5a8BLDKn7WWjnEjfJ",
  "key7": "38oNsj9iW9wvpHQv9EsNzMCMUTRWktwYrQDxR4fDQpkn4W2njBjDGypHATqzbyacgbAsg7smfpoCvaxsKzCQaoyz",
  "key8": "5JbimvhVohLLGMuqTcj56zuzqtXyFyV32TpqFgXmVHFPhiAasENX4TfPQFrJkyk3fhzEyWeekFzNNMsUivokez7Z",
  "key9": "2zyCqKjJH4PDZqgDyj2y4Hw32bovz2MAyEqQjRx3YynpFg8ZNc5HJRN4aLfMJYZDv1VS2h21LRCnZVgfU9Cw1C8R",
  "key10": "52LtFMqJYAmadnwhMq9PgKx6mBCYCHTDRURceBAueggyT1BkpCrayc3Vgm3peWDfMy9MfyWeZqWv4sBam19R9huD",
  "key11": "26TB6pwCV1ADKhrYgoD3aXRr9TFZw4qc61akokYutDceVzgdBmrUqpKuEsnzqncUvXNzwMiaXRhVmiiXwq1TaZ5y",
  "key12": "D6iU383VYKFT6VoYLVEPSujpnWboWRx5p3v5TFy8QCLj49PCcfEUyFEeTWm8oAvyYE5Na7HC8T8NS28dBwtwMyG",
  "key13": "4Gc4VPKAc8h5fYYRci8D5wZP8EfZY6U5EjjVN8dhxx4vtru423kcShRV3T8CbCrTChkHAiiApywMUTtU1MTPprci",
  "key14": "4WLMPKP9ggTW7ZWAyiyJpHJQYuShXmAtLpCxeGbX3oxbuYsKHKFeRXpxWMwB7rk5eRvburdoT8hJtksNupnaokJM",
  "key15": "5ceUvcfwokXSWv36X6um2SPmMSqCFxcDnUfMq7vkK25eXBEz3aaQRj2ZTFRspo4tMeu5WQdhUEWo5CA3HoAM7Cth",
  "key16": "4yuLzoc2q3LSjsnP5JyymCTFWREfVUFyfwnEXVU8ar8zKxv5iiyRUBgtGtgG1EC7Lvt1iyMV2se3J2aSVrNXRLJs",
  "key17": "2ARm9fYqrWCnsNHATTNCJP9XGHpePe9iHnKArMrT8QbsM1fXjYbJPPB74rgm6PQvXHwqUreRX7z4w2VsiJFjaB5K",
  "key18": "4fUogQFGan4TeoHHPLjEi5pymcVKmHYGZLeuxkTuAxq8Q8VLJyVoiHUpAzXpouDpe5rc1xHYe32fkFzf9uKv9j1V",
  "key19": "2DwJ4CybcTgESiYjrHkytnTeFnx9uosGhvWgE5gPtvQwpnQrTmTfVJrtqCkBhxG56M1U8WHmoUGVTQh1rYQVrLaK",
  "key20": "5VnjLeSLSbZeUdEJmrNsvZoQT98dgTNPdCBe3eKz5x1nePhFgfb9gcWrMrH8RGcjpvp6x25o6xs3mv92NzPnGwC4",
  "key21": "4LmhQWJaW1c6jTiYR7DYzwRsVpwju2h8oSKcjGySa9tda7DHACHwW5jy24ZHPdofqwGTwWrhUHijQyrpwC7qPtiE",
  "key22": "472bAsNDu9xgogU3j27tCKqxx2pBNfQa3dAB9JxZDq24nK4x3aNSW9EwpmUX2348WrQEV69R3kyRSN6imHPEoDwz",
  "key23": "5UD3vKoXmpK2uq3WPWEvSLspidHmWPGUCEymz9LW1S5AwXGuBYn7kKzrf2KPsPaVBrs1C3KothWugSJHa6jipU4c",
  "key24": "31k5XcNMxmmGo95gMF3wBQpsQQPaWfbtjJktKYSzXaq6k6wQcHiidEQrqj4MvLBrWhnGHQX3r76gGvgX8uhypcxW",
  "key25": "2qLfHv7PN9dbU9KFbpzGeQnFtxBkGHfBxdbv1iSu9a2JWkRwawB6W8iiBSmFkZPH8AaWgAeC4ZoGAuymrftFeYd6",
  "key26": "2vaiUK91Kj7aFtUu9sdHFHYEzBvkBToggCTrbPiswJ5wqiNmaa2X5MC8zsyDyzqx6BhR9PX8MDKYhH7HYnhBrXkK",
  "key27": "2pSyGvGtMJiVcB26xmqfxNBTAjySn6jAqGc6QxLC9o7vuruo6f4dMCAQMREHb6wn9HcMuc5j8pYLKHmeNuPuc2WE",
  "key28": "2W134o8X1FYeEFPBRduHFgnxSQgSkfYcegE1A4mYqXZ3EdTei5a2QLf6yc6FUc77343cw3x5Xspgq7V6s9gPr5VV",
  "key29": "2X8ewDcDiByuCX4Bi27zEc5jokTf4DM9vnZuBsdy5n66nQPoXDD1C3cXDjDdpX3KP5JudTGfTuCeEUa2imqPWjLL",
  "key30": "2KPGHHvRuSj2wDX6JVnCx4AvWhVYHa55fKVo3BNncSyrAsiWUBxbNfGAUkrLuNdAp4fHh9i11hWdMLcQTEpvhJg4",
  "key31": "5ZCBFtSUifq3bBCK74S22NZMb8YEqpMbfTnhAyZREcnJegQqV1ubBGarQ8tfKNiWu8HzJt4hxFbb5SeiQFjBRNWC",
  "key32": "qQFx3t2KSJWPQSybQsMzhLWGGnsZBuko2D8v1cDDcqdDeustZb3zqsNQxz7KyPdyJbnAKt1iHXTiHYcQtwuoE29",
  "key33": "41LcNjUgBfRtYfkDVYodgFBKj4dpewgGeMKKedNU3yqcKGeoZTXZAgDoL9j17aavzwTsM5hHeeMaUWWRBPd7Dkwt",
  "key34": "23Dm3tQtLYZiTJLvgeQ2GFjXJRzaGw7RE246CzcUsLcSpGYd9dM9bCdFDcWTCfHs4ZKknmpg9HSckfUuCqxS5Csw",
  "key35": "3rDXk8EvR43rGdEx75jAJDosmgETRamnCFwNNjfqMRRbQ8j8riDsnpASbHCaANYAN2eYGxK1DTGBFxkPajREK94w",
  "key36": "3KU8j9ENR5TbHCbRVPtmLwjhKEEdEUX8fzySvntHfY3gVnLC2qWMitpehJ1L7PkiwfT6M5WUDJvwbEvGngu47uwZ",
  "key37": "4At2VnBVBTaMJw6YNzknFfMa7qPxd2oo6LK7nhMD1VABQHzdHXE58xP37ujtXJKCNYrkMip4Ho4AY24eFVU415kH",
  "key38": "4e4eCHr5M64N1uv5yHkQNXoouXqPc7Rqn7wF3wPyiTyaKsJESB7QXchyZHPYXRXmrfdyZWuwCE8bKDzxAh8r45U7",
  "key39": "2ahM8Vnemrgj7Qf3TiUeBRkaEg1uwSxgumEXr8XXVUJzQwQNTDt5W4NaxwXc43Qfr99nx6NXRiwsyn6sjuT3CtmH",
  "key40": "5jYncLG3AL8n35BHEDhzdKL33yW7Rxchhxe2C1DZnVFRYGm3sMoqxayMd4YeCv72aWFn9oQBQR3R3Go3gq5gChLn",
  "key41": "4Y41kvTv5DHyq6hEmZTMAkeCSgp63PrPQZm9pSEPAFFzKpL2rPq8JFQeJtkYkhzZBvLT2SMooqqA7hoGBHyQrGG",
  "key42": "4FD5Pu4gGDEdrzR6HafRkXXSg8tGQGXgNVLFFqYKPiBe9QXMNLiVF5bDSUbPPy7TvURii9W7rDSBbWSHrGeYCzhP",
  "key43": "5eqFB75Rc4qKDx9gwBvaVGWGsoFpvD3DFqqmcpmXK1ePe84CguGJQHaWM14wiF7Feh31x7ThSfhDDcA5tq1a8Cj3"
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
