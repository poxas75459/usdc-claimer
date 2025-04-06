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
    "3GqWUAVBnSSbggUdFPnpd86vZmRHvRpSzedVWzTBeWPaepQ2ZgsaR2BuVvMaCBWhZM1BC7vAKrEpq93VEBtc86Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veEjuGsGfJF8Hjqin1JcEkFd6A7uM9YiZNCEgNAwKmkhMEV9V3wtkijfxdUPQ7X1nUoGqF68df3ACtxB2ZMTjos",
  "key1": "2MYTEJQBiHzwkz8XoXEywMgpnnCHioZMM2THxUecrY16PtEEZReAFDVwz8yMt13LLqPVZHU9LgbcFdSHUU5aWozj",
  "key2": "3AaVLEyCLF5JFSRG2KTnSB9x4uN2Y3dXKTTDqqqDdR21Kw4GKXbzE2f9Sc3eD1r2ZLZ1Nk91K4P2V59CGi2D7hgU",
  "key3": "4ipKhVWpsB7zpJBhyUgSRz1dHHMSYMK8Dhy5eRM5e6Pw6pDt8iwVLxwKTTj4M7h51Um5JBuqwqcToznZZwGSXo91",
  "key4": "5xr9TeMgiahV8TZV4d92LeLgQG9FVQ5RQwvJSu5fms9xEj9uu49ALa2a9u3eV1uMmAck2Pbu2WGoqJfBHR3qpcxy",
  "key5": "3Te5NHS1ax6akCa89KcnXQzVfNBKxdN56n7mFgQFgy6BMR4BgCtAexAikWDmytA37jwZkuAULSCsjL6fEg6CAi88",
  "key6": "2SpBuDeF4NrcHd1EG2DvZninHQdVtHZezxZP7AH7fMBP5fnA9U15CErf8RaoV2FZSnoHCceQ66kNs4dKBCBo2Z9g",
  "key7": "3HkrHTicGcJu6hRUKWzTAYdQk9nfZJ85G82gx2pvir5wZdTSR8kTFSdN6zxteaH65EfvaEKLr8CVJTBj7DXM5c9w",
  "key8": "2VvmE7kyTmo8anXmQmavhAHz6WjPUu5g3KeeKGGW4M8HevKtphAzjVe2fuTou3haPw8NjMrqynhTFhtMVtwgfUds",
  "key9": "56vkNuaNgR2EsRKgVdy5uzJW2VVrP1oSpCPDqwF54A8pCjKXdyLcBh5y4Y7dLhAoHV4yraEQ953qSfLcdFBPx6GU",
  "key10": "3K6t7i5ebZEHzmikfUWU5VScSddnh9qbZSoxCuJLEv8YSr3jbq4bTnkqW38PzCZe7T2HxM7smBHKsyfp6gPx5CSu",
  "key11": "2QhmCKPNzyLcLKQNw9Ew1LjBHXtiGatMngNAzXtTZhzBXiTQWNBRgRsA6yAbNLRvSDxExkDL362AaEMS26Q6cYPg",
  "key12": "42HCVrbHdxxjts5Cm6ekPa5hQbi5Z33sFX6osNxckSyc5Bx67LbjzY2rVbFT74nn2K3xf1QKRD4hV2y2s53W6BxB",
  "key13": "4MQPenitj898X8FLsoguJouTxUsb2FJcCYWbPmeYERGZjpWReTF7Av5cCYAaikP9AmruvQVeycx7TJ12hagernKs",
  "key14": "22bjZNuuEUQJ7XSh6mE8ZCmf8kQnDMD9ipmfyY5TjiVEyxQtR3nsS6Mg44XQry2YtpF6QsfV8JgvPsaWyxquNSFP",
  "key15": "auckWnj263Np3u5cp1jWoDiMYRHBxrRqrisJmt9aeFnYTRjJzAL3F9vF1t4ZWSZtM4Sg8fTyUvCc6p5YPyT3yyt",
  "key16": "39HV6UQqC9Ym7oXtZ3kAfeDNrJFF4N9nPv7PVgjZzuHkZGhULwhjvs7CGpC6RtNYhuDEnQ1ZfJqK3eWHs5B3anp3",
  "key17": "4Xcn94jcvcDeoMirPWzjbY2kr6MfwQUyjCHpGxnEgZmbLAXaus8xZRbuigD2WrikLA4a4uqsHaguLBzZeb7tegqt",
  "key18": "2chrTYKwFoE9qjMFPT22AH4LSHU8SeLhep8j76myGhnMhGxyfuAXBfaKidE6rjfv7nqMBLBa1bKy21T1poAyQDFf",
  "key19": "PFsp1URxrBSwa72gjS4aDiUamNNiVxphrirLA1of3QAmogxRXGA6cA95gT6xTGgr4aNPaf3F4DtPVtbcvggwQVK",
  "key20": "661brjmnjk8b4KGiwhDjbQpaCYPxQH7NhmFGcLSFauE8W8NDy7gm3Di9tJFjSuBdYAyWwz8mxWX6HeXvZKg2s9P9",
  "key21": "5ZUQ6j8Uf6ReSKkyXZKdJfWzkWwrYZ7zk9E9GNyFD8jwFN8X9qj8HqphCj77PzKfeh64f1VhNeLFDTQDM8vUFFcW",
  "key22": "517YZvdPUisEwujqtCERPws7rqJfWDdBsttU2kdVGvAejRkUGZNLVt3obmH1vbNeg5c4g8BMBcXniWghxRMcztfB",
  "key23": "121tCHy4jDSLsRXtPp95QepXYyXjkACLmGxuGdARr3KFUVVtZZ7rSRGXyLUzuy1Q78EJCDpwk8Q6equV5rJ13UzR",
  "key24": "24rvCs1sQKaVHyepwxPLsAUtebEtqHzLWTPNsx5sdZM7TfoHnDD7ZQgbjFZAdyt4bBbATCsQJF1Duk8xgidS8yPR",
  "key25": "2ffwbnbpJMd1UGTwXmpgPX9wSmv5Z2WPeXdMFkjMvFfHyYwhsNh1LXj6DfHwA8CChCEMqi7uUHTQqJwoyPXfoVAa",
  "key26": "4fzJJVq22enBJJDD56k5UQnE6XeTCN6MFKspxt7ts3meChxKu5gaHng9fbF5Ev6bUxsJNKHqvPuWZfTJZf4bxb51",
  "key27": "AAcC3emCrxoQwJzHNvYQJ7YP9yeqKQaKiXm2iYHwzkGvkcF11Ynw4S9ZSAM5YwtNbKgDN2i2ju5bXAGPpGc2sWL"
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
