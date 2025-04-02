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
    "5P2oG73e9Z8MbWrTjyNiqErjCSvKQHDbLBMyYAXE39mLGyLqcmnPrUqTbbv2WE9XfXSbhWNNhCQhLw5R2PoQPMEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEYuHCtTBHsfmNNArz4cMm3Rjy7si4KYhUtoRtgZG1fpvMuDcRfnuekb4i7nxzML6Ta8si7dsG3chPYKwmDivaF",
  "key1": "5UMTvEzkXpa3b4pHraPJcpnzbDXWwNRLpX2QC7enGyF42kNeLvXNo7GK3f8uNS7td9ieFqMBmW1gEZtqYvtQXFUJ",
  "key2": "46JyUptrsjveQmLtwnq7WTUGQ8AcRXaimEoBXuwk7jrfc9e3CZW1yzTijpam15VHoyXsafhHfutZXgeyPtZpgJVK",
  "key3": "4R2ttopHjn8nQGUBQJ7XNsLwNWK2nRgcJU2sNtsbyXYFUMbUFCEiJSLh5KG9yvsYupEFuNPntVoqttgRD4GNTp8v",
  "key4": "48moPhy28DoJpBLUJ1SfrUDfF9irVWZ9UmitfCWNt75RRZT3kwvyUXeC6TY1yRiPLTP18sK7u1AhBL48FmB4xAUt",
  "key5": "5DB5ghvtZatHFCWQAPYud3vosmEaKyaqshygk4SRpMaKcXefaM5LdyBNvKgczwHXiqX1epaZqbQouAjakqPZBsmv",
  "key6": "4VrLtNKGyf8XrHbW3v5AtnuBWw493N6r79zZtBhuVGo4r4P9YHSf2qoeBRB7StgSbZZfTgosDQ6NzdowxePn2GLi",
  "key7": "ph9NFhiJKXznm1mPArzpnYiZ8ux5r9JirPhY1rUS5pz629jcMMcsiEbGon2AbcqoRb1cBYeBJALTAw8h2dENawx",
  "key8": "3YZ5iGRrpM84H6izKABXJVmYZwcSS3AapSP61CB6nkEzcQ9ExPUzr3DKrBHqEkBG6LL6SPRXVvLCB4sB1b1US4dy",
  "key9": "5edx4kBQXMca7ZUNgNZUMNckfEr6xnkzeGvaev2H8umCmHYRftGVDYCh9Pzw4tZtTUUuhuGuPNMckS5VTSZusiYa",
  "key10": "yhxpbAFiR5F8WjMpLAv3TnHXzSig5EX9nQXL1TcZf2fB5fd2djoPMLenXpgwG43gX3onpt36bsWc7hsnqMKJye9",
  "key11": "4T9EKuu2jGxWwsRiHxycw4eNgy6rvzri6TiWUj5E13Vw9EqvKigY2YzFNd7vB5AqZG2TWKkoYQE1SsfQBK42cuaD",
  "key12": "kPGKkqi8jsUAmjQLrMc1RiwksHof2vhBMEs6zXvVBdsTEUnRVzwzUbMSsRgiVTqK7GoeCpMcoq94xYoytBCrnpq",
  "key13": "5xLJZqRzhZTEFmdTMzih9bESqFXoaTXsvK46TmbVRScjsbQVxLHMfLcBxp6NqU4NaPTzKb2VEKartVj7J9QPUwAQ",
  "key14": "4brJ8nzDJyaPoWvJxWaPYeAUGYKXjiRhAQhEYpG1VvvzWNKeZpvmoQZXWm1qbJ4FydrPDWyumZewLfxQJqfy3GAw",
  "key15": "3MyaacQpXMeeCxTGJgsVfJQTzmzZEwgNuCoLmzp1acfzW856feVknfvzAUjJia3oM5HNkU3JaDqJUQyYgJ9f3eeT",
  "key16": "zRfdgFehFpdtuEvuTiuFsFpMwTGrBd5y5vZKku1ohffMVdFJUqdpyKcLPQyf4nbTEKvcZXrWDKn3YB9ABbMLSMP",
  "key17": "5VURADDxFq3UjPx4WRKds9QcHmXcfvVEG8ZGpbV6pvMdRq3c1TwLwQtan7U9bYzLSp4Um9vsHjvGi7sxRor3XoGQ",
  "key18": "3GnC48mri9qcN1L9gbabP29gEs4zwALde3BLCkn4VNTBh3ZVq5yGuQ9GN6onY9dp6trxeMbLBmc9ZsaadQqnaLEE",
  "key19": "CBRwD3SD4GeLznUidR4LNVbRpUJo6jhc8ynRwtMui4kKRq9vBPcDCfjy6X9LVJPYxggiZLrouu1wDzUk5yRMmUa",
  "key20": "2P6WG6PE7ou3opibMRQ3Dk9jgeHpF1KLq6HHx8jDxKco8xJdzUf77Zm5bQWmPm7bXwpeKswfd8gcoSkc71SgKtUd",
  "key21": "5zerJh8QRXFK8tHVDCGcJdno1iKf85qsibFt97y8QwmNatMkJmzweDswd3ryXLaws5o4xPELrd9duQZ7wc5g2WbP",
  "key22": "5Rxccb5gGYaywuoSYPiN1fLS24qdRPggLPvYgZ2MpfSc7LXQKDrLM9R4QBqWMbXCPnacomZ3VfE3RVUcA6rbdts",
  "key23": "5bnYEmTcbggnoJiW1AaKhYNUqUJ4gULcjaAxJMzKyHfsqXrHzN2jZ6SedA3kfhrPgFbi22g9PNLgahDmhStYaLhL",
  "key24": "57TdVYn8VCbCLWUy4C35r5a5ASjFQpcVhKdEqDnfRYz1wMyksYAZzFMiLWPyQMhGc7rQpkf6ueCXt2ZxdySAsteS",
  "key25": "EuWHs5pL7T2CcpcD3WeuYsM689i3qMrFvtgGyqRoi9NYdpEcYv262zZcUPzC9Yiw4CqxWwpnaFEZ1UhFo7c8dyp",
  "key26": "4CHy8kAjxmx3miWr2me97e25Cp6hrar43AEX2UoJqshAxV4VMxrnc4JgSbkJbpwC38qfLZ9MyPnZV4Tkuui4yQgJ",
  "key27": "4DbJFnnxSGUkGiZtWjEkTRwBWPUebxXDbtsosihmDy62UTdMM8W2oFmZh3kGiLCVWNBhYV5G3B1VWmUDpKeN1mxs",
  "key28": "496N9whoVFbned4ESwEuBU1LGL4a8iHjY983z5yPP5QXT8V3o1shP1Pz4EQA4i7K9zM3FkCMhY674ANsBCgmETwK",
  "key29": "kn5F6sqE5KipKrrUUmha3pmDAAS4zDBz32RjTixrhcCec7j7nXchuCbKmH818dKXLz47fBzYmD4kBe4GYoum6CU"
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
