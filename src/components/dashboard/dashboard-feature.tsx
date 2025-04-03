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
    "ZZswULZYkV9yQLoPeikeAKVEqMq1Udrr7jLNYYK9N7d3h1BZAYHQQyPyzoKxEToqi9qipppCChvin5RKCE6TEFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmUZKcUBE4E26y77hz3PgsEXWkVp5RUbpkZRbwxC7AeQHv19d3B1xLMJ8ffjYT5Cijv4f9VhzyR9PttD86FnTLz",
  "key1": "3sro7oR9aqhosp1oQptbfXoYNQSw5bVk57T1ybdWUMab5MDLKq73ttF4FshjQFMHVo8CQfK2gnfNPu5PpEsQHtxx",
  "key2": "2C6yAkEHWHt5GcPSGrQ6RcNQxsVnvWW33L1XmwJFnpE7sKPRMcj3g4TdS7Wg3zLvKJY7KajL5mzhbJKQKGMoFTdW",
  "key3": "L2WyPxA7o2HbVacc56ca43xrSRuckp2rVonuKEUZ3A646AEaqQnrMcWpzJjufPCUc6gDw72RJSWHzo8ZCftvBXe",
  "key4": "2Eri1ZWTa8tcRW7ntmg6PHd2SB6aVCHZegAnwtyL7a2UngqfXkdJbyTbskbGzumURWXMV2NpGVxwKRywgkA5oZhK",
  "key5": "4npjutmGvuPRuCfMmVaL7KeUrX7R1wM89WMw2GRDovJWHKzv8r93DcKH9L7WvSvZ6F9GjmTZmFKza3475JChZFXm",
  "key6": "4G1ypJfzZLSqSm2eBg547oW3Z675r8crAKLgxSrA7gM2Z6LvjpzX3pPXURG2wQyz4nt7N7uGH54xBRjrHkCgnweM",
  "key7": "4xVFH2Hpb4W47XY6M5jU9RiW5BJiKhJ1Zk3ZiPc95FngMa3S3uw9ENXyZyuQAfqsH78c4NdGv22Qkn8wo9SYPYax",
  "key8": "4yMUVXJRWa11g4qSKZVNsHz7BSqyD6y8BQbaMnjfbRz1QvRwPc7LFoyqH2JiJC3tWx8QB8YBMTk7vJbUauuS5hfe",
  "key9": "5mdSgexCHHXoi4u3f3wGnzkFWCp1TBFmK6PCZx5ik1bG9qPiWk11mcmsB3ZeijCUeU6nYonQ4hJ4EF9GuJCHotWk",
  "key10": "3YkkqqymSpCtTsFFfec9StJzSZKboPUgzQhJctn93mWDtXjJABAUn2hj3hoNhU9sC1vdw6M6nmMYLDmyJgPBjix2",
  "key11": "245Dn8tXnZexZa7mHcGiJx5X96GCSrLX65kqFWgBKX6NQKpp3DY9mn6anwrjNTVytm2FQhQ5gFkGsgL7wBTWx4gh",
  "key12": "5YufiGjEui3euv1NvUKVQErDpf5BwJBBSBAp3EPZdZKCprQY7p5XBzJ85vfjWTEAPAkTDYjAb9QMyB46TArz7WQA",
  "key13": "2J54nmn4svdqsp3YfR7SDz8AKPtQZ4Tvvm4HmPF77kmtYRSL9RUbETSeyrdYWgZcan6zK5xUYvJnoh5ufmLHhnX1",
  "key14": "27mzPyLmSN8t7m8Q5QyhYNodJeJXzbywTMzcG2WxUEVbrtEtTGAJz5nLCwLJkSoGPXdK88rGtuhZ64dfRTQNpWDC",
  "key15": "41cxHaVniMEGb6ydLpmGNCAzGPKRTVdLWfp5y91AirCtH1BsX3zNKt1TjbkeYF8yvhEXZkQ6vM7zdCBFFc5nt1RG",
  "key16": "4LjtbxV5swoamwYrQrj6ZsF4iWkLHTNZ87ibCQqu2fi8eirbjgA96sKEZmLAEwQdw98c2sLgpqSYzndjgjZvA3mW",
  "key17": "4mewJjbSHevy3tVMQRqxoGFhVbTTGNrnvhhfEjEVkfNV1VoKmj93zKVHurBVcZegCotdCsucsdFZ12Mr1rUMsnE",
  "key18": "BP2fZWDP367pCaaJmpEq4VQroMYjqMtG8gjb5NyCDTRUvrGyqSvjdLzsVbvrEseaKp1wDo4KXgvfsRJrgifpCq2",
  "key19": "2BwuurXGnjJiqhxbE3Y5qckrnn2UiaZu78mhVmL5xL1EXgfRbY4aeogyjvsknWxxz375nTShA1NUMmXLkKpSosDf",
  "key20": "4SrvPZFUkPjCVRZc4KPb5MskZor2BRtN7MCnKw4DYAof2e8Crh145XmLG3MJwYxMrcgwB6dwKok98JQDgtTMGVsH",
  "key21": "wu3gHzmzC1EwCrAna5FWcLx9W1yqvq3tCiVppxureFCTDvTCdftyMgF7ucgBsVVHDWtYjkdUNGxcQXCzgWw9qoD",
  "key22": "365exdoLG9d3mZzVHTkwoagwvPuua4KccfGuRw577Un9YqHzEAnz7vMz7c5m496qbb3yS9RLn2u7Fz72HovaudkC",
  "key23": "3196mU3LYdEQbFZLDpyGhDSdvmDvJYTAZ4GVFDkKQBnvEtFaCVooXskmxNasnSYLfCrt43tNjDpWYKf8JDSKshms",
  "key24": "3Z51L4mh4XUbdziLLwQmGLPWLJJGh6ytDHcB5kp5xTJ1akiBbSyTUeybRLm8SXzZDkxreaPrqUYQ7xxnZVXtynHh",
  "key25": "5mXdynXPwvAb2qonHt8oN2xK29A1GPeF255D4GGvurqLBnxChcbvcQpGVVdU5XKRkhjTZfmMG1mvD46NA9Pue4oR",
  "key26": "2ouN9qiucsPxbLGd1CAFnwTSKW4YZC9sgaiDww45QFL9rCp5sV5dVE2sBsuCTQHN9svf7NPzU6Dsp3Yym1qqNmTo",
  "key27": "eeqhxDN7JEUhe27A1eECPhiLrEAJhuiYrXVMbtSDsTbc6CxDhanWKoMHZ4ptzeYs3e4sGeDJe3KdhHnVSrx31qB",
  "key28": "5NQSqJHhPNmyU36iv25x2Bxde11ts5ZTVhphk7rfC21hQb61bnZ1HUQwUZ9JE4GdhHTFmsUZSen4Ne8XXiJMzcGi",
  "key29": "3UAuNUGVVGQ6ANVzEoyvSxGCctkmFQT4MkNpXMqt2H2EL68P9p51Uogj4BpHnz4eB2hXxGuNyVGByHZnj2RV658Y",
  "key30": "WR5KVBntsPznWig7UDH6SbpgyRK5PtWARvYqxKT1G8C5niST2Wn9v5Fyy4DpFj8D7MiYGDSVA7XMwJ4suyVxYy9",
  "key31": "LRnXxXV2W8GLsF96wR4kyBLL9DGdj8UNpodZMhZ4yJ22xrcViYdeE8gyAe3bsotDkNMWycXN7XpMGeZKrX8rw9s",
  "key32": "3cs9r7BBu4i5sdm7CAgM6zG1Z4q34kifg4a9WUn3kiYnBa3sdw7zKBiCG6SUeiFufXdLRAmG6Mjapj8L5XpLyCYH",
  "key33": "4RJ2to8169mSuUPPXVxh2Ffcq9R5ofo7T8Smztr3ZC8DR3wXwk8AXNmiJEfdoQHeLQwuaK1774CfFWZMPQ2ERiy7",
  "key34": "3VSgBV9DJwSUMNrDMirgk6vk5p37kWFdjXn5F5MGvtuAERBvqR4vXYJ1fc4ES7fV8riY28yatGUACFWPTVSTENeN",
  "key35": "2wifoCKU6PxT5AydqEjeKLvJvATtda3oKfjqcEWfoopKw8HE3ueLVYcZqvfn3ZsHMB3Mhd6VtQozxRJ8mzUrszfg",
  "key36": "5x3V4ot2ctZ3TqqFKsVXjNnJMUM9TvjWk1yEstuBxsumKcsJbSYQpZh4DbGZV9kMf4i15j5QuhGrVRxQ64MqScvf",
  "key37": "3egjnerbqcWW74quacVRgnj1ycHsVR9h1VFqK3sEfsLqzd9ZV8s8H6PafgBzy2emEP26k5dDo1bCVMXfVGxZoTD",
  "key38": "5WQhNdVwzeUV7uD1AJjEwP2NMrLbmJ2tXqhinZBizWkxRvrGvkaQGcfCNdFLaxxsVcwyiUV1R8u8DQzuq9u5UHtB",
  "key39": "4wA614y8QkoQBTKk14DLDTenuFvdMhuVWChRHEiNhNU7ANE12P1wjeGcPWUs1Z6FK4wKeC67yeRin7see1TKxQ9h"
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
