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
    "5ZzDjbRu8ZtcJBvwRjyQGVx4CUw3XvqHJZ9vrQGVJnHTBUZ9KM7UENxH7thQFtREm19dPM4bBtFtwnhU2hQFSt2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXiSMvUoF917BmuDxG7EjrWGUqQeF9dEuMbuXRXpkPisjJn75r3MvqRHEkpWwyWNiWq6QrqdFj3ZCrESezmvnKq",
  "key1": "34Cz7Un1TRjc86aKRkEXzNafJmFsePs1QkYAbNUEqqmxAajWR34VRhWR4gFHK3ndwkKbSCkN1tETHgxDGT3kVHLY",
  "key2": "311bsw9XkqMoc8oEVguEgrK42fKrvF4i6C1qzSJBFUyysFHHXqzBcyb41CuHDFdotT2qiF37QHmmXGzcpdVpDaDH",
  "key3": "5mGoGYAa6z79WdnNukJdccd9VUj4Nk81SxTt2R4q8Qvyy1prLvDR5gZqgrLqM63b3SzRny2Kd1QZxwmTKrgeUwAW",
  "key4": "onGNMkwk2d1Wtj5e5D44bzNdcFuXmddSKhokQcZbuVwDxH3221nAWMwHG6NLBTW2okbeqsbXQwuGPECjGjSyTN8",
  "key5": "5zY3pSVftsuB6wprffVnDHHtJRZkfyyS7Jg2UmUUfvSXvTNGbnNKcTGw4wLWMGNaGryyKcZnxKGpVjHJ7nwJ3m7w",
  "key6": "55KSjVN584y1nzyveGvCMYevwRnXj7D5AsZFB1TnVwTfvJtYeSDdZM3kLvsa7sMTeCEUYHHB2gupaEmbjZCpRkHT",
  "key7": "hpBQKUBqQjWdC4sho7vmeH5Jdmk9TCxyss7WeRcDM7ffknyYvFRibSdvemaXfKDY79QDPyLX7Vv9Raw5WAcaybr",
  "key8": "61sZWxW75CgroR3ZakyyNqBpGMeRkxrYDiz9Tq8ap3HHBSZMJ5aXWcFdAXJVfVANqWAdES9texeEExbYbbzMUzQh",
  "key9": "359QnfDPu6bEf3TZLsdfEYukuLVppC6qr9ss2ZkZkSpMdHumbhNx4rujTdWKRE9QoegahG28Foki4eVmwCFyNvqo",
  "key10": "4CtQEYKQmDE3PuLDP4nkpNMfGJHEEhSrr7eTD3DTohu8vP7i1Jpp6GA7zepjPGNe9yFtA71DksQg3ZD77RfRJqH5",
  "key11": "muFvuHiPHa7iKpj3nRd3wFzrgfxPLZKAZBZQfvvuFGorSVXQEMNQyPXDZu6PxAujz1Q4iNXnbWQcTGc7FTQDeHh",
  "key12": "DjNbvD5i5Cjpk6E9tGV1oLR7FUt6VM4rhwYVf8kjeampzjszNqKieH7DBXrUQgYMYvvWbGJgRVf8VhLjVuLazZV",
  "key13": "pEXiErZaTEWqAWLUHX9cMwzZmXBQJcuJSUtpFMiKZGEgDwwD1FuAzemWnKkhv9dPyLK1FCt8xVS8KxPBDNGH9G5",
  "key14": "22vQ6y8Hq1EtQGJWNVezpP2gUpMyQ7uuYxoPTiGG7CjtPzV8de48TArWbPELDDP1q5CnaX1igZ95iy6EubVLpjey",
  "key15": "6tu1zxYUkJLaAxg8qMgCkxSGXh1LHdcQK5cb5aGeJRm2SRYpNJcQ1WZCsQk6vR7aYggNjHx22tES3svgtdc1MoY",
  "key16": "4GDGwHMGaZAWwdDWZVwbimnLb6Zsi4DPCB8MYijucPPoWwD2KLbGuQS6jcYW4ZeMWuNAjEFvFsyLcESxHZkamJFz",
  "key17": "5mUbyXrppFrWSf6sEqfNikpCGbuZ8YGwiRk3DnBPh2j2bJdFgpJL38nWcTeSBBoWYjLro62LYrvAfodYkFGb6taL",
  "key18": "5HQVtjnwkaw9xQnq4QWmG1PaHjHqzyKCVG7Rd6Hx92jgRr5Tg68FiLVTAEi2zpSzw1tSGx9Rhwsinmwow1DRZfGL",
  "key19": "qEqfG24EFZDwybx1zYqafB5iAi5AoXt965zVxRAd3iT4NV1egB5itTXKWbCd9chYxmbqexL4dJpdZmhgTimTKs6",
  "key20": "2D7uwtRBb9MSfJqr18Pw2yEMTfn6hCggi3QWzB9dtZ2KurWtyRS9LYGx3hjnnoDoinS6gECAXoavd9zGQKwTXpve",
  "key21": "28W19XfoGCC3a3fm2fhPhhXSVxdTy4gCZcCJDuH9aqToR2wcvj5sESKnzqVg9zkZo3g9zUaQMWiVqQKSBFgaMfGr",
  "key22": "5pU9AXRLgDKgXMNDSYpS1W1zFywNdQWUYGdo7SFybMrbCE3m2K2igD8FQHf8NTXMwdnAaMkXVTboEM8tcww3Vi4G",
  "key23": "2bfEtT5YSGM5VJwHF4DHrVx12cP7jWesrm58SDG4GPwX3XRtX2cUdZyxsDaoUz3GUK2gm4buS8mqbQFChewTP1Rb",
  "key24": "5mnVByWSHaHYKcq2RhzK4TpxSeKKefrwoJda5HrXqacKWmu53dX8nUs4g8yQeiHVw3nZP88rfkTvfi7wFSPtgX8Q",
  "key25": "5WEUkGbWeFNxhtYikFcaTrZRLRS9WAVe5DdyY3FtDkAxAyC24NMvvf8Tm3HvZefCbj5bGTMiPFczr2hvckdhNDAm",
  "key26": "22FLGMG8vVXpmfXU4Sia765zSkJ4wxGumgYfHhk5HJE2qytg8HXBYkjhEoBtuDNvAaaMbeV4xGJ4JujoZasRAzRR",
  "key27": "3j4kKyFHkmhiKSZYYH4uzwXoSKe28cT9ezPqpcq6rodzQhqmgfutfj4znbQcqk7ERWdijNvpuwijgKcak6cGBGAL",
  "key28": "3A6At5RB6qJwQKLVzt46NYETEHMxCEnDJxZGSUn6q9wV34SM48m9j47fgcVKSUq5usCYKzZY1NrMSjsFtoJNrMWk",
  "key29": "5JHfKXjb5zy2ssHDu9rssBcky1pwQzD82zDUyQDxEYXgYSp9caXSVLU6ZDRX3hWqoWwwTLzs8CbDoGyvnS4snCam",
  "key30": "SVoJ2euna6pHSf2T7TH6SCptY2zdmaAPwCAfKeSej4BYPeaiJRzckA24JxpLysfhbyhfVH8rn5o6CUFrABGCro3",
  "key31": "Voqw2nn5Atd378BukQCoMcqR8npY38MWnVkfM6EHNaifcxv52Fo33ByDGgacjbzHqhUxeH4FTMWkNCRamw77vbL",
  "key32": "NXSsMMX3M4zfFzBNhjwLpzjfNoB9Dh999bM4xUaVwXi1qYmpmB7arPynoyBMxWvbAUf6sXVXQB8zuds3bgbqUEN",
  "key33": "2tKWts3TzUtQ8A29wPzXseGoMWUDqAZBQaK2b1jQ55sq1P852uWy49UX9wWMypE1QNnm2ntDg3GTYxwaKUif5YKt",
  "key34": "3rortvzHB3hAh5Xmug2wWenDq3dBF2Gac1rbuYi1opNGHfZYxs1EzjDCGpJPUeJHG5euhVQC3r2eHSQdhDMFBMBd",
  "key35": "3SWmvj2dpffiiWT5k2uaEwJpmaigqmctnb6iSqTKGnTQJWU4SyLxeu5qnCxWg9Du7cXKZCdfZ1x5me54b6mqTe26",
  "key36": "2i8KX82SdMCiFMj3mQ1C4Ujq6cYVxc3ZyZjynic2EB7LRUgtcWtG3ZzUUThjjLea7yftP86xyam7Yetq3VJSffu2",
  "key37": "3f26iJWSgay4QZcepCb8sz5pLQ4aVs3r4D729GCc6sLxqrFhjJ9xfqZf5xJZ1kYzY566dZ64U4JohacUznhA8SRT",
  "key38": "3KUE5XdKCuzaL5j21shYwnhL4DgY5VVaJN1XuCnRWv222shD5vUqVPs5ttVfohNgNZgumgq6aDSWzqVWdGrH4C7q",
  "key39": "4Uj6XkvE32Ma39FDCQvYp1nsJHH8iia2LSYrVuKHTJTh4bpUqX4y9XtBmwNggRjAmTE7NRFcdqpqoLwXRmrSnnRm",
  "key40": "47mjH93EZRBNxD73R5xCjMbh8ZFwpwkkxNZsENe3uV33Q9bRhDQwN6eyKb5y3QVGKmbaHQnXrrnmwFrwZNGhDV7H",
  "key41": "5WfDSwbxpj2Zckjad4nNt8hzRKoKpHRBL3zLXeWkaHVyhTWt7SLbyL9CmYPFFNA8YXMpSvUUsdmF5ogxsXfQobqL",
  "key42": "4zrVPwohDvv6wNnGMJ8iWpQgzDQ1xRewTAEF6TxTXfPXzHVMv8mpcakv2zeJHV7QvDWqwNwyooTexhC2JpwD9gnA",
  "key43": "28jQ1PXkd6Ha4pskXNxBCwFeCyS6wDfNnGvU448bLE6NRF7mnetcG3hjhdXwNEv6dLSovwgj8nyMuUPZtRTqk3FD"
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
