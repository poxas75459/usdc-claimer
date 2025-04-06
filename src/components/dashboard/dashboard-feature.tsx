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
    "2qjYCZPDkJPzZvENcaEKHPQcfbs3iDVq3fbo6A1cuLj1ZMsBFBvuQu3vCZ4xqitLWz6qjCTyH6mv4obR912P773n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBAiHehyNgKHnJcWV1oCRhvE2u4ZMQ3ucT2kVtJyWzNgmaxTzKZu66VRUJAFtCBK5ANB7HjUjF7agSqFmMPBFAe",
  "key1": "3WM87wTWmezCATJFrKykFxagf9mQdYKbLjsN9TLy37ebkKWZb6nYLwpsBf35fDy2stQ3HjFfqXv8wpzNxxqKKMsA",
  "key2": "33q7uY28E3sBUftmyDBiLcrACU9HjhYhq1imNFt16c9C22jEX4LpxhB1ra5N3KGeZMDe6wCg9DUtUJFgx8yZtVEN",
  "key3": "4R5MHMrhUhAgUh6wtCbWnjiaFcDbfhaxE4nTt5f6vEuCeD679T4MdDH1Lu6yQtLVheoQSB5CosoKMF36dC6VwPeN",
  "key4": "4DYGtbzjF84UMxVKTTJYoHaiq4tGZmXTwguBHxZ9EmJP1AiN86wtoCKoKCKAXj7VrPgpiGcdPdn5ZsgRJV526Gzm",
  "key5": "3qgwJ6UbjTkCn6oxyjw8uFfH22DGrfGYN7C2up98netyv47pFvE9M83PsN8oLGbfc9scgABvKp1BiudwFaQnQd5F",
  "key6": "2mnVREc45bh6mWBkWXx5npAe69GNTMexo5eg2Rfh3YvK9KeN3DnYScegFH3mTJzTstDQkGKpFBcBLgUCxkNZrskH",
  "key7": "54zs4Uu7UA6eeeDutjr15X5hrPFReNAZMguHrmGCZYQAfHbNwN8tkgQfBdD5V99CHVyy34hdNucJqk6vedsizmYu",
  "key8": "3gP1pbihwoVY8TdJnwVAh3JmEghry4HWJ3qjfbXB1kpCKqJYGus4oi5R26JQP75WJbyW3qjw3xrVjnPU9dkbAEZe",
  "key9": "4WMK5UGtgU6sFySGxnjWDB6T9GU83R4tNCccy9vKYbvh4Y61zJ2XwUwjjsG12WBWaxgUxc3gaX4Ztc8NfNCQQF3i",
  "key10": "2rSkNcJfhPKdVXbRET3Ww433e8VYZwRdsZXYwHQENpn2NSuLqwLL1Bk3RHHNcyyzUvvz1hNTmj1xajVwe5sTsTaT",
  "key11": "4p2VdSzcgPSRcQ4n9k8FWgqCjfyC5CgZhVyauKUgVBtYwk98MpmsadmMNzfJ6Lb66vRrYNB28w964JSjazpSmUVJ",
  "key12": "2hU59Pj2EDpvYDddQSKE4vTcJbVMCGRH7zJPb5MkgUFzCEpL3eq6sdkTsr4WGPj1sj3R92jRcPFVB36bp2ThDRSC",
  "key13": "4pz2v3J6eVGrE1fR1E5eRw4zJagrj5ctfqkc7oSxWMRD4Ff896GbQzdZijMm4jfcqY2XSgvnfQ3ijobgYP5MMvYA",
  "key14": "31S9Eh3S4zcYLPccVWFHVEcMiWsMcKXePWiy9RaWUrM1PSsa2bGkvfpBuHNoYCV3numgjzqYyC5Ju6NNTGzVvTo6",
  "key15": "5bbTqiT9Jx9XWvMjNkDYhpeZCTdximKxa6zvYdDVPtwyBCpW2h24TZR9wJP4o8tceAfdbud8pkAKhspvwtY3kT69",
  "key16": "nsJWejo961KxN6cNJhRaH1GUgYjvskwqCs7in8uQ4PKzy5N1yaaTnwocEGgeUsVzWcmJ4QHGdJCRot2hkVDF18u",
  "key17": "61J14k7SsAVdkmXqHZ2YAWTbwsVQo8ZteM9cHVGtkmoRDmFzwMAUVtzTEzkR4sNtcNK5H18MrFGua61p3k7hsvjJ",
  "key18": "2BFbYSPQsmzaTKNrMpSE5vsqGkQFq3ajcxHE4TXj4J4jrFpQD2oQUsKEkk1Zf13gcLABcwQbpDPgbuuYSf6tiRmN",
  "key19": "5Z5oKe6AWyT2p8XB7yU1uN2u1hXxt6PTpUrqX5HyPJVBchz58TiQcUaKSMT59HheA2P5JrXajvkRjFB8LnqQqSk3",
  "key20": "2eK62kU9CeBAffPrGxQbRjsidbHbmFRGRrWt6ugZMXP3WUKP2urB6tspf41cnzDdmG7qvXJDqzARdk6JbmaChSgk",
  "key21": "51j1rJo9Sf24yYHhErNJGyASTR6tjkUisYiPgxpQxkLwnV5bEdQfDACmpZRkU4ejftcs52xfwSYeVFKL1MvejrRe",
  "key22": "2HbYGgySwvCYjR5JLp2727od8X3t7WsgjwiC6sYFTWDtPctT1CiZsVU9VuwoF1A6nxKUCB1iixkW7k1Sozn9nCRJ",
  "key23": "5azMK7TFaSbrDYdFgi1YNRqPJiGMpGt8bQVjSpKiQssB4vpWEX3URuai9kPLfH6LkkDxUW8WGzyy79cJFr5Dzxo4",
  "key24": "63dU2wx951BiWDb9r7NVKPTmuwXd8UTZzGzhj6cLPqAPkdKTAoTgxcDC7A3AMorsScdcfrSiMJgBxiTPKGXyVRU3",
  "key25": "F3zZB2tPxGwGnYscGjchMz14RTrhaY8qF9TXt3JrWerkU6SLQCMUaBkt1f6DZZPgoUHdgC5Vy1c4dq7fp44VGe9",
  "key26": "2TmNUgdtRQA4Podx5tNektam2b4JTbfe8jtEKJEv1RibPMuEv93w9eAE3iij8YuqAxT2AR1BR5hvhgEzLN1gCoQ7",
  "key27": "3MiEE5Fm2E4ugfUnBpkvtqbYwTUUTbUuRteu4a5dkcFPnR6vxcCjxtBx52cBHFHQ1dj1dGAJFGhaVVzkGbGHFFpf"
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
