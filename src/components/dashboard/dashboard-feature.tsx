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
    "5Bk5U9ZVZT6fDpk7kEubS6sAVztmrVy6Ps3MZ57eaoCcamtiYgC16f6vWeNWi6k3QsQAUCdJGzZyHkFyu81UEquK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h5AyJiiEfMLSAt2hcrC6NVNJ9jWzJciMg8EqbsCzQv16ujaC3hKH2q68iBMp4qFpaQKZB1beME3CBspoE8CEwRY",
  "key1": "2tnBR9U2gnSt9wVyEGZzdi5dpvCFSNuToqfKVoDZoPwhPJM9K7rNBNd97DgotWsuJK2yuT7affJRfM2tF8mXB7N7",
  "key2": "7cF2nqfHCv4s3FbDr8sjAYJzHyKNCVVHwQr8zhjFcPsjznWNurTPgdb1rPWR4ytH3h1PGgZWTLFJPELGfTsRtge",
  "key3": "5oAujj4QXzXChVcj4TZCEyDVWK6uP9PRV6nREsFoKB7zwTQfWmNcq79jr1jeTDrZGj8h6eEwR9MzRzWnetVwEbha",
  "key4": "4vsoiEmr45mYusj9bA8Lyj2t995nbHwGXifxGYmH8QqLTMW7Ab8oYC5fFsP4x47p9rQ8e4sN221t5uSiL5UCmSQq",
  "key5": "2uWpWDveFYmAwwm7duxx8BtSy5awrTvkyDBMCsUVuPrfxmfUuuSLuCxeK1vH7x2ZJ4o2zemQY6QedHDEAxhcPtXn",
  "key6": "3ZRqC8fbS6jMy1HwRpAhjaoAZFPE2mMoKmdaNZ6TPDgHRkDmNHFcgyUW5zNnEX9vM3ByPmCFxok6muMxWJgbNNNU",
  "key7": "rdou1VbgBJKCmvvH34mG3SPBtoQVkUASo3cQcMCUeJhHpSVAKGEmqJTfeLkL3bf4phSrcenb87ToxESLUGhYAmd",
  "key8": "5T3QUirUaqmUZeAyGBMsSiZcNHu7D9t1fAtjSt1h3rF6m5iozwgB9U5Fdrqb7nbBKnFZSW6UbyRDE2kDUrtjT2zE",
  "key9": "gjfHWEA5KjKYAYvNaF4kmep2fgxKvCdC5xWBzs2pxwjBMkM6rnkKR5dX3qntHMXXeqgCkUGeMEXun254kxzuXuq",
  "key10": "42q8DLmYhp3H2NKz49xA77UqWxfow2HRUEggpsY5nUeEsHeLS6Va5hsxtLKqnuYMMGQs9xh1JdDM96yJf234h21t",
  "key11": "3GuPgCQdJvgJA34DyDvTNMNiNXLbMyMv1w2pTww8y79aG6rCQNWEh4AiKWtiacyQeEazcJviBeGZXt4FHNGtvJjw",
  "key12": "3guZ1F1gxPuooG5FetKHkjJ8pJwaCutz8n8GjYc7rLixo41a8y7iEzij95iZZhSQCNX8JoJ99c2Tg2pUwjojMvz7",
  "key13": "2sunZSc8bKYkPjbjEv2yZ9ZCwEDBUTYJ91Mt98xSbtXSeUjzsTxeHXMaYkASopnvzfsBZCKhMddHH45xPaRxh5TZ",
  "key14": "4p4oDiyq8yZVubZ8C8SJSQYLevEi6YvCAXm8mypUU2fgjnL7zt4dkaE3cT96jaAaxWXJ12nkh6XiHYyTff8t4QaV",
  "key15": "4hVAKThKjUEK6oyEGwWyoHNdq96kqmr2MZkmb12751yWRUr8Happtdt6V6oW9eQKvcVxWigFgqas5MLGYdeGL8Ua",
  "key16": "3qq6xHbQE2ee7DChas9DL3SNv8XwHid6onVzesa1QZPb76BNFm94eYbZbqZ6zNth7TFGZx49qcBqcxUWSc24UFDG",
  "key17": "2ywJwEBpLGX7NFGtHrYzkUAfC3XArB5xkZu1a81R6UH7CtsBmpaxbPjtaHXCmzUZSkEWtiPUiZbauLvsAJRiF4HB",
  "key18": "2CfCvWofn3DKG81NgK9PXW2xme85ZjhUQCQF3nnPuDb7d5dyga4iUf3EBc4BWExwV8hTAxQtkfyUV7g8zWD7ZZXi",
  "key19": "39HRs8M1kZyzQMRwUny72sMth7FHZx9TiNr2ZyTZuJo5ad6EAixSrtwM7XwdGjqfCERrNUyL6EPfNQd8Zi9p5n1J",
  "key20": "j9J2o7dMCfhZA1P2FqzVvBj9x6uzL1tJ2vvi6KwNQLKN54XRG9dVKa66pe5gUDs39gHQ4BzWkYn9ZsKuERQjJWu",
  "key21": "4tEt56cf7muHdQV59DvELcND3LdkSHoSF3USFV2Xss6ZS8FWBswQrp1WmqpK2MqJk8yricNvAYvrg7J7Z6tKoxgf",
  "key22": "2Bi44hjBnFEJfcKZFBw29XzSXuB7fJ5XyUeZLXYZyZdQF1BfwbxYJnNtEN5bSvaGgJ6Y7y9vFs2TGqPfacmNMwm",
  "key23": "4hs6a9QUMZW4Wp5x5UJAJnYMukxEVpw1ubfPSxt2gf4oSyYfm7acEJykBxa6DSbrM7BjT1TL7J9s7GqyRoqrUrDw",
  "key24": "GmtSQZt5wZGpEtuqAw3796eWcmHKpUPtjSbafMQMMcndG1xoczuNsMgNeQpE6L7QZTCPVgsecynEwEgVPqa2Uqn",
  "key25": "33c8mLnQpE7KCXQZ66NgabZ5DnuCcs1jt9F7Urc4AX4nosbDNFenJaDTFhuxZUirirt9HjTLGDYqd9Yqw7ruDjtQ"
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
