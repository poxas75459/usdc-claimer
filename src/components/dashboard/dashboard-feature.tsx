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
    "B1o3mZ8NFhWcpA13rnKFmozhUongEvyzB5gQUuAeMeVYZUnubUoLohH7d5zLzJCn9fkP3P2jwTRUttDz3oJPAbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QqUkvhUwXKFdz6Q5JBu3MWom8z9Dqx468dDBxR9JUDH86eLBGxeoGRWj2nZcB7vPy31zC2tJf1TLn5W4eoh482b",
  "key1": "onopssx1k8pgAG5snXYWA2LG55HLYZcmGppDsUqsHaCUshGvNxen3CvcGXtAyRBN24HPkiGXRBphzv7fAUxkwtB",
  "key2": "5pWuJGedS8UdzSn5RqcVwWKJS26fmwPuxQ5gXNAKLtVAhGgfXKuxJergTLgKA5UQe5T9bexgzxUGmbihGrrvrZQe",
  "key3": "3yBk5s83vNdWrhoUCcn8xHVWMdfXzYdQn9VRsvv5ikKibpwqtBmBuovQsM724unC39H8Cq7XT1aAXH7bhTqyqwLD",
  "key4": "4iDzQjmfTmAVA7DGmxvGtR317VifKuvScoapsYC1M2nmbJSRrFCCbKciAvQWTHnVyF76TXDPUvK2jyNkimKhPBEy",
  "key5": "5roozDDMVsPPKbCf5gVewLWi3sLeMT9reh7TCzb8EFY7RrcHxeR4T2wn1gsAVNVww9Yj6d7gxi4yVLf3w8SHo2oR",
  "key6": "5QmemVXg67yFYJFDZzAVA1JT9pGuLsckjLEX7H7pVk5cLgWZVEYPEmcV6LDyf4JsveP8SHknEizyYqKfNUfggLZj",
  "key7": "5HsRZCELiwWwVxwxspiXM3wkhixqfLx3EWeVK4ug3xhsKEjFtFPDw88DgerAevTTY57JTNMJBAUj2sk3kmhU9uGZ",
  "key8": "2qXXzo9qcJy7sYZKRLGV8ERbkQA9omxrciaoXg5sfia7iswZv4QdFXKp6CA1hZ9xdRiumc6T447vkhzFGWHrbD5P",
  "key9": "3jfGUDhjXsRfsAULyCjMVSryyk96ffU7rXKGVdDrgQFNZge9fXV2FNnX4HokGHAM6iRe2LT34DtjMi9vn287gjsv",
  "key10": "3Nvk36fARLeQwF7yrAyR2MSantUmicrakRzPz4JBaMFYjFnbozpyaAq2vnD9TAR7jMu2cu9sDgBG44hMH8KwVc8N",
  "key11": "64thuHcr5Cd6zoSMDPJgpuXnk1WC2cm1qStZjQX86V8ezxziWaxPq6uvH4WWAdDSXt17mghyjx1LEsSPhfSeC6jx",
  "key12": "p8Q7p3sjpom87G9wXQiGZCx9r8pfrPKFKfmuUAjLqRw48JxV38phVtTqqSTRzB3w6pCVz9WX9xHuwVktT6NLhXj",
  "key13": "4fvyyLwQivfSC45qeX9v1ec1E7jPMugtaTPZVVdPhZNUwD7cKeRghRtHdMPA7RZx2hXAMND6BC9sSf2c4EWmw3wP",
  "key14": "3f1gK86AD6aVaU8KZors9mH74AGeznN3C27q6Ty7odwSsmQ2nN46saVdMBFW9ggTGu19tQzpeNvdBEuK9B6JCi6k",
  "key15": "9Yy4Tvh63js9xcLvScBjgkPGCmj4HByn4YyKmjyw49mbCP6549c6dWwENJZgD72jignvunZzJFzAmQdXNsQqZdv",
  "key16": "2HXrhFQTNVWCsyPxRPVD9d3BcrFGf6dmYg8td41fpoGBQZbsgG9UKrKw87KxWBTMC645gihtJC3ZsJePN33osbQc",
  "key17": "2Y9aKERNZ3cJySXiuvSY95ByHZmCffZ5PrZjy7pLejfRqCuzVgmNgiFWYktJMSmWaa46wGmaft8nh564gEDehmuk",
  "key18": "2vY2BsEQC1YBBZJhE6BHbDeMe8RXX1NdF2CYQ3ov3UGByzvBkDaVmhmmovdkruZYRH9Ec5DReYdg8u6czPFK4JYh",
  "key19": "2YmFT5fCrpKo33Hy6yaJUWYnUgvCTAX7hoSpddtVtwpuaGL6ghHWeUc5UyGFQswARdaMikygBhHA92ncA1MrJBjL",
  "key20": "2cbWC2rpTPYocCzWNZkvq6QgjdtSwT3ZhXxWzGvqWPAmQjKQNZPntRCv4v8utnoTeKUgHeDcY27An1kSYCzQWYvS",
  "key21": "4eEgm5d9hjkot7G4GZVaKoZ3mXd8F8f5694MBxCeuaP8EyqLM6Ccvtcd1fgbngLgVx4Bd1HJcsafmtfe1Xd7CJ38",
  "key22": "5tF7jKK6Qcg6pNEoFGrKsBjCKzZxeKyRdg8dnFQn4zNZ5hZJt535X5kPnbHJsce6NrZaU8xWyVUg7Tg1s7axkNqV",
  "key23": "4dCLEAw6SW5nriZQamwMc9yy7ZtPViud5MRDg44vyk77hVhzcXfmL9C1GRdDB5dKEExSw8HSjLRzaRLDfvJYjHA9",
  "key24": "38UaEuWrpXQpHZ79yRpSWKFZCugFwqe2Ux9oWrKwzDGwsdPNNDGVfDFDCAdzD6iq4YLQiMJ5LhSysgwvy1wvtiSr",
  "key25": "5FDLiQvJg2XKrx8Cz51o56ummBWkMdFzs7QNsTqAxQxMPHp4S7Shiog3yHKJfjDijLUBeaqXHPv76SPE8tykiKdY",
  "key26": "3m4w1W87w1jRm34wAkXicKFUsHiUpJURJYL33WyTXJEU8fMZYmsStwxsNbP4PBbS9LXHLEzvoDspa4toQckn935p",
  "key27": "4Sw2jfZffRPyc2bLiefNUkNmf1pwyMrtUVUEZBmr1mQkZfBJRiceBJVpvK6s9SJ3DwbDDATcqshy7mo7BxXCnHuS",
  "key28": "3FZL2KG3dViZx2gPoXaEhmbQ34kr7K2Qa2SsnTJHmcdpgQZ6oVDYecT2j4CxNJcyiqpvhN5RQ7zWijQtiPEVkzQo",
  "key29": "3afposCvNimL6VBqdBvpaCeL56zf6S7uARk8E97MU77f6MNjJW6X2uAwELr8qQ3K2b5FtiWKP8vdjesn9t6TNimh"
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
