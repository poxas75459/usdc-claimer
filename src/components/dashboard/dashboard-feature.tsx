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
    "5xDM5EDpfHACrBu6xfRBMoR2QmNLFN7fid2zsAkTg7YzCrT672cnUN22fbPMXkpWgRo4YjWBfG2qRLSrR6uKt2CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yP6pqMTeWLEch9NjmnN1RLfDd1HS5zdrWf6iY1dKsrs9YRoo6WCTCj5JHqkZ3i2RxiYM1GZrYQY9hebqomGvJxF",
  "key1": "5YQcRhdMkgJhjKZ6YwdTvsQJdMcCdVdN1G3ygntnADoaxr2AmNQ4xdzDeQLhe2aCMmgDfWSeyNLF9UGxjq3kAM8U",
  "key2": "4rhoQ8wH9QgNtW11q9wQ6qK5Pymzugthcn8e8mHMo6eDrAR4REFn75rSjStXcTFou7Eu4Md6CYjYS4tpDAwaqsR5",
  "key3": "4W9pUBzWdZJqWiQK1RzRgq8fDAQtakD6CYBVcxPC7gHwrr51Hj9GLBYjDBj6UseMm7hSPU2miANCd84MEMFq9hRc",
  "key4": "hzeXwauGRHpsPzg8nx6rfzFc1Lz3WJHLtAeADbMvrn6EqDkhmsf4UCgLuTFpSwYATC3KARfT2UzUy7jET243uYp",
  "key5": "3L3Tw8gcZAnV2o4fiMguXaZaWsDtzoiutfZYZzfAgZmP56Y5ivRoWbvopuoV2uVibiyQpXu24hF5T8nMeLuqdvi5",
  "key6": "4NGgMB39qQ76kwQv4zDDQqKA7aoJBANqKgX8wAeXt492nBMoriBnJTWFar38EWx64WneawGd2NqdqEAPwwtjqsXB",
  "key7": "26FZEATvZnmSyENLFuy7Jta19SxRivWnwCvyB5VzFKFPrZNbmkJgqQVpKW8ToRuhf5vaHanEtrvSZb9G3vmjsvtg",
  "key8": "2ZoJxb8W4GhWGur6Fm9kKFE2QTPXMYufCmPBLDtwvRb1fbV9sm69G5bpitueHAMAhfhcz1LUVL8CjobPsMo9k9bF",
  "key9": "33gTweQy3s2D8FbqJ3QHm7D2YDRZ5vetiGutbLw1wpS94j9bfJQFZn2cLQ1kahJg6y6WURHgrSx7zwGLaiSPYs2B",
  "key10": "JbyniMKtzCF4SevetrYKfhNagXA4oqpodPiehFBwo8TuHtnETDcBrnnavD6vUXJ3dLMAXv9GS24qv6UGBUSNnhw",
  "key11": "5tP9GAHnv5r5vA3nsKbV6C4uuMbtfYCWybmdPYwU4mK3TyMKm5boAezRxV7tLaxhpH2j99ppfeZ2udLYoK8oSA92",
  "key12": "2yfyi8wsGp51WpKtX6ANu5xhegaxpZRxyXxmSCDvQQJZXH9FySEEQNRVDoGfcYkHP6njiLbK2GKAWZBeQerdCtBM",
  "key13": "4FwY9n3M8HfXiayrM58oLn2xwvRoDjBYmZ6fxHKsCh2JYg7zT3SiLmSGAsnaLkoMqpTvbMzsnwHQx9dkEsATZYsP",
  "key14": "Q8gc82geGvhAoVRLfozyA47abMsNMQ1gRJMAAVhY8KFWtHbsAEL7F2ufxjQkXhU1ksoysiKsSDia5E3BsVUkWHa",
  "key15": "5VFzsis4pmYE1VUepZPTATd3Ad6N3ap4fxCHmyKhYRUx7CPZnG94zSMepUoKjT1FFhcoRxWLBVPKfWiS7vaLfcVf",
  "key16": "3ZGcZPBBEb7c4YzsBWGH7jGmMwrnY9sewXga5TdbQ1qhbJaGmBi1u3grwKdeg7oEoHYEyeP9HCHUZxmEE8kh1wNz",
  "key17": "3JvDV2qDEMHijneQwUpgJey1awoSHgpvWxmPLsAxQbjhZGALEZxxUyfoGcEXX7vNk8694SPdn75aP8Ba2ozdEA8F",
  "key18": "3yiz1VqMH9qWSfozbFcmqVAFYaWtSfS1AhrpY8Pk7bPogtWvhrhz7Hs2WLQw76Yr9uPtymkuoXxd6sFs5B7KPW7m",
  "key19": "4KPXs3fLgKBhLvT9XZMYWJ1qLPB9sA2FtpMQ7qmxRbrKHRkMrDE6FNknFUNGVh7Si3EZn5LJo424vc5jHh94Nw5U",
  "key20": "2vEYdEK8sJB4dfNAtRjMUCcrPV3sXaFFF5Y4J7ShJKRdSaHbWHBQs6A9YuLGvfpdBEGTM5joS374vudugpgWmncL",
  "key21": "3qjk38LSpsH5E4engmvkF893633DjWY9RXhrBcEv9MttXbejpdJQVJBDz6oRctCVyUuiPna5RYCiumsygq2nj6G1",
  "key22": "3CoAtAic4FAUtuU9txP4ZB6avNKBHH6JEPKPqdXw1QEYzgR2MerTdqXdhyJVQnbdEZXcNnNhjowDgfzuBegSxyJD",
  "key23": "5awjVVpotSG7oJBftjse3C7TNcRkSyka21Ekd8DqrayoBCnmDtUjnJQPxsTT7ezkKJ6uraUoeqNVbjqa3Yfsjh4g",
  "key24": "2BT7NjjB2RMD3F8pBEsB42by7pF4twHEDCmay7VZYVq7Ap5jhtEpAL5RVQpbH3tStUoUkg8YPQQu76garnF9Dwzr",
  "key25": "G8aWTGjoKSuHpRqrzfidzceCCT8uSEKDBHSY1HBhxH2cRXm6sHPZQigLZdjjpjFxnBhaJSqNLd83aeo62ZqYGso",
  "key26": "2LqpXkUDFvBGhXJ6Q4k9xJho3p3UcZgTZPMB7DSoZjqNXU11QtaUCJdxrmrQqupQfrpcbuJB53L1K5mrMtmNHakD",
  "key27": "48oWuNk9UcEN1wou4dSp36qi8n3Kq23Cvzxfg3woDyJJFdA3QnVMvcxBLesPo3RpbFWv3WvmmKymWRoqLypVtrSL",
  "key28": "2PoopUEmdEbQqo1i8B53W4vdj4wY3ge3K1ANqupwRJDZQgCN6kcAu3gEkD3jhZyHAALLgSx2Vo2XYCwzDy57J32E",
  "key29": "7umhC11EitvpRJq7xj6StarrTarFM2x5pR6UxERaLSLWefNn2RM6ru9KtQescMkiKH2fkgjowE1D5F4QKSSLj8q",
  "key30": "3xbchuA722Ke3KByF77zySnsGzUJXDAZjjnUn47eLmnEFGrJNbVKBkSqhZnD1ASdKhVksAcLt6CozzhPFhu7QR8g",
  "key31": "5uS7x1TjJNnrxrmopdePvEF3M2tbmSM5ioA2Tnb8L7PTbhhBzTQ2HpJzW99ZdEmLLwfRsKVs7kdVvQ91QeX6rA7w",
  "key32": "UDX8aR7wauhbcUdPVJtSBwmxJEeWGB7MxiyRcki2uuqie3z87A8McibfxGHjcV92FKfMAPyP5QA7EusXELhSFAw",
  "key33": "55TaqKTwb7LY7ZWmMRP5MKgqaNucdMVwQuxiFH1ugaCzewPsG6LMZLZPrwM4ubPEtDvFcpDnkztHwbczeeKveKqH",
  "key34": "3N3aY3bbdYfVXkAe1rZpAa7QSjpYdiYVUfrRdYUodfeMYqxqm4rgMGeEa5dJ8S6gZLEUnGayWnbnt5cJ53V84uYy",
  "key35": "t4NtbhX1ohMQff82LUSSg5uVAQq3vtWBbejp7HisguYG8aWWdisoaZqj1HoapEBGYRNPaBRA5ZgYYs4SYQcDLyT",
  "key36": "2LsLi9z3YXEqTqEPSH5mYt1wGSP3xTZ6EQANuYfqJZF7ZzY2enArfi7Dipx1ebkmKqDN84wfserzC82wEEPj3tgw",
  "key37": "41a4xTK25yoEdhDYFdd2pPvp2MFUubwNDxMDZBfHTjBvDybF7JFinh8vuo6DzQUnNTExLSbtX5QZhF7zmWMWPoXJ",
  "key38": "kaXWvBJFddM1F4zG5eccJbxqv2NcETLvvAY9fYFJqwrERRHnkciDwH6vJDPzqvmuSKMRyU5xRqB23yt2qNvXrHc",
  "key39": "4HHAWF6bTV64kStz8JqsvHuvF94dkf2uqH9r5WV47DwYiLBGe62g4Ch25rqMmmJunBbvJyPjxhnTytm2gd2K7bDm",
  "key40": "5JMqPpaAt3w27j5TWZ5ATWAik4Y2CV8dx8mWX5f5enSVmYJ7ajZn9HUuRq6HKeVvAUQtHHCKteJPKYTSM1qUXBZ1"
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
