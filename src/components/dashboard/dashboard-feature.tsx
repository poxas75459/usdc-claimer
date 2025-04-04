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
    "386cqg81HbTanP3WhYcdQwKzaVkMGWd5cq4H5sFLX8ddReLqJdDTchXYWvHq37J2sk5qEZ9n7rC8Rtvu9ddkiDEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWeXkFbPeL9a2JBNtsGZUJdgqTpNk68geLP72N84xLfGfQQ1D32a1RMxSVQt5m9LVtsCPxTEyXsahFDiBEy7JLD",
  "key1": "25CWF1pEWywa9HaTR8cPSmvnUCQMkMJuit17RJ1Ta4R851EgXspPDKJKgS4n3qbRNaHke45tqfrbQJgXB9mzFKXU",
  "key2": "4L4HarWWWtdaq2M1Fa2uBatmaz4yoJdCwjQLpVZMFhnLN2QHMW1m8NpTd2DUPBXc4WxEqWj1AXAR17FPe2E8ynzt",
  "key3": "4dH8GfQ2U4LnbcaBQTNFpunaW131Jmk3MSjSv4pDV8iUCm49gEc2i1k2YQq5mwp3tuDbjAKoK5qyapdNYVdjZgER",
  "key4": "4zzuFskHHtRc4qAsJPLhL3dSb8kVvQoers5cud3xBbXeoWTTD8srAkPQzLXNPgMuxYFNXKWn1f24DTkKwygQMZmk",
  "key5": "2yoGyBQ4cndBPcjKtqo4fVooM4MaGboehwjKfaeioed4LuJ1z74qXhcPjFrig8FqXXNPK1iWCcbeVnabLEENgcLn",
  "key6": "48pX5QpTMUmUEBaQFQGs5rP4W4G3YFy5JXMAsq1hCzrztSfFwvELEpWydKv1t7SEYJnwtcMg2zZuWVrLKwX2TU5J",
  "key7": "66PBZyX1tYj9ePNJq3qCwbPvnP5J8cY1JVByhbhuSB9by7UNDkbNFWne4GZ38d1Pov8mqgNKWDBcEVVnqH2XJVsT",
  "key8": "5ukAouZGtntpXdgPLCbhLFGkKjd2Amha3ZJrGdKbuxC3gPmQtENZ6fFLi7BdgQd54qpAfeXcaHPZjffJKw22AvvL",
  "key9": "2bDNLYXRsKE965M5gpmUGQ7jTxQhxncRvu8GJEGjx6dZePXv3YhXfnJhjTdGS5rDkNbfQCqsYgpUthqnyv1nYj17",
  "key10": "5mDDH4XaLbpGno1ANXj5fWQi2NwEpY9apRvsVZU94e5CZmqpuXBUhsfb6LunBxK9eSigaBGRURaqk2s2v4Ax2z1H",
  "key11": "4MmAbDqeGNGPHed8ZVLHkAhE2X1jbS3kEw4fLtirapdYaCJWWLQRgsdwJ8yL3aQqXwE5XUT5DhHzaRgsAWdXQn7h",
  "key12": "5owmkT5Fa15uz9w4n15KJgvNXtKkjggUdx5AjxV1daG67aUtQTbKDjMHBi51qSMmhKdkiBcc6o87CLvxRxZdFVvc",
  "key13": "sUzDjLhhN3Bz2wB1BWFP3Bqty36xkYBnM8FzpuAFY1pqqwhvnPZuCqXQPXLCDDqV5kNrWXrQnssKyQhQY6XFZ8N",
  "key14": "3b3expcz97xpBEtbQ69YaEffDo9x4kUR2VW4rPZGz4u8MSGbG2vvzFpbitofG7Z4PvmuL8UJydooop3UtPTLzNhs",
  "key15": "5jKsx9rkvTqqJFyRn1u5gnnoRqNtKhCkjo3HFXvbVCwwL4T9GQtnoGdu4JgMyRpgEdYtA2SUurDGN83YaarvB3U9",
  "key16": "5iqSax5rrpRGjBGcMcdapsGBq54JJdVVd8UXfTxtkEemTXuYq7mZsWGkj65niyhrdRV6hoUVGzWWD3JypZwzf8g",
  "key17": "2VpoStnHvj7aSFCuq5P1yKQeHAjd1t9txW3QaHJZSZE8yF6SeU1iRGdcecgLBrEoB5TdZ5og8cAJuwwnXCS8miu2",
  "key18": "3Lh3YikmCDRijRuqFRfRXM1ANaUBwJLijxS3gvLc6GfMUSXWVQoADnFPm7U9LJde5kXvbZx2yX5eJNVQe9c982St",
  "key19": "4iKmN97rPsR2dCnuwXr1n65Jo5uMezDqou1hAPqUFnHCrTLox3h3KrQJeW7CmZL3mTcmxz9gGnAQVGqUXrLwekim",
  "key20": "3TbZy45Grs6qnhmt1sRgMQXKiSt6PuZ2jtXDaZdTNiwQLH1T5rXD71Z1rwUUCtTsDNT3hy4fAr5NXvL85GQuWSTa",
  "key21": "3pdpE628tEpPQg7mJJUoKfRYi6ZAj2h4wRLvjrRpwaCmWJE3P8fHu5NBFQdGX6UQ2L9PVu1STRXD4CsCWRXZniMX",
  "key22": "5HFbhefNhK8JG1vUsE8hcHPZxx5fMVrg9vEKLokH6k3XKgffMXb6zsr2jzD5SBrJBMdzahHf7bsYmhgicj8Yk37Q",
  "key23": "32RNckq3BLBGGV7vCfSFW9KPD7MEFUmfQ5nrC2ZFRKmbHMLCS6aq7Uo2AwHUPsiKmuzbxQSqjzZNsQ5KQqRHjwD8",
  "key24": "26q7LeEiFbpaNN6YSmD8YkX3SU7XeS55oLMu4BpWZit1suZjPpuQtDaegCPrHjhodFDrsx9iEbF5f79tqeyLQmrH",
  "key25": "tytNhY2cFpken21cyqbHBZv4Q8nBam2ePrURChbTBQeqbQEm65WRefykDAmN6mNdSt4a5UiXGwMf1uA3kbB9tUT",
  "key26": "5rg5rEXxvsKcNW5q9ioF1en8iNsbdSFLw8CpMToQ97xCa7vEzZUghZUDnpEtU4QDpmgNrZs5CRoFvpFCWMZqsAN4",
  "key27": "QhYRqPS46CtaihkMk8rAugMzxb7FXGScx8KwZx4pXS257xm2T87aGiHLuwLZETAECEiW44ehf97oqubGgCALKB4",
  "key28": "5sU5ydAgffn99bHwew31uGjj1Eos1NcURArHz92H5CgnSzASYfWnJPRR5vhVvxVypsKKNiDeFXDPipDs6aocSmow",
  "key29": "25Ue8q4j7f7wRiJtP7zvBt7afUftVFYwLznE8ZonEKrknesHRchTtRhAy4zC3Pxxu5zJiUbGyBS3knPNP585xCi2",
  "key30": "4h1ZnCiZcPfFXQ46HtMgXkvV17WFAeNSiH9yoeihrhp2YWHK2pzpqzgKmtMJi7vfeUDq2ZHb8Spmrndx7fjjbhYB",
  "key31": "67kHGEN5ttgJugtQX7nGV2juk734iXyoXpULYMF8f3eQvNDoGqhJ9RcxhDsxySqr3MmTNWW1M79WeCe7HUNHzVuS",
  "key32": "Jbwv9Db5qP3XbHEtMHmFKsKa9QY1cVM2aREm1udTn5VVPP8uRxoTgki2b63WiAhRUL1pZ2pe13NuUyy81SynJ7n",
  "key33": "34jNzW3K1zCE4LqPDpNx8Yo6xFFih6RzeVnHQ8mkBPUbAdjWWFms3EhgSvR2rpWFiDaddDLUC5iYtnHQKB4jrstE",
  "key34": "3C8bLTKQCtE2zyVy2EYjwyjiNuvYi54uv8J7D4j8gANN4AV4yqEgueJvKVB9kHh9SmaAb1GQtLBZoqfHh2Fyiyij",
  "key35": "4oesxBKXRkFFUyapjzvdrDMpMfF9RidwQ4PfBZo9TPm4EsAL1j2GRt6dFRZathezKjMuSvauQYQxj2CJx25Rq5Pr",
  "key36": "2TNEoSP5eEUxicESTQ4DMf4eodEKBakkUa2bPbJiSDgZ2sg8B4EMhoWAov5AwCGJjaoKJgPGiSaL2VDc6bjCgLHU",
  "key37": "4d7GYS1nkzS92eACguWZk65QAyukykYR6aHEWd4jDdFHqiu6LAeHrucwxhroe8aZLEBpAzE7JyqXuseMicuQgwKk",
  "key38": "2sqT4VgkHrxWT7VJ6jB1dur7WtWzChBpzDQZsbYX7k7UukrTYeVb1WPNvvAgVVJpAcmocWpWfA2Kvc4mzb1okmaa",
  "key39": "dG8t3jHk1E5p59MT69BZqHXrePQbtuLbvcMxdpfmt1GBRFMCuKurtxPPUv9tx8MFdfoZHsrXVeU7upyKYsZLweb",
  "key40": "4wf9KdBmD4VfyyEGf4wfRvVLcABCg9ZtjZJVpEpDK29D54VotiT8Kg1hXBdrQutsQSn2fYhXDzW1cckFcYJyJpaM",
  "key41": "2tS2q5Ls6agugMDaA1ChAkmc1XBMUiD5c2HeZNBiGxtWCN7qrJmNksNR6xfreXcfurH3QsNCE2STfcjnYBbUWcez",
  "key42": "3TAkDHo6YrZe2QYTj8SkJuNC9q9hhFwrda6hdrnzrY1cAeZnPzEBnNHfxnr5Su2LS4HVgTC1r7qUsdWtfav3Hv9u",
  "key43": "483ktdz5iyV2Q9oUewXvBVt1AcQDKFYwDgMBMrpu2MXFxHCn1bJ5cCDWg1QfLGgozfyHvx8FeHVVfFX7V5zVDDDe",
  "key44": "5tZYk9WpsXH94Tz6diqUpgMTdQJrdaJe3FtNBtSrc7CB5bZiF6ZHfcatKausiUJPc8BdSn4zFxJt3fpEerwHUeN6",
  "key45": "3mRrAZjLNEkpBPNuNHTBFZ1fgHmUEWzWE17ww68vce7xjwpBMqbsqv5PgiKPsZ6fsVMr8Na2ujK5i1Kt98UatsNF",
  "key46": "4QkMMZoxfDSobqQXr1UQVgXqZ9KMhhN3YpCWXMcycSeDzyMBTew6PVSWoopncZvVDdNhumtH6bvapFur2W1PtPSC"
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
