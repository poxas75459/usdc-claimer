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
    "3rps3A4pd2YCnf4hpyxhE4sW4VZmBZtDm7FnqbhF9ZhNLVawrgDfBJyxBMcNmzMBTLhKbXo4t7T7tUZZy9hVh1TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzJ4xT7qPWXnRuCcsweyPztCzdiC9dpPFR4s4Kup2u16mQrj821SmYKTuLP9aqutdtqrN2SKjdmzLx4DSMuN9g3",
  "key1": "21P1jDEbtsyTbr4PUPbFkFQxDVjppX71jPxdjESprwrVvTZSX3yQgLyZwjB663fvSvCdVdBmjaTU515Hp9fiqU8K",
  "key2": "2865fguMM4z8DMmtA7tWKFwT2BdogdcCUZvNFrJf4fqe5Rp6y1vVzaBg1cvv8p5JfhHSPe3U3DJF7Txr9S5AZk7V",
  "key3": "5ak5EioY2XsiLFZrdWNxyAisC7sMCq4TakeEnDYGsUCseknRHxQVny2B7TCHnRFJgsTWkL6TyKXBEjvrgANgUnCs",
  "key4": "4sRRQGcB3rv6t6vSadtxt5RZv4frUworou34C7CY2aRxd79SnhKCqoDfoi5WLErStw5akmBegacBoK3J9XuSXq9m",
  "key5": "2fYkPC9gWYB2KubbZcfRwLxQG1hrLGpNBeGMD5Fke5ZG7m45oaGKXMzHB1rwjMQCtdFooy5QUyFAm5HHXfjGV3Ut",
  "key6": "2WNiwZXNDruRgMnQLBKXWKbohgwb4HTknP4adPWZNNfVgwoKSPXNW4QqFDbNcWMxWApRbFnm6h5b2Es1RUxot7jn",
  "key7": "51abxKBEayaHaqHKtbWuk8pcvhzpqTGdZSCkywAKFG3WsanWTJr321WkFTwdpPG3bevz6FZoKo23MApsWhKa6sZg",
  "key8": "4ZtdxrTuuuvyotdw7WSYctheiUaa4DCdYhhvYEu3XfBCxrJuv1yiiSgFTfvtMR7z2Aprik1G438mJomy64G2yepS",
  "key9": "SCJW7tH6bFTUPBAfsDAJ2tpkiQ8Bd9TrtLsDZSA1BqGnGhd3YMsnKbDVfZ61WMxrHY7c3TCrBYiqacDATb9kKJ4",
  "key10": "4fLZw5Km3VZ8NDWthKcRSsdQKrbwLWpmumAtgGBjyRAp7AUnRy6GDU1ZtUTX1nuymUBEAgah1663VCCNvXWt89vV",
  "key11": "3oejBzrhSiXiZRPXCdUqF23PAKVxmwDYCr1DNqGoZYaqxP7E31f92j8gTSKHKWBaYqNVU4pidE75wN8ogU16n31N",
  "key12": "385XJwiTy2FbUkrvWvDciL5LWccMXMAV6mVM47NAt99ig6id6WiPDMReuxki8emdRY2PSzQUFjM2H5gnJhG6mi4i",
  "key13": "5TrdEtvrVMLQPCmwtuTv3Hwe6J4EgBGjUUZoNLGUiXF9WW63we3MD5rHM3XAhZ4DyconQ8DMb5zn2EZgVTSwxsgt",
  "key14": "3keDr3gJWusTK8gZcRCrZni9FB8xHaNEt7ELwPrr4cMeSdPRVwDxiJjCbFQuiZ525iVWepqosX2grhZAhL74z7rH",
  "key15": "5jCcUk7U9TMfT3YZyjNivmCrZQTJx3RGkveCogsvuCnJi1f9CrXhh8RGtHkuiuV23KLv5kyh6DcbZ8uDJQuEJs5Y",
  "key16": "2inkfabP4eNGyxqRnXZ2Go9c5iMRTT8vCHcVyQdhL2K5iwjTw5w7fucMbCUeQFp6d9o3KfuKyhKQMQeUVPwitHUb",
  "key17": "2ip7eDbzXx7eFSNT96desNSXht9krDuNdKZx5jDhniRgEFk2Ak89tVSgFQsGFEiFoh9UdVxPQ7pa2PCCp68jwrv9",
  "key18": "4s4sHLqgVGoh7ZGoojTkjDVXBCFtcDi3EK3CKELtoAvk93aQJB79iDWFP2heRmmbqLima2roUCqjeSQi6YbmEmsW",
  "key19": "4SAHNDinjqeDnNjfsqN8CwuvjBt6wJpL2ChnvrCPWnyhNWiJj2qxA2m9Qj1GUnfu8Vano2CvYA55RsRe7VR7dwk",
  "key20": "43h2nPeTUCTR9K7WxM3ne9erHU84KyiHwtV77bUmdKkDpx1h3vftyVgTEym6UEnURGEnUrABxYpjrcDv1it2j16V",
  "key21": "5mmy1jF6QRfkqvDrK2uJXzgs9zkpTkLCQMoq1BcH8nDMjcr4xJyF7MhQW8f4GPnb8ixQ3TzzzMx2iAB2krETdhnx",
  "key22": "3mvaytFyzDGoTEFKbBq1H5LbrwC2SkpHFjxKU5vA5Yq17bW7KsTZR9uwK6y2CYg6Z1n8uhzCyKpr4PKXSwr8PoJv",
  "key23": "4Zspw46coYXatY5Z9HYAAe8y3jx3QsyTs1427TMEzCQqa8Wyhcfv4Hc6PshgSy2sqsj34NkiWJw8rDwsTKtmCSB9",
  "key24": "5LLG3ovmZ7eJgcQnn8kJXSw6WRR1iGX1DBTZrhVs3rKmfCL18yTTGA1KABXXAKBFjGB1shykSLVDTbDPdEywcjfe",
  "key25": "MBEeu5b5uwWj4n7kAEaquNAQuNj6ZL9hU6gyoATJUbgrDVNo3t9f7GYr6iy9YuGHUS8BNLdNktys8GiJ3B8NKDy",
  "key26": "4WkhxjGpHFFFDaALh64rapzxdveNbxA5CWjaNSRk6JhMhmTBYPxFwqxFp8K2PtaAef81XYkHxAQHwTVbHAV1kRwz",
  "key27": "49j86erYLeRqvy1JKqCBEcJEhdGnavq7XK77ZjZnEtuB4VwdmexEA7BSWeuohKqF211AhgXNr8cM33iFeyiZLccH",
  "key28": "4zXNeAuYabVCBEcQthkUTEhCT6BUdxaSeS6QfBRh4s8TRuPBw4HdhxrwoUHF73QFMVN2RMrTsDw5EQVjeMw26oBA",
  "key29": "R2F5aCe2KLpWZBSZScNY6MMBoXBzpNU6r7DbH6krfpjBcg37CiJgyZPfFRct4TdsKTRrB7ZQW6KVcSZvWo5kn14",
  "key30": "gUY6zofiuR4eTJzV4ZhLwnD9EeABWP689BeXcTCnnpTBoX3C1QSpbEkmP1hzNTPbLWdFzwrniMKLNw9Z8TRaDVs"
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
