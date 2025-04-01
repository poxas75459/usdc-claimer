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
    "FJTHkg8rXKBfsFj5AUoCnB9FvUgZ5jV6bB7zE142bAFhiiEPmDvKE8FB4YH1YVvH7LHiaYtR362SFvWPnk8cDit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662BrzSSw2VkD6uzACyxrEVLAJc9CvNzoAWNY7S47BeeRbLij7s5XuKkQFLyjo3bcJ7qQzMMiFghdHyyKjkprnVD",
  "key1": "h3U3s4RWdSBttPVCsnrFsTjD41Hn9itmXVVpHMpWQh1bGSoaJxZiu9xc6n6DWdjaJH2BeprJcUfpcNuj2LfGuTf",
  "key2": "57SkgMwD419ZoVYNzGxjVHZUz4KgEDjC4of38S6b64vMUGLZf1xJQeBQ2aaE2us2xEyfwY2c32MJucAJW9pJ2Z8y",
  "key3": "4e2WuFMq9qeiDKShGZbzjsycpY756mygo1x3SuLgFHzb2XKYYoQqHyUfnk7xHN6CnLzTmk5TbYFyvG1NhAXaw6pN",
  "key4": "28oqwbhQk4a6CumGLULXgPbsLKTwFaPxNvHt31NnjXn7hP5aP7vfhx1beVodp3qjMTr2LUiyJ6SFyPiinQten3YV",
  "key5": "5RgDsqwBGqzT2JeC8gymBZ868J9BqwAXm5aqzR9teJ25LDBEcDDEVMTN9fjKai24rcXLDRBoWHeG9DtJpQfVhtcu",
  "key6": "R2qKwRhtvdchpwTe91fvNZDPoXKMdWVj9GgUiJwbb1ToL1moJmE1T51MPW9iD8FaqQsrch8EQdUSSNkkxun3AeC",
  "key7": "3gxTU2Y1V95oHcgZCrVpQfG3zm1s5mF7pB3mVZVm34P5ws2PwgTSWYQva8Xy8dg5joFMxfrFq8Ep3Lyec4LsMK9C",
  "key8": "3Gi1WbXN56hZkokkhsCwEYRqYvDSAtQv7Ct2tPMPfZefaHQRRaWu1WCapeZg4D5EuMx7J47p6dymPTa7RVQo7cXn",
  "key9": "3QEMBVSAqe4WnRupCyH5fk4PbpXeo2o2LpyiTidbys7SGZq7P11BjarqPwn3YabKs1yB3L4umec6NDrHHJiJ8QLL",
  "key10": "49BrVY5yd7BC64Rv6xA88gcSxcSQEZyZxnHx45k432CNy116LHNmhWWqNfv47F5oxkFKYEtVp8NYhXUp1qiWgQf1",
  "key11": "mmakyfqrvYNe7kgWJZkjhzu2m6XmDbMAzB7ciXgDShdeK7JXtwBvM5skmHrbyCaqZDpoTsoMmLCUs9wB1z3e6MZ",
  "key12": "4swPd4Fn6BnhbCMhKeRDt5PeE4MKUW1o2m9UeT2RLXsYAvmLn4MjZpFxYpBHZBKCVZCqdXYrayDoPfsY2PGZAkrw",
  "key13": "sP854Q4Db3cTn1kSKttPD84EWuvS3o9tyaKtM3nBNkqNC3UqkzcD1aqqzUaxZakP4GhP3AAtcS6cTGDcwqDBiqG",
  "key14": "4BChWRY5xbLPEtozAUkmzVzg4f7X7Q5WFjC5bpqSjQ2bNXejTWMyo6JXvLDGbnz9cRsiZ1KDxCMsMAxCdQH9Jem2",
  "key15": "57BJfYmRPziNjaJj1S1xoCZuFpCZMNZrnuHU8VTJzTo96ghTi3gY7pTkd1jtKtBuWw6daRbS3tPNMcduKQQkEEt7",
  "key16": "3dP3A8Simy5XW5Fsq3AkPegSHkMHgRE967UEf6sY87oqoNgXnSoAWbLLbHJwA56JWnpSVQfbWxNZKnZaKY7Gs4Ch",
  "key17": "2eNafPUJ2JzVmqfesR2G8MEMcFaQaWLtDEMrfZ1fTjWRbg5jeaFs78MCwHRpmDCioCbAqoSA8z3xjZUTnXHe6LMi",
  "key18": "4Nj6UQs6t2hfVUC9TLabHcUwhBqKKh9ogWkCRv4GCeWcEcvN5KioHphx3i1iSWt524CFsZ77KmCQH1L5LsoHab89",
  "key19": "4TPeebwpSxz65Fq6J2iNLCbjuDNjfL612fCkZjYtGZ9LRx343e876SJsiBSMLhCeVksCLuExho1pNTzvc3HEG1GY",
  "key20": "3BncPCCVLUS4z8YDqtyXWmosexr2RZNCDoGx3P21XQWzBj58FyktN5DKL2cmxoU8nd7RFa7ZNmcmpmUDmASKM33g",
  "key21": "2qPsnVyomxojYnW4oeQRgWHo1rkgPT1VqxNGaRXD6Dm7btSmgvDTwrgB4FgUa51kWvdJFo5m1H4xAiSi5aFrCzpP",
  "key22": "3U6A1uq9nfHjbR73njxgYaGZKdyMbhKXnQSGRC5GmzDg3iuk6gL1B4Jf3NAEDNZ8TGek2ivUT7GW5Fe6TfnE3mPF",
  "key23": "2ezGm1Wfxw8cbU2RvDgrePx99E8nNjDuhTMzQsc24PCETwWsxqHTmgfwQH2GZq1Gs1jzWSWPWE2obMwnc53xzxAj",
  "key24": "2f9738QZpQ4gJcB6A67dCVmFh6hVc2sCWtQk5pRWvyiiBd9aLvLCBje1nkWseJaUjrCNmqyL2tVfjW6KnigFChFa",
  "key25": "C5Sj9U2YMQabaHaDE7U3sGibEDdBa9sW4puu6e46oFiHMgXVh2nPSmD86si24qCykXzZvx4GFFDymEf9z86KrNH",
  "key26": "2un36dzC1TJtv9S6siAnBsahiYCjqTVNH3TwMGC3V2y2AfqgVV5tezxFvy2t3LhY1rKnhHwqqRXDfePyjgpefKxp",
  "key27": "4S2bC741icqNqzJ6dkZXLF6nVsstp8KiVXToFrbSCC168fQfefNSGDV5MPbXq6wRoBYjccfGh8FrjgVukxQQoqpn",
  "key28": "3gV47tcVx7H4jUB5nhB9RPcEMubY5def9zQCbQbGRUZxQMFo6BvbK5d7HMbVrktqvzKCtoyVQx3mUJKNxtuoch4C",
  "key29": "3SnNMtC78KTght1189bjnvMYFs6K1b4pQhTsnM8HdDzbXCs2321ygsohB85673vMxQKN8vWFaAUH2estkkdNvqk4",
  "key30": "5BwCPCX8Q14FccKZaQME6tCukrw4uf7AAxXQtQ9ijgY3wJexSanutVWfydxhk1DJ37NHGtrwJ5C2cA5spdBSVHgS",
  "key31": "28ZRLraHYxk2qaJVw6Tc3vEPC7gCJAGYSFzdL63kHLWTkBZGn17c4uZmd9eQ8SzVNf7oHpGtXYUm4YK56QxRkzGm",
  "key32": "2MdyX5AgxtMvYo24x2xgUZhhZW3nS6vEKx5nvwDQVE51WJMLHMCziGHDHWnX3tL22CeePVyiZZA7GmKByUDaK88g",
  "key33": "MaKVKrU42wqBVaq1CULLDVoDz4sGAm5Rrdzr4Men1EaAGcs1e5f299DB5RxT6H87o3WR9JTxHC62DNHRyiUMDoe",
  "key34": "TCzEe1wsfN8bNapYPseqWwdW86bc4o3H3XJLKtMbXj3mmwNbKqz329H9x5s48KBU6Uc2VpED9ai5LwSVbr2PnvV",
  "key35": "62ZngD7wB81LvxKnwBhgc8dyYiadWZqBHYK3oJKWWHJHY8fFtwJvNvtKy9mfXZLFUQbzTnheHBpSjYaE4P5hgzAp",
  "key36": "29GtM4CBwp8crjfiK3NiBq3secU6gRsBpdSgMi9HFHQbY7wfazwxGcEy1CR62mpb88VvoFW18BtYoV5qZvyS6Dg7",
  "key37": "5gdVr59v7dT7BRRytQTTLq5cTXC6v6DpwspRDhhqtfN14sDN49cHvupfMCccuQvte9MjxC2EhWT6jjyR7aj2nwCW",
  "key38": "ecf11zXDPZXQSHLmJ79H4pkCQH9yKtRio9xuLAjrm1UEH9DJ1Bcw3wNP8gVRrxUuQErS7sTUk7N5RZtTQWjTgfK",
  "key39": "3165jqpMcMLHEhrtJ3vWjCMTESrh6cagcqL9KcCdZGN7orE6cY27T4QZBR2joG4cvwhJehTkag1QnrB6VXUVN28a",
  "key40": "4GyZX3YPLhMHuZKAXrVDSi3Du2Kym4BocEKw5TUmLKbpFYPubVEKS65bxa1e7e1KVtmDPfRcBzviTk77xQHRK9on",
  "key41": "9gq3zm8Sg1iVaEgxGt8chE4twGtKu5Z8xnJFvJTNZytRQBTfN5n3tPKkskjHGmUC92gBMJBEwS2UWeCbkJXdxo2",
  "key42": "3gAG5B4CRZWxpyKWjq6AAYkA5b2YRuALQDbdxf755aWfbvbpKDPHRvsEykZbeAyPEnJfkFzDmUXi2boEPobyaLhG",
  "key43": "38hWki1txcnEJMP4UsDzgfqQ1WExmBazgDwmq9xrHCKMa535ydHivxkDrrDFpiH1tGesfdZXBEuaqLgmnhXhN3Uh",
  "key44": "4Xv3Efr7JrWFzkijUBLWo7RyVRa4VUgvnus11Tamfy2awY9bjQUK8TC8GSLFy23oXrsKRZ1m8Efz9USVSDPrFxKf",
  "key45": "3RFokQYuRkCu8gHc4mnoQw5D2L85VztnW9o1jSw9GbmJc3wJS83jkyopWShjZbDNPrnnUvf6SsZTd58qL7jjqofE",
  "key46": "5FUCfisK1KVYRmWZgKWNGSn7JQCgPpB56DhwtCkTk7uhhD9xhbtEfz8pL4GkGXQU18fe1uNE7VVFsEBJFV36DRBk",
  "key47": "33aibeM5f9nurc71uhoEBWa1ZKRK1T98FUUCR15KwvNSHvSFLoJiCTW1a7ggb2zHyHm79VXZWjNYTFaU55PkPVAx",
  "key48": "36Eq7t81RZeZXfCUPNXJJam8Pp6J7PYBJs38qS1X6FSQ1PEeHM9agueYp8ZYb9YC1BXnANZeMbuBqhkz3ycffsbV",
  "key49": "4QWVnNdwByDEUdc5Kn1X9LxeoauETWmYLTHQjdfKWHGrPHipDeM7DgQNuZHCaDjoLd5CpugbggquYr8HzBAjCa8p"
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
