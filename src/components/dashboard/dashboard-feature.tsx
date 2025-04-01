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
    "59iboJjXchNk4hQtFLF1ppJNPv13gJ4pRPQrE9k775eFAr61EGD8sKC9dbAcqmfEU5tCmq8xjRRh2aojajBXTmgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548SQ8TUgPMEp3Jz3AYXq2553cq8D5rHi6EtMV5pAL1EtpxvqCFNPrDF6KtEvqNwWJMQn7jHkL6tYbU1wY1LWmWB",
  "key1": "3cRzW8FXqaDCvNeMzJ63G6UXt7yzPD7EHmFhzWUbVS97WvYfFwehw3yN84AyTBKav1YuZr3zxJXcFZCxjjB1hpT",
  "key2": "66wHgrbBwwdEHumtJRJ7bsvUrXRhByWSxk4AercEGpisuFQXpG1CPoRF3tEhCaKDPrKiuu9iQEcGzLFYHY3FKRdv",
  "key3": "5LZK2Hiy4wnDeYKTuSr3SXtBcoNSv9w5G8BKoFTZeGcGSrMwmzequjDKNYTpggSUXiqCg1VRiBx289ASj5Ckd3uQ",
  "key4": "343dYscUvhBSng885tdj4rxcbbEPCe5A6NKpghggdMnQMU8AWLfVgkaAqq8yqiPP7jy3DmenxeeoxjjhQLh1x4uK",
  "key5": "2BGTvFFtBpRwpLoiMzeofV9y8Jp6pzGF9BiZW5qKjPbs4rB5t1V34RkxNm77GQexDq3g1unWjLTUrYpjyy15SeVR",
  "key6": "YwxgZGC4zZqHSRgJfi5DmcSmknWoHaMsawZ8NU46M1MezbCxexw2b4LYNoXfVKqokYQhynWUUP4VGxzuqiDFmZD",
  "key7": "5zMQMRcM6g9hyFLZuhinUxso9S8rUixNprrnHFge1uo678KWg42Qm1NGJoti1fvkZnC8DUvrBB9tUAzfEd3o5hbC",
  "key8": "3mx4QaauDWgqQpGEBctqnmKu1wzaRQ3QkZUcoQyioNpPQ3AVydmchvbmZSHJ5NFh5hmo8H5cBArBKhcV6TnM1BjJ",
  "key9": "3mxRuChWjnLQtsj8Gu8ZG8WmFKHAqzzzjrLJ5Vuu8mAje17NbfLUb8zdbb3u2fMbSLjFVGsWUYz7rLc5Bn48tQWC",
  "key10": "4hxUzWcQcgRf6kJgimPV4coppnSLLkFuWDWmnPiQW4jSucqnGQXx7oWcVitD2oqzsg4y2PbBmBg7CS3scErCfucj",
  "key11": "3sc7qmRMbmSCUPdzY5zvnKVvKBzufzDakUU2AfZ9McRTzzPtMgQxyndjUamgtqvCiibRQBwBXXQxMAh2YCdmdRrL",
  "key12": "4R9hkSXpXKEW1xLwLLqWBpH3mtWWeF5SSe9vYkyFJGiLpR4xHWEZgzwGTLR2asXexYYvHHa6sVTxh2HFdE6FAMbi",
  "key13": "47p2sAQUAPrs7RRVMKhu42rqAYoZZHwEqLDYVFQpe7LmjiSE58G3FDQHKwWnGoJA4V37AiqfobX83bqFpLexjwGc",
  "key14": "2iaKNUz3vfkg4UZasmLsDyyxJCTPjhV2zWm7kbcuBapDEdGTFShVGnvnFwUYbSYWTn35pMmxUVUecG5GDiCMeTLQ",
  "key15": "4qCgCsVg1o3dSVhLq6NL6rndj56wtmbTWMeDAm833521hAxTH6P6AqRaBQ6Si8isRAFP93hurwUD9a74AEQyBNLh",
  "key16": "4GG6ajGnqZpdgpBHRL2YWMBCwp61zDvuTzJHyestbSoQc39d3EZbgm7WihHAr6sMBmjrACD3sU3ZNVeks5DkPhuZ",
  "key17": "4B1Kq1W9qXJh8u2u8FzXbu8tbHqWBxJ7NwvFKA2MPbhAbh5q7mrc7p3SpVMPvebraBM2XKx2LbDtxprkFKyRoDVx",
  "key18": "kcHSf9UBdLNE2CwRnTn4JPMo121J1Hs2cxMZ3evuQXomHqzZvPZ1aP9baaLVLuVGGwB3HajE9D8QRmy5kwSqibF",
  "key19": "4rMzPJKYvi8vogkuefJKDweJCqANiVrmNDcWScgLp3E9DaaQ8zaSDXAPi17JxPd1ZTmy24R65Dx5GbKoWY216Y6W",
  "key20": "4WPxjW8E82ixzkB31KCgoX7GCCLN5v74sPM75uPHsu7tYbLDPW6xUkubmLvSEQi2AC4xTCceWnaE7tT6YRqJWNLB",
  "key21": "ebvwMVXtUSs8kkh44nrkxMUBi3yT6ESUd8asZJ19j1AZAu3yS6YgeQ8vcfKpqHhPmFa3JZicSHx6SaRQmYo733g",
  "key22": "XLSweUnw7qVvg3mYzfbYnh9JGdN3QWNJ8o2UmZWi84vJCjnTuyfCtsEPXQEtXJuW6k4z84dXJhzjff4b7xWrerm",
  "key23": "NVjdEPmK9haN2PaB2t3y2TmL1V6PMinHTiVp5eDjphtxqRuAr1wQqYevqYfUQ6BYnS6sh43dHDSR9swPyRDKPnU",
  "key24": "3PKHCL3GP3VPG9g3L7fcpWJ78npX6Nkrc2ujS8Rqcpz5iUv3UgqgV5ftegegkpHxTXDXjiyzRYXdmtdG5qFVqbEP",
  "key25": "DkvNRJHixn5SERiPAiCxNPymGEUJSyEmrHkou6FDL2hLFLQwae26DLDPJjELQaTPeA3awNmfvhfUCh5D7Cikikg",
  "key26": "WRuk2PvATypm7fu6GxHoemeCdWiKAzxtJaqEhQqRejNUdfZywsJjYE7CcQRCiruPLMPqqZGuKYb9aqBomdiqRbs",
  "key27": "2n8zy8BHXNeuExkPjuypfmMs8vcCCNKqQkZb8stVt9S6TZrtwUmYW3aa72YFjpPgCpCaEDueYy1BaNSChs8The1o",
  "key28": "5sFQYgMxaL261UzAva53Mznw7Vyju4HeuW4zHJ4N4HtxNvYam972NL4fvyh7h4KbEvfiH6yhchntFuEf4n75LNYp",
  "key29": "2AyRDcrWqmMfM5fy6AkqaV1hxtCNxQjvF7BgnzdVq33j229uXtDmxBVczF9NC7syKw5iXzypGVL6dKQsfJrqrLb3",
  "key30": "55AB6DhYv1Hk9fMfBg2r9sSiGTpj1hSrLoc5an3fQkbG48TCYQkr9GviP2XwxwydHf4oWBvvSaHfmVeH9BX1SchT",
  "key31": "3hCZCTB1QrWc8x94jzuqDaf4kDemxDg5jaX5rPg1o2JbnLCgDf3vrzsQsFZc4zbUJQT7bku75XUCskRunUtUZz36",
  "key32": "4JAZDHmcmr7MM7brtyhZTDLXyePxtrj7iXRjhfCg6ANdx2aVqszAyAcurvUTSf4xSQvwNqAPuw9VoX6yWXU7JGtD",
  "key33": "J2y8sNcS2duk5yq1SDLeqTww3PYLZRHFE5MD1vy6rVPuvmkeZ9ZRHMTXDvepmNBdQB5UY2ToN6peLovxjBn7fNF",
  "key34": "2MHXJyH1S6ZjJGoWBkaXZzsTQPXDFBGMfY4QVRtXV1qGMtLY4cBLGRqY1wZofyRaT3gm1TK4VPjWbga1LySzmLwj"
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
