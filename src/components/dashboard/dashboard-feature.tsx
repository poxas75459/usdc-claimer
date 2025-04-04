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
    "35PkrKnGKt76fiwuFKgxxx4nm7YiDn2vXHV2tzzRRfVqLLD6g6fam7jySXccY4yFpLGYNgqeDfbvn5M8FrQvSRsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XW9fwpqLhUx49UewRGgTmNNAL2iyXnNt9FycjvGKuT7fiN7ZepDrJJzoWquNuUhoiEjRcznGpZYrZVNbeAk4Zk6",
  "key1": "48sem6G25qcEdQt8mGCFvEQxeNcjzFWfTSW4WZBnBkxP2qeDy6vqSS5MQQKQmZw7uLCWMyhVBD8V4kXZZfYFmhNr",
  "key2": "5ddK9fusijX5JZmyiSPckg6856mkxpHgWbCMZiQGKZzWCbHmSzsJ7JAJgxUNCS8dMGWsYZzF31MWHsAG4Vvcnp6x",
  "key3": "3DDwRMbw6U84CvBhdYgeZnZuw4mHcSDr9x6FWQiu29dMKmcjSnTxrhEGptmsRvhmFGmG55fdXQvVLxCdTFeK2K4Z",
  "key4": "b9ARe9pEsPPTMAfonK4YE6Jpkcwh2xgYNTVeRCa3Gy65cr4CjuKb4xYMiashbcNxkUdFtku5qhmc7wNWLyW9VrN",
  "key5": "xJLXLtE9zqKknbhANSKN6ETEDQJfqsHfy7VQijyNZJAimwsCA2KBkZgLuKsVwz2rS5xgUoLt6AkiXVfHSaxLso4",
  "key6": "2aY9MqyqWkVGie2vtE9gYnoqi4tPB2FfXKqa4QyMGxLDJMJthi921Zcw7UkynaowEXwyam1bWcpidB7Vv8v2P6eh",
  "key7": "5B49n58A4jwuFgjQEoMR3qBPHkkapDkVPxJUnXDvJZ7pWcamLoXmhkNqbMsKwkm5zpvXpjJUc64W5p4ZTm7iD1fY",
  "key8": "3WQaJryH9H7qPuJmofhnWHgjYUvs5a5h1TeW52XdvPVMmRRZBMo5fRXqBMNThczmLtiVxGqiGE8VFNziTUXf2Nzj",
  "key9": "53zQs4ocPcC8LK8fEyw59PKKHdLwEF8TBWoLe6VPsRdhu3252RwMWHfv87ixappjLaGeA4E42xSc7JbBUqcnWFs8",
  "key10": "4EC3AJA1XLNL1yWg9MgBy7vQaznonf72fLK11cpNBung3Kys6icQisv7fUfNjSpvtqKN1XN2BnDFzZ863b6YVbt4",
  "key11": "5ibY2tWfBPzyQzsUEe32v8YUtdRqENzMy3eHEfjF3TyDaJHy95bivr6XgKMo8EQm3Bh1mXVbZMBPGonNuM4sp9U",
  "key12": "5fivjYtL3W5NPP8jiyXm8f9NvyMWhwMm9zBtQmQTkJxEGHLjZiWKErkVhvKBSi2duaK39CkhgprHgXYJphSRZ1DL",
  "key13": "2V3Y7ZBKs3Tjio3YBefEnXjKbf271Tu5mYskS41u7iFVVGF1NdAc9KUecuRNFSDJH4ADVu8LjYeGQViJoHuLivww",
  "key14": "43bcgWDhg2qdTtXPwFgedGYopCKDTFVrkQCq6afbZCVuZVFoDKeW8QCXkdJeHfPpLkurqX2BzahJkCy2saSHMAaH",
  "key15": "4eNtFCGmTXYWfZDaJ5PAf8rszUa8TwRNXtedzVBRXZCYaPSVDJ1Cc85KwZkSoAyPnSZgcsa5njUGmoqhgDGmQLkN",
  "key16": "2c7w7uX4K3b7CquzsTfwfmmLFN1FzpZKieeVcPPTWDyhrZj9Qw4SxKdpL9YocEB4GjjW5ToAQLL7xKWFktuEM3ix",
  "key17": "5BKk6WgkKRrB3x4ska3M1j6yZ4p7se21ARwsb42KPUNxMQq7CxMXwNww8Tc2ATxRPYr7SPUWzFBGqShhY13CaaQz",
  "key18": "28oC4GtSYQ9v348tEXUQ1GjgfhpRiJUMszM38hNFVDPMf1pC3N5fByjvt2LWCxEAE4D83ArsvewY53GjByaw75JM",
  "key19": "2EgkYSiDZ5qt7bYtGdpp1MK18tRsQsDmSRrV3NxysT2w63U7u39mS9HGbqFztugFunc3jWGJqA5HJ1YZ9JKkWXdV",
  "key20": "5U6XJ2KHY5EHct69DnNbaheZaiXSDwQmTWTZbZqXo9Wck7TESHNTzrqPEtoPJwqVPwdjCBvF9wg7h9oAgeNRtobo",
  "key21": "3W6HLaePnSjVkF5kKDA6t1J9VNwYqWc1FVjTot4UHHJPUnynzYHf6D5qeaA4b72zSXH5DM2hja5zGxJ8KfmGSeCo",
  "key22": "5dXENPxQXSYqPASAW44nqTETbmC4peUVtYihV3Pwx21uUvEDsV3FCgJ3nveXEYfh6ASPCtuUGis8wFAXsRRoAvWc",
  "key23": "2uhpDU8u8gxUBXiUpDgZZmxFeecHKVdvgUFhrGxHwwZKu5xE3YZaPmkAvXFiXjcHYhchmucPVYif75urtSa1XwsK",
  "key24": "2XvMMr2JwXCt3skSDwVG3xSKu5BkQZ4h1cWKCQ3PvYMjKmqmd8RtATcH2ePfx3S7RR8rJnNCnrta4JFeRvGJdVpy",
  "key25": "3pBP4LZNwG1bXqWV9wDUAfLkqrgwn8xRfWwjZkhoDcVED2YpcYs1TYwDbaNvnRKMybhBWwyESg88zPsQ3moGD9F4",
  "key26": "5YveBy8sBMttekudXQd54DKJUqKRFQRDgWNffpVpZmmxy6t4a6SHVV6P3TcwxZurYsSeq3wfUEJP78SxcasGoKjE",
  "key27": "613QqitVD7nydpbjx1JDtgWbkUQ9yx4yCZV2mKkXnH1cCQD66RU1CNiCEYAV6hW5gYsE7vHkt4t7Lrb1fif2wsLG",
  "key28": "5BrDtEbRcBXvUANhow4cHNQGcM7h2bZxHZh4wjP8GLiyp718x9xBxBvkBbP7H7SaCkBW9HjsgxxHFzLB3pQLvU6A",
  "key29": "5V2uKdXV1ghFZjfTXqk39Ac47BjHoXcQchpYuGJmbBKSPh891Jj5ezsRZaq8zERh4Kucngsjw4hLqJ587ZX37EBb",
  "key30": "5uKbsRqDJwYB5G3CQp6nGg6jzUTsHXNuD3ZJ73ikDcK64ED9fKaAhcv3Sx3Wopwc5Dj2Z6JDWdJ1LGcuGSWqLGsh",
  "key31": "48d7rYwX7Mf7Tkj38g4aCEE6KqRVcJpfaKPWFPSopd9fYqCKE7VkjZcpMHy2w8s53tcHRuH4mJxusEwDiXkF5FMc",
  "key32": "5pF45TpB3GSHDZ4ZaSrXqv2tdyf4m5VsKnTHG4oHLj9kQZeXynAUioAAXweMeoxAmKKgSKwgpizPP2Ue5Ukp1JGm",
  "key33": "3CAPfFN7Mfyrynsy4QqksqBbKodkeZ2N73WeTcyxJWJCyZNSDthcxvNwc4rGfgzYBYTrenkMcWe3QEuaTausCWH6",
  "key34": "4pibaj8iQu8j99ab8Xwa1FGeRepuUgC1AMxqYRThpNoorVUn1CKws6T6oSvsxDALE5aWyoaKANuS1hkH5Xd7c9uP",
  "key35": "4HB1E21gBoGRvEaW7LvCmQ1zUtCzf1TH6N13qaB8uqBaD9aRboqj11jPR56nesyyfaA5cHrmAMsnwYGKnVkWDMbL",
  "key36": "RwkDRJPkuGHAoyLQ8nGr1zk4NZ11DnWM3NiaCX86GhWCRgxq7uijogNiGbWAwMwVXArrE5TMStnKGr8NvsjFQ4n",
  "key37": "35rRBZc11bF1JTwRULxtP2jtZr2896RkeCQKJrDsuUJAEoqyRvvc3B7hF6CRpuThbJaYvS6kxS33vzzg5no7weqo",
  "key38": "3oepp9F4JqC1uVE9pPDqykhN6HogKohaHQhVUzypB6fSTSuoDMCJoKBrvkBUyTmDN4UMufDAFadKTzKKaWsi1PE",
  "key39": "5wrDHHqR3Ck7YfeDwBLw2gAWMrPEY9zJ9N7w57pxW6LNLTKsRFBpc3KPVn7Pwmr64d14qyJfReLB3trh5SBPRviE"
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
