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
    "2vbs2DXr6zw7vs3YE5XjuWkFxNNupPzNgdXhSjHPvHt2AaWDVn46H9eisgbdTujjGsmGtNnuucwAvpRuTJW439P4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXyxEPKwRgHcEwEK5csv6XAXDmhA2jwUoqpHKYAwbKt5jTsG5MzYKscugyLaqQZXUiyxnCTxP6U4mJPeCi8Lm7m",
  "key1": "5E3ZSMvZsKwQTnGmkxMtvwCnRXTcxJgdYEEG9vDMQKHkCp6K98Npah3SChWuz963t8QuNskSK4VY5MTDmXFAXNsN",
  "key2": "4x9Q7qMvYVFCLBSKGCeSWXprWWRnfgyaKsfgRrQnaNeoevZhNcegX7Y11ttV2tWWcMKkgfWNfyVehuLnUZTLUzc1",
  "key3": "3i7QbphVGq1KxTwyK5tgVBtdXoKBGdgg9f3kSVzTnXYC8j4n7cL2TQ4dDGGoKP9C1kNPZHo6azANn52tausnVpn",
  "key4": "5N7pS8EjoxQCSWSkTeKiTgthWg6zQypp2xhkmW4tkJ6EkSh3MoQWxQdbtvfFPWNE24VPvrhxkPWJUmaciqNmdZXt",
  "key5": "46973Ud1pMu9HjxBfrAXMKYNtqzseTU4NAYXjnNZ2yNeqQAyL5NT1Vn4ZAetmgV879txYJemTGGZrZzN6nDpKqQj",
  "key6": "ujdp9BdVrwzkH1aVM2PdkbE1dEBZ5Q1eGvZNz32cpykAH15zVPVKRjkcVAwZ4XRn7SxvXYUEcTRNpMTAzYLmx6F",
  "key7": "32gu4D4WrDaBR9kLSWqqPuTBeR1K2PVtJAxkyMpH1RjX8x1j3hech8wiwwjNjtCaemRBuJmYBVeihEYdt5tgkMHJ",
  "key8": "2f6ZHvFaem1GuT7RVvdsdbzeipxVjXABUKLu95RTnrhvhniP1k9z6KpF9S63QYHyeJ9ZgPhScZZysmQxgV6SwcLM",
  "key9": "w4RBmU3CovsbWdqSRMQPHg3tdzGbKPqjokXs7zitZq9EddRfQqy2rWdiZeuqQhsMMdWUf6Ty9eCx4GkFfzFexcp",
  "key10": "hN6XtgpTS8LdcmsKLFxrMiVH7wgiqE5TV9dGj72kdY5xp568Ej1LKP77dFTsJ9dAfRJU6Y4YikByCfw2RuYzCef",
  "key11": "4uFuuk5aEfPaYL52wixZAKh3rwBE2KN9VcFc4qyxMF3CwKTPW1zQxcanhdtiMPXa14CzLhAHhv5abegg9sqeXpn4",
  "key12": "4SK5tvs65C8ispC9gpyNFNQ4SLb7QDuiQ9Ue7se6xJG1RUZMRfeh9XmWbpDo6ycbw4RyAw9uJWmwWy86iNqMPC1X",
  "key13": "2XRXUgn97uPeRdS7sCwxxcs5oFYFbtXadfBdFxxPdpvxWMxUpv9FLAmv2NHNqos3HhNQ6DuJ4wXSgUNxaZN5cByQ",
  "key14": "5onBdgViuaYv2irj1zwewhBJxm51e3Ao6Jub85t2kLgiE41bYumrsY9PyifUKf9Venm6LrzB8MT1TKpoxspFdFwR",
  "key15": "22as77zPAVPy7vw7r9Pp5TuwVC8WS48GRvFa5xzyjwRnHcXF4axK6jpmrCjA2AtvUAovW9eJCharXgrbQC7aJezX",
  "key16": "5jHDS1aFvUbrkXBev4nWEohVjuGFVJDJXQruJKniEgMrVq1tU8f7JkTBeR7vAaDyGzxNCcCSztdbJDGCSnCogji8",
  "key17": "3VsDuT4YRNCxe2aVLLhRncn7BL2pRHa43GTpYURmMEFZTqERwnpQQeyAQN33gAJUNu2dhpcdGWSckHvBq7yQGQR3",
  "key18": "g3oLvY7pqrsFZXkHCw8pJQEkEA6mLqyMMKwLmGvhcAuEBCHrgLHVQ98Untr3qKLDi3zpHYKew6F87FqwFFDTZHL",
  "key19": "59jeiU2rgAPWdjJgBMENrtwknRF5x6vbEP8rMzvCDcLbxjfUwdZfmtSTPggavZsMg2UHmQzXCwhTZaVBqHneK8Ga",
  "key20": "3Remy1P7UbD4rQBusA9xCNV89p9FHtRB2C4zwqfZzix2cYta5tqHTcs8dg5ZAA6AQTy5qyxRy4pdpabjQf7m1JQU",
  "key21": "5PWzTZwYFXL8wxE1PavGk23r83KxH1UdAKj8dPubNVHY2oonMGpWo5454xkbZ7aZrZKGtNGdrfFJv796MvKSkNXT",
  "key22": "54FyCrHahYa1VGSqr67Wwfb6sz4NzDb7TVBnCzKYMVP818ZUbMJuNNDybxs1W5NC6Z7njstgpLzjdLvL5L8YQbR2",
  "key23": "46tWgy5fdSNTtWrzAiJJnNJwzBYEzWwcbrYi4bDBQbHRhGzVcPEMudAh1rKPkrUuAFJuGZgWKEYWJY3ufxQtcUpa",
  "key24": "64XQgBeHTjywhPNRSQst287YAoCUcXamhyijPiUjHDdGudoUVMHzJh3rLVeXNtFvbaNNX3UaMPgGKW3vrs1gAsML",
  "key25": "5y3MZeiViU8t21DmwYyG3EfrWdx1boaXjpxywZPVgPUct8EcpG4FkB3tE576tm7pjc3He5qhzNGcyAKv5Dt5Q6jW",
  "key26": "5KAJwSDvDaKhekWKMX7EWj1SoLd51aFt6dKahqt6BBqjCL3inqhdpvAwhFuw8HHV9W3UUxvC8zzmKBc6vZKNsDm6",
  "key27": "2ceWmEb5jmTBMLNPDwBe3ucaz8mTmSoL9hEQAtGnHNNRneiShXJNbDsJhvKhWvWfqgP3ZFNfNaWdc5AS3tsfmkt6",
  "key28": "3rBxfakBkR5wBtB7Me7TFhooA6mMXmY8brzTPFLL72vkisz8p39bj7hUzMhh5m5gC2NzAWuRKZkcXD8Vn9W6EZTB",
  "key29": "3pjwoX44JWDbwYH4s4QYpcHzh9F9puL1RuFrryhMXsFSq5RqK5JrtXho2LSfP7EH3aptQiGWsxobroY7imMBSQZ6",
  "key30": "2XZA4SVhj6K4Ef9aTa4SLqqaouksEoY8zvoRLJN698fTtzMy12vfW4CY5r5NgP9UCTYraztU3qq9b5VRjeDdB5nL",
  "key31": "5EAKzz4WLMZqFLckUWFk4v9Txdm1nXXAqnZqdUzrAMT9N9U3VaMQZk2Y2CagreNioEAyiQ9GhHeEr94pCDQbmoqC",
  "key32": "3UzwbFSm5YQkQU26VZVGN1zDv89iyEGQXh5Q9q95UxoJRkgShxxzF1somNVDJ1wMQPEAQRmjkAZ4yGU1ECYMru6",
  "key33": "4Em5votyP4uiq15iCNtFUo7oDGDf4jqd9aVuJmJuUcvrmea8roroN1mos6rmSSxuYfFENc1HJPPbEwAK2WjGbZ35",
  "key34": "4qPeYEqnkB9MyAR7Yv5DSWQcd8zBG6yjrzH7wVjuwpEGSbAQ3GN6XkESiUoeqJYpkJAWMpiF2WEfkbNd8PUGoKJ9",
  "key35": "2axqqJHyCRn9hiQ9xgVPEpaoKxyM84nZ87UekmATe7B5iQpg2qiSTsHLFmVM8xq9T22pF2h8shtshsfDcMFi4GVi",
  "key36": "62EjfuKPfisGCCgajfTUa17FybgdEHT39EHbpKuGZw7cq7AHf6ya27svk2HzYKqSbwdRBg2EjorD45UJCC6NWM9b",
  "key37": "vt8hViDbDE6yvdG5YUeT4zdvkLDdBWZmtRrmu9TGNJsJfDhq2aPhg4HawUKXF7RjdjLGtKdmphZhV5eLC53h8XG",
  "key38": "28Wu841sMvT8c7MtTi8gEquXCbkZoaLGHojvG9ZanKzSK9kt5z5znLn5NfWzr9dVCSjizrQ38hnhGQ2mFjFmUauS",
  "key39": "22zQ6SQNN7kXWsfEtsA5arHymrQHvAMs5Nnbyj6oKVW1KYGmvoZdVZhp89k3X2g29C2HFmu2MeAtYU2SCuys7kqi",
  "key40": "29V3fgfXAPfX6KHdvR4DfEc24mmd2b9FjsuLFwPfaaL9ygJ8K1MJa8jtbiJyNtQV4t5crKXBWzqNxofaKHDzAJar",
  "key41": "3pQKD4Xi2efuG5sdjUZk1m6GhxwEHsdV87dTbHGHxTSnTnEhcoksP96ZoqgMdV8BTx2Ru6PqwCmCy7wuaveXmWtY",
  "key42": "2HXPK5Lx1vvBaugmhQshxph8MNxtUnoP3iGrRqyq2xDaGbAcnhv8cnfdt2narbNuQ3iSYFXnvnkgUTmvQU6GXdFx",
  "key43": "F5aP474Hzh53Wr93vKKNVKXC4qzM6SDDFryGCELK8cq6mwaff8gA18jMQrLeQ6RQiBzf836wCCsKfmjP4dUstWR",
  "key44": "8VYbyLwMrT2UwECxViSzHy55Xs7wEXwaqBQuH6Eg5F9KJN7RJNywpwGAAoQqBdFZVF4BhFDUXeebHXEdKjsxt2t",
  "key45": "5fqJb6csvowW7hfQB3SAthvzfiAHYsVARvdBLp1iYCf8Uk1ibaHtdsfWrsU4CmeNURvewyKfLFPhMpxasygKCwWv",
  "key46": "4NnjERhcx8AbgqCX5f4NVTdXuVUUS2rWiuiWhuc6pr4VNVhN7U3qxbq4e1GazqE69bGW2NbjAuuTtrrtEEKbf2tQ",
  "key47": "31NU8LsUbA3RiUpb4Hbg1voa7J8xyfAFXDsKKqXQLQJGansWFvWZuTju9AekeSXV6w1NifxHnTJ6AEKSQPHrdPjR",
  "key48": "pVnaoySJVU6SUTNiYTd2cjFMkZgRMJRDqhqnmUL8RWntK6UM8iLtkVfXDCNywE883G8pQ5qowcQ61w3y2hgDeJr",
  "key49": "43BVF7DvRkzYgAw74ko4h8wP9RhbdNf6zoBySdwTD7dA1q2oVPThUVPBZ5jZhsWUWgwfYrWCqnhMFA56YejTw3vy"
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
