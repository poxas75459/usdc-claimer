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
    "zTM9bLKKGRjpWN1M2AcvykjaU6CzZZCzvTvAEp1zRbCJabAvia1pHc9x57wbGVPrGdUcusea6uE9xwaWr9QSiRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2trCVJeu8rBcMUwUnDDq1KdEW6ZqqDepbMDWq34jr5zzyudVoKTnd77W17LFpzhSejhtvXppdm2MvykTeC9XbbAS",
  "key1": "3LECZVTBzJbRvSkaXoRWRLkQoLAnxQeZFJHF8sdZmFrLQxtb6H73tfhbjBAQfWJAh7oafJzPGR59xXvYUVKc36Jm",
  "key2": "5tZZpuLQXs3jEbKabqoUhWUdD5yPE4f677genGqRiSqmMd8pFmUwZ5joXXS6WdU2AZEFHq7PqNyx7ikFY167eq9u",
  "key3": "5rTW7hvbnjjYKVUEu6zZBq6v7KFy8dQ3tniHbtMxY9f4sBb5oGS2DHd4WiV4G8yPbHJ9zB7gsFiSbcNsz2JkyGiX",
  "key4": "7L3SpXHdzfvCboVNwAjsgg2RXrx7ZxXtGDsqNSndX4spGRyn1BCYJEUwP8eCRF9Bjm3VuMNvas2EkGLuk7Sfr3p",
  "key5": "2Jg4yd6A91MjXgEyg1sd7Utu39FaLmqDDmzNkmKLaddQbnL6GdNkebbcWffVs9YNKpLPkN96uBjvT2MfDdGYBdvs",
  "key6": "4d9iTZTnaYzrGqcyntmhZ1fWxgz4EuxWK4mfoTcs8W3Cbvr8JW6FvYNr5Jf1iLqJr19ynjdAFuxLJEa4sAK5ageP",
  "key7": "rm2p8ks3MD3cY1WJ2Bo2ebHNRtg4oMGZo2sYpE287qp2gJ5f5QmxnQfsC1wqr6yL6QQGY8wiT1dLc4drakTKJEd",
  "key8": "9DqFQEe2aiRFjKzhNoNpRNgNirgPdbRzXsgDe5K77KA2b35PVvoRAnM3XcQr6W4SjmTeSWDeZE9REd6GrkZnTDF",
  "key9": "211GtBteaR5Xhbosgc2nWNpTEpgHFH8ErVicndAYQ2LcCPVPRnxWuuXVRa9dTscKkYfWd8ZRBYzEWR2n1KxxmY3A",
  "key10": "5zY4rK6QoDEsExKwbpFFhpxZfNP3ZLRpVXu6oWkjZjgmE3xRm3XZ6aoG84ZWM8cXq6rriBiKAg5kB11hdL9ri3pX",
  "key11": "5DrqtCYDhzKStt1yRYbnqKt3TQaD8jcVZUpnYTZYeamXPdcu2gFwcNBzdv2h889DFYPWVzrA3jT7LT589hXi281t",
  "key12": "5kZUrCJojTKCZHypun9ytjcQRVZgfZ3hvnvwwTBeoZUh64dtUnK9gXDp6F9NNPT1KiNp64qpYnAvSX6cAv6eF6Bu",
  "key13": "58BNX2XYytEibN5fyNcpPx3kWjiTVaKia5UhBzXCrFr8JbpshL8Sm6TfrnZZdryjoqBFpaCn3Xf1c6vmoyAEsGDc",
  "key14": "3fVoemNwtgXdXe9koANw42rsS584j2ePu8mdHoYQx2T1NoY8tWJdjKugJ2VvZcQgmHBbUHtM9sTEC8vVU28ERWbb",
  "key15": "3rQgfvwzSsNKomZCdU7rAnLvVsfJdsbZ4uiTMyFNrFPzUzKtT8ooiXphrywkMyPhVFXmfP6saZV8sLi2SxSQZoso",
  "key16": "497LuJs3uqBMct3Ax4fkiRDb5tQMuC7ukrwHCSfchazefuGg4CW32yG4qvSe8XPHw9T4XAJXrbuCcb28aiTroVh8",
  "key17": "5n2XY48k6TLVMiymBTG39sykvFJ9inZWQEhEEC7MnzDqV1AmvCoTjZoeQWwWg2hfAEMhTPpEdsTCDyuAbtRdLukr",
  "key18": "4ngUKsbQVkx2Zy1u2SJ1XP25utzKHGMFwzsXsaPLum1DLEyX5cEH2eaZsY1jD3LoC44hMA5ynEZ6zCMJWhizseDg",
  "key19": "3sqBJGZJBXrekPo7A8h6epuKGau2SzRBMiHwVVVzHi4N7k3CAVTMfUoM4KWs2riiUzbCt8R3FSmMsEaRAQSBZHmz",
  "key20": "66fVNTEtEXzswPjKPBRD3MvkkteYzFGGLMLR67SruVmA6KdgnkvW8eFN6SDm9ky48xc6ZLurqaTtN3zuWieqMTEV",
  "key21": "5efkX3wkDMXegJC2GzWwbztbY2NzojH61eeUPJHuDg5527kF2pT6MHrSSsCWvKUKwUCsEEWQdSbV8Rc4siq1ed8i",
  "key22": "4FVwVkkU9LxuTd9LGFL8rtVXi82kLwoVkYU2N2MtDgUKGjea9yYbwrB2SttzqstiYRW9uKEbwPv1rghqh9fzo4PJ",
  "key23": "34xec1SQCatRt5baBsCqst8NLu9j788ofNRdVMn9W8RnoZiSq851EYuQu1qfhC2DGRqES6QsxMRSMjQB6xs8wesp",
  "key24": "36dFSS7DjMEMM7QDz2ijEczjdErQ96U8PK926x4cA5sBm1D3SPNoCiiCU2n7Lxbpjf1iPUCBcuz7FxXrL56mQo9A",
  "key25": "tRmoRMUB2T67kZgCqNVgXaetRxRuWk5ZKJsyDKH8ezeMLdwDsr89HodmTZUp47bNXP67JE4PVeMztiHWgcf2288",
  "key26": "BnRBnjEuWtTfKjpMJZYpWzW73JTBNLCKoejvi9W2tGhxSzwnNXcHno83SoEooBkqqHFRUUZAvABoBWZUbEoLMia",
  "key27": "2tVJirsjdcCRbFcUQYAkhG8m7h9jFmeXbUMwJim9hikoxMnLYb3JvanfUmADez6yFUp11T7hh5biseBkjYCpM5WA",
  "key28": "42snS4XiWefMXaCov87Py3XjNSvEkK4qjJ6GUYvN3xKUpGoKgvPym5mi7vGqt8WbsbZWHHU7PnaQQvbjYUA3ZTpS",
  "key29": "4n7thwj6upBbKRU1SkJ8dHexoRMamHhcRTWJfjKsw7SiKU5ba3sABCqHSYUtj3sJvbn4eZA4vtpMhXK27QEZvjbF",
  "key30": "51dBn1xjmiKZXqRTRizNLpUe37LQ5QZUA4qRrqhBK8qcRBpevXKeoi1G8PfrZ2wjhP6GeEsAANyMAq8qsCUL9GSM",
  "key31": "5PTimg4zp6dCmLEK4NdZav6Vo8P7anX4LtUAX32k4FFcXmEJKohiGzaBmafvTkdUkvzaK6dYF1Z8sPpBobRFqFgX",
  "key32": "3i1zwhyA92tYRx4tc14Sht4idaHXn35TvDcQzPdKGLRFad24g59e6xPA72R9wyzuYFYo7RmsnvAsU6m3aX13RdLG",
  "key33": "48ud3NsKG2oKnwLzyDXzMXnHQ4nqVqCwjvFqSp6V1gbLzPy7Bqv9xeGAkPmnaHPumqw3g44Ay4xGxXaUEYayuWTU",
  "key34": "24cFkNYpUDq8qhZWbtwXhvCN65so67SoBZV2wfzbksjAhXtzTGqYeKo5EVipajdXNyV5bwWghVBq7Nx1cd8JoGrr",
  "key35": "3PkBW1up3j7qvsduSNdyg6sgXiPYg1UR8Vzxx6fUXDJ8EphcFaWKsZCSxWaNXoUqJ3RKdGycKoivj1h5HNiHMjZt",
  "key36": "4S6r8bXYiF6MTmRDYFJyEviEQmAdF94122ysZawScWBQeLXeDrjQe52y93cFwFAbu8tFF9rsvRQEu7mhn9535pCq",
  "key37": "28TrsEFuf544QygKXqNHJRHYHarsBpwEe8ALQm5C6CU8CwcqKb1NgLNYZvA4N1wqJ1SZQdcbUvXnmd7K9ikmmaw2",
  "key38": "nLZFVUN9XZSzC38M8TCUqNpdQDFM49Whriv9g3zSgDH7gchDh6JrdnM2hzr87EfS2zfh78Jp4ezg2MkP2AFDSFP"
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
