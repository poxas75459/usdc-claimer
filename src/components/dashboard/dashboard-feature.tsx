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
    "5ZSYPjfLPiLZAQm2udAKL3YzCJL1DMay7d39nQTCbXSon7JjxMGxDVkPk7xDPoEaskqapyFqRaJcHB3GKX4fqnAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qT8QJDFrbkPZUhe3WZXqDoRcyccMUri3wRJNniR6pNqf3BKnaL8pXokw7WoN9miZuecjxGLtA86KBZ7zBGh32aW",
  "key1": "5Bqqk8xsWZu3T1pQ7s2Qk6BTdCcgkgebzbVZJXQqDeENVfSVeViR9EbEacQYdUWQpmdZMMMV64rE3tBFsmoE5KQb",
  "key2": "bK6dqv5oobRzm2mRKNf7UpkxpcXt98RwYaCJ5kPeVVQvoDe44eZ3Ny3Lvcfiq7nhVuC9JbS3PJJi9s17KNLAFbG",
  "key3": "5n3ooRNweagGAjNrCGT5tJ6oMESB6W9gXUcPY37k68t3u9ViTX8kbgtAn6SeADHuy4V89J3XF9CZk7GvrUqurngh",
  "key4": "jZFk1qDkARkaMg1TVF7UEttfttdV78UcjW8BuYh1XBJGYzWsWvCiqLaQ8XEzJk8Yk3HzgdGPFHTQjnLLReUSTqp",
  "key5": "59RDQa4ayg2kd2SqBd6DzdqwAZAHLVYP7FZEtN9ofWvELcGQEcfeHbigQkpCngDs54nhR5U6VBVqSkkPKwdu4fB8",
  "key6": "5Bjxq7FJxQQTodtKskBQwHedGgUC7sdP5tdM9ujJoHgNqGqgTGR5CofR8mkq4L5PY2MJypkbmZjfviJesQQkBwfm",
  "key7": "irS9wnAgHM3a2oTB8e9tNUQh3m6z4uPDtQXp2MuCkENee6BoXr1PPmDFGKUdNBayahjD3hyDguhPvmb8eKvKMnr",
  "key8": "2GTrcGVpeon5Lkf97wZ32hTYZwHKqdhuLrvzR9ZRCGfen7shWcaGifqeZcUAmHJPU4AtbFw4BBKFNWiXYXxbh3jH",
  "key9": "5gDyuM4xkq2gbgb3SxZxqbRQzh2XUMQZV5PzcqAuvBFWU9k8uR3q9NBiMu4oDVrJEZ3eP7nVaqDjXA5ydKNhpswR",
  "key10": "4a2KkGjMCsix15o2mFv7w4t5u15sysoSXVJCaecenqb6w9aYciZBNxKtCwgJMfi6rXZWLPmivoSLuXKhaJRYeyzq",
  "key11": "3ijaoHN4HQvYwFaqMzxYg3fDR4UKvrscDHfm6ouZU49eQbPg3o3UUffwBrc8MTC92nyQsg2Z1XpzfDbLbN1nYrja",
  "key12": "628TpMoPABboL2iw94LcC2VX2ZjXYveC78t293ADGMpZQsqTEJkp1n5TtGK3zfHGGousBZ7iswX2wm1vn3CUe91D",
  "key13": "4w5racNrfans8SUiRdUPwVMqX4MPmA242My8JnELg1VjpGLzLLqxoQnAPpyKxweVVTbynY9qqe9BQ1TUnrT8C1yo",
  "key14": "4sjpFDkFFr1u6domf19YQZSsM6KiGjPXAgqSeDPaNkBG3DATcpMj7tU2P7iJXeXeSP3gNKKTNDAJWiSuxJ6goph2",
  "key15": "grZPeLgueG5gZDV4gGfByre7tDNe2ga6jRLF3oGL7fhW5MHkkdkxY93bp6HhsAVBCBNvKXvopkUG8j8VbG2xY8W",
  "key16": "3faPjyhujUc5y4i4kdM8Mgfm4sYAU8XzHWViQnxUBLq2Vp2Nr2Zk7cUW2m8o2uY5tV2WyFvviArv1gLjV6yR1RHN",
  "key17": "5JYPTK1Ub32t3JStQpUe4sSPKzcq8kQaLtASqkJs828CqGUAwN4h3XCp4Qv8yPNVH39U7Tfo1sYVU7PAFzhtpusS",
  "key18": "2WRp9vQG23AnvpwKJaB64yFaYTfTdUM2PUnZt4UjfmQrDR4m5twjNBs1GzsTdhy7D9Sg9pF4VdkNNmwDXg55vuD9",
  "key19": "3UMXJPZgb6VWo8ToMF4gTqUB69joVtf563cd7tz4qxutvS9sy17N4oayjWjHcjqDQu69eq7Js1EgAMjuDjZDNKaA",
  "key20": "49A9KBau3aPAHHZL9Qkyd6JZRpb5oCnwGuQN1xPXQu2RNyZVU1zTb8mHr8P23LwYqRvWQRZmY5iAAkaPwsizvJuZ",
  "key21": "2rUMHANrQuxa44riU8QJgccFSs8y94pdMAhwGBpt3no4JCQdD8vhznXP88wDQjyzK5KbErtz4Qj4mSvrmyEwxvEN",
  "key22": "euCrEYW6niY7QqKYmFj7W9L5sdbfnT9nwLge5T6nMZ6PbRh4ojoZchkpXk7XSnefoThsm99RjQsrPNRgjL8CdmF",
  "key23": "4j13SV8Cyahe91syhFF9YJcJ8hT7ZPLMCFdvViRi1s8e2uNjDdQeArRPeGDvjwsLfkJPGds2kLBiLKhL3SXY8jWm",
  "key24": "5aWQaFnphWVxSUG5EHi6Zo2vdrpmYa6v1LPY5WXqbmAqqZN1g77AizwYXP2Z2dMnbLKz98Lz4Nv2nhy2ESL5NDvH",
  "key25": "2rboCGYuHb1qmSNQSyvMvbqeiofTVn4MUf7bnmLtX6yFDmA9YGSiWcw6LKnaRWMU4cszXGWTidQJy2ZR1XGxoFTA",
  "key26": "367zHEqunPckTEYAS5AtCCXfneRmVhAMJPBsEqW6oGH9wTX2MFMEUMzvosZSfhN4SMP8Eutz93AQNzYpDQ59MmEi",
  "key27": "5FF14YxJbmvQ7C3cMmxmbe17oz61MNX79XKgyiyDjw5gx147FMwZpDKFCaJQBJPb38Vhm8F5jUbcRzEatrPszHYk",
  "key28": "34umR5jvDtHP7ZJm36m1LRraeRwPgeaCr5A1q2xN3V7iJp9r2k5mjatKaoVCTk4NmvApkwFuG4HUtxCzarSXkzqr"
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
