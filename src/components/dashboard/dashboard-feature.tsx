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
    "n1brhRfXErnhWfqXRRUZwVxPSkY4s2HR6Y2daWEeCtJ872H9QLg5ujJGgidd1N49bqXwewpGpemfuEpnBQWHmyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48D8zg5ghP9MvRfrzcfbFci5uz83hK1rjaT7gvRWzhpAsYXUC8LxNX7Mgdyds53MfvH8ZPPBrxFbJdVjwZLqLESf",
  "key1": "4s8nf3pKbk6pbg8HjUZPREVyz8SRCv1FahCmp29uno9uQepBj7uFHxdMYYABEbompnCBddLCByKJi3TcCSf8x4Fm",
  "key2": "22J4WrrH2FjCRnBoBxpb43J3B9w4yReCF1f3pums8FaUUZ5aAPceEDSbFrmdyKzohyVGcDetuxrXq1EGvRsLVW7J",
  "key3": "334vwFSiuLWsSHrLWmni7z253djDNU87cvRGoYuyELHogef2nBoBXUYYdGrqJ8TBXxn44b7BJ6TNnZrEtRi9jAT2",
  "key4": "3KyL8hxMHLTz7poDM5R5BAsQHkHB42hqpCn2gLf3837d1bjVBjWAvBGweJELHGcf1AsrZZ4gZVQMTkNMn6hjfuka",
  "key5": "4wYMnXvmttpBUbEmrhZ4pVgwacpn95R4D8YHzfdqAq2qdcaFtT7iBCQeoUqwiSmfkDRinuc6sbiMerH4CWeChZLs",
  "key6": "4vzi58xFBhd7YUzR3vAuXxjUHkAntFZw9M1Ty7mr1nSx1XswS9YS8uSEYGK8snRufDcQMQ3jQkAoaRZp2UetrZkX",
  "key7": "4UCZCxHaMoGgf7Vd7DjwpJjXJZkUb3X5bJdVWRJWjk8DZhXbPKNMvbTfLa82TNqU2WM1eMUb6prxpbogkAmD5eBe",
  "key8": "5uw8uz93VZMiHJNfSMJD2LR25T1oYpxTr3fbRNMnetTztRQzHzKTvwriQNMrP1t9mXxksEKnLH6fQcxnfp7X7VFH",
  "key9": "3jLaDgF82dzJzHcgmsNxWPKdrp3mevaxVx6xoF4P8CPGKnUPsAhhfn7dkuvqP81fqX971XwmKNp8vsp3UqVvnQC8",
  "key10": "2pdJrYEXJpZHB1mVjjj8fSRsSHuQFrza6GRJCDcdCip8Voue5y6y5ooSkXkzZdTJEKYmBcZmmGoZUnEfac62a5CP",
  "key11": "2nv8Lg3kXJKVP9YE8VGJhjc5pX36mz3q25ovbXvCxeWCH8whjCJE3WhKRYyCGWQ1ct1AmURhZ4YgeGY3V4rAJgKv",
  "key12": "2eoWsvW2XVw432CkwcpPmdk4jQkh2QRfQruzdYN7RAe5nM9Swdw6BPuH2dWNU9YoTtqfMJGi1PKqkF1PafV1HuaH",
  "key13": "TCi53so9RGaeeqTMnWRJFNzdy6qfKDnoCg6bPsQVmeKpyQUDmzPizmriGcfWrmxFDHAc5CjrTjwaJtY7NzSjF8J",
  "key14": "4vKMBmx3tuQim2HABXQ6rqvQXhEdYKfV3okq5Qvq8Ybcs5NDY8tJA9URzYqyDsDkrxkqyH6cHEd4gBzoS3scAU8o",
  "key15": "4hka2A4ak6XrtUyNwZ1P61o2Dr67JkbzCT8fwjhVdayKrgC43Sguv2N4vLC1W6snYSVeFyn6hkMRcXEC1P8qWWT",
  "key16": "5JCsfdfxw63DPoPkSBDN5PyVFoaK3dAs9ipuPpcagxbGZmT7wgRoDWUqGTwEdP7XSaDwarJcHDPAAyyJUcP2QNje",
  "key17": "5sBt4mi5KrRTiNrZSgKJ2hseAoW2MEvMQxddjgbKaAXb7m3hgmg5URHqFhtgsx3AWN16XWVcQ6bzYeBtRZrRSoWP",
  "key18": "45QY5fjmzPPRhykJUaiisY5s6bNSJSue4o5hfSUmpLZUMk5vGeDvRijScMAHcGXXUkQk261oqPBqc37GKxNACfcK",
  "key19": "UHMtgkhJsgBqdk1TShaviLTDAdZdaocXApgAtcKm8GFVPs79kYFZLb6Mp5t6E2Xq7FfdrwpQqHcTRcyEdZ9fPRq",
  "key20": "3CYsYhE1CYxaWRNL8e2cWgecjC4cxYd1giowhGtpdudx7YmMJ1C6qA44D4xkTRa3ti1AQ4rombUS9Ge8woTZjt1Z",
  "key21": "4MZRU9x4RoccRKf64TqWFfmXRMNw58T9dbB4uz6Ysm8os8HcD6WQNNJS78M3FmbtAufKfigtfLT75yu5N198yW8d",
  "key22": "dozSQ69nfxqGb7SHruzqEDHNFx4j4UWcv23kmjxUmPDTpoz2TT1drRuDutdzCv8fBJ1ZySJkMxj15F17zk3hBDE",
  "key23": "5wZ8gWQgSnKj1tbKWLU4ckMsUWbT5u8Cue189PEtLRnG66M8oDmznT9eyNLU3bu19xrx3an2YyiR5qrRJsgbXoYB",
  "key24": "2oyPGyzU8s6JsXuh9nSQaQ8SVgHvyi4ausVCQPCep6r1vXAEyirwZUjiYHF9EcZCDaa1nLzaSHfHZCXdjQhjLqhv",
  "key25": "4i54dFLAqdERuNTgp1B8272DGuqL1AuWo8DwrbpAhzBjRXKUX4YYJmRe28grMAjmksx5XZbWfuJ3AkmFsFxK4efe",
  "key26": "3EedfMdpwHr56pchg6C5J18ZVqrDh4KgYepuS3SgNEb1LmJRZSGTtfmfYYSJrUM5eJcZMqZCgUPVgdwh3cuWGsMm",
  "key27": "BV2jxSPSq8tCtuncgHvQ8xpYtqKWnkijEMMiEMFHAK6fnbx6d3mbDjMf6qADV8ACvMswtyvb6GB5i8DD3MDYuCN",
  "key28": "3qCnqvbsUzuBMYXEGtspiRxdmDekPGcC3hjKipv29LujMVE88jJoDUUzdt42rkQdiDG6SVhmGtncoHSyzkVCwRn1",
  "key29": "czmvmM9Wspd2wa8vApfk2y9wf5bp6bs8kgx7Nyba9vgRcYdfSjaxFZo4cLGukcTpbTgDFzALckDupiuU36RxdsC",
  "key30": "34c6TUNKro29D4Ytq6LZS1VCJTutnmo3H2FjQ9Vu8NR47Aqd1iGieMCzNeBPExYRwVrxMV236mL26Hsnxr1niVdK",
  "key31": "4mzFsiTyVkekyQtcKH27uR6wQu8kcbUmp4kuZtoZJLCaRVdfNsUDFWYKvJqpGCReFRh5xz7X6zssmjydrg62Hrs3",
  "key32": "5R4DZHxGXomSUehwhJQpLMJct87o4K68znJFEf6FCxsbZDXoPFikWXkwYvjB1SRL5YBnuDVsP8LEwg37K4h3t1JP",
  "key33": "WKk6qywYLXFELASNTmRpeg5equjgi3ppooPMtdX3FR9cZCtkNrCbBzA6oz2tN98tXfxYR41vyhAKQkbV8XmJ5rw",
  "key34": "mEmuhCvRuoPVV2RJspKs6EPgLxVn9Ukz3LSkK5Zj9uMUpdAUnBk6CrUm3uLQNxG88Xit2mFmCPusNJmNfJEZBb6",
  "key35": "3dGeEVSC8jfhyeNuMmej72BTkaoH7SbW3kthpNF2DamTS1wEYdKNYfbTZfFFdkk5sQXoSY7WobmxeEL9UUWvG11i",
  "key36": "4epQHXPsYExYtUJCsbUpAEazL9bXzRCG5dgfZip3Zvdk88GBaJfw5zbQi4WioBQ5PDDKwtTjBDKBo9NLGHUicAtv",
  "key37": "5XEuFu5yiPcyRw6kwJUW6xnhYc8ComYA3iUjvDFpzZAz5fk2Npg4LutWgZ6YmBDxHZMw4oK718bm1kh3rXm5Md9c",
  "key38": "4DV4cfYuzMcCKNbkiGf2zivTYVVHKUYmL6cEWGxf6ExuPneRdZ4TuB93JfyQrq9eHsjqxbp54turULX3wdbb8wwF",
  "key39": "56Gk6j3bAFyxBgyFcujBBzEeKTsyDkrpwUCMntLkUYFgk1PDxhBcjbyjv7Nm7aNubPbYmpLK59G3652ds3pkUiE4",
  "key40": "38oMPZm6ZSNyfLyEmbFbdaWJHSSttuWGtH7CKa5ZBo89jGNuzGxhtcsBk7qTi3bgQ3WefK3kxGp6DsmsdFp4PbfA",
  "key41": "DV9BR74Erg63UecBRKiXXxze4GHEMkCnw2VAZ42c8RrUYYeUcJNxWzKMNSVJWo9s8cxRH1Yj7XxCjCwGkF65ku1",
  "key42": "2FCrM9BGdDUuYh8XxKiMCWeJ4neX2fb1BqCQ2jJTx4moQubQshqXkvnYZZ4zmAnboB6AN7p3qYpDELAnEeTxC1Q5",
  "key43": "2vS3MhsyomVP9Td5L4x6qNGhYmpCSVz42E8nKpi8cmt8WAheegViiqVrpQGsRzUdScfcVh45f2DpgW5EL5eYMiU8",
  "key44": "4iqxuZ2ua5tTvddektcewqgCfReJvpsJ8y1fa7AqAzx6sukSPovRALg8QmsRBoWwU2aWkimvkG77pntZqK27CKCF"
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
