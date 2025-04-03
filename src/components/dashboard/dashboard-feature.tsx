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
    "3iQUcmwy5gje45t9nxShiHi8xY2dqieRZu9ShgsY7111r7vSXaLak5QPrqYDYXZTZc66CoJ43d227s1Y82z9tt9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVot2FBcYCnhPjCiyEXvBQmRE3TUDB2w7qaoCpNWEpeToxSYE1xGcGFVZnWHrY5dxs3eLvEk26Kv81rvQD4v5x3",
  "key1": "4zjPDTjV6bxpFmUhvhmBNdcFfBtH3PE1wrCkoKVgUEFCJCtk5qJ13CqUfMiboXrsN5ATsfJkDs9pdVEth3sa57NM",
  "key2": "4LpZFLwaf2kYRHdDvrY7eQ4bPi8UubgNrHim8f5rCnzu5W8RPiQ2uxnTPTk9rT2GCSneTencNfyJ2Dxj1Dx5MV77",
  "key3": "363PL5vjgpAP264L4m1txrYuNCgPTgxjUp3UHTb4WGjEbmHjprT8CpWJeXqYSTwKSyTT1HyXy3expV7Gv4J5swGa",
  "key4": "2KjDRgHLP41zfhKaa5vYRRJhCUK4anJJr1pWkmHM1nCdneEtREM7T3RiNppwBfAKvBTBRwE8emdZwHZE6Rodo65E",
  "key5": "3RPVJJEeeeRnVo3VNwiKo2rqUmtybM4ydhnricrhTH1UP5a9GN9ZmGwtv8h9aHnAWoSh1LkPF6we5pMNZMAwnHXc",
  "key6": "4AXA2n2jnqqpMh6Tgu3CwDjVKMbSq4LZQ4LqJy6PnU3zMjuzYKwcUhw5Yhk9g2YxTY332G3276dsmJ71pa6NxHMQ",
  "key7": "65swZsXNBxk5Uo5k3qw4cGgZT84PpLQAYraRHYdxyZqafRh8xg7vtnS2orUqV9kQcLa65PYrq4AdBdJeqtFbCPYs",
  "key8": "4Rdo1LveVFztM1daCe5oF8fT1Jb7SaKd3anvnZHnQn8SUH8J8aH79RjToKKrvmFLZKphUTfbEoh2GYq3kmaJ3fKA",
  "key9": "BLG3BV3ifM8EQeadtTeHB5nFYPkFmHjFMJ9EbBEiSCDFeqCmS8d8V2UwcNwxdmezfvx4jo6wSDZxdXEue4KMs4F",
  "key10": "2euN34aH7Y1az6bipm58LSgn7Em9qqM8FkYXvfKzeofj4EjaSQyxDeGHeYaMo3ZjpdQEN2w4PKTZt2h12iKs11Pd",
  "key11": "4BmdAYYHgPMua77KksKPx1HQckiPq3NK2UvVAu6FQrQUDkNGXPAZk472owk1eqwtZtJCjhzy9eBiGNjHpmZSM8i7",
  "key12": "3xxBzWz1ViC73kj9hS1UXujgg2L46tAVcTzJFG2APhsEnqehZ8FWWSaFrnRJx7DtnpoTfNqBvgjCrFyNkv5NsMHT",
  "key13": "5L17kF7fbnKG2VonvqofznK8DNrG48s7GYZyHdpRgf22kN27BgaGG8k9qy8iAZ11ZRfXDrqARq9s3Uttmb8N88Ux",
  "key14": "5iGfn8mChtgcvXMRc957TCKEh413ZA5PQLxd2RDomZRWcWSsTSoJvpMu2ZnhSXf4hdQ6bkZuSJdwXZrW9VH4dmgi",
  "key15": "3PhVLV1UR3ZS3Tx96qDBXkvoD6UYiUCYV12HRpbdhDtGf2BDTitHTsA2zBvqYewzx2vR4KsRZa6FzHrYDt86redQ",
  "key16": "5omkLpfFbbXd6RKNmPutLjaZMEgoAe8HR9iXAEJsPZevyasAqqLNx3T1tmi1ZNWwkQBugB2Kc3EqrqAzExF76WYc",
  "key17": "3AUxR9C28C9n6KRqe3e4cGV7LMoKeo8wyQN9m23GBxpyKvpmYdycBVwSk5QCHooSkfZfBt8qA365pN6ZFhx5AaM6",
  "key18": "2TEmJjYZhbp5191H66ifVX3KQ5TzYDvbeckxDM8hY4MAX6HGEdSj7a6sFk9QBWSzCgQu8q4wNfpp12snoua9dGiD",
  "key19": "4SS9VLSSDPGPzsD8N7gCWkM3n6pc5uoU9QKEkFKPe6goFmYQihXirqJMqm71vEbScdxRDj7Rdk8JN8iTfo5Kef7N",
  "key20": "5sc46QGae46QL9WjN11V1hNHAA41axxkfp9buMoxMFaFDkCHHPtyeBHY3ddNksvLptmoWw5cdZm8pmXwadaZx7vS",
  "key21": "4WvZYRkeMNUdinSd1h8DLsfU3hYN4eP4sT9W2frtH19Ds35aivW2QKEVcTHHiqaC9qKHbwMZ2jw1RJ3C7wW45awD",
  "key22": "5n6cs9nLt8H3tTFHgzEkpT886K5oCLYBiKpYXfDKa5uJcmJT8GcaEQ6ffB2KDmM91NuCvxSGiVaXA6eXjwVDvsGL",
  "key23": "27uLn9ryCSdjqG5GSPPT73kXn9H94788SXb7mdH5UCZhVA931j423yaSC9trKctuyvdhvQgDQnRy9sEmLjaLmRiC",
  "key24": "5K7Q2i2niMVZK3T5QUpNSy4BB1qFoG49vHqHYUtMb8ooAw9K9pbLQozwUFDSNZPHvm3qhqBTnh7e1QmEbpMgCaxt",
  "key25": "5L8Jzx124KmqFeen8ps1bBTTsg1azXfZX4JQgm4d39rf5pMNdNjjjeStWu7te5vTpp1R3Sijb4EHhDkjDduMePA4",
  "key26": "T5gtofCQnA6p1gdASgWnHYYco3VxuEAwXnMH23yo8sZxpLuoDnxu9cM3wm2om1eyCWiytE242A3EWTbe1nx5phY",
  "key27": "4ghWpDWTJuGLTcCRc5r6TLLz1uBY1HQ8a7pjJerJ27CjttNSgJmb7Ds1SMQnNh5Gjna7W382sgjQhG4CyPTx2M9w",
  "key28": "4EqEtoqvHkD4sJZKaAXqsWnyz1w9awijEy5y4pHERp9YWKRgfsoQqW2VMoGdd5TjVRfXU661WrpC7UZjtrPe69wz",
  "key29": "3WaZoCjXsAtipJwjhUDHNvS6TRSDE6PGAheza2pXPmtCW7YcwVBSS3NXyFEpCNBHFaGputR9fsQBRJZ7xsh5Y7pB",
  "key30": "i3ozPoQMVVB8pe8PePAjea354KVwxdQFc6HBDEDn8QoFoY6N7qvmWopmV9o2Deaq3eL7m9GEECafQ7npSjPri4n",
  "key31": "YZR8U1f2Xiwy1eCbm8TCcBHjkoV1h5sKoFFFydAbphrFbSEWVRcgkcGfRJiJ1nuAufGVszFSgEo65KCfogMYf8N",
  "key32": "44NMPXwSoo1wBQtsGTGdUb67dcrqag9mqZ8q1Ji47pQsEFn9hvzNVMvM6VFvhS8cng6MbqzSvdp7qmfgtYb5QuaL"
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
