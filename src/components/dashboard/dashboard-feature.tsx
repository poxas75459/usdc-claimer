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
    "NrSRycZa2zLuY1hazRc1tg15pWgxtKFQPtT6P6gWLPFBbqXUS3iw6oE2Y6uFsKxWFxhs6rLXpL7c3M2w3gECRGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eg8HnLtgk6Chmtizzv9Jqkm8FGpBMDL4gmd5oo2z1GHi1cg1TPZ22WfkTrfsgPe3C8VnrKmpyRD2WbJUdx47oph",
  "key1": "3cMj6bEHN97GNbHveBJFHaee1FziwLXXmSoqAMzFzrPQ5XBUf4eXYEPebZm2DMsGfXUPBMvFVrAvrWfR527RhxRZ",
  "key2": "4u9Yd33dQwfeyhpBRM3Tp1gvjqDxJGCqNwBuyFGrcD7u4Lq7MG9NdKFpa5kLkrUJ73QeEy7Gx3MP9JLfwNCodUvL",
  "key3": "38AyNTtuvfK7z1zMZawgmX9tBqNCuuHJa8Uu6LHigrEzSnEVvNfYwTBviifb1CwUVB4PHGFR3RURFSAFX8XugG7A",
  "key4": "23mndC5kMm51cLFo36VVscVcCAk8WRRP1vfrq29FjPv9Pxpw8bPPnXVab5yAoAkAxJ5vpNyqF6uwDWM3z6bdST5b",
  "key5": "61wCQzntVeTmC7PWeSBpBdhdw8VDCNkA5qX7hisoJkHSBC8qDYvNpYHGNgT1D79xx5G6ePUNtBAvryHGaZtZGWLx",
  "key6": "4XkCsx9h9KsbRU6giq6L4JfTzWA3WbuCR44kPdvfjb81R5SAoNpVxRHZM4RmFvqmiTTGymbnc8rHn9RRTCg9u5vu",
  "key7": "3ZxGxt8Ts44QsWSrr5MKKcsEbrUKJUmVzBJX1PY52HeMFKNHLoGEf8RkZ3mPySHNW9zRPGEcDT8RqFc71G2f9vdb",
  "key8": "4kYqSMebvpsmeabGwdZDtYjdFyYWUUzAo2XFvdUWSbcnzsxpnTzUijtYckjBzj6RbwtTx6KbYQ3MsK6n6g2qErw",
  "key9": "5SaUYVByiADMNf6MoxsvQ66pWhXdW8QBULQLH46Q3R9x4rDCyRXmWHrCtCXZZPmgWA1zmtds68ZDRhKE3XBhew2U",
  "key10": "5LZHpgzDBB56DyGMbs99ahrXDqwcqR1AWQDjcmGJyhCZR2gY4i6ZA8XcPptZcQ6WARJeWY5h2N1fu8Xfpobi3EBC",
  "key11": "4rv2bFSZEVBCgDn71Eemni96qnwxQo4mAh6hNQfY4PYxJWAmwdBQpuSuimfbuciTcyzaBo89vbRWg4goC7Q4rVVQ",
  "key12": "4HuFMP6dgmZh2wwLgDtXAzY4RPTFn1uBtsBr6rDU7FThxveNcTq1yBTuMR2tcX5hj239pyA2omCAzijEYX3YZk3D",
  "key13": "cSkeWssXhMZhNtuvyPKQYGWDsuCew9kzTxCuiJRGPPyw1Uo8U1at5tGGPw45vcj4o2wcafrWCdPeJXnttHeTBzh",
  "key14": "47XwcppTStjxN13N6x3gNaRVyrbpd2Zk73tYvySqBm4XfQ4FZcmsopCk88AGFqrg4tjTMgN7hges4tumCNdKpJt3",
  "key15": "nMDs5o8fBtiozUfYHr7Te2d1KuXa7xcQo1VvWTFmyoLLLN69cUnK2NzeunbMW8z2EXdy8Kuyfx7LUHyiEpJDFEQ",
  "key16": "bsnu5C7vLAQqNfWPPARE5js82gQ7kEUe5HPfZGsXghsHrYtLJivGs8EoMCGSfVHHab8Y7NuNFWAFNWEBV496ved",
  "key17": "dEDMkZuJX2mU39scRRLgp99EYw7MHkxS1FLhrLjYNYWZm4reW7SQjG3ZuDB49CnfcfehZkziLCaS911TMvr4FVs",
  "key18": "4WCDusz5f4adh8JMmDdJpGudB1KppGgsbgXe4k37NjvutcESLxz2eFBTtpah444LVczLf7UPowaehGAbuR6AaBAQ",
  "key19": "G5Ns7pCGLXFRCAiXL5QVxcj8uzHo49JUQb4Mo7CQTYmfiuKu4JidwLpsAPeDfh3NTjPsEUtGp334U3DSgdbR1DB",
  "key20": "3cTaoPdb5FK7mQEVpYGECY8YUpQfwwwuyRHek1WJAi4kh3mPqq1ED72sVhrU3E6ZNrCNm1evs6RtzovXNehaoRBU",
  "key21": "2XTBenDEuVagvJZNKqrvDSde94T67QdQSMdE96VC9UgSPpoqHn3MzeeniDWyG89ZiG5mBPfPoXdVzUxT3T37b1Et",
  "key22": "5a9aX4ZVSpmiVzGrfMt9NzzVc8MjiwMgW5hoC56uV7aSQPdx36SdTCuWtnSbXT9ghNebZQpsEfciy7HDv63dmz6f",
  "key23": "3q9bRwuTACiZV5XZHNqv9CHLWRXaTLChKtkL5CW4mRhTM7EARAKqhMrkiAWXvNNEcwYddNFLxa6xYyb84LoCSB43",
  "key24": "4ECvKCvnqJpzTHPQUPMErffAngY9babzUfvU7aMnDo1QqvzbUZ5J1pG3V5NUFVadPg8cfFF3MFkWrtZTkwoKnqzT",
  "key25": "5wxEX9YkWksw1JhvXcZKu8HB2wmLDMxgi75UQo4Pe6nUp86R6sugmEDQxdCkLULrukbTVvzuV5VeC6GQ33wsRdhB",
  "key26": "3tCVtqrxLFf27kSTW8GkEAForyfd8xnf9GNzNGqu7oPzS5gPUcU3KHL3c8MqL72jactU6CFPpD7p6jUNJ5EektNw",
  "key27": "3vH24vX4iwnJmTAP6zXAUdTDymBDvHotxVpX6rjuow94uxrKsHL4XjiJNMZAJsLgXX2TSZj1Yuz5WnnHbKDn5fcp",
  "key28": "3eY9EbRc14odpRN9gjj2VgREsDRKqXicvUgQf1UnMcxtcBRCNsox13ehe3NYiCRUsjqnMKWA3LvGzs1YVFoyuDeR",
  "key29": "i8XtEVDEFnghG9MAeUshBMdJo647iJcvd7TDjvBBkLnx5eNXaq1PdZvw7XHVVXuRw4PAyMVCBdb7FyS75kVaaXw",
  "key30": "4Gme7NhsCyr5ZWFhBhcckSxskjY5f2YBkoGhggveLWFqVW6sX68VhArytwWBubFUBhnfEFwH6oTCaPTaTV4Adnk2",
  "key31": "3j551uGM8Bj7zzEiEm14m3mhmrMx1dztN47HerEbutVvRfKMqXx6k2iFY2hycAqMqVVk1DWhXzSzPL6dxGZhNRVp",
  "key32": "5AdzKx2XJdwgSBUxZjAqSWyBS5b2NUDwzQ3pzNGeBvsxPb3EfRNkdyGJ4H1hqp6qJWts7LURQ1LBJT9hArtDqEGL",
  "key33": "2aFggnKqjoYfNcU5GjPXXQn2wbY1qyozr7bcC6YKQ79sY4nSXmTU5DoHgUfjiSyiS96kLgk34aM2wn3ZFnfVeMiq",
  "key34": "4wPiFr8LVSiB2i8T194p3iJ1okTuSyrxGC3QFtYXmZyDsAXyrFfHfRygvSaquWbDxF67cMwZRphTBvvvJusf6ay2",
  "key35": "2Ciu9L5dzXpZLyfbehpGB6iEKgTP2uTwqQcRWC4XSCtkDycxgb9tsA33AG6cSy3Vw7tA4P9YGsQSv2fUPYaWBrBr",
  "key36": "6ZPcjEyvaNsCmk4Ui1f2qpJm6nn5yNwmtHC3GX1f9yKtttpRiQiQQyq3XSggDmkMVZVBuCw1WSgD1jkTnsKW4Ei",
  "key37": "2gXWDwUSGEFqFygw8XsZteEZhRYLCXM4sr49Jxb6156M2beqkkAsHo2JtCPooJks18NfDsuAatzbtL26XBzWSNGu",
  "key38": "2y6Mt4qu2pAMidMAXUWtVLhyoVd6H2tWSKn22R5oDxbAA3CYVLF3fAegDNHsusJUtWjNB33VF2NqDoQUyrwSsY34",
  "key39": "3HtYHQkTvrRfHawBfpFYHDB6QaW2zx8cZ86vHoa7Y4MFZ8uzTLJbW6kKk9U9J5GngCQrN7phBPZqq47QCL37zqB9",
  "key40": "2UDxfntkir7uiWsGVdB3NqsTh9qM2SWeHxvZ3u48jt2SKnWR2iQ23aXYEn1KHCWNi7xfy3Eufd3RJW5LrRni1gyE",
  "key41": "WGcLS1TQxgZcqFSLCfQ8K6bJb6iSbEtn1ghPAh3iRt17bDKM9ba9Zt6qgCrBcR3tgzSektmnFpEgqwnuunDLKBF",
  "key42": "25fQBBmWFAQaaZgjdfiKULxXHeYN8vf6w2pij3PQLENR4eD6YcbuaxYVkXL2oiKLmByLdAzWBnEVmC72LEKJvvAJ",
  "key43": "i2WWVm6vSxhzj79XQxTc7sRiF9xgBchq83g5iqmRfsKFht47voVmWVSsZSCwtAKNrj6WcBHpx7HhCqWkzaM7ixp"
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
