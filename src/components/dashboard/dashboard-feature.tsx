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
    "3LnSK2PFrKTTRBRzuZuTdiSdUEQRZmJUBS1rUWxt15JH4DMYmGmwoNGm2tyQcZYWSs7smXWiwLWvRoeLnhPG5ADC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gus4JVwQgCpHAs76QSNdxvQLy6wS5vRVj7CmBXgCQ744zG9RpadjbUdssiGYdbrVKwCowM31on5qXEjZXUfnabW",
  "key1": "19DsTH82ut91cQx9qQTjwY1Z9xwxVAAV3ph6KbffNgj1vHsVF7N9qtURuKti2ktcDTju8kDc3gXMmLNey4Va69Q",
  "key2": "2hnzZBXxFSSuqy62adGZmou4bQxwRinq4Y2b6vM3XLyQ9MXVyhpQnzGXJWh5Avb8tiVEowtupDBTv7ySCLPz9UZh",
  "key3": "3FtnTPJXSh1aiB6TL36b6b4C5dyk9BqW15jWzc8SgRV3eZGrrSStVotqBX1RphrtCtBiqDMzVDouJsH85UKTmeme",
  "key4": "5Y4G4ri89mvJdRgJN2HMaMFEVHD6rddoMHzuzR2nYpmV6udpnmg7PQ7EDm4s1QTmKUNQ8ygboqjyRxvJWcmRR3mt",
  "key5": "5pD4baSxhfyfJiL7DoDSz729VTzcar1WoJiby9d9uroDLuhiNKoqiwKToVHzojJfTyB3ikB4Bbr9VKcqAidpFgJZ",
  "key6": "5ccYrnnNYYSrGv9oiHFY2DV22ucDqy9bNp64qsgDHsHsjuLaVhNCxEXvgAJey6jaj2EFrX4YWZZWa9vCVn9BVTUF",
  "key7": "5hdjDKhwE2zfHiWVv3gYbq2CiF2kJ5AhMEUxnthNmDaHj3qkAjfZF8mgNzYfDUBRPJLDwUrMEhzmcnQuFQH4DE7",
  "key8": "4vAazCFpuTuoHj1FeZaVibzEQaeizyNHztdjHmDngYAdM9MVmEftkbYaTPrgny8ZxnuqUGK6Jzz7AjrxR4auwchp",
  "key9": "5YTtxhdMvoVou8scvgbw1gZk2naAujmbYpkJzcrvNUE2EY6mM4vrVut34Zd461EJ2iLPoTAs4zrYi3BSrb9DuYjg",
  "key10": "VdTAvCv26oYbnzMAWJMtsVxXdqRH3YfTwivySHqqRKgfUp5QKciG7yUTsEH6gKZh9wkg8N11AqhNqqzPbNWLmt3",
  "key11": "5CZP1J7fmUkrQQtHKpTdQ64QPoiLXJhDEsV3Kz4Z5usYekRrbvfHKs1SvvYSgXVy5EuKRyAw4oUyL8cAAfdCcsHD",
  "key12": "3qovxgzAUfKwGgY2QKiZiiGxXe9gT2Hwsztz3pzFS3f4ixRUVoUXyxCQ1iY7NA4XLE6NXNqwV4B8vpRx6bGtEqjn",
  "key13": "BTUn1wvwrxUdWsVb2FYoCiFk76a98KLyd9wjGBfcx9nBeRtEb1BPZjJiqqPDB83WtDHqY4YctiAusmj2MooG7ak",
  "key14": "y8CAk3qgxtAMTb8UGmVB26e9yNS92HjUwKgW9By7YCgLR2RQTHe49YNFk74c97pvPaoCn7qX37UxucN3FSMgGNE",
  "key15": "5XujtKfXnfhseBteNMwCvRSDc8y4sGXScdWe2bXUb1YQafnJ1qjCqDV8bqkYp1cCPdJzq9Vh6DtwraMEMvrXeQrv",
  "key16": "3NnjfkwimZQvWs3Jsiv1CGQQJjLAdBazds156cxyapDnVfbKvKXtQL2jXqN2RBqz5KcQ8qxHeV2DLP8oH3NEJrcD",
  "key17": "5HZYokZ1F8WgbU1hFcXhXsWCwjvQHFXGupcjii1WJKyhP6AK8A3zq15R32Ggcdtz2tUKJaFg7ia8rQyg18Pd2LW2",
  "key18": "2YoLys634PB3RjjzpSWxTYQmGmcffugJfAwgTmtY6MfFtxNDW9Q2Kv9vnNP7AWEgLwxpKKmDfozKZQiNVjyAXUqW",
  "key19": "3rBqGa9cBTmFMoZbix2V2kbcpuRk3wQsMxZQs1GWyB6QeftM46pShYSyUXpT2FrYq7hJTV69QAPeSws1S7RTWA5q",
  "key20": "2Her2i7cxc1gs2az46RuBmMz9RGMEtTBARrCFw9trHFgsnEbaaaZfNWSXN5GPETJRdyzXo3ZPyTg3bDQD8JXqkSA",
  "key21": "4dBDEW8gbjN5zMHDtfreKPDuaaVAVvLrPY2hR1GDMFgN7A5s5BCvkgumHp3FKsXnXXUgDWbf8t9wKuEwcCdH7EkE",
  "key22": "5ZkuLPddAp9RNyosFT1AnbRi7nMuZY1Th5wNoX8HXjC8JT8QxNGbrhFnY45xx2Dz6uGXoLgX8T7oYbKTkXQxeSQa",
  "key23": "2Q62QYzGC74mYsmSJA6nNR6XTngxgo6Q3vHTzyA6hreRF5Trzvc4GuwyoigpoTk9doyDDPF31ivpXsM9Rpn2nfRA",
  "key24": "BwBgxWhHvK3WzziFDaZH59jnvwxfQZ8UyX2hLYWEkV9PzgbXstADEuD2dFe4hyzbAUvGyMKFvhjAix8Z5xKQTne",
  "key25": "2d2mSvbZ8K5kxCVFfz4TDJwFtgc8YrMquEYZ2uyb5e7d1PRJc8XdZn8bXRBfyiWp2yEgvBNEYttn35GtjrnaCHPb",
  "key26": "5wbVg2EeATz3zSHhHZHdfmSiyni3bchgx1Ua7jD5AHSYBRKrkFP86nV8QP4P2mturNkRbNvdmGuChgdmenMVE5e8",
  "key27": "3hd3RfCBKnU6gCYyqq8gCq1TssuHwAyk8jbYiMb1ZZULMqkGVWGT52cYfSFRCEfhAT9pRhs5UBuXEdssmcBY1bMC",
  "key28": "3i2aREnBZZ6m7xFo6YFK4ttBDF48TcQxSioGmeGxmwFikxw2frbzoRc1di99VHeHh1m5n2uHoKdCQ6jM7thFdTwP",
  "key29": "3iwvENLb6vPbyGfEEsf796CXk8czBXMAPty3kkywaWmwtaoEdbRQJDumeADauQvgvBUHEizzzGxtWtH4huhFzG9H",
  "key30": "5JWa8m1gCDs55F1CWR5i7thszhteqvSSWugv8eNgDeJ9cVJgHW9rTzCV6VXdyYmEbdTpWehQ4TjKjrVf3vqHBPPN",
  "key31": "2ViLL4VdZZM5oT1mmJbtGqtFaypmSMvDZWwDXMSPnduM4tdpKRXESVLgix1mN6GSTMryMyJKAYQfaCNkwLR71Eo2",
  "key32": "46CgeFmfdtTTinRj4hAUNmzg2enYVvg7muP1tdK5a22R4cNw7TBsD8TPgar4krpvfnYuce5d7x3gdDnLyUZ1S6z6",
  "key33": "2XdQUCcAe5E9VKbboTxH8gJgq9RCUYeLaL5zu1Ez7u7jiPaJ3kicyLQiKu7mZ7h5TQtEgHDxwD42W1GX63tFxYCv",
  "key34": "3uUaqaupUkKcw4TUvzeS1N29VCygvCWUgJ2LQBzLq7XiLfRFbwmk8KTTwBk87HUSsHByyt52ZTRSvJAR1RvWb9xc",
  "key35": "4Vr7GjbXkV4opqy1gziyZRN5k4Ew9pdhjLG1aSy7p3ygEUQjAqRFQkdJrkFTqZxFrRqzr7NxTsUjEXUVt8MNSs1v",
  "key36": "2xwffY2fiktVpKddvP44XM5L9V7tgvNf9kZbKFbQiKAbQMefycSoELQvP3vM77CBQnVeSmvWWsDWjvLT8nLcWy9a",
  "key37": "3vBXcyoXAeZxCfff1a1tB5yVwA8uH4A9ySUY8hkiSAnknyiEDRjxVhdWaQcTn1AG4z7SeTP9Q3QAa643NWuLXW2Z",
  "key38": "4WHZEuJ8NKP8FC9BYqn832cVgSMxoPMs9kw9oqC3z8DRiVqYLERWCrKrUXSScs3LuKa1xBfxUbW9ADcdatMvoHXa",
  "key39": "2F3xRzKH3YzAduWn7n6AKN46tNTWvXDuiAUvQcbxy9pRNh1a6aLeYXo3jLtNHwGeZcNKareZwMxXPJEYm2SGBNps",
  "key40": "35nnHm2h9JstcCLF95vXvZ2Q3xWiYwEB6SU9DoCB1H5LfiFPXVRnfJCqKmbEFNv5658b616rDhn8x8ykdUVChH5W",
  "key41": "3JGXTrmmvRY1173ys1GSo3qv6EGDowWDDMRQ8Z4QexfTRHU5TcbQEKF4Sq8XqHRn1vwLwN87yVUqCia4q1vEGn9V",
  "key42": "H9VDoTqVqJd3LnGAd3DFg1zyA7iG537jj8GaDvYZn2GiGYFLie9AHttTxPT6bbFqSzrh94FrF71gf1sRsAfoWFs",
  "key43": "45z4n664j6pBSwBP4gh6GJMZrNaswe3uGH1fAoxkD3NPxw9ZFnYtzAKzsN5UnPmYPR8n6B2n7TkN8j9HBYsDFBMx",
  "key44": "3GjcGTKG8hiSq2fPDudXyJ4WuSRbGhPeRVi9zJbRjwRH5jDrHzxudSg6a49iLr1S2LXWm4CRoco2HgKo1sjG7FeA",
  "key45": "46ES2zjBqPxoUfWtHFiTCsEbH8u9nVxHfM3VoZVJ8xYEB32BJJYpmZEHHfYsLgFA2pzMKrRJcfges6kL1XmxC5As",
  "key46": "2Hmrp99YEBjwW3vNEL2CmqhxBL7w2MwfS38mjBijTNxxSGDvaru6q2PetCD38Sna2EupunEXsdzPRHKgmLcwVu67",
  "key47": "33XnP1Mtk68Ys6uAvweB5wDdspLtT7eTacXeVNQ7h8kpH2XPbakjFMFSoGKbSE75xzzXvXuHNAA8XYaMoAVwR5bs",
  "key48": "2R3zhykjp1nKC6tB8X9e5WtkegKnPSsi5zch37UMkGhGMhSK6VyrjdjA3nDwQMfzxqS4QRdjU4qZYX2eGZbjSxXH"
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
