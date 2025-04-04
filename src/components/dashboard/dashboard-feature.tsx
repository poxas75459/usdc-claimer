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
    "366WKZZLBKnETn9W1PbSfegD6t64pQePUxwHLmUddgEqDh5KjvHjqhbD9zzzPbHDV3dj43CRhJrhXYQV8tYdwWv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575Verk6KUNbUB5QG2LE6Fy7vDjdBHY9Xy1Bj4wZYFhf2MdATyJfxGFU4LAeBGeQcccnr2Hm9ypWPqD5oD1htvEr",
  "key1": "5j45QQyGweikgauD5jjAzyPDBQLRfeT5itqvYoJPWRJcqsc2QP5sgTSJDRUVoEac4dt2oWAp9pgTftBPFP7bx5z8",
  "key2": "zGx3ByB1dKukDt2ho3HNSAf76GxiJbnuoxQeQ74Z1WAT7ZJMg8XfvLLxmCaSQdMveLL6RbNJVtoXMucuxJNtpa3",
  "key3": "3P5UnxEThWMhPkzgAW5AFzctHwSBK1c5Q1oycMsGQPej9zeMDxNRTTwAdm4VkXvzCm65qtS5QtgwMchXwNqPCpGG",
  "key4": "3aanDEW8YJxqzyYEPyQRXAVo2s8HudrSN3d22xDmUbx21qKcEbD5FdSTxgFtAgpCXukUr5BkUsVbXjKAhY1QpaUV",
  "key5": "4TfeSYJU1WMXTx2J4uWPK4ZAF9DaFP9t6VNPpbCjM1JjGji7S84PD1Af21zQULF9nxh4S4gMgTgT3XGNAisiBYDg",
  "key6": "2cr35spnPDahyPCjHUn9iQDZjovxUJHwj3TgBefncyHkrFC2NXbRoFkA2k9SW2XAFbc17ZNLH4Gc5Uz3rNEtacHN",
  "key7": "61wxg8Jjpf15MYrnpS3vLWDxk9cQ5jCE9RuQpTX83P8tgFoFc1fho5JtxVvXEe6rrYBGPAFLMH5naBDpKYitSsMB",
  "key8": "4QbSese5rCq3sUBJCzSSffH3ZvxLTMz1vx8zBKo9F1rzVSjT68Kg4F4JDcsjiS4d548j4oz4Kqb3BA12sczD4SJc",
  "key9": "5AUVQruHLfRhq87BrZdJ172hNrPV1LdAVu7HijwEtZn6SJCuCWhFMCtdVs1tftbdfibqRuKcZFPpiuEuu9yA9Wwo",
  "key10": "3BFaitzPQbtteT8noxvgs1mJe3v4KgzQA9vErRRANfamvkVnc1KtFVJgRrXspMK7NssjW4Z7gGyiCxWtTuCWmXM8",
  "key11": "5JS3qgCcWqYxMDTWHhYAG2YGQFrXJXffTiZNjgwkkTQMyW629VahivSqpuqLmfm26cZcZCeoDcPUX2D7CwP1pUUB",
  "key12": "4mmfyTFFP5gPHMNqMBSgN4E2y9Hju57Rh8ZGpVD34wYPiL8tDZzeVPatSjjCpKTbpiF9aLP6VsVpR1pJxrWvJnK",
  "key13": "skUGib9CHYBbR554pf1SmZ1mPSPmmULdaseEVBdPfQBz5dgpvkVevXodeCFYnrVwD6HvriFzdeWjQjQ4QPL5mHA",
  "key14": "2Ryu2LbnTTnG9CzuJw4h7UsiKSBZWtTdzGzHJAi6u1ADVw3x22nChzkTZc8BuqoYe3bRqXNEGqoXWbqhGzkHq7ND",
  "key15": "3WBkv3AbgC1jrDKPHf8SzY7Phv6f3mdKroLcCHJKzFWhZ1Vo3TJRTRFXUd7pkZDbxGxLpp7KNnkYBqsNHHTV56Uh",
  "key16": "Hunm3dHfmWd7QqkfH5J4rwFuwcLNFVCeZHSdJkrhM9BnR4Ypk5RwiPBRMEN88wMVDP3hR8JmqodYZBkoM4Ps67R",
  "key17": "4MS7rksLJukxR4QLqmPsBWAbnFs4zkdcweeb6qvr9EPz4eJUPiV8tLExduVnEoE8osGoCiNUzUanZ5U84T6J71qX",
  "key18": "2gP1u4vQYPsYEquKjy9HhnJUwjaxwoDXT8Mj2PqfXjQbsvPaA6AiuLpLPTx1vzr8VkQj3up4uJJjxtD54JxZRJGV",
  "key19": "5DTxEmn7h4vCMxUUr8wYn7BgfBwtQvvbjNpKAarSVY3MpmCRccgKrjoySsz157sbWXsb1Jh9F6AZhsrot9KGSgED",
  "key20": "4L6NZUbAr8M2APGk8Pijq5LSaZDw5D4gG1DoBwZNnq7fLcWyUz4bU3Abj2GUeSCm7N9Zj4tm8scQFUotYL9hKDUG",
  "key21": "2nir2PAQ5YhqsYs1Sbzf6BeXriGL9JZN4NZ3i7BHF8zYUEANwiRikrxAsGGGGLfYf7pnq3QeuyapsLghiEofvaAc",
  "key22": "CGooLeGQt7GtugmtGH5AQx31okbti1NanpvkA7rtsMtoV6JzTVZGTwpiB825QSJgGqvFCuJEyZnszGSHB1iGjRa",
  "key23": "2yNbFAeuPsXdsSRYuButFwHUPaaej61epmHnNwm96wiPUWKmzCY8ybWZehXqwHBvwP8a9c7KWyaJeXRSYQsYJeS8",
  "key24": "4RRMB6i132m69ZvQpn7ZMo2ZzkV2UY3kcLfet7aFf9hhoPvsQRRwnuYQXzzjv6PvCD5tNEVtYPJxuXfyVXEY2RvY",
  "key25": "5Kiwv92YMaN9VaAk96zz3QyysYsdWwuqdgNsYhoa6HuUFLks9QWimWYG4vPCpsCvVGMTx7ettCY6breWq8UpxgMy"
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
