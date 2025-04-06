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
    "5yCjMxYAjpHymDJH4zq8fyYgrLjxk5KeiQMqyhFyoQGkZTSGjwRZfkrnZ5zmBdZoe2daGZ89hgMxoWdxexGj7dVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8VnS36cWvAKVXLekH8xw1xyBQFFeLGdomVvBpZCpF9GGWbKoLfF2nLMb5VngCLngv7pHspmNwwbsmG4WnTc8Fs",
  "key1": "37nXJVwjpgLCLuCLwAs9ENLjqTdBKFcyvtAkbMR1S9VmM59WWsQc18FCEhshmAetmN8JND8Rp7Qa4Dm37rQDNcjM",
  "key2": "bzhYT3d8Bh6xTuAQH6xzhtRQZrdD4THnA65GF4eW67DrMid6FkDuiTiZoEPoFRFv56KuKn3qGrLi9d2wdimv4xx",
  "key3": "Z5eFS6YkJyaMXpo6VAN9957G6dUFx84jGadacrYtUwLr1m9LpAWB1FFqSRJkMa5nMcmhfPE2D5xs9fweQpuSgS8",
  "key4": "4EQEjpmZLtqPguBZTVBxcoRcmedTwhjKVZwBof1ijd9GBYvzaezDZckgScLCzXuVk8GhR48gP2DQeho6rWAXqDQ7",
  "key5": "zdWynm14a8w7UHLk6NUjTtovL6VGRrcT5UsE6hKN7CeaYJKB8yexXukJtCJHWH8D66MiQbmvN78LPA3jxfmK4br",
  "key6": "48sRGrUiAYLZKRprJaR2z94XE1E8zY82ikYcnPjYH7tB49Hgtz9s2biTw7HztNL3JS1mux117PhnoBMfH6qAyXpA",
  "key7": "KDFpCefgw6bu66dppACt4RzCJnArXDBss3YuMstarD6ycgios7GvBUGdM5JG4vwGzmeorTgW979BnoLjmWnEjKn",
  "key8": "2YBKF5L6Fr4sU8p8PZfuAqaySaaLGSn7Q89TnbmVofyw8NqgJSZ7P6TPgYYSBtaVW1sUdrgbvPcvmSvKPN5KEZ11",
  "key9": "4Mu1ebQYfmCtW23bRj9aJ3UuRmxjbhhRjkuwS6Uv2bneMejJaehPvUnGrNpc4k9K5VC5ZB4UmMJGjsACE7KQzeLk",
  "key10": "2mbGmzHa43etXzap1dj4z5DoDwjZ9bA1s3JPjkYG765vWxm25SfPHK3p5GvbU2h4TrSUH6FZjoS22Dz9GAuV9ydq",
  "key11": "Ke7cM85NKvczC22vUTjCnqS2XbA2qtceKEBC3iFckYhSNHzZ6sTWNZPW7pQ1QHcU1d9s9GWyd2yu5WvihBC1u1J",
  "key12": "Z6EUSWs4qUff1PMu9eXij9e9hxbPe7utFy5XydnnwDPzPhjoXWZd1WPTtcaUnwvHpB9usx9KdudaDQhJEjUJGLW",
  "key13": "24C46pSe6yQWqHSnWKcB46QkpZnCdEAvuotG4vhkQCSYTMJGt2CHq9icMfapx59171RTb5MuLKapo1uYXNSL32JT",
  "key14": "3Bz2yvL76WZqRrc3Dfye2WZbCJBet3PE2xBypkhKM2LgUL8tXSjcqhGXxMrVZBRn95i6riKJgnQUhSL5Y2gjnugb",
  "key15": "5146vsF9nvtkrh8UcURdVaJh1jA2TUoxC1xHPcHMh6QLcQWjCGZpPbhBcKyaAdgivHYECdpCSLBFQUXHdSj7TyDG",
  "key16": "3Z4Cj9WGJGDj2GESnNTD9qsBKExj83HubDpBeRdpzrFphRzkkB86VdyYAx4gpkp5MhecXqekDuaD3YozZH6RQPJU",
  "key17": "5qDdgt26v6me5rtTNj5r8sqQDvqZ5dmyd38sNCj1Ds2hr5BDqEKw2DEg75goT9rMoLxgbRjbCqgRnk81VxupCs4V",
  "key18": "48r2iJWqNcCf4i5CrNFQwf9L81sPqxrrLLCGLr6YjYPC3trn2biDKiXbC1sZgSNr4d7Zj9G7Qx3qJekMdJnE64NG",
  "key19": "3HzQABUXeFC2kZUhVNykpExbtkZW1WE4PikjdmFWwt9cLxPE5DXSNkdGqu6R3mJTia55ib5jwjd5EhMQkFrx5ej9",
  "key20": "4UcV3joiqd7n5csj3H7uJUXBBK9y3MVUyd8PXiUmhC4J3gTAgUZveMvPKvLqadxYthHRHLwY7P5zQNeMo1dTgLfg",
  "key21": "4awC6k5Dm3zkgZLp8njrKQ3uzco4zX6ZGWUwTeTTZmPPujVLsQ5f5iXjkbW2quHGM1PBdPoZhmn6qx66D6V2sfhB",
  "key22": "3dRG9HiH1CZbZW3ZEy16aMYEiqcjtWDK5mF8s13G7vEsonAfZfVvbGVS2Nfbqros94aouBPdLXFLtByp9NrtvXPG",
  "key23": "3ya17SmAgFQFDvEJ64NpgrViiGS6xx7jvsATo5QVW1XfwTjK1WPEF8WXbyjeFR5rYyUkGi6eeRLZfjnwMs5eauqG",
  "key24": "4mPcTxmXuVaDPHihViRV1nv6yuaJxJqbzPgQxoKESFNvnpLa7jqEftEzMqenqEQ5FKA7PQ1rdn5oEU1oezJ4DGCC",
  "key25": "4kHXQgkGWUwcEGc1ABsf9LvBVGWWVLoGQzmS5XexUcg5EKDqCU69sM2Qhya81jh93L2FwnvjgZBrKXjDscKTNwLi",
  "key26": "3HNDs6PQBCaYDUXk8gmn3c48JZtkEDzPLH9UsGgTgnJn3nPwo3V8itRKn4U2ttndoHXw5NK6tq9Kasu3oKecP1Av",
  "key27": "61GppkgPnw4Vk5FxLAA2n67igTPRU52rwuaEVnuWiNbUpygJE161Lm3fWL3osCgTUYANWyYL4N5Kb57F7EFJ9Veq",
  "key28": "5dnCgb9ZCQBdAkVbPXLACKwBJD5wvqSUEuqpJ8N9YGhnCuFqfydubccLHFW8rvbC9oZQCypkU19egwBTjdo8Bd2k",
  "key29": "3q14utHhH9fjtbCWQUXgdVWRPfk8QW3diVMutnTqNS1HsgQ4KaLat4T5PxmYkYmdYSwd9NcHkB8rrgHRS1hh6Yfw",
  "key30": "5m5xyFMZ48toJezSShAcReB1wWQ7itHewAyDd5SGECwCk9UdXxprRzP1pQWvfPZ873iVFi2tRJ3Jm3UtdpGLKcC3",
  "key31": "31PvcJ6LomCJ2wFBSPxGJUgd7VAgfdDurtqngKfe1ZXFLra6hziY9Auqr37rYCgG8D4g4hx8QspHvSuYHY8J5NH3",
  "key32": "2uxwWXCC8s2QNEEboUfekKZ9sMPxkBMrmMxn2bBEER9NyqTEDeE8hdKTctZ4e3WRgFFewfD2nrfAVqEj8Q8ke2Wb",
  "key33": "3KDd7ZoW61erSv36NDC84CoyrYZRmJqYvoF8RhyZZfZva8scYA3JfPRRLmMXfonthqot42t6DQXvHB59NxnwAGJM",
  "key34": "4oyhWV7Zo6wXTtSz5btdGx8S56UVF93uPVZGv1PVVpwQkyq664dP8fvtAWezkMWaCsmDhUAqYanfXJLeqyuFXmUG",
  "key35": "3tv63k9AGMWmVWhYbaVnGGewGvjeeAYjJB9kYjD6YsLCpEy6ec5zF9hizCtDFCdM9noK2tNL1dJh1BdajbRijdom",
  "key36": "2S19ctGTgDwTHS9YgZmp9RmnHogSktwpEVyTNoa3mvrj7Q5RCFguKsaJHuUNUNzvJyGoUbGwWiaEGy3TgusAVADW",
  "key37": "5rr26F1roB9BPEEp8HQ77v7jtHbUm2GrcphScqvDVME8CMbMu4R3HuVZW4PPYsGRPXAabiEBSqEDP1NkvvZChKCk",
  "key38": "4Evn2mP38Re6Rz8pXaVepMFjxxVf66dFeayL6HjAG5ZYvzPFoJdTZKdjyPMb1Q6aEgpXYt7WVMgDsmP97DqoYbf6"
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
