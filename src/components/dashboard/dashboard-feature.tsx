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
    "5gCUpTyq7MDqxMVx3xMPMSzfZQtNNcyz7VN3UTRh22kaFdErwjHkV9CJhBovHuo5jFdaansRkw1irbhN3tBNRgQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333wmwueYeSe8AksoaAoJ7yt1prN1k9bthxki8QN8HT9R9LfFvocyuHxjwMSAAxCDCsjJAradbhHuHvTzdEvnyxK",
  "key1": "5SZEkuTpxzrMWVZv1PtKmSXfUJnHPhL6zuRXHu4zQcWEQfy6DEpSjWwQSAxBtgh4YYrLsN2zopMudnESrgNa1WRT",
  "key2": "5AoELd7CjTaGvGAgFoGe3w8rqA44L4eApfrHF2YynFauEk67VSsgYDWU7XPysJfeisUdMzhENfv1SwXYuCXrXQAs",
  "key3": "3MkAT8Cr48HkFaLTw9hNEd2bscs8Zhpz1nWtLECBwRPsbj7uYxf3RtSakjesCsyQCxY5ici3KETV6i1kgATFwcpx",
  "key4": "3a6CXwvrcvp3FZbZWBGsrbV854fJaTr37ZvBCzNpH2PXgWijMzmG9ct1keqx6LLJQn55Av3X9pKx7dwizW7S765e",
  "key5": "2jkNJ4Q4wXphqGvfTKqQcvtjNWz84pYPFP7XKUZsxULgu4qhbfUvuVm6QMDcwNS9Pus2wG2JR52hRs5esdu7paRs",
  "key6": "4Lb22vUTzFbrrDgVhRmbC4Jvh5Zx6Ayc1hdyMcQugeuwXTmQUyVEibdwFkrJ6axftVdbGV1GyUqyKhrboeh6XfUT",
  "key7": "J9kBGkpDSZicUwJwUbGwpgb8QKXcygFcjdRZGg3Xck3tosdqNyemFJCpkYqHazxKX7KqDWANGTCg5PeFZ7iQQVr",
  "key8": "2veknz8tUtvVfWggVrznhB6YG4GvRidqXy2zvJCfR2bEAPAkautj4Ev6p32pQp63u6AVtJp8Cdw9fN7qybZkk823",
  "key9": "4hPMRAybLQVH35E7a98qCzQnhSRoWZZchhQ14X47cGSfAziJAiEEZ2j3WjRXTtYDqg2teN61LTy4JopbYVJxNcmQ",
  "key10": "26qXZBd43rn3X5zPZgEKfH4hDuEumrNhySrznCYY3Q5xvdHzGuBsPBCyvXfXTAnNcfeHjKJnais86RUj7W41reqt",
  "key11": "5KvSnsj874S1icVcHLxvLNr92FzuhqSiaiHCEhANiehCVUmadeP1tpihEBDs5fW4Bf3NTcKhJ9APvNBycn9GTnz9",
  "key12": "3QsWSgVBnnKqBzz1MVNzALRUU4crsxiQdyAe8FA65F3YGmXka78oLYKLFmTyVLAKexFFzP8Hu3WXz582pCzkcEVK",
  "key13": "4dgyYeYjLq1qFgqpWTDH744UzmsJ4mfnWZ2j2eD2SpnYE7FTWL11eovr8PWeGXZ4iRkYGfgVz43DLyQMcGZ6g3JX",
  "key14": "5EG6U26ZQJ25kspimPYVQTYP1X6wXfFHhmR5xpoh1GVme6f2jpgJBwfqLVssw92ecCko6mbz86RM5hxYh8Dx2spZ",
  "key15": "3Ke4b9Br9VHx7h9vcB9Wz4wbbRJurfA1P9JxjiEk6heFtrWnjHVdCmZBwdM6V4zQ3TbJowzC3ktd8cF3wi55Z5DY",
  "key16": "2UWJ3kgkFCeztiTpsJFiMaeN4hP61jYVQn5PojGXbZ3yfGED5hBaQV3G97rrfnjCGxaN5UEXycQGD9k1gTMY8MTY",
  "key17": "311Ef2kMV6KcNtWE7t29nLwKEWKf4DmyT7TAarTy1b3D92xDQBjboR9RJhEpKMdHqpruYKyQvDqWxULtAXzHRBG9",
  "key18": "46CF7CBPXGt9vy382UuaRVVxBdfFBgScJLmRSBbtcLVeVzuAH82cVFT5Da8DwKdVpwBK5HoF9NaxHREXZsGktYiq",
  "key19": "2ucG6R3XQmsVnzfaq3icPFeGsVKEfG4cHrY1bg8Q2YQC4n4B8EYN5yVN44R1bWtwSdVCXtdURPDG7LUkphm7GZ7y",
  "key20": "4Qf9xxnv9sjjouWd8X1Yxarjeb5BD47URiERzAGfZLng67LidpNawsghKKNnD38fkU7VLFm1yWrFPa1g4aPtSsxD",
  "key21": "5XvrJDnnpRozTCbhmdoDSwbB62xAiVTvoGFqDmhJJyS5SxbLv89P3vSy5UgvwuyiyQQeKM355Vw8552DdAF1Nf2e",
  "key22": "3oMbhgqVxNeQtNEqbNZKDVXNFSPdi1vaRLRjRNxL6964CHeq92nGGyxdbaAQRG7q2iYSBsXBizyjTLfU4MWK559B",
  "key23": "339LkSXw3NfMuBk2NsFaz4RU1ZaT9Rs6Rt7zu5HLkotbNXvBMeuJeGj1pxBofBAh1aZdqBPhWwSdxzPZZLcL48ay",
  "key24": "XsWo1MNzCKPdLWfG3fUi2dRxgRoY6XAua9jffASzZMK2Xqmaqs6AfUpM9Vpu7ncMZJnoakEqpZzDrdHzqJztirV",
  "key25": "4Pi1XAYiQ733x7VpZy3KVKBCBZmmgibk9a7Wq3bSF4DaGFBdbzsZQJJkFd8rQttjLBHVjcngYKUZMiBJcTEErrcD",
  "key26": "28oNhPH82MC9knz1hATUQFZL45zWeMiFXBJqPMpiPMWAGAqLjPAR58RD9SQQN7gA3m46psJG43gv9nJWsZHjLeo6",
  "key27": "k1U7K7tz3W1CXbdDsvjJqbMdc45FwpKMfZXYJ69ECTue75ARt282nN27jhG4feMWVAkRiANhGo1wNV5FcWDV77q",
  "key28": "4E2fZFZf9fnNBY35kZ94npjgNziL9AhqMavUWQWCZRRsmWK7ifEzXWyF6gtSo3Y92in3CnKBa7P8mDfPz6QZecQW",
  "key29": "4sJRDTVTewpsJbPBBJHpfYczriQ4P3K9oQC5SAFcqYosAXmUo2SbzTRtqyzKrGmTAyHZXpYJDrD7dgYFG2C6DgqG",
  "key30": "wpt31Rad21x8yu82BKHxE6cd1xJsWBHeURLz2EuogtGTBR2RCf28YY9jVTqwEyDQtev6mRCS5MUeEEogBDoPX1p",
  "key31": "5qzjbgswRHrXg3ywfSBUwbX6eUNArsbqhfZRT89LqMLKHWwSPq9Cdj2Nsot4GmptyQ5z1c6aNgNYvMyFMyWVWo8H",
  "key32": "5UkzK8PamQmmALuCHQREbGqj9XpX9XzpCPUbRL34p6yt7hKjUDs8b3T2AWtRMbSRDnWkKdkZowCAJASaYH2DG1Pr",
  "key33": "3mvLukSJ7xxpVHtQvYbTBLvMYeo9zuenAM6xH6vXrbZGMcLehEc2iV45cZ5vWvDiGVCVXwaHcwPj2KcecD35XdyQ",
  "key34": "2nywqGgoVttvKk9eYZKghzYLsvnsv13pTAo1TE6LYdyHwee6GHF1Gk3ZTRZ6WKw7RpkmqRKr2wQ7EtMa6ZGQbPc3",
  "key35": "57ZMfQC7KD1G5BUgRDFc41F4ALge6D5MuKzzheHuhUvyqXLJLQG1U9paonNF8X2KHvdrnCvg4fTDhoDXjyEfrhYD",
  "key36": "54fq1bvQSwS44a5JYer44M8TuuSszyrdtcEK6oFnPgXD6HsNYQFfXF1RKxoQEwSNYBfuY9ftxc5j3maNiMyFR8vt",
  "key37": "KkkJxiudVXMBymR4meJz5YG51cWGqhvuK8SgKr23dDB8nBUvhKzpoxu2XEB4bdi3wtNoUcqvmTuQU2QX7uEVPVY",
  "key38": "3iK3wMHh6eoDD8fVVEGDfzgCnNJVSzqUKZ8y7K1BTEYr2vHWK2SkdPGc8TJXJmLF2mSTzdFsfUuWXhAaiMwW4fun",
  "key39": "7EYJNfHLPu8T5MN1Gy8WTWPtsw6JHABRvfp2vrLaV5tnWnUvcqSgX2eaUdBtxtdGNZZgz5spi1NqGB2QHzAa7a7",
  "key40": "HyLf1YUaNsnjTj5M7Kz1QVAEXUdoDLARLwreRRoeZodSB7LJCcxM4u1a9Sdjjr6B7YRHYC1gkNT88sBFGQPEzP5",
  "key41": "5pH3sMMQ1gThvWXXQ5YvKgWohXvAgS2HevCHBn8xMDPH8AQ3FwMyVjYiPNpqGsHyrUBBxeqTSzem9HmuV5kgc1rD",
  "key42": "sk1yvxckU9WZnmkhFaz9gnJar6gNKKQnbpbuDp9ei7F6VVt7N1sFRz4RLTa6NvkeqKNDa3WYBxggXeE1FwSN6Vj",
  "key43": "q8L7XyjUiW6MYKF7J5XWkK6EwhrgkX6Gm3KCn4ZesUssvk6xao2XcZZ2Td2Rpa8z8KXCxnPCLRJeLRs7Wa3E25L"
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
