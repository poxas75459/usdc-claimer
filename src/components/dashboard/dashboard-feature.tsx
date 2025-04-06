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
    "2ppAJ5YVvtsKM3J68jGc7a2WoMHMZCt1nkTuPh5oSww7rTyDVicAoreT3GzAZXfefe7z2eauWgLipqinF2cCxgmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kraFALEyipPjKjMHngTJdF6sAxp7gtmQkKn9TXBJDrc1tff4RmxAbDoWEtUtHfA4TGsEHDrpxLULfbo3SNKvtYG",
  "key1": "4Z66ewiVofDXAkEwh1SWqzKt6JtLmFHyBp7YcLkUSTRhjuQ9NhvoLCw2rsEwtJP5KVaNxgwy4QW1aiBJf6sPQ8GU",
  "key2": "4wfwGSar1db5BhqhrURzFWfxkxhRoQAUsWvK24HtBvggVf6SgqzhX6f6Fvq2sCSGWFGPaDrW9sSXp7vynvWGtDUh",
  "key3": "4dCtcgTwHe1y74FGDA8MYHxDk2XsFH5uuiHGzx9ZvMrxoTtZ4VZr1ENb761z8AMLhTN9bFCMR1yt1duFkMpvmUPj",
  "key4": "4LLDLGSQJjL9wTLxp1Ve5MdAnbjih3We1iGWuPFksyUteU5BqWNnU9ZH9P47dhcuWd9WcLNEzMG3La6aSmctajR2",
  "key5": "yQ91eFwCWvmVww64Tkzzkx2gJubmuYU8AUiHreeMnMBNhpPmg6TpJa6Q81FKtJxVd2R4KzrPZpyqzB17K5umqVF",
  "key6": "Cghjwik5sJviXe64N3YHaV3V6x4fXwoYh7EDazhSXbux9ndZbxiXYYLUqKsuXywfJEtxGBz5oRkBPNAL94S2pko",
  "key7": "4zeRLy15De7QvgmJAaptjp17n8zFtWT2i8boPmiJr6K1nowjRvL3of6reZxPFofh7XbWhoCJwiEFFbtMeJQPhJSn",
  "key8": "3XLhNmKRrKYFMcPR5ZzZfCshNemCJxCTVLYZcrsG9JiHyFYr2ycASvBuuARA5p5M3BJNEvMqTTMhJ3pZ7nTFfbth",
  "key9": "bYT5xd4T2RzpEfNuQcc4NdefizGP63u1PHa8wuUYrEnQKKgrRTav7nC3zzkNbQuFKPpPDfKxMF7zJCEB6MFi7AV",
  "key10": "3HihdgJDei5EEJmraUZ6Jzds6SinFQn1SxohTAmn2rboYbX8QERd7eTMvTkbmskQ3yVamGoqWzSewB1aKWtQHjbu",
  "key11": "22ksNreQfQVJ58rG4AiUbAAku59B28da19n4qWWfQRjBq94cZzUfhMRDhaH8rtfkEsD7ianXxQYqPybnrhaozCQc",
  "key12": "3rTkwprwDFR7xBhUgeycd6thcniva1QYbwZqH6cYpFXsFs8qWZqEwiJ2KGkdwYTAYzFyeT55Gds4TZuLRb9tWHMU",
  "key13": "3H7JDZZzWwtxFv5oifADTpFMWPmVSqSZwDLM7EdhbFRYtJgp3h6bQ7fphDjhvgVd4eohHmGn16tZVjDFRaZX1xN1",
  "key14": "3cFNAFPvKeVngTiAArStrEeKm7Vf8m5HEvap8AC95MyPPYD2xMEgwvitxNvbLQXzKkn3XALoCeawgdVcUmg3Scmu",
  "key15": "J76KmCjxyUVm6DuXFCm52bXF4XHSGZ6mzsH2WmXv44wCgi5WHcuKHyP6Sy9suMDHNsz3RJt8hfp4VDKdur9mjtj",
  "key16": "57jQ43mU4a3NfFD5Yf5L9uAWoGLdEu75mVeqZ5L2LszvzW65VneCufUpcxNdCJqnaKVejRDDVR9vHpZMaHXL49A1",
  "key17": "4QevwtRjqKc8HWt4cprpjFzAfEZa6MwazPu6zndcdboLw5XLJay58D68WsbQCQBUR3bLxtnw4eC6crSM97UWbV1n",
  "key18": "3sP4XgqxFN7K1jvSgoVoETZSd4b9QRALJpd6tJYmvJKhrN4qgajDWPKFBx7sg1B18jv6fFbUTZrkdDD8GyDRfoAe",
  "key19": "5FcnQzGiFAYqDHJVf52FpLbsvKdsgqN4528ekx3iPNM1zoQ1P3u72gDE4H6jDMrjbLYSmXndPhqkE9EA8op1oP2R",
  "key20": "33LXk9uNdE21QDrC4BJPQziBDYqYBeSjRLnEmCcApDSkRKsdPs3yDjRfcQqzErx3m4vK5Xgoni2DyrrQ3bQdAw8b",
  "key21": "4SnorVAMs2ohwr1DoxvHHRop3ZPAPPFuQcm7p7UPnjFNBvTKrGzf7RyLPQ5LcqgPMP8CRMYTxka2bffRmdH8Xp2F",
  "key22": "2gEHEZ9T2mehi7MGaEnEPk1K87429kfuaL5Anrqpsx59UMt4kBhr8DokuqC5U5nZrLLz8ysDGSoXn3n99fcmfhnX",
  "key23": "4T3HAfjgrqx4RMigwFnrBhuygg6j3RSK94LWW7f9jE5b88XN6ZGBwuTo9nwx8BiqJfCexecDc8hDZWnRatB9CGr9",
  "key24": "2CWtK5JCSWVSCCiLwDyqR47shtFDk3PqABJiDJxvyH6egkkksAMD12rXjR3KbNna3Nhn7cBqrPWLpBMnZBgojNZQ",
  "key25": "MGUkRZYGJgMh1Rmui3NNKqwLqtjP5iZi162NyT97s4eRcaDWQbofVuzFAVGcVG7GWkfmQcHW6ERjScVnCFyrA4X",
  "key26": "2vvXMp6sNRGdDGo13uTQz1vbhPd4CPCwLmaseSdNDLQazQWFzVd3f4U9aS76739wcuRtXbjQ81qnpXtKNvFUZ8uv",
  "key27": "Wn1jnm97DapmKJy4ySQXrXekGbhvaVcnwiYNPph5KYyE3reHarUYov28TjyrEVBTP5Y2X1Bjwt6ZxjBCpyYfRje",
  "key28": "4wtKicz2jKT8UfyyJX4WKVsdxB3mawZAZfndU3cf9acLzTsqB2xM3UDDWu3fiVTk3KHMY3PUBeZVA954TaCZBq6",
  "key29": "5T6WnjCLbFsqA3MB2AM7zDsW2PXSh1q76HFwtPyVB8xxYmrGTce5N5LxvzC33hft9CpTibGcycKJLxB1s7MGsLdY",
  "key30": "4xGWWjmLR3qkwhVCK9nk7XGtGB7txJbq4XWQGyiufNW5SR6ZAEy3cW5XU22VXq5mEN57fzYGKYcaBdruD97XDZ5J",
  "key31": "3WUV1j1DAEYrmgG7cS1HQU4zrB5KV2yfc2VcGvQJ7JbX3zxdQ9LejJSujes79gQz5NhRQkKGdcmfZJXUsX96Q4mR",
  "key32": "43MX4hJ3WjmfVQJsfck7RKCeDZDCZ46vQSsreiVJQWQ2fmBETtDGbTXigFZrckaFkzRxc8vzuhUF3FDSPjt8YXQo",
  "key33": "Moa1sNwzJTy9CsHM9VqpvJ4Tbm53cs5pHPr4hsxRc5XjiEXxWyEMzScvaPEjhq5BoZb575VNE1FGeWBnvtMuZws"
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
