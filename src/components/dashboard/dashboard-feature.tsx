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
    "2jdxLLTKqskNoQyJ1r4h8AxnZUVUE4ynuN75fEM7fVFgk6yz6xPKd7cXhiYQ561ksgARLUQpXksaM7pV5MdWVQae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zfs9FUABzisBNPo5mGijLhPd3VaDXak2gtUeivHwYrpRz9Ln1zao2br1XJUh6c3QmN1tn4DBHeF6jKCMV1PgthC",
  "key1": "2u9TwxxhdLve6CuajUeGbPvEB3tRgTzXzjZgEGUrQbZZrQ2WrJc2tGr81pVieu7AjG6tWFGUpapxqMw3ErRwUnKy",
  "key2": "3wsTtN86EVc5K4zAniadrucLuayRbWxkTfypogjarH4pibg1tzByytCQ2UBu3hBbWaqGSYf3M1QcvXw8Zz83sKxF",
  "key3": "3kXNS82kNGMxrfCVr4DAHaD7qek6a4BTg4wHJz6RBR22tdQGMnrGMNH1uBQQARBbrFLu8TVTxHc3CBSQicbxKk1e",
  "key4": "24hCqqQZgNtgpJwZnvZUycpyfNGW3PV31tEGySFbE9yBtigZ3DyiBXeJ81XjuDmRKbm42nGdTPzrpKvNUR2kXTKR",
  "key5": "3ygVSm47ZqsJy3fNFrbpoaxuS9aX8Y45jwbFhZ53gfZgr3mAEpLr68tfBgQCbxi6p6U632xGnQEkPPCe8cJGuadA",
  "key6": "2TmyjfMmUufkYKN7jmSRtHtotYJHBBUyviNXwm8sxAaSy4L9TLcfkhXRbMPcfbd63Czk9pBk3SuWLVKBFr8Cc5jp",
  "key7": "2rqLo19qmWhDMqkWCJoKm4MHRY311VYACzNeMmnB5TvM19PQUJdmwe2SWvA97rp55GDjghJ1JbdyjMyPwCpf69f7",
  "key8": "3823RvLodrub478qwdiBy1BgCCqik8T4a8HsHUYWsvm8sCwjjVgrbavhWXBMYwrPTxnqqSGiTXNTwjZXdmrtSdQ2",
  "key9": "5TZisTAUP7Nw5Px5gPeAYBSUewTrack4udVtFdtXy2XtVDNBGWbW3Eec6wrZJtuf5k41EPMdoFEXeRuAfmrGF32a",
  "key10": "4LQwV8xuNYbtonJDejG73mMayHGQga4snqVn4sFiYfWf6QcWAzLgHuunJdExXQyGRXKYoAvmfM3WjeKP9k9uP9ZL",
  "key11": "yu5vE7sBwScvjsE1GVDvPs2ygZNLTSz9TXLDfmViFRWDnMmbpkzfQEAXTw2hTaqEf86xNjUAkwZZZFUPAA8pMVW",
  "key12": "4BAeNqmuSx8H3h4NJcRssC2NV4Fx1bnLUCEPHPJ6YKGYQEB76oqzi1HJH5jhNBUZfzeyHrJDhd697HFREnECJKmb",
  "key13": "2iucdkD9fXZZoEW84S42gBG2ZxJ5hMmcuuVZK8MAgsyBjA834XcLomnqD5kyoxh8esr6oEbGXMmVv7reWvySNwQm",
  "key14": "5zc6CQRr18LY9cemDMvBrkMWUPpkvEuhhyuQ45JP3hAAr587kk36HQW9AWZCw4QZXwbg35qK61PA7dZuhbfRFpMN",
  "key15": "4TKxpArP6ZeQwN8Ug5ccUob1Zvbz1SEKVMXoFFXaK1psiWm8HiA1ZQNHEHjdoFReCdK2oXZ4LJqg1yomgc4YBemR",
  "key16": "4d769H41RorfVeP3Q18vHZYnbSnFXkukFd9wzdjutNmBqyQXUCUswS9Tuv6w3booUHTzyeNSnBtpkcQoFm9c8wPg",
  "key17": "4evGTWvvVbUgEkL6PsawyaatvpiSWvSu8Ktq1rzfJJDcbR8LaK7bAo6UdqKBbzbyemeCScfUB88iMuK3siUjcq3o",
  "key18": "2aFRYtcJuNQpJnFaSpe1r1jZrAtba68evGobYjKisrd4hpnkNiW8Befkmin8LwAPFTALJvu5cEs24hwcDDs2JwCw",
  "key19": "5nEET14VXiR91mfG8U8HwPbUaTzjKipNzGKPbVDgak7i5FmW2mpHuTyuyzxxmaz4kE1DbiaJayx4VMb1ve7s9NHn",
  "key20": "hTsm4aJRJvUFKENi6mgPvC4AurUC1v9YrRg1Ri36wtE5VkviPWAS35iayWDdvC9DjomsDBmd12LK8GJo8t228GK",
  "key21": "2U8kEyF6uNUiLT3xpa2UwU6dGk7GYtmKmUhJZ2s6XAFtaxLd2TpBqZ3PJpzraAaxon3Hi4DgdhE6ZZDTD6dUbG7Q",
  "key22": "4UFUYxBB7iPG9dvnkYLJQ7kTNcUWqNR1ZqvE6MYxRjXBSJ8cRQinUHzU3SzRfozNFGVnm6R7ZiYYUddq3EXZkQid",
  "key23": "2qxiYjqm1A51T9cYTB8L99MbPubUQWz4iyVEFSRQpW8yQpHkykQe7KokS6KRjMMKm5R37TBQwpZPmAkZt6uQzZ8T",
  "key24": "41SdJFDd3cd7W9NaZJr7CyyLUoKcZUMVKV796QzchA8YHZ4ex1snpxRPNg6YS3HW3DAjbSC8rMrmfbanSQgDpFdk",
  "key25": "59bdj57cygm2RMNwYDmaGHxskzoRHreJUqtoKvr5SLzCpbvzk8YXZrqFdsTcPqN4boHxDyurd97azdMK4N55U9iu",
  "key26": "4NxwYqc1EApWZFE1XkXbHbZSTRrPahJ8BekT11SVQFUs1SQAv5D1C9xjSkjXQzBeZfSxE6A56p8qXUvEgf4nijBn",
  "key27": "47awAFHGw6GGb9W5AMNhabD7TkC27CWdcdZc8SNsgCa1Nsyi9RF4pABWSt4KmHyQWaJpEPhLGZDeuDvyEP49dcTq",
  "key28": "4x6Qv8BGwC9K5bthLjqbvR7Azt4fNq1sWkrfwjg89JaoM1P2RoAtRHbFUzWvjx7gBKGc3ZR1raQxUYUt2ghxBCze",
  "key29": "Qfas3wy8LZTxSx2d8QsPfezbuXienQXrqLzjxc1DdGyF1az8FtjReBPeHEhBxXViR6Z9dgUJ5N6ttvG5WWEg7n2",
  "key30": "3TF5jURh7AyFKZVQ8LSDM6GBUXWPwdaqjWNqZ8EYoJo2X9wZNC9wNizgweMNKHrUxdjZefo2ceqVqV8vG5SXZMwa",
  "key31": "3Vcw7ucGhmqpx8L57xRTD4dzG53RUsUr5N5ZPUMdWNaBan2TaA25zQZRK1KQhkSJC3Uma8FCVcLVpHxpEWJtpWzo"
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
