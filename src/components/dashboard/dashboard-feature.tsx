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
    "4igarr7PvqSKB2sMK6osvsggfxMpKVqwWhSdBd5MdzpPTsxrHd7J3X3WmRsSNab8CFXJUJiJfmpe2ficreYKdpde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2rx7KVLXE6NZR292gFoMTt9tq63s9gdjihVSqdcT9ttDCksn3ceQZzWc6kwa1Y3yUaUFK4P9RvG66gZPsXWLGd",
  "key1": "2rc9ngQNykJsTdfqCDJzMwYTCz5jXDstn2UknrPqh29kyzf66FKhdeCLdx3A2irYy8t5HJjJiKkrpUNVYmoTN5Jq",
  "key2": "2ktvfAoAR7ySNLwYQsQAJNDCBCuGLk82GorSWq1wARZpAeCWkojiSq9omVKmxnRqAFpiERN29fioj6YTZDrwpCDY",
  "key3": "454oSMchRa3TGdrq7xEDvathXVAafuLzFnr464BQVqDZMcyUdmYjoatmtiVTr2tGDkm6PugUpwfheymYiNgjVPbj",
  "key4": "25qzVjv2kFYgNvtynXhz4AVRzztwVPfUKgtzATJikFcj91A6gVpHHmedcfX216CbwwuWkJrZ3aAofwoiNmeAbbYH",
  "key5": "4GoCmqNW8x6vhKwYpTsB9tmK6RTqu1BERzJ1BsbfhZVjERMe23niqyerGGdCfjSQreE3egPJmh86MnHvNujP49jn",
  "key6": "4S1sX2PHA1scphd4KgFMZofX3jAfUEnJNyRbcvqa8Em1rHeQwM9kXcENpDLwifsZLgQ9CSJ91n1Cf4Q3aVt2RRz2",
  "key7": "3UxRQdDAG45xDEEqFFRVz3eirGLx96sPJBiFCwtcDeMWVCH1s7253ZY3tcCZvAdQbjLkvsDc9u7moT4qVoYgi5kv",
  "key8": "EqpdgZfUyigAjQ5btoV8jdVHwoeJDRJqx4a7BkJaUJ4JPhXNGLcVG6rbv9rEABMk2kSFwYAN61dvGoqxdqceoLh",
  "key9": "2V7BUw2jiGf3zBaajXpv2bb4JWr5GCFTGnMvk7Ma82yzy2kjAtHsw4JeJUKf78SDnBqRZhb5LjwjXHQoNqfFkWSR",
  "key10": "XpvkE8L2WuhoosPmzmUw39RHCNtUq5oUdjnXPUiTjY62XumfHCNHDtTPbiPXPtBpUihYHXWkiiXJ7fsmZx2Y6Vm",
  "key11": "5KKv3s5DfKZrZuXr7898c3Ab8bhfs6RauLFdcHWhVxT1zpgJD8zN49owsfuUiuDpgsBncsCetgtuCn7Z37RZu47G",
  "key12": "3yBqFytQfEWUnUCrBwNb5URti1F7MWMC5i53qSTaQ5xwxB18pbGzb6Re2E2q4VyRFEjH8j9uk2nEKhkhyLcZtXZ4",
  "key13": "5cRe9Mht1DJPttkQKreJyqCHZgkftMA8L5KrNUqoShz46uMqHUNK2iU1t4knKWF9Bx3cEnVrrPJWmCwwGUNCvSqo",
  "key14": "5iQq7eoH4YPnKyAPLSGBqn8JiVbT6QPDH21ZPg2obYTvar6ZZD68WC1hEhCU5aBYGzvyx82SeGGWSj2BP6u6zCWd",
  "key15": "4Pps1Q5wugbYLnUebDJWij3HknJgH3EUkzyD9ZjtQMDkA7AeAknWLaefx8CcbmHzhCKfdHga3JZj2rUQGSisZbrv",
  "key16": "3m6HCi8zziZ9fvCN6ogRUphZdzkrN5YiT3wg9gNB1P8t2yNxrK6vMnkdiifYydKXC1HZjuyzffXav2z4M3Ry97F",
  "key17": "4eK8z6gAd32aFtQRi2eN61FhAZWJPQkGAGYHMdgHu3XHTDrFvcN53dx3eBEoktdEu6RHzjq773W3anxDet9LwgRM",
  "key18": "3heAgFxHtEo5TAM2jbwmu9L3pjA91ac8uw6pjZrJbL7hRpgCx3FrMK6wFBsSnmvMLduASYVBfNcef4dBgSH2o9qe",
  "key19": "bYREfGkzNqkeHRWpcn7hpbom9FLnoBcD8Vd98N3N529SPdhvkT3RyHVhvEE8cenC6X8Gn8nTf2EZ5G3x7ay88dU",
  "key20": "369tmKWobEwvTws3t2JSfae5N6Wdgu7tX3UAMKQj3WhPDjuBXzoNrsn8tsfXfEMRfkH9fZthpgqfaMyqT5bi9ZEf",
  "key21": "3Ar451FbjUc31LjGbSwEMhQT4KBFxf8Xn47Bq4C2eY54YPhMoJLP2zUboZoKWHd6GwZtnEkBVDuzHw64dygMF3pN",
  "key22": "51YSGumUPuWGzYUFShoCApmfSbnAQ33oirFnvXbWS4Phvm3MeAdmnNFMvJgejKyFGwgWWFY2U4wTmm5XydTqzHqP",
  "key23": "3CgFzSKzQrZ2qxvX5CcAqwN2oxGSNFjqG84JjZGaFR4oMNQoLzJtgUN6d22nFQLsagz5wrNDXyb21LkLT3pbD9Gb",
  "key24": "2EQNZrRWFY9GCEKYQ2x8TMHCvYhxfRmWZRmNgPMgXd6xnmw3sunxuPNmtrbxQiBHp1SimzGPGwXERHPazHtAqxmL",
  "key25": "2rGaDLvi9rz8igwwJt5xqe6cA2SDT8XDA6na7SXApExWqD5VP4La5evC8yCa9WukHPojff1yTMjv5fA5wnsh7p7",
  "key26": "3NLvaMcDvCyU7jvgXj71G1ozK75j9XFzXkq12vuwq52u4oYtaGPQS6ZP2xHAMMeTrPgVkjYCdrEULwV7c1yuJh95",
  "key27": "4awn99taV7ai9W4dTjXd7kGfnQvQwEi72CvCkx9LebzbwsYLGLcNZGtsMkSXdeeWEm7T4qaegz9LMfeg6Mdb7xsn",
  "key28": "3U3RpmjpEiMKNNRbV2yaSsFf834fnvT86bxhxJ4viMNb6DG57psz4Ap1bVaqbVPWQbPku6f32orrWGw29XVjXMix",
  "key29": "5uAiLjgRmCuLvCF1nHwSm9UwwbATG8aBbrfUjTRv1ABL61FWRefKRuYwFSkj2K6ZQWbYFkWz1L1v2dZox9wuDKcf"
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
