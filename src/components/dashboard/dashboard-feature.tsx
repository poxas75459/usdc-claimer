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
    "5iNLRsYLA6rAHhJrQSCit3tBoLJC3CkN8W7Fry4ESTG5bYbzcjRTXPBUfmEY1ZN7VWkNEevyNmmw9af6Bo7vuZNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVXUBL1rkKEHt2s2uqwf1ARSzaWA1W6NVZiGBWDgWpuQFH1LQFxyicxDc5M55B4rJbncxEcJkWJDwodBswdhdt1",
  "key1": "3Sbk8PKYifwFQ6cNtrHSVZoFg5cpmQBhhUVZMHK6rMdQbZ5rWHWuEafdG5hFCCNvy4rV1fhE8qYj8Sr55iLbmHGz",
  "key2": "2t7ahTLsNP9SRiZjQyqosbu8kWvfTMi1XaqPaPCFUF5G6LePbRQT1Y5LvdeFnFFSXBqnnwZ1554RSTMBLRDRjkrp",
  "key3": "5SKtcBez3P9x4NMQ8attXLNxQBMmz2EL17Cf5gcM5TccRWSBSsM6UrT9cajQzQyjm79fZRhaRhghjKaY9ZjqhAab",
  "key4": "tTqbgUkYAmnMgyjuBuB68ifDv9jxDXaUrpaVYer2A9Qr1aUHadeQurRMCFn6R1859tPTV8AovjF9qxhUPKSkPdT",
  "key5": "2cx5sZJkQbVzTUasdnWA771Z3TKQsr3txWv8SLjs7vTgseKpM4rJ3xHeUQQtEDarfrZrd7TN8P1jR7kYgX6RGwhG",
  "key6": "2xpq6L3jvTKfXWNsHYiYkzKAukauqjvtemYuskPPWcxvc6zkQpegR3SdopFMdS5qEDyV9U6ivpvUeSeJ9mYsD64s",
  "key7": "4kPxWo2Qaw7cemtfbUUi9BLBGtv9qs37xdErxptE1E6pjQ1hREoCF9SYc7KDLVB8cPzXqqVMKLfmduyRje3tYMwB",
  "key8": "5KFdUkk2UbYETbhywkFxctiPMr2hVC4xWtLHZpohiRFzMZG3mNazS47kLmFWZL8e1hwfc7qqJt6cPK9dqUn7KvLp",
  "key9": "5xTJNBKXB4Q8HQJJWpRr6B8DMdVP9C1i719bfbovyfAgvHpp9HxGenuJeAyzQXXDHJ6tn8AaaNB6Sjxkzey7wq9j",
  "key10": "5mbUt3AykUjVjNgT6EFz6qjqd8X72XWqnYx7piqTYidP1hb7eqKNcNyqsgYDkkbyaUx3UNqA4pnY21qPXsea6Yc5",
  "key11": "3QVDWFRUodJb2NyShHEearSDUyHjvAJdf6jGoW3mRQDaN78UwfeUPYZMMDiUkfNKPDoEVeJ82BkJKgg1rbjnuYaG",
  "key12": "UgqZkGBdDy82ydX1zPLKNFKnABzFrNMVitLC21knA1NNZYtKPSkMQuzSTHuV4HFKthEi19Ttt37Lu4KpUjwQLXJ",
  "key13": "3WUumuiT27skD5Ph1SYdyf5YFQENxdagGz6rYWVDV8cTg4JaDpLbCQoEiacd2VCBTZGVVxXocL4mBoiW8yTjJGky",
  "key14": "41DHiEdkx2sstnRPWVi6AnEwgad3tFQ7KsXmHskhQsENTDTJbXgZb71VrpbGtLe28FBq2R3JpdRj53DJfgeBSkf6",
  "key15": "4jdyguq5wTnYMVdSQSmQ1zFEFLNu56sqA8iwfxnSUgPG9FQ3UEdb7xPYyGfhJ6JpKagnS36w4HQHyB9NoCzaf1zs",
  "key16": "4c4UHeyLo3euET1vhRPZkFPzi5CcBX3RuPzHTSHLsYQrnC2d7pXvs9XhArvr9q4NGBCxyAyhLSvXtuzQXe3Guxkw",
  "key17": "3R8mMo2UFj2QE4cpx7PbCjngYwzN3CfsoGCqTGAFBDMft4CjdM7ijmpgX2Xh7dCuSBPgR4JQf6Yountu4TNHysyb",
  "key18": "31w84i5iQ5brEy7jgfcw4QyaF7X9Crvmgs9ESogmfv3qzJThP8kS4cEbwBeSUuXDSLwD4uUyHtf8T5zoFUZvAz3W",
  "key19": "vAP2dEakCQcNLWqeGgbc1jJKpyYJaKNkRrPQfEwL7UCbGNSu9JAxK6eZUPM7NvzJMrV3VcT1Pdg72nCxE26an9z",
  "key20": "5EpVZEtjBjUYLsCbVVme6uShGY4goscJqjPf5ef3KDGmiyKidpfipW75zRVNVdDx8u1MjfUtND9bptrAyb93nkmy",
  "key21": "4V8EJTWEDyQwiaegFmVgFFXJfAm2nDxK4ncm75TFJtuP46bdyzr28gL7NWz1hmoUWygpCoz397tDkvY5YLVuinSv",
  "key22": "52dU6NSJEUJZXqxv47N5fWiJeJJcjGZF1yPKXQsjNXBdhQUBXHeC8rcSfEA38JDi7QqbQh2GAGThhym8YfMvLDQB",
  "key23": "vvV6wV9kojWzihu1jejE77heaTUKbvZdveNyhPyf55BcVmXrGeEKLH88bTrdzbasPof2V58JGBkP6mkMsSnjRC2",
  "key24": "2tuJQDFBBGxoozUGUHtoayerGEXLc9DgNRTZ4ipmjDQHSAC38LCzTMY9dAtiRN21BT3baezpVnmjKBuSjFuGTvDw",
  "key25": "p4SoZUm5AgwYw1QfbHvp6TCKLmaU5511rbVKCXgFDUheRYyBJ6gZmvVHf5r6ZPgoQdDx52SWRKtNbty1zYosAJn",
  "key26": "25jj4LEBveC2xuTAWJa7u3cBTn5gHreGtBxJx42M3y5HBeMf48RcTG23goN6rCaSfsTBtfcZUa1sebMNSScAGF4R",
  "key27": "3ZfNPg96QsraBfeSZEb85cRRUY4wFaQebXTpERr48U3kvWHozqBNMf8UdZikWune9PpL6hWS8FgKWe5AGtFrWeKq",
  "key28": "4pN3C6yoJFEvNjGUoXRoR2Zyqc6DYtZVNrvQ5ztRrsrJLGdwXntBNG99mfjCRKpjxYSFPwkKAji7YpovKXvQ5arz",
  "key29": "32vNTBBup2xo4S6QhvNGvf8onHM2UotWwuerY2TFNqoFipni7YM29xD2EF5BG1ERThx16Es6azrQssKYpD7Nacof",
  "key30": "574yw9wWzYoiVMBq9GKykseoyTb4cqYi1HQoqxWGneHn9mxm4LnHYr5Guo63qEdXERR5bLhpFDbsX5eZpqUxjvDy",
  "key31": "3hg8PxEnmNK9oPXpCW3x4s6bZQidSDRsBERfLgkTcGR3wnRvQA7rDp52UkNsgqV65vzN7d6EFeRc7Fyco9g12owW",
  "key32": "bqj8BRLyxquk6etJBnzhnaF2csJXkAmyr2o3LcfTnmUhmrtMytCAtVe5iykroNvFwpFwB29QNApWwjr86xGQXms",
  "key33": "4P438q1DJkTCu4bnCTGZNFpArb3z5V7CjiyATn3xN2Zp2LovtGaQ6Uqijo2RCjjAqMnvvRCHLJ3brtift5i4MdkU",
  "key34": "2nb7UNFJPB6aAy2LtTihZnbnE4jiUURJgzubyWkoPjk1SiWrsJBBCBfXieDYGvKK6gh8uUwVFJxXGwgbrgteHHcF",
  "key35": "4Vrcvq5Mqs9tiz22DMvGKKhrdTTBHLaGRdySCQc73vcjAZjzKeNeFPF58hSPM6zLF3aEtE5RtdgRrNqKF9rtia5b",
  "key36": "25AWzVC68uoQ9phw7aARf28S6raPENMifu5Po2EkAqQT2QDvYBiP29quq85M7Wc9VajUEzrtQWBBphqixV2raP4P",
  "key37": "4PurMUfTftrxASN21PZ6iayuuCL366PgExaxhQuseVCLXsPKUpMenM2En3Ma2aup5h7HgNT1FXcZvknQuJTbMDL4",
  "key38": "3cFvDE8vuv6vFPuek96JZ4c4QMFSv6EZVk3i6Zjo7QcPYZkK3oE8Wz7VKiGmsMt2Ha5huzYZHKsEH1JesUaBUB4h",
  "key39": "52ruZ1onZ4f5RN89jCuZA9FQj2wpTspEid1JxF8hycpeDUoqTuT4yWZHVn1AbkfLTnQr8ZDb7jCnTuMfe9iMVAxb",
  "key40": "3LBEn7pKipFdFWWMw6E7kSrrEvR9GGAVVBgd74L8eLiAh8T2GgYWshCgfVnDDhZvauU35i1mvJqfP23qgb5HURmu"
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
