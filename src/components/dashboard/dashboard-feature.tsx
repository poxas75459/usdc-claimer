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
    "3gm4tLrV5ZNcFcsAdX6ttnQffntE8RgV23GKEVnm1S7VrrzhDaFttwcHAjm2TfPHbyd9xw3L3qefKNDGfvWNiiK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6BQWHYkZyvvLyags9n4qN5cTJjMfHfTKEt4XrMzwnjwcSgpd3fFS7wahN5E3mvL6f4PJCfr3td4KuLQ5WNaBKK",
  "key1": "3yCUsniJQFBeKypJ9EwwGj8zh2EoMX5YaaF8mntHRoFxBpv87DRWbe1xr4g6ofJ1BRFh1ZCUwQGFD439Bqm2mynr",
  "key2": "5MhFpWiPUGzGfFHCKJ5FvnrKC4Nvv4zpbsRtS4HYXzQf8J7QgVFRz1GRTqfSkJS2tN1TNDReMzn9pY4jsuHqTw23",
  "key3": "fd18EHBvwzrToo5pjj1qetPxVFQpzz4itsL3p6Ly84qDv71C32hv47wVrdSRbd73L1Ks6yWFr3GmiPtrX6mQk6D",
  "key4": "4qao5bojHZ6P41EMQh2gtqcGzvLRnRQ2y3me97hbdxuATbvmToxnQ4xsyUgSEnNzk3Zp51oD9TWJSD5Hc7aEnYVy",
  "key5": "33zR9aAGB3EKJejV9LfxKkJEjn4zNU4niVqHu6RHmD6w45tnGdMxoiYzDiVE6jBkpxEBCvNJ6JqNqEcDiyiBGpFU",
  "key6": "3TAJby5QGQ4bxwnHjL9ttzubsHC1BKPVPqB9zAn6KM9h2Y67651LdJFt4E7UkJqw3VDjxYtNR9hKPqpuJ5bcxJV5",
  "key7": "2oYrBaBfF73ebjgo5YBdZQSgAcMgwUSFRKktW1wLRfUWo3G92SnfL2AEzN63abSSuXqzTxQMjqKVWW7N62B7N1uR",
  "key8": "ne5AHkvLwv3GhCeTMPmJuHGfwpmpoLyRo5B2fEUKaQHNEr1ceh3fEkKPHhgJv6AzR9r765jEtQEcqVuWYXiagD8",
  "key9": "3vNYyMrV8aegLxU2fPPbDewkWabj1JVxkZkHEF7MoTUNgJ3rovUjAzoi4kPzM3fLPafvoCy7wvVEcfJifsK6TCvU",
  "key10": "3K7KTuaNNLuLK4GCpE9JeN42r19XXiW3mn6PyTS2FGauaeNDroFeJ6dpnQ1hZfVyW2pyQHedbpF7JQATBQgCB1De",
  "key11": "2EF8iBoMSgWSWuQZprmS7LpVdQFT37mNyktwfprsAUHej9umxSB2EDPgEQezJMCBYcCsmT2sr6J3iNukiqQrdZHT",
  "key12": "5WQ1oS7mXjKckum2XN9DXdVc1tNnyf1RDM4Y3mwnP6k2EE4opwGPLBFpGAAXUC3MriDP8YBb6LYHJpwBvrwHpPDV",
  "key13": "3cWiB7JoFSZQC6bZ8fsreUstnEepeq29CzMhAjTQB6LxHHdBfoYzxLd4phm7Cd9Scj8AzubsqVBVouuLqCEbZVYM",
  "key14": "37K4ZW6i1rWyRc3GNwu3tSqEnNsXzDxGCUoo5hYNTrD33YnT4sqM425q2eqWNbtUAyEXcCjiATKV8Kj365ZG4Qp2",
  "key15": "n2PashsW7hqFskMb924FeQoAvdVgJtzSG94C1aVTryRBhTuiApjt9NxJqHaT1VvPb994xPRtLkKThECmpF7zi8Z",
  "key16": "4fUttEL4M8edxXoRktE1AXGfvQdZHNaZaY9WmUz1HrnN5JvstCLJKtGMfyyd7p3C4egahkZAgnYN44t4xK9tDBke",
  "key17": "2rj36DbRk2qiRAiU7QadfRm9VFkEx1gAvfJPjQapWdf6mexEjjZTEq8hpEX69zXDsAVuwF1Wr24wCHsLjhSo3YXj",
  "key18": "3AnsPR3Yez7Z2fkrFVb2X54MQ4ctWZ6Y7MZY27ujMNALAM7hQ6KyUC6APKdcr6ow9Q4bQfC487BncPE3xen5WgKi",
  "key19": "47E2Bij5cxNrzUx7AyHdvS4AGYD5bgY8o7w9Cq4gD2eKG74nmZ5PLsoLtG2ecvArWMqVM6v7kLtxgbCoDjPPt9jX",
  "key20": "azDt9iGM48gyKM8jgueUJVum8ofzzxb4cXoDVLXvvEq2yeVN79W1SBNQAyZjKb3WWSwdGcTptb6jA7Qhg1qCP4e",
  "key21": "4nvm8uQoaxG8dLVvFwrQZFBzePv6B8wL5nrvtGhaAbrtvYJm6LWAe6JZq7oGvM1Sne2XP6n8zLjGGLKfjPc8V1k8",
  "key22": "3qhJ4SUCf71s9LMrHob61PFZansUamceDBG1445gzG4bmftk23isv6N1aTeDSYGDnYhdm77GnWAJy49FRUsmpcCM",
  "key23": "5sYDbeCXKYNhvdEovjK8z3tiE6Nj4aqrJ4YA8YjBuxkX4NcCEbi7f8wrPviBAUaJAFqJCQXWQDZVZXiwNC5J3KBK",
  "key24": "9FSYJufod4crN1mimxRrcszdf3Z1pKMsvJXvTxCNscS4QinXYc6RgcsLr3piBqE32bqvt1YC4s2NVcG13T8E4Fv",
  "key25": "MzqFDGd5ngj1JZWwFYhiUJLLxG5iEQsuxAeND2MjvbCq3oo8xE7e1i8tcdfs1LTpuH9BrxDbqMkZHdJeJC1hkjw",
  "key26": "5mvirSGTsKxzDsQbJf24ALWVHGBBxcuVbK4nUiDH7pwXA3zke7igUUJDmDLXVCDN2h7rqPU6SGX2pSLkenhibmVW",
  "key27": "5SmyEyjX8MAf9PsKatuTeAGMvpvmsh418HzdHDdrUy2LGQkdz6NcgW2YkkHnpxue8un8JQf68AmpgJn5ozNq9mEA",
  "key28": "5eTsJ5t8mDXvcLmYkSJWu4cQDghbkEdSk3KggaxGf5SwHUBJhkvC7iTMS6dQjSV7txy9mJjX9ZRwp8LLyFjsV7ZF",
  "key29": "87bgFV1edVWjjA11dNkWDnDJso1wM4ty6WFck4biDY8PfUwHsAtd6LXexvPmSCG3XsEVjsqPeyTL2FH7xAFXc3y",
  "key30": "5kgjtvCCGVzD441Bst8puns5dYxAqoAjeXHycurdkRNd9TNyBhHKK6ViCRPMAANbkFkiDdWu3YjwEsxTRMbeSjtB",
  "key31": "39CWsVpgkmHibN7u8mGvYhpN98eFMmbo6zf5MADJ41zowgvpCCr2PX6q7bPp2KQSf3DDteWcnfGxKWLn6KzrbuSf",
  "key32": "3xRgcw51Bem5S2fNwFvaJZZaX4QCkGJgk5x2XATn2dBLNkHs2K2u3bEiizvXCZcssTnaM7v1mAfG8h95wFCJzzAe",
  "key33": "24ET4jJ44xcrfzp6r6WbEFWDxpfitDWn5NaXp7dofRABpFLBt4L1NfyqSSuCzEykRXipUjFB77ZhNgqXihZnoxLQ",
  "key34": "2yjYFDHj8tUdutWtmNQKzHwqDsuXBAw3CvX1j9eCEZ13N6MrADrv7ve1fzPYVCczFvxLnHtBkMKVsZCKCKfKhwEo",
  "key35": "2ffDccdGz3ABjxjJ9eWtsVV3W3zuQa6NwKZmmPQK4Awv8xb6XwyXpQeFhBGobQ1yzLkfLF6hjUs8U3Q5znAj7fNj",
  "key36": "X2k7wZMYCSiAT9yBg3s4iP1kvFkpFA5doNhhQvCjayKowJPqqWWshT4YgRiXEyRmtxwQ8wx113dxwEcj99Q96JM",
  "key37": "4wBygdyVtnmNBmtEy6WGwXLw4SjBqYHjGoSwzbbgHby9Yo1yU5ZatnvmKbmkPJ2HLSmJFEhKfrnfmqo1BvnPaL1w",
  "key38": "5vGzYYUor9XWyvcbqj6wkcnVvJqQvhFsL9sm8fjooPom4NSayV7yGqhctjRJjT2CJHnYjWDYj121E9asC211dUxg",
  "key39": "5Uq7WCxtG7DBnhRNFaNRPxvkE3TBYC59bMpZwuPf2LVQdT7JeREMBdgiCSGxPcpgN3b9msHUpFXFNhb4chNzrMGK",
  "key40": "Jq8fvS1QkUy84KwcyXfD1CET1pd4q4sYmKL6ygF1zpyD8s3xr881gdPLBz8gyc38pBtXz4TC7Y6RfR8GFc2fbSr",
  "key41": "MWEPXw4P88oAmRWAfSHmwiXAjwkdxdNksZrzrHavZ598dV8d2kCuxRjZs84wEJCEfL9AbW8PREQ8ZiKcJ6dWEt6",
  "key42": "5LqC4GZmz9467kDEJDtVzhV2EL94GuW9xa2MDRTTBsmvdgbYkNA1aitRsxfiKfXFwhz3uAsW4J2v2WLQWt9Ax98M",
  "key43": "4PnhWyZdFX83B6it2owhCkkpR59MgBKDRk9UqYdfp5UTh4iftrQTRwzT1ZkmirgJXSze7Cw3XPEVJvuSBMxwFeGU",
  "key44": "4u8rjGrmE48K1x1K4bByoYsAZLYMKT1ZUp9D2t29AZRx1Y7PQ99MdyS1P2UiHdgiS4uWJ1dVBjqUqefhAnFuKmnu",
  "key45": "4MEaTGyppRfbHc1yNv3YwTvA8EQqdazUTnCZjESvEYi6mahbASAFJxKGJYodURMoMSG3qt8uSsLE7EP9LUtvDoY6",
  "key46": "4ULqdJivpFpRMQKGP9gHBDUbWQZczg7q6ggJCgMPvsPmX4BeddLcWNmriGbkifyABRvLbRVDX14itjBH1o9BN96L"
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
