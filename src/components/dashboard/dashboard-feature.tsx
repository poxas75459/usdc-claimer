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
    "5fAs5Fk1LtmwjEWHPB86yxSXFkTCHXeDDaHtodxBGbGxvQ18Kxrz6cnyJYLhFkcd1dariqfTcqY94Ctw68kVh9PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3761qx6PCzY2ULAjsxBQzxbCVMBfQ1eKDmCiyuZreu2PhGr8hSPq28petuEUbQbAagpAgYvgCW2YgurgoYkwzs8G",
  "key1": "2NrAmkjCDgnp3u9yGjRkoCLBp1QQaJqLaMgh1Jb4EVVV2kqUDWK8PPyWAgSBCBgxPB91tdQUr1nA8BPq2vCxCw1G",
  "key2": "3n4mfktWrvYKALeyLe5zr8ULkXDScenDxRZ9wUz9pYHyiXwKmzz7xYBopVtqiTJ53US82P5RzCV4GZ75sKiBrxYR",
  "key3": "3qKPHu56dez8ca3fpkDSuSBEw1wogyn8HYwjQpcmTfHtbUiiq95KPv6okN1CYGfpLqgPUovWTgYzDVt1zMoKb4ZU",
  "key4": "3UA87NyT1dtZsQo95WC94h91QvSwkwM6ENhw3BvqdHEXw9UsHM1nmsE2Hhz6Lb1FrJDbnfZqSrHbRFma6W3vKa1v",
  "key5": "K9BJpTqyffkNFLsJSxcCPm31px2wHhjJzikEj2LoaNnsAmn4cWzQDroipZsEuPp7fqw8igGKsAN9t7TP5L5fryh",
  "key6": "2zgsxGmBo93Dj663TsXBLx6GSBqcMaU7aJr8GGgKfG1ABJpxb7iV6RK5qHzQjYYRz4a9FJbxHPTiKz3FRMaGnuJx",
  "key7": "4euhvLUyp9kbfcpBkoMpkFv6yys5CwkZ4Cwbg42KErEhSFqGEfunFDeWxXyPQMCYPVFBsQn2wYuSXph1Rufp8Y4S",
  "key8": "54dGEaArEF4aEG4c2pqfsSoV3vofUFUHoLvn39AmGToFtDqoHtn7ghtkvbyrTWD17FpNmNNX8hpEFN9PB2Jko2hu",
  "key9": "58WfMRBpxVngrm2KLyk5hbtW1MzCNWadAj9Euy93efRhu42zqJdeVkCP8Zq4fe6tzrGgLarvtSq4XrA2s2zYX7Wr",
  "key10": "3WT93Fosru2uNAsgeVpZaedLeAvbtKtm51cxCAXxTdMwdXGDm3QEBvbNjqHv36JwrKo1tEJjzA1dGp6upTHNzKmC",
  "key11": "2MVeVMNNSmti9saV1FDjynKKi2dzAZELTWsCJW4PbHafbFhLL8NeiFPgmNdfFZPYABv1JyEpTpRFauRt4g6kc54N",
  "key12": "4vcPxncZ1tCptUgpL7dhtt6dr6n8b1oqCDLeuScrARqTEBnuRpqU6SJ9RdfbS9Hqdaq3qXbrG5VchKWVaPW4d8xD",
  "key13": "2y5ieMjRfxpPTh1n7wRCs5oEFaA2KqBfjbWmUbeadbZAF597acXC4nxWZYg4a1LGbtBE35jdCtgxXD54gBEMJR5j",
  "key14": "47f6gNJFAKQXq1QZ8mCUQMPUnBUy92rJNe79uoWh3s6hJJzDmosnZe6DSvWoaqn7sQ4us8gnfHkFpGdzbVm6Visg",
  "key15": "3sEpQYz7wyQL3Dc9nbSY9kzvTpDHQzjmsgQmJTvzZxaBeCdURGec3M1sFuD8nSYFuDfLAa2gyMaCX4Pmnt2pCA6Y",
  "key16": "5bsKsxZu7zEvheS2vQ5s8yo34hv4EtazQpnKxa95jw8ex5VcSLnNd9wvCghss2cwj77RYktFUica4aK9dtmqHWvW",
  "key17": "5mtbuEHDmNWxX4CPhfAcPzXwXhxUkBMjNrivNPgQ6fcpQ3ekw1EUxBWRwW7nZJRWSXK7tLFVVaTEaakaP8cpZxq3",
  "key18": "2hSv2Y9xDvaKXafUMvBEyRPzK1WuLNP9SERnDZDpQUiNDaHV3tPFmUzkDN4d7iiJ8LgVpmn7DQCZsnRgxNCDYsFC",
  "key19": "ERURwzYfYnn2eNMLXu8BcZq9UpeXAY8QeFzMSrE8ECFaxoLCWq2eWz9tbNzdqkmLsBMgac79L7MH8agqHtEmiUt",
  "key20": "4FqJbo77z3a9tTGUd1NbX5S2EGPunaBQeP3qjrLTM34MJPHTBErvANYQdVV5wwdcPpPG1bBLAE6joMxSc2m6WdUU",
  "key21": "5a48c1CMU1xoHNATmSGWN1azEgts7wES9f11bFG9hxrUJzUfznFBZRCeTy3BqffFWD6z6z1Pp1tQwxuxDmbtjn6A",
  "key22": "2RxaPa1kXfoivpP9QDzQfhXBmBfsg3KSUEJRyEzCyJUHLjtZCbpVPbtov1k7BqfGkUWYZvofxWidEnaHTSYQPEFi",
  "key23": "4hEfKxKPbTLsp8ECewVCHkM77Qjdc7HZpuJrNTF2KjjnXeGt6smD5DC8VvWMaY4qJhcSNDtZpGaeckMeg5agjo3E",
  "key24": "1Ypxe9rFj4wMfXFU9ep5AEiESzm6WgMr1ELGFChVzWFCyqNMrJuDxTEUc7tHYw4CpLXCVjygEnThHUo4ymj3LDx",
  "key25": "3CUzJgMiR7jkELPxu2nyRzYTXJYGrUaDLyLE8AHua6Rnw12fXwpFrk7dRXSX8P1o2cbRvU257DjoWDxAr4astH4T",
  "key26": "4dnNgQ8FBajm5eDLA57JxT4j3SR9Ji8prmWsLj2xiA87WuD8hTix552DMBmDP28eSU8CGxnJ6HVeSu8R2rqQC2FC",
  "key27": "B6Qb8sCuh5r9W91Ap1TR9oAzx6kj3Zpd9Muq8rBRN461ncmfrTLhjBa1BY4HsPaXt7DfUJ8tnoKe2t29XTKFbKE",
  "key28": "5eeeUGRdDJhgQn5YukeVTyxBRy3QXSfuZwv4wPFNXfuuNRaWx7BoakkSFASG1rGdqLexhsDYhv33xp8CPuhbZkL8",
  "key29": "5nEgKK2ANTn3A23N6HW9buRJRiJicJY55nPisKYnU9kUNmMSBvudbS72WgGwp23Ljr9sCJ5NCRqRhcj8P9yU32L8",
  "key30": "678MfeQ1NtMhhGDtdT94ZW6hpvqc1rbWjua1eWCCWSr8a22QXn8ZeUNLZvBAacJ9SG52gbSY6kWvZPZjq1q7MuWP",
  "key31": "2tUoBHaJ2FQrGJQr9pfsE5rLSGyQdTPondRAmQZjzZFWn1NFLfiXvRg8omJLWzqLSh7zFVervH9VsDhfmbVJEHQK",
  "key32": "3cZtFu4cJgSz87sVSZzLFxzqaMPAnyZ4qhGXZULCRwY6FLzWAycDyYs167zU8HSTZKXXMqej145N2Ve6GvLnGTtv",
  "key33": "4xCFzwCPVh3TGXm4DuyWDkAjwx2L7eUpzU6BpiZsEsbPFaBLFsjQuPJ2WUafy8EeYjhKt8uXcAhASHT4F8CfsqP5",
  "key34": "5FVta64rnaKQbaaM7BVssjVyhsxZMGHsLNNbiQv1adu91tsGRv8PvGZ88Kqrs3jB2XTLnVzw2xxAdXSc57MD7Yc8",
  "key35": "wdCoQqriZpwLBcbRELvdf6o3DMMV5T1S86tmVPvBnTxN2MGy7fkLgDShWQLBSA65Tfw1zWR4mrc9a17U3xmiF3n",
  "key36": "5sorTJbu3RjYGh7XDtFyPCHGbCULXgVQEV1mh3G4k4h26KukyNWQuiD3PZggZsyV74DarUsLc4zwL1Ap8zMw6qPu",
  "key37": "1gQTxQ1hfP6PRxUjcAdXmZLQcBqr89jMHiwtgRdbguEsH1NxGCQkHPEa13dTfkXZMsYUhf7tkuK882UmX2nB76r",
  "key38": "AmEeUyGFiyLhoDm1m2pZV6WJG8pzuDcnAfFhxTKYt5BTGL5KczZTeScEbp7Sr7ZwJpbNcXKGeMUv5hqiUD5egGy",
  "key39": "4q3CmAo8tcgdtwgjq1geYPz2BzeiJLAzY7hZtuRJyQNmesG34N5fYXPbDQtwupG91SyGcbAo1zGPK9LyEwNZVTmG",
  "key40": "ARVa21Dkxq1Ufad8tBUE69U18WvNNf5zVoMcfCywVqeHqcHG9MiHuBH9yZmtEV1JCLXxNzuxRFZc7UTvckGAa4g",
  "key41": "5hxUpphC5ganLRaUroweNwummtN3ybXj5wUU1HyjUiQcTANGgCovR7idNKKiqU9u8Hu3htcmqcHKpak7gbezJarZ",
  "key42": "3Bz45UHg5VVKbChtfJ6WGdSg3V3Ynv5tbgt77CGnmcYZRXfSozrs5j5qmtNPEAPywA71uBsHPNaRYPtAAAKobcQa",
  "key43": "63WwBLEruu66gnosLNSogFdJY5wecKSt33zHEFC8T7xgCgG9y3X9hcfd9zzH4LfkspV1xos1Pvr6LVVhzqiVUjro",
  "key44": "2CjTtDb5fno3gBUxEoi9hxRd7CPF6cMtiPB5s27iALRyjKdwkVfm3cMg5aUT76U5Gh9aU6Hc8KqJBY5Dw83zsGVR",
  "key45": "4XmpTLHnzEj6CzGZHHB3yNd5RxmMFk7PZrk8nwh557tvsa7DjjxM1mDwSqyaJHXbU944t4EqyPmeKCsWXcgib3R5",
  "key46": "5SxpUKXvMeMwikosnDHB3RSSga5rAXv7yj9BzqysmT6rTYmx4tZc7f7vGMN1TKJhcTX3SEQEajkAgrP1G62mDfqf"
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
