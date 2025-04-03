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
    "5dC8w8j4QPdH91FyQYyYYEL65uYZ9S9qEmpNyxeNv1qSwPRjeA1tfKKLVExCBzu67ygEXSxVjUYFB4DfEaDwQzNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZaxwjHfBxbum9E8gcFe2u3UNsRSacWdhnjLjZ8rvaiMNZZw8Rit9if1qFv1ajDys1MQmBqRqXL2X7x9pkjUhwv",
  "key1": "2ZVTDQd9Su95LURPwmKu3R2uBd3t7UYPdUKs43rCFiqRsCZLapx3Spkm345tT8dTRUTU248gfh84nyN8zzycKHhV",
  "key2": "4ioYdFSLj4PeewZLzBYn4rHDHNazw6ENMy55bHWtdPA5otfbcz9PmvJCBi6JtWuUDxNHd1BziUcG8uGTMFbvfdWS",
  "key3": "4Tf89n2brRedpsTTbcZdtPjEkLtwYmDDdyhXhSrZ27V3SNxo6D1DvBTzrkEi6vVw1mfdKkA2CQotoberSD6gebnw",
  "key4": "oRCHUcHJi9ta2kWnCYMvVimG3enCwGyEqDBbmoUc9UZtgk9QW4U4xNL8iAL1Ft8vqyo9CRk1yjbt6rCgZFHQgCw",
  "key5": "7hBYgSbdJmuB6dQM4NvHizv6nj9QAMQqF2M5xxs8g957kq6ry2RTRSWC4yNrv5A7DHeHrLvGqNRsp2mfH6jzdMp",
  "key6": "LQhwCdvF6z4zVq1jN86T6oeidq9vwtZL9mTzR6TFB5VXaH15U5BVfSPN6UwcQ4UPmHKjZ7RJnLVZ2hg4WyqeeLr",
  "key7": "4BFSXCk871RhfBT1ot445XEDee4kekqwS1xDV8GcPCGH4QGBdFMEPibmiwSeafYvG16ubFE3f9xpa8suz6hEKbnz",
  "key8": "5eEw3UnyDPYHRuo7ba2LtoRPabX2cjZkwdMnmQBU5Pjw3sZ1oXnFGYHAPcbbQjXwjykY3rvrH97sdZAbrATgy8PU",
  "key9": "3TKCXzLK9YymaiCaYRherhymPtt9Xi8gc5Cg4QBFuu8BAXRwrcK8coKo3XHyxAtrgdXMVMKq8BuCnCkjuqrrALb3",
  "key10": "M15zubSkngcnsanSRbP8KFNCmUjdPJzBNiMU9ifqmfZxYMzVmb1WADxjvVyUh9Kb3zRkaWkh2vx54SXXGuL4akC",
  "key11": "uaavQSPtSYauQxyxRg3wKo9Xy1bea96ezCjzm7tcdwg7MpjcLJfUT8npc9b8QVkXznYDgKia7mLCAZXk2etC4xw",
  "key12": "3kKKGttyBTDAuMFgKz2gvieF2whhfhCCFnpAjwYr9Uz9yhskCZCNHY5zR1n4AB2HzcyUwjo6oSJeUY89jvPhAEAi",
  "key13": "5efYwSrEqQtgpiQusz8Sa58j6SfjeTGy9BD2eNzvW3JRYFH6UbFQ4K7Zqr82sebhV85ryvP9DfBbhysMSnET6MRA",
  "key14": "5refkP5T5ce1ziRxpxSwq9RoAWjtxnfjReiv54wWMYo45yW91WnqBFejCZtXLJwsSyagzAmr5WhRYeH1cMLS7Qnj",
  "key15": "3wkjjf84JeZAtQ6D3PTKRCN2CCfMwaTSWX2oUdbQppeQ3kn8BPMhbytiYhMZKRjhMT98jrer7716MjNYqNNkgdsg",
  "key16": "5jHenXH77JZ3fiz5HU8nkutLSg5LxP5QFXaRLWYqSK6hPLU2WvqPwYxJ31E4TuUR9UxMkBuNuxJ7JZWWMuznQh1M",
  "key17": "51Z8vuczx1uCUuFs94LkMqodXHeZHUAtL4xDjcznKS6o669BiPLCdeUkKTy5ncoavi8zpZf7Q2PG2nzMFNRWvyUQ",
  "key18": "qJ8f92Jng2XURVwz4w1o2C4H77vNjZAEVApbvdHFUGjmMzThbJAVYQMBCXgrMCbDkEFCzrpZuiqPUpUfaMkzJ1e",
  "key19": "5T5L1BjSKXVvXxckdFvzhBmW53RF9h7RKudBPu8j4ZJ9vLVcjcJWtubevPpqnTYnvVaaXdCpDgovDsDq5xht1mci",
  "key20": "5zZ7WDbijWE7pfys68GQ42kEKMDPiGWhuiMFCgazDuXhGMwJoVth6yZRYnR94wzPebdiCLriJP2NeHwriSmT1MRN",
  "key21": "2hfy74LFPtJuwHj6cxr8dqEeGzSYkVfkawRbhaqLio6ZncQGz5hCBPgptzckUSNkWvueHoqe2Q5BGcZbaDXKqCtH",
  "key22": "fsXDzd2V2fu3mXZwnKNtxfnWuBnbKMvhJNgQ3mc9btYkBz9eN7CLYCp1dKFLQmZj5rGEi2tzaFVSqgWtf9YgZfM",
  "key23": "4uR9me6juUSe3nGu7Qw1CEM7RNepUgzuoA1JEpv4uFEMdSgMGVRCPQnpJaqw1aiaEc92SETUtmSVBQZX4QrX656t",
  "key24": "2QwczSLFjdaLVPQnnRLttRuUZwRxa8edDCLpsUXCXEFXpneipwjoY7fmyM3BntW2hPrK3Na2JwRiUd3hHg4SgVd7",
  "key25": "3EAzkZck6JpiWCbAdp531VmDmehHLripVEnVmDMgTvNbcdZca89qSh9F9kB3Hz69DSw7VvvoooJPfJ2c2aHYCph2",
  "key26": "5wJnGyV35zeeBXrxzJrqiW9PfQEtmLwVfonAtyaYUjL5Avn6HmUvHGqeGypDy5XGPBCj29wZb3akvD7Y39778uVQ",
  "key27": "42p1aG1b8CyTAhAmnJAoHRUJhGdGnh4AvtW3B4sjx4xZt7tnKDGiw8spH85mLPqHXWUbqSBPqUDmwJ9JaPXhgrfY",
  "key28": "5XY3h4pJKCczjFFoBHTvQ5w9KrYQCL1MaWrzvNw6uxq879YE6iwhfNMdYpjga6dYnPNHjZgVTLphjEn7GQ17K1Qd",
  "key29": "3tw4hcfKedtJedHvGub6VVASQ1mxzJ5qyzPzZgcepNBgoifa8vV8sNphqupWrxG2VbahuwChkJA4aq9bZpAFh2NU",
  "key30": "4JxYNZ6mT8ooHrYuey2ath6GKGbdu2HaR5h98jPQBtynfyx8GxFx3uXXHEokxg8XCHXhzVMrEg63yCwgyckzNnM3",
  "key31": "3xGpDBR5bzYoCKHDVuu4WEZeesaLWWDGAgJDktYFDnep51mVYTqKLUWumENuf1oAJwRFGFaJJ5uKgigPN86rP43G",
  "key32": "2Q7wVxpXMq19LFKnVqCFCZoLJxrDJ9qVcxXsK8HWAyBgi3cvG91MKruiUbcQYvgkMnjaVSAynoZNKxX1tTdmtQEb",
  "key33": "4v95iQyk3kf5ytHmfoEvfhAuPcbUv8PALMhzPBypq9t6H7Ts7teotrb81WE6CBD9EncjynBxXbrwpGQ1a6qjhpzC",
  "key34": "4ibHnFG7PHQLi3nQoEFC7r5xnyoiRS5GmPgpCCDmF2shwHPwzJvJ94DdUaW1Z1na2N6vrrUzhHz5wVoFqv1Q2BNR",
  "key35": "42oRRKFu7jBQo79qhnWSJGdQravQdFDMS9BrjEvThzfmHEYskP4ES8NfyJJtu87zAyWwbUdNH9kghMeyDz41h323",
  "key36": "35RU6V9ybpGhHEeRvJQ7nNECJEVo43oCdnUcJFo5LJ6FVxgJPZPgDExst7Afx2WAWufrQUcRQ9aiJT97crd6oj5",
  "key37": "3MgEdmhkwVnLXVPof2swUiop4aKbDn9kRQk4XzNiZuBtxvzYq9XZURFb2oftep2etUVdd7EdpgTPDujnAwvFQKKb",
  "key38": "2F9uyy3wrsiBshzFVzKRaFd3qvJ5JhXxnfja9s1UqfVd2AvanY26XLQYB5mGZ5KxisTW2b9kyxaRyjxaGkccrG6K",
  "key39": "3iSjDKSDhdkHuFJKmBdi2k5LcCRYN48AiijYM9adaeRhyMiHThfpkDw4eskaXc8U4iBdw5GABAoCWv2wuAFrCQDJ",
  "key40": "TWTiz3NMgs8F5PyQjgWAMbJhfgz5RqmBSC28vwggYZTKpZayCjcS5WxK9WMCARKyz4HnsUz6NfJ6bqppMxvnhCU",
  "key41": "5TaaN98taHiLS4H3sxe5NrNVhAYR8v7z9GXjamtRRVe5hmAP8LXosuby5F2GP7tegoJVtSchgDgXfoTW7TP6UX5h",
  "key42": "3NbnRZMK8JvhsMec2Av6VsrJp9yanWP8WPKdYxeHEBytFNwBEcSjwA31mpeCM1hnci1JUAbGL2eAHukYMb3LTPCn",
  "key43": "3An5vB1Ppy5WMgkBTCURpBVmseDLYMNo6ivKJPbFvMw69v6cRLWbg6v3wycRXeC9jQTeGnhRsdZNBocMjuqt3HLB",
  "key44": "W3JLQnjs98P99ZjDgpzRyyHSdhp93zAA6jgXEJUD3L9SCUVWbjR25xdifeKEgM75N1JtLsxMLboKu2H8pk1vaTk",
  "key45": "4aUpD22LsgqjffNTSgC437CjVyxLfr9C5Me64Z9vJhoozH6wyuKDKQWxEt47nVWWHwBk7PmkhRSoWq9DGwytwQqB",
  "key46": "3zVvwgVq5QGjxFUoVdgefPUvMukwHEdqzPcG7o7e8GtrMvPVBiaW2KsdCpdeNks1L8ioDuKYEonWb8gh7EEoGzAu",
  "key47": "3rA5dE9bmJtbpnQHryzEhiyzvrBXuN8AAESbDyrCJ8LNzPJYRevuLK4T3ag7M1iKN3rPpSB9yupQAAQuejtJQuWG"
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
