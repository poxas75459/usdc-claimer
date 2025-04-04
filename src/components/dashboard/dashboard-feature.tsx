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
    "wHR6N9EXUEFuwu2rEau3qtyJjFYy39eS3iPWBzDEKk21zqZGivTVyERVqs39hin1YfJMHvbzD2iaFwTnGiuLURS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GY4aTjWs6yFUgN4L5on1Ki41dS1x217Fd2WDJrMSks6XAUXXjAZtJrNkVcLKGB5yELxN7Ag1FKLARcBY5BndErD",
  "key1": "4aXPsHAFhQ5mt8Pe3yML4prQ1pgAT8qiMk65eWL7u6BHvzTUpkF3T33GEh7rtXwMbAH9pmDw7u1f3KeEUyDncLWe",
  "key2": "54qmpfrZ4ErYtDp9fp28DuNfWuBSvvJjCiL3k8Tmvuf2VCzWSjAMsZSMpUWrUERoCTBdPyLMP3KL9di5YX9LDcEo",
  "key3": "4UK9fW4LNDVdMiJA7uo4NAnsggKP45stTRLY38KJ3XBvsfLo6EKS2kNmkvMTYDbG6zYF8iz8VRV5dSxV6M8comsy",
  "key4": "3CQqpJJ3swzRLo1ttSdUYBhwZBhPncXPPxW8fvPP2jM5suDF8ZkmqMyZkVbAHnB4uCjxE5L4FGrgrwetkwQw8hYp",
  "key5": "56xBL1DGthcb4Q6jxUJ343HRe2qxVWc9DdAX8fLcMgvXL1kGNqDWecKTVA1Xo8HpAL3S1RP8yFWLNgt8rGUpgvEQ",
  "key6": "2uu8US4MQH52uKyEroCAn7mGBTr78hfmka2nLvPeUSmsf5X2FiToA8m1oRqRct7sBPCJpfwswEAodFbJ43Mc7pRY",
  "key7": "6zakL3B1EwfpzX94ZUuJVsLK9sCtc2urFTB9nNc4UiRG5K83PWs9ZnbktErW9kRbsCzq721bGErfKPn5Qyc3Qbh",
  "key8": "3gdx5ENz3AZDACMoefKSbiGsrVfpLjH5vMLT8wor74KHvTpcRZ7TRqq2HqadUbSkXx8c4gBtP4CBjHQLJ9j65ywG",
  "key9": "4qbojvYCT8qjJeVuzWRPaTa9wU5Sz1d6vsapBDKqAuPqL86d3PqoRP3oJwRHtxqyAW7KJp3pANa855nq9JZu1jyE",
  "key10": "2kARqjKbGRMWcUkEt41LoGHRjdfqSHTzogjKZo9WCzJVnroFUnsDZ6Y2BHd9wDKRt2eUCVY7PoqpwzZ5Xqdb2Jao",
  "key11": "54asKGnqa9xXv5RRpSY5AqeifYCMewyV7d8Kiyu2yxXLT5Q9LYBBgqg1J1Cdf8cnzxKMV7PSyL8JXryHsSJdSi9n",
  "key12": "5mzd4WwQu5F5Yn9tX41TjERJ9d2b1Wvh3MuwT7my8iwp8DVyeJwhiEhvK9S4cD7wzwNz2wE7RJVixCbP9Dkm6nPr",
  "key13": "5ijf7XSaTCxE93ZiAw5d9PT2UjpsZvmnBojroNnMBFkbMaCyDGVZctGHRRWPtLDtviQVWpCiNMHrb9tB8BJuD7HR",
  "key14": "2JJNC9CdnW7VCosS3F3PYBVZ58NapDZMQrU6i37EK3Ss5UQRmBv7NxFbngJouoJ8Zf4hUV7Ky47fhUCjVDcF9qYt",
  "key15": "33UitCih2uN511mqPNBWGUqxx41UrzJyWK3p28BoPK6MYxDYzg6tSRrb8EoTbg71W7skFQGvw7hyc1S9HP5SWxmu",
  "key16": "4F415KKzLgkwpC8zNtbxtvG1R9pJfUfPKPNsk83BN9JqoCw5f3FUxUJCUJw3vXub7wjWKhnMb4BL81nEW6dZmCKV",
  "key17": "2Z8i1rdvjsiPbBzF5tMDACjQfwF7wfqi8yRtiNVHECmsoScU93HzZQkuLUPyM8mprQD1616FBooBo27xWXgjBjWn",
  "key18": "2QBneeRy2Cu9rCeLMZkrpTjjWqALDJr9DgHgKFD8V9JV9v3DCn59Gn7kzLRGEjUHHcSbL1WiuGgGRzCyJmy51tcT",
  "key19": "5e5LxZp2pp7gKSwQ4kY1MrCrBdgEPVHeDipdWcWea4NaYq4is4MAb4c6NLmKGEcF5Z3mzQFs3mSxxirWjAV3QSG4",
  "key20": "5aB3ZPXxJZTfkJ5vKtGQsR8UVVc8z8kD7xyG9FJr9sTPCUhHZhVP49pwmk1MNDcrxG4QbK5GYQTx8T9hDnsw6CEK",
  "key21": "2uFYaZbU9YBAWg7ZSmCCRJhBRVd11N6Jrk2fE1CgVJCYZHb4JWgK9wwJ2Hmj8Si1eX5FABczvXnULxYWFs71aYK8",
  "key22": "5gyhC6ASAgS4PNUrRJCcDYLCa7WV1wPF9WHSC1yECP1f46vhkZezTywvDqLsksWrQmRHJdub94zo52FgQiVb2vs5",
  "key23": "2HvZJQfcshb7t2guw2hjw3G9Ah1e14HrVGPYqfS3ZsyLoSnELsuvtAjSixv35HD1pchDJd6EcFKbdYuu5XkpWThY",
  "key24": "2MU9ZRRx2XR8doN673AaV1JV4xD1sN7jsQeGWtV42crFDfF8pmnKd4WVADWuzgu7CdSJXd6nTHWae8dz9GiJ6HK1",
  "key25": "4SMV4wQ9A4p31XVgvBe72v6WGgqRYYqE6K75fmN9WSpaek5g4SVrLS8M4p4vszGrUMr1wzo8UHWasKDiaS7vH255"
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
