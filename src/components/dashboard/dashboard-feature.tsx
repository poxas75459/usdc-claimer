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
    "4XzqdMdttsZPcaJzhJqZpByc8CGMtYaav2M5DnKUsqU5QfACdWEJ8nm4qo772hinC7HEVeVsURRibhNZ3qH4jQNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NA5XGhCvQVh8aWd5Vw2xY8k1aYZpdAYoE3hpKyDq27VyVuQsFNeGCLuQFX6L8nS1bCVbkA1zSBQKDWULCcZwxYJ",
  "key1": "563tt7oXdWutFicTH8q3mFr4wM47zoATwuvq5hGqJTaufNrQzxGsC3TDzBvJ1fkzzqxqvsnJLioenFTxUQAwuYtZ",
  "key2": "3ypzXqkK8B5uocyaTmJ1BAofz8nKHyJxajuDDq1eHfxQiu1pmEDLZzvsYSNkt3wiP8HHCaBqZVnMc7n6tBjVtQDN",
  "key3": "RhaawrYdUwtj3JMwmcf6qCeRkiNhagfrFScbpBEKnvkT9af7FoT6zkGGyaDNbDzaq7qJCtwQMLcLrTo4mo5UFwK",
  "key4": "21JzH3LdVxg9BqroQp8ztb5TSuPcvWwZiUg8jnVnSKgay3qovzxnSSDMCDzWQKyQFaTNbQTx2B4MwcbeR4ZPyi1J",
  "key5": "3knGFacoJaRDrP58s5UaaoapwS78t7ZpqctLJk4YX1akxtNArZz2aQYjYmTK1AB8ME8ExKBQjZkfNxqe2Mkrstth",
  "key6": "4LD419ZPLFhMH5jEcfCSSTTTAUUsdw4yvTbqBvZDjc8EHNZnLDHp2kNhDWTxTPxTE8bnsPNyo69285EcQnYxfgo6",
  "key7": "NhX6Lx1y23zJdXQYoxy8eAbUEBDgz4PF6PYYxPxytVf2BQ6iX63nHK3RP4qR9eYTQwnwv5NHaPuDa92xRkXTDWf",
  "key8": "4C1mSesG6x7kvRqfmYCXpSUvT8fETPQXEA2RuZNyVPZzUMzns4DH1cZSHxfcVeQJpuehgNcuAJANDxbBqquXykrL",
  "key9": "VW8q3fua3rifgAnpZvLi8mshGFRx66hNQNiXB3QErAXxGZCz1Ng4gCv3wJrPmR45kNeg7RyWw63Gp7kUAME3dtr",
  "key10": "4n1dtPyPBBmNSX4nQJ9LPjFPn9ynocpDEnKDqiKzqWy5n4opnmZuAjY6JAMtFcAb65MsMgDAqs9bJRorfNVM7Sk8",
  "key11": "2vzhnKE7K8Y3hkfvDxC9ya38rdWhMFuhd2qyDzX8J4i5hUJRMm7jxawwmrJw33ZzB7niYvUaQ3Hj75udcXtM7hNH",
  "key12": "qmRQFcj3YMh6Ns48f3nJbrLwQviUdajZuZxhaQrqrmbkNNqrZxjP85kVPCcB2N9rWTKrkdaowF2Svw2ztNS4Bgr",
  "key13": "3bEEto91gJDLKPU9J6S7LX6HyUrLuFSqbkF8tKR26UQESvxPV7PqUEaiQeJ69vHn3mWfJDfB4fnkMihvLLkFs4KA",
  "key14": "K5VxZqLbpwM9ZWaCJbKbd3WE7wFgmrFHXM61dvj79u9Gt7LSiGsfYAkaT4cCBzLAg4mCF5tTrdMhTrSDRb32v2N",
  "key15": "64S9yseEqLtC44LGPQooZk5Z3zw1aBbWfD4nkGbARpFcvsXVJXVcQhRwPt1PcugCN18nrzyRDuK7PtrDQPpYTkft",
  "key16": "jMGDhrMjbYNSm4qbKUfKQZPhKvZbPW3PGH6ESDrKTnHqeVQTAFPbNfkb6EHHiSjdvUu9NZHDJDHEHDDg15JmeDW",
  "key17": "3GNHMtcL3J5xTWnZKSkBTQ3ptLzY4WzRPnHjEjQUCncj72TV7egRHdvQpVjiwzdQXZ12oh8rTKyQJBVMhmxJ18wP",
  "key18": "25pQcFKooPJt6HEKFxkyXcDrbBnAXUwpnWujjdcrjSejv6jcoV3KCcE2nR3Uvcpj2qep3bYaGZDnjosp1YvGx12J",
  "key19": "4mttdQvMiaD6JPFGYddMmuY6oY7FmXC4ScByrtLg3u7YnvPmZZhJz5m1YkdNgYXcgRyzUwsnQYqNE8ByR9GNTF88",
  "key20": "5HumJF6uPkCRXroSYta2yBf5DUezmCqZ49vbgTM1WdCf4H1ry3ujM2NcyRSeyeszSsvqXPFmGffK52eiEFmrpPAv",
  "key21": "3WRBe11Mej4ZNSweBTrkD8HAnPcsj9eSJn4cKoozvxXyTV6WBUggdP8MxDutvH7qbDBUpmn6jreHrj2VaqKFHL3L",
  "key22": "3EQ4RxvQV7oCGxGbQZEpCbkrDWfvCp6W7GkZ3Cms7GWHANhxjqqLUzuac2CJVbdtJQomEAAtzBydYvb8EKYkMWCW",
  "key23": "3uRYE2xPwmYvD4GWTmEs7uCz9fbHQ6mTd6gUUWGFtv7Sm9eqh1Hqt8mbjjiABoMFZ9d9aXwJK3Hb58uyphiceEbu",
  "key24": "4g14zwznnE6G23eQLccvh2eG9FKcqCSmUR8SMqKrS6vCYxSVGxH3jL6hbRXeCPNXhhp38HGn7YbEpKacJs7RuU5R",
  "key25": "3mF11ZMF8N5UMnSeZb9oec9vKBoUCJTJpKbqyVfsjPGVnxX3Cgov48LZWbXeM75jLBUmVHQhGLYDPgD7nd8Mkb3t",
  "key26": "oQaPAdrGdxHrnhibJfHNdiBaeZuabUihi692nAjBTboog3r5uu8u5nbbh9sxrdbkrYiYhUnPL28tm8KUeamRyba",
  "key27": "2PveD4QLjjstr5nmvNsRYHYoQKCBhSq6do4CvvRwf5mLK5HXLaNtpCw6eMiWAouBtZsGDgikUCR9PwKWM6E7zbLj",
  "key28": "5LNqcHD5xfku344kiodonsSeSRsv6XufhMx81SiK6yvV7oDK9eKv2eHsZwGwGDi2u2zC5DbqfpQzoJ9JbFjMyKhH",
  "key29": "FLVkiD7BRZZp626i5yU2TNdPXApoTfgYiTDG7q9x78J2Czb9xXhq5mutyNw553jw8awwsTrKFRJYxaVQf6ZTj1n",
  "key30": "2a8LA743yM8vehqevFWuHvNK2fGqemMaRVejpEnDLuQB8yqpPf9Hrg7neAwqzeXADkw5U9eCBG1dyX4XaitDmQK1",
  "key31": "4qbkTvXQNnCzZnRvbfynqEkunyRuNAo4VK4pSaZrKpgwM836XiVZjLB2iJoZY1FBTtLrGXjMGh79qnGc8YtzakYk",
  "key32": "3zGdwFtYUho1oBwRKFnaypmBZEbjf1irKsk7XkLReYxp4tKvkWTe84QGgY9g2zRJE7t3QsrbFNDSN9XS82iEKvwA",
  "key33": "2qJQV689sDprizWyCMLMvZ7fwfcgsTfx1WFWJjfuM5UuKvVrVcrYbyuG5SXi1jFC48F39gfxN6hJham8G2s1rq2w",
  "key34": "2MxByHpwy9FA7rmGnnBGXNvhh9bLQ8jDKCwqJbCzETTcpCRjCMaQsS65SsgLGYwyssMQo4omQFGuVZhiVYJigaZQ",
  "key35": "3M51Wdxt1pSyFDvzyZdMKDgjQbySGfTUFw4wmodH18LbVEQQPoFpQN6WV8DPR8Nah4LfPyStQLfuYL2QNq29vEAK",
  "key36": "5zJFetZQUQahb7YPwjfgsSUPTmpsVZmuaY6G8xLnL4xp8EAjD1RYzVXJTS9Y2MCufy6TgoGnXyXMucnC7q8qd2sb",
  "key37": "3YLDDv4JjdJn7Nz64oe2aMXFngsiXxiWrBaprYVQVr4PM6nGR1W4wsk49sCPf5kww7ZUiCQv5jvoYdiEQa6JGtzd",
  "key38": "2mkFQk3HxjFQEvHuJ1avrHBeqPwPkFRQ6v6PE6dqyvG2Qxn43h84nrYjXRmgANDkDTDrYS63Zvvm7E4Dp8AYY9fF"
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
