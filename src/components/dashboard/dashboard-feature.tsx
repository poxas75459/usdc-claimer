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
    "2ikEYexf9op5GdHtacyUFRP4PvZdkV1cNdq5EE4ohTiishtANLYdgLhj2zDUXbqEMxb9LEwkJQBe38rkMUbXb17N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uE2MVDRJy6fGEBu3cuVcWhwwC3tFJCb2LJ4L75e7YbhMEWxrTZiYYoYanGgiWzDLAX1xCF4K9pkkT8rVjQQ3X93",
  "key1": "3yCBqvyvmGste1W3F39dUGkaWq4UhjD72EpxoHVGxHTnSua3RvvFTSkHcPUzhzUrtiPcj5P32AvTPmAEcfcW6mx6",
  "key2": "2shXhe474t6sEMVs3aQxKoHLTGffC8HbzB8mELttSEws6h4q9W9YZgr35QEux9TnLuAWmVg6AZdYsdAF7cg8Q9pa",
  "key3": "5WTwJThRK25xFin8w6uxfHUVGqYZUzAWXawomyDZHX3voCiqARBmKGi2gxW7Smv7TG8f34hHuTv47v29gBPG8niX",
  "key4": "4ypLq9v3PguEn71BxKseymhPWJcynjyepUg61C5aaRm5Cwz4u46kRAtf5VhUPHi8WhNYCToBTQtHawsNtJj62cfq",
  "key5": "4FGNYLM3iqPFLf9viSNLxZbc5FbEaJ4RMPb2DKGCv9k5EQcyEqRtPDbFWrA2a5EU9ChUJNfmm1yJAXGMjfECAipn",
  "key6": "4UxQi4Wz1WuQTj11MME5paG2S9hQKg1jrn7LZMAJZWcCsWRPf6YWAGiRkdSmT9cC3WKrELre1cuLwGXMyaEHWTpx",
  "key7": "3xr6xNNuA7x9ZX4BGWW3nXXrrMdsEBmds2Nk1GWkEWnzFsd7HUAJHaoXvC8GRPNJkv2NAQxnsKrqCUACzhJK2F66",
  "key8": "BVXY2WvwsdpGBBsgxSodYn729xsvrXg5rC51JnXdLUTtEGkXgwH8ZGbMHsyF317vKwquMG3pTKgDTQRyPDGZ73w",
  "key9": "2hLZQhbk9MeNiLF8fD8UJRLudZ3Hj72gixD9ZDuRG4yAPpJQ5Yo9sixnkhBCKRHNLkuw31dCWFKp7ED9dRKLzoUM",
  "key10": "6k5PfSu9NA3W6C6n3wRRJumYMDgMJUzLYSJVubQvrWrUs8KWmjUT7tZaiWTn8ajpEQztuvkHtYh6dZhnNWLp877",
  "key11": "4gqk7hLkpMp6drc8eqiy9YidLpkE1cSsjLhGZTVzyu9LmTkURkSAGUxTB68EdsKUNigKAs6BrJgaA1GRPDUicA8F",
  "key12": "5YvzXB9RmR5hVLbeK1nNGYqkUByM2Zreeq78qsyGKKkaGdf1aejBD9S75daGXtrrMgay5qSQbYtjjJaV6oADMBRf",
  "key13": "5fPaMRoybaoQXvqKLq2VLi4qwcV3S2bJHaT7UrtsntJiv5aeAcGpZyQFQr1CyV9btz6dFujn2UEg5zdkDz29SAa1",
  "key14": "5qnXNAoUDPCAmF77fqgem4bknY5HNLu1bub1JXTYozUQxsBwiq8TL1Gqm9Y8u98khKD51z9daUQXjdV2hzm7Kneo",
  "key15": "26yn6jQgiA71uBqqEx1BFYaDS9Re4NLjcrJXZgXx9HFcEt86nrUhZAxHspiViHcxvg2Atbse5JvRJ7dPcpTFU1Zi",
  "key16": "66M4UF2eS5tgE9PuT9DdtVKdv425qas6oGkiEetxpZRd1MMfixj1Kz4zR45v8uqqk9vXgeGJ6ZMsdxpqyjVqC8FR",
  "key17": "3rjQDRoDobouGt1U9NnniLAAYuBJ7Edikwvv4g4eDU5WPcQKAxQHgVqS4Mpygw3seWUREaaQXRuHQ8meXrSD8Hmn",
  "key18": "3bKqPRQ34aZrstaVMUgsWUtMbmYdwvoZD5R1BERqULehsnXet4SRcucRgN1KtpQYeFJ65YZucjR19eXo2H6YAnjY",
  "key19": "PU9azKDmaxBBsvDPMDi3U6ugcg8oRBeUeHv7WKDXu2iEvXWwFs8KFSECMq3jYY7bCHeovV57GxrEo9dKoxkRvt8",
  "key20": "hAAPv6eei4ouvuGVqbvdXdCgjGoNh7YyxofpVLmuw1VuzRt8gDJEb2MwtoTk92feYRbeUjJJWdxPcBGjy4T29Uu",
  "key21": "5jAdwpqpYMfbkAXEAtmnTMWyVWE5yEDoL4tm19Pi29jasHn7UQyai4Gux3x3kQvjZNUQRnwsepKz2PqHZsgwesG4",
  "key22": "36LNsaexMuZgzFkPsyUazayd5MAcdCvPyoRUoC7Xy7HvP5YWwBzHVdEDxwtqNQpyAQyuiQkjh7wfQ8c4Dy7VY623",
  "key23": "3MhsETL7AxgVfddhmCsZmbFBYks9DzA8R5MHWLdExfe19jUy1t8kQCzCk9kVgKYr1RsJvgaeqpkHnLCx7mVLkLi8",
  "key24": "3CpQiwPYKTCv9MWEfN3Yte1yRiWYPaoLMFev1HycFeuDvm3yxUxyvGi7M1fbUTRmyZMnBfAnX8GLSkSNQMrb3yy1",
  "key25": "4aGygMJs1zcJDLHJAqgWLvrJJi1oDD4s2m48mwV6sy2nRUdMDzWj3jTsArikvoZ3DQaJKKPhdvfknHcUixhY6Jju",
  "key26": "43ju5oyr5Be71W3qhfGYyiSeeLz8wrD2HBkHgXELt5cG4oJKHNEZQAMtt2AsF7uiqmN5HD5Z1f6Den1afR1CGHAn",
  "key27": "6TXVbdKVMnuG87Hkiy2dduxnAfXEXMFBR7L4zXikZDHa4aVPivegEAn23BjS7UsRZtuwKaxFMAjCVKFBDaQeJF5",
  "key28": "31LfYZVkGcgZwfYEcWngmGvGAxWXBDv6KwUKkQESftqEMJTi2GEs492YcCoZiiFo89TJ8bRKnjdhDY8BAtuxuHL8",
  "key29": "3JxvF3dVya9Nzqo8oKxMTFvk2b6uMCk2TwFTR2RuTW2Xh73kSyJkKgu5Hawe1wXVTYz1Lzx4h5i3H1ePBAmrvU6X",
  "key30": "4PranZmWc7SsYZpfNVRBRM5Uu2EGmEhFt6q7ZzaBsCBfnFudLLkPF7GgQpYMHW8DacXMgbi2vD9pVS8BofwHauKT",
  "key31": "2MA2wXg6zjkA6nS7f2HN5quwDJv3i8w9NqfFQAwCFxjcHyNRhbzaemJ6W4Sjbmxe5MmqtcGs4iCWBz68XpMbWgoy",
  "key32": "2iJMvkjSNCaMjufM4jGSRL36Cr1JYAJQzgK3KYv5ByzBNvad1uwcCrUEuPxz3TTKJPJvnHUrENAFw6xtEjnjnMeE",
  "key33": "64o5UHagABLE5M1WUDnNTEzLw4NXqHzwcN6JQwYBXmcCrSyiBoNouNDMFNPEE4QZbTYw2ez18wqgxbBz7nFPnox5",
  "key34": "2f3n3pLTEFGdDRhVtye9Af8HNvAzoJd9CzKTKK5tnv5UTJXdaanyRtEWZzRNDVvqwkCKom8wWmRzLJvbu9jUTFcK",
  "key35": "oKYSrAsD4KPGaxWUKHVPTxYVRFh8Z6rxmZP91njnFAE7dPzRNgyuKmv9NtUZD6gTqEg2s8Kx9jUQfXEPzPrXhYG",
  "key36": "4FQfbhaQAJrouc6rwsULNQsN8TWdMjy4aUSiBx6re9UrJsyvG8PpMvEag5ifXbDPLfmQ55VRqhpNZRCvwxjGJCex",
  "key37": "35gphCK7ZnwRFTpy7JJjoZZQTyV4SxRJCzSkeERc86JfmYKAnZ5Pgb5u9P377hZDrtDJLvbbj6nDiCWmqaMieuJX",
  "key38": "58mDkwk2ZCXXJc3Sj9Qu5s7D1GSu7qaECnJ3LCykmXnovohyxjMMSnf9iWkeQtApDCKGRYbV9uhZWuuwTxRmcXBG",
  "key39": "3sfsk7FQUWHsMPR35fp8dmf2GSRUf62Z5zhwMgfpXj3Aq1VUPz67DDPLRBdKZHG9pNZ5QAV8tAhc7NCwu6QiN77H",
  "key40": "3Rvv4kvXkr8p2JTrciciUBTyhgCXPgXLQjKVEnGc9BWqudvTQQVhVD7BpDTDzoJbtcbaEvEE69FsSpQnQsaxQFja",
  "key41": "58fnUmMbCZSwqQ1sYDYH3bkrTp8kj43TpPZWe7pkKid5gUdjV582vA4ubQ82uE1tPqyPktFXXtE2KBZRH6bG4MP3",
  "key42": "4JsLsXW1zeBaEAjEuxA6K8xQp13DhLW2W44rjVX7KZ8STNUC8mckqRTYpkjdFRMJH7HS8M4na5CFxdqWYEyJsXeV",
  "key43": "qqs9VXmi6THem8DqKi74hpJuRRJsvr7vnkVdZcMarNHKktvHLT8en1rJTnvZTsEveNYStP1UqG6LiLaoVXQYN5o",
  "key44": "5MuUVCTwVenBakh4xx9mQJKZVq9vJWzVmJFWeyG9ZEoecR6x1vjNVT7A2RHVSnsXv8T37cREuf8FNh1yQQCQVqrK",
  "key45": "2PPaLGpho9bE3mx4sWr361ajbzo9HyAQDGd4VomV5KVyUFimyhPYStvFhfaiGAGP5849jwqGHSDkCntXcPNwyfsE",
  "key46": "2AGTxBT8BZPRXBLTP1AxTFyPJDBH5AfgzttHEA56QXNEEmj8hzbuFc2jUMPani6bNE94JqGwk2CqoQgw5oj7zz1K"
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
