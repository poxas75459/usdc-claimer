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
    "wxT1E3AU9WDHyHKYjtchT8Wd2zwaKekpSVTD57AHvEEmnjvtXhFhcnGarJUCynvAHXshHRD6kqiS478pXDapvkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38FsFLaxgSoXoF7D3RUWBhe2X5j5TYFEKawatF2RhJNTFDTRwL8M1ujM5gFhGcgPpVWSuVDjz3YRZqwY9ysPo8EV",
  "key1": "pE84TSb82iT7tSGVrgG8TCg2pUbokYBiJAPNRsNz7VZQBXThfX44xM3MXqiiwGHhVmsHjVFgmhsumys4gybHU8n",
  "key2": "5GnAEd5zWfpuqVSR4kFnNeWprLia7EUqL4Nv4SA58j7H9SwvuGyG8T991j6bPLJNkCbGukSDEEUABRPhrfRvp9Pn",
  "key3": "4DFFhj9m8gn5gEZktLb3rfiwta4zZdddpbqeVGd8BHpVhucMyBGiCYEmqnWEQwUyhFQieZh8kwvATtcP4JjH1WNq",
  "key4": "3SFZH9e39uJcr8sxvRrhMh3LsMjbEQQZs6RnrzM9wHC38Wy69g8C39ieJzAzf4AbYgzQ7JyC8UdG69gAhqo5Xtg3",
  "key5": "5jcRX3m84Q7Cu96N7N6brzhDBtVtfX9F8PgNzDtKMJh7xDpaaNUT4um5LwkRm7WmtM3EVw2BMrD6iUKpi3ybdYRa",
  "key6": "2GvSU8CciUwT18m1aa356VhA53Y9pK6a6XZ9o2MYRSu86s1BcvqzzXiy52qjD84SjzptXguRUs3ugNP74FpDVjCj",
  "key7": "3jUtMgBdMhim7LPBkP8GFXZYgcBrqcsQQH7wWeXY2DWvxAL4nxtM3LXZ9cdVH4mJbTzsG6vFDbVB8TLBjinQVrX3",
  "key8": "5kvo3CxHJNv134okau2xky1u89ynNXXavCx3k9WZA7CVt7aV2j7Re5KJ7cEqrbnoDQiB5NfhZVSzckk5sBpBPfSK",
  "key9": "5ZAHN9QiJNRCKkbftdbjJ7RenHVWebypGYCyqFFfpg5PvEJiLWKqcaNFN4ii5am78hMGfuBYgyFWCCXW3fC6MhYV",
  "key10": "mSDhgaGJzka4Yi5YDoaknjpEAx2QkiA7aUhzuih4i5gJjjBrtCKp8UsSCMvnXV9qvX82FNsm1rtM4iUfs11EUox",
  "key11": "tcXVm3DseQBqY1apQ4XEkH8LZ92NNLr4vqwYZKLN1aNdMLR5XzYLeN4NuvcnNJ1yCEwYU2sRNPZwbYXAudMsbbs",
  "key12": "63icqFx1cLqE99LWRuB41zcii7cYbyeZCJZhwAC72zYQotCWSJQWbrUkQYq4twsf34qwhvxg8kof1iy2CAhZXbB3",
  "key13": "2h34Q4A1K8CzzZGsk3EBZRCED33s2N9KTWL3kfbBRXdHJeg41E4v7cUdHDyFtQJiPc2me22RKqvnqzz1eS62KVQ9",
  "key14": "2m6qMpxyAsKiUvQJ2L7Kdas6YHAzewUE6WCNAzHkDbNQjDyxY12dDRB9zQLcLQUSBNYKktGKzKiwk65Tw3sRbhGK",
  "key15": "VKMNTVMwAHhkGMcJFss1fAV1q7WdA9ExDYxZK6YNmHrQngdx8VKAFrjEmezc97ASeEne5Lu9gfRdjjhYF7ho8JZ",
  "key16": "2pHkZGf4hSvXutthq18dNtmSDonPysymu2AsX6TJF8GHrCRqh2u6kxPKcG8Kr1J4t65P9NVLL4THbFChv6xdWhcy",
  "key17": "PqGmoo1Wvp1uG1g5oYgoPgFsvwRVkRyX6kVBtAyr1x87RJ71KuBE4jD4UhzKmR2p2QQPouT6RaS8gGTKNkoWJq9",
  "key18": "37RAQWE2gvu2fzq4VKww9Xez94UDSvWVEwKYfofwb6QNchWXK8YZ8juqv3vtz7yN3g9kV2Az7sB4VN2ynQS7QqGD",
  "key19": "PYpkpx2NT8957cehuaNPfN4Ut3BJaws96AJaFcXpS7Fh4NW2ZAhDHRTXycr37Z1gETEVgNzSuFg3SUrgy4DeyZH",
  "key20": "2XMZPYSXKoArF4ga6ooTyjLdmidsmW7LLanLoJLYmmJ77X5qxVSnKWEata7KbdWWeX5wxiXaDPRa4t5Cfs2p6TnZ",
  "key21": "RzmZgWx1d3JbgPELWyYGJUWXJZeyvbHmj8mNKEoPzPo6M8jAZdm1MaZvT7ryPViuSURiDiU2HX9XvGcCZ6hGVNf",
  "key22": "bQd5XNPdzhpa8eD4rzrxAhUtitQEs5gJd2cHX65ch5NXvANQMw8K5GAZuwPyZCr3FzCyZcVcyJGFQ4NG9d9XWhp",
  "key23": "2ntQkT3YH5aJ3a3kGWYynUMN4fE1smS7TGZgZH4fxRjDVBEquJHKtEmHd2AtLTvonwo5SLhmu3VCtRDYqhewjJia",
  "key24": "3rYW4PSYijWu6qHnXATCgQYbJvQwEGLzAAJoMvfFH47juFDHDLx2uHrbtKL6yEMBvY2rEpVXtDyQiM4ZKYfXuP88",
  "key25": "h8B8Ab1D2fNP6b8k3jtqHdU6n3awfqTU1LiFF2VQvsEWDZtH3jLE3XShYKVvdwgCoJpyoXue1TNdqNNF2JybFca",
  "key26": "2z4P3XVF5FBZVS78XSx5q2vfMtR9NBuT2ErdUcMkg24kJ4G8YA3iBxiw6veUczT9GAZVbVSoced18kXccTLNUT3x",
  "key27": "Fdpiz23myTw3oKdb3D7YUHP4C3qdTt96SxZywYRqQFsd2reNZEZtvyJJyqV8XYKgPmwBCkpEcnDhLTBAYZGKB2G",
  "key28": "5bXmbADYfYgwgz3sheNPZkG7N5VUYuHBybyTDdKbeznqCS1r2KiDJP66a9enZsNzoANmBdRGonv2iWjcLK3iqRkx",
  "key29": "455Vh7Ebd8opJbnvMVVgnQZc1QRn56FR81uyCyaC1pXm5Gvffwvng3CNxu4xExRwJqm2Te2oKA3fwwwvRiNiQ32T",
  "key30": "2udkmZipjPYecXTmpfNnKtfeftA6qtwjrTq9hA7FvyyxQ5fnWscVMaW4LHrf7F3cJ3ZuLvukrdZxWjvPPCPwnXCo",
  "key31": "5om8F8equQC21EGyi6dRARZwiYgE7AeHiqJDjGaNuuaj8bWWz3Nx2XV38PpWXMjbDE7Sj7rqfxAya1PLh3wiXj5N",
  "key32": "3RNkh4Tn3i4X1nN4Re3Ly5d9en1RkEyfZBQjDaMJx1TCm9KTrAdp72dtMHTUGPuzTba4trdbY9wFXUhLqsa6uSWs",
  "key33": "7QRpLb3zJZ42Cvy4RcZLReUHLBpps59deXBVQh26Ma82YT9gUAsgvsCNb1zomEo9R8ej8qNafnocMTTwixR4PSA",
  "key34": "2J1tgLy8gLvp8t49t2H7GAYgP1Ep5R12dB1yrefoGyKrmjPkAZJrZcDV4V5u1csNnueKw3zNmZ9tXwKxFtLAyhGm",
  "key35": "63vt7rxL8cprhS3SpbsV7RQRooWhhGMGXGY5ZVZRx21PFNJQA1o9SC2gjvf5ox8NGNBfPqK6dm6tuP5me75zbDDv",
  "key36": "36JWfi6s6NR7rAcBq8p11714CdsN9HgMbKNG6Qg43PSD9NiaECUmm51aRXjQBy9TzpiRZpr89NsRCRcsdt75xZpK",
  "key37": "39g1AbYgenMZNpnjQGRyNLYQWX13mAKd42NfkBXr6nY1WeDJjYBiB3DYkKHKhXWXuDeKaxFYVHHJ26xRPR6A51pi",
  "key38": "tzVDkYyxyDmQZPu2oo3FqNJF3t9a5xek2BwWkfvVw1ubb3D9LW6n7HnDYBi6ctJinaB8jni6yNNTyamB5igiJHs",
  "key39": "bRFR5WQYDBkuxQ7dRfY9WapjWqMeExtbctr6trnETp5s7jfdEQsTE8UEFTCh7sPQndScLnDWVVA3SysLytEcAyG",
  "key40": "DA8KjbyabE1Tg4iyzp5xAPeyLdWLpMifN1GEWWuQgx9xZuN6Kg75Rjezij3sD9kgMc7hnJpPkBwTPg2GGbkTxWK",
  "key41": "UAHCf2vTXmVHzJHQnYRaLQYwdDxaxVePgTshQUyHsd8oR7Rm8UJtc5BC7WPiwC7vCpANdYYxbgrraYj85mTQx5y",
  "key42": "pi93dr1qaX4h1HWCPwFCpaUdpFn1MytzQRXscRy3dRsupGeHZt4nTTEyoyDwWgauuaWai41hnbpgp7BCL4wwete",
  "key43": "4RDQmf6eSrAkqwFvqam7syxWQUgDHYVUvf7QPT24PrsGNmrVsWGzLtCyBmrzDcrsBNESovWRF5dFBE9EXRSijpda"
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
