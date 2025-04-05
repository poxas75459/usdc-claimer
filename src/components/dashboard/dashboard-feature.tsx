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
    "5cp88KYATD4Xq2V6FyrCY59QwWmWpnpyzr3iAjY2YYqmW8cgd7hHEzE1uasgy15hV3v1zut6euPFqkLpzTirJE4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ffrgDEGrZ6Q3CpfeNSoubBAKjTPZVy1sFhm6ZZcFFMHfi8gpJrQPVUbgcyytzqgot8UzRvBJQVv7zmYJEqwT4m",
  "key1": "PKWt6sgTzkfCfukZpTbbupBTnSDqnMXfiJzwfchRxGiqC1hyx7tAUvCpx9R7ihE6MwL434rBD18gbuSbEECeGmW",
  "key2": "3yuzQex9qtvZhS2YAA9eot2yFDHKCEKhDK2RjzuN5U1CVEZC51BfdyDV6WraMqujTYUfLeN7hxmV3c9ukFuJBZYk",
  "key3": "3V4GbfJqwtViyKThLvu6WTcJvtXJGez52Uwr6uT6RAZQDu48Sv2hgQSRmFA3uLebgWj8nMsUofd8AcKbCaqKo8hj",
  "key4": "2g9LPSbr1XnQiPBgXmTL5LeAYVz8W3FRBT5T1A1Q3rkAPCVhQAqUp3CK66vbLzMDmdSTmpz3ApB1RuFSxgC5bTVP",
  "key5": "4MHgEgaYdVr8tZquyTBba7muWGutxFY4MEXhPnHmfXjgCK6ZdAu4zgXGr2CmYfU5B7fgRGm4s1oQnVs7oob6Qvyi",
  "key6": "QmHHidPpr4F9xtFDRj3XHZbp7tyWGqr2qd8sQsUDN46FmtfKZoBNH2AdegbwbM2gFe4Xzte7ta7LtS5g4pkFz6k",
  "key7": "4dkRvhBQiupM4qQsmxKkoVwZTiDTFsHa5F5FPXJBCQiqFd5rwdysrPJfgmUrmvGULA6VGBUWM248PnwYszYns5WA",
  "key8": "23AWrMhKNfHqwGU7nS8MKbhfU4w1Hyf8gCmTujDaRn65TWAuyku3ZSwrjm7p1WpRCizHhwtxQN8yf722RBtL4Ro4",
  "key9": "3FQTd3voUGxQKbMvYdY6Z3egVmELZWL8xzMPZ1EyhgJ5p8wxDVm4sJP7jQzFRp856wCHdwNLnXEgJ7ENdckosXyw",
  "key10": "2QHY9xTiKM1dZrmFnHizMCS5Dm9gRQU1F7859G5HYkCDrDtoyuzTWdypHChPS5u9njnMSWDfzY2FXyJ5d5q2rQCk",
  "key11": "2KbzJ6cnCPZU3gnWf7VBvPUzGQfCCgBAHcX7iqPVqYJvpMnQnnnB8vi9F6DHEhTkubPb8Z8dB7nWZAPAWdm4ezdm",
  "key12": "2Wj6iDA6KcaZNKTVHiaBQc8ETH1hjBri7vy7YcykJu2xNVMWAL2FaG51hfcbVVNoEEQaV9Ly9qm2YkKawnH2KVvj",
  "key13": "QVpg7GSYvxH7swAQ1hLp3vMhFDMpN4DFt8N7ygnzCNfDmKFjYUNTU6v1RMFr1XYW4UwEM2ibdHYKEdQUfPyeHEm",
  "key14": "3UUVfoqbafgsQJrEoDEvAnRgwht17JkqkWCQwGoU4tLDrQQh2ouW4znrc7aNsqfH1jopSDbNcRssMawMbsctEt5A",
  "key15": "2A3nP69Ktn133AQJr2CVX8kqvGDcCa9zWxMUxbDywsu6ieqFR3wzrTBHu6FGkLGPGfHpLQ99NAoesuamHUuanQ1Y",
  "key16": "ttJ6qx3eodLCgouqKBMxy3oP8tFYK8B8QRzXGopRvUTBonQH6dKvrc39o3QsQTxkqsn6ttGDQRhvDfzMJvx6Z1W",
  "key17": "2evB6AiF3ZdzWZWnKKVF2nksupQNLFhvh6vcttaiZGxKMqZwfvFoCXghuJ2H15iTrnkj2oi7cgSAS2ViomYW275M",
  "key18": "3q6xPYZ384V9ShZx1xiArNJna6E1m4uQKPonZSySgVfgSZeqR1yTyq5jtJMJMjFLufDxdVepzJSjzy5RgewyCiv2",
  "key19": "4spzGZEZyAS9c2kXS6Xx4eZJLJpJDdBRppfFp7FT3h7GpwNyjAEwuVNRZgkZLMuCnaheocpBHGueVeJWyMWQMYML",
  "key20": "5Rwg6S8FFsGeX6Hn1vUujQdSZCE1qXMkoGHTLVNFMgVDe9aJiLookaQJW8c9BdiTZRRvsfcn9YwXea3FMRTuYUrB",
  "key21": "TSJyk64tFzPfC4vrFoutHXskjnMsMfbxemYsjmKM9gJQubahv9yWTcAisjgTZxjxUt32jWN9pptUKRDsj5JxEL6",
  "key22": "3tJyuqv3bfhM4W97ZPy4QKKAkQew7zwezyBJyW8XCxEakfx1hDLtaCpJ7EXET9FahBrzf6KiFArnwJSFUaUTPFrh",
  "key23": "5EVsrDbW831aaWKthiQfpwwrvQ5F2SivVu87LGVLeiKfZruqFifRnGw32ukUdYpYDrBTbDNyDwLECiaBr6Xk6F3L",
  "key24": "3BZAbSo5R5pRhoLq2ksj7Fy2G6UFZRKRtJ8PWFwHYKprKRVLzwb1eds96pMuCvppSLWcmmD6uXq1s6x11XHNdATV",
  "key25": "3iCks9vtNEHTfCdVvM9PVatCYCTgwSw6DKzKwjtsueFcUA9mMCBF3X23fmNtDZ1VRuQtihdoTEWWGvohMZhz1rrV",
  "key26": "5reaZ6PU7z4HnrQngAKQpKF3RtR2b9SBea4YQwRregdtzbGHXW2DgKVSHy3Sy8ZXTcbHprJXuBeLN1AekGVzvv1d",
  "key27": "5xNXBXWap6mrQCNYJxJYfgUYR2Hb88UBBgjBX2Qg8ZCqVo2HJ7cnfLPv81totR91nM61VzstMtvc7nh3YsSZqip3",
  "key28": "5y3kjyxy8jgVPf2hrL3vpWasxoSKqmxhxzedeNwbSNPwtAeuaFqMkMVYfAmqsG3YQps7rwv33ebqrZDQ9aJFFGDY",
  "key29": "4HyyQRds6xSj2gbqKYDYhnSWPnikhMBoE8CrrfY59GJr7kv1iKp4mFDTRsJqPvcjUPMNAFYVok4RiYmAt4PhQHPQ",
  "key30": "N4UUeU83pZ35LkrXzghG9kbt8v2uhbc2qTcmTj7aGExXnbrJXerTsmBCMQaW9vfZVAEgxqyX2w8R2wYSLw2DUCL",
  "key31": "2QNyJ1X9LbK36zh1Vm2X6a35NAkhKaC6HVF4go8Lbd35xioCGjkp4v23nSczw1aN7Fy6EvGG22PYXgb8jGo7cwHf",
  "key32": "4Jf4KdjhD9onBSreqRf5Z7mLLsDBmGK35nhRDXGJjxsN2St3wh58Ght2WMFyArqbELH5EGQSyhVocfkbu4RRMNBv",
  "key33": "4qstK5URmecN93BZjBz6aZXVFDjuYMtqHtsXA9Goeip56HSRbRak19cEwoMJs9YZVpfcJk3wPcQuowhhgpeXjzbL",
  "key34": "4uUBJUMFVSUxRUyDSz21ztFZZx9THzTKPwVQVPRggiXaRWLVoJ5VHu7YBgy2woQ2MzvUK1aDn1aB6WJc8Eku4Epc",
  "key35": "8Y8kjxWxTfdAsya7iMessLjxG7haw9fGyEXjEJQxRRf29EeVHUnEDkyEcNYxTAJn7971q4zgKartA8gEjyVSeqD",
  "key36": "o3PPakmZoj684KGA76Jk4wdeHEVGeVVLLn6W2mW8JyRoLoT4WfW6F9bJ9rjKdprJfveC2kNBd5Zu1FPecSonx4d",
  "key37": "64EnafAYe7AXY4J3H36eTSXx25Q5xgwpoYhdcVTNagtMKyhMNZe6t9DikT7qs1ioaNA4jbrs4jbLgvGy6SSDnRcS",
  "key38": "3TEqugJVXLCpceBJvTEo1yUa981MP79VBZjuC1BxkBSFZWp4Xj7ARgYHeKqnWvUVM3Ai58zVDS3AuxWUSiGRkvRR",
  "key39": "2RSwaeqenKULcM97hf4wm2N7a6vyMMphqqGm85QkjdNr11kDhQRyAYAnFw9AcXGgBmCCGQ6c5tLZexd1utE2ah5B",
  "key40": "2vfeoxHVdpzrcDUhaP6mrUSNVHPFicX3gBoQRB1RQLx1SnBv39YWzHTuPkyUcqSJktPAaTZ9NJq2HgfvX2KkNpVC",
  "key41": "3RrxhnUbvUni4iJ7gJ5pfaLfrKQyKUPww8bvH2Ek1g6kZ1Y8kGzLfChNGdyzgTqqbm5e3jCnzS18GproRqGZq4fF",
  "key42": "LVaB6yV5PPHaccCt1C2Ms2Ybj3Z3nV8dSLCRokFW8i7JQug3UcxdzSCb8XdUScgPJkteC8dj1cxMTYVc2qwQNX6",
  "key43": "nSTayNPiUMsz6G35kBaotDeVXrwcMnJ1g8bx6bPnCtXuMam6vGYQn4tKUojP5aQXYB7DNiQCwiJYSpVpthdDn21",
  "key44": "49TNZYyC6aqCePMRPArGwu2Mq9qxu55Djh7qsuNnMiY1wMDEigQHWDFTSZJPbi4jnUq4L295ccqFYt1WHTxJbUVe",
  "key45": "3P8afEWLQxqZTCp35wH9nFuL6qy5ajxHeLTTXFjZNhJgoCDrnJ9hyr3nHJDWFKwTWmYDTtgH2VwSR7HBhWVpqvEC",
  "key46": "4Bv8rhSHkQKjueb5nsQAqyD3wAEnpyTS8uDDRisaozzxTmFVeD38n7McX1hjJSsP1YZgZbjmrWLH7LwaB2ridaKc",
  "key47": "1hQphQWCcyVYbcQ7FD6oVQk6r7kPPF8Nd3LMPsAvJLReMZgTRPiBC54namPaMQWk3mNPhU7heMTL7hZ8nDLFxWN",
  "key48": "5ugKKMUCeitkADprcTGAe2dEN11nEFWCKNHKcPiGhHHoqMKfuEGPkKvKQjvTJeCviQ5mvYEcTBkcr1fnJiJiBWK3"
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
