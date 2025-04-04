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
    "5Nu6UbERzH6ME9uQNLE5G86KqS9cMFMy5MPchzNzDhoW1z3B8sibSPFtN9GLiAEArWh37KGf14p9AxfDSTYuYZ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ThPUafNzHiGJbCXCgdvz5Si8jxQNWmg5EECgmjXEk9cA5TnwbrkhjU3yxTKHfTzN4oCE7n4gcia9niUcxbad6y",
  "key1": "2MdGzPGScD9CQMn3H1AfWVecsGAc3TnMAnyaHparjBFcg9TjWm8BRZihbsyGfAQ6e335h23V8V4EdZaBR8hNe9YJ",
  "key2": "8iDsoM1twan1oMpuSiNzG2emaALwDcT7kVNWok7vkebzkBCE3FTfJn6f2UhqHwsUgihVbeHwF3LWGp156x4KqxQ",
  "key3": "dzxepcw3mvR73gqmJUq2sLWVo291QG15PwddhupHbySXet15ZQpd7qsGERMPMK243fZ11KS4evH3jedqBPZ5Np4",
  "key4": "4xRTqTGWweCMMZCJz23iyG3gaabtU4zCzgaTAxpiEhsb8EULr2XMEDesJDtfypS783WqSgukfQENDdioU3XSVoQo",
  "key5": "brES2ysLhijsYofUbYdHJohM6q2sBkoPgWc7WMPGzHb9jNK6TTvz37tT73oJNvNN5EpetdHwp8rVhoPF7tQ2Qcs",
  "key6": "4oydwNg1via1StzrWMhQiJ1Jk82Z7qEyhoia5ze8h87yYS6pC1EJYvTvA41TXryY8RmHkZeBzrum2uW52xUM2Cc5",
  "key7": "up4AfUC75ujfpfdRDhq7GQc96Xz6TcM3PKA5tg5HySxZ8RS3EyeBMX9fkboMUc9VGtaMKX18u6h7TieDmciJLbP",
  "key8": "gCot56274tdhF7MZsEsozoK7bfhiqk4B5iHPtFs96nHnC5s3kwpzK27jhojdHmgAPgRF2L4TPD4ysB17Et859DB",
  "key9": "5GkLFtA7kvj1mhy4YzdZhKWqVqXEvLfUzrh4LiPunPMQGfhVUuz2WfK6mBwv95KqwhzEFckjUuZiWihgPRujVoxp",
  "key10": "2M3JY2McjLQ7mmWeLM7pafpY56kRiEtTn8autExvs78art5hLdDNmjsCih6rkF9c3zGVxjjCxMRK4WMR9fWX5fhf",
  "key11": "4TfxWZYuZAB2UjzexDtLarPc6gkqXduUhe2CoE353CZYS9x3LS2kBFoE1sxaRn9i6hTHqv6DuF6fqKUhRpk92zBp",
  "key12": "hQanq2cBRkKq82zSsWLHZfCPibg68R7n436TK75FwT6SnWUdaM2ojPPuPKQfxDJnfcLoPfZjZPT3rxhqpfuDmuY",
  "key13": "4LJyGsbz1uJf38r5BLE335FoimzNbqmUx8sUZHhVkB4jXHRSzS56X8sSPA8Q11aXARBCMSUVYCRyUPP4KtBdFhnm",
  "key14": "21wV2wNNEKEsRa6k5od7wH8txRbYo3PY38LYM9jYYxaJpv22xP13kpCgUWGZie9c8Xeyjr5QMYUUFNX2QEzWJ22f",
  "key15": "61kxDNsWjRpfB8e9CzCe13zUHf7zUXgWWNMSjPCe7ei5KwxyKuYeF1YB71SbANhtNny3KPRtRBviBhdyo7jLkQii",
  "key16": "UFmQ44FdvcwuTjLj5Zpgivdj6a8i8yX9EQbqMeTxufzbcQTwcmwzT9SqKWFWVWEHspMbfH1VZxURu46GuymSr5w",
  "key17": "2nw3KoKx65dTEKeq18REsMkjYe9Axte8ENu4A8rwt6Z623VWHSp99jL3T592kRzPR1DC3M6aKkfWCBogPfMJoCnR",
  "key18": "ExzEG9PA5rZHzf7zFCdUtXn6XCBtnDVZmVfMTuLq9k4Cx9NJE315N5Q3cSjDm6tg8pLH2xgEbx2wdKjcdmMKp54",
  "key19": "2B1Pz1yasfqwRhWD6283YREMbhzvqD9M9SWBRvc1kDSfzpuPdXqD4D6Nii4NNVbyJqQ9LUqV6TGSF1wKYvZvdeXg",
  "key20": "UFszhkf8ynedtm9jejw3jFHQfHHmq3D8CY1wNUV4RzauQFwPam1dnkCfv1HeJTQcXs4PCjm5QPBHc4zdHVmvWET",
  "key21": "HJ63cccAuVRJPmSAmKjo5eNi7o9RibXa2xxFCqh1SwDD6BA854w2dnkrGZNxSUotCVQBiQVci2mXPBgbCAefzbe",
  "key22": "3A7rp8hrbTjSf7uj26LkG42FuJKC9eCQRxXDc3JSeXML19L47ZxsimFEjVieM1kQbQNereKMagKed5jgBqCEAcM6",
  "key23": "5FyxzyVy5LPB644YeuUedG1u3s1a6rHu3QHjRQeCJGWYpFBJrDAJ5jrpgCkFzJDqa9NqqGmtYur351EdWfYnN96U",
  "key24": "5M5rrL13L8KMxQdi7TTCXnZSuSnKuFSx4udeU1F4iGzCdy5xhQwSnUghaRdSXVFhPEHWwFfhew7dJnn7726tY4jF",
  "key25": "28jhrMckuPJ3392YwJqBN6cGbm5etzkQhmR92UrLUShaMgQBG6t8a2Aw5Zikav6A2wRvFCGV9GZUTSNwnHyrV5fd"
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
