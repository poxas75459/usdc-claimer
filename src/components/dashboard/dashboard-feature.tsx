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
    "VUY3GhR1dDqzxoQqzFVZRBFFNT2gGugWnkXk1igzhgi9ir7D2TaMpyJtHJRtySRxDqvz7Et2izipvj5GKMZg7aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4FRyBRt7BG143jKoPTG7hWtpBi2aqVJswrDmeUrcFWvVqKcSe4z9G9mFEwBxtcv54iZcjK29gHwRHyfNEh2mZH",
  "key1": "2vqRUU84YU8xzYZb4yTmLcKbASum6K5DtuaFMNwb89vC8oNyrtWMqcY7wGFwQzpjqe8W68Ts6KFS9KBkGac5m93e",
  "key2": "5WZSWBJaxqQRV2q16fj4Dn2bBuDzpdBZq8W7KptuHncEcZ3y7cHn8otuxQ6spENz7Q8AuwmJGwgaVUafuW2YS7Y8",
  "key3": "vKrnHmAeke3Ub6eASMAy8Gg6rB225s1chSd5yhnC6uva1xmZe6QJTcb7M2EcM3tGsjexmzvW79J9zdp5o5oFmT3",
  "key4": "BrPLngZUjVfBxJbidBR8BzeKY2bsUv7S4EFN6GgpsyxQpc2YQd8ipif4DpQ5oUiMP8atAyrCNoiMo1dpw5vd4Qu",
  "key5": "5HEZ1nucN2atXYG3JMsga3qS6FY8bsJCEACdx7UUYPFC6wXsxkKeKQ9gMud83NLqzCAnxLrEfggstFriuroyArPc",
  "key6": "4KGMquc4mgKAAakwMV6YnEvQ1xGHhkanRVxFRZ6vZNkUyjqZbYmoHFPkXAWBi1j1bEPxBHBarGNjxnDMBiCKXEoP",
  "key7": "HkBz9Vg9rLvovEkWf2g8nJNsreQnCD2Cm1xH4bAtz8kTUorWEVMXanuiv3NoJMuQk7LmF5DyTdjbQ7ieS3bynvG",
  "key8": "4FUS932PsyvL8wpuyxEyJCKmuz5L8J5UiEey4bZmuRaQ62t6bAkGLoE83P3YYCr8Y8cSTFJze9G2HmT8QENKD4ch",
  "key9": "pqSg7QpgRq1h4XdCr7fan2dA385rYwupfiC5zv8U5pGDboNzQUQHtHcyC8PrcVVM4s4MkDvExwZ7aJAvKKHnGEJ",
  "key10": "2By49yzWKQMmnPJfX6QYM3czYSss62zQ4PsWm8rejhgMaAsnG1mkVo2eL9EQwnS7SHmm4q6a4ZJFwvvXfXpBtnFX",
  "key11": "2YntwEUJ1TG2y1bNqTeDu4jiS5A5UhYwaJkPgha8t5L3Vhe2FQUzP3Hswr6PkdVRGg29ukRq5C1wbzRJcMo8eTXt",
  "key12": "5MXA1DgauyUZAiCn6aGyJp2Z14hNLKF1oLLCWARak8Qnfp9ULzK7jSnRyfPTtWaHZ4oZpc6gZb81SxGcoZm5Vqh8",
  "key13": "3wd9zMAUhxdLMbZUP3YWKzXJJ3kMkq2rMEX1HhKnL8p3QakBGL7VKBwEptNTCvkvLcTea2LAiMTAgKFGxAX2wnuh",
  "key14": "mXbEncr17Wtic4Xc9Hu9PCprVMSZ1b3t2TfqDVhDSBrdEBJTKyRNYJD12cqn5sQvqMbXg4XTzXMUHfiBzg8B2Mn",
  "key15": "17RPSzF6DKj1FVWYTV1MFHpAMpkbJLsLiMM44m64ojG9rHJeBmW5BG8bpPeTNmF7Urh2T5yf8Yvrz4mYFssUasb",
  "key16": "fF6pKo7zgRfJHM5rowXU5kN4Ad4ERK3BPeBZ8b3RDE7DFWqV9YffbWjPomSMGSsXiAnQZ2FLdviHTJ52PvDxipa",
  "key17": "48DLRZH3a2YViUCWU3a2Xtu3Qm92QTsrSEYekyHFP4fnxAMCcA89n3DFvjUjmgxFTZAU248jXEWUT331Dj4VM6Xk",
  "key18": "4PeQAB9JKfXb6GAauzaw3pyYyuA6rLEYv5bDd6YtWY8EzdQYaiSjnaNatWVeq13yEzJZhGqXgR3fMw2bn1HAGBqy",
  "key19": "VJsfoFWV4evXwuFHk2yugoSqpJZN1UEZMYM2yvC5YoR7drJwNfQRdG8nhyHTYe21mcwVeYjzraTZWcnwtfUFdrA",
  "key20": "5wNqCxphyesoiceaEvz7Xu5basyPz2vq4UAqqfqgFiAJ8D9omVLTrjMQ9ZTQ6T6XJgQ1zCvJb56g8gfNSo4LsGS3",
  "key21": "26AyHKhapwkFmWPVaMuCfjxzW7nvL6MNxXHyPdTWYbqsbazcQMncrRLbjTUbZbF78jfHdM2zL4st7XrwpUei6SCM",
  "key22": "54SnNcFitux2zZ6mS6nopa3jLiCFsxv81E9VYgTKAiHsNFFS6ShpEXV58pzKuZauicqBm81SS58StH44kuQcGcnm",
  "key23": "4EmcwUzqnpZNHoS5rYkvKx91TWRYRwwc5XzAcHJhXB45n6J2UnSJYa4NHo9TYefUx5CY6bX49dfGacboSYNSBQfp",
  "key24": "5eEtPq4jccTptzz3meMvr4AxDNPR858q9su5kf7y4bCiKqrdUpfNvfbTsYawE5QReJwdjD1uQA68NLTCUQajnQDL",
  "key25": "49nWM1EYz72Ar2tAACVLUBN2eLJuuZdyosAU8UkDpCuhhmCxp8pYj3ycLWkC7H1dBn9UdfS2zp1fXVGig84G3t8X",
  "key26": "2utMJxwio7EcCZpGLu3LMSXYGsZzYMwmPKT6nyxwwBXTMxKkwvfTo7cvZGwNpvYMBFA8FiPY7PaXVubuB5SE7K94"
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
