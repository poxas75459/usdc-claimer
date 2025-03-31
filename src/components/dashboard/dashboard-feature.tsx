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
    "3XjNeoaFbRPjX1EiP87k2MpVZLm2gPMak3X6q8VoBqWg2E59nrdsdHWa3KXydnteoSMvRgDXRZC4vT2cD4ctnTL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdh3u57LPSMTHj91Rc31fxV9NuBTiwC9F7v1TLGQYPvepxWM2owiAt2nQJ7pndb3n1SRZWhQYUgpNS9mkNXez2M",
  "key1": "QkiCwZDf6cVr1qddCaA8x9VH3Av2wZRikoGcP5Becfdu9Zi4F38nJnmScJYenUCr1xQpKTPbNRyqvhwfoYxjWeo",
  "key2": "5VfYhMfSuhfV1GXuXDZMsg46SXok4d9yAydXysTLqVDU1tkvM1TfCf4FGmQ35FMpZDmn9RERzWUmiF4E9FHFiwVK",
  "key3": "3qfMRkJ1etvirfxkc25YnYGsaxhUs2hGYfCrMuAfx8AQMkrWWgzTz7Keb1ujqBmBjenuj6CYweyAaFWEJjBeEoQR",
  "key4": "icigxC1N4nsjBmbnTLSdqTFzEy3j8igNXJ5cS476E2qiS21txoV2tg9J2FNX7zjCpjdUEiaxcad3aP79XmgYNwW",
  "key5": "2UMGPrmEnhCMxxKeWgxk9qSNLn6yVBuqnwHBKpedyYkF2HvdoDtGfzFFoKueVrq3RMKzxvEsVXcDe8ZNENTmrG5Q",
  "key6": "2uL3z566sRNrB7qmJGKgw4SR1jscWmERN9CZoNzn3XxmAWcPmDz6459o2vF53S5QbsFR4wykgyy4DG1d1qqXq1oP",
  "key7": "fte5soAp8CLqFaFuUPw2Wn2njpwy9tqNziatqztwRbmv6T4zUjHSyqhWvnib8juW8U5L2YWdqiXAjnirfoNhTcJ",
  "key8": "4LCxiqkCLeZ8paBRYtRFDyr6m9u7iVxPNK24UmCkYtPbLcgiKogfePSexEuWWLSGBQzFFqJcasrzGEtvwkDGScwR",
  "key9": "32u1W352dQrJCTLshUfjbKrzLu8h8SnkkyvkZFojHrLNHCLSBUtJwXgtLQnWZUov5vX2LvoZNQCfTtAFjJp8VFRF",
  "key10": "5h1S3h6YomAbtWuHEtvinXGXGLRLBnvmW3VEkEwVu3aEGcCxcLNkc2377BduxrwMLYGpfXAKekPJRRpnfspqmdAM",
  "key11": "64xonwy61uEhgjP2cTmkwZLUKwXT1s6zUyDBJXqk6ek25eJ3rif5GnrkTo1EENBEcqmCxvsVsDFfWSHjCQtFjGWU",
  "key12": "4VzAQdBj89GY3GoTfhcSQaCr6bjVDYg1nwi6bAqX9LDVnS4NuSswrX9xS7BFCuexXTs5H3E9mV4LYw6UNbCs6umX",
  "key13": "4AWHGjLxt7fzpzR4ZREWNqN8oCDtuxSvFAKHEhB1fUoftKGGQ9Ks69YyZdDMSgvSR9VTrqiEjaejvYnMc2yu5FBg",
  "key14": "5Bry2mgX2U1ycHQ5XBkBXm1cpeetzkSDJvaPXwS7XedSjEaHbdyAERRbCgMMerdMmjeTYtG12x41VHwX5pyiWr2j",
  "key15": "5augSB3fgGTQc4HkdhRQNCDvwQ2kjdj6sgZLTSnmSa6FfZ5w4gcButmFqA7PRoGt8m8EszrJfiKNisqtS7K8Dcf2",
  "key16": "3ht213vy5RbtK9oSWv9sC7VcRT6r2HT5iC5QhMuVEm8FP74J8XfeNaqb46ck5ecSPjYkf4CuE1V7VEUCe8dtoJTh",
  "key17": "3wqLR13d9t5cZw1cA1fTX6HmVK7LTBsALf98PEmxFrGpq7ewhxV7n6iCPN9gAVzPgegwoPuwYyMnY7JywFLT6Juk",
  "key18": "XTbvsGtbyMvfzVfGZenBerr1LUPdvV3NgnKazTP1CLGFJ7XgnrXugJqFVA9RBUyBmJdEorw1TGubQcym6PdxaUs",
  "key19": "3EytFB6sQxxtuCnmCGBuRyonBrUQN5G3uxudxdMzkqKjjf3G9ZehR5uwgJnuL3DkXRVSGC8FgPyesqHxoNbJhnjc",
  "key20": "5Te81XeGHcJtW9q783qhZXjkW1agYs8kcpttBkKbAZPhHR4ghPs76m7Z1LqogC7Mz1qA1KEGJAxh6Wru5BFh194r",
  "key21": "4vdZebUX8VWzn7AjtvSz2tioGxCoracPTkQJZZWZQmPycQCr9fZp1nF2jgeywrHPYkNFRUo49cRmsdssJ5bzpjPx",
  "key22": "4vCBE2kmePFRNT1uoJ42Y5oAqUi6XEi9wi9FfWfZHuchmmDQ3K9nBKFfJEKNfao6AzHLH6DpYrnaPpbBLd8VihJd",
  "key23": "28ZHxN3eMpMg9sQZfxBZE59C64jKQEY2TsvqhBa2TiYsTFbpLfB3rZ6CXGCHV1E5HCaVW8dCpcKwr3jY817z9FjE",
  "key24": "Q5RZ7s7FQSnaG1vsGTTXoiADzM5BnEwYNcyTnN4nKaJ5Db5ckjKbNhkLJghfC6vHcSVKLvX86jHQw7UhusNuCCy",
  "key25": "3U5B7zQZed13BhQCKhdsY1RzB2q1HjefxJU65Fiax9PXou1x2i7yVaarTDoUik1U42EzLN4yZ2jWKHjxePK41nsX",
  "key26": "1qprCDhaxAZsLju7EsjxrFXkBNkV6buPXNmeNmvCFbho5EjEPH4zkccypUBerHWSaNNT8XokeLZd2mD68M4ViiB",
  "key27": "5mNFVkDwH72wTxS38zZGs9nKevt8GBR7CVjJDUVwuFSJQY4noS3PHsSzqfKg47v44943kWJSdab3QBj6Kq2P6NP1",
  "key28": "4cg6fbpe7V3qsdpRCu8y4jgm2VmHegWf1vHwRKy5yjPj44Jhvg2TS7JfhiDcubTaKH79egfnYanXLGPMU7HHyNzf",
  "key29": "2jcz5zjv2CtN6aCM1PiEHwgKEHt2BLjtMfckYReX6sjkKpTwyKArYyFpSUnewfeqQp1Q28fp3WdXGP2b6EtJfYHd",
  "key30": "1V7hSKkGBKnA5iJKVXTn5bNX5BkZt97x7o9ZghcKwGqTsvFvrsu2YtqJvSH9gydXiEuZYd8gUSs18ktXPRjdeA3",
  "key31": "NdDFanK3CzGTodWYic6RhQdPEcygVbPSinS5FogB5BEiXCp8ZFzXdBVi9HFdrVNZZwAQYaU6HvGZMAWAKND2rG7",
  "key32": "YyPvwN8um7QGL4MgJVMpDCYhgpBDgAa1WBbjU6G3PjvPJVMb1iTULL6ctwtykVQ6Ght6T6TNLTheaPSoYBNFW3f",
  "key33": "4ptchkcUiGxv8VD4iqe4wLbv8Vg5ytd97m6ts4bDHFyBhcV4zdgqaHNdgpDYYTEdTwKae5hL1cZje2Sz2RMfQ2CP",
  "key34": "3mDTctmiMGE7JbNNNy8jDy7h2EUkJ5PfPJzmy9a4pG3psMEXcU58dq6N9fEsLhfkatJUuuTa73aK1cyhQtu6fmHa",
  "key35": "wzQ9xLmtv3PonhovtDnpEWfsNJgyHNZCkLUt5aZhs8bLS3wS2pm2dKwyJ16pk9XxpvCsyvvbUn6q6p7V6oq3XJQ",
  "key36": "2z4yMunMNPcJJEbrvkVkBXzqa3h255W1NP6nfPddPQ5wAhEXbi17nRsvehonXjFJLGYVxn5VR3dWHBfS1grXT8S8",
  "key37": "om3mdaSHEKJvHATpAzZ56v81B23DqENweXBPw3f3iQxPyaQ9y8wLgAFDVgpFNLjFbT2LPLeenmFvcueUjuvE4Fc",
  "key38": "34bbiwDBwWky9JVN7MAVJi8SsqgWBn61syqQEi3iXmDjGXPMuekTqiZh68zeYyS7NdW8zSGdt2owzCJJasHVWMWA"
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
