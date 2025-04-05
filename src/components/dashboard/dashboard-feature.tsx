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
    "21t7vCvGE8FGznKenkuX4yGpPp6PwKjVKXghaARoDmqQCeMR3YiZttnpBANtkBiBoXRuAyoeLLBzhLroHzbmqNRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsnJP5xWijPzDwY8ZprtfEutUbQVb6LYLyvgLqHuxBsM6njmJJYpAfPCE5otanzW3CLmvWZ8TJMw9vj51fyT1R3",
  "key1": "p6FiBomrsz8jhuJd1H1thLq2ZcPnRxs2298oPzMxrWbfVaYEutghegszfCcNin95xBGs58Xyh31q3WfkSNkbgbD",
  "key2": "2vsNqfchWCE146ghJe4cZGDYWHMVjs1H6JhJKNjapFXS4rN3GDM6BPRF4poPzpbq5aYRJgWer815p3FT3RD3E9R7",
  "key3": "oMhp4tjWjrj1n8A9BWYHG62pCNV5QHbe3tVfrBEkQEQkhHopxmLFAaeyis4b4TVyboHE7p2odF43UGK4yKUrzhv",
  "key4": "2bUaxExLWzcUGTYYhnetVoWHhGkyqvZ8hF9jbB9X8p7AgoWFSjakoiz7AK8LHsTgXG5uJAaVPhNp7WdRi42iskQA",
  "key5": "ddEY3p4XCPtWhUjWfJRpWQpqpWcD1fEmo2FMDKRiPoXmF7tnHnRvpPTzWa73uWfvNkGFZ5anAmayHVvdokBUfUS",
  "key6": "3zxgdREfzWmB4ajeNKyfuzn7vMuiMLFh87SNgZXZNXmpEYHuSERHq5VNpYt7dqbPL4ejkmE9mzs23HNEUjrSsW8H",
  "key7": "566Jfuyq58kPBfpQKfa3DCUajAK2rHUNogjqFA3EXnyPxsfSLF3HJaB8tmhXbm9iAQce8z9F4t1rRab2BJDHGxY4",
  "key8": "5drKUxkDgwPEH1X5fet9U85QeV36XXMgoQBcQtyRw3io2aC4wZd34N1rPYdZoQG7NTqXAun9UcVDBiycLyjjGorc",
  "key9": "3wXxuXj6QHPaXs6a683A8idNDd1BuwqGYcZgVefhJdzXxs2im7pcXXux6bhCjtHUZJWpMXwa3eWDhxLSRXgP8NHd",
  "key10": "xeY74BTdTh9uhSJL3rJ6mNvaPvryAc9jb7oC6c5kmDbekSY8etsWNsGzGbR52RZ9CE2gJMiEw1g4xgbJUQhYhfx",
  "key11": "2cDLw7nF637XXYuPNvPnW6e5838NYZ96Mtyi25yhqmVXE42jm3qsrjob7S4dXaanqGpzn1DRJdpwYkgE82svV5EZ",
  "key12": "5km6v2M1vAQJ4p5dxqPKkP9USUmK92V9j1L22aYucvWBYiGKhC3AcXgik1psGw222xrrnGfgTJjqwwY3xcdxphw1",
  "key13": "bCzkE1bEhBTzoDaHo9K1rFQb92CReUAkyEY51ZFL4Ufin8ZG2K3zcKPGSAYnGi9vfSZ5XCFzRqRx7JBjTwc3Exb",
  "key14": "2RunmSfw9q3SZuBLBuNEL9ha8JzgfryPUwdVaH9TMtbWaVykDHRH71Hk5z8r6hSCxjVAaAGs2KLVXMYRykbvyhnJ",
  "key15": "2jgcAKVncYKsfHFenUiXs6w4uVCKg4QNrc2CAugz1bgRvqegKDS4qmtPjJid1UcQwfcUSrgb2GLb3srVBraoiPaN",
  "key16": "3rhUaFeEs4Nv3AaTJTs4UWJ7icmA4B8o31yjRTLUDCXxPj5GNFfaJQjmSh6cHPCoEKbPahu7NcZmEh665SutVrFV",
  "key17": "58G11irzHF2FaK7hbB4XqTxUy59a4wE8iAJk7x1emVPtrPZNBjQY4HqLP7QXPh7P2HoUKhfVXzNSYjStsefge3sa",
  "key18": "23Vkydu1dc9LvLJbGLMD6rq3fmWkDFXRPAMtz7SDvk72jDz4gm3xZnyvwPhx9djKysQKZNJdK4Q5dMQsL8yd6QDe",
  "key19": "5MiomFYpAz9RGUNFLSPC5JQNA1hWo1XyX796zeNpjfNRLQNMceuiqdRzoHK2yWXKHeACXP6moxQE8Wmuz1Cx4Wtq",
  "key20": "2RivVhbMVrdxGbMcvbZohcE74SjWNWKWFRzZvM7dSiVpggjMMYNi21Wf5WcSWLLwuxSsMaYHyBuzPAJ8Aj8nF3Hi",
  "key21": "27PtpKtEYJDn8MDpXUxHKhUc7FJby5oaBn3jXtao9WmShUpVfyR96yv5bAf1KR31NiEFZEy474gFTGmVybabnimN",
  "key22": "2LBFhKRuZnAscHnaQY19M9E3iVXPcgXV573aRyNjGmKBMH1Y3Yjq5HtzXHA1nmJc3fq4zBsHM2NjRbfTQhawdQJs",
  "key23": "FJto9yLe8GRWpcBQ2zNcmh1JDiTbjoYYmiTid4FLMcsMtzY8MYDMVfT2qq3FaFQTVwty42iiGwUpLinmfrNhkXc",
  "key24": "4vj3W3amM4tZzo6VTbPLWozyNyx55HvyxGGDvaCPYZZXRaZW1K8i2865T7ZjkW46VkLZAZgEmGDCQTRMVWnMnH1K",
  "key25": "5ua96L58JWUrtuZ8Xf34fLGKjNTzq9NwjSagvgG9HQhDLrPpBv816VNtUDGq6hPbVKD75yVnpA5y4aU1Ds7akNPP",
  "key26": "5Jf6mheDVqzSB6RgkNEFtw7hncmoM5HHYFFuZ3qtrWSq9d9V5pnxz7eP3aXCGxP47pHdkjdThRMJXFz43CAPumvM",
  "key27": "2aT54FJwc5Dr3vwutEG6kjwz1ernVQMYdd6TeCEERCYZAsb1AgHe2p4H9YYVpj2X6dxELDqzUS6R4kUTjnDqDZf7",
  "key28": "5PGoKq3pXMTtcGd785kcmNCUCEHLvcb6nhsz16pDZouQcyqcpKxHuuV7VmSKiXCtiyHdHhXhEgnCdBzDmYHfeWkv",
  "key29": "5ABZbNNeAZxikqrPasFJ7vtEUj6j3M6jfHrJZ8qKZWLGw9D4m5D2JKvF6rhyitmwSukqYikqye96PhyQqQFaNP7c",
  "key30": "cdLKdwJ319L3wk5c5H8L5M1xCaHxD82USRHqiAXeNcZoAd3GNafsL2mLphca9DWzxzbEXauRXhwLcigEMcBNP8K",
  "key31": "5tz3XX7ythr2pncvjViwmL2PmLaJUSWUgXeMEyqUwiGygnmEpm1KniugPTdKFNHiu6N965EEqHWuNTaUxD8Hiamj",
  "key32": "J1xT31S7idUpyDfqi3de8SGaX541y4meUu1F3gYNz6tzZnHtQD8Twv41MDdc4Pcsiof6Loo3AZ6GdzhTBvzo28Z",
  "key33": "5jS1oZa2EgyEHv5udnVfJVyA1g9gEn7SWXot9NEZQK2S2gQ8nzrByLvhyXN2hAtaNU94NZ5t4JQZw45DK9xH3gDA",
  "key34": "4y264mqgwALLWGZVLaKxDqceaumCimiz24yo9fgTqVsvEhtzXSieTLz9yaLVFencYumv3LN4wsG5n11qootu4hDh",
  "key35": "hTHA1MLFEQyjUFKPWkvTB4nDzmGehe6gwVYqrKmRKMbbKyKNRDmGZN8hkJdmff1srkAejVebg9nDv8P2a8tPvdo",
  "key36": "3ugmMVcVCVaY69AND12nec1QbgenNd5UgYwGKi7VYx3fHMLzatzM7NSxqodJZe91Lh1KwNxvL7Sf4ad7aYvULwXr",
  "key37": "62uV6EJvjHdkPdvoMrWdfgw9GNPECT3uq7Kshcuphwaqjp974X2Q1sLqcanFF7cEDEzNfjrX1UYopJBATn7pjxVo",
  "key38": "nkgfgTqzvVbZoRhs41jWjnN1Z1SU4t3Z8ByLfcybisp5GftbcvHfLKaUEjGPiCV597MaBT5NzaUh1CwietBjrCW",
  "key39": "5AY5tx3B3moBzEEpCYWEYwVXJf76Qc7zoPjReNggjwoTZ2nDiBUujXax67yUGXG5EdAoE9SZJomH35ca5ph5P6vD",
  "key40": "3rwdFJadedm3jX2BLuSWu1ZG1h8NBQnDUg4oFULbvjRmTx9VkJybEdbsmfUak3kGSJTUxPsx2B1Ac7EQ325edX2G",
  "key41": "2WJzAqTFcYKSAk5FNqXCoHkgYg9YvbqMykSxRiLMebaAGX8MGDPMCbR27tn4v7La26pAk79ZA5PEZB4vsyoSh7L",
  "key42": "5PZ9tVsD7cCxoWEL1wdHdDvwmG2d3QPuB9zitg4s9rN2XuyN5Phyy4vscJgqxh8vcP6fAJBcXWvSAFmLDs9cyr2N",
  "key43": "3oy8U8hFEvBDA6D5MkxpfQjcgC7DpxzwTc7qUa7fLmN7VuG3URb1yzNWP9RyqAVFk5C9xrvP8oj7jjXYxu4U7i9L",
  "key44": "m9dGyueoyun2y9ntX4W6c5qDoZLEBHv8LT2NjjLyyhbkedDq7PhDaxHDrah8QJ1febwEYkeoSmW3RRqHJEsKAt6",
  "key45": "4PznxiV9PQ4Q4exn3mP9pqY2J3Q4X3Qq8pY7ZhghJ6cX2LXjKu9jEkYmdtsbfGJSWZ9HvKe9eLM5yoXfg4f1Zu4h",
  "key46": "3pR1kp6hnCnbMJrx2FMYBuEKhkNfcwY3xEbj88w7wRyAacKZAopcnTpvB3YYr5WCGebxLvVDfdhPvZaxfHpwzDC8",
  "key47": "3Ac4TwrQWDTwcKd8uKh3k4Jt3whwj8Z75eXBNvrcfonxVxTyVDgQVXiz4ZVZp4CSVVbQNMDQxNaowtA5fWurCsbN",
  "key48": "3tq1A16Sq7bFG7ZivM4bEKxWsQRvBRSECX79VwEaYfW5gm15ktqzLMNejHMJLLVmB9TgufWtKwtmUdg7mBww7Q4D"
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
