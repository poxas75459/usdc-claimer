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
    "4mHePYPYBRvPY5PUZyXArTgZVZDG8ZiV4ikm4mbZRm9jtBSh5C3oSzWzTWVmbVQQA6vEpj2FgTrrPJ6ymFJoLQDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4qisyjwcL9m66hBGNLdqLMfhGy4QdmZNu1D9VKpUoHBnSmjXvJA9y1SYeYCbDJ4V7Ud4RAH4mMVZ9cRkxXSVBw",
  "key1": "3N6fsQVGbrouyct9gPFgsVfug49ix2JrBD4Yh8cstJh4Xb4bwWQbvyzzdmyAoJbMq1CP43fuFgSCkcvnJaDj6gGH",
  "key2": "3NS4dZu82v9oJ9uwLoGFoAuE7t8ww2e7vKZwwSoRhr2TFb182o3sAkiaQviLGCXKqbaFxoBuuGwet1qum7SrnVLb",
  "key3": "5xmWZ5tbhmSnGGkLw4iKy1jWpp8uv1bntxGV5hkJrqHgsxHaxxptLbTMo7CTTkzPFAADDvPQBF5QsYWHRoBVjwRX",
  "key4": "anjHtRZSFk64TNX4yEFPbN8f2QfWLtFrbTzEqNktDxpnWtpxceqcUkMvg5aT4tRVeyhXExAUxK3d9HN6mJQncTa",
  "key5": "5T2eavcAR5VCQEW3uhUtyssiUJYYJd4F1WE8NnbtJwaK47fe5fWzdNJApGakuuywJ1cxoRPHagfdW9TcH2qAdUGe",
  "key6": "3eLRKj2dLcA9GLL5TSfTzYXnW4zWqEkuYbdRMmGLssP1vY9ncEZsFoQ1EppEc4qJTSWYk6BHQYDaoxqnVLc8uAUg",
  "key7": "5CCh4wexcQVWyRs6vduKk2w4kNjPEG1Gr4GCJQYNFN5ZmeDHGSSnJZaArV6cEoFrdw1YRF3qj1TTP1JHxUWTL3SF",
  "key8": "39rukT23hzsNAD1yLMq3y51vzBtHVKATpnwdUCeQ82qrHYPsVVLG3jnynapazdy4VGXgN48sSmB7XTBa8M2AGY4T",
  "key9": "3AqektJPRv1bdKuLpFqwU8Th7KpzTTb5qAjF2f37QTkXg1Vq4aRn25X92JGXUKNhY1yHcmj5PW5aku8KimEYS2Kr",
  "key10": "5rSMSNnmice4rCctn4pDyQ1qofya1gj2mdJmQJTxNGabjqNg738iixjb8ryee1PNyiAdA9zo1GyKGJzhwF6DsxfZ",
  "key11": "u1n74QCZNMi7bJYLqouMMMJJ6eiQqmBWApZHz1uFdEFNRfWeQnbPMVNdL8riWxM8vcHSELFtU9MFpwyLaYtA5Ge",
  "key12": "4GVSF6i93SfmzzXGoCFi2gr66oYmxgf4ejJzz5zGCr1TZx8WGTQcarA5W7XcVKxunG7K7VVpZ8uWksqfAgNfCUBY",
  "key13": "TidPuFztd8rjU7vEDhgzSnPb4pDfZjrsDAV41jEfPiH2yPQoBV2jQ8jJymsArcWw7irfZkxuYdp4Nnejwh7aVXQ",
  "key14": "2MeTWBR6YT9MeWZg2pnxEp8LdsbZ1zLLt8mAFTttSCVnvy6GJPpPpaE7BLHR8mU1JHsCmbdZpizPHuSnUtsLKUam",
  "key15": "51Rpa17FLYNJoUGih3ymmNNLz5nY17GPZW4UK2uZSn8eQLzaxUXdy9nxneAXEQvUfNZEtG8JQYKwb2S1bXRKaoHd",
  "key16": "5oCi744pTFq9bAr5wgYMe1Lb86Fd7yR7DZ4aZrFLPAqNgmqD2CphyiREshRsXgo8Q4Ah7Ry2ZqzVpv8NUFHxxawG",
  "key17": "52thbJ7XoKV5Df96GHdDxY5GTaEuz53wkrGLes6vPZT6RYtfYfKYvLisN8ZPheWkTtKLkwU8EDxnso7Vnrs7Evid",
  "key18": "efK2D6UABp9zWgwnRyXAeQKAcU3uxfRAmA2YoUpGbBjdxhXAFvTHmgBXwVjpj5WFhT9v7aMuWMGPUuudMj6UuFV",
  "key19": "4uzFb2QwAEiY5dzNPSNWFLQ3djh44HNMCrDpMbPqps7bJyZyyqBVsWyQ8MFTuJnETTyjKFTGR37cm7c67QkPn7xj",
  "key20": "5k5BG6Q5dtcCwcYVAgUHeJNjgNh8xPxTA5NeeHkmE3LrLxxjpYTJK6F8pqeWBksFDgQLE5CGtqDiE1qC6NNdmfXJ",
  "key21": "2dVFPsEF6aDAiuR2gZTpTYo3XMqbkb6vuSPYF8nawpeiXCSu88w3PV2ARkFJ423DteaevFu24eGArE9AuthfYvRd",
  "key22": "2zxhuuAAgRGQF2e3jKVQcoiXwWcdL5RRAuTkD95xXqvwA7kcVLGK47ugc4X4gL24iqi8bcL7SFrpyZ3KDq9RtViV",
  "key23": "3ZbG3wdM2i8DPySTJqkirFKE8A8jUaqk2m9oJjy7tuNNxjL96w5cMmGP645dbd7iCCaEXh3oFP9pcEhnjHi2paef",
  "key24": "2sSi7WNTgi6unTSygFerriJ5Cs4LLNrEGEbeJSJQVeFibx48hQjP9H2idEz66NGikDnCYXGFjC4fPUGQmPgJXepk",
  "key25": "2RZ748Jb8UUPUhRPohMkWxEEeeQ1C3nHjQbTD8QrNokyritJKTaHj36Fdf3HjDa8d5suRSkK8abgPyntTXjrH7xJ",
  "key26": "43RzXG6adQqdyGCfwyfFze73dbb5ugmZL2tEXge4wFGX4ck6TRoeTejj9V1L1nqReCGRoc6a4AcGxno21hGenqR",
  "key27": "4F5yN9WdLDg6N8zyR3F2meJmcCEypYbXkwJDWRNBcxp7gXnoy3euCWtmjvr2SoBRqQ7fFQpJ6wRRmuCUyeDkPn4h",
  "key28": "2c4sTfABrNNT6iUQpyrCnf25iKmXPDG5VVw4YAN7heFm8CA8tJRo5FoPYfZZEZFrsATdRNJij1X7ePM3Jxi8tBZm",
  "key29": "5AWEDWch6qWgDH74J8Hm8VqtEb8TG3mosEQZVYbUQHa261MiKvMiq348dXcnG4bWAcz9buy3kQE2c4JF5QYMk64S",
  "key30": "3ohHCGT36wJXDBoxesQZ6kj7AhsJWFU6ktC4KJNuvsQ6rVKGsktept1Rt4Azr8cMGc6wvQ85rn2TMLgbq8oye5ZB",
  "key31": "38gk1LhtbYvkVZgQd3Juk3Myqmwo8M5fZf8JmrggajP4uAApsPNjP8qkBWSSmVxxhZf1eaFAtQeL5bRES2yDsohz",
  "key32": "3E1uuyrRGNqohnrmQt1qo8iWURMQyayRh85W8vDHPELofnpdHuiC8ebJbcKKvCLmFdwJ8Gozg4MK2uvsgAGt918P",
  "key33": "63CpjG6GKxLZun8EoPab4eG3xx844Qayz5aPeegKM4GneG3kYYe3BsSRfosJAkgJVJL9h6EnzXj2JuDYTTHK3Cva",
  "key34": "2iBnmWoPre7izJsX8KvfgBbs82EoUYPjW7NtYvAzGfWXdVZ2czJ5LR1BxMupQQfzRVxhmkRSa4XBaheh8jmWMRMW",
  "key35": "3hHDZUJaaomHL7nchdCQkHbJEom3UdCLJq7gcJy9GeCbi9AMYJPEtd9rG7xSAiDrwyQHzJ5bMt6weyzPbBWjMtLi",
  "key36": "VBZ4DC8YoyQxUuYHCCa1fiL8UBzgy8WhFKHCy3GKieKGF9Bcm6wo83gXnzu9R6giPNJdLt4b44sXDVJjziy45bK",
  "key37": "2hUFqHnd5gUREK3HjWiRVBcmvXBCr5btLK9x2eWTiEmbR98kSxwvbxsjUth931nZbg9nAMiCkzYWVgCCdQGhUaCL",
  "key38": "38SvcYGLQc3kNejZBv6v3Hrd2rvYZhXrMqkUkBmKr3LziqhvET292jZRJuJRYhi6zgam1KtbYHSEaXfzoB6seRKD",
  "key39": "21dF8u9ENMU3qF5ifN2wgkY1uDBpNnP7HboYFzGWEjj37RZAxQkREP2jMaWr2MfTiRQRfprrRZ5eo7eTJpSkdhQs",
  "key40": "2jZaTjpmFue3DLM3wXusqJnR9kfaw9zF52s2ffCXByPqfvTbQxeW8eLedExVvNUXNTDbi5JVYTaCqvHKmi2VsjLC",
  "key41": "2pL7yKG4V3xiDd6ud3BMkYswRkyTkLw2aH9hSxNu7b98uvNvF2XKbyD1XsqpawGFZbMxbxfEdyy4APH19ys7g1k2",
  "key42": "2RnbFxgjhTTeJ5k4VpcVk3cWpLXQs4dzM4zJcM3um1KLnyQnDkhUeaeeuGpQXQ1YHucVxbzxUHNMbrMAPudr7Fty",
  "key43": "3X6gje1F5wUtZJ5W74wtVyZ2wzGJiWQ7qfoB31TTbNR7PZ5RMZnHcaStLUHLngbCpoc4wWFMJg4KwGxn6MheUYpU",
  "key44": "3LLXC4Ju5mJQqhwieuojg9zA8sbVccoHb5Db7WAe8rYf3KdbiTSB5sWiJfmM2bs3VeXs2o4B7TVBGigtHyoxdnSd",
  "key45": "5JbqJsSN3wPn25GuuGj4qaJFHsCdm6Kpe8g7AegmiRB2NMVDNWk2bcdCJEDTsCvZKZnmhVNfYMo8o2WCMEhKVjiJ",
  "key46": "4nVLWtGyyZWQcFRTmHF994cMsSoRoGiD9KVkwP6km6Ab5tNB1Q5PakKCEsxxswCsSMkfcrWEueF4zYsFDahM7MAt"
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
