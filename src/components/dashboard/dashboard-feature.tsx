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
    "Rivziy7zwyng4pmDhnoeX8cYKviwmKbozjBBXNDikm31ACSGoUHpwgKPBxupMmd4fSgP4hc7ywUSgqRZehDL8Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYPn16GfHW5fJcbCa2HSPbFLikUgLKbghUWFSATZ449UK6WLWDuuWq8WX2cGhoQ7Lz11VFcn2qRZjDhxD5nSQRX",
  "key1": "2KRbr3x2VWT5wrnaJFpRT6GsYMpVqV9gkQtRn7wcQKh7yhvcpZTTgZ2ptyeJtuN4LDbGLK9LadXLtwpPskstyqvA",
  "key2": "4G6rHeRjbA48RKgJCqAYgQgzj95jbGhH6M2p2TvLs7Xqaxdk9F9HyPjDGDdfHquqUcEg797wVdURqaArKzGmJ5WZ",
  "key3": "3neqR5tmuZsce8ZHqRHziY1Rzsn14gNcUgRsmk8grBq9SeUTiMEGMEZY8bGJ9e2bwzz2n6VePbJenTcHoBQ3JFtC",
  "key4": "sVYRarMjBKMCKr6M4s1cQGyEH2feEuHpxg9hmyKq5yuscmz1NbdD7DvR93DGagEGPyfejHE7R9YnmzG6GvJSqHB",
  "key5": "4qGK2kMSMeDEVaFkxCRwaUbezSe5C93Ux4MkWbYoSX4VMtp3iMap7qb76c8oD3F8TxtjPdRPC4YWLgP4kDWJqcZf",
  "key6": "3TL3TYDeZoBkj6ZXtaQE2zac8Ue8KJ6vNPzZ81XQuejz1qbcsGQNcXWFMgakUJ4p9uxyNppFSPPKfqufsXhstoD7",
  "key7": "Rxz9zzEJkX99bj8EHPXghgu33GZc5TzRw5uDogr8vyKC7JKiMoGcKNEMLfAghghMFyZDY3zL8X5NKrg68sLhS1X",
  "key8": "VxUwn7atGbjRXxsf1UKaYcRYBfaZHKJHfTyp76FqFzG7maEf8jWZ7eN5mVM8abjsKbGtyUFNs5jE4HQsbJ9uWHG",
  "key9": "3qcfqQiXzUdyqLFZ4jUfxPNrPhzNRpUpTBSMKsSFz9eZfjn95r1SnNqmiFvgnghPXyf45R7cYZrie4dyAzSvocRY",
  "key10": "2Qxfc1fzHGn83kDixuxf5Dso1mPpg3rrYX9GL7JMoUeGcrUqWrpVWcxzPmGKdyKMoCMrGqWutDaAHwPTdTiAJ8u6",
  "key11": "34QpSan5exEXjpvxgh6NQy5eN6W6eYWSavs2xMTQ5eakrtTiuBiMnZnmZVZDPPzYKT8MVibs8mgujnCEe1WKn4Xr",
  "key12": "3Uyps5sUiNjBa3ydan4mH2SbUtv3uSoUW1ojtJLHE6b1XfwnbPQdWJUcJ2CiPsGa5SxoSibMRpCDvPVm99LwSMp2",
  "key13": "svN6a4jD8Rg4ydsydAnAXXd9PniyNHva2c8gwYzht6hNcyraxGFsXhPq5Ju6zEbMwY5Ef8y78pmQELG755pDzRE",
  "key14": "3coANEtsp2MrQbEkPdTCmhRrPQcEzkMDkGWiWJPnh1rbg8nVrZujaS5H9z9K5h4yt1Sftpuy98eDoWBoQsHMhEea",
  "key15": "7i7CtuKiLhJ39FS7HnLA5J3uCdEVUfufR5mS1cFmz1M5NrDUpZxzXTPjbci5HMEG7j2T2yKukWH6Qnbu5k3caY5",
  "key16": "3si73EzFVTtHGRYNfuY4My2a2XfpiR3YJkPj1kkwXDiNzX45nL8PPti9GG3him5jbgWYvEqGPG2T9m9RQZwD7zy2",
  "key17": "3hHYkX3YNXxiUFgaXdQPBvreBTmp2VDc5xqB69qrNJwf3fMHE2mzMhBDHourEjnVFtYcfnuAAo6re1QMYrevLYR5",
  "key18": "2yqN65aBmCZxmCbaJj5wK3tPTBAHXKiXu7dXwLF8v4nyot5rf7xFfBYFCYUykZTRxdufeMwrpWoVz8HfqShSik39",
  "key19": "3w6LFfFV397ckkKKyMPuSxAk1e91XpAU3My1GUGLuitaaZiGca8Sk5rrpMeZ1m9nZzVphLAFkwEZXjm2uQQ5Wgcd",
  "key20": "2J2fpiWuZ2GyTUXz9dYws1fYHjeHCx9GvnBSL7qVJv6iqhapPGxd6td7jKUC19FMGFbpPqMiBVBWpAWhz7YPZ9ci",
  "key21": "55bBrpM43Cn1ebLn3UPbCADqe9CYDnMer2Wi5Szx2WnJd1LqDZWrSWhXFgT7Hjxgfg4NemcQcgy7kf1y2PrdrXTZ",
  "key22": "42xThDLAxANjEmWtTphE95cqLse24c2TxYwbGAYPDvymrMFtmakLynxEFpw5MYgkXp4Y9b57hMRiFaAE665t4Xsz",
  "key23": "4tepwoZRSGC6RUX1fqN4pUCqumKirBUENomajED58UMAG2kzrfUs2CCAFyrxPH2ZyxEeUEa8WbmwvWYoxvVtYx2p",
  "key24": "42kpycyMcWFcox3wmkJmopryU89Bskwh55x1XzKRaZF4gUyjjb9UYSCvwmxT3sjMZd9Y29Qt92Enm23zWhrcPzb3",
  "key25": "3UcNHHeGJxKmmWhBT7Ko1JkqgbxGKkKwS3NkTfHGVvnjFLgDhCs5YXfoyvxjouW64aBWgNpJCGeyStJvnpX9z2J9",
  "key26": "3cSYLSwFdmno6pyae8ecFVP8gyxrkhDXb7ny3Rf7CU57DQcwTQRKyRnddEfQTGWfDkRcPtyV9pcdibHTmUT1RJSS",
  "key27": "4uynwSrH6iqTrtJmiDCKSmQUfKoQZgFSsZ5TgswrUZyNkDSkTMXmjTbScBeH35fVbu7uvwNUrJwRJS6Az2gqYMwi",
  "key28": "4V2UqP8jasGXANYiNMV1HU3ndDFPM5v2pCozh6X8Fg33HstM9d6mGwFfXRDSTvz141Z8SR1eEC4fBZtnkxDevJwR",
  "key29": "614fSBqmaLAmCoTZ9CKibESrR5t5hyC8dU9DYpwVEtRKs2UEegskYZAPBLEPYCjN8vgDTnzYvdhAwDWwXs8qAVYD",
  "key30": "3RvEzXySbyKYYyxARotrQS3t6hFMmoechZB7YqoVUHgCR5JnKbd7XxcajzejyHdDhQPh8z1Cf2Ddqb2dQFJnAXtB",
  "key31": "64fDY8ounoNC5CYAJNWNj15rkDZFME7tp5PYzvBQqjvanhEwzpUuAAjGheAre1fcRVUbsB5nEUNcXcGf495LaZ1y",
  "key32": "DdbYzEZr7heEkRdjRhkYSzW6T3TxW7JRMnuF744gVXbshNirLhJ2FhQMKTTdH9yscZRauofaMKM9D8HxJyp9K3g",
  "key33": "3i3psZU4T68bedHDirkbaXA4j1VDj1KvqrjezNUk7L7XThyBcih2fJW5pxknsCMW9KPxLhDYUHmiAzRZakdZZFcv",
  "key34": "2CiDhtHEpaqsNfLtcDwC8s2TbSp5t3ipzBQBvuuWHabeYsC1kqHZqibLCm3Cbe5MAkiJwND36x4TJcERbC7UmHGF",
  "key35": "2tuU71wsZa8PPqZs6mPF8mPwmyA572YZkJYjBMGqceV5QGxZrevE3RpGqyPUW5aGB736rixMr44aEYQEpR94RmKn",
  "key36": "3cQhzuNCBvozcTS6rfDzwjmEwBVHdsAjJFzURFBSuo4gugzsWXwq5t8NYcHt8TDiU8RQERKfpBL2RbS9HHeNa6oX"
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
