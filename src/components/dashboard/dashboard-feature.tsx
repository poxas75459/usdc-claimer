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
    "47J9F2TXGcwdtLKPhhMV9osdRgpPxWWA5JPDL41KiHhVVFUMY9scSAW3c3p8daYLu55Rkr367mAV4LxPYFCBoWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6s7yCoeCxsVPfbuLnZQknifNgQX5YBB3z9YNyDG3hkEBhiQjWGdQ93zKUxGKKpSBmT6CimMUM1JatEKPFtbHhZ",
  "key1": "2uaKfiJLh6TQcHJeb7h1MB6kz3J3NLpH9mzxXLq2kHFqCkq7BDdQbz6iT2kC7uxikNMLq6vNgg4jjm4PpBcq6GeT",
  "key2": "3p4EkXaJZsPADQUpmK6UZ5AvA8qQtMXFj6g7AaHMZkTfnDiDPVrZYJJSGduJsRvqEqTqT6g4TJnv7xtcyPtD5kB9",
  "key3": "5pW7Nn2xN2zG2Kc8sFN15iCzk1T1jNzUtsPwH4WoeWTTikKMCshgJNAdweSoTLLRht85SwrdgGB5Gcx9PFF2ZbnD",
  "key4": "34ojWMFM64iLXjyoANDtVPcxaektL3vH37iA6HKpJEnMaVFFN469mwJmcv1ybrmirFQkfRPxXp6tghVNNHaxpSw1",
  "key5": "3YXekVNMrjfyqTLb8AJM1PHG8jbmwx4Vs3a2BLDC2en1eRpS6XEmd2qRcrgPQgGHhZhvqNkMkvraL3uo2ccfdEDV",
  "key6": "BZ7A4ALRNnpBUhnitSVZ9UZPTJqkcPTJen5U8hFYQ7bQso4FpbJqMxZyriTquQcmiY8ccE7mJCY7ECkCfhtwrbP",
  "key7": "kR9YnJysNJRzaoWMyHVJepNHGtzQMXR7YZNWxg839Rg4SVYfCjgqvAqBTTKBuSYnDB1Baauv3vJkm7P6wVFPiQy",
  "key8": "g91LD7y4tuZhnRY2J4Qc91ESyX3Zh928zeTmUUZu8SmkbUeFT3icc4U7Ax5uhpcJTdYqt8BMQX82w7qaWRUDvsy",
  "key9": "67b2SEy9mBBWnn65PhRpDLUZeecm1LKzfr1wBGwT4sDeL4BXxFrpwV5z79bSQmwEmgZDmjqwTHDLsQUkWpBxGKfP",
  "key10": "4PyfdVcqZSZQHbg4p3jQ23xA2jPkFSgBwUHqL9MuJdu9aGJTVEs6jBappa9HrTNCdV2bCnEerjRt2ZPjg4yoPhg",
  "key11": "4yWLEpZRWPSk9zjrZroDhsA76PVYhcM5bXCFFiSzk3axMQaCVo7qyBE9Mh3F1W1ChbA6ruQmbVRnoQyDMGVMpq43",
  "key12": "3HSGntQBtTyUuRupaBpQWcF8Kck3f7D2oXHVvYHJsmKYQprN7JnQp839jbAgckCEG5Dt4t8zndZpvNAJcSxv2SfS",
  "key13": "ry5swKcuFTNjHbFpTpYTEk4wUy9wfQdydnkH4VLhCvDL9pnyyA5payXayKRkdsuiPM3HCYW2WE5oszG1DqGGrXd",
  "key14": "5SjnSsDdFoUf2fo5ErX2rzxqHxKeJzs4u9TtPQos2oWdEKdfJvKfmSkiHgpQLSLs48gdSkffepxoRB4ED6rowm6w",
  "key15": "3Qot9s81CMvhhmZLHqAv6aZb9WsYgvb87eTbcg2bmsCYiU7RwG5QKxA1CWUYnGmJWg5TMPT3UCWuTECUgYWeh3sQ",
  "key16": "5h3RoKbRcf1aNRGAvXQXwbzmwtAbWmPKJmZb8NgNxUF5hC5P4s82tLa4kWpDoZWagkFJdTLUeKv2g1KxELH7UjRq",
  "key17": "5Xp7g1Lp9bLRhLBexJY1cgD4ixiRzoGnoReofSEW3NJDqrNi3KQ788JE36JEYHnKeVJWX9XnvRV8YebcrUHAQKgF",
  "key18": "39jHVJdr4KQFLPw4Su1WDgA6jDajXNPjm6qR9Y3dtoT2ig5x5rggv2NYAo9PwdMB2AMAgHJTePi7HKc14DujRJGv",
  "key19": "2tczXaJHiC38QXb4upBMfDLxMg4s6VLVPeqQcktX89Ud8UKFnWw44kx5YqQ73xC4sjmcSiZXi6BL2ewkkgDNUzAM",
  "key20": "4z51qH96zLKGZByTduGLdcbaT1nY83p2xpRrYt1hji6V3io6s3so2YQJS2CtGkzrdj3RHmKaeCvdEadrYx3XuxY4",
  "key21": "2jZt8dqvmmkf82BamiroBSmABCGAcDC9XDxTE5243SZvMd6dwUKBMeEq7Gr7fs9HPrkJ4GvbmTcDVZayYTx1R3gv",
  "key22": "2PTRNpVa4ZcVjK7MkfaTFrE66ozF1fTLCJ8bMj8AeazMK3Uf3HUkBfZkq8SofCFjfBe4nNM8mt2PrxMEJBVTA3LS",
  "key23": "2onhbS8AGx5Hr7xUvzpBzZ9diPnV6fdmEk8YimKrhdW3wXbDBRZ95tUxYqAoiA4ELb7mSMjw1UuXZ6jmGz3kX44i",
  "key24": "4DxzwLVS1JkP7daefd3K1NzKQNXiQpARFg1Qrp3TBGtdsgV6L5T6b4PRt1eJMWVmP8sjHVFuTiRQTmKmVitQnrx4",
  "key25": "27JBHjpUAfArMuuyr1HrqWYV3oCZs3izGNCcz5pwx42fTkHapY7pvN1wjqCYMC3F68rKypZGYwAjxdK5biQTgCiz",
  "key26": "5Ndgt8idaNtLMqY1wfag6KTLcGodocec9UqjbPoDWKyYsdtAh14wbg8hY6b6Z34EuFHTfZCgbfRCVdjrzQQqwixw",
  "key27": "5TVGU9gQwRnfqbWc1FRDPLMoDee7aw76aKJJmTSCnw8Se2kmpMPTDu4XWumbuNV9Hsnzntv3EMH4T5KsKedhmcqs",
  "key28": "2hucQ8BPYbA6Lu3Z7mUqqiNRQ9NPbmzZ3Z1MNKYcYWfmXvLYmZr1EH69FcwYQE6fZuq2xauPgRBS8Udk1DsfhxUV",
  "key29": "4Ywbu57KfqkzVN9Y7aQrqdsPaGoeghoXXm6GnefcEAHjzGwyxYGzwfmkPH8m8xbidQzPTaCfUET85UNivpWXkV76",
  "key30": "2beasLD2teC7VdKhGzqbh6orL5yG6Wpdq48eEdUggTgbNtzi6xq89RTVHFBPY4MScMzg9QUZEDu38qJu8A16pKE1",
  "key31": "5wjiTvJxpNaaN3NtgYGSPSgrSVnPdAmf15TqUJRRs4Q1k11Keg3Q58PXBHWShR3bCzYRNxMJQtVj1hSf46FuQrws",
  "key32": "5FYEk8KDieJe2Q8jRK3aGPh1Drmn7HZvBtRM7duHrzBAfJtsEEt3x87e5jhuzxoF91mnR15HFtyUUHHpFHT5pCU1",
  "key33": "4cji4jRLjyZ4zYVAAykZN5V6fkNK5j5GqxrihrieHeuJSLghurifgiaq11hmf2FYNPyJKJgdKFGj1inB8FLnhzTU",
  "key34": "3yV69iC8GPkJSwuzxxDyrLbBXqqEy98qhqEULE3xy9qSzr57L75Qtcf2QJ3pDn6sQ9SzUKqbhNhtw71dfRuXfbxw",
  "key35": "3XJDHT417r6Jbcgibvwhuw1ER69waxNe9eU2kb2q7Pe31LYvUXVsBpgNJenZ9qchYu9NTDGtd3w4yMQB1JBUzSTu",
  "key36": "uNK4G9nMLPuxDqnDoVB3VLj6RT9VNpnwVeZupa5P9gp4tWg2iL6VKgUfc47jvcHUvNuhkmt8ck2XiJAtQSV1VoH"
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
