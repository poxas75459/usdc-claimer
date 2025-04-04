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
    "uGTP13Q8KRb6QaXrBqtLHjChYRHe5TqSZu163tJotjBVjUGH2vxBrJC27fshNp2qxJKwrgqPjCFYPf7uHHSo1Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qL2y4LWinzX73U4CSBAG1q3DgkBdLQF4PSZBUreAXC5vKPTJ6Amvx3GtMmQCjVS8NuNuAVxBy7YwVjoKpCuC23H",
  "key1": "Ne92wQUS468qioeEGTyQi7Nh9upeiXCsd8sHPHPwb6KgwT9c57QFKoYPkA2tZvsJd3KGp8cPoKZqzR8aQXMNP7E",
  "key2": "453H3kivQhxWnfVrQ8v4HtBxgVnmbBmLAFXYZvkMKsen9C23F5kafy6KyJKV3z9WFLLquv6gCCPARupRYduz8qZg",
  "key3": "499yWnTd3ZhnPTZH7EZr7aTj4T3X7672W4LZfVJvZjxpzNb2zjz1hXzR5PFZdFKFZJrzN1p5PGJD1GLJjLrappHJ",
  "key4": "4huuTFVJF22y2PffiCoP7rFNsVQLJ1Z5JbYmDrk6fodiuzuDXQ494izbfbn5ATr7PjMXAC4dDDagtLAdJLZ1KBQe",
  "key5": "2qjbDdkb8W9wQ9uSFcNE1NhXLJwQv81Kx4dstFxZ5eTo15znEVA1VH9PvQZz8rdrsCMDuPvsjrNyqzud24rTSLCX",
  "key6": "5JtTesANfxUaiMEXPS9cK7VnGPz5G2kMiWxxGs5j652E9iTqM5W9KiLf5mmJMhAfKZ6jKh6g1xTKCF1iKCQpCv2W",
  "key7": "5RZzN1q5Kxpgg47tDDrrBN1HwavWCbBbycdPcnBDYv2QECnCyyeChfrJJ6kZbg9Cg5AMTGJxoZoh8V5Js1sM7NsP",
  "key8": "4QmkGNuxrWvaMB2NhNsT2BMvXSZnS4nmJqACac9rZBpYFu7P1NzWFf5p3Z2yM2LGuC4cYQ5BCFFYYAMvBpm9sU91",
  "key9": "2QwMuF2cWpoTHcAheSyuPTFFFrDLz5nduf9rqR3MxWeHeBtLe5B13Mf5cZKqnySqPDhRNzqWe15eQjUdgh7K9W1F",
  "key10": "4fM4T1hPhRGh4Mp4TNTs24cT3HUhTjT1nBNU2eVomnrLaGjBeVQrJFzzVNAKNxX7KmVipko7hDfvqw564MTVb1xD",
  "key11": "675EgbgXzdjbXVUaocv4hUshVckT9P8S58op8yKvGCtKY9DEvuFg1nfnXCDXxrUVfyJ5kNvMtAzyxBJUq7csQj83",
  "key12": "3XgzzDUvAjgnmDiiXL99Zz4Lbnmf9VqXCXgV7bWYeKkQoFFujAXXj9ZrKBUu3jnijfjfaqXzf4rtd2pW6Dz97HJt",
  "key13": "2ut77qYBZXMTJsJHN1ExRRSp4qtCgP2QtRfDzQhy8UYe4Rp74DccmT5Tat6mWRXDyFxu1cjvCsEcqAU3dfJE6T6d",
  "key14": "39skyP1WXRvCycAZ6rtDPerJXsEumWTY8bwk91xhqGNeUFShKxFChHvseetYACgWPuWaFiiGfLQ2pmBa3rZreALg",
  "key15": "hDHKk8eydzAC1pMsGQLCm349mVHZMHcZG2oWSnDdtwFbbrjGprJuEvdy1nKtkRZkPtpuuZHSEmaJgAhjqyJocUZ",
  "key16": "Z8eVa75TyR6pAnq2YK5avkzksV77MWEx6Jydn3axwi1Bjenh72G1FxqNM6fkeyyGXY6mX5FNi82VRfbmSQBedSy",
  "key17": "4msUSdEFU5e4sxFiG86UhzhbnZ8jjewTzDYB2FKB7YTQvHKonh7QDQUU6336DyVjcZdPU7Gq6xMyuFEGQtwK4ZJZ",
  "key18": "eW9zhGu9Wsaqzgckzk1i3adVKzF2U2HbYARLyPv98yVGvyT9DQfrAtmsz65hjUwouhLy9ccWQzEeB54BqBYtPtT",
  "key19": "5UFipcJb5Wq4udE2uVgBzSdvdFDbyzB5bBeXEVK7xi2rkUXnUjQfLNBEo8MuFCG3dYMe6EzqgogzyNKCZekRrreb",
  "key20": "62fsji12LUujadtQdQLaLjomq5Jen2AmNiLo6m4n1tt1J9aot5jC2nMgKMvimxH1tpVFxaN4ZnrMiMcTQeeAvRsh",
  "key21": "5s8g2bik6nNDaA8LDnaQLX9dhWhrFRxWTMvWdU7UmNrD8eXvVSX96MRr448MVQSLEBATY5r61iFHLy2ia4aTstso",
  "key22": "4tceWoDt5AnivkexGkjT15r6Hxp3hrwtbVyPJmC1DA1jBaeWk6PVvzTbY6TKLULeWBu1GA2MBmoicjPEk1mXWU7j",
  "key23": "2yQT55TmHrYmiLzqhbfMvSdwgFUAoJkkVQgAFGnYsRpSEUsY3h5j3B4j6j2hRcNK3nseajRF4wjQENWKbyRJKA9L",
  "key24": "31iPB9C6NkWX9JT5D1j2QVgm7jNk6BARFtyhBt19zBKeXJhSNcQj6V8ur3A2bdrWyjiaH99makFaUNgF2AECvw2z",
  "key25": "4AvnLyoiqm9gbxjWpLYmqeuEj7b3MbhP692js5X4UyAMDpZtLQxAbaCPgKymfjrhh6ViYvx9Mz3amttmrpZ5bjjJ",
  "key26": "37EeMJENZutyx6X8RpYXcZmRkZCDafEm3Bw85kuwse73v2cDETkLAjBqpQZ2B8RKB2fvfts9sAFVeWejRQ51ysn",
  "key27": "aZvfn3GkYe98DaRzWmjK1GytdoXiVjsoAMfH6vgKKY1RnrzCjmxYMLga4h88eYcNRnxdbpdm9ea7qFH6D9cdpf6",
  "key28": "YvX2zSE18BdJSsn1QAJVcxjyugbvbAfyEf1SQovfzsATpcdqaCJ3vW2Dd5URyaaaU4KJEx5NvdS4oyDoFgEETDQ",
  "key29": "31fSRqc7xVyN5pjHQm8p3g3dAXEsAE6EeKnLUKPhUwiSxbw2juhSqYpkwo9BnqiR5yf2DFkJP9cpBbwo3XvXkqs9",
  "key30": "Y2XexA6XZQjR4EXGrUiGs6edJ8wK7vCQwzQB2zwKcda1HSpDE4X5sHcM5trivNHDJa7gHDSNqanPkWkCAXbmw47",
  "key31": "2kbhtWVZtUwzWzAMam8tNuwGS5v8QGStLgqWp3hgoph9wDzazCqmTotgFvQZaJLrKuCxTRBJETSoxeeh3xAhM7Mv",
  "key32": "62BGJprnx9rTZEPd4MC3Q8krqbaPWvGfuxy1VXCKxsvuK3P6nSyuA2TDTahjhAcNV8sLyBREQ7zHhWxWTNQmtiXi",
  "key33": "SZFXA6m2NMmBtaYC5tLzktuejKa5xcQemPdtSi5SN63PugBTHe5HWcCDWZjnHMG2asv5bjoCNvKkVrJvk62ByDu",
  "key34": "3UPqp1LRifqSxRbAcGzRNYGzxpL6J9JJ4UjsHZaWWzRpSb6556gSir3PPJt1EW8X1TZnRLLiJZ6oxPrmZvshdT2p",
  "key35": "KAhPD59h75DYYo3smT7fdDyriqiTpEiSyAJpXLfSEUH9Wk7F1jLnptbxgApqhbyVB8ZNWdm19B8MFaykUZqJ11h",
  "key36": "SZuBCLboWWgKdTNhnUjKeFAdbQ5mbFMSr9KktkntyrdkX45YLabnQo1gg2iwsgJVS2pTaHVz2FFSH7KdnsGBmaH",
  "key37": "24HvMFVkx6J3cVAsnXa6GxzAdrajQtkqRmozeg8Zja9fPr3qCEqrC2EpJniSGKre8whDoCV5gbsv3zPdKqA69xnP",
  "key38": "arWqcjnLHmqqxXDRq5vEyM9STTpyFEd9EYZ2TQn11EXSnzL9CtbVhfrt7758myTLcyxKgFvcCFobwHTj4omW5ze",
  "key39": "VMGb1HHxyYSSToWridKo6KTpjLHm6Zx3QKW78MbsvZozJgMPkg7c38citgANUJRpK91C8W4CYdB5nxtZWgy7Gqh",
  "key40": "4SKT6BEm3pixXDBJDJpWufaPgEMvcKVbnpXofdZUxetJpqHLw4yfHdw2VoWBnQw2J3deRcRzGgdd5WxR8SoQvKLo",
  "key41": "5Ypic5FTiNYeT4U45FPEBU6YcKh5oR4J1s3HqaTNN4T9HdBLP6bJAdXoxMawtBfZiRFmWHq3q6RYi6iimxzBC42f",
  "key42": "398efFuwbGuw1VLReiaM4Jp4oUpBh3qnXs1pXPgwdtTWDhBTRpRkpd5EMaECsFQ3KHrgmBkhMAuVFMte1T8mcq8Q",
  "key43": "3hbrGP8gfGWdZgzhVz9fY8fkN2Muo32Fg81T7zoLupzSBRbu2ef9X6nQ4pKbpWFSyEUmhaf69z4sNTTvdY6s39qQ",
  "key44": "3QuLxvxGidHEpd1FiygdapBymd9cXE2BfFSafVT6znKVPu4twusTxLCpJN23ATqspWhmXYE2xfMbWfN7utzFSBst",
  "key45": "44KgDE9RgRSg77tfZW16RjMuxWfo1jzDz9x2F9AysFrKNVh92NQE8uFQCYDroFYjgpxkrNCn8f44rGbc6SmKk4bq",
  "key46": "53Ln3nQEzGVDqmPV2cMrkxhnVDPYLg9bFEbz7zJ1frQFijPdCZJVfRo5Q5HvdfF74BozjDYFN8JjzbttPN31eP3e"
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
