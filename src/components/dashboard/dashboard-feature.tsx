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
    "2GJRgDbRTPjmt8vgBsaDBjVDZxnShF3PRQEvu3hEy2V1NUX8SF8wtvsuWxzsuAxdiN82JATcF446U49Asj8djwKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z31gA3EGo53EsWV4adp2Mg6DV9aPVaBujAWQw93o4v1rbSrJs1U6G4xiDsG6YsiP1YXNKLoDj72VN6vT2fZzFV9",
  "key1": "3kthaDcnqsHehq3PYD1FhQfxceTKRLxw7X6NjGkkML9aHNStdPZYjaHHkYmrjpZiSSA4cgHqEDk1v497vHv2TGKR",
  "key2": "4fG6rjNrX5QoCnjjRm6HeBMZENaXVpQaeNrzYAvQapPZzd8ucbYg8LSJ73DeAvt55Hh4whHf7EqeywA5YR6FFEW2",
  "key3": "DhnkSfPFySDJfKMLMtnPqMnMa8rTM9Qsj3UfPW7oDbsp2f3zowXznERqLTm8tUc7j9sq3MWNP6osRor23zmqnDJ",
  "key4": "3N9R2yCj7PH39TTeVastSLhi79tVRHu7mrCFfQtDbf2jVhorjvVn9ZdFdBj2CqAMA42rY5oRV2gXV8Q8CGFjpLwN",
  "key5": "4mDX2aodnw8RHdXXyLi7oLn1JaSFhAGYFcB8PxP6XrD8eV5g9S2kC3soK6KEKTtNGKvQzCPM5rp1troPZ2C1qxTw",
  "key6": "4DCH8b9hkoCWr4VP3Azoa1oot6Amh2xBWCYnGuiR1JQ6NuvyeAGcXmhnzBGurEPWZkf5dJqVHrM4YBtAwH3C99op",
  "key7": "qQs6yr7pHbETkLkQWx3bx9v9CP5BNzS25HBmy7tCb3zSdhSD1W7rJjPPfGwCiFfsB29YeN7z5aU8x1xMPGLx9YG",
  "key8": "28cF3asdpNmQkDvBhFeGArDXdjYkFnbv7QhA8R9SbRjmXnKBAqTwjwiCfZF5Bj4eLv5kjXZXAXzBh8MGytW2yMB4",
  "key9": "62SuwbpoBqEzgzzdNAYsa752LroND1RYdbZA7EPnJyPePdhJxZDgbTjp3VBFhUtqhT1Ayazse8mrvea3LrTV1y7x",
  "key10": "2nB7QnnpRzEgvWFwtTdSfZvE8wHaG3ZCaBb9Mse5sxoFuJWwwXmLF1S1yWYWbn1rzFFF2C2tiMJx9HEXpmdStr1W",
  "key11": "41PN3eA8vmUEfeMPURAzDMfMTjRZgPLRmFXhzZcyiCnBim2tDj8VRMvUeT3c2SSpKgJC1WX915ZnXXmuPuiTZwq1",
  "key12": "5fEUsphhTZdfnkgkvQQPBL87TYYY2rRJfNSeMWpWtbGe176zQuhnF5MFGaUyHpWnHaZ9ETweKEFwm3AHmji5jZN6",
  "key13": "3bvpTzA1ar5fa5cPQym4ksDYBzSZoswBLjnNYJJtyKuf5ocejoodkN3iwB89JpkgbrRpEsK2vqwFfVMHtnSTY2ET",
  "key14": "2QdgwynWcqAMaQtYMrhqtzCwPwvEim1yyyw45mGh4bn9HckceDvR6q9q9TVQ4Mb8hRE279BjwHp5Qg2sCYG3Sigu",
  "key15": "27SXZ1BJeL7h2p7PWAyHd5uwtZqtWKryZBtsWQAZFdxk85MS4CJcgbs38ArfZx4LHwBgcjc9Zy3j2xqEkoYxjgGJ",
  "key16": "3Wd9SpTR27FAss2k4uNPatUBjsz82Nb1SuRcF7gGrBRfeVxbhxvs3epdQ7RXLUGZWndL7PayfoJHxLqqigxoRGsg",
  "key17": "3jmaPqVYGN9hqoA3cP6bRCVg75kbtxsPCtPB5nuF3nh1sj8TMDSXrVn9kDAU56miGyeRvi4s76opLiaehue7CXxc",
  "key18": "4JYskUABMa7aSjDM6ZPXCGoTmGYz1isp9TCnCF93WdFUE6Gw3E5mUFgbkmcGb3crNXaVPDSML9F5KS3kP5257TC6",
  "key19": "xP33B9akh97FdQcJhCBVVmQa5ZtR4TRMqgsd5mP5LGwHDHXRoVWsMjCkYzw9DNgQPzN2SiyBuDmkRhsuXoQxn16",
  "key20": "2j2BphV8W7fAg1HmbaqPfSeWR6GJ8yNWPiQ6YEEioYjxHJK7WrVQsd1kJ254QmSu7kGajWriFx52LqugoVgJjRfV",
  "key21": "2JzGeqToSqQ1afduKDJYRpCLNZjGAVKUCTHQ74tpRePqHQi6kiNiyxiWPmY5ssMsAtcPdv792aL5JT1EJH5A8YMU",
  "key22": "5jr46X52RJW6USkkEgfZYjBQtbGeTkhqHyn85fy1wHaB7MmCz5AtZymHhJsgAKvLhQo35Yz9S6KaAmXX3dKmYRNQ",
  "key23": "23LfFvmoUkdMgmKA5z6XDs8ZzXEgwi4XrPkZE1B37Qp6DiFvYarAgjmL8PM7RsvWhjGViLCqqGmDeQtkkqXiZBhW",
  "key24": "3h3KGqMLjYmxD7UALx87zheJ61SfWvcKiRL8hFjX8RerrLK2smDWoPwBzrFgkUQbGsDVdtJEuf3SNKNWNS3p6JJX",
  "key25": "2Twn4w1j22Nj1j8wxjiAtaBLweeiLKwASqMMVeWxUrfWTdSCChy4zRaRtEEeSAjpxQAYS29VyiDaAyf1xTCkrV8H",
  "key26": "5CuoaCh28AzsXEZ15hVsfXPpm8CyKJZJV8Z1wJsXNX7K2gvt5yAaVf91nb4LacXkAAL9H8uiPYWe7Rnrrnt5xsWJ",
  "key27": "27nD3KyiK4j8FBLvxFKY2D5E63mBcngRYGWdHz2nCEfTW9YStYRaBZ7u9GLTgDzGV9tpYAxwmWSP1QHsoWZfKbbV",
  "key28": "29ETwomM5XQYZhCrH1BtmkEmbqQxX7CShRaBcLxjLkWSa7NbJSddpK4vDHjsttwo9fLBvq1H85a7jkqYSKr7tj5R",
  "key29": "63ZsGrki8C1AAGwwPkYvooncAtgRaZvGRZxTUQYxRUVwxcdSN1zoUYBZGtEQfiF3oc39QcSvgsXDUKANzY2JNWku",
  "key30": "4ESKtYn4aEbvHvEA6gBHib7fyLufr9cxy3WxXfbzNcv5tcmQaghfE2RvrQr1ARoAiWbSrxXgxqq1VwqzJgqBuXJb",
  "key31": "64cMKDvwY56ox2jHjHutiYEdQGXBPHPqoXXeybHVTf9VCy9BqCgFbU728CcLnaz7JAhLTfoZmTgnu8uwqT6mxj4x",
  "key32": "5vJ7qxFZpJ7PLo9ygCWyqtEf5pMzX8qvFgn6xtVwCrM7a7HFbq5QgctyV1bM8BBtpYgFD4iUT4HKGC5CzNb3QsSq",
  "key33": "4HVgkAEV7vMomRYPkn4H6wmTPVpEGFdrCjcsttemNtzDzEDXavssuBtJoqzscbdwPmd21KsFGx67qpARrbAP1YXR",
  "key34": "57j19ypekKudcLqebHHao3MwNsNT5zBHaM4eWvM5xWipEc6XeD1RipAf8iigCUNXjDPZtF48zNeeKA3CiZoDGgXS",
  "key35": "4y9owVUYhvBQph4VPSvyaBBC93XyXrEAScZdf4gKLNFTah9fFAa8nyXebwpnZtdhD6GhxAWZAuUPDZZxDRT1F5Ck",
  "key36": "5V4LDTDuSEvDYt5gZyQ3fkDNYPyQuPSQiNEnzmDDT1dexXEC8zmbyErdD52cib4W2P4GKqpWDgHzdRigiuSYzqBP",
  "key37": "3BMVsFvQWaVoNSgNUU9xVLZszVyGG1qs8ZHtfMmPct2fna8Xy7JCvvhGnUUaE3wf4diUFnS7axtueKWkSScRpowN",
  "key38": "2XaRaAibxCyijRmjCsW9vGs5XzbTg5kPgxeuN6Y7ry2tFVjzitdkTTEs9Zpq218vF3TZCiiuWNtd5EMkf4tCJLzm",
  "key39": "3Co6bAAMDCwaS5W6c61aCyszXVuwmZYJGK5uKYjM25izcwYTYoCMmLouEVA4pTzdUGVK9Azr8q7y8qSJeuACocFp",
  "key40": "5aAGrg8Ajifu4ijCYcdSTFYJHKDNxFo317XjWHvRCNdVBqDPumJCpqPmjyVHsYxu12eui8pvCtJ792paCbJvToVQ",
  "key41": "3x96gP5n9qNyfPM1GpXAsBq84JT6ZSbsCL2ymYQtJPMHP9WGgH4t3Sikn21acCppvZhC7BwAVKWKnTUBUWJt7Mmj",
  "key42": "2ydKCR1gA9s9UUCK5jfeGuqppqAtD26ifhc7U9nPVVqoUrF7whG9dvUjQGT5TVXSqQjXBMaCtNKx18cB566aS5iW",
  "key43": "3s34482VSeG34pb2p57eMK4QhjEFZb7cLrt3tJPSSfY1cb5ho3RdYZPQ5skQq5cAjYXijYRDT3Q5sh7cy1p9qnGk"
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
