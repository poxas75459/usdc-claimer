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
    "22boSEJ1XM5udB5JXuKXpZaNdro2o75ZJDJ3ZzPEr9t5rg77A5TQydz5Y3mdf6FjC5pu37qX9BJJULnyB8aTubeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u2yGwUJcwfeKav4ZQVxVKMasyhz4Kp32itpG2U7cchxGn6i48pvfPGm2nVU2fpNxGZejRY7RxiohYuQEpYmkEiz",
  "key1": "5MD42huHDxoLUAMhiStPn9v5ySQqsPGDuDyBz7a6t7QR16nLd7zL5bDwHdTyPdJ6oEX5kxirtexNA4ugMjyEJBCp",
  "key2": "tSbpeRyfpyn4GnVtBKcR2U4K5orGa3XrCGoA7PksfSVLw8TxtFPiPAJJpxGseSnNCQd4C9e4mT6oZEqMkq6s67q",
  "key3": "3EE4CA86ZhSKQQi91L8S1j5FKVLTELsQuGDxmJ43sZhHLW2kpbJdmoX7EduwnknpYsfB4JR8gNgFiEwf3yVamaU3",
  "key4": "EcRzH5W1vJwBpLRFXh9UtysNP2JxrbdpL2y9Gbf8hSZNg57YR2a6y6tDdnhJ2aydJJr13rNEMLWuk772GDPvv8j",
  "key5": "2TWFWUZMvvdntRx2p7pspW9xS7unxCq7jW2yCzfgkvEBDUCT7EHZ2cxS3fyznWkXX6NYPoBuKUPzN7qThtcCzLQU",
  "key6": "4hAyAWLNuXrtkkWUuhTDiEc2UnwnMwExbNNtvJwnxM3JqZU4VGEHLjasg2qTDhtVheuP2NQooRaZVTuRNYRRpnHL",
  "key7": "4UmEJJv7wdtpcDU4Ujc5wrM5tZbCZkeCTMJ3i7Ztaph1XEUmt9ZLiwAewXzJK9SxwoTxx8q51grHosc4qvmMLkut",
  "key8": "2UmemkmXfMMLVLNjf7pPDM9AcHta2xYz6pYrhhYBMyXWVi6LJ5UjEswMDz4T9ujA8kHeRUk7xdSP1kw3qSTKzaVY",
  "key9": "jFC7XxbM4fHqJFrXT9ftupEbK2QfhuNneviucgm5iEgLCCdjsbc599brM7nzmHfkgyvUSih2xzWMJYMjTU1Mtx3",
  "key10": "PPeskwJWiwLMmD5qN7KaywCWT8pe52nBK6Lt7AyBrsAT3kSQCN2jKUzdTtmSg6RCxZAcnvvmRLwipcXw3whBZTR",
  "key11": "4eYHszJF5EFbCjrYftpaKnjrxgbA5xW9vor9cqpyeMi5YtxXr3f7Ku3CRBhHZRThR38qGuoSsKYp4brajXRuNC4z",
  "key12": "2KqNBrNXt3uyaXbR9JXMBc9B3Ypgxa5e7tQdxySeSnNtMusNeFWRXbp2CheuwhcWrgiKs3MHKYSHMtzdURaFqL4Y",
  "key13": "5dhRVjiRnJ69n5kxYve9beuvBxfYmraLQynVMMEAH6xkkvYFK9EE9YH6PFFHyxVAMgGeEHsormRepS77rWCSMD4L",
  "key14": "KSpDhi3dpyVzEst8nfJq2zexnGnHM4MNRqFbLeAQBEWqTMj7AfVsvgbZF5PQPd2fByk4nq6Yf4vqtznhrANwwjm",
  "key15": "4PhEPscN6w6qrHE2gwuM54pyLYksAtF5NfdvTX2LJ9XNtxKVcs8r8BbgAQ7JoYr5pVVmeqfCe2xkHBPitztfBm6Y",
  "key16": "27DVpCv87mvwbJzmR5BAeZU93NhejcGeTp6UCyiCTphtV9HgZHW1DynAZsBHQTFkTLFKZRfPfe2i2JysgWc1Zeve",
  "key17": "2MKdAZvzfYeJKQLtW4NpM597JkMBiVN4BcNPug4tb2zAJ5HwMDBBWmJz5EaL2SwW5w5tuLnL19SnVzYBkfqS5bsp",
  "key18": "3FrXS7z5NemzQTjYfDKXeLcnmuw5EYg6P9wbBZBizjPPYUTGFc8wtg9YdXh7Zgh1qTJbKEDYgbqMhWRD3xGEEDvd",
  "key19": "WooBzcpDyMpnn9tnzXkUhasVJcm9y1hpN7D8Wtjdf4gPpVDTUgZcaNB5JiyYtjAhfafiWmA7xY9JEkBfSJY3T7E",
  "key20": "3eSXBasKFB3j54tz11y2vfTZk2JahSc3aQMwtdBzCZG4vufWPg3A8CNYayG2SeQZFQujBMyUezHKH8Ptc8pk75c1",
  "key21": "3wR5EzYUpa2Q1R8Ry5o8qZKaBSqyozqYNiUU9TQDBby9EmqCJUWhTgvq5vwuNzh6XdU7Lu3C9nMztsWHvY6xV31D",
  "key22": "Vf8NRxMReLuypBwZkkSoHUPKnyxM3FTU2qZ42wy6nzh1Nj5EdAg8NT9t8rWUUGHQ7zzs6hcg7mtBapdzjS6AqRX",
  "key23": "2ZvAFyEwt3fK5EFiKq1BknY2Zz4ZgqYDKVcLA5fkx2qE8hWZRV3B2XebckQsmZtqnjWVVvfD2hX6ExkKi8e6qa97",
  "key24": "8fShAZ5kZtnshYRPZ5FVWMSLKvJj9EVAfqAQyqR15PKC9enktDk8YQXxoQ1ZM6J8Lj5PShZomYuhTaazopGRjPd",
  "key25": "KVXfVp2LPvB8NAziWbePsYtKKAqhrE2Whej1QEBEorxNA2vMMorphb5aFdpz8LpUQbzxv5fJscasva7m8rh1Cw6",
  "key26": "5LTjA9M9AD9bfUkwN2qBVvoUMDupbBhigksWBp5XEhwzAxd3CqpJPXsWAjePy3q5XNvChqbtdnFZYEbEvjiYzxBQ",
  "key27": "2TYNnTeZDDdTib9uaiM7uP7m8DwNMtUXBqRkYLiUegp1cKAtNr5RpNtbHxyHXM4WFSaWgJQMoqTH3NqAmv2PS7G6",
  "key28": "3Cf9kXgCPyDgFZoWh82n7qFBJiceR6HLxnJgfY4t2B5A1D217wawWm4RV3bTLLe5vWbjdSP6rRbBCP3u32EmZLCK",
  "key29": "288YRL9rxK18dWeZuAKr2Jvbt5YbF5SCdaNFAF4tQGtKGohfZZqSRUyuzzJPMRN8j6t1JNhZqzJ2CePLwWb9qo3x",
  "key30": "TR2K3BZ379co3xE9T4EXodBhMvdMEuYK4HqTBJtY8C9XtCn5BE5HWreB1xf6wGa35QKGnKQqHV8YaEySUwjf7Gt",
  "key31": "3U8XK5kqrEW5bwWkYpNasnfZUN7J5eFindokrgRsYRWJ4qgsSTfR7iRHK8mpG215bzAemQYcreqxABKs3kRmsoN8",
  "key32": "24VwATqqn88rZ6BHciby23aMDFFV3nc5cdmViQXKZ8CLbwYbJNftZbV3xna2uZtfgYH8QrhjtNavWqSWasSuWKw9",
  "key33": "JeHStWC3nd3cCHBHUL43tfY6hA1N23eVWkNEuNHsgTRdti7XhP4bcw5WYJzsrTMEBnnPpSnikhZBebfjDtPtZyz",
  "key34": "48EFLXcgQkEVAfi5hWYGK9tAnn7v4WGpafq1QjGeJXkvRyUEziscyqufCFioSjhZa93bTN8Pn2e6wQiV4ESvDJGn",
  "key35": "4P35mhGaTobeCsG2QWakrD18T1K5N5obQMUdvzVd1cHfK3GyBnpsCqqsUT2KHf11vpL4heDonfNHia9PahAJ67qv",
  "key36": "4LVZ9XjxQoY295NTCdS8Ley462MJLbVCBX9cGQdwuoAqV9cEriBJLa19itYjtgRVNJW4315HG9iCyunwUxkEPCES",
  "key37": "cYbuh7pDakN7Vxp9GCcPRRVN5DAsWMZ6MzboJssWmPuKoMjHpqAYHYd2kUfB41y39LiGXrcjUseuttwWFrbq1xn",
  "key38": "66fovvCxcqXyj4XnEvZyC4VsfNii5kHhz8Acr4WayxgJirj4ZMH5T6FVWQZ779hXjEc13MdqQJJLzygYYghvU5AG",
  "key39": "5hbN2FQFhdyAeWB1uyfkuWcfTMTT9hCsTtQGFEicNC5oj7Cgx4ETcMUQBdAiRJG2wHAWTPVhkvunMnULV9BzPhbL",
  "key40": "4Lo6YS9Peqaq1Rir5nEF1RyLPMByXb7dcZjxdyasL3hknaFTysmDUFDXVjoZYhxN7HHdDDvskFYYeedahNLSoEWE",
  "key41": "2LsksE4ujUDntKZ4hnUcta7YwmyGaVaR8mCZWRkbyWi1wQ4amhGbCCzLAX7qKUHevkMSUWPfAEBxhUMccTL7nVUq",
  "key42": "3EeVfhqznK9bnJERvFCuDRTJNSr4Uvou8mZpTEWXtBe1HDomMkaXXif1smqeg3n4Qm7hxbbT1xd95U9vQLGDPqCa",
  "key43": "3VNTqA7w79BwxxPa8cDSRrUEpKFuPEo6XUnStcYNdzH922m6zGKqfHwR19NQeuVmyM2mXs49JszdaH8jEB43sPuc",
  "key44": "3WvfyA9jfHKWGyecSiJwGHnnQiMoFdRzsDxM4PVNQSftb8XvpU18dTfTDk247EpfSmccgcaEThqKLAuqSMjVQSLu",
  "key45": "5GhLBizBVFMXA5tMjfLsExHM2NrNzptFTQKevnYqwwxMwbuhnA79qRagB1uAu6ojJ7vAYV7xoo2GNHPLrAXWbDyy",
  "key46": "3k3viUrprkTJQL5n2nBmaRv3FPxi5F8QSB9cEv7gSNVwq7z2foRcGSmjBCjan6r6gYe7zxcH9PksR3jf6ptipt7W",
  "key47": "2nitYmxa2jWNY7HFFhA9qkXCEVVCdkyaHB62BT3zg7AP1xWbHaT2cG6adsSaMhXDvKzdPHqDxTDGScA8DXvRhZW1",
  "key48": "5yM3RyRvNJ5wDfQajPDTF2kwnnwPW6UEg1sZf6TWJEtirQJAkjEYJf9U4Mj9WNRyQn3Jtk9LQr8211f1WnRmaTe3"
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
