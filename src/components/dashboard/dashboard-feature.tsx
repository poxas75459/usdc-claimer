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
    "4AuuWxBZrfpebvgfMgtD61uZMf2NyYrjknzH6XMpcZ7BaL7L8cMmusPxV2dAb3bm3jZvVRWtzvjPCdMsPWHx1DyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQxA8mGd7zqb41WFmHDhgnxiPKxFzeiaxVbiKEaX1eTM5vUF3C7yHqk866HRzBxGyfqhLkdBctsAiP7iY7ccaiU",
  "key1": "eyt3PFoHATcDYXWKhsRXCeQi2RfeZAEL4XMCroBKuovYpKe4U1DNKs64XmiXcVPi7TMKbksaN2GVTC1xTKyGGzR",
  "key2": "3ABnGvZJwpkrarKER5mjjap6yL2Zpz1UHjxGxK7N7pBk3fLQhjphon398rc2DshAaNe7vKy9nCczNCT6xN6VHJWr",
  "key3": "5qcBsdLJs2hAu21SPvzCGKqMbyC3VfkaTC7618Bh6ytBuAQB6GPUTrcBFgaXXKLQaspVDZhXVAkrCHzuamUCYovf",
  "key4": "2gfPwGzBWgxnsiStxe8kHoWmE7NJep2Y5F6VgNJnZBtdrMzSeiwJW7p9mS38H7kemN3u7bfKZ52PUe9ZaeJGmSTz",
  "key5": "2BtypgpyshhL17J3zkBxNRMpKVLY7rtuUUcGNZxeq9aNn4SiM2cEi9swkTXzHq1SSkW6FoKgNpjid7zemPc5kMYc",
  "key6": "5ge5PSQRsZZdWwAaVfx7SxFG69AjDkY1wjx3apcd1cQgjARdLbHRtcqijfnH84oKNtReRasYfC4mRqFPkvZ4s1xj",
  "key7": "3mNoNXM3BiBc7hke5ansLYU2H7mjLK612JoKSbwn6zekn1TYmg2f91qDJc747NxojLS2YT7HNqNP85k2HdgDGSrt",
  "key8": "G2U6Btq89sYWzJAkL2WWNzB4p1FiDTRYpbSJfDZExg751smtq4qaQLdMRR6vqEawxrRHc2oVnppKvumsLN4mZEz",
  "key9": "4iggiULpdywHJvkHqUsak5y26PrWKY9arnPFoTjt7kuTKHGbETzdsbh8vFhXwFCPdwYk7z4KGBtWYzRqhYSrUywy",
  "key10": "PvNiAKSS9YqhA8JmxZhzxbQMdZ2bN4jtMSVmzDSGGD3UXdySNJ1VqrNs7xTfBqA6RkG77RNSDkTWtueDRNTzgiV",
  "key11": "66RMBEvA776RHARKTHhSfzS2eJLkeQjz9nEKSCVVyvUBvS512EoSC6mM3L2F4Vq766Guq1ed9FyCZTFBefptSbQD",
  "key12": "54XiZNVQ7UayHomSXewwyLhQeotH8A4Ns2hVRCAFd7oRAtbRi8Wi5VGmcBzDiGsg23LMrcE7W9dZYRVckFhVXepe",
  "key13": "5GXPqAvgLMKvjjm7BDKDo15vVka5ALcZiJF6uSrzog3owrXndzqi5B83SwSaSNdtcGV38aK3ndYkaDk4M8CkcdXZ",
  "key14": "2vZuM7FgErBActC7f73yU3AE7dESCEbmKRaWtH8sRPN3VLDyr7b1a3BnVBH5GXGkZnsQTmUuCiJMfNYGSS7twKfU",
  "key15": "5Ckdp2BS9UUieu6XqHYstFfTA2pw6fpfbk9Yn8JFQUjKMCkwxEEKY4PaFQnN6yvjcF549eY2t2TWsXcW76zcmssh",
  "key16": "5ZYDv8wtB3gSJnU5MypWDR7VpXv8TgiX6EfMK4Lm4YyYzqHuLBMPN3aCaiJEoRDupugwMgB8t6meBQq8T2Lfwmd2",
  "key17": "2pvy8qrg8rcnLqNJVCKxxmbRTjo2DetSBPpJyMNqty8ah9cAkPoXzXMLy2fn4uwQEcDd6xBcbpBaXMqrPZEDRWF9",
  "key18": "3mRwMmvfNaCBC5EWck753Us1aXKb51j515YmeGPPFnEUCxtGAr7LBkvGuoBdY3GeCkTkjJkzwKzy2rfEd3rR1UG2",
  "key19": "2ufwnqNneQ141T13HGnQ9x7K6nCkcqvxt3Hnrkw8eZQeLYoQd2QTxoUHf2Ji74PrrGxV91vSkwBcC6R3u3Tm7T4S",
  "key20": "4GhvarNd7HigmMByRReRNqVPd77SNuw6dSiVRR4j5krVFSX8XtpF9ta3REeMGN58TLtLgWgT5heKc8sCKDK6gWHK",
  "key21": "2rZtVf5rqcWsmmc5RKxm5iRCEdJtZLBYYrXLuauuyKDYSVhLfMt8kf89U3bkD3xKoXdkmk3AZzYm1MHuoPLG8Szh",
  "key22": "3KQ41CCDKqrmnqMAeWdgu7AVETLGDwhgetMKbnPLfTBMueseKcMK1qmUZRpeLtiwmQAMTzJtpdmq5GXrqwD7bVh1",
  "key23": "54DsoRAWCYpCGEQqk4hJCzCFjUq4LVzWALb6KDvTnn5kp8wzGQWLAt8152SBbyYb81BNztxEc6t23uhyhBw1d9az",
  "key24": "2f2V9THKpcUDxLm3k24uxa2Cujt1hoPhybJZu9zkEFm74DSHJfdXz2iHiwKAoPVCaMWzsTbnWUGQNGrZV9saeaBZ",
  "key25": "3KEHFBeEShh1WNXaXwBh7DQuvtdEBjrm8RfboXweNkCFqzh57FkVwh5cqHHMwurVN1a5p4f56S8JQ22Mh7wYUQ8W",
  "key26": "ruoPujdUCT8Hiebpo48uo6MUFGDH56Ui1m3e9Qb62cSsvGJnoW9bpJkGpU3zm6z5igxqscFB6UUcVg8hftVvjcY",
  "key27": "4UHi8bLnLXg6pc18EbnJG12xgTXz86guwCzQN1Y4PjhEazwhDuWyd4rvNc3UVsreP9NGS5TVSRDRWAyjEWYdT6XL",
  "key28": "2xNxNgMDDWFF45Dz7s68BF19M1QNvYdw2okGNVQ3TWQwV3agHwxx5ihry8R8Dp4t1BYbzux3wheZGGgCxHmbrHeR",
  "key29": "2T6gQVHMpM8taRmToAs4ALJgY9wvgGBHX98DLCyr2Eqi1UcSU5j66VHzyuXKv5UPAX9BK6wQ4jGyjcJww6v2meHt",
  "key30": "5QufoEkeUHpvrkYYWs9y5MsEv6aobHGi4daur1G3UZknjdnaJAdAPuH7dRfZF2ozaYywTQHSCu1cKmQm76cpjSH9",
  "key31": "tJggr6Ya7CHXoLHQEPKG7y5Tz6vr2fCXFqn7ChyEU6pCdPL7RpzqTPYnjSdfDw9WGCgQvbGc6nWtKR1hgM5wCxp",
  "key32": "5UYnptGnadWruQYCXZWgMquxmQPBJpxJVYfsHVVEGx28cXv1YcXG7tsEfH5gRbAYirfES7tygKS2Lt46sBUy6ev",
  "key33": "SDmTfRLC3YZsSpXExARBCcKoTPQRk23ShNcPJSqXZjZGufrGHJmFHFtkn8N4VViLaBmNXEWoy9P5SgA4FxEUihf",
  "key34": "5K57gY1aW3Qu3DzfF3p9UgWwiKy1AL96UT2rwwmKUYCqkNWRZjACZKLvwTm2232MzMVLp5dZjJj6uKFndUc5T2tZ",
  "key35": "dwuPot5pK8gB5CHqA1pLwHkttpzHQVyrPpgqjUZMXuKiQKSmFPzVCTV6Fth5c4jLXA2ewDbqzL7JFeynW4asGLh",
  "key36": "4FSjzGUbE1GtBqvJF1mKpZUMkAmHXSHv1FXn2iEDyNrXN6yEwUUAMVa1UB34NPTN4G9yLBfMnaguhhhYN1G3mwWM",
  "key37": "FifhoiASXfgpcqdhaFXuJ1YuDYytHoXk52ZToFudtxZdaR4kTWMtHn2Xktz6ir2ucAiHoeqvpUNHsyZsWdgmhko",
  "key38": "JPgHxyEC4m92pYY9YUva5eXCGLTpTBhNyHwjPLzmShAwGJSk4jpcpGLtmS3bpJimpbRMLV7dKh2SRfUYdP2irBm",
  "key39": "66dmoVRiDedmofbuv8ZTESt4i1WxWce3JMRMaXi8kG9WMYEALfxdiKDUUYogNzhLUCdCmRK1LVM6kEcg1Tc713t3",
  "key40": "46tcEaw9P3qxs8TBHhjQetmPacj2Abk3PVArThF2FnSUFGzmShDeY5butEZ8z6QogJTnJkLzHKDwgrQ6T7f9zQJ4"
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
