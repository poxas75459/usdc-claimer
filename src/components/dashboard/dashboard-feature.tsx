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
    "3y5h2QJNbJEp5RJdLdW8HJyUxLZB6sqMMX8odwhhGkqf8DTai1mBspeeN15yVpKi4bYHGsKVftt7QQziP66SXCCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "93daMqMVMAnqyEGze6o7uuzUoYbqpQf5jntuMTmwfM8ZqDQaNCjhM16WPoA7JRru6QAreFDBUHacep8G31BkqJj",
  "key1": "36NXCuup6p1KAxFRfG351rv2zactSygLZQvUzpnkK4ueqSYToRwwsgtuPkrDsk2U2jbz64kjxiTvGQykGFQuiGF2",
  "key2": "HovN47i5po17wph73MNWMCQWmZuvL2oh1BEDr81NTnKaGFMxjpCC7HtJn76pJGCzw2fsSiH1tmGSbsVeFGdJgw8",
  "key3": "4KntLCWcWNPssCo8Co7tCqeajTzrEviQXYaBJqfBVZGBLvZQZM3Hp1QD2ezRzyE2QV11QU7LkjHPaWFfGtnindPr",
  "key4": "3qwsiZyKVT3KZoMoaBE1S3V9Jrx7ZuJoAj8Vu6RUYsjPrjd4q4yb9Qpsxb7cx2W1wA3yGhrdNP5cDsvDLQBMRsHf",
  "key5": "3i9uoJEswKX2zaFwmgBqHDsGP9etqVjqbAemgj4TbCpVzwbjpoAVr2KMsVzBK324dF99VboavNFvNDY4E857YqDq",
  "key6": "3H3vuuPT5gPGvrTtyuZxDJ8ZZVAoB6LHkkdcTiQBMuHb6H69p5QyZ75hgpW71pafEWddEdd5RWyCz3EUsrhzakUR",
  "key7": "56JVT4ioR72Hsqe8C7KAKT6ttbC9HBEr2oaeDDh9htyYMMoD75xaAUK2Z3SLEcNWvKKF2Rch8XTj7qSshq3a5Zt9",
  "key8": "4BGfPG7CEozxQmDruHLZxqfWwaknizHhrJgqMko7JZUiMroADGPrwwxAR5jS472iyeivNZTMzG7QSo1CXHoPFanC",
  "key9": "4iR1DN8VdcZghCHJrc1wpExfpfHMdSVL2PMM7SjtRxzXTJNwKiSpyi7znuaEj9XpfAugHNY89RcQsdxV9e8DTha2",
  "key10": "2X99XWcSVCm1k1AHG9XJzKRjVwq3yUWAFfjDQcLZaMEbTzM2ASbSx7uY9krLXFviGJJfdGhcZJXtgpEKszQiR1mY",
  "key11": "5fd44dBmt8Fhw5j7wyNqgQUAAXPtV4Zc2BxAzSMHU33eKu8oCa9iDo8P3BqfRBvXBp3K5XRhkd4efdy3KRNnQRFF",
  "key12": "2Q3nv64pJYpcEcFst7errPXTctigwqdwfEDobRjruxNCPyH1chk2wt6DA52rUVsD81fy9hSiPSy5T1FjJfqyGGT8",
  "key13": "5gr53R1tYSPsLEK26JyuPpHkXn4PKJ3HBaYfR2NDyEWRzLCvzYtvcrtf4MZFHvTti7jdck8aaJKaxap4NqTGr3yM",
  "key14": "4hv3wqRtAKpdgubKit7aNuwv8EWQs8wjbqyepaYcsxkQQrUsWh6Z8ddVBZcSm2eDdAcQsGgCMNm76DqV4ftBCPzX",
  "key15": "3akKqY6hHNmUSXzfpXJyZNdrpeKiQSPgUSZ88owLQ5ae6Yr4pshRznrbnxc3VgG7C654kRG7R9aKJv4E7fTF1xT8",
  "key16": "4k2tFJcpveKTMJQ9XtVYBS8C7b3abPwVqxJHAbVM861QuqkeFsxLJEHnVX8ygrUcToUMRiHQAqhN5XCX3qzoYWM5",
  "key17": "31FE1cU51qh6YNaJuyxcEB7ocadSYuzuWyeshZiajDNa7xRUKdhSTk2aepR9DE18HazNTksj9CseegvJyESC4fZh",
  "key18": "5kf54urRY4uom1Hx6758UgHjJaTS2gqc2EaGmUz42ytcmsFycJtntPKxsa8REXbW31PysQMR2u4m9Z6dDQi6DwjM",
  "key19": "2V5xfQiRXJLi9eak99vjuS7gh41zM6Uc5GLesESGqbQbGGzCZu2Ufohsr6DKhc5xCuS5azXdbBRe2xWnUbPgFv6m",
  "key20": "5X3K48HBU6fYZk74eHH3JGkXzUiQh38GkMko5ZZq2fTtru6kLR5sj6Eejn6eUqXU3Ucu7128FyRX1L1rnwkcttEW",
  "key21": "3VxTyJmefnvstvW3KSPpuC7A1eTJx67UdAkmmd4vieYH4QfDWYAdx1nCgm7HNCAd8vZNhDsLgFEBqEkfJec9rVpZ",
  "key22": "8YJ3cWsgmwVRt2gWbdkHXvhy7rmJ9ftfBS4YJ1zfkKGTq6YcyPqNa6Z5k16tpxupNoEhfvUak72xYGuGFuVwTxE",
  "key23": "yGEkjVLst4uM9Xx42ndjZPGKhJUTXpxqQsf4tQJeBHuM5DDpaSVJ9sdftYkWHpBYmZGotJezUtjvjnSrapxL4tb",
  "key24": "2eijskC4HPVXuovfofdVNpNUJQzZ67p2jzf7rqrn1vLYwQGQsGX7oATL9GRnEEZMsCpVHW55xYrm5xjAYzjScJp",
  "key25": "3kbXn6ijcGtWzyQzBxgxWVrBHNkhd2nVKBoAUj6UG3Jmdk9AtxjAHtUS9R3NvYoAGSzHC5PVAvhQBeCseadgsQQn",
  "key26": "516VPzUjpNd9DJqJLCeTsVn8jfmyYPicCgVbABcFxReAw3Lu5tPxt8anwUPYLq8giDhLfSdADH1x3yuxhmjPnLju",
  "key27": "4GE35Rq7zv7qk5qdZ9p17hMxfGQaoXo3SsCEp6c7vKgk9SGAoj7m2SzAbpmn9BeCNoHNycfhfqwNLh3ztfWTbEyb",
  "key28": "3nrcqF9dXU87iEBGMhD9MmCM1fWBbm6eUQFAUaptAcHxoLRbyV7xePVCwptjKjWApkSW7qxXgBb5KdwRCAgLQ6N8",
  "key29": "qvfifBRNH3bGA5Zfao9jQg15wHpDQfEvFayAJgjoooFyUrV6Xw8CemDXKNVLHkbjo5Xc64tUTAE56ErdDELqh1s",
  "key30": "65dgmoCFt7vNo6uXCretwnMCAuvwMBSnDPFDuR7N8FvRKkP3vAyUGZ9xv9n9kYrmkctNkF7yjVVN7uUnaN4hY37X",
  "key31": "5vxzQqRDNeTg2wsaQ3exj5oCkU11vzGJU5cFb58VpzBvLkYZXpXqcVnpjUThqUavXpk964Ct7FCUogJ4qcJGFFVY",
  "key32": "2GhKQKsAxYCcSpV5j5Lf5bb5Q3MC1NcNLoCtnhSGpwqm9vxB63RodW7i81eX3UxCeiAEgaYGKpNAH9EDm1oDEkdM",
  "key33": "3x5Zw8Y4v6mZgtM7Z5SbWsqHkW8f71Jyzjw472MPCjr1PDpComJLuMJ3QJAkQpZakkAvs4FybUCzTMX9TDq1RrPR",
  "key34": "64Fvc4VvoSKbopBccDxhevy6j2xTs2Z8UahritiFxXd7VxTSLCbrFwZDPRBZJqfRnMEpKSRR8QoG1wJNak771gkH",
  "key35": "5qE88XZyaY4FUTHEyDxhA3oziaC76QY4oTJwmHYbp5qocCRE8h3TxD5Ht4xMq6MqjyKxUV7fAW8Vcg3o9hToUfQ1",
  "key36": "5H5ToZMjtiNpYGfrdF7piYAmRp2E2MisyXcBTsXRhkK2pq6yAgxUcUR9nm81wozTm1P3MmpryvW3ShNk4UhNgRMf"
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
