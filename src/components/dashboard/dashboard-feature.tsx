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
    "4xPhzyBFwk5BU6yNFceeiKuHBm1LGoCGxeZR1xgijqWLE3BkBjgFWvAkoD7bKbK72Z1pvCBzfXAoDLpX6iN3ZNvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stWNAZURpcSfkYcZsxRywhc6EM68Kur6ex8R8E2EuH6bC5BLZRmzVewY77W4nLY7q71tCvkpV3PbvXz6JDymKRw",
  "key1": "G8DM7gBySyjALjCDjewinneN9vDSL7uwZeFMqGjXciywpQnM2UpVpJrptTMgoPF3GA86mY6YtwQ71cVaKteSNz4",
  "key2": "5M6VMd8QzJEYPcPjioo9zTUUex1wCsnsUiU1nMTPn2D64BzyPjDvHt6g6J64N44jG9trsThT5x8TfzFE5Uz4wTvb",
  "key3": "5TNu1AZC7jCHBiP7y64aHG4eZiRKRNBZCFqmRM7u2zRYQCHmcWyD3tXcjk7bLzEVnEootK11kKJnSQZNCG96b5NC",
  "key4": "3DZJ4NCBY7YMQgZbw8U7zgZKX2w6rBueDHwgVY7Zj7E3xxnNgzrKsuHwkQoaeXR2aAGA2w9rUG9pVUz2XNtjVS1V",
  "key5": "2AtmutcdXLmKxuCeqd9fLJ53hDo8KNSs1u5o1q3uLpBXMLtjSJdEyo6Rf6GV14n9DxZCFLN3yZEqEe3eMFAnkd7Z",
  "key6": "4X7j4toHGJTT5WzLbKK9sheo82AvwufYGWALC4hViYu1UEXeP8onGc8FYU2AFKqgpoM8mp4T6TyViuhv5BspA8pA",
  "key7": "2Macy58W13rudnBgGeZntuwVL4g53mJBrG3Nh7LhaZbywmhrSqfxeYPfnH3yDqCw6m1BdQHYCTuJz6EjJ1PxaSiu",
  "key8": "4LuDf91wMETCqUHgMhbPTRKswciELansLejCUzmEGVxvXv8V8uJ9g1UX9TZrpfXcrdnVsArMMTkjaCmB6oMCUAFS",
  "key9": "2mmqtn4PVFnVdeRoXQ1EE8gdLb6HpySdGRQjxjHytYprbRobmXS3T3dv2m7tsbdW2qPW3Tg8nT4LfS8eDd9QZS4Y",
  "key10": "54y5Ca2kTwVpKWWuV5NLmjr6hNMFzXVKRYp2FFvc2cHHmfghiHk5HgFKaqLyBEsdcE8TdkuBk8j4fnhi3PRqXV1C",
  "key11": "4TsjX55CU9zQ3Du8xM68cKsp1rS1rgwSVDCQqQ2dBqsMCPMK6HgQk95sCDoYF6NiqMnpNuVMRMJw3aQv8HkBtkj2",
  "key12": "5jMFon7p2em993wg6p4xwAdjVwqxDXuTMyDFofK4ToiVoAJebtaSo9CPWRwmZo261T4rcjabqLTS7AXX4b5zK7A5",
  "key13": "2i8CgYHVHHeLX5MJEfYivRheibZsN6a5dXCA8uNtGdJXTZt84ie9bGH7bLvjG5vzijtH5mceXxwA4EdS2sFCQAn2",
  "key14": "4QLeBD3S7rddx8G39LmKbwFPWHe3rYAZPb2QWbtKZ2dMZjKZu3WWR2rkmfLn8SjKhZWAnckEdZTp15G7WrcoXBt2",
  "key15": "5D9aenX2aEFHtp2BExJTC9sqV57p3N4aztoYtUC6wZSr56x3gQs3XDPAcRmBi1yJL97cPt2cM1SGzntMDiDVJ2wG",
  "key16": "5YNCEA8PeKFNRXLFuqjaoU3juyKnchY517jtZZzm3S8UYq5SqLe3n5RULXKPGzXJaPAgNaCeUVsQrPV2HHPAEfXL",
  "key17": "3zWk3FVCkznJPeSmp7VqfL1drHkSxa28MUYpiMUj4YRXgY9ZWHM98qXQwxKXJNeTg4vuVB5kGLnUzrZYdZanPYRP",
  "key18": "2dKLF4ZAgJayRhFyTE6uHBJNrJRrcHL5SP5cwZaFaaAWeuSSjjgYoJ5q8Qw2EcPuwL4YntLjygF3whAcp7doLHe6",
  "key19": "2q2Py1vxXHdkpNwp7b7qyTkgMwyYKGzfiCkcjJbniema46VMvjggVczWU4x3FLWkeFUPCeR8wRED3bJ2qBE2eCqS",
  "key20": "76EC3LtQPRqkBLLhD56GtoEaMJM1dvaazhyMgMk1wvYrUfVyZhTUviqkcTj3Q5rffnExGEYwGWNK1BvdUbQP7zd",
  "key21": "24PbK2uR3MS75MWj2mccXXjMbny2gt7ssm13vDvRgG84dyFPk7XwcmeZBd1YUL5HLKMD2dsz37CTU9yf8Jo2dp3Z",
  "key22": "3JgWNHAanoug3VCNB6Hzy1TEEwao2yy3h8VRY9dTbbh4GcAnh9KTfSsJBamBo23GMU5Z7RRuJN7Gy29fr76tr4vU",
  "key23": "4RfweuhW5wvGnQp5yhiD3Ja5Lq87k6XRxkrTnPU4Zfma7wE3dJQ67nHdudDNbN2E6C1gzFTiiVeM3S19mCwikQFB",
  "key24": "52xJNeKhPyTdfkjs8zhMeEfEYXcrUn3NHYEMrJMDgBxYPZsQud8zsZJ1bSJQ5THbU6dRbh5FMQXxisGsSej5nPA7",
  "key25": "4LCaNWeMQ2J78SWLLxM9nYPDDNkMZVjV1wqvCoPhxPZYd4Xt8aZkEz24idfcTFUBjcDisUvXDo2ZMf8NHcti51uP",
  "key26": "jxoVFEH5cxJnqavnckqb826QRAzhTbyoagDJE95CiT6T44RBmTg81x74JMobKdA7YpLxHfp8N3KWqzwFnsskR9k",
  "key27": "avuEdJvTveAGvyKLfZSo3uua3xF52XuMBVdyHp5a5rzat9k6gWjxUgZqiY3M3rPkKfoJzqPYw69LnMwiU5ni1yL",
  "key28": "3nsLcahDNvfku9jEU4QH1isAg2hHneY9SMkHtZvZPacpCzNGp57DkYigCCVek4CJ8tGqw5zNMFgsSdkNjpsftQFX",
  "key29": "51ZuL7JVfuudZYDBC8gV1SPdWXqixxPsQ41hAQg421vSjyEXycGJqjQZHutgsjmocnxLjL4GfM5VccvnpFRGQL5T",
  "key30": "7Fy5CrieP4gnPudf9G8R9aMZZz4734z4Ur3rWKDeYybDQsJfPRz8LbBFq1t6872zo1LqPMqTt4ZJ3U2cF7N2LaQ",
  "key31": "3DUPoshX3RsWV9ifHkYqDPVPztAmuhWvZKSRkdiTGwSbghiXxJc56WrVrGEqbbChgKhmgFvES9uEQkmdFyt7sER9",
  "key32": "4c9GHCuRZJyfW92CjLezwxhY6TZSXhCQKQyvwGxUx8yrCmJpDrRZ7hDC4zLMFMkSJnPARipF7iMDyn9bgVVgEuKD",
  "key33": "2TQv7q2ejdaBWwsY6qgTpsJ94NKvwKemReUNrQRchKDaBca9kxtWJQ1aPN2sM1U7uRcjy32YVDdBrEKUtCHhRD2x",
  "key34": "2g5kFBehYgbWcu1r9KB7e716rgpbdeMGfJAjb9x6JAFhqGir3cV71mSwcDpyfzgecgoQ7gBdbrR83QkpcSyBUKjd",
  "key35": "3VqNv7SoC1GWAHsXsBNETvsLnjHer426dV9hMW75RxyAFXidsAW6uu4Xy66qWYfBUDSB16dk9G6Vz3gP1JCHXdW4",
  "key36": "3P1j2UjQKJAd4AUZc3T3oRf4G23ZpUBTYGXewSYt3EHN92vCkWRvVNP4CuVHJnF9hSqpebk8upC6yWGq7bJVdQj",
  "key37": "45B5HkoPhYW28JsDxGzKogj1xFtAx8nbczKTEEsa5HNR3Vz3GDgkfPTzwW4BonDKNxHwS4VyL495jFayEKUxn3Na",
  "key38": "2YmPUgKy1G44mb5F7JAELC2MooSmEZWwrPsLVdfVH4dLDDebBTMCXQsgpEhZVAh4PknK8k6yHk7rDn4HE4PGUNqx",
  "key39": "3LCfuSLuDyFksnaBLRkrFatTn48f2Nekf5i8CaEJVhAGz3fcj1nLUwfNkaLFPi4HfksQQ9Khooiv67W5RiybvPQ8",
  "key40": "5sPfz7WJWZgQg45KFMpWxpWQxFZqjxSSFyT1kK4U6Vov6rEarqrhjJK6Z9mqPuYMSqJ9D1DA2gLQxnzvGSYcNGNN",
  "key41": "5qzEoue72JpMr8iwQ8jYpUyEnnKwBLbndzrjS1wnMHiXY2vGGvrrW9UAPFGbjw1XXfCA44Swt8QBNdaMtYecNTNb",
  "key42": "4TLKfToNPoQjpFQRduZRzcV7NsQ3mLBoDPT9dvyFi2zCKkgfAGbHJYWfkgbCgsLtLuK6ziRnRXbrchHgJLamRSnB",
  "key43": "53atbBkHkpddzo3viBynebw8RWwijP9c8An6ru2E5uc8XtMSGYLdPSkgVr2BMMbxGSbau5KVLuQbe6wAYCxdK2EX"
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
