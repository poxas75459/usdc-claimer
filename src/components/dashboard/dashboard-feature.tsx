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
    "2kpoEQ9Ko4FST6V23GgqSHu3acEoLNcoUzFLg3fUFRrZ9k3rSdU2fM6Mm51p2zNP1aFzZYsvJeEw2oVvCjCiCKxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k3YSRSK85KYgTN75pYYCmu92ruCtbptk3wT2WAB3Sc6mMm2DQgShsfNGgD7cGafbP5KpzVgg6u264mNr6aMtNuu",
  "key1": "5ee7vNi3ZHFXj5rcfvnym4C6jUTo7u9RaAddknQuNod5tLevLK4bW2bnoHwNj5WzXmzqDJV684EZh6g8G1mgnLqf",
  "key2": "2RNojC7YtbHBTAtkr3uxqkyAxsVaRRdMDiMNjzLrSSNDW1aMja7GyST6z8Xwa5MGGQkHMebEnRK8uRcWaGFtVhgt",
  "key3": "XfWKXFv9Vf9tXdsmHXekCV6LLkRujkuFNuRZdTMZjbNeSi9r6Ax4QmJn7exK2HRrUc6iNFyekpCqcFQY6KNej6D",
  "key4": "3rJW1MP3CBkeY68Q6uDTLBDN8ZsjrZakZDmXAeob5Lzpr4uJwQmC74MXurF8S7uwmB5dksWvEzKGL8a6XhxTM6yr",
  "key5": "2jUywDNdD7yKZDyzPeAKpuqUXxX6YekE1Hk5WCMTdA5W33ZrEZihuPPFb1Wep4PuCfBW7FevuTxLVWo1tFcsUFfJ",
  "key6": "vvQaCcSZyaJx1MQyCKZniMBwazbAKirgmS8Pwi3K3sAHcxu88S1bhwRbyCYdSV4LjoJTKVAvuZuL2X81VdoM7Re",
  "key7": "3fEEoVJyaaGDRmasbXVma1fJprFtSKGRnPUoXLHCXMQnyvAheiQcC7BERtZG798Jn1FgcwGMStWDbpHt5JujQpvv",
  "key8": "5iZbMr2KScuycNQyb1Sk9szQRALZuuMk5m4ooN7KMLwxorFwRtk8hgddvbpEWubTJYxStKej4i6rvGzK6XBMpQ9x",
  "key9": "sGpfNbsGaxVz78K6BkEc5RJv1xBKvS11JvfWzWjMXDSiPHVkrf4VnedF1hAc4FBc4KbfZzDLg9bk2x1RX9y7RnX",
  "key10": "4uR5oREPkRTWaJdwrfapa7EMczaf9MBixKGsRMFpDkGBf4xLZf1qkTFBrjBnozT8pR2An2FTZujQyDCPdFFfJBc4",
  "key11": "2kkWrdYAE6gcZAAY9q6j7dZ2YfU1MNS6KGX9khwMYSpR31HDhFCc6q9dANnDfCD5ib9ZNWaRT6GWoJKCZAgELBVh",
  "key12": "3RQcirR5mbZxqmXiZ9FZavoNu5jcRvRBpUjZ2E76BmoK9xZiz24sA9Mj2Y5sMj6z7ujxmXj7mbVcB5xQjh85kGXb",
  "key13": "311NDCKAQmEkHdCBxefKXP2WBL7eeVuHPJNJiYxmc7wbg6AUrqZreey3WdhH4fCV4wWcC44kJvn9jF3QtgprBuhd",
  "key14": "4mKm4xj8V3Ayr2L1VjKmgQVWKju5P2Gpcbu8Rc6DvQmVvR8yJkQeamNVK2ZU3x81E3ELPq4L6wdhQhwTDjCfJ7gc",
  "key15": "2G4qmxAbzDnEM17V8QQ7kza3iPWvvguH3C3UkRzmq8pTd4hL82Ckfn7xHGwaDVS8CRikgT38CdMLvvghoW73yaih",
  "key16": "3noychDiM85yTXHKRBkawwY8dfC4A2rZFJsdGYQHbmjn9WWYt9WLpBCXuCefPfs4wTBPp78E1XBuYXbLAPUw3J34",
  "key17": "4iv5BkX198om2hsV6wdTBrUV8vABvrXYUHpcdvaGf8ALdArGCK9LCBhpQ7Ca1DWzNCWqYrZRCx6aju6vU9AYQNWS",
  "key18": "1eHoSSp1JPadbQ8dgvv5aeaLBDQGABHtF5unsg26KWMz7tAQRN2PfiHTbLWa7mUsmQTaBBEPCqYLdXtJGRAR1qa",
  "key19": "7USSBPKzf8bB5mTwT4Un8mmdxBajiDa8jU9QeU72HXjrc6tk9j1HHK4WJG3Wm6deyP6HkWNXCknyYCLyUDEZWkx",
  "key20": "5j1UEnzU33sZxep24QvkV6PXZZ3inwHDjxgHuq8oQHvFoS5NJdDerMV1DjmosWpdiDM8WAdwRP1wmp2LXQd6Xnmf",
  "key21": "5vTcRqAd6xSJmgTRjpsv1mNRnzbtpinoMAmcLvPPRVGizUmqEfr1mbea6L9uzqm1DyRJBh7JJBdipMQkfF9Jspyx",
  "key22": "2gyuorNSr4dbTFxXnPhMH6ubnuZ5A8YHeTvYCmuUWHxNMXNQLMZ3hZjZ5fPmbtU15AgPAJHcqPVGBk6ZPy295sSy",
  "key23": "2rdBXJ3idLjsMWTdguZZ7uU3A4VMFzPkTyjnCFRxT97h2HXj5FznABYnn1Ms6k2ffL9ZT2TssENSHAmS3eaTJZfa",
  "key24": "4FBPP4yUvkmQ1KnQh7URV2kidD1X2prFHhW3he4ArCPfHCak161WyWLEEVNRNSeVzuN3g5rXYwsqxyuL6TdkNKFo",
  "key25": "4e29wrtVJJtwS7yG4uFTycGbgN1L3DW925BThp874jH77FSiuUgDGkoV8kGcaY9zCejJLCAYV9G3dUVpFadx169r",
  "key26": "56Agp1YjF9NC69SR3vEaC7uzuzHxdZzm2Npt5hhFtcowrhojn1g1kjdRDFECRYcCCWYhDgc6esvVit6JUoh3wLGb",
  "key27": "Ei3EFF31pDSkip7RrxEtv7VvZPK8pwbvDZAz8baWvixJvoEk9JdeHsgvjjvdFvHSc12aTynoW8uH2JiB7tP4Cwy",
  "key28": "5gtpJf8NnTu7UVePpEQdTSMWo1cAUbnwHypidxzzwQokGTdaGeeGFRFQ8SvQT632tyR14xF7gAfzbNPkQ76wgQuM",
  "key29": "5nPo4hJBo29im7xgoiCTtveTFPvsutAXWG3Ne2dwpnVFM5BpvwDc5J5Pah4PXkdD2JBDYKaRLjptFPLzyuDbZagz",
  "key30": "25iDc3S2T7RAPdZkFKb4NiMc27MMApVr9YT4uFZDL9PaJ7VYP7eNUuK8pkRpSd92FXeTAkjPyDK8WgVDFv8c1EEv",
  "key31": "3LPwNNry82zENKbSm23ytw3qjXGsQaZR4us75YTvAeLp73MP13ojcUw377fv1PdoX1MSzYFwoZ1RtWkmzt3k4VbG",
  "key32": "QvxSDfWX4E28FRDZtncEbRLDy1gro4KBk14usqKquGEbJ8Y4JugApzY93gTudWqho1FXbb6WVbJtXVZQK9ZXbUA"
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
