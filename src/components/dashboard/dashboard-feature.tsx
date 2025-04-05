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
    "2ojodSytwFCYzwxCQjCPawGJcidMWkxwdWbYougQNfX1WDJNt4FRcvKeRrzpAXfnf7U1yNH1Rq83TBW4eBQfSGsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ats4ae9gWYe8rpCoonoKqJgUbbhdVkDZt1KQcqq77txcxoCdbsFnS87itcndLMSdLMEDqaWMVXs28qwZkTUTA7f",
  "key1": "5hYUvgDCQ1QZisiB61YGArdnksP3fdGhLNChTxbS8zpEST8M3UG3aGo83gowLejdLibnCGQnJAwGmSJgQwaXWgEi",
  "key2": "3Cb7MqXsGHT8cnasNqAgUwkG54QkfXZm78v1HuRUrmBfcZcF761c9Tbb7ehA9nXutDdweLEwWotK2hVn4YbLv5s8",
  "key3": "2Vcmm13Ky19Zrpbz3MB6QxJ7nsueg1xc6XXnUuGsGAarRyWxjw2Vh9MuxHzZ99VcjDdDD89yxANFAvpTLKBwPgRj",
  "key4": "5bPy7LXkNEyggXZeonRs8JdmD5cShMxasdGKBTZGN6o9d8V3kwx8Q6LVkko1aNmyEFGmg4sXZwsTdotkrmQkzZ2P",
  "key5": "4pLrf4icHTuccX1DZi2fmZe4JkzPKNhw53KznP8kc7TYTnAzvr29RBwugrB1udCC3R46QudYwg8MWS7HySkjjDTS",
  "key6": "3cGRDy58eE4bBPVhBTgJZ5EukMYFEx9ma8vcgU3aCA7CzMbm3VSmQpCrVKT39mkYuWU8W6L6yKung5CzEHcDKCZK",
  "key7": "5xto5SwcR1UjsAPY4HF9GBA68edE9CJVGobYppZJiobUaRoPTT7wcN4j37SqYJPXmKZGKMJjZADeTTiRHBzdPWcx",
  "key8": "57MAdTR9fdfCEmF8x7KhXK4pbrqEqDiZEMXc2LEeTdiRumWbTHdsvU9toSy7ttfeDpMHnARGKYzuSFDkNk31fJph",
  "key9": "4jukrFFqvkhpospmYxmzHbZwPQzYX7fadrMFy18iQkVXKVWk1iJbtRt7XJb9SH6kdE7zXEUDjwkEPM8dDdiT63GE",
  "key10": "3nCyjJ5go1V7TwQYqTUHq2so7q5yvhJQdkNMssuvxeXuZF1xyc13WkBnEPWF637PvaDsfwV3pqPUXx5WzAbenqPP",
  "key11": "3VvfoXMv4qfofHT3jTJoqTwhJz57JNQKmwko5Rp7F9H8cedPjogWvcQMbtjNJwRyDBEF84HTqfdNXMesV7MGfvq1",
  "key12": "5cBGcgWh5fZXiijURdKRu6hUhLfmiZnnjEjpq4DGvFWdZdMiGewTqYKLGnSyYVWG2tYv9kY7grZCGHNR98gdA9Sd",
  "key13": "5m3PcinEP1EKZNB72suPDbMyN7CHiKFpDJBzXboUjR34pcsVSyWdJFQ1YD34RBBySp2m3TpAv2j14Fm7n315GGTz",
  "key14": "riKtDNQpsbzCCGETNnWus44T1o5YjRV3EXpouRhAPnwiThM5ijAWiwNq5fMe2N6QK76HJCohSuhqb3TM4PPwAii",
  "key15": "62zmpQyvm1nTLPXnaQASu7zMZrTecqKSKJ5oCvdCWmQTMs5ZBbfdSjCU74aVo1hxcsRhnfjdgZnxU35EhhTeEy8q",
  "key16": "3vBNHN3iLiafmFCnQcJgjLfJ1v2e6SeSc4H7v5DC4ej31YorT14Yotz74TM1DVeJDaGD5Nae9HCi1TLs77qdBuEa",
  "key17": "iVsSmdCd16XEgh8Ctyk7HWJcDPtPm5pnCMr2c4djthur97U61uNrBL95a6MEmZae8ciTmNgC8kjYGyH7PQKm3jM",
  "key18": "6449fZbaAHAD3Pt7niijQV5Nk6dPV9qwftpzsxQ4saiQYc5WyFT8jNTsJ5gPgGjG86h3Trk1aWmZszEWrCGecEER",
  "key19": "3hauwFGXDePqWVwArtZzEesT4XKXNbnFiCizwFiHY11FYxUm6H7ouWPaxTfYmGPkNBj4PKoUn35sNowR8s8HbjPw",
  "key20": "5THBUHpYwnys5CLnKviXX4XH5Ggwr3JehPAGpet1bxwA6SNujKeczfSGSNhCRV3EFfLBpcRHsB5AZwhXt8PnuStn",
  "key21": "9nkf2p4Uo5JCwe2R8HjxD6s62wsc6vnxudAzbw1iiN58cKFGrhtCMYEQAvg4zccbtUXDB9qUVCyTPAVU6G6gsCL",
  "key22": "22M7fm41ibLyiEu5awq2oMHnApQpnDxHtv2cPRz9KxN9SHUURDTT9N46gVt76aA4GA4YLj8TDEfNPVETePSsUV1Y",
  "key23": "2riQzeYEAiwsZUgJhtzXZJBYaMyp7WrSG4qim9RUwUsybMEDpHAjx74FiDf128uuXE9dxXw5WK4oiEp1jzgDbUof",
  "key24": "5mPPVHiAsfSXF2QBmYFBEhYkmQsUq3sxrqMkPG9Y2KyMH81vipFDyqyZsXNeL5QrJRQMkWoDhCttPbtqCLULdGjq",
  "key25": "M3Vf8xjkQUShVfur22e6YNDqxu3qyg9PpgEq71pvH3HsqoAYqcPBTQaiw3eMBD8bEQLp5xxN41Kdbasbb48RcTT",
  "key26": "Peag7Yj65atdqV8hBFFCMo7D4XKc2Q6hhmUu4LuWzEZizaGfiPXY8in8npEAUzjkAuFGb47u5LzWuLUPC5eSUVC",
  "key27": "EB3UPQrCfuc7SrrESCWUJvg6KqZvtmNa2wscyTdXEvJtBzvCLq2Vy7c6CuPkwZ5GYRz8jEQn2yemhtANGweYRod",
  "key28": "4rf6tRp9wQLeU9ZxCCDzymDvq3QsXd7ya11pGN8nW3s75Gih38ccNFcohVa34c4jA4UY6hdnYUj5Jg8Tes6NYB6y",
  "key29": "42QVmREQ8U1LZNRw2NQW8EwJvunEgLpLrwNeqFd7PgFkpeKpX574NWgACYWN1yRtM89EvF5qymUVn5oowAdDVy2z",
  "key30": "5gCc6egaBmZdCL6xc8DjhEzQj5qdDJS3Dh5Vu9ww2SoeE4U7jeMmGfGzBbpae8JmDsmg3ziDuh84bwQXexKKVNbb",
  "key31": "2VAKtYQ8XrNia1A64iWpwNx6wFC2RY9Ghr6cb13UB38sQT8BAZKVxTHiY9ayhKNNi1jVCtWUmMrXLg3KDiWkd2tb",
  "key32": "2PMh5haBBJWmVDBsptqUddMkUvu47p4A6h6wU1QnPfrTMdFM6gwjmu96fUGUv81syDeGP3nKSW2VdMJah1nRJK1w",
  "key33": "44PQU2Mq1THu7sRczGzh3xwwEw75tpV3cL4dSZDLgpQJj8zqm7Ffa2DgsVpmi8Pih3pWu3r8HuxCyenng66ghZvs",
  "key34": "2EcyE1X96tu1jtnfWE6YMdPyHTD313TCM1vzbxYTpmHvB1nbNUtFK9TjqfVuZPaSbHwYwV8enqQkupdq8KM2xrei",
  "key35": "44vrcQWXns3VVb1fysmrZ2FRsSjjeKFsn8dvLURRoxfPkJZrqXk3J2Y8Jn377pc9RhYe9VncQsPxDgtiYhiE3fvp",
  "key36": "4NP1vLzcosbGKtJZVgCFUC47ZL6GfuZhEjB4zg5XUZLbkXc9mXgSiJvhCerLHW6vmH5QTL5UznyYcXAk9FHwFkN2",
  "key37": "5xdfNdAh4zU63quLU446Tud89xAjrhdhJ8ciYLKfy5SXjJHCRQLytcNVGbhefwovPNVCm5FpPpYhTv24hVSrY5bP",
  "key38": "63ZG6P4CKwGpo7bDEwefV5ZwK7EKyHYgVRRw9Z48cUyePd3jVNU6MkcJ5xtZqBhYCGD4qxzjerWpaLJYGY4rBi63",
  "key39": "4bVk5WWWKqm2VdDWKQ9mDQVqtcvnCBnGY8UNfiXvY5jU8FxuMr4gid7wd1TwXagTBpfVEJmThHxQXQsu7jiTtUge"
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
