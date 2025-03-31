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
    "6472x4uskajaQ28TbG3pXthp3sX75Hf3MTrFnK8HSqxk2Y6nvC6MCxakGSyanQDM7Un7dEd3RHPAU6UZK8Jwu1pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pyq1hqCVGMYvWeNDndhVCtYiZ9hiPjz36HCrx9zwhENMRdXxQqoM3T2VhakJvadq3yMgAWhHvAHixX2LhjqwFqG",
  "key1": "2xxJ8uxdYVyyN8zDvRowRLUvZ73yW6G5rM8tEWHGtyFPUU83WEmK1emdUucB9SuBANPzkhBDs1uhJbk9wRQXP1PE",
  "key2": "36Qpm2b4oansGxhHHXHXtdx2PTADPktmAQUCo98vEudPtkgZcAFbzNDcnLTxh1a3mb2UPjCswmWhbaMRHK2KffQQ",
  "key3": "3mfQvCFZ9tJTd1J1bHCJKgCrzZNXBm81RTdCRGtTtegquk22HK1NqyDKEmcpnPJG4LRhyEAFXJtkUfUo3sxESTtH",
  "key4": "2FQPrhRfLiTXFdfHQipnRKPpU7V1TGz9QbnEtKAoVMEgBRyv7XZiEpN645aExuCM2Wkvq2LQwJiqZAEdzTKpPGb1",
  "key5": "27ZcFqM6cvs7t7ENts2TQVfceZpGBZjWXVyvk6bCVURy8AoCUHRT3axGfbMNDRRuX8LX58L1mNYWtkuJceQNo8zv",
  "key6": "5cVKxB9L6mhGSUbUrLW2LhzDmzXunoDvKKv5rCEUysWMyVJhVHSZAc1Uh4vpeo5pVnksVY7t22pCXeKQ1SFnZQRu",
  "key7": "szZNVDo4gdP36iJhGTfXzKtzkEqoNrno8M4PRBBNjAZoQwcPJT4SBtKcXw4taFeGvs5uyMibJwgYSwoGJiVxTsn",
  "key8": "5azLNJo8jiB8UyS3omkhHFvjXw8GcLUK3NKE7KGEG4roKDCcnsbsry6MCHHxxbzxLHwHLUaZYtziNB9rBxXCduk2",
  "key9": "51G9RiqBjMYpFovfu2z5cnUPnTNusXKQKqUKSBtNv1Ho6PMTKSeCbBAE5pK4bekMbgb8c8TBJW2zTkLpWkJs6kYj",
  "key10": "3WYHsxHCSpfZmLD6BWanEzpugn6tqtvWjcPvmauQg26VZymkSrsCT3QgURueibdLDb22dyDvKPibJidGhjC3HfM9",
  "key11": "5pLpojuNe8hpxpmcPPMiUgoysZ1biVnFepJaAh3E6SkWPfkD6pKkrkj2D3hdyHVQcMeYvcgdyVWKrRnLcwn6E7nD",
  "key12": "9tQpJ2J1E6tBKg4jE2gVdxhG5jKZMaZXP1tmfDDDaRe6H64wQdpZHAg5gDXHCLg1xx9SSXaguax9PYbuNzHP3QU",
  "key13": "26TnGFpLbkFrCdra5bhMNNfvrVsBUYPdp21mVfPpR8WVJ86Xxg1qaUmEghWRmtv47gWP6d3tmWp9GVZujgW6wtUH",
  "key14": "4D7iM8aFQ11mHzPqdPB96gCUawt9DBtP8JEdMyjSWGWE5kvPCj8L95Lh4ZTGwtGvki5dnV7FSJ7EmZZ8HpihTEgF",
  "key15": "3fc95aP9Bzo4eS6CXuVHXYSaMtwL2D1zB6AkSbuxLJvZu6dGKaTaGYHwuhw9hf91v68t5tU3sGbEDgu3NZSCaymG",
  "key16": "3rbtKsYSCcCTHbpNNHe2UUn2dmoFJ9Kx6eCYG8LbLSwxfsDbLKaWhcHiSkraANxD7dxrqcsibVguGX9Cp1LyfWDs",
  "key17": "5a3NwikkH6uzNYGsxRHjSqxL3VxpWN1KPQigrfxFGXCtZcZvV84Woz6Wbe4VXZNhmfVJ9EEe9fWpJnVU7oLm153V",
  "key18": "67rj3rYx8k6ytGHNkzbb3rFfvuYYmkmnbbfX5uHnQsZ9y8DRoB4pe4uBgRvuBRKYzz2RsHUDDkeB12f3Q5qUCWV2",
  "key19": "4HqDMFvAgRKwEWc9qroT1Jnqd83dwNtARAPYjvXov3BtzS3LNC7EJTGDHspaPXuZwwDJAWu384uv9V1dgsL3arc3",
  "key20": "4Sdkm69tdUARb47M69YxvMYcyiuqypRhAYfKFUGPb89W6eofeQdktLi1yEa5Wy2TMpeivg7h8d7cuP11RVMSPuw2",
  "key21": "5CWwdQKkpM1yRKKGBXNKJhyyon7nZyWSKmKJT4MVb9a4USXpaU9W4JRGUa2XG7fkeLgaABL4QXX21DqGzKyDcocj",
  "key22": "45PfwgnfgGSpTXZuT4WziGVicbck2QYDJwZ8FtzzohHWMr66qTqHujHKNsAAqxesxW8bSkvJpjVxzFJaXh3NDM4H",
  "key23": "5UBcWKcK8LGY4UBkTFnF7Nqke1aw7v5LwDU2NXJ5BD7rW71HHPRPqHtAiPBo9ftBzxYRnShFM6ZaTVnHG9i2ipxm",
  "key24": "2Xy9WMnWvCVaRX9zbCH6Aeg9JaFjy4Tzy1DRyM6emgwgcSfAiUfme1ZrToaoMDWtghVVKX93SRet5SV3ctvrVu57",
  "key25": "5wZ2SEGdziMqnGaHzt9YyPsVZjT8YwP27CCt5cNdWZwMJnoyT72ja4sLoL1C36BjdoukZaNBxoKdCWcX3ojceZos",
  "key26": "2EJH3UrTqjR7Hn1kitkTEsXxRT7EiCmnLdirx1XLdTcRpwKzpHRNFoRba87MjrooxdTPdvVSdszeqNzHsGkeaWZE",
  "key27": "4FSmjY3U1Qvj91pDGKBdwTTNs5Ne6hYeG8jdzwET6CYrKhHVdDwJ2J1EMSeGHktJRGD4ZJuN8qc9p3x57NdTQyQ9",
  "key28": "5yTAGX3joPQmPn5T5E1yJ2ZReLouA2BCz4d8Cu9TXvYrnDTSVWbrJtiv2QDaF4i5ZXhEzYpsdMGe9Yyf7jiBZ8ke"
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
