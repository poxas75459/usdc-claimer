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
    "2UeqAiEnEYCxMhP2tiPCX2xVvXHVBKe3AaiW4UnNs2awwe2LuucE3cAdkCHFNJdabKB9THRnrDcB4SxsRVkmPtaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AeWeUF5uHnsBW3oMXVNaDsQwooG4h4J4TuFRJBDZitvPAWBHPsi6M4JwMwaRd6xhxvTqaBfqgN2xqwZiVq6qSC",
  "key1": "5LQEN9Do35YP8x1bp3nMr8pL44XrEu7PANVS1AmCtmuUkQsSqWCzRCgw6Frso1cjsouzhB9Wt2JBq7YqGopT3Peq",
  "key2": "3HBSbZhaKxTcSZcoE9s8Ui4u43V4Sc1Kg5oyywc5gkH8cqiUnGSA7XQ9gRDmvrNGP45AbFKayB3LWZ8rYTiewm2j",
  "key3": "dzJmUXXzwyf4FKcsGBvTD9ApDdkLdMmnSUTnN2kQaPMyncFYTebfknahHCkTsFbMTUGaAW5bJJ2c6UcLm75jWLK",
  "key4": "u1NEW96BjBzHpxmi23zN7XpxpM4hndXxjjR3s8oZ3Z1YNk4HttWndBydnaHjeRopw54Hqddafei6mHhHBpZQX7N",
  "key5": "iSPTo4HZsZa1RxT2c957AfKqq4SiJ8yw6oJaLKY18WmaFfvvsjsRknZmfYNbnYFQF4pFwYkq75njCKEeUFj46aH",
  "key6": "5uyVM7YQ1xD9EAiHqVHEBu7uWJaC3H989uXEvqd9yVrDthk1676f5uEmkM48pnezVLaBXGv4FxafNoXwvNsqdCWr",
  "key7": "3S4ykAcCTgavQpDRXMrXm7Wie5K2PUt6LXb8fQMtwA6F4bJjK28cWc9pxqrhWTqurK3uBkmdu6K6Bp7gWqwfwFTG",
  "key8": "57vokcdUMmHsKpm71vE6GtgLBXjH6geu7tpNZppMhHNtxqthhxsAxG4vMHK8BTZWdUCEfs9WksbgmZJG55D1wYFb",
  "key9": "5ACyUHBHmZJidMB5UR9igk48ZrKEb3cWraWqcJm16doNP6BSrgkkuW2NVKwCGxaPnqxkFJceBkFj6SbaQ7yDA7zH",
  "key10": "3XLH22sLbPQP961auTK6BpNV8isqVbc732JWyHsnmoQxzVRVGV7YdPeSNdaj9aZaE2SCGHvE1qBZ6jjbGJyrdG2f",
  "key11": "4ym6qaLxr18kquNq9HX16SJqzk263dpxaY2uukauW1MEKQQKdMrC8c1Z7bePYbshPVhBpRMo8coVQ3GxcxVE7wX",
  "key12": "CBYrmf4P3kXWhnu2VVPL3GJ9AfCGHBDPeGs9AkDDg3pLnCndYGxSvX1j4RNaoVnTi3ghj7cLiDN9ouM1TmY9UvD",
  "key13": "5NNDt1bJQttD51A5E85TKcqU4g8vXaFZm8Yw9ZgSY6TsCBynLCxYmdcZTR98MyauZD7hvhP7GCPjv3CrXcNz6QqG",
  "key14": "3RfY7LScJ9VVTd8kU4KQSmevoWydoHtNqse2k8Kegz5PnPvviapSfXgLbdwHw1pvJsG4jEmnZcfPTZB5bnskNYCG",
  "key15": "49EFb7XXeqA5uRZN6ddFBHiB3y8ohxrpyBdcZyVTeQ3xfkKKuVp8zqgVnwo4fCFGpZUNAMgfgp1Af6scLAXZQJVf",
  "key16": "3RGG1CK2MffVnitPBMYYpuCYJdhzPKFLkzLEvNySbQDw25f1r1MN8rDmkvC3xNZvZTuWcWpVUbfFFmtEYKidpe1j",
  "key17": "3srEMENRDKvv5Awuc7JvgRx8x9XiTeSVkqrkMZq4ZyV2Qv5gDgy288sZ4cWBcpmVwcHd2VCzXdwN8wjrQ76tSDic",
  "key18": "4s7PHMJYxmAHcQGnJ5Tj5Hd2y8uVypF9cD4UNGQ2Nnpb3EeS1ZmP1PkbRYC73xf6UeKN7A1VQ2t3ubaofuCid97J",
  "key19": "4YYL9ShSo46ez7dy9eLtfZCSJejWpAqnmJP6fX6HX3XMhMGV8rWxzR5buKykN3hBPVzM3R4ayZomJZohAvGGo8RX",
  "key20": "2qDALsMUx6sVNQfbh6ASBVFwnbvkS9RzJTerSjG5d9UHXoHUtZejXetM1PLTRyCe5MYiyWwJNKQu2Tc6HxX9ng7m",
  "key21": "Ame3cmFSrWSnAWDHwkxKmKND3mukyybsZxYhvhBN7W2yux5VgvHnTtDg6pbV3aKhRBgjQrf4XrP4S9pWJe6uCjz",
  "key22": "5aTUwgZqe2C1EBsywgC6UfU3aNtn8oJCXdZb75zHp1dixyAGCRgHiCixgH2XJAX9ZAMAhgzrGjxbLeL2QPp8npQY",
  "key23": "3fiL36AQeemAwBDTN7g8iGMB8MMEwLVgk7dgDF5ZJ3vYb9EVe3x3YJigJashMB6JXvcAtwwaBCJwsxadZ2orFSYR",
  "key24": "too8SxiXzjLR8vidFzepHnMnqQ8YkXkELiPbBaDaHUCdfoY6wcdVBH7RuJu2e6NGzYLYSXKkdxAkqhafQ72d5ci",
  "key25": "4PfWY8Gsgn8gyusoEzGci1N4DficXEVGqxi51GMHZrRq4U1K692XUWofD22De4HfFQETb4ebB95UUoJtXRq2UjXv",
  "key26": "aKHiYsw27K4R1Pv6B2q6z3AoGyRz4U9GpLo1fEWUgZffJ9zKSuX6MdTrHEXNEgbdyiefyhGfmJqWd2forpKAy9R",
  "key27": "4xXx5ZvfRjKu8yWjELxUzbjEbqeihKNbxf383e8GpQYPPsX5mY5cFGsqodEmMwGKUpyLp6YbWMzNMdSJhzn8QhN9",
  "key28": "WkuVyBj5Lxf2Z1ssBzJdi7FsJqgCS5o83qh7txvTX5JkkvW6zoCEGBrZbhBbPK4zbk1tovno9kHiHMn5po5pqGM",
  "key29": "FUr2zE7koB9e8ZwJw3e4NyPj9FhGSMfVXUEK1Rp6KxtigEUwFiJgeGiQiP81mGj5Ai62JtekdwoYtkY2YHvsHGg",
  "key30": "4XZhf5gcMrQtt6SMbdYXzVrMAcBpvEN9pRRb8kmmotYzYFPAkewU4JMJKLAFEgeBb3yUUBR1CXb3xpu2DPkBqDzd",
  "key31": "5t27VV4SchCwajKKcackbBNWeek7vJiSQbRdszC4XrFAgHAKbukwe2dX1wSzMitPETrsiiuUmjTjBSgNwuLgFnD3",
  "key32": "4oS6c14mbLC4akCPgQwqdm9M7mHgoKrp3E2uZguKnW7PVGhoxq8YVaDgSN15ZGYv54h2fDwMp3CMzwCRN2SG66bk",
  "key33": "2p6z4tfRNRfKx4EJop7XGgZ4Eq8nKN1y9axRGXpyTgD6fhUq33JCmB5UUNE9dPZtuU8b9b1Us7QB16xHXRmKzWzL",
  "key34": "qD9CYzKn87773NkGf2R3AXQ7XAoFHGAUv5Y9wH4mK3h24hrZU6cfVdiU1YH24s83m1LaDgbxRHZTScvsxEfKkYQ",
  "key35": "4BLfwr65Fa3z5e6e8zv8zncGLnyN4nKCxzgNsEJzkiqFAgvGhLp8XZZgUKmELSBrMAyFyEMM1LyALzVWKMH2pnoQ",
  "key36": "5gfunuaWzQH6CYXkhBaf1szTuqSA7VBfdSyDXQFjLNor5NWKTS2L4zffG8RHjF4L7Ycs8R98VAoSe89SvR1xY3kE",
  "key37": "3AT44zMHnMdCUzJDik9VoavoprhLDCt3WBgGqrFWFu6BP46KoULfbNmKSEMEEwuRtoe1fbWp2At781vdiypwnxzS",
  "key38": "24ozzBh3iYSPLYSagDzbgMzjC9whUevtkUdXP4NVeSuBb7ft6YiZa1KR6FweJP2XkcJGtCxDfbat4sZZmCy4pEAf",
  "key39": "44axqUbvdZWGomtggjMzDBfUMegJFZdwhX8DgNMKYkQuJi76CPQEkus8LgZ6keqreyzVHJcG91o5KvowPgbC89zh",
  "key40": "iTZCkiGPuaNkbc3Y7hBSUkbF9Xx7hwGEijyPfUEjLy6TKLpR9FDJC1tZ9QjtntjhQvn9UGPgUgd9USKckTWtGsQ",
  "key41": "4y64r6w655Tv94dmHccQpjBo1rRgWBQgyJk5iPjkSMcuVqDiSyENaPyiLj9bbhnwSei5LHCLej4hwHgAFJGqRhSi",
  "key42": "2bxpPThTHS5xtS4fhfiLioZdScMh8RcG4FgrnnhRCVNApGJsaiBPei6KPL7MdCr2WoaPeCMebfr6b2qXG5UY6b8j",
  "key43": "5vuKZmB8wU6YhGWxpxGmHhzZgmCnSogoCHSJYJj6HfB4MMN9RApCCwteechFRzHTtieGsvbRhAVc7NcxbqcQcBqs",
  "key44": "s3tJfirMrBTVCcLzhiGSfRgRjQuFW3V46ZBp4THy9a9MiEP9sVXqhp9YoetLXrAwNuewTUPCYKhsij8xkT4ycWh",
  "key45": "wLUsM4ndP2eyPppNtR9C8JW8cecdDxKoDkMMBoLWk6zcJrThJqHws1PqYyXFcmw2157QUEAmE6VWBfWSMMW692W",
  "key46": "RAFcp83yjqUG8CnKwjdSRbwDuNsVk6Qi1swBfg2HiRe5f2XtYQBQGMyoqkeZ87cvcEnBjyix1yRCskQkNUWtfA8",
  "key47": "2EhJJQfH2PRA7q7g7ph978Vz8ZpXc5gcC3Mm5fuBNmNipEwnAcKiad4EoH9ZqjcpurPJck3Ct7xpLJBpR7mrsx7b",
  "key48": "ZZj5NbqyYYHb66DUtPiejVoQQiHMxDmn9cKzcLR75q25JWWhX5xerZzNfFjz1JfSoKxTxkuACKR5Bzn14FkryPm"
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
