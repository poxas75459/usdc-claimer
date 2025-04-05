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
    "3pZtnQH1emMF1DRTA4vXupdoU8b7yycmJCgkWaCzb52HQ2CqDGDC3ZPTiY5jDvj6PMfnHKR8A3juYXM3QRSrvibk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uW237pmiprdqE7r19NKi4tM5yPzq8diJVscJMPeeTbZAeugmDwRWJpAwjJeQZycLjp4dSnQUfR6zQfUtXVh4kRH",
  "key1": "2zn9RGWTzQqQ67AETVrVKMjoWMGD6Gjg3tyW6eH7vAETbGD7vYV5xrMXazox9f1iBpYJKPog51aDgQwLKgGAuLCh",
  "key2": "2K1bueUzASWaZbSb2zdet8KzLjxErwSwpp7YEBkB39ESwjg24DLWVxckci4g6ueVEfq2A9v1K1ok2qJjrGKUSBw9",
  "key3": "5cpyhZ98igbkW388AD8BnqM5ea6Xm5q9sMNaDkV5zt3hu1s8H3Gw1o6hXcr1GjhX6xTGfaTGpMbYL3fouPxHG44J",
  "key4": "TkVcX1d2GjahVL7VR6KrUzsMsMPdXncLaQ2dSVG3E4ZiEky3kBrvEMMZ27c2wbmuTf5Tdd1KAMUes9b5MMLLtnE",
  "key5": "3EEUHN8KvhL1KZrfCEqtWHHDvDunvLejBh53Q1eKec8sc1dPhKoUFVLVwKZeonJTpi7dgGv9HumJ8h1PKZEK8wNU",
  "key6": "5mKDCLAcCKm5Cs2BMsFt7xdC4ShxRwnemudShSxzYANMTRUwndL37dhaBXk1Zfu7XK5egL3yS9LjVxpAa569j498",
  "key7": "56gzcS1FmKNDqUsB4bYHzbdvghszXRGBcX3817vrr3eDtBFPEWKrkaaQYYNfEWF8cLjzaDXEVBM5trtSGnqTzPiR",
  "key8": "gf2dCPikrWDPidigzHJN15RgVfsETWPk4hrgmoyx51qhygWLm4XJxwP6esKFcNYstp7Qu6kEHDaHafStb3Xn1FN",
  "key9": "5noPkXxqBVn2My5uEZtGV5RvnhdzFfLwjX8Fr9wtqjMgyun6V7ZBCs4xHdvCDAzriCvEC2BqjZtKpwTdiEP4K3jh",
  "key10": "23Xkr6uPC3xhRMbkPZ6ohT5gbXz9QkPuaZ9ESTWtGvMGL2HyUuZsJGcGMukKyHNY4tyXJcqyneS8FaNrqVYWW39P",
  "key11": "goKsUiFf39SHBHPL7eTWYjz3XJ9MDF9RPuTCZaucpjBrvGqjgfNGw6ibkJHCQKEwxzsc117MnPc2TwmwWbRHEGD",
  "key12": "Z8xL6g87atsRmQNiKKKLFQyPzLYNkNgckqsuBHT8TZRuTvxaYFzQFBb8sENgpaVqfDRFSowp77bJws2HLvGdX2g",
  "key13": "61AenCZ7xFLsF9EvDhzMg75dqdNofbGbrZ2uKA3Tqpt8hox1xhJ3vCaMqbHu7yYJWhRSCgWWsVRrLy5CKB9y4jwe",
  "key14": "2xXMAcgLHfn9VZXgda9UC8W6j3EzDXeDz67P1xQtoCM73WJD6MBJ8QGETwhaBR43mECBeAtB6eJJBnspfrbAYPWu",
  "key15": "4Q9cwufVWVV7NqbvFPKWhr49yFGB2dLxmcsWRuM42V7rC1GwaifrcVcJvzd1C7udsnLh7JmH6FdNjfHZRs8QKsRi",
  "key16": "3i5VacvV9DBHBoRnDzTk5JZ8WqkxWPhR6G6vHqG9cXJuMxBPoBe3Q7MAL3LPMyF5wDBnqMTH11AjuuLMfpL1wi8d",
  "key17": "4TwciLcpSyfmPX1AkXh3iQjyh5jyZHX6FnXjadhNDrmrsnKEH7TM7RRQiKhWS2UBvUaMTFxkrh9eCSex2noVCP7g",
  "key18": "636NV956sN7aH1T5KVQRibnALjQeTjkQwpx5w6s97yu8D7yEebc1unreVXDugvmprHf6s8V2UNoFSDTCpL8nyP5v",
  "key19": "2duWa8iRwzaRTJKq2zDEFvZMwEJtyPyAtDDtbRbQn9j1tqWwjN8AN38YE8UbjnhRdex9ngzvDvaW8Fk8DibF7KzZ",
  "key20": "5xhLaVVEmTtQ8tUyAUXgZxZeLixGuc4bGwad9YgsBJYj4hn4kom499sk6SZRsFPPGGVXPcb8opny5gFt8MMTkoMg",
  "key21": "1AgcqKwfGWcasPhnpo3NxQDpLNnG45Q2UmM1RgWJrmRbfjMyowmkYoneGpWAMWRP82n1gAytSTKaiapnNmMTYBc",
  "key22": "5rATetNberRoZhBHX7s8tN5w8kxmLwsPnXkbR5WZnJNRfRcz1Wk5UhywehZR2c7MvCPEoHotffp2a21TeUf7bTVL",
  "key23": "3oAVzRkCnqxZ79dAaBNkDZ8XmZCrHJ5Yxqcc9KGFu5LsKhU7aPhsnr4uY77FPLJNRuZQLZRLvKrfKYPBZMsiQwNc",
  "key24": "2StQX9iQ9NdyjBbUfvtDBvUkLKBAo7wZsmdoLUo3i94btug7Th972Rs2nB5UiRJ3HfoyeCTQTpUuzvDVzNDpGy5n",
  "key25": "3HUYWEcZXn8H73RAgh7epGS5YHnUiXGY9kLhDNuhCvC6EYkLPGPCxeWzoDcjhx3nViwMBHZCGVdhTHVfHcABsyRr",
  "key26": "3T91nAnTVKbijQQiAH3cpJjvNMkKVoNepP7bg3K2f6HgZXKzZbgbiZvfMUeZuBJ7feHU7cVDG8enH4tNrVMCiisS",
  "key27": "59G39NahoKwuxoaUWKxdSFZvRM1GPb3rT5yLsS93qnFAXHvbfvYp5Mq8SgiqmCX1Z2CdRHqTDEfRLhFbK23ee6L9",
  "key28": "2yH1Go74hUXJj1Kv8Ejdn74xuWrdABZqd7xySgfx48xhp6HGSorsuD7gU8yNDNFRGKWpTrb4JLD7CfjtdNEsQR77",
  "key29": "4r3c7axW3ngUGGyscRXc3RfuTSnXafFDJaLX6HHpM83AYzwiDrArPyVSFpmLJSvX3ZmPm3N6oPSNuoBrDuXWbP15",
  "key30": "LHNGRJnJwQPvpqFTwtdF7s1RT6QUsdUVdtnhoy5Sxqkuy5WaXE4qjdjtKwuKvgZJoGusbNgchCKMwPEQTyzS3a6",
  "key31": "2BtmEanQdoktJgF9oCtBXyu9ARe3Gs3uCgfnpcGfdJrcENLoyHZaAXETaDHRTtatBBiw5PmjKhKvdFzpFxH3sjn9",
  "key32": "4xRQzkxiEMwgd1Xu7UeUiCPrETgapoGkmiPEEUN6vEN38d1XMhvznTSGDzP6ySYmb1NXBfn4QxUVvPknP22REXSV",
  "key33": "jLwmPKU8iufTsyg51nru2z6HXHjE2WvZidrKxrEjR8X9AvAezPq7pA2cPXNdvv5MPFtLZeNz27J7ULaWA15GxJ4",
  "key34": "5ctQimyCC5HEZ9wppo1eR4eFypyFtDYwuJyPXUTbiCwj5oaA5ZtVfgrLUqEeiDvsxpiUq2o95vq8onXmEK7my2sf",
  "key35": "48JKyQ6EofLvb5apzLayE93zNsGQecutTbifupSAhv4mNAYybF2qdzvUFNwRQ6T4QiBEZHWgrRF8EdSkYqKLCf8Z",
  "key36": "3re7MVWuN8uQfPVLpAcg2x6ksybmnPxM6ZE71Y5KufSTrBiPG54jVznnT4QPXtvuWg3isgERYSiL5uRdvRMphN2x",
  "key37": "3ZrNB3g3pGz4KXiUtRujRjxLUyXQFaiMCAHMDqA86ZTiWWpuWmKDX8ugtfgYfrGGPRw7rcGq9XUU43U4v3WksjSk",
  "key38": "4SXRR15mqkKHnCN9sQpQxWcMtD8p4Pz8nrBHrV2WvFskRyjdMovxJaUJDEPpS8KoDawiauApzH8k1H3crvNpJRtT",
  "key39": "xau5UBKcyrTRaAz9GRDfKKozpHfb6wVRYo2uwDjopoDWs13PU91dWjtBYUp8TMV5swxbtYvFJ72KsUtGJwNR6C5",
  "key40": "66fCJz5JqMeb2doXtYvj5aqx353tvbHBEedry7FyaVC1N1XddYSDfoAe3AwUmaPHJ7Rbt8iiNkajTG6e2aiEh5vK",
  "key41": "5HBJ3wUVPphbfdVy1nnZxEb2pDiW4q42eaKCnemYokyNNPed6RaB9cKD3JnMgYjnNaVVXQWqQ2WMrp8BnkY76myc",
  "key42": "3n28gTT4WpbqhKF9iwUV75FtJ5x94TbueuXVn6WicdWcbwdSaCnJDzmZWoovSKDu2ofoUoApgB1GUEwmQTxaNthD",
  "key43": "4zdugH6joJNXKrUsrQ2VMQkBVcheTTZR8YvHkRSUQNx9bVA65PpBxC74352cgCuYUBdXRy1M3YgQUEdcCaZhsRNv",
  "key44": "4TetNXjtAYy2fqXh3fgu3hgtwgpWcqeioMaMSrEgBtzizF2ENPdPoUVZjwhFsZ66M8rhZ2osJppTdyWGMUvvNjtU",
  "key45": "3xGyFGvc7AKuD8FzYmZJaJjq6Kxebd4nq4QCPtoi6buk9j6Q93avQUqjBtijmbxRfRKqKxQ4oBmpYbUMP5DeWnf4",
  "key46": "4HTJ81jbrxKzoaFVeujopFWRU6pBTRW88k8dvcUEBZtiH3nmFhCNUnCX7jfPkDWDTcnxG8xiBSeopsJwxF3JEms5",
  "key47": "47ad6o5Tgxgg5ANow4VNTs7QZnjVZFLoNUp6CMijmQijitnyzBDZcE3BgiabxRvF4QHrobfLMaLJ99G9aCbpwXH1",
  "key48": "5bEg3h93zh31WfkrWCjF6qg92j6bpGEuYMcJaVfyrEH7WWFqcxwNpj2pyhXMGQRyzLoWgzpFgmwBsZfBs4TRww5P",
  "key49": "2e9SjLd84eXrVBxnexFLpAGnnVqN6X2cQA9QvDfMcWmna5KNKzeW1qH3jvJxcg9VvYtqjeykNS5ZP5oz7rR44Crh"
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
