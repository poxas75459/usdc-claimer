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
    "5jqZmQz9GTZMn2fQmH1tUrudSSjjLLLoPRAA8yuBfC7Yu56tEHmxW8P85Lv1AQWSW9cK3BvGcNvu1cJ7dFWzEAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rb8tD6dziYZ3EmdrQyXMzgJg4vhoGE7NxKavbTKFEcCAwdWcpibpSuoaVxWwi2Eh8VwdrzBi8BMFD3oekKgE65Z",
  "key1": "5cqZ9dBZXQyeCy8AQV1pXXt3PiapoiLXsS2GvaNDrD2HgKPEow4EbPUMyQ5YHS8vJkG2v8F8zvyguFa65g35YNsp",
  "key2": "5fLg6bLYFEn4pxtw9UoQwUwJ8kUSiHv6T8nJpjxdXSCDJuoe5YFWkDSbwi978dk8XG2by6gZLv1bSRXACveAYiU6",
  "key3": "43dSPjNxANPAedjo7KNZEKBqcbq1p6pvJix9iMqs6LSVzw8Y97hGQAs52ndG2TeAyVv1jZYoQLUND25beSnE1xcv",
  "key4": "46XzBur8Zz5pWm7jDogY6GwRWgpg91egR88Z7L23zGoKmULWQdjsvhjtiDTnBWq4x8PqkCMQeQMww7duV4jdeaZU",
  "key5": "eD1JjyWrLqxZPgJT1r4mBEJy6X9mEEhEdo9jXvWk9JvcJD7xaGsbV8SNcLJVAJWW3uHoeBZizZ9esqf2HKHhEJd",
  "key6": "2kvBsEbH7kCjRWtwk9fyGu7nZepKeRj35SzAdKQEWSSX6rWaugsRtn1Bo7YFqhFi8aGW4WjwnornWUr5Q643bBGe",
  "key7": "h8VQMG71rHEGCTVacP3HkosdSXXFqqDvgNbsxmKDoBdNzT8jrFJcBwjssgan55tfDKRDUrHe8LZJWr6RK2uXoqP",
  "key8": "4WcKeBrQjTJVJLgHDUwnfCDQ9bu6JfFN8xp8WKmAQdUqduQQShUdeCzn3SP8FfrrVbfCyjQWi1mfsPFF2uC5b5dH",
  "key9": "3jKVsH8Fz6KnrxT3eveH7qsMnyhM9KMFuQYtiKVjJp1JsYBnuMaCaM5Bd8X634fSS1NLfRdcDWDh2Tm64ZGHjB5a",
  "key10": "5prC4bPKWDkAY2rwDJPvZh8zAykhSc5yPL8TjfFYDCQkrWvaiJj97morMzAFTXkJ1XTjGr8n7HG6TjnqeaJ97FQF",
  "key11": "9rL7e76G8Nieqs5MRzeBZNzK4gvAnL69tEDkRCNfbXzJX7pkntqyRsi7NAqyvUAqAAfAomYpDMyDQiucdAMgrsY",
  "key12": "31ag77Rbm3Lq3kNETME7t42VAFkPRMyGhsrzPXdaM8JgbpMqPAjX5hGGxesBc69KEpwtaERuwRkDetosCpwFWSQu",
  "key13": "JbZ9ds3kzeAyVY4qkCxnwQhaj6HPuo2JR4Gw3uKLtwJ42rZNyDwmC4bHpEUGEtnuG9d9yxBJvVy4fQ5E4RG7q9f",
  "key14": "3nh1ULxJQS5b1StHs5ntmUSwTeHpAFfgym4T56AqAxsZe9QJK4MdSytyVXAprgSoe3HXY3QuP3wHQ8nUFFSQiYi9",
  "key15": "2BMC4z43qtBjxHG5ja6rB9VMWkB4EfmFVqPh6Za5yRNuE65Q1xkuzVYgfH79SitdLpRw8KXMNuCwgEVY4zxuT3FG",
  "key16": "2D6eCbkDSUTNz6Crg2kpcJh4dq9ediVyAiZtMBiBGSvVCqzW38hejAHF7Ask6cot11th1BYBEchnBQXNJ6sd6Lsq",
  "key17": "4SQR9DF7mxyEgNguU4JgCvCCDtsTU52Tw18x7fWh2y8nAfSCc8F7777eCxRtd5WnxAW233H53KtqWq715i3nJzhp",
  "key18": "2oEsTVdTrJj8MTFubyksAfTptNhcU6LUVWTa87vfMqqSX9GoK7hDN1XyAGKvcazR5f7jwkGeHzBo8tEZMGdsYi8y",
  "key19": "ykiqDFAFaLGMJv6FHrDdcUBjWkMQjgSSqXMr9Eq9FHsdjd8poLRHWb5KAMC72rRfX8ThUAXP7KYjb63qLQD5A3P",
  "key20": "2BoLhidMAo3v44gncKmNPV9wnxCinoTxYmjBRKGTaTDQELtEELz9YuUonQmaFJhPbYU21iBsCyKNVxZY711Ld7de",
  "key21": "4jsjRc85CGuTdio5QkKRYQweuutJpBFCyMKQsZtkT5MPDXMvRvcxKUd4WGWXto19wTagB8CMgETDnJNMLuq2Us2P",
  "key22": "2KeKU9qkUgkHu74htBpPF6tfrtQRD872DSLrxiV3V1x8mMNUDWLMMrQv21sMxC2desEA4aVG9SSan6u7thYQDWNm",
  "key23": "2mkByh9jntZ17DjtTUbKVLRkAg45BU58pBkLrjz1srxAdsoeyzWH4Wzk4beBrXxfozckp48iPpDModZMFcnfj2eR",
  "key24": "4dkbhktGtm9SX5M9nuAhaiCh1So4Nevym2FZfpQDMm5YzSJTpuWdjqibKq433dau2oGFUVXe1YyMCkFy72PSwsgu",
  "key25": "5HndddM2BMP4Fsewj5ZpbSrSMxfaPcyZJ1WsUXigSxBhvZxBsXWykNrsi6Ms4H5oArrNzpc36Q4ZP581iTSJt9kh",
  "key26": "2DQoyimzcecbC2Af1AVWRJiGiYyYry4mWe4GYjqspdYMYmNU2jgjJ4Qe1ZHKs4XWNfzHt582FZpjFWdJnMKrVqTp",
  "key27": "AWv1KCAnDbr9cS1XoMBWg74YtQU2PWaQLjtwj7PkVvK4xsh2aE68ibfMKtoBWeaJy2SGBscxNg3C3TPurJSUfUs",
  "key28": "3xfTeeyEi6xiwtKe46C6HqoSGYEd821GmgLyHmkiQiRzZuxgvJhtNkERCZaLErQ97LcSLyYSaqUz7NhcazDVyUXN",
  "key29": "3ESLy2Mqsfrj5CMF8s5SPRtseEzXBERkJdrXRyck6tCvgUeoTaZbqjwMi4cVz2eks8b8nGQn7DyS1stJoGREAFZt",
  "key30": "5Fs6oFukEy5SY7NEpwHJbcvGPHEpJ5DL6TCfpk1uvDyyLuzVt6SV2SvLdg1zw58Yc3d2vg7i1mxzaRuS1kjA7PXA",
  "key31": "3CBYQwabS32pNrJmHHwFoXMwAWx1RY9Qhug3hDCEJXHEdAVuAZ8qFDL11ZGMfsruKBbeQKEb9QLd6ggEeztsxba8",
  "key32": "uPAeQzqebRdUYFGb3yPCKNuSBXE9svNMUi5bQ75TFkyUoWVTVPPYfWE37tB1UhVJSXsuJvuSdirtVNKgokkkdJV",
  "key33": "2vKMTbETgsRKvNiBv5FwVsJ1hgXTuYiD4WBkGvYp8nDmJYdCRiN3YcL5wKkCZu25xjF3EygMFicTHfE3L7zeYrUb",
  "key34": "3VEBqBXbvf182LsZWQakE8wD58wZFowYE2UoZoVHPSQ5jhXU8RDxuWYMog1k5J5KiCPLowWYK1RP7uhGfAaiFXrw",
  "key35": "4M9RCzt6jSuXU7bkvxMNY47RjVCZtFgUPGauzyU3eMb6vv2f9pPR3kx8ZeSr54k8isGZuLFJXz3828EYg9aqdT3J",
  "key36": "29timdeNeDRTaJs8C9rvGHYZbaqogUGrSETH27nzwuUBrHNS3k3hfG34R9MPA8fFsfrbsKYP5LvhZ5aEfuQ9tGss",
  "key37": "Xaq3goEMdjp12ZmPP1ejqL6AJV4ZjsKHweKnHhC59YWF4vPrF7AuVY4TnL4Wvw7iE9Cg5JHH5CkRKVykUyckL9w",
  "key38": "3iSms8cVssgALUWr6khn9cdZFwZWT7iNEuDadwyNz2EucFatzc54HT6y3ZRFToDNJ7Ci6h6xV9x9JeiJrHWboHsp",
  "key39": "5WTmSCPwkVpJ9wWVc38u8jruLK9NcS7pnE3Xy6CL2VhEatDmQHXiZbQ8UMXTs3BnANzwST84qdJXVXGLRhvA8gu7",
  "key40": "D7RzEBXQCki4pCWoq4tiBxffFxv4h1jmhEGW4dGX5hqQufwQJ4yuHUTCx54bmZZJYG6Dvm346Dw6scFsntRv3Nz",
  "key41": "4KSUj8WxhBpr2rkDHnDduLeqctBoGRyZ6DZUFE2DU64TxMbw3R2mbNZsNHVbu7NXG9keDmdjmWXaX16ASy1DiL2j",
  "key42": "fpv6gh2TVW6EgJpm4hXCnu6zysdPRKqiqBs3oFWz3vC1L7BBp8gmqiacMbWpDdyi1cZJfGFCwhd8NVhoFWCYyKg",
  "key43": "4Ee3fNTo7WdUzQYyLbE7dzvU7QXz4zEXbjgt7DKv8oE3VGfW6idRgkJsNzazc17CAuS8XmqWW3nbAACRfcV5iyaW"
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
