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
    "58GexU6CdkHw6Za58qMetHmYWhhvJaacqvqtyjoEkps2oLGdFn8XbbB4eSZG3o9usd8nVQoTgFpk9rono3CJRvjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x3nucTSgS2fBZ4EbQtP21hSwFCnwox53MJih8E7KomyAZsHQxqK1jNNxnKPuM6c4bzJU6KJm7sm7JtTCLjAwZ5Z",
  "key1": "54gLgaXRqgX8yTgT2YUvUJJjkQvSae9mGu6jrU6MPXGGFr3iqQbugT9eKorzhJNTa2uJjZ4DZYqrU4KeqfRsF4oJ",
  "key2": "4VHCpG6B95Kuoo3jsRAcR3yKEz8sivhFYzDt5p29J51HPzX84iKCYuxUKo9VS7XASQ5XCCaW8TUxEqumbTtxrF2V",
  "key3": "3h89sNUDpvKUvZ5hzPeTLXt4n3xoUKKQ8kjwx4dRD23D7tE9QYkc1RZhW2rgBgyUWACH5yEhApUMwMh4a55ZHxM4",
  "key4": "27qTpRL6uYYqJ8EVCb4SVcUFS4n15jXph36UmG2GkeSSi9PzSy25Snpu7cReahrMsVEJ7Hdn5sCx5JAnjRmQNSa6",
  "key5": "3vGjyDFwdtGJLgKUMAV1nmpSqduJELjzn2hxdrVDn4BQj7kcJsLsaFbed6TKmT9FGLAofxZR8vJzysArfVYTRztP",
  "key6": "2HjCKXXJQ7Jxiro78MPA4fkJvmLu8SHAdavh9zx3PLb7y6NJGocUtdFvTuRtsXckktdn5Pd3x8zXwjhWggvxm1Xc",
  "key7": "2qqV9Poft3cP9V4jJQxtf962g6JRqqXfd83ivgoUx2Z3fVARbA8U6td1d5XA2gybgAYV3TXQ2McLNLmYKyHPGjqy",
  "key8": "4QhH9zsZ3UyZxfGMQ3bpYCviNpUTxvuPn9SzSbP26MvxQbFhzZzvGwi7vadqguAncCKPtxkabXbwaDVJNZpkGdho",
  "key9": "3e3Ywa1a1svKiRhTtHiewTgTYf6mB4vN21KA6k4EGtSoKShiHNcPs1XStVTpVqnntL7Y8DbMx7roNW9SHv9FCqqQ",
  "key10": "LNn2CU59PX1ktSGCYoQkH3vHwUDi6LQGaL637rFLENjHEx5QXgUdFT1aaXXYuFqy6aYQ7N9JNK5S3jVNRhxL9A3",
  "key11": "5D1HBL3NMbmhpjcBa2LHmJPhPFwaYW5nYovjfu211Lfm27KcoMiqb6VE9AxWWfeM3b3Se3DyWdNBWDtf6BfA2fAv",
  "key12": "4PPZfCZqLYgzm8GmfbHqyU36zjvvAFJpTohhSaXqqB5ztdjjoCYpxXcbbwtKY6whGzTttHCSnTGdT7vVi2uB2AYB",
  "key13": "5RKXfX7tSVi6bE4xuX8kFx9x5ZffWx5wHwkBw7uzU9egnNT5JQrHw8aiETycDNMhbfK5rXbaPTYegcVbEfn4kyJB",
  "key14": "2tv9u8q5aSWCShfGEArsSJoZVqCAwnbWM4kzjkMQaKj7K499DahtBjEwaHi8g9LwpvqUP8r7mDGtBB6UwzyaL6gV",
  "key15": "ZXANcdJwYAPccNy2sZQbJmdQymNoKZEcQCSdc9v2WFaNULSxGtTRD6PSe9zxBuDXNK3LehRFMeBKFrQTE3FPwVV",
  "key16": "636ULKaiH7Q79j6CK1Mt5LwarRXJTp2fumLLgVbcqStLz7R2STC2qAvcdtyHacoYo2NQGBPPwwkJ7XwdQwCjWBfb",
  "key17": "YX5e4dVNBS4zQdgZvmvTYDJrYDk7zdUBTGbioZqiZCYP6dx8tc625qL5fYHExKREcRkqkLoZY8BTit8od9H3A8X",
  "key18": "36UsEM8Cn1mzwbyQi3VDLeTW9LRtHfVvhQe9qEey2tJXQudG2sVbRRvF7E7kUfF19PDk6mFzTyVu8KmKy4PsE9G3",
  "key19": "4Nq8ApWmc8HNgbyEF9KdCxbzWjRi4YUobWrF6JNb5BBnDqa6nkXzfvUQhin58Q4PReK2VsFX9wYBA2zfvZz2zXJ1",
  "key20": "djdtPaCZBkxoB4G8Ruzm8SLeX2tX17x7HzuwwTeCGFojwKBVWx9wUkSbKY52sX3q9fagxTvNc2sE91V95kyksBz",
  "key21": "KLvJ3ePHoa7eHUmp6KiZRsSeyP88FThgGBuSKuKMuU4CujA66TdjJt4nLXuu7x2FEeUnutmQyXcySQ4yNh9Cmnt",
  "key22": "23AnD7Cs9P84XCggbbFinK846YaW8RhRCz6Ld4bmXvevKudAzHZHi6mT4czbAVBLNUF7pbkv5LMuVKXtTDgxJNL9",
  "key23": "2sn3dj6vv9bW7BAuY2KBDNNpW7yMSUqzJj8MSSKAtmu3JjHUvYrofQAQo9L5mLa3oeRsYXbHkRjHUGJTYEMYctS2",
  "key24": "3Jumt8ZETu2zUJ8AFweh7XN6zeAuqG4Kw6qgvH5Ajf6oUjR28A1LcYjRiGCJfNWu9rqpUrYix6dkXMWrfHSVcoXo",
  "key25": "2og4DC6BLeJ4eS95iGkJv4egSGG3u69qDQE9fKzVmcuSjoGf9GLFSL2aPow6efGKJuS5QaZ5CfCbvwghsxCE7XiL",
  "key26": "3ZGRt4hiAHpmmF8fHLN8wNmtyBzbYxn7v24EQf4Ng3FughXNTQNqcRCwtnpzqfornFq9ukRc96RyZR63ygwZk5xV",
  "key27": "4nf6Qm6K1s4segjKbjBhokAt2HYDeKjDWaD32jitboT26R6jjmfFqe9v9Zv77AtbXpSkGrxjHSZvAjjZ6yNFJWQx",
  "key28": "3XmMSuP7BvWsX8pKvWrnQwhJWvRkiwiBikPYsurq19696rFMGA3fsy5Ccb2xMoHcNtZ2n21gngmv5qFCwpdW37dj",
  "key29": "RHk8VbZTuRJ3ttsietExCMKj9BAPnW9EoR1aMdxtp1uD6Wj67e8mGVRGY5Gaz2vk8d4qwaQcaUXPxg9jPRdMT2C",
  "key30": "5KDx9wVLGGmMHSASn9nfVvbjSfoFT1NTRKHA3mAA9e9rgxD6YHuYB8AbDGYBxik4AA5vToL6tdnqxjKamsRXhbeV",
  "key31": "4cJHPwrgA76jnSxQ9fnwtq3i82g8xZMmXprtuKvmiYpLt9REYPvCqyjZYXEA2TyArFxUVyTmowuBcbdzkVBBGHbs",
  "key32": "zx5byTVkCA3YaDt9qSGgwLmg56W7YkeTJi8ASWKz89y6rTXiULnspKHFGwHDxpZ3KrTWpmJ594Jtret4ZnnQYMs",
  "key33": "2UEqyVvuzbZPd4CB8zvLtXGqXxo3BuzJfcbG7fYVYQjeVpM6kU13msew1pETUF2zwemX6A9MspVCcT4JzkdZwDHc",
  "key34": "JmwUmstwjrsWKFxPrgrJ8vmgJF1GGCSpYiPdLqSpuNvU8gb5z3GZYzTJbEqRQzgiBX3Lve5YcdzvjivpsGuE2QF",
  "key35": "4nycgty3aMCFmksxyKQ25JfNrfmMtknQTZWztRpZFqoZTCejZBoetkoNWBb2YzT8P2ALuazYdHpdS1Cd6mBH7wKR",
  "key36": "4DTRriomeCD4DJLdins7uFWEwci6bBenMWRsBv46JquFCEabw396UoPZX8gfGwuWyia48gTn7EeuchibfvkXRRTs",
  "key37": "5p5vEYX9UgGQ4Z4JRcj5aidXfPqW3dJ24muP3hVqch9FTuPki3mYxE6UcR9W2Gtwy5Auj5hLGCKqS1ZzmR6eX5AU",
  "key38": "2VQbKXM2cY9E7giBKYMVVoH8RH3xeCUQYEj7PvzzCqaCGHzcRMhgahfmkaEYguV8qdHTPJH5QjscCsMPa8uxssHz",
  "key39": "tcsUdCg18WrUNWwUtY9SWexLz3C73xYD3cGioxRYZ72qNo3NbheoUQFChwdx6aTDwwknpiXvwVqErMDJUc8PvVw",
  "key40": "65R6QDRnkaEEMV8Yoh6xXYhYJmnhk3ycaqXYtYfM849zKUwDZoGDimgZpSeXLnHiBm6vkfqxPhQKPKCLEJxvZsyf",
  "key41": "5zmzGN3fR4A4AsLPaMbBHdzS8262bnMETvwGMEeifBX3bYpDHSaVemrhEV6QbcC4SVYAM9WNGv3YtqMe9kBeVffE",
  "key42": "474gKXQTez8UraSUW54HVjHzWGAFwyE8iQACofvhcG1BLBhZ2YGuU9qGmjqD44HUrWR1TbnD63tH1M9kopyvKUxk",
  "key43": "4CevGSajQHH8MWHv1RgjBtrcofcR1LKwaM3rjF5xhyobqi8axWFrShBazEYDFWVR2NwPNLJhYfwWCwydG3Zd6wJk",
  "key44": "27oLGjxvJTngfGYM6NF4FcV6Y7jgsq2ymyftihej3irwnFfQ8B8LDCydjrx2PfHEumwXJWLXk8B8yc95ZfXkKPWX",
  "key45": "2LgcKbezpwwVfNm2sKEE9G2hkJm3eGRjkKrC5BvT9DH349hUBwMHyBijnrMV54jHbCZX13iqwUZMxsmFJLySMEKF"
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
