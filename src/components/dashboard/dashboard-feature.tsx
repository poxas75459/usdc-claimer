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
    "EH5v61x367iq4C5hirLQRaC1msY68DakXagXwBaKxRrnCmZTdrYR9QcKFvSTRf5X6Q38vfBU1S3ZxQUkZcp4DRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YyAiEAuWqvmWjALq4srPCDMhTHCG3BchAw6vj2gAjN9L6L7eyM2sutzsV6UnJ2ADHLdWQmJUQMqo9ZGorP6zyc",
  "key1": "3WrRxLLF178thk8cQLPETXUhsG9a52YivmwZHFAPHK5FffYxEcLSfvKtrd4H2QWEmBZTrcRn3qu5CqDZjJdLaJ6Q",
  "key2": "4mLntSgKi2y9Pp1weFj8Xu7FK4ADxGon1RDgJ3bRSud7JuD3wY84k2eE1yY5SjuP3CUAztEtehWdKJ1aHAySzZir",
  "key3": "5U6g4xJpyWbmAgSq4Aa8A25VZMcLBtj1seA9nLrY4Xwbhp6stvgbrx1NsRVUo5nJSmkfNatzitrF1LWS8ZrtmNQR",
  "key4": "W5n5cke8DnbfYgewvMYgF3BEVAy6RwjWGQ6pPyGKZndBoLuFwc1KNmdkXHydZbjJLKJzhiFhyFJ94wfifQxniC3",
  "key5": "mviupjARB1d5eUvgdKiF4jfcT7jxbPYg7XGYRw1zFK7XpzKfNmG64LYmD7kLkfyaxP9zhWiMEkbXcyZwGsSATJZ",
  "key6": "5cEwC2DzmXZ1AyxWtzHeu6k3fF8UqfQmjCNuiVNzkqCWrojYuVtvzLBmvyfF4aWoKoU95277r4gS5hcAaEQgc4Qq",
  "key7": "e7JSSPG9rEo4n5yxfg6fJwnhW2E2NUFEY3bc8ZTnwR4wx2mgFGiGsf4fAepxKRSKpL3UcmSHs9bE86YV7yRVhzV",
  "key8": "4PBRjUepHavvR41BP2TpoWgw4VhBjpZaU4ToY4vvpiimqWUStcmXQ2UgdsE9KgUW9nMqNbJw4pUrTMNNr1stZZep",
  "key9": "4JuiXXZmxgpspYNcHJxSDweBVFCvYFehfoa9K52gDnBrwyuu5rmocUGKW9eZqqgQR7Qmn1Z1SuLpWaJ9bVMnQEKd",
  "key10": "4igfWvtYNSgBrXhnvk7PRPiv8bUGyAWLy2XqABRuA4MC3hxTd7NvpWWWHZ2pbj6XXoUTx9yp1gzZa66BtFynvnAN",
  "key11": "Sbn7ZXTHMovmorKUww48uauyVTCm6ABqHN9vvTFioDoUcEVKtXE4R1f41DJCyixbnTrCJ2rjRamrYGW2Ep1MdsJ",
  "key12": "fbWRBSauguF2Z5Mw8bdDakz9wM7bFG6ENbfLHTBLP7JLXqHRZZEU5W3gLvTCfzLN5dkMo8FimFdyeDQbEFuXjyx",
  "key13": "2bNNpBxipL37A2pDvkEeqiEQifVNFDxHgdmrHoUVNJL9SfAM97Rsqfz7nkaKxtV8g7ASQzNLNsfWacxM4rE8f6Bo",
  "key14": "4b8EyXEkWd3snvEttACyQbDuKbdoeSSf35WhLjpNMYVj325N4kFtpJbAWRvJk8VfYwmMdXYh3JRDFcMsYDetJSwB",
  "key15": "2yZhWb8Fkv2szuMmB1L9otggPSgDQka59KWDSHeZ2EPaDxfEyaUQ99ETJNcQScVrJkzhQArFunv4cn5ZEdhqMgHW",
  "key16": "2h57Qf57RjE6BEQHTu8jBkhFVicVmJZu4DYQ5j983L1XWuVGX2f8VCmKMRgSHsEsnmmeQCzcpWkwbFJsgigMfjQv",
  "key17": "5gV2kDwwfPDXi9X2aiEZ4Ap3vs5P9ZF12uCjRz1stvAxpBYqWCwTpXuicXWBLQNvfV76Zw9eNKWfZQtsqedC25dJ",
  "key18": "3wnehVCJ6PGQnwtkCFDhhix4rFvB4Nd4o2Hh9vxnus2Ji7YRWZa8kKGhgZHx4DpoVZiuYZ98Y63KneWhoQxtj6WS",
  "key19": "4P8m9oMpTh7XMoVczsqwn4CshpJzZRXKt14heFnUEbDLrCLQbyN2b8f4ZVxU4Rh1WAHpiXmeLbK1R8fZxftQARMX",
  "key20": "LNrDCaGFw73zWyK1fgPg6bV4cL8kjtX8uJfnSD4ApmhLu3jb83T1TePJB6WktxwkoV48zmirtSebNyBQZvdZRba",
  "key21": "3Y7SgCVbYjPX6XasUTHCLmWRv2451Hg1HhMN9uFdUjLNNrtaRxYHU6Y76hDYLPzdg9Sdyf7rob2yYDCxu4yBcizd",
  "key22": "4avx7aVuBLjC43TgyCyt7gLUpVLdfDjNUmTJ2QxVLTZpVjSBJYEW3HqEcFnTug68Tx341mgHqjkiVemXWqL2KgQ",
  "key23": "4i6tu5hNu6QMeFw37AszF5pnVMH8kjWQNDQXJJ96Bw4poobEDzpYTpzVKUFAfyeB72rYZhiaGADPgDBaaHmeQ9iK",
  "key24": "5ug5ZiGxwvjzJT1VDuSERRBRcFkQXzuzc71KvZnHVXwEt6yvSbXX7A38Gj2pUdLeHWLtqMixt6Nb3HZphbArqyBC",
  "key25": "3eTH3ZNt1H6P5kqbibSaqKffMnsJCWJzDbdj3vgJmM76PBuW4gu6bvJnheUWeJ56jLoHFWkEyC5rMt5yyGVNqA4e",
  "key26": "5A9WL5hUaNMVNiP3jVjmebVGjfKmrqJ3rYs5RFzFa4zhsdsXVf1hZCHJuHLAi5Lh85CZx4e8PVXtxGo2S9L36Hno",
  "key27": "jeKmtR2Xm93NvFXWq97wzYazcd4jt87vAhTYw1P7FrGjVxySsLAzH9BwoeCsNE5hdvtrQeKC4j6iF1DWJwnYehc",
  "key28": "31sY9Ldb67BqjtiiPZSH9jHT1b87qtyKWGLeo1uPAtdhWGvGWAbThTpsD2ALerqShdZxya17wxG3UbhoRahnBp5N",
  "key29": "AS5vNyCMciMwn1Wbp4jcg7fT7LAzWayyqbHTcoo1AuxYsmDpAuAPPi2AfBwYEJ2kKWoBcqn4UazeDt8t8eqPcXE",
  "key30": "4k8bmM8uEpme1u8k4PxxkLZFtbguAvTRN3Uu1aa8Hecak9KG2jngSRkduZyJsw9JcGvN5FoXF7sok84pzpBGKVu5",
  "key31": "3C8YwY5NkHYNRm6jCbTBDYsD39fUVKxifV2QA24ANCENqoJ6QMd4UEiPZD9dLLiVvX8Ei8SiPy3jv2tw5FwbbE5H",
  "key32": "23Mfj7zijzBLFTD71adh9rKtwrqYa71JhqTnAJBi5sp6XLMtqcruDUzQYZhH9EEQK7YbdyDGz1Y2g8c7nKzsBh2Y",
  "key33": "B7kxDvPmpj9CS4TmoHaRCFaenv5kPSdJw3y5qoDyz41RodgCUBApfY2FyBNFxemTfCErsnYQnRirAV949zVonrQ",
  "key34": "53ZeTDZ9KRvTYXn19eLQgdf6qGPA9GhHUtb1Q1GHFYSKoXfit1QhYcs5i4srhizg6UQvB8ypK47tLYqmV5nQKoVj",
  "key35": "48XSs2KvJfJFsgawXrrY3HodRC94PyuSiAKh6GQWabv7Wcy47CnNaSJt2v3JebFZZKmzj8SetWGGQC6WVSPSBDtf",
  "key36": "4Ag2pvzUzR5ZukE7DroKNiMDze3s6vhXJrpT5x1efCWEb93YDCdAbP2pHFD9QvbL1Z8NJtBnFHj4iAeGXhwkXh5P",
  "key37": "3tjSuu3sg3maLGYyTAd8UfJfw8c3Q7M6fnMH9uPcA9ymWqu3dmzGXiV6KCNEJN4S6NZGZVLrBLCE6fwUT5wd6wnG",
  "key38": "2oiVueEqHhRQo2xTSE1SrdidwPW3u2zx8kBCxcp1Wzp666zqbkk8UyEu4joNRc6u2KUMu6t8rHxwUZ5bjqdrWyM4",
  "key39": "2Ao4nC9CTzqvwPUC4qw3dtjD6F56SYPFh6SbGogEAESYBu7uAsC7DWixyTH3kgBGv6gPM888T1nP4g4LrhHE97ZK",
  "key40": "5aXRURLRGxy5T6niWhTUyAbPJvjPQG1TgWNY9b2Urqpk8aCsPJfSThtHdtdeMeHummqnYHsYfqnXdPsrQnwNSSuq",
  "key41": "2Qpzhk8hEHpddg3KwA6kPfjdRjuWb67yjPzMzU9AkLH79quB349pd3A69HFBhUCkxBZwQvAiVzseCG4QrBsNXmZT",
  "key42": "xpXeFBQt4K71cjpviHYhdqp4atpVA6fMBeocCqgJ5f7emXSc6JfdMgw4mV4ctw8bogNCDmdX67B7pYYPCNA7zNc",
  "key43": "5Xv487nTHpZ5sYSFkXKudGxHsBrYswfkMZnjz5cXK95fLNj8AKFhVqdTkaDKf7FaQLPVNLiwgn5iB49ousZGwhiM",
  "key44": "5oeMjDvmNwFfMCKaAQNGxBKWDud31WtjgDwSV2QrsFA1CkY1ZThaTEKRwot61tULZS87Bv8UBSwWBi7f4a6LE9CZ"
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
