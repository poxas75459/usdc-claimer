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
    "ZbqTLQUAzZmaFv8Nht9UrkQAByMrr7KeYNHKEtyi32CZauxVRxguqKwxfnSHzKrB5NLeTw7y1xYTgPUzYaxMUyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AiJFgnG3shNk4rGfGrLyPeerK5ytHYpDtpe72Ruwt9PWJE2ESUDeo7bmfmtAyFTweNNe2ZiJ5ZFEM1REHsYCxF",
  "key1": "i3GMRrqgWnRRs5EHYDQfgXAHsquRm4VxXXpn8PfNb2y86Htscx1qkhrcaHKgD4yJ8uCowmvbQvGmRTKTyg8XiAB",
  "key2": "su2hTDEDgPTkaUBzYJPLqt4r6dSsze2SHkGohiBN4YU3zHBovNusBtj8B8xvYR3kydNjNzaDYC1Tzz4y8dh93LF",
  "key3": "5ZYtrrgN4huok1xaAo9S4ExMChm12yYk3CBaN39zrFgDk23Q4wEXG3QNAPxxcnFB9XVM4iJMgnDdvgrf7txnYnVN",
  "key4": "3dJ28ZuUMSSoUzsxuKfwMQ7C5Z4XbAwrr5ECBcJBJMkhibWzeEADeyaZ1HLXr1fyU2jLiX65hBwK6mAVeXCswegz",
  "key5": "5okRXc8ffUtmV2miwSMHFzuPBoLEVRZAE9oLa7J5U4LFVknKSdwgZBcgzELkdhVen1N1aiXM4HNusX6dxoRdM3bj",
  "key6": "5ofYAu38aBKUVyKPuPEPpQETA8fC9Qqsu5udg9uCmBhmWoSvcQ4r3kWnkoZingyXnYRfrE1dYCCU1s6om1Ff3UDm",
  "key7": "3oxk38cjxLt8LFKW83LtkDTk2ecsqEj8HRwEG5TAaf6rCA8pTRs1dH8nfyaD9gP2rXVbZrCWqtuEmiAYDaNQ7iGA",
  "key8": "2pH5iq4CNe6Wfd4A81U5PSpmg73wqeJbUFFqj6mC6BCd1QFx5yMFnnw15MwtwabiVWsUipZir1GGDtrqWWC523WW",
  "key9": "2PhgzFujjKJhJ18Si6XFiFtGYLq2FNKz9N1jPXy8Fr5pfobHFDbJVXxPD3d3y8RgWsFHBfuYj2fU4VLjwJW975x9",
  "key10": "126iU5UkcMKrz4MajkiHfFmRe4GdqLS75aadxK12Rwf8PJRBmqLmLq4uKZyAEMYoDevDokikymkQVqfR66iyCf23",
  "key11": "5F1PhhdcuWrNqenx7UhCWeVBYYTQqoVBPoYDkC3zwpSk3sMT3QqoGB6bKa3eHs8QTg3BciWwESEXknRnMBFdeTkF",
  "key12": "4eN4t7kGebEu452C8txZYhnRrqahDV5ZPaZvz9jcueDvYsL9gHjkWpLfg2r2TDcQYkmycseZKif7e4uCLtg7WLee",
  "key13": "qz2GM4PKNmzTpEsMs1Ct2sioUKPsmQPe1k4s54PJzgn9Ww4PDzFJQqxR3zm9ZQc9yH23XF9hKX9LtimrhvfUUbW",
  "key14": "5Liq7zPBvkuX6GAmNe5v87bZUGC8FosaY6Hz91zfUSfz8gHWyJESpiMLz7SLyKJqDx3sNtyWBpo6edF3KdhUgbF",
  "key15": "66GJaEmmutAhrw7EK61eRWDPpN9GpXzM6PSo7ntAvcufAx1EWrwV1ouUtkAf25QTv8TH2Jj3tT5BVDsK2gVzATXJ",
  "key16": "3hRppSQ5PEoxRZ8HWSP678wXWUtg82fDyDvPJKxWpCCKgbRLWVgrUM6oWXwS924QNYGZLsmWjZFhAAKMQWvNbB2f",
  "key17": "5rNpsfwbiFD634ZHUoJKe5jj6ithx5EnFWGPQZpCDaPDWL31ybxwsfS6DkCCfX4g9eDexBhA2VLmzimyubrCEphT",
  "key18": "5AdtoVwdZeqJVq1dmfLGWjLcV91S3JD1ESqKeXgLam3FLB9FdXqtC7nFYYd32zvdUtoBSHtPtahsz31ySMAg1nV7",
  "key19": "5SHtP8TV7SAGNtskri4F8yobmywTozJi2Q2B3cgK8ZFGAxf3dYHud1yvbHViLJTPG3Lw2gNGXAiFkyvudQY4pL8e",
  "key20": "DCw1xAYBN8mAsaE46LQ7Kuj6nBZBJKgA4C2E4MdVGrUQCpNJ1RJFtGAX7U6saURwyPTqmpBxRhyqU9vS18YNBQ5",
  "key21": "5Mn17CsMerpsgFmGhV2n7N46f1GtLc34KUq1RFeQPNwdcPzyQEKCDQhqMBrU5SjTKGQAPcB8CnqGwDo7uBDC1z3Q",
  "key22": "rXxL7BhoKbXWovDYxip7zoAWpqpsapSzjxswJ41L5374LG7Nj2V3ZRHVVT5spHetcdP55dmxSZRAXxLMq64FobJ",
  "key23": "QgLJqEZt313VfnwAy91eNf1hFeZrbjaJgm8qEYXV9ZZDS4EZKgBZy8aaipZQeWUze7rKWhTqhVFj9mSygU2MUXi",
  "key24": "55fgki6qwz2LtBcvLTEUQsJDtVkKGTnALR6pP58JxwqmHHgYjzzK5TxEygji48opKNmEngsk8G8TeJBPWK9ndvoy",
  "key25": "3zph7QGZJ9amLK27hZUxW6a4q88ZLbvy7q9XDoyRAbzNqaG8NA6ht9v6ng67rnwpS7wcN7MgCKbTPzCP91H76TEE",
  "key26": "3x7NVn2V5X6kbhawvSAAfWRRMzCLjB2Wr2T8aeTmm7xjpq4ESHnLVMzDiRKYg5Mmu2T6madhjQzgRjaUNzKMp7qZ",
  "key27": "4aKy22oQWJd9oAjBXzNmLWoXHugu2h4qBanFi7v4S5y1btgE2L21uK6JYgui95K4puQouNgZWmvCB8CVzSodxxKs",
  "key28": "4ypfeoa7mso1t1CGvGdbNGJ5JJNXrGc1zZxvjbPhadKVjn31eWYRFh2FEYJtCJy5T4BgyQdLP8BMwwQxNuvRcPAY",
  "key29": "5BtfZvCYM8yFx1pVeczJQMcgrMJA4MavGtF6YrHGTGvGJC9e31doe9YWQcbLUzVYZpnUWsGuzfnGLqs4Bsh7Lsvh",
  "key30": "NLy9RFxZ7bwsXs46tAgELZX4BuUUMWH4tewLcSShYkXpLaSa7CpxJTvnYxCMfvacanZxKxa65K969WCHt57aoqJ",
  "key31": "vsQfqa9Y4wZteDkRNUeaSbJFkdoucechhceBppDsNYM5C9LM2QGXCLeU4PQqd7vZ2gWH757RK4FsM7Sro5SjDv3",
  "key32": "3CvDLo8vyi7uaQPkHg7AW3oBo7MTGAvrFsqpyJeJNqKfS7Sfbp2o24sYjLeoE1AaTcjJuyd3dkG9jXXXDCBSd1Zn"
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
