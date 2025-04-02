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
    "3o5hytM4XewhWHYVE9xxpbvrdMyTEPG1JxTSt5FTcyaMuRohtWPoJ1x538YUJ9w1UHjMgJQ62NKR2EycXkN2NWtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpmSLpUNhkXAQmpH59zc4d9XarqS2Zjv87A1iXoar2vzBWfPNEuadfztYbS5Wxkb1hTHoRmcQPwr7kchdpBKXLc",
  "key1": "iZbnc7hz2pRynmDLvpiDaeWK7zeoqVm5KwWgWrKQaNKdJckDP5PPx35p5XtZzKTf2TMp6rdRvqBmuyJ7Vxm8kn8",
  "key2": "3D4TiSq8pH8zB1VSpbcsbG9tcJxPxFQBzsMKo9vjb4TzXtyU42WjKfThAmfGEN9yZFCLbLYNuuzUGcfRjzD2Vwi",
  "key3": "3x3Umgp8fB3epnrBLjcTropLdE4Vb76SuBrkYxh8RVviHfxezVgxYKz24GfZraoxahxRdsSVZae8EY3NerdeLmsN",
  "key4": "4xVm5iheytbtYZjVF97edVubXiTNJwdZEJoor6X9KZ9Wu9LqJiXApTjzH2a5RS5G5CMSggPiVo8sBtLUBZPB26f5",
  "key5": "3JxNepvRsG3upD6s2FfuBQWQyZuBpWi8rRaRijF3epV6jH2ZmLYJWVUT4cVWDgqy1t3x41dt8msbtXcF2tCCTxbh",
  "key6": "2vmAuGYn3zGTyjy5oSymaTPEQm6M8arzCruGbxp4mBJjVEY4vWNauT8UPNkonisRjUe9fNfhQN3jevk7JwPfgkJZ",
  "key7": "2H8WuCFkJvafze3HNJGhJ6g6KnrM8zjMfSLFfxV26W45tjNbTDUKg5uCMGaj6dc8MZh1RAYuQbWf5JsLRJeMk2UQ",
  "key8": "3RkyW6many6S9tV5kk5KdXABG7iU2mGh7tMLqrGA3TB5YNbpgqbHmo2czXbC4GtqF6qSeCuhbWHfJ4QoTWEPioJi",
  "key9": "fvnPUhYeajpPqjAkqPGHmpsKnJpgx5YAhTJk3NCnxk9GZyuvHM2MPQHeq75oiyv1312UMgTNgufir7Xv3bpX8wK",
  "key10": "4faabKHGuA89XJKaspCu4ckZ5ueESVb14Dpb2Jh44MP3rMitpVECPdt9W2CaBqzXnw8h4wwdsr6WuDH23j85Zf4c",
  "key11": "5j7dUxuAN3o9TiwMvfxv2w3PJNFqBGEqEkiqSbPq9UqTBc9cWudjPWWtfknca83jCxmXAStTjNT3Mp1kXjuTQtgX",
  "key12": "4ZApSyMZGt5STaNetAfMfaKEBLCpYiiXa8d98KdHcjXeK45inJ48QdrwVDkzht2Ye7Nh28N3gMvka5gMYdcpQmyi",
  "key13": "5qnPfBg57k4DHWtL3KxDaxbQ8H3jgrcz2pPpV2TNoXLtRPh1XDuanBdSbGMQHxWzBfQcPJ5iaG522KjkrWWx46QF",
  "key14": "4DGu5y4rf2qQWUc4F9eJoUowHiLYNxvuA8czampCoSMVWDPRXvxWdaFAGD4KkZyzqh4NaUg1ZAWfDPH4nmvKS3Qx",
  "key15": "3MYNnvyR2JdPwQA35whaLGD4JfzNNzNHNi4xLFERxybbtachUXwNjsFTHiG8FEfkX2g8U7ipgkW3xGiLrpDfpKj1",
  "key16": "5FrMDX5DiRFGRzhhn6f4icD5v8TatBgCHNAhvAjSJ7yaeovFaZwNob1jLy9coTvejzF4qLAu6Y3x8jzAchbo2npp",
  "key17": "4oZD6S9FPc3AGQqbfkhVHKsVMfEX4ZGime1MHBqnVQbA6Laib8Gyb2vAC4VfPKsacNscNjEYMaXaLEdDvqKD8yX7",
  "key18": "4o5sW5GuKnAgHLRzitVkJUsdE7Hmee4YF2xjLzH5BFZALvxkARNWGAfmDV6so1itetEUVYQNkYmSq7AG2m4W8DoV",
  "key19": "HYHaQeQNSWxnEHz8QuzNbVcUZpfeHzcv7Ebe3NpHUERFaLdaEGptwPSmEwcbmeviZ8BnuhiMBD3r3dQALrJpFSB",
  "key20": "63PZnTUhprjbqqjp5xzCoZX6awbLm3g68bPCUBpZiTasPp1oceGM21XHTFHk6PCFFAQWdhaAHvLWmk69JGBXekV4",
  "key21": "59Q97eZgFDXHR7wEcXxKKXD4pRGZjjMj9H8edHGD74RHuKA85E3PdCD8M3EhgNGzczj2AWALR5kPuh9ywExHNb4f",
  "key22": "5wn4vdRbGGAcRaqscKuPpxZrefSjM6qd4Gkzsr1iVZnD83kDtobAntPv3kEm9rKWNZnPoXJj8CYUoxHqg3x6Jna5",
  "key23": "4u3qzfcbMbz4bYKxJkaFpoQ2R7yYwci635gKoQKuP3yFkj7ZXv6tp2RwZhoudjU3c4SruMMyBYKRv6rrm8Wpx5E8",
  "key24": "4xSaBH9ZPtmA9PFC3V5wnst8pbodGGYmGuMPRGiUacBMbTu2Y6hUZDA4sMBL5ted6vK3GcSD2faWxBqfLZoVGhHx",
  "key25": "25FaRs9UxTEnjpepyrQhAkiAuGRoqfiz2gbwZoUgy7FsgtkmBMybnrxwLgCxms8e3HzrkdUNZfinNLtgupk8bvCE",
  "key26": "2GeX6w1JPqUBKKpHWQLbsYbJnQVrLXY6jfXqRyJridF6s6qczhYcQceQPHEfS9thyk9pvu3iTW3SJZMhMKy5JKv1",
  "key27": "2GzEsUxyLAUWe9XLsmYWm7tgceRsd9AH33n9aqP3oAeTdu3gP2EvU166ufCQDVqBqrxAKz31ay2yEQ4wHUHFDYPr",
  "key28": "3TBS5CxyiHJWKNrJ5M3mLmTmedYqqmzaC4LBQToQjYFywSWJ9csn1BonBUNHaJcWoUyizwMAtmrXRjuP7SRqYarf",
  "key29": "3zADe4FK2bX43xLxEVgPoEptCewkUin1CAFJkYBRPMutxsS1xYhAciqDhd3b9vfUR6u9U9VdKxhC6jiy1zu2sqPh",
  "key30": "2xMv75Qu2uaJoFa8ErTYqPNN2LfgN7Jbaip1khkRC9fysEmSssTcGMyvE6MsrugaPygVr1BoXYiDFabJLTYEDRtw",
  "key31": "4nJameARG4pBzyS6iRBRLjPQcmGcj7JSnAESzhDaCK5UM62EVLEPYqVTmugxLhYnWDCcCGNj8G7QeoTJ6GWvxXXy",
  "key32": "3W7DZVRBgRi8YBpbEs5uJ8GrQUh1KXoKSo7Dh9hjUbUtqr2YV8VomYvWnm46mVPFMyktMRN7A1ABQCH153sk4E8L",
  "key33": "3unE7g8uhMvD2xcJdp7thamRH9MoM2HnwksQdxPyvgoMGLoYNLDQCmGP6kuxMJpS5FSDBUwG97x3SSFAhU8ioX1N",
  "key34": "2pWqCMnhYpwjhJFsCJm59uNqQq43WKhC3y1YScpJQYiFkv1Whd6LH2PeDnptsVTxaHiJBrKK9AsEg3LMBSY5fdNK",
  "key35": "5L5SYgsm5PR4tzuHWdHP2BrfzXdQVUea4z8rbDbBV946NhqFu2QXXvAq7SGahr6RWHFmfzcNARyycTarF64yQ1mU"
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
