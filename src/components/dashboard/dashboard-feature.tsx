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
    "2qiYQaEQ4xxsikriQB3VBPBdXPHuibvvJpFmt3GWxE5TUDpjF6YDXYwpn2SqfPAvjKAMnaDscPxQv1G6VwL1UP41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BpuPzVNGJ69ZbVaHZYM5vnJth5eMDqen8BbWE1JjXgjHSenB6p4qkSw92og6Azxwo57NaErkJ1jgNs6d6dCUtj8",
  "key1": "4DytTXENDE4qLFEeBXZqsvXezbhpA6eYyXBdHHQ4XtuCvGe29MZd5p8KGE4zHkYJpVmTQPjLtADP4yNadUKUtCPx",
  "key2": "pxD3z8aqsSzFckFLojJwKJyWHkjuui8ataJeoZ3iCqGj9y4hoj4L1XirqfwdvQNHQ96rWeVwjieFhhEGS7r3W3n",
  "key3": "5osGUeUdVVxDzGi6AvTmCkkAy1FnSxVjhAv2Evfn41RuDHECnvhE48MNb8AiH8ZG1zJm7zWN6htJt8iKKhrxjN4u",
  "key4": "63cZC5Ev8L6iTDEthTAdGNpgLST2Y4ytuiqruZvLsCRL5HEfnQtCETMBhgcWQbsYchKZu5sRD3bwVkpo6ouW81Rm",
  "key5": "5d1iqa4oLjVP2QJnNzaH6PcAnjwEi7KzitZUR5whpbB6irbRGLzfhs4BxUXaKRdnkfBKaCNGX5KuetAMXHr8xqxP",
  "key6": "4Wqoueerib1QkMi2aThiDUsyk7pbYFRTYnKpCTAdEPtB2XKd9mPxc9KSTxBzkfiTzLD6q9phaU49sExWtyPRrGEg",
  "key7": "3zud5CwSsnjKuNsQn9aeSbX8y8BXBFg9fH95mreJnHhfhgzqcBBXvG8kDDv7H6zLF9xrQcdLxAMVJ27Pz8BLCo6V",
  "key8": "2N3g3pbbpozFLX4D1Ak54pSRj872vFnZ2RnVEPhZ54A2yXnzE2QVTwDNhRY9hVDgPLKR7yeAxJ6WLfaWar3LGXFy",
  "key9": "4DafekhSJpCHUhA8idxpaMoLjJY55cqDsBUVFZCRANsf2ztpqSvRi57cizQEn6E9EFnApaorRpeFh7dsjaEppz3a",
  "key10": "29ddvAFFevgE3v8YXqLtqUaX5GjEZFueVsY3q8CAZnvCFDZ23FfjStJPvmbPFZstfYh6LHbAPS7wFR6EiGKUxzHw",
  "key11": "5Zdd1YZTakQLyZHMpUweTEo2HW8RHuRDokMN2JXUu1NFzuKzfw1Ph999u8rQJfmTXXnjLzbwoiofnQvcBRGokADW",
  "key12": "4cH58CLqxTYM6xFrs3vjqytLanWxostKujd7cnnkEvn7SHH82PB9sa19sRbA4xcWkMzxYXGhmqRcVQTPQt6YEqW",
  "key13": "49D2s5na6bcNP3oetivCEwQyTzazbwhpRZSzx2ZFzgor4jFioZSfinZ3hcc9abeMKsdiDgbVpWG5MxCGn3AjUoRZ",
  "key14": "5CeGCR74i9QE35BD9Y37aNb3JJ6Rk73FSa1YvXrwqoMrM1Uq8ahxRM6Rv2963vhRe8ab66647Haz9aLmMEBdk2kZ",
  "key15": "5nGn3JmFenkrMYi19PfrMqoK3ag7293UG3U6F15vqYTgDBffQziSc21TK4aD5tMST32QUB1nEahsYXrvUADyTH6p",
  "key16": "2T8drckTkZPnRGFBq9YUpg1cuB78b8mCdYo1FUyRNurWCAoVqyXqpNeuNGkjMB8YydMDT2PdVryTNMMoSsFAxniQ",
  "key17": "4tSt7xSgNkKo1HWRHzMbSxdKCuyKuKojtJu9bsSfmz3KYxwZSwiBHXfwswQNjHXXjqsRLVsTxBPC5Hv8adsC5nDS",
  "key18": "8YoBQTUEEKxf7cj9r3kLyixovEbVZ71sUu2EB5jRwpB7sEeLSHjaRPaoyRZaDrdMkBB1Mhuif6CTaocvaCo1HjX",
  "key19": "2X4rCgfje5zpxEd3vWRxYMPo1GnFo7xSzDVGirzdJjo68C3pvm68ptR1zXhhRF2uzJ1cZHW4jPBiWYVRiH7R4wfU",
  "key20": "3XYAb4VYdnercGrdefNPtt8cy5sRuBeKhgVSGU11opqDPv4CwmmVQoehJKqpyGY7kkRxvmxoBr2rPetyWeEw8yVD",
  "key21": "5aLaaA9j4WuvTbc8pToyEyLFkErPuqteubFpqaez5CA1hY7zu8punGEeo4fbGqbKYDCZ4unjtgwgfTsjwnWueQtg",
  "key22": "2ByfiAWAozzjoPWzoNPoH56U14uY2fTP4yXdDWGWzCesJVDmuVroM938hwk8sVAhkaWx1vVRc6tx1LMU9NhdbMB9",
  "key23": "3Y16UnKdS13gg4cxpCsXPFZDu1yUAX69zrL4Xfdm5UQhUzyK2wspDXJrnY61NBByUGYLTphqfoUFeaG1fdPBUSqA",
  "key24": "3NXuCnur8u2ernQxapUjGUXDvHYJgNVFG9y5zAyXkKtzXhU25DESyGpPpFdRy3xa641b8STV9h7erqxwwuSA2yU2",
  "key25": "58FHp4YrzP4EtxVkZTccNMNBTPHWp9XHL9gDtCLgESq2AgnVdj1CLKPz8cmjYVJBaLEuCca8frpACND1HAAJ5aVf",
  "key26": "VY7wUsxespHTVbgWWywbz844K7QC4JbUbY44Z5ygj6FzLbSXT6T3Bnc6ctLwLB8vkgdjBgLy8hjfuJMgATa8bbR",
  "key27": "3k6uxGqk8NCrXN8nozXwwYDNzdC6FVr6hwHuW9da3nvWXbXihvKBMKJYZDEx8GgvyEs6TaYjkQtinRhFSWC3xPYu",
  "key28": "5vcYpp4LZjLNMsAX3C9V3CrKXFtjq52jDWTVzCivSs1f9cfp6ixUJ1MijDo2UeCfkigB9hhQZxjftWHzPrX2MjYi",
  "key29": "3wKjZaCciFJY4emDauUjB4YopZgQzGnBHpRkRmFzK4kA2CPNrM6fBWW5ArXih3x32qa6zuSyWWF9VfxxEWkq3DyN",
  "key30": "5AvS9kvtgGviu7VSM9ufQoRiW4TzBZwGs2ki2UD28SFJs2P6nFPCvgFmo9xTojL3EShCfzf4cGJE4kNVpB7fXuEx",
  "key31": "69EYvaUUsy1BUAzFmVUB5CfTiTWJmozACKmdXRmRmFuywDCF9xss24Fi4CB6YSk8Z1i1jeK3tnTXQqSetrpyJaq",
  "key32": "3YenYp26BS7dtYKdV9VLQuHLHRSQan3ogQPsNSkvtb9yBcXTMuBxw27CL363P6dPc7uku8T2QAy5xUhZETPPHHB1",
  "key33": "467caBhBV9TZGZ4qnhi6ha43PriJgjYaxZ5KNo5mwGUp6N4dhCLkhJyjszJQNRitrVoaBhe3644sTjkZRvnuadbp",
  "key34": "5sVhLBRnBz2Ciabu1JNZoTYkZ9UjefeVqq7KXsHcE8deGchmnD3sQjMWXShuse9vyeKy9edpfB5NENXGbZ5sLSY4",
  "key35": "4QyrAAUcbyNnEUpca8WxoMuwtoKyUmYwVh92DuPVvR9obXm6JxW5mmqrn8uPSAYPPKshbhrqsXcjSJ4Lz7rYzoB",
  "key36": "3KUw6NJYsyRHMXevg5XmWUpJ9mbNbc79KMLFqwdq5RqeDWp1Bqm7Z8PDCLc3BMUzhzJXVVyjyCe93PzEJaXNyrNs",
  "key37": "4q7AdtzTSCDHB3P9d4iHMWiosqEinmhspoXinPsBik3Sx5zmo3QaEamHnCuEBPfHMRm6tD4buie8uFxnqQ2ZCPov"
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
