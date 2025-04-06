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
    "663x6Ky7bSgZ7ZmPGC9vWqNmaYPcLKsXTU2BM19nuACP5rC4Rmogi7wCUtedvFucGckSNCqohapESaXuJVojjXYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hF2AJf7iBxrMg74uBkZCcUbjvoWqAK3UseFLmFS5zCdncZ6tXMhkWGXDNFv5HAMZu1gLp1eQKnMHzKfuiejZ1a",
  "key1": "2xg2zHCKNQqc6qoxybmXwnuCzV1Mti6GcV6R7qodhhNRnxRrtzvXKpQPK8TzCzvzUVmVqPJiVDoK7mRozXMJHmG2",
  "key2": "2dxsYnL998jdXUaNvAC418FxyvUrjGQedrYZ5emP32vnbs512j2dgez95yGJyHuogpZuVgReSR3qv5e1LxvRQu6Y",
  "key3": "5S17pQnevB4nm1KV7JNxmrGJLN1rPVPw5wpWoUGymww3YjFavJz1S2PipCPgctoTz8JNBxyKF2YC1TETP4RvqqzM",
  "key4": "n1DyKVA4B4UXiZKv73UVsrqMqTbG2aa1wGYxZN6ioV247fDpWdvh1XJizGJLcT4XnZ756rCndbLc5aVgLc8RCyV",
  "key5": "iybJdG4x9oN5WiGrr6ht9rUjuRys928FyybDWF12oW4f7nXNYfj8XS3Pw3kWH6DHMjnuZgMuz7ANSaGtJz1mPfD",
  "key6": "3bSvAibwY3GvhaYwvo7Az9EFcsPB4111cLiVav5W5QbjEufPkDCAmgqmKCSaZss1BhCYRzNpB16AFGtwQyzXPcKC",
  "key7": "2uBzNYeaKDACy5Z6P8E5CzxABoGnMAWbsrZqYCh5iNgXpta8uWMFTJYimbWC2Nm9WxkaNYUe9YmWQde67qfreH3Q",
  "key8": "55Po2aa5nE4XGGBDtmGC4dSmVA7N53iMhkzxAfgWcwM35bpFhSbrTrSn5Wc5xwzMfPhkr1yHm9t2XMDu9p9BHM1C",
  "key9": "aNE641nDyv9UPLpFRb9sB5qTW1DC3QHX9UjyrwcGLN4nR8hmcq41JwRp7Xc2j1Uy9QbmHw4FkJaRLJKMY9CpyvR",
  "key10": "3WpqPuDyst5YRUnJ2WwPf3vmQEtbaYDE2Y37FXUqRiFpbJ6yUsSFsjX6KhrkhruHmYWDMmrtWGuUzAAB5DcMfoRj",
  "key11": "4nzz41Nu6vviGpLhuqvTztJmScZUyKE3sD7E8mL62u8hqYPdiAp57CXaU7iXxRpC3SswHewPdESef7m3C5qkpHzf",
  "key12": "vBq6iC6H3akabuUhi126iBxckZ2Dh7DzMrmvrXDiMVH7F2xhyYKV1veaBXVCtzBdgfxcVzsqv8r47knv54uhUkC",
  "key13": "2KHAjrJw99JGgJ1oPUuZ4dXyLiWUHiGixHzTEwV51UxYRH56ZbkXoYQsspBKV9ZhSEpM2pUMJnzZccTSFq9JH6F",
  "key14": "4gyQvKdxcnSaLWNVy8fUFZ37XGuVSFWXnNosfydaFkdRQUKwQu7pPZ82zmcZJFwzLtAAeYsoe1rj9SfGw88Kb5S2",
  "key15": "EuXGi7GL3dVmrXcbzPiWPgWpjby8zCF1qhRpGwqaTAeNT39bmH9EFpwia8KGimjdUUvhNGq3N8pzReBfT91MgFf",
  "key16": "Up4qs1zEeSB4Lg7mUiUS1YJP7GR6WpXHyfeYuqNCQcfTgp1fsxNRmEUp4anqoRzdk8FMh6W2Yn25g9KzTeyPtsK",
  "key17": "VDc9CawNgaBt5CRLLfMrZk4MRrtMbEB8nS7HV548FJUonZeb8mvs8RRTNsvHQFcbazCWRx8sGmm8j5ziG54DJER",
  "key18": "4cFgq7n8XtJvoeS3fXcJ5jjx4DiZWVe2SaThpiZB81DKbyhMzez6G9E1zRFbVZQ9y2Mab8kN6XLaPRa131UQXSYG",
  "key19": "36wLPr9BxgFY2zoq9wxTQe3fUAbsZPmc3Z4NaKpyTWK9bnwTb3n4iLXZqQ2LKy5Cw9TAtevZZVMitrFr8Livetaw",
  "key20": "4qrDtBup9EHreoGN5C1HJsuDr536GEAaK58n5WEvZUSibDc25PFSX68kM1Sz65CfQ4M7dvjEYRquYTuchYzqMC6F",
  "key21": "5av9NBd2ZNiocx7VaFFUyM5RbFQSGEWYFWotRvcgjvbFfqYhVmfK9CzgtjSPqds52KCnmS7tpe3QXG2GMqZLpJ6a",
  "key22": "8BE3YFCyv6grr9GeewpHL2PpoNV4kGgBam5cmK8BmXSQ9FbzWjJzf9PzPCctqkjG1rPfyuo6AVbyrkd9V5A746B",
  "key23": "4eVXWXcQ9UWBa9VPuafutZbmYMqf4oQKDXXzG2uTrkxte8q4LpY8prTfKezEktytxLh7LhiWyEjkm3z3uDkQ7pwC",
  "key24": "3ZKvzneXRuRJJLaqfJbuYNNHWBSJr3ddHH9WdRePa5FKj8oexCxme7ZzosVrMGh5EtQPbXR4TVNE3Ym2EJBck8JN",
  "key25": "2HsXmf3Fj9ncycS9tWdxT7BktZn2j9nfjFSQTw4kEhuCzoMtGHPzmdXGTE7Ykyc2D3VpHu7hEAbH8p9L5SrazXTr",
  "key26": "21m8shcdVKtCcLwxYXzxPVJFBy4Pk6tVQd5kp7dXResmvazS8XfkApNE64dLeZFoJQCGV4TR9PMFB7hhJ3MG2yta",
  "key27": "2BtBignsJPXUmZXYEdc6pVK1zqSVBxPC4VYbaHKMdT86ZoV4EMeZGf7fWWwu36LExbUVq7xDj8SY7rChv3jqdbGK",
  "key28": "2ox4Y7kzkMJnxaqxPB7vif2SoVr5k9xsyUdsDsZAb6ezPmx4LCACoDqRePwdmFcX5B1V8DTyXSBhAyh8sjNDv6cD",
  "key29": "2fNEVvHFTMLv5dCoUvoLxNk9mzVPt92C7jJPDEHoejecXVsproxwo5HGHEi5xhBzaLT6Jck8uM8F61RU4CKQdXrM",
  "key30": "23u9soy3ENTkQcGJngAGwL3PRmfWygghaWzEz6RsTq5HKAosKNZyCCo6S9zQAFe64gecCTeV8JboawLWr5kWBTL5",
  "key31": "Em4RsozK4F6aVFbmnpBhh3MofTQG7AFUEgvDcNbgdHZLnSVYyPN7v2xmAxNqycYXFppZyrzxzPLE2UyUKgU56cD",
  "key32": "5HG3mgxSYnjUemaDL81rMGsSEMwygszdJ2kTyUoXoMJUHcbUjjidoi2vRa4FYRj52nY1kcxu7fXMnip3J5ovXX9g",
  "key33": "26FZnPbdvtdiqKkBWJL5jAZVqdWs4powvC83ZbdJzmNsnAXUQKaTaUjorDdHgirXDZg3bDLWrTEtcmqsb71WX7Sx",
  "key34": "5HNBUt1rMbfjAUmE2eLanDTGpPf146W53isQxuggsUribeDtanEze2e77B7Nbi4gpaVaKuQg4NZa4Gu2TxqLEwAp",
  "key35": "5HEVL8gjQJWFbfcNNiWkZjTeadtoyJWqXt8wYptnMvaw8ToxB7DYMPNaDcDPk4cosEeo6nbrdA4xZqzUvh3htVCo",
  "key36": "3ZRNKKGzczhLrwWER7sz5xJQXrPgdwm5HCGZphA8Hc26CSMpJ7x6rA7tVVEHyF1QbYvyebJhpZGU8CXoDfgZxc4o",
  "key37": "42G59398kzw9Rz7mtBmT26aWmCeLpooaWPLtLZsenrb7udJGnkgSx9eTzAZHzF3fRgdSHj1VeknLH8FTSp1kVcAr",
  "key38": "udhrfn8mH6rmAtapQpxeaLQdFAETgSTGmE8NPQSvmTQNDppYY7nuWnEH58e8uK46H37YUsy4YGFysdUcDVjdrpw",
  "key39": "46mQdhMdYRLR4uzBodbJBFW1f3GkkHXi5Hc1THvQD24EZPWRfsXbXQtP2cpMuDP3VQq9rKGCV6WQ1sNYom1d1vTA",
  "key40": "3X9dmwp6mk9cLmyozdDYKxyzHJK2EwSh5jZDcpsi56WKPoMXtNctFALmtAqpi2vPMo4KszJWxho7bjCenHmcds6",
  "key41": "3ECpWsyDfkRJ9CQ7dxAjkQH5AEXYeP2TCuPAUF75YNHuubDTbXkcD33PDWzL4tU5PAromyZgBZBp5dDs6DjsohcD",
  "key42": "3Ys48RhbmxjU46cTMshtSyN7dA9LLY9NgJ8xU513XRf4RR3Pd83RUDDfX6Rb3mw67Wr75HEUHH8tRNm4Zz1un2HW",
  "key43": "2Uk8YGFQNjD5JMET3pTFgVSmofK4NM4NLwPfH739czWQziL7p6vGwtREKvUX9jea4fgq3FZczr8MkBLobisFnNq1",
  "key44": "4qfcK3S5JvoD4H4gNbv1WxWKzbJqjrcPgFQJGo8E8XqjNzn1U9Xk6RAnqehKVZXzwG5xsWiARccQwf5XC1zLxzMU",
  "key45": "KbUzjj7hFmhRtPCGopGpSvLjaQJv4cWsDRUR8ms2guaXo5LpectDa6S1FfegfbNNq77zbB3XiDjWWVUQxQmQ3y3",
  "key46": "xoXyEPa4EWUbi9DWPHN5idLqgauEUCr7XMh6tkzwptNu5Swm4MaLUrt51Myj6JZSH8eeHo8uL2AXzFZiM6vSMrp",
  "key47": "2h5E7XJ9acRymEJC9MNnNjneKseU75jbzL7JPFMaJKrNAEDmqVn4q14qphLPFeH8nf2ddPU2A7qN7iG2YvvYqqmc"
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
