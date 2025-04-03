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
    "4n2kCNB1yoxftbMzaVTJSrCVbVNdosrkh5gs2ZaRf6nEnzXK8Fhig176z4VvZ3rHWu1jL1totxkDd894skNTJzwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9B2V7gcukaKbXNLM1mpMUpymxUFvREayKut1Y8zfjowu4SrRixApw1dG6MUowEBjT4xRYCzNhWKFP5TPAgWAe7",
  "key1": "2EQ4Z2iRSFRXCwLJhyVJ5rBP1bRtZNwFu1VmZLuew2a23Xt5HJe29Sx6pqwcFy1dBPwrVCgdj114GTnmqC6TzbKR",
  "key2": "DqK29o5i93SW5n8pE4EWR3dCABUSZvnLSkxoqDpkeRnk2Gq59a3zVarvbiPZHAvPYQAb8z9cAER9iQpT2Hy5Gbt",
  "key3": "4ymSCMpbfMLaTk3ken3699VJy1RSoruqP2UQzVZQ5ASKz33cUDY31mtHGdoiEH922QSiqSzzak3VdCW1vgU25nk6",
  "key4": "2e2f8PPqLpXHX7UycJhbdjZQnwHVBi2FaxfzvcFj1boRZ9t1BXyCsBEG5JA1mwAJ2gKBvDqmUf1X6LB2cEg5EjWh",
  "key5": "ZqSKiHygB42Nz6TwFmJnf1xoHifLQ13GuiAp3298cFYcnJ5z9wL1Q4cJ1t7msXSzvGypEpgZ97Acp16PmkvP7Hs",
  "key6": "2LkuFkzJwLCjBBkTWYsffo8tSF3jxij4sR2SYCvYTCooDGKFuBkjzuCeGHxweuugov9zfxUuV1hAaKvms6rG6KKc",
  "key7": "2xMnvHDn2g6UmcNWKUAdr5AaovfWG4v9b3EtKK1qqMNx2GftjJMxzkYuGQfZ5uucttx1cWY1L17Mtsh5mDcZVpyK",
  "key8": "4y1HD63T9brRWAfowYafk58b35tGDVLNgF8hyP1KGcXtfkwsNpEeWLsaFx1RBxB4JhqNVsAUX2ZYQe3BCYPzGHgK",
  "key9": "r2iJ15sdC4iL2obhu1cR2Zy81Gvji3EhuegVojizVLv3qsZPfNN45k6qSAtpFkk8UxuvJuPrSJtriN7Gh6oz9G7",
  "key10": "28MoGgup3SDyozo7qecjHJnDtzq57P8Pwxau2iBXqtF3WN1Djkv9GqMwKCxoCZi8iRDQCVvUicCf9hVnjCjLu6dN",
  "key11": "3P6pmiH6Mw2Hy2xSBymZEwP7Na7qazbcp8TdS9oFaQ6b6biKLYwUj86r9YC8ub9NCgdorc8NAmhL75Vc1w9Bp15E",
  "key12": "4ehZDkycvdbzjPL2hHnjGcoRqtjUxebXpSKia6uF3GJQn8AAWsXe1r7iRMMqXwhKqq1NKpxLT7Dh398XPniYdptF",
  "key13": "3hEBbzfLw5HN4pPKMamZP8jduRcfsBg2LQRJArEoEdkhLPS4kYkaE43hUdtFuQAkKnUQ1LXwVbYrXDavaLJaCxoy",
  "key14": "5s19KqWKWnpEgjiKuPERQnQ5RQAa1gHfmqHsDigoCvTLcsdXpU4CwfeS2Po3knKkbBYuawm7MHNyzA2QMPEfb8nf",
  "key15": "3TZDaviNzNAymripBkKTTKpYs68eo9SWYZPUXgvtHe3fBF2smV63qLbKD5sgY8hjAG5qSNCSYCHikJYrRwxCPsmp",
  "key16": "2j6Qrsxv4tUi4zjNrT6TVMiSHpSjYT55qUMA6BhDgvkhN3LidnJaK7zrZfpc6V8CiPY7Mo53mFrevi7RwG6aDqTD",
  "key17": "5pyQfNqJXwgPJGHUQqvN6MmHhFMVPWG3uL7SWVfNnmQcyC5A2bfy6Tfvwm5Dia9encvYbhc8TejxSq6c1BjZEzY2",
  "key18": "4JEnJpKwaybis9fBi2ixDcnnDnWgwrLZCrecQYA6Dt34Yf58L2BswhpBuGNAg9oh8qYiLn6x1nPtJvL2ivehGbfJ",
  "key19": "2MZwdDJBh5EjLkiVTov31hn3K3vvBhbY2DHNFzK7MwXt3UuTiyUGnBLNDEgN7J9CL4k4evJPx39d5Z4Bkv6QgAbJ",
  "key20": "3XZx7cVhp8Wx7YXkc2UXePuCN3Cj92WFdErYKD2zqd6Gis14aRdHqS8JXLZEeHBVhx9v5MkJgEkkwFLm7dKVSeRu",
  "key21": "3PBjJ7fPv1ZL7bsL923eBZftvDkWKDv8GEz9X9AtHyjR7z5oZQnnD97TmcsyRh7RoLxxXEBYSe5aLTBj8tBy57RW",
  "key22": "NHkMmTKvmEo9M5MMKukvMYeUMUHpW6XR5Em2uD22qjuMXf7SXPPdLnbhTPny8f9LYYrPP78G7PJrHhCMgjLzP93",
  "key23": "3GpakybKv2gCJDPgFJhPeeGjH7JZnR5yxeFNsHMUaLb2q3B77ZDB3npQa9z8pFEWVHxy2kp1uUgiGexg3Coa3n1h",
  "key24": "44TQ42TGxmSaAcrTqZMcZ3AumFPd4niTKjtgKoi6sAmiBGCFXqKKKSpHSkAhvz48wrEMbmmmJAmZrhw7KZ589y8E",
  "key25": "2LA9ddsmGi7bu7VZ8B5KMY9tDYdwHvuqcsikhpCtPzum1GzUEVN7D4xddFSvxUpH61dtLrLJdVaBerivNwopfWtZ",
  "key26": "2DgEZQWhgsNSEKiA9q2Ljy6Yfz33xrMnxqCsrL8EGC8aH9LzDubR7WY1E6AJz3jmm7Vwt58QMLqJfN3teHiWe79T",
  "key27": "4RhA3KKbXoFTQ9gh1yaFB5csDu4vi65Mx4BTLq68t7sypsoqXYC6NwuXPQgMt95DFyxa9nydRoGfGakCwCjCZrF6",
  "key28": "5xL5uQQk3EGV8viebufyYtT7TrEHcb6VUe77X8FmEpf2EhqhEsJ7q62PnNkL9r9Aq9dLFrrBJYPM9JfxB4t5GdGA",
  "key29": "5CnqTrSMEDFTis3maDV8GigAsYEAYiC6TegJtfkTr7Ywu6nq8GH7BmSGXVsyrauXLoTvQWvmEoKDWiNKi8AVKtgR",
  "key30": "3GAivzxTTxoHi9Gb88DZgYcS46mi2sxYn9rC1c7sMauBR8UUbKHv8E9zdviHLuz8STBD4R9zJcfCyPB3guYua3yx",
  "key31": "3vkumergCStP3Ucuce63WoFqKdZyVR7tgszMjeUqb9JgFLPkjnboNDGibSZG3TAQRyzLxCfztt7mNc7bFhCUEs33",
  "key32": "2ExbkzjTTPxomLB9AEBMi53YvxakFx4bkNQwjfKhQVGkmc5fM5JnwZGKts9g8o8xydtQFwfUsXpNVCQz61WZRLte",
  "key33": "3zxbcQdyZAV5rhDRnopmtUAtMyncP83DzynR7HMpASfNuTCS5NeXCq9kquTvUJ5AfinRm2Yiw9VXqQe9kWRm2nGm",
  "key34": "63FMuVhRerteyD6XWAvhMfAmfVSViJmfnXeZ4nmgY1NZdr3UFeNFFaD58hcyjfG4LmNposTBvNKU4jCcmJujzfpb",
  "key35": "nsg2VjQPrB2oKCu9VBzighJws3mFSZ1HWf8sRhyXFGdxc3LkjXHaruNDzL6isdqfS3vBm2gkFJMCEESg1Hs5rsG",
  "key36": "27jX6McGGLF5E4Geuoy37XvkX6tmjfdV1GAZxwwg3oxUCJs1bfioppYftQypWVr2Efqtyo2Qi52G2hn6rCh54PSy",
  "key37": "3vZ4hMb8LvRX463GUW1eCFTtLJmrFTVcPBCtorxSJtWAyQ4EwHpiACkLN4BcUVyG8CCm9Ah6Fii4o8TmX91GLi66",
  "key38": "4FZb39ZoETTMFpJLdQw6TvFfaja54QmghxHq5xtcLAvmJHtiXJGTw2quCHMGfV7phPxT5zHx54VeNDDBDQw2Wa26",
  "key39": "N86J5eEptMVRR3MNqvHqh7V7yzs7NPsypznRbNWJ9N961bN4panYZKQbPMmghcgFHyHDo3sdd7U8WkXcEzmejY2",
  "key40": "3UkBUHaykxiAxjXMjZJa4NEcfH2iAEsr7pao7aF86rnZfocXikQ5LJy2Y41yL478S6MQwNspiMWxhdF98p4bXquj",
  "key41": "55dQNZjoD1D8CiJDjprQCLMSFkBsQ11D4vGuUfWViV4HBXN1RC6SP6ZsLn8FwYy4B31VwFiiPwxdBW9nz7qks7o4",
  "key42": "3T3QHn1M8er78bKiHLfZm9yDusapUEcHpQPq9fy398NKmWxSQ4Bq6NMvqpXETdn6DCThijdqQRmHQ4sF7hRms4t5",
  "key43": "eaXbyGiTPC9sMNHFnfRUCUKazUgPjN2DJe5XVDgNiepuWRtCnF9PiKSvgkfC13BLtBsUEXdFTaF6h448vm6XoUF",
  "key44": "2JbiqrceVi2SNxMfr95dLwxNnEKAHJoVPvqGXBSiVvGCcNbpVa29QGhFZETdGviFkQ39qJizt95RhaFJyJHbT2gP",
  "key45": "2TYsGwyVGWi3UpcpUx8DGZKT8eoU1b3ZEhjxaZgbew8Pe6DLUGtjKfhKUiwEfnxNRM2LGsDNpWALRKAfJmhhFksL",
  "key46": "4SoaThWwXiL3v8NwWE2xbo3DvqTRTn8Sh2kiyYhmj1TSstn5EAjo3N4S9pB6hQBEyFCumuB39TL4MqBRJa6HRjoj"
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
