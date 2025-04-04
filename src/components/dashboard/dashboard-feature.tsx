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
    "2ikoAgAy2JQBDrNg5sxzYjMTDvbeN7yGoyZBmzQWzhZTEoGLtJJA4Ga9iiFa8MqdvF3XsyGdWhZGG2WnscApXqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41q2zaDoXuVnfcj6WeSfvcLvXbSpukcwe2EQemxhc7Fd9aiyeUimmeb4q3sjMtSS52KoZy2H9rEogYuG5s2EfTi7",
  "key1": "3QuSBpikLrz6LoYQGVdLs2TuTEMnHEe6MdpajUQjn19w9EsakJsxCSecLvvs12bsvtvZvBf3L2uUDgAg7c5jiHFv",
  "key2": "2Y1rZpE1kMxAh6EaSgJG36tWAB53BRHcu9xdBwxF56dKXeUCg4ue2kGwa7JtnKSAyoJAykpWCkZWcGjF8KGk9uqX",
  "key3": "iYBXonf6uyMi1UQXUXWFEoPDKm6Rwm6pY5S65xx2rGCNukfq1aS7bQXJ4wS9i2MA42K7uzNHbbDbEvzHEKpiCEA",
  "key4": "2d3BC2HHja5go1HhosER2A7stk2phw4ujby9MzD56AsWAEp6mWBCYqjcEFsje9YDEdquaQsfk6DLEPLgT42bwMEv",
  "key5": "2H39HLCaKUcp1S9dAfXSrGkaP3epdLjcdQVdtjRF5WPbmiP7UGx7aUxfvu9gsYLWqvGeFBTD9vKkg4qjG2Goepsk",
  "key6": "2P2RGPDJrdHKCqnMmJczu2VarX3wPGoZ8Nq1GtQmW7xMqzBB7rne5SuwWNkec2etzRhzJ8k8qcXnzvYKsRCPYsW",
  "key7": "kD8Sg6s26cS3TncMHwDpeyXhfvBiTZ4d2Vms2hfcVy5cGr4an6vekaCDgy9YqXPEm1z3NhAwe4yitF2rsyJD3ce",
  "key8": "4iGhM1qynrH37JhMfw1Q1U5xiXGyxW2LVSHYaaC2JpHLg9ZbZmwjw7mrnfQuv2hiCJyZyLvJQ6eqbapvBiGV8Tks",
  "key9": "5m4wzi6DtdyT2iC3DpvHWBZhnzsCGcpXqryVT6HWbprm9n7z5qM9QXCoaxY7v9eagCpuVipFkjtS37n4nWYkQe92",
  "key10": "2yg5RaKJwPcMEsJdyghXrwXWDzBXwHFkArLHCFJZJAC5nfDujeQgdXbmjftqPhvU2xJqy5S13sSFwNV1XjPVDXx5",
  "key11": "3KTh55V7oNvVHZUCiwQSJQ6wTSYyvmg2Vd2CptBWefSjnePd5bHSGWrBWDsdXJzwMBV3wVzStDA6GJb68ECXAsFC",
  "key12": "3Fy1A4E5Ays6Uzh5yVSgzNJSdVwWQjnA3Rjd2YHkBtwrQybqhPyrBPcx2N3WwH1epm4BKJp8NLVdUeuonatkfVB1",
  "key13": "4YV8wcvfo3t5t7NjYmTfgEhTP6XGgfEd7TZkWoGyaj6ntdKno3WjHQa6CczQ3VDBr9RxX31azysM5pbdZavYNx7P",
  "key14": "2Q4ieQudgaQgSFndvUpBDD7gYtBkirfJmqRjbnXYZH6iZ8KXjojtw6NjSpLGpWtRADmtq2Z5PNbFd8Bj7NkUS3eP",
  "key15": "ep3jF5V6dt2onBk3BuvTCtTPDiBZ3MkGFZqhwy2SJw9fT5g25NfPBb7oAPM1RxYPdKE96begLhqpFi9cpqd1Ed1",
  "key16": "3FgPVQD9giV77Grna9QquMas6oVDQKCew6Xpzyw7CaMCdkxe284o4rEg9buihpL1XVvT1sKCDBDAvAnKpJEKnHgV",
  "key17": "5hfqDdCdRF7TrauMDYAeewc5mA1DPayv3gRjApWkPL4kbLrHJDz1zyuKgdRsVXmZoJrATbU2WRocyHm9CnG9us9Z",
  "key18": "4dyRZJBGcx1TMXi2CqmxxmGtWHPJ9fC5r8FD7ZDR8HJwPJNWSeghmgDgcnEgGezGszTdcU72soxpm1HuryP1cRYa",
  "key19": "4YjKnkq4JsBvLr1LJQATTBH1G4eXapUKFXm6AH2ixaY7rSjEEhUu7eoBc6BDpBxin2n692A5ctzdNAAaTsft7aMg",
  "key20": "2PhKheUWaJxk1mwMZMr3KrRqjnULY9787k49cCVeCsVwseCMKk1No8tSCnSG29XggCReMUQy5tu7An6kwwvhLuDG",
  "key21": "571pSQRsd8unTpFz21eJ91bkmnmDXE7DVfLbKxZvxXWiBACivxZqj2UkumcxEd9Z3EuLSVscAT2XNFEvzSHfpiNA",
  "key22": "22zpenQtNcTuDdV81vCL1R2LcAsoJusTZzsjzYCx4ZSpLnpDox3rt9jmg3eBdgLUQEw9cFBCoysqQbRBkrfMaEhm",
  "key23": "2X6XdGGkdPiz12AsRF42UE1NFazx26fJUNMXuQYYiGb7SJhNPEwqZ4umeN9ChCNJhqfMr2nq8XxVNAWrQtjzyZcd",
  "key24": "5fvnTjUDMAaJhzMW8479s69WvWDVPdjPrXmUJgJp3HytRdigMH5ugy1U6yVmYxkeYBhp4LAGRnkpn8CPmV3UJ3qM",
  "key25": "4mubU7coAPFkuUQuGpdrxvqu8uxi3neXyiTYSk5ae3VSK3bQRD5E7DtaYVoPU21sykrEbZSU1RZpz2831V7uCGFE",
  "key26": "2jfy7j1iv1ikpXJKSCZTRv5vddkAHwL8WGA1q4TnnryTzhzUryT588JAtkdcJkE2iUnkUfTEFZGhWKFe2KYT9pj7",
  "key27": "3NK54HFYMY2TwHjQPV5iZSjeUihRN2NwHWoNeAN8ztX9SjGnSMX7NEC6vMAimwtFc3RLft9vxr1RH8pHVmjbLakd",
  "key28": "3teTyvbi8Jp1WF8ZTaXTY9VJrmZ7NGzBrkbSrX9TQ6WcGmjq8UT6ZkuEpqzwwRmUTJUDEaa8gusYZ5gRS7ACgZie",
  "key29": "ks3JFeqJXwckn8zdG8xdtFkZm3CSYdv1etGg7bQGxGw4sywNPG2JdmT6gPeR9U9aKD3LGTR5WcJAoVp8bZ8D71K",
  "key30": "2p8wVuQneZNMh9xejmTvVixNJVsLiUNANTpZSPBjAtaRjKX7WCURBLLmYnRGeGoh52ZXtxk3zaV47HNEJS86Uh6a",
  "key31": "5uFDNoPEkNwXCBKJ4NnoeF3sfckfv6tPT8quK5YNkWzjTseec5mtNufAKhkPAwz7KbAkcM3Dbq9ZTMiphcYmkzrE",
  "key32": "2acSR6CuXDvjjJHmuKLnnbkzh9cZC5yXwTray9hA5WRrnBdwiKGCa1dLz8cUvB1u9kJS2bvmJaehHVYBFuzC1GjE",
  "key33": "fKbFi34z7NUSQMdkNejTkCAcLGTiY2s1CbPVX6Sju2De22UuMdG46YpPGubPzwTezDYuco9dBvDVsDUWc7B5uqb",
  "key34": "3GF3e9rt5AePo1zaS3Ug4azSRYkCciCCytP2XeoAropf12E2TB7WsByo9GbKkFqvePqNuRZfLWVW7XntTXWoVNev",
  "key35": "5nhiiJYqSL1Dodg2EudZCQbVuaC7D7qUQPfxzmaaPfkGAMqN5RF4kxNwhX3RvbNSL7s7Ewr5wbrphm7ke1AFXJ4B"
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
