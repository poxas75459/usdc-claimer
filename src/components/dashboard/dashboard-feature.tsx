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
    "4xozXrVQ1SwjyTgpdTxmrfeW4W5c9RjbKPuqw2EHJ3qrxF8MekQP9YymRBXBDtdNGi598HwkRCFTLVjoXaWkfeqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DM4CUdEgij64KiBByBjn7fpU2PtAJSz6JbSnVbg1DvvoqZGuwwCCCCBviWXouFwRMsAt3sJKfaiFpCS7Q5swUfH",
  "key1": "3cQ2CiX4rg5a5hmq7Dm3ZRFp8VgEANXyrtPK8mrz2JpbHxT86cFBoAosKRUokkwnjevJE7VTy6eCqtMmntUKAi6G",
  "key2": "4RfSXHssuxak4Na8cDqmJwAVBetFCdsMriUUz9kU4oTNC3hgCUGCph8771krkSMkiXvq9TLMcdYpeT92zvXSyfBF",
  "key3": "4YpgZUmQqFLRQCNYGNFNyMJe7PVS7yxKof4oVD2QiHUQmp9L8STz7bsNG5tkWiXCjqSj9n2an53JzU7ymMDZLr26",
  "key4": "4mWgnvJK6wP7Me3TBnrxbBYE162ZtuCijKyqXCor5hziBNTrpp8Z3Bctz4UAqJRJBnwT8CwMPGj2qeqCPSouTpkK",
  "key5": "2tnfWNkvSqd1wWoM3NRbbyAx8JHv1UHmYzmf2Z3eYRYnZpZCFu7Z3bEkFoLStrekQJZKWLWgykWDq6mgdbkpDy6W",
  "key6": "wr3AGpQJEsaRPUuTJ4kZebj7LT5srXjn7teTcALwFWmYt5akA4k2LokroW1AZAdTevzKHv59YzSffWqLmCabzSK",
  "key7": "3BWc6k6T9ybGQdtDJeuiZoMqSBojjgTrS2CWywRsnstCbiRH5LVFE5pd4GTxyvQXhVQs2NsrA1Y1gVtY3mTpiUeK",
  "key8": "5ffzuXn5F5VBu4Xz7vPtMkUWNnVtBmqBTanNFXaUQUPhY2j5wLbckAustifaqS1EYwKMaHc2cxGTbmNq4veQKGrk",
  "key9": "ScxyUq4CRWJVt8zCmfHChADgaGSaWggoxxz7SBd4YJYoyKXhg3jyXeDtx8krDC8TKuKdEpsZHinmXe78iJ78Tw1",
  "key10": "65P3UiKHtVQW3KNRc9shqscf3FLL3jyQJLEcpx4osbq8EMkkAAxq8vcWTg22qpVNUx61cHYmbjUqs4B8c9xcjFGg",
  "key11": "2RKCMvWvkR5UD6tC9AfxK5uaEvBEtUY3r7S2mRnUVG3SD7jqrYh8st3rJekbMBNbL5rPc9mcnyhMBpEFy1tM5kPU",
  "key12": "4wmb7M9reTAoXknW1VJoSBydc689CFaDGZRppmkNY5sHacekbJoWMBaN4h5Dv28sK9nf2W24TX3vs8wSXeFCt836",
  "key13": "ZL4gcQouAmNmftxcSXQPD9inh59dvApUuM8CT4RXgY997nnX8dmkuBPhA5onkxhpBDrMe9862mGnpDm7AaRhbPh",
  "key14": "28sL7nnKs9aL6Dcas9FLm6nCc6VG7u1HFnfs5yoD7bfBQw94vGEok2g6VqZ9sUJXUnw5kYN7CvRpkEnS53kd2KQw",
  "key15": "4HDiRGYpndX94HstBYev4kjyp11TvyWygo4R5upLPykAP9Hr2ErfqvcDKkhUER5kRGmbpUL5QF7rWZS1SWso5FzN",
  "key16": "4x6dn2gQudb2nMtbCDnhRi1ee8c9ktruyMqezTvyJQ25ZMzZ2NVCqAdSGpEroU8xSCEjd7PKLKwz9MvxzoRJzRb1",
  "key17": "59gj8ezSgtPYeFYv7KXMV1nMS8Xn9dWqDYATvVPTpruj1xUv1E4LecJREQudbnF5WU4LNdb8nrU35JNkmy3DXHvd",
  "key18": "2UwTAkZJbSYhjfaUtqsvo3AT57bpZ9YYv2eKFtgek6jP9kyKhQ7L3giyB4zq4sjvMHAEPvW5p2L5PnTfeDy9Y2fd",
  "key19": "2m2jP6f5iM88TCGRFfF84q5L6g3QAeHz3atSXE4RziY2x3XLE9DB32W4251mQ58WJJp4q5CwHaE6LCPZ3R1Gqaur",
  "key20": "4eFTgeDnJABzipAxJcH5gJeFK9Av9knaCXVarJPFuaFtfuWJpHm6Ph6zNH8n2iYQujShnpQX8qCzFNC3Trb9iNeP",
  "key21": "5FFHMxZ3dpc9q8PEHKpYAgTk1usXbheUdfLrreU6stLLoRQ4vMqBjoa4X3w85E4QZ4ZGDCBLZDpYzEB5nF44sQxf",
  "key22": "3DcgmgMRqq9r5hNg3es5FAhu3SP74mQtUV1A3ahonNmwgzxWaWpgTru5YQBxpu3zQL1T42WqHrN8JPzC7Je5gxpN",
  "key23": "5FiNiKeRL1eoHtzWJrcTjRt95YeBy8xDUd9YtsbfiCxukwLef3u7TCooHai2FpxHV8Lwa9s6ZhbouzG88SoUqNkh",
  "key24": "4Voa32WnsswTBnMfY9PpGb14QaUkRjWw5suhsibK3YmUxZFqu5qpRVFKDhi4SbWmpTvGrojYr7MXN4tueb2kPkhN",
  "key25": "QUUPznYm2Li2ZY9dkbzB4PZqnzoq5VdNMpQTh6aSLND74LiiqDUG3XfiKN4tK4mfFwZ1gaxNJd9mL5e93AfJbmB",
  "key26": "2t2w7KPw659LUWiBkRzBZMd7XxPkqVCpnK2JHKqPKfUiFxgU2GAV2gg7qXVsWXabj5no1oP5p3wa46VHXvLwrY3g",
  "key27": "2MNPBdfzUsQJ82j92kzhMgqK9chJT4eoBB1Yrgy5Xfw5cKsdU6cC7iGXmEBvvLGNNMd3575jLZhiRfSjG98QKhyM",
  "key28": "59QfwurZcv8ZqLCAjaK6bEwGVACT9zTqey86TtKW16zkwJgSD1UQyMsFSfiRJkN931Pbrx7KrWjqdGboGmH51nR6",
  "key29": "3LjmRaMVPF1Ei23zP63LT9Q6DEqyKZjbTQw4H1gW8hqH2ZB1nLGH3bM8DnnwtxD8zruLtpLfLHLj3T4CgpXv8Vz1",
  "key30": "2J2KRvPcv1p4iqxG231ciAT84Pb1Snt8Bf61VBRw9sdceeWzZJ6rdoT7c7YJnw5xuU62sbirQmc7jq2yqMpobQyd",
  "key31": "4DhdZyKpTCqyi9qAdEUzj1eQDFjJPBz2h6hLZVNGR9rgzF9xHNEQY93oGomq3Wcetkx8UeHvzxXgMsActqcTizPX",
  "key32": "3QuQmN6b8Vmj3NRXo2By5ZGEsy6X63RMPpoQqnHXd2QoxfWYMjxmbxJCyPbAeWTfS92vdhQ7PaimPuYBJqDWBiLX",
  "key33": "2MYATKWb6rvCxDpa4NdRuYrcLnCKHc6cYena9qxzHRi5f3zgmyZ6u2i6NyAqHk41rEmz5WhLqVLRvYm8MLeJrC1H",
  "key34": "5SNs9QyDYgTndeDkc6U2EtdcRchz4rArzwVAPoATGpNrMPrF6wCrQZ8RfGap5ETDLqpeVGqr1NXCotKhVbnefCPV",
  "key35": "4FWg46yoeTfq6eRTNs55GDLGPVPL5AzZ1T7BP317Wrtes3Ngg6fQfH14S2gezoXEMdcAoZxXXpaiaVX1qjrf1GHd",
  "key36": "2D1N7BERvVdXn3PnPzwcRpvutA494snpuq1b1Kbowhm3y4hcwPW2XtNnxUJ3BqVpYCHtAMiZbEbJd8Xgns8vuEbS",
  "key37": "2KtzKjSBkfsGw422b3RvxnH39v7bFVZpNdWsjpzxwbDTNhE4XEtzrF1DApde9ihGxRigsxNaAHqkYsi9EMwxkER1",
  "key38": "5nwhXt2E6s1rCC1YQsRG7WDJMze7vryYwy2Bjg8PupjVrxMRGPXnQjdPKLH1Mnh38u8p6SjxxKCJRYPopmWUD1aL",
  "key39": "42sMG28FsvbJ7sHb9NnrKNHNamCuK1t78kTp44HTBN8DKgJMXzT4x98h92JjN7NfFGZ8YNtMKtWsjj24E5drvPF1",
  "key40": "NKdEePSXxqX3rsgjCoLJiFgKnKJwuHGf4393vqaR9tuibNT8cRTA4b18Ah5LnAfeE79BmHGjXfNMDExv2X3LRRp",
  "key41": "4sdmw3BG5wigaBnax6XhKAfJYDfrcHvVALV6EmwXGhYwxmutbpruG1qTm7hWEyPGUC2h1PjybpTX58v6aED73ie8"
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
