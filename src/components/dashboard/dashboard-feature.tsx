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
    "4gCjnqNoKbqAvxbddr56BPpzV94mNiw8md9FwyZd88CSf3ovaC8pRRuJiNpe8xYGtkUzk8UDaPDMYx2roXfWG3yR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hdvxN9p1S7aufks4KVGfqocuZ8pVGo1GfM9rpiCzio44oVsZPJPRTvpdyQkGNKhU9xNvMcpuPm4GcBCnqKuuxH",
  "key1": "3J2y1fqzPBQmsfo38yJdw5kjwTq1LsiahZfCLdAhtuFZFcyJP3kBYSzLnnw1g7JuGWjDAFADFA7ziWdgRvkxwLLq",
  "key2": "4TT8vnM7mRoo9AgCiSm7Bpe7xhjBQsNbyNtDiaYcAnibYNytvCq2fJLmo7oou8M9novR8K4GJzdeKJTNhc34fP58",
  "key3": "4qpfEwNWRqsveVStfdCqg684rTmMfke161LvkxisTx9waZsziZfFhDrvzyQgGe4jv51cNNLhjaZbquaAKLaPwGRs",
  "key4": "zvNqqFub7y52jDRUmSUAZfven2hBtL4Yc21N3nXPHmkkquCtjqCseWjeZY89vfxZcaUnfpuX92GsFrqb48jrSPp",
  "key5": "4PPutsTwLPgXTrk91dt8ADq16ecrPmu9cjRbznSD4vaHRXdTABj44s23PYnJzxbhFc5Qx59fjhNKR1oq8uXXSP8j",
  "key6": "5ba12f2TtScuxubkfhQpFH7NG6FwVPU8zDW3RF2TaZyAV8qfbA1VRxXqYfKZqmzDXRk7KWBNkeKE2qeZYB1UxNpV",
  "key7": "TzzhBsH7RebjpEeNofaUFBi4JHepLg9DP7P3SAbqxBSkEchacyN39A6Epavp4zxCn4cBFzGe7ADUaRFNuxqG5bC",
  "key8": "35BZL3BkmSsXNibaZj5fvd5a698psuv93VXuH5vMjnRMCWwAMp7th12AU3zBrhdjfZhGr3vcPwZ1Jtn6ZQZMBhn",
  "key9": "ipew6A5SfRjx3uMDNpLFVaaVLngcibHnskk65XQo1zvEKxmstj1anAFNAUpNhkPgrUZKWSC9yj2n3EgGg7U6ZXD",
  "key10": "4jpj6p891pUxc7tELGpdE5D2i8W5zAMyD2hsQqnsRFy3UZoToxmAPJpaAHCVm52koWtDvmdimkmc6bbKPRWZuAe9",
  "key11": "36ozBxTkgA3rNb1ay2x4A9xtsZJrTH8XjVNPtEYK5YVZcz9scaLbLJXPcptg98Jvj37UTuopToojBsJ75hZpZ3JR",
  "key12": "5AqKmayaEejpsuze5ja43ZeGiwzziCq8B5vcCLM613aom6BExgyNvq2b9ddox6qzez3CpwSSv6KDbjLSLfxp8ge3",
  "key13": "C3YAMjkMU9VqUHA3ev9n15TG27xrgCAeCvhTPBEA65hqmxBDqaX3PMrH2wbcyYYMaekd8mWvQSeDevsuML2XSSZ",
  "key14": "2aQ1NErv8sRAaR4TUgQ8aR4TxqHfavHJWR8pyygs9SLarmdxpZs6KPBKnkrmcpq4sr2PaEp9SWRDaqmeMiUquV7Y",
  "key15": "2KumqWXjEPWtb2snG1ZfmauuAierja5XhpKs5S8Rixg4MtpWqg8f1Q5CP9AWiDeEN6M6gVKiU7tdHELYVScAw9S1",
  "key16": "26rSyXDmdkGVcVBJ9BKevAPY3NSt1xMJMTtXtxLmxstWZXuV7vXRKeFhkCuHJkkNFFiiGKywAv5H2TGm3BjFsF19",
  "key17": "3u6vu9QPXBaKhf3fM73hGkjW1Hnv3Sp2NppYuhuXicV63v8kHszCmVJTWHL1jUsT1YtNUMmn3S2NUpixmtA5Cm9H",
  "key18": "5YFz47P7LNvfnx59PCc8SZnBqsKwyr3m3Zgt7JfwRLr6Q8YGfBz8WCUTK4bpPjyqJaVzZHLY5uSv7zRw5P83nf4S",
  "key19": "r7zshAh3v3nzWKvAF21iajHEpx4K5Xr3ZkuDbK6NZxVmAUMwCt22Pes9GoqmLpyTyicEELHw3eBxfefBDHnjXyJ",
  "key20": "3SYjNbReqRe6DdXAc7gXRbo7PK7chcQn3hmaTpaZR1q2JD6teJyiHXnXtJPBZE2QFNA8JMkACtdq367uNzfv1Pcq",
  "key21": "3N3LKV5aiCd2jeaaGvigeHJA3unJSZdd8CA6eaazcXKQkWrxWzc9dYWgoYRXJCd3WPMLeZTaxNmZeq4C4dXkNkQk",
  "key22": "25awFDe9QL6bg3YjeaMkVz6aNBpwA8bcZottRHPJZvg4AU1UEkPS22ucvRZRZacmi6awWhq7jkxk1ziF9ysMmwak",
  "key23": "5kGnfwjbxiP3QkAy5C6abviJQcRqPRvWBQEDCc6WjM7M5SzRFTmHsMTHN7Cgnji9BzGVPSzFKoPBHpvNu1RQBkdq",
  "key24": "62KvAxehvFYyoihq8okmytvXmfuziSim8S1aQuBM7EB1JFUu7VZMgZA1P84JQe8DHjfgmPhMTueTCV8b5NtLpVQc",
  "key25": "5hzsnY3E7naXNeCqUpMSNkE9sLbyEyPn1Ge9ZpfZ8FngB6xESDidKDKXBbnyXBLmXsBMZfzhL1DWi1mPESatM7Ga",
  "key26": "aWKUGTxeZ4B5b3cGrA1m5NsdpDt1RasoNowziba4E4rkNeMT9wosqNE7G9SgrQbzhqvshRk5UhA77Yp5A9poEJd",
  "key27": "2jpd4Y7wkrhvSCumK2wBaACpSiPMT3VgBYzjmJQiVHiYWegCkhEwoHz7RXWjuy7gERFHRVkfewf3LogCJHK9ZXuQ",
  "key28": "526q1chnhpBgLGaX5AmNh5UcCSz4qD6dXMWquNRwMxpFhtYjx6K8GTWrDJ6xzmnSpfHgNdho5yLbabUxmE14u8Tm",
  "key29": "5CEH3dS8LBUHxN5gkeR2vwBn3y5aRLNXw3LGwau1WcRme74ojvVbGQJeaiqbdAWbthbQj9Dkg8ibfB7MHqY94W1r",
  "key30": "231ZGM2ofvtnB1FFRz6z7iUJuiMyRQ42nrf3sEVEZFkQs9X5n2w8pvGDbNESPi2LQ7We5njazMpoMJvzikTxty7v"
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
