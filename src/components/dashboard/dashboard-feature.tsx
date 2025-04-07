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
    "3W3bNaJNCFhiwg1RPCVAbs3cVXTQUH616xqoSBfFLWPW8Wi5Ef4xcSPQjU8JwbxHsqctQGiJhu6zZ4jchkasaXDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckdk3etwUUKtCHC78UVW8EnzAUP3DAkGdKqvzFLTPVSr1QLS1nVzMFV2xK8B5ZC1ZMBhzSD4tLa9kUcRg2sHaYh",
  "key1": "4B3V5vodhxYJ1kA5zwYhzZnyBZ5n2bLhvYqWfQmmkShQiEJnHZGeCD4YzdqbdBgvSMLpNdQ35GMQrho1R4GF4Nph",
  "key2": "4uLYwXdok1MvKJ1uKtwbqy7P52XucN8qpC9MhVumoPtRJ59cm2fAFk4twMDTGeevjqDYKFTt7PAWVdy9R2kRgMH5",
  "key3": "5zaX8bkYLD5xo3PcNkay3buXUEqGTp36KKZssAV5LM4q6HHhBeFu2972279mEW2EJWC5rQXEa8cKFNiF5ftRkX1U",
  "key4": "2sjCPmt2rGEHb8LG8FS3SvdDGmL1BSU8mrKMfSsooR7Jf6UMCAvScrZyYuVobbYYvkyVoT7LcwJrTM4YF138Nk2q",
  "key5": "yBYBv3SdasLYhhXycrv4EdAGnKFGT6yDmzQaz4Q9oBXv4qUESHYzYFrPLhexYaxY7j8GBjxM3her27Dfxn67s36",
  "key6": "3zE2xrwgbMTcDWVNd1V9mAgdowZp5uAHHkn31Kt7XLxfUE2LwSHCFjtxKWbJQAUzPzjFzCnJYnnApWN291T2Byfn",
  "key7": "beRjADmZD4YvUhvgvq2zU8kVxCQmrMRQ6y9VCVD8JLviBcjP8hXu8CvcrYvEm28njMDBR9iPEy3AptZsQbkhjjV",
  "key8": "4JVp64Du5qS474gDYU6iWqquAuPGpmn2deWfhyRj6whgv5rSactDhxpLFEEb3yL97eGF2eQtbtJLdPGbmAtCBEkK",
  "key9": "CwCb8VV7GfxKZYQP246NjkEgUhNGXMLCyxEh8fvzdShGp2PHR6xz98Wj754S5KecLY3PxEr8JF1MHdvUDTtb1H7",
  "key10": "3ajzESZ7ECjBwT1DQaPdemry7Dh9xhjaaac8CBKC8VHKH3UB66wLn66SkMwxW1MD6GGsYUcwLCQnDeHQJ5JBvrGf",
  "key11": "51JjrYfB8yzH2WVbMuM3iSw94LKe3WPoiZtJUu5UWd7QeswMt9VfXSjp1ib7CPL1gWxrBzGKKa6Xz8wfpG6QSyFW",
  "key12": "48hDKwE1RiQq88tTckoGh15ofFaAhVNdFHKTsxa1tDrChqQLGT3ynZenVkTQXawZwX4f2F3R7ZrheiTcixCxW1oL",
  "key13": "4PMcqH8KJtupq5JVWJANUT35wND3gDKi3gGgtsDqi7JX67JrCt2zQUV5KhyvUU24bdrhjgRaDXNtLs11ZjSiUEWz",
  "key14": "3Zt6QJvXrDB5B6y1ceWXU2LuTMtM2YvjtVyon4ru5zrJbR1gBm3UeVhshjyNP6c6u7W8dwUb81vk4KHNtNmvpJZn",
  "key15": "48RFf5CamWrVF3zVsUXAz52SJ6pY919xvgYaPfRLTzm7AmubHPr4yuhDqh9C4WDN7Y7u3uVGf9WWBjTZ1FerjbHG",
  "key16": "46NRz7LoWobbZZvSWuN5DyXsP7fa9R9Hv2FHRF7Ej4L44beNnWL61HtHgxM4GjVDS7EHQ9oDaRkXcY9Gh5Ezp9i1",
  "key17": "4EUESZ1qHiK7u99sSN9GV7uQWVRjiKwpjC5eQGJLT3iv6RGUz1C4UKHVFQuwqmk5tWKRuYyJue7ia7en9UifRjwr",
  "key18": "CmM6KNRNu3S55Lf9rX7rewZCK8TVzx3F1RsYQqxoKor6p3CqqwkzaoZXf5ct22qtvafujHeTTd8tyuvRFKqLu2z",
  "key19": "3tzLQietusJVqx9ggJHZE4Tp1ZYoUQAjCR1zHPsu7X8Niyou9Lr9ddxoidoMCUNHtAotDBb8Nee3tMrgfTcRBgLy",
  "key20": "5itZYQZJzUeqbanZoz5BpBghujdE4f7MaTN6eHExhmDPAvTTicfFWV5owRbM7gogqU5Mo2vJM2WU2SpytjNjyDci",
  "key21": "2eahfoTgKnSdaQZZoCo26MRxvKkeXwrmzcCcu9EZfYG1RUt3Fbjb6qm7TboNJ4XJZRTUaCF9Mbdoqi78atnyeCDv",
  "key22": "29BbRaLnhZFbJea4vhKBCNMHe7b3og12tB595cSuddzwM4UatPyck9EbqQub1DJ2BnCe5GJ39Ae7EjHFoAd4xy4c",
  "key23": "44NFTv3r8oeXhdsHVDUwWPBKT7xbT8AaLBaf6y1mZhiZdrZ1VCkz1ZrtYbr3D6BN7oN25NWWuxCSvJfYesN3Jc1W",
  "key24": "29ik7BRaRhPp6eYbLnhHGn5fCtPbNGESXz1Dhs9htmby7pMBcN8UGCFmiWM8Jukxn4FqBEGKzKcvrfkFvSpA1ziZ",
  "key25": "4WuCrMxuQR9W8zRg72yTcwpVpiXToTeTmMxfqKAdVoV2MqPo54oCtZFw8sFBoFDHqdHafQv9ax1YZjcH4veeTiME",
  "key26": "4ssgvZE1xoViKRE9dwU5m4SnHSxst5snNvdrht6CvqTFLZQiVL8d4Rbpfe6LzRLcSBYVrypfjBLxXMXzaoUZEKzN",
  "key27": "4JmcDgfevY6i7dC7XviWF9WWTX4C7RCnGVa2RjJj2y75j7eASvD3QX3gwqbzoPduqSXWuctxgNKRhoj6QqeHseJH",
  "key28": "4RKThKiYW3eXzqHKioDqLksue2wL564K2Xtq5PygpbaiLQNS8AxYRTeS1d2i9mVWmoTRjCxKaQJiEYLqtwBDKfVT",
  "key29": "37Vk4WJX2VVBeW8AGVEm8gvtFuQiZp1zgnbiUdJoc23cuebAyyEtTFvU3W6HbW9DzoxdyvqJCpqnwdWpzdg8Czpk",
  "key30": "2Avmg6i9TnxL5hNUYj4MCKE9Tx6SLtX3ZMfCZueofMqgfDb8EnHuTG1XJkdaEwbezecVyw8uDXMhHuHLRmmZurzf",
  "key31": "4CbroeeEdcTAiiEyinJmppS6u2i42J92w4V6RpP6yJUxe7Ckr6PNVMjuYdyjpMJjAwZPLfXatGgJSExZcDE51CtL",
  "key32": "rE6294ytMRQKkMsdMPB9KHYyvnmzJhXg8MFcT5HeBP6r8yuwXjE6ZSimArthsWd6mmtynGJyh5MxfCsUVxdpSmb",
  "key33": "2bcnY6Q56Qs68S3camhHXkpoQdyzoqte5C9imV4ePfoCtgvUPWpy6EgiKpGSigU83YHVxLZMUDmnze3ayMBBaSXh",
  "key34": "47GpTj4ierTDy2hdYharnv9YGhXZLma5JQovF7KSfNhHxL16o7hmJ9YsNhBifqGcSoASA3ZR2DJz2NGqdJR3vGhe",
  "key35": "4VAszHqpWmJq2pv63XyYveb4HHXcULVsf1n1WCqUCz45V7YBEVEe7C3WUP7wZZ1dStMdqCXKdDGFQUSPtBS636Ro",
  "key36": "447fRQguM7hzYGEmd8xMxc4sFnqNsENAPupSpjv2X8XeBU69tbAcLSbgj1oPiUaoiQTxjCN11TR2fvoYGwfzJd2v",
  "key37": "5mYHpMfuh49MhMz4k1owsDjcXUcKdwfPRmsp7LDDBiXU2wHoXwx7HByiAZKeLXje4uub6Y282g7jB8XAM7wD3t61",
  "key38": "2dQ1cUXpKVCeRbrKrBcWNumCz2gZ3gfG7Hc4JaRxKygnZnC4yWWtrGFTikWAgnLwCW1mFxmPNkLjFxJbGyr5y5ph",
  "key39": "3cAwxmu6N6WfMe4KbxisbRPN7FYRYEoBdCxzJDEtQTgw4C4K28okQAEmLoqtpmtC7GPd2RRa5U8swZyKud4SMKYz"
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
