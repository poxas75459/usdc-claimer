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
    "5zEY43PogguXEvFyN8s9TLFWESTLx8ASYiNd989CSSMFgMAarPzXoz2Km6GW385SSQsFLn7UvZfRpzYK9Q9Ao8LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K3DBhDyH4gPGHQfNPVzHeEkmjGYWmzwkvbJ4HDdptYaUp7LpVuPcKVGYH4ixHzLYp4hGNhygnJC3aV4zn2YJ4sz",
  "key1": "4uuLSdPL5gb25dMuiAHVUFnLfTy4oEuBKf16TraJqo5qPL8o9T4nMk6mcDKVGPMrzRKgA7LBF3YhtAvrVdosszuK",
  "key2": "4KYJnVpDTWuE27WF5s6Pgg5WZ4thVEtk5DiXUXEoJ4qzcZBvpWzqbSKad8Bcw4HCuBPjUS8SwAyTxhPaYiskxHt6",
  "key3": "2kvEXAzxC3aaXmfA1zs2R3Mr7Jx8TqkSuvxAuAmYkzGPgd1i2iVN5vZCP7djQTm8i4Ehyg61yCMtAPUmUsy9uJXh",
  "key4": "3Xao1eJpbvwuNLG1X7X8q2tHmDqfiyuCoziMVmTBFZRr7uB8VhhdYazSuzC5uhFgoGsQWJ7JFCfjX33fEprwkrzU",
  "key5": "5WYXXFHRE3WLHb7bbr4bfwCW5YaaAULgz6K2M1KLiXEk49MQj1Z5x5vHVNcvvA4YCDig7R3FvAASwu1aQasaeMmt",
  "key6": "ha6SVZbDEUm29LYzqo5jWo4VGQbjDKikrhRmQ9dSZKaW6YUDV6rywu8yoaiB4SuQ7VQreT4MQDk4wNNRZjqMzz8",
  "key7": "3ZpR1arDjjuZUqJUGyvCFKekXUP6ZNCtLJXJqhGtKCMvCLd6brKwNhRzKgHy1i6qPBEXBR2ePStBg37sGDmfheri",
  "key8": "X1pqdGpDidZYXJHhVxb7ARywX6GmGGYZnj3agg4RQQZ1irdAApZEDnTh418MwbKrpZKPcw9dDmfAPPgxJqUdwk4",
  "key9": "zcM5MpgdFVR2uXqfoud9VdVonQcJhvWWndDMonKXt1m5NuejERyhPzCUqsLiBNMhPSM3bdHtd1YQSDztmpkp5kG",
  "key10": "2ureEqjR37weF8vVTW9UNv3ECEAttf9g8HDHaYdh5JuyoPQm2afRrgwq95mPDuzzk5nVLhbAMJwx5Stztyrvj3MC",
  "key11": "5QjYLTY6SYeaMiaaCBNhdhqPyU4LveY6ek3R8knrtfPUBdTEoAKivYMVuh2QVR16kxTwZ73QnK7fJpvuy943LDfS",
  "key12": "2StghLxajAsfTwKEWo5rbTpvMErgoUUCNZiXQYW8QUsMcdpbkt76C3ub7YrPHNKDutUhtzWPFXNEYzdiy2QjsTMU",
  "key13": "4CWQVBo96o6yH1tCXbLZe3gvQAXQyybVvgSuMugS3xiyZKzs3KMsN3iCLSsuZaVQtWypU247EpyoFLCFXMc2Ujen",
  "key14": "2Uw9vp1kGX5WUcqH9bie4sRJsZYTns87RiLXqZfaiQpiXGMToTTUVw1nK8BAgLrwYmmGzECPyLtL8ZtFMS8JJPB6",
  "key15": "2LAJUYZmFVCHatQmbqYuhkqEEeJdp1r6WUxcYxB8Z2Bw7ky1CFbiGoXfRsbREkQ3A1jZ9MJ8PvoF9g2J6BhMdL1n",
  "key16": "5Ey8uZSdQUzb2pRamj1FVZrz4NEJJaDEfAuEQP6Ze5CNT6V17K5U66dHpmKHkXiLtMZMiV8DvbZ7RBj5R1DM1DrX",
  "key17": "D9qRCmw9wrNDxq31NQg8o1XRprcdZ3ZDKc9uFUbXAo24aN95pyVrpvRCo7bDatLAcf8cKemkTo5kN4FeKBsWWVc",
  "key18": "3Yr7Rnt5HQi2cx2UBCWU92wDaxi6jLoJ38FV2N976u8hfmqwu57AX5gtDQH8o2hN73SGGvrck15agfb9rECLLYBW",
  "key19": "nXjLcMGkcdeytJEBUK8gjvr5m8syesfvfGwGQkAJGjbffmMDJXoZsVsKYmdPvA8gj1XbhrLfw1zbqgGagKfJKtF",
  "key20": "4iR3anr5AQU7ugxQse2ygzSRKmxsP8nu5TAR4Vcx7e4xh6aHCm9oNRpegmMXZ1PJm8xhM9ZxyyfE6NsgJjyv9oKy",
  "key21": "2Eqc75GtEFSxA4SA2biqAVVP5Ltj4Zk2GztgK2VwjxvaX7EuZxgL57eJu6SX8pE9FbrnwZhiX2gGntCpiUUiXfUh",
  "key22": "4RHu4e6E84Ukd2Bq9WVn8yN6hWAaadDd6K3rJntyYZuHpToKLbebbqSRcCpwZqBpY2Dn6fdsmtRgpc8LEMcPwiVL",
  "key23": "4iSiD9t39VVb3nWpDbqVuJfUWVnkRXxtLfTwLEcC6v9591VMKymprtYxgTybjSiuhkov1q7zirYnqmTMiAncsjTL",
  "key24": "1AADa7Azw7eJKh3XMaNARMZQbnUQ53Ta5B5DgUwJ75tMck4AWya4csWNvk2vbUMFxXjLz3xqhXrAkcE9KePS4WB",
  "key25": "4G8eEGw3fY1WkvtvEq9voKZ5jbarMSH6GUieRs1hpimqTNPsLcVJxyE9c1Z6foxxuH15mTS4FMweqpnZwmaTjwi3",
  "key26": "CeR5hJmHSjBCPFirBJybB5ExJ9rvdmZ5Eii11nAQXB9koc4kpDFN6fYHSUH3KvAWK9cDg8xAV93CbEoY3TtQ4Yt",
  "key27": "5PfpGh5R5GjdWXry52ucvon9nGvi5nkTtGuM5FTmsiWMfMG5Tn1PWCLnrx5RdHpouwEEP68XftyvdNWJgStzNMRZ",
  "key28": "3KKYyPeg4PzVvXQaAWbn4LqWdi6ePFsXbqDKfqoVTmhAgQrfWqFAYa3U3czonoQYtpY2gyq6VoT8LvvL91qDuMo3",
  "key29": "5L7kmW1UbM4FGupPg7TKoCrLdRCsrPXUgnCEDzfRbZitRfoEFvU64tnQfDKwbNhM9KGguj65m4TQ8wiEYiEtXwKM",
  "key30": "361hpXUp2P9tMmJviqjPVsZDr1H5ySV5UENs3ZCLgrr2s375mDaBvFtXSu2dRQQhyFAjqiUzCvY3k4om46s3hgCe",
  "key31": "3SjUTVBkKiBXoWvRR2aL5uLKDgYKAmAoCV5pgKPLsUEoJL1ojYfWGZtqEkbQJKyuyWEm3eWStbpDd4dEDGYAXxNe",
  "key32": "8omsyVNfpCNjRRZUt5e7xAoT7m8YreR2JfxFG9uJXamGeQnxhvoniQFuQ6PKyiimahuPYwXczUZRLaZLe1HGhjE",
  "key33": "4vMevJwC6dARg6coxcCgF6WRxzthL2fnMnKwsKdsNbxScaHsk2hiPJU1viFQZe7kuyeZ6E8xPXuhfAoq9QkdLHF5",
  "key34": "4RUpKgUsFHryEFBRPZwsJ1Ne1vpmppzVFXnJUSgjbPaKADUmBL3xR3tNXM75KCBBoqq9cJJ3j2HfRBPFCyFY4tt5",
  "key35": "3ZZvYTM2738oGUpZz2jHkjzuvTAk81PwScFpsSqkzn12XwtW9BT8qZfdHeUSsdtNzUotmhe8BEKdoCq1G4wkTabR",
  "key36": "53DTDorAKfsWAAYgCSCZvrZ3x1F25GLMx29rFHTwcnDvmdcWQuzhxFcpzndcRGTAz6AkTypJZ7uyxpAinxfapKS5"
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
