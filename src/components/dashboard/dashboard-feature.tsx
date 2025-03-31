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
    "3d6kubr4NvMAyKbJrhPk4WujCzfsLyH4RpYsvPAZAhRzNzSH1ZMq3qWWdY9dhdz8gCgiD7TZbiKDnTTQb76v5oXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGWihhF62URDAx1mtn2eyMp5rTs1SCDgPtSeMeFdewksAejZeEXB9eZDHXbAEyNP7yjQnCCX17x2S4r1TzcDhYh",
  "key1": "3Uz8ntMtLEmiYyvBrTYryah65PNsjztgcrMjdr6SjNVb74rJuLBc8ExTiagwZegKwVt2mmBA6vngKgxoTxydikGA",
  "key2": "jbfqGqWujocnH2gWfT7SuaeVJr4Gj9dxM4x418DLnF76mFiRMAHLXvuPBji3jtX7VbVnhowNme1cEKf9Du4HcyX",
  "key3": "2fjCFefDG2Yrp5CoJC1SDJyMrbhsdKKJJv9ojTFi6ZBAm6GiMKphkQS3yqAiAaxpkQwnQG4RaZHc5HLW4HKsXzjF",
  "key4": "a48eJKQ7wzqZeF4AYaMQadhrb7MGNpEgPA1KrBTYZXzooCvEPqbscjftFzaGka4f6SseJCBSzyW2WxXu7ZHtTbn",
  "key5": "zXN7VWng3S3aWq8Ps6NoqowJ43jmZTSTC8qQVxgR4fWAczp1QTHNw8hE2haMnC1Hs9vFfYWgFrPNFcv6CbtmqXR",
  "key6": "n5ZWfKeGjnDo4mhdJPUtpd9o1oGMgHh2Ds7qGVQ9TzMUrhHrRZBJa6ejMZnAzRfBFnPW6oD91ivHfBHQ2CZRwk5",
  "key7": "cis1DjWRH183VuGGtzmC6og6tMDTGxc6RxSgkxdFPRBXDTQGC4T5PAbBcfUfuaA7Xdy1s5R9CXLLJmG41QMqRYX",
  "key8": "SjHcmGVG9xwWzpkkrnNSxPDNR7A4sAVSriUWAMNADX1x75e8diDzqh4yCyqJTT5Tqo4T9AJE1DoSj2rbNZUAJks",
  "key9": "3NTayLSj4bnqmNDhexADjkeQWec8HbeGc8CSUrvBchxxtZ3NVLt3JM2S82ywgiB7XwcwwWFN8XRB7a8uuTNXGh5f",
  "key10": "5jPzvAE6HCam8WEa81jZA9utZJ6Q8DnJaDNziNZwzGHi8vd8mXE56wKnH8i1XyKdX71qMnmaY1ySSgqcy53GDWD",
  "key11": "33kfj6su5BJfwyKtqSUaN2L694wyZkWDBpo66o3Atj1AZJcKYJihCU32ZPYjQxNbDPmo3Mb1VHorTx5uBBjaJtma",
  "key12": "2evpj9kGP7psD3VDw2FRD7ST2F96mSACT4AoLYXzJvEyhmaeTAq2jiLgB7eaWJ6vt4hPeebo4BmPbAdM5yL9km1G",
  "key13": "2yUiCKfxapg4Kse3y6L6SBCeQK7rWXuD7mA5cW6kBnzsQaacmwkBPZ3KQ5BSpgWAT2Y1VjGEGc9VQGQxkn2aWvQw",
  "key14": "2rNkaT7XJEwwjiBV4LXkV4pqvmgbw16QZFuKtXKD6NHjVZuFGVkBZYCskDJBpa3Tw7e93hHAS7DWzkwrvvRmAUcn",
  "key15": "2tJdZJcx96C9qscWnYVsrWnmP14PtC9ieRkequkwxSsMiCyTuduVFcyZHQ4XS1xo9SPE2udnGMXJBcEvR2yKff5P",
  "key16": "5qWPh1gRMKmQCXtwjZxpwBJ5jYyR9b86vCiBzF9WSeXg8ED7bN5uctThRtokJHnnqFkLwvBGBqQNDR4HGE61wHBH",
  "key17": "2ej6CdQmrrthRW9yC3vhPxG52UYA1S5LaMwDuXRRtK56ioh3jq1w9C6KYBT98NG6UjuSJnA1251jBeawXuuyghno",
  "key18": "5Xu3KQbS3VueCfuhXhwCkQVH4FepK7Rhe388omsvUNEQe4FMhXJ32XV6E6qkknbZ5ArEvpr3SZXTgViL8dRrBEbL",
  "key19": "4RhJ2uCQUvTppE9pbLhZzQR5zXxxCQCXDEWKhSVFrXLks5rA75Nz7fq7ymwbL62JR2yeUT831bxTbMzG327GsTDo",
  "key20": "43vBxnu52D6AjPVPckehZg2ohExmXqHahAsBAJqcoMj54kouUpnc1BmUAnsfKdDz2wr21wTSdoW6LghW6Ld2E5H",
  "key21": "2JngX2ox9QoKuz52Rfn9ZtkLNp9LnJpEqMGF6LJgs2dASCnKZ6XcvATB4SKqLcixgCyfZG3Tq3Pu9t1kdxt9H1Kx",
  "key22": "1ytRN9iWKd2vfs6jb3QwXfFJj82N78kXyQYtrUcSydcvyMn2dMcVkxrkhH67TYYEmxdJ4pREuf8nRnwHKjDBMuf",
  "key23": "3Qe7WBrqjRShU2U64r3i1fKRRxoRPaqRvxNBgLf2VmCZShF2WaX5QfZPQgVcNt2WErJVygeZ7HMVKyxKcQ5kpTxu",
  "key24": "LQ3yX3bePFnhKwDibDcZbrJrhE3caueR8p3wdqz6UM6KAacx5UpPe88K59WZEh29CRNea8UfmdRbwsVJpo7SGAx",
  "key25": "4gpWFw7jkben8oZsmtMxdUVG48WPAj5jNWTq2crXfS5cTftSkGc21zWn1ZhSBnP4ZPpxPUU9ER3TC7LCPFn42noX",
  "key26": "3KdAzhxJJP1uzsRWDYwiDrCb3eX1UbmVvDzr6uCw175YLTDoxid5erFuDRFZyvbaXSB4cxDGxGEXPVyGWYuad2ut",
  "key27": "3UFbufroZWivUJhHx6T7J5wf1XXmWQRiHyn8GvGBQG8XmHNQT4gdoGoTTVBFRCVwP3gLYZsWe6kJMJsy7QqMhz1j",
  "key28": "4Pm3Axh16V6JLBFZpUdBbNb2b4ikhRUVYyc9ioSNgHx5rJJ75gg1i24TYtZ32DoCNaD7yaTGJuotUzZ88DSU6a38",
  "key29": "4rpWhXXCPzSzLB2gppPoKTSBS3AujonKTSebWyY4ggersM4UPUyZ3ezHCTggzn2tCQkLR4R7s4hidyhjES2dapfL",
  "key30": "3aL297bPCNCbxZgUKUysmi4cX54Rj4VEbDgCSTAQV8Yv2mtH1A73JxacxTN5jRiWZDgg8NfLZeMzE3aoDDPbBx2G",
  "key31": "noBuBRodEeQS9i4sd4ZjM3ki2L8GTgfQrTAHaX3dUi5RdNxYtiUrsVE2XCLUoBK6HYmNha3UUTA66UMHVF8v9Fz",
  "key32": "Z4W7WDK1ssfgpZoBegxj7zerSHDx9rN34kpeKnCjhttSAQyVfzg5aKJRcE3znmA9Yeuhxk5uvrqPG7rqSTPRNoN",
  "key33": "4qQy6XaLYZf2xrSDq3qQy5WG53D2oZHuCQpPYMvfVGrgAb1eiBU4jqkAFJes6N6qynDEqz3PNEs6gsFPEfk6hiGd",
  "key34": "5b3TvEGmR1DMzXMH2EzMovUiAsU6ecxL2bG1ZNpKnSfPCFmYjUvemAZmPCEnNcYYwz9zvGYgeghXjsRycbu1fgFW",
  "key35": "2yqHUB1jMF6GhsQx56Ya4wuk6ikLXyRgJNxE5uBqS3gN5sdhQ92yonHCtaZiyEPji7qoEnQZivDPHAU4AAgXtps6",
  "key36": "Bi7Si9fvX8WL3oKzQqTasQZtzNoyMgp3LMdxN9s3Q59vQaQGtjiuevLJdtVBSJVmVQFkGknu2JT5dhnBcTn6Dx5",
  "key37": "2yycAwwpiz5jRieT6TK2jAPhnbfk8Hcu9TSHsj7CbW3AWJ95ygSUAGMQRrkw2FJz8kAkmgftPp1LizXRHPezUqSy",
  "key38": "5D14SCwMHQFGxn7EiQ4zDtneVfKNsW4jjzji9p6fKYFLJ9TEG1GncyLKAC3ZCfD5SLjZvrVfCwG8pwnnakGwGFu7",
  "key39": "3d9U6iWpcZegw8ZSCc1NumXnp9afuCH89aiyhEJ526VT2LGmkBTpc7X6kRFkbCWKJJfQhzUcxh1R8CT35TqpqYv",
  "key40": "byHbQjhqMGx5y3VGP3aMqGwbUgZW7VJhr28YcPp7zPUu7NHohsXLDaAaks5BtCUFDFL5pvePjzQo2C38d5HUcU7",
  "key41": "5iMBXzYX7vu5p2vb1A2s3enMBsBXzScQpBfg5eNUSYmWRt2MV5w2zNWpvxoZHAWVmPtZkj8wgb9GQ8xVFtAM3Dim",
  "key42": "538Y1qR7hQhvNPm8QhQgU5g4Qac2DvwMFESBdqzDHDBXPRLRUYeeDpd3TWQkmcLXaDoyDK1weqKig4dKAvtzy8Fv"
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
