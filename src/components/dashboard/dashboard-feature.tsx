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
    "4WaUpeWxprdby2FnfSE1nRn7mv6GRxF485iM1RVPvwKbppnoVJgFmmm7zsNLi1rQ28Zp2T2yG3VScZNnk3Bm1XGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNJffgzsfxS8jBJpKXwm3HDUiKGs7KVKxxzsZkVZzy2Gj1SHW5pZUPUGRv7Y1fDrQuEHNuVRPWHBMhYtUbsRNfh",
  "key1": "3P5d4oQxae7e4JiNk4eZpkCqrp6u8htc8UqW3Ka9QLcAoFrURkFJrEqpmzzPTSSCHxdevcPKQPhtH2av4HDGxb8r",
  "key2": "5eziMzAMgQMkgNXpNCX8XuWz1H8UeayqxAvEuk6QCM3TFhMyL84fz1mdr9Ur5MkhPez8J4RjmJFxf6AeYUtEyhok",
  "key3": "2UGQDQ8jrMDx8ZEMPE5ELpR12Qgkx2MTxy7S75KDzuNJnUwn4QvDePYJXzUQS6e3KndpYDp78EZYQaGES4FXrjqN",
  "key4": "3jPZmncfEY7zwgvrXW1u8ydXsivV3bwSjAwsuTrBk5vwMri8oHpDQjTEykhBWNCXAzdU6C2GTbPQWQfHvhPxgEjb",
  "key5": "4H6frj9z2XFtqXYUsmjHqauMeAsDfLngBh1kKvbhvDT97X7kstgWWGoUF1pBQp5L87ccgEKC4dRkTf26PdJxhrtd",
  "key6": "GKKuLwSaT7SvKDPvGmDwcp27TKeGW2emcvD4xsDKTR8UuczM4PyjUHc81VKN97L2WKyq2NPeBrzQ5h3V9LomHAW",
  "key7": "Ji4z4MZzB8LthxXjmC9RUbgFbyHk8rNWLarPPbdwbVdxZZrf86k7KKUpTGcfqEeGnLcoWfTWXozdU5QCeSYkUE2",
  "key8": "5wcG1trcEoeDtnNuwi9LEGGhx4Yo8Hoiemxs63oFEueRbYV1axQA8kBp32wsT2RzaMg7SPxAN2raacWD1PWwgfPx",
  "key9": "yms4sqS24DGghWBDryAUj43h7U6fmxhAAkfbs2VA7pbya7jhDTrpqKJ1Cb3jxRRJYKTTSMVmF7bpnuHxTk3ZicX",
  "key10": "2n54ceKrQ66VvrKvGoVjQAyc2r73UiX6ZBUffpMDdevUiWZWvvpXg7G3VUB1kA6tyoriLqa8qF3Hsaiyni6uhT4m",
  "key11": "3Ft2HH95vCSeRNRsdsBi6fR5JCMLm219cuHLry9RQhxbWWbATU1eh4ifrePCJUPeJJm9pWkTzS8JdUpVyKN1k5TD",
  "key12": "5mekFxHd5ufMQVRX1hLRCaRHKjK74HDJRNcLueQ9AwmdyQN2mG4MR41UAVLr3GNnVwJjJiTf278Q36H8hVoADwc8",
  "key13": "4dgAQ9roCPjPVBiaRuc2U94ky8xwCRUSsnkwxESE8r1UX2fZxBJQN97X5UFTZ4EknirX7KLy8MLFbKq51kyg345K",
  "key14": "2c9ehNrxFNDwmRx11EhvXv5qtxA1Z7Z9qmCY75KMz3mLRHfBjs6YKtptQsTJSKrH3SVbABn8ER8Si14NMfEye2fg",
  "key15": "3horanM5AeFreTUh4r9ZbHt6ijYUtdQRZXvYCoEPdTjD2k3TRs1fiuu4UNuwMKgkkz84sqEWHqYq81fYhPZ5yaow",
  "key16": "4HCb3ZJiZGfU3jMS6Z1pJymfzahjKgbPDMKiKJmcjA7zmEjRXjpFT5WWbaxsW5wn4n3TrPn5YSLnEqmnwL3K1tF2",
  "key17": "5Z7WSqMLuMQAEJqQNZALokaA2bY3CPjhEE3jKMmanG6pL5jzHbH3hUZp2whp96gvUpwfwcRqgkS2KUPgAGTLpVGo",
  "key18": "4ZW44QHm2bU3bD4tHC5gHF7o6bNZ9LCmiUavBsB62tRmQ6LL9GXxiWvyouQLPyjjPBTASNF7L1ALqUkvwg8BmmcX",
  "key19": "3T1aTpeKhZdPLVzw6Mc9YmreAYCmPcZAX2uPahAU22o6VcCVCaDkVZ6QezkBn6viwnn4zbCdLPgv55MjtvXHLfpy",
  "key20": "VcrWC753iT2meoA4demKVZoeDRmT7fvSK2PDUg73d7NAC42VmigMXMaUggTRw59okTeKfC6WPaYkyDWZdaFowH4",
  "key21": "5vAMYgo2NoCxJbCU5uNevxQUrWU2kGdpeevbUkmSQdt8zjCh4T7kuuo6QWDWs5GLtEjqy1L7jitJQ5cqCR9y7pKh",
  "key22": "5GDDVu1txTqoRChYXf7FxEGPv2CwnL7XUKvSy8CEjBLvgFimJtfxTz7uSeD6GQ5kCm5iANYgqrtrxpCkuBr9EHR",
  "key23": "2nvFzCr5m6ZD3XbWzw2zrtXvfRqfYwby6Jr48cihKrcSB1hFtWEbFJFMkRN3U2SUvgUK6sSSjHoQTwc7o1kTx33i",
  "key24": "2XqveHjM1pLZbqcrXZKCBCskdJiRUre5FDm8Fd48x9Laaj62kZpgCmnEix2kz98zuBajcbqeTH1xfTy9t8frHV64",
  "key25": "2ko8NT4yq3wWsQc4XuHTSmvYbdoFC1d4daRZsGxHqeZ5sG8t8s85zAQpbAgXSYdH1H3QHDtvpaCTJgyaLPKcKTJU",
  "key26": "4QKWwCDFS1wLovP6NAFEavWek7VYe9hePZeB6LtioB1iS8zQouT6S7mB9tqmGtKeQtSWFL48dB2u3edY2TnFSzp4",
  "key27": "RTatqUUPf3pYsdbY449ZLrbHtDiECUZuu1xkVJ7KCUbJ9hqugpq2uADK1gpoQsi7VdY9MhtSw8yXQHXfMCU9hWT",
  "key28": "5hfzb31fFWGaqtJkkK1HbcotypH34sZ8qkWwvUQsG7neUvoH1svvXHKYdFu8vqXu3Laj1EVHXjCjx1B79CxH3yqH",
  "key29": "tvUFX2qTQTbznJiniUnCSwfWapbNdFiByoyaUGqDiFFs9GwezAiZejKJKgFFYER4UqRM2PVBphbWp89tppx6YAQ",
  "key30": "5odXb6igCgmR5mz4e6GTmYLHchMW8p1ZiPCZvVyeouhVRfBtd6mpNjLy9m9166w7TKMJUe4doW8Ed8WTJB1gphcM",
  "key31": "2pP4jUuyhvuhrXBz68STvE6Et2JSdqkFrg4LufEeDpYfjfZ4R1VBfL1noy7ECgtfkfMKNd2W1YxrcwGeSchqjmKf",
  "key32": "3WEaFGnYSBohFr2iLJhxrLBWAJpCUwxaf4xjU5qQb1zmo5obMSUqUPYMu6GT1CAueB11xaJzc9dbhRJq5tn6HGiC",
  "key33": "5xbPyLTpWLtJK2V2kjaAd3KQXS5BvyFrARNYauyWb4hFxeJjeWtgjUKzgoPLxJaRBZPh5bybcoxRaLmVir71R6gZ"
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
