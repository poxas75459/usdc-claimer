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
    "4RcFWiEbpA4WfpfWgrVS9Ayx4nycnPLJ2xVTtFLENkjbKD6i2exBVmkCGsnweDZaViNSwR4SbNwPSCt6W1JAihCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEyM3DQftz2TwJyu846ffYSJQg1YWrX1KKxAKMkzNEQ8FQLTVfKnAwGgNJcdwPGg1tf2Hqwtu4XBT3tyeW2qznu",
  "key1": "qYETMghALnMHZzxX6xRJnrMECW3viAS6MQqmMLzyq2jNmTNiKVvBV3zJ2aAyHyJ5a9G9K3yTVvzGVuruUjBYwJF",
  "key2": "2WsJD34VEcj6G19C4HZSywnMUXYM5P4vpyqSyoCtKPreDTCqEaaEp7E3JSd16xgVq5yPime2iQgjwy8pAKMz6XRD",
  "key3": "4PcrYTMg61Qo8bW4xTdkHrWFPPyfD5tbTVoAh1zrNCDhiLg8Kh6SNpcrx4ycxUhnqP2ezHG1Je49QPq7WW6Webkq",
  "key4": "5qfRUi6UvvTfFU7W6GtjZJB4r53vjY6YzCpkd3fcSUtYHyaWYXfzzjbUXBdLUnXXWfrYXSvHwgxXRtDUGv552ZAv",
  "key5": "33jfbkYxXYs8W8jF7WuQkw69VECRT5uMQHcCxKPtGKhfekDgvvG7zgjEFXqodsBzgpSF77KjV6SjLoeKTGaw3Kvz",
  "key6": "3qg1XqMGroPK1ensaygcjmjfG2W3pf6VkQmJnK55qvq7UhHmC2mwcByV7uemLYvsvrrbQ4USz1AK2tCQwjMK7zRM",
  "key7": "3kfpdbv1N3LxbDf7eRJz6NnHkPqM4CmpiLWk6hb2a7ZDpAgq8iYvFL48mtSQSFNYXDjTjMtj6aGowm3N3j6VkQnn",
  "key8": "528XjQSr8wVf9b5BBeptWtjCMmzA4YN3UBsmC6XwN9w5U8dyYiZRd7tCCAZHKn7XLMVNvKn6kYCsPXzMnmMbokNm",
  "key9": "5nA8Lk7vSorMQnXBSUa9McKKtXjy1ENXAuzYYUCnGsFSmNtSsnz6XBiYacB9ynetgbgugWMyvFxdifNHtL459nDH",
  "key10": "89d2UGyx5SHf6Pr889G5KADprpW17o6rWqmk5KHA7LpzjqW4KGDdB4TZjy7Pq9Au7cMVd9mRoSG33cNWQqLVZM8",
  "key11": "5H5YqQddMXrHHa86DcXvWd13mMczZAQLi2RHTWANLj5XhjSfxwzESMBydRq12aWa6PgF2o2XahGWFedNaQh8ceW7",
  "key12": "5x9tt22KcJvPsVCZqxS3dZ1dXPTXtTqVqezxZc8yonUxEy3iRwPYCFPdvYvoFwWrngCEqG9VSSaNkhr75nwjB8q9",
  "key13": "58pibb8sDenrzYp86cYCkeB4sPGPdE7X7H2tNv66pC11rxhfJRExbWiB4RCfRuyStuyS9FS5QgfCYN8erCfGT5X6",
  "key14": "3jiT1YSNGR87aUUaRtkTTLbufxcDDqYph8MTPc3Et324Z7Ts8C81LnWJSJj8L1FpkHavSTbpBdEscHKprP67jq1i",
  "key15": "3kzMKQnqQE4h7MkbGbmSb78MsPG3xigcwPtVsvgt9mb3eKgciRbxYKATADSDHsEsnqZbPhBvLQMX8eBbjnZbcvrs",
  "key16": "4ArGp7DejDBY5AfHSPyM6ALA7dE4Gd9gx87MYH5hpNenro6ogeUx2pTxtrCDSadSsq8MsBQdAZymLuUZcqj4yKrd",
  "key17": "5Yn9UNPSTFaBQbJf2FiDLdqnNPAnCUT64isRXJ5RTdNsy5DVAZwMo6GKwVzfvMZKp1ZKrDreRmWhaipuhG69S6qA",
  "key18": "t98VDFWRTxPNfyf6cE7BmXffPSRu5BzaWp99Wwy2GyWHZuqQMeEsRaV6NkkXDUSDAUNADMYKJtTTVioRY2btbiQ",
  "key19": "47vWcJ7kqTJkzN6baWnjg4rTirTjCoRnnBPLPkZK9tDtN8XZuZfbF7BkQ2VF4iEguKXJHb51QZKjb3vmySVqfSif",
  "key20": "4WBXQaJMpCqrmrMh8Gc2ZWKuAzcruzWtwLUTrbwXmFL5A1C5NXfyVFeMA79R2HyLShWmsYvnp4xGsDLszu3WYfpp",
  "key21": "3zEQ4wbXzduD9qkFhob9sTTg7BEzMTSHBFjAycTLpsJ1etqQFGBuGjrUpzA7xTxKwjrJsU9xwKyuUc1QRV5i9toP",
  "key22": "5jiZRGycHRGefw36CH3BhwQeVZJtTWcBaEwavbRh3UdxiahX6oYE7WayrdaMGwpLXLMp646VWUN8uKY2fL5iKcdS",
  "key23": "439sWdDVY5fAzmZyih9dKXLRRTXLkbvMJVvzQXDDtyvXfW2iGSd2hcDgXq9MamAwnzanGynPzy5bw6bqY6qnNdxY",
  "key24": "2ZjcdJXZxLsoqruL1tRsTyxrdMFtC6bgc6xT54M5LUCapkxmUBpiASR1jAAnLHu1sfpSkNcfrgBwzn8i9HLirNyt",
  "key25": "5vSVxYdvTRsGcAhweYQaz88HDMphqahXAx35MqZkRJp7NCCX7XJUAhbncNhBDozCgQiYLNmJap6af8dkK7Y8XVoz",
  "key26": "243UT2tKymD6wJTjV7JQBrdiExHM5JFiqwzji5QUbNP3S9f4E1EYogo3dvCXxdMHYdB2jDEJW6j5hcAgDQ3apWvD",
  "key27": "43iWQTjHn5MQbN1t4Asw9aZAn2rywe1wcytANQPUK8ry5sBUWPCx5Knvr9QTSNHxRoRZkp5ef5AWRLcQXwaby9q",
  "key28": "2Lir2msK3KBZj25nFbQour65zHXjKKu12AZjdwzRf2jDa1n2TJdQnJ4gTNG7whp8T5VmrvDT27n21J7tGj8oeCYd",
  "key29": "67pha96rdvUywprQedB1XL5Fq5b1zbKaNxDS6WgKmcZ2mDtkp2VDxE7a5sV1zACr9ZzZfkcXGQsFwNHHiFy6Q5tA",
  "key30": "aJFjZVZbfcjz9EgRhG44VPPXPxEUERXoN7zbpXczPkCey3q4duMAx7iZPKCqUDU4nbsqSzdxSzbxyizPFmdSRca",
  "key31": "3ukqhyZ2HL5y4UPvszZMrjKg77yFXcPrBajkzgmXKzi3BtBTxwRAYnJYTAH5FTNJbXPGDgzuuwcGB6r571s4khjn",
  "key32": "2QavcsnFo2w33z9G8EvRk2p9TJnvkJX5vHYDB5wDqKimF7SEpzB3F3kh3D3XQhJ1dwpN7wqzWSqbEcf1sHwarjAj",
  "key33": "52Hm6WDzhAtinAuoZULpa6A37UXNegM7587HM1j5hCzUtjTdvpzxuSh1pszYusHgWCVRHdtbNnEWTRhZzQQQXLB8",
  "key34": "sKG1vDHTLZXF1E7vUNFuZ1TA32gSUGUQk7GAKmrFGZRaTXu1XNiVAkyX6M6JVqswT9L33ibKxzqZpMsajU47juA",
  "key35": "jxKQi62bts7hcNwS2owwpHBK1PisezLEZPBXC9ffi6jK67Jrm16Cnvdi6CoGPwN8njzrMhxNHVrfNF158eA4RXi",
  "key36": "2sYNSLQFzkMqRW51SBkhdacWy5XReGjctgoAqeTQCaD722h1jsRxwYBiWkp7K3qjrfrwobAngHpsU7KCsM6i7E62",
  "key37": "5vpbzxD6jGgiUH9ezaqsMgYfngCiHf85nm2zu7rFKGfA2JWsVRAN71EejLDPQVmibEvFRC9LwXf2Re7GVK7DiDpV",
  "key38": "MKWbEBaSRf2ctQ7dES6ewNPrLkWbAjtDj2aibSNFGc5ETtmZSxgLGo4nTAxPbNPVhP1GLwrgysFFaENzQdg2qCt",
  "key39": "gASnj1h4eG3KMW8q6rNLcdLm7Jh4EYKWqchmDH1iLBdmAbVqBMtNJA7pFX8iXXMh5TJzqJGJyhN9Q79hYWWMR3t",
  "key40": "5KUAcYCoU4N2PXuYbLbS4CbNtrYPPSFqcmndAmyfq24QmArHCsNcsAstXxAxrKu4JwCM8m7CAavS8Y6DJT3G8WGV",
  "key41": "4CdcsKGV5Rz5RBGEr3p9wdLchDG8g8srxJg11eMeakgziHtZ3MzFCDW1nZSZrCugQRDcq7h9LL93WPMK2qT5g3yW"
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
