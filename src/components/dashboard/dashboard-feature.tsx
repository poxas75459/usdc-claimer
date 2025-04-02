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
    "64sSZoxAvChV4VJj4Nj8msN3NYcErkH6z7JX4V5Aikh4YtrRimQDWw7GEbZhgFQigE8nQ6jjbc9txQoYUgKvQwzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UMiVxpeQkLTsPtQNc8k8g2zipKRy2ybhbcpWfeZvv3qcDboU8qrg2FsSC3McFRLAsBALjiVHbJTcKYKGeFXivd",
  "key1": "3V1W39Rhs5kSGZ5mmFWEPN9yxyp4Lu5FfD8gV6yzRUX7puRso8iyfmG7i3cHRb5zN6Mm2GHXKpqi7JCHMKxyAgjP",
  "key2": "2n5MsSup5KkqHmb4R4uM2Xd7MJdaAomvnotHcyqAVAtqh5FhLC4L9Z4uhUwKic5tgXRo8RWuFhRqBfyo8yXADUoV",
  "key3": "3xQC7ohQdBXd1Y6rNNr9gP12uJUWqT2zd7RXU3Xv6Z1LhFBezUpYyBvXjdYyGwjE6y8nTf5tkMojyLBmxU6GraHB",
  "key4": "3ATcR9Bn3qPVv6FJmtwLBat65q8qeYaE9HmT2tXzY4S9uVp8cWSXfri1EuxL6mVT1dSFLPbHZEKPwGbsz1m1fyyy",
  "key5": "5wk8uGnddUpAx2iaWagd6uYAFiWxTEQrAZKxaLbEmqTppJihqoysirrGttA6vDNxmEqFo1Bc5GJWLJ4yZXRHSm5c",
  "key6": "5YvcapicAMrK5XLwZxfeeCSTCmN2D3eNzEAxoA23c2KZU61DeAmvjq3H6Q6Du9sD6S1fzrgDvCeG6jnq4Qp3hQUY",
  "key7": "3b76kyWfpoqjssRMrucGQn2cjYeVbU4vXwKCAf41cpFA1cySE9J8ptGTKXEENLb2joNbiigzK18e9vjzR4c8fq1p",
  "key8": "3P6dJgeSDyMJENK8PoSC9yG6Ry642cidJTBobXsLHe2BPQtTwpqJP7Kk62miPmPPY56e5tUa7FNQuo5cFRWrmi9C",
  "key9": "5GPpYqLiqyQbKtJscmWTSahmQA3eugD4dqA9XDTiD46kQqGzy7h9kgGhjJun69QZw3YgC48jkvJRKp8QoPaSbnf",
  "key10": "zGxhUCECxJ9BCEMPQ5HAtczqBMQAdaTF4fLGg6iq6js7ZF4XtJjA7McuUSFDh9bqJXkwV4rBHz1KE3hYQLjEnc3",
  "key11": "5opuXWhJqPhF4mDXsQK1yY4B5Ac7ShxWZxHB8ERvNX1onCywAQgps2x6C1SmaEZ1jPv7MtSxgUGzHeti2pJNfLpQ",
  "key12": "2JxLcFDpwgYprPh7k1ujLJ5LX6GNi9dFgXipZZtrZGYH2vSVtDi1EmQe1Hs1Pk7GMHHwFbq7w4T7hPo1bbmid1UG",
  "key13": "jVCN9vnvKv6QqfdgXETz23Ee7CteBYMGaecVFRqzKTipfGkakJBjcba1TFztqswBJctdRG3Axuxke3MCYcs7p4E",
  "key14": "4zv4fnmpur4r5MP8pGyQCcD7GZbNSe3Wqu8nuodGKqPtWmRjHF9z22jkqdMLV7cfyzX6trsMiEP7JnTyc1gohaeE",
  "key15": "VP3WxfTNRwV96fgB68dBzcZ7HuJQejPUc5xX2tBptGQJXquQaRLD3gerxWxUC1Ub18Q63whVbz41uCfy1SAAzFP",
  "key16": "4orpMsBznyjVptcoyhA79YthVmNxRUU5Qv1d243n57B1MmnZiHPhe7Utia7t8iHWHVhGcwbr5ALT9FHW5CXnqASf",
  "key17": "5AhGTgPgHRYTkdoB3EPso6yGGrYwnh11KBCzPW5nrQNQuFx386fgGPdSXxyvy86VsgHeqYvPrSRkWr9N2UQbxjCA",
  "key18": "2g4GkbhAVptzVGzsBmAhSvANzAcTVzoXYPjRivb5HA6o9bfRBrkg5S4qi7R7QHdArfAgLdx17ps5ZfPYBUCfJq28",
  "key19": "5EjW15Q178X8Uugb9M4isCUYodxJvVfS63DhtkCiWoi2vmefCUxvxWbr8LnhhANU1wLsLcp3vsdrfonDVCHunKTW",
  "key20": "65oP2mZfWcVuZDp9cKMMhUstNPL6cuAvtYRMud5Frf2RLQLtqeUpVbhprc7d5Gck7o1iHgZJBkakARCuPYMkGcKH",
  "key21": "5b3fYL8RwnQNgv2pG36pseyYMWBhbida6N5q5szmLhifS4DAK6HW985K3Cey95JA3HBQn4fLWe8w8j28z3KgdzNK",
  "key22": "2BypKwnbJQZRdFbmpSWWFvWWRB8zVQgDGNkbkYMSo442TFskGwcmAzyYHn7sDQGKaKkSohhMb4EjjbvJAEUR4pxD",
  "key23": "32vpKdfS7cJnSAiAaiYoKAGZuDQs2de33xQkaCXyvhKquXT5RLdUsSAdwi7UZc7anBqmEGqigqPWunmJVhdBYqhC",
  "key24": "3cXPdbbEsB31vKmTbQkN4yJwCJ8oqU9Waingi9xsR5xy6x8paQvqVpc8hUGh4d5yzSygKsu3MaPrgbSjogSTM5re",
  "key25": "4t2QSRy7n5CGix1tb54DwGGUU5dz6WPnfP2Lhwii2VaVYDfc64TGxoWYRwLRdpPLURngWui3ZMbDSXwa19JhyuM4",
  "key26": "FqndagETpJLr8ksJcZXJ56LqzCtVf3meSGJK8ZCCYj1cGzBfRMko2Y7Eu5cQeeQkZjq5fwnz32qzKvPacWbBM5M",
  "key27": "3d43hcwSoPkEXZaPwoLpyi6TT7dxrbsqU9oxPnjmMSgAHVhX7v2fp4if1ebV6KjnB2LnL5tDwXNfjp7sgDvntPmE",
  "key28": "ZdF7tCyYVeHbGVLNESDWfPQwJXh9Adju2hDHrojHfCJkoJyaUKamSqD9HxqjyfSgFEg3xMC2JN98nUE1fsMipx6",
  "key29": "Z2cX7VTngQctvsNDA1jqVbe4jEPRgXrSinJKUgWq3tdaQTgfsLH1uN7TRTGvszqPYqLsbUBMZBTgrd6EtbqqPxS",
  "key30": "2uYRVHy8eDL6DszaMYxaxUpmwer6MmH7CfHqUmDmMUWb4hNTzS2bXftRw1N9baXk3v5EpzjvoECQw2QxwsZxnWnc",
  "key31": "2UtrB2GTuv9PFBjMjxZN3N3yFt65dnPKH4w5web2Zpow9cHHfCD8CdSwiLnfaxHGegZ1PKTNgCSi6tSjaefqnzQZ",
  "key32": "4mQo2bTFAYEEPeUk8ifnmKN7HGJ4NnSwE5hxG4AfsRnS4kVwSUDTJWKTA68E9CX81aSv8SL3WESZQFmw54Ju7J8N",
  "key33": "4oNszDwFB2TBQrHVVtNjayge9QKL8zECEfeNaapGCkCEjCRs2MMraMRz1QV1veyyWE6B4GXsjm4HuG18eUdL3N2p",
  "key34": "3bdcVhrV8nUA8xc74UZ8zQ4BcvgUc8bYHyCZFui9LtoRhSN2NTxJqUGkPKpFojiTHuuRDFhf18BLX3cUrU5ZS4pY",
  "key35": "4Qonh8YuWzcbxajpdPmp4AV61JHDEQ23tXd5dMyefC867vg3gH6b3GA1Q8yaR2Rim2ojDGztTHNNcsjchHykKiQL",
  "key36": "5VsNYGayf4Ewibhh3RbJcGFCVVTipP1ZiV7wpC9GLQpxPDN12bubEm5KnRP2greYxA5MrtprfxwpUEF3sWA8DeJB",
  "key37": "4mKv4xzi5NvgZv7ZCYZs3sTSNC6XeHyakikjG244j6MuWDFoKSVUkFc6R43Bans2XxcfHhaKV99hDMXijiER1HRW",
  "key38": "54b25c5C9gmEcBRgHa15CaLTFf21HsMWnFZda25RBHa1nKE5DDj1sbN2y1docQhCpFacuxte2ztwwFhRycrgriKe",
  "key39": "ScP3rzS8bv3kVgE9K3zsafMuTHqrtMjW8jZFbn1JyTM87DVRoXhNHWTyEuuuadCHvsCD5Fxwf2d54P7rK7ukFSV",
  "key40": "39EsLTuoxvoFbG6wVhQiDDBqt6Q3nVe7Zn4ctbD8hv9p3f94VLE7U96foN4S7QTk8kSe6NKGKegxMez7uBtoDpXW",
  "key41": "4P8ed4YHXnXeY1zDtS61usqzkVaA2mYGcmy72Gi73jyCgdQ1EDf8EftvSiBfdYNA5ndAGU6xJcvKS6rbPEJXM1z1",
  "key42": "38o3AEP61wVJUV8Mrd4SSU9rH9MJAYpe6zjvKZQqQVz1uVMqiMW2TPPAbMZMPMwwKbkakzkcH9LaG1y3bfPQkhgy",
  "key43": "3v1qSSdbfz1EkzwZ5QNS7ttsjbnLU93Jf1Vg2BaDAkZEKzQ89PDZ5A44cxM8xLPss18o6JU68w4TQKStKGJATNzd",
  "key44": "46WHUvbeedPQ9WBWwfT99UqshapndCVmdsFvNk5U6oTJkrgeUWXVDfm4htFia1mcw9dQ9E4VXzjiJdbPtonGH2ru",
  "key45": "3xGaYVpQr3ADihwTmgYYVWDk4zLHsnciXjDrFuK4uuUWdnNtocSo7TmZx8MzXeMpAZmfyBo438HXzBeHggWHqRnK",
  "key46": "z3JnDkAcBWhLQmgvz6n7dyeZLwE6Mes7DkWmXuoRBQd4tPq5xg9Y2B2WFPN4ewwziym4ACYCbby6nHG2dwUU1v1",
  "key47": "t5j7fWF9zJAkKuZ1VwmysEHQJfp8gytGPdHbDqmwzT7jj5huyceibvNsHRP8GGsrNReKqrcYYsFKGbswvZHR4Et"
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
