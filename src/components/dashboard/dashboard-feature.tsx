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
    "4b7z5mrNA7jGoMVffzJL754CQ52yPEb9s1oCWvergzNPf8bhRN88XZMJT2zsqCNwPqwZxJG32c6xi27FMrASAx7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJfLUaHhTK41dacBJPpXuhi7UuuhNzB9uYWT3ssCZFCp23TGaz3bi2uFHZJij83LaCDFqTDN3dNX9AVhxrxKdhY",
  "key1": "3CSq8JbWQMt7gc1CVwxaGTvWqBtjVTG2uBBG6scyTpUd6qE12nRVHA7PpY9hJgnZ5QBpYom9gNJWeNjmvdan5ChG",
  "key2": "5DV53o2WuaWc4hC2YQjbngLTVh5nDCzRnx3vEMgxhcC85zVmKXHPjq5N2MABnohnthAR2UTNVZSin5ph3Eq57iPh",
  "key3": "2XherrrCKZCUKRL9dqRKcY2C4FBGNE8GouhEK6nopuCVTDCVM5u28FzttUL7SEcG6mjERdnwspJsRi4GNf27muiw",
  "key4": "Bj63T2wY12zb1cqRHgyzypHJFh82kPbFBG1m9PCzk43ehxJFpwGYm8XYHSRGhrZQrt1rKHyt1XzBXkaEqbUj363",
  "key5": "47n42WMhgfUhCP3iLcet2gR8Bj95LSETNMN8scQRtgxn1nf2Z6QjWEEnQBq4Y9h1UuSciGXaAPZnqXRWygno6SCF",
  "key6": "ZMnjSnbv3qw64ZnFReEDToaaRw3vVFfEWgGawyxs8tM7Gb1NgZydBK1CSkaDWUmRqyuwqAVHoowZJbc43md5zyJ",
  "key7": "3dekmZ5d4HWEBGhfbgSFxsb8fzejNpuZ5GqMMipL9bA7Aw1VYwQF45GmtApkZHfD1LBqj9LWLfgDV3J7iLYodx9v",
  "key8": "541M7uPbcw3LENExAYXy9REWrcwqBD8iWFnwytURPWEg5JAe88iH5mwsiDjTNTUPv8oAKNXFQZZokj35QzP32e9F",
  "key9": "3SF9Mv8bWDS7Y3rDrMup9epyurZwrdMXWUCbrpem5xxQJuQriWtuBQkEVSKYEcNPcWeHv7X4Cq7PuE6ewYs2L7so",
  "key10": "462N8wToB9wrkHzpeKLeP9fUW7LtxtCNkb8Rgm6YMVTVqtHSmEiuePP7jpg18nnzXuqRkkQ9RBSnFKQ24jziXz9u",
  "key11": "z2JH8tLmkqY8AUoZuzEwwTTGRcWNhTPxWeU8EWgkik71janpediHEyZFMphfcYSujAVPnpTc4EkGadutaPZNVcA",
  "key12": "4JR7BtPVuoPHCajfNbXYoCMXHvesGTDf52wqpK76HxjY7Ez8X8QiCK9PukP6dsakyoiQxANWuvWx2Q94U3XT3Vmd",
  "key13": "1SX57HZj3upxzhcb5PzQBDDPLUvt1Wgon3yB2qzUhg2VYm7qK2unqoue16CF4JpQRicQZrthJSxtrBY5DipMNZE",
  "key14": "5aeT4fFiD9ou7AejqckS57Dg6Pa9MsKLgWuhpeHeJ8Tf8mmXvwt8vtpsypULx1PUf1ykA7hCDKtygzxoWd2RqShW",
  "key15": "2ZArxqdDirE1GPzPJMJEqiPHUQg8mpFN9pY1pfy4ZWYzeVBnW4CwZA6kUVBc4gyttvGGA3Ls8vgKsuN28nAn2xYr",
  "key16": "4EP9ZS3suofqn9oo72A1wKaYaFCwdoG8QfTaem3JPiZELmvBqSWWBW7tM3m8A9sRWgFw9tLhYeTYird2uYiPuaYD",
  "key17": "4UBUv3uFMNmre4ZjndehbKDsBCtmMseTVvAcLpY5cda4Y9ZF5bZZw4PLubapnkEeQMUcSrADAaNEhN2NacTn6eLE",
  "key18": "3e7g5m8ayhqZgGnxQm2bx6uK5twwj9FZmvuehG5V6NRnntTG6fs37qGnusjK163GqoVyGgD2T6gh1iA1J5Kyv5gC",
  "key19": "2tg2h4Mv98vZT7JvKr8eRGVtqKKcrorxvDy1bVGWSqczhzEYnpjScSXdxLiro3sFq4Q7RCGLyPP7KZRRQoaePD6L",
  "key20": "3dqCx2jQ6kg8tQboggFwZVjHvG5aR9ndXN49QbaeF7QQjenx4ReUkqFWewJ87sMWzK9Ckucyytk4d3aFMoV1r8tV",
  "key21": "2nFURVuRPMatsMmbr48PHnuTTra8VaJy2NmwYJABWzNgSuurPxP2LXBFW3vs1Uo5BMMjaCc11gi5BcJ1AHT2FaQo",
  "key22": "2FrxiCtSSjVqnEEfoj48Ki2paaMrL9ragp73osy2jxzvMWchX3zWKCpf4AVdtrPaTdG4Wx4Emdp8fsnmB1tqhqkY",
  "key23": "5wHifJVKevib68NeL7Zj4ALqhNXXTUnb5TUk5pmBLGDicE5Q3YtXN3KptnL5LdrxDcxdSo1Sfu74tjHsvQKfnXso",
  "key24": "5aKbTajf6XYd1UbN5y7dHTBkQYWzG4jMmBNrE3MWjSpgx7oiUenSdXUTmviqNhZnAeLc1B5ufCRhAYPkRq8TmveP",
  "key25": "4bWNwwqLEomapq5ynNCgreEGE2nCbar1vsGkux24fCbGebiQ1BsN33MiHNPBYtNsfpCTCnC5aVNqTLtDhJPfuikf",
  "key26": "4QKe6aRwp2ZCSNfBSrNCPn5u1R6mwSwSdMszsNse4DMoXXo6PnDdDAETdEdwvZxMDuK6W21FCwohEDPWcDY8dCx4",
  "key27": "yFzGHk7LUGtdQHptts95Za4iiZisZV8UVES7eXsanv6UdqZHXRfG1Yc9Dy4eVSQRRatm5LDYvXBAvZDcmEtXxzv",
  "key28": "38n2crhamStAMZbW8GYeH65PHqio9zBsJMzMCUodZV4c3b1Reu43Pdz8HgNDtWJ65Nkhf1pwRUkMZSQc2bafSmr6",
  "key29": "5zitFTNCRNNpbSNoWARaV8PGyT2ojo9bkLZpDsrdcY6unVAUJKcdMkmNMaEzukNPw6TPFWvaz81vvDEePiPZvK3S",
  "key30": "3jFggnNRhqNcgPdzy34rYmHPizR5CN1rs96yJXypMVKbdbDU2uTN1JpVv7n216xtK3EJAt8JetjUSj7yxKFy4WWA",
  "key31": "3vYBWC2eX4tRpDuuZ3GJEiLyDU4YVPFaVmToqvLbBjhk4aYwkew4QS9SaKcVEtrMSULsHcERcFng8gvbR2Ndt1Em",
  "key32": "4mTfmYzi5epPfZYb674agLsTww5mqEHj5Mb5VwLAAfoapduGaGnXJsY85foi31SUt3x46DNYzPp4SoAVepWceN1E",
  "key33": "5knLwvCxEc76q8kGEkG7jje6YmwLaya9Vaho2s57X8Ds77gmZ5AwnR74hhArMqyKGURynYhQSq9bhTsxuhzangEN",
  "key34": "2DiumDeME422YX1qNQAnFYRse6unKWpLnczGf3dxMwsehKXX4LFRAPycSHi8JTg7qyYmCd7d6Vqo2FCcpnuFYSmk",
  "key35": "2wwHSd6to5rduge4j8igNhFcpUSaAiB1oi9wfLN45L3wAmP8R7tuY2f91ZMDk6xNZMtvLj5sBguZacWzcZkS9LBS",
  "key36": "g2CFLnxhdgvWrQug77iET8wePWpxYpmEZgWcNM83F9SwXhZuNF1EV6hNQYArVcVUPvMMABPf9a7ZnRjZKhBNQq6",
  "key37": "4JQ7NPH9zpH9WVNRhBYbURHc2YWKBYedHz1ze5SkvM4hdM7pTmSrzMz2r59ETTK3whXVtszUDQ4kQPDbmByGWNRo"
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
