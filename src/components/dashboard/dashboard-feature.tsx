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
    "2BUgUB4useYu9VZBM3pW7n91mjYkNyv9n8jrHCqoUETygZ3xJ1yqykFunstiTZR1C4snkzggAda8Y3pPpXbPBzLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hp5W3XZH178x3dKPHcd8RhzsRGqaPGSBfjHBmZczM1yipyTgYC45kzVMXvq6Gryh6rUj4RE9yskop2VzNvDP87K",
  "key1": "25SqZMLA9DhBPfXNBVSeG954wFPrxMnv5tWSW4Hm9Tqv9XT5HhUCT883Nd9HY9Zx521MP1ZXwG89imz52EksgzUf",
  "key2": "5sSBZcDd7YEvJgcByseCqbGZbTeRfZ91jeiep6d6c49QtJqsf5upsBYAqCzBrFvUzwDtr4kD8TSip9M1hhwTPPiC",
  "key3": "29zSScpKdACCqpRfjT2ifg6pex3ZqQrmNCuDqYAxC3TjdFq1pnf31v1vCKYxQ5zDpinHBXJBj3C2pAE1tU8RLYwC",
  "key4": "2JcVZT3YtqUdjiMs4FYToTgT32vx2UFUFzsjQcNLEFs6tCLqTqqVXz95PNg534cvWKFsm3hWtYQaVkeGd6V7wkGG",
  "key5": "Bz1Pw4FHozEEzkXpWkAMJmCBvdZ5wxGjUShYM9x3jvbB51QCdMo76CkXeZRdvuVpAKa1ZeKvQL4rr8K9cRY5Aw3",
  "key6": "3W5dAUz8khhcgAJ3VcnJqdjj3n4PQGjks3VyTUsnDMKcremURmgwxcWEhPjyM6Kf7tYw9v3d2uv5xSUaSk4y8Dtt",
  "key7": "KcTEkSeg8jcSu46BRyy7NvLNCUmhzyPfnjgqhSuXXrMobMsWvdZkByBss5Af46mwtcKg4VNcAKwxBE7NWBuQAH8",
  "key8": "4F9N7TfqbBBbGvrgFoyk9ZoBg8R3unH9zK9WPFb8Cc6YGXkfqQEbfxRZxAfXuMPPxWJsWoeiYTxJYhYt9kB6XyZ",
  "key9": "2BtFh3VMFqECBHEJZgH9uUVu6zJ4EXTVoQEpp3PFkiZrM81Vxxdm8ECLi3bQpCbwyTaCU9DLPhdmts6b8WjxGcAQ",
  "key10": "4n7689FgJgWnLvEw6qd64h5rNxd86eoyhXpRZStvff33uJFrQ7cRZ7Khx394U2CqqXSmYNsYHaUi75SuGffHvPY7",
  "key11": "4Jz41ycgeerU3BieMoAJFGm1m5zaxUGyKhz8pPUax4hwfBAgqjDpDKKahTY4CVJZmnuJGVwwmx6re2PiVLR4jvuU",
  "key12": "K61sZZgtQ7GfYZdkfYgg6TvwnPP1aaGeQYsxds5cRkMKpU76RHjZeHYSW9WoXfeoKcB5LxSKeWjaqTdoGVEboJq",
  "key13": "5H6yot7n6dJWy9pmptGQpSAJMVwMgUFr3EqpvLmn4SxZAwhVPJmaYJfPGbRU3ST8h8NRy3GKqXJyHUBnyxGEBPJT",
  "key14": "DNJbaPqeAKHzzxeD3PdD8ncPLtxVNoLtEThcDuNogRuSxhnWVRWpaUQPCeg4xj6kEHYHFAVFan7WmX4oCHog7UW",
  "key15": "2KmKNqt4pa6gMs6tXwougmysvx7aey1uH7TxsRwbJuaEyBwaRidwAhsrZwCoCaPJugboUa69Ajy56jSPUdrZfdtq",
  "key16": "4Ny8YdJgVppKm1YuKxyzoP7b9gNEHsWaGWgxRnQRPCQEb5MLcEtHQFjuf7ZgD8LT8oaj3Xuf7RjAxxVTff6Qka1Z",
  "key17": "5SgER3e5bf4gLF6V3DMpS66kDjbXASSHV837Xrx5PMtwZtN88cAZZB1gNjoGqNtXNwhrG64eWZ7pcKAr9Gbiv78a",
  "key18": "5Mxgb5w2817e79UyCxQyC99RaFYd4smfMsBwdtc1tTdLmHXc6YGSHLPksxAqPFM15QGtYcraewdLNNpkKg8cxEnw",
  "key19": "2h7MT2EDXagVuWCSnArDGbMdwF9YUJDZTCaxF5MPawRs9SyZJjBhAafbxWggobHy1BTvJUJn28GGCdVUspP54Q7n",
  "key20": "5s7toNXcHTdRFmGF1vKiqZwkhgK3ZnLZQaikDUtEroZEraLmFEuKyg4CRGjuvsmFANsKFPsiaC97mh9VNqDKdstE",
  "key21": "4ukrDoTXkWnH2UF5riEP4cYfXq44tDAd9iWD4QiAXT77CVHvtkMLUZMMgnMQt2cgFy6JsbK8V6HRZBe3ExLtEALt",
  "key22": "5AasVSaJw92Bm9M1qcceWz8AXd5QEczLaMdfkoDZmSzC2dzaNHWbnJW21ke6qWPM3dKLogbsadVvXsp7Vtr1amDk",
  "key23": "4DfJkVGdXJCnqkHvk4kFahMo8xRAXjBuZFRURwjkcAfwY9rv7exBbZmnqz3FK7csvE6pUvkSJc2puwENcGSSEqQg",
  "key24": "3vF8qgCccDXmrkoDNG38d5ratdrFsaMbUzpo75AQpqXT9S8wRtsMpu5aephgaVtBBcZWX3C72GWo2ea4fwSzxsao",
  "key25": "21SbeaXYLH9gMxgnGvEswFb7vZhvQV8VXdLekBhc3HRhdmjeiuYztd2tgVPidAPQFhDKJPinFrgtiBBzgwsceHmJ",
  "key26": "u654iof92KrfmquWExeb3ZznCpLgoHtiiPcQUX3NjS2NyAWBgLRrEvFiHaSDFAvVLF7Ub65wTP1svmd3gnxRZsy",
  "key27": "jxhLfHbamEb7yYbQAwDHKVmD7ET6RC9xJmwBAB82saA7qF5ZQ7o3WgpUDghU2XgPXdCzggTRDiXf9VwQpVWx8mr",
  "key28": "2kYG7dKxQKXQF4L6kFDVW1WDsQ63MAjzQXBxXN48g6cxkgwjcjHsjHchpwe2nEEEPnNNYpRJdxhQ7s7UZMdBJ139",
  "key29": "kLuyjhsY2kw4HZyC99reXh68jLsnXDZWRpAWnWMMyABrfd3Z7K5JFcf4VcKSE4Lvd1b5DSTtKXHiFRU8oaNfWnh",
  "key30": "4xbFGKiK3RCSx1FByqsDu9NMkNjTsAtSykakeS7CfmdK3JuJMZRnK2kuScGHEyq7NWSbqRUEioeqGzxUJGhQhDbD",
  "key31": "5gNmTczy5Us4qxN1g6NYnT4YQLaLwe6tyuioz67Pj58KRwJyqorDBH7qTVsAvYUdY36DcVeDJEpemW4mr3QpKksY",
  "key32": "53fQpb3JdanNRmGGPFu26Pw6VvTFMF4ZEGKNsqU2v4D1WUYKQDzHYxa4eg8TyggmZmZ5d4PSQTqfc7fbT4o2AYV9",
  "key33": "3XwWrnh6JUZZ4e4tQZ11fUy7p75NgN6veeJszeHX4tzG3Si12fxqLyPtf2usXzxPZQm8xEqgmmX4mBMaZ7nntUig",
  "key34": "AkMjUKAPW2LrESf2BDVNvSZWFX2dNJirTBb58YnBDuts6MZbMqUpumCza3k4HRgUJSyfq7ftLghJCg5WLkrb3bE",
  "key35": "4LT9KM2nVTa9JyHbmALZjsM42KkUZmzcxrfiyhqkpvVn9wnr1jKZji9YZgnTTfEXV2snPmgJe2PzzUuSbsgHFt9K",
  "key36": "4XDqRdvaRLV5baiG2AKn51U3uWjq2JTM4QHZCkLEia2c2y7uM4mRu2cfJVPWkALWJT62dk6co2bWt8J1eo1RU5h1",
  "key37": "4Vi5N5rfrj8weYWzRc86ZDhV76JRmXeqhjyMbK5ivBQ2WhuawgCTAw1rPauLZK2BxnMBRU4xijKLupTAZv9w4pZi",
  "key38": "3ZdaAgwNjAw5WVVgQycKJyThvWDSwyt1VBJUiGZ5SfTxw1N4Kr4vDzWDvBVoCXn643mWcdudowq3T2KhWPBxtMqe"
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
