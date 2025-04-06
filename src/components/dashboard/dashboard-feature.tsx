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
    "24KpGASNrKnSuh2Yh43MBhEw9wHA3WefGnA2FXaHeP9PuA2iZBnVJPA9V7tu8aihR5XnXMwXZ8wfgCkyH8WY6Jqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uDfpSTV8GnGz9NtWUvnwU8z5XowhXLwj26Qko2weniMTZnx1Dh8G4xENibHzhSaYD4SM8RPhd8d7MoLqEWaxYJ",
  "key1": "4RRFXR4Zm7Z9PNUiQ2eBAjmyQPggy5f6ByAKFFx46JAXg7KHtftDdEybbxR4LG6PRDSy2SKqGQMtHSNEaFSeJhR3",
  "key2": "47KcxdhAZfxz4XWjFkU3pSugfdqaTsiHTgcbxkgaEK7fs8gdymY867YD7AYY81j1e2S5motj4gVzpyMGdm1hSSR7",
  "key3": "3GgybsaaNCwmRca1LmsmcqBLFTcwr7xTQS9FVccCU1mpuxQDciv3zLBgiTPS4QXbqFWzaNi2todaAgWy6BqVBNQ2",
  "key4": "4KMkMq14mgQ78TfghuFFRkzjyZcLyfavp3DsJpDTzd1FgZnpjZcYsVmkaJArURsuRmgKtd3H5YGCU1pqDDe7eRRC",
  "key5": "3PBwfosoV5hALwzpSGcChyrSYNEAJQ9J6TnKrZCbNBiT29wHBr3oH8uQNg6pagQ91FR9JGiPdY3yGEXtjENxW2Rf",
  "key6": "2DBc9r867GiQQHH5yxtpw8CMvrTUFXS7PcryEL1ntxj1XhVojvryR44zwfGZ6gvzyK6JYu2kykPtnF7hqwMtv68Q",
  "key7": "2m91yswq5mscXU9z3rNkuVcUjZ8j9szrxRdQ2BBgxe4UGoYG7PrrqEp15MJvsxuNqg6zXT8SstcZPEXERsodt8xc",
  "key8": "3UdAKjhiGopkUCG2LHFQNrkXgwtupK6ZCVn2xi5ko7M8CFbEPCXDW38EG6uTmVJ3CgpE3u3RQcqEbCwjdQEsenQn",
  "key9": "nqLLW3EdVvrUyhXBFdtgBU1Aip5Md5XG8Th3RmjNDeqUkRX2xov7tb4oQhUnbFMz6gNQA1xMmCMBb6EjtCkf2Mm",
  "key10": "4W5vuRVLo6pdef2gTBuzzXGvJJ93jdszPRpQWPg8CtCzg4YYYfYSbsfvU2WDmEv7MKoQTkYAi1zZBAMNJP3Vbgcf",
  "key11": "9qzdizbxmHegUZBCg98BMjoXmegmNkvsHqRojXuJeFLzN3meARKwNN77GkZXVPMy22rDgD5NQzL1SFeo6DjPTp4",
  "key12": "2wn7J81iyKnex9HTuxshrgswkR4WYpFteewiwgfyHFLWJz3oLKKY84GccShFLr5p1eiKbDoj1zftncbBxnF92EUh",
  "key13": "5pLHQqUpBf7NEa5xXCjPLQCM8fof9ps7PmXw5nkERe3E9JL9TyTiQFy3Rtbk5rhK2jXBNkKg1vLDwv7xSq71a7Sf",
  "key14": "2Y1EN7F7bALuDNutQ8rV4QroRnPG6YN4qT9meVwcxNWMxoZWictbVaVvikM3X5CQdmHePquJHtEQfWuqpV11B2d4",
  "key15": "27vNyodb4Hj4FDZBqSUSsxhA3WadY7Qh6qGziDP4SrhSnPFx4akE1jvNNUa72SVJYzQPy8pDeUZ3xwkXxdd4s1KF",
  "key16": "3cHC74pBeRvXJwmdUyp9bjitekEwPVGt1naG8CFFxsvCQSqMbJrvZD6Z3U8ZAYe2EMEzuxy6Wmw5nkQ3fvFZya2m",
  "key17": "3J51W4NJrd3gpDUKwpHnmAb9dJc9eiQBtT2wL14q9TsQTxExnAqVvg3qp8uyjgaPftXZvb1MYAqgfkEiWnoXeEti",
  "key18": "5VHNEUrria21HnEx66y7st3ErbEjHP9MyTx2ehMhvGTXUaMgRgdH2h6ef2h9mSTcEw1nvv1Qxm8WoWHgiMR2JLDw",
  "key19": "2ERm8ZktL28Ur2JsEgcVCADbAXfxYntgFDUqToyNd1S3tNEhWbRHixVFxfL7uCVige5XF5xsMX22ZTBUMYz4hsJS",
  "key20": "3UbjUKDP6c2NiDHujpjEG5sQ65vU6UU3kPY5hBvsZKJLgXBc3XSaQ6nXSMfCW4uAY5CDGXFhmEEMEaH66gpFWWPQ",
  "key21": "8g9j3nBXdEXdwrJTNV6uZ3dsCcwsSzVWRRXarKfB759QKsr3PYmnv1kgBV32xfrdjQPs1RFyLfzXDtifraisrij",
  "key22": "5zJkjXhXhxivf7zi5ooefuidV3EiQDs1Aad8NonFe6cJScquiNwQ3Z3zzXXvCWexGx4VxHkUxmHTuyjCQgyE9DwE",
  "key23": "52MSbbX34kJe6F3TzxWuwjHqEE9PoHDeS6uz38UA16cF8zdqZxBaVQACmnbyMcPKHUHq8ipxnNn6tfrvwS7jRQd4",
  "key24": "2zFtSkP8aCjZhZbzsXkZHg1LP1wyRg4hFEJ1TCTyu4NTF2YqzPFe9Wnvy9ChcSvt4rHMJ4pPYCSGu7BU7yNksxZy",
  "key25": "4UWxdgewc5ZNWE5Mucs6L1XzqnYxZHUmNULRGkwxd7VDk59KLj7KcyoAUbnywp9YEcm68sJoKAjPdckEnrrYg91T",
  "key26": "5PpJyV5y33WKVvLHnAHM72vBsFrFs7c6xP5wyhxZaT2eYi6Hx2LJh6JXLJz6croLVP8uN9vFPViSHwT6tnM5pQGZ",
  "key27": "dp12fuXDzNrpXZjq9P6zVZUArJ1cPNLYtweFmFrVvcCQwEFJnqBtRq5e2EBssVSLn76nFHtwLN5PQJJowPUSTzN",
  "key28": "2VMBNXsZtB9Gf9bPo6HE5F3v3v5WBgBRaoJ2fpw3HrjKqw59ehm3ioVGSsXCQwpYMqPhgzqu4A8y65RoNnXp75Be",
  "key29": "4tfQmADXBqVGHigW8uTYS4rD7ADawTEcF5aNbpmeFvSV8vHAjS47hgL4Drsd1oYumBFdNnwvab1CTVQ13rN1aVdr",
  "key30": "5ptUu14rUmrGyuM2ZrQTQz2CpLW6bUW3iQPJY9wRWnV1yciWTjpsjGKRzDXQ75bGrE2JLccunS49D8sfeoYk7KG1",
  "key31": "cmuQBGJvnzrQL3BRP9YZpjHr6qmeW61FRx69WyryPhcuU4rW9VP8U3S1VFrMgicY9zz6Kr4N23cf8qNRhEgcXty",
  "key32": "4HJ6Ryqu7sE9yAN8n2vJwfpnB1gRfA57UTyfsgZDjCq7U59s2TcFV3x4U762SZGvRL81y5W3z16vQGuWLQw7XP8K",
  "key33": "ioGtZznhKdHuEpnpAdTgiB1UU5bxmYuCyUFv7pWSpoudw9DCVGCtgPsUa3AWqYq8bidq1p73hWXiktQBBEnA2Kv",
  "key34": "Muk1uFwaFugZEv1Kk6G6bbe6s1iJsSML1yCWUT3xG6enSiuyd87RQa3BkrrhdADKShmN8EHocuj8v4kbFZNqcHJ",
  "key35": "65EeugrtUvFqCqzNYzbGKfMpVULeQ9Hbx7DJ3JCx9rJRLQd77AP8US88p9XW5xnKQkwGHZyrMHvuH8iMqkJrcv8C",
  "key36": "AJRox3B5wPENij2bjihGA4euFEctEtD759b3GpUHaNyX5ak1UuZdvgqr8XLwMAqVahmqjVMxWonNtcMWLdaNmX8",
  "key37": "3ui5dKgjatrFJkFK1V7e7sgdFfVVmR8W41KNmZqHw9nAVWkQHt6aza2wvWSNPoYBxPgb9cmSP2s1PCpcBb1ignWc",
  "key38": "3dAdRs37rYZiNA94waSiiy5H3D2Zm82Q5GuTJHMAXusLVWNTnCTBybpTqmnBngcmxa8DEapaP5aBWzkZGVgZqU97",
  "key39": "3noeVsdJgxriq7aFPiytLLGRFgoBQCNVyxjK5TSsc1h7iE4oFkZTFgKVzm2z3VYCoRz9yXRGAqKmYjp72Qvvv3ry",
  "key40": "5geDCAh5t73bttH3g6XQokySdwpZobpaJxCgEsHUbHumpXsPh7JvzV2GZiHhugoPn8UzHxGWrE6XppMxsTsbBmce",
  "key41": "2rCfXhhMBh7yGkQX1VxmvjpE1BtCzt7sN648TYsbhaShe9MWnjj8Z2q2DvHsfuMDzsKuQWCfaoD66fGMe7uVUPD3",
  "key42": "3JScdDZMsmDNJWML6SYYbjq6FhUdpwZSvq5npZzjMPTGzYRZG7V73iKj6kjnpYZFcbzNAVWyummHMnsWegr4ncC5",
  "key43": "2HtPU9vshGUXzxYRa8oMyLed1rgApobCCYYt9M1ryRN1BjTSuLb3qCbnTQ2M7vw1NXohZuUiFaxMgQUdodnzxq9n",
  "key44": "2xJ7J8JMgd599M9Um2CwnQqSMgrMRr9qCabHzHmsJZHQ96smgCsow9mCiLkmVDPhGjMs8eWmGGtevYFGtTFW2GbR",
  "key45": "3rkaXRwprZHWx1BUsjdANnN9emm5WNmEmRvaH2MiXvjsNQSAZt1ZnxDv9YVW8g5kBRsY4vqUhLnzT4e8AoU5iBJA"
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
