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
    "26iGBQkXBbrDWBQLrUmgeBZacPVdUdvLjdVfZqSxpRECopok8JA2LcJy4WSShNKAFm3wxhGarCpR8fmAafL9ZiQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ce5UtqoDi3KejcGtEMdqzJAi6gAwJYt13sMgh54a3UEL3L2PrntH1APMDR6NV2avhbDG97x6y6HSmg5yFYK2HVb",
  "key1": "4zP1MLxhAv1m2nGGKmGWmg36R7bxR17zD28vGBMdmzVRqcJFLHkW8nLmLmpRsxaJZUeaHWhx7EAb9wfxdjpSucvg",
  "key2": "232i4DRxivUVpkbVqZJ6jst9NvXC2wXBuD8mJ121ZhL2bZrYF2kmTPUNF4EBhYwDfxsgbacnDBzRRodUsSPgzTCU",
  "key3": "4HgYeYLY9djGcRbFccj4vJbUTqM2sPCh8rZHUNwdcELa5tB6bbatSLDYSo4zYbwMwMn9KEwmoTCgNLfQU7DPNCZ5",
  "key4": "3jdpUc7TZ9Rsgoc765FMotMzihSLkeS8PhqYU1pnWPdjRadX49kpmtjetkcytDhwDWmdEhGGWpXf9uadiuzig8Cm",
  "key5": "Nke8dJmwgWyLt2AqbzcsiqAnQYxubP4CRDUMiPAQGoFF1tNNP81oSMTbAW9ousniENHqtTxWNRii6RNBRuSLJYu",
  "key6": "zuapErbxuUqjw529M8sFMr8hFzXbcDRSRX5YSrX7us7iWqjsCUGBg5yuAjvnqYVkqMuWP83bP9tmXfBre7Zy658",
  "key7": "5U8UYouyY6e8L3eMmn2UECWexX8MKQ7d4Tq6FmbMnoobUasiudbr5Fbnj46FVZ5zrexE26F1cBx2mV2fr9iqXdpj",
  "key8": "3Z1997zpAfznv8xnz6iYSDeR1L4WhFcD67zpNUrzXzTbaxfRFEne6kJUDaY2iS8PR7AFDebyhFxzX4FYsoqjWANp",
  "key9": "4sM6mb6c1oPWvEU5HBEbY4K9PPMoEHMCgrXbzL6DAry4HstzN1pukXRZVDvFVaQiQyHLBKRjyecBQTASGonfRwnN",
  "key10": "5RdtbtBkDQR1QAsx8WPmyvRJppLoHFWLCVyFKNH4C4UU9vavVLrzQuPNWzJ1cNCgPymm26rRtQXjpujtmgd3T2Z",
  "key11": "2DJr97sLWoRqQaptt5TdELSjKKJ3JKUfUGmVkv3Wk9743Rrtc76U5uvpRYzb4tYHRD7rUezmjiSECSAX5vVvG9nR",
  "key12": "VodHCxvBj1z1vXABBZFdkomEtPRN39FTnCwWKbdqX7rJTFNBue25DCcdWZoZZr3FDWGrqXNTuSAGUQMmvZcYpG1",
  "key13": "3bNmvrapnr4FrRLfvHooh2PdC5uoEg8G9oeLoXrXuSefTbiPJwkpkiR4D8sbuBZTwfvn3mhVdMzRaCb7eYx8sU9u",
  "key14": "4u81XkzsPCoYGMba9rrH2iAe1wnLD3MisfChgyHKNmio4H1TDTXPXLkJvLJFN6f6hKsKfzr17ZohTdXL6LMPWhYF",
  "key15": "2Lz9gSerZehzyH5GyX2atEmc8v4w7zfumR3JfhPL8d3EhRNxCJByYsq5JkNHSBTCMBHckPMpR6umStofpNZxHWYc",
  "key16": "3yWz4sw7yapPq6JNrynTqPxptoQM3LStgmhYZ4hKPgEgFafkSpwYu9Hox5cztXm1UFknQ1F6Q5vQsN73xZHf5tMx",
  "key17": "ZbZr1MMNFEmUg1fxgvsDuv27LkAx9BY1Z1Efo77Mshg85AsGQc9qei6qLJfJWWZs4R5sPrAgmD4bacnN8nGf8bs",
  "key18": "41Qp6q2gPfiaywA2GiFGMkzRp5kzp12Dx8ezMpG7qSXPGE2veZZ6DExqJCqbNRwcMCAJq8XqxnZHYe9bt3bRW3be",
  "key19": "5KD82N4aby8yBWfp5sxdaXRq69hgrvVtsh1rzouw9pSsNT4cmGgL8rS8QKtTEBKWpw5Rd6ibiZKzNVrQ8Cexa3Rp",
  "key20": "8JYH9gNsHHvBDR5t2DP96tifMepdYwTM2kTxf4vPkbo2T3JDh2f2gkHskn2ysghQdU3A333hfTJLDvtuG2qBSaD",
  "key21": "4dDD2PaTXiGwfnz84K6k3i6Hnf2JNCkXXCNnp7HvuCffDD7qSqd9JkMJAxYjGwxsaLzXcdJPYDk7XkTzM1VEQQWV",
  "key22": "26QuWNJm71VAHPPzD7fQ54xrXdMu818JnkLsBAXY5FFXuGLipvKdrPveemTJGZnUaUc9YUny3TbBnWcgDNd227q3",
  "key23": "4jzMm3KXCBkbjHnVnqiKDMDWYRwPE3uhkCaKTjc3PY9KTrpDARGFTaQEZhxmUFP9fZdsk54kJiwWNYqq16emjTwP",
  "key24": "5HwAMrvX8TfvRa2UQqeneokSSJYexCQytWNyVxdWZZgR2s8xah7noqLeRNfqdG88Uw4zXNMFUKjzBLMckMYsZXJY"
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
