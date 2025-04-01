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
    "3bBT13BT23qvGxiwef35s2gLPMNuq9FVkbuwRHobfQ5i1spCd7dgrNfmj844ohB48MosxJePpepZB9faPcBEhAEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NKYctjiQp5FJqetExZ1gDsgxZWKUAvhrBYBAi6KB3CpUCkhuWyM8XdqQVxmpwi7EDrrUVFejswQDbA1Cpaj63A",
  "key1": "qJYuAacWT2wSeMD8tw9ovP2msNuidE59BMr1bjPfK5t3oyUPCZnr3xCV5rvrdVpQwueieNG1SHEJFQWpFh2ivGQ",
  "key2": "5419cnmczH6zwio8VchNXnUB9KyQLn3wE3zQxkurQToekmgBrCXB3aqzUfroiLqs5tsx7N2F32k8gWYhNRy3rvG",
  "key3": "4uwYur1m74HF2CpLmAon5NGLfFHEyKxqhBrZMuRb6dX8D1vQ84hPGS3AoQdzQfEHNbbCAsbBYopreZCjw9jvZp4M",
  "key4": "5aHc3z4AzSU8xwo3Crz2Zn3ju5Lnu87PpHohpvKJGkAKLJ3xupXAok4pkW7Jbh9pZfFaeSoHXUqj3Q2aPimC1FJu",
  "key5": "2q6bWyWnQ4BKjQ3PRTmb6sEqXN7pEfwze2QqB6EKrJVgAsTG4Sk3jKugVEuWhdRt4Exjk4N2hoAteM5cH2CBm753",
  "key6": "2m9ien9HzpiSi3YFs9rqhJg2tVRgGCZHJkLGXRk9Z9YbQKgWRCajKkYSSJq75PB6NcMHmYTRm3DvotRhmZujU8er",
  "key7": "qmHYXxPjD8EM9aWLW5mNUwCcohPbVsgrzZ4P5EHK3GcY1UrAWHCgSEQhChYtxiWQDPsqV47jPAmaNbNGLFXkd7Z",
  "key8": "4nXu5Bi8mirXfvbf4XNxMK13JBNE2p8Lq9mH6t3MKX9jxHdFA8c5BVsdHg6Gtib7dMsyShZUFW1BX2XfKzruD79w",
  "key9": "3yhQBzMDjzcogcnNMqsYjFYfVMPFsUJfBqeWbTNKiWMLLkKydrKFkQKoqj1AqKpY9aWKGr36MDvy1BsgLztYnMPN",
  "key10": "BH8sEdV3bCgJ5qxm7TMieTpWfMTEsMJDjdGGNYRdENZD9iL2Jr1L4Y7CEdZFerprTaGmXRfsGKvr7cGzQHocHC6",
  "key11": "bysue92mFZaHHKvJxQkKtyXWhkFmWrhA8TQk3xg7kKKyZ17AGUVYxYKgXGz73TNp5MPfpfHTjhXSeoPR3sBVqY1",
  "key12": "4BupSENkB5FPhq4qPyq8DTQYs7amu6v2nd4Y57HXnRHKrnNNXtcjYrktM3NuP6NXoN5VJkMpYbcWbtCgAZuaAogt",
  "key13": "425HLTAizgUU53SesUdbiYh72eC4diT4JB3vqEfm7M4c3nB1x9aosHXC9EPNoT1T2Ca89yjBfJbjaH94NJHSGMRB",
  "key14": "4cLNpTvwbNE7FMzyPyyX4Y84ay6Thc1unqeG7qUmdwSbBBHtoDFHkBu5QBsBJPW5u8PqakEc9Kh5NPpZ4Wv3wQee",
  "key15": "3zZxATfXqb8yADyTxhvCkSjX1r3X1evPUTH2ZttTZdw5DYc7Xxvd2QfbcSNgJ7SXyssp9NtsCa3rrLJ6hwtmXz6X",
  "key16": "2ev8j335xBgnUupFrcXCfvBDvKaUXmuyfXKZxxgAzE99cfxX6XM8bpCgvXVshmtQY9BxS6Mn55U9gubEPC1gt4Co",
  "key17": "3fwrPoa7iN2anVkHdic9iDQ6eukYsgMU8frC5tchWq9D35KPAS7o5V2QffxEZQ4xftZr7MdxF6JiDJ4UZCN1JvQD",
  "key18": "59c5i6yRP9hfqR6Jfm99JunCzBWBT5RgH112kee8qifEeLF5B9GRFJDrwTswt6acdeet2gvKijxEVsjgjbCUMVNv",
  "key19": "5Hsx8A9misQ6coa1SRbnr3zchVVEKjabdf4iNH4zXhGgBg1xmHr9cHvCCRGWS6sawi9KhvZVz9Q2DWnQ5dgon3en",
  "key20": "5kLRtvigBJdQpNVk5cvAcTkVHeVsdEjeRNhREJduEvWy88TCeQxqUB2CfV5b2vfbBjE2jfJxGfaudarrQep2SsnV",
  "key21": "arVPvjuxun1eSvSZnppeP3QHmuWtM1y9kzvH8YzdB4D7rD2yannJHy2VdE4tbZFgRxqAcD7SK7QQdsW9ryKQsnh",
  "key22": "3hXiTRzSvRr7kJq4BLCrT885JGCENwtxZXtthLcEgfwf4B2RN1G8Z8nBBKsj7tHQtNbisVqGA1S6UXRJLRtHU5zq",
  "key23": "28fNaa2CejLoH77izbHVUCFpMaQc2bJnaKr3WF64QxVvXVktWJmwqqaYLBTaeyHMKKH1V7xrUeeeE4ma5iL5vjpU",
  "key24": "2UTKDRUaBZsWbMJGxQNXowZFdt47JQJDXbwtTqpf7hqyJNexPaSkBW2TELu7jmmh4C1E2KER9DeNMNcRLzELyb19",
  "key25": "3SMJ7G67wUN3VAAy8tQHRsarPqi61mLngtzEv1V5hcM3oNFRyR7ta6nk2fihtz8L9AF9LwCUENX4Cz44XTuqPxnx",
  "key26": "4phXbT33mHtrLdD3CGcdYEupiUquL5frheP7szvefNjRXzbuYJSqRKmMrZWV7wiN1zZ6cGcDXiPaquCxehuW1RNn",
  "key27": "32v7LN3NYDSMFhAfrRZr1LPPKSMxu8Pfy2wEXSsJtqdY5u7qHtjSwXvYVeHzeMwxtAfZ2kAhufsniuVsxJe3oPSx",
  "key28": "3hJFaQcrRHwNJseWqoaaDn5Xzz8XyKUFv4vruvYjp7pAxmkiBbCb4foBw4NMVZJyv5wUCGADueNJ1stAPmC1Dabx",
  "key29": "4rNFYFTwQNtXfWo3Dnm8DEVUheomiCNXdNMXF6Ct7UCjWhHZkVVAu3pnh7xYZfefbn5zxTrZmU5Tk5EbE3zGG3aC",
  "key30": "39WU8BopLfQ4veeUF8tqpoLTjYMwrKMi8PCC7SnssBKAmd67aHaA9rNT5jHwHxHXtyScnujkCzhHGqPs7PZBfPxs",
  "key31": "fW2QiZnKJMRMjkdhuLcx6FB1NUubyv1gwcnaPGqgzKbv7Ngq3Bnf43qodxzbk4iGPXRAichfdi9hfdXaHHCbjgr",
  "key32": "5CjYuzbSbrX3gx6XsHBs2UX7oMMpcxcQ49UJHgVviyQXSbSBUNLaAbKZqkWW4Qvk4aN7Wm1hzTYqPqym87vRBn9a",
  "key33": "rWDbEidnGokaGpTpRsdiNB1wNR7sq3hvXHKY2mUCPrvJBSEuUDMKfWNbHzgHutPda5CZxHfhjTWnazR5tmkNdc6",
  "key34": "NkZnTh6uzUqVtaPneUBt8Z8wbh84Qe8F8DS3dBQMRVb4MmhkGnR1kvopvxacorCNqQ5VaWfAyF7XfQAKWnME56h",
  "key35": "4s4SdsssQeYWz5Nn98XAKqAxjZPrxVkRF7ZYv2FgD6zrCUtAWUbHRoSoBapf5VuBf5QTRYyBAS5PKDeYQFAu6Lx6",
  "key36": "44Wzg3Ggmdc1ALZVEVp2Jd5HnQsSDJH3pBpxfFxNGrWuoQ85tLfPaVWJ1DJD2pv6HX31hqLiS4d2T6eaciem8wR9",
  "key37": "1TBauTwP4BRsLRFqVLB9NhtabJ7PncMvJSZpwuifyQJriZTabXGhfHYYfVUEDdQ16zNQbGkDvFFbEH9SxnGuVw",
  "key38": "GCqFEeDvh8eqx1EUGXPiKKf1eCXMhjAmSyQSsBsajHHLTqyoMw879gFfrA8yocBtRrdGFJegTSfxqskdQeg8Gg5",
  "key39": "5cAafud8E7uL2k7JfYKLD7gnTKLt1LwXiUEjo2tBVPKZ8U4TWRqMKH7kA687gXvsxWyszLMj8D7JHF9tARkVVuPf",
  "key40": "42MNyZ2gBe2ZnFmQSdVX23cnWz7u66DrdNLD8XkWV76UvRjjKrz6C3Fb85gH6G4ZGNZ7avC2es3cc1ZjL7UdUm73",
  "key41": "2kerNBTDbsS2atn6zxNWmWNohGFPJ1Ha9ADMAg2Wp9RFzkkfBDZgjUiVS2W78NTZ8oZQNcz2pfT3WWoGcfg2yW6e",
  "key42": "3XJ7dXSDiQR5TZcS99Uhq36LepMjQhnWwfE9f7k3iowCioZsqm6CfmnxCRopFnMj5cgLpNn25szBDUEpu3YuAFfE",
  "key43": "4KLzAYJF5LMEVmRZJ9bYVYBXXY2KRRexfMwog9859vcskmiQpQuY2FZkptnwTV1NM49sh8qddho6jrbAJKScMDJL",
  "key44": "iquHkAgZgMWHdhR8BKv9pFUmghV5BATRaB8SD7NetnAaVhRcwsJPsqgSgQpxHHBpg4vKtX8NRtyfDqKUFkekbc9",
  "key45": "4omtbFAhFsJdaAmBTUwPEWpYcNrCpEjjtgcyw4yCrPRgg1217bFrqdU3HarPbnsSDWfQu7xbRgmE73KYov5CQtGD",
  "key46": "6DjGq7GfqBX6MUpyn3Jw6HogpS4hzUKkTAFNXczBFHVpPn8PgW818mLJnYpUTWoGeAKGSQDGicuiEVRHWrGLdJB",
  "key47": "3qpM32oYtRWnruQHHeLsFhMLGKdGkLHYKdBn4WjuxtwFcZ8N1b2gs6yxFK31z47txxHGJtHpBWwqk9Qt1jeWABeP",
  "key48": "4ZX68xMNjN6HzpRvtUy4bTtvvpdsbhh9StSSRwbadaDoZtK23xqxzRTQo9bJhnpP52EBfACWhehpxrMLGRzfJ24n",
  "key49": "4YCxerf7rExKwoUUUkxfhbP8LYrEaTdYPQo21xACLYcA1aMGfs5rq4MRnnE8VT41GnGwWEh4WSuncgbMshk3HXVH"
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
