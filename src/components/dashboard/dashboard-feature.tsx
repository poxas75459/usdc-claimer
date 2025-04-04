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
    "dMRLSGHENRfuAms54Xzq3Gx7q4ze4Guwtx5sresXcAFnJtBU3jPNmJzziVeZJkv4nRA2uHeanxLXpXG9h82Xis9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LffUuj2VEnR1FT1ikBrAzjxCpwJyQvNe4yhkneV7d3pBsqKJM17jqm6BSGoYX9iMZy85XXKgxKUxytb4UL5NG8x",
  "key1": "5qgmSENZFBfU26ShvQjrbGx3sJjurWKxsVJPmBMAhrMkKG6ox7MFtHqxmJ4TPDGSHvj9DF1sim431MQdAW94ypLt",
  "key2": "4LrYPgAVqr5Cmq6sXcq9imYkVLg23aaJdogybFwbELCPf8YMgJkrcGxWyCnb9GEWH4Y4EmxPpzL57p5nDudZSPCU",
  "key3": "65AhC9oNJLorBLQ3S5LxGzeDNKFjgMjHKgZBBHsYjrCu6bc8bSYcpZUFauoCiveNM7FD5fEpRBCsPLHYCJYRNKRT",
  "key4": "3jcyu3YdmcuSUxwcEJHSuXoVg44fmVyD4UjGFzbRQUsb5S8fHCh9MDbT6QMBwQmw9LF5boyMTDf4dwbxKmAXYXxs",
  "key5": "3dwXNzf32zNqgBN5iR2wVFBBJVQDF5N4dmJBJEw4d7QgPff5BKXhgoHoY9e7y3hKzwkzYKUYXG4WuFcfkdRcivwv",
  "key6": "3JDwBGUrRgzTcU5p943KpAZywjUWmTz7AU4RFtoHhBh4cGRNcxdYmGsjmEBgcANheqUVcnMERKnLRGyPx4Vwhevj",
  "key7": "2EWcqKmGacdwLQQ39gP5VieChA415LW2gUPmtgevLdXcvR1tuRRELG8Y3d7C5gYjpNbmiog9WdyAPWHEgC8sL2yN",
  "key8": "3xH6UaAUDQhG92oh1MpiHpaa2BXryBmnykRm5eUW3PGLspK1zY4J4dJNX5Fs79N8UJAnqGw4Aa1THq2DUif47mVH",
  "key9": "2J7cesXFLMcaVWHDZZT1cWZhuKeEc2tmdNuNcjzC3Mbcz8VHSvKJkZoAEHS3jjUjLJzwqXJt7BcSJo9hFbqZFjCh",
  "key10": "G9NZYpandvMcJAHnxxuHYdtyNATjTg9zt4dCXeozHRuSUdEyjfCDRfUDmt2v3xbQCUEGCp8Mego8tu41AVdxmp7",
  "key11": "5KaYJvhzNiLVpVPH61sTuRsLgmHGJYvewssHXXyYNFVzcJzWxu65W1qWsesKDXKNwctB5Sj9kA7gxaVY1Sd1q1JB",
  "key12": "43v2fCYKFme5SbNNM8LboShcatHcRqgJij6MKQBJUGgFRQYpeFdxJMGHjTinTXE4UK8xm6XguakxgE12eRXJxcuC",
  "key13": "2WcXNoa7yhxmdShcVmotcv75jJJUstaZyT8grxLsueMrmYDfr7oCisy8qa62WnxyghW64GjELgEjTAT82at2rHrD",
  "key14": "iqBEe6UE5tRVP1AuSBjZAXChnMZMph7LkHG8Hoh9kF2EpKyQQRrTjzdCqmunUV5neruRxh8ZHyU2gkNJBtNNbSm",
  "key15": "3HV2pGxiQVKpU2qGB9bRhtwjyCJ1WSSLkgVwNZ1R1gG7hnieWsu1p4ahVGWbWfq8FECrsaa7nZTKVLuVRAJorfza",
  "key16": "3RTm1YRgyMP56PNWdjFYEijajqUwAXkMu7dF2j4K1RVcaP5Ci1ZemJ8evfQRBTAQ4CJ6MNXbvGqwKwDFKvJKsfeM",
  "key17": "5BrFr9zsCKFyBECT87oZB9WZcLco7ZzVqRLHJQgQr2gTArF9cCXu9u3zMSAdYBGhBZ6PPFX795ATrMm6S1uzvYCs",
  "key18": "67aey3yTp8zwivrJ2PnedvMvwUtJen1xmGsDAyYDeo8AQ16xWMqtbTti6Tn7D5oTRp5S7v2pS5eyKFU5qNJWyfSD",
  "key19": "57JRBETcakkXNbREaff9zceKaFnuxpHW7tzgCMSmUfYMuCJHaUfU7PKoir2JNtkyZS9ew4A21NAD28r7BhPtERGK",
  "key20": "56HnfM813fVJwDZCTXiPan1TvwgDXwrCV8N7eDkGoXcLSwg4Aft8Fo89MJyzYb1A7SWN9MhvXDCA6BEJUfGkRgDf",
  "key21": "3btojfNQ4a5H1KFwrtZRmFCNGKRhojj7hibyvYHjZL3vhUK16f6AdttUuvNo1tCmWtdNPgULpuh1yaeepq9jPYkw",
  "key22": "4jpTB6RNZj4Jqqik8VfNZcvdnQKitJtiHUy9iRCndYYmJHNS4UDYzB8p4vUunVewmsBrSG7JU3z99hKF7nwq98QN",
  "key23": "24phQ6tMrDdF8xADpn1cBdRjkzzp5KeigVYtk49xYa3JowofwAUKAs9WnrEFDT3ayqkG7Cwr9scLdZHhmCvrhoMq",
  "key24": "2qBerGdArJuQqUAmkSjk1WtZ9w43oK2jeWqgKmhSXBvvD8Rph4dJaJkTw3TpnYixDD81kg6XgvdfTLWAH1SKLVx9",
  "key25": "3ASirWK2thw3uQJcPBg4wbqUAFv5yb1sw8NvPp3ZbVH56eQ3NjHsyP9uredVzCGeYfBMSsHhwvqnqRqf6JvNxedd",
  "key26": "3LVFLbg3ZQJ69daQS96qnDA6BzCwFLQKE9iVp8aouBiv5rngiLXS29byUt6232j9eDgTt9oDX9Wd1LG5ZhbLmRap",
  "key27": "3z8uJ6bavzNDfmqvSbogqqsLT9jTx5tW6yzBLhiVKd4sMHdAy7hdWWnMNssHt1hd1Bew6DZXZZwdVqXaYqxu5UNg",
  "key28": "3Yb6BZzC3Mb7ifjw3GtBm3qsADM4cLFyJ8xWQLG4DT7PpCVnKDjpBUhh2EbLp9S4eDCRh3hShEU4BghV9Ji39h3R",
  "key29": "4w7kZqGD9TGc49r86TAkLrjdoaQvWrAuMtdSNAMkcbkMdjMHiqbrRE8E7qYEThNvBwDnkenNaFA6i58nxqp9X4td",
  "key30": "5z63k5c4p34AdouzUK66swATXDRfmm3Y42EJfy5wyEMDCzRuru6ymvkzKRCRc3hQKQK97936Z4FmZdT2mXf4KJbh",
  "key31": "4aVJWFZXdqxauzVqYuxp6rWzz4ppRmZ3bXpoxHR6Sw2qxAR5dvesc6mUnYfxh7S2Zzmdgsx5j46J91p7Frv7D6Up",
  "key32": "4c33ZfnAeH3n7Xp2DiQ3VQz2obMSzLsKSpkuh7kxqwGdM215Y9KUUD1nkdn8YVj9TcrVuTNHQYVPuJAFCZMHwDjC",
  "key33": "5yva7obvFmAQb1hetrCw68r1MNfqqPuifDu9JU9N3XvfXDq5K5pjaozCE2Lio6pZnAXXTBJuU3jgoSemaKtFH8ML"
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
