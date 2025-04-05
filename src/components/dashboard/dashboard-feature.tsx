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
    "ZWkqR2Lpr783mX5kyKyoBTrvWXuV7n9jLobxmJKGgXGEcySiwrBUBmUwypyjog4zdejsn98972iPGZUvjueBbbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuBsuq8YcbBVYjh7Lm8mzAZAh3Ltngckbe8g94nXMmr7amT4eNfH6r82wBMUKPWxgYXeXECC5nto4Sgqe2httZu",
  "key1": "a5KW4Payc94qrQotWjuXmjjjjiwto9p6XErCwCygMTqmZVSf9ymg7yWuTrjMjGy8wisHUVV8qkKh6eW58FcDqAu",
  "key2": "22tHFTSNBiAaWKPki9J9z3c1Y6VfwyKLoyzyyV1tVFqJnHDp5jzMQ9zkhkMKoNpK1gjUgydeV2Vh9Y8AacUEtnvn",
  "key3": "4VXiRboibmuFtE9bciar1VfHnhPh4kQQVWzgfuoWXqzPT8tud9gAWRexHZoVbv9a9wVt2b7eFxxosG2q1s2yEnG2",
  "key4": "4LZQn8Q5EPUVA6Um2wpipVaRmPzoTp3Xyqzd4X8oGjBQhdVHZhtkfntpFD8rgvWqVJisPAfcUjkeSxU4LUtwB45s",
  "key5": "64k6ckcsFfgnkJUietZXyJtHaPfSmMvFHxRVFeoPS6odQvdx1CzFq5aG6G1nQrytW6Z8cQxTynUTjH9BsXTnSA2y",
  "key6": "4mEwqYvYb1tBVVoWrweCrYHZvKDBiuzo1tzx8psGvbRtHfvdTYDLwZxvnG3QcrYTaYfgDzKAbfQSQLXjX2ssZiFy",
  "key7": "3SKTPHSLw5HoDJu5SLMTYQwqBrJfPMkK8gjGNuViz1nMNfd1ZaSjSwmJZqchzxvpE6NAW5w8PEfkJGJVWyYHaF4W",
  "key8": "1EW5aUc7fbJFJD1XL5vdg5PN7pRWLNaQmgh7JY4ZkJVtEnBTQ7aNJ2MSFg8f1rQoGacMSNbVvWB7J4GioMFL5PX",
  "key9": "3ZC77ecWp5K8DxxDD6YuFEfRrgbxxaf1AmKucMrwCHMLbmUWfJKpf5TQipfVahjKJR8bP5wiuWw7KkT24ZD4FngV",
  "key10": "fnAU2p37oLUMYJ2aEFfB4RtBaNSH3PRRUeZoxzqT8mfBMt7XccE2rWiiMrXJQySkiRMwU5pETMwb3vAYZ3YZcz6",
  "key11": "zxGA5V9KPCnVELDV9tgNsopfB4F3p1VsiR2EUkCW6Ny9qLkVkNxJNYt1HF9Ui17PaUpaGMBFaRyuofcJGXa8PbY",
  "key12": "AZZNXjEX4VHeES9txnG7mwcBQbh5MBpaTNComTDgUwcRAeEygptvgQz1YjXTWcwsp3VdkVeZwqkFGLxgtqyZyzk",
  "key13": "3AMemNtoKx2agm7p4bcHudKmGRhkt2vFeHVxwxSY9f2muG5zfZP28Ash31YZbqYnGxLMJWwLxHJbfyTRaySd3ygk",
  "key14": "35sfzrnm5eTE3kG6cS2UfDXifDEjakrfHZoji8NPyxHaRCSjrBEmYzKdqx3k3LSrDAELcTXYjEpEWzNLW3uXzyTB",
  "key15": "4q25mtPMRfDzrQeSRm5fGgzrHdEBD75zo2vMzhLnLcqwTy1i7sYXDF88sH941SLcfADVzMjRGtt2F3xcNVnM9Z5o",
  "key16": "y6HxsFpeU2FqEDkALjFAxbbKDsWCfSAzoQvGgJM4Uae7hE9xjC1yGKP3Q9MNYaGFXybm5Jkky6LngaoeJNLUZCr",
  "key17": "2G94XGVrGwTH1SjGCEEte7GDQCT3VoTF6Su78NZkcp6ACKYepfEBTPUJaQ1oyHtz7fYPTk1ktUnFvZyvQ3qBn3pA",
  "key18": "3GG28RYySxUZg6TDd2zKwGoqMXg9MFWYbYYhDyQMnN5uW9zpaMfTZbCr5Mi1ygXc5Dwe45xs7Y4YuMWYhoyG4BNS",
  "key19": "4hCgJ3cNHpus5hXiZFMduCeBSaNj3auagspB5HzmPAVC1ADvS4yhFdAd2qHQTYLjcF8nbSwM9utLtMZMemWDhkdM",
  "key20": "mN7tsZhKrujsKVU6hhRKgfRaMKTx3YptQtKe9zmgdWUHpUnT5eoiTxXE8gqhxMQvbwt6NKsmYe61WSA5nPwy8Mw",
  "key21": "4N7RbS9zQt3CQV2vxAzXrJXTC7oaKEnRSi72ka5KNNZkhF4eCDBCQM4oRkeC1fN9y3wMZ5U3S2KVoQ4wq99eEdTU",
  "key22": "4LRmBnfRHisyoAEe5LxDcktvtB53b88mY3EZPf1aFjTRJEjCs2Akg9FBikxxpx1bnMQYkAEqaeEoysoYTSLRnMF4",
  "key23": "2TjDu3DN5woCRGfjVXHFnCmKPBfF2PhKi8rm6QXGArLZMbUSiyZzLxV3ti8hFMNVcgZJPxTd7fhign2k1WSoV5fv",
  "key24": "2nbHeSi1LsCk5zpZBdUdVFujcGmwD89F8dW9Dzeq8m2U3C48sQJyPLkdGjW4yywYJS3gahNNZ82VEuV7sDkyr5B8",
  "key25": "5gLnkM5DDh3VUn9UvDFTCnnsBFRAo2bQvp5Ju8r942e51mCMfX2eeBTJuRdniyKS9qRidFHV5iozBj92RYpMjdyJ",
  "key26": "N6wYDiy6mBUzgo7WP3sn6zx7sjEbZ79q8AgD7PjNdwLhVrKqKvukgKiLnQbmE9RDhcjh6pT2yehAACt85KS7G8X",
  "key27": "iLergP23kh4NNEFccwTbMS2oiM7u7xa7ccPMJQ5zhLRQKW69CaFV49pK8YaqBa9WE2JMdNzF9PUSb7B1Qt6VtPW",
  "key28": "4zuHNpPC8VKaq4opiMEpYv7Fpxh2XS5v2xbkFnsbRCyWuDt6jLEywEKPGHGUp5A6K4VtfkR5mkoFcBRQxdRowTke",
  "key29": "269Y6REtqe4EpL9aLmxFgriJZenj85XyrUkyPXMKQc59zbweWj7hf6Y9Xo4khQ7f1Rgw3RXcWoqiATQFgtskv2Kc",
  "key30": "As4Noftd32mEKgRSYUhjyqhEZqCmo7vwtQumV7nk2WWBf4cfz9VAvDTCoQEKbycioKzrgUqPQELNCLFuijY21hR",
  "key31": "5HmGS68E7vDTAk3inW87wz1zMiVqXGHwg765yV1ctXgbEWzmAW62K3R5FTR4w962MA8RgZRz5jLoH2gPLHBG99YQ",
  "key32": "pzVgcXv9mN7GGr5jRWmX4xmgWG6ycwxqxTuKvqrvG6kVFHVMJ4JRACfM4vN3n3btoaD13NLbpWWJyqXm5T2v7oC",
  "key33": "3nmAuRWzJkEhpWZ1k6R4zVJupwZJjJC5DLvoMFASJhonfC5GNspvjQ4oqAJFHa58oL9BpupsM1KFowFn9yDxNXrJ",
  "key34": "29b4SRTcdr6cefzqn3G5Dcnpr44cDyD4QzKfKYDM6niKxuAXqaUvT3ck1Zazjh6d8rWrqPuv8p3mSWQAxCecgzxB",
  "key35": "4RPUNwmvTuA72avw9jb2LRJXVYhxCLCmhMqnKgHtzxHgSh9677JpnPrQhGPCEWTU3F4ni3HVBXg1u2nak53VGAC",
  "key36": "3zsUx6fP2aVGHUzvkreWbAtPYG15dxGMX1PEVTkVRajrKEKE7zQvgrywiqXmaMD34TMY2eKQybi8XPFowQKJXFA5",
  "key37": "5WFvsscAxXP7kDaW9F62uVRRJ2NWJrAeuqoNhpf4jiFaH65YhyTttmFu7Z16oR7XCnvAqrKqmTEpxxT8o2Awhyug",
  "key38": "4wTbeDiz5AS7XSh3Dr2cjKSnTKyf3y6C7CwzC3tjLfBECYFpPCKDgjVtyka2yjLPtZL2pYx56kyd2fx4ZZyKzKxE",
  "key39": "2KYhcXY6cJyAunJvCiu9pXhJLuhsCQzZmbfXSv2ivkLXpg7hRYp3exXzB5DNNsgsgaGnstntuFPDTMqbLhjiRjoL",
  "key40": "UXT4q6goot3tbKD5P1WfMMqvkYRf9u2wvx69QLSqe4tgRPyuLBRpWWWThsKfW2ZPSAJ9FxBEwN4SdbxqRbYvvML",
  "key41": "5Hc1RWM5S9Lv1TAsteP6j2dEk1Vg5h6zc172PHmQC4jBJ1Vr6cE2yCzV3UJZNBULFFTRsYjZ5X3QPc5TFeN6oioy",
  "key42": "5QUA7D9nEKCL8x5sQeoXtXCNTx3TTV4eeQfBSUzXoAhRwvAyxB6ztT8b83CPXhq9fb23zcyJ843U9FvqqpC7FmiW",
  "key43": "3Kk3RJSoudnCEFEMu1NLUpARJ6XqpUkcbKAfy2gd9BhFFbXdCrBGnJjVS1Lo5pridTcWFxAM7f6wFftQzZArRNjW",
  "key44": "41TwEUUPQjj5uJSZ18JPy9XENAUAwAAkJY4qk23Ufy4f3mRjxjQRJHHo7hmPeQRTJJCJrR9miV8XwdpYA6a9TaKg",
  "key45": "hpH7aFvmLtA2xTpaZ2VccJo5jzxWn1eMs9pBh4K16MoLHB6WnpA5SirwWUteJm87Ps7tt9aP5GTJ6GmsicGJ8uZ",
  "key46": "5Nszwat1ByXAnh6KmSXaQ2H1kVHQySZZwXaubCHCV9bybGHzmheWiZKRFnVaBYUUHPiaP9F17R33Z1S4ro98AS6v",
  "key47": "5pYuuhZGrBW2DTEFYkobJTEE3ynr6Uh7hmSJCfJMqXC4oG3Rc3gTqSkVBsCm4dFMznEeomzrfadxNEP2wepCTRE5"
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
