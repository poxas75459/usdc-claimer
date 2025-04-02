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
    "3DZwDgcztC29AzZ4JwyLRsKs8toXAgaXMqNGYJghXhTytCvcpzTWqFNrauquFeN9NSymX2U6Mwj6gBpzMcShrzQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m2CU6tfigJGiXwmfvPNkSuDcaNdQm9yP39ccaaYMUvs7GNqm8ZYYXxph5VRwcZPLxeecH2v7gGRAdTkHV7JK1Kb",
  "key1": "2rcJbkRZjooVZ1QT4y5WJUg7WRcova6eLbo3h4wHZSiJyfEi4LBi1DuPxQdUHNGGgUviyiw6Kdt2w1TjwMXeRqMQ",
  "key2": "3Ym4u6dbU7qZd8uhazKVYLXkHuUHLxcQMT3jyXJvs4eMAVbzncgBzjxbGrwLpx1UQtUcB1FmsQuxCYJmGAd8sti7",
  "key3": "59y9QsCpavU3z4KkDp8LS3JQRtkRLZceXvtcN8ef8kr7g31dNcc4mmQCuP9VJtSaTPbC8fMeDaG4vcxj7ynf6KZx",
  "key4": "RbrmDzK4kwLeYKFE8oCULPsuU85DgP4tW7Tm4hHu7T2rHhKuY3dKR7aJya4XwzVjkNVMsNC3eaMmAFVXReFiagq",
  "key5": "2ynoiBcX9uJVXWza36D3uWb8iLncQx4JQoTGttS5rNpop9HhXeAUZGTAYKUAQTMy8t66KRat7hJZFFkJEKdYVJEq",
  "key6": "m6ofr5z8ZhwZaQaPxez83WHxd7UnhkwMUGtW3nrkvG41sNMKjHJRS1mcU9gv3HGRQ4FfwzZZWePus6Vdrucf1og",
  "key7": "2b52fTHVPrcKK7VJQ46U5BM9yKeYEG1nehK4J7DwzwnRaZGcYjAvJfoe3amUkDCEwBEEMFpBmc6Abi2TPSVNaHND",
  "key8": "Vs3y9RJkgQ685ouBZe2NjwTU5coFo8jPzHEpzdkUr3euEifaa8xhTkMmm7Yfc18cEGXRHX38P3WKf2cPpaJ4NTb",
  "key9": "36HNgtHMbxt7HxM4iLEk9qKpunrn35eYR4XBzYUpZ2mrsrhuvEL1pU7F6LZQuKenX4kaQAKRYKdRn8dU1u4RGpxk",
  "key10": "3CRu5d2FhYtyPecZVHcYbC3kwBtuLXi7DmQKKbG16SwQ3MRKZLRsdsMvmS6hWzoGoxANu4E2eAibxg9oxi6bhSi9",
  "key11": "jM3hrWc7nESH2T99bgE8kbZWqzzV9kaNnYVVaYs3Ftwk4tfKW2tRNoCHHZbjQrHbLCW8XnzMr1Q4BNDZkwoT9cY",
  "key12": "4BTifrECJcMCL2EJUMpUEaFZkADngnNCyeC2ysidD8rwygVJqJnYwmUoEyHiMmhFxrpovNxZUAFCmENWyAvhDDgW",
  "key13": "4H4Bu6WSQq1RGsvrJS1zYM91aNK3XCxbzoQfwhvjuNufK8rtnb9WvzTxHwTGpwjqqfZJjc5c66vCDkJKzWQnpKJL",
  "key14": "WrCFqE3xWEpkmDbALWJV3BhBRfp96eSFefZfhStVz1W8YAqJVKqGvyaQ4bvLuQvxriaBWp2bCRDkTVegwB5os5z",
  "key15": "3kZcgtKL5ukH3jzdbVdRbocK4yzyXmi9q8Z8ZFHHwWcDU4SbBFEngRzViv64GAaTmG8Wx4K2q1pjGCQ3c6hz5Wwa",
  "key16": "a2S4GkGqLbpsT1VJk8qoQ3geC1cM9RdXCooutXdKGByah5wjTsfQZSrWmkqqi3bNLi5h4vZtoTYffHoeoATcWHo",
  "key17": "4Jna17u6vAH7VbdH6u9zeNBXGEPxmDt4fMdcdnqHasBwZDMXRvywpkeFZsheMqLwYRQJAXm1u6s8nQjhLdcDMzdh",
  "key18": "4ozWRUj3v9LLjwiZpYXQ4Qx57g5mSEemub3DHp5heL9mQn75RD1yfE7ne88XDff1hfUAS4GWJrbex1RRDJUYopTt",
  "key19": "2upT6i79DtDfsFZQHgr8nCHj5YmogXSQLiT3aun7PfzpZipdTLvmM8g58awQZ5MZ93fUyVzYg5Du9YEiHupbGco4",
  "key20": "QHM1G899eq4NkRYWBStWCYnz7YrLm49grRVzLy6NsdXMRXfDwpnFmZJoApy7LKPBMuuEjfpP6cskC5puK6essYX",
  "key21": "47PPxqs2F8qaDLKo9hNPLmM412ABTS4gwai9CbMeJSLhEh2B1krbZ6g6zPeZRmwkJR82D2LnYkimMvUbpVms7Swx",
  "key22": "4PCiMTVSitPGe2BinE93czMj2kwRQ4Urhnn7Q12K6ALRuBbE6CtC1HPzy5AhE9ndZGHaBkDu2JhGfNPwY39wpY6c",
  "key23": "8QZwNrikUAabZpdd4bnBC7qoksKGizK6ZCHnYKkukHPtvwpUrfa7pPj3ZHGgNMKekB1qPm6TRosMa5BP3gbn3k8",
  "key24": "4pHSaywoQXcaqUfjMexv4UXAGm3SwT6Sni1GXWxmHkrb2zer3NtrNzwrLgqSyVfujStjduquMPqJSAz2UHuDt2Cg",
  "key25": "5Aa3FeFRhiZJFXejXYdpJ8f94X1mGiovSiLHJ1gtEi4cXyxAYv89WG3vMTAyGBUHDwMVGsGZ3f4ZdL1VQvBRmKQ8",
  "key26": "5EbEm4pp4fAJxReyMyPx6LXxZaMbnbd2fBYNcA7y4c3YhSFYUZrLRMDKU48XeiV89yP5A5dkN56ZeK4DYRWmF1hp",
  "key27": "Yygs1Xq46A5xW8hPXnkgpRefaADT6yiY1T161nu1fpjHa5Zx5r6po3resDTgfD5Ytnhcu5BKGeqLx8gjyPukozX",
  "key28": "3mu9jMKq7y6jnSc7ErTLCxSYw4ctbrdrbz21EU4EUQLu9EKQftjFjkPh2uYde1yCtowGEJKhckXyPDYzKnezQrme",
  "key29": "P7MtfEfKqHF3ivpQMJsChdTv2q1Raj8f7zUuoPUofuLyfX3r1LiHE9j58cv27REGYGY9wN2CZnCEZG6FQ6MmTKt",
  "key30": "QGP9jrXxwHhyMxfcD44nQSmUvt7cZkBZGkGpAJfmpW5PptombZwedX9GrjymVJ6Fk1SJa2BBUPovQ881NbSM4bC",
  "key31": "2APgncobDQdRm7aqteCfzm38KpKDQ13Zd47jH3vsLuLthgLsnm3K5AjZcT8s28i5rEj21hNf3yfthgfe635vkZf5",
  "key32": "3PZxWCNogDYrXwAz93rPeterKHhfUco8EkceHzUDQApWLZvfQpFCBDH81gVPCbkA1krn9TyfMPx8USoDZssTeAun",
  "key33": "4rF6tJso5m4MxyPAZR571d11V6TRZGUqeAoAinFfPWf6JPQoeFbtka8hRo1Prh7kC5p9mdPKizqv338sfUsgNJJy",
  "key34": "56og1GgSWVff6rHPtaKHXE4cG59YxeS3sx4cVSADVcgUCP2qJ5wHyocbJEFB2dEjiStCmKeCWEaPKaeAe33WeFdj",
  "key35": "21Bvuct8XYJ51T1viPVLDNFXw9gb9hhxMQMkMU4zNoTDRPPzPWjojjSM3xgCLLtKafJC6pq4NQ9vfZeJ6ApA5Xqf",
  "key36": "b5MGxBMMBipvWF2yW5H4MJtWXMT5vWd7VUWpsJXngwdkDKF7gWaGa8NazRFe2EtmbyuDLvw8tCmUscpiNmPyCky",
  "key37": "4vhnYKStewZyS31J4ityQYWh3cUfFH6pPvuNJeMrSnewFHzbKBaRDBbRhQQoHTchfoLu7zSn7uyEiUgVqo7A5nQx",
  "key38": "ibSPwFe6ZhRaxihX2TgFpgnyRztYJ4qRgr8wHPamC3r9EEoZ3aAJmSbBZQiUnohQkU35X9wqT2ncVw5PQBkk8Uu",
  "key39": "WSbJyAzXpJ5hSmCzHDEKiKXA3EJhMXyZyMktB8yjgQyKGwbe9sJ4WjWYLDChTYSJzy7SdbQged1EmuVjoAioPqy",
  "key40": "4KSHLNhPLh2ME6txak4dMbDwrnyiJBHY5Wxqi9zahBWQEu1nYGgijX4NzuvJ61AvY1BH5bgXLGipiHigBQtVbQWj",
  "key41": "4GSCceFDZ8QQC5jjeE17TyrMDAqWGAytXd93ANLf57ZV3EeCCWmEqLbeDM7ngxFebTkYYpQPVMfTzriM3ecGQXyR",
  "key42": "3H3HKekgf2h8Xrm6ef6P9Rbpt2rD8T81ZTAH7vUUonmh7Ze2djKnnMrPjNbszgdPNbfceVBcUeVvJ7rLTiqPQRMH",
  "key43": "2tCbhcKW2DuxfkkQr8t5k8j3VScroru6t7uLjfo8RCoHukaJT7CFu8DNYW1U3JzbencW57UGs3g2g8CW6f3LCBv8",
  "key44": "29wnMCC6z8utgjQsGp5L3hyasKLx4ESHR4UzQvqaP3gMaZL1c7gUCT3hUmGV6tCGXYhz1P64GPR7y1bWDFDkGX52",
  "key45": "4GUtoGxi31PipkXSyYh966wDuCrjHucKvhBnWREDWY7pbey3KLwDkwdym5Exsxte4rvf9wUvfTeQZ8yUUGcXRegB"
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
