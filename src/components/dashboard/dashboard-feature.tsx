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
    "5rc8SfLY1JHVbCkMZ7WGbuSpLUsUtid7bXEt433CBAZXG2a174JJP9XaRG7zX445sQZLZTtbKf9WNuStGpXn6W8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPgMHz37H2ofguQtFqgdRC4sFZGb3rPgHNiWiqHGVptwirZ7nYdq32BHuKvLLk3eJVEs2FNLAgEfo396KTVjDhy",
  "key1": "qKawdjqXnFX3LfPwhu1BbdBy4MfeSgZ5ewVT5zELVmYQgyY9tH4N5kpghaGaTqQL8GaS5aLxQdtU4SCZJbmza9Y",
  "key2": "59bNF3WtvPhrVdS1mgGiy6YXL712mshiDZzCh1tziewBjN2YbCFNDWN59D3MtvLtyWg4XPbdZsr9Fi9UqjoSTxrt",
  "key3": "3eyrqf3HGmAMqxPpPpqxvxFAsWJHeKh5jycj4q3iitZoAuexAFkfgtNVEy9HyjPSRNhxn5afo4DM2rQLi6goyZxn",
  "key4": "F2DdLrVbPivbpa34i5NWo2rHhdwU77JNnN3kn9zEXuHp1nqRt2D9ehKJ1oBAUcd1cSdYAkeiAWmHPQQtEZYUqpN",
  "key5": "2aoNu1fiG4qteopKYxZMHkyGLncYJkmNUgmptAuPgg7FzUdepsWuURhLdnZgzxD1ZHGYfr4iJPySjyat7yfNm7bD",
  "key6": "5F7JscAQ11ibrsVeSeMCHekvQ5hzhiEcUcAuS31a79os2fQ3aAEcEifiNJApwAwy1xF88cuZ7WwENCenLXpnigVK",
  "key7": "6Q81z65Ah12faPoHYgvy1puoka3K8MLPqVwV3wuU8XpbUXG34DbbQMu5kYBa2m7Nso9fVhh6PztdCCwNpD44iyF",
  "key8": "4Nvi81G9siRv9hoq3Gm6ifwbhkGvhxucezcY281SPNJzvuvYKa4RwUFrbptwdiLB1uY99zupEWruPucSH4gXfToH",
  "key9": "4SsZ2E6EBGJj9PLHB5VxCRAqtstrRv4UFYHjAjqHBSXWATsvFN6rYEyfAbcGX747xBxzQPBk4ufsj4ZJAuC8jcMA",
  "key10": "4G2WYj77foSZeeAudV4unD8bJVXdwwbWcr55g31Jp1pFneNShHHAh7GdtwqdfoFSwpXxkyZzc9JhfHJcY3nhqT1y",
  "key11": "2qdYKLy7W6N2BWHprNLcE7d1sQKovWrk3s4rDpvzN1soWvaor8UR7Z3CzVfVW5338PfdMfKVjBdzUV578gWLmeWC",
  "key12": "3hUDHsWZiUucCFmJvMkY3c7RLoJ4Hbf6DVxepUiR8AYcoLfXc58LNy2dqKyxmGzc1kQHLvgdvpr4oUzGv8WFmq6F",
  "key13": "5QWkNm9dWPQebip9KXo5fPTcHWRsEyWpKGZEUisLHFX3gPaqssn5rUD2MhNwo5rRY6cSzqTfXyvECYP72rn24xBQ",
  "key14": "2PvWTmrJgUcx7p5XWh7RwF9Cm7ctUY6AGGhjaSMaNXtNH7GTn2raNfmup6G6NtLmSSMtNq7XFhidd63ZnXg2zTjg",
  "key15": "k4YPnTCZeqxUJnTZTH8Wt8RQtdNwp7nJT2zAc5PuJxnZFwp45iU3DCJgAGLE67kRxaGTp54LyMguogT1dJEFgbQ",
  "key16": "YLLfuh2cUVDhEvYR2AUFc6asixYcBHSHSdZkEwBNzA3VuoWJNkRn9rT97LofzVAzFoTEZGS6qpqY74VfMFvd7Cc",
  "key17": "EtDvys48eyFLiLvK3DjU4WvQgKwZ92wg3ty1rVxPJH2m7TZBuYnw7v6czmZZBdtNBGC2ACnZBbvpSG7X12zY52B",
  "key18": "3CUVZ9d99FjhnEVHiuDXVvjzF1TMKpsu8fCUA2XRDT6hB4bqwb9rQBZBpxnQKHWjZojxVLbXE92qo5WHTBFf4Vib",
  "key19": "roTeMRZTW7p81kLBmYAJqcTzFuuVsDk6TfEWh1GpnQLiuFRHRSLeT8bhP8Ho9yTSwYawFaypXXtwoeANYpeVjTp",
  "key20": "2o3RbzAmUxaNbhmrt6fgYVLph5CXKZHf7NW3mMdEY8Rq32TjdNXMtAdnH9eaRbenW3w8vqkpSdCyY1zC7NuCxjtQ",
  "key21": "5NpdBmAGq8VSX4yykeTsUwbXWsprsXz2B1xAa9qw5xPLSxqqrVp4YCP5AT2aTkDJjEeRWeKmGXE1BRnfSr76g3Du",
  "key22": "3XLhZP6YdzdBNnuTzxXtHNNvxrQ3d7mCHKSXyHdRpa6q5A5qZGQcPuQrbj5QCHQ9AJjfUhxpePbz3sw2AmKXsD9a",
  "key23": "2SW5uXTi3SNNBtD4xsFLXE7239MTDb4uaU5UYyiGj8wSwVQ9aXn3nvUmY5ThjAkp1n2yrMCKbiVNjrqYUabivQcN",
  "key24": "33JHZWi1Q7y2u89PSdMRMPNmVvgQBSGn2TY5V8XEpy98xPKeHveXJhrt5J1xFB9vQKZVugqDispKwWm6Zdg6Q73Q",
  "key25": "36CqjAxXHxiEKGAsmgeE3Ltik5DA7YNBHtPCZ1cH3LVKqDrPkEnptsZjadK2pKsPNvxhMPhEFZifdsDacDbTvycw",
  "key26": "3g8owfUjx9eb6GgW73SSi3Z3Tbzm7iL4iUb3DF9QoSTzxUuwyCeAXcySNXdNsute6vgHjts2kdRHjW8Xyc9TN8w2",
  "key27": "2mgPQKDKSbMC6H3eWqewqBP5rV5A44aTkCrwTvyGjKqbDGNQkWRxjixq9Rb3mUGzUZrPnNaFpyMja7xMjawZA2ZM",
  "key28": "uHowNCe7AAdRYGh3VqfhW5ef2wTZsnJ79Xe3PiCX5KiqrR713jcycT3EGtUrL8qXyNesxBrNjyZQbPDsp9wevVe",
  "key29": "3jSrDAvVNhrsEjpbpfT8WJrYHg8e2tq7gHdazEzdZfbUa6113mmovyQy7YNz7xBQaSbgicu9PnN83Wr911NU4m61",
  "key30": "3xaNYWn2TNwStqK8iHNgUxNn9PhwJfWj9Wit4MMsdw8K9j8ALxNwBdvDRp8X3BLHMAEVxzqTwb9C25cQUtXwWEzJ",
  "key31": "3EhKdgBj4UjoE63oH1SYsamsqy9vPv3QgZ2t2Gagr6N8qh13Hf73VkabSsu6g8tFVMMka89ycLTXh9QZ47PFW64n",
  "key32": "3YWGiSLeBDVGLGn5E5Z4FMayUpctsSDSnqFaeoeoQ7FwmQZKMBeAGcsxir7TUhoC1EoW9V7JDB4uJxYDQfy3r5c3",
  "key33": "43Mw1Fu11xA8Bi4y4X7F9MF1pkkU2pDcdsNhLTLAXq54iZuaciPyjhWMVJ1Gi1HieHsY2vzMUoizw73cJJrm7h6e",
  "key34": "3Ar281FL1mdWge9d1M4u92qCEKmNnNQqyiWTu9Chr2tGUyhysG9nunQdYQyxp9DZg5xM6WCqqFfVXRH96JGtqYQi"
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
