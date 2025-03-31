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
    "4hX2E4bbPUa3JKCN4yy5CeTxYVbbJvBBuqnuGjZjN2VoAEwoU1SpUsk6mXiR8ubB4yScVjFRi843JuN4doFm6gvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MTbcen5VDy7ZuzQwReNFU9UkieBqX3Q3ZGZGPkg1E1Jm5AnfNoZcaNZe4yahqHgw1n1ZErSEWThXFsosyXQwqyR",
  "key1": "3gcUbyfin7MwY1GweHiRg926XsmZAdazxqM46cusRabjZsa8jKDXdxoDZZBQpN4AeLbvRB3J7P7n9sm1WuYwBWmn",
  "key2": "4wMqNWLhRqrhzz9ZHs3p8EMQtQCFK6wZnx3MDksjZFXyo4nYBYjQP17rc66rqAGNCVfWfTBSkwi98TgpQTZsU7DE",
  "key3": "2DgsP16guUn3yNXRVVkXtKTw1Ctk8kY4Gr5EGh69FY4TzEJmmpNMJHFMP8kssJbo14i5HGs4r9ebSpNHPEU3EJBR",
  "key4": "5zYKzXWKmQAedpEADQg1EHYd9kuADtygnCthjuV9vZD21BVFK5QvJmJi3JUs2jP3PjVZju9cnY6VZiPEc2mDQvQY",
  "key5": "4ai4m35iXCqwi8fpiHMQvT6uKEageWST19Ej5ba2Hfo7rv14gKaxaWfuAggbuc8DeXxvmTUgMDBtfh6BWkqUeqhr",
  "key6": "K6T92mf5HGgf8xCpfirCgF4seKPdxStayocSZja1eitqp4aUW3Q16EkTjCqa7hjgvh8BkbCTEk5yhRNHtw13RMA",
  "key7": "58FVSvwejQT36Tcp3TMZJaMEcPzgfzietE35PZbUHEoiEnQetc5X9zQqR736nam9gnvCriZcacN8KmnBP2mXmYnS",
  "key8": "36SUwafCDcu63zsuMnsiQz31H5He5gEGAqFcDRT4Jp2y5TpkwCgok54KBQNb6R8Gkr81sqCVhgjVx6Fbp7njcosU",
  "key9": "4UH4JKmrcPRANAPpUSeDd8tCyW53uTERpYzVwQCuXMpbXaFthCeMCtuwpw8Aws4igD8NwcjM9BZ3TWHeP3GrLdXc",
  "key10": "5CHVy6qVjdrkGMq765ZvPVFJyrHnmEye4HdrDk8iV9NNMiKqqbUxERUSw2v7dpTniYpmzcSDqYjPbJ7xBacXKpZY",
  "key11": "RSeAUMngPx3byfDq4mwqf48syY9Q5c14nb4RGQFpyygPFWsRVDnZvyfT4ZcwkBEkDVCK4YgamGGsPvY4k1aitCk",
  "key12": "X6qSXU75ZfVwW3igevpRnmLJZ7QeyA9gVdvwJEzT2hDVUuRp4znNDKqsPAiBeS427VMZ25Xy5PYJoBysUhT3FcS",
  "key13": "AVtAovt8vGAcpCajNJEgx6ut9zvqxzEdppwsbidhQBYbqjAYc8BydhfU148MBpdqitFe22kqp4ZJzijTWBP6aDW",
  "key14": "4ezESR3N92nkTSsFbQWNBYxeq9MmunvCLHeZrYbaGwhMihjuEr53Y55ww7KzLhkrKzNtiaai2HiAvc4GY9q9qCzX",
  "key15": "48yjPp148c91iYLrvYPRxfRihfFgouYPE7vq7kxEcTdL3TfFX6J1DCV8sG8QFLKZ5HUgZwcfKe8DRV2e4AikQzKb",
  "key16": "5k4enR9hjiMGYdEmLpA8c85dMBXRXUopChWraKM4GQ5JFBh9oEWKNW6QEppWtHWuxWwy16EGWPEwXjTxENMDRcV1",
  "key17": "4uw9v9bTcbdTvqjVaNFcHrRHxiUgLVuB72pqu4aE1dLbFmmYFVcLLiZRb3UNbGkcY7HHsiURdyAj7Wp7H5gxePf5",
  "key18": "2bh4Rh4CrNR1bSmcyLRHkQTboPTVL3KSdqheXGPwLfiDUU3CzguH1ejQ5gGNz6VQz6DodxBHwVqw7AbZpaGpqhK8",
  "key19": "4q1rdnuDjCwXXgbJVF3pZXYZNW7Z8y6EAFAJm1CmgtEtZD9wLAakckaHkz2Zs4yWAtTdGvdqXXeZGDzCTmccsT8Z",
  "key20": "2t3wHze8QYKfQnAwV7CEkMA9FaBpCtpUFHy5omAv3p5sohtdXeKk71UX8k7Gfv6vvM1SxKfsjJmuNHhgcP9d9hG1",
  "key21": "5CozuHnBAS5T1id76ygHV9kt4XMecpCH7u1v3jjRJjdxrWaopvXAx3Kq4TWbNEm2TEuyrJvPLc2tpikrWaWcEbza",
  "key22": "4rdZTn7N4QSnPyZdZu5uBeTY3sYyUoV3AVNHVh3hZq6gZ5njWxjYtasetQ4qhngmYdsJiWTMgDLnCoVYb3He8jSd",
  "key23": "25sWwhFmVGBNpFMCoMZMoz52VAPgUTyK4mZTAADPDKW5AaHBJ6c7Cqj64ySuwR3jqNoaTnLxb7sQiEv1bpQfKUt5",
  "key24": "2AaD7zwqnbRx98YwTDUSDbHna7Hd9wsCFvGx4Aqicy7HMnbczqxTFPfqpzq92fWNxeKjX3HHYHzVFPQW2rf2CZ6m",
  "key25": "4mKqJsbJbxFWf7XT4FbyEJuJr7FpmSkw2L45LwvWKZdQ6HDGsd9ZSDby7kNuvwbC8MmQEfjBX5RMcXySe8mh73JM",
  "key26": "3yT3NRMWT2pzBGEPq1UZEBVR7NCJGMwx1cUfnX45VGcxLhwQacjygL6ppdc8S9efLzrhgG8TNpWwYPQPRBGTqxmK",
  "key27": "4XDvXF4hV5sjXpAeFpkzaEvASBdvkjLzxj74xxv7VGD5cWz9r7qLzaYyvjKnctAT2RQom5udGz1Pq18z4u3FTxzJ",
  "key28": "5F7FG84HZijzeWMoZE41jidDct8NKHzf9zTR6yLo2cSoBcjJw6qkuYeSDjYLQxfr1juNL6mkaYeDxPQZR8AUrhTN",
  "key29": "36H1qb8guDReWN6wnSRLrHkAfr2EvwVToedqfHj4fpKpsegRgUkx7ji7A76XRg3gMWoAYvJMshpzcnm2pGoySAto",
  "key30": "xNh5Cb3Wko7sVz9SzLKLz4ETnSA8qnqsHzjY7Q5crYxaGuUmgXw972k4hq2SgpzPvZkXUdZ6V4j8kNhDuTQHS4U",
  "key31": "3EJ2pHnAmMP1djs5RwMrafaajdtipbqQXUq5K3AmszcZxWXQUjXTdZh5mNcHWQ3bjNAkaT9BKgehifzxw4UkeVW4",
  "key32": "3KiqCu6HNFSJXMP2yw5DjbXT8hYkSeqUUoVh4ULKGdbRxG2GTTrnk5M26cXtCBRCiHCd22ZrT67XukBUaQntx9jX",
  "key33": "5CAUCJSiBFcUHNoTEbpFk6b1FJwNcXKtBwKaV9nEwXWTixy5w4T6frLqddzvZ72EUBmWCWLkd1YjZWDk2Um3pr9G"
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
