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
    "boCXMn4UXruBsJK8NG2fLdCY57L27ixc83xvMsZwXmjpyfvbV9cE92MmDFNBLfwmAPYGntQNEJmDji2ecSiQVuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9Du8k9d5TARxjNpZXEndKDGBJttdmcHbiDtniL2NkjXQkdECHUM4bDPy6tKpyHfDARrnz6o5xUiq5ukcA56zd",
  "key1": "3Rm4G84QhDdnXjFGGCVGa1aoCYN5iUbFX3Sqq9o9KFX3Aifo2kXtpoHLXuQWnMBTApguo6vMu5nYXKK6Qf7BSw42",
  "key2": "4GX4ymTyVg7a2fRnWzdPjVYXVaWMaAbtwckHCY4jsLcX5FQhRo2W4LhCE5XTHn1FWVuG4U5WUFoc4nF6MLb5WLCK",
  "key3": "nQt6UqBDYsbVUbSTkFpLnYRfZiKevn4XuELNPRG2r84GUNWA9EyqiFy2ibWXyyjDeT7sZFtarJqTF1Q2vRCz1pc",
  "key4": "4Q6nWdPnaRywCi8WVA673tQ4c3XaZSoRhUkux5ZTPbpsSk6sR7AgcC88cib8w8pbSz18iiXjHtLaWA2htNdvgnjY",
  "key5": "3tN1XU3RDqYzHsDTdQKBFJidtSyqtvN4TWL9BtgYnQqTuDQYdVt5pzY7hwF9f5eqaiGNi6xhXzqDEvM7NEjfz4GU",
  "key6": "4R2a72Q149r8b444KiWJnQsKNwTtXkng77fNAUgdwcz4esyhMEbR9tUyW2QWJA3NPFwSMRDwJUX3Es3jNfY6JKDn",
  "key7": "5eiDLnMvjxtDiNKuSzwKakNnoBtzNTTKLEGM6Br7shNnKcQANHZjB6Jqg3KxDRJUiJhQTcs6PVr7TwWqKUkAnJrg",
  "key8": "57zVc4F8U7z332z95xSh16TqaDKhKhLC9Ch2UhLh76dLie3P1UoG9Utv5QrLJwMk5X2DeoisoW3S6aBuBGxpFzwB",
  "key9": "2dhEGjCk7jM8WL39nKW4JZ3mNgWcyjHNY16uxXjP8jUsp1FBDPbvF35WQTa8Z1tEQvxPUVex6NaroNGB5HtPR8Rb",
  "key10": "2MRNDNmjJwS2P5BAVztGMj6rXts3heD9xizid3kNwkuLiWzrAzEg5RfFFGzSdCFv8iyMgn6kc9si9VM2zDBbphRH",
  "key11": "3HQnY2S9e3ZXDXTUS11XkksQSMoZqvkxZXN8fibTGwznPpJyy6uRqXmFR73mSYxixhPa6knZPqW9ZNsipZdLqoLT",
  "key12": "5rPbgsqH4Z6gBMnxeYhpfZwkHXcxrLSvqSG7S9YNvtbhhg5ZdS6uq1H9J76n71e5iNA2RZvmABfe2NDs1NPKdzG6",
  "key13": "2ej35TdxppWQHLrwZ4xVWGtvCc5tfLuMaWWou6wKPTg6onto5Yfx14PuHHXRhLgSv42RAW9xDvbCuiLpXjqnzF49",
  "key14": "2tAF3QrBPRxmZvmgJ3kUDT3xSCJJGBhCkiVTUPqTWQxpBhTEz6hS49eNvoZckvwGu2MWSix4nv4VofDPRVjH5enF",
  "key15": "2VMqAiWUZpf2oUxxZvcsZUkn5zGSrFFBdsCcvFA9tM5wDoakp2rvF2tydhXZyf7TQppWV5pU4qVJwE58gtjCH8iZ",
  "key16": "NRRySg7zzkGknxmM4a9eoKDhrXu8WDkre9hGWeEuTAMWXp2qNxH2Z6QVmco5JkqKc51WBL3ksH1fk3T1xexpmvF",
  "key17": "4rK37s7appJTNFY9yDPskDkzRFq5TgbApKxYPtz6DFgcbN3HJ4dqZkH7C8uZKBtqiNrZZxp4fira1dL1AuRg5FSv",
  "key18": "C45SYoyuX8juH7maHwVkX2AHLsk8eL91AZ5N6WoHw82tk1efx94YGydfKzR2ZCECZCvLoqveqjSNx47nXdSAY8D",
  "key19": "2BGwAXDTBvujiT9vCvybniutEeNZgXcqTwLXdQK3x51G1PFEm81DUgMYQBttv5qoar8rHtxxzRZRzy4bkrNMp2Pr",
  "key20": "5PVdSsN5bZVZhy1rcEJaXtfJLn2YVJnNsVLF7dxf9ak8jKhyBzfnt8Bbv2iRpuHV5KxhzqAgxAoM52TLzUg1g7Pu",
  "key21": "2DZcfFbZ6e2tQMZVWrV6oiJtAaXJeLhFggBNsMyieVkPoroZeMMsJcgHzRVoSvHhX4Xn5UJim1EuKXEDAZJ5Bg8X",
  "key22": "3cWdGaijihyL9yu1saU9jXXu8wov5YfFd15Lii76c1tZ8quAZkywUqiyPwSA6yFAdbcBcFfnyxrX1qD17CUH7bvJ",
  "key23": "2sMPKbKg9R2ecbvV4C2fDDaGJAg4DWiiNk9KgzvZ7618XXGLqRTcffsh5XQx8x4295hAUbt5JaVYKttaTUEP8RAz",
  "key24": "65wQp46cfQh2dbcTWAU4859Gk3RFKiU9C2GcHBEqVHA8kEY58cmkNUtAPEuh5px3xutCA2HtLEETfLf9eT2LVVpm",
  "key25": "3Y74gLTm6nnjSP1DbdD3jbxii1goBcfeMGzoLGkdueHitEZA3tawb5JeQNvnm3KYnyR7CkEmRjbnfmLUBcsh6Ri3",
  "key26": "2B5DzZatnRbnsifbRdy4GTUcqVWKcjoEJquBNtWiCe68TZJCXxaFXPH13MiEWjQ4h1KPPKxiTy1zFLMGqNWc5Fua",
  "key27": "4jZqTyrwk93MZke4c4WMh4zA55DtejbR39kd5ntUxb7whzQKynT9CdQj711gDzjydd54EciAeEc5bGp15YysMLyX",
  "key28": "5LPeaZHBaCfhbrYryatdLnpu1wWQzbbUzuTAHGVvmYZnM7VvNyTpdRvUamgRk5Gz7HRnxT4E9Cvc3RhCxhzdUu6t",
  "key29": "31JMW92mxYtxT3JnJxwaHWeG2VQS1W4jr7RecSfWyozDpdD4U2Xx4AP5LoJ35kgcBrLhQmYyFaL5ozdEW9WmJ6dR",
  "key30": "5Zdu5YFVABEeTLXNZeDzLZVqsiwZS7odKGRo6dNA4vNtKY8xmhoEAFh4vibmea2EkUBYH1qDAfc9Sz89iQB7Pam",
  "key31": "eMJ2d4US2JuULuJhFuj1yWuDqpSbRB4NhzESTMVfUiVz965JL7YKvzo4tsbQiAZDKDDXEeFsvD2q76w3XeuJKAL",
  "key32": "21NF7GP1ycSF4nZjhkeMrvR3FBHEcceN9VmbaZuBmZ9G1yGkY8rWi6hibj9zag9HhavFcQtHwYyoUhPE33La6XLm",
  "key33": "4NcdrbU8ZS6zPZh647qXfmmb4bpq6vqGcoFXzXitiRyJagPgyD7d4RZa8CY5y33PpSFp4XScgxnCCkfGKJ113aZw",
  "key34": "4VXPa5Byus5kRRFweF4CzowTvL84GYLhmByYA79tKnmQoCQpa8z43eLps1yg4B8ZVKTpK69jN43APeNbSPpTWV63",
  "key35": "4K7vcCGhCFQuWGMPrtqQg8FYaYRT8KyXJP6cTDnruWJF4qhMjuyosmRhU374CfV88XzYDHEXWZ1qdwQ62mbsgag1",
  "key36": "271EvMK5FQrxqVB83UqVVt8bXM7WKRNVoJca3iqHeuodgNLLwmBy65QVZKHdymDMLPji12q9qwFUdXpKAiZft8nM"
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
