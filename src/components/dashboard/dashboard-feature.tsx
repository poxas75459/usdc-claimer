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
    "2LfPAkds65etL5PNCWMrJSPApaTk4qk5QJyv2JNGajiZjADytBeBizZyGBjzfZ16g9FkXFvS1X9hn5Gn3f9GU9em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dvnnvat9h9doYhrSKQxvg2zmMujHbjUgg4gj5ZcYoQxSdEcgdnX8pNG8y1JsEWxrj2frqQGDDBmTgcFeUXFsXWh",
  "key1": "5dWZKkAQk4qgaDP4bwmpAJyX3UGLAKrzs2ema5RqFMfXfD2MqHsCdBEz8J59nxFGUVpPcpAm4HdM3T3rr6SFAYv8",
  "key2": "4xyC7rVopbe22E479Z1aSJFUgfrKXRt9DxdCPRWEqxUUA55PrvzbxWcBcXdLk4bXvZmvZdGzHhKXZpyBoxfGzb3E",
  "key3": "5v7nTae82i6zcBeQjGRfJzydtWYAQ11h2cW816aaxpNSsCKQd7WQ9TPX4aWBHTkEuM4HT35cPbcLJy5zGNrpTT7U",
  "key4": "49V1nEcJnvGEBHLcPEayH9f4hAmQT2Ch512CmmL81LoEJx5Eo6YyzSKboPS7Cg1phfkwhMTviDYJyckLfqVMpCai",
  "key5": "4Ak9LHeiUfGMTKGDgzJjJ2kQCk4hyTVfakdQX6s88umQQHe2izhpqphLNszRQYfJX2uToX1wgwga9dAWGzRuyQeE",
  "key6": "4N2YxiC5dQPidy1GDr5wsEQvvrjW8nZiqmWBYK7w8PKR9JoxJvV4hL3xedLjadi7At9KsKvn8tnrJKdAQ5quUxX2",
  "key7": "5qHYKzLqc7jMne73D79oAMygH3cNZqU8bHtpbxpUDt8fYqz2Qiit3CTCNWmbGtHGUqzenxYvHNuu5MP12fMYip4a",
  "key8": "2zpSgreYDfZx6F4KpxsgXdxUwRLgSVAE8GvvfQJprfLZSUmdxq7MFL35wr8bxqgp9sZJkPJ8WpQ6w3BKFbhsxNkr",
  "key9": "4SD3BTMSckGkBJHvmcTMgCCU9kHgmYVYiTRfehSXA4DKKT4baHnubfuYE1UpTFMZAWY3HfabNbpC2HFPMMgbAMmH",
  "key10": "5TH9EnVizXTEn4PuExti92sjA31JufGVmHoHy4n4sssdd5ay6fRVpRqXWBG9z9uA8cCkENa9yc22FqaHG28DnMpw",
  "key11": "26wwg13Trn1tiTtFpbevXVqyCWKTsdVWXi6jC6AxdWnGnq4CtJFvsQa2bCTjNqPHu62jeHhdEJdcgH8YkpjX6G3Q",
  "key12": "2uiR2mG3kUP3mxigPqKoCw6UVDLJZ1mgUYK4VhDS7Mm6hBdAfZHGuyLaFbweqWzbmv9qZ6S53G9VUCCUpN2Ajgyj",
  "key13": "XUUoo9iyf4GZe9KsmejaK9vXG4ne86FigSX3x7n1cyzJXGcWkkZxa6XtPgccnzj8DCXZCJXVMgD3DTZrpN7Y1Z1",
  "key14": "2kArJceDyKHEAvTiWDMtQvPaJ9DQkTxAi8HgaJbSjYyDF6Uh3VZ2Gv1TsTinmpULbRV7M5sqAkvbbXS3QWDvWEqe",
  "key15": "p9iFDqeX7NxheLbxjYiFMae6rZtQwuyj6R4bdK4LVEeeEfzYAvSsTunkdqwayVNk5D1Bn7B4L4Q5zrrypQszv7J",
  "key16": "3neYjKSiXbfox52Ehng6oqE8EF8QvF4f3ssFoaTCmCu4Kox97auLuKSEuadFnpX3ALJKqnDrWBVoMfHb79iGX5gR",
  "key17": "3MhbQ2AhXg2Dwme9hkeYx1CsMydYiVMddbcCydoPxWCzKZpebj5maZyUTWXBvYWXpJZiPjcTcu7RMS5WH2UsdsHK",
  "key18": "3WXcGQnBLNc2EHwHmbB7Jy3DWdjeqS45YJu32XQmXYqBwhAsLGnBAQFgx9V27QeUss4k8kESjcXSxzoQyRf3so24",
  "key19": "zpdSJQwWsuMxry1cFJeCQ9mwbtxr3UE9o6UmBstW8xSyVSFi9dDLWNZ32uDHk6FnD4Nt3AwB68kuYCarfdV4CMP",
  "key20": "2id8eGY6AtawVCm88jFRGAXc3ZwtYCerY8TvD94S4NrFhymDZ89Vp2DMxRrCnieyatPT7yUDWRV633QpnZkHpddk",
  "key21": "3nsdTbgGpXwDXNnaRZFdkw7qMkShccFXnH3ea8js6Jh91Le1WapzXMJSACvqYQqTmu5rAoxfNhQK2PJNeiGAhU8n",
  "key22": "5FZnCx5TpAFZCT6Gmzv4YKxh5HzmmfrfUXZkjE4fooZQjMEgkDR4FAjEpmnTS2uXywi6SPD9yaGgocjMoX4oXDNf",
  "key23": "5VY4purpDUTUtZQk1uHRjoyvHjJGeWt4mLvGDAwyQuv5oFqzqtE9LyYujK58sDeV6R1pLvf2GWDDEpTAt9e89vhf",
  "key24": "48rojSa7YrfERmfpV3P8KsiWmPZtqt4Yf8kMWkoAMExamPVRwmg6ZpfLfUd6arAWxGyM5VmbrZRE5XV2M5Lkhcb2",
  "key25": "3Pn4dBRz6iXELuga1acuQUvbhLGtD1AQckzdDCCbiYtsoZq7cst9ixaaP6jnsJfGvUxfUg38C6Fy4yAR7gV3mE61",
  "key26": "2s9bh4DTVPbF11vqyVKzdBwa7RUKpaV3EvfKaKmenfHFGwUBTKjq83Xh3ZMxR6Dov8FzxG15KhbnrAuoEmKYQLVq",
  "key27": "5z1kQob7BtDbzE7xtxq3SLf6Ye35tTW55fVYUWdBZKqFrus7C9ERmZeLhUsku23aEGMi11pf5sFRRJyj98QuEEvb",
  "key28": "49Bprc4H32Tfw3exrLdjKx1Ea7NgwYL9fcwGxDW1cuQ4yYwoCkWXRcVkAZZqaZNd5xDceLurBgT1UiNLgB8JffDd",
  "key29": "2Tedt2RNVM5C3BTyTNBH2MQsEAw3FCE9N9PBfHaea2x2nTJy7v7kHQrW3c2F5k1K4kfD6BQfqDKTdLxNSCNSGL2E",
  "key30": "4wvZy1K6spkxCnUd32LZxYFhRYfzQbCnSo9F2PamENzGiwg3DAKf2tv6wnWqWXoGSUY5LEzRp5ffWXu2D1kJGGhs",
  "key31": "9eC6NLi3FrqBbesm4zMNhe8ssTVEiK7fLuxeY6SUz7PSicWuNNFAxKT6TrQKN9G66YW7ymh7xZePeYpWJHiU36X",
  "key32": "4KfoqCoGs4WtKbA8wzjwG6VmPMg5KJrefYPc5m5ux3Huk2TgJFHak4zPKuVXtfx5uN8GWzRjRH8225cEQDK32erC",
  "key33": "uAwUvEZFura7NW9h1ba1KViiuYCdz9hQL3Szk5WUL2EviCHDodyHxkcXPdikDXVD43Stt35wRKFqRhx2pEoMyWX",
  "key34": "n9akWJbFPQLVXPjgpADi6CRaneYTe4brQ4YYoBhLbufHpEtwqAUS3YYRVb3ptYAvqiieQxYK3BKp8oEWFu8FwQF",
  "key35": "XrxShEKFU8TwMCNgxRcMLR4uEqzttRVhdhZUQKV56uZd5KKfCue27yZtaWZRWwTHsMuj1B39NqovmiYj1SxJFay",
  "key36": "3nP4jJGHjw1VV7np1TcBN5NPZopqbq3wiGvDBAywg9tQxzRKzruQgKHnY3SRuf6xXZEpheb2B27tRFiPcMShWC9u",
  "key37": "47uRSNuBYqAca9PmYPR8JNEFkPbnXzUvyruqkCigKjBMoktfFtN8i8cpe29mmeBt4DCb1mAbeHHLPXB6cpzRr6YX",
  "key38": "3oy1Mm1oQZtoxu6LjULPSFw3FtMaTNpzGzRsitzXFXPeLW5jC3VRFbQ6iycG4Qh68vMThXhpjuiJHbETSdkdKHJ1",
  "key39": "6G9eSbDf5uQwAexqkBG8dR2eV1h3oCmApJvuF9YkFVoRufQF6hYRAJhFzZpN84uARpGSyzxq6fTKSwgsREYbc23"
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
