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
    "5Ty5i6XCFTuoMR4F8QTEDQSDb996xswirccJZjTrx65HeFmZ5qwgToxRgvnFHAEHi5D27mhXA5XJAVjWmftd4gzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTsEWpWZzmcB5dSMoV1PZ6qMXZR6SMxhFnrKR5au3ZP2nYxpcRfsBUcUi9Lc4ZeoivLhRE3eaPwHPXGGUtwofot",
  "key1": "4cg7MvqrKXTCtFwESBfy9nsJa15oqbtQntrbE2Lj2NDKF8xT1mGH9tMPPF5mmvMhjLn8r1i4VaBTKVP1AMurDmDa",
  "key2": "5wAkvgX8dtAmr9KCk3sCDdDERwCnp1JGhGBcUEG6qamaVMy1XjhqNWVrfTcmFFKrKWed4CJgpgf4z2MmERCnerk",
  "key3": "4UuA2fra7m4paiayDk7gr15rF4ZYLmiUBchj2ZPCk7YXx6j9XgTTt7hsJGFhwnHStVfkUwmjM7NzKyj6yZMixBj8",
  "key4": "5t12DvdpWXeQzQhUwc1CKcmvhxyNKqhAkHX6KGawYkWh7p5sKjkMZzeJnNKBkZpqp3kr5ygwdmHbELYvKnQMNJm3",
  "key5": "2RrHHqMh69cyBtWBZov6yJSMWUU7qvjXqvQwt8tKGAmtCh6DTyNYB6wndoKXQPQ5EKejhe5dSTdf6nW5tm7Kthbe",
  "key6": "3veDHVqRB76ApCsS5jCjDkzhpHsRP7C3GjKzWNXnCpzBa1nfGTUavFTJn1dKpyZQj8qtxADPLQZTYcp1xNn28KzE",
  "key7": "5tSA7mJKaBrBTuZFzj4nc79jX5HKtdk5SV6ymZ2vPcr9SGsR4S4NMFzSmJTQaGLDXNKVJ4krA9m5t4ix1YFnmHxo",
  "key8": "RKW9UYpbBt6dr2ySxTRe6Nno861Dv4tGYwDHHAM5UdAUsPYCGJ4WPTCsUtWFW8gRxTYgRSMwVKQq4Qdcr5DDZLq",
  "key9": "2LqUD35dcTocUEfNbuVzBfi1kRRaxg3R73Yw2vLVzKVvUFW26AGGGwPZekK4GXebcQ75mpbuNZ6wv8ByWDkzzSqf",
  "key10": "2w74TwADNTnFqatE44zYgadmefDmu9HRExH6zM5tJSUMjjw8R7uPicEeC4HbHkLKPUnVbHHtA6AAcRaz2fsMWLni",
  "key11": "22zt1nc193TewECc3tZ9LrnMvbRB9ZQgCdPiXgqK2hsuFyoPptz7gAmakJqUkC8wRz2K1yuofru61tRzHQxGQ1of",
  "key12": "35aJhTp5MYJbf19Y4UhscPEkjGT7yozCymU7PzcM2qEKeDCVBf9GFVjMgifUjoubvp3VDeTVdeY4cGc14K1tAJAf",
  "key13": "3ve3TLA1uuVHLn26UzTiuXBKXyDw1uMerAxSshpb3GcGqtx8azpGjkdRNxebaoxiGMnc2pKTKSJz9KgsZ2tofYpw",
  "key14": "4nXvuVuEhJcfbgXqe7FSpVWQsmnG2UU2ybSNqeMrbNnzB3fdZ1ukgaFyz7QD1dXn4G3V6i6SpfiHU21qNh8em7wa",
  "key15": "5VPGzGt91j2VGU7Kgkyi8WwvicxxrcUsaweJu36aTMXT9cLGi1jdj8RbJgnGL4gXKnCqSZAeLzegzz1YyMYvakfa",
  "key16": "k3yuTb7D4Z9M87abyg8FZBZKvoe7Rw2xWEtBMtXi6VyWqCsn7NUSnbmAAbZh3hstzxqyQK6CSS6eK3ENqUYfxBb",
  "key17": "5PsLh93s8zPQx5thiy6s7sWdCQRpdvwgutrBpq9TUTaSgop9A6ggGoPHzdAbRdgi9xEVThX73D6kEBXqYtxRaX6K",
  "key18": "59Jr5wy734sawEMazQ51DcYR3GS8QiUpmGD3Uqy9KdDqqAraUxDp1YdAkEUVeasEZcRyxoMCRHTxWV1gNbBDgrgh",
  "key19": "oUsLCztX5hqipFLT4GiBEzEKWddBSuif8R58L5anWR6WGtcwLJAkh8o7f9momcuX9RySBM8hMAUHWvgkXw8EaZ8",
  "key20": "54FgxYdZDjcZdvpGCZR194TZdqJqt5bauAGt4FV9j7ezsaqR2HAGvn5SNv8LyUBoiu93C9n2GGwwmHDPgTQBsbYB",
  "key21": "dp8JA1RFvRkugZSmAr9XjnjYRsAnGj7yUf8rJ5MGKhSv4jz8fcW8H8yrZ3J6Xyk9UFgveoDeiwCogQmrHuXPyhm",
  "key22": "3iETB1f24xDZ6UFoqw4s5EQJAZc8ZtqmHG4sqAQWGEZE9K2z3CjoyxYVjaRqYsJKTaEskNsfs6pbpjMyXsTUJm6N",
  "key23": "57oDi7wT616PkN9nqt6aeqAHXMPZzhNDro2DwNdS3G9K7GL9naKqSJ1vWNHYu9hN4SgKesFNeTL5CjATtPTXT84G",
  "key24": "3PJ9yXCHtRwEu4TkWeZ3hRfsdqhC1UwFBFifz555o6b6E7x7SxzZKgUepji9VR8HZxUeNensWJ3hmvGxx2VHfpqR",
  "key25": "2DbTVR6UrHM3Yny7bzdAUqx7EdLpCqAbYiKuwfAmSfqFMnvdDcmvwjEskvbrHnSNP8uGfqtepAausQBkPT23sToV",
  "key26": "4fY3J8dwLDn4r7q4mWTgnLy6RqXPkPZkkfK2hKcSy7JFy5zkY5ZiTwTpAWBbTf4WTj66witZmSC1D6nW6HCyoTRn",
  "key27": "fw1AZeiTxZFRdvE2tNkwXt7qehfS4CmiDHLxqbQFK2iYjx4F6EYG3GdLRcjfYXh7AMT6qTcEFH9jvojnSpNKcEi",
  "key28": "5PJW9FA33drQCjneWrLn26QamdwXb2Gy4HTmxgQEXkDfeeyhVWodhNQqGJ6SZ4AJ48p7dyELymJLLJCESD6K8k2h",
  "key29": "e4DCdX55cUHJaA5py7Mwu4KLYXTPiRMpoUvf6oQa5sqeGViqQW1KpjUbgivqoneFecdJ1jk6A6WMQKwrufGAyxK",
  "key30": "2UyeqsTyaWfKg7qXDyknWP7XDLBBB7FmuHegTjT9pJHxyHE976YEaM4uLD2r9j3sLo7bdsDByKPMXiZtXdwJzB18",
  "key31": "3HqXHouZrRzLwBCNT6mLf2nmZaDNbtMq4xwWWSMy2WMrKqrk2L4NDcP9FmQx1dHn92TuRWWFst93FssPGnzY89m6",
  "key32": "3sbCBLRopTDw44tFAeYWRfyLLTXSsQoNon4baEWMvJ3xjV2XhSurvLJoXtJP4cxcVMJ8jzjNVT8ncHHCDxuF8vNB",
  "key33": "3DCUBYXwo2iC9v6z7znDTRBFesdx4dAHmH3eqQ7aeSJCzxvp4M383YbfZsv95hHQ76f24VCjeXtPcpKGb74cEcZU",
  "key34": "5rNiGLYKePS3F7Z96QdHAFGDS3X9gJptBLokMANgqbWaXumZLgQfguUfev3fSKnugpGUidkCwxy5sax92nrTcKut",
  "key35": "W4QUWPKkAjp1fbPUjrCCFqGpY5MBnvBNamuPPDj6s3LABYhKfSmJXQwB55P7ZkX5H6c5RHT91NGiuueUeXJxWnM",
  "key36": "rBqM6HEH9Gx26JXApKvAubB6hdQM4mGHbL9vvujss3rLZ6ew3DH5UKzoxdHgMP1tNvCF3x2CV5RdXTRwombCzni",
  "key37": "54kgYVHxVM2cFuLRrioee1biDLDfHUPcZJNyvp4Bgc9suGzcL9qb5VJVugeqQiG8acmDPBrRtSgC4QDH5Ewe21it",
  "key38": "4w8tpyLwLG2mTCta77VCX7eHfeeFA1F6UDKCCFKFsGXweGKVa2rpKgrhrFnP29Hj3vwdMvqdgTs9WmN36mZTQPbL",
  "key39": "56PJmQpPFW192c5j527Vr6EZA4hxETY4naj2hEeHmytQswoK8MHyaNwcncjvbf4QvUa3diBQiFWdBUihAsWpAshX",
  "key40": "3YWdbQFGhZNrMgRuwMzgB653Rc7gvcYAjkokWZLTFhLQHzgVCquEAeWgXB8orvRDsd7K8Uyycv6AaexUNKD7LBJC",
  "key41": "m725zxTLBh1adYKSM8EZzQxdYdMFydcTww3HzRymWK3nqFmyMCjfhmcEEH64EqGyMGXoYxuCY4chG4kuQfPXH54",
  "key42": "2ZBiWg4L7UQZhursLnuk5fAM4U5XEitZ4LtsnDPPvd35jPF9tyvfocW3wTofGmpkLoeUsR8RXXw8odPdkPv3t3p2",
  "key43": "zHhrR6kgRrfg5Xch7HKiMwBhNqJe6EmABcrVbmDzAvvoiv7QuGniKKucLixjvFbdvmzorXthQysngHnYUdHQpRV",
  "key44": "dfZgyzfh1MPofeWwXdbVtxdzMVb2pGLTtSkTb3UDSSY8XznxHGdfcFsKmP75WFzsfyyhSWjstibYeJVFgVSVTSH",
  "key45": "5tS5gRu4BKjkiJR8fAvzqSY7R1w8VTLvzRLnYYGrehAzcGP1C79TLWKmng3uzZUFeqc6BzBahp9pasn6tWdHHHxT",
  "key46": "3ibju6FBfSeLfgKARo1cNLfHQYCQK7bh5Bwg2UxbaS14hgugrej9uQVitaW6vAgf5YcFjgNCUFRnnmKRBrMwvpTn",
  "key47": "NZVmYm3y4sYcAFeBCjvDDD3jPWP4jSNrYvq8PQZ5aTXtChoVJ8ka6yfGCU8U4meLLf3S2F7w5TesNCewgD89dnU",
  "key48": "4tM4jGLYMEnzkcndpGFcadicro2saP4ncpEEz8KpYmY94W7HU2VT5sjWVcq1pAN3ct1Bd9ewZvNQcoXiAUzJPkJE"
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
