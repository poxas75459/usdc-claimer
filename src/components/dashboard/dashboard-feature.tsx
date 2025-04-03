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
    "ngouwF3jxx9GTBDnK4sguFsWh29HqDZSjtNBMSvWxw2MovWXnzyzB7t9fT87ve6i3Fjgb7kabuFhyksd2iURJov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URnDNupr8RxGJtTJ6P5gqQr8SUKMRC5Kzt152tv8cKRkfcbzRywHcaBwpTqARxsceCAyzcjQVuGeD5VRkQf55Nz",
  "key1": "mSuuCSVdZduaTJCJAMxvRXWcnivVh7ywHcRcL4cyQjPQCVvUsGaEphprfeiie1ZrAd2nr3vVAg3eTqW9nV7ACCF",
  "key2": "2U1EeVETsbSy1jazMWTeemEgP9E45WypNQsQRAmTF7rUtSfAkLaJZciagTTgCNj6MjfoJBqXErDLUEkUhuDgj2pq",
  "key3": "5dtGxdisn82Jma6HP7MXUa82ab4ygNatnxKNAcGxYVXZK2Gp9dt4PfRmuDMoNfb5VLecpSXdyEat4rA8vfm7HZeP",
  "key4": "4PudN9WjYFukZ1NFTm6GgBxh34NwvdD26mauvsTx2xqs68nMiUZJpqjeDAMmMxQWyXaryTaKKK4oHZetsn7C2cqh",
  "key5": "2WVgSr9P9XikZ8KqwCoLTZYiWzwRiieQKowfM2To86iTK3VHgE4bTpvkspV49SPamYUUuL1oSiufCmUv15uf42S3",
  "key6": "5xpAZoCp9ccPi3Zs9JFyuECW487UdjowDAD41zAtZwEeA7jUPu8PRqXLU7mmM7e2WMCRnQNgXCQfpPLYbCpgDPAg",
  "key7": "3jnw4nVZDCZe6vrfSTGPBnMjJSv7bBqmK1CS9Xhp4JZcEXD9awXLa3565r25QL7ZQAfNzFcqc2AELvtCPPNFtuDK",
  "key8": "y4KDAqYKWkV9VyhukvHkVZfAna2x2otBAv47KcpcixbY4gZCSAqEenyToQfGyryvxT621XTFv8VTX7GJunG9cpp",
  "key9": "4q3TJ9juTWJBm2VZZ9mRe6uDbHfcaZduTD57EWuF86EMt83XBhxUE77UyN3zkbgFAcc4p4awmLCXrXmXseaMymUg",
  "key10": "3V5vsZRWVXSp3epDgP4Z7aRsdufANaZpH4SgCp7bnSpcQxQ36vvzhto36fhJE23swCrttaSGMygj7mAovErDoSTT",
  "key11": "3R5cCugL6nTsSXwCjV9GpJxixKsHkapeRHJXw9h13hf8zndagAj2Hf4a3vEwQ4sKYJyZCVU8qwkSFU88FCXuyAUK",
  "key12": "5J79GDSsFVkK9PXQPXegVKdxiMKyFgGmsi8mJ9kEf1F7RfECD2hERrPpKVx8Nw6cDPoLDxGrLY8VqQGFu4W72jDo",
  "key13": "2kKRQQjgHSXRS5UxYdFraQ1LdD1XQTqmtRJgSwxT6F1hJdHV4gtSotDRsUM9ijG7YvbK8dtEhPGtRysrF61dL69s",
  "key14": "636zDasSpnhh6afVZVmrg6ToGrCYyez4FmhWKcKCcMWd5QfdM4S4LzPA6eiD8DygxBD7HK27WewwxiV3PUYtrkyp",
  "key15": "SgRaL2QANuoLozrbobdNC2pDgJb5rqB5NeoxhxCDyoNhbuAzppmqHR3orCGwuQkTJJ3tQrn5UMkq1dt2YjdKFZM",
  "key16": "5pEppvnqGcEe8qBCBAzeVpgr8Z7W6dVzbeTssNZo4NXKHWbMFEeNhHoWBkFy1CF7rAWBnSGF2VFtK4mt5WYiYNuc",
  "key17": "4s5irCQP7PEFWgwV7Awy1qpLMWgfqpYmYX6dFxEkMGUR56HJvkz3qYthEeteo7F6MbHPANBhhf3ZsDA54UfYZ1ni",
  "key18": "5E4yCg6udxavnebfmS1yW7Kh5fBEtQKQ47LpjfqP22CfuZwFfYuGTCQWDbiXZ7NSb6o3G5seuyjD8nQoBGcBNypN",
  "key19": "4Ks7vrmhDCNdA3FCgFmJ9y77g7z7QLUDNYhgpGDLw71cUsgEJWE3BUFwcGvcbgKLAS89pWq3RAeiuV8ot2rvjAGL",
  "key20": "66qndbjYZ8ajCkeJGEaZy7ycqYdTSo6Xxip27mYrE7ZgVQSp6kqkhmB6Q6w7BFZ9ZzKbj6av5GtB5rhKkwVAKe5G",
  "key21": "3FeiZqj7Cf5GcxyDd1Y5cRuKXyawH4d7vnaCwmMbXgVKsY7Rwqpmbgrhw6ePWk2QpNdZDSZShAQeFQ7esHKNAKkS",
  "key22": "2z3U25VPrSTdQmwfFxDuKsEgb1ULKGhA6tFNuQKnncfsph1t58UGzgyQqsFSkNm9E7g7GTpfNJaX5RWMm1vR65i6",
  "key23": "3BpwLNpYDkTfABrWroMiFmz3NtxaDHiZ28tXXvCz52m3SJhUQoFZQVAUxMHNx5NpPKThpNxV4942n1o33xit3hqx",
  "key24": "3QK9yDZzU27onefZ7hY5y9HDMvmAyQ1pUX5swiFSMZQEJDosrLJq29vspHkFdMPSbvu4sCPpz93dQhVkpXYznhsv",
  "key25": "dmymZysjqJ3KLth7HUDxy8ubNtoAsP1MkKyCrw8ZhZVkhVTdJ7jg478uAvQyvqgFjf1X5ogWLfUhGDv6jqHXMB6",
  "key26": "5UThfetgkXYRMgc2D2uuvP5BbwYzMqSrYBHkJupL6NxBhqciGmnWEYEUCq479UR4Hpn83KyC7CTgbacHD6Sw7yYy",
  "key27": "guZ8pbXCXdLqW7USdcwCDzRPGUc4Nh4ehi7p48A4BK1M4as5PDiDunjdchMBBzWfKaLMcK9PQPnykAe66x9wGRA",
  "key28": "5mYpJf3pSF2txuF7K2BvtJk1yF5znFxT5CqBkVWowtcCvNuYdv5Ro18YYmBq75u7Yebu2g8FEwQfjbBCrdvaAa39",
  "key29": "46RYqffX5xZBbc2Wcd2k4LiYmtBkSmc7JnrjJKcbwkbY4BbUZv1TFwS6xUjqVt7zQWUDasJtNmNcXhf9UTNQWDsJ"
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
