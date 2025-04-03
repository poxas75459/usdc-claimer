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
    "ghNPrwkwHw3UReDe9973JQAaAb3tRtqWtLJkG5hDyeFz7paQSDb4CVQB1636Cwch19eC8kFQGZQL8L5Kv6QVmuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S27Rva1ycy9y317uZ7nfQX3D3gBXAfn5XFhK6Gym65WScF2xCFyS6Yw9eBSNsMdjFdZCi6HEjJcJmGzhYduvzMK",
  "key1": "4X3AubQy73pG4YCsyDsWpfzgEKy1h3WyunvRVmX42tNQJQJY5udXA72SZLUG1Vo5LVVDFzFG8xzNqqXQCcGCHpAV",
  "key2": "5zofBrzRFkuennTPTgWoYR9XF1JtDH9DQoErc6J9Jtkz1wfVN2e4NrEQE85cdzW8WqfnMPQz6Sy5jMYFRGbEqW6C",
  "key3": "3n6s65UDa1itwVhbXauBtgBvPG13zov1SfVuXFxKEa4gYkc1e6MYgHHC5dnhzhG3VGkzv32pjFX8YDc8eZX6AyKf",
  "key4": "2Qq3fRbS8GbTLpsLNjpcBg1VtFbF3NK86KrbjXzv4pW4ZJyoH1rKdCH7KPLYc1XM6CjvWfKntHu4KmbTo1XaABDC",
  "key5": "HoEt68LyQwUpwKQZL7orJDBfK3u7i7hPQDHAjugoLQxJmVcTvcm8zEf4aJfiiUjy3Bhcg2US8XKupt48qVFddGf",
  "key6": "35MeMMGZXthYHRdJrP6gkgBw8ZKGxZF2kNDq5Pg2gUF7nr45H8AnZ7kfiZcxJt9UoFkgCFu5i31ZbtyDkQtNW5v5",
  "key7": "4rUubEMcoFELYcFMgbMZJc3SQw9gGuue2oncrdE6Xu2Pt2u4tGFmL5UYYQwR5UyiCg687AZ2jF6bwEnpP1VUXDWx",
  "key8": "4TSy88iLGihs5Zibw3Q9evSiso2P6LZbcr2s265mGeSdyWAJyTo8xQLaoCoPFjWsm3hALTa3JaCM6CamU1gGsZoE",
  "key9": "2yzR47eKBocH3YYT1gTcEu51P1YM9TR81FdDvZwmzDEQGj75WE5rzhZ7F4xL4wgCV9sn2BuB8V6hiNBkBDREnhGg",
  "key10": "29iYuXzNfBCm2CYRfHThp56g3Jk8Qjs72qXvkxZoKtJaGQqwyTYL5JK8omAXm9F2aEX2ys1HqCCcv1Y4msqGxhmx",
  "key11": "fpE6yD6nbcqN7cCEN4UW6Me58RbxjREkeNgaWsmCQpx7KhTUnJNKWiQb8vJM9gecg7kYkYrLCRYD4cP99HAxe5L",
  "key12": "4Ln4FhFt6fnvpisTzXcWwQPc78ZNCLJowPKhZJxvUs9KZpSsxtJrJK1PcsxNh2xMuCKGPe6tNZ3VsQLeESrTRtFv",
  "key13": "2FLWjXyBNf6u8HsA6rZXowtV4SePLsxMZeV9SbotCn8Rp5SdRgWPVRcRDav6KvJpTpGfJ5rAtorH2UzLrs5oC86D",
  "key14": "4MMAYw3KWTWdaqCpbTRHaHr1iqbPTvUNLDhkicaVFCfuNs3uR3Nnp2XA9s9ZpkjQLnbXyUCNV78DzSiUGfsEC6Yw",
  "key15": "o41R9jc3ux2Dc2NAXUu3a5PdB1w9hv5fS8whEoFGiFEWWfLGjGJuKNkyHM4D65p6LmJzHejYmQTGx1TrAMgquWV",
  "key16": "HETSEfZqjcHaD2EuZMMUzsKwwMqxjWHcFvPWgEP3pvAmpfndVaPCJedKuX34rABdZN34db4PVJzKYoKjNqE3qnk",
  "key17": "3nfVzyCazFGcXPnmZhTkGVjw3RFzACQt9Wh32PCaxaSawW1AbW8QSwHeGcqixA1gpiGoagqi1VQnT21iYSL5nNm4",
  "key18": "2m8QiwqJgNYSFtBVkJtMgi17PioFhzu6GXfmcsUptBK9SiQ3WhbYmUNL8fedyguss92MmG4aAwqVVE1e1BC1aXqg",
  "key19": "a1jX2dPRxegHv8PBjWcwwHHfi3NKV3oR8g8gBQnr3TCYNSKqFS54axyBPrFJS4QUmtv3rT6NtFkSENVm8jzAbDV",
  "key20": "42FF6gXvf5EtoyYHRk33zS214vi7D9YyHRtoQrgQaKMtdExmGHKek3xVgNjd8TsaB52BekfiPs1RGyjD9NJs2fDe",
  "key21": "2NT5KPao7Sr2MrZ9uTcm4SnVGSFYXtBLjrvoCcGS7Hj2cyjiAJCVirvdwrXWKKBEatw6aD6kgezpqBrigUAA93J5",
  "key22": "5V2DhjaKM72LULfuRShugp6PUczdg9fUE8kQqmL3VBU7fD5UFzKBhFVMmSRyMER9PoGy9hTk6DsmSqBZY7UacFGg",
  "key23": "5AWXtE6qyHbfw6SqwxWmi3pev2iRUfC2dkvxpPL9xvtDW2dgPoUuZvaUXz9s9RpeiWh6jKio4zZoBXLjn7F2bjDk",
  "key24": "5aWUkVZeziFZfd9JmwbTudxtPjjNcnH4C3ai2yG9YprpxnXxv6dP2dkejVQ2MrNUC1gNig5kNQztEgGyC7wHn7VR",
  "key25": "2smSkrszrvx7Swwei1iMS4TFtrYQEwq7X4rWNVkCtXtFgZTouSM5HqjPownfEF2kKaz1RcfqJjQcA64nPPWPT2xh",
  "key26": "4JkQW1GyetRBNQp8wADgfcbSHDeceijWscdTsfMfBqm9QqhhP7L2m7fJ2hy76hBBMcAkjzDsYns9Tm6fVSKiiHMB",
  "key27": "3tH9W1H3fTVZKcYhidV4PqEZN6rHVu5cxxsVDrbcw7T4ku25gttEQb1BN3pYU9xu9J3QSbz45p629DCpProynDh5",
  "key28": "3PYr8H6q7vGR8UohHpDvHe9dcQNJC9niCAhgFgzwst31moSJPTGVTeQhEEDfaDLTpvcx9roYta5zEpQqvRhrZyJD",
  "key29": "ZNhoaNX3SuUTRzRiWNiGDs5ctE2kEzi5JFyiC1JaR8zhig99zrFtxsaFLYcgaap3pbi1oymX4zK7MU7LkAQzDeJ",
  "key30": "5F5EHkQq6yZXwqDDNnMdVu2UW71ndMEafa7WS6JrBbQuAXCJRyRcWeiUeSKsgyrikbQJqTi9oQM9MYfsFpu4Wd7Y",
  "key31": "3cLGN9kfB1H6hpUjZDo9twMufZizSMoUwfibhceyh1EV1PjRKM82wq2c5AffbbgAVAYVRT1h1rZWjEXy3WUn3Jsg",
  "key32": "2EHHpLhfTQsJMhyprhYnoNpAvxiadkn8s1Asagi5KgVbXjgHTKGpjAAZJX1equxKjgsfBbqdJ9ioryWMyjJBoXYg",
  "key33": "2s6sHDCFSPWmv837sgA9aFCnWSMtp4KaUJ2PyDhzP3WvYs1FecyZ4d8kL55i6mmWgEMByj9zqgduFYB7fxXhQ8js",
  "key34": "4VVnwmPf7xqXeYRoz2p1v9dXxPqMPBHVhFUxxxwQ31FzGC2QgLYBsvkUkaVsVbS4WSW1GLhfoza1xdodMe3vxT3K",
  "key35": "5rNjmjz7SEsM65PUkdsb5pXcTZNYgh3EhXcWJkcs1dD3t3sRXCX2t7nniZ2WoQB9zmB6MF3wVpU9914cn6cgpBFY",
  "key36": "36wMfvARxNaqXW1JZvZsNmk4LK8UV8Tjm1Q1fGmyigTRwNUhtRx4uBregTG4YjF7BNx4qn1xbgv9DhYN9StRxiuB",
  "key37": "2wf7RgzQ1gs5XLijdrFXS52R68o8vAnn8Ev38VfutCLnHmZyDWKueBp4XxVUMLBGkXwjFUyBG9veBXaLk19dyEGZ",
  "key38": "5PL9Rh7F8iQf3u4SFAtmKMkYTDTKG2x6vvQEVWLvHMyrbncTkEw3Fovrjz1st8kA36Xgtv1C9q3D4LaQo925vc3L",
  "key39": "2EFrKW2tyGQfYKgs3YDf2GDkER5pNE7KNBVqQvJGhjcWsCGzMnd8FtKN434dpUnH2F8ztPasyVuJW3vMPyPrTAVy",
  "key40": "4eaS7sXPFHiuvGcCXdao8fzYyAKP4qANRY2AZMn7cDc1YuN5mFY8a2RvHndxng589JvoBskcNG1JHCNAZfMACTSA",
  "key41": "5PvKhu8V6fhBVPTmTaGbtLLYpNCC2AK3K1YW9TNZ5yUV4X2WcrkBrcyykxYcxrwrxGamqK2tPFzeWVxeXxkgiUPe",
  "key42": "2pyEwDM9y8dtJDMTgbYC7RMD8hKFL94oYJwmze84WmwTGPT3MCDUrBFUDJWEWt2uK5yQYjH96DcozHN4TwUEFLA7"
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
