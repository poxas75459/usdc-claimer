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
    "41sXAK6Dko8UDBUPEwiCJnGZcfYzzGPtydNYihL5MunsP4isuzt5zmUqwtdwUrCaDMnCDdr8pZbrmQz27y7nycjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDdZ9QAoLHaZ5uBg6kynfgq2c6r9Un3t8SW2syE4n3CidHaHrbW4mRsSJGFn4jZKr9pz6925sXJnz7KoaTMm6by",
  "key1": "3jxDGz3TJxMBEiewZRHjVZ59Ldf3KeScn7cNZ5oufxm25CqVdCBQVktnXwCLwxoDwCBeTtk2g3CqaMzczzxi5ucM",
  "key2": "22vA6yZtySNKtSHRniUELVtJuo9LcvZgeQzcXQFtmw9c6VR3PJ7QjToEV28Pm4twA98xCzYagg8HD9xAa1YUohU9",
  "key3": "4NoTYDD7ZpD6mueFi76CPddmuDaAVK4Z1yxnhKSLvxttrLp494QuWNdkxH67AAXjdrCfen72vwKaujYksstxEreA",
  "key4": "tJzLyabtkd8Rwm7PpWsrtvqmxWkWEvnw8LnnspXprRBh5j8W8Q3eQTD4xy2JjAGEeeSxMmPviGYMHH5CLJr1jV4",
  "key5": "AG5BzHjvFNE99G2Kxa7nwmSKKbLGQDYf8TeSmqHga15UHo7YFsHDEAGpsDHydeErijxjaZwUV6wr1AHaH8AsZsG",
  "key6": "5AFC5b7RL6xG4Mish6CU6sE9P7LNLuj6wNoWR4bWTjPF7UGSYGXaTBXdkSJmVfiZi2kJaDAzQ5zeKjjHVvBRSqz4",
  "key7": "3YebBCDhke3pFqnToaMqLeCURgQPVHFFksigXj5nMzeCZsPZVCXtkQb36MH95nhEhXomGQHJGHrviQDdt1eSai6V",
  "key8": "2c6VxDZtDZxcCcFymHYPqDtC7kRfNa1NKpmermSNzxzofvaPKMfH5LFn2KyRytZhHFHT1pLbKTGzXnL25w7wT1n1",
  "key9": "3tv7qCYy94U8CMpWQgbrNFGjyXS4rwjsWvE2xVMucvjiAkUVm7dWLfPU9vyfEt7cpmwsnqvNAUQ2XLV9RBV5k19F",
  "key10": "2mQwFEFPPTuGLZvUnXoAX8fvRkhnmoSCT8PeLYXPPLGeuT6pLhiGucyfqbK1b6APbL9VcP87WYDF1mjmX7e2SUyG",
  "key11": "2G92bkkadPgXoqAxGTHvCwTFNKR4NUiSZ2kAr1ZgAPc73FsdZBCuKQ7JbmZaWjtUjzaRuYpQcm3gAjr1M2aLHSF",
  "key12": "5qKYLxo9VTtLHLDA7EVCoTEnMdUzFi4QUXZuApYoKd5sGPLNXh1S7qbYuuJ2LWYXtPtopxmY39wu2YmrzwXyLNrt",
  "key13": "3GhKVTAn28zvfp6UZfymDZAQZipLGqTxYxcy5kY14o9AZYz3WbQPGxt9ZsRU8nT5ZPfmcuGm68dQQo3eKrXf4yQR",
  "key14": "WkKTAVoFnvkK7mP4MyYcp3HT5CMtjsacy8vUKvUkTMkqnRnSzeoKxRci4LAgoG4YEV2soG678fMf8nQVAdV47e3",
  "key15": "4E4BURFtisBq7RjbFwtTdcU7WVYBGKN6U6AhtZMngLP5RJf8ymbQai71MSYJic5txVKQskDxBPCxwXjG1xYCoZhc",
  "key16": "2uA3CywxveAyXQCqVuTbJ1NF4Hogf5Wav2gJXBxCsZ1infreXdks66pcNqk6VkbwSoCiFXmiiXytgbEGD5s6TmQc",
  "key17": "3PgbQvNeG9ZzfrTSQztqgApL8iBdyyF1gkHTneH3gkWwt8S3msfzh6iabsC4xTaxkfPrMHWQsHUDsYeYkDDkT3yh",
  "key18": "1GHGib9pX7QPMq62RDpGr89rcebrR5CqmNDPxHMKnmPkf8wysU5SJTrSV2yEHZ5kDiC9WxSjQsDAiNF26GoiLxo",
  "key19": "4sSexTGWzR5chjwP1YeMVUbD3hYb82tAoQzfetZhBuVRUWS6iRGRyDX1qJDSzdJZJfcyUb6eWu7HKXo1Qp8ic6GU",
  "key20": "4ArxpvShCmkyn2nZy4rs8P75KYn5rA7j4g8NM3GeppnHdizRruJsaCvhM9TybS9t13jrbEu9Gyh1FTEkUX2MRZHC",
  "key21": "2CiNKtdViAC5ZLKgJopgvJqW3zHo26dDzbxD8VzFJHcF6Qv3qJfnGXS8z7bHAQydCmuFjgY3LZkBooRYeBEUiggn",
  "key22": "26Qyq2e9kRSsVcPipHSPHiEL9q3rNNKR36GY4sU7daivroNsmKJGzrkXKHQwkEokiA9KzLkX8JUkD4hLUyDmBagy",
  "key23": "4qbghWgvQxpGcJe5CsG22LDRQhtfJUShrQLsEWiojjRNF8LuN1TuwqE1pZLDinZHim1hXLVM5vuaEiaAwySkwUpH",
  "key24": "iAqywXeUYUfJEwRadndsYqciE8QJ5MURmHU1GA9EsP8MrHQ5isMZc94jsnwqeqV72jsKe1G61uKmNrkr3hVX54J",
  "key25": "rDatzh93J6VXLdi2aaPFq8UvvxEYJHQsPJLQjqojRxqn8Euojd8u6bUBrQ5yR78DkgPPavWLZD2nAeQiX92Zp4C",
  "key26": "5pvRgHqBUBMznCEEJPHQxNUaRoFBFke37NU8jPpYD56rB1z25agikKJmyoNVNfHLioGNe9KEGLBeNZH7LMmDUMpj",
  "key27": "67rmuQdqcBxcLXr2PHjv7XsT4Brh2ynAr2hDQLJ4jxxRV97n7gvi9fVUcdDd1ZBjDNrhiAcDBn4enBdrmSUefj1p"
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
