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
    "5pc3fmKXYV4sXiuq1QrFQyj6rDDfMZLiTs6eGdivVWrjJ3XH1AQEoLvihgtrNsdXDqZRoujgrAqDwfd8mTM2ij31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44XLaorvVqqKzLCNJGaXmWihHF3uGjYt2BtSccHPVMxYK6e4gcFEXaCghrXQjYbuHkHJsa9naZ6uhGQ9By2u2qEC",
  "key1": "32PQnFp89avCGgNY55zVBTbKQUwG9oRmP3tAoB15yrcUDh5YsDddovbUgE3DpyuiAMNKvwSThEFZxPTC9khTCvko",
  "key2": "4tdFcP96KAfYibrqZxhyds2WhPDvphFpkRR8pHXdkBb3C2s7okNjqF1tnhuz4Rp88rFS579RHVJeD3kotqjaCzyC",
  "key3": "5qwCjqnX2vkcbXUGQGUDTr349qVax59GMZen1BsJEDY2tiXVcM478eeDCkigTXgiDmz2CvHtoyWihLuvrazbxaN8",
  "key4": "2PGcuCGCebi99GFk7xPJedAK46pXeoSo3U6fAdUj7cVRgAtz41WDeyno5cPV7AXoUYrGAwtSDHgAAwJgcYAuZwDE",
  "key5": "5NssXGzedxp2h9ec3WnuVkTRzZLTE2gaC1NDhbG1LJyTxtm6K2SnPFhBCp3D96BuwyHmnJ4LdEuLYD3faAc9GYEu",
  "key6": "5FsA6qTF4VeVZZBuwFKZwTAj7hfL9u4cjzzy8GsfUsJkGeKhZGiqYAsz6YoYYJSW4xjMxsiFsKMR3h3S87wwQSkX",
  "key7": "5Jp89cyR5ZodyWXLg1JX7dL1ecVzx4r39VX1B6XQHSMbeHLSwM48eQ19tyi5R5BzuVroEEjE5ZBJbFZMJ6ceMKHF",
  "key8": "4fT2Ja5idYh3wQBunrvHC5Xx6QGtjQUWAdwTy1AzRoK33eAyX7Ue3u4xU2u9sBXGHKJnDZBtMn3h6s2MNjeNUzdG",
  "key9": "51Zoyo4HBPzj1NfWq9m72tsQszoTL8o6XLpDV7yWuyCXib2dYRmE4WQmDwUV8edoBx7qC3LwyiJ4JTqdZEpBTzww",
  "key10": "2P5KAe3CHeNC1eggV9VAjCYDM98uUKXWPaiRvrPTvzKbNhjv5SoQrB25gYN9spjWMfxLFFqiHtvZF4m8GPetX19Q",
  "key11": "4EecQdGXmXr5539bQDWkXA11hCHHcSREBd6BQdNeM7tDWcJ4Rdheqm8H4LQe8dYSBcg9Xzx92DcV2tLqP4SxAfvo",
  "key12": "AqS4q1Zp4E5PvJg5ZwCgQDf6PXSqRZm5LuCVuqvUq1iDrV4qBXUNmi4ugCo8UFMiCtnsKX4pP1q7Bw4KWsWHwtP",
  "key13": "3JRUnZvsG41E5RQr3AJtsLYvhAk93xQKWXVQJAFTChwj3F9MJFyhLWnnPLwLJEfkYwRCHwCA6Z2U72aoEXr8CiaG",
  "key14": "nPKx4ZJC8cntSQVygtqK63JVN3t9qGagR5fABWb5EobohoEyGgKkixrHxhFSsz73uW3Pmwr4Xt9Xe6125kSWtae",
  "key15": "5piT8sDvDp27pe7et1TPDP2L12fu2axuou9ewy8RRs67PygJjVvjNZ33TAY2dVyNymLQ5YoS2cBTQZSnCc5g6QDT",
  "key16": "m93h7C37YNmFGh2fJJScatV232eJ6mPtFA9M78v6ntGLT2KvnHfY2yMMu4UpwbAxshgBUrvX5TDMrkMA2ywb3Gh",
  "key17": "vPgcpVqH9gG1Lrnobg1UjXVx4yfxdPQCX5n9rtqVdVHqRLGcXVAgPmmP6XuwKbgqDMa8PMkePK6iPC4Pc5UW3PR",
  "key18": "2u2Fjo7udpLgVeAS3PQbfuJYUoNGw7P3J6vX4ToEntzqLjc2aJscHyfpLAwyfBFnVNcAdFxBUciiGvUhfHdEhZeP",
  "key19": "2Hy6F4Y2WCHLr7aXmdabxQjrNeW1pvMxUrNrDnxB4WUBY8jt3FandxMRQM8d17nwXoZ6egtFm6BShpzaxNT5hKhN",
  "key20": "2NoJBMj9PPHKq6PFHNPGNc87yNRvZ2iT3LXcze9ETvBCFByVtvcgkhNsaNaizBD1hLsSvpoWHShiYz29K8HgNQpA",
  "key21": "5X3puGVJWZdr5mSpJKH4xLuzj7tVy4PcfwqmeuZd7J3ciPHqpsqKAPvPhzUY7im66GeEdmvGcGUJyu8nf3XmT9Eu",
  "key22": "oKRf94QWnTm78j3gcnvjm3WcdoYfs3bf9MR3nvTHEQwjMNbbjdd2AyLbZrwrutQz56SNCdWs5Lhffg64ghwxPSr",
  "key23": "5XsrehoSHaa3ujqGRhi4D9Hkav1Mx1XiRk6arMP5uyD7YKrxHvWUzLNYuuNTY6GkBa4BBLw77nryWCjXEPmxVzBJ",
  "key24": "3B2itrMf4fUpGYxky9jEuwpoFUVxLnvrDevJhdkhXtRN7RS2VobvoWX8piKn18A6GSzo11cEY3HJ2SGWZbCrhYGV",
  "key25": "2aLNn9iZibwqQRqzsSyo1gVJwQoYrDZTtCJMHFPgYxJDPA5G9f1qgi2xeXzQgWzxvjb3y3e4dxiX3igiwHs5eMi9",
  "key26": "4Yxeq7GGfU9fyiAZTXpUbNKy4B5HxDo3FDpTEfra7k7LrTpLu9yneUAA53o7Fnb2Dkqf9N8PVEXZh6qQ6YUgBmba",
  "key27": "3HTDNSaWdaSNfQZvPZLZkGNn1FS43YHxURbSN59GgCvAFBdutnTMpGPJiZF7GpD7KH2UHUTPfsCn4QEQGBNgQB4E",
  "key28": "5QHe2squ7MW1Te1ETApEXnXKkXg2L8ZWeDy2CTVRuSWBLxtvEjg67PZraSfXWeSeKUwTCn8dueH5ujbNMJxeksy4",
  "key29": "5hC9f5fm5T5KqQZbndfaHM2LtAK4sACzsMbUwvHwgyUvSp5zJBLk8BLfftHwEo7vAC3aXhnUdRWVLgjwWWektJi1",
  "key30": "39FZU9ffNsSwLXG7tgqg7oyMCrK2bs5VY7tYqdGaitCufZ9As289nBpKcSCPPdenWe2biys9ipgoqocC2kzq4TEY",
  "key31": "W1PQ8hY8fxuCu68oMH9CpsU8MM4okC1PkLQAWDzfMwUHUp2NUR2r9U3a83hbRFDAmG1Dq3q2pM1Mt7Vv5CSoqHC",
  "key32": "4UWb7qhgAhzdXUuo4hHwHr4qUnhu6qHaznoayw7rvvdk6FgfadaQBaUSaDvWb8EjZh2fAU9xwzeXXQo7fh7XAQZP",
  "key33": "24DHMdxuhEF67gzJT4GySA16UAr43PALQbZxSKctxzGqG9RmjN2GDYKPQBLTSrdgJJrnSimHRwRkmTyEhfmk3UeW",
  "key34": "kMp84pJSzaRb8e8XL41YUyJUj75DLhcKXufVrFj7cw1X67QUae2N8aNBcFpm1NGn3rAA2WfeqErZ2RVALYuRy6X",
  "key35": "38uy4yapYafRmoSQEZdT3LWFx1eY7nCvx7FNPSA2Xbq4XEN9ZXGYupajHwm228y8RQEJGkZWu5346WpMAAR1NSY2",
  "key36": "4cQurkeyxk7Q12sEteFbJxwQqEWDaDwqtgowRk297E2UQ1XAq9KRKEbyidix5bEnbYDycSieHvzYTTrLrsPM3Ndt"
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
