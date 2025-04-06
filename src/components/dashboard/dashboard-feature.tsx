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
    "2fjwFkBRLngEKzbdjuEkPk87oFEGrveUmvxjeQZVLbHRSm4W3Wohq4MiCwsw98edLT3nwvBtzcB4trZhyarYVtd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkHwK1MLyKgH5HbZFhTZTDqG5CGEp1fC9XgLUQtKj1cqYzCJwdXHsCweuh3PzwEbavKJRwFHPsWUSea4sijNuqU",
  "key1": "3u7pvxFXHEZjiF7YuaSjL8RREDa3tGZYfxpwHxwDdJhihdW3hzCGrYxrCZBqyVB8ZV37tRVcjVmG5vPeWchjBSPw",
  "key2": "3MzitkmZkSJTUeNDPyn5w1xyGhuo9ZXw5dTsT23k9CTXrhhvhAUge9VcT8CFXgxexCEtRxzi1cY9HCecfk3H8fsL",
  "key3": "4QWEK1yCrsA1vdffWVgBeyvKaP5Y9D8LngTKG1epHTCGvsUy9gHzgarrYZjcP6xKk8mkMFMsupmyTJk85NiZPiow",
  "key4": "zR17DE6ySkimMhrxkDEtbmn9rXcvzb49txss9B9yqaTAediyFRn2Q9exWvs9PasE9krcGRnJaBLFsYcwYYX9JTh",
  "key5": "5sEN4CnaxwNn6A4tfJ3ZSY5YYrc3dECwKShDgzrizvXDTQLZPDat23LaxUmiQGKe4z5VY3MDVkL3mNyeLBMf6tYE",
  "key6": "3HMLqR4HHxmVeW5uUBoeoam2aKQEbKKvdZavW8GqEciLtGVZNR3UfXqn9dd5HncWXPjsTFM2ooPuLH3EKUqsTG8Y",
  "key7": "4shXGhT6DBVZWR2xd2AG9p9gLv5vAB1wFc5JA8WugQfRtU3KMavHQ19CPrezyLUUnFnVAcziajjPSmc19F49wJx6",
  "key8": "3CYzacRZL8NA1vhmkSujpyGjoHj5Kbq17bb3PUL1LqWifnG7gBGe4DRpBZFna6QB5x5qYgr1xgMsPASFG43JZPs8",
  "key9": "2H6xoQVXQJMbALGXQHaJEbanPARnEP25G3wSpfE9rnJmj46eZDueycPBgbNCvg23dj9RGm9o9qAG65ccUYCqQk3W",
  "key10": "5yRsGyyY2vHpvNSyYegWh3k7DRsv7kga6TfCSgS7xbmGuoCYihMnDLnj6SuV9R57rBdyq5PC7qgJyyaovLz6ewZH",
  "key11": "3afvgv3wpKt89tHpwNwn95H3nVuzmFF2X6JvrPh5EEgaG2g8LzUwXiPuMivKJgWt52wjjc1CHhFui8GLtpBihmYA",
  "key12": "ZdM9EjPrcFZeKczvdMNZbrNxeELcSM6USmXsAiYxCN9nTXezVDXS325A5FVXZU65XNABFu9yym4g6ooS42Gnhey",
  "key13": "5E9bKuQrU9p6M621MENV59Nznu3gHfKzXjGE1UAN7vbaAFkVPpJ7ZVPrUN4ggiLeXwDfUtUwL8LLwGHxsyhQ5zEk",
  "key14": "3jwc6u3zBB3w5QsqeWUboHGoQwDDJXAHyKsxuNN8ECgXEqGLfTxFqQps2yYyozJ1VGtmEaz881PV48tTUUmsmkTV",
  "key15": "4Mi6fL2cAt8yjoSQvwBCd96bj8LgM6af6Ub29RAweBc51cezdWJhyGVF1SvBFSTKPiRCHTSBovm6LWRsyYr7mBYd",
  "key16": "4MenJPwKFeoo94dVgyGymtdZ12LPzGxihBXPKR4r8dwtaDsVuZAneK7P24AmB4HF4HRuAUE5MUM6dAXhGD1FUFNF",
  "key17": "5g6a2uCvVznnUgjwyYQnodmL1dGRQRvLvznJy1EPiuWPbcA4ibZSmhPoetjJAuBu5xyHjWiimXBCMuQxY7jY8dN4",
  "key18": "5DC7ZPBkwWa1qmFVvrdWFv5cXpHij2kyVkJmfaoj8wkQkSd7M7viiZMDi8ziZU7zt114KirdGe2FVrSWM9JpijY4",
  "key19": "2bbgzsJRNCZA6oQhTU8NkPBqnWMj2rvJqyQ75w6mFust4626TJxp456f6QcsnTpL7EdGWhEAe9qtamuZ7sj6QRxQ",
  "key20": "WDqNBENG3Butnhx5R6UD8CmknmUKPJkTifBk1PeaqT62otnHfdgddee3gMwXX1zuBVJQrBQp9xjddG3XRV2kRhx",
  "key21": "673ioRdeTmfbkFGMQgX64jQJQtJEbJXYPMruYtBBpDBMYM6h4FCmv183RDc1nnjFiiQVvDGSdQ5sJym442HXKsgd",
  "key22": "3hZ9tsxwQB3iSJ4VBQb8et5Y1Qhg8PSASyn3B3QEp9N4ihVFxGS29z9XkYgZrZjT7Jcsu6YDk3N2mnEPkdU9fWHW",
  "key23": "42UELYcDe4eBiAWmePdN2vWxnE6MkkwMogeCH36wcFn8xVAkE7buPexxcVAcZKhJ8MyUNn9rZQPyaq3k1Us7YyWP",
  "key24": "JEZcbM4mqtzzskst96MRnXXF5ckZWv1MQKq382JjwkGK5BDoqhespuhwfaFUrv2LEGgm7tEezjBzzvVSG283b9z",
  "key25": "5YtZjsA1b1hA9qtonegt3qWcBtfeQ2SGrRy7Gq2P18ooAo3izZBdKorMH8z8yA4Pjpjrr95gZqig8WVeH1W1bwiK",
  "key26": "4Tpa4918JrhNYiYiwwMzzLrPJdYrgpGnKRN52zfXEqUJ9z8S31h23kNvrHFLPe9frFfPzir2515NqJLs6KK9LnLm",
  "key27": "3uYtTHWpjcTkrAmDEtnRn53k4FP7vhs9bL6PW6fNVEnvH5KM5UjVbkpED7XRYXmSAgDCZbfK3c8uR4UGRDZoysV7",
  "key28": "5xaYbqnv3ETXLCfsbuU4x6CYCnutZpm5fiGBrdJpsF8YqDnQJLtbT5vzP71FGHEqqKq1CUibszKXniQVZdSM5MuV",
  "key29": "2a7NptjxZbQy1js8mVY2BuyJJwedvpUbNzZwD4AKEe5fGptH8DE4F1Nnk7nCi1Rt6m9jU4g2gsHzSisweBbin2qP",
  "key30": "5VaXgChCSEeAoSoY2GZFGjqhTBpdPA9DFZ871QgGdvUSCs7qrhggLxL7yep4xHUTaQEqrFrcPXp9jVhTvScErweB",
  "key31": "3Z7VaYLcXkLQiefxY7fNSrX329qArSSfGXkvN9rLSh8gu7BuEEPSPZiCoMFJzZnz13VYKF3q1Phz8v8j2GeM4E3a",
  "key32": "3PrYUtkRUTdUfxXDNZpqYcevEGg2Cp4Qp2yajMzS1cDgmRGqe1R1trMpzCp3Loc5TM8DPuaK2mb6jyQKQWAfZZuy",
  "key33": "3Tpx3TZRHeekyo8cqmnNoKu1CK7vFrdGp16Q98ZFuek47M7t9LQkfqb1ANrdGrv6b6FFg48qcXdBSVZhRjRPqfRc",
  "key34": "3YyyWRqjBr59AmmZNNk5mazB4wCyzNkSEwKTegKYDvdiGqTE19pf72nbhyW8NYXrhvABWzTCnsrCamsKjFBbdg8S",
  "key35": "2PNbNbRatfa48XqhmGwZudWLtptRABUZKXt4Vvy7g58VaPRLNG8azdksKgMmR2NokUsjx1z5i3SifEDg6kw7pwGX",
  "key36": "5HYemfvEPcaUwxfi1pXTwbXhepTrvE4sYyN5s4eGGPuvuJe96Y2s2J4TwLMgZNrUPxULBbLosojfTXgzfKdpJ2DQ",
  "key37": "3Y6FffCZVwJBRWfyUh5b5Li8V1xXiMBZDGeWPKQpP74x3N72VdVQCJZJwt3y7Ju7W4cjYFEahukT6WmBGaCajXxc",
  "key38": "5z8RsPBj9fosrauH9F8QvKrDd843uq5eQ7s91EhcQiv4NMXm3o7ViwyzMH4tD1eJthvqjnVvwuVfsyQCLHBjQyqL",
  "key39": "3q1uPk3NuVtCxTRNTtbGrFUpUWWUyGX2JvbBReZ5kE9ZsGBvZgyiVaGh6U1FqeMvn8PUCS26bDHbSPSzghfx6VWE",
  "key40": "2qCp91fkmXgN45n62ZRNNFzGzJteGKDPCRFuGmFiwhuATJyBm8BzphppGA7mJZQCqn9GhEQMkJ2DuNWQu1RrFu8x",
  "key41": "xAoiV469h6ZZCUi65uPTTyA1TjTEQQ2jNnPf9E5wvwxe7WSUKvvLHp53NZfB33HWqZp89tTVpp5G77RbugPKD7t",
  "key42": "5kJpm98KfwsgGW5SBJ1o2J6jitVBVvVhWiGGXXPt3q7AsTZ8ztaSLj66YVHGAtXcnTUP9Gez7qhnYTP1pVHwA6uE",
  "key43": "2iSsKbVp1uuiu4bp14TraHKMUSxES6tmmnQWQPk8zBt3Nc7BbKaiHGWovPjE4MR4Eir4aicx4VFwPKc3t8HQsGp4",
  "key44": "KwCreZSm9Rt6FvMiaY8R4CUAepufRdcqRZw4NPM27pKcR4BTgAjVouvCtsEhbgzMbqiMAZch6gQGfjauiJTatQP",
  "key45": "6vHTrAqwxThZGMSddfTWRGP5quhFqzdfEXFw8kknmYbkntAFYNBbehhNtq1vU5ZVfEA2WRhRXWzMZSxgy7hyADj"
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
