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
    "2szHETrc9HPbS4SXA4gZLXZH3qo7DxM7oJrmmswvDVUWfh6rxNE4W3AdwfBk38iHoZSH75EkTBMdjfxJvUozCouF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6vUkngximXayuvL5EhdepraPyRCqFLggzQnzHuGzfwAc3RWjFktkHFApyEvKkCQAhGgW3mRBi66krhJAJak2hw",
  "key1": "sg4UqqcoY5fC4FQvFrXEBxtwDjccTuAQRAouVTjw7MxG8THvTvc3tzA61mS14bHHWUZGUsK9ndJm1pAnBvwP7Ba",
  "key2": "KKUyphPQDkTEzSbam3T487xFBPiP2iHjcZWED8Gs9itPi3MUysKe6XtrzMZvd3XXZv5e5zTRo7a8fkAXhagio8s",
  "key3": "2yBxGJGC9fm6Fs61SArfjTcX6HimpaEYgdstd4zNcGuhMZ4ztZu76GYqmjJZjYeLRJm9EcooCPho5PFknFFXYJ6M",
  "key4": "3ziv38VkJN42PaFqnLRgdEfmpHem4bYPpmvGjPxkArs4CWp3yiaR9C3iFHN2EyygFRKWJXCrSb32cbLc5hsDmoxp",
  "key5": "5dWGVqW6SwLCyvE3LahiUbSzwYokX7FKZhVufrCU8sNdz1AeToBrn2o6NxZySVoB2KboqG19SexSzy7kteVewaBW",
  "key6": "QnjP9mtc69pzxVdPu9a7atjhMravwQWRMJR6q1qHpojGD7orKWu53PRg9dbbUVfijKZdx96TYD5VwygbZLxW63q",
  "key7": "4JMvbypdEEDMLtyqNyr8QQtf8PGbsodeejLREA8HQY1rzGcs8GEMhNVz8aA7meqiQ73aCxkoRGw9iFoZsChojrAY",
  "key8": "9zFp7sFFMDCAovNz3UTGWCRhgZa2FAcZWExCmd7Dq8EECcbsEZinG8Yvks4CXBLcxmpjoWyiL8Ekfgt3A24VWpi",
  "key9": "2JthCVFbnyhBbaMTg4SMXF2mw5iaLjrTEmSy2hbPQ5urKvVayXp42oBz9AdgNsgY3zvvBjjETciq5dxpoYM6C9rG",
  "key10": "5LoKF4wiBXPuTFJ8FsoxLP8MVoeVsiLmqSuHcYD4xLx8ps6XJDvq69fZQSZqTEieNNmMFFLwN745XeRiQmKz3Ugy",
  "key11": "2f4zRgDoGNucPyDVkhLKVsTVMPVi76KfmmKWdBU7VF7nvH9tKFhRtXtHGVYVrNfeM7sC6SMHViyau6Krf4bFUsUo",
  "key12": "4FjTrf3cZ49cJUZ45AGdu5RYnz8u9nZQc7GaSGzuNTUWG3JbBJj4uMrjA4pexhcFaUiKfcFnv3Rm4DKZD6wmkaGW",
  "key13": "54PQrp5B5f5XvhUfLAez63U432aAdUVXLTJ2Gn87ou8veSDQjDds5Z6Zc73ee9afYB1B77nWZ94KWi7aQirfgX3N",
  "key14": "DTUdqrBR4ooaNGd9fwtbX58PWh6ihXzHDn4VJkxuEPMzkse9TsT7Ac17zJPoyTWU7HjsLckaJKUE9BNfFviohbQ",
  "key15": "Gi6mxNk68C5eLaFvrnob8wenMKVKRj5wRtAkCsczAS89b4FCu9GrUqiZJYjmwo9ZdtyDWi7zGETHtDMQiSp8G2u",
  "key16": "5xzxpiohBtpuqqGXp2KCYQFCMo5FSrDZrgkxJ7LMB22NdJZZ7CL8YVvTm5tG8S2mqnenzPgyAB8MW5PwxUwvwhhF",
  "key17": "sad7KL5HSSEhMxBttEwGnT8V36GhQH22EiEzztWfjzYYP5GZS1FdFzqpWkyxb3bNV8VcKP5ijpt1V1SBBiBKig6",
  "key18": "2C5juU7qHERWG31ufkY4XSFLvD4wYgcD6Y5KqLQEtZSZgGy5BScB6rTVurAG8tGWR8zeB35wz93SN7RMY5ie9xPU",
  "key19": "3rRGAhzyNJN6NRhXWNXWH9C544sCubvEj5sMSw4Q73FyZXnRYkobQ2zRAYrwNYePQBB87RXoDVp6dm2guPMi7XZg",
  "key20": "5CYr1cTLcjkoc1QPTtGVTTut2ezkoMNBnfyTFqxbGav3EjsAu49XdBbUCNXy4WX84T4DPVzigYg68hY49N917jsR",
  "key21": "4LZfS9skXZwefJbTAuCCfe4oBJVtxV1QXDeMMuYRLn62BYPnJcwhatgkvHXmDKMuYKCD9ZULNu25sdznWZ1zP327",
  "key22": "CoNxQPSyvmM6rxSQBxpdfX5ZZafnxJrnkyXydtvPrZj1Hk2ffdcmhbt56fNuDffsCgAsEu3LoudyffsyTzK96Tj",
  "key23": "iF2y6DoB2ENkpDkBiqanR2srqtfvcVetXudVyv96Q3ZkUi8rF8vtioYra1wTHB3ZS566tBPNy2SEEsQRsyu4Fch",
  "key24": "2DEuBLWEHDS452SrpV2ohDtfKZbw6MtcdS7N4DyMwzuXWETCD3ip9oDGm2v4NTrvjy541XfwAJ1cunSA25amdv8H",
  "key25": "jeJ87yxjPfD1wGduGrGAuBAhghV8BMw5hhwmYyuM2YUhRTSmRZRU1h5eRxYHuxXCUSVyrbHjW5CyGAVGQWtJJSt",
  "key26": "4U4t5WksQrQMETyGjitEFcsKFG6MRvLYWXnh9LWo9HcBHEjyhdvkdrRZ3iP8tjYGDRGU8e8ma3c4fre6o5u5R4yG",
  "key27": "mCUbpY3bTxKZM5SbTounZKBrRP4TNb7quEuPLwJoDGwT6QXfcm71HNG5NgdwNprYdc9vPhWjKRGWjuMnjo8WszT",
  "key28": "3Lf3uNGGZ59HtV7FwkCJdLysqwd2aYbsS7z45CBoqA65HBDN6kfyri5mg1rrknrNQy56boXcH1vMLEqHGG4gQrbL",
  "key29": "z6ueDz5SPodURAbyazvMSfWRexbBMUxUjErSesRjq7k6Uis8CPwQE4HCkQGzyFtfaKZRCVz5MvMfngye4u2Byix",
  "key30": "3WNcWPpFWpSza76xhx19mVkNEqapkTM61mqyGPkNYMPvEmiNjYjndr1mndkpgcedMNL7FivWY1biX3kMG5b5rHqy",
  "key31": "4EBWFoRWgVpqzTKyvMsETxpe2jo2mYnESvF3jCY7YW7gndXUwkv4esSoc34bh9pnhw99yRiW5XpNSnxAtncS2vT2",
  "key32": "4wvNxxRLSeKuH6qj7XqBvzxa1FtqfGdrfvBGXEY1SkjTMZdusAn8M1fQB2k9WQD4cWGvCJtqNXzMYYt5ggdCcNd7",
  "key33": "4byLj6sFXQS6TXaophJPYHj4CDhKk2CWZXXjzJ6Koxu3HJ3NkMcZ8CDab4SDdnUHK2B56RU7qqyCR74jQFMrDFaj",
  "key34": "iLy7Ri88YEqM8dgfHtVhEEuoD8ghsJY3KHdGR8yJtpGta3K7bJomcWdXBotiQyofe6RQCUeFLZbNz85K5AQhCG9",
  "key35": "58UHMowkWszveW4mPe6gxZ8dwGrFphKqcMYanBy1GnPnutnmxn2qHkDYNcamWi7itc8EwWjv3UfA31n9qtnSAP7Z",
  "key36": "4p63FhTo5AbTYz79BSxDU8CnNcjwBQ5pbePddbZKVVkkYfrAVnuHPgCcF2EqoMPbLbSijJCc9NPkgKf5Y558GWCk",
  "key37": "5kE8uMsSvzSu32yM8iHGTN47tDc7MZ7yB6eey1mpPARnQUttYVcHNQk8b1e67HoUBgKN6Rbr6zS2gR5vw6bNDxg",
  "key38": "34c5NBWK1uEWTj9jSh1TbjUSgeLf7bXRchtqvrUhrsDo8WANBYXvLqw8uDcs84NBNHwtGEo9zPfHCtspRAjASn6e",
  "key39": "AfMxsa7qq3Nm77rUB32bLEe9XApoH4W8JNzdExXESJZPydMk2ogWsbGKAz2pCM86YuvJeQYkU5CMnVTq1nERKb8",
  "key40": "KTdNGv2BWdWMuziLdgtRJhd1jAoyF1X23femz5UQyzPK9vwrxcwKMBei6AYiCwex581ocsLKtXtxvV1FrxcaFur",
  "key41": "7Cj2Zywp4kTpJV7ker9GQsTjcKJLikvXxYj4m5NYSf5teoosezSpVpWL8LrciHtBQ1uEQTtdB7wGvqxbpXAteT3",
  "key42": "4cck8k8oidZsjBxYNhM8xarrpyvTqTqrXfvJSnN2J7zh9zsN4bDMd5ngjzF47kUYt8Z3mJiNYxgeCAEsgEDEMMX8",
  "key43": "bjawV9sop1TEz8s5xwRC2j78ozVoymkxqcedB9oTAUcSutj7qd7xDZwdPC4gz4WbsXmVgZSHB8CAuQ6HLtmyxJu",
  "key44": "MrfbVPxueA7PZUWmPrWyxXV3Y5tH8aZPXbbpG4uW7o39AR9RqBNktNALwZs2AcVa5qc3zrDPhRzKWrF9DXifxwe",
  "key45": "2NiZdnwkCwfRHLNPNC4iUVLa1fHmxm25v5YUbyP8Cv6vg6Q3RPYbiUGJVh3gQY5NzVsjCA7jZVBvzFbtq8cM8ZeE",
  "key46": "5jNPYQ51q1FmHZh34imwEoZjrNY5rVSuo4weSN6NYXYvdTtouvmAc9DV7ACJvX6nQS3PBmm66XV1EGLXxx2kVK88"
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
