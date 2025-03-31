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
    "53mazXSQ1BXWL39E1Tz14vSfUTVcRB1D62o2sFuxuhxxASKAdUod9FuBSvd18zY1WeNW71nJPYsq19sUmjoLezHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b83aqM5wUh4sdUGTp6sYLwhvjY5RHwLcLbHyqMGSqn2FUo9yShAnZKQArQQwNCrJkpWnUs3iQMniyyzgfiGZAky",
  "key1": "4fxFkosjSyVCn1URpX5XQchLKeC2JmA5YnRd8c27feRFfP7uhHG6Xyez6ATeMGkoa51B7ccbSLCmLKCceRqWhV3N",
  "key2": "29XZcWhWVQkFM1GXmri6SCmgsFbfM7n8FTg94TMZfx5zdx2XXizQqAtu9EnCtz9C7GkTwwrWLAuaMzSS4CUUS5Mo",
  "key3": "4pJ6LohYokA2JDnr87tku4Q2nkRds8S3upLi6abtk4hL1tjuv8gSMtYBZrzvyMtnZ3qq2NftBUwZZ3xsSr6esJma",
  "key4": "4HdnrCn6VTc4KwMKfoEfeG6aqk4DEAMKJvjxEE4XgUzHvtyS5BKgXa5oaf8i8G96qCqTc2jmPFNpRYTQ6pB4fVEr",
  "key5": "2fAztZFfxsen9HdWAr2cE24ttXTzcY17mjuknXPYcQdApeoUHASjDxH4UMuVhrEwPct1LZXvy1B7TFv9tiVKwkWB",
  "key6": "2PQTVmcBcZjva6frcY3GxwFMHcP4GfMrEassYUYfPGEUABuFZLcDKnLvbC9j969np8Lg8FuLZtZN1XVQUSXU5sBL",
  "key7": "4DHFHgv2SKdcpmCM3cEAvsrQF9yazkDtjd7a2di8SpMpTca1Kh7jCzBS7kpRf7hUhgHGuniVmtDVGTCX64FqDDxD",
  "key8": "2SUWQqRjU48fcfarFD6WLkk4dSZqNyKP2SHih5gx7xVaumnNbv2XUhNS1JD9HQJFn8gyzzWzc6NMw4jQQXhLT6Ns",
  "key9": "NhENDADaRU5W92MknxuKmr6KBywxVTu76aF5H4wRN79Pg9tFCVtMZnABPzmLTRE47vwCNR3vfGVay8o9UD93X4b",
  "key10": "3j74q9azS6J4txjKffmAtdB2fKJFetZbWcwNu4FDXXLFJ5jsex76vCM42VVqc5UvG347YjaJSCvjyi1DwP4yNZbD",
  "key11": "63j5rVNFhHsG55EfSuabDssrRWGctieSovVs3SL4ayvsDccQwjUd8oWx76iiPHJQoD7sr3UVzSJiGjvgbKKCrHDp",
  "key12": "4tTuKt1cCyQ6VSjS5BA1MLoNPud9E4tXcpbmVZWfoDDj2S4e7Sw1uq23JtQ5PxCpDf8wGU37NonSxUdh58QNmGbp",
  "key13": "JrDTxjTn5Bm8Pin5i3Ag4sQwpFdyooKxzWv4ozRyy1VmrSzZvaNub5Bh9k6yDaFbE8YiPVyc3HejqM63Xad2sQq",
  "key14": "CkvcTUkRUcMXHkh7v2wJF62HvBrhzLFn7uznBpP9ArYK1owizpztATw5iCG2JchzR9Jhh8iejEwRykWGUdMCiSB",
  "key15": "3xmfTjbAVuaaEZRTye3mSMhuYFPWtUREw9a7DDtWKVtmqkmLDg7UzrqK82mcjhw5oYoNmjA2mGPnww2frSdeqdCB",
  "key16": "22fB2LSpgpkS7KDZRg2s7bjFes7WG3Si3HSXaVohzKK4xxL6iND3vrduTpWtcBVbcwS5kHtacjDeq2mYDKAQH8c3",
  "key17": "mkxwret9RWdKqsvpZihAgFkzymn7CWFWS564nNf2g49PQNVCaV7kxBoXyjCuJJWnoEt5Va6EiZiMbowtRJMLK9z",
  "key18": "61TFZjrzZKjZ4R6AS1goXnUtnt3kR6x2b6RWmuhFqqTnxpRF8ZuutzZiuNzUijYnMQhxyCKMwJggQtFbqsr7Hdfx",
  "key19": "bPHesA4omLb4nmk5U9x7JTFZsTFVG4h4u4UgmsLRZayn2EH1sqnwknJTRL5FDBYkroK5KJjSiXnDMbwSrae7Z3p",
  "key20": "51KJmXT8vcUc35P2yTDo1kapueo3KkZC82Rk8Wz3hpdEsM9LmULyEdvS6tu3tg2WA6xFCwX2Yn1WAwEGmymwKcxz",
  "key21": "33t2sysm3n7SbzXhoYg69azv6csNjELA9mx7NgU8Y9FuEYkoeNMYz4Kwd8K9L8gdFGJJt81UkPqkyXFLF8JFqCdk",
  "key22": "5R3EPxoAcRr8rMFLzLqu6D9ahtmkAj2pra9ASPDScVoqQB68xsZiWjmZSfwVGwNX6hi3dBkgtnyhZQ3ujZSgrASb",
  "key23": "38i2h57ExP41sCpihCcnpRDMJz3bXytWEZLCfHsnpKmNBhKxS1tzSznRcTUwkBhkhqQE9Xed5ppATTrGAXvgdNan",
  "key24": "2nXcWfMchnzZ4xbdbG13DF2yx7rJfJgWyLxhLY2HjcTUPQ4mHccSvktxNsRJeGx1RNXrNpgnCjcGPDm9ovk9qrqD",
  "key25": "5WipmuG4QSPtjte4MKVJjfPiENpqvokHRoGBeNKb9SBWR4sZDdWBrVqzYBSq8QeFHGmJRizUDmFm7fV5gRZcZvh6",
  "key26": "3B48ewCc6dszAdsbkUKZFTxN48wsQDLYQcQrY6iZrS9tkdMEvvrYsSV7wrh2rSRZL2S56195iGbFczpNDwqJdiBk",
  "key27": "2a6mcjytt7GphprMJk9YeM8HtevzeSpS3QeznPpk4dhsELDsGCUYPdLgTcJG3LTNArZpGzE8cmZpGvmet417czBh",
  "key28": "4sUHWjUmq11YqhX8b1eLAEyoLPE8WyUKECgsAmqR6JtebwPLe2CZbCnL98FKWJiCFz619TKzcL4cyacGxA9ickFF",
  "key29": "2yBtVoFJkF3FFWqNHTNxwD9m4qg9veDzXg6hN3iQPFBvhmdRr9oFgwTuqehJJCLqWjLHY45gz4TNMcgDmec3Tprv",
  "key30": "4KA891bnmez6abKfu7cderhjcywL8gUafkLYzQ4rLrhoDjWVrXo7z9XiGjDvuQw6xUWBqqE6VgLasY5WGBtEuB9E",
  "key31": "VjKcJzVvPgUW5igc3tsBn1QjxsMEtHmTBCjjyemYtHYbJiPpcVx6Fs4pmNYUEpKVeDLDku9t111Gu6KzqyZGjyG",
  "key32": "XDnpNHX9mSFmCFfUXu5kgci6tRHV6dHFgU5nkptf1i8TRjxdSbN9HUsfSzWHaefG6nbP9czeJDRZ4bKukizsyym",
  "key33": "4iecqLwDpLnDhQKYUkaMym74MLwGNHX3i3yz5qei5LurHh4HWpghvzbkDqx2Qxd7THtDTjEbE9KyoKpv7qcQtq7F",
  "key34": "2kcTnwDFwpnQtDuTBVW6AwXEvWPJaDqB6A88WqgiUihSvgAU5YJCRwuyatNVMWxG4GUYtxiCQP85jFUEwjWSN14N",
  "key35": "62nnAfjPAoUH5XQ7zB5bGi7in5MqZPmqYigi2JMD8RqNCMCKf4Ps5LSsfNnqGyopsyasATYsnM18ccxJsutWC2XA",
  "key36": "PjDadJ16jSnuWUQATdRpjRjBjXhnpRZLAwG8ggW7DKKU2fGt1o5rsK8wUyn1VFdgEQsf1Ksq93s7JGmSNsw9vLT",
  "key37": "2AhtzFjBab1jMgbfAfm4YDisHamVTdKgkzNACnavwKJpjTwFMwZNxip1yZSdwi7L7BSraxzbdMuensKmBPSKtA1u",
  "key38": "4VkZdWqj7EZ2JCN4Gho6XN8Mk2tQBHXysn3VsUcdNvqF3QjqcnAbNhBFxkNQh9Si15yVGUMVfXuZL74nvZmEitY6",
  "key39": "3xN3zzH637sp4yhzrZgM6qCMh4GZKeWJn7J2CYWxu4L3jrdHqrSw3s29ajwPvfJDaSRewoQajMgWUd1ggHriMf8h",
  "key40": "2Rs56uh9NnTMgUjT89Na89YJ1XmLXYYA5fJDC1BdMbUAo7rPfdEdFqAxz1urXztBq8U7p7KUchLSuAeGUCxoFVsj",
  "key41": "5h86SSFm1vWowZXJ1cP3KderPS6sB6BuH2ekukp15VRJc4hipVUTUn6GSfo3A1R5aNk7fE5Ni6zuZFMRvjw1nqYJ",
  "key42": "29QfErQEs1Grr9Mh5F4WyVjQJa53VHLgmCM9KjfFYXXS4UyhRomDsLwxVamd5qNtirGt4JRWdB2bs5JL1ci5YNvX",
  "key43": "5VReMkVvAJUZyJgue5mSFwQ2NGwNbR4exmC4XNfwvUsDyp5hPxA2bWgoCQA3M7JEN6eDY8yWP6StMHfwZ3uT68Pd",
  "key44": "4NSUbsrDFSfNinkNHP3GzQRB2cMj83xt5Xgq45Ka4E9dhDXQCwB5phTJ7cHB1pcXtceRQBS5VeCZHKwbsM2wcUg9",
  "key45": "5Xqvu4JDTVviYej9MM9Y8tZLn1sefCHJ1NszPwbTNHFb7zCd8J9GApkz3e6TMj894jcyQuDRGkKWuxet7rQA12jZ",
  "key46": "j7Hr7wogbN8xW74hYfzwBNwywJLHcCEEBJ5dYFDa4FVm4Mj4eheTiYqvvg65PwSKn29SE8JuRaLaq9ZTFeQvHfV",
  "key47": "52mNReCvjFS5xe394vNqwcPqg1WJr3nGdr2zGcSmD99xNEcnJ3wUqGh8SaW8a6LpfUGChPUw5GZFnhVnALfguRNH",
  "key48": "FVww355MVu4GK1RNjkrk8pFfVQB6bBgjjpFpsFdhgF6YGpXGsbzJQCUogyUrWDq2zpwbuBMdwVNMFTNbe19QtLp"
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
