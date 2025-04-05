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
    "2PydWuGompie59Uwib6sQNZdBJJj7VE7kKpketKM3FuVVB8eMRk7hHvir5uURqLeP4qHq35t5vxM1TUcbQZ3Qeek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eb3QEzHhFdvWtBHnrkLgLKp2r3JFg6gW3Q5tfCRdbWaxYePJCHvaGrQcU58TWm1mz9pWWX3pUnLFx6wWTt3e38L",
  "key1": "2dUF3bXXQdjKPhxKVNtAKmLGTv3BnHbk8b6hMhPpTCdjuTvXtLkznDBWjVwGs7kz68ZSU2buidW2NYkuUc2TVyEd",
  "key2": "6cVF2oHhNAuJndJRMJFJzDeqbEvg1962cLHoKhJ9xceTiZA24YCWoqc9WAEJTGoHqdyeYkaUi2KsbZEmeFjYzif",
  "key3": "3VJ2z7AZnv4FDAVyViwJNMSkYnJCmTscMAniuLB3kfsLQa2QJaET4wzVYLEoy5bLxZVagTc4pVT9CuEMCVp1TjvW",
  "key4": "cBFZEJtDsUtfQJbn1bfvN6P4Lh48YpxaJ7AyuZ24nNyCyrM7jns6Dhj5NMJRdRyZQquqTfBnWEw7Y3GJo5Uz8mM",
  "key5": "2VefqySQsiWGovFzuemb4iB74E4NbRHj6QpPqzcK8Rib1H7ssMYvu5XtAnGjfQqvN3SrggSJdodjz1vTPGx5d9KJ",
  "key6": "4mnZc9vVwSmGSbt3ptsVTqEfYPJs9HAi3eU8DW7UjJHmFCT1CBPNCYdFbLW47HvVjS611zhyJ9bqoQDY6sk1uSeC",
  "key7": "4epZanw6jMRrzuFMzFyjDic4h8ohVpL3qKNi1j9mct4vyfgWXnJ1ytCZsD3iJh8ZF4dL31aX4KR6fyzpSDKz3Ptt",
  "key8": "5vVHspNCvuFp6i6mpKvwu9uWV6Xcf5pLNtXB3CrGLTFzjQkMboKpYarcpV3fBVkQmXdiHmBudjWQLnfsdPxjgQG3",
  "key9": "3w3HaVhQi6sx83rkzUZPRaZnfSewocjFjRfKiMdh2wuy7tSEUymqJDNxMsFzSeqqq8xNCjFzgDrfYWm7BVBs3M2j",
  "key10": "4EUhxhcUP4RCu8HPLPSztcdXY6XpjVhCfokXWn3YVUjafMA5YoxLW812y1dkoCz9YLwpYmtZQfCUovUGbSiJ8JLX",
  "key11": "51P4LmxAopEpKvtriWQVVQPjJiYnw3W7ajeuCmC97YrdMoHYMjtTJFLAQGsMcrFNKvLE7FajUD7gzqpU4oEwRYYv",
  "key12": "2q19izv8XjTJJx6d2oEqy2RrLocUgWbhH76GRujiLVQn5KwPvdgmjjw8Kz6j2Z1xUUcuqsMmZXPSUP2E3bymatsA",
  "key13": "JiqETZVmvR4UVfpzi3hRvPg7BuonSZcq8f3bpkkQoMs48spgUqhVaSGpBsGbSyqDmybhQCJDH4eaTAxvJjevYsj",
  "key14": "5SEJQEQ7uFMvy4GFQEdsR8BpBJC3FcjAUgDm2m9WwGaqDR3Nu69w1dTgMUUVwnhw5uDVfvRLFRo83FP1rpR4bk2v",
  "key15": "3qRkS81dUQHfVNkWwhr3nvJzfdjhCoG2RVQ3GeDZ8i9pxyUad2oNWpHoK1qnEzAxXqE7qyVH8dZafYqnP7KKy1xP",
  "key16": "2fNmDRW3ZSnZHnco1wLA4n8UvaTQ86W6unx52goYPK1G5Sp1NxQrR2uADC9S35u5zLvBgoSsQJPnwJf8sPQWdBnB",
  "key17": "2pM11nBVz87Bs5VgehXE2rzrKrVdFYoW2rszoDsaHkBHtkttpFWfrfntFyrdCEX8rkchUc49upFgPHaFxBtUaZsH",
  "key18": "4sThmE6uwzEShQ4u3x41mguULaJjkYNByvTzhXsMjMiStpJ3PoYExNQKLFRQHtKKRMns5vg5saLeWDrdfVE1phet",
  "key19": "4312zx42U6LhxU4CqUqRvXrSmEdkiJNMPXhppiKvH9Yv9Y7t7jtw9i8DAwpKcmA5EbhTz4JgjiqwGEZT98XgAm69",
  "key20": "2NXFDYKbAs7rtAwmE6qudvmwvbwtiFRxi1UcTP3jE4vJ4z3NQ1WraT3XorKA2ZiKJVmutjZSsxkTYqRoH4Urn896",
  "key21": "5GESC3mBvXa6E2rjW1a4BdggbQPdYDECy2gRcKYRA9F5hDhLLzrYA1YEr3YhddkReagjKqrHwNcDXHRg8g143K1e",
  "key22": "JALD9a1nbZXw6VnLNybG7aGnuLDa1fjg46GKnMz7aF1godxaxSL28eQz8NtkdzAh91zFGLQV4yNuMzbh6F93DJW",
  "key23": "wyDwvBQGssJ6HqnZ9k1uCR41W4TRy3tjaSfktqsPcyZD6strxQbfD9CfRvhNMfXLLnaPJ57qFQxBJPMrGp3qppS",
  "key24": "xXbuSkZiH6PADZSLBdjfeHqLmAwuNPjsm3aQjGTftw25ZvqEn9kjnZd7eukVWKhrpGuEWeMP2vr2AU4RPza8TQH",
  "key25": "dJaEr2tMngPuMPp3T22Hv3X68GbYZCBT7r2FCHTzPGYxq1UE1dBEA2aYNuwFf8FwRojyY6oKZ72EMBmx8XKCFfV",
  "key26": "3y74PeKEjzR1aRag8Uo9yLwwBHVkPdhcgUN2hzkhpvnHXezmD75z1i92hnmNdkgDUMF4KQaC2YsmLQWne2J946s8",
  "key27": "3gYmT14VB5WynhCT5FrNvvWmtakg4sdaqf6rctdE4k4r9UbMhznxJAqzxuZgj9dosi1aQCm4inJAgRXpoKpGqQnE",
  "key28": "5TbqwRkiFmtLN52DWKdPyrWubteSc89gUTZNpvVtGYC633Y3xnpkPhdxxUCat7EhAmurRtBn2pMWDvgQEzwbsRdc",
  "key29": "3qgmzNEMUS3ZLiaVWDHDtts8nCAYifZwYfADnNs8VidJzjRBoCQ28N7rTgffbViDKsZ7f1d5DRrQdvATKqi2Trgm",
  "key30": "2uMWVkNs3wwt8cwmBvh49ZqvcqHJxasX6bdXbEYfhLKnNHpjVgeZbLbGVgosyYKbXHZc52JzP1En36wtrxwVhwpt",
  "key31": "2cLEhr9cZk7mfsRiqVzhWZiyBfqhkoagYuR5fV3HfBPMPkRnsRGUahS5XZpf9ATtiRDKpLWVfNz36q6suxwFCmFG",
  "key32": "2FmgF7Xx2GKn6zoY2DpDNLgnsABfeM1KwaZHxG949R4YAx7WwBQ3QnGUezw9nzaa9Q6AkPDPSHTap548MSCQpNkV",
  "key33": "3mSehX1f1CYjnEbMKSamKDyeHq6ykgZTZScmbqMD8FZBukw7RLGebMr1ZmMFPwycSUqh7rCNLyvvZZ4jBFd6FFiZ",
  "key34": "EMdL3oJ7BQ8qzVDoe1GqGFYVLnFhAw6QXGpSRQkotXavvrRSSPokaYce18dofZhNQbzCFLtRiFsRcu62zHi33Za",
  "key35": "3FmRhhBLgXw9X7ZW5TVGxdQUxX9iCoxLtHs9AoyZVFBszRYSbNU55TcJ5Nzo4SbDXVigFMZgt58NzEsHW1YEHhJT",
  "key36": "M5YJnHqHBYHSXT2Jnez7PC2F5g6ynwSn1Jnep24kHfPoz8q7NviFqcr3ucbHY5gxJ1MbGZ7W2naBGzDHYGyXJjN",
  "key37": "2H4GDHvmuMkfBoHtfJ7EWHZnKxs6KjyEvWMGXEUxDvrU9f3AApFgpZzU4f2L8xJMx3B46JDy4m3JGpm6mdfaETMB",
  "key38": "2MefSNNntPSr5izctwiK6w1zkvvg2x7C964sknANNxZFLEes1Z8kDux81yJKtW6E3JMmEnGzbVLsqRYxJDry3Lyi",
  "key39": "4bAV183WEVzKnAj52y7D6ZSVuMSAQVoHhmk6nqWgv6GR6FiEQmhHRTkqnFFzhYw4VMsTEJwdxBZ474FzrtSUovQP",
  "key40": "3zJZXov3kFmpggB3h5YU4uqHovmdc6ZNWY9djBtKrq7Yg5FUfUrKxJYDwR98BCyhKURBaegK3yxtaaoKUUduLxqk",
  "key41": "5Lgco3YFVnaUAzN4ZPymE4hQFaZmkYgGfb6CVXcEtvdZXtgp12uEFWj6k9QBLuKGw7rLsejFaD1oeJ45GGUg5r7S"
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
