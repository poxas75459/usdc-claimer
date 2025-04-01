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
    "48sMMCfXNN1kqUYRPGhEpV85vdEDiRmHELEtfDzfbJniufiieDgDwdbi9S2X2n9om32gjq5kB7vQ7rshsJdVuyyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4wsAyqXh87XAp6K2jG8nDu2t71iCxyLnc1Vp2M2JSPn4gw8dn4pCxMKkVi5dM32i4RD1fHVKMnNjaoyTp1uPmg",
  "key1": "2UYawxM9uEgA9oMbiPKcyPdnBqqHYprRurbHzCVgUXmBNHzvZFiW8ZpsKnaE5SVNmTEbwFCJdf6UFpuSMiF9efAg",
  "key2": "5fySCHZ7QrH3Dx4JEM3Ydxqzb4nfcmtubkADwLMvfLTwRKLFfLknWjtVrsV5vXMHVbeNV1NKS9eKTLuKJja2GhrN",
  "key3": "2pZJtx4pVym6k3wibcn5aDjMVNWeKvqDxQhyHzyC3dvXRHupgYppkhMHSpEk5irGjYDBq6roigYUUkwpKLQbeMm3",
  "key4": "3Vkc5f1CXYtLxbdLTaeZ67Ev7pgofLE9HWgpSTWZDckGe4jQoqxNGoFFrkiwcgSp1j4mnNP7LLUT1sjXKMBLWUQG",
  "key5": "3tesoCzYUPQ5t1UdhcVqGSC77CRcD5Z2q6tDc19EeF4d2SVESzNCG2y2Vfzr6Vrd4azVYbTnLpSUz62xmv3WBp6e",
  "key6": "3np1m2tmGZrcr6pGiutQC29gmZgFK832PVZpwzyBqjdNUUDcD4AzvjqC4yZrd9deSxiuuZYh38hG2Ta7Adnvb6uz",
  "key7": "5CiF4qCepHuimaXuXxJ1uKPoR14QFZkRfgPfUjuyWnmJM9uE81atFqRFe2Db6F1aaRyuTdnP3SjzWtr1znpDmbKU",
  "key8": "51evHHYAivjn6tcv5vGnvo2vk2vqCxb2STvg5CT4bzBhDAxhqEr2aHyUfS49f4UJ2gMaf1TfKvYJLqkyzG2JTHZK",
  "key9": "25qWhFketjL7G2HFkJsPqyrDUXLua1RipYdXd5P4hruPTqeQfBhL6QvHWjcBACSz44s7YWa6oHC5VvuvnxBnJefm",
  "key10": "3dkEuH3uTWSns1PnBr3S6xLEnRoqonAf4gYhuupWW88kW1hEZmspoZpWwMRMZZ5pafJ4FNsNDvMJfo8Fjaiz1zyc",
  "key11": "vHTZbshtMzMRVZXZmyig2CrBY8dYWRSFT9EsKPTs7qJSjfGnfN2sCUAAVErHMejm3yB4RiM9P2S8yAJ4TTCX5Yf",
  "key12": "384GVxdE3BmvfFGhZJWZyvcidSBiBdQW8RBFFHg2C29agGnXYdhyvUKLzTe1X7yoLzVme2vFM8ZrM7i9oy26EpFZ",
  "key13": "RKnFkVVqLgj8jKTFdacebFcFJnqW2TkKC7xM2Jwnbb1369trS6R9CfmjF6jA1TzzMkTXtSaus6Mnfss96wghiQk",
  "key14": "8VcSsSRewcQFR8d1ed4qz5UDAwoo958CZHwfJ6YSDNquwbS1id2SHQY3UeNpr4s4rstj2iiHjRXR8rHywxzg6Tv",
  "key15": "Wno5vLafzuREXESJH8HxTvmaAdpR7JprzLzpeEoMQZptrodqyRAn72mxXZ83KiUqSdw9g2pY9BAsUsEtVcSDFYR",
  "key16": "54ahU82qJC1GnHk6zSFucJ9EkxNYvAVnR3sUz3W8LpRcH55uK1YSk2TT33FpgLRwKpCL3esMp6kqAFJdxU8ukihi",
  "key17": "LVdH78iZRstx4xsyUAnEHxxZ7PZAoVSVopz4nB9gzDfiUkDbWV2t18YYYrPjfzDL3Hyv1mRfb6D1VLzqC4ypVe2",
  "key18": "7emKRGpfEZhX9WVZADpfoxBzEjPUNAcmN1sZuYVWXJxUvARmLaow4AMVASgGufJjgyn4QaWbidEhMQ9ut84TNih",
  "key19": "54aSuvVo1yTvHf9U9gaQmPh4nB48TzajiGnczrs13QevLAbAN7csSMqYVjUyCYWBTscxgGuMDEHx1Wkswo7CgBGj",
  "key20": "4wo9vbeEtUgQ7dQdYCDuTsXmihzxKUFmrK2pBpvSmnbKBYvpQnmqWEayLpQhhvLf5ZyEzeSCSewdLLGMgEzX7VkU",
  "key21": "5eqmk9dkVF2WkZdTJc9TyTdLgwwXYAKEBkQwcygvfX49Vub7AQwBNG5RVcgorh8xFxcabDDaA1JhXuCjnuwgbSyw",
  "key22": "34HqKoLdQ9wRHKsRaXRtCNDF2oVgKesU3zsqA3mPuThTzwcKZF41fpVK3r2gPiV56K76sNH7JRDnCMPz2ZezM5c6",
  "key23": "3ezLHHw9G5x96FYBq5AwGubA7k9MW8Sjm9AemvJd6nLhoBDQddwjLUTPmAScwKYBNA2szqWzYats8CnwxxauTdKD",
  "key24": "4X874MpDiJfcLd4Hm8ePzRYPo28ssByF9vutzSKFBHCRJvuMCt3syNH7zf1hP2WianY1nhPeKPAK5kUm5EtAf4Ep",
  "key25": "3uqXQ8dKp3NmHGQ7k4biw2X3ENwinWV2mpPHuauE4raneGk5ai9mRxrdr2rjukHh3yqNnGRsGLD4kVuJ6RTkX59G",
  "key26": "3jPicCgNHGtbt6UCJfhuHsXuAa3P44BLJzLxvexBVEYkejxhnFWD6K3iAWiU5ejV1xbPnvb44Ze4qeLR1E9g2hLG"
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
