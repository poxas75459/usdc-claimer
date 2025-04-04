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
    "55wxMnkfsuaetrUZtwL6DkbzaSJUcDf2MSSDcwzEGs9SgUE1xusxpTzbawPCpD5v4iknSvaKvXPGcffjYnH66F5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4VWabpyZJiwEmN26paBcSEeP89tpWWcxTTCmEwmvbqkd2EeEe4MCHz2HHVQyna9Hhan3KmdLK84YMEDZEYVL47",
  "key1": "75tJfKyU5gfYjdy3bybaUyQuyiJrK4DD9zgAYPojg54e2yvoNSXmWyzRQEe9yVW5WjJo82DERTbmUXFbtR3MnBf",
  "key2": "5NdoXEwXFX7gkJHBG9XU4rZWrjdRPCCkgegVv8mfSYUdvwYn3dNEUPGeDTBVMmcpUpmYV16wA4tLVKGVgbDudgbH",
  "key3": "2kJExy7bkaXiy4S33sqPWw5CEV3Z2m5u6o9GrDHuhwPYwNDaH7RuBnw24EhCf8fdzcxcNa1ffZBnMmjCtAW3fNuS",
  "key4": "4L2LbAZJVBu4mnzsQF6Zg7RweRB3vYaL3s8Df1Vez7DLuUZswbNpaiDNMCZ8s4p6BD591z6SZcyzx5SLXFsjfJ1X",
  "key5": "i39dZjFCckcAgVvxYZmQVsvyYKZot69HFE6FoWbHnfUreZ9SQstPcnxwG8WhpAXKD1mKo9j8SGVNaCH2kVtBYzZ",
  "key6": "3kTmoXwVgNiT5jrEQDtTNK6NjcSBEinqscWh6jkpjvkjKB3rvHSmzQyaUkRpcyqFx6FvJx8KgzJMb7tJPWXzptyG",
  "key7": "2gyt9eE5NYgDxz2g6NcTrtne8qCKSjwwZWjAasRaQFCJQ6f2Lx6vozDrpiVBtvSgTLLNA3QXf8C58uSTx6fEKmRm",
  "key8": "4RbtXgVh3s17W4rhNJnCmVJKZzUA3Q4y1oU1utmbNU38Y8PoAyFGWzSBPyVidjNyCq2RzvCw5WZmVJUmagi6Ucw1",
  "key9": "2WhUhWxxx7ye6D6C8VgVJWgx9KwYpw2fPJbkstWdfmbGyAEZxES243zkeSFQjJ9JMzEvrKYquHNosu41SBaptYmo",
  "key10": "4hFB71VvGZUDT8CzWRxEd26bzAWaSMa9b7kjfuX5uPRkLoy2aHem1jYd5efMrCgkaEMFPDJQoFcAuw8BPXEHv22h",
  "key11": "REheDBTdTXbHqqqErB3dHB24Agrqnjnr8GeWXqjyWPModvq4CnnRRFK5GQuaTvhBYxTYj56pyBvy1WNpJHd4F4q",
  "key12": "5rH2xFUCP78Fwg99rmhtPuVrunTM9oFMf32pGft7ArFDSwTmCf7FsRHkT14Qt9XujaNkp9hrJf24o8a876xPBPmA",
  "key13": "5zHn1YiRmUqRuHLhnZ2tW4P4DBWuTYmKwqpsRMacVg6rLif7QuNj7kUJVHiAA8i3CE5vuHijCEXzL5nqJMQdALAu",
  "key14": "4YHeFZfRKaBBFJAZbe4fZ1BEv8n1rUknDqwsxUg5U1cafCLA5bFRDbnbXzMDCYyoJXkwFygtcfFvr8jSJf5E3FUi",
  "key15": "4Zs7qrq1SyYhULzixMArxSgQffYmr2zjyTg8YAmSRHhaAkDcuLdywJDr89FrsLM9anjevrLLUt9anZz5Qs9HMe1Y",
  "key16": "ERzW3LxGaFvqipZZuRskDmSpmjReUSEoUDm2jYaMcPGJcPgkDTxmhhV5XAxyo1cDsmrMFndRggCtoiGxzFfwiXT",
  "key17": "5aFSn7taVjWkTtH8Z7dyzhQ4JNqKTrGcs3XtfzR7g5PppPfLWTfev4g4chFfqYH8NHzRHf1BVswCp2uoaXL3FCBh",
  "key18": "3HFESPMygsE988oSEuevtSyv7JYxWAGHdLetV1nPi6uvvmA2GRKNm1t4MwyPGtrPH7iisaS2AhJJ3cgJ2F15Wd5S",
  "key19": "34gEaGqvSV1wsbQY77vjBEd6JQK5GjJhgKUcT8QKbpzr1ZVKZCraQToVahmrfeAXPFPpe81ag2KAo6hpEh452asm",
  "key20": "2j7bZ16mfqabDC9zAkPUekUpdvbDxdwcPdXrmtBEcfJSmRfRUaCU73DuUwgWak1pR5df7pfdYiFWZxUnQDNa9YAE",
  "key21": "2DsjkgyAcqi3QzGMQ76TDazzgJXWuHFndDPfASSZJsdfVcawPcivbMewFJ7nXjQYdeKKsjACvAEFDtuPzqjtrAdX",
  "key22": "65aiDjz97HHWMC74cjS4sQfurynSsZQe5YgnU32WX47fB8sZ791VjXDGBNKkZgjYDwjWf9jrRXXp7XQGZqRzCiD",
  "key23": "3ZkLhzCriHnmbzs6GzkW6SUY4PEv71HRUamdFNZcXmvwLvDg4UZfaecwEy1YTQa1aSedazCkb3YtkLDwxXw14itP",
  "key24": "fj8E9kQxa72CnmSuNnWt2PpG5Co61Dh61ebtu7iycVwmBSXFeZ7h7k4WxzGGZuWy42LvUyxuyZHkt4oM7CMQKXi",
  "key25": "5neRSxRNgirFGemydM4WM24SAEmCWzPgWEFsxnmTG527wiHfEpwekcTQxjzj9ZzRX5eZUATFkfdDbYs9VwyYzWqK",
  "key26": "3hbrch7x9iHsgmgaWKmxaKk1d6k4WFLovrnHYiq9obheUjTfVBbxHWJ5VoFrTqEzrcCJ5VRNpWbNPrUJTBaSJyL2",
  "key27": "4ZT66LptWz32U2WrA75DEUBr1YNSdMmzrPgUNDnzf4a4BEQ2iCK2m3phC8muqJLy9cjgcqfP9NWM9AapmnNCwvWX",
  "key28": "3ifZoa27ZRL6DPhQqTLCEeWpM68zxKjP1xhMir98eEJRbjHYSwAeeHUaiwHZ2W5goa9LjpE7og9ojHaYXoTjfgV7",
  "key29": "4QW3g7AqF76AHu2DGEtv1mn5PkxzoHbgR9rdp3gJZtepvLZa6GhJXcVYyphf6eXvfNvGrerWdgTkVuKNyuATq5ka",
  "key30": "63DEPGFu78vbzj56bVpiZiEcXNGYPQdvwTED9SMG9fwzFmfBx9MfyhaF4Ug2fdMQ14RjQNGhD3w5FTQVYmiWjXmQ",
  "key31": "59HXwPAc3ik1J6sKiR6EWTMmQPedCDExYu9EMdR5ePo2NwH4Xn3ub2WuTmmxiwCcBGKeMrXqrxZSGECMGtu5YXYZ",
  "key32": "5QXQFHLHgQpSkSSb8ws6Sv1xbEzQ8veSvnLU86RNQWHDh7hcXKdJWWKDxaYHi8CLgBE6gUzKdvdpa5HvBRj5rXij",
  "key33": "CoCJJCZaCqBFzyQ8gxkcJmSmNwj7DH4DGNnrX51xvam7UwVab9A8sQrWVyjM1L2v4J3Ry79zvFPPr4tRMknJPJn",
  "key34": "pYLzEU6CEd1YY7hdUwaCAFwh8Gj2SpQnk9gsogRZAmJtqAXrZHmpwvMPFrw2XLQwTMvv4cM1kFa7HJUn5Th96c8",
  "key35": "FPxd3m33MK9bCfvVANeVXwTAnGocJa7vWeJr1p9e9BikDQT611wQEmaNpmqvYFaNPGAuiz3amC2vNzj1wrs3nPA",
  "key36": "5UiWbvLKhMLWkaKtHxdzEiqTYQwHfMncTsq1Znc2G5SgtRfYGWHioaty2viGKLzxsitztJzfbBcjVSnqz9roSspD",
  "key37": "3wpn1NSUhbXxY34yUgRHQsnvoV7364CMMGv6iwjCo4p5eQYUuzLKJpJfvChNgywAZE7nyxjj5hRQ8QdMq7mRd4bK",
  "key38": "3hLWoNpzopJMrTfa8aTuLZ2k6Zi8j6RJp6rFZq4EqPr6DtHmfHgy1RiWC8KFx52MbcTvHm9UVoH5PAUiUgZZ1T64",
  "key39": "4LXrsfJjKqQURfZiw9CV8mtgi58gVPFodjyJzKdMkE8o8Js7ncBEQwtu57XDVqKoAv9PvefDATedPbkygArs7gUF"
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
