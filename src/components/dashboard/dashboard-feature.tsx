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
    "5xh9YDmT7hoDK6UBsnS3K5TkxVPxx6WRo8cmkKG128acRuJ7pGXspmvGDUQ4tV8t3wGBSKsURTqd4Y6HopVPShGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCzeAHBhRSxVNhz2ByaTW5zcqNYmr8aWH4udmtwqtDhMvZ5Rtgy7JKjjUTBW99zFc1N6318hhPowNh25SsMx3sV",
  "key1": "3e37b5FuLU8mcCTYhwrNEP9aFq6hDLxY7wvnZ8KkHPNABjaZRw2KcNmc7Wesk63WBjsZGdJ5nzmvctjfcy6iSQ8x",
  "key2": "3zKCz3U9oTxaV2nftRJHi9KGdhvRpiAo4r1AJw6NReeuBHZLHtZrQzJbq3X4gcV1928ChJNYu7g5ZwThuG4NiVU9",
  "key3": "4B3tGKgpXtLZHLTWV3RBhyYrWHVeEymMQoPsBa7YX5dbNFWUkweC8EfwPn8ycmFK7S47UH8mmQ3V9PDLsXh3SYxg",
  "key4": "4Q8NF5Kxk1YxHwpu7EVTBVfMZnG1H1v1mJHrDsDpoT8kZWJ6xHhF3PuPmxgTVbzf6iyLjJuNZu6MUNJGz2qJ3GeG",
  "key5": "5TyMFvqaXCWDWHufy3RYZ2u2KAjuajiMgEK24AMdgczau1sg9STWzZZtRKzhGet71xcF2hAWzMsajN2BpinkrJjt",
  "key6": "oFUe7JwyiWSYS13ZJbq6M4ic9GXTTiVWvoK11vC44H1jpjYvNQqQoypz5eJpLnYDKZNk985tDDV2uVodp3LaphX",
  "key7": "47Ua2E94fsoGhwtwvJ7W8VMP9Wr7pLwq4LsNSdERvPu57K7LidFvsC1pqJqQirnNTPsmxFMMsE9EmacKvMyxSqn4",
  "key8": "2h3hV9ESSAPCe2v1hTSnbVPDrjbJJBnHSiep4MA5rPSGcxrpzvWZZBwLMAf4nXH99Kp3xYzFXtExBN3kMcKfSyJV",
  "key9": "2PMAvGBVB73XLCN3deD7ygeuuEC1LEjCrQ5HjEUsnn26Ug8PTLzWroNi1GT3aEhsuk7Xg19mA3c5yddmZxuwmkwh",
  "key10": "3vGK5AennK8mjbboT5w2YoXRHNFkSZYMmr7h4TK9SGKU3ukN7QP6PGB4LwDbKJ5fB16kYjc3SYs7bPfVmZ7TZmeS",
  "key11": "TDVznqUrnamnv5SZcHDeBuCZSs5YfttrXfruQQyAxc3e7MztxYB4KmLp4KA9cCGYp4qZqFDmLAZmxrjJHRYAKLz",
  "key12": "5nH3DcwoUzyiCpokV7BvuwLpup42XhTjJ6JQ6HtFpvrjpMVwE2pYnV5XFbNG4zA6RBQ39YZZQhfXpdUwUQCyMxtU",
  "key13": "36UAY4poWbYM2io3cWHNhHksy4HD78DUT2wHD9Yt71S3gDhrwtqG9y4UP7pZcokkYrizdw1y6F7iuuooRRhxKcKn",
  "key14": "RG7K2wzN49FPi7oPh6Le7AFCNHMQL3iFBDhLQbP4HZVdzBHdiFbsYhXPfwavTCXSbdaySdVrcguN3Vs2ciN9K78",
  "key15": "2mxgv347YLj9kjxs8k3mCYFMJirHEnfKAiFgFf45tHopSTEDSLm99aMSajt6TxQTQ7afZeB6pebbamxnax2YbhdR",
  "key16": "2QNxuSsJD6fTBs5VCA7ZsJrYA6nrtdLzYqZFH77oh1B3ACYZXAfa2eRkHC67qTTXEYyaUFLr3VCC4ZDDujd6RhoS",
  "key17": "2Fm3r5J2VDxzr3QrPaKCT84wdkcDVgeF61Cki9Yzpe6bnZJmztzdf6ttWvkN52m8Av2u3XeJKDpbXjk1CphC7MwB",
  "key18": "3w7P2d2JW6xANXfSH1hL8MZjc3C3i8Q6FKJA9dX4dyjHHAYtZRqSfmjsgAap6wYJeo6DtqrmDWSc5L42RDtT8kPo",
  "key19": "3thmTib6GN5ZxLZaUNFPKuQa6rKEYzPsveEH72LrNtS5WmKAqRRXyLuwtMSKtvaCLNYC4kjxV1BEwWC7cjHFSwpw",
  "key20": "3axqZfEMvx8G3mz8D4j48fctXyyfFjNnTWc5Wg2xGXjXVnE63Ce5Gscd63oFy9D614UPoJNqo2cx9BntK6k6yGDa",
  "key21": "57btiP83mBX1WVtoBWUgnYqq84jRMGup4P1kGDfv1uFL7iMqDmxbQ6tVbqxonMfHYH1iW5qEQ1AU9YKsVCubxUYE",
  "key22": "4df4WK1mfQURiyNLg7KvbgtgavgbaiQQB7gnjQPqEEbN4txQNhQbHJWV6Y1zsYz2UHaiMxP4dj1fUh6LPYYzM3yR",
  "key23": "HNYhm6fkeuehAJPRA3dgYXxXG3wScWQ72EQf2499cUPAtYRQyL1pHLV6UamFewofbHGuWNkra1RdXqLb7LBwTGQ",
  "key24": "fFdankkWYJisEsUsKc7qpi75hqoKr1mhaeYTfvsnJuj7M6XMzd3s7q3abW3YdRAdBaLSAAhhWNpBKRcWu8VhEmV",
  "key25": "3nRfVuXQksjvME8vuCztXd2nJMJyXfUmW9nntoTTDdpWzZZH3qZGKYbqiLJ4MmpCjT62MQxprRZjBYSBCeSHxVb1",
  "key26": "3FM94V1zmHPBFTVvzVBVyNridwndCCErhTf7PJo7vzG8T8DaqSCvadLh8SZkENPqcvyn3PdFtYcSByNKxsf7N8Po",
  "key27": "2imz81zvQUMcJc1oy5hcgNJ23AfPhf1ndnYTFaYUYxmueURPc29ngzcpg1gLkkb112BmA8214sbkpRdtgr9HBRWL",
  "key28": "2Vk648vpcqTbnnUYp6pruNHAV3YGgAgqQrP39hikovytupt519DyArs9cbJMkKcY2gNs7zQ7uWn9XbyriNf6qBsD",
  "key29": "3sM4fLvptVvujA933uLZj28c7PmGKnVE24QMHrQyBjjBBzZrnSE6WT2EWToQmrdXyTyceodTJSCFAvDT8DygtKiG",
  "key30": "4TiEaq5dEASzSCAWWiXqrHy4N4bhB9UcsXfzpYsgZoqzzHT22oyfAsasriSBgN4SfKgSuv7xuaPoByzeBEqAEgLL",
  "key31": "CFYzNB93KuF4D5nLpc9rAEaUWH6PBEshmxd5P7D7PJhYsRrMtf2mmL2ru3rj81tViw132BjJkDHe21948tuTrWN",
  "key32": "2mpAbmQVCicMQpnmXwigJ9ByS6FKuvx2h8iN4rpt5wugWz1RjESTnfFy88wtGedumZ6b4N9AaNis6YRNi65zEYxc",
  "key33": "YaQP1E79mEWALc1kDSFzVVN3qcgfkESKr4taUEn9byqsYLaVcxdp9tckoZdhvhaiADwgoi8NHKdy6aqy4f5Fo87",
  "key34": "w7EW8pQW3tX2YoiW262LGFK4qwjtj7SZicjnMUhLFWw37wmjLxP9BKqBTaJiqB53BaG88tQ1BZ29KEcKb4FqNov",
  "key35": "4uVKmJU3hsbCWXZWkVNDz8E9pgTC7rBjs5itzUBUD9XLUM6YbuhfM7y98FspnwM4nNWgSxZTrC7RLVirtdKPrxjW",
  "key36": "3mTvYGVXHiMhuMQ9PkWExRKH4NmJHy2Jc7DSJoSo7cQ9ukdRXmKQ4sLJFnBQsXSVNmhZkwRPaMosAAAs9NttC8PK",
  "key37": "2xxiohm6MctDf9pjHQRQbqr8sJb3x9eXCTkg9kcipQmfyuMiKLvMpZJBde7fpTkENvuxiuS826pBx3DbjDk9KHMT",
  "key38": "2qAsNcJN3Fxp4veKEavdR2D7AJUEG7CNyQnKE5jZeeq7RHar6VyeaghstBE5KLmnufHFf2yxBoiJ7BRcTjkZ6Uog",
  "key39": "2RD1hcXvmtE9d82Si2R2yPBSA8C2J8CywyR9gvMcmpAuDUFPZRYmGhCkV22YusxQdMv2e91Q25W6LD2Fj9AdcYAz",
  "key40": "4CWQsmJ4x5kpevjvdKmobweHzwpehTwzXnjtWqqRAFqX66zpimXvXN4tDJsfT3S1DMiRbjEbCMbAoi9xmEuqxSF2",
  "key41": "3NG5Ayfjc84UqLnVQdXPsY46FBW99te1SSaLHhnGFVN7e2wUphKmzn8tZ9u93efhsDykeEmRxnbb8TGqCbjjgYGH",
  "key42": "2MvmEEB3pQiMLU2zfPTmsVoPCHprQUTRWG6skrmfWE4JBcJMs7v8iq7nV3AZemN6Uo3923hNVanTa5Tn4TvpojR9",
  "key43": "Z6ee2b4iDbAPDi3VZQioESgdwbsJkNET2wcS3GQBUBU35WLjhoRbPoPGcGr46TDEqU8u4yBKWR314dnnDXukdvW",
  "key44": "5QxZFWP9Qjf8LZfm93tg9k81tkjPnSKNj9UY5XPbfaadyGpEmRWKBRNJokG3sPLsj4yYtFaGB99e7SG9cTVS1NUC",
  "key45": "5XvzxQijkjto36f3ocZ2ePWiy97bpAGuMDP91Etxh7QkzijfKbiScAjpjBvMsEPdLvsbeZfjsi4HU24CuBA6HSne",
  "key46": "21dpD8oYcdtGAjWPJF8gShfd16UmtuUyH1LjitwszL8txVx4nXA2QMVmx5o6rasXN97zyJ6wrfj9xZA6xtknLrGH",
  "key47": "4aQV6GGQpnpx1LtejioztUcTAXaTT3cwHZnfCpWCxXDzgM9tHWENgY1pxNZHkyDVM2ozbBuEFMUg1TeXLUTH3QR",
  "key48": "3o8syQZcbHi1HsWfvoCe86vjsruA9iQ9jQuoJKTxA2D2ZzuRD5P1cPjeQVDixHp4DaHW7JSpNbqM6VVz1LrmPbmR",
  "key49": "2bL1xBguiFe9rFkGcrhSNKMvon2Z1RocnoVWv31EGEPDHXSfHrvKAgiFJiNuXRkK4dZHeX3F4y7RpDTkS9NKKhAc"
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
