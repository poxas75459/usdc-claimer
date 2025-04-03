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
    "5YApJtAYW4q6JeDt9Ech5DFbmFxwQEaxJphW8qRYjeze3DP6LpCshNiWobLmgHChJkVEFNLcL1HfQVuABEP8KYfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjUcJz6Si8gxEZZE1DBT1VsHwn8AfsCAG1xwVvAVr2FQAwVQAP7AUhCg24wYBP5due5Us7oYCwP7ThqhmFVd2ZP",
  "key1": "PcPQJjaga3XNXddkxxrj3iWSPbZyB9nkGq71CJ4RhCRFVCpac4mR8r8BpqSnoSoKXFMibzzAtuW989i8VQDRKME",
  "key2": "5y39gY21wFNPYiRmk8xg1Yo5zx6e76zsTf7yQjxKfEysuDgWAabQ1Tc4MrFoufrr8iTPt3vDyhEFHnv6svYiFmdn",
  "key3": "4bcPPvtms4UoP4aj8AnEfpHDGEqyCSjcGeAnGD17aEvDdmJ5s6d7Yw8bVnjPhgiFqAxadSQwJV3c3EbgyKfxzBcz",
  "key4": "3oeCwzAgJLS41TJ8MLXpdmniJYUk1Dj6Bh5WQq4npXRNnbTaQ4YWcUgfxQBSgJLAk6mj2LBxiQ38QKkjyWmFY9Av",
  "key5": "3jV9B1eHzfn7A78ZeHJFC8LTpaoYczibNmQi1SXEXTXtCzxWnWLa6kEdknUpFb4W7DQHTimVawVvnh8etcmVCxHL",
  "key6": "3mWPG3hKCfYwFzgiuZheC5gBss6YD8dRwEDKxuaa4nQs9T7Yp1ThTnjfzUWDNCrMZ7Xsf1Vamhd1nW8KaLCenswu",
  "key7": "4xemnLCJRACxrqJiXwFkbTsyirUvPxNzmLopbT43Janjd2heMtMivca3SNRESEuu433waKN68nrQswwgsKEFwTt7",
  "key8": "5KWhhpcv1Yy4jm44oq2VS9qMdPP6gChcW3XuhUo2tKL2MrGVDbJYtFUz5ctejwFZovuegWQZHsj73PysVq8hrkjh",
  "key9": "4sKdwYjo9ZjR9BKPHXrqyYZTTie84E7QHbtxRHk8bvkxtremKazSSbr9MWxxCdqkM9a6Wn6ZPs5RYYPtKXB5qLwU",
  "key10": "4X3zddU4nMteMtR2PuYgEDZ27xwXn5hsRmkfptepccufLf36bNqbCCLW6fDnqCcwo1p6pnPBryYr5MjqjG1aQPE6",
  "key11": "5FUxXDPNmBd11eQMTqnBD9Fsvc9t2fH2rjJgAbQEP5HwxCEnDwDLgKKeSDw5XM3cL8RwwnoyPvGfgBb5RhKxB5of",
  "key12": "3cb9HEw1MBhdJyf1Rg1TDWHSedc4BV4MWjfXBLprrgbb3E6bqnY85Yd2KaGgKNEXJQ3wBhStEXQ1rjXzQ9VBKZwn",
  "key13": "4jyujRfvGEmxyv5FuuSV1r8iGRZ5Zdp55oWWyjGVuodsBbPc95fSZz13qQeQZs2WEUoUY5bL68beYnCFELXajdG8",
  "key14": "5VBzbRorJk3fVfb6rQ4cjs5XTmuM9KqsTHgFSC6pcvWhNXXGKNtj7brRGGczjsyaUsWifgLarK8Y79vSespkMbU8",
  "key15": "4rreB39G7foERJEn5virdPuW1Y4nCoKHTPfQg3vhcG6qTLCxEBsmkfTbdaCXjsSahwtpf392paac12anREopmQon",
  "key16": "2oqUjwVnEYJNnhMZ9oKq8eKZstgArc3EUkKwjLSysidjvWuoUdRpSg8focFzLhErFbyjHFanq36FxjmHNeczQmKH",
  "key17": "2B6RBt6Aw5K1aUW73Vr77jcQQX81wQPrB4GxdE1KW4x7hpMWJPDDjeB2nL6CExZWobY6oK1ChJFc9CVnSDsc3xeS",
  "key18": "2i3T8ixZbiUt278umZpUNJaUq1z9LPic3DaQBm23s8Sr4WJWQW9RQBjz5M6QzQvaZmpPcXcvpVp3k2HHgL1sagu5",
  "key19": "zTXRBhB8XTbxpwgzu7hCv3kmb6dXazjoj6PxjXhQx7KMd5CztqkotR8zjW4EJMXAirNmFXZFqS141ahQzeH8KUc",
  "key20": "2DYs2dJtByfTaLAmWrv3Sv98pTM8dDSkZQQ3MWcMFG5P3FgqyQi39Mms5WNegjvxhuYmRDReJ84C5Cm8Fi2UppQD",
  "key21": "3mRdmyfFkdmCSw3ntVdKed36gBD7ncKQkDJpVd6WmbU8jUUrEetAEEtzLrcP82zKv2MHjh5sSVL6gaR4gcXnjCcF",
  "key22": "4u35UC9bYBo3pjBkm1e8rcxXVkHFgp3ZNaSAwhfyDpC1TP6WaAPnHD4bqn9nC9NYsx7GwaT8cSh7iLLZtcjY64Qs",
  "key23": "BYfXEVJyKynraqzLf1XoWST2Nut9D4kPcB2Xyrv4eKMwHr7o2QiVDRrPVwRbvxjCpL2z9HUYJWjkDx8w8c2XK7T",
  "key24": "4L9tNpa7CfK4gZ2ZYPZCWC8mxLFuUPfXCp93cJGUKM6CXhagpwn89RAUkXWmqqpuU33R1xyKoCfGhCqwgSGUdXz4",
  "key25": "22rBXxXnKHeDkRyhn7QKNFSZAB7S2qHVpctV4vG8ynjThVJjV4vfXsLjevVRAFZbZG6UpVx88v2rpcDEVshxSJb7",
  "key26": "2yc8HJLHC1kEew47wVCx9r3auanNjUhyBJTXvHEZFaXsABDXWvSKYohU3JTHYrXEeZje5TgAxGJVMjW3UBL7BxHi",
  "key27": "2myXmePY5bczAMWcrMu4kmjZ46cFMaw5GAUyuP3Y4JpewkovWVewVGZxwDw86iwYFTmEixLkK9oWwjqy45jNnwx",
  "key28": "22bJ7MavVpdxHH5nr6GMu9bXuz4ZbH7ZB2rXDwbKxHohinQds9ZZCMQMEvfWNWACL7PK5zZ9FFB9F9AoMYcTHwGN",
  "key29": "29YhcTE8uiXFViLUcfVvCKAhpyh7ozyDRhLevhdrNPUt199ojvqmAt8aHJWYuHLYi4BsbXcmbD6Wy5vQsMcCFcGS",
  "key30": "2HsR42QUM7GqAUdcwgDLaLBNn2i7XdiCm63kCnVuyWWo5LaYkgSrV8hutQBFBkcTGbghhAsAHEvfPYoAqFMoCGpg",
  "key31": "4BgeVcfKnjvoZvBsyNwA8DbUSZCKAjLNLZHkyC8kXdk2uNSvDZAhTs2e5x898n1L83MsRi81zUXzYBiEMNeSnqbx",
  "key32": "jV1LmTheV9rAq5egFbwNUQ12KrgJJs7Fux8kQUsRmeiYrTm6riRTLEJq7KxMEfALhRvaNU2Lk3KBHukaXvwaUk9",
  "key33": "2SHvipWxkyBX9B3KfNhZ72ToPVShheURqrJvco5G4LVr3MvT8oCXG4q9CFYjMtBtV4zsMHMn36n6rdYTcjQYJUmW",
  "key34": "97G8hkPZEwwWrvoFQhdWCGYzL7BDxTKnDJ23d24mS6mox6WYQzksWa3zKKXn3BQtRdXp79NuWGUyQSFaoXXTHRQ",
  "key35": "5RPo98jMMwYXKcFMqQitSpV2exdPPSwZhx5xMc3X5uB3QC1taefc5taKfK7P2UE19MUZZbFTo8LFrKohYFqaR7bc",
  "key36": "yVpy5DeyeDujcV68BnLn5UiPYGNJxjjufcXFTorUBq82SxXeJbz3SRqqpM7AAAMPa2nDTEnQ9MdSfmSxtVhbB4U",
  "key37": "36jqd9WK4mxxq4wZK82c2gWJqGbn46yzdJ1W65sGLo6YaC5gX7NYoxCSNwMQVpJxZrDwRjKXSzXoEELKQeZVN1Bw",
  "key38": "24jvpEPkmv4gopDiTaaZnH6AbfvWJJupMrWJvTnZFJRd1LZ6LgnXvGUgwuvwAedptWU8bdLnShT6dZcRqSzPpK6K",
  "key39": "61PdMCDVg49U8YvfZ2sgTUXAUoBZ82CMgtEPhB6Tn5f5HW7vt3At72jwfBdqtgkgwfUFHeoHVafMAvLzMnvdjphe",
  "key40": "5Ks6isFfm27DEfSdrWhgywqygYgCebzDpq2ZNMa2z16TntrFJcExCFwx5JN9AzsJD97Y6HfoRQvDh3nTWJXCUf5G",
  "key41": "4wTy9aGM5vWRbbvo9BmqE5yPi9p8weVz8gpD1QZwoFsMmZa9tG35YY6czUYK37zY9c7B5LR5Yv4WPexGpB5sJvCz",
  "key42": "3SxF5eivL57xcJpRh8rhhdt8baR7M8qxoe7FYoziG5VvRuHYeR93k7nsLWkijwYBRE12jimmYpDF6ExkuyoYS2id",
  "key43": "38QVMCLLkjS9zn9y917tWCUBXkDcJveM4tsFX8sSYpxJzZm8dcauohSr6PnL5rycrdygsmpHZyFbFNNavCq8DNXQ",
  "key44": "5eqp1sEVviNou5bvQuAfhxuTqmEGa6gdKGHunX3f3AEjwSavtrUf2zFy8rC7iPHUmAVM6TG3ajLwiTJLXwBJaZAG",
  "key45": "271byeP4aGXFs88a3KHNnH4ui8wzGUDDfMB9hh3Tv52aHbF3KvFSZQZTRRTbYCVgo4r9grkPhLXbismj8r1mXDyZ",
  "key46": "4AVoTQe6LtoAyUKCqwWZXM8dukRavtiZXV9ygL3qrqfR8vpUXJ2Lp45hCZDt8JwffZ2pdY259iQBcQPjESw2Zg6C",
  "key47": "3aSxaBNR7MtA64G4G1KHMhpCNBFLDjqYw4czJJeh98DHKmQ5hdQ3d6ErNvAYdo2EctFsvRRWtinLCUqnh7SqkKYb",
  "key48": "5U4ZtyyZWn4YRrjD68LcCWQ9dGvrD2cyCm2Vx9wgg5NThGemcTF4nfiUMq852M2A6gyWjFENkk2dc1A6dBszC5aj"
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
