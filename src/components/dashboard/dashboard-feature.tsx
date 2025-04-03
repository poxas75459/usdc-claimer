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
    "5G38yYrPn6YcgoBpLakWZa8XQQAZouvEzsUfSqFVRPB51mKjgUQXuoWNBnQsycD6m3jr4GhvEF3u7ebP4eeoBHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tu5e4b2FkiUw9fDyCfBm2DMSZJtk363bsXSVqXqQgf7q3PsTwcyJw7a8nNsbEQS3BcU8DBQWkoogVjkyR2L9QY9",
  "key1": "3XBXyJsNUMn9eoAMbtJANQ7XRRBpAWkK6ADLmSYd86ApUEji6oToSuD1aSXya46RRJqcMNJczFD3GxGcDaVJpuPX",
  "key2": "YfFMnRGs7NroepZXVxbiTPX6vc5NLyRPCsYbQKTD1PsJDoAEdaB4PJ11Dt1SkyAen6JRfekLvJ2JVMUBiGDBZGz",
  "key3": "4U8bPDBYUxkxMAMfmigWVRfGdEHdy3EWCPuQL55BpKSxfpXhHH1urba4hSnYQ5eSPZnFQL4pCN94fUTpNpnzC6ec",
  "key4": "MPdcrr461RzEgMGHoDfgHaSCZnPqwyXf366rMyhBg564hBshs7MkWhJpCWu68RpEdcT5XwKwLCRDSvbD7txzMbi",
  "key5": "3uwDwHGN2zCWLXi8VpsdBcsxHMoccQRwxw9ViPGGvxW4p7B2PyLWuerE5k4HEEA1HcWxqfPbpTi9GxB12Y11ASym",
  "key6": "27oJM2YAJ4vPMo1LthLyb2nw4u2aWxGBhBw3uQ4y34Z5mFUe7AUzPchrgQcNZDvYn4SV7QzBuTQn2uzwmPx8r3Bp",
  "key7": "un5mVMUm9ZeLGzLcSqcCcM6MBVeyCmbRkdbHT1vhfZWUqj4RwteDakW85yP8Rj4TpaBdcVAJqvZzVZG4pB3knqf",
  "key8": "4Ywy3vFbhv2QgSu23QbqhdU9mfR1bUQFG8ytyxb3EP253EdJwb4G7bDpnZbR5xfGzJ8wBfF7CGwhZyq9dYkhX4tN",
  "key9": "2xfUHs4JpfuGzCKuQyGRzvikwmNMHUDa7Y7XbxANJufoquBSTuw3DjVxiZzt858nNaitamMfvKKxCC1c6GbwypEL",
  "key10": "3r9wzMbBsiKjQQQHg8fKKrLquhcePVixU5mAiEzUzBN9HtbpgVAtRM9GcMEB4HhwQKUVQw6CEAVP9sYtqzVKBWJh",
  "key11": "3K5m2YuAc7nwYpUWFyc88QZ7p9gQW8vTN3KrPzWac4vP7WGFc3ih9kSq4yWYwG2yy3tbDJXguwWoBxMUeT8RzSZq",
  "key12": "2wFaD46GwudGw8Rur9PLjBXrvHz8zqiUh9Qb8vnPdRdQaCNtaQVcpLCyM8X7Te66sfQd949SPWSgUY5Uonp45LfH",
  "key13": "4gWRJKWc9ZCJTLWMjFJCLXLQZFtAuTPk5kRrp9GqyL7DoY5vAeAe3BvoHed65ExuWXf7xPhXnj6MwM4KK6ymPvy8",
  "key14": "3cyWgMFzvLejtzfszbCuhCpuJmedx2EQefJSKuaP3dq9q4Z2XCEvRtvEudvw8p2ECu53sc7JV9RommPmkJEyDHkh",
  "key15": "2RprKnNjJuu3z9R9wRe9mSTaHyWPam5VMTTto5dKh8AKPbs8hyRDwzRiTfA8HGDi66kdGwvr17vtFnG4KtfqxtNW",
  "key16": "C1BFvTpLBPD7qHngoG6L1tvB8YxBx8QqN6SupgUsSsQYR2V4JhsWmfT6XuBBgf5ytQ6a64hteTAWogDXbAzGfQo",
  "key17": "3uNaHBiBCCXNsXPqTKZvE49NxhrwfbfLhYA45uEUK5pWmQ6ujcvgUf4PMiXoqKvG6xnyNArTFQDJpZ3WR5X8S7Fc",
  "key18": "3vYvsUJvhDV5dJcS9yRQng8YVCiRTCHdmhp4AEFkY9XeL4XMhyE8XRJ9cW9uwhzwLhiNVGHq1sj9et1s6CW9WANV",
  "key19": "5sTxcJ4e8PU9aALnXwGaH4VgzwTcPMd5wPdrWU7MhsipzkhQNeuHS4eE5CratSyT7sRcA1ZVyErtpHXXxuTgjSuE",
  "key20": "DHY95MVAQm8bn5dhVvZAPw1WVN1QbF11q1kdw47rooC6i2vUU7izNttVwZVf63VB4NYBmsfNL63FPkrZARJ1YCn",
  "key21": "2D3EhBWkdvPKv5LeaEeMidw4jZEBS4zqbRdwpB8HcpVEM1NMovnod6TToM8HMG9AwurRU8Fjy4uM9eyiquu2XuzP",
  "key22": "3RW2CJ1kweyhZkdVmRZGwALrwHN1SVqvoSQD717FdhYBNWMC7hb3AQeVvnzotjPT3wypS2sLUszWwaMRK7FxmuNE",
  "key23": "2v869YTscPyvUsTGDZfyxxGDUzmX6ZR1o3Y9c6BgJCYUnqrAsPMEDTBJEcbiDZR1WCPEtQY9wXMmdRm8PN48ooAm",
  "key24": "47vB1bYDmUMx3KfLJLZk6XYjWgcQkUnLTSZpGPgx9mms3E6ERdFdGGJdcGkiQQKWiJ6YsAjpFdYGCWxRAhcKK9m1",
  "key25": "2mVAxSUZq8zGEqCPMtHMoL1sfZigjWtqEnKXLjRBBNQVf9uWXyfFdGywYsjvgijKiZW3aWj4hm2jL7sYid6w8wzF",
  "key26": "MFw5T7PEZsYaDnBKbhDuKTqcUTYawU4H2B5jLELqEtpx5mmgREV7DFuMS4fKsjKPtjkCfvuR7mnTEKaotzWdYgP",
  "key27": "5qw7uTjKXYznp3uFZ5mrGgpJ7xkMJq2YwHWBadWZfqW9m4CpkA1EvQGhXyuU5pwjspRPSHBzfDR5BcjsfDj3ojN8",
  "key28": "3V6UNEDqhhxokjUEeH975HswAvYq5t9Tc5A8imzxUh8wmtU9jfbJ2x3C5oEUMLaZwDHqdsVFenhYFc45oPYXSmcX",
  "key29": "36D5dW1o1wDpCfyBTMEXjHaXQWSp3GZhitp1F6KZ5Uphadfm6GAyCLiauFL2AmtqaSn2Ds5t6zYC5qz4r7zjruah",
  "key30": "4jA99A4EwJqUPst44xLZ9KcRTegY294ZcDwUrtizrEVT2Z6RHJtfLPU1vwLh7A2LVYWDNwRcHCKHGE4dezxntS3f",
  "key31": "XKxJXJH5ZT282Z2avmWJAjeED8Rp6r3srwc4fM3A7xZeksZtTHaD3Ag1y2U4Yxhs4daxdpPKL8G3zsF5NZRuJZ9",
  "key32": "2mrF6uKMFTiEzeeChkTqz53XN8YVEQf6KGuGLk5zERYCBhDkuyPQ394NXTzN7LHQmeVbeXQ8xCnXebYGvtmXG5Hg",
  "key33": "4bBGbyMNDaAfqF8hRF2fs44CjjRk7thZhHGwVUMPw3nazSv7GroNKU37zBUgXokJtRHK9hFpnvWNBSanrFAqU65a",
  "key34": "5utsDcFkpFoDA7b9qMVWgwH5MSjBJfC4GujFRiHq1bRWX4SfsajNnF1SMEZLd9x7sstWzHEgVg2QZ7sjwrLzH2aX",
  "key35": "2E6PWedrtZMWYuaixGbQSyiSQkzxAuGQn9ZaeHzDsfrZj7Yfb63JTNeXvBaUKKHKVeVAXSBibje3xVEWPV6fdo4v",
  "key36": "3WfYUxeVq4Nr2DqXKk7aKMRowVZohYq17jAe3xdbGFRnHBDF1rUsm774qi7wwnXGj4DqQoQ8jNKixNqLDqSfo4y",
  "key37": "Wu6rJ1ZByBx4HKmSM6PyUPLebcmFduaENNMP1Lk1s3yGjgPXcB6LUfKt5S1PtR5Zvf8icnqtUMnZq8G9u5CorE9"
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
