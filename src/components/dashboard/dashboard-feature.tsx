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
    "22RBAe37pagPj5oXzAZfs1yYfZvmC7WDQxVHVC9ZqAcBiWYdsjs6vwPKZPfmKmipgwTDe26guaYh6TTMHoMEbiBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvv5Wx28xCgwjjMuu3dF3F5eJYDvxRzdJEeRt6xeQDNqLkzWzxYu4ZoY824YMHs6zTpVSoxaqRdxvjfLwVR5UJV",
  "key1": "3cAk9YX9yz3GNwnvX5e9JCNHWtHZZ6rjJrCuBC1C7XXy2Mbc8ZXM5inuSjAtV9K47Mkh9fyXvgfdhWKvTvYQnxQK",
  "key2": "61carKD4GUJZSEP27JNparAib5jCCgjHabsbeAsobZYMfXaTPpbszmML8BNdLaZ54VUrcpRbz42J3X6WQVNMHcaD",
  "key3": "5C1n1FovFoYMjG3T8UyiJM5Z2fa8Nd2M7EWfDYkRUVHWa8CzJ2rK6JRmFhE479NtX6gMTTG6nhZF6wcaw3XWEhyL",
  "key4": "3sajHQHXzTNgqUoHd4f4pb4BTTjRoXypHd1m5QiZiX3Cv4LfEWjUvaos6dniRfZBNiiF2W3HUZTKLnbgi1WcHjVM",
  "key5": "29uHbgWHFyrUbrwk6deKbqcMhnowmeLAX8tf5mfaiJNUN77UScTu22Mxj6J4o6G8DBbcg3r7gp6j3XVU7oV7mPbz",
  "key6": "5iuB2XMdS1Dmmtv3KfetTENCrq7B5hVApzYCLns5aGdtwfH5D3VyLNkUXgetLJAf3tQM9fqV1DdMhTTDvG9kA7jK",
  "key7": "2ZyqcvARGdULdxwtashigx1N7qsY4LMM374iUsdmMWsKjJo6LwvsVbfJeJsYHjymi6zr9AGkReBzR6EdogDecoGd",
  "key8": "2hzHFqqJVJoJvyeH5k6qyqp95AcWqMyMGMDEV65jKuCDhe32CewozVRDCEHmAYpvHqBYFWocPX1pALEBxS7DFzQi",
  "key9": "3tYJZuccTgsWhfbvqBD3cECuxManufZnVnqKHQAp4oLBZKuM4Xy8X4Eevpqig3HeCTai6fpNfGhKsXGzAHRr6eBy",
  "key10": "4aCNUHmr3zykXAXtj3gNyHYsr3Z9QKwxm8gza3E1WL6pyriHUy4Edui95Ggb1YdAbYJUwKu4zsv8558uujGf4Q1s",
  "key11": "2SropdKFEVKfiyxQTuuUiCKk1DtrUvNdiHDdjtakEkHQp2XqBGQoepJrkRxVPBg9XXffQ8dBiBTAYCV8kFvim1SG",
  "key12": "ffiesbBGaSQr29nPvPomt1MBRd1Lf7MVasgkHCMrtGzD9QMi9FhZWwf1SdfDVRBiZnxZWjPxqK6YYdNmVBuVPEQ",
  "key13": "4RLK7Rw6uQVcXz63WfPnGNJLvVEfWgVKdGmRFasBsn1LNJqJGKpcBefjcu6EqP8dAGvMMdvajLxqdmCU9TsNYDDw",
  "key14": "3vsK1aix5KqukKwm4ePcxkVXwuUTEff44fL9fV3w4ndKoq4f2GnyexZDzLzrH5A8ZJZ9iWjq1RvywLDGDHZjGzFQ",
  "key15": "5QtWM6XemF28dTSPRuFN8GqF4SA5GHjja3oqtfbwrSJDCnMkKd2eTvNVCLcnekbv5mavn9BJTVA7B7GCVjsDyN6B",
  "key16": "5aMdYfGYfG6vJBbi6D11YUpbJWeEDhk7kzr9QSsVcJHZqHGuSLMFffNFHcttQQiMEmMxERYKAK1fYo15Bcp8UuHC",
  "key17": "5D45PA43b1v96NiQDwR48CEwyG7BfaR4ccaxoRP567t8NYZXHjTr3cqckB3nrHADhm9Ats57HepdQMNzztHRpvcL",
  "key18": "4si9MGLbQxeV8XZeTZsSmehfidNPq21pSWj1CpZebM3pmPFd7upm9Rc7NPXAUsWpG3EU3BZLS5MPAk1sXVhrcfo4",
  "key19": "2PhxnsvHRpYVr6F71Xzxsfm6mZXmFo8B7TmJgXxFVUmYBK4Pm6Kek15iBEdJ2vCDj4EgpsFKhh3SXtowiuAgnd9P",
  "key20": "2muaVMRTQK7HpiuCcSTCkeCF6efFetxyjQX1LPnK4ShJ6fg3oAicibdxkBxMfSjfdd4uYL7dDc1xb5iVvmrZffA1",
  "key21": "dy6zsd5bFZv2hHZ4nbXMWqX7ikdbzEyhQrbrCzFeY8sJcyvgrg28ZGQmnCa272KppbKj5Gr1RjHh7PfFCigVsWP",
  "key22": "2qhZQ84RbFSRvVSLafFgay7axAes9DtyxQmB1ccbtgDsup8vVBH423b2Confx51ah6cdzQ5fYgbvA8KJofaaT5Fv",
  "key23": "5b8kn5dYuanwbeArUXP6xpdqjjgmQHZ5C1nf3WAZU6dZTiDBojWPCWc5MbP765t7CqcuGDfg5LTDsHVvG8pUwGQw",
  "key24": "3dat2Zj9CZFLhs6u2uA4DWwLcrqny6zdVaAmjqjR8US2s9qtW6vAigFQBVpQyWm46ejAuhZqj5W21nzJtdXHKkaY",
  "key25": "3cqZ1SGJFvW4oxN61QDTzreLsSdXFQQ14jChciMpgG4p4fA7Uwhk79wBWkvkkAxYAdGYSDmDd1cwEJUqgpsp3zy6",
  "key26": "42g4gddkTsfozruCPU3igx6MiksprbiBmPv458sXFEDD4umXBbACCPrtGXx93UHUG31Q78hrHcSvKw6Y7qdHdVum",
  "key27": "35BnENSgFe7obQwEuxBPy41vBN8aiog9bMocMK3oiVdmkbPjbotYffnFrHL8oTKSgYzHRcgjdMUTqoc5XVudw8gy",
  "key28": "331rzwGquZ45xZ2xuvfWYKRCu2UWjNkWriW4n75oDcJyXE9nKvXCLhaz7ZTkXLs2pzMkfDg9L4PHsCw33VgrevTg",
  "key29": "2ZRWzgdzxrYCX9nrdLG1egA2Qr7e9M6bGhkLuLSXUwR5UBPwu2K12H2K8Yt2y5Y48eXneQ3cDe7Fu39bfrH3khUp",
  "key30": "3w7NJZZJm6c5WQupnEDUkW5L5X9Y5ijvRnmzc7qDmGwjKg1dZwt1Z8g4CPGj2BhcQPfVNU89dM2qbJd7GjsKAp8q",
  "key31": "67KyTJJBupJHvcUBVcGYeUJymJPR16hr8tPF2LwcRyJ3VVc4AuEjz48hgcJbmUpJ5w26zDekUUvewqQr5kJhh7hu",
  "key32": "2jvj2LmZb2GBEBR9KvPJnGb98K7ifAuUdMQp8LsghBHyoAKVc2szxnLJZYX8r22JHjENfAKLzbYL6QdvoYoKww5",
  "key33": "6qANCwjywSLSKbiX52nzFPiBvUt4CFKcLVccBmRaP9WUDRbmw5zi9b4o6fXatY14dGVGRBuPwZVJCcMehZ8XBrT",
  "key34": "3CLUzuqQG4t43scFCvaKLB6mbqNYhfTqL4otmZoxJuVXo3n9SGmGt88iXEKqNmkYdrEWZjQmSCHAo955zaRFihxz",
  "key35": "3HVzpqnqHfAeSbBAMuYVeeV1F9pvXHrifoALqMs5UGBDk9sjdvRx5axou2FS2WDJxf3mh5x7uDZex3HGRqEcB649",
  "key36": "4WQCoYr89BV2py36pgqubwKLrpXdyUjQSHdoZBw9kpZ8qjEBFScSzX6DvNFALMDbaZ7eNSGChx3f4wUHDiyZdx61",
  "key37": "3fHDdzkFBKwrarKR1RYz5KcVvUEcqgRJDdoBhxgyhaVYsWRxyh7AvN3TctHZbw1PdrrSNFJ9LAp5U1ZGsEwKggcp",
  "key38": "AyHtvqa2LDcfSvp5UNDKWU7AfuvBDsGW4WRV6rH9cwTQ8dniovNc91FF3EhnsUHgGVswrSESey5bJAurBYeWcqv",
  "key39": "UhiVAsi2oSQeENG2oEK51D1gDK32iXpm654u6Vw24LejXvjRTLo7BgPC5fUMbmo9HTEWznBKe7ZppLaz6ZznHQr",
  "key40": "2n26QSPYkddysqxzPFUKU1QYmffTxbU72Khacu9eehT5fbj2YkGgSDz3dedo78P8Hu5MM4aH1iXSo9DKg8dAfSX4",
  "key41": "4e1EaF3JpdvEFzriceaKRWoQ5icmh5Fn578Be3WWMcWKakydWygJU3793siQ1oXzqbLhub8rS2YfmQxWuDgcRD6e",
  "key42": "5uMt2rw9DVig8mKSLbgzVkHkarUk7mnDtVgV4sqnhDvTpRC3UVL6rp4zDCReEYoYaLu8GQ2LCakNVJQfu9SKxkxM",
  "key43": "32n3ee4T1aFjdcdrU3sMfoTZX1wMfnGhoMtJJKQht4hHegRuG6PStVmyy4i81zL1em1cKpFrZcJvUWevKTFj2Nsh"
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
