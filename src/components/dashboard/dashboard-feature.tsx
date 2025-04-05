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
    "kxYNhaXPYjeek8xagU57XKh7hVah8tha53zEq3hTzeEVMPbTHqNSjieq4c3oVfcwex6LtaBKwFff7im41688r7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fg3irhJuDiFEZQDTN9YuVC9WiXRiJj53HFZfMSYFXPws8mbtDM6kLvTiVWnrXA6oHJ8DpeF589ggWKTeStguW7b",
  "key1": "3g9JYbiyg1PrB9rLAgCcikBdzaBKvnNzdoKZEvARbQx42Z3FFXnsoUMXwLxxuAvnZXyGQGGDjBr3G8mzeSUL1Qhy",
  "key2": "2QXdrpNaWugbu6qJBu81tkwtLySGQ7ntwRP477CUiMgBcDBLN2rwtutCxmYDFUnyjeGCsmvHAVK5h8J8y7t7vSVj",
  "key3": "32Svyt6d547429ALdcv1fdoNiHbUJAQNRsF3Dto2KpJ5edLnvkwRoE3nzT4J4YDYUvv1cDNNZMK3eRL27iCTrUDb",
  "key4": "24eUAcPzkgDMJtktTeXFSbe4bq8C3jgoE5ii85iKopMBMP6LJxShkvr5TRCqgENrf8qMvFji3Q9Jam9cVZcZV5W6",
  "key5": "2xCRpmpzRL9kZhA4EM7CqV7ngjHK7iu6Jx23kWR3cQij77nQ5jjUjRWb4AjQP59EHdDoFoGmQf8vtzcj2BkDhRBV",
  "key6": "2qssaDh9zTFr6Uha3uyzD7hJfz1PhB7YFLiNQze72N2135DA4b9jwJRqPEhsAUqHTiHXjkdWPoGQaGV69QNqX7DT",
  "key7": "2mp8rzpw3GmzJcXRDWb1kKUKQsAUBfZ5qiVBGDdqakahfrmMcRkf5EfHtDeU7VjALkQMRHiLZFjntLZgRQ6cG1YQ",
  "key8": "5g8r923BQ7caFuYrEpRTorz9Ub9Yhsa8y9FHXgpYVyeuj7RYuPkpZNxym1SRjUXu4uTSCLdz5GVyHFjkre3RuNqe",
  "key9": "9a4r9LbYfoJd1fkLCyu2CGU7Hc6nnrGMsNX957Ps4xMPedaX6U87bngVWzZaUTzH3BEF1eiBt9ivZtm8E5XAvko",
  "key10": "5Q2Y5J47GXmF1BLP3ZMyTkPpN7PEFZfiMofUtyHc9viitDBwHvXJBASs86fvLJSAi2du3te2JX6iJHTFMLWRoBZi",
  "key11": "4deqb7L4KbSBBhjbBo44ByqqpaoBrB3Z6s5YH2cQzgQvNDiNFddoBnCg4sByypnDz1w9Ld3RGoJ26qhCQoM5tb6t",
  "key12": "yfdydHhHFw3VaxhKVxHx1hE2jWHpARmYoEU7HiSvGxPyPWnd4YmN2WzNcHfEbctwdw7TXETns7ZTBMj7zxrU31H",
  "key13": "3nMoBVzuLhpW1o7NAeeRiUiBk6w6Cxe347Bwncy8qBZE1uRDNYLZMhhY7sQKbxVWZB7YVTd6acEHaTuBQctndkg2",
  "key14": "XmykVxts556eYwDqDTEnh2dnn7mZRfrEVGFjTSxNQYiLc6mudjBxtKVFW2dmkqqskhgVYwP4UTbdFqD6kifHK6G",
  "key15": "2gtptwriYEdXNPLJuGcwT4cYeeemiqTtH8C8XJnX1GhEb8htTeeTKoMbQENP9sHJxDB2pdK6NavWJ584UzhTYy7w",
  "key16": "2wReSKGDXkaCTaMd8aY4oYQQ5Egdp2EUUyzYz1CbMrSNuhhRi5vvBpCXV6AQMxbSt9y2bJiqd5VYdRbGAa2c4eam",
  "key17": "QJm76JkFL67AbrxJD8C7MwEjxEBgLRjw58vYRKYU521LFny1NwzKyQM4aTkVauXCjeXP9mNY2ETn4Y9idtLJSCc",
  "key18": "67RXzq8Cmwt9m2pz7Gabmp1EHhBxbTrSpGKjcYtUBzq5zwrYJ4Pva4URjLiyGyvLVxSx1znjdzteHrHxURLZ9P6L",
  "key19": "41vKr5cgbKjqy5CENR9n4rZkV7qUZTaTYcPBpwDCcYGjkEjQt4npE8ivvrVRNMRu3hSDpGPo2NKNcR5nWLQd4TvZ",
  "key20": "GFoJ2XbKb2zcRyj1qEyJ25EVAezAaSqspFmRxgiLi1rnGguaos5sV6T2WW7pbnZYooGEW5oP8wuxUxpd5XE47Kp",
  "key21": "2zj9EVGqoaL1GNYgoqXi2B2HhBJ7gPmJWCkcDZjiRbuV5A8EYmy3yPUDAiPXfNVYu32aPYZPwpHk9QA3VuJTKsH8",
  "key22": "3pUPCaVAwz82qudSVR7upRgq9MdSxAVGLWYGX4KjNcQTR1m8AfrKjvoC2F7n4KGQ3t4MQmvYovVMPcG4TyACL9Bu",
  "key23": "5qGRnPhiEcFTQGkhBH2EyYnV1ALzBXRmyQxEo3ckno1ZsLs4mu7y1kf8XxoMoR2wqrUwrNCT3by4nNvsoo7dQqWT",
  "key24": "5xyBXcznBDKACZsrF4W1bWA7sLabe48ip6bA7a4JA2qWqpJ6m6FfozVwKfQi67s7KtQHcGf62HAWAMnv3PSU9qmC",
  "key25": "4H7gSPNQdMSYZP7VkH96npAsXdZgYmCrNs1dBr4HaXu8ayQQ5g2k1f9euUXtfTm7LG8eS4tnM5ZjpcDDWU5iirEU",
  "key26": "9wUoE51Didgrz8xwExFGYXksNn1nvtmKFfkdhsLc3tY4q2j5738eM4vt6BsCr7mA8aFMEncxMhLZ9PsTJiRxaZA",
  "key27": "2xUptomYF4cYAdPSGjMqxFj8ET429XRqpCCnap7po64ZL7WKaCc34S47HEen21d3RYph2DbtfzXRPrdHCfpcDmY9",
  "key28": "3rWFCDx5zeu6xiN7iNWggR3xVQofi9YnN3Y8cof6iXiMd6jRQtgNFpsPR7XXFYuEB4JnUCMi2RU7uRrxTgCvuy84",
  "key29": "2JoMxjr5ffxEUicU929PFjhooiRJqSSmu5L4Ntq8Rirkcj5Zo18PvDJWvBT6R7pqoFX6i7PvfAPxEftE27fSfVf7",
  "key30": "31hfK5Y6aivsuHd3h3vNG6QCMKdHR8rpJzB9NvNHC58nbpwmwzKDoMx91ZPB5pRFGwjgN7VPNMYnCnfVZHFo4gJT",
  "key31": "4Zpk8G8oPgF215hQs4QYx42L4tyYQG5EZNG64YMuNGM1j9tLorUi37Zj4vDSd6EaeJwdktan4VeTzv1V1JXUmb4c"
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
