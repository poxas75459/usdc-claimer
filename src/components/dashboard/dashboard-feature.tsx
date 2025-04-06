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
    "2uuKkuzExc9L1w6mKJDeQNZguoRPKF2twQ3ewexd4fKgrgNtWczgSKssANRRnauNkFghyktK9pzPmGv7zLhVbGKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WPcCNEBtXXD9Tbm1VvyDss6TVVhnCStfPovS6wQNddXXdZr1VJ83n7BXqWn3myfGMwALie4yAziM8Rrhns1qpeZ",
  "key1": "3S179pPvC6ymLoq1TCcPHst2XUMVWeLFfYLcyFBq6gwAsgJAGVAorYr5CcJkpdxHsDRMb7vP7q5kyJ3kewpjj2mz",
  "key2": "3nZfcbcFcNMnwnPZGyMa2qpqkqaqofWbSAvY5GbpV1QscMaaBYVjxn79Dfwfz4XdtX98PwxY4y6JrJ2nGoAUayU5",
  "key3": "2J615J2PtYQmQAad9T5xweWDzoyibMMvniqbB91b5jPKWjmjiWjCk2HHGdqRQ6zaYVZ8HyfTChgsdH2nDGtcepKe",
  "key4": "3xzsnQHyKACQEG5nyxC9nWFB7ZuYLcPqkaPHdafSzt9MaJQV1BPpkCMt52dQqnMEjWEke5F2t7LxVQFjjavyWhGX",
  "key5": "L866wTDxtr243dT4HfehiBu2GW2uxasgME3SY3UpC1KLaR8iNNn2dHSR7ufELzY9du35F4fFMBwceXcZ7ukyWKW",
  "key6": "5vjGPHxHYi8UeyyYr9iRZjwc6wdVcNbckTmngmideG2WwveEXybG69wQKnYjqptLTgoasCfjBQ2D2kztkHzrarxh",
  "key7": "3AoQHMqKUSYYEqngVsYMafnD9Xq6PX2iY4ziC4T86t2XE7ZpYnSs96pADsRjCfZPd1tH49PbnrK1LDamjCedvvZp",
  "key8": "3ZTw5hBK2mYQmFNEj8NCFn1iK758AnjGMRRh7RWj3YBvbwPP1xtjT3RHusE7n8GBJyatz9CZeGNgJstFRcuou9wW",
  "key9": "2vAGuk2v4L1BuWyLy2wW18by5aSqeVL2GAZv9Q7Fo9s2jRAX9dHhpApArXz6PbdDuDHmGpYQi6Mdhq5qEgxuWeBD",
  "key10": "4v6WJv41Kbyh6NtwpqChbHGPmfB1RTTzirab5Zo8iYk993YUeQ6WeKe22GtbNxoJrj5fLCF5mvgKn2eLMeD9tQ42",
  "key11": "2EhbqGCgrWHKt2rWVCUS58rNFcki4p1tUMmnWwgVNoQpSEvfEUamwF8FVswDcxovXAWKRadYG3pM3weW2mvKeBDp",
  "key12": "2SZG4d5xwpThUAaXbgVUUNqCKRXFaVjh3Ub5y8XgM28oDM2DvGhfCpqq72Moy65hjutcfdkT673oaGCz5FDei9yf",
  "key13": "5SZVWR5wX78u85Zkrv8TkyDkJpCbkUzT9K5pUde1tbmc5yFt2Bgdwp1TipSjyJ2KSC9zf9bdVtS5qDCjCW8Ea4fB",
  "key14": "5uLkopPWxMH53yyWAvDMqTzAidQXh3ctYnVxXvNcYyzNDCxDN4j54UCr8SSbaBW1NP1Y4P7acoNExVXTmvUrTxkN",
  "key15": "2wvJSTuNHYfx3AfExQzB4NK4p6uuTSML8sSLCmop44qXaUpvypiKj9ntkztM2ECopUgxnhV6nBayhHpjYo7ML1t4",
  "key16": "kqqiLTbdTmcuZgKR9SUc9EEtpqULcsLTTWoqoE9EqBzz28CVhiAcwvFu4baghKegks3B6XeVzKqfAuRYmpcoJVd",
  "key17": "5vDSCyd8vaE5A63mWSMT4gkVyqaJiWpcNQVwqZvcDbUXxuZ9NgVe339ruyUvWZXRHtt8anv6n3B48cLddmgGVXL7",
  "key18": "2fwoPeyCf7zgpGAcBqjEDEiFGSrW5EyGCRNdQZbyqCxuFXDJYUpeAeuhK8w4nrgN2cfrHuSmrLQCjMMxxU8dT63F",
  "key19": "2GE61PDqFf1TMm4DjbtV32KzZgjgiQb2RjpaXQcPBvKQCCJyvimGpSf5nmASeGj52DaiGVTX3j4wZrxPienGXduV",
  "key20": "2NsDU1QAzckYFy7jaosjdSpR6L1NEqy1wRtztBPHdc9bJZ2UujUfZxubZ5FDBesN8GhjekoKYqFALEudVpUeLWRt",
  "key21": "3XfFos4W4Y3d4r4dZziMfifSz83CshZMvdjdA29oVvjKELWKWPNV79wS1p67RMdgGJf8MX5kb5JT42L2pVxn68o3",
  "key22": "3dhvVRAjSAJTjM5vGZyASq7Dk7eB1nbjXQnuSKRdcgBWoo4CdfGKcXbwiCp1fvZcFiNdBqUNozw1YevYWQxMkhrZ",
  "key23": "4Fji6DX8vLLcjJzrfuEgWsSMEvSc1AuDKUF8PcZiWZFRgfxwtQJsCxiB4eMJRGwYqNXDcY7C3jaLEuZKhfmGbx7c",
  "key24": "4VSgEX3RgAf5NQk23Sv2fwtQwhwvjYwEi66cuA6Mdjrvf5jLaqXCCW6brJY8ug9Dm8WxmpbZPsMqRKfWxDULqZTx",
  "key25": "5UALwS7x7Bw6tTHGAKsiwNjSWfK5kjnrjTdF6P3Byw26NmtoCievEHjuj9imRH9Pn2B3WkSwUeVE2RnxbjzuMcX4",
  "key26": "3HLRmeim4yvWR2AyVoMmT2EQtRb4XazzyMcB4iodU7SvwbQMnLpTHDStXNdwxH8eAUoTqXVywzZgXwSdazVaBWz3",
  "key27": "3QF4cgsxP6A16rPbYRioT8SUVsnxPvmuCWLFAZnsZAyy8VG94gFyj5QYBVFx95feaC74aE7etrFyQ3SYeTAwr1jt",
  "key28": "44dja88o61d66DLGUBvceH1np7RDRUgEAMcPA2mkWBGxRrK12FnyEPYuqbKjnbUBjXmSB6mDcWJw8qbqCGFcGB5",
  "key29": "4JXh2qRrCs4eeoGCnigfb69F57BXXiZghc3eYSQ3xy7ptpnuphbPCXuFhGemDnGbZwKzXfG3jKHfa7NPmaAhaiHG",
  "key30": "4w8LQoWXPy2E54nbXf5XVYweSGTB4gXiN6Qh682qKt2LkDesocJGWs9cZBcvG3NaJ3ipaDQ2fxMhAt9zpEZ5yCSW"
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
