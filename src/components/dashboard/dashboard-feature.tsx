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
    "3Y7PFvCFaMyChFYBMa9WPPV8RrhwS5v2Du1poKVNLLdoUJoqX6BMgLHjJMc4Lr3TsZHU6TLnsmw6v8RgzVq4Mrry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSjoS55BbL9Fzjtb2g3YCRmJPFZD5JQJ34CqetdJmwapL3CHXT68keL2JN8evWQSjZKtbzAcjjmY3qHekhLWmQq",
  "key1": "3kY7pQGZWCsos68V7YYxoEp8FFVZ1rR3E7uMHnfPgHPwn6fGbrkhP5g56R9ZmKkh23yZPCocdTjeYA9K1Qm4wasj",
  "key2": "CjKdyEUhfmRRA34t5GdQmxm8ZrxVbV5Wm8NAeadiN92qW8EEk1tKhJzzNMVQrxEHkTPuX56FsZiJv6mqLYgRt9x",
  "key3": "2UNNFJXRFEjxQJ6q2LvEx6Mf5CEQqEzvGbAEQsGM1GNGuwRWbRSbKghwCXnr3Web7EguFxkYVNeT5Hh43ecr1pZt",
  "key4": "3RPopZ8XFVuCK8wu7E1gbMiAtQWaxYapYUFxpzPtcSdcNY6piip3uMuZyVeD53XUuoTF2HZbridZaaV9rv837KVR",
  "key5": "JnmqL1RJ4KU1vJyX7mNrDA4vTVJV2fbRSfybCaZYBp37EaDgMVmquFmmJXeDAhGyX5iwucoiYQDxD8NGN4GWvsc",
  "key6": "d7uzQJ3ojdKHMXZcs1YeoBZCSbVwFWSPWH2fqPQUvVjwHCjyFhnV3uZSCpPduvbQm3oW4vLWzDn6t4MUD9HVpKp",
  "key7": "468qVrPydBJgeraMuHRYoKU7Fov7ouVwU9eeWZkap8Nr564PdHcFSC8FgJ3kLeY8uvy7ZNNLH1v66ysdiwm115f6",
  "key8": "3Q2hxpMUhAT25mB83bSX9bgqx6hWsD31KdXj5y4G2HMsbzCrGi5yxy1tD3K6vhXfxXrRNpaM5AHkrywEAPpr1mSC",
  "key9": "31pgZei247xAak4DvK3ZQ8XHrW7WugFbAeoiWcQzsr9ke2Kx1GgtYNcizmpx2s6fGAjbitY9QY99yhFPei7KG6Pn",
  "key10": "5NDcs4VWTWA8kqaXYUHcdaZ7fdKTUPrQW8kq3qJ7X8ij6hFZTzxm5ZgiYNR5EgSCnhwFRMfcVrYoHseMvXrPMZyc",
  "key11": "wqFCjqTTG7yykVRUXNM4y8nTC65MDzrK1q9vkVmgJM6k6K2iBxWgSM1bWYKb9qLk5mk1CxMtgm9BfgShCUkz9Qh",
  "key12": "2uTinQfsBjrYM47jSQ9c8N19fJexTJmiKTCe8xgqYjMi78gj4yhpMyMXJkLARNuFHaRBmDMhJULXBrcMo8AevQJC",
  "key13": "4sKpnDSM4d6rmUBEFf7gmY2CWwi1CWLo2rNfKamYDzZruBPU7X6c9UCAFVrvjQ7sZFgMRNRSuVQviB6mauypPHWY",
  "key14": "5ajzqgCv8X1NgLgnZDnYGfyA2moo5ngUqos1YkugWr2Qqo1GHBUFJshi3WY1CTFzDbj9UsTnSrvnQJT84dtVbevt",
  "key15": "FR4wgEQDqwdxERL82cf8MzAFxivUqMfrtpjurPLyTrHs5jggvbmp8rdyVKcpimw2GZfRPkMKVrj1vxgr8y1jJzH",
  "key16": "A8Zx7R2quhk9umU1dFzE2MmAbrCWTNWyC7Yc87h2PqqfLyTn3CPBxpkqbWvofvSQ5PiLkthxPQLYYUub5CCeASf",
  "key17": "4SUmmHREsC2Mtpxm1QEHkKMYfvuCAXoSnGBTvFTDUcxGpGwhd4TTLfgcxLozk7mekK67y6WVrTkZHQ5pndrD9iU2",
  "key18": "4oZjuqDNL2AM7eJ3DoPcodCmvWdvxX2rA4dLDsAWEUcqyeaZgifT8aPVF6nasp8GprZPHQNk2fPKcQXtSvW8A65D",
  "key19": "2A2x8X7e4DmJfDabVmmUsidksAHa7wbjMWSn9qh7xAW3T4t5Z5hLE9gs247XywZs5WN49GAnxf6nTUdCQQL9tqzL",
  "key20": "34wW9zYv6v2FAJKEfaLj7QLd2gsSvnXwzgyJzjftu4o6J97wkFbybPSoc44ju7URC2kvieQjd2ZTrDatqEsbuk3",
  "key21": "2ZK5U1tRrmS6Jrtgk7V2CFs9XuZFKHah1hBTgjSECoETLgHFJZitrUKRi6iCpnuUMcXdjAnZhYL63ZVHagYtfMtv",
  "key22": "ZE3SUDCfjVRvUXuqwNsMsqGPaq5bndNE9WsUBZop4QF95u5HcFwPfKyTs5ahXUsqWw1jfHpGvm2VqjQftUJVDnm",
  "key23": "5sRsVKyF1DLWxd4Rzn7AZ1Aa98JTC7cMVQtFGGgMWAie7QDEgY1EmjNPnjswCR67TNJsqccdmYc4wT1B7cXdFUDr",
  "key24": "5cVck4o7DL3npBp9iK5Z9xqEXf5YEXgdBsmDcnS78QvAZwnbuu4UcYrxnv7uPZ993zN3ZZug1dmsvgFdfqGtg9rq",
  "key25": "9xwHGWgkSkgdY4mBJyby23zBf3iCeABcbChUa6LUyyMTsRFTAgKRYmjuks8JoHnUMYxESJtS3bSKJfARSYD4eMD",
  "key26": "5DMGzbrySrUKzThRHXZP2TU5hTLHk2wzasqUSQAmcrWW2DqsiAd8RES4XbdUPEHPbVnvxPFF2PWwhaLMZKgptuSS",
  "key27": "dJjuLtUYTb42NwbEvp1CsYqyP2zqbus7rCbfBoui8ENmqx853gEAQgnN5EzptgQEz1bkNkKVRRoH7rHFtx9mkBJ",
  "key28": "2LyfqgY1f38SepAVTdasL2uTwudUcuggVjZMy2TfxnUCLQNvHhSEsuHeRuQdS2jG8gohnvfb7wMi4jmoTxCxYwd1",
  "key29": "3XSxuUAv5oxr6SYdJCAE5jhoguDFXWS1J29Udvn61ULJ1h2V65hmJz31EYPUz8uwBpbxjWX981kBUabZePAqReCK",
  "key30": "3MkbbUjBunYCY2WinMG4kCtgjdkTLiLzze68CnKbuWNqmWHSTusMrzqtUe9uNAJ9WJZXkLFpQ2K4KzLFLhh2vvgg",
  "key31": "5JoinbxGP7ae3rXuuNedD7rU2BwentDRxkZVLjVs95BH6UN42XVMCHRx5QdQ5rAFQZo8qqgSpJkSDs1J3VPALNyg",
  "key32": "64pwTPmTv5Sydpab7Ao2gWw6pw6z5A2A414dUHFwP8MqG1SoiTLgqA5Z4WHc6mpcfApoTrawBuYhKRQ1B77BKLzk",
  "key33": "5EaVwSDyxA2ciSPjuxNNLiUaugvtNhUfZBV1r4v241xsy549xhaJx3igGjjQyhg3zSQiJY8biC2Rnm3bSQM4csKe",
  "key34": "3gb5xGbRbhNDszGGYV5d41QbmEpeP5nmiK5JK7yrfRCvEaJCjEeC4rRkYrSWbdZiRbbRWJzwb3Ek617S2dQvTwt1",
  "key35": "4PQetJ6kTvW1Fqp9uQspUAJ4LXKUnWxaXUMS7iZKaYa9vavGkUmSCcwGKVAxu7xSvFqb8FJX1cFE5d1K46tKH5vA",
  "key36": "473Gd6LyWppyyE2HFSXouSnfc63da61rWEyE1HQxnPBurE2mB6d4xAA2Jy1Yuj5nMiaqjcS2xZtKZh6XJ4oMvrSX",
  "key37": "4XJNQEwrF2Up2acGnzwQhS5K7KwW2Y1NjvRKTWxyNDTsA4ftCgZnE6PppDrtJUYdpv51HR8F85k76UDmfcb7Pp79",
  "key38": "2D9PHPKgn3yzqHkeUanLrFNjT7psKG9c9B29cKaXXSHd3TSaNgaFq1bUnxaCaTK73brr9fxaRYiDaxbPELc5rkfz",
  "key39": "j2PLFyTScpMfKmKctG9U5iBfpEz2mhxTKYSzrYeABAs6WNbUsJVe3ixRNuvtgLi9HjTBwdWghBZ34S2rJvNnKvS",
  "key40": "2CNRrkodnBg3jGbvvELERmoycAR7uHvKCrWGYsown4vTaYAae7VnnM21SgJFVwTfBPjRgfLzbn9FdEyEdAwW1c6P",
  "key41": "5oGJfBRyCTi85D8S2sy4UQnKLxLNN97gvEKoPVuktASqXHihv4zNbiSifKTew7Bg4y2b696S6bkhiRCEjFsTxRb2",
  "key42": "2eMoxfHvKkiFD2exPDHkHBXAHaGLYk4TDozJmjKbKj96g2ecFY54CvWEBuX3onNH1kWGB3XPgGKCz9pBaffEgRPi",
  "key43": "2Gnib1v5xc2gGby6eEXvoEsE4AoNTtn8zkhurB64rY2RCkJNMkLwGLpZFZZLkhT1EZfLXt2tHZM5SuCuD8id6LLj"
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
