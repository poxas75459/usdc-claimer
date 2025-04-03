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
    "4fUT2HimK1uVZTT8kMi6SQTSit6Vs3CVnnZvLomaKgwZSCcmJBKjzKPpawoDJVLVwNy28fHDoqoWE3LCbfgsJKSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjKD6LCzgNYzDYSfbodEKh2a3EoA46GpM1wANCeefqkrjHtAc4RVDhhGhVyFa96KPxYJwd5TiP9L2k16qmL9SJ2",
  "key1": "5s3Qw75UHGngxmsWwBQSB8XpfoA1LWrPKwSHDoHbMG93zmGrVAFUhQTjcH82mgkp3ECh9QxEpd7Y2i49yQEaTWay",
  "key2": "419PxEL1tnN3x1ig7sx34wiNKYVeoMM5Rz6ZV59iRSj1LFp2kjPeATHfBUpKGAAxpENURW3MXEJNSvvg9DeyjW6g",
  "key3": "oBtVMceJHDf4fqdxBjVk4WTgFTVDp3yQLrdLD5EmYuJzxLqQWHioDfU2vBS3g4sopu57TMAtvG6KLzR7MvVcDiF",
  "key4": "3uC2ZcJBPsXd1kwrXBEcvehxGye7QY57R4CzKDnCyhL4sNYtvHXLjVuK7HcTzj24AjC4dQBkzJkY47Xm4p46RJg2",
  "key5": "oZqEXWKvekyVR2Y38VVML2RyRNTRVLVsDbUucrWa1QhBje2hSfkWVowASKDJw3KAF7neXNNka7eLahfzhLGwSRB",
  "key6": "2NN96ZKYmqrF1Ne6pzB7hZmTwjuBGMXdTdB9tPzYCzBLqS8QY7tRfPVELhMuqMLCMwfVU9whmMUav9Hupcr1UUaG",
  "key7": "2WmwEGgcEkXkW4WVDcj6LWYZ6VWkBAMN68NFxJU9CSg8u8yWCnj5FeS9dEfsCMN5zJX6kG93NPYj9KnWfWxet3xs",
  "key8": "GiZUTdFV4v4gvoJ92ct7jTZLCwUUXcXeL2D45brGZd172CjeHSUXDpGeLwUY693htV3xvuLJDDkD6BWPm9MrCTq",
  "key9": "52XRmb7An4wj5AEZiwkKqiX1J7C9vg5GPQexoTwgZWNnVkPDf2PQ4ZaxcP44yenB57HsgUU2yLueip4DHWUEX2Tj",
  "key10": "2pf7GCJCFt5L19qaeK2Qu8egMNgrFFf5fQnrVqNUaDgZMVyB5KXUB7WRmdJWTDy1dz447odeDRT61xpJnDmMmURt",
  "key11": "5Q9gJiDGQsgPzgfFC4rdYi58FoXoCEFCbkqRjBiv6tmK7aXAv6YhiTpUmBVWsvapnxY9cPE2qRc7zYoWLuZDQ6zs",
  "key12": "2Cfc4hAWFgtQDtfw37XTg5pE3XQD8FtanK7tBRqhnPDSV2HM78vZ6RwJi8Lt29Xe9GrPZLqPB225sxrYkwXHLGZ1",
  "key13": "JgttCYs2jczogdENzDhKgsxyicoHqKUuFdwDQQEB2Vsz1kQRiiH49jssDAQp7Q73HmjkKQt1312EJg7kr2Egyru",
  "key14": "YqhnhVmvyGyPuT8MNWWc7FjWE9YSWAyCfxnyf1Uc8Z5NH4rndWyuPWrJ1YWbjzzxBbvKQ9CpJKxDM8puizQh2fK",
  "key15": "4NndX7SWAr2bn8Yo7Mnyy9LycQUsEsW7GdvoPtWwtoDFKhVAyQyGjVf4WXGYVHXPWRaVJSy5VbzKL322v6oh2pBb",
  "key16": "2sCUSyEZGPWLDPkeDyY255GbHt2xPoRPSKB6mLoZDdgNEDyz9UiMsGyZpsL2pej1DtyVxj8esgY4aD1Pk9wFrQ4s",
  "key17": "3tdx8TUdqk4cAW2FvVAbs65XSxJfbDUHjt4EuRvMEkjgNLQtif24VWj2PeMERiuvbmQsFaQSom6Vg978BbV3Mn23",
  "key18": "2nWtPcxaX7duT4L6CQTXnUrHFuY3MFN5qX1ByeyGsBV17ehZJ61PQKR2yzG9NyQh57wAKcwEezBiWiDyzAdaoEC3",
  "key19": "4oUfcvPBEZe6z2cj17KsV7aZjoer8fgK63Jw936cT2f7UD7aa8M7GdK5k3tKqsnp7dHwQbwbLR4fJf3eGbVkUwv4",
  "key20": "o445RAHJ8GAQPFByL5VK3yHuzryzUcgi9nBdwL2V5t9vPvSePMVErwmjZm4rizBWJBPwJkF4SRKPN77uLbkL9Ad",
  "key21": "5ZsUpZDxy4KAzqtbKafruipXm9dAe1xJPhXmgYNp6b9EPtmmW1gpL2gbqqV9dWT3AXpAiseC9Z4R4rWxVYMBaFqi",
  "key22": "4hDw3Y6ZrioFzJozT55ci1ridXqcm1yLejmeaBnPLYPs4sTUgv4d9J4dotdi3ExDM7tMgMFBkAcF6mAwTQfnvkJD",
  "key23": "4Vj2iDUBBr13ycDV6XPYFqDmx34t2ttoE4CjyLBV2axpqa3ehuTK2fXnzgzEZp1vFaoakqcCySNUNYhMgMvohXVy",
  "key24": "2ATTVAovMGMRBuY1Tkt2JmhNhBDPyC3quucPdnt9DFqagVCbQvn9xdj3Wv48SYgigt52obipyuQ7MG5bsFStCP2b",
  "key25": "5igZADZ5svCzzMueoHxGvsDcZzFKDdaqvozBKc6HNoKjdPm5HHnJHsLUxoxrTuVLc6GkJC5SumzgspRAyKZWBkzj",
  "key26": "4QLv7FTESRyVLSKoiPdPuL15g8PFz43CDXWKCdg8LVxC7ZrehbfkKkk3fs5qZn6vzmbNfx8X1EduXihhm6boaiqg",
  "key27": "5MTxJxVwTp4LGoHtAb91oak8JBEMF5AwKwWFRwMEY6t1tHk6jpxygDNixzn87QBB5c4en2canbiPrFX9LnBBPit",
  "key28": "5fi4KZroUmUgQtkHXtGAVkk2n4m5KnCEZynNZdnMAbsD8QuvzZN2FywXqUcBbpf8JT6p2AstyjShSa9ZjrzXWSFf",
  "key29": "3xzNti17Udqcqu9pdjucAoFq7XyhtNRe6CCjhY9KCsYA4nvae1HPU2GXaD7dk5Fbd5UitXHXEpPmjFmDSS1FAtEw",
  "key30": "5becP1RBT8SzGNd3gtyeVGFtUbrLTTLLb4sqYVuoL1uKtLXXTrCQMJa1te1xYBa6qnoBcamFxc9fd72d4v93EWnZ",
  "key31": "5jhkhtmmD4zbHTsjcw4gyXE8CzEqMJ6AeMrWZ6gcbB9CnKGxm8wwDBKLXdo2rmyZGNbLUobz3jYjM3LCQHhkvXuQ",
  "key32": "x3PhbCbbFJ8LGxqnVzZXW8G49cVpoTDEYv3LxNqgBywDQtqWb9xWbdwCr19UJVWMJ3XE7WNvEJxYEfCpYQUFYtq",
  "key33": "2LN9yavZK5ThwwHD81G14A2wDcW7Bt1qNwR2vLnscQYRt34svso4R6W6tHYLPZUM3eWeXavqU9QxQGXRdzkBN8qy",
  "key34": "4xfyjWsQpQabnViq5dEjVD2UGdpxPDyji7xtBjtd3qS2P3LtvaWv7BvXd8W9GrYWgw3KLPxChKw3KNrX7XswHxHH"
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
