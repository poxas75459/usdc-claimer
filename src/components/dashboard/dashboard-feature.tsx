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
    "5Ae4UvVqDEHfMyR8nhHayyzXzNUBoJkSRtxbWipFuJK92szpB1r5pShJvzbeJy2Z1PZkjkJosrgngf43k1VpcNQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yP76tGteBqVQKUYyctK1MY2ZK1eSjuUEXBoqT1zqHRN5Njmjg5RYiDDuG7xATyCP74TX3sy9vFRTPubqmKmssyJ",
  "key1": "4iregRJMm9wdUas2GLwGrY9wwfdep3YZPGTXogkoSyBKnrabsT6HKQP3aqH3gReDzJvVPaRHYMDtL7knBfwgEoyM",
  "key2": "5rJo156C88fk1LMjS36wEBKitxhjxNTNjmfC6VkZcoo8cR8UEsfZoXnntUStGUUnGRvanqWwhkET5VPBqotx12tt",
  "key3": "4JBotXQFxY6SMdCGiWfXip81T59aqP7gCxR6UEXZLig1zxjYPHykmPTwpnC3UUiWX9bYXb7SXWt5fUPZhi1rJ8B7",
  "key4": "4DUsgXZWeJ2B35DqUtzHAFkdXLbSdwAhRxnV7cR24hKxXrquvRQMs6EdetsxCc6DfBiKaZyuKsyiTxARSivieq4G",
  "key5": "2jGxZriSwqYLWtykT14TVta4sPMXJxRxDb3EPtiTynDH2VjnzGHfNpvcw6ik3xJJHgFsiMghKDWYpQkFj3QrKY19",
  "key6": "3dD6shsxaGJDeMbhfGGPLmXLFgqdvtjWsHM9PrwUijuQ23ue98K1ECX55mKXpd5wV82wwBTgmRSYYdiSAGz2uAAf",
  "key7": "5FLtTm3nm4UgzV7aj3reetP3nEfYXfxgLWLnE3xMtLUrwXXUd1523LFYFaNHnyeCVpVa2hQ74PK4kWb99TBokiG2",
  "key8": "37o8hgjZ98jx9xqpfKXGmSfKPBcn3pNVoEaSNbGsTadLEnMymszd8ek1PYf1vgoznES68LtG6Ee1vhWctGUk7yx4",
  "key9": "2awyxtkkeB2zLFJNKHP9vevucLmVY8LJzmgKqbYTUJQiUVpAQ4UJAArqVpnTRs7imeKS26EzYvMxpNAw5EiZa7LJ",
  "key10": "2qBn21hLoVGYnSpYDuFGjznk3nWMQxv3uDh2t7bWe3PU4bdUKZMMTbnp6NRm7g7aVaCVAafjAzp3YcNUMihxZEqf",
  "key11": "oXHcoV9cE9SV1t1Pufvct66a8qutueKrmJ176zHfJQi7v5Do37NUAhQMAHEQ9oSFwRYGpiG1HHiC1rdgVrhRHPM",
  "key12": "2egt3bm8hFt1MkKn7ZjmgaKHcgnQbjvNDs7gQ7pDmQQqKwRM966gr7t2zoXB6LgXRQP3mYSnsHWFkikxzenEWF6z",
  "key13": "4PgiPE8EiGY2J6gabxvHztYWycRL3H1yn8vZjKscQrXgc9MmP9hYTGc37N1eaRUmDCLpceYNQWZBGQuP9WmW39K9",
  "key14": "24GoEPNGrCSL6ujFG51Qmab9w88MpMaq2WSTZXoMmMmrmWmaR5AG5htxL2yHhDeXLBM2csaVuptc7C9CyNXCmL3Y",
  "key15": "2SpFea8i87NXxjKW5g8Gtpq7Jyoe2wREFGegjDpMNwNAThKDkeF97crKBWaBBEpTPj7ntRYEhUdsJjhBP29v1dew",
  "key16": "GC5YdcibLN71DjTWVZFXkMH28Vws5acydQR5zFoK52YYZeN6DxhtR3noPtM9arWLiDvJMSBLpPDvTA4RUJwTt1y",
  "key17": "5TDvGXHwY8EYjPJFCiHinXqf2tWwyN8odKWNBSbCBhJkBo7bq3TY4giLd6noQgM9HfykkrkZc21NroeCmEVdTsRK",
  "key18": "4WM5tjP89qiuHUDeGX6MuMfxCupe2jm9dj5FVxSAbTepdxmqKnQyEw4CBGFJwgsdMCo2UxuPgLC4xYm3zQvKj2ry",
  "key19": "2fNwrm2Dkan3Q8KHRCzV3yBL5FFCCpBSNz81zxkewLgPCuk2ECxxck7BBuph2N8XCXeVCGfFByaM1MVhQbV2Jngo",
  "key20": "3nBnjsckDwx2oZsav7Ym6CaETzxtt4Mz3DY9CN6YzRmZDezADSiWrERMgr8Nv2Lfx3e7MhugDZE6oqHArxud1b86",
  "key21": "5129kMV7AxxWnSse7bdUu7EPx5gBofwEnLgk7SajCm5VeRvhcWTLuX8e5wXiNWzGrYZK91vXrKB3CYdaAwV5zzVk",
  "key22": "4ogFpNbePaW5tXrxsG8xj5zVx8ocxuHvPsZexmjG6A42hZ9W9AaGnq5CHmKwdtUm2QrmFEEyXuTdyEDCk42yVc63",
  "key23": "25tsFrgdrtu5dR7y7SCTZif46tuK8w76dUH4W5RvadyquAAduwFMe13ELb2kdzg75fqGZun5uyNymMHV8C6qntEK",
  "key24": "4GcJCEKQpBy991GfsuyiwrZQZbnQTwGkzJHzcVWiXHNsTtW5mAWA5Nc553KMCb4Kt7UnQHfhaFnVbh3HYwppicam",
  "key25": "3CtXDnJoc362KrKH2iRBHupKmVHaj7VytcrQnPwinjwQBGEs3m94oTxiQGf9yaTz9w7xsg4PZRB4iXkTePUz44mK",
  "key26": "4emXeYEViwKW5Ax4tW7YmHQUXuHPrA232b41vjeNHazg1r3s37ctBNKZZxc5hh6LcLb1vN7nXyKQnbiWhdQ6eq4k",
  "key27": "ebwVESoBHjtPQj1pRAZZd8RUi4ARUWh5HcRrKGxmr9q8t6SdP4rNsRG7uLwuwqHbL6qnwaCgXboqEohymyFJjjX",
  "key28": "2499RMiJQ8JknVZ1sGryrZvcMk6hKTXZi6Nh4dEUtntrKRqhmLDgGao8bQbKd2Ami4qmvftRKrcozYU5h6ctXYnw",
  "key29": "43Nw8mU49AfHystXkG9MdrnAheox5rYNr4w1ymyfNBV6pjYia1xrX1RXqeN44CSCdqVTj3iHgbRjJ9H9ZDF7iE67",
  "key30": "5R9RbZYo6EiBfBxSBRZTJFJaRqP9mG8aong8wQfYFD8DAbjAWTwoa4UPfkADLzyxR3AMqETA3h2o8Bcb1EEdMtP7",
  "key31": "3dguxe2wb2vD69yfmHH4Q3AgYdwLZqfja3yXf5g1VHHAyfuHCkAVnQjzdDZvXRrGN24LuKim6j4D6MLa2B5xDKs4",
  "key32": "rGz1hHXxit9FJ2rPx8gAaUeq7BzuBEufJEK44du2dF8FzbgxT1vqmYMg1cHC5zrpeyEGZEdMvtN2FLcDHqH86bb",
  "key33": "3QdUAX1zSZ5cVzo8xG6BhJrNHCwa1QxWRxPx1jXjioA5WYEunPNpXaepVedmWXLaGuuemxxS82EWbo55ibJa2QXB",
  "key34": "2gpxBX8mwfdKpyRHu5merzufqhx1YikzfDPEyoZVBxhH7VDj4vVBWGXXbAgcfBwbkD7r3Qj5tB6gFijMJA1NyLrb",
  "key35": "3Fq4zqjgTd98ETg3DbvFScYBJwyvpxEjxSvdzYeQgKD6HN66PMdYmNBrGjSVwcoj5N2xTLsCd34tJFnVXZX3Soh5",
  "key36": "3N28kNs9LsoGcWgPjH1u2G2UuzfqL271VsBtXM5aJE1roLLf2wVZWxuQWPkhVBoigE7en5ScRvMEtEjz47Y9aUb8",
  "key37": "46ku1b8UPZ2MES9eYpZkw2pXGThh1LQvq67o6M3bGHM5PwL5cQ8zPVcQ1LYfhPknxmHx2o1kXmXxXz6Q5A4u9HgL",
  "key38": "caXT2atkYVVbNYfrva64KQkuGNuT5fgwcgYgUUC7Vie26mN7pB1gFFmBNUnQm8KKTXwngEvEsgPzyExGqzUt3a7",
  "key39": "4UiEXB29xTppRDFdPG1b51M69o8A5e9rY8AZmhCH3Ur86HVBb8gPkKF8y3y4YKze91JSxpTa6ngZ47kuLFyW3kbd",
  "key40": "3ntDKZQgADiCUzbM4mk4a1JwnEmhTqyYXHC2zBi12waAKHajMPkR56yPg4U8qdBgAmA2c2a53ZQ1Nro9KkZ2S92Z",
  "key41": "3hzGtPZTKmZYqqdFmoewZvcdmvg4fT19JYGGonKfmPYum1kLNDhgaoxTiGJRyeozx31LKQC8wsweXu5Jgf4Jh92Y",
  "key42": "4BfJy7tVghAPvX2vMfdDKh2bfagA4Vn2Kg4cdjFokhEmx6aa2kT8w5My8UKWj85ZX8qQgSinPjkxvRMBNZUHqSLk",
  "key43": "4XCfWGxC2bm5GUhh2tFd9UjxnNsHTarhH4NjQLzoPthRPeXYxX5UzBuNg7AWEKQ8z5iGj53Nrh1fqAWW8ErgNZgQ",
  "key44": "4zF75REy66pGeqAdw2LorwSHGkYVSsD5nmkz5hjKvASn97CyorMgmL3yxh6LDYzgFvt2Xvy4yjAVgNeDNH4ANVPV",
  "key45": "65UENUVqGJjAfkBXSXc5V77841t12nFUMEid9NuvnLdHyzCjbVq9w9rFTTcYy13X1yJt4teo67hH9nNrCNPEXSTz",
  "key46": "BuCPt2U6ezSpCem7TGAWwUyEC3n7Z2DrE1BFWC7isB7cJeAzxNUveYL9K1pE4QcZdhT1VaS9MPhaXwgaUuxgtRj",
  "key47": "5UwT61fdxmEw2CCBNfhedCBRgiedXnfusALEkpZEEwMEkMwQNRN3D3rUZ2vnK5pc63tnDJ6jEufmUCSs6vN29kf",
  "key48": "2YMvY8w3PV2w6CW3qFtYkE7KwXoQYPV3zBX1FGxA35ignSd9X8ZAUcDRYij4AXZpn71iGfR21Si5G3y5X2vxcjMQ"
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
