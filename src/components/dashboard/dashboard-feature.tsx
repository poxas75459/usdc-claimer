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
    "4KTX2F7srcQPSzJ4jMbAsM82NXdo1MFxxABZTsrqz1jBEJFQsHZ6qRaN7etmQJW9kvYsmH8G1tvoNMKP1xwjZ1og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n828pUBbkkveDdmnSo2q75BBjtJiSVbFUheSWgLhtBi4wUpXqtBLio8cEvRtbChfpXKrjH6aUo8aAstpSjC5Efs",
  "key1": "KK7fhFm8mWwhv878GywbcYjWjso744kxFDKnb53nkfK2tD7SxJSXxJFDQd5GryqPmStcyVsYYWoGKowQZt6KNBM",
  "key2": "3voRtXwRa1bbNJih95NSLbogmLq1GCY8dVVvZiYUMrwt1za7dYrzAscSqpb6tehUMifGZrwH6426v7e6QQQG3i4D",
  "key3": "v8Q4oeL96n6YanyyjKhWFqSiSSzJTUtYnM9yxUgTnU6qmB9AeidCHk4WFYwm5Nfjcruc9vGiARAdFVyfYE3ejiv",
  "key4": "5s57zZzHiBHgBjWXqrtPHhNx9BjfN1zRvtwFJ27stmu4KDiEAQyDAymTzFUXoHirggKypWVuoy9SxsActr1fSZsa",
  "key5": "5vpVn3WHvGBJomwKRYN7cxE5PjFhbEjwwrAxzjxoTHAdgV9xo7tYdgjJ411JGatHPnPzGytYP8VFoj5neNLgQjEF",
  "key6": "2tqhCP8XzLmKJJqMgVcTaZAQwAzG3R5dZcYr7yTc6YoBN7yEoQ21GdPWTzyTbZdDVb7PLrX2LrDhfmJK5ugw44tS",
  "key7": "22j9EjKLFKP5MbG9kyRfWkN9ts1pgMv29eZT1uZTkW3AR9ARXgCRSwVant1JBccZou5TYyVYrd4D6HESZz2oKGnt",
  "key8": "2J6M5Cj7nj4q7pqJ7YrA3NWR1pGEcwRTQES5jqRE1SCD1Wjzj8r7QbQFRwWFunHfxpvjyXvyqMHeoMAvSGci5No6",
  "key9": "4WCxAH1rqmt3FPfHCbVJMujSdRWttEc7feza2fUEF9daxqMw22L8TJM2oyZ4oKHmGWuJD81LM9ffmsMsdis8tx4B",
  "key10": "25GdwDqv2534rVd8PnSfxUNgyP5BJ3TkrUN92SaRtzc41iq7SdAcBo5wrpbahPgLsuXcxgnXzxmFsUaAXNkk35xJ",
  "key11": "HCugrn6rSh9bGX2Aj1v2KsZXqaXygjdJisespXjtKP1mvbKSYChQCcHSRiHiSmEqV551qciaaYiFbcYVAJnwkJt",
  "key12": "5jZ43DhxsGg4ucsY8zGMLN7qDS1EXCKE4zCjiTMtMPu6c54aJWTQRn7AAxxHjLHXf3V4ro3j9rxM99LbugD1BgfX",
  "key13": "3qJiCBnYF25ReUme8pPECoaEBDAZDqt43nZuTdnYkXxKU22AqLDw6yWVWuRikSpb1FgqAf2o4VW7r59cjDrjMBH5",
  "key14": "5ADACUTorSgdZsnWkmnhuqX5H8WQ9RWqzUsrctsRSAgGNDtiD9y6vKLyLFScpQv8UAqXcgJVGY9buZBTXqBATr2e",
  "key15": "63BDR9HETY84UkrR8VknJ8iYMEUz4a3HWDB8SsPUULVesoWSD6JzhQteQZuoPkhFmmd9HWoqu79ayxyS2Uyn3BGN",
  "key16": "wEbxvUuF7SEpj3fvg2HK6aN7rSqvTHfjP2jDJamcxXi5HSoTh51b2ArDKwUkDkN18xJ7NiUN9j9J6omshR5p61J",
  "key17": "47zRHSUfZXdac7MFbe4GVwbottZp7nwFeS7LWB6JPVJbAG1uzF6HeUUYKbBT17qCJsPrRbzGdQpi8sdXEYDyjFT9",
  "key18": "3QztjVPj7ZRb3zYeLAowujmoP5MgE6uZwydh4CEa9zubrfokjhr7GufdGqD64A3rd9Yu7N2YDsS1pk9EVCWLRztK",
  "key19": "5tAC7hQKjnNPxSFk9i74zy4hQPiU8U2N4C3J8DEFaa7oE1AnKikHvBTZpdqs7y38ktPUMat9k9mjYjt16HrbHxEK",
  "key20": "4hDijz1eT2hxo2QFrj9rvpDozmJs9xDVbhwCep2j441eDrEViBPRhUMQYYcqWHdV9NvAQkTRhcGo6xLFcPDYxg5R",
  "key21": "3wsUyWDYX9dZHQur8Ym8rxJ9ntC2D6o6epn8adsgQZ2VvBUZ1AjAefsgfn9qTgr2RXzg5EUkV7dcCNBDgKH4i3Ym",
  "key22": "4pb6rYenaf5brwoFanxkccHv1vK1qHr35SJGfKSBTUWSDkkCnWXCbT4YtfYbwHzcGLSbuYzwQ3ZwFL6r7oSRuwXu",
  "key23": "2cJsjipHT5H1PHtzZZUFJjqjge1gzsgwYarz12WXd4MwHexdgDKtvkJM59j4vyccUsNLUwrNvCN1tJrzfKYfL2US",
  "key24": "RWot5rD7ycPaZLupPXLkorVTn5vJksPT8eMW4cvvnLQNdvQnkBTZzKqGi7ckiLm82RoTAPpTyRmNKSaMq8fbyzp",
  "key25": "2HsPKwuzFRvmBS3Sc4xxKdZaJYQudRaUUKD8oHN3WYHfu4BLNMFZvxUvvtaptmSVTvewdeVYaJY69ENMLb86GtL8",
  "key26": "3nJHJ59dq9HGcjd53m5KRp6qRQHMEF9e9tzwesGfc8hSW3bKVoHG1tWUpqxxJo7D2YPYfVCxvoykNjMk8NTzhxiV",
  "key27": "3N1e1rH9tV5vyqWh7C9e6bjz8gPRQzxiHMAMwwdNgroEZmTZCbewt3ZBdki6F4CA9pYPbMqcBaogbd2mYDaSahw4"
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
