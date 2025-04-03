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
    "2D4d44zkWgAxxNbW1FrUwTk9dnDHeCFdu7V8FX74rp4B9RLhRsnanC9TAQpSEoXionhETkHaRUVqYxTQ63LkZMM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peVzaVLqpH1nwVDzvt332jstBm78sSvd9GxKoURR6528PYdigvQ2azqXYza8uwfwG9bi6EDxLKsxv7dp1dUL3Qe",
  "key1": "c9ujRKpYSmxgYjhmxJdAqf5AWCc9gtK6N843Rvbhfu3CRB9AzziqWkUNevRgZaYyBYftwkU7ymBT6mWpQ4UVTwt",
  "key2": "4nUbwGbsZ9WtKMGd4Scf9R1q5gxmhvr7tEqmuTaj7bq2vJvQLRYfmB7L9F3EUszxEoN2ymBLm18SAB2reTpcBM7Y",
  "key3": "GDGwzsDZMAQQSVs912AHEZ2rPvpDmsbXRRgqxVMJdmdhxATwZQddy5hbUg5uuWG38DBdPZNmxmwRfbNFXnRiJjj",
  "key4": "n9hvqLuk5bo54gzPTpaDmwn7V6sLxNRBiG2D9kXDpq8omeRMXwUp6zMrxh4N33fSNCzi6x9sQxcMYCvjMv4XfU8",
  "key5": "3KDn9hqaZefMdfUP6SQiay3euuqPydW5fQTPn3BWvPh6CTeQP39ubB3vJaqrDoepXB9qLdurLQiCabbLTYFY2Fek",
  "key6": "358PZxnGXSBhxzs4spNydiQHFysZMk7BwAcCPi3upSbnsBKvUMaQnP7yjnWe7jQFxixpZbaY6LaGDs1pNjn9CPLo",
  "key7": "2hUNg7zBA1zXbpNz1yizdEAXNeCezKr33GWvzofdVNmkvQb3sGr8WSZk7wVLi3WrimnF4cEN946rbah4tMEXFb9f",
  "key8": "4N3kP5odVSt89ZNfVSN8Y6NS7DBtSZTKG45Rrh2myUPGpMoCUaLWZCNBNbeUEMyjnQTFZekhFRU1nYRZTe9gJXDZ",
  "key9": "KU1RFw5fgc8P42uGErC35rFKNgtGjzsKz1AJqoii1QjJJrioL7e2ZjG7PpykQSi4ChSstNV8xZqhWGuJnet8D3a",
  "key10": "2Kshsk177ne4pWgeGY2hnWCBj7ToFvFV7Sh9yTzY5NvZQeMhg5VChezZJoRjeGPcw9GTTQpHsdUtq1M2uUfffJU6",
  "key11": "4h9QkenuP9mdzxHpptotTmmWzC8aTjfLcbwy8snCfY6dYE2EoNjC9pKtb7THxzzYQUChwkGjAktmAnWQzRBvVtgc",
  "key12": "5nPCqtQicDVeFxEU6pV8Hp96RVnqimooL1frBYDZD8mryguGw4TG3LchsUWWPb3PdvUxENA99BxdNbPRw2NJSULB",
  "key13": "53FgtnzNdSzbjrkJz8DQLfDLDF45Ua1q52jQVnxwGbRw4VnfFgfhSKo62oHiAkqJ35Xf1zKiJiNcUihcrYN9UUBt",
  "key14": "5TG9nFiqdAqYMzLkJLbHka4B8xxeQXzq6xb9zkF2XLiDdfL81aZXFgsgM5XK5sWrCPb4uXRpuUQjQDTRkFaNjKh4",
  "key15": "pJEJ21UrM76bUktGSb3vuiRFjZAGrNNeXjAtQTqobhQw5ZuS9LpkVdkPnSogkXBezSM6eDDcWN4QZGErG9LJFBL",
  "key16": "62eaQgHTwJCxPm32KZQkqJQeV5kGo2QG326SfZZfYgfPLf27zrA7p2ZhxsJs7zUs3Wmpejy5cghV6cmxNdZw1sQA",
  "key17": "4p1URiaHPrQkWbkxbvGPkXBnoRq1edhPUc62EnFGckGPgRcFKek1yeXjJLagqMvdQ1yzozxTXe1biEW45tdeusvS",
  "key18": "2Xd1eZ5s6YJjrysKS8cS2Q1RgqLaeF1s43oTi3xNVH4b6WekjtXFnxKno79cFfL4LpXThJbcv8TrhCEb9z7upD3A",
  "key19": "3KHQX5V1ob9P8vGyYnvJ3U544tCUec7JjUJ5aPKFW9Zpvcxjgi8RbatRGmeFmTYabDuQehXokVt5UhQbzt3MWZQd",
  "key20": "5kmoYUPdFKhipThx3nFzBWreYJj5MEVoWityZPj8eFBczD6m1Vc6Eyyy2ZroTZuawSrRWwn4rwVBmLxEYGxFWgVq",
  "key21": "2r3J9sQzj4thvpUojUPvejcqgoYowhhJNhw3Nc9WMoykMU1cLMsVNrvQRVfoG8PrajUtxeSntzCiq259EponTYYv",
  "key22": "4GzyWaFXtDdcxXMPwCkLoE6DtuihkBy3JpjB675JEnGNFBvdLmwfBj8WydaCCkwNr4z1zMJYQfeoXSmu2amn85Ef",
  "key23": "3QvvAvAJb4Fkb6rccKMUmEFPhtap3iDAhskxJ1tKn62oD3EyEpfkTTDq6r55rfxUjmzbyBKfow4DouHj2fWdMttv",
  "key24": "5VLmDYjEaALAsKueTBJa6yoLebmYzijgAUapqpYJHtNUkfzFL8oxgWa9rwL5EZbVcaScUEDyoSt5vYeMwyG1Ayj5",
  "key25": "3hDSAKKYHpckxehPiJF1W7HBT1R9ezRtbrPQeTA1KpK18TNHL9AHgczotmEQem1GnGdh2VWHjxWfuLuQJ22ftdDK",
  "key26": "3bp4jWUHUeKd22vQ6aAm5gWKNu5WF7EVZubqT6CvGdp557GHHrPDhMsK6ySvbV4HyypciqbyxY9RXT9BxM43KbwF",
  "key27": "UC7JEinTWgqeRL4g5dhV7zbYPtWVHphcMMSARAtYiqXdgMbkcfjB84uqS9ins6LzFQNJpfypY5X3D71wArYLXMg",
  "key28": "5HALnKozV4fb7ooCrWKmYzqYUEcvXfmGPeJE94QFVtuUE6NGudKoRRxczxQ4ZrgxkuJ6GbYZDDU8t7WqW9M2jG8w",
  "key29": "5sY4YkuwcPQRHzkEfzvJ9A1tpu38somhCtmmu5LKrCmjhyucmRKi29asYQihgfhjCxN9ynhbzff3MgrgqfriTAC8",
  "key30": "MtrGo4UjHDu5qfADa7VXPJerw6gToRhNBQexMeCzn2Ydo1GsDo16GGR6zBxqGW372PT6UNXQvmEZrEphtK5DE3z",
  "key31": "DWiVKbWDQugMb7crmLSV4ZA6h3tyNEAfkrwhkW7wBRvWCo1bvdSYHk1t2msY87H9wdME4ubUcWETzdAUnMzcvyX",
  "key32": "58MJLfdxnU1SHN9rcEAKR8Fd2s5ErMdfidUxuUqMGEZ2AfTTxbm9MhEXvLzWdExKuuE1JWXxJ5JctjvbTSUDEqQm",
  "key33": "3jF8NnBbGnYssHoBxjPR9XY6uzD6NyB8qpnsgts9eu1dSuwNSffh3zPQKjV9Jn5VGvKi26SScvxo2PR5gcfHUMDE",
  "key34": "3cHYY6kfRmYBnoZrPaevLfN9NWz9MsT7GU1j5sLQHRUApUhj3w5s9JSuzz1hEASaNmjAtq4f3RDtwwUpyMTkSBLh",
  "key35": "5rpjuTH6SYGGB1qyoPijAncrmtAZngmEWj8oPN8FwbLZZDhfA8DvQYUJDMpfc1gSGzsx5EpqMCeMafFrYXudkH1L",
  "key36": "rwKMVeygqfimjRpzsZ4tospoTnsiaT1QFwAiQB7zQEYewcnLP7wZ3cyM2ooURKAHk7peiFVzQsVmfm5d37mer3V",
  "key37": "jHT4pySXdgxPAdUai8XST5QPWPTY67j3Q6c57Kjth9BBS86NbVyhGTtYyWPTE5uxgg7yBf5PHtjCaoGFaLiby6C",
  "key38": "92Gqf1b92ficSsV3WtLPKGS8LfmHajynvfUwWF7S4QoD3bUR8cMDry9SoJCbELBC9W8pF5Da9VJuYXff5dgysj7"
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
