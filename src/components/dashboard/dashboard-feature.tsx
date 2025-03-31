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
    "nsCC6pJN78wK8QLrJsT5BZmMPjaH8E3BTAXdVtzjzkV7bLYyNae7hYVQL5qRBwdGm6f2uWpV49Rq6vxhYY1oLnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmWo5AijCocnnw66n5JM5gR7JaWj67DaMNz2UCsM7QqkXCqfzyyoDcksuj31M34V6qJUbyACHnEN69Nt82xt3xN",
  "key1": "4Y9prBnjpyFUZgZDP2NYHVFnWChxo4WV6SRcC4kNTNjjqREdjTPeqvxbwGYZVurrBk1DJfqpT9k2gQz1FSVtCGS",
  "key2": "3n71KXVCECS8oRjqBGf6eZTRsap3C3pmnxUMVDPmJTSvYK6PWbGuSBJwreNQbudDYN3PZ8fjHqJakUSmjBuCD4hY",
  "key3": "bR4jQCyy4ZPC115VAMx6MV5KjbtxyRy2zSyMjuTYC863ENvMLpx3jH6DaWb8GMpFZGxrJmuDJMbpK1QdbVX5ZMz",
  "key4": "4ar7dKpwbMSD3PmokBiHcQm4QYpjg7FPd2jynZWbxdSvbP7Bpn2yXxLZN4UiaBrxc12m4PyMZ9TbFEDHqeyhTq1G",
  "key5": "3VvHS77Lm1cjNu7NJiysFQj7gDEHnK29CSXQG5Z1J8EBzd7NJAe4raymJ8KFuFJm7KzZKb22GcAwTkzQPQoH25Uv",
  "key6": "4zz2QvVgaULBQzf3giEB4FuQZeA9VwyxUDUg5eef37HzFZzKcx7MErUWaQSxKt3dN6z851Pr6KHp7jMu35vyFHFt",
  "key7": "3vuWWXKqjZ2eJ8EfmwxoDV59uogfcFjCR2JGux3BW4zdtUTeuojzgKsFB3ourAhyFVYS8LNXiFdtGjDt1gFa8B2U",
  "key8": "4S65gD1qiRVFpMgLR4dnXSSd43ay1Jm9TubLf4qgR6KYKUT5g6xt4fPjNFPpMCyZXt85WGL992toHAsuYoiaDKtb",
  "key9": "4eK61AFnnwiKeRpLHYVWkaA2E9w7umUti5jmtkjy69mGcqXTJk8aX4zDYFQjDQSqN2Fq9k8URh2bcrYS4cxnVjvb",
  "key10": "4HSkMG3PwuCFefQqxHdZozrQoDQwbrHHS3dv2VKTuhfTY3UgADKw2q1pahZERBR4dvinftYKA1BBQrVLXeEnGA8u",
  "key11": "2emAVCQbD231mnZcKWqvm8XUJx8ocKogAJcQjaeVzPD74vqsvKRi8aEDMn9RZYPBWXXf7hUXURgzzvsKDhJSQKDo",
  "key12": "5EGrqDKdoo7hRK6xNb8rSxvBAmBJ7KKtSi9aZf1asmWWFRkL6Cdp2rgcFAsHLWAsTq4Cw615YMaXwWYBeyYYHAhJ",
  "key13": "2CSFxqinEDEYMrH3k8TZotp3EzYkuWbfZnWUUvkZQsox4kREYCx1DTDFNAs2upRnLMhrZgxAv4GJdUS16za7SMwj",
  "key14": "2hk9cBNTk8D9F41s5X4FEgZNZn3c9rLPDgx9EnvGnjpicvXs7cos1ogKsbwcV8HwrDQXdVujkh6NFw3SSg5Hd37Q",
  "key15": "2hQZ35uSuSUYSsoEmwY2YEPqHq8DCHJzMQktAkgTp3drgnYDeocsCeRUxpvQCQK9ebvQi9MeDxz7qbYmL8HfEqTV",
  "key16": "5UJfcSMEoC5hjvKfQ1R9PruWoX5FeAsgjvzZWN7eXWK65VWF3SMb2LJcXhSNWveCwqrTfavVM7SrF4PFj3uYZjNP",
  "key17": "3XsEHohbBTBjPY1CWEdCQYZX7fAzd8xbf2biH2NLh65XRzUFKkJT159K2y1DebSbuv25gyPRpbi7eApQGh59euNo",
  "key18": "Ccckr7f9uG5M3GKBLPwtmr9o82g9LqceSLybTeirtbU2AhBJ9pAcAAXCAdsJ1D516GLat2mE6Qo1uyj4gxt12Tz",
  "key19": "3CTMczuFeNdzwiYrSht2AVn94Vncpny8qph1xhn1nPiETn5X6KSrhE9yhpibFcPq6Qv9oUQvwt6yVr7M64GyRjwY",
  "key20": "5K4Exi5XRYfqj9mDxaDQCyTdJp9YaX1gXD87Tg6dPFLvLuzr4sUom3mYEYVyzr5N1Bsg5vxuWwZSsvdtZNHjF5oM",
  "key21": "2UcDZUqAn43777UdTh5P5eqV5czvEvPwFavp39bvUY2aprDBZ1BS46HA7cE7HoHgmy732zVGxVAwKQBkkrAKtCNq",
  "key22": "5YANLN8tfwonEBNDispby8oXwKxsdEQRZJvAT2x2UMBZBW3Ueab4eFrUKyjnqFPBCdtbr5g1TjyWAKScuYJTSXoe",
  "key23": "5ph6FtexaZWgrCh2psqrdzpPTjzuz5Zu6rBQDBwnDXB4N2XPbRFGSZoFhngSF7QbnssRzVEsbB74VDcQMMx5fVWK",
  "key24": "5w4ypw83hZAYLttM7dnZqniXmDw19CfAYnjXE8ZY1uiiw1KciwApv6cvXU1VfNpwbZTix63TXNhMwagATYEeu9WK",
  "key25": "UzN9gCPVDbdCnRS6T73ZK7bcvyn3CURo1X3R8A6qMTreTNEYpFn7zWcGA79Qd7wZP4S99wCyqGc9SknANsEjhqj"
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
