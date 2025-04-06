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
    "3SaKehQZtzFyWnJPfkFRrLZKchRuvmrwBhitZN4mzUuXnicyY34SoYZ2ceY5YvQZjt4Eo8RVftM3t6BFfWdPPtcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXwCnptJHodPyUhgBt5vBsL9jhAH9DMrZQvoGERAjt2CVFSfd8tZFPMj5jmpSyfVYjmm1g1CvPwjsuZBe45mb7t",
  "key1": "4VfRafmz2q5u1JpXBKBzTcRNu99e5LaadNShmdAex8aqL2VdXJ734FoH8FLiMvmTLsb3mj2gnxdbDzpBsHgf3E76",
  "key2": "4BJc4aAWKNii1MLwQCvqRTYks23JvvJCcCU2xMLaR1ytme7wmvcULdAjferRV6Y8jBGH96urmeRScRNWkiyF6xoS",
  "key3": "ehceR9gqtQCbnyxY66ULjGVCVsKsk5tis6kETZNQ5dFxuD9ESNucn4g4U6zHWu6QnwWLBc9LfKS3XNiu4CD8BVX",
  "key4": "33HXeNWLhbuZE6je3hCc5FYGY6QrvubhFNaq4Ugz86d5Bkc7DF12KHAc54iBk6qp9fZdfNkFUqswf9kAFZt7JFmJ",
  "key5": "5Ayg5VFnnCYcSKGuiSLmEorQhgCBaqYDDqEcwTd6PehjR1WBP4QSbyWvK8QLtHw66vPRqy8KVksyrhoYM2oVdiKC",
  "key6": "jESa3Bv7zFdaHCBcVqDbcmWH6AkUJrWp7Sd6xovEPL5UwKBykosbx4yoSSrjvWb9FYAMju5BjU1jnfZmnwZteCm",
  "key7": "3F9JrjrtrvB21W2uD275s3akSkcc7T5HDts2P2Qf8o6KJLEgndEgpZX94pnpiZAqs51wNMzhjybRqrPbMBtUtj3t",
  "key8": "4EZVviwkQFjj1katFzy1eqFDpBk2E3G2Z1YsuqTAwdgNFFex6GdCSLFipufxpRFUZozh6cHX5hC88UB3EFDh6NQ9",
  "key9": "ReFUpfayTc9xv9FyfM7hpegbXFMdL5Q1mmKuQWgoUAaSKrz4GZQJQbwU6fXSnU43qwoitrjdUHejowCoQLk9iiT",
  "key10": "8KF9gXB7EKfmz2P8TPm7DLrsLLV3YiZaSdPLbKuYCqEdpgDn3HaA3p7RN8J7joLfMUBAy1AVGNzY9jGVckBEA23",
  "key11": "49srKbDUXzEKDVyRuSMhNxycK4VX9eofRzdjdPUueKA3qLp3TVCor9nvj89udmYVSSwYg3MjDRir7KiVN5yPKcgJ",
  "key12": "QwfG8ucDLZkco78jAWzWY9R1SBvxJzeGsZTcy4GD8LJUqLJfkv3gLwjmAev5rcBhnWLSHkyNGn1cQLEYtLTaRx4",
  "key13": "2oWKSVvShDGcoCMhSRTdcgnHmkgEd1sMnRVjnGqxwjxMMBRwyc2M2eGr3jA8BFQQyb8T6aoba6cJSbMyzsBPnswV",
  "key14": "2NSUKkBgKSpGrXiW3sXE2RSBhztosP59wNu25QjYAg3DgQ7nAE1pyb4WxwodiYCSAiEFwqpAJynyweMXFDrEygB",
  "key15": "2yZkbh3eaKtC4F5PxhundwYeGwxPLgS1nmVATwkQWG3eq7dFdUr1Kmuxdu3vXqq8k1JwMPL3MDqQoGG87zASTmKp",
  "key16": "2RCaBpopJTFyt7xnFsC4nJ56dinb7kqPwxgSyLFfXqFkYvz4VuwwmKK7VTzwRGW5UAFwJzVrqKRjBWxxe1jmvwLt",
  "key17": "SyPVUnoYmNujzUeVzTSP8zNAEQAjh4boRYmoWQpGtmhf8TpSG83nGu4PzukBitsJtV2BBiLM6pNumNNN4P3UKVK",
  "key18": "5FLc4SaXDTMb1A1EHfVEQQip4xLR211qn4FJC4DvuzxZwxX7nQq4PCzwrtahbTz5uy12uMUgjLWpE6qS51vEv4to",
  "key19": "gX8XS7mzURKbh9vACgJWDCiK75yFcndmF1ejoSUez4CV7NSHZFWtbFcUjamjZKNmz8j2Y64pGktFAipK9FFEjsU",
  "key20": "2un9yKrMYe1ast5C933MQ2tL5TbSdaHuZxg2iLH4GWfid7SNT3sxJtnav3KEErMwyXMrTkaafCAHXPgE8DV4nLzL",
  "key21": "67dQ22ZYvxPrTD4BjpPcLEgCgPZpRVsHVs56RrD5dwED51yjsEpe3Uk5H7v4LMQ6n7bH3HnCxMFQJE7xmudM63Fh",
  "key22": "2ACahseddpeBCEwuW6CweF3wpkd69Le2dYWuUdVz1gxoEdveSXs4sR5caiGyJVd1bHU3rUZLfWV1yTzecXxro5SN",
  "key23": "RvKKqswnBEA1DRphRH5j2EK8BJcSqdxrPdgejHJCnH1dkcbixorLUnKnnnzUrnDxV3HHQEA478rL3KDGsMJrimc",
  "key24": "4pdLM72WB3y8YaLAj1CTFcfXqb5U7DdHKATGHLVC91iUAPqFGzCoHuhWKoFUru8TTuAfRArqhvgVxpLYzFBpJeWt",
  "key25": "3RpK3pmxEqg6929bp4jc9hYuY7ZGshKe7sJN1H7JFZ6fpLhSpDbL9FJ9MUjNJEdbhNPPTY9qVdq2K8p6KixHuyzH",
  "key26": "K24wqaPWFaxVk6T6SNPgbGMFdkU4vkquFjkFFKahi7bZN1e64b8dZmc1nWusHA6zhQ6CfAhGYypWUvhhif9KpNh",
  "key27": "2CBKm5fHdei8dV1gpsWZzMZYMxhJiwyp9i8nk7LXqjNZKBcjLY6EVDEzkfC5M9PmJ6McYdkeKL477UiwAuvR9Pgg",
  "key28": "4Ta3D233vBngh8HqBoWmpuZxdVvpHyu4WQYbKwird8zxpPpHXeMYRNH2Jgd6vVqZLxiebeMx2eX4bcMGtgMwYHoX",
  "key29": "dvamJ2enLmN3h5GkXgWW5NYfTEWv3MCH8Z47nu6qQ1pf8wWavqhTzXoiQkxSHV7AXmgXTgRYfGsfwujK6SgL553",
  "key30": "4YLjvXRJ5YC2YKtbtfs5VVjevCLmnLQcgNLZzptoGqfwWk5KVasqZqPGLFfAq2utpanMgee8rt11k3fK3p8EAaHd",
  "key31": "3wtLS638SxHk34zyz6dTHzHMoLvnAan1xUB2ZPg6ZtN2WhqYtkTkiKwEjXtSAzTecdVWne6VstNi7pcSGiZPyxCh",
  "key32": "65HXDee22GFrZEK6VYSoRjtNE5uePb3fz4uxFjJcqgSjF6GBZq6dedgFVU96N31aWBCh5wdVJ251V6DKW2GvYxGe",
  "key33": "44hckpQ9GB3bR8Y5DL8xb1ctAEuqwusgoC5M5PatNZWQATQB1rxQw6neioZW2p4a3bJQBJcJJep7238khmvZgj1J",
  "key34": "3Uv3gQ8xdxrB5mgWq84MjAhZhA6WRcKHW1Rwmin5iB2C4WyCcwyW9NJXTuGPSMMxz2S7EwZZjZvFWD7UKsu1oTXA",
  "key35": "QfFB3EkLiE1WNxgxmEWTTUTCYS3PS8sno7p7NP1V4ESGJs9McJYbWbevHSFXZQjsqDjy7NTJKgt2zXhjMFmWsQt"
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
