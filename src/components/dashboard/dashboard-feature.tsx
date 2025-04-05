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
    "5qeMTXmBRUPyCsZpTd23ESYSseSbHQKav9i4CEFjm3ZBXbUJ8YTdCtctGzB347bYGUkuSh2JVS7Zm8boEHbK8m9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LFgR4RCcVHG28PyHrSKS4bjbd4xtn9DgdYLpi6CTjGPaTpsmkiRGyELWuhVCYkP3w8LVFH3FxdnGWqdiWboyCA",
  "key1": "5HWFrAhfNDqQd91F5d72J8g3NHeTxFBFvrGymr1kAvicLq3dN9KYVqHSqnoTXVLfK89KP1nwFtcNi7dsbwVTSfKQ",
  "key2": "4FxDazGzUW34c6ePqcuRTXhhVuxi7KWJpQ4uUp2e6KBCPRjL3zjmaBapNafranuUmfScArFPKrrSrR1AToY4jXCx",
  "key3": "3vHDV4Q7XuaSbUguuTv2X5f6PoQd5q3xBNWWtX6aQ96ZAXGCHTaBFrcUB1WcMCpmM1RkMuFKw8T1Au73BXEFpWod",
  "key4": "4qdGvEt1DwLKTWNyzDturxdPKmPn9nLAQJL7aBsKqL7rgXW1nq7KKJkyLMqUQTaa1mmH2Z4Yx4BnXZCjEwh9HdMX",
  "key5": "tx9EqRcUmDkYg9fBmpaTs4aLNEiS4oiwptoyW72b3yuFXRkfrgLv125ENiSZbgwPikg7PqnbVPC6mGyDvq4ViNw",
  "key6": "2npuWmTUmWKxSLy5vdkftQ1kvCTh9xvaeZcseUciwdNsvUpJG38WyyvHpsTdgby3DLJ8ysZiqWXsgGx2nAm6iJgx",
  "key7": "58A3kWR7MrF5vkG1wnMibZiGTBdWNhQcHfJ3qZSji3N6pd2ZHiokMv38muMvaTPHs71gduiKdMKBg7gKtGMYcfNK",
  "key8": "319dUX4j3ktPsyYvLCZzTu7GHfimqs1bJqSGfujXPDwNChXW5cUwz3jJusRivKLiCHb4rLjTzW7QSHoiYETSmgdY",
  "key9": "3Fj7nEKCmzgvGfCtNtghCo8B36vPDTZbFSqtNcwUZgd8E1iY3RoYxiyLxBapJ4b3sViu8kbjqjof1R9KiGQaC9cv",
  "key10": "27nnsh6WUhAASnjtMz1oLoPqth7wNYvbC5iBceLd5zDKi2EN9pZFhUvx5pBD6nwBRmhTp7fySVQFTQQFcoCC5fyh",
  "key11": "5mvzmiqZbQkepgCNNdvvkWvixagCLF8B2cQv1i17AMZ7T6kKGfDvE2N6hFP7V419hdheq3kwFViqxsoQY3uy5Sww",
  "key12": "2nu1KpyJivZ8Grkiu5JmubuqEwRg5NPayeb1LnCMnHabNgHs7HoeXvXUAKHPb5cY55XRKEBBfpJiNSe8QZ2f9uGf",
  "key13": "4u2NVGgpTvCHYP5Co3E6TWx8uMuuFMqxGBC6yFqASXKib2aSuGg9EZZRymcUJ4DJUin3AZVtyU9HvBysZUCHqKXN",
  "key14": "yoYAuxLyGeoZCHdvscKqDy3AKVm14ejH1q3G4F7cgoTkcar3VFG1EepZZuEeM4Df2gpWke9YAFGuKwUo3Zkb2uY",
  "key15": "3dLTRn8HZYePcLLk5FNiJQVUEqUcWpmPRnbvxcuF265Cvo5t1kb4z7QZBmRosKw6NNqmB84FKqm9PHgXFU8ZqByi",
  "key16": "2YHpd2Gq6n6nfpBHaeD1BQGmRpiVhCcjp9yqnk1ruHVsvduZcgsrNp2Ex2PgarBpfG4KfprcWT3ZSkE86VKWHo6A",
  "key17": "5Sy2S3Hp71TZQK2ts38MMEyyG3R7uDS3VHUboQBVwcXNF7P1RtiJcKHLXj73L3hAxABTnFc2mzW7wyVcfE6ykKTx",
  "key18": "5RomcH5qaE3UbP2ukkHE5vPhiNSnBpmf3wFYbUbS87tpq3ma6XjkFYFNThwJJ9jR52Pq5MJ8Q1mVMkUgJkzYRQcB",
  "key19": "3FSfumGL1FXbF66ZYCUoYptGPn3zLGxs6vgjGfvy2ABehwCoNdN2HqdBYwibz6W16T78J3HNzYHGdCfXeQMD5bJw",
  "key20": "4MrbXEBo6hq29ZPn9Qam1yX89mn99iLP9dtCZEkPs5Pzt7HZQw9ttYfRvWzyVcSHckPx58uKzNo8kVmXH9EXVjat",
  "key21": "3aBmhiePB1pDzaHzs6UCLchakp6xVBuBWpnLhco49pZk1Vg4HiGisfGh65BWn89qC5CyXvTPs3p1AvuUfKncu6ut",
  "key22": "2zRUqYULtqWLJNYB7zkbo4eJazgfbn6DTUCXh7Eub9rbLgw2TBj37XtdKPy5LGUKgRawo9UL1G3kGcMimbDvWS5u",
  "key23": "5RzsT8d2t7ZVCarMd3QQjqaXhL8jnAW1M98EMxVxfuQxJVJTHsVnwYkrKkoH5vSW6ABw14jC335RZeTFSvjNbqbk",
  "key24": "5smWM2CGFEwqQJP61DXgKS6sVHSZjgRW4FzVQPwbjMxaFcniK6mdjeVWBHX7tWdarhSaSgh5L3r2deKJyYYzgS92",
  "key25": "43nZYN7SqmajmdN5yN1SpBubg8izzW96eZFgTtgoVwnpuiFDvgZFnbLPx4Y5j9C7HxF8cpM4DUwGRZcqo51VbeKe",
  "key26": "28rJFPiHN7jk19buPZJMRvs8Y1x7542zvHJ8MTx5PUB8D3dwEFopUWNet2eU9wtLTF3SdopNjXNHjufNzKqAbCD1"
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
