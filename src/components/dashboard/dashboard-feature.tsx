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
    "PDszrsTp7ZCmfVyeZ86rhpKWBNyNnLCu8GqNTJYKcc3gbprvi5QJ2hPXFkaFDc6Cpue5Q6o2WPZihv2nJFvEwqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5byc3Ey5mQ6tdzjhsFcJRZYtj4uZRCkv1nrhQwqHGuEu4qsTNmEfkptMGNAwvuDQV8yKXPMizSTiWBndUV1hAGGL",
  "key1": "2GACPRoY5wiL2xiFn7vQ6EaL35cxVNbchaM54Yni8oYP8kPzfAqyY4oekF1NT5njhtr1cgGf3cc55M4RFqurm11J",
  "key2": "RBFFH2ASfgZhVppz8ZcEfb2vxmo9aaCokqg9s1VprGJKjEoxNNZ5PK4jr2eqr6DRQ8zwEaUUhqkaxQEeN1b5z63",
  "key3": "9bW6kKzX1qUvpNE92aHweZyiA5abGxbPnwYmaNxhRtqh3RjnWFjNckduVy4CuYaZZXhuHjEYqTfuYdGDVHomHXA",
  "key4": "3pJeMY54af82hvjzs6bYGey7Cq2t8amAvGSnCDYY2gjEwRcCY3j8r5JKPbKHA7eQ9MKhx87CaMKAh4odueeUD3s1",
  "key5": "Secz25CWYoU4ayLWcJW7ar3LwnEo54sYXhSxACFAz4NBiXK9webeimvvnL4E81QNRPy5L9o5ZpQLVPtEy52k4Sk",
  "key6": "2XENUoWaKVMdskEfxubeaWjkFSkYVvVfDpdhrkDiLDEJRYjdTQeaNnXmhkUgiKH2GYmhm7HCZxmz2TmLAe6LZHAa",
  "key7": "3XKaWxckevX5n4dksHLLHpZmvDafix7icMxP6mjbCXJEDSNtmJAT8zxjCkbjycuZMMhR2w8zjQ3TS5AVpnL3KqWB",
  "key8": "osAxmq7mUHPFf7GtgyRscnFeAWQjcHbm1dQ1AiM7t8VouJr1nVCSRGUmiPJyUkZvwX9MFKrrnbf8bNHQ8aSU3pH",
  "key9": "2F9Wi4CZngUQReoTDnzDmpWfDD9LdDvzRmyMFGLhxdUvxLkggUypFBpkEk9nqV1YMxcpvDfVXB3mkXWehNVynuMs",
  "key10": "3csEjDDUbpzoeSsbVkHcpYCu43pXcQ8DaLJwskUbv1JsrtRt4Mj1ZPSsVpJiVJn7iLB6zm75WNzDzAeNCuY3GQKQ",
  "key11": "4BFhYFm598GZsspVufq28APkjzd2cTZsACe4MTuX3RsBojV92bsHzQJjXNmxFqeJW4R5THQuF9z89ovM1pWySeZJ",
  "key12": "4qdUoMKa4oLdA9qGabEC9GbSW3nCJoFaUE6WLME55u9XjZkQt2Yfr8yy7grbKLoXfeP9qoXk2GzcyMNVcazyTVui",
  "key13": "3BgMCe8ESmtRGUs3M29xrtQiSseEWUyoUnkvXrrak9kYaRjVYurgpRV4ZkcakBWRKb71HHGNg93nQ5SL1b5UjvcP",
  "key14": "Zqo5M1o5Eta7WrJ7KpAiGWxxLUrFaVHiLFiRq6wzqzEyWKTagiKvKE3QFTAHN3nGZWyDhcZpQHexppCpBaMzisk",
  "key15": "5fdjSmn3akU2wLyGVnc9vd5ZgjT4kUGeqhWZtguUyfE3jrNTKFFmLreHW2WZNhR73YRFuTJnPAXbNvwgvyntMyMD",
  "key16": "5WKNYetdKky1wC5ve652mjdkE9nwN3JcEwc7xY7pWXm9XUJuphCNQQP7Bpk3Kp1mEkVirWE2xfKdXDN6fnPFgp37",
  "key17": "44Bgrf5DFc2BY5HGCenY6t6D76sE1drqsQWg1XdSv7WkfUpYrmkBfQF2j2AsFHfCZ5a8yUcqXmrVmkJF1fgxNGgq",
  "key18": "5JTzYmgzJuhtDabCsT7UMYWKG8NZW4612NVC4mfaoY6rUHQpfpzHEGwxxZU3VjJNoK1gBiApyFEiCKKDrfFB4Q3T",
  "key19": "3ba5YtgVpj2rBqHRfX5TnbwG2ghQvQFnXtFH6zrnMbnu6pLVEufoyiEdbGWkNCrW18aEmDQN7Tuo472imHv2cSj7",
  "key20": "2Z4AE1Q1qMWJGU2oEd9MwXH9Lea3DaBHei9J1b8XBXfiuw4x6cqMYHUTpiXUzg4WfrR67CUMf95RvSrGbqtaVd7G",
  "key21": "3ctZtWtgUJweEdrF43skPf3QwNqAbL4tP9HQyJj26qizn6wzM2NibPYum5QkHjdAtCkfd186kxaGkTPcnxqZH87p",
  "key22": "5VWfYkEeVxmGNhZyjRhbP6uFAUyQNhzjVubxtgpv4R5DWDK34PE5myo34JYzEwqXSpBzjhRGejm49mhDyBXFurLj",
  "key23": "4gpqwVW1VUrvJdmzbnzK7egBeT7VKuqBMQ9r4RNZkMrfPSs6f3HA8SK4vYf4Dbwi2YGQ1HAmCQau8tmGZhPUft4j",
  "key24": "ijE953wbZry8ofXFC8FE1QPZSSt8BVNf3VvZfdEKJnUZ9yP6noL11XBhNA8aqRTrfkigLppY5XFaDsh9NDLcAUY",
  "key25": "4e5XMgLWowS1DRmvnuRU4GKD6ShP2p2EGq6WfskWuSKibaWtg4mEHcCztQW2WLUH7LEYy7bC9Mtqf4z849HUsaoA",
  "key26": "4hD82LgGJjQ3nepnpPFSwSX5tVzaFi83McTVNSRWoMXwtuGoxJm7dh37rLx4ZqSQvpQzE2tPXU1phZmKekybksST",
  "key27": "4NJaFYJeaQGPGBH328SDurPP4gbeHNkauVTG54jnwtjqiRjW8mW34VJjLnMnDuboEHBGbSA9CtiW89SbusWyV5ZK",
  "key28": "3cf24uReE9rYZfadNsjMNUeCPnvT18hHuWzsf2PmUC2evSNsDVWEFE5Upbed62iLMcyNtv76c3sKW1rHP8PB7Bv4",
  "key29": "3XmeDtvdALggz6KjdMnekY7EwFMbL4aR4FoRkrE8mL4hunkiF3ukbgBg87iKfuHZt1DxTk4xzfV6AHVXUp5mcfkz",
  "key30": "5BKEBW4YdLCrWWfh1eCfqJDx3q3nVZ2mgre1CxcekWANSQeeyqX1gDZReuAuEMpragQLM876fHdz2HG19hkCPTYZ",
  "key31": "A9B7MBLNHywMsThHztNFcLZVZvj9eNDnqdZ6NWjafUDPzS7Ha6dohwmgx3XhkCFmfthQbNPBEqnoTXFZfRqGRHK",
  "key32": "2VCbP5cUtocstMFuxrp45FTS8wFV7XpptLY73vcWRG4JD1bnpYzPHFVyZNJKmPC31wFZZMjMFbYdnFQnXvKEkphz"
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
