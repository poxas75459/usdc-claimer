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
    "5GLmPRRkntezKHSDTfoKeoCTih1FYhzgVvK5XQVxE1fmywD2z1PgEdcK2UMWqY9W6H1HWoXuaKAQFVxoRwBV8rzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfMbnJKSQH5Sy3tgCbqqJmdBC6CWrEFPfyvDtBDsEszcjqAZKnpRQ9p56RnM8iy75a6zNhAuzJhRtpV898B96K3",
  "key1": "4ZqSkDzE7pN7wZvf8HDEGjdJdyVr6jCVhJTsXX3sm52JY6yS7AnPQzATVo13EzFTaEe9r6pEtGigzz25QQA7g2xZ",
  "key2": "21t14nQJCS2ZtfaKPngWtK21ZAaonocZKMmNwEwtthqHhyzxCZsMbKHodmwhWNQfLtVz6z7MWahsxCLpntjDySbt",
  "key3": "X9XtYP2qDrdDYycM8Zc2VmehLzyE7W4DRXFiiY2CXtrqgphsYp7gkYD8p6xvs3hUCa3c414jJTDiAiRT4qUJGPG",
  "key4": "5rM5zP6gWsWxW73wpJTiJieGif4sg6Zeye7cLeYkiyf8geqhwbVHMNWUtAiw5eNe61ZNthmvakWB2G5dhUu89vov",
  "key5": "2SLAq3F6x2JDXAhLmhzfrGRYVeH918ABxVQ1fsasMgx14n2qK1kvtyZThQj4Rms8mgSgDH9VMbaS5egEGQV673np",
  "key6": "3eoHwHC88RFyM4bL6UNxFDrseYzCyJ5KfG9xL4pL3nvarwrLD6m7kE62D79NTUT4PseqxNwZCbqe5eNFi4Akjsew",
  "key7": "2vq4ot3XXUna2pGWEaogVL23UiGchgePfGwNp3ieQwcdMxxowPrSqmU5x3QBj6kWaKSkgufJTdrbUBMGVVc54YQH",
  "key8": "WhpQEGS9qup17gWPGRwQYBpHmUYxYrLYcHg5vAW3eRqcaLZtfAByrJrQK3Tn8BK6JyP1ZTLmQ4YP6ihsbJjTUrq",
  "key9": "5r1NGAyxAxh3Uz8MH6CGcMke6niiv8sCzBbJdiSsbQRckr3vM72LWwpRR9Upq7UYsuBqStnKnmpRCfngnebifmqk",
  "key10": "4iRhEjhZRh1AftwLsF25iJFRd7ybdhFpxEVTYw5nFgDYiuUZoEhEn5BdMQFNY2c4tVpJopAtrs7sWPhUaT6h7hVS",
  "key11": "2GcYsBoQTxzved3VjDbw8JGg8rh6zC4aPjfZjH9dnqbdi5FCHoRGgB8DEKywv4k4SxEP3y6jfGLyuiHBMU4DbcKe",
  "key12": "tFDa2Q4GovH1C6zVTEidb3VoRPS1dssgwNcndv6VJyb3DSjExLfeCUS1qkTV38k1DUH28uQwDZkCEr3Vb799W2D",
  "key13": "64nn1WvPnyGQia7C5zdh3HyrVHQu5QJfZ5S6ZEzNDgTiiSX6V6RAQ2H28Qq6n7JBdxJGdrvXLGEBtdRDyjJB1rVv",
  "key14": "2AjdpNyUAe8idzgP6SuVi94VCkx3UEEZKxMGiY8brzjDDzJn1PWWrmhEkV2KDxKfztUWYw14T15TYJebfpR45MBd",
  "key15": "41vAHw311RUYQfFXKgSsXrbVGh6fprxXLmwgsubhF31qhM9Qkictu14jYxA3v5nXc68fC5grbW6apnzJC85YNEsA",
  "key16": "36SKAy5czeD8v7bJpXNLD2MwAtu7754zgnWQysikvYXfycCULgi6QghM2oXkhtB3JbjvVW7dUAv2zvjyr8ANibSg",
  "key17": "2fXP9V9NnLoiLPNbHfUBPUbHj5DDzyQ8u7wnv7EGDvBCG1TZQZXZpUyE8MNdF1SUXeRb7VxwYRWN9Dg1tyaW9LzN",
  "key18": "3ibJUucKUKbG7fykMsSuSmrDRtszSnu3LcmPa24LmemP6dgK2Kat88iJh2aMCHmMhJKZdGN4Q1WRKN9mouxR95Ym",
  "key19": "5sAR52bvB86oNng8ANGfUKNg6WBYXv6RpqveWceyUvnWipy3oCz5ZWD5U3XgQ3Ek426Qg4sKDGSvMXdWWyxhzALf",
  "key20": "3S7LFyGJzX8RagYPbd1Uvuiot8jEBkT3w5sYMU7EUDKWUjMYfGFKNeo7mjufHwv5QZRCXbWEYiYBHRuNYNreTnu7",
  "key21": "gajhoXW8X5btzfCGMbJ8TKRZrmDJrDpHT5SaNYySwLSwdJFVypGR6UB1UTfGuTRAzu9vDzKhdRqaNEjmQ7ePG12",
  "key22": "3R1NNbREYqAGEwk8eD9ybkVwZhurud22Jfx5osfDGZD6Ti4yEkVbp4Mn3vg9NSP1ECA7MQbShZye7nxkHq8d4X55",
  "key23": "57LyEBsCpddYame4a2JVmSv6stRPkVpzP8U1HNJuAFfeS735F6447sXDSMCayfsdCSQXQkSCrXzjYEWE3sggaWnw",
  "key24": "3sbjhmjKpigc3VWHqxUakHch6fK59dz4gkc2b3RvM5dtjzTu7LZ2YyGcqh4EUuSW8nBujNR2AAjGQ3fcNXN3ojvi",
  "key25": "QjpuPgQQK1WjafgqjfEemNXVT5Sf1r9fAiuNS3mbSxkX1QmqASqkHS8XLsGy19hFVXFxFTwW7gq6NpXEWKk186R",
  "key26": "3zUUaWh7yTTotv5Cf1YRCQrpMmZtWCyiGdpT7opuM6tGUgJfH3tDcmybYUG4jxZqTg9ss8siB21xRU7qRwnmmew4",
  "key27": "4uLTzAvR9rsCW576867ynHuFdTj5ecfEz4TpZaExV3XphLTokdidTjxzJ7xw8JNLEdCFMnhKe21rt3Kcd8Ckqy6P",
  "key28": "iZUTqKGoye7vETynyww4gJRBWawUyMcLCNR7DAiGKLrHhkB342zjZwwRnd6xAHebq91TJ6XfjjtRx54eFDzjxuB",
  "key29": "3VJnTNNwZAZTRJ7R9yzgWmEnTyQeMkHcDMBXrnWANS7uhLyBuka2LR8f8pzV8GBDGoMB7dScyhd7HUzZWiL5u1mQ",
  "key30": "67G49Vi8JcDWk5bStbrNrwEVWA2NZfXvJ3ggwjo5YYjDptfa5pRDGmzQVbPB3QCaTn3JwswmmDCL9Vyf2hyr2u8R",
  "key31": "5yXc9retf5NCRyeXrhrsGES69MuzsGX1xjqubdT8FvJhEia2poM6w97iiaiHBZDx2z239AAzYaBrf54AQMU16P1x"
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
