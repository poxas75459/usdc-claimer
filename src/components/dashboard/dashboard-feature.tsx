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
    "XLg1e9xxpUKvTp8rzkVDgVQ5VoE3Vi7Ke3b4RAKHgebNFoRGYGUdqXfS2em1ExQ29stG7JG7yyYzx8cdmqWwKzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JLGEbjB4pNjd17o7ruY4kUaDxnaCmUAaVNGDv8CLUQgZS7hm4QLf7B1cyonxEUYSbpiHEgJ9TkqgTQZZ5PJDJhR",
  "key1": "3pozsZ9o7JMdfrihS8VeUWNqjBncbpnrD6F9J7RzDyBHTEzneYaC9tyoVdkqGrcv5wXCuLSPbk13cDe1FqwGmkNX",
  "key2": "28Rdtd8GQ261koyRUR4Cvg2BCUcdQKeu4kRexwDaGx32iXBXj9nqU2GwWBsPcCoc5JiS4AJzxn2wK4rNRgSd78Mb",
  "key3": "541ZzqEQcw6DxKSneVpHXssAg9b1zrZhhAt6Exe2UK7QSgMeYzAEHjpMnepSDncJ6dsZeYrBvz7o3u4aUEmfQ8xV",
  "key4": "4nS7JAuDwGPvaiXz27grZsQ4XAHNCPHPNbAqHcpfbFi7WqTQxtqVpv3t94L5rcUdVsoxhiTAjYjrEoZaCdEQTSYB",
  "key5": "3YNe63MwV29W7xszWnUdaMj4oqoeRFWaMXmp3ddb4y8XhR1GWuMeSNq2d1YKQQMgUyfuWCYGw7GdX6A51KfDwy7Z",
  "key6": "5Xp1ymzPX9jmXgxRAEYHvbHxN9BRRtxgH33bu2mmziz14MVJutEqT2gzWMH6dwrf37fGRUh8m8kz5cnNpkC8PwJx",
  "key7": "R6B3jhPZLrgVu6rhpvsHi3EX2m8hL1xM5xtwcGLACvCwKS6dVTLxTMa3xPkMo44v2dDBfk4grx7w1ncWgv3asQm",
  "key8": "G1Mf8NCAgVLRampRLktaVQQ3auRY1VrBkjEqHGrnXFDyLeTDdzsZc7cDPjrKDgPqZo1HWcJwaWkVbiu6qMqkpFo",
  "key9": "4nrvmj8aKaazwRaQFtR1hXePZPq23oF8Kju9jAzZTEUCyjAUX6otNBKuyqEjYKxk9RSYULLhiPzkTpErHQWQVdgu",
  "key10": "3vDSAEQzWqJaycNJF2erkbC3mUZgxsM4VCk5juhvgaxhEfsWQ5wbCWryPo4ny6zk8q7S76iVYCXvAkfFABxgqX2u",
  "key11": "5cX9mBcDsKbsviEDYiRuLRTzFJUfuMag2HYeTTcP87AjCDJdGzPLLLUM2K4bhzWt7PxBQCkWf6qQ8ggykQwVu6Jd",
  "key12": "3K2XGcVd83xV2nWJkLLM3ayysiXbQDXD4ndf1ZwnZ2nohNvpvsmGUXw5ccB8BE4edPriZStqap2UwTtiTLiXy7MJ",
  "key13": "318qXTFS4Exxf2mSrzB8TqWJ1wgmXsFJP1FEh3osNUzzDQnjUwzPjvnqZkLcnQwvKR17oyVQyvakWN4uC6tA6riU",
  "key14": "wHotRUPzhj5PQBezmpgcoz2ZMSJbDmWetWR9AwRaAUgDa5sPNFVTRHsCRHqtReUAZVdbWm5NwVUfxSQg1QDa9DD",
  "key15": "5okYgMD9RKXNBaqUxQaLy1eijzzfNHTXBYfamdDv7dr98qKACfYJ2Bawx3wQTG1xiU159Xyb459kQFHWtYxpC6Xt",
  "key16": "2Xz6mg4dmUE8W72CaQwR6WqH45kM2dJ2DYYS3ztaQHUQcZ4s4egwDt1kSkJZg85h6sh44cghNKwvFjfmc26AUgHy",
  "key17": "3aFef4rmreu6LdDFy55MShUcxn3SWJBqRatENRaEqueeswumLLt1vy2ykt64gcux3UPsDean9u9sNczhtsnDwGMc",
  "key18": "2y3YNQnTJnKxwaHmxQuHzWrySUuuKykU7N7VpwTTbShyC58BYxaHBsScve8662nvpNCj2HGuGfdUuUksfQb2mXrh",
  "key19": "5gT91aCRuq275DNx9oE1ez8NyL5p52R3Zy1vkXdDTcsfKmT6EunRWwC3K5ycfkgFM2ub4idoSXY1hUWdHx4YnB9B",
  "key20": "4HoGxhj7HyWX3v82kMstnpQDe26BdJtTNNf6dbjGgDfsuhkX8o91oChj9pdhk4zf5CUdZXmTHmyh3pkzSTJ67CJc",
  "key21": "46puzDmX59LjiyzJ1B7FaLVZ3BeXUW8gUe3s3Sderrp89sJdG3NaKFVSJAZaGetgFMveaHEuRZswQ684J8Ht6FFo",
  "key22": "QporSpAq2Dous1ryhsuLP9iQQoHGJpQ2rXqaHtWZ1mZkjFdQfQJ5b766nYcXE6WuQhADhJBK3YwUTXCU9JkbWPA",
  "key23": "3HmnBtNhNPsyGrE22m9vgdqjnXoBPVH2MPQmButPG8YCvz7TCxz1VK7R2LTCxSFBmfRp2xy9wGSHHVcjrdFmvERt",
  "key24": "5F13ia6Zdu8LFqyXgaRXWGjzT8yGfCzxfNMypDhY6iXBr6o6zrgJV7A2RhGmFMCN688LT6tu8aA9deB54fezsvqY",
  "key25": "2YFKozgG4N6j6pvgcjD3GBi554pTxUdpYPj313v1LNTSC5nh5NyGGJq2cndvzjy9cG415ia2J8NZWrApGujPZMPF",
  "key26": "4ZMLcDPK1d5NDKQCFfLwEpEMtstciQMcVS6aaV4pghjLuh9vcNpDu23jektthZiMqvXF8vRDY4LBjfVBmiqYbKD6",
  "key27": "5iig5iiTMw4gB6DBzFTKot8MMDVH714Kji5PyWB9JES78e42oYs2simu7ZnyGZKyxPVXhx82pom2q7C2zxNmd8iF",
  "key28": "3LSGrV8KNPkgbEepTBAKnkr6cUcKapMcLAns2yxqCAeoyZRjQRBZEUZW3bVhFKH8d3dxfUmH1122UGzMDKaNAQ8r",
  "key29": "3SPdqMLmZ5JmEwutKJ8AJbXJiipxDkg28XFFfoAgkBNpqBGcwZxNNJTEdhhexPzN6T8AdrzopAz57cXu5BFFhErg",
  "key30": "2yGhRwLovF98ktAfVB3AXaWBxPcV28E3Ekb4MDMhptR1Mn6hFjRyJxvA3Zd763NupV73hvJvaLr27yJmAQmBQ5dq",
  "key31": "omUjdMi94pVTMYadYUboHNuz8twBLxoGFFqxkzn83UFzfqrzP1M67exykDToqbMpGCcU98Kod9ssmSjCtxtMSia",
  "key32": "4QjALZFX4Y5KXjMTHftHM8ggaqEWB2gvo4SDGDCv4pekbBMbqq62LGwdJTgsnSc4jGpWdTBMQyLamZjPD6XF2TCp",
  "key33": "4Un76nDSnPv4wnWYXrzZesqsRttopWHVfeG2uF4ovqLDuhSzQfdAkTwGfwGiAoLTrHKU4shYn91JB5qaG5F9MjtN",
  "key34": "p4xeQnnHqQG6WViWLEBiYif6cragtd6Ct2rcKaXcqv1MFngUqTgkWq5YBfNyXPpRmyMqKG8yBXaGXFpi7wpXwRF",
  "key35": "325CqJxzCNFMDvn1ZwH554TreN9ssaZUV2ixuZ6y5g9cFd5hLepupssEnMH82QaqDFD1wchwJx3icF4X42Bw9d12",
  "key36": "fbHmG5HrGyHTwyehPauJx8cQPNqifH5DU7anxrYUrypHPxvPVF6Bi7xypkbiewBNLgNi2rGz3Es6BJhnqyRaMZ5",
  "key37": "5ujwAtueTY6jy2DeR28jGBPidzLrNYUTNDmxny6LMeD6DQ2frGp4ZcPUa7sZsrLuqyv7UV79p7h6uERW49G5A6dS",
  "key38": "4UrCN9rgE7fiECUg9vQMr5pjbWwUGEJDASc8UrNK6ZaPB9EnpLQ3vhL29PuSwbn9TLaekektE2XFSQCT5rajRBfM",
  "key39": "2iSVKAreuHNCbEYkJBdUiwUwtn9rD9CpWn4QNEH6tC4mBcH7WL4fBDZVkb7QmRnSfdVQsun3gKz82FVZq9fytxcx",
  "key40": "2EYEASeoTZKyAeX2DFvvaQGCEVLoYRg5ecvqu47JK4WABdJf8T1FAtbn5VttsSLAz9weDjDDbtSqsB2fVuR7bqJJ"
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
