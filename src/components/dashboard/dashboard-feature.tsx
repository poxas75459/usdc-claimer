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
    "2CtHrofoKo92BPCQWWRCGZ65u4MfQh2bsFQCrV7SMh4KMRDVMDYm4BTYJD5FWL3EYGeuFUdpy2MBaUFkDESAn2uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D7SUs9A8YtCkVYWEv1tZ861dkzTPn98io2pXAAAFKWeJZkkp8SE9aBvN8V6E9Fhb38nMmMgeYrjb5UQjo4XeiZ",
  "key1": "5Pq5BunS4ukzQisRgRcxExP24fprpBYfLSyuURcqvxrFbmLKX8UqgmwLWDzyswiFp9i91pNCvAqyGV8ZK1N4Y4CF",
  "key2": "3sZLhjqji8LNvZEMtPrj7yLJ1p8nCwz4gWiYdZFQexFhPAkZXiXZsLWsh79DKGrkSr19Et1WxCYoa3juhEcfoxk6",
  "key3": "5oz33MTPQkD9XSMGV9WA4NxZBFcuNtU2M6vMAa6ZPCtwAtw3yR5wsppLasJdMjBvEEghb9uHPF51VWVMCgZV5xro",
  "key4": "4gfN9U2QtaFvR67YJEngKCQi8EFRM4kfRKdbUgeSYdpi2wPHMFSA1CKFemLpGuwkbuh6wSdm1M92MshpTUcoVoZi",
  "key5": "5AwTaj8RN3WW2x5WDU2yujR63LvCSeuVKWn8smwGma6Hisy3Vuk9aQeUrGNuRnUaZmAM7gUbS9mfZJ31JBMTf2Mk",
  "key6": "59FS8AoVgY8ocwVC1cj97XYbWZPMdbK9hBJgxFVdeFBKLRxeySSWoMVcGANCDntMJt6GL3WM4P4V99W1MQcCihbg",
  "key7": "2KMKhFza1w69WxhNWNGrygm6tRnbwnMPjKVP8YZHewWwWr653GbCoMXNBfbusQhdBk77wkafn4qUeT5peLJvyr7B",
  "key8": "2M8W1RkrmD3VmUyKywUY9ZPxRA3jgz817W5ckczBGBg5eeQvEeRJU4nuNn69gYrcp1pTW5LecHheHhPkd95Kh5vx",
  "key9": "5XQaoguSxFkiNHuuf7pJ8h7VMCwLqMPZq3bdo3Jkdh7ELgZPqTCk2YD52x535w8Ms862gfwDLQKcxYHPaGRopp7B",
  "key10": "tqW1uRiYYTfsUerchGqbTGbYyH9FWKdczvgGSkxEdTYbqK7TAGnab2d8BZ3f95MnuiEhWJMRnHBw3BXs4oMbrjh",
  "key11": "5F9q9fr4TLpadYuh4S7e2NuFsrHWFUwUVS9kGw3Sk6Zu2xQqXoe9uR3ZaPdRz1tzwCyCgfNV7pcX2z5Eo48WmGqH",
  "key12": "4WUaEa1ZxAxhLMMUnXxEjCd9ntmZN3AyyiJW9PAwVbdy1qF8gwYMiZb4UWoPvd1MyoJ6jS84kN7K6Ma97eQ5s3Qh",
  "key13": "vY7681ASNewXcddkvabBrnLVE7aErNUM6UQgxRGtRbVwzSdHFH2mqTnp2AHcQpDPWDc4m4bhDGkT73NwpYCSUdV",
  "key14": "2NksdnebW689LMLhigSGZrR9MuuyMgMPPqNvWVa7fGS521etCg8HCa3t4rkoxejHtPNcTeh5ATVbELPJ87jy6uwb",
  "key15": "2LjGVphRrKAx67GHZmQP5aEmCvWDgKypxAkQiF4ALVh9or72NhmzXUh6cGpvice4Py4a2rB4qPmwx4dKSkybUNiN",
  "key16": "5SNDZkqbuv39VcgZ85h1CwsFeSdrfjbiwLwpH3EM3zdG4Q5RJokvMxyAKe9B7ZyfpmbCEeWm2BEv7Citvxd622GK",
  "key17": "5REgHwDZCvnAJn9b6vorTg1HZftGUac1er4mGsR9i8QnAYVQNi85nAF2HYghaEr2pGWtGtvxDDr12F5txEaWomZQ",
  "key18": "5fc7LSTx5r2ua4C2d4ssJFd9kovpY6dcWyEb7s2rwEydgMoiyaWmB1SUiRCZXikhUsqVNZZdR7XoBiPjbnk3BwmT",
  "key19": "3yb3r2xU8oX1N7ukAXAdw5mCmrJGVezAYTmJywMrsZotHeQoAp5a585zUwKjRJ3zVhv37KLU5QSDc9BaAvPfgJWj",
  "key20": "3wMNNv1cSaBDLzxX8dS1ytnK1o3cgaG9HnbGcAjGnGHnaCaLV5UrKTjGLu5adXbp583VpMoaZRodiMFqNPwz29iZ",
  "key21": "3Dm4supMcH7G2X4sxUH6AArf4tDAsFby4K2FFgJRGsGRCQ8WT5Qay273ZgH1SSkgkARhcviNcXYAQL6SSaT1Ydeo",
  "key22": "5KkiPbEuS92fhXRPnHKcenJ9TLB2wAMJgYC379v8Sp6rdC93ySDDQMG61hXiSFpHgKhVMRe85yeNjBGCxrfsX3SU",
  "key23": "2xaxAsKzFoQgL6z1MJ17256RM6Xs9dwQvB2o457UFRFn5JBvC3Q5CFavqu7EMw8FmbP5gHsXzQPQsN6rTAxtpSVX",
  "key24": "2PEYKPzCKZEmAmRGdrMcjGQPGd6jQ8w6E6r1ggoZypzwQkmQrcbhE7WGMNer9ZL8PeHTTMeyTn768ETwu589SgZL",
  "key25": "24xHeg3nLFT5aJMLKuZzWY63HibkoG3Ud1Zt35SZQKg1VuKw7g9UaZiAQrPv8PwhxkDZtwqDXXVAcCQ6RTK4RL4m",
  "key26": "2nBMYcCspCW6zvXey1TXbsHuV5SCrAqJ6CRpPTCxX8NSVcd1jyFeb3cZAbhrepp7rX68VnG3X1Zqb8w79Un7Ji2y",
  "key27": "448QppeVM4MXDidgJhMpRKma4gc41UUVDC87TpAUUkp2y5zZL4CrP43zhXMpj2Z3MAHv1STESyvJXeV3ep9tFBg9",
  "key28": "5ndKcVoosSxDT8dq4yQeuLHRS3RpkmM8HQ6qARXGLMW6MGcCcENQmgyirRQGtiQywqyDB1ntaPiKRoipfKSRZuu8",
  "key29": "3BLN8LGhg8bYhEyt6PUkayQNmZzBLtnLZqjmqxDBmPRBFcRRLcUMEJ8XUT3drmaf5mXmCCkEw6NTa7Jhi6x3U88Y",
  "key30": "3SPfgBXo5x4g85RJquczH8TQWqESULsTknEPYRi1xtGbeV1tGdXbF7z1fqYQu25mgEWULKFY5yA7sLPw9VfzojHU"
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
