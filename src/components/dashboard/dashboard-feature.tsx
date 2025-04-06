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
    "2288ZTe3Yzg7tMvphPXsR5o6kanYa7VfEF7DPFq43rVATdSKarGwHSF1mLdi22xywFWMy1m4pRi7L6U4swwFYeaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmT7KXUrrfcEuCnJuu1stFbexanKF6ZujhnaYLS6ofNnp8qGFUs2hNduazL9Yh9R1zKP4ycHFCnjDpRu1RKoG5N",
  "key1": "4UJxBpWdbwNmXdYRewXrc7kdwLUTZcnMxyVcR4GJiEuU3UV4fy4C7a91Lrkehm81tEXF8r7D5wg5rZDxvV5dwT6w",
  "key2": "5Wj5d8FEBUH2BEpy5DsNnipsMM8AFF1ygt679SZkpNsrwHZBZBCfXaG2bCwTxBcuGXFm9LvBczg41v59skV966RN",
  "key3": "rokL3pwcAMTkaU5QV2ZYfVZMpkCvciSNa7pSJ74esZ5Ga4FmiDDBho2xsPQqYk5cmesa23DuPPVhpeWrAgNhf9f",
  "key4": "44nadDaNwnYqDUkaDtD1gRjnaPJRh75SXqDCm4ibh27NusvbC96rq3CNbv8FViAyHx6nkTgfSpR1o1UnVYoFBMnL",
  "key5": "3K6DaEaiLBVJwX63hk52MbTm7N1HU6zEaQcnHhc3VmE2LUqeWE6RcQsxKCMWbdBGWBMPoopgxQYnHTVX3uw6QJf",
  "key6": "4nRYtzwsw1UMJmcTxcjXLu4ryhBTv77uFrAbG4qz2drpEpNvBwEbn6GdcxkPVpZrv5oyqpoj8opUkLBCgdfiKZEo",
  "key7": "3avUdNns3jYWC2YQkSiXNCAbv8KHiPHy5WTc7uwbm9rAvpLAEywy8QUpjcTzjZmhhKb9QA7mnVsLC94Z1RFxvJpr",
  "key8": "ggut5QZp3wcEUAXc7kxzwiTwwRBGHHXYukJmEkc3gArnv1uQ53ki52thtjF9aibcYk63CLTJpftFQxQEqz8oGG1",
  "key9": "2zyys2DEgD4woLAjygPyG3KnurGgvipqQLyAGXBCUiL5gU9Esg54Nq7596cFoVTVwyvRxaLbAfkAxPui9fbQ5Dg6",
  "key10": "5ANg1db56RaTMek7tKHCsrycHzT9CXsubJh3BQFQCfe7eWktwZveVZjhLRVWc9Hj2fwwHt4usgtcwcUMGhnetZWa",
  "key11": "yruNf7XUwXyiia1nfgjHtH4wEChfkWUV8yCzCDoSWckaT8wa1ZbFGWWP7X6Q4QnU82sozoH4mmawDkSfBXL7B8d",
  "key12": "23ib3QfreVNNwZZqWvpKKbUm4cZNp8PmKhoigNTeUTiBjcnYzchmfyJxanxPWFRRyh1fTk8A7p6ptmbdd1j4Aqu8",
  "key13": "3CAncxpJAMtgt4C6m7cwAPUPXa2RVnUCTQ763g9dvnrruGoUEHhpcyV6eRABPtCryE1a1JEYasYbiM35YmddZhzy",
  "key14": "5SPXRYDa6w1NzwsPHkzTbbBKMdcfJubp59psskHYLjukT5dZELW7NcH6oxUPjMBNGujkCcmyCmEsoWc1AxkPcYSE",
  "key15": "59R9MLpyWd847gGWZ9Wtp3NqZSg5iC4axU24Vp4iEuk8YRR6S7rWHLSupD9atwXo42DpqCsWnLBVfYJfNCbQWhT6",
  "key16": "47QKD5Yz5q3VPeyFhzCoJ2vtQKQns5L1H2M7SWLp6vYEHeZf4358dP3tRWrxnkS9LAvzg1khb5f1nEfqkT8VnuSp",
  "key17": "MdB3z2rNqEtSvTtvcMNMPiqBdnF6KkoW1jdFc84KVCaosouoWbrLYLnCU9KGevcMxHZrSkEX5XwLfY9vwY6k2eE",
  "key18": "3P1BkTnwxT8YqhgSj7QeJrYd78U8U6z2iZbDJ5ypfoHPZEsipwuXRojuSa28cTSb3WptwuRfFu7ysLxmvApiry7k",
  "key19": "4bGRMWfmXn7BGun1AUgwqfkrSQjmkiFDqiWANZSJgGXtVsLqrUgLwTyuN3r8zm3ETY5wKR5MmrMyczL6phcbM4dX",
  "key20": "2cGxsnvrcKBAxdyG6DmX3cHh2tSnSLS4s96EWFCY9ttEoNqBh9L5imRso5RrjeUBpZr96SYHoK7gm7qupZ7keHFw",
  "key21": "Fmgp4iqw8WAkiiAGR2YVrGZcLJdbMvgmSNVmF4e7Zjs1tpNCuz5YV2tMTBxWFeoYiM3NmSN6K1Hvre7XC2ikN14",
  "key22": "28644jrWh32FxjrAFGcBGquZZZ735Wh4riWKz4S85P19FUTqaDZBgTovsBGCiUt4jALf6CZnLM6Fvsqjr1Ka36JP",
  "key23": "2vcsP17Rq1AJK1tocPDdQjhuFZi5bkMTHa82xtDSxwYjHD4iYd7ywGprobQsbWLAhMsSUMZYft8oEfPAEdxfmadi",
  "key24": "57murkbG72cKUMSsqxaqbHmYKkwTyVwcGJC8rNJ3SmAp1TPSa6LKgzZBN1QPPdtHojpD3CmNeZXRdTDh4N1BmaDW",
  "key25": "4HXFPAApXi75t2tmh7b7Ann2pNqCvc6kHRghm9itBkxc3oZLELK2ZuiXuQEuMmMxHFau5sXBHQEidG3gFCx8ntji",
  "key26": "5QmZkGmQsfTKjk54Z8rbj1gJmQJXtVf6hPthcDznA9ZKN2jdqHxmzPLc3VscvYpq1fDd3HCuAiq8Gp9NYBW11bHr",
  "key27": "vWoMbfn3yJyekEsohVzS2s5on7CDhRCX3JQxeuPzUuv9wiy8WHzpPs6y5C32NKMmBqAPXDSsJnB8wAT7oCnDgTf",
  "key28": "4A4T3NPCSUjn9dR3A2haorGdP7NSYFiymAnYwjpcDXseVrT5Q3sfhNcHGqsdgCEbecLyDPkSBeQCWxrhEemw3AvA",
  "key29": "2XbRESjjwzf9BoQAQfrpTCwcyKPe7aJ7XTsbvmRSjL1VP5qyiqG2ABbiYsPgXxe5f6VGi4rc3efws8AQMNT98foP",
  "key30": "5oDAH7HoGfRo3k9w1CMMoZGY5N1nHykvqERUVaP5cxqyFpUXvdRwkyhb27Fq96Hq5juZoKSaHReVYZMwsNPEKNLp",
  "key31": "5AFrqgHsdTGwxg6JgmPzgQqvWzLCpf2xn48Sy2xRJUE7rwkokrwiuDj6QsE9FiFFJK9YJxxKjGuLXD9GUNRmaXdi"
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
