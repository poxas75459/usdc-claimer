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
    "X66aTrKM4UktFsGdDagzoiLkw2sDrN7aFNLm6xn1Lie6vVEYnKgUbnz39MX2zrtWAU6tcc1wv2MzgmzF1L2DgeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jqGk43PenwNZVe7bsz1Xssee41UDNpHtCRVER8Uapz5L6s2S9gMWAJMyLusdh2aicxGpCcVqBgCpuL8QyuexNT",
  "key1": "5NGDw3ZAfh5HtVNmeY6fi5caq9sf2Cir8hkXQUKraFoRMgJRCmmJQ5BUQDXe2rsubiQJfgbVpe2KFkfo1dgwCkwK",
  "key2": "FVbLeavk66jJjEUiYGX5DFnh223bfQkYqHMa6VKdjFwVhorj7uJWdgWkNLHPy7SQGfcgLzB8ET56LwK5GEYGeeS",
  "key3": "41ESv72pWD37edUv1VP63Cg6h5QgEG7prBentVWQkR3wwZpq42v911utJgZJQgbhfY5f1YuciDWjdEyXSuLJsdyK",
  "key4": "5PdczzQ2CGrxAdGeYk8mtKscq1sr7ruyNioUaBdMbCZi6oQ6idqzPoWisTyeYUMRsBrLng46HAwt1ST1RYxTitn2",
  "key5": "5kGXv9fmTGxw4W62ps6tCsAQDWYTEzQL48SZf6SWeBcwn11EdB6JsGHoM9X1bzCcpAzZSWFaAHqhkXD2yMinEHXa",
  "key6": "41TXVQnDdVPwnoT4EjQWq6TJKm9kgncQwswRwAQjaA9sNGtbwmswUw9jzziEk6qr4Zkui3AQmxhSH2p1N7cnvLcU",
  "key7": "5VXB5u3dA45FAZ3UELiwVJyQ9P3vtezMBJpDeZR2reTgMBgz32tvzjGLgyLsR6JiWtmdQWeYRia6ax8ZJmRDgujU",
  "key8": "3oXxMJLUXJUdz53TMnmXNtjWG6Hu4r94rdFkuX7i5P92yATjmUVER8PV5rVajrLP6oncrEhfVPtAmiQpEEoNUkuN",
  "key9": "3HCftyz1btXNWuu5x95eiRLnqEKLqFsHwu8hNcoa11fpP38JhGBSLEhwtVAsB1pzcbiCCwU8Enxzeqfe75ow1j4J",
  "key10": "2d4Tz1vTkY3uVA2hFz8JhfHBti7isnzQY34Uj5KuWeUJqF6R7HxbFnX4tc5XzxUJMMTBpmduLdRfcwny5zjBTJJV",
  "key11": "54eu8bkXA1Lwk65XYErEUNqByibYu2MNTmicib29ECDmGT9WTSZh12GiEf8s3c1aFw8AKjs8nx4wGiVWetPwU4eD",
  "key12": "49SckMfqutCq8DZRAmQpkcV1AhhrRKBa3Qkoa6JBL6VzTKGCeaUfAV4zp76nhE54y7z6kZcqAhCsHmLGYa1kekLw",
  "key13": "LBifWeqYqsCJnfEy2q1cEKt7nkM3rQ4HfpR7EzHydeECArCFeeg9GrEnp2f6ootoYQP4jTJeYaLFvoctaD9v8DH",
  "key14": "2z9QuHTvbmFovRYbmEznqfLepWTv23M5qD9g9snKZZdAccMnyCkLKEEDMQrzYmp4crNJyQX8bvEbeGKnCSiWX2pR",
  "key15": "4wNkDEddVpYvZHYEuUqFJfkrJSFWJF2CkPtzhKZv7sh1yAvLw8pdKmkoUzheU1WDUAiE1TQexESy4WGtegdJb7M",
  "key16": "2vLLd6xDS8dgd9xBCqWnRyQnYVt8GR7kqBRPYASmaXQ66dtFcdEcpfRFVxthMcE9CoucTH4qSGYYeT9fMpdANDBK",
  "key17": "2SfeE16yYPbEhVWCQvW5gVZM6YWXkbTZ6dP3cRXHs81EkfeKJojmW9gv1qBejxzPQfHrrPtpSCh1GgHc6NTX8UbV",
  "key18": "4D2NWXay4QTJxnfu5yZU7uNwhv2ohXffcUPfC9dWgTz9MdYK5a44vbNsm9Cs1ZKuEbVvdC4a958k9TxDiy2wC7FN",
  "key19": "5TuuMRBixXobtz2uHuHtdeoxVHJg1iEDGCEDtYaim9RSYvXgPAN5aMeXsStUY96nTeYGL2kvqNqLMkHCcHpzdcFJ",
  "key20": "31u7M1D54ooZQCwp37BY7R5twtybaLQVaV7HRVHMAbcwK36E7Q8X7kvVbnVuA3CJKDqiN1bPiFtT5SsuPxMjM8xr",
  "key21": "sWTX2eDk8StkoMnjb8VXfmH36j35DGiGo7aG9AvuDgLU6LoNSqjbwT427Lm3VAFxRxLFjVs8sJXJr1XhiUGYgjA",
  "key22": "2uqyPfN31Ux7ekqgcDiU2qq5baGkcxCDNjYa8GgJHTwx71jSWd35rh5YyQ6o8Tqmxd3Aqj6TzHpxZWYg9BsWTBWH",
  "key23": "5SfVccHFymt5mSbfHr2rmVEtEAd1Wy9dV1Ly699ZuGqqSP68ZFTexThzF9bbRY4TjaQfK58Y9q3gKA3Q8K6hSQWG",
  "key24": "4vFRrbY3VFa8XUpjcvVoGZPH53ZvmzeNbwwXAMADGzdMivorNpBarYU35e1p2LLHowuLKMnwM9x6o4VHXGmSGsrY",
  "key25": "45xNvjqL9YWfREntqT8Nzju1EtQ1YBWNMgDSTsrr6BgceTmurXGzqfbqMWCPvRsy88c4DPuFwVcutpqxMTCWbJEW"
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
