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
    "3CZ8F7fEHta4Uu3wFUcmrvhUbdjdgdHk5Sv3pg2os6nXxE66oVvnHEpPHq3Zc6K2Lw84eoni1cT4ebxJt3xYH8Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbdAXjsGMe3oCyezmVeMvgih7pspZjgRqgAgacxwCVZtNJp72cfGQjCumCkJZ7q8i4Hd5a2vpdxUsfvcoXyp4XS",
  "key1": "4mjFkTnRbbmuwEEhYjxyqHQmbRoqxUs4QvHzKWRQUt3Kur6TcvJoUTJ2FaiGZNk9nGrgnhBjNYcigrHRTjYgMgAr",
  "key2": "4ERDVK2qJACvMWE5JDiq6kiqRWgW3RWf4iMATnoTVZGp23u9zzs54N7at8Zf7jfcoQJocEdMwZdiaXo7qxHHM98z",
  "key3": "5Tg1pQQHmqA7MgWXzrDm8fs1mq4FaCEQLpviDF5Vn1uc6gAgfX4Gn1P6HQWBGtL9qd5AeU9Q3FCm5Jq3zWQB5DDR",
  "key4": "wqxhnDNbyttLCeEgpfndCTZqLhrNKmuPmuqpx2NePAq43Mr9vU2TDYBJAynBPPkdNLucanKHnbBMbQGSfhyJmPx",
  "key5": "4yz4zJLSM2jiVk5boWsMBsU88yu5AcR5MjUPmzS7F3Xa8aU7fk1PN7cSMHczZuBjk1BzvhMsvKQxx4MpLBAEUgcg",
  "key6": "5UdDaHjEhTvsEsEvHa3sUvNAZvoV6Fdkr4froZEdCjaVMoMYwjCFYeHhQ1525Bi3pTJj3k377gtuQvPzLhNPSgeR",
  "key7": "31dSJPEs42MW9MvvNzHtkvipXaY6HD6T76bTbctjpocUpBsrdeYCbCmiv2BzdfU1cRC9icJRBDZfCcTBDSJyQFqB",
  "key8": "2piSKgnpp9qEM6VfqWQEFp3GCuZrungMSuiUd7p6wvgm1bmCDxoKYqa6zVPmsmoVf9dGqCN3GPvGiq2Wg27ccscC",
  "key9": "5HiZ7mwnTFzJr83DvZwFBURSFszMryyi7UCyezH9UsF47fwfq93gkRZrdwKbaj7WRGSXqbrTqJX8RdEAftfhdKBq",
  "key10": "2yPNiJk6qQxXKwZrBxHXdtChWMXCpEvo3RM6tQf5K4VhQnyUHbwWx7Z8TwXz3gavsknsao9JThwBDpViM3L4YMEc",
  "key11": "NEV3CyGFAQEZ6gncMp5kqwpZ6G7hQtZe5G1nGnmQ3KmmxPYvHKirSGzf4B1E115nQCHsziwFX3BPj8Etun3omtY",
  "key12": "PDxBx7DgogSBnzSUmmqcZW68fQicjcUP9uZuwahjtK2Pf1K7xueKzQ9xxjVpN2u9ghSRbb4jvSDR9mXrdHZeZu2",
  "key13": "2SkUSDFogbVSd8mQSvsLxgtavHZXWzxFjnC6YMZvQGbPeXunjz8MvooAHGLQcFVsSbUMy1NF6B8jXrYyL9XqrzSh",
  "key14": "47vjsmAzDfAvSsmLYZAwbYknG1ByTgpoC7rYQyPMguaZ239ZWbVKy7ek7Yszn5mEmKVhokMmJG5Ca9jA3DZS4N66",
  "key15": "5Pih32j3nSRLSrBWobGuSS5oHhUB2hWZobxgL6r9RchQj6upZqLeM6zAcRFFyxRRbDqN5rgDdFpcf6NMigDWLMrz",
  "key16": "3uG5CdxS7u31iKmrXH94nrhxJFKC1vmbouPo4evEKjxQYUDUxEouBvzgkh7JgLH8mp6B7JXXPTC6vvhiHriU3b9N",
  "key17": "35q1Ktd9Zp5mPu1cCLNfYjVuDZupfNWQFYv2oZ8F3oEB9Xm3ibVSYSTyoKzKSvCu9X11wXoyBg9np3ih4PcVeHDX",
  "key18": "5TtqfXnhqDM2JvaWyKEp7eTf4SVPaswfmTzQbAo3YDuKnfszxycxVZpX6bsSZyjojeC6fxaWbSCcjUb7uxiHJ9cJ",
  "key19": "5oKhFXuk28ZitzYbbgyxevdb1vxui3KeQeu6oVKQq1t4GTipwfUovc63S6Af2nvqd2WNduzBPLgfDGonFMutemHV",
  "key20": "VFFdvFH6BM83TyMNYXoucogxV72Vs8GJCBBCmykckwqMe2LE6svLjbWKkmCtjNGSs5eUSaTSosi6Q7pVvmNFhpN",
  "key21": "2xXoCQgBJAg2Xz68KXiEgBB3VenUM3QURk9E8AT9NJB62g9pd4W45KjBNJdAZtNpqDo8xFeaUoK7aaYRGm4fmM1q",
  "key22": "2zjgVcLyrcuao8D2CNszjt81bqh9sktorAdNmfoy5ojXUuAhYJvo5bphsbDVETZyftxVQBQZhnaAnERiC33CeTJf",
  "key23": "3hw3yrdp4wrasibewnc7TKcNPbhgqmM2a7jvMGNUQ6AfpcdAeHhV4L55qNAJFyYSB2p9oEGKwyztEYEtr5Trnc6R",
  "key24": "4rWqSqxmZKfZe4fPDq3ButNi1q91dLvPqMTDzhPKmf4ache9uywj3H4VEkfcZSEpXBZ5Q7GUXewU2XG8VnMLTV63",
  "key25": "2GuUz1h9YFQc4bjQvN7MZE8iwdwDPdeyV4nk31PhD5kFxQ2cchScKFVYZpeRfJQFrKwN9QfaJAJXJcVcWN3YrU8y",
  "key26": "2DNBonzGdir123UnqVvRUewLKJKQXQhVacdBgMwAx7fwpxTi4HMF1sF2RkGpCrvc8HdoCBdyHegPTixcsa2vyc8k",
  "key27": "4ahQNqYgnW1Q88qAoscbVK7QWBMsyJ83M8XhJrgeyJpVosEsTwgSnipt31GF4wb5yCdtuvMxEnud7TVQewNbUDu5",
  "key28": "PZpv7pXoLuEmHq1az9fA59DQM7gVw9VX6bWLnQT6mKWAfqf9umrsJAGFTgFeb6jHRvwsEcsCrCCJMAwFTk5H79r",
  "key29": "4mjbWqhiKsGX3XaP7mdFyZH1sHdsBPdg959YbVYemFkeyyhNe2A7tTvgEgbJgj1Q7R8v5TemL5HC6qZZretqvL7E",
  "key30": "4W9tZiebxHB33yc8hzhWw1Jk5hQ3WbYynM8RzkFntBLeA2zd58ASRytrWUk2tXFLnyDBoxfgCC7V3CM1EpmrhBn3",
  "key31": "51Je4FdeztYDy5g7uEequ9KehhYgTB6uK5P367QMmL731Lwa22CXiEpgo5rs66oSjLCDd5Rg9xD8be2iRfGf71Zq",
  "key32": "KM4dtpfUoJNibsrPt5qGdpYWFmKiC18EhyZR98Hwt54UF3SYqFbRDLMDSjYabaaEYFwjq1mJJVdQQLhFp92g3DL",
  "key33": "4HCbALUiG2jGuJw4U2gr6tDbdjv1bCy33S17HVv3Tws9GVhrk9Z6yZxFQbpe1wGUc6Rz8nJmenJM9fh6W6HqLQFm",
  "key34": "23sUN4PXLSrjx5XX79boaqtyC36h5AkSAnCQgtm3kPasoNpNB9ZaKgnuWREX8PGzZKCZ62dEYzMEzHgWLnUjxcHh",
  "key35": "3ZkREcEbdb7URWA4msGdHeVV1TAxkMKDDgupP1t7FwKBYGq1NMKYbUE6KZapsJ7ic7a5Tzg9XdBT9abRZwh4JsN8",
  "key36": "4pAgwRBp1VLkzpm9ienJtT7HYFVgWsjMELXBpo6NwjwH6JvG84mL8wdTCSH6xpFeDmeppPhwcjQJWqip7xrXvrjt",
  "key37": "3NzyZJt1B33jRkZWVTTu6nHwLV6cq2U36jFvgZ8E7ESrAXC36YmCxKWPHweTJo4B2GQpnatEha2bmG5jG7VjqhsD",
  "key38": "3GLqReF9gQ9AhU9UMP5FHMikJn5o6iHoyXRWNCr22deXAqyd1YSzPVXgNYkUaARsA1ttWuL8ak273Nwf9DyQSfDv",
  "key39": "TDTVacSEzwupBLNFSz1sJarCneF3bmiopdPpTNoq2K2SkgtcZzgLuKoNiHZh76rY32siCxogAJst6h5wroLQbeT",
  "key40": "33xjQhodyz1dmLdXuPgZZpvr22ikB38YTkP8wZtucy62zk1JJsYg9pd5eQtzRaB6p3PxgUqoe4aokN8GV6WXYLyF"
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
