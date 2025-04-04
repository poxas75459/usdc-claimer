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
    "3owqN26o17uSQCX6zdCRPmaCKB4JtBmAEUL7jYYTWpEqJxTQZZh1uHphzABxtZ3o24pKdjkWt8zs6kW16YHnxGw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNiKvVH7KmUR7tw6vJF5PbwQ2DtquBQjNFSZjRSjnQCsGJe6QJ66p9sMX4hkqwBZ7JeEcZTS9pSawwr5fyxtoQv",
  "key1": "nzmDuZ9xeRe8dhUHabQUG1h48pCJqfxQVjX6kdjnYR3VLnzzqE8oH9AvXxA1KeJoo7DwvBmNSUumELTjMqQkG9a",
  "key2": "67dZ7hHgzPAQAKGiuANjLRr7hohtRLAsTUNQvjcWN1Hh54bJWymkCXCeY1TnktbyMxaXBdJMZ6R8oEnzHEy6ygG5",
  "key3": "VmnywCb6tZ6NBtkzxGMnFDbgVKvBDpU5e6jFKkXY7PS7cajvbTuFi8wbbNwfRr37xcsHDe7TdbyQDGGbYWyMAbS",
  "key4": "PFtFRVvQRm7HF8Em1qwJ9oJwxfxwdarY9bgCVKdJwxRRV1PKofygtVBkBnFALyfTFzNn3Pmgk9Evo2o4PCUYqrN",
  "key5": "2aKbmzs4asXS49pf3TsJd29C5VuRFRLwjfVdnQxAGS1CaDJqsyX7m3RzJWsiYYy3X5mvRYKQwqRX3GRatxEG4S2R",
  "key6": "4ywmAKzxAYQQb7rN3rgQ6j9bkhMRsWUjBzDMi9hJmCE76K7vKizwHCTpkQdaANyZkAw146zMzhyXWb53vtXDZzdq",
  "key7": "2wDqHXUQRpePrdNFyFsYc2WB5nb3xvLJp9Y266fWQpczu9ZJNLUSbCuAJ2pDxQN6pdG2ezPD14QArZbXxnwt43Vq",
  "key8": "9Swhpov15QsawE6usY6zktEovJh59Gmo7b7CyMEBvGwn7TYaipdsQfzmGkewJK35MthUQoDhHx3WS5GcMpXFh3e",
  "key9": "5kqDi3NUumvMg7dvfuKP5Gp7w9UYoWUYTnHbccVbSUmY49RNwiHfiU7cM78Gs6PFVaucFjRbhEvo75b4rjWyLAvY",
  "key10": "4NwfuD2gjsK6Wrrz3U4VqY7PXAjR14hjQWYQHkm8TKoVHKM1bRxf3DMQpJNQhvdy4orxTf9dUedk5Lp4fDZjuSsx",
  "key11": "2CkDQKRoUkCUULnUqV24xdJpWqYZt6QshzdEVjCKodE1RKJypRwiERrPk6jjbsuw324mbPmbwpLkoxSopyS9RKff",
  "key12": "2KLv7wj83hJg8wbfSPCvnMYzwHfWKqsC55U52jFLiKTeqahq94YEQJ13aiv7hjmZBztbpYWSE295nqj2B4ewQQdf",
  "key13": "4gSh3X92QDUC5HJDKtvmC4Lrce8MvrtDj3Cxho4hnEeBk9Kan1qURdeTBugAvYZjY9VJpaUj6QFraNopzhtnJiPf",
  "key14": "5Bn71nU1tq6KDdS3FdsuGeQ9qwYsCswgGzHmNejQc6Lx4JkrE5yqzDjfjoG3m7ZFh15JNocNaYYnLSDKzHnuknaz",
  "key15": "KhuiXGYJHc5HuPyFTMGvG9ex5tJhKFP2tBrbwpPChQTpeQEziVpN4w8B6heBc3ZV1CRaUDa4skL83uf2vhK66mC",
  "key16": "jDFYL9yzHTVPpvFZhNoaGQ96HHMzsQbdVyhitxh5RMZb4tEAGaFMkkTSoX7qitScT6f7b4kL6x7UsAa3wusTcBQ",
  "key17": "2QbcSxiFAAKiUXoYD5HXAHD9MLm51TLxeGkFrEevYUAtzGQvzj82RPYsnyoQuYtubDwqNdAU7WEaBdW2vYaQBp3g",
  "key18": "5xqq6DKfN6jHJofVypQgBzBcXE47CCqByaHGmfBWiShgS2Yv47n9z9ZYQCwpHccMn2M9UbiwnqKVwWS2n6tdvjcp",
  "key19": "65fzvMKeKSrusNeBADEZg9Qf27LzTGXvgMWPJJoG2fmrqWVbojjdSwn5DaQFzV2HJ23V5vinjraHAPXMJCSRbTkT",
  "key20": "5GdC9AnGTZQbWb2t8BMR1FApEqfFpAhpv6CqMxLhFcZfDpneLZ7r8nqrhYoypiPurDjB5ei7cp8BzRtti4NVM53g",
  "key21": "fDCVEkb2LnnwsMvGzw7S9vwNgWfw3bvmZujm1z7gfadok2rauhHccrusCyvhFccjyE4i7fGxEbYjeUv2wYwyCgk",
  "key22": "5g6NfXD44YfpM7v6QWFciHHaf5UD478UPWU2pV6tK7SBEBQi83mT3u6fjhJfGF5ihk8hkzpZuBAARJxbewhqnWba",
  "key23": "GCmQphX4QbYvqingmVCu7rjfGfTMJ19RHsmoMMudrEXi4MQUprMzpC4NqEv1CoAJ5aJYrrAymKoa9dWa5vKsAb3",
  "key24": "2opxcQ6HCM98xVp5LKPizPtZbRoejb5q94ygpKX8AmaJRBskDbN2kHQpZsp18f9b2ruvK1dewqm1vCZNCakkBhFd",
  "key25": "3WhDPYytjKssCmTwwTjLBJQq6TjSNimjNsxXh9f55PbawnMN1E2Z5TNRFBtj7joHRsPTi7DYtmsAcPpjgtrHwkjW",
  "key26": "5WrCtoHja7UorwVqh77qXU4bgGx6D59TRBnbEkRAWwKrCE14QnEdHHX3N2kebVUEPiEBvGCuEaMqUDaTRKr3vDB2",
  "key27": "5D4683KZvQbpHmKE4TvFXRSM96NP7QdZYGhcvnvxL4ziDBhSCe62UDCn3CFMBP3JwHBtgdGa9CAJgqnKsUHQQt5f",
  "key28": "5Z1gR3Rn3edJYJxhGCcoFxzmdgdJWYojnyCK95Unbbhu6torz88efPtn2maGxYiua1RhCcUsxve9dseBghVZHw8",
  "key29": "35mFjvd9Ypp8eCimsvBgsBndhQN9bE61aKJJ9jMumQefWavbG7JBKxqgVmzc3VKPpnV73465MQ7JrJNEe8cX8hL1",
  "key30": "4DosPuLtGeqzFqU4oWMXHdWkjKaZNPuGknqGmLGgb897JfF5765EvawWwRYrWWivrXwjVtTksspPmMEfc8XFHTDi",
  "key31": "5aWtpSaHPQCxuvCuw3x4ug1PcF9va229mMBK6DcAEdbr9vPCSxVyBtFr9T3Wa19KBtdT199hHDdj65BNaLeb9LAf",
  "key32": "3fmG9L8Xr1PCKbXka9oJBys1AWqJhdshgxfWeGxDob1xCq1osnsq8KjEXbZi467gHtK4o5MthJTQvQQYxYjZCXza",
  "key33": "3MMQTAnA14cWzf3c4c233juL7HwHcaL8rXAwX3HJbFVHho6fCVDJExtz5FJQeX9Hgv7x1ySKPBXPF3msUhdgEFUm",
  "key34": "28vXgCNSezwLUpe1EdnhuNS2FUsaVNL3hetzoKMBA3ZDgNqxcxZaeidJU9seZvRuTkj67W3jovFzKwXK6J22167m",
  "key35": "3auWyRnXDJxtLoZjmss12HEg6LrMppJWqeLgjjhTiWUTGXXi2xV8JVc9DUCDa9oSpgdN7hGpVQAq344STN6wGJkW",
  "key36": "5fa1yPnSEYFQkwyXk7PMetVr3ZKZ68PCLc3UCPY87eW5ZYL9c7rxuh1B9nYyRtr5YZLRH7h91UaVhhtJFEvFj52b",
  "key37": "4wit6Nw2xFfEQ4rz2zSwZVsVVXreHmQmJ9xX8maNYsFteatVoMxLwGWTFXhRFUW14qKij2jZZFAPpSnN49fMf78o",
  "key38": "9rSp3YzKT1nCWiqjNpURSV9n8DU9oTkzQSY9RnWaVgdpRXXNCNaYZXeZJwFAu7ui1g1NzGyoZfT5yb1B1oFu2P9"
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
