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
    "4nVkbPQ6sfVtAQ6txVkZkFnv8fajF3EYCp11YqYGQt4ATpoJibXcs2Uwyju8Z1yMvBb6kH2RdgBGJvJhdS7JM8JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBnqfH8eBs5ruQE4gr1iRZU417yWqAbkgQuWwDQ2UjXAK75GzkHLJUvQTNUnLcp64cKm2qAS8Eahi6fXUE9CKw5",
  "key1": "4dV5EseawMaEXJy9wBC69SsdxE1bYa7RD3GmSzpnX387SKqxaSuY7Q9HDXSwDboxqZyRFukaEVuepEjfZDisSbNu",
  "key2": "24CiipzBriJ8BBQUPETgQZk2vdoT2ScyW9mC8ccGcHL54eX2zzbGkxAZ1B1yCrfKfrTu6ZsFZnH2fcJQ53faPc1k",
  "key3": "5roUZ6tY9cywFP2EaPQHbsFKVrtMFn9GkrMpaQGURLPcLVYKMnmtvoKzXaiGDBunjKvL7REqE3BfjobzFvZZVN16",
  "key4": "5h6fCM1qghWbycAVSDCSaWZmWWVXruamtaKzy958oDXDyFzZpdmXiCjTJagGyS8ipE7madPWZeNa7zh4BDD2HMna",
  "key5": "o3NCH4a4GxS3chTfdzLwsRcF18JPERdNT1oL3Ee7XXHRmMwBQz5NBRA9vKBHH8HrArYFUDnLKgYG1i2kiG2cASs",
  "key6": "3AcFcGQkbpiC9bG37GFeYyYg8zuDzwPBnQcyignnsPvqqf68wrBnAmfTDSTLRqVQKRVhmRNhg3Bed5gP1uMLA7DZ",
  "key7": "c69kBGfEtjonz1PLwqpahNz77XEwmjayFeSUwG3VegkyQJyoSRdy5FWEwnw4Pq7tzD2oju3DQieCsdSRHGCK3KW",
  "key8": "3Pw47t2z6z51Wr8QxhKP8mndLYKgSzwo2h22mWZ6hTD1ZYN5FHvRexVyEqtWrhoavpTUcxeAuC2ZCVzNxVhixgjg",
  "key9": "67bJkpzaQQ6Pw5R6gazfC7AWRizpCqBGUCm5ZmuboGJgEDmZokNqiz3EH3rQAv1nCgTUp5chJReSaTWBeoo7dsC",
  "key10": "cCAU9jGWq3zhEseSeey5u49N4iUaVMDywCn535w1Lvw1EEfF4p4xvgXke39p1ThxaFzuyQzBPFinDLah5di4QMi",
  "key11": "2VZhLFN2TLwsFgBH5jdjxGWLabHaVnZkYck7VU8uEqMgdRWEydxpxafoZfaH7Ktcw1tsVi57d7uKv3btUKGxXhUG",
  "key12": "5FcUvVkLJ4rYaCAWKwNMvmpmfqUKX5oedtsQ5CW5HLCJy9zodDYfjnKb5zQwAaAVaHvL2nDkymR88FSG6U25JCpT",
  "key13": "5upJ2vSKyHk1HvNAHaJcqW2JDGiQv5soHXbyDVKesD4gTrkHbAi86PEMKTpN1jZjJXLj7DGMXkP9SJmEYBNNgFVU",
  "key14": "w2SyhiYdgnFfK5wGL3chjZXFeib6J4uYmMWZzrgAR7QjTqG6h2w8WycfJfMXf1XPxXYSwmgcSZ9p2AAAQLkUEeq",
  "key15": "wrAYcjfJoSmNUUQVqgg5FfWsRbKkp6MXFr836jXo5heRdF4161mHDhjXz918nJM41fCzb5dwHNY46SiTyyTdtrD",
  "key16": "5owQVjSkeK2ieBFggAiPXdoDY3KtVaVN3CSbbeA5dBsn6BsDLQ8593LGDUT4F5d7NeKQW1opoSq3GcHtkSrQuPh8",
  "key17": "4tWvWRKdnmnD7DrThhcjLmvDq4Q7fczb7EXXQmhtoTjYFKGwQsiGMTTq3orWsRha71pRbCqFs9CDsppUkRrm9WHZ",
  "key18": "4fgmPyU37cCNuqWReUJgzPS1CjB4wGueoNq9FHQpgHiTpn6LjuEutVXt2P32R7Egdta2tzwjEqHcaKU84gU1VjZz",
  "key19": "5e8wehSY9Ev6m5fWZPnkYRCe5cUfvhoKSjKtQW7a7kfdUTjkjTdp7Afem87UsoQK7rTQ5XMLb1X5AnZzoUumkyYE",
  "key20": "2VmLg3R9DDbKqZZnrMf8F9JvGd1jqjHgr1hTUbNtzWBz63gxL9WRpaNrNtRbcTgbAcpVHZAFUH7XeDQ13M9Xqyk",
  "key21": "2wLLwHzZ8QdQdvUae7q1DmazXKefT8T1bQmWN62e2iGCWe2YtttR2ukmpMGQmfUoABDJHjWMu1k1iG4Lx2hWi3KA",
  "key22": "5PB5EAKWdDKUHKNrdukaqpxQrrfupusKm1PdE7xX1pxtW8DhevSgEL7voWRbSgi2HRaFeHeVyddofXQUWrSq4yBA",
  "key23": "4qNJPsmDt9ZVWmA2EEeEKUawagv6QrdJfMVgXWYzZ22nqkshoSGEUjufm1MuXuAy3xbcHXMKTAZ5mMCWdzJVrWtY",
  "key24": "4n3qLTNTnJPAoZJZoybf8DxkNfkhHhcMJJLhc8PXXahyPCSAfqd1dCNB2ZWJHQLyXgeYTdQhwjG9rYjVKChJ4yPE",
  "key25": "4CwvSCuxy5VLcJb69EpCzsUNEWG9HwxpkS3V9hAtgGfisF8y4pmZtvtvAFx1qRbtU3onUg9c3uJvqQWpw3uy4HYp",
  "key26": "51Q8cTjsXcNGKQhoh7rJjZ4wz2jvJjA8RSMiXhA3p4YKF57xVNzPvz3MzDc3yUbCKmi9tMEKhK4M5GTmiaGKJBXr",
  "key27": "2VaXRu6m3y4xq3t5YeQ9kFaJeoAQSjRqgKj3HLEFvrcqygaE8EVnKzH5dDstjJytHsHxds7z4PTMoL1p8asg35zD",
  "key28": "3KawnXN1iLHKgpbbiWbDoRWPf3yKvNfEG79r8wxKzoaCkRENNbaeZ5t3KaQnNEtX1NyyMpsSswhBMbGDhe26KQUL",
  "key29": "3AHoodmhz7HxhVNiFVfMDxmtrT2rQZSASRcuuccF2v4ecNeY2PfVitaCwkMCovvU2DGGLXtTAXxMMZUveBRxo9Nt",
  "key30": "5Yb9iWwKeKDcvn27h5Wy8t4wpTmtngvsBvRXADbXHEFSmQQE4CfBTiEUy2ddx5vykMbzSVbDYJ7XYL7mR8RZsR7V",
  "key31": "4z5PKVPje5hUH9f5GKc62GFYX4Q6cTBEfG4QU3BW6YxYpLsLVnL5anBDkstjUBEu5aijQ6wc8HSxdur7VzBBVN63",
  "key32": "4acLqqMsw9qV38qPoNuos3gLV6axPkRzWKfoAXr7dFUCwoP4Qz5BdhNbavhiTbypbbjdxcWjMcbTM4JDrmonmyb9",
  "key33": "4UEVc46hGNTeSDLknjHEU5rKufKNupLbLow4gc585gpVZxLimLSf7vvUEPk5ATaZNUKVjveoUvaUZPKU9rV6YZkP",
  "key34": "4tmNjJrXLAAxZPtJLpShzrv66XC3K6hjEPYZbkWRBqDZuS8HRBN8ABLZderapPYj9JZ823HwMy3U3Qt7mKH2HKAw",
  "key35": "3CxBEmVSDt4SJsD5hp52SDrxFT7jHUP3NncbC4qJWojv52HJPxv3eZ3Gse2KjfXSRgQo6ipLTZqSttY1hRLambwZ",
  "key36": "5eUx3c8vC7Pqk8k8ZnovKMo3y2v7PDF9xSdqYhhUKu2hGqub5WZwQAp45SnZqhMZ9vgzRpZ9ye8aFChBj7KAKPii",
  "key37": "3dsU1PUy3PXxXQv36vvtxe7idSydoWD1ub9H92hSrWRjFG8hDyrgLUcZPnoCrWisXphHYmmntGkSzyn8xXh5qiZE",
  "key38": "3b28epkgNaX2Wvv4z2pju5FvqGBAMSMckThSfqSRrKZmmASetqPjpvc9zEn1ZwmVqCvxPdpEobBKeems3yWUJRBW"
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
