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
    "3kQB1qDaSri69p6SbHSvcxkpXHXf938Q3HkbtsvjBprCMprat8BfoAJvXPSae6MXa2jurM6PykXZKbYHTCgLATzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wP6Cd1oFz7tAJVNHq18NgAojxa1wN1AAfDgiy6mizzEEsj3zzovyH53KVaMkMygyctPXyZgKnezXGEkLsUeDYDB",
  "key1": "4zXKgRxfMhDShkxxuxaFYr6G18FPCx9TXHkQqT2pMyyNXKkzsoFZPsrRya5QPKLDDj7uQyNwMPGpCab3AFqABdjL",
  "key2": "26pz1tDtBhHHJ8SGqGhGxiXw71T1nT4DbSekeFK9sV44uEirngJm8XecJHdTkiqSJ1yH5NPjpj1uCh84r4CzgPqm",
  "key3": "3fw2LoCqoAyhRs7NkPkA9LGkmGcsvFHekrVSYudwJNeTLQ37PZo7Cua8Ga3jUg1eC3JFAf3kTPycpWVqyaVy1SLA",
  "key4": "MUq6yXKtVbMeR3gza4rHzdYZTuM61dUdvAA3m88FXoSHCU4jWa4S7mk96fNkvTsWUQQdxBCSwdYvLdscLA5T7U3",
  "key5": "64F53xPxfNgjRqrTGNFnvYSDFYY4QeprQx5Jpt5fNCNVSU89h6PPtGRwQ2AKjPY3osyQ3w33hRjPnDR2BW7e3WBc",
  "key6": "5swNbGNggVYbt86WaXPARgZpGHT4eq3AXcmguCf2hPB72Mx98b8WoLSwouiKQtu6Xv6DWzkWaBxMAwF9MLgw3fFP",
  "key7": "37FzKx2eG9muXxYp3EgUfcbYiz8k2JU7kRTTQmu3SVVDrSgZPXoKW7axsmBia8N4z4J7zkkQLSMm4Pj6TFcjamxo",
  "key8": "5X6FMwrShQLYm6QertfkUxaWSufpgrdzui9kiqwQcYrozPmpscyKzQpfe8f4UThgtHk2TYZK5crtsnLBCEZy968M",
  "key9": "56xRgZYXbwiMGMQt9b3RGJ498hgHNQVHKJCZT88m2AFpE9DmGD7NYPTd5arDUwXGnc4yPgzAaV9nG6VmPCN5DT69",
  "key10": "3K6HkqeM9i1phecgcaBVuQBrNUagJBxYGBrUGM7A8dUyHiqnzKz2YLzDFwKeZsTLwGsTQ5opRNadHNuKdFwCdq6i",
  "key11": "zvPWQ3K6PhybWXEqsn5bAiyevz38X4iHizpg1YZoAm7xNqNSWQBtjE1CjgDC13qkCseWeuKRkJiy1s7ZEcjJUxs",
  "key12": "53ntGV5zXNQnEvAYu6SgzL2bXJoDsC4JKn75XC1ZiNeRa6PqdCuZdBvi8ocKk3H9cPfSaoN6qRLuxTfMV3oQQAvW",
  "key13": "oSh2dSYpfoi84jnYkJTFpkmnp8F98pdUnrk6c9tMcxCvwKBtfUkcWSdEoC5L2NQzJYpbFChPQFbf3NPMCUaEoBD",
  "key14": "35MQ8AP6fW1Y5FGZURgPBQStpSyAUhPtqpKyi2gkLHTJuQ85zdMwoLmojK2PqMem2frrDzMfcmyYq1EdXmup3boP",
  "key15": "2n1vGz6eKDsu918Sj7rVhJrm9o4jnQzFtoXeRfx7EQ6BKLSQuzQBSjxFkKi4vvL7yFFpBXScR1hvYVYNXwchZGj3",
  "key16": "2t1sjTRmpxxiRvFaLVMWBvGLqoZ9v7Yqh7pGhprBXfR12dzguYkqrEy6ULaTjjdaWoubWtVMWjNA1eWXAzXXABKN",
  "key17": "41vcfxvfZ3aE2hT8Jnx19Kf7GXaiVfYh7VCXphaTbUytZaHP3cDiCTBJ3kZSdp6KGgBMsGCvryYFU4H1n4W2D9Dy",
  "key18": "3tdyaYFRS6N8Tw6cmxYe2VGZTLs8TqV1ChVwqTY9L7pWQCdAEpLRK8RgJ3XmUWQgrBTTR2pA85uZed5DA9UKEEyE",
  "key19": "4muJX8F2fVEAbTvhSB5iznk78iqYVA9bY8pUWc6gNKJWPYopLquKYiSmKGsFM2NuXHEHuGozXs9Bjv1piqeKPQFS",
  "key20": "5W5rCjMDorjhEfTgzZzQkMXwLcwq7kpMf6uQ7Eh3qohHR7AuHcYxVZKcByhS8zZ8G5tGjuzbTnusKQenyauKUq46",
  "key21": "22ifZHAYNc4xNJGniEMxnucZ5hZNRmx5exXtdoknL4RK4gr7WpCfuuRncFfUpBCHBBhhuBTvvA5XwqGju45sazzL",
  "key22": "Szi1qAuNakrxbqRMr81j9Pha5wNp7VLoBFop15H45dHeiEywzUCQgiKwFrnMb5LKLknuNkpgbRFfvadAJY4Wp6D",
  "key23": "577ozrC7mAmfYhc7zSaCP2BzYBPqaYybB5rc1Sg3AwfcEDDWUrG3XB2aEWdJ9SrkiTLx6vXQZAzvceCYE4JZtN2g",
  "key24": "359RZi9p2Z16AQk1DwrCArGzj7w9N9fFeYkN2RMtxVu111QrGmQzqUeW6CuocdNZFg9CMyCfuctXyR5k11dLWe4Y",
  "key25": "5N13WNYMNswCiuqn99uhzD5ePAGKkufszPuXxniEc8xVfwFCD9KCvay328Qh96S4TNJRD85XZdmR5uNXNV8rgPwd",
  "key26": "5mzErHUb8DPu9ii3rXMHzmsJwtsosxgYMV7SWhzMgKgqhyCPAJwoCAcENbttRyCzLuuottGAva5bbmJxabbh4KY8",
  "key27": "2ThR1ndWHR66oAJjNLgsut24kumDypUZfWqPSQi1wkVU7Ck7BaHtjVFBhJbF5Gj2e3PKMdnKNqkZdupoVxEHUfQ2",
  "key28": "47zjsKP7AXnGNY8QXFt5UDsHTJxFzwviz3vW4sscfGSDWtNrkEBDkDKCJkniR51DWcNs8udhzvYzPNkuqZ95E2Ts",
  "key29": "3v142rFfcpzdLTYUXWs4zwLwYvC3LWFtHwLsqroV3Ky1rB8zLT1wB21v4rBErMpBAAhx3ty1rnJhsJLibd1GVY5a"
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
