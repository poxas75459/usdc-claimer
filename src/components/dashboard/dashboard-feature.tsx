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
    "WFYnfnvaeLtqcNjAWXRG7b3nrgFF8tFuP1bDVwMrTkLJgaF843QCNhLxq6ZTNhzcJw4MW9rtST9axnVtER9X1sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26WktLQaaq6Xday5XTvGhbHGKMw6qHSqCvf3gxgPXuXjj7R8TyNqeE5nrqSQBoib147mtjYh9aTYA3RKHTS2TAWc",
  "key1": "dwCRQ8xFqCgvs3M891zi3SZqwXSSyFZ8p1foSWscdCXCvSYK1ywSMV3tpf6cmenjLMpiePKXRXdADXGqZBdG2He",
  "key2": "2epFqrx5s7oMnbnRccijGRaBaPw2DauvJ9NLQjHrgfBnGy92hvcvZYdJJS6m3YEQMNFhY3UiyaSFMB8yS7zesbqC",
  "key3": "2BjQmuck1NZCv4EaygpRqEiFTTZgyF1sMshkjSgKY2eQHAHPSc2mZx3X99nDZs5XLnzPA9Yewi8NiL1EMfmFo1cn",
  "key4": "7sb294py86Xmmi8aL4Sud2oq3HVhsVP6ZjVrM5FHkbzxn5m5a34DyUphWxHwkv4WM6AqW2Eqw3CCdEGZ3fUaEbv",
  "key5": "2nrRfX6uHFmjz81SnTWEUC7jvLSqSd18c2vyFZgQiytzmThVymmqtTU2ANZ6vdMB3Tj6ouQwSRViBXzkq8gqsSQM",
  "key6": "5iYsuwV7So7jWusqE13PBp6ddJc6DVCUVzWXNVMTQ6rwKXRx9u4GgSQp4z6DUPySvif5f6HvJaacpNoV3H44cbws",
  "key7": "27v7A6Hmkdg8NipY1aPXHoScgrLogMq1euZKGXBTPExUEaVPfbsYWiFHrmjy9c8icD1txy4xSikTWKKSyLkWAVZo",
  "key8": "34iENDaB9YjmsYTBRwR3UKWruzEMwbu9Zaa5TKGaUFvNarZ2r3imoQS8wnWUTbSg6vVD6XpP2nvJRqFfYLnMDYnm",
  "key9": "5af3pK6yWp1RC13z3cFAA1mJREQN1HgN3wZersbQTf5gssG1P1ntbXy77nGXbwN8W4EUbvgXPx8eek9Rj57EnEnm",
  "key10": "3rqgxuSNXfRB8tKqveF8sCziF12H7fPZNSgNr3jnQTgcBfyzSGKpGhNvPwdzEnyiZHMhWHmPPZq9cqWjjpJhDzwX",
  "key11": "4hEjGf2KL6GwGXKbezQGMoo5gwMsZjvS1rWML64WhTsbXMNF3grpRQ1UUTnGULw3Vyr4YKEY81kd5L2EFHHtYgjy",
  "key12": "4wrdmAe8RLeNqjgCY1ongMCXAiR4YZN7s8N2WFfFTXC5vseDW4CVBSDqT9Wv9DJSLmP1WNXsWYukQKzFNU7aS7KT",
  "key13": "5piFZSa72dhMt9Q5LswhqfDbyqTuSq28m2gK4epcRhn9NKaFr2kEedEShTv3aLT3c5SdPZ6xYSj8bBfpPN3xVaG6",
  "key14": "56ZQDp8zfyAyoMXWZHmYTPJ8fPEgM3Z6HAiftXsRWo18qt13S8SyhzmwFEoGA9SAvAqL65PHwQuHZ32FAfWstvNH",
  "key15": "35x2mF88VdT6MV6juXd9Rd4kE592175WjHvyLW9TupRr2PdQzeEGdxLozRTWeZ1NXSm8GJNGMXNfNj8f87LPpky6",
  "key16": "2Yzzp5Ec1thBFXFGsXogYLFETAUGYLG8JmW25r1oKp7nXM2vf1U9PEY6PyWtoRXK4ih8VbdCSsQYJHP8D1PDfx83",
  "key17": "4y4gKPugQoaSrJgVenRfVD4kL3wSvuuajkrGMeBRb9q1N78GmMQ9pS6GJzkohzojEc2cXqw4rH6YFLoyW2DC6AzZ",
  "key18": "2SKwSTYLbbKq7oEVhMhkYp6vc3U3N76sUYcrqWwGBUwpQhwa4RRCQpCaHdEvCkxNfHTcJm4PgAGPGof6xQMFEXgQ",
  "key19": "36hC5SAstt9DZW4SaDFKM1hsx58aJq15hiy8Kr28nA1hSJuCR6SpFoBAdNGNJiKGbvKByFA8JtJVU2UNRof63FqV",
  "key20": "2k2JgaZgzos1H5nwTcwQ6obcGdkNenMK1HVgr7T25LPoZmwjVxFAam4jV5oGtU86ZL3z5co6TBktJUjNrs5spEiE",
  "key21": "JueCroH9AgujsQis31gz13kNKdMUBvDaNsjQtWrbaK4xNu7TPjpJ68DA8qTm4Dt1PcT1goiVYZ5w2S5tgApHu84",
  "key22": "33U7i7j9GoDYxLaaKJ4iWtCZP5iJXbMNMVLkzbzJyU7RoX4aj7Yqk5eg54UyZFzWLyr4FQ9Evet45deKg2AT4RFB",
  "key23": "5CNYudi5NVdN7CH8Jc9XZY2FNMCiWxW278pgVjVFx1YfB5ViXRZVV8SDwTycWgvKPU8qajt4S5awfBe1Gh5cdedR",
  "key24": "5fjSeniYKhnaNdWTiV33FoRqPBP67rg8B1xskZ4YzD3BVSjqoJC28JcjNUCFW4nHEsNbcsN6dERFK4WDzaPmHova",
  "key25": "2RBBGVifLGEtnSTY4DLEzunyLW9V5by9A9mkfDCc8sgjBuUQq4yn1zHXAiJNJVozSh5Lh1eDRfQjX8MgSAdLqxw3",
  "key26": "4UPcTTAWu4jMRfoCHdb8nRHE9BMmcwmb5MsKiHnvuv5eLamxwifJCG85eRJ4YuDB1MhFyYcb8HN9thXdJHNcwEp7",
  "key27": "2BMSm8oVh8D2iqjB3hngnSznG8x4LgTwkZYf73KzH45XBB3oTBSzRrtSqTAh1ipcdUbk8hkP7xFfeUz53hEiRffj",
  "key28": "tCshxW2pL1mqXeXPjeuoLBLLHwWS3jQqNrHYXKyQDnm1hrgzgDpwDuAQgtTV4vYiQxauspxD87CquLE7nDC4HWM",
  "key29": "3RrdwtQBPhH8HgN7xQ7ZrMgJjiALvTe7L9QNUrC7Ycs6joAhY2ykvYRgFdPNYLF5hAcP3ywzdBVaNBRJMnLruTEP",
  "key30": "63mFtKw3ym46xfJGzKRxon5VRgu7e7qCeybWn7kLpxvQQvZMjmiXMdM2iuJokUwmX8KEJQyQFMg1QmRsRFv8uoyF",
  "key31": "bMqN9J4JTYAvwdBH13xFDo3Nz8WCfE4MBhDesqpnpMzepYyjgJ27kbcFdMTh2C2i6u6f9JSSSKGJQcEEwAyf3ty",
  "key32": "5Z2PQNnZ1dAapN8QiSW1SUCDufmBa2SjJ7B4xVVQEkxEtsHJxEPztUnkYBwp3ncA4uV97VULbLuV4ZeMSrTd9Hic",
  "key33": "37epku7VsR4WEP62HLBbpc4YY8rB6uThEZnfzquEk3J9FMqVxHVJudhKuDqJCCfm3FDs16bnoiR7asxH94vom2kX",
  "key34": "3GtyCWtUwz6VXneiPYXx3LVm5Zvc4jxyvd85Z6PW8e7fCLGnPbtCCLgB85ELRHHLZXmhcsRvyE4exMypmbt2pxLi",
  "key35": "2q5YxPZxNah1aEnG5AaqZ6cCrqeNwh2ebA2M5DbV8bHNNmXwzPphxc9yh6yN15MZUaNWc7rpeqZua6NYhCJUQ4M4",
  "key36": "4RfxYnKYHDuNMmwqCufvJsHv2ojWJEKEvYoS1oB9zTBEjJvkQz1sKU9JU1mMXAynXQaRSzADJkUgLnvnTjo4iTUB",
  "key37": "4pV8buxvWr8VYroptmCrkTckyjrX7qhbDVhRDQvnu7ovV9FJcb8kqhziRVmcVJKGuFi3scwTzHCuo1nKREbd4zCG",
  "key38": "4QYq5nNiBq48oTEG7MyNa4Wx5BWF41h29XvqRZEpbZBuMjfwKRCJKMf9D2eg7L2KUkZcKcLCGm7GkBXsyzZ3nF46",
  "key39": "5cry2eoUNYzFA5FY8cBBqJmWgeKi8JjCKPrh575XDgW5dv29QCsGKb26JdMeEo6acRAoRYBshAJ88sUXuCrLV31p",
  "key40": "3intZHngsvd9eMNYRuC1ZWb3dPH61Z38KK5VFwcZBswQxK9xKQeRkpYqYfPeku38RrCz9nXCYeswy1Stjhm9udhX",
  "key41": "5rTu1PtJVW7ynB8WtwAW9XHNhjKZfG1VcaGDSJ6wyGoxvuvhVcxxhiQKaDHTpeJ5J94j8GMtuScDb635T4kUiu8J",
  "key42": "2rxBCiv8UXEUZSfVPoBLnTDXbUCg5fmj7TyZmmuBYgs5pqsSADJL7BasrJXigJK7iP1rquVwBJDgkPggXG55i1hY",
  "key43": "4nYaDsr8b9DVzgKX9Mir7yfRWK7Sw53eosJzidiXrfhPCY7aJGJBZGJ8gKWNRm4egF81WThNZY995CSiwD9UsaSS",
  "key44": "3jsVJsAYrarWGUEiHg3cpGJxZHdbiXzumstvawz6PyVot4h3VWHMMDGwFL3Jwncp9AytKMgLTftr2VzygMTqGcWY",
  "key45": "3shjApfLux1hRcMtgS8dRPtmAG1seqpNv2PcuFrjxwVQWv1wtxj6VKjZWaCeL493cDsZgfMcUU5rbeKzmb1Cqaxo",
  "key46": "22G9LXg4ocme6mQhmeKMZnN6BM3L2Kp6vgg4Lxxbf3UgsFf8VvFtua883kJcZPu1eAeqyRFeAVfrJRBKPwVntXdk",
  "key47": "2ksbCZm51dockwwXgj7qn6aicYZAKCPHvwJ3ospoLG3SubqSquvtz3UdBtuaC2qbjWDUmwgRoC4FEUPyKMduTrKG",
  "key48": "4WTRZAMPzQrgjpK77zz1k9maijrhEpVFwDWoBKBkedexusUMe65nG7zQ2um1hYDuYZjXcqEFTXNpDaZpBPqs41aC"
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
