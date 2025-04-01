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
    "5yhihADt18Vs4ci555PM3SE8hhH1wRAdRfh6FutEn7iXyUeFntdhoKzw29uxmuDqftxg6jSHxMfUwv1EZHxMnygc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBU8Ecw9XyJxGkutSm67Yjv9CmGwafsC6rxTtYxjYJ7HEkCaGXntyfMqHT9iAvni1tqMu6QuDcwuCzk3bxT4MKu",
  "key1": "4fyEcvoJjpmJfUPXTE9ZNp4194iDdAJxP2kKXc8fh5mrNLnVyAzkYAR9KDSjH8EeiGenaNgLgmh2jN5VzEmyh1RX",
  "key2": "3qjHUB25KkGm8ig28oYXwBfUm7peRr7dy4Apg3V2VJYWxGD4VvCDypepj6PQK5tE2VRWU2w3JDAbfQA5rXy3rbh1",
  "key3": "WA6t8M8ua81aoM9DamFReJdwKDdwo7SJoQz1pRxiLCkhaVtvsLuFGfXdSfdr7eNq2Ac7RoqFzpMy8sj5RNX3vdK",
  "key4": "33Eq2CTRQEnEg2DVGZfCn7NunG6rh9igw2FgBStTSpAhaRkgspsWYnpuGrdheM6RLvdU1FtqJmpbBmCVwzzSz4Mg",
  "key5": "zzcvnas76w9DEyQcaX8qzHcPQatUYVxyQoH9HndxD7DXNCzM2iT4svyznwNmVXQngLfc5LzrnCpCYVxNrT8dgWg",
  "key6": "2veTpeFMBGjBnfKfkhFgJQZtVAXYVFTD7TkJhECfmreih7gnqar6kkdiitDfPbpQKA9ehFfqLPK43hvHtM2wz9BX",
  "key7": "4AQD3daep22TjFsvFoEdBwnsf28xrKHmRRwRr8yVyeTNjeuZoAJ2J44MMxaLC1EqM6UWKkDRtHukkG8oSaquqC2P",
  "key8": "5uyv8ZfY2SM9EVUosqx3VVBMat4sbZcQLP9ugY4FB6YmHM2QWCT9VByvgcUE8ddHP7RpC5yASSjs8Tdm3ttXHyGN",
  "key9": "2hXjqqoXeLmTbEZLXCgCsHDJDxbBmZRAzwVZaV91d9GQfiu1gd7btg5NyYoE9SgqwxMFG667XqrtDRCrjuWNgS3M",
  "key10": "2ZmTsHxSMaoHNX9HEihk9R7RgSRw2NgsN4NR5ViHsnzNTYeu4HApPgEVqGSE93WVFKmFkmUhpzgX7Gwwwe6zQUBE",
  "key11": "4K84QsJupcaEuT4oS71opEjdnwLwEC7RVV5fU7eZ9HzJe1sus87gCLitHBkaSZNsiJYhNxwHW8jp13Vn6S26Gzq3",
  "key12": "2fsortCrkdKdtfQLxpCNQeQ6RLsbn1KevJVxBnkn4xhbRqWQBqXLgswDV68Sazw5GMxQLJbqL525DcoinAcb9wx4",
  "key13": "4YS8g5VqPXEBXqoZ1Ve6W5sWCmvANZ8xRk3wKLUH8bieMFjFBF8NDe7qgwoqLJmLAfc8h4j54T1i4ZXWyskNzhkg",
  "key14": "2f7EVJQuSdzULTBbvCPSWCQgGjCNWGP3cTfTPQ8bUzKBpkiduVGPosxMjDxif45mCZPwYvD1cYfAU6J6v2Db6rDK",
  "key15": "3wVbeGa5gnYNftTe5UcymwE1cv3hjYZQWyLe4ksxPoRbdrogaBFS23inL3SHexGwY9BSqHh5pSoDiuqurUjdE4un",
  "key16": "5EMiuLS2S5PK3r9wdZU69C8LYFwqko4CAq7J7d9Bp8jZKBVBgrcjdJyAexudM827ztaz6jUBMU3AW8eNa2dpKwRg",
  "key17": "sWrJQEFbRkNCcHSSAME1Aqg2o9wFZAwnpc8s9s7BZ53gBPq36h9tY4Kz5v86hDYv8p3KEdZMR4twcdMKtSGeGJp",
  "key18": "3NYojSTCBmk6yaYdPgE3NZnTATVjwVa4H15LegZYp5dAEyupqjmAChqbwV1GYr5H7PQknhNjx7YPjDFtACLBmpwp",
  "key19": "3UUtc48mcw2QtN1StPB9u2BQtG7LqN544d1vKbVQCEHDM6KR5jcrFXqyhKR23kzB2EHktyFbTSDK1jjYdehpHDXL",
  "key20": "3TcpebSXsAwdphWBv12KNJZeumEALhuMJNVsAimevogt3AXXDXboQmesZzyzwWiCyCJqYZZFsCYtXxXFzf1N2GWb",
  "key21": "3eig445zc5CRQ8GDy4aLsPNv6E27LA46YdKcGv6Z2zGPqwwj4JgzpAs6d95qDRTzv3P7SvSKjFBxHuuRfSWKzCyC",
  "key22": "3tArW3mG8V8pxpVQEy2LZCXwEBqQbXLsgRmrjThJfWDJskw88YYtGiPhAddMtu8JHy66bXeNxfEZcKd73D6BNPBi",
  "key23": "2uW58VR9Wf1z6zgVM6j1tN3AGNrxirH7CGmA7gUxWcvf8X4w9GoyPEqjtBkT4Y23RQhsFntsY2AushmLgdtPGAvZ",
  "key24": "5PKv7LP4rRB7YDZdhLScV6bB6GrtDooMjvM8XTQqXTL6xr7HRxuT8LFN89Bog2xoGyUZJ1AxmUGtBcaWWVoKq7Jm",
  "key25": "5t6CsoMRbaLUztStJUMvEXQAvXi2urGajGxqRXtTVfqNwSMJEkVgU6Uaq4RwPqXCbUCokovt6qmR15eLM2cnMDE5",
  "key26": "5yUDwArbnPA8wscpwdrd5hJm7LteAM6NtR2mGtzGBTNe2Dr2bMvkmiqfonFo5FPSqYtQ6ru9Mw1abrsGUjsh4Qh9",
  "key27": "4mYMcMFZnQ5x4S1y3Gd76yR9DwxzCr4vTNRTGTW4z5Q6vXUgtyUSpSYkdkXL9xtAYUjxtJShMxdkUmfSFdUFT12R",
  "key28": "2aGHQVezximgDXGMKBGNMZztXfsj6Bnq1ovsEf7CyHGozzNiVGm9TEmELGmShV9TLKQw5YctgapUk62KKSUza4Tz",
  "key29": "3ipH4xEL275stR9uMF6ivewuohB97mcx8S6oRfSmUB8cpePdcWPFJRgB9prhgupRULuCzD6Lg1CjaPqe4XkjsydX",
  "key30": "6Bahijy9Hn9aNfQSwJdyccRSNSE4MXBmo8MxaoSnnZJXGT78VgFr9HGGrREUBQBcxBibwL1xGnDXMKwof4BtwEj",
  "key31": "2FCfyDg9osXXRUdh2V8b81N4bdvToNpo71sDRyDq2ReGSFPYDyFq43e9oC2JgmQYim6ybMgz23Kfusn8GW25PCwV",
  "key32": "cWmMqkon23DuVdPEW1QMDTpsX2Wb33cok7UKpeiLfPxPybHHSwSdqAe9XSKirDxrv7ghSKDm9gETdG3hCqzD69E",
  "key33": "4vH9RMRvGZyPZXzBQThNg9shKxaaqeeSdTdfF1fk1hY1pv7BX34bEBa6ULfkdRkpWqQq4AuQW8GfbiAjbruAA8pM",
  "key34": "4pX5snLJFZ8jQreq5TVR9pkgsAiWVBY5QytRpAXBZKPMX5fJkrTCji5AnZtfmzQCbBCV1z4TB56f6yybqJHzoobJ",
  "key35": "2Edx4YC3PX6d35LjMfzogKzWxj1k4V2brdSsg5Q95fTTFmE5fvrCzmg8QeV5mZCvJoPNqTct4mEJWSztcqA6nZhu",
  "key36": "34deLhs6AKyWEQ1qdkoqiykatY9rTjNgGNY26VruenW8YZNqMg6qSYRV8E9KJkuJJM6YJEZr1bcCgQJ1NM6ESNFd",
  "key37": "3umbiAecPb4T3MEjdkajmNy13gfezRP4ZDVDUmATBkuUH7qXw4JNnvpzWp9G9BSkiFEfrRfwnGSMxFHAQwj8MtWG",
  "key38": "xQHtd2HRTXAmFvS5Q7KyvszRbMiCoYQtfa1ZEAWKiu4JaS4mY1qt3duVZypaQ3cZBb6Hg3u2dDVzqHR3VFvFqtG",
  "key39": "4NUvFcuUtC8ETbjkfuVdKeQg6jNHYT3nwyWuzoNFY8MRRdxq4ofbuXfaa6KPUfkKttSeguSCT8X6J6YGWppwrrWS"
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
