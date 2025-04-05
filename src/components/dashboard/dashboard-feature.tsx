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
    "4ySbisa6fsN8qntzokBxRoMW1aRrnHF2r4q5jsswSV776LYpY9hQ7Zef7JLQpzkCmyywReFxmsy3x7iJJX1UuCW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfA9ccXsFz7Hm6VQCiGac8KLfE8vdHHquTYLzp2bDqRvLFCXob4Wf7m54ycbr27aje3KV9DAsN5B63Q4r9G5hhn",
  "key1": "peSN7cEfq6QFGm1afPKZNeYKf8vbXKF7dSHLR6JmQDhbvZZwGPyrnxUo1oSkgQndp5RNT8t3kgpBNTiPDedDqPw",
  "key2": "3x7acupsxf67GNjZB9qfmbfTxwyw3dqE1CZaMKPPmZa6XFpxUrFWUzMRY6Gohatek686dGysNs7hSxXScFtdovQs",
  "key3": "5kMtz4NiJT14DwrhEU2pRY4QSkBThoKEUsnR3L78n3Afu7wr5PBnEuQCzLg2eShEYs7SqmkH6yGJqyMFJeXsJjwh",
  "key4": "47V5BJsBSE83CHm3AGAzEHL3cnU4fDyAQJV3FP9cdKC7UoCkDYWT2Cn4cDSA6RvruVZFWz2V1pTZaPZZpoa1xrnU",
  "key5": "5tc5qLKk4fNH4SpM59t9YAVi4ykpDBQ8Mg9YoTFNp4BpRy1LEfbKJJKQZsKNpP59pZzEu1ka6uCHn5jPgB7oMHLb",
  "key6": "3FBbYDu1BXKPKA9vyB1GhfBuXJeb4rxsqzKM6W4Vaq6aVRrGiYY7KPDApnjwq1EWxS6YkeQRH7uVXQ8VnQX6mJNR",
  "key7": "4HKe61cKfPnUPihmqis3v7GZuo8PYRttZHcJ8T5KJLfAPV9idmmYrZErceLQEXvoBsEYYEeWytogFvzNhFUHCvRt",
  "key8": "26yJhemNi3yBq2uAEatkH5C4LptvMcDb1fAgSAg9XURbdaCaGGNkYUaLQPa53BpCxbXr3fH96WYUob2G275Vxjpw",
  "key9": "52sUypx7benkPvPrsQ8vAmmLCyWBpAsKRKWfESSeTkTBr3RPKt1dhr21om3GEXPUkvG6pXgByR2rYJigkwFDfw7Q",
  "key10": "3a5EP8HxQhkdpXZ7VP48zNWVYsbeNATtquhXPdPE2VkXuURbCTA3hJeHFiwojJpH3JwWvUtd6jE5w8jxr5RyUkGJ",
  "key11": "3SV3aFhvbiJyEVD3GqPa7BwJxuWGdqa1vuJ5n6rGb3NCJvQdtxa54CBthQQYNDvG3rAGuKjZLZio2q1zX8aWyehL",
  "key12": "2hGD1a57cbGkNte8J4W3oBwYy9qNGaY7V4eiRHiU6ac8cfnNzFg5oksU5QvunaYyqMKfie13w3SJLuktM8kJGLfj",
  "key13": "2zr9bsHiTFib8ZN5ETLBZUJ1EffQLCkSwLuKeYCsCsLk7Zu7dczfmgb8h7Dq8mgnoBwcKeMrCgoe8gwLSyv9rsua",
  "key14": "ZmWHnhpoJ5Zw4PA2G2Pov6PMNP7nmwhUtHiQacMNu2qkH662HpyyDp3dcvBQyAowAitDoHNwnLApbeBxr6ewziM",
  "key15": "B22K46q8C2FAy9ezVh3TPWu1YffsSpRnUTdv3Qv7Exjdo7WAcugQDdFU5GboE7T2RyvocmovLbg18QdTiKEstNL",
  "key16": "5BKDbKSTyyJv2TKLjYvsgk5KF1Qf7T7s3VfbUaj2QaFDqpnx7aYE4jVKK8vboPTjFJ53338cuAktiQ6Zm1Runvo1",
  "key17": "4NDXq29gkFM7yUhDHK7GY5KxVx4Cy2kxyhmqAu34rcsgV35U6En83VR3XtvaNRG7zpDyeChnPjPsGjRFniDvoGfM",
  "key18": "2ffdkPPx3V7Pet9T7ggFLmUcCcZQKuggmM1nz1x5rGG7YCzQpSHUz9f3XdqV6eNSEZjdBj2ADDgRixeFHWnBS5fp",
  "key19": "5oLCCSpFtDVg4Ta4tgf1wDdX9vDGVSeukUo74Ukv189WcFKnY81LeV24AsFANHd38oJR6iKcKReBRJaYfPRJRz3i",
  "key20": "jcTLvfNtoFjBZZSMatM9WkYnHoUUDaqMPNzmu7CpXBJ4c2dqHgPaq5w75XXdGU6z6kpMV2tonpBLjYFmh8aLYSp",
  "key21": "3cC5fSVx4PVwzWrVUNadUnxTHwSCQaEtiV3km7C3McySNEwMkFRmBR2JcrvxNi1wGJs9DUy5yDu3DCgu74q36zG3",
  "key22": "3RMk3qHd3kcXBqpAEExAMzAXVgzmL7NVtkHdRScje7ypowXAE31fk8AJBZWmtcwRbrmjhLAqd4qBjAM42Xy5R54Z",
  "key23": "3cZ4KtVeC4qUzZdFFDv6mmw3HNJwDXGGGgqFyXLsmnY5AYdhAdbL6MkPGs7pmKowNv8sPpmUiN47dD3GB7TmJTiT",
  "key24": "4TuECXidKHReUJQsaDAMDatuntHn8Etk3ok5F9T5ygxe96ksJ7dC7jvTMggVyr8pUrYNzHdGMM23m6cXhhTFDNcQ",
  "key25": "NybZNiSo3oRkJDjc4Uowem72BW416rihBMLhtJEC16TWHyNoD99jM24MHWUq6XATjCFZQRkt2NWBFMGxTWUxuYb",
  "key26": "r1PnRvi11VGFeEPnUHY2CRvJj2572GR8UQfjZxJaaCgBhGUEonV5nxdBXiCKxgVkfBwPnLU25rKHrMGi8tS2WsY",
  "key27": "34WatSrtF2JdpUSCttxDBFwmXjTFQqsxT464H3a2o6WGaLVK4qGchcLdTEXhZRCv2wfQjSVjjUdMdPPNN6WTVRXr",
  "key28": "1y7fY5BniaVoS3Ktpfw8jFrtBrSJHV7Vv2FkAgXc32wqjGwvyZfesNQMcr2xGPhwz7aRfzFZYcpapnCzz23u6er",
  "key29": "3gCsogQZj34mffCxPUaAH1rAeFCb27By8obXWbrr8u1anDwDFb3W2aWwryeoeAMJffuoVJm5RxgWpYoUTne4jSfb",
  "key30": "54QDJ7pcX5fuqTm55kcYx5UuqPqFpAHa72TsbX9GBiEzgPCkaV37F2jfocgbPXHuDbR74BmeUBNhdeNyugV9XdN6",
  "key31": "5mcSU2NT8aADLmzfTsomxAwDyqw7kKKbkuWRhPKskmvojCz1UzDBuUWsbVjxbA4B7aEBq1VETsMoNkEnS1AoSKoR",
  "key32": "2SUH6XwwbrVT3EcKxto8yBaKB57rQc44Zi6KnSh3sTTTqfqsBD4pTLE4m521UBHh7M7rW45KFAaqNq7uk8DDFAnr",
  "key33": "qyqPVhfvuNFsQs2TCP2HZpxXV1q9ySm3PH15k837TRJPhNJWEyzfMbjXFTJW3J52MFA32PzwBrH51KBM4XQzkmR",
  "key34": "5fL2G3WQe2r5ABHfo5G6qw5Bsf3ACnF2e7xf54NjPyJLFo974bxZcUaASLU1c8DR7xESu9eHB2CZn83riM6NzgcZ",
  "key35": "5ZiVLXbXNWA5P5xiJPrFvgVf4ZbjavwNtDgfL3reN1hU7sx3BtsgXfSEH2E5gigUBCEf6vpUEEv1WfiCuW3phBhh",
  "key36": "5BuCXY88v69boRiCFF529bZDn3rohgG9UGSBiPTeubvKQuFJpGGQskNH4DwJkd6PQW2jWrHN6uG5QyCbbw5Q5zMm",
  "key37": "zxsYr3k9dB1pDgGnnvUkYgydE43hfMvVYyWCsxuU665MTvp7kduCE2HSGEsViyhmUCY4XdSMdg9FvCTxGjjmSR7",
  "key38": "4P5WycicsTG2CYcbrUtJXb4ig3zfAbHGLwRVjDQH66WTsrF1cJieARaayVAst6i3Th1SpWaqu4JSNRDBoZdBkZrK",
  "key39": "G2MeYKZYgHUUqWDj4WG5J8PMQwRz5CuoUGbcCbNJ6NuGUGeUyaHKvD4ALgWW2sSp5UAe2P1R8WwebVsCEx4yRwN",
  "key40": "iZZCAbABwKgqMLMNPCSHabGw7LEdB8P1FQ3F9RnGYDubn9LkzbtXr6Vjhxz4XUdVPrMEmNeuEASDTsPpio27128",
  "key41": "5V9eMJY7GC3cWro2T7KWQRMCYFsgZcidNhMuKhgqSbJMAXEvR92JnD2V7qUME7ELgvzDnGAC7u5ExnuV9DY6zUG",
  "key42": "52ahVjGK2HsyjgAiEua2UmpdvkvtGE9RzZoHEHuMmDVaqZTdFkxhYdRuTcZXy5LGyim6U8HJrD3czno6bw38NgVb",
  "key43": "G5B1EStZWMP5Zut5q8fueXNG2CuzQrJjKR1GEfVB7PDbMgJA6isQeNASxSiidx3A73RdnPAToefgQnSe6KqcAkH",
  "key44": "v8oVzKcChtGGdoWE2d5M8GZQTpZqadDABcyAAUBDKt76j9CpnMxjp9eTMitqazgLZ7fgWoYJ9FZypbTcQ5KKnNC"
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
