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
    "2XdoPYf3nwcNtYw2mfn3spVp9BVLeemWCJ5TqSQUqzhipwd3oA6Bhq9Wd2YG3Mym43VY52iW2X6tx6GT4nNZnPyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6RZ8LJz6xFEch7Fq8ycNMUFCvTEbYGhJxdXuLbKHX1QYA2Xbd9Ms2PGk1APsysYzhL9HthTNXkDSRwWTBcYoNQ",
  "key1": "4V4hmpitoHZbVDTfPcnECyZ61L36xfSjBaE91hErLcUD92MBTH3U4JVPMdpnV4WaHBUccRU7cuC7682ANt6tMF7p",
  "key2": "3WN3yGEXBGhv1KsFEzKvWV1E5UbEkkWDvUee5kKfetM4u4qKM7rznhcBXxUYo2MoT1qhP6efUscXCTGkHF6Gtkpg",
  "key3": "286fNi86Ahcdc56hrfCDHtwesooUdNWbwBiuQmHciykxC5ZtvkYruPNGmWaVsSphad2M3UzSiCPr8aJHiL5G9Jsx",
  "key4": "2jNji4k4VsDi1UZgdBMZis3uWhp5HM6ML2MskERTxXkdxaXVy7dCVWtedrrjUJJGoyaBZsQLuK7LSGHYVN4a5N7j",
  "key5": "2sMW3EvphpZcPfxJ8KJnTc8TyTJKiH6oGi9RHXAiXipB8kTqXxjMkfgiP4W91z2UKN33rntjWeJLCtAm22irBSUB",
  "key6": "4SaDXRXTieK7omvwbzr6i9km5phpVDGH97iwmEffCxcNoUvwsUe7oCA8QRteUPpJLDRpH4Hy3drxiJCQ2vNtHSdB",
  "key7": "52XoSdXZ4s7LwDHEBLf8PmffwfwCqW5GtHBz8ta55KzoCPvpPw6mLw5koZRejXr2As1r7nJL1iuARheNF6jW1JJ9",
  "key8": "9jvMgGt73WxZUJ4Ych5EN2C7JRwgW7U9BJCcZ6aGF7cgYZP8igWo6Cn9LncmCXZDbpFQ64UXCUdkJV4Uuy5VAHX",
  "key9": "3fjqjmXABHiy9tjGh61Rx2zvWpFKB9MBByXdffe262JbAcmgyx9za1RwcjXBk4UZ78vG2MwVNBghH5uFJuDLo1kX",
  "key10": "4h47B2sCp8SiHWEyb93V8uuGWxoupgzgGXj6QBqaAqEZ559tKF84yRYd2MtzYvzfmVqHJhvPdNQGxrdEuU5FQCYz",
  "key11": "37NEjBYLd5sBSkJzkRQKiFLQrFFR8SC7Xa134okKtTWiTWvZXKtkLCd21v8sHYGZHuo24FRf9TqqFaTcYKGfJBUE",
  "key12": "4VrzJp1Gc2UwxUpEixkSZxhNKw4oek3cCyum5ojhJWkTwPSBV9ZiJENRi4fexQUertATCLHWPPw5k2PRvqsm6N17",
  "key13": "4h7bsJs6MwXSGehcV6rCxyDRA1LkdcK9FBq1hTBWbMC3XVvEr58RMitcUbHefwWY7P5844DGyq7csA1x131WDwoH",
  "key14": "exYL4drJuK3duPyDMBK7Mxc6LjZfsuvvpsLimivKPqX9A1qMmAHbJUE6cUkdE2dPb19Q96aFqaq9CSBxCB4ZaA1",
  "key15": "mxHMev8oY47ShdJppDZ6SWvooeSarYrmHFrmEjAZ8QZHqCMpci9DRVrLBueLSfAJATWHePrHkY7gqwHLet2ijXE",
  "key16": "37Dc7PHsqVMTTSBfqYmv5WHDYazqKUo4DEUNLdx58yWLCFDpBjgVtyEj12dr9GDxfAcMiw974AwVwi1kJezqromk",
  "key17": "2jVyfuRKw7x1HHVUYRJzDUfmWFUvwFyEW48mKU5jUAF5P7gN8oYNueh912xTjpEygCNZCtp7hKVSMETFietK2cjM",
  "key18": "5B4MvXXXWLF1c8393m6wfqoxRmdNBdj2KudbZAx1zrWTGxhzkxAwuHR9sNmTwQBJuQU6WdAUrn97YkqAXy8fG2si",
  "key19": "54mtxfYEnfcMZqt21BRKt9tSj7Lq2bYYEkgL6gzugvs6bmViWkXHXFmpChBz8DaQHFh18HRkz83sfPhV79Rkuij8",
  "key20": "2VyDoa5ihm9DDkw4bjWhWAEHfD2KZWJfF7AGFBbZHjZ9x3pqowBwkxB6H64DZucUqqJwiEpiZTFc3VDiPwSFud5y",
  "key21": "5vEQNkqjVZwLZNxpHZs13dEwuVz6V52DWLPN7xTi6LYEDRLH8LuXGJKoetDzVdNYTV9UwTcxYDQHvae87Pq5LPVQ",
  "key22": "3wsARZpphu2U1mB2PzudZzyNLXzMpTXBCTYdPT2BQfv6nzsZWHryrg271KVP5LRZZ9YEhbffdBpRv4i5rqew6usD",
  "key23": "CFajfoX3Lwqyf4Hi2CTChLcKXRszhhgbv2vBx9ctZbvdjGGdo3ZfkDoQhw1v48zU9gbf7pCLcQPw6t9YpEWQJ5u",
  "key24": "4ZPH94qmdT75mqxVccxSkdL77EqXo4QN96BH1dPGs99ygAdBhwnBmAMF7deNJSv3WPChYf3QDczXffC7RY1vGpXv",
  "key25": "52PNjCJWzjzp39gSPBdHvPhb9KFGhEgoGhfu6TXunGQk71z9jawqYq6DTmgubZ5jkFvFiyyyDjRybUdyqD8p6ik8",
  "key26": "58gvGPfvjo7hBxScfZPyv7AkNEAra93VAx2eAutuzNSfXMrdbs3nBVcsn9F2wzT7YUWXfXffMnvYPRJy1nXZz9ps",
  "key27": "SpzYkZeKLJQB4LkCsBp5KFp7aQXPBpNHGKhD6Rg8iShhd59qijAmYZVCUmydGyX8BLy1Fzs33KxKnESvNzWMNRc",
  "key28": "3JREYjh4yEVb945dacXGjqy5qsXxyHVV5C8zfxU9jP94LyZN1xT1Df1oDvpudUuGpznk4Mx9ymuH9iVeeYzYyfow",
  "key29": "5rpSLGJ9GJyu9a8gRNdudvJNnVupdhYZg48xVbXgxGaGcDwRJFe3gcCaPL1vdMojBRktAufVCkFx6ugFbdx47pr1",
  "key30": "5a1PaQMGFaVT2ZBQQAWddoWtq2RqMPaVtVu7ZerUjXHx1St5KjQBcVK5iUmAYGgswgzfA7EDWHgdpEfNWqNKtvAH",
  "key31": "3amfNq7JuTeBM9rYjRVEf2dBmjFdrLnZdvHp5AxbK92ybpHmag1LxRXTurXPQpxTP4WDbXsyGbib6yXuCi9GLQ5b",
  "key32": "22xQehCRJxok1CftvJ5GCtXbe3N1PRsMMnVHKcrxoMqe8VyYjcXtoNXuvhaDxMCpdoVwvxw69ja9UmcfHxouyidF",
  "key33": "2GU1KSdMKJPxFda2PL8bJFJ291SeNo8bWZNpAsbjNhVjiU4PBe3FudVhFJR32SryAZJjLLGGRUuiRRMeuN3ibRKy",
  "key34": "35wopGpScUVTE1nB6NLA2CrB8j13S2PeCjAZBGwAJm8imcxacrzE4iBuQfmHBfXmT8uYWtTJfEWo44K79oTo5kEt",
  "key35": "bwLHFB4tkCbnUfpEQgXBYFKSzGt2yrpe8NkxD5mhLaQhxLgEJQoB5VPWyCUefjC767GZCFutbRcZYDqCvkfrs14",
  "key36": "4SosmfbbBd74u3eoxJAVtQGw4rpu1eQBmXAkzwDkm79YUZTShYhGQjixBia3zbGUkLdhKqQLkNvbvmJEcWuvwXNo",
  "key37": "4xPZLZ1TRcrYUr5jj5RSAqzMUGisGNyZSUR4eawAQTBXHcmBQvcoPVmEi3iW4AVsbLS4UNFzKopLk4wDE7i1agCa",
  "key38": "5jkiz9Ghg2wHJyVVXbJ4W6LkUW4EJX822CoBDoUk6C66vvMg9o8RrLcuP27Mrow8PmqEb2R2H7tbS88Y611RDnuE",
  "key39": "2ueaeiVkKQsoMCz7pLpKLu119E2BwEN3CBEVKVLXZ5JQRXRSmwtd5bw5oNJRZfCAK98r1ouPdY2NwHFQRgJGUPHg",
  "key40": "3QfPmbKo5oXJXDFVGz8vC7ZK55c2qCvQf9M6mjHtXcpXL2vk1Ew2CuoqK4KUwHJ7AMbCqCGgkXBSixTpyqqK57sp",
  "key41": "4ZAYCLxMEzKxV2y1ZdEWkMzEqjBKqaRptaaNysy3Xsfv2eoXHQEfup23izGjuQ69pXqug8pdvysPirMxnoxmb59m",
  "key42": "5BypsiEvdvqWDC9uAYwUgJgGNsLxTbChFFdGFqd4exSSo7pjBJRx9QQyNFpneUHvbSjtTG8uz177Pwg9HFzMxyN4",
  "key43": "57dV5aR7FmZrDgtKddLVD1YHJaExmeXJuJaGGNQFZkxMB2Sn2rQK1VzWkADwWWWkcZUDT3zTPoKpqNWzWnTmrzM8",
  "key44": "3rdqHtiV9EAPxbEfVp6nNYBfTSTmHnKqLAfcZpDED6dZLrv8r9yZwiNwzkQKm1GYEr7wvYiCyzVpwnugKqyxSfMd",
  "key45": "2iNW4RepkoYZ7NNiFS6eJcFchSzFPjcTRW8xzH2xuCpRxpQMARbCJtNjb6WrQefJHAiBnEEikUYn5c4Dyb53Uw9B",
  "key46": "2WfzBX12NYGe1VXGppLksizHFZmUnKiamyqjrbf7ccjUmRr48f9nAFf4yFx3yWpXu7J6wtEyN1ZLNLYMzrJCzYPf",
  "key47": "vxKXzFn5fEVaSYz9sbcxSecTCf8KFCBExsyi6XvaKpd3C8fBmocoiGGXr96ASe7uZoCwzYbGeP4qBZhCz17uQ9j"
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
