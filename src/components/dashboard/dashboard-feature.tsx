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
    "4Z7r9baWtxtz8cUxkToW8c46rVf9AraY5cZLDxv716yMwmNVzjRydMUpai6LnmUh7vQQY6oEZHcYbrrfQfmoKzar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7BNpX1ygQaG7z8y5zF9ZU1hKZnpqnkNzRctBfK7HLD3asA3hDXUzQm7kU4uuHpoMDQpTYCVzG6DRan7G8cjcny",
  "key1": "3efa926hqaMm7x1zbTkJHb5qDkUfmeiCsCa5X8Bd9EyEeQCTTXtLhgsye8eGfM1TVpxhEKYgPP5APu9uTop7BGDY",
  "key2": "3VVDGn4C6CmwUjnH8nuzrfWvHA6wBbabTVps9MpZvg4gahrAbf3QMFgqKjoR1f6MoGZKPc86BQHbhJuBW9KZN5kU",
  "key3": "vyHGErB8MgiDS2gNm4pLWXzaTqTv394EbwE1UkZVpRQoGswEZpGsrpLpNBi8bh9TT6f2h8T2uRRpzGiitUL6H7A",
  "key4": "4B1Fw8gvWoBrg8ULER53toCaKJkg4bmpaG9vCxD6zGom4CXAfytMokz3gD4umKcYzCCWa98F9W4vjvav8fSKkrZa",
  "key5": "iWjMu2EQA5TmtGbNGY84ESpmwRHianEH76QcY2vorD7insf2dokeaZtCJU8okrciUJxdZaCsGMJuvPevBD8YGLy",
  "key6": "27jeaQMxZXzYUsrMr3Bh6mMJr5mrwijC3qLMiZ3CABBV5aziPEGLx6sZaPoiHhiLWGWTGSYC6QpMnK5GXEfoVGU4",
  "key7": "62A2w4HFapY28TtyJi3NnypMmACQeqiM2eF7gn6jE7sM61Q6sDLiGfK5gppxgVSzw5Puh5vgqRZzrunMqukFK7SW",
  "key8": "4jzbSCTxCz2foPwzr2xFugRVRS39UuSo9nyT1Stcb6WgnYPsg3bD8P2WfdnZ5AU3UqL4NbC6MqQnLgG9NURNhETp",
  "key9": "4fSANWndokopW6KogrFJgvtUuA8NDmFf1J2YVk3n3UjVLMEejxSsQtqX7RGRWkt8RftYUSHfaJMVgUuxzsEXMejy",
  "key10": "4UVTniWuH4k3zujdCSuqibSJzhc1QqijHWXodArn7VAZ9DsxBqPr9gSqXSfaVC2rmx5iCXBX9GFSp6KRomfstUnz",
  "key11": "2AwoD8GdrgkRt4SGRPEMkE6ERMJnuquNiGDBKTy3oC9e2qBeX9CbG36cybLj3nosRrvvBaKAfDZwvBmcV9PFEgan",
  "key12": "QN6wotj6SoaXtWUv5QhAySZQ8KdopCnUAZGQD52v88kBKhnRsMzebeJeMAWQwf6QfSQHzv9tg9Fu1jmjfRnyieZ",
  "key13": "2SXhA8pQVxBnwAXmaUkzPqYHiVroFZJ25JhpW74D811gzqbXg4nBYuuvy8hGENKXS9WeK4vFSLUi8XQFwBJ5wwEo",
  "key14": "2w7g1N5v8Na6e4Jyw8Lwc8DMrAqVzhnZ8XACpRxAugi5dEUT6r7f835a2wiKoyD1wuWwrjJYHASUVUWzCgytYsvQ",
  "key15": "4vfKEAmU1gdtWM49H5UkHeyXwJG7pPVk9rG9cGTFZESyfWoGhiYiz3mqTHfTyFk7Ss6yZsETdSuBN6neqqM1u5Q6",
  "key16": "2gBkc5RJtY96tjvKwqwqhxLU2bdMuqgHZs14iUDctRSvkNQ3eHh6gV1KXNnYEhiAcg1Y9nPLBKaVFsNMD3hiALWW",
  "key17": "5sKbL4HcQbWRda4RJnVbyP9QtR2j94xsArM5v5ckx3DYNgPLVxHH1z14gKULeWoqLKUWe6ViED3gSRkeZZSSKfsc",
  "key18": "3XNEonLmE8t3vFyb3pVyPgpfk9zrdqAcUTVWszjL1RyG42eNd2T521xwfnhL14XjyZeQsiojKLLDmnAyryTvbyz6",
  "key19": "4Xo22qNsbqx6Xu3RL9XT4a4mdynWA85KYB3Lx7EsEnttujQyUeGZkd3ExmVumWiGMeSmJeZXwnEXzoChakWmHXHp",
  "key20": "r7WbZHpdFe1tEVaEf3MbcHfNiAP8why2ZsD8NGBgqz1Pg2gpW3jTxC3FS7BfoZfst4D2skkAQJH7cukyWFuNZvp",
  "key21": "33uvffBD71tedSsszzMN224v8HYRiRCBuTXQGsMFcuWZUGVZ7XZMg4AzrrwV867qMAiGJqR9YD6KusxfN2C5ZM8S",
  "key22": "z7pvZYqt7Q6RpNcxLVtk3LCTuQvzT5pNL3kH6PvXcNTo2LusjY34LvCVSW695BzvMF7qnvHP4jKxj1wGYhdbJiz",
  "key23": "5y1jaE8URbM3FnqRBRxJK4LLpUZXDMbASSNZNcAzcZoYUYC6UnAHLJxpr5zqwWRfEEUEgbz4D4dQjF83BR1obeBZ",
  "key24": "2Eq7hQ3KMa6o4iVfqnEeHzDk7j2EdZP8XoCaxLzNoCa4iqtA5yNn4oJkbNxbp1o6nuRdaaQqcC6Lnr4A5AfQCEvY",
  "key25": "Jtg4agMzMxXC66c2ChFDHu5nk8J7FmPYx6YuNwsyA3z6WhgaX5T6B3jtgDKwZNmmC2V9ZuiccUghZ57zyE6CfRu",
  "key26": "3zWJbe2pQ6FsN6TDCNCR4QhyYKe2YBpUGNUDtEs9pbuvSgHdsX6VWeUsV4RTUBXyHENG6zNsU9A6ufYW5fPHRu3G",
  "key27": "2Tbotj6JsLuLvkp5Jtxswv7i45CYjo3HMvcaUCMWvaxU9chDH4k2DSW9uQpei6n4Zzs26bekgNTPgo4sQXMQAA6z"
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
