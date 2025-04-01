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
    "3B4pv72MgKg6LB5DsxuEWwuwT97nneMFWU8wHwRTyJJYHSDNzvJJ15LkLxF5HxuL2AD97ZSE3YuMFLVJdHoGspvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sy3ePfrsUSVT92WMBahE9nq9ejJ8PBLM8qT8HvRFhvJMxTXitUcA3cwC6JiSGyq5uVQCyGD9ykJhiuC8CS6GZdH",
  "key1": "4PmkA46sqXZxUGdUZHz9gth912JB5XjwzZJNq5YdDV24UpGjGdfvMzWB7QwhS42YbNnWe2Ks8ZFUXbycW95QXDb8",
  "key2": "2VeMhPJtjrXvmsgRBNiEfe5qYd2evDqZbEMiyDQhPUdLnY2UZNJy2WqZkn9qZSwd8rBwXhXR6uQRnGeiPCisYRA1",
  "key3": "2v9D289uEMQNLod91NoLbEDQgnKeAzUcd23ZNmtDXziyvs5r1Ef9ovX6pVCWLzGZERfBfySo6p4PRPsqyfqWaTvc",
  "key4": "5bNAhrdSWnpps1tJGzhRBP1vuvZhktbocJ7CiYYsgkyFdkecAzYYoAsqEJzeHjYj9oviYyp1AdFfaxcDbeHTmpMF",
  "key5": "UBov2xPAX8R5EvTWsKe92LappyGZiYrgkHLu2w4jYFYw7DxfaEt2JJuZS2eDgR2zc42swWd1jmsEUZvcT6pjG3r",
  "key6": "3ovZVdfKbTLhCUzp7sTdkeDeAVo5sAsFaKvQo1FBqiUKs5ZvdqqYXTX5sP8kXFYrhkHwzw1hMR7TjC7zmpEPfFTq",
  "key7": "4Vb4aQgQWCL1pdqwcZ3JSNUdH8Tf6go3h1DZgASNeahRarHex1FQpAErrg5iLRFDN79uhjtGnHsrUgPZMYTewKEN",
  "key8": "dfbq7osFygG2BD1m82n4Pj53dDN38BADfkopRTnLs5mxZzrFRCFm3AQ8AGKPLgJpDzZb2JvyDPCgBD45NJ5d4Hv",
  "key9": "5LE4m4TLrb33Kur5VhcMXudnvsczS3KkFmjDBnN5MubYK2qkvGTtMhJEiJrx3SDjUNoqMtUNLNVFYBAEgtVPUPDS",
  "key10": "2Sz2h7Ezhzmws352XCJrJXFqheun6uEBeCczSd2aRLC9PoXuo7DZVMMwGUetJbe4d5jjkV6f1XCWAiANpmfusUEv",
  "key11": "56v19Lfe4uT2oyacgQqQZ3HrgubkPzSSDaWaXycmH4AREfNWzAKEPCmk1qUNdusVyVDkcBKi93ztCaoTfKd2dQVu",
  "key12": "3d2oewazx388ELRpRXYvV4m6yz1xTcXtnDJ5xs2vwLwbD1tAMEiraQYXKB2VcSiBd5kBGsgyGY9EPCMfAqzMcX9D",
  "key13": "5nW5Qvjy3U8Jin3iRRJ72jVuWkJ3BHRax3n7z1LPxeY5j9zdp8HpUMWHVumvBHZcN3rLZr4weNvqQjmZNYmh8h3h",
  "key14": "4s2ZjhYmnFcayjo5LcVJFLiATo6Qdota7erP7Z7Fzv3JzbtnBQdhfFU4TAfxLA1NHF28vEiW7V91rBLWtQ9Tmd2s",
  "key15": "3fomQXxmqSZeweWt3Vj54f4MJKjRp4VnkWWovqvePEaHGcyy1ya9HATZDDiPVVPdApLLUL8m2dZ6ZFK2U6TYAFax",
  "key16": "G7uUZAmr9pyHHJJScuE6NvdwGKRzh5AWMtbJ9QRcxjqB7qsBCf3AhFLCuhY74J67runpdoxnxSFNyQYBkpZseUL",
  "key17": "2PA8MYSMcJogNHtNvjpSnrwxiHXpJwkyMN4XNSk2qQ9RHc5dEdkSm5MhZEen2qM1DDnrbPhw1ZWtYrkBf13f6x8t",
  "key18": "2si2rhGCXQYynxAQi7hmaaa3mZ8nwDxkF1N81PkAPSVdVpzRB4QTm6Ub6H3Pn63YxKGq5q29yWxBRqBeYjHWQNWx",
  "key19": "5AwpLSZ9XciBShCYCfojkG5F4KbXGNSZANeTZGCsuAbBrK6TbCFgAxbThiBsdWCZzR84JkFAW8GZe8XgWUwDMpRH",
  "key20": "4DqdcPNEZzKKpeMJdGfbDfWoSUfs2GALM7YPfejEZwyaYf97RGAHNVZP5L2kjF2ASoHUghCkoowf3KyQsDPVaJAC",
  "key21": "3dtAiVgzZdpX5M8Wu37dpBNw3WgFUF3QB34adh5w9MtSwXwWCLsC7mFQsFDMn88acNmGyCvDqAsMEYeNoF1Vm17e",
  "key22": "42kVLu4EZrwF3krRkFDPBNwArtMLd5sge5FUfupELf8p8iDfybgMyRjpCJb1v7egAqmwiZGKTXRzGb6mrBt1uWkm",
  "key23": "WEUq1g4yAZVeQmvybmxyhPc3n4iQPTCbtohAG6WhB9va7v35YHdDea2T7NMdJLtqJsu2a6vjV3LBSv6wM7o6aVW",
  "key24": "x1gZnejYeLUPY196cxELM2t7nmyDfLXQKka5ppdBQSG5SKtBYBmGA8ch4Wd4Fp7QJeeaAst3d6QXfb1jwJpS9N8",
  "key25": "4NwYgk1VtNbhVHppf8CzKM94WjWv3n5H4smxELqjuRuN6SBigmypyNK1i7U6sGWePtHuppcnoWt1m1UwWgEH3JaP",
  "key26": "1wsRbayaFgc8EZyQjbC32QdDgwx9ZY4C4N8p3jQGUZB9ZByvLSDrUVoZHJdBcTBzjvif9VaZPBg9ce1nojqt8b8",
  "key27": "xdYrGuA7cbAGRLafsmxR2tCNNNkzExUqZiWM7TxoYisqmFw95NJUo6Kw54yNaZZTjt5zc1pgFCgf8iX3YoowmEX",
  "key28": "2qF2kzNvVUmdkc99Nc2vcXKJxjSZZp3motJ7Qzciww78KzrDfekdfFiyUJX3uUJE1hXdGXNC3efPZ36qgFSrcXwa",
  "key29": "5jBU34LGe3NNiwJ1jP1yaXrEP5iUwB6d2epVirEoXH9T1D5HtycS3qqUUAbBMdJ5mpvupkX775uFnbDybYBhve6C",
  "key30": "2QFNL8HK7gzf472R49Uf1tybHq8CR7sCQSdCzTUcjGJ7ypQ6LrdNxvdTwaUuCEtvkqrhVjfrW1FhPW3hzQ2SNcxi",
  "key31": "1paVU45tewRtip2KRoEYGeK1jRMdCWCG5jrGB18DJ3rnJLYejJ5BUG7KrBjbYnnj5qaeHpHfusLFoaCFYuBNo9V",
  "key32": "2KdN8HBnv1mgYpujjFyPv7qHMmMuEg2qPfgPhp8GvWhZTRLtBxSzhYo5vMVvu87GiTkR3mffewXAVgUKevDuRD43",
  "key33": "2V9UUbBPSiMJgQmPoHxBirdfMoXEaaCYe1kETwVJQaAdo1hDKxYRmWuZFQJJx7Bz2nUQ3KmiG33xehR4e4PeuECh",
  "key34": "34xX3Yk69zAbMNLcoDs2FVVdT3qpJzo6xSjdUHw4xKM7ycGrsm1t8rrf151PGMGzSawUHqTM1v3EHUuh61kvqhiw",
  "key35": "fNpzp1JVqE24LQA8YbaxUMhUABNiqjcbW1DHPAu7hHYsTsGfJGvdPyG1YGy6azxp4E5QgcTPntk8K9X75p9EABv",
  "key36": "3TjC7o1daPDkDcxsBMqfFXthz8HieqYi95a6pgAxEuMAgUjsYAjDQMfK7dUmaGQmpANBLFd1Hgyqg9dhfxU2ZMoo",
  "key37": "4MKzp7hadzuQWP3xar1P6omcVrKB5VheaGohD4LbfmyHNvrRtxesak54F2Engio2eKp1G2xE3C5hoY7USQwxvg91",
  "key38": "51Sy34RyMqeWXWiXATsUvzZe1vRjRPFWq3MSnBmyYmrnDUdCe5g9yK4qFLdUXNGVYpHxip1jYHseYEt3SSRt4hs2"
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
