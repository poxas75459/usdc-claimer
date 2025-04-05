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
    "3Bd24D15Fvn3bQfDiKBfiB1LuCdBTf3ZehMpZg4GY6QbRcWcmPLUYe577u3X93nGQJeg4zRqWKLz3t2LjVf1ToZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rspVRCLTrM5RgvqJUJ5sVrrEqUQdNdyqtWw19spYhQ14MeF3LhALjC6eHdhMA7rEAS1zgxBkebUDpJC6TbQe1af",
  "key1": "3zPfSsdBoAsdogQPPdy4uoyWCBEPVeoeXJjqbFNukKPoQASHDNaFRjKsSLjYV91DWuMkukVmeZVY6kd4Vkr9C48u",
  "key2": "4oeB12E9gDQUkzzPe4USigYWpFm1MompeiRCiWppj4fKvM1SfkSfHDhhEKMAAr15huaxf8D3dCJDQEoMMUJBVNHN",
  "key3": "3eaMmoSdM5joEjZDch4aVhLH6uQ73rrrWoxRHyJP51UdR7PjWVQQbnoySgDHMAmcw6gznDyJnTwfL1dva3N77irv",
  "key4": "63i59779BDVNjttHT6Z78yyW3C52Kx2SSUJ47G9e8kkpxWqhVBDwcx8Zhpdu175tNi3GotHPTsYohCNweAM1kogL",
  "key5": "4mukMeHFSothPCNircvLxySUhDa6NaKmQU5We6QMAm6CYayqbEyqJTAjfzb9jo6s9vmFZo9wLE5dm6zToe6w9DGw",
  "key6": "3Gmgum1SaAoigrKQg3qHBT9uH9yT4jwahyaTuUgv3bexBCgBYXTSmQCKhASw1hvkHUmDxuio2j4hvhrjJazoG5iT",
  "key7": "3R6vUEofg1QJYF5N8D5fz8uunWpEN14V4ynQRFbxjyNbwLEXueYaetAa6V3Dgbbh4DnV1Xm7LVkX839zzBS64n1a",
  "key8": "5RUB8pn3CXvVs1drzGgXAWN64JXrTRYuQYukTsCviJxhJZQyV9WrEFoxqDRJmu9xmNdpwgW7xVbaEPdmaart2k8y",
  "key9": "3spAjtPy38TjSJGMs8W92HtBXGekTQDTijNEyRM2zo4uQjGxLzxJ1pBfZtXnYZQMUyTq3Kn1wPMfx6HDFghV6epk",
  "key10": "5CzDJQDD9MeEu5d1hswpTKcMnxRwRti4HJNRoqL8B4tXu1auAxWUYgv1KJjxugUL38D9UDqWoZ8wGAS5TgHJ8W7Q",
  "key11": "2146iTtPs8GEuUUXA2mRPAVVRxdHeABuRRqpP1DR1Hq5H5465jQ79QJXDV4uyWEkXtghYuxEDPB4EaGqgLhnb462",
  "key12": "63MHGv1UF1nKVV71nHHRtGW2aDoEf1ngksmbhKruyzkQRdze7PHSDDXjWCC5qG8ZWabY9eMCCb7DrVzYnf5wzzfC",
  "key13": "5YD1DZHa5NrwNQkmFNjRyWVdf714CRfUQChraFba3tt4UVWgasRnUk1qKmeFtpyGiQRrKyEQUAUaDUAn8Se1nP5k",
  "key14": "3zLuaefpTD5HdwjRx84F8CTkL5KtHXupTqbw9LQ5nJueCPdB5dexk5LJNjnkYshmgaCduAXsTVNwmLHTJAww1hUn",
  "key15": "2s2BMpW3wjAXc8inwgmbJa1qJh1TNax5wtxFoDJzBXRj3qb1htBSvU2yede3DX8PBwMaRNjMtQCUD2w1DhaCiFY7",
  "key16": "FL2ZiESsYknGgDpwzpdeyNDiDPyx5ye4E1MpR3wyuq2PZ48g5KJrpSwK78gWUsaXZKEoQMEg1TRfyURTvCss7WK",
  "key17": "51yfUmgEn2cFcj877w9112nP3iN6X9dK2iG3gR3US1k5tTkwuybRP1TFhZA2vPpN1eoxb8KBFziyBYEUukvAp6aq",
  "key18": "4vGtT28XaADz7oLJBCo7yK4zaV5zMA71w6sdtY1ivQBPhvJUgwrBA2uW9m6UxKoN9kEsDx3ZztAkBJARxbMEcfnz",
  "key19": "2BzL2kDFsxioch23XZreSKkJ6WrgFs9JmQ2yC7ntbKqdWZ5HpSH1p1pqYwCb4pd1mEZawbyJsSHjoDFPrZeP2g4N",
  "key20": "5jqTVf3qqpgFGEp8CAYkLrX2forcxvH8E4TRo4c88oYq7uQveQdSKBXnJmhcu6fRsehmuXVoTwbn29rnxzNEhiTM",
  "key21": "WPei3MGe87DtGr9xCybC4XWsJfanCCsqwjhqEqfPTqPiLXNF1mRYbyMCmxb66Q78xPQWdGndjFXKuCsGTZJy3zd",
  "key22": "4G8ds89KoGbyFwEKmVH6NCAphuppVaDon8L6zkRXcNxKK6LcpRipfue8UiCqJwCMEgDuxJvRbuZNnTUbsc28v9MC",
  "key23": "471q7AREnMhU8vtp2qyCa2LUfossB5JucWfrPoWK59JpdUL4AFCmM6TrCXf6TyPosvobGJrTc9mYqkSW4vcZf1DN",
  "key24": "B2SvHFqvpBMBTL7vqn5avUGmTLaqs1vR9gWfLXKEuA5wLHyJUk4Np3t3Mht8gy7j3Ejbh8NTqvZpdpLBpZtkt24"
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
