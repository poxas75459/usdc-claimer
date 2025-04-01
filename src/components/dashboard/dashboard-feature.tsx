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
    "5S7ofNUa6JRj8jXZTBN7Zja5UWY65chjPc856JZBdcyEuy6TS1ECb6fkzuCw1ckRnYuwx1giZH2v3uHChbHN97gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nixnrJ8z2UZUhCX8FAx5dhx3PeZDYFny8BS2ibHVgJHisLwG6ky19T3k21tq2ZrE21zLunXdF4n2oXGinqVTpSD",
  "key1": "4ucqQzzj3adDYrRSc2WFKnf5Tx3ek5WBmfJUKHNPiQ3Xpg5auscdwDPoya7JD4okGV1XVDXm7fosnBwqCbTxPXwf",
  "key2": "3RPB9cmPjhoczPh4GgQvJgsZCb97E6o8BxgsmNDpDyKUWBBDD7w4mdKy1xUuxG7sTgU5o5K2qcmFbWqXWRDUQX4S",
  "key3": "PXKKc53BgrKVewswb8QjTArvvxpqKpndVPx4pTstfbgZ18FqTKNfKH6aWpe3jwF6qH2eVWZuFYgzz6oF4ebsnob",
  "key4": "5ms2uBFeyXJS5MRHbf9fPC9vMgrHgLbTUCoiUfEbX8MGmomodDQZssUVPbn8EL8EuPA4GbBx4StF8Umt7HctawYT",
  "key5": "2u6L4em1kMBaLJY8ZPbuDvE274eVHEg8dRFm9wenwJ7QAsvJHzHzhv91PZZ9x5eu89ji5qxh7iVJWNb9YhvgtfAd",
  "key6": "2xe8pDEuuCvf3Unt8tRnJMKAdntjX1DsLa7Xg7tLx7RezCmSNUCf7mvgj22MLetETFgrwmtNqzrCzi4Aqjjkrygm",
  "key7": "3vdp2wvC3WMkcL1uuSGSLWFmZ8GZ38UC1vWynrdMX7wn8WMgc3LZAkNwuj94oPrMT1Sqdtevq5S5LWUwKL58ma7A",
  "key8": "4pHoz98V9gM41ghR7SHQCt3ss2PDErbtpPWtLpbcmRVyP8bdAtK8KKTebrCMpPTRhgXVqaVvnNnQfYqPVUBGeqbG",
  "key9": "2xk78Wi6TDSFdyyaqdSXyYdeuJkYShTdqXjTxNxzNBJr32nTzY9RkcoiJMbQ6t7ofyA6s7ZLVdZDk8MSFVPu2ors",
  "key10": "3CeozW4xxnUPHejhLWaLmk26YCcpNgyzLA44senBywSVTtdXnZ4Jb8X9HXtdzBqvbvXrz5a5Z7hEwJT668iokhVc",
  "key11": "5pwqkXQUUgYBAftCcTkp6guxpjiQS1V4gRa3rDmp9YtQ2ssKUoM6cf86EF5cVx9miQXJNiUGAQn1XhQqdrZpoKvt",
  "key12": "2xhLYsvqAZ3iWoDaJvaiVNnS1d4QR6wcdtDW6hMmPSz5hKfcjxomF7GGT4ZCbhYkpaa6dNMHNPRY6kAWeLPV3Tvz",
  "key13": "2w6meCy3ztdjddBPZN86VLEa8u744u8vPJqjADZgAVqaqcro9vv6cPv49BBEaAxE9vqpXd7GmnhWu5KAv7tCdpV4",
  "key14": "23r8g7fWbbu4wsDVn5Md4BfvTAwhaTBH9h7kAuWH5xaUhH7DwGx5dfTH41mQuWxvmqdt1aCeBNX3mAUf772H3n2c",
  "key15": "3tS8DecReprnXrdmR6G6LbMPfvCaLA3j6ScYXCDh5osiy3GBzHwmxJ87sqvnVEyZysrrXLKCDgxUMLgLf57n6ztg",
  "key16": "22nCuPsbiwhJ6BjjF6aj2hN4NzxTwtDFqFhjszKUBHsmW5he37AMeyMDpznVTBNurPaycf91ctELzoZzfkvmRJ72",
  "key17": "2E9ANKUBzbd2aPEAgNrwwPJ5bY6cMJkaQ2EmSGAwmvMovAXMo3c1TbXVcyaAEXVk8icXwkzE4Ku5DDKpX8hdBa2Q",
  "key18": "uCe8FnamwhPbCgWnyeJm21HfYAcKJ1EUpWGM8GDRatuWpriXaL8HEMvc6JzuLYaZKoyRCniGui7EbtvX8MAvAff",
  "key19": "47rKHdQzPdFfBRPsCenvP973RayAW9Agx8JHuV8vhLsN25AXZgXTT1jyMwQTMBBd9HsAVKFYWsWrrWvSGuvbJHc",
  "key20": "21hsrad9eSqM2xU1RKUDy7YXoUiXB3AWMwYKgbZA93tQQwaPcWak7QGZ1spxPb7xaav44MoDS58isT86EUTYA2oq",
  "key21": "24sts84LbhNs9SNycs8PUaDGZAkKhcP8B1K3PvsT6NbAkR7AtH45AUt9HByeCjTdbtycU5xDSRheBKDAThKA4nL3",
  "key22": "2mayNYjWypC7fLxDQ1vJas2pZumX3vdU59mn6B6rNpRS9fUG48TGVyQpyWjhnUGxro4jb9QsmExX8cVVP8vUotF4",
  "key23": "42KoMBAZid71VAakdhqvfxYrEaQJSrFoQbMGnvQYi5nkK7L41EZ3WAxah9NzbdqjWYqS4FyZvM8Q7kgryJtb9xz1",
  "key24": "3rMaDE2wFFJKfrqS9yctDtn5bwkSCNF97iobsFV3n4bxXLPqqZELdgp2tjMNxY5EV2YYg5Dd1Mafs5J4fLXdCWXj",
  "key25": "4raeZUMLZJr5PKQoctBzZMSiLtWWEtWkcgqh6j41oeYLXZXKrMbJQfdzqY5zgRB7V4cuDcA8nzcTkoCvhZkRMbBJ",
  "key26": "3GcwnsoFHCHmGjwTJdHnxmsAtoK9FKGuJyePf1dbX2vxcmdhHXdYvZY3H4nCCc3jnDcGAb7WMwKEpACxDzvetTSQ",
  "key27": "3erdpjgNcREXKPkiJe9a94Ry5T9guYgJu8SiBmm12Wa789g2XUaeqavUVkMVsG5kvMgiZ2CbGXYNwg1pLBGHrPeA",
  "key28": "YmxiH4tofWVsf68pbkdEHUftsDUgMgWBbB1iSJ9SWfSYBXtFyLzTuT58YQs3TQgiojj7rHgWGZpmUdrp8mn2saK",
  "key29": "koAKXA8Kvnx4UqfxJ6yKJJZgTsE8E9SwvwpkLiknNYUrYAEKZLtkTWzpxhNdnc13LZY9vbs4jSqcwemL4mmbWvx",
  "key30": "5bkXkGi8dg2gvLkJeCBTZVb3C9rAMAW7vAg1pixTKBk31HFiejSnBS5J8hBM2GzsopgPPs1stqRYLRNfV7cfXV9B",
  "key31": "5WAZWjJ72pFnaxrzFWCKEDwFfv6UGW8EN9i15AX4i7f5fv5CPhYXbMHC7JXGDaNJxEHAeCy8F4wacLAGwXivFS7N",
  "key32": "5P1WambMmeL4yF6sxsbmspt6KppampN88qjmib6rjMJTYvvdvcbSeNsC4m2ByBw6K5M4dqhmiJrEi9jpFcJQhzms",
  "key33": "42NpugYLGPbTFgnpFXgEp1nJSTtf8sMso88DELwqy4d5FugKEZZDCGZQRHuJi3k7SbsDJCwVFrgprVq2kBaS9ndg",
  "key34": "4J4XFsNptm7BF4D9bQ3H3ProsWb4jprjoQ3kyqjBo4BtEzeLcmeP9ZZepdDpuT9PL1cgetuFpPbTzofFhpaR2Fdo",
  "key35": "3nvFvUqty4E9255NdasDhVGPZzUrQayWUDgdd8Q63AQgnqoVgRBbeiqqeAwjrvDHWFrG3DyGvwhuXrbwGJaefdLJ",
  "key36": "5eurMKgGYNwtvBgLdSWovdixkYnqqi1hDW6mGbjTsUfsWjnytW5juNwxzbsrnTKqCXqpqxyBnFZ4bgCYu3LNy16u",
  "key37": "3Mz4EUVyFEwXEizfNWPbfCxaLd4Nq5MBoDnYCDKDspm1z6r7Goebn42DSQ9ENhU4uAmXPPrZRSCJ15uRQ8bW3z4X",
  "key38": "4G7mh13ZgoS7JSJVK2xNhYxYV73AC3kDYYStnF6f4bHCUgK4uLsY8nXt4W99AsG9uz1mR2uKVp1xNYbw6nDCXtsD",
  "key39": "4AmnSDc11rnSpwRvPzJtibPMghHZZwVApeyM6Gb72paKPYKaiMjXnPsgJ2kB8kAwCD5HYrMQQnZ4k3ovU6iNkEoc",
  "key40": "23tmWjeAgWCwpkY3JhdkLG3y8RkQTHv7LrHjo2qz9JGAfuMkR1uS8QFbWVbiV3M22eVmRzQTjE7oAVaMKFyXoQsq",
  "key41": "3de5cebssZCwc8g5erdXiaFd8yzP92QEAWtKYmSpjMGswLR1iSzusg3R7kRaUYzn3ziWWJ4ahEuT95L3MtyDkGcG",
  "key42": "572BqW4d6RtQNSbub4t64hwXUCaUfcPeqqbAJHRzfxGS95oHcVSoPYTuhRG76RWffHr8zMFzS9RraDXpUNNhGode",
  "key43": "5EaKv3dpKmQDkawKAxHXW5HqSYaoZ7cw1SRm7SPz1PYLRTNBE7VPQguixP3gH7QiSBKWUYAogAyzAZ4ntaqakcCd",
  "key44": "3oy2ZjLcVrCo3fM74c3JxYt5Kiz9ZuyRS5fZadQ57Wr2upyoU1CkEBJBRgW8BCDQCGv8Y3Uw5REv7NXGL7mDWVTF",
  "key45": "2Ysobq3Qv1mJCwWsHo6dEESNv9fhWcSuK9oy1mjWQJ3YReQCxb7a3kmAcR7k2YpNbqQtW4QRDzZsVNxHSwCSA46V",
  "key46": "2CtETjJnWVh1BcLhMTQXsv9WsfhmvZmZMKMjp6o9xZhztZdJSguuN94VHccWFhk3aqPGxAsT8npQHR4UzCW6tsMq",
  "key47": "2acRWTCbKTvWe6xWoUyUoquCsyDJzCLfxGKwyJeb2vx5SnJwUidbBtQc6o4SRRHrg5Znm7QfSjj9fAr13GofkNLC",
  "key48": "AAtMKbK4W2DuWZw63A7V59b5Ai4APSrpznrne6srQJbynGXCpwyDYjdMBGmtvGV5fRP1BABYxMnzfr7ECG6oRvv",
  "key49": "yY2UvfFJkw4wwjBeDfmCQk6txsnPAFPD1wUCF4Q6qPnJjaX54xLiqm8rnLiQY8Mwt5JPdz1XLHU55bBxGdJjttC"
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
