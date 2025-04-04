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
    "2mBGqN2t5haNepZrtAjH7pbkzhzenhjeMPt3AKwVeRSDydG3dbfdYUVVXXohVXVekBzin8YdaS4LYS8g1ysc97C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdD8sVA6NC4MMfTHxeyo4DknPgtWjgiUYrhB1YFMQ2sck6j4npH3Xv819Mhzmem2snc26nhyaeUxV7NrmKcYYK5",
  "key1": "3apsd1cNU976Eg56GfppU29qkLgkcuaAjYyWkN5Ao8z5ASpQ9WWDpD9h7AZZoFZVDttR2L9EBpka1udsdjaYSdem",
  "key2": "282cNchVbUUE6XDFh5tPFGF8auE6dbY1RukVnUuXMcjEZhGyCh6DuV97gZcGvxCBbNBWyumLdTzkyHpb3uABLvsG",
  "key3": "4jvDeon79ZnL2PaBha9wzfbqzef6kfGMpyJd9mG68qJPZyeDAvdniEAgorQLJyn96L7qsPF8FiyGVMtZdEYeaEwF",
  "key4": "3jfmQAap1824Rx4LPWEAv5MG2BWiCC4pKseiuyyrEvu412KArM3Nofhwy3zfqPrTamj3Si5ZaDQ42kR8Fgq5Lrcr",
  "key5": "HpFb41F8Nc2jy4SrnsoWvvQgT8bXMWajh5ynEozPNBbSSX4G66mke2Y41T4GyM3q4XnRd8Uvx2Vtf8Fn2t1EiUF",
  "key6": "eY6T4oGqJfdpSpQjArUjrMUknhVGantYpEZHtJtXThf2rXXYotA9d2hitbsfA312KmhZz8U9rWvperPcLL8iFAe",
  "key7": "3EpaEEgcs3Cb4FwymxcREoQRn5ZEDqfrKxhdsRUzv8R983kK1aynE9MDi86pt9VA4EXQQjiPKjAQogPbv2GwySPr",
  "key8": "5bc29mDynYAWdWnuECAwRrtQS9X9dViPcEuW2X29QHDyVCu48Y79UPcJVvLWF5mBQHwW2UB1S7rNga7soUSESDMJ",
  "key9": "2vBkYhEgX4Rf9rSsHgN6sWjbjJRJdJnCaJgwwwDe9cM7Gp7aNCmPwCRWsmsKuWnRQFaifRUyWSSUR7kJE6sjbKJV",
  "key10": "3cByhAVULcBbszsWHHafi5Qw9uiRCBbNusStWA6TauSv8nuGiE1ryTvANPKroq3ofAnGfmYzsi7LRadhmf4nN1H7",
  "key11": "4g5WF2RfRTeTSaiGFptFQGVHqLgHJpnKrMtb9wffkiVwvaWNuBv5jKg6WfsPskfXNqEHbaMY2rK95nuJpwPJ9wVq",
  "key12": "5XU5n6yigZCt9W32o63Dgx4yTpgZzCZkSUHAnazUbM17wax53sUPkZcA3pZzgXBJBb5r9rGGThvPY61ziSevsaij",
  "key13": "2wfW8oo1eut4nss47YdSLeN1UedCchvWLKacPFWnQeH5oGXrqpHvDx7gyoXVftnRF12CwHeYRQ2WiqrMyvdTx5ja",
  "key14": "4CCgqvdec8Gw4atxe1wLpzHUbXDfta2ejAGScJDSPKk1zk9CrYisgRttz3kPAzeXwSEXmUntSmAjqs6fhoZE3R28",
  "key15": "2zfvvP1fNraVyqDweZcxwQc7vEHt9JEv6d7fg2BPnLfsp94FKpS5ioYVqspUBLehtYHbcaQbj4SQSbnwoKNoMeVA",
  "key16": "XXmjrHmZC6C7R3LWfoPxaMhT1k8GKeXN7Jy1g2AnEpaMa7sN67n2a3fKz6i5ieEinvgtWLyjnsAfxZzJvSLnHn6",
  "key17": "3mjiWxYe4yzapa9CaryEM5wTD29L87P4DWeVSYSnLWnuf7Vm2B6ri6XNyXwHGxk5mBHLRMg9M8h4LGhKhHKBt9Ar",
  "key18": "2W1YqS6fy48Ssq2io658EjQb3bkAzB2mXURfpLcAD12Vq8ovqFb4G5oR7TmoTDEfatoKQaXp9MgNwEuwHEmPssCL",
  "key19": "63hCFokurXKPnp1hBzu4Azsk6wCwXdXE2Pn1tHLifwLuAQzAXj4M8CKaV3PDdydtFTRPqaUnDQazseyexmnzpDAu",
  "key20": "5LhVjAVomJ4DQeLs311QVwBkr4psPug8BRvtBawaM6fr1mqQgucAwRCWjJyn94qzYcvxNNTaupbyiBPXZExv34ut",
  "key21": "5GP6fcaT7En4S7jQTsgPkTyNisLUak69G4kkxug37JCdpCB1fy8uvskYrVp2NbDPADu1g45QiVcb27BqrBsG5Ut4",
  "key22": "qwcfcWwLyrY1B6YR6d9PxzeJgU3AyjLme8fnmMKNGGAXvGu6npY72W5oV7x61ABo8CBspjPjbJuC7QyujMaGwuo",
  "key23": "627hFaweHVyYMF8qczo6XdXKuFaNuRHVZxFqb61pLaUxzmPYzCKtGkmGwociRBpnRAdUhmb9iCSoDoFSJ79aA8Ev",
  "key24": "4graeeGY277GdaxCC5MwxugQctStPCAXoeBJJU1Tote8kmh2ouH1cEk1uyHt4GtbKukfegqV1E7bj9jVWQEVVEg2",
  "key25": "4Li3EQZguHsaa5Yp9qVBomxP8zyGTGnjVSrRNRix9bMECQWiNGGiRJvcVeMuUrPD8szuC2W8d8p83REREAnPmUAb",
  "key26": "5vMw8JpQsna7jnvoVcEf6DR1s3gs5ZRTWS3kCYiE4aZqiWFJsvE8c31bghKTnAG3iVjF6cixngTcs236mf1b74jX",
  "key27": "7gX673K8GKXeHALqmpbrYQJ5nXdmANaFw6REhc8MYcid49NEsFgjC87rRc1QVAB9SmmorrvgAAG5Gmje1UtJztR",
  "key28": "2xJ54cJGc96nphmNUNznBxG82r2GEymmfSx5gz6ErkCUqvRzwAbvZ1crV363dexhWVYdWhCf5A3DmPvS1s1sto1K",
  "key29": "2JuTcCvUehYixfYcStBWNtGfgidRHajasg8sjgKdRwrBttHfpwKfWk2FGUEoiZMyWfjvPZc6K7LMQad5k6zWLdEa",
  "key30": "2ptLw1r1tUoDGW2QEdcHpNL4EFnWdWMKBPYpStz9HMZN4RrB5MpgwSJRoXor4pg6fNZJ6WRUzC8nV9tZpcQdEQcV",
  "key31": "3Jou5VC2BHf8NExrbKNZ3426dwTSCDywSv2u5weMK7XGLHYmm1C9PL3JZDyHANZ5L9hXEKKKbGhmatZVT5muT5Zi",
  "key32": "5LagYuruhyspxzSKYev3F7ufN91ytLKpkVYbex5HLigicykFLp9ExfGTbyT8kmtKZhQiG6EBjuvRCJxWHDRQALcQ",
  "key33": "4t43fiFxKK3SmH1F7ptiENVqtG59b3fYXahJQdfEm8PT4we8UtAezQCX9qJEbh1prX4gTLwpM1cNULNDhyU2tyJv",
  "key34": "3CxBXVPM2N8h4TzPjbZ9ZUdBF5YKK8vJgeNw4NwGHBzkjKJsgptqSc8CTcbnMyLV3Zu1spaJkgUKjw7qTyEjQ3Jo",
  "key35": "4fJmKTNQs6aEBKvNxVnceZSB2ZVGiUMGGtSBSiRWQTshVZ375wW7jnXYr3z9ZZazcRkhhYUYJfR6brzLeDwgMP7y",
  "key36": "3jwDKHVNBzqMDFkau1Cm7xftR2TKQ2siQdoFE9M3xv1mok3RDi3uhmzp9FeSsWoWco4HPLo5pqPvtWdsawk8Jh7W",
  "key37": "W5MD5bs3JsoxSmUPihaLC7VJvFLBJCQVTACJ3Ec4aja3QgyCAojZEghAsvJhVDVUC8wC9VvMnT4RRLp9Gmzg7ej",
  "key38": "4AL7RWrzQ9K5mxm9iMTcFZPsvXep9t5zFkd3Yj4DM4HigpGADk9u8Zpu9E2TMGvmxGASqLx5SV33yniv5mstjX2u",
  "key39": "459DW6zCsH6F5fW3bzPBLFXgsGwR1Mca3UcQonkmJxdk3mz144B33PBLzptvortL7odowmKu34VqihAHg3YdPn9Q",
  "key40": "mXBtFacw3L7a9x6i3KpZHU1BeSc813zwdHqU9x4166qDSeUX9TLJHV4oPN7vjvu5zVy289mzzfLSWd2etXx8yVV",
  "key41": "3r9WnZCkJVprSuk47Z8tfRJriyivfv7oR92GTRVLvGPzp6RxW2bresS5ytmo8HGQWvB8X33KqkTMusJoFAHvoMTY",
  "key42": "4W5pr3ZHNGXwt3QTP4K5yUTa1rJjYnHiyeHXb5C8tdyegW2xZQhSTHZGxWeDw8NHgTsARNtBKigSGsHNDEekoYJA",
  "key43": "3JapcGnPUzDgQf4JNnAqVQmj2T17NxdmudcavEHFwPyU7oiaUZ9KGAvJzX4KK8tDAJk8ETua5eK5DZAhzv87KLxh",
  "key44": "56cm6474MM7mG2ZivPPVJQevjHCX7oTWRbif9RyPL3tE8283pu6AL16MWjC59Z2cRGAwwTGR1A6vTc9n7r6XQ35Q",
  "key45": "2rzzaXYe34cmPknvQcgXnAZHCUUkV6f8pvTGsGpFAEtz4N2kbQGRDrZL6PakyzDQFKmW9ujnrVRTZLZW4eU9VkPf",
  "key46": "57hTt2h7zTtWMmpQ9Bcdfe5Kq7xFmGGoVT86bNTv8Qu9R5Da4vZ8V1sPVLdVnn3QotqqABoSKVVgHDFpAoPQNVTe",
  "key47": "4uCdGejMcnd3NR9EkPxbgwtEpqJPijCDa1mQ4bindenpjXmLKkF7SsYPV2ZKgz3UWEagJiQ9XjxQyVZhSzqrfpXz"
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
