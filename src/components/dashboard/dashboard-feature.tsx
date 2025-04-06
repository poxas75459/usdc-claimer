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
    "3FtaR2n8k18csAZJKwk2rXMAreY9gLWnade7Gij1o5bq7m1y682q3K1gukNpX2Nb8hnDauuS1kRS1s23xVuPJEzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37KqTey3qhcpL7mGFFBwt8YXGg53WMXJ2HtBtS29E1XCX4PjCnZu2osW9gmV2uUoEMz6kZ58Eqb5RwygtoG4rzdx",
  "key1": "5DWzQZT1pnq91caRecTG8ikwM7kJs7ZZdEoz6HBNKCKo4d3QvWbxnvbrpTy9Qg12fCQypct3aEe3Tn51Sj7cixVK",
  "key2": "3niUL696HdbcubKKvtTCew7TRDvwvtM8ZXHxMKEnh5JQNrgdVkdMzj7JSYdCZLBuMtTNuqTc7BeA3mHb4X5Wtadd",
  "key3": "4d42praMQsGPK8mWCG5sgkdmNALkAsjW6uy81of9pfUYStEGPDWMz5nkGsyjHat8o3eSH6wkeVuCXNWKdTwwbAqF",
  "key4": "aA8kHvmAgBw34dEoy4adRg665R7ADZCB2rfaAhALuUBxDPdE8Xn6F4MXqazKoNdtNGytXjd3qdEHQ9JBnZaQWSh",
  "key5": "2oKxJWVvrBw33jeUdEvkGEDrqvVaao8JJrZKJscyVCkBPrupj3BkKpx4eLmgPqk8J3GbAuYiZcAJXR74zYdQVYSd",
  "key6": "5UN3P8KyABj7f8Bn9pDCVG7h6dkjpUWS7bwHbMH1y8YahqC1q5TTPbDua8xmjQ2AwL3Yhi1AsCJdu3WJkGAs5p9r",
  "key7": "4Ut66M2azVJ2EiYEcGqc1TgNZK8CJS2LZVYubvzqYEEXdcNQj4xtPqXWPpUAn6t9FkLpUPE2RoxiWBUw8aRePPJp",
  "key8": "55CRkNEqR9568i5XB4UbjRwiYRJkUUrASRZHKBaTRuSdDJZoe3HbagkhQj9hG7D6S1yWCMCcnxWcmwZ1hGTeTDS4",
  "key9": "2tKx91tFyYxPYZjNqeqRpoMXSPKngyk42wBfx12gbRo1LtYsC5dPwakBimR9naBUbNN547FqG7EGyyS1AoTR8pB1",
  "key10": "51w4pyz7La8MWzKLX5UaP9RmwxSWcBttoUzGSrfNDnHBEFjKRPQMeJ8qovnkrA5rCEVz6YtXU8ue9R1P3vUbGPY8",
  "key11": "2heABZeJQvRZUDL8AjJQ5HeXwodBzrTrUrz6D8msPxjisWCbgZHbweeqzQW9Y4XpX9VPEwyZaBp1azBWruJg9Yqn",
  "key12": "3jwBcqinEDhDBtj7RvR7B6Wybkaq4kmMQWUFW6BqGEoV5oo9YQ5abTWpf9TBAHqrCjQR3XMWgMUWE6hvuPzAcXAD",
  "key13": "5zfGLxqsLc3UsVAk3E35fjdZJGViM9aFEBa8Gt4ZYvbanxSsTCwY3udX95Hw57KSuagtL7kfRwGzK3UgEfBYX49N",
  "key14": "3DRxXdbHBkUVAYBaHpEwJrhpRnD6cArLFz8BvSuP3TEgW4fDPSwEMruKoQ4N7ZYDunePQfYZaeBR1r8kNpGx9hsi",
  "key15": "3e4AsCKUhUycsjcGviTrCNJqLfEx98nyck2E6FvrEgTEjJXp9NcNgUKJugRmkCFKju1nFNozrnrCQCW3Z9eU9iTF",
  "key16": "3qeoc9Vde55b8XHRLk2Nc3oSCevT4eHHK26kj8xTxctoYWjbmkLnYoXGaUh39fwKzMEktM7NBVcxg7HMugFcckZ4",
  "key17": "2yK689fwv61k83stydPmcHPoAKuCNKPgHFF3z2WK6gaKffhBa1Es3zQQnowiPpXym9Xj7nd58AnTUS9mwgqLvS4b",
  "key18": "2bN6u7MU1ULSR2EBjm5G7RCmR1e9WN3YM7iGALh7k58UpUD58wbfN7tRzjXSJeN54txBFCnkUtYzAjQRT8JQ5QDr",
  "key19": "1Y9qDEqHsevo591tbm6sX9Gm2bTVDzpJ1444tLiWiZWQN8txayLymVwGXCFso9RhwF1YEXJHMyAEc1iQbN7Tdao",
  "key20": "WzS6MKDfY8VFAGffjXRbh1hRoRwT2SvPEKQ4bYkPZTFLAPB7YY56AvRmGgv3sSmSyoaKkWGpCR2J5Tq7K2HRamn",
  "key21": "5MDLt87J96Tx6LhcitixwgHY49yvNibDVcepBXNc31ENBFJGQF7VmN7PHJPLHxhd6Z4iH53M3fTZvonAiRr8X5Sq",
  "key22": "3ggAqBLge9ANcBidDNwTphG29yhLgrYXoMfqoCW5LaGQiZ4TXLWYKAK2iKwzzvK6i6DC9iKmp18sg4bwyADpiqBj",
  "key23": "TpGcTmYtL4TXus7SFr98j1EiZHfw1AtkiL9RYziQFZ9wKdDemAzp54dtTzpf8D5tBcqigDANSUxy55Rcwa41rTS",
  "key24": "4AjE7xaafXJAYa5Wa524ZVKqhTkS62ywSCURWpUBkYVEBomLvgHi21P6KeFggNef4PTXD1NwpbsZRYfWnP1NWcNZ",
  "key25": "2uYn6p3TJye26weGvh1dYWoqRFvPgTJE3X65LRCFJESDqgtqdZSTMnqGR9qeXXBXbnxhc8n9F1dgnbZnhnox72Dz",
  "key26": "3bQQ1MrLwWiUm3mBLfSvQkBU3hhQMzeCRyKQZhCKUoYVqZ3M2rAbatfMNkxk8xuM2Dupd9EJKmK4dYXy6KVYy77m",
  "key27": "46w4dYFGyYfdL8NTsayeWjJ9Uts4eqTSVUnTq4Gjy3VwgwXYNBRh5nd9wG6AfPMdZgrDKs71a3rTUX2kxG7Mmpr4",
  "key28": "3VqfRkMo6cbrZqdL7kLos7VrciqrTJsnd6y4DXPywM4o6p9oYQVGVAdHZ4APwJDEJeq5NwQTzcSWsP2Nc8432kfa",
  "key29": "3HEhpf59sGAKasCjWy6owVk3MMGxtP5h4Les1GkyXEc33rPeXqF6YyHDTP6h6TTYtV7N7XUUBoex2yBVzaLHnzhw",
  "key30": "5YaRgMDSnSoCGG148UqnTm2ZDgaLHPRXX4qhZ45ekbbGguWxnM5UgAqvL8S7edYSYKdvvAzvujKC351KnhTrM3Mo",
  "key31": "5rXXecV5TCinzMKrLy83C786jRtpjBkix4e21U8cNJfDVck5B9XSnpsq9nrFgPP3JBDNyJbvWwiduPA4ZGpjZ7Hp",
  "key32": "CNoYPofVYmWwq4KoXh12RBNxHTe6pkdywPfMpeWsSPLLBtHcCNPByogMTjH8sscxiUM2G8CVpKmHkfNTsm2Byk8",
  "key33": "4m7uF9CnFK18PT1zaY359zo1BWMewrtZqn8smKQ5YtCLPBAtnSoNtKMJQeSRWtPMQeD1D9PgkWUGnGZpu5jLao2G",
  "key34": "2DuYCGuwZW5UZwwPhTw5GS8GoW9venMhHZ1ygHwZ9sByu5KnnaTg7oWpzRD1gJTNLXqMMykCaCaxvRAiTzCw9DnY",
  "key35": "33ud2NQjTFN3h1X4FU9R69uG8SvKmwsVtiyJh3feHryb7T8sFmuYQqEdggQitB1dx7GUM3hfymiUwF6exr5x1aHU",
  "key36": "4ehL1WBLzjBgiE5NyYhLwizaJVfHBAG4rNrZ4mCgvfGgqERzi5kj6ZgiaW4HZUkUfQn9jLqL6KuCUPvbnDbdgNtu",
  "key37": "64UWErFZ2qZa8rpHqmEndLqavF6LtzL1JVJAwchVHVFggfr5VULEQexMB39CKoKfk1LAHiUR1SMpZT1ZDNGud1yB",
  "key38": "5V7fd5SGnVzSDeuFUxCx9C6RJ3xgeP7FpptEaFX7CiCZwkqcbhZF8mgRKKgWnnZHVpzyhXBaCbZSvrE4gQqHsAvQ",
  "key39": "27XK5GFCq5YvwKiigQtvnZz8CZUTMyekANpPfzrGFoZbhDiSZxaNBhC1qafF4qcmWhZfCNebMnVZAz26gp3CFWni"
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
