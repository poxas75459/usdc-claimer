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
    "3GPtrmkQDntHYM5Gd3EJp9ZViZrwjaG1YGaMmzUYCBaw7pNrLrqxh4drRasnyfXMNYosXkSBQS2TG6pL5UrN7aYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybR2Lsae5ydb767rY4MoLPcfVcSFRhEt43hVfrGFH8qcuD1iAPZqCuHzhJunmmvaKt3rkP4XKy6mgnVt4ohV38S",
  "key1": "58FEpv3NEWwVJK1vCqHdw5ivhyADFBkTab6oRAm9XJBwgH8iyEtiHseaGMqWfAYkgS7xuLmTatLSj6Z57xTNLzD7",
  "key2": "3n1XhikqR3DjRDxvoqdeBbt5yKdXFePLpRe8jwttjyjiWHQ4UETs1PDbCyg7r2ggvhG3ea68ekd15ZbGSvKmVC6c",
  "key3": "5qpYi3fVuoPdtmrSmzoYxUxyGQrvZ5Wi7JjxjRf1X9V8WZHekMaGL9AmvbWkVtVNmkWV4eFpFvGwukupf5YMs7Yw",
  "key4": "28yzGAk8YMSSFVyXEkjvsNrNquRx9WFz3WoDvnhHfernbvzPnQRy3YJ5u8Y1ZEsCKNTRywecL7Yis8yyJQBKMgDr",
  "key5": "4rXprCYsvNGiN5mKJCrfUWCat5JPYKFXerkfLkZgga44DfySk9zncUbqNrSLUXZPo4qyYsKRaiK24D4djNEezWuS",
  "key6": "tSH6aKC7ngE8X2EpvTatZUVYLuydZdM4drVe5dYZ5BbAGrkDRGURepXvFCFcYDqQnzBcB3CJVuhjNJHyFjodira",
  "key7": "4seUoPMLagsYTKxUQceRepRsNMnS5PVbCKM4HwPuwqZ4ngepdNqAbUesyuaRc15jJtg559WHhMKZ396aaqjMEU4y",
  "key8": "4Rq7qd8wuA2C8MyMMYyUCpm9VeWbK5wCjMuZAbakm88NpBezTf8AtFFmqbB99PUTAFBNro22PTayTm4TDtWeKtPP",
  "key9": "5odA8YLEo9MJrS9JWHghkW8cfWhn94NAWBfyKuAVdBisZAPzyFbQUpwXZUZsNcKCNAuezYctQJVqC4arpmNuMsPU",
  "key10": "2utJNUsaQC14qNJ8gtJYKJ63Z96vs1KP4mZUemBHph2mvcyEGfHsR58VJaibnYA56YKjx9PqHvHM8tkCe61WUuzA",
  "key11": "4Phmcit1zViewszNB5jjpD25Xwv372ygftJRktsNoprehDpa5qBitdif1xXmLnmkjWTZLBY6HL3qBNY6fsAEXKRJ",
  "key12": "4M7syeEKEycSj2QXxETkiyp6Bd7uvEprjYGqV2pMP95LeC5NS4TiyC9kpf1rFR4P5x8L6wrrG1nCSgjZ2o6EEzxZ",
  "key13": "3r5zj6HrFjwakWhrGqrg68s6Z413YFeaDMXZB8FsuC4G6NVUD6vJ3M2zPYHd4Dw9drqQ8gKKmUA4kofptC8E8Pnq",
  "key14": "2hxpjH7swqd9LBE7p4tjcKRQsXzEVwqEa6nR8DRtUA5qSnhmwn9LkXp4mYP7uqckmpXLPGF2dJESaoaYFLtDLFQN",
  "key15": "5q7EHBejCTrK6pTALENMLgLftjLB1rfhUwopC13iDpkWAPJxwSbPjtLzmjDfc25PwbPzn1dYguY8tAqhM2SeAc5M",
  "key16": "CqKSKuCTQ6tDm5FdxYMV23YijoYnRZ6Ke79nEBHpbXPNxDJs8uyTpHeR9kMJQ6SRScBFjNH76dLetsaMxnC1WXU",
  "key17": "5qUwVE8tiiCtpcP468vsKfMuMKfbQKDCaGvLxh3RNGmNnUANB4VKU16AcbQHqk82p8VewvWj4YWc3ZQ6RN5eYTcJ",
  "key18": "5ZKepg5Gg3L2itSLESBZoyzBdoSYDxFvwuaQrwdamtyL7GGTHyGRj6XhhPBDqyqZtRcSbZmYS5ZdazA3XQMYcNDY",
  "key19": "GD5VLbLMnRkbpxRbTreKw9BFHQ2pjjVfrjwBqcqntLJqQrkWptfaqHNDfLDJfHoizvkBRZ1tH7f76vJwWUpUK8q",
  "key20": "2zookRRmHdWRKaw9YYZLfWz3fvNZw5sFTPLtxgtJ7dGcFVH6wDsmT2mejUudFdCCiFKx1BDrGy3zz6xEt83DxDmF",
  "key21": "3JxTnjFwki7SAvPZV9jXzTuneKyQLPMgp8dWwCNg5V5Dd3xxb2KxFh1ksemW984uB2wWHadsVps8U14LNNTc8iWW",
  "key22": "2Lmox9fDsSi4V5rjanQk8VZ7duahBuSzFeUtSwyhZMHzj8xEGrqZTbFQiQ9j98QRFgjLZ93VQQmoqttwbX75kV8w",
  "key23": "61nSvih2v7u31MdZyrWTqMNhtqHBwYXahjmEiKW5cPjK7vZiyfPzLirJ42LgimpLTgpbuHtmtmfVVoySeQ5aqKPH",
  "key24": "4L5dmKi82Q2xsk3TkhkSiMgbQWANHZk8GSjdrSopsXHj8jmzEomgccNSGYgEuStgd1pqjiSsPSg2C5yWwXTrjaft",
  "key25": "EKU979bZHwWX98KnTaBN5QbqH6qdHwnm7JiWwPaQuPicDaYCMTW3dVynLgtmTyicG3iUPgHfbmDNKPHBzqkWA7L",
  "key26": "CLGpnF39NziyRzU4Jutb3kJgPkbkeupfTxVLvaed5FQ94sGftV6NDkDpGdJzHEeHeSg88S1pUL9rMfUBNGpBWhM",
  "key27": "57RxycvY3ZL7w3zKawBaDiLtBfy5DjT5PnAG9BBkFCi1gQenRN9cNGsrLsQaypVwgULCYHosskFZYkDCKgufvc7n",
  "key28": "2oQwBJhmVDeCsLX2nwnT1iM4Wf2Zkbik9cf6nsDJte1nHxGEvUgPvSv4BYQ2hQrWtNmdNd6c67fxKJYvqfxHQAFE",
  "key29": "5wq5iYZP4CYRheC1T8coBaHmXPjXdjqwZMFxdPUo8m2qfizBfRzdvNaJ3JpCvWkpsz3TEFeuHpSeMRHBK6DpCSCm",
  "key30": "aD8wLaiy6QT6mF5jGbMJvW2EzbRu6vvsP1F2oJhV6uAAuzbN9rbncVyKVL2sGtuEaQ7rNcp6KH1xtkQKmeQjEnH",
  "key31": "2b45NorE8KNnDiKS3fmfM3bEVvAB7HHo4VMu73rLFwTD8ca7WNXXHBb66kex3WnVBN3RPso6WSs4V7WKu3km3zap",
  "key32": "FqG28TnF1j6dzFvGJRGvYe7moQ9LqUczNH5ZUsmbic5TQRWPhq2tAMAitNZ3TZnuqB5i5FVwPAgDMmSksQxaM65",
  "key33": "44DTuNvPTgLsbacRPfkHzNj9Pc3yg7zs1BBy6ft4Z5Jsq3UC3rzxyxQPaR1G4TKo3E8LhHDk5T6aS13zR6NDpYdK",
  "key34": "25KFRnC3g7ZUgkDwHgxAZAArBARuWxRkfELy6hZpvBoB2adf91R1An7FzsZM3Q2mB2rDLPYS2M63fKzArckMUvrL",
  "key35": "2FJgTAMCaoxvXL4pNxy2Qg2wCAuNnFyxL3g6hxrzmi84y3aRj28v6iUQ9Wy5H9sKuBynSD6NxoyknWFZc6nnDwjF",
  "key36": "3NHLYEWyaGFcry3UVHeuZ1KySKZts3vmbhT8rHmyPxMACaSW5TMdHGAzA2bAiKCv7Qp2D3y7haSfjuPbR8JyK4gc",
  "key37": "2finPDue1b58Rr4W1vFFcMfLAS13NK8JCdGAQtcQ5NhRQvUZbzL546tifEaFMH3vX7JzN9LGivN7KBHi62Z24ndB",
  "key38": "5UcN4aLz4MJLz5jYcRXvcp8VMcF5n92UyRSt8ejx4HuSWu52gyTjAENdPe9Jo2QansXKbhCfaXN7GMwynMRW97KM",
  "key39": "4s3hQap95GkqZQBjDmYS1JNWj9nVTkwq9kgADVAuYS2WYN3jWmySqdegjvnsmQ9JWC46zQswFv1NazC6Ti5AXPQr",
  "key40": "3svb3MjBHwupd2WzYPytxMdwt18Ycs2LZzzRi8ckfrRnNw6CugN1GipKGFxSWPtJj9gm33p4RvXv78QAdkMdpfnR",
  "key41": "525grj1KBRKiyJM6GiNnXjfwra1hRnBd1jcW9LydRLDmStzGQcKuYjma4dCeyNs7ZBzXyvTd5BNdnCMcEU39upLq",
  "key42": "2PnUF8W1cCzMY7UYQZZeVtK9d1pLw5iRnyRkF1ZYi2vF1TYU9QEmEukFh2Zijjb9iSMcSZm4L8nKwDwn1FzjAKxZ",
  "key43": "2YCUvAfL3ML6z7cjzT5b2d5LvBi2pwKnAsPfpmpdWg9JrphcvBsJUXzZovegEFWMJNmdkKaKV9NFWeACWEFgdE2F",
  "key44": "32BcHwe6PPtN7DRHXC9SFnyyNYEEw8ymXqvpYxD1b9ir6b6QgccNyjGdqGze717CjLbTCBFhRPSTcnTcnj8Bqt48"
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
