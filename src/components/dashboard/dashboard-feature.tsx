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
    "378qcqrhmaKWHfWSyKBgzDvqxmmRrkfHMTRWKDFnxNzFF4E45YahJcoVPtkqBcbUoemynZErZ8vvv2iMCFfTmF3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vC1rL9J9HducoueGtDpGzRKGJfpW6sjNzPyuLMQPCvVZ9e9q5tDgj7QxZ5YQRX36T1Leb44rhpBvTkAK8EbA3nN",
  "key1": "2sUWpwf3p9atNdSgrRWPTzcJRrpwKoEcDGJVFzXGDyMFZCkgcjZbKd9tL8HuUzuAwdqijg4xtKrTteDtyWb9iipK",
  "key2": "38nXEpBJTBvP6vUqhVXA5L4a95VpNcGj6K1oY8vBUmZrwWW9uwRQfRVVxX4QeyVGjPSHostFL1ctLSRksVb5SJvY",
  "key3": "35u877Ru4Pq69FAuag7naRzYEeP1trNv8anVSVo4qaCLasBmXnUvQ6uiytgsyCSSqnNju9qMxaXELWc4Y8NS8MDw",
  "key4": "3oKrjHShZaTLsx5TMLwLhYPR5QaFxe9AmrK2vwFYX9GGR6iucEQfULs2wcNuREEM4nzzgzrjZrbdwwMcp1u1nGKJ",
  "key5": "31Tfj3DL163uMZFB8CurQXD1gWgF4RSHy9SjvhZBQ2iwvCTea1oiE8JA348XntVVXwpMFb4pdJwXaLeuQG2TAiE5",
  "key6": "7UFpTrsZwy8oYf7MZv7TFBwTbQD3T6J89RRW2xpd5dVe283rLEFeHGdbnNVM2epMk1nvEKqgtNthgSPkcgZaecm",
  "key7": "4i9MmkmxvUMNZGv9J4AzUBsHcyjwQf6G16EZugTtXqp2JcgJaTWk7XpFpA8cSMEFLXXnfaRdhDN7pgQ9hDVgYhyp",
  "key8": "4Z9x3RWmJEWMLxXee6PPQigUS1u9ZCSZ2MKheaD6W46KwGigKRaZ4H7Mm9WzMWrQUvFoqVFzoVYuWfqi7PHe91VU",
  "key9": "3R4BW6Hebj2qpQmAMttmCnt5sRD7FWiKwnrmPbH8ixf9C1V1TkQFiaBh9LKWrWjfoDgwC3aK72aBqPk5v6tbDJij",
  "key10": "3WDv5K4vsTdApHCtR9iN9MF1PXGmNLcSoR7Kx2kfauep8Cm4UgEm93pMY6zN2XY3bHQFYsQKQyuvPt8xxQM5sBQ1",
  "key11": "2qyqEMkm94bD7D7TG7WDRn8URfksFjnzrfmtrPsRbj2JBHEQEWA1dyMruRLwauJQYA1fge7JTNzZruAn41Hvzu2i",
  "key12": "4nkUqfdyuRqADeqNHCkTSMXpAtn2gpW5kK3nTZepr8ejg4wT9TDF4yKCjr6rr8sdVnEB1sZGPjQfkfPLXkNGXzCQ",
  "key13": "2WdkDptEVNf4ygcJDxCtB59gfeRKt59vU3EmwgDoDNgCMism1pFaohLRW778UQ5Q4313e4vVREpACJodyUPqWa8",
  "key14": "3bmVU2MnPt763xCvyknrDT2pnRHQvGz8NtpDC8g9HCQhZv9Go1iBuoYXHsVksq8fZ9VhCwU2BbN6WCjT55XRfRQA",
  "key15": "2JUpHmkFrMSgxRb5LgZ6dBBxjWMmUzfFmW7Sz3iuzoGNGroGKPqhs8aTK7tgzikYeZoJHmdJ3nCVcjxFsrT2uGgf",
  "key16": "65EJH9Vf8VzFMsqja4FuZ4LhZTXjqLQMxBAiCmX13EbP1gJxWzMgrh1FabpWtDj8AfJunLCeSZBLjz8MdRsLjLUN",
  "key17": "3WtWXRmwc79SFfV3TYLxBjzQSCW9F4FsyjEqpzAtYNLrFvXKoYYvFKM1bcDaBRMEHBXtVHCUWFB44vZisvhX6Say",
  "key18": "3KAi5wQMNxWszRBso6GmwLxvTaKvaMjz2H2ENaEXLnwQGfxqymJ3yJKCRhUw3qEYPVPbnF8yrxD5rSdQ7iH2D2p3",
  "key19": "3PEu3iu4XAwLeBh3MvcLU2nvzZ8aYP3zH17kc37BYnFfjvkaiExfnNpBsnt3ydwvctDS28SJTWQnHmNLz7LFvWSn",
  "key20": "55qxDXb8AbWmmDQPyWQJNkoqycpPexs3D3RmXJzPhLCQWpRCq86K92Tsuxrr63kNBsHWagVo5X6ph9bTj8sE3PLx",
  "key21": "4VWE3N43qZRe4DS1UdbaPGMaEgpLLcrfaiXDbP36r9ZP6Z79KxGpffb1s3hT6jc2UggeS82MfCCXCxAN6MM5AJip",
  "key22": "5xjjkTcS3qjAqwcdgq5zmoW8oRmmyAh29b6uqRA7pAKnJA5CHZHf9efspJTnDxAsk5b4uPas5hDEoWzNQLxXh1Cz",
  "key23": "35KhUsBtuaJUAzJCUubirtSKFPcmnrRoMhi6hbtbTrKwrLgLBRvsDxrjE14scf6sr21T2c7HG85d7yC1SZKv9mAz",
  "key24": "4iHjoNe4yzL5n3SbVZWN4rjPmVyF3jLBXXJ5s1Yoj5LdiUzaLLPL9ShXaQqzKh7fsATSknzdBuugKLVKmpC4qbHp",
  "key25": "22SUAc67caPrn5KbAihNdBrQQWyJW3vz3hWCtRFJK9BuFLDKyRWj2JTzoUKYiVYSASwupvX4Xkz2RmvyvnFCaYvB",
  "key26": "3qyowkFRLWnErXoKuoRB2UfJhuTnL5C4v1QD6vSBov6HiWWAEPpu1s2L4dBQLqZNmtdMf4oNUv5uYGaa1igfmZDd",
  "key27": "cFZg1ydT4yPbdiEAErhsP3CZgULyoLJN2W2iJ3EwtqduDTSwvTJB74aYFLuDdcnnBh4RBh6snJJbUTduA91juMY",
  "key28": "34GcJeaDDsWZDiVJRbEBsL1ijnWRrajzL8QjEVUrB5skqXYMHbc2EiWZQoNyiwiPwYC8F5qugbhGQ89xHRWvNLQv",
  "key29": "2i6mXZhZVJbXWEy7FEWzmDEHnY5v4ebrCTkgdtCSLXG1UiPfEgeTMmjuhVm9Ck2KMS25AzW3uTQTrJmsjj5G2V4e",
  "key30": "8kVe2RsmWEfrmZBUAhcDRiTsviDuwyaAFYMaFgVp9dCwwA4Exo7YohZ2ktpoxEiCJAEy8Tnxmd64qhHZhuK38bP",
  "key31": "5aKZspQ94U85kxjmn9uAw5MH4e7ypo6HnYX9xFBL1gDzAz5zfyQhms7XeyyJUCzXSX2x7pnj4qdmfMdZfxX1khUu",
  "key32": "2YmXykMnSwpK3nAAWmEBtpoPQU5VsuijyGUcEbJ65dt1QDN1mQgNYp6RwVHYG98MbKxA4NVQaVsHzYVHKnEpad5s",
  "key33": "2hpGQqWfRAPF3eQgSE82sWuRPFk7V2fpfidfK3QumJnNzBkZx1SfGibm3o2c4YKQ3rsdbAKA28JUjVMmz1U3bn22",
  "key34": "39LP2BmbMhQRMoKJFwyZK3MzTusNsoavpAbADtq4JdK4pb7bm8etfrAGuF3NwypVPjs2cjUhbnvKY2dZBJqVNqDd",
  "key35": "Qs691CFNA28Vnt2DFh7bRj2zwcpkyG78yz3g95gGjBRyyTkYnvhWgPCRNhvxSCzwCWhJRZxL5GBhjmjF4cUgsq1",
  "key36": "88WnFvbVMk5M2SrhrLAU1JNKJFUHrmUreZsSz8sLDETZ9ZTQbXvpZziFL7VDDge6Tb62bgpJnipLLoyNFJEyr6u",
  "key37": "3pevFoHAP5HCo7M4P8BvCdLm65k42yukZiv5S3XAdKVvR9HWCuM7p6QRQ2xbPczVPzXd5VteFyRjVUp2DY1ynLFM",
  "key38": "4EVXGoDSwrxUHaAD956RXqVMWRURpKkCtGQDXqbTi37E2woizTBxn2muUBPcHFLbpBhKnm5kpnUVfQc29Z8wD5Lz",
  "key39": "zwttecFQnC4sBTY5UQMfWiQNBVMXx2SqLDVPfTASDxLzfpdPu8KMnLNFiVekdNJyRnwAScmTqEUJpQYroHVyhij",
  "key40": "2vevjZAGbyRexw5wt7gf9F82tBYryBtghna7rwiMzy2ZksMZ1mK3QfzNePbDe2qPvkZLE1WmNqMoKAbP5FdRM6oa",
  "key41": "5FQzzMed42rfJGRWN2kog71xCkDMyAp1vdwRhvkwhqWHoSTXa3sHkeBUibf3xrSDu3jXVPwEKwgEGuhVqcybsJMq"
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
