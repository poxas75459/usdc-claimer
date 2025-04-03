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
    "22BrwF15vHwMrF1DKUW3QQMSxjRoUQAUTJvtcyqgevsiVyC8Ucf72V3KxTJcm6FCw1saf8BxtXP6BUQTpMxsuqM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qq6tyBTmD9NsyWeWjvvgu9HzSXcEZN8xCh2RxfPSUCU47uDZrt4B8oFjhoXiD5SXTmfgqAbA4HKibayhVDF3Yky",
  "key1": "3QudspE7GaaNj1vgP7S6n9LvgKSLhjMXQ1Mi5fRNjDStcCeAee4MKZQhQVWvxe1LCc6LUyBASyERSJBQbmjgGHJg",
  "key2": "3Av5vQyaUAMKzfqgvM2rm1YQ7AepWagyiAYne1pxN9RRYf9AFC7YmxsUySU3tAo5FetLBox4zNo7wyCr97f8ZiDU",
  "key3": "DsSoKiq6m9nBiksNcDiuKE54PqqPKSTpeCKz4eznsT88vnRb4UcXKvZv56481rcKsYgGy5C5ZpVmosNsCo6EHcn",
  "key4": "5HX7AM96nmkK9Co2hEEQwTo9RKhA4HzJR3sjgG66rt26ifVBdX8ZqoYKeAjdvyfe9AZW4DmhtNNCdmvQArabCiPX",
  "key5": "2zDCQiDvjRAwoAp7gfUkqeXgRL5Ht1uyHPXAVBu6qboCSd8u8DqCGSvP7JsieSewhVTkWRt3ZEb8u2bHGRtS9SSa",
  "key6": "3G5Rp2nVrttspni5VKtgXa2UNDm949dZVa3ympB6qoCHC9GAwwre38kVXwXg4GPvo1DTvrYYueamvr9smc65WQY9",
  "key7": "4xSZ6z3wATrfAAm7fMxnhpDeL4gSvJWShEhj8KAmva4MrE17g74Z7FyMAMsvfuYw1KeV7r97qZYBgDLvk3PaVkNG",
  "key8": "63bamEaCBFgy9JSu4CdzgLhNjwrj5ESyB7uufG5UVoUeWGXQJBu7zvXMiHmjMfgnoELvCJQMjqW4GyYisZ2rfe53",
  "key9": "4qJTQjGdEDLEEmYwGJLSXFBH2WyznKQWBsZtV3zn13RvrmbtThSQtXfGmCRXmCnzbLLkM25zdb4nHvFhvnqYd3fQ",
  "key10": "22GRj8LLDu6a2Yy1yc7rL2KFSrkLAdJ29DGWq3pHG2wWgiLp4nu2vuLjaqd4tPKJhZNFK7T9X5BVFLg8UpfB2FEN",
  "key11": "2KC2k7MZHhLqrN3zCR6UyqQurEpBeC9Sv4htohMAGhzhxAHz9svDEn8YWgAv5xuVVHe4CDujw1zaWYeWfQYtaMUn",
  "key12": "3T8bdrGAFxMFX9nXu9t718GPaJBdMug6L96mpZbcdXgqcECSXT5W5ipK9o67KaNUfJoc7bfuB5CpUixSvEycBDyx",
  "key13": "4ZjFFf5WNAUA9PWS5yak5cNTKQbY4GSZYxm9kPN5XAjqeZDR1gRmi9c4NsJEqTP5dV5fws2HSRtph9jY5ixYVWMZ",
  "key14": "2koZFTntuKCmyLY4zKZ4e3VtQGXWDNm2hNctTXX6RXUJqeLHjHg9bRV7LiUkVccumaPNPfXKsnv1Gmv6hbpqFdXf",
  "key15": "NQ8rH4oA19ZEE9nwvFHSokjHbSz3YXnfr6CDagjUUYyKLvH4psmDgprM6NxncgwW4GgTBGhihuFNcB4NZBWpPr3",
  "key16": "FASy7ijxdpMgYzQLzR9gerGsbRHvERcoABUjeg27hKYHhrjmX6PMujjDmMbPuRDQwxHFZ7gUqtp2QwYvhKuZGxD",
  "key17": "2hfcCL92oHRu7Da3x7g1uXfe9WYJL874cLBdVmGMsCdRZCBKQYfAp4aAhg4P6npqLQZUBwTYgS35cbEhUZp4FQK6",
  "key18": "5LWwidV1xHwngRLQV2u6UUmkUTELdJSKTCjGBVtbhaojtg584PYZ597K32LvPUgK5y1dyyb3AxsPj8ek2LtQSs7C",
  "key19": "4iRGYL5BjHnGshJNph7DQ8dUDTttQAA11H5M6qsFJEaNwvb8QHtDFuq5AZa7LB9S1T4e4tkoGLLTRjvzGsHWbgHX",
  "key20": "51KbSmQc1AZDfZZ7z7zw6SadeyoM2LFZWY22bjK6377C5ajtEQG2wbzcjHg8dQFZPK5Yi6i3kVvhWxdwqbKMNs8d",
  "key21": "2prupe14BA7cfGRvJ6qoNCc45L3xZga8SMyFZWSwCzSW2AnzYxYhdmEgrSGysnsVG8Lw9VaWphKhbu9TbfaRoqPU",
  "key22": "4TqnkqibpgPr8mfNMcfRqQL36M34FRoaHjPceNfYTTNogVGgCSF8x8v3QkL3rWbH2QYReYE7y4kSSNHAiJp5A8rp",
  "key23": "5myjQ36JccpnS97QdRDU2ECAQMPgXVGkK5mBZyZRJhZykAXFdxcjR5YTBiQwyaZAQH9GcH3ZPNqhuAmuBiLcpkq7",
  "key24": "3wa6979yzaQSE4gmx8k587m7jJrNE1JAeZNEBeSYzgE5QJXez45HVRcpKjbnT9Bja2AM9XpFS5GhK4SYytxfJt7o",
  "key25": "2g7DLg7r3K56tYfLHEJ149wiU1u25EpzffL2w7vX2FxmVHqMaNUzZgtPZY2SjCkLkzHJk2G3EZx4FMA51dTNH3EH",
  "key26": "3VrcrVo45ajPEwdHsDYwPpPGx6reG9k2yQbASfwiWFo42ZiJLpmyxoCsfPohFdBPxpXEmGg6ipCdBCEZcErPBTY3",
  "key27": "4VzhR6QiyKy3oVwWRHkLq62hX24M9we1qhKhaEGUL6zVvtqdbQK8t88c515uJk3GBsR3D4UUo88yj4RjeYfXhcma",
  "key28": "4pVB7zYrRev3gpys1E7Tz1kisxP61DYDqF657msSR7LuU38U1HNMFBd7Fwri4WpZGMKqr7zWGGKHQc6gVeeRmGti",
  "key29": "ce8tDZdFy9QeiFbesZoqbHD5JTiFRgio9S3Kb36dDbBP57ZSRT3PuNBhJBB3d4HocYN9oU45FT54y7Kzerwyjgf",
  "key30": "jdBW5fYHsYufEFDfLC7WWEGPxmLqdzjMMFxGdffQUxqZCv7Rn5nYz9ByJmN8c68t9M6c1fNLitQaPKyXr3xuWH5",
  "key31": "43BydKPVR5FoV9B7VoobLNU8UL9B4CEqt1GapEKjLBUSyEFBt8Dr4Jwie3bKmM1qef9CQr9A2heM6CQzhRPa2AZk",
  "key32": "63BxYQzviZbCHo4xUMQbWEpJ7iFxArPXwhzXBxzD92B33EvcpyR7qF7UYoDDD6zFKqKtLWStVuKS8V9nwNvppr85",
  "key33": "86at7qcEATmzzWkmeSmtFpmCRacYA1d2PPu48ZYodqMXUoVJ9pgdg4vWe7S519uZYCAtj8NtThPLq3kb9eMUdPs",
  "key34": "38VfSWndhb73spQb6XxZ5nA7Ku8scfSRRjRAM3XtG25Vgb1AaaeJUMRENQ5njDb6F3PjrQBKKCpqRvQL7YnJ1wvk",
  "key35": "2qEaq8rviLQobRfV19g3nFeMnRATUUf2oqkNAwXgkNNXd1oqDsC2gEH6B98Zue6qXYiEiQ9REfQFGjcdTAKhgEoT",
  "key36": "53GReH4YP6w5RTJwLRHmjVX6DxkPsyRe6iUPnwpvRRjGkm9ayx7gAFxCG3iCuMd1p4fVg96gG3Xtc2mXD1CETaoG",
  "key37": "4BLWjnja4G7CtXYmThfwzBWfvM5K5tmSTVagxeMdZ5g9a6ScePZPMhzVhM1xsuzETHZmKn7uFZJyCUvz4WdyxJWi",
  "key38": "w1hxbtzsws1gs9cWNsWQai1TqZhtvwf7bPHvbXqNS1UJi8pxoNmTcNiwgFFN8EtAhj6ZM7f8WswrQvRwah2UYZQ",
  "key39": "2DyLDS4LbfuivMzxuZpGnBhhjK36G7tE8WxWsswxJ9PeytoduxzeHYPGvmxe7Kk7Y7jTMaMHwgsMGSXiWwhFNEvJ",
  "key40": "2pUpfMhVvc9iBxYiDWFhPss4mcUx2xvDYdqUgx4GzQhfSCmuXxnVRue4DZaN7J4LZZ7ensEQSdreHHr3JSnK4cZq",
  "key41": "RhASi4yvFoBGzsbAfuGFwzZg9TGpzhcjbsgXcum8yVbR6431NwsKZLv192MbhajyuT2NEH5d7jAiR5GayLi81Mg",
  "key42": "522sAnX3nCvau7rkrm9KHwbH9zCgmoiHaEYBq4UreTeD2HmcsAd8oQkpdKdHv4xAvD461RT4ryRXmkdgMjeQ6zgg"
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
