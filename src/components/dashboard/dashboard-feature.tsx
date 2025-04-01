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
    "3sk2MQBPPncUdgLcy1yxhhjVhXd6wZN9xnYeP3Y9cbLqTc9cZipHRmoYMZsymiPoUvzd3c2gzY9U45GdRboDX2gC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xq1vvYXjGTdMo9vr75dkLzxoXfmF2zGoz8Vmi7trEXsx8SknQEd8FktWQ1W4NzqUzu9QkeuCufrnZYNCEqTUu6d",
  "key1": "XpFdxt9utxeym6qKoGeV8v915o6XzLo5GxPu5eiNdQ3kJ6PvhymdHv9ykQjFfaViLFiuDBiZC6bQRpD93rM3z2Y",
  "key2": "2fQ2JjoMnTtKus46gCC5sHMRRvC6cvLmbyJ1p4Bu6GtgbegTS9W5YPNwnjk3YGX7jdqUbbAssHUjw7kTjVghM82D",
  "key3": "2VXN4qj1h8BuN38Aq2LVYx8XnDciv5NHZ3NvB7DqvwVRUYfzjPXMCnURjcAo8eJ5Y92P7nt6JnKgyYFAWVtPfyk3",
  "key4": "3eZ8PZxPUFtgw3WTFkgJYUF8Y6nrtsRTYnXzVawdvJBdePio9p21ocHg6bj6UnRigc33Jkkq4WthrtPEb9pVEpLQ",
  "key5": "3cBku9RkKkF1s5icw8SZwCQtZgUnr6LjvJPFFjayrMb3tatjy3fMH2v7AiNRwiknexAsPiQLPMoLRYVBsxZewvu6",
  "key6": "5PKAfctfLjoPPxoANjdDAy7gFoEKgALqRSAk4n4Phtrb8ZVL37jZPQzZytJggCSzUtFVMmYQRH3ojRSbb2efUv9t",
  "key7": "33TVoE1LpgZw3Q8aF7tbKQ2nG5WsJ4sF7mbSvg5vHuLsJcWcqi4zsdrikZz4SCkJK1gW6a9ndXz2fZRwQk5E6qbk",
  "key8": "34BC3nSVTRnCCvoou2pMX5p5HEsS7ku8KFVNucgaMd5fBwYwZUYgDfyXGWCkLm3LHw9J6G5myzwiw8NMTNQA1CRa",
  "key9": "3soWV1MTi6yvnDJrvV8n2G5p43C7JajDwjszjMyx7m6WonGyexQKpnHeoG9L24WxSkSLVAPncmrEMqdX5XTsE8U",
  "key10": "5aWJC1LurxDbrSJncBrXTNRU4x63CaRnFT6BsNHnPw2ZJnfb8zyzKHn5GGKEjRxy2SNf79XDtkM5Xm1oCT68Mc5J",
  "key11": "4Bsuy61Jf2uNaVW4iNi5EPLkSM1CzQgXe4MPLnQeN166pegkweaHqUCLNh5XrX6ruZDZz7TT3n4amgtdQ8uHEB1K",
  "key12": "49zcSMp5gKYhQm6FUHfH1En3yQbQMrfmvc8VVHyn6WqhZ1XcXSVrCPwxhkHm97BN9WhfPSGyk1Gp1Cr3SNqT2FSX",
  "key13": "2H3fA2MWD18yCr6FAtaBRE6UyFsbkA6XkigCJkdQSDd4FW5UmTjUo7RBRh1pzQMKqPMMjbj9Xfzpuq6jq7fCXMkF",
  "key14": "53fbCSrYBxFoCd6o9vjNvQF3CEfq4pASNoPArCqRhaPVsR8Q8SLYsZypGcXXjYerVepmYbAhRkn4Ss62b1Lwuacb",
  "key15": "4QT7tpJzruiYFae14Jkbu6vY9amtZ93oxmZBq19JYaLksRZ6qPbEruMDTr1gjqtnWfFJ1Wdf4SnbLc1J2dQHXqRt",
  "key16": "4AjT13CvwS1qPz2YdpVNXWU36susmhGc8PPv8s8fRkaZWmzVYHguzpptSyRosHc5TcRnfiKx9ka8caHhEguGvDjp",
  "key17": "3y27sq2usbSspFRChrpRZkJSYtjZuCxY2aA6KJqVhn4vTdLGRoHprZ7QbkavD7ecS1AfVyMgNfGUgNiYyxjuxs9L",
  "key18": "3a4YYmQHuxpgUqx96TNdWzzfs6RQBTLwP2pP29m739NBQ8oogiEuxhHzQjeY5aoSo3fbTruz86oUWcWZA4HP3rbe",
  "key19": "2pnE8FUo2M8ZpqZHe3a1kzG6RixKcqzwPSEKmDxwN4m2BjG1jCWPWvP2V3oQqZskRpS8ATu1v2zyTU8aAK5vh9YW",
  "key20": "3L5AqmuXWPTaeFoisMoPnMapHmW3qJ4qQe5nnjwn2NLz9ghXwFJk92wsth9yeJgyLytbHWPZXU1LWGQUbpQFoVaS",
  "key21": "2SEA9ajPRbhcBG8wBCS2uX2pvhi7dveASNo9NsXRGmiPYo2quoqD41z61wC6KpQyiZgwGv4XzjuajqCwp9wp6KBM",
  "key22": "4FRAFQ3kt2WJb3Vorq9Zf1DqwxDpgPucUspcrgF78om7tBJaRgiPsFhKtLjWdGgFLxArfhmhsfj4Cz7NRAXCFqms",
  "key23": "4Jqf1y7s1KdrczZTB2hsKfzfGCsuMSUH1FWhMtWy6FL4VgVSuGte57f74WWGo8wzQg2Y79DsicYKLXCBDGMFUAmt",
  "key24": "246hhF4SzvGeQogL2tznd1uB3tR2HZmwXn8qZ8WtTMgCj8hPmxp6r6PjfZ2EpK5NeKryGPaVki59HtNjegJy6opS",
  "key25": "2ZSsDeVFoGeQrXQgLrCv5PbHxZUMsLeexgkbktwwXoCo8AgGYq6G174tumdW6coWXfsUbnNfiQZpCdcTAnwBjqWt",
  "key26": "3WHa69Ynhfw3hCb54dzYwN7NYwf4vhbnHrM35Q4uS3CYpK1pAKpeuyne3wdSChPW9TbqFJUXaPnZ8WYXiVd9Y1p3",
  "key27": "622rdMrA4LuY1ofoLoMg9Wf75JyKXc2pZ7gDNMVz9NofapFNQFqGWWVwyDvAo17TQxSySdKQZ7hSDrcYKsm6NG2n",
  "key28": "sNj1uqAX6972AoVjP7VrpN86zi64TVeoUkU4P93ctfnyCtpEcEoy49yV5AuZ7qLYgTvJo8Astf1kZk8hcBzS4rx"
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
