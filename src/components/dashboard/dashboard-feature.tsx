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
    "2dAazu1sdyisyCYKBjmU7xqeMk8UqRV3Vy8zaUw1ZWJWuow5wCPDdw8SrPE4Rp7Nys1LzcsGVEoDDUXp3wcMw99w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wX8ZXtD4KqaB34D66Ze9ee6Cqz9npgQdSZrK124Td2fATTa7Q6JLWt3ej6BBwVmnmyTtdqcVzYGJB5oHAXw84qj",
  "key1": "s5cTS4pLZeXnuMPo7VFWV54YDAMr54SkhAKDEmBcZkX68D2X5aMHkmbHvqu7gLr8d7FDaXYEevJqgGYVVBfBRTJ",
  "key2": "2SMHv432mbZv79kRhSPknk7wPwRXQRejuqiPXdnfzUqFWut92wVmQCKDNBgHM4kSKNDwEj14uM6Tb7Chm76YM6tL",
  "key3": "5eTjG29bC3W56usjd124TsNanDMkacYHMRVBehjWyS8kUHUPnR5ZqzKKKBzGQCmekThR6A1FGCB7LnPakWsFNxAR",
  "key4": "5SvSmpbjV6No9f1yEhcZVkS4mPtUUZDR1idcJPNLz4Uhm9NmcmbyvpWgzyNTf6Q14TQi9Sz7HZpKW1kBpr8KHjgT",
  "key5": "CgKTEQhJL2qUHWxCThK67GLD1Eyk4eMhZ3v6CRAYMRDi4Ma25gxxwfwHoUwSK12okujksifMnB5VidsnP649E5j",
  "key6": "4uK8cVkoL9gNpoAfzguYggbxPPv2dvsSZDNLQPTsiwesSYJxWi8ijF5CjdfPW54ZWuBRfTD6srsHfkbqiK2pNroA",
  "key7": "4DcH72Sp2PFnTQkTZpYHV1ezYxVe5QY37UmD43t8ktXCjNJ6qX6uPKMbXVXsjjiKZAnkf7gjnBAjJJ2TAEsy8hSM",
  "key8": "4JGJhAjeWHfbpuHJtFYhdivYFLFJwVRTZQLYkZ5GcsaHyosa5V5ZMB63x1or7SXeCPuQcn5vD57FFdxeiM2VvfZD",
  "key9": "2QJCN62WMtSbYkZup2wqv4b8LWaA6zSaZMgeF7WmGmM82jQGvG6G9E2LeXxtmWoDajE9Mz9pgQTLd978n4uu7h5m",
  "key10": "43ZDg8z28bES9QYoA5PTtxRjjtjyRr1KA3cmjFtU16nYFRMG18ZHhmXkuVZge2v3XREBPj63hcAUCrwn8nJNYhaT",
  "key11": "5Snf7L9abLx8oGZNKgG8FD95PqFbWRANVuRTaxHox6GvqNc4NJa8UTA4FnGbp1APJRrZjojUvzgxHDX56qDSbs8R",
  "key12": "MTAyTcbjqSFU1E7oDGg9ZP2vtQuqSkcWVSu7fAppqfuPxEwRU4mq42dzW3zcEPgcnZvs9RtN3vmhKBL9h1GkW45",
  "key13": "2YPRM2C4GhFjVPKaQALbqFGsiTRJj9WLkrCYuFC2ostdpqLfhJuZXdMVDnpUBpFkQxN9kXkyrxmyYwUJbyqemxZ2",
  "key14": "2gZoqv62NGyVNn8qtScnnzi3g3DvV5rGby3EoRYFqCfF3g4X6ydGUiYMpTAc2opevCnqv8nx7DsYFpAvZ6Rgp1EM",
  "key15": "67H4FQbFrMkwHsW6KJwzYFa7Xogjw6Ex7BwZGonnidakEQKFsnHMdW9r92va8TdywPF8c4hzkeZ1wD8ZPpRLSmkj",
  "key16": "4jir3DUmcPo2WaSa7tdYKPpwYVyQ8VyVZMy1GGXETnC5kNeJRwNLdyYQahBDoGmyXvZAybTwcdooNyGjPn4YmnJU",
  "key17": "4MoENYcKr8ZzV6dT5KuMjks6qWrvczWKfcTmL7bj8dxC3hsRqZFTXCPK4GiCfwbhkgNA3QE184BqiE7BTiQRi6of",
  "key18": "41Cs3VyoDq8pceo7FsSapNQpV4cKnwB9iJdhHZ1w6dbdX5nfScFHhuMFSktE4sjz5zmseTDrAAUiyFxQX8isLk4k",
  "key19": "42Nycm3TjTe933nAYfcDo2b85ThCm4ZKkJcd7gxoQQrPjiWtLiocY6HFSrDNVF5DK5Di8GQa8zCzDTAWwQk87rYh",
  "key20": "2RFUvE2NF9aN4DXaBXwAVmyw2fiP6kz95CKN1yjer5iYuQQVPnCo9w6zcHyV11wjfW4XPLnPmmyRjnpMvgWBDrrU",
  "key21": "66SPwKDH11wqQvwyrSLPk6ugfWk51eJy1iDPNVumYM12Wzt6WDpDMEnxioRhg113CWNfjQ6fgF14YxST9Qcda7Sr",
  "key22": "2XDEpY2THk7v9WTDDQYHwcwPwcvXhdUZMCmyY1u2dreXEi2VVVgKJSwzwzo4HApjQ2JmgTHJFUjevAtr1FcVBuML",
  "key23": "2mTFR9VCM5GtHdq4W5vUrN1jgL4mDQ24NeVifAQbnFj3tv6JEkrmzngNxA3q3bmTkfMv9sMAuNxnKQeXqQjQ3pjc",
  "key24": "53q2fx4Gj55aXdNtubxh6pzYFcTFnTk8ng2C4tSGUe8YnQZgFvXLRmgAc82vUAsur2RPrdwZUcfcz2otDp2eSwji",
  "key25": "2y1kVBBGPsswm8BTucseohyNec862dM3oivLetpYKTPjnABYG1FsjAU77Cg6AbVCdLjSRvvAhxYXABesbNv7B8KN",
  "key26": "44R7cBqivDkmBJmqxsgcNCzqU7xevmMMNCPv1dmLBo6PdiZmtqU4Nvj1scE8itBe6gBZgLmv7xeSvcu31DxtXt7C",
  "key27": "4cMe4gS7fugrzQeeqtoHzdyixwggwzvrJFohXApQiXfgjHybDFFGHX4Ya3FGuVNQad1e5Pa5zFM8meFvjLnuPY92",
  "key28": "ERCVyCHypskBrcFxWNZxJv7pR4vm9ZA2RjmkRBenN4mfXY5ttKDrng4AZxfWq6AqhwMKkkUJdkAMZ47Qey3R4Cr",
  "key29": "36ePf161AgzNahLLxiC9vyJwP8kHqS9YdQvEnbzG4aMe3jumab4yKCjF9ikR6TTV4L98L9McHVVRHwdiMFF7W8sG",
  "key30": "2KSpMxUmbRsUrCWCu1CBhcHTDsJ5UB3mVBZY4oyrqSZRFDmQo15E66y3AbadFSYxT6dSUSWxJqfJnoNGMPMbyCzX",
  "key31": "2ycTQDKJykf4GKkCsaVxi1ibeLsnfrABaTbikJzFFadXdhSSb45WPjEGnhsas1csHPQ1BUoumsX3adLTcuGd2SWU",
  "key32": "35xHSY2dtEqbiBui1eac7kwKyE1XSS7HGr93f64KNNJcpBuvNsx5cS4FFXFaR18cVD4Si71xzjmeyWZcfpNUn3Xx",
  "key33": "3pcpEr5qP6DexiEn7u4ynzJwDqXRv6wAnkfhAdBSm7ggSzS35oB2fD7YT9m4vXdobvvEK47wE1VpsbUvXCeRcnyT"
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
