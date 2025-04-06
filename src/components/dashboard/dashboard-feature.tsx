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
    "2YBvZYRjdD8ak6auK7ftfFLDy7YsUvxtDvMUssvqQukLnM4tPLX9ddfKXt8XHoVhBS8xBjwZFQPkThXybKjxjHdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45YmF8haoN6NNZcmPuUzqyRE8NxRzf7JQXXD6wujmyZ74vFSz6ukK5KWSdaKveu3A8dgiwfDT75io2LpFr8bknbm",
  "key1": "5y91jptV4mEN5K9iL4hYGmfbcZdThuHsdgJQMGZgYXtf3D4p3o9NeEwS9bRBRX2YHB5Rij9EwSLTwNhWNQyUz7B1",
  "key2": "4T4e5nJsvKFSvshWLAXVk2E3pT9Uk2FgM4sDSxGbB2pE1NqKXomMy3EuDynvCwNi2gEqsaVsPM26oeya2L7brAJW",
  "key3": "2hhSsLWzuEaiRLteiucPZQkQJfCTFnuoCL1AT23yZ2jYpxvhRRezX41KjPbiSNYTLMR3bZmAdaRja8asY4YXCVSC",
  "key4": "5S5rLXKpZ7qoxHP6PmkjvtAjCXx6MK2QTtjmPvoAf224gsSWuUwbQa2hTu2HJk2HsjyKQCfYpc93Veo4c5nEyepG",
  "key5": "3VtX25ANVkskppHs1rQomm2gkkcNp7oAJdgdVjC3JEmdexGi9jQuoKKeChyQ1mQaxEahWsYVanCxmZT7Wy7Jbh31",
  "key6": "5yzgUkr8RvKycrVCR6RZHXc9oFCUUT8SPbWyhdfre3mGwQEd8DW6jKNuMqTYUNvBsBrbNETwdeq9Rf7D7o53tqRJ",
  "key7": "NXGXPm6Vas3EhgzKvMc8cT4zLTE5W8tM3NCi4nQD281EwGvFnouq1sodDhxUtronqV34G7NHC3V3Qw2poKnxTNi",
  "key8": "5rPZ9Ly73DeVjZezaiWyNmt7h4zgn1MkHRNLs6KTAUtruxzG81BUTKusCHSrXwtq8qyCZjSr15EnybRVyoeLtDX3",
  "key9": "3BSroy536mdwdvfY4qXoqqcLsCv3NAWnFrPTMQp9KJ8sFUKdRLPQREyE22TGEP5xef69KpUhB9WWs4ctwmiU1EkP",
  "key10": "4vvKRb9k7fpsVw9MQ5n7TtdwucHeMUUzSEkAtk2XnNMTZcCNPJ8zvU2SzQKsxSCkPyY2cQFvne186kcxgYXhW3Ax",
  "key11": "3GfZZRaJNG7JqXMPfw3uAbwRnEtMvQ1rKLNYtLdZ7YxP4aYqZowRznd8FLgi3c5FYwk5bYyg5YUWYNf4VFdkv6GQ",
  "key12": "3BWu4Muz4H5FdNe9yiQNDCviQxh3f5ruMi3Yda47z4mU7KxSg6oMcaNdo9L8uZE19yAJQNZdeGu4ioHJUubvrzDf",
  "key13": "48iyT7fcaYHk2aGZE1qzZduVbVBpPPjsEvHzuSK2p8K86fUhA5AqymDubq7yNeFQnMCzgp159AFDh9XH7GE38crV",
  "key14": "2aB4huAHzZmDkkNUzQB4q2EaUzq4g7vPhJHeLjYbFLpSvDnz4DJ4EUYugih9DU41g4D4HaE2DqPZswj9SxFZqM1b",
  "key15": "6jBRn1EiphwStyNtyzexRFgTCyEYekQEsaFy8JMoVxVmqJ945oYrPQkqMUMCzdWrtiKBw8enLYLvVHtUvoofRy3",
  "key16": "3mQHhCFTiuRuMx8dUFBSAwquzu2m26A9sZne8CyXft1JBwxFERrZTSSWTK6WWiMiD19JY4W2dAcpSkcQrtyXPuqe",
  "key17": "2oHYpGiMz76y2o9keV5dTsnMgEFakn5fiAzbvWvab9dgc6VNzmBMNpgQGWqYPnCC23ju1GV4CSCzxeafEty6NwvA",
  "key18": "3mtqp2LE5385PD8Ctw6pPVsadhsEafrcPDxcdeaW7TNDzdbz1Bnr4GW8ca8G2fDjyafp92mKMw6o6rDgMicrj6D6",
  "key19": "5buxhfVFpmZVnWtsmVMZxLNhkj78Sz5frTDSXqMG1GMP4uGE8w1QHdeRbhEB8G6PBDb9QhcDDd72Fcz5pjJDKmKQ",
  "key20": "5uBJ2d1iLxJnBJnCwvGB8xY2VBr9ih1Z9f9jYEBPs3sgYKvcjKxyJdexqrrcChTyS2bv4waY3ZXwpaxqh9CY1y82",
  "key21": "pHAPnSqDQPYKMSnnB1vYChRjUqopVekoDNyCYQ1w5YkJydnPQXxDXisu3dt966Tty5veuikv7tLQBiUYjx8PSgZ",
  "key22": "PPws8B5VfAVxJFkmVzgwacUSvQWHAEsyQLNifvsTLaHoARva1eKXycJ4v5RAyMwTyTRHts7FKkGEGZRV9Nm8D1M",
  "key23": "589zxkvPjD2Jf6MHz1gEUiF2qha5PeYy1EaLk7mn9ynXfTrrU33AbSxRaa1di9hfTNAQnwUztizVTCZ2esr5UTVc",
  "key24": "dZiL1VFUUxpkqSq1UcMaBMCfxHcQr3kLN26gcBak2pHXot8HraRWCcKbXToGBXcDpw2Nee3hNaNAmk1gCVQ5ByK",
  "key25": "3LJXSn46rLRtb4QvuMagRrVKCThmuDC1o2XuC5gBKggK4AD5KSBEnpT1S34o6s3WHxpERVoL9yixWHaP3iL8Rwnh",
  "key26": "DZeFsChqoEUSru9Un3Z8sphd4D2uT3r7yNekhPngdpfQkwoMDGQUrUP2R6YiSXGYQhMruGxGQT1ALTrxdj4cVC1",
  "key27": "3kDDUvwFpnAM83KtaqhwSPnmaubnajj41Fntakup27YGUXatPsPiod2RHbDbU54RQJZ2hXFRKhrd7zu1BcnQmfAU",
  "key28": "43w754TmTqVZnqaZQyNsfFnrvSHkn9sR5GnU2FUcU4uAQgFHc1LHk1Zsy8DGHdm7E2pfNvu68TCiXkEzWfPnZEpL",
  "key29": "3jAPkxm1y8hUsKN6AvBLEQVsf1p5PM9Sx5JzXgUEkVjmRYkksRF2yCm2qNismDsec1Y4YptWQXjVWqNxVgDf7wwg",
  "key30": "4em6Fcd7ay1a3VGvqBHgYPinwZuNu2XnLy3GjetQTvGvbrU2FqosdVDSsdPqEhEpHzMERi9LGEBtD3wp1KuM6ZaM",
  "key31": "3o5xxaRdZhg5meE5tRPJmMUEvQYpak9Tk65eSERpo9tanKmEaR7uz4H5u55GHosnvBvUTTWoVMG6oNCrQPRaiPkM",
  "key32": "4pFX1r4ncR7TrE8sLbs3CigKFatSKzgAEoEvs4jcVR2wGAYHyQtJeLEqvpPnJGa8jYkvNsCptGR77WRyVfmEtBvG",
  "key33": "4osia2TWW1HVmZXU2X8J8oVSpyBLk99KkfBAxDnXo29Wonf5GMH4ERajBdZgeNpH2Sgmem8XvPqUx34CHM9fruCm",
  "key34": "66rt7mQNwWUBMwANknrHdqLXQap5RYK9kiGN1CJYfEaQD6uJAViTzSDMknik6aTidX5iCKN5VaGtqERyDFHbHdKN",
  "key35": "3uzEt8tsza6YhpcbaKJhjo3dNTFQr3vFkxgyjEHkYEV12ZcPhLggycYWWgEakoQMnao9BQgE5qMystexioXvTdXv",
  "key36": "3BCs6Hx2ZUwDqTWRdRYREn5cuQStXFfXSgwgyzzayMpSPv3Z8DZqPY1qwnxJ5CEQnKkUqghQLWDsaDMHha3zohP2",
  "key37": "2mJqDf2RdhogjqhyoTzqBLSdyfqxmG5jxsEwnLMDLpanPD33qxrQq5Dc9J9N2sYCunWef4kAAkTYD5XhuuBBXjtV",
  "key38": "5xcWVg2DfJDCNsPWGvXNDfXKLsnXBeG8eYU8uku7ESzr8Amw3M5c1rBMdkxK8FCCJCcLJjCjMdjjyp9WSxuWJoYk",
  "key39": "49chm7Bbezv1suR4ynZdo9NHP7YxYihY8JzJwpeZnHDuyABpCD6e6f5isCvaeXjADizgJzgrwm2Htd8rvVXmYd1w",
  "key40": "3FLJ3XQxut7552jA3odpcXiMnPqEPuG77baak1BTfABnXb4dobbApdHTbv2ECwraavX96U5ata8JqAa2FJhYqyBE",
  "key41": "P3E6oddF8o8j5vwNBGodKxZ1z9DSFuwgQzu5DDdMF3NHHww64zBWvEJgWGcMXqEbpeP5WgVc1dsJKnfRpZAbiEK",
  "key42": "5bCYYunFKVxdcDZX4eMie5tEk5KNtdHte9YZBvCqJ9Jo6ow3Bu5nZqKWT5VzPZyqfdjWbcrE379Ba7UpzcCwrP3c",
  "key43": "DmP2DFVkrbMzWuQUyY9aMufBbVnohn52Q66UJuzD62rcWGYsqu8t33PwufWFaWMPqjwKhcGNx4LtnTbZLPJ4vhc"
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
