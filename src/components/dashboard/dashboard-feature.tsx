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
    "5dbiX11NZmptn9G13upGuKzdUkLVyJhkyM9Q23wEktiWxoeLz6sdAcwJQGth5cYUQwcQq74WhE4CDJvFA8ScuJv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNQ3DV6TaV6s1MLfVDcJV1M3asBDbmDuydPnQyycTnHAXCECgkWPUYGYmeEKJvvX7s6Eopve6Tpsz9oBeFVb9KK",
  "key1": "58LmQoYPQuGh1cG16HjHQ9swiha8kbWgSta7NmCcDLTWMMvCeyMoYjbAnLQLMphVXwtEDUhh9SX5hmFYkbBSQZNQ",
  "key2": "7wecWLbim1eMcfWyN2kQebwJbiFXUGyvuKAkTT4wgKPykgco4F9h6u5QjNBsjGa2VfmLVLk3TLzvgbTvWQJuMFN",
  "key3": "5CCbBBXfxHDYmrJ1ThYFwmiwv6WL8QBBJJrz5ygbySuBun2WxGLdjnRckFNhcWsQUyDTzGgRwqBDjaKpknR6QaaL",
  "key4": "4xFZfEsoQDoH2sUWs6pXZA9gaqYwH44ydXDxLQCgEB2czfEY7WBRUwVx7xFSbW5ckzqRFMgzLEHLyyh1whN1asGC",
  "key5": "5cjAhuAMzHj9m42BwzUJSuYrERm85DYRiFGMfCaiHKuU5167hEm3tHzjqBjn1965rbqzPo2Z3PFKzw23kuMwYgjz",
  "key6": "ETLhK6vvt9sr4UvpDXXe5FdHVrP2S9HGKaGA91aQiXGR7NuTffhWmPpj78LiDhNR9wafTWCjrQVoLK48FVppT1t",
  "key7": "2XbafRnG6R5L7no45qPmqQSo1h6i152NrQinHMwekBMvc4B6i8VFMVchCpVE1Mbo8eBxTZbKb1QNqaanudN93eoB",
  "key8": "33hJWw7Aa8fR5fPT4YsnKhz3oP4ZEsJZZrVhfafz9wr9BANrEVGGkKvhg84mVqwqrVJ4qmUd38W1YKju1NH81YUc",
  "key9": "67gs3XnpW14SziCg2BLcYUGid5KEKUyDocku9T8xYW8UbS2Zh8LnHAVPZDXwPmmyzAyqZuRWrWS6LkJkwGvBeQkE",
  "key10": "3kmDVUXMmLKp9JFiZxwYNNnnDUkVasFFkMr2aNeoTzPKpWNicmoMjtjzwZWQ2eNLFvL7uegD5PrzyrSmUipmQE6L",
  "key11": "2CFWKviftqo7hWPpJ4h4yXETTjZ3WxFmhKYvSDxm2JS8AjruWJDMbhkMz7N5ChFbXVHNMK6BzAqYqrwUGDWn5iH",
  "key12": "63TTK7Kt8TMpCxZLhmLFmAA4G9mHBiKfxbszgocmTDErNRqd9ieDEPhcGHDrCeLveedrYN4Pfhc6UNBJpkt7J9LQ",
  "key13": "5hZr8Fy9pJqhncgcKEknHUqHhncsdJvyb8UixkQhvMGZG4Jwu4ZDs8ibNTmaxJNYi95EMDMVhW9HJ5sFFGmqHoai",
  "key14": "3k5WH8Xu91as6Rhq78XJzxvMDYXB2sZs3xocvkqiHCu52XgkTH5yne69L1XLbhBULVj3vw8R6cCkv73F1rRSrci7",
  "key15": "9n5ky3SyFEtta8SXshcPNjtcKYKxcqagc2UHHZrkJes29GyWHZeyPTrH1ixLHG3ddjmnCyFhkHqtrss17YAfwEU",
  "key16": "tvBomy9j739jfWYH8AMfQ7PywFmGnFopb9v5hvrYxWkqJZvHsdHEkkDxbvSrghX5z1ZFjgo77n2t53hYTHZ8ktx",
  "key17": "2wsJtrAJAgNpLQBNjX1Up2ZJ2GRWMnSfEmsba5NTZoQJ1Ud2N3JcF4REPkyRW1yYZsdz8QJPg6VBreR1rFRLcdac",
  "key18": "3ynaFcexnyE2CwGwhk5G7HX2Hqd6BmB7Kt5Hx3KcyFicpWHUwDmLN74TVNbd5HuUpaFw3Tmpzm5JPXMdFLHyBm93",
  "key19": "NF8KfsnwwCDURbS415p7uafSKES5jXa1WytRK781q2BKNRM9igbHMaQETJ3qwziHxA7CJ7NErS7P4ve5e6Aryqa",
  "key20": "4boB8tvKYnmE1o4iakTScXdkzVRKnHDCew5Wd29vQ51X3uhk6ionrJZxa6ocf9cFMtQmHRhQXGtvWiRVq4xURrfm",
  "key21": "YDWhvdNzTeNYmwswemK8JckP1ynR5WX3eHo1apTbDtx73z1ChGrqqhdcAiufrLhMPurWkjxaHwERxNKtBmStymj",
  "key22": "eS6dWRnZpai218yhuNAztmT5dqoQXBfD83xBwX1kxhw1GW7uPenNC92bsWGwRdJ5L7wPJLwgwukw44AGHa85e77",
  "key23": "294XGEZJx7x5K2fqyepq3aRRqWD8Tem43QPniTv932KW4aPfQXKbKgXrqV55SRqfiYRJxj34ZrzzN8JyczRVivBM",
  "key24": "52jpdqHGzXRj9BBdR46RomFj4ZwnYBExWLg6pxc6bMGQKxXAy2GnYnPNpCYsRi81JMZxSSCDznCLsTJwegwY43wi",
  "key25": "3uayCPjmw22f6YvZEWhM1LfYqDQen7D8JXDrTt7JtDZ5rYdKaCkfmFyFJzZf6G6dAosBBns34yM2V2AmiVnuvwwv",
  "key26": "5cffDG1h312gXYDn8iFeM6P3irwigHLGZX2sMRx1QJsvgKUwHsYA7kGpwmrghSzDQmb5rVeSwuBAUEyGwhwLkBHp",
  "key27": "4oWeiGduKH3bSjHAGVQL3Tgee9JiAJ14f94pBopVFqWQiVkRVXs5YEJYSa3pQgiUjKuUQxESwDm6RGCMFkFhTnkM",
  "key28": "27YWRKrNQTwoU65YVhce5a11RyQnBY9aBs3xZxwRoe6LN4QzrtP2nvkfmZNaPbCsLQfEk5TZypSvzjMdvcbc7GUu",
  "key29": "fCNbMHwr2bv5fksx7vSxCzm8YKtwFaqgQG6PGQQzFww7MBJsuwVqYHug8dhtvdPUWntcBsFViypkHYZbanSLtrX",
  "key30": "2uyQ29E8dHFLDq8ssf5q7cL4tNXMcp15X8p8uqUbdwtdc6D7H7g8HUrg5eE61M34MMWRxksUD1Nob9tHAxw8TAd4"
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
