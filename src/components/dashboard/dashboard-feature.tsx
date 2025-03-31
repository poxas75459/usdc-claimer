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
    "3nsL9BDvQ9PmmiHsmdfGRbYoY42sotYCArtTQ4gYEgakmcTppCmpUxaXJjhWNYmU2uGNedDTeXc4PwthFXLXHvpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653at7Fi4vL3BkWT1WcrrRLgJUtXQjdw1BsvFiMpLpJA5PDQAt9jZXuxJPimJrSNje6Q4BaRC8EjKW8cUTHsSFW",
  "key1": "5LUhQrMv1zF4k9bLwG71ukJcTZg6hX5Rz5d4w8c1QDYuUmmMZyACL3Qdo8eRT69QCv9SC26WgQu4U663uEvEYSwV",
  "key2": "3yUjdQJHCxC5LY1D5VguX8pnH5BtfHRXWJjYZzYPFWb5Q2MJ1sUhtYGru2JawX3KQuKS5etB4Ae7cBJBk4qdHMp6",
  "key3": "579ddgWpjSCYLmguv7N4NL3PpmWnqoqCimBEABW85s83vbYMdSSYRqCzAMcoV3mckNRcaa3TroydE5Zo8AvhqnEF",
  "key4": "5JSBsnEfZRmhqUm8GqrBhiLBrd3n5b6SVYy7PRSoyCsc4gudWzTgC67AauEcYT1p3eGvRjSzacLVhiqffkwX6mJG",
  "key5": "3guCBkid9biGSXyzFq8fSrZdD9SKJ5a9VrhALwRRsnrQ8ZGBTGxGw3xyzPRjZ72nQ8cgkjdDojf4gfTv8ppPhnu4",
  "key6": "4hupm66iKVUfnmdN9zveiVqvpXvVdjvpPPV1QtouwktZ2Qg7WdKCaH4GNMcKc2Z3KZixxzwUEwa5gNWu5LPrduqf",
  "key7": "5rBFedvU2Dmc6h9Z1h9NLcvq52xi2JyDQSFJKdMLsTZFSLCZa9QRPr4RTTNxYC3v8AyXeuqFgeTStjMpYbmwatJy",
  "key8": "3TBxdsMGxZ3Qg61enCrZNdNjkVY4omF2NXLvQDkmbmAZ1wjZa75Mmse63Kvwj8gaiuucda1uyPiAqyGHctMMhvUU",
  "key9": "2ZCrw7RpcmCejz535B2VFiTe3z4XuQPRkbvVpPre46xdE4PoHrT5yisw99UCPXDauNoGg2EyUqdkENbdAbqeYkYD",
  "key10": "61sL2fsKvU98XKF341SM7vkkSm1893FsfCPWEhV3hHBAX8a1x8HQSQhoEncdYvGffen7inLqybzWwkgPUxJxnedH",
  "key11": "d1gY8yVSrCcYMmUdRwLoScCUXdouoYSQbLaj9FbeHMzEA59YEVwFyRvrtwNxrxuvL98zjr1YYb6GweaNpg1mQEH",
  "key12": "4hf9QEZvvSMuujoyCZxt8b5BpDQquwmiHivXZtzxARV5Ay9gRQhytXQHwhnBAUWN4Jshtom8koYDcH9e5MVTuwKG",
  "key13": "2bqT4gbittiV4CbcxrvLa3KJaMgocBr96pbkL7hGSy3BrQx9RRVWn7ZYdHKeGchDpqQfY3sWsYe6wuhXCNy8Nwn4",
  "key14": "5Wv7yJ2hE1uWsENpNMrAS8QA3hBDwEVPsRZ5qohCkh8ovK1wbyRK4bnvMjAPKT9hCKaacsAbLSpxd6xRZHNvB17u",
  "key15": "22ZDVLJAuAVYCNKEXxm2o1K83SMezEputjsiMYStGgRNdczR2Ft5FDYddjKC35TYUPKwfPZkZn9cPgptaP1i4xUP",
  "key16": "uCNZ8vfZo5PNq2Lhcg39JxQmNDvV3vfC5T96fqmDP1xxP7QDKekkFojPmhLWKkFA5RHcj1CBjYGwi35GKASsLDt",
  "key17": "53wf1hd3wgMPgHFy4TKVrnTbjqEg3fFY1eynmmTVKPJne2oAfqQTekcL9stAMM4pbxXbj6acTd97GxjgaifKtRRX",
  "key18": "3SuSreum8NJnPhvpqn6Dsoj7h2Pc9Yt91dLAqg4bdN1ToLMSi4SEkt9C1nApgfGWDDGK2i3h7nZnWEWscJciRpqy",
  "key19": "4cUUW4siEVeq4MGaYwiuchwbWecoaUki9G2w4a98xn7FKF3JRTQjd2oqYRBs496Guda6VMBPdpyZsLQkjhc52AtJ",
  "key20": "Hrk9upcafWzffy3tPvunTQCGo3CBffi2iyKZcoJCFX2GNVNwZHV3MU2AN3MqHn9fcycQSQeN9CWfLVUfrRqgjTh",
  "key21": "3Qy4RXw4irRiimV684HgB9mA1KpQPa6tHzWm2N4cS7TGAztJRtdNHWWrUJRbGoUZxBWfRJ1jtLD6cas39mKy839s",
  "key22": "CAkSUfpPe93MoTyKMsEWUaUwvbjfepPZyezYMLyZmBVEeKmNkssFLwUABrQ7xxMt6UQEg1B2vzeJ59ydm9gM9Pe",
  "key23": "36GETcNjDavuxCCEA3XcCGeMs7Q3bxF7rcFDkJ4Hg2yiabUR7462FEiJZGWSzHCkUpzovD9dkdfeuDdi8bH7vzWx",
  "key24": "4Jw7tWVLiqfWd3xmPvvyQsf2eYCxwvHrzi99Y98sEW573aWfCVp9CqqwGtcEUZEWkE96R478yPQJMdSv9tcpiZP7"
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
