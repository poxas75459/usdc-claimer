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
    "2ANaFiNjrS8KssB5MAPY51CJiUDj5DjNsQKHgRgx16UP928MWBQV577QJo2ism9we1ZpV5MLthpmVfJ36inPN4TE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxGxvieWweUausXkk68Zq5b7z3EdkNvpk9BqoyCfGfpzXDUfUoMPPwKSboScGEfHDXehBLjM1VDw66GA84JhokR",
  "key1": "5EM3xR5kQVk3WvC1eJv2L1sBPLiZ6VhHVdW9gGGA7n4vynwLzYrzRF9ytxjT17NTW5TYCqux1TUpW1gfDwm6avUc",
  "key2": "2nCi12ESxwq4L8NBgZBFHQXi6BVZqcYeKmwcDz1aQPz1yogCmV2Y6KDPX9JaxqyDY61RvYGJdSxQY26nLopubw5J",
  "key3": "3Cn8CXUPhtFQ5u8fquBCz1bcy5dJeVJwkv6eXo9DHzrE7LUbRzHBaSUVW2fCNEh434nqdbuXaER28DsQpW3Yf4Ks",
  "key4": "3yaQZasv3cnKU6R4dhvK6srrdcgCJQG7PBPLR2XTQWwGz8mqhKmnKa5GYoYvnkUYoF8We8oSK7eysido2Uox87i7",
  "key5": "2U44R4GCtah9gS6ACqJs1ozCRfuJBEXgy1WESdhzuKuQYSTkMbjFr3oXNWZQjhv51te6hM93p9NY1Tgo8PVugTuf",
  "key6": "5F6cNYuCEPg1AxgDio425tMVBuFVMA1EJpJqyx9PyHsYDYzrqYnccmAHVjsBWf1BNpphQc5QMnGzt2W2Md49FGQj",
  "key7": "52TNFzgXNN467C45VbgVKM5izyxjfwZCiQWckDp3grgkcWGcQ2Fp22KAr69vjeXafXwDY6tUiLYg4Mi9YWeLnysg",
  "key8": "55mbYYeD7E41Yd142U5rhytx2MgJip5wRmNmMRt7TkrPC7F9EUoGfdxepfASDJuYm3pXyAvLmP8MTFXnDuXTav5F",
  "key9": "DSktycuarer5bQcxLq69jop3uqpQNAxRVkTkmt73hn6xp7Tgcf6rCseBmo4FG61oKYmDHEpNUw3uBUy71Q7gjip",
  "key10": "4cEuwiqzJ4TeobD64diaHWXGNA66D8qeRVqhnak8ZKSFjnY4nGg4vmEYmbSKuypNNqgUqKWB2PciSx9eguD64Vyn",
  "key11": "FZWNxDWBFapdCik3KsnnSMAbrCBPRMD6oCjvZHMDvyrQ9r6tjA9UanX7uSXawNQgPUrxzcAS4i3R3tkAuZwti5X",
  "key12": "32rLpsT14R2yLXcMUJb42smuSkJhY1NgibV8BggKJ51CGwTexLudkaYGn3CUgtkdCKA4Q5cX6w8a5DexuFh9FcBU",
  "key13": "5hkHYi7qrnWfA3yPc5Wh6A8jb7rEv1bqk65CbeaHWHEDx3aqSFLM3ML5L4Vhp3gmweuQABKA9w5MZPxy8sA2xi8F",
  "key14": "5FfTrYBf79Usck8iZoyGZBQieBMfuQwZR1WgPSgHuiuyQrBV3NKhmViW4FnH3PYSL5PiS5U9XDLtcD6j95oYc1vm",
  "key15": "4tmPGWg97mArWWfYQmX5DvQjiRDvskqeRBFcMtKHxUy99bDsJjNJAe1HJecfZdFG3nfvdn11gi7S8EuUDyHUaA8W",
  "key16": "2nXh5jVkBws32tpPoK28VmuH5YpBz94CcQNGSYysrijA3Wc4NKT4R99jWxsLDEkfe5aAi32QdUmMADQdw1sEjqNK",
  "key17": "2zNGr4ZXw2GjNQfqcqfvwjZmpw6qaHZpSSVoM4CjCHKmwkFSGbwn2z8rKMxFLw1hTT4n2yJeymkYfXFnHyNSUHNZ",
  "key18": "3phhqEiDhciM39zMcmmYrkvZZ3QSmcU7czPnaMYcT69NgbC9PbEeszXeEfDoXe2c2zdNvFsUG5tsNLZLUeV3UbsE",
  "key19": "4UFp2aRjzeBffaJcLdrCitRX5m1gGhTn19G3NoSLcqQPXesVLEsETd8Y1u3h7eyodeTNG5Snt1XHUZBPQQZVvCaV",
  "key20": "5XotcXtX1q3Sgk7AyEUn1x23uXGzRwKw8c5MSetpy6nvk8QuiaBRPcCbF88rAcESXGhL51Mbt1DwMkrbXNdmTnuK",
  "key21": "5Dh5JBMienfjNbGS6crQwY2Z8t2EHnkKWaxoxqjBmN3JeCrpDcQQUiYtv5bis5BhUrChG3U5YbYRuob6dB4fGu1U",
  "key22": "5GKj9Am68s9RpfFn26tEHiNtEFsfEPoFhyh6Vny7U6sgEBD5yAC2qvUqn5NUMRVAv1k9xp1dnbJoYYdzvzAYyjhB",
  "key23": "4EgxzfDbdVt49hNafNo1XUSEVit63wDbKiuE7sko4WCE6BLVHGRUW3geYvxQntfTSrNLmgKMjFqhspmFrwyJmN65",
  "key24": "2hwPormPFTUaYFgRNE65dunD9Hyyz8F5XznFuPLUKorycr4xD5MMmkMFbfKT7ZrihG4H2osaxuYxmd4ejaV3DJ1o",
  "key25": "4gBdnFzKNYQp5vxGgZRbz4BUjoTCbe42oCiEkC1fw7zLGBfK4Nk7X1e8LV675syAkQo2UhAmeGrjBg5TBr2ryWWj",
  "key26": "21Xw8dwHM9LktF4273rrcYh2acaPJxJdjijQrxfmSg7ttuBQCLf1JE9GZsQoQFMGJhaQk7T1F5HeAVSQAQcTaJyU",
  "key27": "5HW31S3WXwhQLFsHryjc4y5L5sAY9jzxnhF32qyFqG5G1CPxxnJbSJtbPGVohC6mps12EpnGTc6HFowvj6EnPnr5",
  "key28": "2TzSkuK9pmxLdEYAqtW8u5V6XHGKqzBEvdgnie49stHYowVQvXMaRgatESgZGpYmHyeyfwxeiBiRJraL2yL5cKhv",
  "key29": "2YrfeEPMmip4RVG3qN2u56wuTVdPQZ3WbT3YmCA7ARwFKyNRGk5UKyVz2FfnmcDkuvAYRwACR1aTR4E4NHKxYa1e",
  "key30": "5atc9iDtNqSrD4cnfHMdEyhy3dXtSF7ASjgd2xuPf3snGwCsjqnW4W6dEMNRvizenE2XinZeVuYS8zLVe3DQxS88",
  "key31": "4hBF85jaQtNJBF7MxEfb1kFmZu58gLRegsYGiM969D1wH3UY86WuQHCiV9HcoL9DvZQrZxsijpfeHKBhuXrh5xXx",
  "key32": "9nGPynXLk9rKF1BHCQbgskrWbFb7F94b2fdGBjcc3dwFJtLphmSx11LnhDDKQCs7foHHg6PjEUb7uDT1qdGCaD2",
  "key33": "2gLaFmmumCsX39vH4JRhhBgGyKiYqwoTQFbb3uxKuTYJdw2vb4sH4uXGSTZuhZbdMk3iMR7wEfZiuF9YrPJopZey",
  "key34": "sdfDPjpRXofEWaCbw4Er5vzug6DeuXtNwAVNoskSiikiEGTsZy3rsTJBm2N7cbc5nbn1S29KDsiFfgPoYeG9geT",
  "key35": "4PzrAtrqWmwjN5ryrGcmEDeFvzTcSLGkgSa9gYpL1mcYA9SU8sKWvutMwgCUs1ZEAkBVirUcB4RTtbYPu3s3LSTk",
  "key36": "6sfDmmn7gjucS3LVBB3mPriPYFVfjhmZJTL4BRQFaKRAZkt2UanVvTUJUtYyoZCJ7m3m8L4FKkxCXZVzxMVY9HK",
  "key37": "pwwuER2Eiid1XBJb5ShnG2mWiMt6TBvSHvBUALhKzpwVBSwVWaQZ9F5iZHdGhVdW8yHGyeEfoULYybJEMGFePEV"
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
