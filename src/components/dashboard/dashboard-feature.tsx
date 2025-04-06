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
    "5BzPfrgTMkArvfCMQfq8gfN7EAFL9BvY3mdj37PWV6j9FXvcKYjY6yZbCcBQsNhfqxuMEjohZBVFhoU5tWtuJoni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dn1XQjJheTJAcFiCEBJcdeFvLHGzXqMn7aG32G8CYs2bXbRJ2AaLcvyE65LQid6TFYJ4pp8AT871met2kxSL55G",
  "key1": "oSe21ajiak1915qg3sqGM9ftbuRzatptsJvNweX3ahKaGSoYBQrmeC2MSVMHY3CMb6U6a3E3baruZB6V9w7bo85",
  "key2": "3yHawusV4yTFnacwLpcEyeoJzohaU4PEwx2P3xjWWJvPRDCytPVoxVcnwjufFTQntZwpJNkG2qmFSxTLUzLob49R",
  "key3": "nH57xfGZ1k2GNniUWXkkJvNh4pJra3msdATQHnCoCRjwgKrn1FJP1VvHiBkuA5CPMxqneTgqwbT75Xp9srJpjYL",
  "key4": "6589GCwzwCMwtMcR9AA6282Xs3wAigAzRiSA1yZZdja14pTLs6JKyUmwND8ZACAFA9sSrUdKSExGp8ZUg3CCAry8",
  "key5": "5V1uWDC85uZWkfJzhxoPhwXJzMbp1dbPTRGLLt2fK6rKDGWC6yFfyga3VfrSa4NBbb89PeN8SJBsdTapNJM1tyot",
  "key6": "57iscWDScM3xy4SVYwYZsUUppYnuqd5rGrFe8teNGbmcUAbbJECv2n8cE3ZcbDnGN6Ld3P9fnHmUr1sSzWP2Yd16",
  "key7": "cozp7DJ1oh8Xx1VpK36WoZTtSP6m3NfKC3n9QXCWp6Um5nfczeUWY8DLxxmKYzsxpzLLr7CyB7zzBFQ6Y88a2A3",
  "key8": "5avdEyxNi7Qy8mKqTiyZbQqegR5A82dopoLSYX9VFGadFdcQnKLNvrSExNGparBptnY4SKbmA7BzWXS8Hp9FYAu9",
  "key9": "uBBSVtQfVkFQijUPkGtKSvS34iuCjJzwSVQKTMa6S44cRxwVnkDErwoAEbH6CNGEqo86RZpsjzF5SE9NLuTVAbH",
  "key10": "22emJA6iEpEaeptxQ7ax2B7LWZtWHqR5x6DqGSjDf6UZRS4k3jTYy7GP2wtnNpzFU1QjhGHWRSQ2pG5VTkuqCH47",
  "key11": "4aXgYrXtYzfcVUBiFeB9Nz3ea6qT2jKjx8cko1JDTa3eHyrZALSkWBef9muFEStXUP5SUXX1V2L5KbiQzspQ6atF",
  "key12": "5RjP3WrxMwMY2wpsPoopqCRFFoZukUgPLL2fpfKbmMAPsjFsVgLCCuZn4XgRXzex2GUsx2UPUg9ykmPHpzWTBdjH",
  "key13": "1eejnRDcjVXcHPnUnTayKq1CAeDPw9T3Gpsdw2MreNyn17vLhic3qYtjwDhY5TSZR7CTTTA8ukXhgTgfPiC2ugE",
  "key14": "5CUgSJSVWPfVU4QRWZXk9TfWx9295952JLRMvWWUuaRqAkGsFPYBNW2bjQBkevhzzEZE6G3AfAMToD5e3St82wBe",
  "key15": "46QhHwHHZb6XH1aboLZzSooppQuTgm9cyGMja5oLAKGFcJ1b1zNu899WteSUoPALid8FiDiAU6oDCCmaafRP4Pkz",
  "key16": "2raPV2HwrKL2aAzyTnANWeY9judeoRghS6bn3aj9tBFQj4ox7HgvsGWoBNPK1aHwENVFmUfDNp1ArKxvWRZbgcfT",
  "key17": "ef2pN7EAw2U9SajcfVYsARJassjoTa326849Q3T7qYjj3abMFCDpdTzDD39h9LSi7A1bxeMstZ2BQUZhznDTm2h",
  "key18": "2E3vF8yEtPcFnwjGLy68YMc1qpF6Ep7L1roQu5kKHedgxUg2q1iTPnirteGe9j7DQiHM94w4U73REwNxjaeGyPJH",
  "key19": "koy9kj14ns8NC5GUXt1um7uGzFPcfCHArhwGw4HedkCQwgGPGrPNyM6vv3GFfmFNvS3nKU1wLZXN4u26326Wtzt",
  "key20": "58NnMSHiZneiBVqqqzpADrwXRXCGqAgTn7fGLwSX5kqXV92Y3J91K3vXjHmqPX2qrBFJJLBY64sq3Giq2WbX6X4L",
  "key21": "58D7gYw96DZ5eN8ye6JWKseqikaNvALdF4Yqwf5tvmCo5DYCsiSesRPdFxgqFqWbXn1inruTXMQ2uvnMM8MbTPdS",
  "key22": "56KWDZKKuThBndMEmd9HDT7oe9x2u4N7mLMGLJkP1dqEx2fSMCFkXeRXCLqYcUJViLzQVNb7Ddqx3ibK2zvz6R4z",
  "key23": "2YpUG5sS3xYZZ7B6roaHWecZ3pD4aDt1VRe9LrMeAFjeqWc97K4Qtyr8fH3KyMELd6tGrTfqiL5QDbzRH95DA8xD",
  "key24": "66xw9GmaXTChxdEnz4CY4PDpP5aFnA7mFfsos2SUz9XnuZfnVC9SgwFWa9cKLXKSD2Mrw7G1nNM5rQv4G4JAw7Wb",
  "key25": "2yLKUfqypT7g7nYTLY2GHcTZAJSuBbedAJG8c6KdRvMeeAu6h9kDyyQrDxHihxzi3h9AcVpUBM9MRXTRo6ku5zSU",
  "key26": "5AZRkWJQyqusepHpd7AhuKZo82y3BJ7Tk5oPL7TkDENJDpUN74o2SZMfsvgcyv3zubTvKoo4zVFNuHkDfYAn1UPr",
  "key27": "2DECa6ZeXPPhjMxZX6tQGMnuxWvRyYEkkgmYA8cGbftGwb73u9LfooKaDSDUFipUKLnHWaUx7iAR6Hmy5Gmo27DG",
  "key28": "QYwGnYa7hEUWK6ruG9SXEzDLdAMfvoVFmZjZ3TFxkLPbbPXMz4ta5Z49vVhd23Xd6cURrWiNydFM83ZaeKkcj6F",
  "key29": "2FbygiakxquE5XXDH1gw7P2uKiPfLPQs2bBXcTMRrUgk6dccsfUA1yEoXdzsHNx1N7rawNrnZaziBCbtvvHx3X9M",
  "key30": "39Z7aXqoK7i7YnyJtGLZfTwoV1bGj6TER2VyYKgSwZGs4V6gNeFCUWXCEgqfyU4Nukf91xuiQ6e6kv1VWfpA1sXo",
  "key31": "3cvH4ip86KDUfhk3YZtmKrPQ4Gnai3MT6tNHgjdPruSN4pJL37y4GWy43wK38NWyE134D9u6A91qNvJz9gVJmwBH",
  "key32": "5oKtFNC8LpPhBNyAfMw3LZRHN3H8PEvAs8HKJqKqjMx8Ex1e8iSEcHw95eqAZH14rwzBbLL7T8V89ZaWSGYfJouC",
  "key33": "nHZ4iDxWtWgJa5CHdnL5m9k6VNrh3CjWyv2SWyo6eByDQtJvusm15HhaxAmz9x7sgukGm9aLXUuL25UZ6HWbk6a",
  "key34": "2tPEYzhFne9J9xTKTxpnmzLvdLHkfB3bPCtK7mkhG4UUoj5MVoVgB9PrGxjqafLHTbNvkuToyv6sssyhK1ST6s55",
  "key35": "2aTLBrvjDDY5YSVeRFnirbChQmBqC9YCCcDZQ58ZKpgMsrzQJuyTZdt77xf3BJAYudJ2kJbsjYTfnd9ypxEhTBDa",
  "key36": "4CiLmemewk6ej2W984wgQqVRGnJGmbnSTEw86yXPRXw5AaYGd5xuxBCjeGJZ8oVqeDC52iNrocnbfZ79pRwrKNCC",
  "key37": "3PRWcdHQq9PRUvSU64KnVrcMsCg3PC5dg5vgNtaRgaMc4BHyrNDUhroivQ5Vag8ZJKnpyp3K5NDJ3YBxazd6Y2N1",
  "key38": "3E8DZ4xYpbairTXT8nao8trg2v6RyzWayF9ziiVCRf7ov323kraTGMZpSxuYdFrnYPAK14hdG9gtq3FiSLNfMvXs",
  "key39": "cFqyTFMKevbfgNBeeRvXJsZn6hRehDhWEy7ebveuEHNkMdvvGAWgkccSE7UG43g4KVwwRyPwbbCzaLRg7RXoaMw",
  "key40": "2xAh7b951XrUEnZJxcMN2kyxsJ3Jk2JwGJpkWBsdCc3m8HaYgh8ETAkB4cB5wQuQxSw2PbqtKLyzZnPsk44xTAYi",
  "key41": "mcGJ9Twp9bYEEBTHLnm8pnptvq2ezsZkcxRBuM46NsG7h9sWrk5kBa4L1vWhDrtfMzkUZoDVFgRTnXzvs8B9JWT",
  "key42": "3zBp2qJr94tipizgdFLQXvJgptUps54ze83wKWB647zZUPHWWhunTVufF5kmNNeaCtW5TZBLDwKb9JpardTCJUZZ",
  "key43": "u4tFH8TbcyWKpJ54N8Xh5FGShvgBhfcTVHcBzcmd1vcLyRy1cNVkfPdnYLJ2LdVh5W8YwHFe4c36U8s61vikG4m",
  "key44": "4GAZC2Q71VyqdwvnZyXi6rTJuudSASku1oP1eqFfL1DsxEdBA7uGqbP656bKgXFEy6qDW52zhKk7YDj8Lc96KU9i",
  "key45": "4wjgVGHP9Y4Fs4mr9HnG3eqfY8av68mGJKcA8Dr9xNozhw1SRRj8zABZ8S7DaVtefMciYLjqTCg9peqZXULANPL6",
  "key46": "5dxLM9gTamwZ6BMkstvwZSu1mGH8P9LnvkKGyDQwMgXfpne3WWuoeJv8LPX2BRfx3MfJvxdAxvYk9k884LncwsXe"
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
