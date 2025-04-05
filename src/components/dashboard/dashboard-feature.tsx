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
    "2xY8ndbkDXJxWoHGXt5tyYVbQQ8EDKN4XfHJpcepkLn3ciYvobz9b6Mejpd17Sqf6HXh9dWQWUWQa6WpBjRHbwxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJhnZ1SpPJnb4FFzQFWMgU4SGucQA1LtqdfQ9mTFQbV8NE8pq8gvrCY72fxmHkWZ2rzhCDBGeavYv9Y6cwwB7ZG",
  "key1": "4koTKXNmgXbfQnd5HomJc5rA7xJiU15hdcGME2jcgCHafVh8Jm4NNFCdmuZPcTgiwooz2Rdqd4c2TS5fHgmMwini",
  "key2": "2CUUp6CxfthkhEzUgkwwDZbFXHANGX1va11HJybYZ8ZWfgyehretQpG4okzr7tigBABHMpw5U9wHWXJqLDKMNLoX",
  "key3": "3UrfHTpxvGxn9zFqgcNQgqY6YHTpfYhi7esBS2DJy8eF44q3ZVMGk8ejRXJ6x2bBokNpMSsHqhYQiM8WeoxzzVzy",
  "key4": "4JTY7fKnQMjnhUKhZU3bHgz8aW7k6wnvQRwV6jaF4xE9UvG3A9rqeTvr4CL1GDYKWC863KeSqSxUFKa9L1FHoJ6N",
  "key5": "S1CtdaGU96u4q41pQT9MFjZzCSSSJVSuNciXbCD5WSgihtQUJ4BHAjvx4uxo4WiMtDr6XHgBSvVq8y1Q26i2mwo",
  "key6": "45mf3A4Uukw2RNyV5dULKUQ5LE1aqmFLdNcu6aTkqB7kVHXrjWe4ngezFHUN2hHNtdP5nKuGEAPHkfChPa7Nhy7w",
  "key7": "53EgUa9acXFwZSSDw5yhFnCPytohS3Yr5zhQiWgN2JswxADw3EZ8oAKX6KGoNUSykm9EWYqw4M2pk3NE2hrH8LJE",
  "key8": "5ekJovuW8d5uW3L3N4HATCj7SDNQFJe1qPEsJxnbKTnS37CUiszyoakWWR3KhSU8Xn9gqqE4tVzYEHuWjgkktkXa",
  "key9": "1gAXj51RCmPrHf4sBPMPkmyhQCEtgh6ed14ifBG4F7edk4YrFJaoakBiAuWmZZToh4vXBVzhizR24DVUe5NjDpa",
  "key10": "4wbf7wVSPJFYAU3xBwqKBXyWzum5raaKw3fsJb1LcsttYqLCCTBZFhyge5dtvJMr33fKK5hLXbzgBLj4pzPkxJ2r",
  "key11": "56VfxbyhWYEG9QZJm1TQsTQKi4ddaxwUuP6q1vqSbhRNWwBqTvWk2rSwY2baxkKmkWNcYYZVZEbekhjX4ZmSnBBY",
  "key12": "5CivHvfAQipZaGDNC3feUW3aSi1UWDcFMvgVoWewNCf88jCoLsHGsdeCwLAN1Mbxtew5tQUe9Sm6qy1aGBkB8S1T",
  "key13": "336b8dAQnszfTTtegsye6w7NcUv41ZDcUpnjdnHGmHjj2AfS6LSYqLCDXXkwvHD8etC1i481Nt3aHXCg7SyRvKmE",
  "key14": "4gRg5GixLyABRH7NUZ9SfwXcouebsNL8YC8wEQk3GfgEgxfDp4LQQWSnYE85VnUd9gGvC6EVsg4mncy8snPCfaQS",
  "key15": "5EqyC8bSULWhreWpUyaHz4GMgNN7ZbbTpHCv789gz5H3CRzLZ5PgpRqtm7Vi9Nh69HX9dZqWfuuV5CdEjy7i7YYb",
  "key16": "2i6NtDkD7LB7KJTyeaxJ2s5Z8vQpZzpVRZrkHPKcYrzsZjoiMtLgUaZmtdtKuS2nZfjz3RmcgTtxhybcy9Nmycom",
  "key17": "3QmtJ4pmpfp69WceJhmwn6Fx2SsizeHo17sVsX6er72VJpxkfUizJ4u7QKESBKuzYGMQt55ZiJvMJR5dVDE5mCJ3",
  "key18": "4k6cmtaLZ1TkEtRGvX2GftjKE9Sqtva5UjHqRe1HPtYDAUvd1nhvVw3ybHDVeQyGE4iu5xvQqj8qfy1aQYAfCUNG",
  "key19": "UXM8ZucnM1am88yDWtk6EhompJtqFMXX6tS1BDCBmeHXmTQbmyQvZpgRMAh2UCn8EDPScWrhS9UrDTNPDhJPxpL",
  "key20": "2op9AbvFEtp7RuqP1x2855tEKpzKzPjEstBBk9MoGnkRz5J1ZThTfHubKae1RCvocTHwpRRcd4XebRdVBY45wcH5",
  "key21": "4Uapq9rpQgPyc9VUcqAXxd7T5E17dr8ZSLXVCcDmsEMjCNgk5hBRWB9ApWrYQE1fw3hcmQ1LNirEnEVQ7Yx8vj6C",
  "key22": "4MjdgBtZWuR1VeXX1XEDSzS73mzdsgUKSz6nypvtoVKekor1Xcy15WpKfD8cK1ksBM7zBJbHFsway8GyVXULfeAk",
  "key23": "4t3QBqjMhGAqtsAJ4Tg8PjWpYtkMtVVePsu7V5A23VqPGBiVBy8sjay1m25gzQ2SSXnF8ZsdgCvskGC8FP2VUnzh",
  "key24": "cPYRbGpBCk5DevAfJzGeWagH7VNRiAaiTVNwWfWQvaPDnnY3BYQXuWBxydhF6v1mW3QAJHA1TNwNtHKrb42cYrq",
  "key25": "hUah1aptH6SxbtX56hNr61GjkA61F4D7ksCbr6s1sTvy9uNToZEvnyGdVBvwcaf2z4ive3HpRAyeEqJquMEsPTJ",
  "key26": "3iYmYCYA8jQrjxBxwb4rWgAMELNZKHRnFSYRLNtJu4ZzrPBy1Xo8xLUVeDjK3sLfqxr861YDU41ZiX6P1PfeCphf",
  "key27": "4V1LTAYaxrLUBGTqBGxuyxBGsqDA37sNdpaQeb9hskkP88uRuV5nDNvWYcardtkthqm1MbWWAqHL9A3cWGAsA2mt",
  "key28": "3sowgWKFjmn5pUTHXsM4bHXEM8rZsUcKkGW5bznX3oP9zrmw5vXMFJGKKtUGvtATjZZbG2PBWjCG9zLirJMfENTW",
  "key29": "7Z4qumRuxqgFcaTq1y6bFioahGc4SEcgmqYwAMAwDUq8G3yqyc6BEwYFs6MuK2YZKegMyxQ41dopUiCvWBmBUrq",
  "key30": "R5iwCs6DzBxxNzEtuheErYfDhqKrZEJsB6D7sGLv4of6oHD8FxPt4GgrQiCA8psZW2GVEKojwsacez2kU45Qt2v",
  "key31": "4SWLjB8DQvu47uWe6KiLw1KNPyYoPW2eN4b1Uw9dy2ssEF84vTmyws7hSDoBaDjAKDvmiwnpK93N64YAzUSDPZ3C",
  "key32": "R3aQCVYWYcC9Z3AoC44VPwrvD7wktaMNY5DCHxP4M2XGM6b5GZMiwfB6YGMzRgKtQATVmDL1Q1JoFBdu22gwiqX",
  "key33": "5upxi1qND4uXNj1L9A1tLcZ2nRRC3gKqVRuPY9nCYxwgffJ8USYR4DW3jULKbeXtHXL91icgTfj7eRXWhpZ3jZys",
  "key34": "A7VRtkRthkMbXstesbLZuF5sjsTw9KncwJ6TkTyE1evnSuMvm4u7gypZEm8PWsWmFeqb1yAFg5v9X1Pe88DxHqh",
  "key35": "5h4EXULQpyjYYBzc6etbiB6MBhzDkjavYmsZtt613aTwHVBdrV13NTJj4v59LnmJPzogGNbPNacvVY8mRaSKY3Am",
  "key36": "5TW2UHrPbgsh4uLLyb7HxStNd4RjmkATpCqhrmSDyhz3hGcLRxmjVGA5M7Kbf6AupMbqu1xePfKGXEEzz3vQDnLG",
  "key37": "3Yj3biDpsuZcd2k48ZZjUPeCRcbqQKhGQzfqEyDzYynfZMCBxs4ohszEEv6SEcZAJuLCA21hueCmeWrYGjJUKcRt",
  "key38": "4dCKkccryh4dU7EvVr5TNVYyY9sp77AatgZRk6EgfjE21NfBcU5Wv9ahvCpfZtTzamZRYJhmD2qoSe43vDmYfnnc",
  "key39": "3GxbPV2o6BAQzt6rmmRkdmSrXFXy5crbBoktVHZ4ZSpzuKpuJNhnLsNBgYy561m3k5EGeiyiqXcnyH5RiPUYWNQc",
  "key40": "rJUF4jitsnCyWAafgguhuuFsVjLwqCkfz6qhd3A5oRkRFu6at7m4keS74D9i6kMeiMamDAEGhwovCSzTHe7gRd4",
  "key41": "2R6QVxVJJMVCos72BB7QdWv8arGqSePNojgvmzquAHJVtTJEbGJpt5sm7hiRex4HbguMrxmK3f2Tzgq839amb7WC"
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
