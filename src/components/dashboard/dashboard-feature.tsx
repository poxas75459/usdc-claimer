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
    "fi9vdVeYTMg9vMM2ms1eFZ6kVub5WpVJgmkbMehhAJ4p8G1BKCUeFQyXJvSqvjekbakJhaeHcxTxw6kL9GVhUAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaJUBCxLJLvuTWPYT7FMA2KKzToWAERpy7RyD17qCbwv6GRm2EDQNznUsNLoEkWoDLMEn38iU5zHvguccVxjFoW",
  "key1": "4TM7Uz4DzbnBaLgEn44DCbkJtFWYHsKqD3kM5d3KPDpzKvRBqqvPJWodrfMEStVHBC692nu85bQdVWN1oSJeUx3A",
  "key2": "4EKq6Gyb2aGWzYNQhcVbppntkuBU4kD9D2vRWwxJv3b77xJELcPMFTtPRs8ftFbTNZwNWRiXDLgQZpbhJvS3zqyF",
  "key3": "5rcgsZduEL3qGnMheGeYwZQAJZQtET3L5tG1LsdG62RkyYsnaSeSnhC7cbfsbg7VCE4eGHqgkmy2CUXMuFf5GqWo",
  "key4": "4EaHSHenn9aeaGPgVm1C1PGR2YYJ3EhY3iaWS5TAWQ82yaujL9XiAzj7FA6p1xKSKkddbFBnuGRZznoDRR7AgWcQ",
  "key5": "3jjYvk3i7inPhe4dcwBf4ZxBrn2DzGVxqkvVZ2x7Vm1JqM5WMUUpSkdZRhpUNey4iXNcNVg8HAuJq7PH4FFazpj1",
  "key6": "3g84Nzh9Gma4DmB9tCchJpBN61WtpckgeSFL6NM7qgUAgpzBVxhHUqWebgUtDSwooRL5vS3uLrSe36YMiRrp1BaL",
  "key7": "3kpHj6J8oF6fbrRuWxP84KAHEBny27ce9bpHMkNzM79EnYV6SP9CDb5HDMwbFRdxNGD3UkU8Hq8EHt3rCz1QCZAn",
  "key8": "3YErF9piwgXnj3ZDrxfQJhQpzkjocVnXp8Q6RdhVQiqfzApc7rCxzKf14evVNnmJ1fLyeQsnpNzKDKJRgDhM4Hkh",
  "key9": "5vcrsp719dHwWJXAJQv1WwYnHaSH8emaha9k5DTXivHspeT9tnKhTY6qDQLRSJEXTQa3xD1duS69BwUQwNpD42yB",
  "key10": "4NnnwAaAYTrWbrabojmEMD42AoR5XHs9eE8HSoGNjc7FkWXt3Z6Ut855kBoEyVU3aYxCkpKjrbK3mi8HyVpm3unn",
  "key11": "5vRq3svi9zTjYosR5WQNXzfXFZtZ4gFVYbvTUhRTPYxTFvLNsd41AAhQ8zJdjXD6XqQtnFAk3BZ8c1g66Ny5a49A",
  "key12": "2H4KfFVYKDpvMwjc7mBYee4yjbnwMwatiZfZ8apfrPULBD8d9VrgEYoza3ozBX1WjgpcUZYSHVnck7sVq9hJkgef",
  "key13": "5htbA7uQv5cFCTFWNb1orcRE5kzCSZyDVTzriyK1HX4CXTqySCzNMc8c7n6QcVHok4RcPkhF1vHp8aHWEtyyDuA6",
  "key14": "tieFRHMUUK9vXMw25Ak9GvrG4wzy1EFkc4ndWX8HaJaeNgLXtEKTJrDmdCmJw41E4dd312zbo9bf2TiSvqX1wCn",
  "key15": "5D2Q2ZDG9BsmyYAxErnHYUtUUKEKxfwYRYun8MXYcKePH5SLGQm9ozgEaSXpvmAnN7ChRkH3rGisemk7FSeSWmCh",
  "key16": "2THWS5zgyoPjDQk2njtJVJ6zziMaWeUVjYYntEd7zXBAUsJdfack3U4EpffWs2zFmMTPqkMo8gHfDGwhnpKbbFYa",
  "key17": "4zjyFzEidahzNkHg8Z8UyEsuub2YJ5UCbMi5x6jkxFPEhokzevLXGrd5mru59BxAxkhMwY9PnVTLpLt1AU7yHRvC",
  "key18": "4eECTd1VSzKhEbiTNT6nYcJBSZfxaVpd8zSXSgi5Ni8Anw8MgPEAWV94qJr2mX1kaAqA7xwARrmCVTngHKdUkgBy",
  "key19": "2BhAshfz8Yt2hsvZGvB1HEjMafHJqGcG2gXAkEASHCDzehc2pKJhTjCniLGreP4nwcwPeE1ova8jSxknuSXQ15sQ",
  "key20": "5PjtB5Wby8zHhsKZ6HUdGf7esKh3irRr5q3H1ur2t9usAMbiphHXrNG627XgiARpmLdbNtugPR9M2Sh1ECvAanRZ",
  "key21": "4nAYLMhANTe1UN8mMt4fuRYRVDwiwXxMceQoWfhK6554aZD7bcgjvPJ7oJZXLRnXTWrTkfyHkcXFYL76GefuEHPM",
  "key22": "5bdrFD6dxGhjuXGUpGdkULrHh6U5jqR4w2QHoFPG3vTUKbfdUbG1QqDZvyCw3AW8yKbMJLRBC9KuXivEszaQfvcc",
  "key23": "BrU74EqdFNb7K1Ub6qwm6h7JrZ4YzuKaknd1SpSNStk7hrp6CuP3vDERtbJzpAExdJ8Qq6ggqJPxnFAgZzd2ykP",
  "key24": "3PPy51MQLV9zev8xoBTzfXLHy3i5L6VeAPjCcnneAXiTJRq6VLkKp1cGCCaDW8kCrk61p7jR4HXxX2gqEvrF1vY6",
  "key25": "4fk91SES13NP1ktvFhe8oxGWkbE6hMQbXgRrK7e2RoUiHDnENDytodYnUXHqbC7AFrGf1rimCE11k8NmBJjfsVGu",
  "key26": "3gqjkjq3VHghnAqn6PGvchaUdBwJMtCh79nxmfXgrMFfsYwQEUtxm3c3hAPyJEzgFPBAfYcQ9Ct7eiNh7Af9ifMb",
  "key27": "4L7UeBaYdPk5FhoKJ4LZFX55yEj39LxZ5Ecy9EE9ALcqgCiu3YfGJFe9oLKmTt2grydvVDobXJJPaXvEFeXps9Dk",
  "key28": "ZfkPMLf2MxWxYB1to3hDm2JemKvuWDZzrceK688HcFvmE4ajD4QbZZ1V5douVFc758KamR3AG4fLJngtNCnfPPM",
  "key29": "54CeHcQe2zdxiJWTmZvAjSYwH4KJpb7Wnzvty3mb5vcqBXbYUHynZhnnPe4yr4DT8wAqSMV265qErHQrK5GfvgFY",
  "key30": "2wbmYCgsnmBpWhWfxcs3bxTSm1prMpH2RR5MyWj792r8DxwxybcdQnpxum3Cd1CvwupNU6aTXvjHuUZtDbnYkant",
  "key31": "21F9c4f4sZ1WFJdya6ypMG5RCbkjUz4i4JFRdtXRiXsuPSjRBUPe3uenepnwKkGdWAzHzA1HJwiCW26QXZnCmdfR",
  "key32": "3FbQbtuQ9ox116oBG99tRjQvcKacusJoZsKHkL7AvLG9hRKmHK3AgUELtKmK1fRMpr245bbWqLEjZ7psxjevfKKn",
  "key33": "5DW68PNFxHFe2EoNo91ju7pL58NrXRfxuhtjmuNiEwFQ1Bk41KrSC3ESR26Ru82n4ewdLYtGAt7YLjxv9mYi4Bi1",
  "key34": "2onnNCzMyCrDqBFLhbGEFjeWt7wRTgfS31AaRbSkZgHcHMBeXYdCe7i3Vd19LbQ3g6uPyvtxYXfJiBtnE6QACAni",
  "key35": "4qj4JEnqeaNYTwyKpa2KQDTuHTHZeK6JkJDoP8zys4XmCdKWGuCBTD3xfda3QfFQUht4wUSqDA4XPazrcP84RLc6",
  "key36": "37ovYTwRPMcWuT3hFHnapYHxmPexdMCVq5ahjMMQWVgf79XfJyQpur8o4cJSeaUCu3CQY2TXhYWh6DWBaeJVKd5n",
  "key37": "xGNLi9NiABVFrkfXEP9VjmyE9bTu83xJ44kbVyMhiw3K9ZWxMJxLCfrdBnrNd6Z6v9dyqEjDP6z7ssKLWtgM7eD",
  "key38": "5mS9H8Zpj1K48bJqo8tEr77hJuku871FFESqjbeZUJC9Nv16be6oEREEhdxP27aKT1vPGHGvD4LfdaxAbbLtcvTe",
  "key39": "2zfkFNGY3bAvRdagKFLCpZckhgBFfmbwtZUo94QyVCTCF48AecSHgkQU4WAgjBjfpFc1w8BZSvWQL3PNpzCJMpkn",
  "key40": "3K7rPxTydVzbx22v5b1E46jKXozQueiuAaHXU2t2XQE9WowYduA1k3LaEnz7MKTYQjyasGPchTDSG8oidQ1RZewF",
  "key41": "3BQTbywZdwb2RD7davE4tYfysYhed4vMvHFjmycmokWpsXYWR2UYkLBGvYhVgrMDxLy9mR9kWuKJT9UReVySFDnQ",
  "key42": "26QAxMgPwzXqG5xzcuauPYscwdp521e4T6YYLHFiSwrmTK8H84bs3E3unvW9dfWJLfoNGN8tbMfeTwGZzAndZiQK",
  "key43": "5c1u8HynZvqCAyuiw5ZFMZoLVt3evvqsvpivsHyiCPN6GZhjAHGebbsibG6TAFxc6HybU8MR2B3UDZupM3dDvi1o",
  "key44": "4HTkTifrKqN4SXh1smyjd9Q7qvqWg3G9ZPvRXNsSMwrcSfNSh4Q54JwnRCZ7q7L18ZtKgtmvJxSmvcmmBCQGkmXp",
  "key45": "28q5UQ3LZMBtbErKfmH6Y1PmAAUeYb6e2Zd8cC8gnR8az8UhDUvrxhWhoP2bbfm4qJfCKKkrYNRJ77gJR58fvmhs"
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
