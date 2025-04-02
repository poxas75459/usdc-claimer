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
    "5gEYyZw4f6xuJWLKezLoHEgQVbWWDZcDAQpDHL4nLp849undsjwsC5zWvbJ6cZJVdPxR8dJoWNy2yWAUjmJUb3w7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaXfs5GjBjKnqt4b6dnZJYe7Ww7mmYL24yAu1bZBJGgC3TZ7A92dp3v9NiJmzRQ66UAjPmoFugJjbpa3n6pjLGc",
  "key1": "2gCQtQoDLK5tDd1sEvfYAAo2wxbsRWga3v2CuGb9yT7t7QyFimta1bqZoYqHrHUcxyT7r7h2TZQGqf7UNf1ypEuv",
  "key2": "5NyAA7N8THisRkHXgkrZEsm49wHagUK21pHXW2LxAijWjLVmKEGx1Pf7AmoDKaV2fd76FYvsjfWqTwGMkvLk4vQQ",
  "key3": "2xk1B8Kfff8MtdpTe5H8tvDMEjdZGFXBuyy3aZKfUpXApq9ddQUbjV6LnjGQXas8ftbL57Pw9oSpiRJyhtYEtCHF",
  "key4": "2Rujij1QqWoqH19NE8Qz3UrbzubBpwuXxdimf7AUvHnW9odGytVmVkMuvQueCGe2vPmP8P2g93GmjGB9iBJitMCo",
  "key5": "2fZEdE3SiEBNSkf2ooJtqfbRUceR7suRVfFjh5i4SV17Fzy7xKeRxrjx49SC4wc4rv6whp9ogpgpSDsUZBQbyoJ",
  "key6": "2Uv1uf9AfJWwtLNZ1DHsJSxLjp3aDSN1EJRYdnyoYZ51DdgwL4veRvuWMNBZ3ph6AxnR3DcPsz5Lwd3pkr5NffeU",
  "key7": "5RvbZobEyA4PesYNwcE3ECHDfMmqJoDgCpeYgjE5rUdGSbKc7J3nfWq2W15KcnCtPHCc8YcLFrzVoJFj5DkMymWq",
  "key8": "3T8EAjdEriVtwY8REYknfxGwU9eRGQMuk1ikT3LKw4SGa7c4SAh9SpSCkjMpzdWtHMJRHYTXcdkKM4Ag9gkTWaaP",
  "key9": "4r9xZXm8z8d4jiVw79e9sX7CvWSZ4WNrKAj64jnDkmJGnLNESLicWnk8xuwKmg17DB2b3a9cgMt6f23kt9ek9HTb",
  "key10": "538XWthUWxsSkqz922CwgHAmm1gDzQPMvsJzx7QDwVxRRRc123WhpaBoBZXP2S6868hKyGusK3MTadY4dYmVsKHQ",
  "key11": "3AeAScWqRTTH9xXXUdgzavYJaVLTJhDNvtLpWZF7kbc4fCZCBsyPwHTmpWvzpqP8KDBiYLuWBMJqM2VcdbM3a93e",
  "key12": "Wzb5Y3PNaeLMV8kyfek3KyJdTQpDM4UmsHjGM3bbq9fSyk7LVWffsr8Ma7gbnYQUxKdqB7Y7Nwmy5yeMDsSRm3n",
  "key13": "2fmGvidmSj8hVpAERuYRJy4uWWbBfU5DDWrJCxesZ4D2y5kstZe8hYe3n3eXuML5m2YuVSt9GRLQGuYpmLGw5WQ4",
  "key14": "GwRBWuqirqwiPkLrtZ2Q1CxxoTp6z7Vr5bukXYXxYNWrDgEJbR8NRftqjPkymprCcaXUcXafiTqkoKXtsiMpRn3",
  "key15": "3KDtWst7yZgXoxuanM77FuHTC7hxAuEcu9UNfMhX7LFnPuk224Ui7jLWsGu8Z88cmZFYFBEXFcNmSDMPYLvV3YMh",
  "key16": "2iSeAsc7zN13Asks3UdxZ586wjwKLeMDXuaW2V2RcczEiEPcAzUuLL8DzoqeWoRJsMPpHm1G5zfPtijPtG9m3fyq",
  "key17": "33XWJhwymcWpb35CBUqCqVTkzF4AdKhyrStaEviFjpfkbkvLVPykJYGoo5QQ3fFUh5HvKvnvJoBfXTXmuZrSeKs6",
  "key18": "5cnJFhdMdXTeT9FxQPQq2fU7283nrFLzCaJvYkeSegLtWxZxmgSFXxdPm6bqBMQezshCAnKDDYfzW5NcqG36QU8K",
  "key19": "48NzMER44DiGdAuxzL3dLhAuWgRUd7KCygjHob9SVFynTTXPHDUwcqvpZkownAuNUCivg4s7VrVmKpSj4NSWvo4k",
  "key20": "1ixbioEEZCbvv7PUrwevugBRvdZznJ3kn23XPKZ559gkzk2qLofcU7W4nxbE4pNs22x8h4pScY6pRkzdVazGsN1",
  "key21": "4xrKMrtSVmGtExTQWabnSdYjemk5XZe2dchDjTDcAv494RXDinm167r2wBjEQXC4ZL93gL9kvvqJPr8ZfpbUD9bJ",
  "key22": "53rAdmjTyEge87Gys8imtVxFHwsvSwzCAXLoeLy4piXPPB81ZbkXd1pemABE56HsTGtZYFESfinwrnW8JN7k4Kdf",
  "key23": "5J7S4xDPymawx8veycVWNRhoWdg5MBShV4NGxUtF6Rr2BXt7LredRwJ8sFh2tg8HXJ8cLiQKe4K58LNSEjUiP2zp",
  "key24": "5mDzUV1qKgkHhG696tarm3SeoonJmsyG2Xwcnin12oXUQZQG6cxXncy9L1YRK9io5nBqwPY8UV5XKa5Xbb3Q3ba1",
  "key25": "5ScvJgNde3cB1SfakqCNudzA68htpyX4vPbgBTSL9z25h8q3fLZN9do5VZ8swWxiVLHJ5XbLFyEZ3UB9PCwG5ZE3",
  "key26": "42AfMvo3ThURz7ScaNg37CSvH93aJG6svhqLhnyF1aYo26gYTDdC3eGBsLNnMcKUeqaAjeuCRAZpKRiDAmV2aFhp",
  "key27": "QzHZHzGmww9ChdHPJmPu72T2x9EavwRKYv5aFaZrKHmKMH4ScBQsjfYVQSWASt8tPgj3accG8VBXPK76aTDG2ow",
  "key28": "4Vt513sp2anrA7wjj4R68ZmtACfgkPYp2pstmYBn1QsxTnDJp2jMc3HUKvHLn5nv7NbtLVQiriDVj4PVJntt3kxg",
  "key29": "5RBmLK3gq9bMXQ2mewtHwJ3vst6fJHPL5XvdkdDVu9zon1WG7wCoQgW6kB2kVoTUzhKaEBFbYtrwUXV7YWpdEKTB",
  "key30": "4pMwkh8RKGNdrqxDuhURZoHVBbx18XFzjAijauVB7Zq4uy4duogJZxhjbw7i5TaticPTHW8hNLky1pjKLHc25XMK",
  "key31": "5RS8cvqHaDPCwn2MXRCawMGVNaxEvyKPL5hpdCcxrcQfycBn8J2H54ZyXbnsvtnziZ6RxPppoyKPKrrDz9f8PiaB",
  "key32": "qJqxrrTrYjVfWeEJ2YCDizLq8T71FFgadYk6i4A42X3TqX8nMDUM1NDKiKGRyoaDcqFSRqpqp34hcJKx36bVk2c",
  "key33": "58dZ7Zc5enrF9j5kKdxS4cmiVwiHYxZnWhGrczmQXmWtx1Q9bwGLmTiLJBJdcpnHxScCs8rNsHEFVmpkxnePXxAP",
  "key34": "2G7iwsiEPW9PkMZpCwiZD7HWKybdeLRGuxXtGhHRDJtVQZs6VqksZuoiHcPYWMT382CUXcA3jJ8riddM11VpyA2g",
  "key35": "5QsR3cddiinwEKvLKBR2Yo2f5TdfM7e2enshzit8zsbxPDtykFupoTPwgsnE45joY2NhJPU9kPATK7M7vBdM4dmp",
  "key36": "3ANLxpTa1QdqidttAVYcQN4pFB2jyGYTpuQtZsKQdhA5RCqSG7Xq4SpZSwJuH33q3Qud7dtf3inGFwaXkDyAwuHH",
  "key37": "2GHu39MyLJJqzHc6yKPcAbBL9fJhwux3fUi1FGAa3niRkxrrgYrVnzePbLdtxfup9qP9p6bqkbX95R4rbShFo8N1",
  "key38": "tAaXium3EGxuYbn3afdhufy6maRDiDMHZjNdUqcP2Ci3k9vULsnWkLeZ8hn33bsQRo5L2h2ZhFvvcYJaUyBpGMK",
  "key39": "2TUEMVJy6wg33xRGa4s5GwpjfB35r4FaQyrBTznfwDRV8op6ZRrtKNk3QCS4NNUbkLgj6xaSiN8vmA1WfGMYb8XU",
  "key40": "2wryzjFbwHbj6FJKAk3fUgo86wkq9AfSCwXcRe6tverUGPGv2yoRNEtAMY5Pg5wMRgYzBunMu2PnnSUch9DyDRx2",
  "key41": "5Q6ZFnZ7KYW3xSabbmAnmqLYNHhzQCYKJfANMT42LHaiAqRq8K9fsRW9pH4hMW8dKeXFRc9ZnRPYVs3Gm32LQytf"
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
