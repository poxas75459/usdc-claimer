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
    "4ezS7CaY44iSD8dbE1dzqr7v5e99T4dQufrC4Ro7Bj9ToCFxZwSWGooShaQ6fDL5SYLXwMVwJajXrHyAfWn2APQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxKywpxm4aTv3LU2Ubgbb6okZuByWLqbDjDSVnm1FxrZbvgsn5jsYLSLKCMqnSbt6CXcBWgLjRAueiPxbEHHZe2",
  "key1": "ir7MyEp7fehbfo7eCfJw4nFEEnHxmTgnhY8xhJq7RCu5xLCkVQCmoHwdZakKXvLG7o7mPhQfArj7KGYLq1jkAbx",
  "key2": "c9wxhBm63Muewx7qt7hteFTCNakM1yhiCTRnfLS4BaQdQfBhcueHfGjwTXGZrHvpGauvVGNohKWY7PjbY5s6f2X",
  "key3": "2WXgprvaiSHpLCYeaF4StLNfHJrqsQjUQB7B7ikLi5MjvXzPPz51GcBs5FLkEq3vsVAa3xvinguHveyyVmRKtmwS",
  "key4": "4xanrehsXGDXGDfiZg5Y4HcrWfFwpER8TfenePWebcMnzCVMXRaaC4HiDjfT6sXiHphuXoDRdFUUb4cPXunx5zC9",
  "key5": "26BmvcdGiMEs2Lqho6M42vyvrxaW1qrM3obfY9rDY4MC5XCFQmntERiKm7UauckNYsYLmySZXPJB3Bb4KzbgDFRo",
  "key6": "5FhJpp1CkiL3WRQ97mMXyyXZRsRjKhW9eeQbzkP8tEm8XVKfLJ43vFZZ8KJPcg85U3h5iN3RLtTyDHBddTxyiMye",
  "key7": "5auGDBHfmnaQCsp6yEXFYUhgVRcf2xDtz8rxT4GYKKDsLoejwQZcXAtuBXMLPrrt8YMAV3kzuXPQR8AV9xUvbyUf",
  "key8": "4hxqPh33KTqRHWUEgkzNCGR8XbuoFW7nXPaqWXQZcLDr46ZEQQgMz4dusWx6ww2wiHAjvUCEE3J4sPygV41VLwTv",
  "key9": "TkLryqbgDvFse5LiJuJGHMAbhVKnRXLiQCAeQ21gCc8jPF2XDFhiVq5JFUivBYPnUfwS3LTDkBUKWQcFG2tSduL",
  "key10": "5nyecJzy8eToZ5PNLTN8dNJZJ1WwJBos38DyMHezVbBB7VQd22aPoRmiZ534Xz7SoBNUy2fRc7yEdpSqNynVUgp7",
  "key11": "4RQ1K3D1TW2zK7y1mYfR3zuErVevL24cVnb2Mo5wGbvejNB7ERvqFF1gYN4anbnDuz6FbGqoauZGG8NU5ymuf5Xw",
  "key12": "3K5noCrJ9uyrNUDDUFfBLWn1MFbAC2JDScnVmVv1qd5Xr16pbq18CzuKSF4mqwoNvECdom63xBuLGombRftz3yHv",
  "key13": "2U9uRQGKNBTepHCSaN4WfQ2E6dhAoVcGGiwfEWNYNXzindRGxcnY9ZNJt5B57kXPVWC2BoBNAtD5tm1nRHG2JFWq",
  "key14": "3oxDoBDQ4o4rKiCPkXMRJDxvQUQVtaJGfmi2M9houfsszgPtw9TuoTsuz9VisZaPzDcDG55e7yZ3M6FnTiwBYmna",
  "key15": "3zpc7eRjnudd44sEsXUpyTh7ivS2zM4jiJrANRKtemygbWZQG3bzdxxokJvgoHqaRUgcjNRbGBgTBqkAWQKPiihC",
  "key16": "L1cnq3J13sDCJYdYw8rnJBzAzZ1aGTZzDP636HCUYBPnZeG7D4MRAMs9jepCVGwbv8pwsW3bPBHE6UStBnYxzDx",
  "key17": "5NSvEKHEtiU1fXX4BZkL7ei5W4xyGpHP22t5H88PbzufcfYvQD2xx7tURJx5vSksmTyG7p3ggK2uwkDDs39eS8cH",
  "key18": "3Girht1znWxcaDfMR8wtjKMa3iG4sVCRDDRHu8CW7tsb8jZToPpUFxY6ia4L5HykkLXSTEgx3obC221DZHeQTG6Q",
  "key19": "514eSkxagSkvNmSFZLtWfMEBMd53aAKvAqdbupxFGSjrnHSpTh4iYeptPkxzWwhkwhyigvWvZEn6RxLf6m8ocLww",
  "key20": "37hkCmiKQGgMvF8yxF4m5v3vfVPjKBA9DEhJBURrzpgnXsF4EiLPgVAzxJYr23jAQ2M3EjddbuWZekV48uEWW1KJ",
  "key21": "5E3vaMYjwaaeCvVZXSJUNsvbWihQuw7XJmaCcXcLVB9fDWcR5QpryKYSb15STvDeX8zdB75WSzBbz9kfDwEEBdRq",
  "key22": "4zhzN993qHV6GpuRCWLdaUKkUVysnR8xcZrFrP9YNbarroeLDExnw51di9m7GrKigEnrBXM4NwHwx2EUMKq7tHGT",
  "key23": "xvRfsf5E6Md3FLC2sie8qaSa8h5wPkmgVhdUNG8LtHHLyqa9N1UKKqEnbvHraZh2H1Nf9LHjZbDXsckUaqA8Bii",
  "key24": "8Xf6q1f9WhwBpthSfxf6Mg2UBVoCtmd37mxbh74qpNe5MGsV59cgJGXVydqX3uXKJAxygXbVuA56jdogoaAJP7D",
  "key25": "Sye29A6oyXfMKxaB6Ac2Bpeb3vh9NZuhUcvsHFevDBvvf5DrN2xfKvf8SaeVLDtXtzR6VoLk3s3YvyDHm9yyK9g",
  "key26": "45SDHPvZJpz4fzmeVAW65c6QV2MKMpc74NNZUeUiPxYrruxGSNaaWQcbN2vn8v8Dz3GTc8pkJTZPYgygUk5Hfetp",
  "key27": "3HvmXHKSkMkRhwfdiSPXfuJhbFv5X1z3nxwW3t4Y7jLLLfYk4XC5Lzxm8ntNbiU8tnjit3aCuFfP2YrpZLFrV7yN",
  "key28": "4cE8FHbCLdDps8Xi1iYTnHydCPJ2zQW1EeX3Hrn5KFT7aY9iRBJh8PapVCtAdhk2bxBu8LJhvLqyFMWJAUZFVQZ3",
  "key29": "32TSoYV1rTzVnLKEeFMwtR53LhLB9XFoPoyjW4BGsGDSfiE7wJ9wiMoi4BWYBzJvXeTabKQb9rARAZGPatPEoTs3",
  "key30": "QLc8bSTthi9m8bEbHdxmsAQ6FX3DXuCUsRFREjkaWgW3FDWyDezcbGQRNi47yc8Z8wvGhPLG7tnK3QCGE7MX923",
  "key31": "3sPUYftykRnMKWiBqUz75rbUCgD4QrX9Erwm1HuMiEffh1qkNazWWXEVs4x94eStzupKbMFSvViMjinZfdLJpp86",
  "key32": "2DYNbvkJY8m6axMw11isheEU3JJSb5uqtB2m51YFPwtypMLcpcbyZLpmfUnSrBT2E3Q8KDutZtg41sEHdP1k2i6u",
  "key33": "55LY8Ax6XGxCo6vpTamf7Qjsrcj6Q6sgo2YycnP4g7PeTqnzQtwiqCLiaBaTgjiYQBhZwFEGKuHJ4k5VLmqLuXfL",
  "key34": "4Av3bTuCAzjEnZ6bBGSDvLsPYkifGANQVP1B7m1G17yDaAJHEz4mfMNV87v9m9AX7GyhoRVp8sEZBGi3vDAnMAUc",
  "key35": "2UqRkgfRdwkbRQXTusXBdPuRodwNMJsZyNK7wcAtxQPKK4fjX71bzwTUH5GHJ9LXB7DSquvyk3R9XMPyreW1Li9V",
  "key36": "586n5FX2wQqsuwN8Umn4KhXhPuZG45nQbK63YA2guf3dL4CRNrwA4UAnGz76pFJkwzHtqHy7xhh1CmZh4NCjRAMi",
  "key37": "3smL9mbjGKMACjWBx517hpTosemiSe8JcYRsEZN6C9PZUVffBPMzci8oKVs74Um2LCFRyHVZQSzZqjgnq49Wgt7i",
  "key38": "5AXXBC1hLPKssTDKdkJAXq2CjTP9f6ihwsDD19p8cGfcJVG7oHGQgNbjkbkzV9LXQfCb4iKQXpXGnvjJUv861ZEa",
  "key39": "2ZSeKVc8Y7N843x1vYdV2mqi6F1UufhHkBvQA1BQDCo97VduZqq1fyF2FmGRvYWLam6wdPCXrwfJUFfMyC6CFxjY"
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
