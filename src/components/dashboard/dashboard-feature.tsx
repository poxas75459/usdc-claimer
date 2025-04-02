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
    "3CTjtqDcsNMasTpW24ht4BeCCb7Mxp6HTHDmxmiTMQgYcAVwLAG7VwKBi8WkMNNUYBAfAWamHXHgzCSxMzBTSRsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEVe4hwtLZDXafBbSq57LpZaHskf827ZXqsUj1d7wZVN8pcrWxcwEh1pPLw5UEUcFd43AbgzhHK2Hwj9pnHZ88d",
  "key1": "5ujuuoe8uYTpFN1WKbA7fnPJNGAsxJmD48tLcemehnTeCBERp7zY9XSs8iLht7Wf9H9uBJp9c8MvoNowXyd7T8sA",
  "key2": "2avSqA1LaxS882MACJHP9EP78Vr9ZmN6xMBYGQw45KcpreBHhNVD7R5RaVcoRnnddT6V9Zve6UmV5DtTAN6M5tx6",
  "key3": "5bu5hYTFAQmKV7RU6hdi6j4PShmf8NcRYmhdEGhmYeLs8nyVsKroMGpfXCEATa93CFdA4wfmnh6XeHQViT2WPxG8",
  "key4": "2u3UfQauxW6968JRoqVanSrwnLpsoiVXv7fSeg6QR3yiAFh7y63QVNU8nZ5AAJeHwue1o6pSVWcdKnWqaPqbikkc",
  "key5": "5nMC51rRr5wseemDRmqjieHWW9L27jYptP58eLsbtGfqZxYZY29MUrvZ27bZ9Q1ugfFnbvi9nAPUFe2m6R7DTo38",
  "key6": "4f6gGB7Wq2Lq5iLNnnkqw8g3ZBu9fGkheriwDW8Tm9Sr2rs5shMKKsxcaQ73FYtKe1o7HCrLMPjYYGWRT2Rqb5hT",
  "key7": "64sZYANguFXm9CxrQCyWkChMFcuyWxF6EoQfatALu1WpUSgSTtfMV5EPXWLBbUdd6CPcjtv3J7i2YdUCXGKTKQmB",
  "key8": "5tTNNEATh7AH6x8smqLsCxxkdkGVPNwPVTxY7vhTqvUh23Qbys64sFCCBTsEosPDo5373YCVzvk4EkK6JTJEMdz2",
  "key9": "2mkMMqdCxPL1GULdiEidmCGG97pZnjhsE3yUoWW9s9CZDXf9xGE5P1JtrpZYcCkrhsNikdXTAMo62ZqL5X4gyNKy",
  "key10": "248HakD2erjREkbFm4UzUHg31EvNXBn4P15LLRTBjG2xJLj3nmasfggPZKQbK9NigctpCgUVxVXrNNW4m1GAhSwv",
  "key11": "4YiYaaPHR19MRTgpLma25Awz1juDXxazAKLBFx5aV41EvtnNQkAusGCz84sPmY99bxRK5g8ZKnewZtvATP5eeCc2",
  "key12": "5uJn9McfLsMkFAkWZ2PoG6KS3Hu3F9hr7DigfmhxfpXCizbF94i8t57vJzutXpJky7BEsJZogF67r6r5CRCMv1ii",
  "key13": "4KB5y2p1rKmvp2cUWenWLZYdC3ZAD4VYeTnduL79WheegGBpoPoLTjMKmWsnVpRZXVr5mEc6K8QrpWVCzbBMat4b",
  "key14": "4Mg1r6K8cNJpEa6HoGC7jiizmALzkChLCrmVqTBmhjiBTF9TkG7L6qjPJJuf2DsuYLuzTaG3XDVP5XnVreRGgqnY",
  "key15": "62KM5n9dPj4hbwAvbb2A7qfZcA8A7oADSK7JJJtdESDqFsBs8mb8YamPpBQWhy54WD7SKRFKkWb49C3zRRDt9qy2",
  "key16": "26j5xeKk6fiWBQjZLGj6e8uztdbqVyjgNo15ki432U4sJeKorsZjSDFeCNp13RKDXH47Fkzyk5E15xBtWbR3U9mN",
  "key17": "36asUxGBPihANCGtFh62UKKoKpKSM5ZqD2vC5aawQwaeD7PjeYdMsMurj6wiyhdRsKZQ6URu2J6C7BmdepmVFgra",
  "key18": "4KNHZZD6Mb3dNqimuUjzCjGJSjpZHkenEqdAg78fp5HLmr5uaLQeBAhmc8D1hz9hGcadhE3h1tA8WhoqU3TSMqx2",
  "key19": "5nAhQ7Whi7geNLvNqnhjiMroFFneXYFQzr2uLuQxGoi7H4cs2Dxf2v1NeftXEWtJDfGNg32Nf6j5ux5gWhGJ5a3d",
  "key20": "Bo3Bd9a5zn126M16yCwDPde8rGgpnwwDkLVr1edcpGDmBZp5vfM3dcQJEA1gVzkTBVUbKwFyRv4ykUZQoUsgMcj",
  "key21": "5izKK7vvcheVUiThNHtoSySz8TwtD29vuE7a9DsU7xBhB2xHoDz9bkHNYwzqHhBPP8dEDsevPeHuaNoSMGU7173Z",
  "key22": "2YZa4PCigtzX2WzksK5jpQ6W9Gao3kvQKLfxL6cPApCmHBKfWLyyVBQHUjG4gbsKgU2a17rKX9ZXLHLmJLf3WnkE",
  "key23": "3hEt8E6tLrfw5pbeqmzskNCwxReCkpcCUqFsm6PRLA3d14mtS6mHK2AvyZEywGPPjHkVNNW7ChsjUw7FWVxtAewj",
  "key24": "5Sq7MxGPPQDHg4F934hXpkT2TJueDPVqYFcSx6UW94ihKCvJAHiYuNma6bx9wZ7oMG9c5VzLUJvrv27Q946E4gpW",
  "key25": "otwtGiWvUeiq66GvhTdEvUTECKULNMGP8qMqh4udmkhYeHKMfmxvxP6bvoBn8u9MFkMe9C48t7diAKfhtBrK7Tw",
  "key26": "4BaKhP3vCNeN7wa1Q3TArj5UgR5L9vsT3kF8zxvHjtUDCquMqKjWVo2QLuf7myPoffXE8jLhEx6rrF4SrAiqtpRF",
  "key27": "2maFVTWLgUJJxGKPPZXiyFz1HHeh7sqAMjvtqpFScPtd1d4HGqsin2jZ9h5CPQDybp4Y9i3h9bm25BVRai6pvQVf",
  "key28": "2ThRqkba5hk6vjGTBLzoJ7keGM3eagidK4jtydmbG1KcZwmMJu5vB163SXqo31pGgarkM4Ynz7QW3tzniXmm34Ma",
  "key29": "5SWNCaTd1KUgQF6QhZEj7EryKW9WYQ8owh62S1jw85QWCaYAhtSc2f6xVx1EwUnu4uW93ra2KwnG9hiBK4kCRfFU",
  "key30": "2HHa9KPAJE1Fu3DTdi7nkSXjCVv8E8exM5zzFHWNJ6era4ba2yH9cxGJwgDwEjdjbjm3QJEVcC2sPpgp2Xqpr7kv",
  "key31": "nKPawj3Ghd3XAuexdQGf6SLHQczphttZaeaYoeGjt5W8L3w4gNomiqzkvRVbEFA1kSpLLtcYJ5DoUqUBSdFRydS",
  "key32": "43q4drEZe7qNP7EispGi3nt1jGHpX1FFXaf7nw5T5r3PfRS17gwjFtL6hwLaKZXWZeapgPnKcCmHi3yBtcMnn5Q8",
  "key33": "5BEFQotP7h3717meZJNEbVAUPDMcQ6YJPhxXa53EP4rAsaqb5ArWuSPgtRB73569zb71CzwbjdgRnJWUhEpHNQmW",
  "key34": "tzmJnMvTsBukggH3uFvkDUF9ockVZ2qLcwNU7wihJaYcPonimX7FmPNaVxhHNY2A18sKJje141C9A7cnTtRy7Xy",
  "key35": "i95iuGAS5QyTZDzxHdmTEsADC5dVsUdDjwJ3W3cM6a4AxjAvJ4tPym5XWCiU2Y4B1VrRfX1D4pJ1WM9QUqwEJ6V",
  "key36": "2Z7vLazJeDxaTaLu9x6Q4efzQPnefjiwjRWHQU4dhc17jdMvHXswmginQg5EgMP4mybUdGECsNjssXbQ2EeUHPKV",
  "key37": "2UjSPKrcEsKurLswJ9uMinJkg3iXhFPQ21ShedvwDWQqS86bRRJ471Mqch7a3AauRi6drYNJsKhY1eKyM3RFoz7A",
  "key38": "4a5HWAEjqEbrnrBaCdg5Tf7Syn8b4mgK7RMzHGs4CWK5vgtytTVNzkikDFqfEbJWuicnwq9ZK6Z1iwdpFsVeXzBg",
  "key39": "5k9oMrHCUVtLTQGbLhzrKuH5ZhctUBNTKYyiFVjQo5mt2Ny4eQ2HAicaPodyJCKi4eop1E5s4iFeZZyKDMfm3rMX",
  "key40": "2aK3aDe8ZSQWsxBAeMTtH8SsrTjdo1NDWMmP7UghEXEjUxeEKGArzmugAsCDKqcjyKdWjzgncgPmjVtpN7VZ9hg",
  "key41": "HYR9nm4SWrNEVf6no4z2DLRq8bCWrgiZteEJ3BMRy5q6ftXUG2uad1mKMEPuY5tXRznfCATYDnNXEd61w6XE62b",
  "key42": "4SpwVEe8LYvEn9wvMMHMz1LuRHF961ejiarkpeyx8XESrNkRZUJNmJZUxWQdRq5uSehbrTQ4gNtqAbErxAXZL1C8"
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
