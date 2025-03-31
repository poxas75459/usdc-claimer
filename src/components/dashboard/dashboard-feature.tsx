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
    "5wNrQa8nL5xoWQfAkTRsnKEQcUujVEzb9vytE88PgCt3XpQ4ZgmagWXjnXNxdihRxffE5QcG3fZmaFKMMhqMLKfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyUVUyhd2VBm5NFG4f42QaXtv6kfTuC2sA8vF7pVGVvR4WFVLHAhBdvv9GvyPj38rcfAX23dLGqBWLHNr2kfZKj",
  "key1": "58gzpn98uDoYZQX89d6aw554HMdzRK9p7qng4Lchtdm1rK7aakXFmFLvZJTw59torGouwtTCch94yanMXUhMUHeS",
  "key2": "NDRt2r2EmVSJP3wPbDDgF1WwvTDsbDXCc1W3YR49NTM3MT9LYKfHE1qN5pEzemNgLHZ7LSyLhFfymzz4wtNZ1d6",
  "key3": "6QCJUuHKPjdeDzth4y5gzKxA12qyj7cXj7jxwJp516PXCJ2A84atJmwoBpgPf5RYzqFNS94WU4gCb4HyFmk6MZh",
  "key4": "4g17JpdQ78saJ4Bs2YvYiScigS31Xdqfr1ZtmkGp6iHW8McgEhE3wkFeQVqgeYD75gMaTttTKoeNAHQT2ibtLB8g",
  "key5": "MkjvkNZgrbne6uLUg4hp7p4sFpSsBgTf3dXS8UX6CSrTVJXC69m7565StVeQRHyW4w4q7YVokGv3QTsi4Ema6Zp",
  "key6": "5eCP9672crm4fyf4zCmKnriRVTeEL92MGHiQCF9D284KD3fXUqzGhbLNc8DPtVWEDvcpFunZTuFn4MaGK5Xs5cEK",
  "key7": "3e9vPLUox3obLkxJEmKpx8c8pzt3hz2fyppjETxMTAckss6nMVJGv1VMUhg3qgPE39QN8p7kU7n2LveX2rnQgzTR",
  "key8": "HUU3evqeNb6uu2JBPQeRwgr6VwoqhSnaxk27dUyhdSA2h8JjZ9VBuTEVtEveHYY41zQzjLirLDPFrfBLYCRb1dR",
  "key9": "5HqEXS2Lixtn3wA6q85gLvUigmdr4RXdbtdhzJY6KTNzWh7pyP9DBdvk9wxJ6X7T1hw6Va2QUuamcVdjG4ehiL4x",
  "key10": "4UST7Lc65zNKQbbiV94YDDdjdnzFRrGqcLZs2o6k5L71T5rY4XicxrshosKTV4LihU9TZEzxboEBqmsDLzwQnLsM",
  "key11": "4jLeMFmyFyviZAjvrdwiUiTVeQZXGSvXF4tFLFMwARr3rLi3epJefD7jF333sKsmLEvBXrYkNXMGi5XE2Qvr6QMY",
  "key12": "4hHGxentj4fZfVegy77qWgaVfy74mkXZbA3tWEGJ5BY8zpMaQxKhNSG5qY2D6DWdUCPdpgqeF4cktvwtb6wsP6PU",
  "key13": "2JyG4WmM8ucaG3sEnaLTSLdysRFBmFzs3qybiqEHazE1zw2WY4SwowyEBmuDEwf2b7pdvqYDhnF3VSUshKfrKXCt",
  "key14": "5k3BSPsA6viUBdEgvwEnkXsfQUZJx6wxnVKHDvgVC1TD4R21CVt1o6tvjz4VoekzoDmSckHowP8qsfPZGpa32Xn1",
  "key15": "3SufaTMWLSN8YiJTgBCi9RUQNDPRU3GeV18GvBKKXprR7vJjyAUKdffpCN1DXneKe2JWUXcxxWGYheQPVpGA7MQv",
  "key16": "5XpuKhU5BpiiszgCwE3NR32CjheAendDEtzUXEjGfFyKxAN4CL6adw7GquDoisgEYKqRUxsQsaTqSrYXuDUJPtRQ",
  "key17": "4HFFnmTCE3rz6Z9kR7pZk17KcsfpMAnH6j7ENRTbj3MPp6ECmsmNzB7s9WZx5nx4sxU3NB29MVryW86hTDUnFmkw",
  "key18": "2tFz6BVs1y4PKhActvLXdP6gdsvJ2tZ4sh2NmYV7Jz8LQ6CEZRx5wjk8bg8BDV4H6n95YDHWFHmuVnjtcdGZJbgu",
  "key19": "275GLNbQejrQmtyBMtZJLevRqEwvTzPhfF7TyQZBLG97cvbaZ33Z5jJ1aLT31da7d8wQiwXtX9u3SVwkH9mzRunD",
  "key20": "39XWaN9GFrPj5DpwPByfdzjALLEkZN2fnddvyjoHZgmc6G7E2uNG9G22LV1nExq4uTtmHj6htJ7SXQbZuKGBHZta",
  "key21": "3yytvvYrrbgavjBfsjDUZxcD2PmJeeqghK3XfFAh3YoQGu1twKAC4xiW1b7arDX5VLZHcWzb2t82kwZCSm1XaRMZ",
  "key22": "5VPwQKVREZAWxciHvJDxDwfHDUTrpj36SZkuAgUZ82HxEYje4CGF9QYUVggD5V4wpD72QZbQ66TrHmxFw9fLnCUu",
  "key23": "2TttDUmaurnVMTtQZLYUS2JWgZZZaWy2Ae8PRdppNSXRZcNm899e2VcxvLnGsz95AWrPmL8tb8vTZuQAK3mEEXNJ",
  "key24": "39FiAYv95f8uEJMCorJAqRjSCgUGsbf2CWsAvKexqnJnmWyN3rsAFSDWBE1vLbCeHqppY6erSTmUi62zJhdA1WMT",
  "key25": "5J3zKy47m9i5cZCtpRXsCcrGkPWUFHyftSpRW138cA2W71FEYyyR6c7Rv2NHnvG8HuQW7vv1PNLzfpCWPU9XP3oQ",
  "key26": "2QftthGjGtHarf82YNuvZJSQp5XPw2bSxW2sPCRC4tQ22dX9rhNtGDuVTYwVkWtDHUYTpLy2Y26bFp3UAu9rJRJn",
  "key27": "31wyAGtjKLxqqm4kEzF7Hq5iYRPpgGYjKdDxHPj24QzKYhUQsMDpz52Gsi2JHifJu2hrrpEaPNDNNW2fPqNtxz7k",
  "key28": "5FqZCLP6yDykbe9W4q9jsu7ZHdntSoWkkLBE3ViqkK1arkHSA5hwfEwBFc7JkQVvttsiu9RMphpr9qUc6VbWqJLe",
  "key29": "2A2raLEYf1ydiWxGrYAvcYF1AEtjc3oQVHa3htnGRq5Ht2ZPmVxpNPWqBZ56Ux885rTvdcU2syggCpMZPMpFtDJX",
  "key30": "5w5ZFJSLkwwnB9NVSD7NkJp7Fwhh7XoYkRMbEKZsGGLrSMitFHitQWNEj2nG6ZgppidRbQYqgkyF8XUE2cHSCxTP",
  "key31": "vkZZ6ZXSkndZ5SN3b1hi7dqp2QgzPC6pCThXoREt5umxYBwHoCFGJ437Q15egChqseBKuv3fG4iqJ2WVdx9f5Cg"
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
