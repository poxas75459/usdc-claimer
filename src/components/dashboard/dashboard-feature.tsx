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
    "58vBEqHRpoSwkwahYo4g7zcwdzrr974FoHaBhAvgffK7FL69codU1mF489XofTtU4qJTviXA41xNwefeJCAGncTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YtbGjU51Ba5b9voL9CKU5dGhSu5HmFmHfEGedRF8iYHAD1E8Cscn1zPzY4TMwy4onWGU7xDhf3AZfjGMZG6uvh",
  "key1": "5dhKY3SPz2vsKvnDbSRVdLSiMBMFBgUfQUvbuErW2YSLVa7AqX3iZZZLtbiiGb4EAAaQ8LtyKXvmBVuexKFtUCkM",
  "key2": "3XEx3RddnKRsDfT5L9gpcRxJbrwRj1RHdfSbKhM1pd2bqnqRqg3HA3mk3qcMGsCk8Z5yp3VVLDskwEqabAmimYir",
  "key3": "3qpRDTTjsT7XyUe6fcUF1vECVnbmb9EFhAtGfn8bLXS1D7dP6GUWAMy3CZa5h3GfBbzDskcHgLdTkZwknimeMSg7",
  "key4": "2x2ABKxfXa8cUZqx3qU2ZSM5ppxJ13Fb21R2wN8vkPJV1i37vCEEBxthrYSV669BwZgzMuWw9dKWYS4wpzQhBpvY",
  "key5": "2s44Te5QpHsdA6EXW8Xjw85XVHwwvFN3vafVs8QL9YF6XpHZUPNpom72p2Hqe7HcpzsEVKaFoWxkTM41jRbuKTtj",
  "key6": "43MrF6ciJ5yxgHXFBikNbGaWSz73ad9EwyVP68cPoVyjqrYzuru958QEe3bNujnrtfAXGxQMkSGCqwc1cxS3m527",
  "key7": "5YBghW8ArjkWWU6NG39wjrrxcBidReR7Bbic7UbT3E2Qcch8khEvvf4umj7aHVEg9iMMeqMC5patHRCoGKYtp28n",
  "key8": "2ZtMNKEXrrTPp2Q4oV7t8h95kbNSWQcfMWKdpdfKJpdLKWf9Z56sPipuJtk8fazEixjQn9b1zmr2nCASveN9owSE",
  "key9": "5M1BUTPKu7PhsLmYDbRwauPTMJEexuS3TSrgHgmdw1d65yJ28dMtK1qNRL7BhG6eFo5dryV812adwtnsy6RVdZF1",
  "key10": "3yskvktgyUoc3pe7hhML7JojFEPLy9oCqaXPFWgYxeDUT7ubv68iNYJG4yZuoLqfuAKWq4YY7VmzhS6BXFYekYkp",
  "key11": "4Gk1QZwW69LUxDL6mnGDQ3ZmXTEJQWrcAGiogKzpnaUf7S4CfAP6NzikRtjyevJZbqyY6hYvj7hRbNbSqxTzpPhV",
  "key12": "3trtDMDdaHZMEAR8S7EXD2Eebomh7cP1pLkaQwCUtBCuaV82uT4LTkUsfav3cHxQ6Q1QRM4y8XtyLNPRjzMMskSn",
  "key13": "2UpcoCYCTWtAYtper1w5WWzf56WdP5yKi6nzmgTgcsoJbhpegYdaMk1S7i6akNXcyUMCMBrMreByzwPnwU6mo8hX",
  "key14": "5LUDNzCsgPyd8dpe4FqyPwX3W3K2WYyNHbWVob84K9rCKPUUZAmWX32s7sqDQZSYJhmB7cKuHojvNZpmqGfSnSzn",
  "key15": "4yBPYkD5gbQatGuqehp8Q5zRgFy7ap52gDWMpBgQUxx9SS4itgL2YNzrsjaLNNX67SPPSQ9cpF4Gps3ETAYGjpyP",
  "key16": "odx2ExVGGVwjH9eaPeQdk37CxMw5iEG638HCNiaFgW1GGZLakCobQZUzPwcjs1vvDqxwa2o4SfnnfsaLQUpYY9h",
  "key17": "5N13uMZGECqQvLW2d77WPhv2N3gJS3bxVN7YkriCVpzmK1mFuhYkrDvbCwWujbciWkWqdrxbYDvTzoqwUy8nVjDZ",
  "key18": "3QRmp3JtDFYq76uU6uccaJUWyzymWNbXcKtDqkDfgJxaX9df7PFauyDbvmBURtr7L3NQ8fvGrzkAZZ61fmkTALyT",
  "key19": "2wfZvK7ZZbNFoiZPJ9VU23dDvEtCYGh3KUus7rVgKaW8xSZgV56WnJ7X1GcoDQuYU5Uz1816uamfEFAZwgcRwQvq",
  "key20": "4H39p4Jwtw3gRoK5EztweGNqSHkqrr5qusAmjDXfPswrCexjh9k8Q87KN3iPKg8n7Ams1rYwkQE9A5aUNda1cPnu",
  "key21": "4yfQHFT9WGsos6FrpTZEFnTnrJuSqhSYUdeW2LfddECix8VbqXJUkmGtpv3ABz9QpBTHmqoToNaSH1LabNEUdep5",
  "key22": "2JbUeMuxLQSGXY3k4jdNjTsytMWcJTYcdj5TgqwdRXTiGiRQVjMQpj5JMXDynuA95zCfRAb5qCa3QBwJKP354M38",
  "key23": "Z8SbRvGWHH4nQy4RvCBxXKnCkc4MV28XLiKLddoFhyymg3eUbNiEW5UkFmvwMhhjuE4MrHAyyM7LjtGzGrm52r2",
  "key24": "5EXjQgfLqhVnZGYV7TaoYGgnRv5XwjPimWb91jVSw11MnjVkPrwp8wQJNFjYM7jjRavpFGDdFawEmfxyH8xxQBN8",
  "key25": "2SQodCqbCavPuZFc8JwDUAxjXAqYAr55KsNepBbxypJydLX4TthFsZL3jS4D22ThBQEtrA4wL8HzKWovfu726N5e",
  "key26": "3Ubbhe87t6vmtzcBWpYA8nVbxA1j7yqjZfGZGuJ4SQwsexkWrXc4A371V2MVsyNveWqiMVkyJUSHk23qei7dMPUr",
  "key27": "4XuppbhCwz4xvjKmWfuPdJJgkYycVZmbuZXfv1nQ8VqGu5y4K1He9gXaP45DXXZzdakD2jJDE4xoEBoaQ1pifFna",
  "key28": "3Yo1zERdyXEmzbL3UqEzkmsBafMJrBa2Pv4MeLEuMS5m2TGC9P1Wp4KFuEDEeZLxkAvUEQrDf9ZXGjFAtupa95NP",
  "key29": "63Hnwb15H7cwJs2DSoV4paXYH4RUmDF1pXDNBvrzFk4QZcP33pPa41dHKmtChWKHMETUh3zr4qXj9ZbMYDEt5BBc",
  "key30": "3zva6aSgbR939xRGqAomBe3RyhcsvLpVdqXHvFFvfeHJoWk84f7ApJYNu3iaNdhFzkXoaLnTHJrzhqaHRrxsopP8",
  "key31": "3gXGUiB4q9Tq6xWb78Zf5ndzZD12ziMqjqUD4KxGeUYXx9oEwrphcXNYfFd3kNno6NNSi2Ezp7JEvLXwTmf8kRRs",
  "key32": "5NBFrFNEnmeEe1gn4XdwjurRWz2EivZdWVBFUz1awbmtiXzck7S4WVKkgN3JoXxUZrUao3MdF8fQNqtUjPMEEVRE",
  "key33": "4Mo6QH9r4Bg6Ts36zFM1itnE5hB2FDR9aK4knHWkLbF4UZ6MQo2HtRpR7eSngAL8ysafmsNgmh2ooRJXJd2PKok4",
  "key34": "5Ne8GR5KnRyjpYdy3oXSZEEidfcnirSh7cUJAdBLmVGR6jHYsNxpSHwAT6Qc6gnjhWTPoAhG4GF2DuSEfnnkekRh",
  "key35": "31pCoofdGjt7cAyccyGgvAHjTrkKmiq5ET9Q44vpG5AM9a4re2SzANdJa2sAJ2QfA6KCivvfadSL6w3ChxivEf7Y",
  "key36": "3EX7zK1uxYjhPeMSrRFuuGtzLVCq1hZZB1DwE6XYUwzytqZGmyMmMfSau3oSg7hX49Y3YEa74DUL2SKntW3bw75L",
  "key37": "3orz6o1CDuZ98cLK8Xv6ZiAUEd8eRhoJdCWewgVowdiSFbhh7T4Yx6oKsZDVrfp7EynsGkaTPbBTRbdFyBNqoYmZ"
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
