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
    "672vQtKowWQSaPtWiy3tYHz1YGV1pCt95D4LjznyZLAaSFMAgeXvU3SyRgD7mrH14pvLdWHpm35x419tuqTaUn5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yW1KqwA8HxXZReknauU7QfPwD5z1RZa3ap8BB1NAzKYzTzRk1tU5BBd3YccL5Z4D9SZVs7CK2p2WA65y5tWKdhU",
  "key1": "42XWtoJ2YSgfyr72YkLiScTsRpMHGyTviMhtdaTz2hbjVuMAHRKeAhL8ocRg83LahYW1DBXL3tTKzKEZsyR8bwn9",
  "key2": "4fuepdJG539H94ss6nixDM5m4nJU7cGPpJPEP1hGMcvXvnxKLw3mhNSoWfqgLPLPHtWyAFGjkBbvjwqkBW8ycC4K",
  "key3": "4t4sNK64EhSVqHwT1ZBKNpp7DuQU6iJdFWtCcPEsMhypGswAoT4QEG5GhNHMpYAWyqCvBAJGLqeaqjhRWLsLPH5R",
  "key4": "3bvVLxhPyXPzTKUzCCpDmbtjaoCq4Ux52Yc7wcGu4LddsbTUdEZu7Pngdwx6d6inPrcKH3PLMWRSS6szdKHGSbUF",
  "key5": "ci7oqGaf4YpMdvbmPtieADitM663AuZ7CNnqsWhgRt7jEZdCKpD7WidBQiHaNRJymA2FMz9BSz8GrzWFLVFjn9Z",
  "key6": "ZVuRZMSAtxoR8iUURfraFicBkFr9w9dvjEP27HANuuUg7xie8NRVrq1TjowkjrFroMp1hEpgGdQcBzGi9okqRRQ",
  "key7": "6WB7DgZGwYXMm5mLLXdf2vsCAQ3zFNoAMRTMHG2V2kqK6YMarNSVmhb1a4KgrK1aSkJpYuFVKiTFjmTaWrVyX8Q",
  "key8": "5RdXaNH6jroja7RLe73QBdsPpZ9oVad8z4SXLxgWW9snwKALkE3zHK9qPLqLDYakv6LX8NTTGxTBS4sWrr3hD58U",
  "key9": "66nBnDNWmRiQFqtJ1d4ciig5bGgkvkxKcmE8EuFBrgvc3UoqUkDWmYgW8Jo2K2bz5xJWVWBqqt1DPiZxjcQZvtir",
  "key10": "4DH4Kph1FtKhJ9N62WF2fH8TfzEY97VoEjJBB3BZfoAzradptBGMHXwqLWM6ZZFEhb77MQFrosJcoqUr32jG23gr",
  "key11": "26nCv8wNXVGqwF6zZkgWbggVQNCCi9ugTi57dzwMfyQqUo4t9nAXX9fahuix5S5ybfF3srCVG7qhc3Yb73GGUb6A",
  "key12": "2DcxQurUVdygGW7t6kAqFNP23occLi9EsqmFYrZb2GFf39eLVs2YiS1r7Jr56rPYyxH6HsV2bP3UVDiADVfVg7L1",
  "key13": "DHsacPreGxE9HFfBrjtKUkGyHKRrdP2Ym7sbv7y5K9kvcr9uj9bZuAM19eGoZ3tXf2hGQom5SAbRvfyi2DnKK29",
  "key14": "3cKjduKZXHZm4sukt5LwZ28EdG48J2A6mofvGnJEBdof9a5jeGLCrzPs7wbTj4rCcQHFc5eDcbP2AMddLHrkaKvd",
  "key15": "3nw43CUKwC235BpPTPUBNn99dGUXETTSPhSZHbu93Dc3kk91id9subq8Fr8B2hn3fpZpS3UY2qZjWMLFxNgXqqSc",
  "key16": "74Jp8HjeE7ubkPf2tS1v69EuxketbSbr4pFAJnfrbsbjLqFuPKXtSrXJZ48Vfi3hfmcLibP9vCi5M36kxJfnuEE",
  "key17": "2TKtesNx9YjAAqv7LSqd2kFrDedjWRMAWLbhgrwfypMF1GLaPaZznWKV43JL1HVnD6HC2YcM76wod2hQoZGG1Z2t",
  "key18": "3wFLnQggz9LxPoS18tUcxffK4TVrtnmD5uAokuNNTwgMUYqBvVaEJBAQZAnH8pKkcF1vcoZ89XqnMDgpBodLF6nj",
  "key19": "3HRhafgSmeU9HiWAPqoqY7e7pE1EDVUNtrf1WCjSMUtfAJpXfZfgbNicU3jnZrcWsPa8k28FbB1BbhHpjgxjv5zk",
  "key20": "2kBNKymPt5GP6m3ncpPJzc2yZuvgrw4vZFEzckoRUZLA1BYfjzjCnqAHFsQeVbSe2atbeBLtqRb6pSrEcwaLr1Q5",
  "key21": "2dyao4Zxg1oLXkLKqR6sX5nskNkhHXUAzXXswL29wozev2p7C3Q1y1cbRJpnvXjXaowGuF49n41vm8RZp7LskXxy",
  "key22": "2BCT7UtZ8STTVZfC6Fw4Kae2DSxdhwdMtuFYbLVVgAJGhzCaPgKSVZtcGgVt1U4LF53Qawhhwqp8QtBME5Gs3qaw",
  "key23": "62AEZwuEPvznfmePakFj5iMsSpq2Q3XXQPvDznrLP3iek5KckusPhhBgCiDXub7kjmLLzLSnxECoXBT5qzmSLBWz",
  "key24": "63VVJerHvAznWGDTnmKM7MAU7Aec7PyACfqmT9oxqsiaZU7AQtQ1zH8KqGa4H3sYfnZKyZyNqJv1FKDudQXy3mdG",
  "key25": "26DQSAyP2HFmPtNdPUVeyBLLxeQUvb6YfmSPQWrPKEKuaxLQaUW1TQE2JhZGuNaWyDQzqWSpPXPsMeqzVGCbGno2",
  "key26": "53zQogJ3wFYsuM25bDLXAujVjvpZeA1QrdtDRKMDQPqQgfTYbyUmAYbVsUE7CVorPeJTaDUQs87iXsG9qWXnuc31",
  "key27": "2UcW4sM9uEyNagb9KFbmfnHE3TwowkDb4nW3rL2Zm5rXCVgLsotxAvyKuRhmJpMsHvpXzgcoY4bN9Rsp3MeTh5Gq"
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
