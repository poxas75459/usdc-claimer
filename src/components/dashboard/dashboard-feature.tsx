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
    "24ewubxESRPnYJso8BEXHHhs1VAsCanwZKKAtVEAcZ1TQ4xiz6vTh64QQnUG6zLan97ANeersgtS86xw6Co56Ngi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Qbvuc7qnCUfCU21xt28koTvVUgkBeGDvMdTfUPvuUVaHuFneBm3hwQpNiG3sAaBd5tGjc98FyXiZBq9SXwTdNm",
  "key1": "37LWYz6mSK8asjqrL7fTvqSTnuVU4xKV9whJrZDQ5PzduFDYN9UzuLXUQkd3k3X9mFnvxzorZF12Qca5zjhBUjNb",
  "key2": "3QicAygmQbAHZEAT9Buq7AEQ28rMucjHbm4HZn8QURkx2b11Mn67uHhjtUAwghjt4JqHScPeG7EJa7KexeZ4r67j",
  "key3": "5d5ehG2rccS4jRs7RNGHMWmtG5w3iM7T1NdBqiG5f4dJhK4R1W1X6rZCwBuqPs8vBGH6GZYGxbmCqm8cYNYGLX6M",
  "key4": "4GUWWJGmt6SRQ15vhvLP1ZGHLaagHaBFTGDmrRSuHMm3qhcZLmB3FvRZYfa5aw7fWoNHEzkVDc5PbLk3MAhQCvnj",
  "key5": "5yXLHK9adCDBEjoxTA9NNwbFkWMvpVoRzpzNfa3dSbrXBL5nAnhYvc5Z4TNjpSDuZeaMwWrTLoLSDBF7i1jDEDEf",
  "key6": "2nyL3c2VuE7m4GtqX9ZvCs3yWNwgvNbL12NTnam3MwCdbn9LbyWzPN9vBimNMB1UzxFRjJQPHrMnPUSiU7ihuQx3",
  "key7": "4L3nvECB44Haonq4CDZXP5AF91JsuqKZkYyL2WUyG3HSBTGGCxb35LgxBJHGoyJBxdH6MWKWa9KP15w8SmnsbPmu",
  "key8": "5iKmgR8L1M3rgaqohTCPQjCEmaEsUxMTbDZ4sdz4u4xh83Ck7BqS7GgdhcN5hRn4VnHkjzmwB9aetdAb5MSR7ywx",
  "key9": "3oqLMgFQBsCEHh1TaiTNemaJHMZ2ce3gFuH213HTRyKe1daV42kw9Edf5M176ErztXxjKN7pw3VVziR2GJK8f5gz",
  "key10": "4i1t2SpBkQKZTR3BrX9ppG1tWMXjqgqhRCMreXJ47uygGss4sKnbydjv5HUJGgJk6BThZearQvpc1EUMAW4vhPMJ",
  "key11": "25tg1joCggT2MbMapVJ5X7rapc4jt7UbX46X1iLKqiVUQxg2P84wddb3umQz53vGZVjFZfNe9oVv8eU4ud2BDHVq",
  "key12": "5G7m57utkNLZ97AxSYcBw1f6dhd1SyG8rnekcizSPHtWLi9GMdkY4SmVMQF9z5tmz9zQsGHyPgdtYrVpyWCYHb7u",
  "key13": "5t42hnm4nw2LNQbxhR1ZgzMZoHNvsetQ3Pe9tiZxoLLKTuaygdwHpZQAQ78JDwLLLv6qKor5qfgWVAouSq1gaPEw",
  "key14": "55KyV2A59JexeEjs38hn24eoKMBkwWUGviLfkivDLv4yXTPKqMCLBvmHvD7tgfeHMxn3BnF1FKkHZMC81qAPB3bn",
  "key15": "4PdErSDnvBVaKUAquQiLXyEfs5PR3YcJZLma5KK18rcX28iYZ8RgGwLE47pkHG8Eam5bbu4ux6XbETmoy1P1NSDD",
  "key16": "4DNmcWuSTNvAtz9HUR1iXWo5U4NPRAUgya49ZUVt5hJHwoRDf65DgCJ8KrDC6rKHEbHNJpMigEG86xBwXUamgnTt",
  "key17": "2y2X9NxaQo8KFxviQgzv49rere2f4WsPMB7sVnS6DjLNJRrbiVURDWrR2Acr7XEtMRBPGAgLMG2ytnBAVn8wirdE",
  "key18": "NWEkuYnhbfpApsvx35v7nNU1jkP74AzfT11QGVaGAFmSLLMrjdis4BumP1KoXA6Q6LsukDvtW8dBD3u14JgTiwf",
  "key19": "3hRYNs3T1VtopgGySfCgY2z539whfZssM9fGVQbHJJZuEr7oMDNkUvwbqJnedRRkDusvbKCb5RJtCpAKmYBDoL9z",
  "key20": "tyjAWAmR3K8x6ASeYhGhU6mkhU412VkxnRHyVtjQvRGy3K9rq1zhqYmKWyLAkzdm8cB6c1JHyCSE6HMu2DnGRtb",
  "key21": "2im14BziaukpRD2kzbuo94hspaPdn89mFqWMwj4kEGNHoUkUT56gXJrWTimRRkjDLqic9Ty6WvrtePBYkNJLbs7X",
  "key22": "616busGq5e2zLckB6mqsdqXt6egLoyMu4godQLqwsjYHCDjoFQJhntHxKYdnGrRndBY2Dhvwa2xh78L3KGiMfFcX",
  "key23": "3Nkqx26TQJ6QkwLQ3otyW31EoogL6MgNx8TJyEX6gqrgsAJscrSt3phoEH14pcPTFoprpUaTLLN5aMGZTkgQMfWs",
  "key24": "2PmjcVwbUsaLWxuU34AxS7snWB3RNUcGcAonRE4DPFtkaukXQvXk5ssSvtTaYHirC3r5VUha8moVWXVtvKxbR8nV"
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
