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
    "2aFenFDScJ5zNjqVuAVFwCKB96GkDbfWotT6nxh5DeEoojVSBeMXtiL8zWb7qfEtvXDqcJYh5SxsJc1ztTKy7PE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WadTetYMByKyb66fwPxjxsp3rZH9gPuGNHNRy8eXX2rHPa2UnUwV5GNs9pwL4uvsigvrRRQ5cwxXeE9Z3yuZN2",
  "key1": "2AT5YPrhKawP36GXJtwL1RauJjVgQBMHhMDkukqupYCM6yDNFA8gzniaGyBmkHs3UR736gPvcUvb1XbbgckbbTaL",
  "key2": "4qruvzm2XvsW9wNAwdKwBv7T4u4mhcCkji9njnU94jJmAQECZ9mmWFtLw4psRJmbJ5DhNSYs6ji7F1KPWJZ16BuU",
  "key3": "sbH8cDiMQ52yAkuMUkycYmqGfFk3Froi8J6dWFvpoKDSRnhXoshFp1GokpWHVKTLGsTFr8rQcnh57VeCZoUHLso",
  "key4": "2TnUqFe1T9xdzdQ42z9xwCv57Vik3HMiWZgZA2hGy4NbsamEKsioQhf1Q8vbG9meHq5P8EB6ZGK3xaULt5TpBVHd",
  "key5": "3gEJLATZAMZRYfFfEAT9TEPNb7QSLwpVZHfyYWZHiSYCPENy75ZhR4Nf8MnNb9az1Dh9gnTRXrkC8PHPANj4zfgH",
  "key6": "AFKzigRwbVw7Gw1kfXoXRd6TLEwZK5E8q2czBW1SPnHAzrygvETkfu1BTFai9A6hwCSTjKX4jFfmsicnW3r8gZP",
  "key7": "3whW2M2R3XHRmWq4wBSHXV6RsxAYkpQHZmChNXJ1j7TAv5bvwDUzhM2ntrHdj2fMoezuVnWW3YMupRX6G3Yxegxt",
  "key8": "3MUzqif3y6yod4k1hQXESKc8sxZ7wkxTePj3a8cv45UwDHRHRKqgp9w8pzfA3MhKuiThNTeK7cnGdd7juVzVVjtj",
  "key9": "3TB1H2TxvNHRjvyuisQDQskmi8nSjqcJMdGP5ksBxXT7RjvqMh7j8ijmZSREo9wCFpD3mzRVmM1Ktcc4b5syWDjB",
  "key10": "4YRxHSYQb5iHdgvMPVCCbntCDoDSbzUGQWM13Z1hgCGWaoGs27y4JyxxE9KWMubxrHwcjh42DyW3W6kSGvRcxQ6N",
  "key11": "3N3XkEx85xw5V2LgHX9xuZvgrpmmbg5zhJiJz8KUgibBhHGvK464HdBLtKeHEPGh8bFzhjSPwjsNwCgLJZanBk5z",
  "key12": "2AWt8rDc6ve9Ua9AhXJpUws8N6Z5VQ8wXNNUGvK8kynFcVtNU3hbrRGaTBgN2MxCD46R4YEHhU5xUNfM6z9feJng",
  "key13": "3humymp4MH14U9zWFhQCmm7tydrFe8oayCyWVCNtQg2ovj2gmgAmpWoWv6jPyZJagTBdoQkBiJRRpAc7dUUhrdq2",
  "key14": "5JcH4t4UzPEN9M9MS1MDSjCAiRtqeXrWLGJPthMdyi8XGt71iAev2bz5GCgSeQiZpqEijh21ANXSHhi5WcuM71ep",
  "key15": "5JCArNALbZKnpU77wAoWPeriMfQSxxo7sG5s3mV2p4UhyjkZ7ia29JQDTjNSc7EttgfJeYQxuhpep7j9SKubbWUV",
  "key16": "44qbdZzkW5Rqvvoxh1qTYdAsDPjKoEwqvqDM6X6UZYWAv8gASrAnSPNVZAeXWYsrHNHSjy33R15Sw9YReedCudLB",
  "key17": "3qY1jyUEvWHEmVY11cYcSCCKENWDMrzv5BFPpLwguPReDUyJjCGwTU7p42apFoTM6kRvqpS49dxrHfugsSFURV8D",
  "key18": "46jGVCo5ocLKUXkcgPiN2YbLjPMdAyEjiWEL3b2k9ycrYgGxLY3VK2vMCaXKjXNDddyqsiKkpJbSzCR4w3wkHLZD",
  "key19": "24avjMubUckiqQkjaHLTJZSpzvD2GJKt4hDfc3BLxpDQK2zE3kK9T5r2LcQYGHdtV5JKYwAAuRyXWGa7jAsXPDmR",
  "key20": "g2dBbwGeEKeARy7oazpnhKD1vLSssMEyMhQ3veZRGVxPP74vh9FbsVAVJpr126kVKYKWivo9LQFk2Tc9YEz3cDp",
  "key21": "2k75r7TxPo5Kza2ZguJAy6ofmksQRdCzddWdkZ9qmZHMu4DZW4KMMvUKtdtfaJRtmTxQ9yMeoeTceCHmn1tyKkuk",
  "key22": "4iAtb8KZYnh9348dEdj9wTge4XHega91PHBeCJDcQeQ9TKYxm8F2RdAZVpXRXyJcPQTsCpxrrpxhNF2Ri4fesbUs",
  "key23": "2xj7V2R7RDN47dRyffQEaUmbpXrc1nNGo8MukG3ivfnwrtWFghnudRAreqGRfFKc1wmzER8ayUQMvykRZdk7P6W",
  "key24": "5f2BGuETJqnJCvnrjGzNRry1PZUR3BQGBaMDV5rStyVaLCuYiBHqNoqVHM3JYW4sYYnh2fiwumdiDcwv2bvMvBoc",
  "key25": "4j9GS3eN5piVqVJ5mPaXGGKTeRqhHcdGS33qcLpf769fVeSy6b5RELWVDvLcAYB5MS4DPVbT6KSRmpQEhpP8RFEA",
  "key26": "bzLWq833h2GcRALXky9cwYS5xan3v6nfhuD4uFxb9cJQaZow1LwEe7xQ6qJrWEzg6kwGtrQafhSzBG539eB3YWZ",
  "key27": "4nBiaDsP1BfL1zFd815ScvpZjjRrZKWsan9xV2BNEDjdfhnSaKNYoMMWWMBEpPKE6KA9XaXtZicrLWHcJdiF4Bfz",
  "key28": "35hpEcbnfMFG9Z6qdHYPQ2mB4DJoysXTzmv9nLjeXdoXxFnyF4kPUtoXQuyq5nSPGVhYuEhzFwz4UeTBXVaia8zf",
  "key29": "2TrrQQ3irUPZF84P2rJbktqRZ6wSGvs4TX4vyijzFdjbYQBQZSdCLr9J2ScZZUkzSirsG7RGX1ug9WQ3nbXHam9E",
  "key30": "5dqmHJaNDCQWLm7SPMdMZAAFzSrKY16H9rKVB9xRGBcZCSKyQwHp64j6uobMfbA7ntNhUdL4VFJpZXmgAimCbrDq",
  "key31": "YMFH96b8YeQRPs6DA6iDf4PszG16XQ7wR5AYfedGC3njLb1CJ7tMVKmbYBdLP4xNjDyw5MhQw17DLmZ8cSZXR4v",
  "key32": "3fVwh7N1va1H2PzmABGf9ZfrNVyQDTpTbZ7AqSsjtBeQvY4WVyUE32qL7KNBJtU57ZCi2z3giBw4WYpwVW3fPGcR",
  "key33": "LPrHh7zLDtekSXBz2judnpZtunQUkK6n8RXtAkC8sy1tDvVNGEBd1iVpmBExXACS4Lww7nsjWBY31p5UeJSjxmo",
  "key34": "4vLGFzxRKqvcdhBaZiFucScsWxuSEEAcSCAMJtVVUUvJeRNZdTYVDBa6gMPQqLvYYzgpZk5TpsZZLnDyQohAY5UP",
  "key35": "23ZeKr8jB7z4E8AqSxJ9TyLWnWqeXST32pmcDQUnV7GmK7Mx2h9VoXw5n5WujtZxJ6Tsz8KDhQJwjS7kaYqHKWHP",
  "key36": "2StffFaZaDf2AkD8yJ7R34ZkmNdksnPbdX86EuiC2QxVDXRnMw4J7GGatNn5LuAjUbtZZZtk5LaHUn64g5B8Ap16",
  "key37": "5aEm2cHLnk6cpFihxBVExLjoWCCUHapKZiPfSr8rDSTWXuw7kJDTL2eK6FmLUt2yGXuCNwq3QWqoVybpVUwkYAsX",
  "key38": "45RgpSy8VhwY4mVJLRQbXZCnuYTAyjbLU7oYwHkzVz9qxXLkhn4BaJtfuyLeUS6tb3ymuGwhnmhckxRR2g2dhqbk",
  "key39": "2gSK1qL3ePxGv756kVHGMnHj4xjLyBF9z3xPrEn8TWAA4ypCAciH3LbYXETnDDNLLV6nnS8J7MJZFxJEVhvrZCaH",
  "key40": "3JvTRcyJyTV2b5VqPbuC6WqUjSaK3oMa9DSKEQDMi1n2AoRqwYkxki9BRKLJWeHKH3dq2w7BrsXPisvcdoCbnHkv",
  "key41": "2GFxeF1i8znbWykNoibyAsUyCeDNTx2cqTy7DkgGkBrUEpkYqesK9GbEigWd7mQ2CnTXjfi7TX1SFMCFYsygiSD3",
  "key42": "5PfgFa8n1akPYZmcDFgZ9y8TRpMgZzo76UpAbta9MFuXxGnf8jssiCksLBx1GduyZXEp5G3bWgBCJCN4975x1NQn",
  "key43": "3cAtkuE1sQHuDPttdifLEjnXNMNw3wSADW4piLkvXBi9ZwtYqy5ZYzU7FEPVRm1mW987xMFsXqgX58X1Z7uSjSC1",
  "key44": "4TVTVczvharMa9fBN9uE7VdWitMVgAwso1pgLv5SFHMT2Wyx2jgXm59zhjVkMYFC96kAts47hiTQc6WiVySVeAJE",
  "key45": "4NoKKTGBTRhYmwp4T6hnCLuv4WdXJF2DyWf2QQkq1ZFHoJzp7VQKYMgZfEXoMfjFjvEomPTBcfqYQazFNgvUK4ao",
  "key46": "5brqKzTHtqiLTQ6Jzf5ycU5Gi4G1YmFttEAU49hsWgHCXr5bMiyP3Cj4kui2i1Q2uHDJ2k5yDBXRRqbVMcRmaf1M",
  "key47": "5KjuV6iUkxLSvonXxLaBxo3gj6UvBH8VPY4rMRfcKo29qp1Y1QsYqHrvh3xu636YASBQSfgL8QFYKFyVKNHjf3Lj"
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
