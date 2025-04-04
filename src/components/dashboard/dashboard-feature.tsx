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
    "BT7ofCQsw8MaRAZsC8vFZCkvsZw4sYsgPHFZXnHmV8Pdvppcoz2dAHjL1648FsimVyPsUsk9aT7TM5z2vPgLAP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S29K4NGz7WydbMbo3JLZfSULwsqfXc3tL9MoTqndWxnkpCGGT9ZdVzGgkgXJ17Y9HYtG1E1ipkoi9Jdo2xpr3AT",
  "key1": "31JB3HJHDLYAFLcYMaGB1ZMYa9hQHgMKMUNcv7XRtuxocV5xkJ6KzHm8ggSz4mNdmK8eYBhMQLJhnyn2HH4iWHau",
  "key2": "4YxaqePfLNCyNx3r2oBTrgF6ubABsmKHS3sjN6akJKWom2Ffm8cE839DXbnyNE4XJD6nyBVec6aubzbCSohpWjs7",
  "key3": "4zEP8Vg6wXKEHffnZZMdXUYjsFnTfFAYJBXPjWxBBxBYtmUMyb8739VjWkpVH3dhbecvh2nhDxijLKkRNjiBZUiD",
  "key4": "65qvqhQPCyEH6jnS8Vh7y782eVrKpbJnj4LMb4n2i556ie5zKWkrm5bfCKE1N7NMc5ECPaTrEGKRprf2qGKgjo6L",
  "key5": "4gZYUAHkR5bHrGoRbkeUK8XcW6mJYJiuNaUfzNhUCYqUWt8ZtpwN6BXPGFwi8GaQXj4pniVZ2qDbnM3KkjqWfRSB",
  "key6": "37mxb6e8Pt1dZZfZmKspdBGWBDJL3brfVR9zUWKH4k5pHWNM9QQfMs3sbNq2TcDMfLc9g8Bm9H2qSPmuv7e37yc3",
  "key7": "5m53cyU8tVA6XwYfTgSpGjW9xpJwsHyDKdtiQMvPELcszY4pycBEM1vhr6U5YzYZp8VGk3qjnZruu6szTSXACJ4h",
  "key8": "P1DRJ1FaZbbaJcsUrjEJcFb5gMjeiMTnsXpk3uYyGDgBaALhPjnbjrLaU7tSW8BwaPpPJCnfAAeqJwfiqqyhZK9",
  "key9": "gzLH23urspeTjHXY3VA951zKG5dLYcXtY4p6aiy9sQ7M7ybDqAwrPmj2qUWpNMRqFrotQ6cHTTuyWkRmZ5jtHxb",
  "key10": "j4gUgpjKCpCPLHMMFfHS3qLCc9W91D59L11YVwjJ7TiQ3d4GZGJxk5UUxT8VC7uLHho122pT4LwYdSmRak5cZrH",
  "key11": "3VqRKkG3yWx7mxSAZuaHF3KTQQwVrJSnXG2GRMjhhxK1zqzReDfMzHXdhCk5ZrY87x9EnsCJtqkRzn85W9VTUveP",
  "key12": "65oazDhhFsGLU2fATr3eSjuqArCQGMtoruvUhqxoGiwvZXG1YW2EM5cwivUoUrrqBb1uyk2JyNg5NqrGY6C2m1E4",
  "key13": "535bfaxBLQY3U2LiBB9HcKAvKeiQtFHFcYGvCRsNt16tfjwnmcAvykorDS3PacYrrNvzGWpuZAYik2wNEXCSZ7Zb",
  "key14": "58o5Fi17sURC5d5YbPTaet7VgQURZxk5aWsQPFWhFxpjpcAY69ePnW5eKKkZGuNzfhDyXzBzC4Z41XJuyoFHMV3v",
  "key15": "39Yi8KdSMM2qUJ3vsiJaYTLqpNXMcGNnxdCUTFneyHPaU5z5EwuMvrJ9SxmUwTGJj9zGbbBb6vFn77MWZ1G1fXRs",
  "key16": "48SbmJYpQMSURVwhBR1xuwgJLAncHRJnBgyykUD2m8o3rsLhxYcaQDrcmUUacFB9wspu9qz59M4SHeufAgAP1DKk",
  "key17": "3A4YqkBPh8noNWRHq66GFtR5s37vKjXntYZCtEs2sn75ig4r2zPhJQj5vFagHJM9L8gKVjQqqFHHxnxEfQqvPYmu",
  "key18": "5ufFmSdt28o6hEGJcoMZuHXQLBHBSXEpvufe89gS6EZYXWJHwnHhbhDEpxuN9H3HP3puDgHbSx8iYHhVxRveqjfm",
  "key19": "3ca7Sf1k5SkMVv31u3ZjuWaP2FPYiUhw5nQutNmqBNxh5YE9xg8q1jbycu9Qc2hCsZ92tTNr3s33ir3pqxjqg3UK",
  "key20": "3QyuUa2znAdyfCp9Zfq6Vz5QnJD3B2TkgoUky9cMR1veLWnTXmwDEYawmhSTaNexcJFvAEnKyr1uJ3apCCnwxHPT",
  "key21": "56RY5WsGeJKtTnFB5r2gJPppRkqprHUaUpCtEjjEjrVnhmMUtXXHfaJBmVBTjer1VrNHMUTByHNgmQbj1nRmApXv",
  "key22": "5jCnUKgfbm77UJegRNeVLyYgTXirLZh7g6bWbAaGKyyPnJeZmcMRwus8A73YxiLqACiQr79Mrm7EUe5MBbDBwWjX",
  "key23": "uQv4Bd1us7CGN5maqfWD5pfotkLjZQ3Yht5cFDysQzQaVEER7W9dt3qhZq5k52E5QLmz5MhijLBboteCVnqHqhs",
  "key24": "5emDgbjLxjBCrwNZcrSmrSzRmkvARyr5HfD7UsfRVRXEwEnBYA3kPQuPRquCzp1eEEobX2fZkkyRV4zHyM4wggQ5",
  "key25": "5Ht9qAQxQ5sXZamTLL6JufQNwD6Qoz5qzk5tdE9nneTX4Uduztp3RtR653SGteUMdMKFhfwhdikiWMvkFmAWw1Mo",
  "key26": "PakEzsBDJZpxCWreS2MBg5v7ucTgRzpqeXsP7hgmMHdqWxZE2r3Xsdcm4ZmnW9FC3hsisRj7Z3JZQToekUeuYuq",
  "key27": "3XqeLw6Cf5siRQQhR1gK94pk3JxKGdSjKrsB3suXGyHyw15JzPbLM5no3aWzVR3Y6DtBbNceU8dmEHmjnCTQxPLV",
  "key28": "PYex4gcNwrZGqRUpuiDZxq7hau2K7hysWcCPjZ58HsahP3T2pNSLUkw6KY8VNUggvo9ioThD3T4GRqTveKmhu4F",
  "key29": "2Ajbxg67syjGGw37umxBBJe5U23ToYZi7SD6T1wxxTt4QzBWYF3TgkZrpJA2oZDDohtmBVc1MdPkTfCK1fcsE6Xe",
  "key30": "27wiFe3Ub8dBBrFfU795fSfetJXkxjwWPxwrLeRdwNCHHJND44Bj6gha82qjM7k9yiiwncs5e9dWjtCf1wZpG45e",
  "key31": "4TtStt4c7JUpDjfmHNe5FXe3C1MeGR7exTt4fYigi8p2L9SziauQu5ChPQdwZ4X9bgceAuRj6K23rDkuV28FTu7R",
  "key32": "3NctugvGo1oBJKhYVEJe8q7KbrykoeGUYRoRcpZtwqVbMqrK8DN23tJcUZCNRPvfsHvrw1YCbdLU3evSbZTDeJ6y",
  "key33": "nuxKkU3MYDRJBn2prA69doSPDG6Mq2XpXBze3MvtkrTP1Jd3bpuMgGJCzzjsLar5z7TMTR34WZvFkcwEfhHb8t6",
  "key34": "Uvq6Z8ng1Vxb1M8DwvHE3pWq8yEVxSSm4Fy4kphZksrvaopu9p5SVv8fajkTNvHHivjQQPBjzn2bSRp32ySNPKE",
  "key35": "3kkZZqQdWmhTT5tz6NL5s5dVqKzEsnGhXH1MeXqdU1BQGHSbvepm54uheaqbwDMNxJ9XuyWLc49hRypvWN9YBTRN",
  "key36": "2xdnA4Kj4rKuNNHyyNjqtwJrBTn7sJQFpVdXgRY6e7zDbFkdYpHiTrhTpoiJvUMP9KdCLiQyfmx3988FunLURnDY",
  "key37": "2Sy3pTzT5Gggj66JucFdqyKsAFe34jPd77kUedR1ZQkny7PfJW79hziGUc5YJnxtDJtBHZVVYfYkQw3xMRBaCGUy",
  "key38": "2SH4f177Ymh75VhWY3KejKGhbrRz48LPMocCmi9sTNCva7Q73dfjUxoeS7CU86uEH2quKhRj733A1ZuCsoLoHkoW",
  "key39": "3m9Nvd3Ev6U921nc5iaDxyZNVntpgF5fi3mDaUao2Hs3CaUAfj94nnwvaRH3muFaVtXW7zjRxGdAokLRHZshf6EV",
  "key40": "4XbUB3XD3o2B6U2cqdYECDBVoJNFwoWaHcUVMv45sQCww2TasYQGkaFWqG36GnYnok2etywLR7fWsLhwpohujNvD",
  "key41": "HHwLKoyFdmSqVCXiDfaKmKauD6iF7oLS6xAVHUPWGsneP2AWB3rAsyLVuuAFpkLub1PjZNjgaVsu6uqigaxK8Lb",
  "key42": "3mdps3Et2EJj6UN86194HTb5FxpUaU3kfw1GD68tpqC3dzZg6ChYxaD9gu5x97G7uMydQ2h1XL8v1vGXikqfDShr",
  "key43": "45DcuP7AzkZjmxprGZEXhMCSe99XcWCr9P7D9stzcyBZnw8fSK39v3QghUjKbLoX4ZzREj4sdWESLtTi6c9bGhFD",
  "key44": "BTnEbmfiwrsUWZ9vnEEfVPjewn8pb7XeFY3EQVecaQDFR1YNfRBCE4gLngsuCptBCRja38d4ZzavRtYvZ6W5wYK",
  "key45": "22LpUR4vB1PfrhbieXALLpE2GuXMnQTftu15Eg1wVH5qesBDG712xoL577PS2G8KNoW5es3NNznrpDUouwPF9VTJ",
  "key46": "LY7hTohNQ1aLczUcJRSSYPMPWNm5PNCniA3NAMppS9aAs2jVft7JrZ7iLzgPpKLq7C7J4UcNQDMgPNqGnqrhPND",
  "key47": "2Bz9b6sZrBivAhbEVz2aJNqnBhSF3gd9nTyKnASf96JQTZAVApNQmH335rV2kjaEdrs4ejmC749hSkP3wQhCzhAC",
  "key48": "2vB2TtYYToRbQGjXzBpG653R5eZH2bxE4V7HTBhXoJ12SnnqHm2BMAqzcVzsmr28wsPkkGruGPXCF4dyN9CEdULP",
  "key49": "2qFZ8tESRRyMkwCpNzRWBtPcvAWdDjnXBN5pXv2o36Pt5AfHDLkLikkUxHFWVMimipjUjZXVCDce4awGkK53AKg9"
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
