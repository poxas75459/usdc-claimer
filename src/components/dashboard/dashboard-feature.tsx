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
    "4fS6kLiaiQAhKLF5Cif8PswnA6ssvwCBecjhrEcZb6m2q3JS3potK5prZ735SWutFtrvcJ7h54kCuWXmXp2Zp2jZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2KcgyDobGK9uxRZzTxkLNLekptbWHtA3QvSLNq7Ut32nMXHhHYMKzJh6peDG3n5szVh2ZAtHSCcXqgA9Ss4dSH",
  "key1": "4TqhaFQoBkeTXgbmGaaPTwfwrBqBhsFLJHrS7GBo8CMYys7c5ADpkxkputrM3LUPWcBiGXv3o3BGb6bfMnG48mFa",
  "key2": "5cV9eCAUsj83iX3oyNHzgPgJjF2i8hB7TRBYm4BzHn1VXnDU5RFCghuH9fxqbsxvaqBkLaaimTuVVLtD9vaBiGbr",
  "key3": "5Ugjjsx7pdXMcABnTtihPZGk6j2AauAi6GY4xxbeKU22uDxFP5bK7ysDppf9q8ydjyP5DBTDfEvQg2d7oaKQRgwi",
  "key4": "23XmLTjRv8UBmaA7NYWPRjQ47VVXuH4RoH3ZLR5wMTyogtkxnXdhDkArjMMaRVE9NsBqJNkfw3tqrj9mxqKSET8i",
  "key5": "63jz8KXb5dHgALAYbEVbGBYUkELE9uRMBwB2p52TgaRPk3N7ik9PnayVoQxxFJYwozth2oNVrVHiTaSvWpBuuXPR",
  "key6": "4cUh9hkBwcFYeRMNZpPxWpeY5upr8fKswXCsnJXcfdVcXQFvCR5rHs7PmPNJuXNkt6qunsQ8ZeQDg1aBNoUJPinu",
  "key7": "6cLQRWX2MdTkmonUwNQ34FQHiLf7yVrreYPqsbkTmRAXabkMoe3iEpj1BmjnZHYaZJ12HfVQ9KYZgLAQ4ZNAP4G",
  "key8": "2sCMuH91P5Dfqj9DwbNhH282qBzN8BCfEhSfTcW4zDWRnSHoyCErAot2Z9hsuvYzZwEu31y26Q5PbkZ5ArwftQzy",
  "key9": "5gBP8AhunWMGnZQ8GGyn6Jf4Xepg4pszXd957Xt4JETVJUC6xEuotuUCwMHUpS4CFcvP3uST5nMthBjPdhxnCjxw",
  "key10": "2MVj2o2eshifSxAj4qtjmMVboc3p1sP7unmqEaiyYh5B7pZJ5UfECSPxnNsm9icqxcCfmF7L2HcnH9GkX9dApBRb",
  "key11": "MSNU3HTFaHsWfpux8UrFuWSMrBtj5XFqhEbdMjMwbM3hKQV4TNpagR51gogjF6VLA9ofwFyCUmFWgEKU43sbae1",
  "key12": "2aUs3fXjn3Tk2EeHuKxdNLn1kdnsqhtexVgU7CXTCackF8XMn7WApTvvseZPUddewCFR4v21VifBkSH68jAv7zoX",
  "key13": "2FihcU7KFmU3WLDxdfHEKLiWRRddEqpZSrj7RMxfpz2uy5JnQXpP1wLNgqRvtyUT8wjRkErijmGUBfrvAo71Y3C1",
  "key14": "5hxy7tNfCwd6qgPt3ePRBxEYGZSWn2T7EfUxwvci2zMJbs4bqVNUM2ssQBpz4PkvkEGyVWYTHYQ7SsPaFGfCYrqk",
  "key15": "4wRVoouYAEFVehFmTMZeBjvU4Pt1JmP5ba8PRKJw6MySrwq7XqVJ4vjjVqxD7K3oMiu1FxUa6cSs26VqPbBUUjha",
  "key16": "5gXjar7dsvaeCrWL6oeY8L9njHFYiVPZnP7k5xtJtkYG1z4RkKSgfDcyLiBXAh5WqHE6SbL1nfcjMxyubDRkogaX",
  "key17": "YTN2UvBVmqqfsDHgKcMbWAwJaXy7gCUFK3aoiv3fgcvNBeFfnVQUdstnSTzdHDeTmLeALLyJQz7w6AKnK2QGNgm",
  "key18": "iD4x2gVZeyUEAZVCDNVVMScSrgRDdmJdNoX1Y7KPsEDBpSfwFY588c8zUMg7yX6hTci851xaPnTJBhzsbbCCcaN",
  "key19": "5V4CaAG9jcWLyGANApiHAEjH48KV7r114QS8sqGuYLPexnhongrvkTh764VEXo7C8gnZNNbvEwzDQj9xGVdqge7C",
  "key20": "4fVuTHFfxNzihGk7qNy4CYmf6dmeCedBrVfTVzCspCGU5SMcRDbApM4SMe69cMzE9MjQ9FUHhfRDj1rx7awT3CFg",
  "key21": "5Jz3StfPhpACMhmB4F3bVzQmX8iadts9HyoFBUDUudr7cTxx1cD8jdPNhm1ZZF4yobQsTuEuDTAAYWVw88HmTCyM",
  "key22": "3sb1EPi6kbhaJiPasnWAU24yXJgVNiyoLpFWkmCgAfAYDXofDrK2cL9i8eGgTjnAaFp4UPHDmx3XjDm48ErCL5ae",
  "key23": "2acapDm1XbtA6B9JhzYFV2kcMuzzCmuYfTGDoQvxx66zCjVRmT3UXSe8GLwKNFsiCapWEcZQdXeEFHUn3EzxBndz",
  "key24": "5YKjmHncq6DCw1D8NN4Sna7xk3554cp4Dh1TKWHUzf752ftK63cYvUqdR8e1aNWDDJKPauQhojzzsSCrr7WSnDHb",
  "key25": "3kqTYQydJeKQCNcwEbhaYfZ1uaiYUFaKh752JA73RAW2nV2aa6jsYR9ka2jNA12VhyLcAtiMYygdrDYMWhEtf7vr",
  "key26": "61rjoX9FE2mW61Kd7AvjPgEr5ZRESCbH41TtTvTWuuxKehvFXKwKNYvZAefLDUgXYRrrS3Jhsi551JAeNwUUm7Zt",
  "key27": "AzM51mZKadkEHz5sU1nQUjKpwDwiDji5dNX82KkNM3fqTeAUBJNcABVJNAFnMvggQ2EjrQh6HhevJ3A9NMKSHS2"
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
