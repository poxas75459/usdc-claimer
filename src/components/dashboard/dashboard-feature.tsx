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
    "Ntq6FsazvjfmBwo45LT9mhtDU14pZsZqT7rTb4Ac9AT4if5X51BoWo7PENbcEu1LQaoqmfJ8AAM8F2WtdmRhHnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6weLSwSYom3EKPQrmNtRCzyEg87gXriwDWvdkcHhKyqFSDZhzfPLECTuMTKqiBn3HKEEboVU9Mv1fd8gg524Mp",
  "key1": "5SUKsy9tJjK9yAHhjhbE7qfe2nzf1WstwPBsABTbaQZEEkbRrtt9XS82aMaouCfPDo8WPir3Zef6nh6W8MdcPGKQ",
  "key2": "32ZZ548EafCR4HBgLDcTzccp5ii3CGmKkkzercjLC1xFWCpeUiWJdsYxUpWy8WfNEcK2f9pk387k7wUMWgz9Ep5j",
  "key3": "5da6XzkpMXdSu6Bsukw3VKd9ecqGZnkH41LSH1Dk36u3YWZ97MrFy63Qtwgu1Y97BNCnzWunvMTcWXtRcEQWj6Z1",
  "key4": "5gPAwFsFmQoe1sAQxKeoxequWYuYm8DvbQsny8T9WLfyHn7Jkjn3x9qu8h59BJpYSUY517N4yHDaZDv9Jmtff2zH",
  "key5": "5Jhi5zSvPqSZu1kWcED1GH3WXfgAtdiK5Tq2Zv1weSU8K2RZ3gmmsYpWg4CkPxDvSyiYGH4wU7b5WJjYkAovFskL",
  "key6": "2Qk31KHdzgEps9aR49AbgbhPggYhQiAViPZCtpDSTvda9Kpo3NrJt2K5fkppoJAXmhrVG51UR1ANzS5ZVN6ovKjX",
  "key7": "28jKpUGSdPYC6Nzs2NYobHGX6tzEGr9Mmap7RmDu1MUiqswoDyuBPhwPLhwG34FVTUqGLkAvWYMDHQeseg8vfznX",
  "key8": "64vGJwJwE783mrDiSTFcaxMUZ5jJqg7gbdRtmsA4ynzz8KcQS3N6fcqkSVu3wiVF4wSGJDNcCDTMfF7YWmTP8FWq",
  "key9": "4uBZmBtjNmWKQbXs4UAn2fa8CViA6cjy3ECUHNkpgLiz72Xb4iMvvQxb5BMqZq2JJbeuccpumcmqnWApbQJcETok",
  "key10": "4p2K7nq7pQYZSsySCFZxQuZFx5dTbDL4vuZFg4D1JdnPGBPFByTCCyCUs4x961bd7rPszDBP6oUWmbbX8n4LRXdo",
  "key11": "2tS31fFmTaSDjXMeRMBf3XdrHjyz1xX2gdkLGEx6zzKPdJceum3x8B6vkXLR2Jcd8ye6HPh5Gy3CdiEE3VA7ANuW",
  "key12": "5jjXphP3CWExAwZfRCRd7VRoxoQW5mvh9CsTgiy6fNjCoD2XGBg63ubauegEzjM7jittu3D22BQo2wZ3L81xCu8J",
  "key13": "2ynXN8bEk1tRgpDguWyYCexoH5yK63oiL9rfLMdiRSzzCNkp2RYJns3v6fGboA3kPvTodbEcSJ38sASrKE2emMbS",
  "key14": "3YsxVUMGtWTYWHzSFu5L7Ge9EHxgXtGrVEpy34PYjkMcGvrrVcsLrZBroeUnVmUAck4zbvv1SyD2iS2kBTqBGY1j",
  "key15": "4wxHdtGaAL94svHw5Z7ynu1ZGigvdpnFZsyCMDGu4xYkHDWY3jo6yR6h6deMHVZGvxHp3koznQSR64V2ujyi4Fxd",
  "key16": "2oSMCSi4L3KdL8DLVQ4w37PQf2d4VFbhukgQJBf8NpUjot8bRtH8M7smNC9uxJ2Jwd3RKsWT8huJbwUULVLzcFdR",
  "key17": "2Zub1mgHKX3g9g6yRAJXK2yf7oHR9BaRtx7cpHf63dkTpJSbRDpyX7zA9FeQH7Xov6pBeREKTcbjY8BU5iQDgXXp",
  "key18": "2rfLSeEhHvAgUjSRdmzCUq9fidt1fCUuph6DgGdJaNYa9ddRS5HEsdN3MA9dJkfJzjn5VJppnGnH7TUmw58dJzPm",
  "key19": "63gaJzNt4tGSrd1AmEzCNJytRxdXVRvfJyDCSQkUZzKC7RL4g1wffmbLQ77FE7UxABYkegpuwsu3jcknm3RcsSsh",
  "key20": "mKjW3TviRzEGSbVwv2zvhiXWhC73Z8idJcVmUsRkzTthZzxhUdGFXRBmGBSfNAY76JBYgdtwp6NqP1VmQh3gnxK",
  "key21": "4XJNSsmnrZw8JpPhNGJK2w6T3ymsbBVkwHvCCeq8n19FXVSyEHTADhwcsJXhvpSFgRSbrs1JoNPugTw999WSyDQx",
  "key22": "3DoFFmv5Xd2TS9cwoH7HqnXDJ6X2wWEyndY6SxDayfY4pVUQ1ztx5HmiuzC89n5JnpryuSkeowTCthTGRep9XGqE",
  "key23": "2dbBbXJWF84T9k4rbxqL9m2Dik25fUZVBJSjbXAY7degj4w4Bky2igiQnDNbnhRuoBfF6y1QaecfMXwfNMbzY2Dd",
  "key24": "5hCXvxJxXMmDcuRa8WTuSjxHT276HTEi4UJG4YMbDBcAMFiMX2BTWRDNDtonDtidEy9dDuPMkq2ZseMtC7k169p2",
  "key25": "67nsFs55rNK6y5yCdzhUH49RjTGuiJQdn5Rg7WgcUyyACDQRKETVXjrHhEiGR6gSzfiR6aCM48BGvKmku18y2dhW",
  "key26": "4tXDdVgSrr2QL4Nk9GAw53mD2DM8umN9PqDk2eQBLANNMLeG4DP3VKDdFxuasaEYFgUf94aBia611xtsQXhBQwGr",
  "key27": "5SXwMd88DDFwU2HajRYtJykPPBQGtcp16xGAvgFrYUBF95LfYzqzHGvdCi3TZVGQnckVAXCzKx9wR7eX7YcySwn3",
  "key28": "5NAHGDF8evnaEzujmUZATsj1AtXYBphazFcNVPksRBF3dJJuQqnnbBmPYShFLofGCjQFonACauSHAFjuUUc2nX5",
  "key29": "bxiRmdwMGnDrjZTmihADWUB2DBinQpXByXxQxVuB5v6ZGbQu5Zm3oBa97yChffLZxpwigZAfkytLG8U65VA4oJK",
  "key30": "31umds59uBvNX9yDxbnvS1k4oF6DvwuxogeCwzD9msBU5FDYjhKxVNPQrrDrqDVKbZG9dczs8gQNYnWmiqX3E6GX"
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
