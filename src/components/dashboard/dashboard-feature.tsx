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
    "4WbEoiVfXFByZiuXHAW7AkPyBQF2oUno1mSyF1iKcfoDx85teMnmQU9bofo6aD5Ugpr6dydpRxyX8jdawq5QtMeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cVHuG7gALVnPZx363c6KPCWSCdwTBNkcxp1rmMTXHjDmKaYD8Ra1yxYFxDK8Y4PY3Ut4afuwHqMt9zoYwyFdWK2",
  "key1": "4s8Tmc85Dhh7g4XrCHj2p2ttoSBr2CiBo147xTHPxPujtNUJNe1jdcoLt3ohjqgCaLfQQ35p1iiA6BCnGqtberTd",
  "key2": "2DMTZAS71T3XHnCqVWAmCxddmcozwHCDd4hGyu92owXTFMzTnY9Zwn9GPK8k2k27tWSpGQwGoKNPgKHm7qHoXW2T",
  "key3": "2GhrjmtPXqb2PfXJjygvtEDCW2S1pePhx9Xzinw4Zm1MNWWNJi1tJM4r4Q78SwsSTDrsvCbxAJFQPPbLe1g9KKPf",
  "key4": "3AanjswhUNCKKnHgZhtfGzqMaeWRc4ntNuHeQj2oNbNQtD7bo2rt9Pvyoq53iCYKLag851mZGXfz1EfJakXuHLNh",
  "key5": "2vXhNKymeuEx3GWymT7RJQbvoh6DYvbeGAEna4qo4sXmiBSRcar7JKzrddYrj6yKP56GiET5YSA5LNnazDt97Rs6",
  "key6": "3qmyMzCvoGr9Zbw154sgMkHpW5tyJvAckNZBfrUKZBTSD27XvRNXBAyuiecUYJN6Pmg8G8DwJP4PcemQUw1PUrgt",
  "key7": "4As8izqya9SPPVz2CXTGFumstVDf3krCfn5yPEQ6sqJvQYFVBjyRcpCdEYgn3ZvsJipaRUeSQshe7XsWqmrwAUYu",
  "key8": "Lygcxkj9cF6qwzzm1WMkfhuYAhFUKb6mFafkyRU4DhPE4tuGKr2fv6ezMq1mZc41zL1W63ehfFinWbP9hVvufK7",
  "key9": "2hvEu1hZNPYNnJ5h7staqkzP4PSp71u75sHzzSEdNzxFWq95MJGhVJDuDmjY28C6tvS7gtAbyCMipqntNzjmh2hx",
  "key10": "kwn76ATAgSEjD7Cwq64bARnwarD1YXmT7ZXwV2w1E2nf9rJkZUbCbnPS4bmxK2geSRcAVTEdYkoGjP7gZgNWwwe",
  "key11": "5YjgGD4xtvSSfBS9ToqWs7JJ8mosBuy79656RPn55pE9FvZVGCAS8f4N8r5x9dZVTjGTMPD4TRDnUsXTfKXjJoTK",
  "key12": "21zesaB7gPZHrbLFn39xi6u9f5oFYLdZNmz1HHAEAXHSTQoMuF2e5wDhn8qeAdb8xZj91aBVRNMceVe5HAdibft3",
  "key13": "yRKp5i5zvepwuRLjyti3Z95HcsinqHnXtPXr7vBQ7AitZE1GhQVqowmythTDqJmZ1X3yn1MvRfJYTVWrY9oUZXf",
  "key14": "Xx7AY9huE8Yk8hqbK8Hervjmtbs4WjWdUYywKP22GTkS1ad9wagrfFb6tV7TtYN96Qc2TKWit1j76QcokqArAFa",
  "key15": "51K1b3caWSoh1b3LW6FK1v85WHGAmn42Ln9ztgvAfycTx9N7gpXL1gXb3UokEFSUJJCME1Do5tXtMDabcQctfV44",
  "key16": "5jCT1tSrrJCk9RPXbuZRjpxfT3avJqZm3UfF9Bd1akGYEExSw3AiG815sMuuGbUtG6FsYQxnjrtq4jWn8dx8QxKB",
  "key17": "3gvcfHWVjFcBMWD5p1FcvY1hYo9tuoEaKLXhQkm8xvsEdX2gYBCKdaeDEmxJJx5feHKdQFHVowpJq8RxvFh5GfSH",
  "key18": "4ZuEaZJZYcK1dJbDECSQvL91EJyszQGUwHw9nTE2SL2V1Q7jbMkDc3SjRWNxcPg2AjhBxngT31tP1SRbd1CE5aWQ",
  "key19": "ioJdxCfPRGVobXkgpN3wKfo5ZuikgWfDYzVD6jAmmj5LhZWyN8duyAZeFi83QSDQsGZjCNbWpZJTJL7695tW25G",
  "key20": "2hpd3mRSroKZrTmy57ZeH1btLZxWWtSiFp3XwgLU9Ef2F9jwtyQL4SXYMAwvmFsTRUgpPcFk37uNaiE3G1BDi5GP",
  "key21": "547UygCiTBpBcGssnSZXnPKoMQMJJSbTwVQN72My1gcbcbbzS5wnXEfjM1LgyfPPHb831hrhXEUz8sJ1wvKCMdX5",
  "key22": "2Cavk8r6TpKy5yHpNEz3NXjRTatJcVHMm7EraFAmSZXYy2W7HmGq5JzNp2RMG3ArgQBVwd3peFYBocgE5TDoWZpt",
  "key23": "3qtav3Ae72PwL3HSgWm2xyfUR96BJLxB7X5zA6VRW4R24BFzw41ZKN5m23QYULFLYDeD3RdxhLwM6oPWBsEVYDAQ",
  "key24": "2ZcqKi7otGyajYjVowmUtQRxVwzkTU2GJC2KobfRKgW4P1XP5jg1cZozrDUZpf7ntAXUHGGrakz5yKYeWo1iNrcQ",
  "key25": "4P9Gnbe5TqKDzjVFPRGMorUB9E5aTpja9V8GecM8q8borHptoXjBckxVbZyuSNB461qxZPDEMWRAZztQf9MovznV",
  "key26": "57H27H8Q4QPb8Z685hCg3HiPBzsbcGJaa1cc5cBCKZb3uEN6cuCdSQJshFU1ZL76ZwPT4Tn5LCmwpd3Qsoc9FXuP",
  "key27": "56MhyzuE7Epdwcxnn1kMCvNRgVFKymh7ZJNEwuapjrQscuouarceER4DXiQ5X2hea2J2QHjZRWjLZGRxJHzGULQj",
  "key28": "2xvyV6kNgKzhKKPQoPG3a5ryEqQKJoftcQeC56j13WQUhgXDYyXbE63KcCf9UX4LtPvsU2igKqYQqRtLhNA2AQwY"
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
