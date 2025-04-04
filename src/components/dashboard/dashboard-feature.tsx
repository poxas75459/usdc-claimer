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
    "5Rv7STKKEtcpGN5c94NPKXi1GoWFWVSr9BnZ2PbtzwzCmvwLCdHtvBgeL2in5NbTuBqvJtCsfU9rNDi1j7uE4GoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Na6M2eg8u5KwxvE6WNdY75Xp4bwEYKhWTanrGCVCawoAy3YqzFZGj5H1TeNmBtxmsbrtswjygpMRPcFe76z48mg",
  "key1": "58L7JrYJmHw6qgefenUPVkoAPE7wneXWAPEgddXXm5ff1cbe5WqAz3Ew7zmv1EA4ZnbDzeTVMA4ZaQS8rTxkVF6u",
  "key2": "GSs1sDcjpuNxrZuo9YjXRAkN9weaZV4RJMAR4rVaJkATEmURXv4eHF2guHPuhSWCfcqK4KG7HCMSaD3bb6LURfW",
  "key3": "X43hc1uD2YFaoyf2c1cT4MJv4jMPXVn7HqLncd6zSRgdywk2sF6WrBSaYVdTuUPNip8aox8ji6sNKjUbD3BvZnd",
  "key4": "vn6NYvyCUTaMyyfG8FHxkVmm6sqa9VeVvmQ2bMG17rCaHef7P98sWmnHZ6Kwf2JKsSAo75kBoWrvj7mnszhQZh3",
  "key5": "2dpTcyrs7R6cZnWp4xwfsFzCzdKkbZCEB6Et5DezimTuTioKPcVCuWHQBgdgB5ck2duvyBNmscGCs1pi4o8Mic2M",
  "key6": "4HpB7P933V1jPNDEdsFdAXgE5sfWjhcp7KmBTu7b5fGnWEwVx5Se1aCMSLKg4UuoSM9LGrf6dprLPbJk4mQZPB75",
  "key7": "2yhGmbY4akBdCQBPPXQRdwpzFAui2k9cLvSzHT6GB9nPSfE6JE3qDHgUV2TZEDYZbKbjy1CTi1drmSBZk79Vv8xS",
  "key8": "BVitWWaBpkXqCGW2sAAxdQYg8GkC3RAaApu5t3Gh51NiJhS5tGkN5AeMmXnr5ZmqhRJKN3gPaTsfBQDNUGLLiEG",
  "key9": "4dmw1NTwR5GarewqoWMo2W2GTvk93CNqThYMoHGyLrNNVo2XmAErkri9WTrxZ6dCCDYHvhk7cLi5YSzRU958wPZp",
  "key10": "4gsiGiBraiVPiwfma9F8dAuwen372kMr7QR7KHUxSkf5UffqjsxTNf12V2QoMiZ9QipyVvQcHCXmrHWFyTxb8PNH",
  "key11": "45Gh5xstHq5GCZQkqgKCCqUTurbG6UP47KDo9Zs3AqmWvsTiVSJma14tAtwNC5A2irfNM3jbPFKToZvzxumGcJC7",
  "key12": "Zh6UPDe4MsCFpvhMeVdPV5dzwqMrnFRbSKJSKRyKoZjnGzFq9fSnBozDA6kFDSManJLN4TsrsxiJ4vWneFBRhmm",
  "key13": "yKXBFJ5jtdBcT6XVmTtEKYRapMbGQF68zxqAVBGZTVAhn1Vddf8RaPdTv1PkjTncyU3CPx7hJDtKCbJfdtbdUbB",
  "key14": "5BnAwjq1puTdLH8js7GkWe1eTcTMmyxZXvFUi6yTpz6Gc518ToRDKvSBTGsxZzBPTXZDYjXS5jBcmoZ75ymHzKea",
  "key15": "sn6RRL7UjuNLZQv7DJSgVn7dhwhkgTLe1ehu8a55HFfR3HFJtts38BVQr4UfNcCfczFM1Bqo1q6XbkQCiGSmE3z",
  "key16": "2zSbS5XBFhSNSrYFEmgGgJXTBBrNbzCPECBPU22Dy6YERbmgPnNFiA8LzhS3j7L6h4XQaJuebL5cD2sM2JKnQyqt",
  "key17": "qgs4n54oXZrjGVmJX26pnvwHakZM4njgXE941tcEPiymtVL9CBPHkhxScUbuYANTsJb3aK7NNybNmB4RdFdt6gv",
  "key18": "2Ap8vuYx78TiYV1fz12vYLNYjM1EVdcN9sud6X9XFvve2HokYM79JWwpLfEUDYs1FiSsoqg8SN5SGzcVp54Kc1Mc",
  "key19": "3FURLBMkteZtNxfgAD9m5Lar5sZreEhunXL16sUib2AGLWc6SpNEFakbra8Z6xg8wCH3inWYjaqdFC9qiqY88j56",
  "key20": "4cUz7hRDL1M1LXuWM1ixLnvZcjmhhA8PgUSE39VBJAGd1dLeLACYjoeoWRfSzmseWAASVzzk6v7D4M46bwisFYsR",
  "key21": "24SQvC3UzgLBwkHLVniyXEDZjiHKTWLCt2D77qdBC2pkgrh1BJC17nRDsFReH8VQ5FgWoVH7F8vgGTP4QHd6QCGc",
  "key22": "yLZwsfBFJzHYSBdZXQhfjQntb8BkaWGtShrp6j4XTo8iFhKNNLcHo5YF1hyge2DgXdEZuq6Eai28P53Bfe2RVGG",
  "key23": "EVUprypvsLeswkGYUSaw2V2mX2bShjfyqc1Wpy8Yw2j9G7oLK28xLUAro9QKBTta5hxpx9izgnkjVrzz6Cy5PPb",
  "key24": "zW6sUGGP6vnoCNVxMr8y6iNZWjAZ9LNSPeVCRin3gHBFADsBFXTANZFnKprZPZKiFg8mGDaq6atdcCqjnP2BZ8V",
  "key25": "2hsCYoWesDVJeYEC6yLvcrxdbmj9nACToB9o1n9Bzp9QEpsKunvW2nVcvJQc7tpowXCfm5pB7CkTMMyGL9qbohye",
  "key26": "3UwDGQrWZ1G3Tr78daSnkBayf4CS1ZDCCiqvJj2ZFREDqjDeh2qkn6gJyZs88JEorjUpYmiT66PJami5vGZzrzcH",
  "key27": "33CYCR4bZXo1uvoNc6Z9PP8ZkvC7JwMkTTyCFbqwM88butkNc1aVBxh6ABQr2X1kGS6GYPjJq5Sd7JkNWjvJryii",
  "key28": "5zdBL3igiVZkm5zrpLSRukf9a5EcUbmAvruupB7KgqT3cAtdeNvBc9QzNCARpMhvAoSPr5UseAbJ4qNXmk3kUGJB",
  "key29": "62zyeJJZP153L8k83fdYvnMoa26kUqrfpFc2jSj9BLfGF2AKxHGi9GS94sdyfq78er8Y412zffWcEGvhBVpoHnFS",
  "key30": "5XpReFCPfqf2JmZRj5u5ZcTyJcE8hfkTotXw1BBwytMSLA7B9V3XyYZHj9ZDiv3LtixqmCTcFEpLgUevrh9pE34r",
  "key31": "4UqTm4uQ1mgdWXrqcaA448NaAkWNMAfVsjYZiAELSCvUoPhb7hhHEKU8YjXPwLsMeENSa4oLiXfcCEcDgztcRnbt",
  "key32": "3mbGEAriWB9KxSRbBbtdowkXfrkg41wZmhvkHLzc5i6niPgQPJqwYNZkXPKzUkdo4i2cgA5PPF2HhwtU5DZKBhuJ",
  "key33": "rBqx8KDVNsFWZwoANLiSjhg6WUs1zr88kBejcEAwxPAH8suiD1TzJVFMnjQEvBD6gKK6yGXWaLXS3uJtTRu17pK",
  "key34": "4FSqQCeoPgnXKHcFuVmtAGCudGXiJ8cZnf2tHN8oPkjodxwut7KhCh1ACDtAUkV6Uhx5y8L5tfWWCFrqHoAUqUHw",
  "key35": "NLAfZuRnD52kiquHqUNsGFqjUpeTjju5PVTRmSP6oomcuWDAyv7nN1E7UvQLJGifMvv2KeduAg9eD6SKE1EVrRA",
  "key36": "6xUF6PuotWELF4f66mLDsM8XGoMSXD8dkFtP6Wzf3h7dKL1D71QKxsY2fdZtBkiXwrbCY4WKptkZj9C1GBE7mxg",
  "key37": "3Bx4Md3A4UCnH1moxhnLAQFV7tVCvz6DqZnVmJ7AnyAq5EPz8z5FAjn1tS2fLttNSiBfigatL6GDa1RsQcSpYFiS",
  "key38": "4LCaus3zkcmSD6nAyyGiCeK8nUUXDdZDdSoUH8dPX1A92vAFzhrBnBcCaWXSJbKYbMMBLpYBZNhBerETJQHmKR6J",
  "key39": "48W4A9PnXMVUEYcdQV7gN1AjCXKAMKsw1dv2NFLnS6Cwjg8n1yZmMdWXpXJTxdpsuNDqFRFwmZ8JdmwoRfNxnzgx",
  "key40": "3cXeasGPCoMoKRuzKDzZZqfzsaSXFkCNXPRPquPgmf4h6ZmABj8hpdsC7WDnq6hQNwJ3PhfYSk3psc1kQdpWLukw",
  "key41": "2c8Ms286CLYRP9WCZ8pDEHWSivnWEprqA1WdfeLuH4GnHnkPARHx2jHEKMCzX6feV5JMUP79CbC3o7fweKXqZTeD",
  "key42": "22UkPDiZ1nEdUCQcp38AJijmQ8PXtQ2vRqW8pNJNGNPsNm39XtHtnRzAgfNUhTmGohnG5kDi6EBiVqNKmTUp1DT9",
  "key43": "3Ef8FBE4w9eUnRVhxnHkF7TMJfkQXeqR179qqCVwT8wRjCvJ6NY3ieGxDL8wHwTWtjAhPMFRfVfN2sYeptQ7Ajft"
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
