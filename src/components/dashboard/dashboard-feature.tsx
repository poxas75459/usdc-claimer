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
    "JpWukV3qn61aPpPQvf5YSmJM8o9kqVjqZp3W15ZRCmDr3mfNDgGAGDog3bVMwToW8rnn9r39USDnbTUgXnMNrpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yswECxJCrSDHMoub4C7UK111JMrSJ9oMaU4ttWhyAz4qkTy68e5rsv7m5Vhx6ochrYTSXjk2SokmMrmzun7enwf",
  "key1": "2Ntc8FoGHy76yUjL7nBWLXsrmScuRjeMcySa8XyxVq8cJhmcx1vZQSGDhqnpeSNCczMqLEtUFACCwfG9zmoWqCPB",
  "key2": "5mxdCcd2z8ekEujk5HStGnNu9KN6KdJqyWPKVzXYtuZE6qfoMGo6xtswjpZmTahjgaPej5DAzRYQo59gbJn1izsg",
  "key3": "2zATK74nbgWXfjt1NdPzvsHceVFQNGHUPcFoC7VnJoQEHXq6KM4Mgn7fAVE69hkDv4UZQQV8rcqszjQhHKu1Q9cK",
  "key4": "621azhZTyCbmmw1UTecq8cgvKcoAE2QwBEirCwpjkoa3ZPxJgDaYnLc6E6jGXYkyJFiFSoCixmrYEfEBnneGF6sZ",
  "key5": "ohLmGcXF9tbwJxiSYhrUx2cttShmqhgzTJJPepjusbJzD979aNHfJMNZJHt4kSiUAiGZ21oo2JHfdK6CSxyJimr",
  "key6": "5o19WSZShtyMA1fMAEe6KskwaZsxyRmw9qvQteZvymqE2TfAhDNqGToXiJANYL6vRkWFyyZPH1H8i5oHXAEVjQwG",
  "key7": "4RhsuGQ6dRuN1vtaDEGePnDCE2n3ygHcPJJhWTe4VXGSmyfpbQZvFn7ZZGxVqoWvFRbVY6Ww5h7JQSQ6ppLHnfBC",
  "key8": "64kXMN2MurUxRcy68Nz5pNUoGBHBsavTYwj4tmve6Gs83MRz7boZdoRLMSuqoowKkhWGgGyD6t8MDro3Q5LCDiMM",
  "key9": "Gr3B28jRTZgDT4DXw6ZetCFAuyri2WReETCYN8bGpTYQxX21LbFUJkG9ReZj6fKnZJ63wFS8HmrTmA5h1TSASgs",
  "key10": "3QypK1SLpjThE4xrtSeiW3dSS1CnM82Ki2FQFBSZyxB6G43KdZRiYgjjQLZRuM4mQDULLnjmJFmDhV8xmaL15anf",
  "key11": "3JGnnpZvzn2S7P6PPGcCgyEJJgcKHodDZmcfktjzaZyFzdmsLcV3SmKyZakWJUZYHJ953dWoyzs6fD5yrQWP35e5",
  "key12": "3DaWfAWEQihdN9ckjncEM5D2FDokrSS3LkqgAQCUAdCD8JKzFyfbQNcK2mRrznDcoF3dhBUs6Mdmrqcdqb8jgW6C",
  "key13": "3bXhJGbFCHXFoFF1LvBTDXy2NDNRykjwGcTw9naR2JXshsXqwfumFDudhZCurHHPxfe4BGpWWGBxY9MYMJKwMW41",
  "key14": "3NqhKG44Xu6K3RjzA2G5cQE13vSkYGiuCZLqWW5r6XHGYn5FeLt26sfNTouS4PU59bxuCHFBfWBS6S3Ek1MGJfNk",
  "key15": "22CPJXtAUxzKLddL1c3Ye4sbcf96YaYyNcT5q1oiMUMeQQv46aQMdXTASGkhXAjACQ9Wqj8r8wwx9Wv2FCZnvNHM",
  "key16": "5q3AjnAMTNKWXdnPqzWG9jqXBKK3Ey3jGYmTD46UVDDvBiH5MzaHrMU1QVKzEvXbzdUsF2wdTN5dU97YP2zZaMfJ",
  "key17": "zkRYBjTyuy8f2eadvaA9PyGJMwYzzoWpGgRFiNXD3kJdAU48sjqKxneVM1fXLBbqbMik3vah6bVFUvhRtLnGf44",
  "key18": "2xwxVPzvW3zrG3x5FkVUtYVcRrpoUfvEKGJArHj7eCPp9JdBXVtbigckUSSNcmDuTXUQzibRVLnkx9mKGHbTbWuN",
  "key19": "56mvYY3QFvV5CMVUBHEVkKCSv8g22jdC18GPug6FBwynejpu3UJSw4LrwDmxh8CgMKipix9HDojV9uihWPhhzQtP",
  "key20": "3DYxJjPhjjJcoEMqUJQQgT8k8f7a7SsCGzmTcE2D5Xy6gJRNLMn7Vj5PaHgcvDBpvMoHhuBpBhj8GdPLYNh4BTKQ",
  "key21": "4vezb8j8PYsKWqSgUxoxtgYXRRyAqxC9D59sAPnLVjLLorhDn4EdnNAvzPgXivto5T7JrvmZzCa8nnVgGfXr1Dnj",
  "key22": "4V7eKJmKsskyhpuh4UzV5fRoxnzxkLkfuRCTmPZsj9QjTLLQJY1fuRyEUMmo4DHfnxiFrCxxkcSDU7vXGWTgkN8W",
  "key23": "9iqg6yYmbG1AiDm9RFGFbQ4W5URq6jfArD1JiWjKqSTNtkBMj6tpPShC6EywSmC5uF8oxLteadG3GAeDrcW8CAy",
  "key24": "2ksRmdyAgkoVeWNnBs6Ey9GPdFjyAEHN55zPFHPyyAR4kJLKjHcpip75vokSz62uK5qm6AkeyWvBvGF3CLk3RBtG",
  "key25": "3ML9n6rb8DTnZPBsAJYN26Ju8pw2ywsXGdHCHkWDZkiP7xfxAETKbVJGRMe5bdhxrvCarye6iP7g1GyyMjfCPBjw",
  "key26": "4WQV2opXa6r58r6tTT1FYiQFnhR6seTHTJZxK1BGsRND54hNG1RN3d38NwDRcVMpvp91DRJk8eZTtZVMy7GHNkcT",
  "key27": "4a1W7FNjqmFaJx9DpJ7wsgnyu1uWP3crwXRR6kLTRJ84gvhUaCAD4pWjDHYp21QiifEmDSzDua2fs7Zyc2puN6ca",
  "key28": "2565wbwygrDvMHwxyVhRnSQnc6L2PhBETKu9EWfsY4xEAo9mVuLq9VJo7MYpVfAHeAZFqa7z5fHBHQ5bzbPVdaNs",
  "key29": "5yzjnHdz8KFg51xextnsdnkUQKLnhEcfGx4rNitgEaM2fbz19hJM2zJQ8ZaFEnQi2rd7gWBNxzB5tktxnzMQefUk",
  "key30": "3aLR1AMRVfxUYksMnci8nPPvA8EG4DM8C2hzg3rnzm2P8JBso6Tr4tj1N4upN8DBmxvoWJMbWm9XtCzUNp1Gwnzj",
  "key31": "43SrJjnAkUQ11TXFGLBm5vmRN7nKDyDjkwFxxT9MuCrrMtxEhgFePrBxXW845mk7AbcWup99AFcraQxP3bNMnvMW",
  "key32": "2iCDL2mvF8KBt2HPioSpts7NQ5gzbsJASfSUrij4ZFC3ktkmryLf4m5XTH6oKTJ9JE2utXJNrshz7onK17KAeNaD",
  "key33": "3L5rwzpU4ZJSRDZkM5Ar2VDLsi68TcyvcsXgzaqyxevT5BU13RngH3zEbrKaXkbPCmp8mgebT2zobj5CDwbLQpKi",
  "key34": "5MmzbcZS1hXi4Ek9dLe9RrsQF6Xd5xf7ZnBDrVEMoxRRZZjR6TgLwnGcL8ACZvUbDdfTut6BgjM6YS8aPusoVDqQ",
  "key35": "UdJAGayqfYwWGSciQeQHvNBNEaxWHmtzX1sXqn9T7WqqGm5YcHMstimxtTTrVzxehj4SNbTmXEmC1cf3vMjLX9f",
  "key36": "58LC1jD2J2Ya6c5sC9nr51USoacbYQaAg2fqSNp1bC81h6Su1oMG8TgB7MkN3GbXz2izg2tT5ATwPTybBfKXj21",
  "key37": "5jfA3PySqj9Cacnn83UEwqjH1HhQbf9x9RtkZts5QFWW88YviszTZTCQRpuMNtoS4x5v1M5VFgjRWmM1y9HvBESu",
  "key38": "5UYHzZzZABZjcLeL6EfxjCb9htrAoJ1az7sS9Kf3CE8Lrn39jxGoCLjwf3zwVRrTogLzZLw5yodv2V6WH27ATh25",
  "key39": "PxKjG3tSJg58ag686oeNWNy9xjLmjmZt3DuRw9KYA5RBgkAN9n3FPKftRbsfBJdAT3fS7gSjAS3tUokn2JCYPBu",
  "key40": "5jPMMVHzYqwiKPPWgY6LBt9GyRXGbPCX9B8rYaEwV6gebMv6L4DfiGmxAvxnfpCqQeZSLdEQ8M37F8YGsDVpQMya",
  "key41": "a77hDscMgfYnXZc9abZwRhet4GdfxN9qtTayqQPHpYXkNozi9jo11WxUQyh4wYZzqQvr1bS6Sn8kr6UVBEZfEs4",
  "key42": "3cfB48yGisaJZyjUBMDuHBfSVMNbo26wjGbaXRJb74JXQZwb7a9FvF9YLgYwtG2c9ixJ413Dg18kALbUca8Ep1oH",
  "key43": "N2dmNu1TqJtfoLJ2wVjC5Y8G2DojJfLviqRnvqUsEBpzVKM1ehhrz8BucrRRjBaiBbj2nUgukK4mv2dRHb1B4Pf",
  "key44": "3r5MEMJKGPQU5QZYFUkUXfXk8uuDoGdBCDg53JAp6XrfMFk2F4oopMn7BT6bk43tR3Pb69UkMz9QXUW5dkTsj3yo",
  "key45": "u11yuwoeHukd6CTcEgyhL4ajJnenF8FKYxsfo1pwrJ46uGLe9Ct96ZKgraAQ1NrL4dknfu8xZfneK21xUi86B72",
  "key46": "4pJqPXPMhX2E6WJHW5G6tWW4o7GAmR4zJgYdd5MmTiut1Av5xXuHyZNzgqf9ggkgPWoEpSaMKRCjT6hT7NE8FcHw",
  "key47": "59eFFPMvTwkVZvyB6JTtcNXGREfX1aGhuuskvJZsc3Rpyr1kST7b9tLF9f65hbUAzCK7NFA41z5RpJ7rXacMQMHN",
  "key48": "2BVCyHsobCSbPrE3FZQ52ScVbx1jd3CEZrT4KAp88UmL9ge3yCwAJp3HTABPka2ZRXSBh4Rqx17KoTRchpPdmLN5",
  "key49": "5WyXM3yPdPqb4QXug8mFC9Jwc82wkjJ6MPk5Yv4p3zsBFqDRtdV4yh88a9vYHL6FRDtGxbXwJhomkT3gUjhWR5wb"
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
