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
    "4WsrkWfpiTLAxFe5qZEWoqG7fr4qZouYnfxNApdjfRZKkr2QjVKVFQfmes4NAVyWx5EuKhJ6Dk9D5THbQqPcn8PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1gyrYu6y6X35fzCBJTdwA4exJFLnoxAJi6T1jiAZH5oqvwbJapAQVkoVYKMdW3UCzcpv5VaEvujbVDbh3nesgR",
  "key1": "5xLcYVPxijRCenPkdyUwbPDKyFbDrKd56WNpzKmRmiH4ipqRuF6HD1M9Wxfhuy36cwKaJHgcXTpxcy5zJH8fT3XP",
  "key2": "22Rvg6wSr9WzG3mvk2rGjDBPqnHCSzaR6kc2FLBpNfdgh4xcXo4XkpKT4z1KHQSzTN79rXKQoBEHxribYHsrY29L",
  "key3": "5mAVatnabvP3Htb9bWb9ebKUZwKPxduQHTuvZNZwpxNARRGi91bh1wmiheysni6utHgcxJAwxh7n3ShnTnjj7exK",
  "key4": "26D4gzQTaCWGJs4WY6qdHE1TJecrxzD6N5GafiHLCmiqdmYXYgCizJVVtPRk5NqacDLmVbxMPQ84HwvHsTrVB2mE",
  "key5": "2AC1C3YzEpZKBs5hCE476dKasPVEmkNeyNnZBEqE54UNcUM94MfqBAStwzojwnERnG6WHmbwnBdnNf2b2SJdkD6X",
  "key6": "4PTD5UwNQYjwWpHUqcHNFwPJsXRFXojy2b7Z4B5orVpRYnj43LKP6s3GC1kg3enzTXeECNxDRm6GfquFB8mHrKs4",
  "key7": "32TkjvV56F56AdXdzMJTXCkBEo8ZmHUH7AGth5UE1CxJv2wRJeXn1wwvC7N2dKrqBFPVGRXo3NYVr6aL5dUvmKzq",
  "key8": "4rGtbx57FmecdfyE3CWK2bXubJFgyR1M9LiQUEv64wtFw9x9pCBik4uQotw5hnR2HDSRia4qWNaYW3VbRcqab3w4",
  "key9": "4tpitQmY4MHGV8KXpPNwNC36SQwjetoPS9PDUGyPXaG5Vyg9YK4vhD2gD3VFepJwdxPNPJhAnf9pUASyW2LcQLBy",
  "key10": "3kVx2gbQwnW7VHikJUWMtj9xWHVwWWoqjw3pGPCuLzxRWg2BA5DQriqWQdgs8AaTgjwHivPSHvmnDxmhVSmMsDau",
  "key11": "4jKUnGwtF5MwF7m1JvP1LgwTNUZyU8ndGCu3zZPmghTGZGdBJxAePhfrWT9RGxYzqjXjcheqiz4m1itb7KckXhzL",
  "key12": "24ZHNuNGt5UMJcTq9pUUdBrNqx4RoSy3hp6HupLsvQYJnuZf1ahSrFumvHdSPHvrHdrnur2VQzxxNdB2NvqVb2Db",
  "key13": "2Fttt1KsBWokUTWaAf6utmacgTuYFnZr7yUvpapwiLztB3MK8X6jqnzidPUXWB58iTM8RoyMuHnNvCp9DPBzexEd",
  "key14": "2h2T5gnUAKJ9e8Fg7Pp3Rd9FiCA83N8YbSubJKRfcvwjw8GNCB19yLRrkjCMfLLiLE8PBwpouspVtoLHXoQxbN2t",
  "key15": "5W6ct4ehngcbPvdUV4JUzoZHfF5BE5dDK1vsPQyiue6SF7Xa9jRb8APMcJjd42w2TtmV537oBZ3ouVtJjPYt35xe",
  "key16": "5rjHgCN4mCNjypZaik1guUCeDXa5RYxt8trUZbtrqRy45skmt2Cq2Kvet7fBxzfb9YeiUSyJk8XHPbQNjfmdj5jL",
  "key17": "4oFX67TkVRur61uJ9acHUUMmgpAChUecAJUpfMWtMicNCeoBW1dtawCiH4S8D9Xp2UZNMf9ocbDYrP7a1yikiCzq",
  "key18": "4iMh1icpzqdK44EczH7Haaw4uT8Ugmx33SJ4my9rTQerAR2dqweaX1Ppd88ewjJ2QCHwboTSnmjEFcjQbxiJ5zMz",
  "key19": "SPskAPU72rB4Yj4MKUZaHQK6eRMgxtnUjtpSFW8NRxwBotggF8BtpHDh9DJPvKzWB7KxrtJPrMXim9wL8Wg3MGe",
  "key20": "2NWogfvtE7zhAKCnk43Y4QJEKmZWAG5jpyjXnbeNHMwKsJikDa3npcBeTkhYDHMz18hx3CMogvkpFXctSZfYnwZe",
  "key21": "5ziZSN5gyedcyhRYN7wnJAz1229oJEacD94gSMv1o1MnmgQqbeuuM7FCQuvge1k5dn3VAHcR6mN9zZN2UfG9nQAZ",
  "key22": "4bYVxgWTXZfbvLC8A8jVV2YzhJx8MKdZXxxzbBdWDzKvNAchxingnJq44XNMaS5ZqrpovAQ4kdhDqnZQUh6TtAzG",
  "key23": "mrk1RQvd2sb1KfexCZZVnsbwBhANbpofXaz9ypy9QgqyGZm7CboYfi6VyRTjMLCZDmhqHgiDBWQtcitFz6KSzxS",
  "key24": "254Cx4nkDQiY8gPvGg3SjQ9GTFXYHmwWu968RgM8vFKNj8gEcjkqjzeRkXNCyKGPFv33ZVJGXrTrwBm2FLoMjU7r",
  "key25": "3oomEhkvcd7XgCQC4WPrKDQfuH4Fgdu5CSqt644fJkphydpD5dnmVuRScUcgaoSXNKDVwBsvjHjeAeNCDGEqr6LZ",
  "key26": "4uoDRcfBRY8LtyZ6vjRFrwA4EEjKQabBqWScJU9brQ6us7o4xwZm4XuEceAatQy9KcdEA4s62QNmMdbt9ZJ3CtVG",
  "key27": "2HpmKGh2VWq95vVVmVPUYPAxCP7ySG8ZhbreYtP7WnoKxkQtXKgkxxB5t5DZg37GvoZHMrQ1ovJhTuyALmMQCLSg",
  "key28": "4UhBM8NYdcn9VchhgUJhXrG1vHVqZxoFeckZyBBY1ShcF6k3DSR18KT4qfEvQY3uGnhH51ZgtUgpfNaBCtL6MSin",
  "key29": "44G8oE6rXYWVSBfk7FoNaR5YmVuUGrv3NekSs1aXFvfDunE42UCAFoGsUU7QCFsMufQe28oY9Xs3vgmXZHExHngo",
  "key30": "HNrbTwvRWWvAqEj583AQMV3CvjQ5gcex97vHEutB1w5SjLNWADcm4xXzr5B5QVany8brx8kP3YD1nTUPwkmc7xM",
  "key31": "KEhovAnMXKSGDgeqU89j1dnsCVZ9iFYmUuUpyb4xkJu9xFv4boTKSBdDc8ZbyaR8r8ZFAdFufvYCmSHzDMMvhXr",
  "key32": "2WJG5ieonT8XEw5u675iYkZyk2SWoER218FgavWfURJW6i9LdupEFewj4diWWPNnoDUPgwcZL3qzMWXtA8VLar9o",
  "key33": "Eb4gj2ceWQVao6hx8oybsYDMqyWoSRgRwyQNE4GFkPUUCbK9nicMGW8d7a5E76Q3Ykb6HLaVuDHCCThGvCY2u5K",
  "key34": "5KHovHPU9TQCpobKBYu9rQ3s8MJ66Ls8aqcnc7u6vBnMUoTkUxPqxpiSjNSn4cgzmZaDy1hK12jQGdhReRPQygNs",
  "key35": "36YCkcse2vDW1eciQkvXxbfak6DazSuFWSR6YgKE35EFu2Vmsso2i8jmNEvKFU1hKgFnS3nM8E6QWpoxz4GRCHtA",
  "key36": "5M4dWiJ8me8Q21Vf15dFUx9VMqm2fVXkisCdYZXtLxMjL5aToWbEQnK9AxTnSVjJFZgfcp7B19BYekXDHpdNgGG7",
  "key37": "xGorNBL15wvpoLrDLpKXu4XjZf7PHK63M7h8eUCWwjWgeWa5fmG4WPVSjACQQGxLgTBjdZPdvdkDVoBP3vqVwKK",
  "key38": "2G9KstNh8sujgjYWKRXyPf6DLgooho8adSneQqt3hoYEjaEnazkzJBop9Ei5HbvVZbSAobiCqc2kKy5tesfZxACU",
  "key39": "jebR2aEvRtAZCmwieaetVop8XTQodJBzLsRxMFSiZzy4stDBsSyHrsoe1oBh9wGDZC5qgAN665PXsEuNVwqgC6q"
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
