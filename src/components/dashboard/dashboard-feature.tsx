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
    "2GjYLKd4qBLoLPfi77WuQzhGsSP3Vj9wJSXSdCdXNnidzs9pf7wjDpeBBVGbWQRdeNqHcCjgikDSh1rrauA2EQps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQsQosWbxUWegSzphHQbRKkbm6853qzffKTkz4GvmnAsFRBbAfDDWqM2Y7ef8sG8wNP6GCFSGi1jLU7nogHa2J7",
  "key1": "5Nj7p5vb37MyD2YNhtZ5jkvKaYDpSixQQv6vxup2KVf29CJ3EnepQH3C9sny6FkDuUXPzxyb174yiq2mC6FQ4xVA",
  "key2": "36xrG3cNb2ByWrkrBfmaKdR2EnnYXAq3fhL7BSLK2QwpccRktoSZq9rPwY5Gyv8ovP4gF1K7WjzrZUP2XUD7cEjU",
  "key3": "3oLHBDFYvrFSC7Lz6ZPqeC7mKeyPM3wWhQ5EkT6eyKYYUbWh1FYvJNb18aNc26xJqeBrMZ1jVRv5cAnLK3LfrPdS",
  "key4": "3P5pEDpdD3n3VD5veyZ6sfKDwmPu69WMbnYEEwFSeGMmpw2pJzqemMZ6b7qktJch4G7wC6EghuXajS7R7gHMR5zD",
  "key5": "4UKzx8J3XrZPRWxaFkyaejZkptxtvYtKdrRPG6TAh1bGFmGfG1P4nnv5ScPJ1XkZi2RLEJKFa3ecu96qLV3CsoPC",
  "key6": "4H7hXW5yR4ojYAX7SX4wtAJz4PvbexcGYDBnD1aVVhGporQpASbrN2x4Tpe63GJoBJcHYFBP9sYbyhngtBSV4UAv",
  "key7": "2k8KDtsENgY2bXHeZtTf4RuUNwYaZ7G82heWxfTRS9oLFdBsHghZggAungqFanENdx51UuBoEn3MWb36xxet5k8k",
  "key8": "F6jLrQuJEVQcqV22UwW71dJtQ1TKtVXiG6xVwUobWZPV2uyHDw5WyX74RGHRwdyaZoE7xyr7X7KRVi7ApvAgTjv",
  "key9": "N7cTDbSobZXSh9HbP2eG4S81ty1t199aUyivwUAJAbNZ134dD9Bs3dCCUAkRyEyFEPGQTyVpCuS9c4GU5YLbQcB",
  "key10": "3ALURcCB8ZbridxTjZ82Xyd1cdbFcgibPhvz7E8dBDb6X6TssXgkTkZ9h7hXYyQfaNFxA22NFshcdycmdL36WFvi",
  "key11": "44nLJ6uimqgkfiu8q7ZfaFzDFQeEzMrnu6KgTHMuUUh1MCNroX3BRSoXoRwJQBf5uUmG7xhjs7FuuJkmFKuaFDKp",
  "key12": "MEPSsUB1MvRmTZB5DwakxvMLQcYwRST9cut9NHaR6EU5u1q9vk6FfTwhVzZqYTDLPYA56SoQt67tw6D2sZyphc5",
  "key13": "4XirDgVAdUeKQLiFYHE89JWfHsUzrzPdTYNN2VdM3iBLe2sWyJgiNpbHxcmK54eALdPeHTr7rvJDDJjEdYYcn5TX",
  "key14": "4ggfJYmbWg4EuEC7NsXBzABxfCPP9UmB4qAWviZpP7QCRGobx1o6bHg3nMaxdUrEQb6oqFBBWPv8wBvLV8UsuRwU",
  "key15": "aR1hMKyk9nDGDRouv9weuZL24jRAkWir5D4GnpCwZwktswDv2UUxZ3QfQUkWzNPTrJPeG1SArL89uiHkpg3FCne",
  "key16": "V4194sv8NQnypAHedTh77SeKev9Gh5hrPMhdFK3R2SxLJVhVChDdBCbhjV5pNDQFPQhwQyVwHfWMKv1L2vsPRd9",
  "key17": "5PreRraG8re3j6puYEMRrGgQzqKyp5XmfKwoFp6RZnbMczJXqMMih9QbfdHxzRWeLhRzELqo4vqruywkNGwr1ryM",
  "key18": "4sq1aVeX1jNg8QjW29WQfdzziCyoaJdqoC1PGqT7AKLQVmCZWbBrKss16MUL52gEHfMPrL6sP8Q2q7kMnXkQsYGs",
  "key19": "21uQ56dNE8QtYwfKQxzMGU88LLN7vkC5wwnDATxBoURj87zbxfXCDVdCs6h1DTyYHSsRtweFvKmfuK6pxbaTdtGb",
  "key20": "2qQgR3bqLQjysVga1sspfdX2DqDnf45XFcgRRQahyncajSaSjj2BnFqZNKkYjQb8M4pyUE2UHfe2Nbqgp1ZEVaVF",
  "key21": "TacgVS3qvQqZiTpFbgzNDx95749HfZ26HoYz6pCTGp7hTTyqReM3PpFcVx2P8LvnQfvS7ChMaX6yfpoHVNx7d3Y",
  "key22": "5uLZjdZjh5Y3DhMhSxvwp3sqBJVFhqRBJuABTuAoiSEqAKGVfJz4cLTWXqzxqLVfhrNWAbesuCJbczUYWpJypofo",
  "key23": "43Rxs1ZSyiZMopHCJoJtGS6gy1ZtQjEDk44qcR79rYngvQdz29q51LVY7zV1UHY2G83Whid9JqZi8us7EUwJu5gQ",
  "key24": "29VAH4HAKjK6UAgHn9S12JiQ1BRE1jCwkXaQeiotk7bYFjgdHyHheQU9osgQZfbewyh74gzTUvLimCMHjDVErsK6",
  "key25": "2GWNPcGcAE8AirtkJKGV1MAQaxqLRdCJdYv22UXD4jqKbKekESF7jmRSTUEFviFHbcAJkXLPNvTGBtMaQxpS2r8i",
  "key26": "36S6mhpaPYseg8fsYvqET3Q9JURsrjw6x4Ad5BLqLH1paPiGVg1eo6QUqu6dK8NmsWsXEK8G5bjz6CQuebyUvcRL",
  "key27": "33rVYfaH6isUeuxnNpKPwrAbjqZ86cuGM1FmdFVzmNiiA8MDvE37DXaaa7HGFwfqRUsw5E4Xw4Xn3wzsvdTmPB8g",
  "key28": "5nddqQNhiZ9qpf7e2S9jb2pRLqfHnhZub6tnK4gGUpkdji1RAV5oEoGfFYSTCSYV92G5MM9yFNiQiW6Mgb3b7bBT",
  "key29": "49ittw6xmMzg3tme8b8koZHhybKsMyiFJ3ttKKzN6EUeKDUdMgqUeayQGCtXovuUkpx6H516YocRPP37m9T9wAxs",
  "key30": "nyVySmiRGQd6UQsKyKRszFHdd34Sh53hCRcFhz3WfEa3C5ZkLJNxHetWT5vbkVf7WUA7N8nFz2HpJQVhuHRaYPM",
  "key31": "3KB8aruwhiebmpBAUQeDR8nHnui6bMJhozqBhN6rJUH5WeanTp2eUgK7EE9iXBSM5BXG2Uxg6gTcFhWb79s75GMD",
  "key32": "2e9N7Sm58KGN2rM1rEbmtvac61CM65nVmGHNgTeLFpGNFNqUw1obC2WsVeHUZwvbsDakKjT3AgzvvtD3YKKC63qU",
  "key33": "58bifvpDFLAkerbhAJUD4Z3idG7Rf6dm8NcMYw45fGumD7aVk67xQ2nUixXMYpW8Jthjmizsd1tX5NLDWpeEXw4D",
  "key34": "35duZiQ5Y8BbCsgQtG85rDQNshWWjgJaCrsBL1kutK7LP2A178vpSJXcAkv69X9eLKbFQiuZ1qYyAvb6k6oHyhcw",
  "key35": "4scJp8Re2UUnFc4mzGg72A4nH23pgJ3wH2wxT8ruqs4kQypc8BaHUJY41EBgFZvwvayzyJzKnYNXiXogpAsTpZes",
  "key36": "2uRH6b5DXW6JR7yujmxE8tLzHe2LjGkA4fiJcY3WZvg3dn5NngRyyXGeEC388rGXY5z3vWVrTRNF78iESgoaxMXv",
  "key37": "2UrTsUhneJHL7AiZuGgsUcKgZLGfaWVXMMJCSZGx7Ksdji8wP8z7R7PifWCtdj5vjYgbxPJ51L5EZjbuUYntT19q",
  "key38": "3qyFpyyna9N5i2gBk151cq5sGWAaaEm7KmQXtwP6YR5ibiYQ1SLagm2oY5xWA363YCBxFKVriGCkDGn9Le9dqGpH",
  "key39": "5xAky5aZ1VyDdUJLnHxjhD5f4KhXgqLkAnUCeoMjLEoNka2BCgKdvaT9cq3aCjhwV35B7xqzsDCypeoBT67Y6nHd",
  "key40": "2L5pYg9aR1hKReysLjouYvkRECiNxb8b54NkbdzqpqrXGbBPTdbr85J5f5Nri5vq1SA7YSmWsSCCSm8Fr5rffEzZ",
  "key41": "593KQjfWix5L1SeVNxw5siFEMqZd4STBjLeYViQnwK5gBp1zhSkffZdnXLUxzF88ne4LefPz7ZZw1p3pfWFE5zQ1",
  "key42": "5bbbD2QMo97NTKP67CWFRg8fRpUXHaZkdTZLZAaRtevXL6jU5ftr1tp97Kfy7xL1FH9zHwJQgZu6UHtE6ymFJnrG",
  "key43": "2vJFydd38HZJiythoh3T5mu7braiE5n5jsSGZ5iCNGwew2jfbR8GNKJzpCLZeiJS8VKNTGKRvrZ93WGkJxmzMPwn",
  "key44": "4zjCtE7pUr3VJhnqetuDKXo1mzpWsKeMBU3UwhZninoxXfScvRFYChSCw7PFBXronASkUaaPbgEjMxcRCmYc873g",
  "key45": "qiU319QKKDqZc3F54UQRNiPFU7ozrR4hYAVNgBJuhWeaKRRyeqWP2c9tRHFr2FX3X2U8BfcMM8knYUBswvAjz7P",
  "key46": "3dNwFJjfZufGRdRAQNmEW2n4ZaNaXEvhZmFKjLEqMrGsdHFSkqG6yyRSVRvEshYpGjpLxiYqR4eRaYvxt4whAEfK"
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
