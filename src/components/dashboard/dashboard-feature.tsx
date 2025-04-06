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
    "2NsmRfZS8Mbmkv5iuBfKTg5Zzea5g8uNwdc91Sg78E3Vb1vh8bGSg1SiTSihrGtxGKaU2UTSPYWhjikeJ9EuCb8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfFt5BZKKZMSU7xGUw6aCwmEApK6jWYw4VFsDk9RkzC4hhDL7pnrx7THeBhdNVhW3dcgjTNH8SLeS928j3DmpwB",
  "key1": "66K9wufGqHSu887NHbjvi1jFt4nph6wTwM6qzdFk2HQDbwV5GENvjMdEjoNWsD44KB1ZMk5WnHQqSZNCoHgLanbL",
  "key2": "5ZERpaqoSLL7nKsuRc689PSVdq2JwcEE38xoWoQkaE1VXiKY2imukZmA3X87t8dJobUyeGEoNmqwUi6QceoF5Dbb",
  "key3": "AqEsAM6oD8Uo7PXJZ7GoYLJNEqaX6z2qDxsbggvbTR1nxr7JsJGpheTga5aQdkKMFn1RUFYhYcXNZRb9FKdYmDG",
  "key4": "4Z2e8gqB5bLSSkd7NBMuDeCVFs1U47cBbdmvqm83aR6aadaPATP3CN8y49oiTAK2qTqqpJ7JU38BNH2cDpqFerDH",
  "key5": "5mpUitEN4viKPNhq5yDFo2va2tvRjmzVgNC9T98K82F3GGrq3rUzLZoBDoFjTwkEq4dbYVSpgcEQssGqnPtjQ5br",
  "key6": "cFkhrVvEPuXYGgn8t9Pk3CgHEpMbsfL1ZzgJE27WR5ghCEjR8QyM68bhaEPtvMmtqzdX6xyGNBUAfgf7DYK3qUZ",
  "key7": "3TFJszT3T4uHaHRQPopMgWJP1mwjViWeHXJ4piW1T1K1cfkWKEpMYuuWu1vcookofCoFw8fijYkbSxmqBB8VLe5q",
  "key8": "3wLai1veTQe5mVN4sNQ7sBjaAMQww5cDTHMX3dQsqM9svY9kEoz5QcXa7N1GriVoZ9VVZxdcn5Ho7JVD1W1nqAur",
  "key9": "YyEZmXpEs6CdXDySHBfYX63RcFdN1JGPMmrD5H2GHhU5WsuA1eX9GKuqE5hy31s3WyXLCXPTHQWBYVxz1zq585o",
  "key10": "EmGiVATV9FHz2uTNc7Zppd82SL81oKkgyiusEvBgP6zqZsepiViAAVyhKtRQbxu33XaPAw7aa2tNvkB7uQW6dS9",
  "key11": "5GW3cR2JPJWWri2nnXxkvjqarRLAaXhz9hGSbnBa13cYGrxf8XS8XTfojPFDDP8mynWFLR6RcsFgSpjT2SXKL39f",
  "key12": "4qSGepTwznJmNHYPq1pAqz9BSnnbkdiR5ZheyRN73YAtwBYgo7XkouFnysjoavL4c9EwayEeZjwzZHNC2ecmWgbr",
  "key13": "3BdRsYM4ni2RW3XyHcUbGPbBQ82hBR3aFjUDqqEkiKw26jDJTMgdZ7GGBhaoCwpCiMHpyvLZ64b7YCB8BUpYAW8d",
  "key14": "5Fko7K3BJtB2PXJnGQRQPA7nwZNAGjfYnYLjLdsMUP8RpnijWfT1tgJRS8Cbu48iLX7QthYgBHLram4b1RcvUZ2K",
  "key15": "5MeLGo2kQ5DqF9p5X4VkgDXwgmDVmR2fQG5UZ6f7Y2792koSADYTTir7MWahrqzXNKjCJ6edQ9XiPQ6r2MirAeaM",
  "key16": "pmPhje6wjiPCMw6cxCDMwGTcrcqsFqBF7QF8MYAs1cKZef1CoCcoy2VRVLw4GUQb8X8T64W4ufJfCUj4xywQYNQ",
  "key17": "36YYcSjjYq3nX3gX65Ef1ewP8KLPcDh6Wui7FBRaVx6bKuqDBx7hhkc7pKdNv36Gkmmad3smoZnNzdsfuso9MLQ4",
  "key18": "YzsmFCQapJAJqEBicTHxYKQ1dLXcbAdC14Jj6a7fLKWVFoLp1FNiCvG7WXPY8jfN9RVrFXaEycDgoaT4T2TdQst",
  "key19": "5KLivMfGgBFcBtHiwEXLDo3wgXiA5NwJFYhMiusG4W9ZfD7cLoniwKkbSuNQ947VLjDsnTWC49E6rwsxG7wA34CE",
  "key20": "5NRFwJXX4GYnmPBf3hQyZYZ2mxbkZx2Di34GD3p518npneHoSLDVbErg8kCVeDZdBANoHLmwKsLSkM7mfq7g8cn8",
  "key21": "48PBUfUAUq5xW5uCMMdKjCAytKeg8bcyBjzoHvfz2o3EFb9Nm8KApvA69WVnRE1Gygt7VrUQtNowUafnXyWd7qwH",
  "key22": "5nTnxpHajXUxSiZWcTxAG8xQ86a49tLAJwuTPjeNjcLeFsZftVJYmEjqKepnDugMCKxxHLhW6GttSgEmrgv9V95f",
  "key23": "3F96H86g8FVsJAEQWTVRCPAZq7hkKJFJwYmTgYWJkMtgT6RXYkxSkuTa8BJ3VFASkBmNaMcQ7BbJcKjUowrurs8G",
  "key24": "F98XPERj8W1aMKEPPvDcqSCAALbyKyZPUSMMDSFx83mcC2R2vVd25gEsMkSuP7oTFHVrUXTw337jwoohsJnrKyH",
  "key25": "44hmPjxayN3esNKZ7orMeotpXCvtnbHSmdeFLuEeV6Nnd8Qtyb6wL5tvLv3kPaTqaQr6MZRH3i3AijkqMw2hCdvp",
  "key26": "2u9v8zn3iArPDg68kUFQRRu4dxAURFrcqyja2hECLoWaqJwGNvYQgXo7kRxzrRHzxAJvxXR9VHtyHjCo1CVp6bv6",
  "key27": "wAiCsJVqzhUAx9pkC6sqxkf9baEBstqs7EnumE9mWop77dzyokyMUvWKXRoiCsQgAtcQNdBXi7niAJkTsEtU1ff",
  "key28": "4AMGwNqgajo5Tg8iGi9LYDPgWGxwnQ5yoUh28LQnGmiYmJXhM5uyoMKUhJ4suPYYm9k6amxg4KuoovAv2SPU7x2P",
  "key29": "4N1KH4GpprG5buoNr3wFQw66csWhBiXAJrnpU3SspUeStPneGzTu5D2vh6yuSch3v3r6PCHL7CiSrpMRjgrVgcyZ",
  "key30": "5Rq2mx3qnc5JxoHwUUeC7fgjsqbdfhR25zXdqinjcwsFMooM5ssUY113Y9r6rYB7XzDxtSwmkuokhUSmLgaLsBxR",
  "key31": "4CqHYuNv8kgu6gsEFeWqNur4s97zaGCNk4k1VpduYWdGV4731BEdyBpDNmvftyDwXKD5TtKAzbqA1P3QsUaMyhz7",
  "key32": "4CEbDpcy6ppHaWKnCzMQSSrDkEfjiJjdEmpq9v9ax76fT6y7MPBtNyG8rrfVdEjPUzugMQ3Rn21Do5W98K22bMgz",
  "key33": "2LAKesG7iPdEzBjon2Qg7XPqtdaLPn1c6T8CZoUZL5a4Y4ortpUvNnUCKzNzV6UqtcW5pcVh6euzrJEPFLBGUWWn",
  "key34": "4evtPYBHa6SwBLhFp2fduoKRZWse9ekZwAPDiuNN4NFHFJzeRit8ma1u6M1zVppPJcbUsDMeRNKpoGi2MS4bezz9"
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
