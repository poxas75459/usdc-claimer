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
    "65xG9WFQc8TZjuEb3fDKCqqVngpV5Ju4MbFr6zDz9kz9VtvyE5KsEGYVbXhgCmNav76MLBtA6o8o7qiniUzNXawj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1fJE4QfEhPPKqmBhdzgNTw3nA16Y5cpuuBwfrfwyj7ccvfPVWRhZwa6nvQJTcmqhW9Y5ULAaFPgRynsXchkm7D",
  "key1": "5mrMhLX97bC9YoyEcER2BjaMCixwxbgCPEgifLrtNSRsBLwzM4N7CCEvxRoZMDCntqP8hDZioreyB46iL41ouKjy",
  "key2": "3oVkrDT1PRUiw3AyQweR1BAsbmu5Ks5pMjAPpNywJHs14yB3uJguLAP8DdaLTEPCWmHkAE6VwUXYyCv9vFKjdXp7",
  "key3": "2pHTxfWnM14Ux9g5knGPAu23KyoY9byDTNN2S1wxtWozZCHCBuNZwykrYmw7UTa21bBMNDsLsyw6RpN2nNxDikGS",
  "key4": "i7VrB98sBU8oecm3Zdsdd83oUdFwwe3R5KFfGReSNZViwcF9ot48rYrFohcLsFZ7hFBs1uVDKL2wD7Vun7FzsGS",
  "key5": "5mFLwDwRmsjyKATaHQp7WEAUfsw4JfWU5YfrQzoA3J6uMb7rQ58kHkCd2tXQLNe42bFcgwhn2EqiJEaVVHtMqHvs",
  "key6": "4CPc6R9SxY5TNcJMDjkLyeUJA4EbC871ru3qdL439vuP4bnjgyzB6sZ5r7A8AWh2L1SUzW4GTgd4Bdu7ePPsqPDx",
  "key7": "qHLRWg65DuDFcFQhQ7WVmRYQ8ocRWNF6YERG3DHuFMMrN9MSZtqo16uRNUdkUbisYwt67XxKBRTHrbg6NELVjkm",
  "key8": "46HrW1HG3aA61uY3bpXJzZfwGePuD2ECiujynmgfsLqbRgqW6jur6sZoY1dkjejnjjbiVjSeVBd7krfg1pw1ZDK4",
  "key9": "3CWzZo3vyxi6wixaJ7iW6dYRKFgV3nxhjCycX3w8HKCUufE3FvUwmYYduCG1Sfye9YL7J9AHSxLg5s5aF9wrm9pW",
  "key10": "qV5ijWXLJdmBoSR89shpCAavu5MgUveDQWbgWtyQ64rerUCyqARh8sbuyZbK57oo3RofBdS12t5zPrvEsoJ3M7L",
  "key11": "23iwAXLgm8wTVFefCRqHmCCVp7ANaSkmmfoXX54gCjkoV294saSaPKfysRKUp1sgJ15CPraajiMAszsf1meENk8o",
  "key12": "21FwmZVigesd2EftDWgsxDDUkbPTSbhinoZ4HKC1YqPHwTY3T24GF6CfL5LBDD8t94kmm5ZHfKoSvPoNG5kfHXiy",
  "key13": "452U6B4QzWFWYz1DKe7J5J6p28CfrvER4kTNmgQkeFGayUzKStqN7qJxqHGgB4is2tW4pdt5bvZFsB9WmxxEgjT5",
  "key14": "4rzpEHfYUcJiomiHuxjkTvN1VwhQE8aBM5itFjrYg4V6qioRf2SedKWp7hNu8LC4yKCekAne88pL9TGDjvTZ9siY",
  "key15": "43knMMcGrqX9RhmUEBzSxYtm1pGosikmSVVA6Y5f8GwfMgRAaoN3AyRBajAEK2ey5npbB78wPGcbK6LUY65PZbn7",
  "key16": "2UwqRdqLmZPiuUpnEhhCteWobbVWLNVHoLQ2BmfHn9QHtwUFEVjNE2BWfc9hzm16kpzMwBauaBcgNSyEZfAm7PU7",
  "key17": "Y2P9664fgfnUSBfwEr9eQivzK1St9nvcYM2eKGRErhAoYQWRXaw6PRGRxiU9csxBbDfyqJvoZS178dGUik4CDos",
  "key18": "2hQSnfQpy5dhYvXsiai6C1gEZWoyKXmpToCFoyGJU7JcZfZuo8MMKVhk3m1E9dMgN7XyYcQXiwqNwRGPKfotY6jm",
  "key19": "2xq6DFmoG3B9TwM4f1etfwtU9sJEd5n3q8WWF83wVCvv55pxocFDFuQB5QkaUbkSFYFWwKkgmnp6sd5YrKPgW7mp",
  "key20": "ASRtcWX4M765Wf3LXRBsyt8yG4matHsPhSfoLVdqtm58HppfWHC3udRt2ehFpFGXC165At3SpUuJ4FxABqpivb7",
  "key21": "2dGAKffqLd9JXHxCrY1VosiWqjMWTvmQGonpegT29ynM7cSNCrRTuNBcYyDBtEhVrGn4pDLm4QQcLAbCbQjtR73D",
  "key22": "4kzqVvMPHyMkxEh4ZimApZPa7K4sLsWqdJSL9DoDYFY8NsqP5PqRyq1oafDRg1VSqw8HxKmgRjHzpJLme2CYwbsw",
  "key23": "3d6KKKbquqDRgiXcuwKbAjqSzTsvv8Tr7aVEaJgzmEfBFkEirMQs7mXmAJMGb8S3egoymHvkDMUcTFMX3Qb4a9V8",
  "key24": "4X8DsMqTU7kREbQHU8R5r8XrXieLSi9mtmFJJ7hR3vAQaQxrJSTtk2fUfjgkgmuijddeJ65CwtYEwjzxrd2mS2EZ",
  "key25": "2ZZrgtMyWtS6aVUCCWVLEP9jhLLztrmLyQRF4Xz2QpbpuiWwDXqfyYFcwPQCjYMi4oEe7AF8CosVHPEeqJhVqwwN",
  "key26": "5gyyCYohArXw3LSbETrLvJBtaRPpaWVM333roKuYdBRMnPLE53mP5EgYyCKrFsyGR9pd3GrCjqfKJVYvPcvLTYs1",
  "key27": "4HLrkDFvQSGKqqaZdDumsGQSXUbHfgrbeei85CyhvhaBUFw55Gb6sfGpmDwxCqDTn8Qqd8MEQMSQzqDGT16JYSfy",
  "key28": "61TsvfyUfDCERkBMyPU5yk7Lssev3Rt6mnxSsW43ZeeHENaCjDmg2DjLpnT56bSSDcowxtVyDjPpyXVvhy5isMV6",
  "key29": "3mjP3grHQjueaHiU3JdHxKwsyviNHmT8XMSTu5q3SK6np7LeKcJoPwbFM3DdWbrAnj238UoyWFVHmUmJM5EsUy8W",
  "key30": "5W5Npk1knGZK9mAfvCEq3T3Sh7XKvtAHUq8bTscFAi74aL3DRKJByFfgGmYmBTPaZWH7Jxw9yVMjVbxDBws1XoQJ",
  "key31": "2NqF5doe7SWLSTQsxvAXKxaKLVSaitcdrWibufENxvW7ASgdAcysDhYxzyHPov1e9CQ1zTYPTurcRe1d1o1ziSzR",
  "key32": "3KfoQMGhvqxbQNky5VUw6Q8wRGqbYtSs5kCJpa2s1ubRNSUvwfFoaujhh5JqXmfvPDwfNwpQ1bXupXFx21gQrY39",
  "key33": "3zW6McSwwEhjJSF87xs1sUsqyyysbRBZzVrGhdEJtbFVFehamUK42K84LiCf8oqF6JhYjhdwctQzUN9p14MKc3xA",
  "key34": "3wpcGDf9Tv13Q7wBAvcAeyCwndSmxcmZ1GVReTiizwxzQXpUmBAYKVMRwbQNxr3Qyh7LSp8XskoXJHGbMnMbp3uf",
  "key35": "52dN9tWw6CXKzQNFAcXcbnXXcXowoQDYJjs5beUR7vLZKwEX2tHkxKC8x9ZosrZP8LmxE1pi9hQQbzd79S2rsWNJ",
  "key36": "4jNjPjCTXzU9LGkiuMxNHp3CeMUchciXFFmKrYUjsZtkywP5UFyQQTxiWxssCkRAqMrsbZBEnjWc9js16qCg2uPX",
  "key37": "3a9vSdu4DLnDx3eedYC67SbLGWGxMoJ1Sj7snDxUN4bcPAbgj2khEQqC7nLm5mnbVyDJ8oF8mwu3b8r4FhsTKSXY",
  "key38": "5Hv4rxMtMNRmF1A63p1iXkwaEMF6LTjuQFKgU6WH1aMzSJAnauyoGHNRdUA1yJB9REPSgWvzXcZESM5NLzbtuxWf",
  "key39": "LioTySbm8TNbaP1n8kywogwrECFxjfvUKJ3kx9K8femVY378zzD3ivyLfj2BZpY7hTjzjA6yFTFVDjqKV31oQfa",
  "key40": "4CQGvZ6GL4j1dQWwJ578zn9kg3SsKevchctv5hRt4YsNv35iwRx9mn2ApSaJgG4HgNrxAv6EPSkAsY6oeV7DrFTz",
  "key41": "2H6owSCb6dxFjDbw52srHgoTsESHGCw31NUpLXCVbh481iDkyYrbKP659mnebSzvLErTE38MkVsd9mrbFZrMA4Zs"
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
