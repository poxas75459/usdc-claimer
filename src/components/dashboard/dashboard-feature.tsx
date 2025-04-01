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
    "3VySpnBtyizwDbvEvkR8uCWrJGq4td3yy7DbYd3WPUTjREiHDpmmj2ekwi99cNTTwszgh59GuBjHUvo3fBHTsuEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dbM1PWB5SGW27fu2EoVJpBwQwASyLNGu6W4gdLdCaq6BmzkfwSsi7XgaCjWTiQAqtXPGNvDQr4uENzbpaiS24k",
  "key1": "61D3k9ZuNm4pYNhFyyou2KApkQ9rAthZq57b4DHnZUqL8QfSoLhupyGxYSih16on2vRagcpCDefW7idudXC2cQPD",
  "key2": "843UE2hrY8MtLE9bnVahTSnuYCo5Rdm8sUGNgfdJ2GE8a6LSmPFkYiZNMoya4PNx65Ct6xGFjnn69cmHdgqQLPg",
  "key3": "VSbU41AF7EaH4PttFNLktPHoysFBNkdc5idUmVDAYnrvp9yJ13CWo15Vm39EPygFSMs39jixBgyMrQR2zSKLNkr",
  "key4": "3S8eYhihDiJsAckAjMBsZUwnZt4PFfyG7wAbx14QCNx554NqJ3NChrEw3kUuwwmtLhVaWepk5kbVQLyiXw2duE9j",
  "key5": "TGCq3rs6QbajFe8cySnw8SofKcLNQiaXP3HaajSF3VTYfjGdhGJ3mdoYadHLCeWRJA4bt7ttTqSZaAn7bLSuHnM",
  "key6": "4czzY4NZtevoCudAnj7jAQKS4xKaaFu1AjAurTuHJXJCD2dxhWhiK3iHotdvZt5y8NY6LRNu8nfV51WRbNtxiCHp",
  "key7": "FCVA5rWSvJ2sP45kakynD5cD78kbNFXVwBAXs4z5UEPYBgifRYhz7KPnLg4bjyY5GpmvGcYtyMASiL8wwkUhp3R",
  "key8": "618BpRrXfjDRT8ms3NdNZcJfP8s3tJtsRGyvmmAm2Y4ewkZkTffaze5bUQjveX1AwEg5JbnZ4bQGruoUh57GZi7z",
  "key9": "3a6EC6rhXZPvaTe3Ct7VYudec6ytWkueEUHvYfVs9denTUa93hZxrW1ZzXChGEvtrkhWqVqFq9jCjZNafmE8Fj1a",
  "key10": "5xUn9bAxX9SYV6MznysnTRC3YjBKHGFEsrLPhDdeBPype6ibwTnqYypYt7gHdVcJ5hwi5BKHZVwsFGmjHQaNLJdm",
  "key11": "62WH2CZMPuccUqyU2BtApL9aSzW5brCCsSvJSpDWYM54D37nNmKq8GUi6J23D9e8SCkm2TJ7jyWehTgzfMCUjer",
  "key12": "3tJvfaBNTH8iA2Fd767Yk9x1oYkwFFkGzkheZnTEXrjVNVKHjj9gec6gWnFT1NwEnHbaosu3EZUShzRSdH5sCszK",
  "key13": "36vRkzDwmXcgE7bukqN2BqdQNo15Nbc61fdJq2z1FHdr2mUgGNjcucDmjRGbj5iPNP6o9TQY7UWV1XsML9cmxdDs",
  "key14": "3Usw8cc9fefSVpjxcbFP7XkZt6sVTdv2vxrvfepZVebMxJ89HLWkWP2oqFmrsq3SmV5yx13mGMmGGEv9AVEGejXK",
  "key15": "TakBaz2TzvJ3DZwckCy93xW9qxm7xoBQYtLsm5Y3Sm5dQHGkH64BAQb7RwmDkHDzkEN1rYfnfVxDkzAWJ2QPBVw",
  "key16": "4orbfE7LoC9e2RRpfD3vFYrYdArtTrx1QWug5MQFwCSjwXVPPpYJ7g4gUeC7ExeiPPruqXxjorRnXKjBbRYFfm9W",
  "key17": "2Zr6QpGGyMw2RcZeUt29XEkjBriD8yxkGAdjYhkQzuv71nCHrEQ3epwyMqYo2eTtvar6WV4KaKE8favvXkgJDjwy",
  "key18": "HkMKz7Z1NcJAZvt5SNZivhg4WCH36TFyfChTV22yGtcdVtydsCoRUpg45DMoQVXB7JpekuJ1NKQ8rVoQPzjCLP5",
  "key19": "487PdMRxiRCc7EJBPytvDTw6PvvpoE6ticQY9AyhxCZQkByUoKtYgHSGs9sh5dU2xn4gwqBGv7QfcbWvspamvmJE",
  "key20": "53giktRSWkKN3hwB646xCuSqsnB8Nw53XhyxK1M5c3gxcaDDPXshCKpT3d2v7hQNK3xw5Eo3VphAQUk9xpVKdMhw",
  "key21": "52h1ARXgnoWdiGV7QXJisYd1NeCGdWnCEgh94Vg8iyC6jQuVFAsaaaZuzBvBV7kvMnRuaurR5RT8yGbqaok5YUQv",
  "key22": "2jBmzbxy6tU7q8aEEZoFQoJq6E81zehJKM7NGkydvE9jeunSYFcRwqinUgSZtxe7PVrmSGMeJrVWcYTz6463jowF",
  "key23": "22hxbj6XMFBWx93yB53TdspdiFYF4nXkvP6qwGzHNQxz7SWFMJzxr7ucfLyvm7MMf4vLTGswN9buAgnPZKxRtdW3",
  "key24": "5cQ4ScYPGdPc6jJJsHSohZ66wr6WLhtdFKGbuCSVZVtqCKkgEH6oDzrDFp9FH2f3yyv9vdeyFhZ4GMwfgovrt3Wp",
  "key25": "2hzF5NoY2C5Z1vvastChTH7XqusT5n2hyARy2MwkqeFep25VUKcigVLMNDWCbYqNVFrazEqwp2gSASdebUxBWjPb",
  "key26": "59VkRmeWa465yYA7QYGy8JUDGUAT98rv1owaQVvefjSg1t8ih96RWwmYn51zoqBSqudTp7kDfGC1Qecwyvgv5X4y",
  "key27": "5jHDW2CudbAMRFuxPV2uS9TpdiwSEGrmqqQz9QDca4PXrJbrV7H5tTDwnVD1mtTr1RDzBm5kBVgpNFUJApuJPt21",
  "key28": "2PTALNhMC9722hXcxiAynqht5bsqiWy9ZsfUsmpimaB2iP31zeWht1NtjvXp4Mn1Qt4SCf4ME1Vxq2zU2t4GTxwP",
  "key29": "5T7fu8jam6qKU5zTJFvqfvVxAgQcT6eDapztWDzXcFcKSSBKx78j64peZh17bczpdwB5oT498aAnh1PUupQdB4ar",
  "key30": "3ZeqxWZXoVz99Gq2NbJ7RntddcEzz589F1n1cCa9jfMDeUsLgbksc8FXYm3vusLwsfR4yuHBYUXXZK93pDCmTDCy",
  "key31": "2RB7YmoF2TDPvvuASSus1v6EgxbcZUUffa1fr6zutLQjx3B8A1APCUs4Kanjjobm5HiRhtGrT7kAbodENhNrXqbN",
  "key32": "2VYs44gtAEPtw2LrTDvukcwvqovn6gkdzT3xPUSMxxLBSiFZoQucMHG65Snrt9NZpLaVrAK5SKEpFcEhgFURh3NE",
  "key33": "2jhmA3QowZ6iyUcqNSSRxytHf2vPtNgbLUCTj91kuNcXkUhwXZfFi9xW8e3j2GAAJTypjiSu9XuakmkExKWq5MQM",
  "key34": "54n5GrGXBZoJsqfSyDaMWm6tH516LTMafhdGYeamjumm2eiP1fNyzYhDhCHVyaP3UKFr6LWSBV1aToxbik6qHuPt",
  "key35": "scVKCV4A9t8fiFDxuQwcWoNEAtP1KqypojMADExu7uakW114k3jzKLM9mUg8HM31315jXmiLCBtour9TjddzugQ",
  "key36": "4BG9TyV9Frpga82aEv182XhEcgHjxBCs6RZFrAHaXTwhSzE7W3nWwgrUp3Ki9z8qEEKFBMKRyYCf7oLvjywNUTQW",
  "key37": "2zSJMvzzgBbpCAWHKUqz1sQ4EcpPabGi75mEf5UULArNBzxD5wpGgJDfpgd826MuBJjqSYjMUvb6yz48bX91uz25",
  "key38": "4ppMMWvS6sDboWG6ZMvjMQ32ET3d3zEe7TmS1De3RLoMMVkUxx4EeuVpQh2RJytmYhCtyfe8NHwiNVS5dV2oD1Hh",
  "key39": "4WXZ5fpox5nexQoUzKbCF8wqpTEwxqNNG9gjHhS719kNAtKYvs5eK4cQry7cdMvPVGZbih8wYBH4hAQcanzWHomB",
  "key40": "2FUkpxBbbQr4cibgcnNP4hcYif6mis35MdCuc1b6TnJ3yqHN29FEVLgTmYdhLj6odi7XzcUVvJyeo31aVHPhDoVd",
  "key41": "4FDNJ1u8HNcCG3DiJvJGpCTN9mBRAj9NHPnwnZoC4ZMSkM9wCMFEiTJCuevg72y19FJBvEy8eKApG8zXQhH5XA6b",
  "key42": "aj8i4CA2YzwPEdbkWH4RPSjowERbUaBTyGbjbUcbFVXBviA7MgixNddPyG7LPzJuT6b7gcMdcCvofqQitSeBfPF",
  "key43": "47kdKL7g158K5dgEQrsdguqfLfMmXJ6iqkeNjcZveYJ3YYmn4TcdhxDSpX6KzXxbhvVSFSgmWqsGCBmzVtETpRXL",
  "key44": "4ikGUC59meb7PpiSjGjnASMqicgwuy77Ubp9ExDvBSxqWSpKHgbpfqpfVK6M4bmTDxXTHbMcpHvaXki3LVmjEYEH",
  "key45": "5WgLAk3wfMFVheP7XZF7R5r4yiUm4EVCyZqR2tdXTuJTJxaYTrUVcZEZZEKdV62kZBgoQ5Nmye51BuU7ruAxTfm",
  "key46": "2Ny8qxnEYeEqvuncg1qX3WysiP8DqJk3C51ukETwLuSKqMGH2z5zrtCCeiv6od5WCz4Z7tLVe5D34M2madgMoVqb",
  "key47": "5j6ajtxtGtBHZRCBgufpP5CkEgFVz12HTMNX6nPxU1zPg7YTAueyz7bTXwajawvMYbKvJvKKu87nn5P1XVmhiWCa",
  "key48": "2jxT9BVG5aY8PNX6n64WQRAtzv1wvxhVz13n9UP6LBQ6AgcMzMas4aL1yHwgEAZEvWKNYhtiAC5Lx6RLNwYgyUzA"
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
