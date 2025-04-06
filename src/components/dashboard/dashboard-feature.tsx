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
    "3tBnCVimnyGW7BMV11s3Z59Av8SLR7BFvpXU9qsfNgSu3y7Ny3fZXVnwjuRp3xJLBenbxJ8ZfTymhuHMrfENyGh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pa3jCydJZ3HnzZ4wcfqewqxSZj48LGQeH7juCqRUCtbbgMSKczXYrNcJX2MZNTXtDqnHnTtgdGeHxikmjHHbF5f",
  "key1": "5zJYRbp6RRizk8Wemxp2Wg3sZFK9Go67HfU5SzfvYudzb7UfP5wyfzqoh3RVrNrJrrVtwfWoxB7TrCrGyRdjshMH",
  "key2": "uez1JJYKiUdUDw8Fu3LnXF8kw4TCEHi3wPhEP8oQYg1UAqcz3UybVERAHhapbeoXR8Wtc52KXEfQHxFNERcd9wz",
  "key3": "2BABNJrDsSinnLfXT442thXXYHVB8fA6uYa3Kj64tVorK2Z2Z1DKwLtk4kDeDEQyaTcg7jGaTGybJH26gwNnzQK5",
  "key4": "3QFU3sSRkbMsMmfq8wqS9YCWbeULPSof5XRPuq6r7VjNQxeZyz7kMpY8Y7VnbvqEk7etb2sEb3QnorpqT2zCLgbj",
  "key5": "Gm8hPaDjRPhBrr2xck4bEysNkd6FMP65wKcCNhXi9V7T7F2XeknzKGN85c5Md58bognTKDp1oGs9dfUrcgjnFCU",
  "key6": "2AQ5gjVh7kbyhW9QbjB1W3Y2YWvcZpnGyZ3X7aFXgaHHKtbLjyWh1VPZHjnkgZU1bqr6GA28MnAmA4wVaEuUKb7r",
  "key7": "4bhjVwFG3L4fbcbGExJGAagXsiiieHX741wYwZAi74MhZb4vz4FjGZfmxoRXrjDJbUH6wfQxNa9CwPvBYh6AWibh",
  "key8": "3TjGrxPB81FeQPtCaR7muGvxk8A73hKKEWDomAUJCAB6FZqrfUPVwqxZSCMiWQ1hY9ynrpgFFCGu9Uk1Ubrjab1p",
  "key9": "4MuEuwWtSn1zySuNYYagygs29SZwa7Dqbabxj7CtWHPbggp96v2bNkdT2SQuw76nXydxWB9bi1EUvoB42Kby58gB",
  "key10": "2rxPq4HYExDNe7dFREio4CqiQthuthYNGCPAWpV1DKBk7DnLx9NLb8Tm6RAxAzc461cEZRGBmV7thipaXwWKUAYh",
  "key11": "5t5RNMMmA6PJSPMxv6L154Bek4ye2eAhBjUxs83cWpReL3demvzxZA8L6uTUc44ETVDB6MRSuauVSbeiaq4k72Dw",
  "key12": "3vqhx6vecrkEfaPFzSSrxB7eJVdwfdJeEpVpfuac28M43kktHtdsN2i8tZSSywSVgFfxhupRudgLJspTWziubTos",
  "key13": "3GnDxfd8qB2yE6592jCkSpmTccFJY6ehJ7cZq4NsT1JaduoMhX5Dj1ZX4UH3A8kshbzNfy9wkowr1LiArmbmCoBP",
  "key14": "5SwTNrmdzDcsvCh1nMjyaXSWPAKVHk14mU11rW21oTLs6VeCVMki5AFYxuK8rCXiFHsRqeFKx15kUnj3rES7q36C",
  "key15": "2trCav3AB1qJg2XsJf9bEsmr1bNhGerTGw9DAkWTYCnxidgDphBdQqWYQwwVZejHmTtsdgQmHGDPdhTcasaxhzmK",
  "key16": "wTzd1uHqCStPznwaDHigcHbZg13RkRijYrMozypFESoZxnkpht6AScQrXhBeyEE14T2Cp3qm1i2c2xbppZNH722",
  "key17": "1TFhmNw6QkR7mh1TBm1kDiuh13bruEi7QVNZFEY7aGj8cBR76diamAa5Yb2s5V4uVB3vzpa8AwG9G1bqxAfEMn",
  "key18": "4mDxF7FWUq97mdPdU8fZYfCwdFhYih26DPJJ4daMxwMo8PuYxYtZnVeREwNHbfjPeiYdJZLK9HYkeiJxWbwkXFLq",
  "key19": "4ToGbSCrxqs5GPsZcdptKDa16Fb7FDxHQkQXA49ef8ZD9631Gr9aX3cu9iXimcP13EtPdjcrSEDEqk6Cx9KCyGRE",
  "key20": "4zB9iGa2JwKvCDKQX8iTTqWGQkeXv2MndYc6MhnscqwBHYAwfHuNzU6D8D3McCdoUjsS9byKyNJWqqESkauWFNfc",
  "key21": "cKF6VmbjrN7Tweo9fg6ANUbfM1X2YkxeJBdXuWkUPXsc1uxfL8oGrz9ZTLu4cPBSKWrdpqA68imVu2qK7hHxj8Q",
  "key22": "4YKTT22GsbAfvjmrjD4rWGJkqMinQEY79GYLBvxnKS5AiebnKBNmkNtZwn67KLNLq2ZXfieDk62T9T6TmP1rNCk8",
  "key23": "5dPT1mTR2ScWdZoBDe9E7JSG9g6wXWsD27nM17BCXRPf5d3LLFuKAXL1Ke677VwA8XDt5K42Ceixcm7onKnd9Fgt",
  "key24": "3AZtahXZDxi7FHwWb9wDeCZ39ghGBkniyC8bYKNCaLLheTyvvVwJkixuEhEzWbSAabwi9zeNeZBtLiFK3Lk1bggZ",
  "key25": "4fCbzpQ1rinw51Ai7LdFQcednhQcLBAL1Lt2rjLG3xKXiGwYjkyFxJrz1gPeK6mopZfCTkWZ7EaF7NFscdqos8pk"
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
