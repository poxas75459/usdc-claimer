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
    "29CLrhFg4nfYbbE44r3o61aXaMJ1kT1UCfUfyKTLEWQJdaYqYKNc54FcQXaFRDwMoXevqt881CTEVSgg8XYiJNDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GieyxEwJQF1u3rdH9aGk1XGR5Mw6TsufrZmuHZkfHYZu6EY2ETsBCuP5Dvtd9papDVJdDdsahdEtCPGWBeXWacD",
  "key1": "2t6Gt4ZMqQDjgejvGNZMxW9bCcbqJuLiH89rz1GmMAvPUAnnFpNETJfSrJTCWaf8f1W7iAGKBKLmxANaJ872rPxg",
  "key2": "3w5qhWnxr8AXJCGZo3zbyX7KKBsTuBiFZdpDzCENgLuCwCRazdpBnD8owfy9vW8f8yFfQm2tychL3b25osDr46Ca",
  "key3": "2cufkVxnttxkUUP7aikGTBkL7NitkaxTJPrMtBugawN879Ey2afDKEiiFgSo4wFNezxpzrjirGPVSE4Y6r9nsykp",
  "key4": "3HMPHtMiSSJveRCCRkaP4wtJVHCQT3fwuPyjWm59Xs6zXvbj4JmMyoigfXxfBxaH7N9C1mTUTWU86PUqggy55s4t",
  "key5": "3KSZ7DAi49N7jC65LCu7N5Zf16DZk4CzbAieELYhyzuB8d43GysnKuETMkiUr9aXEigSpNeAqkB7QNQpFqEx9cju",
  "key6": "35UDmTgYHmtW1rMq31Ucz9rjmMQBroAHshdUbKJaB74Xn2Zotp7jnhxaV4djrkbNX9o4TeMtVk2UTZvBPy6f98sG",
  "key7": "RLi9f7FpU2U4kCFWkeUReJp9PxMiSrtwDLaCQpmzGDP4M7ekraVCK1viTAsoEt99bUtVUsEEiveyqp9dukYZWFk",
  "key8": "52Q4ypEbcN2uPaRJVS8SMLeHjCF1QphZ1RG41qYoz5Mnt39Xtkmify5RNuyK71p33UwkdKP3jRKYqyayfH1TXAmH",
  "key9": "55vBA5Z1pKMEQLApwFh3aK4BKzZN58FQ2XUiyHkytbunRoT6VkWecWzEzoqA4BdnHSmtEiS3DUEk3VNk7ngs4CY4",
  "key10": "5MP5Yxq4bKqNcMLqo3ygU5iTjNSgmQGkGrubD8y69YbzRASmdNKee836SQMGcRKxgugCpfQJqUwE4yCfbxvjcq1y",
  "key11": "5mAqg5GWxfmJidBm65Y4Kscjv4LudtxT8TK3zigctgdRUc54SSEYfmdXU7JzAZ9rRVQeMz93dnqnccWaHm4Xtifu",
  "key12": "5uNpB9xiAjVPZLorY5jVFRG6cDE9SACy5cpDiKeyuByDvPvUNKmxjzsivk3CmyfzRodaxgVmJ7QMoUpBoc4zKo3W",
  "key13": "45Aip5xY4AcEYDCnW7xK1mZXNAyGb9XY2GYGkQCDTbyg9GfS1bDsYatYmydRuvYRhZ1gxogGKAyDMb47VPERbTir",
  "key14": "2hhYV9WxYyQcwJxEtcES13giKERfZTGgk6gTGa7V3W5mEHFCjzDtm7CF8XkcLknx1Tzy9c8DBuJVuMhTpGJKRR1n",
  "key15": "3zbPY6cP1rhjCnX48GbmsDSf47YSTfCENbgmGQaWGj6gF51enoRUUTgpNdVP3HDkuD6w59YyEpVRFsEUwSqcKahs",
  "key16": "m5AEdiEKnAZhaTzak6XDcMcBUMM9S4STpe48NjZ2trGeiaAYkpc24XtQTqJX3uDJwrvhVnyZNvHFDizSka84rCK",
  "key17": "5kzSf9T39dSWn92km57cCTvaBkzxaRH9XLhmknh5FqiuJjQyj9YD3DrePnGAVqt9bmmTKx3xJLKeqgtnrafdPcUj",
  "key18": "7tbcqSJhvCJpXSeB7ujJ36FzMdhqZWp3tVfz8sPDAhoyUJBmAXSGB2o5de2Qi2TUnAYJeVJPeaKuQnrEqzJKxu8",
  "key19": "hrJSNbt1NRFfLgrb7qfBuyUskKNHs8a54ET98fc4M9Lg28H7tqbf92rdpqaSFsyzB4tiGDfMzAQEKNdUwQi29nk",
  "key20": "5ZBXxpBptsxNUG6dDo9LVi5Pfxhgpmep7ZqLHwVSNFmYvm1SV9aEc5nQqCbzMepPKezMkmVDwPcfg7tg96cKBu37",
  "key21": "3cqWiV9YW8hvvEwu94cebQinCUeAwsaAxsoKhzZmyBDR8yYwsrJbMgz8Hyaj5cimNSheS8R9BhcMkLjE6GZPjRtP",
  "key22": "2FBmz8dzWofMFgu4CxBr4SuzANc5SouTuEN1c7CdvWKUp2RE4hdeXPFXyieFjArHjqpa6TwjNm9dZzkckxnAaGJP",
  "key23": "2mk2w3ntQCQc2Fp6ckhUKwFi1kbZxLVmorAY2vGNqa37ny7oqDrzHYpVyiB4pM9tr5r4Mv8S4UJ23bKnC4SAy3xb",
  "key24": "435ZTkdEajXJtApZ6GfC5kn63v4vtarYBcEYNonJLgA2bTPE6QHh8CFGBB2xpL5ArNM8jju18mFVJyzBCUncXVFC",
  "key25": "24g27BNJBxfBUM2SniNTizaBs5JjPykw1r1ZYgdfpzJMtFmSxxVSDyiNsnb5TV6obxpnnNL2AJj8bSeDoEEMipo7",
  "key26": "3P24cvWqgQ8qzccmhC3eawQDbLjZgwUxeonaAEQ6T8azK7K4sedUEWr2my4oxhR7649DdwDSy35g6DGpUfYdSbAF",
  "key27": "5rZzPPNP6tUTfRApgfzdUqKZV3FnMt5QemSGDypYTHdfcx6SiMTgCQznizUcfYXMKPCc4JaygkJV4Z7W3Stxy7ha"
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
