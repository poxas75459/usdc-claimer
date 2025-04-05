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
    "5Dk3Xsk5CWPe7EnuZCq5BvTJpuXEJLjrzyHzhV926WvDAZvUXYGirKmwG9R6gzby4yk4jwinLfFvuyUqdk5WqpqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZfud1nhafzh1UM2VvwmuuDaGH9FYrBrjqjDS3NWjpYgeJhR3iqbstycLCCdDBdqW4iHDoYMYks6BHe6WomxyHh",
  "key1": "27yXCLMuzjVYyaNTZNGLaeztUinihXwQ5vnbmkhzeYnCz7sMeQwRHWKEC9jQy9WXveyWDEZhiWE8Cmwn886mX6qJ",
  "key2": "m79GEt4rnRxZd8oKYQ4MXqPEy4d8RzX65SRvEBrbJCyQxByw2FfdE7Uv7NzmLvY7s4qxd1NjBQSZ4qvk4LkpfKr",
  "key3": "2Be1bdDmsRrDdmN7dz4NZneP16qqC1BAPRYaxeKq6QvJLD3mUTgKa8GdMrZfS1qXNMpsS1MBWm1KpPC4iUHAmXd8",
  "key4": "5zYhPoHpq8Bmco7BeajiPyWuLBCqD8s8odxLMZ9hGW9NLyTYrvAvorrDaie9AAgUayzLUmfaRF31R4dDw981G9vS",
  "key5": "24y9VM1k38eSz1E6YD5J1nZ2tYZRwoQ5u75wRrqXKvYnrgf5r9fJjdWdrWFVDMkm8TS1t838cV8mJ4nCmg3N5AL8",
  "key6": "32r22zV5wPRkBAyojsvn5AtVgrmUTxU4ZyrAR3WuFzojwCL89Te4iBjzSqfsewV3DtixpmQxnsXBm1fqDWPiwUoB",
  "key7": "3cRaUBCjjw1VMz4PaufjE3v9bQuPwkFC1NxaHcJP4X7gXWuL91SZfGu6d6fAbXEMa2qunhizDfXoaD8bpAE3Rnug",
  "key8": "kWXDeYmmYT5VF5BHsx9uZWzusmVJGd5XQJ5ZCMga3ueqyu9UyzhHxrFbq11jzvZ49EtaMe3Gs1N8APrpfSwCoVa",
  "key9": "4Kw8iS4H7JAwWMP44jBjztPJnhMrctprZ9oK6zqfFnWrcaxCcJWo83D4xY3zJKj3CDDHdRvH7h67hqvChydo3onL",
  "key10": "37rGsuRoQRM7Jy28kVyUnoz1NoEXX7ZTyHQCxTe6tXLBX4YuuPxMf1HziKENygMbwXsH7KgYPEXfqfvNiFiVxjhN",
  "key11": "3w9J93pikJV9HbH3pqcbSXJBSLCdw9R7ZxSkCiRrWGyjndfD362NMf5mJRtJJnFLrps2wAhMC564a1sBkxtiGVko",
  "key12": "4gaRm2ib1nkSXufZHjSxNF3WdZUDk9qgR5QJWZ1qhxt4TPLE9uHYRZVuPCWHecfthKiGPFTUNSk245TDc9hCJ4Ku",
  "key13": "32G2uUBr6eg2Q3hmzjJDfhSdUUBfvoXMVCLW7ApsL2Fb5XWBViggFkKd1iay2sZbZG1wgGjXzi33MB5tYe21WpfT",
  "key14": "4SEvQQSKXtZ4tQQ7sa3TsRX4ttUmj1kg8cyWztLKh5JJA3b1csVAW4odG8RKK1rWh7d3Q6HJw7cxTJcRiXVWbdGt",
  "key15": "5DnryV7wx3tNm8TVcquUEKkGackD8EKynB52mie4gcQo2ixRj7aM6f9zBcgCFQuvCPK6Y9ca8GUrch3CSjZU5C9o",
  "key16": "4rYg29rCCZ8cxjBCyRk6Cx7goyzVr3DoZcYtvVKzRjWLHVaFJr8j3SfkFTGxaG3LqXYg5t4dwN1Rse94mquKAiVF",
  "key17": "27fAWUSCSaxmfrjePT1oVWGWZa5k6R6hxisSnYn6BnCvf7pKx7qJHN4z2SSjR8bvAXaRntfLhUhtzpLXtGFtjtHo",
  "key18": "3eyjGuktbGtp8iccLmwJk5UjNpUYeXb8iVLsTwj87iNqSBiPy3qkm5AhnzcLK35f7zQGG3LufxGDw2RFdmpvoqbD",
  "key19": "4BtJgKaAJxtE9BFAPoMtZud9MY9SYHF1j3RpSHALsDo6LhUXyBfjxVA9yTL6BxEcXYowei2VGVi4GE2fethCwvRu",
  "key20": "4BMH7tomy4s8QtrprAYW2EKU9H15Bc2YvQ1b19Fypp3sSszZdwuLXSA6nWv9U6c8LurVhkk4mmafroXoGE5AZjPv",
  "key21": "2g5ocD8w7LiYUDL8FuM55tZXQrTWCeVSzNCbYRCzCKDgi9XzrDDzoT5JZAJe7aSYSnVafUJmwBqhRntdGLdMnxqX",
  "key22": "5rYWXrBYM12Qq2ngpVzLYxx4UTiubRDcu8R4iqBAjmQDy8WSTe9JyNKK4WzbqUhsRdxj9E9PEbWPWGzhYSUAcAuf",
  "key23": "29zJZKb1J1w7E5vB5otyX7znPizkGxBXX1F3EgGPw5aLHCsBPBfV3DiAbuMJcPS2bSohLeVgEdhUmGdeSLNeCTRM",
  "key24": "5uzsPnZc7YEchAP8m8YVTuDf3jbyX4iPz3vC44d8bx3FLwXRMsbofM1zAX2okvHJZGj64mzFgB7q2k3Nqq6dfcMq",
  "key25": "2YvaUgYfhik5ibh75XXfVpsHJjHEra2AMMqFcebjdoCqFULJCCKtLUx6A4ZeRakoy5AaQhANTNuKFWYbvjLFeZNr",
  "key26": "51GUBfi8xQgDvTtGQb4LTL9usH5NAMdVZm5Zz6XhswdJsJMV7sdjx8HxrpmR8nZmpL3Ja1ZoEtajNXBLTt7QXzyg",
  "key27": "3guu13byHNqxHr653Gmxqwk1hhfEQULDaFPx6r6392cabN56dBgTUJJ14sftDYNcC8dphZEmsNUoDpe7mnpPu8hb",
  "key28": "4FndV4dCuPKZCkkdJRhtm5y3E52Ch4FcXTXBrehdzVjPN17QCvxx11ouk5ypMWRF1vSAno84XXK9MrGLGfDUb5g7",
  "key29": "2QoZXWQGk4qSDtdaTUTH2K7dCGfP2fUdtfinUCkb8mwwNSWtWDc4H5jFWZCXBodsQcGgUExUTdjkEpivYMzGypt6",
  "key30": "evjigCHULE3KeKtDsCBwFdRQqsLTBH3hqxSsBK4g8G5W117iNrjrb3crLfoGgZERGRdLgT2uqyPLckYXBB1E6hc",
  "key31": "2HnUqfYbFeHzqEGxUwr5qQ2hJtgUtRqUH28F8eT8gvdfmwAksYJRZNUzxSNkgftcBsyHNQDezzXnEP8CZodKLEUA",
  "key32": "4KM44jbayPdfu3pvmX9c3z8xeqEzBCczBwTEGHGqoc8j28xkkK2CTdYiMo33r5a8B7bKiGHRi8JU8pCfDcERePfw",
  "key33": "5krKteChtRTSwPfSsEDqVxkac8ymVXeNmGq8LDPGETcDFvFqqMH5bJk9n2sMrWRQ8kptnmjUcoxcgESxhL8RYJ6V",
  "key34": "dQbjHix1gPXqYwHhbhYT9G15hjHrq4xYJpPVGqAgsoa8TbCCHRQyFFznM5QmfD81Aa1up6YyDFJowL2yy9jDrvV",
  "key35": "5TdaDdp8AsKC2toFjFrQEySfBf8x6n4f2wnZ2iumXmfK79zacJgzNW2mnfrhg1K2J4ghSrJd4uesXvjJgA3EjJmX",
  "key36": "66AxjaJ1GmXr7vofvhgVQCUEhyZyF1jaceCSqtVnTvKyf4nTLF2Lx6Wieo8Sxw7v5UjW8cPhnk6crLP5vaV3HYKT",
  "key37": "PUKQq1KeZp72g4LreNwxffsUM48kjermiGaE4BLeh1NB6Ks1jShUmQbU42RfyDk9oVbVa27qLghLyGVh3Jhubtz",
  "key38": "2r59Erifs8WXeF8jsuN91WdkWUJoHXubq2UFkLhyDKwJFCnijTYxtcuuSiHPb7EESnBkBRpSZYDKf7dkj8okxZHq",
  "key39": "5NL7s83gxGhAnLD1htXLyeivDSL2itvWp7qGoVVN31p3PAMzWLVKdzcZUN7AGgHtxt1xmxkzbZThyiJD3EcmMH2a",
  "key40": "5dM76eSg9HTbTt4DAiEjFFF7mZnkpnUR5GMmNUu9i2ep5MpNXeGLSk6k196m6XtaZUDU4iwJuUqCmADCf2E3f48A",
  "key41": "47baxmUfnrCkrk4ZS2eoFwSDocJGiWjsf5YoQNQKvXD7T1MV5QREM69NM5nRMyyaCkzc8fYmeatAmFJBBzkSSbAX",
  "key42": "4zaSWrZ7UFsYxNH4fRdAnHsy4RmkN5MfTikFAqRCLtDeR7uKqxUn8K2c1LMzBc7AQVDU2TGRYSReAx6Wa2DZFyoa",
  "key43": "XAkddyY44vydRDix8iswvEKSsQNH9mhAbNCyGHX7Z7ZkjX2Rmy2Hhc6sPBPrKcDwfKKB5MJ5FGNHEaU8JpZCBHu"
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
