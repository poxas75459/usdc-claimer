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
    "2PW58u9JykuBBgMXSE2L7vMzBWPyEUQbP13FCdgdfaGg7qEcXuL2iYZDztVPNANrqmBAm4MNUAUUsuVr3Kp1NhDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDoGGkVBdwt7irk1yk5dQowQEhhKYZMb38GyxNdfSS3Z4bGRY1AA8MGGCGKMMQxUGnDz9AA3J7jgzyBmtRJdsrG",
  "key1": "4kGLNqTSJaHoq24GYLjLzoS7u9WLnnXZuNRJCfGSjNyXfiZ4W4v1bN4crhvWotuSHWTHAbQv2RLaDwijyxgV1eXd",
  "key2": "3rb6cJCx7cmkrCHAVCXeX1i6QntvWmGu8UgLSCY2qcxS84TEFfwhbw76u4NUNn8n7y1QdZqkzwVZjCWF1QfsqeUY",
  "key3": "5nuvQ5sfD2EzW1BRtusGtLY2a8dHQD5X23rcwgo9ndAEPJtWPXf5pFbsxJzXgFSDwNNCY3bpzd3K1KLAjpbacsmA",
  "key4": "3KePBwXTehc8BmJdpavEmzRPuDwSkijN9rsdS9bf2pMwzmumNkFxRprQA3ghm4r85FQztG9b4aMwhSkt8An2w3xu",
  "key5": "2JJF7pVk9HeX9QGEcdMVnwsEjwvjhuZqnW1FCebzNxensoJpQq7vK7AbaByvPHFmNX5gWo9UVa2tPUpgsT37FyF2",
  "key6": "4rDXDFy3MgrUCbKWxNM1usen3UTrrHHkAVwcWpwrpVhRerSfM9CM4eWgn2B16rcUioa8xyBmQZQ9h66Pzm4Uj6uA",
  "key7": "4LnbF6gMDjjLSDyQE66QZpLjkyJQXp3zkGbvezKbdnBqr8NDcV3r9EDGRboDgNVz3LfJz4SPtqTUKGPKePJeKek3",
  "key8": "5uXVP1pvvHQaSqrz96Ztxm1iichJHJPnG488fj1DHQT1FwRMeKtg1xBaEp1i9nJ9bFvyqYX7qTaWyGdcyWp8gbAc",
  "key9": "RRUKyR1QDCw1JcdhRPh2DfUJ6eLtRBYhJ2wmTwiZrBoysvcLGzJrXcUbhbaNBiaGuYquwr3Kc61k72j9TVkTtm1",
  "key10": "nVPbW9tRfz4uGsB48hUAy6wzd8SBsKSnLrsQpqneV7xhtUJJwpnENG8JMzGjzqyU5CJ2zKKmPDK6JHVhoGhvajF",
  "key11": "2mPt7KMC1vyDasdfwe62789as2F6gjHVG8BxiA4WQxwGFvEiFvj7VhLDDsx3GvzxS8Mq9as3Gh5iWCvgWWmbmenW",
  "key12": "3467uXtUmG5X3LrA5ZU6iXJdP4t4b1eNQT98eXVMEGM5NuSeoBCaToiz3kdED6TbopKHkpv8S8BtaReGBksgxvdD",
  "key13": "5vq6LC7hYecTcjV6AQeTK7Mn62NTCnESCSC1EPgdNFVNUjbd4oQWe4SjxPkMVfpSTLXggN64d1gsQ7dvN4uUa46D",
  "key14": "41NodgcXp9F38uaE6zsixeWss5HiYf1Rxc3yKJpRdxKVW2HXWCMv4PgmayMmo9FVSQ1H4PJUtYxu5iSa2UEgRjfc",
  "key15": "4rcjrgfvPPg1iYMaDGw7qWteJwWBkFiBuci6St8v7ykE5Q1M3We3yhMGjoUT66R1xFu9hjukh9zCUmxsR6TsLD8F",
  "key16": "2rLypQ8SG9WpMMvTrTKeVZhEbZKZQRYqpHsAzbrfaYupCc3WCcoNUApfAquPo4xaeqAavA82XrBEnMjtVY7RbYJb",
  "key17": "24yAn7U6yvxyst5CEKUv51yCxRmPpCi3c8yXzkkaJ4TTa2cnCzeLurgNTox9Ghiu21xnxoBpLMQrdu4dKvnmMY6e",
  "key18": "4hmTdpBMXtMQisfB6BrLajKz4UdpPx9VDjQsf8vkS99nAGXriuut9o82ovz6787QVTUQUyxDXPeeXz8LrbirWboT",
  "key19": "5YRP4ZK6JGMD3cctUFw8uEAuEnKoJ4t5e3x1uZDgojRvtAt4SWLs8Vur3MRBqAbHiWUrp1MYEK1basevTT41ipnP",
  "key20": "Uh7YMrjzz3ntQxSJw9fjftt7qUEM6qcbFy9W84q7KnPKTMqRJu8TjNKZ3RA14585ZFaaaxk4eLQ8hhskQjVZP6T",
  "key21": "Jq3sPHLuDPgpYVJBBG874XNP1XLerWp9esCp5auiygXDo8DAidm4kLQeyR2fX5JQ9CQhiYLZEMZcJetBcfvUK4K",
  "key22": "UXV9XA6uKKwsX3yeKdV7aYocx36Vsre6uXXaP3u9Awdfzi2TBHjmL7qzf9gMQjJ4aboSHmVfBLPvXjRRtS8p4iN",
  "key23": "41qm4yk98SzbK5imNUrF9t29L5pkx7qinhnfCQLUzm1RtfCVuZKS8X5LcPawevs6v4McLepZMk3PseWQdc1kd91N",
  "key24": "49R9aU2XptemdxuptLvps7asjZuzruvVgKPbcM5FX1TAGSj7y4RQz7CkrXP2ccdE1k4CBN3QGQ3au6A95rT9hfu8",
  "key25": "2n8xNqzYoDbSQE3xTdzXSuZV65rvohiGxXXucukjc2CkpaEecyZPWduhBhR5Vg4K43bxyTqSPZ2iWKfdzQ6bqMB6",
  "key26": "5UTNCJQ2wF9fPhmmjJTsKTnR2fLcgtDCpygeF8fo9T8ULPiBSZFyjHQ6PVY5cPc4ddWJkin7dsKp9GpdsN26RUvd",
  "key27": "53uuVewuWaYrNKM4Mro3F6dKh5W8VfXzJG7L8t5zkMa2RqAExTjLexQQvNWW4kUvUSdJNX8ZkXbMRnDwEachyNug",
  "key28": "4vgzzZjiAqeLZ3cCq4nK2jsP7Vm2fsdxuW7yTMEScKLb2ndWWrDgfAG2QnqPFBJNiij4kXbPzesKGnRhysGZcvQi",
  "key29": "33kQiFTej2DqvTCKxz8bWeEv8NhnAnKrgFGpx62gK5Yz9SBLx3sdT5e1uAqmPbpJGMqXXR9XQEw2TVBoFmQHQksz",
  "key30": "31ExXdRHfFvagaM2HnYxSwEBd46tjioTSRiX4p3fwhNs2JBQxD4ZMyRKx9oAJutUwoHqnDSgjfSbbLvdcLExdqsS",
  "key31": "QRAoGBLD1AoMqAHZZ1YdPyWnxmKo6yQ3gE4ZsG8ijiFhJQNkq6QHeqAVasnWjgkeTHde85SG2XVKLMtM23k4c9T",
  "key32": "4DnWCGbchXcuVHjMozbQ65dgeHGZtiSmT9bFHTniEj9tTTBVatv1fA99kTqZkTdSwChLXAy71fbe3wjR1gefH2Ju",
  "key33": "2HcYN8UeYiag4rToRMYfMrMH8eazGVmT9iVimu57NQbuegZ7nbSdrzpj9XvxNYJLSdCL79YJo5wvSyqSs2G5f9yM",
  "key34": "5utGTufyJadv3XH5udhWHWsq1Gpkh7uUrtR2dRTnycKdcYEPfmJseAkJPRpnYngyH9VRLos6FCJHkxhAtRpiFemT",
  "key35": "j54KDiUSSdBknFKCvDZQ3R8eXuZq5J4PwJnKN7qDX7Vznt1pfr94oGAAgwTG3rguGyYKQGFN7ZDi478M73ysDip",
  "key36": "5uCGAuPGzzTYjV97Fb2rtmSVFgiZvhvsxrTVCbFqpDXU9Kuk5ep1M14P468ore7uXg4SxsWiqcny8V4fsHvdnBbG",
  "key37": "4wVnLabfQUr3TsuUX8GGYwje55fExcrCQscuGRQbFRoNYPR8VxDvem9vfZj4keEZvVo9D5NKqtHmtS6wCcXymk7c",
  "key38": "3ipcWXtVycZpLmwhQBVeCXMQWDK5hH6ZeuYxWVapydMuQMGFo54Sx5PkJRTS3PzmHJK8GCDTcgQ8ETE2h3yom8gw",
  "key39": "2igENmNSoYEgcUViW2dbat6yDedAjYfrHNuNHEM9V6em6tMQjgP7QvgKWTC7qzimXZE1xfhdZHtpujDVjhvy4tat",
  "key40": "5MAEAw4tRwHVuuVGt5pvRU9pdtWk7Uyq1YkXuzrMrmDyTcEqVhAjPrcw4hFVUGmosYGtJdDXxRmccxs4GkVFmDdh",
  "key41": "4TGHeGnpLYSCLJEyQwKUvxiffjnH7nkdBFBJrvsn1HJ2v5426KuA54fGth5m7dB2tAByAqWSaN4m66TjyKLiAzh6",
  "key42": "3FYDyqphKJbR7UPyLwKwQNd1BNZbKeyXm1yZwXVmYFDYisQnRTH8L5uMVfGsAA3hb7Eu7wT6D1p83Qqhqrs1BDpu",
  "key43": "2ZtwbuVWj4bf9eQJRQqJ6hZ4G1odRxiaWRqBbi1LRYNsYBX8NUuQGdBM5fCDq5sXHGjba79EcxEZU6ktF48CikQN",
  "key44": "23PUG6jMMvDvd8SNFDj5udojYzBYvyBNZgFj9yaTZRj2HLKxeFD4CwSRCvoznN7VW3wkU7gEWsx6MnTWagzGPSJx",
  "key45": "2CNK864TJaPufxNytyXjW3TrBApLd8Cac3xbqVctoJyDgwHFpHfYyT8XNn8BjyggtQ8Zct1MtWZ8SUP7jYhn37Xm",
  "key46": "4H8B2jDfQYiinQe1ooqzPv3TieVfD2Rs8T4VfX5uvJSNUwVh4cXcqfSjf5SBBwMaz3BcgqnFugvkaLPp7RKzKSyh",
  "key47": "3zJDxhfrxweqes7jUhDioMddAzT6TZJwZUt91ZSkyKJYd1y3aEAQ9c5mALQPoZodKPrbG6pByYHBCaZ9GdqhQcbh"
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
