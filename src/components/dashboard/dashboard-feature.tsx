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
    "4bq5jvpebtcR3hgjAYuKQFLj9mNYET4FyYHcoVqPVDVcK9AvgoKUitzxPxLL9xiMf3YTkQ74x8cEbSqobwC9Q85n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRHYn2r1fad7ZzRk6K4dy1h86YiRgV75iPDfwUDH8AEkY6m6kvWeiqixgHkaGboBNUBX1ANueEuNDdJYaDH95R7",
  "key1": "3jDzFBqfMaUwA359dMUpStWaFC8NKGwkhJyMgmnqLKsT3FFLiBJzxGc8zQc6Et6vkDzgbQk596DaRZAoeRC1NycT",
  "key2": "5tcmn8dTNqB6LYtCC5Rys4oaNGvg4YCq5VkMuRiezmqubPsjwri5qeSmzUUC8hmLsGTEcYa7gsVPgGjhhZ2g8k7G",
  "key3": "3JJBw7B8NW235iekQn7sezWa2hNmCahQnNNKj6xk5yjM4h535VYN13Q31y8d1MrVCCfsqR48W37Hf1iGQ6B1tMWq",
  "key4": "4YLNCvXatoNA3tDc4afBCkzYaTAFMm8Dn8jwsTERtQYRjU4NbNJN319kmm2uiYY4xNNJjbvtu53cLou6PbmbNCSi",
  "key5": "4vQAb3S83qtH16b8RbXS7ZGLjtokBCHyhdRV187gufqHi8w2sGc3zYLHG1rUZr1MLpPLKCEtby7QTw8uu56WJam4",
  "key6": "2jbuNbQpy6SQqhHcP1VaSdn58bSAQLEYtnGq6v8pPwmuxrgW7gt5pkXJxmbceGewmanJnJMTGrL36DPCwzeyUPb6",
  "key7": "2zHFRvba48sDxKcSkAnY4nPt3uPyTqYmc4JFbnuobQ1VqXtzzyhjM1GPGZGaCyS1nTFNKhXt4kWtEuyi1VTbann5",
  "key8": "47Rxitmy53yA7ZUBMVQHk8xFC5gLbmNfLdLDnntucPCG1AqNgccgBWFuaBinRnZWyCdcDC2Ux3mCv9k7G5P3SyxC",
  "key9": "7whgMAfCtLp9Mvpzsp1fpUiQxhpnTmoUxZkZT4NcY19FqbjY5pA7CLMNZsZ47XeE8YNGydyRwEX2UtAs7LDCmQc",
  "key10": "5PTETkDG9YX2i1aG951MnxWR4tpbPE5SfQ7Azozx9JCxukvSQytdPpEWWUB7cqdzZwUBV7MdSCivwkGNdmcrMSA1",
  "key11": "4giYrf1Gm5ntmAjcaHEMR82w6jaFSfzEqrtzxu1ZY7Dn6HACc7RL5Rq2cC1Vznb4ACTzB5TeXYWcVoEh2kQHts7A",
  "key12": "3z9Nv1RJv6Rj7ggEzz7FMK4B1XmvgrPDDpSdGuRLNZmhwTPH9dzTNaiG4mNbv2Ns7tAtzT3Utr2PKNz1kjTtx7w2",
  "key13": "49ojiFFkoNE5jzCWv5Kmww8FbQJKhnWA71Qk7nJoN8rVwrct1iXy3CJWWPzVPB3eR9TsgxJik9uLptdpXEyxJPYu",
  "key14": "4pUbR3LAdSiPb7aqoF8XEd6kuFkFe2JihNDYFuiQoJnJQ42MXD1Kk4UsKrFUWTGz6gGmxnNmVzynrTBQ1LBzP1XR",
  "key15": "ZKBKT5CWm6UsSY4j2guWJRDtu2Jwsq5LXfnpDyDtJgZpDC81jkDuqutaE2oqyHd115TXB1e46PZPJJegQqWNNPF",
  "key16": "5G7JB2P3saVtXWA8Ek5pW5J3XCH4xe3BrrayrDSq4Sj7XQJhXWv7RpLEtFvE4Jzj2w4Xr1jadWD3hQ7isbbQ1EpP",
  "key17": "3axwtubzrdH3SFSdauACAD7xws41AjQUuD8HWZ3mn4PG7E6GiR74rwVemm9EJApAjxaeEFZExm7aBcCeAfGQgJH3",
  "key18": "23tXy6Pi8AyYHFiE8gePPyyWMvZDZLczypbXBgJwWBKgckNSvjZv9T5cKrHVHLRvvRJQqMqRtHmgAJwACZxrf729",
  "key19": "3SazMVi3kjsZMJoTGSsrvzGWeJ4wVTC8iNXVCcvR6QNk9Ex5jdQCFtp7wmtSgZJdYqEKDGGHx9eJLRDkvAm4Yn5",
  "key20": "2nwTmP2de3r3fTHa3qpfDD7QEKPJbXsDXDScK1NMF8nPyZAESCtrTPnkUiajYvpHXo9fmGhHua1JtZDYpDUepNRh",
  "key21": "3XxYWT7a2fsziSzeWNAU1hWVydogWJKwr18ezcS1MqTbPCvq9dXrRqGUa3WRfoxyGB18kM8kxpLqKMXeuMxRSkFN",
  "key22": "2mtLwupewWPhMBWNfXnG3xDeyUVqdQPrxVpD54awV4D8sMqevUvjWZqx1inKdnZS4gMXwoGwGx4gNAW2dN72AR6w",
  "key23": "41u8NE2CWGDDEC8DFpS17BTA4Vf73BwzCM5cmkwHPJMY3FchJEmeJTE3rddZsskQKaqXNj4LtLhSWy1AX8QtwgJa",
  "key24": "3iz6XsDvKDTVcFj8DTyt9u9ciPPmSbzWrbtaCw1AqFcSRWWV3wrbRfnTD54nSpkqEBKuhudb5Qm3s4dvvZUaYatw",
  "key25": "56NAeJfyg1nyPWVW3kNR3Ktr5AaeijAD4oww6ScaNcwD8HKEM3M7xagxZoVYow3JS12xqVRz7xMKthR7YijVbbKi",
  "key26": "JNnNBXY8X94QpeQpkw6E4Hhyg1UKRyHtkcAoP55DydVM1Qa7grghNrDZf5RwgHYEMkfGyXChd6nEedJDQZFWJxW",
  "key27": "2buRRemnqmJjm4iWYKjo1tsxysa3UvRj56nJoXTPaksYAvSHNVNtCsi5exkgohbNbSQixTfm6k7pJvxECsJDUA3R",
  "key28": "2SUyyonJqLjqkvuVt2LCfta2Q3xU3FpZXhY8rMXfhd2fFmMUj9aB2Sbqg1RNDhMBiRNRiMY47BKfuZwKeFc86mmo",
  "key29": "4DwQBaVsV9ENUzLQBMWMjHMQyMAXKMmvy3p8HzRczG9jfN4vbHnY245tSAQvW5N1vRBqnLHp834atbQSZ78fq3Jk",
  "key30": "5WesMGvHMumAggcQJ665Nffx4KefvN3UABVk2hwuM8cR6sSKzTkcH9ce6TbCDkcv3B4nT4Szq2QUfXMHMNX6GGZh",
  "key31": "1JGRSbN1a7SvpQ8R4RfKWHKNu2EVykrQcuR3KN9E6vS7WxBHjz3QSBVHcQ6oFfZn8RJXXgQkJmEiHVedK1pCqc9",
  "key32": "4wJnaqSZ92amT4mdjqZJHPRXwDg5XMcESswqMFrtRkYtU3ayozmXXdTsR4fxi8jr4PX5mK1BHeDs11FmEeEoMwVV",
  "key33": "2HXyAEUEQvmv6hR8o153aDcVJpJNTeiV25zaG1ML6ahpssY2xCidTNp1vKQdvfHE7eqkwoGjppqyJUDy3kigs3x2",
  "key34": "2F5kX9yN58ZJ1ZNgUdWpt5fcxma1yJxh4LpUDWyTgme59BAJZ3VsxMKpEFHQuLKL2CPyhknKHqGfcP1fpKoAo5yR",
  "key35": "57aDQgwEhoV9TxWAqMVrCc8XrQuxxM2Re8nDZCQgdzV2pjuKaonu91ueUpSxrzAC8bkBT4prhHGXJquCh9WFfHS",
  "key36": "tCimpygDUW4AZ8gL1hY4VyJo7m1scU7EgVgP2aJK4nAq1bXpgFbuyhxzEzjkZyPAirqjehQYN737DdFwwDeLqHg",
  "key37": "WLc5XjJmGTeSdKe1oVdN3iR8FQPKEPtUJ5ykb4dd2JNV5RTLKVzteBSQyrJ2ZWis5SKS7T7HjY5uYbUx8iZ5xRo",
  "key38": "313siFN9AzJxUgT47HrGVrGetWWTz9R6w4geuA9cCWRTCR5GxMiZECSoBrnRCyNJwdUVuqwiP8GUeupQqfP8PWqT",
  "key39": "47bTexk4ThxcvKuy1gb4y1X7Jc8iHZCCCAjopp4t6GiZFwp7DEfN7KmMr3VqHgMvqbPA8shWGB3ZuXYWkX3wmfTT",
  "key40": "3U1iXjTcjbAAPZWdEnK8VFQTbW28KFUf6gVrFJKwnZzs5eUDwvAvyNPXM8Y3FueVk3EEhiuFuHofo3SDTQbLqg8f",
  "key41": "yCYCuc7kFFeFJU2vMyddMzTXxUGoZnToGCX3TzZfZ68FWrVCkyAw9qun78dfsMDJbGGG1JpGGfqy6crT7NSwL9r",
  "key42": "5j66ZGF3jwQKowsyzM3QMcSgNriVfF2SnQZxJrfDTfXrcSKLcEGG6FykA1cW2hVrzHyPcX4QRY5hfkw29ZasjUps",
  "key43": "4NUEjBtQUeVeqr573v8GbmU61cJyhF2WvfTuzW7NfEhhoMenTV4rGuWCD6dGr5EKMqfwwc5YMCtzTncvLnde2hT7",
  "key44": "eVV6E1Rem4ULB4X3s3CFgxiWhr1bKVW4pBfTitRssoPGY8jY13RwJ1D15RXsgWKzTiPvLyY1NKjBzGDNXKtGNy5",
  "key45": "Gmfk5GAcCV1j1WZsRb6SzMusj1jnnsN2wPJZjADuaYBVULhjy4uLxYGUi1eb1W6i4gvYP7rQis7sAjsdveC3ea2",
  "key46": "4YCXw4wjpZPdJCXQjB6G1HGS7VBD1bthe5bnoM2hm3SRdYCZrx4Bw2jRuv1J3Qoeu9sviGAwNQBzpxRjmevF3duN"
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
