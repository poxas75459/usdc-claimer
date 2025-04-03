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
    "3RpnbynMTYmu1hhMREShtwEaPVqPiHhzsG9gQDtQdk51QZF5VPM1z3BWJyRycVr7DRmg92zD7r8L6MfgWqpPzZBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39pFimvDBkq8qqZfwqpcCEG9YigmruFeqs2Ys6CQaJnUKXxwRpfosr9sR4ZKLgNnXvRPZxj4WswyinzJhxCTDP2X",
  "key1": "3Y3WpwPfP7agw5khcu5A2TnRkq7gTuhNbP5ZrLvP5BLLMWpX5sQBT7yvYkyP5LBj4uPMNKvAfPEzyrKLpoZqa9EJ",
  "key2": "4ENoSLHtAAdvYMrnKQgyeyha9fkuPq6WUgVbXjRpRJgk47C3Wocus4eE4dSaTosEnwVYNa96UkxxWsrLPu6qsvKH",
  "key3": "5TCHCFHx8RghxE91JEvu48THXWTAzM1fGpaCp29nyL1KF2AbX2J3QweFuDxJ6JaThpGRpGzs8ucuR2xLsbtPsXHE",
  "key4": "qGnr8pKC6Yg5x87hoEwodVt9wxrto228BpSog66dwmd3CLVvQL8P7nz2dJcvYvcAQUY7bTgFkJRd7LVBWMNpsin",
  "key5": "2QZjiktGbUYdY1KMonvnh6XnoF3q3AwV1uMMd1TEVJCGabE72xm4SbL8ApiLMMUrDavuk4E3XKnapddSZrAcKT2v",
  "key6": "44fsJA43uccvB5A327xLGwv76LW4xo29fGpFh6pFN2wESWNKiue6zvvkUWWhnp9CPEupLzDHJFRuZHLWPgmcjTwG",
  "key7": "5j38fpMULM7Cr2QGVf8YQaAyWtsEyUoWSMiN3fHNFBPvEeELAUy9hdPWrshVTSfS3wsayjZrCo8MtznRXdsSed2S",
  "key8": "5XGVC828KvUbnFp4fHNvZi48kYec4QcERuLw6BUR5ujKmtRFRjE2a1mmHZTE1XriYNBZyHNpQLsgotFws1pSzXQr",
  "key9": "3khY4fTjFqp1M2KtSaGEwJP1iiXD1Ehp9q3qXcDhXZyuWvbvf7pX8MG4ZqbweAR4UJcTNtd1SJoim9NNqFRWBFWF",
  "key10": "26YKCFAhoGhB1877T43wzqCNmnc45yUEM5Qw1dhFkJU8R7uVx1qTxJy1EH8eT5gxBDEGgQq1f896PRCJiiD52qvj",
  "key11": "2HRd5MavUd5GjnL4PaMQCxSBsBNjkrSXad5fSdgRoyPWpRDTK4ddCHAfecgSxfvBV38cyE7wJJxaNCJ23GRgBuMV",
  "key12": "4A1oj6HrvP9ZYuEXZGLPwur9an2CjtgYgMkDJqEYe1sQ5c2zzh9taAcHtgPpBhvWoFez5wbU2LRdxu9jRKG3xCEx",
  "key13": "5zvfL93jNLAV1sosdq3ssXuyi1EkyzGe6yCYvn7tTNAcu8TLNUicH9Aiwac2qmF74e7cJJDqTc4jbUcwDa1RDoRK",
  "key14": "4kFKEfeGgjN5a6JwDZJApGn1vhpGKSH44vuyavc2xUaPPNiT4CJwR7nFcQcRKcSgeP2XgBEd5xJGNcpyRiuyaWeC",
  "key15": "5HuwxG4zonLYxz4P3Hse5LQna3qJhazff7VwUnBcHWhK1ywvENnBy3zBmSysJYRYhHWw8srVA2pFrM1fnudKT95f",
  "key16": "3RLhxiasiuDB1HLJiKDKQJffidW6XuxSD6V5J1m2xHv3DzSXJyf4bpHjn9PnNvjaS7zQGsAJJ9QqonyQdzxtfatZ",
  "key17": "2ax5HWVoT6S8BfjC47GLBz3RkHuDxQwA5bqJfpasWTLJF6kzMWzCF6kXmN53yVj1tpSuu5bnyoiBsM8s3tGYrDN5",
  "key18": "5hru5J9PVDAnkW6TWWmUqejdLQhh3pR8xudnYjzEcZkzHj9cPSyuWCRhnzAjejxff9gBKfr1Bq3Y5exrB2NgzHeW",
  "key19": "EKqwbsKqzjukZBJvese1M8W7DHpYzXLj4CvNGSabB1jr9G4r3TcdMYhVTTUm5dJYZj4vxF39tjedPGYRK6PwhMe",
  "key20": "3apC9L6gTqBseFrtasWWBupJ1fPRPvQMSi7b9cRKnjQxBNgQ5jt8vrepnnBbzwtGnbVjJzGwy8BbU1LajXHRB7rd",
  "key21": "5ghNUBgUpYKitbc65GNoKaPZnMS3qLta3gkmE2RGhcGEFf5WHvY89qxvaeXgrwVk8UUP2WXc5xprT6qdEp8KGQEW",
  "key22": "4ZyxE1jpfgCwcAt9jSjcCazpw7FmW8hvFuqn3jVyVzoSHH1wq3VwX7ekFpfcRUobib3VB7oL3hsQQSDwjv69U7Xo",
  "key23": "3nnp27DtD8pN34oK47vE1njgpoLaZs1g4K7gpk1H3UwQp8rKbeZVexUHJdtqGqSrQz5jZANN9kHdXgZHXF4uGzX8",
  "key24": "4uGgJdNUw3EPNuBoF9YpnMrxtwC5ZzgsFc2UNMMyQ6wRBXd7fxe3NQsEyu4p7qx1gVu2nrNhWEGPKWQhbQM3kiwp",
  "key25": "67r1FZj5yxcr3brDWQs6UUJDrFj51Vechdngqaui17kKcrHsuVueLiqTFnyeQyNvUSdmW8jBrkWZTYiBXKxNX6n2",
  "key26": "65EnsQU9s9dPMVDCTnkjPnbBQ3JagYHNGpfsBbHm7w5AmQ7W42ciRnmx72T9aP2e3xt4zUe1XZZM6VQB1EUPHgy",
  "key27": "4iJVWfATTQKP1QAxdGzzCqPxP8e8DKefnEKPnFBzheyeppjRZqEWxoER4dBiSejaUjPBVQGcCxzCZB8YDjv92BNT",
  "key28": "HQNij9EKRkAQqRA5dFaXUybTYv7J6ZHbM4rbNDjVog7GHotNYRwSPiC1Rwh7ue2jng5YXWspVq9KCCf5qQs3U1f",
  "key29": "5ufjwUQHqsABfhD6NwcQKv7JJpG9hCEwumTk7dRjPhxdtZkfobHcBmBW5DdHri2kaKhyMLMQ8fRmJPvV18xwX52A",
  "key30": "3PSTWyRa7kbtJzpWmqcEJw8XXZFxqhd7XTgm4YmFv7wJDuwLAc2N52ko3JxYHZ8FAZAqvTnEa1S6d5nPqYUdk3py",
  "key31": "dN2iN2YdhQ9UGVVE55h2MZnkCDAGHJBRbd6xnTXD12AnGq5jWT7sLRsBJdE22YBKui126qdZPcBBig7oR58bRPj",
  "key32": "5AxV2WkJGSXxPhGymYfabycDKpoE54Ue9YX6fPHuEMVrs1cNF8WPCk2rMeXRqeUi6QS4Dc4oEgPcaARi8CKk2WZc",
  "key33": "2gsgg7kferMJFQAgqNkNTgfwSsRpaKyi9Jx71bvJCxrq3Z7JxjT1xECxqoHj2xDNiHNEsXb639hBpvB1XdyiZvQV",
  "key34": "5xYFzaSoU17CMmG2qmGeA4jVS67dma8hHcAD2uoQxt6bsAKUeeuHgqe4duv9RPCqTSGcNLSYeN8X7UBbeZVgjLwJ",
  "key35": "386YNqLK7bCoBVEhW3pYZR9ReT3HPTZLo88ygvr86fcJE58GdRqL99pvXAjj6dAKT5agddYq3CevJJRowxdqR1bJ",
  "key36": "5JjrTbyXboRZdo3Xnd8DsJUdt1T9X8yUKvhbuqrJBSVV8Hdi2n9aETdeUFvv6Ubtid2XEWZzjwUTaPbzCoYHeWQo",
  "key37": "5HaQ27tdsXgSUGZw7rz3PPv3ef4Nt7GHjQvBFwAes8xyijgw2tkxfQU2NC2nrJapXiWJxQXLQRdhvqGTGjUmnaSu",
  "key38": "5NPi4DZKiYyj7HGZri16AsRFMU7CC8KdzauzzKMN8QPt6EZGbikBkJqJdBHoGLyxa6MFKsdCafvpQ6RAfNoh61N7",
  "key39": "58q2CpmnqfK2fr7ySBLyQ9rcEWDAy9o2ZrN5pbwmocszAg4Y7XUAjAPE9YgDUUvJ2DPGGqjKahGhJXKTcrG3vspm",
  "key40": "M9cCPYFU8uzhWncCaFfAZbeyqNM5RKmjUDxCV89ZmkXqVbnJ1MBXZTeSFujUEpHAisRyeL9frM2CB7AFSi3ap77",
  "key41": "4hN2bqbp5dDhCqR7sYcaRqa1HWT1WAATqcyZ4KWvL9cxjAcbG9DbYWduXNXJE5GMM3fQVB2RUhHMELeeNMwJL9vc",
  "key42": "4QxkurxS9LsMy733Cxr3DUhSHwLBSJVKKDbaESGvJ8EcHHBPxTMoLzARDbmPTw7yjkmyk7fUmg31bne8DVmCtGGH"
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
