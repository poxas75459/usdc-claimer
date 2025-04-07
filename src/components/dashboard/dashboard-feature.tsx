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
    "2okraCBEDhii9QBpMFBa6gMxEmfDaVKLDgn9ivYG9VzFQ2TtnoP9Z814PtWBa1uNHegQJRQ3aVoKRnGTaYi87yct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTFo3PkXWUuVitvGKFNyCXhwHVBDA896x4kp3TNdWYFxUdRoE95gXk8JVEC5yw5sQtfvNyQYipusbYDEFUQ5J2R",
  "key1": "5HxcAKsf6MYTKsbCzz6kx8zvLLHFb9ksj1cR9vzhcL8LpPoHb4KGRUhLxVTngLqRVRCFbmqfT7m7f8R4XaFrEbUv",
  "key2": "5npncHZ17H9pACYNPXPsJQJi6hn55zyFD2qsr4rzu4xZbuVvc8Xa4UZcXRVi746km1H6cefmAwEFJeB7ZML8weGA",
  "key3": "3g9znefACvCuRqu23v269ggNn6NpfoYNnTCPpnnL8qsz1gEAk99CrLe5Dgf2QtJX5mM7VDVTJhVuDyWdwBdj6TH3",
  "key4": "2qSXAYDg9unHXyHsWNTXpk79UTPFukDmAs3pehmk3jzXTzB7kbE3rzGWbeiZpNbXyPDi9dFSog6F4tdPVfKH4nvd",
  "key5": "E1MsxMzH9RWTHVukWHFnySt1kRnrzEQyxPHEPQYnJUFbWE7D8bfKWoXCQ7vBx5BeopyuhHCApRY84nH4Pj4WnDA",
  "key6": "25EPaxzaUMKPkZ8BxVaBvogvT5q6qg2tav6CTTxBpkP4DWPvJJj4ko7AKkV4mYDdyNcXrvWM9SBJmNQDdphskXnN",
  "key7": "U4B2EY28uaZqJsZrFLYKWvrwZzHvuQBhVuCa1LiGvSjW3dV7ev2hbTvQCyndfsJnuY9MBcQ6wdWkHdrm3ZhUxSw",
  "key8": "5SCacKCckZx5LtAqwLY1EMkHn1t1C9A8LiwSQyt814GaCZzJzf7Pe37xGsBDw2pZcRfMnZSioeFBTCntt8pvjCoZ",
  "key9": "BZbkKy6Y7VcvRS7p2ZqRjnKkKvanGgUXTu65ZAwLNAbp9zsn7dVkgojXggSp4tjkLx3FnHvSxYQcE3LxnHqq2y9",
  "key10": "uwKbEjAMjPJ9Jw2yZykopWdimk6A1KDmFJmCVtreLwbGECXN26HT427jhYRKwJogf4EM9zKvff3Tmrd3Q3VxJy3",
  "key11": "252r96GhEm4NDhCrRza8b1WfR4G1t3bLR7MY7sCZU9mSM6ZnS5BtiK2ixHwYg6HHjEn4xheYCUcHYPpnMVbbEaqN",
  "key12": "3pD55xJTnBPG7JzS8MALJXkuTec5SgcJpBigNJ9fnKdCmXYihTLrFMAz4W5HQkjLYxuTv2XrMqqnrQSYQoQS5r6G",
  "key13": "2hkQaEsccehQgmNwvQzU3PXPcdWnT34aTFW5TMLHaRNZ1rhcxshRKZst8EF3Ny9Z4eDra55opdKMZgQzQ5G5dMJC",
  "key14": "2t24gMw6QW41Cu5XsqgwW9gvfCTX36azXF9vKtQFZ3htznQeiu2mKFC6GuStH46oX4giaRsgnDBuF1GyujcEVs6F",
  "key15": "46LLp8j12gomg3XC5Av3DcBvExo7fTiceRU3qooh4kyB8dEsH5EZQcin8Y99vXJgQghW6813WHoD8L7biHeRJEZi",
  "key16": "3shDiDGJsgxnDSQMsBfzRPLFznfeps79CnuygtWKiXKWUiMJGqJsAFeC1vJ5xFi4conFhZ3wttrug3LVU8ML9ng3",
  "key17": "QM2moBWbXgqwUea39RL4AoJ5CV2WocEWFyVaZDotDUWJP6iYYjeqvRh34h6bNncZb1H8FKfQzBcEihCLzdAk7nu",
  "key18": "4nZo7v8Hf6s9T6bxYjoKnfvzc7fiVmwwXmNB6wN2jAC1io44aeQ8Jje1RjBH2QVKyUvHCCLT7SQ3LewBXgVs7hCs",
  "key19": "63v5Yr5CMKr3vcsfwb76FKcnt33wY9UQ3rewLkvfu8g3YPfU9woTTFFqthqwYci72vHpMjkgRaQTvdM5aRh1ip6E",
  "key20": "4rXEmEcHFF1A37bSxrD3ScoZ8jt78t1xjZc471dMYR7kvUrtVHZEwqTFurXubUqeQouoeUvpghgGYAmDPp4SYd1a",
  "key21": "5WbyDBABoKkqRu7VshpNwhsdKG78rqz7Lp3xghmzfQ78pC5F7Zwn9tVZKfak3GfexBziuRzdzPx4jUamzMXZtVzW",
  "key22": "3qXi2A3RhUUfsNgXyR9Guft7wkvk7MubWSGPGRuU7MzA8MVjz3cN5WWxtovVrnmnHXj7PzgeqjoAyu7saypTEsEr",
  "key23": "3mRBDT6XGnf24XRM5G3dV1pr3UEfVttZLDx87o1Lef4i4w2zLo6vfK6n4N6gqjGtMz3fM7GBypahB4d4d9ENjnz2",
  "key24": "7Q4EfxxVRzrjzQbaEUwzN42qVQBQV892rqWt7Y1Pa1VokLdiZQQ44wKdGbfSqdzZM2F84x5Uyf916Qhqzwag84B",
  "key25": "z6PqubofW6aafNVJgGcM2QXSX4S8T6MAqKJFrRHA6nvpZKS2eRv15jaCPdAmufZApWE5zWoTAEHYBLFpbQT2P6i"
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
