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
    "qRtJCpSSN1coi6b8xGJgbdqp4Jacq2ZM7gZSMJRpEZXe2M5zy67y9bj8L7MPrbqjMisfHaSeQa129etsxBvDXpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8yq8b2Z67TwGS5pqz2GTdo3fahQtg7MBdzx9tNFhWx1MRZy5dih2o2YUe122A4xRGS8DYX4uy5bnrYzVdrV5yP",
  "key1": "33kzHn4xN9GeJupHGFMZaAHsjKrk9pHq6FPm7JUF9GhJqvz4AyosqAU95yjmQyg2Gntz8dkcHebWSP4Cna1xnbMu",
  "key2": "3PvveKRC4DTvcbvVBT4cdHKyB5chPyKSBcR2J26wkMnqguzWk5rmzjT5DNiAX8ppZc7YYeQmBwgBHwvvHgT31cRg",
  "key3": "3DxmqCE1cuqJZHoNN3shLMU67tFRmLmNP5pxF2mMzA3diLu1DBJQiN3PjJzXUPyvEK99iSCkW5jXfdYLxW748zd8",
  "key4": "23qQSY9HfmBhTq7KNEQcacWXfRgyWi24iWZSvLUp6Pvi1Q6VjKKyMiUd1CTSGLbfueGBHa5qQhtUfmWt8zrUUGZR",
  "key5": "4axkheUY3YZrys4cFVwwdkn1URbJzxi1WnT9gs5TgrubSnD78Qh6aPutBq4ZZGHTLM3EzLbNpQowkM4oVgEycoef",
  "key6": "4YKAFBuEgrAubCEYxLku8LqHT6yBnbA4znj7JdEfjS5NjHiwVn9PAYNoUULHjeGcd15A4Mi9h94Qw6DgNBJpXTVv",
  "key7": "22AW7WSrxcQ1eMNNfiLPiJwPgKdMv1PbYHdmtR21pBtJ4CfDKH7dZ3aPauE7ga6iSHnMUit7nuu757QcjQ9NkauW",
  "key8": "2LbAi74j8hecmtsxgTqML1bTfkTADTLQgD7RC4eYcQxP1N2ntf2Rfq9WuVJsb6qLKi3Aaznd8szwtDbpuPUy6z7q",
  "key9": "4w4Zpv8DnAKbdz1iRFauXiDd4jdBeG25fZmNxdrRPkPQuSohfQCw4r1dsY5Wgy7ie7Zd2xht27pYMJY7aw451ra4",
  "key10": "4MuY94rU5xN2bi5zkwYLcvmTYtSRgVphUBSrP9p69vLm4dfAJ8RLkP2UMZSjpRV83FJDYaJD6jqqpYBepiMxn2UF",
  "key11": "xv47VTo144PHDw7d7JDyCvXsFrDmhCeBo7fuugKhNH4DFkf78cUQudzNTcxbF3idmpv4PCa2zA4mRKkoaypKsFJ",
  "key12": "5ei9NvN9BpAVPYomn1bNT6jWMqacbDLjAZBy5Sbe6RurVfgXM3f5jYXG6pRULPs8QCVFBRNhD4i27HhVtibFewTq",
  "key13": "51UkEKg6Fx8Av4HfGkFzEj7GioGVnFhqfh9mJ3xA1mgo3Hbn3c2kyfxxyRkDuB5jH6bE8zd7DYYKkUmHn1BBKVr7",
  "key14": "2qUw1CBzCR17RD3oH4N6X22BJUGyMhpJhyWzVgVhtsqgKvpESefwGqYpA6ieaN3uBmQFf5FjCS8bxCZ1GvYkhEZd",
  "key15": "2w9iiHbaxLQZ7vLq1LxUwBq2QtfcbGUdLV5yTsB8Ju7169Hseni6CJALD893ZwiWJPfQo1X3zaod51g7HbDVMwMr",
  "key16": "5JPLgMGvNQhmYDMsStV1n3tJ2UcDSujS6CKJcCRyJ9eHBWLyuQU7eQTkjW7Qr2AEp73Miqwmf7WraqSzf6FVn64g",
  "key17": "63fgJUhbaPHfrPYe9RLEEPJjmXsSpLDHFiwDKuCahaWa26VPfU6JzaYmfDSyFE464hNA3L4b2EK3GTVZ3xrYKJVS",
  "key18": "2c2KsHyif7ZsCLaGxanGe8LJZuNL6wMpi6qMhdHM18Ncpez7xucaN8gJwndo98oS6mZ1DxAdrTGH4mCycgcgiEWM",
  "key19": "59oabvTAQRADSZFBqX8PgzynYTNv1gmKcksXEvSSHTsq66hZKqSLvaWaHz5bdW5wErFJzN63oZ3mEbpcHcHbwJdi",
  "key20": "5vyFMjxnHbMtmETACfmvvSVEpNtz8hD1SJxmpfyWZhUUPw3rRThMBkaXCVhDtPnyxpXcZH66fUXfHEwARPQsx4PG",
  "key21": "62vd6Q57hV68TBHpbzrwNgNJtWyg63PZsWYSBPBJx2v5w3MSAKmiE7GcouWQUTyCCHRCc2ciZkfTfvEM27WiMic9",
  "key22": "5ays3u1Ta6e19rhLyF8XKWqot6zDdtZdBEM3rB2MxLhbjZ3kJeGK29UXkkRFo9CMWTnXtNbBjTAMspCEvkPs8jS",
  "key23": "cFGRaF1HB6if9qpkwX34LU2cyeiS3ik1krziuBtN87XNjjCjJFKSDunhAHr7nS9SVNBXWKyqSS3e9egZynFhnJk",
  "key24": "2hyHmKNq2dcZgs3oCVfHkXZm3ujoYk3czceBXNMA8Z7CeBU4RvyFavZN2rRH7dL1fRUsHryRJ6NUu1nm1cDMcBWE",
  "key25": "7GFskYxuHR3TqNhun8TXr3JDkQLY8ptAq4VabWWQmggJCVd9xmE58VkrUrU8VyQPSwK8Pcbqn1b7uUNDs6hPt8T",
  "key26": "2Z3NZf5no1KFnKVdTS4zBfpcMbFf4heybGR2fm8aPvevT57EYwLRDSTB5CutL711XMG1ZUSYp6qsgVFEHQtTciC2",
  "key27": "HggvUmEKUeCo6Tp8SN8wibQwd2fJ37GMPksPdtZTqzUkjAHPoabnChvRnP8nSEqZUVezVi98yxMu4evMCYqGBs2",
  "key28": "2QdKUrpbFq9LXuYsVSmXzAxTCAw9b9yYw62GQJci9QXwTAwxakkUeBH2a1ktCSQebw25xDzYjS3hsgDrMsoUuTud",
  "key29": "3qhWn2xSF13PEDkc1ZNJqAMRkNWCjtwuznL2rD4yKhNFz9DHJbjvYSAEQKkWcNa5wkFMPrsMMH4ofZonAuBzQwsp",
  "key30": "2PmcoHMehfY6irCAwYnweL79XPr7yPjjWPWPeE3hj4jCfwyWiCdPGM5z1y2yLQSWNtBJhWzMnjhv3fkQjx9Y1y2K",
  "key31": "2zwqsJKSdY2YPAdcNBgjXV4uoDSMe9BD64FG2nCpGA5EzrU6ZYStzHuNztSaGRCSnMbLETbCx1XgS66ueSSEUnSd",
  "key32": "5FnJtu225zXxASuCQ2LxELjh3dTLwp7HhyeJ5zLwh5ZkW8U7CEFZnzTwUQ8K9WLQX5cN9ixhdknudoe5682PAvqA",
  "key33": "NXT9cBEYc6zWtu9CWaLGfr4gv2SJTQRCpNNvt4jJsMFrkmYd2NRCXRYLTxHJMv88aypoZz8fYNmzvn3K8aaWvBJ",
  "key34": "5qedEaZepHXnymKuLBr5vgTq8YinYqwL9yEYZDZTcz3KrQ33cKdSXEGUC1ZxfphLqNbvgYKNwmdJKQvhyP3Tz9xi",
  "key35": "2VXo6w64rpzH9iGWGpzsqnUviANTcmjU88NtBfiUJWgAB6PArX6d7yjcdo67uxHwLuVXqmX4gbFpLSH658gaTMBo",
  "key36": "4o6PKaGyQPXJaNXYZhnXW4PD5Zgrtv5gqpZ6p1GJyspcPcG12kgY91juvhxypT59XJihCx4dLf3TK9nRb8mFjGAD",
  "key37": "4V22rzo41xV2rwvAaEMLzRAAvUHiP2xMufCHyAhfZdv9NExjYDRRoPbX17etTap5Wv91zmJp7wseQHHCQswpUL3y",
  "key38": "4taec8UL8abM3rm86z1RyWGncRK4JVNtyAoHYzYPveC3yafWs2qafnFMTJBvbBBjdsi68LhuhJ3agazcLXDvu8is",
  "key39": "PLmpmemEUi46EGwUaGbqAShCVc39ekh7hP3FeQxh1eF81NinJtQTpjW5nk6kJePKiEnbygrZDGBK99ZQ3jYJha7",
  "key40": "2hq4csEZyPigVhzcCuy314r2TZYmYvPZ1cwrJch4eG9FhJYjJjxpYZp2DnYL7DFY8ALQ48bMKX3Wkix7JwbDagbq",
  "key41": "eQ53HftB8Ldbo8PanUzhASxD1K76E8Vy8DTUiT6fcKePu3QR7Jn5Z7uxJFTahYkp3bfe89MeiRAfAtRHqYR6XJx",
  "key42": "3jx1snPoo8NH3X5hpEx2yh1SN5tcDnF3gFJgXdxjLQx3HQSfU4YEb317Ma8YvrpFGMdmFnF1yX2YgUqJnK4is8us",
  "key43": "3hxPSzSi4R1P2zb9abN7WLB1wbheuzR63LpG7oyhHvZp4gwDLRWrDZN1ha94ZavAzyoBtyvy4sraoQmogbEtTmM8",
  "key44": "5qiTVb3nnJ1WsyXv4n61FaX9RyRtUF3Sv1cS1uKKFrC9Dg5mhoNY7vnmgAhPY4USgmvgr2oiGM8Hb93tZ1NBUw71",
  "key45": "d9ysHqZrtA4nzQCbFKtv8krqVhPMtbtPLv83XE5KbpehePoMG3gJbEBqVemrCVQpTE3Tov1cTq3SEUYuTQ4n9pT",
  "key46": "4LvFRHQzoyzLuEB8hEMaLLq7593amRjun7R4dDKtuNTFSUheCa2VpH6fKTtNLwWHP3uP79QiqjXJ3xxcwnE4MMpG",
  "key47": "2GnDWMTsSdrA1HzTuXvA2ipA5ZQns4y2TiqfQGrFb6Tg8WpX9DA2SiDgqG65wdUW7ykAriJjWfBF3cv9Fhj6wZkJ",
  "key48": "4D29b8Jhq4T8qmrVdqdPbDMy2edY9SAnSrFM8FQdePBZCHahWbfJkXwmjcjSYdfDRReNQgHiNVWUSnGTguFPssfD",
  "key49": "3yJix5Y1fCmF6QmUmZti1TYp7WSesxLghVaTFYngeZauRYY1Gz4a6XavTfsvMu8Vc9RUWbYD8kCA2SBn1nzCJPyy"
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
