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
    "5H4P3DaoiQtTfTpNyRfw6ovXkahvVm2iqg5KP3ygodCEqfYomeRGaxih6TENLAhdicDcyVhAQQUL8HqXQayi1aST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3QmgXD7hetNPdxAGCDKC4X3oamJxCgHGzsmuE36MBgHYX6eYRmYmR9aL6q2xAHqyJTQHEnpASHUdCRXf8j8vbU",
  "key1": "3MYmzAVSwqoda93sL25f979m8jr4qmgnbo4ZCUHMq4dZjGpxwkuDTYvSLPAoesP56zk4wwv4V3w8KN2n1Q9FSVed",
  "key2": "2XUoE5QshFzmiWntSbchevAnsbXH5R5mRGZi6VBdxXCfXqkDtUBBdT9tHdkZCKTT8ZyUfRRF2Rxj52PdLTVsgFmU",
  "key3": "4GAGbL51ZjtBiMqBF6BfbY1Vxxu4iNhFQp91bvMY21EoFq1Wz2jgqHN64tYzGkxMw7nGET7iEmYBbFRNpNp2EH1v",
  "key4": "3cAFjm63Ys24dxattbVZ3aunLd8WCG47UHurfAmpYkVqXAdwrkvEsUEcPxfrod2Gwu9WbUiEaRZcFi52onSCbcUH",
  "key5": "4E3q6j1XsM1GfUFBx7THNf7a9Sgm5Rgeqs5rfCYiR8ufTkXZzA51f7yWiVnVePMMQmbvYibr5xzVMRKzmPwXZjNZ",
  "key6": "5hwfacWjMtbxNHHeDYpe9gTBR9uj97VC7k5Gi92Ky4bJ32Ksx3jk3x7LAHpjAfxTcYffuUfi3XdMnH1jpyJsadtu",
  "key7": "4Br5kaHsYPhmpbGg4x7LLR12VLDrEgcJzpryUQymoSXxcs6dMQviAe4uxEekGMxQUK2Ar9aqyaov3SPap2ZtJYNx",
  "key8": "2Frn8Jx4o71F4CganYKe2WRTqEQN2v9pdpCYBgU9JBJ2agRTYBVW9xua2GGyQNiCY6HYSZckCgJUvg9Mx3bwGRoC",
  "key9": "5imCF6kNnSh2AzmHtWmLner3KszLHTx8Hg5oKZTLUHxRYweZqgcxtcobrx78SHVD1HAq3DUYEdzGP8njCnpP2RvL",
  "key10": "3kZX3fj8sZZXixXLfXvQpvgp26zgeGojUZbEf4a7oFTA6KdVfDyiD491qGVi1xhM5dfqH6G63cVUxcbw3Wz3Etjx",
  "key11": "35gfwHZwbjViaMfyK3vLXfJfjo7kkSWxEF96fkqD21YGmXhqBRU4fStgjaQwjUQX3pqXEaUMjM2K5AVYDfpWtXCi",
  "key12": "ZyH9REx3o65cB1AGoe4fr2QrF598qHZoyUNJ5bja7tocwC2eurJsZo4EhvNLcM7N7LSxV8n3ips7bpLayRxkRea",
  "key13": "51oScWGDQ9n6HLQRDuvETzHt2pd86n43QH6TdjErXpFjQyqbWMZcTZu5qVAvdQNHLzB4G1i4yU9CFrT8197bSc61",
  "key14": "2YMLVddoSkUGvKXa4dJxU8PRCjgRy9cZDL11pJpNDg3RajoMBcw2FYER8JzC9P1rnYaxmvvn7h74tMQV9aioZZkZ",
  "key15": "2sxHeHrwMBVuzZcMtk3MZ8C8To6LK4k5vb8m7mvc4gtK3XXVkseVKxkMf22EC2wftWAYWk2mMGGKvuKidaDYHgEr",
  "key16": "2Uic48BBQwzWDgLp1B6HBLCQMuSau4cjjwk6BTodwWdT4LqPEh4mFnQqe6C6Jqu6CE4f4N4rYQdqs37exXPAmFv5",
  "key17": "2ncTKmQRi8nKNrEz9GcxJgQMy6VkK51CTpxxoMZy9sTcEDN4H82xbRCHT9keZxqYs1TtXTc7t5TZyKr9Cya8GsCW",
  "key18": "5M6wboDhfsVzBNhYpePgUmotCh7Wsf7e6drLy9iTVhhpyW5x1x9nrMAAwgyvmUddjvby3dB6VFhpT3h42Sm4mRz",
  "key19": "2dPyhwYYgPLr5CaaqJxozFsaBBUKkc31isK4HcvZjJMJhSiB97yzWA3rhAnt4hrHqQVdx2bUREQv5hNgTJ45vDw7",
  "key20": "2syinJmKHGTVbtfPBoLZ3DvfEVL8mL2JyC3egopgMTYMc23saVR4uWgPqBYFML2nKHmB3KtYhAi2SmHWaScBqfBg",
  "key21": "33ZQYY9Lp9K73rjHLthpx7Kgr4uFCQNDNtYsqkFumc2ALjCWKsad2SdS7gPNJztVXPzzWGLnDhizYBQiNbB3VPpA",
  "key22": "4YHMDoRa3bAzrVpsvrYPazcKfVkruGWMSV3ZLZeBbuHpPb1pgfMK54xfaNg9C7CjREBPE4UfUBciCWGNnspisimD",
  "key23": "3PfkjGX1gdGqEaKhcH6EeEnSKDn1oR7Eq659RAUCT2rfLPgzhMMxSz5ahKnPdhyE6wCWKwEKoZLZqRsRwC7nVyaT",
  "key24": "3u4rwoxVR6qLxzwqvrG134eR52AKhtCdrJMQQKpW389MvjrZGmiMi7MDm8c6LPCkytHbpWMKhbTSS6UuJcdpYAjV",
  "key25": "2pfuM4njGrDy997ak36VGAgoNQAPkc4jwdgsipudGM1eEv3dQgXfUaDzsYNebSJftbirhac1vwL3FYSLdbUx3pqz",
  "key26": "VkuuPzgw6RaFKjA5Wkv8PbwPBFxZGkiX3nVsE78opViENM8C17GWRXJg4Ji9xMcFbufphMwL4PnRWUHPrDYHa5X"
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
