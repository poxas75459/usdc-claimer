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
    "54DCjyGChiX5nEgKfaw8bvxNrno2ABQdqPGzVNE5bUuqP9id7q3uHiieqm32XZpcpFiG74PQ3G9ZTZ2WqtCjqnT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9QXTvfot1CtUv2TTpTLpuGyGx2ZBYhsiK6MjJ9CPBUtLtihtUX4FDfGUHYiJA8z9vSWUXpPgBSRY7iBSBn95A",
  "key1": "5odmUb4nLJxMecJBdUbgnnnkY413EcAWjNYVbuK7G8Pv1BbGniccryUFvAosaA6AhKGBGdoX26ppav2q87wZnztA",
  "key2": "4Awb8gRAwJJCQ6M6Pam2yxu5JBXL5dvktgQ2Bu335VygEdXf8yXjoD5u57axHMYLZsyyYL3sF9azdeKR6NMWiTNc",
  "key3": "2RgFZn7HFLxTg6QGYDP62DzUStPWg5yGX1MAs9pBP7iUGtTGoZWtPHP4AsmssjHCyLbarDHHPenakLGvYR7qbW59",
  "key4": "4zar8wTstLcphxhDu18Zjdn6Y9B22JpxnQ7hHj4Do5UhHEumTwiW4i8JuHYnY9Lrwiw1NLpxFr3AGN2ioeYtoRDh",
  "key5": "eBn2LznWFxwqo4T4U2kGhfx4LpmBQhWoWDJnWYNn8GsQKBjNRwDAXtPbxSzRQWR3y1sJtL3SuYKNtCr3ndV94jQ",
  "key6": "3C6r8sY1a5Famz3BUo3HcwC3ccDkiPvoSDGTEKrK6rGu1JHiZzT3EpcuJqrPe2KVjx1oRVE974cmkvLv4L3VmiYT",
  "key7": "2TS8kGHBpgjkFEnn3YH2XMBummfZ7bQ5XesXBrUubXN4DuiyaxvEZQZcvufAPXtH5EAQPNF3zLPaqntKUuLokk7J",
  "key8": "27xBthvsh2UG8KFLRqzCqzUhJRFkMq7JpeRqUSCbjPi2wvTXYDvfA5JRMAtXuiCqAQfDC51gssRbfCNwfSsvBe2S",
  "key9": "4BfqmuR4BBmJ3ZLEaJnojuQfp5PZmF8DgCQybeBQ31nSoqQGroF3Smj6x9qx37dPNizmnEeNXwbjTfjQFLyGYThe",
  "key10": "4CPgKqgjRZ6XMtgGFMrc2WctPi4qD1cEN3SKg1wdLzjjkUzKThCdFfptgqbAQJHob1V1DJgeneracv4rdZRgFpuP",
  "key11": "WC7ZpJQrAZUjQprjEz14jAQuAxzj5yaYp6tTPhKeDzjnh1qxGnyrLbdhpdjWJ2HHmiAVYC2woAbUoaGbkTVCDUh",
  "key12": "2nXysoPAe4PFQ2fCXKHt7LSXooJ1zD6S9REiexm38XStYZ3VM5aZxCTFpSubQ7ueTg58Ahdtti7nDv4mW5tEspGu",
  "key13": "t42AJDE8a4pXfcW2GfHTr9rLsMbjLGwAA1wPthgBDMJ5rgrFigF9NxMqtzSEfa3cLbc71CARB4ccGt1wqHFhapB",
  "key14": "5KbF3tvMdnKN6QJQ2g8FC31jRK2LhZiGFDFJt9AJ5tjpFzDAP8mdVfBsEBXKP22KKJ2vncJLhDyYmeVRo5zgb1aj",
  "key15": "4qrWbFLHaffv3xHJAfaHsxTWRiDwwJTpCmy7uhgYANZ1QABE9ZgkNSNQqRsRKEvQJxZPR5nR5Uy7asYvnZvyvdfb",
  "key16": "4fnnFXkwNfhX26co7w2bgpR2D8iyyNi37wNgGwFhyuVb2BPdP9YvCS8ELHcQTXGsLk1DdFXAtpgJhp3Q2ZhzdTTY",
  "key17": "5GL9ksDASb2dht16TWcWRj52XEtrGFjUzaAeN4ytUR7iP7UmRmuzdaBKhbpVLNFbjwT1DiyhyujVDbweUsJ8kuZs",
  "key18": "4pTg468Gr5dbWM2PeDjU2FpTn25adzVzwYzN5ijM56ABq2bBaPj122bEfZ9xn19FiC14SrW5gjQDQzjVKGzxECT8",
  "key19": "2KuYV5ASrW5XvWUcEjUWMT1eLD2QYWwdYD3BKz8zYYvYGoTa3iAevvVMofaVMJXuQUWoFRAP6cZuXQpJAKDy2Zup",
  "key20": "wkUUAFRRPHgUVKxkfev1KS3CFFVoj7VFNYMGgyWyDMZ3iijBjazDJwovVEjM65jYeAhS65r51SXj5BKbTq4BmdZ",
  "key21": "43r5ACohhEcADNv3uTjQD18deMSHQf9PdEXisy5df1KE9hpGduE7KE5MfGEJhLW3k53EUivFBZCkA6JCG4vo74V8",
  "key22": "38WAs83afMxL744UpkEGVmi8BRZB7z8bECknoUmMFZgPKQXbf4mmc8gEh8csZRqjgW2ek6m8BWkpkMFq9zVxmwAg",
  "key23": "5ZR2A6qQiQUbaz9JkCNRpwnKfABoAPjYjvMdKrKQHfctZvCJW1sCAS4eeNtHSkWXsBtaQ3RTc6Y2ZJTMQ828Sbfo",
  "key24": "4kizwvELkvxmbys9MxgzBZjymt9UvvmNzdqMqDaFLVxkJzMukKNvHLBhgYZnUyZEYVidgSsyQY4x2ETUamN5ALPX",
  "key25": "PGuPPfVZbGpkBcMmRvHuCdoPHhNbFjpDn2StLLLtumtHWCz5jBTXaRwinuE8KY6JBV9e4qXsESud97cu8WMb7Hp",
  "key26": "31T2a73HYr996GUZ68XTqd2zqVmS2XTQjix4QRgi4kueD6SsdLpVn42WKx7Rt5NjGN1NMTsBBvpWvabErDG8tetY",
  "key27": "Eor7eRfJNgBM5GdBFMVne6APZGCRAnf8ckZV8VnD2vCduVzVfPxsR6a4s9vATdPaPx83DNXDe3GBtkdvD5k5mJV",
  "key28": "4M9RgbxXEn8jVkRNcoeZKcvyRFWQEF1gNMjj9wYXg5SjWC6NDsriEpqmuFY2r3XFBtE9NmsGA8oNmEeUg7SUTRs5",
  "key29": "H3CZPrVZcyzYx1PoFTT4bn6XFpQ6VwSfHbgrSWWGWmPidUyMTgiKCSx8s9vuqudMALwfJnLWc1Xj1JoqahPvZBG",
  "key30": "oDNfVtGp67ijadURrbSTmUZoHSN8rKtnkMEfx6SinNsJq42SijRSXYM7ZNPRcPpMmnCNgNJv3xLpEE395YQJn3a",
  "key31": "5AiMTstngZqgUjQLJfUQhG9BDhdS3Q2RFBeFVgiMQaFu9gj65VZjPLWUzcW76CkkMqz2XUUWPjv4iMM99E9Xw3HY",
  "key32": "594QM5P1h9K6TqBmBTuoq3iSMDkRYHpFRSYC3rouwGFajaygao8X55yLVvunP5MxjjBeW66tuEczafmarPNvqo9T",
  "key33": "4DoQs8yKoLYLdG4r3mamQA86ma5prribRseU2qiLZAKE8pdKXqkQQreoH75xXc99Hjs6odLtcnBqnZJzzgMy4bdq",
  "key34": "5DYuEUJnu2Lv3Gk6gobfGHRQqaJPEVfhye8g2a4FY9docUeSXJZsoxtAyrfEy9uJP3WvsfnKVzuhJTxEcwbQMfvt",
  "key35": "gmmFt7CVm3RRqwAFe9AMJB6V2ovjfBc1J5RtM5QWR7PLoeJMFdkPVbK8Kti3yX1uJSDBJmaup8WFurfAg9jiUTt"
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
