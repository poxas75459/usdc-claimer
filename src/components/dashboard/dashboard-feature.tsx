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
    "5dEEMY9kBwW2mtaUBT32oz3RPPMSTcCfCGzCETSmVmUU9Wb8UMfduJFNkKDkRheqDAPcf4FEwtsRyeuwiAnBLFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kwMJSa3rVfdnEC3Bd4CnSELAfNtupRxpcGUa4zXdax5yxey95G6ZVYeXHbZXrAkECs4JyaVVGEwa9nwkba69qZa",
  "key1": "2k2wXV4cona58tWZDFjdMHDnFFrAgFEpxzKbTXsEjt8B4Mv5qwGJnwdVuETv9Y2xq4bUF2j33P2ovjs3oNXNjHoJ",
  "key2": "638aB5h7ofhYAiFaJq7x458AznQrxtGTC8VoY3ACKCQqgtoLPZMLL2P1kAMuf7e112rwwmzCDeKkpbNRTo3oTSvE",
  "key3": "5pT3pLj25WJ2obuRmbVGVN7u3Jnnh1ouPRLfHRAXBiz5MHRHrAdnsaFqWH81BJSUf5vnc8yHq87B5dsKTiT6LwYy",
  "key4": "4of5rV4q2bgEjKk48wZAd2snbQqkb124fa8ZrnENPFJdvBcK1ibDJbNbUkhiMW43mEf2TUqPZrtz7PVjWRUWdRF9",
  "key5": "qwx2WPZHddHU1oSRmmUqUsPxtPciVjvAxxXtbgDyfCGWFFKnR2Ud7pcb8rwMGjpKXJhnwWvuAuLaECqyUdqXPg8",
  "key6": "5UvcG6FEa6t2iyjrbaq1wo2zTGbdfBxWcRm6S33GtXz38TDaUo6hUxonjDrZbCs8zMpZbDbGsPMj6nANPBVjBJHs",
  "key7": "2CcsTdDpW8GAmEr6gzdtuLMksegLwexN76DgQkK79EVADAhXgPMCPYhnyV3v1JY9yiAQ5A7KS9qC25YVnbpHMWAH",
  "key8": "4hPGmE3SYei6LFTQkq9JWem4H8ryqyJbKoc4EmLL66v69JvDrRutYxrsoZjg5FFGwMFd11dPXJ4PJEeCdAVwRCND",
  "key9": "swPaEeHW7Sd7vo7fhB3NA3Gf9dkVrpj3CKCdkmhaijDBT4GUoihFzzCToxrKbys77r7gHvF2usYWw2EJZYPUy9k",
  "key10": "XofFVCF1jdvNmdra24EZa5zJg1Xk2UL23GWd2KPTkELgAkxKFCP2i3nyL2ajABbMSGd2frAZt3dW1KJJ1XkSHAE",
  "key11": "3yqo2ZjkNJp37rukNqnMLjtgCs6sW4dYFsbQEXXwgoV8QuLZfVBbrxjPmv4eX91arUyRWicDakJtUxiU91HikQ9Y",
  "key12": "3bk42MMFCJwQXvEQVXfZMCq8KhX9ZqvXruowaJATaB8KzkEYGJHG9L3wRFTdjMbF2VeCG95Rn4sjuCPMetNgkaS5",
  "key13": "3zwm76wN8HF9PjY76VApRJV2crHKdCdegbMCXFQB4nN559Ca6pKBPF3VrnSXpwDTku5jFCBFiuEPdPZnQybaqu5G",
  "key14": "4A9G3rRoteb1qbdxEqub987ub3XqDoyvU9GdC9vZFCryb6jinWbQhG5Uvn9aCrtxEjmL2SHVzMj1ajJrPLtjTXYU",
  "key15": "2faZy9e4sZhKcSMduwa5Q9unJEw5e8L19fnV4Am5r9Jv2U4FAyh9cH8YRwpKRD79RkQD6enuLMjHF8eSYmeTo37u",
  "key16": "4UjtkrWb1nkvNm7LGqFnv5rpTrUgG3RnYnd9PLG9MNqUzec9eQ7tvftSbttGt1W57iCtB7rvA8xhxqXYDGXLsKz3",
  "key17": "3SeCCEcWKwbyRhnLcEeqzyWaugujtPB8UnZPtUnVgwFm4g5KzmjsiGk7LQoSb95DF594EYKvWU29dc3Ug1G7TQGk",
  "key18": "2pZQDdY4RLmcQNQLqwW57LzJo7gHhQc5dBrAMJDWyCjxV2Q5AjAhPa9pXYmMGUGSzezeDnAQA9ezqXPGfQmiCkFE",
  "key19": "5L2v5j86Ja8a5FwqCstQ74qYWEu2dk4jSnj8gt7YpV8bYVWb9RifNdFFTes1QzYfjCoihiF7qxer7A3SyetqC4Z",
  "key20": "3yk4ZRcwoVAwd6dmMHqvabttTNZTYh5jU74jPA5FEC4peRnSPu8wTAWynL4XPg3w3aCQ3vxWLWjtKTfo5HHPifAQ",
  "key21": "5WTqWNoT16zV1KiQU7E69p9m9HTGPxkp6A9qJyPAqGdkEmz1AUvupZyS7dpV6dmX9nCTdiiJKGt4jGZrFLVpEiKG",
  "key22": "59ftoag6AxNkeAnAn8gQLcEoSrAnxHrfN9DDSNGMLPLXS4ZQGH8Q6dX4wLxpsr8zDBi3pNg6ERx7qpJqPyQyef77",
  "key23": "ahhG6qdxe3RX6NWZLoG1JVjq1FY29J5oFuJo1XycXrxETpMVd8TbFogTbXoTvrmPRyArp47tEm5AHhivtC19FRm",
  "key24": "2ZM4yCX4zEfJ62p9PVYv9fz1oDLkQbVwVWcNzVRRcgJAhS7wdjfEw3w7ncMna6rCHwsFaJYuaPLAj6bLfX4bKcio",
  "key25": "wXm1nn61xATabXws48sFyP6DE6PF7SU86c2525ib7JkSEfbfrPbggmdGD7AV3u6SdfqBqrBLoF6G2wPcGLKwALf",
  "key26": "Ft2pZNcJaDYjCopftqjVXrvK49uKSaeE2wWfzFLMmrooZYJ72o7czhPC1DysmKAWGFf8ho4Y5xBQaRx1Aqq6BV9",
  "key27": "48PnRX1meaf879s6VCoRVS8bhaZrDSRvbBTjrYTmqezuTZkWbCcPDkfGeLdjDv95iZJJL89vaQmvqE2TwEYuWPKD",
  "key28": "44LCScCWW9udC7UkFoLosPfZCWQPXpmbbiGs1YENwemkdXmKMFcEjSa4fgn8RrAvTT7fVy9MHMm5keVFhitsEM19",
  "key29": "FbnR6JoLpqjt2ZyBAxQ9U8Q3hGoHywBY9hourdooyqQSXr468mmrs9tV8xvTuu5yAGRoHxdWaED2jFMfukdmnWr",
  "key30": "2LjdAxHJS8LmaaBR35p5toGXyayRSZN1kovL27uNYzxPxT8LSX6QCJdQapj69Qd9n4etfhB1PE3yhop2exAdnPr2",
  "key31": "4cZ3PPbBCyKZtsEgjFBZ7uD8Zo9USRxQ7QqBaTnUkbtxV4s2tWqizAm9j1YHQ8ZQtT611HDtSD6bYx1Mqd2GR59C",
  "key32": "J4xue7tMnbYo6BN6UNMVQptr6nzs6BgXYQQcznJDFwQFkfNeqbN9UgJMZRDgL8yZ9mEdZ6Hwvy7bWGnmysn3fLA",
  "key33": "2hxTEJbaHzAQAwhLKa2moZ6zjwAFtCH4P8NQbgQHrAjBL9rosPqAZo8zGUYG1BYgNVvgg4De91LXb7HLfjAhjDuR",
  "key34": "32YTDNtgK8d4Dsaz6AHoPKqccZVugsZmcDWWkNh5RKZGV4PQJWTN482vRGR9W28p6DMd43pqzmj5k6wUGaGdHK8m",
  "key35": "4KdmqUYJPctKbcFtv2uGA16JDFQawaGiaD7YKGoFM5sQhhjg4fS1VCFu1R1iRWR5wEouBYouB1Gdk5eX2QvWtUoG",
  "key36": "yQYV5EfrwGSzdMrnzedLnnPYYXQhozkWNua59b9sa29UH5C2gLAuEgWubUmY11rvPSLwb3kXkjuXh4BadVQ4Y9V",
  "key37": "5gFShRct68dCpxJ5bCdQBBLdJ4kdGxy2q4FVUVMwg2BtJ9rkEMuHoAUYFAeB72aqcySQa28XQtpHCjSvXbdA1Kfn",
  "key38": "5P36QtpMVkjYUQWQnTxAeXMoaF1Ly9Gy1xVW9qXqLUgMKdTPZ4KV8sRKciV4SmaQZDZVSthF3Ygfv3Ygqq9a8nbC",
  "key39": "2nuZexJtHwZQVjWXU99JDEHaareBnMEwyfT8PhPyBaF86ohCeo2WbAQvS9pbBahhB3rCaqaymmKQ387UpqbyXW1H",
  "key40": "q6a4gEcRE5LFPuMM9k2VQTS8b7aDY8DH7f9Fp5SS6svtRBJAymYf3JDqBhGfr3jGjDyquL49HeNqCjoGvR8z5u9",
  "key41": "2NyMgXSen6vt8wmSvCEk6xBxpM3Dp4axSi7SVVZsGwsABVdazdsnqXokGkAKTCCpfevG3naepexzb8PGKNH9RieB",
  "key42": "49Anf6JfdgmdqhDXqGknJGVpEWomtNHUXohzVQazstfxDxQYGscs3B3LidRVydAjgzkH6gCDoLVUnh2nQkD3LLj3",
  "key43": "PsJLRZ9rq8a2X3Y8mZtMTNk8ZpQQr7TipwsLEyFSmfoz8LTPnZ8kCfpGSHwA72B3kfRxTxX2RdvCqMe8qLAaXth",
  "key44": "45A8SZqWJAUcwQURufcuCatGwU2G1ndgoGQjRfiX7z8fPnCTgW7YeSBgyvjzTy63cmkXDcexH8tr8HU1w5u6GGDw",
  "key45": "4DSX2xeG564seudy5RnK4Y7AcsoAhbSssyTvE9viBXunne2NaU1Xb81XeccQrW1z2Fimbc7c58gNE2gvqxpaKwSA",
  "key46": "5pkCjLoUHNGvmzGR51yh7aknLeaTJ2wzHQwuNWYbWLnyyJfBCkz2QJj2bssPiqQZfQcbwvucbK2jB7Cx7CB151iW",
  "key47": "2FL59UHwQFDEZBeRhYe3GJ7WZMe2ff3aSqBJSkyQdStiESvfGUdRPS64HAvPvhWDVY9n5ApoMGeBa6phxDk1GwHN"
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
