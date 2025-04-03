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
    "3dUBtrGbt8p852yALQthbUtMkFDQSEAmaVCaLTmDashPxCy8g31xXdExTq6eXTwZAFPh2gTsrxXb5UbfuuKvEEuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPMEgtb2SvFtmvYD9VztA4eufSofkRySSostXwDctyjXnNFFztP4i9WDqnTaXXXvJhrEwb1XJYJhZMoFCxY3RiZ",
  "key1": "3kV5S1HYL4qWNvjJyyze8YpSUJ2UQh9wk7V3U5skiGuVaVfuKzb4BM8DC8hyvzbcWmuVpXHUUqrVr9PrrvSQivmA",
  "key2": "2gt5VQqFD7xtz8DxoGpCycNN31ErDWxdhNetMedgxxcv51T1GNCR828pziTsz9CWKQE4cqqWQQEKwMRyP4jUhHif",
  "key3": "3y8djDb6xxSM4PypB9UKdEd4v4Q6uTQiPexEtfse1kNEGybZ59Lf385JpYWeFfmVHzQUmemkLssVxbuNEWvesFkN",
  "key4": "3zUhgzrTrG29XV3QKS1QiVRXbXHumwVJWwE9TnQtEaubcpaNJpcHvUxD9vxMUURPq8qL4aLz9Z8RXbWuZk2BWsn1",
  "key5": "4wNmA7PTuEJumHcV19YvTeZkwin7uC1J4B31tvsMoyCPLVWeYvacQhWcfQMgmnY1XBPVU1ugc3SoY3SCqqudvoaw",
  "key6": "3HuBdPXofXm8uQNTnqAFFCN974CEQWRuY75ez7YWCNeGgcCdm2KJqwVVGqQ9TKDrAwXppXEQvaWLj5EZLtYkQwZi",
  "key7": "42J6iJeiSzHSeE3x3WS9HaGbvGX18KmUN7S2SBQhUezTpCMnVMLnEx7pqvuJbvrLwoJSKxrnH5ednTiDueBpo8xe",
  "key8": "tRCUn8ZeYcMCfBc3Qff4fGEck14KHp5qVjo4TfqK5q25Cj9NQqKcKsNScyykHRXJhg9guZvp7TPmY3hNgBaACd5",
  "key9": "5JHAK8gCbiAjKNZ6XDEjPgsm86BfT5DYLwJeSy4TRxA2iVfgDzhnS32NEqcqcaktZVUNjRxS393Arg16y2ejXm5z",
  "key10": "5FLeUKMxRhZB2HKDKgtMf13UM2fDauwfEx8qaXtWh7EHHa7haSgYeQF4cg2hywZrzmhGfwjcrKich8KPYq22amh2",
  "key11": "5aQXnfH95r566TaXyvU7sguRuBbv3LVg4ZHQ1qm47bnW4crpaMnJLz6bJq1DmfKYJ5uSrzAyevDWBQgw3GUCvKhp",
  "key12": "MfJtpvg6ZcNFyHqkouFZy4AkcWDv3x8uQyt4w2mQBNMXCZ98QrJKiHqxqdkHz62WfKzmN4uqoZdjHabFfxoDDan",
  "key13": "4YKNNNPjgKoSPAFPn1csFX6vRtjaMXQm14JE8N3qsWCGyMEt6mMhma47yQSgHPSkb8VZLmiDLpNgf6HPYeERrWb4",
  "key14": "2pyVwGZnzy9ai2g8q7bSKSyzstUBZHEyWZmsUEEBdBgAPjCHPNVdvUmjEXFQR5tySFRdC9Xma8U4Swc2kE13fJeb",
  "key15": "2G3xcFYtTZyFjNN1KPg3cXR8SfVqFjXay42hQVenp8XjdTJkYFjDXc1DKkoGXAJRBraKpyJTSnpaUGteQaSPG12e",
  "key16": "53KcGujtpbZt7CbgsDZwVxfwNhxt9WMDSVECT8UJkWMfoajPkGiMQgsyebUbDZmd93emCEPZ7tsnQQTmmvXduQyB",
  "key17": "3XcBUgxwArBXt6k9fXoVUZ5mKE5XetGXpdNKrbpuzHgiq8jq14kjmGUyD9jztdaRAEK9dgDRZxrBw1tG2L49hJQR",
  "key18": "tTB6HmCh69Ry5ypCrpNpykvJtrMUEDSCcLSfXdGy6bkniJyMuTh3b9Zb2ALdiCMbWuBtCuVNTHWmrjJzdcy2JiL",
  "key19": "52AyqB7D8XWwwCCRJWEP99zqN7yLh4v9AYACeWQX4tjyDqjCBXNjo1ffQB3vub4a8XKq1n3pm6Ce2Y3MBbtr4T2S",
  "key20": "5TwJXp5Rf7kLVs7TM8LVWUX81fvHDevgftnmUkR7vG3PsoPh4owLW1knSLLFhPD2kBmSXVqSkqmzKXnEbWbgAWC7",
  "key21": "4LSXsZTYpbcxe2uqeMf4RL9sX5iBfVpUcRX25YRob1Ahc9xd27GAjUT2NTVbntf65Hqca8H1Spvk3GVwyHzardPM",
  "key22": "5fK98AheDADvpamGTn9C1gtoYHzonNPPbtCJuSrcRAmQraWrjeT6gnQ55Meomi9DVcabwkU1LscqpJaZXAL2xZzN",
  "key23": "5c3HfMwVgbasntmzospkihS7JsrZA9rDRR5Us3mDaHHcyvXCuLgTNGzg4gHQJuDfJh9XaXVkEw1b6sBCVkQR5vyu",
  "key24": "4ML2M1AX4HSKkbanw6SWRwH7tQ12yTQrbpn63ZRiUQUcvhm5EUAaeRS6snxU3mbJkLhsiityWXLfgaSjaepDRuPL",
  "key25": "4oXwiQTZ9sEQys8T92n36Gkvb3DZp3PA3ebFkxgpnJtaCRwxwEcK531BWKRziNJwPeGiLWypp355LmiqZ4ckKQ7V",
  "key26": "5UHfhpXSpL55NbjL7oNKKR3vcPvwYd3cmgQe5fRXazKDNABnyRyumi2vFMPZve7e9dDDH5XVJLLfUh9UCnNYPWjP",
  "key27": "5b8GQUkGg7HjWsSkpu2nmg3tLieJQjdEfbt8oBTacKrUazf3mAbRagkafaK4BYBp4aEE5xw9FYrSVRAnmFmZUxD7",
  "key28": "5D8xWA1Z9TPFuNUnvEFM97mxsJHRkLFPBNN2zVeuN6BK6QjuBFmhRsgh7KrkKZUhxefiLbpBXejH8MvvDp2oA6Ps",
  "key29": "5RLoafzhdEuDGBq9b6XQZG9zLfHT9NCWUiN7CJHGL5UUajozBk8meezdt8oNKtCZ4cToepSfQjd4jYb4vd1Tf8WK",
  "key30": "4o2Ho8iX1Who5dGPgTRU4tbFBsUTxWE3fAdLGj8q5wwyVXnFYhgcckNZqaurhNFKFZwW33at1H1QTxPezvYbX9zG",
  "key31": "3JwqXKoXjScMj95NXzzbNSdgJrSn4yXYSi35foDLx38AfYnS54FDD2jtoVf1sinWnGQasEHLhKeNs7ePZ22y9NDc",
  "key32": "5BnQbFu8Ztv2RgYFWATkPApGS8jqVfnTZ1xUpcpYzeFEMfkhafiXiHxFh1XiwC1g6wYBRkj99kYrHYkLvUrS2u9H",
  "key33": "ojCLSWzaXJSh23Yqd7TNtujeQxc39HtFx4f2C1vNecREiUUEVUfwmUfnu2LyRhe3xptDNPYe8JDefPwxkv9MxJJ",
  "key34": "3ZeemK32XW9zQZ7WADzFu2hGT9nTMSfa7mLWx7YjM71P4hYeqA8DwW96Z9aLQDL1vdc7gJGDAHuBHHBb7t3tBUVE",
  "key35": "2xGCE85RQaT1gyakGj2buhw1NU7PrxDERpGF1PmYrYAD5rsZBQXqzuvY1das5hydsxpEt9o3E2pRo1sdpET19cCC",
  "key36": "4ZfBDvyk9sSg3hjx2L8ipnKPDptDKWn3H6sc9eSWp1Yi7ToJeFn6n8jAhMvM9JVmM4cfJYs8tDK94k6kFj6npSW9",
  "key37": "43HjuKFJHvD16vuRGwsCFCmk1ijqHKo6NDhUh8QwSJ9eZzophvzksZDp1YZD8CPX2oZJaFdoPMeCq7hCBVH66kxS"
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
