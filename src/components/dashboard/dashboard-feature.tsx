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
    "hf1pqC42j1gZz8ZQ3ApRQA3XeDSVkSLzeAkw3PoRteWUB8j5JcHLLTb2YyqhPyfmb7UhJ5BGkvh2nHnLhn96AWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJzUAHBa96jrQBfu3uGtWnstcyMi1LNiDd5iztYB4q8gfswN4BV5ernodgA5RmJD9QzBJKA9WfMdWp7nV3d1e9G",
  "key1": "59pV5o7QHsXTx1qcyLuiVWRa8reoWL7MiyECJTa6ox9BDnZx18RdCSSoDSZfCfXngXdZx9eXfwESmE6qbUgjMLvW",
  "key2": "5zWhYiHukNVonKYXWLm2uuwKUbypmHndStJ3Cs7S4jxcRyqD6jtuXRjKte2fsXhVae9W47U7mRFaAi918Zv86BbM",
  "key3": "4Nydq4TBg3xWg4BugWPa9e3KgfEVsBzj5dhmp7MJS6BG4f9cfZsVfwBgV9HczrXvV9zs2H6qGDMM59vFBk6HYiCr",
  "key4": "539oSXkvcuYn5vnCtYEcaHyKac5URrsAJVb4zacMMkDajppyPM4NUsRh8jkQ86APBEy1b4zy7oqJmLxakZHN6xew",
  "key5": "3fziRBLxmfrvW66a3tsfoedK6G8xQqJUQTByAdoF5NE2Epc6DgN3v5kfCK9nqUWSnjhi67DYu64338QQpjXHS8pc",
  "key6": "5c86WyAC2SrzFeu89Sy4VkTHsexCnieuhoYMc9zfdH9DsnWs5jKboeLofXbY1j1ZYfAFU8jgGtuVMfB8DKExpUNi",
  "key7": "4gHewcSHQniXhsoediRLqvDsfMr6VhL518VvTuBfQ6yDNUDPuZyyk2VgpbtD5r2y7MPgfx64R2w2s4LLABK4K4PX",
  "key8": "2LcRgHyRc9JUFJGprtyDBkMELUtV8UQxvfeswBWbWGVGdodBUJhTyPZarJTKskEoAzxEdq9wrK55RRsrJYGwHjoH",
  "key9": "3bNsPmYbSeLsvQuMzdajVRJX47gL3WrvMfxCn1Xt1YeizviYKYPau77rQ674N2xvfAXYcNJwXpdhyMUYER4VyE5p",
  "key10": "33gtcKk3oLMZpbVAivCVc2L5GueKhptxhHC6VC1mqSChUUr27KWCbD4LApuAuEmo9Uq9tiAUdABZbSeA4w4VjQQ1",
  "key11": "29VpfCq7x51kMfozDjKVeCLw18KKavybw3Cf5wQnzp4zh3fM86AFC1RjxgPM9EFdZWA44SX8JqZbAuN9DeJFhuy7",
  "key12": "3wZNdRBudaPW3xBjYtym2nMM3kbeu6hL4GUdoB9KUSGzNcUawctobx7hN9z8YcGu68CbDbeHyABGuoVKRB2SjKQJ",
  "key13": "2zJHDbQ7xqA5UychAs6VHaSaa2jmfxE7NZtDs8C9D9eBeL25sQK1Mf3TtBLbBZWpUsu1erig9dg2Y4z5i5TUbw7x",
  "key14": "4y4NNd6r1MMvD6vdwokXPJAmyHgHEPVFTUrXhZykP1rt5hm4WmSYZDSWW5zcQo9MdhroPtvdvuZMGkshNfVMcAKw",
  "key15": "3L7xDR5KcV6b5hNfZi4HS3T9kKSERuwT7DCqJZG6PGusUaB8zGm2mbF19ozuk3ptftzFGHVP2R8hjjyRVRMfLa1G",
  "key16": "tvzAgpfdJN1BedxYhARCCVHRY6pwxdHLqqrNrVb2FHKAuZ3q43Z1EAukteh6XBEvh4SF5mCLWGE7cpySH4zmrNB",
  "key17": "3oLxbXDpNt95LpawpwJwmuqhhoDbVf8uRMgUEpWNqsnMqkWkJgH43mnuMhXdeUhxzBjCyVjHRmq6bNLnf9rBpSmz",
  "key18": "444SQbt1bAqkMkSCUKdktAtjqzcwBd5HqxmwLtyjFLnfidobbChji4s9AN2w8F5gzNKUEN282Tc17vYxaELyGzxT",
  "key19": "4rQdGMLR8CXzyouwwxt7R2MGftCNa7fXXp2oDqrPh8L3CVzvXpNftyMUT3UKwDXXXZjzu8pn2FK2E43gAQvf9VAj",
  "key20": "dBk15iYUBapR36tVjKtZm9TdPgKEg99wzhR8tFs8DoUg3jLcbNbUnaFSrCgnki4V3qt4fsFmpGEMw7KA9icVXAL",
  "key21": "4wKqVtRaRaukP5ijfEn2Z7QgoJRRuyq7aqGfxcBs4HVLH1Y1BR4N8nW7RBkvFNqvhQygWLoSNf8eFcx7s9SG837J",
  "key22": "3yzPrZ5Nr4Ej5DnD5eyxAtsSBWJCav6fRHh8rXnToyNqmjTTReR5xKz9iuRcG54wKTNzV2zv17cZuWsGFN7V42Vh",
  "key23": "23Gzd95eGYv3rco4thQstHYUunaQHxyigGo9NtUgAYX58Axt6QBB7WzSq3WGSnEPHxsEULfe14ZgG6UVbYj4BAq1",
  "key24": "24wWGHfZ59vETrmS2FBRYzdN2TBbbXo7LZESgb44z6f1yx42eHPqiwSG8T5DXwmGeviKuLfBgsRPgnfYjGhFPazA",
  "key25": "64D8HW4Fq1XKiocPRWYB6NbhMc8aMQJHwTE9przfdWX7f7bUn8TuKkwQZisqebFVHH4ZyX959A1qs7pDSZxawhHv",
  "key26": "5brS3uYoLGdui89WMkqnLqYBu8eFqQ3NmHpwEb8U5vXoYGipv3vyMGLe57VYTUxdxG8MmFKMvtuM6LG8MZ8xkiEm",
  "key27": "5CXZwrxNdDh3v8aX6UCnam7xwoiK6kwo4Bii6BsT1YuPRyoDKaJpGkjZk7zq1t1kA1e28SdFdfuEQbUkFckg6TPq",
  "key28": "565obTAB6Z6osDJpAGs5g9o5EPKCrJLoFgGLwVbH66GVoi45jvUPsdTFQyk8J6XekJ1Zp2pxWSFYM2E3Nc9Gby69",
  "key29": "N94XeS7Lj1vLzN9wxQ8rPtjhqTuSqixHr7D9QebSUHPUNDc213fKQK8kKoBoGHSywVmSUVgKBrCAqKau7P3QBPH",
  "key30": "2NX2cLPjEqMFBmuTHcBs6uHEKwhLGChK1hVYRrZCp5dt6v9Y6CiNnd4zPzeLdJqX1Uvx4UxRVizvX7Xh5VWfD34a",
  "key31": "2hX9FrmNSWitV1W1gEzz6nrE8Urwxwf33A81PKgMDNUD1nAWBLT47j6ikY4zQcuKg2m3yYdGspt5gKh7S8EF4vrA",
  "key32": "3nBSUnN1Fn1gVKM8q7ctEKPQzHEAHzPct3QPzhZyn7JZ9brXSK55moZdskenSXT7AbNRv5ucdCdsDM2P6h6Mv6Zv",
  "key33": "5BMWLLw1dYAkxFRLZKrQaDfCAe1486L84BT8edGA2wu4dKagiXqmeVrpMkeJYEmgesZU68JAYpS5aD9XYvkc8seQ",
  "key34": "4uxn7DMS8QoTiLny8i2SwEk7etbMVw6DMyUzsKtfPgDKmYsYUSQz2AiAtuKqvyvFSX4fEHU5pf8Yn2gAtUsvFHxF",
  "key35": "66RGg9H6oJXuJyxyLtPmT41bC3FYbgrJ32azkpGBKhu5L3skzzamiEkM1k1mYhvyikdoYtXb56kgQ9T8kfd5kHLr",
  "key36": "38opTpghfEVNVBvXzf8GUzUQB247gu1RJpsyftti9qzdZ8qrUH919FSpyBj5tMnLpPnBgsfZguVALaQGvDs9URUk",
  "key37": "2qQjxqBmw2STVZdXKw1jcBK59rNYAyQS1SiV1HwMzfZovJN6rsQW8p4vcnGYAVWf7GjzGyPTuM1dx8kEDojEaVtW"
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
