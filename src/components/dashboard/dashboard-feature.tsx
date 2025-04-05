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
    "mNGaxg5gq914YjuS52to69RDFUzQgLmKD7jxVDg5NGok2jzETYpjrWtcYj7vTckLSbf7LYGw3pyn6J88m9HEqKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sigy5edkExv2e4maHoXvy3e3VJscJ6sUEQMGZ2psvnJvnHG32WGwQWSzbVuNT7Mor6iKeV4KNVKCtL3h1ffN444",
  "key1": "2rTFC6hb4aeGV6S4swWVGmNUnCr296FbSBRd5eqTzFpjgdmS4NwNRdAxEyu29Q62YELSZAZL4mFPDri6DGt5ZNS9",
  "key2": "4FneUrk8sa4BniNMm8UN2JdNa2SMtAaJ3qqEdDMBtryBZCSZWeZV5sPkMBKfkSk4UGHUxauSK2G9f9C8uGZSiAPo",
  "key3": "6EKkGVHVTGqJjzjygDrui9nF1A3L8LNK6SUKbopaLdmrjL9Vae7ur6Mo6vBESxwyqtM19ctSJWbgy4NHgJw9DBF",
  "key4": "2em2A42TF52UKhPt9vS2pZkPCP99P8eoCh66PeqA4JFNjEE55LvLqCGdkov6Gpx3qUxWQKXejBrDARwaskLvTaws",
  "key5": "5W4tsEDxBEzCfGSgL7Bi1Jb1ionVAo4vxB5mu3Svr8uL8PXi3puEskdLtVrvEkLbAxU9ZrzKGm9GcBf8vz2tJpAK",
  "key6": "3dwgGZ2C1cMRUm1QspNX8rCC1EybYtjuQXvcwujajvb4kVVHdv8yAQdBZoDyV9uiGHzbV38CceasTNuoouiE25t1",
  "key7": "jueauDUJsqsbq6rCGkbDGiwSc4XZkW5jeJk1C6Aep8mB5tfXNnAnLxZHHontWHMqqi1aYSDfanZ86Un5w44ayQ9",
  "key8": "32xj4gJ14BZQCqxwKsqMPgMRCC9GzRFzv6Kqiz19DSz4NxBkhDap3QbUaPh8FU4FvUYjtgdS5mMTDZ6uVkF6UzSP",
  "key9": "EJ7bRh9sFe9tuHCfeqJpUnZU8RNaFyZM8pgtVYMnz5CCkfuPc64sNnWiV9EKnEXVNDLLynikLACWwuaTj41geze",
  "key10": "kEEdsANrgtfY5WcD2k5MFWmi8iWfsRVTJ2yxn6WnfWTpLFjn5t1bNVShYHSbQpwnUPHFG8gTX3v7djcxbS5DL2E",
  "key11": "4QfiKjN2JNd4uhKpDAeLqVcEkmUBWWyQp7axxKVruwFmPoM9F4awU5zp28AYZ5NM3BRPAisQVYVUgrHyVhRn9xV9",
  "key12": "ri4yBWaUMruGJSUEmPSotPf3Y6sUZQp5YmzKp7KkKZNzXXs7AGBrhKuW6pEfrZuuUZGRvLEqFYjbLBYx1NpQAvR",
  "key13": "5JJFxEo3VY2wwnRjFGCSNn7jKaeDjXLFkLkB411VGSdTPXb8LzmXoXLAR5eibec7WRLbsRVBGvbiPvnccm6nqgBC",
  "key14": "2md7ZDBCCgSQdm6F7hL8mmjysCHeBcVPrdFYpv9Ux7LHbKJmQxugNKxb1p7n8AHtAwS7U21r5HzigfePMSnUSEs9",
  "key15": "3fpmCnFjFRdrSpW95Mor9eEwYG6QsUdU4zz21myyh6MysiyP1Anz3NbTRHyxD2L9x2zxN3AQBpF1JZbQocJKs8r8",
  "key16": "2MiMVMZapA2BiagXEqDzKqzKpYcxRYuArbJS6AekRmVSzgyAoYPUVoNkUN3PVPsDk5udRDdm4bmn2BU6H7zmLmk",
  "key17": "2HTXcfkTLoJKHqk6qfq7ttypWo5QgBqGHXkQ534S4LpghSDXr24jFWge4BYvfvJFyi27Gsny1Sy3w1ygXJnp1yx9",
  "key18": "54jbKywuv5XNdnSnSbrfL6Fke59aMV2Yy8VKcfNHxiY8qthVBmFmLNizzRq51mvzE6TMAg1biujYdzyZStbixLBp",
  "key19": "2atxpv88CmYzZ1yaqz9fJoTDB3ck3T42uax5QdQUTrZsLPFfJsY2XYFuNJ2Y6eVtx51j9JS3bszWQYLdj2wSAjHz",
  "key20": "2jGDTkfjzVbteY9nFzh2p6QxvmKzrYRF6pLRuMvB9Soz8J4mr35j7AtUndmQ76JvRrMUNUQJW9fhrgvmkvQevGp3",
  "key21": "3pyfZqUPEgAA8NnHQSGYRdwxHJ3ZAiCXqoLLmzoPXJ4DD9U7tFbW3hXs2eUggV9mh5CXLEcFq7R7c3kQVdJMvVNJ",
  "key22": "3R7psj2qwbnNH2FSxh19V32yqxUmCuA977ozZs9TVmd5Ep1PpZtJmB5ZLJBRfQU6gNee9GxwC3ZF98EEMAAVVekR",
  "key23": "49pYpiQrbTzNbvXTdYnzP91bCFbM2Nmhwy9kmJdfokfVCAj5MXtDa6LKwVLJKmz9xCgpTh4sqeCpnywfpDLRG2Br",
  "key24": "2eWMfK3FbTabAMzBCrRuNfajbNnr2J3zx5Q5oU76wBuihbcyHRsZfteSvyduBcZGzT3XwGNKvmzMHFamMgEgPiG1",
  "key25": "2CjeaAsu5r3yjbcQZDNFHrHcZt3H2CodJ2oLSXNjXdZEQ4cKS9V4iv8R2hhJcaRyfjBYFHrYyPGMK2D1vA685Y8H",
  "key26": "2BAhfeYQRF2ATVkhXYR6DqmqJXgUvLAtaTfxXPvvHrAZ3UjXp8TwsXaQLUPvgXDiKR5UVGxSEMvdeMVEu1ou7Vki",
  "key27": "4RmJfUvHbTY7wUtppcHBcCJHYrJHLPhDf42695NLdPXLLzdMEpKxGdYN4QBAW6EpEcpeBzyKvme2Rv8Z8qfHUrrC",
  "key28": "HWMAx2uxR9p1LjV8Kv9XXPE9d86s8PF74CCYPQ3RkabNzUeVv6mWgb7ec4rhCKR7Hxe9NMdR3SJVJz4vvnJdxow",
  "key29": "56E6Q7y2n1R3X5GbXAsE44cq1orSsbtoUS1ph77GkzCKdtYJpq1p8H7fjhh7wKceXXhHCdHzWQAh5UY5r74uiZoy",
  "key30": "4irWfsEWKH2fRcsfegBd4JrFjbYA1VUC9BMb3w8jHQppnfMrRAgyQpDuXFg5e83poXYis8K2xAk2YVRXz9ocoKsn",
  "key31": "39bTopHnUPv9NKEXsEgXgN2dNYritGKejSuN8kdeKP2tp3SkXMTJeb1q93VGGdep2eTAjRFZwfVcT5wLRQK8x8YJ",
  "key32": "2SbnEgbWgUDnW6j4e66Jdx6gbxZmEgwkAckhB4crw1tB99D3z3qUHSKWkTRd5VcRzerf1S8GQ4StCHikQkXycH5E",
  "key33": "5ZFaBZcT2pQwDCprdxTWmdNysUgnyrXGEyeGkr3erASGm1vgBdSPP6wfMJomBU5ZpmEkhSQ7N77dEcqp5NSHs2fs",
  "key34": "5psfzK8U3A2ehKbx6wzERM1X9fDeUsjJp84YRr8v9EiKm7adxFmWcYDypcGKPBEmYuJtkUSqHneBkh9HYhUX6EgB",
  "key35": "2xLq4zHaYHXsD8MTadeR4YLuda8eXxFtoKvPFCx2zW41zXqCPxm4qjHNQTzuot9GWWH3uwRBVGJvxV5UTyPAZKm4",
  "key36": "3haoDKqVU7QdQJraAkoZ2WVfUiXzdigJXM3i2zVyN61k5LhnJUxNskREnBLa61uVJwYpYoPArvRqAKsZfF8BvJUz",
  "key37": "5LYm84kT4hPuxEzKHCcXefoytr2Qjh5oPSw12AxrNmyaGL2UmQYGTxHnFNcEKJ9jV6YDJcEvXLwrDcsmFSi5ubGN",
  "key38": "2Vn2NJjGe3ErN8JspWQ4FPbQyHtpcukrWHTutWM8c5iuVgLVzfDztW4vZBmKoxvgQEzb2nNpok6tPxHS889HgGfc",
  "key39": "Ag2YkdJv2L9JWby1Mg94AnPv5aR8V5Vwcvx214sdLd95WFdXATZ4x5GG31nbR7v89bKodAoxoQVHg9TJWtLWwnY",
  "key40": "5B1Qf5PGczb1TWPGhgEGWwWXbUM2sVgVBnoyq1NnAAg2pFWsNP3LAZgQiL4Y1HRJR5xGAForcm6Kmrcvi6TwBwfH",
  "key41": "43zCpNqRahdiT56pB8TCrHiiFdyjTFDjBoFVPhSqFKtpM5rii7VDbqYYNmGVjkzwinoWPzckdscduahEwceTnN6p",
  "key42": "2t8gBZpCXBA9Aske5XdFmgdze3j2ijHCacmG1Z39SiK4tVkFR3P2cNKa8NRt3RUVxjGHwW7fMWQCsJ2H9kmaxxLC",
  "key43": "3PaekSyGjzSUTXru6usoHTwjJqUKHPPMvEswYa2oPSsWU3J75iex4QVz9SBYNrhDhv7PVfv53GL4W9YRw7obja8L",
  "key44": "3E361oGTiLd2wypXxq916qXL9JCgnN3BFssL27PCzzruyjFFfZJpSNAFAKebGLLgmbDHf8U7n9sKMNx9hfxXMVNM",
  "key45": "4VLqTGQcDWrbYySXfmk3PYvXScrqmGchBKZHNkVJKk4RSmG3LusTyMp4BCC7Ha8ApUT5qJpNJCxBHHE6zSdYMvcr"
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
