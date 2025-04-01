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
    "4rDrToFSE4zqR4pLEdNUENTddJy4WA5FQikEQ2eJXYDKxuqN6EF1itih7FKuVqq8L4oKoMrUGgVVJ62Nr5y8qu32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyTnYjW2SdZtjjY8jSrhnS9ytHayoZDLGHqSHh9agLW9D84iYqt85Waa3pg6PLRvsWvEg74mYTQ1SwNG2zXUbMS",
  "key1": "5ZbStNmP3pnuvQNRhHBLDQZ4pTQQYuCk8x3ZMvo7kVFfZvmZpmEYNr62qKkXSWRDgoZa6aHboumvq1UX3so4FYN2",
  "key2": "2esxwZHqB3FfauZPywkBbdQ49UMcXxEjYPWgmn2CSEVZcnNmZwNh7VFXoVisBNCh7HeKcvMhkPuF8gYR47fPDd2M",
  "key3": "4nXGATWKp2N3R7DQfrXhttD114vD12Ma3igsFjb1kbonJ8WJgj4k7LZJN27QZb5T62fDCDbgQDz33K664FYKNEq8",
  "key4": "QAFnckjchSN6KQetVF5CFUPNjG8Wn8uNpEFVmhn9ousBx6UW38a8d1i16oWPwYSvKZhKAtabCBzwzAVv3vL34Yn",
  "key5": "2nrJJt6bDxdgiB9yieH54HpMyh9dKm1nV5XT6Bb3Xd6MpCEVD9ogvimVtrSDpKTB2Q9hS971us7wLtWtJHJSuU8L",
  "key6": "2tV3oVPpQzbByhaxqNshCL9Fe8qyMYD3AVothWbZ67RMzBAo1Ap18nGijGdJ91NSMVtu36vftotubWZgVHZLF7pK",
  "key7": "3Xdx4EmVbeRovBDwvU6zio6izKszZuqpqF3EY2GVNjT5EfaexThdqfVDB1AUnTUPPSs2KpAWpbAs2DmnoExe6j25",
  "key8": "4A14uxakW2NKmRCRxxNRzLWpY39x3Un7ZzncJdLVCNL8Uav9U7L1RFDpzURtRAnF95NDQE5RKThuidYqT97biNY1",
  "key9": "JVsy1RUvKrkxf5CZpFg3aeJDYsR2yvn5niQuUuNYkS3rAAghx629NPcKEKur5uS2hxX2AfgBiwAuZFcc7uQKtkB",
  "key10": "4adEGQFZaovS7wFzNfuAPyu2ia9V5LK1SXpFvpbZZG774Qz7akbNJE6E5XLJDc6QjW53ScZPZWgAqBQR1SzrTTei",
  "key11": "5rCqZ1NvuRXfapkF3ynPrYvhy8GkeybffFyxmBdLQz5C1T7Kpv9BgPZ9EgeSYtaLtF6oR7jr52ewQ677n19fXSba",
  "key12": "2vHNUCZTobGDN4HRT9F6AuMzMMmrxZyyG5ow4mdjbezPc49RvYhb6Es28CYwwyFZz78jQNHC6UC2KqnZTFgr1uRj",
  "key13": "3AnNo8WWXj28cZMCeFw2TDzNr4QwKz6HpC1uVr7UaWeGLqTHgK5JCXjUY2ZrZsWtccLfiMc2H4nCe2USpVTWELNd",
  "key14": "3wz96rcsvHJtTRSLXZtEAVzpt2FfTE5tX78e1DEMWCxXo3cNsccQ7cbcAV59isMCktVErzWVzDjxwYZU5DMnTXPK",
  "key15": "3N3c3YdMwqzJeEu6kZq3H47KQJWdRa9bRXb7ia6SxKVLaxJpUHbFHK1RKfB3ADNxzVpeDmXgubhF7yokC8NhHiBA",
  "key16": "63oihxfCHt4nKwTuEoiL1znhEc8rqJkH2y2MLFwZBXUoDWiaNvBcuMcV7AjciV5XjjLddjfuyEjnMpTSmsJimLG5",
  "key17": "2BcoEXCw53hAhuggD98XhA1zsXLbZranGjDXnjAu5tgt74PQJctkrneK8n84XcDDhGPWdJazyTE1S1TGd9czcnzj",
  "key18": "5jKfADsSBQT49sQYDLbvLLqSAUMcZwBQBLCTdQMgCBSXT1BNgVZeU8QBkeLSoGDakkveCjFZRayfNnNcceyLT8em",
  "key19": "4vPPgBb4TfYWUSfNB3CQfriCRY1KX3dipH6xo2sjbf52XtC41xcXHwQWDCTTWAdm3vUjkhmxRV4MFs3MGKxVd5VH",
  "key20": "5VNz1UJZfhWhG7yAfux3P7UMRJz4Wc4Jpax6aQmcS8x41h9aTNV66NBG7c382dMsaZ2CMs8zEgAjAMX7XVBzLA8H",
  "key21": "5Hw6xMenv85pAjFRWecePRjYgKJE7U9pirC9D4jLX9GqXEJb6At2WM5qK97AiPnNKV4QgbgtoRLawBi7SjRbkfdy",
  "key22": "uwEqyYoeXRY2y59pwyQMEgWLPtriyATCzgdamUjNw5sskNfQxNjkZNF1bp3xeq3RcPhHskrbWGAsznDFx2Y2YVM",
  "key23": "42ojjRW5zfbyriqNAoKWrRWXm6RkFv2Px2LrQQJQsa3nf268o5C4xSMT8oAuiGnDcRmTmyHcdiWqPX8Mp58eXeW1",
  "key24": "4Fps8zdrMbegR8bnk62EFq8amExCPwAREXTR7FZJmBkV6Deyt5D69r7UE7D2dpiLpuh74zYRneKi4iKcw6rAmwP1",
  "key25": "eGxbxMaor1HtbBkLADXvrMevSd8rQMEyuvGysANGNJRz2YLzcBBFwXLEcanXDQDyFRpktYiSj51herxY8vNVr3k",
  "key26": "528GMkvs9WvhPaH2LveCECrzZyNaHES8ovdKPHUU9C9UvWcXM1Whsp2fjYZC36t2aYreS9YitM5rgJtPpyqAwi3e",
  "key27": "3aagd5fvuUfGv76k1iy3a4h8MpsuFc4QYBkm2iyvijTewPbxo1gtLHovpyoquDL2PyFwZ8RDgk7uLgvxfrAa3GLt",
  "key28": "2GjSfttG64wzDJxQUVnR1Q8ARh67mXgC3N4rfVEnUq6ScXS992QkqZifbNzEcqUHp7kW4b6PtmwmGJzt6PycPej3",
  "key29": "qFaLmF7ZyNezdjQjAWmZ2LaYi2HznNjgUXj5SsmCytEVFvYaCtUsUTthVczqzo93pLspFq8g9mScBZSY2HTDLvf",
  "key30": "3Q7Ud8q5yohUDfKNMVJmro6EMzqQN1iQP4hzbDRqeg4tbZrhHj9dCehv8wghpde9RHvbmz6hym6ctAXB4QgrfZMk",
  "key31": "q7rdkgKd8ru4PaMZKvJY1A4d4RivM78Hprh5o9Zj8xDatqQz28zCrAZCDsgwtM2nbVq7gm859BcnnXsDz2y4fxT",
  "key32": "6622h5md1LFc2KYuesKnoQNwbCetB6dbUiJ3acVzivEUijauRygMqWBCVKk9X7sDjTE9bkES8ZuGAe9HBcnUZWiz",
  "key33": "4HrYHDaMonTknYvcU8pbYS8XpckHYna169SAi8xpBGRPE2M6es7FZcYqiq7bjwJeRp2XzAMTyGNV78mV4oin5VA6",
  "key34": "5TatS7ewST45Cw1rYTqkcjUL4uV6gyUJMnJXjKxS7VkAL6rnAvCbbCBcECpF5QvZ2ULX6NP3BVNsjZUHgphhvrY",
  "key35": "2e8Xnj1jFY1enVb6UfKczG6rgno7uiiub9fsg2ArdAFnG9rvkKmN4xYC1yDMrZegtp3UKpLfDTek6tT6M5GVtLAm",
  "key36": "4PVW8k7YoSMU2VxEKwdHS9c6g3ivEMKX9Efudh4NNFK4j8YF1rGgdb4QLJw994dSoG5StQgaJNF5NRzeQR4UfCbK",
  "key37": "5MkYwjWEGLcL4rRQMKXCvZoAMhNzHdPmXrT4sQaAUxAfidssv8b454KpcBHwA3xCAbnjNzGequo2CXZhvu64gWWy",
  "key38": "5gPJoSTWUnggbXCGyGAsnriniEAiWKeKnCoprbxVkR5AUf9inLx7r9qco66n427iYaYxzEBmiFXf2A4a48m2ifaY",
  "key39": "4yfDcm6t5PBeuNDMoJS4fGMPiEtju6bc6QShV3k2dknwNSL6San5Y9k3u6sKMLxe6Ro3n3ooFLxqTSSYMiKjxQdc",
  "key40": "3hc9wBjBJxfY9HigYXKURuHEJp92zMpq18UAMn1eYQG8RWuzp9tSsJd1RH3NsDreUUpPeDgPkp64Gkmjhq89Higv",
  "key41": "3pboxywSSYAjy5nroK4Nt1iQm5hbVBXrJpoT7N6kfWM8KtewweZi4k3WKLreDJ9o2hCAiD5L5ZFF8WRqohhpj8dA",
  "key42": "25Tm5vyAiSpRd3pgS46NbQEf31KGAPWb6kUtVZmvrh2KqHZXq31V4UPmzgxHibk3bbDE2z5duXCvvZ6po2Fb3qfs",
  "key43": "4okjJJGKRT6HAz7fTrxN6EuTHqiVtiAnVjB87mtPfW2wYnF5y4G6oLPTDKYNbY5MMtxkPqJpQF1kYU8vJRQs9y6A",
  "key44": "2vfhhVoPUcWER7jk5DsDPhnWR5hqzxSDHcdg7fxiXxbcQGj7Ynwca8HFMAPjXmYdJLHsA53NHU9c7XAUdfZ8fhFe",
  "key45": "4swK4nhvMujg5bCqYdVrd9CRNYADfu4fbi1KgFZ8zwsVtWknpWqyyzZF25CZh4H397ipwozvSqDb1EggSXEG7GbZ",
  "key46": "5KUEST9c8S5LFc8RnbYSha3mMNGtWfsN9DpvwES18DqNBuvcLNg4Sg4heMZhh8XHZPN2LghVcv3xktKcEfhFzvYY"
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
