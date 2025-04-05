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
    "56YsoDQ85CjNCY838zXzY5H7EeWhKfgHCRtwtCWHBeJpk66vi6MZv8pycVg5JWUV333xNS2BRfTAaabi9Yg89DAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcFUVbbe2KbGjKmfCT7p3qor2GDQjg5uRMVfFr1TBb8pt7m999trb44JdrDNfknHZDtfMqdT45bi1dBaWYrm7YS",
  "key1": "54qhCMpuET5fdcEnm87SBuKF5Qi5EXyBo8C5iJonoohyqmQkVQpQYU9jYbD7r74kZcpVHLeNvvgds58Rv9ZSg6vn",
  "key2": "3bUKb2nJtCVp37oPTmL9UGgjg1Z2KRr7rbtbRN26ktdtK7omNWXazTo6Q14DY7ND1iyCQ9ebobz2WUNvBSzSUwLG",
  "key3": "2oVTeFx8y9uUXWdm7d8bvhdsxCXLMcmXL8J2FFWhAbPChxr9j3czSQFPZDB7AoSRioVrBNfHBNupUc7kGbaU78FU",
  "key4": "4MQFLM1kuEHfS3J6iE2Wc4vuPfSSEGJ7TJNwQjLN8WtA7YXGfJyZpJXmnNTb8q4LavyqGuoLKeD4KGwPs6zD1zGn",
  "key5": "3Aq7JViW4ErNnk7xzBYaC1vBGh7pYAWoasPGX7fdTZcswEXejSBGCdLRMKzSsHtbg2fqGzqYw7oZvMcCn8wBAtFF",
  "key6": "3yHxBZrCnnoVqHf4DKx31dJDWCEHmA4fTc8SxtZHU77MJfVXLVtoVRuxPcm9h54BcJ5gbdNeUarGsFm8jdhUcMvT",
  "key7": "4DQvr6cocZe1yUrbvXqws7eR9abddS8DEhbivAGVEc1PknMn3jcrrX3Jm73fZpWC4Fh35fDZiA3cuG7WJFrXJcPh",
  "key8": "2eUPrgujp1jwXQ1VudxNdcUeALZtyzXjCNRidW7UTgTBWZqttLgsa8TBw7oMeDdWzi1yv7cFReiqwzKehhA9npoe",
  "key9": "3VoLLR44gZmujHVB7QXCu4bb6qy9Yn4eiBecLXcdsZRw3FvpMupDXBUGsdhzeNoL3hXzRDu8c8W77fdqvaqFa9p7",
  "key10": "616NWyJTNB1qA5A6vA7nbmo3zy7fr8aMN7qZZ2GNjCc8GZ3B3ZnJSUGxQynLKd72XeaLKZ9GE22ReMe9zFK6FCVT",
  "key11": "4PFZ7jE8vSLHk9TbPnFcmTehBA8vLJBDgBd74NbQo5GDemi96N9juNVXBpTAkPm9qpnsP31f5STnKRVC1S7b6y5p",
  "key12": "37QdXqWujGLDS69nqeutzrnLnuiEvCfY6JMzvgiKEG9G3F6tvfWFbpobax4PHGAUUiN7y4jvkBC6zWLbu3n7jBnS",
  "key13": "425Lg3u9F5mWD1nZrmhKESidzd1bozDnARybZwg2b2F6UrtfE4J9zzuyjypEvAKzyskZK5bFonJkPjSABRM87ixf",
  "key14": "2byVaP8CqNhEZamE9wWdvZDbPrLvVfrKJzAMJCJssf7GSN4Wq49p57UeVTEc3ks2GyuRfubGo7PzXXZd54ZNz8d4",
  "key15": "2Wa1KXrRboE3TKrJMPQHPxKhdVpbe5g6MmkyVmtTjsiJNk4zktYjUiJdYuccf3UbTZPpoSXuQoMhcwLCmnDbyC1u",
  "key16": "3Y6PMxw3f9tRJtUPeHtGvFYKQKAYVc6ktw6Amm5iqVFfKekpXnW2TPo6QeZ1dW1FeAVdTHGePRdQMXYMh7bJfTqD",
  "key17": "3shFKqgCpiz8yc2Z3kP9MNEu5VgmvJ1B72KGmoJz8w8zvGhkfWh3XfV6iZtjKvJorMXpuR2Ugc2ZGAVbePEHpntr",
  "key18": "agcQucAyos1sYB2vYrWYWGfRsy9w1ikYSBzQQkGka2RJnd8RBokq4icuK6dpML9qRjTcKGGHbdpyU746fGYyzhS",
  "key19": "3XKopVjsnthxJXVcjZs93GiXuwbTf17wpeTWXmSGThpSbxbfogxgfBHFha55utQGavFyDQQHEsAyxevYZ8PVJe69",
  "key20": "3DxA4XhpCNQ742hZC39NBjt7NSDG3wVkmEoHALkoV3fu6MNux9jR7YVw1vqXVG5N9FAd5gyN6nKxDM6i58LXmNRQ",
  "key21": "64marhZ24c4apmbGdKiSYE3BNyFdQhw9WEH2AY66KYyVJd5xJqaX2szrMHkdDSFMkQ3R1JwtFtFay8WjaeCyzgrw",
  "key22": "B6QdscHk4m17PuLQyWTg1abtqV54FQ52sANHbwbJFdbntZkwbNk3dUjmNNUQW1mszobdhsTGCH6jPUABNrxmXSV",
  "key23": "fXx4N4cNj1Yzyzn5ZsMaqPiGzFWwGDdQJVrDGd8mL4fYerhJyLU87ViZhxZr5CcbqBi13YLfHDeDvkHyVS45Uz1",
  "key24": "wzo5AZ8VJGQ5UWgCt35M6FFvEa3MKJxDC8HRbSFU8kwCs5Q2GeujNwVSJ59jXbczD2tTS2roEZNfLBoxuna5U6A",
  "key25": "2JaFQEdroLjFVfRba8Hp4xucjQFABk7wMbnaCymiE4uweKUMuBar7rENfNfkutuUZN9DtNZkCL2eJLCbqWgN2smu",
  "key26": "GsGaY9QrNRLFJUnBBfuC2fSrSQFfKE8fP2w29Dg78t2Bm9EG7kKDimGaYw8cG9HSvFW6HQw2Uj876LJYoAye4DJ",
  "key27": "3jhBTAbeyoBv1miezM2CPjjkcgjgeaFoJrQ5qfWEQhtiNBEccLZi5TRgU2WmarNqSCobvKHSjQxDBpR2P6hMEbTo",
  "key28": "5ZGaQjc2FmFtK5WxxMaAGdNjaeai7CaMciJ1j2YP7fvviT2xxEGJ2QBjgWhYGthciGpJKFY8XsLMXTfnVu5Ldsuz",
  "key29": "4t6tHrmNVwAVLZjpERn39QQhAKdZX1di8pbCH7R346hTVXtUxzvRH4inZo9KeRKFeT1Krdxcm2HkCjy6TFvdS9Fb",
  "key30": "4w5pmZgkqmxPqhGMy5GBZPmi7KnqpGe9kMxT7qdW9WdyHiouXWqiXvbekYKFyc5Vt9qtCekmsGncbBhurbwvnAP5",
  "key31": "2XbUon7B83UhKYVRT3PXZwqGaD82XHzdViNibXSuvtrd34RyMyKVS15dCdQAEF2niATMkow7Q5ocSKsqeTxiLsRs",
  "key32": "47xUkGm5yEVVnREhnFEQ3vejqS467Wteuf5cdqUZZrpEfBdPQsnaVPA4pcQJzYbszX8onfLUeZkFXrcA9emMKKE",
  "key33": "Ru2ZzReDXECah2biizGbgMKa8p7uvS5Q8UHZTDijwyNafA6vkSuNMFibCvMR3ak3d3upBCkS7JpUT4KgzLfjRmB",
  "key34": "2uSpJEiFdMhspgqTQLDPiGhFif3w5whDaBGP8bu2vQAvV7yfuUfkXnP5qq8xpDpohgYDvNgBRBcrpxDfxU5CKcV8",
  "key35": "3QJpSrrRkRXBuBEi9zEvxaVkusQvEagv9i4sj94fsSZhdVCyHRngUH5DoWhnQhBSF2BdMLvCTzqHWWmJd8pjNLVj",
  "key36": "5QDRjUkC9yD76HSDunLHNz7yKy2W6Bff78vgtgUTJxspo8eig3HyVBpqfaiMWiNMNnpR828QJ9YPp3vDHgb9oE95",
  "key37": "dkyZqbxfs7SizJsbi5cP6aju6yoQiC8Rk9cZr8oksTJ8YXyhpgGxorRiW9PLK6fqewkDNmv94KhNDn6pkqkQfET",
  "key38": "3nCaxvKqZGBTggUHttvD1KtT1Vn7rspAMVvUGWri9PDDaMSfGa5DeCz3PTMqGi1TGwCcKTFzjH6i2gN1HYRjYixA",
  "key39": "sQpvxmNTzCGyRoNiv8q57P3Tb7ogFU1TfGy23bCwjCrmuGU4kYVvxH4d7VJFrETXLNLdaJk5PUEt3avw4mGfiwt",
  "key40": "5DvjwmvN9QVAWfUPzcH7XEq4zSheJgJbLY7pmxAiUiZ4jix8oy8g8LWpP4pDAUAwxsYBbt9WrMTk5ughbhXsrBi3",
  "key41": "3NkcY8FmB1e3woqZowaZtoct8RRVDdCgucSdidmBE1Cba4bg183gaZZ4ghwjDUQUuRQxt8De7xhxRvcmdfKSuvrW",
  "key42": "2nJAaq5UsScsRXuV3comib1eY27QUKNQk4BTZCYnEmLnGKWKffRXR1AwWYupfCaVq1j7cWKC8iJe55JT8hDTZzFC",
  "key43": "KPf8CwoEMSggUJ9MyiooM7kt2c9Ar34xgar5rLaehtazFooiNCAya3r8tuKWE7J1VSeJoFr1YUbyTNvvtZ86VNY",
  "key44": "GLNBBCtWYxXwpPygrmEUjMA6iQasSvpgcnxQcG6WwbvgPKpbTmmL14iMwefsjHs6kYSmV4Ygke18m5cj5kMCFL3",
  "key45": "3Bhv8u8rP5YHxHAP2uupyvYJ8EzixH7hKbvi5vtEjchLTsQFDcrouXvH3hLNrAkMbnrYDT4wmtcrun75QDCNBtcd"
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
