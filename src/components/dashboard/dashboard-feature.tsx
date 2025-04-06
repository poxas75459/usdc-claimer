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
    "3RWVPVaFNYFgaJvMFEYwfJUD8eAx35DZhF2opPJv6YTX1w3mXThpAYR5TufCgwpkEqtdMapQhgZos1SPn64we9WG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ox86Wq77M6LY1fxdQUGba2fGF2gGQ7tUTmTLrZrCXfeDD8BcGmN5n4894iciDJoLKJMBfbjYetmV6YVj1LZQ6Xw",
  "key1": "5GeYmC2v7XQZgA8F88snd3iqHaZmRKECthoN9oYfNYUR3ykkEENRvw1ta8v7bF3qif1MzLpyBvbqtkjTS7LUFQKk",
  "key2": "3VziuR1jFboVL7QxzDhwzTf9yC1Zeu2NbsGx9skUA1ftZrW3Vpv7PYueMLr7gyYo5qbeYzNCtHNBP9ovGbVFojep",
  "key3": "2nzsCTpdEf4krRkMVkNroqjMhX7eCV9Fbe7D9WHLmtyygvxB7okwmyz6ZdYse3kUHVnCBTjN5UHtGBgDuRF8LHKz",
  "key4": "yM7Ms78wDiNAk16SXXQX58hhFLpRA8Km7RQiU2eMU3NBHdU74R3T145fYLLADrEinVuyYMyQZzhaDgJtbyh25Zv",
  "key5": "3bF2jundLjuzUDGzVTRB6diteL2w6aP76fC8Q9q39ATFdgspieRKTN1NQHP85bFbfp2wFMnisTdwCB16BQZ9vBPR",
  "key6": "5gJrJc86drAMLyNZYbS4TZcZ6KETYHa1gKE37rJEjSoJz1rCJdiLcpjWA8ixYpN36xnS13H59tgAtmzJ9RqxcJpR",
  "key7": "5mW8thxHTR1cMKoK4oiAzprmQphShkCmUtuUDWHdjBJY1atNBc6dko8o8DZsSanM4UyUWSWEJfPL4fuAeUV1M5im",
  "key8": "4J2syxHMDNBqQ6VtxB5b6NJkRNNUyew6ySMLcFUkGWUNcWGgDN36WQtabWyDFtYbYrtMVTWfGCHMHP35L9AM7JB",
  "key9": "wCWpou4qHG69kcXNQH5UGtqmhCqjPMP1FujRLiM384fwBnfTPS6aGfdNomu3zMHSDHMQVu2wx5jx7GsgN9cNEx6",
  "key10": "2LEmVLCspyizJmAuxpkdgeQC4CSbZmd7UpU8HSiRvDkRSRzLYEQMEhc6DVffTunqZN4NenUcyk3ELUJesx3WAku3",
  "key11": "3zmMcvryjccvwKB2b8xuRwRTAhW9RZpRvfLS62WHXX7NFkGF2eEtyF484bpVbKRnTLL17CgBUj6bWrWuu3SgcKmK",
  "key12": "39q6Q5w3fJHkm9PDC5U5vUxTaK5kTucQBt1rj4BJwL5RpHrT5oRvcZ4R2CD4xKebtkzmgUoPSiGP7NvBXaWdnH6H",
  "key13": "4gEHkjnPxQgNdox4goVioJdkzAYPpx2mimMo91o6vXzQj85wegDihaC8AtoGFGGkdgJ6MH3UGzSXckh6e2ZtoW2r",
  "key14": "33Nm9gt2oh738FGiYDYYb6qUTowPiJ914vH2U3wg9fYcmggJ2Y4HbkFR3LaY2A31b3pQuc9LaZJUKdveKTtZsV5p",
  "key15": "X8gC3UjGQETHVB2Nh43KjuabBr7JYBaJiz89KUpYMFGRY7FQ6p9YidzLStjxfF3bxUMJRiHsZQrLChrwhJTBtPK",
  "key16": "299Egp5oykC98f4jxfW3wbFQreGd1p7M27KWZAkSta5afNewipoihWVbo3GnjhZ4B3zg3bsSEj5zUy8i2vX9HLwb",
  "key17": "62MDgupCkwxoxeFbgEVckJTFmUvGH2wY9VF4NTChyNervvMfQDoabC8NHXAnyB6ScxxTQSx4CuPVoD7rzYrw7SkP",
  "key18": "23g24LgWYehbRhyw6HTSYVWdKyZPBs4x6XhNYaNCjhz3VFev8VEsXdB3phUBUomQJd1vEPBPw4YnmHEdeSMpW1zm",
  "key19": "2gGPDcF6HPXjXjgbsBXfCh8yHGCpdbnebQiiVadDbKi3RcbsNpAd2QSMLzdL2ALKSq7AeJuVeSRwoKNJbSzy2tLt",
  "key20": "auqqm9idV5DpLdbSYP9d4fd5vkFDfLxuxtHkUg4smXMLdnYWBWd1PL5gWYUQBHsf2rihxxECCBWvZ7yNQ1ZKUbS",
  "key21": "64soQeyvH7w9pRodMnBXpcZD7hKxMqunxqpe3wBTawYo951UaUZ4FAzdPAXRxmuhtZtE4UcXvpwXyDjvfqShjGwH",
  "key22": "3tncgZcMruTa32iY4QpNp2bXcdgMFT6XiDmbQ1GAQn9dDK8nbSaMh4oyEhksZsBFbSzVjTPiJGcHzqcdNHmqAsUV",
  "key23": "2EHbt6XKvPd6eaw9msVGxDZKipDNweyznFTJpF5PFepqy3RGXmHCzGui1knw3bstmLGjyTqu9jfA31wH5mp9K5qZ",
  "key24": "TDt2KkaiJsE1auvMNjENnavz6duP3v54SXDJfonkxEzv3geHXKhz9nRx86c8ZnYRqRW4LbYMiKabxh6iKx1N5t7",
  "key25": "3L7qgroRptr74runxRce9d1u6Y5kdYYafkHxP3GAhbj3RwfVcZ5nCaiyrcLupkzg19UK89qLmAGF5uBui3ddawqN",
  "key26": "3x67c1Lr8nZzTKXbibzikJ8ymRgK81qTL4qEc6CMzU3kMs1Vo2aPc4CzGVEZXEFPeB8cSCTpiK5Y6J9VZr6Wf3W5",
  "key27": "ppwCD3io7cpHKh8RAZageUwLjmrbms94omSZUo1ArbaLSFmbHpNgCa41MJK94NsHos1nokteF3KDAjbj7nEQthY",
  "key28": "2WdU2E9rmwyJ2uVKTfqCvcsP9SWzA91RYLoSbG5nLQ1jZ87EHskfVCQvufRysH64bsAmp3BMBH5wy54qr55W1aFx"
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
