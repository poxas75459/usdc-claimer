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
    "5yrHnFhi4xKY3RtM1zCB3W2gAnpG4TcR5BN98uL65djauRj8cK8pEsKGz5nxKrz8PkUcyAQXjb2MyFeftYV6Ze6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4ZNNTBDPpLNUjoFBMfcEHsUA4m9XQGi5iBSBETy4GkcSbsagYwNXSjiNSt6RgQY5Bdj9nxGLbjZYJ43XEDhSSE",
  "key1": "ESzb6jTuSdM91EYZqtoN6ptYa2bwjui232dVvPyaNpTQF4s6g7UEGmtw1XWPojC2aC8t4o8CcKYUAJVXbGgtKne",
  "key2": "3SnJF3NcEna3L8K7yEws6CQFJpiwLKzBHoTUijcXTUvFLjBq1ntFGrygMZrWaKhZT1MvxYUC2yWG7WbGZdfP9bB",
  "key3": "3nxJtFaK479UKEAq7D6S5er9JtrCD8dHE4UkMsWpv6zWKNuJt2c134eAXgNY9oQrinoG38jMtQkUAW38JNb5azmp",
  "key4": "2BNSLgTKyrs4WNaYMMvgtvhzWapwPpqNknTrHH6TzqCLskUPdcSLkmiVh4GcoLWnpH5ewkHFjQrKjD5E4wXCWZWi",
  "key5": "3VCx9xFBnBbCiGB28SxaTWSiktTkKpUMgpshSZAjQLYjc2EAKaNXhe9uSRVGFo1o3as41GMDE1CKkY21r1V5mGS",
  "key6": "2ZeX9r7Dw4mhtyrB7YqXFWTm7dCbBZ7VXyoCR3iq3Xq9vFnoGjhsnpJWnxWGC6NysYkETqMFqzKzVNyGctGR3yDK",
  "key7": "4CPkY2Nz2vvNzG4CqhppCdA2TdA8P3bBFULQyXRqSc7i16qjgSLHStbHt8e9ssaF3h2bTc28u1h2KG7aM9yhqLqH",
  "key8": "LRmetPJ6c85psHAAwrASiEWdvuNd5Njkgw186pdk38D4YP8dd89nwQYAhN34H64dCLsstehQxZEeyd8U95Gf8Fg",
  "key9": "2HVcFje1nccUAoCdNqXkf3xVDWfu6U9DRdguTWdnrzJJAx4VzdpbdRroJ7Df3qMAk8vG3xZjziYMMmnYeszp9TEu",
  "key10": "4ZLMbBWWuD1mvTpn4qWLeU8QVdzGqcjtzLyYrqoRQfYGKYq84YENYajdh2NrJtkzzVKCpFWStYDRqA1CotiiYouU",
  "key11": "4NbaXoLT6sQ5ic8aSrNGJkYusXmjws3xG6Ww1qqjo3MGbKCMkASG83ubGwhmUSNuTtBH4juibRQVTFDJt99jesa8",
  "key12": "3cCr6xZ1XSokhUqwgi7U5qR3qFGY15NMCQ2TL4wQDBV3CeLkYxCwDReihwYjgJHWPMtNKBpGhsrhSiPLCUmSCeTW",
  "key13": "4Csw1ZQfqcCx77CjbiRHtPyjBsxAyin1vWcMoaZuo6cwGPQeoPTbSyqRGmkLnyfGHinWA2RJnzxha6j4j9Kv3eo9",
  "key14": "4NtRWTH4bDADhLuHK1b2TVJooqkM4YtaBAS3yFCMMWZTjyAQvgYGv8qMyuwBFmuvu7Czj2UXLF9RY1pmEmZ3c4K3",
  "key15": "4gSSHWvfC19MZcxyi2GpKkqQ49S7AdXiKPUfdHxqfNxJA2APf6c9Nvo1ZKnYDSUfFrkbHDHE5REwaoLea3d8U2rX",
  "key16": "676NtdnoUtfMpNdPHrPwKtqNxDEKL18CqSVLg1qkcWVfhcLaBAynGfFZ4uZt5w8UvGZRN7nyy3aB7UqvAQE8nENx",
  "key17": "wTBhy9zGNKibUpRvc5gEkTo2aZMzRi4E1MYvJrcr13cJ48jgq3QF2VCYpAo4C6TXcCyjKB5kqTfX7TdUBQ8nzYj",
  "key18": "5KLUv2biUGxy7m5mwzFPUCNqSkp4mfcKRt9uAVaScxEeTDcs7r12Bdzpc4oqr893nMVcrkFs3rKBiuzVoHaG3oAc",
  "key19": "GU8RiT4on6DQkiUTeCinum7rH2LnxwU7wV1GRLh7Xv1HdE2P5WSYjxPz5UiikCPKSy2XdUTcNxXS6frwg2tjUbx",
  "key20": "4NV2t54kYADjaRUysCsp6UukL6w2hBVxop1FhiF75DREwvayXkMGyzWesqnUG4fB8T7eaUWz3woYbUrtmhxV7BXk",
  "key21": "584KjygVjJvwDqdDssnCZXVQRiDZVkX99KxZSMVSg4TanqyS8bTUnGezhHzvu5S66APGxpu48rLezLp9MHyDuKxF",
  "key22": "4wG4yGuAKoAteYsYVS19CU9ShP6yqrpjBbkSrdmKpSyxv4Ly4k1F9mfSpBvVLF9pinZnWUDZ1z7QvivZqD6S8xfi",
  "key23": "3wxdDyS51XEf3zwAQE75W9VED1gAdi2cNGwWmbWqScVf1vAoEgHpuEoYWo5dAYVaLfuGVvoRkr3CKTpVCKDiK2VQ",
  "key24": "RTxq9s2bxJ3Df9QXoVy3zSpu1P53RrwbUierDECkCSLcbddnR8cKXkqKjhghvxKJrsDb5f7LEejENeHDgawgXmc",
  "key25": "3Y4VqRmYtt3mSBNThzFFf5oXKCA8QgnJ4uwnFDca7mSvgNbd8jykS5cDGeatzUAjX4hbVkqDGVBdBy4FEE9SJ6au",
  "key26": "2NZwNQ8nvrFvf7BrzmB49z5gHfZTF28EVnDtay4rD4HMRXSZvVokAxkm57sVzbQoG5RTxb9AfsyxoxavR4jf1xWE",
  "key27": "24iYYCwZMRuG97t4eDEzD1z64JudnFyU3Lgt7YDbQok2c7mwjJmKXiHE7hcJZpaj61WmVm85RkVrU446SE9wjPLZ",
  "key28": "4NKAd6Skp9mTov2be8ZRtJTKHV57w1YzTeC7KYdgF6gt4RaLsWDzTRnw3rL9p5sqwhg2Xbximq1VxwR6wzguP78K",
  "key29": "3dbFKhG5b1Z99s5ijTJvHf6sDpoS8WqwV1KG6EGkXGMr4obFrjLGqD6QDkkr14xHu51FSSAuHpyMA8r97Vd5k12o",
  "key30": "53vt1i9iUgEz7Jm3Uv6t9924DDWWRczA5hS726xGhQor7iND1PA732Z9KE7JazfPoVxxF4FN2GiDQZDfNkrxfp5M",
  "key31": "5ZNXHxgeryNagN517wuVDaGsnnk7LmvfUzZPQ9EcPAqaoKvEMHxyFdNEHpD72hWHJNTFod4RFisUooAWvWqYkgGt",
  "key32": "ogVc1UKrAyficxysK3BUwCuVhDJVK5pJWDLi3AUjMaRSKkCJKgzf6KBhxGxwAa7Yss4ZmqYXDD6vnWQATm6nunC",
  "key33": "3vFvVXFPwBM3QiW7hoTBbf7pwNZpFy3HRuDsgEqLPVVhTkvVKSN6wVgxRy97no6ZfgqhbGk8YsaCKQyRiQyQAqAC",
  "key34": "ho21HPbkV52KdXnjhiTWbDuC4uXoiji6ZPLxfdY8dUYExjiRX6E4pFxdDxAsS9UobjCiipHoyaMaz3ihkcctQhR",
  "key35": "5bS3oDXyHxwzWip7N47fdzH4Le5iGcUvT96nUeFKT34cas9ETYNp4JsogNNPwcQNv4mSgpJ4jyHEWhyKcjg29KBN",
  "key36": "3QViRko5s5bakvD4Thz7BAoRvNbvu1XGmbHutPT9BE9w54GFQxRG9t4M2Ddc42WrnhfxL7tQz5YpRVQBtjxUbmS8",
  "key37": "Nja9c8nZ5uKmnfSXagHATj5Bkb73bfAWYzR9EbhFvZSmU5ACQHgXi5knVS8ASxxZJhNn3qWP4Y3nT7yTxoixcdp",
  "key38": "4CsjSSnP2HMkd7eiGyXu1uXn9CZPT7ghfzNssvX5R2CsSnsbMFu8N4bmdJWSRXy8D19zpEopsCseAdfzh4SPwuij",
  "key39": "cawBRixYhsT5tL8US51g3efrhGqfrMx2C5AXUkcF5VCFhP4mP5R1JKQD5GsmsTNjhbQUrtLHHg9bEYdBV9uZr8V"
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
