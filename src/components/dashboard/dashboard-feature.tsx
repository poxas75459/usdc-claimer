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
    "48j6fSTtScpTLkDb8wSBFAB5A2zpy4nCCvP1MsyGXurZSFV9zUm5f34jrrjTETZ2FBaY7HyNCvNoUku5Ew2wEyY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsYg9fYqmgFpTpQ3aTPQuykhwFAxb4MrUvjfMUX8BCCWakSwiMqVxmTLf2EjkuymbVW6hWao85uD4iJ3PBMof1z",
  "key1": "2ZczTcNSX94RdU11vSCGAy1Tz5k6b6wxLvnuC6GXmKcXUSZJSZYZ6MaR32P4UjJQMPXCx8JXaUqwkZKbiaeVgmVB",
  "key2": "1nhpwMxm4Qm824oKdnu4jr1k6mi4vcynmzkq41chQ28THqKQ33Ek9REaYtcUjQCF9Jw7vPZtfZPZpEtFxMi7K8t",
  "key3": "EXfbQFPWVaBgJ6RUki6t5Hyj2HpbeDaGJAHMqAX3HnUqPCo7e9soveEVL9oCMAGiyFV11ndKzXg45T7axYAQGEG",
  "key4": "3bjCb4XqvG48VSjoQ2pnwpf1tggETYDex3xG21GwziWTcwqiBQogx7NDU9K2vkcJyXHJ7TCE1ELEx3yuzRWQrxGB",
  "key5": "2MfbKXQKFPKEcC2UXTD4AfxDb2YXNsyfyuP79XxjdQ3oECbXduazbPLSr5bJf77GkkhHk4YphU84wFePRFWj7tAS",
  "key6": "57QnaRqTa211TAaZoMCi3HKvxjumVLDfSqkQxAsusk9HyhMdGuWBeA8dpwfD4voa4krUmQhG3eRYmVAQNEcU5UrG",
  "key7": "4Me9ShyqJTi5gLM3GDqG7BpUiFwvVgKbzgwyVjTw7sGY3oL31Bm87ATSodfzRvqDNkkRgMgx8oPjxNuRa8j62viA",
  "key8": "2AMsiA3miAsk7Z7wryBAmGtg45maFr1CvTMHLKWrVdyfVBvFhnscesQzKxtEFbKkozbe8TZkdcHxYaiV2HxHnnUC",
  "key9": "4gygosf5XKdeG4d26XN5oWHT36DyyGtFy2fAjZvdHMzoAvfiVaukhpHzbovzNc1otqf6c7ebB26dCZ81idrjP4UR",
  "key10": "2PwFJUwqPvPFuCXrj6CEvSVeoMvWYhAWTV6VdsurvDuwAz39gyFF7WF7d8sJCj2hB9GZoufrM7uNmpUqbHYzasPy",
  "key11": "55SbgiAMKQ7SX5HA1cCNCpvjAipaSwx4yoXd3jRmTZSepb176gw5boePjHxXa3ZHzgENuFxgodGt44v7tQJc63H",
  "key12": "3VDXYdr4BGr5KCwwVyHWxCyynHrMb7se6TWMtkrRVV9oCQFGxjNbFCoH2DCtvRT4GXGsqCxn1xyqkGkQ6mMkYywU",
  "key13": "UhPi74EiETyjmCdncNiwd3Wk5ga2ZsnQe913rEWZVLeeHd2LCcuMNjsvY4LYy381fvj6c4yWqw9BFLU5yUaze2c",
  "key14": "2bTJ2KVqnGjHgqF5jveFr4Y9MydsEjvfWK9DHaq7WnfjN2DtThNiHhorPFKYoxypu1ocB2phVjtYmiN1z1z7b77W",
  "key15": "JgMsMaqaoYmdZcDfxLAJ3zJTPTuTBh2xLszST8eeFER35bYYiBUU9ytf6YKwVPftdpuLb1uPFBbsR7tj37Mgdho",
  "key16": "4Mj8Vu6NA9fKGWX3CjP5wq5tiSJjNCfmR2JsSPby737wVXM9CjzUAJoXJSNbLraYzv4DRV8Sc8XoXi8CdtwSz3Sb",
  "key17": "SViaS2wWQpg819tscfBfunRwQGXEEVNsE7NrKs8ozuYw47uXonpxaAerCis297smsyhVGcd4MYxUdmWL5kkZWmH",
  "key18": "2rzYWuZ7q6gTFpS3wCmmsXuMfw2wkjwSsbKmWuaR1w3GjtNUaKZga7Qn22Zeud4M9ppe2P5isL515WzQeCMG3d4Q",
  "key19": "e8JjieDEAeaseGjkJ1Wmv9b42doi1RC9JQExGeLGSnsyce9QSmWuxHd8NgKEeHCdgs7k6km16bJ9ZXcPwD2N5Vb",
  "key20": "5EhgyHG9g1QwojB5P9bBXfxEbzV128CdjnbKzQ8X6xRjyzmKcXNbJv75UsgB3euM61Cyopr7ZFCxcj79N9P4ZCgf",
  "key21": "5spAT2ZTD3rBzzGJyaeTVQTbK2R3CEm6etyzqFuFpuBpVjaay9Sm5NJ9TrR12zaBYfyQRi8d7QUJaok8FemcZfSB",
  "key22": "3UaYgXbqumL9EW8LDsCwUAbgvt99fwBraQFPdTsrLkLLASyAe8yKXKYjni7sjqW6GqPtqUTG5FoyqK1UZ6LEqFyZ",
  "key23": "3WPr8YHquhcRUvvcVyywZd35E9DzkjbSr74nVArP1499BRkKYbPYjSYGUQiJMAPhKpUEPrj5NDDXs7vrsY4qk1kB",
  "key24": "5XNtC5umtq9P1dgULkvkzaHo4bFRNzG5HyAXfWFCDb7tiqDyHiVPRtPa5nKCeFuNf7AVjrvm3uyoQPVgZ6yrxGdk",
  "key25": "27Du33tRL839D4ghJkNKtV4FyxgdMidVm6kYv7EdJwjGc4o7rwjQKqFFc7QVdhNSmqMMekyNscecU6X15VfxgJT3",
  "key26": "q62dpUdTXoZZtPwaRNgmc6JadT5aEpE64Dkr8zMPVFQkPmURfSK8YgbmpsK4Xg6JP9B1iPs4tGcPpGVRkaFdmXn",
  "key27": "2nKZ6DiYtbuNw46TE7Z7U5c43H1kRPX1KZ5UgDTvTNf2jZ38Kz4WaJjKUgLSJr1to7drSCpLEM2HiT6DAVDboozD",
  "key28": "ykjgp9TWxTA8UF5EQtuLTVhxSLc9yqCH1zux3Zd9LAEtK4QHEH17Q4ar7QF8DKQZ9bps4ZofQqLxpCFTdsq6FyW",
  "key29": "4ThhpS8sVCAZ4e9Vdnkunr7w74JdCKy2Pc9Up8AvnPRzBRxvh5Y6kKnuYHjx7373S4ojbDmRudU6RTRemqp6Dvq3",
  "key30": "8aXGPeU3RGMcReNx2LXemxDKZypz9r5rbuPPdjn442dMxTiBeVSJsNvDoiXgjMfmwKrGNgLBN6sfHoK8FkXQ3Td",
  "key31": "474fV6SSMoFpKM26hrd65PakD9bQB8HKb5KNWdAtxcgLag2xi9oeaXYLyjsLEoZqq8BCBUu72M3qRKHdCgLUu3xK",
  "key32": "4J6WJs2Gz8z6TXkpVv8MJxNkg8ecyzS9NB3g2EWVCiqEgQJA7GmP2rejFkrSozHQ6zbhZXDZ6Tih8PzJDwWrXct5",
  "key33": "5kLGFeCtJ3np2qe3VMCfDZbNy6cbDEqyzZ8NNGpLdqvomkTNmdzkKo1Uojaa7rBEcT9xpkHQFSstyuyKsUYpqRMf",
  "key34": "4vQJvxQr8bCYNijknwd6rEtVS92JJ8LsA8WVEfWtWwwM5dSVi7spQquuQiU3zXhfR7NaE4tqt4yjFkc5XmcN2Zaa",
  "key35": "2GDBpNK5ftyJyY5xUCKuo7bRG5Sev7JZj2Dfkv1bsL96BSEMBQFePc6S3F32enRgiFxdmijdDt5G213mHQ6Bqgdy",
  "key36": "4w8CVTu4Eo3XEYRieCQ2FfJXagG3cZsMVynHPc788TiDB5XTCZfw1b52u18boFdM6MtNnduGqukajRarW9kuxvHZ",
  "key37": "415mZmA6imx5s9fL8zbCTLdJ1gbWjN9DjFUFYgw9aLWSGRVcLmEmz9DqksNu1TuNzUfKdEwraRUvYrWy5JTykSBg",
  "key38": "3yskRcRymr5V6zNNvA1akwjATC5F1ZGGKcvVxXZXjx7sydxpSdJTik3nswSnAy2uUSLTKe8dfvRkp7as44rFXjAS",
  "key39": "5yJAPmzSQuSgbjwaTuRWRNFb5cVXM6W8hjyyJ3GcQawc8RH3GVinNDvb2gSpDj9xY9goRx5eiD4LMTfpq88v3o9U",
  "key40": "3UTbi7NQUYZFiTpyA4ngTvVw9WjPeD6UMwtmCxX4n5vhek7BoCcLyoffwyVmNNXXgtLmf31zWoLQaQ4XxvSmT7Gj",
  "key41": "2isjggAsV2D1FTkcrbKDKC65sa6E3QUP2CDJWU4oJvW9FyKhpLUJtbunnvy5dsPbGQAQDXnxxNGnKwzhprFgsEYh",
  "key42": "5btomvatXTSFRs9bejeXfn9fioG8qc4iGZcHbxUYeNZzYN751MqrEBA98qUheL9L5JqSNurzjHmZjMjX9d5nPERG",
  "key43": "2Lw2sF75GpHqJMCRrqTj1Uy92VVHrzKZuVcpYGA9GinhZt2bdZyg3ArmNGVPqzjs5jcTnvMHTqFG2cTZnaAHVexy"
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
