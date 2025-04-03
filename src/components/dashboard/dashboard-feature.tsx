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
    "2m3hPSLo3hRmnT7Q72YjkcVzVH399hgjx5r4f1meKLq6bPS3BhQHKRZp5J2mriMhcCPtFU8q7eUTghH1cTF8sEvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AyvYnf15JPaH1DCjj1uMcVciE7sN9tjagruYnfjcBYwDBiacgcusXXkxuT88XZdJ5cK18nPSnDYG1Rh3Uim416K",
  "key1": "W33K8mNwVZFWwtNx5MseNSxgyM7U4D2gqYyVzySHW2wMiGasH75EV1CLRPmeTbEybHBwyfpqhMTCd82rMKoopxL",
  "key2": "5xAnJxC7qRKfZAVJoXfdjYEDvxhGcnoGY9yJpPZcm2LDtouoYjsVGaXm52Yir2Cxc8eFbG5KMcd7RfTKSvNNWkN2",
  "key3": "thPyynGxzzafRghmuHscgNmyHbnXwSM3cGuj7TBYp1s5xEWSSuiKDSmvAdV5zNNQ1vSKphazAK8MBcjnaCRd3ho",
  "key4": "4uMVbL1FKYT6fbntrBzBjVFWBGszSLc1yWtXvzJ9AEnAiLe6qgi2UrZFPpBkSE6pd4WDXFtmRAAq3u4kZqGbndoJ",
  "key5": "4DVNXu1z7nGNUyExUGhdM36xqywGhVG9SDiYCaE1Kow2scLnwatuPn4cVZRnZ28pbe8JyNRx3QuPp9cQ4honV6UF",
  "key6": "2joSKb8sHxkvcRpy8dKQyw91jMqnYf7mZyYpyoU7kui2Tepfhky8LziWXMqjRtAZk13WTBVUFrSYVJQzvLi8Szrm",
  "key7": "B4DsywTomQf2cWxcYNQ4XV7hy1rSXyBuWcrjSYE8SRHroq7e1sPebC8n8eRNrWn3BvYGP5RwRVAWquX1W4T1zcc",
  "key8": "AwwHxBK5ByMe95wa8MW2wHsXNWoWocQ5Eo7FkS7Z7pkG8J5U4m1Bv3zFEmYrYcrQjPNZzRhby6fWFvyjCs8K6xZ",
  "key9": "TGdUiMdJxbDMhvvLTKNdtkXUBSwj7MQG54xdu8HyGFtKbtz8SYefuVT8hxFZ2tbF6chSZkZWPz4z1rsjZPYrUAz",
  "key10": "3GbCwqhzt3DNp6oR33hmT1ZQQGU7eCGjD7CQK7w6o9Dq5JX3JU9e6WgMsUt4HYr587D77aUBaUXqT5UP4WUAtbWD",
  "key11": "4YRv7H62mN7MxrjGWY8GUWJEMvXi68LhRyNFYyyNsxWPPwfyL1vQ5qfAqGwKuJH1p9SHeVn9761HWTVRwLZw6LoV",
  "key12": "4oMKkLHBA1ToZcoR78r2JbDBZ6bXYg4AuwRL23MDmxYLYbDsZmntGCPNetQbPa44yTfapmCBZaFimMRfRQH9izLy",
  "key13": "4RguPWFS9tWFeN4S18vH4HyTW96jcAiz6ug5hdWZGVvY5fNPcXEpEKgGP93SpcDfor7QRzofWfv5t7rPYuGzfiHp",
  "key14": "4CeN691ffXACA4sPQDrXP2SmzjSG4bZUBA2nS6wB7CMHrf6pYT8vd2FNr1bCfsW51bYZy23dPy6HHjsn8PBvHPmY",
  "key15": "67j1j5HWptvs9WV9TgKnmgeySbWKwfokSRbijvirG9H7TgusRRNdM9xm6gkBMiNoy1BK51uMCZNDRoDe8NtVit47",
  "key16": "3MDK2Kk3MwomkQ224PLT3ppMrNAJxpXx8NMcXo7hbqU9xp6abk2SnvTETQYMfTVRhijMPkEJVrUUErDTG4urwyHb",
  "key17": "go1jUPs2KVMD9tJUBNRFjwTWWQ4GSVsovVZcHA9rCyN8XBSwcAKHNb82w9urqXyVdCDiz5rGrRAfMzttfd3tVrm",
  "key18": "5cUHLr5FcHkSrYrf1bb83YL5KxQ9B5V4WCuv9etdVsvQGMJw4CrsMPvsRkqNgKaEemY2rMwW7w9cnhMmXTao8kuY",
  "key19": "2wXjxPZQcNGfZyomNYZbZM4ERLzgq4Voyvf8ong9tGpjULKamKwouhx8xobEgE31ZewmnvrRGzzAaEYWJRamJMG5",
  "key20": "58qwDzCbkgM5tnvckt1vBRLXC8zztdcAWE3RsjmxiDJMY4gT7BiFCZZST7UZqhyGyaczNpVFHZ3YjQHCoYjcKUkL",
  "key21": "3LmSxgwACFrzcTHe9JUdEsd6ksWeqrJXYcMZrw2EH9qkfceCirbdR6sXKbkpebT7hXxdVJdSAEeHdBNL6GkWFhoi",
  "key22": "ChhDGDFqmRAzHpQS1zWuHMFBnW12V7Ni81RWoRhvcKPAcozvCHZYeyxkB4mPMd3t4g3miVpaG9J2sxXiFZZ6ZdR",
  "key23": "5AHaeCNifinjixojagxGime39BfpcYKe4Eoa2wRZ9BXPwaJrcBxKKRWhiWSTYM2ggdvoLd6D9gQFRgv1Lq3KuoP",
  "key24": "5N7VtxQQE9cs6Y46yfnk1wgSWdoEZf4bbaRUiNUc2jn1KjpEHCgjE5C9YKYPd3Rd3eks69N5gLLraeyKcYM34DKd",
  "key25": "5LgRkQbbQJqBqqjKrjyheBH9QYtePMgVHymorCJV7fkDrYpAWMJB28213ACEVndBUz12h5EmZmTPmtZBouVhbb7B",
  "key26": "43md4qRxHCGp4pdcx38a5Kx4VZd9k8fZbQfiKHQN1kWZTA3t4zH4R8cuwcCWYuDah91MsDwLkPJGKkf8QukWwb2D",
  "key27": "2AbibJeAKmHmP3g36cy6mPq55GSsCQ1mnbrjpE6gy3ogYh9KoxqmSktnkYkZwHYFt89sDXbfWzX78ngJXuAf6vXU",
  "key28": "3zpg71v3rhQ9e4NCKN1tDxfBY6eLNNjL4U5gNVjpcqtcAQPjmywY8P5D1AnhmnZqVAZiH7ntQQpEmMUcD7SLLGzE",
  "key29": "2bmD5fMcbr26Ve27ZMDHieaqAiBsTxdWfVsqMhrbDZrsayEMNWCn3b2KiffDMuVhiVG11EmBZ4KNBgMTMzaddLM9",
  "key30": "J5yzrN17UdC24d17AUj2hwNjf9d3q4kTo7wwBNMhXqDyHYf1cbyc9XV7ipF3G4VgRfcsJCVngKjWFp2yQaxacrS",
  "key31": "RykTAHYHDwHJ6qtURXU38ZujMVwnJzrshaJLUogTyqiAD7UC34XphaZhYEXXLSgCCtBaUQ67CCNmWjv6ZTEBRoE",
  "key32": "3pLFLV8sL2T9cuFJMsTxBKGvM2V1Qyw1hV96DbbPH3wGvtmr3f1rLseA3R3mvWqKuEdxdYkaR9ExRebaFGarzPQT",
  "key33": "64rq2LCS5fuDDfTu5ofR1gE3tW84tzRVzZGmtirXRs2tuKyPzqUpLPRANA5tGknsgncHt95hSnaAysY4JTinhWE2",
  "key34": "3y7yZvYEKCGykbwS4mPTr5HTRLieGM98wdhzZzf1DTjMEEZBDGG1eaXeJSAfUUcN138LP3RiFXKaaSjHkardhkty",
  "key35": "4Ec67E1WKGPEdNA8ANgi4VfEigmwsvCfMDa65BmH4f2jekQJdMbw2uARi9NvZCbtsBHVe6y9ndHAsAZVJGJ5XHn3",
  "key36": "U3kFSh2iWDWkfoyBAMD9jFfv1KGGKKEkVHfqz1eWcM74d8Mfwvo76bAAtT3pPJEEXWHJekytCpQXXADD597XZz6"
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
