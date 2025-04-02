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
    "2RKQym2npBKPAZEgirfcRbYzYkhDKWT3Z2ayEZpdtvPZrKja1AGmh593opyky339pumAaeekqkPcYKigrwtF2nFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hELish8jvJM2NwxUZBDXYzLFY9ae826n5SbrLN8H6kWc3MwirghjQCsewoYgKHRnXaV36byHwMfxVTsn7u6vDYB",
  "key1": "sg7za2fXi9qtc7usau6hh9Bz1PEWC8m9Tt3uwNUCCpspoXD7yYUESc5PZ7ahYgSNY7sqViAwmpxVcfrtsDcPLF4",
  "key2": "4VV4uxQhjhJgwaHqFDhacB66kkHya9QmiWhGXjNKbieFiko99RitVpYinTnWWvemDEYYggkr26YVUbm6DFRycy4c",
  "key3": "517qu8amLFmQzyJse94TBPRSAQGRmatMqsGEXVE2RpBKrcVK6L6wqDarWd9qjHzWGFqhZumd1GDci5RjhLwDggsT",
  "key4": "4Akt5WzhPfpnGVDDY9EDMuM7DgabVy1MUH1vtDDtyCxg6aEUVygEqxiQugXQejxMBop8jPnmnKfJVbNV8n6A19nd",
  "key5": "5HNTMtcPm6GyJPLyJemSekrVsK46AqtosiQNpsQhaEkMErji8CyX7z6wZE6ivJZ5XNohmnJmqcUxwdnJuxhn2bKP",
  "key6": "2BQrFqjS1m7TegsMWB18UZ1ebHen6MZZzwm5bq2dXbbQzL6bYWCw2bh3G8asmNKv9Az7RiEptH43bK17Y6be2Uh4",
  "key7": "5RUqz2qg1gCZRRCyaNQJTeGL1BLpZGfYS3U2VfuQHv7ctrCEEB26dLqKzbnmFEe888koBeVnSodtnqSgkKpV11Vv",
  "key8": "26wXNukiCTbtukjdPrGvFHZ69RtUztZEftpdkk81qiJ3u22TCf6AFRAqsDHMDWfWGAMas38y3PkvLNhqkkbLqNWx",
  "key9": "67eJTeQwMFDHvRwT4brb9CQUV4Y8d3wujJZVGPNGTuG35AFH9fbBz1KLA3tEDARk3JfB5AQtSTR3X8R57wmoJKvN",
  "key10": "2qsiLimmQy2LfKCqpRjWDEPhayrVWzyoZ9Xeh8XAC7YM84bAJQk6xruTkN6tG9DprRVBm3dUV18C9yBny8v8bN9T",
  "key11": "5QcckYAiMhx1kZ6c6foS41kmMZZkVz68frjsTtpXFGkhEMEUcsEzvXasXzZPk7S5BfEvaSYNZdeCKhFGTL6Hhh17",
  "key12": "5YQ5s2BN85NnQ1VLynsbmHCrM6KZRSAuh3W5yDE1tBZ8QpnefixD5kj15nV2T2WwNZQ6NsMJxCdSnHFfKNNznBXj",
  "key13": "64FuedagcioxFeZFQVnwpuEFgyEMBjkjpqLiRHALBam4u42qH13qC769M4XxQU1atM143UELXJeGECNZ3F1UAiem",
  "key14": "R2KqndH74XZnM7NWoNxijvb2L37j1VLNDgrgoKzv8tH1SY8Cc7f3fgWFEjXrNRGQNgVKe9fH4FqiQD5GumkBPSq",
  "key15": "62SMrMAMB8Bi3SckHWn3dGatYdWbGuGG4AGPjxmyr9i5Ww1mqXMt6Xs8axN367BU53cm92YUAzT8C4sAyMvkb6tq",
  "key16": "uSRpH8Vt6QR3Gcg499SEZ71acLjY3GXHkXuurnkXKRZ9P1JuoVJ9CkPjYroEH5xaqWQNWdcYApzB7m2g9CQ6YQU",
  "key17": "5aYmXnhVxksurXyF4KGRjY6wEmWNYZrSNFoHLbve1NeDUKyJAHBVMGjA6P8gb9GRXj5VxDGSKiKyeFKcftmKjAp8",
  "key18": "8zzDEMbAXiaXXsziUURKKKcxYfz4bXHenkbuMPwKF4TkZJqKEfeuSNWkcWvwPhu794YbS2VfXp4jELixeivjLAv",
  "key19": "5sypKLPTWp8XjQfjqMsVBwT2HW3UtM18qMzurFoKtX8qQfM7uLH3nDwvrQKTUD6L5rGqufEEeFkA1oDKjJ82trGV",
  "key20": "4eWjLkGGm3korurmovTZimkkjtimDPy1je8VMBUuMT4VyDc7dUizTWQbH6DEKxDo8c9FEFcpJmhkXHLpFP2n4he6",
  "key21": "4GRW3LVasn3bSMe2bM7s7j6jQSoJNS2mXznjD9FStKYDJjtJgPSn5V6cU3P4mTDHwzyPMFndE7KSE1CWeVhU5exd",
  "key22": "3wPLJPhfsXRXQN9Qidr37wbGYVnRzGAu56FNedggFj2i29LFnCmt5oPjPNeHx2Xn6SGSMDbKJFTLwffGbm3dzvNg",
  "key23": "3RUqENhm789vYAULLBLvBBiQ81yoF7uxdx7UBeHYrXjG9i1Ht883zrXYSDY9vpZFDqTiaEpMT5r72yV9zQqao55h",
  "key24": "3jsm1UEomviE8TGaoVBTWVwShYgY7k4Aw9jrrEi5HCaa5UmWZYtmH7mV3MBYPB6bnWMy5hjsDsNobNi176na693f",
  "key25": "gXK79DVDJ64RXibnJMRLGFpPxMJfyrC6CoJj2eJy4MuGGicCA7uoe8ZWN31mxFCBerqCU4VhY63QVKBpQ6Qr1eM"
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
