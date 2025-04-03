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
    "3qrGRTGiTJyWZCaYjZMsgxZtisNTtvouWctpnKo4uQPTxEhJbWGKuXLwKZHfyycTJ6ug8oPCmpusLSgzwd4K8mAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZLGrt7pKLKVwog7h6QAf7VZfg3hYCqcNw9fdk6tVh8DGNPLtRDW3cWcNShZ6cvWhfiiZTCkVynWdQR7mhDBhBm",
  "key1": "Tmr3sdg8TZZbMhn64wWues5xoWLJerEyq7sdRUEPpZSSxxaxJtovV2eUinUD1FgpfCpy7nRVGxdXfrCiWSeFb5Z",
  "key2": "2aKDjd7vz6j75DzV6feAbSbbwpDU4Wowqd2zG8ZsdPaqtxJddHrDDgBgdoesE7U21TsW7DRXdW1vsxMG5Ax6SDg5",
  "key3": "4v4SyLSFFDaLg6nrEskerBDtBA5YREGMaVVUbbrWAuWG3MC6YrttkgV2tdeby5c7RBuzGtaHurVQYJfGEQoqhdKU",
  "key4": "4AMHXKE7snxkqM6GToLciBSBJHVyM1d2hPMbQFRddZXhMrjXNdf3zX7rYPdhtQKqAvrKThoHpUurU7PdpM4R3qKc",
  "key5": "2DouveCZM37EuXS6G9MKvZyK1FHPYaHCgKNjAdQmnQKnryA4fGPhSPCFZQiVt8MBhtXEXuv43dxmi3mSjZtPjP8F",
  "key6": "LRTvuWqAMJsx1rM8TnwYZpKRuMbnVh3LwT4nHwBTyrVciVihXqAYDxtf52DK9vX8NTxmJGtVo2h1bZrUmvK7J3V",
  "key7": "3haqzds7Sb6RkSuRv7kzSWwtmmpc9DzLrPf7uS4EAmCeXkSLzEA2k2LKrbrmumJpJNLGWbzuthjnnxmxR1ieYd2Z",
  "key8": "2cyo2paLa6KnaVScvvdShsQh8wJ8gAnvMRtdNumJ1mZDEvybPhci9d73j6oTSt9bWRzU5WoQfELWaycVxQuAxKRZ",
  "key9": "5amjNLochJzG4JXss4ZzPbtniNWNiurd6pT3her7vRjR5YCTRdL5PUYQhWnPnEcnwPG3GuRyQvyBoYFgA55WrBsU",
  "key10": "3PF2rQWYiBkCCV2WXATKhDL4VsqmDSHy2g2xwUuQGawoDQ1ZBVaRg9iiJVJxVsHmuV1iHQUvho6Bj8DcgdPyLvr8",
  "key11": "21DBjd92Y9svWu9sXd3G2ffjcrCw6ZDiUjK9AsX3ATPPaUNnuYRfm9WQmyitjSpFLW35dvYVrGWJJrjrFTYKTmee",
  "key12": "3kZo3CBuCoT5E5iAPrmUv2r2Ldty5N1tBw23KT2czif2MqwsiLWjVLcLdzS14wQ7fRmpXYp7HEBuaqvG4f5TpQyr",
  "key13": "USCMireFcA6ZUSQZKA5FHyB6tafXVFmncWnb8dFBKA8EZ1xc6p1g2e2ZLyhHyBLj84kFtekAVhNeEtK1b1BdRG8",
  "key14": "2zhfn7QyAVwAt5BsjusvJobawhRX16KPZqx7XdVWdBHGHTAMXNsqneRgh9TiLXKdUxTaeb2XJtxKZmVacFhX3prs",
  "key15": "29LgBHYrVfMQGdcZXSZ8G2u9Qsc63gkRHL82TfETF7L7yAn7RgdQGJi64hx82Cj8VYsnVU8KGcosB2qYuiHwYkMS",
  "key16": "Q6EGBmKYnJKUmE7jz7iYnAgRZ5rvi75rMaSs8gBB9ZBa43tjB9EnugL9qzfrgMZMEFVDBj4KWyX9V1DfE81mRmS",
  "key17": "4HkTPLFgamjuH3jB5yCN7VVms5A5FsZDGgzxD6pSEzM1D27oo7NmXad74uxqQPdWcKecguZ5Sqvd5MGGetoQTugS",
  "key18": "arJY6FqY1TWx8UQgvBUNi7EFnTALFx39wJHGaq1botMk7kwGt8BNeioFhqDn6ejT244mtqACCghLTJSZySiU3wQ",
  "key19": "3adjqARCJZMTizoUoxCYs9GocKQzCaJJAr4xV2MqCZLphvzUZkYQFLpvvyJq3Xs8vJtp7teH8CkDGeLiA2nSNZzA",
  "key20": "5ZrMh5jdKt1WpoQF18L39LKFSw5tongwuYNAzwPMr9SdKiR5AGDYcCQc4X2b14Kg4p1gTBHZSeehzGvAyNt1tEUm",
  "key21": "2rfrapgHLL8s3bDRAkFGUeodX8bvagjUzPnFCgosZq8K1eK43AeNXtY5t4XvqEujEDzGE77cGhxLhERjm3EesFa5",
  "key22": "53V7sZH6RBgmH1LgfexTnqbMRvAXZYUeEb5LBLqNMBikv4FRxRXvPhajcALQgGzQLWyJZA9Dh2zAqY3chLdmSvd5",
  "key23": "2cTYcfujAVFZUsiJAu5pT8UYGi3Jaa4xJPgUQVbh8fmKyHMXSSc37eykT6h6yCHP2nTzUcQmNTpMVAztRA77qNz9",
  "key24": "qKS3Hs3PpWq1C8U6sfX9LpXqKMd4KVqVh89x9GN2ubjLqJdrzVp771TjbG4Ek4xbTfQeaqtFdGVcoL4iZBLzZgb",
  "key25": "JF9Mj5bU4AXJnXsMMbh1sQ2GUofqd9ekva53rhEisPkuZ45UWqwhBW2sVgr3wrberMC7KuPmBn9JEVS4U3YJdZz",
  "key26": "CqY2mQVAiLuZ7ksGy6HAnGNLaDF11o5ViYZjV334QQCroZui4BZnH84B79qQtatUkTxpbFCuNgue2diJy7kaGCx",
  "key27": "hWbEQfrjo9gpnZHMxetkzdLZYRSd1sbD4VUdKRaVM3PNytpevz7ZrwmSMBt1hsAvMMDwyxieGXY6ox5YDmPuaKJ",
  "key28": "3gvMATzxYJCBJWCcj59zdfEF7dqy7vv8Dh26Ltd3gcde19c7LepcfErbq3bi3w259qkMgYvhcu567KaKNXUQqufB",
  "key29": "i2PU8WMKSLRguw9AnFxX2jWxxyZuDV4zjyxKcJiimL6GGnbeWvWrbqnkiocAHo4S4izFisQrX8NWLiV6vT6gnEd",
  "key30": "4D27e7dikCced5T6ox4qp5wDEw39Hq3FLexjo3j2YvaCJRw3g9ehim4sMbgShjHnxwLQbjmQ1Cf3EvEQTAY38kWh",
  "key31": "UctHJwPH5NVRcMRf5h4whjmxuR26zpeJyyMUzAaQZ5LTARsaNr7LXQeXqurHdW676NDGiiF5MG9K2kLwwq1wXzt",
  "key32": "6297iCUN661D6aJyo2XLkU6iBwjHsahfDKWvU9T2mZwxvAvb6MWkUMeWQmaqZocL5pjG9eERbJAHd6PbNfV1RQsW",
  "key33": "3zHcGgffwFmL3yYhrFhUSLsaAhAazTkSS6qxkzWnLLtcCn7SszKsoDS6gSzaT6bEALjiJ1bePzPZesxiXCSBSKd",
  "key34": "3KU88VjirvqLhe1DJLVTY9m6ThJUcuQSzeUajWD8dif9zZ6Hw1TkyF2dJjKJTyvMye8vpa1e9sVYsdjwPMXKNoXT",
  "key35": "4FvaYCY7adWDQ9jpshdtfkZ5c4QREL4Qwk2BFsh6zoK3XwvdCjpcVMsnuyXuvxJWiK9qwpkg3xxjgddqXBydcp2P",
  "key36": "26mBxg8VHnTUydm9LPKAEttWCFEKARNSfGaw93NMcGJKfh4D8pdQfnJ7nHE6U3qNu9Fremcb5W7qaZXJg73bc2FG",
  "key37": "QGtDSZHX4rD9oid7X7yvDH1i9t3srHsHPv4wphL1JGwp7SLWDQpoPM726DM4NmU4aMqM8FXfuxADeV2hL6jo7T8",
  "key38": "jgR8Ct2taDCY2gDchZY5ELJFJjdH9TJmGCXij1JAmZ8D9dEPPvhFWEw8aKsgEaSunHzarFLohsfDVbTfgST43PJ",
  "key39": "2L4VWCoujN4c49fyGtkMcnB1RjKxM1S3MmmR2y15A2n3nZeix3VoCFoYmAxvzdPw6sXjdpnuLDAmKjaVUY5HbFoQ",
  "key40": "62T89wenx3JeAQebZ3BTVmMEacM3fBbzRkaop6zMFWBpLkVzZ71zQLQ4PCHohmUQJum7nV6ofyd9jYbHP7RHY9m2",
  "key41": "23Gv9PSqDN2NEdU4x4iKMHDrYpVJvdDgeeMHd5pShbYZxkX1W6KpiTh4RUnQPFuXGnHKF2QnoRSnUDsSMNAnHKGb",
  "key42": "3Ze3o9tCoFSaMBAwF3ZHuRoFFoYj5DvTgyraie2aK1aXTsTrWRkUp9R6gzxpcqG5aaUhgCVGYhpYjXUics7e3aFT",
  "key43": "rnUMdmoS7aSpXkct8cjYYBWtqJQ6EBYpj8cYisjo2oawt35myjoSNKmvUWL8ktKh2mYVwJJD2H1LVSitV9ya7pD"
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
