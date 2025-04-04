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
    "21avWxG8eP2unZdxMDovbfGmMPRthdtuDnPeqNHezvh6TYVNutC84xAdszVuJDwUqtCBZKRSQU3ngVVSaWynTHmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fes4LDjAhK225W7zertjqAZQ8615X2j7kafNFhXEu6Yy3EXrZEmHDTpeZr1ZABGGjV7d5cddMo9yEY6LSntE5ns",
  "key1": "8JR2bqBUGxFCNgR38c2Z3bueFNQaaPk1PbtZVUYW38HqTj9dybS3NovuA96Rdt6L4rNtraNQxnf8y8Y5JjkuzLT",
  "key2": "3ECR9tB7GRSsNthc1rG5DHdDV5j7vF9XvDSC8C7NPmKPyHPCVPmbXNf36GNarBRyX5TYtNWgkC5Tp5GcfHJRrgzf",
  "key3": "5hj8sRTUBfXDoCkRUuLR1ZkpR7jKCf2oGE6XaswbUE7ASK8Yd8PdfUfJWTxYgMJpDx5zvcvaAnWTDd3no44N2to1",
  "key4": "5b2b8i46g4sD5iC4qX3YtLMUj92YSTs7YpszgymX8Z537s963wmeF7CzEaPA9Arzkbws2DmycKfUCxisPM8pwER8",
  "key5": "EpNzwBch7PEzEv1wjuAWFXxeXAwE7XRmEpYCJQeA2gTCcwuFHtTpGnMMoJNfT1maNGh4UGpwXCMXhmzVmVTr9iW",
  "key6": "2gXq8oAgESWWSZJhZBxsbatWxC7tV7ycx84nRDjwgVYyQbPmKXc7hshfizEPunnP9SFnB1Ty4EgWM6BLB78raWUz",
  "key7": "54cKeUUA4tDQG9myTR4XiwFADuiXUy6fuhrweCRBBSkCe8kJYM3wzmcKkJ7jVmozKAVLZ3whMJjFyMKPkUUeXQmU",
  "key8": "3M2vFXqgx6jDts7h2Rm1p6b2CkQ11HSyc9Ci6MwyyLZJw7hMxC3Y7hzy25AzHXLSKML2w45TL4NGvmHP1hZwSnjY",
  "key9": "4mV39jTu1wH6No1dhXeNoAiR6eySzrerpmrA5y4a1QQmP1XiKwT191WLFWCjjx4EKmEMa43xzAKAHfZUuSHyg8X5",
  "key10": "2CW4k8iMsTBQ81PfmJiUmprt1ewznHmoZ2jgxTHe1mpmHzUPMVXMA2bwGtgmnqktG8Mr7jQBgo2siBZN2o79u1Hy",
  "key11": "ysJwM4pxeRECU9UT3embwXHemyoqZot2x1LLF3dWfTzrUBjM5GpFmkts43eb8LH68z3yNKs5Ley3DaVZmr3wWH7",
  "key12": "4Cp4WMZs9pBJQ2meciWW4F4WvHRw5ZEiitTHnqNvAdj5fH7eeSktQZbLecKM7dKK1R46ffGNyf2NGBbWwKgHFSt8",
  "key13": "4MocgEAGnjcWFgak9Ez8PBAygtuG5WBLE58MT4NarJv6Vueps5z7noa4i1dMvGYfnYeWQgAffwWctLTeykMfFary",
  "key14": "3XMMshtdF27koR2bQjxZn6azJpp5o114puCSCLkJ8zcdvUfZbjqiaHYqaiZda14c9TFMLkiNtAMCmTx286DQREYG",
  "key15": "3NyhLuBj1hVeaUXK41LDYxAWWyHpWiXaTLc149cXkSPzaUCGCjde12H5QyQKGZbmC6Uz67goR8jtuGmU7UJhSa6z",
  "key16": "k9x6Xs4H34rXV44sMfmzQC8wTUDetdJGjZWt921pAiMbrb28qaJouZ9ieWrUwZKk89e87yjZfbE9gFsAAftiet3",
  "key17": "3pbP1eWPMyKheaA8iZZ92a2LBmsyVRG1MpQYR7JVQ9wKtPVuB1pUaDa3fdrqhsFERJ5VGz6hF5sNtYKj6T6NCVkQ",
  "key18": "gPZPvVwtVuuKoWFnFW35WhTSSY9ZivaFhuvGhsnYKPVngSjR9FWEvvMXF6ZAj7Dx4XGc8mgerUdQeA7YV5avhbZ",
  "key19": "26jJ17PcLtYcSiTMJzzPLgzMLHEF6QiHYFFsk55jBTbYQhpbTGNDAcN9wh7ksUb8x8SLzrSkgsWDM6gn2TKwZBwW",
  "key20": "qUdfRa7eA8yaMrjY1F3zqMihxfW1DyCC1a2SqeyPHKSiJahwyoUCjFr4MAwdim4vy67pNzGCjqm7ry3ZSDwf8X2",
  "key21": "3mRKTTg77hdme6SX4eKgVTo6wi2NrtU1K53PcZJ5bA5Qd8FBmz8YXPC5hadVcV7LW9aJZ1yUEZXCsG6pCCY7mF6X",
  "key22": "24pPGKPL4evVNfdPnL4p5b1oUijeieFLxBhCFZEopUokp4xxwiMDPjyrS7KGW1TmZ5ZzLQ5BbFeieu4i85nJ4exm",
  "key23": "5WhcRbuPWqgFQ3LTnW5mGbhRyQf5AR7TCWgmcayXsMpBeLaKfFJw9teRDuLhU5fWFPbeZcZv9mH3aHa1BVQB7K1c",
  "key24": "EZjzZq5qw4xbkRLUaoUCizTKSefRkX8oEZ5NMgsQJbfjJS6HZP3YoK8qv6nNK8ceSemMiukb2j1yEiv34of119B",
  "key25": "4x67umeWSoLw4duCwFgb1YsU8z7t4iERSrRn9z4tzG8XQcLVsPA4Liaay9HZen1sA8zMfhtHrY88GMtex9KdYBs6",
  "key26": "3dUA1ppZKW5hjumioAS9TMTowjLA5ycsR4nX2T6m2fGi7B9jkKbcvweePDESqSGrh9QVoB2GonjHQ6MjT4iPjoVf",
  "key27": "AC1uNQDa4TXGbweg2c4Vnfao5GzkBu5egaNxt49hhoj5cnWUyC1X3WgAf8MeNUDQLDGjAHCBMFvNoGizxYTihm3",
  "key28": "4qAKA9fnhtL4L7jEPm3pCB1Kb8y2b8SJ3jHuiEAUCRJC59eZ66LUJ3ybBAzvzTDJKBvUm1TMnRL23Gee23Zd2Yh",
  "key29": "21gnM3PfL4qsgkqtXoDEYTz4Kirb5DtVwJRu6fJ25wFEgq2Y4gwoXhEY5m7wmeLQ33EUT6gRtMr9NuyYgWajdSqh",
  "key30": "XXbz96R4gK8br2gBCjpF7LxwWFfYrU4TLfb4CewNcn2KqKKABCnDR6wMjUUHCxyuEpnubN6Dg3kTLd7S5MCpEdB",
  "key31": "21KSCZCpt9ADUQVhRyPSHku5f47U8dY6eELhQS6c17vhfASpx3w79YBJ8JN9UA7HrxisiXkuKnrkye7uUHcUVXQm",
  "key32": "3dkBwqBtbgzW6ebv8kpoDukAnqrR27CRCuKNLiAcGEuPcFadLR3rMJL6gWVxZLo4EWLzmAKjYsy9ZvMUxYCiYdy5",
  "key33": "4GxbM9Vhs6f6f42VX2jo8LWsvVoonU6SwviM9aQVNLC57bnJUodRx3ebgeRtUcCYRcht8Z4GAeZPw8gZY35XuUt",
  "key34": "3KWMiw6Rav4Zss1n2e6dmXMZpjT6vq1CP9SdtF7aAZLx1tLf7srnDYDRgbvdyrLZ4mDfBsvdYGkkbrJQLWzuwfbX",
  "key35": "48CAtUaAdFKqodVEUsrcKZ81ebmrRPoDoiq9BTEog4cDAa1ncUc58vpTBhhWu1waqNYv85F6X87yEQs7KHbRaNFc",
  "key36": "2hPicpRcnBN3XL46Q4U39QqjKpH315W4t7R7hH6Ty4HKVs68QQ5edCUK8t273SxgceK4q6S9dedGf5VHmZKuk3PL",
  "key37": "DUKYuTp6ewQYVg846VvwJEQYe3CVWZa2H1Eb9CYuNn7hKT9XYNKLp2uoVP4wbe4JBgU1NVfGvqosrYE1Nr4L558",
  "key38": "jAKg8bQzVcPTPdf5uutKpTCkjMbkEvro19SDXc1HTgCPVeEmGTmapYpmFZ9xjGVvmTzpCNkZo1ac1vfs3NDq7Nd",
  "key39": "5q1kYt1Tw6DHX6uxuvokgXsvy5DwPCKqjTZVnp7Q49T9REfyZ7nzTfAKYbZ4H5oF6b1Pd3o3CjK2tajb2AeerzMv",
  "key40": "2krhpFRszg3fN79VAzueMYNmibC17qaVj7zo4VtuP38vU4JaL9CtGg3mibVnDAPatLPEUCZpRNpYCwFjTiPeNjYN",
  "key41": "63f3SMk4eTTLt6nYFkWyUYXNj4U6wEP5yAo7rmnZEgYy2KGxHhZAnn2tT8xpPwyVPAxnFzuTsTT8CrestdEdRtE8",
  "key42": "3BmsLyTJC5Wn3qJMasPw9az97tCrCJgxfwWKQ1RtGgJcatRTa6GZDmVKWQK7sdqzRPgU8cGirohDGTutUfHbVN8W",
  "key43": "2kFm8QFSAxxS9z7G8Gzor5YvZNntxi97AX42wNh1aiHegCz7zhirfKG9c19Zy4esrJVPiUdrMcv1eE8iD1TRQmsT",
  "key44": "4diSfJH4eCKbVZwSU26KHodmJjHduwYwGMjbnEgwjBMYyyisNihJH2hDzis7bNw8W939WMP3in6hLLWPBJV8epfo",
  "key45": "4qBbfc76tWwo3fxKLRGjfUhZbTjE9UD5fHjFnbX1W6aAXDYAieeqp1jmikg57QaarqJfP3uFjBYVEFVGD2wuXrdU",
  "key46": "5o4xNRKfc7CKddCPfbvXnmZWJ6ivgwdSwW3EvukYiSA3w3uje8KMDF4VFuboMHgkfXVnEg1wWfVMnkjSgFkxKNHL"
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
