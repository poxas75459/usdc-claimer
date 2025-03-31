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
    "3suF2CdBUU8qBh5BmaetF11qNbKz9xN4zyV7ZmifFJ45E7UUkaRcrDATfg7vmkZ3J25w4voT5g5B1g6T2HAuNcpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RT76yZqut8hXH4L5HMuw7Cz8FqK7Q7REm3AKXmiPfGiTbjSqwXDQaPvT96rctYxA2vaxus9gEFzU7o2c36u7Dq",
  "key1": "4XNFEJqNVF4WqLkHVPGqMihUGVXC5WYbn5qvYo2fQh5T81mZjcf1gLnbsRaQoqod3u8FvpFLh1Yn3hdun3gzuSSE",
  "key2": "2bggMhSiSwpW2Xyx88hcQo16Rqw7RK2JEcPyE9FVFKr5iXGuq3CkZy8ZX87BijYo3itQ8MDiP6hB9WTLTMkQ5ptA",
  "key3": "5u8VJUexKK4SaE7pecVbhpPvryAYDKuhnUb5kjytdU3Y7aRwCaWVA8yyPCLuJHMeJCo8eSm3i6rq4Zea1vPA5KTE",
  "key4": "4k2LfTzCMz5V6AAsSNLc6qkb2wj4cyaUKSNtMKuHrewfWrqQmHVwaDTUVxUf8NYwH4i554qKxaCuvGdGQ9Wn7Ch2",
  "key5": "4RvpivWytsUUPyMovaaHW3BT4n5FJFFHKD7Qz6PQ8X2TH7aCzrB53FmNBo5Tq88gsanh3wLHfySnehCg3ih78JmK",
  "key6": "56zmGfTjXPSBBCfsi1ejvKsiWeiwG7HzDdZaXMfXNmFsuu8ycUH1a8tEV9mHotqzPkhUpZxwp47phAcfGRMxzWnZ",
  "key7": "5DH6Ymyu8udBXVMMc2ff8PAJ3ijhMzbiyQqR59HPkhUDqVE1zm1Y2GzV82mciLAnb16NQs1UgTSyzDjJ4d6dfK2a",
  "key8": "2FmC4ZM1bK1PyLhYuLr1JQcn4PYiAYvwXnrx4wMiLvRCD3KMDmx7gyd2dq7i4wviKvaTLMhQ2Vy8HnhXf7Y1tQs7",
  "key9": "4WgwjLLu8dopHYJ4YLzg9oxRQ3tx11ttuhcDB2AhtakpEmrXXwSrkRVHCMy8RtK9zvJeC3pxkt4FD953UfL4wuf6",
  "key10": "4S6Nu7mDoPeuRBLccka3ZZzuPMZ6VfUtREBXD2RVjvcu4FKFPW9i9JoYM5jzU3Vut8pH6AGvVeMKdC2oD1xpX2yc",
  "key11": "wnnJhEXJyWEds2jiUpFRM931TfLzKKyTqHvwBXKcvXTYP4hWtekygN3gWjT1VEgcyoqAYD3k3qt1iu6j2fg49Ae",
  "key12": "4Ypd7zMHzDaN1ZGoGW4bik1gaKmhGCsHKhMcy8YnamnUqbotU2TdwqyCZCWegDwxMWFLDeWETpF6ph5DHExPMmk2",
  "key13": "mAabR2Ja1vyiKa7Gatk8dWUHyxRJypEKUfmebY6X3j5ZbCay6yA2Yfk9SP8sSC4oozWUkPdiTGCWmj5fyEf3JDW",
  "key14": "5jkBc2FhwestWFU9HX31fyZS9nNhNpyvUHzyxGt5MeQkYnxezBsZyidejHxTofzhEfrYBiJDVDWFKkRgCjkVHSxW",
  "key15": "3quyV8i2qd9PvqjKqqu1Bvh8UK7otSGVQmEAuT4gyp1or1qBtfW1wDZY3r4iYRBNS7ycXWT2gnFEYFJji5RE4Axk",
  "key16": "48zqxNm37jG5s1rQDVJ1aZFEQsphnUhFeaD5iDsS4mLAXvnXKntUANtQFx3i6soCxHJQvbaZhvuRC71StFDNsvaY",
  "key17": "5PoYTrC7YBR33jXmYmUQmRje4f2FjjufCq8Vodnv7n7cY7tddga6Khd6KDJGsMTtw26t145dVFfeBhFBmeoP1Hc6",
  "key18": "2L1rhzdUyPnop2c6qiPmPi9LUZEuGNe2FEphmZ2w9F3ZPRqqKCnT2wSaL1hHf264UYgXCwwexwtvcs9syuHRUVnW",
  "key19": "4PzghWgpTtDwersGtG2vvYjdPYtT6GHnzsT63ZkqfKPEpUQLUD5F1TwEyjhegskfDN7ZmnZrhpQFRU2TfXPbPUta",
  "key20": "4VD68jSerk3qTMM5FsUNwwiZDn3WNV1SU1obUgacSHESwbwhJYrXQ5Mu4Fg3JwxJDxgnkCuHNz6tfrPwoD3ak3Px",
  "key21": "22UePRyQdwSAQi6m17wEFF91VTzr1WxWVBXS4TqKFkujtfCoAzKzKPtT4xMMCjoR8XvaY48ZoXcnKgm7hWYzFvCF",
  "key22": "wZQFyyneCqg1NVetsWWrrjmNkiuf61wCQAaej5craTNacWauNhR2AejhZqpV1CCjvqi9EVXccURJH9RRTLQ1hE2",
  "key23": "5XYWkJ2wKazpB74Z6QAtCSQrJFvEnFn8TGWETnJreiW21uAKBdcgU2fZ54JXXPQG92mWGvV8BL6orJuUi4Rm7MtQ",
  "key24": "WChCh5NcaCt81gdZU18ye8tTmU3UiKnXx3qAmH4oVF9nbdPtrFFxGyN3Lot2jULxYaEmt5a5j6fwsYXn51Ad2E9",
  "key25": "3uaMVDetP2g7KzYNyKexhuJQ5onv8EDyTpQ2qsiiywGc39Uu11oPirSsmQBtKASGbynj9mAyjWD2UkAmdL6Xf5sN"
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
