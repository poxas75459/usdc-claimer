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
    "2K5hR9wiJA58YxtWfjGzqVhXV1fkZyugA3xWWeTupVRBkWsLSHgHqD1j6mU3dCPEPkwFpq9RwyXPFn2gTGLeGFea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEdwKqnaYHtgaESeibK9z4mAwfXNhYbwnHiFVJBU48iF9UwVr6Jnydodhrn9bXJNcujtzpqy37brYE6Bq375KJz",
  "key1": "3uRTj4gP7rxuRBC1Rus3J4ksYH8R6c1aXgQkyKBatBSp8BMeLz5KNwAq64KQVQeWhTuD4erFwRchjH8UBXCTSsjV",
  "key2": "5KhZGzqXFaN5zQuhfMkBd82CAt2Mb2tLN8p4DzQxUBeitbeQ5L1kDNaTfzvwTmrbkXAws4JuxoGkUzGXMucWe6D5",
  "key3": "5jXhHLJickL8wfN7i39XyviAMA2jWNaa3kxnr3T4ZGzgwp6rbtRKEVvSKUgwXT7tZpwhgLnkNYsLmzTtMMbJV4Gc",
  "key4": "UtKoACkWC5rrYaJ1kjKMfv9JpkQDFcz3HdjBVq5tJgswAwmL6L158LFbvS6RptU8dMh9UVpiQvnS73ErtEoW6Mh",
  "key5": "2rpzhwWHmMpNvdykWJfeNDdyt4x26CKLmDf7BzPuHbjHT58NEKn5NyqtZnUcACMMW5LavsxmbJ7YsfZeCcNJGXT9",
  "key6": "2PpMiPxbLFmxi8fAPmSU7ibmtroCaQhyJkTPBNhsnZghbS5Hz54gN1Xa25AJqeMHiFrSykZSTQyTG5VTt2ZgBGPb",
  "key7": "3XuskZ3eYm1oZBTFRUbssM8onfb9Mj1Nqz62teXMQmCDhU9obWgefQu1aAeoJG4qMFNJPjyBhjuMNzZuKr8kaHHK",
  "key8": "24rXJYhtG8gHAZidBe2AQVdX33k3YKh8jYsUGaFizGhdtgDoqDFFvZzMGbgyjJ26kqQq43ETfMPHNdEwjW15Nnse",
  "key9": "3ok1yzVr7gfxzFTp8rsc1FFfWpiQShQQJj11WsiRs8dNJyPA3VNdyK5K8FFWxZRiH1y5Fuz9cPFiti7xdMS1W3Lv",
  "key10": "5n6hMAYMfkQwVzkRMNiak1gbJmn18s2vkjL4XvcbK76sUneHLnUPCKLXv8EUXuZnTE7JmP13md5ReJxPSKZD8FFv",
  "key11": "4NeGnsXxDncG7X2TBTbS3RvY5Szw6GszARR7AxuytsvHHEZPm9kYexC5xEcsSbMUpdKQeXWteVxBhQ4hwviuS9oe",
  "key12": "3Hp9d9gzEjCCcaSAkibnB5usew4S7yB3xNGjxcb8asMp5yi8Y9tu6AZbmvRmnxsNVs6MyNjQaM7edEXA6ez5cDY7",
  "key13": "5LUCEWngtLQW9GJ7WZovMBksfft6JDVMk4wnEkADA7p6BNWiwaCUrGXjxLqLvPU1yiQE1Mtju58KARqAThBvXLPC",
  "key14": "3QJ4w9ZbEQvCGCHFLz2tZQqDZtQ4cJAYg35Swr5QWkrysjLCnYwBSVbxrWZ5RnUgFoGmgTebp5pWx7iHjMoU8e8X",
  "key15": "3q2aSyFx7p5mwgBxzgwS7TTtr4a28U2rUzYReGAe72jb2PG7FvE2tq6bH4YttiRWX37XNBiQZdcTW4FSiD2Mr9X2",
  "key16": "4nsZTyhxdRCB9nMeGxgsftSqY9LPSW6EiyKTso7zXU1TtDfFpkALW4tyh4venFxmvFhXk4yAC8SjzV57kE8yBzBX",
  "key17": "5vHUHFiXxygN8qDFdyTxCWp7wzkHqpSARpP2DchewFdAwV2RngtTabxU47b8syKPcy7koy1xjiCB2J3KNtqukBk6",
  "key18": "5chsny5Jvzb6VzYBKfLJtGXAk3kmeGuv7CQ7VBJL4wLBY8DbDGBy96GNhYd3v1o9iKekA7pmCkyGxfBfYuJ36EnV",
  "key19": "3PH2RUwnZJEPomsf6jL33D96NzwgWcft7jYS53zfSWzK7Y6N16ktWkwP2pADJyGzeTUyq9sByKpLCdbzXvVY3Uiy",
  "key20": "2eFM4ULU8qavTGApuL3NVNy2UApaLU9VtKdQVAWsd5EA7P1AqtDi4PRhkfSQxWYQTgYpEEvRW1CMCMEBokuA3JdS",
  "key21": "12udPz99Rubqj4Vv4PVY9XRbjzBE52Hx1W1PELJXEPqLGHG9GbHxjDjNycgQhHdEnYUreMkY24SMkgUDRv8uMXq",
  "key22": "49V4Pm535kDZdVBTVuLCqgT5ECwQZRchq5UqUvDEy8ZN337D7RYDrJdurFEbyWQyuuqR9zdsNJe1wx6k4GVeyDpa",
  "key23": "4hWzmAHpwqUarXxofid7q54imtMJe9FfVzjaqiyMsQFohgbxuCwxcxK42jd6Ff3nktJHYQFCfDnQrA8auDXt2Xfp",
  "key24": "4WY5vorZrYd8oHFZFY4joGkkgociLQTyywQAtyet7R6MypHZJwcG3YhzT8uUtAkDpU1YeD1eJhrGpXGyHJ3FiM7v",
  "key25": "5T5VycPpjyYgohvfhvtQ4EVDGRX9nod8c8qfnFPxB9xDjhsMkJhXryDzrpxLugREmooR98H8y3jB8dwXe6DaxsTb",
  "key26": "3bWCmFpGEbjZF7DbSop4t1SRTSAdSMcBLdzxj1PxV5H3A5AywTd3iSBtCpLn7znGcuK4T6GCWGPANDTyzjXb7hxc",
  "key27": "woQTVqXRDbJFQsev2CUESeeRmStq78XB31R9T3AW69JJZyBWPZ5ovB1Jt2m6d3HCQ74WcFR7sxagdE6RmztuMAM",
  "key28": "2fwwb2i81vxQAGi7tmjoChBStMjXiooy3R2eSsJUjtNEeBgRyc6ighG9Qirv9kHkLpGtpadcngyLBqJVt4VFzrdT",
  "key29": "52nw58EupsWgS8DH37uhHfQUjN6N9ogZxrYWxuyoDiiMryhjdoGUX6fYgxKoqYR3hKRXaxoPXcizH9XAPWA7ZyYL",
  "key30": "3KTkqzgRKvUbABB1yBsoqRFyk9q9cLsdtYRdSvfsZMVWBqywTrp7zRXz8cj5PSXQ6pC4bdqXMDrQ2QoMGbJeEmZt",
  "key31": "2neayttwddQXsDWHLdTSu7bkuY7HwkKKiG4drAtZyZYbMeLE3sSAAr8dZDqvCmApUB7mpNaf7yZiteJdNpcTwyTA",
  "key32": "4iKYyF4GMcpE4csoztBGSC9znm1jpz4E5hPLmLMzk94KxakckJdH7jTQBgfwL6bGJJ2FLLg38avVX6vcVqaRwu8U",
  "key33": "JpAwZ73xeodkyntUHwvPiBvMi5su4wCrhyF3w9UPnRjmd8oi3pJbkhMqeGSBuZDVsoApi2QygHL6JxusKavfrEL",
  "key34": "37cYb8n4siJp9sv2wWUPkc8ye3jNfE5B1SDWEnEWge28x2XscKGYKh4jpoNCS7KhLPaR9DpCAD3THm9b9MDmq6un",
  "key35": "5T5SsrHmzAyqzFf5LYBbNqavWLmNPKGT4qMuPHP3HtEQYLxubaeaiFYUEXwhz5Ro8sdZWb5KDe2DFR55CQvA77bg",
  "key36": "5e1D5jpRseN9Dbo7XU8bw6sN3KA5i21Fptjq7WTSKphvcGyw6fScaRfnifpMPbQcqskDQYnYLFo7uTUPaNcuCRbf",
  "key37": "3zgvrv4Yj6HtXGJeDu6P5dLCcfPpXCWDe9W9PHKo3CNzHbXPan1jvMFYS1cAmRhKFLPRJ3BjpawpZknJP83nxZeQ",
  "key38": "3PyswyBgZe5PE4oZm3d37Zyfgvh3FZdXTQE8LYpi7tNSo8KE9XXckCY7YWhNU5pMRyugAZEqfh442gwWEUpG9bwq",
  "key39": "3fF4ic1SaJmLnbe7mp2gDRPF79k4z1xwYqYA31eDcwJaMQkbM2BnJVt3G6bdZWf8b9fc1whkdMUpMdJs2zzWy6nd"
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
