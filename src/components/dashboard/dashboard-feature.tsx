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
    "64wtzAH1wc24wmPSrJU5MG9fjUhYcUVTziSeb17Rc4V5ULThUQefYrtM5rhJeVE4n4abTcvreGpsCbmaw6Lx1w2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JkUqoDaugFpmTbWP2R5crBwa3T3XDaVeTKLGjdckdEZBEDvEneSpfRford4FjMUwpHgQnDayyNSRSBo2rkiupM",
  "key1": "3CFqApM38q2ueEYSGGYsynCqNCRjUKTkECtw7Wng1iVYjBKGbN792u2HTuvuY5J4jzhNSFDXUJwBUyptGhWBwRDH",
  "key2": "5UoaGDdJuFAUu7XVRu6872J6YmYJVXoq98agVLxrn9wyQeJtfFgcBUmyUgjBXvGQuGCDqNt4tVwjM5fqQRddPnpR",
  "key3": "9CpJMwuh8JrWTHABS9aGcEvApi2aX1yEzHjCBQpXiwc6dAbxZ4TXjEdCa7zL8UknD63we78PpVS2Jexz1HLxBL9",
  "key4": "2hpt1WrJM5pzUxTautofJGdCKZcKX2bnW2YAufjKVjxorThBsrzV7W9MUNWoBjztWD53Biz4np5eaSamaThgRZwj",
  "key5": "3ry8RNNwf5F18r31VMZZJQdpbukVoUWJiSPyEA5J5voLqVPzhG5GWGG4nAfZr8PSEVU9oWFsdfCTSf5jmzUpjYTR",
  "key6": "5T2VU1hJ2LRXWWVeeTmziNf9LcEzTUXs2G5wrfMsBcZE3z1KH3kgwiiDQeJ3k6n25DXUp8xfZ9qNbo9rvPcvSai4",
  "key7": "4C7dQUZ6XmRYzT4cbMGViedYmAhnTfqRparTmtJKpeUQND3r9gVykYvrSzFmCsYX8DaNJJ3ApS86HNwYaqAtd5UC",
  "key8": "5oCq9MP7n9BTn7z62eByF63AwSXk8SYuTWnM4HZqJEhku2HH3UNkY8ZimPiymQGYiGZd9gTV2T3QGYvjZzKvbaM",
  "key9": "4Jkyt3zG1P49ghkkLdMZzjjxAYPQo6RtKXLtwBt7i81QbTPMcxsxy384q21LTHmNZBSQknCUx1YKkjsv1CNaG5xK",
  "key10": "4THNWrqDEwBmNciyRyMHAdsMJqRUURjCCQQeDPEWjwJJcxgy9bgnBTZJLF81NsaoA7FC9tkQVqATVSPDKDuEVMtw",
  "key11": "22uA59gJyJgBXoMf3gy8pUmbS2CWGHurkBB5iSYd8mWEifSv9stcymAQTfppYHGRn2PK1bS6bcWwokemwUnW8DdT",
  "key12": "33H7EucUWMVgEhVo1eTBBfRJ75NDoSvHpkF75SA5q2v3zab2p5RBrbUwsAPMu5ciZup9tG882HJGCPKEoBGDEj7C",
  "key13": "4x1SawwEgvMxQqaq3SR7PUhdXksaS7MBiKubjEJUFZQSdGVtLMyoiq1jFHCbBCJBBpTxTzDDBPFWtmuzCjnFkYrP",
  "key14": "2Tof4zW4WpycFA3bzH7vCzTDEwHfaDqRHmSiz5TXmMbHRU28snMZoUHL34FKGeHTTHf7onJACWb1f1tZetXSeDCe",
  "key15": "K6eKZvkeH8CsMePo776xor215DFBPV9UX27Tz6VGA81BYRyFKnqVRhoND8kykXSh6WAKPHcUSFAiVmgHqKCwvEg",
  "key16": "3VuPXMi9pKfx4hpwGQRYXVQvWBEkvXwi33T41b7WFTK846RQ9PZhXy1spPShy6GNqSzghkbpxUXJ1ddywHTUfHmQ",
  "key17": "2JGLZvNqVEDxTyTZNymKvWrS9NZpacQ72pYBc3V8wbidEGKRGhGncx473nBkA7WrqXNkc8uVYcL3mPTJhNhWCXZ1",
  "key18": "UEWrJgUjSAbXnBBxYAoTY7LQQ4LWuNBw3imGR9hy34tgWM288GGtwGRn6yzZixvg8JzKF1qtQ5quQEzjRgfzbqc",
  "key19": "uzB7usV6CPMuVS3nkEnt395Mi6tuHvB7vLDnAjwDTArgJYUkVTjGWrCatXyhvrzPMySK2Q6idN8NZeV4xLuNCCg",
  "key20": "4X2iXuPsDVwFZNYHSBpRPfKchf7qPJW1mBzfVATnyunJZy22Zp7VPa5SCztLcEF9QPjv6vLgdACpsxUE1gz1NUNU",
  "key21": "5bpmTBcVVhe76NPpc7m8jaRCXrJXyaoZzAScJqhwShNephNAhozZ1j16kQDR9fzexwJZAKKx2WyW6RvGCH8vnnN3",
  "key22": "2PsQuCzv6wyyFxAXbrxQKFgpuAQcfPDcyQ9vFmts7d17atvRXamZmcKPUBztjCE2bjGQtERxGqMEcPeaJftdL8iP",
  "key23": "5D3S7KwmfVqBnPAMSe8bUA6FHtvhwJKdeip7Cva5mcwToB4kr4trhpwAhqzhhijptttChVmhj7ddK9p86WSjw2J9",
  "key24": "2jMF47Z9SkzK1kgwDutwBaBbzjt7RrnuSXZseLnmMovCrXfKtdKcBCYLiXtWn6S6eWFoAh7jVWaWHzDqyf3T3dkM",
  "key25": "3QDiMa5qR8nSeWhRzQAV8uckoiDbcb6chhoG7iaEorAiD6bKHdc5Gbi6XvXrqSPgAxE3R17YXivXBRb2gpqcFfR9",
  "key26": "5PAxQemxKA71GcrLv7sscXuR3pVtFD1A9eYm4DnYrWLvCCdjQJPLwtCzx4WbHmBLqnYM5KkBqJi4j44A1ky7W3rj",
  "key27": "4Hn6rq1fbwZseGsSVzaxthEzj9ktxpZhrkvySMj9q4KTfZUgw61GiUNZcFaFq3a1Zk2kfNFvfhBwoMHpyP4rV73e",
  "key28": "3wd4zhyxrygRkhssRc3Fs3mWp17vD5yioJcGrQvvfG7TmEb8WdC2FCBXvrkD1Dyt5iDfXPTQBm1tiMPUVGwfudjL",
  "key29": "5W8by9LGyqhpK893iWhDXE96LJz5DSGSxt7d75ErXLAG3ET6hCqi5QJDfyKs4wXY8VfuapJbZKh2PH6YuMmq9d7Q",
  "key30": "3PVq8KiE9ur6r6RHfKRdd4y28u3RUtuusDSdZNA1tKMbPiUc6xkGidDHERfzek3DHQHttTMguJxSPKTF1yB21qYx",
  "key31": "34M8kfqp35QWSGBmk5Kmv2gb5zwxAvzN6SnASgHgUT57uQ1PGiLeWn6PAPsRZiSpNa5sukEfCjrzr9ZMcK7aCLvM",
  "key32": "ZJSVNoQgr6YuPsVBbRjX8BX7xUNrXVvCYiTQdht37VFu8deixzKL5q9BiaLDrj3QhZxk8DZvoADPznXWWcuqwEa",
  "key33": "5wAaWF3aCWtDiF6A9cfH3SGrwHhjvtbhATVWGannRwhTfwqFPeGX3APcmwamvwTCcv7UWWYzxemnh6UqZSmeYeE4",
  "key34": "kBfiposdauuJppq7Jk2jaCRoMmZ1XSdg5Jrgr618MkvfTQFN1155xBWvAxabCvDBKRmA5HYLRkJkT2oGeFURPxZ"
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
