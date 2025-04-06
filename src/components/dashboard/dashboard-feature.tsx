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
    "53gnVA58QrUrBKF3CAEa1T99F188B22jhb4XFenrfFmzrnY5LLUbR6x7bi3pEEdRxQCtAKxehY3eWRuH85m7ZfCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcqRnQvV2X9vYTnRMZrt1AM8u2QXA2yvFkQJfRvm4fMY9kREDrJffGwVjTLEkpwT98PsTLSF4vDvCQh2cjMQJyQ",
  "key1": "4kFCJzVmScZLJRDGjRoA8vpn88zNuP8z6aLBiLCSPh1nvqyRqJskng8N6ucCiZsbjF4xidwVRomJUE1fCmRh2AiE",
  "key2": "2kGdL74x6y5NiUftde3HHprsbt7LW6apDAQV6e4EvVonMGsgp99KC6VMXaggL9mRUX4UG5awM71e79NkBwcDR4Ht",
  "key3": "3rdbvqkFLB7XD3KN2Z6xG8XkTPQh8eK5DiwbpVLh3zytpSvhbSVk4W4RHtApV8e2jdWmTmMFgYdYsBpqjGdXcqUe",
  "key4": "sjDRNzgRTojshrNBLZTKjYtfZvxJ9GeXGnTrdMKKpV7fTDxr8BuJEazAxn7NgXCrhCWSw5xWLuYsGridkcuu9Lw",
  "key5": "2uHDskC7VMhnDzCo3qf6FBBFuNQGaYmUAoDC1V1oiwoYa5bgzYvY97SmMgG4bvZhCsZgx9YYfxcYDuPXnwEiBZ3B",
  "key6": "2R4LF2mRcGVV4vMndbJzqR3aAGngQpJFWPZQr4tSSzskgzbpmrQfffEzHZTD33TxiyaZZF5YywUmdUL6LhP8VfBx",
  "key7": "2hzZJ3njx1AhqeGQL881zH2obu5aHL9jNpWkSXjbtky1w1J5mnPxXBqXBUfeUAdgWT6g92uGWVpReeBpC1Fz7UL4",
  "key8": "35aSWLKkdNuapNNgqfQYd6XcWMPb3jRzdjcvsCv4BiiMF6d4CS7GnwKA9EaLxMzd4jwNy5GV4B4DCaktG4HucBWY",
  "key9": "P8ijwM4nABXmZjEYRfPpfNhPtrNzzgfckT5L53TWo66qDku5hNK6qSCezByeAmXcrPi6tJwkhqgodCghF78ksQS",
  "key10": "5imRLzfkVzqD4rUjsdNozKRcNisfrExwQ6q1HpE6K8uFwvpyZRANc966YcLMEfvwrd3h22rErwoAZqciVsyipbhG",
  "key11": "6HXttGZRaZvkAytPejZEiBuDATW3G1KbYCdrnSVvqsY7auEAf36RRSTfQ6JMZS36fVmTzZsmKLux7JwUG2Vj3hr",
  "key12": "aLqoPnRsKRVNU8YDgVFVbxm3SeLAK2UC1K4yDuusK4RS88hhQperprsQx69yoAbuwS8tq34ejKbmi2xQe2cn48Y",
  "key13": "gmHSWktDLoAqEqLZ6mZDiSJvTYED6EDNwVgWkF4a1WFPjJikwKVCSGeQUmophWGuEdL1hHJXnKvnTysTrKaPkoU",
  "key14": "4Uj7o7fKybjbUQevG7x4z5CvxCxeQ1hfKbnMNiasciagAT6S2t1LE9QqVUXGbCkaRDuaGUv1taXUNhf1eUaTHML1",
  "key15": "k7FdfWoZ8HFo3Gume1geZhh47WSN7FuFiPKdTCBZFa4FkL9KBw5VEcV438ndTrbFAAmPSU38pEj8NpEZbANxq1s",
  "key16": "3kY3dgbDTMdhTHxDBgWTZR3FAgogMgnPjsYzqnTRnkSHaQwPvQHhRhhvnhGASnkKZLfgcYCcXo82QUEwwgJrp4wj",
  "key17": "2ZgpU8mL7B7PQa9HrnGq2MN6s9f5BVKTxiHbQ5pASa7xFkSkjVdHB2cWnBn8yhYkNqmoqweCmHAwdZkKcQosD574",
  "key18": "tq9SH41QHjcrvLEbkJEUTj2hFwmTMuLGrMjQ4aEKtuxnVK6seP22DRMYVae61uGDDCytMB4jvPKWGQsYZtWR6Mg",
  "key19": "5SFqBbG6BbDM7Ze2sRzTVRg6NCavdwZg5SnZ59xaayevj8Z2uGbcmAAu5VbDDHcESq9xTqhdRi7EJabsCAuk7EsK",
  "key20": "5bsg5WDrGYypHfkZQVAYigfcVSZkomf1iD57WCoUoiSXeCg7rzdvWNvdhykyToDjYc388F8gwfzBVrSfXBE1ZY3Q",
  "key21": "2zm9osZ3KGqpErh3uXwqEx7GeQTXVgLYLGLDDzYyqQ4XBf5HAb3Wkapx61reUxyBKFkYjfYibbizRbNuYTeE1szu",
  "key22": "5g2DpKJXNJHqM2FixXKv1joZ1Zd16s1Un2JTanXrpid48teq1QCJcSQgJ6dLNseAbfzyR7RBdY589zyENxmQ9EEf",
  "key23": "414xkjPUE42B8mCvjMC7AC9YmQakMZYpqGJ3ss5yRJcsexBhfhkiAs9MWsBpcsyPYnnK83HrKUkv2HwVQcWovFG7",
  "key24": "3yfV75nYPDtRfRQ27KRCRbCL2x3y66xHWxBescdVwYRdTbbcFv9xdaHybau97wF69VpaMURUjCcz3Q9z226CDjUT",
  "key25": "5FjWUvdVeda9A8eaV4qksCVceWZXBXvfvBYLDCBY3GHjhQkByoR3HvmDhK6Tj8aUoMKw66v6fAYr4TbT1Rz8AUrA",
  "key26": "21dbHEaD1hMyjN2wqMgq2mL6TEpxR39FW1EMDwSiWfunvoGHkBWVmP25SFVtJRxmC44teHCyEYSAPwZrUYw9vnhc",
  "key27": "gAEojvazdSaisff7kLyZcFQA12u9MFxrLD7VRQqfkyF5kgWP26UWhr2N2szwaD9ZvynvKtLgYAJNXeTqaEc2JvH",
  "key28": "5upgd4mD7xABTXeQz4pRH5am7zispzvWA6M5EwA62GiTyGU8McxpCxxx9GV2cPnEpHRqn5Z11huXsSEKmwCMHGsN",
  "key29": "5eTqsRDGXt9XGfCgp1CtKw76i7yxk4tqrbMeYFEarFQGwHXKyUY6WUGVocmbXJKFxWNegWDQubLEced3q8ZwQZDf",
  "key30": "2wbjxc1DhjojGZziXjrxSE1hukZSw6ifdD7WiAa9z2AVCsM45MPyNqELVt9jwH1rWggh7gMoJPQ6U22F4B6AWpom"
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
