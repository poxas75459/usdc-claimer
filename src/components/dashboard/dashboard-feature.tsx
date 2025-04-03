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
    "5uWfxCVzJwYGsLBBuzgpHASAeroScjW2y4xZ9Jjf5WJSMvmjePVo4xCDiuSLZUc6yMR7EgY8VEYvD4wN5iiQ1wYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CstkEytxDoMpipPxdCDR5HHGarQwekCpzTzECJZZQMgQrvAnhJLP7wVkqyyas3Wi61qMxZ1h45xwbRmSVE36Phw",
  "key1": "21XKnTWa4rTogxky2ViCLhKJw59WwyP1PU4PjWdAVUZzBrL29HcPNbsyiDEJgxeMLNAzrKmkCWq1yEqf2zUESFge",
  "key2": "3Xc9TcNh5FxdbUHq3EtzM5mB8BAzaLo9ueaBmpZ8KP8DdBVtj3iFRM77vzDBDxMToGAt7UY2zfbYdspCNKJwv9jB",
  "key3": "5GLyxScUPRmasAAkBDLLpjqq19qWN93fzMnUro38cqLQ87woEivYrsbdGV5HBPuD9KbReK5LjAsftK8cTnV2wbx1",
  "key4": "rxtvn1F28A8Mq9QgvDp1c8Sp79EapNj6dK5tgoHZ176bRqyCTU6hpnuPi5HLezgmWdqgTce1nicjomUiU7iZrmB",
  "key5": "4Wxw3FdfHsDojBXp5bGURycPZ3hdmR5RLgbDxwWwWRt87UDnfw6dB1vWduJYgRbTuswec8TUAhdNjaiQ8XRLGxg9",
  "key6": "dWQPKUmAjFjeCw62z27qToBVZEvEL5h7ch9aPugk9KLJu7CxtY4gFAKgWVEKNJhwpXsXmL6qx6KyBMuYj22wApt",
  "key7": "2wFEvYTjYsSmm4oresAzfi56y8jUrp3qSMGmzt8cyT7xB4ZV1zz1isYPjtNAa4nmUt2TPCQ8nncb3zgujFEYjxyH",
  "key8": "4w4MaWDYBamEFYLC29MCxRrRUm1KQ9UR9EHYgFNZzToeEHzPQ9RjzG66YWtBqKxbqxj3gcAniA9YtpqnKFKFroC8",
  "key9": "5Csev91dgTzkFTedu9UVR1ZE6fQpVdN4SQeXAtgtKK2jES8ke4twqg9gcsKPgzQVzg7FF1fNy57Ab4tL2gRmyYWo",
  "key10": "2DHjstn14zzmzKrMexScwyuxyyKYxQP2Qt9ZK8BdK6eoZVRqkrFcTPVkbHQ75SXbePEz7tSxZknfd1w7QAGCg3sm",
  "key11": "32W7VXPMDV49RxyJU63ANVTYu6XA8jDNpMuqTrrer6HjYXAwH39PS55wTtWnxsGaeSsgJpMgCfxt7o4ghiwXgsJk",
  "key12": "5LVtxiWS4BjThYtyWoAr5eowBPDxqXv6wmyupAMVRMNi78a9sYsCkTG75sef5yLe53JZEP499TD3ps5kZaQyxJsf",
  "key13": "4yirFY7esmUtqgL5L31sdYBh6XA37xXhT4nNJnGuAsLbixx3boqTp8c4QeGqrKKDQwfNKKGhafyDKEbWsphdhWkK",
  "key14": "EGKD458BeKsaRYyk4QaN6V8xSwkTHrqX8EQRTF8yzaksjsmhpWdvK2BfCfFx5fa4xq1ncsv4goqLcngvi71BWKM",
  "key15": "23hUfGzrZt2txq1SBg94A3V5sphbXb6vVspVmpChJrxM23RhuNpU6ujDLRCLPB7c22sGHWAnZuQWPREYyZKvrhAN",
  "key16": "4vxMiVEJaC4XZnoNfGhVQLUygjb4Mc1gLuZBWLMYi4gEH9YnEefSgsBQ8L1hwjCNigUzkrUurHi4xfxpkBafRa7N",
  "key17": "2EaDmu6EPdCt5HfDdj6adiUvQBn6jgZRhmagsBjGup4QUCPsTxD982evSbw2MPMgZQ6jfus8hwuZPbz4H2GB59Co",
  "key18": "42aMuL1EfgmPEWJKP153HTzfdc5gR3ztfXpKsXWfgKPuBbF3g1yHqXXcuEvuEP5sc9yrcoaVWwwxm5pyWK3qFFKz",
  "key19": "RShHawxzuZvMYAQWnaVS7Vmpw6GAfDyPXExoSCaAoSwVJVs6farQZxGs6HyC74DCgxLudPUCd3owJzvPh9THn1g",
  "key20": "3v4F6eV3kvpfuLQ4jsYFbp3Eyf5KZLawPafbwgWYEjqW9hqWmxGvRxLQAt4HM4P6NxSoZ2UyEAnoDUURw9Zxoxeo",
  "key21": "4v9kSK6NvpzfqqLFrHUtcGxETBArz7NUs19xvjapfCY9hah7uvH3sWT7yEDaJnZLwyKKP3uMQy5FXitw5AtnSoiU",
  "key22": "5qQNyuMe9vyyJv6xmZyKS3v6YHxMsT7Q7ZzG8pmiBP8KZs3Js3QPjep6eurmCVb6HTFZLaiZRtfdoC6cr7a5w4PF",
  "key23": "H4uerB1CzGRkwoVZkSo3ddVJYtE4wobxabdL16uvNYHiAqU2dyV9FQzVPn9crLB6ewP9So1spYpidzhQdY7JjKJ",
  "key24": "381fzwNtoj6McBpEHYdQEes3tZpQEexVfUEwEd1Ru2pHJF9iPEyLC5vrqRfFJ3yaxzhizWXzKSgWFQXB3AYjFoBt",
  "key25": "4ch7kPUbco8CPQvvg6Di51B3NnseDK1uAf7eRAuKR3pbzqeYhjKAsfFvHtFY2E6nvN8FKTut5bk4JhTfo3B3h5Cp",
  "key26": "4BCX58WDiCivRvnA1uUgdZrYGQYrXsZhXgbkvkgo3NqKwP1DnSEeGxJ4V2s1mUjWuAK5KkFMMyHMQ9aoPuqSurkX",
  "key27": "5WExXmz5cDKJsurkji8hiqY4VruNfoCQNuaFD3CTJZ1B262fQ8Pa9BR39wc5xpJLy9BqVA8exE6FUSyrrv6XMxXo",
  "key28": "36twXu9gfqG1mohjQrorHvHwwZEjCQRfjFm2sWM7eVXaFYdRZdyYonhZhEKAEMjz9AdZxiLeUCx8Fy3Nz2Nw99aK",
  "key29": "5wicQSe9cUg1hrx8PYHmRhLoLGE7mDzFpyfpjgaAYJGU21bTrP1RgLL4aEvA3aQbcGXFeQqFk6UuMPVR4ZMTgiK5",
  "key30": "5Nij4XE84HaUX3ub2nhJf8oWGiXF5FJoEc9CwiHxsLPmCq9FEw9C7rUCVzc44h4ZUbzrfVQGG3pVE2PqL11vk97n",
  "key31": "23fS1iTq2Hkx4RVNvHdapGiPMr8PgYnYB93Tmr29LmpSzQvmj9NmziRFJEfjr2khi6FMxsbMMv7ua4SP7NN9pxgv",
  "key32": "goBz8H6e2LYVxQRABRNoxk6qpbc8jLruaceeRgpHAprVK7CdS5J6Afk9hijwjwLSvxjVQFcNuAajNVeRa2myh49",
  "key33": "3oqg6dTQd1Y6oQLgCiVmiimUDCeaZ97F6wEqxbugZwvjuGBS7tgkQwYDDzkz5sTgYFAQzFgr7ockWSeHzCFYdAEG",
  "key34": "qpMxRaEmTqY8JJUuRazSn6S7NxuqV5DhAc3EuHWto3yduKEoaYKNhZ4jHxJ7kFB5TuJXpgia5pmpUrRtst3goJw",
  "key35": "3WxgfdvCBEpnFektWwkgvmjnNp2BczutcubccVHxgTpCXoFXp6qwcJVLY6NiaQ4v2sfaHnik6usa2QczwrtdfqmF",
  "key36": "2GxHRwa69baZCYSz5MhmKGaPSrRtGansnvFsyFM5upBGjxb8RcKf8U47H8GE6G2oLn4QfcSJFJdBahkp2tZbnEkm",
  "key37": "ZDR3xhJBZDzySqNeiKCYceR5FbMJ2nmvusny9vV1fHDHKVvy5qWewb5iaDqXu8J9PV8aV8tbar9dT9d8KTtnby9",
  "key38": "5j6U8uP7U4vNzKaPETAfiELK9Nw9xCqUYxPBVyoYeLkGGdDtED8RACJWrezfbspwRoLFzwDeEg31vwGfSqXCqSBi",
  "key39": "uTVHBabZYCLGzLkfo4FeirgecFWWGnzE5LPQ6fLSSe6dakCq9mHAvwisaznnBvLjdWK7wFrx7xzLzRK2s4LDJ2X",
  "key40": "2aQiTZEgbem3WtjxQhvLQybGuXaCfNsozFMngpCfmvpPZexohts8dZDXfb4iG9T6ak23NfMEqfxedLyWzc5xL3wt",
  "key41": "Xi3tZcqQ3L8PMeaNPobuje77v6DvVxzn7YYfrmA4nuSB5UxwqgkM87anqHm82jpWhmBVHm2AmGugeCGC2sDDVGo",
  "key42": "4Hj5JjzoCveHNbo1f9ca1Yc5QvosU3FM9sqbFSUVVGtVUsowkMhBR6f9FUGncZ2aPSH4JKYehUH6nVmEJGSR3MDq",
  "key43": "3i2X36N71R8EA3ty2WvTQgGuphXBbhtCfgweDov4f78Jh9xL9fu6BuFaHCULR9t4x6PZxBxAcZ4mgttvYdBJuqbF",
  "key44": "5S11B5JdwBfvJxw6v1ddFkaK23jbicfE3NP3FwUF8avW97ytWMm7jb2fDdj8Geyz7ymGEaZZjxzxi8Wzu2pJFMqX",
  "key45": "5FuUQFmcRnSUtU6goEEkxBxorx8f6Jg5mcKbYmDoq9yvRR1hoU1AxA9p9BQYQFjyUTNHmFf1bxiHZb1FuiNh2Yfm",
  "key46": "6gAfo23y6fTsBRqmj5DntNTWqG6xnstzm97JVHbnEEghdEMEMNt3ejtMgGQkthYjxhkDi5T75najruXs88rZ9Lp",
  "key47": "4rmSYubPvcuR2RnGDsjQDJxfaHSZDveJibFk198fEgAzuQeSGMLBLc9aKxMgAbbTKKdBRgmR7aj73BfC8PRQp6Mr",
  "key48": "SzVgPtoZZAytug2N814KxgQogVgAmU4P3BxkJCZgxfZ9DiRJ4c2uK9xbrszGzZKSeFyButA1FsbjSG7KSJ4Has4"
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
