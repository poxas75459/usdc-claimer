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
    "2WSSh4e6tBhEWp2GWwsmc5TZDn5naJHsw91f9RqpdWpFpyszkCGzkWK68Lom2wk8wEqvEicsKYn9SPG1v9C2wLpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V48ANhiGQMZHbQUhN8fBLSfSDQSG2RusWckeAy7hFMYBNiJZm2XbQPzufN6uG1iAkEPoM5G4iQVsKyzcYc8cDjR",
  "key1": "5H6hpCwnUijCPAfPyhV1b5tmhNecVrPQnJtwmisitK8PNjRwhreFMMqtQV1VgWfq6P9DTybkFszux8w1bhZ81Zbp",
  "key2": "wmyC88hWGq9p7KaN46F5Qsbk5kxh1T6wQ22ee37zPVZUksyPMyjjUtVvW3cEPmSoxagmGjyb2T7Y82LmrkxGWrk",
  "key3": "46BjgdyUkPxWL1bxjANr9Ym1iyZXZVBYu8oK92Amn6FxHxZoAPzaBd8iZ1Ljj75TC1GSKqXqeAAZZ9iJrhPoGCf",
  "key4": "4SLhRigwF4hoxuPXGX1qyjdWWc94ntv4KQ1ReDKqThuwD9SyVpuGn9awPagU3yrbYJCDk4XjhFPTmfcV6Hb9EQsZ",
  "key5": "3yqr4mN6NkZHusASG2QmwQBpqKyYxW6Sidqm51fgVNwEZfrxVZJKRzZ7k6Bd5Z93Keoq1B8uzMeXPQSG53C8e9WB",
  "key6": "4z7nCjC8qkiSZFGuYge4VfESqE3qsSd9VRY6FL5BUQxqZ96aFysz2kjWbSYMXiAjQT12DLogPwtAA7VaNFcMqiBN",
  "key7": "48fgCbXCjfhSHmYAwEZJzyFqd8JkVWuqb2X81MFozHyxpceySo3Bjbuw2tANiptZhFTs8ohZmKVEHxU7ja196hHU",
  "key8": "4GaRmriuU5zobFD5WvbJc3xC5RKfN7fZ8i2e7MyF77LNPfg1UN3AXbMrjLipxpGCc8ABy5DUq1MGF9Q2cSU3A8T2",
  "key9": "2Ve2XrwSpEDPTFoPh8gctmv3tFUD2nomdeB4NSSHbHXE4CF8umK48fcQiTZTWWJPbsSdmFLvEaAz2qPkRdA9WYGe",
  "key10": "4qqcpeYZzR26qc3AP7xXVX74op1zqf1nvvhXJGaF92tAHLDqmy11uGZ92St8h6yPvpgeATT3u3j2EHeMECqKdGnu",
  "key11": "48RUwHFjBm6k6rHHwWPyEJ1yj66TJffCLrfURMuBGAYoKmuDyiPLvDSEE1zLj5Ugcq9KbBFrN5xzbWsHCLkabfoc",
  "key12": "3vFt5evpssXB3uQV1X34UtYb4LT9fJyRL978MQuLhjAqvaqDVBqooAwCDTrcawPmkQ6TeAiWqqbDnst2HBuLwLzV",
  "key13": "3nnSVwm47U5L6LzhXWFJDg3t2hsBXqSVq13a8JRsqUHB3VLp7MAgvJ6ge3qeP7kK7yWXfi1amdH55kbiViourrAy",
  "key14": "3zRnJzRRrU9E91MBp1ncW1n7fjoVP9RrBMT4Z7Z7PbZTDMHg97bSNSQDnXm5h4DkMDpwhUm5Zi6haC3pt4yJmTJn",
  "key15": "5GpDSJxWeVjCQFcQpVE4Z8ktq5Zbd3pMdBTyC6nG1dzLScaU4ygGMiFhDdGQALGD2pcBFpjT915izqK8uSLDT7Vp",
  "key16": "2iq6VQGZzgTv9FYTcNdPByeoDXAuvuQqNGkTFPdANdwDH9VtD6XH54KxSgzjnGu5YFqNqT6dvgMMgi7ixhQdjtRJ",
  "key17": "HmdjofevVPtrh3KvmhL9gLQvJwqaWPA1nSqam5qNb9j9bdEpw77CXscAzEvzT9DFL9ehST4MG8SNKv2LMpQyKa6",
  "key18": "5ehRCV1eTpDFi5uqERN8xYzBKKJfKcwB4yg4C5AxQotk3zyREYnVEEe9ZGUp6PvGNYrqe5t8PKPbMZsFd7cj6dFt",
  "key19": "5Qzo2YsqHG6QAFzCuqfMyvWdDngqMTsfAok48Xo2sMonBiRppFH489jWwox68BcVWpK7CkgSpMcBkDwcYgDUKB6J",
  "key20": "4HkUGjYCQFC4pxC7BDyJE9S92LA151JpeRpMBxLHa5Ahy4dtn8UNLvvynRt3UwZQo1cjmbjfWSmD2a7ck4uf8Xn8",
  "key21": "3ZYAQT6rkmKqPsqJJAvvuf7hs8d8k2hVfYTPf1p4C6fSbV2imh9bMuQfK6aSPKhiVGcSXB4kFy9AvN2ynmMrZFWN",
  "key22": "3FSb1nsSzMeN42jPt1hSMLFJpGRFraxSRXFNnLWLZ74KjDibAmd361WyYwVX96DYYsttN7MVMksswiL5cyB2A1XA",
  "key23": "5rZ1btMUU9pS6fWgjCK7J9zSHBjfFvcpbWCVRzMHRfK9XEy3gmLhEZRht6dy1JuXreFFqZVmMgotfPZFCykEawq9",
  "key24": "41YH4PTE5MKF96KTUCzG89q94YYq2UvEpvq5Hg5VtxMuQud4ZWgoVrH4gXCJTcW8SsmEzMaSMi8uVsqx2zjGRHf7",
  "key25": "2NY4osbZXfNV42NBBDeSpcZJcrWykKmEfpptrpGW5QBM9FWjxLPPiigQSjzPY458zR7TEqaRpZkqpQq2WyPfFGHc",
  "key26": "42U4KXjQZ8iC35Wefa86vGvgTJQQ46mTFz95CkDq6Hr4EoRN6HQZaF1A3Nd54PWQtKD4ZXvfNHWPMc9Pz9HdypbM",
  "key27": "hsytX3cqZzaRBxvCQ5aQaFgSyi7W5FChNctEw4EnQD9f9yDN5q2K8VH6D39fafCs72uaKAY5nLLSuW72p2w9RYK",
  "key28": "4MNgt9bnaGfvA2nRNBFRwPUSRggtWebEaRPHna9L2xA1SyhpECotkeE8y13XGTkUwVYknuuqDVJddCPVg6wZ8Q4a"
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
