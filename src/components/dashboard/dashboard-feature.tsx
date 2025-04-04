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
    "kCFxNN6UsVxp1u3W9MABn9JbgPEe97qCTUZ8sFu3saYTXiEWAXLWcBpnGdvLaUMeE7ggQt4sKaFkMbCa6crqMRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lo4M8712WfVf7zfbD4fuBBXGyfNoNWziV3MQaJgdi5X3SPLaKGn5TcTT4JaEijvkYEYkQgtmPrQHq3AU7zKEXbb",
  "key1": "5uD3uDWWpJ6xoZ1AK22enH49yLwcwvmcLGDuuynyboBnbY9XWW4dZWt24wKEiUZ49fqpr6ssEXUBF2p2ktD2232M",
  "key2": "4Xk8qXmmDEv183qXurthzUG46RshfnNSnGRfJyD7k5HnQisM2tdUxcPbdoXWmipRCDWNFVbM4kjrecdHpTkNs9LV",
  "key3": "3cKtE9c42pNdjwwhjXQvjq7Jp9GsupVp1ZBYxA7hhBgNxQ2vBzj4VvCPirKkdPSKCWybwi7UAr3b6a8gZ2mwAAn8",
  "key4": "5KHZAxkcGRPa1RoEwKboWEx6DWuMEnwVf5mT7RV9LFiHZj77wLAcEMDUPbC2v2eVt6ZjKjvk4jtu4Zyi78TeFbTr",
  "key5": "4rJUXWUzjq3D2jmyCBQj3JgNiymT46rk9LzyY8Yc3UvcAqY13uzP2eH2Qct6MYzS9tFH94znPpm7MZEgNL2HsyiW",
  "key6": "8NHVLafMKEA3cGWkjkiSyPVPBtg7jTjz1RcJKz3tweLMx1DvY7NaANLX1aj8jgWSV8pRksQ4kCBLmq5Aaz12oxD",
  "key7": "5Y6FphDq4hyamFRZ98miu2nQswNj8df1xmk8Z553yyfAGHZvE8TAChYVbk6ANB1s44qEzZVDapYggW3et5ZaxTsD",
  "key8": "5gHK2xiWWvJFwfd927QtcW2LAb1wv7uaE1SUo6KwWAjx5no7Le2yPU6HqZBLYdseh7w5kVdbkQhueiA86rpt18YQ",
  "key9": "63CTDin5bx7AL4LXkWYU2n1DyEaf1vXi593WsiCSEYqewnSWKogWdfF2TiiFFpgQKpzgLiZxw5GgeS66aWcYmQEX",
  "key10": "sp6iCEhLjUMqknZ3HRBP6vcaA9K7RMb54Kv2wQmFjB8xYRY87dmyCZwmy82g85kiihgvHZQEAd5EhCmsYm6Xjyp",
  "key11": "3edFx4f2USKSQT63BnaNK8LMsQBMeqmraHdkJwW1RhLUVskMGkSpQrgyZTcQ931tzqRLCATqyokepSv7ztNssnmT",
  "key12": "4qMyfYkVe8qPLM2tCLoL3RBrb7NLbtuarkUd7eCLj2fNXiLkzw6fRjHADwwNZBNh1UkyhRsqb8j2WvJvMaZCwFom",
  "key13": "3ahNmBhcQcjHzHAzV3btBGX54J8DjDmrJUUAph69dNBX8ETJKUrTk9RgGNjYZdLd4WtfVJqCQ3tFuxxKiDz8y6m3",
  "key14": "xEA8gn3DHrPk97XfFxiKuELXqkB8ehjysmooe78UMdSKHRTkvwS27eFe151MAcX4qCrAFTMLY2Tofdn3oXPS2CL",
  "key15": "3Nvfc4mGPAJWBXjGuVSqKmYuZEa4CAh4Do2pYNtQhzyfTyiQpWvJ53yj662VLbVAUiNNKPa1fiMhA3RaotVh7F4m",
  "key16": "MVDGASbPH4fiqyry536TfoT1tPPHVx9yYgEbcmYrRGZjrvMh6Cm4hQ9NzgtzSjyFmKbQ9GamuUFFvJoshZVSxeL",
  "key17": "5TzHDCVoJCHdTqokt3uV4fpepJn4nexXQyHzD2oB7ectSRgvkDgYW2fby1Frcd5Cbo1yGwjyGuCm8askot14FKFj",
  "key18": "3XahsVVoJiB9Nk58mnrvWwp3ZrBDTXmPKqCQ7cH41VqKnVJoPCQgcwoToy4n1TyB7M3H2mM2Z6Som2ysS96sju65",
  "key19": "3nd5sC8xYqQFccKcXaEVsVqpkTLLWLG8kwqEWdWtQ3rLzTh66wU4F2zWsj4UgnoqjgQzPfz2JEDVMz4RiDy97B9p",
  "key20": "xW4VVBtQnqUqfstCzstKs3PybzLb5DUtSmohsEAYCM3v1AHUATr68bQKHCWJ1mEod3fCSG8RJUynFieSzXN3oS8",
  "key21": "65cDp6YBneYD6pBMnPxGrMSXJHQSswN9CeSpfdxmdTCm31NwVYcECp2KaQiw4dFk3yQ3NVyWw1b48oih5iojFhFz",
  "key22": "4C2fJDLVojKAbz8VRDoUyDWC68PMk2ghJ8Qi6qeX2C7g3nFM4KeeEQToz7CMiYoqT7DWiqtEgcoJZJFyKrscJqEX",
  "key23": "4Wq4AhTYJrsXiGP3r3vBjXYbWvhyE8fkyb8YwZUbFDvBmgMa77GwpGM96PeJLrAJsU9HP9k3NqRH3YyurTTkhwE",
  "key24": "2P73jSryiZuvuZ4S6rBrZT5M7E1QMQ67dYixbWiX9c2bE1xGCM5HCu49uf1FpWhqg5ayJYmVbKiSWS4vMztn5Wuj",
  "key25": "4SvSwdLdTvZGw7GJR3VQxNNJwpWZMbXv38ZB5H3jHtnz4Nzt7bRfP1euiyNbPJb3YuoZ4nUDBfxqGucYMYkRkXP7",
  "key26": "37oHnVg89LqTxV27o3oFNaVtBHXMoU8ncKy3aJzxpfzfnhR22wQPA3N5BJgurRVk9QtEfNE1ML9uUTBa8TBE68PK"
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
