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
    "666XtmWfzz3LYBy26EwSAHHG2Wamixdme14z6LfsmUvMbQ8PqaBv8oXfVZTzZUhsDfJbCXizw8A3MZWFmUA5uw1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9EA4QLLz4SbAwjDfeVv9KMz5W8JE6D9ghuMUWcQ8kM7rQPKPBnbsFJJPrx2puE6Ydpod4Cs4pLTwMTLafKqPns",
  "key1": "oYENJezVtnjviMrf6MVvco19FniyPc4rkqZ3XqRCXP5yBdywcQGUVPg3cyEDoH6sxSpqZh2LUZCbM6FK6kf86jK",
  "key2": "2Dq4jVbfd2LaDJvDQjNxqYxWFTyqvf3JbCuz5nqBtHkhBkZtkZLQiZ1Mjh5mTQhERtaaQR1FQjeGcEufsQaLZkmM",
  "key3": "2Ldn8PfN29YNu65JHSv9k4BuuEqpr1aZAE2SicRPiR7N9qhcx81zrWadHqzPZEGu1fS6jHgCViiRGFkahCLReG8V",
  "key4": "kYTfhpvQd86e7j6iKx9nhf6oJ86zgzgC12UYkUvMrZRNj6T5uZLeiU3uCGUoGJmGL89SWX9TNJT3JzN2nHyKo6b",
  "key5": "29gu5rB1ByidZohJQNHpSW67kDaMDa7Uc9XCCdqyQ63B2TebMRC3XR7bskwnu14PKBn3SvjevXs3yGezUTjeuF92",
  "key6": "633CbLTYu19Qvs2DhXiD98wutesjPQfqi4K8a3LSnNR15xyTaAjZLCZpFWskt9fe9tnHtacKYpmVCdnfnp3sBPS4",
  "key7": "54FfvYsBRpYbYCeYNoSF7uoshoHUJwo4MsZ3Qnt3Cc3j9LswgLpC1EAkkn2VForEKVy4d9pNR2Nw7rujBKge5cju",
  "key8": "YL3toLiD53rGmhMCHD7sdaCK3rWgTfFC4raDp5yecbrCLYRZedLJRvenLMdP9c24zk2LdJrab6MPpBoRHur3Mrf",
  "key9": "ScgjL5e8vjm1zBHn1Y6dEKuPQiJjVsBC554jZS2Hgp2enjdoJHTqVDmz2YSidKSSPzx2jLBVx2KuRmcKT4124Hj",
  "key10": "54EMez15rfCjuF7AFxZVMQ6m6wwdjyg9sSJixUqEh3hKuTX7C6NyyFVNxVa52PC2wnJZ4XcbTPS6WeeHBobZz8Nq",
  "key11": "5bFmi3KvWHV1J8wQWdTr32XMPJBo5aFBQ6dn5QK7p5BUmXSPSkfBUmru4WJ5VARRFAUnG67wsMZGX8RyVma8eccz",
  "key12": "5dzSEwNFXowmghfMt6ZkQuGBgZFMdGFZZGzS83mGUYvmTJmw36MrJwFzvyrQR9iXHbPQ2XhGUNctJMfDVoMzKvsi",
  "key13": "41QpDzryiYhTkZuSnjC9kLw8SirxuNSf5snVNYP43zHrmA9UQtoMuFe6di5WQYehNEFiJjszxZima39Z9dcsuhUF",
  "key14": "5gXqrrHcnnM6xNjuZv9iVWVGgtkWiJDEVgbat8dwPgFSi4Uf7pQCdhxD3NUgCkKFEFvduygAwUGTByfaDzdbJ2Tg",
  "key15": "5w41CpnhsaWx3UcSb9zixCrgeGXDyjZgPMZVTaKpYDho7PWwEm8sMuHePc5AiHQKGT2hzE1XfV1Q3SE1wZCaW6Nj",
  "key16": "2EjmMjcG93vEmiU6CW4D1mBk8QNBaTC9LQS6ptqAUCi9xh9xTP3xy4EgUiopd5pHNDB9WY7DjLHAEi4y7g7iArE9",
  "key17": "629YMSzvuNy7DVrPV9bsRD2gLx2FfiVfYMuL9Ann74z2CAgZQdF7EN1q7f4bZhzcp3SKs3MNyT55NRV2BqEvVGFx",
  "key18": "5LqyMgUemjsAbwYGwZLfb1CFkdpr2B9XK2f9dHvhdKYgMYaLB1EQHJk5sxefBHdmystb5yTQyiHBXGiLKkmWJ6Fn",
  "key19": "3j83BNVi99qG6SbefBHN1bJTD7KaDLZr6QPVD51howopu63N49i8k4ULBpB7sNYMbJmGjpmVDGDgiQwRf1LuNMeY",
  "key20": "2ge3pV5svNJpLBiuSavVEwuB4mfAp7AzeMP13qZAWhJ9i2fGsVqbV29FP2XH9zunpcz1ybvVynZpxZWx16W6AjYf",
  "key21": "4eRSsRWQ7GH9v5HGLoijFSufEqSjVGYhbcb8PeotJvf3QNKCKVMeCBHQCvgLVAxdXuVwgNBwderB8QnFAjsVuHBn",
  "key22": "3u3mX8z6jjGTgXWTyNNG6cP1uejJTuPuD6tLZ7nP2r37REDmqyFm7Pnt6hzbFnixswK9C3FhMpzLQk2kxUc6MbXj",
  "key23": "gHfEHa4kQi48eJjZ4HQ8wWhx9NGmrKWHi2pDcBjPWVsdihhS4cp4u9Qan48jd71bvag7458ZaKMrPicyCUEEiFU",
  "key24": "4FMDMXUK93r5Rc4jjbGvt7Kk6Mp8sFY7tbzK5y8EGteAcg3y5mfFu6gGiJUkqMfkv13sTLbn1XBRJDcGjadgb4cX",
  "key25": "4pYNa4dGJ6rmPJC7ZWKhLBWuCrqf1d8aAWCo7UnhL7ARSqyjMmYMzCzdKct3Zh3QqbAwNcobNN4tS5aKNhW5Y8if",
  "key26": "p7GMFV7FpB3F69mwSs9danANz4CKZrymBfNLL2cS68MwkbjAmxoi8wguh4mt1dXLc1wQXGkASvXDGafe5AVxmL3",
  "key27": "PfxmWd9pGLqDRQ8LaGFPs4XoGr86Gw2NYsVYGMBbWGuxxS63Svy4aZpPL5ESZujiqovFoHcuWNTBopCPNWNqnzC",
  "key28": "3NuYir66jbmUj4kJvFUpYv5Ck7zsgjjSnXNzsxZVjUrPazbUtdx6SrAnvJaGjy2KuC7bmakjKTVsLY4WtLkdoVue",
  "key29": "26Cdvrg4tznpkAb6tvYM5VfqKKav877S57bmxMnUxPkeQoDK9hwUvf1LpYiJ6mgwVtXp4FJzMxZUpdq949cV4Ktw",
  "key30": "4qdwH5eugtJwCQ2oZ3RfRnTXndxNb4kZMX7hdVda4ycpuP8nXvQd2BT9Uroik1bxaTbmMBu4DhZ8u8jRXfmrm3Lo",
  "key31": "4dhP3TaL24bX3wvyv6NQfjr3PRgjZ6uakMsaXPE1F5qAT8bqJZsqNZ9DLC1swkcEgTEMqHcMHPopeENFGC5KhWvy",
  "key32": "61HMXQjBr4AggkU2JiHbNMMyiQJw8LCyiGRD2kFbuJJEeH9nzvXQeFAY37CDgXnPb984JFd5fhaFo9mrQpXPVaab",
  "key33": "4xFR9wEMbTK3aDy5c8yyiwrGE8BuPtSRLRYoXym3pbko44Cg7m17HQxwQ6WycT72TxXwPodHtRAAVUtVCQCnVwVB",
  "key34": "UL9LboKUvVhP75NNC96otR5NRP5B7upC7SRKMiEw6bjkCSby7FmFt1dtXzju2hQfatx7wmj5F6fQ6NXbkJyuMVg",
  "key35": "3pGgxeK1DoaJH8ezFaMFFrHWP926GF4ttr8HCAg7wYMw1pjb1zMwCqwpYmcgQhQ4cK6diQwAUy16JHt6szswTPVn",
  "key36": "5s9HWuTGcC4QTB5izftiCh4KBQqyxbLwZwbPGfghMAsfxsJJ9k4mZLmVZXaRFJ9FUVeFmtkJxVJavz1YvuXTE3df",
  "key37": "5HdMH3a3jMHmUBYxVhLdR9v4RYh7Sc8MVP6raEBjvEKFXw4VwS5cK9teisKJGzrmmGFh2mDbA43qFRkYFUNG4ERF",
  "key38": "PbrNoyczxQHvHWyaXM1Ffs8JQn96g3z7FSQjejp6CZwzr9s8CQCDVsgMkvf1TxuN8K6qaYUE9t8gj9ntQ5boiYo",
  "key39": "36YjTD5Vk5jkJmo4nbd6fMVEFKXLEbyBznAfNyJLEZHTSD2QRt3Gq7asRAKYcBZdJRdf4UWXAavf8ECMiu6mWw7N",
  "key40": "4ZnMWFXx5pB3RhtSTa1MnCb5UeM2qRf1mHC3hCu62XcKhBTZLVC8Xnzh2PyysPrBtkCGUve9yqqR8VRUUAf1Yfs7"
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
