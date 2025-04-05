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
    "418CwvNiWutkYY6BA6wXSmNKxsSUqoE6WMpPDQmaqwTVphcrxgPzAdSed6CLH8UcWcsTqTuMNwruaX5eSZ7dPL27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29btugiiUZdmTifB7UM531nWfFkJL3PujTB3Gs4xpBuDeuVHC7qrZpTPzAHxS3PKE2R7p8FbjPtDYudyHh4A8NeV",
  "key1": "4zrjpFMA7EUuemDGeCabhHJhx6TLkjPrbFzc918gQA3u7wkLZXbafnb4HTX5NEBFiNPoFRzY6z7S4YaHf1noDRFh",
  "key2": "3uicfoshc7RW2BhNcdMVR6Z4rhv6hGuEQRvWKTQZ8UHtSjUx9UAAA2dth7JzUVYmX553nRpnC87GiTFncFhwoz2f",
  "key3": "VnKrCosZJEGj9jzkBmErYEEZops3X4CbwNWAXZN1F1vNuGjabsiKVWAmSxYGw5Pxe7pzrhwYWBXxiKM8vLrf96v",
  "key4": "4vBLZYdecQ9vR7Tu3SmVt9Nh6be2uedsGq1jJhdHd3jAxEMovRiF3azRH81Ca3K3iY9sd5dxgRAizo2CvcrkPiTM",
  "key5": "2NnDXv7hv1uLK4v8r3GFKCE4kFBX1v42oSi6uk6By99GwLfg79Yd7G9bVoSjqtdq1yZk4hnKHao4dVpgCzoeDDHB",
  "key6": "5vxZzVhbEQ7wwnLeftH5pfbqx3591GeyUdHpRpLcJH5XKcJbB4mdLjihgkY8rrZmEctqWq4hr6d8qXusLqGsZDmJ",
  "key7": "53HwKCMMU4A9xQnh8yh3zGo1r54ZPtabLazdHTzosJXBQVNWxNLVoVdSdHJv6s5WdZSD2N4dPS3bnc2XZCJZxDZ",
  "key8": "3Qp6FM4ATGa81AXmRq3ZMf942YP1WF7tb28LhywVMAWaYPXsP7wwBNtja5W3sXfF6A6fjubDmB3Ge9D467a9t14c",
  "key9": "qtAc8sWJiweAVFHdj3TbcBpiWWw5fmuLC7CXdGBvbhuRG3o9y422iqs7j5ifkBi55XAtitAzNTeZjTKsw72u8XD",
  "key10": "4d9WndCdLLbmgeZiMR6ahgCLGSet1dSQPxX3Y322jNrrbRwZB4cTUUbW3F5ozffePxRV1DMf4tcMqot1sEXuPBNA",
  "key11": "5wy8kughhpJAvB5G7ZBr8AhVytZojjSM1rcVuEAxS1HyNhusw54bFv3rkgZd2Ch28Td5jGn4DpdKbJ6YYbpRJux9",
  "key12": "36mWwgWbMCACESmsJdvEEhR1ZNS43x8PK8pBmoGXtKncAV9Pc2BEBzytJ1BWmo4XpeqezxqWzyr6mnA8bf4XaECB",
  "key13": "3JEWYRXoCFxkz4bnaZwAxuKWAsaqKRpxBAomphCcZaGgrZ2e7xbAXLn6aFzuHbktM4fkn8ahYV6KajwyMRtn7SFc",
  "key14": "4dSmZU2SyjqHHjsLCKxf4WCPuvKZi6zGdv44UyXors9m55mMFXh5ND3hZR1FTHMAsWvuveSe1epX1EYCC6ZHxMUm",
  "key15": "61sxuKkwAW36byxi2HG5PdspEiqosMkmZpS116F54E5kwEwMeSDUvWiyzQK7pSz2UmsX8PQxr96zkYapVLCdWr8o",
  "key16": "52JAPaY18b9Kviqbfeg8wbQumppPVLtQtP7ALTG2dVfuCr7HCy9BNV58tsHLQhsAH9QqrwpVZs2i5GdTHYL3ddnr",
  "key17": "3Y8dZWuBLpA7gHtw6YWR3t1rK8D91pM5thjQ83eCc1EoXcKuUPRc4WV2GuKPiyTA6PYMQ2CVCCUaYKnwFm4Uwsqi",
  "key18": "5XnWW9EscAcZyqPhH6uXb1vJwZQdqb3jMMRvNiTJo3PBZ1GLK74HcjNqcP24DiXjEMMp6g78hyrizASrVDkj43GB",
  "key19": "4fquNRnNtFsMV5vH3a6FWuXVKfEE8aFc5MANcQ7X2HCk55ePAVgELb5M36jWwGUH4dXBKoyrLG2JgyLon26BM6sa",
  "key20": "nqddsY67REexmeZAze6XidNz1kVUn7Gb6V8LPMbXYVQBa7YMhTL3RXwDF459HybPePY9zZBzF63jSEmZw1RUMxH",
  "key21": "S53DA1zQyPhkjqo8GuT2dhFnnJGuVzFmgKZSpcLkXZPpGadRVhXzB1VYWHdHmtanLNdbCwVxpCoZ7npWHmcbUAa",
  "key22": "i1ZYumUSVobmNtgtHiNJ7rV9LtHW2iGwbRaf9bx9shNBdPvzmCWRT7FNYXfCue3Dzn4trmPNnPdUFy1XShGSxZb",
  "key23": "4PqjStp1GfjQxedaMsm6QAJvuCCiCeU97q6GSfzTRC59HENqcbSNaGjnTPppHykRCRvkzqzBxdeMJKwCGjgK2es4",
  "key24": "XdBsDTZL8Wa4xm79Z3RhLmtTjvbJ5FS1XzPxQ27JKCVYMBzFBpCSTYSUuw5Xd2MxfyGrdZYvYp1WC49ufB1nU2z",
  "key25": "2hnkA9rTspYjjMtaoquy66XP4CYjDTHd5B3HWPg6oNbCyPHewyMJNHZDQooBoiAGKcM1JSsSrtRqgphS7anejs4U",
  "key26": "5ARhgdB6BjGvmf6vE6Ww4yag3RKRxmp5So8YC6rg3kjEpHMHrZyKtnF5iPbNHftqrVVv5TCfhUc4j5n8TTjJVXkA",
  "key27": "4QvXKY9XjuSFjpY5MkhSaWDpvsegxDuU6Zof1xK84WzNG6RUbiG6Nf4GjLv2wUzFNnat5FWEbnixKExhpnbJpos5",
  "key28": "5B14krYD5cVyv1r2XdBmuMbN4xYaXTV8MD6smryK164FcE6CuQZ3ywQ8bRo8Z9viaY1R763ZVRBd5fDKbR1b51kB",
  "key29": "qGP5E8PuDDfNnrg9rM5QWVPnfhBnLXnh6dRmcvtSWyHj9q7vjPzbznaXtNXTT4BzFNKPfVyVEdh2XA6dSxJGzsa",
  "key30": "5rNyJN4HrpGfEo4vX7hokksZxHtL8xz2ybSDWgxKZyVPGUk2P8ihCeuXqQ9uG93z6MSjz9VeKdm1Y2o6siNdqPhq",
  "key31": "3354Mgiuw8BcxB3A1XDXSKeX2td9LkKjPoWkvRjTfSTvq46SC72c5cNm5b9RpRAjHgGS5eQqq1Q3ExZcWFnj1kCQ",
  "key32": "4xV9xXfXkbXZGQc5aTcFwtk8dAZNvDHmXZ9R5sTeYWbgt4cfjkgqRTmynj6X3kAm5bhPfdddhVgjez4XTWQXeBQ9",
  "key33": "4HRjeW1VUHZwZbzffhskYpfnEX92nWqFvop7W11oWvQSAoiC4TcdNhMzQeLywvo3wfYjMMzqyJUCj7y5dWf8AeR1",
  "key34": "39WMPR6ZJtT1JjbpzsjiapFYSgBhL6HwsFik9TFdm4JZUAZUcbXbofsrm9XnTCsdaGAzWy7BfpDfFntA27Bt5qkm",
  "key35": "5ahvSidTzjPHYWvcKRyoPrqoyZpyE9XDW9D3PsTggi6kBjtmzgywLtx7EfQtj21NPRcDCxGqazT5tUs39GdVhuRM",
  "key36": "3HuSnAPW9QW9KChFMVRa6WuyrPobf2Qoj15nBwMYy3BSJHax6dRwQmheSzQF2aNuo74jCCzGWCucn3bz8oyxVnDq",
  "key37": "5teBbxTTQEmKHjYXFMw1KHebvhM94oFQiSVAdHF5ZisPkxJziW7gR6sDy2xg896j1pyaQFNNhKCumB7dYR6Tzd28",
  "key38": "3tz11E2NxpNKkxSVPExKBDEax7owkHGeizxPGVabFVTQ7sny25HdNVXgMJy2qiLhKn22S9vQicK5Ltimb1Bv8rbf",
  "key39": "28BqgNmHbAzzpWWJRsYtBVpVxKVFBh7GHjfV7gaaBgN3Auo8v8y6L7Lqzb5xSavHXGGVzQ24H49s4QcsFdrCTKGa",
  "key40": "6VruyEgtGzxnA5ccdpoDnetTV7tvdir9e1VDJqCiUWucRF8kUfPywrJonm2mhmHJgYqSsiMMg4gWFKUbedUYY78"
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
