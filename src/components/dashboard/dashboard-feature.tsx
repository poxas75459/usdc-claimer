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
    "3p6KBfnmAGwqbtX9cg4uTn8e3oVBL33dWk51sj6pu6jgCvMkhQA6eu2RJZrwrn7iXzKRUiWWhTEBgJy2zd5LjVZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gLkb4z6bDfq6NAjgzZhZPKn8dkH11BgGi1ZT2WyhogovT4KMxDhg7fu5BgCQeWtxLGp12mNEuHKCDzC2q3fAojN",
  "key1": "2Z243UsoQyhdi7WT62LJBjnrBMHxt7HFTSYCqyFmCwwtC5zw2NxoEUni95n7z1StZxpjdhS2CVnLMQRNMmTEy7TU",
  "key2": "2khWAXqmBkcsyVqdU9FTSPmUco5vEbHbp58BDohFjVQYSGUpSxbXhDqB1DNiuGGA4SxeKohwnVLnF5iBnCWzM8vR",
  "key3": "2cXtVWajX4T9i1DYRMvRbJDpsPP7w6JD7xt9odELEcvUqmS8j7MiJ5PdJTMwq9Nr4G1apTh2mr6SdWZwWTSVKQrA",
  "key4": "5APKU9txo9DdKUDBctRLEvtYW3wJaYnZ8f5pna56WtkiTuqRoUnVTKt4X73riRvP6KtULkhG2beLWr1fqmtweAqA",
  "key5": "4BUffbThKDE7XPcRNHAy9yvJUusT6mjzBvyb4tYSb7RMpVnjE1GNDzdkMjyczvyVRJosByxeYwMZdhpvd78AhMFZ",
  "key6": "2ixprsh4EkhZ3Dsr47kYXiXk9Vh7Pe7RuDTxGFPDL9MNeK5xPiVzQj2aVcxhioEojmFd5dXgLXPeMC6TfcqE5U9h",
  "key7": "2uCdd9yAqRuEjVpm5AAdrbt29gB4VRtC19EgetyeuZgMo46DR3QfyFKKHF1VULysxpTEJVNVxztD53AzEs9yp39J",
  "key8": "3vaqxYVqjWbtmnHwNJab1YWy4rwTDpeWHhLjYbs4hhZHqiiBdeVUgFnDkAh24FoeEkwxUzidK9k1MyWeaumYW5Vm",
  "key9": "zBCaC8C5HGbU5asj1EgYr4vhXm7GXkzt2AzqofhUNJDoEmxcb2N7uvmkJeGFw3CEw7qwFus3hzSrjCE5ASLpBx7",
  "key10": "3dYLg3m8PSu387MFvg7XizxbRri3pVfBtDTxvb3tXS768FZ1fbv4Uj8EYTkGjzK3yLqhoS4DsxoPdnkVnzEG88Bx",
  "key11": "5rcgU5rReecX1qyc3ds5ZKpiE95ZQ7wQt9uZ2ED3oTXXuBehM3DTn43x1RpBLofJqcRH8yjvXWUUzWBwD2cKL4p7",
  "key12": "2Whb4pr8uAPwqWmJKRK7EKfnWuinHYK2hZynED1svEPRbEee3cDRRnND1biME8CHAUPaGsagrLE9cPKvmfZ9ANm6",
  "key13": "2MrJnVnh5X76LAe7rZN33daTBeYuUkdKD3rowrJ1K1nTiF7urjcqNq5os56Ut6WNoDqCnAvQjSPW4NFxerAyFos1",
  "key14": "FxAEhSJRyTDujDGZ17YrP4KCCTpVNBLtiUbQgfheK4rhSiyZrzxQ68b1kSsswyYaJRPAim31vtdkxzC31dBmwrk",
  "key15": "57bxNo8u1tRywpJuwADUzuSvgJwG77kFhNRDD8ZiSK9Ef8zKQrHaE3LxstLspqnwyWkFxmrkKnLsaJTPxQPeJxn5",
  "key16": "WH5aPMCRtAe7Q1XDJdUacexsTHzbNJFXBXeRzGGWGE79MCY6P6nLmd1dHURsWjB2JVQF5b3eWfo44MZwZAaCPRf",
  "key17": "3i3EU8h5xcm6SCMMifnPtR8BYJAHDSJKSfzwq4aUpyEJAsvQSNMeTpMJfb5SeZbHQKTN8DCJd9Jr3nUeATTWWHDK",
  "key18": "nhoezMHZiNgoSp5skLNdQ5RVBg7UNFfD6kcma2bvp4TCHW6hBK3eoz9H2yPxBjGWrbqJsg3fZ9YtXnNfgRKkfj4",
  "key19": "4YKAaQrcCYeDXzEoV9JjJLH7hmYAAsdESen8Vp6CgDUKM2NvM9vXE2f4wzYQiveYs7tYv49KUC6aDTSXA3hP8mKn",
  "key20": "4wPZWgyxKtTDuwFxadfDwgB1fA2jXWPj8TbeZUL2UXJSBffBVhyynjhwX7cM5K5ct6xUiCWUY5aQE3dfeLo3NGTW",
  "key21": "5yC2j9NcJouqkbPxMt6s51envorqAJyUFdAjFjGQwh6EoNS2YH1wAcsFPwzYwqhcwWSidqQdhVazZemYwsESpBNC",
  "key22": "3u5cEaR3sxS1uYMYSWyCA6csyjMKdpeg8MoSNNH52b3UaTBDaHJUxUyBncZ6Q3SwpmjXjLa43srRBtWs8MHmwv33",
  "key23": "2gKgJZdkwFByPYXPA8Me6UsnbxZVzd7wcQ5mp2KG7SP99xzzTFX5sdeP7SDeZ2NFSw3B1JozTfazdgmauK3pX6A4",
  "key24": "4JZAuAKpBqcVQ3Y2eSheYFpYG9Xm83KSdgQ7ZB8tsW176AYnDxqbJDM8cbQs29XvzcdR1AKq8P52JHjSoYkNU2ph",
  "key25": "2jdyxyL2AgbZKzHiiWjHQ23nVR8jnVHyvxM77yd9TXfWFVoECpGiibcupR58NWB16HAHAhusQi2aq3J35RW8F2aS",
  "key26": "4H6ZqnwxZQuVoEoayGpggaCGBRbrpYZGeFyfunEA5kXKYudYDAm16jhAnHXYSqePovHEBajLcaybCkZuoiswgw6o",
  "key27": "66WRZ8S7JEn552BVK43M9HAXBYJphsamU1JCJpt692U5xj27g5aZuo6vREjuzJffL3mECSizzUAARywg8ubQTj1d",
  "key28": "zFGmBX4gYUKDzGAYckGzKbeVwD3FnfWMkzEx3GRG3iFXrjQ3pDUF1tqaZTgYGX6kFntuSfNa7ENp8CXg11Wm9PU",
  "key29": "4hXAXhd3aXGdfWxUqwPtmQLF9yGTgicVcgyEQAvpDkF2eCmy8AKsrTCmEPMgWXTm5mWePeA36Nm6EAb3LNCkJwws",
  "key30": "5RyQPGzmNYibmQQvLQaVHf1hicfYzsVxVBDEUdi3vsEvmQ6FRb8iodae47b4LNa1twYMHci3BVLA2ABLsM6Qswnv",
  "key31": "4vYeFbvwMm6hiEY5W8EuxB2eEtzQgry6Gc25Hdxz3CgqcC1agiqMCHWvPF6f5fHJn4tu58LPM8dW9wuXyB9RTAtJ"
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
