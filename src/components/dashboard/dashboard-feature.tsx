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
    "UywRPrJWDq1kRom7Dfe4s7J7Lu9KYGmsbb7Tt5Nm6RqAgz32dPqxwR2thTafuiDAxePDC3HWh8p8xJwCw6AYb6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1csiFrojYsoZ5A2d67QDSZF91fPfvsazF9TWj6bgfUmue9kBbBeoZji9MK2qru6Tx3aUMEu2VeMok2d3ZxmrH8",
  "key1": "496Hi9pZfGScPZ2CdJ5ZmRrKey57LVCtxKfnjeHapY3RDZS9KoSUNzVVzaXmoVdn4r45CVGbkMJL8bkXzCQRbwWr",
  "key2": "MgJWs9ZA7i7oQ1bSyspQz37A3A5YMD82k9hjsj3BShQrwf5btTuszEqfS25dUMWXm2CshTb9tGsEmZ4iEbtotdv",
  "key3": "kDBFtSGDjcosT5gKja3sSLmLwnwdyz4dFbZdmBCMyDznQFEVvRnNNdVtggHNNyM4FxLMo6Qt2Y5DfBo2wUTKfHH",
  "key4": "oT9p63S5wovStiYMx9iEbmiY46zq4H5kvX7223URwuoHbrEsKbcfCrhAzcm2ofApZxgYkJgPsYSgdpLcCB7H4YT",
  "key5": "3Tr6XCqUzefS5SgkM8sjfEmwbJ44CsdbSYLcXbFR2mC2D6ykNoZLoHUwKc9ZMiGaq7yWmfwvpCTwZkwDCGCThqsH",
  "key6": "2YP5pAYBkrrb1anNr3e5uPawLRbwr4iJit8VpSu4rJTobUrjrKxJEnm6sLgt1hh9NWodL8bKf2KXFd5PyZiTC5Sq",
  "key7": "63Nq3jMCWPZCP6JYUnkx3vSwiZqx47X8zgid6Fnhh72Drf8e96RxHwFhCDPkaVaG2RCmnJYkJVHyXiKzTVVMfwSh",
  "key8": "3RWLuUKbsXuzKSALvCNrprvWh5V75hq2Cuf26HCpq3Qo7txzzNBasq3YfpmSeJnwvZ5JVxJm8xMrSTGK6uLNXsSx",
  "key9": "48eNTAfs73vCuMFwnUsgc7TAk3VxU6mir3US8WekZGwfLu54zDQM9TSPpooHG5QTpE2XXMG3cvtLbk9k4wxBU3jr",
  "key10": "59M2aTqwhvHkJoXjaTfK2ikMsh9wjsxdiYL31MWx6bYs92W2Ff7hvjRB6yd1vcGiDJ6T5g63KnjtfKmh6SuPUr7H",
  "key11": "4gHBe3uW99xH1vo4YUa5hQhbeoNh86qJiVv34wHp3AXxVQ3fK2tFALnCARkzDmhGsnJLMzwwEq57GR7XVJ567EwF",
  "key12": "5dQgC5VKQ8MiNRJnKYhSwmLFqwwhLz8uSHYBikFMSXkruwhf2LD5jfsGzucTvxE4TL3xumfxywjihGEXfzdcQKS6",
  "key13": "4mPsJEKgkQ233f7DYzhr4iHhuNAzkwDLctx1jPPzaY2JbBTP7fUmW2sZsQdpP2gaaHLskzF6M9iYgWsArhLp8xob",
  "key14": "4hZkDGG8KiHpiPvchNdhZSygYbjU4D67gWDgchEfMJbtNtc3Runr1fLwyHPxhyPKVi2Evbm4BikbKXGgwdU8kqph",
  "key15": "2LFaGFT7w91xEnDX9ZKE51U8uwb93JDoJXbK7BkbV7XFgqz7BPeVUsrRhsixF1JUKJxfaPF58xUsBwrapMe6GhgZ",
  "key16": "36YhfTHEhNXQrjdDSUcUTj8Fge1pt1j7G5hZhbyRBT3ZvKhQc4hZbFAte1rCA2wufDWBkCVwKGdHqji9RdvZZC4z",
  "key17": "3TTudzEYaXwBtvt3HLGemJUiscG17sV1ashyWMpjNJiGSGGzEPuihgTUsYeUNscuCHaGYDVH8L64fMBeqcjLC2Jj",
  "key18": "esvT58EjmkVvNJSvXRu92FndLJb9EB4VjbL5S7h2guLyqkN2e3aKpaNMqbHdgF8i8ceo1G7Z8Su6Q3apJTMPujH",
  "key19": "9nhQBQvbbs3DDdieqxpm7juNTPMD4eUjm6grGaNdpTUyYC6TDua27Yh3ez4AgqiyXtjhqH1wJM2LpJL83M4dbTX",
  "key20": "42CGfuFayCsZKthogZauT6Y3rm3m8JEvGRjud4eFa283fz6ejsPxahbmexhfjw1W4r9HpCCt38h2Gs4gVazdzBox",
  "key21": "5iD2nRhFwhWqvMP9RkAcG1rwszYN5Y8eNMePHTbGVjR1bLCBBNqTuUuEVMqD2nHm9TUjh8J2phCTkptpBEh6nV21",
  "key22": "EFTF797uttjzJxQLkjgevp45CqYZTq1yH294Nc75CjczyoQbKhZdQtBBBFWGSt3aosQ8gXPBu6GUBqr35AaiBwX",
  "key23": "4XBrtNY2crnfg6NnGjpAxiC4suj7DKRGLAo9gh4nfE1KNGJkSrxnrqL4YDNLwH85vAgi7qeahNYyNJbAoVwAJdsH",
  "key24": "2DnzFjZRCdK2fc3MARoHKT7DFBuFCT4QH4VHNZARCMfSJMzMBBkhK9Hx5nKnnexbmzmNHKwAFqHP1A3tHxf6KPLE",
  "key25": "2UX4cHVtVLxd2NhuqJnVZ4T9bLcf8o2Q4uYrvqXQWMBuQqLXSdoThzMszaixTHBwqgnYmFzYwRRd5wfs8Gq8v64P",
  "key26": "5ZX1x2oPDyiPZPWsuK6tfCW9SRZjyEs6dAoBmmijam3yFsrrhbnA9jgXdcNt5A9YAz8z6LaWqG5BhKpSeg9GxTFe",
  "key27": "2rSCiuPtkXp9rvrss2TcJsmAiMwp7rNUa7P31q2djcweir8BV6pjujxMpR2Db3GbEcnaHiHWkvx8EK9L9VfniSUK",
  "key28": "5WSGe7SxtezicyGyeWRXR4BKwf6k4xkfRhhMEDpNRySv3DH2abSWGbWayyGpykzsyUau3BiA9s6TX4A85zoDrcx8",
  "key29": "3nqiXcyu8CYdx9mn7EdFoHBfNvthzP1vnWEGYHUGxQiQ71jZrZDYL7RJH6xUsE7P2sKihGK1bQSGHVsaWcbitFtg",
  "key30": "3v3JNqzifU7fbdmcPRTL1uCtmyXXBeQRdPZHgGYp8BMXwHyPLLa8sjPKn61TNzFThRRajjWipWvSoVjJs8FqiBgd",
  "key31": "41hmYRAxLodD5nWv1nCYd7ZcYw7tUXsnGWSynmAMW1MNdd8cD41Wt9cQ2QzDcBJb6bKibyw4QU7CqxSeGabBRDUe",
  "key32": "kYifetsyiKcbZFoYLCWc1WiFgLm44xXj28KHP82PCJzBfTeoj8QZRBKnZnxACy4yacjo44J9o2G1RnzqMkEh864",
  "key33": "4fY13ThJSyvKaEnjhT2ksCwzcDvpa83EUKWTBYgRVpzMkjhoZQdVf42ebH4MLnUMSM45o36AX7pQoVvmYFq8cTKn",
  "key34": "36mAGm9YP4Zkqar1WZWx6zHoGqsWPGgJPSx4S4G88pBWgvDSFytoyZEj2ESS1f5G5EC4dN5EDBWwd8UK3tczFECQ",
  "key35": "4sxeN4bibNzSqqKKhuREuKDhy7H8AjGN2FJNihjfsSMYvHdHACfv3YFbdbUhLhu5u4aWBoPLJjsoBjey4LzKhviV",
  "key36": "4K9Fw9zJcLQ21vbWjKT1Qk2yuHWkAz1fepfqrLpKXcGuSJ4PbcKAdDW8o85zHXxQq8zeFFydnoY3PB4ocy1mzfNS",
  "key37": "5ZE3icGWvEi6KYAFfYC1BBd86auTqVK9WvAf1PmAT4zouFEz9BN7aDy9rqMY46iQCy1GLcpS6m8DWQL19h5tFvBg",
  "key38": "HxnaHLx1DxJnectkR16yqCDsZBXoYnDAQsY1bHRS7bsYe9FPrMcQfZN9N2LdwCRq1Dw5cn2BKKPZ8GGJDpkSB37",
  "key39": "2po6A2wYXVfyJ858WdqVvbFsBjDxka4H6GoTFc3FABgxYZEpQjUEbH5akT2J5CmEm5Tm2G2fK2hs1p5EjNmvTpTm",
  "key40": "2VN2xnWAMaC1hQGBddwMNjBaJCq4oZKRecpDCD3AaPRSFejMRHR6uHTWHh2UDMtEcjrnP7zufEfafyPu6kMr1WfJ",
  "key41": "5hVrx7a3BFwd1CTpFcQPbzpwfKrNKBdseFJGjHS9fEb4XZE8pHtYPPik9GiaLtzAQoeKpV3opdfsCu2JNgMBSKns",
  "key42": "3T3byz2Q7HVVCXKuVdbWQdf7a3AzWzUTRFuGiby2a8L9Q754X5PjqEaw25VSNJV8K5ph6kLTZfDqtEShFqM5K5rQ",
  "key43": "2XrSvfy4BnaF3vzDQtLc6FgrDWtDYaDyz9cCe7JwVTJAKtugSTidnyNjDePSMmq3kqdXFkFrawN2DyQhQqMht3DK",
  "key44": "2wqoo27qU4j6ZtXcWbwz5YqxKGxETU5tg9cD7Kcid2ek6VhsPxhN3eDNzuZn7VRJbGSKxS6zGoFWtr3nk5UqJASj",
  "key45": "4AvmjACejCt7Ebmm5c3eeoKvr8i5zZmZft8dvyd52NEMb4z2rFTb3948vXrjmRetmDcZ7BFsPdcMkdoBxWjDxrH2"
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
