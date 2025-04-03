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
    "3PeLZ3khTdKAJTfCYQhNmf9EF4UWbuXF4XXzee46AJv13aZsrXtmnEimph29rCvvJizvCe2sCeZ8xhJ9CXt4TfDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGZpKB8U1z2jHmwzpgFACceHnYLdXb25dYiw9KdLNKqwdjqXua59rPRUbJbvzFV2cFMNnXvyQynCdtm4oGM6CTs",
  "key1": "3m3yiSjZsR5vYFJMik7uBs7ZwrsSYnM1oDdW6AQVNDKUXh47xGY2jcRE7C3oV3Vx5wamiyK63WgkEMuLt4cimP9x",
  "key2": "xnkHTzUUSyii3NyBKhkmWaC9X8XHR3tz9Au5VKLpxwcM2JyRDumFvPELq4rQUrcAt2eP7d4afr3zJL61Uy5B4ru",
  "key3": "2GefD68rUVjQbikEwAnDMSTDSvDgn3Pnxv1PruyocPCQkQ5FDWe2Q6Wt7F9R6oKGTNEZDpSeQqqYf2yzhTi162qX",
  "key4": "3snNi39yzDncPTdSwMtVRpoTDa6Ux8QCSP8fmv7VC48iNVrUUZVKGbGo68dHK1542Tt2CqC1Y8UFxo3huMh8j7zH",
  "key5": "iGKcAipYaSWMxK4DD3ERBNVJ9Tp52dH7amAaWoKYp423auNP7yncEzdQX99yDiB5XFob9J5yFgVdgZx3bofznVP",
  "key6": "31mgxAW8ieFmWybVnW2wW7sgBCrsDnm5EWPnDteykVN7qKKv82SCJCbkzARhigDLAfes59Bt1NHb4a7jv1QSqv6g",
  "key7": "DgDZyKeK7c9nZaPjN57MK58dVEANTrFiBpARz8kGK8PACmQiqKPKRuusMwVue3TExAPb6Fyn4ZDU3YG8PtfF8M7",
  "key8": "eeigQanAQ6BUzWpPRH6LrPGGxFFmKttA76ztMtyywuvVSrfq2Xpcn1Xgg7d4k1bp3Kt3oPgLRAJjLzP9trr89K7",
  "key9": "2TmGnLNzQ65qt7XaPanrJL1JYXfy75x34G93zVYaQULT3o1SoccxohDW3ic7STTypctShrkK4s79QNi8ESuBjHht",
  "key10": "32rBg97VpFFCtkRn3nWpBi7qjBfF4NRBULuQv37Wtxhc1kwFWtDMB841zjvYEiv6yzmJWbr1bj385FAWNR3K5ERD",
  "key11": "nb6TY1f5MNXxb2CseWcPsGHjrrfqu9bkxmCwTSfMeq3QioyvX1ZTPRAtLLkQDZDdqAqQ846vnvdLQP1nc8h7sXC",
  "key12": "3x82XsFeBAjdjsfNqTzHFJdpgPRfD1Q2zwh6skmR1KpF5i3WqEovQX4uktwM3ZVAJhppin8LH4ZiDSWjP5qoofqd",
  "key13": "47MnmEBSKarcbi3R9kK388Ws4tm1P1cEkDfS6ECjfnBwPatEqCfcvKrtQ1kKNczaaazcfiBVex3kzqqWGcpe5ECK",
  "key14": "3afQjdVYB4MCdNDNithRw2XPZgoJx1HNogcbCHSvbGsY1SY9UJAXDsu1vq1RxYxcu5g3KqhMRZV4tSa5yD82k6JM",
  "key15": "2kKmBaweS19JVBH4iKFfU7n4wjzvJn4zrXik9DVMR6dPm2h3B3sjjGvQ4LMbE78uFCU1HuHhcxnncLXnTF9Be2gx",
  "key16": "5WTDKPDsVar7EdtjJoH7BvUcuSGBKjpDgp5r5JnfMySuJUUVh8FcJQiVtREtDNB6rMT43zvyAqsKtYbiCmNe1Xyz",
  "key17": "4jGuc4ejiXURtMsTgohiLrizSvj1ETxfmBHDaakKENC6ATacvCNNXQJBHaQePf1EJPvUTyfkvhDnmEJcngLMaDue",
  "key18": "fhSUCutbx9RCtt91yN8UkHkfqbRrWv49tKvmDCrV5QCe6NCUkVmwjRxhzEiQmmjXP1YhK4EpJiZ2QGTCzwgsE4E",
  "key19": "5di8xc1mhWGNSpiAfnchE58gP9M69fgGezrNL3ENEVLpmRru9pWPeKzGj1hq7mzVJo9XPeGrhGydzKLnMeU8gXwP",
  "key20": "2ZX2LGgVRq9kwFsPsPXm1pfj3M36mscA5gGQy9SFVrKmiMHYWT6yRG9QDXMNDCE8o3F3gwE37vpGAuc98TV44Uy3",
  "key21": "2tpDwWYaajsU1ed5zEPow6ysBZ6A4WZjeejeKs8XJDmuuyr4Ck1bp2KX2z34qMgrrmHnNw7XRcpK717eDqzUePuL",
  "key22": "3Qra67XpbEhnADg87tYCUjnn3oyiMiZ4QZ2WYrJhBCWuA5dZUjiCVFydYShNropmApZ2fVV3EX1qSQET3KgkW7Va",
  "key23": "5MZxv3MDfLZUjVQnG2gv14UM3gdj1uMF9VeW9S8PsXuNjPAi1Pb6wY6sgKex8B7rS6g3fgtgaAZ8rNzCeP7MoP2X",
  "key24": "L63aacH2UCroh71F9AWAgKT1BNr3oCA3S7NDmR5waXDBYxa64WDK9cGMLvFzDAdoXrVQsoRkA5AEi8bQC7KevDv",
  "key25": "3nsjUZkwpiDxznwiNnjDPZ1qrmFUekNvLHs8SFDb9zQaXz1f91vspdaYUQKhR36kXXPKiKHGHppxjejs8pGSGbk8",
  "key26": "4NFTG3mpeu3xj9WL3J5AnjLjBPUwaw7o3GhdGUM7c8PqmwUTQiS2g1Vmxu5mJZk8NKsj7h8DkBGpUbXNHvAGQMbf",
  "key27": "4Jjz9t219qopVUeQtw1KsehWXXFz6WoPo73iPAtMuHpT2fbjhQYTRKDNhv7AWLo99PqZZaw5LZVj9R8p7TD1tTL4",
  "key28": "n9nJ4wsNCuGbrevX22Yw4zA5wCKhL6sgPGjgJkzzu29QAKv2CzVJq5cmF3Macutjtxw8uXvJzTeFR15g1j1Dr9s",
  "key29": "5HEfEuMBhvRwLM9qrggA3iufoDbVRSpgk2faEHzixpC7D6PYizeE4VwhTG7umMnVixQFLTFPw6KCDgUiwSMMgEiE",
  "key30": "2G5E7o936BrUvBGovjQFhVMmiyPww75rkDrsqhr9XucMLvde6x7YqkxpzodSPndU6dgSjTPFVUzdQYsTDmWvnv5B",
  "key31": "3dBQCi1mxrsN6vH3hUarqWAdhtWT6XUMTnp6BjaKHDh4n9aWEZ2xbJsZJJdLQWDT5BdURTr551qgDivaQn51P5HR",
  "key32": "5TWVfR5UzoxmgPXZBx2nsgipogvLTCWXs2SwEtBSRyU79hpQiQj714ckGRMnW1qvZmtYCaGXwQWZZhxWDk27LPq4",
  "key33": "5ZT67Dd17mifg5NwWRZZy9eYMvz9HJ6UK1SQFyw4NNeXeexM67vNnnprCgKhC4eXE4BgQzcCE5yAvZ6DhTm11XPE",
  "key34": "3TfooGe6eQKXWN8rErThVHhR81u8TX69mjYWE2K5s3V6LwyWYsQ24mzSmYXa6JgJGoYKpKwy1bZEWmEqy3mACejV",
  "key35": "4vy5tVFnNvHvXTcF5JuRSd6DNibG3uBs95dGgTSnonPTybvJmdBULwprwRKbkJfqiZ8GN515wCKaAdTdg1PvsGfo"
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
