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
    "4QDxFs23JB9XAvwmEUEELfV1VLXR3W5uNnzuciV4XFuRTF8sZynsV1ban6UZnsmXcuVFeVGdwEC1uBfCCAmU6K6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rqsAX1gVNuJNraHUoZzqUcCugqnUpVxQfX5fFjk9Se8iHXA7X5T55Ld1AAxE819gQib7C7XzEgBYXq9hqEpDjf1",
  "key1": "3HQUD4LyENXYszogzJ14pamNZSd1fkMjzHTdhoybmrCnBHKV3ULNJpRs2rwX9NyDcJgB3LeH2ZAEk5LTaiHYYqHV",
  "key2": "2WZNLZWKdHGudHLHKLskmJzsKJhRQEWioq88pWK6aiNUi3qRJMHqr3Ury3So1p8ujiXQYXePu7yNEeQ54HpKancT",
  "key3": "5GGV5QpVmFNrow6gLXeD6BSK4PnbGMQ9sEbfjs4ugSDLhooyXrJxUYkXhf87EvFB87MtDcM3rPjGdaXBAJutD1Wy",
  "key4": "2d4zbD2LAsonzGCfwyhg2GPhv94Pwenxf4MDYjqWpRVmJ151HtheRgijBYsPkXCb8RS2ot1cYZXaHxJfnLkDTjBd",
  "key5": "JY7QhdBpJsbxpPSPXzSz1kCwM4KHY6D68xQuBKK87YQ6jySWz8aptoJXhvXZkDxhY9mUhk3jgrTFe9Kp6pLY8mv",
  "key6": "4yFtjXHABoAZJZwFQVSmm64yNyk4vT82ec2R2bXHTR6PgX8HzLwa6XCK4CTbbse5FgGsdiMp8pz8UNfaGVBpZgCA",
  "key7": "5XGBrkR5vmtSpRaikFLJfJbq94bb3Ge3Vu1JoCRvuK5pEDZhrV1RGLaQguhpjqDEgszi9peMTDLEUrv9DYi3vTvy",
  "key8": "juRK4NJgs4ewJW84o9K3NuykHSRSiZVEVxAyiTuKJf4zx22X8iftkFiKumfxqnUhL47nzh6aSidYT8iAw8YbHWg",
  "key9": "4uBNCur1FPA44kQoanU1X7cYeynZJLir66eGv3meg5adexqffcnxqXGmvxBRnXTBdvrj8oP87HbQNSzeSoR5YEku",
  "key10": "3y6NfWq2KMgC6Q737zrF5w1XDkdoEGfgLpjroKNyd2gPtqbLZSmJ3zu7ufxtphVZLhqh4ibz1U25YyDZG1Ynzx7k",
  "key11": "3E9aJBxhcyNuYBPzsad3vVyNx4Eztuw7PjBqfMvVsRw4Pt93d57nJ4okqaRhHgbG6ECzBNuHCoKJzsyQBSKNyCAA",
  "key12": "2m7TLpS2bbEeJYeAowHCP6qL3i517y4SUpBL4UTe2YG779UKLmHNUrVL5QSvm26b6iu63s3gX5RKpxpvE4wspsB6",
  "key13": "4AkC2qSqXSeF9hb4rA5N9nnRXeVP2Q45qQaq7GcPrCZBAXpVvVuK2oeYvBFH96EvsyiwGCpvk5apCP47vudM6JxB",
  "key14": "2rcMQefpGDLuQHoupd1odQvbF1aW8T8KNyYXBYrkHa8S6bRhxY887pKo8crziVmVAmQqCQMwWujS2GBcDHCLCk9z",
  "key15": "kcHJy5uZh5EWxBUTi7LfyPC7mwb3unanvHPcgow6ZAu3EpbWsR3L71pmb5PALCYFHJ1YLhrKCmWBKQHv481ga22",
  "key16": "5nAeUYxQxRRKJaqsuiz7Az25MYM19adGfaXXm3WSjhjM9gbttRTmYtD8Hjsp9nEGAWUs2u5v1atkr8HbosWP1wb1",
  "key17": "5sGUutJxuG9Up3f1T4RUZjXfNUPM7i9to8JGD4Gug3mwFdUEJiVPe6wNsyoQgE69oN96Ww6WmmUXV41vP7tJxta5",
  "key18": "Ym1ACTjJ1NVNyN3xbysVEL3GQ7YuCzzqXG6cweBfHz28n6ivV5Wy81SHipNM7hAdPwru5hEHEGNttHyBLSWKc4X",
  "key19": "5XfVpFMX5ha2SCTrXWqNDcaHm5MwvspH4k34EGiMmtGHo1TQuep7g7jHuH5baLdetXnmbCaGdhtoAXCic6qWdn6g",
  "key20": "38fuKEB1NhVG8Gf5TMEBRU3AbKwiykYrn2cAhbyVoBP3djQM68xAbytUsxF1NEgFdVGGZjUi6HnwTxf4yrPvTaYh",
  "key21": "LxxWxjUtw37PP7716ACBBwkpSm95S4UX47Cw73iNwAKTfTz77hKp2UfPEgCYWqxV2dAA9a9Lku3gPMD9bQo6zEk",
  "key22": "3RYFqPY221fmXV5sLgfr6sQqYUssVisHr7zgoZZpivcaBGJxN7jpM9Y5Mp1EidFpvFU3DpkEr27tdRKmtAUmHazt",
  "key23": "2Wcxz5MmGHChAidEgLa7XGZjeWcqanXoYDV3CXxMQcEMx6hbskLnpnbgmEsU5VKX87Y2oQM4wwPTDCLk6Nyng7D4",
  "key24": "5XHXj7Tw5SLZHkS7TrsAzCYzHPneYZ9N79wVKGfdAE8zdh1i9iGPUjvpRATRzSDPpHn4QjhmW6KC95XegUyWauND",
  "key25": "KDojqD7qGua56yGbF4KRxp1nqLkEC48kXfDamz51axmZcAgqHuCbxvGKCNfU7i6GKgXnVv2Nss9khyvrD6vDx2d",
  "key26": "4fKkipkrr35fN4VDcLZj5TKDYfcR31JLQVqMC4aoty5inei1FSxp3UgvpN26LuFv6TVKmmLfgoRZkeMdiuim1nQc",
  "key27": "3cBFto7jxgXk2H5KeR6TCRMrLZXwSoQs8BEv5BGUJoguEKLLneDt8zyJSKFXbu6fuoHuLXsn5Tb4ATymmT1gkQvG",
  "key28": "24rp2FvJ492aJu76uqecFpKSYCriaXy5AG9deR3To6ZJSCe7UN5arpe9uP72YZL766t3Qo8qNV98h5JHpnbmtn6x",
  "key29": "4WYuSe2LUF9xCToBYundK77hUHwydaWTTjuE1Fw6ojoMvcrDmiPcK2sy1bs8c9wx1ducGxahKHuXtgcQbHNnznQT",
  "key30": "3A33wEX7zJ3pNA24jjv4pFGXV5w8j1hReukLBQkh5HJDUXyiGozD4c59Z8DHqM9QeJYWjFb2JVLs1wTa2JLujHED",
  "key31": "472axcXVChDYtcWucrwzpV76CUK5QKLs19pqHhhccwE25T7fiZHbBWjbVvkn6gXkR6DUr9g5FWYvxQYEMBca8ewg",
  "key32": "nwLhfMEUH25bJkQD3DkmHBi7KrdJ8VqA5KbtY8WnkjHBsLazu9Y9hGNf4jfHkSKmCn664RjAwtg7xeXMGV4YNFk",
  "key33": "2m66paUGwgPhd5Kumfrbn9AgDWs4Yb7DoEnH5vrrvQ4kyfWhof97EhfBpK7F8s1RETstmzk6fpnCibpWUhPtGZNq",
  "key34": "4MAEuxgXLsjWrrodSRVb9jM1G1oeK45n7H2mW9v1VLJ38VRKMiDEX7yt8Wp2FCheNhCiY6SwDWXXYFDLMAvPQ2kW",
  "key35": "49wwVjCa175SzJQvgHu6MPxC6A1M42LEJRFHNwCNqtBoFWWyt4PVH38c27bbBzNVMH2tUNShk5b7rKMJdG8tuCxE",
  "key36": "5ZCWgXtTzezN9feGhGPLqvi9gGYfhDgKLFM1ShyRdHncpagECR5vP1j9kH6tugdCtLaNepc1yjRHFWau5UZRiB5K",
  "key37": "4nq6Bye3MhEkd7GDpqpXwgcqC8oMpY73qEjz1Y4gTA2Dff6NJLbmYdWK4YYr3tEZKtpda1PDbDZaP3ZW2WgMASJs",
  "key38": "4rehfqUabGgBc9MD3MmixdbvPaN1FyANy1S3Bociezrqmc7u7zTCxW2GuytmkCKim1TQ59EsWWJvKc3boeVL63yq",
  "key39": "3WUMhvoQ5zrPEHv58cHMQMMLGnxmEXDxEVPBiWqvHAjrpb8nyMaPZpw8po7UW53no4Dxbm658BqbivSqQfiCb8ya",
  "key40": "GRBfZzqNMq9vGYST9j59RPzSnEbcDtceyifvksWixh2uUQMtTEjCRJrmDYukj1ShJdGB1JhUz1QDBvThXWNtLpV",
  "key41": "4s1VrdrVirMB6YhUeVjHFqVjLM14eN1Xd2dXRFG1GNoz5E3RzYadoEzpuFSUjGcs76QK5dWTEXzTKQfJWV3taWhT",
  "key42": "3aMgzq1795RkwwVWtepzAiuyRBgD3L15Bq4PZ34BqfX3vcrBBvkLe5AbW9VqZvGxsgwMXQVXAzxK3Q5VdVxgofkt"
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
