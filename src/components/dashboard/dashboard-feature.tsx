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
    "4m2DwZZfydR82cbPNcYmA5VdP6kszVzM686QGfCX8CeaQ1MqKKDKkcygtKnV7H6eFkaDbowVBMc4ffkKDAurBrdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxMQ8NeA2cGJVBUGtGgVaH8jz1zRXnTSCoSw9DMXyA3KJbgurrGNZa1hUrm67PoMigJs1QkNtqb5hJxgEfQCauW",
  "key1": "2bropwxyvE6QrzfdSqiYTbmUzseLuAH5K5xhDuYWUutScL1sfYqDz38PqrCuU1RF9Wn5PGM5d61LK4DTqqesrAav",
  "key2": "4UcNQTdbAnhZaZDyqmBnKXaj8vpAyZNiFcnhzMZzRXznY4NkEAAKfoVKYzGStVen7TGAY6cZVUvUgyu32vBiwyaQ",
  "key3": "2ts9rEE1qhZrZdR5CkZcaeB7Cs6L6iYaWcLzmFfaqw9e6XroYPbT5KaQruNox6VC8UnA287RmcaA4XLfeCVs4NB7",
  "key4": "Y8nc5LyyCiuoGqiXVS3emtnEZpjCU5SGkrAtCyHTU1kvxbsfvf3n5rKu3CgBFM5LfTysupq5EvvvTQg87Hutzjr",
  "key5": "5E5c3gK8n3kebgJMMKemkYkjAqqTirk5xma4XhH2GPBTi2WYLVsjMq1W8SGFMuYb3yUrzBvcX2UQ2h5Jmme9L6mP",
  "key6": "Lxsgfumn6HoXE89jV3b4KumxTCKnKwv5fJUb55x2XrqR1HFmQbDTBfTEtLbag1bYfZXXaTF8nn5q2jzGbfJ1txb",
  "key7": "3nn2vJRyGx8RwSgEz81eoaeosBYaZ8GjECbmHQNsrFJW1iJJvGGGpiVgv7TD5sPRByMcoCDsSKoomafyMX3b5rwB",
  "key8": "2tZ7MoA4Lt1zpNseGci7at5Sghvfm2nm1CYevd4vNJtpC56hLjjwXYe8VoCWU3ydU6ZSJG2uUfpTxdfcaD5bqZpQ",
  "key9": "1821WSCFSh33p6kkUZgFWfMVi9TZqypc4922xa3MaTKmYdHmE9ttdKeK9qkkWAnKeMvsRa5WSj5xWha5nZTN556",
  "key10": "4UymyXyxyRzcGgha1q2hzRcwhSeZNUdS6BxzAh7sjGTPV6LxuoHEespSCfHifiGJ24vMPmpUASE7KkjUso3R9DF1",
  "key11": "3iDFWmW7BaN8H8ZGejRVkPZALUqFY6fRbUAebeBBZpG9Q8kGQkEjTMdi4xAjbqa8jX1zvV4LBUD1CgAydAoBKRjq",
  "key12": "5Y9ExAtYp2Sx5YxTiYq9hzBLaMcsCw15bQ6H5o8va2g3awNfmPUmTsifhUGbSK3fX5Mu8XWh2GnTZCMD31k7XM4H",
  "key13": "4Z8pfEdbcrX5HcVBF6K3zgTrb9n5R2Y6QL5WQMvT9eXwN5voufZfaN5RaijWq9wNP5tBbn6ZnWdqphJv5wJui3bd",
  "key14": "2s1vEo5zPdDx14Dot5KuoJBnNxDVDL2vMZTJBbdDykLmZikF87jzhYuQVNPGPwNLDsuLFqGsz37oj8jKgXCr4Wk",
  "key15": "FFMETBfQiL9qJ6jn8z27B5kc4v22FjNS6ga3kcyQCvWkrqhG2LSFsKpQUN43DTjDzddWN8sCP2cxMDtehgDudDK",
  "key16": "26fAvhFxbnRnxb8HhKFgc43toDoM78A2A5WaorXiTGc5rxNyJV1Tc4TEdyUKwxGLsUzQMsyQgjH4G91JMyr6U8zp",
  "key17": "49qPpn1EcXaCHoS6qrNT18yqjtdS6xA4xLXUapVUpgKSUprEc2NA7341wH5wWcXA2yoi4VxwazH9AJxHHc7YAvQQ",
  "key18": "dxqYydC7jmHEFp7aQpLjHHp7pVnoQeo3yPkgq2FugJd9zWfMmqd9djt4dK2CdPB2JHe2bhYm2A5JfCFojuU2kq8",
  "key19": "qtqS3MgtP5v2kdzSUMFA5PFUsFVjdTow8EfnfGJSMTnjmEb89goKgth97yvnaCpzF69dUsxvcnM6AEdPunoVudD",
  "key20": "4RgyGeaPrZRqYjh2pUbzxmu6rv5XvBo7xPLwD6QsboaqW5jbxk9eLWYkft9jFrQJcX42hxbNTfqQf5EixhLyMNak",
  "key21": "41Vwm6b3CYkYzwTzffELRLoTnuWEqZxjh96UEqQqKLxRJu2mfbU5ZBLF1W4CtNr4mP8FnNFVN9xWTR26HTQSKvka",
  "key22": "3pWAAh5HJ6u7L1mzT7K194gLHAhV5joxpvxLyyaWtHZbr99v4TVSqko9Pz31BSPh68eMoyuBp6eLPTSYE5GbX6JM",
  "key23": "4vATsXF73d1Qocb8uToW2TsU6FiYYcRyq87f5E4Ss6523M1omXhq4W7pBYGw5JVLR3438PqeDPYGVzjJTfL9L5Qr",
  "key24": "hVGuAxQAcFJKJqKqWHHuSQzLzQPXzZDpSz7PafgC2jaRzmMKMJPQ3yfDM9MZ32MMEiVDP76ezqnFqd1rry5r5Rs",
  "key25": "43shVtszyhTtwWbkkytJ7DZPehwLY2GXGaHP3oR7nooWGF72nZSv7pG6Dt6eHuPEQ7WMbAWoZkteFdgA4LGb9jqe",
  "key26": "2q5xMGVAKAwSCY9hsiWnUK5DLQ6qTjcNQcQgdsYqxieg8PTtdQ9VCAVXYdfiDgFAk4DGmmMUhdToQhbAMHE6GjES",
  "key27": "2G5asZRtx9Jk8Rd6gpWexybDRUxbBUYUiG78rubz1sVu1t4xVu1hYmpnagvi62sB9Vf5DVsEigGw2pVQQh29RPbx",
  "key28": "3xSjs2mM3gybHWbGeL5ZsWXMD57m7L9uiPsEJ2rYiecM69JDmENyfsLuyFs4qZej3FSByWBJqXDxhdJ8eSQBshBP",
  "key29": "5JLygmTfvo8YfwgWM4GGKCZ3oLJVnbwvq6PVAZ2JA8V2q9kJ6hDCzG2zvCKUTaM2EM2qyeLzA7u5fpyE2eYMR4zj",
  "key30": "4bnWkEVZWbBf837S1pM3GgMYap6xBrRJcRSLC2ZHi82LW71s9GBprRACxA6F7zEdgCuTdpgZkqj4mrbCyYm6pYuF",
  "key31": "3xKrYgUgdE6cxJ89PKdBqoeBHDAE9ej8PV8XuKh3534RHFSSk9mim2Mx66LBmbAZZe9T9EAkF1mfNHPZMmo8whAL",
  "key32": "2tQr2EERBwdXg2MRHybADSJtF2nn42uyBUw4N2CZ5KFnkdj2kZgaRdom4BEzThuqQLWpRtuT49xkaJpdLycwonLq",
  "key33": "3mHxeSCpHUkawnMcramwzVzmwmyRr8tUYgaHH1k1LgAYTyGs43Nc4y3UiaLi4DSHeVipsn3DE1RyeRLvZmwPu1oL",
  "key34": "51i6hXLy71b7LpVkoPALRhJdv1bBBsSNnekv4PLqkjBpM7jTU3Q4FkgsqkibYBCR8VNtBmcP1K5Yh22uGYTAsQes",
  "key35": "3eMhQ1BoM3AHknyXoyoBiRsPSk6qoBDJ4FzPZsJqrXc2CLMC7TBzNC6X1ofbU587QbVzVFbLAmNqWNGa4QWuHffG",
  "key36": "5gp4vgPN9dXwrneK51nVs6EoYYputn5ounCHaiWN3TJWCKfJ63QovfaWmzU3Pds9NYAUC8MLUz6oXiwWJpKsZDgj",
  "key37": "22ftiAvFUeAHEKwSSexvvuuLrCGjmtysAcZqp3BC8kF7kXWzXuWv5ExK3KJF4sbspSqd8LGGGLxqitdEFjctghRw",
  "key38": "2f4jPnwSbRi7yXtDdGr6upvS8RZdjmCP23jTjDDLK3VAX8v3qQscYVxVDVZaTX1AEgHiZRvzJXyu2cPzckYbfmHo",
  "key39": "3uEHnU96JMWdcZ4QX7mdjqwUxoJBXs9Zyi3KQRJu2oQK7h4Mq76bTbRbSaxeBemPrPGrg8K5tUXrzhCqma4dHqHf"
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
