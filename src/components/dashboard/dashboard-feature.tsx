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
    "5sCeqXBJfj3HpkBPufuBze1VZ47DqYsZS298AGupzPQ7s3Qe7F8FyHPvnVS9tevYUqYb3vfh66wzMrAg1m8wRs94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78qFC7pYGruZFqhbwqYSnn2HrDcJWZXzDF449xw3caZJt9JyfRbE6jmmNTWQ5FU2Lz9LnCvZoYP6sAzxpgizCew",
  "key1": "5y81hrUREfK4dhZH25eLVc7Wi4eHfkCAwjgwAUnga41862Hkz7qBu2e8xoiGU41TPkE46ZPJhAbpMrPYP8gsumj4",
  "key2": "49E1yFmwY6pufLLRm4ha8T4cZCErHKDMFEZj1GUUBALsRCNz9wy97kdjqXRz9a1emZxegwxVoG6xjQiXUz8ottJi",
  "key3": "35efsvrtVEF5zgMeryaMraHQR9r1MbmdVETM8GbcK6ZpxULT87wb6LsEgQQj35NoB7VDnDBCDyLcY1PCaDwcUvDN",
  "key4": "3uKNLi8cVefwzy9rX3SHu19vrv8kCnsZJEJ17ktGcY7NS7aTWfAhhSTwWvLgb6sYSdy4K24SQVDXFFvDRQk2DXPj",
  "key5": "3ezkiarKRB3SjoVEFipRif7tLXFMvVupR6iBvTwFiQmCiWw1SoC6fMBpEDBaMh7tFkTqkf5bzrCi4qTsFZwtsBY4",
  "key6": "3TqWiJvmd9iDrikgaYZXz9uHCJx28bgxnCMBMRjMYgsk17rDvLujT8Y6zggv4VsqpWKCkr85SCCw3HhfCdmqD1fp",
  "key7": "3jGixGi44fs2ZyM66WrqKhdKChDYEUJsv7WUNwpj9JHiK7bn4LNDG7SfHcidwBB4Z3B7okjkjNi7mNXGqu1UoAGE",
  "key8": "2byQULShNHm7SzP9Xgy2ggLQzxovSo1qaN3FuXrrLk2XKULoNDvTLcKFhiQ956gabfQiah9SdYUzRPdLQMuTFfet",
  "key9": "TxZJrWykzUED399PkwTY9LnKST6veG7jnEfgtRvR9nf3xtvNjd2sqbfCdFVQ9DDdNz11AN31hmk44BskWWzbp2u",
  "key10": "2PxWTfHmCFTrotiMtbDGwt33PRbNgHfT4v844SBVoVp1jgdsqWKGWyP8wgkAgeSQ1cpaxjX1Z2oGrPyU4kHxAATy",
  "key11": "3qSnsbTnX1TfXU2h8Qv1dXMwTKpFopedWxkgJVBn3N5C7PcmaeofmbaJNhsbTAcGHMaPthr4h8TzU12VAwgHnVjD",
  "key12": "9WQrzF9xfbN5Psg1WbEhxyBWqznM5aFWQAeMktLasbZ7L2aUnkdsXwr1eEhjCf6cx75Vv5mgBNrngiWNXfHaohU",
  "key13": "27mjykfhF4Bec4XEBr5AymieVE7p9Ucn93cWrBEH7kPQySh6NpiSCXYyu2FZ1JSzrRG5ytA3RtRtzbrWzxccoEtS",
  "key14": "5kPmV2KKsjf7uTQz1k7fjbCS7MLZiZaPNcHWb2f5N6AV6e8qss4hXgHzMQAJvr4cFrTqePHCQYonEkgXnW1zDpit",
  "key15": "wifhWYgwPnKxLhUM8VgQ9R5LJR4kT4877sJAkC2vFi4giybqW7LYq7VFzQ3wbG7HdKVXmhqHHA26HYCE7UaL1vA",
  "key16": "2ne4uqX6GSeQtYgDJeNzzSQSSmTtDNs3YRcUsKQ6ECQG4x7E4gDticPC514tezzWcCXvkCbjrbAnLeTF2DJYnBVZ",
  "key17": "5zutFUsm9EWHQRoS22G9izRHTptEievTqX9Ezqc9iy6P9sjoN9iKptBr8yFCyx138h21fSjuyJ3hVaSskS5cQ2Ju",
  "key18": "sdavGmp16ZwEv89sS5bJ9Vn3TvHzEfPmy1Yo3CwCAtPH1kcvyHZdsSWEFCFVWs3abgaCDksqagcigK4Ni9xVHGR",
  "key19": "3f2Mw1FBrynueScFX7FefDS33UNEv61o1bRx6ogUbPww4GEzKZyWGeJ73CMEKefynfskqv7FGDRPH7zJHDgYv4p7",
  "key20": "3Ma8kZ7zX8quyDzffN8QnZ2w6TB62WExSbuHvSuQ418MEvrA3jZxqA9fVHKHTqcbngHHcaZuR478SC3A8L2ywgk1",
  "key21": "3siyqt9kRxus6C9Kvf4aVJdFZJfDZwKLgcZC2PqmC9Rk79eYXVZqPr523QoGJ9UACokCUhHCr61C679TgXZFXrYW",
  "key22": "3mkbpzRSU6H6mpbziNdCkvEWUwzPLy7BswFSaRZmvCuV81B6mT2YBxCTHLr2pbXr8PosVSLNyDMn5jKLfBuok8ii",
  "key23": "5RWKQRbyBwpYSzYh65KtD4tx25TZPmUeDRPEdmiViGocjLAvHHdcTefr9ipWxpqEkE9Ps9tRmsy6ju22ySjjtYB5",
  "key24": "4hL1VoJy1NghSU64eqts2kgSGxKhHJLi1SbmZdRouX2sbeV5sEgvh3WWVtJDtTziSTJ1hRg7rbfg1xyL5ZDZtd6H",
  "key25": "3nwi5i1rj8tgXVMQgnVGNdb9HdP6aucuBWqBmyXBYoPJCZALTaEufqjrDUt9xLfnnpeYoA1oZKymHcZbJfF2tqfo",
  "key26": "3X5Zf2RxvQe3zArZ5FueNkVh9munWaEvrbyPhaEBNJWQKmeLA9WZrLJM7B4QcTF3vFJ3NzmepL5SFLsoNgx2wFCh",
  "key27": "TNPt8erxcyDArndxfTUVoiZhkMqo8oNroaDgL7KHP7irq5g2wr6UnMD5oXsqj2vaNUtEGJc1RnWKABFYJkCfwMw",
  "key28": "57tzJEzrFC9GLi6ijmKN42F5MAdJdjGf7eZxkkccXCgfJYDSXv1TUsekvFL3LLFoEytEVb34ejsgeqw4f4t3bG7d",
  "key29": "61te3eg77MbNwdNuuWyHP2HGmiKJbvVsShssCv4y61Yd6Gh1TRYDGfYUMZ2oEgjhDmxDQQaqyUyjLmmVVLnSN9Dt",
  "key30": "3TnD8ntawezpTyKnq34WErjWcmH9M8mkHTJHPTviT6WoihfEFJpuCy4Fx4oX8eFXdanLASR9fYLyQZZ93D3R9fLS",
  "key31": "46xL8JbCXg5Gbj37Ygt98rEgZotJbm2q8uxEajPWLHzpv8BmL1FHgsQp1YJKmwmfbWm4t1Gpm26tftD56WzwPscc",
  "key32": "3JryP4wAqFWEqkdGSiEkaF91LtZ9iWFSUBU9ZPrTQL894gVAkoSDbyTpHbfo1AU8P6xJm3KT2aMtzs8qL8Z9o7BE",
  "key33": "Ab2EbDNbdCNreq2TQfyCiVYFxmmLngoEB75bZKrhXVTVFdKXr14PH6zW9uLGkJox5Hmm77vcyz39knfdtaBH3LT",
  "key34": "2awDQAq3SQb86YBWgPiEpmCvYSuMdGsEjUMbw2vfbYVn6D43Nbjr5vUcRw68CQRCVdcFAu2BfSvU2DWVistkfMvU",
  "key35": "5WVZsxAhuhVtAfTgJbZwi4c2mahgfQkPiG8fFWDaTcJLeJKXgCrYHguuhMuDkqjNSCxRdwmdu7ULzjougTnwSfvs",
  "key36": "3ya1WPmmgyrEX6Rr4RbiRxReWSPNPuGYUDmL7HHbWrSuCMvrDXqerbrNwFXszbzBpuPDtK31UMEx2RzGn2ed6xmg",
  "key37": "5nAdVKXX6ur97mGmXU9LMf8FKS8fVLsSeNGBV1Rg8nu2zR1MRdXrnzmMUjJtzU9RJmTD2x8CtQVw4nsnEdepZPZJ"
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
