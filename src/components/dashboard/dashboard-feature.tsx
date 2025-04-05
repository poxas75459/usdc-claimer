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
    "TuLgM15zRecQdZnufaUEd8rKHagWfEkdKu24L5P2o9MvzePB6jY2ERSKDiUKy5s3vVz5Q8XFDVsbFnSJdzKhvJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSUJvmon5UQ89Xo2Z1BPuxmCiLTyVMi5pWVMUyBfErwHg2rfyuuVBmun99caStJmgrboDzwfgBsxTDJ38mwkRJF",
  "key1": "4tGE88zdrzx5JaAymSB1QcYZwRrBh6pkyysNJTGWtYFtNRb5WiFyq1NJZkibtCRbfjgcnCfaKxYfL6nWAAtKoWwT",
  "key2": "25ijQMYYYAMbBvW8fWdqWZGmeeSjPvLWnsPAKkpA5wTJd3EQi4PfESMWuuKi8nWLEBsCuK1GriGWugVTeEi91KVz",
  "key3": "2DKG3i9B374BpVVayxxYJaWY5zFJdhotKRw6TT3RnQfQnWtHkea83BWBGvcuPWgPd8mDEwTuSRZoncnFtC1hokBH",
  "key4": "3PYbAtpqTqN6TTcz4FvgUVSFLLA4toB6bibYncW7NFCKX5cRcVrRCtLeyCpQJ5Ai3WfpbuFxee3XfRoMMKAfvzmS",
  "key5": "JMXY1n1jFEKmcECiJHPLdbWbqvFk71AZRh6gDBiJWNoBG8g9Co5Kkh5LuLEPq7kJTvmRJRxJGZdS94nAzvpvvhq",
  "key6": "SE8rvGSb8NdezLESJ99jakxuQhG5CBFWoBQ236EBomMmyocLLPRQ3Eg5zugNuVLdZhUPiq6stHJutxwVBuvTVYH",
  "key7": "3cotc67uSdYGjZPrrmFWevhoxa7Ph8Nv8XTifiEcoxWarearJE5gGdPiWbfRyTTENGVpUkDwjJWL8jrFPpNt1pXR",
  "key8": "4poPSqqe2kJLiSTWg2XECCZCb7Jvnvkt1waMEWXJrm3KYv3y4FGQvA8sTt6zAecyYUuGmwj9cjJ9n3hATFtGMZnr",
  "key9": "3eDS9VhyYc5sfy7r4R9iKH2aASrsKDtETm4ntMwWz8NMK7ZPx6pQgoUxnevYyUxR9bSZv4imQjDE1dRk3k2pcaLf",
  "key10": "2YSj5cG1i3M4QTSzDS97zugj8PVCEVyPqAytUUwsJQMrTro4AMsonivLTMRLVnATwru1PiMxsbzWmfqwLPLsieH3",
  "key11": "FpPkKamcLLR15LDdxqyncxUHkxKVG6tRAQ6Zbk5RPS6nx57n6uVjsNDi5m8kigrCoKKD74wEVfnLdnV768tnRYX",
  "key12": "5dpaz8A5MBUgBWDqYVpugyyoUkYNByCKp37KeCtdPjDGg8rHF5QuSK5QMYsC9vv3mt9nm59f9vWK8okHi8rR2pi2",
  "key13": "253YmBtto3iKX7zDk8KhNztw1tzyZCTJYsqr4uJ59EC9hJRscSkgCfgNvyH5ddoxRSBQgLBZsz74nG6gYjkAVXJp",
  "key14": "t3hMehgaFveug2w8YWyteGXzgRuuZuAeoMBxokR78n7udMetU3Zxc3zLu6xHnBWLjwacN4dHVXL4Lz5ZTcVfFoG",
  "key15": "5FUEz6K77WKqZCb9amxXWcZ5cHWjBctSVJr3DQXz3Hk5KAfft8Qe56RuAoUfFpua7Dc7KpRUoTTNgUWKCTMz7SBN",
  "key16": "2g9vR2JK76cgduFA1yiCd2VfUF3vfZHjPn68gFuAJdfNEtzojVK2HujC38XFYVSaTvkzr6TqzzuAAg6JnTcTxvZw",
  "key17": "4FdkS6UUTvDogqPqwqJSWuZeoWQp3wgAZJvQzvH38KcJkWhwxwrVip9axoG2pesmY2LuCbuBv4cpCbhoYawMDV57",
  "key18": "3KR3oUfz2Uw4wksWkNijgmmPj5pHdd4LgrhncnAV8FTNskdpSFsekymGWXbpqT7UkZGyWXX1bFKWKHCvhWJpgyXi",
  "key19": "3NK8QzKepM2YBD1uJ9aq8Goy6Z5kTdfsdubds7kj7qm3c8aYgbFREJV8yMg3WXEAgmQuoCzsY39ebzRnDt9XTJVd",
  "key20": "29pQzMkhnwNQFj8doANN4YfkkPFFe5yDSwprmAz4H46m1jdg8aGwvpTQg9xCmwKdEQYdHvb13pEb9yjRYNYxntxw",
  "key21": "2hMcWqXkFKLPqK7tp5o9T3Tnu5EWs7hkAB97v1WadK3fDHiNTibqFRfnr2Bzi6HCemaTDGkM8GhgaTejex39mPtp",
  "key22": "5pM2RaQHhEAoemAdJpuUdGixgtxMZa5pBcjfrBoPn7CL8YFqnWa9jLd5odJX1jCFFoM3TKLSrsDJ8ajKYdhSYL5h",
  "key23": "3boSEAkXRrU4Y2NdX86VNsRQuEmxS75ewEq4bsAhuW3BzVPm5ZBGqdw4Hy27LdqSLhUBGRXyh195XwXhkKreogbi",
  "key24": "JHMPpkr3DCtZoDmPqBw7TrdHiMQFoEEyRVUaMpPjehQ2WDk5uZycgRfDvhBUjho8DXCRqUaP9DXRYfh6YF4Yo2A",
  "key25": "35UXX5Qg8JcG1R31WiWrQfFuQKq4pQd2UnrkpnnEKWisL1uA1NanYEkiYPqUrw6YNWZouDra6hd1tjfpnxNxy64L",
  "key26": "QXpKQueTD6Aon3XwcBA5EnmGfkdw1rKcxTBiGzRuTGh1CsEG511fqmQBiFQZd1A4s2Q86Y1cGfAxGDsSNS7at6b",
  "key27": "PtJbrfcvVdyuZ9tnXZos91JAFkSvfobaCzo6Pw7o4sZfE5A7EJESy73v92eecb6hUJ978McACkUqePQ9Tu2ivBk",
  "key28": "5vm5NftLkwV6Q9FAHCLt6BtoxQ1HrrVD7UEN5NYXiao8H2WNnWzrJrSUed61NgaXAvcrMjbhiy7F77jiSmUoTCXr",
  "key29": "ZdirRpVUGuH6TVgBiAm3Fi38hF6aRKXMQi9mcoNf4n1tnAq4GEYamNrJSyJ5SFu5RzwN4jfu9EUmi33aZATMyNu",
  "key30": "Co1fBGPr5bkbadBZ2V9uFQ9XqL61UkVNsExJdVzNX1rJNGUwng4SjJarPtPW1ugPnH2cKF9e57hoThCbtuzjo7h",
  "key31": "4n8vRvYzSawZsaJfm9ZqEQLYBQvXXjCWKPQYoogdmwrBRuQgWJn5ubSjYdN7q5qWvPz92mx5JNrKR2WZ94vH65Sv",
  "key32": "3M1n9Ho9cm1kxEkX4qxz9ySb5AUKsWD3TJ59MYYykfF88hyai3Wb5xWb72JSAJ7ew7UPupz1R8qRm9JjcuYAU8fX",
  "key33": "2P9LJ4rMFnzWfrvdzUpAPgSDFDMVNzgSxvGR1SYKyBdxAboE7PeP4xwtdzYjuHeVEmDsUYZpwUrKLM3fgWSdRwce",
  "key34": "eevLNeTyZBG14VKPFa6nbdpTpm49BPo2mo8rne9bDYtU259wdzQVfGtWDnbXCUB1g2aaVadFSHokZtC3W13pnyU",
  "key35": "627X5rt7WWe1ygM5HAuLLUkwAQdKkz1YRHzgJqRSuBve9AUPzzHTCcfKUQzzdHm7kHi2zqznV2rDPuqY46VYs9qf",
  "key36": "29GDorNP2u3nRjHJh6V9yC5eZHR7ZncXD4vsn4BYVCQvJZFghaXdTmArDf2q5GAQduMFvcjxq1JEtygKkx4xprLq",
  "key37": "pjTSWr2art72Ju3kzTBwvhaxrPuTwu4WQVkdiAo8RYDcfTFEdNLCSeN5sauwtiRbveTw1spkwgCtMhqXwLbEwsS",
  "key38": "3HRP57gSnWUQNRQVxm7QPXFaJiU4K9Bam74G5ZxcNJHVgLCnx3NCHYR8GsiXaJWqbcp929171qXV6j8x7d12mxMg",
  "key39": "5bRW3pzrgZDiADRoL8BUHEgFhUUaWKdvnjLwVd5zKwZHeh2wUNJ6YHKxufAFg7h7J7wjXDN3qExf2e8PuakiqMR6",
  "key40": "31KTzW8ucrfEpMHTM51T2t4b7h1vuNaC7DrHhStGNSpEfBaMEobji7WbQ6aHF9Dut36nQxJmKGdcyAf9ozKvFTnp",
  "key41": "5NvHMacKvtN6pjgvyCSc3rxuhFAkydmrs7cMj7ugm5jofdg2y1wYgUnQac5ybPHWzF6neC9hZU2rAPpPnfrUdqAf",
  "key42": "58b4tqKofQPgxGQihetxXniM6iQP9X496yaYgAP19fKNd81KBNaoMf2orcg2Cu6cxQGE1HBrhzNR8Df2Czd6jPyF",
  "key43": "SpbXXgiPx4busumoWphmrxxKAEDYZT49SvoqdeT5JuP18x2eZ87pRCDe2ZNiuFN3uxhuwX6zDea6gFhkbnBdwK3",
  "key44": "d6iDqv1AemYFtH2cL17pTtNcdXeYGgYDPMRgP9djWrVQvZejeysc1YBmWhyr4Xa2X2QbdQrSCsNspkAVKLcimxg",
  "key45": "5UYjti4ZTAwsCSedBs5TuHKdvNmEHJruSKye93QbpPj8MRhSQQ6FJxXFr9uQg8ZzfPt7zphQTLirguwbHxyLPRkb",
  "key46": "vWoB1yEohQwyzSnMmZmb1Te6A72oUxPPVvpXRzbExdg6FDoamW7WU1mMRu7t17p6xoguPVZfiZgkYajhJv3p9xt"
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
