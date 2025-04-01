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
    "2GjFGPwESuJf1fe7zCrud1qKfgMfRWXzp8xevyy5sGGSkZXrSRuMRTgPo7ifiyH1M2mEVygJQxMBTAWFwmdRN2Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHfEaPWC3UuvVoMjdzcGH5FzQwQBgrkZPduTYwfQBbBaNQjoJqSJDD4qzYjaqDdYNZLooFmE8cnpqLznZtLAXBz",
  "key1": "3mGYfXrvB7sbWwFNiHRajeo3NzKLkaK1x71N8FnM2JzLFqLhoEFS89gG67R1sTqfrYDFM2LrcSKqRKSAWgD2KQQC",
  "key2": "3AiSQ5knB31Hbk9k8gmyCtuECXmYaFspjni7JncD173tVKZQdQ7fw1jwP5P6cdg7yR3DgwxqpD2AFs9GTDo83DNC",
  "key3": "3HWYZN6seTuMGFNrwDpoRiVjBVSwKkton1dMHhQVL4yYd2WYwLupiBsvWR6CLpD3kF2A9icJr8yqXXf2LuTTmqc4",
  "key4": "48sFPQbt8uRuarecEdrMm8gzGbbeas3pX3whihWZxfJGgJS2X1tcum2HwxGig8JiUDj9PTmLZeQu2qwD191EVfMn",
  "key5": "659jcQCeQmcpK92efvT1fXoJcAafQU2cEki16sQwpL9MEzfpAfHVXhGRU11cRj7D6hhU28pLMDtZdWbC5UD2CzA2",
  "key6": "28zSnW59jZgBFrW4ZdCrRvZ9YGc5QpZYWLEpHTGPqo78NsKqZs7AHoivaJMurHuWYZrXnQqXrYoLNqKPBTH6U4u1",
  "key7": "5dssPgGFqx27RuJqZdnUin9rZLXVGEGhZGTSXWxZAJqw46aT6YxD2hZ1aV9UU3aWx5YsH9RDZRuiacR1frQvfym3",
  "key8": "2qBPc1RWdcWgLw1DpZqBKdkswxrPoQhWEcQwLjENcQboyqwRkMtjXnxH9fFTYVMm9pEmo9Vvhse8TsmyN295HTGY",
  "key9": "3BZmQuTeXpGho8BFu1TsKKT9Zhu9umsx2ymLNAAfMfnjDPbU7zhv54xKS4YjXJF7LbqofiQ1JAxQDke3a3LoxG3Y",
  "key10": "5AaK95d6dHjJxXFMwtAkMDkF4KM5MH19689Axx8QGvazTvWnbsp8eTiojLiLUmssa95dYD2VmxkTe61bHVFyp2zX",
  "key11": "45y4UspVRjfmqWxgG5U275ScTdKbrQhwkhMoYUsxrrkeUiH8GADiSCGpr3BsJtU8HooYzo1kMF5vmthnMKFiQU1q",
  "key12": "2RH2scPX817w7pGSgXEAoNpvJj5WSMiH9zRU9yiqomHWSX6iMHDSCTQmLZxLBSxQqbSxBwQz8pgp4qbAjXpWgqJV",
  "key13": "3J43p3AMcggauY4BdVb2D5SEYz54bXzQqAaKk2SwhKk8ue2Xgwjh3Ks2nBtkJ7pC4A9LPjB3PPjw3gK81s71XXmo",
  "key14": "5gQDNwsU2HxfWX7Dn94dYd7TkSScqNgKn2bxqDqLW9uzpmsUMYTN8Ah8c4BeuEP58L4yH9QaZg2LcLjHzE8U5GRZ",
  "key15": "YuDcrq4magYimM3rRMwKeX32Z31VeUag1FepqeFA6QodidBxDvxVhBVKzit2qWqrfZGLSKW9pGWSsdnKcc8Gpz7",
  "key16": "CdbGHVJqc9ir4oehUomHX9kJJgwnoohZhk4GHqUFZNovphm3y8kNH3CEaNC3knMbpjEp5Kq2gE1Q5sJZiVprXdy",
  "key17": "5CCiLgBLdsGD8tVvg864mjjXq81bFDGL75csqGFueo755sptxttKEDwGzDQfaK2JAcbSQUtDZH72YgBLCcAvM97X",
  "key18": "51KhzwAdp4Zm5tqbUkrDi2gTiXfcoA2qocPtDEjK3S765HQaqWAF7mJDrBdJjAy3nbPxrSCoUTe571akF5uX7HRW",
  "key19": "4cPW28sXHRRY98e9maimEmx2iHUbAHMSXKx2Cfm2Kt2CfVXo4HA5wbTDVNkWPUDvLUaE3rTeEcZoPRf7kA3DN2Tq",
  "key20": "5sRXz39BKVcjUBDquDkvNzpcS9hzya5DXbTDJN2bf2W3FM5594pBMpFWFi1czVUHJPU8eJvc6XqvzeEJdXHQXc9r",
  "key21": "2FnNTiS1NCjvXyE6AKFBo2bqtvWxKXtYMb4ezZ2agU5iyBQ81ALsRQecYwLZKiXYYyvo8TmLP8QtCrmz6poE3XB8",
  "key22": "2C6w2Ft43sRJttme4Dq3uBGJXeLRKWAMkonv7ETrWovXaVTGkb9p1GKx2dAjmJGHmz7B3gDMu4VCz8PnDBfpL8to",
  "key23": "5XYGn9XgLN1wRkPDYoArob7b68esSK8Ss9BafrFk46GSRCikTkd1vQkHdLPdVSiVYq2uczT3LsRbZb6KQ2TFAusk",
  "key24": "58QRdERa8gmPocU4RhwBgBQCPDSk2kD6Mbv3xLVLmVPLvBHvpK8XKJYXjRgsSZTp2WtvVWDZ8wjyKmJKFZtaY4fN",
  "key25": "4E77qJQS5h982kwYveSZndWuUqEsxRtQdMfmwc8ACxvxkqY4e31f8MxTmZnV1JY1dPXPTgdNXAx2L7zWCimV4wPt",
  "key26": "4PHXaUhFV1y5WqywGkQbHK5LcXY1izSNCphKwqEkMZ3yfMnjx9FwdgiYZ7Dw3J9rB3JcfzTqU3GyJJj8jGVWQ4tN",
  "key27": "5UHfpZz7hutnrZxLP6NYhbdyJCcUmxtc8fniDh5a3VC387AthWyT38rXhm8iYEfbQvrfBTh3HtSubRnhH3n7nD7A",
  "key28": "3vPVkfCW9wfKHAx5EnWDHUepySo4HWS8hg2bJetwJwciGXNMMcZEryJF9mY8ZPjUgpqEc8MKeK8naMRijaQ42amY",
  "key29": "4AUqKMbqpAunU3wXmKmUnWNKySnFxKV6D9qBmdAsGGP4H9xuN4iwC5x1uMwVQdRa1Ui8ypgxs8j23y3J5MdigiLf",
  "key30": "56jNEHw5ACf6TMFg25zpsz19DBphd8nRV1oKF8Jgspj4it4bmscuNKhS3BKUW1bAm1DLP47Uv1zopxbnwQGVcsiP",
  "key31": "328jdsGgwwgNGw3BeJJq4YwwfzLNqJ1k7d4SyWb9xc4jrF6hJUtPXMwUSUrWNjL5cMk21wHnqF3ckNHZvj24VcDE",
  "key32": "yg2zKNUV6iceWmbXjjyiHKgAXLF5vSvhXvADn1tXQ4TsYgviUqDop8yv4xgwgNkQomzLwQ2f8PUs7LaUgvKpgiT",
  "key33": "2TyZbJe7HiscqRdefh7f7GoNefRpkNYXtV6DKVPVnedLr4imdceSBY3ydCn8MzQgqXDM55rrzb1cgSo2iQqm22aH",
  "key34": "3eT4zWhBGUfSwhxbHTK5TeupUNLUBtQrzqFEGgQ3yRV13Y4dfKn3NZFuQYoj7zc262peUNDHLuRnfkBYc9EDzo1m",
  "key35": "3NFHt4abykVbHT2H99za9GiXK4uQgXCNNyisNQb5iXc5jWdb6ziAfasymT6frdozrQ2yNY8P2awVfsHSwKnS1RcB",
  "key36": "4wfRYqqTp4oTGmQJqUW3T72uy2A2Xd9K2fSVU6R14z3qmx5SpZeYEHdb4tg5snvCBkL7CtK3RDd8B5nWx6m2wAgw",
  "key37": "jqpovFRT6pK6JL53oU22sh4oFGQY9DY2N5KzZH836JUSa9wN3kgnMXBVT1S9e673TJkvgSLtWxfukGnhaK1a413",
  "key38": "2hF1bYAB2vgJFkb1QMNQkmC2kcH5nFmEZFY3SAnYNppzvpwboHmN8rXeeJZGYBvWk5nTA4sG7PFVb7GV2MM517JA",
  "key39": "5n2BL8FW6LePXNFHBsYcwW7KdfueCGCpaUkdwTfi3yaTNaCs9ZsBp71japiv6bb4fzpieJFQZXa5Cc6B79iyCUoS",
  "key40": "5y7uXFmnTtQf33A1UfttpdGBpZjLdjjMApyKChEr4ZDvcetYrz2QYWGXNeQsdqisnns4PySX1xkuuXzC5ngTNiyK",
  "key41": "4egHPdt4HfBEzFNs8BGEUq7S4sHmzJeYfigdkMtxzgwyJ579HdCK3dnWjtf9KRrpeP95Rw43Q2R8XNDSWikfW7n",
  "key42": "5L8BQcfb3868ZmPgB8jyHLD6JvnfjAoBKZ27jwhtAMteNMNaHNe7KhyoDWsrLnLwv8QmpFZcumV98M8MnDjQa8Lz",
  "key43": "Yxxe1pDxFjUMWQuUo7M9H9GN4fiKMG4bzBTkevEfXQaK7QD4HBCsz2hqtxsQo9Y8jHn5qHydBkrBdEM1CnWi9Jh",
  "key44": "2jQz2j4gbu1FL3nANGbqYfCFa9wyS3WkXPxETNP1dLJykLfKVw4KPsxDEjud8doJu4gnQi1yMxn2TfhNiWP8vBRp",
  "key45": "3vveNGYzUp1LWR2pjRmKoSjxGBkwQm4wu1FzRuhpCBncZVwm6t1nNYTMydxdcFR3NxxxFhSNFkhqcGahNJXtGCUM"
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
