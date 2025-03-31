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
    "4jjx12asTGbuiNukv5uCp68SKxbVyzFCZQAxsJAjZtDYM6Qd9MG2EXsLVi4VYPQC7Enw2Jntt93UTzkkpJzqnBST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVcv89FDddb5G9YpznjFo8u6uALuf4jxu8LT1EKReYFQ67QSPMt8NBd374n8zkc3u5t8p5o24GCFCCED9JaYzb8",
  "key1": "4ZypSDXgVytVWCE2WCiAFt6Ezf1tVepPvTjZBoLTafJbKc9ZrxFJHLfGZoWSeqqGSziUGVm4uU6k2X23fNXL46Xz",
  "key2": "4Ee2Vekby7hK71EqoRUQevmiPFZ45yLRs3DJzNSdfZ6QjZyM3TVb7Pzbn8Ui7teiZ6yEpFQCFKHp8nUtURe1qbfE",
  "key3": "2CXKKhqgTfryKBdQV1R4n92HCcknnfWmEkCwp9sJB2GAJCaUTTK6kQKtFAq899DkGTeAzcWtQbrDsnzQAgQwqem",
  "key4": "2T1o6Rknt8AFvRoeohtfTcZ8xzYQDaAVX3uwSrEfMfS7BgfQomhRANGL5QcJa62ToyRNnd6wKUWFzH4yjDZ5nrfF",
  "key5": "4dndSqWgz2QbGKqWZxK7ekiF3YbspRGDHAcn1P2hXjZM1enBA8WQfATt7jRBbHNBaNFVyhJCjqp1MotuBWPRuDQt",
  "key6": "3pd7qNzk7rA8c9co4obQzuV2fVopQzXEC6cLHvLXMSJWJ22eMpxfMfWvt2kEGruaR5XMu5dtYutCwLjB1m4C7wfU",
  "key7": "3WX8wb3hXRCaYBydXYQwo2ipGA1DrHdriHBLQkVkqCHeHw1zLWZ2AdiiQwBqMh8jQuBfEs3uVyxryL7bEJmKSp1G",
  "key8": "2m8KYWbRCJ6F2gDqPb7JHWzhjXu9mYy47ZMpGjAqXuWjjhJv9hRCXpmwL5ki4KYuWPHDPmYDqjGoVUnQf3RAywiU",
  "key9": "3QVqpy4rmJyKf9xXqybJnDfUqvbt2Qynavj4n6twqSXfDRqHjwcqnP6XHiu47fdPvdBeQWyJ94TpHoxAUr5STyPN",
  "key10": "25HZm5hBsRgVJKSJ72sbN67rjxEUTQv8T4PQ6V7mUn9w2ndAikhBqLUDCetkHKKt3mZko4wDBZL3ZY3MJ8ftuDZQ",
  "key11": "4G6AmpgykhEx34boPFz4b8DoGgajTB8giEPVeDAkG5VDvmVdsEm9TTzqf69K4qcnGUYtMxw97E8FQVrFFtUgQ5Cv",
  "key12": "62MSdWPvotKog7SrNThLJnE8HgsWymKCMKpTWwCjaFTTM1ux7ceSmvxYsqh1cfEx9YD3zUCsYf3UGJtSi6gLcaH9",
  "key13": "2UurAyLX8PNBqMPhECz6JKunHBMjUVCbyAxHSFzR2u6EAw3GHyAjNWQMxyKzXFJ9BNz1ysMuFivSGcD8kg7AFWvf",
  "key14": "4gzGxEqZE8ozNgNMsT2YDniJACWX9Qg2GXHVLNi4hwBUmHEAiRb477F1Rv46ZihpQ4Bzio9bHtCv8vmSx9qFxytv",
  "key15": "4ZoanGcUQQFFLmAL7LNcgtAfSFmnj4DaJ7S1r9ZT6k9frAXx1GF9TMYEV9ex1ox7JNWcsDg6wjJ3hf6FZrSGh7h5",
  "key16": "5n4jtTdtK7vY2an8JSyhqRZriHPEPV13a3f2Gss1J9RvVPKjduRoxaZvWQu6FHaRw5ygR8s57xoKQaUKaKWSNaJS",
  "key17": "4YuMSNomZP4EnboBB735Y7LVqT8hSpG6PEn9ufbxHqHjDnJWNsc1D8Z7VWZCub3tE9NmcpUQrHb3NhAwBdfVmjcN",
  "key18": "4b8tyrWRSo5NqHqy6ujCD9SCkiSnBVwJJjmjMLmdHwzzZJsE4BYeyB2BsVLZT8Mab1ZaNpzVdn5oePZ7XAJaudtQ",
  "key19": "5amXBtRhPQwhh8BPfsb6Cjn9ns2CCviMVJEQBsHXCe7HPUBaknfPQ74qFmVZ1JrYGjfJubhUprXTtfsF1CpahyzW",
  "key20": "3b4SqAyAE5emKecEypVqh7XTuQTM8qm9wCBawyY8dvPw4ZtPCtaGBvLyKKq3dTKwvzSWX4tWLavnKNurHmqRzwmZ",
  "key21": "5rxBoKHPc4wbKoQEyySmee84adT9dgBcJw1mCC6afdjk7rmWKvmqgewwjAAZm44XmwsKxgMCUq8tpGnExeMqnuQG",
  "key22": "3JdMvBQmCKG3Gt1xg2MshzbTqcast3hfBk3GCqWk97Zs5un5NziciaXyYaQBTpZnSZwK4yoP3whPCB5G55XmyGXS",
  "key23": "2rdeKR9WhTWiUw34VGa7pxoyaKvENn8r5JuHfLa5vfa4irqgKqsZMWC4sbbijKwPvX3bZmbwTUZM5XfuVnsHcemQ",
  "key24": "4naG738EetaginmtYbbUcxvSVnn8AtyXab36FEKaodPMDroNymZ5eG4QzBCnsJCxzWGf5dWUyZJGixS9EBW19fqu",
  "key25": "q1XBZP8utPTnqdKT88EHw3NFMLY8qTngEqHda9ntzTA3UomLZUnW6ZoqWXDVorGbujfDge7nLoSEKM29MD3uqDe",
  "key26": "4tJcjhFR4uDSrmNjKvfexVcLZyu5wEqot6KeJ8jN785eS84Qg6izraaGBjd5vvA4RSWeRpSQqi8qmrTvowoYcnwD",
  "key27": "TaDAG2LUFjuAp8wS5XXYDG53nAvLgahHoFwmQLyL5zRpLpFyBerUFsP3pkZu5fHuwexvygg1VBsFaPEqw3bzJfE",
  "key28": "4PqgM8fWaTVn9Bc7pJQXDD1ifRf3wcun3NuFFr5aWcUudGquRVXhnPf5goT7YB3BJbapaZFsShUU5SzEZMSXHnxg",
  "key29": "VpRg9Q46gtGrw4c55rzjhY9xoRzAJjxMUCKjuqyjJgu8n3UGLHeEj8G6DjDMryCKGDz9ZZRcSEv2x683Up752tu",
  "key30": "4DR4mch5L2BtCNL61LWE7gAWjC1oDdHYJ9fWkCqQ2RdGt4bES4HR8qvtf2xqTGwyiqmEusEXixiEBVa2m9u65eAr",
  "key31": "4AeGJmaxbmyMAGWUEPb41kerAeuxAEp6weLQg4RCqsunPJb47BcRT5ZkaXda1MESLdueP5paoHG3fuGaTMbpom4R",
  "key32": "26mgTJvQbyoNNQ1S9teMCVv3tHCr3G1XZ9qb1pde7tMUw11gecpcHQEJxxNzmpH6e2WxJuyBoEJFXJopBoQQWJXh",
  "key33": "4QtSfR1LqmFaB4Pe3DpDmLLqa34emgzoQdjjs9dFuz7SZiUQq5tKjKJSnSHwMBABWzz2r9B99AzbeMhUDj35NocW",
  "key34": "3wGgcdifacm1gYrYxTJAeXKTxSoP4FDDqMSzx1swTBRLcMUyW95LKQn4qK27e4XqGkL43UMUP3Jbkb75htq1qydR",
  "key35": "3jNXv5eEedNuBR9phxZjQXmFpvn3PL94rT2v5CvjeyeUKy8eWdF7reePwZfe5j9qJBbxLCMpS2NLxWqvXkXbTZBz",
  "key36": "2PRNx3KnkBjiWH3qgbW98oLpJNdumK8NxHDFyKCpPMCi5BigKQ9G6VK4yWYcmGUgNKFsWsH6cRMai5BJ6nuAoMoq",
  "key37": "hWZDHPCVUutCPaaKQEKDgDPQrMATD8NJJRP82didokxRZABGRjtT4Aoj8gQdH8XBYhEgD7mQUdJzZjXh21VhVo3",
  "key38": "5HkqPrKxNhQtVXdCqonRF6RjwBBqEkm5mMKeB4XCVzixoeu7jcuyGmpchJ1K4renHEeNTp8ZmQGSdYNvmALWb3t6",
  "key39": "4FssJPgDsDEtWWS6refbcMikTKFWboxFuwnd8uS7hSgUuNUohnYHsKzGRD1MEXKCmfZRJHUMdWaNdh4dDkVseyYM",
  "key40": "5596kzRC676KbUk6Egex7zKJrHGD27D5CGV85gG5XZzdKEigDY9HJsTWiyMw4wsER7tZLKe1ZHSfiiNNKPsPLhZH",
  "key41": "2sp5z5SAM4LA4aoqB8Ga2F4q8dCaWCB1KdPchBWFbdcKaVxvgmv7XPMDWaCJKpsiV4MVn58dgDu38vzjQ3MYLGFw",
  "key42": "5b2WNcx5G6K8WvGT5k9EZwPWKy9PSVFqYTJ5eRqpELVvtAKfanbj9DD47Anrw33xx4Z4Zx83EcvzvDLPCyHj1ABW",
  "key43": "2iJMFzL3udjSPwJVryjHWcvUeMhKKmdTpKbRu5vBJSn5NuDKNNLBddGdWsk5dQPr5GQ2Hbz9rgDaGUuDuUv5Lszp",
  "key44": "XfTbzSh2Rzk9yhjfMJyaRsbHKCAbeTtPiNs3FmdB7ufxukDGLdCo6AMMAc3XBFJTzqb56n7x5YczcWbfFuJ3J8k",
  "key45": "2oLHPkxohKS3n7R1xKh3PStN5HKMewidsWqvx9Wu1LG5Dnkr2Rjq4jfmkFyFcSAtfbCkZV2e4zcyNiAN1og7HLx",
  "key46": "2vuqYUWnoeSiAnawdNViWvj55GziqqzZMaZc62pKNp2JHKWHgHKZJrQQtgeGdVU8HVWTWCejxhknweZa3pKJn4zc",
  "key47": "3QTLjQvC4ymqpAcY1HTLYparw4hbceR6R3qT5RxiwCW2NuVkXc3ryaLm5cjfJLFu6o3syTtmonJ7DFHteRTyfMPu"
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
