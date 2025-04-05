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
    "2wThPqmDZTbDqJU2qoCV1nfGhJ1uixx1z4VWqnRZVf5rymsKQHN46bEVEziSG1X9ajv2wfgc9G8Cd39z3EHpE33J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uY3wKNC8qzWqKFDWobAaDheSZvmiNE3sKe843VWTQzUaSaSzbeoSL4z1tZrdZkKBvRU7TrFXAnf68riM8Ug4vv",
  "key1": "2awQM9jmoMNdLY6MLcfsojN6kNB85c1btkzr1XzbkGgHpDyKCMc7mUasy7gEeheNNYm7ThbPETTW28fWc8YvmkkL",
  "key2": "2HcCgZDBNJuno8J3qZtYH2HrodYc1bn1gM4eKWidiJeKonvtSkbzeaeUWctgCH4GxS9cNgavwboJdNM7dMgCyVgp",
  "key3": "2pmWi7k3196wiASZWsfBkshTAs4my3jA1mcoMtQ8g72BKBH9CSeJxhaGxH7QJkxuWDMrhFtuPLs5EAJSAPseDPy2",
  "key4": "2QQjRHNkrvMmxjQztX7ywFriGHazCZ22WQF8S8fYkQPPHDUrHP7jDjrVdAvp2ec5ZaaUieteJwoMZ7XSzH97nPrN",
  "key5": "5MGh3oUys6cYXftzyESw7Tph85bpCGeXjmSHvb5s8wc95XBwk3kupNa7HbZ9DQiSzMADmkGnSgzSULBj4pcaXVVY",
  "key6": "5xWdNbbN7kj9v99mrxUW1Y7mpgrt51wFiEPKsDXucafu78beT3PsRty7pEV9XvDxmKFHC9qJu1LutLwSgggrFD6V",
  "key7": "31CTsVaGALCXzfJN4GkNSpH5ZCPzuex3GzjmzudCd5Yyg8uZCJZ9UDJhYf2ZD3dcHdTDPtsjimrFoqvVfHqGcgEx",
  "key8": "3jB5qwMynE5bsvspnkLXpUXdp88Q9p2pKsNYvESETT1vCGXQn4gJYtUDMoDy3ikFhAUWK5hHV98hRkvMm5KErRNv",
  "key9": "RfRZfL29DGNs1v1oCPPgUJYDYm3MWNFQhgrZMAAuVQR67gvkF7fFmDuKaDX323w4PuYexwvV5jeAMSMcz22k1h4",
  "key10": "251K2oBugMuy1Bg6j5wrVCjN3KivjvRp9wCwsNaCqs973ePdXHfBfGAXyWdEMbTttFjsGfSRWfAMtFxqBwLF5c15",
  "key11": "2wszzM6kbmvqArQyFpyN1vpJpnxUQzn4AG2VCv8TpiVBbUrVre5z3ghJKSbfKB1tpzF9i2VTXGnZfrqFmXiVyv8c",
  "key12": "bo4GE4ihBWUx8D7zzwAuRTF78zjEtD8HPi1pjjim7sgdh1oMRzWz8nuQnXQ8Fgb1pJKBtBNCZYNDWeiNE4DcN3h",
  "key13": "3TvaHji36E26P9RMmWbayE8uQpnvQuQE6EnHQKWFeAzXL1SZFjWevgXk7wJXzoP7n7EjJQdodY335fgmVcj6JG1B",
  "key14": "5xRraHqHSRJcATqYUJYXjXMWiBz6x6B55vVPytGq1U8j5DQBNBfMnNq1Ymw6w1B4iZLSdxxVjwYU9wcp9r7pSPj4",
  "key15": "2qyqG4PGE76SNzXBm35a97WraaJgskvNDcWsd5vb6N7MTXGPqQfwtFJQJRqxpPoUYA88tjGK4yrTouiFiZf3knq1",
  "key16": "4m1pieLm2VEiyEjR1hEoaBPM3ARzGTuEsYj47YpNvJaca9hXCTJefjd3vTRUX8YD4Kz2HVv42KqcQYtvWHr4Leqo",
  "key17": "JEjM6pLkuvU4oQAv1EZjbAVtBvTCzi15h9byjMENykBsquvdLWbPnPegwqKLsyyLWuQfdDd1RmCyiaLdJx5bTX4",
  "key18": "4wM9DTMiebX5eJ5KZgei6pHrQQpUwZv2Xy2DyWM35pWSD8LRpeCKf9vA5X5hSQBFM98XxGkjF2rXtmcoQ7185Ln9",
  "key19": "ZrrnQBpx5bhjippsn3j9TyL9GeBmuGC1CEk8RfZjT4EfeCMSEf2bxUgQF3YS3fmaPtk9rL9gQackNKSpviuz5L6",
  "key20": "3kQ2NQ3uffhVP3nyGiiLLyWHcRmyrUf6gmJNJ3MC7GeJdoLvPtgiPdMFFoVfWpNjL7u158crkByq6aAwTCvYFWEQ",
  "key21": "ejUoiVDXNe4hHZKJgKqUDHZm5rP6XBbiwFmDkhG3eq4P3FosVVsQp3DF3FJ1fwLJ2jmZmNzfw4761SuQGmBPS5t",
  "key22": "o7tJfoyaw58PLu3awf4xp71YvBCZFRbhbNhp6iGaEoPDfQh3SDV2nDyWhgMwAUREeK3s8HAnMNkLuCB7mVmKwsb",
  "key23": "4C1EdMGyNMJdBPAfnLv2G8nk2Zi64xBsxKNW4rJDXVb6gsXZ8BGYsfFaD7AdVqEb5dCSYB7qKPoFCGuY78M5wPxm",
  "key24": "36A69kPEJZJKjpUEypiZGY4fhkMqXqw3kkfL8ojHTPB2gbE55TA85ekxE5WGH7iSdSCf1hW7gzeTXCsjjgACZFB6",
  "key25": "2Lnd9edR42YjVbyeSgfWaUqJXj74wSVqrDzbetpnbqZVAZFNfP5hrSkSLyVjGkd6XgxgTNmPLrhJtd5vFR1hpYpK",
  "key26": "24QkbxHjmKQeGjVPjaoFvPjELspB2r5dG5WUabfbcBFWxjQjSfTi3Q29hz2enziUTXsrfwa17Pb4reu3iTTiS976",
  "key27": "28wivX6wWrhwtDdiugs8wsbrDd9QpG9iZBHKUZQYcbb2S3ABj5m8jpbZjxwPk8z6gGyW47zPPK4CCx9dWfgqrwk6",
  "key28": "42kMmPvte595KCXG4PmigEQ62soB9JkeShhZYLRGtpmfg5ymbWALbLPTRuw6Xg5z6MhURJcKPdE1NkmbWuVqzqFW",
  "key29": "3UYeUo3gTGvBFjaZN4W82g5UG4gdUJ4Gn1iamEUHfgLq6EMJP2VEQGV52xbtDMFmRNQFHGKmpS1F9Vgkg8LeCUd3",
  "key30": "2rAALXhCMg8ywtdQFeEs8MNQaCSXZ4dkVb1W7hNqECZXTHdfC6FZvGmzCwfTFobBtszMtxfqHPh93HjgmAYZuJwo",
  "key31": "5XfEehKHCPSbGeGFLNJPghXsqn6FTgpDhFXopzsarPDM8bs3gBRHvHs9c5dFxxfVfLTeAKk9qygcJakY5e4MRapn",
  "key32": "4KJ6xrd25Ud86RY9Kg6FRXrPkiNC2niZ3RjgtjTXYxEAmQ7pCWVpcDLNvs8KN3xogPTCjCsTHvn8b3mDnemmmjiv",
  "key33": "5axywAtEJaXZmXUQyduxZCUBX6vCnRwsr5QgjStt9Jg1UkvVGbGA8ZdYcFpNRNh2DXFisw4e11qzw7ma4Ames9qz",
  "key34": "4YhBoZL7bch1bcpdS58mB5BtKAEGtZU6rBtW21UMrU9VphehC4FkpRkPum1nHcKkBLN4jbq27Gh8hMa1X9VwdZuz"
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
