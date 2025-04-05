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
    "hkW8uvHnoaDdvdr3hmMD2sj1HfJs1xKYkUfvTnvWbfgdL2ZThtgRaKfWWvPjfS8cWN8UEoots9eBMXZVEV7No4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N41remBbJbqfqVuNNRqstdLRy6aaVvgFqx9MLRKasXDA7LkDzBKrcdyKK8D1ZnANgv8G34y26yyh6reuHJBaqjC",
  "key1": "4wZryNRmxoL2KmBXiMtvtCZX2gwf5mauJzhJXPBkrRDDjmU7BPVA8yP17d3A1t4Uj14mnM7dPMpNfchtU38wyLGa",
  "key2": "5JyGCnVZMqJH4wpgjNGQrVvtBnBJdbQzoTKKz1NPUJ4FgrSKS926Y6AMmWYWRUumG9HyqvKgGfj82rnBvhCMR9mZ",
  "key3": "3oxPG1QRSSpLkgBVeCaAvnQpKe2hPN7MCEmjS6ezwSioK3TThSwDJByUwksQ8F4WGTJQmrGMdP1ZyExeLBo6kGUF",
  "key4": "3gpwBbfCcWDAeBrB1EN5hQgQ7X3LVV4ofeL6uVRnApQG23oJ55xmuRemrz7WWvycWpbbKQjeHNwf3Lv3FngXWUbp",
  "key5": "56HSV6tRVzDL5dLkNhYKN6HVDEtHVY3oxAR4vp5Mmr3hQdyGXuPS4sS6xPt4KRRUY2g8FnvmefSnesiy6BBzPGJ5",
  "key6": "5RudGo2GJ2c7Ghn4WSfqDR85io58M6t2QYxuS11ghqUBQTrJ66T1dBnFGcWhQWgodXu9sB2XYqzE6mXZW8HaJgaR",
  "key7": "8aD9eTw4ybchNKzc9q1WLPJv72hvz6a5GN8cTkGBwNKStqbgvKHaQxrijhVvSPNCWSGZk22xapBDa6JxBxpYc47",
  "key8": "4sJ7ZkLbTwFhhJurUydBeXE3iiBjaZgKnNs9QrTuy8mDEaGaJm5Rn9CWiVDWEbahL1PV4Q1TygtfkWa5e5jGEWnN",
  "key9": "5MSUnkKtVAGoM8zgnHjKwqpPsd2B9Fd4sdCJfyvvAR7XiPTNkyq5v229aaB8uXsJYhP9QixgWfRwXv4aud1A7y96",
  "key10": "2L1qUc1B3zZBT1BDbcyg9MN5LcYCVhDmgQvYNT4mXFneF9Dj47PZ7vdcALkpGMwCo1kgmxTLhg9M3Mzb8ZGidwWE",
  "key11": "5t1CqLj3Ns1ZPcoLeRJ3XZgmQoRG31uvMcRb6rf1v3zZasRT8tmTd3DWTc433bSbLJT3GKmhjA3bAZ3pQAVmiaNk",
  "key12": "2GpLEcDzjxc5C1ChDYcXTGDcCv2MHKUWuZKrTCjSzHmSfSELjBsL7eY2ABCCdvfk7CDJETUxb3AzdZeKAHfzJvk1",
  "key13": "46pYsVcX52o9SYCQgunSgNZJQwvKKFyu8GtKd81jPBeU7mcMf16oscHYfLS5giSxECrZ1LWJinyiuCFhKPR5LNXd",
  "key14": "4YZ7eBVve4MhXezHJYYJv9KpaCmrrrkMdRUTTHecwPg6GW98ZNGZpkAjX1YvcsL9VR2Y9uSkCPCD9jf6Ms9ghF6t",
  "key15": "pYPgusqTiKT4kD2Vr2WH8YFjFVwCCACHUCmEBqPwHrAyMZyRBbSwUDeDt8YyJc8Mfn3jajFUEifXbaLJPCXZR7t",
  "key16": "4HVdBZYLPdJtu8NmEGvKFVDZi3WpfsCidewCQg9ns7UcR3aoquteW2w7mATPDaJpehcCnNFTj5t4JGQMg4DmRt7y",
  "key17": "2aKEjNqSn34C1hg9spnLjQdn8sbhfpQPpyqw5DmLhfSrAZR4xftBqk2WuR8BCysEieeCNsfXMM1C8JGy795hYxyS",
  "key18": "4qZiARAGkgba4BVQnDwrHcN76bZi5wh5K9t33KoP8zP7eTCkL8qSYao7SyDpFw6fGVhithM9XvveawHxREy49CMh",
  "key19": "4mqZ7SFnbXUG7Cc9JBwHfdEsX6EDdA6cUKJy9mvPenX2ZK2scvfmAEuoJxrEscuse9oHELHVawAawjkX1fsZjbT6",
  "key20": "5hb2EFKJboMXLP1p4UgbR7vN3yR57FShwzWEsoKwyTPgdzZtaakMBwMuYfq339igxZnyaqKwwXHnqX2U4LPpb3Li",
  "key21": "3kRaQbTStfMT6oQPqFovkfmnJqGLWeCmctqdKrGm3sEhCHdgrUTmjvkUAc5dBus1ojW5b1i6bhCBQb5Pg2BzNptZ",
  "key22": "PQJTkw1G3g3QNzWVtXWWAqLvP7W9kiqiuPkxWWCFtF6jC9ZGoSJHcJxFx8fsfX2WELwkk5r67G7WafgH8gAcqrY",
  "key23": "5H6eQLHKvDrefisAjmhNwzBKwci7PAZe9BBYte7uth72bTYDTXyjmQ6J56bDFxk2FDwZP7Sus6L2ogiW1qK2uEv3",
  "key24": "FVktu1whTP8tXnsHvxm3Lb5vQAnmr3zDJsHyWfVSqnNar1wmswtuXBZSLWqr6yuXacwqRNAnTQnHDNumrPzuTeB",
  "key25": "5sXaZzNbx34EF3VKEVvd6WJoN5GYR1vMeNtj5tCbQXGobmxYheJzj3JKwFZv1qL8awJ8dRW5skVeFAPNzvELpVQL",
  "key26": "4i9mZwVJi5ophFpQvwSDeLrnwGtXKoDE43KF4wSinZXu1PVAPunymkxQceAoZYoUTMfmpBoMDyZRTgrY8Wnexepm",
  "key27": "5BA9TAB2C2yUnBsHwQseHHtTzRzjZ5jgYnyWrZidimgz7DfoBF4pEC6Gncf9pFrsNDuHo5srF97D3Ken7dquwRRD",
  "key28": "3g9PSwchoJXuZMduDW37fX2biQfyzeSHVxRr3AAwAyDnjyEkpfRsYrT1DUgUC4hJP9D1wmno8oevezfVE54UarRx",
  "key29": "nvRe1UMcAhd1BdaCMyhXsRRmasEHFxbbi88xQMAxiMFF8aYKaUV7d7kMqJRuZSGaY9PvP6i56kSzawwHtxVyXCV",
  "key30": "4EjeRt8YDmEnUyLThK68VXP1L1VSg9UyKfCBtZs68bPa6yJ3R8Bz6WdyJjjwhoop1EdpA51dZB2W3yu866wAG8Le",
  "key31": "3wTZ1S1qkj8yWabN5vw6eAjUfythMPHtMmxnSBdh8Zzy6vRUw87A6ncjDMMK4r28oDmgTNtcaUd3qo3p9winFCbe"
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
