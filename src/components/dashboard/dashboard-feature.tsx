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
    "2kaSrCHkKZUcC73ZBhpxRCu7wvmQZWsXijGcY9QXyEsxfFiokSwZE6yZrqrennAJVQALDFFjX3G8zFiLqjVwh1ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5qVeu3fSQwaaG1jvFJtESJX6r3v273qu3yNMBM9ZTuUawz7SRrLpTPJfyDqyqmGXhAEfdDN6UJESkJynBVwfbH",
  "key1": "3YWQ1jeWpZMoMTrP3Yg7sYptZDgR1tNNHrVVV2zwacB9DXVr4PmzGUBC3EzD5si8VJ3omJgsGEFANz4etptZpUBo",
  "key2": "CqsmQQi14uuz9a7aGrwd5oPXRGNwzxL2sCJcsqYXPDkmY2A61LEJTBAKEb8rDY4hBMBF82WiG9HgVDieWwdo2cR",
  "key3": "3pGx7Nk2M5MGzKmdCwnEQk2fq4ZXPDJoCVUMwS54VaNH1ovdyzf33Xqt1KXCfKYEqvZTVBtNTHneeYtbERAnvFjE",
  "key4": "2HtgdAkuEedX6wsn3UQxTnR24a1mbAL8CpSYtiSq6TPkwu6aZHksXdkTDrGWpcaWngyqafPvVvLYwYwTcRmvD9J7",
  "key5": "41DjKUp6ByYx7yFTkTpdEfYNiH3sATsuzSkkSU3AXZ1PruxBopV6LHeVxfG9iKPyCQT7SiMrQAtGVSJszopDQNAT",
  "key6": "5a9R7bP7d4q7vsL7L2xsGWkNES8LWpn6wfQiCvLLdGu7L4txExzZqMU7oUrnKDphs4rjDzCyQ4WzFde3QQXb3ZzD",
  "key7": "3u5M5DJyZ2MeKzbcZozB6w6AWheRgtVc4iLrociEiim4N6kwd7D4HgcKUtmyphqbYDA15jcaEDoEMYXZqfJHJBMe",
  "key8": "61iE5SbDybYGpxo68mtsU3urVJfSRFaaazDynMGpDAopsBXMS14fESjd5MYLYJPHGoVQEkwepjSuQsrivdZjC7Si",
  "key9": "2p4YQTQ9MoVvrWmgppT1NcinoM1Uf3FtPV9UymXgvc3e3tDwhYsQCeicdnR5qHCEYYeBX2MXEdidzLXdKPsS2biy",
  "key10": "4z5A34Ep6wRuwfQH4YK6V5NnL9NQQpFQWJVAe3i2Yf1QhBprHBkDem8m85NMtp2xfGzjxXLLWcs1Nbv4yEiMrS4N",
  "key11": "2r41MMc9iSUmrCfrTe9rQXuVtyJM5RRmUTXXJVz3w9vYjTRwEHNvz61tXK6eA14cJSc9ShqfsvA1Hzg7LdLfDvy5",
  "key12": "szUwtxjyxXgM8mtgTdWGiyAofh9sPtmhDAWUtHHmyT4TmAwJyz6MMrK664PE1c8SbSYRSmKUFSJTJEWR47fpYVd",
  "key13": "3QDiYV9s424bi6HXDHMhWVFiBnbn65FxHoBGYzAycf3u4wNCXz8gCH2CgUwhJtkHXt925MXWKA3gt89szrw761YB",
  "key14": "F9EMjXB2uwYAb94Nes5LKYJYGMY1G8my3jwGALr7vHU81GGd1ow9oDmt8L7ZfL58c6SvkC4kBQQn7XgyKWsvdnH",
  "key15": "qGtNwpVDdvJJLzJd4i9KdaKZCKHM3Suw3CkykQHbaxL24N5Ccy9SjDq6JU7LWwteVDgN8TTBjfrzDPrDnvYVYNF",
  "key16": "653DHkq5WAUnRBLKZbN8fpFCVgKk9cAYndkKHJcb98iSYBjgKFi1T1jZgXFf3FExYBrVNpZJWNqkVAjEqtSkg3Lw",
  "key17": "4ApeDbEkE8nzx6dn7MGHPB6fgXawiRK9scXoMdFkSxdipN3o4x3LqAnYmcnKFpdZPjJTRtGvDifMcvGVkpYTZqA4",
  "key18": "5Sqr5egFcP1yG2PfcFFvgGnTpp2vtaqNKVeem4DZB3y4ZDAfGMuTzJ2kEyznyEZ3wfuCbyA6PoSPAcK9FDko7WvE",
  "key19": "4vFJnuHmpEjnPJQdoUEh4BEBoTLHCZgE9iDAUDUhmGdo1WpDZDBkGiLgbwwYiPW9rKSyrcwbDHUWsztHnvrSAZZN",
  "key20": "2GCGFUhq3EtBZB7Fp1DbLdefh4u2RmzbJJYhyv5jPA8MbbnVN1QP58pjKV23jmEXZsesHgMJJPr2eG919Dn6rVHp",
  "key21": "4x95kesBSeDki8A5JXTo1pbeyxJe3g2LcckLJbYvepxuGcrr3yr6NaxyX8FS3okf4NrA4icCCfPvyFgTFK8pomDA",
  "key22": "2BMsb3RUDwJyGqTvsiEHmfMjmzfziEEBs6vLKGkN1ioodTe8pDJeELVZdMXjW3391tXPnpCfPdghvSPX9Rzh2vCC",
  "key23": "4M5Pa1o16yywd4iMqgQ5Ta3qBQUKxCXBuQKTsB25bTumogYSx8yGg1BjNf2y89njPy1gbbmfNqYfwke9GuiJZNbG",
  "key24": "2iJFUU5hrWZPBoCBQQ395D6xS9o2pBAuzoVJ4qqt8Esks6UMx1Zk3EMZANdZPUR76PcyMAvjx1WUpzA2nGnmwbuo",
  "key25": "411busB9SbfiM7us9ks4vbhcbDUT6mF8rkdyT8DKxMDCvhxkqbqzNwi5eYJgor6QQwmfHf6wBBnDMDrACyfhudhb",
  "key26": "34BC9HRg3UBVuXW46DmXrK5mC2DiQHgryCSWNxUZaELWXj1WGQ3ei3FQswbauwUS4Wu2e7TDDQT4vEAcwzKML42o",
  "key27": "5SfuDLre3JT8uFfpb7N8zdMe6VerDvcDrS467dwTE3KyPy3ESUiTcXHPj2WJovv7vCkvA41cYrmQD1A6x5PdVfV1",
  "key28": "3imr7MY7LTZb3GqZk46x7StSX5jp71usXELPmWcdz7jhSS3yLSdJQpQBqYwq9pvoqW9mn3WnmemHPWTc8QiFbxRH",
  "key29": "MrcTvJrGjDRWrd1dSesphSnpPoGzVXPpSFn1gcxHFtLtJY2ueoQgjQDhAMRcxrrK6iDUUSLp3oR9a1v5hmqGqG5",
  "key30": "14oQwUNyEfzaSJA2j9g856qR27Zu2CWj3kh1d2kXytvsveLG9E9KPcjWpaEXhLAwQtbDn2YpAUmL2bcFS6RkqrW"
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
