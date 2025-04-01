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
    "5tuFpE2deDtWAW7sTTdXiCUtR3cKwhahEMgRXZ7yVW5Vdn8CSrjXpP18N5ymx3QUx9qFa2BG7MM6F1ghCB8hi2Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwzNY3qfafq7YfxKbVdNgdTkjiQHWazG2AmGvTJ9ZwDnhvSFkHoFE6bkDDcH7fVfCgWmgiA8rfMFwfCBgmRhFiX",
  "key1": "42cYZyWW8LMDSHTNE32PyPSrBkbF84KMjTBt2r6nHz8AUYXXGKNiph71gzsVsN2Jt1s3HDS5rGBvS7SNs4riRar",
  "key2": "2dn7b1XSu6R9GBzJDZ1zbqdbEN5eJ71B7qT5Ury8AiDwU4dFRtvQaqimq98pGLmG4WuKaq4JjBftuvUHxLeQtJAb",
  "key3": "4DqMjow3HD5bJZPq5gxSF7NdeFGesnpSZ9TzpEKnVV9TbpazLyVB4PwQjinxEahpjs1eLbDtF88x54ZxbxVA6RLC",
  "key4": "5zVuKm8aMAGzY3CrQpSFtRYijXZxubVPhaM67BMs8NUgLrZWbs1MB243nJAmEfqjN7kZMN9RKV7wbc4JLqvp92Qf",
  "key5": "2v1fxWwz3d895n7xfcLCShHXuLZJbtbTesMCSksMRswrJ9Q1pwnzhWdtgWJn7gw8SS9NVCRqRfRdhd1RJ6UKAgBQ",
  "key6": "4f6NvSCeVR2UA9KwF74qhaxjwTCqPPVS6mZRNmwpJik13xUNZaDLk8MwAveWNer8AUyuSgkChrN696T9JUyaYC82",
  "key7": "2oKBRR7JoRajCsDho6gELc3AcsNdRUcaprSxfJ5sKp5ExaNaKutsfaoZ43ivge68RAeTFGw5y2H2rMn9MPSBHmKF",
  "key8": "2oCDMdkAPMqBxPH51tWwackCNTxe6ybZ1kJV2LdG9ffVFvyeEdDbopYPk1yydWXqb49ZaDPrbD5NSuyDjXscECZB",
  "key9": "54E29EvmxcoMWDiJoWMLapTLrWmiJs2VKfXkS1Ad1ykMpSjBbUiEipkPygfw11E1Xynhdhv6K7FiZpMtXcN6zmuo",
  "key10": "3y99z8DKoR4vQJ8yKoqwbnNTNP7Wb8KDR1TyNvwHVQkWN2p2ckqT5MuEQ1r4MSGj7fVvqnCWR3XdbsT4ppJ1cowu",
  "key11": "3j9EL7TfvUBnCCSrPSzubGN5xJNpF9k3wvAB1mekDqYHDFRjzjM9mYu52SmAjV5TspSR1bR5DbZNRGpW2VXjxqdm",
  "key12": "5Abyiov8aEFEPaEZDmoVc34wRerFHZxXBx5gixTnxFn3fsNyLGbzhr2bjsNoTa1gixSQ5RvGZuPTkEZzANyQU5pB",
  "key13": "4MVn3jygSXtgv9FGtvFqVX8XaLySxLKzHQvbMzfoeWPZvHA3dhArUovfXSHtGP3EWCkvErNnHiuitPnHXLoDe4vi",
  "key14": "57rGVa3A2fnNQARDbQz9UooNyUjA6caT6qbVbhTPyfkpvag54j4uo4TggeTga28X6hvpe6ULWJ25nLZWjFEz5h8r",
  "key15": "53Cm5AYkkrHyj4n5surwyLbS5ke78VCsvs6R3jU8uBivoCZJDTLM99Er35ZVPUWjrfLtBKUvcp3e43ptnphwk5kr",
  "key16": "w5gYDvA1zRc9V7rPspRDFxaJBNdF65xUwHaGuhAB6ZgghqHGftgQ81L5dXTaXuYZ73cyw5gsaYk9d1TsK9pdgjx",
  "key17": "5JQknB9KbQbWRtUELG1yg2FENefszEHXXYVdSQP9LausLXADymgkqVJ2uLiWxv1cQgtotTMZz998gP6oJ8Lt2Lx3",
  "key18": "3ntgYrc2EyAJXdJ8kbcJ85NWFmQZhFEBGiVAztKG4d7JMc3b3Zn7smAtULzwo1pDBJZ2U7aSSNugaysv2xmdPv5D",
  "key19": "CKwyebc2xzx5zgZM2R9ZXUAeX8j5qZAEtVLWsEzNK7Zi7jBqBv4kgN35oRQ5FptbfzGyknLPR5tMNhFNtuRHXoi",
  "key20": "4yoWotNJkZ1wtKb7UQcJ5knwuf69sD9PFE8L1MEQn8pWoTf946BUNazAp3GYhjHC8Srd7ceyULsdUNE1zwLEvtFP",
  "key21": "5LdTPAFuxBCHKEwE1zbsaDvSbWATFqcwxHhH2KBaLzxzV3sm4EWhAMurdDcgjdSzyXoTkacTuM8abgMiso7yoiM7",
  "key22": "2sdZyEKykW52biFD8xBy4yVALaxVwTkhkhkhDJzpAt85ga9VTXupga79ko77rzDpHpLwpSn7ytf9NGd6Dv9jqZm3",
  "key23": "57UwauAJA9ejKqE2KHKMbpNPkAeEfrPhEAfTab2gHCcHE2noNdyKn6JuxKMBnBFYQzzAVH6Pv2dDivS1KjBBdvgm",
  "key24": "65fQfFzRpLvE15gFbQ14bAYcdzviT2abMc9eB8QAYqvXMEFxvtuLVSrafhXdgJGo1AgVx6j77LG1Yn7ZBPZxnRNy",
  "key25": "3Rd6rxeeTehH1U3Fy2PKcMYSiriKBa4yoxY14nDvLAf3dQ2Qk3po78LuGJsprud1V5cSZg9YtJQQDQ8fvkeKeSbb",
  "key26": "5VYvpN89Wpui7Avy9THQqg2JvJwuXJfDqzbqsjmPCUhi4sj6ovtKkA2PrHC54STcDaRNWC3cuxE6wAV8Xbqmxg1F",
  "key27": "2keWXwyA1a3ZWCnSnNrbQNCvaW8xkFHKT2szYTA1ezJnkyCrpf9yMiWspai8QmF9NH6AhyUk3oHxoy7Kj5Ys8BN3",
  "key28": "5tKnHhDVgemYjxgTKGW4UAHtUxsLCV7gy1SAvfM1zdwQjzoT5niJFpDMBpd4jNcPLNn6oQz8PJcpYJuCTPyNSCYA",
  "key29": "357WSWtFcpJz8Ba2wBCH72qhuuxRrbfqfHFUSKtS1FRFpsNJ9xJqh7uqE8w8nskZZGBmAvmu7fuGcGxFfkThBiK3",
  "key30": "5eogFKoa8k4WrQWhGSuG2H3PoYtQrJPizwkiCfbfVagmg95wmZ2bf1VVZS9qkrTgtcbEwzQCEvGGEzbBooiKL44U",
  "key31": "2EWpf5pkH51aMXuT5UJ41cGpwPPwqTabwCESsd4GmgmhnPhBFpbYSbyFv8BerWQoyaZcusCqvtCtWs6qXZRkuz3J",
  "key32": "5oFJTNQ7D9vHCKTrnASMZVq1v884Da2suY8jxFVV1r4k4fqV5u8q2UnayP2jgK87C45R6dw5H8BsCvhM2i61Adkc",
  "key33": "4d9J82vN1jEejxrNWVrRy2E6yy9RdYFhrkwbrzhgsYRnEeqPyWuVBzDsjMnVyTii6o5e35KzLqgwipY6ikBNnkGM"
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
