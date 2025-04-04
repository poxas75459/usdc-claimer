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
    "2Mirogd8nSky4Wo7YWaa2FKsz7FhjJQ9trHd8efFCyUibDuTYy3tehbTz9LPVw6rtER6tBGhtRwypaemEtJbsjfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8fRwAmxwqxPzdTpofVQWTPDP4XCQrASP12df1dZnsaqM6H6GdHEkEww4Bg8dJ2tuKUp85ANFynRzM3C1Hx25pm",
  "key1": "5a64uo8rQgEXmRu9mxqZJtS1m6hWwtaZqnnJxMw9qYppTwK3PUM5gLPDehsjipUh6hvN1TRaHN8mjiXgUq2jtZRW",
  "key2": "hN8X6Zk8FkyQV4rJTqSbbvpf3AQceFxzChVhbmacPNQB4t25GmpqSYLwMPPuwJjkRTtrZBUSD6xXnYtH1EP57L9",
  "key3": "2Nh5GcL3VmEhkE1BbQwC3JEEBYNndKnnhVf9tX8n7i4MV8SzWYQBt9rtMYKc7Lwz1LvSfExULz6gKLBuL3AR34iS",
  "key4": "3uZtgrqVzVt8RUmibwwfHrN9vqhfmztHddAdf6CVfF6gtSr4M2fj4xxAwfHdMzvTEpfg27bFBY4JzqjTNWo3S3r4",
  "key5": "QQRGNikKyQB6LgSoE4JcUgaiHUEw8XjBsKdHrdAJm6JRoYMWjzyydQqDdw6yiXL3rHD6mZ3iswLwkUtpn3FzU1g",
  "key6": "5FmGhkNsHLCpwpGHzAY3ViFJTj7mxc9MkWabNRJEcFgWB8JV6Jpo6U846J44LRXtLBybbKt6G1PVtqxgBS2YqCJM",
  "key7": "5s5HDNFUc8YhaPhWKUYfE1oQcqXC9Y4fybCTaLF2M3VrSDVmoXAhAFpBoCYdJWUh9CMnqCtWNecqbd5tKtoQf3NX",
  "key8": "52H1rQg1yKCR1R9LS5NZDCbzyUykJAswTXMytjXNiw7tYtw6BD52cKFtbVBN1L3R6FAwBqZ8CxoqH7X9NaT958cg",
  "key9": "3dsJiR4vdwHZxpPcwCYAhD9K2neEVMs7uHMmURorD4tRaGacFDP9SxrvM3ZYivEg2riNXV9BrVx8TvuyTcFF7DoF",
  "key10": "SGs7MdnPbFPDVZ7e32KheTqzTU7gMLQMgp4m6h5XMhhenAiQc2vsr2Zur4DvuTfYW72DDeHq96gm35ufVfGDcck",
  "key11": "3vRxLry9nNWMaGRaWNMkMogGkxW1C1Rk3rkafFVaTf3sawdF3VhcyWQBTLqimYPDMBcb4W5a8cXiYaBYWVahPUty",
  "key12": "4BAfQn6SXD716GcgEb5BTNfXTnq3yJZ3ZQ14veEvirRu8U51nH2A4N1zHgVWw1XztS3nky7otzjoK2pGestiA7Wz",
  "key13": "3SX9jprAD2HmiXL2mB6DD62AB8kbH6DhA4RJZUM3LXS7oaXBfS5M2QgJDq9jtkCr1rJbK8CzDHqZ6q7rbQfh99wk",
  "key14": "5d6Y6zNmB8Qj9ZHTGRSyUxiBooG18BgT4HbtNFJVKqThUUbzEDQDgZFdm2mn4MSESALPVGp5CugEWjdpgHT7QKio",
  "key15": "LuYb63FLai6YxTMpPJyCGdGd8eRM7oARHHUwpeYL5tdZeCTJEBobF2boAhHP1pPAh1GcjHeGNWkV8bFfke81vGp",
  "key16": "f9JrFq2KLFkL9GaPfcr69zhEXsYSmDCZ9WB2MWVbjVKmtZnVBWkZwbSGoM3ontxuoLVKvWeR9UXPmWpZLtmg5hD",
  "key17": "48nH6aV1zJmQYkC3hUZkFRrxqrgAGHLPmAAifxENaofdW4oBTEpgKEQrSeT9GEAsejmsmLDxHX4SWbA7x4vf1jmv",
  "key18": "3hXshWZGBHJNmsamX7WPTDuFcVzThBPijCi8PL3d9FZMEkCnDB7jGZE4fAYBSp15R8UdtZ2nB4GMXj8SPZ42pQCM",
  "key19": "2kXXjbFeDx3BFCspt7m85DzUwTdGM3sZVoNnYJQPV55tC5vE4X2vvGLKepGPhJFoMa7xTPyRz6MEaKDnmHQaEHar",
  "key20": "3WRk76VVAvX1pn2eTcu5RggyNQCaeJ9hkXQoF6Dvs6iKwFr83BqyUyK3yU1cZwmFGrBS1sC1U8PJtEehg4nYDU9S",
  "key21": "4o6rUFW2YfP6LGyv39CfLRgTui3BKmtQXkM1jLAF2XkyqhgwP5UnULt9eh7HJS3f29g5BPCcCEQ8LgJsYG1N6CBU",
  "key22": "29NZAv9PkUDLuC76cLhE299iKh3FYrkxPKKKoVo16zrwJgEgw1EpBPfryrtpuPhbQL1rpHtRqnME1evKFsBNS7L4",
  "key23": "3HN71Sp13k9EC5wLvzExMDSzy1nsagatGJJTz4EYv6mqNKUcHXj2PtHDuRzNW9n5HGFA2YXM8UGYeeekqc2b6zAF",
  "key24": "4abTZNtbpsm5pkzZv5iJUojx6GEDV8d2tL7X1nrAW6Kc3LyMdr1mh8rG4qNhfgVGgQn1PT3fgcVPjmeFfndmox2y",
  "key25": "5TD9WCkwYqc9CeAV6UChLCowdxRsYR5sc6NZ8U3rhsANAWZhAD46SckdQHKarChzAJTt5VMTkGCjBcpqGvoUT6QU",
  "key26": "28kiUuHZGig8Sw5sm2C53325nHiZHh7NdmYAbA2uTV3KKLb37S2fJ8WnRn6V1hNkcFSu4TBvFKz9hWpoBnk1NyUF",
  "key27": "2uhTkxW6w61yRKEEVtPgExQU8zMXfezGHDV3cVgDkHjVR7qX6PiFTArcyoCMzZqXsUbNKQdhJhiqDi8aLL4BYFCC",
  "key28": "592sfrXiXiRLXacTXJPsQJmkny6MQecXzN7DRAAdWHEkt5jZA2DGh615KFKxjYUnxcAiWPtLJawRjqgcMhGtiwZ6",
  "key29": "5sHhqfCLRxeZA78QAaw3npzoT2ad1jKXgeAXg4fUSRLnC5MBfsGZKzoor4jjnsbiQHZmLC85hVLbMREpVp3MZKKz",
  "key30": "Gdb1xUgpraMXHNGgv1f5opnEpzGhTpGEpQB1vGHvg5BX6MP7sxZjrqs9x4MLWG2h5PwSLx6jV66pUykB2VtNMxk",
  "key31": "3KYCqbNhSdkPhjkRqyRnTjSsPLP5WYp5dHBTGv14N8RQLUY6uGRWVgCcDUs9MVy2d5TVCW57TJzb4pdSAzzpGUsa",
  "key32": "BUGhvScJLkiV98thjwQJ9BDZtrYeaw1JoYmNr8PDQVzccZ2RpkUkHQyhCFRuf8ov4dtAMdWk1K4yysQUt5LfpRy",
  "key33": "416qvqbvKjEnHYgD3x9TneKTYjyfpSLNmdfWYAsE3cukHmm3cW9esRYdx3uCfGgaMQrvxtJXUf8bjNKYwwn328jo",
  "key34": "2BBFLrGTd1MmbxaxccYNmqMHodcwu8xg9yJLcL1fBopaq17Ky7WLuSJxSwFyeED7s5wGCbMZbYcUkGcY3ADVg6dH",
  "key35": "5wJSHVn6Ceq4BEajqYV8sHdQi4HFc9uJWbLtfJ5h1YZQASHiVHdSvjTd4KVqZko6snfDPM11cfiLqXoQ7Bcz2bnD",
  "key36": "57tCYrW7gLRTNA2oqZgu9qd6coe6missznWDibbCQyPvgXVcWruJzG3nvbKvyEZBJTGAqPSUXrdjxRyTBJjkxQgQ",
  "key37": "4nWpraMf3J1ZNsAnp7KSqVKmEdfaCCd4MU4JPN2DPGGZudbqR5FjXTQQA5vdYiQ1j2Ck1jfuZLNiiGp9qqfdoN4V",
  "key38": "qTCBbWyXKnyGz6xYTUmvbhA5WjCcLuLMuwiUnGfVhXXYVD7qXyaATEbwtjqWcaQ6mNNDfxr5JmAXNuoniEFsov7",
  "key39": "2keLuPfRqmE17mM2hzhTpFnScDGsUBTHocZYEVMiJExVfB2bAkQzZjhnmUygEURCy8QeSLaXKAnRQkaDDGHyHvLQ"
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
