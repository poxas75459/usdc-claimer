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
    "5y6maLi9yyPHUJcW6W8RESz38DC68FXjjUx3v2xpr1Zi17AhsGL6bYcXyxBA4JGV1FNYAgPQhUvcABjX9GtHQnnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HveBzn8jg2erzFSCnTQn2UpFPB85tpks3DQQrVCsGT7X3BM81bBM2D6kvpaSToU9zA75vHyVYTJT2MuXywVxuY",
  "key1": "5DjgTVdGi4toTXgEDnFSm5iwt6pgBtujJhzjnmAs8qqYaz1ir7SP1xxJjv3LGh5imtQj1YvS3vCT4mEfg49epjNW",
  "key2": "prgtxATwD6J7wkthYgM2NZeJyBTtWHhQYzoFyRYAUy4tRJrMUxva29e4AszUt28FtJ65ZAQq2E49EuPwWdJo5Gc",
  "key3": "3614Kee69BnJuQmAeg84aTgmstD2aDMoGu5MsQSrjZS24cb16XW2vjn5uuznTZrRvYQNtXjWHjJrgBAnfsWbsh6B",
  "key4": "ve4Zg4YZFf9NuRMdJAU5wyCNyRFnT6dgnMDRNypeqVXVVh2aXK5uCwjET1Hkfnk9xCefrcQRj3Lo8NbvuYoFY1G",
  "key5": "5m9CzuacafMaX8hNYzhpMB4pYB87ehAfgZE8snu1F6XjqECkrsKk7FmAj3SCEPkPv6r13gqRnG6kxnnjcwcsB1ex",
  "key6": "5C2Hru2kpk7zWNMr2BJ4gyZF6HHWNsQ9Z87K64FfdusuGbc5tzX4964h3mSQTQQnRbG2jNQ74Zjdwt3wqXvmtPTC",
  "key7": "4dNtXVLX1y32SBDPYvY3jssq4cds2LkiVDq9z2Q3UWGVzqRdMKnBSixEZbKpAWnc1VizBgqAPXiWwn4ay2t5E229",
  "key8": "22fguX5rSMoGc9L11e4nMvrVJVNxqGKVHiMcCraZ1LBwHqbjtFtuhSwFxEj1pf7oeoDxdLH45zyo1Ae82kCSE8HE",
  "key9": "AYmG921pXZtBb1cDLtHE5q7S7FVWmY1Q3bEoQt7nQfTmraYagduSSy9LfheGqywCsu56XBLr8hB7zEkWta74UpW",
  "key10": "3JvLNeQ2rutycfe5D2t3rzUNibr2UKzSiLJxcw1wo9wn4xcripwBH4GPXpk6anFjfC5R6yrv4weNo7cA6FNShZiK",
  "key11": "UFqHXYqbZ5AvdX5JhPDys1PRSjLKC4PyePxUJgRqy5owwcS9wzP5sAQNDxu1Y8Vo4H8fWSWVWJBFEn5N8yaFEU9",
  "key12": "2L2PPo3vVQ8PT1YB4aDCxyhP2hDQc64anp2oF3gQ2wC4dY8kQDdVipdfZAqsrYniVojPaWLcJdz2SkBRHghKLiaV",
  "key13": "vFJf6tA5vixP4G8TKBiqyckrWBxXRK8ft6ob6Z29kvLwFZ3qT2nFc8S37FgQJ6jnUNHDJKnvQFyJ2sK5WCRzEha",
  "key14": "63kcyuRbdRjNqov8V5zaAjCFY1DjpkMEBDxZqDjowd26g9bkAxTNjrHZWQysEgrnb4caAyE9yyEiRe2mZQSdEdaw",
  "key15": "77hKhF6pXPc4qx22KKeyQoVNg3U1jLgFYLjppJGhu3wUWJp84embbtQaJQe9sExcQv1w49oJzcUbULGeEYXK74F",
  "key16": "Kzk9hQEzXiuaoXq4JSKx8DnHo384CBxn6R4Ga4HJb71VAZiHUfv9HtfZqrv5sUy2YNqi5TnWKV23DEYtSLz1qEJ",
  "key17": "cHEHbfqxqny5W92DWZAniHV7nxrPFM6Th5UYa95t8ibMR3fDyz9h4NkiAdXxQFZPf3LuEHiSbpWoN96RLU8ZuNn",
  "key18": "3Wgwb1f4vU4dy4wo9sD6V6Hxrpfm9PkMMAF1C6mbXz9BibKCG5qBKXuqBcanNURfwS2E5RBzX7qLXBLdGGmGoTde",
  "key19": "E6t5gDHmAnPb2qQioLoho4woQLbYukMDPimJhWs9HbSx6MTihBGsfNf6b9MboBqtcVSTAeejUguSKKjTrr6ubaZ",
  "key20": "5RNCwkmA8rf39ZTRj8pmahiFuJZ5XzVfhZDXjg3P4MVAzyZ9GDA5Z53EPWpCHdf6ggTASUtNwb4ukXHSXoCRKiTC",
  "key21": "2rWsUjfVxzHTvuqUzyP3rSR2PVTKYGEtBsntM7BYYg4j1jdyFiVw2gwgfxHvREDmDHcJRGwEr9YfuF2k5LJ2jnW7",
  "key22": "5LCByLzAvjZQdUtYr6NuCYVxJ1WfTUAmmH7ksw1mCvKcYwb9bVggMWvmwUbN7zJsbaN97rGb8tt6JzrTxABvpiwL",
  "key23": "4xWyBhqRUWhutStAnMAWh7jEgg6dcvqqBUrXeVHLG4cZDrhrhvrGgcnJwRnPDvxCapzVyHSWGeWedcVrR5qE1SfM",
  "key24": "42mPcXJ4exJjDqp2PNBRFhnUE1zeyPAKop1iLZQqC7UKw81xv6MYGMdCpp6akhHWvM1UjfucJs7wUt2TSHoaZkWq",
  "key25": "2hydWVx8Z2Ek6CPe7Up8h6aFJeW4ZNyB7HrXtfNsBbxJ6X74R2aofNedJdPCs8fVutPsb7QRHxGaTFDa4UQu8Zjj",
  "key26": "C7odUG2tXVw9DMbpMhnF2C7Xmr3ERW2BwEwDZuHKbYksQKbAuddnTrt88M7KHYWZR5Ui9FJwf6ev938LH7FpC6Y",
  "key27": "jEok6m4qRHV6RiyE4oGEyH86WWh9BrpGtMF8vfPvLCEJMRqgsjRN5M2mi6uMNP2y4erhVZHg8Qwzj7BwHfosceq"
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
