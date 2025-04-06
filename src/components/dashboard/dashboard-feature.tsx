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
    "2nJTX76reMRwJYYTRQ26Qtzj7gCKN61qSnf6DQGUvWXU6kB9tNFNAM5WVtMs4CMUTa15n2wMGg36JkC4pQ42DtjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBtWibLSjQJsBvbCerh7gLpUe3sAR4EQUHuyFuMcctSMj3KRssacwuq2mt3m27fxp1CSVokS2mPgVn84F87kQHe",
  "key1": "2ESkP79VJKgD3DT4ykHWxGSg1rFD5Vvf3GKuTbv9SjhSfXM5NyuwLaPsBDxUf2g6ZJYEwMzDS4ddpjtfrB8TgAgQ",
  "key2": "4a5EKjCLv9zitEmhLN3gZMeRYUQRjFjtWNAfU7zNiLUYrr27qnxC8yCjgBouyCBn1WVxGMxYHsrQBJQ2oeNKqfnj",
  "key3": "4WvVb3hpBppYFRazsiUaCmo7wC12G4e7i97EHF66mPneivrcjf2BoGRAaEBQHU9r8RYPSXtfDHHzika4kTTDcsaA",
  "key4": "4t9QvqfHgPFJRw17VREcGX9uAP7HugZAkagzoMPqBjMb7E5iXT6mRVwAvYdc48b4s8pGrVSGaU2YoDYdgH2c1ScH",
  "key5": "2PDjMQVbRwrGgya8gsCLwquYjQGHKosxvPkreSCEZUKHHq28rx8MWj2fYsuFSkbvP95uDVAUjFRibcwB7QBoiZ3G",
  "key6": "2ogVxnWzDMac4MdYQwmSY1xvM5pb1TtwbKG5NfJdEvjskuUoVWTkCZzJJKK45hUtijBRmTSJq7bqt2tXM2q65zkK",
  "key7": "5WY6H1ib1UV9CjhBoLTyAff6Ah9VmpRjgt4QbEm8SfysxZLC9iDB9ptjmaViLAbL3JvF8GqKa7YeeRjQEDeNRhYG",
  "key8": "5trwx37d2Puybs3gb7rthH7VmCnjy6Xwk1uVddk7jaSV9PL3CVLwrKQDeRzVeWPLzFdXf7jNXo3t2cDcvEAmZKPw",
  "key9": "5zQDp9JFYwjePeD3P4TnQe2YfhuxNByuxvvjhzou7hV2muWpBphAHvGB8JsxgAZV2VuX6cgEAtoaMHYDMxwVe2Ci",
  "key10": "366mY77vpFNmG614Xrj91g6tCjgj9UBR5Y1aqqNZwztv8f3oZ3FWzbUfSoeTpfsi7oQY5TzhmJ1EofSQtJfcrFC9",
  "key11": "Wnw4JYFj2157czJxjpsR79JX37JHKwmvjbW59bCBPG5G57xTTRvg5GwtkJVuDjp6QRe7YjsCPyunzowPcesdg8M",
  "key12": "3iR7xvefRLqdDgZRamLwyC75xoWd8PQmxdKRcfQoo29uDWA1NSsYdMRMKtDsm9PmSYPRe1zQdTRcQ9BikfTKdifS",
  "key13": "4xiJAFCunB9P6bRaJSpsrRrWsJ9ZAHpZUzrYxadiGBALcKUYXW39JGJBWxgYEP2jFGWn6VJu7fAjdLG2pzaR2ahz",
  "key14": "3qPcNgEHkW7PDzFUZNCStoUaFeSzyKwEGsmuJWFh4pZN4JdUBH14GQHWafFJWBKZfohCgMgJDCUf8hTDkXj5Di7Q",
  "key15": "nPoY91iucbFPAN6w1z4xmAgeXDtd4ZV8MhdAxDfVm5zd5JC4y4m7yseeasdVEATHtBYvRHCBuHuVD3bV39qTmpp",
  "key16": "2Lcv3zFKo3iM9D1tqtWzDdSAGAB3Ufx6fzbLJd5RRJftiDh2mRKTkYL6EgUojR6Jjvk9N3rDDWnN4XN9CqNaAVnb",
  "key17": "35ir9KntHxdV3Q17h3aH56TGdoVpc5aV4jp9oEXHdyZH6NyoodEEBDgrKqtD7y8aKdatqeRq6fyu1wHG6R2QNKLm",
  "key18": "34Bom65LmZThdyx3q1RbSz15c1MAMnumK3pckXmP9fscNqu1ikDdtZ238gnSeWxHp6Hdgq9A8NEuVXGauW4QiXRc",
  "key19": "pzjxRAeYSTWPBSEv1i8JGpgiBbHxerHW1hC4jzQPfmdnG8EULqridCE8YEZjFdRKXD5nfDJPh7HDeHhveqDWdXV",
  "key20": "LsDennHKGg9aGsmtqFpqzYwhhcNdT5br2L34MF9UkAH1Jv9Co7BxudzAAyrb4wtAoSaKDAVtWuDdXT9BbBa1q2H",
  "key21": "53yyVZ8abtQXu7BYxY49rAXqQTUpS78ydbfEQn3Sz68Zfienuc6pVT28B2PLofqQxxRQdBrQK35VPXAFnRnqd3r8",
  "key22": "2gEBMGmE7X5TNttQ4x9oMaqsmkfzRp2VSd43vJmvSAeQX1mD6EGtXYbYAh9nUXcZaVhpNijqr5PjiNQeSbS5fhKt",
  "key23": "VdNWx7WqvhxwWbLtob58DXrcSJAVDdebssv1xoxit2C4jN92rhZoU2RGPGe7beVxNa4DMMMLSWaqo2S7fLJDeqR",
  "key24": "5uXucpvGbsbdygg2kmrqPqG4JNbncPYJ9xCWCKRtSKZFjQkxjnLZNaVbrtx4ko8pVB5e8sE47rehdne2aonwMesW",
  "key25": "sbNrrGPjPij7wZyQgecevub8UPow3SWXZoiuhYnC1XnzvMgbEMM9cWTDeVC544FRfUsR6mQ93ATqEhhboniAaSX",
  "key26": "gkPyxfXrC4vn3PY41ZfLLgXrPrBFuidBNj2ej15c24FWza96sdzcbPAxYqEmQUPW5H7hitbsRbDxFnJ1J65yfk6",
  "key27": "2v5qTuaEdMJXcj1C5KNAaJRh4BH26bJJ9SfH5xFruZehTmfptDaYMi3vvHCadjeViYzDcskzyoRRYX8xtcSk5AEc",
  "key28": "3VgwKsEoLYoznzJgntFwno2jrqKpnjDToauLAAUCDjTdJXSPmBtdHrrcShnC5eTx8VzmgrdkE2s5V1FYUd8Atmqs",
  "key29": "nvVfWEq3m1JDrbaS6AzP9iC2CzzVAYMYNxpJCmLF2dwyGp41uvhqUgh6kr25vdzpTuXA8gfyLcCVdDFPz5frngg",
  "key30": "2kiTBTvXn5EAuxAYPUZrPRRPn4kpyr9PQGQP8U9Ae15DE3azgujdhq14uCne8cDP1zFkqfyvGGCAGD7S8k4GEpw3",
  "key31": "54zA3fEWox7y9cXACvi1X2s8A8SAtS9qzhFaU77jf2jxiT5tZTG4RTuVgxZMYCL4xZQkMZzR6eTjHhsUK6jfFGv5",
  "key32": "44M1fLgLCZ18j3kgYnRMRX9jPe4EjrzKk48ECQNkznTVMsSQnxeV7Lkjifyq6A4Bqu6crhSrDN8RfbxDQuPgHdcV",
  "key33": "5HSUsU9qNumM4dnQ87v3jbj2t9pgy3yaxQx8Fy5ieMvKEzvNQ68FRbKpwwSxF9T8zkvRVCRNyEknMsoVLpnCFWDV",
  "key34": "ANNpRb8bGMUvruPuuGj5YneMtUu7VJzB21bQF9ZcUivc8tEc3KxrMM2WZpXJMkui8mxu5u6iC4qgEuCePsBnVR1",
  "key35": "WgrWurCeYYGh8hMQb86wMTZNvoC1anSojSzTRMfXpJwPQTgpk3azcfN2ZccJoug6UiSzvdqFxufuXz6oH1AR8nd",
  "key36": "4EkL8hwDZFAa4cZE8ZuV5ugQnDL78X4CWix3azSacxA46ZfC3BrcNC2ibyEKcQvFJdSwFwkQ42TyNwzjRLfC62P5",
  "key37": "Xp5xLFtFg7Zcd3Z6Cvm5v1Dda3gQvFhJqYV7S82vDAZKkNRdeXHgpiDp21EeCvuWhkJKUs54boAd27jufK9xE83",
  "key38": "Fo2hfvbFo9M9eVN1TfCjdttaNxL95WHvcBk5HbAa8AgBEb6Y9zRpDLGLmLC8AzHmrp2KAoAyQQ4aivNdkCpyEfK",
  "key39": "4V2dFF2ytyC31FVkZDC8UiYTfCANN7GJQLH11otfYeovMwDM3pbPB2eT9aGDSnRexNVNNNVGHsSFYo9LoBTwTGDs",
  "key40": "62X9auRxF9RCBb7DM7MfxE78v6U6eK2p3FG9LJfbvBWMwvvFrpqSQsheQm5496oTEeeuQkcQN2xGAseZsopNLNAi",
  "key41": "2HHH3QVv1949J9wxApzAYbL8o8scBjE3tX2MFJphvwgpeLHVXqMi5PyL48q2fx52h8Zui7pW6TgcjJPKKbCK66AF",
  "key42": "3Qorgv7R5zTcSfNyZn7PTeRSPXwWxss13Uckbk4dbnvUx2AkS4v4x59eL5cfQCWjupoAyrQ5aJpne3dWMJqLx4W3"
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
