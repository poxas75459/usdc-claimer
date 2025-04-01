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
    "cxeZJwDKNVmAynxvWYHue7PEdxbM89FaUR57uNYvWBfUqkSiDg5FGAUXe7w449Pv5e34PYc9XQWa74HsBsiuJDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52GA1RwypnGgdTaBjsPUuVAfQbvQbEjBmev9x6SAME4syww9vPnmbthCjGZ1JG8brfaP7hDQUL5ffhK5shFxR57K",
  "key1": "2QVi63wTHWSyqjvxfT8bVduhGWQyqhPvMfuUZYoFUiF4Vqr4ZR5RfgTsC7gybgMCNxoyuf1kiGhxonhWVVTmNBYs",
  "key2": "4inBpzkcwfVGD3C9MLUQyNpR9CyPQ8r1HHJbUJd8so5gqPwo7P6omF4yPEYpM2fQSWWNfsVArAd8a6yk1S4QLsmh",
  "key3": "2jUbF2AvHYGmASDWyRUFDrc4BovrGs85h1BXA4RAqSeTW9y7i1L3VDAxBt1MtMiAWvLoXycdT47Wx7S7ptNqinaQ",
  "key4": "3Q8RnSLryanqo37YNAsGRx4PozYTksqtQNaQokZAhykww1y86nKbSE5b8a1tRLGmKH3DjtQKK48t177jNvh865c3",
  "key5": "37khN6fjTjTHPPayqeLKvZN1DQaCWbP9W5nRJCubgGrswekA7w9nDikCjoBnRqMe1qLNCaV37WDckmMawVVAjd6L",
  "key6": "5E5EWVMkN86dv1hEiJW9eYgU5dzY6BNsxnySjX68JdmSnzKBnE3Ry9mDCFUVUQvAg5cf2WdUMyWmDAsPGeAq5vBL",
  "key7": "zUjHdCnVYSG2J2nT6Y6nmbjgyr6E2BguAZvBJ4qP4ZHEotq4gDoLE4u3bL7CALqaR83g3urthQZ3MY3P71UBhzj",
  "key8": "5keGMY63N8wLg5dkPJqeMZpmprnaSWqSAGnGrBWPAzZkwqunKpVcq7ARyjko8khoGzrv63xgQxq4H6HoraUVazLi",
  "key9": "5BDvbW1E8uctA4RW4Mu3CR4iiwtMpVUE8a5XPB2odCTPazQibPMc5zjeEUkpmVijxi6SMWkQ24m9B4M935BQPsH8",
  "key10": "5fHrHsJVteg37AAezWh1jGxTDFwhs4s1VbFypBKkGAqMQnLFPgdvp8Ff7bgVjpvgiSa984YwJBbC2oK2afN3UgYW",
  "key11": "46qR6QhgxWWMhMnWBhRUnW9T75Ved39Wr1zsJ5tqw1nrvgD3pw1Yof7mN9Vt9wiGBSWuHxyGjrrmv591zGy5ESD1",
  "key12": "DU5Y2o6qwnraSuJDW25MmDs2Lwj1CPW7hNGSNaoVaiPu4UFAFGK7gBXWDZr8ooffWJprA6UbJ7MdeMVoAd6wvyA",
  "key13": "5ARfr5XBsxn5Ht83Vb7inFEXxademYUzmT5xBmJCCL6j5SBvCz4NYeWsEBNM6nLmGrWsPQ3im5cGb38mBnugebVc",
  "key14": "2A5c24JCbKH9DXbU41iZ1tSinNiGfntyk5LkqptQ2heQMQ4XmHZPhxLYJMNtxFzFhDVcwpb69c4wewES45vbgMej",
  "key15": "3qJA2cf9j3pzPTXdW4SAvepREM58GvhXxHoUy8fGhruWMwn5m7hbwaDmZpfZMyipWVu6PrzHr2ydSNbZyxdXTs4B",
  "key16": "5buxaFoE3NmzwUqmgDUmy1TSvG836V8GMLFUJr2g9carcJyv8BTyLvMxxQ9frobMSjJJuSqFiTwuaUVjds4RQWyg",
  "key17": "7325RBbSyXTptwaoZPpgXnvMiPBjhXHSxi84knYKh6J63VkCJzZaB9ZmYwtmF2jDtPvAzH3f7d8QPHKEW6CBNJx",
  "key18": "2gT7TCHfExm3e61pauG2dLDEk4ZswzVYuZXMoDY5RGumumcphwx5mzVtyo5i4mu1TqCrNjm68bHYLzsmN5QNuCjp",
  "key19": "5jqTQXhtg482JpenNbQuq6F1fTvcYdXF3Epu3rMBjJhLpsCi8Y9EniX8ANtVDR2cBQMzQ5Ry4SvaDbrpHxjx2wMv",
  "key20": "4hAhGocvX7aE1tW4UcpCj9KXGA24qeJpwg4zb2ZB6uMweqz4ETTagnynvDgwbY15DkAGB1Y4QgCc6cCY2RkxV2js",
  "key21": "5ujYhAie8VM4tGbn9BUjChkVyYRPxc9pngThj7XmoFtwsPERsSeG3zUdjfqp6P537gEsJ8nocnMmUvXwgYBLNU26",
  "key22": "1qwHMX7885pwd7rB2sF6ye3gQ6uF85AwH8n5Jns6vUvSqbhuJMbDy8mvFc5HRPrBVZzExaDSAW2SJmBeK2HKbeH",
  "key23": "5rfsmzZbPFyoScPa9PXqewVEuSy2w9yt9qND9g8LLinuPakWS6eVVgBSVchMEcuGJeRvxehUo78dHs9rXJncAFcT",
  "key24": "35kNa1WAHjHefJKuG3sXHuKsJHazDcwFsLCDspHn46EJVD5ntRkw9hL8A1YDL1Xc8WHunmWmRQidc1HwdFRz2whc",
  "key25": "3tP9NBcMzqsdthXm83DT7ZfPfoUD3cCRi7a5iVg74yXKun2RBMzdBFYPvkjtuiUDTpLxnV8YrJVLT8Csvcq3hNLQ",
  "key26": "43Nvz9GgYrXr7AXeEP26yUHSdiN75d7eDuueidC9vAuwcE8W4Q7ZTicS9mRdrMtubsUHztHhjn1mF8ZsqA6MQrP3",
  "key27": "uyvFxQzavmr5h1GtCTd87ThcTmG1Z5sQqJKn9BcWh47xZ9UuWctF7nakT2Rk1MfSW7xWr2mZA4W4wu1ruy4y9fv",
  "key28": "5ofA9B3H6whJzjWJ9K8q8SSa8fEHxbyW2gA7dSSh9mYWrNkuim8ai8MtZ8oaijWSxCEb3px32ULxYJC1wDa5rMcN",
  "key29": "46S65BFZvwLv9HVSTzRoqQyPqmucCPDEdXbt34mkv7pAZeTaP2iVQ1TYUaV8Lej4oqPx6vLRmaHgd8PtNouFztRa",
  "key30": "kpqB71ernYrAM4enPRM5fa7msMZZubWpwHdd2cezxfPksryKhBftgCPLfVuLV7A9M8nkYyvrjDietAHqVzhrjV8",
  "key31": "5Z9WaYrXE8emWWWiVxrouikkfc8LmBBT8c1TonkBtRkvuxbApcQw1h2wQZnBMbJp1w7jXkFjEcSm1tJkcWCFVRQJ",
  "key32": "AaQEABx1etJ8DGMPjUrwHSGmVeAMPYVfzydGYDihsR44ZshheiJ3moHWdVxDrctnT24HNNfdhKdmyaWnxyvZ7if",
  "key33": "2pyFSuUx5aRYQbCVHkqDtRwKrXshWmGT3sNGST5fTx1qh4BEhHCok6d7wn1hKKoCmbYKinm4stLj5J3ZNUvDnp3r",
  "key34": "TfdRkkX3o5WDyVRJfpWfWaxHgSdG5bLNwCvw5T6tj9X6LzApwbA3YvfPQFKGxxub743wXwmNRD5jk16M7TXuJAF",
  "key35": "bLrLfEM7xMZSjjFHTn8NbUtTHJiV2s2R5kyTDqQtxyy2WdSLPHsX5YzQCvQ1CsK3E3wJonLigKkjbs8ffba5YXr",
  "key36": "5fdaTCN8wcNzi98NWVhyXAdDbxNQS98NzuPrFe94EC9mdroLkbsMLZibJG6SwWmp1bz2LJEYWXpRraj1bK45QSD2",
  "key37": "65vZ3C5Hks5M9zhK6VhzZ7HLr61r3iwhWocBbCHkyEVmYUy9s2rY1AgWAtmhKEQYkYVtta4yK1K8ZbJcgrs3ABoz",
  "key38": "3FeVrGTVaEK6mKDRoAUxk7DqKqUx5qJQWF5sFt3dWyCbrQxoWVGDNmzkKzCpnbooa1G2KbHh7oKBMiMnTZBNAxm7"
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
