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
    "5Lwo6TFw8Cyehqp3Hoj3bv9A2Y3BeLiJauX22Jj7Jca6mgmt3QBzP7LXDJ6iAPws9ABmse2M37fzzB9KQfHKBnWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXcoMotpkkc7EBX2CQbDJrUun5eoiR31NdMdXDzhL6DHnb4jjXTxMz6a1Zv6cjjFyi4mvWgeSWHVCUMwRKm3Ljr",
  "key1": "5ZBh2XDA2TaHPhewnxgeg3STWsoscasxc89oYvqsQMPFVxFbPcBuoyUfdw11msT5hJTUqYQsstTRgmMjMrNsWrDY",
  "key2": "CnH1pHNTZrHJx2z26YrCkKRHXWypoHAUm1RZVcJ3osXrKRtxq1nEJuCtAQcnkBZjmWdSfq8KbWFmCzFkvtX4jNH",
  "key3": "62GP1UQt8UCVWrnYwQkjpEpF18h19yVJg8j72Fo1idnUP1zZKEgaHsV6zdFhMFaJJk2mFz8gNBakkVeXZoYbFfm3",
  "key4": "5ANakFtNRixu3cZLtcmYPyVw89bukv3ZT5hDi8RQo9eMNgX74stijYvnq6U1Vj2ND4Tg7J2EMbFUGnzcxgh5Yt8N",
  "key5": "2RPen3cweEWe1Ekrf3koSZHcrDQFZJQUsxQYSeYDVmVNqjHHsgzpJZrvsDYLRY6Y2smu6FT5hErDfsJH1UGh62AA",
  "key6": "3WbTBDT4Hv9gMEJapw7A5ELMFZVzrDNWiGqPQ8cegYBz7hkKZLFrYArFMk1875MrzvxdgJ7Ujjw6RVTu7JL1Wt12",
  "key7": "58CBxdnzS8s5XJhnDw7a3Xr7SACMcos18gK9ELxNVVMtbNDTWJzhsNXvu54RCDoVKA9RMGWC3sNpujHBttegtLu6",
  "key8": "3JcKSzyBPtkqLshmYdPzitBxpu51VDDTroNeoBXRLN6FzUGsaKpKoBiefvfSfaXCjP4yiTQVEhNbg5NVVH9gXB9Z",
  "key9": "2EQ7s7FsvxTRMseC56ZGRbnpn31cbAMy1wZuoruBaVXvDmeyWwFnM5tZ31GnKkb2vMFAqZAdqxtRJ2N3gSqzD4xC",
  "key10": "3h5u6cjgcxhNX3Mdndiwr87jpXw5wxwvchr2FwNZGAj95V1fzfbh9UfRVGMVnh4Wsv7B1d117TwEoiAsqqg1xtGu",
  "key11": "2bQ3bjgou9wsVdtYv7dRmCxTUW6fVP3DReKt6XvSRdYZGYDoDG2F3qHGombamofSVAhXEq7L7hoLnHkSUX4HVMHx",
  "key12": "5Chj8ZARELSGV8dUHWrVw6Ljw8pg45cT4RNta4VVaMzdmN5iXqZcD4twirbkjYnDuPvMWNbH3AGjHmn8xakz1FsT",
  "key13": "4dMTEyjB6uKJnBkS6guzezmqKRfXMpQ1AbPY77uky3KctX9dEVmuKDPDxjqEgDEowGEaJtihf82ucvpNrK4GrnJG",
  "key14": "2eW48VYkLone4RTsBMppxnfj6CfAFJJafZ5fDwnT3HwE1P5sgP1Mr3Kuq4U8zY8jG7ah8YJZnFT3Bvuj9UHLMA48",
  "key15": "446qmxjFC2f7hjue8y53Dye7Hu6M3DoCyLZaXHKqs2Gw8QGWptAX5w79HgtLDGYxUzp6tC9T92qLQZbkRKHU2oP7",
  "key16": "5BMABQbi1SmdXh6CW6Qn896K81HH4PAx76JNzBMFihh2EasQ2kfzgxXpEbmdJWxDs8uTJHFRLewqPwj2kdkGNHog",
  "key17": "4W5TvpyiV491WMdPLB8K7MDpvRqXspX6KNWyfYNfKC86nH7XZSe4wEn4EbZzhrPVCJWmXJekaWWBvL2mPQfTkee1",
  "key18": "2NhqMVfn7Jr7qUbHaBuPmDaQrffsaCxG7VoDd4BPEkcukFXXUbv5K1ZQuwtRzSeLaNvYJRA8ySurS2dwuH6ChRq4",
  "key19": "3qfPz3R8hyRAXfmxmzwvouT6LMSUYZ83RAUGwT47ynWjA2K7yofxNtbvTQVjYC1pi5VHmjVm6kCuroBt4STGoQ5h",
  "key20": "3aRfhBQWm9VcewgDDwQ5CpoHcyJzrsKU1VsBFQBxw3fDcQ6TZaCfmjqijFRnpwus8yrXELF93BPBT8m5JrX1h9my",
  "key21": "3FYFVQyXETFUvmEwcMWmCQ4HDUdckrvRHdmD8B8tEnviJKXNV6x624XF2VRHpxzrRnbmoFt4wds2UDD3N5La12xm",
  "key22": "3scYx2x6MVQQyCArLjKBqwVyEVLL9nSU52YvW4dfzotTdR9xXJDX71KPtJ8QyDRVPQxo47mu6giG34NnarUdUA6o",
  "key23": "geYwx5gjjLQBkJNifWXrZ5ChUeAo3KuduMdgowESyd3kcB4MyHyLd9NaN56Dwa9XRAHHh8Wd95p8HhzGsGUStFV",
  "key24": "42gRwWzFMUTxepskujTc5gYW99JWqG5cDrvDsXSn1ih6tob8uSByaMUXCLHXHKg8nV9zL1eyh2pfuNBybFW8LWWY",
  "key25": "5YXXxjxYAy8TkwE4RFgyZi4Xi7QLFQhqayKbnJttgpdhLHgdYR62yGPiZfKDj2zGNYbNkxvW8TUmpxuxffs3VcL5",
  "key26": "5kaWXhSrLEGTAW8PG1CxTmvXWdjpbdbJ6xne2GfVgE7LecDogjRQXrt8r1sYRxneg4DmtNSGUriLyHa2MGoY7xXn",
  "key27": "WcCQNCDSqqeR9xewz7EUTKZvFwi7L9o85iR8P1otwVgi4HUWw4ypWqr5LfL3Zz6m11FJTJBcZ8Pdg9K9wLyR9A1",
  "key28": "5SXbK9nQQUYYmHjgJwEBgUCEgpDUV73QRV3GB4jUWyLzuve9bJxqbqwKRc68if4qn5cn4t5FnvnLTYAsTQ49vKXk",
  "key29": "5KzkRY51ZdYzcXLmysHJFJFiZFbPDJkiDsnVCTYUR8XK1fkLqxJCVgADQSaVUHogKve6bbCtqHXk4VSovG8FFtv5",
  "key30": "1chZ8CL3n1vB3vWKdWanExeienB7kXKxBJREXqy9JPvZFaDaszydQYqX54SU16JbHveKK9nyNBtmpBB1QH9c8D4",
  "key31": "3xoywisYqgSKA5xZR5JSiuo55DtZSNVsB7W7cze1JKuoyt8fG8psdpqvBnMQdp8RgAdo68JpUFxE3gQQX8k2bMnh",
  "key32": "4N5UWemdPp99rwXwut28HZgYrRjgwR7xsKB8FkFbJ2iAzD1Qfs6zcZPQ4PQQp6a5sFbVhnWfp9oCz9sEACkwCbDi",
  "key33": "3ZPSRCFbTKSXfDdUPHmm4pgttcjRRpoCUim2zirRr6R9jwTf2FJQGJG9FcuCce67VFrk3Awzrdg9j9zgv4vBh9v",
  "key34": "28YtAssjmS7KJSfQM5VPGE7BLoivDNnuGJxoqDkzkoB5bJpSXC1g6qvzKsvpn2UWvG8QKHDtGJACEHYbEKeNfw4H",
  "key35": "3bv2eUELPPkedjbmWeZP8vxrt52io8ZDouDNpwsDY3K8UbS9y3CjmQARe48dkzC319SoZL4isjUpWooBkzGAU1kJ",
  "key36": "2mgQhmWniHAs6McCjg5uwDUGV7eYqeshWza1owKYXiyn38XjNHGKwyqVLARHdSfdyYC9KWQnWWw9jNmXqSK2w6kp",
  "key37": "1XZGLzqdCjRAw8GPtemGVGvUVoKRJ28WNJjpRY5wVooSuRjKkGzFsJhtbibzAxahz7uL1n6EoyUuVKR4vce3YP",
  "key38": "4pFDd9bHfWZiFFVVAMbC4mF1ck96t12TCvbxQjgqcgHumbXfdYbLBtQxzrqZgDs3in4QziZ8kXJYaCHGpaQSBnQf",
  "key39": "5AGPH6UNHZ1BRoY4KX36NtdqzC3Q8bdcoLJQMmLE4vCYU7qvePE2ED28ZtbTfRBFmNph2ZfHnmbWaBhgLpLqcwct",
  "key40": "29TYVuMBSUP5sAGNZwrM6b12ro5MQZLyZQCA7BrvgJG7FzE9d7DMuSfjtohuMGm4wTdqMA1gyDvd7nhHoa2yJd2x"
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
