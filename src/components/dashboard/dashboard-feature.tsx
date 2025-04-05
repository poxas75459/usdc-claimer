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
    "2BbEojCFdKdjxPYnNXiUJ7LY2b8XFLJANu61jCkxVyzkTidtneLVuoYiHXejuRVd8ToKxT9Tf9jWziVbFXsPYzbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35grmi6rcdinSBYjrnQ8Ui6zhADYmfUxRhaHogaXK57s8NigTE4yr5hN9MfDLVQxxAWtAjnZXBqo1YPxcSEeQrpn",
  "key1": "3rimmNaMG6q1yxAEKC1e4i3U6VPViPS2r7nnCqiKfkJBYsxcNZX6AsK2MKSfgZRtFK9kCJXgV4RWGnUW2R5GDSKc",
  "key2": "65NH37z2Ntgawjo1jby6rFLcP3LkAhK3VSp4eDbLiB4ziSwFKfwQVr8mBcVwfCpNZTVFSsYEWwxC7GaYBj9GMJUa",
  "key3": "5u6Qyka9PXocpYDSKMw5w9sfBjS9xMYTtMXhiXPv9nZMDPSFZx8iDUEc8zASrtAZma1nKM2WAJu73qWJfEqoNBE3",
  "key4": "oPtC5rTq7DFVVcurUcFfiECJJ9VU8pCX3hJNfGpeERjV6J4HZBYkKxjKB8reZvzrdoE9nu7Q4qq4RBFRr81sQgd",
  "key5": "5Jy4JoRSNLaxScGWxh1jBP1A1X8jc68T6YrSMnoCBp2nYhZxkACrpM1fyyMUbgTNrpxgGC1ZmPwpt9TuZXJcRWLn",
  "key6": "21beJ7Sr3fS8cYUi5TtojvpnJCFCjp7YZrgprPcFzr5ujLYSMY1iiAfyNdHhxDMWWGwJFqzY5aXGBz6hds3RXhcS",
  "key7": "2SKy1LhyJmVFxzT1p2eGoLCQD5djzc4yMrbGUtaHFnuew727chSnjzSYswWSeJ5XFAjpVf8dmdhfVFRPXDUiF8JL",
  "key8": "4zhqwrzVAx81XxKk2rHefjUuN6cLkz5UjyuHxoY4x2YevJitGhRwiADMh47eQ6N5ajNKzQq4GBL9FBFk2Ni4AkxU",
  "key9": "3qqLQbb9qk4oxTmzezsDNT9jdhi6G8kWU62jAvYJMr4iHpXMnRbGaKDohsV6X1sXUWJYS67PVCdLedN44b6jWXgh",
  "key10": "3sKBiUTaADgaq2AsiC7YfV44wiZeCTfRTkwPSei5vi43LvCAG84rDaEsxtkSuDfYbVh37Y7BVGZdcyD4CbXjABZv",
  "key11": "PzLqitaymKAqizgyvy6NC4v8EoitMz34c5Fczn8EJTkBz5ms76FM3qYdHvWmEwdg5mZLi5asLWS8NQ4W1vcgK3P",
  "key12": "3uCqZfCTQudAUVpx5mgwRvhHTvXy8A59uvWHevLAjzwKF1gJ1FimpQGCWmxeY5cXUufPX84JgHC8BkhgzY8q5UUE",
  "key13": "3p94vG8HynX6ARGNzJfBvDk3CijVuJXf9CME7ZX9WFSizEkKVQaNS9A35M5aoQAbcPy9bs6pUGzQqf5UC4CGrEw9",
  "key14": "2R2gNRBxbg3rYXghmfq1DgrznadRY7AazqQhkrwgP5EQSbxDNpgZJ1N74Fmn2LkJgrGfDibbM8Ym5KQPE7yXW4Xd",
  "key15": "48rc5doEtZCECPPsmG2RKfDL9gaGkdg5LHWBX6wybe8RJKfxLFHHEAZ8nFLKAfgeewYQRfSGVtFTTJv52ZrZpxjE",
  "key16": "4iUGBbdree6vS6MNdVQSmMEev8Y1uXkumYNTm2qo9nGEmNcGUcjJXUwT6EAhNKii8gPMy4DnzLtGHkxKzeYhd8m3",
  "key17": "3Lahi36UBNpagq8xKeN9iaC48gSU7QMahNjNM9JWgYtNSNbfUtAbVm83VcmMtwLtyteyUNVVXuJyRkfyhjQuneMH",
  "key18": "2bmrMVya8gGG8KX83CFcAQCCGYg31gMXHFBbuD9XPZ3kFPywWZKhEngPq6d4rwMjPbRG7ydFqKWHk2p3WBbLtGib",
  "key19": "QXTvjMoPnzNt2UJHwr84B4nvbGpfSsanWtvD3yy3av8cyWZ8R9DJQE4yaMD9Yit9BJK9PJc6DwWVguvzv36dnWR",
  "key20": "4Xf38yHYdG6aH87wSRgRy7tRaaWBiHdxCoCLDmKGcLFySmf5Ea4D1skBBnid8aD5v8hohuBpb8nNBcLFiys3aRg",
  "key21": "5QMahLxsgtCEqbQF1GZbuameHE4AjaWdjwee4YhaGyh9uUiujXkhu5yxrYgbE2kr2HSh1PHgJD448KHPU5zb4a4p",
  "key22": "3JxWna2DXmuvAEvyMik5MtrXiKE5GhrrXGWHFkR7uru3NuVsLit64qRuCsyhtUbWUH5QgVoTushuKNak5pJQmTZC",
  "key23": "2rovV2ANDwLg8i492SxUxJJeBJBMQQHTvUeEVshm3spRohjM4v926LparC1ywGvbFqQdNTzyyTa4b4XPxnwVu5ix",
  "key24": "561YNyyDhgkhKsD8kU5pxyBJmPQEHxHqY8Wyg8enbPW4ZAB28sxMXmgM1jCZg9TZ5R71zcnVUu8uTtfKUFSGtXGv",
  "key25": "3bbnsZR3e6s9dFWQQd2fBMMMqH4FAnmR6pKNQMkcsiikPotRYVypLVyGmSvFPM1fKuermkm5oXjtHXvy6x4rALxs",
  "key26": "5C4cMSzN1nnretxDBkf4zKLJ1gNFpMSFngCPbduLc3DbsHqbgkS6PKhsXD5QW7KgCkjPzQqHAB8vkWSwAoMDZq3Y",
  "key27": "4f7MZto7bfUVgexUvrvtEMfutj4h4VCSUkFjvBd2ZuLSB6Gta18FKRdEvXXCTWVKih2DkYZuPVrkJY2cespWD53L",
  "key28": "3DbatYquJp4A1UByqsyb9gvco8xP2f3nuk1kcVtLmcBkYQZYhgbNVRs59nkkPGH1E9RxBXG19pbYUN7hpzcAVdsA",
  "key29": "61ERFxmZPsrobgA1FuPMN6cYeKbSJHsmfzhDtGaoxZSJeBJZqDyYtsT2EZuVrXagupQ4yZjUHVGu9RcFLRpvJV2Z",
  "key30": "23i6WD3dmeQ4ReEdfgJLx6CWgjNBfkfFAhnvew1fuUicA3kSjxC8y2nfT5WNJ4mg8qdcYaRbSVvC8qDmyC2stb4q",
  "key31": "4j8ABFUSBVZrcDsu8tLNPgeHqCUDcAvvuLKr1aBMBzuqFErjx4iNSncmdJB2hnRyX5WNJydut5DLnvL23aucbWan",
  "key32": "4ps65tvprnJzJ9iqNZoysozoGstmCi1fb5tLZyXTvHszzzAMfWBCMmLds1m31cFbPB7iPL1BrVrEpgPD7zHxMihq",
  "key33": "54NLnZPQXCjkaswYLbMJtPcgoyrhT8zyHBfy2LEpsP7vQbzPodEAijoh3NbMu9LU2GyHFBQRaqms5bVMjbxrXjKJ",
  "key34": "PS5dbZkxJEGJmo23YrRmah7c5D2skRKoJZ4uuzqycV8594cuAAxZEhKynY8275HfMs6EqwcwSevF4Pgy9gBhz5h",
  "key35": "4BRLpFHxL49DY7KLeAin59p3yayxtvU2rp9NFPGWSoBGd3DZ7d5r2Rka5hmBgAWyVqXiJAh4X6bgatKUPgXSi3UD"
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
