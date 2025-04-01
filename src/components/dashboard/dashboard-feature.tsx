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
    "4NHS7TQ66CfwveyWb11WAgNKcwKVJHX74FW2HBR5WYhBqeYZdSpgmipVU8f5mk2hbtiBEUrfNeJbudHo3WgSxCH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrLD5thk9cWHM9PgP5czp2WjhLYb1bZq6TrBBuhhKCPz3pJLGzZK3WfPz1yKBTu9Zb7oUWaxN5NwNgW6kE6GktZ",
  "key1": "3rLeTkHPdeQb96JnQqGw53hy8LKr9mbp51zj6UthfsC8MhXXfMcgpoZ2LigSyYLXtdWTnsDfqFmkkjgM5GnGYaws",
  "key2": "3RfpWA6Q4TZLrnsHuXU5eRy4uDBPwV5FBdL5XnkqZpiCna4rH1EzhGfuSA4JByLFS8jbPXQK5Ec92gYz9D7zNcVE",
  "key3": "2zddXfpgJLB7YBHwpBgchHKSFtzGk2pcZ5JPPjMf1qW2BK9TCdDmKzoRAU8B5rCCZkHDhwezCiPWCMEb6NrFwrZL",
  "key4": "23Ngxdnp6tQDZqX7oXRtrrpgrch1gLzq8JnEvUbW2p8VbMXRgBqxpovEj19UH88NcQUj1yidsPrBrHnkTZZsJ8jc",
  "key5": "2tibD1EycSoKvHzMkFusyvCHkSHm3AiMNF1VHAkeUTp2Rr3BTxQFR2d2fPcKXWwxU1HsUEdY6TbhoYWdW6r3dsmQ",
  "key6": "wZkD957zMrvXg95SXB6VMSo9YxxMKqtTzE6ZKuXWVKi7qF2L5xtih6UYabf3iEdE5k8WyxZXsAUorrP3fnX7N84",
  "key7": "4b3qVdPgt7h6L5sY9c1qF77S1rLknFXmNLuKgdu2EavgQUifYeEfC9qz1BUjnPGAbEFELBFpvbabf5XgebF1wqwt",
  "key8": "2mSgR1gjUbCNP5a5hdHZZ3BxKqPxthsHoEQ2Kj3tj63KbJ54KtN6TmEchHxFATT3TfRfWXckP1VXtC1gaXdWhrZg",
  "key9": "ihb26e3RMPzFkq9Yw2mWT1Pgyq8QHcNJ3SZE27KPGujjYtCh4RGXnFGVvzZiCB5Z9ubmTx2rB828EtxSoP7fLMS",
  "key10": "3QzasnXnHBpeidaYRHFREo76zY6StL2DejhftZWjDJLGvjxjEmw86jiFw821PiHbLN8ib4HQDeoLy1vmnusR5QoL",
  "key11": "jVcrw2VH5t8zNmqoU1FCCLfzHWEbcG1PPBuaRFJUELB2HfAHcaEw8KXv6ixx9m2jPFFWeeGG1SPB1Bv6oVGskZ1",
  "key12": "64EX7sNnYzHC6EGesdC8TF6PxxsfMKDYG2DvVuH2FevQYgQDHkec1jGz5QNQMzQ9GpGYkS7yriystpb96KT2pBRg",
  "key13": "2hz9WDF3WQt1o1dM5JXuNUZ5MpWoFQT2kuoK71Ytzc5JaLZR4Y9ENio4cfjfd1KmsmfbrvS222i22anhMpnjT7GT",
  "key14": "SYuJ4bgC5BrP3KehGQsmjqu1uHZrLcqutHycDskMxVNYSS329xS6mYdfVc2Z65XxrSeXepYjegkHigxroEbYFWn",
  "key15": "2E71yk6cthAtA9FKot5bJKan6tqvpj8f1avYRgsMJWeEQiRan4EuJx4be11EAXw3KhNzKXUqsDXwSmoVrfhmEb4k",
  "key16": "4XcPHNfHsuMjLwhGgDBET7PAU5vbkXjS8VbiRLbVzt3A5Q7Tw7qBHnLM2Y2RBSjHPzYjd2CpBesiLyae9J62hAEf",
  "key17": "5NEUa5XAmxDcnqi7sBoYVeFgNYD3PsmXnVaqCDJUHTevjcDDDAhKkahLKa4C5MRnRXZGuBEW7dQ93yqxT1hEGS7X",
  "key18": "325BQhsujq7A3UfGs6F65sSntFTTrFZMyyP8Dh3m6MCX7neUbvMdpvZnUA5zCsxHZYB13kBF1qYDWek2uDFYSuye",
  "key19": "21dHmWK6q9p1jz8R61goJH726bTaw9Nwct7XgR2tA8dtRmsDveNfdy6qhQFfJtFGZ2SSB7anX192Q485U1WvQcvj",
  "key20": "HbBy4F3MScLpUnfxRCVJvN1DqF6qrDyFLJBg72j7ndn21ke294T3sRdFS5sbm3bDrfrbomRsmeRiqshLMub2QL4",
  "key21": "2cLMRKezfsKAN9cadTnVsX3vaGSij8M3Qy1gm1eX2jakLWWoPHbisMBXhffDe2uCPt2yZMV3thSXS3fZGauHjgLi",
  "key22": "3eNaBzrwbnRa5Vj1RvT8KNELgna2ZP1VM3StHxFTjRKrYooYN48J8chVganx5RJPPVcTo1f6YjAKSNjUTNJ4vfUb",
  "key23": "4ugPRvLCpAh4x2PLDvhHA38UF8CAyJjs5hCMqpTLtqczPqbuwKfSXbYEGibBYyT1VMLx2WsdhUMD3WtgYeTU5zrT",
  "key24": "3UQEZtbvgWdFqh5PvRUcQcv6g8JPiBuVrCmyNhrWDtjGo7giatG4PozV6BMxV8tSkraLmr8p7QNNFje8UVMzsSWE",
  "key25": "5UmjkFjyWLadk3pr73CSyHEedFcTJhFne8j6SKHLSWHEvwki9YQW2kb1KVYrj2SuMDmEN1RJuf8iVLS3YWW4xx1P",
  "key26": "5JSthM9JMUsgRpsiktRvuPVoWM3Xd9FtKMKv2wJJbagcJXsynMcA4zjW4ueg8vySV9D9XwrfzwmPtrDv2rFR8x3B",
  "key27": "5vFx8Pp2b5tjABxUkMXdgiX1J3YpVPjqRkzirsffZD8YkXbw8FJyxC6mxcoFM6iCNsPYNfS4KEnH43TtsMuKeBa4",
  "key28": "5m2nHgAJ7wGP7tGks3e8x3jdugLr6N69x5q63iSHSrByL9QGcnKuHiCidGRpK32TMVxzuKujTFqvtxEEYpeTU4dX",
  "key29": "2rJXKhGYTpcrGnwzKY9CtQ8k9rsxj3QnqAXQLDj2gruTEtsHFNnCf7xMED6j6vMP8p9XoZQ4jznowvvr91xqsB5d",
  "key30": "5gTpNXJGyDkKmq2ZP2ybq5PdcWFJWyTUg5fAKGQAQwxvbnmidjB6gKa5y9GqFCREedDQCmZSapU2P877eUYEQEU1",
  "key31": "5VtyLy5V77oaLEPdWTWjNdcs5AfJw1oUp6Q7R392bcrYHEtwsAZT1mLswaK5TtmtR1N66N3MCpofiHRc5HF9VDmt",
  "key32": "Xr16v5wB9GEdz7FJaHeJ3curNLQA4jMewBbN78QQbE3AxWLz9wpaLSNdd3NGCauYW1tYPYWna6VAvPEQZxGrnMy",
  "key33": "2cp6UUX5hLHhHEeCTWc6fGcsK67DiSqJt9FH3AYUh3eBR7rpobbbnqBEboWVz7YXbi9UDWTEbiLhyCRVRSowCDBZ",
  "key34": "3yg8cx7QLyyTrEtwwg6KqKb73nV4SHiji87m1EawWrTC7WKzjPAs3YFUbHTjWNGLiD5Eg4Bo6b2FG5vgK5tCwoR3",
  "key35": "4PjknZBTtfWomKJ25Y6nSzLGdHZaMJNzQqFXLUajR6reMMVQiWgPhrafWAN8hY49fi6BaxsfNSsjRxZqPDyxvtYa",
  "key36": "4nvWXbbkeFj3LXUbhxRGPmnBVxb8762jSQWMA9HiZXVhFEuRRpurNLWaxVURfrQoaSEKteFv4mcessnodDWfkik2",
  "key37": "4sNCiwsWGS65DDD3ZV9Ya6StgPRVzSwvtDNNuxtsJjtucLdRwKX9hCe86zYq18rKiyNFXj7WEMC1s17kcp9MD5q8",
  "key38": "ycfTkywWRuwJFq9K6dbWNaMHZCSiz5FjHwWFmtjozBoduZMwrFYTZEyxcYz95ZHmdhb8SVfchDS4sEesUji58Bw",
  "key39": "4eAAVTawbHSAL53ESv7xS2Dvpbi8oGkEd88fJ4yXVVKU745ghwrSEqhjEM1voxkztVKxvKQShjLyb1ZL19j3zfGY",
  "key40": "yLtNSL6kAJSu9h2Gn2ULWFBqnhW69qB4m7Yh8yZJgGgv3NMcZq6hYTin7iArWXAVNrkdzzbzFfBY7dseQJQYCGa",
  "key41": "4fhwnQ3VYHWQwyXkPzQ5rYSBhgmusmwjhW9KWYiWz9UrykC72WHemZA4oUtxW5AHoF4L1Pgy6i3J42mwFs11uBP",
  "key42": "34HNyLAYNsCPokFBf8fey7PJJboum5aYsfs9aDHFGYUvbeqAcr1AK5W1njwZoqivK8H1xck8RLa1HfWGqPCgkeGT",
  "key43": "3vTJCyfniiGoxrsuecCV3FJ6U4qK2SBuZiGNpLKxfSs544paDViDdJFSqT4g5sarfKsEAbR3RhzrN6Htmc4eqfut"
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
