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
    "2fwh1cneFwpXbobDbcCN58jGPhLwxnezhGGgU5B6oxhGCo4KHA2QCAkUGcdVbqRJXH6vu3HGdRYaSHpmatbo4Kjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675grRTjzhugbWePXh97dFnDAmS5Lf6xvU6QVzq1B4mabSdb2DGYXDMMjtRFevPQz9kexBYhyZ3DTZA4et9FG6Gy",
  "key1": "7Wfsd1mXH2sD2U2ivbd35GpwtwMDqynPjiWyMsm6fP4XgMWB117JEEb7pYz8DC8cCdfdPAaetpvHFCNEg8ZhtZa",
  "key2": "4XagHVxujCGbXavw2SuF5TSyKffym74dWniJoNBxUNSUJzG1Zdvssg3yNBQKKedPP7YvjHEs19YuVW8oq9RLs5dw",
  "key3": "5FvbpWfZvKiyruvf2mTA1eoPC7mjEFvxPo9HFfwz6iTKR9jN18m6fGKfdnQLaHABHynmMNq9Vv8wSrkjMPPZE3Ve",
  "key4": "4NcZN8LvesEyAjab3FsWoEjgZxsDmctwAFX3K1X33grYfW4zz7CgiPrhgbq2WNZnowXgFKJCAkskStJf78ZmhaxQ",
  "key5": "GUFxQwmqfMA4d2z1Ugu3Jgx3U97V8YmGE1CNuxcX4r5gCCbMg5LmCj9bB5Aa5u4cqPHFgpFNqxmePKL7Koq7cL5",
  "key6": "66DPwR1x45xkahzBpzNwr7ezzm66uXJE2Smx2cbHxBHNSEgDFvhgkGSB3fEJBd5k55urmb2qTPfmzbkuGcqN7YL6",
  "key7": "4F5hwszGeQ7vhqcqnSvuDbpzzbPMDAZ6N5eihEy9Hn21quzsmZTJfPoAssArE9D1EgBX3y1feoz84yi2xg1rWEk",
  "key8": "34TRafUUan33Q3fcWaWFx5t37CokwJ2HNvwXjhRJ1V3HyQSTibJLMRJ2hDqBq5859CkZMS8Xv8LCvVgPiovJDeJE",
  "key9": "3Abx3W1HYQJnsfpaPmfFFbjwkye3STKf5nFs32Mf6Z1a7DZJ2oqJNFgPgzq7d5VemGacjF2pLn4HDampN6VNQQzf",
  "key10": "5ahUXMZniDvg6cVkS1hP1shGVYfGrSkJQnS3aQ5GQsfHvWsFoUuxASpzsxfFRm4MfvQFfMNrmYTTHXrAFY8JDBBu",
  "key11": "5U6XBbkvXRjmdfN6zw97qahUwgGEhVKftK7t5pwqD6ZjE4aLCKF5qZaTqqKyBrUdrLeFfiNizk2Pzj4Q2ofqxzfd",
  "key12": "5FmihSEztzqZsRYTpcuzG5YxykYw1wh3uQZ6yDWgxp9WVex4SdKKqRK9qqBRNGLuaiZCJdUT1bdRczmQGQXQR2RT",
  "key13": "3zopv1cYdbV6dH1i2MYY53g8U4cVtBa4w1JbGfs9oqaqXpTz4gwkgDdNBe7YyNWMQtJ67EEh9zS77Hf3nFsdRoxV",
  "key14": "298eh6LVHtMeUu2nLubwTJwGb1nyZ5R3JvbAep2AP2CFems3hjRXoxFZLszf7D5t9CrtCVPogiRdqznE74Q8QG4y",
  "key15": "3mvUv1hAVngnui5qskbzjgAXDrLuoppwwjhxrsfrW3sEusFpy5hEZCNvqd6UERiBxBg2McvHFtUubKQyCxJhEAwm",
  "key16": "huXwoERo9PfNEhvhMaqhGh2e49xfXNwQx6mNQ5ttPjdgsAJ3qrHq9md1KeTiu7c7jyzc4zCGKM1vh97P7yd4gFi",
  "key17": "39fmyDar2zqVMXvkMvH5uJz2K3j2JYawEth6QKzbNwaxaKsHyogEdd1qtWsAzWkrpi4zPbSj1HhhQDWUDoVc1XkE",
  "key18": "3zfz36AY8JKfJ8Jt7sd2MR1rr1N5DUa6vNsyqRpCcEDHM96SXKJYh719cW7r2xqiNL9qzxWfsk9CJXC9KbXQx4YN",
  "key19": "xBp2NVd7tKtBoM9GYyr76LY8Ch2UEtFv1LoPSXriMBgrV835ZkFQc2VRNCeZJP94NLKkTeEes5mYHFCMJAtotqg",
  "key20": "2ZJoTRTV1eoXYXFShHhXt8tjMQL8ZsmhrMSWySsAJ8H34gL5Q15vHfggBw8b3bF8HD3gwuMN3aEX99uZ4rguPShk",
  "key21": "DuxqCY88a8KUbikxcCrMZD6qUiyxEb6wFJzHLKMshHHq8DrPggBtFKPFZAiSexbZntwVLgNRUSnaaMMdxKFFXW2",
  "key22": "2rw5TmpriZUkZxFFGN6Y83qeRQGpqMZ5JdAYnBCq4SykRgeEXKupqAcUUCvTbsx3PhhSQegCCddwW7bWrrZN4RNn",
  "key23": "NJqptiDxhBQhe4Kbw48JdqjyouYNiTMBPDL9wUfHrPKRbiH979Bt2Q4aYT3qbWRX7ofrzYcoA1qpw2MCZWcVoFq",
  "key24": "28Ahwwb9c83dVafKVQHivKifFhNgw7746iQLXLvbMy1jU7DE2J8JqarR3DbjWkgRHgGKWRcNSeprZ1Esir52J5sk",
  "key25": "21opQWaz8LNteLDpTMkzJMz3p3Eve4xtCLgCxJcLPZ12asM2AvueoaAh3nNGQ6CooKBTvS2h3w3fZkQxQ11gsrL2",
  "key26": "3HJnuqaiPcWmnPiUjwewZDBwbgpTPFfHRCNviYt9t34TyFEmmt6p8Hwjc9DhyEZQVbJZDBuPnP6s7sa6vf4Pjvwi",
  "key27": "vjtyBfA7cjNNECbsRPJX6sck3dAHYBzdLiWveW9FAiwfocGhTzWbgRZr1KbiSarEQJH1EcEe5rv7KSP6j6YAUwB",
  "key28": "4nRAG3WJDFCtj7eScWe5L99rCE9f3atfHXqdAdqWiRr5vbw63HrLnusagaSUzvqp8wbQsWVgDz6YGp2cqDTnmbAh",
  "key29": "4nAhVJ8syC18kEDmpVDEmr2gfmtAdDS6fqYkkxuXVoLM5oNUsbspjJcGTdRB84w3HsHcmrCvydm4bmYsL4fzPY5F",
  "key30": "aEiQ3NgYH6m73t9qu4kmigB1xgaky8KvzrDtnekBKcVgYUJUiD75oHygkLJJu3s1qUr9PMjV5Jo5WKnsV8HRSBH",
  "key31": "yTcvfo6cVJPQwPYNLQdPvjXiEr94niC97a4dp1UpkRoXFCYrHuv3ouhcmn4rAjhK2KAPC5JQNbDAo11dupAwMru"
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
