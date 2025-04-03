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
    "2nQXLH7aLK8cotxc46csLrTeGkxi6hNf9by3KGG69XmSJ2uTXw6Tvz4Ynx5ABKRgWxxkDayq9qpJsibygj3nUh7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1DsGKzu4om3sZHKk9ryoACgLUhGAjFLL9VJ58h5re2BbhccvAirAqHPfCX5YUdmm4iNGJuvs8Dj6mCMhdwcquE",
  "key1": "5i7FDbXffCwjEWCGgkqq4oLCt3awn9Gz6A4FBVK63N3zR67FoRdK5rYTKeuRpCSzNmub4aifVizmxfTmEMP4K9r",
  "key2": "5VvRQQiNcXZKZfBbq5tcPqUzhNpvxXfQST27SK5eBioZCYJZcef1SRPaiJc27w1rMabxKze3anMnnyvuiCrrLBeL",
  "key3": "2GiUNTeKwJ8pEH79Fh9Qvsg1Miqn5GUCns2PpyJg3a4fa39bPtFHJdg3H1umBRRpeP2Xdm3wrvQ1VQvShR4yJ7f2",
  "key4": "33F5mT2H845tNRnZPSyqeKXNMHGxi7Y28Cpw9153SavHBDh85JuK2b81BQSDSLrkh5aZLYZhQChoXwDiJ66vDgq5",
  "key5": "5Eg4j7Lv5QJiG7MTr8fpK1ixuJZ7NePDz4sDKc5yizXspm9nyUAfgA9jcPqAdgQgyhnu7Ube5FwZ5kE4K9T2Hzhy",
  "key6": "2mFoAAuRrxmSnaCtFKV6xKZDgHMaBVDxhrqwHAwYG3jDZ6D5NDDHPnJyhihyEqvQvWGP3oAPrxyxYfJp9phb9Dw",
  "key7": "56c9AqAhwjaLyaF4JjskR6vY1n2Kh6JUWVezWQysKyxAdSbMMQNaVjozLpZW2i64J4uBzUG4E4LPBV68NFDLohf1",
  "key8": "2eEkNQnph7ssgdH4hEa2KBCgJgDhKRacNXeVTKoLVRoNNquyUzWD3uB7cQX5TujKRPLKK7gJpgbAiB4MvGzEmgKC",
  "key9": "PyejPyQfzhW1kJYuxLskaUWr5hb5Hx2TQVfGVDhiPefzRLwk8CzKNHJ7uZHAGBekxwwBCNzfavvGPAzwcHH6dEJ",
  "key10": "5ySAVZ5xA13Ash5HnGXuyA6rp6vG8fkDqGSEnvsfL4Pn6VrRbyzA6Tf2aRJvKGXn4JBZZxgcXsSrJ4z3i72mp8RV",
  "key11": "61CvDf5dJcvH9FHYbkiTB2jCFsXviZgywzLHCVCP3mp4FQyRei9HSMJW4JgzFXwb9RvovJpKCyvXsrjEt3GAechp",
  "key12": "5PzH3otcKVdkiC5DxgyhANBHVasT89KSbqNLL5zpMqsZjXo6j3WngqZBLFjuxBWWZxPwfxRoipyq9Lasf9pvH8e9",
  "key13": "4m1Zyee4jYqWXZ9pBDDabAHphkHmMeBY6XRauo2jvNvxMwA2JN4moHcjBjZ6ZMeCCkTeUpdkjLUZ8JviitzEuwSh",
  "key14": "5afZ9iLEFFb4cPXG9wreT4BoZbZk44iu5ekWXZwssLgwNHjpssVJpzE4gA4wTFApRS132k1W1QgtwaTEVV6Vr9Ud",
  "key15": "5DQuDanPjA77v4kMzPCrXyreFqhEVwsMqgPiLNGayGop4Z5t58ziHyPLhb3osPsqFF9GAJKeatV11psSTxWVHzva",
  "key16": "4woecV6rEB2YD9GdVsVVMznyWi4ouosQhkYSNazP4vWsR1HREuFvQ47R5x54s4cUUHfZpVajfztiBhEGzFi7rCUv",
  "key17": "59FykNmBYUUHZwKftdfVVHbkXgLjqn1BhzDEy63drK72aRNcdUKYAw7JE67GZAmQo7fwDNKmNxHPnq2NMirS7qrU",
  "key18": "3dqrRZshCWT87auRs8i7ZVNjza6Cyc2PEg9jq39J7Zskp7CjADJMzeThEU3UsVh5dj21aVNZCZysKT6NDPz1rFiY",
  "key19": "5mSB313bjs1J3tnoumRS8gf4VjwCN4ypGPiP9r6EZEyhMgQXcNZm4WHuU7afNGHf3pcjSqYXDuKk4h7Nmp1AHCDg",
  "key20": "4wCWV8KdmAEJ28Wd4oS1gZwWXmkithwCzbYNpr6B3UKBkD4HwewiNURPLJ1CHxS484Q4AxmK7ugdbnxnBQsBACPo",
  "key21": "1Sc5UDYgkvXsDXbubntnSgbGePFpBwT3SsNU3gTtAc9H4mybNCV7AhxbWTqKTWZubKpuLoQ4MNpTT6Xo7GN3VgF",
  "key22": "3UkRbi2TBtAK4Au9syaebfJh6Qv3fKHY6dmUGv2rtRgHkLCj74Rcdt4Zc25nWbqYvURhZ2jggdnnUZqPH8HcbuwR",
  "key23": "3D1MFtn5GUhDzeu9aiU4vKkHYqHN8ESYWdat2gL4wqRcvo4dv11rq2weAvgnpsGL9vM3PTze68fywEw5Co7Mhjr5",
  "key24": "3TyXqKsbxnaLMUVDbJ1fvo3rv5U14Lm7Sxk7ciwQkqUWQkjD6p7WifFx6ETUHSAXZsSN5pKp1Jpm5pZLWzvrqPNQ"
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
