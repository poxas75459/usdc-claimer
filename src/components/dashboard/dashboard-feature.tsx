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
    "BaCt2C1GWHzukH7JgbZdrq3Z7FJEu1kTt1DWN8LJkNYJAXcz1fkpK6qEy7YEzd73qt8Y22FgmDfuzio3PKEapzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vm2GzUnoNu64vWCHme9DtsfGwNnPugqc6fXLjtU1oQiKWyByCaDPsBDjBrtpympYXYqPieF7PDTtopgheiJ9iTm",
  "key1": "3s6bNJa48rpq22AePT8v2ysxrYd9gssnskKv6RWaxweasx1ddrACXZsnv7TDSU9k92bQPyicMVZkuq512NoYybgb",
  "key2": "2nVSqhSiVndcnjqnBPtv7JW8zwt1nrKqU4RRahPEA4tKWup3wWpwakypfNXUB6eCDynxXSckC5etKW9YMhbPEbhx",
  "key3": "wnGn8SMdD13TFF4iU61qS8tmpMZ2uDcnZb8JBZF3AHiA2QRJ4yjzWVTYCzac4XVhoqWP1C33DNUBbQu4frS46Zm",
  "key4": "4NS4cwLAawvqwx9X4WsUhwtzEBWwX12gxH4h85sooTBWVPQRoxaxNy5UWhbEGskN7cJ2oPYRDRWo7sGL8qtfjkuj",
  "key5": "3zCffXHJEpjcXQhLhGyJu58J84kunc5R7REyyfVDhU74u6H2wPAjrrnD66cpFNgMMg37BUU8xMiKe1TEHwe8hthd",
  "key6": "2jMNaLmp16pEzk1T7M3LyrELPgnFCC8ftLNcnBVr9pzdkUYGZHLLc6ZPqJRxX4mH9tys1D9GtoJ4hGNVYDMBhcUw",
  "key7": "47M6vnDEK2trQ6Twbs9bCjRT53j7rJ7v2BpqEdtkmUqMSpwrjc5wHodyijMP6uv336cksdzSbigniC8kApDqezDM",
  "key8": "4J6L7bU7TMxF6eHzKT634AXz3tYhNDPVXsWV1q2oDAnN9s6VrSsurTFQfw6XDQkuYjKuKikbYVFuuzBG4un3Ezr7",
  "key9": "2mKnpRkjV63UEaJikoUo2w8KBRarAJx6NVU794pf76k46TNfuZHM5CKBfaruWBzK7dNYkozswV5FkoVQj56xVhp9",
  "key10": "et8UGzd1xstUiTWHyKeTHP5FPCfd49PST6Z9LWZfNZLCdDiZzYzWLdbVyerv16Tf46CsHVSXfPsiZ7hGumyqmks",
  "key11": "4opXWDooBumdCEe5Db3DbZDy9dCpDAUHpHHZfH5d6xXKKAqqqVM8ogNsfUHkLhXwbqpzvJRVgtm4yqqVF5Yfb6hE",
  "key12": "3RBfcZwJmf82r6ujL6Tk6CsVDXfcuv2N7pwj9ygUpmoMp8HLGyME4yEaggRi9C9KaRxnXFsebFF1RFebN7r878JS",
  "key13": "276PEEnr8q8ux6XJyWHmjb2eJTQTs8Be2ji48fdQLLdXq4sePFHZuTvbDB7XiEcYHFr8AYnFQepPMZECdK7UnrmR",
  "key14": "4SEm6WWhHd1TtEp9dQ1sJ1AALNHrjJWZ4UU5KK6irhoiH6DEquaRBhFakAEeuNz87JPBqD4E21p726FZKdgQ9VEg",
  "key15": "3yfzQiXT9hqPW5LFuzEUsFPcgHV5UopXn1NNs9TaSFKepLTqL4kAr3wfxxJdVTFo7EC7sqnESBCpmJMww6tPFwwb",
  "key16": "4uTUaQr7EwjE6XrmJ5jHTFPokZMJkZDjZsGyKViGwFruAnCgXzW72w16MHefccnotntkub2zrubM85Fy3rqRD7yn",
  "key17": "5Yk85kJCh6GkECX493oomFhkYdJ1LjHrUyF1WHtvXAuBTw26CSPYnXXJhPhDWk3v7FMKDdW6QXQHgYbafihbSXf2",
  "key18": "3629o61s3LBoaYxL7pC9utgsBg9UmjShQNsvfdAZR73QB1yRYdguvr9EYSHNLzqUHj2B9zapMKpKJKpbTedM5VMn",
  "key19": "5Z7svys2omNEsFJh7hWs5CRjC7ZypLCKZMoFYtW7NR3er5PVLw8zMp556XpjSeeAo9ggpmB138RTZBwtEyghSpwj",
  "key20": "3wwsnHrf7WqrfSKrSFxz4LsimMZ3qSK9pfX4KjYczmCSJmqMJZfXRk25ayiF2PceA2tfQcHvbtDbq3mCgEmtDSFg",
  "key21": "9DwF4vf6EjqvNyUVDY5UxfP1wCFRx2UU41mYrafzrvuvmjH8wLLNWApL2H9FLAFBkzynrMe9oMKpc4G3DxGbsB5",
  "key22": "3HFv8C1DnNTKXNxGaVD52NTVNcyS9Pi6p4MtiaYUZ896Y44Je1n3Hm2LGhoeupFWjymAHZCHrgkgoex84yJCd7hH",
  "key23": "4fWGwvYHx9Bv2HRu8YC5RrWCo6Lnmi6zoxEfep2xNvbQ9demqGC5WZARThRonizJ8LiPXZikjxKDDsPCmfh155ct",
  "key24": "5b4LfXZmbkwLEeirHC3zNM7B2JcEfPCXkXNv2dZUd9tp2QZ9YyZVyFRnoT3iv1mjw4GzH7yH88qHXk9Sn6gmXRga",
  "key25": "2NqACxH4bDSd4dRAJGRSjx5pHoTTja2MAZkHDN1f8y7UvGpz2pgVT4wY22bwvHLzhwcwR7YjbTsSsWXr7g9gV1Nj",
  "key26": "3dVtdjQ91jGbYpKiBEsTdtqc7W1jopiAyoSCv6f7HZQDtFhik11LvkiUnQNopoo2dQNXA4aVpc1Lr7HR8b3Lc8qV",
  "key27": "nkK2hybTNhhf8mJGoNxJCTgnRPdh96BnNnQCkwZ1YJjdb9V4w9CzoJsdAcM8YVWZQtse77VoYPb3ShHqUNuEMrh",
  "key28": "pCDkWtLHq35nPo88WAJEAT6EcekdtkMEjAu4tFrHWnLSh9o82eYZvdJoAwukYkyYqcvevULNFU8wZpZ3WWNZMiB",
  "key29": "5uiz4SiTE68sGeVmitAZfdo8GFG1F3vAwKvY37xyTpp1jXEMuPrRWsA2kWaw2EscSfuPQKv248DkYBGA8CkCye2E",
  "key30": "4f9SVLMhepD5izSui8scwbfqYQXzSogb6jTav12DqjppjhTDH5Mf4VcEMek6QHoBveG9UsrGy4oVzFGQHqZSqNLc",
  "key31": "2pM2Fuxoj7TayPJaX839q84Ytzzen2AnU2EjU2Q9ffQzwTUrLEziTXXatDGrYKm2TWsPR2dbJWefbEvsqLf5waks",
  "key32": "3Q1GkAXTwxzF4FBTPi2CjeZRpLHTrHNb1c4N8bgDpZSPCwx9RoVxCPE83qULWXrcw28j4ADi6Nyj7KqK6HjtaRsw",
  "key33": "3vr7Yn16wQ2RKZSdquDMeiYPkVouWyK25KY8gGqYwoVdEUqQZvwWEpCtnHQnSX7UTwrastoaSLjGNdV3mtpfKqur",
  "key34": "3pXmu8YdE59GNSrXh3GMxiKfkuUtxwSMUQGYMQuic3JW6Z65FiUgN7XvhU1C115sFEvoWQ9eqUphZ4twzsEWB1sJ",
  "key35": "5DFLQuGKcJ12WsDUEwo5rXvooW5gwebpBkk8yDkRGULqmfRmVLEvnqmwcd3gr1v62WaXawgEwyzHHttwXuCqdqmc",
  "key36": "eWm86cWrNCoUTKq4HuYNtV2LCHHQkpb82EFXeJBdRenxMKAd8s8fEPc9YEzPiwMB6p9yxu7BhjDN4dxdJK6sFcN",
  "key37": "3LBLoAWNeKeFPxUUepYmuvnq54RUJ6vXX8P6EbFzjRV1Xc92W33EM1mpgHrGyeipAyMbcvdaSa4aHoLMatPjucdo",
  "key38": "4keCFELoPBz7ShLmAFeR1dq5173fq6VUFjveDqFdgFy2w7e8swAjhvdQWaj9a1wjp7UHvrkKdtpoZEcC3SVsEMxj",
  "key39": "5iAGfnwwmVaiY11XDHcwA7DUHaGTCeLNXKB2nDYGgtS2VP2MzTD46eZxKYxb1j6UNNjyqLiE7aVud1kDrACAhfi9",
  "key40": "5UM19cybV6NTBBqxZpSSDxiLBaMEwyxi5AJSZrUSf4VpsSRWjxXo95bgkDdgvNQXnguq1rd4pkt1MHPF2NLzSxg5",
  "key41": "2D8mgfu7ZbKtVFD8Trg8PFjMAiicbYANH9UurZy5BjXkvCj8dHVZmu8eQ8re8Q4gfVmt6f6JgxaiK2q5JPMipSxv",
  "key42": "2iQtej1YXzjT8XwpUTkoQ782Dc3JQ5uSfvpWYcSkDMZX9mj94AJxDVFd8UhtbFwqFHne3zrqdVEAoBHkEEkRikde",
  "key43": "3sTVVPApAi2iKbN5JbwCFipck7Dvmuhg3nQC23at55wLS8KW5Y6FSFbmQxC4RxMiuL6GxTdG9cFNqjFzS7xdjxP4",
  "key44": "JjqDs8oKjuANXKS4zK9ZiUbtmq9DuESFnoe2p3TQXADXNt99CSv667AAkC5bado1uNFCE3bGHYgG89Vbj733UwQ",
  "key45": "cSZy99ipfBqpafJ6nFHm1UHycX6K7CQjpWU2xinP2Qqdw25s1fy8u2BCxJMEismmiuXgpLuCjRqXxtbHZmmgKhX",
  "key46": "5Q29f86oTgCY4P7TJc6m9Ugo8zgDqvSJrGS1h9ehCnQtSWxgJvUDxoaYChnWevXniESzWKK3CJc5YvKAZXVY1zCQ"
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
