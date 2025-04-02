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
    "3hUjGsvTGd3GwY43cN2H6Dyktugarp86VLaDKepTWBeRvCT3p9GMVGRYnPEyk6HwhjB1RxEDskQfJ1KL2YuFyJbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3263BxFHyBm2JoVVfExbje4ETJe8q9PHfYxbJgHxMFxnEg2vkRHr4KhkpwL9GAxsLtVoTsN8FP23iqNLQsQG6b7C",
  "key1": "3rzNeLxuSpjf59fcLsJc1eEeVpAHdMoqdrXSfEin6QjXeZmEXZeQ3pDGJH86Z5oMaGUjfNWv3LhpTiHnxXwUDwTn",
  "key2": "5pW1JPe3Z6wogRcNEm4MeA9rV7SCga2UaHhPKQjmyEMhovg3HEkioa8hYx1uTvdnPfzui5MvisHWBQg5tDf6Sjyy",
  "key3": "42KBW9QWPnz7ngX3qjk4kDVNhekYGeK9kG3wwqbzBj59fYkFADzmmZa1ru6PETgsbCyhFET9mb77RvrRuC7BiJDi",
  "key4": "2Z8eYaizd3vyq8GgDneskiXj6o4wqXckwN6Vne5z9ERKrvKPk9UCarRXtXZqzXuqqev41D1PfXyMoDrCFXY5k2mk",
  "key5": "43rgrPmSVSZUfyx74TTgsCqh3SM6QJCwU1o9aieUiu73Z2yFWaAVABpzAnPwZfDrTNvydpLQ4jFAc7jgkyowJzz2",
  "key6": "2HYvnPqkFEtcnB924aRFd1yHgqWho8uJvgz8nSkhaimajgsuaQo63U7dnwq3cB9U2cXMo4EtLdhKHmZh88AreBQ5",
  "key7": "4Wj3wWLsw5zSqH4Mf1QJEAkaSyu62aH7nSGHTtAXifw6LVQdhLKZcF6CAZiPrgREdWf3MDY35M4Bg491ZxUzNDmz",
  "key8": "3dsb2sKeC3WaYWx6rAzmghfqSCkT2S1m2e3ZTXE3JhLssFYkfyKUWFoKBq2YWSBMiti1eCYm4w6UaT4ZjWoKhtg2",
  "key9": "4NMPxudRz9pKoBkGEAhDSavYRUWC27THDaQK8USJamzukWRugxFcARP8o8ZqD5tKkHmRDdeBVycs81buCEBzDED4",
  "key10": "LJk1x3LHCsgYYRnW1zV46ciycsaQG7isfwyKF18yYbPcY4eVKubhM1Nj6C3NT3s47JEx9rGsGyo8pGudaxvJW5J",
  "key11": "3oSzgx1YzMntC2e5ZLS7ygkQZqkYLtr6MMgYVnQesgVgfg6aCh7MkbMHKYPbNSMndFVtgivHuosTzdaCfBk5rFtj",
  "key12": "2FXRuzHtvkBHyrn7akjhedxAvgJb6Cv2qXRGaoEPvSfgLoFUGQYpEqL8fUkihTE7iKSKEhiKkvEH1hrqGhJdKeB4",
  "key13": "4kMafpnd6c3nqxQxWqw5GF9ghvf3DDV1B4GfKiFJTWk7WgjHEWJqgdR24StYqsFzQnfGYC3cbDxRde2kjyQRbqYg",
  "key14": "2TGZiLiivKjfqitKK8Yh4ryivjm1DahhEEbYHmeGwQVzPPiXEA1xAgd6FLMtXjBkBb3XWznP4DunR1LfnfQtoFEh",
  "key15": "4eqy4Pr4eDvErhvrQqjDYzvXr3e568P4kd8MVVGHmxgK6c8bfb3ViWCZ68GjYSeFuAA4rRMTvLu2fw1DzsGjuvby",
  "key16": "2p1iHevqZSxwCtWQXe29gFh7tnyYyXV1feBk3Lw9mzdxHKeZhNmbZYpXXVxF8W7mfFhFEgw6zjUG5vfN9HErEzPU",
  "key17": "3D6xUdSiCEMbsJawxME9TMtYGpbGYq2pqr2Mo6zwpF9foin7YzHKLJd2qzDKdp9ccyfzrR3vPkUfUiC5PqSZDUMf",
  "key18": "2vCQDLFezQRk9ALsQa2xBHHWunenWaKjKKrvfwBHUa9BZ5Hm3eQhAsDnJ8dgE8btkkdSYVSrZ3NDGiycikkKb3Bg",
  "key19": "xMTqCYHmFqTTPi5t7Yx6uT1QXTjyk425D3U6PwZdbr2hdDKTJVSFhLrGE2DSKwyDaKSF3xPaGj6uTbEQfAQr4qv",
  "key20": "3FSyxmCeKUABf1ZdTbYwtQZtzKaHct37CePrsHMRyCGiNehZ4W1jmGdvAG11aPW1Ea5XrWQS9sx2DkHD4kiSVMjy",
  "key21": "3By9Zsc5GSjoEufwery8tBybZr44eSPsfoBzKGWNHeVxhypK1byoYCusuBc6gmkRGnqBR9HbDZgoEtWG5Ur6EzGH",
  "key22": "3bKQnzQ98Rjb354Q3A4yhkEt1e9K3s6C5ARFLarH3YEM12AAkcTmQ5UTshp6RowSUtLjRtiEeP8C6QMkZcHrpJq5",
  "key23": "26wJ5iKS973zB6DWvmsXBn2ahX2v7ry6N9iQ4cBVMqZkHDVFoxn6EsHUxAisSAAaiL9CjHxTaeRHLKzAcUc9S5KZ",
  "key24": "3fBhq1CsHTuNNdf6DjYwPHLaxLxQj2PFzqJcVBtnSGFLC6zeMGsaY1mYfL9oMpKcobqePScEaoPvJ9QjmK6vD7kp",
  "key25": "xAe3NVE3oP3XcPENzzDp7jANhPa5BWgPMYWSftzVWrupyHsRjDeKSao24Qnv26K27Az1773ggEkM9RUdqWGQg55",
  "key26": "34dJMKA7owTfcWeEBoWkTMqrqFjjtnc7p1DmvsfYLFvHSPsJrQ4MPxgdXWhGpqBoYh9jNaSPmcbDQ8ZnTQ5RMNVG",
  "key27": "AmssxRyBXtSzDbRaNetjDnct7ERcGsCTpTiPkWVd4U42wMaeJt6r5yYc7Vr76qiEqM2ftek5uFDDVmFVUa27dMK",
  "key28": "5y6dfmzPTeffUuE3cMWpsWizL8W6zVP4EPAzAjG2sAEuxeWXhws1oqx74vdV4f89jnzLtQy6BCzo3iA4jzoDxqmA",
  "key29": "NwjVcYXniha6LRdAmWcdtrh9KhYC4HbHptFMuapLBEhAU7n66hHFzmve3kmn9bADZcfGjnPTvtxRdJKneqAGNjD",
  "key30": "4rjPsJ6yHrJrmDjCFCGoafJcHeRYvomEBiSDN8ZdMPL8ogKkxQ6zFfrngztit9eYurrtS8NA9Dnqz1iebMZa8P4A",
  "key31": "125V4X72K3fQ58b3z6gB9St9mgaoAC8Q6mk4xNuq8dfpYqLMyKC9kb4dDMKz1fUrR6boGgGc13zXwebQcLPqrCt1",
  "key32": "3x36dJ5Yyomefyj2dLYGGhoj6UckHEY2TBP5gqfpbFSpZvyiR8kwseMZzLkDjTMJ1vzXc64rMSQsQExqQyEBnTeZ",
  "key33": "2v2LbJsZpAWzk1yMp5MCNcqHnoGHfiY8JdYzxpekCrrHZ182tNoXFv5N9BduXEnxZkbkHvuJNxy9fmF2FoCfngri",
  "key34": "5BRFfsrxyMJzpnW5PN6PzTAWaiPSqCcAWT5rAVD1KCyCjgyGaLvxHgPUQGisBH8UXDmJBiVx8JYcR8PKCLwFBaTn",
  "key35": "3NmdFL9zbMx5H4NCnJyqfU8u7V9dAPPgmzHMbTaxannvCprcbPJGb4H1y7dRDEFRcuxzXEbkQdscbyYJtFCT4VCt",
  "key36": "3dATsBB5LMpnfGLYL8dSbHdf4sRbhgFfRWG4LBT2fYpoaCUFnwp8BahStycboGKupCyDRi3guXwUk2pVPbnLGUWi",
  "key37": "33Va7KNdvhB4TrWvKAuVWxSyGXeVSDCXatk2xVeeNwbUVQtoukZefpqWLNXAiXpsUmzBBNY9iNVQQVDryAPVr6tC",
  "key38": "4eZjUVnFa1rUzCBR8p4mz7tKXrrtbQi8YkGo3TtxjMGGEoeNuiFConiDUxNQUzvCfX3cLSk34zWr8Ns2xk3HKFow",
  "key39": "2qgm8VYSchqWUStiGdKzD9fScR8oKXW8hdvm1DaBcj33AfzgTx1g4dd3aw4gXKMCSdv56a8z1X8kYBDisQbYbYM5",
  "key40": "NCJ5bKngLU1fj5tC6yKLPTW7YUpKtq33ndUqH94FuWtCkskkCg25kZFgpEQmXpYfYugaDaqQwCZiaNhRg4ywCcw",
  "key41": "NJUXbULhbAqfS4H5s9XEbYCL8he6dTawfLVbzszGNkdRPYFKLABHKhoKf3u7DjvXnaD7vXbpcCDNqw2JPYVNc9U",
  "key42": "naTkU3QqxkrArWtgaVRat4PzsQipsw8u7NLQARXkGq82khhppr4BFxxYqjVXWqWBRF1g2GEnS66unke9hqi3BgZ",
  "key43": "2GeGJAQ4ykcBeK5bSqoKpxofsxZHcZBviRBT1h2XgfWV4CwbEZ5qdziMdtEf8jTNmVca17sozb48hDsWxuUZBuY9",
  "key44": "zUC8sj7sW8S8TNnWLjHtrBN7ngj8hhVk5Q6ad51vemHqAQLjbsHHRgarLDhPuVs4VGoDNJqKimLZsUL5xtKXnvt",
  "key45": "3m5zs1W9LyTLLxWT3VAeJDVfQUy7WXiHTWX87FMVyzZ2kp4NCzqgU3xKjNuR4MfKXwhDMSjQ2RxJqoA6mSF2j1kd"
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
