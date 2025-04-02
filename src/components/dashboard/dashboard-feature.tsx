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
    "48tPSGYMPuDUgzzRhaLMAscmF1Bpww24vcn8oK6wX1FEH6VYwaJkaRj98NqSBFi5XtpKxG8xZ4jEDaiXd26V3Jb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfZ8wjoRDtPKNyzQT7WEkByhpuAjQbhACewBsJT4RoANG5GhGce3vME6vyntouuv9ubVHVeUVgxqqtJkQu6L37Z",
  "key1": "55PWyebMa84ZhATpgHuGAxKiSMBA9LLbVc8fXk4B7u3SS8oiqoSLaZ4LmSYPVgtWznsjHXhSuUbZue328BT1YSyp",
  "key2": "5AYZmm3ghfPenbPXj3nnyHz4SGnsMvcgqo5qdaRLWL6TmuiCzGXyWTSXPMQto2SuYy9YfaiaQCrKbqHmdc1GfpF9",
  "key3": "21CzSq9PSjL9T4vWkBrizz2KqWwQvGWCaKdgUHZ24nt3FHVPcKo9JV3eBkfyeuZRGm5RTJUkcHrbXKM4T422f35q",
  "key4": "2yL8H22jsXwnTi3jzLfMCUveDFdgVFZNLRkKHQie6WkYHXaoSfEJnB98SH6VBTXrLQsUyv5y9fiBzVQQ7kCvbaGE",
  "key5": "2tPT8po4vwZegSZjNyyt5HXTsacQsioeMEi63aKgJb5dbqtr6pwnZ3vDtgV7TSPZar6yqoqcHPe7TjR6LurZRjdv",
  "key6": "4cAMwRBjKHZ4WF4Wt7NoThNTenTLFzeG9EPMojCJrkSxgDez1WFFMynKsmjf5sGx95PqdEB4VWbHEWpBP2fERau1",
  "key7": "3mNNv2oJJ2HZSVFkQW4XybZozFjp7U6wFxWJAgYHKFEHhPz8UFuYWfxjkseFzngz9fqNhW3roLiYeif1f7QHqEwE",
  "key8": "4kUCLNpmXquoz3PRnbDucqnkBNUVKL9bvMoPixqDHLsRq85yNuxW3gqoHbbES61cKjp8x92xXAyEqDJfsVMoz1Kc",
  "key9": "TpSeV4T8MqQzd2RFc1K4WqCocdvUAZDH55X8hEfGsJMHoWzGA7d8qtSDUVtWgYZNJbLxSZUgKxzbyYGCHfwEnSN",
  "key10": "noEzCuygETeYhs17r2WWR8DdAejNczfifDexqucEfY9JfRvgfpuwiu9vUXpivTWTHKiJAh5JPXYoibKumR9S41P",
  "key11": "5LRwBNszc2xFFoSsE81gsSxKNwGVM3TmbqQdmh8cVsuVFRa8AMC3FxkbJSnE7t6TYaaKfQj5pc3yrBKa63qu1Xe4",
  "key12": "qJQDsMvUN75ktDBHuhLRG8EWJD9xx5fMVo4wN9QWif8mq6ibt12iJhy3zjSy5VHMYqpVLMGZuC9S62J1hKpKkf8",
  "key13": "22Qi7MrKwrbd9aQEUZVgx3QVXaygGAFEziDP1d9LAwzgSi3Ef4B1Yo3VCWSJJL1QuQ8dE3cPXc8kdN4AagZdvko5",
  "key14": "FQqfj3L4KCZa6DPMmX3VUvDnJ5UbLxA3JQsfUjYLV5HKtsgWFT7PC4BMLC3bnQnK8ukKft2V35BzZR3oaxvf7f1",
  "key15": "27fh4LApGB8nXyWYet11GMVXi8EdhC7FEGU9ompuwE11qyJxrFsjSgf1FRBw9bN6XE78kqxGWgHsToNE5RiJWYoR",
  "key16": "26zAU82KLZDpFg8a1gS2aa7rMLYHD48m15ECNb1MK3uN4aKvQJx2geukRKzPzZ93yw9hjt1RxSyBDKvftAUUHBT4",
  "key17": "2cS84hdHsrgf9EwDrbLTVHaKKxk9imnodV66RVQWgvX9b4hVpbt3MwRzG9vtfwiBz2b2voqybT5hPXe3Pp5oXH2N",
  "key18": "2WQK2mw5DNV3ENE2Z9AmhijjGmpvLwZkmEgmS3wzUbDdwQv4y3Bd3A3fTuhHHtPKCprVQNPrnZxkA27rk2p6qhow",
  "key19": "4bcPbraKE9uxZMmhwpj1qcnwFVbZUR6bTTrfaisWsGUMbjg1s2Q4sJxZqHuKcURUTiXT6fJMTHX57LtNpt4CPLqv",
  "key20": "5T3sgHxZDugq5hkyUSfedQu57tWjeiA6WUCEd3Lyfzw1bW3eroQPqdEQXrtV8HYHLimrdJ8HPFFFycys5wpRTcuu",
  "key21": "36SRrwZSZB7xrXTnxuPJRPaWp9AjBQMFUikd4KwmTt23VT51MmURHHBC4GNoybPAh1PD6fuuPuZpYbwSbAycRbZ8",
  "key22": "21fNjNNzWu5LkpVE1tyCGapRCpMSEy3K9mU7s6eNY6VZSJokcbGpihYAYmVRu6rU1fXiTqZMapZvHEogvsWef3CW",
  "key23": "3LuwqGi9JCpkxxkcAPg46j1iLQu5x8x4vKUwYDxiRm38BxvoeMkJuzY6X5hoyfrhY1c6HtCLCKm337cNHfumaWyB",
  "key24": "fSSWooAdxXBuFoCPn4b75nAVv3mwy1mPShnDEhfMHPK3zD4ffSLLXAKosL5PmoiL9YvmbapY2S2ni8xyEMXTMBd",
  "key25": "wrn4f94ky7UmPKZJ1TDJeLN7an7YMEZKtNLAc4KQpopMg9uRURbiWmx4pudRmGYfXyNyubKaQzgEoiPp54Qhzmb",
  "key26": "32agxWSTUG9Yftwfv8MkvX5ajK5KHo73zQPNdNJHMmuDc4HsJCCDgBc7SfQRbtgDDwwHtTtW73Er2cEBvutshycy",
  "key27": "2yd4kDsty272hsprBy6RPQXmQ6dP76DQiruPYnXHUezWJLAe7hSYoLwUMvg5avUDsChTwrH1XTfETkMc8eTwmqvg",
  "key28": "5tk9jpzAUm3yokowKi75xfrWe4gzGgDpjAB4J2zUCWPuHwt5x8DLMHXimxi8hCzXb7ZbLAs69s7mBJqFccA7kPv6",
  "key29": "4UiaoJCmah4nEVbcgzrwSriRKE7KokrM9hRYgNz6pEWbiSD75BfAifSqAhRbzh5xprVz1bg4pUeNv7B5HTPMsKJH",
  "key30": "2rdcN3fjiGjcxDVPPg3PoQggWNYLGHcbduqJPDYJjMUJpRJELBYaCghxbqz4JZfFhSWyPVTmCqFPjMDr86Sj843a",
  "key31": "4kawih6KycysXFJ6qEFPtanr2JKLvjtn5m8xo7fHh1WuqKfrpGoL4Hpk5ZwJoEyiw4YogiaHr6RFXK9Pz6Fty7W7",
  "key32": "2WzMq3mKsGntzhJvDkXnkzh28aTRLyyWEBhGTGHyd4jo95Y7oWuVA3NvQRkwQciQTgTgcoT2xSj5hB3apbvgJRAS",
  "key33": "5ddsKhZNhoyoTaEkEo9gWjL6Cr9bTCTnU1WuR7y8D6hE54g4eqrH177aVNjCJfvGeCDvJM3rrGxBYcYzs5QWJzp8",
  "key34": "4a9JMYXvyzEZYK2nWYMQyas93g3S2iWkj1HSCPNG5iJuaLEU7z6BBShNPfRSErU6N9cLAxouhzpLZPwcg2WsgnoS",
  "key35": "2oo5B5cXih7aBBakmJED52qkDTQ5Gf9YCeFreh2hAiQZi8YKwL7vxiEg6vyJPLAdpQVrGeTfgZEGHmjJJKBpW1Po",
  "key36": "63s1jJHnDQVzW8gpUyorUxAKfUwgC3utm2V5WunQuJYcpabBPgCCsorbmm9EWki2kmbJ1AJubddvSf9BteU7Z1pD",
  "key37": "5dS3yHWRsGYVytTRc6J8Qs1hjbyKMyyDFo8ui6xv818iQ6LqK11DH14ynKo2CX4APZ4XUVDxP3j8Jv6SHJ6RBP6m",
  "key38": "5nx2t9nmTZDtytvcmhsZYHbXDdEAfTvbE2fQxvvgrgcoof1gVwfx8mCMyxRz5StbLtmwccZRbaJZrqt6zfu2eF5V"
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
