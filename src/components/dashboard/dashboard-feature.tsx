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
    "3ewamagcASVN7QhuJX4JHDWkEcyfAZmyFxk3D9aweLKfpgJagLc139aKha5wdnNr1csamTZV6wV4i64fkNF1wexx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQ3mCBi9AdVisg6Dp5FktgoJ9iYzHtpaDJc6zkZiHjqJihkqjXEByqweUEC8t9Poau9cuBwmRzNutErfumJfnRT",
  "key1": "Tn57EXSdmo4Lk5P1G48MmgaroXyqYXDZVLUYZ5Lh5qozuPE6nZZkw1jfmyfmwR7Vc1NoewPrA3NeotxsbaR7K9i",
  "key2": "5PoXB2yY2hJdk85ueNuYFXtCzEboZ23NkLc5SoP8PMDXCYZcVVoXF7JXhi8qmu6cGmF1hnfxYLDPixmTDdYSiZ4c",
  "key3": "3iQqUNTFR7L2vs8oKZUm7S5Rc9wHE4UCF6vDPCSSUg9WZuwHXBgMJFj3DgzgCuqYi5fecNbYvmUao6NNv6LzLHnt",
  "key4": "3crA2xLpuRDDAypB5CNXGL448n6qFNSbnngpdvq3NkjxGKwXowKRnvn3CUKrCu1nWLSxDaWntaHE93BTYoeKcHzP",
  "key5": "3JkMgtE22ajSGsn8dZUJ5ZXEQz82gGfTMe61yiCMskS2f7xQkBxpaebkohD8ZS5TQdy17B8kJEQAe97a66fDo4De",
  "key6": "2HSt1om1AXZdtpHfwNq7zx3E6qhbbxPvZQgSie4RMi5QE3V2XjZdLcjuKazvC7a5FrHYrNGxJQXDx4UvYtp52T9x",
  "key7": "3UYMRcYXbStMuhkiwsDJtnDWRwYpdgW7qS4R9iBiRXYUYLP9fqg1Lo1uy4QW2dnGAJQ5C4qZtXAURAtKMxj4hJED",
  "key8": "5619JMfgbk8gJkEDwrVjSPMgcPskgP7bLzwKtYjX7rgRAawPnGHpWpzZGm8P9JoeTyhox1zXVfMakMyr6b4H7Lve",
  "key9": "3irqDZXD1PdbDii4yJfUFmYBipVBg11efV7fBrAZRKoNxu7x6Aap55fMv3kCFz3wyDnc95hi41hhAXEJezjumr6H",
  "key10": "i5qVsi3FoxZo1cqkjNriQ2cx7SssmRKuog5z3Q4orAeQkUjdc6LPMxBthe6uFJ6XMCWryPg81KhgHd6SuYYr1yz",
  "key11": "2Vtxu1mKABV3T6E9FV4wMFCpycAkDTGJohzdrkf1xRKTLKrsHwJzF77LMBLSYvgyQME3xxF6XHaJrsRgpCAvTDjd",
  "key12": "gXXCtoiqT1MV1zHCfN26z8pHEdNtQKU4WNGYRyf39wjnLCpLZrgfA7v8zcHojneQfnc4CU4E7idFGo5b6j5FqWc",
  "key13": "22jG89tT8tqnX6WV6bvHhREy9cUbU7iQ1PHUV4XciZ7TzfgJG3quQP4Xm7Um5FNMnHGEezBg5DaGNz8h3f3fua24",
  "key14": "3KbhJ7HpKJbRJsDjqWsEkyQJ1E75itFMGjRg6eGDxSQQVrjV2gzftFUykFHVP4koymyjGthbVvLvqNknDM1Ybxer",
  "key15": "4wiUv6gh6SudDpX54AHGpMd2wGEWULW5acyZUM5tx1SyFdJjMynxXChUjSn3x5uVKP2X6m3WP2XLmhtAA6ZUk96u",
  "key16": "2mgcWayi8gz8EehgpMHQfyV67qbtLdw2TiG3ni9pkHwH3UDjCZDyXVqatDES7uMc541gJWpcmj6JZ4RqaH625dfR",
  "key17": "3ASFEQghPXQ1ppGvmaubpsYf6DeWatCme344RYWG7PmuR7xPMfPNKfNLRiJc2GxpJzZKbLSYtyGTehKAe1ZVn2kf",
  "key18": "5oqgX33kN8tu4rbWWV8QddPNAGfUNt4pmrxexpeoiGooemXK5zWq8H5RjLrfAEfzZLtTFV3p12L61925Y68f2uUs",
  "key19": "3ZykS6q3n2KATRPCu59LRySBHDLrwP8PELxN6Nab5ESD3VJCGwQgxznmf2sp1Pi2cdhbz79GHzt5jZVkPJhT2cRe",
  "key20": "4WqqXG7kg2zDNs1PYg6voKcmfepdWpm9SMYvf3R4k9b3ni2chUGZNnfkxD3pvZ29ZNy8RFHjw9TcvFFninLUxZLc",
  "key21": "2bMvDM6iUvSv2KFdaPaN1wpg3cGZh2185oV1YWs6b3kUFj2qEELeDqdUkTUE5jRUrLjAGTFtwa5P7cDodYgtAjhM",
  "key22": "4RwzmGHqj84326Gaf7i8wPiVjvrXtfPcYXMegrtWryibiH29FP2MejyY27UjjJ5B3UhxmGQyHt1EWDrmUdKgLedM",
  "key23": "2Lk1fFrfRDjvQWe5i57PBTpUmH1w2KcxzdNeNWY69eXihFGJprUsN9dsvvzqiHDAWGp7oKwwPs82bKtbGe1BkU9w",
  "key24": "2DKtbEABaJQhYjVP1C5PMVnZW6HqfhVA1FMyzoad5wdJHNcw1u5XKZqgyHQRRX2sMVLq8CEzRvNGKDttnvNgWsQX",
  "key25": "n7hXcQScMoG5WbFpoKjNwu26Kc28RhXpa111LV4xbpzY5kxWarRhW8XoYZ7EiLwmnSxGSDTqjrNLXL2YsZ984B3",
  "key26": "53zoaqShaQY98gxCKP1Buc4gg1RFnKyz9AZ57N1UGgmkdHasUk2C7VqWQvCKnQVgMWAqK7ZtxtYsHzd4iCjyHrJm",
  "key27": "5V1M3XV1eZiiyMyYa7bL6U3tDsAPmFi6co5yNk9Y6bTjGh3TvKmR6BVKxUXA2KxZJ9fLFeh5DNnUkkUuqBtEP8Wh",
  "key28": "XjsWyiiwRxGvUHLPo6AHASo7HxWEXQjf1Hr5ZLVDnufS9i2bVWDxk2zxMPzAyzyxiWhhqDsBxSBNYm2mb9twJXu",
  "key29": "yn4QBpwPoNqyCtJdmJ9BS2AXekDMN9cR4PzHaMMbqaLZ4HG7Xm1jBSipNLnM5PYvQpySpLqLkXd2mPs61cTiYXr",
  "key30": "4Pqm6QinDVJFzdi32WDCpuZozAkhzqaiFoxgVwYqLJbECKZiMTyUvtJ9PMibQWtZQp2X81WUn8asezPLRRKx4AN5",
  "key31": "5WtZ7oxMkDV5UPiABjsDEqnUAkkiRbdNLEJEufptHtBqYfjepgTaiJMLa4gXnw6DRtNqEXGPer4aHxHDFS4A4rB3",
  "key32": "55kj9YtySKqaUm5WjZhvCjTRucaWrRZsAxDNzpbra47tNttPEkGr38zM2DrkxEjqh1wVurgRUBJ6ZZQyzyaEittv",
  "key33": "3cJe1KmNBaMMYCubg9Y6bvRLmQN7b98WtAAtE2EnujZ8m8iaRkAYbVUctVdeCVit7wH8mJp3xA2xhEb2UynKyYRZ",
  "key34": "4gfsA2eD7oy5ZjR4S3fW37nPKFNiSKfMSEpdPTQfmi4eKCsparzWxg7wmEFRgXJ5sY1vhan5EBj5D2FQLTcSHt6V",
  "key35": "4zvW9aJ7X8gjk4i88R41d9BU5stg92369qUdu5bhYh1rhkSZtXYkzL8qQCQEYNGkJ7n6en5AdAhfwRwbrSUk55RF",
  "key36": "vDcbJdL1s9h2AJr9gU58wqRH6TqqvPPauVjnEDAif2AjDAiKGhdHoChgYoyUs7t9bb8TQT8zNfz8GYsUxyAN82o",
  "key37": "pbQ14GaoDYaSJjze4GdDVk9Ha6TpTEHjyVGPW2zZgjrMvYyrJGXqVermHU4AWbyaiYAxAyseiW9Hnh9NGnofUJA",
  "key38": "4Snt5txXWTKYW7FtPWrr1kSi6h81YadcBfm75eYzJVCWXJVMJim5MHsY9hdYXoBbvpJxUEqisWBzsE2TxB5wHPjf",
  "key39": "5txSF85Jmqp6sWsF5rUYUGQ6QQrhbZt98duJpN3NXVjnT9PMYraXwjxHjuGTwu1eQNFKjZACm6D8ZhGrZWydcVZd"
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
