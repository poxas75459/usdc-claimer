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
    "423F6c2JJN24EpR9Mwmrq5jXZqQTbK6X2vix9oSceu9pT9osGcBFRVAUcj6Ypmj9TFNN4iQKgaqrzGi45a4zGfKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATeQxxv7TEFDQEtUWqfQGcE7zZdKo3VyE5YM8qFVia2x4HUWRGvZYUY1zQnTbdG9wLJvGKSQLXkkQGS56WVyD3J",
  "key1": "4eXvnJ3tCgGeLGjyAq3MRB29ra2B8C5uiv74pxoXNuowRd41dvecqJy5YU6Wtf5eU388KYTjj6bY2ZmhUECfkTai",
  "key2": "gXz7V41GFuRFJDURb1rUetThLKsqF8UgQYRPyNdCYHBmtTMFrdYdbY1BvzLBN68YXhyx3aFgf7HYq6q5W4C7Fe2",
  "key3": "eDpykVDNwJEFZAWtWY3HCmKFMGNe2PLYZvgYLie1W5Qbf462oF7QXwQeMRt4dmpw1u6arFaUnZzG8VZGZT91EGW",
  "key4": "LQLeHpCV6kvLJX2JDon6h2x772je5jJum2TGQ1qUo4hdVbTqe7CMAvUDMjYhqH1g9BZp4F9PvFVL5v7wYdWJD5L",
  "key5": "3B8GmWbfnyFsrr8kKcXkroc4Kq1yErfRtPCdvBqL2Rz4vkfmnXCBJgm5C4PpKu3wTjc6Cx8vE3sQrNXGb2XDJNWU",
  "key6": "4DVLYuMfCrDNnCoi32opofGuztCN6DMTDU2gwAqpTB1eVhZXvdkeUyb15AVg7R5pXNR986eyomMBQyPT9oGSwriq",
  "key7": "4a5mUm91vQMugxeAHHAGtgioxuxSqbPLz3ZhGswivWHAwmmiWmWidPttYZMJH7sWb4rpkpoiL2KzvY5pVpXt1YaM",
  "key8": "4GjKQQ6kvUYC2kGExtANSxLu6psW3yxZhAr2sSs2dP2jasYEwxEZF9V2QUntRsRXsYhxJkS6w2aw94eSi7USzGaE",
  "key9": "2svTGGkCHcEu364ESoAxYzGXg76kXdhTq2JUpEbfGdbuvFLvcKXaAB8Jpujk2AStG5yTPdB1qgcHdnb5LRNYvxqY",
  "key10": "k9Veokjg1D5tSTUjEaokYj6kgJYi2bv3r5DPo5c7aZWMNRo7iafmi8JQGBMtrrRGGKracrVEWwCYQi575gm4ECh",
  "key11": "66rJ1H21amTovZJBcAwSEFzWTu659LG5PSNvMXo8WTXQwKQeNx9CLPyicKd8XaXt4U3r12XEC6PPsqWM7BLSwjGu",
  "key12": "21Uwsg5Kox6Hz3ZfBtMxAGLjnwkA8Ap9DDKdsJC2v9Yw4FPE8Gdk6DH6NtyLKgvoqcXcEZ5c32g3eCWDenGXg5EH",
  "key13": "47G9BVDsrdyUwjo5BL3rrvgYPP9nE5LzubHDwpPdgp9Q8CbWEXzStbAibLJutHsA2JdcdnVuQtUhJDdUt5iwjk47",
  "key14": "57hg5EN8cxDbzCTyP8uxiSW71FzssgogR8vnSFJu5zVpAFNeJPCSMfLcEZA5rqxfGR8wzrYWc8i27jJyPZgpRgGj",
  "key15": "67WSHktAfpLtTyuiMtEtxtgigAe4rbfx5zS98KCmBnEg1ntzL8yonPpca591rvxGbc4aPSfrteKDL45d4yiZruGu",
  "key16": "3z1Sv1cEx2DkPsKkFnWMdU8PCW7LyYi7pAfhLC9ELN2nSqpv6GhKvwNduCN2N9snWX9gh1Wz9VY3wLoAyXwTtEa6",
  "key17": "2oe3RFQw9kTHn59XBY9SeNxRjTBfrpAwv4FhYsRTmyuo9zEUHMDharRiZ3ftH4Lo4eivuTdCGhuR24qpgrNSRuBB",
  "key18": "25nrieKQ39yuJWPp6ZKqErH2gYe1DQCSoSVFpqZm6Cr22fQQMdcuXJkvpLFbuaCB5jT5r2E5yMW68AkpEnhumdwu",
  "key19": "3JN1reJEhdGbEgYBWwzqQYXhGzDVYtV1Xf7eFGVQgc9YNxSD2YbRdkVnPg6aNfGZgtFbaVFsSQAe4iopoibPLY5C",
  "key20": "2DVeug6DJDw39h947bKNzc6C4zwZrs3XDJ9RG4B75YSmMfKfwu37cjeTRsFNY7vJvhdCsZkm4YK8kvS8LkHCtqoW",
  "key21": "43ehEydLKGHanvNVnxbNUbrVSDLkQXw2izLTjkWU48gLcmMHtpNxCTE3x2idEKpEKcrmxGVZ4WQjxJRdnqeWPKSZ",
  "key22": "5qt3jswXRb5AhC9bbMcRxSGabUPu6bpyusjL27Pouo2oYQQXPrPz5iX8XUKLmnfJvdnWwaCMybv5W7N2tdAPNuVM",
  "key23": "43qsNLw1nKg8icarX7g3Np5WXDwBekYmHnRbx3qBUt2UGjvrQNDwrBoDu3YdoXJoeaZ9gxofCRSEEYFMQD4YqTo",
  "key24": "44qaWqmKXqW4gh5n7Ve8x9Hhn6VJxNZAvbAL49dwiwmonCPv4p3CXArKh2xyTHpW54fdaCRoaA3HnkzGuWg2H1R",
  "key25": "3cS3G8ZYJTGdoQ8GwpzX9fYPe2CussUiUX9yoBJFAwyUrjE7vJXpnQ8mwi9U9nXqSAdZ8uZtc2H719Fk3SJamycK",
  "key26": "4gkSzNJDe28JEFQtBFE5MQu9TCTFJ6aQ5Jzzimx8pmt6wsziu1hFEUzfzxHstTZcZasxo54ApW4HkMi7drXhXzL6",
  "key27": "27qyzuUrUSydK9C6bAtsR6f1yd74kB3msArD1v6yYYXDQkxZfU8ed2UBCaDb3sKwspdPx86i4w717yQvwpUZ6EBt",
  "key28": "4xqkBA28kxRAVViUBVG9tKvJ1sqZDAZapYeGUF5HEnCKeKm9Krad31Y18aYQ5Fpu6bXi5UYW4Et1irVsFhrveGJV",
  "key29": "5YMziFfL9D4ESADR9k15gg51UhM7uzfr75yGq4QGmwiB8QicQtbDR3indcZpfrq4ViaXHcWZSRKz8bZrhnJgSuXX",
  "key30": "48hFZ4JVZVAGPbxDRN34vq7NkRjL4kPUN5RUt7eaVeFtTjr9HeCdm63Kzwrag7avjvTybYNWcEo2rYxrM1H51Q7R",
  "key31": "2raZxrz3usem1hovRGPvXS2CgBNSpfKoeJvkxeEkPtt3TPYdtmC1QbAPuzm7WthQtosNA8imgpbLzWUmEoT5e8Yx",
  "key32": "3xZys4rU2SiDDBwh6ERH2xTo8WZCZaDPJa2h3j2Yoe3aptyFmVZSnx4MR5tK6z9ZJthuVkakwzWDhEyn3wKswWsZ",
  "key33": "63RriAEHjHq5zPBot8AfuEL8BW7ZSuEicSRXvv6iYPBhGQ2kFNCvWkUz59fgTuJtaDbDwwHhWCkNRajZDPveCySG",
  "key34": "4iEVVLDfwnkpCu7pNpusNa42t87aEGHU64wKDVYcHHB7pd1HDrQduMuUhjTqspfZmWU5TBa67QKSFgWULDNczPV3",
  "key35": "53ex4PRTfbBokSPt4gfF7288HZQ6rWmSLoYRL7u5Eg8Qrmt2g8FUXGVVg5wQU6bnP3bjU1K8MsVqkdh4eKzVmQEj",
  "key36": "SWemEuH4xtjgZUGdFzPXLBkuMMNax8XXFD6V3ob3Xm5dufu5MHgA7dLTizkMgCUo3QUEKj3YSp1hzL2tcYPHjZ8",
  "key37": "2XeLVB3orwhwn7udEP9MGgL8XdXoz5ATB6nVxc1uDKb5i7SAJT3Msk9F7nLgVYS8ZCteM8JEtwTcRbW5GvudJfce",
  "key38": "FtgHxz9iMMZ5PGmhNPMRHWdsjY8tzxQ2KngwGKzpPdgwdJnuKb3HvpZ3cKeqhSU1f8WCuhENctTmwKjYRzcgDoo",
  "key39": "452uYSouzjcF5HfSiCfqBXRvpw4M9nFvPRPTsX7GxE2XZZpcdtsZ7AB5uT2wdRfBTA97fwnpEQYJF44Vtvu1FmPo",
  "key40": "4jHKP7QvWvHdbfqijkyHKLZABSkdzQnnsQnX4P11S3bXcDaf9C7HQ39GC3SYmv2tavGdaQHpwLBr3yeAK8TKaMgy",
  "key41": "2g1AXYJuYfZizwZZBBBj1dFaCKtKZ7Wig2UANC1VoLJFbNeAM3yc9t8nousqiA3zM8pq3w3WZjUtYzSg7UCyRbgb",
  "key42": "2X3yFBynMzk4UNqr94jxtNWfQXpQnnLih7UdiwmZPgsjDAfPKB4Wm8nbzep6x4smcFHp5Qc6jcqMw41mcfaHy2CQ",
  "key43": "3vzUiSSEpRM9nXdbQijLaqVKTvuiJ362pyjQh8W8DJYwshtFPihjwiHPAGiXDp2JU1NB76qQjpWG2LwoJM9uTLWj",
  "key44": "3qX85zsWoZ2hnexmYazhSAJUsJkYKcAtn61GnWu64DZwW7ego6dKsQrsj9f9pEJUoyNgfsfxoewUwZz3xvPavLGt",
  "key45": "2EANdw2rPv1u8dH6Y2oAG5X9nnxcaA2TmSQ3wXSwVDkokjhbzw2s5oDhczaKZdYHjEbbfqXu9LVrR8uJkqhJjKFy",
  "key46": "3GfJ7oPpTwBtNAw4k46ATRScCMGXmkaU4H1b7h4zhoLUV7GfoYfNcm5hmjPEnXxpJd7gP6iFAS6PWBdYh4tYSY3c",
  "key47": "4qY5xSkN7Qkr8Q58AgRSFzZzfqRYWwWbP7WxV9XrPdQJMXczEWZrtx8cH8QhoDQ1vCoeUqfmET2sAfAnbw3jTQJa",
  "key48": "VHAvfGx5AsN3atW1Tk6CCM1hGWMoZM2kBrgMBp7AHutstbcDpQonMA44PJcy6ord7b61mqeaDvBc6zihQsYfBwJ"
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
