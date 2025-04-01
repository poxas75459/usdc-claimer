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
    "2yaRXwaccm4ufdsq7TKckSziiKsoAi431z2gZJuFrBuy5v95ZgQQGFKxxTGMTy3HrtuLFbqWSejNT78CocWpJ7Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5oHrXAKrarnaZbRvoifF11pkT8Yiu5QVKKbHYMnjkGMqs7UGtLYKT1rqqZaLqSpEAc1vWcRWB2hmiWuXVH99xZ",
  "key1": "4NgX96hPQoUPa5QhrjAmuAb7iGLGoVzsq4nzFgdY1VXShCqxYfamZyQ2LYvA1opSncB2vyfM2Tf1S5udyN2oSDyn",
  "key2": "5bPJ9eEzrMYnNEFtY4xuPKq9NU9qBYekxJozCsg8d2PAMzmNR82mJGSTNWF62gpapfQa4iYaorf4vSfRkfWE4gRh",
  "key3": "2fF1WbTaQ5CD3f6CVfRgjczziQ9b9yRsr5rtaojSyDZwuTWtLm91Ax6jSMbHghtab7c7bBZchH7i1nuWGFkh7ESZ",
  "key4": "3mCcAsWod9mhBBQSYV6Xwsx92RUYDDP3npNUrp64X7RvWowDGm6a5UR2pNvyRKzcvqWDsBsvCi5N4VmNUxBSt7c",
  "key5": "CkRgAzoJGHFHwNJnQRW3SBAenzXJ4oZy2oVm7HCrTU72SsrWFASNZyX9Tb5Z6Zq264m4KfRtNexRxnhNKZ23oLx",
  "key6": "dchJJSRRs6dWqCRAgqDp86utEscJWXTmqVpfy4iZpE2ZYQ3aBT2QUDL2NBLzZ8my9CnEJncvjFwdrQLb4kQ82iD",
  "key7": "2YSWPjkAq9rDW3jwTad7cK4xrbFa95GHp3uxkNz2saimJSSmQzmDxTnrJtXuoMq9pgCxGfGAF35qnTPywgrBouY",
  "key8": "5mDs8aizTmnkUGGRgxuTtFxLYFm3krAQoqhKzW5Aiksb4PquU4gJJyxQKMAUKBJseMdAWaVCvM2qHUWUXyYAMhcX",
  "key9": "54aZtStJZUtN9qCqiR8YxK1mqM3EjdSy3uY79eCLcR7A54JMtzBRtNmPU6X3tUm2JaM2vU16qfi9ixEJKgbLneCx",
  "key10": "2CUwdiHEVY3K51ANxLm8ZxaGj37nygUs8WEcZ8gMS4UFxcbQfQm4QhCcdjLmhUq4NWtkgeAwp8QrNk88uhTGSTiJ",
  "key11": "26qtkfkcnopBhj7WNNNSjDAWRhFcg4dfB1GZewJuEoTtYR3PkUKhRDeubZNKWCrgXEqyNEzNT5h7otmvWnCNveKX",
  "key12": "5Er4rbeLdWCPNuR8vFbwCwqitK8k9D48PYY8bCHkAeLwwF285vcyVK2jHvBg8RnkuxhaPDmadGqrxnSRXJPQTaT1",
  "key13": "3gLX6tEdxsJJ9xZVqJ65hNCKKZyt484A5MXvHvLW9TXHppGWDe4EJk9E1MqcnX7pbXfUhapsxA8jqaLc7DD8JJEJ",
  "key14": "XKEf7QXYa3G8bqJu81j3f4wfa9F7Ys2R5RE6s8PNG5sXnviKZ75f9aKj2RKyApJzkPQPqaMA5XV4LWK4wQbHBs1",
  "key15": "52Q8CHV2nofLesgqrDeF9r3JycHecdSTBhMvBdGBZjUGioXdKhwVkSkbXAZLuoVrGjBbecvDugrHnw8qiumsv7r",
  "key16": "4CQZWg18us23w9GwoDXj8So6eDqBq7vDjggQLHW8LgJg3CbwTzjH5eFRDbd61yvLzxhyvzNbhSFwF9ZpUgzQ5qLM",
  "key17": "37GKFeTPrP9SfUXsjRNujz87LTWrv9BNW14hzN78pYW5ToHx89iEX3z2XwHUQx6KhSd2FSeY8hF5vJrMvmXbGzcv",
  "key18": "CpmgdSm8CAkXPNNXhmk4tq5jCGB3eeQ2CKdk6QjkHKsmX9NQTs4mRH2Lb8y32K9VJBTUwxo29oAqnZWHqGe8axi",
  "key19": "2deFR8MTgHwZ2CvDFNQH1zFqFnsj4tFVWysKswLgH9Zu8CYS6wHsKbHmYzvXtHDRBCE5xmrJJz5RJek5jswAsJLi",
  "key20": "2tjGxcUFvGxqQsaEQXMG7BQ17qoKJdxuFyPDTfTsaJtwrSePy9cXzcdU4BG6koUEPoAWdLTofkgBhAfBbr5DMYt3",
  "key21": "36bwgC9pUvuUQQVYcvJg1JU5eofxRj6rABqhpYzPiUU2euQbcfrpF8RmkYs3n1iCfHHbcYqwXbLL8uhanLK2V1X1",
  "key22": "321A7wY67u38mVpneFXxxmxZsBAhk6wnWW6zu3HQSEBzVqbLhwULrABdDg7BoM7g6XEqtx9Nqstz7R7pv7sNxPLF",
  "key23": "65d6zvQVzVVs4syXxqzSh9Vvdyc3YaaV15y4N5UF4ke9XiM124kuMG83WQDYG95KpPzrfStfe3mSht9h7zt38by",
  "key24": "2sqR7moq5AdKk81rCW543H5x6AgHHKxZZSPHMW9jGM1QDqvjJ45zve31qqKMYqCRcwkuwTP5Lb6YFfkBfGaSYJnQ",
  "key25": "3TmhNkD2yLY4d6sDJ5uLshVXFkiT6FemdTaGhmNzMzWGrTDbeFkoy2KoxEYBGXcjm2ciYMfq6vfjR6gS6rSJdh8d",
  "key26": "2TKEMSoVkvjGa8nMn4xWZkaKfV3twaVgWu55j62qUjTnXtGmhHAriXeYqngCoW7XydiE9TrFYy7xPUJxPYfDdeiu",
  "key27": "5hHhquuxvVRvtQ9fWg4Lu734kewVQL1kVYxyrqjA46gW3HND7bMTNAwB7U1vneiesgTH3paxXnpjLyx9vK4RCvdr",
  "key28": "2k4AWr3q1gT8nDrHmNFypss2N4KShGR9V479US1qq73n98YqRRM8ccLEDn5irkPn3nszAj5L8M6ivTjuYFZfYbKe",
  "key29": "5nsaU3EUk2tQPwvDRdpqrAmHQWGVmSLpmVJ1SG4tg3by11AYV98VU2iHBjxVcXjAT9aPBgWu5nHMDkyEB1tRQGCm",
  "key30": "49Fpj6wo6P9a7ywsCiLAemKrbiKVQYit2U9nYDN7aT8uUpXjxKbeNhz2qWCyVgi4oaFkzeXDMvo9j3etQTwqkBd9",
  "key31": "5yN85MZCG5B3dxHNL6mZ8R81Ap4Dtm14vZoDqEuc2mkLKWpQgYoUbE992V1sgXrXeSFswmKEWP7xWUnim5GnXcSp",
  "key32": "4ebS7cWE7j8ogLWDmFSRhSxxNDq1zxqaYkPtRKSr4vsDPnmSEt4HnGgaQ2yvTR4DDVheJzsMMHPMBu2mCkuWWSP6",
  "key33": "49rxeGTYc82dPF2oJLkek5tYWw7p7LUqLG8MRqKUb8TXkNHEKgqw9VFH3iYzbLmrHqqBmFdTYALwrCBoRwkqvEk",
  "key34": "ktYXV3muDn6wSjgNHxLoXYzVojg8aJhC9hikhXQxua3WR5RZuuvrbnRHrgeuwbB3j7SMpf159Eomqtb3m3FGZoq",
  "key35": "3XcoNN1E7VfxEaE7Zpj2iCHRCTWD8ibPQ3r4B5FGdzWToakZEjrUU4CGGpBKNcYj56MTQkamvPgnsiHuYHQc9wVW",
  "key36": "hcSQdJL5zZJ6RAyF83fr7bvASvBqAuZW57LnpNFHDQP5pGbx9Yyq2ueMZFuKLPXni7QM2QoTocKNDNst7fk7YcJ",
  "key37": "22y7ggDra697qiutdcrUhLoKXdrk9FTF3ejb83ZrAJ8xpZgtsWWcjddTW7wGD1qBsHGqJvjqKJ55zohNiMvKbbku",
  "key38": "3ALafjfaiV11Dwo2KiHBnF5MySaiNchXwm4kYaetHfKjwpVLtmRvSFGD1BkEwDD3nAKZVxTZLanPiYf3U6k812HQ",
  "key39": "5ayKevHsxPzXV4GzeuwgWcCyW8StZsREoNLeCFTyFBqMBm3Gv9Pyd1SkpoBJq2CvaVmzK2jVGuqHPrnWL4rzo8W7",
  "key40": "2bKQbMGCc8qSriNch6Cv6k5zX1bs9MXKtNWptLYviqa9cxekfDsobG24R4YMAFmpfuEFZy6sYWK1SmXRRA5asoLs",
  "key41": "4axYEJhpEawH5kqjg1MVj9VVSDbwgD3jtVJ2apY6HyoFsecShhESf9CHtsTKVjs312GTcoZ8FXXBwT494FveaT9E",
  "key42": "gx1m1XbmzTRBLkgkKT834kxGsGpH6aaaK1j7ji5hcMXEJU5NoJ8jhvjMpsxH6Rv4kzrRrB9ioDY9EM2XA2mTDiA",
  "key43": "hjfyvQRo1TwyKsk9hw3j8WxeXH451w95pPzpyZXF4wiGUEyHR7E4KxjaX7iH6j4fBy1vqz6m1YuBnYVaPWabuWS",
  "key44": "5yGvEfkMtBjM7FCGf68rvLsJ4cbMkbmvWAxGB6iHhwy9BMgrz48xnDCBA77ndtqSwiSjx3qkv1po99kgsAaqAB5U"
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
