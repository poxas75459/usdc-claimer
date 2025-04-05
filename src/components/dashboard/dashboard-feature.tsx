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
    "6XoTVccSEZQFBmR2o9eSytjtA6mU6knjbztsY6k3vX4UZKz28wnftBJyKQUMvRSgdnoKe1Wo1vtbHe126yx1EyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbrSuCuxhE94ztco5HVB8ayNd63XRsBbwDmttVXtLViBESzGmFxKAZZq2rwmoBtEDfJgTgz15HzsbW4CSFbDhyn",
  "key1": "tNwcMVVuyCUTusnG1zf4CqwLX4di7wNkQE1bX9xFgK1fQosRFRPpZJfLMaHHHZPtJYYHLtZcmxZexHFXyBX7q2S",
  "key2": "4uYUWk6zxNBpWN4hK9pvKCUdwJQwipACp1feYxJho3mEunZpjZCjiGhrbrSGjwH5pDvycUq6BstZXYaFuULp7sRa",
  "key3": "eY39o7yJTH91HCfVioCdk3cXcRwPguuJkCViekqH5Wid4qzNzLbAEgPzgGXMrsgG5vxBHCmYYXriLdrNXPT3M5i",
  "key4": "yn1DMmUtY1EyGFkdTM64w1AuE8xB8JLHs7MUsxnfD75dzPrSwG17zgBLuwoTFiMwNcwXyvGcgFfmawyagscf4qq",
  "key5": "2MTft9zUrzG8pZ9sfFQwYXBUKXs21rk5uCiUPGi7VwQS8MSqUUuPyDnQmWrQrbDKateukcVnZjM8AaLDkawevSi4",
  "key6": "4QYwMKuiLWjYvakj3mM8frCEMkeUMYpZiqxnfqEHpYffCd2mrcZTGnQTuN2X18ZJyhMitGHhHEf43yP6Aut5xyCx",
  "key7": "Fe8x9rEhEEXw4f4GUVMxaXF5uoZGzgRrFeGkwDL4TjpWxiU8GWs28bQTCCaiR4YeotBURec3k1sVA7fZuiFvmiE",
  "key8": "51XwkwsVUyJLYRHnDW9Fv9GBtDySsciu1XzE3Z9CCJgXa5pBp83TzLUZC7sN7re1RyKWB1ieGArNnpyCGFU2j4Rr",
  "key9": "4yzfTRD9T7ikfyZP2cbKkVASABZ6nsDGjK7seWhKvsGsnEZHzQ7i3J8SzkffwQZGYWzuDU38thtZ4ZN4z8QZ794i",
  "key10": "5ahp7subaXu2cPCbnAFWPdonQZML3kUS7D6kRHNHsNAQ7EKRJfDXe6XooCaPeH5DTmG3vj3SJsagL5ZitTEPtdc1",
  "key11": "2tdU1kTszsDVPrcgQaFCLJU97tPe1Z5TPWpVSqwiSb4uc6M3NckZ25ZkMzpeMP5rgW28eZkFA7s8ipPC2k9q6NHN",
  "key12": "2uQNoCxFiFhDEEoFJtAWVF5bFF27QzvBsvEHG7o86dkVZoa4T3ppRmB1EwmBD1cYHdcX6eUS1yq1kBDpHWuKqjBU",
  "key13": "4idPM8YxgSpZgasy89pyYDu4jRFvfgSrgnCNYFkb9gxESxLT4gV6VjCVbgbrYmBn8Dbt1F1QSfD8XzSQVsoQsmts",
  "key14": "4hbNwpBJU3tJVUr4fWhqS4AtSk5CMgNHZD8ybTGJsvQ7pU3iq7B3JktVoRrJMpZA6R3WDySPpiiGy5FjcHHvqB5p",
  "key15": "5PXK6VQyGQDFbmSwciq8jjzvjd1Y718ZWvdmgCJeEXxyXhVsxXG38nwNkkxDTGbYi6ZheEVLi7ahPFbwSJBueroS",
  "key16": "4QYq7dTXeYhQo34aoqQFRhBozMsSvGxytSo3KRFPsenshMdqrbA5j7cWA2STorYdCd2UyqU9zWbCgytdYpzx6pYQ",
  "key17": "3kXB3sjGYGgrk4HR6A8fDp82nEc8JxxE6pgtVBgSo88AYNWoSUikifKskbSwxxjcuykqtmJMve2Lng984YQDBVDg",
  "key18": "4KbWGqCVn3HbEP6aDQk9hJ1HcQnfD9K1L8yLmQkzk1T9iYmiH2cMoVh8pCGxkWVReqp93H5XijUGK6Pg86rnNsuU",
  "key19": "5Qsgges3Ne3w1mJ8W3LRU6V9ihMZDWpXVGRRaZG67bHYH5rMK32AbEkDJk4iFdVa7ewt8fsnzYZNmWQbvNHgLr6K",
  "key20": "63Y3BdoKyUAfpEM77gs9xpnC7Bxzdvwzhby1Lo6ghUgHpNPUYikhGzhQ17VuSMEQytwhK3yYFctxQoX6jcewACRd",
  "key21": "rcqyKBTquBptGNsj2hNjeREwjSVmPqy5PmEVUjjhto3PqGp11vTmzhTySNeU8ZLuRzkifP2DgwkLU5msR5SWVeV",
  "key22": "4Fp7JoSWTRhZ56FBqbbPnPVJ73wW6mqBUd2e1X42M5MmT6TTgMUKwzCWz7a4ixw8jwqQHYMjmhSf5CWV6AGLrfa",
  "key23": "2kim9VbG4GZDWNeGRVBSyEWJnWpnFRsx34615ZiCh6NGmuNwVcesvo9mav6Yp7KQeSQ32JHkJ1Sz693zqzQ8nwrp",
  "key24": "5WDcT6tw5JDh3jxtEgZ9ZyNDL91Aa68rFc6kfr5YyRk4TozWzCCZMsoTZUAayjYPwWZMmeMfKYke8gEwD99AeyTa",
  "key25": "5EWMq2scNqHgDSXNyJfjmCjva9kBFnjCit4bjo23yoapL7jyNdzeoCY1MVWr2eqxDm8APpoRnAXNqSqQ5sf3v95x",
  "key26": "2YjR17UFRZwT6ZPdouWACzYdMZ72ESfQxvoHvRm5V3LmM9cYLkvCxtUYqHhpVtQUy2DEEYXBbhxXBXdZMDCmcRMd",
  "key27": "2mycgvBV9UjyrMVTo1dbsiogSKNRT2hvKgKk21EV9QTdEcNHL3YijfNFCpwiSQwsj7dmEKAS9pBTRzAwT1pgd8bU",
  "key28": "46xLUs2gbssRHStefBXZz6ZGEX1G8HJLkRBuj5rzHwTL1egJxFgw3L4PdksExh59GVB3dESxY3CvJZVJxtMLb3cT",
  "key29": "3syHwK4hM4FZWFb2dQBnNL5WXG3efvXfdQvvH7AXwPvYU1SceMDCAXLQhcUCpmgY2s1rmUSDpvcyC9HixrgmYN1Q",
  "key30": "2ybSK6HPKDateCko15kTAMj62aBUTjUT9VW3H2gfi21a2mRUAe5FfqHTZS4eJqW4S2YsHPhj54wjYqJtAy9zUuvL",
  "key31": "3csQ4oMAZxSm66x4Yswzjg8jVVvJyU84jdx616ebNM1VZSL1NKf21s1JiuKP9ZAYnB7sLkekTMoFdwHLnTTPqnFb",
  "key32": "2m8KUw8HfQiJHz1Qv3b1ixmnwhL1aFwjUnohQQsf8djxDnDcgCbiCYTt1pi5NaWcHbxaEFP5nyn6LFThZvCq2Mok",
  "key33": "3A6LWPkeqaueaKXcuq87XzG1iDRonYgi7NWaB2CBYTaH3Z1ZEf32JjgACYpdoYaE9sMkYfu6iDa8CD6NrgWBNjxy",
  "key34": "2UmGdE9vrqmeay39bCck6PA19eKSjhuPmoy2AiisxDyP8u4UhDbSThpzDCGZnDXE7mTMaaNTUBbgGTLh5hgCCLv4",
  "key35": "5ZisUXPytBtAT4uV9AwJvTeWna4S5KXaSenZrgdUzygxRh1KJQF5YZvrLPERV71wZPXh7jQZEvWQuLM5GGuuz5LZ",
  "key36": "2kWh8bNeKEP4S5bw1CWBz6hS8jrDTBWWiBtPHqkvRT2853RabHmuhU84NND6WP6ZfmaKbYr1ebAJNhHuLMyFEWGy",
  "key37": "nsBhQSy2Va3niigqtnoqACE54Xams58Xwc5ar1gEVgg12Ygb4vU5wn7jXxTqp7hrzczrL88x7efsdk2rqNZzGwj",
  "key38": "5TDXCmf6cVXcFkbmJzpzrCmebRQJKdWvuKfNHLymdtxomVp1kZbQT96efgQwW4DKbxZGUr5qsXpz4Fp5VtDuH7jY",
  "key39": "QybBEsPVoUV36gKfRQYDG8Y9QNaTtH1N8H6YGLMgdk5gjKxmGBb9p3pB4YWtWude79xxnX1Fv8XHJqmDeoef98T"
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
