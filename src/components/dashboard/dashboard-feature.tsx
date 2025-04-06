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
    "5K67H2V7TwwDRKpfNMzpbyxWL13XzERurdX1hvymLY1u5P4C2F9QaNUXXerwZWCUVXPBBdDzTrCHkR9VpvhTSuoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQHACMxp37fYhaESLEvEGnijJD417JaQRVUbqofkFUdo8yG9Q355Rv73is8NcaaFriRbfWs2oymrhKa52evEKPY",
  "key1": "44sQjUuN86M7F9ccwfFoMC1kLAtrujgjemNMNbxcaeTwGnZFqkByYa787hWYfaG9PSVwjPsLT2jJvg3Mnkk58xSE",
  "key2": "3W9erLKxqqePHqZfhTZHvg1efMTYA5RA8FoG3sfBBTT5jRBND1HY5dpjQyK3tK5bHauEX9BKPgNA1R5D2xzf9yye",
  "key3": "2497z3oW2NiVUa9iqNkne1mh437w29J6aYPjrXjLssWSfCwfvfJ7VRV1NZad9DFiBgqSaKSUcN99LHacJJnt8eMY",
  "key4": "4aJcLoM9SLsV4uSmVKhn64u9aZkddeSyhLFHbpf6dZrAZHjgHS2hdqfTsHsnWSKe5ynTTvup4RRRkxELHod9LTkd",
  "key5": "2JHrAoo19pMYHpGiBnBBKQqzis13JTwNuMTwe3AxeZfX79Rk5JcMzSceo7MqXP5BKAGzx62SXxSAYsUx8ZTUWHpt",
  "key6": "3okMW3gjvX1SNQa8oGg8MQm2hjHAnpGmTH9yfuEo3WFKx7tuB8aVzMJQmJ4bAWBfE3tVfwYaa6FhZJqZmgcY5nqo",
  "key7": "4esFNEzVwR7FLF1KGMn4uvwNjQrxALu7dZajDMLJUS8AeWwYCR2JSDchjnhsd7D5PufpiZ6F2oSXtn5wX1exbcRh",
  "key8": "2ADV6YNgPBoqcdpYKSvtGSxXzfjX1cA4KnwN3vakBLBxuBPnVNVcuvTtqEFmkLHUuWazHdtjvjXdWRksaws82qwt",
  "key9": "55vGRWa1FR84h9s2ZBwhfhAAwmDZtqk4ozHge63inE5e8Yc5AYhTeXTUcaK4P6gNzDMsVjr1Ls97BYLmPrZteYHq",
  "key10": "4tqqW3KJCbuCGLwAsXAyZ1Skw7R6FtGB3hdBZVKnMGtjTSA7jkyYgYnQTf9BAoJUCo93k9JpTqQmaefComzrjfPn",
  "key11": "Nz37S4ds1tbNEx9gRgHXC8rEzsgRvsBias8nqVEkaVZr1ysGf8PveQAc3B43wpT7CfbLY5vMHQq49CAUfheMvx2",
  "key12": "2Qm5JrjntF6jh37LheHgcBbamJfUB3jCGJsKEN3WembpLyRYxBZ3eaBi8GWjUgALLDhTaTubuo4DxtY91QPj5QgT",
  "key13": "1YhVfey7m4KkZiXvdWv16NXa25H1jaLCjoE75yBgHWprBJdMFpn2Hekq4fvNH2WBEps6oesywz18eMBRk5SHZqE",
  "key14": "x2DFZS6KYdMDkcBW7CnPcp4pWBPW4om79SW2vTUQ6adbaNn1xkBaLYKBS8NjYEg7dmbTwybDND7DMP7AiNvqsck",
  "key15": "5GBV5kryngipLp85D2ZN2LThkFM1ma4ZH3CdArRUL9u9DfdnJm6bb4BNxna3w6u2udpWr4BN5SJRP4EaiRkzXGNc",
  "key16": "UU4yHXGkLnr4WAwbpptBhZ1JTRmxQbAtDJxkQf2k4fC4334PveWMvyrBxwvzMsoMsuzvLqAoiNvZjyaDvAxNAgr",
  "key17": "5anbo3UXQuLuPeRxga7Zwms4rbEGJkmzvWd5DHW61rFR8LoYnmGgPgyqg3VDC8LciCTqsuPB4wCj4hSBZiyYuvAs",
  "key18": "2XbxhFMSThArtDkxB8DcdWaBAuTrQVeuj4crnkHguxoBULEk42VjfZZZ2SPYWZUDnmSMTY3mMunDiraha3EUyGBT",
  "key19": "4imkWWHCsyyz7AZeKnfUu3bJTXTxHkLXQYrNMyCmBa7ge5ohyq3sa63TYfcSKuvRZED7pMXkfFqRz9EsWoocEXA5",
  "key20": "aERr8jwbGAtHhz9Btczz1SCShj2bYrsj9hwPD59XnvjE5r9hKLsjrNK1iRLcQtjQE1sWkud8GCUnMJTF4CSvx2Z",
  "key21": "5QnVozYEfotW1WvrrEcp9YfGnBZiDsdcYxyKgXH7MmNK4TQz8gTQqidSJbcw2qBuU3uhxjdrWDj7P34GtoyqcWw1",
  "key22": "DMCA3LAVguwfpXazGwDFRYw2WpmarXWAzPXuzj59dcXGKaKSCLPLbtjKnpTYYzuBdpypdpktBDE93iRmMVcQ1Gt",
  "key23": "5VcApdMvi41zF7pGAW2pSy4sLeftAQfqug9zq8waKFeFZkmU88PQfnLr9N9AtwqoZdzSNjdRATgvaY8hSpahkaBH",
  "key24": "5yZj1fUqn9dtU6o8gFEHtk5htGsHy9xyQ47ZtCdes4dKNtKwQqh9fsFJTrtNAZRUbGKMj4fiB48WF1YVb9oVrGgj",
  "key25": "24UHjLZbC9GD5KAVjswkHXEVHhcXcEWNrcqBrKnngcD6FJVjkUyA59rQUhSbEk39BrGKwGygsN7m2NpCiV2efZUi",
  "key26": "5KLEr951M2eMtgAqxdECc2JgiyDDgQ8D6NKeZ9j95mLAKsECa6LtNwgyWDkZh5YWbDJS98gLL5aokYppsgQAa2Pt",
  "key27": "26Zw25Y8VuhcrPT4h7fUXeMrHycF4a8xaRzxxmEiMCSQ8qkGJapQnskyCmWs9Tj1NpcWopQZicwgcoZpwJP9yPaJ",
  "key28": "2mCWrRtdxz9Peuq9Fyb99unkf4gft8z2srdSyG53sQJX2RnkCDFRBRgfnYnb1V1rXLWhiDRZHUtxzTNobpPpCpJf",
  "key29": "5zhbNiyDndKg6TH45AAp7yxy1qnYDbMUuPAEsaEw51XfpCHixucHCmXQipbe4aP6zoDoYjgGWnRC4Nm1chPE1Rao",
  "key30": "2APBPhox4zzmtejhDm4CCL8nngjLmknkJjzeancdGeHHEjuQYHXvbGz8rfurCoMzRwu4VhVf9zWhWpL8crCPHdWU",
  "key31": "5epc9HyfsHaUEHRWDMccvbe5wcNpwCcJrgTfnhCT6gZb9N7cBzQe8ApupaWPPnujaDxRn16Z1vzcbBmmffse4iXY",
  "key32": "5RLa3GEqJXFAmXj1TjH3MyoGh7GVGuCLx7Jc7wGAgmKvdAhdYRT5RWVK8jG2NEnJxGuNjsjJ23Mk9Em617KdvWQ9",
  "key33": "pKrbquBpJwa7zGZsL7egX3fYYNA1BPKZ8s2uswjDH7npoVdvC5TbH5H2Prd3vxDRtuAXv7Q9JXiNXWkKSanySdB",
  "key34": "2hHs7yBxbZoVNpV8XpVxERfY2RTVS2eF28oMLm6hQNWhReJRdaEhdVZrQoHnHUTZSXCDPk8pE14bbuhZUqFitA6",
  "key35": "5y5FUW86C2CdE85SdVp4facCLqYdDquP8rQbax7eiPGMqxaWHfYKKeufqAdMp7XHQPanoxgythvfAN3KijsPVYy8",
  "key36": "2iSrd89uhPtsi2Ckmzb1LZUpwjN2JZH5ZVSYFsb6F9TXmcttsnKg3cGSjsq5CJGoPNSbDsgHndpAbfsJGoC22Zrv",
  "key37": "4PQCNCDLziNpnRrvgtHmUZT8NEfHg8U4SJUCbgX4QywPtjfwWAYSbdNofPKskLq6hBnsGPH6fwSDqHLfNTqq8BYt",
  "key38": "3DifwzEUrcrPdD7DbPdRFtoGSbKKhvPrvR4LjiXCSrgcfRp28Lg3eZqjAH6pH2rD8AEZFaoTdTgME58MqP6SycGF",
  "key39": "4nzEZxMaK2iq8gakvGUZKfNWLtuZRtTvZ8MJ1SxB1cvdBATZvAPoKjQ86HX5sWLFNkkx7g6BJKn9mbUXNVkLikVA",
  "key40": "2Bz5ftfnNXErXASB2RQsRz2jgm8i8UJZwvEjrx5AfCZgsjWQVyTB8kEE7ksNE1eseHFuSJxvdyG2LVsqHy2FNv7Q",
  "key41": "5V793WRw6T7Au7h2HYiKUCSvTXHToXL9RMZVvtftZeVwbAnFxwTBZGvtQ268jcoPTfzfRXTMUKit5P1qSbcP6MTN",
  "key42": "3PftQdRPcfDJRFAawbiduARcsD9rGHW2CfsfiG3Hx1gEDDXAT97Y8U2MeYuVmiuzc3LVXRyN78uz5dPdajHrn9Rr",
  "key43": "5XRmShPPUNFTAq21mz42UxARVcigcZZ1y1CRUo2soWncpopRtYCRk9voLFpsGgkTgzs1J3Yv3FSe4fmymiPUdDzq"
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
