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
    "4654Pw6EitFPrdJG6LByJGrudiq6D8d6pPWWpwtuWmHXGoLGayRu3CUb21jWP7YgheFTSvcSVsfFVvFvhxLiFTjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxzyaxJxQPVpP4fyqzfS7RYWvbxzCJCozeGwjVe84mepNcsPEDKQakSeL9XAw6uy7c5tCnKMVcUPUfNpxD8BSP4",
  "key1": "dzw14UUqAph4Vf3vVYRC6HqbnjAeSzski9CRBDyKMJX1bw5Z5mQn7iZfRi4MVCRDDUWhbs9jpcWVXhANPhcmSBK",
  "key2": "GobLa5oL7JnWs2bq4P1Xfr3toBZhKUjqMQ4MbSjLserz9PKYCU76suJaS6JzTcZ9wRhBvRihMCeTrafWeDgRuun",
  "key3": "33vX2pqFXGsmKYWkZJvKjiKrYXj1ZGjM9uYCQgEvS2hfMHRqiYXk5QdYQ9XyBEXv3jsutZDzX6FDPqoN84E7JXBp",
  "key4": "4igdhYGHfhfMYt6ETBQk4ukpyrVKwYUxeqyw8M9W6kBWRETb6gRcQXp76uAw8SNmHPdYRs4TomUCBSixy8XX6YA3",
  "key5": "7Mj16JF7Z6DprXL88uq8Uu7KdqzQ1uucJEKsjHoBN4AkuMZ5B22C1mLqmZH9nCVTaFanYyesaX8sNC4YVz8G27z",
  "key6": "EtLsm6SMHzTz3Yd69SXD7GUKVc1cQrohGwWdz6o9PVANsyMLR3TPJp3Y3U7kQoknQyPrZdVpS31raRA4pLZu4mg",
  "key7": "51dYbAmqgW9behx9C59n1Q69RFFE2DHNwLVTfBkuPo6ScpDsept4TTvk7Fbr3EoqhNRSdZppbtJzA69ugzRYXfba",
  "key8": "4ZxM3EN87GFKgNgdrVSanEWjtwtEd5xY769NMBn9qgC6pDb5ywQGZR83XyHcDvoJy6UwEYA49QhsGnScUaNtLVaY",
  "key9": "4td8Ud6Ut66s5kWVoZXdpNeRKGP59xh8WBzCF6Wt63ziprqY8G56So38jvC5L9F7B8U6oxDWhfUKVjAhQKp3fmUx",
  "key10": "24sic5dWYmYCd49rYVGo8eYfjzDopPBkYpqGLdgM345psH7REMs53xRFsLbZ7GNM7rQCUbNJX17Z19F41Q7PzLr9",
  "key11": "CygbsZM9SRgyzaqb79nh81yMxHbzwBaF7Fug3TK8LotzJqHPYyDCsUjpkftHLUrL8xsQp47xRZ8ov1hTTbz3Li4",
  "key12": "4ynfrRzW56utibvB1fRYJ14SwKV6ohokYwruSBxKWkRwtuTootTqL2w1kYWDGiySutyNsPStbaeYRuRYJWodK3qX",
  "key13": "3Smm6soZrj7KGAa2NzUDMoMJiSMMjNp3DHmuZVWN9XaKG6F5zcXGY3pBLyzbfJ2EUeS7TiNT664Cmv9LMWTD35V7",
  "key14": "2UwcmB1LWhNBuDTSdBEcg8Dbhq3CB66JeSWYwRgbc9M9MrNTraeTcdPbiCb7mHDUVmHAY8Jayh9FyD3f1A1mVmT2",
  "key15": "21tc88TnjTGVmJ1sF96cqvehft7eyKz9mEmNiYyorgtP3eqfmFhKuGcu2zou3uzDq8RkZgiERT79EKiFxGXKwmvP",
  "key16": "2bJwTUqJNv3fdEuipw8N3CnXkHkpPd5f7wwxgcSinbRS1ZfCmZNaTaYc2cWDaS2e4AjYh6UhQR11m3dU8yYb2i4B",
  "key17": "RiDuLeWF3ZwseGfek64P21To9GhT9LSHMQyeYrU44Yo6XnVJwxABrkczthYg5pRXZBpZJck2Be6aDixYCSh9LFC",
  "key18": "4pUiqkAJHZcyzcs8PoUFLto11ksHT3GkZbiXn4eUTYmyVQofzip69xw7WqjT5HMapT7FycBmSFHCNpogMjtsbxkr",
  "key19": "5rYSfXcL5nZVMs4GyW4mESfHTwvrPegm2sAJ2UsMe3M5gErw1HPwAiXUkBtrorUVnoQ7sNfLcKZmSHeAyf1XoDTu",
  "key20": "5RCwM2euDcPWF4q4nd8SaZSw2Wp8viL5nZgBs193fU3LP2iYrHNph3nMNea852mDjTmgw8qZYYS2QTnKob5cAq2D",
  "key21": "4gcxW5CDMvP7jeLwNj4DzT8Ajm2cSV41rz84aDMs5THhCkjzSRwisg3mz22N2oKbboEG9nxBjVoqXZBckaPiBn5A",
  "key22": "5dJkuHoEWV7au98SuX4P9iZfmNWFnEZtnqnxKLTgC6aRecaYMqnQedP2m98p9ztG7hyV3TGHTGtcohVmeiDmjk2q",
  "key23": "44VsKGdCrMkSPXnvNTMiLXX3Vcoyq3Tu7Z3W7TTK7iX7MBijmXGQDAT4agPxeWz7b8d7jdhhKiRtNzPGyxoAgz7r",
  "key24": "2MvuMDn1mqxHHp57cRbTMpcSpAYeR7v4sR1MU8p3ucXuKVm61vxHVEruMQK27Vz4AY1dY8qXsNXUjs7YrXfte1fQ",
  "key25": "4fXZMDr8x4nB8ZbVxUiHxXE7yma9V3BcgkwVteThMysCodphmX5kB3kAktNy2KsF6TgQzkw8LmvwQXtnm71MLwAe",
  "key26": "4cqaoJ17PkR2u1jqeqXtXPjcKVsetZ7CczUHn84RrvA1VNMsaLEYpqKNSb2GZt79ubxi6RVTwH4G1LVLE75NdsfM",
  "key27": "4byYEL4VKRChhkcUGkSyzAYCNcwXQDU6ABWq9iUxvSpQ5GyiXPPDFJa5g3RiCWWAE73FWjXr9CGcKaVnJRp3SqnW",
  "key28": "9e6B3SHLojHFrmwVZibuZEoGYTrBxkc6mBHSxQ2aQQLuYEDtzNdmskvuqJWEgJmCB7fKibUekVpxMgC7waTnEYy",
  "key29": "YBH3DpoHSa6TkQM1JzbAcUEGMj99SjzAEKUvMeK48z78LBo5dwND1zkXpT8Zj9fG8GQGAWaoNTfkwJWvL6yA1Zh",
  "key30": "3YbymKZfJYNfQuLpEp8wQZoYd5qEw3ExMwQGiggGfiQGUES8Rpwcm6iEL4LJukTpRANPRomVGsdHT9RdYjsCN5MD",
  "key31": "5Q1qrA3qk9CVsBSbnnag8sgqxSKbpkXZSt8M5fgqWtwjBABL1TLjvnYkHcDU8Bx7VsEEgaKWGb7vpQPtEeeHVS7J",
  "key32": "4S5B94CF3ETQ7DfZoa7E7VGzCTCmx6jVM43ztxx6p7vDYGgUqaE7faZQ7zaLRGBaMvrbmUQFMHkNXaJviinmSF6Q",
  "key33": "4NgGTCt5RxRWSNeJL8CmwRJMk9Fpo8js1244upa9h42YKnVDMSGmtPbPRDc3xLuMc8yriUfKhq7CRnd5EvGGTyQ5",
  "key34": "2ZHgsggNMhQBNdLcCf35NM3xSXS3V7NHYmR6yvcUKjQac15sAbKWtRBqtFRv8ZDyGzQ6HvrGrVfFZGFr11DeBDhf",
  "key35": "5D5HBaVQcEVtoeRpVDLoVbMxdBxJQPFhKqbQTMWqdciTwG4WTfv5zZFvmBab2n2CdRnBMez7CQkGb2Fx3moKCEHa",
  "key36": "RgunkAbSqDZzXqGe4XYM8E6fPiMFC6fWiLQNC5yy6fyCoYvsKPcX79LSFAH3MfGwH7tpjnVrZtXtSMvCGyxCDSe",
  "key37": "314bKcTi8bqYG9ocAxotwfZbk4FanF2Tm9MQ5HFbLN8vWmW2zWQJ87gDWvhe7E5TT8go4B5e77wguYtGfWhnf1cq",
  "key38": "4tim5QwX1xwMoeEJ4L9duHyiCZhcJHU3A4K3DfRjJdwMcsJ7ZxhyBxFYJypZfyKpRAiKU6sUF7Q6t2XdD7KvpfFe",
  "key39": "5x6GXa7NyMqad4iXAqNGcDUeEduXzTTJiZatDYgPKwTKE341Pg8Fn12AnCbuo5awrqqG5CjR4orD58rU38MoCt2r",
  "key40": "2dLht5pdYdCWfzBV2V6f23zV8C6uRE6vnC48p7NXkaPDdJ22tjnECTKfc7bwmAkLNkZk1osSdbg8K1eZ2ZuecwTj",
  "key41": "23CGhcsGucD5Pwbh47NmLXYNNeNcJg3m6iQJu26Bxp8ubStRes55e6DV7kDdp921DFLUcEkVRDx3WUECASVSDBiD",
  "key42": "4VioAMEBgZUS6Euik8vDfGtD2sKouUADAoo59pYGkZAp6oRbR2kjotU2idLsCePQc8RdY92dyaVVZnGcU3HTqq7k",
  "key43": "Fds15x4myMwdStS1YyJuWd7r2it1zmjsoCiuFDRBtbHLjqn7AR1Fy4dfioNjqATw1p7SEjfqUr76d1dDx7GxWzf",
  "key44": "3aJvG7WjXwfyg1Ceahdw6Y1ipnWtK2ocTbLn9gvowc6BACB8MXhCCmbXHhiWFY3T3cXUPMH7WVZPVrxi56UEGnAK",
  "key45": "4dJq52vKhyBP5G57AWi6uM98VB1Lh4zzgCZEPHByGv76ADCFLuZVps6rCBtewQTF5mmfgeqR96dghUaoS2aGYfRC",
  "key46": "5BVp4sKBFomJdypGhzB5uG3jAPqp6ZVVucU8rsgiA23gdU6SKdDgiDrBAJi8faK879sJS4SFgBDniiqu8Cyn3jb6",
  "key47": "5eE4sNfatNyh1Em2oiDwwgSxUXHt83XpTWFkUm1Y3tkArYY3PsPRo8rhWdP4Xqn87EpeamiJywKFF4qfZ91iSuCx",
  "key48": "2DxYf7pF8fk9sNUvm1s2b6axorPq8bniL6M2mGZBMMjp2GKWYZeQrasxicVNYKkFgtSaPFbwnacv2bBURBUMp6LZ"
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
