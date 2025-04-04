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
    "opGR98BTMiCgHhkLLS3psGC3ag11MzKFAc9q6DPePHpgv8hAT5xT8M2P2HUJWRFNrPPq3CXRGjjnmMNFutEXntx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sS2Zsgh5iX1Tbys8qDJjyi91X4NwyJru1u6N2BixjhXPwL39ReWWq85jg1146xEKLwXpbZmShZB94oeXDsVba1G",
  "key1": "51mz5Dc9F8hnguFoi1jKy6A6eJYW9JGFTtkmKqJPgj5Leak2jTZ8KGFQnLgz9zLwfNhKtSivvKBQjzkWoWFNmEEk",
  "key2": "2gyFe7LEJPvFWQRVSQbbMniNiVLk4RcjDCnbyxYy76S6XFDEMyyirH5tDmGgYLo46JPVfwVCKVor6h8MFSyDdRfi",
  "key3": "4XEHCypWUKeY6gFSsuQdndwAMVS2nVhXaYz7dhyUY6Ttjp5uoApHz5njnkydjzv6oxN2Eze1tGiYdRs1LAamBcZ6",
  "key4": "45imcjfJYgTLfwwMpgKL3RVD2vPjNpgtKzexQ7TY1doUZWjZVvAX5M8V7MdtM8hfiGvJJWRoDgSixfdXhteqA3NA",
  "key5": "53Cu4JAUT5YkGhehq5ujJAHjMCMqsDer7ZoQkErxoWF7Wqn4t5oGxvsyNa2i2P1y7EiVGS8T7ivz25hh6U1ExWw1",
  "key6": "3fNEcTSnJ1gM5NdyNdoFDTqk5pESTNM4bCuGmMPsHKxwBYPzoh1AD8cZVrZGzs84wKdxjKRyEoAQXHoP7UoUh27n",
  "key7": "3ZwUYXWvbcxHK4zk1pLUqSwggBxuobniW3ZQLn1BaRBeXJQc9P5UMNCcvtWrxDpLQck266NfNwL3ht8PjZY4dssB",
  "key8": "2AKYMtnMg3NQWQWczyES87xgtRVHrqRmqYpyic44rz7nuEJasanf9skPUA4uE5h6L4GbVbdi83zFawQ8LHygqARt",
  "key9": "t6zAoEkHTwXV7yCyvKjdqv6uQ8Y47FhXNCozQkVQR1Qx4mhdyEKKW8fQVPRZAxruGAVnLANVDp7ARmwcuQ4djVM",
  "key10": "23MpTGmduQPnkgcd1i8ofiMDg1nTovfiEKo88EVh7LzGNsG4KUzgkkv9mczcSHE2gP9Xm85P8b3bgKddH4enwAHw",
  "key11": "HKpF3D6Q6sbqx5xPjoeRMo4iBGabaBiNzShuB3uQANmDKuYHJ6Lk7HLVvpR3Mgntbiujqzi9vR6rBNSQq6oPfWY",
  "key12": "2venhvNgZ8eBTBznLs6m8yBZMouViutQA27PYY3Z91oSnYPYR6L8UDhuc66aCFXSTsZLyiC7dsNRmtApJNPFb4Bj",
  "key13": "3EmxWLR6PTEF2mVidHxTKBEjKzpdj42s2mpxgEN1yjo8CbpQP9R9D2gNAQq15ouRFpFAw1eCE3k1vBpRhYWGKWZ2",
  "key14": "44bgpQNAg8sXh8Spxv3TE18kt5SMaHyMDhU1eAjVFFz9WrEzStuTqJ4RNT6mPrX19LduKhBSBuYXqMQ6jpFhHyiW",
  "key15": "33fAySRKHBHiSyqghjatdXpGHgmGQRcEsqMhDJkaMaHfan1fUpeZf8U6UFajhJuz3fCMGNQ7fhD6jQrkWPymCSdF",
  "key16": "5fQV7PCiyxrUpWRSm5CEvKM5aXN1Ke1yNUtopWAm6d8wCHmo9tNFWjdoKxBfoHfoJk5ZgavtBnYXnmAGScMnrHZc",
  "key17": "YnbNDjJi6rWagpNqTiYWbo7gg21sZ77eBcukd2mG3ZX89KBdRvgoqFssDjB4rsFBzv6Zpa1TD8rgh1ei9MTcgf3",
  "key18": "5b5MtCkwZQptLn111PFRdTMj6nrqdAVXULuVnLJtkNAtAmrx3cmTVZ9fmePaBnBHnAcYXUbm7Tv9PHnXqQgVg5MY",
  "key19": "2yqzRbWgVkbpnUp1RhFrFkTzPNnwdef988iUcYHkcWAiDbLMR6Peu8LDJPvbnmgzhNmsHwvKuuJszKQHMJ4swRZG",
  "key20": "3rJpoMrqSWBKX1uVaJxZPMq7Uio9CPNUxVktTLujzozvhrJGuDZGKRhSJh1BXT2ZkionH95mVDNj7UDnGVrCv8rT",
  "key21": "3LmmMjmsEafV5V5mMWVYDBaiBKBRFaMSpNyanLrsFbmtBeFLVsSyYvMTvL6uD5MDW85bU2XSGpfk8E5D2YWJKqM6",
  "key22": "4BY1j5QU2G4AToR91mqwDCvrhWsMvkGHTAQSZpjSHFe3BNBmHYud4NqRn9gtoew8pKf8oKN8EWHh7c1t5E2qYxvD",
  "key23": "Tdyt4o9sPEKMH4zhJgWPERZPKN4JnX5DttWtPAEzNE5iuhmJgx5MCJmrUGvhSbrpVm2ir4sJescRa91xhzuuUMi",
  "key24": "5LzCYj4icZupFTy2oEvguvT6WiW7n5FcLVxyui85kqhnmKgzujcQ6hu3255tq8m2q6gAjMox3DvVc8bHQAbUo13V",
  "key25": "43KBpbMAS9wjZX68eJ5sPEFaCJDgMSrzJpJrbchzKc3SB8fN2okR3Mo3xwKxMqpAnyyPPMJAb9mJR1W1wnAUjTDx",
  "key26": "4KuZJaJMF8qn5jp8iRZqw7axk7zm5w1QGvphiJAdyPk5Evus7tWJSd4W5x3wyQChz34SYsHPtuHHoWGP49RFXYJF",
  "key27": "32NwLVteguQoD6LiyfkkcQN4ySCpfsbe6CrUmxXbLsPkn1E5vB3B3wz1MDfBoDXgotQ6xY4jUYoom9YAR4izBbax",
  "key28": "4DnPsDvUMHSq2QjTPXSL5anxdRsxKzAhXHZmqNjyfrtDF1i3MPkNk9fYtcZosNxXL826ng3DgS4w7HsmwuYui5Qw",
  "key29": "8dNkURCSyAYbFvNagJRqUwhBYhtDeru2Fd4n7ez2B8FntZ3AK2ZgQapKtbEJV4FVkUGHHmCHQzhSQVaMQA2y1cy",
  "key30": "2Eejrhh8Y4uC3xcS8gDL91xZkMr4eWzTtRWrPXhyshAnHogM9CmL8f9Dbc7T7YYTFYZVVgNUFN4S9cWGas9gQ81s",
  "key31": "K3aGTqdLVouH5kvjRWTg4KNWK1KjPTqWpBMtn39EC1LLnGgyVv4vnKA2Ms4JzkLtKEiCPLF1fg6RpKd4oxhFB4D",
  "key32": "jSMy11RhqHm25Z3b5gvKE2UPSK11fJBaXEBGGUXDfH85a7yMa14BN2AJLGjeUuEVRwV233Qrc9LMLP74c1Pq3zb",
  "key33": "5fnEuxH3LFmn5S5B2KA2GczThVSyofFwnauCFW9bbiezFDMbjiAHfKygRffkKJzFouPYTzMUsYDzryyg2Y42kAvp",
  "key34": "5gW7uSGpssAvXb1T7X2MU6TD762bcsJSGffosPbgwjpfALZVQe3uFBBf4CVEF5McuWaWtao5tv3BgbMZH1TVBTY2",
  "key35": "28EfxhbNB1N9Fmp7usF2j2qCSwEPp1Ln9eGwikvcjuEKgoQ17mqU8HfCh8oUKP1oZb6CsBo8AtqR1UeJvibfD7tY",
  "key36": "xLUjBdXXs6gUyvWdfg93YyAhBe629w2nEQzt1EQhFkjR8ok46aDtPMDHuLtXSHUk9Mo5Mwjj65GSkxcQ7Mnxz3d"
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
