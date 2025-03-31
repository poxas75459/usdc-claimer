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
    "2wxNAeA4CNj7u6KTsWzkfp9iuNGfiiFxUBUyfq8YZgx9PHrokh2iC3us2m9uz69bUHrbJLC3UPagjw29329hjVwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQW2rUcwsmaAo7QNJePopXU4ZP4S6CMcMGvqR1kTFcWEGm57MZ3aQ8go6LdebYhU9Ng8sriKEHBwtEci3PRKadk",
  "key1": "3euan5HivVwanGA5FscPiC6QHYPVDFCSGjZAgS8CUb6Xu9tmf5NXvddGuPMAnYq3BKxHxnHU9nq8Hovmrxbb5Q1C",
  "key2": "3z629mgCkeEL9YDLH5Dq4AFeN4oNd1NjWNCebFgjZFvDhYDD8m1TbhUH225V8VnTrsFhvArWCYgnkVPPC3qhafe1",
  "key3": "3zxbpCrDDNfho9HeoABzoaGsRQuMq9TegUomLRfe9LLYRh9gey4unkiXa5wHmpNqAtrLS7Pg39aXkT7hz2bjqJtY",
  "key4": "4Kn1FRFNkFD9YxqpR2onEHRehqRM22aDk1mERndXrhErMqDqAscpDaEJkd7aTsREH2xvHjNXRdqzEuoFxxtopZQ1",
  "key5": "4MCe6gonYgaL8UiWGmvLHdyvno3iNnQim8MZh4Way5owsngW1RWDSxzNLwvCcpcFQVtuyVCEjzfqqNZxAGtxJpeQ",
  "key6": "3oDfY7zbVYfEpuA79wZWNkmYLHzEbRVub9CevJMaw7Bd5oBt7E1k7F2ed4gbDdTd3KiAtCrkoyFgUQoktfiG9RFU",
  "key7": "5JdXbmf4Gsah1RqdsdMAced2TT7r5BsRgWZzAM2m4N5qzcQ9bDVB7CbGwDHB1rTzjVJBooCdpZ4m2pMkbj8GSLZ6",
  "key8": "49X7vg2kgqhxXpZXxdxLjsUZWttL7KBNrddAcW8tVAi9yawUwtDjV9gegqicWKsKQZuW3HWF6RjRHz9qnk6ynHGM",
  "key9": "2xfoDgQkYhif6xhHoG6iXbQxBZfrf1qntZyimbDDmDr5NYAKd9xzMBabZJwnRBpvpx4c1JGmyKSu23LfWzUtSwes",
  "key10": "4J5sjuUUyDtmoBFTrtSBNqgGL5kbBH1y6C1NVBVdBADvLAGkGfc5v5R83W7XsgezLPSBFVG21BHabBDEBk5R2E7",
  "key11": "5VLt7LBaprEV5t9rB51GFNHLA1AvZYgVQf4gWdNEoMdEErkq2YaQ7QQVpYxuA8NBTQikPpoeb1kAdoQVTNb8JPpQ",
  "key12": "413xYEMLEMxSgA94FiUJy8VV5Z1hd8s3uLSNPQb5Vt21qLgbb55qabL416Va83F6duX6ra2jgi4aEruRnf1itC62",
  "key13": "QXhv5Q2bp4EmvA5KRJJnEkPRe89SmtiJoYg5un2M9JkHd8oowWWCRWy8qEbAw6ghxS21yqFbdmh9Aqdsq2yz5wn",
  "key14": "5QTZdrkywRYRqrNVidxX9TBei5CFU1buDbQyT1TnEseVLsLCuu8CncJA525BdzfPbkBZREnysCXmUDYKfEEq5gbR",
  "key15": "3y6KrEpWXeDBQ8e2LSykkCgafT7fXsb9SfH97j1taQw5YCmaeZ5aJzCCdH3TJUsUTWRyMkZXdnnW9ubWZfYi5WYn",
  "key16": "2R6PB5rWTTLRdCysjTt8f4ZDrkB4yTobvEc1QfzMimNex63ryvc9kxKr5Hdfsdv7zeCULMuM8VL56miLQXSL3MP3",
  "key17": "5vzGsi6KyZs7iaYsoujgmQkPYschpDXcMv9vxZ8MAAUDg8kapycvXRoKtNk2VtNAvH9QrMsTwjMsUN9gSBFzZjVn",
  "key18": "5Z4WakesKSjfWMJZxApWX3tUH59m3e4ewr45KW1Yh2G1fSj53kSoEUbg8U97gyRThXyw23raBxgGq33Z2J2VLvoF",
  "key19": "538PaJokx86wgBnLWGWiDgEUxGfwaUMVdHhwB6jgJ7DxmjFkazpoGyTYGDXoaCA3sKV8ys7CF7kRPGMB2gnWmJnX",
  "key20": "eimaqbJ6nZZGyWgMcprHP5YnctYBQrXVJYnUwmqWMLB2JiYBJUXzcSFKXihD4SUGTZoPH8RQkDJ7mhQHTHxVkmV",
  "key21": "3GRDvgAqk4Ci2gNxBcbcxg33eRTd1h7KuMM9Pqxz9zTktU89qRssfc5Z6mDPq9DjouvCuSovwA6Atv8q8eKqzKyb",
  "key22": "2Xe9NcN7vrAnTyNUtaNFiUezS2RBRkBw4MLfqadRf4N7yot1XXSxUGrRA2P5tNWqMS6BB9wqiDEiN5EZjTQUMvKg",
  "key23": "puK6MMMwteur7nMKG8qBd6vGJ7GQwXzs6Fgdonr4F4Vi1beyTAq8dDmp6oiKr8zXUZEM6CB3qAHLTFTX9yfEa4S",
  "key24": "4DJzJMLMan9dqtyqtoYYSewStNTd6CQAFaaxFau2geuWAnK9T7ekjjgstDkQD1Q9DoDo1MpKL5r4hFLFJUgRcFUY",
  "key25": "5znN3ws7hGHnKvQ7mJNH8pcGcRV6s3JtxQv5F4GLHo2zTCvh7J2LFaQuzUJfYKqsBc4gbdVBxp5GFuvBrwqztNLY",
  "key26": "3mtwXJsm5v9qBnAkpxMaUr7b4QTyYYLQcfXhyqenWYjhLmsUMmHAHdi1Cs5nLySqarwEiLNG2fMWg8MTELJJ9XN7",
  "key27": "5hE3hCDZdJkdspzxX9vfo4C9aVoXGegYP3P8HGf9p3dNpun7rtsToakNjWEdokYTkGrQPEKoCYNyD4PsHtnTcTrn",
  "key28": "4ZeXTGcKRvZHNw4Gg1vrRg45dH5AvKiziD18FHqP1us3Kuw7TsxyuAWo5T6vXLSLfdNdqYrAuBqAQGW5BS7SVZUc",
  "key29": "AFZjtQm8JSnKWbys8yGh4zQRMbCHAAEsRtiWRDbBLdgcMxWz7pFwbXGtX3saiwdxqdhJH79KafoUnrcgWshXJYq",
  "key30": "2iGcJ6rqpn6gLZBH2DdvbFDYLKkRq6iorxtL38YhK9htfd5JZw9to77euCxCwPubAgfvqCGyWqNztCroYjJtUqZn",
  "key31": "4ZKSLAnhNJLXKp7Qcm6Z13BjsNAULq7tm6KcyrG9yJ7G3sadaJvMtXqbgzxuD1eWsgx1nXsqTnJYYoA5i2L5u9dJ",
  "key32": "28vCEV7KFTSqsP7voQzZebfkWMtdgv3kDYbEmJVq2qpzAxBkTmKFV2rf92PxQFu5sxqBKb39PAMw85HouVijuqBS",
  "key33": "2waNKsy9gURaDgo52Yfuvd4Uo7VxuvgTzDQn3MKRUkE6Lmgs2aAbWn2RcM9fFZ6QpgvZANM6LGDweW5k4Ba4mLPy",
  "key34": "3NSLndnWG9v56nEM8hTr1bggDcaLjc7DNThpaZ4Cj6QMAb19zvDzA5ZhoAGKbFRMHojuGSFDDw4c6JcXn7anzJXW",
  "key35": "5QMnPUDt9bqPojBzqrcCePaXP6mJxxDyYDJzNGXHvDhxTSnY8MY535jzCCeM6AfaZKZxqFH7J3ATqRvqDTwQ6Ki",
  "key36": "2herJ9kwDBfhQmj25VvfLA2x2aX9xe7B8sGGNibt92kqRCvxfQknxxqYE9XLwcVDEoEB2fgezKwwu6Cy4ZGLsDTR",
  "key37": "2mSQFsh59SypfmCtsuD1PECbEPDzYLbTir81EWejbapxXq5ViiXAdtUh6zJbPiQhYda1JpLUs564vMgqvcR7Gr5q",
  "key38": "5TXPqm7NNKSws5oJhuyBMYppSzdzoQ7oZLBhH2srtgKNd5nSuBQUH3pzXzLFJ2uZpX3u9nwk8zhszmiNjU8q8xKW",
  "key39": "62jqKZzjhDdeZhM9uXU71HU4uDC8W3dkkNoQgBuV78xYvYuCtaHxmgdYiUcF1ueUEYGnuvhSLLQfCFmzziGJz8MV",
  "key40": "4hyaoMnHej7iEnF4cZQq6ZFrWgGbaU6Boib5n1iwuiy4qYoqshAzx4UnQYT7dsgQmocVuhpj2tGJGnpEpNrH4wZw",
  "key41": "vx3QpgxnkwXRF8vi4suN8Uw7W7xLk2qhaWYyyhoyyNfiu9u2tnxWmiLo7ea4fAvaZmJHaNzH48uWexJq1xxamvy",
  "key42": "35iAAMP5emRw1HWVD98DSASmyjp25ckUMdpV85wWobd1Ynuca8vm92RWXmMkME8EUM8GMho4kaAx3NM4AyXRjmCV",
  "key43": "5SxgYFinxn6BSWG8ezoDMZEDbunfuSWdQhoTVn5x18wbRup7L17UBom8oe3dXRr7Ap5XEKX7Yv55UdNA3QmmrYav",
  "key44": "2C7iw46SrPm61FENH9cvno1WuLzhs6NXSZZTgAdL9AucxeKX5sKGqGi5TvY6gjKz9DJARMn3G5r56VqZ7Z45SUr8",
  "key45": "osG9ynrtCidaVhqomztTi4Khzo62sawof1J4dxz1WdmHDiFNBDbSB8Azu86xj9YYWv64Gm2hPGKQzZefqeR2YDb"
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
