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
    "4f7VLhyj1STnEy3niVUEedfN5h6tH5sNLFzGQz5QX2B74P9Sj1vKxcr2L3Xj7gbaEUPEbNq9XxSzjXNQa921JL6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MAAisVPEdmAajXvBiW5pAQTKQZtcB9z6kTZaENMoDWc22QwqLsTScF1Sb6EL1BPCttX7inc2vmKn8hcEZVAse7",
  "key1": "3ttLqeFwuwMf4NYoEanfSugiWa9UEBZTTMh4uj77raJ6Jj6hjAVeGjXhSS1HLMXKaecsijtUcxNo3kz4DXYhUgtd",
  "key2": "5uHzr92Lxnd5XvD9kmU9rM9Yv7JKPLQ8jQfFHijLXvDfFYhAuCZ141DmUvqTgC5tJYNJ1QETpnoL7qDVRwMrGUgM",
  "key3": "5685vGsPaTAxdnwRp7KgsFwMtcAA7339Wvx61qEYMVeXv6KgShaPU813c9FzhBX96sqFgiAJBfTv8eZycFFspUe2",
  "key4": "4rDSTxSRgTvbJFXgLp9LcBjDbX281wWWjSD9NkP6FLPbHiWoy5977yXWhFM5S9F1EefxGReHMQgfrrDa8XVNMRCx",
  "key5": "oTLt4r98JrV239DbnMVmwsZrH7M64j5tMPoo4WA5RaTML9M11QHifpLSyxM1b22KWrEHRKWZKydLivYwynX9GnA",
  "key6": "4xY9hVrJ7WPaawUXbTEhtC2UDW1d9wboBUuza2JdnbVzsJvx7FLJoxnUg1StawDNuMz5uXCatmeu9STppoy3PS5h",
  "key7": "4p83Z97sSMeZbA1GZQydDGzqYmWJQPXd2EuATjXxCsid8nnWuCLtjfjwLmk6D6wyxbmzyFVbPmN4opSwMHojdT8q",
  "key8": "563GQXgbdD82wvPAVtUveFYaRuK8RtbkVLKxxqz6YcfrAGvjgpJjAhAgHB4uh1aMSMGHdmL7oDyHnisZKpJ8PiTt",
  "key9": "3jUCtKHLKFiraGdTM3WW6L5ych4aaANX5RA7t4UkWnZ4Hwujo63qSyhhMV75rS52XkDqKLNPjf6MrypgDNgP7xJj",
  "key10": "2XfCnnRTUoFz5ZCNFoexxpMaWhTXeyZNB6kWTbn1MRQUtAvK1pD7djVffHXcfBEMfB4UMFsHuhmEkA4SohTpjGfT",
  "key11": "4CEBdoLQtZBUYVf6Bpa8z3ZtHwNp9s1HjA69LbBzYMhssJ6CD9uQ68ws4vLcB4tgrxu62wUCQUGDq49RXw4nYH2U",
  "key12": "5VPzSeqnt7JNvZTyTCWeamXejff4rq48bdwTFyYW3HfAecD78HTWknWJ8TzwbxSxi9prZQxQBDgWZpiLQ3pCTPDi",
  "key13": "2irA2HbTHeoZnuHkLQtFrALb1dz6kJk5mM75B9VyWZaErQSqGbH1BBgXmgyvHr82gkwVuuiiB2uALkRCQwTWr6t1",
  "key14": "3iyTJboLx5KCPxjbNVmsty7wz6d98QmXe8XPxu3hDDrFeH41PxkKcpgCgoc8jJD5Nn7z5ZL8dXPeBYefZpCpHpMW",
  "key15": "3uuC5zzGcx2qrE7NRDhQRmzBT4CiXy4HtGmvvF6GQgzFFNw8afLg19L4E3BsuQ2pivnJEGgWodv2KrU6cRhJy8CX",
  "key16": "5t6r3a4vVfJN559aqKwM5VyZYoMEiFaNzdMeh9HMAjfSFddedjCFEX3WrJBXAvQcEMkq4BTYF2DDFjwomvGGY4TT",
  "key17": "484xGRsQTEuaf5cAcJaajm4ieZTtHEHiA83voWGa6DjLmRy8Wpj2xQSgAexAiaNnaq8ZT8yV13n8SedCHy6u28fy",
  "key18": "2nz6BjP5GZ4RsKhZ4duEp2iob2bC1LBHs3yyT8ptBBawiSRBGNwPuqmkJ4LAPK4bNx9tT8PC1nvmURj9tywa7z7h",
  "key19": "xLE67igr3eCaBQUDHsuj2nwtJVuGDwdEHg1FFnLFVyt9zmsgnYk3dP7ewr2A9MRLvJPd5jZp4Xo1YfTNg3C64Po",
  "key20": "3pWygzDbicU7f8woYfBw8v6eC1f2VX1HGDQMKwyGJ7s393vfLWocbufMz762ueDLuKUbr6DgTff4oJEnhFZq6txY",
  "key21": "23LAU9oFq1RHAHVMCANAy9yFSNb8a2gRbVt9SZEMaJQ6M3eoSnfC13in5wAxcjb3Mnvqbt5emKUnsLgCDvXNkzQ9",
  "key22": "3mKsipZUFXS5XMJG4kyCvb7pbo1ze6UsW27T54M6CVrXSUmQHC1YMd74gjEmofMourw3TUW4KvZXqK7xFy5G5VPN",
  "key23": "3MmXeCA3B1ZbQ6CzZuFKricpXV4QNncGyGMe4t8JSzpehTb7RvEQo1RhhA2q1DSJ3AJeMbe9HjHFxxkkCwsMXTFM",
  "key24": "2HSopfyR6AteV2KL2YZmTNXz3wuL5my8XznFLgQTcWNcFRAtVfh8FkkgKuwQQnhz6hJcR6ZNs61GD7GcQv5S2DE5",
  "key25": "48iudMyxFn4M4uDeUy1XN9cRuHXvjyxsRaVjzEXJ82TwNJKXgjFtSAPqDyyoiASfwx6mbc4E8HSDZmPU3VDZnpCn",
  "key26": "4327UZ8g9PeLK3xS4KkAXj4y5diVQ9omovy3r2TTML3dFJxh7HEwJc4JE6nKzLjQzumqvKQLp38cjMapNs6FoXU",
  "key27": "wgzA7wx8pvarGXoGgzaXTVgvSgyr22Jk7X96hXdstBByLXEdSgo7gRbFTV6wE7Tt4sRJhK99zhYVbgtG3KLHtw7",
  "key28": "3GLUJBn48CwuNHRSv6ZX9Aqi7TJCn2TtZCrHYgQnbki2QAh1pZUZTVKskDNY7hnt2tTipi18GZU2jNDG4FZQrqWq",
  "key29": "4KJjAEJXBoHz2cmsR8zSeUN248XivnwQtPZP6XsZuBipPJzggFooA4P5sgZRent8N1i2ZViq2qvXM6cHhb3omdz8",
  "key30": "3gRzqLVVHWj33SVcyBXWLzFi2F63Tu1JmujhiNNV2G2jHDCAc242BMAhEFRkTyJVdUTNVFfSMX3YQwx4D74EYVJY",
  "key31": "5Jyj4TYMARULjL7TL6EsRH1FgdoTAiw7bgHsyUYRUuqTcbEdDp2U12CmeVfQB5W6EVsvQcppga7sd7WRLTcrMkGm",
  "key32": "3hbFRuaJ3QkN16Fkd6pSp6xGcGpaVg1QVqBptzbaR6e6bf3sYDe2ddnVw3WDVfcSst1Jj9qiRZE2zXdBU5fxAfFr",
  "key33": "24sn8LSZFSbPNcVmqHQoqAuh11io8Ry53CZtK6kVPTY4pqPzfyDfjjXTjPC7aP8CqYyEeqDziZHTkBMnc698Xvs1"
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
