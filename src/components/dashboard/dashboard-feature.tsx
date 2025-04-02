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
    "32uyrc9DdF5gbFGhdqjiQDQU5aQpoZd8PmTmMeUGahdPgPuHqAzihqMpXcfxqBbHgvqA6ntR2fgZCD9QbBm1oHMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3se49Q3T2b1Nsz5GYnTuuVkZ9pbyzwwxzfzY3Y3Zymou2Zs2ikTxCibSDS2enoGqtkANGvQhzXs3ryXPenNdtTr",
  "key1": "2xmySVEHtjKd8sLkNaTsgtndYFEM4JGGDEgSFxiP9Nvc53F8ejyeMUJzaegSZ97Px2UPH9BEeLvEzt1ipcMmHnxq",
  "key2": "64GnibaC2duPnuXhR8cE5bKgpZQ2rhNHi3QKRZNsjfZDgUXMVJ1EBMa11N9aos7dLJwepYUGLrduxQuCAtxyGJ8P",
  "key3": "56tt7KJgQQzXwHhTQb3xtGmto6smfQReoyZgYs6bXLefGxPofjKA1k2MnzM4ouRiqBdEcPcptvhVSCVVWeBvgTd9",
  "key4": "3xXWF2MkqSX5vC18hF1SWAqiqg2xpUgyPHfmDD72t9jkkvat3FPvJA2p5XSqqWt7huPQjibvUq6NVH5YfzV8HFPy",
  "key5": "3wEftbQJK3eWRzKQEFHHRAWpcEKVdfwnEG4eTRtjV5MwyWMzVxYpwVEqwcU81efwinwwP6DZ1vBvqkVBkxtZFeR2",
  "key6": "4Xoo253FJSTusbR42S7YBa6Hv3B2kudVm4nXe8yD8c6cqzxaBoBnxb6AL3pngRw2YREvFDyzZ1nFaWhHg2QBW1Ap",
  "key7": "5forEn2VG8eXZrTkro6nvqwR4FranRz1VuX9wfyeZKrv9rKbA2j6Z3X6cMSMZrgHdwKSq1qhgaMn3HnWrGRTxUoJ",
  "key8": "5sujg8P3YpV51E4Vj273B8SKF9GvrQLcJV1fo3q5mM6TF58cu5aBv2xgXftJ5xh7F3LzmdPKWZ2sdFQyREu6MpAZ",
  "key9": "T85JY15s4sDs4dzna1a9oT46vDsTXhSfNBH89fUkzXnQkoJ5F1daHJoSpADzoRvAa4r73CNt91m6K7ecWf7uWSA",
  "key10": "27JGC5r9Lu2HQGePwytARvdU75wwSdncVP3CRqAUVCukAqH6ezP8phLceYXCWScGwKKpxi2cSYrQkn3vFtJNkVRa",
  "key11": "2VyTRRMuJe6zZ6WRmddijBSNU1SX4xd7TLVFRFY3x88UC6mogVWAuba8Qpzh3p9BqRbsxEzRThmv8PHfEm5gsA1t",
  "key12": "2RCPmp1GyVkx4Q2eV7y6n22FjKTiH8cpHSHyW79nyxnKUr18V9JVuQrUXaV8ByLg9zyrHo2Em9gUaCtJpmacwxEB",
  "key13": "4DrH5oszLa8g8tzctUQuhVkdkX3N9X4TrTabmsVgJmecU6VbioShYQjj63nG84UFQALvDpLAezRzGCBiuEeUfsUm",
  "key14": "4qFL79ueHPXL3rJrEzKi21UBZ6YMAEgTy9PBy9PSxrv6wMWbCnHxrvDver6vE4VcTD587SRpmoykrXaKHGWakJLK",
  "key15": "5tjiFuZfxodXrwHYTf9NJHxqGDh1VhRKsy4visMqC35LPPhS7fvyH9LMZReBzpfHbbQYSb94L6V8eAnggYpU1Zwd",
  "key16": "3x5P1rwPQoowh1gmSgLJCdyrBND2VF6Ga7JWyYFbvEKmJVioGNN4kcYV9QERdGNCELoV6eMUm5iZFjfEURgcqGjb",
  "key17": "51aN4xgxWbp4yyyhCTQnaogWnnzu1RvxUgG9niMiQHvM2naAfhxpWPopxbQ8Kh7FtynGbUux865zK5Raz6JBDihx",
  "key18": "3aLcHjQvZFRjgzVqA654saypYfrWuiXApBfAyGVtsWeYEgB4KXCNGQxHwJyTFccd3ke2oGyRQDimkJ7S8qFeVTpp",
  "key19": "4TUiQh2NbWH44YVJ1aSQJG8eHra9spsar9V9RYTAwHnTpyHfWn5jrv68VdE1GvU2XreznJXoC7heA2WWgFe51jZF",
  "key20": "3UbUQ1rVRC73G8iSmKaQXAQ6sVSVAFiE1K2GCci132g1wCb3FNBKDUC6ym4LWmpdwtF8YHo1D4msBJZo7DoQV7ar",
  "key21": "3C3FrdYjrsHHbgtqpfTe2C7QbD3E4w8keo6yNsLnUfLMcy6vHNvb2MjLgJgTEFj3yRXmWy37hMk8LxCaTEPERN9g",
  "key22": "2gwg8Q9nX6tGjKogpTrtqbpaMoVBpDMLWyG33WYhrhMcfqSmvZC1SiGG93ugH21mUEEiBTjRzRxtp6mYH3SFGLLp",
  "key23": "4g7HJ6cwRzA2RoxUh3bg2CHDWuvHZdskYCSh47W1g2CBikfWXRFwwwPRda4oVPQ6DKuHayRFqeqKauHS4MYcrW56",
  "key24": "2gMEgQMayJrTxzYYVJHtW2smdD44hwL1BycqD42x1vKmXJdXVFKVCfUq9MXt2QUvoqnYDUX6QiGA4GBSQKjQTUbN",
  "key25": "2BoM3rnR6SkzC9Lyvp1SVQRpY7zicz8VwwwthTzeFRUBeWGYAKZLThoctAuUC6RiNk3cMLn1tWfCj2Q8EJXkFv9N",
  "key26": "3EoSEQZp6wTMZxUYWM6kErybZ1QxtENMgPj5YNRUpbgeZ5wmziSbxAnWrzF8ewau9VkPV58fy649JvgxDTuB1eRx",
  "key27": "3zjsWFhiSFFwUpg5NJGRiukE1jH4WvqM1Lz2cqvKbdwuKHCV2Yefjqjd8wiCAZYL9M7upNnHspNAJ2ombDPffn9g",
  "key28": "5yrdRW9Pz24oMmaSqsvtVKuuoaxbedDUn5xHDrftwUTfefPRSfcQTDo4EpPVr7fkqijGhknViuUgPcPQX16YuCyg",
  "key29": "4Vswx8poBd3i6ajxK9fmW8WakdaXgkhxpsrvBgBQdFP755VhGRquhNqbvPhFUwB1twv3YrzsUaUnGtsDAL5pn7sX",
  "key30": "oQX2GAZKZWr18CTqYFVi9YNMrLgoz5zk3xg1pFogRPyuspA4YEKFBKaHn6QttQ5BhTmLKYNeTRzAdS46tKhkYQy",
  "key31": "3ubXKhVCdojFhwhpiok5EEDxRd5xc6sXWVzGLPGBhWfJLA7KoyCDU17c5RaJ5Fta83Ctjk5JEh3jUTdVUSXffhvn",
  "key32": "44SFTUc99v1D8idQKLm22WcjhL2gARxmh1WGSDxFZdxvMtG6RYHLQEmakdBJi6A6dUhBrPEc2J6owfjBxBH3vDpx",
  "key33": "22wax5vk7VXiikZST4fVnKo51Mo6ct8W1pT7BUGFUqprWnC2ZwuAopzrH9MRb95ggDtMwhozU5zn3a8G6KLzCnqn",
  "key34": "2BaiT61knqjRtzsZhRYqbAMKeMpEETKyox5Re9iM7UxnfQMabnPvBDn46MBQiJPm2KJWRwKthxuh3ZtuygGQnTmW",
  "key35": "3QVg5gKvQTaqAeT5Pq2GQYRbuhLCAZ5VkXiSyGDK7CoPbxiMvPUS9PoWiaLUGs65oCaS2nPwrwv5a4hcSaobsYAv",
  "key36": "2eHyZPLDC5uKzGk4oYuWn7NcEExJABogW2LSWUuo5KbutKNBM8v7cQ8To5dxdptMbGawYNG3x7YFVic95Crz4YRD",
  "key37": "2eDP8w8ourSSUfyDGeA3VSEXYmm2RzG1dxBcMnte3Ls2sW3y183xKBpkrcfAc4DWGxULDUrJnUk7hycfanB7ibXR",
  "key38": "3Co6v2VAeNL7xKiXRh9sNuE2EpCVBwRDUBqsCbgVdcZiH1SH2ehRz33362HG1S9MCwkPHSq4aK2ZhRdRp3yPjQBi",
  "key39": "42FENDAR6oYNTf9e3LP1dqXmYKYMvkgThLYaVnmfKt4krzMsYSgP6mZf3nWFXcx1wZ2K2rLoDDtqD7YtL6BpRGJb"
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
