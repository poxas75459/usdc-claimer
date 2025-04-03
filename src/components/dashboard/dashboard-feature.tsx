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
    "tiL6wBfv6APDF5hTMJBsHMbvsCqKAPXsA6SrBpVGaaDynfF5BkbBA1gMqFNxHBvdbQ5LbV6XkpiFaXCbyVhH2Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p6e2SBdgVggGVF2Q9mSxRtosgE8oWicbcfcqZhJuzQfCesDjRV2DoX5dNKEEACMMB9855Z9BESkg8fAqczNayRx",
  "key1": "3WUdLLkeUYWYvmb44PvXgBu8JhSdVyJVb4dNaNpEVkzKDpHi8aWBPGiW8TgZnP8M4beGfn7hiTWuTaTFCjf3UuXF",
  "key2": "3MLWDcFUQH6sxyBaAiXLaoGRLXkMQ7z8uPrPrqXPHGhHSuTqGXteCh4fnMXTZkY3Jz4s6YQ4pcahgdne8tFCPyBi",
  "key3": "ihBdXJMrtSLZCNSgcXV5adiYYDidpDm1zkkAyE8ieyGAZkh4BcZK79Zh1QidpV7Saa8iGp9cqEYmiet5PYiBqri",
  "key4": "4FzD3hcZ1SqSSis6xKTQhkYuwN73tKQgCneuNZ8FzfqBKBkM5rEw6J8AwYy7gDUQ4V8MqroG3wHyiBjfMyS2vCff",
  "key5": "2WUp5UvtyndpqnbDJSCWZCcNNv8MQBg5ZNDgsxVTYWfMZzETsQDwyMQhD6yRYDBnRGCTDytiTHrzKKzvwr14zUu2",
  "key6": "4KuqZCvesgr39kgFk49D8HbQWPapfu6b97RrRoeiUf4Xi4Lm4DUVqu1KtcvuHCr5A6SSENzF1CA6JXkgEcvyhnoc",
  "key7": "3Y3eST73VeUaNFAJvqje9FjjNnncqAtAQey6XaVhSV6dc7hoBcTPR9RM9WyZQVDiZuC6tr2zvyDnbUP93aD12GW5",
  "key8": "5DqiWfJS5FXTeGz8EK9JGZQ3B721m9LeW7ZfGEupbtyLGNbgRn8ySDzPqyP8UbdZMfcXJEo9F65qJX6Xx1aHjxk5",
  "key9": "vy2T9Un18zCdxJ8SBTT9BQyh6Afs8aZDiqLemjLjPv88GxzcvVERfox8meuPoUmxpAdcTrMsE9r9yj1VGbPdVar",
  "key10": "L9vAzkUG82C2kHJ5SheX3dnEcCg9DC17FxdnEFiDRr7gULC93qop7ZURLsuAk5xbhppv4KtbgtR8cdjRYnnmw9z",
  "key11": "gm7UBwLqEaJQ2PMed6rjKywHeWyVGWXrzUpvLxmhuR8crCmNPmvjSyGzh7XHQU1YEeBWaofGwYerCbKK1wJSuTj",
  "key12": "3jc1bJyJHNR1PztRgw5P5ytwP6ui18384j1odJDQMR2pnJFTbkQiHQriJ2UPdbUU5BVKpJjibnMRwtFt683KYvHp",
  "key13": "26GjNRnDJ9kLGs34zH2HLeLoMZwnvq9sXCB4GhuWdBN7H4GMmD5ZkTkAXGeWo15Y6bmSeqzVrg6Vr9EmuxfbsHAn",
  "key14": "x85EUEBYft1tigGMBQ9J5RkbfKZc51NHjbkfhsV4wPq5yJJYzXKPu4Z2sGAfcsBtxjVv6eafko3fuemPPDiiQVe",
  "key15": "H9PkMCua3G6hx1N4YcKdqM6o43SzftK2MtqbPSdnP5KA3MegnFoL7scxaitE9Hmebd6jt5tr6QUYWXa6R7bRTya",
  "key16": "MxRih7Ev2zkGd4C2G9BqtwgtgQGnR3ZUaPXSQUvV6TQqjyzbgsFF8GzDdPN4zo6KkXtJBGmS5fCwC1mW3St1mc6",
  "key17": "4cc2UeL2MfH9AS7UQXG5FtjfGyBkZ6Zg32a73YsnRQHJw6K8j6Gcq3d3TTFzatuxvbkmytqgFjRAQ8zTms5VodNy",
  "key18": "3dckHbAHPp8cxuFMZ3M9XMY37yM38KSqHNTmYravbMALbtzX318f5r3TxESWEtmV1wg8ALM66w9zAWSuyFMrs7MX",
  "key19": "5Vf9sKJ35CxZ4ihFWtNgvvp6daPKLMHREzyeJxeT5TdN88raQ21sgwMBXgNg14YnYmgFULTsX49BrjLzV4dJXTq",
  "key20": "2vv5VGXLLYBBmHhSe5KQKo3F2sXL6KBHX1rRWVkmmXwkXF4GShJ9N3kDmscDSRopGpT7vyH2pqnW58u16bbrd97E",
  "key21": "3EhFAyiWWwQHG1ssKeuEN9ejJfo8qhsNeYbcjY4tzGt8N8NxbNZK9yhamWaUthLpowfxfGxcARtPtM7tZweJshBX",
  "key22": "4Q2KJz4KRL6wPgAYyHGfQFdnTLVmooszxi7axmUzs76Swu1w2GDr81PeeQQdKLiuU1w2kBDxhnsMpWxSDv7PX88S",
  "key23": "57tbpD2pDCj2WMP1mvaZREh3QVk9GEj8YUxrWgQm911NuMGo5qzqLRcGiK68UGRXXg6DUfUkntbL6H4Ueq8EDv7t",
  "key24": "4CBG8K6kwaVVMDHeRizjTqBeFGNdaXEwmxr1MiM2BhS1QqFtZA7S7fsUpqNcXujz2qxyaUZGT5rpv2S11ciJsDks",
  "key25": "3GCotyMR3kAucx8SgwL7RgHxWHPqrcEoRwbMpKLhkGBSVtUJqLUurjVkcrubaUD4gWHQey3JjMP5GdVZyp8CaPLe",
  "key26": "3wJiW4udJeJ2VPsAPAD6ECU8VGQVxAypFGfhn1B2itZqRzvZqocZ8SQraAPFhTGWXaDqh63gb55NHCnkezxJWYKg",
  "key27": "5j525oRWVo7XJXHMcLPsvajN39Tpc64i83AzUTaW4TFokw93U77NVS2DW3QZMytDbjr1RNu8F13WGMMXb7jzfZWh",
  "key28": "2ZmDkHde2Qe64qcNukbQYpJMMu3BGUnC2CiJejhNbvgKQfMHhdY2mvWk5RVWUqdtYZbhMReQgLA5gniU5XozhQDd",
  "key29": "5ua2kwsFp4idLibxjG6E5y8h8h8WYgRnDMXaTZUvqrxan5PKBuqgg2kbsdzTKaUM77xhmkwwjzQLQRZeGj5hm9yV",
  "key30": "2zQfpyhT6X8zqHNuH6AzZaEsBaqSFUpVZDPegFCxpHUPpdu92QV7Hsd12ryWkGKcUdiUu5rDNuMs8xssb44Zd6nk",
  "key31": "4KGVkhBB1FyVasMr87GGaeZsgT9waaXacJAKMzxMXpPWN6UmMpCiYuRZsxnuqUBpmPYTmngVMVtQo8oG9HmDG9xy",
  "key32": "cZcSYm4HzhK6ZYqTbMgZDJH8hhgUsKLwGJRjkmY4YJoVJWH5Py7mJTd2iUgSQfgUkYZoMHGGjZwnEf4fHhW4QBy"
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
