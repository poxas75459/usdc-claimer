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
    "5xgZzrM7ZorhQUD2iLWdLzt836DBQM8XJV9qXsnKFuLNj7tK6HdqfG61183ac5kkpBfLTSsmHdRFVj2GimagBjqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556pt1zpWTaUCk3ZySU1taiJAJzUJk9Z5t837x8w1kjhF8ysrdBdQrK4MuAQPcPfscjeEjAQSQKnm6ywLnKzhWjo",
  "key1": "PtVojRwMNpcxNuCNaGfRvdpKSq1gixD92u52yKd9y9zpcYZk5c7EBP8pePqxeFgnTL2vSFA9ySqWTSNTJgRSSbi",
  "key2": "PKpAzPwf5xvdeTPZqQu8KsNkCiDXpf6eTGQEZVLQ92UM2n7WEqrgTJ4773RY2KLnKtdVLPhEe2f43q9u9etepvA",
  "key3": "4QKqDSidwYeK7f7kNjoe7Qi3BNv4LnEqgBM99LnE3Y66YYmTVoaMaHRJVVqvWDo1q7K7Vaitg2MHp572hVC4Dmf3",
  "key4": "ja8ksni2EzH6e8eo1wCCQL5gAr4DUFHMpyM48rG76xhH4fYsX2HS7RALTKH4653eymnPw8qKnxSCtfGedR1D9ZV",
  "key5": "5jwcxAEUnugXjxVF1ShHTtJGggFEzj3QkjKE6E8X7aVQfUgyFRZi4k86A8mwakgSHQJfmQBQo4uLZ9mRfPcNCef",
  "key6": "3mR96XHTwJqFszvSr53HqsKj19jHUrTEaDpTWdPaL8qaMSLiaJac1kVAPJGPmNY5mXqEka6TSZQWvZSnUiUccPEk",
  "key7": "4NKTqBaztMS88zRTGzKqGowcm8jh1sRKDgUtQzutm29kkh56sHmyhVYyQ7cCzFLimsDyh7DuMWDmC2Rjxom7XyD4",
  "key8": "2ZANsBaFstuquo5p1x8k2h8xgLCWWiQiA3sk9WobWvpX1kE9ek8oX5MztGRfxYXBB4crXmMjdGLBM4spzaWWZBWU",
  "key9": "54HQrCrmbKkfMsRQVuwcakr9MCeGzXk9sRgmQMtQQzK6YCmbyCMbxWZKdihXdYE8Ztvbxej9Hes3WTetPGX3mHJZ",
  "key10": "2DqJ4cKm43GPJ6XbVumJCo7FXSkYpQXaSgPNg6YFmnQFpyJmmA5ivj86ttg8JeyEy7gNKenAa8r7Sn63jCiPfKC7",
  "key11": "3PbNgtANjxR7fqo9AGNmVizLFZ9akjszL4RKrXJKhCz3VxzDdLXVozDCw6486KstJYxeBZ7nqe6hHKZABXnp4XqD",
  "key12": "NTVDQCJqF67nLbzGEoNDcqmKPohNb2Bo99XLbLkYtWAi2CPpTySQU4ccErp8Eziv3ZUoC4sU39i98zN5d5vexQX",
  "key13": "29XEfQiRjd6XaYG8UKeq9D1MtxuSgJ1qEsaFcecu2RG4Lt4CKAXS1gdApbBpXS4BAv3PLZHxuxZ7XeWcenfMpjww",
  "key14": "2CAU2woeduCgzvi5mncuYt8MNzhrvZMtaACJrYbksBsDvGcBKAXSWER2WxV8keSruMnu8L8pszzrSn9WHZTeLngf",
  "key15": "5r8R6B7tngftzEJ9ftRYK5mEMXf9KxZRt3LLYi2EMRs2gL7t6jFcUxPn63FrRhwL86PwVHQzLe3uWsHA8hoL9cCD",
  "key16": "4SK4jLgfvx7kri7eZmf9HYLuETZAXCNvsEzWL4czGcDxJQ4arFqFGBR76ZvFDNu4x8rF6ws3jzWCJNGCRfTBLWGe",
  "key17": "FGuTmcTMPUnTPhkJo5pfN6yVhXUPk6ZhRhnhnsqHSk4eEJdvsBnonb5rR5AfaLCQAMX4A5yZoByLp6qEYr7FdQf",
  "key18": "35aXtTbycaruBuv5S4wEjrpmrgFK5qXdGu6FEKphi2xZdXjnmFFUPv2YRcoM39QPdYfZcB7PohWaWFG812UuA86v",
  "key19": "5bLucdBxERHmXc51iSoi9FXuHULM64WvedjBkzmHbDJgHxDcMKvHvE4PMWYmY7knDUEYtP9V3EDX12p66HEE6nJ5",
  "key20": "3129JU2L6ftqE893F9TRQToZxToH3pjdg2RTbJEvUXgwAe3UhanW6H29CqDKSe6A14r5XkwM3dUGAEbqg5xaVTtb",
  "key21": "5p319WeQgZF6BzFrckh8WkF5XPfjTzEMyToWdZ7Xd4ss7rQKn9Yv8qkQXHjCiyURsu1ErAfgY4VdhxCKYjW93fqr",
  "key22": "2iLXMHNAwfX2nKemnksTr7Fmwt6gbvx2gfxmtG4HYNcyPbGf8K3tH8ckxon5aEzvqYRV2rjGvkbAuGiNYj7WKYhs",
  "key23": "4SxcS224E8vigZ4xb7JYm6ww1URpUj1ic1uouTi3kizEawumJz3JwkCBNs18mv6Ad1xhQGrTD3H9ytWUaX2vctGF",
  "key24": "5VPwpotE9HvVjmPBUiACa5r5hdy1YzT3nDJzWnPsU8XEypC6fcURF1n1V5W6roV12iYS3DtXe8A8vWZd7g8ohLU",
  "key25": "cZrTvjnr4zevwhCnioGzJg3p8i24QuedKRTqz7bPJJe1RPHdm5JpZDJzhBZ1RzBC7H6LTNEKCoxrxiF2cHJPicC",
  "key26": "FMUkaxvh4GsZg5rqu15AXzo7jNxnvzqJHa32JxzgmAkNQsYMADQ2W7AEC3DWK9UMtpJ6VEJ4C8w6FuPMZEn7qG8",
  "key27": "3BuBAZC1debGoTbo25of3vEYCrMCd8Nj5eJz3iANbadBvQUkoGStQHoD75Zzm6stPkHVbLiKAj28CvpqLVJtvqW6",
  "key28": "4udVDpVqWPyo4G5TgBf9AEn7qcFcrZprY8NYXn6Sd3ts3LCyaKwkehdGs5J4d28Jb3FQzJjmhK2y9Ebq31CRSoCd",
  "key29": "3jmpYF2ceRuiM5vNwTMoVQRFsK5HtMKfh2uwW4fe8TigQdawfyhR9boM8cP7Jcu4YQvEQ8wVDKHMxmAAsZq6fvPi",
  "key30": "5SAFZ8DUurmfT5yRt5gPr7CVUv4aWuM8bj6ws5UdmB6romkQ2oHCUBqUKyxLmGmwpEYZwd45SQnGairPkPu7AVcJ"
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
