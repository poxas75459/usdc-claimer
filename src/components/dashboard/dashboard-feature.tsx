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
    "51nS2GC12CYGwJZ1XwVYtDnJBEVURyXk1CfWK2e32ujiAY3McuFYYedkt2hRrMkL326tFkBxuiXL4F6veXPE42QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MA2is8xbUdUCyToGbgKseqS84bwDqWKVCRmMWz4wC8N5zu5zoogJ1K83jFQBHcHZeUjhQZChaiJ8tJjZKmjWmXb",
  "key1": "4ostNbJztv7FiCCv7YrihyuuFsd1bCTuDArY9J8FBzsNgfJDB6NP7ju7mNo6xRjG5tp3bjGGF2GVSWCy1ipSzxuf",
  "key2": "3oDH858NiDc9V8BbBiuAhftEoQ572h3RLsJk9NXnkV1UuB3RZWBfvydF6eivbxZvX8qYCVXeJkr3Kxrs2EzQKyaY",
  "key3": "457kUZdvjYvdys8FPsjjf7nifMczHYEGF4Xaan153HD7QjDtKiHpbNp1SWsHwczUiLvsCYCowM8fyTruZWXYbH1o",
  "key4": "25YEToTea938zH3K49rU18Vk9zJGp3X1W3N3t41SF2h2qvahTUhaz1gjhpZCxXjPMZFr7ZzHvFxpZjcNWTQPReeu",
  "key5": "3eHLbznwTDpvt78kbDYnB3GSitZF4sQmKc5E5m9BrcdV5guVLW8TkQbfceYxVMbDqEe2nHwRUEbYJ7Kw6bcs4QSz",
  "key6": "3WnxvbKJzAApKS7Ay2w9UEvDWHkR8v9Km53zNrpC3smzPM8Ki3f7y9zeqdP3Fts3jGiKA4yhZYt7eciXwGwaipAZ",
  "key7": "2aLSq4guvi9TACBVBjwuaSrPgnBo1BUKShRCQrEiptfXJGQPHDCJRZx7uPpitF23k7t7tBn4nnpDMRBU49VVQJ1X",
  "key8": "66GAbfzMBdQPoidtrFdJkMP5SiaF2HuKcC8iQo1vG8dnjiDnFZED29a3vSD1d6FJ3zXH4Ur1rRQQEG6hB39L2uyB",
  "key9": "NtTkmHFU8RU3KHqLaQFgJ443pmrtLa2p4Z3XYKvGrAE6PTm3PSz7NSxY6EtFf9Q4KbE7s6qihBioantxwxUH3Mz",
  "key10": "52TfrU6qxDTV48eiKo4rRXziotD3WXqzNzuxmVjXEfpTgnEfyh3wghUcvHtojZHqCHuwiTS4y2CPFRzhVDdfQJmm",
  "key11": "3j41VV2D5x5YN5dMPiaiJV1QHCYRNufwXQwvC9hA7CZhyZtqRVLPijgRtedfnk1SgekHPZReeUGswwscNctNH1rL",
  "key12": "3dU2UZ1SXkP3mDTAQQeQrdhAXDNEpre8RrsTnJiPnjMbFnQhXgwWBTYBABNCXx3uetCLsJGmqJ7voEBrfqd9pskr",
  "key13": "CYpHk5VnCvWaiTHe7HDdgcbJbZk3PDXxV89iRUG8FeZZPzEF849pezXedB3PX9dh1DB9iwrBUJqyGU2k2tSQFt2",
  "key14": "2tDv5DYns7JpUrqwuaTnCRZqtc28oRGxNtVMSbNvqH6eEj18WiziCmN4RDgeQfGUNBNQ6pTBzajDZVmghUbTybud",
  "key15": "mEEbbVtsdVogzEFpfPcpneFGQs8oAQShEJ2RqUnEsb6ryz5F7NLJxUkyBAJ726TKwdnp9teLBmNpZx1Dfr1yjiy",
  "key16": "4z8vwsECBhkMg7VZQgY9ypDdYmqUvfXiYoYoTVj5hKY11jHF4yy4pRMqqSuZWsCSfdQAf2oaXXMGA55BDTJ5U51j",
  "key17": "4RAUPFaqs8qC7xUzHagZkaR5bxEi51Pps4juhujFgHMCNnKvd1qrPb4mJCHrEvPxiMB5ncGU8zNZUUWTtuWugvDT",
  "key18": "2fPut7ca3TGfiAWFQLSheRKw3FSG3V5p3JaTi8GLgXWCsNzneepSGd6bDjswVCzw4ACmy66L3MwqKdTbThVJM48Y",
  "key19": "EwstWccA18XHcLceJqWDsGCpeu3PkFS6h2rUv65UWF142xvScwsBamW6axJzVfoLqp1axZ86BNB1w6sReDVSM4m",
  "key20": "cWLPnLoqjqXczNFhmJ76ZbJ6yUWKR3NZxmNCnaRCh956aEmkvh8jPXLMLdHtPZAaibirqM81UNEE2RLyRsdCxcX",
  "key21": "7wn3eNg71JgHkLt1Gh6672nxoJdw2Md8goxYjRQpb1kJANfcKtjqY3ETPuAA58KtNsvbwEVmhKeHdy426vQb3q2",
  "key22": "5Nk5wq2aejAHV1gSZKGUM2yRCUFDGhsfZ8xjGYMeh2ecFf5zj1LEHzYDpB7kaWvJ2pXtqmpxUrN4YFySWzcqL9M9",
  "key23": "47AipFGFrZSvHDW2r5XFrjj9XRSaxbhr3QyHMoDwqcwR4rQTPbQFY7zkwjT3tmnuMEJbHGYRjBSe2Td1F1FVfv6V",
  "key24": "5NgjUZRmk6Pg8BQ2Mhgua9GqtJ8zSqV6JVKHase37MVDEZSQdJGtN6ijWSvLViFnL8t4fCZNFwe2bHHtaaQoWVMt",
  "key25": "3ZwC9Znpvmj2gcbg9Jk7j571ydJZuzS2asJyVYcnRVkRUoBvtzf4kGTHmLpAbxFFjaRZpMTzZ78eiYLkwPwVCrrv",
  "key26": "5qvG7jP8m8AVqVx1wujMLEY27e9zKV7ZSbAABftQaMV2LhL6Se2ojPzQYFzGuU7shzUcpeqBTPht4d83gXrK96VS",
  "key27": "4FRXc5iArSJRm2CYtCKRM9JaY7PETVdxQd75ak6yVtF5EzKbePPZG7aQi9hXn2XzcZzxY1SxYNVifyqPtSCQvsNH",
  "key28": "4UrtcxcToaDFKSBjK1YQ79kcPnfb4gNwSmEx2AAbtkwZ1QHh1N4yzxJA9ZqQow1GCi8LXKy6PA7mwjcTb7VFH8Qv",
  "key29": "4mSrjTzznhDBqEdMAv2RQ6QJAj8KYuafD9iYWyUYQMRLqMkekwWeW9cx1U8KEVgHfkLrE23TMm9hZdJJ5T6Q7gDt",
  "key30": "5ttWiWoYs3NUy6tkexzpUjhi6uF1C2tPPFFbsGdhoymmbu5cFCngmyLLu2BUscHccJKPUPtgcpfbZBNFuBxiBYve",
  "key31": "goCwiv88bvbDcBas3RCVkLnECiMuqPvYyMf37shxVBRyorg3VYADAtiEMMJMYrk7FHLwJa9XveCYUSJ1ueVKRxr",
  "key32": "4iDoPtTgdmdN14NgeSWWXdfMBcoASSTggNk2ofKxy82JReqdAMkPhYAovK1B1aiPKKrBMhji9y55HvuYH2JK5MsD",
  "key33": "2QYmNFEi13wHtFqqo8nGLXCkJBW7a5ZkjKh23nu1B87f5WjuF71B23tfuos6QBFqh3C8nVJZkEQ6fAY8e34XY1YC"
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
