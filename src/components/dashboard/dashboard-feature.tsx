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
    "pTubnvZVttvLq6Xv2uKw1qhkuzhQKJCoi8x3EFveCfEnbct2tsND4fHXrWqfM1X3yQnHEECUonT4eaVznSpxNub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fC9sJQnNPuBDeWe2z17wRA44XTC2KofstJW1dLya58Ncxcc96FUWSya8EbTzF99C8B6wU8uMLjft52A8VqHurj8",
  "key1": "2FyKRkP2Y12uFQFbK6QBMQwv3xdNPCGSoEnCsQWM4UyjaPiR6fFmb1kV2gz2pRTJgncRhJE4uekktcXFqWioajCS",
  "key2": "2cwGbtXuVh1p9AK5MBhDG39yNJp1Z8gJbVaAQuoN6n6zdy3PWbUbAyCUa2QryGY7KnLEQog27Q7w5JSP8yrCNV9G",
  "key3": "4Xpwd4FuN9dkrx62reeknKJL5vRSgn2cBF4UD16fN6cLMTj7sVn5wT5ufJiNVXqdczSGqC1z193g38T32oci3jAv",
  "key4": "43BaCZy4c8TaSXnDpDxpdmZT9Sd2ae1qNVSf5RpyjDTFtqpCWbQ3NQHYtP4BEUanbbVDX4vZ9pSHpajrHZJ8sQ32",
  "key5": "4qQqS8b1Bqj6t41sqV7zLzS9njKii8ZuCUY7LVvEgfUiQKb2bnJFXQFKC9sr4BgFbGeYgNbmeT5f41sF6fRDXaXj",
  "key6": "5a45jmM9Lkqy2DpRXi2sHKC1AUbuY49CMQH2gUpFKUJMZbKgtcSNdc8YKGpBZNofMygpxJiVADZErHjPfyzcmbWZ",
  "key7": "2dnrx9asMRcJkjZDt9NdbAc9YngXGGG2p5eejQLsMW9tu4XEsLpAzMHNvwgPApzXvQ88iZJewTBqjgCw18SawhLq",
  "key8": "WZTiYMRbNNfGqjUKwbM8z9hmu8oxuXYKsmhjVxBrp993zcDAKbceANiTUw1zJfbrP5tVyeXiL7n5uQm7iXfJrP5",
  "key9": "xYrBzrzD9Afh9qnNQwVTj64P5hb62nphjkSJg2vdK4XvuwQhYkypjHMprGkSLdFW8HQ8So6XTi4eGWPExiREb2z",
  "key10": "4aJc3Vmb788P8omy2cec46zMvP9yfBZ6MBRNBQEpGjrE1NoyrKZePwyjtFtrqaHCHbbYYvsguu5odZzu5X5Wdm2v",
  "key11": "R1U6Kvh3sp5wPNnnBQLeKNcpGJ6sGyHWZjia4jsu1mCXRvUfm3YHWB5n9kWSzp8B8jBQM1HofFvRFKEfQ6iRz43",
  "key12": "2GJg4i1LJjHapYGevAAcR3aaMr3Ygdhqig5fNw5ixGBy8UzKkkcmWWXJJFuHGjgj9dDjPu6Luu3K2cquDiiZXMMH",
  "key13": "dSWuqDe78J9WWyUTSet7MnQcjH4MYytstt68U9zqzZivCmateiMtzN5eqt5h95dvJed1cppQLucdq4XTomwMLjm",
  "key14": "2PTXYbMBKX12PYx4KD8QjhhcP6e9rPRb2C4xScA3EvHJWusDGrenekToVdQcxnZ3o9nRnKihNcQSK1KqP229ZXeh",
  "key15": "3pPPwYUZDrmKbtDVdPgDp7kXHqf2iYoKBNhBTuxREfo3JrfbcSPDoocdmPhJrduEEkVnoURZtXSKQ3HwcZkgHFrp",
  "key16": "5zzoTp86dGk2AXX8i1PsHMAD6zPA2Tx9FsRRDtRwDNgxLKJCX7DowJYoocxaX6aL1h7fNArhGJa4GZUSWXQAAKdb",
  "key17": "4A6GFnWms7DZ2UiRXiz2B9tFrYCsvpkt6QaqjyyytHReLtRuCy1cC4AVeybUvHt8tdSNECcqASVSrNgphNBirtKR",
  "key18": "4GdLqHq64mX6JdxpBnfuPm4LwUUkvTvqMUg1YQb5ffUNnHQb5RLyaKYbkr4B1dQi186bQmRCoGvT6jccZfiR1ZCJ",
  "key19": "haVVRkfVF1znYPDNmCiC4qLud93vngQVPrGeSikZwp9PnY5viacEZw2vfr7GET8Y5aYFa26WZQ2Y2iFr4ZY9RTT",
  "key20": "dCsKBwryPat77ve1Bv3YpShAXzFJJHfqP2TSBv5ryA5yWo2SDJPs1gUd731N7wSfBt4C6ZMt1Vfs1ubfHy2AQqK",
  "key21": "5W9m6Z4AqXtnaQRdpMNVHADgfGCKToEhTggP8dJER5Pn3To5yrg3UjMa6AX8k8CXfgC8Bk6LhBwK491cusCoeaoN",
  "key22": "4yahpCxyYMAWYV4iVnspE4aL1maC58T78H4VsHJwVyTGzwRWoGGykhsTyq9wNSozZyBuY4E7c2f94RiEHmeq71an",
  "key23": "bFA8DHJBrQQggnZb9CU4m6oPf4WNnjW5xfuY6usS39hEWnjm8gagpcGd6aA4R66LR21CxKdaECF17ncEJocij1R",
  "key24": "5hcd6dKNdwniYtT5YDjirC5S5FpqbbjJM1fPhkYJt7G91paHn9EWqrMC45V886M8f5CTcJXRjKwkCGEY6xNxDYfV",
  "key25": "5w6KPUqdGpG5cSbofVhFA97nh3tSs1dYDairNq9XtHgh2Fwxwu332WSHhwsecPPG1oeVyRkXNSg5y5zC1J2xaFZ6"
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
