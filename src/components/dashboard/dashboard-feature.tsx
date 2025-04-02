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
    "5i93H94RbviYUjPh2LfMra9fSxK2EGKn5CtaDFpGRGiS5Gs4F2qiSZSkcDfXWAovToBFoNAm2NW7TUsDaUcUb4uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzNtoD9qXLkPHdRNzT9AU9EU2umdtxaK4nXSKa8sPRsHS9aofErVDaH6nMoUpZijE3o2ZMcE7EWx4Czad7TmNo9",
  "key1": "3ags6aa4gG32Q1ZEiD3cE7dtw21MZQawRVSRZHiTA2LqgfHZRcCnhQfKe8sFE7SNwEZJv8SxvCC7bMwxJfxBVewp",
  "key2": "5TxF4WV8HbU47zjwZpChYEQcTCCBMtrTqU2ztn92tg9infGevWpMtHHhzXji92HW2wvgL7TsxGwoKS4Vak7UQhAR",
  "key3": "4u1Ar6MAoV61T2Wt5deCPafb4Z2jTgcxE3eg6Gnr7ZXLn9qYYCK2WtPKKZ5axyd3u88QE5LLYztCMXxebApNbodR",
  "key4": "wbiBvzys23hi553DXYM3Vg7pJ59bKecLVHo4ddGBwy4CzBjQCpjLTsLqrzWmxEMCNxXFvq7yb2FFWQMXNS4Ygze",
  "key5": "5ohBMZ5E1J7jzSxvnHtkDhZSBNjyUxujRxVbJ56SbcdaSf4e2mQsx1aTDCcmYjqfL9k2mFzbAhmbmL15SF5dHw7L",
  "key6": "2jCJqDPcv7RKjXcWLr1YDBZixwQSEhQ1RP7wn81knQJcyG6REjVp8q1cADaABRcVwBAM92CtZJ8RpRRXrH3NKNVd",
  "key7": "9xrpR38h9Qv1ktFcgq1dYZB9qGuCwdUMYDu4b4J7yRUewr3jTVd3e22aZsPbfSeCEg4wxSXYkD7n9noqW4roRf7",
  "key8": "tM9FELdvknpXyvaTorWvy8dCq1MvysvVeBzCQPYaGY3oaPpV5L9dZzqL5J2jEF6SGyZcnKng8N3jRnA2o7Gk7We",
  "key9": "xVZQDYdFrKiHGQAJZjFLqBKy5ngAYTjvosthNjV2yYat91dYzbBHT8UjdcUoSt91AZtwn3nrijTA3STuqtsXKNs",
  "key10": "iTmjhcSsKGKmx7FngUr7R47Mg74WiCuNUWpJSBraA4ymCWk4jFupLtYwZcL3vaqPrAmYTMBC7Qd1dgDpyjfnAwU",
  "key11": "4huyYRwZCtgnSaerQCiYLhFkyajCi8kt25tKcbVzpALxQfbhcdsB56WwW8GQvxMbSyQQwuewPnMqRJSVy7DQAAbC",
  "key12": "2byrXNiSCPQFqLMdkst7vHBmNYZrRUN7YQ91JAKenRyHyTHqbAk5M8hZGFhze7f7TbvCxxTgkjCRMamcrg72xLKL",
  "key13": "4LpgTKFeVL5HQKNov9rEYWYgyrhnNmCUwFbS3UzXAKyyiA8Ed4JqpeuBmJQihVug6LDCz6o9X3Y5N4623dNz7Qze",
  "key14": "2vAEXvkdYv7Qcj2wdZsjrLhVVqjkARyafCjKh9cG3rHxcbYjs65zM54uNdwQU1aNQTz7EwJbB4gyxP7seoMXQxzD",
  "key15": "5E5XT5msN8hyv4HFpNNqsT6BTgGbw6YhjmGkRyCCHKuhNWmf6tb96bkmWrgdSHCFtg2LWqZvSikNjKmGjLCotJmi",
  "key16": "42Mydtex1fN7LmrWz964ptyxpxDQqxWSTNBDsZ9AL75j8fvnXEsaNt6VaCCCDPuo4uyy8PyUbFuFxFMYT4GYLuQS",
  "key17": "gyzdPZBptM9NVHr6iysxkDtB7KqdT41DBQcN4SJRSRjS88WhEpzAbfweNMQfY5whQnp14dhb7uaueLDUBXabagS",
  "key18": "4pYBLVv4uz1rzEJzSjrzD431ioWT32bMJqqjdb2czktuboEMVv2AyncoRRY3BQ7MdyUk85y4KWykYUSnh2xAPDb7",
  "key19": "3YBsq1rMsnqF6ABM58WqVHs6onPwEvQH47QCBthzUeswNGYUcHRReM2Dd2Zx3tFtuK9pUtfebxr8h9gWbB2rB9Xh",
  "key20": "232qmE8cXuC5GFNCeqkDE7jFPJH29gommSkMTYHiQjSWYWjpPhnyZUHi186Kko9aBMVjwtfMsfGBzWijXUDGrhaz",
  "key21": "52AH3UpWzcJfzf79Tk8Vuk6QGTkm76p76GXsCa8jRrDU6GEKciK8KzLZSDRwhk3QMC2yutSVQGNpguhmh94egTiK",
  "key22": "4GmyqoJFAHppoMmLxVBxPXkiEQTDyTynE4TgK8SahZZhEMpd84vAAioQxVqKVFDvPTSouRyqEae7C9er8ZKEyorV",
  "key23": "pM96HWQpzchj3Z436eJpyk8u4zSV82RTywTzJmGGXBV4DwK5RimwwToCf65ZYC6x5P69AErZBhqVgdrYRtzRB5v",
  "key24": "2DSSUCzVVpykexRtyZrzhfsAcqUnh2W842QMemPrDZWqRuDVbjXzkDZBhHs8Kup6S7SF957RCQPuuDEarWKANxDj",
  "key25": "63f67R27uNLHG2XUphjYYUbVyC7rSdhb1ernSAhmQwD7bxpVH2YF7HKwyA2724x2UEyBVNerYrByU2SPQS4PGPwn",
  "key26": "2ShYNJFkrDjJvmJUVVxvWRZFsJUL5v35CDfpzmMc3BwHeVLkwy6uFXWCtdkB834jxCvazeLpwhTQ6gfdzoR6w8P1"
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
