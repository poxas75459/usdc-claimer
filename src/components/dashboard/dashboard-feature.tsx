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
    "CH5CxEFi3MY1erQS2RguybMVKa49o4ifcuoirJfkYg72GPLJL7unwAThqHV2TkoaZrdNDkXPaGHfSsLpCs4hBqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWDpo6gSycYJ85LoxrmaZ8nebDgCbRKSEeg6Hq528X2SW2KzriiV22rMzbhTkRJfb3YRpynT99SuTYU1auVWc23",
  "key1": "4iiKAVrJZah3gaGT2JUUxdY4UwSAKmgMiU8jZfRvXGKHwPRZUsgSahMLptQSVYkLE9o3jPtV6tEJQyj6fMFEH2yd",
  "key2": "56UmLa1EU981pzEDM3KXZr1H1z8LcAmxaQWKqpVz8ggm91TxHPgXD4Fr7HLm54i7XMKnmn67Vn5jenTjh2txWg8A",
  "key3": "4VELVL6hPWs4uHn7UHMzhbVojTm88TsnFRJATfmKZoCGhy9HzfH6q1P1eoutmXzpFY72VQb2wLTJ7HmqMhHrpZbS",
  "key4": "2VUc6F6RTun8Hi8cVR6NeQnBZraQyQNHwzCeMxmGRbnEx7XRCm26HTaycqe2w4z14jHsPDdtwuLfKdAXTTruepGQ",
  "key5": "3pks86PykVo38TKtuiuob1q3t8aPHya8ezDG6sbL3yDzyqtVUR9LhpMiJu4hcCZVv9qD39xLzz1qUqbDSWjahqCx",
  "key6": "4MiHw1rFU5iRxe87MbusPQPyw5R3dnC2FtXtTKE4iJwJrUY9c9FSxCSMwvTgbdQ2x3BTKP1waC624hnnQmpYrRfQ",
  "key7": "5TMzxh27YfAV6gMqJjA1uAsAtkpv493uGMgxwqgUUN3tsHj4ad4hNZLYSqgAo8QwjrKAGz2j5KAudB573bdLEDpB",
  "key8": "2PtBAi6jZx8uUBEg81hst5Qi3ZJonnPR4JHeBgRLuEsjRWgMbbeVgZccPAJaaNCM7bPyCByvSBBz6wqHHhMZ8LYg",
  "key9": "2ADUoWkzfKynhRVu3KWsseivMiZhDxgHpvusqTX696QLNNCbWA8GEL9SNXaVpo3jo3mDdLxN8uP5RSYdFkb56itq",
  "key10": "5cX3ojviPUXjdRv6KquEJSHkXskRYT1NvAFdMaoxpnHBC46edyWY8qhUV1uJU6qr2heMHFgH1mxa121Fpdr8wFFz",
  "key11": "2ZprRe4Rz2sgbFE6yehk5za94z3jGwsGzbUCSZgezaBUBrFWcyfajJaVABoCrgeUoTB5hWra1v5wLApAhTVEfyqz",
  "key12": "2QwDpY4auan6PVbuCzCGSYh1zXVJsj9z8bksFP1pwvfEdhGWjRn68iFsqjaYwHmEyEFrGvujybM1UiQp3SF86J6",
  "key13": "4Gw2KqjNBqenU6ZcemwzU5yjpWo83DbiTWWZKDPCFQFTRUZzQWu57oGnRYB2uYfZ1q8XxB3DwYhUkiLXmFMR1JuL",
  "key14": "3Qbmze7T45jmwPbX3kgotMnsgK818qm88r2TJjSoTtjfwHguL9dfAXSefaQf5HzjogXxQkGKbaNKnQ88Gtx3fYvB",
  "key15": "4qRbw6U9Eo4fBqBbtEPLUEqsBsXgphCtiAs4vj1Tk1eUszqP9bvKwwxFrDcw4PJETrTxUdbhTzjMJHqpmttqJ97a",
  "key16": "2fpv8K8XNiEyskjtvmSdUAG29BkVF2ZwQL3Rsju46r1kGtPe74qtmqv9iHDaAGV3Fr98UX5DZppmrw9pAhZvVNxW",
  "key17": "5ZijTkjRGSemLj7ZNpazvyaPYDqsM3txxB5whfqzRRkLg8R4A9XPniApZEnmNcgVF6C74huqyUXnrvWP2D1riLJg",
  "key18": "4CLUg9N8B89aN7mrjT7nZRyE9GVU9epXvjSDE4J4yM8N3fSLeZpjeCzvw8JNMNNKpdDJuTfwAQuLS12VtoogfnkM",
  "key19": "2AUmN9TX6y9uDXa3yhrjLfDyQjM8gvieKjvNfuGjjrjxxrnUB7XBbAGTVeeFQ3o87tkUCS96FJWQ9U1TnyY5rBnu",
  "key20": "35jNgQiyR137H7SGhzRBQmGVSckETpoAR3S1jYXvdYJ3VwTxMaVjYpHQFA19paYoeJP5eULZNeZJe3oCjFyU1k5K",
  "key21": "5NvKcRXBp8qNktQvgB9UeMjnq7Kp6AP4zUG8CeN6BiFz9k1MEW9YDvHeXed86HtREJ98wKoJvG9TzrXNAr8458P",
  "key22": "5VJy7uzyo6DQ6DBWc5w2y7zzomPuLQBs1qjRHTcDcKvgAxyt9jZn9g2yBFhi7M7nGXppMokVdLVvvC1RpPc9wwCp",
  "key23": "myhJcz9GKDaNJF1zQkd3yUTC64KsA3e4izcSR2msXiWQyYVL7j7fR7hYnLBRkLBvSwqfGShcyHAzZShUiabs54W",
  "key24": "5vsct5TnYjCehtXhNea51C69QMVXVdz6RaFWp5swfGKVaGfnLid4KpdX4LFLpi2eDBirBLdxDvKPMNMvj3jc3SHo"
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
