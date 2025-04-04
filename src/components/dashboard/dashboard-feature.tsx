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
    "3JfXgVWHYUTH8zYUJdV73G14ZuFCtVroZp4YKCvovGvXJKzQMrPkRYKQFmzMeyvTsy61XK3Wxmhc2zMnWe4naXqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2goeqqGXLbTLvkpUvf7mCp7VyoECZsEgD9ynZ58ddhCioX7xcha7PUrv41hFnZgiM3SrPpQMnR3W8mS9XFNaLrmT",
  "key1": "yT56rG7SJs6PoRhWz5RFCXnkt49RZhDn3wVSYeK2KWDVgjigSqbTWzQYoK4JdUrkfTVWfjM3QYbQgkfgS8mWGXU",
  "key2": "49hxPBpbAinVZkR7S4hYwgSuBeuUjwLAcky6VCfQv5Cc7GW5ax3wGXRiaWn1tmYKDULixBsEvbvUr5b7mwKkACA8",
  "key3": "Ntdzs6adhFHpQGTa1EKSSdAvPqvGF7eLFc4FDZHDgGvKW6EsZRRkaXNrtvwWyob6QNkVA55gh3daSNTy5JgyC8n",
  "key4": "5KGuebvU85KpfXpxoKqSveU24m7dh32D9jfAHi1UMuuHjnydNubpZ2mJj1H6AMagbp9V3bqj3wFk9KSsTE2A9ERL",
  "key5": "4o2M7sz22Z2k1fnaVpahYmEEYVuHDUmGkyVfAbiapD1615oCfBfonRRVMECbVYJsGohZtYaec4ZAup2dkmPf6aHh",
  "key6": "535oseMuDE9vf2Cybs3Y1AmbPReDYGRrDaM6841D4YGypLBFJe9NqLZNrPVHSkby2CLZ57nfrn6Nn4Kj1Vy29NVR",
  "key7": "371gYZvKqXb8yATRRb37KUBd9n7iisHMvbo588hAXDgA6RLExzKCwJgdriJtGTvD6jqNr87Wm4eEVmHSv94LKcfN",
  "key8": "4p97DsKC3V9TvKY1KBPkGvnRQ7XeSdPEFaTcgkk95Yxcn3wrpiBxM7iGTUVkGkYkfksBJeXuahJrdsKVrmypKhbX",
  "key9": "4jmFPpJr6r9pmVwEofwcXkyUJxp2NSQtcVaPgo5YuZqt7vCN6Lb2HifenRqhs7eHuWSGnjGXnBMDmdSyWWFgUPx6",
  "key10": "3CM1mqZy6MmXoBaPNA6J26dWQQmR9FzcFoKpcwkbNnV4up8BgXrukiJ4BYYuidgbnrgWXp2FJfKTm9qxnDiUjvyC",
  "key11": "defNbN1qvrsetiEPTNqzvfNepyXymtJiJQh4h5DsmamhvcRsEYpoxsGRtSRfuKxBCXDj1QzJunpwmwoUVSk2g3j",
  "key12": "5nM4uyLJT9Fnc8AhYYaioVNVhxZAghfs5tdgAdjHHQuRQzsyp3wr9CqQsPe3TXvDCGFDiDyYMQbsVp6gGzwEMvnk",
  "key13": "2nbFw6sUJvs2PEwcAsMmJmRDAtD3d5wrhsNniajLVfX9i4asocNZtkJZWJwquWV4H4hWLa8mfYv2AMHczCcqdbhj",
  "key14": "5vDgzRHh5sDMop7BKrWWbCLZKFCoyhc5MYRgesKV1sQsiQkkYZFdqi9TwGxH89n4uATumhe8aVE2YFwvG2vLDaJq",
  "key15": "XXmorwQFmSjK69NFmBdwTbQgYDb21jW7NUEWutk1BSUywXK47TXNKqZzxJYjZuiKm8A1C5zBUkC77FYMx2i7PKF",
  "key16": "3Atb7eCRbPrhqV379D6ti9KDMeWB6HWf9gCEfjtCEPNPjECZ4f1hzhWKduhc5CbXLnBjpLSUP9boY7ENQx4jfJT5",
  "key17": "5YhvTRvdU2u2R2YhQcdmEeTN4ft1JDoEtVJFiMwJRSDmioYfEcAcUoHMVVLgNvx9f3drLyNnGa9oX3Abeo1fVRNg",
  "key18": "7bvcnJLXzDmorc23CqCtk77Ry1PyhLcTcJdob1amnmqkN6LXhrqndpPD58KwEmLwofpj6xm8WYPLH1B9jWbfABp",
  "key19": "5eDkttSovyNPzxsjjcajZ84r6vjuzHeGkyWPpH6D3xixnHojWrmT263xC9CHK9TgHaH7vgQjQHyPhHKhY4ZEZYKk",
  "key20": "67S3UHV3MGpbZ6eAWkrdtqPMeLikuHZdj8bfwhD8GA3MxGqSuijwJ5gCMXfokBzzNJJZMQrGRHp6N59HF72GwXs8",
  "key21": "2X7NhzVcnXRXEPMQDzmweVseqaUKW9BP3fxMmR7atHJv7mRsDXb211zv3KP93yQH9C2emzNGQ7nJ5JUGdYjMy1QS",
  "key22": "PQ9io4Jy3cXPJvpXCL3T9Samk2MUiNgCYeR3XymHHH6QN7YNDfxuGBR2APhoyAXSwCh4Cpf4JWo3YMFWvBe55wq",
  "key23": "5w7t4WbGiAGmsoUe7T5QVKLDJ4SwhRMn2nofxcZ15fG7fRatm3bTohGqMnP6Gpj65GfqMfpPJq4E4b7zmaM7fM17",
  "key24": "Dhx7DaDPmx3Z5DD93ZyG7DvxB5bSSyUjb3H9xuTXQUfCcLuo6A5HpcnpPMQboV34Zm8SHUThmh7P4hL4rkD6hom",
  "key25": "3LiB1G8tar95MWe464meyvhLxqRXju2sp59robJzJWbPhxKjCj1SyP999ExUXRbK2DX3jqN7JiPPSfAhM62maLJq",
  "key26": "5c4BEVyGxvaznMvDrjDrPWA8Hnp2DdGEaN24HFRaA53BLhei23nwFQruqTU5m14vb9ptTtrbxFAKqLxj8AnZMSV9",
  "key27": "2we54V3DUfYnQYGXoX5a6U5PvPGuqC4qwptzTBgcx7MRRXYPGJxRYrwjvQadoukQ1ccBBybTZVnuw5i4v8UdQaDK",
  "key28": "2hoAgfe6B7GM4SodjYdC8HKFz7y1DXVCEThACJEw3GcM58er3FfSNtA8WTnQykdyiwKFGUxMrHJgfFuQL8gb36HT",
  "key29": "9nv4T8qNQRgy1HHtyiTm8ScVTDGB8oED4EZ1dSxNVDA3ssKp99SFit8U7BULcquJcFiYDnN14potjkwEToocJv6",
  "key30": "2XeZz5pM2PWimWuJTeJWjVeGKi2yzhPK3vfHBDKpHkwUyvMEV8bJMB72ByT5wmVEj7g8TGcHdFxThAjCBskBFm1x",
  "key31": "EjcYXEqZfVSTXXM4vnqbUd422nbE6AZY2ckW4BET7ih6Kc9WQHDwani9oNzthaXayhmGznHqcwpmBowY3CVx9Za",
  "key32": "5KJFua3YzBRetoTBZ9reBM4UbZhtgGhU4bjQwFFw21Ui8BTikNG9vhLUZok5MzXLdxKakqTg2UaNrNQdiardUvPF",
  "key33": "2DrvtAWJ9wmTvmMCJCctMYsggR1Do5XD1yoXJpjy6ihysW6Rh27yXe36bH12CUVqwm4Ej7uoBaDxVXUwibL8Lrif",
  "key34": "3argH7ypuTkPNJ4qS3MnhuTRdXaLhbBrjrchsuLwETodwQJakptzrDyj2d8fZUMS7TmyYRncKVdoLhhXSkv3DoQF",
  "key35": "FzFjAKo9cZMhQWuUM9rcrWFP163qhpEyG1DZJUTDeJRwzhycNTgLZqzpsU1nFq1Hkh3MBxCKXBLdva67HHj9ygg",
  "key36": "28xqRvvgY3mDJEsSf4WnWdWt2747XXszFnT9eyseHwuACJegopEh92PQaBHpiaFYtcmxRYdRAhQf9gYLhLBqSjDm",
  "key37": "53WfxvtBBo19JGuota9zcwevuJXpn4N37y2TFiVWyFn26FiKUwHuFXEFyEyDxu8twyL6CRDXfuiZbBa2tf5PDpYF",
  "key38": "35bk2f9eAwo3rZeHJtHnCFFx34XF41rVJ6bjit5UFDMBjG9f2v5Ewa4mBt3L1sA6wicyh1H4PiXhQvXsjQY2AjGS",
  "key39": "2cUcnDb2j1LCAMxZS6Dz61QkVonBwrLXTxesusaHYsHypsp1iP7eG2BtYZ5MwH134vB7BMFqnG2YkZ9suTT3jNw9",
  "key40": "49gXcPrsKV9RAkAdCwBTgpfymBuu9FafEF9pfZtCKxDz4ZGXe75ErkaAn4rsbjDNvkc3QrB7uF1223Z2FoS4j3Wb",
  "key41": "4bziepYFZmZ7v1q9vWvyJxeS1cNdHxC351tpTxgS7gYXyLtM9qnfyEYoXZLnR1dL6D9CG2nAMTWvFv7fwBdXK2mY",
  "key42": "3JwfhTzJTXiu7rvjyMYbu213t4iX8fc5a2cotG3yfW2wv7S59djp1Zd8DrdNrWsQ2BqBT8B4ZWXz57whVofnikV7",
  "key43": "9cZR3SiNEc52jLTWBBJRhEDBznu4zosnaVGV5ZTZg9cwAkjwuDvVk4vBAyHXXArt4pghaBhFBZ9gt34aGtYLhHV",
  "key44": "2qwgNMvAbsCDh58KUcTeMi7sKVRtnUZVuEqC58BbzCgKBUmaHfNFP84YwUZns5C2g9LSECaC4gQVqfWLAWUTEcSb",
  "key45": "MQrCtTCBvTFVAr3wxSVKZUM3Vj879E7FcL1fG3BgMg9HAKJPUehrYmjrWRAbE4M5bJdZEMoDsmkhPbXjqs83ZEk"
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
