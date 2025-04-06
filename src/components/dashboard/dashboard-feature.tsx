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
    "XSMsACnobmxhr2f3KePfmfFaVU6U8wEsDShEbXh28aHwD3ezMzn34fGA6QsJib94Ef2gDJ5iEh2XSE7ydkRctCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rj1sNcPzc3DFoFw5LSUPRfkxXVAyzPq8isfMt2QQdDJBP9gyDrZpgrWXGKqzKEG7BvtxDQP5ijnq9zfqXrWhqJh",
  "key1": "4on8nJEqvwjnPd61h73gUnzG6eN73rLLeW3U2GGUeRVJrwffuUFKKp1KKLKL7oEqe4N9RU9pryzTmViv1cKeoh7C",
  "key2": "4qD4RRPewh4tNFKrfZYRpv8viVWLANTkQ3ULVdgRFNF7T7eGo9Ur6zeiS4BBt9seAuBQD1hH6qEqJXQZvh9wS617",
  "key3": "5LLyYtAeEfhzvUBTgb9LGeL3dJZMV56yhMe5M2ktEg9xAJxGF767rRRrq9ib6psaa3xkSa2arnt236CzmfjWvhhh",
  "key4": "4pWtFJfEWTaTizFhPZ3PYKgqGvmbNhjds7wMGP5UfY54xf9ayGnmT4jA3tvKco3pGojh2TbtzkpcgDbT8RqsWHWr",
  "key5": "4UNdWXs5i9pbWuGaFm5kN8b6yeaaELfFYTQx2tnTx8xtvB2WBdW337rjc4xTV3XkxikUpNJJ7UyBQGDAjK4MjVce",
  "key6": "2EhVCFANWCLUBztjppXCZLPuDAoCJbSawBqQ6JqtXJqCxKrdH6kjCbdmWCpqWkGCAjsn1KBEF21hbCRY8cPJNCjK",
  "key7": "2b2X7AqdtYi5Hop82rA8FpiBkJQsnuCYPBjrQ8CdyS2eWwbFdQpZXX8DC58Zs8bidzbAH1bXRsPAL3fpWa5Ffscp",
  "key8": "237Mu9TzzVw63w3ZrkhUmUa7LtzdoQWbNwrLiWRvxc2zuvHJGpfBwaSbogTNjfVZm1GfVT1AEYSQacqnPBgNpQU9",
  "key9": "4eb2CRbijGR3s9aowdt5deR9qwTfxFHKH5JJfAg4kY2HCBY84igv19rDYtWU6nH5y2CXLongRsS8G2ZqsjHDwDdm",
  "key10": "PJifa6iPyrox3sHBj8CN3bK8cz2v8wJMwnZ7PDhCT7HkUvCy9oMMpPVZ1YCztU5VRoCDx2pPKbc1JQNXHGCWhu5",
  "key11": "32NBSAu4phsLpCUveBFd5DqbFuct1J16dSNCCfV63mxQdEeYJxgE8e4Dru4q887K3qe2Re8CSSoFj3H3XntVsobG",
  "key12": "4vejPh56deCudFQNkNkoQc3Vb2wiHarJD7fyHh6Hx39uPvun9ScS8c9xTcQEVTGo2fhXBGUpXZaXrayuaGnhQVUu",
  "key13": "CvmL7MxSHnMn3byzU7p1VCRYYrCPMz5RL7xk7VnLmTeedBvRAkRWA7g1GHjC8saUNexwVha8AuKM89VqSsVFsBM",
  "key14": "HaJyNepZKtLWPdGX2ozeJmCGzy3cwzbZA9zEQCAWETXfBSnHbL7XUxkTBzfH5FpfwZHWRtHfTeuUZaKTVjC2USn",
  "key15": "5aYiPvUgR7zxQLvY7f1Yg3WpzAhB2TaJzHTLYxFmq6kw5TXxmtZQD4TYxpwAv8M3ztC5VwZsy71oVMCZFEA9iq9J",
  "key16": "4DAQW4S6QAmjGodCkpoXBsSiNce6FdG16ZULZuHsBZ72RFEhZSYbyXGXu7fNbv8cfj4LTUDQp8nWypKkeTUnem9y",
  "key17": "2S7g5pVin84q3ToHUdym26SFy3PUvx2LN3xDRZLVxQ7VH7y8MRWgSjD8tXEct1gBh7cQC7kxsrkeSRzDk8r9EifY",
  "key18": "4FHjmBWGa4DNahTugP21k8ofxtYNHCd6jfCzg15hAvfNem5AMj319MP3pYqABud7Spd9NnEzu7LTqpi4PyyS5Uz6",
  "key19": "4Kn51zf9UBJJsZ1kUHEaTobQqpbFWXABZW58UFUjAjtZS4bciqnyVBbRC2KG4oX71j6XDjbJV1LHMshfqt4YuDA",
  "key20": "5LBNsBcLE1KmF52c5ACoqnmbE7Yem3PTfjptUsPCHprPaa1tcaCjZNeW1R7DgypkjFAzsdMFin1tszvqjCBBRfQz",
  "key21": "3bRHDebbBnoBRTdF2CQ6qDrod8t9szuwkbRhEK93GoTThTHLRXWZao3TWmtKSkx7D3RbjmUiyWvRwNLGftEDfwp4",
  "key22": "4z5Z4L7EpgyrG4K8MjSU3qpoBUBNoocbXTkXFJEPzq1hUo5TrXAHtHfbmznof2RpGYTz2sodo4bKgPia3oa6ERtn",
  "key23": "4pjtJ6UE844msLBRh3fZsN7xqLXEg97yVMRmoPzoNvMUeqAUjcw4NSk4NqYw3YfKV2LcFziJNr2wYepFUCxGJ18Y",
  "key24": "4n31ffEjGXmvVT3rvx4V6BFQeT55xFJrxi49ADUQsukqdt9wn5ReVrHSrJFE81bEsDM5RuESowEavbYNSHkSLxAH",
  "key25": "3iUqBXKhrfLRCDPSgsMCtkB2b8KGiMrp6hBBaqJ6bqoY3mEtUwevg5AfjmeQQy1ue5Usi1x6G4DMmc67n5RQgr3e",
  "key26": "5R16eYFNPk3CYi8uttxfTCgLFrcfdB2MUWN4Ft2U36AJgSfGEMycaTovzo5ajkmweRwpNWcw7kF22VKsoXmFh4i4",
  "key27": "4f79jXbCs4K17EfNUeL2JqAkijpkbefkCKsNVka69mRUmzYyAGZ9oAByDtk7sQskZX9ED53PqCYSpMdKJ47VZyFD",
  "key28": "2gQmpse5QBUCTKUFmkHgBUEKmjVHeqBAA1J8EWxbkCbsb9CToKTY5PDjs8mCxLRXAZDo62vqwx5xeUjyPWLZPN4o",
  "key29": "3fXu2jwBaXxbctotTQpgaGhXAfe1q1DwauCfsU1tD9Py47rPyGMXSNVRFqe31yxPvfshD8RsxoVNron9DjA9FFH1",
  "key30": "3bPdyy5qyrSM6yAGy46Koxvy2oqfDzf24U4dFcV5EBjynmRpimAF2ud6TUUyvJjC19jMzuKig7seh3EoZ4tKHpFZ",
  "key31": "44UCXNLWf5Tq3BLnTVM1c3HbPjKvBRncS5eBM7J3rY5JrnpXYnNSiqVMqXKHy5DV77kpNtKfaZEszy2k7YweKLwo",
  "key32": "pGk4WzQHsY4neoySqx1rhbpJeBCHbYQMNDZsubMxrFzJT6XqLsE7jBXzJ1ny7ckFkVpgf9Xap7gcR28wVGpXVVu",
  "key33": "4L8zmahiFD8kKh4yzZnPzFVHm63rwzB7KYtBB7gggz5YKgWEFkVCR6Kwtk8mjD9DhzFvudPcPeh4cWaNke7MFoEx",
  "key34": "3aBs84BJEuXnQ2KmDm25z57Sjfy8VVb73mz95Cvc58TFvhw9Lpap6wXSWYWtd3Dwesff3JMKXAGWPGhqQt5t9dSe",
  "key35": "2KQo1Z69acL88qqQbWeMo5pyvWtBUVsAe7oZA8nHLGEUMMA2SFdcPLev2szLGakVNkwrv4Fdj6cVXw6G2mbBxER2",
  "key36": "4ff947bGDNh26wyPF4mNdPdi6ocMXr3meKYaqPdywCJa8HmcEkN9t88bAdR13N3LUzg9Fc6tGQE9f396dbmWSua4",
  "key37": "XuZjYPCuWoanGihfLxj18AmahzW8s8PDnEcPZYCPTmbVDcXaoo8fXeKETZwdWD7EidvFrnwPmjaiQ21BCouQZrf",
  "key38": "3Jhe81anfmyWEtBPtjW2UpQSPJn8pd8gPDBjBm5vvZg6RPUXrM7vRHXeviR2rkK26ZJ7FaRcWpZHNt7EfyeENkYU",
  "key39": "2QWog5tBaAUsz5nDfh3tQL5cpua5HcvKxMsBBoVDyX8dWSCwygXVZrrCyFeBR7jnqgxSA75Svhdm655eRU3erQs",
  "key40": "5UM8VLhxeCHHMBmMKP5wJEipdNyuTRv2KZZ4BtHWWW9HXrXbMgJHe2DR6AQZfijdcgyP11YdnUx7oGJdDxaGF2vz",
  "key41": "32ZSZqTst8TjjWmw2FEirXTowS8BjbaFTPea6H73yn5VbG28ZMAwiLWKGNW1nGtjdJ6wbH2uM5aavg92YJEpakNL"
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
