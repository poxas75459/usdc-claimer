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
    "4PVSzscrBi4k9yUDJewKjKXDDTnTrDuY2mSbLDWHtuN5E4bM1jxU6SKF9ggHQN9BFCMNmEq3SMLTEBvqWR3D3C17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HwCjSy7T7e9hVpk46xyaHph16EWKtKLSvosf95QsrX1w6o9a4q69bRz8K4uyaxtNM8nZmD45S4CmKEYpzLyx7c",
  "key1": "66YCqYUZWRCLXqPnuKAC6RMKS6Z8eoRmhf5sGmmQw8qRh9S1hGhoas7co584wkb7nNKxATdvfE6jjkLiQ1qAn2XB",
  "key2": "3R2A1fpdEWdVN33Qwyd2cb4wQ9qXVCUmpEDBCzzTH5o3QGJRBeGpbs6JhoZD57vi9kSRu4pxWnFjyQYuYKdo4NPa",
  "key3": "47Gb8G8zgkjHHDrthtZKF56QtrKZM5NTmmcv3nq2r9bb6epv86W7P28nXKDd2t9v6UJqr4LQZSvEG2ng1Lxc96cW",
  "key4": "z6EzaKoNhvna99uEmpp8eQACkuwEntB12ssSJvAgVbbqDMud7ho8DTX2iVMszV7mnYurXTDKUJrGp2nG6ahfghb",
  "key5": "2pYEL78NcvCMwyNMJZrfgM6TrqrdQMRRFpfR3G1GQeYu7SKBNmR7r4WUvSfkjWSv1imkdqynJmDCss1tMXEWoHJM",
  "key6": "4P3Puy19d5hG17HngAL5assjvrgVBUqtkhQ9WJjabaQpNDXbYTViLxVPxsU8VNbv6GqrbF5DofTcqyyDjSDJudFH",
  "key7": "2k9dSnWxSQeTPbAyDud8HCdYpMKxre1HcxzPuhuBT4oPE5aMHYAiWfvW9iZzvLWVLgChRLs4yGrCm33shSkSvZYy",
  "key8": "5tHNaFLTRhsrzKMBnK7A9qhe3CngcSHDYf8udrN1XmM9xjrpAxzLEnY1RUg8bQPz6vZtahP3pTuyKXLfghe63h5b",
  "key9": "4NV7Q4RBGWBfGCPvCnqbyZK9EULrZghaD7Lhn1QYmL4cygCWJRT1hTkaBMZFpTXeytx34H3mVP6w7d1e4WtFv4Hs",
  "key10": "3yUwKRYMzzpJsFsayB1tKx9rNc63wzezzHBY9CkTXgZgAtywkUt25soPKtxN3ffEBaurBS2fc5q91vEPMDx4hdTg",
  "key11": "2FnRY7JBgQfpBRJd41CkZUjbfPy6iQ2yWksTB9AAiWzRbzC4d1RmquiWYK82aHFBKimvA7at5Y7Ji9m9sEYEHJN5",
  "key12": "2eL77XiLbMB1XhrJgVXR8MWqBtiGMXAXcmRKksjDEMx3j8fToQoxQkBUaRFDPvTTf1JN5dsWFkCSgoosiJFAt7ex",
  "key13": "2p8LwbQrNqjaTu5JFZbugKGaoEo5GQUfSGXo3QuEM8wBYzvNrGryQCxcCp36ZBCej3kifaoXPquRrYk11FJ8MamW",
  "key14": "5wVSZVALFHYMCFLEQR1eraKb9FFoetdESYTj21itQw2apJaugLpv43SBakGPgrBdCLMZY8sAgBtWV26xyuUdEctq",
  "key15": "4AqiWTBk8ZCkw5ZhsmNXCmhRSxKPB6CUSgCfH1ZfyPx7u5Xr1HD9YSeqBjjtNjdwSyK1cf9buQdRnbvYdoZiKvnr",
  "key16": "4W9J7zrzgpeEG5SjFMNZZ6nNzxiwdGiVsCrzp1QcxqapQR9Ah1cRT2RY7X9ABUyDwJwoks8otc6Phj2XDRzMi42z",
  "key17": "4SxTaSpNUfRFKoLbYwhLc9vZ9jaMyDESNdQ1qmdLWEGLAzUkqDAc1Qp4uETgCb3Cc3osHHAuRFcnBRVVx95Biydq",
  "key18": "2PqTZk4DF93RJWLnsQpqkMMRBL1SXHbBmvSZTKAkiui5V4gAADDKYWdom21ncgjmhnD2wgGZ58kKwXQ2VrW4yjRn",
  "key19": "5ps5irzKN294egxK96xv9jRJTpY1jDQVKuDQuN24Aif3UmCBPm9YoVo6WD8MrQpj1mEjAQtBgwjcPjw37iT65zdG",
  "key20": "5morrmU1z6mAEJDnk38AuZQT6pnHyFVTXQT3dGqma623UJfrYVwD7XgfAputKSSagjE1zBLzy8PRhU8EJYUqszgA",
  "key21": "5ggK36y4PBECvjcqdorFY3DmckXVVUibFRh1z38rVDKuWdf5Fyo5gEMUcg3MNzERv3w7ZURfxY4GrrhdZQB8TvzQ",
  "key22": "2YkAHhGJ6k31f35B7ScWQHs7pW94npCnhkDEU9woxwiGW4udFNvbgA5XaSrKZ7Hd5vFnbLpsHr4VoF99MdaEuRX2",
  "key23": "2URwWBFB8aMdmkVXVu1hZzwUy1oxjuubUzBrnbL8cMrPQxgE61ou5YDhRjPBmdfQf8Pu71emoGBJmLot9WvwkwZX",
  "key24": "4HK4iKUeefmL4NKfm6Ps66i38uFHrkbfMYjggYJdypQo1X3QJpaJjatREVFAeWms6KE1pKAL7R19VVPWBiaLcuS2",
  "key25": "kUd6EeweMGJcXAqoxTKroiu26ZERP2t1cZajZmL9g66RvLgbcwTuijjv1YKExoNyDrzofiq3xcWpA5HmuaRUtfX",
  "key26": "5myQf4CXHU7uwYEXaDSEujysfpdAeWwzra55id81mdVSzqa9pmzBHrnDZb4AU3expMTM4ojDeyf7US3Kyqbsjjdd",
  "key27": "wuD6u64GZJJc5exBXbuXrhVcWAH2eZaQgMazNUUU8sUzN8EZCgCG26QYsvrzn3wvvM3NRbFRkmdAou6a2zCHEkk",
  "key28": "5sWCXJerZA9FPFtFw3R5BRYqmnXo9zGtLJm9bjSty1ahicH91kwWS6ujufmHTgTnm6VyYDt4z3HxDgNBv78s5w7k",
  "key29": "nhyNBNxocvR8FK43xtBW2FJGApoNGWqpT4QEG3WfidDTFQLznCnWyJ2WW33nARwm3KS9vRzGHWvbUamGyihUjjk",
  "key30": "5UXsPKEh7Aker9NS4EJkJKDLPtmYg3cWGjwENF3xZarRQCA6JBra2sZTUaN8UkMJbrxtyoucsuUaLoeB72QVsNCZ",
  "key31": "4mgkjRvTgV4ALqNt2rSYacHsgcpkT8UCjQBNWLmPtzxgc1MWYUJUva66WJZ94XCDjAaiXk587hWub3WwECVivpy5",
  "key32": "3QnDUMxJJcMRrf33A6memZFQtmcQfMuUTKMg4dqKt9uTwb2YV5PBAP34YYij18iC1rfQGYSvv3o5oXogK1WK6fz2",
  "key33": "4yHbGRQdPVjDutfuoEm4dJ5esNKTgTdA8Hk2EFDboqVQFaeZodC2x78KLFrUhQSWr5vKwe1uCodzjatuiR2MVcaL",
  "key34": "37EYDevwy1NnetAk1izArsM1Jif3tD22KRa9S9w95ZRyBiBhGSr9CoQXfUJr2oSAFEUgEDvneGqocMMQZp75shDZ",
  "key35": "2FX7eTnyJqB28zgyUNfDjWCMaj4pvusedM1ymmhZNDYj9D9GKZgTWA7GgouPHTiNBFgUw2cMfCQJppFDvKJ8cnup",
  "key36": "3r5uCfUFSwpTL6nvJPhV682WKC8KRuwZjSJ2XcAB9EdiQzSMbjRtz9JDCjTxtjuqEuGpsZXg9K786N9VxrKjH1gp",
  "key37": "3xsYbeMJrerhS5WqB5syFevvaqyJn2TiZpiDht7RwWincqTYfgeZiWLBrrdctuv8vWM6UFZAcFZKPEnS7wnr2AWU",
  "key38": "5Bn8TVGFbt35i3kapkgAzBEtmYxXBEH8WEy8NLETZGDqf7GtaMG6qQvkD1o8taDLVGS5VJqY73wCHZr17xCdhGDq",
  "key39": "3VWLS7NFHtVLsEajmnVkwgqyxrfvUg2FhWij3aY8nfdMEu9hpBQsoAMR5MQaFtZQM7p8LpFRpBj7T559HXVTPXko",
  "key40": "2YsCuPhpv3We9jbJwYFvJZgcPMRntfJGnRZfJyJyEzQWAiCXSF9y68tivSE2etG77kjtujkts7ozyREptznsi4om",
  "key41": "4DqexowMrTVftNM9FTMjPcqvaZTgjkgvhoR77ciicBqMCADYh7E3x821EDLqDLu7mR612nscSxzUBT1VxUy5Fssc",
  "key42": "5cGL6cfoRxkgqSHpGE3gAmc69Evouo1BLwNgrL2mxMR4r3dUBobvnEUVLViyNqcbFcrNEfu1A3ojXcq1qHxn9ymg",
  "key43": "UgeRyJXf3p3TF2RaUxRCYz4h8fzJ89ECjQjfUwJQtW6xWcsyNhzEHiB8CHoZt2c4FVYUbMSQ6FvfpJXBJDDWnNH",
  "key44": "4vYtWZGipnt7FiC2HB11GNT9wETkSCZhZftXRLiz7HVvcdVsM9i5859hcZgCQAfHopzABZzucW5n6usinDxV61fP",
  "key45": "gy1C68rtr9ypqA48DgwTKUJZUhQuBS541NfAAv7H7ExzSgX6Y2Fn1wtirGE2mNkt182KsTddh76PhAPiCkP92u1",
  "key46": "pHCU2s5bwr7B15NAP1QfzKQ7JFQ7sgbr1XXdoT5LiEcZfxhuj1um8S6WjK4dZdAxyYrXTnbAMrA9irJdwD8wfh7",
  "key47": "3EKkmNhiYnkKU45FGXHmCHyZvGauchwSpbQ9QXUnW6mKs7H13bjVNfQE9ikikheD2JgmPGLEp4Sb5jY3LVcLC8bZ",
  "key48": "5uNe1grKdqfR3gUhfEMgupWm8DAPMw5W54oziHggt3u3ZPmFsESLsaiJL6H8ouEV6b4eAcaw3Nut52FHgRUSMikc",
  "key49": "iRbofzfAdjpjYgJ53Dzq8yimqEkrqMh2bUDje4Sk5okHd2G6Pn1FTaNbYSckPXSswGnRNdSnSmU9jfUg6aF1ygq"
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
