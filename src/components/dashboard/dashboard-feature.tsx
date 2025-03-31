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
    "2ayiBojjTL8Ajf2N2EJ6sk1rw8HqtG6ViQ6HrapKvvtNo9fT9aHNzX75EijKo4YWbS14XKQvroMhkyKrMeN8Vxdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzSSLALDRJrxmAGjKHTbDUzynKFAi4NWGD49suXz4YQmW7zE6DWeqspSRHfgfWJeouEc1g96MfCH4atDQkt4mwo",
  "key1": "5tezrozgo3onV7Bq29YyhZ1eena3RpwgrqCmTnuH6qwKFifWvdKaTwqstJJoDccRKHUbB6DvR1J2qb36vfaF79kX",
  "key2": "3eZQJAY8kNtmcXghhqPCLx3iTQRg5LjhAcswGh2Jws65JUo4rLB19NJY9TddrUAiqVreGg5eMBKMUbvVwDZLnCvX",
  "key3": "9TCjYK4Wp7EYddwgtw2JYggpYpXnujtzkZsvwGDTxu7KUPULLLanH3e7rTrGuAhmWSi68r7jiuJ9PDegtwGSda7",
  "key4": "XHGiDzG4BqzRVXpKqRDCjwebPh45FsBjW3cRDEZcXMxE34SpZep5grDWGvtSCLSC87C32PKHKxzG9AJXSuVWhda",
  "key5": "5tmeNXHrRUmX21NwbZtbNCm8rP88fmfp6FFDf22HT9YGvUPJEfbUiKrxkmoyMyBQH4xhDQ4gd66f5WTYVypmzkJG",
  "key6": "5ibxZHbg3kKhWyHqm9JfiytQXVdHASJMGZEpXyZU9yiKuuARun12uY9eekRZuvw7ZrgqtNp2YMz5k8xhXGhNjLud",
  "key7": "4AwaWH8UJQ5X6neZvokEqQRNef3Yt37vNgqnErw27G9VrrHSuszyNajCcxJDzzqocnqKg4nMvZy2kbgTzw82jLgG",
  "key8": "2k6Rwey37q2EwTDVtLXr12nyQ7npp78xNfzzzyb6ZufzgAomZhJEHpp9rWjcJsamgFYnzgTvfDnCXrXJsueGzDM1",
  "key9": "4woTmpucK3rytG9FhbNSgQNZbZii6zAAjnndm2HVmuBcQ2tmTCHJymaSPqbpwfdSLyifrEr7jedaY6VJcYkuhVE3",
  "key10": "47AXP4Tw61T6Pi1RTngNpt5mR8ZDuxVJ2RzcBJaRq47xKJMABhfRMDHUYpDjXBB6rvcXFDp5zYJzAqftdeDrwbBa",
  "key11": "GnkA7oQPcChuiHKRWtKVaHZxoRppwLyHjDiRW5xH545Fmw4ZLwYxDx1gMdTzgDvLM9PArv37g13G6VtA2RfzGmP",
  "key12": "5dhVS7xrYdQSBkRc7cnjCD7zqCyzE6AucqfwLajvJQi5dxFsYsFrB8dFKZKcBgthRL3JRXorX4eeK3pg1CwiPELt",
  "key13": "49Vij353ycd79YarPVhKut135qAPUCdqH8bEsVoHEB3hN4D8srzeKmX8BD8RWTfQnT7GorPfQoLTWqRe3YT8PYRF",
  "key14": "4t2hRUz3rkpSc9fApNbXXycyZQgbdenq9GSscG4SfQumosgzu1cDAQ5pAhuiDtdV4zvF8u6hzUuu2Rt2dw9YzCdQ",
  "key15": "3Uy2UYqEczJikiVdGiygnYzyg61zjPYx2HTXGdECxBbqnoFLwjucUPrms4FmrJg85WYeAED1VjpYMUtnxvrAQZv9",
  "key16": "2tAMYx56ufpbrsD9H3H1T5t67vg5wgbgJup5VP6Bd5YaD61pGo6igUMmHLHhFKyV72Y2Y6LMYiKtkSsgx1k4C2eh",
  "key17": "46x6ENtJpEx4V8jcUkc59jB27UTPoUpprN4aQvny3n1FSrxanFgT9KiGavfLwA6JnsV2ypBgz8bFeZdC3bwcnr4E",
  "key18": "3wyUB9mfrab6PtkVq4apc7yMx1ATgC7WAb74kocCYNqzjRMrsVTTKfsFvyx6a7iNKrxFYEunU1Vm9vLgib9xBmuD",
  "key19": "5ykqCnFTGdMJ8BPLoPoYrED7s3oqCFukvxVazGfmwZVHMpytSY4J23mYML97PcTtJ2gkzAmGovYsEeSu2a5c31qz",
  "key20": "2vMZc8AUcooDruVyiAzeAdcoWYhpL6pYkzKWYbSdam6xQJXtKGsm2316qRGYVzmumcLd44dF7AiP7tyqnr8VxVsb",
  "key21": "5cPNz2StDu9kH3LL3fkFAqda9cLvtGUWE77pkEnXvTTXAcQJ5eDbKFQCpTErsJ4jLBF3c8ibmi6GM7CGWyAtsoTZ",
  "key22": "5EJV9kg3YAMotxiiuV1fxY4RxDiYqAkaxpmRn4my6vJpHiQn4teqUJmpvEzsLTtsknMXfB8w9bpm8gvoYXA14WtS",
  "key23": "5gWqFyuGKk1JdqnNuE9rao91wKVopq7katGaDuUxNs8CqmEvkUcovyWJDVcsabkxjRyBHhczDnzTjf9Re65ENUYn",
  "key24": "WcK9oBzArWZzkdM4AaqECewNaP9Q5kUk6gpZftwXS6vNsk75w7FJRV96omD1fFYoGraXK6SoxD28hsMzTtakbrX",
  "key25": "4KwsifUS1isaXaz1E8zG92V3C2ZW64pmXJCDrsaz6eeWru4MqaeQm1poUtUk4hCKZwqQr4XsxFCB6xbH8Te4Poee",
  "key26": "3Lz33q9SiRvphH96JLZbVEjXZPfYHhsEjCgUmsDZgkAcPmEwcJdbb9nx6JEdEeVihHyrBiZUADJeCtKB3W8dpnZ",
  "key27": "3XQxVbmDqRbQEFxATKvkqz1qnWTz727UqNSHX32dC7CifCsv5cZMeuWYUQbdo6EpAXt4aVc8sMxSVx6TPLRK8UCd",
  "key28": "2BHDTmu27j4DcuxQN13NEgn1gBVVuA4KvR7cB4WxjABfFbMMgnFPamb2ZAVnEAcxBBfXJun3bvKZ2aL1Q2Tc9BqN",
  "key29": "5B9PiV6Fmcc1hzS94kuqqyCpyDvGcQ6G1M3273fVXhMXcvRcqRU9zHXcpZaZrqon8BqJ91pj6yCfpbikG6LHokzX",
  "key30": "2XKQC5LzdnLWsEiy3GpqrMuaCP15ag1jZ25V67Q6Yb73NtCShX4FRd4AccL5Tr9gFQ7gFxLx2AwCjTXMrKcsmL9y",
  "key31": "3CoGCsbFBwAe6hNWd39mQKgDZKTMnWiAHFYvbRBtS6kwC24FhGwK3U8LD23zb7PeKzY2svQQArew5osuUDRN9nYK",
  "key32": "Z2nx6z2doqEMh3NTNphsG7yk5Q1po2786zdD7QSN8PjEWUMHPj58vHb59tzHn1PDDoLxaN5nXNad1dAxyAULpLr",
  "key33": "47t8MaUaAEuyNakk2LtnC4CKquEXCJDxHkcVnLMSSisN5gyK45FNKx9ASVsVVid72LdP98i7w8m1dJ5sfgZLxQgo",
  "key34": "KDtLrM2z6nExzoou2njLv7v6jgjC7ZvZd2WJVT3AC4uNqbcs64XVAqKFovZ5ezTJKcDG1UBgn5HcTsKYk4mjncZ",
  "key35": "42g2biQk7p458zEdLuCTT6E2dNjTt32bgoc5JmeEUiXAFQvRp4KShmGvDbQkcjE5KGzJUYsx8NEtYA8xtnUonEyw",
  "key36": "aCywZnUVCgLgkzUJiwQ6wVYi8k1xvF5GKN5dFXJCWFQKLjiydQqGqVeErVugRFScojZA7o2rTxhZabS2t8kd5pM",
  "key37": "SdXwbJ8sNDPrJpmh1Cv6W5ugN3GFdXEKUDAWt4HCg9dCupKYcWHn6j6qYWhZ4xNNNGjuXFhJB6mTA5FMwL59iK9",
  "key38": "2eg3kpJ9UZ2D69DSBt22vtZ8MnavHztrXqvywNz475pDYNUcH86njsJawBSn3atipT3S9aBmi5S6J86U9BaeF7hz",
  "key39": "jWvimVx3eBz1Vyb8iSFG1i2boWFWrfkh1Yo2eJgk3RKkQwPY4wJTcWXaUjwLbPPSMG2CxcDEALKa1gB73ALfTwY",
  "key40": "3yEzRzcNk2DMRf5ytNcBAaBq9GQtCGUPLX8uAuXFMW6d9QTn6Xk5pVvePNov1odGA7Jwu7PJhWT7ZV3F3cEsutsw",
  "key41": "4d5qCYX4y3PMd1Jd7FztKuR8GqXBzHZWuQfi3qAetA4VkiBboYYuYduzYeCcsnafcaWDcDVcGLLFrxV155W5U6Py",
  "key42": "25xTN8Y2m3krVW89yRhCCtSoYSzzavJBwHvnQ4ufu8kjLYUNcvUZjnK6AqYUVTRF5bnSuGDLa8yVma4ZDgmoyzb1",
  "key43": "4SKuLpeNzeSrmEzcSekZ2Sm4bnWqmE63paUrcX6nkj2em45gjM5oPaksAivnFmm9EcWCxKqTEESwoBed6jtk5bs2",
  "key44": "2a9EVTScR8bUA2FfbgCC98QirRJ2c7eFzqc9g5Er8N54WyvfDkGjpqTotuLhforC7gm8KHa3k1TPpkEw5VF2SG7Y",
  "key45": "27HvhSbsUx7aEnKa8iSw5oy2d33Dbaj1dYsdsTphcFL43bS3Hu6YXMsm1pFwNqGiCPWrXzeZYMZFmrGnkdruD6t4",
  "key46": "joGdUAvdyUY9D1ifnFyYN1oxgWLYWWGWKN9NPHV2DwQ67d7Ka4n5nMRyqAKHbERH12KYL27pLQGzEN3djNVSaz6",
  "key47": "5Q15QhFzc4baM6HRoP6qmjR6ifXwJWZMVrS1MEGZnPSR7fSktQowKr9UuMU1LY1vRs85Ww1K7ZR1VHKfCMZyLQAQ",
  "key48": "3sw96qKjUC3BRvAjSsmooXHxqAUGmZ1oeLS3HcgjMSyPYaAYZoHajFoAATA2SpPjLW5amraEWReokExE1V8YFtDZ",
  "key49": "39EAWfAEkxFg9N6ePpb9FmWiSqqH4bzABvgZMByPWrztGr3edfXtAYCZCkY1meHb2cgyZb12fcmR9Jw2gfjUQXMX"
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
