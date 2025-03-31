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
    "4MKGgK58VA62SwvGq7VcQZbbfcV4fTUcnA1bm8hVCKdrtap9wyeLqn6VretxMw2Ea1iEqiMj6sCwnLDZjTAiUw5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TCe9JogdcwgdeJDxnrs1Eigue9tP2TNpn3jcX42Eh3BgRoqrZRfazZBKXUo1Dxibm5zFPwx1dboLMXxtypxLYJ",
  "key1": "2pH2T6x2dyrnF1CMDMou4Hq5R4tai2s1hGXF8EhZY9TQGu6skPW7pTqNSLrgWZff1jgaJPhxbyukYc13yFexQice",
  "key2": "37U7ERPjaLKcNVdp7Afx9bwFQ9hajxwxhKtshg4iRcpjQdXzn4oyzBm6BtUMZKD1VD58fL3uKm2HySygphr6Td2w",
  "key3": "3xKYYQPQb1aS9iBKSaWvYNScpVmtTk7wr4hNB6rGBMPqbukk58yu2fMR73ihgR6JvBw2fgqxC3f5TkKxAx5B9GtR",
  "key4": "AnwYbi6ibRZjjToDwuotCYep3ZiqtZSGcpvxTsfnpbn4kigXYCfctS7m46jJGUjW2GLKT4y1X5oTMTScvfnVY7e",
  "key5": "2QtBiPvhB3wQDD3RuZXXwxkCH1DwaQWygbvgvtWBzzbhyhHmdLtcytYFkQ4i44WjaP3zL79btXyg2AWJbhcymSwn",
  "key6": "5gUHDFK9xZfr2ydQ9uHQHyWVdmMDhhKfT6jYdD1jmvNyaCqydnduW6L3giAWqNuLZUxKUCbaATWMwTLUEQyW2KqU",
  "key7": "2YW13cC3opsbw2RHpbuHTKUMGdXnDYhsp6naQfMBPuirfsjrNbgQzy3QMjWknnorc3tJzXihsUSPGZmTyovZ49ho",
  "key8": "5n2Bm4eZvJ9rAwEx1ayJhhwGspVqEjhciVJgE5PxS2GfV6Tg78RmTKJ2yPtHt3TcgQMrjac3LETDEHFbSPFkjge9",
  "key9": "3sewKthZ4wK2iKZpdRnG2Agky8jKTgaa4dHjXrKSqkumkKaPvz4o2V3BTBDip3BbLKyTi27f61ujjp84YDLac2Su",
  "key10": "5y9zJmagX4KugfTQcnLoM7s7tcLPFChmDrL2NoikR5njrrpQJVCY2bwWq7xmn83Vg1ZPWkdMNtTVsYKy6zDw2iaG",
  "key11": "5ZDgadKJZJGgikFjbdQ76Yw2zL8WdunML9obFPKHn6WEjhJDj9ikCaUeeNpDK8VzY312BWjg59U4dvbT7AQn4feH",
  "key12": "3CDrvsevF841PBfD7zER6C7FDyAM2LeCXWLmqThCkYtpJrLiLkD1q1tgtzErNKgYfZkEU7FGNNXdBqbExhjBerkQ",
  "key13": "4bTz8f1DZgUbMqDgDTXvP6cpHWTVqhAVUMAsHRHE5gCKpgWi5ELbimMea5UkwwBncEZ3AYExceniNcnie1t3JoYs",
  "key14": "449HzoH7GqSJFYpXu1YWct9WVTQcJZSK13pUN8XgLQTBTxf4Nd28ve3UFjzQfFNjrSv4SafLXxjD6oSBEio4zPSB",
  "key15": "2Yk4NvS1A5kLhZbHs5xQvhcr2Sc4Gg4YWmrJbWxrUnosstg4tLznsirWKy8ZV6NPywRNZophbtN2mimH4M8GAff3",
  "key16": "2R81ZJHsVML8yvty8WLKq8skzy383X8Nb3EwD24iEnj4Kw7Z6kWL6rm7PjuS7xVhqdBKc6puooi9ocJqeuaXhzib",
  "key17": "5oKo9FpsAf2PCveUWFCgAvftkXEbFUzWNdpC7g9FyZktsE8EpuNFZ1Apg23se1ALqpByX2BnbqcnPychNWFADPVQ",
  "key18": "22Yy2RDLgSw1E3Vi4n39vv42MtzBQccGR8A8B21a7nzb6pNURjxZNMBBAivKcFTSFUPCF4bwRnDnYMzv1GR1CtED",
  "key19": "4QjoASF3LdoJEomxHNmJ9gESyf8HQmJca9JHBTwmCvXJbN4VR9sceysmjsn7kHF926aq8RzJ72m44pMPzugBmEZT",
  "key20": "2Gj7g8Ej15WrW7aifaaib5XZdR3L15MLC3NUoJKHCuDynsBAmerwhFHrywyx7jPUUeyg4p776v4GQ7EyznbXd38S",
  "key21": "39P3Gk5L1gjbMnSwqNAmLChc1aUnCb2MMZk9kHsi2cZBVqWrKriWwi8MAJyQ7CJGQ5eV6D19sGxHChKCrLyj5sp",
  "key22": "3Fv4wLJMxfVHsyiqgvEeEkUxpqxGboMAryqXqxnpdBQvW51J1xLuxL4ArTVAu6jNQnS5HEqAnoG1UQNU916xW2Te",
  "key23": "5b1bawVgCY3ZWn23RgxaSBk2M17NWc2VJ3HfBpuABdkgUapmKPmUiAmY9Sq62RhdsxcC2kRDL7vvMjQJbnMpExhP",
  "key24": "637Yge2ZuxMwo26dRzxaD2YstK8Kvd7CJjLjYKTFZSjd6fijpy8iFSuWG6hQKi531caZb1gKfRUFA1Z7WwAcNUQ5",
  "key25": "XVVHJXvCGemKYTD1b97hemCjhbzwJf2USyxkcNDUqadWkxojQnURfcEQ4XTJNusJYwb16RFjXD38VHvDHkjrJom",
  "key26": "gEMxkhDxWL6PP4RzHYV31VuzjbDSRLFh4hneGo95HQ5aSPRDDRKyQjNkv7nCuJudaeTk4wKJQi1TW6Z7Pxuobze",
  "key27": "5tguMr4kDdT1JTGoeqyHqNro4A87LLroYKtcvREdLSjNMzzfZPJ3xjGkCu4JR4aBu725ZtkMSK2ovFHeABQTzqM6",
  "key28": "64JBr8qbJups6Ju212CpaGu8rv1N2B13jdWpBLvBrPKjWgk4eeLPSkCPXxNyJR48zN5AK6r8wgtR66gapSRddoiG",
  "key29": "5fUsqg7sERDkauVWUs8t3Vgd59VZmHt5zvPn81XrevCvgCsGCJ9xJmZ8CcQDgyngtFKZfg13kfVSELaxuDnLFvet",
  "key30": "39nPYjdCBMB68H9gDibkQhbsM5jUQbk71hRzwXAUyt1eCNFVxWFijfL77Nh1CA6Hv4a2RgXFVoff1xVLosAzwHTW",
  "key31": "3kVVtMY8sr9PFS4DMpwbag3x3d5xqTvBeUz4QMYXpAF2p9xCX1nPrwrMvU8UXWGWFL5ruHkBSNQDaMvmpDV3Ajzr",
  "key32": "2mae5epy8xwuFuqvZWCbSALREWhaPUVNdtfN7T7o2Az1sbwHp45JKSVovbTczQW7jfz1teyEwEqLUF5HM44cjLBP",
  "key33": "5YAH1QB8JPp2pqNNxrYryVnvf3uVwTHGsNovAP6ygaCibgguPxi2FgpdfW4SCnR3QjWevrgaqM1CbwRBAfzcDAQ",
  "key34": "1ayYYa15NGaidW6KGYov2ZXdNRDZXq45dqBcUwgtuLjaK7fD6efGASJSVrSSc7Vo7rqHa5ATTSJ1mF7io8MWAYq",
  "key35": "37tB8ZxdaDkTpVbXtdxvVmWJcv6ubsvo12KPNc2LjFMNFQpygaqY6EkNhgcQAGUGeVrP8Cr46dWf2D8uAszK8oQ9",
  "key36": "4hcgPi6mM8xDbmAfjDxqVgk7uXMk575n67FMq3T3sWStGEmYXXCSDZRCpZvJM6Jsoeb8jz1ih1FcohKJtkTXb6VG"
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
