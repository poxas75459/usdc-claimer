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
    "25NiNWYZW45FWHmPR4WRXDV2gE21jwMVoFEPnc55QcHctLnG9SNaaLtBKENHxY8TaENJxMEFCMt92LtGjqcEKRE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtvpgbjJMVEXTKv7eNXBMo3aMP5yp5jmRHeREzKs99dzyF4wJuABqiURH8vZqf1ZTWDu2G2icvuExZmMgPYyCkM",
  "key1": "45xVYsjSoprrExXTqkLgTX11YyKLeLhg9VjEjXF6jiQUaxHUfqc81NWVLQD7zW5ttnJQsnYFDKMLRwKnpkUsNmVt",
  "key2": "2fBSD5KobPoXhQgJUMP5VFToMQyqNcPMvd6yG9vLF23gwriWbPMEHrvvG5oe9YHwd35y9HHNNWVjaGQ9x7Mg2cec",
  "key3": "57ThN2Wn4jHvCQP32MMhaA6J4VSDAv5BKT3yRsySLB6wVJ3ozRAShgRfEPCC3XefZ2DLbq2vV3M7HS7a4ZsVvGKV",
  "key4": "2mSMpraua9R28f9hjtZMSvxwtg3GgFZxXtgxtUjGXeXXKoMtxRyhypiXhnLZqZQDtzW7t4u3YgxLrYaXnxjNkTVK",
  "key5": "3ZsWZwQwzDeh1XShZKiByUZoRbwz13egmJkJGzFXb5dHaJeopyRFpcsLWb3YwgktSGeQuCZayVJbnztxMnwg3BYM",
  "key6": "3oCKbZujYe4xJTh8wpNCuxAJe54KpCT3gi1cz2gGRK8Nab1McSbCs3v3muFVCqgqTPEnVZbM4aUhSbuF9JdnUcWw",
  "key7": "2VJGEJCfoMzi62DnxiQUfEc2mGtuTgmiNVD9E5bNVpCfy4s8gLk5fskVaLa1X1AeDuwdttC7HkjMdxQkc5VK5HCz",
  "key8": "3JvKBDDg8VmL8UL15Dtk3FNL3NRsB3KLkvG5iJXYgTk2hZ9JL7RT94CcbYh2Gwo7GbDTWLgLAN8HJXPeQixbQM4L",
  "key9": "33HAZKV7Hu7Fd2QTqWrRXEdEHx8UKpMZMymyCCu4ve3JFAThrB1pREqbhLtodkvouLtdtjTvPM5yEoHqbKWXmjrf",
  "key10": "3VWoTTLdfiLJ2e7dGvZUQgppSnjyUb92SFNkMaAn8ssQXWyZhGFy85iMKuYRLaCXSCrgbX21T2JjuaNr7H8MQh7u",
  "key11": "5qieoSk3T95SeZSh7sAmiRGmtsGyQysv82SQW1sYWmRjf2d55TjVCpme6ZqyNPB8Z6A8HZxupJKDer8WhxSxdikH",
  "key12": "4QU4NVGBdsfDAb7PtPCsgTHhD8WCBfzVSgaLcs3t9Ag4eUytL5VZ8zgj823Nu1mZEQR87nT2teNRbXH9z9jrT6Uf",
  "key13": "3t3PNSkhh53E1cTSfJ3uhaQECkBKAzXZK2sg721svt6m5vwmiXC2S51b2xoxQ5pxeSPSme4Rrup31iTSw77DoCVJ",
  "key14": "psBWKf6UNw3irXqvZhzPXBgAQ5MS9WZTE2qMXVjgdPHLwC8M5vZ159aW1cPyuLVJviB3k3XyeVpa3XxMGgvuqby",
  "key15": "5qDNpcnZK5fSLjtQmWoFr6qigaE7iwENrzGbQazxCmp6p6E5QVWBGepfiVg8Vh52ixpeS6Q8ULREVtK9aWoVQEk5",
  "key16": "4NvNQd8kB3o196tTaAVyQyoXMYMBjYGwtj5xdScTEXK6JiAQJQDMGRh3shcB7D6NHRC4QRkm7xXYaa8Yoq1XjB9n",
  "key17": "5sXmze8Y8kxwztHSYBMqCRcCRwdLaX6Y4GtLogEFtL8Pq2o6rohHzGgVoHqQYV6tSigTcNmmV2dC9hvEJDdiTYB9",
  "key18": "2aunridB1iJAwNhe7qQ18i5Q1fwbeGb93P9dww96mS696c9V1vwdZ2RENk8ojZTk2niAZ7tTmaHGy5LLfViWazAN",
  "key19": "Qq5TLjrhTnuBuKmjtbRRcYAFoBw3mEov9hGU3b4cZyK5pZaRu5wmazkfqSX5dVi58GfRqfr9eNvopUMKYQkM91U",
  "key20": "4rMYU4kG7Z1CGJ4gNtCd3Pr5VecGsnyfL6BFxcZNX6UMPQhZWzFFAEpH1581sovqqqmvyNs6133ea6W95n8UgS1F",
  "key21": "RaQsXriLpFRruUAhmdWz2yBnZma6jnp4jPocoSiyrfXpyMGZD6chNTA8dGfXCLW7m6W6VuXjvdKJQxr5X12qwBb",
  "key22": "6NxZcj2BtY6etXEK442DS9NogLQ8PtX2NCDisM84oBmGNttgro1hzGN6Pp9S4yKSrtdee5vyfbMKdeJZzPWAZE8",
  "key23": "wsjgDaZgV34ifstKt59AAgg3HvYSvRK2kz1N4sGEgtHmuFajsPgpoA5VAm5iUwznuVPvVFHpX115WZA1gf1S6Th",
  "key24": "oVSekofHgYtTfiJec3XdP9HxK6UYtv2WNMJ9b2h5CUR2HgbVoekLjkL7z8anAzizXy58jAAykRhengAAg4qyMYP",
  "key25": "5JJQMRdES7ppuxuXb2pGS1nx9QzAmCBNQJM3pE9kZ81wgxx28fYDhjrCPksbcD86YLEXC78gFueRAsamUCHsbDqD",
  "key26": "3tfxd8iFvp7yd6esRD7CzryeMR662sVNXzZ9KsnJx7w8Ye4VBWeSNWbgMa9pTiPqqyW7Z7qtSaRB2zDx5VXgs8VW",
  "key27": "415XfbXN3e8VoJbxAjP7iYvQmyYqtvttdzptsoDiVrLcTzXXa24GBud7KnvRnjpyL3yr8Ssn21PJ9nRnVGiC1YFb",
  "key28": "3ZWPhZxHiRpjfj6bTvoyND443Ur97aywsT1V5tbndD6Q5DKmauHFgPhhsUQVR3L2hGpvnhLjFTS1azLd7EhTxncM",
  "key29": "2PVWMnAgtTEfeZoirtoQPBfJ1b8i5bkdbW4qWQpUTBsBZtoB9feipSM1UAE6aJvavP9R9tABjiYjHcSKdCaXbZMi",
  "key30": "4qnEQeqZPaaBhRXjjkd39dPueY62bBYmc4XZgyyVfwHH8GyHB1aieh2c3vd5peWD2Mf4pxn7pgJLbXPQcB3exben",
  "key31": "5P8XMf62HyT6wQ1us5ysMuy46m1mRgUVqKxLbTLjFEgZyzFvQorjYjnvAuvkPWWR1TZ3wqNAv1Y2KdCPFteTPZGU",
  "key32": "4B1L9XQHKrrrVdcGn5AimYbNsDWnN4tjENiMg4bWTBx8HT3kRC1ijRqV8xxe1Z4pKBFM3rp1fWGxpDAPDBgV1ZWH",
  "key33": "4cJXKAioeZ5JLSKWibZnzVkiQYJTF2JfPLVDAQNwNcyW6p4WNH8fYh1ywX6eBE5U9D4BEJMHXAN7qeCpAPtbo73N",
  "key34": "kXxVsSUUL36tgSU42qqH7Eb1XzpNv8TzmfLEgmC5deNfyjfRoy9L4Fxv6uiEbQv5dc9EMDf6SY7jM1hupTttNv1",
  "key35": "reKHUbRKW2kuF2qSw6c6XnaZvkqRiR6VzyDnKfbRSovCKBvQA6abstWHrNjHQJV7YipdQfEiHnqef6P5X6xqejS",
  "key36": "rJzyexeHh5Y8SqaRy24izBqRU2VpZb1VGsyP9NuQF2WNKMquuhJoEm9dZD2UQCiACxBaDpbheUDtf7JfG8detxH",
  "key37": "3ospCpE1FUiEM4kAeQCiaZKPy2xyb4JYJdmHkdbWL86eDwJyEtA2eNh59KE9rZYQ1g5FPLUEefeWCq9NkyMvoW3e",
  "key38": "41qWfnuZi1ZwnxmMAaoMby6koHnUnKPaidjWs7T3WAFSV5Q1QT95KRo5BeWfGGxWd7qLjD58AWNP7otUnC5cDHWd",
  "key39": "3XbvLazkBQwBHUTdnddzkvC5jaNd8mN8jVw9HjpTDmTuSM5B2cia7NZcAjDJnzoyYork42t29BjT9vbsTbWdBCwZ",
  "key40": "5n7chJC1MH3XiCJtF2LKt1wuXL4YfV3dffxz234hX2xP4UXpPtS3ZprVL6zkihdb8EKF4YqgA4JLGSnRJ5W3Tb1S",
  "key41": "3NNmvqUDg5Jodmv72ymYMzocvf7KdAf6z68veX2uwa6ykrR6JrG6QCKxePM5TEvSVjGPNbiR6gNAk9MMGYgk86Ad",
  "key42": "55suqsxE2W8AbPbntBtV7Pv8UV62zyyhs7qRdNDgy7GPNUZDMaHpXKmDoS2yauEeMLbKkT5WEPbY61fQJYrtWTL8",
  "key43": "2Vk7VFN6DYeXX26jpeVC1miDGvJmhp5bgeUKgqEZvftvjszLtQUEWXuUoZM3qRad9uEJUT6beqPPaiCbJoho59z2"
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
