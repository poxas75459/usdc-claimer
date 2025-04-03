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
    "5HGpC9wsuksSoFsHoQWT7PxRtrFdCb4Wv5oiW84dV14iuzY8LYYHYP9ve5EA7VXArbqwVWZ6kHjyRPU35bX4LmKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDumUTt1pnCrJKirvGzt1G8xPQqRfPWcgXwkgzD6KPLTtMpkLKkgevLgvDd29YWLTQfug9CzPhHcK7Sffe9tUdF",
  "key1": "5swax729Yts4kDFN3HFgNraxMH6nbmJv6WUhFbWKLUMYdzEHdPvTgRdS6uA9DXTiKPxg6J2RyajSonp5GpdGdtyM",
  "key2": "nkjATTjkoG4Lf8g17QWPWQ6bXRrS8fmmDWFXo4Tgc8XNmFXvM3LrEgr3QSAdjSnA4KHzkMWB95Hu9vq9pwj9p9X",
  "key3": "f1NUw7zEbwaoJ7ipFg51eNYdmFe8My5yjroyjtFFXPbWoNm6emFtaEAmCgaag2hEynn2JkKKiz95c1nSPLEbHTJ",
  "key4": "4xd9nwniUsftqa93qnREAa262SKgATnxSoQcjpauEhp2r4tLfJdivoGTYApY6ECHZMc6F6XYwCjNSaA5u3oqjZ7P",
  "key5": "2WrLyW9WHqdGsiYX9AgPUPA1UvtFW5ZtfA65eDQFZP52wM8756taWRBSe9SGJ1BCPniyRWqi6FKNhv1eBaTVUFNk",
  "key6": "2yTdJ7hNXmg3nS7auhZhkqJx2SogFiUBnwyKABcfKeeXJ96DCHi1VErVCXh1ZYdL3vgcGBUYMUAczMCPfvDwGXCF",
  "key7": "f46ZDS8Q6FnZF4iEHt6c7fFyJ3yt884BKx5znqYSKHNdDKkR9vnkbevPjHVc2rD2Qtp9Q46Pq7QLM4ChR6Fn2qH",
  "key8": "4JQxVwUY94UWKYJvNe37yi5n5ranGXJJkBJk1PpDEsgm5D1X7q4xJkWp1TzeqXyrihEBWJYaQHPYPWk63JaeydWt",
  "key9": "4FZT8K1R6xCuRugaLFPKhjaaU2hZmUFFCjkxRxKqBvFCEFg711GxZLPrptyhBAXDc6s6anotwCRZVSdXAt8hPeiK",
  "key10": "j4aK11ZuVkhaonraN4Mt1VCCQrKTG4Pht4DKeUJLjP1jwfMavemSKPjMrf33BLhqKo1amNKem7N27jMYu3t4hV7",
  "key11": "54tUCEVzm7DEVJJ7nSMEp53d6qRZ9iNqGLGwMy5uordDXUVrpQ58SLku1z1xBLmiki36HQ8GrM5psPxjLnhM1RB8",
  "key12": "5E82DR5b68sfCqcvEa4fcA5Cc9oXieqKxrjYcjfoeqHr8GmHR3jHdnLrn5oo2xzc6yWiQSuH6y5t5yQD95HbZZSe",
  "key13": "5YYmeaTNpcupvNXFXtkwxjdmakQG6GL3YqoqKkjx7mjTcmFpMY9t4WXeTftxA37CoFedpPRLsTsvZ1pxSmtuP1nw",
  "key14": "2fWC78xe2zY6PaDH9XW3yfByXG3T4haxpQyLJ4MzvXAsgk2FYyGVZK5FSVb3fEuhEPJukRJU4ftMjKYaHrAeeGyv",
  "key15": "3W6cU2pbmubzbeUZYb9dhMJpSyGf7cUa7SFKpewQ9M2EvMRyEw3BbFgTw5YptpZ8WENaKdc6EvGeGCD4uHEyAMFj",
  "key16": "xio24UNxei8WGF6ErEVibLnDQvR6JBxFPvrUqoevsPUJ7aKPqB1aEuenTUchDjvW6DQSAcaPoKhpDK8DfwM98iP",
  "key17": "Y4ngrPDsCX1VtEeL15mBbh1prC7iNtXarVzHueYSLcWD22bSf8XCMdQGDDma1ZanUbW4NHswSmb9KE5cizUQvQz",
  "key18": "664Az3GD4G5cwPkxCeqzdY6n2gwfyEHjZ28XtSRwsYnVqeKrauDFm7m9EyZScq9U1KdfBnQZstur2tahXUHLGjd8",
  "key19": "41EgKQcvmqNicH56dPQUGugn9vbA8TZMF8ikYKzHbQjgjkio8i4uKW6VA5WEnXbsxMToneHtEsduok8phW5PoTpA",
  "key20": "HfSMnYMiDFpMXvDvKhs3wEVGLSdGtMGRBjwDhJ6JbGhomkCvhGAPczwecG2HBq2SrD5Ty4GYqMnhkRXBZXfxinX",
  "key21": "5d7h1kymX7yHYwMfQ8zUwyTs7LwzFbRgyeywpcVqdtugTgB355bW6ySKx2e6KPqFXcXTKSiC97DxXcA4kHUaNDJx",
  "key22": "457YK4VxqovdK4JQprcWauDoR11AmLji9QaqG35ioMH6Lp7Gvro3jfkXKmVKBhPzd5BqQzD3MPJYQcdQEFbykNeM",
  "key23": "3M4QvxMjcmBQHbvv7b39q1ysz1FnD5t14sWY3BmXdZNZPmD9PTBpn8e9o1KN8gpBdGiTg2rMBhm9B6R8EmLDZ58A",
  "key24": "492GMk8XsjHv4pGzvWMjuuQ9uhi6LXTL7xDuRTwYzoX1SY9nyUqaB72Fg9851Y4zUrZ1kFCxqGaDwZe661obUxmr",
  "key25": "38RDcH347tAjjX5wMDYitBgEg4TzcxW5DT8UbAL5EC1MrvGQEmwp1Ndd1keiko9dMUCVCQeyfXGRMyi63vP9hVgY",
  "key26": "34uhb49feZyk62iM1So49hFmt2MK9yyCBFPzDzKMYezreALhEY9YAszYqsPAeCkyY6wRCwZEWeXSUyNd5S3re3nh",
  "key27": "4ht5ts5zMLwc4R3qHbzbHA6sXx6Y4bniotMLZ4zR1bPqwZpnPs9TRhYmLyoKgbu8cNHk8QpYQDB5wVdSSZXnmkFU",
  "key28": "5iThGPQQUSNFGXWLEsQvR2QzHb4DG4ZLvjqF7K82tunPipo9acUZ61X7MvVdTPEZgb7XPCipbRZ8j2iVSqGRm5J4",
  "key29": "5jSuhbeAF7NQHcGQE5oBtjWcanwp1SqQVsqFHu7Ra7stdttYCPp32r6b3pm3pFk5E36p8gKCbm7JwZq8ZMV6zSq4",
  "key30": "eNRFNX2wipDifoFZxCZGrJpGjsUdz4XTZVdf9SFnPLBcUmScoprDctwV2nUSUmEzrQdCLj5Y2p2gKWUzKSZVd6i",
  "key31": "3xXyv4AdQMtewiTqFyV3YpxLkxQ38QBF8jXXcvxNkjRJbXFe1UEvhACrPgmo7z3LRmQRGbMdnSwdZAE8ugkuGMd",
  "key32": "FiQrU3ECThj4KZqmQy9mMBA93jcXxzHAmGUVZDNWXAcKPti5K8itz52fX5rxrnc9DpDDhqNiqwdxe6cuVS5PdCa",
  "key33": "4YtAntVmi2Z4B2HWYBoa5WvSWAYbarg5a4H1SmZUAjESSQBv9ZvbftXYCUjAkNQW5Cp3AQRnkK6pVAw4ckfp6bhk",
  "key34": "SkN7jNgQQCW81HiMaSpLPqRKCYyb3TXuHWdEt9UrL4Wee2ZmNfrhwzMbfcF4fS4zfRHLrP5k17BBhz3MgAMzjVW",
  "key35": "32RvZePL1z7AGQJBkwDv6LR3KiVTAPrXUvw199HxxtG5Pt6vvn3bAFFSSbar3Be3RDvCsitFy9WxRsYTe9MTBB6m",
  "key36": "43YHeLjk2eTqs4MmMPNboxjGmwmL2cj3Pte225jwJcCgA3XxLrboq4Eorpq12UmaiyYvZoxvM8LSJGWPwSRoqwdX",
  "key37": "Dw2nkJDDrYVm1kQArrptEgHkadRuDY4YWy4UctQ7seWq6Gwj5WaT1vXrbZdfJi5ctM4vVkuq9JD2H62YmgQn7ps",
  "key38": "2fmeet8Nrpttyuu7zST2h741CLU61JVEnuwBJHcvhpiVtj3m1w9iWHDBkjXgmQJVKE5k1iTSMK3SQ2CvkQbCSwx5",
  "key39": "39pQq69M2izkvsndJw3Yb2FAdbUtWiWaQMYNsPFLXgihn4fK7x5vydbUoFupJnwF1q4t3deZwubF2gPZc4vpcxGL"
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
