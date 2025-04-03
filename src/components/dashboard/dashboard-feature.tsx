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
    "2d5ztQrBS3ET9iZcZy8SoVEJJmxXJjboY5Pxzj4ZZ5UNFbjZ2KezcxhNcf7DZVa6NBrW6iMoqy84rmGhenzZ362y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xL4zeivUsJiCVyv4eqaqfAk3hWQMhLLPafRLa8NzhjTRuJmTFx3sJx4ygbzduKpXbZJRbm6S6p9U4T59iH8mCLC",
  "key1": "59YqeMt8VPkLjYqUnj4TitMpSGWTv8fDjpfhFWBC3rQExqyxzvwT6WAVrTbGrPTdirdKzPh9a5bvZb8v5zQ1N9UB",
  "key2": "5KBP6235SnLLYekoVcx5AREoPdiLcfZ9XsxcodFzDFBdfJDQ7EZHXF7CXcQfbpdSw438CiYujzfgvuad1W8GzMY3",
  "key3": "2vwiCimk5uQSAEoThQg2E24npe6kijH3WmtQmrwg5FdWBhSym3v5Vig3TdHf5qwDGCCVL4mkszVyKr8jKQKF3ie7",
  "key4": "2gGgXGAkNrt5afGMvdhuXzXXL217g1DTZp8wrtznezSXDkrnR6SMfxXSiNvawPGtbCyyA4V8oo9nhZGVAJFcCXxn",
  "key5": "2TpaMaDyLKfYBjpwCdVQq2z4SR366NGygSMpbWU2ic3VSEc9sdtnqCjZJZVKNP9296E85yWTmLzFJeeuDCkH9vvy",
  "key6": "3dddrVWjd9z72BDp17tPN3bx8hQzkaagr6gZh4gWCxFLQWAGotgwSdDz7fwYpMT3bmp5zXwppFPcZnZYizHiKzww",
  "key7": "2ee77M63r22wgbY8s5Jtx5brkm9dhLaDqmEwE5j7Wdod1454ffVLGLsNhY3vgaz1PruN1pTX7S2U8vLRuhmqrBmW",
  "key8": "SfdX5fB4gnPd9tRkB9zEYHSs5YGaqjyprxEgtRsPbUVjJD86ASZa2pFRFdsCA8iFxgbVhp5JbUUaGgkWTVHyK7i",
  "key9": "9Uo4zJDkLQ9JG5fbmfL1rcvw7J9eHq1Epbv5WNtyDqgVUj6nSKeoXLJ4pLV96QdKSNWzUB6a7K8jf6KN3iqB6GQ",
  "key10": "35NTABFemYNbZhDQr3CK9gVXzyLjUCb6tW5gpaYXq3sewW9v8Y3ziZsBvhG2CH4d1eLp6h66a36VamTukm53wgAP",
  "key11": "4wStvPsrLNqGarQ3ZqDdBzE8Kcq4RxMXK7L4LVtkF6kSuycVseXeennT1xNzy8k5Ahz6VQeeZMRf9N7Xq7bjyb2o",
  "key12": "3o8qNFPREnv8SwsSGUjB4djg6gddxjMiQGN4byU2R7jEGQfuVSCdm2WiwGjTj3K3qeeiGqF2PBFbtz9SczbNkcTq",
  "key13": "2kF32Z7ME9oqQWeUKtNftZq7qL9W4K96L7ANg3t2djHM6uzhnVK5KRTsRkVUkbhRSBQ9GGQoCte28Lk5tMTzTP4z",
  "key14": "5sDUQANbo2s4MH51rs7w9LTe9Q4QvBpqr2XJDyaV6eo4xm5K2miw7a2EJbqxAKxFD9uHGJuU4JKn1wBUMs7MWFAh",
  "key15": "5DmmUt8rA6peAy1QBtkR3ucwPN9goM3xcvR9bituDMTk28NWBwsGNKtKFFztCuDpz4hAWzH2YN8RC72EaTModjPi",
  "key16": "2J7zhorJX1fmxtDYPrNsriYG2eHUMJgYg8Agk38siDcyeqeTNFWp6GC9h4y7CwnZPAcrFKDgSeZpBi92KXiJ7t4A",
  "key17": "3k1JZXAyKxNod9DungBXaaFjc2Rd2QyhSUfCPodBqR9rPnBDQe3k9ggkL9ffx52ZcNYxBcth3Fz2Gd41gBVapFUH",
  "key18": "45hTKPoDKnQtJD8KUYosQCVY242DnUJqFYTa8LP8s2G4KcY4N5kY9EKDmXjuDD6R4oL2NsFAnCF2phFdDpFo9pMK",
  "key19": "4ELV19GEg1YhirzX34r2RotUbnEGnjKB3bYm7n5rf9VzvP63VZL4XUdW8FauFCt1hKBoxGFSvokaqC3Ho7i2XFDb",
  "key20": "4iHjJymHkBFywtDptxFXkErifeJRFbULt3kwtjWRrAWhHFYoAVBpH5ozmkpDTmRMGCRoY5mt4oz92MmW7oWuTEiD",
  "key21": "5ZKaAp1zF6gkHyAJ7pMrXiFnwdQ5UXrACcyLCCfWfPBZN1CLyK6jtXaFya2qohDEiCb2kCUi4vXWc3bnXt7TdBKc",
  "key22": "A4HcuND6kZMSRqMkS2KPsmFUiS3KhoyN16tpHeoTuoYrR7Y2o8WT9jeonn8dg1ajZ7361aZF2tGufnxyGzfffut",
  "key23": "4LXkFV7iWFkDXUKGZUW2bXbpgsa9gkiYbuDzeSUHYgLiyCJmrtR73R68vq2QYvaB2XVMGT7FeYepu3xFVsZrKMRC",
  "key24": "5DYRjKPLkaY8wn9PUMnCuX8oGKgy9Cyu4jA43yrD6gNx4McuNUKf7ZXvoWWACduz8pEDQyyUVsQRLn7NoRagHYS2",
  "key25": "5kTnGE5Wun6HpHoeyiwfc7U8pEABbCPWwKNpw8JJSY9CRbC97CMUs2f6B58zW21ZdPiuyNrgNAtoLgX9KWftbqPv",
  "key26": "LU7f4TgQfdFH57bxqdY6wYBvreNbePb37JtVuUKc8WreXigNHrfHfdH7nVrQe6SxX6WJsSqhxnXeXQbMbgCGuPc"
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
