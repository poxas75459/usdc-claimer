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
    "5FeN6HQffaqK2F4HazvLB2T5eutyaG1omWRmajd68fXDBTJoYTpejd6JrstEUdpUjXAuZhmKPBUM7gdf5db1CUkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUkZa8z4Fe17AYpaYcDdBHPDXFwoCkLtRnt4d9p8Czqsoub3XeSCn8secY3CsdA9ineXUkAxqrdceyi2tFXotAd",
  "key1": "RFYnzoxePWEi6Ga11qfa11HdzgTdRUQm2VNUAhKhPt6ymbyoRrfeJ9qbfmgeQomdu174F6ZVuEPuZJ1uQWL4zN9",
  "key2": "5pEi5P1vhFE47U9Yu3N3gTEgLEbUXkLb5f4ZXNNfjGz41uWJ58fySofWDiX5UveDkGuZviZCBMSatvCd1UgjMVQq",
  "key3": "EFWpaKoVg151GevNJzDuxq6hBzBBKjWKqBciJJ7dk3GZaaACgXpAUbjY2mhWkBy278joA4VTMdUoRXSTArNwuhW",
  "key4": "wR265zA7v64ksMnXnBeiycqixVPPz1JE2KPHmWEX6t6SfrKGy98UKaZuPUDucRmnXvGHPMYkLnbGeocz9zbDNue",
  "key5": "2bpX5PkxDcVuK9VM1q68bBZtNGSzwnpfVX51tr7GVhPoSkdWneFJiKNJsKa66GneAVUV3935Xi1pmbvQavDu2LSM",
  "key6": "gZryQ49KhjFs4i4rdZkcd13XeD9Xq5ue9hjQZ59LzJXp76YrAaFX8AA6mzHmXiWvDBahLZStVbwAxYehkgYaxTN",
  "key7": "2ZxwXvmEnYo2mXexhksoa83mLA2pTK27zE8sLLjorwi4B5RP4JK7ruiYdLirac2fsCKTc17UEGDyiAvXRL2qzQnt",
  "key8": "3ZcYcQiKjwmSWCqoBjqtnH7Fni813ZG3xtT4nirGRyR9ff8vX18oKyYErKiaLQqWjvi6tdbePQgwVoWLvXGHt3fP",
  "key9": "322zEK6dLy7zsbfDdk3qiJya9qc6zBxzM1VikDVgknWQdJHPV9FsPxNWQzWnsBYbxxm4kHvaB5QYrnXwwobxBFb",
  "key10": "52TBiZb5CFASHXd7AsqRAhGzosFyN9BjscoCeUS9WyMBCMLkFALxxeKsah6bCTkPwgsXmMMB2gHG2kAZwqSM5yeg",
  "key11": "3MvKQVgeFzjHugS8nizhUTvN4UUnoSc43AMA1aq7LhC4ffH65fzxadFMJ7P5sKWvbP9tJ2aQBzDKWjknMSe8kH2Q",
  "key12": "2sqSsehj9Fm7QCia4bXWxJE7tX3GzakaDaRZmjS4BRvUB8v3zhFEodMjEgAjn4ktUpny6dzGTtygZosydKXHcJCH",
  "key13": "279hDuSv14384YprSTbNjvoAASN7bVFKtcVwrTKeSU9FEXNqLksjVKL9y3TtUsVp96HXvbJsXRPY1qhZEZ1UrpQf",
  "key14": "5tZM1rRRDCmskP3rSK4Xz8yWjtc7CPYy9BtvKrS7fxAkPidjAn5V7kLvehr1qcW4yT1ZwucWjoPrLnyPP9ydwyWx",
  "key15": "bgNoaXLbazPVLZxa9ZSeAWL6CGhsRM4Wfhpb7ps9VFSGEJST9SomDZL8tapF6kWURjCmxb9reDxcKgca7apsXvc",
  "key16": "3rWWkYpbfx5E5vMjMhf4TpLdYkkkKQNYxa11S6pM18oCuGsrbuticGzYbvBSCPHw2pku9P5j1mC9vjj7sALsB57c",
  "key17": "33edu4zTYk7ypMPqkW5DLHcSKFCb5raS91AY3y3RwGQfZ1kRE2yjWseva8na3r4BMwEE289Zg6xqwFXnpa8UiY1R",
  "key18": "653WZj8EseDgV7i3rASZvJA9ucP75XTdDYdgAT5NQwwfjJUQMFvmrRexRBc6kzL2vwiFV1mNZaUWY7p4g5kNmNsk",
  "key19": "483zgAnNqPZNsDihXeGWhbVtfxXZX3545zP7Ur952a3kkRY9AwAHeBSNAAyNKzh2AsAkYWsuN9PvvbLWbPHsbRAV",
  "key20": "292fgc5QRJ5eV7HBKpf9jN8FJ5jiuRBECRYfrsBAev5znRUHJrTzESRw4LNGppkvcgXsHA2N8W8hsihJkToCrNMF",
  "key21": "dtr8jqrANpaf2LtaCpDCpm1ZRvvEXp4Xf3pE7AihGdC71Xct1Yg5hirBWvRHtHSHfXCHcQBGrdnVypqZRRqtj1i",
  "key22": "3ZiJEjgnEmw5csYbMwxJzzEAcrzT6PW8qFV3xaPVCXjEgZAr19Miqw2R9HvhrrDPuymMNQJU1NdFsQtbE5cbUcVA",
  "key23": "4Rj4TFHu7e8WrSVTf3YrwRrpmyM9QBfUr41mjaFk8nzyXAjYA3qsXwqf1JwoFtD2E1dD7yGzeWGanMP3xkomL2ms",
  "key24": "4orYkhXWTWAPWrKBhYxyGEvc59M9AcBz3ejMZaCzZHz5ew9BQAXZU4j3pPTyXB75aRnX5iBLGAGyTrGEYZiHcWrM",
  "key25": "scHy2DSRNGNtVFNNhA9R5jcAJcJ7EPcTaYzwtN1UeHCCck2ugJAGqRYfVZfA5iFaEWrFxp41W7eZmhMAG3mVxkK",
  "key26": "22kuGvstutgHsmqFmt5tTgMkcJpkoic1ZLwBKWjXX18YqCcb3aRuwM11k4mDoyQCfbqQTMx68PSYSD9rraUybbnm",
  "key27": "2Ak72BxtHz5ZA2xFmSVxnKJb4gvZYPDxqB73PqNwUnrDnUEGB7oEFRU9Aeonc6mGZwBWxrYtbSzuUPFtaGAdWngs",
  "key28": "7aMws7cBrdiqR9QMMEJsxaem659munus4tTBSM5nCtBQTUW2dFMSUfPbc31vTYm9wyVYSFAitQrv3MQ4frCUy4M",
  "key29": "46JEzg9Yp1u7ye7g6TxtQxHjb7CaoBkvc1EVB4j8QFKzGyxscdZ4b4qJfoDA4X3WUpfjbJ25cr5J72ctQXFkGVXB",
  "key30": "519v4p3pvRtxXdJKh7VVWHdN36cyvMTcnwwnEABNXTMiKiP3FhG6Zggwrfj5DSvSj8DR7ozX79mWfxhPMxYz3FUt",
  "key31": "671A3dWFzYmjdJvttZ9H1CiZpGwyNn1423edjJZtDEkSXaZgFinDggGj55QEdyhX7sDPdHyDndBBsidxScEPh3cM",
  "key32": "r6iqdvCn9HjyLYxwtBK2ctvKJizrLYELvMpAfSTkx4BWszKyk4HChnFGy7HfFcLyrk79aoQ9tzKUCgqE4NnbCax",
  "key33": "4EkfBdfoyAmSQikZKKc9TneWCUhu3s6nQvpNqjNdsxyPAJ6w6kwAFVYqxz61NJgYnwL25bQYuwAT4aawMiaSACTN",
  "key34": "4rX8cnmoMgxg9rVLTQbmnpTPLNfrVEDiAiS6qeDCVvYTUU261Xy9XTYCSjKZX1jadMaQu53pxSKQBqJ8XYdAph57",
  "key35": "5ecdAAUGoj7GThT8Sku5N61B2G28fV6C1am1HsDiBax7Rs39eVBjrrfAYnwjwccRmgGgT4joMmLAkjSMJ18BZ45R",
  "key36": "4GnhvqZitwHq8gVrTDY7ekeKmCvKT6oPHxoJag85WUkpDvxWJbtm7rLDg5JXTCrZKQfAFLyjQoGt4JMr2wUN7Gvy",
  "key37": "3ABSvf86P89F7W1hVMoayWG8LKmfHQtGMzcodWGkyJhpBUEv8suaEy7Bw88X9fsWnCEVaAS8zE6oGDSsDaTcvQHZ",
  "key38": "E5SEKNGgNe6MV1sCzr9tRffKMq5rWH7cvVNWWkJ9MgTobDugbTiXTfyyoMGz4NULefDbV4beMu94D4FesfaGA3q",
  "key39": "5c2XZmfAtsMSwSFHVp3MEHoHqgEhdhpTQoJvZP8NUnEzJtig3PumaKBrjScrR6EWSwSbKsP6c2hi1LjKLhFfUHtP",
  "key40": "4JmzA3ednzfFByp7CHnj3mr9ZmPmN7FkC7SBr7Pe8EpydVcGve9ySW9XGnjMWP35dyVdeVFzRBCuBMjhixwes3ye"
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
