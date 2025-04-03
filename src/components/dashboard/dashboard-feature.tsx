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
    "2cjTjmbAj71LogexhAMYdRC3JrZLVzBqNuL1Uzw3DLeNtcKGry5GtCFwj48sru9qS83E7FR9jnQDu6PdbkR7L7M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAXCa8FJDog3Yk4irGFaBWWHT9LFTG37gC5ZbLYooAnQzqYAnuNaVHtYtFCYuj3fnAHMvVbeh9a1AceCDeKTy3c",
  "key1": "4BaDk6xr5qR8Hnji2mpckk4uLR6XrcfCebfYPKcG1hNmgdLoRRFJRE14xGLMPrQP8bnR5bnxGNZnvTVJuVxLjp8R",
  "key2": "4kcJ8z6SzoUEc8D5Ybt6s8iBHqSdHcJuaUjdoH9hqa94LrCmyK9Dgkk7Ss6ihLE1sXdafHu63in8sSmtevfpJWvJ",
  "key3": "3NRz6hKicNvKPEszdDvz646qer8R62bs788UZUDMir4x1QYU7tm9wMN7CruGvVWS4h2Y3pHsALuamLU1eijdYg7L",
  "key4": "2kdpUo2ANWzird59TRBU4EFk7NqJ1BUuhDgLhucNNJJZZj1MCLu9rDFdQNJU59xtbaVMidpWxsydH8yHAZZFxrPf",
  "key5": "54X379ZduLMM4j3eduwud99Uhpb4dNBNChcVy9eWiBwx3kVtfG5GeyDp3e6f1Lr75s4DPanD8SQNAN4TDHgjSXCM",
  "key6": "45GfMJvFsJcs8Y7QPpJj3RPaVAM9rK92KWiq6HTFSg8uSkYR8fAMTxGGBDk3iptv8d3bkeRPNa1BjpVsxptXNcvc",
  "key7": "2m6qGpep918heRVuvMjGH68Za3pA7SEgd5neumx7tcVjwSecrusTMzkNDPvqRGGUVY5GPAh2smKiuTxkXNJdC2rj",
  "key8": "4MZDrddiYYeX3kdVmcPdFFEAqaXY8ffLLhWsabCWt4FFr9XsDDaxdzdrwy7pKioWoAJ4KME6PxeFRiygs4iZAp5B",
  "key9": "Am2bZ53SAUDJXJaGnT7dNQUFobeQkMRS59We1N7D9RRb5FahR5UZpR11kf2ZhdauJmXNmk7G23QJCfp7Q119RDv",
  "key10": "5nUhJCzB9SRam1QBNmkn8c5KsZWiyJsr8bZ8qkEUJS6tcEjdr3vfBBwjEXQW7NbVTTMQJQTdoaJxntj9rSdKXqmU",
  "key11": "5cv53pr7Y8KUn8hLLSE2Hovnfwbud7uzpbanM81PsZDFQjnUrX5yTqQyDHV27PrKjJvK6gyVjVkKvEuaaGZSRzF3",
  "key12": "2NfAg8rfSNdpFqCBAf8Kyd6vtv5G7fxcF54BdFyVS6fNnjatac6WMw9UVmgjRzJmMeixcFFWamixYQgscYkU3chL",
  "key13": "3a4i4cqJepqXhHY1m6i8yRH1F1NjePLutGWyN4A4YZQjakr34ztRaShB1J2DpiuXUwQkooEbdF29EbETiL7fvgg7",
  "key14": "GzWGPXG9zRSAJeK9Mj8hapq8xrAnWUz5kC9SWriB7pUV8P5h16ZVTzM6vLd7jxUFjb93d7Vxcr9FbRB79Gipjb3",
  "key15": "3jQKZHrStwEPijuvzehUsXysPhi2tTLAEH1kgk5TddyBxkK8Me4g7e7QGVXDCZT8bUtKekW26BuPKvpqsR8wmKiV",
  "key16": "3rorvEmPz85GLJa3zinDFprxJqKMaHRxDzyKp5dDV6VBi3qdi67JVbMs69VxU5B7nW61DBciGZATz7EqXj9eqsDL",
  "key17": "3DTduZNCVsNrrRbm5YnsapqnN3fWVtDCHSivodnGBbT22vspEoVoABX9evp1XAmCoEKxQpSfhxsqB9RQGDyL71j1",
  "key18": "CTVR6kHREm8xbB8rmbcS6XUcZBXU9PdzrVwVHSvzXpaVBrphDQANcYtCAWATfZRKLto9EPMXp4ud4rSP6SGXtQ6",
  "key19": "2UUtHhaF8ogybnCY1f8XqCo3fiC5jqre41jRH8wWNGR9CVmNjDzJhLCr8psrAEK24jCbnCwcPQMz2ptuLP6jn31m",
  "key20": "54GLHZFEiYAMKiDMgEM2Nog96ztZoxcYTVoYkVH5gJqzreZYJGDYd8ouphrqYYUGVK9r4VEtKtxLoeUxLPed53E8",
  "key21": "5jh6hn4UMTkTKwZyq14yK3H7AE7zeLXdzHqtkhA2rdC2meoBvsHfymT515FGqiDRR24Fcn1fRHwQx3jh4tx4Jni2",
  "key22": "3Peme5P8fkUpkebCnJM38KSgvsk2uohU5CjMyDVe4AcAVW3u7caCqGRo1naXsGA7EQJURC4WdMU8ZXYeX1GbbUTo",
  "key23": "42KMCJFagT3RhyShDykLJAq8a6WShMAcWSbqTPJG5t6nxtRFWLSCg6cNZAXxU7wJ2iig9ZZEsR4bAfgvSzTfobT7",
  "key24": "5PZYYJzFiyfzqb89hMF6oFrLzc3LDKinYjGokCJGeQnjzd43K3XZQ6iis4nLAe3VRRC8yT8LX6idB21Z8mt79rCH",
  "key25": "2EJa18vinFTNDVVT5nso5DJoCaC86wd2Dzbxw4H9YVZ1zRE4XEanm2QQyWoRFKXWg34mM9CWcgRi2NnEVf3APHXc",
  "key26": "UnNQpfN6hzRHaFEyzJjgfQzirpRDHpKgAPPtvZJ7LvUHw8aVNnjrwVNLGu9YwMsnnkSXkZu2zKGM7hHFfbR96z2",
  "key27": "4Xgfv2KbLhSZQaFXmPwFbRVH69KcJ2KTYhCAFdY2LsBfNwrEiCH1Z3crERZjsZRaHHroeWuixJJhebFw9EkGS7Lt",
  "key28": "BqDtad4WFFtEGXZHMVhN3JnkUKB8zZo9Dz1CHao7B52D1uuTZuixAzNaTQCiYEQEpQK3nepjhkPAWWeRV99DihC",
  "key29": "2c7AfSrzM7kf86bGoN3KDtaHmkgxZFVqQHAsEEnPMULzxTxzZQdkJ15XNB5GPSTNZ46LWhMqcDiwhaszSCM3BVQX",
  "key30": "3saxMNFe76iEP4J1fc1h7Yd61qbBNXpmXBDFneBw6eJzyGqiRpNoxjzQCDTwzohMjBadkU5EYo1umBdSucvqydkY"
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
