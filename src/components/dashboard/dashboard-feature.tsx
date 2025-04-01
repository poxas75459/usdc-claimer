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
    "43FC6cUCGa6m57Vvi8qg7W9LFFEwcivFGcq9gEExUJKRyNxYi97PT1V4eowjp8NcX1Y2W5GoiTzYN2KRcZjAEKue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNGCPcwtKT4rscSZreXUW995ct3xqcx7dVkQTA4zQBTX7iiEQWphLhaRmdCUc9SsGEGSN5by74cXHtLGmBcEnnu",
  "key1": "ZeaVwBPtn3W9ZzEeSVCa2A9EH5RC6jm9wXbgkVJi57nvCJiUFezYvVZQxJigbH6Dkm3Hgx1DKMJDUpCQXVHrm4b",
  "key2": "34rXa9cHvTnkw5KpMNrwzEZQoarZYV1ofyPDeivyZj22JaQkRn3TbGNNrzxhsiS6u5y1TCmcNK6JER1s34dRoL2K",
  "key3": "m1BxUwZXfd6gjwizGauxQidYrtdM7QRnNeLCh7oCSwAbJqi9xo38ht7Cw2k8AxzzcP26jNUN28N8CBi4PGRZHVG",
  "key4": "556RokYdC2PDmHhN7bjdCeaTLod7pw5aDrUxEs6hnhd8z1nmYQKk4KbrUfrW6ZgdEy8fwHwp5V8GTbHtjExHixqv",
  "key5": "NGsAhGp2tq2jUZ7HJV2t7M9v3t4r3FqKZPHqnN611LuV2vRBzgcsCc4pt7zhyjRdH5knzspNyqq3DDs5qLgWrbT",
  "key6": "4rYqJHMbmmQTqkqNre2Lh7w6KAsV1M9pPpRcJgJJyt8cwgTMy5tAG66zm989xyvubcProALXgmGxo4jHmSmR7no8",
  "key7": "5xWi7vZyGBqo2qpCZcctSx5DN7M6ef7X3aRTn5WMAatwfbnTEUKhQtksBpuaxoiXDCVe1wJTHZXdVoSD8bqoTjw1",
  "key8": "2wKNAbCGx1cGfkhrPn8bFasf2MZ4bucd8FbeEN7VhAzu1R8fwhfjcZy8qQzp2oZDCQLNkqx4GjQQFwYdpVkWPxzu",
  "key9": "3SDEgp1iNxxbqBXq22MR5WWrXYLVU3Q4RcHBXWs47Y5pvSDRyKvevs2hMKL9uTbU5bNVqRjcQUu4vgZ5adPVVP7W",
  "key10": "2BeXWzzBepMHQNz16iaLtMN69Pm4bt9kxFRALRVB3UPXcNtvn89aEwxMTzBUQHdu9nixXaBtkhjKn7KmtBWhg5jn",
  "key11": "5tRpypLf8F66h1g41W2Yv1KX71zLijACDdu5FB5mwmBhG7YGF4Lg3CHmeiyQEq6AHv2ZFKw37ERxQEvN5Ff7uyy3",
  "key12": "Gs2Kbe7xqMswa1GHy7MTHQ4vSLoeYUVdmdbiQD2w8C1GVkpszM5fc9ZC6NecXoQ2d9eXFPnNmnSwDU3ksjTbD8Z",
  "key13": "3pSNLMDh8LfjZWGgDKwEdkA7oy3YyajkmfWL3RTumFkcr8HjUPrPvzAiBeeot4KPzrgufGbjETgGwiiUt5QpfqkM",
  "key14": "Qr18NTQKpijghbtono3qjbrNe9AkUuKVFuQtRASWhHKu4RS8Le2D19Kavt4Tpkp9StrZpsuBGU8toevY5cG5vpE",
  "key15": "2eypUZwmqEJ8NqF7vpP3tpdMmUeNExteEVk88Hz3CngNkbNu2nwnmexbCBXmzbACQucCadEgknNmDwnvzMaRzDPv",
  "key16": "35MehPn7VPDbmTTz3682pzrWYEYmx5X8JN6woq4GNzY9UGJchRqfD5cwz4Ze5Ytu9WaREEq5d9VEALw2AmJ8GKmX",
  "key17": "2KCscYu1cjSKc2jZGMxg1G7MDm3n9HdoHcqF8uqTen6mWnfdf17hUXTrE5ernY94vNgg9VY2HKrothQ5QLYXcTAB",
  "key18": "4FQkv862QweG21dJRMSYMcAboo7xE5kA6Be5nsub6KpuQRh1tFeenSeUYHL6cUXmaB2PezuSmVnZZbXBiBDALK6n",
  "key19": "4crCvPqpE5t3f3PzRxTzU2Un3WVCrqJ6pzmFqdBET5hv3Vjk8JsB31Tyrucr7M11mq1zwj12PYhfAuSkqjzucWVB",
  "key20": "3dcfRmJCcavNcrNX1WBZ8NQnjYMDGYPgGLHkPFz3fKQmvRUBuVjt7oL4ptC21qzsa1mF9hVwRidmXPkYCRWDABTX",
  "key21": "3vGx8uz1ZHuSbVNu8JmVZapyKyFRFJ9JZXwkQrRa5Ae2yguPArEpM5Zi8wMVi9dZbcxJaJxKrqnTeTQyop3tNpGn",
  "key22": "7inXP8XgSRshMKdksB6k2nJ6SeNXvvYAu16VB85WtcepfrxAF1GT1EMdrauwaw2QhxhtWp9ZnDueEiL62njs9Ne",
  "key23": "5jHLpFLAtveLPUb8hpZTvREMeu2UGCpMUU7iBa2Ycedvy6pzircBukiwmRtpay5Y6JdbMkr1bQkMhmguFV3fXrYi",
  "key24": "n9Cxs5XxW4Z7GVdjA39kdTDkv3R4DXBSv9Njj6UpYki1DcfCVVh1bphVFJ8FGHnYfeBf9Pw2KcPkuFFbmW6F9oC",
  "key25": "LhJJC1ALpWF9EeqjWjesXZcbQyVE6VEx5b5kSpTfE94NcDBYr87Cn74FtEDE79u2DSWAe6bxwv9To6knoxAqRer",
  "key26": "5ie3moGtbDabZpX4zvMmu7tKATBcG9AZE54f2Sm8PwtHcrZgNFzUncLfA8zYqY7w5NvvmtavESnkoSfZiRr2Ddsh",
  "key27": "5mdMJ9TETqsy6eyBSm5k3qf7z38p9tKxLbu14qmJ8YH5vPpRAKe51Xafvh8Nt1Rg5ocJb9EAma8JCkMkcQnkvqB9",
  "key28": "5qfVWdhWvSQgf5ytimAnVTuLKEfL7Jw2vrpaDactf34NeVkCCBa5YvVSxcMvUgKDviecg1EBo6cTynMyGGSwJuQ5",
  "key29": "5qLD1EkjWfzQFix4EduUHFCnDqioqHctbBQDwSVjHkGqTmqrHyCPy6MoGQDypXPPUjx5HQ1jfSEWArZg12Yoegrk",
  "key30": "57i2Rr9fAU1ZEPkXbRctGvFCSKLSLRJXMjshh6k8yt749jN5P7vRncQYAjVHf5kWEVTLbHcTYsnseo5j8Jbgxcmu",
  "key31": "3SPPcMcT9XLucQkLVsMkrEP1Z58aN3nmH4vrvQhmwX7CnL1PMeNwceYmPgLA7ogu7RWJ6dL1aKEZJXQrzfz7WaAd",
  "key32": "2VsDpUKCRBBvXnBCSJTTrB964ruodLXgxxYpNfmzgmTyZBwW8Qv3fYF3ySSorfipc2MvNN1xyyAaJARnLd3c9uGD",
  "key33": "3zZvHCGMR1jiHkQC1iUSbK912qR82HaShn1hvBgTZXCkKU7QPnR81Z5HzKMqYPh78egTF1wVF21EdLbSCGsjtkGs",
  "key34": "2QjLr3HXsQAqcpeJVGB5MQKb8D5bmmRWeb9qRaFDvRwCDoogw3D9JHrGwnn7R9D67wfFo1iZwYz7oDbdSsyXcwhY"
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
