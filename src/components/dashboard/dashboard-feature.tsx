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
    "3rv2yM3pCCPuyA5hyzGxDMR8PRp4Jimopu4rifWW4Krxq5dHWuLWDrXAsKQA8iLsTdPLHVphPYDaRzCakQJAEF2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JzrKV4fVnTWeMEpXQqv3ku8i9FYScuHxfHh6EL3JJeGRzAPVYoi1WBzNFj7FXaRGmstS6TKPZMY3wgt7n2nGZn",
  "key1": "5bwfvhieDAoUFthVmvNZCDM5xasKQeiBN4qTceNTe79sgAq9gP8xnNBAtzuJcej56SZoehHMJAy71oJckXdhxQKm",
  "key2": "DFtebvLnWyywUhofZkHQc5EobSEfbej3CMHRoqKcKeJScZLC6e6MbawBRWt6tKoxmR1sASQeNz8XsgYvBtQ8aX4",
  "key3": "5xavJrcjpFuvWdV45zwS7W9NQxCVhH6o4uM2JE9NG83mhaPJJDpnAdCk2tQcGk1Pwu1q2ebMwJUf7cBKtdVkhqpv",
  "key4": "53w3YxQqakKm8fDNm69B4CJCYMXWuQp3wMyAFrnSfrNFcMcNMASecSBVmovMwNTqwEdNs1cVbgryzY2Usdz7TVCD",
  "key5": "4naKkk6wcMTKyJGW6AX6gCvjz2GLGDVrEh7ffR681wZeAHoWg3U5oRNUJkxghyRb33kBxavDkrPjpk2BBv1nS3xE",
  "key6": "ZRcpKsaiDkgMcpWBJfi4chCL7JVg9WuA2asWGNY9ufXKGfjaRYRqkCD58nVoSvMuQfdyB4UDBPoB3xd5bQixhpS",
  "key7": "5xRKvyatce2b4KutpjZGUDQv4UhrVBGTpT3tmKi4RkuVXuf2jFuaym4TD57CaTxj3yB1bsGxvFKN4ta7vYvPhfeE",
  "key8": "3iinTobFoBXTsxgtY7Achc3XGRmkk1CpZHQJzZu5p6NK8Vit4wm9Yqnm6svbFg2gy6WSsrLUTSijtABCfn1soGut",
  "key9": "9eD2bontdXV1TAWDJwxwEwxTxLRRHL3tjsY5D7nSWHLQVVLqxJ63qk9e5QpKK3TCtoLZj8p8xGLvMQo3VYtBdvt",
  "key10": "4igkT6Yb8J3AGrTULQgvcyk7oeP3RAr8cLUqqnm5okt2yeqRo1kZKpjhCQvg79bz2WoM3sTm836HzVaMoGpTtKnS",
  "key11": "2725dKjqw7mtda9kvmU7SZc2fUtuHiQ94EFo4FRNxduvyhWqZUipNcV7Fvz4xxVMzumLtwsAo86MnyqEPTUpkMKL",
  "key12": "5tKAJfPmuAidSBxWbCbMRbopDKNRvPm74D5o6Uz59r7DvSpRdde9USfKjhgLP1eZptBXQnYdWugajQ7zzzFjF64P",
  "key13": "3c6dbeC7FJ7jqW2WACXDJCbg6kDPo6vNKrKSnQF55DLfMzTdWnSMsN8UH14NGc7cimVs5paqLbdmqPzgKJgFqS1o",
  "key14": "39juZoZDvdE7mhznj62EDumJKALMwyMP1ZPKeMh5PHPmX7o1vHn7cMcnF7XA5yMD5nBCYBXpAAYv9LUevG3Hc2hF",
  "key15": "2Pe2frPhsAt1f3GVx6L9HJj8KqpFNTSvKQEVpasMfzFhjKzf7hZ6y1iWaDMkip19B8dUNKH3faD81fm3or1VR2Ms",
  "key16": "hUEH6BN5qBioRY15GPwKRbMRaZezDDmWyjmkUxYgWm5bWCpevrKtcn6EziBs6boSqA35fJSBBwe771oXVmkwNhM",
  "key17": "3fPRx3gaZH6DrPX2taFKvEPPdt9Wk8qWRFNZ1ePwpjDwHyhVQdgJegFHZcNReoeVqRQfykpZFLiVsg47QReokm4K",
  "key18": "3CkbmgFsCZ7Cs9GP6g73TSKWixb8nvpmMQoPz4toE89FtWUymvYjdW3Bv718Bou32UJxkgJm7nE3ThaP7vDvh35X",
  "key19": "TLfBDH5kzqZ9abRojktx82HkXCgfSFTVi3gMz16qVZLTWL4snfv6v49XGfNFeXWKWQs5tRuZTS7vkFLSLZYrB7W",
  "key20": "3r9nQJ2yBt6455564rAGrQGW4puFXW1BuaMDg4wPfG8LpWTrN22dpSZXPuXwzZ5aEzVFQQL9mLacZmZHBYoGihmy",
  "key21": "4azyBPq8mzSMniWBzh38D1wJocCUC6SnQX5Qs77i5XLipgg96aA3N9CL4CJ8HMbCqqNQ6nvaY44ATVynvTSWfayA",
  "key22": "3D4L9uLq7CPDsdfmqiQjHBCtjSNLiQ1hbJ2axWvCbQbTTbkV5mtRjJfpMKK3mC79Cz57k5Zc1gpQfCtkDMMFnzVF",
  "key23": "2M3Fsu1kKQWciA8nPg4HdRMmHyXCRoytEMqX7Hjg1YFagcC2icqZwf4BXNZonhGEHDAjeBtceqtnjsEm6jtnn3KL",
  "key24": "4c4sZJpuETWWT6Q3s2FH6488F7ZjNjKPqWYhY4xSiRfjXvZdL41y6uRrb9mALCVBeMqEMr6Qt6TCLPJaQ78atmVr",
  "key25": "4RfpcFeJCQtFnfLtqZ6nu63WNtqH4HiRSbvUtKd8jeHNTmTGrsus3jFbZWBSvdnr6XRAwC3FXXZjEaRbJz9JMUfC",
  "key26": "3shdbKtP9n1y7BPXA9RwPMWEngtvyqd3zRP7YH7fd34VhZFB8V3rgKMx5PWcSn4CLVv67oaX3bftxKi4vegoq359",
  "key27": "2L8Vy7fAyi1R34q3Kop1LMjfFuXXM66h7LcjHZ2GBreWp8aMh83KJs1KXYL9ompmkGw7JHgpppBMSpwBsMWSF8r8",
  "key28": "282kMPGjxNR2Qsz5srMSeKCYETWzi8djdmzwegJ4iPexMPkwSrvLawfdgu31gw59PD7UKogBbxkzMtt7AF1o7rsQ",
  "key29": "2D7EaRkEoxkp92CpRP36XAmwQbJc94CgRv6D6jzDnRtPzDZ1XdxyZAxni5MZ7hKAkV4RuGPsP4LTZ8HomVoYZHMT",
  "key30": "5bR6g8X1Gj5dRj2jESnRa3zAbu2QmkmkmpzRLWm14GiocKKP2yEAg8WpGou49zthb3JXCqudSgKci8bRGg29VWMT",
  "key31": "iNcYZRYu4NGevpcjkFnvN56Zi3xXZjsJQG8sNg9R58yuc4A9iEAbUY6PgNz7ZEfKmKKKnaQuvK9sRbwW5ryn5N5",
  "key32": "4hZQ3FTu8XBKxLgnmKBVsf4apFhT8G2qfrQF2MjaD59v8Tu7Ks9Xgvruf6pien8zihLwNFummEubEGCjVXbLVSpi",
  "key33": "4se6JYhMH4jdftpvFsD4fuTVb66vUd85krwcCbEFLHGVy7SYRqU4tXkXxgDb9acPz3s2iosNcwVwK6U2A7eWshFS",
  "key34": "3Keofg6nTyQA1WsHUX4VtnNWc6ZjSjjTT5KRgSMwesW2C1S4ZsPtMapsSh57MaFpCxgToU4e2NDpiP5S7CarNw9D",
  "key35": "DB2VvoFcYxzqVbNTR91AFVh5DkicZzVzkxLT8nT7TWRUNYkrkFp4REePCuyPrfbCmwKSfDJ8uqsr9tgeMkHY59u",
  "key36": "2ZgRvo3i8kGMGQa8w5BdMZnvXHhnALgkFRNZx5T1AsjoP8Xfei1wHESuVrC8MtfMikz1RAZARHdBJenn3LrX4GXU",
  "key37": "5V9P6vsyeEj8hHnGgSuHtJUhs7XrgzuNh4SrpRed6wSnLwCbgJ4X4uDZKsHfie3xs7AyDDcjDAUjuzQCJkkEeVgY",
  "key38": "2xcJpf4GGo8AC1RVXeH7sqrwvHPF4QeQXyPMyLVxynSDaJaqCJNyJ7hRvM7sRBZxf24mHbBY7jRpDkHXyJTRFSKp",
  "key39": "3f248r51sDcK8gzUoDoRt5icjzLCyHW3N2bNuzu1xBPNFaiiFqGuJ4oUn9cuBtxiE4cT5vdokZXoiB2jd91wD9Vf",
  "key40": "4w1eWpnHNiemMyfcPf9pCyTZ1JCt5wmx4CPGNHV6SkanFaowcoDq9puJjFZhChvFoES2bQgrPxWYFj5XSjrjMYo6",
  "key41": "3LupEM4JENqhFmn9L6qY1kaKpsfjybs3QK6xdVQxxBZ33ZGCgX1fkkjGQZfbYDceXJ5ZGLLfpSCck29iXZuETuUn",
  "key42": "hZYeMtq1M5vAUAVEKFyKY7Z8DXWgSt2srw5r6QbH2NT899HysQmCiDuG9CqToCCmFat3cXkqWLeB3a1LVzHvjqz",
  "key43": "5AhSpnSvxh3gYYZMDXoSTe67WdJosnaEcuh4Ksnii7fB875ieU7kVtxgAJbtkBgdujYaBLEdT5bf8m4XFp44i3cP",
  "key44": "49deXLszScA3ng7H9au1DgQVPnWSdWpsbt2xBJMcj3rh1yn4sAbrzSz7S8UkBKuMoKXetJ784TzvifenYekAdmMc",
  "key45": "5B7yhpWJsLn2MHgRMn9YjdEW4oySb9KMVH1qpsvq6Qt9ER3SzFtkviUTTBq2u6mKMQqeW9T1Vnihs1b6JjiC3o3R",
  "key46": "2Y9kvtvKufQqHmrCt2UPeD3MbrmXDnVcAY4sBPeKY4KnamhnCnKJjAdrzLjfbaRZPgzZbp5JXeXKhdMzhrwGQHXJ",
  "key47": "cuBSdaGGNErKXxCo1fyZTrmmR1VmvEroGACQTCBefvYKnRvWtuEJVg84FbPbeJVBJWzzGEUkB6buEDeTWK2NcXe"
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
