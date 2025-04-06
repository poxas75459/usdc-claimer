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
    "5NXJbCVSvxVhiS1F4D8UntwfMd1KEL1hfuf9ifAnQohqcdfSpDbN492zkvqKYbteN9BCAPgzgKTmRsLqp18gYex1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AJfAftYTmkMVSorwVgcWoaGeh6Tzh4dA6PVDskB4smicw6vz5VwSHCJYCcfJQM5QihGdpk18Py6Y87ABUgRekPg",
  "key1": "5j4f7tfU1t6fScLqgwfVFPzwTKeQgBZ8SexjBF8pmEeoPMMcCET9b4cXty2tz7dGPu7mgr5yLcHG7b3ZXU6AN7CT",
  "key2": "Fbi8GccWNpLTS4ctTTpmQNUhe45HC7EfXo6cMgWSnnREWcr95PvKuegfr2dWaNY2hhF4pKqik8TyTBh3HMuCG4U",
  "key3": "4RDgFxGZUteGsXueaWEQmLwQcVwfnwJ6Hg4eM6p1ULCR5cSZL4WdcNu6y8CLshfwtFWSFgxxtNn31eHYY79KBNj3",
  "key4": "5RHapHHuTuoYVbmTQ9CxUWXxUqH7rJwoZzH1pcx2tyKTbRgUMHb9YirxUnKhutfshoWut9t97F7n5FpqccpszBkE",
  "key5": "QBZKqTG9eJVWoStD8gDBDnefraYBSegAv53dfgGQ6M5m7HfT84KHp3PJuSdWH2hPaCnPbavfzGaKdJ3uZazRC3U",
  "key6": "4ccZWkeQCrsRZ6qz1KeoMq3W6ZN4wdciRFaAeqDvpK1a96bomduNupeTNVK38TE2T7mgRBD2okUMagFGB3hMH33n",
  "key7": "4ntY72VnzkwuyqQdRX5wNhe9xrEkfRQViDkDr9nmBAi6jexGi2pWPEaCzUrH78YWYyKYB5E9hx4EggWWoWGePCpn",
  "key8": "5p39L4ycGoXEJP2ZNrHfnhCtuZqYKB1fpJjrKXmBcYPmetAMzhNv3Q6HwczmjiWVWxiRZiCZLznkNQUJK5xtn9RV",
  "key9": "5oJnFqm92Mrhmgp3ukFNWTxY1zNN7hXCsQNpwQn39t5SotnYTdJma7ZoW21dDmPpaicbKpdwAeedgJhuWNNiAgiS",
  "key10": "55h6voKJ8tWFgXfXt6u4yxkoScCpuC6SgiHSoQVFtxNxRy7TmTgxQAnUJim6PwQwB6yTYDnx17KneZxgzPtiBVPv",
  "key11": "JEb4NcF2MjRqervvc1sMKYeNWPPfWuBtW3E9FSRKe9U6PAdsdWnzMEDCEX6ji5EmPZa5DdgWzGC5JnMMqkLP3jD",
  "key12": "UB9ChYaN9vdMW6s2aRtTju7Rg5MAvFJ9c3vahq1ZYRZVCo87q6miC9xtJGrRy6cw8Ls2TDhRwEYMq664jGEMToM",
  "key13": "5xc7ECL2Eyg2VbcW1f6PRiaxvNNi7MAzpZZEJzYA8cwCreLhxTig3ekYXwbeWyfd1X32eCm3ovX3mdWgMB3PbRDs",
  "key14": "25LfNbuyoU3uFsRmvubwsezy1BKBoihqxRJ2ZSgoGxKLyc88oP3Re7JjY9riRv7zdxJaRh5kfDpwdvEsxCdNth27",
  "key15": "67Fn2neQbKAjEBoE5MVpEB3ZqYQcnPRuvF3QsuNGpaNgxvmrGq72u22HsXy2G2EaTrkwwmJcPqsK93gP35gWEvsJ",
  "key16": "2rUgQPTfSpzzeuBMM6LWLPb3DEc7XfSqStKhTaJFZ3yNYqXsqoffHd7hM6XP4BSt8CxGJvRCqAKAhonFdPz4ZaAr",
  "key17": "31xeC7XnEBmRzKrCrMfCdtwF5C1MahNGQe4JmupKW5mz7hyUa9FXYEaCP2XdjY6yDNYYLoXDEozQpSRB2Y1oSnHh",
  "key18": "5AV9Dib6nWpKu5BmLF2NNWChkknvMUuwiGhSipxjYgSXH4DNTYFdetUaEDegwNwFnskYXQa6Aa2z7tjEeaN6SytF",
  "key19": "CX7JHteVwQ6R1ZQGFMxFVLi3AafgWduD5aucUPMFm7vQB4B4mz73HskdnSxZmo8fRsUBQHzU3PjboKZyxCGLRmC",
  "key20": "3XfXt7wVKqa5jHy5NZ9tQbfanPg1jEd4qNXg1MVdnsqcZMx9CfNRcSPq2uUcCYEYjJUqiWQKjZgwT65L17z3vLGK",
  "key21": "2VpX24DS7GuGjLxAzohLL88dZjnwDFyBoYoyvhuPzRm2Hdmre55axWcGJHGN3C3XdGqTofFWMHz4ukKhZdE7u3Vs",
  "key22": "31HPEdApTHvjDvc3kF18dfto2oV5CUVg17AxACffZr9edgftvMzexgr2TXwTArCBbkqDrUJj16Wy1CSvKuU9cdT2",
  "key23": "26gBb7B7aTVvYkYCS5jVHkmjmpDG8Zhb7oxAGayNdQEjqYA6yUVHAi3GHJNoYQekNyYB2jXHc9DexxeFPwcDQnJ3",
  "key24": "4outpMciGJhYHu3V4s4hLssWxq4yLTQoSDLSvosDCN6phsMYG8hD7isLAFXGBXXKyrRaGj4h9mYJFmkfpvu8fiKE",
  "key25": "4ZYPDVvQyvo8iVrpPQ2pCGME9K7tSGHd9fiAhnBTkuBcf6QqNg1jFAgUzYaAyUHQe9itcuzA8KkCxHXQ9KowT2sA",
  "key26": "4KQykkJb8BeZsFE1hB6w6whxQ1ZhoMfx27YmGahyu9J3xKPdBy1dV1SyPDN28XeN22F4UHhNqVd1QJ2sY3NJfghk",
  "key27": "4YzrwtTDD64zckXTzsxj716RoJyt2uz5Xywkj7CeTjnZo9bpSiu3XERSyvvvCxtSn6GFhRtGDg92gJ2eQuWJreEg",
  "key28": "9NiLvp34rKSjBfyvgS3QZJFarPuWdyZSwtrS87KrLuv6ntc9rHqV8HjHCRF78rLN6RBx1qDcMbjSeatNRtFE7yK",
  "key29": "2gJJXex8mWQtC9L9eD7WcKByRMhwzAJxmDG42AEzcJgfS5N2JD7t8MoneSghif6enhvmnEwuhpPecbQVCdcr4ppd",
  "key30": "3cUzBdg76aFksMTBpbkzf2vpCFF8UQkG5s3BJ5ThdK4cZ7yFwZWDobaB2J5qjfMXdRVNRj2TESZuSv14Wxq6jK6h",
  "key31": "4w8znajaqKca8ZiaVG9S6CLb4CLP7e4738vvjAFKpxnWXAqm1Hxyg2fZuzf9y4TjCBikxkpcpP4qCNnghD8K294r",
  "key32": "fmGt7G2rB3zWGRAHP5NB56kooojsBY8KrdhDnnoJJkikUt4M8Cc1Ej6bJKagaEn3qdGm6QKt3pWY8ogpMTez53a",
  "key33": "4yMRUC7wsSx6718xugSXXprq1CGea54dTfqytBM6X2BVH3hvKSiP8iTQ7Cn1ZoVGkqzxH2HUzKqLW4FTn315Yd1s",
  "key34": "5W1MvqxLoaWGUjVFh2cn22cLnWgs1mkDkpmmErGnxTbb4erUvkyeNgdPFidWxHau7MfnmKs1Ck1H3gWyqMHgMsmv",
  "key35": "4bkTQ9UK8GY2bTMxfjP7GtSv8YbLcqdSVHbDpgzK9azXvCmPaLZ6Xu4uCvSMicJxvG3o3bkr5cbYDEZPJ2iYsybf",
  "key36": "3bzVX9L7c6UQFS7HwjVTbrsh8U8rwr2Zkvd5LhXpRwegtVdU6KRXV7eipb3PVvM1KET4ZwQiLnsWw1xdgRqRyg2a"
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
