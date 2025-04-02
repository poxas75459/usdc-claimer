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
    "giegw2YA8QNDWT93rTAyd3y6Ue3FFUXUyPwhfhdhdg88RRNvxQeAHbRrEHGLt8J6BrpESUBtk7GuSLMndYXMXY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3mDVeckXkFBRYLrKpw7D536JJb7qxrGiRJgPMeWR3fPnJBpcNRzduMgvxmsgq67WAbLkdV4BodE36NtZKcP6PH",
  "key1": "4wJra9UMXAy5DN1sLJvdFmEDiRUD9K8xd3BqH7uFeuqPFKN41UdaoNrPeZfy5GBdw9zMesvSdwCR43TY3cnnHt9G",
  "key2": "5xG5LkhDXpGUttTCLJYa4VkkW4XVPdomm47qC7pGQNBJzsJ8m7pWJtWHF3Cvik8NZWSAcVTVesqGiJRbKxHRyVw",
  "key3": "4CM6hE76kGGGnzx3q218vYUY4ucapZ4bsjkK8hwHW1pipC8QDrxDh19LWCHoyonyWFo9xNVpYJJu8zSMEkG27PtP",
  "key4": "26PPQH3R8JAvyQkG6q4wdshgesKgCZXE6hqjU93CbHQ2B3rmrZzQWfca6ZxfXdbrivPmFcTdHNThiqi17Swpjtj8",
  "key5": "DEATRpjGdv6MjwBkZHT67wChCN6cSSn2hLBTdbdyfnzejXNUoBEygogJsMtMkrHS7S9H9rb8KzTmFdEEtzgvoos",
  "key6": "2e8SHtd7qqw9MneQqDc8mrocuKyApLxWVJLgTEdenv9Enbj3D5GZirm4QuYrD48Z6PPpp4v3Bg5qaFA16VuT7fZc",
  "key7": "5rx42JzFJTjEKouvhmZrQNF431ngJPMxDC9Xrqv7s26tPZeTHVSSbjPp3uCWMZ4VqEvpxsupxBypkDVLD6cthVcC",
  "key8": "3aR1GbPtEVMMN8ZLeer5GA917La22pCXVGmZW5jnZUh8vSbK1Vsa9sgTkedrpGPQjen8RtHQprZiJgLtKgCXrebV",
  "key9": "63UyJXJJ6v7aNQhTp5XE58f3rS6HtKXk5ta5RzBz5qHpHU7RKJGSyoUeLP1JXGrx4XtdCKgAftdYSpaPpo7Syx1u",
  "key10": "5RryeeCPgrXEfhpX43KypftsY4xj2Mi4NteNJSMFLx8jwgS9B2p85g5q8KtPmG6sc7ZHn8fvaXxzrAJH5ThmXYmg",
  "key11": "2KRjXzD6qfLGiC1ayT4CGc4WBk25joZUdyxhTFMnZ9cnBVUsfFnsYmFm9E4AvZsY24MBH8BZjKgZtvvvZ6gRKGA3",
  "key12": "4RGaSMs98m5PxtJYZNBfkagverQvKuEdVcuvbXLNkKfLVrLZfNYiRLgrcVGwfMS6jdGrKrjeaN19NeXPA1PCft5W",
  "key13": "5ttztR4ykjTtqffgCFE3eBidRha76a28NqaJpnfyZkhrZCNg1wCL756niWwr5JVegEXqe31YCKGQeAELw8K7rg6b",
  "key14": "3sYnsXfFKSDMk5NXcmEaiV8wWBcEX3hvPn9umqsy23ynut52fChLB21BqXnuGzYZ2NwSoMWXKL3Evr7zSyBU15eY",
  "key15": "5fvLxJK8VnuS7BzjD4pEh91EWqTV8zBNWiBNtbwV7x7PqBBidTnusN5hVYxdbMNTQxiFg17wZH74bkxqRcEzanve",
  "key16": "DdsdCRoKWtEKM1o5qg4XA3NEQQijeW8CTiyGzHMkYhzPJzxVQJ5p4gRDX3iGmM4BVZmmuvNUstzX4cUq5eU7edq",
  "key17": "4PkDUHg4P1G67JnUq6EwgArRJvC3g91sRzMbNmK85s8XcxmgueURXSrGKW8DQdiMhuG4HFQLfgB97s5jr4DTespS",
  "key18": "2qjUEYt4Ti6jwAXEjuSb55RbBWsxMTBX9LK7fRKXcHJb2ipKLcANDAMdv2rRPicjWFxt2572HkMUbpHt2H7AtP72",
  "key19": "FAzCHWw33fPQDJW9H331ki32ADGS7XpPCgD6VQFp8GJy2y9UmxmbpVXCJ7fDvDurNZ7Sn2Ra3KR8Ahw5HrapWTb",
  "key20": "2ENnFVNMXfaKas4gAzKBJELzeJUxsZBV1oRJGbWSxEG7DQ2okxkRJC8ht14a5Ry8je3DK2TRUmczgf2VZEEmUDML",
  "key21": "KBobVcH3JaJRgzDRHZZcAmGHjuWLhajgAeeFcevUdaZEPUGuvMEuXNG2P29CjtoeyNhr5gf1u2KLmyGFn2UEkJK",
  "key22": "4qT6wjHf8kLkYmJBj7gggb1NbV6QkhnM7DsnNkqtdbx4VfnXUNZ3TWchUR1E9udLaoQ91DoaapwEyLthKoAzwsFD",
  "key23": "3dE3kwiYuUSCMcqmuBxQwcVNX8Hqfa7wbF53YANG8jnLNgjociA2LdTm3doPCkTuD3AXcG5BG5fwWHupFNfE4XPr",
  "key24": "3CszHyqZgqsDqXMpx8Dn2YMNcbdLPs7L8SsiGuLEaQkxZhJjZBdpGvq2ZySDS4ozLSvgkoxCqbwhKGxEZVP1bfu6",
  "key25": "3ta2xP7RruhKtJwgwDBGki9vnBdjey1MsdTHNskiuxUa5bRLnXYoxyKgKWQZEBwADKwiSo5KeveTFUMHU5JeoC7U",
  "key26": "5AB593QSAkYFiAELYiyBT943Ffiive57LHuuUBjPXRotcfAGDwKm3wacVU5ZxpgNFRzwxmiXSYuCzyAFYzrJfa8U",
  "key27": "5AuexvXoRydtpvzuWiBEkdxQeNzsramF3aLGcWRTjSwERDwbUCasLCvoY1gSq454omjzN2CzgEn4sZZiYjeEgNYm",
  "key28": "3MXgJhdvDp7nGjBCZHkMGJr19pwXfAb3fxdSipkwewoGnmZ5z8EjUFGcFXP3bWBQAZSMK3B9aUbR5fkaJJdWm4Uw",
  "key29": "KhtEZwBfsph9fruULVr22RL7zYs2RkGxHNFdYX8yyZbEoVdvPXjfRk3sANQnJNq2BUN5jWMn1Mb6oEPWYzozd8L",
  "key30": "4huQeAkd8Lz3Mzsy14Tey8jSwCJKJaJbNY3VkVFxMeEJcHVLvqkJg195zV1JZVj5mPr3YW17r4RnSFSW9o9r2Lhw",
  "key31": "47Jj4bY1HQPfamhNAxsX9bS7Ui8gQBkATLbEVdxfGWWFxSmiTCni8ZCZ85UMX5PLoaXkWX9dNgKNpujTeDwaoag5",
  "key32": "4wTUBzSQroSvBYMXM42Pr1UW9oxMp2Bw1be7NiB9hNGkPw7euJvcRmG8TUXBskPNDARy5DGN2xZ1ZbdZYTazxZ8M",
  "key33": "2eZaNdqVoMaV8Bas5STLgG5ffjNB5tf3wcEYzN579vWoG9QD3T2x25YJJZqPyJjSU3FK5SctPqKaJbhEeBTVmXUh",
  "key34": "2DVbBuJRVKDcaZmu74bqjFWtaT2jJDe6DqzVbj9cqxZMDvZhkD6BNQNss9pBk2vRCmYM6dCbeG73hJJguHRPZKrv",
  "key35": "5Zc9jcsvCpanPcvrEZzueSwumetGB9Wb2n4H7Cet6RiVu1Fh3yAg7FyzH2pfv6HmbCtnVZUnhVT9UePdGdrsQust",
  "key36": "21rrVSJb3WtNFnMV8F9Sbi6FijA7HQYCb9hrg1zVkT5EMAnKr3g1yLFkCPG5yZpfVQQtkJm22E3YoPNAFHj2jVsh",
  "key37": "2mMxZzaw9sqTuDm8ctoSL3xWEqSfmK8jdtoR8RSAdvFeMHtXR5DyRN3vYrPY53fB8hSmqPdF6rx6iRcnYoqXKqLe",
  "key38": "Fy3EC9CCUenwMX7ikmTFi5krHe8sgKcdd6yDEbCRBKKm7WC5SM1kMWpDNFHyjkiYewvhjPPNByU6f5JnfbFUCw4",
  "key39": "2brDL93pfY41py5YqeAJ3dM385GESrmj3Wg6NWq4ovmGk2HgUG9btnfoybzYUFN3oLo9opD3jpbbVNo3Es2xYLzU",
  "key40": "5AYB6p3XBSDww5GCYBXXqaSHSFLAxup9otUbQeJxZPe3aRq24oRLA34sBrGDg7xoehEfZNRmWxzLsTwgGEw7fyPM",
  "key41": "2UjiYCEyo8ZyHubnFLs1RhW8LtB6aVcMV2SqipnUvc5R9sofG5YL6YnRGfjHkLWaatzw4Rper3pqFB6WwcGwRQys",
  "key42": "4G1rCt1NGztHuz8GA4PzTS9HCDANGBiiebazKk2f36FQrf4dRgHk1XGrGWxcYBoUAZ3dSQRjjXTErTXZMEVMcc2J",
  "key43": "4CtPTsD226rytByHSGuCycArJkeimEg6m4HH5CnVEWNLBj1GQc9m6wiE8ukyeFfV6CnxuqsWnSPVMnZZ4LVZwcQZ",
  "key44": "3CMH2dwitUMrYofGJsiLwQg9KoMYHvFc3QLQvekQ9Wof7E68BSVjWh5QQbBDhxzBhRMhKFsMtc6wkAfuGNEUshYX"
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
