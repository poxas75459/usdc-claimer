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
    "WMif3DJCY4YPwGKMutjQVFJ5pNLp5yrQrwFBjEMWKQK16zTsebSfSZN9iyiMKzw7Dhj7UTTkizztf8XfoC44aMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A296Zcb6uzVxYamfeeKXScw1QTji9WzKkLTQHB1R2eUQMr4BQLeMecvwJ69NaabqFeUBtpNMP3piscKRHSqR9DC",
  "key1": "5cFMiH4m8QtWt1TwYN7CP9Nafe7eA4jupNwStwBv4VH5ZbuugSCp9RsWfGzemcwoN1DMY1Sy7TrAey3uicqdcudX",
  "key2": "2g1kw5zR3WNGuQfc5tppjEEnxeA2E2zwwpGmJvSwuSx9e1vjY9xSfjdoLqqWM6aidy2pXADFXJxWjeg8pFaHdtzb",
  "key3": "5XVZKWdX7HGJrp1R51Pc5Quk1SqP28c6p36r62QXRBe8MgQzD8eFG7esyusKVE8Hg1QDybuTLSy5Qzi3z3QDoWdJ",
  "key4": "5tTxmxSMbaf7EjZYoYwyPkUNqTKjMgiGoif4RjGVCZLHHu9z5FWgmxUyWwDKw2zsfDi4BRvHk8Btrza8ytwvGbKL",
  "key5": "2aTB6ckqDnhNBKbHdTiiLu3Fwi2o6e3ZJgSX9LTGvyhWN1jVs7TykhWsk1DwZccpUbH6pyZHfWjC6Vjas4dKUvum",
  "key6": "3atuS45BqSMU2Z7vrxtbBZiXpM5M5akMfVPzH4mRe5cHFwibTQjbMNPx9zr9GRVLxVhogR2vkrBLo3ZUTjmBLtCb",
  "key7": "Kr51th2tCqVgz2hFGR7sfs9BqY6F9c2CXQCsS9u3XWNNjLMeoZujQQN441ziLn8XaRTRyv1fRYDKfncU9XRQ59A",
  "key8": "3y7583fYEuDuxzRimj9puZBxrdPciWVDghwk86fq8fGg4iYmUo3ziBCSeWMxKwJKNqZsQ9ejQxpiCsoitsdU5FdZ",
  "key9": "4QgZoaX2aEF8VsXtzAnB4V48eEhbTDU8J6Yzs99BH93aPuSM5r9mb1bSaM1tqtrGx21eHvozBiViXYRsdBBaZD56",
  "key10": "4mHfecsfGPrdzAxAYEj18YwzrnkzBjzae7wvpEUTHEKpep3q7czYkXbCWANz1fzvXRcivsB6XFpP35xAtbQjQeXN",
  "key11": "3BWYZse1ZFJhZWGC5jvBvcsMmFrr93kW4bGdNjYV4BwDJqPeqrKBt5siBfpHXqh5hdPt9wmwqg83ef2bEhU276Jx",
  "key12": "2UozbXpiwx9zBkPkYdBUZdsjNbW5bSc75KdGWCRNxC9S6m74kwiHY9FPmFhnVzA2J3xv3s7Yg5RH1e4vVSfASwxM",
  "key13": "5onMFViLZMfop2zWEpVreb9qCaKtDZ11fmH9D4kkPKRSNtzQeW6sUfQtXhXGTRdannwJq3uZrPkMRmCPgfiAmEx9",
  "key14": "4ztK3cPGJzzXpVS4YE2S6EYrkp8ZAPZVNhHojpJoyWFafXy8tnV9BWqJPbmn79nUJ9pbrjFch1hkDvvRZyTzGooY",
  "key15": "cQCH1wfMk257Y2zLuwNmWz5P6e3RMTSuup7SC8QG1tihTk83AkdZxrUFKehJcPaN3CdQApvLWs9ewJppdZyZLDJ",
  "key16": "5xE7U9MKtXPoSbUUoGEvW5C9Hga2HUpfz1EjCmcXtS6dyoNprzLsA1sTQxpT5br8pwroQ4VwdscNjPRreYrCUNZZ",
  "key17": "4JyvqjarGbCaMxDYNVXGAbiQVBfVGaAjyb8b7QVgYF8XRY6ZchDTqPGT8WSTyD8wq3CArCrvHyY7aNbmVHwWUQsG",
  "key18": "SYCR4SToX4jhDH5bUKAsHS1azFyoCVC212ReppyKpEyvvkuyzswjrCzAGpnvnwC7TDAEDfmc3CujxqkcXGLuxNn",
  "key19": "3Kbz9GNojTbNwu739BCkNyLY6pADNDrCzq62Ba2uGR7wcFVfg3cudrnJYv1R2FpURGD5yWsyH8s2wHkse1b6T9L5",
  "key20": "5EjTbs8f25m6wJgPEnXFxTuWrgEmeCY8aYySdKZ1mEZnt4UXBHTPubpZZUt7fgCbuEaJHgivQNtye8UEQx8Lx784",
  "key21": "2zM1uP8iQNC8hac7wAW4dCXEM55i6jkLBZ7z8oHsBz8tJzUobgKPk18oTQ1QVD1Ur4bCw73ZRiWsXWtNNp4G8UYu",
  "key22": "4AEBPDmbzW7rhZ5nSsfxHHwa5dTTfs7bPD3JEScv7ez1Hm5p8n3Qw1dFLCsQFmSGFTw52R2SdwhaXB5A1KcTHrvj",
  "key23": "5oStztD7hqukLt3fNrjHa7sehKFVy9cyDA6NAnRj3yTDTgSUKSNwmxvP2UecDBK55uUyGg2mjX9LADZUcmZD9vWF",
  "key24": "5f97jexU9B84psA58H2Ev979KF5qtqm78hbzY5kru1MbHkyuimYAXV5UMZC7h2bo9m1RztScsmYx9E3dvGTroD1i",
  "key25": "3GHSMJS5owQKwd85oUbyXWeeZim1FJiUf28HXAzJkjy6YpAeryRAii6aw4t7SpVp4WjHt5C5xiU6disb52FDkz4y",
  "key26": "2tEhPe2acdrwmced6kyxJNSw4EeQ1NddNDeBkuTA5xuSSJ3xqNR7PqJbGN3b47X3Kxn1FfavzwhuBiXddLiLQMv3",
  "key27": "55pRCbr1KaXrgp7LZ3KKFheTRUXcXakTEhda46H3j8XDYXxQTJGugMWaYNfwRUrrv7WSaFsag1HY2Tw2jyo5hUdu",
  "key28": "bLC3Nxake4JhDffmvZ7bWMTt4ZBnz3FSyBUBwMfbKoiqXfv5Z52crwqqjS7rweDnzxEMyaTeTTeWFYdekb3h4vw",
  "key29": "2LY7FDnccuznwAozWixnTd7GzXwYSrGVjBAQv9Lxox5ryUqYKsAzewL9DeiNcHy91fhda3gNEdyfqxc3PTT3VoGi",
  "key30": "46rZRupHRmvhpRxrt3EJxHcv7KS6hdxZrprawZh64xFUUjmTUyo7tZoJz2UWNpfaM3k7w2ZrzxRPPdq8W2xfB38b",
  "key31": "5PYPPv9aEYBug6wUh8hTBN7XtRGPVtJbrPEg5DJmAiqfLxAAFQxo9Ya6dgFWxvXtjdAcoVG3xkvYnAVsJSBn8hbU",
  "key32": "5CiBSmyvvo8zY6CisFAVqcnsDt64MkxPBuZ586NQrRKxnJb7T6CSBXrnXYwatPXujDpHdkCrmCXvryTSgzX6bKxN",
  "key33": "65NtgjZepXxnzy6GU9q7yL8R6R4oeFLjPT2evwFnZ3wisaN29xtJfRw9LSeqpcieBMsY39EfuBaQtwMjKpVxSVbp",
  "key34": "irrEjZE86vDWF4GgVQAcGjSqhKXC6xnuXYeN3zdQFZzKPmN1SDiZ5F9emBRxucv6zYwfrBoTDarSm55ofP4JMtw",
  "key35": "3d28U4KhjKgeUZp1jVAwMYbzDntYbKiGQMf2zPXRHgkn9v14d1pDbjbnhrLhmyexVodBfbMoVYQWgLzNwu2cCmN6",
  "key36": "3N92vo9UYBfMXcswuhGB3bNpWTdMkRt9dwSJWwQhSfbBwvZf19GiVU2deSuYP8EkZ4b3de7BZsBVWG5kHg772CS7",
  "key37": "JCYZuTmJHSt2qgVmLJdv4cLa6QG894JxasBpAyXjFPSpioSBrNUD92LZHcTLrfszUovQZXFh6qPttWPo6a5usQP",
  "key38": "4JMDtTtATf7Sz5EcMGobnpDJBCQY7FH3bx4xMxyeWJaPeWRBPPBQfgdCPdFBaY83pfCiYWx5UjtW4oVVmvJNtbhW",
  "key39": "36iMWZwVKVMw3wxCcYohscxyvU6zUmoa43dBYqNgx8RBadL6jAdiJXyW5r5r4bFZr8twLZQKZu4XakTDG9XUgsuo",
  "key40": "5mnrH8u1ZcHF6bDCTMQyxNfFLkZTxZRfE27QVoLe4yRG3vrAf89EnpHUNycHf86PHVAuzymHSFEwe3buaybi9o6L",
  "key41": "2c7t7xJDWyseKXS2L9canGQRYPnP9KvDECZyFHCJc1RccsQYUqorQVvMeJdzSFTY5gCmvMqgmjwYPjYUdgmtVYZu",
  "key42": "2fpUEoHLRbb94rrLG8nbNL467axqwJNdX7JHWcjrSjTZMQj1ni4xEitcngfBRh8ZHUQq5neQjLJXHij2f2PNzFyf",
  "key43": "5bPLop6LSYdiG6oeKNxCtrxnRQZZ7PZALf5h2fqnN93DFyP2EMirbym7Ferbp5HdpfU47UAPzLpJtoEKGpYk7Kpa",
  "key44": "5gG13Rd9319xypxAUismDZic3Q613SjPb3FewBrinPfv1v4XnF5f7wvwt4L5P2gSfDZFV9kzNPxFfS7ZLLy4uF2a",
  "key45": "2uwMiWyZdTjgmz88hqRokxT1G3J3WnnEeLCdFFFUR2DkPsxfReoZdKZvEgNGVcmcYRqrBvREHfrE3WXZuwNRThTr"
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
