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
    "3AfUmp3DsXEgEMgJxt92EQdJSuCeU1hcW7UvGT8ECcm7dUhfyM8hBirdrjojsF1XjuD6SRRPp3eTym1ueKR8Rkah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdqsS525W7EtYkW8yfMgFKGM3Gx2JAaRRV8Vsik1JXDj67ripRcaui2rH9vbvongcpMxJQiu65pbBdjeU8edH9w",
  "key1": "4koEqn2w24dWZY4ga94yJT1STSX9RxnLdbUeVKkefo8woN6sV5QqCooCd7PJLShqHzRnpqER8Mi9bssJW9oduJ9M",
  "key2": "H4kCepA7hJktZK2CQVrmuPJVTDYhk68DdqQEF9vTUmNtWmc4QgABDUtDW3sqyjWxGDgWYGuUfFoUDpxYuYpHDDG",
  "key3": "5CFzbFyiDw5XPsvktbmcdJqbCtoikUH9kDDBw22tg3mZYhuUmGFanmNPiNkg2breyDFLZFK7a1MeBNAGgCBjXZkJ",
  "key4": "3p58cnoWQWmdDfBBmZv91mdCMAUiLTMuYQJS699976tk5rxd1vpV988aNqu93K2Xc7qbCp5Z3cPN1N8yocVCK4oH",
  "key5": "42Q4taecs1eR1gcWosZgvs8x2vcSA64KCDemxBmjBjfF2xzW8aWZ6Q1xHz5gXLi8GbBWWRga4iuComhNxAqDNmzL",
  "key6": "Jrf9CpWtGYVpNfrZMuBE8PrPG7qzHgC3GwDFHBRWgVANvN7cL5pXX2QQkC4ayaVUsRGPitLm23Bgg1kq9Hwj8uu",
  "key7": "5DMoZ5ofAJS7zxhSN99cVESZi5T9zTQNzEqEHbz4Kuq6r1LF85Br6cgw2gRVXhqcAqBZEpFV3nM8CnV2y7GSyRES",
  "key8": "4s9RhqeZ9PWhijpb4RR9FcEBpj8ZWv9t2A6r22n6sjpC5fPM5pw1q2zzFfLYkaki5PTW6L81R9bmYLv2XGRYybQV",
  "key9": "46TpXjXbfcBopvU7cShvUtCcmKMLwgVempY9fshJ7h4GLwq44fhz9d6n818LgvgmaiB1KWvJst1LEF2SvHb2WWub",
  "key10": "2xNQipbkUWKh7bA1gzL2WMqkizEsWFDGNPiJSeGNXWBrmnuFNQCwCNqSnogR3WwQwxVAiHTWgwdty7MsChvstUoS",
  "key11": "2kbtZRQZJtitmLNGNWAjuSVeZdfXkxQq1YPbP25oMdCUB9BGXd72BjPVuyrNGgYZNzQ6LzJ1AUbajW5mKccbZejs",
  "key12": "2yv1pKsTqNsbMKNF8h4LvGG3WRVfbbaM2zE6dJ13mVeAqoJ9BiyrdSEyhVbC3bMBZW1w4MmDs3sc9zwFmdPfh5iQ",
  "key13": "3JcRdwFQCV4H2XQxtFdUFehkckd9jUbz6EMuRJftTD9XRPwW3uR48Yu3K6efcBFNYsgWezujWXrZVFGfDwsyujHf",
  "key14": "39UwgvKjrTH7PsZM7htRoivGoBbv2W6gn499QUvTxzh5LMeLiyvrwW4AKMjL6gkbpnvL49vm3iXCZFtgCvjHvsCa",
  "key15": "kdEzh1rx7axwzzLJEK5g2UauZ6c8x3yPJZHNWqJUoa3KNqFA4isSpDw8HVxfAWtRSRrJKFF4qbLRWons6qtgYUb",
  "key16": "4hhemRXn4SA7otSTfY3MvnPFzsU8TVHRRRwtewwEUZbp3o3YbbD52VdczoArfLmgE9zz5PKZrmzTPW8zuGf5sg6f",
  "key17": "2cACv8YJsKsmy1b9X6kEJZrpLE6Sxbd66aNosr2RL1Nr3YrdWWY7nEo4UBwo7Uw28Xz5dEJVH9vycGMUfBRw41BE",
  "key18": "2n73Lyx985ioZe4HjCoWamgKGvGGWNDwJvzpLim6M7XpeiVcxFjto58WKR4LbTSUQ9sHpKQy93kqja52xLQe3p91",
  "key19": "34aLdtZNeLtj9czhCsvuzKeCATdgJtQYrtjZrdsHd9EXU5JxZYJuouKkiBPyKwFLFtaARc4FogZ3nxkjstFZEoPq",
  "key20": "4YQXGKz1PLrBtMUyLMSZSXZh63bUTJjoNN5nVTc5vNm6PPobKABgyZFTcgDy34JK6fUiEYd4DxZQRU591VdwWAyM",
  "key21": "4VjYEgd71vEiHfb9W2LCeqNbkEbUsH6rXNoV5kz3nYPBkNzbXJh9SQGugmj8uriV69oMMjMAmX1XyJbemd72UcbP",
  "key22": "4CR1xb55wccFZz5EFD2Yn94Qv65wAVhqYeHwGhzhqsUVB8Q2TNow5QudoNWyfb39L8B2MKruvTQF1q73pc6bQ5KA",
  "key23": "3DSV7k3d7VvP3bkpkVT9J1pdRWcZdQtYUZ33uxcgFFYGaHoY2fiy8gnmNmqZqJy1Qh3SnzXcA34yHdwCjkKv39NU",
  "key24": "5MTAYfWQFYkdkNAXsCSVP2xeQ6xt9o3GYJkVEYQp9xjV7ZtYtLHKjT9v9hF7RjcpHzScCtSKTDNxHxXe9NzXZfJV",
  "key25": "43eu87Z2rxXzDPa8B6qXckBdPjixhff3cEfPmbbUdrvaSRcss1Xg6xG9DrX5rSYDhQD9gmmZy2ABZZihYkuTd2w9",
  "key26": "4oErnLVtnC2mjWqZ7vnDfyCoc2Rod6H1F9XkUMEhKwNw7uqDyDoUFy8nvBSETfDwsrvQn8eTdNeotHBCS6ZGRo2N",
  "key27": "4PeumopeZLN7V1mnzBb982a7hhQcH887cw6V5BQcNk1JCwuc2sE3jwP79dRL7PAur1bfAuk93SrWZvMkkNXL9Moe",
  "key28": "5TjJ9SwisWADkJWvJcsjbq3GPonoPrWvwfnkfthdojy8ZnX6yiyJtECj6ff79b9HosQDmU2qAhgRmoygfaV6qYDE",
  "key29": "4vNegnf5AhTds3daYES42AiVchj3L4Lemticw1vHuUd8esVSvJw53F9fbZhyQmDaKSoUhzzP2gxq365U25D8UQa9",
  "key30": "7g3JwqjGitM1qYJfFwUM6gcreqTj3xVrkN7KAww27MnGCxFqHRdAmt9sw81j9NCveeAmtMrEr9iKb3mXMgBQhz6",
  "key31": "3e5hziyTHbZ2iqxd14uT2C9RWHjA2Cep1Rn2BkPMUMQoKdDEWT9US1LWCGfACwEmxU6wSkmUYtUUK24yNjTsCKuB",
  "key32": "5JbrbMkf7X7LHvQVko2brX2RhVTq1BfRP7A6bvEtLwLNwRRx8ShdZfgV1JwBuTrS2vfJnTbTX1qw57ZWSARTdMoj",
  "key33": "93qh35ooCWV7WqNdSSBMSYThv9RZLzwwr38kQGdxr3vUFhAaRaYXart6nkiTY4QFxvndyfN8pyVixmXfuMDXoYx",
  "key34": "C2sed8tzCnC33u8d1yyqZTHmh9xJ9E171pbR6cMBSA7hjWivgCYYvLmh4j84voWVcmeN4f3ij419AckFtxN3xCC",
  "key35": "5XZBJJqRisMjMT3Y9cfYcfdvgCBXskiz34srNzAShn9etgQ7HYwTSEdqN6kAwtqsNN7VZUCXMSQx9G8YnsLc439o",
  "key36": "3rat8A5QadpZNNBzmMyaA4ervMww79Vv9hauYmAsaPxoUXQxXV87ssFqj6a3Ukd4gz5Y7eGYzegFBk2YnYs62SfZ",
  "key37": "5S6pYMMsy1PFTzY4Qq3pxNdfivabqd5uP7NeiTNdxKZQ12rB75bravdPSLRNGEzm5X5XjmSPwjSoW2QiSxeRBVaq",
  "key38": "PdKJhJ7jXisDShLLFhrm6T48EhxMrecqjMBbwrKTvCjhHWqDWVKSEYoUQFEB6uk3zgUQGE58cTimrtDcCNSC5Dn",
  "key39": "3x8etiTrTWWnJ2v9foFLP4JocECNJwPoRq3Akx877cHLQRYm3hMj1pusvf5QoUATMWRZyLUFQJWGSXdhBdQpLjNX",
  "key40": "7CJqqzURtHXT7MsiugeFYwy5FNCm6ojrkZSqwW4SXMcaxeAbYvN6PQRWnPmNYRCxesD64GxUZmNqE25uB3Loq7t",
  "key41": "7jxbN5PCDWgC4E17qYhaBw4fvXYVjBVbfPDbAomdpR2LNaeEUiN6dDwSz2P2GsjNszN23zZB7uHoCMfvvMeyTUv"
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
