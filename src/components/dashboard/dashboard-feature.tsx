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
    "2NvucGwPgi26fWoUksyVouWFLPo6UAxPP9m5dpQT3PpMdBdBwiwTaCfMpYRH8ZF3xD8KDAZTiJeaXuEJivCzY2bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQRSzVQoiuwZkos1dqg4bUtwAPT2TvpowfEhQAiiA9bMm1R6b3D8eN93nTBC6je53BBSk7ePNMzWEQEW8fCkhMf",
  "key1": "X5JVktEyppLs54V46QmFdnXoYDgvucMkYRMCoDLPdjeUu9djwxxTBD3kqbTUS1M6nsFEVyYkZhH88z5yHMcjoEv",
  "key2": "5KoqKwboJaJMCGNKrhe8WkAt4Q34uD9Aj2Nv9x1osoz45amobRSDfywvit2G6GEY5KzN9c1VADjmTy5wQZU4bHVq",
  "key3": "TnQSXzXQo593mu1w87Ze1ek5DHNV28Udeupqq6cFCkm7XxQa48ByMPYNHDYM5P3iFRp9BJR3kR524zqQmqSH2UH",
  "key4": "4J3VsAeFYxc4AFa3zUMxJ8Hfdpr4QaMdH3pAVvLEcfsKe55tYy91g2NbUpSaC4gfGtYCM1KmHNk8pgxUULJPKhjd",
  "key5": "GPACsHpyCN7mQ64fQRDMeCpznxujLsP1n9BQ17nkXWLFS8MEmk7r57WDVMtdsEDxFEc5sjz7PXHEeqcC5r8z2nE",
  "key6": "4SBaCoKgyMvAUNTx45nGvKsW9g5QEPq8KxzwurxEWjdfCz1ewkd8HD7JectLiQ9RLiFy1zuu4N8QzWtFE8qhgCtt",
  "key7": "4L3Up1BXMFBDkqcJcjar1P4MEtMDgBtc76w9aD4LwvVY1oWWX7nPkhnhGKBPsP9FFMJZkBfJcrR8mfoC3VVcbU1u",
  "key8": "5C2WcNe4zUYEdcxBbdTJ8JWhiyAvuMe76YyzP22McceTkk2nJsycKogzC62x6W9eTwtTHUGTqcMcDrByEFr5bwiR",
  "key9": "4yzVMRRzmkfP9rh8MvWwVK3C7jomkw79aNCezqUktp7UhG6B65q2yj9UgWvVAJUvGRe1aGHFZgj1gLBMGEuZwVK3",
  "key10": "4XZHsyW3yPxuMa1iGGgD7EFgiVYY9t5VH4qdqbCifJjWoKBT1ti9Y1B8j3WSA63of2fV488iZHqnSgPwCsvsMxiK",
  "key11": "2yRozt2aUxZy3CvYCN8wBA4hJ2a6P3n1rAyAkULDtypa4dvu7kfaDeKvvksHWmSw2q5sMg3hevWffsP7RjYJDGks",
  "key12": "5sFrGyYTnztcaa1NM4XbaUfxSmmiyjBpAetrPTGaXbxc7bJr66SonT8rBnvkDZ9UpTjjsEFdYttPCHAgQXXJgXBA",
  "key13": "26uG4CbuefLwBEGjZbB2TUYEddJjbkRkqGvBNwT8iKzPRhoDnLNcjM5ssqEEi5Y9jGS6SPZapv9ALZjKYqpzLtWp",
  "key14": "SbMaedvoyopUqDbHV6dtQUBwAfgv3ijpGeXEYhJ3tHaqqn7vGCK5A7WQYGrZ5W6Acw57kZy8UyNKk4rUqexcQdH",
  "key15": "3rffuaRKa7yoma1pRPugJwjm2evWdBhbC1Rd8odkADpAE3bSVYd62hHXHT2JytzQRP9qvjgCZpfQYXBXHYwmibZU",
  "key16": "HznSzZ4uAu82KYpv9c1x7gnVeV97Cb7Zb4FAt7ohhbyci8GsP1MQuRaJ3odbKf71K1xYt7qsD6M5rMqF4CQLAbS",
  "key17": "4Yh9PgU1KvNBDv6JCGUKfzmW6gFGyyxYFaQspFNc5Ky2TUZqKvcPWEJPLpYRDVnMi2oS5nxFWVh5E7XUdFkFLbpy",
  "key18": "DeMajXRAhWoq7zqNSjX3LaD5huWH5gazXp65TyuiUYpLyhzZPLCqaR8BRUtzTDX9FYd1EGjoBPS19NBqo5bvNZH",
  "key19": "6UyHP7HciuS45hUBzf1YLhLpxSup5Qt4u1AzSdAXm7JndsWr6jbegvu7izSfKSvmissAqXJ4uHFmiYK9kNbgs6h",
  "key20": "2X4StTXrPmPGwd7NEEx7kG69Q6Ymo8ww1dW4ZDhfRSX6EssfoDoesXnV6WvzdHiNKYUY1oJSQDUKdf9zcYJtJcXV",
  "key21": "4zyvzFBRh8ASSmsvYAVSGsarjnaqe3JcMtE6gRywLV8pjHerqUh9zXec2JAqLfB15uNCkat4EoH9ZuYmDDdxzX51",
  "key22": "2bdoo9hRW8sTtZ2dXSmsorsQUn35Xj8SEtFTcPnU7TgCHiLKSeQEgf8WYkTj5uY416WbqqvrXPeY5jfD5Jbg8iCw",
  "key23": "2mAW3L31uLtnxhjY1qY3t7BUwTvJZ4MphukgZrRgwEuU2gg8gE8nv4tACmbWvLCK7Bj8oB1Gn1JhnJAVUpNg4Ka4",
  "key24": "3sucJjUPmnpxojmfbUf7jjw3AJNN49n4poRk6rqW2LUD9USaPLuaPcwu9qGaY64xDMu5KK27QTHzGqW71nv6ZA1z",
  "key25": "35F5mwTwr73z6ALKEyfRL1rZAQZQSqdL1PoDSxH5LBVrdUfLEwwC1sdA1v1Ke8zfq9UZwkZ1E5QLz35XQTA62mQH",
  "key26": "Jm89YnQBYxAVmYeuv3n1BdMZ67FA6R3h5KgJJy16MutmBfQPLsYKfxboft8WACrfeiH2R5cj8bURdcKPPRKR7rj",
  "key27": "3Ws36PC12p1wpZpoqkffNTHoa1DorDqG6GtkjQ6Lid19qDcm3Tk7Ba5oFD2k6LshuM2t3rm7ChoDqJw5jx7dSEcP",
  "key28": "2qivZTw7wKtsgC3Ch5Ao6CrkiRh9wNCeTa9WzYTZQijCZchitmEeR7gqqr5jZgvABPnHLsGTFb5X1QyuS7oK8mhf",
  "key29": "2JZGfSww6pcScWhqNayvKyjzSBUBqJrfafa5ku2WCqAFNWVLcAArsGMK1c2RDHUmMTCJc3VMx8wxPkHq1qP6hU33",
  "key30": "28TvG6LhaJmfseSbT5kPYp5VEAcFJA8n6HptpMQKLFZ5rXe5zMKSWDRqndizhYMnu9R99RdtdswcfJr44ZstSww9",
  "key31": "3Unxv7xG3jP5ib2LZTFXCtaf9GSAPsc1PJ5geVAAbCwBjpKB55ffViuzy5yFjdbqxH65Qs8jYwYpjUb7xQNy9QMZ",
  "key32": "5ZmGfPuD4Vwz5AcEDQYxKrL6FgDr3ZrNk8RS3FKjMckAefdh3ActaHPXywzKx2R53wkG1QxgHf5EGoUcEhD1tz7z",
  "key33": "Je2D2cX6oFSVr4ycBCUPdRn8szzEoX7iDbfdRsUC6BZwuJrGrPw2oBWNGW1LedL8T6aMnH9tGAULgtM8jJDRn1L",
  "key34": "2K4jWD1Pf3s9zYHGhA65DdtDPDQT8iftt79pkQjD82mB3Pbxo2b64yi4SvkkvTsWP6xiWrUvTWhKDRTGXecd9yk2",
  "key35": "43y7iAaxpHvJ9YZZJdNDpGMF2EPXTZS4B7A9Gv96asmMwJSjMP2dn5HjAbDdAY5NmfseWCum5LBiorwba5Ed1pu3",
  "key36": "5iHqgJzSu9NPCzmocK6JGt7VLkKTKd5tECGe4LZZptS1s83rVhNfcAyRyMN8PUFj5DSzwhgwS4mPYyuKZtPeWppg",
  "key37": "ai9berziGsP1RN3Tbu71U8uVUYgJm7qu51XGFv5m5nS1a5EAqmV344vRfzs2xC47ZYWmCdK2j7dgDAbDRsJ9KLi",
  "key38": "47BCVv1QTF8a9Y23Nzt33SVsfiyRDSzgrYqiH6zx6NDnHh61ob8qH8bYNu7T9m4GXqnTSzLM7f6tBUwVcbpYCYc",
  "key39": "4RMw5p23MZRPEv4sao7wBzdZ2HBfZxAnbkEKLmbMxLGkcJYAq6fTcBeQxQMu3DLtSbZDbVMYcuo9A7wTYnoUJ9ZS",
  "key40": "4xVNoekssQpwzWbjMcEhtuXTAk5vfX2YUapdAW3Afy9MQMbDHaCDBkBMTzYucotoBud6Au91SaSh2cMSU33KUZ8b"
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
