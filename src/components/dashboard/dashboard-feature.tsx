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
    "4nXEbFoFSkM7xMoumr9XFWCZ5iNDr2fgzpXC3C7py8JQBENvXJYuYg8Ydxkw7KrB4Rm8B5CaRcdmRbRSYccMjX6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zq2r1wLKr4QogWvQFX2kKXfvQQdDoF28FukTekKrdkFMvyYKrBXXK5hjq8Ub64qZYsz6AGNBX2wPDnNyfcc6QZP",
  "key1": "5WUtwqVQsesJdR2kbBzjSUqaFzdfgLUQQUR8zNj3QHcVNRRAVFa5hRtsPjQ8BLgS1AMGmeiAWXePNE91W31tRcVn",
  "key2": "25bpWVm82Wok9LzB9jq268kcuj6rWji6tUZLgJkG8EnoekZYiQepg7RCxyK1GeoTdL18NHRDx1wxR3yJSRG6gksx",
  "key3": "4HvHSDR8WoFFLmgEt819WMa9RTFqBLT8YMYtb6r8kX1hJmNEBsnbU9wsjgzpzgVp7sz9jfMRkXEx57jbWBnqJRkS",
  "key4": "5s1JSAsKgCUtzA5WmLtQoq3vNrvQFTEMZ2nP1ioNhpAKJ22DVoy4jiZnxxx1ezks9vtjvajdcAmzmeLkMnsZHqMq",
  "key5": "huYyTECRfo5K6ENgx9shkBmjbDrt3FiUPXqqRRufKa6954M6ZVnJ8MggHfhXvmmSqcgGPCXKpA8sgsqFNuMYqm6",
  "key6": "PcyPjvpZK2nkgSPMdBwB48i2gXGUzV2GvsV9Dwk7oCURCdGkY8ZcJHV8tcCjtm47RJrS7qs8TL6UxP73XdToD5b",
  "key7": "2WLYoj2nGWbKiaRoRUmCBJcEo6MY1oCjfUT4fhbQPgCPtbFqC1kBQjZcuGgGXZBWFNND4oVPAhuQobQcCjqzd1if",
  "key8": "33hCFfYnoY9gPZrGudMSXzgbpTsofHHo4yA8JC3jVNysZdYncBGBvPaxkqhAjAyKD5MFMeyRxW1fdFDbp3Hmzjtu",
  "key9": "bjShAFwjEUe8uw8QCX6HWLvGxAbLAuoysF6LcjYBSXAmhu5zCcGQpfroDD6saitTeUQ3oVARfTL14nifs4TWf4m",
  "key10": "VQ7Wvg1XXHFDQUiD7n4og1hSZTDFmw85N3tmsCZMvyhBCwWymAV9sVjeByWptqyr44V2ZRqFXg2sBh4T5nT95Lt",
  "key11": "4heWXyqKWkszvS1JjNyXCZukHPvQeiyKkdLbjrKtVV7UeWAhNu8oZvBMLEU6yb5NuNq3nw8ULHgZ4wPqsDvpSjhH",
  "key12": "5XFJZ44KwjSJdgdQp8W3NPqNR9sJPTnmoVs7QXqbVuSsPxswSCECw35QMbi6jyFbkcBwBUCuEc3rPLfMKZ9kMtuc",
  "key13": "2fx8LvXkmhmYVN7Yck5r7A8wj93vPvv2pL7XAKqejZ3FhHtBxB4XFvwhZGZSSsqtimaCj2Py9wvqUtpY19nkqNNC",
  "key14": "6674g9eaL7QxZXFAiEKRrCL2v4PkoDJBaY8ctwHw2vDmQRp78muaPci3EPN5FJm4UDo4UUjB3a8nQdofvocLdy4r",
  "key15": "4x7kUgAxVvE2XZsTVaLQ26AmwAXjiFEvYstquqCvfNPVhNZGhsVmxRps3WaYS63VMtWGHqqr3a8rTfWNjkaPkhHr",
  "key16": "utEEZS6XnEKD5YQmYuMEEfoVeKZggLPn8Fk4iS9T7xSHshLMUnPt8CBNWhg6qyPcKoETyXQhLeFXz4UYGcJngqZ",
  "key17": "FobffJZhMEMupbnuftBmoy5BLSpGoz5cMr2U1fQ14ab8RX17VMnHmYP4FyymhRbjThWVivep942V3FxQLAdJsev",
  "key18": "4tNdbtZ78y7V4CuWGesKuP3cQuaUgKWKuipq4Sjaz4oP9DejvwNKTvSrE6t76WsyRys8SBqGcSfnpN9Kr9GNFqtd",
  "key19": "3NXuzzLVJ4nMRn7xPjVTEf1LWcWoMVR4jpzsCidSCzQbwkN9o6gQLk32r6dx3hdyu5AiMQwmhzQwngF3uAW5xR8d",
  "key20": "ysmEhrEDbmWpVMWPfMmBypbizBccgRcKe15eyb9V58rC7WuVhoRsvNrMvUzigMH7iqkETu2ZRs1VrZzBW5Yte11",
  "key21": "2nTVewL25SYAAx6hergw5enVNjd6Biw3fwtQEwCUuFEJMNasUKBqaabzi6vbNpMXB8fAcpXAkCNyCXKUDUn9dQya",
  "key22": "4gfxL1AWAZsozJfwJ5xQPi8X1ZMjhvY1RyKQvCrj738AuPJ8138h3ygXjSABDEKMF1WrtDEEmBJ8BQTsTF4AdTFy",
  "key23": "2TSioKcjL8c47T7GbrayHcUcKM5bgcg71bzV3FKEP3SbKARbKLo5RYJVjWeMvM2A2hFGDufwLABxDt3qGLBQ38iC",
  "key24": "5SaAL9uQSviteY5xrSZ91apoCmEeG8ZY12H8QdJCpPMWXLpa1rfB3urBMcP3K44ggancxx8jyxAwma1zzJZHkkSF",
  "key25": "3xdPa6TMK8HMBdwEcpQ5r4Yhg5UM8zxK7Mur3TwMPpJE9Sv8xY1ouv5EbyJRbxUkCU3ih2KpanHmt12cgbxvtZ77",
  "key26": "2A43Kz56tb9irnv9cmEhSQhuR3jg71Edjja7s1p2KovzAodhxycg7Nh9V7DPt3pwQV6s82jQ1nHxtyaVNYgczRHr",
  "key27": "NDHRKw95kXpXmnM2fyRdNGd8vpZxeZNxdLdqJy1utx3hcE2ef6XPwNn71LBsSF8bcyQVCuyM5iSQ8deT7krT7Pt"
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
