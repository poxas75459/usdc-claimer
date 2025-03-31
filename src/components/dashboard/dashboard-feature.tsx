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
    "45LS76JRGjoeXWMqou1JQu1zCKYJm6YgA5EdEayYnVcEzq9CndvcFYpKy8rFurJ8VB6akXFuYNVKbmxLNT9gF43g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EaYNjMgAj7CHodc5mbvz6nUGyvS7h39KP9pzM3MbnnD1KTXFQhrmdZy7Pv2fmKr6Twj9vUGLTbc9KbXRHhB981i",
  "key1": "8j97Pt5JnzCP6og6PbWThnwQ8f6SgfPQpTHciM4cjjrGwY5kFHzXuXL86TJhQRQFSBca3zfYEemMTwCYfAAXYRK",
  "key2": "2dLi2Z1zoq6agtygmUktG14ZWm62UFMrawLBNRSCssQqUM1kQKz4NGThQeCUxumTHGExWv1HNn5L8tdureq4bm1j",
  "key3": "3c5ChCL1YiWEthnfAc21UhavsHHhHWdhYLLnN4PVfKj8hnCiaaRT4wyDttZcwqjtWrRhYgZggAo4v3M8k3gxCnqM",
  "key4": "5vAq2Rzz4tSXLycJLzJV8dc5vJ2GuGkZgjg5PSc3JWsJGS2tz5VZ8upNot9RTeKo4fu32bxgqKznYGRj3HQPmhGo",
  "key5": "42YNiDQ8i3ThX2Md2RpVMQFUoZLoR1cUQoD2Wqax3ct9aDKWMsf5zHA9N6YC9qNTmL8Q35pwqZUStvWmQNaj2Yv3",
  "key6": "3quiAmHGtg4aooA9ofdmfH2YPjiRFmcWVjydcoLdUHZtMzNtXHZ4W3ymKp2oFpWDehJSyWCRRK6Nm83kvmnvszKF",
  "key7": "YeK4XSj58E11an4NDCw16WeJfSxeVuYQjFR93GqjA3PRoJQE48pZe9QDunaeqUaR4SeFK6Eaj1KtX92rLhXTmhE",
  "key8": "3ZU3GnYG7PyUMn8ANzfDJLdXD1C9V9WywJpxG55ha9D7Jasr6RhCf282sTegbFjQ1oUzZqudovqjaDh3zzrmKpT7",
  "key9": "5cSHhC6SMZjQoNXkycnVb7yGi1u1geUSqsTg6MxdnM7xBfdjB1xSuxrhUHXrf9roFgyB8PxsTuJXAR37jobQ3Nkj",
  "key10": "2Ak5LWvLNkkA5TaK9aGpq9hzfKafxHtkXcpzZBxqpjppsYunq4VoU2zKGtEVvWhLoxJis2GRSaFveareWSwUWvZW",
  "key11": "4RbTnkVJvTgFbTXG8PzsRHSSU9xnNJ6jzS5KBwhXNoJFmV2YeHCYhGjP1LT9cGbDBimvqcrFgjkW71P34mJzZRog",
  "key12": "5HqB2TrcMdNY8Y3p7GXZVMKfHUqrHfaghJi7ws867ShMbwXCXv7WoaYNjP86pvpff8WyLZ61pD3obE5P1ukaJqyT",
  "key13": "2KRberZsJikLZvzvHHRJATmoihKFuedS1PFnz3G7eSgw1ZnEFfxEjSPL8Y5wdaSai2aiijpcA8za2sWx8613cRig",
  "key14": "55wcshwL6BQBnsNu6zwxWcuXqSTdahANektRe1qiKDjHAydyKKg5m3yuXvYJCRfH54barDT8LNRYm1yzqPtR3EMV",
  "key15": "31FcZ7fmm5QiUhUZBhUuVkyqyNsUh2HJwZUD7k6A5hZ3uXqqTqKVG8JAbMQjFWf7kX88dsXQm3WKrSGWdsai3Uj2",
  "key16": "3C8x4Vvtczh8uK87wTZb9QU63nUKesrQxwtWafBJBMbULjbEhveb3ZzCQGE2g82SHozVfvug3kQrXidBKPEKCd8b",
  "key17": "3RVGoa51TSFnRxDZi8UukiQBK4SnvhTUotshmZWDKrJX7EEbnMALXHonUDzigxHMv9Hbsjbg7H71AiuuBjv4djDA",
  "key18": "22fm7EUz1CUaFf3tMabBrzX57RP54e2GL2Gt7bu36ww8u4yxFo2sbuhavnstnvJF1MPpHJVYXoPey98A6brY72oJ",
  "key19": "2K2Jfi1THhUTPTBEkJajNmTFP3mRjBHEg2R9nkZ43mmTC5pXAPbLmw349ffyS6KpmBog5fiz7AjfeTaUySRS3Z1r",
  "key20": "5LVeeTu4BSnaHrRjc3EEp4C3botqgGuedwHhwiMbz3kTjqbfH6PQ9fVSAzgb1V55wWtgwSwKdkPwQ7RQou6UZuoZ",
  "key21": "4cECbzZSUUzKyq5X51yuzHRE74tmqbhR7CGiX6ttoYU9B4We3ZTsUCW3LXg9CMGdw4cK2dZBSEdPBaDVzZmzCD8m",
  "key22": "47WKZArA4eYCSysFczPxDhCbwq8YQ5d9ueUz64uYSM1ZBbtbJxX5PmsckTxzUbXKuawmf4KKrs6RgeJzkadczhcu",
  "key23": "4vgx6q3q2FqQpXZTSPJAbrQqA2FMXYAPoRVfs6VL45uz9Ano7sBTasL6fn1DSsMRxW3ipEryp2Ns753sjrzdXSBn",
  "key24": "54ssn8b47M5sC8y9K8hFaxhrhjoXuKzBEHULddNmdKYNgD3QnMi7XBqZceFpNgk2P5SBxv4rL6j4BJe7RKhZyFUf",
  "key25": "3w4kphZo6uw777yHY6EV5eu4BtYBd3Ms8qMQdJzfJHfSYetJotzA2jXypFqHSpQyvhJibWiW1LYnCBeGATBwJV3K",
  "key26": "2WbuGbJCvrjBgncYB647z76vaCEY8kssSnY7M3uTzt1Zjj24Wqjt534vEjqPek3eYpxTpUFPZWdhUXzb2zLZ45eX",
  "key27": "2TCHnACHqcM8VAmMPa8QE984PGc1zTBu52Gf2QDKpJJ5LCnB5exaw355w9q5tLWVvP2QSDTtrQUaeqFiDtUoPp2n",
  "key28": "2iBNaW7AGpgG8NwBJBjVi6AosNooAWCUor6t8Am9oX5hhXHwmwQpES1wU1xEUocEfNcVUKV5f6WHRA4tMS2UCcpt",
  "key29": "5KCcrPWRUWxwEgfeRcXSVpBws8JHGSadSoxP5L1izUvnrUBWz8e6ztTzefcrePeH9AUgF8hDKk7L6pzXh3AaV3gx",
  "key30": "5DtMaxSiAdQoRtaW1YsDCjiJ9YPSfY4LuBxfLvGm8g4fXDQ7UDnGECfHisQGwmogE8j7dvRtAmsqTUWCciXhZpoi",
  "key31": "39hkiqU7kQMEzNxtPjMYr4efEm1jxVYcMgQKUMVCPVrGBHbDccuZBW4bAk32AeeSPeaCFSyhKSB8cgcRErugq8No",
  "key32": "ySoU1cCKcGHKjmCy9SLAZsKR8gGBk9iyFcjER36y9UTi92R72oCRm7Wy1fNTZDJtXsu4pHSwyMiazf1krs3xf6i",
  "key33": "4aBp1PSnCYJxz7SbWBRnCvCR9jzEcitEC3bi3wpMTR9bJhuNjPP4zHVBLVubJfA19L8pJnRUFsB7PuyN6BtQTfwA",
  "key34": "57SiMQEMqP6HsziHzvmvWgysP5Twz3B2tjiXEXtNTxgydTdSA4e64pEvMw4UnMHJRomKJ5Ar1Mg3mHriUT3reT82"
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
