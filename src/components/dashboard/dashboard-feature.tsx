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
    "2ewnJwx55QinnizmWCBhrNLyCTv89crLS8ZECQTapUi4cB14pwKrhfc98NeUoZrqDnyw1FoEYvi9wL4JiVj6VD1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pXHK3DhvNc8k7oBjhr2pi5ULWtbd7XWDQNJWxH7HuxVEfGakZ19fYnsv4TpFs4pZeku4UYV5eqwwiFK41SFKo1j",
  "key1": "EdThCeggrqs6BFFQawVFvKTm3qbZp1CeXcP1VJjok14wquVt9KqMxwWWhXg2frQFn9EHNYtzo4FQfF3HfFDZajt",
  "key2": "4ZKqVZx8BUAgMUW7D9HiG4YhHvDKwv9SMKJfWD8YzMXyoR3NnrRe4PMDrmSssW2zYpiRwgvv1tC196SB6MiqPREh",
  "key3": "51NDYd5Kb5Fo5dtb2TRAoGJPiwMbyAqCp1LqxaBr7fuuAQdngcQkbzskFtcLFN7fGciTRKXwJfktWpYBr5DNxtjb",
  "key4": "2zTDRHdqYcbJCBwykGUZohVRB2qqajUWJue2vqkBF7fhQBcexQPLWpws4zeZDjSyJsyJZZNYonuvanhwXjmiHbZi",
  "key5": "3HSfo97grbcmJ2ZmDsgaA7Fwt9QGBnH5da296RYVMxNW6wPRYYrAnYgC6NJ8PtEsYCdGDgGTyAS7DsGq497kZM9o",
  "key6": "43jaKpcynxGAw9PteG3cp8VTvyBMQsZDaCau6HvhCgT8Jzi9ZxayE6d5ZR79894QmU6py7qgwM4i2naVBqYwhj5v",
  "key7": "5sgLqJR8LjcBQixNKoyD2mha5N1JKbkAprPYcMnZUYHtTMg1TUj3TrPpSNubASW9uehSxCgmM7fvQdLMAgjc6yz5",
  "key8": "65tFeWS9qrjLiy8yjVq4MjbPUvDY4LDm7yCyrpNwaBsHfTQdE5bvJCEpn5UuqXNdNboQKyxHcxkGYRrnMbwpi6ik",
  "key9": "3FGAGsj2ik5nqmux5knSydHQhExNPY7Eb3KCccHtKHp3nt5ty9vJa1fa5YCCsn8gdV6EtoUtR3th2vtJT7hinNss",
  "key10": "4Tz1B6zP4HoNZan41wv863MX62vMVtC6ivmdhToc2oXKieJrxTRNPG3ZZGL3W4tyWBeSsq6aV2zF3DemVuk3LkbC",
  "key11": "4LoJNTfHq7bhJPQZ8wYkWHiMfTbMfzSAMaKCN9RdCmDY6Wpso2dZeVJ5CKCLvLbSTw3vyNCr34KGwakTMSDJ8f7n",
  "key12": "2DG2PFQB6yeKQJm9UTVicRhFadkE6eovhQHmvyVM6TzG3yU8p3GJJ36R5mc7V3kCTEBUYGX1L8nWKFWLa5QkadV4",
  "key13": "3iJB8CqXwC5pQyH8Aa5wWXpUTgyD1Gzso75FLnsQ2TSzei4T84myYq677aBHR34sypVUY2EG5pyNH5kMNjgQuwZc",
  "key14": "4q1eDLN5egPQReXDSvZRM3Sx1VTTBd3xFmbjNUFoW9LSf6wEVofBtP2NvjecBMPmYCS7vXsg6q2uyTyhUrF7x3fB",
  "key15": "5bJtJdPtXVKEdeVb8UcnQ7tZj1dBbubTct51RhLFYERgLWipeLFsTE7HUjoWrAn76K1dAkHT8M14NBiruRSQ7Ruu",
  "key16": "4nGYUcnGjfqp6pA5fgKcYXKWmBWLUTF3qevG2p2qRXuxjCDH7ZoLb4vaFfd2q3D7RDQbzk3vytmcuh3YVbegCMic",
  "key17": "5CKFFSwiRgvHG4JsLPuZbA819DuEBfVDXN2afnSCqNtU3jPGxaCN4xp9E3C7BpXs4K8pGtsLfo4hoDaPsUhUdF2k",
  "key18": "2kiKKMYEzXKqR8w573yqzzdnMH4NAdqBLABKSabuwTKd87SJTh6f5Kkvd4uRiSh1ZgqiYrdhgapzNMSsT9rv7Mz1",
  "key19": "4F1x9Ey7kFxBRAwgwHyfP4wULuW643YewfYs6p87tgPW2PrQZFF5E67XQ4zwc8TvTuTGwwL3fsY9vcXMTML8i2RF",
  "key20": "2pbh4iZxXDGbRQZnq63GfPjWxrgF8CorMnajTfnctX28hcykyn7ZnsNyNKrRzMPSfBej32LN3wCZEKYaF6QKZhTG",
  "key21": "aoeeDaxPADmoPqa4y2Dj1yy3w8DDqE6pUc1bBGhFvL4bQwZff42UmSzU6a9v1yubmPZ4ofcHrxiskpWGRrXGDYk",
  "key22": "4kqTuNkdQpCRhjDv661WnAvPzxTM4ixCZxiT4eWBK2UTYfxm3rnnMQDpVnN8tSjZxcPJLCEs2D3jVAoDRSSYZZgb",
  "key23": "2q4pCM9HmowoedJN5AodLKznMo8xQwpX5WpCGv2wTg4rXdkDpbmHvU3izwPax9UEfWz77wFhKhzRRh8etAVhHhmn",
  "key24": "3D5kwGUdehVnjrbzixj7GbUhsKemLWp4Kk9Cxz8awzKTePh85iUS7iKFW8zCW6PL58KqsjVnNV9FJvE1nNmJMDM1",
  "key25": "cF5CKybhaGijSymRucGQgxmsnCy6xP9s7XoKMtWZnsq91NuJevZxvcGiC1ruXi2zAaPaB52nLFXgJ9GwFHXWZPi",
  "key26": "jnJ12B9HMzUiLN4AYsbeijuDK9cjRzgFVThTnoU4jd6V999MSM75KoywmnY5kD5aGgfhUnM3bDPk8UeCtfeRPmi",
  "key27": "5Up7Br7L9oDh7UHtTvXDcyt3J1FNdNazn6Ubob6QL3yL1fjZBXwDEEyftXLDEvmShB66dw1QQJA4HoCBoHc2eJLU",
  "key28": "2ZCgzC8ojiHdYDHfaJiDyULJRrHAJQhWy7vzUsb62k8SSQ3CiV4WKTn2KNZyYRQViGTAqQ7imgmm7ztQ4PFiow7J",
  "key29": "2fCRJdjGqHENSfBY7nA2aX8YmSmHDvFungAtGMkWP3eB3TrLgyVzSbLPux3hNwbNLav5hgLnUv2udkwsgbneCLBJ",
  "key30": "3tSmic76utsTYg8ri6AZnawSjseBJw18RbYk89we8MvSvXTQWyhwdGo46MSJbMjAgwVwXhk1qoD2hgDcsP58cPsY",
  "key31": "2XmuZ7PjfwswE9RMPjKCYKVp3MwAtkqEr3MgudWaoUxRGsHgKNi7FTEgvZ3RtUixA8WP7sNTYfUgL487UeayLZn6",
  "key32": "59QcSn9zTmhnMYMN3Cy9icXpmzjCnzdvumabF5LKDHRdTAvy4p2Ak8YvLqNxRqWyjz2Foey3UGZX5Rxdd9prCpx7",
  "key33": "4pVQ1fhXCVDfTowwfFSbSUVEyerw8xRTsXrFzageHpEsRjg55xMLBQzWCG3wqUVNT2gLnp6sCD5TF2yKQX8ofE6a",
  "key34": "UEERMjhPkF55P6d5M3pUJC9CcTT6g58x381ZmK3sM2bYmzB1FzcMJBKaEw3xjam87o7mzxvH46toJQugrnUNy15",
  "key35": "4fDTBz2j98UezJCry7Xnf59e1J7pJVbw7NzFGkHXXgMRkafycTjfKhv6h7pbYikHregndbRxPbmA1Y1KdyQ9G7oU",
  "key36": "3b4PNYTfuVgypj33KxChxKgbGCeBFBwH4oJhDcfpu2q7DFraw3XA2PMrscasRNHz38Cyp6Wo31AoeomntEAxVpSn"
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
