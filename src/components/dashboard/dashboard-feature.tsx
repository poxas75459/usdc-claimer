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
    "3GbRdAhKiz8pLcUhTK3AiM2qmoFSQZj3y2rQiduMQb4pf2o9ucDcqq6hochnVFRuxuRQbhbM1nAFQP1v3Sb5kir9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEEmn2ZuYn84WP87YH6TofS61GejtK3k2KyEHsGf7t2Euh3XJcSRYyB1ZgKkc4ThPPL3uPe9VdjKkX6LkWX8SbQ",
  "key1": "1WJNT25eF6DhLrZRwcRyV11G7CTVfpBUfgM8KUpnaUvRn8YZA7sWehyRLXuR3od6UbU8W7jAFCAju5r5a58Gnpf",
  "key2": "2NCT1FD9Fg6QATT83tuPf81vGanZuZ2TJTAbEEddxSu1CxNofZFavrdADBeZ6JwHxrsZ8TLZUdpqecmMVDSEihEG",
  "key3": "43nRCZibdwxkxkGhKuFmDUYAtkvG4iig7mdLaQKAdtXCYDr9KPuvXq6x51vRemYa4rJsVs7UZFUnWCjYb2yj3hUu",
  "key4": "itzjS43iRZiC6Jy6R4XwNzSKrJzmj3FNUXqMgtJ31hXe8eDzVz2S8sw37MtJ1CG6ETzuQoQZ75xhvymuuifL1ta",
  "key5": "64dkNfcVEzmGzLDcf48mM7aLzQaDsYmQCAZjyhNPXNzU2SBZD3YkJdRNjhcUBH6kyjjJ3PzEoK3F4PtzV64k6XA5",
  "key6": "4t2LGLDNbeaUexzWbFgqrX2h9eTifJDe38kvPx6BUBJrNnqE9H4JfWZ9vCTAFWkU9JinoVUTF4UHJgZiixfsoseQ",
  "key7": "4bCUrxj1kBR7UCypNRGrTpLsHfu2WfoUxufUWy3ANpgt7UxG5FWhAsrQNt2GnNo72AqeG2SXmcCCCdxvFzQp6dG4",
  "key8": "56K5TmQNuCFi2aDummvzPDmbXnzRmf4n6qoLHQ5M71FJuDe6TKTh2eicYhXU2j4pt9Z1ZxRrbKseLgmzUjC8TyTw",
  "key9": "ojfQyrDKYsieD3V19C7K6mfL4K152M83siY3Snr66PUR7sDfH9ZAAMkyyhVGFQwmxtSz138hANYvUh7JTd3Y956",
  "key10": "3jMpLktNy3AcADqEQJSUiDRAVcPg1yGKv45Y6SMKPC3eENcYhKKPrmvGqyvjnDqApA3oND1NHLNFddMWA2GTj5wC",
  "key11": "2oukFihrThboVJTNh1WZim4KSozm3rVkxjU4FYfiYfpcEhwFxADm3x3CFCfywLZNCYS5CSwHRoDJ9tXzVQ3hn6tJ",
  "key12": "2uCNGw4ubpVsYKDfWAUHtr8dGjJXpWPbnL5ew8igJrQ5L1bvUmTMubWYTYwTehw5edXeNrwjDniJyFKKc4Ke2v6w",
  "key13": "5ohGuhPK8uNGTLVdxPi3JEPRN1ui2Yfry4pPFqA3dADs1EvLeDvBSePNofRQTK51Lc9abkZma4amx8NwAi9K7bRw",
  "key14": "2c6MNSw4uWuemJz9AxsHVTfn7A9Gt1rqWcJVU2YhBMjDypkvtkxfBnVCRbUzX2f5KSp1na7EStbt9NKPgDkMjnbS",
  "key15": "2MDJ9DfHXRHrhDNZ4GCfJUUHDEw8H1TrhyPcdumA2YzWv7UseJtzoWU443nDusAMecXkgTHwL9CkTfSuk395vG5H",
  "key16": "eQWEiPJFKCB9dCM28ut2KNLE2xGyFkj6RhpnfoXP1z3goQPuMtMmnpNE6CGwYPtjFrQtHGwrh3rMQVKdy7ddASq",
  "key17": "2usDq5HZy5YusvbT17Gm4Dev3A2ZZYj7z3smEyDsEdKtafMBbstEc3RexdP4QQVa89ba4BT5ZWzg5eozzyTqDcmi",
  "key18": "LbojoDkjV2Mmg2ZfQCiVn33iLMwKRJwcCfN2nx1aVsL2otTwJP9n3d87nBGnXj88KYcovhQq4uAUbg3FrP6v65b",
  "key19": "5x5jLzpt1MrvwQNMK2WLAWcppgXvbaa7nr63Bixdd7zHMRUvPHziuYXS1Q6KPULJzfTcQgiBu5aGMjPnpwm5mB9q",
  "key20": "4qyX5DiZxHHKX7aTUkAjYgRk4VtXzMkVUoaAESTsFeeGE5h7FimZnjeVUooDwPVn2a3kqHpMLRsW32rDZHe8bgdu",
  "key21": "5tBntMnS5gsJa1FYkCDmvA6KvYqokprDGQ4es838bGKkowmMVEUFDPGTAW16dRhWUQ6NwQNyQnAYrYHDuwX3jjVg",
  "key22": "5DfpAGUPA4Z3xtZNVWN61wjB2AB1aYH9d62Gqn9mDdgo8fb6AxDrJG7Mps24n1y2Jutr41PtwKQxAhyRtQXRHZ76",
  "key23": "2sPB7xMKFKn3s94Nghw574PLaygNeixcXjoCaCvy9vRGE7d4mkTFkVQwrZ9BjzTydpeEfjUBkop2gfpvAuifzLXn",
  "key24": "njYryG8TytwLU23xjFdQnSjdP5VtPWrtSi2pyrb82Bmqfb1wEktHwZPFQtomNcVnGxr6dNvwbkid4XcEa7nK6Uu",
  "key25": "42CvZuubUsT8MvgXPnwSFpFnWqCfyuzujhAaddVSU7TyxzCMLNojbTUA2Vo3xqjYybWkd6VUHw4nd3YRrHBKsqnm",
  "key26": "2hF1boWPavCVFvJjCD9ywbPMEus5dnumY5vf4tgYPV1ja9pApGzqQchZko9hDmn2xp7HGscmcXKia51XYkePEPVL",
  "key27": "5aWKBB1ouHkQRxK3tbQQ9P4wmLkMNwNcYgPeVJcfQiL7tioMXEQ4wRcHERdr4yjwBCtM3VCfVpPL133Esd3ToXcJ",
  "key28": "5vMh2ntuS6hQ8t5GNDumPvk4JxYtsGryW6fyCejam6cjUcRCBWm7ukehLVzDHysxxwPgvfmJCCQ9QuNtrs8i9LSy",
  "key29": "bBzkisRiwPnW8HQPVxEM6QuUW2x5hkdCkwu1ufWfTv7cAj5YPy5wE8UuEj61AFCd8izV28C5HDz3ozbXtendT6s"
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
