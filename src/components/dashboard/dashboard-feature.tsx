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
    "5QwbaRxdKNYacdMcZQvTudChiSWXnG4HH3dTBrmnReueN88FWwpvnj9qgFYGnwGSzk4LpLnVQvBjPFUdsSrHPLhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkxbEYWjHVHBqNjN3iZRNrxJyivZiEdMuiPEr9SEDs9YJci8LWngNANQ8xtzETZwEkAFw9hjqjHdV8XBJ9k89vc",
  "key1": "5JfouC4MtTdWP3bHHnJTqY1np2W2FQxAFodRuae7Ly9U8t4vMJrUvj3cWqRczsTCAyPps5xwYSPNWU1Fe8aMv6bP",
  "key2": "2G2hpgrGPLV8dANsQZtZFFwGXQ8Rg73vHK8UcA4zc6PJj8FdsijcpLaJRkVuHTvYeRhtKx8YXpRa1WWAGMLsnzNZ",
  "key3": "andX3idj6nRu85rreieq3ePLGf5UaHAnavLYGB2THJ3iRTSCS1Gg71PrceTk448XtgQBsU95TJ9rKXB31XcDAEm",
  "key4": "36K4yQLyevgToYGo7vtj8xAyxHhVsVLiPcGem9mooUtn4w5uH3Rhd9FcWqMEQ1GrLttXGF6cLkAKUfQ6ENihzmoQ",
  "key5": "61ebDWo1tUKEFgeQooMCtPRSJ78pAermCxmo8q1fqZy6zNPmmarg8eCnf3grPVvRgNsNzwWWotDkf8QdVbwfQAuq",
  "key6": "3v1uCKNn4NFQ6R9mpVirwfuzvPvtq9PNvScnX5yN6vSFyHg24QfqMQrdAYgB5YzEvypkNNiZZkLrButDJ4YqrfdM",
  "key7": "5XFvBHLUVoFa3uCU9t9cdNmebhUADnm118foohcyvGhuGLGpFcujV5TYd5Caa8fXXbNP1yuBw8zNWbqSVQED8Hwe",
  "key8": "66BQNAbY4V2bJoHz5EmDV2xYELSoaGzWb4nCA5gdQWLyeD6Bf1gCZ7qb8Gea7GrBFCrFjXUJjev6J3qTvbRJH87C",
  "key9": "2BqXJkRFADhk5FX6B3KpWTfsJM82iB8B5WmE5EHztcPmTjV5wxrxFDw14f2UuZDJEnDL1wWN2ZDnpDYVhbnjXMTt",
  "key10": "Yv6R2wZjc9Lg2ZRjqXfNRxwWL34Nm8w5T6eeT5UZKappBeWwfV28GhHU2zdKcV2zK5hQVHUyNTHZQtw9gAfPJmX",
  "key11": "E3qU2xhMCwbiG1awSziFuKBktHs2LnJwrntaouHmPPfuaSprAEeLYD7Nkqo7ZUXxgoqEaUpqt1kD2M56qx92ot3",
  "key12": "3ZyjpocsF6N1Qj3jzxB63HJAiAATZUnqXsHYm9FkDphVkgrWqpLUXaENbWdsFLh8ogqGeSXXb5pfq3VAfEeLM7tx",
  "key13": "5LvP9iU9szSrU5muKXurZnDZj7G7qyMsftgHN1YxJGeeAkQ9Ue6xvYMgPtgDc4DMsrvbHhywqg8AbjXqLBvN9qE3",
  "key14": "ibs5EsLMEzREGAxJ7idJqMXeJk4FNRWvt9F2NNqHNZTyGqoR9YcVtT8r8N2cEesQ3ykqGVHFEVJDGyK6ANrgjcK",
  "key15": "2hkNBARpLgCzdZsy31TtftVVV73kaLfcGYoVoMpV5Lh2nd3ngL7Zyy6xquREamyAFSzindQJXKX6uG3DvzjK9rnR",
  "key16": "21m78HGe99f5z8pMSsUtQnrM9vi4XdKjtGVZwTpJPktJwcKDvvBR6bQnEq72UGzCgWjnT5wQ8LFetdq615uhs2BN",
  "key17": "67qasS6rZrvpH5Xbrm5YCjyH1JMp1gEnjrqGuvdMwNUaChphVQQF3DnD2dv2wSgsVZ7vj9pczRcMpXYCenfnAxJb",
  "key18": "2vtDgBNeAkrMNcqy6nEg7gyxBJ1w6V1qfHaCuwBVYtAvrsV96pJf8JEwwW8LUFAAbkU2R9bfssVdhFLhVRKt49No",
  "key19": "3ZDB4o9ZPENK5gEH2fUmVWQXs5qrgHRZJeypK2jeNs69vSYW8MTsTecNQ6FhobFe8Jt4tx9kc16eC1BhcoXnNE6r",
  "key20": "47ijHiQHWdqxCKJVFLzPfh3bQYrzUV7we12yQdNggDFEfafkQ3CTyowbzKyittN9BFNgxN165zxS6YbsWG7jfZ6o",
  "key21": "3CGajcqhS41xXoTpvwQGtJZdv66sG93VWRWri4YXyyLSm95vwAFA5WtYYtt98VQbZ33rTAUY5qwnaBXLBpBcaPVY",
  "key22": "foPDc4TByssFkXrPMPJs64Pr4wy8dAMgHsEubS8xUDXh3QT3VkuoLpp5qFHtk165XP1x9Q8PCwKzWtentgZ54Qx",
  "key23": "4sHKbeZ4FEZ56z5L15nrbhasV6hdHqRnMx8hDEqxef2au3JazJaAHHThjvf7HLRQww9LMzz8H8dEy2ed1BzSEt6a",
  "key24": "3buFrSTB2EHBf4Fz4ooRs3TqNnJM1pD8tjtZiHxeBPGgWbjGF1dCuxCnDhdwckHP2H5SGTkvoYF3JhH6jfnqSkre",
  "key25": "5ksJDv5yucYyzkd7oBaSc9Hs8fKb358NdULKxYVsxgcncC2cWUGAwsWZxkEyfmocTXfEo1BXti6Tjzb5Lk1b1TKT",
  "key26": "3vLmeVCoUAopdqH2cNerhNh5R2wSEw3NnBKtkfewfeYhabHboLSkY58NY2ZniVpSMjSJ1ZtVDEDs2RktoSdZpQ3X",
  "key27": "4kbW7Bkue8WNvw4gLJSGBhr6F1QpnbuLYU6RYfTP7LahUhGtrNJamMTQBd52sahiRdFVyzEBTydCvZEixtj1iWNd",
  "key28": "4WwQgpkT93j3hiUeNykjCB4GforWDNedtZEdeN4mnxqEyMAeF7ZkHNsMqAprUyd6PVe8m15J39ZvhXqV4DQ73eAh",
  "key29": "4wLepxqiXwH6tbLZnu3p9LgMEgs9ikVwUnRZRFj4fwTGHmZasui6yKkoaBfgwc1SCsMwUUg7a2Mb3nZ3oyU1TC6n",
  "key30": "22GfkwhZSEbTtG3YmzzgEUcHzcRBWNQ73qhjyB1bzbCZCbjJJ3jsAigETd9AdGyBmFDfK4ioov24vvVBqwhoEtpY",
  "key31": "4REEhZkvCj3C8VTVU6c3cpbwawVF3ByfrPutuqdS5R9E1Xk4ju4APNwwzjP6YeN67C9m3Pt1U2aZkw4B7DAaGSVq",
  "key32": "5ASB4Btu62bJ5qVE7VVrzVv9ykK5UGFyfFEteqv4Me5RDFi8diztXteaQ5G6ZxFm8L8rx6ijP1G7S4qxpzXjCE55",
  "key33": "54mEggWyBVD7cLmYtuV9GbFyuuqEhmsKFkMs36KnUdA9gMAGrK3Kt388PSbrXCi1T6JQqGnrmHP31vHCs33TLTVM",
  "key34": "3jYoxVZioJkUATk3v69fjaWuj1h2Koj4S9JrSnaq6Vs9jF2n2EM8bAHxLh7DpFF1qkhRqZ7UriSW41HGfjxEGUog",
  "key35": "5RwevUYbRnPuY3JjU69adZDj3AK8vBTyzhK6Di6TUKHT524kv4zSeXLQmv4JzooPyBArJNTMkRz49w3pUvd6DWV3",
  "key36": "4Jx1osNwF5BicU5C4xLQQdQRo2BzvRLqjpaZTCe6wUuT4dB1cJKV88pqn7cYn2Uxg9xN9F6ggyS4djFRH3TxnzJM",
  "key37": "2rrGVsESzjYCDZNY6jJbep5gPB5gGGc3fXXCNH7ALNVdygjm1C1yX4jPADo1BHmynHgzGY8cUq9iekuvCS1Jnunu"
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
