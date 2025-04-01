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
    "2jpsKZ9PbEAn8yLMBgTM2eMmAJ4VyznkNpiEbNd9QcBacTb962xbabM3XtQGrpwWaCLmhWruLYi8Ms73eXJj1YSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cnsq5gTbYWVAUYa2N19tDAZgbY3cCiTgYVViwSsmoBFyTASm8QybLbzX6nF4ukQgEwXVGC1iXSsvovNHSwXfnz",
  "key1": "5szTkf3SLYA9fS5K1uNdoCjR6ZysNpwpJAGkjkzvenqxBvT32SyW4Bu8K6L5x6zg3iJW73CA21jSC4nUUZHDQGgo",
  "key2": "4R8md5KYBhxvY8DYaAdLekpXkaDzdcyy3NDBMoHBiq1ztGRcWoAK5Gvxqd9HcQnsXBxsvufdGGrz3MXaHn1ZdSk7",
  "key3": "41Srb4WfrL9JdCq3WR4zkDTtX2h52M8m5QAs6hMAeA7s5PHvk5FUfeggRGrCzwHwtqrp7E3GqR8XoRme7jKtR78B",
  "key4": "5Mjv3LcZj2JMu9kZFNuZUwzM5U97Hio4Vj5RQjoxivDU2F612ziQA5KKkKmn4ZfhJSfY49c3sZH6cSNaAUGjKfDp",
  "key5": "e1HxVRagqUyQuLVEc9g4Z9gs1w2h3zA8FWs7xabjQiAfuJUmg8rnSdHSAMcxNnkZ2QWxBx4R7gwRNcbHqr1qcu5",
  "key6": "2rqskuXD47WUH9RQTFvf7tEGxRMZW3mFfRXsk1xJBRV5MQh7w8CFMFEMRfk67D33gqX1Z7RWXR4KbNT69PGcqJWT",
  "key7": "4TeaeYEEztpTmuft4KevTCPSXsLYQUyQWFyTWH3s3CiRoQkxGGVw5cebG3No1Y9vqGfhhc8dPQUeam4LXUWDctwX",
  "key8": "4mtfKAR2muqv9w4YdD9Y88VVQbT8bu1MptFMBuDxfEvKqbxBXKTKg8DoLf831nCBWnBQQKKxaVXBK4Nn7bUFf893",
  "key9": "44FciXHACXJsadbndfw2nHniqR1ksFWuzAFL3ctAmx3Ujvh1qnDfpCztaatxaMb6Y98QrN6ZG6xPL5z1b9uQjtcc",
  "key10": "5Qfm7VVjYeK4Q8NDQ9TunLwkNEZLzKETVTu4WsoXnhucn2KhjRWvbcmL4ZgatA3eyFSGcJAoWQaE4hek5vqEhinh",
  "key11": "4eg5P68K9U2azQZFxvNj3MWrRmiqyxUdevXVcRTzRzptSDru2eLMiwixsCNELi3n9kBLnQxuKFhgKkswzGYvNMy4",
  "key12": "2nsMZNtD1sbH5sFvDzvXNw4T43eBpunDy5EPUXPgEnUjCqN9tRGLLDjvL8u43rXnPUEHf79woYDqUPFFa4zqWEVQ",
  "key13": "2iSNGoM7w7SugrYCPUadyDtF2Qid5TLHNDRJ3aappYGfNhJHB6wBnfcDdp1nC6xmGK4QyEbot2k5SJzVsww29LUu",
  "key14": "4HpPctut8CLL1yYGqkqejuRJQcHMevdjhdvLBzXct1N6w1DxcbXfiRHBKEFbr9bg2riSsAStZu4HF2RxEYj3QNte",
  "key15": "5XJvRudr5fPcUXx87RQgdeJ55hTuWLJ5YChdDGiD9BbMwQMnrPSJtiZLtTERoe9riU3UaqwmXtkEG2zCFCoSeKZj",
  "key16": "4FUxuxsjrzTH8USfD6Lf9BmWiFfGRuzyXA2ZghsGhRnBeSofX3TqWQHGGxiqo4QPXJu2fNVaqbdgERKNgWxRwcdu",
  "key17": "3EZPaWxCCmL6Wdt3w89135vKzRWuEoNhbXNs9kB5dsVPy7tzbRH7UcubPC8AfAWzTTg8iN2mZ6SFvuZjQ5jktFy9",
  "key18": "4q73DwysUpmbJABmhs7aGRnENiAA7AhyfVZPw8M6aFaf2HVVBqGSJBuKav3CmSHpjUqKNkAPpYzLXgiLihH17NWD",
  "key19": "34Mvs2fJPpR7MKZsGYC5D1MVMLEbAmA9r9T4kb3GEeKst54WqpAVfvJJPprmsaXxeW9widSYny4cgG7CqPxaCvrr",
  "key20": "5eLdfPNAKbLccL9EqTecsvG5gNs9jRZQxxYpCYDzLmGCLsntgXZQUrTtxE1WDqM1LKdunAmcY4jV2vktDy15zh6d",
  "key21": "5hwr6kHnUbTQ1iWP4AYxyqWuDixsAkBzi8iFxW8rKAQrUrkdC7zTM3E75oCNsND3en5Na3YLDRQEpMksLKNgVjKj",
  "key22": "2Erb3BrKGzCBQKbLPnULbJr5EHHiEf8ruJVzg32UE9XUHzDsBdM3GZm18cRDUHDKdVwKqXjXAycDCD6wBXqG7CEP",
  "key23": "Lx8Gyre58Mx5uBhqTE5MW1Mbd7mCHjWinnEkN6j45F9nscg36Ldd4JBt7D6fWCqyDphE5ceEn7SzB1NqQkv3PL8",
  "key24": "2irm5AYGHqQVhgULoWKZhVttdmaQD1eMtnaF8t84kGUze2zDWaPnAgR1Dw59sqqwgSGit2CBEJ3TeUu9qeHRZa3n",
  "key25": "4gVmP5WhTDbgKoGSYer4wXGAo2XsgDc5bwL3WJSG99CK74hBtE6xA6xhjKBQCXAEtZhPkyc2qywbwwQATDuerMvG",
  "key26": "59Wq7cm1Tcy9GESdVdoQpHb9Nqzm3MA2JWrjxLWcwKU2eTktyxGnQaaSaxUbmKEY5yuk2XBJ4Rex6PvWwm3Q8HT2",
  "key27": "3hgzehGECxAJe2Muv8K8sMF1Vq1ZeoD4ygiHcAbUJ2Nv3vFBSv1DHjjnFi8Z8neUhLYLab3SZfcPDwdBFq5i3kNy",
  "key28": "372TnbV9eH4mamLUe5Dja4VopTPrENSUcQrWbq6G3xDzpAR5ATLniazgcaH7LbwTcGBZei5X7JGrr9cTySemRXiB",
  "key29": "3x1n6GtrJGAbLU3mFwuEnVwjcc8mxQLTAFh86sayyvWfzqoBgPYkbpwaUbQwTc9BmCtzfLvkRsoEVUTkQsMFSqkP",
  "key30": "4cPoVhb6DmqTSggzN3172dtSfrqzRbF5zM1UpfsVeYesWLE5ozQoqzgJ8Asyv2mxSptRe5cKbhGUSN2DCypUqjFY",
  "key31": "2EYHhm1DiEQnosNFhqeCzJvhRwMjPx4KD6DWCizEDVBpvJTA7cgQXBoMXKTH24VTBtgv64ZhAAEjRqp1sPCryD2k",
  "key32": "5wNMkzqHnraPo3xhVMtzFUKYZrbiFTCq4LLiagPzfnXgqUH7Qt4fHiWT63K8t69E2Jghyp9jDHSgeR2zcUXV8CGH"
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
