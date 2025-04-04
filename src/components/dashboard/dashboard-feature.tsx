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
    "3u3yFdRNDJGvcRj7FEdAfqnvcAn2NYNKas1nggXYXLjaLkkhnu3zmufdNTt4HnpvbZT5Xe3oCXVZKQFw3iJ8XULP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwbY898kGLCb7KjjEfJtzL1Mnxrr4xSQztAL2xPrbh5uEEzawbhQXJ8tg5oGqGBN7FRqFs1JuMDYkVwCpUX47cd",
  "key1": "3Rsse4RT5MaQcXtNbYqueNAaBYF5CaNBanWjPcY2sCVYuGxxRCVvbgU8Lxxpfdfc8FydS9g5BYBFniETdE85KnGe",
  "key2": "4wQWYettoCwip8Cxr5JADWuMQjUmMBsX2C6PJAXPsnZ8CB7kNCQYTxp2TruhVHY1YovAtuZvYGJ6gXWFh6VxjxCZ",
  "key3": "SvJkvgZhznKj2sYLHUDFm35MyHTGiodyiwRJiwHZxPcy4WQVf3L3unb5Sjqqe2qh6Gk2LBtwHtu627pHnkS78Ny",
  "key4": "4cVodNujGrhjDttVEZGCZnr8UDfso7xjVESTcfosu34UXKsEWgXyMUSqb6iZ8MEV2uXvSUk1v3Xg1RRb44NsZtbP",
  "key5": "5R8dyWsNP4M4WJVh2DBxzxKZi3tGJEMhkq36wNzD9ggpoRkzyJBYDmcBJCtoL3W1a5HaiCvSP8gbrGLUCiLVhqry",
  "key6": "2TWe9duTyHGZ37jy7JzphR5hYcu8HivxLBrXJMAWeKdSXrbZ5Pa5qYaVnYxMHYUbbDq6Zy9xjtikv6qeq7S5JgtS",
  "key7": "5gZA9hvjiqj6VqYa9XDo3C8VxKjJN2wJzQjCetNwoce5RjaEsH86N8Unm2wQU8jb3c8jDC5iXChT2Lcg4oKrdAjE",
  "key8": "3vhVtVPHBSbMn8RMMSu1xwbMfFv2igc3YCqbJtuH9UDP3Fe1DFdFgQRwf2rxDTF8HTanFyQxFuxewfgieodAZs4G",
  "key9": "28wjpdQNW8HHcciYVamaskkc7BRydWz5tQ37wmuk1GUddcAVQK8gMWG7vdU5D5k4QUL3CBuXhkFk8MUw5nEZmh2s",
  "key10": "25NboudZScPTkyvwoZ3tgxRTQpBiVY6h6VyCjQXR7r43NJMfhNUEVWD79cnSFF8nmJLtR6pW4ktLzfpXPkEmzDjr",
  "key11": "2oKpa4TXyBpx1jVGYQjKQnKPZynjd9xprr6aq38uQfZkMZriz7JJvpCJF1bjBLA2m7hTACL5Jdy2oiYkwHTEG5gC",
  "key12": "5XgdHShxJP2y8N9bQ2UVvKESQi3rDC6ofMofGwnovLZw8QCWmcKxwtJi418YoczzUtBGpZ9heH6dnwJ1VyDE8zLe",
  "key13": "WZBXFCDcUZpKTxLXzyHsd2NtBR2k1BsDoKfttqTteCDDUPtJp8KKtWKfi2NQA7ZbffVArGF1kKwM2KCWzYZXFE2",
  "key14": "34SJ2zuh5msL57YbWgvPoT4kCcNaATc8Zh9oKGQWDS5RgJLSWuhG5cEi9SWsGS9JSnJsb4aG6TeF6CEAs8kW3SWG",
  "key15": "5G7LbUJu9yZdbCYKC9uiSfey7F93bDBycBNGxcrRQmmJTT5c9LSusJEKvdwwK2t8AatWFsYsMGKo8MVcoyQ4pTNb",
  "key16": "BCVvDD39zF7sodDBaJHSKXjvv23xmews4sy7rx6K8Df8jiLHDJJkzM4tEWQAtc78vdZPunLSGtws1R3tR2Z9Q1u",
  "key17": "5DH5pWrUJTzsV9QUMzhbnRKERF24vriXB47t7WAGzqMAHHHfSLk39ZS3ySVbzCwmVb8LRxugtZTq6WgR99LR4WF6",
  "key18": "2ntNsmUhPm91RuXgkWocgcsbCk9kfxoauMejhYadzQC9gyL5k3vd4JaHcXo6r1ivbgQB5UEzcvE2asNzbyL9N2Lq",
  "key19": "4GeQyQZ4BBig4FtHp3xK56pVV5VaXd9zmj1TptDqxGqarNpuGqm7gVY5v1dh8fz34HPtCsJ6Y3wgunUiR6bygeWo",
  "key20": "3UX2UFMHtcRx6g3Vf61BLKv44cFkWbgt6CJGARKbeJLcScpYZ7rSWabZXjZkKtqB15CdFs9xpGSMBJTYcekNvsv7",
  "key21": "2uF6wAqPFpUtZpL994vsEuKsy2vNfuiFgVYXLbxWDwBq69XsDsujWqvtBHjRo9BN8T3i9w1MMKgd6umvKXG6U8Uq",
  "key22": "32ziW8unpttn9UGd4v1RYyze2gf8omXXKWsKn1uUuQpyAESDKSdo7JnDiEVFkcKMJZTd9b3aqPBr4BNaQntG71Zn",
  "key23": "5v85VsoHY1qDU2Z9Ka3FmdckbpNG6i68YKRgZ4SzimxmgAvdUGZYn5yiecMb7ndNAiFgxWukvmtdYhXvBTTLdA98",
  "key24": "4caMX6tcHnLfGVuLZu16ssmT8nkmfzgwu2LU46AR4sn9hfAdGypr3wF9fiRsZ3ugaej1oW59gyYQSXyPr4C8UQaK",
  "key25": "hjFzLLKamArePCAgRYr9na7rahLibn4aqiCyDvL9cJdcinPGKoTKtQXH2C4fGQtPUgzjYjNpAXVGKDTYn9wKodA",
  "key26": "3FSXguo4TMABN2WjVw9oN6ndswqRbBysDsCQkUkQ6nXTrbDki9Rp1ygczcQWPKZf1Hdw2HS7JFQaiZQpXtSL2Qx6",
  "key27": "5Q1AUEnXWByfUBkK5tCoFmDcKGAVbEaxs3XWYs3pYhPH5ekdzniwU7ti1GmzuqegsUw1bbMf8TiKKYe7TKU9ZBGa",
  "key28": "7b6p9Ea4XsXjPaHWE79wZWSLJVPVP8tDnYowcXtQD3ELyBZsG1WFudKN6bXWvz2YjFZPT7ynuXaCsNj6mr2yLfD",
  "key29": "52WTG9k3bhxsHdzwGFrF25GjwRx3yvwTxgwi9dyyySvj39ch5hbw2gsVSpR43rCASm1JYNA2yEd6eCi2GCtJ75VK",
  "key30": "49ohSvAfsgiYmSEqKUrygbDMEkDbHsbvYPPAYj7G7XQy3KKWDY1wMyKGizVcA4kgVR4HNDkbjcbFSC8CoMJDwgNu",
  "key31": "3SrXQPLUP1wpARaM2BTwqhhcAaB7z8TdhYEHeEjbvQogQMge4g3dN1hp1hHQTUfL3NEFdomwLTcB6PpJ82K1sTBH",
  "key32": "66mhy1c5F6DaAFWtwvn1Zxoe4CGRaEzRQMJsP3sBME4MATkbmN8LMtX6Guw8LSeBzT4Rt1YTg9uqdna5SUFEoUyW",
  "key33": "5TtBbjHfVWdV2DehmxTkq1E94b67JnFwd5Uv6aNhLC9mCj94ASgoEuYd8DVMUWwqxFSyLMq7ynYaFqRA3DXNKci4",
  "key34": "5m7Jbe13DpBsUAStQfK6ecCFwn8Ffqx6vpuBSoQgQ2xeqsxYMNjfwiMVo17eZUfezxarVLqA4YP3GvnbvNNiZmsf",
  "key35": "zSXJnaMbofhpjWJwS6ZxR1Z4CpfuJ7VVW2XFMQecTnSRNCvrXE3NEWdazKwyoipLhzf21nxFB3VaeAVUmkfzsUB",
  "key36": "2mhwC8R1GLv5Sjk6vNWrBLwy9KhfGBoMpRpf4JkpVJ3CvspLnp3piLjcrPGiLX9L2F9i1Hf5FQVZya1bfHxxtLhp",
  "key37": "3pEBHs7PefKTSsh88YY1er3vCUf98ZrAA6vr9imcUbGTiNXij8xsiBMr5YAsXMvk7ofGWC7YKohjzobArszhsvNP",
  "key38": "3hP57KoBDLS53nA5T7oazaJuJJ7tzdH5exjxjfgG39Q3YbYNvYrHjhQGXdJHiFcGUp4fBt5Bxd7YM1P3eTU6wFay",
  "key39": "2V1AgAZyidb3Z6UyzxG13rkbDvidqDSdMWMZYN2gEdzSH3FtNmryixFrTZBKKCTokK8VfBwHjMTm7Mez8zsp1CEB",
  "key40": "5E2qWa6AFfXW9N2etuNH4w9ktjydo3QrSPmPRmUNAkTaXT8s4DAHWFLYjmbksXjder5PnNodQacoaixqVZeu1h6M",
  "key41": "NJ8arsDrEf1QtgCgPtbYK73cHs3NRaPRz76fvtHLLmcWwEw63KP9UhN7HVZyC7p5WVEkCSqmHVLCCGQLKSvK2xZ",
  "key42": "3trBRG6y7Z411GWm5gQiUoKobk3up2JcSa4rkpUcTMbqmZvfGRQTHEKZjnyrKjuohXTgJtEUNmdiFs1eUmXcgmPR",
  "key43": "4Z5Z3jn73S4Uk63eZXiXwFCRGbky9L7HzSdcXDKMFgHYe4RjfmCFANBch1GT7pNW74Y5TzsedLnN5gAqKTnL9NU9",
  "key44": "xh9qN6LiFJoj1ZpSRbQswHjqPEqSuMdnHYVYaccuKpaoSTAyF3Fb5SMGvn6VMgDwFkuLDTNVH7kLiB7FEnNz1xZ",
  "key45": "JeSTPg5c7uooEpfzSX8aw4SmGUhiiU2c7Yrkvwrkndi6sTA4f111SFbE7chmhGyKFJ9cTmHic9cLPkoQw6LZGwP"
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
