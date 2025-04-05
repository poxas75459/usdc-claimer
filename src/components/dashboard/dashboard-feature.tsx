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
    "3pv9UyxRaZpddBzzfG9wL5qYmSsUM2oFYDEGUTMX6uxiGayf39N64BZGWAtjtYBPSgbWCJF1xCWezFqrjq2GRVRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nVGNHv73RZP6yN1pFgevFvP9Ydr4ynex4yxPZC3aKSh5iKF2kzwwmnzZ5TkdPUFjaTcZ5mCtfcMdt3BiQS6MTm",
  "key1": "3ip7eUrkPHTjK6JSCp9amh7kAgxwbn9V81aXZuJWq6PDYhkBtcwxeXHtJ6KXcWq9u7aYWHsMgZjoEb14crNKJxQE",
  "key2": "5tgqCfvKk6admXaYnWidEUu4Xu95WenBmVCXSYrJnJt1ycyJkcvk2jiJT8XfVhV2fGV6W5bm1M9uUArror8xuR6t",
  "key3": "2FZiLcdjrEi89PwUUWidc3JkpunRYBJZrVBaBzszPH6zonpY7tdEi65KAXgYccpqmotCZwjRmirPFjyNx3CS6CSZ",
  "key4": "xk4AASVZikXaYEUPafyTbqgtPZvfGd3ZnmTuRY6Vfa4MKsYnCgokwVkBsuSNygsgCmtwbMohWuqvrZTCdtuLt5b",
  "key5": "38Gq98Kzj5umdVCdZ1dKQEje7EfNMVGd2sdDPRxCjHBL2smLhUaYbjUHtzdnSx9qpkPB6kBMzihUAF5b2ea7zm68",
  "key6": "3AwCc4Qkshx7E1y1voX4igeDaFs3vtzhNdvWzL5St9MikTpVCC31AZVdnJqTcLcQxw2eGUW9FMWmZRLUHF1hgbC",
  "key7": "2j5ty6jomWuoc6j2AwjXdv9hEwXjmGCCdXFZyfgwtT5Ubj1cvmFbeuCMLShXLoLt5peByy67tkG5M1EGTimrR5WS",
  "key8": "3xfUYAEzUZ8GW6k7T6xe9cmRkcc7eXUzGrr7nCkLtAkR67vSNTCGSYssYXQyPVqWUCfuukf4h6D7h5Qt7F45KK5g",
  "key9": "21NhE3w2dpi8N2Uj3aY9n3WWjkSMFqTsdymWycLPvhmm9VZcshTgLm3qFwpiwfRYhRLe7QSvV9FdSDyErkBKwerm",
  "key10": "5bC5sY9sHCwXDTWE57Hij8d9hcYjZ3dKfQ6umCWeogKBDXYkgTYQjhUGgwYnj4zh5xfkpTiCKbAt3DGvsTcsaaJ7",
  "key11": "4obtqHswbpJrYJGwh3R4SE6JKv1Z3TiwNCXUHbqFkNfpiChvosu5GiCADMotJo4H1w778VKtqQTSHH8oyuFQg22V",
  "key12": "5Yb5rTRxeyNQA7ee6EzPHk7wz8TxtZicxqwoYiFRVHZ3AZPAzkpuzuuJmMD3SWcDvtbVsrDkcpx3ivgJbUin6XsX",
  "key13": "34s42erNfyheiCP4CG94C7TKQkiVvpQtWq6wYYpfAAmEbNtJyXfcrtWYNHEvJAX7S3ue1iLKJgRY1xJ8E64N8Bby",
  "key14": "DHwsmDzrC292WVZs1vwNYmvExPfrDgNzxDP65hk9uwavAL7i4956fjv2JE2MSJCgoo4ip5ntn3P5jFUE7Vknkq7",
  "key15": "5t67TdcmTKpjxTDNUtsbArCu3GER8awERdsJFtKq6KDfkvAedYGm5ecjaAdeEquq3keQ11yD9vLrYZX6LQzr1tBK",
  "key16": "5ER3AcskUoqW1YAY1uyn5G7J9Ez8qeG9F6jyo55tnKAhbr6G31TvXzLEWiZuwjyqi3rDWzkx8NUfmZ1wMUVDEdGh",
  "key17": "3x4HLpqGhTkkzyxHivzECLu6v6V3qAXvrSfCc1p8qw7EtMUNfYg5GhvGMQHreeNq4HRpHk7QDuKaQDFmgoBVEqpU",
  "key18": "322ce6nf6GGBhosXtKFEpxwfXCpTvnMddx55okCh4ed5SKqxmnZsvDwxtygMxjuBFnnqv8mwGv8dk5wveAbcKz3g",
  "key19": "96Uue8o9WEFHvj4tQ3QLtoq5t7uaY2gvcn7xU3ADmPznS6U6HLScA6DSKAMjDkG86s174PcBnZ2jtdP2ADtzy79",
  "key20": "2jopYKrmSY6TmUL5V9mVHxnBXRYTMdhjRWFyGq7XwT6wqoMp5LZf7YPiF1gUvH1VGYiY6op8q5m9McfGkqivPMyc",
  "key21": "4LUkQahMrW8fPpzBecDSeLAdNyR8TgQGbK4KKKG7877MMztoDVW7SfgUkswcArR3mnLNuKeWHY8NedP1UoYuoqV8",
  "key22": "5gQC93HGQWNjLDyicsysZ8AceVCMPEkSCzTuyWpUCKu9A989FBS4zBGBuKpq8ED8wuAdKzMhJBqWYDJqXRp14n5k",
  "key23": "5UwdvprNvyT2Rs3pvv9diA4oDT8dqxKqVZDdu2rVXYE7HAabKWfJ15aWjCME8M7VLFunAUJXtNSNj5KKmVZJ2aCe",
  "key24": "2ZVJ5sdgYN8Q7tcPeAJaXJBx9MBE1DuE83Kqf7Cdyay8yV6BfxiKnbAH3gPk9UGbpYUAtsUAufTsQk9HDbbBs1kr",
  "key25": "2dRhp89p2F9UQCyypmzTqfM4qVqRrnmLBGjheE4GnddGshVW6xBMWCfAzMcFC3ss44LxGABJMD6YwHr3j9VZucUu",
  "key26": "2ndbzzJWtATAsY4uvrqFKMb16pRRGeW5aVd9phetJ8MvGuw5AuAUhUNpgvNZWPKiMsCHBiffikM5qtPd4bHKWYqR",
  "key27": "3Xysqew4gB1uYhEVYgdHhAKjMqRPJjAazG8CSVQJJ8JpfPUZ1oxyoscfEmob6jZw5ftU7MonoUF75nJzzrmni9c7",
  "key28": "3yZ518ZbGoD7P37wCw8GUkg1yj2Y1arS6LBmaKoi11QKXNFKZ9RiS8bMt9pUsdc71NWfv6UrjmsEiyWfBbR8P1ES",
  "key29": "2mhhfLd9SNLD6uJcNRWHfjdnbLfPNLBZLabpXHEvQofWagy89vQyo2t4J9CkmPUrRHY7sDLYLMcwHTkNBNs6oMBr",
  "key30": "2GQKeX2BuCkteut9ycFMhqqgAWF57DGsvFFSPGikLSjjm48HnMDQHd4VDt8Lci2HbDVwh9pzBHNfk7DdfhuPgvrf"
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
