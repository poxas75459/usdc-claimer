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
    "2LJupiKiCKp8E3EJxua4bvarz9ZKXhi8XvyBhYtyqho1FBg2cuRUiNS8cW8QcvA6J6D2tZMiferovfvJu4X3g3et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtZFCAzzs1TzzfjDfo4vheKDxJLxTuYt2dH8GCNk3CKZn8ePv4CECFmYEQsoPLXmCGRtWa8DEL4R2cGmodt7Ry8",
  "key1": "V2uM3bnD59MLcDkgqsxXJDwPXAY3ZAHKTYTxkfrUkoKr7psAV11K8D872YNoREkVshmg71DdYvSZZnTpYpSdYwi",
  "key2": "5ELpKjyS49m92fnrGWcoVCRtwjAAzitVPnPs5irjPXLaHNec5wb1dV2BtDeVbYLPLcrxrAPc1boyAA8NFMHuUGdS",
  "key3": "3vbCzWJSgHtoC8d9XbFMn5L6HopgFRjh6QvLcVKb4VWHBrgTU96z9DH8p8XMb1w3omKSSPsqYi4s4y2demXYTAkZ",
  "key4": "5tV5352Ytv9dwGsWcPTsh8Jj3C8FeqtMStdPLEjZ6iBw3YvWs2XZxKZZbAP5honfNPsXbV763goUE9xuHGpcuTgv",
  "key5": "5CwginFpwnU7zw6xsVVpC3rCG9aUFCNByayf6UoznKgpTQsnAkpgWZtT2NvpvXpdvem62VPH9m6hM4ihSvhsHmXz",
  "key6": "5ZQYBkSYpHyBVERntrPgzSTUw2iLEiUuGFCJxCaL4FvYMQU6fS6e1CKMTdM7844THXWKMvf248dNJmCX4Qx1UAN2",
  "key7": "47zNqHcZR5DdDtRaG1nKjZQhMarenSZNqXiaSRJbVzuxytfzfWUv7Qh9wWQiBu8z1akKPGCkAmD8GLKCH2fsCcGS",
  "key8": "5Mre8ViuRvWCWEZknc8rKnZfMpYcYetaJ5W5RxeLmwwhgqtWRDpVk8n1MqhWzJW331pxByG28YWPX1tU9kbdew25",
  "key9": "33GxY6reYdBzyjZpVbhQtNqQbzH5cDPovtVPvQsqsxLH9cMcN9ZeejU5Pn67pvkg4d7C1uor1eQ9zY6EPhnmRXGj",
  "key10": "UEXeDiNchha3DPDjUWA8dT9e1ioZsm6H58uubBV5x5xSb6SDAMzpDNvD4GZioxZqZjcxcjNyNnu3PLe91Rr5zX4",
  "key11": "2FXAE4Hv2QNfgxjWVzoeQKU7VkxxDFnJ1MNXtSxK1MNBnw2YtnHy7EYYwJLZ2zXzmznR67QKZoMQACjcT2rprrEF",
  "key12": "4RUwsCZgFLm39JvXY8Qrn9z45A8JxAQDX8gfCym7uY6xmNu8jE7jB8LjVknT5e6saxoR3XysPn788npMHZCbBCfP",
  "key13": "3QwoEHNqYCXaHtA4AzpWdaqETuNDhju9irdrFqyfL5gkSdQKGMyBrm9T7GrMbQKv9RUwBP5wPRqm4ac2mSuBQyU8",
  "key14": "w6zQNTo3FQ7AEmx7ahcuPgcTHhFSVY2mvrcKf3Mk7L2pxuRydEsXz5dqpQKwKzcYBZWSUixfcCQqMBsMoFrLb4A",
  "key15": "3HFzW1NDV5iFtNKUka4VibXhN9LuNWm3owMUD69XAqXwwAEZeQRgnR8cFeR7CXTjtAAPpGDSNVU4EdpXUiG2GG2Y",
  "key16": "3Y9GXPyVr6jzixvgGXnXRKWMcZ9XcfCjVbDnPF9fJWasuLw5nv6bCB1Y63twYMVDrPdbhZzWET6MPs5MGVyyAYZT",
  "key17": "fgCyFPkTLXWD6WkXzFgHb698VVd5tYVhGZ3FKCqiqg2BRWUYnRmf6onqavyePXv5QUYpF7QC8LejFBFanycCQRi",
  "key18": "4j39oXnKmECPGgYntYBFrLBTWkLMPKqG4fDk61v8nfGQE4Gs6JSkzr4kPVUWY1vkVfAPMxPbFN7AYHj1jsjaV8QM",
  "key19": "3M3LQE2y31QkmWZ2vEPQ8aepaHMKUSWimTyG5ygSvuJrpgTofV66bnzFnk4Ud35yz4QCRp38MmjKBiUwafTnKk7G",
  "key20": "3Sm36hVHrd4Gce2jpTdV9i5kpMHWgi2zWpyHmGxMyVWwsPxTj78fmxYVYVKqi4bAyVUMxbK9o78XAaXJJWUC6R1N",
  "key21": "37VmLii2qWCjkREyMFRFLbmrm7RkrYYkgnNukubFjKJXjzQ8w7UaCCjTgEwjvNrDRjrpJASpfQ6PGAWoHuXLMSX4",
  "key22": "5SVk57Qh6xQp95MxgXnTtVZSQfwPRtx13tVyD84WqXLZ9zxZpTp4qqo9BsHfh8usi8Jq3fksmzwyN6ygVoH61oef",
  "key23": "o8ceMsAKcmm3ndM4uNFji87QBYtTV5RLuuS575nusPSBTgqDHH1uUiZxeNwZUWHezkAL3fHbifztHfmRcfAdTT2",
  "key24": "DcxiyGVk7DZ1QvN97jcuLJ13TQT1McTHbGNxVtTwAxzytiEdp11Xz9Ci9dS1PKFGKjCA6Z6zC7p5bjFMbZ6HNgk",
  "key25": "5SFy1KHxcmyCGMH9rSHMQwCjSt5ocYb9QDsQjChvkaVyzFEPDnZiXZPJkCqs825wnyKSkS2cERRvxCywdAH5KiVX",
  "key26": "uu1kfNAXvxHaDR6kdXvU7fxKiokSemY5URdwGSnCigvmhkH8bvgQV1TPAqh46xchETTbaWbytDevwNNQQ72tBDb",
  "key27": "4Q25G2LpAZpjpzGEcJGrV5HsrgbsiC26wijb51STh2akzzjfTyj1r6bAvPN2kPmzdVwU2wunF3BFkzix9MScuQ7s",
  "key28": "66svGpTVGduxb6vYQTgoc37WAHPa9RghYxMbfX6YgFDB843CGyhvzFLtwP6vvSK38iRSvuoDPyKGJqH2JciVLh6u",
  "key29": "3fKn9uUTqQ2wcHQyTAbzxrgWwSj8pT2W5n9ebXDappUFmoPmfRABQXHPQ1icw8Kcz1qj5aFtkRGu7rnQKUqJBDb3",
  "key30": "4V2i6McxrHxQoy1Yp27U32kwGyqbkRyGFWDGqsWVrVfSKBannehtVnGMCcNaYcLoUky5Rw1zBnPdNPGeh1oLi1zS",
  "key31": "3uuYSsa8y7BKy8ma5pXXjLmyEuRehYbc1LL6cmqvmeA38YwYYRHQ4aszUddV2dN2BsMMdE1C5RhzRhYAS15aKbLr",
  "key32": "4owaBtKgacoxrL46MDngYb9GKzfLjgnrTrFKZcQ2p4PtJNJ7t8dHJ1U4QPDuMgUc8ynZNtVYDx26jc6Krm7tQZ9c",
  "key33": "3v683owhmBSLRmvKQBJrcsDzYoUZs5ax7bnr7CV7nbkVbEJeq7TcWjqnDF3yJqBmdGzXrubHSTsFWpNvXoqDKQX4",
  "key34": "4DyK3M3BEVXkoHQnHAFBnbi4eziYi1CrtynRKtnX97x3DWFUeQsGvgSM9Let9tKyWFo7Ln8vLQwMWvUkq7waVPmm",
  "key35": "2FccmTYfdN3cppxKPMtKnZ87wvw8xq73qnajHgBqWCCLVWX7hzMmGH5W97XNzyj33MSmvGW7AR2iFtP8cR4gamvJ",
  "key36": "6td8Z49KGFmXstxfJoxHExBgf2Qe4HVpTuhStEkfFrmaCRpxz8UZsTrYHWTxehJBedbFRhrahnmLWwVfBdccnCf",
  "key37": "9UBVtUrPty2TbY8BYCcb1Q1RcpvXGKTZraeEapWPkjwsrz6LgA6VGJV1YNGKzDASz73vx7VnZCS3dPRC3fhDUJB",
  "key38": "DX7CBDwz1xTuPHYEPYFnowXSRXzfe3FGscTSrPf6b7T4tXj45mXHhkX1WbRzJp2xmWXE5WbH9LCy9JcJsFwXCuU",
  "key39": "3wdQmM8hxU28F6vuEAZwHVRKPXcGw9ZHKCzg4NPZbeWnNMBnheVQ8WF2yv1gAVqmGMhCQuvk6My4zFyCGrPNisYJ"
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
