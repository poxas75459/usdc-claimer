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
    "4Tvo5dgDVrVx3F6hWAjbr2pLdkUBcmP3Qi1L1MbXGRQQkA5anePzPzji847c8C9zkt2SHuBgiZHzJzVGGD8nAFvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39aTCLhd7v3qApGqbWfvQHPiQyeP19aMT5bj8BYchkNzkLKBszWVjEKkakwDQTQf1qSXJUjd84m8MzRZU5rN4Z1Q",
  "key1": "34rfUnTSwZD4xFtSLwf5Em9fer9vKe6RkroC76xN7cLyYAoHeaJ2hNSWrJk8CwYndfGXwPexeU1DQ4RNFMeSTgtE",
  "key2": "5eBjjXDT7RUEubE5d6dzPAEtCcpwD9ATAdCQNV6AbtaJCdyCuoetPatyy4RexddeLefEQzoYHLWHU7fUEh1XMdKs",
  "key3": "3edxYVUYD5KrMGdMQ1i3uq6492q2u2tH75m8mCNiQtEwTPAcCnyzXohWZbhyJZTvMpnDzGuCXLvoohE4j1PgSe8T",
  "key4": "36aXnusXH7ddbMW49XveMonExonzi3SVgryFZy1bAGM5xPt7Rbkbusdxve6iTZdZTTf4VxiQbnLmVhQnxiRKMfZs",
  "key5": "5BimNCrihDZnftLrwBZkdDvK6NdvZdNabftaYY2wgrXxi1wmvWxcBLjD72ctWoJr4GZMpi8Bo6hhXnd9iBRfULFJ",
  "key6": "3w2UoJ76y1ZHirMYeuBvGxrGXW67SLkFi6C3YEcToZT9Pg8LFTPjwCQtEdFmaTT2QSxfT1v6K91r32XDosLM6euY",
  "key7": "2uuozWX8NSXGA9FXastqHJCXBJEPwqVaymTAPM6Xhhvn2TCH3nCBeHwxL45u1DwhjsDM3g7FYVrUnrZ9d9VRzmZt",
  "key8": "5r4eZSa4M2YxaQYKeVsadCeurFnX9AX8Co2o9EC6wGunxXYLqnurnLYNVsBN2iR9gEuZxibcq56gXLBsupk4Upxs",
  "key9": "5wF4KHVjTxb1ig4akQXMr6UcVz2HyrqFLPoD9DXiUXMctbhq3SRb4Fswv85APSy5tUmDNKqUxKRwZqEiJPjQzpd7",
  "key10": "5SjpGu6Ydb958a41gDdgwnzf6bDWNEzA8HMczLRAoo8URTxA45pWpdm1jaShFHnDtDa7Q7m9EDkAqqe7cg1g1fVA",
  "key11": "4ZbNC59xv4qqcgfBGJMWE6xYvgHtinoBXaQmHH6ZHPQQFrRqb5cZhZTQW8KUNuEQ4HXf25vkNkDAwdpw7rTGjH8Z",
  "key12": "2fiBi3PHZE9Kco4uZKYN76z1i4L7f82NuySgLVT6tpM2DqFmebvWj52T1UhxxdiGyaYfHc7gushKLdysTNaYbMBh",
  "key13": "5fS2V3E8ET7EyWUBsy8af6DfUkCVuScWCLvRWSouhGF4TFX7bGPvrT7hJHGf1dAsYh2tfYenp5fms9QDBB5jZ6A5",
  "key14": "5TawJ9yo9AhjqEAgMJve3mkvyyz2EcXjoFs2pdUvqAkWzB6SysARoBGtidJpkSzJ3Ey2eUvEbv4JAs84e46zMbXu",
  "key15": "5EVamKYxmC2L8riTwNxAtmSj6uyLBzEc1HkQvVRSZkMNbVrFuU7or2yhHe5h47fEkQxKCCg8YJwXrZH3tunosJBD",
  "key16": "3zUoR7ASeFuSvSygcgTAZPkNZCnsp7DsJLnnpPnhaaaGPpgwLU5WWdpujhCpAnFFPDmv3sRDAmCmMej55rCibLcL",
  "key17": "2N6fDswjpgkZQKPSpeJerLQfdSGHjVYWc9ekUewbkgDUgsBQChXBQ1nbpo3rSvHyBq5CwRKLeyu8Zxe1Umg96By8",
  "key18": "vzo3sjMveQMJnoz76hgpXn4aJVtqiw6bS8yBiZAMkm95HLQT5MjbRqGK5VKEaWoHTgGNjCJBCZE8fEcsj8a7x2Y",
  "key19": "2wqmV1Dv9r8b2LoMuKCRCa8TG7NkHAmqAktetBa7rta336T7SXSJcNT76y5Svg5y6ARD3fMe7bcG7v3bh877ZQWG",
  "key20": "5Kga9vPejRAHH5grCWY1D6YqZgizmvxnTbptAmwgyrzxmKjT1SvMtJTnBxH8jqHfWG8W7HTrST4xN8XDarYre1pE",
  "key21": "5fsewaqBNLuvn68xKher4gwPqcuPnLK1wpSvVYgd4sV5MUFkJEs33EpbKmVr6mPWh6BTUwHwrtLcJhRkcfdwbdyZ",
  "key22": "5bEVF4RfF5gofMLC34aCj3ddDzDrttRfqTpk67BPvJVBoZBDi1zshNsAFfZeigE84Nocf7VZTKHphubMcvjqx894",
  "key23": "3t4w35VyVW4CAkj4UYGc7ozVkgUHn5LsptuPWoiXhZToph9aFdF179NBLgDyGZHFuvgg4PD6oDAn2jkfz4wTnrZJ",
  "key24": "5d5Z9CaUXna5vyGuPpr8oaaEnaf5tR8okA1Q1T7PVL9fkABMAvCHuRJkUbAwzFAZYRKsZj3T9r6pL5d2ks4KGyJx",
  "key25": "2MYkfbV2iqVBDJrkxcHcTqjcNrcazF1znWA7hXM5bSAVjMFoVDpgtF7qxzgz3vihE9d6jYvMBMEwA8kFfowzpfum",
  "key26": "tJKYSv3bXa411Hyz5T8S9wzXqBnkCzp7h9T6RXW3zL54RhYZVfLxajXKMToBVArxaLeEbpB93eQTB8jtoMQQZcY",
  "key27": "iE1ppuBuWBxtPcyk7TCCBhGVykwSRyJCcRjet8JNGtn14qtgpUYYrwR56x8FRdNUf45yDiZBpN7nqUXCsKSagQ6",
  "key28": "3LBPxhHRVkZx6as5oLNPhE8rpfyDjFtKX95cD6z3jyrYxBHBRrWE3GqVRN6Zvj84k5mC8V7n2zjcjszUzB8sio64",
  "key29": "CoqNiEM9tdnr2UxAxDz1X4GPBzc3QXRtfk67FS4ckA8dczDdeFTDUh8AKg9p46D6qoai419RprR1SBgMaN3NBnK",
  "key30": "4cvCyzQcLZKGkYLuYBoxu9ZnbbXSpRstYhREUTMRE6eF65WGpX84yhfNwhJnGASq6LXnn8vRmHADXtzjcACNM66M",
  "key31": "2DVZm7zK5jYZJ2FrkxLdvFFr2khoX5atBfy87mH86vvGfPQCdPb9JCfxiGrc8JGqCqESksScbQ6bS3ZbLv1edcCd",
  "key32": "4De2JLbrEZsodUaP6YDo3gNCa9vge3Dz4HuaQSvMD6qybdofip9y9eyohW1cyfZbYcuVCAMN5JjG5qugPGmJgJZi",
  "key33": "4viD2XXUMQY6RUmW76rzrCC2bqtB58AgpvYG8PzaC711uK4hz5gvgsP68kdoKVh3Nr2wViX8Kc8MaGqYGB7y956m",
  "key34": "4N8gGbLAPhP2tUDmbqubRqzdqLyiPJy32K4UPdy1Pe3Txko3wPcLn3dket7JTEmR1jaMXJBFwP5h4XKGDykujF6Y",
  "key35": "5PwwZx841Mn1KEGSwUMqHbDt3jCBhHjXou63NLr9JiaCL2eD8r114ZW3gu8kDE47t3pZNDLFV2ccU7fmvW1WC7Mf",
  "key36": "4K3PcSjBUYc5mzDwUv6EfGoesL83xan4T4f7qUoGUKaQHC4n4md2zJZYbd8mDPXjGkCzhp8SoRgcShG5nRJ752x5"
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
