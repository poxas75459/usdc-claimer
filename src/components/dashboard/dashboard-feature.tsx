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
    "5N1zdSdHgoviDa9nEjnVQ4T89hARFnQR8yLtAbuHpqdm6NTDgcwVRMqPju64vc85WF4aXRLN3cJhGoMFgVnXcbrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvdBVQVV7R2CbEcvZwEvXmFm8SJ6efnTMdTCXiDrXbctj5UJJB4LjwuJh9dsc6oB9dwNPKqwWgc1nvD3qKNr1k7",
  "key1": "4zNVjg2WCUUkkdBf7bAgTq9hb7DDfuLN24t11sf1qf4DTzpB6FdpaQzVNgb2t5DoWqkHBuU3aE5HHYPHMEMpzKZ8",
  "key2": "5Hupc674joGpWHGq9oyMuiriR9jGnBLHTAjGYoo6geTGe1ZwemHUxmCEpggV8z5J5hciYF9GZuw278iPm5rcJtpT",
  "key3": "3U3ejndEV5gnx1ookmKYzYJHLb3RU7B8SK5YoyBzNAHhazA9NZZgA57Kcq3cLdYvs1AA9CoMr3MuGDeKd4si7QrP",
  "key4": "3yaDdJSj8VBM3Keq8GSdc6Uyo73hzeTJSidCvVoQkM2X3M1JTvqUrfFk3ihHU3N1qeDLdqnWJ2DJgNg7HbNxEBAo",
  "key5": "33X2Lf99t9fnadS1KqP8P98NyN2JGkLpN8CNgu9hsZFGZhhdAq9K5xMP7GEC9HsxvXzuFA2dow4gARU2RADxSSu3",
  "key6": "fVV58xpvzSXLYByMPo1uMzcvhU4zCEfXWXeAoZcZvJpRShFEUyKdYZqA3fB9Rf1VeYNmSMrq5Ww9ebyTX6nQrH5",
  "key7": "4gyRv6ocdHaqQpeHtvJgoLPd4nvyLcgVhdd5h1e3ssEugQ3k33UfPRULbV18bUgzERcRJVF8M7WndJGVAtmUS8z3",
  "key8": "JSdzcmTWuDEoi5cPZ7ShbRCiMhRLwnJLvcLn51Dbz2s2FCqVfa4VS4xEQ47vbbMo6PpiJMsWNZy1DtLmyripmwV",
  "key9": "3N76pQAw47JGYvhkLDJuLfYdrqTG5KgyyQQhCpXRdneAK5F7wqpNDZNdt8fPFZfKHRfEDBYoPEccjLpjCPmBUohP",
  "key10": "kTGfte2SjQq34SrmBBBPpfw5EQe9b819xhi5FsrjZQ5yt5sB9mENYPxS6HJonjuUpoianLtmSQ6YKRoduWrddkF",
  "key11": "2X6hWPHca92j6N4s8W3XjRd43vZfxXqxnvALAFA1Y1L6MPnxL52pmgX7PoaW8UugE5fQiZF4XCCMSs9ohGuBogsz",
  "key12": "2nEcphpUHfNgmhVtg4wi7A8fzqacJRSWwjcKJjukwaeLetqhJKKdw3V4w14outXkN2GVy1iHmveXYHqPk3vGcoAt",
  "key13": "Vyd9hugn9kG6RFc4nLjemyZoiMcSj18yVmmTezp9bLkXLjAhfXPTDsDgDaMCeFhBuBdiZ1iWKsj1mNbiA8K5Nku",
  "key14": "2uAMNxMmfCYomkxFmtDW1QE2t9txwstu5tKwSHR23k3Qy48TtzEMNsBf2Cw9xZmF4PP9QqKrmfiBaf8S1TWmBGGi",
  "key15": "p7PYYdqQdapiNoq8CtHqDkSao56AGyJnUhgVcXomi5ARxjzmYZfnj2mmneD4d2hYd8wJmwHfjoutDTBCwdr9bHX",
  "key16": "4sT9vVGhHeJbX8AbYAvVmJZL2kAhu8jDK9oruo8k3izP66U1vsEzhwrCj3PA8Qam3yWU5mxPJXjdV8WTLw1tUF9U",
  "key17": "5tjed5U2MpSRizxJf16AYSTmHUMnkLvVmaVyWhpkvuXcjDFB9V6mpqsZWHNr3n7YU182Y6ZJg8SMrJsFejjPLj1",
  "key18": "2xr3SayShFK8hqaMBaDXxSSB22efd563QFoNsa1oYxzoNHR6uvZKpXPvtz7tsCn5hFHCkMmm3yc8EJseh35tgZsK",
  "key19": "VQifpfNRu1XkhDKHiSCrK7wnG614S4XG4PtUh8hZm69cseuDPsjQHo4MZRzBuSKhi6U8zNeFiaLNj72V143ENyX",
  "key20": "37Bqr5aJN5JxL3JmjnjqFeSLmR4nzDwT99RgLbJqNW5EvXUeoLi1AzzuBNMphNbfhtNiDQNxXhtvHpNs3sBXeV7S",
  "key21": "4mV4YWoZPvzhXJPEBwjLnKTqFPsbzppyvmQJ8xPxiKcEpPribJHT2X4W8NTCedDBCp7XkRuMn3GrZ2c9zbAcpLu3",
  "key22": "9YMbNy7FxM3Ugo8itBY1PLQnhhQo5ak5DBeAwgCmDnmQQsGUSSMvHzt28CX62dXS6uZYWb9ZYR5Cb2XPmsGXKau",
  "key23": "4C3DBW37j6aT5oVH8HCpHyxa6YmJmy5vCT8A2YVY757uCXAZfvDiLqp9cbVjR3WUKRG625SZ6VZgtZvDCtgtV7LM",
  "key24": "3kFDY491p7hujRC7tNwECjVyJdnzbkRtZSsmN4tuLnDmrCxQGKVNtviVjLppw4sY98xiV3MMAhzuFHN5JNVdeuDv",
  "key25": "2FPMdv4Zs4w4T5xen8DYiDXKUMEMyUxUnzAvsJuA2gTk2hojrhMeHuTSMiJhnaKFCg5GYhzxwwE7TD1bxNZZht5H",
  "key26": "DJCmE9CGdHgip3tMr74CCfCrk4KsfFVxWUJSZSutsxBqPLrVGfQd3v7LbFa1LaQqsgT2RdfNvazJifdAUDxJT5P",
  "key27": "4ECCRmbWJSpjX7hNcCoN7QWfEEVTv8yCFh5djL14eX9hRbKB6cY17SuLZzEt7spvD45VSRMH6hCj1SBUVWQxfgjR",
  "key28": "2btGQWMtroZX3vye2xtoM7SEUHi3hDCFvbUvZNdUhRtUbpbTKL8j3VjBtccS68EYorYmvrGeH8JUijBjHWzHdHnE",
  "key29": "YgrQQZs5o6kwwB6zjaApW61DnLY9qd6RonVMRuLQ68MB3G2Hko5wKmR5MmqjJx7M1ygwBhYnsryhL1XYitEpQJJ",
  "key30": "3KUatE9rvjduci4ppNAdZvZRGikyG53z1TmG9fYGQKhQ99rahNSo5ryxqP6zD8kSU224k5hUTsVLXBe18P74sRLu",
  "key31": "573JsfhN1YvxkMZdThgRDehSFj7TMzvUD48yccQAxzqAvUg4WrDd725TzV99mrAW1UcrRjvvtyuuC6YWFq47Y2Wq"
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
