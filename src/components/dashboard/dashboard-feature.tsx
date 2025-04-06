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
    "67kcr4shWZ1PjuMPvXnbsgUTqMbvjQqciFatPk6nS8vhxTAbD997Hck45287KkBjNr7oeQU3GvhUDoSL9wFVHBze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfpNfgwTzErYKjtzvo75WXcNyh4P1ikQqyp1PVNgG1QcrMcVWu3ReLVt5TgnPLFedrxvu51N3U8zoARwBQdkiYY",
  "key1": "2XhZvfd764YvAQo5cgENkXMDyYfQaPwQ28zAk5EA4DJe5AbHWELtiYLmtkoWSQVB2egwsWGDecaDLBPyhqAY6woM",
  "key2": "cRBirHxyWFvTkt7fcg7eMfpidgu1GCqGdhhizqxgNH5yQrQm2xNy1fmwSrUrZKJ9KtKEbmdkEgSnpQwUkMPhTa2",
  "key3": "DqdB5ot8tFMEuQSsuDPGekyhhCXm8s52jhBhYAE4dVSKPYy7ArDob8LUznMbmfUJKXgGVao5Q7LZ2kPp1FbCha5",
  "key4": "2t3CdfoUAKvYKJENTVZx4pKoftCuKp8XSMV7ygjM1DAKjvVjuD7oAhYuBrg92qEUtoUarsJfCzUsLwb48ydNAShE",
  "key5": "3aDyRyyCftNXujbbBZZQALRmpuKqTFCeWNnBWmePLefSpB5pkYBh7jEhTbBxVdFzw1GhEbTAHEQjx91QQPHzp9RW",
  "key6": "4XJdwHvBosW54RefD6a2H33axuC4d7zJHuXJBYiT8jea9VASZMUVdrj9YFa6Uea5khHfE3TEtcFNgATh1mfFrhdr",
  "key7": "vjf5PjbHebPmN4pchYaTrYYqPoziZAEBzJ6rmBK7eryA43U2gQyBHSwLdWTNTCEV3eckLCiDk4Kr71euBBHBQyX",
  "key8": "5nivQz2aGvgWXCL9DM3kjhFktY1cU5kpJXAL2d64ajQdFSt7TL4k9x2iPhoeUjLpg8acjG648pKiMR586EeAb6wG",
  "key9": "krz451Q3AgNEmpRSaUwfvzJM8rxHWhJrpBRyzteu3mo3dYkSWhwak4Cctcm7MXGSBPk5Rtzcop5vdoLYzLYAci9",
  "key10": "DeQwapAWdG22hxNfb7TnMewc6VpYpZUojQwJFT7g7kaMAXahdV9BuRzEQVAzLFgueWZzjxfQB436nd7U3ghqetw",
  "key11": "ADgznPkhN462iTHEWtiWq8U5jS1AzzTNFjjaSyq3BbNAEhgchMpmjF2Kc3W2qy5GbCWig9zGP6z3YqtNbhJVUpc",
  "key12": "a5o1TcMytJrmwHcGJpVUDzA2FYDD6pSTJQWnpz1YJ1beaUi7zrbbV756MJ2nDoBy3nd78atfapKdUqSpZnHmJRc",
  "key13": "3c2bkmRsHUqDMU13rVHjLKY8uwT1LtVGmBdpW6QJXcJdwm98QSwF9FcQ61kxJrkRLahT9RbM2CeE151KvfbsSPA",
  "key14": "2VacmMx8XgufgK68w1nCsM7DbHsXrE8b71vY8ddW4bo5DEo94pWXfzGqas9RSe7nvzeqsgtAzjCsihYUKGKgC8wx",
  "key15": "2rfwwGcahtcVZ2hTtpypKc1xrno2CzNUWJGLn1K8f21vq2UjXgKeGHz7q7MTGrTxu6dssyrJ17beDNVXuCMESWye",
  "key16": "3kH93YutNgxpsjh7parwEmseetNkvkVGTUMbGPNZHUyp8oYKxd154KevwoFKJ7rnhQiMK5i6p4tMpDKsN8UQZFwf",
  "key17": "2crfbyvdr898AZTEY5A6TXAgvYTiYYBa5shwXNJgGF12Zw8k8CxzVmMZzaAHPA7h8NaswR7ZCkjgECM92AqBEQ3A",
  "key18": "6CZLbyakfQB49DNB8gheTbvm4Kp9R3YwqFYHJQy4mR3dn5HfmjK8oDVmSdTh8UeAsxsTpRUvzqyqfMu9Lr85Pua",
  "key19": "47ggHUSkSqSBGG59BFRAs2jhmeDcasfHAy26jQnw8Na1R8Hs5THDWEyK2f7yQMj77UBTw7aTaDLw6bWjJxEXR4qS",
  "key20": "4NetS455hHJRZeY9v7WVNEPhWYvHyz3c6KzcGXeqhQeU25GAq6F5d6StQY9kAvWwer93gxAztyjnw7uiZGMD2UgJ",
  "key21": "52kyJGZLkEGtjj6b6GdSUruwQRFRZ1LNLaUFVMEJwq6zFwSZgjxak2ooAauwnWfH8eT326evpeHa6oDk2j1R2Phs",
  "key22": "5w8CtEjCXaifQDpKWYmcUunLN77xWBG3BNVmRfWZiPptoyu6sdZY9LhRFyzBvUkCBgEwMou6fK2uuTGTdQo2J9Kw",
  "key23": "46CEep8Zvw7btpA9JLQ2bjKoehamBxk8nTfz8aMDndoRAZMiuYYqWEFwnYGbsWq87x4xptfvMXskjgUHvg91FqRn",
  "key24": "bS5KkuPcYgY5D9vuR9mnDrQarMLUQyt9R2nQjZoDjFaCxcXD7HVAzCkMb5oKq2BhDvP3mS2ux3sT2ivE7Cdy5YE",
  "key25": "2E6Kxt7ynt5kGxhKXf2EdVSdV5JKCEW4d6qfrRnB5jMMPdVVANjCmEkwbeKezkMMzRuPyWK5PmNX9BfSrfhCvPbt",
  "key26": "3fyYUmC9LQqpgYz4spkzGWEKsCsJS75LdiASaENJdYmrU2TyFdzHbhpq3APF48mWx4SuY3LbcbjrUVAbJecfMF5H",
  "key27": "4WgWbDueSpj5gYXfARHiYAfVnKPwugRZDy2W13eEC7a8XhWPZUXVDxjRuguBUBY9wp4TcpzkhU8mDTgJRZ1SUuNf",
  "key28": "625Ztz27om5o8GL6ZaEy2zakWpwyxsuYndYr1tNYKLtR4SviVQFgtH53SJFUEaSsZqE5yEqHuhobBuNsyik8La3J",
  "key29": "3uWfReNGikmaZPzM8qsU6qtFgiSiNCviWK4SHGNHyNgJGgRdiezPShCvFGCumByrP5bCKNwJ1n3RdNNNsffzZue9",
  "key30": "4y3d5i5rQE2czkNhvfarooibv3cTbWgBCgw4o28gT6g5WGWm2bwt5BThjSZTqwQ6Jg98fXBd9xMXLbqz6aMvZT7j",
  "key31": "3imJnw3NexXqVdYy8KVoCcfxcxfGsmKevFHkeC28RBs1S1razZdZjryRy7KgyH1v8HEtv5HMriSs3jEQVdkvdsEU",
  "key32": "4msy9bkW57HT3x9CGG46EF1mNET4Q2XXPeoTKYzuYdoNMbHU3nqHBHnCGvWncn6QKkVn8etfDy1wT2F2EpTCGosz",
  "key33": "sVG9WchpCe1pTN7WjSs1EJLKRAM3rFMYwEk3iGk6DCVKfVvBL3YgQUPdL7WJHUjHjr4svuHzBwu58f43ZSRHxzc",
  "key34": "4ksg6E3EscXZVptgLmBCiMSpBybWzTWTpHfF3YLxCNCpZVhKAChEk6mdy7JzNkj4GUdtXGiQZf21JkNF8pbnaQB6",
  "key35": "3iH3vJtNEFqt4cfdbrzGkhVtGBQTLKNov6GHw6MyVgK7T3uHjDDNdasq2Yi1nMPUW4kJcosDfmvxnxaCXkN9Bdqv",
  "key36": "3wZ5nkjtXqALtEC9PrJ21QLyThYnn1LEgfMT8ZG6RJScNVEqjQYA6WZ8foi45YLe7VGv2Si8drLCR8QKZUXPNrEd",
  "key37": "4jEBLvz1NxcuKjv7Kyz5mecnoR1wJ35fy3hZi4ntyU3vuxgQkHgw2dSM4pFac4hUod7dvmLdA56AzhbmPPAcjZaX",
  "key38": "5meK1r4NgRQ3p2T2a2Mne9WmFYWfw59pAgYcRX7frg7tN27cxTytSQDbPKVxK7qDor3VvM61N7rtmMbyiLGLNy3f",
  "key39": "3fN4kutfSzMf5FBzLXhxvwqQR3rZgJBYRMMnBUhczpPFjVEPk5qi5wAUEbuMvxfLtkAXWGKCRA78tRy8UKHXyKua",
  "key40": "2fdHR6W7T45auLYjboMQdqh5nSQNkg2hwgyxqXGmy3VVuRjr7ZS9FYG9dxNBmPsokLLn9s4iegmdJYy5oHX2JuYp",
  "key41": "4Rwr8QJA3XUV5vShj2tV4bqZTZQb3J6AMwpDpzyEFkZuZMSR1CGxMJyM8aGw41jX59U8YDqKEqtqb13SiUFcJASG",
  "key42": "32zWUXzHpCvNhQ2f8AFpSdm2iyjkurcMEMTu4jxa8P93JhoCSrgUar7MHtQQYpJk8ScoGFfT4HF81FxW4tqwrDMA",
  "key43": "5KuNL2TG9joV4ntCNbo7EtxsPd3ittQSdgrW3f5Luf45kDLnP9gCi6k4XccY1rKQaHUH39XTNSJ4YwBwBy6oe4Ac",
  "key44": "4qdxuVUGdA5QEgJdArriokb7VRmUYQgc81mr4yBAw2wP7Fn35niXjSdesY8f7gfXYcXsBnAUSf77Qwy7vzaBqhHE",
  "key45": "2RuX5Xk5Gmfp3g8DxgDQAtqdPTdTajJPR8AcA6zTdnmfpE4SKVWYnApt88hNQPWybPWTHtErBPQYLvXfy1bScjmE",
  "key46": "4hq2Q8WPqU59M1pUfox3fkFeJtmLAqxSDTnB8YGJtKEtYzC4rbYA5voVbsCeZd6LhVwaNnkiC1Lm3cDGR4ktJTZH",
  "key47": "5WcMBEYQiPWUPApFrrXp1Ay1ueUUCGJkjvTTkqM318bgmhhNK4JKETswyRAa36QKvJwDyEyzZf7sFfpQ3Rf35E92"
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
