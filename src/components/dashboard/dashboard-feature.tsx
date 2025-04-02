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
    "4Gx7VBqNrF2JK1jS9PpERkadbWanD7Ymh85Exbpp5Nu2C56tQNc3rcq9Ujem2A1dEAdKLkxAnS5jUZS6RnoU6NhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nno8x4LYrp6NHAP7fUbb4fhLPwHttiSNFkZUEBvh4rs1xiBJy288G64WLURxT9rs4qCcxUC1HrappgXmJSFFJe",
  "key1": "WpxGcYBWw9nUSuzobBGjvwGSrhozf9NQYNbPzTN23kULLsyd8bPEHhnSRErAU64Z2NceXBEW5UVEmSRzBeH4YDA",
  "key2": "4zVvyuehK46HEfrtLqpRG4GryaFWSsQ7AwoFSyxbuaSTCd4gXkk6VMGGy5NWhpqe2kKrUhiD7r7Uwv9434CHBdT7",
  "key3": "JsLTVmq4aE5Vh1T8NhK5EtVEfFKKFh5QoBPR6js15q4bVRRKoWNgiWdxNmXg5tVjK8nx9b4ieu28atSJpndLdWS",
  "key4": "59u3eHm7KUnkm1BtS3JBzE3Zy4nJqgD2vG6Y3fhMd4mtJnSSKqSR4iN7917o5BcstZT7Z2cKYfHvcpGa9Tb87Zeo",
  "key5": "2WwytBU5qyxCvUsYsWg2Uxthtv5NKYaXBEFYxLdXkax1KwR3CErgRt2aB6ViRADa1pnqSBLYwiBCro5T7a67zTZa",
  "key6": "Kcre3uyCbrP7EZEmfQvVsPeCXxndQMpYte3pEgruggziDXZmMAetY3KmQnWd4n5LGLGw3Gz3VBtg4MsKAbgtkGC",
  "key7": "b2yNMFCv7hSW1XStZ3JLEAQgPRQYk75NPiqmYtbNQ5MmtsvTdiE8kDoC727Ryuf5GmgzhuSZmdzWKNSFrN6dTKo",
  "key8": "3wHw4H9DUd1Ev9s3TeU657G43VKc9HBEVoX8nuSf547fJEqpjoq2HPMzhYhtdYaEwU396EWYWgwtvp1Ry8uHLu8Y",
  "key9": "3ZuUNRxEz3repCjrtGgT7AAo2uHfK2QkVJdLrkU7KwvXFjGMxEreCiFAFA4dL9CvWHfZQh9apeGEHjJyHnPYEuxm",
  "key10": "WLH3zzevkAEVSR4H2MsDDEz96aEZUXuLpYQvwogwk71tCmPQZxk9WDEB3cARtjHmkaoeXb8wGDJKBmJ1mR1Waoa",
  "key11": "FucmHyTHyRyBFxy8WcE4urNzXkcssmudgGzs4vwW82GDp2mSfkVbcn8pUJitKWApiqaZozR9tj3a3VgtmLnFC9N",
  "key12": "4PLgc1jt6jgiToVS9bNmRWSjHA4pmF7UdR8moeaHT9qeZtr1kJnBtdVpuPaChrFNiVrdWqs1LURyuYv2CQdLWeH6",
  "key13": "5y88T1T6Ztd5QCVNsaaUqZ59ENi6dPLdjMAbWX3q4GQoz7xxQGfZYdrdTczeHdtM6kFFX1QQRGtCzqFYpWC2ChzY",
  "key14": "39hkaLozUvyZDYPRwhhFM1zmcCWAaKRwnqfgwnRBVBC7bg8K9tf1L1RNQWX5gmtMSWFezt4MY11WH7ou27YPzp4L",
  "key15": "4B2VjwW9CB83mPoKvdjAMvZzCdehFARJhd3GmRuYTKAFLR9JKF5JngDyg82xkw9TM8mpfuTgyie4QjYpQ5pEyRBN",
  "key16": "2Hm1oMGHgkb4d3hBJ3JPjzBXxjxqcJEy9R7rsvj9UdUoA6vXDnMiABp5R1Q6DNHawaHDBistZPKdJxSctBQwFh4X",
  "key17": "9igGrvP9JpsD1K7ZkE5Hyr4YQqVzpnDauCiAGsGuyrBy4pXcxffRv4rZPvjNjH4XpEGfQFUPrMYbButfSmGNETV",
  "key18": "YxqioBsN4brwk1kgZBYx6RorYGVxeAgto2YzW3xpfbfKCwT3nwL5dFA8nBooA37Ge3aZd7Brf3o3Vk23GaxNi6C",
  "key19": "WZUMyfyuLUg18nqZ8Tc6UxejNd2dXVzbbz1GDeQaiR54Uhy4byTUJHigYpoCJjrQm2CoGcKDAWwAvxdGtkLkA5o",
  "key20": "5Rt9WQc3as8xxQG57frUvjfufvcpsHM6XXw7F2jrQYo7guW2UW5cEHosyxaytpQU1rdgb8F8mbPaxvoJckzxqmKz",
  "key21": "5tYiLz575XmBgSTk3EbooL2S6QdCX2FoAhUs33Wuyrkfp2MtUkkouR2bpV4uaGWufKjzpHbkkRjC78tphjCdPLFr",
  "key22": "n14S56sk4fFKe2PfvkEYWqy4u8V8a4DtDkzFyafEpdb5CcjGckFndWzuAtH61ubsQTPHdeKkwN4nxHHyzuVUaGd",
  "key23": "6QopaCW2s87SKrEpHiWCMwEhciakaRbSzmLGQnSmLr7g9N5HCWvBrSZutzM4xGoEpe6mJS7LxvEnmznTesWRfgz",
  "key24": "46d2YSY3966wz7RJcKbbU8SBRzKNXEFQrauzYLNrF9dUTi7f6GSUJ7BudtLvHae1vW7rLCmAJqdKcmz2FCqeXbzM",
  "key25": "2jQqqA8ozQKkKoCGbYXzLdD9qm36C9vcHnfnsfZFxxKjqqEJDbRJaaucav27MmTSEET2VuBhWCHsTBnvXQ2w2pbR",
  "key26": "2rL6cwYURBuWkM9wa4ofRqDHA3hbpuuE4hcJJge1V6byKaWXWgRm2exQxJHdj4ebS1mewVxsQnxTZoGf2XPh5uko",
  "key27": "5Xafkn2QgNdHu6quWndbTZckXzjtsAe2pkzWWtpUdyoVD9krFYckjTjTAmjBake65fzfG2uqwoU6M9jMtS9QgKsk",
  "key28": "3o3T2bTD99HjSNsGdZSSWNvM9kqQRejvJPe1jWHES3UrhuBHFRzY6a8uGufuMC9fjoFkbU5J3cszrbEGM5Rkzhxk",
  "key29": "2dt5ZrPjriHHd7kYefjM8tCWoTn3KxGX5FFqtczKSoVano3ghdYNAqq6M6KZb9z6ZswGxdsWuxPuo2xU3hg2r8bv",
  "key30": "wBc1nEzvofNmCbGz1YzL6Ah89LjokrLA7DqR9NhTF9K2Ss2SqNyc9nYWpxtDDaWtJCngMFov3bqYqfhujWyxVas",
  "key31": "2eYhYP63aPQVhFaeZCqL624TGHCh6QFPCvy3H3y2w89NHrq288dcUncUjkfRJ4p49n4sQhshcNrLgCmHYFTXTYtS",
  "key32": "378xHm7Xuv3mVqCaPCpoM6FQwgJYvTtg4QdoaiVobZJJuKV9ouYA8qBVPPmkGNWQeVWctkJvGHe9U92pymPKsT82",
  "key33": "315Ld1x6LsyVHqhDLrGKpsPFaXhsP3urG2tdDMbXrXEmZPAfaggCoz4Gi7g9DCciPPkyrPth2mc954UdhUYPBXwv",
  "key34": "3fiTGhNd3dBQyzXDruynKLUrSu2pgiKwhSm47dykvZBo73Ppu9VvHUM1Zpn7ncKSsAsQqjmpTiTQ6BXPkV6gfTd3",
  "key35": "2YVt28futf6WqjF1p5f1izxeLJxZmz3vsVtwLxZog8SNXP4Nc5J7yEYJBhjCfo26girYLuPaZGrB4WaLPn8f5Bfi",
  "key36": "8DhzaGPPQfFkhvJ5cxtiybPN2nDLN6ZmpBSBg3VjjnngapMxvLHwWDzzExgKb4bKCQPq5Pt1w3SRHd4dum91VxY",
  "key37": "kVskBr2SWPnwnxWVVwoEng5FwmqRbLGZE72q5EZbvhSznAmVT3UhaJRHkPR8v4zFnK7Cngf6evrL2SyjMZYxFSv",
  "key38": "2bfYk8j5Wh85rb3a74baiecQyNSnfrHM4gHxc1UEPVZH1X2BrvqcxxH5jguzQk1oqNgnrJJfvrmBHjawoKCFekWS",
  "key39": "3ApQ3BvLS8DFsxEfMmw6mB23Ropzcxs6hiXDyyybfKFHcPXMtd7p7skQxwyV91WxbmFa3WTGdwmkPru9g3wmQ75Q",
  "key40": "4p2Y4k1Li4axK46K3Su3oBpYK9SReSZfRNgGpY7KqHQQJ2gZcHPwkwuPa54nMGPV44sKQpwWQuYV4UND9ejxK8ik"
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
