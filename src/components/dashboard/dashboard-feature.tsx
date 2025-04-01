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
    "3uMi8qwHTnJ7KXZCjnkrb1P3NVFsHZWUz9JCLXCb24RFcQsog7ER8kbuRxudxZUWRf7xWr1rPX56jHFr7q1Hgwpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xmz1JXW1Ws1hmrJkfDkXdk61rVZCRZ3Gu5wmP428By7MUYFwbFHmSgd3F5pEkK4TfSgZqhig9pC4Uff7NUCmE3A",
  "key1": "5zp64VByJmxkdkWXH5nLp8UVjR4sBpJ3NvLrY9iJbqbakNVyKiSQtEWUWgNzvFRmrxSwhp3EX9xaCRX2ZnFmjPdj",
  "key2": "2fXqQemehVhSCyHgQcEQGgidd9EkG9Z6SYW7cHDgRp52zitvKGaCWpd5AzABx4eauRXCdPkDBZ1FYMh5CHfztQYF",
  "key3": "5rpKutEFsYgpNTfTSC92besdD7nA34jsCnUXtwCCDwe25PQa7453oUgC1oTFPZEx1JcKzfPC4XqxyHS9p6xDiAe3",
  "key4": "2CC7haYNbyBj3WG4t5psGST2Z3WGKD6ZZYjYZhoW45oHro6RMzBuWWsBhXJKaNQ1vnJUexgPu5bsjvtKTkwS78R3",
  "key5": "5pJqAKtEyY5CtnNJzQifCYUp1qXH47BpkA9foLBACvbyTPE9cfhd97UhBauBYbwBREVKxyGxVwRYcKC8yA5U2Ve6",
  "key6": "4MrtehoBoCVVuTbi9MaFowFfdQoQaxvLd1FDRYaESLmxXoTMZH1wa6YLpnPCqz1apMcNrKSm3VqKPxGUrXTjwpnq",
  "key7": "5d82sqry8qEWD1BCnj5t18ZwPe6yH4HSe534e1JvNaQrLfMCXoGo9HKYpDZ8btvvSEPECwDjUmrQQjHj5odKRVur",
  "key8": "4P1dcPjUSWGP9cfnvWkugQ83CBA3i28GHRDLVx7thKKB7ZS3xXUrqrXn3CotVHwRAWpktRQBZEu19WmHPVDVRmAV",
  "key9": "237kSzfne6RMtpVHCWbuszYUorJUk4oEgzXwHYEZ9FqVBxYzngV57GN6KFpeuat8EA3BP4bUkRRbbpEHXZxX3B1o",
  "key10": "QzDNYHdNMw8XU3GDeSS9JEGf8KwPGEEsyqMmEQVC32ogpUMrn9EkgpHXdXPJXAfPngLXa9YqSrrEaRgEAVCxQ8Z",
  "key11": "2zEqkZ2YosLhzJ2XkWtQCJXWtroc1wUKPStpy25aY1EHArSynfgozhy87HBMnhRnZcpncpLzdijySsfYWhNRWi8T",
  "key12": "nKeFtQsfMKQXagmDCkiM8t4ftZe6JtNrSn3ojbs2xPAyfBm46fZpfjxwsR8BAN4Yk9RXreNkWMW6R82sh82qQ82",
  "key13": "47fkaZPLeqzuBPQ8G2yShQ6w4y8QrWpvNHHFBh1gVhwdg9Sv3V5K3vaLc7jUiTRiiScCxss33z16tSC8qk1G3VCh",
  "key14": "3LfztQCYUbU7viN3HuDLx1Zj931bR2y8zXTVanMXPWAqeRecUEhUWNgtJ8xiKXcQwQASw7QEk51rt8NH9wZYLdQb",
  "key15": "4PC6P6VCDq3vzEHgdpHJfpWjvXK1ruGvzzQ33NEpgFi7WfsiGsfuHUqifNHYq9SNAkWT1n3mbRvgzhbUNCfMrfXg",
  "key16": "5GWQdZKFDzGrR6SZh6QfqcDZ1RVLnU6iiUH4RNW5JNVPNAzifcMKVPnVm5cfiqwEyyh1qk6QtLzVhWp2e8QhD7Zn",
  "key17": "5T18UNBFJz7S66225ZEaDytn4YhJBHUNDKciNL9gr6impurhmsPxicfB9c4uZq9AqPsY3nrgVyALPUi7RCafqmTA",
  "key18": "2pCrRz16p7S7RGrDtRk8nFgFJBwR2nWqYDU7DoYsvcXxY1cznZCvZyd67iu57j4QLGBg3H2WypPGXb8xiJU56doq",
  "key19": "uC1By5LUSFeB82145yLmy4BeupZBHHRxyvKAZ4TT8yC6TcMUuLrbw6aMDg2LxTjiuhrVEUHcdssTMwAwSNB1J7C",
  "key20": "YQmd5G2jgCfEb2sVUu83XSJacsmTzMiX4Lj6h1iut6F7iVtVHCYoKqnWoGwKaGJ9uGvnXMxn5noEGfgJbHpddbe",
  "key21": "5BS23GXcGgHnDCeKZ6Lq2AvuEeNBKev2vSKeYBCkfpCSVxVuFhPJrGUy4x5wtDmqnHnzCjQHdXnKS9AQgER1EmsK",
  "key22": "4TgXAUeSLnf6SizsQfnbGAgUgrfmg6am6f9cCRx4eXyhJejWRYx7hanwcf5qTAzsxnTqbuAHunU7qnmbPFoUG6pf",
  "key23": "gLuyLbzTYMxWkJa92yt7Vu1L76eCXzaC8vMmf8zsPS5kDzzEKRBHG1iWa8xmJAQs58bbafodqXz4FpL6agyWCZA",
  "key24": "2vADXfUnfkW2vi8EYfxzLuXQn1TWSygoai36wgbsoh91av4moUTQALSr16MQzS7LX3PDLbe1s2LcFH4mU6GhKsA5",
  "key25": "4qJJw63Hyu2JtUyVeE7P5NvE8qZVH6Zd4nr8mXXdxvRvMaDkaE2L4vZm1FefugVDUgg771RMVLCQRRVKtNMtPo7J",
  "key26": "kCB3m3Lcu9oNytR2m5to7nWo3TBiYxksQ66QijhS83ErXCfdSFKdNxV9qHHbGiZ7qZGNH9zxg8QkJvrp8r2ydkT",
  "key27": "3zYRBLxJdUXvxGUirf6WgqLD9oz5WtR714p2XdAgK1pRKobG2zarJXeFxAcot3MxG8s5UAfJF3ngfjSKvx8F24L6",
  "key28": "4uLbZWTVmnv3RFhatHzrF4aB7yzRev4WpQeturrdj1FGZ1FQ4tDT7NPcChd6Dr6xc6J7Kk2Yeh325uuCxafG7kYp",
  "key29": "3qmGpLYYvTK3E2JGBQySye1eRogsDCDLGJu1sXdeuVjeEoYz3DyKzQJsZyfs5TuzXmxdSQQ5sYk4zk3ZRK2iHdWS",
  "key30": "5HJPi44feGHZ583tet7U5GGCxkzJEFGGQS5AAVaxSkyW6ibJ4Hui94F5xyNE2swRs8YWLwxZzgTjYVwS6be16nHb",
  "key31": "3Bc5T9R7opF8sez9EQ6hxG6fjzxBoVbryruwkpjsKa7NLQcSkX6pzcaMxEk68xcgb2wkKSGVnVQU5n1Wfqv7ChYa",
  "key32": "24Yg8gYv72xRCBFZKwMakYLuTB3iTypg8inGJw3mD4ayCVreKyJAem2ayNNmJ2uRDsJ9ZDqSrtwqc4YaSt68fNbW",
  "key33": "3BVRtbPAwHc9VC1YicNgtkjNLqEdNNDUnJL16xUiHnbT39GUP5GioB2wkZ1H7AZSJ4VYuRKTRXgQA43sDGQgTwhU",
  "key34": "65UGBp1Tnv2q3WXbGfRRgZve9KovM5cNekCjZ1EscZCiGATAX7jJb9tVnnMPefDSFFnicX2v45bqyqs3PNFiyQNb",
  "key35": "56uq2vPqgcAu1gJR6TqHgiXPmCJEKVgH9rC2MVWig2yQoJsXoAy2LoegBJa6AarpnqymQDiKcidjTaKWi1ocwwRU",
  "key36": "2j2uyB6QxGbC4ZE4hf3uEoZ8tmTfAWjK95FehKhrZ5bxphH9V8AWnXSzew3U7kDg7TrLAcfBXdhRmBZw1MmR1Pon",
  "key37": "2hYaTXwDXMgQxSKSLFXBChEP1WLGx4StBzCE2yG13F64wNC7jegpSBDqfdKBtVmfyVAXuVCHNRmFgDZQrqKbPgDi",
  "key38": "3FNtMai7AtHLb1mUmz1WSG26cXwG4W96YaApKfmSaA3NVqWJKEJukA9WY1NiHZEHfS2vidQyrphNXJBA8AD2tBnE",
  "key39": "X23jUgkdoNmV3iZr8EQj3zEYnD5XooKB2btZBDPc1ttpKFwt57SmKGU9yUp34vGCAM76T7D3gufCYfoDXhssnR4",
  "key40": "5hWSRYRTPT3uweEVd9uXt9xrMZaGkzHVLwYeL89Lin4JfNm2xQnpgGmQ5eG48XxJWyPeyx66ohzGWM17sxBVz8qF",
  "key41": "24cHXGxGrhXW9fdL4TGiFpReenH2UUtophr7S9n3GECycQkZjtU9jiLqciTQT2JBXKeif5H1vfooHGqceYGHHj28",
  "key42": "58yMRpC5jPJpUHqnJ2AL4Ws7EzLXNRnQQG5w74VBSdCxq9PxUopqJKowfc2EYmmBZysWGAay97vaa8699e6bAU7s",
  "key43": "3T5eVLKdMetj8MPfJbZhuQu6LLGp3rqPu4E78iTFX7VjhDTinMcs51j42X4xwMtmaPeXrLfhL9LP5ygBm3zqmws2",
  "key44": "5CtciPjecJH3yjTjynTzNVosF9ewJUtNCFGtfAbkTfuGjB7PDiQCqoTnTSKz6LX72A55a3YnFHYa82rYs7eL9JUH",
  "key45": "4PEU1PnvsPF7KTALmuhvLK9c93GdH74k8yvUXbXEdYkBAAByrV22NpUF4Bksn1YpH3kQWa9fQ1r49fwGyum2hJM9",
  "key46": "4geTJvbNoY3Xnauy4Tc5yGbHpX4Bn83U5PkMuUdiUm2JRDJNCv4QnYHa2CfxFzogTWXVXjQTT6pqXZPQ4w72XmmT",
  "key47": "63bwiV5ErqCADSkFaLRKkWTCsWoAFbasFm6iCoPEYS9E7QNddE4HUWtPEScN2JEafRkLJsupWzLRwAnDmkhLK5G6",
  "key48": "4LbmG4vYr9WwpVCn5pcz335wQUpPozK3kcfkKrLsFx3ZjS5mj5V4wGnuyZkGN3ygkzGX3BkLXx59cJUpFvatZ58H"
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
