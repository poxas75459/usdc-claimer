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
    "GwcZMSWpisSvw9prWd1Ku8o8mKpVzAxHZzbawzLi4RDDRezUF6pmP5sksQ644TGiWvudViDMnvZTikA3m3r2viG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7HtjpBVpn3cyd3rPeC9B1WJoqaMMhP1cGYNDAPgfERWBK77hXCFyydg92BdMFfUJeZ4FPp92TZpkVm6r2nfpKt",
  "key1": "3HBVH3Sgh2VymZ1BwP9mFZRnMfXWMTxFMtyfi4fjkWs3UwekycsNpfMpbKNMNmRrbw8EUty2GjkAhnvw2cSeeAjm",
  "key2": "P962Xd9XkfjwouythLMxDmuWo2rfZEHhKtXaGYZYNfr4Pbe3NgGgNmQwABEz8eHtH15r4Y2XVm3i6uCaWNxxpGy",
  "key3": "4Q7D6QHakwPxYKfgXbk5nwyXz6nW4wy6jTrWQsXXvSjpk1HBXFKx67KsNP1WPMutwGAq834dT86iwuN9eCBmCGrF",
  "key4": "5cGHSBx2PA9iiWzFW1Y91Fye24j5PmzrYsKkbxR8K3nxRhar4Na6q4MproNNUiw4Mjg1YsKFkJCcW4b8uogNqtMG",
  "key5": "5Qwmy8DiyNsSFHv6j6256bvW1H5oFC5vhQJeKsWrDGnfCNBjq2g6vpm749vqyDPUwzHpC9d9ZUHAHkdkWVAEhSm5",
  "key6": "4zCfnZtRQf3GLQh4w69UjUAMX5D7Vw65Nd2YiE7RCV1zTAsu5DXH18n6WTeURtGk188kXMy9VgnQm3VK3kUXLfaX",
  "key7": "4HZ9bi95AoscDawHCUJow2k8Pma827hudPcXAiVxLcpAFkkse5a6TUfogGmpSjQa761AftFBsuxfYatVpkD9qdTE",
  "key8": "jtGB4zSdK91bnfGKyEGxFcgUDmFkTWiNfpmZnXVWXTs9nfdP5AY2pAwUXrXT7N1xFMYiKKjkdCD9y6v5mB8N9L2",
  "key9": "2QrrLTYoPbRgafar6aSvxzJuSxSFeugBsPSzwFVrjAGQq6BcAHNHkkNxeEVA19qb9PRGNbAZ7JpbLMehmGrouZVp",
  "key10": "2xbtrUJFWsDKBooWKFQJxbkLYsiyYKKS9aXk5zYBi3BWg1TFCt6HcreEPHPFUHnqZ4zq167PuuKGaxJHSHCTmLzB",
  "key11": "57L6n89PA5vv6W9do7SJTyQpKLttGb5bHLTj5eas3YtDUCQY8zp31N9B1NKfoUXnGA4AyajUr5AUeqmZscsEAJoB",
  "key12": "5omUCGXSWXhJhvQs54mtUcJKHqN6nUcuk6zv9offSXKaXCDAA3Fr5DHDLa4QnM1CTCHyPA8TJ2vFF2WQzUesT2Hv",
  "key13": "5HDTcqBXHLrpRVng1sZZAMVvHRhSJdnMy3kWXBjw37oPZ79BnT154pGRyh9udiDm2LsLr5bTtpYgWxzSvXHDnfDx",
  "key14": "2mSWdGnN1h8kQJ4b2YosLnNo12taPaDqFHCHcmWQ517r32SpJH4EUJRrg9mmWJQAZ69Th6gAdCprKX7xAbcdcv9q",
  "key15": "3iu3mPac6TpJLQQzC4KrTUU8TGwY425joU3ueQjmtoo6W9QTbab3aeNuoVSRWyHxgRF8jyNjhbc7L8ApZJMHDsWk",
  "key16": "2kTZpkHiCnTAVEsS961QsTgicAhNcaSQPb3WS5zWMtPG4rRX2u5PEct8iv8SZHwXZNU7D7TQH2NbCZfKVsLEzs2d",
  "key17": "3uUibobGAoizMPuK16EchsHTpJaKjXB1REs51jPkmL3rCdWFysSc4hHUDSoEy2j19cjxRvY5hJSoSr8Kj8XMimAz",
  "key18": "mB8Vf2Zg66hZqU75MLnRy64aePTJ4mDADTsEHK6MxDUPhQ9Y9fMvDAMt4kNuQyswdiKj94QjCtF8XidHmjoZVsD",
  "key19": "3YEedUuSmGL2SPoMMzCpQDZuGm5hEsxwZ8Xa7L4kThsmubseCp22vv5KFFZzXc9AkXUU4u4eSt3gXnMneA423kkK",
  "key20": "4cU6VjBdaqHtDRP45E2gMmNgNTLdZc6JRaENjSYukEFBQJj1j4WcLPiqsHHx3BcV2sECpFbgCLZcZm9RZW6c2SEt",
  "key21": "5MgPr3GYk358wcWng6ECcptuDgq1hEL4z3zrCnkx9Um7nKufU7wCUBGAmFN4YUKe1QqCxw3fUx334gsKVWHiwEBU",
  "key22": "3XaSBFw7UJvFYTySYEG4SjrNUPirEVY4ye8zxjtryqXfZftoVuzyHBGM95qgdYF4TS12wLoev2tqeP4ytG3PjpmG",
  "key23": "eTAXFcYAodjYiqsETqv2AEd1gePqRLrYR6UH5YDqrCT6mjYwMigDgPWKwiPEJ6ZapwnDfnPGpHjrpZtudRa6isD",
  "key24": "5QmWvrtcogJMmETZcEBMf1ZajhpxSWKJtyoCh4y1DLZG25b26pc6dd3fAErMP7k49Z2yfAr744Pv1He9RdkhBNrf",
  "key25": "2QgjpHNjQ4hm49MzMRDmBNSWrfVVP9QTb8PX1B4Wpmz71oytyFuVDFZfoYk5zyctQeEHmTXp8SXPH22sZyPa6nKm",
  "key26": "2cSRCJ8ki3w5JUjc3RJWvz3nNhwvhTGaJAF7mLFtWk9PUTDWDAsc6XDTAyn7Vkqo37ziSf17bjh3g3hdn6tsuATe",
  "key27": "5ZMmWT9nojbvvcbiCXo3k5gvwPTZMzuYeVDT1nBEUw4k8euDGbBcQru3xZGt24BC7gE4zyRCKjtBzYMCEfkesVXF",
  "key28": "2n6uHLaRhA2JgFezrbVh5zP7zdiXp4M6C2eakBcjwYc6VoE2RXwfc9jWXDUiLdKRTZZdA7yV1ZBsroAmjGYKS9o9",
  "key29": "CC7LhaNxsoAjtC6GrDfaefw5epY4248MTt5N7uqr4bYcXrJLaFzxeLWiWJHVp3ZNUAcKiFUGJLqLUKCjNxPT3Xi",
  "key30": "3szgJTBk6XtggaxUVVQJMqSSwrU8eHRSvNhgFgqVfy5T5KAjqVbMFmFd6ftipZ7QM3kLAcjSHYDfktoBnMtf93Ko",
  "key31": "dDW5SaF7ByJkgAeFHXYLNh29xNv7W7vr2JwAqNm3ra6aRniRdEgco1LTDRKNrjGESLHHkqurPgRuqkrbHUeNzaP",
  "key32": "534SBmdS8nmQex6fJzkiDhQz9F3ymU8Z3AeVFmmRhBG3v5w4LhTtcZL7UggGgT8cT6i3gSNSsNJ18qrFm239bD5n",
  "key33": "3eMPcCVNpNuiS8sYvym41H72fvF6t7XiVaQpGUA1KQ2r7k8EcMUU79vfaDDidY2AkEywYs4NRQC9m3mS4wHGYigQ",
  "key34": "Gqg5dXTCoKWhpgfE9kZ4TwQA7mo3fbpeFqK49wS8fB6wLL7yXssNs1Tahz3RZKK5v7nFw7Tu2XE98AxrNisqa86",
  "key35": "2GPTjk42d6aQ1Lw5jK4JS6ZiKSwMp1WBqijtAYcW6tw7Cis2QyXJje4kVBmNE7g69nwciUezb95RhBTMWc8EGvbv",
  "key36": "3AyciyywgY5EFQWY2HgBxudG8b6Vy2TL3eVX8Ad9QSLkkLXNAfRQPtG5YSUsHkTjaYm5m9Y4AV2mr466DS7z1RHi",
  "key37": "3c5K78T2HGCeEJ25otdJuYUEQfHwUcP94TSCcYiVRv7umMjKi4MQ4D3LyWZiQBsDPBTGrVYygCB6jZWpdaWEAwUZ",
  "key38": "2SVPGpxToZGXatE6Y2SzZP6XzA9eb8jVAcsmZWVwcPaC2sQTLRqMNN5qywGxSdkMUKYxx3CxjPt7ZFEwZFaY9DtB",
  "key39": "V9UzYRo9Cq2oH8XJv1bnWmYhvRXPhhaf3woE3x2wgFcYQoRTPrgA9FdTFe2iMtcKT7rAXuiyVgLF7Ky9jsMvDEY",
  "key40": "5iUanfwLYpu22x11H6sh1B6aEwa3xq6bT9qDQG6H2u82nKmbUdZU1atz6cutr4xFK92ZPWCp1RNX6oBijBGEuit6",
  "key41": "3KPNUxRpjEPnG6tDVH7yUkvabrDtvXxDZz8KRa5ExR2wx4N6CszD4vcshB8grBt74DAzoFK2RgZ1ghGsbJWaKRmS",
  "key42": "3HSqpYa7ujwCiLY49Vwjnk1DkR4YGFWnxzBstN8ShnzBgBdYCTGJ34ESSTcT3tQLB1JQn9jRFK1nZfo3oDZFNFVT",
  "key43": "EWPPTEMFcYczNUYqVmd97QNHkmc5QEUqrGw7rvprKRs5Rx6y7Y2y7EPS4SCM5osntrqQV3bSToJEaXMQgoYf4u3",
  "key44": "4dsTxVqvp7uWiY9ee6ShKKU5HNVv49p2voVR8Cz2X1BEZWP4oVrb69R6v16ixGV6uJn1zs1mhRwU1YuGaiMZVsek",
  "key45": "3RoSro6FEb4Lqg2ZsTeWhuxtGhWSjFwDgaFiPCtSNM3b3bTy2xwVb9thTwBQP1CQ14YoPxamUwk7aJi6Kz8PcZQF",
  "key46": "4QCp88Ky89VAN9iVsNx31QMCtYtjgzGv5TmgiAyaCXeR5fkRJYHH8UiMc3aTA1ScZn5xWTr3KFEFHx5TAUmV1JPq",
  "key47": "5N3eMLqortBbBB6fUX2Xa4WeiuyqRjtPYYdDeBagCSL1Sen5vjJNzYsJCsN3KWycPJ9eD2kiAHgJuf68PiFw1uHD",
  "key48": "4V2eokp6oGgzQF7Uzxwe7GYQHeRQZn8mApHDHLw9GFE7rG5nNpv7QNuqSyexnxns2RgzeTKD8i1UD6oVm6A6ri69"
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
