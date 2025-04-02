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
    "2qnLt7vm1tzbfvt7AvvUE7mH9j83hiqyJzmk4UxDMrW9rcuT7NzZWgfMPYAcvdTeHK7iFDw8ckFTERkntq2MujDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBbPb6HwoCYGofoXqmhQsqLPK8Csz11pnXrqMKHRNvuSP762hDtVBtoN7Xk5eRbfjnqpR3b7uZov52gQdbofzGp",
  "key1": "4dqgvKBdnj1f5W33LFisLMgNBHPL9SU8HRB8gUfvVhk4BMnjpFs3QCWiuifgWaazCeSDYBkX88ESpKPc2bpZtaMx",
  "key2": "3SCQWKiUcF4vTxant4s8hgWserNpwmFdt4G61wvLRoUusfHT3eYDuWNP9CAXf8DrFNs55aJiGZJ2856pLhu312dR",
  "key3": "35W1pqgxR7qk5u4pgSDXbRTLsFKN4d3QbyuBETivRNLXYu9rHCRxWGD5jBPnikMJmT3C2HnBo6dk5zEiwrqEsH7X",
  "key4": "4pyofeooAkDDrpZJWA8UaQd14wcacGi6y4Zo64KqW9bMuaFHFBwDj76ZFhaiTZT9LCkK48ThT7SajTQumH7jjxPP",
  "key5": "3HpPVwdzwSuN9ZmwF2GrWidYaeRt3Eu6ybiLLoXEiHWjmFjACnGmw78QVAZQ7d6F8mHAeTE4o7coNdfvaKi41gbj",
  "key6": "5sXEt6WWUoRf18QUwVNc4z3QJjT1veD1Z12Km7sXeGYbU1imj4E3St7XYmLdfjqAR4TXjrq7iLjXs9DhLinwSwUD",
  "key7": "3sYgusaQ535shzkZhy7Ybt7wujZSgaZS8tWGAS28REh5nCAc3cgqksfvtwoL9ZWKKMZ9b4UP8CfZDL2WyLuvRDmk",
  "key8": "RNqaSbE6gLgFVKFtVNqasAK6GrDLxRFoN9aY96mrWN28RnfKfNmf9Xf4a6KgAjRSwTFDYdvWgXoWhCGwBqCiGnr",
  "key9": "5L9QePjRVV4KZQccY8zRgWJKowJ4XY5F6XnhkB8afCEwNfRTkyoPSqRPFH7p7CBuBeYMP91xmkuDQuXTF9sRLK18",
  "key10": "48Ug25fst6i1JWmv9qUHYJxYdjXAcneQaqejweRm9VqQiWsUAVUtpfgLbJ1y787z8hM9cm5ZNXQQmM3kwkDrXYXU",
  "key11": "3oqDRiMCzJBUwZo2sqbz3YnghCtTQFVZxzygd5EfJDopKReZCCzoMkUDikj2LSqcbCa3PhMxDWw7ZLBjXLo9xxaj",
  "key12": "3fm8C8a15hC7QtG8yHA6SRK5i6jD8SoKf3B5RdrzRwrpm4oLr3J3p5aMwDUjmAQV414PDKPsd6kgtA8GMXwksr1s",
  "key13": "5MvfHgGZ6YYe4fQbqtSxA8QrueQYwKm4gBhpvMw25CKvjseUrSXfqp1n8e53xT11m1zd4QXrSHDGYP81XhEX5Xsf",
  "key14": "3TXKTXDMCK1eCPkgZwrnhpTjrYkJSf1DeWwas5JvxutwpQ1xcGjktLd8jQ7EBTjttnEPh4hdwEtUCmxuAN1BBADS",
  "key15": "3caBRofDBWmVakZ3F7F5ufqeMCudnTtj2jaYZk9d463i3fbaV7dxDUUmnQQwAR4PufmsqELkWT6hqGiQ6DnvBb2s",
  "key16": "52CNPvUnbFE8rjJMnDPAF16Es314a4QEopBnvXsGbQhWHt94nTJ7bdqhvHGzJp6spqkk1p8CvxtGeG8xpYeaD6yP",
  "key17": "27mL4TtUodU7uDTKrTsYfU6jau4UXCbvbbS7sqH2DXSMVijL8fknYAoxqK7LdLgtWo4dhXwr8ywaD4nCLheWg9fG",
  "key18": "3KbY1WbQNHGj5TtFR1vRHqkyE2kgon1N7v9NvbmQskPDMt333bPZgLHmdHfxzJYMNFiisJmErJBbTGARt1Grqf12",
  "key19": "2MTY6k5rbN7rg4QXe6eaG64XefZxrcKGjrmaTf1zNhbE1hWq35KGNa5VzNLrsGZJD1QggYnm5Ari12TZQdq7Bf66",
  "key20": "4HGnTzUoP83d5DytWL1xFQ5da94sCHvA9W2NN6LRkfbEoZ4rVpDgkpA5NNQ8YhR84J7hxNGMpHrRFppshMQsPunG",
  "key21": "42gZN5R5mkLu37MQQsS2EJ3MueCFpStUjGfQpXB25YFE4sRyvUbBo7uRKyHP5gbzG4GphrC4VVeuMZRjuKjU8TBk",
  "key22": "4bjDSaiJCMYVTCtGzGenjhU3RHAhL7ZPETfmpf8n8JKNpF7fH19TvzsqzerpjNXmBA9dLPhRrSWpyVy6QYdojy5W",
  "key23": "h3zxJtB782112G3bpjZ7XYET5sJxaRfXSPT3FXmtrUfFcLmzCGqQuum2EKGCE8kUXQRLn7jfNWrkzu31ZDEZDA7",
  "key24": "52dCvuvVfAX5qy6ieCwo4FmeYxzj7Dv1vviZwrxENkJa82apuCGKJazRWaekaPJh8XkJKndovaosDqrMMEECC4kW",
  "key25": "5de7xT9eRfGxa9gB1MgvNLCeUriSMrDFnbjuz7DycQdo8zAaHwo4MVgBxDjeZaBe9eHmceeNAyy56QesihpUEQyx",
  "key26": "4V4M7cUG1a7TyjMgkkoiMVSLR5Afi8fMie7WLfEKia57PjcKr8UfW9ji9RBgkABdUm6zQ6C8fR9hwevLMLob8ATo",
  "key27": "3xbTpY4uCFvA5AbWey1UoS1myQSGfvG4BJY8PoZKsLpUP4p8E9id4wX6Uu6btbrRPXFRKZV1A1vhn7xHiCgUZpCP",
  "key28": "4g6vhDA9fyS1KyaSMvh6CLptJVDhzUysE4yViMfJNUYvXZwDNm7wDcJ2DTph8pUFBoMjYg5G5XZZKGTdNf8VuhHa",
  "key29": "3N3vKLKiADTcYo7MyTQmRPqtanJdZmvz1YvxLjVrddkbSKJyD38QP2PekvjFw4k8XvE7MwCYSkS8wfprfEeHwLcT",
  "key30": "2NdQVNYqzAdx1rDQM3ttJCREZTqbj1TFbFXAZv88rvA3x5pj6jfbXeedridJapqUwLDrSrjLPstDww5WmnQFh15s",
  "key31": "2FP2LoYRELipTbHYDGbfvdJJ6jNTTD6H1kPuKwWHHkNfzXx519qG7YZAEnx8J1qJAMEsmpcropiJJr1RHkmKpCBg",
  "key32": "4m3EACvSkV7QXRJQtL8z2ZgbNhosSG6gdyZfrossjYwm4FygzwsZekLu29sUXaAJeMs53qXuKWteGEHEhjwXUeWW",
  "key33": "3aJ663pwP6EFrsdi2jH8sWyL8rzPFhykcE15kjRdbzNfoRg2DCn6y7LY9iRkQcC78ttYU6NoYKf872zQM3Z3nwEg",
  "key34": "5HXdwgN7LDXmJ7tFK15qk5tHUobMANK5kXwr7dwcwtrE478mTBYwt9ca9d5q5RnDtCnSWTDbXbg6SUpBAUDU4gzJ",
  "key35": "4Geq1n5znBRLNy6SGBa4JyUzsvC4rxJxBnmxR73rLshsedMR8hKz9ouaC2HP5UVUQapvEPL1NFiBUHFx7MSxeDef",
  "key36": "5b91NXprBnSfL13qNCM1f71qwuuzYV6hCEDNQm1GFjXpzJQ2XZCqyYbCQbzxxEFX9QLLTV8mKpNk7wi2syxPVav4",
  "key37": "4K3JM3Q9w5YjZyXB9TYgNMH6SZVSLcazg9chmmiEx2zYr55BcryCXxRsm9LGcaGcDXHi55N3vQrYMShjYyks3rLn",
  "key38": "2TZphGr4DCSDhVFa8Wmgz2hxYRorZ1YFyUAyD9oQ98KDrCTaRVUyNgHEDMsM9vC2Mt1suPHVkkBSRS3NGQ64DCKS",
  "key39": "3qdea9shqeLDfhCGT8gqVAtUBqhDVhNk6vpx4Ej7DxtvegPfxS7CrQ4ows7NkaXoMy6EVHMZDUNYXfWbWrNsKo6i",
  "key40": "21Tn6RxU1opgWb1KFpFTAAimxSAYr2DiBS35RZmrkHR93rizm8dnhoEoumhvc8gw8Lw5W6JaK8ETMaxaemKgdbxp",
  "key41": "3JkSTDXGFaWfi752m1ThFnVK8YNZZb1DzXnT5ssy8GJ3kz1h72cCcUZgmaRq67iLS255sX1tbtn5s4sRqDBPUekZ"
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
