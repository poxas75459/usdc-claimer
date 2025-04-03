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
    "4meKDhVEBi24CFcA4nL2Pokoo45qBrK1imTfT6BFWdD3DCvPYxps4FaKmC9ZnRASEieVZYsZoUrJEy1zRWFMJ1fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ab82UrVrW3kh69eowrnwxgpQ4y3Q43ehdLptzDVjLQ8wTafd3YcqvLqxCSB9rUbFgFn41R5mcgYeUmNvs3tSmW9",
  "key1": "9iuLaKFWAe8CHvQ7rPk4ghRfNznLjrwzREbk7BFMguy6rv3QpTmCFsjy4wwA5qTqZtbhWg8UrfBbz4HFHVUFR17",
  "key2": "2BMzRmyomzCDyixFxd5NQ1RB49ctDXFs7X7fU9yDrpRc9B1xV9PufTJkMuKdYPqmYZCwwERuA8UUT1t2VcLmh33W",
  "key3": "3qPtmBfyFhEkWVd8LyKbgr3SHQkEiEbhqXRFBofeATEoVCkqfpxYz8j63WNMr2bwQFPbMpNA2wq7EJdKFKMJakf2",
  "key4": "PcSgS9mSectZgiXx8htUmoQ18KS1uz4cuM5HivV22vbU4GpneuBtbo2hccCeCmkGe6fBWuViusRSZ84Qh8KBM3r",
  "key5": "3suXZjytkcc1ioXTwfQz8rVrH6k6AZXut7Y86XeFrqEYasYDzYShyTUc6h9z1n6w5NBpiEF5D3b968Wo94dC8hhx",
  "key6": "3vdPBKqjkKihxScNs6T3L2Z3gqXQTKjDNsSVN1VvTPsf9WSaebXocSBjfTzG5uK5ud14tdse4UfqwHwEtqvoGtd7",
  "key7": "rrTfu9ge2CWnVnqHEGhZ1kCLA7UGxNRyLYoSnXo7r1hz5cdNEs2fpAVJ5gAGCxKC9guybfrupRNu7qpbwdvnjW7",
  "key8": "4po19ZbidNPhkkwqkHX4kJVobqEEiFr33ezveWHYhSPzovhSdTchY21V3ueVm2UrdbqA9iGPYwDLduHm1tvY9nwx",
  "key9": "RQF3aYCNCT1WszYUAxKTjmEaMNqc4zVTHd39tranpfTHPYxnKFBz87BBPuRnTtraBLYuqTaCEWGaMVRduNQaVig",
  "key10": "MHyADarevX24SToiVrCVF6uvoqzNC35gKJPN5nPNYELZTAMtWg3BSMaqfhcJN44wU1Hsy4kCocso2UkouXJL1bg",
  "key11": "2kcWXFxjpjYgFfvRAzQKMSqvU7gVdSazB74XbW3Thf7MwipN5ReZayvbTi1KyV9JgNWcbsXkHym6hTg269K8bhcX",
  "key12": "27W7BfsKX6qE1SN15yWv7wGDBhN8UZJFsV1UmeqJTxLTEMk9iYzJUN5YELAmL3dn8iFXFNwB6AoNXu1nd2cB1dzR",
  "key13": "qdwd6t96MVXVJXh6UV1JYduU1Enh4cFkgWAqDDyUztF52etAehGQ3EKE2JgDiwKnvPR8bH9zLtUDHCpVwzKFTgJ",
  "key14": "YLNvAwZFSKv4DUs2JR8FV3Crrx7WLmQKRRFGZmfYFSFUuQg3wz99LHQMEWhhze1oEUkJkUDVc5dKPqVCjxQEde6",
  "key15": "tX2M6WoGQjbgNaTaQCkNbsfFnpLvEFEKRCmwYTDPDe1CrMhakUESdMfP5kaMHvPM8E7hpX936MN3km8RDHARA2A",
  "key16": "5bHBDW2L827soX9RSXyXEDwQsnwSsiM6kEd7mcnW7QYHbgvTWBZwffpY33JkaayYvMwZdwYm98uo8SSvhnVUiEJL",
  "key17": "5QD1EdTPFKeRvUrSRgM8hMSqYdgtgsfsKF8umDuzdp5TBus2g4zJ42YGY9L6jvHVaB71BzqYFFeoYhzD85bnjQqQ",
  "key18": "4gwrtjoWGDHoKv9BKH7vCNrgPTn9zX2n3S8wqtsLcAaSGPNuAZovBZCHPF3tUafkN4FL6XodhdAQFkexkkru6ssh",
  "key19": "kYcDx9KJoz86j3diqTMB2e3GZFXQFLG1VFz4FKjNFHJtBhKQSvUXxnBDvAyeFQYAc81uz91YTsKBxgRD1JRQYf2",
  "key20": "2icd2mCVggbH5tMMzdiyER1K2wYgafZvw3mMdcb7Dk8U2v6wnCSHjFzcM2mS4DicdAEj6uUmfDjny2vrQiewAVa1",
  "key21": "A9B1Ni7Zj33wzHVE5quJmmdUpdiALXN1PFY2VcDZ6aWYBKGoP1DoiStJzwp4eTeLaXzmDzU1Fxbm9Cp3r9nYkKC",
  "key22": "5WdAz5HXfxX2KKB44dSR3AXFCrYpBRNpA76uWBZ1D8ssuxgT38Nm1yhRLZqE7ArPGhPcHk61Zwq7HgvoL97ivCGM",
  "key23": "5SPfqKksoBuQTwkcUSswZy9x8hCNBe8fivGQDLPCXuZovCjPquEGQKY9xhYJxcjSDoquA5MjqvAbRdSxrNVv4bau",
  "key24": "mQJmLCq8szQn1Y4X4d8RknM2z7UFdQXbjWMnUxXAYkRfurMcC3wsG8yQ37SnGLgsHoPFNieDW6pHSUr1yR3E6GQ"
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
