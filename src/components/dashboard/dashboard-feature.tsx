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
    "45CgN8fNrTtWCnpAhKugusaSzrHLDL5w61wr8DnnggMpJjnqkZEvT19ZCSKAiKfDcFbEcfzrgpCby2nsJ4qYmriX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3dhs1MYzVQbdNWxocj6kByW5BqW7jU122WVA6BAai2PxAvZtncccwtrwddT6rgqMEeYWCFym9cFmHWFQcqqG4g",
  "key1": "5zPafhVFSwPGM4PReuEhY2vjGQzmcsfhxAU6e43QgNRvPiZfqMx7KZooBz6wp7LgNvqHDTX2wFpHT6hq63Y5qiy3",
  "key2": "3G8Sq7m5gLWWCeUcxr3n2P8zt2GuEhXwX8Dz3vGWpbj9WapBMJGTz9vsBggNyxANYbK4y5x7J8UbBfck6VMPhDZR",
  "key3": "3zQQx5xG8WRZYAVSSx8EiNizd4RCuJCHU6v4gifgcViScRuX664b2Lk7j33gT4fskSSwCHxUMrwm7LS7DBdYgZ7n",
  "key4": "3WXUZTTa8MFLinsLPXvLzPni4yAHkWBCpNronpTouj3Ph6sJrvVPwDvfJfmBxfiKJxP5aq3LQixcxNKp3UvtCpH8",
  "key5": "439zHh4GhUyW3XgiTHMjtnHLbz7Eur38ZZPxBRPmx6boeWZzxpJ9y34RxTtJxWqyxqnXnhUVUfpPTmQ4y58gN4Cn",
  "key6": "2g5vggKWR2HcbXXkUjWNvHqtTbHpxhz7GzZrcp3rHpo9GrfZ1jzRD6goQQMwcBnfvoQzGkWRNJSyht1nk5fAgVna",
  "key7": "5XxpfcPkFRF1cML3w6eP1V7HHb7AeDoCZcgaTWf2q4y3LzJZqXbUWMkdYUrHjZAW5pdTKRGxYXvCyw4scGzihNq6",
  "key8": "3LYcDBHa1aVsivFRBxtqwYVRgHGxTP4nZQSrYJEybnZyPyRYhCTDekLApUG4Kvuj9EVn3AuCAnE4rVrQSE9xbvSK",
  "key9": "5RvE82CadmKBbv7vaSBCW6JBtASVpaLN6eD3aeWyjsspjYuc5CDzpee5kwRvPgnGgTdW9iHfq4qDv9ssYrpi3WY4",
  "key10": "38LfQkNovRe5cxvrxmQPcHp4TDCwb4E1MmBRCag31UF8PUF99YSS8Ejby4skF2HoYpVdou26Z6fBXuzpFSsRWLgz",
  "key11": "5rd5Fc4oyoB3ne2huJAmAXDwDXC6nBBgKsmX252HcSmFXjJE39qPE1sns6QQTvkPekTE9tLGPkpgkwZMh4o3eHpE",
  "key12": "5bztkjNd9F2YfqZrexdHux2L4UnmoFGa7bcFocbz2buvvw3MAUKdbyQxu8u7A5gaPxCs9o7S3DHWtFj3AvY5Dfdr",
  "key13": "3pd2RA3SYAyXUSic9GzszQx23nnd57dXGLJHyYKkhQg7q8gQEXFCmkB6CFXzDqciX2HXHb8E5hrfXKvxJ4XgxZac",
  "key14": "3k3VJwR2ruwaiAbWWH2zGFNrMphzF7MXnXGKpxeVm7uijX7zP5bUKAvTRAWuQcmD6b6D1TiPLmFz23zCE4pcVanV",
  "key15": "tPDejXfCpvAVQKCn1DUEAxKyfdDvhH2foRqYVZyw1uXJkrNiRhNUNJrSDj8AkMhxyupq3nBSTyxqnjwkYfgeCHj",
  "key16": "3M62BWYeV1h6o12YkkK2zKJy3ZFtZ4AH86HKDrCwvHa6UF3RqvHHtsoakXhCRNHzLCWawdsRcBHVgi6mP6TUExEP",
  "key17": "2meseAdmA4oZLcjM13L1A8Afe1MKEcgDXRLLYP4CiVqvqgC7JJeUL7axKnW71mkdTLQqzwhduwwAj5qrZCEwSe59",
  "key18": "2pn99PAgRULKWmSnwMCG51vgBuqXUPygPWmkr6DLqZrNDMBvnk2yz3DpDaNjdrrUdnyJCsVmve4cohwuFiUNV9iq",
  "key19": "vFvLt6TJbyoahC4MN5rJNhNjV9kRc9WNLPQwjeNETZAyjZhTNqQKVftkKqvHYbqjzZ2oGYVt88Zrb8xJwo4dUbe",
  "key20": "EmHhKzwiyziGva99Ay4KbAg2XREpw4ybSo1YESF9utyf8627burUs2QVMVZEswUbgtLAnu4ZmWKe6ognTaYnWVT",
  "key21": "5C66Apar8attH5DuTHs6pxvkLuVUL8trQg5bRx75kh3rmNae6F6Yz3D6YHk263hskE5uxPGyqKRTYE8rdjQsvpuL",
  "key22": "67D2TUnTjEurQXJffRa1A4SR4iP4hBSz3vZpXpqtwnuBJyg5kXTd6w6Qzz2Xd7ttHNX4r8ErW2YtX7se1qQJkov4",
  "key23": "HvBooQTNxLcs5trnG8P95YZvHDubyjiqN7mpPDpZtZj1jDuUtJpV1wPd6ALmUEsRpyzeDMr5GpFqxGZQomzHYgq",
  "key24": "2ZmbPcs3PenpmwMn7BHdtKdC4GJQcPSM9UaejBv6SjUV7cXiQeYKaRyRPGAtpuCHdFwka4pXLH3feEy3414GUHf",
  "key25": "21ZFPkqGu3b3QYqXn8oZEbojMkzCUMf7TkmBqtj9dKQYametd63sPUU4Qw5oKyF3gyQsD2tJQ756Fjidsp2KW6JF",
  "key26": "br3C7MVVLsgXaYSXsqH1TsJyWShZ4uTZNmw2GS21Ub7gB5scYTYbHPt95hnzjSYojdH3KbWR5PMUs9rSzAQTHYo",
  "key27": "2VDTpebBkoP4o8bkkVSikhetaD41eQscRmGaF8qW9JzfoheaB8xb34tQ8VXraD7DjTX9xWwf1Mo26bNtzaagSMRG",
  "key28": "4SD2gw2FrAKxgr89UKaDeboSERmpJLEnCNap8BATnHNKBm2MHCxn8JxDhQF8SUKuzKxJSdAJk5rSTiSzhLHoynxZ",
  "key29": "4ixe3QGPCnLwRMuMF4PBEmrCYBGHiy6SQKGjiirmLj2kWW9vX1bM6iCJQC7xMAyz7nT7bqbofJeTN6HJGo9UpqcG",
  "key30": "63Q5X2ryzsVCMRzAAUr4ETmq5sknVQUDXNBFyZfznnykEMJBAKySFAV5Ty5czEwHdDthjq16kFpS7PTw9CZyKFeJ",
  "key31": "FTczjFauK3Dsp3Qv5eqtAGUurddjpXx8R9cT2vGbGV7SiJ1vKtsKZF3bvaxEh1WAhjUchHEP2fbJQbb5Jw89wKm",
  "key32": "cvPJiTSSmDB12MhmYoTmEGZk9RmwKjitGkWWtWRdNZa7MxBffmFScTqn4p9DgC4U21dJJveJytAssFVY7gffapx",
  "key33": "3rFeZHCHoxVaEaZnSsVudBGEcutTXcoMc1SpkMutbzxKBzpA1WgZnuUt7YuXGFGBmWr3P7i3djfPDxpkHuVNbioR",
  "key34": "vrjj4KVvBCUF3rDUgxAiurdQy67Ag2VnYBheTpzJSEuaLtEMJmeMnF8KHugDBkYLz99bYSKkvkx4sfNz2A4BEvw",
  "key35": "26yESRJ2hMZhMA9GPHXkr4q9dUCKJH5ikrW1omNVc87Lx2kkUYb4J2M8NuZk1eeVzQRp4h7jdsxttdaZTm3dgeZc",
  "key36": "T6ZewgxZSxeRCfEm7yjJ3fF8VEZyLheSoAsEiP4piG9d12Zscww6175yMkRZkjs48z4PzFN1a5s6sj815YVb27k",
  "key37": "4gV38Sqjf27VotPHvBVEzok1ZL6nhazQPZN31RZT8TJVM3Xyi9M5jLEQb9Qbr4eMyHVRHtvburpBJkk5sLmBHici",
  "key38": "476iCzKdFt4pNosVfH8Rmy6VrfdhP8WrSRDjkZ6fW6MiGkMcbuJrk9B6CcoTJcHBybe7CLQhy843kmuZZcS1Wogm",
  "key39": "3GXJoVgo1oV1YRWDKbkj5ZrTM6ZZkA6V5pEymJ5T3wiWW5WkhPUZLZQDi6Ky4sp9xmE2pznofA4o2mhhaqynNL89"
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
