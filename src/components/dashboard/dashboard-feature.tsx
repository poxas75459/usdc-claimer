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
    "8ybVhednFMjwnX2FAKpVebvWjaQZWcRSjwHKrwxpad8gf8Kw9kYT75AfMUSt4Ssm9tD5c1S8PM6jJPuHGgYP2YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nq6tTPrQrSKYuUyWu2BinSJjFrgZUJxCHmycdvgUS5rffxgE8XggD7abg5MznBQRnRVb2yKbnMvxDa73N7Jy5xP",
  "key1": "x5oJBi6nXdm3QvxwDm1WpP996jG4zszpNU4H9qL8ACWPRnVbaXnQB1jcUjPYXaLSu9WYptsSFLEQhDcabrcN6tB",
  "key2": "3vHF9ZBseCvH83RHX8DhwAugpZUiaAQ8vJfRpPcfXeytDBukhzxVsDum1Ht3pWi4wt93FayEYvRQjjNEW11mmutt",
  "key3": "4Gh3FAy3E1ZcxXQpccTNHmRBgiot6tr2Mcc1wsRNgk1M6cSZ3E1cVUTZo6TPJgkicvqmUU6C4iKFiijKsFGJSJPi",
  "key4": "wapemH4qAKKYnGYSpqoRFBQ9SKCqg5o44QyUmSJ8D5jJgK9FY6NJaQGenPX1v6iZgwGw8QRPCMHCpC5U9fAQxxN",
  "key5": "4Nt8PkLFJX8nvTEe6j4LEnWcvet9o7kLwEjcxia315m1JDeiYXe6pQRAHnFCWkLah1iJB9HMQfhu5tneBEpDtUAi",
  "key6": "54NeSwWZ6G8M5dWDf68arN9L5grk7vfEbMBTZdXjUqQudtVeMiuPeJX4BKuVhDSdbqxhBZjENMPTX35XGxqh23Zf",
  "key7": "5PmSewsRE8QJrzBfUJNrji9WTutdzarGdnumR4KD6shwJqcRYaJnDxEusYqVagT6npup939QMUsrkZwGYiZnFb8Y",
  "key8": "Q8b93u94kM9pwL5G3RvAgkgWq747rLbkdvMJsigfMgvc7rW1BsMXDioM9HzTfWkgYG4E2DVYVeS4C1WYi1sgXpP",
  "key9": "31CJJiKzasCED2w2jJ7oESGXLwvB6fa7VwF4HbgMrQybzs5SR6p9hKBQ8Sics1JaX79mvSaijWeAxUMsmR3J2i4W",
  "key10": "5Ya2qcBfTBqEJUhKBMeG2egDPiipQyMbj2DQCdBpfBrtQUyeJS3w268AqBSnpyrrvbuqayK2q3AntWV32rEQhAEp",
  "key11": "2oVWPHPnTk1vuxDY4CYvKRsK9NNcLcixQvzkkzNtHxuK4Kd11e1TMXPxPiS8cDMcNxt1NQvhzvwkF13NFAmcfieP",
  "key12": "4GXdKBM3wCfTx5ETsAQKj98XvMrJ4MxQSevsikVxwtg3DWd6XPTB9x6j8Fko7riQzZaC6DqauWyfCULa8HevonjB",
  "key13": "5DZQtyCeDsXPUXDSgoaToffTZxGo6iGG4sbZivafW8oCfnhVUsZfyhszHAa6sXUD2mtzJLqBqmGvej47CF9urDPf",
  "key14": "31Kct9yAkgQN9a4fG9XMfkmxvgyfztSYYAt6U6s5Ld6ZPDYFNfvZK27LjwKvrXxi9yNYiANuKtNsaVnybTKfra9Z",
  "key15": "2RZPE6ctgiNcRoJSS4NccYxBLJESXtA8gi8dBDDwVXTMwxExLoSbUkbqde4bczyqejZatJYfPMFVg8iQn15Q8ceu",
  "key16": "3d63BcsZYKSuxE8pH2zinTjtUQhdYf5UqNKApLNQJzQxRaVnW582PNwFWrVxFBNmkYq6UoqW2BtLczsDKkWHdJ9Z",
  "key17": "4ghz5DT5xhd2BofqBYrT2x2AmiiMPiNu77SMaajfvY9dfp6j9QzUpHS3uDoaJB2JexxnSUkrb3riQjgwfpQYm3Ch",
  "key18": "2MwskFpUWvxz68X3W4uEeESb4HsVHmLRfUABSKf67FW43uWpFvXoor5CutrtYKCvbW18usWxNjpFKsyUq1S3KTme",
  "key19": "2MTck6n169mP6DL6YFEzNVPqRZuYscytsXTsA9r1BxQy9vAGExoBCZWqnnXP4CzDbgF5iTo532VKhWxWLbJGwPJQ",
  "key20": "4GxRPJiLKUkkCeBS2DpZhQhxRaA1Fu2SQp6zayWS4PwEHgwMwjzWgRLUW3bKmeWSp2NpeWeCm6Q7kBQtjiHKzW2Q",
  "key21": "a82Jfm4d1p7r83AWUcjFgsuV5w162gvnEGGGLjj5kejL2ZrWgpK77MgDhQQaS6NsZDsTv7HXn45JG844iqrP6xm",
  "key22": "4w8CAuAQ67snzVrA7Z1D2AXSmNBuAnMGsjqaWTKVgcrRqPBKceeGn9xz325R9SWwjWXLUUkTiFppYDHuSkJ5xHq4",
  "key23": "3yWuUzrcnm2NnwsBzxZ7oCgM2KZz5FuNfrVevx4rqzMRGdmiRS26B8h8cZZrP3r8wSRqb3PzJq8ZnmjRwCccuWas",
  "key24": "3k4sK6guc9QPPcrE2rJXXMwyJTJ7bwU6rQnSVpackbgH2M8zXojqFXnjWLF9HCbqHyGkawDruvpWgaFYZd3Wxjug",
  "key25": "4yBRFU4k8ZuThMkugUcKqdENCioAHZ5BRLNjMWzxCfGUd53pRoT3vQXiH7qGbPDJfSv287aBN11WQxvJ85Jb1MGs",
  "key26": "4YAQuWDty3gyinDK5mJ6YA7EM7VD43jvxm7iwU4j7caRh5QNHWHevupw8RViw8EHGPJ6skiz7Sd72z3SwiHqEg2C",
  "key27": "2W1x97sRigobFkkuFhbCKsfsGLgDQh53vLVurTm1iEZUH3pq5nN2oSbMBxMKHwqkkruCGTYbcPj38MUFEAxXwQy2",
  "key28": "4mrwrJnLXBhsqeSgFxxZQBXzjnapFLXuuhUEr2eHxkHq3E1zTU5LkAdwngbaMaCjrS92iSuN1w1uGjNH1YCeCr8k",
  "key29": "4Z4jjySRvzWNx6bCDhCQvYZbfN99jotQn5TtNbdnohhUTgpLwpMKDtN8GbXiL1PLxZZ5wgy8VD2cUHxCqkpVbdZz",
  "key30": "4qG7CEvva2xucM1m6FARYUwTYvFzXcktjtZxcb1JmeojaNb5AXwVtH41aLfXuwCsiinU6Pm7YYqJvq6SNwazGqC3",
  "key31": "5QLZhnzmRSg1jcvcemsTM5rswfco3JeqbuNWQ8QR1WfPJeMbp9tuD6opcxHMV2smeTF3mcRkxU2RgzdL3pPNgfg3",
  "key32": "3PQjs1SMYxDTmXbzxYT9eJoaAMt7uCHjQdLznZMSK43SG2XWKgZSVNh2Lda29ggcaae7RcwusP9pNgFLYeQhZcCL",
  "key33": "4L1YtCuLPk75pQ34cRt8fTNxZ6xQU8sdD8e7kaLXR4w1dn1mjSXvR6qzN5P8oLv7wJjNDCqhat1iKNRjHJwTuckG"
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
