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
    "58F2z8deaHy5fKBh5q76yJ6KMNaHL1XQJwNTmMb5ZKEXH7e8gtQvNfeRjkegikNaJXVHLA3QcPf3M2JDMQuKwJqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4scismivEeysdxfE9MfQHTZGWKEbWCNYN1zbVx4dJdUdRtaULnMR5quGxCRh69UfHa1vpbngsJW8oRuJ9murr7",
  "key1": "2mwZCi3mJzizu4xNVHPGrZCXmyoTzUiwBZjmJk2auLnbAbdySXHLt72pPG1rey6t99oxZYgmDrtKiXyShiW99V3K",
  "key2": "4nSToYi1hwDgFpavxEYzuaiFkzmuf2VxTH3mE4TytFLv6zUs65S3uUJPZoWEXakNLKLks278PMQouh3to7y7yDHx",
  "key3": "5fJjbDsC6EwV6Q5HHBYGtetevuoz2Ffn3aswTqb3ezkLTBL1x85qKmbHciYEmyP8JsbMXsoGYtJCT7qVzd6F7gX5",
  "key4": "KTbKBrDssFjrKcupPkFuGM4eRGxhnx8rWAQqE1ZTqPNLAAL35FAXHfQJbh29hqYxyuoQ5UqfXow2emx42FaqsaH",
  "key5": "2eXEZ9uLQWNuwxb1wLM7Lfek3otriWxAAboPpLNHQ7eQ655eVNTpmEkSs1Gp3mef2wJnRRtjhMmuiaZM8kcQiS18",
  "key6": "5kDtG7owWutfumD6KmtCm23Ty4JMZRKhrsfWNtFzADbnRuVPWEp29u9hmGyFv1Mt5fqVPhghcSWM4xF2Zg3mkD3G",
  "key7": "3cM9AJB2NWYZ44E3frfUzgBnWN499mxxshKgwjJ8ZDJE8Fb1hHmDvQjBp5GzC7AUHnCphZaaSLUWHHVYDJVeGvfm",
  "key8": "319hhMDi5NQuBXs9kVCxCgPiiBhFzSj4evguooYaGLxFLiqJL7hvs5TzMkZQsitrwxwddTCHVLaxYWYqwsCkogtk",
  "key9": "4y71pzHxALtCmZG3EiDKJ4f9AZ42NyMQqwGajmjhu9ip7fsC7aYxsM1Srrvz24Kk5xUfArPd9P8ByJfyNzVmQkik",
  "key10": "52Yvj8woicpQMi6rRto5zy5wME3DmJXES84vCZqBRWF4ooTR6Yno5eFZFMjQeS7GSbkHkAVd5xVqUSr9hFYPNPD8",
  "key11": "2ZfqNJHuaRopkVqcdLP9VjGB1oALkF98cXN4a22qW7mWdHGw2tzVQ7LorPN5xJoG7Em7jFFwxe7k8uXJmCj1rkH",
  "key12": "3g1KFNkveYLqG8TCR5tjYL9suEt12aeaJ8wABkt6pCJVhqyqnbCnQxkf6ew5pss1YAihUgJeDPnnNM9GWVYdYyjb",
  "key13": "5qQzEANUgpjrPMnmKsnLNxhYAsZoTXy9kfnGngJ3NFBMsmuywmkWQEpyULrLzg3Hn4q9zzkjEDXeUbC7EULujkQY",
  "key14": "5DdnvQ25SnM9H8jFN7imNqLWmX7z6Ynnu44KYhmGZpHrsZaK4Dcm8Q5FyQpikTnJmwxdouME9wN258S5LgoS4HU3",
  "key15": "4vRFB7hK3Pfr6mgKNYUdGP2rEet99KdnaUX7Hzgz2aVtK4W6cUPH1Y2sshQHjrfC1Aw9hpJ7FdnFkzmfV29xPxu8",
  "key16": "21zBw3cwuQtPuUVjhxV4m7YHhWityTEJGQRwLrn1g3zfgE7pG4MmB3mxQDHASNtcfHkCfdGvnoxrD2d8vAshEkUS",
  "key17": "2NVLCuq5ethWtuR7RMV2ZCvq3j7AZPmPkdfSng7iLRmQyTADi9Bpm4FCN371F8QDbYaFTb3NAAMjCKfk4ic8VvVh",
  "key18": "quibfv9eStmSbAKmgBrVw2YMKtvS9MJJazvK9EWzjXeRadT5qopfkF3wJoN6ERDXqhmdQGNf32JzxVKNEkuggsJ",
  "key19": "5sK5RS5AVCgso4nFgNJK3CVpAgGY9FkLp3ZPQ2ZbRWJRXA4iYJPH2fZaoTNAUewaVQvYVgpc4oigKYLaWeEKNF39",
  "key20": "3DZuEEveVSUgx9EB4cV5s2S8ftT5u5annQ6wSF8m46xoHQ23LqQb18cz3Ts6cmfXx8mxH1CVK3C3JP4x8EuK6Ev8",
  "key21": "2LksQK2pXMDFBXimeiMNwFz6K2r6Z1BXGEJBLe6VzmqaHWtSzouzr5BBKB3nZ36R3TTjrGQ44DyvErTcMVsMXFSR",
  "key22": "37U7fAiNRE2XP22yRb9Ni7E5JsKGoaCdUg7TiYM2wp9vWqgJPvQUz2J3DHKYH9aNbWuxTSaWWWsPginD1shVhtm",
  "key23": "ZoaXmVZSv2NkFZwQNvHQT7NWhmNVU2aneo4NUDuFkkxDW325n7KuRghqh4fPcNkbdofSCdzvVDZyBxN21dUnQTx",
  "key24": "yyJKeYfbCB5SNFMgJJxBtTYYhxiqaPqS2AuwptitqbqMVsjQSLGSz9KHd8bw5zuPrfrUVue88VJUPdJJGvqaP99",
  "key25": "3KazKu9eSiT54o6Z6ubXHhd8Z995r2xqncTnu9jWBtRDHGTK5HgDvcTuQBYpCmWREVC9YD38JzVobQKk8DjkuYyL",
  "key26": "43h81gpfPUrHDutUp8Fw9bXgEkpT2P2jgtAY57BEf7fTp738sgqW6PE3pnWtKjNoDgQnCwNeYDsmk6Yvb8zAETGs",
  "key27": "5rHRHXS4eAdsri5ZgmYxwLaTGJWtfi2dViJKwZ5m8QWgRa9Ya2w4fxiDYG2VFV87dHH5DjLe4UsCAPk67VKMxTny",
  "key28": "bgYigAD61B4medNMVUMEupk2h2gojeqmksYaEV2bZGnUP6AQQNYV66e7V3c6dcTMjFfgngdHzAogD4tZPBAswzE",
  "key29": "5YCWS4dJHemLzuYbafvygNTHqeAQteH6bF7dkbRzubChMzF1tkBqHWo3CGAvLVwLUAFZB7et6FMmVoGPtReKxAeC",
  "key30": "5jwSrsa8tzMqvFAtqdCaXsMSDU8wM7HDUGB2FtKHJpHZtmAnPf78WZD2MB9DJYGwqyQm9q51qh5JFArSg4QRRah6",
  "key31": "4gW4rmy1iHcRJukmPM4WGqrAiGUFaF1yMErUyXVw4Y7sc3Tkdy8RkNUcBcA8JcsiQagc9soVZbhkLsnvftAoDeYo",
  "key32": "2DUWpJMojateneQWYQbRekRFXKKpeFV4jukTVHyPdT7HHJi2UmB45YHMeGKUNc3K4gViQwWKYKa9exJjrMmz9USE",
  "key33": "AzpzauH8uDgMrEF3uCPCwcpQ4RhZ27aAY719X3UUbL69azuT8Evy44WJ5xRnD2UfmkMjZv44ftiqWdkpLzJMHps",
  "key34": "59f7zo34dYUxduPJCwJUCgMLFaJRTA4RUeBciud4DXDJ9v3K8AzGqjGHg2h97kJZcpeHuCPgKNzGbe21df4feoRv",
  "key35": "3hySCrQSfdFjUp2RmkKepkfKJfPzSx89sfyi9DuezGakCEPCt4cF5K5r21cBV2N2zkG5ofgbBjg2fpsY4BN5G9qS",
  "key36": "587WJ6J7AB2gCYCW8rF2FbiS45j4kP7DtrspmHTWpVNMBQY98FagtLJxy28gdFDL4sUackTPxp2t6xo67wTZnjZW",
  "key37": "3KiYLxTshReZW7k59edvieA6qu25EhuSrP4FGucDZ5jhmuhaQXBRuFQNpqyNLQaAAxvifgt58fKcg1yASkaUeZ71",
  "key38": "4j9La9wMnTSxjcx4tykGBodMyMMUmD5RifnvGTGKtTqPHSL2qZsGfSuVc7vheC8hPHJJzGysWsFivRXwfEfDLGgH",
  "key39": "5ctr73W7wjPzoFNXWnFLj4cUofX6Vtn337x7CoMe634woevoGtArYU679cUJJchGzug3Zt8e6yWM8zEhmcpSfczA",
  "key40": "B158s7qVF4ZcTeGrbP8G4nBSDRPLauPo6uXMpFD5mMA8XjYANxVD1rQSrWyy6bjfZKFdW6dEzGX68XwwUwzG2xx",
  "key41": "3v5RexFCmWiSspRDKzjiij5ieB7C8NDbRpQbnAo9vkFoG4qciqA11p2azgegMU926J8NgbR64VUx5soJQD4TLe5x",
  "key42": "2fdCFerkPtCsL7F3R3FcvhNRDRFVn7BS62QEcF9Y7PxYQrjVh49WbJJqmTuLN9D9hujLU1Rniz6Rxeq3YJCzCP28"
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
