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
    "5S2wFtYRJt5TiYR8DksRMnG3qXcbV4FfPuXpmCpwzh6b7fZippPyCn8KQWBq53x7wL4ZPyoogRfw3eh1Ux1Yohb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C9z8LqA8hw7WDCLmZGFF1PU13YPYZciU4Whhp4ff7Mf7DfWDKQAfWf9qKhL5JQLxt8XQGcNpZja6U3kBjEuVuV",
  "key1": "4AiYA33CPKTe5fLsyk5ZDMTqKz5zkdh13MVTFqt4b9M7htu8iWm9MQj8k8ndi9QUu63h49EhszLTzK33h6eMzyYL",
  "key2": "QZEh3rgUFjnrdb78j53nJWTw6TQQWiXyqrnz6LrM7MfcCWGWNhphVe9vVXNAVQmRwMWBGh4RHxqtsEbMdNtBW95",
  "key3": "5wQx9ssmr9ueiUMLA6C5tfAqQmBQKJVHeCYzsWGmAdz1JUYJXgoewmKzdWF1a3CdKr9UdGw8AvLf1EwoJ9yvTvy2",
  "key4": "y6TcXezAiwTboSSptMHhYSKmNGtB8Qn4TVNKx1P3tCwwacjCKguPUKoRVR1vtzTdoWsHoekkjXJhPbwjvnG3E46",
  "key5": "XgoMBs1tGF33vcYfEwBu42eDjJ7ACU43n8P1Vz2ecRurckALoMFPYS18g96bZDRwJL8spYu8UxLFPqt9kokcjEi",
  "key6": "2j7rZa8E7xioMcQsSTEYzLAv4fWWDYqLZzjnKmpPSeu4hdGT7Ah11N2ewvT4YGJ52ewUkw1JavANXjNiQmtVH5Cz",
  "key7": "4SKWkYS95aKpEgHEwEG4uxcHsNWHBNTVk14eGpdD4N7TuD7ikQY6XaUL2o1NqtKvEzLgnoqjQdAmYB7HEypigb1k",
  "key8": "4DYNSeRm9tKE2iiPAmpEjN1W1H3dmCLBC3xN5mMJsSwSx2tUzFoSWV4wk1eA7wgYKvdCEQSFg8pkNf6M9yjNa3ss",
  "key9": "SjSQM1JV2MyjYKVtacE5KzTsizrmKJKYwYxFrucoWCu2J5Q2SYvpF9iTUjE6rXPAM8kzQFPKsFf9dHdw9Pu3MMj",
  "key10": "2sdt4XkM8yqEhMsbyJKY5h2XMuEuZJoeq36vAQj7drXrAcfJGYERZLqicDNc1B7RnQcH3kNuNZM5Gf6fa9KjJx2g",
  "key11": "RyQui4yULais4tPwjx2KXXHtT5D4uU4RvSsSpYVd9U7tGMCHwWXjdHxEndnjEYKzr48eCLECfEBBPmCUEwG3XsB",
  "key12": "597ojUCNgUfjzJ1PXLRJBvKDZ5yznKJdAZ4zgNMzYiyAKsoUBWg2EEyforEKfsGBc1mkjYH87xodK4Pm5RNfNYez",
  "key13": "588KhNx2agZuGoH7wbCyyiLBXzhkQ4WXcsjzxA8ad6cTnDcAqL9wPPCzd3xcAQqoNhbsbWrXYqU4q2z4YZvwYPGa",
  "key14": "5GBMAG4P9Jwomc3cRGhbogUuP5FWxwLHX18vJGUPaBBNN65tan4Z68a2zSZY638bXHd5MDi4gVxJWd1MVFQnPc22",
  "key15": "QADuosijBpDuKPPwXScf6HWvNYSyAJr4avZSqLv7w6rBtgobu4xsguYCiyDZg561vFrg3G4D1KNUD9ctpTV37fH",
  "key16": "4NhdH1J5RV8mdiKKE2widQGABowXSt5v81rJjRt68W2EXbVV25reaSDKG1qVahJ4kxqd2ispj3pGN58tndGT2x1e",
  "key17": "M5VW2Fww6ReCjDmRpRsDAQm5fn3MNXjUdBjjiujoZ886rShthb9g8hbn6Xi7yWt1EqJsjkMe2JfAuFc26NuGx75",
  "key18": "Z5dgh4Lm3hygXXHue6MvY4DGN8pSn6nL2TpmUQGbG3pfimRkENBLXPqgNx152npmGMMe6mW4LKcmY1Hv86qfh4B",
  "key19": "666ppivm3oByEZfEGiTk5GXQqw372nKy22xFqeHxEZekVW5nzijS2mpLSVfKwxLim1erbTB3SnzfDHF9NS6oQLGR",
  "key20": "YwY939KQqFy1ZBSjQZCDqioHtbeJFTS5wrWuJp76FN3at5o7uqNxNzotFooP1vhoUkB4VZhZeaQYM2cegx7CFcL",
  "key21": "5v97vgweQRQtYKBcgCvGQ4iQG29bDwKox7fKDZrVKd3j1XnRzKePXejCWdYWGyNMW1WpynxqsJDNsNAuiH9se7Do",
  "key22": "4gD5QuaLCvovvz59WPB3cZvscAZiwaFt6bm4FuC62CFRBEyiZMb15mWf2dFGM7qjy2cpG3WE2UBe3zNCKGY6jLFy",
  "key23": "Xpdq7yJPK94abcvJp4BVbjWsy6iJjoERBAfz6UAkpMsnEbWim2QFTetjJ6Rkrp421ex5fATLAuMU59B9xih1P6n",
  "key24": "2xWhfpjr1f2bL4ZmCHRj1cQY496LRMk8s9eG1st4jYpMA22xrxbv3BrGWEcWhZFQMr2tHKxceGs2vQayENMkfhgn",
  "key25": "2KFuC4s6WgwwU9Bf6TcaagmQGbmB5nWkViHSo2jjqkBngTQ7VDLhp3rzXfTqwG8UXunYByVc8pXhMahwqkpqfasu",
  "key26": "3LP64m9iiB1zzrzQ4C7kEEcybkRH4dN1qgxL1WWcHZLbrrYMMe5FSu1iLhKuYeTWSrotLwPMEX6Nwiue8cn43YqB",
  "key27": "2uDzgoM2LMccPWhybG3yxQDVsbyLnPMFd8bGZ8YFvt8B1iGW6FQWwx69q8UtUsAc3MdppJC84CoS6k4WVyL41uvA",
  "key28": "4YcMzP91PSt5L4SkaPLAsar2ekvR9KT94TKrcGjxZMWC6wBn9m44tf7mQXXhp9ps9hzjbZdL4TvYWEZaJPs8sJ3P",
  "key29": "4jVWPKWCdHdZW8j8EfBPYRn7Yn1GHKV2nF3QHmtLLxKiMt5pojxLv4Hb5Yw4zS2ZAoVwQ4Nmv7DyuQvGfvSsvVh",
  "key30": "63ULzrd59Ct6X9X36d9Vw7SX64DyGeEjJPr83LW7cRA2WaYowCv6uA765q1tqZVsMXxr7wdxXwBHNdm57yDErXjY"
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
