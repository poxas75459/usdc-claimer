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
    "Hu1WfjB1hP8e5bjuj9cELKvAWZhK5Y4QpmSoJfhnnt1HLEUvtAA2x3YX6Z47PWL1KoG7fay2bPcX8fYmyS7Quhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8zDMe49JQXKK74z6BP4qd5QSDHgAEonDNjf9fv79k6ryLjqssDEGU4roSYAdqHGEWRZya5ir3PwWFYPDTxGL5h",
  "key1": "UtMm7TJmeCGenovU6q2QeMii1xvUWeAaKHX5XxQeKD6Ak1cfxjkMt76mRvgU76tbQJRiE5H1eVzYxewD5T44jvw",
  "key2": "5AimkoafU71TJBeHz6EWyMi9GPd2EXS4kgqeiB9HvPkSVepEFHJEVrzXt6Nz7wzhjwYmDabKRbuMwovrwLtNinxh",
  "key3": "3xnhH5DsjAMMPwVeXeA52bFAZY3wGy7R3ihGtonyavuAdPf5nomzFQKXVN4Z4gr4qAvP7ncmoMdKWHUya5kMPBRt",
  "key4": "5s5TrwfnSuW63cRahhNdmq6GmVWS9Sh359CX9vxffZzQoZiCaH2TAG9rxsUBA4b7pb6u1jkMh4C1UAcKQvu9Emav",
  "key5": "3nLtT3k6TVBfkxW4qrw8bAsUWNwLm6VafdCTUXBEVsDH6pdEe1SrJCsEVBDsooejoweRsTnvSy9ZNoQvH2T3GWvB",
  "key6": "PUHMj87LC8XeC2J4Erk8miQZS8Emzv9fmikCGn65bDngKLWvSwwci9EcJqmmjgg2fMK6gBV43dRF6tL1xyVojEN",
  "key7": "tGP2snQfZSkbMJzPPsCXEzrf3pBQX5PRLPWFNUjhAqmjDH4zoy538Whinu9YFiLqRPQ4xPRVwTuBuSeRWxzMfh7",
  "key8": "56D5YcFz9kYdGBenQvSDpGMPUqrYWsFpYTZck4FzKhTCkpRwoY9GfrnqsD8g9E5vaPcKYxefwBf3RH2B5NZmg5M9",
  "key9": "4adLc3DsACvvgxxv72WnaifaD1J4k8xJLzLEau2jvbsFH7wzdYhWYw4sW3fXkLi3W2fQSFo4RZ6GW4mAFZhS7sHW",
  "key10": "52jHVuHZr2encqhPzVWKvhZ8ke2zbSXEqy5nkX6PsjQk1m21mmxSq56tffaM1Faev4vbx6fp5CBLHpWFjh3j7Bhq",
  "key11": "ziYjLnzib76p3v1BatUgd6z4KSgzmJpR3P1MzxKAC4u6xVVKmAttAr3i8JMaV4xWnRhVMjb1LuFF29c1xjaGPGJ",
  "key12": "knQu3sMJZfVdPSXRwBCP6n1C3pAPjWC46kb631QFtytQoSDA6P9P6rn7jXutAdKPKxZeBNx9v1SokhyzwW4Yk9H",
  "key13": "2wUtAm6dGfHYagBmtZHXG1PKiowyQ2QFQugCQpJqcQjUiLE7iCtKw8AfF8GiPCHGp9uZJVUQ4RV3E75b4QGAUUJJ",
  "key14": "4CdqcVFZ2g3oAxmVuRWdtnVeiueRZCmX8Cgr1vrJSLYr6CSMdEqDK7vwuwBfc2eTiHhJMAVQsVvAgwgD2D8KrM2M",
  "key15": "3dYMsZb8xMGfWBRctWAu54Xo6k3XtgofvPKPKUVJMByj6FTfUTLJ8e2gnSAKrj3D9weYwKJihL467FoYMT4C1M6b",
  "key16": "65gKyeiKqX4RFPVRA9AWpm5w8a3tsS8ed64CoqjXFv8mSbndzKJqu2FBBThq9BMWVdqW2hBx8R6LY9SksLmoLkkU",
  "key17": "5avucQH5nwLaB7HXZzL6M4772Um5i3ERPnq3ehMAZk5qGaSFdN6PA1jEiKpewjfVNj4g3V4RDaKko3B3e3s6HBZf",
  "key18": "2Ca5Qfr2byu2PtsD3j9mZ68dXUVykoPJa58MAucrS74vJg9QiqWAGAiWLHYTsUMriYRxND7Dek3xPcV7vz9Qhois",
  "key19": "2MVtWU3qiYWfiDYMYfx88tq2dGs4d5RWDuhadCayiViLDTsJEFjBJtmvXMP9vX77bbwgyBUxyYXJEEorbBN6x7m3",
  "key20": "2VaP9cW7j1UqtC5ei2bn96T8zvTxUvZF9VJat1wq3JUY9h2iJk3YZRhssRepZWufCxG3rQzxX6bQ7XejJq7FuTuQ",
  "key21": "3a18vP3k3MgA2FuDUNeewtMQHSKGsY1mB6iQGBujE24hYTdAE5Skk5zDnNw5XjmH6FuYVDEYLcT8g7a5StvpC1T6",
  "key22": "3qF53rjQHqMiasaYnXuTkSCS8mVfWbS8fkFZuapHkp2Asbjb6AjBFULZYCp6xc1qzUY3bPQXMPfz8jDifELtMRxL",
  "key23": "5EHEM6YQFJ9fH34VVyn6R5QtKoHNRrEWNZhYD3m3zKs7Sq1NcV1MaL9E8xYR1VpDcwQMkG68p8XfW19gMCnsZcAa",
  "key24": "24rTgy5pHB4FnGCJ2PhVot5TXthwmg8HGr2aomLL9qL2KCReD2Jorss3jGXephfp9kDQMeP95STrfwbkJuaJP7L4",
  "key25": "4y5W1BbhUTcjtxr8ZMC6VA1QrtBQHhR8oQAjpvw7AAM26JaSmQtBsHgSxDGXDU2hHfDCtnUf2K2VkMFrtfx7ocjJ"
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
