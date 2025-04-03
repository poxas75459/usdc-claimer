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
    "35jjMwV5Ge9UPb3kVQ6bijnYBJaX7rUWvdn4ydvVEoveZTHWivUFFVDzB4uUE5NLuqPPPwEQUsy9CVZfFxQv5XDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53o3TNYNHCF2j6b5HrjGQjh2uaMGvYuFsW9jvd9FzoH69v611ER9nr8qcayCu9AGZzfeze4Rp1HNYv1BtgR7Cdoz",
  "key1": "2yyq544mxNJevqyDnP2JvNy7u4M6phaYTGozj6osu4upT7zML167NF1pxPpgSthuTHmwi6DUWYsPJs43mhHgmSb1",
  "key2": "5ejU2E3w1aoraGE8FTZuJwuypcLRpCjLAACyBXu9jZQha7gzBSqsxssnPma6jWaeWsrpAE8gCKDiuWUpcx3JXYwd",
  "key3": "9c1myc7sRqXAXcxaA7xwEvZQYzPwtbznRP1C2z7WE84VXZKt7P34jxpHQr71r1bqNWDuB3vfsprhqgc4nnqR329",
  "key4": "67eHWWXBo3ZcoQSwAgiDDJ33GDToqJkXX5iP23K8wvBEext3TL9Swa1LnmbTja8EVAqcPNeovGTv4ipd5Dh4mZuN",
  "key5": "5tKDZjBA2PiVqce8jvvwguXNgTfVfQiFc6jvcTHB6LSv8rvNK3Q34hUtGWLLnZb6y5Qem1jwAwGkdyhTPr7rqgY5",
  "key6": "48aUKoLTeKsiu774Hn2v66k2ugqPLQFG9jtxksjVy41VDkZ4cSG7RGAa4SNqVVfD5i6DMPxfRP9YXLBoyGygkz4s",
  "key7": "4B85ftzEQFXysokKQhAWjDuDAKnWLt6NJUoHuD3gqfzdQJjzkRmQZx46TedH1vV6g34gmHk1wSWhEMTxc6jbfSHb",
  "key8": "4ap5xNPy5wNr3dnCkDjXjnwU1GSUfZYX7DMSReUY4ddzuP82m1r45rmTYCAi8H2ZMWXp9JFBXPfDqQfyysdRAup1",
  "key9": "3NifZPAkMR4pJKhJr5zysWU8WusxNBoHj6USmDjNQFUcd67YWuq2gEdrC86gsNAguwihNXnK5wbHXb74ky6LNBfU",
  "key10": "zJx7bdgDrhNyQMJVYmPw1i6XYPNRY4AJUr5E2vAHBceWXu9xmjQ3KMGbvZN2crcnZh1Q1nCNgStVVS2fV1MoUns",
  "key11": "4vDeSYz6yCToasnfF9uj4VsUyjTNAhSoqQdTRKNiCZN1kKNoRZhyoYurXdx56XYv9efD3vXRzQepwQfKpTKgWbdw",
  "key12": "ctM8u8FihsoTXSgTiXooN5tb9tsR3v36Y7MiEmTQvCgtXfMvuXc6TDfbBgNmeTsK9fqohnnkPudi55NKE6DbmH2",
  "key13": "5okuSzyeMo2xMTKGk46oUcjACMAGUEJGXDJdPgNwst6db2oV7iU75XEXLf6aWu7xWHs4WqNALpJjkZDhEVZqAeVB",
  "key14": "3fafNjEmX79GQAB8BAca7bDMARzB55LZsphu7bSatYm2TNPR6iyUTpsuo2EuvKLzSKywUoCEC8dFvQmyEry9coyA",
  "key15": "2nXDCvC38SVoC5a8NiqDrqu1u86LxNtZb7Svhosp3iSpK2r9v1TbEeGz773GqYCEmr4cW2RF3jBvtkQ7qCGvLTrm",
  "key16": "4GV2by1qANiSzBmAhP6Cht8kP8wXb8Ex2cewaeVrs9xBiJxZLfyMutHdKF7GdxtSxNp4CHHgYmMhhEweFYKnTTuA",
  "key17": "5YZF5dbkcJ9oKXpNAnWrpsQafuNXsai4jE1oY1K12hg2Tf9bxz9uVmhfTSR7dKAvXdpAbBw6entAug4t8D4qf6Xy",
  "key18": "24LxCxN9DGn565vL3xcymZVGMoW2feQ8ebe6TTbSuve9rnaMXA4m5SWcmbzmtHQWhVtvZdLc8SDN7ivyQ3VLHiXV",
  "key19": "5Fjw1msMJ5UvY8dVfV4dX5qKnKqimsVSqRS2QUBUSXYb3UB4SyxccrsevjvfkPaLwRuqc1hPJ6rzE7vCu7nGNgL2",
  "key20": "3hse2ymDLPmEQMz52kxXg2G4P7zzCky87iD2L7rZnqTiDjNgpQz8fN1q1cQyggiRiBuqzHbvMVGZJ7GX9WETFWz6",
  "key21": "5BzCVKubS5jB6GcwiAxyP1AD1P8y4PFqQ1MJNk91gdjRE8SHCXsr9nk9L7aE4HGA5Y17nPMKudW27TZgUUcRaf3o",
  "key22": "5kXJAvV7gigMFEaL6bA5bpvFGj871k7RjmeoExnLC2KNq4KuNuv15FgAWKnT45BHcn1ZA2cZNPrF4yrZQ6rQ6RnF",
  "key23": "3HxGVc3pszVvCFC8C2dxj3yLA1fAnzHUBxVhusAjgGVhy7259YZBkJT9ffnKjKActqCP8Lhc4nUXATWsjj31AccP",
  "key24": "4kbFDUgsDf8U3SgpBHiuXFBPronX5QpHPTokKYLc5yXrZAKxbXihEHvbzvYCgSan2q34aQjN71dPh5MKkruijtNd",
  "key25": "qJY61N7ZTm95jhUTpCpYAwPypvtKmBxYnNZYf6CNf4T6GQecW6Kzawsbn5t3hGtgagHY1UGXT9NNRLWFseePpSd",
  "key26": "5Np85L3LKpmgdAAJcoajiaGPMYVKQ18bS41KZdwgNAuutZGsWik9q5qLWACiBsWBj8h4WzKzz9diopcgzteAseXf",
  "key27": "NQo1KqpNLGyM3LUjrQzZSAAFqRZ1ErCPvDH1DW2Zj9tWSFgXKpu6386UGRVGye6BUvJw93tTPQBnEjkMPQSFPh4",
  "key28": "3cC4FiUqooCX7ciGZcedWrFMWY5mubgrkeLNViwdSGaL5Lfq12rvob8wKH2vi39B6H7ZEoZPCQ4k8xMBhaHYVXdP",
  "key29": "4MorgaS1ZQpn91mef1ThmJZMQmURVFHVq335bkYG5XjKpNg8X3R5RHt6QRYjpAhKEy4JydGreTrLwRz32jRWQznN",
  "key30": "3g5GdVAgijWdmTom2FFnvT9XvEj2hTmNXbCy1PMfKd9iMCRVFQBvsUB3xeRkYR5qbZEXvyLoR3PT3LpsmjfGoxwv",
  "key31": "44E98Lx49rFuzwfHMHbVeAsEQrrY3Zd1yWKGwZ7U2ejM2CJSPd2g93tH3MXvZAVvYUzWpu4YcbKF5vUNcA8REkkE",
  "key32": "4vbvbni7X84Gur3JGqg5794KS9gpWwpXJHwcH9XTGTvkxvx9ZreRfoeTDndj21AnBSEz8tfboBs9b9CjpUdp8PPw",
  "key33": "4FxATdknC17ocbEKRvcbxWTnhwGEASf1vEFE68YJQ5Xw3aCptx2ojZhhkihhqxySsAi8cBbJEmABDSibcn39ZrKn",
  "key34": "2afNA3K1DPreWEJ5zmQutG89usTQUnCU7Qn1yNKHNdazu5fAkCn9HGNY1n3cWszbirJAbpV5RhMRrhygynkTgzc8",
  "key35": "ec1FSxogNbNdFNyKAGdt1xbENNy5uiHvJfzhwwPNwTY8PH85tr7mGDpkg3vB6Jaqit51g9HH5rRwR8FdD4gPY4E",
  "key36": "3cnvftF1zDN6Wkd1EMLwonFd5endadVSuve4CjDEM67koKK24CP9CTmBKw824peEj9fkhzyrmSDA3uSWL72VbLcg",
  "key37": "43YpCeDSaxftEwi8V5UyRVDgwjtxbEFVhM4XBAxTo5eX3qJYwJTFcPKZT7cJESMV2eAZdBZh5PPWsgeQk6eJoAAu",
  "key38": "oYd81P6NpfmnBHGcxwFwPeATFid45ngfCbzFRqdAccHrWhxkXyRcUgiXmzAcBB3vDyxxq9FpZHnAfyubjSXAJrM",
  "key39": "3zF4RND1e4UpCg7qJfaNBhAXmqRFBK4oxHE6VqnBHZtSK365f2FLqPGzhppxBhAugGfgsV6MEh1tLzqx6iVx8Xq4"
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
