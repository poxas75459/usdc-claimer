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
    "5rKMva9owHCUdnoAUSmGmHSXYfjnWGDb5iWarMcFBRP8iFM4cB8gYSvS9SrFH93yGWSk9peXkSE2gtw1fSHnM7Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2XCUBBgFbYJK1aZQd8ST7xCktdUpyCa1Gkr9xkik8fFMtwhb25HXBiAuXn6K5wnKBBmvzaAj9eioQNPf7XB24o",
  "key1": "3f3bbCorgs4RaG9fCFdXLm1y226AugshzKHhx6hdsuWDod15dLXBuMic9dphfZyCM5m8BRGdQh5852g8XZxrAKTX",
  "key2": "5vWcw9DCbSQZVzuzG8FXkGmQqteEdGeepLinEgTQGzDX5nzTGYMgakvBcwPc1R8xaasnHYV5oGPAXfV6PwbD4bFJ",
  "key3": "SByHSXHbTbHjQiACYLVzFSZUpoUyDomqwWqzu8qjSmpy5vxtj3ve6HVu8Ddd7qEda2uen4GNEoVoKJgonQhPuM2",
  "key4": "48CYH7KBFzNKaMaewj8NSfdEo9wEB3NG1e6Doz5LqQsUXXs81nUr4H73wm4PdkiUwjUFsVVzRL4EgVz52DUSaFXb",
  "key5": "52jMuqHZKN9yeQJxr5HkFdrYuoB11GdNCswA1yahN8TtNC1o3Q4urDsWhtzgS4bnWHynv6emKTey42HVJziaz2TW",
  "key6": "5SH4GVuhHNkjwHVdStvapPHiYhm8crr71RcZB4Ycd2iApMkSj5WfvL11xgV1UHnJFbLQJmcHCuZrTRQMdmnvaqbY",
  "key7": "2tftsPQkx9XUhX9NRkGox5guPn3DFNcWUmF26ZTLbaim4xJzTGLAt4cWnVd744ocRGf7T434YX7s5PT7cRacT1Kt",
  "key8": "2QpMD9Vhde24bG7oSuQfDoRMEUonra8yNGPhao8CdTuJeLpSKb9br6KVS5ehoDHkHGzCL5XvDFd4fVfa1Rvn2LFL",
  "key9": "9wbdVVsLTCjTtdgKLDsv9enQJ57P7Qmdxn8Bxv3apgSQf4Ym3Pb2PLRTPaiPaDwn3Tfe7kxh3wda3Wpx7Dfr9aY",
  "key10": "5ZiMwvEPoVq2HADqMrxa42dM6M9Y18aRsoipctNLvo3dKextLd9pzSP86N3isrj88AVhHhgpZzuZEXKgMsYa8Hps",
  "key11": "5o8k8WswzhwrZ5SwTzCR9xi5jHAwr8N3GNwaChycdJFMsWGpVoqX7d7e1FZu7yjYTinb9un6nRv8voqAc1QqQ3kX",
  "key12": "2agFMNCsdCe8pCjqSpgU9aUzpMtwCJTudiLNn7sL3vC7kkGJgoK7eXGNZbzWRDLrub5xawBiLJsRe6zMP684Q4MF",
  "key13": "31n4SNkz7ecg4fKPhanS5jw2zUWA2bbgoQQpHekqXCtvpeNkHQTZox5LYx5PZx3rM3Dqw9gm3t4TRcDrm9mErCKp",
  "key14": "38qAHB2rnm49DAogDFyvXqm1jbU4kWMVYekGo6XWfRWgu1oMp5w5rmNAkn2dcE9BCMDaEotaV8JkCM6ReNEo9CJN",
  "key15": "K7sBzcsZLDvoWYojAv8Smz8mXNYNiN9UEHChB8s2n76ZnSfHLtivQWK4tULgqEbHLgmV3cKR9nUpdLSs9ANKKV8",
  "key16": "3o7evpkab43wemskoWZH2T3oWHBECTSgSdH3WTqLWNMkYdRmqWjzsQqzT43QnU8mCSrxU8EETRxeh8FCr13VnM1q",
  "key17": "4fGES8sLNz9BinQLFNNT575ZuCuQFCyN87gxBzR3wXQUQfDkfCtFsrBvRh93SitPfiw5G6PrcEpvoYtoihP46FY1",
  "key18": "58Wne4uiwmQumXMLbB1gzN2b61nBx7KQFyv7LzLcDwjok36N1ZBA1ggN7Pxnrg5z18GELUWnCdjyPcgoeq72H1Uo",
  "key19": "2giKhrNsJaSzhYVZEBkuEAgPKSHHvpWTMp44JN2Sry5xp1hkewm7TywevSPMu3BSLfjDm14wQRXTfBT9L6hpoRo7",
  "key20": "18adbwacHPY1hWcsHjQq5WyNew4RZ2ivoyCUhg2GoUgTymtRVBGfvQSgJMbDJgdLWTMxExgLNZUZE7NzbVEjBjJ",
  "key21": "36qELCaDm2j4rdAE8Buy7UN8TmgjxSSHFc6yiw36syQrwtLNMSUU5PZPeQeemtDAWZSEJZr7Y55NFPHMw3KBjzri",
  "key22": "2J5yLqh66Kxbev3UkGw6A2s29ik7u2DkBhKjLufSd8KmYZe7kerkDPgvBfRUjxUQnDwoJpxbsZfoa2MNF9uR1enV",
  "key23": "4SSAV3CvHSenmsHAQSsH1r9mFYUhn5Fbsbg8KruiH6wfjkroA3VdR6byiRTMgSq3w4ZcsmESxHa3x8taQ1Ef6KjM",
  "key24": "5XVJsXb559G8R5VoFB68R2TxN9PGsycwTkthKxTSokTvGgaUXNS3mybhmHDtN4EBV4dPk7SR3141yFjQvBvQdeib",
  "key25": "3Wp6dgFeNSCNeZMjykgm7x3NhPXkzYhDfmZNzSSfc5dwopo4on67sXdQacwoRMCViqi7sUdGvomDpRDJmPnSqsdb",
  "key26": "3tcatp2vr6vUoStmXTf3sbXuQxZR9e3hLzw62rHJuGYuznrzm3pDronX2263ARENTMwz4GLA42vfEaYbRYeBNVHn",
  "key27": "2G5G9rerkRhjsNXqW52bmQGwSXcfmYd6q1GwyEwatUsaHoZgc9WHmhV2XYvtWENxA2Gs5Dyas8tv4bbCPXv6GRAs",
  "key28": "8M8WHcpF5S6SM7qm11DKrLLcA3N2dF9o4fvJGnBgisCjPC411YNt5rLhhvVPiw6p2BHgKQ6ZnXJKxg9p4Ec5unB",
  "key29": "3wsXZT1YTqSvD4wKZzWyP6kt7T9XmJz8igm8NFD6hubenA5WsdScuuXxudXiNDoFwsUDzuZTvr9W6eoAjMtzyLAY",
  "key30": "49zM77J8otn9grcgXK4jQaBMfoTQNmUhxWt7K165Bm2oV8L19Muoq7gGkbyVsbMTcdZ2HDkYFTxr4a4Wo8SVZXE3",
  "key31": "4pcRUrnnyW9XjFM7JknkNoBckDdJfsnqMTh6SFuKp59K7bepVrapoTxMimnyW4YnHNX5NVCNUQGzqVSbwyWJzjnL",
  "key32": "2Gczrg1J2g3XEwP6rS7YuRX8rsDyHusepuxoynMvcA1QTnwQE3CMNNapbhrPDcdWZcNbChQMz3bXjbN1yfXzj5A7",
  "key33": "4v1GKuymXacUKz7zktYfu2WTbg9bjatf9LUFf2e7Hmhqx1w2vC6xR23BkbCpYStHfaSsEEj9cvbB3mJoXYR7yZBJ",
  "key34": "3TTwwRyd9bLe5CJvh3iijuETQaFsMaDajFb7A17U2a5u75XpSJGyyeny7uHT6b4waBk6rdwaytzoTvVm9XeEMEkm",
  "key35": "2vZGU2rUUjmU9dep7LofpuCe1NVm66NL3ANzNm5yhYd54wHWwMS6csGCHb13DQkM1mcoMF61PnUE54Xjt9DoWt3w",
  "key36": "EmDorvF5kG6S5YZQUQwNNS3engcNhneRnRdqFwpbWGoXEEM6CdtPW1mCKvWrbvoUBJDuQ8ssgRiVWJY4B5wCRYt"
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
