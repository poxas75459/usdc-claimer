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
    "UWRRG2uZgghKHW92BPhBq6sf9A3chSfe19wpFEo3Mtt3n8hWQFDK33cJTrgfUwrcvqqvWNzN78ZqnjTwANJTQ6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUjyLBc8SHBhsqyA6csQeM6qABSgzZew4h6o8cb1mujfaBvWfd7v76guGWEG3mEZtA77eMVw8bMSF2kBTrNNEVf",
  "key1": "22epiSjNAAFw8iXrFpbStBpdPgg6rodpGJbRY13L1dXdkh6FsZjpHqKSQRGkRi5J7MntFAeGnWzC8mDnE2yajPYp",
  "key2": "4iJGKST51Z6anZAnSYxLrQWSgQQf41vC2c88MkLcHGpALhggQXJuYqhGqYEWRoh2KMGdjhnrLFt6U4KMmg43vYC9",
  "key3": "dYWzRMB8bXyZcKa1n3N4D1ko2bhYE1X6cDo9e737fsd87BWm4epFvop35BCxAfBrUFtsFsidivtgxkjH7eKVs21",
  "key4": "5AjRE6Krx5xeVieEFN6SbPmeSBfu81PSQiXBXuWQRmcRsd6KWuMDxo1aoZ4mQkU3P3FnjpcwF1uWWkkXhRFxqmHA",
  "key5": "4zG6KMyLsFJzygt6bEhmjKYxnPBQ2kDyU4D6H8TdtJi38anP8hUi9oHbVcVVV9YwhVdF4DiU22nncqwGNveJchYY",
  "key6": "3xFEYBeQUfL4V8crZ4dQLfY3mY3E623Zq6X9HCvKCj2XZtYG8YPzVKU8nofBiUtuzaxhpfSM5HjNp4MNEo6Muxha",
  "key7": "ANsSdSXQYTSaaYRthe28VLXffPoemmZAsbTq1W5YsBUWKecfAC9ub4hbGfzKqHrCRvaCvz6T3YkwV3wxbUB9ZvC",
  "key8": "L6ZbLyVCa28wmmmM86BTpq59UQqUsg8iqUzcXgepHcYDHyWejTMwD7igetWDL6NQTGSzqYhHfxJJeEv3YtunhFH",
  "key9": "429YfDNFc27pq6kE2XJCBLxtSmFoYXDYN8bjugSWS59cJgiXjG1kK6fZ1SrbB1LJfXBvCFkbnwPwkdoJmWgKGgXV",
  "key10": "21DNDW8pVkUDq9Hf8UKCFaBh6QJMMJjPdqqf2kfYGTgVVpwZECybVJ8EHTRarPp5fHsrgDMJReN77udScRtzxMSo",
  "key11": "2EiUZKg2FX4Pv7dxqDmFF6RMD1ZwpTraodeGWVCFJZ8jBHfRU7i5xbri7LtfDNcwBbrwZqW9JvkN2dUVtdkshGtp",
  "key12": "3zNaJ7fr5r2Z1Rgc3FcdxLKcarohH4SQUhUwmciupUGojoCCaum2UHVdmigpBC36dppvWkxgKZUV5TQ33Y3Q5gb6",
  "key13": "3Hc1VYqy9GkvA9Qy8q8cyV41SfM1X6fqfCrHDq8YnZe2JeFu25mSXt3Pat8EH5R9xYLoKFp7E4x2sR6Y8kGYHCom",
  "key14": "3w4guXFEcndo8gm1vEUcGeJapQmRDRR8j55sbNecY9hfjpuH3i8q6iFSxF8mxbfxACsbLtwSFPbaCPrH29gsvH1X",
  "key15": "5rGtotgzVJxzo7F7Pn6Dkr9dWctVGSJUVVF1Yzpa6eTPWD2YNuc2z677DnB2NMqnKVZi9YSCMrq65LSewmYowao5",
  "key16": "3dgsU61P98gWXtmwsA8uwm3x18pinNZy7JHbRWkLXGRu3t6iP6dZfD8XdYB6thcL1UpieZojbEwr244j8EN9c6gs",
  "key17": "5CT8bHDssxeUU6Mh4AmsA5HRvn1E4v498Q5XM9ox6jVCjPetpZJrmqBpWcwzytXRLYVQBkaPMUPjv6CX4B6sbMyM",
  "key18": "2Kvqh2Znd4hW4QnRRkHowrCQtLQHUCapsdpvdDipi7z3HYsQWXfXjyn7tuxdvVNidRG7NKBFePVygDayyVruqaf",
  "key19": "d4GzH36Tb9LzmLC5KZZdT2o7Q5SRgrwEcHaQ5yrcpvVXdMyMKG6439WqbfaK2ug4Gyh5Abd5RAP3if779Fabzxy",
  "key20": "2byauCHZxtt9S6BdPNynfjtSooxVE3bZkkSgPV3bNTpU4SEfWZZBd2QZZHSyFUSADKV992BgsmNicsXt5wtpWKtZ",
  "key21": "3tcX2sCGPmgK4G6GBYG6V7sMcSGrQTArdmBdCP5G4PmkDqSzQQ9kgKnsm7EeX612uDYTMvBw5r1nmTQcQpghKGzs",
  "key22": "46WSVApNomdw7wSauAw3cmX5FSCUjZPEJ3S4Rr6QDkxnKVo93g5rEAeAdZq7BxQd8QmgRRP3w1C7Be926tEzoFb4",
  "key23": "4AjJdRzaAJeMusX4WGcsbVuteuooSZF4kFoda2ofYVtirGbdJvi49wJQbM7rAEk1rhwCwN1twGBvRqW6AByuRzcN",
  "key24": "4ZzwyYu6hn3uM3uGTKhXQKkJahuoTvDh8oc2bgfp66FzF7TEZvdob3uyC5wJ3U19FUAzoy1JWBXpKDduiEH3quQY",
  "key25": "Le3TN92UsgXR8DqwizBKiZnmvjqUSmM1T9TEg3aCNqVCDy1pBu6bp9QF39i8nRCWxhZKC1h28H2FewawpRcrWnT",
  "key26": "2piKzztTHTq1KsWfYfeZ6XfVnD6ZpHbEFJCRfbopaq85Qn1NZQGgWEFMPPuX3RVP2nBaXMrpF9B6An88qdhir9dq",
  "key27": "2dbxbzZVVPCx9aujjBJgzeoA5eyxbGqHjnUcQn5pGZxf4LbVLhDxBHcWSP2cDRx86Z3Ay8RMPjjtvKzx2ggZWRTU",
  "key28": "3kv9WZCw3mXx3uG1vcjsU9dEdvWjaLtXX6zJ1XxhVSiPjU8UGMQmnG9UKx7Zn6FxNjiMkmaUnrBxMK57iix2nUy6",
  "key29": "kohYsimFX7vmhZ7kXhCyUFwevL1vuWFkzAwoAr6C6wdrXcvqKtsqjX34oSYxQ2Cvp71XmYU6ean4d9fprtDmJRA",
  "key30": "2HxhVrRxFZ6yJ7UC5e5y6zyd7c3QNdcKQ8sTpChQrJtbX29X68MXpNebmNNPePad3pQHMZ5EvREp1ykmtQ5nBnDX",
  "key31": "38HoyqsubBnMzUi3QPA6aGCyvrEbJ8eKPAqiXjPwx15H7SMjFpkESZcFXnkx93xH2m5ZsVDcRPAHh6qBdrCZabDs"
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
