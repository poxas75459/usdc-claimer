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
    "4kD4kdgXiDWkWMbzvnyQT2CChfwGcmSneexH1varig3P8TJVTABePC6n69JWWpFycrobdEB7GqfMasi4a1JmjbUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMwfcDgFe9mamZHsjNLMt78FV2wQUEisMtnNoWWcvy3Yb8PU6KwUnDfsiHzK1hNVcbeCAeLNcaQ1VsyMGmY5z1L",
  "key1": "4mYJaVncNPxhqnDJ7jcgwSEjm7FwChSEhpprmwnXyhgvP2m6ByFacC9iHThNk3qKQWGgiuQ9SHPCS5FAeyUYzVt7",
  "key2": "5qnrBDHrShwaNcb3hktcZs3PxnrxCfGbmYYP1ELNQn8e8TyB5dStkxxU6SGheyE6LrRJXaaVezqYKahXjEJ4Pij8",
  "key3": "3bSJhBsx3xSiALiMWQdS9SDAMagMMW2GGtxyc2YSMzLtg3hykpxRvG52Miy92xTeXWUuYtV8owXyWFrYDrGUWuJa",
  "key4": "4Y4oxh9navJRXzCWm93PtU8DRNaFBpTWi6q5NT4hmjAUatvAecydKGcHEZdB5reqgjM9KRYSe2KBhqxJdizK5vpa",
  "key5": "3VnBs6dXf3ngzvudkhS7CCjS7osz6K1Rxk1D4cARcPrpKqV2LfGB4Wyz4SBRahUerTEkzhgDJAFqt3WQUg8fxixs",
  "key6": "3wbvHZTcXEbtS89gBVeUbdiTZ9CfCATiJJY9o6jgnfVGk8DsRFnA6gGjSiojc14tQYQEATWT5hbP6wKnixmLc2oy",
  "key7": "3APV5ZVq7Y7ZSRRufSaho8Vc1bBZeREAyUqAEWMYLaqjh5KMu8rNRkdMRkrhzoNecxGWCk4Huh5DJ2gtPjqgTo9f",
  "key8": "zbqanZQujKw1jtNmyn8SjNhMbGCKDSmKu1cGXJkZkK6QgYyjtx9ghFDorB7iCZAynS4ru95QfuzWgunixMFaJJK",
  "key9": "5JvpodQqJSYuD7xuxSLDjabcX681PHKyo3VA4h9rqJpAMqXagKFSe4ezPWf57iRMLx8q7ZoSXs9P4xfRJ394L9fP",
  "key10": "4WQREiYFbBKJL86hfwGf2xya6r1R6QMV2KKHjkbgRy1LJyWBeAMXNiZGhvVxwriDReu9uxwb2xBMqF3fNrTErhjC",
  "key11": "4LPULDbsbUnrrjsmibGeMvHQrQa3kmPGhKafuvMkGuii3t14sqHw7kkiDQUPk7TkoCZqYHqoUkDp9op87MocLNND",
  "key12": "5jSPko5rRAfz3sYF7jtgprHRjJwGBGLpgqMfgMzn9St9ax9Ftts8XwTv9b3XqMFwfJTx3NkzPS5e1uXH4NFgMsmW",
  "key13": "3ooiZoWAdGAMEJMTYLjfkY4JoChNai1zSJDAoTdC7cWGgqL4ezUHBejQuN3yMGQECzdnznXxKCJnuPnu1q8wMHDk",
  "key14": "24xYinVer7beQ2yV8hRTA8vgGtgMRtgZbshi4MEMekr9774CXNUKCJkz6u92DasnqvNYbLMJDte7z2YJZUvHGS8J",
  "key15": "4USLDkzmNYbMhVpKAiwv12oZwJnFVP2HZqwfuN4z8b5sGTfc879VVvDZvB8TmRyEo8bvNQ7xmmXiQBFhYhJe35tu",
  "key16": "5y2XWn8mhB6URphe2nc3dETim6qApUBdDysjExRm5NtnytENoKs8h9etB6dDAmPxZuRcyHKxQmevQzxvG7rkk4bi",
  "key17": "5SW7kBfjJ9jaVyKhThoGLkSu2cXDn7o8eB2bQ5khZdDzdGkav73ApBMnmRULiXxDW6CmSMNE6h29AGEBReFNYJGu",
  "key18": "3NLUrbApt1G2urwC15WQWWsa35QCng2X2Zz9fZD731Exih74D2qTsYucQ7Xo3yFwX1Xps3PBfRJPTs97n2NPZW8j",
  "key19": "4H9N1VEHWDwmSKybdzrKu2kLquncgf37nKPaQHWPKaLftLYaq59moALrsq9tGBVxnYA5aWKdkTakFNt5uutDPbV",
  "key20": "M7buSLnsBF3fKqHmGgmKVSWkSVgie6fixX1YhThyZgUT3tqNKvG4MJ7VKit1XcJMG5rFRm19gHZpwXx5F69fAB6",
  "key21": "3tT5Q296qoRWayNhCvi2x5ACcXon8Q3baL1YdA5w7BSSzHLxXH7ArddNMuk5PCrMGVknJhCAwe4yRRfQFfMhUHFn",
  "key22": "2AUqryMHUkK6jGxjet4CpDwqaMJ6nAg5dnxA2Huk7A7CMtaU7gGPFXoJuLfzPVvB83egVD8ToA3aiE1sGZZoMzPo",
  "key23": "3Ys5DgSMygv9arZNoURRUdmXY3suHfypLMNBXKUv8PD4ny3AYHhVDVbjksqaemY1FwVJjRFnz3a9y6mrTJJDz9kf",
  "key24": "5mfBCCHRnSC3zfGtzsa4L9J8y3Jbb7QdLTD5akyGWW6TuKRVEAs2dmRpttZHYZ9Hha2oxj2dfP9Kf2Wu4Eypf3Pj",
  "key25": "3CgAX7TGRXsS11PzbJzMguJhMZxj8ZGYUPGyE2NMJ7P5BRuBAiGHfbCqFeqib1bhnHQLFEGf4WhNyKc816BBNt34",
  "key26": "2tzUT8i1VSK2kDxXQoQ7HXfGdCYpHGBsavQqRdB5DTkj9EXVf2TGRKL5NRp65Tk8ANvzAS7zqiCQLVjf2c3yUQ8z",
  "key27": "4eDvxCFv8Xej2oAPzsfqFw7Lcd4D3ScS8AGmpGbeYK9NPUfsyfKvAgoA6SgW7xqY5JREyPEuK4wpi7Ac2Ze16BhK",
  "key28": "4y19Ls8YK27ZSfSgdkCJzTKKQ9aBunujEkoWXqGfjLzcuWruaY5xnr6wdMCGFE3e5ac4PhCk6wL9MEY13VMpjmm3",
  "key29": "5c9X9sattMNsBnGGBNzet78tnBPyPfAdbx4TL2csv1MftNpdwBFZEJe8dGBvge1jXvfdW49ZvcqAba89r31Gf5uH",
  "key30": "2ihLt6NfuHoh2u6XoCNoX1EqAtaohuiKixZCNx4DkjH31k3TiSg7JiLQzdcefLDmxoWbWe9aPCeqPiHc6zSSVd7c"
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
