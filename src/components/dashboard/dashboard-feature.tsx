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
    "2UTTvKnqj3xxood1QKHjgCih2ZGFLQwJDTiMdffXGpUHTeuB8BkDxkU3arwLUDMdtdz395t7N4RqjAAEcChmYAhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43udBRzLUKWYAbXDLmnZME9EkusPqedzmYQesU5sgEbDKMcym8AME76KkaKCCHwjB9UJeJ9MYXt7HLG164DUzzZX",
  "key1": "3zJzgBokSZ2DRDhwJdPeXwepchVYQz6oqwppBDa5WUncxeJMxDZm8FQv4SKmr8vuMYNbxyQ8FU7RCCVhdHrAVjTg",
  "key2": "5mpP6UpWLK6LNCnXvjyqwvqmVCnePnzKwB29tsiMeMtoh922nqPR2PoJhMC8ezAYbcfuojjN1zyded4sYrosQ9N3",
  "key3": "2x4AebXyCdVx5n5U7ZowKWZJgXQjQi6Qb3C334fcJ7yhwiydK8BeQLPNyKiuDtCN664rKcrsd2aJcsYQHer8vY2E",
  "key4": "3BemY94xckUY6Tc3fxRGhXBnEbJjAQPVbGmTZs75XTaqaXtt5aszyNa7aiRbcJXUfMZh2bv9Ymbu5RvCiwoKoNSv",
  "key5": "5GaLnDXMFj7mVbFWS3RDqL6v6jvcSb7iWyd5KxS2crJivRwhgYdp8zfkdHBMxkXxHqWZxNRjwGkx7vhb4SLhBMyA",
  "key6": "3UWqcQ2F6bvnJKdbsnz78GjwSPSskWhb5ZGTbFzD17xMiwNm56vMCG7D16iRMEuyewTYavmCUvqsu3Sc5tK4eP91",
  "key7": "4VdjLNXNC3SKUvj6kKhpdxmdh7NjiGrPAmiAq7nxgSZfypn2WqT9hFnuDAhsm5KQrmWzPwodLNUxcRQUojeyqByS",
  "key8": "3LZB76LRZDG79qtoAfQ8EcUhy5gCQ7soDp4mSYAFdvRdQ4bhtipo1TAZ8Hbav3kbNgHxvLgyPUPtVb8AJ2sXj4qV",
  "key9": "jintsFguz48VrbcSJZNJvy5pNtwNtJ23QnBBov7davRRrFmgCB48DAQZ5e82nG2exV21gSjowUaKXkredfeJEsQ",
  "key10": "oCbVsNc8ruATYLuJhkNPHk5BEE93gbaS7EmYm8jCgWwnJzZD3FMwD7VTkGWKJvRfk9ejzmAyiAJk8bsGK7tDhzJ",
  "key11": "Lr8GZK9XMuQCKFjhSrkwYisZk4ZEUttMyxD7MD3KpWvv6kHazHAP1MBt4FGTuD49EC1g2vAg3LzoG2mnGukBNNN",
  "key12": "4DJVyAjBRYWzTtjYPYJWvJVdvsNr2QJz8E9jERT4re1gVT9XaQcoEGUmL1jd6qxKeBXMDyPohin3zmpZh1hnXVzT",
  "key13": "5ch785SvxXoF8hKRczyUyumVY7awySWNiS3Dnq8j361NUT35ipxDzkeTDtBxc9tXhCYRS87tAY9UnmXpZmqHtjNB",
  "key14": "uEXGFTKvmE6oxLm5GvzVnz7zvLw7FKUDsApmfHGnenCKyAM2WkQmfucANHSFS6S7sjHjxPcYGCEhMN1fJ9TevGP",
  "key15": "2Ab6a7TduQFoxNhnERoUizfH4XbAVDdDb9EbRi7uFi3cLJjAsTUBMKpcz8TRWxthrkiwxKmRK9ktWksdKCWiwHQZ",
  "key16": "5Sy8KTpMJNc3nEXYxj1SMXjqcw4wQ4quDrPJZEwHizfiazqF7Gk7vZ3X4WLVYzGvffGvVv6S2VAEVvW1hC9zVvg3",
  "key17": "4qR5nEKdWuLh9F6WKKENpNBPYCbcHxQcBLBqT91qq6kRtauMXH37y3piGGW213nASHCCSbmRxc7Gi4nGCynqnsZK",
  "key18": "3w1BLiYL2rUiZVcqibtAdDkgWsRi3rtFQNzzpNiHstr8urxSpHFYUHeJoDt8rUkn76kLdnHfmMDuDWYEEf1XNbGi",
  "key19": "2oS2Np18gQguhmxjpK3Rbotm6YiaMQmuhi9p1mL28c5oFMaLFz4gSbJTGNb2huDxiHEwuGTPTxfeVjuwXxW7qjD3",
  "key20": "KJa8Pxh3UN4QXZaPCQBeCKqZNEaNE67iCaYmYXtncJCvexN6tGU9RmvgA2MkkgjmwLkwVQmNvAGfKFPY3CXTevA",
  "key21": "51MovweL4FZ9yH65urGSjpPPRpZPUnAwLT5y9dXo5TfaXKGzsHiwHcPyn1LMcVPcVfNuMARMUhpbbBBJ6opTedjw",
  "key22": "55tRuBwyadoVT72ES2dcYwYDBFKkRDKqVMg141XRSbE9AYjG1ozuwF4CHonm5RkgU6ewkXpc32KH5LxHdP1eCZ8Z",
  "key23": "45ZJBXcnRT1xsQFnYbt7qxk4Mn1j25KqmU2q2mXkSgL8Hr3Bp6YYNRb4M1DkJjM1sEF1G8Fsfwg8NG991S8qixfu",
  "key24": "3jZv71miunyQHpnRSodSPDQFzNyHkW1fooHxV5RMAE48HULvSG82b3UQcj13HUs4mfx5UfiQTmvVLqzLu68KSeZF",
  "key25": "5WM4JsRmk4kznL5gT1wcVUvPUZUe5uSAtHadudEvx62zctUqkbZK27kgiGwD2PGBHcuCmJ5koDUABQkrEphNkFAK",
  "key26": "2AwQB4PYXvkXuXSgeiMpsWidiAC4Jg6T4Sgmi9owNDfeFUA9aG38mkFWPTKSrSuwtgaaWv5TC9RCp4UW4MSMyzme",
  "key27": "3txD9ajyUWN8CGiPhRvFJP75jqzDoiRuFe89FihnuxDn4RdvV99Mtf4keseiQptrintRiuLdnNR8QxtTpfprKTey",
  "key28": "4Vsv6rC4GGZiaFrQkXLkgjhqieAWnEe4F2rLL3ERDTEKqJbkveruMnukBgWUWsYwBgGwYxd3jEYLqio1xU4v3R8A",
  "key29": "3298Gv8a6KyjDEqUHuULYxW886bSFscpgY8Vzjp3ZsaCgVomhtCG81EtzL7gUNStmSCWSp3tqQSmJUiY3Kq8SXZh",
  "key30": "4NUPZ4iSrhejLSJstVj2q1GJ5T8YajzV6Hi3ZpCDwkHN2x4LXDDqJGEHiq42ex7hKrDJteDEFYSySFStuRAgGr2W",
  "key31": "pNBf1sXLd4Rmv6Qz4BW3t9jPQt4SR6HvE4jbcaCQctfbAZ53ZKb6HWXJnfz4tbKVNa3paF7BEMXvm3M3VZB737h",
  "key32": "4RKMtNiwwtKTvRNxBSuduLmjpDRUXcicKSMBxDuxGT4Ubt8zqPJF5Xk2uHCaeWaMxKJQMw4WnS9hwLDjTmqPwWD",
  "key33": "39FGzRNZ7VQBJfKXaXEeTzKtrEQStT6wTBgWGmJWNCF178iACi2Yhpi5mjbD1HMPTaZe8v1yes6CAahAn1xi2bsQ",
  "key34": "5cZugNFUTAHp3wdb1A39y2V5F5eSoFv2PKokoHeNAkhZCub9utWvB2mZg76btPvctMobtyJJDpaHbqwKAP7tjpP",
  "key35": "22FMkMFK1VueRUxQkVLSyLancvsDBxexvBoprDLR47GsKXjgpveKjoS8KhJ9iiXMN55P9Tf8oqu1ykTdnHhXQYCH",
  "key36": "2yAnyfYRwogbzc7tfXKFzquHN1yHn6Kx6v9u1y7ffphKjGdnpnUepBjFE15AKscGgMHC313rsocEfW6a5XtXmn1k",
  "key37": "5jNXyTjDztFoY8twgjgWPWqE7v2Ys8pWc2VnoLWLz5Pr71YMiG2w7pc5Q3KL5UrG4odyovu2hLWKRJo4zxXnpZbK",
  "key38": "5BPznqykvNmkkAYC3tY8eJWqmUM6FwskpUHfADZ7ufY6XrsXhWnRmbLUEeA27Q7AbXH8qWqXG5db2xLCdVcf7PMa",
  "key39": "2VtRcrYvC1bL9tu2gBiJzxnTujbHTiozw6YVrtt6t6QrGbPfKJU2L3UJVzdkiFiNaMViz6SHSvhbWfcvmGSUjDDa",
  "key40": "2n8bNUiSsGt4FeKkhZNbpjNMrx5Fcy6LUSvAAFmpRntRWrMN8GAHcGpJv89KakwtFKyQjvG5SH1gccw1VUem2Dho",
  "key41": "2Q51hdrEaX1aAjLUpzhVtgfbksgH5QsUXtawuQ4Za5FemkVSkEKoHzR4iFybfygeYyv2WDAZ6kHDoYHcizoYtoDF"
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
