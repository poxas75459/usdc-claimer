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
    "2rm2SGmeB8wQt2wkMSN9LGyyT8P5QpEdm9TjvxkQnpPDbZdEx9EDSG2e9ugrWmqxPZAbPprfwBC2v8QiDDcRhm2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WypT5m4xYZczHVKAYdijwYzMBYbguXapsHRo4wtQrHxov5yHVkEXi7gvaFaG3nYBnMHibDs46eUXM65sS9oZjgc",
  "key1": "4jPCzLhCZGLNrqLVfrxnLGnFvAxqbj4kitqDbsR6YFe2uyShS4D5fCXLH4ieKWnyn6dPJmz424R4n5LyJm6R89mh",
  "key2": "4J5WdQTF77KCruoycBsVtFQN7Vcuh9R5Qgpc5p5ygeefhYGEW3cAuN9fHepHJZqunnBXtYibstTKyWZtfvhQRjNr",
  "key3": "3LaTAcBnMpTg3n6mxuMZPXCTJPrTaE75esXRYFGu7DZ8hPD1SdQQF3kvfEC7QZa3Qk6YMjQVtiAdAYuMUc6DKAic",
  "key4": "2qod6wU5dGE2WjComPusFyG3vy9WFZCVWorxbJD8XeQdCa7FjtDuqrqvL8wnJQE1SA1JQiRinyyT15SrKtbKFpJ5",
  "key5": "2yCVvT1PZv48VC9DihfTyrZKAnL4NUyboPfbP9xkUGGvJfAoXrFyttcTHLzCjY4WYG9uXkeGHH9iYofFiK2N53vd",
  "key6": "5nTQJTiGFp3j1U8jKLvexL5RLgrgeJBpo7WK2mbN44nrmsNBmZYjbAHvaFDGbpdrQs1Td41rdWAeJkyuSEE2CnPc",
  "key7": "4S43wbrfYjLoM5BoWQB1f1LVvHHznEmquTaMTEpNkPWASQUyDUC2xZFavN1ooEWzeMtL9oK8MixxbRnBXGNvRNPq",
  "key8": "yyLbZnKMLg1Uc1eGj3jFuigs8t7t3YXiMx6s7zwmCSujapMmnsq6aT8o7JvHKbUyg7fCXYtYNXYXVcTvocDm8MF",
  "key9": "toUXEwyriP2uaSEPbo52y5n42toacEh6qyAo6WDgDtFuKFbpeZANsgHkNB4v59ELZSfT9nrX7VFKyWE4eMsterD",
  "key10": "3H53LJX4vSbt9J1GrXDxSrJqyy9xABNH5KTbRD7jppg8JmuEmoMshFLrr6Tm5WL8NXk73v8nECpvjF3V7LorYhHN",
  "key11": "2KNqmofXseYXquXKcCx6dfBscGXJUzfUiztZNYfUAz1CRxXEskQBrBiUFHxEzFdpBoRmy6JJmQKsjtbNf1X7rWzT",
  "key12": "4mcXotco2hxmmpRXNpBB2TQLeHMeREvNk1oDRWuKSt9rCWva5CQZ8dkxyoDdGhWvu7p6HebMo89TWEYXf4h4eZjm",
  "key13": "2ASJrD7q8s75cSNqh4uM4qXPuLCAJ4pn7RJmm4FU1ihFq3vpQcy33ToZdk8HXd5hr5Dd36NncBhDJYhTVuUHbwcF",
  "key14": "4LqgxuZpko8h26k22sX3WSrRd1HhAEK2n6BtcAws5qGqn3N7kU7jE2w5F5bF56sG9sbWSXs9jwGUbAr4ymvDwdNQ",
  "key15": "4mSqVYSXVAFTD3UB8KUW8CpjUxJuUL7MSG3CSk36nHGAuqHwc3YrWuYbK5CFZ24fKgAC8Uv5bBXx1UbHACkhPrBN",
  "key16": "34FPWecFCJCNfS75G1PX4GtvemRuVxHgzFGAuNjKteGUydbiwLEWF8UrF9t7vrFN4XNfJvjBK6PSi6MypfvaDRpc",
  "key17": "2s3Vbx2RNXkh19U2zkMrsLKq6d3nZToyMf2nVhs6PWf2NWwpDDX15Fr1tQbcEMLP6cmxhJ2J8q4Aoc7Psd96Sm6m",
  "key18": "2SuRjfgndHQmwQziipkdG2kqwh9DB3aXkxEkFuEf3C5spw8xc6wWzE4gCXJfV6NsTXjN3nNqHPNjAHqmMXNKw6Sf",
  "key19": "2xQGcSZDwsvsf3F2k8yjLUgR9d79LkxwQZyMYFbeBPogwUUPC47cwhBThzLV3k2wq2cRBrbBWFeRDc6KcEUEAQw7",
  "key20": "4kEfKme21u7x5PAm6iRJzSDoRvTTx4kj1NJvArfSWSRsraUQNd3A9nwu6fBN9qpBnbpbXUEiTupNjahC76VWDuKP",
  "key21": "3pr58yzbAuVwhJfwEwsEZn3xLKznJjPTtvymBa45kEX5ycVE4DhKbvHLFym9gyVFxy8CdhxtsMAm62UFvY5BEU7p",
  "key22": "3ZVdKRxPKk3dxJ73xC2dvxV8yhhUkzFS6PfaoroPdSEWt3GHJdLNhUUQXen1FU36T78RvRgoG5pLMZqQZWRm4HjJ",
  "key23": "4u9o2m6qbfPtrBTV1LZkHpCbUkXD6P7NAZveBnaey5Jr2Vd4m92y3QSQPEM9gbhiszzn6K3y5SpLpVZJkcbzDX1W",
  "key24": "PGK3EvMo8XHquQDgArbineQ4FnxEiUTk2ioCMqZQNX6qxdKmwVtVYst9UkF4QVKbDK7o93piLQg9QVBTm8hugBq",
  "key25": "3mzp5gNQ7DETx8PxDc2T6uD8ezq3GHJbQf6DR4gfV7Mnt3hEsmGgTwWS6VLpw8iqrWCdz2sgwvovjbAnU3CGfEet",
  "key26": "3ZyL2sirEHcdYNTt3ZLX44HcRzSnGZNkKk488921gwQFxonDwZzG6AnnnMS7UXqUeUgiC8Duu9aitTrB8X8oAP13",
  "key27": "5V2xUy7B82Q5jUK4CJZEtbvGEmDeTJmHinve2uoN4jhj3vALC78ppE2W6WLduqTyamoFNARjDugBieNd2rqLHrMW",
  "key28": "5Ai6CzdqDaE46Naav66eEytneo8RFXP6YHdaauajx6sRzvkj3TYfhnVvA6Jm5TGBEeg3y7ZUrPaC8fcqNFJudTHp",
  "key29": "5EcYs9nqThfUvopRNnGSRn3cLTHrTEoLrpcGhKvHTKo23jTpcfDpxtu4zzeY73nGXaJ2gf4Dt3EKxjy2xEVymKN3",
  "key30": "2SifjBGfgvtdCHmRM33fMi9BcVWtp9N2TiNU82U1KNJEqsyHCJSPbkLNHbNprbxy4ipuuZBN6KqbnnZjFJPX1gP9",
  "key31": "3u2zSxPSHpw8SZpcdmd2UtcHHo6cka4ynAvPAahmTLbV4rAdu3U5fCPa3DpG1Vs5mzmKMcqN6T939euVZiNAn1vZ",
  "key32": "2KctCiYZyqGC7RuXuvoiKjyNXiwT4CrYSCBUxCzTZcgtBZAKXzkjhZ1zBjQnenDptZpZXSEsQAGKSG3ZSxiqBuZV",
  "key33": "2rpHYaLuQdWtWksUVxEAuJNTUwYWmvC5nju7gaBdpaxqCPSMVv4setSrtdXPn7W13JNXx8qsqVm8pfEBNj5zFawc",
  "key34": "5hWvgWtn4SbaaDtMXNGkLBDxkyM3Paw1cjksVo22pd4o87jXGt866HRW9B7fva7rJPLEvBLS8AzwfRfUXz8hBcD1"
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
