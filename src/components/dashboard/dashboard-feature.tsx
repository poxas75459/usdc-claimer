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
    "64ANSYyZeCSAe79hrzK6fFoNQmcX1FkmWW9Zk7B9k5MCP2NziPcDjZPawtfdCwdnmeeaNqLb7oLprqLcTjZd5s2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i944YKGqD1pLuhM12h4Y4HRWjn9QbFNjZUNcTu8aesNwGVcdYEJ5QBM8eGU1H8hVBv7JB6o4HaPmqN75zCZcUgL",
  "key1": "4BqwVQoKNwqzF97iv6mXwBdtFLi7G6hEz3X9VhbAe2VLbCgPccJyUWSC8rUZgF7v4MRmweyeUi6zjeNELwVgSaGd",
  "key2": "5Nv6AtMh5Aysfoh7CdQ9DtUEKvaDrLMPph8iQx8gvBnpb9CKGAk8SYLA8BkR1R8StKXcHhr64AH67eUamq9bKdaH",
  "key3": "fA3n6AGuiTviZibkX9dFzAxYdNrFaLWVEiGe3D7miU1bv6PBDgdwHRBnuxZSsSUmSXpq625LZMo4BPygXHcj5oV",
  "key4": "4viXf2Zj6XXoVwCXGf4MUyRNHogaiGoDNGd83TKdZPbsViM4EjBFiucUF1LjErDuevsQSrfVBBx1itNrj1KS3MaE",
  "key5": "3QFtCXS9nL4uZd6MEWea9oUVBc1xhVdBNxnLDycXh4XjpoEs4nEm4EpC9J6u6MAsoprHpvGgJ2mc2c75UW8msodv",
  "key6": "5i8hk8JiuQw5Wmgt7SC7Pe99gozLMyThr9e9auZ8uu8akBQrEMEjoFQSjThYbmTuMQnVcwBbe3v8F3PE3FME9x6r",
  "key7": "37bAiqhd6FZT6fm2U9LZayANeEzFUeuEf2dgEif1aGMfoEQPRLA2cBFoLjVg5R5yNCeiTsMdafiYvvtRjUdMGJXi",
  "key8": "pf9epfsaah7mpzBsKYHCJWujYF5KTaYGwpA9HNkxCjUmPnMFKAg22NdhABKHR8aXXk6vy32XJWheDoAH4Ef1Z7L",
  "key9": "2JMBVX8DPgN92kJ2P3Rn6kexXB1nEbbSnAZ8aXLZUTSgNwPaHjv5ykyKT2ZJHKxqPactbVsX6mhwJTmNfLnj75jK",
  "key10": "4Q6FntpwPuS7uS6b6utao4fBcFsKzbUwHksiMxpfLHYEWbPwgXNqMTnnvsp5VhSAFJW5yRsaqmiPBKmp1An3SopK",
  "key11": "5ciciV6W1aSs25AgrMCY452MgTGNY7QjfpQDjJJ899DbTbTaeSvoZvLuvRoLTvdrA696vkKfhSFakqMmqtETvS3V",
  "key12": "3YRZ6EUyZ9cwJdELYa3iN9EumMd5VGgFZyz688nu6kwShqEjKqULiRrfgvC2DjajNQXbnGYEBnzmECuxWWBg3J1K",
  "key13": "2q6Kvu2jmPQrN31mdTwAvKeFPQufEthJUSNQspUVqjM66GH8mpnR8L6FMgoC72EJqqDW8Xz88AtgqcM9Lss5iAci",
  "key14": "3q8XT4gew5JHLCYNTSThfhgAwU4YnKDwuUPbSD6QDySXHzTWha7mJTAqRLL4Wpv6oZvQPsFrR8AUbtVAiZTRvNxs",
  "key15": "4iuUikkRCj6E2FJygaFqBBbW8apRdmREd6pQ7kGCvDnKmJYLY77zhKPYHsamhmSKzEoZELPvVfusWTcJdfgWV9c9",
  "key16": "4Un1BaMq7gg8es3Ak22fYN8296FxxdBayTbneCNB1PabxfETEhHTSkj1QQDRYtNtUAaAU9x7YQ5jn978Q7iYtLiH",
  "key17": "48t8SAHyX73oP52KXiKQ3HdggMKCiWf3prPauGdcWAu5G4QFyNtiHbxZVTuSXoBDdDeM2tq14ZaKdFHBYTnEC8qG",
  "key18": "5Cp2ixRuDhrrCNWXF6zVahuArpoFLZzYtQXDkgGap9yqskUFvmkMX1QKzERJS3SJFzBwrN7Y8TzusCBwTh7EZzyK",
  "key19": "3c4wmHxnUqPy2gR1ec15bHMNS4a9kN7YjYs2JWqtHeHpnoq8vFc83k3i4G8qhBestCr4NuCeFmDkSQBGWWaXQpqE",
  "key20": "5VJUxXwhdspUEbuoXrSwLdEi9E4zZpSU5AE4YzC1BG3oGZB6P6fkWCQUGRZoQWCh47fvdr7UGpdVQVU18TBayQct",
  "key21": "48PxVrRib4iLpVfqMw2jZGuuRTrYnn84XpRnbnDyNLJf7aVMqJzPeK23CWkSm9R4pAzPVYLSeXgHitxSmFG6GAfF",
  "key22": "3DbwWUefwEHCCLpjGwG7fUDgYgVoDLwX7tr9uvi1jnBhbp9sKeAHGyGi6285Fn4SvKaDQ9g36vFBVwbZqXjthtLE",
  "key23": "3RTWaizMAjncxtWD9e2VA9BvkApy9sHfXkXK3feUTDFtmLcNmu7AxFCLyL1hhHmrcxK8sd9hsPtZtmahTEAS3Dku",
  "key24": "r4Ei91dvPvKV5etyRHE4VHTXepm9jUdpehKB3W6Yu5hbySiyeN1QdVntSdzADaqdnmawny5vg9NEMcn4WR7YgWD",
  "key25": "5XJD9g1xbCjrFkknYpfeb9pVZz87BxJ9VeY4Jzm3q97UqEZiuji75hJH1yCRMoqD2MG2iKSNQVYu56gpAkRQJrpc",
  "key26": "2rp8A2ezMqu888wHfvRkmNKh9diRvMYRKXJMvKgckTw4zRNK5Sq1ecDQKik5rsZTWtc1CKRmU38xEKizy5y1Z6cx",
  "key27": "2DBQnFW2BBXZDP4V1URv18XiMAUg1hNh29vWRAQ3mTjHk9ZnERUuQ4jDwg24xiNJhnA62Ej8gyZNHtAQ1smf1LHm",
  "key28": "2LF2DQZ1LdN6MgSbpQjsJSp6J5xkJGD6DdTzNg1QcWWjv4GvbSk96kufq4foybiQzdEVpwBwzNwCyKjsHLtJPnLF",
  "key29": "5a8LoTs8grZbeiGPN9vVBfsUHGiATm4WNrcJ2L42E6c4UPk5annY4sFFLcWWDfUF3UgFKQab6CLV7inth8mrSRv1",
  "key30": "5jvRxzbDehD2RZcqiCebLdkf88pMuz6MKkT7wMvwhnyrt3qtCifEU4C8fj8oRbGyoftxJNwB7fzMsgN82qhDBteR"
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
