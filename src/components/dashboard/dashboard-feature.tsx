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
    "4P5soSPge22vEgPyjQtZ6yP58ECBhGsHBJ8mwi2e1JCq8TTnAtuhirQbbTk3EvEXMCrXWk3ktcjEbYpYv7cVm9hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6f477zYYU8NeiFwgyMp9Ad1WsRg7ou9fYwFbaNM8s7SsFKR1FMynm9yMxRb1bSL48888GggMcHMummjj8LvsG8P",
  "key1": "S7KfPaAbwnbWY2adyVou6MniyYdxi3GKePRzqniuxuyrHyHkyQwZB4zN5zZ2pb1d29wEaH99N1npGoifJurEytq",
  "key2": "gRuWqY3VUrJ4fdgaF8tLfT6yg8atYoZvofGtFrg1b3KoaFZafRoBaJo3a67ZARweyTMCkDwVHmxLieUKS2hPPg1",
  "key3": "4N7UHDZryoSPXRToLCgXfePXfncvAtzvvMpMwEz13MP6LTkvVHeDmeFhgk2VZhmGQvb1Dw8f5HK1hDd26V3e3M3G",
  "key4": "w5Mj5YbaJeUKgVnaQcatNeb6CJrt53KpYzMh7b5JjBc6CfFZ41u9x9LLMnxYeBk7qBcqeNNLdc8HK1qVTksVeRT",
  "key5": "4pPUprDCZ345G9wjDN1A2iJBe42PCFzEFt3adzTicUA9WfJtVchLfFc9wpwaFSVLxy3T1rxVELbTTWPYx7xKizZw",
  "key6": "4fHfuxiqPLfZspWtuFkFCbtVtxK2oGfzdfFSsSnXM5zT8eDVSRCqBqVGnVRNa7AY9M4AdLBGWsE9Tq8BzcM66bQk",
  "key7": "34GVj2k88jzswkvcu1zUwmTYWUHQ53hp5SK9GgH8f1ZYWPksWsr4tW9gU6hGUuqNfHY2eEmmCft2PWf87d7udhYp",
  "key8": "29nh66d5Sp6fPRe4KwbJ4E2JFY7MDmPNAij9S3SnS3AUMj3pjMVzabemfM4iX7WgkWes7JxTYT4JCQz7nsVES9bz",
  "key9": "3q8dc3iDt3ReujZCEevjfVHTRifmiNHyFFaSaAJ53WumptTrWjLVruP3faGi86xCFdsEt7UxoBtH4pHuk4xC8UHz",
  "key10": "2qkX3VpSJE4y745D6rifWH1X5S4x3qckdAYfNPeqgKpx6RYrQyLCtG3nZ4W3dhQUMcvh4gRzuM8L1MVqxPvQnxin",
  "key11": "36voeRSbjN3SpJLqeRLCQfTMDunaaZi6qw68SbS1maev7sTbTMk2H8qQRTKntqE6Jq4CFS7oGiZR7axcBsvmo5FV",
  "key12": "4xkDqUMEBzf7r7fTehdZ5JfNqv5z5NtVD1mwhV96nN1KGmvVfb2AYgikyeN5HwC7iJroP6149mrBHL342E7bdH82",
  "key13": "pCwq424o65FX6rK6obCxZCzWFAQwJmdCRxmowDX8jXzoFgWgRHBk7vjaQXXZuompSvFqg63NbTKcyJP7r5iPcab",
  "key14": "u99K5tkmaGoG45pDjUftJ4DF1dcE9r2pkVYVBRmAQMUA6wyhPAeNs2DR96xx8vEt6nBXAL5GmnSCPJhqmJnN7bg",
  "key15": "HP1QZyvF5iJHwePcbXhv6j7sCqMeHN6JZv28jphxXUd5X9hKYkDW3hBJV8jF7Ciqbzf7XRApVJXm1rBoxDijfH8",
  "key16": "5grDwgVwBUG1WXhMk5C37pcBk28uKZYESjM8vV6QuVRVXZnSjwsCJLCLC6Wqj3giAAffqTYMQAt9o1TsikEBC7ok",
  "key17": "4Tng86J8VR8BN13Ey5FkRVS13QXunCMppyHfb1zXu4EsBqLjAswCBEA6KPFHWocwvvbjccxrQj5KAf2c7Nqg8JsR",
  "key18": "5PxqyUi4ohqPeuSXTfvKeXFqP6TG2adiCfdw8Q3qDF7ZVASit27yiJDGaanDDvRmi7keLTxNUsG5Pnxnffi1gyr1",
  "key19": "3dDjwLPanNNP7jCXMN7UuUuZC2z6VH3sK4jm7t2T3272ACA6oDGB6cbhT9YoQY8qyxdvZLgkfQDJ61BAqw7bVHqB",
  "key20": "2Phk6JAJCSPJ5DWNaTjgjccsQtb8TdwrXLiLuWxL1ybj4oRUadFCoYiDWMQW9T4GE5CaFWFvxwdJeqQdGwHS8SCh",
  "key21": "4ENVWAJ8F5ZZoJB91gx3rWpKXMzsBmpgBAG88mRvR7EU6ozw5ybGdjNNzdonz1Do6SXT1dxQbsmW6sRUDhr5ZsGD",
  "key22": "3kdDboY1xG3Y1hynMNobQrdyhs1FAQW9GUYcWTh89SW6WqJh7PkJRYoiMVxScqYzt5oEqCpNZoPKcCp1cKZgRL2H",
  "key23": "yqUZpnH771Y6XXM5xR8yvATbp1mcEZQ6epqSAGunAm9psr4Xw5XMhsqmSeWp4XZAuDnNRURzRCJU1qxEaGHq26p",
  "key24": "37CJAiwY6EEm4D9ABVACbJ77Hckyt6nVT2azJxWYioUoofCeQ8kUgPFp3BNP7fmGR1tQwk1EwRpzT5tmvW3SmLAR",
  "key25": "3jVDdBn2zoaAjXSkexiTRimmEW7u79XrcXMsNZrUZBhErMmbhF7DLE6Z2qCdX3Pi4qgvfzqjUScoP68xeAdZxjye",
  "key26": "4L6ZZnb2MZBwRJNbvS6UtKjQbpw3Lv2uUeg53MhZwAExobBWTyaTs9WYGEvWCzDGsm4dYrmEFY9PdjYLfK1K35aU",
  "key27": "5FwrxrLFG8PFnYpYtQsP4dmzDSSLBptosdhNo3yGPNP7eSTkPG6DA9daZZU1NQBwBFP13cxypXfHwwCbSnZ1nWnz",
  "key28": "5BqyWqnbGc7BS7PSzJRqDYZeJLrjXYiCsksmxKAoGWE5kPENNsX3jHR661gpi4k44ihyyaEnSBFThg9GPzzEH11t",
  "key29": "3BEC7PG57KnaC3sy1rUQc7sS9S6HZz6nEEi7cf8QDxpg6zsQ8mnrKi8E3wPv667ZbcMJdYg8Z8rYZ1MhSbdeF33D",
  "key30": "4mrboGsjVBQetYaNRD5SLXBa23kf7kQegUE3NN7yizZ2KS1Pa89UdeedkKJS7E1V2qB8HG4gKMWnnnY7se3iuCJB",
  "key31": "5qFWgxb1EWEXcK6RvUsykuYvHgK8Qdph8oUuLRKjdZnnAaVUMVBi3fVWc4azwyn2mA7WxgdE5tthDuk5mj7t75Wd",
  "key32": "52cxTcWxLq3BkJPCmP6T5mNQv9wX9tuu4LJpgH48RzqndoZcXY4hsoLrERso9yLcrgvK4qn7jHZHAetix3enRvTQ",
  "key33": "2JaxrcXEcSsMCuwyUdiFNU7C8fHpVAbBGi84ww31e7yy3hwgxATswsHaFFKVZxUVAB6vQrQ6vpRsVJPBQsEH9vFX",
  "key34": "4ThsmujLEHjWuusWDquckaB1rMPEFy9u98uqFP9JTdJcTeXb1EYvSbYturJcBepPfJtuSRD5mVLpQ4XBWEBK1tym",
  "key35": "53M5NL8Qm6KoArckMpuMaFUtaxGtSH2cAq8LajBu5tdogbQ4p3iQoyV2FogsRjrJEyt8CQjrgnwxXeDPHmfqxMWX",
  "key36": "3hWL6XRyGwiw4DFZpEvGdoDPdKYCihCxScJ8kvhhHDVRfYRWNXhWngaLniA1JdLBQUejbJUdE5Lhgj4FqZThM8oL",
  "key37": "aKNGdZmQwX5XG1QGrjYrJTxrEicpWg3TQ6ZsZriP8uardxc9dikMTNJ3AGLpiuCRnQgsk6RHgF6Ua5YsEwYrKD8",
  "key38": "63rHEp7sxWE5WukcxAVKsHXZP3EWzuxzdK2SrYVnqQpJ5LfvSBbj9CCP1enw7PHxAMoMGqmnF3iQMe2cYL1rtYfz",
  "key39": "5W1Nht5Z8q3BtAMsCXasToc82HdtAnPqASanPNTBsTpjF9JrUcLJjoxw6THz64dqUvM69HwijxCnRUgSYDNfnynR",
  "key40": "53ybz2a8Avusc1Ly9sJf47xaAYtf5YLckSnFd39WpiatsaWR4aXLhFPeUsmF5F7Cf5vvd5GFUmC5m5HDWxmiWGN9",
  "key41": "2wwyDDXv43RFEbPRxMwh3oFH4brAJPdtE32oHtRzWoQspMHQDJYCF7xVTQL1ARyhp4y5edQUfAbfqJVARkVm7EZh",
  "key42": "9JgGdpHQGdfGwQv79UYkHQD4vc5Q47B82REqct3PeS54HwM7tTmn7SSYiVabMFEg4XJ8sFSUp6NfiUWMRKejX42",
  "key43": "43hsqWVQ1eEgcYW6oR16d1hCtonjbKcUuwNNqrj9y8FFGyQc1mHhkT21QjKTtgqzHqxfunkufaYPyJv9YeZwwTri",
  "key44": "4e1tNpq23Bb1mC6WS6gQuSkUmt9r4RL27Cp5fqd24yn4NyhtxoT9KjC3PW4iQ4ArMWdPYE1mB3EYZvd4ndpAcQAd",
  "key45": "5T3aFLQgwULPNsCiDA762kcjUpNRuganQtejA75G2KWbxWLGimyNQTEpu7xuihNnVmpUNfQYyNc2pbSEviU4prou",
  "key46": "5xpqrJkc3rbDLSKkmirChjyaiv9j2sguqRjiCwcVsBP6DF6xXKJzfrQz1JpwAN3w4DgU2KDYc5c3nw8Fan4K1mdA",
  "key47": "2NLLGMd6oMEtf3XqMxs4trbYsQYKkSu9UN8BtKBRRUpd1FQC1ed26d5JchVcWyQemr32kssuM1SrKvJediAevVDd"
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
