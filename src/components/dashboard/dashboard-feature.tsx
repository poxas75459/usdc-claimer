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
    "3XV8nqikDMLUdXyqSwckjFH7T9sdDQ9VdubTjQ6rk3USDzCLDWunKwYFpJxc6QSGCv8yHpgwV4XavY1peqNULMKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcGGfL2PJj5kHKgfSKTciLRF5yXHqYXPVjX7vXAow3462eWhCRzQAAjLHgpmBVM6KRkwmwP3EscmkHfrwsqdMpM",
  "key1": "3YtL9XRdAsomgqxSjaHkkFdFnhngqSHR3q3e7E8PtVNVHtE9HPiZEoDzzTQy1jYJxtWz8htAaPuuNBTkvKZsMcTp",
  "key2": "2ekjmZ2EyzMrTB848CRb9YgHjVFFBXoYZ9KVYMc8aumn48yqaiyeYsZ9aRhehn1dFEaXrYD1ZrkbFeqguXdT8yg4",
  "key3": "5AErAjFcL4q3NH58We2LL52hWTj8NzmV8LWW65btDEapmDNcnrprQFzsFjf2uuxMt5dhAmgHavcuatbEC7EQViF5",
  "key4": "47fCCYHf2aJfsHRZynF9hS89uwjqcJoAHGNiwE5uW6mNRbP52tk3awvuoCpH7qtW4nriNt5vR9SRobRFmHZqX9iH",
  "key5": "2FzNwNeQ8HrW8M2jWxzkR1WYf4HcmZugxe7Kmf5ByK48GEagtu3t77YCdaTuaVs75wCFLffoQyViTWiuTk9TaPd9",
  "key6": "BNZjuUaGzQzgg2EvQMyhKARmFhcDPtM58wcQ3dxeFguFNZXjnYeWYckPrBBvYwggVM3f9eBDWEvoyrRwJtTuXf8",
  "key7": "ybyeeZhhfQbUC41zhuxPaun777XkuoCh7spvjXdP38Byjdd8XjH67MWMjnzoQYRs6XxRiZ4nrrmCWVyearJgZuM",
  "key8": "5vQZ96ceVSgWz7FtWVPdz9Pty9NTPQtt8nCXDkn7rVV8UMMLwTeUAoTPFNdYa5o3MbQGkmQNGRoHvtY1tSHbCyfF",
  "key9": "xjwCotPwQ8gqjdsL4AdJ5Png65c5mgVN1Bs4oke7zu39hc7oDMVbwvjGChr9FQcSrBvLYwzfz2a5MqLRdSzkvs6",
  "key10": "26dV8Mz6Tf72hVXUcfQkfUMXr76WjvRqVFbbRZXqn71x2L9s16xHekLGbbkhHykxJpLzgnqN3TAukUvLVFj15jtZ",
  "key11": "5tyiT4HkgKGSxr2ynD1hKiyAfULCUHjZNVyVC9XDE8GiBRjzRR5Zuz8EvWEFH53MD63pArTB3F2m9w8Yw39oDZAP",
  "key12": "AHT4M9693LfTGvSSFttVwg6mrnJnZWLWUjbjC8YdrcvbV59ZJBLbgUKPBs2Rmr2CW5JnW1VC8sDTZ4tXrEEaWTv",
  "key13": "3m66fidYpGhvf7Jg9NxcYDHiMGwykh4jU7AvLVcvtm1qrG14STr149SupL7MTMyrm8BAEydaofnjdweogDuztygB",
  "key14": "2UDirMTxGgPvgR2mgq7Vx2ja5mC7ZXH9JEKAwdfxt5fa7Zu24C14BSXC9uY86eiE7W5NYR26xYCBKaEWAU2EZtfM",
  "key15": "5SVCZoEtwqkX3mvptWkoHNeD9EqDsqmFQ3XRaVjpZv4Lj3njQ58Ltt2fRVWrJpW7MVt6QKDsRT84Zuqym1mxyH96",
  "key16": "4JLJkrPNNBCFVSUfvax9ZVRpo1uMjD17seSXLgi7urL3jGvzWy5e7rcsyXfL46paxME3mQgn3YUcPpuySnVktnCR",
  "key17": "ZMX6p5RFwoBQhGTT6etfbaitN6EJRYtvYWTiFyjsXRWmVeWq7BhvDRszE2RET6nbnb5jnHMoC8rrTmP8RVpJjbW",
  "key18": "4fxS9EJVwzXQBFHKRQsANvKopxwhoy4RhDu9xuh7b8HUxzjt4RQEqY4JgSgn6mPQtTudaFji5X4a1kYykP3Q992H",
  "key19": "3YuXLdGvLUfUqtRNiub2YPa5xT9opkFZmRb4QjQMaLNuAhJjzYnGLStiWeHx7srkmkdf2PPBRF8Cjksgj6ENdfpk",
  "key20": "4AVV3fwYAKVd8xR4wzysVcMcbnZuMaTnoFSVSysB6r4HjXEVSB8w1zqBh5KamB2LYwAXK7cvPGvgr4H7JpJPzS5C",
  "key21": "2H7Amw36k5E4ScrFo8JMag49txsWDjFYKjaqYT7itagsdt2wW55aiEoQ5bqZVHo4e7aXTtrou5xPuwCmHsYXeJEu",
  "key22": "5wTt6BPfj6yhFU84wWtgXmA6JbVrhZbMoM8qtw7zn3qUrQPezTMsynmjmH8bL24fKxVXveeYCbAGut5zHN5jHTS7",
  "key23": "2AH4yvKYvWbmhfvgtaiJqvPKnhq7hmARBsTV5NaNUSe3ySYE2q1evmKormsmW1kMUWCQy9LDuykx2DYaHKUADxri",
  "key24": "5qv88FfXjFViRtazTiKFXmSwyQhgXa6PZiS9ZwGS11pNwsdoSdV8vzicR3oTT94h2qYJCVAWhrfkNE5T4VvxZTBC",
  "key25": "5KyqwnyKewuakc4FE2WHD3w1qDxgdwVrEde3D7xp8bPt8tEv7ZvSaJ2pCbNBztowPU6w6CRaUZhUhxS1n87gMit3",
  "key26": "PXggW35bHW9SDXgU8xXh1qgEGiqnSXYGNz3gHoZefVmrKax1Wea8thN5TJXr1qqjL6vb8pf8BTiDYkjDxfveRZ9",
  "key27": "2bHjadaJbrCzToWqrR7juL49Q8f8R6N7SFobFKKxtamnJv7ZtMCy9qsY6eBE1hBdNUThtHPAwiurUN4BKS1FaEMG",
  "key28": "TJkkTv3H1zNdC7Xu2jVAZpd3kce7x27ji2QWgYLa88Mvk9UmrumtarXynv6Cy9SRqQhETKW62CF3bc4ottSsia8",
  "key29": "3vQnVLV1FhtDucqVofWjA2LR6WNyPXUw7d37o6GqXBqAZtWAC5bERhrcDSoxiMhsCGVmbpLA9x9cdBhT2fBxb5SD",
  "key30": "5YNRbp59PVjJymmw6eg2d4bp8VosrbZv48ama5iHZCn3SBUqCQx8hNCGATGAJho6Amc4U7TUwVjvFawSBhwWrbZS",
  "key31": "3wtwKsyKQSB7ropYQX9R2iRSaQk3LnJ5fnztvMAMtoQWzR21PM9p8nbxzVmBVP8zsRRWtaojFKjfByF7MqGEudxV",
  "key32": "218iMuch6tdRPT1ZVnwhjesDhVGTxEPuM2bUJ7CJ7r6PWXWu6R5gzeHFWPUbsWXghMzfu4KnqgfCfdA9Y1qyEns4",
  "key33": "4WGqXoRQyD5DA83V67GUS4RMMdoZJ2JnfAn2zpgDSDmh5Lu4zoZ3iY9BY2mM8mhvQkk657ZNrc9Zf9jUdrv92ZuG",
  "key34": "3fsz6AcHV7dpg62bepvqQXy8uPrgdwnr3mYaJBCktJpPxjHzWqvoPB5m61nmBkP3rNJKNA1pFjkog8fAV51YBgaQ"
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
