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
    "3MtH4yE2STfGFeJwAXPZrjfN64RDuCXcCkYzhfXvmiKdLN7NYKK2amEwcN2YQbKC363K2nnnVybxDXNUNggt1JCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkCENC2dpub2NLhTJUjKiDDFufsDjYQ6gCPqGF6zpwkq9aQsYGt2XvJnRxi2AzV5TRBSRAD4yHUoMg2ciZkkWRD",
  "key1": "4BYqisUZuyZiCP7LjTN4YKTAYkJqTEqLs76Bo9ADp3QeES5QQq7wjYgtaqm5adBY14h3VysUuqvYydxoXoKXxUUZ",
  "key2": "4qnWL528MFjrPvkwr6wV28upZS7khQHDht4BV68tiq9NxDc9HVsuUFkFfLmRcF8vg3cn6vmTjZ7iqu6bEisLeXaG",
  "key3": "3PPR1XuSVDMwxWyPktwBSJ9qUCKNd5aaEjRzeGqgdepHyFCn5NVsGnTDRXmmvbY2c3FViLD6kpC1YsUSgQAkWstD",
  "key4": "4bd3G9jC2yPAqbC3MokSN8mjzrqc2TiZDmxhTpxXeEoUvPGYHRzzB6rBR7kiM4Z4R4dEMKaoY874FUdsogJEhKbq",
  "key5": "4gqvKx5USzmshAZQhpMKtpQaUgytgHajdsYpRUhnXzg2tdJAzPh5MRMyJKQj8zLLauc4HoPw7JhTzvdnr1Nu9xs1",
  "key6": "8b5pUpYtWh8JtbnmiPezkPoNXKpq9kUmcChTD7TaiiAHR5B48YjwXuAeztcXBGmJpvx72qwfMhb7Keqf1P5QsFC",
  "key7": "4rWrQmaqddZWArH56i7zeG85mh56CN639na2jn3yYtrbvddVThoWZT1sjYDnyC6nNJBAuLdtnFPKQpfCX7nNCPkv",
  "key8": "HuV8smJozq9DXFSqC9wjbZhwg5Aea1XGE4ovMfyongSs8Wv9EbJEk87ikBeRN2rDKvJk4MNuGQrQCscQB16Pnkh",
  "key9": "4UpsXe4DiG9BxWfYwfAbsgvvjHLre8mHtkK4P8rMtg2SFsa5rNULDNvzoHp3XUAw95rGiyyNdoGqGpjCUdYCaCrD",
  "key10": "1Q21L6YcfDXT77sLKQCDZQSkZYrGpempRxKp5RzqErByiZ6T5zuUTbUNGK2fZnKNe1CUtpoGnL8KknPAc8VKvzi",
  "key11": "241FVACBC4aYjs7QPCWS5EU9vfUJRmYmSbJodSNDtUioo2TKWS2BT57g7BA2ACUPhrDYXRgBfn2z1EppfwfWe2Qu",
  "key12": "3df9ATWHHuQ5ageBUMELSDgQE4eAsEWi5KcKhS82xkMHbF2SNFFtjRhu7oxNQ7XZjqdtMFyaheDxDcu9Tn1F2j8N",
  "key13": "fcESwb8cw1FCseJ3asULrgtixd1auzBHUn6awqJWAaQR9pDANBMma53cYwVc56v4hMhcyMBZNitgVeARsP9r1iS",
  "key14": "2AzTUW2cHW3n8PKRcmdQeY5S52dcEy3YC8fbMzbSrN5tKLsJ8AFYrf1Q9UsPGyTDawWq2aadhjKq44eYytqz3TAf",
  "key15": "24Gc8sWUqbZ7knDkrshTiLR9jZqboPnC9rV6LPg4fLDXsNj88wbb5LSgMvZGEnKvncRHUg3Pk1ikRqsbzBYHbQ15",
  "key16": "5RWYw1Q51kbNgLZhAy41hj8rwrSr5cRDZ2B5nutFvCsyyJPt6GJG8GMpJs8EfUQBPCG5XzbGkjE7aXxTXG8npw4h",
  "key17": "4fFTdUG7i4EabFSnzWxf8AyF1KhKG9mog8dziPtJWvPjRhVEAaBt6ZeCVJdVqmpojTgfSLsdSTyqFqJvBPeZfRnp",
  "key18": "5PHVAYfxDo3Wk1HVLTj1tQWif3TcoMfNeToWAi82ES7aM3WSbxpyAW4T7VHGatUEE3VtNaaYaUgEuAmNyD7ygPNc",
  "key19": "3jdYAPXZZTRaV2j8ncUC7jid2a6R9aD7admDhYWdsWZGxo3kJ8Kx9HXdYDA28Tnscqy4YTdfM5zgX8e22J3Y9sLh",
  "key20": "28xeBEs2sC7e5KMZcnujwgsTJYo423Q7k6iauo7d4YnWL5S1sbJuwixaRq5GuHEiuBcitHR9TGWA2yto8Q73unD8",
  "key21": "4ZoQtmuAFHPqZP48s86qoEubjvBTctT7JmJmL8mEefyTb53cCxkimiq5jth1AnAMuN39xo2XHwrKb2CCd3aH61sq",
  "key22": "4gUabYL3bpkKvX2c8fryKBNDVQQrXjMKdDRQTtbECS5bjRh9FnbKC2zD2QoAswkWYLMXrctoG5gBBxeNzFbDuXmV",
  "key23": "4oNR6q31cV59hQS27JpMp9HALz1jE9UWEPrx99LtUpFGDAKoJGsL2zzSqd9hb1FL9ji2HCBUKxZnQgFeqZktVAnH",
  "key24": "243TCS1vG7EN68dr9NbZUdhqigcTMT42b1nkCTcaDCBCPMwyczctUT1cYfx1bdGrmjVcriWhrwoDsgYper1UwgY4",
  "key25": "5qGH9qm5MSe51GS9Btm6kYtoQF4YDpr1BMftseHxWHk6RbeZKyyLtkpqJueR5WPRWKk5bbe4EVWy87QsikGV5qeS",
  "key26": "2EwhxCx7zKykNXZaKEvveB6PvxLxPoFXANy9eUeicJnQiCJDLzRDwfUbtgaWrPofjxp1XWm7e2iq5ig2e6mmt9pm",
  "key27": "2s5xEyvRRncnoxRtBtTmYCipC4jKM8SBbUfiGUG3fZJZvK4yCvG1ibdzWMp3Dj6rgCqnuR8AFnoJd3NQs3M6vyR9",
  "key28": "NMdnHYb3obctRpBUKriubiugzxNhwJ1m3e7CDMux46ZUr1k8EBw6kb11m1eJCHsJmjzk4E3ivmpRWYks5ukRKri",
  "key29": "4NyVoHTyxoFR1h8cc8eGyRe32EoAmeRCuGxMXiAZFuXjkx1QTjYEhscQHRPxZp8jGmUxYkpHQA54sc5Eue38Ay65",
  "key30": "4CnkmqEE1nBHrrfVcMUZBY4JZtCJTbWr5Yp1qzhGFuPE7trXoMsGeawCq4KCopjn3DL9n77QMxuMb6Fe6moAmdpY",
  "key31": "4URseTJtnnZVdn2CjTKJGdcxxzwpQZSkxKmq8oCYmaYzVb16PjX8qC1WvysKC3gYv65reT1YynyznuNGv6mRRrCM",
  "key32": "2YGnivFTmJTySNtREWS7ky6NBsaHmdWnZ3W3fFuYmMrib1uSn18sHtNKtXriBaE5gWELjJgGVXQnj4pAU4YoNwvU",
  "key33": "3WNjs4nS3qH6oVnR75fCxnFBzsLKrufLEjkBoKRA2djwZ2eQcaua1seUcrmXPw4jx9ag3zvFvBnM5KPk6Km5yGFH",
  "key34": "4fri7butPCA1ncceCiYFgEengzjEuAPJqPLRrZzC5ENiH3JvzwBYxpeW3wvpCH3XUzxCjkKDNqBYVMLxaUmWs6fd",
  "key35": "5Cd1ykf9FF7VVycHgWTwHfVcGX8tfVM2SnivRZtAS4vK4E3ZHqT8BydyKxkgRBBSiFJtQTPZhVW3UMhQVJtJ2r74",
  "key36": "4SfNtLDdrhxSfSpXCEurho8wBzEjHi9fUfj7s9Y8FYM8ye3shT1xiFwoVajBVKTF8gPmZNqfTWMZgqv5ekW7CxsQ",
  "key37": "5PvnwryX5a7xDaJMnpQWs67Z9pWYsDTDoMMj88VRuG3KHm9i3zowbcP9kTJncNQrFnZo3V7P8RufkDskPBZGvNi4",
  "key38": "nQdpXh3GMqDEMD76xq5rZsgwbZW5ZaRPYuxQYge6ue9rEGajwGFkYdw7ZQw1Nkucmtyavi3pdoiuKFvF5CXbsqV",
  "key39": "56uNkZHPppvXnAWTepsrevvz8Y55Yzidupe9i58ows91g5pQhmzt3QiSs1hcMW9iMiXa4FGQWKRrttC9XrQEgnXQ",
  "key40": "3pq7DscZEvFNZDTsxRSZHGKcso1Q7xY6JCym7BoSX8pvQa9mB7xvpRzi13v1bGCeaNF97ZYhaDT7eiD34zWkQeWs",
  "key41": "BkAR61LjoaiT1XXTcBTH2BrSXYGAkFmqc9fdtoRuXLJjcJgJ26ABBXauQaVg1wBoZ5g5SA1WqXQokcgmJCDoocz",
  "key42": "2c8YwpbVntjPWvjbJbdY6gQwbs9QzNGoeFDtMoF4V4v5UBPt4vQrk9a3PTe1xLf2w2M9FJH1Zf2CjDxcibNnuaa5",
  "key43": "5somkFcsvt7hJMas8DpJNM3fjtGELry2bRWdzp362Jvm8jgRkY6w1rYJ6Bi8BJ1RVATdcGc7Xia4747tKZbZhRX3",
  "key44": "5qpn9vdQJS3EMUzadfQMEN8tL9MMob8BUvSNqifajdz7nJ1tD4XZPpMixAJp1Eo3TS61CSEaWhtf9QrzW1CXZ67C",
  "key45": "225dd6gE5ok5hhXhuL72HWik2KkM6zirJUGVvdjSJpFNDNRLTJvBUEVjAJ2ePFKjmamqvMASL3echCaBXFPPe4Vx",
  "key46": "46efxXzQCdJBNncJJZL9A6MNFfcc3WBPYVdG2MXmjbt8w71v89rktuKa2HAmsU1Epu1ntqHKwq6NCUQDquELgqky"
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
