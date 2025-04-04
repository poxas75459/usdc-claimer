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
    "5UCWxukKUnR4mVPxyT6TaSbRGAihY95KCLasFAN4BZyifErFV1jDiAmDXwktckPSapFzDFUgZuQiQBJetEe2Ji3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnguk1UexXnM7npuj9xb27jEvhdfWECdWfPi3bRw4TWDWaqXDE1vkM3pc1u3wG4w4SqyjtmvHaVed4XpmarW1U1",
  "key1": "3XoSvh46dnZGYoVgMpbwNgFnJuWUXpfv9VmFjShCQEXN47s9CmjR2MUe8VpWU7HrBLYajSQwTg6xKCkt9TVPxBRi",
  "key2": "JmygrQKm5qYhUkSYBVqxukjAaPGJid6gfQCiaAw6SZYAW8zuoniEfJmfrqJtHRh9du6rDDoT2bZHNRzqLC2AJVZ",
  "key3": "21o87YQTwwnYA1i9DKsn5ZqQ3DtR7shEuXSjQqxZcVuuWobH1Bemo65JfXmvfrYV93CvSXD8akS1n4xgHg9u9tyN",
  "key4": "36TSTqEyuk9vBGmsa9xuqkuh27eUgaTgCPLkzGFy1XUWZQgb7XuvhoLZqRecbqNCkdis9xzzAr8o3RUG17NMgZNU",
  "key5": "29dQ7J33za8b7Le2JZ95whJsu3Vj5YTibkoVjhmdQXae5zuNCHa29skSgAoVKgLdH2Q4e7rpJJ1kFNzEt1aJmZR8",
  "key6": "DggoY9uch5y9BBquFEEmGF4HKwpF62bk9GXUXqmkKMQY9DKpNBgqEwqPvzTy2qKAWsfpKEG5QTnM2DdqaUc3hZp",
  "key7": "63sz7QvPpnoDzeJzoemT43RKANHLUyW1DT51SsGYRNsHdJpPCArCJtnFw6188h4pKUrVo3BtmHzmfk3tbkStD9X5",
  "key8": "54yEdCKB3EPKLZWquo7WCKzgyYb5F6dgFEFfBXPy5t6zDoNgXBjdJJFQm9KiJfUDBiDUWjMcQcQtHmXSYb4xE8iL",
  "key9": "5tXqgoVh6VAFJvkewLAwQcopw7r9d3q2pMwtKXHju4WfkiC1ZqrSmEYaN2LFd4CR5dLYr6UB4J6F5abb8RKgyrkK",
  "key10": "434XFJ7qTxApT7k8hXp5cPPvqchFHHGjkzaxzZuXj9M9KT3FGjPpfBDESznxWb8gfVxgYp35t2vtQb8tuAvTZuMY",
  "key11": "jLJY2zz1ptoFmFKHJJZGVXLjEcv5JjU6a5fNmSkuydRKXbeiJwhCSHYBeMj6EgNfJEYGNwJaMcvYzAskVfAgFyM",
  "key12": "5URrDLTh39fQ5T7mQ5DpPt5KsT3pGVQw7wBv8a841sAQtP52PkJV9MAMRZtV4ZqAdnsGv7HgKVGGevXEcdcBhShy",
  "key13": "5fNv2gaY7E5XHTTxArVHSG26iEz5yPmQKk1dciUx2YDszKrYQAZTA59QNXUv3D6qsB5Wp5TjrhXBTbJeLzRAPtHN",
  "key14": "5HBBK4rvhPRyLDRtoBRVHzWR1L49G5UDzhwB2Gcv1F6zp4YgDddgeTMgEGFhHxX3xV8BeFho5vDB1PxP8NYvudk7",
  "key15": "2cUeZ9egGXwzmEsynn4y34Gx98naPmv2u8dqdN9ssi1mrJ1NKS2Gm2iVx51wU5Q5jTxmNHBYWUsKMpN6gUEWZ5o9",
  "key16": "YAmsFud85wFwqdcrQ1XvCkVxvtuK3VEG6ovmT7FfareyEEBZ1v8MYfFPRRkgPSPkCFy54x9f43cwYUzoasXhYFD",
  "key17": "5AiqkbeAMy6csCF5qoVYFwhBoXxuPRLWwXoGPXYCVV685uL5Jx5ptEeiZBDk1uNvWdsidwfBUWPfsUvacPbdn8T6",
  "key18": "3VTeQspTLRzyEHm9p3K6Fgapf1AvzJzv8A937yohwxg4Psmqc8r1g98qteQWCTNx4s8Dz9cfnuRz5bVWvjhtqyDd",
  "key19": "3kBU8Z4SLAA9pV9WeR1mUio2jNG5km6YFshTLFSydwD5VsrgCaQQP1Lj2FdCRLyHoFNG9v33w1JMphZJcY3uV6RA",
  "key20": "AbEHfUntzzdZbjzbXvDFGoPjfgCBAW1UYBViq4qz5UCb7AEShDJuLjToZp2GqMcVWUKxwyCRtDPTMSSF4UswsE7",
  "key21": "3geJvr37gfgeuWmeBEGdCp3i5yeV7hCT22ACygmF5C58V5KQLK1XQsYJyMsbiQeJjDYP7XhQnQCiyABmfkrwKtSF",
  "key22": "3BnBxA3iqAo1oHbznv6dwfWadvka3MQbc5EhsXDUf5UzkkB76h93KubvUpnZqK1LCdE5y3grj66wecLuPCwxbH7o",
  "key23": "4xNV2P9UXkRgddxwrhtcscs4rpb85of7Emnmu99W7z3jLMENEYgUcUa7XT76RoqGGfjfoVKnK5LYPLs2Xr7sK7LV",
  "key24": "5dj9J5iW1GQU9p73ZenCPiqUoFSR6WvZthZKzyJa4BsQdTg4ibptQmontoHfJot7p3tVmxNSPzJhNm5RU7HdXG3W",
  "key25": "3bmQ1SxiYcrPGbPGtHdZzcbzn7c4tqHKgbK9bJtdayS5Sw6jPqmcgwcj7YzHaVDwHTccHaxtWc2aMa5jmJATFD6h",
  "key26": "38NvaTRu3ZNcZEFz7BLVHAscC5jkFdmtodVGjPZbKnqvSbawvxTVr2JYWhQYiLTtgc4xsmb2WBWbzVKwXJx6ow4V",
  "key27": "2zE6qZUTSkAsp2wRKA6hy63iEJ3emHyxVvVoYeh5R2UveH89sTHysbCYBNcwnV4VKFxxKfCRWpNKiSguFpB98NXU",
  "key28": "5sTNA8aG9bwwkMEwjR4ZBuKQAqsriWS3X7eV3vSdm2SY4ZbCfrU1YVDzkUQrmAMgiwkDfdHU4xr6SkrZCDYVP145",
  "key29": "i9hm2WTPvREXXz7RPofCyE9VyM63opXE6LfTVHcu4QLRChhZXUsUgcLFWm138isWP4LoWKzj7YB4rL5BXBBXoTA",
  "key30": "5MLhLkuNAcDdMXzTsmB8476bhVWfMWtevxYPBWL824WDykVGnBtV3MUdX7WpJo42DFrgUqwVeSEDusFFwhE87WPw",
  "key31": "3HyFQMXqZKCjtRkqZ9h4x941DaWpeAM6xfNUP1WcrRZ89Y798cjNHmqumgWYBmo8oKhaBx4sCStE4T24ZTbMiEdt",
  "key32": "hjoPs78vWMgUZPk1n58BFa1DUk839GG43KFTYuNQAoaSjUuJbGfh3gpLtW5pjvr5cqWPLrKFXsrcVmczSAVT4Bf",
  "key33": "26cvFVqL3V4y8DJgeYE42XHYYr8mKgJMJQT7cnici8tuQHFwHDxUDwfZgfLmkNV2GKA7gFHvpXRtCQhTsLQJLSpP",
  "key34": "K9EVU2d9DaMEUWiip8xRKmTuQosnSmTDQyFEN5UubfZQ1ADfe8rUXHEgxvYhw6DL5NyXgrA8TG41XRS8DiB197x",
  "key35": "wfLXAuWaeEbv7ZQ7xhM2ZRoLFNYyNjri5wubcrTLT6CS95MbRBJnqn3KZF88uPpxN1Q2Whmk26vfVFSyqp9P9ng",
  "key36": "4D1WSc3qsF5fBabq9U6WGVjqSdU2jErZ4sTki7QfFXz2MK6hnSszmvpVg5KUzv29Sn7xD9wJwHnCDYAeCHLekP4U",
  "key37": "5pF62drB2UMoEt21aa7VkhoicmJNgbLawx4zWorLewX4qux6YLcJFZo8skYasijCMeix8MftXpeeXYmRbj7Pqbyj",
  "key38": "3JiFNZEhQyr28ujPCq4u9qkRZzbqkjLLjZW5at4mYBLN2d4BC3SNQrmbjgZHmt74W9kD7PRyTeMAnBLDaQMN1Hdy",
  "key39": "3VAspPLgnWtbJQn1QcaBWAe7GX4GUKh14puP3YhUR3cff1iBPC9UQPnn7PDgjguwaBFPP24WiWoWwRfpPMUav2gY",
  "key40": "2SvVUWmVm3h9RY4ZKqMqcSoV2Fdu845HMSdLy62BQwrxKhU79vQDoTNNZc6ExzMZ3sepH7CRAVhACPQGCPieFz3X",
  "key41": "2eQHyYH8tQMMmfyWbw6SfDGgJpzkyNKLx8cm3FdE2Mi2q4J2tk9mwtVBokJjZdy1hHqisDLAB8FtcK1mEXkc5hXZ",
  "key42": "4WYFpQX6xW2YbPhcmBkshCwtxmxFTZNHg5MBXQrpY7pTCBAMJU5XQtydVHuVXLohpS4j5LAYxCeBZJmmQkPQFqQ1",
  "key43": "5LqxHYGFCXr2ttqW8Lfa9zKrdCbG8TqrhfZ7CuVGTFkupUf1NdHGzS31R3gwQi1AuKpruRBRAwXX6E15bEVEcgoK",
  "key44": "5tz5WkSyvn5PyU1mRScXmntwT2DpybUjtWcRDgxbvCpAfwHwdQ4Jov4Xo7XcB9q99P8vckbok5A9GcHJf77ewHGB",
  "key45": "1BHcfGasXw4Dmasef662BAPJ8gTeVoeDNn2E3daQQcouRqYFiNi2fawojmzjZpuR4k2jJCitnSpZkALaXEZSyGG"
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
