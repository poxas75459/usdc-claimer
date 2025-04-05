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
    "2suW7mtcrCpnDDNJSRV6MnZsB17hYf7taRBUEkA4aJUFPECzGFVNyniSPATf3vcifCUPMToF3YA7xrGWKFnsMUpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uk1ahGYtKJePDEQxTz1AmBNKPcFQpQbPAFYCpVBEob5HXm2FsjmUxCyBdoe8vpXu1txA4yAYwXxHxVUciAm3Q33",
  "key1": "4gHRnhLgQwGENhiKYHQ2PFY93ci9P91LSmPsRuLn3p88jLe7yP6Vg28SVDyafjP8XH15GUfvDCWuthV2u5SekNVX",
  "key2": "2TGv7j2C5c3fbVAT1PAwz7TcgibhJo5z9ZTkAtvEfscquNmRPw2bEMgUqDtnEkDVFVp2LrThkBEwcyp146UJeMWD",
  "key3": "2cFRsQANbmPPHaHyZyA9982KFyJ8U8KZm4x62UHQDAVuwY6LHqMiDgviwwCLF9p2LWkGQqddZNkP7UKmLHwWWXaa",
  "key4": "W3BTpqPvrcpK1ym1fMZpu18JiGNEPMBVWbJNCmkYT7LphiUEiDqfqyFyC2EAD5DfPJmSzYFQA9n7HmMd7mpjdsj",
  "key5": "3UKbSSepk7tp4drJ5WmXQsR5z3ZaBRcBewSDugTwkWoQgLssE9rdfwMPz7Sbh2eJu7CzKC6Sr9hsrpQMQ24wNkY1",
  "key6": "4sG6nugdfkzkZ19vCbw2tFwQxJ9hR8zxu9bQxgqG9gRHJyetFsZti7WDrQeF8xEpqYBYZRnZ74rhefnyZ8bFbu1a",
  "key7": "B6SMB4Vw97rWoMq8epLeshgdHBxfhCSanRAQkhFG2tPv1utwFfbVJoq9BhD4EX4yh4Sv9yrQ7dTM4t2b783AuPu",
  "key8": "fwABQj55hh2NiWC87VqR5p18PfVt6C5UEsztUUnJXcs9NHSkrw8KrdRDmtuZUyJrnRrMQs8KngyYVoXubEkY1sa",
  "key9": "41ZuZmzHKmQxWDon7N29tPKtU1UfkZ8eynKoZKGTisD3L1NpBMDp8vdd7dDCYeoNLmGFUoDyehfbvCsPHcTGJEMk",
  "key10": "3r81C6NQrtW57Dy36Yz7eTppPq4Ez7qjExfodPVe6KPFkUKUHWWMHwPsx2vkQtFSVWf9Gp1J37V6hGgK6xBbAEg",
  "key11": "5FB5PpBzAMCF3LhabeMSaNChDLPgvdgLX3iBxdBs8EnJHnPPXjWizZc22UC7q7W31YwnLLafvdAdnn91yMvgz3jR",
  "key12": "2MKG7yMSH5gcF7ov26MV4XiRngzjkBiMx6qLQJyhk1iHWrseAvTLoTVSxZtDv2WifJD2a4WmSKtzjM6TBGB9FkPT",
  "key13": "5GgfXgesWx92kUToqBduHBEgJp9iV2EsppE782MGzeDKdKe7DTtkCCxFWgnZHZjkQGed15WgvMmCmxDrktEa3jub",
  "key14": "2nM7iZ9czNiZJNW1Cg8vx4UUyreHthFAvKMJx4GWd4nkZSTRKwE79EFstgBBAeAmCHxzUUB4zZPT5JPEPDiUm4pV",
  "key15": "2rP1qzz2xWa1CKakTUcAeAowpf5rDRN8BUvZrEesyJiR4cGjg2AdcNKne5E7nxEwwVU5cHsjPPW34hj4wmKHNsz7",
  "key16": "3CZGpzG6Xo3rhZTmYvN93tc3H25J8K6UCYW1jTvfjKoKwH9SWTuHoHoFnUY7M5dp8hLQCvrCT4TKJd5yCh6BJXAj",
  "key17": "5ryembq6GjeUjxtcDJpKMKUC2rgNbgm1Kn8NdRxD52WEH4qdZWDqPZTj5tQ2LzFLCPJJCVFgCBFu61tNBw1WDRpT",
  "key18": "3RjmE66hKma9t3Uzx5pLL5GKZTJ5XLwhASJE2DnVRL4Epdd4JuVcU35Byutcabbtk9DzDBV1iRL68ANYfvuKfufv",
  "key19": "5nCT9x7o9skC25fT74B2LomuVqSV6jpSq9uWDCQfgP7SqJ22mRkKkYif6nk6kxCjQEKrD5haxPgfV2vaH8wQvagt",
  "key20": "3AK1Yj96YsFTLVmzv4fHemmFcXhaKPHbP2eDDYNqGT6nzK9hESDQsr2ENDo9xbHqUCmUCk6MqoPCDnBBFXdUrV1L",
  "key21": "3xtQ7KeRNkpt19w5xx5aVr3FeDVZzDnk1ATxFfsZCVtQwdF8Ekn6EGJFNGoApZCydcZroF523bDCvZEVgNhUcF8U",
  "key22": "4nGLQkH4aGuVti6Maf5bmhGmc2zsTn4CqMRew2UN9fD5ukNosG6ojtdk3vMaZAz8hTwhXEouzWrCPdDW9GVg57k7",
  "key23": "5RWwP6s1hGSvowqwsWNEcXqP3xWuYitCPxgvBSLDfGw8UBSQzBCExW6S5Fy3WFKDpiQaq14w6JnE5gHPg3JARBeq",
  "key24": "4JH9BMZvQ6f3nwofL4iJPgZDuuE4LAC6PZfKHcHq3yNbKEiSyfHicAszjMrqQL9revYXeBa2wGVjfQ9JDRcvk11F"
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
