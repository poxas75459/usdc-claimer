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
    "3HUb2HMhZpsBofsbar1EMWJR4jQ33QTFErS3FK4py4Xamoro9dYHi2LDfSh3gShKt8fbxkoTPmPbkfDwgWzhTmBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sD9Ya2JM6cbL9sM6q686oj9q1Wz45n1STJVtmomUmyxpXu6tFC78W1PVfKoayt9msctz6bL9sjvoeQJbCx4gNaA",
  "key1": "3FNx6wHVb25w5Tk62tj2x3HcqCuTkZQZmXPw99WMRgBWqQxADfKsCMAUa6PLKQb7n7JbXbC8vHbCNxB3MxSdK8E1",
  "key2": "FYU85x2jhK4EmPfvgiJm5HfDwKVn9Kdy7A4NWUU2hqxFMSNzU92Rvv6zhbN6Mor3J3Gnw1xMKRGR9LJfV7z87ox",
  "key3": "2iqMRy7qMg2ghmyR7UwJmx5NCQDB8hXQqSqHmqTsnpMn6An3nwSJCXq5SZ5QCdStgVmrzgt7BAdh3FiubQdyCudm",
  "key4": "3HdEMzrCmqZiJUsz9ERP1q5CNkfqVdhEU9HPRNE4Cx3C7JmngTFLmBwebjzyux2vAEp9GzC6yktpmEiky3UF9h8E",
  "key5": "5ktFwchv2CQYmjHk4kxpBhzGPu56BQ5Lv2nr9i5t8mVwbdhe8BCuok4uNZwrq31QZWRfbzXjE6Ky2dRWCDoLWLGW",
  "key6": "2jAJSrjd7JfzQ2kj56KBxePiaPD1UZso3dY3aDdkvWhqZRNbsWuCt2UXnzAXjzX5KAxGkCHp5DPVq2gqZhpg2NhT",
  "key7": "5G4ugAUaGhUxekynigoo5RPUJpWdCCyqHJFWWGpsXKehd4osJvY3FRdXiafBzQbwtK9W6QKB2mhxqoCZMRMMPyYT",
  "key8": "2UVnVtsojSCwC2LXbwVLKVhVMfjrEdfT3qBpTGGNnS2Tx5zb1znTDbxNQmPRd2Kknny6Q2WK6T4haLppfsJEXohN",
  "key9": "62LEsPi4qt1UbVuUtRL2n3WGNekuDKHwRMA84fqDJ8zQJ4X7HchCVcyTNwuc12spn5DFWZVtKDbtjd7puYpj9YeK",
  "key10": "5a6ZY8zCwrk6S76brsUo1zonEVgTExzuPLA6jMZ7ChoBS8uxgVwD9eybVjrhMNyC8TBz8r6vRvt5AzrR2cWw6j6K",
  "key11": "5zzHy299gfFNYrCGa2DNyGzpQRqkEFAA1SYNGPnrdCFan6d5fY3h6YcUYbqKQ3Wb5vd1wE1e2CeoYbi8WhG6iYjp",
  "key12": "3TdVcDeu4fJiiPJq5yn5FNqFs4oBSWK55SSaX96BUV21bTfrvd57mm5mLyXQa5yw8Xrv7tQNrpXHxruShrjXjtkg",
  "key13": "yTyuwxTbY9p6RTYZTeej2sJxvgrvQr8ZSBR9mN6FJMMLvF4J8UdwQGZ7EnziAahyNkK9VmycwSG4ztFwXnh4kKi",
  "key14": "2tmwZPLHrAo3pGFeLnXD8Zh78SiqEPfwXTTru7MJ9hmP9WDj5jARpiWXPV5NXhjuehWnQWC8jmVDr4BG2NDhwEeS",
  "key15": "4bX9ZamSzMZTtdDah8RihkAAwN5y9RMPZZDMKM35NzBWADhcWzdVMLk7G3LiheBvgN2Tgdy81uAcDXAexbFsUxK6",
  "key16": "2ixgsXPqaiBs7bWoeNgExjn2oqwMMcbXCS2XRofJMGiX46ejYUFS3bhgPwBR5qvMYGHh91LJNRqLVP4YM4myFr72",
  "key17": "5v9vXsdnurvirmpGKwQSHwKh2CYqZqDyQX5hC8r6XdoZjb1Gjh8omV4N6DyqGrwdGY6U8jKxNJBw56ropPEui2Mg",
  "key18": "2XdiwZhg8sGrHhKCrtNLc1wroTuc9JmCoEWNwCwJfmMsgiW4wbxReZiHsaEW5XZdUGygmZHjDKgUPfQY6fTQqgwu",
  "key19": "37WBKzXBLZrgWZvR6ZzJWzDiAgpXZiDzCBke3tZCUAJDeMxNcF41A5vrSFdDj7VQsZdSifxZKgHNcjKBqZzVTeKE",
  "key20": "34BfvHShum694SxhapmYEZ8t4cMN2RhZqqWHa5AVZPGrvphWbrpjiGg3ZY7ZMuvWh8VaeaLJzZJFuHmjD6LGQYee",
  "key21": "5VtsdCXijqmQ2qkTvyYDy9rNoQ3MqWsN3HotfxKd3dUbCNsKkB4dFrGJA6Jw3Yf5LFBwEYWXx61BaHmxd67VaiiC",
  "key22": "2U5ypBuAM4Pg1haPmEAFq8KZSTKXkizYuEwe73dz6DoM5f4QV6SwTFXqkh8rDaHAM5PjxD1ZiJpFd3tve1VsWHb2",
  "key23": "33Am3EzEAn9HqN5ckwdxjLZbC4cpFtoDzCvfbsV9mA9skk6qoWKjUf6Wkqifk1mbnCwmsLxSW43xEsKB3yS83NBL",
  "key24": "2Fq1ynCv4f6cSgMPew55oLT2JU1SbxLbkfR9V1YhYP684ohdPmiZUinKiQMvGfU2jeATzNV1nEdKhU79RZF25vt9",
  "key25": "34X2TZPTdAahayudno3f58zKp8qykcTceGHA2rrAh4K98mxsiEVpr94YoCeYLJjyXxjX2gBhtqH4E8zYtGLif9Hm",
  "key26": "5epFrVVd1TEmSgkp44tkmxq6aKv2JENceiiQmDvjLv2fqDRV3x7WhQyRZtabLRZ9e9MNk4zDLqeVN2ckHPNywwRn",
  "key27": "4oFiG2mUMc5SMS5o2RpKEkR7TgfQ1QaXBPu7JB7mLdrG3HKQPkes22EnFxHKo36BjaGtCf11UMv4HakyToRSvcVw",
  "key28": "2uaQ6YzqpjMkRuUCJMnHBrbXuuW9f2ThbDvq9Zog59PehNBTi6SvNXK3bPkWUr2ws37qFR3rUfDnwVKJupnZNxy",
  "key29": "4rimExHBfYQXTkRnDENFApqumYYZW2sQnXhshD7bbYGXUsCFmcBbRVNCL6yxmNq8nPW3BBZS4XzRjY6kykhhFRKC",
  "key30": "65Rk1sauNsS61TKPPPLoqUd6XFEeQaNqfjYatYbRSvfbCDDhZRkqdcUn44wmS7pVk5pcAJHhmhYXJVd9bthxgcCD",
  "key31": "UFtPM6QHH5Zjyx5rYdo6Xo5AY7tGTSAJBNUKUQzyWocejN2gBRGXP9paCtAZGmiS4unefwVgjNGRBjRxEx2DD7S",
  "key32": "ck1nJReceJRh5Qa5ZFH8PjeNXVngJekbmvaPiPhDXYsxojEdG5btr1triqp5ENJaVXExgkHrpaUrhaa9uFfx9Zn",
  "key33": "4F4i9RJpL11cPzqSdDBD6aFYwvZTkygiWUNTMut5zvATv1ECnRBAoZcH9CnK1Tn16A5E5Y2goQY6P8dzALavBQuk",
  "key34": "3w1SBd5oqnymZbDwiczYgFfDoxQx72E6HPkyENrMrEvsRDvfeK5hDYzZuwoBNA8MfJovDPhcMmve6dmsNSDhwWaL",
  "key35": "4qQYd72Ngr7rC53tVA8jzMQUqvusQp6gyuYGApb5TmsVsrBAWyvuuefa71xK4HQ7C3fBCo6zN8HFXzVBu1Vuam6F",
  "key36": "2MEiHkARBdmbEUKQkcymwrbPLVy6sogR6trbySnp5VGLfLUennHWVFb7dPyRMVyjKRe4P8ib84MUrw5ZBZWFJMR4",
  "key37": "4wnbZ2mezdxosk6n6nxA1ZRpY9Wpc5c4T5mK9JpQhtGzcixcgorFtV2mcLQSYnMZAZP3PUpDE22jt9Yryvdo6bSu",
  "key38": "5fqcBzw8rzquvPZbsmgPJwS5R2vMq2MKg7qkShJfo2eUJMjwJwCa7jDXompoTidqGNuvLMbG8CrRtfhhPqUDXD2g",
  "key39": "5xUoQUxAyLoH44U2yYUfdqFbGcHeVh77pyP5EgTPpjs185YZuWDavERhuuJgcM8f93G3mhTz8ELY967asnPafPW7"
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
