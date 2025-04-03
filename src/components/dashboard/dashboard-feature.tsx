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
    "3XeCA1cxBkZCGeku4ccjUTPuXiag1VBGcrFQYK8mHxKwMkksX2sApVYFnXJDdg297urnmviPYn4dTtBHhSKsBCza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43P4QpBS7vYjWUNL3NZgns9ew7q9rvqKHUFwYmt7Cwcrt7hZe7m43n4Kj32dYtnunCEUuA6YSyPn8h2nkmo3Ydm9",
  "key1": "4oe6TJqcaNiKDjCc6aEoq1Ge2NxsJbQABWkNC1VJNxRM51fT5d8NnazyggJnhyYf3B2STMM2yob9DdJ737PkHskD",
  "key2": "2HjsAomG7a82VXvnog4hMFcoXqSG5mxJDdUFfmQrWVhhehvNcYQHWvFHySPxDRcCGnuJaWwAvnjJvu3i6nr5ZqwS",
  "key3": "jSBhFpMqmygPYfrjCb4PRzih9bm9g9sxyPYWLZHV5Zhh5otsdhDhT7rEmKUGEi8TeA1jwcFNnNgzziSB1DmfCSa",
  "key4": "4PWkZc84M6zRWerCdeRvaDek2c52cKDsYCim8oS2saUZ6mYVmhZpR18MhZoM8vyWyCHGQhXJDb1SocrN7x6Jqbd9",
  "key5": "BE2GZiGUL3pdtveNLAK9jw5m27TzU9Uswq6gK9ZHcAFTiVyuSzjZfEHEdtAEZ2eQqfeGCwfMuZPH7V6xMfQR1aE",
  "key6": "5Ae98bGRKrmEc89R2ddYMPyZK4SRXiTdRemoeBVQcSng73h3DXPAh5hxPXzv5BEfDmH1CpLkysaSCpt4mzMeCsvn",
  "key7": "24jDnLK1iHBM22eTHvoeDxZPmvFR3YuqC3o9zP136gA1T6KLHfhhaEQVAMU52c4fTBVYbhSSErb4uwc4WNFaGqee",
  "key8": "2B5FcvqyhCdbaTsNw1MxuhV5oQKgoc1TpPnaUU6RyLBHBJLM4dSAqAEoAcrq7Wd9nQG9EpDfC6Jovmr2A3pxUetS",
  "key9": "58C9m9cqENN3M9jMARiyz8zhoMU7ETgPAErJwTeDhZjpaHXjM52dZusv4X4weM934sCxDoVJzpUv2vtRGDGwoqmy",
  "key10": "cU9RRbVr8He9mAwMiwf49KPjQ2eoEphQKD5djYcpmprbtnVVLekMgdC3MmuryNfZ4ehS1BerZAjZHvhHst33RNs",
  "key11": "BAZgp4e3ixGu9nGjwBE9Y6XbMJwvUDDUxBmPHEzrTYBk1hUA1LksEPYiB7bVY49z7NkKcFXTCYhVcxFyVAFR3Mg",
  "key12": "w1YxBP35gbwT4zWqM51VUprTf5WuBETd42if9cFmxgPuoScMUphQbYV1L6BCcen1n3VcymfrGBQNFCsJ6RZr6Gq",
  "key13": "4GQrVCJoY3y8LmwrFdyYoKjzw7MSrYdvsQjh5DZkRi4tYUbVMgXPHXqynAXJkznXk8edFHKxZN4GeHPByTgZxsk3",
  "key14": "35DCd8x7hkHLcSzmDbVLLS6SwQGGLfLkNazaNWyDVpwrb57RVLuuoArcBVDSQSjbAUfrS3MESXrSkGtcuPikmwXH",
  "key15": "3gJADwWC3NTUZCYwEY6QRf6Uh4hnQGCegNksztjEr7v2NzVH3Js6FRAcpo2iVmmiGD3NntxUpHQeEcEZr5hrzZ4G",
  "key16": "5Aq658NuQMCmj4WdCAxJ5xrCfqeQN7fwsoergUH5LFjzhd5PippatCU6Fd2m5zU85F6SHXUC21vi375ngTQZaZqn",
  "key17": "2D5EAaCMYCDozGA5MajKtrue6MYe4xXFhgCScS5HMtEzX3xdjB2z94RNvqvbQNHjhqwdJkGcXrqk2eC8MhekACPF",
  "key18": "3VH2Mi2RzbqVQ9E8gcd45ZoUUCG7RG7iDpSikfVMW6xPoj7tQpqS698ahSagGw3Spwu3xx1RSnxkCd6gPSCKQugj",
  "key19": "2qhgPSRZkMqhZLvRAZN3YfogJcprQXiXEN6TexuYCHazRGT82m3oz8aT4WKusjyGWeLeb6LQdEk1uKHvUshF9cwc",
  "key20": "3mpg5vq4GorNfesF2JA4dDzh97KCsHQ7KocbBVscu6cjfBqRNGDXx3c67hxgwgrxzzmkZXyrtZ2mEekPitL4kyYN",
  "key21": "7Uvz8wgsd8mbrnif6AQz4EU8B2JtT1v7f8TMqhZQ1mkyogd3tf7vXJCTTyumRdSMhhDU7Pb4nupGx4xw9DsLj6j",
  "key22": "2oPJwYpgHhSWxskVF6QTPDttrej4j6y1kBBsr4VcKgNogWDY3V7NJvrH4gDMgPNoKr4sw2GmmTLkhu6Qer32Ujoe",
  "key23": "Ckq2KLkhcT6jK2cZqm6s9oxGWT3YeUjrEHShABVsHCqRzY94TXGYKeSZYddUjzFnbspd74TkkuzbZfZYsD79eH1",
  "key24": "5rp4Fy7HcBpFHQttT6RbUJtzTT28mwpGsshL9ZHBau44b1RbKPXGboVFasQYtvxNcGPezAD86xkcj322PyqkQEQz",
  "key25": "UKp7YTHExm2b2mm9bnQ5yVm7KdT83Fe6oYs2QvX4h7oh16AGrz55ywNZKLrKVJCQkcKS76PnqxmPKKyodcttJCj",
  "key26": "2kwsa7upRYuyN3MMj1LfpUkPwijcSPuXK26BTcQvfH1W5KDysdRHnEsTebnjWtETUbeuoe4LNFpH2CPtRCmpFT43",
  "key27": "5ig3vUf8mNYPiNEr8ZoEm43CsMSDcNoeksj8nN43ra4yWcBeDw7kKkuJta44nBgKqjdn2vSr5u3AU9A3FgwcwNDE",
  "key28": "FmESiKtcTdUnSn3AWq73qbJ1NadWPbh9HKEDtQaewBJ7PMxFLoh5p1X4v1Eee7mvffd5jDJ1w8StXEWx4nMRZxZ",
  "key29": "4JCtjdUer153KmhmAxYLRZTD9oMnwfqjcUrM9QYRRVPXKBmbDWUwqjm9bPh7AheLdxSKAyiaUHfTxNTjVr9iMt6w",
  "key30": "dz72JZBaNMdGjvbfUqcCrzdWqFtf7deSBMo8vrMXxmqfMje7isy7agry9V9aUkJTqY9YSYKzQhiEeQXXaa652zf",
  "key31": "VsamfDhQeBXYFZdXD16aUnuzn4nYF24czzsUadTWsEWYaQNxNngAKZPUwN5jJ5QcyE9q19arkMHVoHXQBMPrXgN",
  "key32": "nrFYbCp4FBygLjoB4QNCFg4pxVcq5gFTNN23q99SFYumujKmS7mjnC9HxvTdcTt1EiJenAz6n7darFBL3o6qdRp",
  "key33": "4UDks5vawXMG9j3PSEhvWJknXiG4aUMNG4zGFHBq2uP12V3aPN9u8VD45iS4U6uF3SM5ymmDCHPDGhQBuJqBk2uC",
  "key34": "b5CDpGL6VzdFmQRgUrqHTwL7ba7qyZumvmsv12xVvz1c4njdLC45SN8RruAyKiossXf4zmR7KzUxv5HtxQ9aXWJ",
  "key35": "2Rno8tcZ9KmAiHvkpVnsPtvfMSEHty18yLYBTzoy7Ljvh2GftwoxQRCAQYuBrsxhLBMVnyyanwM2QqeXMRNrVGZg",
  "key36": "2d4N4SUK6XAdK92K12ainPfNwkahnEiVtotZAbdukfDQwchHcLwvXCU1aRyjwcSFaQLi2tedNzNEGA7Qfg9wqNmb",
  "key37": "4io2e1N3EDd9kafARjmZ3M86Rov7a1WjajENsrv1Qr8K4GgviBCUbK7uegPGAvLW3kLbhykM2jGnXxK2TXxNfmY2",
  "key38": "5MTFfuVaPGnqQd8HVktk3yQNrZ2NQA8NYB3AjGzMKLYJcesC4mnRxuy3BLDf5HtPfz4C4SLCsALThggNtJtctS5b",
  "key39": "4V1PxAY6GTKZ1vpeiXq7smLn6oef6CMa2xcaNvt3PVNur6tM5i4VJMMbRs4vvneUEAYj32hZowt2RzMRfm4rqMPb",
  "key40": "2eMj3Atk2kE6RUq8WwXFzVCzmBS4z5C2MZcJmmjFrwD4QLwpmrbZ79Ad8UgArumxSFgnJpWtMZpFjXnokUYV2nE4",
  "key41": "3Vw38XmZCdwP5sWWQ7rxoEX8C1oBeqXRLyvjSQsqZbxR3L61VG89pwiZ79LocfH5z2dnaoAMj2jqFJLg6aAd2PZs",
  "key42": "2moPisTRgaDJeX7HX4scF6wS7k7q5Ti13AAMnr5po5sDWRCsJjnLq2j5juryXEekjr6VipGHWDZR48hxvGVj3WKL",
  "key43": "2sdNZKsEk2cEuJL1rKAj5Vqfsv7966jDU4kqtqMUsT6DYab1LGZ4YVQ1uNkxJgCKq5kHrF8GDxW3wzuuiXfp35iS",
  "key44": "2mx2UNHDqwUQsED7PDmyjhhh1F4kff8BThW13PvdhKHWJMFBDAJxMhtBFB4DYyRRKApE5eHVVqNFhatrexhwGEDB",
  "key45": "3iz3UWSRJuGB5DCafketCwaXXhLqXadMw6TJriVwWSvXdjVY3gwrd98VK33jnxh52PYQ4mzcMhF4gC8ZezosANPZ",
  "key46": "4z5ZyFWdLqBJJ4AbyBGjZCMcH5efZa46YQjaaLPNyECHUoRYGz2d35LCMtHKLLH6xDSasb3g2peLi9SMQ2jxbVat",
  "key47": "5MH8XBCbJ2A7ACKeiPieDT4Qbkh3USVcqVSJJRXhZTMaCHNAyLXyr9AtrRhYLiHjGDntHNvkzuCER43CqLVhKmBs"
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
