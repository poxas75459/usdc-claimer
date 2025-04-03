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
    "2iXtDDKbAwXUATNrnSkYMvCwtmbKWogGykeJ89xb1XH2oB6BoYZgHkqXyqeVDGTidDu3GL8KtZpXDQVhuvnFKtTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prCJ4oMK7jEHXpVCo3KQfemdA9yk6CA4KuDQs165358aHYxhMcktFJT4X8dBfiHw27HLSDuPeURrB5FopoYy28h",
  "key1": "4zQYf3bwxQuY1tcC1PR3LdivQdtusWAs9My7L6o3BiNa3MXSQEoVAsiz9wpuNWujShcc79gweqYsDVxQkbdAbasF",
  "key2": "39NHiRBHSbFmzdE2B24hSQHrddx4KtDSFvesE3u5HPWX6KDsUboFK6QjT9xV3pFN7p5TgTxSeiuvxTXQvbnQsrCn",
  "key3": "4anw12AosQMNRw2PBP54k9D2bqHarJkwzFM8Dswa66r15zUMBwmuCEKo6Gz2MgMsojmLghuYPQr1JdDVLb4mWbyN",
  "key4": "3cHwe7SbEEzZerC8VxMSjfeuKDY2guyMKM4dFbzAp4NEiPBdjtbZbCrZ41a7U4hiy5eLocdQihMuv6LpZui5Ks4y",
  "key5": "4pEehWaxXGo8K81Auf2sK4SPg333bnBUcKNjGXwKeM5mrxp94Et3zUMr4XP1jPCERSRFKHQkut6a4AnpneiDJxE7",
  "key6": "3GhbpuS3D2cLXE4Hf9Q39RK3Bn75t3kiZEdQtvTS9YUbBpGctyBAg38TaDBv6gdQ4d9fkjr54Z85v8yhe9xjN3bd",
  "key7": "22VbAD42MMYUQsL2xRbm9tPfajVYNkUzG8CnbBaJRDNTr8B1rT5LxLrpa81dnizYUwB8APcq2QWMry5jRgGoEqXk",
  "key8": "CJ9vQPyCKbXj6FMQMeiZ4ZS5kKH45cT9f8gMpPumEPTj9FwHyH7LbiHfCAoC1z9WXYbqP6QCmjASKsRHMtYSurF",
  "key9": "41w6XS5JoYHNsyXKZJHGpRYGPC5VKL7FcZAhM4ssFL8dUArqkRY476RXPoQxvBgzE6ntPUzbCNGKoyzKPGh963wJ",
  "key10": "32S3JYNGWUxHkM3cLTz1rHhH9ZmuYiGj4amcg8Y84crxxHdApabZcC1vWkKaxRtF2wWBcjztvUjQKAKmka5Mx3BD",
  "key11": "4GVnjCerQio9MvyWx9e5jUq88fFJ5LAKvoLwuoSSesVgspMbPgU8RYQknhuZeZMdb14urJtgF9znwP7MAbfMQYZZ",
  "key12": "3crbYowNHRa8UyKx5enxrxLGSPxgVX3yaSjFUL85dtY4NPB9oQJQc4PeLbaAFfe2XEpcLVN2ZHHvWRsAKw6ujZe6",
  "key13": "jvGN5a3HFStYAzwT3fSqgRDbkFeHUV1TL12otkXRHKLhpUEpJUz37HQkKEkRRZXaPQRb1beJGR9n8ndmcALiCHL",
  "key14": "BL9PGD8cU5GerryGJ1JKWU1NiHKa8oaAfBqNt8RtYjiJjRQCoJ7FaYww1Gq3RFCbScSQEX5iLg6aiatA8wZS4jN",
  "key15": "3TCmEYSdfL9AhhphktLuFRorzpKT1N5R3rbX3L4AZmgykgogkwsBE2uAqQnyaDnNrjXWYRMN16fPzWYCMHpEQBHG",
  "key16": "4kEUaawKEMEA4T7Nxk5KQDyzBvFUgr3zf9MnWgRYPC1H7Ck7gnRL6d1EpYBxMeZJZer41ubJBS5PEGMNyqh3jASr",
  "key17": "5KPfkYetzPnvpjAN7kJ4EXbawhVwKqoNXcfXvMh9c2ztamMZfJXbFKXQqpCSrTcF1N9WesEDFxYnVNvxi6UTPHaJ",
  "key18": "3Yady1be95Z6WCXbHKJ9vsknpECjnjdWkqyrYQE1VoNBzaCcPW3F3w3Z1VC937QLwb26Hh2wRF8XaUFsqi9jzUpE",
  "key19": "5cDgspdqrf5u1nU5XGKTsTTyFZf8ETwK4jhBMFK1yFpzTq1PotxgTLM372UJjaJ8naAuuWuWkdknbNqd3f8Yez6V",
  "key20": "61PnWWSW6X2NmH5xFStuxzo5Z7FoRWQpTTknWVDbG5o6jKrpZ2iadtSKhs2J6FKkfJ3RU68AHuPQLLnEUBxoe2fX",
  "key21": "2bKhTy2DKWh7k1KxVHo36wdx3NzY2UeeyqAN8QYqxnamxM7NMrRQd5h349tN9ZvUr4ohhmGXhABpcsFiTZ61amai",
  "key22": "2QPetb2gWxvx332mQSCFszpHjnY3rtJ3HWvUGB21DexDL3HRJhsGBrWkPV16fApzAq9dnuuRuXCVuNhtwt3ksSnN",
  "key23": "UTp83DJ81QoyEbXmCtZRTVxVYWesr7od8fS7Lzqv3vYg6UuVLkDJfyFtnJT8nE6piCCndRZb7hGmYRm2shyyp4y",
  "key24": "4UdePM6YBXrdFphQ1Z8oKcxpJnsp8yaM7PWaBbu2jW8DtAzXaDry1KVreuSueHkbpj1jFZ7UrAqZfFbWJ79tmmLU",
  "key25": "3xBVaNP4oF8Tg8cibtLc8Lg9LMPvKGAkxSYgfPnceaQXFhjk9z1aobWLqdgDysGQqEKJSCiC9RmszMN1D52RSUc7",
  "key26": "3FP8rtYFrmTrnVSToaVGp26UQn3mTUzex6Eaw6epzGdxzHFZSXmfN1JmvLgnPF3kQDbsTTG8jxbWHTv8AodjQSpv",
  "key27": "3b6mgVbQoGohYAhwq694TmP8ozPZ4CZvSkFgMbFzyHqwjQdmPLnJ9TJxt5Bbba9XosGUkXom95BrP9g2YNzSEN7j",
  "key28": "qbR4ohcqZYYz8y43MWSLTUbfn9udDPfS1bxvC6koWY5g3Y4VPk4nfSXLBuwX1p1sb8uR14XR1PCa1XufbpWVnCY",
  "key29": "kXxphetxGEG35i2QetrubWcXGLrb5u3dCpBUPgHX9fYjpG9JmseSqivLR7Phof7gYnxBEt14YBy5ypiTFjCLKQw",
  "key30": "2otNwQuAVRW6y9KDWD772t9WLuzZbsZmJWqkZ6WKgYp4A2zTutkBiiP1JS4HyjVuzTUBXEMqrti3xc4Bqz4LpYZM",
  "key31": "3m57Gtc2fGNHuoBzRHQ3d224Gx7k4YCxrfWk53xqcN7yMbmf7Y9jSqGMxftSo1jCQG3GwvojT62R1G1eRPh3NGG2",
  "key32": "2wnbVZnxLFLXx4CfDSEDWVteZxRkwRMFZCVkyuoDnaGpYfw5dKfFBYmMwBaRroUivn5YF8ZGKCLShznz347mUwcE",
  "key33": "4bjDi7KaehsHebBf797yJZxoQKngzFHDaSFbADWXk4vUcMwF62WCiNd1YpEMEak46ALKWG8BjEDFjFYAmQs8xhxU",
  "key34": "3shU63A6ucXx17PyFGQBeP6dEWrTDB8sknWDCLzq2XkVZpciMhbRR6FpYZ68YUSwtroCcrQKPQrx4KXziCRiCSx3",
  "key35": "5HgCeTPNtvEEB1YzQwCL5PCbzxx6HYMxyEq9peAqYn2v4PHSr5dkCCpNftnrKfzBZEnXHb2bxTq3UXR8yFAwWtXi",
  "key36": "2WYtj1UsE2rynsAgrRUZ5gcK5CQeReSqhJPNcrwRiQQm6WgVgGTzAN6jXgDxuoGCFzfed6zpUPYch4hM2Np5jGUF",
  "key37": "AgT83iCLQs99dvhwikR8ms2v96CpGRGc1doX3RaSE8W13pfUr6YtfCLtAL97aPby5RuvmGZLieEsGwfVwLoCAZ4",
  "key38": "63fyL6t2FhHaX9CDw3sup8qmXr24y1K8T2GVMdeRgoHgToevPDXj2ZobvvXT9mmKbPVB3Asg9ZoZ1m9aQeL8Epic",
  "key39": "4MSSJwn8pbw6hNrN1oY2JHtyUESooiD4Fae6kknRdHa6LKN294iZSU6smz7BbYtKu7KSY9t2et3b3gV5FndfQpNg",
  "key40": "5krEsmF85GYfuAkuLwAR6GpT3y3sk2gYTCGdnPypd6G7Qu7ioDjVATJSATHcYVj9ir53TFYaMXyLNh4vtUsdpmYE",
  "key41": "JsqCySEFVKfbzHKkDY2oxHV1AspqiQxocZXTnoZLkSdbVybK15n3Hs9NkYon8RWfCU1sAqCeqYxK1B5CPmUk3Lz",
  "key42": "273zLSRXxYEm7mrqNcfyp2yv8jJwiwDVP6niSG7dELUeMh6mypZP4dPEyS1gi8b7KGWT4XEWkh2Y2XQ4t4ddqycc",
  "key43": "2r62i1g5phi2SLD4E8SHH9iafCtkqGpo2SyYXfSAxZ1CpYzsFWXQ5oxycu7WJqHA6xcaFDEWA9nZZDyXF71itURH"
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
