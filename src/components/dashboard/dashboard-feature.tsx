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
    "pzQj569hopThXaw1LBytng67ef5aQzk4uyDnPRYrn4guq3uecKdsVL1sqVNyx2kMLP6jX7yvGH6W6RFhsRN9bDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inY3wMS8huJEXHkBK4r1HfTk15kqJYvRDWHTzFGt1oiiizUM7kikEqJDjWkFeyQSbnuBts2XXY2wFrTEK9fxu41",
  "key1": "4tPhv2UuK4AVqvrgkTc8smBCyRVWJsuuHGqUz3wdRzGqL2HVVevxULm53v9qydgvZAMk3vhuyspQKmCvno7p1e4S",
  "key2": "33M1z9QSzBAyrvrwWxwZVAGGXvjXe5X4En669VDQURLDY7Jru6CxMDTcn1Q8k31n6gi2ndy7jPeGTtArdE17zumE",
  "key3": "4Q8PrJqmH6WTqQSrtuo8RvQkdpwsYMgXfzFxY6BdbmzM3LWkL3SGXaFfd1tENrdWXKvdVSNFee1ak9m42U2gm9pv",
  "key4": "5NdThr2683JBwK5ns3RAhzFXCCtgpAdXXXpFSP6qAXDSm6zur5Xexpw42kQmtyXQfGgrt4fJhxKgx4UsQdZvkQgA",
  "key5": "2NnjTxSw6LpVK3Gve8mpZpNBUxS7nYCQnwiAoAtRCP94Y2JAc38tBgENjPhTgWBmxnBJtUAMyyCZXXmkUmZgSXNm",
  "key6": "5KMKHrdvSdwAREkacxW8VQvg5gFuff6hS7yu6M6QSjheGqd8XqcABFLNGYhdhSkjV81PcUwJwfsmCpwKQFu9Mhun",
  "key7": "hdPNnkdebSMu1tSA7XCvVqcwx5Cn1f5vvKEenczhX6wLis5VeQ1iCz12o3qHrQsT1KbcwfzdoM9pWjnfvGz4Ewc",
  "key8": "gjYWy4uG2PFyh81xy1jgWmA81xz3FTE7Ceci4V4kb8qJNEDmbmWzf76MjVKL6AsWmyxR4jyWb57ng3hWAsZ5K5w",
  "key9": "4zmkri7QbXpTgCH6jVQtVCpptaaMMgLoGqmHwaMuq5PB3uhprKPy45yvXZVByeox6tgJ1DeVqWDNRLVM97Nk2RoH",
  "key10": "5rN1WBRAB1PxoXnhCvMFwUJ7ULo13ctcMqC3oQTFNzsNQifsNG9bB78EB8H1MdfGG9P49JRcVGjgpgd7ysZr3i5",
  "key11": "47LCQxEmMWwHqhd8M38n8647qgkZW46H76SnmcW4iUAeECGST7X1xtRa8gZDQZWNXx1ZVs8cRVqnZvAMLm7jjdUp",
  "key12": "58AVzAWafG6EycGXpWKh8sso2wTkQd433Uj1ncq5sM3WzZCq5HdUbBkA23Dz32eSnbyG2gb9TVwxC8pLENsTJCHs",
  "key13": "2vohzRmde5YtUcK4NXtgoLJ6gLSE52PHLpTQkt2qQMfiFAaLxwDYahGTe8uP8ckdQ8HGqY1ARVDfRrTNQy2dxRcN",
  "key14": "43roAHUCiSp4dkhAC6GLQoP1U7wub9my5oTPKYmxsC65sW1mmMkY6XM5eARnFZhz1ig2K4AQMo7fbL41HhvhPJzt",
  "key15": "4LSJQDyMpPQSC8StKttUkTkKxfpuozKoi7uvBcz3cgpjUdr6zoN7TLTZD6KvARiuuqamtydfr3S1aZbdmWZxSrgU",
  "key16": "482t7cqNAmWcAR4XrukuKR9Lub3Ysf8stJmn523t2mFGTJEMnZgYivEeLexqdpSVMPv1Gk2xxoA8PE6Mm99QmuxP",
  "key17": "4nHMCzAQRcMwbfVqHxFMM48LpE3rM4yDRE8KD7fEcwMVAiRVTyFh8319CwCys8vMSEV4dwjCQQ6ZibVCgJjV4iHe",
  "key18": "3iTeg2yFsfQnJ589kxtJnTJZuLX82eTGqURzEfQhcwVsw1kMUp6d2CBhgJVjpvoAc77WgrsL6yno6FmHMKsw5BfN",
  "key19": "5qjTTJ7oxGsu2DqQCJ9L84zcGu18PRvodXvRb1jrVKiamo7i8c2j9sAeGFNqdKM7FHJcgfmpAM96pQjD73aXHCmr",
  "key20": "2BywJRs7ibb4Zwd5RyeB8YxmaG5KNTNAQBTigSc5B6BTV1Lo84u2fdWMBpeuxeVdE1X13GoBJTf7o7UJqFLurgjq",
  "key21": "7Yh6x7rjeEaszQ7G2WBwgBmTiGAGsLiHX9ZJfuQgNXXs3qZU1RTpoW4JQB6hCsxmFjtfxbdPpdk2SR9oBPQcV3M",
  "key22": "2PWTYgC2UkePaJy5FGebV2fZ62eGbHsgL1LW6JumybopZn9oUVn4dzWuH1Qv6R8hqhe1bTMZWB3geF8PwZrQ4CsB",
  "key23": "fpGGoqa6MzMJjP1o2ipVB5UKujqLoynaP77CyhAbroFxHyDcEddgVo7da2p9cwEAx6FbM6qcma5BbWxoyPKcjjr",
  "key24": "3uStDh5rC2G1FN331fwYuujCTJi7bMYChrthAEfnU1YWH3mEFSKXtQDwFE9snrURDzMezJ5zcbphRSZEqSdPUBwk",
  "key25": "HEpSQvpDYrCddg3dvon1xjsKNjNxJjmaRmHREvEvrMjdoHtnJbUvQC99mNmpK65VXnNsZBNaB2PAr7urJ6JjEVs",
  "key26": "AKcmNu9p2pAipwwavAmTGmacWve1VjvMYkh7eyVrKwyEAUFvjCj95GV81aWcmcMVfxqGS1iymqKBWnuQDV1aJvh",
  "key27": "5gMB5uw4uTTPF5Lg4UEaTYrSVSbazGhV2ZND6eD2pJ6t6a1batmj7Eq8JsKTkdHxV5m3k4t5EbqRUEFfusY65fJt",
  "key28": "3yU2y85L9TMfkDuW2ZotBAnP3zzXqxxa1NKeQ3pdsqdP8JUhr8zrBmJmwkv54JibdJPcVWQFHhJhwLm8hiLB3eMi",
  "key29": "5KmEQmhfeHYxy1CukN3qdNGNYftAgpwEKBSpfpM4XbuQujS19dUPRxDHC7h98JTAhyTjy6v17Fp42JR7fyRqpLP7",
  "key30": "3FPzredivRAtu5m2bevBU5updQwMBftYLTEqo53ms95PQtbrq6jG68GaZV1DrxTExkCtTMtALD2dJ1uvLZGKLd7U",
  "key31": "5GmJviW36N6j39Fjgca6TwcRBSScs2MgvXnRmYX79UEcCQsVWBQYzmcA8CGWkhxisypsTBLFaXhZZm2Q74E1wMiV",
  "key32": "3FHRv8EUi23RB6wWh4iCrb7UCboXEa6NdNTdyaBXz4VBqHt5kEY2DExWsEJH5PamYJSnJyqNJnYnvfygEz8rpZUV",
  "key33": "Ed1Ea4f6pvH2pABMJ5NyjZ2LRWr1bmPbwTEvmvc7W8vxeTi54WGrfi6JQYTMNDmkR9JHByA4qppfQkZPwjsrG4f",
  "key34": "5wgZZQVjXwnECKad9pttFgRJKPLSPqjwbZriarjx9dkHh1GGU5z7RoyweyJ1jzo6bAT8AL4xyAm2cz3CDhp1U9xb",
  "key35": "219AWXtyE3GSJStKG1YnFbDuxYXapMjBMP2iF1XXboZKDgxspoBDGao9Xv9rf4uRpD6E9TY9gsyGpGn63TkjbHuV",
  "key36": "GgSEXkG4V2xmvE9srxqC3mzBgTte42mREDX181pjXcgssT38gE3w8aKg3NwaMYDJLyEom2gqDaxSTGWh6gJypMd",
  "key37": "3tfrxEqwuSBsmmiu4oxY8uVyj6ddxtR66w7chWD4VALKWhmiRYNuCKkf3gD538cMUnaZ7rhdeeNAedAu8UBUt2vh",
  "key38": "5LpJbboUnX7rEjqe23EneLfno7noAjjZ4tjJijHbDzvhuuuJUzCxLdJwdZsupvKneL6k6iAGgWPW3YthegNcv656",
  "key39": "2wTr9pJ82cTrpsQT6w5rdM3wejp7VpspGNHCgEDqbUeGF97fW4SyzXwPXwzoCtX1tRp2RF2a69vindpEB1BngVDM",
  "key40": "3EgLxDM4okJS1Wc1nLxQnZEoHk4qD6q3ryrezTVzp4K9NYutUHrC37bxWsPMqCd6DiEASJ7kyxKq43zDYK3AZETP",
  "key41": "5GDmVKpASPB6eA1SAJBj4X5JYEa22HkRocEmUV4LxnP2S46nNPN1xrHAqEUkscuvVQJ7fMng2T6RnL7VH9vyk1JK",
  "key42": "4HZa985iJSRk4cGnfEP1gY4JwgXSPCyQKzrFn3AepvmDC2DavmomJfphbo4pKB8Sf3p4i3s6SXd6KuUk9v4iJT7m",
  "key43": "4arHhyWhJaUCuvXj5c6nvaUYjCCwwBhxBTqWsshHR3eEY8zoRgSqSZkAvCLdZT5WDj28DQxpZCHwxsWgQEHxhMqs",
  "key44": "RgoXrrDGgRPPjnXhqu5RzAx6HjRohDBACu1ZaCJWBLWMrTCxM8ho4RzhnkCF7S3vPGbuNaXFAs64YWjeMrcT4xY",
  "key45": "5NoG2KSuSLBCqsgkm8d5TZ1ZqUUJ9hzAtrAciQUXr56Ft7bdVJEMvbTq2e9kqh5GKmRubktKNgZqNut675UWfHuZ",
  "key46": "474NtHFR74tYB72XraJUVSfHuhZWEdWR72Hn4pi64DFRPbNt5nrank36Do5p67bwc5ZGrSD1mbsupdAGt3Mkf6a"
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
