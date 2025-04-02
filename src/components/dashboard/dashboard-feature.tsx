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
    "2GG5SoschumLup8uvyhbYAsRjtbA33Fcs7mM9Tu54mL4K98XKuRWLAsA6i1mgmNBXHikH46nEejTMPFTuXaoKuwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ns6FVm7ipw9MhJJGGt9vkLdg7uSYkQDHpQWm9ZeV7hU12ifxfExCgY1FvcfiZusEGW4FmqqX9coEeLLGxH3T1pw",
  "key1": "564KVnhhUkKw2eEF91yHTe7RibPmhgKu7famEvmHw2neBPeKU3kZaBXxSQ5TEuASDZ24q97JHD8jFcMAFYk1nMPC",
  "key2": "2A4MGvEBwdkdiL25FWCk1SzSk9ND6BHTx4rASvYtYG3dMeBSofxVr8goKDHYs559bBNMNn6FR2a6qyWHn4pGfVnZ",
  "key3": "58w45e8aN3zVsuG9TY8sAby3b6NSrkYW8djyt9NaeJxxqqKTUYAMdZYQwiZySMT9Jb4pWTKL69tDq1zRkacqFt5D",
  "key4": "3p4ckmnHGDv1Ngh9FGmPzjp2f68EVopJ22MZeG2QQhB48wWehDwQ6P6Xc9UEgJabF2WmaHZj1oyf91XHVAeZSFoo",
  "key5": "5md6rrkKkrLkbHR8gkLRo9gw5LzDrawzm5TW5AfqV1w1UY8sBZVkgHiLBUiYWS3xyhyTEERXv2XEFha8BNvm5mYv",
  "key6": "4cB6yzcfLhwbwJ9FAo1zcvPd26dbiAnkiukqgCPUUMaH6P4tr3Dc3DKwXh4Vns6JNNuPkaLa1mAxAcZCpjch8SkW",
  "key7": "2aYfkB1bQ6CxDxmszH59TBGK846aZ7RiRC2mB3eiDXXBbaTZ6D9RsXtkjfPJ7c9xS7BMzW1DL8MD3TM2vcqDyaUP",
  "key8": "iM134wSCsA3jayH9DT4kwVFWUnRjDV5taC2i9cK5A5LViFXnJ3Ngrji3MVmMQnCmq3BFVcSkWFAb1Zf3gWBSvn5",
  "key9": "48NNYSQjxn9TNmM2L1fv7EaDZ4pZzrRPJaLvprqskU47uQFMcuHKPpvkSeV377rgjkNd3YrjfuVFqtmJpwTdR9XT",
  "key10": "VJGZ7zqAgSQB7H7s5XDWhTSqTuSmLjkhaoLtWLmqBjYuN2gH7wsHcvEM55ivrLMNiGPSEtHBZ2Ntx1yxfUW4BJ1",
  "key11": "4ZHusB1Q353VU9xrHTSoxczzJafJ9YN76y5gGFT7nU6rnfSd7a8twf6PYGutE2QTEggotEqNanRUoesT3ewFBzuc",
  "key12": "58zXbdpsofDeZXtqnM6cjpmbiSzFRs2ejb16uk7V2XAhj5mbVfBTa6HdUQo78GtPXEERHyAbAGbmgTg3UyxXzvpH",
  "key13": "4n6NwveSAzkeEraWu6Ptna3ewZyhj8uwFCRAGdm42yWunzLJUSozDRo4cX4rHmv4qJNYDGCTJjHTAJc4s5ynMEAx",
  "key14": "5FVVDfYKZKG3LCivrpxN2NQKy9EJWzXabWtgjoyjCfnWFPNcgFx3QvbE1SE7qGFxh6DMh5tvY1jSGoPNMVsDrTWz",
  "key15": "y2MWbnnJn75VHKNr36s7s2H84aBusg7GWgaNgz6wDAYdrSxt5NyREbzyNeD1i3guhSVFTNac1xCPJMLgFdxESF3",
  "key16": "tea7V59vnjY9WD2RibaAdRLtP28W1ZPXHx8oJ4qNovpERoL4zSHrVenHSAJ6RXCmxUtUXNDtuZ1H7SNu2Uebpr2",
  "key17": "gtr6c7pMkRVWQeYc3fDHJB5MghZNeqHytP1zHAFmEnqF9u6eeuq9Ph7cQRAZZYragFvQb2Ysrs4gzw8mBccCqrm",
  "key18": "3TxnAiDchiLTTRsRZqfFWAQTYCrfpeFEvPEFvwp1NMYfvWyAt7gWTYVD6tusM8dQqGnyasAMMhbb2jZvu4x7rkGd",
  "key19": "2ZtJKYKo8f27Qpdc914iNVY3GoG8U8myzBcewkbNQ4pGist9nQmDmmntQMZp1bABRThmGjfM28RxqwLHLn7zjq2s",
  "key20": "4zD1H4qjn4ee4JViRiCDfFfhUqQEHVYLeX7Hw3gBtYLxwGcbYK2gXN9LLneSpvA7vJ4uwYVZ7UETGVWju4og3CTz",
  "key21": "27KPEjWDk8dALvP5jMUeoFhv1PzGKoWoJZ5whAbc9Efve9TYkcGzSHoc322SMiS2J2zqkzHxgtkKBqZaCcBEeLo8",
  "key22": "3VGrUMrxCkRB13rdwfmouUGZxatdMoxAyHSfKgAbGcYE7e363DrGuRnYFKzfBHUcSLztgbUE4DqRNNFjrzF6UpBr",
  "key23": "2V8rEYJX4NALDN6f3gQCJUCbxQzcKnVBoX9wuBjS9a49N2TjytxNLCFFm1ppqUzs6usmCQu2c8kZrs8Xjz3ZWApi",
  "key24": "4nZ1bnLWvkKdybUCXqwrAMMj5wcaJjaYQx7a8ZTqwneiW55rx9bNZFRrq5MrYecZJWtS2DrwY6D1PfqasXETZrMU",
  "key25": "26iaWduACDDWqwpkQZiu4aDVA96jxtYMBwt7hdUZGgSGwDwt7usNAwESffCFm3Ve2Xh3NZbcUZKKrn2fgU3RCkTF",
  "key26": "3io36BCrZqMzpAhYs6PEuRqXnHaVnVVGNtSgTqemo7NUZ1LCxE7S8KKRipVeYrbZozLxx1DBCZnHmuxGPUgSbd5d",
  "key27": "122fHjMNnK2cCJbjDaXUzopk1mjE4hY5UvyeYQ9fNL9GiHgiNmcQVjJsdFR149BhpFZVrCVHNAe5DXiA9dFzkxpv",
  "key28": "2MDAx8UjDh91x8jZ2t9h47uZbwC3mxiDcPpsA47ZN7YBJGGaed5qJ7dvJwVzBjeWPpBFwwKgN8Vqyw3WQYNh6SdC",
  "key29": "5XXsvHCCygcwsP9BxKNAYpBBgzh8sbQ1BiegwJzGpGU4BFAGM7PcHBduG4dTBrPSxsfHqG8rQrtw7Nmfp776J2if",
  "key30": "21R7yi6sM6B2pJssCWP2qGULowvRX5HQ93iegpknqpXFFs5tg9iey9BbhtXSqfx6F6vh85F3t7Sb7TKxoHhnBFrU",
  "key31": "5QsLgagZK4oPPmiZn8UMiHjDKqUfEqyYPLCZdL4bdV5M27Wz4VY4sGBRbz7Lnd5NqPHQiL9dLPA85visomRQ2RDW",
  "key32": "4sqcARmLVqaR3QchanZSgDfZrnRr3YaBvyPysyg1Jx7MgA6U2WUjpZ4xQirFtQoPg2WMGqxNsCMrH6a8bmdnbhUd",
  "key33": "4nFa5TfyNKGMysVuGR4LFHht6Z979Yoi7Rgv2cAgbnYsLuDpKpYJYKgwisNXwwC3QcXmBxev12yzmqqQGQ2Z9RvJ",
  "key34": "5NRkQEzQAFTMv8M8qGffVvStvxoMpFCGfQKG2Ud3yAivXTDh3EccWg63RMMfX2aAtZEyhPQwfRjV6KoLkEM6s2Tv",
  "key35": "2A39HNJSV7CrEEEHMAyV4LNeVRYEj3JWh4krxNTrmPBX9ZAMzrqsJVqEGB2pzkawc7VK3qkDxgMRTvvDBvwzEcQz",
  "key36": "2tDsnVDjw3W5sXxJ1CcaU48woBZUt6TdNSmnFKsuRM2NXdNWN3qFLKi9QVcRkRCEkMczCgbwEPiuubxodWDy8xyX",
  "key37": "JDJxj9xq4G7YS9AFvvXbwiavcY69v7qRoWcFWmxJhwMD291wU9qWv8MTXYcc3w81nPwgySMjxu978VVzvFwTrr8",
  "key38": "5PdcNkpzJj7oUkwEDF5hB4mpmLUhaUqHfrCHLZF3CJjLFc5sWoNSBehen6SNryL7hc9AyAxdh19R6RQpDfUdEGPS",
  "key39": "4tm8EkeBEfq7FbLjMnCyWRbv3Kv1Mh9oPHojyZr5GzMRrT4hpAYa7gbTxS9taDNQC9sDsvMYizvdbtBwkKm7WjCS",
  "key40": "3EiZcCXcswpxiaocYLP9uqPmgjUwWsFMNAqB77BiqTx8qcZeGkWgVW1iKE8cd6BxTXHv3oH2a1UNMkLkkdNMomWi",
  "key41": "2prwArLMdpkC1fBRBaPmaTVY2THH311nfJ7SJpFK4XjvzeCZHebYh6DhnDwmDxsemQVzrwVf1fqMMb4RcMVCmMRy",
  "key42": "3UnbnvtCNhjBNy7xb5b2C1dHV99Ws5RHpXdxfGyPFVCXuVpnNPsCZ3xw8uptDqCj1rmNWGG4SVMVphR7bg71MLZ8",
  "key43": "4EGPxFWYeJjpSskiBiF8ceD9VHNTd8gLNbGE2gMVhdWVZN8ZGJFipWbnLx3TtR5YWt2bpAmxFU4KyL2pvUZGvMPg",
  "key44": "4WXX4ujzzt9T13GoDFKgB1393KDQqMuFwYdLhLvVyc4WDz8TmzS4eQBm8QzKSSLUB9YJGbTfXoMJ7o7GKS2RQU7e",
  "key45": "4ffCibFCebkc9KAW4Zc3Eyv1dZrMfqFyhUNo8g6d7gNYVfNe2J2rPi5CJqwTWGrdnXVSY482AXxvgyMdQSmCu4Nk",
  "key46": "2QhRFTQD3KTvuaMuSrQjFEc2deJJM2QKcXtyuChYXaXx4AH2FtVuXy1ThTRohccT2rVEGBUWuTUU42JxDFQbAnTG",
  "key47": "42jJ34s11eYKPiH2Qn6tH7pog3Ca7nfe9NV4eFYJdHmw6v888U9c65C2b4BUSaibrX61HKEWVno4tVgbmfJpDZo8"
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
