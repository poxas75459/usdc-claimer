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
    "5WSgWMiPqAiFpmbVedRQV9GP64v9DwWWvVas68ZuwJcCUcZVXWXaeDjpJQ4N3kaxcTTwuNH4s1a3hJGMknpENjKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoR7vbxzEiTkcSctM5LkXTCt3b9D8QiuC6yYgVqiiLizngFiY6h2Vg3cWnFVCbJRw7TULMDvhL1rT63gY2Kzwun",
  "key1": "5xXzmGvFvHqKDa2rxX43PZSFvY8MrTH1DDEixYLF8yh4tUiFebL21SHEXio4bfMePirgGMYuBXhPdhggQdzRfVM7",
  "key2": "3uJVJeytDovuYnVr6cstswuB1SDFNQcnxmnCjhNdVVgkVWdUyEFK1FH7nV42UDBZCWQkjS5kur53j1PRWWnnASw2",
  "key3": "3So8oCRGU6hBavwHkXyhhCpbsw57K5YoedAoYdK9mTscdkcYknHBnxHuWb1JzntwzEPo5CMnDU9c9kTg4p3bqbWd",
  "key4": "h3xX79ACPixvg62EeEA1x9WcQUTHi8FKfujsGjk9vZzrZHR1rbgcSZ8jpVNQYd344T5WG2KmSjMmz4kqDi8M2HM",
  "key5": "278fTtCByWhAfBmhtgzR2tJGny7kuWnva7teZWKsSDtt9ubY9VwMF8tokZ23nqr8PrQmJnYcDqY1GenDDbtQJhRL",
  "key6": "4CejyZUVgpPTxQpy2oDrUF5ELs3pa4cQ5Tkyuoh3adnFUNGerg4FkEfvTNnP8crvtzGTER4V1L9UE9WeZSsEk2KB",
  "key7": "3PSoLAbGGheyA4LcaWSFQ1GrGvC94dddbvhZekQWkQumDXuJP5umEc37gnVtsVFtwiDDg7PZKbVVNksFQJpZGzen",
  "key8": "2XdEh94BYyFZQDpDakxGoJ9KA5Cx7ARpwaoMtjppHdRhWSRd9LTjmszw2iUu18QLyfeLtyWBhaQHQNVhfowvtyZu",
  "key9": "3MhGQisSSKf42UzkaPj9K869adkxFpuWmPWZeJpvcXopCKcGa9tYUzdTJt8uAyi7J2DKS6KNc69ZVJD3AXf7wMZP",
  "key10": "Rsecq9Yi66TJL1vpfmHQ89tAxh5AzHTEJNxNuLh6JUy9EJV5jSxcLsa8HVhfYTfvgt3BngZgxLy26UQPA52Sv4N",
  "key11": "4DAeiFZenZ2BQZYu2Q12BdinpQe6ffS9mk2xBCoyGZFmbivT9BVcpUGsk4aQc5ejjwrXaLCYMhCiAQtAxnz4xK67",
  "key12": "4PaXUMb9RNqwoos6nJA32bomPGvRSCrcAc9r5ZLyQ8cmnPP2WxwJTyDjystMeh8jtfsUoU65MB8vEUcBzA3uXZvG",
  "key13": "B5DwBMg1EZrV71UX71j7QA7jYgaJ4oS1aYxDH4MWobYGKkN1ZWBau2frJ7W4CRXQkGmF4davG5VHnTjN6CxELwK",
  "key14": "43Kn3Q8Earr2JW1dhvR3M3gQVJDCXp6uDZoQ6GzgUN6s1WBV1t5sjLoUKuE3fFydPmb3mj6ChZWxQgTENkPc7Xm4",
  "key15": "Y7c1BMgJPQfoXT6n8GW9EFgkyxmhD2tcfeWd61NUg84efPDPKZkfktV9pxeMzMzYzwxgCp1TRvtBgjvEuUKzyT3",
  "key16": "2RfnZ71xtPpAfDjGJC9UNT3qrJKKETNXFzsgaFdcRHBSBAJwqzEqFzhJYGjZEQ2KdQU3LL3mWRcSKFJdfpm3yVeb",
  "key17": "2H1oKZehoeBdcsPNbuYQjHXSWvu9ABWBkGouL7e5Ezs9j4d2UzqeLNQnbTytHfgR71emfnKbowdw2PqrPEJBHywu",
  "key18": "2aRaFn6c8PvXZMkLfo7o3WEUmMCzpLEbJJN9WCpH4TdbaZGR2qUDGu184cCUB7ZqZVV1PYiD84uDSxYBBLtCWwh7",
  "key19": "4qRpucEnN8WuA4khfdXefUQEA5kk8c7JiDbtGBykydwB5N9iJq993EQJLmQrzozVQ6dVCbcQpZYwrzAik3sx2jCX",
  "key20": "59SMBz6piJg63ccipLd6RN1Z5vPJWyXXXegjSmimgTeAgeesi4oNt5Fj6oiwEwXJH6ietJvMSySWn8hrNJ8XgQrz",
  "key21": "4vh7tgsn5j2B58Ruxuh888i5MHtU84SdWRgNRpyAucCJ76BFDjwN4SuyGj5Z93qCCn5hWBXqvgSEy2WvVvj4VMYq",
  "key22": "4WAHazb713mqTFpxJuNGf98HdyM8jK2RJ1rPqTTQpaVBTRDMFJijYABWYtUgLHJj7raibuc4gp2YpxPS7R8Qvkxd",
  "key23": "5rZjg27cPzc4SSzE4fxFXosHKsbcKxeUWxrXHpbTpLeMdxwPwW1ztRtYeEsdDqZYZbLNgSPqu7iAd8UW7WTjsbWd",
  "key24": "4ZNorTEvhCsDs396YXd5XtYWQjgiJqmrDKm4LZHNwoa5mfqrD7wor3SrYpgoWWTd2MXek8He4bsVYhQJu6hYWixU",
  "key25": "2crDUjwRTg3onrStbrjKwbRGu1kJqqNi1SN3JuetHUVmmu56cQrTx82WaqRRjAzvZHUWGKgxUrv3oXo9sFb3ADGQ",
  "key26": "5Ei5AX9GPbnsgeyWiq2x6URYpG6rEV3U1RcPomBiekDpbcFQuhGDzLx2fRj4ufKpo8YHV1U9P1mS7m26BVstdkyK",
  "key27": "61oeV8svA91H5YqEhwahdMK5y5mcSAHaP2zTEfMuR52RiNH37XzQGDjXAMnWNkNietEY2ifDUdDSNdAVMNvRjbRc"
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
