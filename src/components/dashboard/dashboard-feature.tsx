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
    "2S2NdupMpng863chtHbwY8KYSSLYYB13hGcmByN1uQ8ogiDEQwPPJc9ks4xywZZBNWkmf2HYSa8wzKNFryajVbHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHhoNoeK4GgeqpCVQ3wXbZiJYca5gRrPfHyjoAK9XrFqADdfhNUisCo38wXwsH254R5F1fi7L2JjmKdoFVuDZ9k",
  "key1": "YTACUMoYeEGsdjJ2fwQvqoETHL5YYyHxRZv8eDgJDnDXyxQufBm2bHLCZfuoFSemngxLtsYLJz18qExdaRpvRQZ",
  "key2": "9rPKxvWoEixjDnzoYN8ML3LRSnhHH1Wce3j1DKr1XpaStvJ61oTkioLj16MbQKnCTzLNv5q7kxpm7Az52eGLR2W",
  "key3": "5wuNXHW7o5n7TMGrXtJszVDcsUsdruSNmCpyhscm2wagYBSQF3dYHMRQz6cMJcWZ6K7Eu6LUfApDj7yygB4aDYpg",
  "key4": "2fReXMLwf6L1UWrBgyNnAPwhRWiZ1qksxatMdg3nFdx6V2UqFXNjYdLYo5hnVKGavqw2WzBLHNDZrSWhpXhLM5W4",
  "key5": "44KTsh9dvTsJxqN7t3vUTiMRC23GxZMJ3j4CyAKWeSp1HHPyvhBBtQPUqBcrddd7y2TTkMm7sj9nE69Ah2GvPvA7",
  "key6": "3JouRxdfbLMM376BYYr1bFo7KjZRahBV3ZS5qjHJbtAtkBFqA5wEAHCEREexF7SESUu3ZtCGohP3zcSZ9p99KJn5",
  "key7": "4m8gxqr9hTDPzfhSvueEfj6qZcHKXzvS5M3ZamDNAwVdbLXR6gVWHq37v12D2fu9y8CXupZaaXe2G3bXGdS1yi3V",
  "key8": "4MnoqQ3CfU25qpt8PTTbk47iT8mBQbk3wCm7S1XZFU8e8idXmAvXvVKv4LTagqi4mBcFdT1XgLMevvfQP3Utnayw",
  "key9": "5JUpexEy9yDom5GYANqbgcEdiZRXmb2Vk8DiFjCuBvV4ySDYXvEepm9YJQGwopYFadLHyKQTW3F9MnaUHFDKThHL",
  "key10": "2QrvdDPTLZT93hGkuTpQiDRVgYwtin3qsRrwf633FPaHSC66j1yvkEUsjNZtoqVk56Bbofr7QNN6vQPbcoeqNDtm",
  "key11": "3S7HhLjGL8UZNxRwy8oZEk2viLQbe38sFzKGs5pmnFQ5o5YK6iBTu4xGEefvnoNEySiBCKSy7pGV1W9W4aUKE7b1",
  "key12": "37Hx4xZxzHPPeY6p9mGZWhp77VSAzd4cGVkEW1VWXGdXkUD39ahGYtp3Kmq8bRPe74h4bmaoynhBa2ZnAbR58ztf",
  "key13": "5FhHJkt5yvuod5BFtoTEZK2gVZnWxPWqBGJSZdEN9tmmMFntLAWapPtXYidryM5jFvdLA4YMbf4uxhqDhzb8nk5g",
  "key14": "2bS6LKDqhYaM6rEKWihmLjKTRgUTeX86LnipRgohLiDYfAnL4UwCZcmhJYwujYjUv75sQTmWtVDfxyXSTMuz86uV",
  "key15": "4kiq1NKGCoDFfXQoYQqMTffvW8BuaL6FoU1E6GV34GTbEJqfsEujp4GMzRH1dEwN2xcjaKKmhdbWKMgkRhXobURs",
  "key16": "4vtCqaKU4YzkyGYik15YGWJmyZ6DezrMjKuVqsNznYWaV4ERPUvUXnS2VVdgqpVST22BnyKxMCbPukJzYnCNfa7R",
  "key17": "62uUnQmfftVL8WcpQZh5qKKoszawtEpZEaZ9qn6xT8eu7v5WRGUii9M7ot34jBjPthXKDMf1ZpCWwhgBhdGrzCLQ",
  "key18": "55McPxybrfg2p16hFPuVWBKo6YFAq453PhCJzq6yV1Emys3EHsCXgrA5DExEvG5y8aEs2hg9jSS4a9ebsMbXW8e4",
  "key19": "4Rz8EKWmdUbbfjFjZAhtHTA5EQXZqNQSJedxmcJduPdLfoC6B5NwJYfCCa78GhExJ3bYKgFpVcvobFxpswHVytE6",
  "key20": "5U5KwCky2nqyV7ghHC51HaJNqYxrxCr4RffgnxmnvNGYqQpb5A2ucYTPD2Ni7JypBMhfKgT81zioDfyHEbjmEfJT",
  "key21": "4WhJ7mLgUSJtqMrYChFtjx5kiZbLAoczEayRSdzmVEeA18c2J9Km7n2jZffjtPoJ2LzMmThT3R5nw8twbyLnKuAZ",
  "key22": "3mp3CwG3SuNB2XWpjTkeV3mGLL36f7AVPsDDLQZWA6tnewCs3xjTMWce1K2MSD6aDDUycfqESQUvPjSHZC4xzttS",
  "key23": "VebLMHtE3gRodRzxAU6RH8FnGTNXz979SUqzJDaYoVsrswr5GfhkM2e5gdpXsgNhydi1kDL2Ywn2PTr49M7y2tp",
  "key24": "49HCucMrYDZo8W6UeXHYtK53jfSYgK5CAvXhhT7VE6r733XDV4PUCxucNSmtDqVP85ZbBUnYg2kZ1bxn2rJsm66v",
  "key25": "3Vaai4F7FoV6QCvDdx9pHc7EapX4TFyJrapCq9vkK8fvLPWkxEzQG84DpuKQEsodKz7rbnbBagnn7fouNAj6iW5u",
  "key26": "zXfVzwPzQprTLAeHp7DMVzS8FdXRMzEHeJXN97YMZ58cwvaxzHxjdUsYbRNcm9Hre7bQN4yNqzCKA8UizJv8Gxc",
  "key27": "5HFz4S2wPCRiiMQxrXV4qgxMy6qKV5mcq4aV7jdunYH1RGg1scAyDa9ciTudAf8tazHcRihrHGWXJUF59mPtySVT",
  "key28": "2iUgxBJUqCSyFr6gGZshy6ZXBytR54yB9TZh92BqDMNomTZbYn585oim5ePo3tgHsDmmb5TjueE8brFWeb9gUysK",
  "key29": "4ogbbEVf2ptJaiZimL5nxsmcb8cXxSWYhVMGghUWzaLkEGY6KsPsV4ErYxUZJYfYYZuLVC8sBsdmH8uMYXrCMjBD",
  "key30": "3Qn9uuS6Mbyqo2twr2WN8YJ1KCkA7cGQQCi4547AhJNgNvP73njk6JX2FiSBcCPoN8awVbv7qpeB47RTaJWjqAq1",
  "key31": "4hirvnHq8ZtpBiDMwceqQPCoLnTgQW7FhhGi2oZWk2ssKtgxY2cr6f8P1VNa7VMDED9U1ph6CVe1XTQoLdpfuNXk",
  "key32": "63sabaNtMA47xFXMJXZiRSezKjVcHRcZVVnqDWEa7T3DU2pnFAPSBpA7VAMisqFA4hvjdBfSAJEey8vUaUhbUVXT",
  "key33": "2WpWhmmd8wcEdwYpyD6va4bjAvks8ENHyF16hKSwpuyoMHbqFfYyEsvBCjx9vFXY4jSyT2WLYEy8omHcGUYqrHBG",
  "key34": "5mouZpNZ9BbzZW77KNwSuF5X51KTZJn2s3m5t8cFYDWprq7MNvXYfkzYsJYZvhnBkkpvxHH8eivJA2RWuRgqGkYZ",
  "key35": "XeNh1o5B8jKE9z24eZPmyhxCk3uVda9C9ZCLJ8d5r7RXjM99qxuvmkW1jBQinCaz3Uu4dDD2ESx8sXhiwHRrnRt",
  "key36": "2PVdBMvAna2nziXUddc4cPW2X4P7GMUfeeXb935SGK6B6DBUTc1w2Dp9TWQSgsYniQQDseo6dcYnVnhoModoyMJy",
  "key37": "4hDBKYjmDj1iAhtwfUqXEmopjW5Wr3i2NTE27r4RiNXYF7wSQpntqUbiogM4dDLr7ajha6hajLCxHoxZmdzK4Qay",
  "key38": "36Fzq1eevA5th4FKvBLLNLUBNn1Vh5ih6X46dY6YBpz6A7YpHFns7yEynGaUGGNe88d9xJBgjk8eBLMmQqso6BsN",
  "key39": "2rpJXhSfCE2uyntbdswPuVGWmaWXw8XDrWMgUtUjJY3Xr1XiTQv9dSNe3xcXvBz41huerdauwAaTKbpvt4z4LEFu",
  "key40": "HJwTw8MRuDvWA2osysa8fzvQxDZ8T3k9FHJrsmmb3hGvXn37w1D4JVmB7qxPXoPV7zN1im6PiAozsVkhfWhAGq7",
  "key41": "2BuooNuc7rkyKR7pEX61CTGYX4tzLRsa3XfYUR4NiNLHGxwDUE1LonYs9C6943sYwN7Vz9kigcar5bWjpxVwrEnp",
  "key42": "22HEqrBfUBSa4MdNq7LWVyAC7cX53qeVrixfmqeV5dFXkfahx5zFRpcdxZszPwXktMDYFBoth3z2rcrNMjRhxAHu",
  "key43": "2YGdMuQHX3qiSTNBsLp1eUJjNV2GwdPQgW2hi81KE4awdqBcr4jfzHc8wS7egfhtbWCyHyUMZtTZ5mBdimfzXKdK"
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
