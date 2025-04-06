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
    "5G2pPidkwsBgvYhSS9tgxBV9BUZWzaPgjXxfjhzpPhEJjUsjT37yz4XZZsJppEnoRuX9LfBwzMtQU3iB5tXfytDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9ZGewCwxRqhjvESpuWbPmWPEtToTEvhBiCVSsgarcULjkQTfQ4GHx6Wc1ShRiKw75g9UZXiZsFrR5gx2sD19w6",
  "key1": "5RY4NwsEWxbgvGVjiu4YLX96Cj8ff4VPsJkXbU8SUtqZVPN322daQVkGD9b4UYPpxnTE5WA6cKKUHQhHZZnSy9Mt",
  "key2": "542KQCU5kiu4rf2baEanmHj1WJtD9KT65H8sQxVoCG2MXTNsnUqSAjtemiFt7PhCUjHKNBMegD2V6NHVBdm4UmAU",
  "key3": "37jdW8Nyj7VuXnYAp5zSM7hL9nVh7STo5iC7m1LpxsUdDesAQEEnMiL3i8r9QvvGSd4WMB8Q7nd56eiFdVkQmJZM",
  "key4": "6WBxvnGioNLbWNSrpxwjhyxTX7kDDb6XQB9pzEMskNSo8H2Gs5nt3VAYj7P91KoNmwjy2iyzZwPkMnh2e7JuBhx",
  "key5": "2UXw9v17LNStGVhyG2obWgea7sAbnEmzmeWrUKxGcthEYWzhSpQrHBLyWpW7yzDvwduKmTuS5exYLRK3soRcABcH",
  "key6": "5JcEka5Fw4AgbDXAUYuouYbsczSKnFjD1tbdTXLfQJuc48pt34kyHK8KeZw7gHm7j5T3heHkBRcbGXtC3ySUx7G3",
  "key7": "5B4Xd8Xh6s9VqmiaVVS13iuer3jDPjyuuFPQ1cyKyxdCVtiSvrkHcdeQWczAY68iRan984jWmt2eipPpXjcSShuj",
  "key8": "468YwxSK8Z6XoVrrs7zBpj2F5sDSa1b1iDAnKYUnSYhgin49BAJqZPfTPpjgdSWP7LpKgErfzU8sK59L1T4b6uHA",
  "key9": "htaCtvFsy6cJRyNLRrRh6fkrmuWRNXwc5kSw3R6Fu8Jxa772vs8ESvmBQokrPqCzTMV6CEdKEws3Tp62BKXtZJ9",
  "key10": "5QLYTmEUUfp79ecvURGaVW1CY5ULtEPtwJXdNZg2823ndw95LUAbuxaSPbWrj7Zk323QQ6k9r1CJnPr2vs9fCa1R",
  "key11": "3MSjcXWWzqowf6jSk4zi5Fp9Nv4vV8opMdu4oNgcPrFqgU9YWQrL3A3sVWvZqyxDw1WQuarsUpCDDDB5MXwT61rt",
  "key12": "58U8wDtSzeW8HGMUZLthMaeAExFkVXSK1Ko45To61peTCwQUFV44FMZzsz942syABDoUN3zLEqbemZFmBeh2VcbD",
  "key13": "4f6HbuyhCPpt6fiQnHfeogtAY22pASUULLSLfEWxbhRRKYhGWjgDE1jWmerFwWyiHPQiTXsco7s9npEnKzCggbgb",
  "key14": "5dF48WxPbD7XMzrRqvL9r9G1kVEVqpu6LefQvt3JzgNLnn2sAxXx9ubo66745dZRyARQkSeusWkeFESNxGS195cc",
  "key15": "3hCNCPGwPxx1rzA2PnRGJZEE4128yXZcv3vnjpmkKfhJDRYKX5HteavWfxqpNKJbTYwqSV6LyALQxLF1TkYT6PvK",
  "key16": "4391jD8CrAMsn5ooZm5teJK5HGbN1JUr4fZapGFqcEth9SrqwQNpgiyt18Srd15Fbc9Ky64mVX8w7MxuH4nJGo8R",
  "key17": "4BhUs71r6bqpjxsABSfaPPuykZguHoqnkFS8QosvXXoJf3XvV66RsZ2ZY1CndrihoG8yvPx3sSdXBaZSdeCdmfma",
  "key18": "44mF838V3EC7fceyjZ7BkcyYxzmtnLMJ1PMZ6G3M18KcAfGbSGenNnYmbCc2pwmf6VmivHX8ZbYKv5w3tErUWT44",
  "key19": "5TSV3Q1fu25Xp1ijkrg7U2jjkmeArVUMKV6E2dp9DiBnrm1vmB5ZrACSraEEqHSBMe4qfFNk3yD6zfrWNaQixG2w",
  "key20": "2kzvf5C12tcSz2vGbXsL7ZntnCyg7Mvj2gJgN1hDJ1CGFkf8ZdemH29oYdHejfCYHbHLq1DFoPDsMt7KW2oHcFph",
  "key21": "3aZBTWWgrCtEnkiE4Q6EL6ijJ3vQvA8QjJTDZAzP8XmiikfqaWGf3gvtqwLmMD3QV5PU54KBD4UZCVzMqRiHP2BN",
  "key22": "4o64xAxL1xNhB2hv9uXKmV8MFh5UFngZfuRsesx5Y64aYQPvvoGxRhrsstUcH8DLqxjWybxUkpJkoNo44oH4DCF4",
  "key23": "5MWNkjLXYFH9VcKX319p8FVxDXat7KSqGpMbKRQH1UQT7Sy5Xe1VgxnmipmajSM5rdFyhndyad3esm2j1RJp26Mu",
  "key24": "5FRSY4ccLb4wjKJY2P4jt2ibnnKvaCsjYUDiF8JKEdpf15MnM4qnxdMoqaPim2nyzsDzvsjn89HUJCknHMoU2RdN",
  "key25": "4FK13GBjsAtULBq5y7aXArbxVNZ2T75fWYfUnjupR1BbRBAkGNk3cXK64BxSVUnMET6uwdkNUASJ2EsZSWQuBSPr",
  "key26": "ierevWzpWc9U8WUgjpYRQMs38JMkyRzR3kHLRgyPw2biusjFqh39AZM261X3FAgxq5hJeXE7fBcYJsvgQ5fkh5V",
  "key27": "5fvormzpAS6vsN1MJETVMD6m1jBoKYxiqGs6kEVZJizyNeBsKjdU7kYjuUBQfd2k3UdCttaeQtfd1Pu9AZFTXcJa",
  "key28": "5MRsWaTdBoPk2y5Gk2eieJug8XSzP1Mi4BVsDzUmWBwMwgghyEhDZPfZLDhsemYTJpVYvniGkGMD2eJeouwvWS5p",
  "key29": "Bvm4eU6cT8RuBSqwXw1GjYaxKfm1me1gpPheoQuvZfwHC1drNHq9dsfiw943tgFDhCgFPVSo5L22cUA2KzFPEho",
  "key30": "3amSro78GVLmeGQQzNikCNN3dkNH2jYXX9fEVbbATQHozKPieWjy4PEz5AxATgCTy3XAz2qZCcUKpmep3kDvoJcC",
  "key31": "cPS4Efvywq6kbHbPx6Nue3xRz3MEMUd58g5D3d1zLibXNPpgf93ua598mWH3ByiaxzW7SWFgwFoogbxVfnHmYk7",
  "key32": "1JYXnZYQ78PqYtdbqSHvzUJZEEpgYEUE9XxHJzSZHh5ahZdGJYrkoySUCsxcNrYpUgLJqLB5xxeYb67WbmdQvoC",
  "key33": "gtYgzA5YdjttvD1h3TaPx4eu4YqCtGZ27wRScrN6UAhepLQpd8kM5t7GX7MP1WY5MLrjrLfRVWNMXGBdpZBGk3u",
  "key34": "2Pvc3xeQyNpK2ftTtutdLEKUPk625PYcpQ4YEA6TswBiPEZXW8M1WP9DaJz9tvXe6JvkXuFQeyUcHfL65DrxkbtM",
  "key35": "v3tVqubrVyZeZEiF7h6WnByS8VU9J92GhBUcj9pqBWMAgg1padYtEkvB2Vq3uemdmqrw7mVWewTaKqGQETMR6Hy",
  "key36": "2yQMjWLe8CZCzZcXt9j22kAszaCUSSm21yDaAAerE11EEsCS1vcq9xj3Ah4NsASskTd1Bad98BQfcqn5jhsMXjLr",
  "key37": "2vLsXyxerkiJRoBBFaCKwtVvHiCbKSbA7gAtuH1wq6XSKZ9LHHiA8RVLnaExfDKJkaK353RmVtYkVPDaT85i61dn",
  "key38": "44gmDX7oBZKeY1MrGA5No4iEHf9THXrb5HvdHBmc2oxybGTRQc2RwjivM68ePNUxPjQJUGq3zkyCrJdzJaVSPLo2",
  "key39": "53NePXEFdE3qbSwEuNrqaW5k6HBjTM8KoqhkafKZE8nnbSAB7wvM17koRUrgfb633D2bXFBDF5j8ZZPYsGtdMhy2",
  "key40": "Ct7kTAnVf82Ze6ZHBr2HJVwZtiqVrgam8PQM9AUSQpr6kizSiamA2qT6TanZ2afFg24p7kQnBB8UVnpBMKc6sx8",
  "key41": "3bubzaYj9EiNTopJnBbxVShgaufSgffqvMASLciZfaUBQ3ehkBHb6EPw1SNcJWjwEKq3qEa3GXcgCyJFbnUmUue7",
  "key42": "oshv1pYm6A8hu9Yw8uBS8ZTeYT8MSJmyS2tjuUvcrnz8eGyE5qXWh7gg2FE1GA2GPaTEPAffh9FQPkcyANADTXP",
  "key43": "2jcFUHQCwbKd2dMPVNFpXtbWHDw34b63u2hx7HtDNu4H9MXchzgjabor4geTcBrH4fQi1NMkt6yBjgySHKTX39h9",
  "key44": "53XKTrPHf8Ec9TwAEUpSDRNPyrmLQxgRrep1XEAtppHErtKcx1arQXCeUghvuBwMAy26QmrkJrA7MWXkZbEcNyDx",
  "key45": "hVKj6qbpZuK3pz3RyB5JJ5NQBPqVSErAnXv3tF59BdNuMoiYsCQpPL2eLc1CJ4yirKAaXWP2diGSgFyGYc1caS6"
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
