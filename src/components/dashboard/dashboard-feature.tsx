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
    "2XWK3hh8D9b3ognHCdKKqC1HwgVn2Ju6LF9ouLH62oqkgaxxRqcfDVD6bZnyG6CoRoUvRyKX6HVMdG9ERqfqpTrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LFhYJpgjETbETLveN7TM8Su5pgLsQpjRsWfj6RvwjUY8ZUSC76dkuRoh5LKttWH656PQmmDqhzhKJE4EkBGVV9u",
  "key1": "8W93FYqRb6YKuPEKNww1k5AsdosQupdU1x3qy8rScicqD6TZ5pyjSgxJa5fhZaMcLrfZMgyrru2mBLt4dQ8hQFF",
  "key2": "5YrdHfYzYMYnnYFR8t91dRX3ezeY6TffnmR7cTkQ1jDKbUTtgTn8j9vxSCqWjE4DG4aGZz6wn1gpL1ubtxv86KMh",
  "key3": "2SNeG9ku5JCUW8QLtFS4PYht88WoNRMRWbYbgvcAEaDMgKZGsn9YraW3kuQFaHMvTPwH17PjxPw4M89nYnrx1Nz2",
  "key4": "5TDHQuMzVsat6tvFuav5fg7HTzy2D9t7wvCQi54X9fSsRLQykVTUXtMYrgPSqyZ25gtqPLjv7566LcBXbMPn2QUg",
  "key5": "66uuwYcseDN8aGLM1NFavzkyzUYMrNowgjC3JSCRX8g5d8Ji3uhTx4G36zNB9iuZsepZXfWkKVhueNh1ak2KZm7W",
  "key6": "5oF2FpUFAuqXnSfR2PyADxNWPLQNsHWegQfC7ry89urhteHLxnuv5yvdK2ybyCT3b3fawAE2eaU9KqX4qhnhTbPU",
  "key7": "ceEtX36EsfKtZMjSHBsqQbndqoymXryWRbgAqm9dPiQ1ekhVpqtHx6RfzRy5kz3JCR5tSkSm3gcr3NEd9yTHqci",
  "key8": "32qoroDDYomhFZyH18pLFegC4cNMNTJj9s8BJJnBeUHCGHkWvmR2iLCQSj1GfqywZy8MMg55D6Fx5LKgCVpNCR3m",
  "key9": "25Kw9HpfqPiqFyDvP8e7SibSesC5WdT9Tg4gTGC8pBm1bzex8CGZ7a8wzT7aPbxQT1Gkm9eC98rGFeDivrjoFnkv",
  "key10": "64dmuxXArQwpJUdYi9jdC1XV2MXauDPNeUicvk4PjWv8HuXiGsG68JzbaDxYnRYYzfFCLNb7tAevtYCqjU4TY6PQ",
  "key11": "2RMyP7eieYiCrJBZ6dyimUTvEJ1V3oswgvewHHmcjzLDeR1JiUxEMMMcywZZRpyot5DZuMmjNRFAkrvVWbc124mo",
  "key12": "363bwbcRDX81uSzCF4RAjimYRpdz1GzZtnrdTgVxw2cSxnKshsVt5oewk3LFwMRiwr65vSgTTBfnC6nk1C4RzowG",
  "key13": "4BjXhZrLuaMEok1qwo8vaHwseqRt5SowTgHHHmjmuutdGewJtS5rx3pQXfJJwAMPsPLzG7fqGoXMvQs76tncYKNC",
  "key14": "5AfujHdvb3wpH9gsbvhSuJFb9qKwEQW3MSu72Q9je8M6nf21HHyQJ6jnRPD9GqJTFmcuspxh4bEUnYD1WSdupACh",
  "key15": "5sBFRwjErTmcRwdL8PVErTfLyDSpaw2gEUUz3KcEJiYnwWY2VxXVJAwDBVi4WMNLZ6frduT8r8C7kbqKkuufF7uH",
  "key16": "4ZGuypQcdSUJcjX11SL3Nxba13B4ozxjypHFQc1pYhURQ1fyS9aNXNSCH53JEeeLnHHnoJtzAtm94tJ1GLU8E6Bf",
  "key17": "42LbhihAnJXHfDSbuAMQDwkajhvEAx1o7CV5MMyoznQeTmKAfoxWaFZY2aT4dYKd4V7JbJ3yNcn3fKTazDiFWNSU",
  "key18": "2LUYoePa5wfdRuHqRCzr1BBsqFWNizf3wbm3NmsKuXHpgDqDktR5mVsxwq2jMJTDCqdsmtS2HM8wDGXT6oXqLsm3",
  "key19": "2aWmdGDLrAE5ztJDz6WxC9JmqnVsiEdshmsE11oJUhyGbgDEBqaK5fVR76MAHMViyfRweEFFLVNANdAeKnE5kKxB",
  "key20": "253zxnqS4iPigrxDusKn1CRcomAgbyepSunaKNobSP24hrC98UxFsH5uLKASAi2nY2bTBxA3SAjueHMgpLVHZ9GW",
  "key21": "Cy83maexxETPn1giXwQbm8Uiy19mRfteY2oHdXYBYMRnudfjvsy1XSYgdM84RmEpE5qYQ8deoGgQrWycgB4xEMf",
  "key22": "MVLeHfKCEcejZEhMDiqAAgSB6s9AbVUqCUQSaan9xzmV516cesXjHF3wmVpWb2BxmoMmnqf5aKxb1tsWQ3s7DUi",
  "key23": "23RXRWsjT4pmJeSj6WwQoLG9svGzbBUoS83i6785p6w2XrrjCrnLAok4bVD5QVRHZ3S6pbA6zo7JBJJYCmAH8abS",
  "key24": "49pin1Xh85rHNXg4vBzsKk2AsvALw8LisffLy4zgEDBjjFFq8QYJDEECFxy8MkavUwBwRdNVmmaBVScEUqUYhLC",
  "key25": "3LjJ5QctDY5yLNgeazWBATo4NNnD4NopUfoQUf4BYYiDVWEcxyDQjYWjPY6uUVNUfCY2zVtF4qdQFYn9eEZwQxbY",
  "key26": "HDBXEhfHMD69yCe7dqhbu6mEv1UER3s9ADMdpW44V7mL88xgk29K1oMDT2t1YNUGrBd17FgPWc9Bq54tJ2e737H",
  "key27": "3UbhjLM2YbAovws8t6XXVbJLnKfTw8RXgowtJNoCzv71mNxBvTKepGKzK5VfKvcZy8dVdusM1YpnxkcEEhcsgBoL",
  "key28": "2qYy9DDBaazrSJAHkuYbEREvq3PpZrrJaF9XBJGv24puTo9VZPtb7W3yrnmSoTx7gygPdSKjW2y6gSMR8dJZ7Eqw"
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
