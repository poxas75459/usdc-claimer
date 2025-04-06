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
    "3watjL5V2DSXNtpJQw7okdoJgWTjjX4ZGvRAYVKkrojMdFUBLZrnD7Vw27F12aBRB8GpyQB4CJLnvD1g2vaVmKSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349UpcVb2j2oFAr8NvxijbFSoWoCQmHG4r2WJpYfxV2YT1E7CNqBk1wMmHzECoKAYxAqzFBE1yAKBqoNfCBpd1v4",
  "key1": "4biptq1Zs3kEwWz9pWge4MiZNP6a9LzGS5ui4HrqtkBLR7DFpbdDV74eywhfMr1pJ3c1LfuRrHizWyT5uF75W55K",
  "key2": "3MdHBTHsMvQpHLhv19eA9Wg2o9DdB1rAc1i1DSKBcAgm4UtFLAYWB3B7kaJQZKMv6C4UtfzYR7v3sB5pLsxTek4B",
  "key3": "2pb7UcVkLxccJSBUZnFhv6C6MxebnPmKda5pfXe1gBC1w8UB2xkozMyo54b2EacNjT5W4AJYKkU3Tu8GLAvJkVHg",
  "key4": "U8J7gJcvZJtNhMtLKwELEhLT9CtgWGVb9i7A7oBWREShU1rMwv5ZWTTQX6rExmxhV8vAHm7aWUyEBJxiyfwgo7a",
  "key5": "4rpTq7wu15gBYsztSAybCti49j1gQRjT3nSqTUXYuGq2NkPFR1ZyfbBPquV1DcEBqngLpBUWhEG78Pix8puAJLKr",
  "key6": "yy9ZysTY7zo4K3R74DP71yr72fU15afLTQBFs274ahpGxV6rHGkUynpSzsiMvS5gYyqEiRf5ZqNoK6UYTRsVkXK",
  "key7": "2HcLcSqKQeayRuXsSxzyTz6tttH7v4J2gbUURrqryZQwkcX8iytnRu6NtQXrLHFQcLKA6FmhAtTA9bFtB7mPr9YE",
  "key8": "5fK6Jrzm6QEX4DUZUCxh4y1ed67ju79HritUyLLq1f7RxtJR157rgvxR3WLwxnsfA3JK8RcTC9RqMjuiQNsHUpDd",
  "key9": "XY8zFJ7NPE2nmNeKoLacfVqJCLF8wxnFqfWwWu1cueqG9LdpBqHRDNmWMG8fpmHJYCCKNs6YG8BNXu5oYuNXm98",
  "key10": "2eUzHvBGuWAynHFhSxGU5XTMAV1N6p8KcTcTcWeKJcvaR3QBADwRuiEUwk9fhZzJYgj3qk1kMjoKcqagQhAz99tN",
  "key11": "4HWpLZKC2KrsZhw6XHzG731YdBNTqji3KALVrocHcgKPS8JMtBbLH1qbfP8fKbNAWTGDJ9NXCwn6w7cSQtogYrT7",
  "key12": "37Hf1kSKagUyXRQB4zQR7t7LES9BkzqKnkeLZETFoD5fcvggsPnwD5Wa15qpQxy9eiUz9kckMJAu1ZmR9CExXApF",
  "key13": "3zoQ88taKWaiNZzohiZ26uKzX9RZtXZw1crSKBjdzxBCWaB7sudfesDRca7JBvDKPP69oiFDUV6fRQYrz6CrwSMU",
  "key14": "5U5NYUTyUgvo2Z7osCLMozG4yCT7u9tv5Dkth7zRm3Hojmj6yapmrv2VjMKRZeUVYugybfaHP4sPweL33fX9iuDf",
  "key15": "3HKwxgcUm1ZYyJwkzwgtQmqQArY78rT4kiJ5XjJVYWHWwMKqHuCKGNVy7w26ha7hfCw7PUTkgwPeFQ3A2AE4PFPM",
  "key16": "3KGGgW2W2itKkrobgUP8SipKPCSwcFsfQBmSLHHpp91d1fjTrsxtBPhZYHTpMaaqZp51dwQgGn5TRGYBansFrSJZ",
  "key17": "6RnqspDB2Vu9szHVy3PRs5THwXmQURa5ckmsBJCYCj34e96CRzCqYq8wv1oeBv1C72sQzQiADcs5YwPpcpupBM6",
  "key18": "2183kkJXP3YEegew7uMmXUesReWJrKbgcYhfPjvbiMn4iCXYM2tUyb59UAqQWeazw7W2mx6PRu2qrBhM4eqQ3JYx",
  "key19": "RMigcqyzGPejwo4SemQn558CFnCxmYyH9mXUziPr8NGyRSyTFrXWHvsanHQSwh3wof7mdsP3AtmTmzBPat4EiZV",
  "key20": "4kC3h2DNLM83BNAL5sDFpxbwRbv71Ae2wtR4kQMipd73gqh5zHLm5E4RqnqumFsHcrjiPyEphSe5qvx72XQQA8Bp",
  "key21": "5mSuebvcUvXf3HGe6r8xL7HbDae6QyVMh3VpNJS7VrAZhZ7dnLbnxGCzu8XT6tuQeqZL6JysAntzNHZtDu6EJDxf",
  "key22": "4ZjxuTjiDgpzW42RNNvzsEXhDBefvfa1RKY4QpdcoV3TbdV1sFvGHxyw2U1tyDtZoGYQQCWBzXPEJgHLyChkV4jq",
  "key23": "5q96KNKLh96fCNb6UKKNXWB2ScajbLe8bvEhqZ6Ee4DrULsbwo2LeCdHNE79wZg9YH9hHYCCwnYP8RaH6wi18taV",
  "key24": "3PAf4znsqeM17BJfTduvk5WeGJzqVLfwTCcTna8UdDgDhhbJK4QhdpD5K9HdFWGpmhjM9cSmSzjMJ4nz2MmMRS8y",
  "key25": "2jDuXYs1Rruo5ynYfr1duT1m3JzrTD8BvFKYw2p24GHrbhcvsLtvpsv5EVFbkynzSN2sedB4pbFhGB9ingYWz8n6",
  "key26": "DgZmYRkNCxMBBvP9HwRuAaLdmKgDzSecAAmFUnFR9hMngEGKYjQRzzhyaLnRgSbfEtEo8owyKf3QPkDeZJ9MaNo",
  "key27": "4ZqAjPQ97Bo4sNTprAXUP9fHhx4BiizpHSv3HkTPEs1jxL8DomDryGzwm1zXyKKUeE6RMdUyUjjbqvhgAd8M975L",
  "key28": "tDD64qPH2Tn8yBqZbV5Ee1NdkktAPBMWJC9Q289chFp9hByQKjm76L1ZZnnx6nNkkKPAfNcHEcUPWAQbai9XXRz",
  "key29": "3iQGqPQ9Ka4QTmBBT7VDGbV865nDAWT5NtZZ9XsnN5xWqSHqJr2ufjqKvmtAjgoXWCg1WGtDJ9JaUYTvDGxHaHTy",
  "key30": "o2uvKSNrAKLBqudicA1cchBfzxX1TXdyw6cLR3MrRiykGqKsAfhPJaZQF2ZPpUfDXk5Y4RUzW3svoBEfpDsCByN",
  "key31": "4f51A45bgxRdfS7HBDr2zsv923w45HJi7UAvJxLKbDsNg1zGPHtqhcJ3VqC3FoeGNymAN2kT4LGcmLkkHzsCz6h",
  "key32": "3tuYTSP8AhfcwcWhcss4DL6KLTCuFYQ6KEoyE328ReqaKQJwW9xatRHVvJRdXFhcSMpu2EFrFLHXuqvXA9U2RXwm",
  "key33": "5YcfQkPGSNmkhiwVDdCXwpjN9T2YuwXnmUGBVAXWBHLUVcHEWHs7Q1VNzaMt4hCrp15ZgTWHDbaBUJj5R8HJWF9f",
  "key34": "zoLBTdYExpZJWKtWadM3S1reb9WFp9MmoVREPuK1XhpWGeLmQ8YPEbmZrUeeqL2TyQwvga6STQbERN1kYLqSaWa",
  "key35": "3XuHFQ4PAXMtrko5QdyVvHdzYaLF2329JEazDkLQVfNi7gP1cPSE4CXP95i9tThtDMokBJzQoxZz4HsWDfZnNgQ6",
  "key36": "3X1HdjLQwcqmQEwYa7dpXvDcCW5sNkHMPePNQpijSxMbsemeZuRw2bspLcrt42E6ce46KKP8pSvXSGVk8CUXhiNc"
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
