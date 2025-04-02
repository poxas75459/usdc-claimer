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
    "2k4z7hHpvFMX6SmroVoYoAYijem4LpxCHrXbMf76atAxfW4L2EPMq5CWha6fJYou8t6mFyokxxEQqJBFBwK5dYPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wtGuSGn33wFpie5ykfm93zZ9bwrYsD3epcssay6ym9SzYHX6e3QURgMq8LcCeEHagQprPMxBHoMuApRv2pamF5",
  "key1": "4NTMYZqoUawvRh9ktxQHMyyMNhSBJ6MqWpM8Zf4ZVWquSq3DXkUQ1Z4KAjKjeDbke13wdZxJKu3SuGUKVCw8V6sL",
  "key2": "2fXzT66XZAeYF9h5rTtzxmJpZC8EraNCPMsXoJFiiXvPXTs7wcizgyoihKVDG3PJoi1ZXQhUSu6DzcxyJpxvxzzb",
  "key3": "3cmP5AkGGnVaJN6j4ojPKymLkjzL4Tt3388d6hBWuaPdxvkAFwJB6vS43kjvQHoc9FJVijtitg4SV1NjaRXhqGSk",
  "key4": "2eMuVj25iPUcZ74nrZpzUSiiPH3aTXBXjaS2d6x4XBay2FgAKs5x9Ebo9fdtWCnEHToiLaNPGqHEFQL2aSCfUrJz",
  "key5": "5tkidhCVvoP8hFAQ9hwBWbEiV3XeyHyrnB2rVF6EvaPSbUN4kGeWp8puPm7XXvKAUR6fZmkLDJ61r5rFyhEKsTrK",
  "key6": "2CMr6GNPKNZjgLBQvtnQiqN5jBzG52fUHtHP7fResPae7w66WgE5ftGDo89Twh1eK9tQhMsxp49DU7kBMoafZq7d",
  "key7": "315Ws3x7NRMYiFtqV1nFhZkitVrbaWajq4mwnSJZp1s6M1H3np1N8onGggGeFfkzcNDiKAuh7Vym4U9oNw5kkAu6",
  "key8": "5JLh5KjfeuW1EeFZ4tFvjvK2gki5rNXByd6aVmoysxo8zxosKRtkRUgCtk9Pb5fmbp1EACnWFPSthkB4po9sH5nB",
  "key9": "3DBvL1TTRuCVLWEPiH5RpQGc5GuPbpqR8hZ5YMePZcz8ECqtgpTuaafvso3sQKzfJozWvkTAA5qfvCbqTkc4eDRK",
  "key10": "4Lvh2ZRpzr9sbYYQfKk31FpU3WrH4i3mjNEoUMcQXUUwF2RJLDJdgEph12zTtzJP3B7G9mfxU5CN66YfMxZ4gdxL",
  "key11": "fsbWdD7iHNBsHsVM2fH7WibR7B63AjkM5H3CudFdZNdGkFWaDzYLwsnHeSpKyL9pYfE9ditn4NNzw48m2Muu5ox",
  "key12": "bf4N5FLQCx1gm3aQE7x6a2XNfYqfXComkobSpt3hA4MkhQK3TpCvLdrHrfyMizMLRc94nWVCxQNPCPCPrmjjgXC",
  "key13": "4VqsBQwPAyZUHrLfzFWB8R7VjBzFu54b1CgQZdfcc96amcTTKA5ZtMTyDbJDkAyXbqb1fYigE5Lux3MuDJFHqmsH",
  "key14": "5pwPhp3UBJZQvrnApfShuSsRxwyBT8qh9KpvGBJBvnG7DGh2AepEidLP1ZPBgyJeHo8TQCQin81YkCsxGhos5LYK",
  "key15": "3v515AFpW1JfHSaDMb3fRX2wdQqRKcpY5tvcU5Yr4SVdgLPRGZxuj1RM9UcEagJxGinDV8JsLnTuZRMfXsNZtyQx",
  "key16": "5TZWTdefJHfYFc12syktxyYStv1t77PgXS1BrhQsx4wcXc7NjpcFWp6US5QLYybHKN3quMvVcF5o1PdujaVF92Kx",
  "key17": "2ifsevQ8RYZyrUPNry3KteTEdZjoK3EKkK8B8YNhAHx7DSsuTPbzfDhMx5e17eLLasBjiDp9SG6qeY2oZHwEVw3K",
  "key18": "42urXjwyp2iLmYYMRm5YwNuXPUVR33o8RwUKcz1mS3N2BgFn1TZuUNAqi7LRnxthGHwhuNAsFLmY1jf5yHWaJGgq",
  "key19": "5JkdhNguxn8vBYmjrpMXqXAHqfGJYc1qVo1bpU1hGu27y7vF7ivusCw3wnYtScLsztELxEpE5CSW93D9E7SjUJc",
  "key20": "62Qc9UtQe57jo2srTWqAPVLXrn95zGzSyf1HfqyHoGEUsC4zjDZhY2RetoW6rKBVEC5brcQriTD4Y62JnsRzbteR",
  "key21": "4UR4QRxCAihFwSRFaZGiZxEAXaxS96c3AGjd1EhdmhNADsdCxDGy1MtuTFdtTDhZnkS5WvBS7CvawhQBANq4d7r5",
  "key22": "4BCQMj9WuaTNBQXCaSwpZbuc2tFsJA8fygZixpUUJF5UTpJKG6PVgCAbLpqVs86r9V95GK61UXdALSowR7tfwnmW",
  "key23": "DWmzVfkYJ77r7jCnBqXrAET5pni7PWwXfqLEdCbZMMgmMD7rYMK3obMXMmSiX46FMw9cgfYzdT1u1LST3DYuLCa",
  "key24": "52CX2RVfzbHqAyJwPEXsDBX7gqA4gw41sHXN7fcbfES558wZ3tine3Rx8jHvWWjMeHQWBRPpKzGuJkq2E7Xp7pdc",
  "key25": "5zy8uvyHVcYbGhx9hyTm4gCxgYei1A7j3H3y7Ykxs1FnsLpieNkhGCEkVreSrqgUFPXpVMCz2TfNyAgWMFT73uuJ",
  "key26": "4RZQUX9XbR7rwtiG8R8SoNPMtLa1DqX8yyeiyfjNuTorA8z6YaEmv2xL7itumNsZJru5GZd7PmxmZhJ8w7mCEstn",
  "key27": "5vxmvwmbmRKWQUTepSBLNp5gt2fDKsjrJRjY2K92pTf2is152V1gPccTLyQmK6KiyYXXiYeciPapiLsbfJuEj1T8",
  "key28": "3iT6MXuQo7zpd9UHK9kKP4WAYAPpqkWFiRChYsFmqHHzF2aW2QSyFhTNDzL48TrbMzKYi8aanyYtS7eLYySwB1kg",
  "key29": "4rcFEiEJWupYej8iV8qUrsiRWEgZBUfmU5m444FJeeqRfrMXN4YLWoHFcfsZT2kCqwhYNF5v2NwhUG92ukVjeE2U",
  "key30": "6jyeRJ7Vt41mJBs7v2KebrwnScC9Ve9wFQV7Q8XGZgzAUK9VxFU9NS4LdfgH2ndRZjYwBKcfzc7rv6YA5F3RT54",
  "key31": "566e3aYU7p2qMX6EjDwMrGqvonevJhRPC9KpmGiPsHFPX519gDwq7ti6SoTPFHmb7hz6nNHjn8aw3LawAzsWZnMu",
  "key32": "2wMpucag5BftqEWZW4FR16zkFpjESAvzyCVj2P9SBFj5a2Fj81m7PCpgacanyB9tjF5unH64AnRB7uZ5yhem1HZn",
  "key33": "5QKL4XbQnyKwK9j6Pm1dzDrpWFG85iVyBg6eAxrc5UMuNcxMX9eUoWhJKyj37FJXxgSwvjAwkYjLvTZTRvGqFqE3",
  "key34": "Z68GHDtz2zMiAionyEKje39AdRw7MsYMcwvVXRa3nCyWhWtKGWtQcPufm2UrrFVDtEnm1mMKvE3Xvsv4fnxhRyq",
  "key35": "22B1jZJeg47ytTwxCtb1XixySNntTXR6r189pBubjauakXXDCvRcTYY4vgmMtGRTNLDiaEikFUumUGvVyfXa1LUf"
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
