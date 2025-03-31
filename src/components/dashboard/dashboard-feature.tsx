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
    "43pfou6H4hVpQuNYztzacqiLWoEJAeTUyBUwMDPVyeQDUyY2qZYGeLAawHvsre2jbYLK6z3kBh1bnhAEGRCJhSyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GA1Y44hxAN2hYUyNH7f9Xpemup5knG9GWVqKFGFAaaBQPNHqRwqAhA5HAtqKDCUTcnxVddkaCXTZAKjzQCEVyPa",
  "key1": "5J7C7QfriW1FBExQmgRHDNif81oLoYGqS1exDyarpJmYANx2W6jRv5Qytmsfk9kGyNpgwYubbdXsyoUoeRVoZqcA",
  "key2": "5YZoVvasZk1vr2gbcnHxz1Z1uQiR3mbewYCgUubgJwWACqMgvdLjkbQ2WfoFGasxafAEhTGsqC9xGNjhPdAtUm8Q",
  "key3": "3U3jJtonYzyR9PpQa1Fthhm7qAGsRkLLdh6cN3hcsrHDJUHiYEFkkQmJQRevc4i5Zph14x4aSwneef4vg6MXPijH",
  "key4": "5rNNvmx9th7e3txyKbrwf29cwDFDcdL2s4uWuk3PYhcKsCyvxxZcirUogTgsbiZmdYCVH2pezymQnh1vk9WXzAZq",
  "key5": "5GF7dmqtuTGHjwEiqhCXig4bvBh95cbj2W1rpEE4gBt1atZtYHtJAxmDMu3vEEqgH4Jh1T7GeEFpHPwLt6mJepWn",
  "key6": "4GPH1Ntncm3aqhkid8NH8Er1KXnGATwXY8KJa5ZHnVM5LYeBnRQQ7VBi5Ei8nYw9drqnKJ13DvUVTN88fVS3MS5N",
  "key7": "5D3Ye9tTmPr1sJ586NL2JwNEJ1uM7mFV3Bkv7QoEScnPoNYjt3yjMmUgXuoYmt28wvfH8RxjNYcv5jo4j2f9yZXe",
  "key8": "2fRT5TeTDpMJtG9AgGwTr2yQiK1qq2LnBK5K9RKMqm9L4JrEhCcD5FF8JXkH75am3KUg8trHgYqAPYmU27y5Z2ps",
  "key9": "5gXqp4DYERRQKzpBMbNkssDXN8S1iG7DKjUvvN23ts9TwbXPPzwPskkkv3PMWiVZoHQkEDV5LJVzfRYx4DAejkZf",
  "key10": "4tyxtDVa5cbkvUL9bN1XFtoNAX5SjnFpXPFrGPRLLsHUxDnqn1i3syZnv11BJoFnkjqZa6bkm4Yh3MpEwbsoipKX",
  "key11": "4jwh4pZXKP3Xr6u2fvve7tTJWJpjDi3mcgY424wCj164NBxCNKuZpfTniS1ZKaQxZcvhZ5BNsrKWfXGhZ47GkeC1",
  "key12": "377cFz5q9BnV1Uu1xk7knnk7g5nqLxGXJeW7NJ58XpgdLpL1moqp6uarc7wsY8W7ffNAzEGhw6BqW8ZFTBJk9TkA",
  "key13": "4GETMw3bFBGNyeVzR69LgzQuvCKKVsLxcpNthZXCEnZU1et3TghY91zMMPwYQvC4VgRJzX1Ar3qmvosTeWndA2ov",
  "key14": "4f9x8Cei9DtHSfjAvr2wjhJApfHqd9dT68br4xzpXD4dFNaWTicdjxokn3gVoojy1X6FAqR67FZ4jA7w4Qsr8A4K",
  "key15": "5a94smRSPcHRGj8zyXFV1EzA8n9KbKo272HUfR37hdGmbED8kZQLNtLHoZzLcd4sT7tmp2dcqzJ7xZRay3Fug7ua",
  "key16": "33AT9qxHA3sGrViNRKu1YaV3rZRfUQHGfY2kjtfTY7jEB2ifTPqESJ317cw1a4UJj2oHDv9g1Qv79puyFwUfT4L9",
  "key17": "3z554BzbC8ErZ1H7se4YqApKAPqDjuDXAwbjkPpeYVZsjdFbbWZnRdNWukVQghkZyVBWQWe6gGLSQ8VxvzFwFYVE",
  "key18": "5PonfNP3TzmdsHtsN9ao3UMaqdyYYkMUmbEeBCkHCJYC4hxyPMgGn8odDK1joX85oSUavVh31rWno9Ay5Wi8hR7A",
  "key19": "3jm2pVX1LgH5t5g41gbK1DqRinMdAAznHTjSyRoC6MYTdX2sBtQUrrFJPSiT9Qu2j2EeVCtvJeN5mnyKoUt3ctGE",
  "key20": "5fhzdjBxCNdbDd33a1yJmZD2Hndkbp6GgvyVGh1SLbX4v4GQRTH6PoNaEfVJ3N3wv6QfzEJ7nAWvaqJPHMGZyBvb",
  "key21": "4775gCGBtBnDHmTejkoXudPdz3cgws8ewPUKdHRqkwCR6DSHRCJUPVpqFXeCBMcrnbWYScPdRcF5o5WS4uav5FbF",
  "key22": "3FVRpB5nrr7YWxkBxB7UBxeSiZxd1328RAX7SzKLhYEYiLCPRxgQH7wAYBeC1bptTtWfunLs5UYvR9M6mU6Mnhpz",
  "key23": "22GQnVfHKQVoM4XM4iwyKhw7efNsvpQ5w7FrsbEoHtkkitJBCb39HydbJc3JtqtX724MCdTxt8CGAC48mpjESa3s",
  "key24": "4GWK1nPEXyWjrkzJWjesY2TLEkd3wKQMYEeDw8GLh1d75bzYKrWvnZtcdxKuPuy652Pcg2EZpVXC8MQ6CuMwV1wh",
  "key25": "51yuWYvB98AwW3Myn6R4NHw9Dy3ETC8FTYD7KZNVdqTLdfc6WJUspRrLBnzcW17pCLxwiSBueb8rAVzose9rKHUg",
  "key26": "3aq4XUzcUVJrdGfQV6Qdd38hPXZNKwr3oBQjZLgXmPEvkS2WTB3ui2W7pFWMGDtNvND9oZZqzJ6B4mfYfgFxgEDJ",
  "key27": "3c8quJ4JgBwZ6Evge1E6oq13yxADy1MEccF5GKCQ6hX136bgxDE3UvZRrg6GdNRv56tzU3uz1MXhmfS93ZBjfVjH",
  "key28": "2ATREMFaGgZz5RJhjWUbGEkqi3tdZ1t1oUJAsKNvvjFT69WzM8WiH3GcfHSYQcEwYvuD5oeDAMBX9o6ESNoVsbot",
  "key29": "4YiC6hT1Ckoim9KwRxRbgopRgUfFryK5hqE2GNBHStHvRPmYmSwVnurb1PH1bk49dqBProS6WNMsKnav5DPpfwWu",
  "key30": "59oR9xbp43KMkXJA4cqV8BFTMRc6Jgsj2Fp7Kk8bSxUqv5sZZfra7gZeY2p96Mww1zMp6FvEyE8oJ4tqxXkPdLNz",
  "key31": "gCBWF85DVSG6LMVwvp7RisCL1WGPZ9iwfs25t3xfwd5D6ZNCeteEA2YozgJwUxe1Z6ewcHodFckmavZQtTToQmT"
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
