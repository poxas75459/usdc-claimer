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
    "2sCA2DSCdPyPJp6v7ZtthdnqJXNwNuEZRzxt8UUVpP4UCdadaXR5Qb5vyHjP64jnqkhFbyF5gPBZzNFUTXFPiuMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553w43A3kNBCZYgC7yqphmPamknZAEjyr4SqayUALVs1sF3WhwTtJVeZr9Drp8sf7ygqqS3SozX7XnhJGE53FfkP",
  "key1": "33hj7jqcos7jj8oEofGAz8MzMtHCtzwYUw4JAg9d9VL6PXnvxv7uB7k47nwKLceX6rFmeaerUHWC4p8QfV7EEDvt",
  "key2": "5u9oTbTNsy71NARtkP3izWw9fucZrEnhAyhLEYggGEJ7YW5sbfmXVB21FJaxAMPvkvPePwu98bB4b5xqb1ibtD3L",
  "key3": "uRifxuEGv5KsXHsuhqYf2ddd4AEvu6XvGXZxkGEUgvK9GqrMuvVqBkJhBZyTKRhVSmY8GHF9AesFcYhUSrJYCRG",
  "key4": "4MxGgwLUPJxBxqLaHQfPV57QXsMDgjwma8w1r1m5oKKXTda728abQUaV8JsziJw21fLYGAkodsrEj8B143uDcBpe",
  "key5": "2pp3WJinQbv2Hg6xmJEd1veCKoDg6AoMrH9829sjXzs8xwghJdwtkd8DwtQfbEAbmtZfWvHZe3Uq6wXM7oPXsbrm",
  "key6": "2ufqqTXZwZmfMMg5j24ZbwygQF2RNcxhDP2nwbAG1jkPfp3oBik4kLKb8bAx2F5RMDvw8fRgVCHuHpzLXRSMJgPn",
  "key7": "5oMznBcL1DwQW1TgT9EPdtE7eDd6CmzsBbfFxeZUqDS2NdMsyjfENcgy7EgUmG17Z3pSJhJMrRhqCCCcjXJd3FsA",
  "key8": "62EzANab6bw7Qc6oJDyUdMHvYLLpNE71z1c4nMQwehqw5xfoNqtrn3W994bjGKhU7GWM6t42MuqsJRB8ZZZQDLL3",
  "key9": "4KqJU3YkqERs18J8JD2c5j2Muz4NhaAYU1GB43AScJ5AFA6opUj4Ru8pELBZcANaCWoEdiXFFitoUyu7EgCcr35g",
  "key10": "9YPwxxnUpqPYKnw7qWejUgKZeMkjJGsdchhfi8x8PBtt1HaGd1sEhn4ZFKB2f3NAyXwjei3wPmSUYWJUgqLVr2S",
  "key11": "4Fm5Qbg3KWdgmRo2k3wS45J8VjPyinjGxmhAhFNHdqVSasiBTrUBCtybkEUgUWdyJk5hWYgy7E41vVrnSzMX8P6U",
  "key12": "5xcEwyvq6eSkrdWzX5Ug9L4f18CfzVrxeimNgzPAYSg5zjLRqCaKWrcnFj3ppX2vVPCoQwvEYSuQH1KUGBT4TCQd",
  "key13": "43wV3ZxrXFBA6rks6q98AoH7wfUcaNepLoNGCHLA5VZyuWqGa3Yney85U6WfgjYDvgAciqAUk6tgd52LnK6SYwNw",
  "key14": "29Jd4RC9ESbNpc5AZVcoUeZLgJRSnyBoW9c1qDUpPSmgY3uNnGv7LhBasKSLLU8zr1aXUaLo9eNXcpza3AvT2hhN",
  "key15": "2z5GUTCZURhVwzjfryjLdo1148N8ibNu8kspjBZXVKaBG623tXXtMcr16MZzyhDtpuwwPgJjumYVKSA3ftBuSJ45",
  "key16": "5yv3Nqgvhn3CUf9BJei7njeYY5Vt6EHxTRdhNSdQBeFSgo9CVojTCdg4cqANCzNQkBNqFKM4tvSuxNKQHVffdEiT",
  "key17": "5Nvco9NoWuKy9uZwShL7UE7LLggyuecfLpYhmqW1bmY4ZS8zTCcx4W2JmCYgqFHk8dChhG5hh9Nwkayvg4mU7dS3",
  "key18": "29J8ycBBhKEBShXnA3trxfMZsPbmF1ipmci3Ck7yczLhBRrCAZdcWm9DoN1Goa3eHYNKLvN9i8NkBmG1scHcyXzV",
  "key19": "5vY7qLadaJSFQ2ibPHKTK66djAjPmNSc49vxrhvEnCr9ztc2QhCtJYDxPwPtnAU9zRAX4bKRVpYWs3MqBuaxiBHD",
  "key20": "4ogJV79Lem7tmA3Fwup1B4NLMwxyasMvXjM13APYXU5WB1beTA8RNSDCV3g2oi7FWBWR2GGS4HiZ9MJd4jg1sZ8M",
  "key21": "5vkJ9tCf67vXhaVyyNuCuZwKn8w6wtuipMDC3eNo1NmFcKYGn3cXXg1fk3rbHqcnuMhTJmDYjWiGi3ngTDyJUpqd",
  "key22": "p9fu5dzDfEhBRtV6fJyQXUTPNfoHFKY6ovJM43763XF9Zu2sk16QVcUNY1GxDKzS4N94sg1B8REHS8cw6v2iMnw",
  "key23": "3eSHhUSbwvHQLRkdu4UYNBB4Y7ZPKN5krdgUMESrA35StkagDYTjAet43xVjzZQvocfUfzeUdth8uFPZmvDZXGzT",
  "key24": "643cSjnBz3coXqcq1UF9cQpySfHZacdvAt8DmTEoNf2rMa8UtbpuQijCFNwSBchNQiUAyBzcB3mpmD4XwtDSPpRB",
  "key25": "2emR6nWuozwrN3nSPsddExAb8tv4xpUk1MfUW8aF8T5vpVkioWtvy4RRHzsLvkQvQoDcTuCo5HtJrBuEQpP2GTUy",
  "key26": "41kz55ea9unSq2dwFzgP7AQZFb1PzJRFVAyoN3JPGEW39DW45rJ1qcbtm1ZudFt7Tsmx5JNM2UzdVF1DCvy11uXQ",
  "key27": "4b8sUqfFdRUujfRfiYP4XLtm8BzBAf5n68S3p5w579gQqZzZUf17rEcx5gZj8xi6mdLVJLnGybNpGLdXRdFKhUd",
  "key28": "2vJBei5Ti6v1NbGk7F6k1tRhgTE7kgaKJ2btAKnnJWL9jEqUNErgd6c1DYrN5234R2rJtKYyyg6TcPhac1i948Mo",
  "key29": "24DS28fD5jRsK3H7J1VtxspdYo8saTx9nWoSzt7YEjGeiD6SXfj4mcf2S1rHRKjNRwA6Mwny3Mu5USNXueiynTxA"
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
