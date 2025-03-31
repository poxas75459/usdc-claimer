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
    "4up5wx44CBXbEmSxVcRYDPCHcAnr9E4cbbwSNqNZZrFpKWgjW6UUJ945BKPVEGMwK6Rz6hwHw2dfKJHyzfqstqVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YERVAB5ZqeVvNYvAo3cWafWSPYRFHcpGkBPbuRPNT3z7SZchz9ZvoVBYZLBVeqFaToLjW5TDhmnYjHNDuGybcXf",
  "key1": "5VLZYVZfE6ChGaxERUXe5MEztSxQLgScXe34WFkJioNRq82x856vkewRNXKTDJTc18t7UBFNwFeb7XhuQo3dEs5w",
  "key2": "33y4qwJo6zv5PpK3gFJfnPwLpzukoRizaRXBE6btMEi647AdNRgiKiNAq5sxZJxpCkBESYgXJPPumgrXvW1R4dkM",
  "key3": "2iqzs8SdVzczzuJcDYMuGmoztPo9CrkC6bWN9b8SaJRYupmEVhcXS4qdaiE3CQrUX7HwcwT9943v3YEhw31xvXKb",
  "key4": "LET8GeiGbi6JwrZpjD3XSknkvRPM89of3gSNMPhzqNtb2XaaXqSKuHskfS6qHHSM5HWMce6CHW1hALA75y3Wvz7",
  "key5": "5xAWaEvbn12dnhuEna6jhfqML1fRtJJfbDMgAEU9vACvg6eqnD1Zr8kufBZEBdoxefV1w5XTXR84WUjgHeeurcVv",
  "key6": "5BbXm9YJzAstjdgqVjjFAGW6as9o3ybjM2Qdjxp524tFrbLn7kJkuHGQbq4PNsXsJkrGUBjL4WM8fnt5tCy2LR2y",
  "key7": "j2a6PkqzsXKLNqKLDfiwKBDraUP1EgCybcYXwQEZGZMecWVapCGhFajHysQhewJTVyJiDSsTBJ5zLi9UvftT1pE",
  "key8": "U8e7GR4bTAHVw6ahvFsTQYysqDornfBK3wahJfnRv4ckdhL1NujvpSUXrqoFtkzpYMYhme37Wp4puGY9ZWBm5iG",
  "key9": "3b2Hz4e1FeheHtGwhyaVwPdExyKDSZqah4HNUmSKttfxMkSKbxFBhioPWknU2NryiKTjivjTrp48eMWsaJdw5Jb9",
  "key10": "4LcQtQe23CQcnzENczTUB9NSBtLNTQkYnWm3zFFVXvW19z5MjNt3Uv4YFMVHjbBJwTCFey9fUcJKCb8jbqfPkukB",
  "key11": "2i41qqo5ub6M6zMCbniSmL92uaNor3xQcHQCdmv8ZjV24NkwXRXMw6GkqpGXjiGWpPRn1aqJuveMVZ8tDv34biFR",
  "key12": "4qMcHNSejotdqqrKX1tCSEKLqwsoVVztvgKvY9DUhBM4Swd1steGWwnoGwNdwHXNuEoyYYvV3xndxvB4yt3EQWEw",
  "key13": "4cysLcZmCHqXg6XweH5BqBAKiDFirXRK8tXatk6gX8eMEMQKAH1vPfxqNaKBdrWHHNm1dk5DryGbEfKNozmNSLUp",
  "key14": "zZLrd9QiZocR3Czp8WK3FEx99jS5xxfHcf8joNwJQhSjeurA4PAWFmizesGLq6Vq9AHeWnwPVjWH2zvnmEMmi3h",
  "key15": "4au97Y5RGjfh1Sb5HpgCVM5nEHqu2t8NNTVvQtFUEbcKQzuyscJfyCDxaUHFvaFpLUDjAufM3zmc4Dzor9smdj4S",
  "key16": "9QzMcxGdTmF7NGdSDSn71iaHNWmYjmVgK1RrG1Kh5UNHruJaRLmwkJhtDvjnyFm95zmRAjR2gP5kMwZRszfkTN1",
  "key17": "Kabqjpc2kYuXY4aX1ekN3sC6GERo9GFaKyyXakqdReTHMdq4PwJXAnU2nm9zYAcjp2EwW4ELZ3t3Y8SUzDNeRL8",
  "key18": "5CpoZmUY2v2DBD6BEqzqViqgoYTz8qeYLPPUZfYX9jqrXJxqNNgZzqAgEUSuPJT883qYNKcesw77YG1TnEJvMDmq",
  "key19": "3bJNSVGtpbWwFuvNXkvHrtr6CjZZH5LchMmFhSbczufMvPx4ndfqeZBpZZASMcYyfN76mJW9hSQ6Rf4cpnXDGHQb",
  "key20": "FSSM7RsniZqcwAVmeMwp7RHFGe5YEgHCSFyWf2o84NbAMcnoY6Y5848auHHiSKuHCZirWaBVDQPnjE5CoL5mMAs",
  "key21": "4XajPXzs91T54jFYosAiqzKZxSwesHFWQzk8DWWi2GPT2QQxPrQRpe7t8EJSnemXNMUJSkVYQbwCRbzcUyZbe1sa",
  "key22": "327NqKD7zxqYSVY7b1xTp6vBdoELKKcm9ALqi7qZmUAHzTyNmNK5wjVb35U1BmD4LJ8ejZfBhNUfpJuFfFoPDbs5",
  "key23": "q65LLAsjDDtKBatjTVgN9Z5CbwPZZTTw8dtFS6n1LGh2KYhNZoEpbozuy5mRiZLj4EKhPqRVXYD1tyCL6mv9uPG",
  "key24": "5PgJgicjtrwMseFyLuX2uCQFhVVkWaxeZAC2XHM2EqxLPDdRKJGGAMHSMSVhxj9F5AWz4EU1uvpKPt7aXxL3pa7w",
  "key25": "4eUBeAHhnTEbtxbQcumP74WakD3KzmsU4ozs5RpnC9eq2cWpXU8eUbdibM7rC8RPZwj2dP3VV3MjivjDQ5CBrDd6",
  "key26": "4xowmTTi9rKn51YTyEgcLoiJrsZUCfq1gD21gAX92gusTeGpQG9LimVyQbR7qB3TFuRRs4TxxJpa8q2nQ1Kk222e",
  "key27": "5vJubrrGi2wSXd59tSUC9hsiAZ2ncFBLMddKqcaxuFpXVGXB63U2hDoV5rqNufGqWQ8TTgqjo4aCAJHi2sWATnwL",
  "key28": "2C2BWAen5T8m5w3F9DVWPuKsdHydKu9a4gwkXQ2As9ENzMqeT9MzrhxffwursPHfGbnwstczbwKzBGhvGBZi3mee",
  "key29": "2LzfXGY57RD8JxJdiqSiVLspxzadbhpd9eiZWe8A7QHTJ83mDyp6A7ctns4Ux8BsDyJoDiKw1WaqkZS5RJQJu3Qe",
  "key30": "4hxSqbJc9ft5DfvJVBaXdB9fmRu5ePERNvpYgJsHTEZg362MRFHyfTS8sLru1WtL9HQspiAEx6QYS7nhtaLmorJu",
  "key31": "WyE85oH7J2pfHh713VvBynmroDD5UsPRGK82REwViDoL97w5EmyUWVEkUKZGokqTBfP3Ppoq8TsHpgK2noKkuFa",
  "key32": "2Ntbnt1UeAKZpQQT1uVFRKcaNn6aNp7Eedx7aAGSfx7srqXnWBu4SSJYnW22xg83APQyEc9zdP1m7oXqahesC3nm",
  "key33": "2gtjNFDR9AnvVZm5nk4zHZG6EvkSvPuybnb5eBD5gofsErXBHFKKuxTFhPeX1e9GrqHYksChacVLPoFz8pfrRF2B",
  "key34": "4yjfK9HUz6yXZSszfYADgCv3vkDWfYT7kqhA7xWVWxxiCjz1yWW6sHgHSJDPNrfPaM14QqUvj4NSXzkqnXgWrr6K",
  "key35": "4drHXk7tT91EmdF7ZgMijJHvEZswm73FV3VwvvK5MtDhpQFYTMRfsC2HXH4j5y3RHiMLF5eHwmb2WedHaUdVLdwi",
  "key36": "4jW2SNPzb9jLj7uw16A9poPctbuL2PbRM2dUNA45Rj6dyPck3Ad1853kJvWoiPjusb34GqWEsEwEfWkfQvFWnw3w",
  "key37": "2oaumQRWecL7shxf36C9RvDDRPFSk32qtj6VCCpgfs2vvBKz2CrWnso6RQUrY8CfagqPsXfmBWJDF9zKJooqp5Li"
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
