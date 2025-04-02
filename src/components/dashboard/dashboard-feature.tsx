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
    "3r1QnSiGfrRUPZv7GGTq7SqFSLDeynLhBkojh6P8woeyeWamc7ywTUJzL8b5M9DrEP63TiRFLb8XfC6Ci8dEg2tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gD78p34MA3DwrDUxGSfAfDeH4bUyFk4HVgJ74f1EGCXj6gAsZ5Mg92f3BBxJvmUrCKCU8b1BBZhqsPDP2Lczah1",
  "key1": "2XLcU8PAXgUiSLTarSoqaWu6YLzNcRCwD331L8aiHTPKBonxcC5psQeLf4iBDifwdXyzNYVG73o3zGMwteEV5Hqk",
  "key2": "2s13WxzBCBTXqA6iA6VkPDJGCS8uJq1adJgoYUvMxsnoHgSRsHgPGPpyvy85YgHzTvFyYTx5byDHcmXvWrMTkYQB",
  "key3": "5HLxGg3rMfvSE1dehRTrd5QvS2xeuubqMmbs4ETjkUuSQsMiFFhzDHoWEvYEUs2qerRyUk9Wbd7s7hqM2NTSwWBP",
  "key4": "2kyViQb2EfU9qmrnaGKjjZSu1djiSeyd4brpV4XagvYnr6FXD4DxTS1XtgPm7dtgiVJLmdw85Y9DKknK3ogeXZXz",
  "key5": "2k1ct7uAWxmzjKk8bJrg5nTNFnDo2bC6YVKcvVKd2os3D7o1GoP1Tw8DvmNxEhsX8V8JaKgXfuksFF9tr9nompsn",
  "key6": "1tRwTGpiZedg267B8xXyWwzom7CjToHQg8WYWQ7mxmvyVDHjBYXFnVew5t1mjad9b73NnuSNZ5QGtNQnPCQiyWF",
  "key7": "b16tc7hpdDaf4bZRRosSedfyGi4VmX8r1e4d8VJh2k6JFoZnZUgZzcmke9DEM2bPFExLGqMmJ2qQa9qy1FkLTfp",
  "key8": "4xHddN7S8aSW8qxJVVnHq6S4NZNdWcLF4Ag1iCvc2Q6jBy3zFs9VEUsqQcdrqFgVi8WV3K3sFH5ego5hWqD2tyjU",
  "key9": "G1s9KJyzHm2qXA7zZ7sKdjtjsWSKMbZ9gJrC4SsZGrUB8fVZq2Y7GZcijtm8URWrrEKgvPbBDevSTEjFqmSPpDo",
  "key10": "5P3yXLMWUMHQAEkvoURdoP1SNZPG7umzCMkHvUAE7DwNRY19Cvxc5AKJ2zAukkHVnmCzFhTrkC3R4LVaacwJnxA",
  "key11": "53rUdAj4a93iGVRMAZbZ7Gq498hWX3LDHuCsrje3Fpjv7owMEwiQ68rwKFa5DkVnWsBcWmbU7ScnSoS7Ys9s9Ewx",
  "key12": "tvD96MVFCeyCWch7vBqukopyt3mHDa5fhWG236Mgu5CCeGBaEwsynuTjsKvqYnziF6MwcYw6ZhQAsnFhuEi3JKj",
  "key13": "4LBb5B9N8EN4PDnU13D1j4qEL813xz5AkLv3X2nngvZLZ6S3JyUZCVmBqUfBAsTHP5iG2tnbe3se5kHPk1Cqs8VW",
  "key14": "3h8UrWXwEENR48shrX9EgLDR5s2aXwpamejb1ruqV5R9gW8o1qAJYygB5bX8wLUJTRVxMKdcQnT6QJqbZMSyGPCJ",
  "key15": "4mfcJrQCoSQiHswH9fKWdtCMQ7zHGgjiTpwjNErmt3CGrKZxLL5GfemhYhe4GqkZYAAsL1BejyTTnXaL4SFJkkKY",
  "key16": "5VedfSU7UtfA6mQMyqhS6y19ew8Nh6anVz4TnMg2k9wWb2xC4JXVE4zNjorAFij7Poa2VAgnmweKum3mguqa5Uvz",
  "key17": "SAjVU8LjUAZt9nWp4bkEtncGNWwBpGx1oEmSoxGgz722txUQrNRYPLzQkTJpBtMPvHJPuPqL6dqtQ1jhQ4Q4cn9",
  "key18": "aEVkpZ6yCprWAr8vtbJkrVi8orgvPoz7PomJPzAjt3WiYXVQieWmDKDrhTaTnaHKHg6t8huNKDBFQDMFiftpE5G",
  "key19": "4mekJNWCDJdkwu72rS8DAhxKWhfvqMns23pEQy7BHy3B6GMsS83ZczLfb6eUZgjHz5crd3yuk5LPCNKkXW4m7rra",
  "key20": "4KtTPaF5YsrRb8kmtAQDKg7jw62DbQJPddnstFLFxp9H7SSp6CJn774qnPZ2CvS1akzLS4uAaa3buEaQkSRoiuSf",
  "key21": "5b3irzypD42TRyrERDLnZLx5vzMuEkUySCW5ayM3wB8WBMvXgwd8wTwBxJDLZVu1qd76Ac7ehiXCJdoTnW6RH225",
  "key22": "3ZYrQEWHFko49u98AsG4yV13EbTmSrRGgmaWDWbqMiLQrae3WdajFPPErk3fNUbgNJV2jKhN2f1RraPyNRAnh1Rb",
  "key23": "4NZmatckkYVM4pLpzdmjMofgnJPEiFe7PKoGmFiZyzofQRxo3aqKYAXPCHDtS9rWUyJ6tLShFSzfSEbDyesk8P95",
  "key24": "3U9vcEBH8UZjMvUbj2dy6HxFhaMfXgLctHRurrPuxRAMmnyDyx9jN6wBA3Bgvfc8jFi5zDjtUAsZr5LyVZ74gCxT",
  "key25": "Fh5ovp2vRN6dPvNop95sUJWQouTz9ndq6pvWjeuDA1ju2cx16qR3228CaDfjrB2scF3JuZsmpxi43iaLDR1RNJW",
  "key26": "5nru5XykcjVjWU2N3BoUFjMHS4XQqrnusJFt1Adk6M2c6svA2fJ16Ba1F3c7uFSMAQGcjwwb3G1gEQzCVqdxHCvp",
  "key27": "5AKf84Jqwjvfkaufo9YZPxSb7iYEtEs9atxVsMTXSmpeaPxyTzcfLAMmokkvsLmRhyGwpHBECTpT7i7EBmvHKCLS",
  "key28": "2dQSt6ogqvufKrG38cuYYvrQpphwbsoaNY7GKvosMF2ACNMZtaEpSD6sS3MwGLmfs1xPCPeQKzKC9QCCq9PHVojR",
  "key29": "4Msur9BcbbZ16qU8Nzomyk9koYSV4HTu5FGEu374X1CsBz3ntLFh9kbb59Rq3gtmBLJkuK498BBtzSNdS2sYgif1",
  "key30": "3zgajHR3gXC6KNijRhLf1X7R1hobpkXQ61v31QFKn8e9WuNy9XUmCUXaxw36X4u5fJ3F9SnpMFbzKV5rGCXZYKqh",
  "key31": "2Gq1pAYcQ6R5WLq6QYvyB2kjr4JkJGapKEPF4ETCxzrCWTeDBCBSg2UZqw7vuk7GMtMAQgV7ceKq637hYLv4yDXh",
  "key32": "4ZgnhJmikQni4rWPcB14794AGNHEJwHD3bdxnt6dRZvHJVWS7eFUgxMuH1i1SwDD1Mjwopmfk176X5TLfr35jAEn",
  "key33": "BUZUXZkvH2gf4HgRAWqbmzyfBmihAAzjHpu7r98498J9uPsiHWdVUAPUvRSFBXZyx6Wi4EEByVVNYK7iUray59x"
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
