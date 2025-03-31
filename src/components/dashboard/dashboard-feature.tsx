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
    "4oJirXvxzr9KVRRMwVF9gyGjsazJaqHiBSZ9pSCudgcm2TTxcAoKEeQZ1KRqo5Db17TUYVTtBXC3xcZ1KsmRnzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7sdpbumv6USNsGcGsgzMpitK84v7JFynwhdiGqxMUfHvBW3D6z4GUGse17VBh7Huh2cSRiNbXM6a1gtS4B72Jq",
  "key1": "wx29NmCuuSMgWxNsmZsihbqEczEKsSQREaov82DGcYgv6iiVYsQ98aHHFuif1kheJdQpyVg2996cGiLpouJTQEP",
  "key2": "3W1QQVGdS7gQB25wp3wpUFsZiH9YMBdcvaqyyC1VHkEkMr5KR41A6ULYTttfFW6tgGoTKsQBH3tR7WPesuyQCnF4",
  "key3": "4VVzxdKB9ufdNRyGAPoUuqPPtmaTpm5jn5mhdRDqnpsWAxYka3DuQKKdt9nP5q7C3M5dT7HfMuE1hanczfPA4S94",
  "key4": "n2UoLXMjaj6HLSJ9BBvYKLiMtKAPJEgwDwtByRi1LAoUiXGFRkaLQ8Dp898omoKdGHkQPSrSfTQhkNXxHKL5Ky5",
  "key5": "4qqVnKBk8AbsrQKWj5oX4ve9WKbTtyxdGBT6BZ7zjwxnCUukPbeRzbGeHu48MJjW2b6BR3p8Sh318qreNJSSHsiu",
  "key6": "2rdJCNHZUfkLKzoy5nxi1yYoJgwdGsSZcQpRGFdJsesJoGh9aRAm7S3S6hPWfH4pcnBNqPDwhKhYMHrG1q4nFqbZ",
  "key7": "4c91JgqNZHGF8A9ZLFU3nQsKmuzxgo8i3NM4wmmuwK4bzBKqEtuaEYe6bwpn1R23Z3zyW6qMzCmTpACV9e5Mp3Ff",
  "key8": "2A6Qumd7bdwtF58rEMnBn6i9c6MPxWNPwTYArt2dJXzh9TjJWNS6AMX21jhqZQBVKHmuN7sKn6MeoS17GGrQrDTZ",
  "key9": "4nQv19bV4t6Go2keA3FJsqtEB8mHxNZLpLT3oPqAcTVyR5MEfbVh6UhMhvJdCAJiEgAV1SVDf8Apxj5ZQFujTWyw",
  "key10": "57EHqTNbiVjbiZzAiDPcUp1muEMfC9exs4z75Mfv2Cx9mict6HGzaqvk4pnN36HfFW66XLPdSKNzfvexgb1MxMDP",
  "key11": "mJ7Kp4rUGrnZ79wvCv9ytCFhbE2W6z8WdKGMK4e1ZQJibELECT1sJTRQ2SDvoAJmL6uuawXGA7jb6Z6Q5tfEkke",
  "key12": "5mGWWvwnMVx67WdkrgT8BUyQzoKzzopMpeG2XsWSmvGDDQ8uaB26JG7yBFyLDx5ei1NWpgMfyffqeBTrHeNJA7Vf",
  "key13": "CEmG8q5ofx9z2tXNxCEqVEqFChdqQHxHB2inqbH51ZedLD4MjejKS5MgRVRGQcUVPaE5sqfzSmwhhNNZczSupfs",
  "key14": "5p7tKMQnjgGUhm515Wy18Ds6UpU8dQQwjhGRLMqhqStcZYbg5fh65mjMeytzCbfrkfg6CJ1exyTiBJu6wad96GoJ",
  "key15": "qapJmrCLjQSqaH3YnkqFqcUvdYgeDYDbJG4VHTsfPLfDgb1wEdfYurZsJmQKL7SXutff1cah3nqLxJ5xVfSN8wT",
  "key16": "5dYM5KQJbds8xcfCGQNn5hyogTo7ujTVnnzUrur5VtW83YdqCw8VFjoRWXvqbFsp8AyDND4NyNHokgYiatg8F6Tb",
  "key17": "oA7xPS6GQjGDsCGE4RWT4GfVtfLJii8CsF7n3qHBoPqWZ5MsvEXh9JwUpPxk6yU5YDGyBFhRR1RngcC4WpcCpct",
  "key18": "3gMNBRQhnhKqN7ftEaqvA6t6W7cRHgUnxGonxgJPACYNeYa5uf2YLopzPdUoVbpVeS9YfGT1cpUPvjkiT4WsZmTh",
  "key19": "45A6B45onpsDv8aXozsaMWRwMddhQj6KNUYKS8eYgX4aqXzTKS4ao84Rrv4LGwhJNRAbsdr1a5zFb5P1UPsNiFgF",
  "key20": "5bknJPHdunsArb9qkYCx5ENmJES4MwwXFvxG1iq92QTw7N119miiGjJnLT9Ykq4AKsN3f8p1psaTZ5UfwvLum663",
  "key21": "HS1mgmBsHkzrheYuziQkXQinY3Ucf3L8JYrQC5ysEsQkWgJFwfd8gAMb9My3Nf8hg9K4aJt3JSDTTMqsL96YsWW",
  "key22": "yhY6seWfaghzvK94Y6bx3hahTD6RXhtzasPSbzFkpPbPB1gRkZLiunhYwVszBdLrreqR1VX1vebZPrLjc6cbzkr",
  "key23": "38ANhumnSRGHcZFzUKLeu8qhV8U9YCH4CMqG6rbwUKAsi6ReFux9AsymiCDAe2wddgqovuuZKKAo9kXnoQ8JUjok",
  "key24": "2w86obkwqFBSXfSoWaRHETF9VS7XTpaAeRhhzDT7ERfNGmm4XJsYVkMNWRRDYYT77ZfjBb553iXvwYjhbqhnXYio",
  "key25": "3xj81roryADV3meAGeghqKvotLYbpcnraT4umLXPoDfwmvXVz3NpeQFKUoxgHMw9WfuWxNm61pGbLtq95PpRwThy",
  "key26": "3chc9wnadpsBxF7Hterk3Gnp3hoSYExyohJ38Tdwxz4haTZcYmrgXz1d3xcEWW3rCycvxMpnptvLEYNSjBgwUkhh",
  "key27": "xDsNXrq1vXS64U4nXv26gn2TdS1ufz6vzRBWrs3id8jBXxyFiwfnJUd1bibH7JnQ58sZ7PwohoTVQXXEEg2FYKX",
  "key28": "vBgNcxaZkw4jgpqpH7KQRzBB1Kaiq54LzK1xMbEVj8RwpuotWNfMBHC2CLEyJ4z7jWv371pY9tuUBsz4QEY8UdA",
  "key29": "saJbqedjHRuhHxHCpCeF5J9UNssp1qKrCbbid4gXJ3x23PPFjDfxsQs9cbWCEyYWU3auMG82DUbZewvRWUQ8No2",
  "key30": "5eS7p51NaHVr84vJkF6vzG8UdV6ULWaLseNqzv52gVJ14wuUgcT488r1DE4WqQ5JELxoSgZL7SS8X3dzMJmDyz9Y",
  "key31": "22U3YCfKNVBP9skziJ3AXwsQ1LYJsCZsqrX6iaupLWKhrwinJ9zSuQLK9KPUMmJsGcAPtTAYHdfgun7nqu6oVFR3",
  "key32": "zsFYLAdGJ6m6Lci1KMRDk2sjqsyuPcqmuFtgiFdimdEDfEm44zq9ko5Vy7rcAahZP32bzzsFcmwrgPGLQND1Y2B",
  "key33": "3LftZMTYoYJ1c8BRPmtwyv4Fftm8qUWkfdGMZMh5DuJPXQRMUimxonVCxjHvBsLAWM7ngiwCrKAgtvdAun3ViXe9",
  "key34": "2wy7PmkiQoT2BnzfKuTdGEKWW7QcUTCsn2E5Yt1vr6CrAZv3kPTJsZP6EoarAiBUJq21CAHU2sRvg9CTMuu9MJmi",
  "key35": "3DbZNqYCyXA33SwykzXAx86AVVGYK38vZsDK9ewNp1xP85zuGigd5buJs7sgrUeAFDUMwqBRrQXdLGfTSqLKVQ7w",
  "key36": "2QJMabF1an4W29UdGFwroEHFE9XxPZYicXJqkQ8X89ea6JEnFcsoGvVkYTXAenovkmjzfybocnhQYF9ciFJzFtw",
  "key37": "571dqfDBUMVu76PgNC7AttaHHgZrA3WG39g1xHt6UhrHBo9NAnHKUeopYKynjW1RDr8c7auUXnUfS82ZxkBj3MSE"
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
