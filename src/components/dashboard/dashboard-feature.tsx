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
    "2wtvXkQ3zc2MFWWfyTfrs1h8S7NVmZcWVShKhFz9ShLQynz7vDQrnwfTn8D9J861R9s7rSPfpfijLPx6tYEmWi48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ovMuF9HYiHYcFZGhPZUGQserrTy2oBjqTTsKJ4mSrZbTkJzVW5KBXf4E94dtRzi5xQgW2qG7JAN1SBv5yRrWFX",
  "key1": "5Ya3F5FEqtjL6MiL44tT1JzBnVM6gFGh11V2TjdBcyhvD5qsTGWUNurvrrrTLhvXNduaRp5EwEx4cqbceNFWba5M",
  "key2": "aKDhcikuiK5vFsCwhLBjVGqaprscyFw5Qy45dQ5dmHjZRnGTx1uWwqtADWVkoCZywRWzKYWVxV5eDNtaSc1VWga",
  "key3": "3xinuJrYoFzxzzf74mZEbYwWg24rKWXGV5UivaiUkqhRQHjPdiA8n424CXRNZvCsUcGN4pSFNZEkqZTxYMpzsxGu",
  "key4": "3G5VtveU3UJQfNY5yfU4jQwUpNu1ed7upa2cCC19vhe5TS9cPT1teabCK3vgEFT9Z9jPZ9JEWpE9oqfyqiCWXSmH",
  "key5": "4FBpDcoLu66F1ajycM8J1bwvt8tbAjgms23uXk3U5GGM1JCCyLikNUZcLswbBLc8cKHtCZhH94q8neHYoJv3WCpm",
  "key6": "4P8RkjLBwfzgofBduwE8KQ8UTSdnF9bBzuZSXQ3AtWsecsVoRr3cwHdKaVUwcBpnMMAfcvvLUyGy2cfiYAKxiwgp",
  "key7": "4qGWQBJQ81V9xLfLox6SZQ9GAMgrhihXTduAmCXQMWUrXULgRmMB5vcVJDDpyq1YekHWqHEkhDnZ2vK5kA7fstnc",
  "key8": "3mmogG2wt8vqFsP6FsTpLiX5mse7E6oz9Y9DG7oTh4kkcHA2icQxv7A3QYw1A4Brr4s9RVrhLP8jJwjdAS3nNdoD",
  "key9": "hNEdduix5eyCFSqQT4sAxDefCtrfDwwP5A8E2Y4D319oWvShBZFYDrraZNC9ubfcrKeGvbNFW4cQoUodJ4NSDnz",
  "key10": "5deeByorYoNc76SVxwGfnQk6VNdZueRbzcdMYe1dvLAUaUcihnNXrXucjBqV4NJszo1zkRrGG8in45vNWz789JL8",
  "key11": "48pPxZ9a8QjM6YVXZ96GrY5rgkUdAVQc5eytoDAcaqhnBax7JUEBZ4DkUdqs5zzMzoLBBxVvyTTkDn6ELYbGhG9L",
  "key12": "YGsAm38su74Xj4zA6sfjGTCGoRfVLr2c4J31QSXo4BJNPYhU9AVYPhTLZyRqn53bp8M8w3mTeEGjyeFsT4Mmrsn",
  "key13": "56CFYMG9gBzVnEZasnS7J658V2DwNabAVGUjqw9SM14eVZn8wMjRcC9oBeCDvNyoweSs5GYJ6KMSUTERSbqhnp7S",
  "key14": "LuTjnGD2NJnDeUdL3oMnY4jVErNparpyNQKejjTKp7ns4BdntzcStmjtbNKLzJoQvTXXiQotXHWG7U68iQ6WxRF",
  "key15": "PezxBTdcEtNkbFGovykMjUmRnDG79eB92Smq3KnqriYoG7HLiEg4QJRZgPu5DgMiQMLQQ7fmHGoACJTdhgm7aPv",
  "key16": "56jzKx5qAXre4rTibxL8NKc7GuNHTTV2aqDk1z4J3oar489t3EEqnDT3c7V5C2juGmQCi5aSdE6YWvWJupoLjaR3",
  "key17": "AoeTYCytoYny6NnH2dUNxzaWq1KVGZ9cjoQPpac9x8FzZCUL1ZtXA6nKDZy4qs8L32vJ45Q9DjhtUB34pEKCm39",
  "key18": "2dy7mUtsyjPgX7rCgt1ZbhtLS16GeebKjqe5NwT2VmuMcY8AGNnkuV3wDGJTTTXU2sYze2yvx9daUTtpRssoXgXU",
  "key19": "2quZAS9VgwKe83kzghU5AcHpp439C1bjKLtDPUeABTJR9BVBkiZVKnG2pMTVGvYZ7CZ7dWzWXAdv7HPcM8pBmuyL",
  "key20": "SgdQNVAwjJDbXbH4gDLk9oMiPcqx1cH28qrGpGBznVEaKxpaLWGFX3vBTCsab3TgQcaAJeWgZm39vW1m4RTXDGV",
  "key21": "3C7fgK7rhemfXyz724adQhLU69D9RL9k7tvgptb9pMdHJPPYSYGB5Rk9xSi5NtgTpF26HnHbepfZ4TxeezBzjBC1",
  "key22": "3XZkFa5Rgzv97YvvHXVPZpYBadbnHzhgycuTPthGTj68c1XikoEeGSEfwwvFbHtnN6hu925WhaZ7Trkayuzr779w",
  "key23": "4dwVWftNCZmiHofAU2x3YipgaFFEhRxViYWBdeX8SfJnWXYF6rSbiyJJH8eYRYcDxv3DSDH6RzhdUzYAaAY5kk3g",
  "key24": "6kFWB5n5mryPAWVH6Pop24GjcVP1JTgDKKRsQyZV2g5dzZvGSFijBENW8QXiLENB7FWBD5Toc2pFzuxCW9jGYyk",
  "key25": "3kabiBzBpzV7zbFPNFKATkcFZDjTB8QRFGdyswU3JVKwNNQYmCSknbPaZfB8SedXxEoar7HhD5XBdCvqd4ByaTxc",
  "key26": "4GQrHqgXsFX7jEd9vhpLgWjDqerEhohyyDC764ZnHZRNtERLpj2M1eFvy5wTNcSdo9XVbH1BSxiuiiAMECNYABy",
  "key27": "3fqLP15zy8EakJshHSK8omMwoKiox8GKsqYM6rRpRm65YvkBmdxmtoxdkcBAHDG2Zfg5NnrpVStiNHv53epeXt3G",
  "key28": "TQw9rkhj9BAMTxSfy5Vovb1FTxxo2FH1YwT7NaDJ59gzvKQPvPA4jN4MDp5d5k3ivvqu2efrxST2oRyu3JZzecE",
  "key29": "2R8LUU3hLszNnZEQT2jnJBAhj3CjAfCnyzBTU856yYvtXPPKRJ7RhnWLKZWpG6Vjga5ZzTrnqWkoEJVSTaHEFmRZ",
  "key30": "iSXJSu4UEqT4qyLTdmfyazKvv69DzMUTYoe47wwjr65BA23hJCw2HGRKyJUSdCqovxY3NMeZQNnPSijTADQiTwv",
  "key31": "3cgzroc6z9Qcpk3eBCiuRyMjwcnHiTNqDMJd5Lbq9b2E1HXyhkVCkV7oen9UQLYb5tDuBHwEBkFQu5zvXSnLHn6k",
  "key32": "42XTNvQNDuaWvymHfuf16YJ3Bh7uZi8maFyQCQmLjqq5qnbdfTnrZPENp2JWUegi2aQ6GHgMv9wvGrpVbjPAVvT4",
  "key33": "nJpJBQGT8KDrrJwz4hXQzkVV9oZgrqGgqoxuCyFUFgTdvnLuPCczSKoy71VjEVDjGKWpN51QyNRqkLuELg8E5tk",
  "key34": "e41Z48WWr7wK921nxRwyp7G4MTLsvcjXqi5hSqPcckG95pQkuueB8n8xku6cKfLTftgLZEBozKS4uKcVvwNJAir",
  "key35": "2xZjgxkHTkh4pAQVu84iTmKjnD84o4vrG2SwgrAWWkxNQfXkJa8AS3jpYNW15rXQaWsiq5Fu8nEFHNnVHo5skXRy",
  "key36": "3ZR6y4Qx3iyNGhtckXhXmd3wrE8URXYHJc4YJYu5RvYGJ1bAqNkhb2BF5ZfdTq5t9G8vtFonm9uDXmjziNGMv9Wt",
  "key37": "jz3GnM916FZdhKS7fBtQ8p9YChDhKmAe82AXVRwywvqDZZQbr4wMjEB5VBEz1t1Xw9YKtax9EUChRhH6EpsaqTC",
  "key38": "2kJWMQwtUcaWh46dBLn8rQgG2thbh4jrk4fqYt9jjQXtQTsiiAkt7kPjKsYCKA8hjjBiPQynAdpLkc64Kzii5E5U",
  "key39": "21T8nGgGwxVeAahvZaRWu3ZjsnSwEF5Wsit7rdKDyGJg6JdevYnidt3GYmgYaMx8bAZhZiPELHndbu3fjUc8aXvX",
  "key40": "3P6j8LXNESx74XXcATygiYbsVqEFCetMpuMFq7msZubC15T9tpUCJBP2vLzhwZo1eWxrzHtJBU374YaHdfg7J258"
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
