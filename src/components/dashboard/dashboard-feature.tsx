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
    "5HdTr37k1dv7tuur7ezdnH86DDLGsb9P7Dv6VrUNeFjUBugBDQ1KYj9UzrvS92bh7fJQwGAtvZrHRE1uRqY6WS4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xc8M9Ye15P7epJKaKkF4NTCEyUNsTT2U65v6uXkc5dqJvPZNuveGZS6YqrbxX7utzuwY1pWB6Zsmoy12BksEjFJ",
  "key1": "5smf9X7U2MSeTp7gmUNonA849Ag9wT9hgZNEURySXC2Bonw757Ca4NYMWHLBfjqrWfAitXfmcuGcrKUZYUXAy9vC",
  "key2": "4hPKNU836BgwWtYXAtuQeLSTNVSRt2UrGjTUfa9nJiLvGaid8Q867UscaWHYJNLKk1tkHsAozwZPZ3vSwoP5amHR",
  "key3": "4o6BTDm1w9kvvzai239dS6mhKc9FjFFbXvjryp7jicbGetjhEzMweZGbKMCq4dVYXW5UakhMX14bw52sRjYfRd3e",
  "key4": "4xDWpedZEyEP7UBZu9QPu16zYcnvAcKXWCqQwoSknRu2xxwm4agayLhWQUuumr9xfevqfsPbPx9FzPhtr3JTksnQ",
  "key5": "5TjvH9vaUPD9dQaS2cn4TcVyiMKjv9jQLF9XW5bkpKtFHSEKvH8CYRZQ93n4Pu7PixJrLwM1naQK8wnSQUD6XXES",
  "key6": "3Nvq4adb8etebRPZWB9qTUVapavqJRaXSKdnKkANau6PDxz1dUtQmpQrTQ191aRPKHh3Tn7N9rMJ8k7unY9UbVv3",
  "key7": "3ADTB9YBsu9yV9LyC6wR1bkTL3spBZnbbHM6QKwkk1St6iZBVV1etFiyotfG1VAff5M8uhQH1QLEW2Neuw8GfDRZ",
  "key8": "AxmoG8e7orARnYSaHMuXstpXWpWTjWKwXRq2Kkg68DBgkLVqP7YEn4yyHq9zZRyVz9E418XPoC8ticsjCx24hSJ",
  "key9": "kFhQ2n2KuQRfijqLk2xqALRJL9Nmrkb1sb8D751Fg3dMhZY7NURSYSUQxJ2MJybFCGqPvNj1hbmo1rAGirJwzWK",
  "key10": "Xbv8eTqLynzu741g46c7zfnYCd4eYSGNWyaDjVGGBfCaj4wnMcShQeDTKrPn6tdKkJMynhBTuL5HxofuZ6dCEjt",
  "key11": "58R5ut1QtQRoF9prB8e2aEi3rB3jNs6m8nbQ7xvzeGax1qudEHPzJtBQ8NHrbbznaM2RSjbNRrtgx39v5Md5eQBv",
  "key12": "387yUousqoMjxMREuWF8yxAihZ9197ewnJvrGEHczosWxd1CDCQ9YibJQDTaPVB3PnsKJGdAaRb5bjZcZCAuzUVu",
  "key13": "ha488AzhWZtLgzbJzaDFS6FUaE5u6mi5FHkh3A1yUUFCy423mAULRbvsSD6WNTxEJk5N7vBbb6WTFog5VGecu6v",
  "key14": "zhsCBH5pYC3gAj5QkikbhJEg4CxUhRcjF4zso9LZMAEgWu68kXwWGzVwoqRgZNJyaTtx4eXWfReNtcdGnjWTHnQ",
  "key15": "29UgikyjdzrqAz2TpsDFKPqeacfdLUvM98cyenjJsvSdx4EcHsT3KHVS7P72VRskLTZQ2YrbKCDbwf1xTbwCvKvJ",
  "key16": "w3f4C7XMpRMPsDuie1DMvKv9Y4P1k3NBp5UTnzvy8oWD7XGhN1ku8d8LdJB3SJvCGvYyd39cFGPidGaqbtueSqL",
  "key17": "2CS8wXeQ9ArC6U4Xdz4scJmRm2KC3sPP8HAbWkRpfVDBwxZ16SXQMBkwt7KY94AJERNmAgGzCbhksQ8k7mp1VqSY",
  "key18": "5Mqb5y1fUUUjeQtqm9FmSZZ7WwXncAqAFzahi2KLa6DxDUE9Ek1zKiKg2TywN32RKboMUKtAxuZaHKZJbPgHUi8s",
  "key19": "55Aop3gKfjDe6zwCkQkkYDEGe4kYPoRtp3JV7nYSRz52pRCtFznvrzzyNjok3djXU12Vy9XQabuQ3qTh1E7zJ6Cp",
  "key20": "3wjmDMpAKb3yqifESZjdn68nEthuuU8FZTiTcfZ4sPUMDW62y5WyerwKDCnFeJETYrxsL9T4Lp7Huc2WP2c8BW7a",
  "key21": "4Nym3m6sP7yZ1Jtu8TLnpemEyb2fG2GVJidxbq8a9GzyNyMJW5gGuZxdaPpkc213P1WUn6tVYuXyCMMMuvgpnb92",
  "key22": "2YykFQbBxaatQWiPQ3ZufSUZzdY5wNPFzeGSv9yC37hxMbFASpSY7xGyw2cjb6q16pWCymsPA81ekxg5NvRP5W9g",
  "key23": "62cw27iALfiFzdLKoyFHG33hEADU28vbdiUramqRgX2L2pMuFcXmMqiVw47YcVCJuN6TLuwttcf5prQNwQeFM2Fp",
  "key24": "5tEoaDRSrqfrgwa34KnKTsj9RSc7Ya7wSeGYqJiaiKje3QqUBPN3uGmscNjzoVKmbYyojMxad1Ke6LMUpvYHC4NM",
  "key25": "3UpNhomZJG1aVPTbdJkw78x95zvhhYuQGngdZrhTk3sAgV1ijJL92vcNbTpTNWqxjsHwFifrfHzufbThi88UsxpP",
  "key26": "5R67c4oENwUPYb8zeafsdeVRzS1J8oLoySoojXBs9GNWVomTLc3tCeujTB9SAgWzpbdAkAb5nk8z2d3RA6t8kxoF",
  "key27": "5XsgpWmKvvXbkxrgjtAXoYq9MBCdcDLG6n1K3RVn6H1KUMKgE3oaofdxMZtBjKpqo14BBnAJMinSgLLM8zSBzMaq",
  "key28": "458p7PCchqw84RTWSwpyjoduLLv5yKe2aY6JgD2M7CqUdj8ez9sDZS1vPWRNEDFiEhpDNzNdkfKdhsGQdbVCPPg5",
  "key29": "YPEnugUY4NwquhUJFob5p1BZDVXe5hP2iJ9DFbiP6rzjGY2Fh6SLzRLobHsMv7h1R5tSezTfYNiAU1jHRgSzj2U",
  "key30": "2R8eNsPaiFLT2SUjd56B9kWc987MGLhPpaQD7gDVcbWkpWCsWJ4BxAjQGEWCyxCMLHzZHVAvES8G9TpmCvvoziHc",
  "key31": "4FiQdS2h4teedjKoMi2bSagFpFb3VFTRyRoiatgQHcuQVN3bSEGvRSEdhNBTj2ab3FmPLrmwD19KsaN3iKiZmvYa",
  "key32": "3tb9fdFpMaowEgTgFMg7xvVkrJAtiMxGB3A3tQjCwiZEKJXVoMoSBTfMWLBazaQTvTL8ZdANugjSCqUwzDehtCij",
  "key33": "4wuWgdwKSmyCPbTnHU8DSKzhP5RyJZfYSqwbkroosMzQsKAU1jnMKF5pr2Xx4kHibvUmous2e39x4uZMLL8413Hy",
  "key34": "4J9e2Qa7iJVvGtAFypTXbktCDihr8qZVt94D3AyF7S5iynUg2MWsECyyHAgstYGJQ2VhxDPtT6kiezsNBFpSnfkT",
  "key35": "mDDFBQwAnRCA2EKo3LH5d3VUfAFuztnoXAJJz2YrzUhomSFHNhFhyVrhmhrXvsz6GdxuVWdPoggL8ZpExUKosgE",
  "key36": "3SN7jLtdZbgrRoLsgtBPqPnCk9BjTJqY9htaBZhYj3AnVf4bKMqxi9Un5WJ2maSPViBb9ywNbAMoUm1Y2B1KtkS3",
  "key37": "4YU7Vk7tXMLxAt44PCpSpPR4YTn9QqVvjbeBaJiqkrTB55QiYrhYtJHSxm8fq4vbPHX364VJmWoVTnpKFPMGHag7",
  "key38": "3jy9YPBcZoxu5MAuo4ZipvsuwgLn615zYrUxvp2tZ8TYDWcz8gxQtLgXouRB7McEDfdvWT1eidLvoT54Y5VCdbZG"
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
