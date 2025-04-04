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
    "TN73bMxgDVBFGUxZTnFqw7LQyKmcxPbLNVDn5pMA41w64ALe5wNHPbg2fdTiq4EpRHD4qzayfPRrbBBsZG5RcoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZjesYjgwQPuhwrvoDbY6BGHdD4x4BgUeJMu3ge8sJPmHxPd7A56ejJE7TXo6AbRt4oEzY3uXvvPUknRqw5aCCy",
  "key1": "5WXX64HV9VWCzHwNa2RhUzvLzbx75rHgTwfMRxreUbRpMsagKH6uxMSZVuzVtHucDwPfEcqSN4UmFGRvRnx7QUrw",
  "key2": "2GF7xhCuH8N1GxiWUACraXcfm5S6t9m3ndxuimA6nP7qkHAkbFnmfvvvjUWxT2qBSFSnUcb84DQuMvPue6QTXeAu",
  "key3": "5zxYWg6PSnsrNABNaZu7RGGQKq1jvqtcXZ5cvmMqvYnVyRX6whhCHJRHvaYo7VZuxS4Dj6CJK2F9vzx7rCH5b4BN",
  "key4": "4vLbsa6ZKvp6683QneKZBfM8N8zAKL4oZfu8emNt6vyvE2YTJgdX7YKep6DZonUBzU2i3NfK6jF6NXg3ApPYcicL",
  "key5": "61xbh8fBPQHuD52Kaz81239sctU6RGDagKv3L49EoKp9s6jWvMjedeV6oFJCi6fckBWkYpFnSTT21LNMoLL42QaF",
  "key6": "v8fQptaPY4bkk7HAVY6Mwy6tMbub6ng6UJnXCwu4DipmSMCKnfmrvZTbaS8mLSv7XN1X57ZKpFevtapLrD4DUmU",
  "key7": "41N8H5XiVKYGMjavS74x8P27aaGf5CLWKEz4z2JNCLbk2ibmQ53uzyjpEebre6d4aD5veq3SFoKGFqVqUudzGKst",
  "key8": "YnRMGo7nPLYaLdDm5FsJUbPvLk4YBcSsWPc6i3hA8tyc1sGWcC5tQgw1itjdofiDR5q2QxGhgapzDbc8vpuBX7K",
  "key9": "5UzJCp32TnUUMFj5e4HYm5qxqyMDt8TmfcnbPnP6RcoQCSxBdCSU9Rc4u7KHfBQp1emhLDBZUbzZBBLn8oVxiSHe",
  "key10": "32rVHdJMHhARspArGtP42tXEsFZihkctF3n4cBecR9LUMN2JBzRzHRMATReqXh2fA6KpX1LX6779kijpVuvhf19U",
  "key11": "32yQHKok6D7QjYojKGNdvEL8q3uWEq3dTdZkJcVZ58SnEqJM2qbqitxPidZgK7r6UnA38HCCXeSw9dEg8qXFFA3f",
  "key12": "2WEh6h5fqPkvgGi29Kujh59aStpd1bCiywj7PnbMtjm4As2rJGyHUDcCpLxAjYyDSW4dvHkg3UtBYdLJHwo6CR9M",
  "key13": "3SB9c66uT4ax5UwD5bgFSy4HKaZnCKRnLJozxyupKjkMrgymCnJZe9gUdHKGSb8nF4J5f4QibEEnN619fZtBK14B",
  "key14": "5rWH9Wb2tj4h2Dic3eE6JH6hXcEUSkymq4dDRU3KdSUBKcvYWVwzmAUfgxN8oHCykLYtSt1CUKGv3vDKxB2Zpq11",
  "key15": "3bLNxmHskipaxreC6vEokEFUYJ1QfbeM7Xx944Yw3XESKko3X6k7VRMa4W9jM8mkG8WxLQozeEqu4rC74x3jF2o3",
  "key16": "2RB78kfYvkBFDUSJAvCW3zKtcNqmDHVox1hi71MXK22KLeK4Ch4J6mHdBRdJfwJPxB4bLaeC8dFtwchKWqrSZF86",
  "key17": "hJz3M9A9FDtJc4eBMppzpANwpdJ633qcuAZ1yet5BMGYZRKktTjyttLyXx7naafa4scT5EAuRBmBYshF2wQcgBZ",
  "key18": "4JnydRaDbFqQFpvmQr3aoR4YzHwvxckW5Dneae9pmt5ByKYZ3kjC8q5Kqdz4JiV1Fyi5M3LotpFpUk6C1fUcPyuq",
  "key19": "5nKDvt5yXmnbwzrtrf9aQNLZUojZFCCYhkCEvJNqwJvytJkcemCMbHVu9HRjdhmKnvux2cCpRGCTH562qAfR3817",
  "key20": "2tvuY1FuignPbjC8DZZfZNU5r6cJwixJjQkHp81Wrpwj3XfpuMHboWhHCpyaTsHy3M481LMNPA63DdGpe4gR21Hn",
  "key21": "4sUyuGFpT8mSbKsG4UMpevPy1PJdzbmDVUy7wpxUBXPaBc5qG8YXP9NHhXLAfUaPF7LVvivfXg2RYU6Rq9hzh16h",
  "key22": "hP2NBqc3u22xQVBDgdQ1dWJtucCJ5giw8i6euA3tW3jgXnZVoR7G8Th4mYUBLFM1NExwQTcke6ty4qm4o5x9iqf",
  "key23": "4TRQNtLurjGpuW6KBggdz3CozMs5tkrcJc88iWtiZzn6ZBLGpd1jhzZCB2fU7QGQ2nFpJ8ERhW6WgRnxSNkk5M3M",
  "key24": "4NnRj8vrZASKdz7f8k4cqksDQ2dSDfFxF3Jhx1wrwTvZi6GJmf9EEUE4WtaR8fvySRhfZ9wvdHdo71J8tjmxWb6E",
  "key25": "2MhZgNfbHCTkQQej7mYi79bNT3SKGjsTYRi6jhxwagyKsEZxsdnvBXZUQpFuPJiRSiMiMwnNEBBaNFQLexLpkfUT",
  "key26": "3tN1Bu5wnFAQLSbaDHoXiKMP6bwX8MGLnWXoc6q1XMebLDr6kvMcVPq8nffpMf3ntk41gsbge9eGajW29VuTVdpJ",
  "key27": "WwCVx4rrAgVHSdC9nzfB3j4dqTXr46qFXWaM9cPiUB4ejaJNpRzvoGpQGfQFVwsQ76FuP3U9fY6t7tMjBu99ikM",
  "key28": "46KWYxv1xuEUZviDRD47AFVwsF25Lqf9bskBhWMpaMov6Ak8jHfqzaHoGiDqjFBaM21nNJx3co1R8FWDWGUHFYeC",
  "key29": "2qBXcoDb1jgEFGMxCTER6VCpwYde9C3zqGDRffBv8w9PUhk1GA7ZLTwoTzruhStBKQPJQ8AuK2BBSKUVN1CoCEib",
  "key30": "3kd4393CS38Yu6bzwSxzvZYz1vhBvRAbJqNLsPJ1vi2ZNgaUyjgka1C7AXTiJHdRn7VhQDPJorg8aqaCx5oUsj6r",
  "key31": "2t33fpB7buuRUhFWXnDVTCbx5o6mApb3ZqP7DF9YErD12g4hoHVM2HGwRnXCXJA2ubMrtbNj7WDNbovzY9SZAWuB",
  "key32": "42BTvfqJsiteCZBQQ4e9p8itYFqPRvNUbJJz5LeVpN9icLdR28ZD4wBXpjWGK7S13pMSt9MnkpzQi847ttas3LsY",
  "key33": "3ekm4gTLqfdnd519nSthsBtD6CiqWYawCLU1jx6BfofX4xqheRgkLHHoDg8o9FHf78VESjNWqiMhn5zVMPgD4EMT",
  "key34": "4zVCCrGTBq54L1HSrNGUnhZZZHKdaTN9ohZKdXcvyJaNNWbSi3C6Nc3NU7HFaoc161tUfoYspmD9CBwg9ksXd9rB",
  "key35": "Urt9mcsn67HsweY8EWf5jpLHHykDFmXzfyHqkEtYLcKBqDhyWNBBQSnZ4ft3oUAQpcqXDmMa1i4T5iVyqS52jMs",
  "key36": "taYw1HfMNpxvWPwF3KVGg8RekAMYJAeko98TUK65kD3DnYYbe7DKKZ4NPis8D6UDQ5caReVcDFZaz7zwR2MU7qM",
  "key37": "4YYfSeswq1TUaXb8qebSj1A89s6B2954v8NUxCkztEdRGzNiH1BeQg8dvvSeZUmNd4q47SAWRDofbZuiaAykXpvH",
  "key38": "571WmALVVXiSvixMUNMniQP6ddswCLpur2E8ZDsVztHRsQikMn2Gp4VbVNvm9Wf5RKBnoEB85d4JfKVjqENQP1Di"
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
