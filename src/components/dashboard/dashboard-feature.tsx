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
    "2zSxQpQoyeDLwmTsF4bK7KDxkV43T3pgoNdmP8mKT6GWPRg9CsbwuMrQgM7Qf8KkcC72cE7DDqPxSrZVZhqqXpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WFTYMQKQY8Lwoow6UPckjzDsVMRr8djtMjBLi8M6n4iyrU5zSejsfA4NaFLrtSmpaRp4pHJ91AFDYC2XD937AX",
  "key1": "2GHkiYvJc4D2BM48ev3dz2CQVd9jgG3zyVPwhKaJNo4AdZJaGJgwZY2255eKf9aTPm7kKiDF9SrR6sp8DPGTAPYX",
  "key2": "4sw6amzMAJETGFpxKyt8SCTbF4pTixv9Dq423A3xYnvKj64zGyJF3cd8psL4qyJaCKM4qacCyUR6fzfD7aTsP91A",
  "key3": "PLiX6Skng7cKfGEybACDe2XVB147yovz83j5WxTDVhmWGn62Au762mw9AXUYEHDut3vPbDAHwmwA7NaSzuVrbLv",
  "key4": "m3Kw2TtN2fti89Y5hXUVTJASjntkoj44JWvKbFU7y4RZW9ZUDjPTtn1gMM5aGjiV7F9hgrg5KYMdb2w48qK99UW",
  "key5": "57CA7C3JMnVyjCFjiovpyBZsEyAyaZ1QCrGQw6hTXLQu4qAR5QzHJ9dgoP2UMtzjf37hbDVoLJASZaxfqzni9BJs",
  "key6": "46gpNNjQXkcMCzb6F86RfFK6XMKudnVtSWPivNZqa4CRgfqDXbEDmat1x6xsbWyT1BHpXnQ3t16mfVYHwrVY8NFL",
  "key7": "36hAB8QDnWMXi2LZGXQNFSjxehewK3CEzEmM22j8bwgwht2GFhVvepWrzPhPi7M1ZXdM2ufYhTkRRNJsMTSfnJr6",
  "key8": "3QiPEe4eyWdxf76mBmZLxwc61mkZXgJzwTaZNWV2eBUuGR6eWy3d3xwq4KKB8sZ4W9dHAD5xp6fPMMqWUUWu6SQr",
  "key9": "3mkzWaZv3XFTYuz1dSMFpyFsgmE3CoVsnqSRiyP6WRAMb5sSCmJ77WkpnCP5r8aedoj35MMnrDAxoc7wuGnujTEU",
  "key10": "4WmJhVBGxMNYpMFzf1k1wAnTQd9RucrQS6vVdvrTu2V5VvEDdj8qWyT9QfQv6mjMA77YspmvD5FcWXoyiM6y5eXg",
  "key11": "3rZUMNX8DGUwZSwQWrZEjfwXxvh2zDtJRKdkpL2XzEQnaBPcgzRxvLe7ATRrESeSafPoAKRXXTmmHUdChNMR7cJU",
  "key12": "2HDqED7KHDGYLiP2VoMLFdKgeco75NPnnNoKbzhbGDAzvLyb19XjACJYsDkCmsRJKzN3cn3V3GMwsvTUtDcxiZts",
  "key13": "2xKiqJTH43C6phqsFz4bpLxwa4NG7zxR4UXjimoBPDj2APW724rZHsF5pdGkgpF4NeRmEzpujfCoNCpaDqB17kyR",
  "key14": "3ShKHATR1jNsRxFzuNjqkpQT7fGFt4fkPpFFFfMwuRBnLZW4ECm7VEJJM17FoZ8TegwUvtnGc2JUDhXBY2Tm8Qsr",
  "key15": "4Z6nNkH946bcKeTDdF64rXgY3ZPoJJhHRQ1rnU4NPHiCiBXvNXYDJ8zaZFWo99bmj1aYRYXBPqCMbpgG8j5u6Y2h",
  "key16": "2poLcSEmbeYmpqAqX15N4kQbY5Xv3wjPTJRAF38kHmCp7PbTBvWc7uMAHHDuXzrVCpQqpvk4Qnc8kMHn3eM6cMn1",
  "key17": "G8Eup9dinkDgvbYDGHpsHM5BrrsthmEe45kMgn3yt5QJpJzZu52WKRrq7HL5NqyRgVyhcgZr1jwC8ewe2kFi2Q5",
  "key18": "2HTZnfFHyXRXjv29smbzQB8furu7uCkPaPt4BHQdpkpX5ShAt9hiPpm5wbgMNe9PUMPg2NW18abGkA3kpfzj86jK",
  "key19": "5XSFvTYMPPhjjzHDTpj5etV6xWiUQ84g6uLrDkQHeaFnMkQmvuBX5QvU8NLtvif9t63tsp3r1aZZWDgdxbzuwc8m",
  "key20": "67SvuEeVhTumCW5D28PxnZ8H116qtE4xPiLH37WTjr3gqn4Qo3JnZ871iUxZPtgK7Jo6WpniHyp7Pk2waUMbYDVq",
  "key21": "5LcgNk2B4xnLZCrK7pe9vZwuobzD1ekBL4GcqPEFTLN8dCNetJg27dAL4bJmrht5keRGYeGQmJCKrs1W6PCkdt3s",
  "key22": "4yKH61kMQHJHMj2q88G36qAGWoCJD5RS5wCUKscWXXe4PUGKe7RCKg5GaAPfQ3owfz3tyNMqREzHC7jGtCnZbe5i",
  "key23": "4wtWjUeBXGour5QRugeaM9mhXcaBs2Hgm2ZdMwyukUJXWHRUSKHCthoAv6qFCSxXggW7mh8o9qVsxNrUVYQeCjuS",
  "key24": "3GDZa6vogfN6H2VErWibpmxhqo91FhYCnTCBGhd8LP6ssU1RUB5s52FwtG5RSfJwwr4ig1Y9rtCjS2XwmNJ6Fuho",
  "key25": "2hkJiLjEfBo3tP3Dyypx7WZXaMfMGCfKf7JKFiViTVrzFZf3wxE4qW2Cyrq9ejAh1QQzjwjo7zWy2F2PtPa34tpW",
  "key26": "5c5NSYkzPDfiihnACDZRnhKJGBRSvAsWXzginF2z1oEkALj54EwHa47Sjb8oVYwHxSuE9sjAkYuvJ2T7g85sGPb4",
  "key27": "UPL2EvDAcUtxUdonoFYCK4QESKWxvtAwqqqpc61Et9aAFNjUfhGhCtqizm8wDMNMp6m4JX55EjpNbxH3kV6FTwd",
  "key28": "NZnX2pqSXvMaUx5EdCo9UnHEDpJP3FJS3PEko2t92LSV8PwAUbXGS9MdDMyDrEia7MQMjuzGPZPpn5d5oxaZpVX",
  "key29": "3423xbki2FXubjPy4P3a7TLVWyxBeLh41QUrNpwh21SaHygWgB8rVXHe1x3XDk4WQF959NUqnLtEJasAFmZDfppz",
  "key30": "UiqYbdBohdHGsgtpM2ZDGLDN6ckiQdwC1aF5Gvcua34z8YySBXCpsG34pizAATDFigUAM1Bdnwat6NeCK5dQyi1",
  "key31": "5fiEfPorRCcmbGX7qPLXSe4E9acomPshfJZfyeWGgfuGNrWDihiNUVzGATQTxu51EMgXEB56n6ChnNvtZky66ocU",
  "key32": "3AAZy7E4HkXXYxViBNrbDuAgeZkdLq1FqDyar4wNFjVwKgEqNRvRAEsbFv6Ji9DpTdzeYfVKJDk5TLVdvzzFHV9w",
  "key33": "3XRbcKejZd6xGCCGfYEV9oT28PUY8tgeiLGF6dQMGzbEaX6zrfxFJHgwkqb5tiSdff2vXTBteWdHwTtCdPacGAYi",
  "key34": "3wv31FADyCnQDDXfybkTg7zpvmAN7HyF1LWRivr65bzPRcw5dNzX8sXNx1kwDQNJRMnyccXyvn76MuoaNC1GZHTZ",
  "key35": "2FNffEvVX5nKftHRGnWo6zwk7pDiquvpDWoUbuAg2oYrgK9myp7NCvLXKWDzFrhavnXFtRsx9SrfrwsYgv69fGEL",
  "key36": "59fHnQSJrWKrx986snFfecwLegGtLrPMkLUFmnzXJgwN4PGibBkJmSKPANbYjT6pE9fbydzCukf9t5QnEPGUsuyY",
  "key37": "4KuKDBCQwnbdtHmmqrcYVCqU7Fzaj13o76f6TWb8KbjNnQ6skfdwo4vkeHvKXjGywKrJVg8YTT4tGjqRchLg3VeR",
  "key38": "2AaCAg1KSrhMNNcBXnEWcFPwj3ceGDiL5TBwtpasYqxTaqfStk48QaWwpWHFcd5aPgJh6tiPye7FWyAHCQshZbTd",
  "key39": "45e1WbKfoYZAoocSg1pzkQMWJZeVhrD81MQERaxsJF8NHERbZXe41LMrB2KwfuWU4QwwhP3c9iqk7WGitwGPoqFc"
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
