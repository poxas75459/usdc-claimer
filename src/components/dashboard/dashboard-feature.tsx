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
    "BgdnttaGzqVu6T6gzEUezcdnPZjY1xnM9e4gRi8kWVweGXeD5zDBemA9LYhA5npmM1sSwW2s4XigM9cC2uRTdis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtDxdYPwKo8h92eDtvhqeGT71rgfLTFe2uUHVpyAfSuQYWo4cWbams8TyRNauKEBMNEPEUzvejAzRuuhL4tr9k9",
  "key1": "5iEZvdbbCaFMUzdM2WENXRG5PLuWRzTuqh9DMfEpNtbC5W8tWu1hqWGUEokQthM7TE4T1DtgHjR5U9zY3TLFhgiQ",
  "key2": "5puszWEhj2H3meTghWfoDeZqnjiXNNSehD3MM7BaHPZReGiimYJc1iJ9ECW7FwEQLvrRMryNUtZx7csX7ybmXj51",
  "key3": "3VVxnd5r8xLXCLKvXmSK9P2uFxfhMMmYSQZXWBaF32EFYPz47XEercEsaoHVBhpwMnBReDnqi72jGww5XYhEeTcB",
  "key4": "5u8imuELD2fYqCa5jG2iT9qd7ofkKSQsHR986aYzMxKfF872X62f8jBVABpWPaQqgtsyDgSYfCzTR3CJgXwpcpNa",
  "key5": "zE1s8jx4cSgUDkdfqkzd462Qz5Df2mr1AcKLbcvEK4zin3Hg6vwfTRyMBManeDkcgmSDW4Cc59fVWRoTYG97yEZ",
  "key6": "5T48WkBu2Z9y18FVNvYY9u8Z7TndFzVYV3EFNV2nz5XvqoHhUxwNzqxPUdGYjcDzs1Qd4qGRYBbd8WJRPMZPF4JK",
  "key7": "Y3xM7XqDCFkmDntxX4MPJZmDx4chjKHqwFRfVbqxtrgxYy42WVyL1VSRtSHowimXv9Exb1TGocntoJcnZXCYGAT",
  "key8": "46KMuHxLiynMSa2XjYnAeZJJKSxPJEdzxELrhTypKsxbN6pFyv5Raq2f34zo1sQNPvHgWc9CW3kZPNEmARVoWcdR",
  "key9": "2CNEYvcoqnqaxmZMfBfHGiD4Avj3irHfHnmk1crC54HHTS5moUHmAQfWhK4mrrE21qq7GyxMcuvRTpMjRXZk2KDp",
  "key10": "5DjEGpFPnTotupbpYGFdKxqpzoREcfVrvaKQoMc3DyM1pfareLLzWZs5m1Ej4aiRLcFZwo5mJY4nYhQBJ5BKvFVC",
  "key11": "2kKyXdpMJ3MEt4R1SriewNCyeT2o1mXaVaFQdZhosv3MUKWqo1sYaHxWzBrGHAoxsS5aexekHMNrVT6qWs7ShHS3",
  "key12": "Dz5t37y9T1MktLfvejQye6dWAkHSRyDe5oemHthWhPexd2wjabPqbpR3WjXiQ6E6DM5RG4T2bjodKQwjQmiwmeF",
  "key13": "4Ty7psWTX3s4k2DUnosuGn9i6sHHEYxajEeNhfFnayqyfogmpA83vTQ8X86FKGcqNzscH7Se5UBFaqQzDW9Hpo1",
  "key14": "4nsECEMu2XvzYkA78Etek94wVZnTBTwZy43kVfMTAnQUvX3BDSJDfixMx5Srv3ZXQctiNn5D8tq9QXB9YheGxJiM",
  "key15": "4sVZQAi6wVKf3Camao2PhkD5wq1vR9CtNanhT9wtUN3mdpCEZis9PP5HFnc7giJLnoWCaCM6CWyFqQnq6HfL3hR3",
  "key16": "25mtgviCnVugFEz4mbpR4bTm7wrPtivAXTd4cNfs9zUEKcbVkTgTP9sPW49Y8FYgRsnWV2nq9fMPniVJkcrVWwMo",
  "key17": "29tcc8i3TmfgQbdApZZRsa89nZvHLgwsXRbmv8VH9VnW44y8yjWqbU2kjHR1mmfceXKNBQC5kyH3mhzYsLSW56qm",
  "key18": "4NeH91zJWJg4Td2zc36vL1vAvD1gzdfkzhthBGP73UFap6WncLuDpN3XqyZWWeYX4sUxPJZfSiiA7UuB8ShQ3yQF",
  "key19": "4masuVbHjDkcYkaqsS251gsYshxVbmB2ZKyvopYc3jn5qed24yDEBh1zqTNtNEFcvSHXG4LQH6bCNpoDZL9r8Jcb",
  "key20": "Rmd97DDSAnQcqytUWiVidR6wwe59sM8FrdyJD8GEudeBYTzMXrUmyBDQJcC35wFY1nTuSSvm7BzSpsi683EDVpu",
  "key21": "5yegY6VjP7DwmQBnukWssfG8p5FjfdnAvxQSXiEvkyGZnKiidiSH3efLjocCf5NYxkuPZ8gocEZu5GRZSk8B8A5t",
  "key22": "3jFpuzWbZzpa8EYxEypxJsGPWtL1bkXT9eyYMTMhNhyJXkVX4nHiRZibMtS57P9VkA9M99yRSKQvj88pqspPgMdv",
  "key23": "2mY7RTzWjTpYPvPhL2eRu2v7BPx5vvvhWEAEZtBBHJqw3n8vfK574kL5cxpL4AVT7zK3wTTmoZqeSWdiyJbL3Qqr",
  "key24": "58y37vKjVu5MWAUyGKJF1R6emr44WdHHyYSEcZRMjmtQ2UN8MUW1nF8Ya8BNjNSbohAmKqaSDKtobEkdttm2XoBC",
  "key25": "4KdbSCyA2VEzB4CdqAMLrdZv9EQx9RLG4Fk8PzYKh9tkV8xE1F9Aq9me8WYoPsMnL8P8V8h7GXidFUtjhWxnewzJ",
  "key26": "cJbh8T5jWcp8JWLqcFPsgCEdijAQhqAFqkVsot459mZsXCbVz2aCvfMFSkWnd2R4WRto61cHhsk8oz6DDiink2W",
  "key27": "5wxwHCasT4dT6kQoDdkWZxEpN1yumNN9ZowzevMGZj4DsHkNAB1mwHRpXWvPczJrigf2hauD7sJpgRgVrRmU3KnA",
  "key28": "5qPq84ztpir9wN46BrGB3qFSxHN8eiJFBAQn7S5LXeDDnAvK49CqJwDz9a6p7JwgwgPxpXKyxxBrmxRje6ymZ7KR",
  "key29": "41SawYPJyy8Gfr2V1x6CNRr7H4MVn6ecbrDdp4CJYv3Fzbsaoc3dip816fBCzd4FV8pbBoMGdeu5vew7sfJ3zYeB",
  "key30": "4CskJHeU8JhS7WMsf3JXajPrEcC4eUpmbLkFfzofGpnRgYA71HKvrdcaenENTjKx2YvciQgfjsBqQj1YHf9fYfa7",
  "key31": "2o8iZwDqGpZyRFxvPCuY9rwBFV56gSV35ciL8ixE4DySWedafm6DtcFcta2CRC1Yz2VT4ojpjzWjNaycXYvipppM",
  "key32": "FzDou6Vr5QztT8YnKyYK6onyxwW5ietuvmQAiAfLkmTkmeSewQhQr2T5Zhpii4EEVqxP2L9Aga1DMt7EnYkKchk",
  "key33": "5UWmRTvHT1pJT9ZoRVotcfD3bPvQACUSbRhuzh3TqbYDmTDbJMxkvYhGpBoYxZZzTyfMAnaTxCWtXwFpKiDPSn3r",
  "key34": "521ErMiH5Hy1fHsDgGwS759owj2qwWzQ5Sumgs1tKuryvjDHbt4FP8JmG9eYp1Bxumx8RoE53GuCmg5EnavLoD9Z",
  "key35": "3vZ8UeNB1jtH67HHQw9Qq71WjumrY9eM333y5jdap2F3pewrKquamKWLxetJQcDdU2sWrzUWEDvP1TyrTExCguaS",
  "key36": "2q94CsWStAPVniPZczTXWDgxhKFQHHCz2z2DBTg3Qy8mN5wCCtEjnGPjUEpbHVHfE7WAKSoA1hVb4bYTdaurt7Ta",
  "key37": "36gZxVvPUqJMnFpJSnhifNWxo2JrEAGXPeSC4kChii25Sy16YvERcg8DZZMn2KNMQBMfu4eD69UozMw7XF5hiPow"
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
