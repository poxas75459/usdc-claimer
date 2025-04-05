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
    "2ZFu4FC48muS6UfgdzwRRUyGoNgufKrGy3z37XwsbVEsS3Jboxqv255kn65oPnHsLaNmtRXNutVVsFKf2D7xiCgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khMnho76JXL5sPkDuNMLKMut61sJ9CHVh2NbWX2Mtw9MRrRTKWmtP26Asob8avXA5cYkAMaVJCZzXsLbX8a5vuu",
  "key1": "2oShGr5ihYPX4hyN54zaHzTnqvWDmGkXZ35WUgyD6d5cA5LcA7zRqFmySbxU5LuKVzbxVBpWfW4RaA61jDB9M3eo",
  "key2": "3cduKuqJefioqnc9KJ8rGRCecnKnvYTPf9xvzp53pkST977svSFA64DkvdYvyWnvL4k6Myak6yTYY247PD1gjQcY",
  "key3": "4AremXsGcC9hSGwFfkULH2u9CbwJTAFaUVD5A2keg9tmtEtUUwMwP4CbExMiZsQLKxjBeCr5YPZC4aa4uCybsYfV",
  "key4": "G92qgbqSTniKpYuLD6iYZb7oivnMGDLD4bPAibGeN8o9XWEx6XGFi2vdTwp3unrDgW5RtfWEMCUJd2inFpZoyS8",
  "key5": "4PfBetiutYPe7VJjtRbbqLT61GggSHu2D8Dvpw9kbyifx4u4hSEt2uhQoWvKw7XZnmmNEFekZ55TRm2G5kSkNzvF",
  "key6": "5jk37a9mRoWMz5ytTHLkJ5Pj6zady5konZ1vdgjWRP2kqt4vpEeMwY2qgubhBPyJ65THXB8Njouo9fqC5MZqMLyx",
  "key7": "huWupUHuLokpex42jb3KHyWuBEehpg4F8fBSjaBv7V8LXm8uagf2nzGaxUfGeRGn2G2FXE4V5JQaSdVShmgFTgF",
  "key8": "5KD2tyhwQ3Rxot1TLonjbyJDn3cyi1QCYXsKuM5jVzoVXdFPGZQxPzgV6vZ3v95TCfFPz7jqT1fk3ZPggYqgBrbv",
  "key9": "2MmEFtAkcwzzSgtQt9iZNrQR3wxn9SJEpzYZ2FESGnQ1Seoz2z3xZqXSZt4n9QF8as7usuHWpXwfdS9jeoTTHJJ7",
  "key10": "4GtFS1Z5FyoKuynMTJjhYAt1CBqJY7GDT2XLG6iw7CvwukUCMeg4p5jhN5xcWSXeFUhhZu4bHzsa1d5ZPpKGJ3pV",
  "key11": "3Tgu8VrdViLpCjyvZWDg7984NWALJj19G8ABbQuFc8BceFNGhtdKAkf7H6LQjH6AC5i4Efy8yfFnsN6RYnSTQRu6",
  "key12": "1bdBZTze2WjCgvfEnSXfddcfSYvr58eDkrqHeBf8QZ6atgaZrcfDCQRBLpZboUtzLWLWpFtW2h5TMaT1h4Ry5Th",
  "key13": "3YR8nAQaBnTzV8jLvaC4DfUYZBQeyrcVpikoyDdSsKdjyq7SRmFnrJtWGV7EJRgu6cswcaTsib2V5i1jxjp7wWfP",
  "key14": "2SDFTFHYZpAyWSjiSqS9kC8AKoyjT6rfL7Un2Wko2cRhbMLWNvhNzwtd8EWGFFeKLtjzccmcLPoZBEkMSSgULwiM",
  "key15": "9oAgsTTcXYYwZDxqrSzQwggc7GhQT5zrH9cW7rYomrFQHRSG4e3BNXKAeHZ3wjLo6tq356KiBexaDLUXWFUgTeP",
  "key16": "3fH2NGnZAgmkJhTQA9g3kW3iJXkSeM1ewZ9qhnbi8iQRqU99wiqiKrdVAWP3enfTUYdvEuSF8B9oA5Bad5rFghCd",
  "key17": "2vapD6sAuwcdvEYjuzEL8pm8r9KUBzxyRH31YXj9QwgSrvMDd3N9XeJ5eosvtMccpkrbvx3FK17sebqrrHMLDj1E",
  "key18": "63VsdNdBjv6cZRprf6HhFvZNFU76Xpny4YMqmhPMk5vLsMEnRxuYmx7Lg7buhL9kQY6MZKjSCzS4vJ2DcjYgFKSs",
  "key19": "QZAfke1FK1saStm2ySBrQzJdgCmxvyoRRWKaTsFuY7ad1cdphujbWsmfbAey9SWqG2YJyRs9oS7sFAQzDRWRExX",
  "key20": "4NDWg2zNa7hApsLUxzCaGvmhjBV9Fvcd1BLpuGpoM3h9CVhKuBiaZ1AAcDzPG88S9TBJuFiEosy6Wmo5eB5JaH4L",
  "key21": "3Nw1Y5EwsWtbjzZbnU1x9Hpk6oRhKLxhPC49PtbCud4MQiLE4cpaoERU3YKDa6ifv9pMq5qVdBsqKF1gFJkbcJ9K",
  "key22": "5u1j9MoJ1VGX5jVuNukDVC5WVVTczMsNDUcJzEfrNV6h7mQWtRhwcqacCQhkLmhdudPfAUpBPryMHU8ztnRvZjg3",
  "key23": "4ftcLvAsYGF74wLYciA96oeWjZPKhVxA8uGUqZN4K2jdmPXfWrAzPS1sP73vY3uVJaT35721XbmvsUuYeRZB2vtt",
  "key24": "4YU5bvHJ372Xv9yw9fjxPaJjE2JJxao4uF9JtER26rjtoGXY3igAmj8XkoxnXcQDvKVkytUFDUwhUpPfHMFmnTcx",
  "key25": "5ARnJUvtgwt2o34oMc4HjdnWTJPqT7RKxztC9Qgo13mEuRf9q1wvuCcHJD7bz3A5gejP1RLnzz91wLbaD1heQV9Y",
  "key26": "24pFaLGsVto1qYS4LoBoqdEQ4V8aCQWYZCND3aL93965oDG8DZ4dx4jMhMWHFaVr2fJ9Xi1H4t1gKXzu5U4Huiw4"
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
