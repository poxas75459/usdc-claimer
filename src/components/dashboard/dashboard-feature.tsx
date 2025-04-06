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
    "22gjhBfr7wrUtu17wvGWQerdVrQQqjjyVhJhe74q8wKuTbpiXtrP3b6dYkvKh6KbzmNUXp6Drm3hpLWaoqrEy9jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1zcCurtZEkdi4PdEujES9F3VDWGg2Wrb63Sadushqc9mu9L2jSh5uUhuLLZUnWbzvAKv1aGf1M1zWQpi5g9uN4",
  "key1": "5B11FqQ1rPQmgo52RBCzeXxELmrUFPnmt1oLGE3dcFzGmtCEGRwYcNoMfPR4k5Py4dphdu5Q8gXsosXsypQ7xMHM",
  "key2": "4ZLXtdUmnoa8RSxTwsP7VJJosE4YHNNCe2GXTKm8s7wo1CEMg3gwx9FuonedbAi6aCxjRDGphTc69g57D7AGCepa",
  "key3": "4ksjg4BHfGKLfDzjSgkaEed2NMVMKzMmfuKitrwpQPM4Zjpd3c6CByUx3mRdTbmXXwGJUbB6FgxtRZSD2S2aNTmC",
  "key4": "555BVdMtySpxyhA3wG9eQDdBLhzUaCd5heC8wUuk2y5c3QzYYp7MJ4jY8DUBeBXBSTG1yjfGTxFsJFz7PR2MuQet",
  "key5": "293zF9zKm19ENi5VmCN4n89SXNaoX8n9wmvqm7bVhKrG5zU3Z2HNWvEekWsriHKyPYxkwEvkLDNF8J3oEmNGYL68",
  "key6": "5xV21occRYs1GUpSo2NHn3ZqpttgakXA1GGrbnANE4KWL54E6QbdEv5SRSct7WZL7Ko31RUpA6uzNDFK14g89tLa",
  "key7": "4SNa8cMaGjyHvtUAXMuXVFXiHvsd5WJ9WqiRrkvVQiWwxYQadWEtwsrbf7YFF6ooYzU2h489x447q5tNMubvJvzr",
  "key8": "2ZkwUE2JDNH6xFCkv3nd2MKCEJn8gfxqSS6zrJLenAuNKvc7hCrrinKGzjAzv2f6yrCs9ZAorEUNE6n9ykpNvVUV",
  "key9": "3jHdxdi9Kmtm81aj3WcMM28aSNefqeF1XpB4tbo1tWvT49mPrgoLbtjgDMKMWxXKY4cGHaUviK3PNJxHSwJ1oADR",
  "key10": "3ReYDC4WPixMtoKiM9chodCRsd9oFDbh47NKDckbXnfP4Q6S3deT1aRwzq3qTfrPUoer6pdaEdh5WzsWkdoQ1a9p",
  "key11": "3YBYWEjHWQghfJfYA74edE1wdfUxrYcwqrBW4QFPB6i5cf2FCZquskobWhEdqhRmxotVJz1kmtZgZKKSSiEoPRZt",
  "key12": "581kfd5XZuW4VEFbAc2SmrpaNXHVBo5i38gk1rxzZz8SePJc655dDAQTZa2VKwPoriyU8w368xZr9kwfBKmPmiLE",
  "key13": "3kTPFiR2XoaX8mDwuCsMbGmCY7dkBYrseMgdyYQsiq8NciXqa61kwNv4ezCeyXHgt9V2Th4JPJEwEGowxmwNhCYe",
  "key14": "4jNX5Qb2rb4wSymt6oeiuTAG5svTdsqNaLr9K3CLMLmi2Q3hjCCv9dUFWiPnfHebBd5icL6eudxysuEFYDdpNTr7",
  "key15": "46GGC4kdSQ7u5pfRPdKo7Wa56Sd2mUW1sY6ARAHzNujJ5Jd79UGUbMes7gDQc2ovMoNoNMAKRirGb9VUhMgma2XY",
  "key16": "4XBzRjraZ1EXB935m7ERH7jByyGgmwyzy4bpwoD1mUSSwDKmaTrgfrzo26EeKCqZwzHFZySjzi2cs8WKhgjJVTn6",
  "key17": "Ue1Twojo12kB8icctC9jQbhP1j83LdACkgqo3yPuVVfGoYKSFiSryqZhL7GTKkkryVfBkGBibHbDa5jeEG2Q1Vy",
  "key18": "4dAH4jFn6KLfncZYJQCFeQJPZUiGM3vvbRnxPNJuZt7yNVDsmaXwGQ4PytEUdefudTkJjPY5qcC4BRZBJtz6qp6e",
  "key19": "54mnPjTZXXg6YaipbUEx4LszVp5VgE3der1fvEy9BeXqghd69Eig7SEMXBLAja3gFFfkQe5E1gCckAF4muv1m4Xq",
  "key20": "4LM6gDswX5b85hKtNtU7vK8E5vX8CtBjYu1KJami6vbka1eizDXKRTxoNLmENhomNbrN8t2KNwB9YL8Hd3RGHzyL",
  "key21": "51JiqCmMk82vH9cSmjWATVDRjqAhnjZoL2PvTnpoh9nFckWdaHBhrdUCDxXHqaxwmRuYThFvvmED2jEine41YJYw",
  "key22": "2vmG6DnjfHv6bPjYVYAqrePFBx6SVsQRjN9eJv4GcKYcoAiz4R2ybeNSQ2auTVnaxkHpdR42aUcBiGR5CSHTCBNa",
  "key23": "3TYLVoUPmVNCNAKWdjxmAGojQqoPB8WthzK2i5r3nQssZat9Yzmd8eTKrHEvEUFj6sj64AXyff2K8WgZb1sP9yz6",
  "key24": "62bE4cPmERts3E4x7kMe57Q2QEraST9CQdaehcogrV62migtQ1tohCWAMCHKPbX5YFjUtJsvNsc3s712v1aHUxp4",
  "key25": "5JC7NTKMpRB9bYfNsioD5V8auaBx757z1B1QihM76sd35YCrBarHJodicTd9B9rgjnXpcFYSf4n6LmqPhEpMBrSR",
  "key26": "2DiFSHLFr9P7DqPa4P6qYENiXvNZVMatPXkiV3J3aUeV6R7dMoSbEAHXwebdrC3ecHKiZaLnU6GBQjW4v1tAHDG5",
  "key27": "2cYA1JGo4maMm4BgEivi8SgbCQSfSiTeSn2A4wnUbfqYQCRPAQ5vktgaFqEc529gFXzhj9zWqPq2s5eE873hTTTf",
  "key28": "2pEMGThdXL77J4qrFU47xc7ztpPCkkvGFEMQAuZNj7Civ8hATScDSGS7oNBmgVbaahSxMEw4wNyCWH5sJLMfcH4S",
  "key29": "ScJybGCfCdWN2KXXZUoRPBpFDjovtsXEf5LhUbAJdgfqP5bhhrLadE27qy8C7TeyGnY7u7NK8RR7bR7eT8qiR1a",
  "key30": "5jxt1fviddHCNxLkpSvMfvkaTnJ9QfTjBHknLr8Ta4AGZru8soA9PNorkicAvS5bRZoEUQ9R668ncqGytbk14QbH",
  "key31": "2krqSv5PL4ALWjGc4MqKS35giX9qbEb7xcbdmx6XRv3uPREp7G5bScgPKqbaZvZWXSNyou7u9rqWggxzmdTkKYip",
  "key32": "2wa23bvbi2wq3XegVqt1Dkc5WgpPhVYN9SxVbwAgZbsk1G7645Ghp3HAsLJrwJ388vxpk1tDuDa7HVTtETeSZgiu",
  "key33": "5dNCwcrgcg2eHA3DpuqXvdR4UBCGKokHrSaBBpD7xKPxkK3eVvM7AvWraKaXSzXyxjv26prA87FoMDE6jWYw7eVd",
  "key34": "5eJLkk8Xanz9UrMRyWv5Q8dJSXrmLpPFeWYRiNkMjYXF84vuNoro1b28Vi2g4v5bgzkXLGdXa2ymTjFrKHTy1cuu",
  "key35": "4Fsnit4asmmbZkLMdarzaq9g8mZoXPBftocVFtU8wDk89z6DCnWGxAkUb7rrut9MFHw1GLhLzbnTdy3sA6twBRz6",
  "key36": "3FsokrUrC8Wi1QiCDePFYtbetnLvWm9TL4WzEqaSCP42M3T9ZGuCjcz8NX3PMHJ5ZBDLe8o5qTKEXXChB2xyjyXW",
  "key37": "3DnPwqJCRUHttbjJjhCywJVNVEtFHcxJhHCw65cH2Ke3LxMPCNoy5TQB72JYVWwxmcTpxVFeSCUscRhho2KJ9TsH",
  "key38": "iWLWhtia5381hSnxEnGsQjEFkQrSyguotUYCrc6DV9jLWccsTp4wyjXPyReAiEt1qn37HZEWuFKL8MAgKwULWh9",
  "key39": "5SQ5CgY7dYBCnynZQwZd2fgG4auLWS6DPWTyp9qLGZAp9brrPxtxvGhvqm7abJyPsqfkHbmXRxLpJyHG64RjwZUn",
  "key40": "kmF5h6HUaRT928PXe5cQeJdx26rZGWM8U1bqLxRUTdGayEj5zoCThfmuvkLdfUos3ArndTvCG3K8e1Sq84hzzU3",
  "key41": "2M9s4R9uRkvRkHNxF278Ezyg76gGn1V5Uab9QzjXdQUHNtwsgbDVSaPGRxtdDMXoBoKTCKkc3zMrenNT29CEANyF",
  "key42": "2Dj2heXrUtRpETAKWAGeMoN8LBRJgi5cNGzAFPAdhjJiPCY8q2FfXRuofd7RQVSKBNPZEya2XL2QE39osDyYJuu1",
  "key43": "35WqTDn7wMKQ2LsNm5zKiDj82tpXLsr6iFnv4Vntsr1aNLmHm7yi3ihAkz7aTvXMTn5QTdHfn1A6Q1ANJ2p1d792"
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
