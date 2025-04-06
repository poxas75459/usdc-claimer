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
    "66tbP9kUVTn1wf1L5oGNvWckMCxcPwkE5QkEmxbAUrK7Ev3FGMMtE9orYwaBmsZtzn9FReD2CywGaFhEFhTJxCUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9DSqR8QVh6UJCj7gAUQCKWVbzsDfXSbho3H7gnFpcUeAcWGGTbKdx6SvszGvUfecgMp7cPCdxnYqYGmWuzqrFL",
  "key1": "5TYDLwGsJJpcXqrGMzWY5YtysGci6Tq2b9TjEjpo1cFahSjh8UTw5rrQD3KdqCKictSQF5omjmx7s8DoxWs3m5VH",
  "key2": "tsVnrEE8uvK7j72nATqrTLEV4Ay81kABW8uZnafgkAGj57JmeoTtKvV4UKi2d7v3w8Hpk46Nxu4shD2eBBDxVBF",
  "key3": "22iDGZCy7mLdDxL72gWiqwogTAa41MEY7aKTMBAU3maVr8P71BeeBiGfKo6tK6qFsfkc1rPrVLySkbFshe6tjq86",
  "key4": "ZZWunRwvVGDEYtHxcibZeaWJFXs4nsKNniyUguS13LTZzpCGgBm25GxW39SJ863Lj23DNRLFiYdNThScYpLxmj6",
  "key5": "fGQ9KgCQXDuVt8XBaR3wthktVHVkxrSVA6qV24eofyQpvT4ccLevmjW3pM6FAGjwUT19qDzpRK2jH8TDqhz6FqJ",
  "key6": "3nJjKjfrpb5oHEBawscBFHqyLXdaYxypv8TmM5MJXAe4f7rgaLTycQh9Prodw4jekz5K9LcJvFa8Pxe1PeZ5APU6",
  "key7": "26VxXad5eaaLvKbEogXv5C7dtom9JNfY521528qnBDoSecQyaybKxXNzXiZQ6TQXuSMS4JYc74WbrFPqaFEwNktn",
  "key8": "5hoGBKdMh2wvasYaXE3oLwoez54B7BNxxi9j1oj4tQTWcbLFF3Pr7kG4RFcR6X4AYNp9JgBpYpzd36BHxfKnJgUq",
  "key9": "4K9LrZWhSmAyS2L728XawWmnxGmNJR6NCD2wixKgnVd1CyGBBc5ncroiSBaQdXgh9eDrJJ7sMadpJuY2Z5zXv6wq",
  "key10": "3vHMuqK6mj4x5pefTEwbvMjsvi37yweykcgeKa6ey5Sv3rMsoBCzyWCkoJhDFLyTfXQUYFkxiVP6JYRiU8uNpP6x",
  "key11": "4ukNcCNkRwtgKi7YjFdfbxvUv1ZxQJB21cdcMXJJCwM8oLTmwnQ582KR65dofB11ucrAsr8c5jdJuyNAVgWnuje9",
  "key12": "1Ut37nThraXnnvb8P39uPFkNjuk6EpjJYeGw3vawSgxKNZDhzj1Mwe1RBbdo2RSEnVZLs5UKAZSV3x1MKW7p7uc",
  "key13": "4rYJZDx3AHnRSZZ4SwHsksD9fs7118wJzJqXtKENAkNkfLWuAKTFR9CCEcey67yHKJ8J5M5C6jTWkrrssduFHDAD",
  "key14": "2NS4bBoLsqZKN4LZeJ6a6TCFxmFEXUcwV1jQ69ZAGWHuDiSSZyKQU9F9hQL2nAqZJ4azdcc9464uZNfrJpN8EKNz",
  "key15": "4WaogRSRXFx21xdo5WoeQt1mfvJHgYhijwFft3k2nCRDj53TK3e5XcRJrYVfZZVCVNPaJ5eJsEWfreULUDMbXkvi",
  "key16": "3WipPQg6bC78D8rjorVY9HqLZXqKugXou6sBHqyvHnZpfgR9XsiNhC9DDyEdwnJK3YKymHhqvX6Y8yAgtTfWeUHu",
  "key17": "4DHZg5wbE41bJC1Upr4BFmxyxTpPMV1PKGCz3oB76LXdMDf2pM8NpvnSbU41wcnBD5S9bRsaUmim5Ydw7B4dMon2",
  "key18": "2SX8uQwmxNFbzYGYWdJDP4M97H6tRrCfqc7LWyhfbuyhkK3ZHLYumf9hmLTcsnZ4ULpEHjFT9578pF2wWcAXNfVA",
  "key19": "2T9d576wo3wXPDzibhY15b9vtvFohNnwstbx23Q5kvwQpzn1mBquPyKSqU6HCvYMgepsJfg9sFDS4zKkJ7mUKkrg",
  "key20": "2Macvnz8oo58ZeugRTsrBRXH9F8yFTr3DfAQfptXqVfiFUGDxeTQYnz826QPJpBByrFagyxMJdEuBohbgYrPBaxo",
  "key21": "2LJZ9ktU522FyfqCUwTpMTZmfnZG13X8jqzznrMqLNakEy4AC2YDrTZFxmyKysqLKY4wLr4SiLFHE7sYUrbMhqWT",
  "key22": "2GdiEMr9X4SsFUb1wzUs3QCy8shqacrP5p6Zji1RBp2gSQP1LoM1YuZ7UskMnzRom2ChqtqodkRTfDNjCkBF6nu5",
  "key23": "5MgzP6T7PLbLEpi7mACmpbRcEYypQYhhYMD2SHCmhuohZb7H1vpgUTa7waPr98VHbQGDTjSCx4AsCvHeD3aWUPyg",
  "key24": "4LhbZTYQnWVxEAJSbUW1zLKYE4vxdD4E7nNVRPa6orq5bqqPDz1KGLU5vULVftTjKenJYiawkaQzMgva36A69428",
  "key25": "3tgRifeH1eJHJA56UBgNQtUtETDESmVPhQURAbABd126kSjbQejbAnxt1b9nJhmsL6Lhe1QfgN2BGsBF3yGiiwEa"
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
