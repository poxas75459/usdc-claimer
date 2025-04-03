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
    "NqsG84NE67BRBTr6H7zLmYeB7pSVrMfJXrUdGt7G2NbFqKDMgcXvBpEaHYkbXexrzENUNGoym2owYXSW7TGJsgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zw6mQw4Qt46JWHva9Ln5uWyZyVV4sNJegzVL3DD52tE7jTYt7P5iFyvDgT4nQbXwcwMNxgJGuAQ4qxeNJ7P1v7E",
  "key1": "3EzwA1puWHkJKCRvi16znqTC68BUh2gTQJvjeSQh56JqAwUv7pmjJF85K8LZ6wGGsnVprvnqkfUHJcbVRrJLqHB3",
  "key2": "CPyCY4gxbLDhkkink3dc1yRJaVK9tmaEHeKN3UL7YcaJmAirgqSCYo1tfh99JrupCcCF5QQD4NAeBra8cWhH4ya",
  "key3": "4XEj5MCjFsiCow9ymfjSrJeRN3F8ZKdEMvdg5KvHppUzLaAhV5mfn1Rd6D8PoUHc8fjwwTNqzxKQTToTvTQ9qpqP",
  "key4": "6xicqPyVj9FUbCaEqoiTeB5KKbukEf4dzqJRjRo5Pnvtd9ZeU139sRu93BSNWT9VcqYzGfi1R5WgojdpLfmntuR",
  "key5": "4jr9K2msSp5akcSHSDLetPnvf6PGEVM39a3MVoR9G7jrdRJtCMk4Wum3ZStrrpbY37QN8VC9hkrDXv4ziBANBLNb",
  "key6": "4G4R5YFeBAzhDTRY1gkcB6tm13JCkPFDsVCsuGXxNphwpsvyuf8PpdnM6CdiWzzis8pQamAmewDEGoD4aCxD6LGP",
  "key7": "3bqKoRPC6pVodaXyhoPfKfwbt169jVSyx1R6tohNiuTosK7aux2g2oUtXrFMkA3g6NKzeYHu1PeJE5LJ34f5REyR",
  "key8": "3asE3gPzgaHsAhJJJpd9sFcBbKNGpTXrogUAAybLDXZYom7vkMv7MS6fCCeWyqzumsmYoMPzkBY41T6vRBc1tYyN",
  "key9": "4AbV9GdGZUSUvPWsFX1k1uiZV6WtVY719SxZfi3DCp1HExcb4dFUHQJZfEgpAwHmD2phVuFJ9D2hbXWmx99ARndH",
  "key10": "5P5mqYSwBBN2hUbECPECWf5JsRxqX6u32Rh1iUrfKqeyhGtt6c5tL7SwxcotH26LFeWJ7RKHKZdAArLHbSnXk11r",
  "key11": "M8U5o4QXa31vQvRfjxztf4K9MoHr9KiNXe9CVPvCWcd6Wayy9VqPhibNoZxzxPxvhsSMXFKKA3FEyRvDDfXwdsa",
  "key12": "BmuawhCHpCBmp1qHjRFbNe9eP65bG6FsyjGJTdfwdCPLQ3iwXTPekjy1LGiQPTm2PbMSja4xcybxStuKUgiDPmL",
  "key13": "jHstHUT3FE1mhfQo5FCTUsJkgoNizMQa5ZYgFGjPi1BKbWVtm7aqY34xadvPxnCySUgupUyDV1YL6cXewNhme79",
  "key14": "oWvvSZT5aZLqt5D65zs96y7osWCY6vzWkekojbCZSkSF7Ff9KKqDrXisr9ii6yGXAfAUjT1QGacXJdwJDsEVxNq",
  "key15": "jY7pkgvr7edSTf8G5GkbpdkzDGcciZron512fmuKu3hP8SZTnTagtFvZqzWcXykZJmcfq7mM7tfs5rrvWPCobrj",
  "key16": "2Wc9bzjEk2LP5SGxcDY1pAJZsGaZPiovhcCV1cjEnRkhdtq4XC3otVtfs2SFLpn664Yk4UuPiqK5ZfHuNoPTpahw",
  "key17": "2zwZDA4EH9BCuXjsGRPw58MzCpVqDe4xP87nCutBUw1CFiNmkVWRDkMepTywLoKQy3hhUvxEnAuiBW8tPbCKC4qy",
  "key18": "5HJYFpG93WkSENnoWp4gHaVc9ADzHy3GMrbT2c51Rgc5cBRwhauQhs6va8eEgK1Q7fdsZyqswpsoQxVM8CrMFTHr",
  "key19": "3U1GsTJRNu1ffVifpf9xn7MMJpLAsKpPxVgdsEngjZ4R65h2WdWS21Be2EQQwQdjES1WcBbHCMLADqGuAkDSTHjs",
  "key20": "5QTwjxyn7LLxFuJbTJFLE9KKRMi8qRfVoYDP77iwAgWwiFvVUEqbF8QTnuzR8rVBs4BGGbQRaM3mfYrQpS9b9X4W",
  "key21": "2s4e3TYxKevZf1SMPRDqnAMasJc33WtUrDgYrgUc6TCJNfrKGj5cS5HeiEsLubzpwKPszuXnSTYeMZ7fsSmXR7DG",
  "key22": "3oa6FU2d4VPcwBVYum8riGaakptidjp9BmpzAcd7zEV1Rnbw27Xxg9nzAr7AAzuWRG6NwcAArAe8A7WimkEjy4kQ",
  "key23": "45v9dmRFmZJCLoVWwtzVAkhVooyHQiQXCvL3SWrXBjNPdhbqJUXQwp9mPGn8ECTciGfyFUBgvMxWUtmRjdnf8hek",
  "key24": "4nvgpG1And6tudMf4UccsiA1EksdgrS9SXT9XgCWE77piMX29UoyAfmik33rScE5H1oZxKmnbxwsrhKMc2NqUUC1",
  "key25": "H9WtDdtCJhaR62MfhbPnbUveziLVtdPPaXd77WvMF62qhPFZWdwYbXHD4jHghTZFRMFjTMaT4u45ERSruAV91uN"
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
