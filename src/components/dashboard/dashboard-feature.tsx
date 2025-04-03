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
    "4yow1tZrnoDobZ3RL3aFLCKa6rKjx8Fgas3DD36srZzkjac17jK9jJLkxQKiuGRfhp2HnEE5jy8qZZukEoTQudRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpjipB9BWgwc7y3o96vHobvQ8GocDC1tuVLJxEAoTJcgQUETKw3xUEFfscaUeudaJCCmBmhJfEg3eq4ukwoet4o",
  "key1": "4agGbstXDtum23i9xp2weT5hYhsy4bpsbcAy7SU3K5RSVgYAnNwxFUPa47DfuEomsQcDqc3WBVpddsmRHrnsAdUV",
  "key2": "2aXXGcgTZUgnikn4etJGojdVdGAKvig31T9sniJR6d46HWJgNHqYtzmTxt5f7Jsaq8qoaBC3Pj4DY7rGYbW3HAqe",
  "key3": "jAdxyGG7CtTjwQ75MtLAx1qJPizDvg7HbLdgPZHkbuprbkWwNDtuaLrwAe5yKrkoBujXdTokmS2Lnu9X1sJUBZT",
  "key4": "3L314461rqqKNfZXBHuMgXK2RZTEzPRAegBp62Zh3pQAguCx48Dzv8N4JTvBPnkZrRKbfAT2FqJyKRFGBJYqT5pC",
  "key5": "1jai3am4ydbV1fHtQHPWMHVhwJ2PNm2uVE2Cuj866bJ3sHNZjAKWySZd6t8sKWpE5Ebqoh1JUrKhdn9yUnSWG4M",
  "key6": "6YisZgUuS57pm4Pu88jr1A6bCZnyXQeFEwnnsmk3SraGpWq1wNDPX9NkzSq5PmnPLHa6TLEaTeY2g6m6gfyipY5",
  "key7": "5viNReCG18Rg9jTp7FkcfTGrBaX3fcpRnXG8sKc2zgWVEEeoUizSJw3gh9K8BfH9eq3jfDE4PfyagRCPHbCBdYUZ",
  "key8": "58oCD76fn5a8rwaYW85qbQRxYkaL3Crt4Tn98FkFDZWiktEa3ji6ddcdkRDSRjdybx6ymZe94VCnreNRuBJLCamX",
  "key9": "3UzW5RvwojrEDcVvgorydZn2oewJiJbhnygrkLjC8eWzijnn3jpjNvAzbGpSdjCrPENSj1Krn19uWTCg41zW9eit",
  "key10": "2YvRwGovmSktFYmn57XsxipyvAotBcCHMx8TuU6YNW9Nvu4GbXRsiLnPVW9A3MALGuVuCyZyY9kfHPNeM77gUuwp",
  "key11": "5LBATYh7seSPEWvxeNvE357mSjVMwWbVFt28TyHngrgGMvczbPgoGJH1VN4dctni4WMe777a2GcRFUg9oEnS76Ta",
  "key12": "f2cy6fRiKcUL67SrmTQzTfSZ2axiWhMj7H8y38EY9qemDSXvsSM1K7g7H2gSaSD1jGVZnizcnoTUPBpYwTqft84",
  "key13": "4ddFsHQMtq5jXUC1fa8KnqvXVSCcSStqGGNBF6oLzq99EApHdXjLovwdPLRw1QoKA96DiLtGkeiaMMnsaFzDfNdh",
  "key14": "2c165EgazsbWWb2nmgGBhDTWUkfqbt9a5UvxXzdkGcxJSLXbvquLh7UYHm2UY9vuz9pk5VCrrh825eR8kYDvQkf1",
  "key15": "HbV7eayQa5pRxqot2mrynRPLrPCb77L7Bidi7W6JXrjkEPSzC4mjkXJ6kAYQC7Car9NeJx4K9bheombXPt3xXbc",
  "key16": "4SxcVjMXP1J4a17i8aE3f36eEvdBMeHwnsGLWYqSDZ9AQWxGwxUox3i2G9RRvex9tzC5tm3Sr5f2DRRBBGqmbQBL",
  "key17": "2aSiPBY2TwESLm1en6d5hZjtZg9iWtj42RqJtXpqAVJVu6RsRThPJb8pBfm87WaCSdZXmtbf1JQfr4zA8aCJB7uZ",
  "key18": "3kiUJcVkjjMKg6HPbJCeVAyTHQYcE83JVbPLmjGqdHKURoY96aqDaatiCKgkrV9zYH3yfUMQwvFXugM1uZ6wRyRr",
  "key19": "3nYetdugELFDo3RSzQXm4Vr3LNqseqycTLYs3EfUsAgMURQMoP6APwrijd7srjki4zMjKffeanqraGBt24J8wmpv",
  "key20": "sBAShmSJwdgTJu3jy3cy3smKJaRQWFvX3yWFEie9nndhTGfsPsGNqFqDPyMwj9ZU3kjzpXAjMQRDQmmaXvJFJ3y",
  "key21": "3gj672rm5mnfNoy1HidwLQcuKCaAyAs9W1P4kQNbUSVtczTJtsCA9xwNHqmMbGendbdFYnCVQC83W7LfRbyGg8Lj",
  "key22": "3ZhHZ9cmyhYMAK18ti7gdaggVFWGdCYZ4XSjHsDhks7NtFqMPP7DMucFmM1GPMwWV3BV6epWCYt5VVTzUFjQwDDh",
  "key23": "4BoXGbYsgMT4AHeEE99FqZYHC5jcdKNS26H9NimWV98htVtfSkRfn1Ugzapfa4YbpxyQYZXC6SrtPrNrtzRtpJ4e",
  "key24": "2U8TUSPvwGhCLJZcUYDn3tQnA38BiWX9s6W6x6UYtBjZLxV2HYoBC1jP3rmEPm5r1VuMwQbfqmS3BzPf7vvY5am8",
  "key25": "3uJUjFswkt2tsbtaH9FQrYykX24D95aHSBfniqntgip7NQENKyeSLK3VCZaiCwMi3qQA5i4PAaXMeqfvo4eqsWNs",
  "key26": "2WQpyfRJ9FgmQoWVbJKJVY6NKwxhdr33pHeiTXnNaf66BEuCWckduQcYsezMmigXUTa35Zj5fZd68oSFJeqiHy3R",
  "key27": "2T57SqjUBTRUx12e6umQixT9ADaujLAmnNAGAXi12hx7LBrAuQHkVdbtgHYcK9nz7n7hYcaCVApFuCKcVqay96Md"
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
