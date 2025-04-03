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
    "312sNjfqeituMzLFM8s4QZvQreDjZLp1GschUs8dsoM9Acs6K29VSnwcWWrE86GNkXUMKkXFThd9KkWh2fToLDMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jozSuNvHNLUrGb23jBssULjRSGAAmEoyCw7du8RapmCPJs6YQFcM8Kv3XM4SvwoBDjxFE8FHxDSUqQpJCmFGQYK",
  "key1": "Ey8EzKHMYyiSCYtTZWm9WjepsjrnboN5ouSt6wbGpMuh2gXnsAkeH4TEPJQSeNHqro2bEbJ6CKKMSpU5jPkvjcA",
  "key2": "8oevzQVaYS1bLVD9X7q82RvzbBfXpo1NWPsH9HKm6f82eE2oxhocP5PJSY6fMmDedbGxKJZfLBCyR9Jbs2uU8fa",
  "key3": "3qKMm3tQkMKjf9FDH72ffNkh6DSAthPyZZz9fBQ38VL8Z9qt3RBSdJtatDVcffqSS8KqgSo3tWdkjyrUrSTPX8SR",
  "key4": "4HGHkjyA1yiSS5vn59uarPorUSaqdEA6wHfpxZoEDa8o8TAsidFPQkKzJj2DKCGHBX9FPgmL1H4WhsN5bF1s3sq9",
  "key5": "GVPPSf9mEbZv9aXWgGQQEDjx8HU3R2m7z81tpEYd7qYYjAekw9uuRhehYvidn3xPTCghuzxf8dxwMfyVLwEBrPR",
  "key6": "45MvAny9aP9mqBTcic6WH4CdeZQNqhiEBvWbgwMwZUYHDRRxH7vzApvY11go38YvEh2jAXuF2v4U9YDeTyAbHL6A",
  "key7": "4PvVeUjvRBQemSwWGBY3byB8rbGe2A3G5siyN1kA6SUr1eqpC8tCoAyfJHjFYsFmsBqqutoLE3hhKAbxVC1hCj1i",
  "key8": "4pRDQ86A6HbnSthWY7mKgNCF6WRnoxgTnXPTzZ8ErZRif6QMSKyvoWxnZSC5ZgqZTd5uth5NEkeyLw3itLzL8Xk4",
  "key9": "3g8M5Ry8FzpVAvCfj7WGAhTw5Ln1h5xfAGdwaDXDRo5QewVJG2A3c17tgwmXyUtCpQCcbK7sivwyTQJ8SHskei9z",
  "key10": "3mZN2f95qdNvvV7fwrx9zFwB6hoLoenEvsU7d5gx6FZyuW5iF3qb5Qt3AkyzPGbLFYEJTPe8BDTgySWvnKMhwtru",
  "key11": "5ZrQWRd3aVf1gw3mUWzYdFG79ivctB7hCNdn1MS1xhAMyNxWF2qL7ocBSb1FGZ68xehKBZ5Bv4dr3Um2oXYggiXy",
  "key12": "26dCjRqD4yfvhWUDuxLVuF984PBgqkP5wkUdEgvS5GGsvjRX1haaGaKqbZMgWfmR9qeok166WeeY5Bqs1VypBGZd",
  "key13": "Pic74xBR5RFHbzb6MHWW2FpSHaeEcjyopcoBs1zaeQMh6rdYqgGVsQJePXqxHQycH2ZiBLJHbqJnhsYDNYoQn7K",
  "key14": "3qP51siKGWQycwW1WVhm6zr7odpqBnbimTvnAxgTN9cgjqXSCTscY8SKhNG5akMmwWr9noRoaJNsJWaetQvKJaeG",
  "key15": "3S3wYzj2knnV3nCCtMcH1y7jCuj3cbu5M4ZFenN8dLjxHeaN6Jemu1JXsrcjYZq4L8yckc9ba2pHg2PW6mzszpxz",
  "key16": "3xjLwoZRu8huJuuwaH9aWszwpP2zRRAXo51rVbBu1jKd94THZi6uCWiiTfXio7RM4YKbtxjyjHGZjPiyeFnWW9hY",
  "key17": "3sMxgSbReH2DfZTLFk6e3yXGhEZdTLu7vzo9QQDKr5wtVyjZZWcjEborRX6r53kWuVNKdgWPy4z9aL59HAeJqfYX",
  "key18": "2xAG46SVXxMHcwVgnTcdQZm5AaHU4WfzqjabB1TsHRKaDXMftKtcpFwxvuZBp1nV4igLcZM8e5DpGYWssy7CC3dZ",
  "key19": "2oqddT9nPNDACgUiMKFx9s8vwM1N53UBANhHgCm8xC51ScgKP4QJ1LpxybdJK6gguHWh4uMGbX2Vv6rtZf9sgnQM",
  "key20": "4GrfnF8v8YXzpLr6pAdmed8YpzSf9ivpX1mTs54thBes8bsGEfpSiWWWMcdLa3NwkVSvMUoFi4XjwJ7w7C2DPdHh",
  "key21": "5oQH92zunBKfwG4HdLNerczsRFfEgkgAQwjvr2ttYwf1wVpgcQJR3nq1RzeQL9ijdsW9GGCRA97uWZQT6hqMJL46",
  "key22": "3VdnEuDsDCG9JPno7Ax6jzRbNScHeyfUKWUFgHeinRCexDNNRkEPVHiAUi9432FStJdZ2rqj1rFxoSE2yDvA1R4f",
  "key23": "7KPqendhqYVYUR2QCBTnXUFJPrv5rT6oCx8choPVz5vfbYb7eySqetk8RrG1nwwTgKkRbEKbpcCQ7LC3wYLvwuK",
  "key24": "3pGmoxssdr2o18vAR2uEvoPUdJnvb96EDSGVyWxqTRgk4yQXTnmYWtBnotLBEAtwnhiK6cgzczbA3o35L2j41xN3",
  "key25": "39AmH5YjHaYeBLpexK5fforXpkjLiod3KNSjdvu12JReK9UdE5fAK732LbYtDXRsf7EDbYNmMo48dpoYhCNyzksg",
  "key26": "7KcM7x8FZtEamWyzaygFRvbXQSpuQ12kDE5dMUXkokYvravdQL3kyHXcDAwkVM62muTTnj2DEXESFaeErE4SNyE",
  "key27": "2VUXA47tyfrBnrNypCtYXho1DVGowvgJRkTDWCQNtYdRdYfwtpvbvcpkBJ5nuJZiVoF2ALBxVE4fvwbkBNJkimws",
  "key28": "5oHYbRtEwbCaUa9gXQirv5H9RrTndURd9yxJZhEmw67zTQsVZStRbsX7PHkm4MdQgmwMXrfL4YTsGTKyMjC4yUYJ",
  "key29": "5FnACmkkWsjHKtLpj6k4zkZyhBMjiv5GYbDwtJHfzs7KScDKCofkrqZi6nM4aqBpyi5Hkqodf7Hp91SAjxhLDR5t",
  "key30": "AbEBuvy1k4XjLJSvWHWW2xspGE6G4npix4hRYtpbuHeZgKHp4xDUJvRT2cRcSrfrhnDh38YhvkbPwW6eMDkYeaw",
  "key31": "2HSuVkVQG43GpSkhzJWPgrqCbz17GY6vKoUMdrP7onvLHbBq8aCzthKUscJHNwAkvuwJLmjxZQPd2XYMbV3QBoYG",
  "key32": "23TZkkdy5Cjmq4HXxbBahsy3dWTJyjKcmVU4zXkTQ2VbzGaex9HS1DaMtyPWMQRh1QCX6tX7cHv3Uiij36YUZ66H",
  "key33": "3xxGv5Q448BfpePEs6Ffu171FeXUjacFXZj17BCF77SnFTcBWy5eeRy3eEKomrrxnevvFpkRgJrTcfk1UqciRF8T",
  "key34": "2a3x3JEJLbKhJVadhbgc6mxsLrjy8pA7Q8m95FmJsseXFumDtKtgFgMnvA3bD874H9Fj96HSQuEz2RRCLTn44kzj",
  "key35": "igriuJiWUa8unWwqZcB8oYt9SUR1Us4qJvxR3C5H8Wv1RFouRyTogMw8NBA7tzv6n1LF89ER2r2jRzm7CriZ8bb",
  "key36": "4iJyaawQHnTWkr6hy3h2ghAzPFTJJBu9j3tTGhQGWwsMQPRAWyuwzMbZZ8uJaKFqYnHaaEaWH78Sc74cGvCNaqUe",
  "key37": "ys2RC91BotQVmkHuHQJzmBmpcv2DgB8UgKbVkPczwSNy49PjvbkoRp9VCgMPbGsshyfKPwfjYrX2Svb7pgJFHQ7",
  "key38": "3ETrX7SD8YYcwJntRsb7NpA2fNmmmfyi7oVvLVXbGtDiVTJJHbgcBBFCD5h5CGjRbTeU6ESBa3X23SLYTds5swAQ",
  "key39": "4QLneeYtTTAHiEJpJAujp7YwGVUamFa42LCfbNXGJhcHnq9wnqpAf9BoiSdG7nxqSRqetgdnGwFXKpbGphUquH5u",
  "key40": "8SNAagpT3o6osPFRY3wm3HWKz1PobdhDcXVhoGjwTYxDrP9zfQGDoZNQkdZLGFcpJQk2QwFVGYskRjm5cPFzqNL",
  "key41": "4vQh5zq1mRjbbSuxmXnM3vMvf4Qw2QiEXYE2NEuCA7PdrxDCuhRLjZvEU8pfgDrrUmVnjUKWup9PBfHLW8XfZ6Gy",
  "key42": "4SVanoDMKArfRr2SFeFGictrwR4cH6yDoxDU9Yk1g67aziJfaJXWwxZJFHkiaNW8K8omdVaCwp21Uo12Wfd3DSQ1",
  "key43": "4p8oqm7t7BZCkVBFXRVgRSUNVJeEi2WBVPbHPGjwHJ8Rgv8Lmt2JSBtUkd3b2uyxjhK3XGVHkp8S7zsyD6c3Bm95",
  "key44": "J9764SoQFD1YoKGVrXrShVzJPFpzF8xzXPXoAtxZxrwNmgrhAgH6fVyAPpihPZeW7knLy5mjxdkjv36DFb6rxKi",
  "key45": "5QzQ27iRwCdD3DNvmejGvNkNWWARGgZaAiUQBY7D2MuHT3vuQHnPqGmcE6W9fUeXgytyYwLFpa7Ts3T1xt5soHEM",
  "key46": "5JFBtoyw7S6CY1kJE7TauRT9VxcNvaWkr8rJLDMTKxRBCuA9Q8piCwxkc7LQoa1oDNe591g8WiJ53V9CYkh6PJZW",
  "key47": "4KWtS12dsH7DDM5gcbS2Tp37f5AwEii8XYnPJ1BuVfSA3EBUUN5up8G8vGma6aqwTenDnJcu462KRQagvZ9emmTb",
  "key48": "JeVyEFs5rxT4rDvdGQqZXC8FE56PLo2WosAL7XaZYZPauUFxpmqa8MmJuyLgPh2u9QYLdkcxegCgx9VRTCkvtej",
  "key49": "3pFSkTfkHw2hKwdBryDdfXV3JQeRmzi64bvNWtkvuxdRsYgyPvDCwWD3GNNZn8EtSNVaKNq4KMQ76YrUUQg2CcRz"
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
