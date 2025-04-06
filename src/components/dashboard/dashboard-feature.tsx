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
    "25sAfR3LcEPdtcTYu2b3jdPygZzTcYseC3Xt9XNbpoDqXZp67vicjjEwqH5BBMBZhoU8HUFztrE7L2jX2tnKQG1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXCkHES3gpxdo45RZuwJzF9b9Kzy1LPL8enXATeG3kuqbRRNnFTh8srFtX6TEAhPFgmSPB3MNVjcLMGUH4L5dZ2",
  "key1": "5Xgo4mhJmL9F4pSUyptj1vZGAmKCuTygRQHzqq4z2N6YucNwePRCRdnQgTM7LRgNLE4jozMAPMM2nqcp9woNSzHR",
  "key2": "4ofXX5UPb5PYgv7oTLmhhaQdwhdjY4uoS49oRKvJ99ATwP8HrKzhc4Azwgfnhhs19H9a2JYo2mvbeWPxPcAXuGGm",
  "key3": "33h5aokgyn2GwkvUGTfPfqbm9TZvQWWxF7oHwvyyBcSrjLyS8V72vMkc1ThmpKWddFvJb98KH1oDXNTnSNHBD1fa",
  "key4": "5yQRSAEQ1sKyZtVzhWwjw2sAHhx9rv5iWD1NZmRnNWV54bjgwhtp7ENPxCnmp4DPGHZAKTzsV3wEo8irvW2MFkB3",
  "key5": "3sKUXKrUaA6g6RFDNh6GMFuFhWBjophJ1jE8c6sWxikUbYhmNWAYh7ZYBLAdAp7J1Rx91tX6qY6eqywTdhaeXXFB",
  "key6": "xbv8yERBGKwuPbDYc2gwbb6RpPKzQNsmNszJZ4aC8PfGAM9S4FaNkPDD1neaRoDjJLxQDf6QH3f6KASe65BtuSc",
  "key7": "5eypokzwRadJToerep4rtz7haKfFHc4wM4pG55PgHVX8KWjVV9XQv8CfgWXFdKXxDicWQpfs6eMMGuuMZV6jWd4v",
  "key8": "4SxBanVuebqStEckKcASNpZEFgyXfCAQwVuMV4zqwVbTD9YKdsRjWKbcK6wSXpV9uWMQJGoS8tDjKLXLJby4Kbru",
  "key9": "52Q8gqRXgzqCPNMkgmc5dtoLZkZQsLYVqTYYnUJ6WJP7ULcFkVrQvEj1aSgEqkhVQGJVDtN7QpycyT97fMeaXPmr",
  "key10": "3TFSJAXRL17sMSLkseZnJhYXE38JrcJ1y3kNz27LsdkBz2XxTTGZ5X5BpWfviuPo2UAkW2yfXyZm3jzs5cmiHQxs",
  "key11": "AjVb4TqBp5uLzgB3CfpBWZAegfVH3ht6iCAQGs67UguhJsjAXwqdCyjmtxmJdUzGnsatrrt7k1VCr8M8b5uZdSt",
  "key12": "i8Mn77RF7ZFGGW8Va2nxB6kdXdt5vKmZU91nLCMSvzw5X5u5CHeeFPaaCert1bETY7N5JfTwTxX1FLuh5ScyWKB",
  "key13": "JTauZsLgVzwGpgjzRdstJj2vHViaNMw9216UawBmB9XG1FvSiidHxZxvBvy9iGkShsQpfm4KeZGzJz6iz3GuNKv",
  "key14": "3MvnmWFDjVc8FpermWjEtLWuJFrBK6gmUknGQgvaszVVpmPgmS5exCQY4CQVjRwpeNvwhM5ESHXYdgTG4d7yBASH",
  "key15": "17pAJ4c2EsYR8cxmUUJdodqdETupwm8GsbMXk4ushF2scPbF1Y1mr4QquL3Dm33HpXFFWYvRp7ZpBvrQmcNkZde",
  "key16": "2TLtr4UMu8wVw71QfshVGDiyEbCqtHfasP87kKyY7pYgwsuNdovmxWb7WjTeXjURAYKN6dUtRp2kLYcAwYjYYoHg",
  "key17": "4suZyVzG5VuiJCypJvjMrmvXbMn4eWJEEmXt7ecuhhJcCGmbXVJwZ5BAZnytxd1XDum4Aaj8yZ4rbXKStHLR53sz",
  "key18": "2PdRfBrhwasmaCABReAHixKMyZpGLj9U3NPvoxg4v9dUszz8mSPLCQuLpQpyhwGEHsZUx4K6CAuEG8KyD54aLn57",
  "key19": "4xYSSBqKizd75br7jjLn3EbACYfhhnkdsPWAEfocbFt3ex8VFWRrkLhAvQQFSKd6Z3xJTHjnH73pRi24E78UaJWW",
  "key20": "4Dou9wq3om3uEuDH7XYx2JJC5bHQjx7iDXvnwGjgGuguGUKLLJbtVjH7U6rmFoNaGaVEtuPDmddk8v624YMmFwtf",
  "key21": "4utGiPzkZAtQn1xj4kpnxqLGnrBD5ATNXd3tMC4uPtqP6RdPkxURMMtUUwxVXSrHUmaA5VTNu5KEAULVNAZa6BfB",
  "key22": "4oM5e1v5vnEe62hbgiQn4GRpN8LNiPi9rNPned6yWTU7GNkstUWycZua6t3DLTXeJXPtM3n5kHJSBFiq5aJo73u3",
  "key23": "37ZJYgFz189ynH9L6iu92NXW2m9TCknD6DTnqqQQdd5M1LifeL2kSevxkhJyr9fwKtNzMfNTJoqBhVrRHyLhHo1E",
  "key24": "5mvnr53ND7NFMHbHEPRCfBgLSrnHKNvHLVaKzF6VTkFUk9YtsfUoRHYXUYoTSbL9vbrNa7paFQSr9M4KhJV7nepr",
  "key25": "67NL3VJi8knYuK1MHCFM4fP3AMFriLp2dxSptJvcmDaiZmmWdAuBrhQHp2rxyepBaZj2uamoZUjGdpPhcAbMH3qe",
  "key26": "3MnzJKyUTe1ayvGtma2Qd6bNHFFddGyQzdf3cYXUtUgvrT3SDFfctNLyMzB1HcPisAwsZcbD4YrYoNgjSAKA9yNu",
  "key27": "4E5CqVrL87VUST6zJw2jYgJfHzBV59Za7AXieHkfudyCVcTHExhHVBxAJHiRUdvPbcTPbbGLQLTdrxhojHA2jvdG",
  "key28": "4KP4VzwJCS3jpLh6oUKneWHL53sRPAre2RzxxDvSQvUx1AafK8EFA5vZaq8GXhDJQxjEuZv8C9gFNghmkVzWT2HG",
  "key29": "3c3JydtbjNccsgd6BPqMhE8PyERTbtJVeWWUXALKmkKXkNEgiySjnN4WL68LPxJUHvzuxgxabZ6W2EZPdczgevuQ",
  "key30": "55Vp1QvSxbQNUKwoQBBrnQFU6VtxYqkFiNaGfdem8LoDF47eqp1WHkeLUSi7NZVd44pK8Mmc1CMeq6Jk61jMqtmU",
  "key31": "3czJCunBb7Mo4TMVSxmraKFeyTgubyaNV1cBRzFk35jD8UZUofGR2vKjbDYnNrZk5r781tS5VZcYWPM92cbdS7jq",
  "key32": "Wyf45ANUGZ6v1gmZ5UzNAiiXpKiA2W4wvdqo711vHPqfnLdiW6PRfu27jS2aUwGNu5RLFMPJYy9RsqcanbpKA9y",
  "key33": "ixDcNjxQnuUfUwWNPi1SYwxiDjNVLgCPYCq2WadXtEJsFmyvbFabyuz4KdJ9xiRccVrZyx5G3PKW8UxKPFBK9T3",
  "key34": "4TU5zjs2tvLsMcdWosgDoDRC4mu5j9cZVKw1vEj8DN31Gnky1AcdyCmZm6DQC8qpvXHTEPRRJp1buZMmBRc3QoTC",
  "key35": "2A6stiuLArsbQFTasqWSFnAWSdVNGUqaamfR2yGpMrB9NYFFawu1qzx3skj7tf26px9EHctdkbaVhfdEY6qTHbce",
  "key36": "2LKK57TNwHVFgKD11dSYrhhnBonRLWopvPqGgoTgePGpEL7uXt6hd1PqUyTrvo6YX8odZTUBy93Cr8hHrvfb5sga",
  "key37": "mTEoUxtAbZSqunjEAtqgqnXKLcMjDBP5m8tPWJwxqeYrUUcjMaML8oW4tYEWiiGKoHA2Ww9Nay1ztncWU8atxNj",
  "key38": "3Z6Ucevc1mds2vdoJdcRfiKUo8Pan3cCcHngMTSQyEKuUJaqAKYZSrCNGsKSLtpLDan21GQSiU8txLBN4LBXnm16",
  "key39": "3xZViEwa7AfeozFqHNwyZWw9wnb9cDxVTsDp5gboDSxK7UXt5fpDtUG5JYU5uaw3ZRynmv5CnGSWb6N7J7ygRodZ",
  "key40": "5QwbcXaqUQMrSV7spg5ToHZwCcSwpqWrUJy9kEqkEk3tjq62NPRR2s1QWREms6mdj4EHdaXiHWbeftyyQv2dLDLU",
  "key41": "2jSQ8iTzZCJKd8mhURK2nXYz5ta3LuVuJgsEEqkYsEB5LaqBaBKdKdCvo6YMAQ2ZuEgGyqYAHi8pwiTCJHBukx6S"
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
