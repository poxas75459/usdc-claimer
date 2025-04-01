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
    "5PS5X2UYibHWAMVGtVZKbtH3ttB8u4wjGoW2Cn1ZsYcBxWQTTa5bonHFp198Rb5Uw5iXnBnvi9n56CR95kRUtxTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vm3Nqf8jkVWi3pjMYXZqybBMfLEJ4WEcsc3PHezm6ifKwho2SiCYxsFPmffsoJpf5Vdoj48Sc7SR7Mf5V4ZaXfh",
  "key1": "yTPVdGdeLyeBdcRgpKHfYGnJSQMF99yhdu7PaZ7L145WShTnCPs92cn24AUHrbWUaS8PzcxA9TMv6KuHDe3ziz4",
  "key2": "3ojzrcut5fSkLDx2DVxgGaHPo1zvp4yTgVG5iT9f6iF91tn51u3hoXmJAtvBnvDpJMPumt8nv5NaNTLzHhY2tK5Z",
  "key3": "4Agsx5tprSfGpdSREn5YLb6EAz4e9Zu9GW8yUiNkRihGaG9zAzALgUriAopoLQ6YQBv9Kt73P9CnDXZvVUyGGosS",
  "key4": "3fGfqG2aEZoppbWTAPNYsMygZgDzHi2Tsy3HYRavXWUXmqkeDjD7AD4DhwKuchdo6Gk7znjiUmrCBui27YRfbNYu",
  "key5": "3xcYLquPPvUaWySh3b2xiz896MjrN9VV7TKezDbB8tQHcZzWHVJwbpBGzYJfukNGZq7jM4mfqVvBqzuAehxxLWMf",
  "key6": "qBZMZryeRknUjBjsxmeZgsWSSP95yD757dbDD4h4a1kRSfNT6gHJCM1BKBSKWjDgi6schkVfdTymMWaDB2sKUpW",
  "key7": "4P52LCf6zTF6pokMHZBLesWMuQJDrTf3Jw3XWDKnFJVyt2W4gjEWgF1yJRy74SNT3cxGc6aFbDCbuuA5D1LmRYNc",
  "key8": "2oX763cogREUdDEE9zyzfBhuGJc6x1rmSMEAzSEc99R8pBfnMybt78P7QKYhYux4V3gaDwh7xX5VfxDEnEm9Wfan",
  "key9": "24WSVYeHZ7KgS5pE1N9YokjATuPNaN6ReKco3sV2KovT6XFRzGDyye8tSbJUQCkkGuDnai4jZ3Qmi3z3WjC4vLyU",
  "key10": "5AcxRwici2SNdojcyQfeK84xpiPVC6GXj16RLoPrgSLbeV8o8DQMYxEDhVTXiKkwkXM1Xg7akXyjpthwC1EGYHuY",
  "key11": "BJs34pQPW2LbQyezHmV7dfdqW4hhxcNuuzkRAGQzQM6Lk3ENDtEw6Q6kLvDUEe1M6MGjiuVrVkGWtq8c6Atj6fn",
  "key12": "4RdobpRb9uYyza6VYcQ7mMoauxLwqBrZT4fEzctGMJPQpiTRhTgJ1ke5enL1P3tAwLimTaH6pKdHCMXTn43FS7wq",
  "key13": "tC7zTyDY6tKEj7tdrq9Ncb5J81yfHiqSySKxvU4c9k57yJqbZ2MnKidnDUvyV1PdqLjANN6jWUtfXuYg82SZuRX",
  "key14": "2xpQDbKTbatmK8DBYAujQ26WQ7Kd4oDd2SfqhSYs7ikHMxFyfjCdrAKMnbvZkvYgtPKwo9k65RkeiNNPEzKjJNAN",
  "key15": "4YEbkZM5enXKtm7XMkJFF9x63BUzLH8zbysjpVhQZcLaoAW54J3QysJ7dUrBcnQ66KmdwhgJY4X8c5nSYFnvpQaP",
  "key16": "4UPheXKBdfnfXjMsPUQE5xotcMbhLxwXNrGV9nN8TdemWsLDLY4WmmiBZzBL7SZzeii4fFexwSvajPGvrTxtz2Ad",
  "key17": "HCFMiJ81DrtL287KRGpBXKs8p9c714ZWdMpHAsUkEcU2RBqyXfRmm3TDpguUYm86tv8vsUmMKwoeRvbj51ouB1M",
  "key18": "4zsMXbbQEioUpYpx6vjoUxDUrkKqFRgWuWpZFwTfFCjTyStbqn6NhGEQmEr8BHD5tQNzXLzyqJVsw2XFWYrz2vjM",
  "key19": "4mGG31WnnrTY1v57RMwNk5zevPoR9rwdrZatYYNQbGbUeBaNrKptHgbSmx1Vpb5FAnbnHYWuYgapY5xkx1gxYWPi",
  "key20": "5h6vTzAHoUWN7GhYF16j4LMaVhJTJaRGMdMtFHBy4Pr6a8Aj53UnHXJLajCWP5X5VgoWRZVazcHqXvhKHGs3PcXG",
  "key21": "5vjjfJ5cDxpQLM1T1Yuh4jnop2LbLomh4WViEsJRJAzZ8m9qT7TtR9jRLgTpLdjzAfDq98SVug4JBr8czMpmF21J",
  "key22": "3ekK8ETHykgz2UFNbJ2AfhQimsmJ8uvWeh1PM3tyEfgmtVJj4e2j22wBx9VqtxVvARHdcDLJvWQ7FRbTXsmkv66H",
  "key23": "3EK7HArDKAKcL2eTvB24prfjcx3fGjQt5RkYgaQidMru8P64dtD4z2UQAcFsU6oEjpBm2CqgafpGSN551sp3PmSh",
  "key24": "42j8P59pMAY8CUqu7nQz3RWYxu2Mc6dBbqxFJuTXpowKnTWzEQZKFzfqdunqN6CUkdhX9LPuW7Xue3AJksJVYM9D",
  "key25": "3CC9bW6fNACnopaVQoftSkZea8zbp9ye7EwaJKNhb5DoUwaEEivANWunWr59dPTKaYvtPQR4vqJBW4M4fnmGmvVH",
  "key26": "5CNd631QpkDSv4GS8WBy8XsWhCDTeCXBkQsZWmszvpreJHsYGgz38pZQcZEDmWGHX9KQkBo8mHLcBBiwgJnjXjxo",
  "key27": "55DPbyJPT2D85Vy5ouPF8bt27HieP2vCe3AtF7BfJznakbLfxWbYgLK8jQTDhTGGhrqnHpYBaeuqQcSQXDknbkTF",
  "key28": "2NrjsJtN2z2Fv8c8keddBC5A4uxWvzSCvWX5qLZiWmSnoUKNtzBvWxBv1xnoduaKeDtv9xtkvRoZ25m9DR3bYeqk",
  "key29": "4oX16KetdLbjW4izEaNha13VQMDbTKK8VNjZiHatahhwJ2pQufYeo88kRANiQY9Rgiw8wVrsmunyR8hjUFpdKs1L",
  "key30": "66eSHXZdK83cjnjBVmFaPpiSJWLB9tbGZvjXDAwwF2NNLtPV73PabFHCk5wL9s8KFsrZ7vDvDEonfRCtuqaNyky7",
  "key31": "2bmdZGBdMXWP8XBD8zNZszYGGNFLWb8P1mcBYfAGzFNFgVrLqoeEYMLf7vRrUM9tquAYS3TKgjyutWJman3vHJJp",
  "key32": "Jb1JA997K96gFP7USnesxTd2tfZPoQpGQ3eUiq12u2KBQn8d2A4bQJ8q9ETbAuNdGwtEJx6cpbsvE9nM1yJyK7M",
  "key33": "49ywxbSHXcJf1vEiEyrKKs6YyeehFAk4sJvSwoKnhn8WGxXV8j6hMkveEy85Bi6VSmFpW49PERuK3A5JHKSpEQFn",
  "key34": "4CPApSQfeV9npKeXjwxPg9oJnKY215r3SV1Nt7v7HHijVjUwkannNfddeZKCuxBD2KoXaCFBmE7T2ZpsqjoxMnov",
  "key35": "3F5LAdxmTqD9g7gTxHVVEwNY6XU8QJzDear1DrNFXDKzMwoXQksQVirpkU8zzX7mF4qvBWaWhfbwgtaWQyoNGCi4",
  "key36": "5NBExdped1VeYMmqwBupH6Pv9ZBT4yx6heEw2bYJ2M2XJBuMSVdCdpFwJt9bPacbhnXjhDBJMwQLhAnE7DdjiBpu",
  "key37": "3feqd7qaUfRcsDcPZbsvdY9BuGj6Mx1uAJovXPRFkcXG3QWQrRb7GvTSYwM9dnKpaB8SLhEmAKv1xDdQ3oL29Ccw",
  "key38": "3CvapUUSuRac4H4wuopTJCarmhGdy7QVNhEW5ZsVkZyYFrMqDK1ZqmDCydMucG6rSUCUBb1ivv9heVCvMZ2bCecS",
  "key39": "5VSHBF8qrErShYcbPS87pQFWSPijiZdxoPCGrjvGCnqHtgL5xEvqEt6D6yhZD2Ls5nkDtq3d4aKTUFLhuuXC6XLA"
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
