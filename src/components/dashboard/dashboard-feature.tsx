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
    "3ENcQKL9NczPmMefoUUAH33gAM33DWxU15uXYGC9iDeb3HsXsncGTxzVdbynyF3haSuZoTr6cdXcyHiLeKJvANjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tED6vQxDsUWcAPkrQyw7Eu3N7G1JxYYmwrCSgwic9Qw9wzPMogAYXwevNJrCyk3bscccP9HMXzrxgFQxLZvREw6",
  "key1": "Va5cqrgvLkqygwfbGKgHa7SahXZGEZczL3t7mHrDSzLHkbGxCpQGdgQN18egpRhKnshN9QUnBf9CowrpYjk1adA",
  "key2": "pNKJ2JiUvfWMyvsgjapTP3BP7eE8p58k4k8GUo5HETEtznucWwG7teKiYN9XpHYcpMXLsrX1ttd6B85DoaQBLrY",
  "key3": "4MtwBSSy2utn4WPEAJtAF5QboPvDHRw7aZaags9vqDJFwc3QtpCKNvZBvgQwatxYLHdG7XpXYbhJxnBo3ofuFKJa",
  "key4": "3VxviHJkHTNnmnxBfZ91KqU5KhWbZFHg51RooofjHpduECKooKXyMsgyWmhPRfM7F7cdKeR254mXCWbLoWHTkADJ",
  "key5": "3J2BAwiVXQhTnFyTAQnGxSz1MzJV8cB8pWfHrjxrLckMVvR54RXf6VyQj2VG3DzYNqShtoRbMTyNir7ox2WiiRjS",
  "key6": "4meJ67rdSjXfziZQit9eXH1TNJ688j57298K3ADKjimiJcvVmurwivotBZAcxikUWC5VXPg3jKFBuxuhKaLFuiRN",
  "key7": "4i2nFDwX1JBum1Sm4aYG47Si18Ww7CkABx2gy8SG2vRnxmX1saWtfTuJpf7wUYRzkYxGd49giPxt3YKfpPxgYCSC",
  "key8": "5C6bEa2ZemQwK6dm6T7DbfqxRJ7UdHtLjTE7KtbvviJxHfQyxjy9zJXzmavv4CAoQtbqcC2fVRRr12cbqMXnVT3f",
  "key9": "3nowmrPeZjPopfY36yZR26qWtBsu2ivjxnkeryTZ2w4xofiYTB4HWZwcbtxsPWSNMBHiz7Aoizt9taBdjxpzi3xo",
  "key10": "386kYGc48eYY7byRhm3dCcMtNDMJG6d74ToPRNy1bj3MTZYEGeyio9UWCdizfdHT8YvSzteHrrMdtPTuRJ3cvLgt",
  "key11": "43pdfFhJyhHKet8ET9nrHmiLk2jHC8iXYK1N3nnDHcenRKKDbVcGUfLqnQQSve88U14Dc7JwudjAxhRiQiqGoTua",
  "key12": "DRV9Zw54NWEamSNyZVsgQnwtc4KKMMsBgPb76Y4GHwNgGpVb7eBDYKxPoXLETDmDUAg6TmNCMSFwLxaFrXaGQEP",
  "key13": "BNVgPQEvKGfBpMWNxVhjPCDERqz7beMGPGwKVRmQawaB83SdfhifgAtZ7ojTFvtfooci8uLJXXEpfUYVBbQLw4e",
  "key14": "3PMaQnuPKtRSitaTwcgv3WsBH3uHQLHGAH3C6ZGyEmj41U83uPYt5d4h3mV34s3dFSZPcS1BKJRLNKoCiwTuGwsP",
  "key15": "eVQUZW4SZ4j2oSFSnVN6UzEmct9dmnLsWZCea5WZp54Bw2fyBBT9hrFxmtqhDxzMR6ToB51HKvckcZ2AAojo8XL",
  "key16": "gGPmJ8rrDFqSCtDHbTom2S6Af91NpAinVCtkb1bE9Cv18pPJAj1pGWpvMyykaQ6GQ89cEyvmyym65ECwqfbak1p",
  "key17": "2UqE3pykbQfVmS4LfKQnJKe6XLhz59hAoDWwXZzgsxnHc6GH6A1UV7jgTsWeqJvcDT1cudFoR5qpuGG4mLS975yQ",
  "key18": "2pbQ8n32NCExiPWzGhtGfCwivuu5CyFARgVJqfQpNAAL4oBBX72kzTt9bEJtK6mYJHZcGNJdBsfYzbMYJyxQeStp",
  "key19": "3sy2vodJoWeE8c4R1woMGmn7175Y137tCmdEvGEogsLZmwDrCKifUfa7HyLaDqkBn7NftSdkMDpb3RysLkDVZtmY",
  "key20": "5QUJKmN2AVwQkXMG4WTBic47YGRgP1FKVAQmJV54zEaFAP9WPaRVS3RXyDM5mFR1MJaxhvQogTqqQNiKjRqEtspT",
  "key21": "53UGt5jFEqTj2DkUqtwEz7WcLwdw1ApvtyngnSCU274byRZB5nwEFmJ14GAdNZdg73spcCYs1UQFYhws7kfbGzRT",
  "key22": "5QUVdDqpDMjk3mX5shdSgm14SXgRWnNJW8yCNXZF7Q7nb4WBLiHUKBAiFUJ1k3KQhX9f8r3qepUQvMLLohVJYTuA",
  "key23": "3MB8xijRSM6h7D1GLYY3KnRSb5X5FPTkpsEHabXVYagxGznJApXabyqGw5VZNep9aWcZ7hD2hhUcGKaNMFgV4KWG",
  "key24": "4GdZVaUFU9H3timZw42wdEcaZvosCshhcYan1DM5QGYBVYkRZvUqTVP55RZhUyygwR6ziTrdmbQ33ZpjaUnWRNmC",
  "key25": "4bvZdyMxR6bvSMwHsVDD7AdPhM47QSxw1MM3neBC9xayLNGCqfKieEJEZhYvvD2r57zF282JpN55VBMGAoCicJbd",
  "key26": "51CPab3m3FiDTCZitYNi4L9zzSYwtpL9T4FgqDMj1bq1SvcbiJf5Bz9S2wwzTeC7mpK5r8j26MqRPRL4nV71kMrw"
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
