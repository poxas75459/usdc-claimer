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
    "2Bd5V28YovepSnA9WME23UQJpe5sJ3bLFkR2ARcfahCH4UbDSRnwW5ZP43dq1tJUyjDo1oSiqu2RVSqiQJKJFHVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pP3zTgkVo5MZELCo4ZEpEWeowTZeMUfyUfDBULSn86zTmsjwJCFjCCqdeEZ5eHZXZwPhxDaeFi5Xonp8L4FWjDE",
  "key1": "2ei7E4NoHmEGPbKWJVj2xZEu4tit73n5BGNtEuGa6xVc8za9MoK1kw79791Y33FfyerLif1MXu6G64BovWqvfGZo",
  "key2": "2Hbo7frT4RP6Fe1KR5RLUpj9nk433qtKDRQdpD3BhzLV9tP3HDMR3LWQXKrYmoTTpSD5hpvxndXpqq7s7H9UKree",
  "key3": "5Z4tDtjW4JiA6qsEhrJPBLKaeFJ82H3AVmEVn5EeGunYUpRDnDWEP2nKjp5AzDUPV9kH4sSgrQjHxibaAXT5mVhg",
  "key4": "47ymqZBqdA9G1LgobH5hVVE4h8kq7tDRQZYDVZSfJxFPuPygNX7BySKL41J2VTotkaB55sP8dK96Ms6MmNhmi4ey",
  "key5": "5reL7KYTSRmbixQoqZsngjbgCZP65wi8UhU1XrMyHwzA2jHHiskGCf3Wpjp21yVGau3VjDL6Kv4nTctqW58zuQED",
  "key6": "kGP3ENrNrfZygTopeBBgLA6nNs9v7gWyGCqG8HQCW1N89caCCMqbMA7e65Hgt1BHGskTp4bcLk3K1DQGPz5G4EZ",
  "key7": "52VLidsZ9jSFZez8jp3JVevuNhqKTQvEE86wjYva2VF1vrEVKwt4ZVUvKaCyDVYmLrDNkYgkeejD8AW5Zf9jLY5y",
  "key8": "SRahTjTQCPNiccEFeABcYQ1mrAYC1FyuvPgmQgMuq3vDC2Ge4W2fy5dq7AEeq6G5K8uwTbzFRN14cBS4bo4Gd2e",
  "key9": "3fCa46qtrpnDv6s1XxCkdUjinfKKaW6pZfrV3tiY1GrtqHh5ywU4vrBEyifRqhs95NnvymM3dYNDUGhYvt1pnc2J",
  "key10": "4NPuKp37vzcUks5fWBSr5d8hQQLi14r42nVriATFYjhpznnyhahkQKzWAH6uezq6uHncdwM3ezFPiJu6sUPhjN66",
  "key11": "PCerjLxSTXM8HTTPmFD99Px5W2HBSMdJAdgs3ytZPSNCmNbhACsXCk4sYuszidkHsTfDu4SmfbWt8txjuCMSPZa",
  "key12": "yU5yzek75MddynLi5uuMjvjYuJBhctNf3sxySmSrTk4n4q3dyhv1GfahhjWfyne9tXo2pqpKNXcg2t4PVe3HbDr",
  "key13": "32JqKxUG6NAnbAbe8mXxHK4a2Y9wKcmq4jqrye9Z62G6rZZFd4fPjsKVCiF6kVoDtEPy9zTrPqvu7JxgeY4AEmBS",
  "key14": "a5aUdRCTNwxHapiqmXzcb4ZWhp83GDrC4KP6VYsiXbjvytxATvuFayEcBL4TdvjDfXM9AUUix1p8zYwemTy79gp",
  "key15": "2htsRxuDh8NVYjd1AxzMLc1nZFCTiV47e3MSrjUtkYt8dpdZv7B4CgHz1WVF3nyuMSGHpfMHk3qb4mkSGyLK3x7G",
  "key16": "2AC1NL7xNQ7DW4ERMYqJ2LXfsByRAgf7eXCYkLQdgGuRN4stPxeahEPyS9H2YyLHi37TbzUM3xsteHNc6oNU8mW4",
  "key17": "3g96KvdCrjsjmeixDdSwdsUhgk5kF9MVgLPQmizHnYWvtmjWDMjdj8JRT7wgfwgKXRva1p43U1sEasn2z5D4tog9",
  "key18": "3tjGnTQTfhhYL9A2X2VRUay8CbmNWQWst772inT74gpp2WxHPHhjEd8nSrNvchSvUhfwzTdS7q1FV4vBQKLnQ7Hk",
  "key19": "42dtTzbYy1fwAvpNmKtshvFXgvRAxaD8MYCjEVJjamzkuFgG9uo44Yuywy2XM9jUfUYGqqWRvPcpjgMEhZhmnbFT",
  "key20": "3iEP2ZdBuZ6PqxxWXaGjo2krhmoTbZ7mCCW1oQrcfrBAhhfw7Dj6r5gC25KDbuz4Bi8NxwFYKdcdM7cAfbYMmwEV",
  "key21": "22vsXur3PYt78D2MZB4S6MHKv7mCJvcFa46Nvb7j9wYhsJgBcHtKibv6pcCSNY8KU53Q8juqw33y9wStbp2bdUi3",
  "key22": "4q6piFHKdztSgMgXpDT7EMKmCnd3CXyeJziWnfLy9nfPtCtRgW94VPTH7oyjLFVJqA6F5oA3zutiAh1i9HtACcuB",
  "key23": "4QLgPDDm3bVGmsyzc9cRHgyeixuqnYftzS2eTAWz1zuSmnM51LUwzLs2DegupTtcQXuawUF3aKtFWDuDEq9oSYjF",
  "key24": "4Ea2Bchxez1CV2nwCRgFL9XacpEnPhb2BqgHVwZnJyq6hB29HXnBV6audcxxiQcDu9wK5jw7uNWpwScv3bBwFGzF",
  "key25": "4UXmgvRCgSfqNAwzeY7m1sL1EL6whU3VW49e8Zu4DWd2e8y9EoRskGfEc2b36wt6qYM4nLKQdRDaQsn8MbrsA1FH",
  "key26": "3ZmEvUBKe5baGraoKjruBV7m6Tz4LvwUCWtC8HPRL36tNoXZJj5VkwuSEyXuCV9vNhsEsx8fVfW7B6f1xqJ61qFx",
  "key27": "3u7ntxRA4V4hE2y49LwpQggxBKz3w6JHWHRVqcQuqfQ74RoJqTpGNEVQVMJE1brgeqsvuEY4hMt6mAcAC1x4nSxd",
  "key28": "USgfp4HPWvHFPnv5osTt33ZTh7hdaJ4dmKdgnXYADnJyoTh9pVZ8p5uu3UHH9XQCmjEbCKPdXE2oSPLa1gRVMis",
  "key29": "3v28RUWuQk77dVM1VovhjxX2WVN9UBgtXbuUKQv3LehV9A8di1zd72uYYAQzfAqx142J8qpRgG6ZnKNQwPDAP4ov",
  "key30": "63xa9Z25qH5PEZxrYNBqFz5cWj7JtJwEnFq6xjWSqn2VApE4awp3okXv5RdWitXVddDEdTHEuFMxWW6qscawSv7H",
  "key31": "2UaEE3AoR3k54NTH4Wr4r7tDA173ZCNAUtRrmRrhxdLM2JADMX6FhvnuaTxVzw7hJSk4MHKTjEVB9ADBDw57pagp",
  "key32": "VDEpq6BAF67jjEQdooSHXCvpb4msCq7mgTWtb8v54VTXGEoV1FahwMmdZuj7WJschTUfANdy7S3T8ghzoZebuhf",
  "key33": "3mN1Yzc4GQGezrWW4Y4D6SmzrqgaBFC8quVEibvdaPDsyngewwaFh6s3NFmAUVMF6eAeLmR2wGa3ciFsK8frb7GW",
  "key34": "h8cHDYJuVwtE9ci3GHddiizebH324jsvUJ9y3JGs9NVp5NY9zm28JyQsucieWWTWmzKq7fJnF7dxBKDEnvXXRim",
  "key35": "27phLitMsRKqaaADD2ue6KndKkjfbWUk67B5BgPfGcZk8W67NtsqjvLmphSjXc7QWy5yRwLcYyPDKhwqTws5er9j",
  "key36": "4T984bmdLqknWzkJL4T2W252eSVx1p6DMhaFnMwSx2AJVhG2suhZ3Z5s5wjjxfkx2mmKe9r89F8yWo9h4UbYrM6a",
  "key37": "5Lt4obre9o1PsQj7EW6dPgNsyaJPJg3QWYMptr2ze7PgifAysUcM8TM6JN2zMweG3DgcWkhNKSqckxo5WZ9fUcrW",
  "key38": "39utqDz7Crv8fK6qqgpbZ3kRmeT5eYuKrgmLDRD74WCxsNS2KHErzPB6AicUENuk49LhJdrv23dvFqfvLjMFh4RD",
  "key39": "5U3chSJToY7w8Mjq6CdSiKso8PQokrVhAATafCz7aJwvxH59jGYXNWz11STRVyJRC85toR2VwVDd7BWDt7nh5CQv",
  "key40": "Toq38h6v9Dmy6v8dnEhNh2XesPARN1sLdSquhRWJrStbo9juDUHaA8SDmPsemJJbyhdt7ehSGZhcDZ1Ycj86jW7",
  "key41": "5ku6WrS5wT9oaZ96kkUPeGF1QRMj1RKSVZ6Wxbiyi53FBvogUXa3oqmEBKu4x8QLaCQx52bEd1Awgqf32D2QBEKM",
  "key42": "26vqPCYLfDNcCPneJ436tCMWQ8gRHWhzq9X3cu6yFGtqeWrjTNBA5ffGNfRSou88VVafQ1QwqxmqbcfXr79gLqMN",
  "key43": "5E2qCRkpsNsbMZd9BT7ATraRrRXC9RMciepLzzu4QZgW62haQkp2pK4JVcaSXk2hZCJqdyzPgf4YU4ZBaWTT7WcT",
  "key44": "2UGLCKbCrCyh3NCivLu1oHKEh2eYRSS4qgKZv9R8P2FhjJcFb8Ka71H2DSkzHAm2BQ4ZAZcGJSfLo97UsN9wCgzz",
  "key45": "3nbxeyrQwtxvkVKeooXr3sRxQBQzUtCAouibyNDPS2eETFVqbvpHwZSU9NSBAACPgdzbvgdAEEbJ1grNA66dashW"
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
