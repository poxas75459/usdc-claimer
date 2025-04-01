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
    "3t34CGakPzenhMpgerxkLMm8x4bWfn5Zc8cX6rH5yHAQLPNJa96JsV1xunqkNSns5Y1xGVe8G7yNeGHUFenyNY4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGKyhjeC7qsGtuLt4eFmPaDiNgyXUNe7NW1GbVnRkVLLPP2mqJzqJTLyLWQVsHCJ5cQqgGGqbYMQqFLbbd3cbNZ",
  "key1": "7ovhW4VZNxewLUgUxXpp2dNdUG46unpDyQ6iLXXJHfEP4pF7fBZVuC3M7BVhtrxXRmbeuDBVoqNEphmxq4GPhhh",
  "key2": "3fR6aBxEX5vLHikScnWTHVkBGQddzKTnNxzyBibFfnUhYENUbt5LassbS9YWsri4VPtaS7vqtmaD1AD4VgMLxTMe",
  "key3": "3ZUcZSBDKswWhBBm1cn81Sn75HsvqqZhwnQsxDZm9pLmhytj8xAF2jFUHwCyaHpjFnv9RvoMrkEvX1RDy41zJAWX",
  "key4": "3Pj7mNnNyF62iGVUZtsyBwvSWvTcixCKwpWX3SpsaFSwa1v99Zvkj2ZkdM33tCxFe5tp71aBR4mpveEbMbwyc7Pq",
  "key5": "V7nSQgVEkgARjmUSKtWsUhEZbjCEhhNQet3Cq9Fi6215hWtukgaBNwmKT2kKRMPuC1haSfDT6C7BbVHzjLubPnL",
  "key6": "3f3iEtH2tKC41BferzRewc8PuxAU98qd7GUZiBCkRT1N5gNNZkSgEtf9WPZMdK3tbE4vd5XkYqFYJQrSmXH5This",
  "key7": "2HMYdNmrnqa7wjU8XTTNEbSXSi3G3Q5GZGL7JJWJYQp4Spc9oEgWTWzf8mUoEBn63R8MVheMrJ2TXU9fsu4Hr7Z8",
  "key8": "5X6ZeaJYewFgG1DTmqXfdkLAQH1scPiSWgZ3Tb27Kqbdxodahr3A72JgscHkLEs2Ve24SoBeWYhYvYgXGEHM5yiy",
  "key9": "3VGMyPEz8mNkdLeSDmx1dYMELzi7ZAVb3xhKZU9BLizSKHQCgmx8RfKiNMnPXnTopi3iAWgvpc6dKarkffpAEMw5",
  "key10": "4WYkb5LZovdmx1w4zmWr9BcGoxzU9mAtqRjicDU9gPWeskxLZEUJ2QSwXFYMgsFMFHTWW3X1nXjcxFf7GQVKL5vH",
  "key11": "Hx4warXeNAGruDEdSM5PVkp9bfeydbAsoMk5HiBq4VUMWkNDkjfQAQXR3wmdXvnk6mXVw4yF4n1FnA3PS2n2YCc",
  "key12": "59RYjab4ZYDcpr6ZEyYbbMraVmveZ533fLCq5kF7SsPQXUpfWnYdpcjsDTmcYGDtZByUBGGFfL3Wof7Jc7gaiteP",
  "key13": "mXnLbNwSN1NebRKTead7GFhU1pLJFduEhQbw9Yob4hAdjy9ELxNEvFhcwU6Dj7vWzAaNgSjWNo5ZHAtmEByr3UC",
  "key14": "4Z3XDUSaymRcthunwNHHHTHwqpxDqj9jXcw7ZENKfTzCqgqECGv9ByikjxDtkMyifKczHBrYgZpq828pwghRPtHQ",
  "key15": "3jDZf1Ao11febuUmystWzjkg4VAYCEPJktPFYzJToadEBNVuErg98pvDnd3ADAHNYNsTUBhz1UHaxmVZex2gy2R",
  "key16": "YW5MuDFncDiw3oVDS6C1HnF6MJsvcB4mBAmAwpeWWCCKwmAjjx6q1GZdFRYHxKLxjqPDKgLw1AYMptJgcEbLDWL",
  "key17": "5QXRu12tpvrAnKbNZnAoYYkDbureXg8V5mdUhS8mKUF5QswbGqDrdcBgqvYiyKL6RvFEPREBF5ZY7sP7YHvrmrNn",
  "key18": "53yi8FpqwGUKSCSCqj9GBRtV6CAoh7RdUQac1cu3FiVeJsytrYJzG3ZvXbPtece31bwS6GhZ1iR4Qm3ycwjcLkbr",
  "key19": "2uyvT9MsjSqWdRuttK1SrQUvN1ytavR5SEgEZvRMjkUV6BeiXatZYxpLP9fiyAwoojLXHN1K23xWyQABCqCSmVye",
  "key20": "3R2fxMZgZ1mrL7hsXVaBW7e8FmKutxMMAotkPGnjwZwcnwSK14nWXR2mQp44tAghkhRdjqk3MERfnas3DYxeSGe7",
  "key21": "2eRj8te2o3M5R2XbfhQBZpf7dq8Q3zr9BorPRafhE8PFxmoEsQZxVzbn7rW7mwKERH9dr13BVS8h48Y8AoqML2Cz",
  "key22": "4kxCjw2fvYdBrctru2wDRgjit1mmT5DxNdJwB3gXy6TiE6SndzHErcPgWcpWZXrmssmHQteVcXimJ1H7JK9vxCF8",
  "key23": "5XcEmKMLVMDprctA4ybkDg21eTCQcSNAhsdidzYYd79TBaVvHCNuReDXjgBdj5GkxFgHQJQzEa513jfc48PVtLLz",
  "key24": "23ZBFRaPjV53VoweuGECRt23z4AeQj3XA7Zj3Mn3ko5bMYqLXdegRTUfiU8mAEAsJmNvyh1V8rhPLakwTBYCgfz9",
  "key25": "1tcJZbPuDeM6DQP7EtiVqpzPCX51rnz1iEbFVKsgqFGCqji6q1jfnqtZHexvc9XcLyV4Drqextq6xgohdgtyecJ",
  "key26": "58DxJL3kjYXqbLKmWJW4kMvAJvHxosQS1daDwSboYWbYuspTditt7orKGCNmTUQbSGYGooAWETDyvtqoF44SPA8e",
  "key27": "25244zAxfmj4MZmSqUXE4NUf1hs7TsZfDMrWHzjhxP7NojaXPXTMfdmjcvJo58pdwfNCqZ5RtYTGafZFbyf5Ns9Q",
  "key28": "3ChAiFcotxBdnZ77MykzdeYa5igcHAqPLD4899yCTbZqAUoYbG9AuTNc7qehYCcFH6V3vXFNJc8k6szCFJ3rrDh6",
  "key29": "4cz9iYVS49AGT4KyPW9rbMpbc2tupfhzmzTPb87pYTAjeQpi2ypdD9S7VnATpox1zjcyNF83j7XYfd5VSfWxvx8J",
  "key30": "21BZVHdte5eA4TLEma6Y8WGj3rRS8ino7kmFtL6XkKahQMTwHoKZcYQi841pzSRtCvrSxeAYzvb5FT38t2boTsqN",
  "key31": "2uxfxaLkocrB36bsJx6VavhyozdrSnTgK4kHGQ7AiZgM2JkdxyankL8tFVYgtSnen1B38g2BmjGx6NVRJWtyLnA7",
  "key32": "4LMNcrAv2DWidm5Tos1jKtDL6PD4ZTK2B6sm1o8WCoMRMM6a4dAkmGCLbgvUsFUvUV7ejQo19yZDCncbQoggDV2k",
  "key33": "YFhjp1QVh18Wkoc8WHqn77m32KxEJjGLvnBnBCW58W24MRpawBazW5tX2fTaYPCWdQ5evEq56mPummquUSwZ5Xc",
  "key34": "3HkAcoPQDUvj76vkfGdz5JsrQ31s5n1GzLPTTjedTc86ipx8UXniHB1LFdThjvqvZDsjgcxAn6BqayDM7ZYLCTBz",
  "key35": "4PP5185k8NRtYrVYhG135kquqekQus1MthsP9eTwQ8X4aR3yDbGx3oiYKG8zyHU2YVr7zwHyUiUh71kSmDdY1TG8",
  "key36": "2hKG64Q9oJWw8fhFGoT5SJHA9noKPTJFiaAhBUJU6K4ADKeWMHaC9ustrpzz3nBccv5AZuHztMyY2Yp3xAmACUqH",
  "key37": "4CMGtYoLaqqcS2geVNu8DtmW43t2GgDWx8NfpsvrVha28dtbmYri4RSxLb8xmTDKm3C5mdY3xhcUo9u9QQ4NSsoE",
  "key38": "MjiKTovvX7PzZku6vTJ5LPerxst3UY4jtyVwsTFTbKuJwkg1fqmdH71dLt29TbP5dNUQSsmCe94UvkwShX4oRkg",
  "key39": "2FQkeRZrw2YXEbmPWnw4JTwDSU52aH96pr8YKpNY1CPULK6NSiCUpfsNUTDgcC95nH3LzLLiLc2KdChivnztQUKJ",
  "key40": "395DqA6ftZVxbTGdb7BR84V4X5hwmxZ19abXQRGT3koL1x7ZJndtmWP4o3PNkPz91dya36woE4VN4W4Y4KmZST5i",
  "key41": "FppcJMwWb61xAebGWXbiZAjkApXPRnDj3c2qvAVVFhmMxXLhuy8LzvWiDDEgsXPK7mgf15CokKEPF5kiCAELGdh"
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
