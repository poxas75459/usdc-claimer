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
    "5DMTmgstNZgMWVBy4gqVf3Q8YP2VPq7jrYM1GgGsBQqAjVomsujuMYvS8YxUPaHSQJ1UAuQj4YJ1rdpMvxvXushH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PsbqQk3ZwDk99nbUeYvxrp2LUAg3J8qDTkY1nko6knP6rLqJBFuGeGJQHtkJtXMcKt4BXYKp5V6UqgoB3qstW6H",
  "key1": "4Kc739HfRYSYGdP5ka9i7hExfMM2RJdcqEj1zkC9ycxTBpPPZfwixRpp6Et6nd1tz5Z8B2P5ntfxSazVHj5ciXrf",
  "key2": "5wJQZzPzm2UrGbx2gk1P3zzAxryiM32KQiRBDgxVJqoArz6ECjW7GSVzBoD2jSwEAKSa6PaC3e5udKW1L2RWneH3",
  "key3": "5PruKD9XUnWEDpjCCuAaQUiT5CpEQAg9Zgtu6Xmxx6eizCermrWDhpCT6frrC9gTtWYFx4xAz531RUEkwN5Q4is6",
  "key4": "ZVYfime9JiaaVpVcQEVB6LrEQX4c4C43C1zfPxJgjCAFTuMArPPF3F4Czox8HBCLASyjfEdgcoNZBSrfpXfTFHw",
  "key5": "2oe59NEG5XrvtNz8nRH2n3M82wSMidnSjgC8rkX2b68SwFP5mTzatGMiLZqtSkWdBkWcfWdjU7tTPzeqW2LDQb7t",
  "key6": "3UFekkkbH8rDreaZE5hYrMuGgVoMEoJX1Lpk11WZwavCX8vHwxeLaox9PW5MEY9amVes95wKg1Kx82frZSmzRvji",
  "key7": "4ZDZYtNYk9hGGsWrNrf3oy88Rqag3iX9DtvTUgt1WjCrynKmrt29eRq6i2myA8thLKffPndh38bG7SWrYFLW5xcp",
  "key8": "3kcRw6QjuVtz4RMQTJ7cNtkN9XWYcLez3xM66nAAfUKhh7mP2PuHudiesYhzJhVCYYyM63pzPYnpU87ym372bTuX",
  "key9": "2WkkJQ39SCDmtHUwEFFFw3XNNHSgQrKRqAwfDCD6QUJHupKRMtk26B5gSg6Zmy3Uu2eymeBppUdfj4gNUX9f288P",
  "key10": "47idnquD8sNgVV4jV5k8B5fdRi1QJAyfhYc9SV8PwjsheUZUNT98DSSv4UMq1jBxBq25UxZMt9nVi3tZPrX5JydJ",
  "key11": "Gjv4f6TQkhQXN79NPoi8d5fQPUDXN9fpuWUtHZVnpwdA1TfjjnMGCti7iS2BmE1VCjx7BTYYEougXKPoTc3L4gR",
  "key12": "5TggmsGsaefH8a5z6b1jj5vq1NxyXgY56HpjuYL5rnJr5CyFyvp3rQmtJqfRCeCUzKmneagMa9tLeti6hcKPsyW6",
  "key13": "3nG5tkVUEoJwXQNTUezNZDtEg35jUJshQhcWq2FSDGW6oxvbmmAuPiHbvW3C8EazaohC3xgXTgYpujqv3t7hEGZw",
  "key14": "2AmSBKcWAEnT9M8Htv5jyL2R7GH2wXebHchVLfepLurNAYpMKXXQHw71nyC7y7BuJmoSVF3txuB13f6vxxLzsyQt",
  "key15": "5s4Xt6zxAEf1HfKLPFouzrNmumGXgJnnPGykAwinP7xeqRfvSt4QubrKoGPoKwhCA8xyfPDvPAqXbuoQsxgr8hQ6",
  "key16": "3me5RYfiYb7WLEdi5Nsm246njYajWXNnSvo389bZbGS1tzc5gZ4wwcMWbYZ4ZB8m7LUfDnRU6qwzkDLRmv8inAmT",
  "key17": "5c86mFCUiN1PdyZATMeLK9GPHcm6PgVsLJKGZz9UmbD7HUPqJYTD77t8uyp7eVKynzczMVKAZcspEVnsTXc7GtsT",
  "key18": "224MbjFRAQXzs9NqHcBTFDYf9Z7Nhe3MiXPW9MtJ5qEwWqfZxtHep23U1hc2UVgtN6EPNh54XFNFcwbVxzy95Y5g",
  "key19": "xVuvrWWpCSJXYNq4dzCSct5bw61s3oQPxzeZ2D8cttgGWwxvXw8FSj53MP9yAj8Bx8woPFTbeHERWp24qv6ft5t",
  "key20": "mfwqXDFA6fCqj583gPieRKW79m81BniGAp2sEk2kqTRoUNask51oEeaGJwAdRef3HH5R4xoTuHbCUvubZw33YGH",
  "key21": "3A32tJQaEoayUqGf7buwSkJXUZyVcDfZDR6bSNmRcMxmGJfds9edp46FVJQo9fsfchTv27mr5rKTnLzrEGBeHpNc",
  "key22": "5jHcGCTzyGs2xJfeDm7LzYEUvgjAZzRDyqtHYVd1GLR2BGrVggbELbJqgoAQ7LNgqLMsQobKdoh4nJMC22HK6BFS",
  "key23": "31Vn4GbYmH1EaTAWTaFjFe8L8BvkP31DfsR6mxag5rwAVevK7Efu6nEsasDgNiUpk3tc2XXLc4hg9m1DnFNmNLPt",
  "key24": "3seioigcpoGe9tNqizUMtHvPJM9kbNb6RXwC1wZppytttgtYiYrGy4w7yjDRWpJzc5is8of65KfearP86EeU3YPx",
  "key25": "fPs2zDTVrTmPZ822fYzaCjPBz1u45Di414PZzC1iQLQgii1u6ivcibuP65p1ACJfjjXgMDo5utsZmgqvqg6T3d8",
  "key26": "4D7ESaaAWpDsEqnWU7h7dQ81Kjf5zDs7kxqi1PMVTs9ihHjZyr3ToLgoFZRCFdU8U9zykLhN8STKhsCA3aETQz48",
  "key27": "N2D9jYtrcWXzGGNi5f9kUTqbEswj4X2iWoZ8YDemjeZpnpo83yvkyjvvpAYqgxjC3ATaEDbxeBA4fmNER94nyKb",
  "key28": "3aN673UNd1CFsrofj4kJ4En5DQ5hh3F4t1mfWgL9EqkRJJdAzCccWcC5edWWhmDhJuRwdSCrK5kVT58qYxi1MKFs",
  "key29": "5Gjnqxgr4Kkrfh8LJjoXFy61AchLd2skcfTmiySF5Ewm5dn8fBBFjyaa6QL1ijSRDyMDafr4jh6w53zwkJWHSAxa",
  "key30": "3KhwK3EUogpcsePqnxYFNcUusxvQz83dLcpB8xHVvSk8Sg3gDxomBwRYKdiTmwhsifH5frX3UZ61VhfAW52fupLb",
  "key31": "4zngAiFo8cBQccCqaUtKBi6VBHDUwumThkAh7fD4ihstxrpVxE9RudzHWP8BGMvGHiECY9wb9KQPfZ5skxuRe6Eo",
  "key32": "2Q5CseSzaCcNqmKfogtpXdYYw8uJuHPQmK72EzkKhH7JoNoQrQXSNWkvMnUeYGrYw4dmuy2G59V5g4XFHGYwH2Ve",
  "key33": "2JsgbRRe46z1x89z6TzFbDMma7YKGTF4iDTBwPK8pDb9PE5X5pQv7mmcdLmYdfwYRSK5ssJLf6B8DgJdvJ93MJRR",
  "key34": "5ViFE4koEwkqTtCaZe3StdiF11NpxzCMBtit3Qh5QAhndsi5tkysG2BsZtwynGeN1Yhx9b53GukjjLd6nYE4TBcz",
  "key35": "3uCfu7LebwhAXqL3rhd63zq8TeLQb6eznLCEymHakxQ21zbyeo8n5Vg9Cuw8vbX7FveitB8pWKBQAtN1G8yZneZ7",
  "key36": "4RrNw8HDveYJFnTpB6k5ENjSdNZebVvNaNH1rxA5JWPNtYXmp7ZHy14USaEj1kyWkmRRb9LGzH6bqjGqajuXeVHo",
  "key37": "2pusUfwWF8XEdPRUrjLpVeST1bCrBRzWpNLbyvufWFsBaiGoQrCnZ66zYGPfX6YH1MCS4tpzdRGN9Sw8UDujisVB",
  "key38": "3Pv8ijM2UmHeyGySX7dkSd3otD8Um6FR4XfyqW2tKy7txEUvR34fvtyjtNLNWmBb9h2t3SVQdxzU8yYSACbsD5Cj",
  "key39": "2RGGA26vuAuUfASrvVPfsWyfLexdMcRqWg1vqghVEds4EhSAWGqZxNybAGmWbLS5c9xXYCNd7hxnKUahrLrA3KRW",
  "key40": "3FzQai2BKqA8qkD857VJ5jM9eSfP23qpgKd9kQwdTi37Kuh2sEgdXpR54p4DQ6ArzYMETNzqNBUdWUrJtXZzgwTZ",
  "key41": "5bRRB3ANTfGcrJatqZShPHYJGhuf2AwXZBwrHRQu2fUbB5YPX9vCvPZXe7qzZTAewwTefTgopeECifmzTfspXha1"
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
