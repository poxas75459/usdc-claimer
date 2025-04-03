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
    "5KHeQMjqoJeaJkNwD9wUNRnUPzgytfswAom3L8yQ3EPM9U2FvXvJ5PQygLxP1g3EoqZowHr5zypn3ECcjFoQbExT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249DpZMLD5q71JuQM826voLt5WZ41yCMQ6Pd2jJ5mmFEcN19R4UC2CQpGbS8HxxwMu5AuRmtdmiUR1bbjGFAwism",
  "key1": "4uLe2gVMKsHDYmg7anYEPzH2cARokq2obEvwdaJ558RMZW3frV2p98u6zetfDsyvdfVbfwELZeFaBabPuVYpmFqL",
  "key2": "4u6hFC3xAeX2EqVEi1WVLnG7ZtV7eJ6arsDd7o3q5wt98efc4KVpAwqWf9fTBuHGEjkzcw4EnGmrmFTgFyMN976h",
  "key3": "4NfFTtq74VT3DgriPgDzT9pZpS3tgowaBs1eBdchnNSDY1pKGpoatp9qJu6TCGBvo1pP7nzk5S94kXhFboEw3c2",
  "key4": "2LhJcqRy1LjVDTRvEHLNZVKc74xhH3Rte4UY92f92fN94CbCfRzf4f29SMJeDD2ftR3wPWSeD9Cre514WQgaytge",
  "key5": "332u7um6AUPKEzcXBMWfDUT7MQkWFozwnGxreJgs8ecLvNaXh7NMFKRnp62t2yj5hH1ku4CNfz2LRp8Qcj7ZdkwH",
  "key6": "wfqohUJ1cNmM1e2MZPqZ6rryZytkA6H3vndg68GQwQXxanNZ9ac4dEZpZ2ftxgHSESK57AA8mkUGojjDcronf46",
  "key7": "3EgXdh8YRDX42t7nH5p9AmP5bCRW9wkKWgdeVNCadPeP9JC9U5sgMjPwGjdT1DcshhVid8AdMoUPZe8TXQEemhqx",
  "key8": "4iEV6QxM6G1zkjoAAE2Fs4QxvtSTDkwKuE77DqoHh7HnP3fQs3pnz8DfK7JT6hqnXKRCPRqEiaFpT1brt7VtuRmb",
  "key9": "48T7yZekgy8gcMPTM6KEJvZaTSBfpQZERJoE47uRrErtFs4aWjykQTXAFHfRUMH6ZNnEwiVJbLWWQxdZRPAaWFLg",
  "key10": "5PshhyNNfBBtyofRyzWymMiHHQawWgrkommxS5ko3JjVmYMVyZUMDf1PiDtar4tm1Gh217rVzgzybv2vAakNVwVz",
  "key11": "3mPvPxF735eUU5wwVXStuPacbsaNjPLu1GHA632vXdEhzbB6y5UjeXbAy6Xj1wc41kFGV9EGg6m4iSVzBJUyDrkE",
  "key12": "3SQA9Ctwo4tu6FYNQPia1Q64oGNmx137nCXf11MUU8RYBxmmfsyRGyKjCScpuWd6JXQYrvCog7fU7DbukcPeaJGP",
  "key13": "Dg6Veyx3WN5dXBwiWu4p9UfAiKvH1GpQDs6LWCr13Jyu2HCLZhEy5wf7J4u8LTgEwCg4YDCn8WLcvXd28i2iGxe",
  "key14": "5cACRetG8sYw918HfyL5XSKdpWnvgzp4jifPjsAQkrzcXzetrzG3T6k3z7AF1tB28sGp7bjf4tGnrVJZmcqanS71",
  "key15": "35jWat9rrTVf2r7WFBxoGvMcCE1Xw8LRxgGBradb46mfXewqv7TJW2ssbfaef1XrSoQwvjNkZE1kxnh5SUZAsKzY",
  "key16": "2FozqPFUtbfHRUoF4YAnSRtUjxVXpCx3gNyKNwmgkBtSptmaC2NgBm9Mb2QrUNrFWaukJ1bGFjPAzuCK5oBTqd6U",
  "key17": "5swdw2rdvgbHyq8VSh3KFiGCwSzg1XEqdKMaqjq2Kic98PBTtTTRkxBtkJweNa7Xreare9K14dtavttBpN2uxfXM",
  "key18": "5rt6LyjuURfneckEAbpgwPhHzNyAmWRfwfwReEJjekDKzJfPzegP3ju4Fa3iTsmDaJES66NRat7arKaSi2kkh9dv",
  "key19": "4KPhAGU3mAJqKRbGS8Fev3ejNUwCnrM22CKa1YqBRK5Jaw9ZU3reA1KtEWnZxUn8BEtcxi1gHVe5Yv5EoDofkPuy",
  "key20": "9iqZk4ezzXmTQGj4zpRSvfVnsdeNCd2Q8naQzGdDEx4ufjakgePX6FwffHntS6yjWHV59orL2aJiB1NWwKe4Yso",
  "key21": "2KXtgaqv7DkTuuQASsiKZgfBVwb782E3jAtNsQk6yxV259R8eEsyKXcjPRM4pfvVqy3onz5wnf5anj9hKRhMTipo",
  "key22": "Bd6YG1hDXymYCK7TGJe7Sae9xZYiVVNwHH9L6DWByPgGkeR36DqyatQk5CRfmdPhmL3Ym2SFXY3Vp8s37eFdPry",
  "key23": "29qNPpMtzJRKxX1eJHiJcfWvk1rYssEBCcxBkoj8QcEBtT6FCynhnTq4xyreeDvmkJk47gD3yG5NnFiWYeWPNrNY",
  "key24": "2EHpoRkrCVP12A8kBUBhuonS6vcjXb5vNzvDLYSh5ussVqQaky21riTS9j22hhEBFQJ4VVntdwbPrEBTFSM9ZdnL",
  "key25": "5FGYM2WnrsMrGLcCTnNtEDYRhPpciiykHXZxoyadLXwWrVTfzuEGoZiE6GopQoXdRzxxPMKAQxo3H3GKSiaDmhH7",
  "key26": "X69hFPhJasjAFwxNx3ySU3VFaGjx7uqSDsagjRisgss2a11iRaNCcP3JFNoJsYNhowyY55cawWZZ298cZ5fH7yV",
  "key27": "33FALawEJAykzGKo3X4pUhwBi2HmVtTeGtUWthAv1HxKb5MKjrQnLwJMUg4FRhtJXZPNYP12sa8PG8SxUmN9yKSC",
  "key28": "DRMQKdNyYWXcLHsQLkZJM8Z7Th6Ey31qrbkqHoU4tdBWrUHhWG7KpkLgKrhY6asskQzemYAiikCHigDAjZdgHXb",
  "key29": "5QptLVnYMPZ5rJxDkfXmNtRjxEvFcWuR1bzypAR9NyWpAaRcZb99PX7yVc7FBAPiswbFRs6vCknTGAvHTn5k595y",
  "key30": "2QjQuNREPA73mg6QK3vQtsoDTsPvW1gWZiepXi5g4mPedSTsyghQvsQTTihKdigRY7NXDUpkKTpyTyuWcydZeLcH",
  "key31": "23ByWSMW9bijqqm4RtHthy3aLcfjTRAWAcP1F6b5c2vuRionGu27CMZCZShibHLtMV9nHhiWS6cpvA5gbqn6F9N3",
  "key32": "2pDnE7KeQewU7wU8cSi792sz7EfxF4oZjJ4DhH3sWTifeoscy5evRea1NSzf3XdaBMJqKU1AiPSDXZbgb5Pia8Yz",
  "key33": "3toE2qMoN8QvsU6LVXYVnSKYnB6tZY4xDD6ntdS8B1JzMKUSwbLYsoKdU5DwhRg5Ucw1pP1P66whdQDH1qHTtDci",
  "key34": "BjTh5f3r2SkwRpkNGif74ntpwrgC15ubsWshopQEdkp8kNMNnGj2Gpsjtj2BfW783FD2ET6NTaAcfHp54g2pH8E",
  "key35": "5N9ZESSVm65pLqHs2pQxp8rPoBTHfb4qAjbiUErcpb2hj5ZWrkxZuHNHdYALaRDbbr1yjbhg8xXu9xKcKKRopwrB",
  "key36": "4vr2MQSRPB4Q8oyTD1mbNb4zFGiXE3bkCv21Z5hj4skQopQPsCxH275v8tQy1egXuQ36xCB3jYXDXTcEXk6zuovM",
  "key37": "JKLRBScAAUewNTg4aFc4otEeLLF1Kv2baPFfNx7LLwMoraZyBo5wBwCAaMLEDG4vakhU7b4iJacmAwAK7fky6Wd",
  "key38": "xzggzerwJ9dsQwGQyjBRVPrVLbBVhpr91Q4egFPH8aJeNyDFZTNk7CY4c9XsKta9UDgct3jX8H8qmTiUPzibB7M",
  "key39": "imK3FSv5tefFoqW2nxy2UaSRgZsidcFXU9EpNqME9NoMT8zFGn8Jyt8EVKe6XPyocGVrQ7Ek2tvrnfRkjBpE27Q"
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
