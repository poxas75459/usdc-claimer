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
    "3xLoCSUvw2BCR9ufGqu8gq73RLCSafSk1J3sETGSMgCMJpxHuQskLQQmwWBssGCAudTavHxatmjkuzHoexGZGawy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46jXiQB1X2UMvfR7ZJVjQWLPmcFy6zfQK8CYXPiDGDvQEwxm11WUShNnJwEEvDtnWMCqZEij9m5M9AqCbbMwxLsi",
  "key1": "3b7NNcVAero8kTwvyQ12Ei1X9JiVbjXhudNerUSoHeN6sctCSyP5wqJ6LbpDcxSHYxfHH2AU5N3RE7LAjav848ee",
  "key2": "4AwRPXTEx4DUSGbW89AwnZ4cc32B77pNSKTY5bN47AozkSAe9uoyrJURTRjspxvYtDhVs6MhCAdR8HKCxc5z3Uc6",
  "key3": "4HjK5Aqx87sDCtiT1xCyGzCYXE1FtYrV8B3bh3U5ysRef6ghJXFJkxLBNNgAnTHJJLeXF3JpKATeiBJ9jZEyJ1Fj",
  "key4": "2y41h6L7mMF9ycUKVmf4uFV6Dj2A2EeCnRx6pd3K1r2iPN6LNCrXCZTT3QKVtKAFRsmqwXAeVhN36kDN2CQZs37D",
  "key5": "4TKnpD4pLSSmpgEaARdU1hapvX4teLN4LDPhUZc984TDe1dcV5E8HQSQJebSQK6ohv2Hh9ZQALSMKpPYfRqhovTv",
  "key6": "4M8mSfiq16zwPtTbLDk4To2y7QUUiY7VV3p5bpSAac2cyQmndJA9r7Ei4bNgwZBSBMRMksW8gXjFJXP8MKwpg3Jj",
  "key7": "451933oqnEGXXgkCXfxNFddK5ALyP5SRcApsrMM12CiocuVWq3uTi9yfVbZUHT1Htyy5HJo6RRSrNw7W4x712Mbz",
  "key8": "53YchmrzLAZwR3rTe8JLiW4q23rujecJqMPgnRg6zoFj6iQrmEfLuyps1GumpSZ3Af4pkcfJoPFQJSocnM7hLSpf",
  "key9": "4V59wacTztoLWq43vCterbdKbsFgntHSzmYKXvEmbNgrvfmQARLdvTCkaKo8SXPMPJnvHaPv5SeX7FQKnKs4VyaP",
  "key10": "4yuNaJMK6T2kpZatQYkAnyiRpiseYqDH1uRHGei7DZKsKWxSqtemaoLAHMtBM52NYSbA39uZsbZydYnPNZeaPkU3",
  "key11": "JQT6344uiGgshsFwTna3qDqLC9zcVj1jijUFkbB1ijCJVzAp1VHEu3sv4Ps2qqNET1Xd8roEiBsbkwQHvT5keAW",
  "key12": "4xazGsJsdyGmy1vmK3cyBUzy7Tvu6XjDCEzXyDTioXNzBdU6BSFxcgmFadoHS6DJLquqKXfxUBWdQWxQ58zYfdmY",
  "key13": "4f3CJnjPtBjQNCXe9LPaz2kFKtGKNad3oiEq36BHxQQ8SqFaysMTmjWyUWng7ZUko8kcfx5xC2Ds1Svyf7bEbh5F",
  "key14": "kun6qUs7VpdYd1qpTTBrCV8kuYeg89oVxcnRaQFknLTPRa6WoHMqRbZsi7FaFRctBMBhsAXJD7mXt6zaPSnjiFk",
  "key15": "5ug6F1d73uD1e7GEzZAAwycrEVNJ1xbNQDY7eRxBJdVppmU4DTxtxuE2tK1g4TQy52F8k5p79BVWLzt5fkMdNu9m",
  "key16": "5X7yce4DTZjtreBzwi85CptErEsvZX1DxAjKq17K281HJZ2nkZ74x9iNTmsfWGyxBanEBNzDbiXxd9cGn4RH4RVp",
  "key17": "292zJBXASoaqavBULJNwqMTLcCgGWdEW3YtqHcvp4oH7EegndCB5UP74fdgqu2SBryktxGF5qkY1CRngeBdfA3rs",
  "key18": "omQ3yr283LDcnTveoq5hXU1UajRF5ou3nMuxjEr7aon4opL2CN4hJfkscFdRJeNANdksgMKjBdvKDKUpbP5L5aD",
  "key19": "6m7VwMbkTScyCFJ3uUwyQEKoBormbqviLN9UHseG649E4iELdPJDUoMH7o7VLt1bCs4NjiWrymH3q6Yoqar7caf",
  "key20": "3G5EhngCHR9apXZ3eyNhe7zSPTtha8iSKFrkLZ6YbY92uCgojAbBvrn6TW6Z3ifJFK9dAeG1kAxZDXZeUS3d5xgE",
  "key21": "3YaaG9SE8bZ9U4YfhGG1p1sdufGCNksFQVU4J6fsQu3NXKz9xYbhYk1SMjunhDZNNoe9A4gBMnM644NNjQKLzpRT",
  "key22": "LEQmYZPchrC9DRnP8JyXRk5yyJEtTmJLDatb4Jq2FodkpajAfPTUbzuPzR2JX8MWMaH8X1KRYXsSw6Z7VPNEw2F",
  "key23": "4Fq3mbmn5N89P6hc49cbgD6SEiMZeo4oi46hK5cbz9eTMwgvWbqdPrGwhQthaCCKqVBFgB7Jigkr8f3YzhGPTgAA",
  "key24": "4u1HeUz2R3DzM9uSexR9MoEgP6qpDWvkTEdboz9oL346jWGrD4eQXE8uBUD3VNUWmTRakztByiAqZ5NzKX2mFbx2",
  "key25": "PSb1jfeCb7WUErmFeGb5HY2gmCs74fsW5gau3XLf8vZob5zrAE5tfkpC7bfCu8KERqKLPwdwhEiK5zPbkEcbbkN",
  "key26": "3URg3653RAn4xLHGWTrqZmP9qswtHPHbF2Eiw634dvfihxw3WywHeVpsoBQnU4Sp1oJ1BWv7rBQeD9y2zQbJiS46",
  "key27": "41ewy6NASK6XHParTaCPFi54d8cyhussSpQAns6BdEZb1qEQ3TTMzYk8pnFx9izqVtkuXWnTCgTs3R7D156hAKuG",
  "key28": "2f73vH16YsSkdTjUNULVW8pA7wy885gqKm5iMYp5Ru8Pj6czfekREykMxqatWrx43Q9aPsuqSE13x1gQRGVRT9oq",
  "key29": "3k9Rz45Bg9tAkEHeSCWRNDE1RVMJrqYPvEeer1aytddyLrhgDExw7fNM9UgzZq6UjiCQaCkJXi5fTcogVE3fMCJK",
  "key30": "bWmBKAh33Zcy47s43cZNy82gTutw3yffrdjNd52HLYqKuDacsam64DdANZV2ktSiJx2uLtwZNuCrZiAjHDDgeMh",
  "key31": "4dkZv4vfmiMUknCHtmJs8c2CxMgKkdirvLkbRpZCLvDkbayfzpXdTemJDL5xifPu9fTzzAs54tqpjYWbcK8foEda",
  "key32": "31hjYVPJuRY6VZWLyYdBeBP8QHfjkmnuXiFtp9YwEaYP8bebyEVUjKjMyZr63CpRJHam46G2qfTmQZKVbE8im9g3",
  "key33": "4e478xJiQqcd5c8ZaFBYn9wuJmFqSgaoqouEF3VnGa1a8muPow255j2efmY9n4c5phBupVFqCzxAcvHmk39xawT8",
  "key34": "3jND3pSUZvADvEiRsudnaUgvbWnKH9JrBJXqX4LARKT1Ban1k4ijNzYS5fx7kKNTkf4haf2oUpVwjp2YYc7yku1E",
  "key35": "5Utp4wjZoeqEsvpcHKLGogpF3G9DTTfyJfPk4atiyDYWN6aVYaQCSKRzQP6rRTEAcPhsHTgPZisy9rEYqsipn5WU",
  "key36": "5pqvEcLYzgNzz9DbFSZGXzM1ziYXk3XCUyapMimHtXBBCgHPnSVu8KiVPFu7Fwt4ZJAokiPWzjSYyRcudawqLL71",
  "key37": "2cZHNRXwfq18aQGFGYMUsiBEzY6LjjRtwowtJNE4qbeTzGadHKXv6LYdbdzZT8oPtJwidh21zD8eUmAW2p8nzt49",
  "key38": "3LRx6Ji4tsu28FoASkGS8Fm4AvChnAzV2BKUkLGABP4LNPJmHEbks7FHqaa6xeKheufB35gKdgzjsHEyKTSjJqoT",
  "key39": "33JHsxho5Q9GQfaysFpoxjCD1KtNtDSVwdM4ZfPmSHXSF6fHEggjBNmBGhTLpTTEhBTxmfDLW9aYtfyuKrvaU9vH",
  "key40": "5ZaNcmpQPjzzrRURgP1mrkkJTnmEbHZFffxnQH82taEQUXELA2F38yXaTyfDaFG5Ho85a1RGLx4SgGXG9zZmcKk5",
  "key41": "2D7t9a4bgKau9VZdcGdjxX3oHNvC4dFAEqSKP48LWc6aSXwuwsQMHv6Q32RZT4fnyQYhKamPrwYuogwmLqksfP8a",
  "key42": "3ACJ3FCKLSfK8wYmAqqy3j9Gmoo4fBJnMdHnKke1Wu2tcnQd2SHM6KM5hc5dAm5ya2oiTxKGFi4UbHU7aUdMnVVA",
  "key43": "2yCj4ALt4ZTJtFq9KAS7bGJyo7F9eDdWoxDueLaQNNpqzqwfVjSHXNMxZnjRAYwGQZs5tR2XLDGVcgJSvVRxgKeH",
  "key44": "4G6Cnm7tFneEFGHy5FEZtXPikWkU1ZmG5WKQquZwMnmbXoLAsx3S6v3NtLwegJ8iACKkeDHcyktCLXtV6X2rXWUt",
  "key45": "3mQuJP6RFVLv9CaVUDREV4FkhQ1FA68Fr6ujgCpdHBU6UuyXe8Cn5L4XkEk9Bk7WoPGPJXFG6ZoZC4trSwDApq43",
  "key46": "Q9ANef5bxnoCtMVR5zeN1Mhof89LsB7FA2UgZfjRiKudmRHzZgUZxG96b7LXxFsL7dcgVfVedoYjiGV96VJSH8c",
  "key47": "2QochCTz6HHSDP26MCTTARXikBc1wfFUL9w1dwa4NRdc62ig6ht8eCoL2SS6qCKPJKWYvzNp6LqNopCs5Ldr7wV",
  "key48": "5u6TsYb58s9iiEP8TBBVfkknnLCJwFQ55xp7QvneaExDQ5Cdq4eUBgZ5KmMRbudwGWtgrDU5tN8926qMgTamYw9C",
  "key49": "4yKCMVMViqW1p9bMddoG8oqXz87BFTn5dpc56kt2GRF4qaBNCtYWEEjFFpjDPyp8YUYZWo6j5VYzN4x8gHgVMbMo"
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
