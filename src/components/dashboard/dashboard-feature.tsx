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
    "27i8tkPoMk13459ZSCLag47wbjJeqqv57pku4sqeseFjUaReJGMAUKhSDHGqFTr9LVPHcwVinWhzuJybRD4QuRsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQWw4oks2aoFhmGfyZBoak48Aa1YiWjf5UvzMcsJr6K3RRKShwXGHwHQj8m9yLuFPJcQ5UjiwCbiuHSFjUfp555",
  "key1": "g3wugEtVNukjGvSekgmULNEZHtt4EkAz69FJW5CbLXQ6eXvTCjksBW1eWhTvQgVkypfTuiMsHGAP625LMBEfkky",
  "key2": "2MqJg3YN8bbQiWG1epN8C1j4q7jUXJNYpYGAhR4oAFb3PWXNuhvnZqHXpfGpPqd9wfvs4rZ6CQN5ba3FZ8KkThJ",
  "key3": "3VdsYJUyarK4Uyx5EcWWFwPnF83ej6CHJEMeZH7yAdNhVEb6NsJE8ykMeYapa2XvJqJEcrLyXBuPEunc7Gqr3aSF",
  "key4": "42ZRBfT1UJhUuPTASmgsGVpaYVCt5U2gq8ASV4GPrUVKqUweibr34uSQf4oqasjtRG5RFvmHf5HFyprxKV97W3Yw",
  "key5": "4fcf33gdSfoK4BPHVFFFPzSVSyL8Xgvf838hXVJLDNZpT5rDTvfd8ZcC5FdreGnhFewHHjFTyAfPQqMvj3gJdkrm",
  "key6": "3ZYpCcr26LnYELob2fqfLkLLaEY7onkz3hB8Fce1zzPgA8TnMbaXTGCQQWiddoehfvxhKYnERU4XrNfFMJ33Z3xb",
  "key7": "cZJ5J9piTHwQjExk8yyJdiF6MkBZd14xSKUB3iBu9TxeA9FHfj5fRosZRLiDHQMYRRWsF2bBYg4snHJmr7CQost",
  "key8": "66MAnnJKBiYHBxpNf3uUqEUfamjgkuY1k3yN3vqNAiff8c8czdhS55L4mzZWHeGSS9L8SqFKUtJK7XtMicTcDrGJ",
  "key9": "4Xqidba1jgZtAKbx5zLusUm9qPVovMt8jQCsZtUFQQdd3ZBmNimc2kntToDLpAUXbLDy5fmDptpM4Wno14EC4qRZ",
  "key10": "3b35tY3bbrcXi1JBpB5566gMvuFtBhfHJvEYjtKWEEAsZJuj5Qo4oedrrb16MYpNuNRjFu74PqWs6ZachX2E5X81",
  "key11": "rfGC53Lf7muDEyGtSKYougp1CKMEmsaiBMdQLdEof4S3pgNBajjucUkokCPqGCfqxtnCGBjzeqSQ4sHKQF4oGdZ",
  "key12": "3K1398kuJD6As3MpEDBv4empfQt86PWhWXDBUCoyDvF8RLsabwiBVtsZaf5k32QdZnd1NyCJZFH3Aog8hDxoV2VF",
  "key13": "5Bva5Vhc2NQBSoH9N9feFtkjB267hG4XgJNMnYSaeDtPxKveZPhsLtdFu6jPpptq28eYbBL2DHVXpEimqPrwnpk2",
  "key14": "235JqvKGRAUpRxn5UEGiLS5vsBf9Q4eWfH4SxbsP2EWh1hpiRVJ5tgBr9FEVpjVBZDcj3hdnGGxmvmuJmTMB3DXC",
  "key15": "52kWL2mn4kRBpnUHNQxXa92pGhYQDnXW49U8PAYoTnGbrxW11oggpLMECSYYpLDKKN8smj2rLyVdtTXxZLD3YTMf",
  "key16": "f7yKj8MayJxCVXWCqSxCN9YmRiuZxQz6Tcfeza79rdQrcnitfEcheJtJGquaoepd27NWEbavwBqhnPJPsMwUKp9",
  "key17": "QYa63wfD4Xp9PK1Extr8yvMJ5bKLXReQAGFoj2Stbrup6TqC3KTVwkDw5qk7SmUjrx4Uyxe37cUReG1NHnWGqod",
  "key18": "3BFDTQoqo3mVXVSpi6FbHKFfa1UC1hAvH1j7GXMd2VA5P17gkfC88nE9hbTWqEiL2mAhcrjdASkRmA1mzAhVAxKx",
  "key19": "Sw6o2JViJKrnSvVyBCsfW8mfNeUeUQz1VRgeqExqnpVwrbfwp8scp7dzYMRiC7FYFjwYcTm99Fhfc3N1SYgW23w",
  "key20": "34yPZ1WVJER2Z2TPb5aXEqFd6Ynut5Q6Hz1bVfJFZvZLfuknCWhs6cXLw9SrTjNbmZnY2VAL6rWvR6eGW8NHP9HM",
  "key21": "n2o24fAJpBBZQwFGom7tUu6qeETFNF23NMqzK7Y1nB7FCbpmnzPgWKLAYUghH4gnMJrBKJWW5pZvH2HRy6yL6F3",
  "key22": "2755fNZgn5gRRuwddi4A8b2WARBSjSx4CgBPRW4VcL1HNSTmy87hukzyCD1Cxa9CNVV5rtUpjV16kR2XJXYtWvAz",
  "key23": "42T1YuoJ58gQU1jGkcboMVj5qSZXRzH6m5kVN3BG1AC2Etps1PS3rm2ejCLaEeird4YCkxjwgcBjiZLuC7pJK5VY",
  "key24": "4wSBQTezYsvVvKxaxRmacqc3zrAHWEpRZeBnCHVXoyPJo37WAzC7rnsqAcQJJMnoPnn5gzvvvd7A31FQGgLmXdTN",
  "key25": "3U8CCBEE1ooRMfCjaz3ZCDniDviXPaD6w66eVDwyZD43R3dUZPYEHByLti4wjtjNup9udELLbX3AyT3yhix2zgS3",
  "key26": "3x3vAMYT2vdwcWX9U2VVpnJZoM4xcMXwfajZx6Bq76evEpMNGo688N2UK1whC5EapuCQZQnRYpRorqQ75iX5aRw7"
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
