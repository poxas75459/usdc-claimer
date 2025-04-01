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
    "574sN4AtcmbMYiYi4eUGrPUAMBMqLR1cWCUL4PoyAseFtSJQ69xXUuyoe29HS6Ps466fuZh7WL74d3Fjhb64tudL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458myLDzzyjpezYxyfNkqJXp9KPJ6sKwHibBRdzd2c4Tg26V2W8Mx5JqFGBN6WsgRrCxH13QXFLHDxWEp6yP7PeH",
  "key1": "55YQPvkXPsfBFyqrGF2mg7g5seFAT1i9ELRYLXi9AoSwNEaakt5CtTkeGuNVN4RMJwGLP3BpV874C2XDDa87jjZH",
  "key2": "9MSKkTca96CipbbtbGKERC99EHduh1bhDy87hGRfH7vzA6H91FcHEs7Ur7kWSwDgFyfNebJAxfGnWWwrCZ8BCLX",
  "key3": "29xw2W147745SCWhFVUHkcjgZbRp2qejVyEusNaUrqLS4gAYL76VVBmLSEuWbr2wFo8aESWN6gKKsWEhcUhXzWeU",
  "key4": "5sturtU5a5QBAw4Vc6zVTDX7Zuxf9x6rQZEj32tBtWE8gY1rKYaTpbJAMPrMxXBQgGPR8iawDA9wyrzdrxLTmw78",
  "key5": "4ivUnYj521VtXvv31sPQwtUeXAAYsPbA94gtE5kXj8mWgDEAYcxWU7wyTfV57mQptrpCoCFnVrXsNR3haJLb2gxT",
  "key6": "q8Ydzqwoi16HVTbjRC3Mz7zTpUC57KjawfA6HSE4wqL1X5PCsPkbdPcZ6i7yAtdJLiKBRSzgvG2GpBviWzNzdW9",
  "key7": "3Wbb6mebF5bwLEPnpwcvYnRGADEPkMahanLWoeAbJJEMvgkUio1NvdvgygwhBGJz7EndCeaueh1mjWUQfJA6bgS9",
  "key8": "3hAdWGMyrefNs4DTcX3WGr5sPJASB5ERJi7FfXTuRxiw52QWKQevtRAajRvuuQHuHakQBGk6ZBurfNfPNYXYHnZB",
  "key9": "4ciKxzzFrfkwNeksE87hQUYarhkN13x2kNnxRfckRn8kG4XFEuSnzwqxgTeBk5t22X63VTaRn2F1mhiBdRvTMAQY",
  "key10": "3ea4SnQdyBzr3pUpHvBrwMihZA1nfFMRULy6SX3whivEim38tRyTR136T6M5tdXNPJ1g8LJXxwzHXcen7DH75cgG",
  "key11": "58F1XhBbxy8nYkaMXc9Qq6m1Bj1gJRC2ntL3qUcKwvo7Wmt7i95vbcUfJh9QvXRmWPkkP48KnFpvmMbYQWSfH64n",
  "key12": "4tJxBKUs6NPCs5mnuqcTPYASASKYc3PWxgtqRwcbzTYt1RC3m8bUTXq9QaQA9ZELHuCEiPYWYC8caSiB7XLQyC5T",
  "key13": "4hEovnXb18CFnshEWpbZycetwuk9Niw1VFJhdD9XAKU4pwzMKUg2PttVGcVg5v5BNuE55GE7QvCUXdZbt4rLxkjo",
  "key14": "3Yd1QyNxVTkW9mGiwqR4H81bpssiHcjshPNSUiAZRsn1jDG6EKu6i8bk67552for1MmoWgtXgLHgZj8PGpM2zdob",
  "key15": "35f3dDpX6rf1nNtJYkZUn7yBugqPqEdgps997678WFaZxhBVeuavFQyADSnCVTEHXkQAqtyNBm5B1PoogSyBxTZe",
  "key16": "4mY2YtPSgsc3mJUacYbFternYAhgX2naccghZdAus9YrS9qw5J3MjE4CZJcsVUjwmGNc5Z8ftU1bU5Q1XvbnxeZZ",
  "key17": "zeUM57NYQZBsLs5fLK8dk2VmC8JMXuwnmjjugsKSi3ScUgemPrkR7UXGxXLUnM5vpkJEazAqHn62R5ebGRg26jX",
  "key18": "4m66naTdCyWSaBnxsLgyiZNX6ycmRpK3sXJ5JRzBp2xth2hACq6GBoQdBzWoehd2nDsG1iA8t1pswkH6mqqubW7b",
  "key19": "1AnCf1iGYruYbmzW8R5UUyrNDPZmEYggjjtWvDt9kV8gNzAcVQgCKMkhng1rAshkQTzG6eoFw9tFPxQ63oQ2Uz8",
  "key20": "3cBzKwhCKJdPqWbMR98Z6MxUvcy7jBixAE2EKJUiAr9xXc58vHqDW2FnwaKXXgAH8Jiwz1fSHFZWSjytVQpJkgV9",
  "key21": "Um7znPJyWoaiWTp8FK4jVEA7TZ8PpH39R9mnidweVGaXt7dzRLTkDjh7gPtDFGJyAkpBrFxncakWkTyDnNcsGtw",
  "key22": "5eABaeJUksYngvRf8sTAbqrrDMWanPhJx72FsZtmimfgbo5Qk84fkfq9ethAEJrts7T9m7mS1eKxivoJEYPpT9f7",
  "key23": "5kjLSTsPLbTamYBaQyhNfuLpRoPq9BnWNgBTBEzUxewkP7NQCdWJrVN2AY4Yzx4SCMANitjrfdyY433ruj653wXA",
  "key24": "4APUMrYVY3XRVBdP9mzcb5F5puoTgcKMNhQEEcERaz95rPiSQqdzUHMD4cqSLnuMTm2gmRtH2QLbRgFMYXKCiNwz",
  "key25": "2eKn7kcBfBzAFTwoPxSdiPHT7DxjLtgvYQqNh8g9wdCuytE38gFGCXYp8mBSu7yKCXktBUSpLr5iKU3efVrBZiAz",
  "key26": "4t3KsvU9Dp4kKLgR6tfq8hHQrao66x1spwJRi55zsNBztpocsV3TbZ7toCkKKvnFNBFWMiEmu56WViLazNi4zdP6",
  "key27": "3vdwBSDznz2P1mU8UgWn4jLWDv2DvmURFzan7puwz6G5zEyVvr5Cn9NYt84zXGtq1XTSfxDRSrdBrnUKDXH8pBYC",
  "key28": "5UNxuNK5ujJgv5cBpG6PEYwSpAKHBHarfbyaDKSPPP8UiHvLtCB2uTRQvzh5uMhueGq3MP9RZAoccX9YHy8dTni6",
  "key29": "3UfLADQ47HFveDFY2uf9cLLaZKCSEpjCXisrPphQ4tSSF4aS4eSXqgMNnJi8SUQuFUnc4N4zcCz2EP1mETUnUHHq",
  "key30": "53SP2xAxGD8eZ1d2TQ9pH3oe61aArLjwkhSbkDpDRmqU3MeW9baCNS2xkFfBmiEBcvwCLFL1JXafHTYhvMD6buJa",
  "key31": "35QJ945u23ZibMJoN28oh4rotUXhxGaRDNzbrRoq5XA5BpMWodzc9sqkcqfq4iRBwuBxenxR4K1CNnwUz2eGJVda",
  "key32": "5fKmNeiaXQ6PRT9shqCetMNCveNeAwYgCqjs3GVogh4NmLEyXDyM9XihEpCqQaRCQMTYdXJujC5aFoNyTbQHkFQk",
  "key33": "67Kyinwh6VVADASYMby9fKYu9SUdDnJBya2Gekd3Jo4w3MEDwUjy3aLgcnZ8PR1y5Bqqaz9NYwBPiGwsQv3yckLD"
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
