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
    "5teXS3odJuLsXzUjsfaAP5pu9eipeN6Arun5QoeQxDWQkFnVtmzVm8NagbVg5Nk4nKWYcgaPRxo9iiCGgKQKfobj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zN4FRnhRrJwym61YoS6r7WwPmkZuxqDtkg664iUikB2nD4vryJY935a7QtdGQQ5o6wC2hkTYeUMDvRe2CAosVEh",
  "key1": "2cJK9jwssjoixQtuY4wqNdqM5yayF7Rn5dCP4NrT6SZdKo8vZ3aCE7ucoMbQbK85dX3WdzhwqqsksLe4q4Bniq9V",
  "key2": "5HL13FBpbTgadwzYEee18mtHToJCLxBXvURVBLNqMWuySk3ZQ7JLRkCsUhQrdxhiigqVpubgeBZvJ1PcKethhmVq",
  "key3": "5J5nUjZe1FPfSD3372BtkbrrmwcGFeDTu6SG2PPXvxh6GFtwn5UmhpfzMCBboSMznVHRooncRVJjEyASuXJA597t",
  "key4": "4wEeYhry6MTgVzycXv3SEK7Hv5hhZuWY4ucqEvrEKrz46Six5cCaP4JgSbw9smgvub7aYhv8QZcb2g71N61PQo7D",
  "key5": "2XnqWxXpJHm9D9BZ3Jot9q2qL49GPTJ3T1Fg6rNbHd6Bt3nqbhiC2BrJ1c7c4w7QrZdVJXRsboqqsN93nYZpkTbK",
  "key6": "53LJxVgfDhQDDw7DzLm2iAuN5Hu4m6SQRBFYnALuxWdnS7485ZEk1fKQXbPHhUV4Vd52bD93ApKhywh46ydsXhhk",
  "key7": "36rXLH5WM5s4fLTJjuSvP6GU4bHQMBPB35wnD7qkLbGvAJSZGBSrsaQbJt46XBVbH7wQYq13bAbWHQuenYG1V9ke",
  "key8": "4Ld59PW81CcDDyuR9mtrJPmZdBheLEPe6DdpqZVmNKauZrHKE8fz6jfe4kGocaMKcTusRTHEKs8SLejwZqp8WwqZ",
  "key9": "3oUmNCBPraiiy4JPbJHPx5CpariJzKtDJ4bHooUVAV7GYroLijqPxioE32oLnUEwXAsRb5fKuCz9wZaf87CNq9iD",
  "key10": "3ihPRqUHRqtFv3e6LdUWM8fHDjh3sbfqnbttc8NCaHJJG8tAaGExGZee3je19ThHwgvBYJ3RESmhpXhFQsRYuZLE",
  "key11": "XVn9CxFht9Bhfq7KswJezuTBNJcha4ztZeGB9519pe3tYTyLdJPWB2CaGorVXk72bzkafziza4bCTKZ3v5R3fzk",
  "key12": "4Z5i5XoPRDat53Ey69VxqeHVgXHgoAXiCiLTPtLAdYd96A6kcZCXV15FhjumgDTg1wpc6wKqjqeY5S4pZoVchYoP",
  "key13": "5nwMhyhXmM2Gf8ep7jgKgXR9Z9ZL9WVjW6SofGr6LE8HRJiUPY2ig7WmzuQh1vJLZDhuVcy8mtDQnUypouziDBLJ",
  "key14": "28JGcQ7XmDRQyTqyi3xp76XcaWMsMYqM3w8tGokMrs9QHNaEZjZYRUTP2g4BiRz8oRVWmZgrCz6AAxJdvi4N2MX8",
  "key15": "3LrErce7kxPhig8NL2MzJajL8o9BUMMRnKm6TioJJ4DVTYpXKuBvASXkGoCEbtaqRKi8oFbscmWX6cHCTyqVipSc",
  "key16": "RS6wCu5eDWNhPZWiffprTymeXLB5e3SFwQnuTowSihRKs1QuUkuK4V24Q4agmw3mnnxrkviWrw6H4fcjZGoLQWT",
  "key17": "3UeB7QjZhkHV74FAAGPRqM6kPGwKiyDE6JZ44iwigNqcQ9ZfbrTN9G3T73K3svdqR91ZMqpk5fCLncKLc3wyK5oq",
  "key18": "3zgnDkphY2RywdJG9hC9SB7kBqTfVAiAqYDKRRJbpDtciSjoC7DpM9E1eFSUqF4saChwyTKb4wA4Uryr3MsKPQVQ",
  "key19": "3XdhVXa4cqmG5tQW3HzpUMA18ZL6bPbodXjXU4jn5a8hxsFgWdSdj8u1Dp5znBeV519kQtaMvNyoh1rQBuYHh9uB",
  "key20": "2nF6VYYFEzgUTdCHfKsngY8JN5NmhApxizi6veEjd9gxx1Ze4ZFp3PVGWHQe6BiT6zhQDCJwkM2m9GyjLq8ks9Rv",
  "key21": "51Cf8hHo4vUiFaXyBmeMmYZJakRK7fzMtkBWLhpHvbgs3PAxybbYJznerVSGL2FsSMzm75Wmtu8r4yvzncQ8igQB",
  "key22": "2qjL57Zb9nsd5PHurwjeQtXHi1dyQvMFrdY99aALHX8P4L4L4eBovZLCPzWquPWo7sSRbmCBCG8ji1zsMRd4vv8K",
  "key23": "3HpHM5Erc5B16xKNNQHWPTWZUrtpTf2CjUxDGMCQpc51qa64meZg3jmVfvRQASN166vxct58uxsrpzTGWngmiUgh",
  "key24": "3u85ZB9129AWrzGYta5ZFRJNuyhvW6C5h2d5riLiB7ifRoPhH2hmgbu7nakh2Dpt9iNMxN29DN1Bewu2b4rNyauo",
  "key25": "4NgrNmRhjNTt1HvZWQuDTvtixHk3B89p5TBpJNMRZsTX4XkiuAzXA46JfBEMhyVa6dwuzBw6krgHepwUVHzA5HAX",
  "key26": "GWYtAZE9EqMEQHUoQ8ZfN8UAg3qXv1WDqqkk9qnGJ5tsTH2qjw5qF3LBvDXfnEex8FqASbHgGhTMJifDypAZDxU",
  "key27": "RzZ65Ai9ahkEaNMDvgGL25QEFMcGrvkrd6z5CbBAHhFvLxci4ZY5roHNMzHAbSzkztJ2235Mq22mKFCbMny6bLJ",
  "key28": "3wDvGrx5Nv2Zkq5UXq4AguJ8xWfk24TGhpJvMND1sFQ8CLvFvg9DC8pcZCCnNVy9kgFVqqYamct51bgVCkTaApry",
  "key29": "2SRGrCy8xCab1vPzJQB36XHDe2kGuqpzk6QqEhE3ENb4uT4n1XxfiQKJ9zNrr7aT6iPNTqGDmbsnjJdfo6EPtnW1",
  "key30": "5oH5iMkzf1Ao1YvAFJrTPmkWDVrYt7XpDAZa2kCzGpWorRkCtTzyRnQernWYKBH5XDfpcVSr4PD61qcJtgzewbbh",
  "key31": "246nxkiX8pHym5CnsTcRGZHwxcq3PxzGN7QwMyxkS9BscT9qEa45zK7XoynBMJxodAQWgBj8tJwchkyM3sWVVH8S",
  "key32": "r5qm9W5xcwPaxZmNZw4hJbw2dWwPX6hGLgPVb2zTPYnUPgzD7Zz1kEfPoiEwR3es92zQouSLFqK15Rr6N49cPiZ",
  "key33": "4W5RsCAdSeE3yPyRi8ZQskKVLUwgxKn2cTLepDqJj675xc7aLsvGvqYDr6KyX9sEa2277TkjdwPF3Pztq9i8v6T4",
  "key34": "4NM5LzfDo3VrCBLs17Y6A6XQ6fc4M4BdYAz4M9aHyReYqZ8mWmVMu34gr8t7yByDwKZxsuFxgctMh2mP3esaqt4M",
  "key35": "3ZfD2LJvRt1FUz4fXgw3ktkwJARR28RDCz5DudnPAfFH5jzGPZVwvfaxfYkWuEEquARNZc82eiACMgtb57Zns7Cb",
  "key36": "3ySgVM8536v2LuDw1nKJcib549M5QKrDGWcRTYu24wTJH3u8bZWTkyusFG2bbDcQoVfqFcZsd7VMR66UgGLfXLMG",
  "key37": "4Rq3bGkWukyoGqU2j6EDt2e6V4gCXMLusVig3TENTPRM9uJH523oC6nFtzVBuR2LoYK5V43UAaZxsoHmctErheHY",
  "key38": "3E8rcyPV35rbh8aicBrds5xNiQSZev6uVThukPQz7gQqa1hQhddumBNNJdh2HJosvnABqa91wowAN2KwxK5JraTR",
  "key39": "56SZ8tcJVrorUhopgKt9Ch7HmMFzRM7YLZgMKaBoM9reMWLtVLcLm2RcH81cNHvk7Btnw3MdMkG3d84NyRzSH2Z8",
  "key40": "2Rs4BMkV9DqvLR1DKE7AvENB5HnDJaxi2gh16xBzf5hMCdzz3AhzwLbYyXveZ5HyB3PVDn9bnKicpSzbrMKVci5o"
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
