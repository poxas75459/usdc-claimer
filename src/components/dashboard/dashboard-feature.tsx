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
    "kGA4fNa9V4pyrfycz41WWo2Z8QWUdSSj4U2ysqtU2WZDBTcJSEnedN3Z4cNQLUsbsk6at5igns4Jpkp81ZJQpbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYcT5qySKasaPbU4gj6eUr5AArSE3RxDsnKUZJ3arN6wjRNmiz6vKmQJY8L252A1NXi5aUKhhPtYsj3hbk4R3AW",
  "key1": "2bXQPJvGp4FeYkdGWJgfk2optX2QB2bHkXHdv5iddeiXoBmn6EQjrwfH9iP5y1YhmjDRi9dNTJnhzP7r2bRdiZ3U",
  "key2": "6b52L633F8C5SFgAerCj8SQnK7eYkFXaEcXQKFuvAE1ajVXyiceFyFy9sLbZ1uWaCuJvgqHWE9azjUFFo5Zp3Nn",
  "key3": "apudYskqd5iTQBXQTbyJHxztfA1XPFZzLm5ip6FmWTbbcQLCZLgEDBcHiiscm7WCH9WcfC2fygePEEFu3rMoJ24",
  "key4": "u33BcFv9hRJqSwNton5R7k6fNb9VqoE6ctcZ4KUkfjAMdXMnMCxbf67NxYWj47CTcs3hRAC114NJRdCQPoDhCHf",
  "key5": "2v9Y6vbdWQLbQSS5qzyP3idRBBiYaARYvRQ231ZwB9mbx3XghjcE5qA9fZmKcYmAatrTjqEqJ1wxNxJePCgXb3BK",
  "key6": "4Yzo6amZSaCMJG4Jh7DhtG1nQLNUzANWZL18Xwo8UJNgabepNEBpkJ3KZ3iE1h1WbXMRoWt8QhB5PbWEvv6d7UKt",
  "key7": "RZTCFKr6PyR6GMpu6P1tS4XgVYo8PgJ8j4vRNEUaex3v7jE6MNad3RYqDZ8HaQDvkPwqE2wBugGJy5Vhe3ohChi",
  "key8": "3UfJVTGedhKbDhBTR2Xcb8j89BjJy2BCBrztc6Qir5W8UgtgnENXSQCaM8Gtew4PPnz4PG9HGbVZfni4VQfmn5si",
  "key9": "2m3RThoHL4Bez57AqsEZMNpCxzitghi6yWMAPWrQjoM9DW7HMTKmEQdjQYyZC4dECP4aua71YFTCdXC6zzB72Psw",
  "key10": "2PDsaBBV7WP7GzQ6n4LzXfgtMJ1J3kPBezZb7uhj2qirWCPZ5v8aGbdyikvFJFxRwgqyVSA4aptQtTzTcpruGnjA",
  "key11": "32WYURSUb3RoMWTAVhbDofPj33SnZzxuaadWebZCy5CvTeZkrgW4im5CMK8whWHHiTBANJjxwxb8fHtnvUyxQU6Q",
  "key12": "2Jhiyw666pkazgpYt3b1xLaX2gC9GF2umeQkcdPhW8MzTWRBDUpGu5xhhnto9RMMU3oaMntF4JS7dRtU6t3tu1CX",
  "key13": "2yNkQ25KcBurV9tzvFQdFgv5WM2bnS7jVkU1kthD1mvjhD2QgM8yTyMQ49WFjsZzrsTeVzGfovHyyqcJCeg8wNs6",
  "key14": "2GvrcTCyN79G94rkaes5BFtzcAJjUA6okRVFTMcXcJc8cH1eChuAV6YcKS4a4FEYWRtQRkHDLu5tomVZCpbcoPx2",
  "key15": "627CZ6gUBCfVYwY13gzVkFXp6piLrqsm4ezydJqpum7bJ3W1s1oGXN2iZ8kWzSpcXA91jJFR9qYM7Rm57fQGYoA5",
  "key16": "4cbAsk4PZAYgLBUButRPNxwUwSmPjNZAV3wxDyehRA2UvKCQAPeHRZjTxhoop5hHmRThfn6cWg6FGXfEPXLRimUy",
  "key17": "5oSVbc2ygDMjGhoFhBjACqDu5TV1bLqbDtVwAwpdbi38jivL3rzgYdFwJYs5WxD5jVJwuLM4hC3fU46vuP4kMpgm",
  "key18": "ZCQ9pfZA1nqLGCZy6i2CXQ6gYK6feMNN9qU9CdoznpJWf2gBewCy8WzvdbGC65H3iWHpgzgM4ZnbtecViaXpfW8",
  "key19": "5R6vqspJSbDvQXJzyWeLqyVR5ZjovB1JEH2CfznoEbwDc2jqdeeMVUpp7DhZEuQkyTDT2VjWd2JymMdWcvymL7Jx",
  "key20": "4gYGCzaoTf7TqxP8R9y5FjXE3smM1ee1e5BxpFPtnC9z4ngtsoCjVHPVkdj1UKpDcegjCG2vdNAdv1Tf19oPXJTr",
  "key21": "5gYkZxiGdjWCrJ6nTn3V74Z6WbR27AgjPSeB3NwFCTd5kwSa6zK9URUeCX6AbtHALCk3kqGjox6cPb4z1NwTcJMG",
  "key22": "5UbspkNGao6i3bVivaFViVcG2wYtfdFguimXqXkhHEc3ijRiQZUp1h6EbjT3EtNNomA17gY9NmkGccg2hktJr6oH",
  "key23": "3xcj7b4mYmc8qFerDKsBWrUCmFVsoqUN6GMT452KeZimNyRPxRLs4ijGswXbMFVxMNuE8MbGQcrovjogozbGtmRH",
  "key24": "2taupisr95xD1sAv3mnit9CFXqRgkfkfjVR4T8V2WCi8is7By8BNUH8isj4McBnxSSGX1w7iELiQYYAJ2gRTwS9L",
  "key25": "5E8csSpcyAcUJZFx5zUQZCwSswSoXvVybhcuepA1nFhf4ebTkGbY9H2ku96cgS1FpknznFfzcn8g2vfVcZgsY2aX"
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
