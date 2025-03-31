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
    "3LzjsKZpfdfaW2TL9yzp9EBS2HBBvz98XGGpD12UTnCbQPA62PXYqRsRoB5yXPKYKGMxNXfqtx5meCy8tmagvxex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XH8zCrzdWEsCg1dXS9ZVJDJbsiaPHzqnX8RVW1iecodDqXLPgHjJd2ihzwnW89YpuNRbcgbJ1UuHkM8gWacEvYa",
  "key1": "418SYV1Ci5MVv5GH4RDNWkPHcAQX4R2GQU4YsmVEFW9QBQieaq85JRoagY7tNiQvof1tZqRHtktAHDc8MvJLNCps",
  "key2": "5gQ2f266CVY8tnWmKPgMmx9ya9vm6CMBy3DxYyGdGFdTTxFz9aWv4MY4h96FzVCJFNp6pcAuqQuZzPGRqcaS4W2i",
  "key3": "4h4mDvNntPF97HUo8ums33JSuZZYC8Q5pA2RnZGGPdsMGYAs3TF3ddPnEhnPisRdj7PmYcbLmYSFL9B5j29XU3De",
  "key4": "4BAeWJZwxA1ZomTsCEvfnt12fL4s3W8pw6AMVEkxHfdT1V1UN24T7MXG6aTowwLzAQgxYufarEekvjgqP6SPoJGA",
  "key5": "LHVixA9mqPYFBENSZmUpQM85QTgxNTWUZh4jxgVzn7o7nJT2BhBLHGgVHRtafd7PgRNs7QHXr9L8uby81zvomCn",
  "key6": "5eGLZFD8sqofaJdjTXwrxZr1buZQb2y16Teo53JkEAjpTNv5gwf5YfXYFYcbzgPyDWYTJ113sYiBLZXCypy7T9Rb",
  "key7": "rW7e4oEQu7QhB1FEKnsxrB2aARr6ZctPBPpFxCqGHBqDe93UHeFqa4QdJihDBKBRp7CbuuXzR5VbAxmzsBvWwi1",
  "key8": "tUPeZb3g2MeWfPBpAhM3uNFkLcQSp4933MSKHGfPbLZfy7iE7Hj313xMyJXCX78hkiS1fUt2MG7KfHzYmboa8vx",
  "key9": "568ypUvG4t6nCrxGoGCNygv1pRf6vX2KYmHEWDyMcS1vZCuLCGDxgSn9yMXyMgrkpscp2d4N2BpJ8qD5XrZVFHgB",
  "key10": "2ZMfbPraU5bDoTCgbefRTdCCCGXX5vnjazTDngPuTgKtCyi59JWNruRZtxfuRbj4Kg2gfbRcFxijQ1Mxh6bz2iJU",
  "key11": "5e2madHBge9JK3mCKxvViMbBGGUqQpe6PrCfzqVhMLKJbLmJQE7YD7iCwLxssNdm8wKquftK9dWCgz5TDFkmvWJw",
  "key12": "5jjdoTkpRsXQDnxzKf6vjyKY1YAvghkW9pn9uc9XKNRX5fsxBhxFtYSWzp741WZvTZL8ComSdsX5iwBA1Py2ypUR",
  "key13": "2cE3BgNS1uL2rP9Q6MQ5qZGqBYswwuFdQTJ2NeTrxdoWjj2ZR8zMH4sFZrGuWgYZrcVDrDvxKMMpiTYa4i3yCjAJ",
  "key14": "4n8WiyPsGNmuVFkP1pxEu5uwwVf5Lt5XoRY7Vx2LDnwTiYrGph2gkEsWwLx8SVziPL8ASjuD4R2wPXVHv3kgSR4Y",
  "key15": "416MYKgEwZiNkHkLBLiSa9XwTnQHbJrmMup3H8HeMK7aXhcTiQYSomkU7qGkHxMz3ApSEApHNq73U5Rdwn2knP3J",
  "key16": "3149sqwkC3FP2SX2J52JYFP9b31nMWV4J7GSWWsWp7dyztAoTTz61wyY7PuKJGFW24VSGRH5X7sUpsqKbt6FXB5D",
  "key17": "4THoRVfwLMaiAdjMXeqQK4cbk2wu9MnvTPpuHrCGUWLKd5YhW7gwSKrL9dAHEkxsJ8Ch73tgnzNCTP7BrwCHtFWv",
  "key18": "2E7XZa9bX87YUtXNFyKiir9BPy4fn4GAGM85smMxzaZADKFBpxxAXbQryLs2nsnvGZAEKhERbLdmPYyyukikXq33",
  "key19": "edFuNrJwgztkA73PNkFKMBYzLkx2zb9RBgcygQ5JJAgDKtVDg62KaHhjzDCq2iXqfuuX3F3db31fGWNCUqZftZD",
  "key20": "4D244hZPya13NPUMihGudSEHp2rKB3XyfGqvN37Cg5aAivLCRBcyJ4qDsnAf8xEFudR536FUA3Xw5baTHggCvmUR",
  "key21": "m27uF4qj1RaVuq6bgdc7PgVcHZyiYQsgoaNqR3erxRKc1ZSPdhXZS1gBchpbDkRPyunsk1iaz3iZuRmdhAGLKGH",
  "key22": "2PrwUBhC8BDfjiZwWb1BG7m1bnp38mJmrNmywxA73sS58DNUzYXeBWrS7jQpqjwJqwYiFB19qJGoLjxkTnVZr9bo",
  "key23": "vBL2bihp7vLEkqwaEgA5agA6Mdhum1EALfVkHX3wKDUzb1hWaoXxSsoQHm3HTnnbY2EMXsnPCM9q6zoLnocppoE",
  "key24": "EUCUnFoH3W5QWa3QN8Lx1WEVnCvnNKF6m7bZnL1qCLwhT8vAbpEnsJnTthtYLR5cm2LdNKRRBoce3jenWfAKyvs",
  "key25": "4ZDeTc3nXEpAh8yHbWzNaAAhNPTNnt5KnFR5DKV1EsktYt9J37J18vtEUhAgmejFFM2BX9XHqBwVjuKPuRX25KwT"
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
