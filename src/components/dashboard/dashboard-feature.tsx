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
    "5wyeH7gLwksapLCHk7hpRSusRrH1k44nsdu5dJ251u1p5NbtDjfZPDhvzHqKDgKp3pFDsQG9V5j3daY4roe1RuuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQFbXgP3mdcm2TzoXf52GXtyZqMtkgt94Zu7K7Jt2CJQr7hyeZ1nF5Kv38CTuwgUVTPg8FmPh7sL2d9k8zckRgt",
  "key1": "65K8L1RQDjz7QdABJH6fV7wJzhK2MPqNbrLWP45ubaKTGp5wmtApvECz7mjbTnPxg5Zd5DtUsyEvZY8ogyQZ4VTL",
  "key2": "4QW7dMQ5biBACnrgz3Ymr3hp1CtKbU2fsSEX74JgfPVpykj9g98KQF3jn24RGzmDRXecgktAmnDCuwkDeUMVxAc8",
  "key3": "zPtp8uCoaYWhYHJmi1yEcLfDWZ19tPa1258cp7fQycrcj2s7aTAvyVfaEj6Agm7b9TqAeSvxzuQYLiFpvzqLttm",
  "key4": "yRKV18aWPgnL3NqmpmgS8H6RRk1e1kpmz7EDS2a96TLCfP8HPUMQTtJKeXif4jnjQq2Rq3JQkBR6WMhstuNCXfT",
  "key5": "3NcyY1dyT2rzNPTDKZi7E7VBR9RS61P57GQdTkgfN8VrkryJ1krMaKgLDR63U8odxueiRDvMNiUgb3JZgVcs7Fj4",
  "key6": "2AaG89Vq9VsPZ4Jj8NP7vQx11CwWQyHT6HXkF1eyWwpyDKsWUGfe44iXAFd4BAkRUYpAiLmhyNqvBc4yYGCHy57u",
  "key7": "3BAUxTE4PDvikgeagnJLzS9bLAou8jcRQTe5k84V7U78T32XWjc2Pi2BwtQMXrLFwqSFRDjkK8mx6cAqWcTKW2AK",
  "key8": "wTcfJKLS4ozUtPD9FFNKGe4KvWTqmk8oqJzDpGKJthjXUTUPXpFZFW2N4yUrBoiZA8uMmV7mMFAMxGutWsR56Jm",
  "key9": "4nqVP69Y6CSSqsTHM58dTau9rTutfXr2F6zNbhnKy3HyfbvgNPqBq811jnyko3aNivVddXPfVU61LyUY4dS1xBra",
  "key10": "5AoHJ8d23TZ3rb4gZgxVVuJj6TuMQy4feKyXfFKSXW9hqpGuhMbxt9YoRhrNZTcfNcounmDZZxCxbN4scXJRhxwP",
  "key11": "mi89jyjUnLkZhQorYD1DrzMRZzpXj8EtZ9TKGJ6CTrFVPSS8HZZRggJ5WfzCzdNAnWsawThUuje3P1MWGHD1WKy",
  "key12": "65ZqswFQqkcL1UWDY2bAj3vFTAQWT5en3Y2tDDnp5x4dm2Kh5q71RSgwNg4A43PEJY3nU4PRe3JAX8wn1WK6CmXG",
  "key13": "46RWzYrw84dEM41yjp6bNjXVYbfqSqcvTHxkjmNcewYsynSRGzprtBDNjXKZhQKMPjHWdCTzQFJUshLVmZxqciUM",
  "key14": "3hGEh9koKy1UVF29GerMTPU7g8vppAZ1NFvGkTExzgpNbwVJsttC5ujYzsvBWxFMZuq9AofijCVGRp1guUrcpxPR",
  "key15": "61rqLAGtzMp25FkTmVPm4KCyeVW31ktz9hWvkYh7nZ5m19jUjdzmq3UeHqDa6Fq6dtZp7u5m7j4QQHQxR4VpaGxk",
  "key16": "4vTpKYZsnaLHfeTb3Gni26SisHaiZdxzc5CDciVExhdZpf53pu2YD7Awm7KqD7f3ABJDpykHQbBU3CBVhHc1PXN3",
  "key17": "3ygdEzgQEN7cZE44tkbVmsA1FXTUR8igkXatW2iMVg31FMmubECs1CQKXqtSjTTH4VR1RTsFSRfzpUGT54phZizz",
  "key18": "2M53oM342t7Tv8jULwHAsSjtBcaG8J7Y88kAJumcCzZr1iTBVer22fzFn3gkzqxe7teXqRn3Zo8XbpCYW8dD9bQ4",
  "key19": "26sZkK4yGjXAk9xWSNQSra519CuquEw74LvgJhZAGYPMGk9Ah3NKFP15x9sSmvKvRurPEWhj4BNc1s4v512TXcDV",
  "key20": "61GwqeL2b9TDzoxEYQypEwQuK9CMLqRXH8zMezCeUpYnjUtoYoPYpm8ZYGj6f1UyqiWt2SZtw3d79qRnQg4mrip7",
  "key21": "4BBP1uaHAX4jCabYXLGizkVEgBxyDgNdNjLx9SozcEUPRo481x6imt6NdHgEg98KR8T5d4bNwsZFdCiGip9PKJth",
  "key22": "2DPSUDZFhnAyNsmj7b2T3i8S5qGdsEGv8Mcy1Fbh7nYZwtX6ZMENpsBBPbd7g3AwrLWfJuSPKWRD93jgR6EHTHM8",
  "key23": "4iTHzxRpXkPYky2oZ748c6p39GVbphNoe7Y6DL4CpZa12joFgDuXpMz5VgHtPXCABc87NsHQjB48QK3p7jKoj9gU",
  "key24": "45MyL8QX64XneYcHYsFrLWz5reo7LkGBFMyG4vYUtB5iauebNvXajVYXC927NUsrttUNmDRThPpMMdtS4RpkK99y",
  "key25": "5YLhJ1ee1rR3oEbnFNrDPXGibspyckuTeonpQ6SsSQTN3hdqkD2eii4MKzem8ZLpGKnQTRp2RCZkim3wom2UR9tp",
  "key26": "39uf9xC7pShBbxvErvPkDBJSafRep9Yqh54hes9VvnW6YXkKUiyJUuVzFNhbQQhKRwN5AstqBa1rx8Y3ftZLxtEB",
  "key27": "r4xTAFM2iDsPwwiaqgbaTj9yvCnufdV6nevmyttNpgMLMepQEJbAA5orBBauWDhJdRAjtETj6UR1shZmXYzY6K1",
  "key28": "4crsZ1rDPe2juwHV4gu5TafnVwwVTXbeNn2pH1VyvJEpfoXsmUmFJ7A1hz6a4EJKPpN7ZCr9V7QGLoyaHduYHFfX",
  "key29": "HSJSBz9vUPRztmahsnJFsXa9iDhfohqyDV8Bj8EG1BG7hQJysiR1KTdg83zCfmBvn5Q5DfdPYiUHoFG1vkf25hh",
  "key30": "3bvwQttty23DXeGg8gjEdQMf6YxgD7CYHxodUc15iySaZpYnjsgPWPcYCh3PXQCULgftkDaN3c7p62HWfKjCFXRH",
  "key31": "5HeCLeKt4zUaMdCaeg4BnTjJFSBptto1aA3PZE8MNCUWQt3hsUKBtGAq4h4yYFboM44mFjix3hk8vnejJFT8VTEy",
  "key32": "3rKeSgXZGKYtj51XFWeDySKeLE9qVDAvsdaWW8XgdDtt3G47hFTzJE73pFmDRuqAFGLd8FiXUQiCX573Pqz2nNqi",
  "key33": "3GBr5YPEVSojHHBPDBebL1hM2cnW6c72jfxJxYiyTUuahiUX14LFSgLZCp3NuYjsjv3MBLLNMeUC8B1ArnyXWPDq",
  "key34": "3jcWFmsRhCSjzGsbgDjuXoBJ27K1Ko3w8TFnWbmKaAAKaBDJCz1NBWc1ZeAQfVQseoVFfr9nDCZVW78EoPiupewn",
  "key35": "2SQWLb5EC6kotAPi1nNhfq3dYuixADo3oRGUuxdHsMKKWW7T1f1GsS7XM4cFmqDsX5h55ouwqLVtr4ruTdN5cyeN",
  "key36": "4KuJVPJS5qiY9MN59eHfzFjAvtVszosEjZQaYbBwTstaWF7NGWBSA68LR1wbFkC99GB8zXiXsWbHN3ztkS8sdevf",
  "key37": "2yWffmW134htJgPGW7KZd38NTQwF27XCWUQFBLbeJ2aHoFVEu5jDbdy2ef2LkYz3Nfe2DiyqvvbCX6Atm9ie2deq"
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
