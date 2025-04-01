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
    "5EFH24FFrvqGwaueG851HgzPeQygt76Ldcde6ZZUxUgwuJSDNWEPLcuB3czVknw6P576VS6E456pzZFLVmdEXYwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKkcZ8YGBvN3JtwmWyUUr1oqp3F2f41R8GX6sUN2DAizkUdXcs1n81za8q6jSnp4geJ5AxCvKnoahynnZFjTW6n",
  "key1": "wobpnEwbh8EzvrGL4qxQrL3u5yQ41WLQCPaKsxcnae35JaodVBSjwUXtHwngAtsvAUzKyg7bgy2EMG1cDhBWgdi",
  "key2": "2mJqxYhet66tKxU4BztTh75m8stQEM76bNUGFGvoqeSmF8hGPtPu9rWb3WjRPHGVrHSFLZQq21JoC5YChJtXaPPD",
  "key3": "5tFSXskurbCuwZG3BAsrEoocexmESthRhEWsyHDm43h679peZSVojURNUYmxfTNFFuoAHpxEWNHGfkqu8M4G6ua4",
  "key4": "21zd6Hg7tCGDCnrHbfHn4RreeK18H5pY3jYxtG4tgoCABaLFsp4AhejABE8g7RujrsUNPr4MXiFux7t9CJy16Q85",
  "key5": "3inxH3jdvHuaPv4qsMvZyWyw7m68qz312uhtqgutJdxTieqfBQZnynuZp9mB4mW4nbAvurtQRX1Uwb5UjWjKUX8",
  "key6": "5rUxHJMBjuGHPd2jjg4FMTE4cAsxtYfBeZ5FZH6yzZj2zhNyRP2NHb2DuEkqY6UkD7Q7hjZ9Wh93FcS3AT5xNVqB",
  "key7": "5wzNMbrKVdxebmZW37VHTiNd2dhDkwnrSg4kpycnJjbhbtJJBqNANoRVksvYiJEbVZYqY8f6fkEo49QMKKPJ8MSt",
  "key8": "4GrzWH2botYENTLDihYLbpkDbNX1637dq1QEnLUTDVkXVujeGdYmob7Yr3eARCvvwyffSZvQcmD92VeH4tWcujkv",
  "key9": "5zCsJVwg7BC54yXZprA2TVfQqWEd9Y3dwesMJNoieVZ3B185pg9wckbnkkpg9NcP2YjbatPN1e4U4ckNSiBGm5vp",
  "key10": "2b5ZydZoHtcQb4tjRhc5XeBJ27kNCuTHAdxDu9jtTk9QJRnnveEe1bMVsqaq6YWhfrqqNUeXkaRHKWvE1XtAH1QX",
  "key11": "2HGD43EmVDAKua3HB1bevFNn3grzhSxZhMXBUMR5UFrQep8YRNVijnSCSzaU8CbfLYvJBpP1p1KuHfoVnqfjmLD8",
  "key12": "5KPaLYf2QqunCLcZQua476sL8oKXRP1LA47DQ2dSS5cyCkBkJBAkkPNcQRSKaLLAwhhPo9dFUVmyiCiXme6CJPBm",
  "key13": "KzNQ7ycHsMHyLnP3Qcs9tbEQMQyvFmwAUutSRodDCfkBtqR5J1rLFtLaaN4QxHHGjhmeXCwcb2q2J9hERbvmEdK",
  "key14": "2cXoJefc4ZYrtBkSL9h7V8BodqmX4puJLwP6JrLaMJeQmZcwxZxqdfZspuVVqaHnFLVnfPzgYWMGQ7zCEC8PKQGG",
  "key15": "PWTpzXWSBWF6mLdxmrZsyiD2QFGMVsg5LcNYcDSg5nVq32k7PdiqW4gLit3P5fN2mdg1SrxFUJTsKFAggY3Zxht",
  "key16": "aWbVni74oWPXxRWrpVpJpyMCTdbagjpfuDCWkX9DpdxMt8qy3kM1n2PAx3j6vAXJxZHrwhE9HJUUmcv2f46bqVE",
  "key17": "28vDJNkdB1SN3gDqWo1TQ4vKEn9wuYPqpe6LeKbcGaHYvryHjXz298mBVqbmXTZRVKRG8Ap5UarNGLKRG7v6NCLC",
  "key18": "5pCaUFmxDEkFmLaczmpzdYeyrM4tktxw1Qhf4EwQpXG7NaxdczfeneB3zy4XYWzgxyTFJgQYQ7Fxfw1JFQ7L53KZ",
  "key19": "53WP8YmKHaamT91ci92sQWLh9CTGhXQhsTsr5unwpucHVY1zbcg5iFWazVCQ6oNnshEr5VUMzzcYYnLvgSwwe9Ni",
  "key20": "w5bh8C173pg94YbAbA1pomPRquiH9AUMqEVU8exYzVXQYJN3yLoCbZ4PHwLeN3WZEYoVPy8v2Zsn5hm1eaP3ojy",
  "key21": "33n264NYNc3e8awKy574dYpPKjcmwmmHT6WnjzHfzRfposEkApJNsE9ZSJcMjsT3CcVjBrrQDH97MQZZMMyjfTve",
  "key22": "PQcXpbimK9y1tJC2dmnVuTJXwNBvHqjeQn3FnrzKmKsQG56KdBHVgJdL8rsKLbkUvTeERQn1PgXtibcjfmjSebM",
  "key23": "4mRjw2cUjmoCht8FRmbqaHeuAhLaoJwW5ypx2EHkNv8qFTbyJuyeJsaQ2b93JDTxwBo4Z8qbx4YW98ruvBRnbmv3",
  "key24": "5yGpmTqqop8bPUf9xYWMAwtusVsdy43oUZrdwapQAZXAgNBSqDPiEoaVwdkD9tRuEkg15xgZteXm7D1T7c5i26E5",
  "key25": "2CtzCaP4XAjf3xGtHPWvE8CFedKS6tQ5MZAYEp8dbo9Ev4ZJWWHfk4JNeuwri9rzjynABzXwHytgzBjrwKcAQAfP",
  "key26": "5YPzwXwgjQpiXBGtFkT2Tz5VTBJvSaTQe5Fs5hobe8pHzfYcfzZfm3EnXDtF9KLwGPrwgeUfFZHjZFZNfYZN7NQ7",
  "key27": "5AZ7T3nydE5PiaLNgzMDTW44JTchK85aLR5KeD1VfXuoRngxsJbcMX5UiskZaUK8XKJP3X5QpaRSDVn695QG6tWW",
  "key28": "tTG7z7YZjs96yJQtVUhpGU125eT69AaYgrz1Cq8gxo7jahpmGDsxCmqjyApUkz56X824Tbh7CL3fRE9Dnn1A9fK",
  "key29": "5SL9ituJszi5wzFJqBwu6xV6t8Hx4BGVPBtMRwGuCZ3XgxB4XG65wveGhQorKC59UqQXdSkqQNet4TyqBn5hiSt1",
  "key30": "5fDAB2mupTt3sYTAootz2qQChvy6YGJMi5Cjf3pnxkMY7ejStuqVqnJnHoYcScqPVjq88mmHSTWb2aGq6YErUUFi",
  "key31": "HHoyMworFZTp6srPVqRRfbATxYs5RBztJYJgW8W4oqMvJcWP29xHepLAYzyceczJn54G8pUrhZXNfeEDENrYuin",
  "key32": "4LF2TrRUq7mwyD9ksx7Ge9eVen6oZmMZiCmtTrMqGLcBdyc2AUYmAMTpTWvon6UeghNube1F8qk3DmUbBh2ajsFH",
  "key33": "2o337NhDLvKzobNcpk9eb1ChCgvZfXWsRpCk5wREaWDwBBYPDmhRdgUMJ6SJ2tjyNCrxZxbz7hR3SDuZr1qrDe3B",
  "key34": "44T8Y98otHmawHwpdAtHTLioJjTWDobzwM4m4AB1FDHiAgeFxd9nHXR2LnzfhHPN42rmRwo8gdQAFGUBAQgpbrCQ",
  "key35": "2ZnPZbwyUPevEj2kg9BPGS6g9uD6JHudCyRuwLZvaaYdv2Atnv6iyXAThtEx6fC7GW9gTyXqY8N7Rh36tzhdLNH1",
  "key36": "hkpXeLakCiEWgKyhq21Z6p76iTmr7bLMB8aVvYBkGTxL3Pn3MWoQbb5YPFnWfUT8wabts2v9Bs7sYvvMwazQg9J",
  "key37": "2uCty2vmF4wWfpjq6QG2nBeS7b2ATWNRMpDr2pYu8FdSj1du5As1m12EWSe2gZGNcASBykpNXhWUF62R9L5Ap65G"
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
