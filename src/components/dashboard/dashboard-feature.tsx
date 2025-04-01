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
    "2sY79iJbv7uU8K8boLLymhyje4cZvRaixVM113EcV4wg9UKKy76MP7yEQKYBjQdkj5u81Wb5rZkgseEKVmDr1vU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQQGdExzUWhU8LB3prkCTHjQsPvYcTDkh27TfwGAA2YVjshs4feQqYamDQURFgS5NREreaLhEwt3FG3ox3ihZbo",
  "key1": "3q9QaUcGMwYCRebBvhcSgPqKRwcvtE7AzZFQdczQiFUrMMP2tiKvLmAA22Fv1QRK18wTezQUZTBZvTaEZtVcHmtV",
  "key2": "tKGWRDcNZyJVTtvi7dWVj7ChBu5zxF6d88A8gEYrAXxpjQXj79V4APDnNpYT4UDW5SSnbHZduyaGEtej36JsbYB",
  "key3": "4tCtsHzZ6Z7HNGg8JeSsmytXgfVMv4KTo4UVXcQuULDLZFbbN9ijH82sb4h2GS1qBn5E6f81Xsyn7QAXEGyhabnw",
  "key4": "63K16mwXabm2BCkYQ77GmNwWAqG7mj4rHUBbHqJUMmRSndwYFLEYbhiw3W4zKWoWXW69P95BPf9LPVgEaSQPSrtf",
  "key5": "5jnyXtvZ8FrBr2M5opex2HB57s2bmEoQww6a4TwmsKB4XkFZVKQ7FrGnf23efz9k8fSbVDqxPQJnqVf54xp6Uha9",
  "key6": "MKPap7DKsaTHz2nk9tSemhmCqtDo6U7rYfi5TzWumjjwPg2J7o4yhwnKRau27daTq262nyCCKuQwxtSn3TvsApJ",
  "key7": "5YzqEQrBDipM2dXoVJNhijp1PMsPsi2upawwBgVyT2jY7hH3GXHXxweni2qX4GPL111DUN5JXbxhNpBgZ8Txo2K1",
  "key8": "in8z1SbXmzFwJ1xms2XfDgiy3CYYzShJ2hHeJDNG4ETU1nMyrDg7dHWbcY7aVnS922XoaqmYQQ6UtPiNE2rotsq",
  "key9": "2m3164f9MNgxXud6edE3Cakzb8GR8fRXmsGPhm1SJwMQouTzZHBP4TXNjTT5NfPsesETA9KddFL1jyGyjHZW8pFp",
  "key10": "5iHcvsfGQeKbb1YEKgDSAj5WttgceUTZK8DUZPjHiGRjWcqrysQ8t5QCYGNK5QoKassUfJcvRtaccs7cgd8Lm1iZ",
  "key11": "2nVEvAifVypneAh9SyAS8Lz5eb9WXtsCBa5Ums8PyF8X59QYdMG8uhqwwPRV79fQVpxidEshBxPxxy8Hj9GR6kiH",
  "key12": "4zEGadCoykM8mSpcEEjSsqtpmq4KPAcnEzxKrBe5Qw5xNRromt4aQzZ6JH2FptQbVXGDKTXLCu39gXnhk5Qc4qgg",
  "key13": "2hXXihiM53aSyfGf3ULP6EVPa3fy7dAm4e7eytq5tKHjrC67DQJbyK9xTMX6o6BYp3bA7faEcJguoUZyi9WcAX8P",
  "key14": "6eGUD3Rx21SJyuCTnn7LG2Bwq87RYgAV6bmaiiDFcRKsWkMdU2tp3Nm3t8nKkjQjkpkUaF27pngsVkb5RTzv1os",
  "key15": "25X4oiKHVm7vu1wzxu7mf316ms2B6VPkx4ThFnQk8sqME29B5qESTMvgXETnReeircwi3KMfwhtDaaU7W5JLCyQy",
  "key16": "2TjGQdj2eBvJY3W8edt8o1BBziMScUyUY9RFU4trUxV7BmW3E24ryizBhzD1aJMdLVZ2SnGan51PWRP5jt27jWub",
  "key17": "2PzSaRPeHMovFu57o8C8n3SS461n1SXzAh2mmXLN7yp7MtFVfBGkS1oBvqeBH8nL6nfGS3dtegY9DZougESMbmKd",
  "key18": "2aL3FL5fAEJTnEqWqxNZgPmuDmiNpZVwPvRcTxKwrVEWDT5M3u2YspXj5m7c6aMXRdmotapUmcyuAst2uutenxB3",
  "key19": "21if3xE6YLhUVpTFQVmyoDhNR31R3D9REF1pjM6fMG31A982hCgP4mbCfsZNGj8uqsyYDbdXyd6qJy9xS5LtipeH",
  "key20": "2oj4THgYK5gr315VCdqdjUZFpMvR8yKei6BqyDUvLR1zuokodVqRAYpLwKAg9g3cPtBcHqCeQq8tmpSYHeBK6CHj",
  "key21": "5PaeNSQdJiLqHYqUdtmY8swWwx6i7N4qCG4g7maQkwzMVQQPC1sRN2eBPwUWHeJAAMMFyjPnBPxhzrV6jckNyhMY",
  "key22": "3V3hS8Vsb6jSaho1FDUW7J9V69EkAwAAx2HUmirXQgZY6Chbcm4x85HLy8C4bkaGS3zz983Hiu3h4jzUA4sFA4Uv",
  "key23": "FbzNz9e2J8CYj3tn1yCtcb68oX3XqekFkbEnNA7xMSpMz38EFfTjKF96L5A2StDfSWgAuXbA3KgmVMdJSqqhos6",
  "key24": "2FffiVjp1Cg3twhpyJTCBtXZhNQk4EWXBe1EwsGuyk8HRgVpiDABuJVgZQUXgxhxFtMKNYQXCA4xaH7CeF322xKc",
  "key25": "4Sm3FTHtpeyMd1g5a1vNPHFmtkSaBUWHX6MbBdDEexQsxHcBPQsAzHSfsFbmdYefeJjjwS5Cuo3qW91JmwRzc96p",
  "key26": "4FaGkYpehHd2QkTBoAntPGgzmtenNVeubGvSRsCEM4zX4o41JwG7tN7pZs4wFCkcJmLYL6pFQ7BWU5U33768KtLX",
  "key27": "4QwATKh2TPcvhWW2zwJqMaJymPWk9m8rh97Pp5XwEfRfkpHuj3twSwh3o7rC5azpBfYzqtsRrN393FJH1DjJCjz6",
  "key28": "3iK6L1GFfD5nDwn8CrHrGA3cCJT9NmGGBEm1UcQin6vRPhkWhWPbyzogPEQNveZeScRHtC65ZPXQ66byaSW6X3S7",
  "key29": "4LcL5CYJadEF6BkRpyoY1BugbcMgnGgx8DyYbyYra4unRqK4kgiACotmyo6LksBUkzB1QiHBJAkhJxhsJ1SVVVDC"
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
