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
    "5QFh4FSK9g4XoaCN8F5nyUbHFiPxfKdTLzGhwArp7SSUituBuCXu9oWzqY2isrGTfYbqitNmbXP1g4qGMBsnjENk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDt9F2AuaN6RDhvijc6mbMcTgw8Us5Bq3gyvcTHV9quyQYLNfgtf84n5kXcH78p3wUznVQG88BsTjimTYnoHGwz",
  "key1": "5Bzi1bD8yQXtGvq2oPTdEeDAzHyMt7nYMum32JDokQov32Y8SCkBRLLJ4bX76JTA1q9ZM1AqwBYpEBwLSN3WYsbk",
  "key2": "28tgsTzGoXs1rWbfFW3PL8czYA1t5GN1upWqjMDXCHXH855WZASYCjNU95ko34ureNkkFGrnLWdt7EAykUrEQvEh",
  "key3": "31MpLhdc6ujk5qUA1kxMAtKtTpecUnyeS4PKFnyX9aHGBBG2KqUftJXWpVrTd3w2dBPdiybvLT78WWamFvzYjNXB",
  "key4": "3GM8B5swArsErkrtcx2nccDAVjACSX9mDYWsvuLgXqBbdWJDXHXjJMbbYPjEX9xjgaicCEhkhiFNFfeKEBHr5VDq",
  "key5": "2ujuRRev5MwP5NcsiqULNNNNRzYUFsnseCU389yisDUjgq6LBfcNVLHntXpFtTk2aAqZ3v9K8SZQtBvMKfVuxpHx",
  "key6": "3iDUd2iQfRXLVqKgWmyLoqQShBU1x5Cu7eqaFnZBYJhBYeZCQ2k3VJrvxHd9N5ed8xTNEGL7BfaNw8EAr4ZfSqpq",
  "key7": "64s7HdwPvSjW5NcBGQRcWpXfoeiXJhQWfgYLX7GGQZ55SkbsGb7kjBjkQGnqC4twWVJU4nADMFNoTW5hyDtL3RHy",
  "key8": "47AVhUVA8AGyegc3xN92xuavsA7VW78mz8G27AUJtRiqGs9LB39Fud4WHuNvwUHGVtbM6dquFqyvX8gbcwWWTJg6",
  "key9": "3jEXtdS8mdEif83qNeJZ97AmAayA5DYfuiRHXGGwwwsofWVcLwhXmMftkDeHQePne6WdvY8ctX4z9ZfrPsFJWVzv",
  "key10": "31UVn7ugp333MdL6r96LNMESo63EVTF1nGwFNprLZC4jr7aqes5iaVbruiQsxyKSR7ooY6QQ19RXNCjPFsSzEeNc",
  "key11": "U1b8Tpsi9LMPewN2mQ4k9jqRJAq7F9i9NNZQGntQPU4gWnrQau4DYMuMz7kdABJJzoxhF8YL1YQWMtYM6UZgxvB",
  "key12": "dhWGUguwMQjELtYQwSG5JXTgLPAi7s9P7MwSMAthvVRPXV7RFS5JbMFDCMn8mTHT4fzMSeVHu3yXkHoKPKSovx1",
  "key13": "Sidu6PPoSF7CiDgStB34wYXcqyEgZhDynLChfuikMk4y9CrVab26dSQhr5rvfCRurErGbho3jXT75U3MYZwJ9ui",
  "key14": "5ZqbBwVxYbjNU8RR1XJeqCEWXLF75jUfpJCYB2kPL6X2NQjMBAznKcwVBFT84jgwyBExR9MXqsGc7bPMRgHK7MdT",
  "key15": "3BSiKPJDMPG5Dwz9FK229CuSH5M3BhV3MRt17pNjnvmw1SQGbZbcaKLvCF7HASqH5YVHy8fQkfJXPoa54T8DdfyK",
  "key16": "U4HgM6XuNY7KNchV7tg7aFUd1eDArkzXSGNX7D3efZwMoPNVWyWEZws8T9ZppcpzbQq3rGA9jgWT4eY51DQcwj3",
  "key17": "4UMGYWUk5j2GoR5UEFBavC5bqyVc2C24uBT9RFpQ7vV7WPdDPD7cwHQDgoC6eyTVtPutcJTufxjSLojqaEcG3Q9z",
  "key18": "dyPHxSFpnHQDd1KxDob3rvsvMPDej7dG4YR31GC6GC9Cs9Su5u73N3PcA9s6h8fNmxb7ZjCyCH5HawdTh1t5WZu",
  "key19": "5pCExWhkGRtxnKuUVXvhxfJuoHQzPDNrPmKo3xfa5HWZRXXVcQSX5GRRbUm6Jj6jvvMFtCmTmWWDEvEMu6kfggvX",
  "key20": "3wnSuvyWyuSh3xwxmj4zN3rspVFHhJzddd9skimNwzaKnGhBU2VXsJVtqnBnuZ2dffWFmAB7BC9jPSuZXQjaMJWG",
  "key21": "5sYMi52u1LuebQhdV7o2PN7vFsr1a3Eguf9X7RjGx2cDx5jfcvQgt7L72gfSeJGufETNaZTszGpuX9oiQR6AbDMQ",
  "key22": "2FVRLsXAtDuRetXN699NSidcGrdAzda9izzVqUHR9cmEc9t36jyEn7jms7Ct57NZNktKp9ARvQBQMHoqndyqafUW",
  "key23": "5EQxy6Jq27jfvayhExmKmMrVGiikYMWa1qq3HgP6vb42UU2CykjLbaY6TyShgbnJ4A7XAgE665PoX6PWinX59mxY",
  "key24": "3ymnSCexxgGkPm89BcJcF7WuagiL3UFpVCPJTYMeUX48cvgcjKFYuvNTMQ1BDyKCozHiGeC6TPQLWr4zG4ip8JAG"
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
