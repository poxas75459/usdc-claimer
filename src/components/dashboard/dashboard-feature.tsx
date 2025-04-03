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
    "sgVpREcx9hs7Var3o6WSFtJRgrowqhr5YoocE14JWFo58pcXvPJnaLL5a9ARi7FfkjPNXCBbyDZFtXgGe7WF83F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sG6tKtpzK5WiyLW6xLe3mnoabXwhhAYCDU4agXxmE2GDDuEh4x2KAM9nBxVnXs9RsCZ85Rm91JPSagnv96icbaa",
  "key1": "5PPb9obsWuHwM3xe2BWxKtK1yvyGFZAgAoXk8i1WhP3TMNPJT4UeTzE69teRm8Est3KfekWXm6bXz8TtC4cmGA1i",
  "key2": "2EUMTbi3vtv7Zd8sH4xB99GDesyMhxZnuAZUnnZpmU6V1CQEbJhnypDMFC7vqHPpBjyZPeLKJLuJJxHwgMRCbKhq",
  "key3": "4DwdVEJBojvaRby9TwkJ4jJwTwaqWohjEMFQP9bmbxJHJXZUdPWDVD3V4TDNnSyTZUUCZVQ9PX4SD8b6Wt5esg5Y",
  "key4": "PL7f7koWBD9sS8wWSaTYNVPWvameKCXXRckRfRnpfcDZicaikoGSrkRwA6dWd9m6qMHtSk1H8SGXRhbpYM2V5hM",
  "key5": "5F573AQTnKb4ynWmrXrB979xe5ZarVrcdY8b94cBBCawALC8ZHTTzxLykE2xzE8gf6UxXBWCURjWJYsy3HLAbGh2",
  "key6": "4bR3BeWwNGw854DMWqqXEwi97VvqRgzjWVjGDRFtVG74CPNmGELaYuSHZww86KEG1J2H3bzkQDSTu3thTjXyThTG",
  "key7": "2hFpfoHar4PQeQvoKpbp2UA81GZcSY7JekB2rLrCiVoWHwyBVFBfQuYBSquHwFbMkSDpHBBpFNdHGSDjmw5PV3UF",
  "key8": "4ThoCGSikLdBhXDUtXRT2hs5XBH2mdmqHZbzJHGLwGstZp2VovrjiW4haK3gkfbTZ5HEXGPt61A4huFQCXaYEgD4",
  "key9": "5iT1fyQhq4PWXbUB9pYEt3TES656d4pYVoaHcVfRBnMDbbrv1c9FFLMe61K7utDB6QT2LrzVghWPC7NMdzkQWEWd",
  "key10": "562DkxkoVVhWtWZGLrvH2yvGyzygS7X9PAyniE61HyiaoQvmSgy3r88uC9K4ESybAsZKraj5KpV3eQccFUNTzwZh",
  "key11": "3t8yLqDaaYurt6ui4FdJZP4ou9J7caERbPdZPezfAszi9QKtYHpkMmRVcG8jHGhzUuXtzoNe8yqhFCyu3Ed7BPRA",
  "key12": "yDWYvTURMGv3ViC29mHke7DFwLsmakDtz8SRfQr9xs5URJSSwmbm2UVPXHKQbjQbFJcuQVUzitZ88CjtQy68N3C",
  "key13": "58BnkKbXu2pWQtDvgyVm6D4wDBxLZ1eHoyN17WKaX27eBNhdhTRymYjVRCHkhTbFbRJhYRHiGDVrTGvRNrW8rLNQ",
  "key14": "47SeMgpmWdKuVYDh6hwH8sdiwvcBSPGq4okJ56HPRXrynz5PpsGKZFGeDKEGBWvWsBnuiJfuo9WVuXWEAgrWQxou",
  "key15": "4vWhTTCFNN4oFTwkc5knK7ubm4gWfaaRFLifqFyTFd3Q9DEJCDemjPFSJ4F756Wk1KCXNWcZFXEdHN4y6HRzegXy",
  "key16": "2kJeBLZkqob6MSstyvaUS9LLF924riiUnzkdEum3iQr73uP7fgo9ZQaahjKnc9DZkc2UgL7nAQkTjYxSUb7tNfpQ",
  "key17": "2U2bDLZbFFdJ3DhJUEg3HZzWSB4asCZm4fA3Fy7unLaRXwqrXtwZ8GGtDxSKoj2qwD67ybXrBafg4TtCYdAQCWMk",
  "key18": "4xDuSybWZVXShmsieHUgkswCsqAoi881MyA8Ln1eSyR6p3Z5GjrgDbsQkhqf7P18J6LYbaBkrd7gz1uvBvZUh8FB",
  "key19": "4uNCyiNyjR4wY4SHoeZmBkVj2L3fgcWdVXjoZqsazu196p3NzXDnWnoE51ZWU3QqZne3B874tcXWtz2CZMgYDkeP",
  "key20": "5mWPmstou1Km4NzWeNLM8qyg94ejEr9TDDhDmqeLaTbwff5Y5cCJ6aU2DqmNscjcnBCPEaQVCVvGdJsiY3wn7XEE",
  "key21": "2vkiJakdUnCiQtMmrFeiwGFEDytE9tDS1DYaNTAGKyrjyR7PrsjMuamXbS9nNDM59EhWiwonqEioBv5pNRHweqim",
  "key22": "4fFnBznDZGaPVEdFpJCW511qoimYCMsY7DtiZDNSrTGNXhq5ZYLn38FN7ydRA5RKEQAkXsA6a7jZuDA73JDMhQLY",
  "key23": "9zaX9Ssu3gfFAPJ8hYEZixKUfubuiodnm7N4YWNRtkkdCR2BeqNeS5U5ouREFGzP3w3aR1bvQfm1YG6HUwSTVRd",
  "key24": "3hMUyfHh4Bpda3HDezrGfbUzv9p9o5swvtr87tjx8dWqWHP1tfJMef2DkuGsEDZsk8seTRghYENTS1zXo1Fpeik2",
  "key25": "53wVMzfrJ3CPEXr8odzdHZgJY3GB9ARsUXR7vXGpjZGRpqPesWVUK1yPc1nd71m8CeAXdDA4pR8iSjwhbm2RarXX",
  "key26": "5J7Efn4vwfnR91C7mLkJS1icKRPVNW5ySVGeN85iYS141n6g7SEhtC2yMjnsgdsYrmyQxXirP8ZdGgVSang2yBkC",
  "key27": "NeGEfwAJMJNSt73k84GnUtw6LJDs69CBng1LBaYEPuXiQ77w2LEhF6gmBTWTwhhXN3E5KoMqYq8TPHMVTKqucZx",
  "key28": "2CCoeDT5ynPoqmvXecJrW6zmg3TCRXgUGDXWaV4nQgoP5iR91ey6RM7ZGTzcmixDHmtYr1uMQ1hCquQVqMgTDUjE",
  "key29": "62HLJPV2GHmRC9DemheSyPkFsY9razRvTRkVB8Mt2XJ3PiB79SfsowzQx2MnGy5rCWycXFB2AAwWtmkPqxKKjdyB",
  "key30": "3jNTpVBhpm7QXsSPManSB1R322RUcssMCNzmZ9s85h9jVhT3JbH88gyjFpQNgBmCx9SMYz2KTV2x3LRRGYCj8JVQ",
  "key31": "5uQGNpqYAd78wbim33p28563qZbZk9Ui48hwB2HkFmhXhShZpVZBpDE6wa3MxAJMHsZW4BpMonRgGvoNET2v626z",
  "key32": "4anWrdPbCQoTS96UKrENPMan4jdAUcoHXL59KgxAg5r6rn68F4EsqbJeRu4cAGdKgkGC1piDwY5g7NdyVAZHRbk6",
  "key33": "2fNgMemtz9WRSVxi54fQmGJMXzXvgCTwwqCMfeoioDRHrePJvFwx6vP6scUs7UoNDxB1xsgRmMS97WW3KaNMqH4",
  "key34": "2dJfNSrYgKhWh4bTe3cScTwqT58YbFJLHGqtFnx5fSbSKmirgJMgT4oofapgYQeiKBDKXd4hgMTqfH52LCjp9nSY",
  "key35": "5oQkvemiq6i5cZ2TmM81yed77j4q78XJTgJJTVPoc9Mz3uqoxCg48YieDA7ABSUFVBDe2GbPycTSQ1sh1iqjGmcN",
  "key36": "jRii9XnNx8erJYDjRMeDWpCZWTYgPBrpwmyz53QLmL4PBY6XnneZr6V85zjAprvL7Nnzz4nMhqpPm5hhbxDRUSH",
  "key37": "3CcGnsvtBz57ccVANwbgxu5MjvxAio2cyQpvqBgkfCNSRKrM154LBYkLqDswABKxhtqYaZ1uYbrPQuL6cjJaoKDn",
  "key38": "31o4SmSC5oYjmpUgmbnQzW1rzUaiKjM1eC2D3aSjJ4bHYkj29cgtX6QVJbpLQsuF2SP4MBpTV1kJP9pXHs1rXLNi",
  "key39": "3XZu78aDpyGf8e9UUtDYeaWbmys3gbVhvZ3AuEWNJfbVmF3rrdB9sYLPcE5cRFaqNYmtGxkGmr2HA8BZsNRudTse",
  "key40": "2CwPE3PQVHoY4rrnbmNz2qgmYpsbX7H2n8DvncZ76YhvHv8VCSbw47y31fhwEgDc8tvNdnjsM7mQx6KSDeU46cvf",
  "key41": "5bJNzs8Qv2wyRMELKnAe7vcbTqNiVkiY45LDMnBog86PRWvbbFgJys1K9PL7NNyaFCT7czaDQyq3pfrsyWe1DToJ",
  "key42": "bXLiQX8PbE1N66rLwSvHeoYQoxa21LBWy4c4ySxmNCcokcD7zNoyVTxVA5eF8ipwPXq9iDgkfT3Jd4DpEQLQ2ZF",
  "key43": "ojEzXiVzJye2Yv3ByXesqDkHBQ7x3uycj6BFk5nT3KvsgxeKgDLQstvmHHRbw43jxvqm6ayMhqctPeTz5x4eWwg",
  "key44": "2GgMcpZ5CC7e59mbwhpFRCikS8K1Ep31ByfvRkwdNnFzZPSo7WpgNhePTnbisx7B6XR45uspJTXZULgHGj5Yd7ZX",
  "key45": "2MrFjTJFZLEnjzBzrr9zSpR6k6XqaXWiUqPDm62ZT6xo2G9e865ty1c1VTJY1YW3PDY76d6cx6zViZm2Q2F3dtpo",
  "key46": "2qpv2McRrdV1gbiPXRFqHBonZwvcwmLcPJGfPXCN82LxTzBfvea5LyBLo29f6QAKgZJYQKXw4eZUg5LfTz6UMbYy"
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
