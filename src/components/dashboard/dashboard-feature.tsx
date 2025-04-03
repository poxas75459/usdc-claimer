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
    "2J5Kbz97opfGMrf7nw22Spmtb1WMad7CQKa64ErbLYqepmjAo3GtEVfTLhE5yTMmZjB6g6kBBrQaRQLpcMgeXNub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rcDu2cTqraNzao25RgaiTvq4A13GVXuZZw7JjLFTckzuaua66xs9d4pMu6NyFoSoPX9NRPCuiygDfNexnnXq2BV",
  "key1": "zefLhwvcJP3x39p8b2DQhmvo6bJeMKgdnESPuhsKFSJgdAnNKpWBP3BUfTC6T12ecVPLnmYwbNpmF7M5unY1tsL",
  "key2": "66Kx4mzyDAJ7Dhnn3xYeFJxHVG6izEv46JpUgH2KS8B5rGVN6y5YzLE4dptvipHDgNKCdyP4ZWexGD1J21Fo7qRn",
  "key3": "4Mrb3HdfswUKznYoFRptun53B5SS2kvkuwfTgEhnK34nYgCNSt52FvTpsHiNxHAJBGtqd3e9nJrj7WFLZqukRu8X",
  "key4": "65cKPDFbeJDKauGPnxaKCnfS6j216B3Bryq1f96LfCF1ZTdCEur1cHAT43KCnfhbjK2NhfGxa9SqJkYhXC4Efwrf",
  "key5": "2PzRkBcTmRrzvbQ8z1cjw9hBsLx8qwEMpEp74FkZ6qc13UPuejCyhy5956Z5Qq4nwBrJeztdv48kiUzEo4cm8mnR",
  "key6": "smgQuc5n8sDxtPcKABc1XFTD3KKSpHoYycaHHpcPhWLmZ6RYehvZJHskBfdc6Fb7FWwqqTWWj2KoCKgESBRn6Uz",
  "key7": "2qiuTWMH6Fe63pk4kc1qftKmq9my48pJiN2kHbtXgxwuVNfeD7w8m1AXX3qNWuQex2gL1p68zGdmPRyjYEYrqc8A",
  "key8": "2oaYhJdnmQGDGgoxkr1Ynkh5io9A1uXmQPJU8UbGJ112THsikQSoqkTPoNyho5Xp9tHFT1yFrUoHp3nH1dKLK7Qk",
  "key9": "5GPGSViy9s32RJQnsmMA82u4WqFDz4k3CZdQcsF7ALhej39suS6SWevXTur4i9bABy5ZXnYc6yKpXS1ZFpWQxjX3",
  "key10": "55tdWCiqL6qb2AQggVPUPtU72jpBUTmqbGnikWpeAPqt9uGSLpKNmuFKGzszvHMogwwb2xGdsbAHubFcHGYXZy8t",
  "key11": "5A4WHD8Sbo4SKe8so9npvkJpCWS4y8AP8otCQ7NeLUworecCATQ15SWK2EU9qFxEwMNuyBFmoXCkiUnfXkWsbayE",
  "key12": "4LLG4FWwsG2ji3TJinASitm4QomKZmb2oNRHMLh12tCQQCepJMfrrhggEeK3QWwpcoP739wbR4Po6wRBuu4Y4fjx",
  "key13": "32Fxchy3bQSmurChYCusKkQ1p41xXvLD7r2YrLGDX7yiuy8p6qkkcA2oRXzDuBczEcM7kb9RMbhidgdJB73vn3vN",
  "key14": "Vbop3qxNVfAwsx9NMZacksLAWUe7yYf1zqdmrhUHP8YbzFeC7mXHGq7eh4YNqXYfpeMtHQ7p5FN1EgG4iC4vnSG",
  "key15": "4ScXgX17Aggba3Bjq9wvjtiXRkCZx2jViBpuswrKpzXHAccLDtTREEqevV9YgydxaHvZLBrcVSanMui355txNnrb",
  "key16": "54wt4rrrvN5QkdwEzQjVL9iTRjLtzi9aEwunniYWQNGEYbRPVyQCLSmZSoGfNU6iHqYV56FxRCTFk7SiA9rMVtkL",
  "key17": "2nUCAK2H2DEriBZ3o3bfLgN3F7TxkTJKHF1jvjWVPpzMTW3rZ2K6sLjiDKp5FZE8nG4bvzkDNE2BfArXVWsefC7u",
  "key18": "5wzTP7sHKfXKxXNn5qrDugFd26U6pRjqWKjaRtzqgtujzxAhJvTWjjWBGYDv2w1Fe2Ae8TWaghsD9dkySRL5Wope",
  "key19": "3Ljmtpf3pmTxLW6oYUAExtvtEEiTbUkNqcZRSdkyGP1ACTkYr2x5FDWfL9y3YQHQM6nsr21jzx5Pxwm6onHCphFR",
  "key20": "2FQBsvf3d77fj2BxFk19z8hGZC4uSWB1NPakBj3KPEcJc1ZELoufZQiApHEfvSRh6xsg4WuGvo7KeFb861wR8FX8",
  "key21": "3JGKUdEtcZSAybQsuQoPtLga8mzBUC6QMhkHzaQQ7q6co2yEuytCcwiPkZKYu3hUe5tr7fnZhJamGBwwHpTiaSCY",
  "key22": "5fkQ4aZyYGZA5WPWhNihdKH23T22bNzPKt1UB6LWcRJJiUnEt3DoPVt3UBVTHf2FWAbexfEvqBVS5J3CTPJTgDWN",
  "key23": "g5v2JciDSLEVrWS344vwfP6JLPzFzLNwNZ7yvjeCUvYD3fj38vwirhZEZmo92GAHxx8WmhXKku1ZytCyw4jcSYh",
  "key24": "2sspsLxMJkFpvXda6TBw7RkqqUZ7C9FtyzsT2i7wHLiqDaQn1py1B6XkU6cLF13yeRXjknojDSd6uB1egK7B6vc8",
  "key25": "4DXzM6b178pcDHpXERkcCTKqDjbiB6KkeE46Fcha4hetswAJbaL6ub6qigmraenrAE7E8GQ7eF5H3tq7KcPUNVg3",
  "key26": "3pi7xQYyoM2vhnTRqk26kWo9SAzHm6wDr4aPWB4Mva8zoJScKmcrD56WxKgEo8PfsgkZuo348Q4oNchRdKDYLQ6C",
  "key27": "2aGBMH2mgrRciYYtMrA6ABm64H3SvSDHyCAcwyA8AdbjW89iAG59jVJRdofBsHf2UfN42FfL7V5spuxBKVvFVfzE",
  "key28": "2K2ZjvBYKyFwzMVLJyzJw82eY5DNmZVbLfgw1HVQx93MtucW6pBG9Lkcy9CRqf13FEBWZhedX2R4pfwXpYsk7DBu",
  "key29": "3uKPUPmViXMt7MPjGUv1Ce5F1U7TU28PMmVx6sqFa5iuskQywVHGGYCN6AumAbKSCsxJhVdcJKdvK62HQUqjcgFD",
  "key30": "5DxgHLmucV5ft8RPMDKHYf3cK2rJgQ7JqodZAD1W1czx9RcSXg82wFGWXTypFFRJXqtkioDXfzu6zQQdKCSo9xg4",
  "key31": "2uvAPcMjiPj1ZJdLrNLA414NJMEC2DTfyyu7rKah3hEZa3kRyLmYvJe2ZRpKR7RKt7AGwk9bLPaUzA9uQQuTQK5Y",
  "key32": "3tMq4Jh1Pkn59uCYhx4nCcekTocYAMfKRLkCDh5nd5gt5qgHU3bXEHY8aeYJmRRh9eeQc72xWzzdgZnJbfRWCAbm",
  "key33": "5fkicJzsdaRuLSNWX32qCJFTfqcZTcitpRNeWDPghPyZA6CMCsz4XbHMfPiVW8kcGkZHoPRSEMv25WdvFZs9pCAX",
  "key34": "2BGvG42Sfu9DQQLckPM7JDvC5WzeDM2WPgDLSmRX4G5YXej6kWPCSvnSWBwR36BPFBraxbNhH9StN4aTdKC13yZj",
  "key35": "26fQUJJjyDfmCcaFPD5NGRXWE9QRcvW1L9zwjG5zMk73z4VnswjUKCfFB1prcWaHDXtihUrvPM6jhvUmZLWtPArx",
  "key36": "33KPz6rew9WtcsoxTjVUWcBnA8x1VE5B7cZMCVD2KFE6Pi2gtGnannJvEKw9T3vYNSa3onTXrN81b94PyBgsGQr5",
  "key37": "4hWS7Gc3VKNnoZJQx1VAnEeKrnbCorQrsNJp9qXQzzefHMGfJc3aCFB1KdESqu1GuiPnWzdQzYtHGa1Qm2n4mpuA",
  "key38": "5aVoYsrSeEsFgFKRt7Lp4tYWkPsrNABE9PUxQa6vHvei5VL7shMwRhB4s1i8FHjmgsDU6Zx2qDwT7LjM2iTEh5Jy",
  "key39": "4ztVHeWV2gqPbrSS2zsBq6oGE3qx2LiAgJLyGURWsCyCejfhJjpS5Ao2S8jpnCUww6ygR7GP1jqhpnYnNDxVkca",
  "key40": "2d2cN3hhYRb5eWFxEHkn6bwnvfxhxUitDQ18ggMohqvf92QFAkLEo23wzrXhWLJHuuoiNEusGU1DMEK9z5vDRoE9"
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
