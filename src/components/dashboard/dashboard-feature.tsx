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
    "3UQftRBWW8v1Bo4r4yYtQi3qd6bh6NnNJZRbjtwXPskkjWvCj8u655sraTZKSpuYhKEjBy4LxqA9KbtfxZkGxmYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAegvqskiRsVH5LVZECCaPwgwALjgLbv9QFxzCWFvvRMiwKr7qtpfVELo3QC5eCZs2RzNsbaAcLtbDAK8UT3wrg",
  "key1": "2V75JhPsdMRw82ZBqb45Njwt6j8jquhRNieu3oxCfgs1ZTLouqs7enMkuco9NEj2Ai6ZH9gUqrEroEhvgtx5Lf38",
  "key2": "2c9wfw8Ub2yhGiQodrR6Vb6SyThkyy4h8SR7LGzperru8pqgcs4nx59ZdJdu8ZVZ25QXE3LpYTLfgJP7sDCi4ckk",
  "key3": "5ZKaHeW4oGJot49WSv1iX5LBzmJRP1pDsnAV9tEQ3ss4aTHBG6GBAnk9AVTzCUoJaVPi7GckatWAjaspAwP3ifwy",
  "key4": "4KZW1uVfivbDiwH3m4G18tpMKDG6YoHa1rnufbn8o95L27kJDKjsQ7RLkGmdRV4dfKx1maUZJCgZQ3JLmUApT2qL",
  "key5": "3SRjwgeCr23igvxL4M7rya31XELyQCtiByFbHGPPDddjhLTnNvroJhhKoNpvEmcCFkRT1EUrLQRfTWQWdQyb9DkR",
  "key6": "64J1HNaVLyirtgfreQXHCp4AhhPETyCJKaoSxRX1FaE5fryFBZuXhAU42FjPyFE2Lg3r5FnpLaRu5yy6ob4SbgFt",
  "key7": "3BubBV6ByKnNsfZghBG3PW7z4harnrqmQ1pUGVv3h2FwDtXw3JtVsNbzKN1P23QYXq1qH8CJ2ZCxNsYS5aWHH1Ud",
  "key8": "59gxLMi16d7Bz1mm6y16QrAmRsc9jDk5LmjPLapBS1P5ueJMt7KjrBLAxuxwvuEzWNjLSxqGzWKKgLxJQbHLysJx",
  "key9": "5gCP2i3QVjftUiLAMUBo2BkER4cVEwD3aCqL9fauhn8vK1ccFSdt539VBssg4JH5PdFvF7Fbi6aQ5kjxQESQMbWG",
  "key10": "8fg5fz4HixU8iyfoLu7TuGqzH3PPAyAKdxbJGVEd46JDJbwe9DCUdEFD65a4avghJXFnK8PjgnDpveQvCXrUqqX",
  "key11": "5e1x3WcUzAiB6r3c952YUdJFY9D3FL5fEZMuwrVG1FRm1KQhtcZYEaXv5woqqgpocgHKa154dXiMY8V1r61rb89y",
  "key12": "gd5hjf6YxhX2Q8DJDm5EeMjhX5H7ngTRPbjo184AKTGdqKHsviCx2r1819XsAFnPjrxEoAAA1ZGp7FhbbsnYsJp",
  "key13": "5aKGvscMSGQbhTjWnSVmCtDHtKK59mvuvXM3DTZwY4AGpmNv3kApjbaaUUK7HWDoiKy1DYrqqmwufwKLcwjHpRos",
  "key14": "2CrVYmzkdyWwFbvXVVCe4DjsE4aEd7FuUe3jo5b2GS9toDjPmURHXyK9rbs4PeX4vdcio8E8PdRevwGFHrvzU1oR",
  "key15": "332qgTcNmxpmY6MmBFyHdnpAZ2jmRgxWNQFZPvded5Yc6gEVg1REf25kymSsxJwcR6db8dANNAgANjjWggRV1L3f",
  "key16": "x9UDpeRJfLWzXiUApJfgyMJgVNxnXGFEXszgJHtMkiDPE3hNx5bY13zbLQifMqjJaaj2xrqnk4QxxXtMb1yZKRQ",
  "key17": "2gMUKtop6TSEntQjjpBfvyjsJ4uZJG4YPZwa8hXZsy5hvg1iQCEiZsoEJ9s38bPuhVLHZa3r3SEs3RLN3Vzfnftf",
  "key18": "5ZmyXFxBaMPaDasegZRWiza5rSuqjbWsDKmXNkM2AuWfKXT4LqQMmmkd4JKBf3eM3YASZjEBe6XK6gj1zgRwyExg",
  "key19": "4FVyXepoM8LjBQqVGPmxU2q5XhB2fqUphC8X9VmZiBoYfVTDJshaCJJJidh7rt8LQ5PZLZwv1gXiu9S3m6nq96Kq",
  "key20": "44W79UKAtMQEaHg7VbaaW8eZicMGzfXYP9CxxWfLEMqfHGxewJSp3FtQyeHUfQH2EB6g3GTggEzQR6ycdk9GFXNW",
  "key21": "4o2hnv5auGKbaguLPn7c4Rc5xmNPKTiMn6NuNA9DzpApS9vR2YsWMjf6t3CJTS3S5Qnh7yU4zGPi7XR6AFCzf3Nu",
  "key22": "TJbuubPns7WTJ9RHs4kasbur7GynXbrnmQxRBhDWBNTKMhZrKGSaQ5KSPkTXTPedjMD5ZPnULpWgA1NCEEBnCEu",
  "key23": "5rJzybpwVTaDXswsdzjPqdVxbxVQB1HEXWVJ1jkMudULcGzJdK9ABa8Zxxre1ytJWdiHcgPDm2YyLqtnmtp9pxY2",
  "key24": "4sqz1iE68jzB2BxhDQLRmqdPFuAvv3ce8ax1WtaCiAfeRF1KSjnAKXkAkYPnCG6tSc7h1EPMjsrMP7VStbHCHtGD",
  "key25": "56VKDLZLQCSozmtsWewdtiVeZr7yvBwc2r4yK38foHcUY4fpmer7WsicH8nNa3Di4RoMM7bwDurN2xWZxiRzAxzf",
  "key26": "4yBUc7f4bzhvAWWRJF8o1ASpSZkyGKbyqzYB3gNLiSc1ZLqm4SK7baJNBXPzPQSTwTZGVBe9Ru51yTfdFxh1xRLf",
  "key27": "3nCoHaUXQPnLyKAUdeNnfzWL8pfLADXjDcAhP9drRnLByATHJ9PhWFzbqyL8qgWAjaFBgjnXaUmdXCA3bw6KRzhJ",
  "key28": "54uW7MPmJ53BtPdMA1vofkrRvx3v5uQq4K2g2qzshyGqRX6nxeGyWtSPyr8FnKQ6HZkftDL6soDVqC2iHTY1inKf",
  "key29": "4kXN66JuHZnnMyj7ztsoeLgFsYMyLbDqu69R5Cn5QkmWHfiDVLJSswTGXWstMM4bp7aYQyYFE1jAPryvvMqS3QzP",
  "key30": "4XhUcFog3cwmu95L1DSJ6eH7TKvnVbnH4dXf7RezQCBTUpDtULBvXSgqEU3BUVuutdSyiXuEXLbpGRrLLWwobPi9",
  "key31": "5Jgnjpuf86wiet1dgo8S51i5x6VLzyeMftGA8ECfhoYCR8ymVxd8TPXHpPZY8QiFyBh5fJLZPX6vzNCHyxswBJLV",
  "key32": "4ZhHuyBGPH6VN7rS9k1HNH4sjBtoc5x5Nu9yCjbxmPiFQVeZbCTeeK62gJCdtoTuVrmgB2XSH5u1dTiKmNzg1eHr",
  "key33": "5jfLLGb1LyMJ2h5ybT82tPQKerV6atjbAK3rsC6VCRfYb3UKkiz8PbF2CMfE7cMYbqVQnF3nWVvxb1r69otAMat8",
  "key34": "67rkUX5hBskB6j4QgfgpK8zDXg8wnhhN1kNnmATmTQCoVxhdVFVLvUMUFvdUBm98zLLjqYC6ptiZb8aHMdp8cdrQ",
  "key35": "FSGFYnHYGAUrtokni7ZrFrDXUk92wnT6zLGnttKARsp15hySupvxfWsrFVt3m8VVAbe5MPtPYPSS4aCni5khGJA",
  "key36": "3kqUTJaFtfNvxsuzac8pQBtjwVtkRxSUskCr9Hk8Zybb6LuxGjSh3gAo7DX5UrgnvAwRjndn2SdsdkKAvWgmTGxh",
  "key37": "3zWc6z8SWkzvo2ogJFna7qhHv1bzHSDYov8DR9MQAw3t3r1oxbB89uRMMVyM9BNS9yoP3z5r4V8w3bM4UnjNpPUe",
  "key38": "3UMdAMD81UJtu6xL8LY7fzqYhHSeSNoiW8rPk5w2uqWG52Xk1EXSxeVXeHS2yw4mDwPWwU8pvMvrCRcmbNZWGFtX",
  "key39": "5oMDiBrMNUXZoh99D88u9L1uwAXxqM6qNhoQD3PSfCg23E7GECMGpTgfdadtjeaPYGpFGbnw1rnK62jRx4VsVNwZ",
  "key40": "569pXjuKDuVjXs8Cr6ZfmTUSJjWESxSxbQwqFhqVHfweJ7QP3uExqKvJXH2gPAhH42oKpME4o5YadHgEcNUxcUC9",
  "key41": "irehY1Gccn7pRddu73NzVYiJsM1gsXfHjiKXNCMyC7FAhAAb1DyJJ7iqaMzawhWReRceE3roGjjvLXARMtnRYir",
  "key42": "2c87boQ1L1wuqUSUYsW7vYP3PCLS9hJMZrNaqUuHXNbu2jVp9nrsceqzsjnFoFR7BfBdVKxyFn8bA4CoZ86i5p2F",
  "key43": "27ECxxhQYh7BwhVKoaMCui23LwNHnAGhXivts37n9kowhRt9EJ6rWdWcDJKLYqUYNwYJCFrcnzZXURsP5ZzdVBkP",
  "key44": "4euhCiqNqgn3qFvLCeXihxJcneUigsJhzMbDTMQPqQ2fkXDXndrEuX87vVpVBYmoTUd6XEJPCM2PsBQeZ9Z25F25",
  "key45": "2SpuwL6SF9SfKbSH95nNGtX6BJNpuSvFvoq7ifqLyifuhsXEpuowDWb4jv3ft6qcmELxbuX62r8ii3CUNKYBKBQ8",
  "key46": "2Ys1UZmu6XzH6r9L6KrXPbrUA1vdD4v9aqf6qhcwFGmEQh5Hgo8KeSSkDxHT1QS6hX7m8c8nwLqjV4MthK8j4pmM"
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
