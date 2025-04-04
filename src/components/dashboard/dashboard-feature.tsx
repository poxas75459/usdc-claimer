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
    "YcXRSFvmbbVUSqhUwvs3nuMToP6Bpg9RYfvR78Z3kbtkpgYWRrBAAXLZT6PnoHft8aA7nXiZhRbmiPGGGJWBC3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P2y1QgSSWdxCXvpSAgLGfc6aVAJpRs49mZdpi6zS5dRVqVHvEedxRzVXe13DsJECcEVBtBjMMkEx7YsSwSFBpFA",
  "key1": "5FpZWuqBSPEmKKnyhNM3dhBTPBkqByCY2riEsQjhVMibNFYJsZszfZdRM7T7QrE31MaXXeXZkbGcHxjGo7YnwZfd",
  "key2": "2TiyD7sY5RszYcb4dF23HEtnEBENC6Myy76iW6Q6mxJpqJueGaKF9ABH6Ss7cxHYCaWEumChbui35uLdxfgJtXZD",
  "key3": "3xTjRBZ9vZLkQx8esid5yBmK3FwjkkHm2WGBNoidS9G8J3CDofo8EwfuYJJiHScYvseTv9bXPwocNAWpLhNwarfW",
  "key4": "3dggHcBuCsH2iwYVV9mPVGLDCUjARXSG79TMC3d4CA4erechM4S1qYyN4eiqF4diB1odzFDRQM7boD6ULCQgpVaV",
  "key5": "4wQWkcRktabhA1z2XcFUCsHK9zgspiBn52YVDZ8XJj9YEXNq9HWmMjjYjM4DCDXQBAUScYoTL3bHzJdqDavzvwgY",
  "key6": "3NJx7c4WcusSYRvkevrcWkqcwiYmbJc9UHNgkmU1gN9wnJR8pvWygQFqrq1aAjeM3Dyz1JH5xCccxX47siasJda1",
  "key7": "5uvfqkxe8E1uAh88DuXeP5greHUL4AJb1ez3wVuFTktLteUumz5xq1q8EUzuiLjcvmthfUEGCePZxeBaJXw3eUNp",
  "key8": "2jXxiyVLe1vhYaN5azySnw87C7uCwst9aoCQ4MCxcZ6bmNvMM5nqAHFrczLoAP1hF7Tiud51tRyUYkEfs5SvZEpP",
  "key9": "sKtdFVvdZntfEhKrE94hMAYMw5oAH56vuLpmeDqZjgg3qV1jqncGyuJzyLPomRTreTi47ryLzYvfdRBovmtNohS",
  "key10": "21VhPnM6QdZw5XWHiPCBHVqMqg7ipwdhk6TQaiTjuEbxRXdFm5V9cPXZ839NWVZphx7h94ciYK9rUZ9tbn9dLXfQ",
  "key11": "58drSDN2xXiwT5ghBqAhwLhYyxVbuEZmPSfdSZN7gqkPN4n7Xr7MC1zPhFwgScHhFa7zY5ARKuvFwSRpDgkDmTeu",
  "key12": "ZnRsYyn67MASVDWLjR2QjuCKqafyTnd4D37RiMgHuVufcYCr8vf4wu5vvNGyRSNLTLuKL4iNf2tLq17NEey88XJ",
  "key13": "2upQgX8RHntyAowrbRnQAy6cww3RaFBrQKzjw553PMJSASqoXEgHfxq8m7TXm7aVqGf7Dny4mobvBd621kBNwPSm",
  "key14": "5qTqBq3Hgn1ckJ8Yq9oEzcHupBendJPTEtmVX1hr9zH7Y9sQABZSPxU7EKAHxuFeCDJVLQZNtvNZ4RqNNKDJe2xV",
  "key15": "AahcP3dwkwqHg4tcQPCGrZG2dJaojUXYDN8nqiiCTzmVvvCDLsjoRFKqcShGfraufCijeU3VnkTjVe4wfEKGJpr",
  "key16": "Xdp1pUe6byK3hn9X8UwqDnv3yD5C1rVV1UuHJ8u6gZye7KLxzZvUNcvbQjKVoU1p87j7y4p2NE3iRWLSBHkC98m",
  "key17": "3dxmgxNBz75XbGEcoDkbdGwAy4127XndsCz44dy3aa361mnicuAYgns8GrHJuohPRzutvkxACidttHzSMHe6rros",
  "key18": "4QQqKcVe6AxFdJcfo6FM3gXTDKd6zDgdKPvYnbJh6A5wVG84mz7upBDAWUH3f8YkxQ7yQPtJLKgvVtWenGoPr5pF",
  "key19": "3mzcVhkGiLQagNwbLRforriFwD6TRS5wtLjZnFfBmpWWx3Piru4ns21AQbS8N5jcv4Xgmq9QR2GS7j6P9R3zr2wA",
  "key20": "2zZzNaqfXohYemBwKEewm128ZDi3Vu4X51tJwCx3p5ZahLaac7yVJvCsYDvuD5x39prEqzVzzC6shrzaWFAUg1Kj",
  "key21": "3hyHpSjVxaQyKnoKfnEnsNvEueBdXG9xECVbqor92xBVDzfQVno7jvLpgFaaUoD7VKSJZSqorLysRUbbiEHLdmbZ",
  "key22": "2T7RzxhGhhDtFX3UTcpGN7CQyfuPJnwbgYGjfY9PKpELeLPUWXWrgvmX3USVMqdDY2zViDFazKgpWr3hizBRJPZN",
  "key23": "JYjDFZpc7pXyicjeoSijkZ1hrhSkD2QuEvkJBhu2Tta6MAv7rTeJ1tB1geJ5ZomkuJXYR3ZFntWEmfhrUxhECQy",
  "key24": "3bPCWdEu9TDMPvsFEUJh4WcTvNh9sCSHw8qWGV2Sj5WxkQBRNzQy5p7vg9grLvpXtbGWf8mnuBhnQgBpmdqoDfym",
  "key25": "4zUUGQ3g7Bjpw8c3chyDz2jwuxvEtzMAsdVygMMoDLwxta9b5As3nR22HjqbQfwmKuKER9ZiL6CXnw32xpoLZ94g",
  "key26": "3RKjHYqBEusSyLzcYwe6Ya7EKBBpfmVyzBECxWQgVN6FJsXYJDy45DYAEWRpfHEWG1i2teQTZa47dnJEjrb9hd9a",
  "key27": "5vebYwqStTpR95fhuBwgDg98QbPUiHMoG2es4dgtqy1ftKdq9ZEr43QUAMuhKEZ7AFWMNCqaePxWzZRYDeU5yY7x",
  "key28": "Md41qB2JGevQGbfMBgZBqLAadxFoxD5vZkSEQ4DN3wkp8jMvoHGA6c7igANxUZDgrfXALPfihpccb3Sj8HbVY8c",
  "key29": "5dNQUt4pML1QqPLiLPPnsq7VLZch4d8FyYiybdCpo9rTapd4379goKMhnBwGrnSKvuLsykAt5sLfq2uWfXbRRFQ5",
  "key30": "67ApM1bXv2PQ1L9AjCBUSiPWEbcHDuB9zwNr7SwFj3PTw7ocmATY6AYXB59LtFDB6ThvUi6fXftL5wqq87y5L8S9",
  "key31": "656FgxzGMRQXa6aReb5RM9rMzVdb1t1ae2sH8BaBUHGSsc876gecXTTG5MPZwJavtG1tQQzMtDzZxu2DsFfLZLt7",
  "key32": "3qCvYrokbtgHbP73sap7L4CFACbrtcuBvQpvfdBLPd3PvpH7tmcFhyB6U9yPVbGqLvJ4nzuTT8Rx6UJyLqz6YB55",
  "key33": "2fF18HKABwzkZe7Qk3ATAi5o7dbvxesfxKYnfig7qVuMs8umLVDHKhc2GjcgM2yLoKcBEne8kpSzLm7m59v8b8wC",
  "key34": "Pf4aUVL3ZCDZHsijRSRJbgUWW2focvxENso7GQWh2LgvVy83R53FrkAuT8MvqA1WvY2bmP6UhssfTeh2bSMQqtM",
  "key35": "5KrcEhpK9hskUwpsvnKEDGXDa83vhsnMC8b1cjpfb1c7gHBnKGc4LsB2mBawjRFAJcyLSyo581B5biT6XsiF8iEU",
  "key36": "2MvaLaTdjTq5UvtCRNG1zgB7ZDu5qGPUs9692CW5ECUK7cS2nm7qKtcz8nWKwWkJJS8FXazjJc976aygf5co5t4o",
  "key37": "3AtZfgbhsUxi8ZFHY2jWpwoRWhSr3DuhNRyfcJUdgZBJAKJAe96YjQvqSN17cXY6AfxBM2j5icFxnUkjb2KGaQsM",
  "key38": "3BvNp1ToiRLk3Jbw2NV2AjWCUXg9Ai2niguvisoL6bvXJcRSzV64rTrBJLLdkYpFjdGxT2AsNfF9N82btLb9PrcF",
  "key39": "43nhNNcrNsdDBmz5SoCFpkFYeAd2VGTGbQLcYFhBtiDZE71kHDqCAHX4duCo4ggWaw8mQJiB8mb5CkTL8Nxd1dPD",
  "key40": "5reAe6p7UQDdQSBbxH5RG83WHwJ7dWmenXKh4FNpPy95J88bo3oAqhhe4VyeaLwCBXrS7wTCELQrEmYFdGQChtqb",
  "key41": "Y9CUzCKrmSiTKyBYCVweqibt2trsT95arDP6n9MBcPMnRMjsLsYtDSutT1hqx7LGPpFgRxP7NspGnaA7E2owJoi",
  "key42": "4ZmCfd2Roa2nnLutpBAxdBqyZQw89mwSrsU6Rr2wE3QLo3FLKmQeeUMPG3E3osCauQ1YZp4rgbA2US8smD3tycpH",
  "key43": "Td68NL39r4pNiDZBFK19AR8eJYfBW85479Rv4Xwrda2T1Ut9HvpRgSbScL5rhjQpzxHknQ21UL9UWpjeYRk29ye",
  "key44": "SJkDusah7wHbnuhJuUbFkbdA4Q9TYtwWGujXQeweGKL36wjTwtk1feLdwQ7pWuYAppgtu7X83nsNToeCighbkS7",
  "key45": "2XSfppbkGHwBEoS2tRMQ9MaxeaF1RW41qjgJvWw79HxsBHx53yAJHKeNXrUVtJP26RyodHGxroPq8KgYhSubPQXH",
  "key46": "xRnpBpUTzmR5Tci3GeHs7ACZNipuAnJqujbWWpfutDLdH5vutLeq9WuaHj9nDQPHZpXBRBYHzCvpgsey4XgDKFN",
  "key47": "4E71erN5Rhji8VKzvQ8bjpVg68cZSKkcYHki5YVAcjhZjJUN83Z8rD1rHxVbAW7joZH7fZJEzx7Kn2K4CCHQoVGd",
  "key48": "2k5hMrhLgBBtW4putxdXQZ5i4rvXKu6MESHryAScuqm2nucMAF8wXwqpaBiddGWNXUVfY7ZX6w9YwC8r5kSX151R"
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
