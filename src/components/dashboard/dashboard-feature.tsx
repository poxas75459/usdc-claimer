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
    "2h4PUq7SqAzX74aJ8fALrHZfagTc2W4i1QEYSx7F7EW42rCfwWvkQq7LLiNrp3mCwHXgwtsSJjMcsKJ8izHbgYQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdUCHqQNsgrNazHzLTfFafqoJV2gNFiSLt46e2QcwijD1DsM9GcWaKSsvktT5vkbvE1MbbenZjT3PzkzSvMe5P7",
  "key1": "2jVkoCy7HEzbeck7KtE125y6J8hsruYamKMwX3FHgsg2hdwCUAf1WcbA8UocfgCzCfvGTBgzGug1G5kf15kJSv1x",
  "key2": "Wm36R9312H3j9QGN33qQdtQm88sRwXpz5fuRYgALeNg2FbCAwZhK3jXuALY2YiGshPBrsJWbyWNkWztefc6soHn",
  "key3": "2Mp5NmqPt8NG1HQvnK2J3YwwinvMeGgg7p5fJsjMo65qXhb22KLDNs6P5FiTBfdFchkazDcmjZ93j5PHT8EKmtwj",
  "key4": "2K5nSNs6rbwoFT4yxZ5admy9Hc7UEgJf4PRDdDXYuoCQAymJx7hJSkxtZpbAM9C6JraFUNK4m5WcCY7pKNJFyZ4F",
  "key5": "48fdXYtRsGP6eyHrVR3mRMWWkRwtXvGmYTRP1QwUJTvAE9BSGijtb9FzpYnVn3zsSifNfK6aQXEDkawUNcr3iszL",
  "key6": "4ZNV3HeM82b34UMv5duoCUTUnxq7qG4ZqcDqPKJC8BGK2qh6kHSuUw3rRFFPyw9NcZXasyLkfy1XzgTSc6AyM94B",
  "key7": "jgguD9Pt2EWHVsfszf9d1XNjv5hyJrRVKuT4ovyctj6ttLNLVZHsmpxXSGTPySqQysswz6brEDjTipsh35efgij",
  "key8": "5mYuAegViuzNf1KTqvS9JmB2PGPbhDkT91WC8ii9sGrEZC67zsgk47DTkEqHtN3dcRKMQkxynDu9k14yb4HmMsDx",
  "key9": "4RJQXwGAySagKmfN5BKLmYyMqmaGsn8o9vaAxpZ8SNqYXbGymeA3ShTvbMms5TB7PiDdUv8mZ3ST1rSonzEzG6HX",
  "key10": "58tznFYr22xApqNCHZLkKzPxUxkfJgSUhBLgDLHBwHnSnKuCVJvbChMkMU6oNQmLgPzZci4gHeZWc225dKXuvUoN",
  "key11": "2SFeGDJMMjMJRGG6HTmZ8EPWLDsqp6KsTb9to3eA2534pPeTtow7vaUgeeKqSaqezhP97BCDpH7qTBrqYBKDLczQ",
  "key12": "2wAAA73tgCJTgxbTWgPFM5aXKLjpzBUbaMyZrmZ4L3FzDYjptxvswfRZ9YY63MjwdKBSHjk5vpYejUojn3vTBZCt",
  "key13": "2vLVWuGHPeufbCKEmLZ3UJuVdBbeQMYosckp1HMejusMX4sBQGEDs4vz4pDQvfHPxjS811N2QaQk7vqkEQx6damM",
  "key14": "projzo5NsmZsessYgHycECA9oJR3VhmMbKRCfJuTYJgPSgUKsNoujVaPPJazdxfhhkEd4eRmSzBmryec6AEAbqy",
  "key15": "43oRC7C6rT6AdyY6y8igzMEvF5AdmhpHa2NxE4hmjtfyzQMzSSLvSHhijfVaYK791vKFe9HgsL2ahV7cFrRhMjqB",
  "key16": "5aRVkQGop8BMKVQRAfvHbUzp1VDQQcdqt1inX1TvK8uRXeWdowC2odUMssht4r7hfKk28TW5thYL5VVJfLc434J3",
  "key17": "desqbXxGoHV6t5drNEJKDmsR3rCwV4MPfpZzX5gcsnhiRsnabgVm1azQo6np9LRHjxL7DoCA9YYtvMBr5X5mhZT",
  "key18": "4GnJ37sPgE5KtjZfjRFZg4LPCYWTw9zZTVeX6yUUH65ZXW2bhevohq3cZWxaEfDHzeBWhxiUCPAyZY6Uj6iVMsuP",
  "key19": "4m7Wn4TX13y9npQ2vpVEmKqQSp85X5dRhL6rUiEBwg5Yg3f1JAYZDiEnPRjRuN4nJ8xi9Zkpuf9WwG5b9LU4ghB3",
  "key20": "3PtEjn2vn16h4tXZFMkyi4dExCTFZtB2mjFkKAR4meJcG4EkMgztBU8synXypKGLkaiH2EfB8GDA6H9y7i9iEeLw",
  "key21": "3mJGq3HcRJ9GD6HdwfGNSvmnLgPmz6uW5UAYnQst6aygwJWGx9hRoLTenBo5sKrsx3YeHjZ6uBFSnhTRypZp4huY",
  "key22": "4FwTmbCdUcoH8LLJjnomNhSJCMXSFpr8MWhqogc5Xft25dhqtMXSABqjC3CM5QM1YBgYhZzjtrp2oZyvqkWQ65F4",
  "key23": "4aGoKZXGsZhgveHwv5wSLZPkyFwfrDSjcYnayWX3fAbZjqMKAkZ5tWQewosS7jSQLGZ6EBFPGeEHZjeS3QCVz48x",
  "key24": "iyRKYqX9yn37gxSZgC23T3UVKwP5a71rY4ovmhxhjxJbNpQFHpmbeuGKHX5bCC77f27uE2coPr6kF9ziKQ7CWKN",
  "key25": "Piszy5Wi2Kn9qX6pKpNWE41S2C7W5MkaPKhphy6YmtHk75uHpDpPXyNx1NNuPHCEt8JzRUV9FFcreSgiLmKCeaM",
  "key26": "4Kd5NTLDWpds6RJsobRffip4EU4oGG2KJtjWwSmK3o11edkDuo57wjqKUtir9aNx4YRQJEbEaKqP9FYMJV8FPFAT",
  "key27": "2LdYhLKpEfRhRn9nERtsSEomSYH6LPzLtEG7sVqWrTMTkj9TbrwQjyv2XzbYpjf3FcQDKg4t1ToG3ViVc41p93Yv",
  "key28": "2vK3KD5mAqcVo6FLNoaFYoT1VkQYSoqET3cPxjxZNRDPHrbZGQAamjtpB5cHhvYusQigNaTALMSn9BKapbLLwpp7",
  "key29": "4Vrf7G8URP77eei5WT66kt2jagDno5Y4ztimEm4St1BLd7Th2TcZMx5RTGkBUC4c2PPFY3rap2novr7z4xbQ6dSt",
  "key30": "2y8ryAQdcKRGfxzVUmjcRHNjqeKquzB2B57NmvVbc5DneueJcMktMFtiaQJN3vRDpQNtQgsKvffiPTXTgWkcsNJR",
  "key31": "2aiPh1UoCjz52nKm763TJfPCqRZ38bCuX9RzGXms2k2X4ZKC1ytdppELptSBNFnq7w34jVJAEkGQKwWo5z69397e",
  "key32": "4DrxTFexFryZQhKcAGDQYTXNw47MxG4VtaMD66tUDJFvMASjHuXF5PXPgG77ercEiWRyxatEvMn4jMqwsBkYQo7z",
  "key33": "4gXpyQ8EjsGVeEAQ7HZ324mGVfiPPbTjVU2e244SgSXKVtkA89UgtJfHPxfnB5SgCzcQC16xMonzgoa8CB8qTms5",
  "key34": "64HXi6PqAGR1uv6YzGDw3ZXHdYQutkfxstWHtqSK1wrx1ptohsUThowPtrz4kvUZKNTGWguojmdq8eTAR5w97iXK",
  "key35": "4fEDxMfCnxm26R1UNzANe9BR3dD3m4uwopUoENfBwTgaGEdvq76FvQ6KuaD3AJapKvVAjzFsGwkmAjgbyXXorbnX",
  "key36": "2TkCjakUeoUFzCv1WxRUETSQ8Novru6ssBG17k4q5w8PyhzzsYzJd7RDzqWSJVaWqREh4Wb72R1rsbidr6Hfjfgf",
  "key37": "41u3YKzn2beGPvKeq26xrB1F695j4mPuwbDNeauYn5VHzSz2h7mobXef4oFEQkHR6LjhvAowMFeRVxM8YYdx5VrD",
  "key38": "4VcFzNNV5KtZVtQPTSjkHknMnErE7NQQ9sHHn2hbUmzDmJcDSCDmHUnEeF9err62JQf7D2sVWCvsBXihAAKa7uWq",
  "key39": "344zWmNfq8J7KcJAoi6tk8U8SFrMVaSWjTSyGk7cECiEeQz7NVDnorJDy5mB2yxkiTewDnv4Kz4RKU1YwVPHUKco",
  "key40": "3qMaMi66b2MqbhvkDwnrP5wsJ32GYVcY1jmeExYyo3uJwvSAoVbT3rABMnY1M8RKxkzjqQRHiW2BjGCexLrogPLz"
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
