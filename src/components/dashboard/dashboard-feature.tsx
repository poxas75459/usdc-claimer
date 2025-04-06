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
    "2hPKcqG9sRtcuCNLn994bmtMLEXBpLMHXg8ENxEe3Qb9V4vRBPY4BaTtFiZHxsoQj8zXYt5ycLEPipHBQGdxRwQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajnQ3r8TFqyyYq2KxtrhTMfB2JqyW9GhHsDu4YrUABb5vNBLV95crwU52PPmvXe4jY2jLr1Z8uUYWVK4V7fxwN8",
  "key1": "4Qgt4cS4NuuANrNYgt9Rz3aQQuyMQ65MourWgWLH5eCCC8cjRJQRJydtmMqYz6hwppqt8rSYej8nqVwcEUDdpDk3",
  "key2": "5zyMzrTPXArnenhagJBM24PUDejGQAyMr8H3mQppdCVMtLY5mHduTHiPxrmrcPZG6q6L7TcvH7jA64v1iioHKBgU",
  "key3": "2cuPCDv442sRwkuv97jQJ2tUDN3zyzrQ1FWBwyDudDvE4Rv624eNZPJ8LuHumfh2R6q3uFZGzjcpXGZfb7T1ABLr",
  "key4": "5rUab3L5ChcovjwgFPe6Etry5wioZoLq3jvPtmhZcdzPdx2GardDYNe16ULSN8mpWSQ2wGa26Cv4Sgjq8CHTpMqf",
  "key5": "2UFptJbeew3Nk75NQ8xj1qtbvpV4F4ABnkJKJ6vut7Bh3QsZdoYqyVpPEhQU2b2LW2EmmJW7e5xgfbAkYoMAbHVh",
  "key6": "WyrdQFvamt4vhibYDErUL8uBMLA9PPvRsJLDRe8mSpM2LafuKzvw5t5uK1XuRF4irDvpoEDUthKrqctvjQKkoAE",
  "key7": "4XM21VaBd3k6WBLt1h9tuT2ArpH619SZT5a4r8t9B2CofDqwZvd4rHRuvpFPsy6V8MJSsv5xvg3URYY4o5i2ARne",
  "key8": "2ATGsGrn7QzaX1WN39fx15po5JQWGbbf9xmr7Wenp6LH1uemPMRK2LVUsng8FbLuKjgsnP9bdNDmPK9rBieHSihd",
  "key9": "328G5MhdrFCeHDUZ1DFyLnPhs4tABYMEyrLrNqQ1SbbfmyyZEYo5P9FpWZPUfWELJbe9n74T99f1bTBqAJnrxpY6",
  "key10": "5WST3DEErLSRMDMMXpDbFsBfHPkdENo7iTHpinZVRdHtUrvqVwqGRFmP7vMyPbhyABiwbeW5fXwe7w5wssdQQneN",
  "key11": "27zaH4FX7Q1m9EbuzeRYfrmv3Hk9hfUrgm352T2A6KDu7UUxXQnGzXiEbCYp8sVbkL176G1hEwtuaDvYZoLLTizP",
  "key12": "4xp8kMWZ9VFuVty3SamRmrTx9UxLTUbJbMS86EZFQGAdCfEKLwR5Vt9JsaXMzfAnmxJsUNCu75c81nApFnXeeHfb",
  "key13": "4RFr3aZbErUUqouRxMzuEcQFYQWVfULH463zMb6yWFW2EDNauE5KdQnptUR6hyh3S6EQSWoem5kuTyzmFa4ALDbn",
  "key14": "2AyrcRtLUJKXDaQ1V7dWJLmDwy1fCywxCQC5C9bR2F5z7zxugtPV2rjsHJ5QSD33mWtpmht7LB8ekYbm1wYhUnR9",
  "key15": "RyVZ63vtrqLTFRviLfLrKqwAKMHNkKwS9hQ6yLNN56hCPjqWpRoddx69DAjpunhKn453TwfAU5VzPXYRQ1rWscG",
  "key16": "23v2BFas5NVTm6VQwDob1LJ8X5yPB3r6WAYxf1mpYvo99ThQNSXpAYmUGnwt5dx9LgiyQ4wBLpBHiwDGF8RYBNRD",
  "key17": "5CcJHiZWwrZgoWtrb26FtJcHdb31i9TiwbNy5QMhiKf4wwJPfjfDnkoRiYe6hxxkMAZJu7PBhWaNxk2NvXfRVjCJ",
  "key18": "47vbcxZwCgmKMNzQtjwoMs48AZRtL95j9RCtL35o78qL7CVnRLMBETCXFq4PjvN6AYG88n4UzwwttYyrrBiSSkjK",
  "key19": "5ryBLbKir4dfmkMys91eqK6KtzuSLSgqdCG9NgCErDdnnAcMgeqU12FRvbNqmN6xiRhiijsk37iVRA8oPf946cs8",
  "key20": "353WuLe7fbPP135ezPP11HcURyA6Lm7W9cQ6HtArABFUmkdQPzLMY1rkkwZt8uPXjGFofRCcZtv3uDdEDt2yBo5F",
  "key21": "WEiwERH6MZSSQkKhCYLmZdzXkfYvhkjAsLenNa1UQKu1uCQAd9yZHuFJBD1RtUAP4ZUKYaEv98ZmsvKtjW8UBas",
  "key22": "fVhuas3e7hvV78RUAvxTsFZzoXxWx8892Yi9mUeqHoGV16Lf2MjvYg5NXFCvfCwx4ec71nnyPXZD3gRyyyFPVX7",
  "key23": "4iGqhrDoK4Hp9fhKAGMvd75S9vMMna1A7Ri8dharTNP99SeyaKPeB7UbFrdXfkijpc1N24UwEkEcH9inwjHqS5iB",
  "key24": "4DM7dgPQyaEvDV37XiARjS44bT7ukTBeSESpHvdK8aECno1ZrsKZBhgAvh35QSLRANqXhf9L1WXCpvDPRLCmGMWo",
  "key25": "65jztzV3CpqSCwhCb2JuAFBazBfsHfCe4ex2kT1YTvErC358SseYVWyu3f4UCdx1mKbjZQcqYk2YtWdC6RywC3gj",
  "key26": "41Pjz36ksZg4WNy16nqw42Ne4dzpVSPfvm5XpbryyDrgcmRM8EDsfXsumfK9YRam23ezE5oyskvyiszj4bw7azNV",
  "key27": "QBH5vxEDYkwcDGgBigcYb7pQ5qF7wLnu7GcWcVLr5FqxejrpohXNRCgxHSoqTaSGENRPQhKn1KWBwhtwpMTizWq",
  "key28": "3S2T8hrrAJkZ8pd6NTHaY6LLm8151u1n2eDKwyUpdCKvjN5e5hAXx4sAorvD3hdcKxRGywFSQVgUDYaoLuQsfJZi",
  "key29": "d9acj4ZbJG73ymp4QNfob2b2oLGEKoEq4QuBMB4NcVrauerNXi8ZUqZ6L3oAqphguCdsdzejCCbGYrWDqS2yoaz",
  "key30": "1X61enrgYmn4mLdjxD9eienBVT7P3KAigXfD4inDWqR7x5WuXzTGmmCVrTBDb6KqJPPrXvRf3aCCsHbd7DWzpgQ",
  "key31": "Cc45yRVCwL4HFwR6k9orXzH5VhUv1CW6SoTe97zmgT3RaANfxR2pjneP4fkRbYvof482YNu8GCnHj2JzmuoJ12B",
  "key32": "65TsSuSShkido864uBVADvKT3yLgKMaQhY6T7ovuyTwcuB8xq2b5P39q2MUN8gqa8qPYkoMNW6MrBrQcjXWXjKTJ",
  "key33": "2Vo5JpbUqnkbb8ocmsR9B2jKcNgFjX9b9sSWqUoyxGkasttis14eEpCNF9N5sKLrC9b51mbBxtdnu52yX5VeWArS",
  "key34": "4yQJXHnuBRgUUHiNxU1mQfddq5ypZ5AjifPEbPNV2exnGF4N3zepjmzyzC9AXh3cspTxbxHWE8X5XAfuuHGwjy9p",
  "key35": "4qKsVHZ28FhaPDreC9Hcq2rMath2GUhSHW6vUbhy9ugAVz23mkEE87Nfg4fHtrZSqtMp3ZE2dSG88vCva4JYEUEe",
  "key36": "sn91LGe5nPvDtJUsog9eQdXDSex7Aycqv7XD6bGg2vQJ1Pd5KzPUsfz5PDrDyMPTSsTGziK5ZHzwrQc37oR5uk3",
  "key37": "5Q4ruuvie1k4EAv9ob7wgH9kdn3vBf9yJD5eJZTtxzv2tP3f1HzVnmmWsxthHWGF9mjDRnsAQGbU75tNuiGkDgae",
  "key38": "58swktoScCTju6AD1KUY77VQMjqpN43f2cJ7RECpYYHeeuYcJrHptxbn8jfYU3UZnE618ZzqpqDYHzvRNFEhXdRw",
  "key39": "55XtXYUzfBnxYpPvBNVtidPECzLhDE7wZAz7PTnPKowkCtM7KpfKhaEsy1dkYmNRcokFDVGXFHqECJMEyXr2pta8",
  "key40": "472vZek21xSJBqaZ6XCfiF41jw3EKBA9ne8knn4yrDyEPHQrkbbT8s8hM41oa4nZNkjv2scC6SGDtdtuatSVdcVX"
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
