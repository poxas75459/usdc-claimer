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
    "5PE9RpGLaS5nhocRPa4ngDdPEyPd8CpRzaEXzowqq3M3RyVnMrCtgT9X8DdCvKLP2fdMe2wkT5znpTQazXuz5Deg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49xpfi6HhnT1edogrzcoxbeCmhFb97LAoAgraL6PuyyhEtL3U4JfJVUj6DRAnDhoehTicxU1WMNDvbWCPsiudXoL",
  "key1": "4Vw189jobCQTw9nC5UQjGxNm9C95jRQ73Qv4CsRfzRV68eBfakCTHWNswCCZPpYdUXLCZpHnyj8FYPVTfsEYqQ5Z",
  "key2": "478rnqgZ3CaynT9YXy6umBozgZx2zxprhDrkVaX4vUWPDFsKBE9mUVH9h1UivpBi3yZBVMLL68pwuG1bKQRZNr2z",
  "key3": "3KNj1L6kzvGLqRdcD2a7CQtUbBMkJuazWnsFQAwynDodFScnK5n3cJdh2RfG4LpSZQZujCFgphfMGTC3yyDqy2Z5",
  "key4": "3hnmfGWgRb5XkMg8NWnE49q1wkXfziPMHbvAtePQpRsAityF4QuE8aGZt2rQ7fvTgYwEXcq7cRr5yNPJ6p9Gq2Mo",
  "key5": "5SvETm2CPhcb1REEcNYjNKPgDgWNfdxAKkZ4PDB8xAdZpi483ZUVSHsvNjVtJ8f1yLtGZHQKbEs1AD4DvLHLwW68",
  "key6": "yLHhYg6xHrZByoTMp7BnRKSkQdA5nd9Dk33eJKQ1qvGurfUx1rzvLoyKvXcW9PS8PSNZMULkGwogooAc3nzsLji",
  "key7": "dnYjb7UcJuuoQKJcWVeJgBVGLQybUiHUydHWRTkUWac4odaKeGHfUs3shTGCsTKvYu9DwhoJVx7kGNofWs2Lc3y",
  "key8": "4efXFT1MNNWhk94xsb7qQDfvn2unYWYo8UTrDS3pxasYaGxZk3pWu63f1bqePMiNQmZfkJrBXwL6tnqkeGfP6NJv",
  "key9": "2oheCaBxV7CkeLJxiz936sACiYcimLq7nYq5ntP4vaDko9P936VXMdKG8Mm6BXNBx5tCwkFKEL1ypsYk6EydfzKu",
  "key10": "52hWojovtkhncxN2uctNGHFfeUrFyJXmTXitXwM8aJr8Q5ryef64LhC7C2a6tWN2m2e2zgnTKxzJiVqosdsoaxG",
  "key11": "5qHivUfL7QQFFq45AfcPu3Tx2TsxmP4zcDW16RvyhSgEao5wPgcgrAH9PtZdMGy57hTs4Ykd7gWAnBS4n2cddRxP",
  "key12": "2udNHATxEQAWFT16XNyBgPrkH7zWrgqeePEL8FvZfYPdJtZo6HZrnK1vhhek4d3PjjPFQFQoX9D2BsUFRQHGZa9A",
  "key13": "4BAUDpQz5yzWDXXRHQ83GmHCNv8ZzfXcfc76iRT6krYLeLqQmiq5pkrh8CwoWzoaTixNrVxZtXo49nJ8PL8sJQxZ",
  "key14": "4qyAuDCSv3N6TTbaeTWEXKZQav4yo4WE52Hymzcq3NBcoXL7pxwb5GZyxFiWTidPqgShFWcRsom1MraN3a7ZFqAR",
  "key15": "mGzG3LGsFyy5P2GYi6NxwTeRuyb3KofrwXJnh2jRWVJK6Uu5qs9FzBqDyba8r1isPyNMsQxeMNMaeaGk1GVoWd2",
  "key16": "4a39kwyQi7KT73qyg6Mn2SEVMMf9wGVr4rKUFw3a6TojNeMcMLakms2K7U2k21ZEeZry5CwWbVCsazzEb9LieeVZ",
  "key17": "4K5WNiZbFAb6Z6KKGsvVXL92PhvmxjjzNAbiWNtSN72FHjWLd3oaPzdEwpJGuhvnR6bKrE8KHEG9KtKyw67KkhNc",
  "key18": "ZyFvm6SMSmSBtVsQUPv6LmmN1v4oDvp18UzLRK72phxtPvcksnJ4m5Hu1Rk1KrDYCCcTpBf2jobYJg7MUtSzQry",
  "key19": "3NuE2YxxzHZykgFjdd6eUXEjTaBwpY5P3DSKddHmrDcAhbsins8wFw12HEGc6hyrE7BYDpg9eZqzVj6q4hMNAY4u",
  "key20": "Y8DfmNVNomv9qpeBmQyJyKK2KGVmLHN4ob1Q3uZWRtccjdniMHcKPtA1fDGNa48tWC3PFQzsjeTfkGFvBHANxgv",
  "key21": "3siD33PXnZkuzowYSCr8Zjz6TTbGDEaa15kgBqA9QTd5R1SvZARfqTR33kN2cCG6z9sM43KkYCCxYKSUJL5V4Y8B",
  "key22": "9d6E25yjFMSdzBoHYdXXUw1aBjKmrT9WuCjaRk7rUmXg6PmrYFTBpjWEBQ2BJaV1AbMjQdeukk7WNpv9u1isUz9",
  "key23": "gEA6GshgEaiLuHsHKhfNcdarCZdgYHuYMPsdNSFZgSsU4kDvVnkHpdLDgSHgJsbRvXL9ysdxBk9JTi1gw9G3Ssu",
  "key24": "2bZ8rNTYJM2FjZK1GVjBAC4ucLWFuYJBZuAsnaLrWR77skDYSLfxFinSsSjXfkq87jQ7y8Ryip1aiX3fehaPeSeU",
  "key25": "4vfzqpPAix3v8aW7jE9iSkTzrAKo39BsrL5F6zapKFLEUjVsxqBvYKVKekMuLJuLdaE7mWRDQhsGB8Pwq7FMCRsu",
  "key26": "3NuT9jCzP26SkE8idfG4HQVtB8mSyvrUiEn22iDuAcdafcQKtQ38xLgzMU3ZFjExqAnHkW6UwjFeAujk3ATyDWNf",
  "key27": "3X8cNYp41VsESHcbXPATYqATE7x59ytwL4BLzWB8QKvknLgqEnbsNXs6vUxUas42ie6Rie8APoyz4QTioeL3dv8",
  "key28": "2d4HMmkXPD25WYBnMWmYGMBYXCbciqzo3BeEXNjnYbZTocVpS9wHsHo7ZbkMthcqZ95ryxxivbTnSJnCwRSCQTod",
  "key29": "5kQEu6t2bze8WNxPZ7djzS5oMGW4zea1MDRmT1H5CUMUWqfrHUDe13hzzT4KAQ95oqwMC5KWcLC2ZXk4fCeZeMYg",
  "key30": "5L7fhRAQwqv5nQWR2qs4Sdg5CV4wDCHQu9z4X2HAZscmySfgmdqQeAr9sZer3ckLoXtcRi7eWqJ4sfwkTpXpGAt7",
  "key31": "2EbmYZH3PvH7VHwibXdz21FwsRoft1V35jajWxLG2R9c2Ws8Bskh85vFxGMFjZFZNSxM1yhbmefpJHio1tD6Qq4k",
  "key32": "4tLTQW6NcNf4dVome3doemtgY9Ppez8jgruotKfyGnxa6hkpAMRfTa7mQPb1xJ1cqbPsCb9QK4Zyu8smidVaboXo",
  "key33": "4VhMDfCeccXLzVv9WyjyVi14anAxT4AvzT67RNPqbvMb7gJhM7ANYfT2oJVXm87VqXkPPb6BhqgQhJgud5pZ5X92",
  "key34": "RzyUeRcoanoArmZfxm17SDnVLX5vPzg75crL2R4G9VZpKL4o7hR35phaqMq44eKm7zQJxK1UcktDyEcZcF28WG5",
  "key35": "4m3pNdtFq4tJepAvN7aF6Q3Q2MEC5wcLWUw6CJjueCgzNjrA2cyc6JQRcMKQqsjUvoYQMfdkRXAwWYWtUGs1fj5Q",
  "key36": "3R9N3Ab97hM23L8jXyhTfEMDk8E2J1VX8fHcqagGLwYyJHWHhiFW6vLzmQYBThc25Tyq2dET6cbn3BgeuointCF3",
  "key37": "4gL3eYH5ZK6tzMTum5tASH1rJK6M3beHgnBJDSM46h72AdKCoWtdsrUDijpLTh2nx26pgpAjzTSxB3NigZt4DoYu",
  "key38": "3N4Zr5bkE4AB7RCxZjdCnzBXwZYPV1kt8XcKzp7oLG1WWeE5TP8GpaVwAoHbZkDGdsVxLK9hbMUBp8Uo7SGUBoSS",
  "key39": "2unFV32fiWwsVP7cWeUAX7v5a9E6xfjzExykSuH8SU3Sm3jBBo9TWf1rY2bQ5oLA1BiMk4iHyk98U5a6KQZTk54Q",
  "key40": "59xqxXE7CbKNyXPWe5CjpM2hePaKp7p7E9zw8QKWF1ooYtvEGfp6cdhWE2MwjWJ8VYwBJq5ofHPYnXbEV3ZT3KPi",
  "key41": "233CbiUpnmMzjME3Xwoe3et4LDg9cvYwD2w4GvhDCsi7a9B1PER9Lx4PpcNDjqbjUCiWfBfKqPhwoxRrcPeHu4ij",
  "key42": "5jmvtsyqMjAWR1eHKyTVM5cVYYWNSAtghne9AauvPfKkoJBpdYw4CWRwdreWsPjVaLGfung1SY9o7zQXtvwFc1yL",
  "key43": "5P8YAe3ZkQVBkfexMapF663FsuvCVrQgpdRQTisYg6QET59wQGvn8ba3z8WG37c8kuWvZ5GF81DfY3MGTA6uNZjk",
  "key44": "v7sgZV76DBhAABfQuFKgpw8EmKb7NzQTrbW2fo6rX9jvgLcM8PKKvvFPU9YxfXYZWKCxL9nYBZDyRjBQP8wNwnN",
  "key45": "36q2ixfJQTrEqJwu9r8qXg36hjQtLzzdALJcUwUAQn6X5tu1fZLh3ZeK6BJhdyb4wAtaH6sRkasj2Rxg4L6joFj8",
  "key46": "5BMP8oqTy6GExqHfe2v9wtj9WihgkkwAVfzTbNMRkKWocR65frpPhY38U1prwEjkDQfsoRERVxV2JzUcj1mNnfDe"
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
