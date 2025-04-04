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
    "4czVmnjLeiVi74WRyiVD2bk2UfejEMi4BLsdCRpNhGCNC9c8kZgN4UJ7S9g7mMpkH9q66Xi4jeB3hc7wMKK1Pztv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oTDXx7eCXze5ddA1ekZrnzfL65KsNpnCiViNcRsGUk7vbfmEuuMPpCh4rJs75wMo3H6wcPaFtxfvmYCaL3dr6F",
  "key1": "51tTkMXeN4o3w2pWNjqbZHct57WuS2SFayDv6VgM1QMzPnqfzcayLTxfmzm3CABLQW4HpGpMfhTtAd81ThSWehVH",
  "key2": "2taEzK7di2f1DiDgN4vh8vLZKZom9z3DpozN6smq7qfjMKPhjtZ7QRxKHtgNyQcc3HdmLxqdWZFFZvGgXXymYXY6",
  "key3": "5simk1xyQEyxwdUYaVacbwE71eaodyR9c8d9aZTg2C1ENxceF3BnJu2Yv5wQfRuFmEUwp13T7yEFEc9LVYWzTnND",
  "key4": "2SZULx18V8pHAsZ6yK1p8bZq3jaULykPMXgySXb1MDWERYxFek1QSdrchkV8YtpwKtTvPQdMLBhNbKcj8EKBtzFy",
  "key5": "L731JxFSj49xZQ5sd7dQz7VF3FFiTsMKutwJRfSwns1UDwXDWiXzasiVpXhBxN2GUKQ8SvWqmAhrmJ8GJ8A8AZW",
  "key6": "34jzrDbGc2cghWqTXq3Wqa4QbMY1SbiZHtT9hRyqVzegRA1V8hQAbwjjX2B3XmUz2K24m8RnTN45U5kjov5kv9e5",
  "key7": "2hEsc68oVv2YWYdUfzY1QeBnJLQ6TAoBKCZ9Z2hVf91Uumr18my788ywtw7RnixuJMoq69vVFzLLpkVsQJsivKM4",
  "key8": "5x2wFQnC3EQtivJjiYTS6zKTVzwaTvfFSG18jNKyUFxuxsWGQnVpSoL38mPXcmq5Lvi7bPjFa3bfEkCLVUaiy2tk",
  "key9": "2vvBPqxyv7aAd6JvrikzBmDpZm295HHsVvunKV1nC82MDz4tFgBzhrGDkoW1wHWiZPq7axuiDeizR5doKSC4RQzf",
  "key10": "4K43Vo4nazA9kSK7MX3h5c76e4GSp8k8JTNhB2xaKLbXGMLP32CoGufk4YK9GeejpGzzXbirC2br6cXrxbkWuLvB",
  "key11": "aXnnUb3N66XmroP2ESTfxENvJagYcNicuWdP9xR6ecRTuitDUwTRwQAEtqodJLxUcrLjfZhPmKaa7j7RKPsuubV",
  "key12": "3APX2BAfhs8T8CCpZNUDg4B5q6ySFbKS9KmZqt5h28gaKnWRDyZfCgMYNg7Fb6ePfD5HaeqaCwx4f6g5ez9A5LXo",
  "key13": "44w4eZdjvsmvF416tSpp25ELHPxSTGsEw33RX7XVb4RZZhJtcJHa5fKcvtUCMwE56NEA14nU6gW2Nexynrd5qRcd",
  "key14": "4NevrSsA2LT3fzGSQo1udcFJGrDeJ2nMJrfXofZM7svaTSCUuAwD43qxLqAn8bqpAGdj5zmBEQLHmWidnzUaJChx",
  "key15": "2fqDZJMrwLnFsmBbYgEc9YoqgFthdd3y5bXGnAYTn39jLvJs2kw7VHNASVjZDK9Dx9MypoEZZyAVRnfs8KTXpb4V",
  "key16": "23XkbeF1GLKhvnxaYBmz8D1WTHhuPzsSTve7GwouovXsCaew1RtbTLDA2DFahJmnEZSBgwDas3H2qwB1mzKJEwDS",
  "key17": "mLsgRCM5tZUK68vGFn4vaAQSz63BKaUMi1pGkjwaegu9hs72arHUzb5RmjWiokJ2KSZPEN6jb9hDiHvLK65q267",
  "key18": "6613uBnZb49xc4htfGneD8PWVkNzwBPccZD3hWdiBP2TTCGSF2RyKcABPEogkExBDjED3xZbmStp7MHE73EXec5n",
  "key19": "Buy1zuEwpPademSrG36S67PRJgLX6a48Kkc785o3WrMDD4Hnz9MZyGDv342WpntHMbVyE74WQL2QJ5dXMGN2CNg",
  "key20": "ANWsVHpjdRokP3hgrMjnFmMqmx6Us4cqaJWcQuJKq5bVGmpXW9zCji5ELM2xmrRubrqDG4VRWSjzzxVr8sZgYhV",
  "key21": "fNVhfDvvFe1SCVaJafcW9TCrd49bWeuaoHpNcGJK82RX3ADFASF3vxFrzN9daNJojVChWhXjGrvKtiQVMWYAqCJ",
  "key22": "44ZpayMzFRR4oxPpMBUeQcdjW3BEtq8B5h2FPCDLZXTsK7HMwCu45PWB5R9MrfcVW7i4A5tYmzbrzFkmqXaVidZP",
  "key23": "2AETtabiJaKznBewWcjLgRT4t7EAaqkiKt9g1LjqnxEu4g2dSqUSsZKt69TXdeZUjhoPYzuDvRNDU2fi5voKEGhW",
  "key24": "27orEjqnbB3U3D1TYs4KQm7dVeeeymfWBHmjW7dq5dEDKzovF8Kw2SmS6sGBgj2VEda5fCcbegB8ZR8L5frr51Gx",
  "key25": "3nPgs6GjhLZkbadEPf32azMGP4MV48dVE2XeqaFkUJ6E9t2pv5JELBe16X41kqjD6ndn57mY5V1d8HzypGFVsWjQ",
  "key26": "21yH3LQMRPYAszYqDmQosvwSJmNNC21DkiMFvanMJaXk6h9arE6DUioTcThFQcnDXJwGrBPreNDFL1ks9V8m4hvy",
  "key27": "4E8g7F1S4raFwjo7B3UzY9ny1xxmJKLaxyj4zqCAj3fvdbzmaBnNxhgSqkzWNUGSGufBCayQRSmTr9gCntjT7Dy4",
  "key28": "3wBCLjhhebKXENYJBEDN7yRx2YCRXjhNwN2EtBRJT51EXv9pqsHZ7hwAZ6irC59bok1pFCzyrf83sMKuumCdbVGt",
  "key29": "4RPYiCPG8hVCvcaZzKaeFYCte7v3nMXHUjg4Unzp6neTTPjXb8vZx1RrdfvidYrTRXiDffeGahq5Ph8eMEvdh3KG",
  "key30": "2nbUZXrChqGsFweqmmaJ82xqbsa4HHzzpW1YFYKCPoJxhp4nM5CnUPQ7RUN2XrXoRUt1JUXwQzZoDHT9CRs9yRzi",
  "key31": "3fqgsfYMSgt2K6jfAA591vRbf28PPAovV6hQ7AkGHJ2qC49PLKNcmNqNgHLw1H7yT9E25D66yRBGUJnS8EY7EBYS",
  "key32": "iNkfE2tFTfUiAf2sLPT3NNy4erf3J1bVo6uSkrNwk8m8LGahzGg1Bj73oZCR6PXDnTncidTbwybs7qUCrC3n5DF",
  "key33": "dgMNaLhVopUyTdSFLr81q3Lpmx4AMJMJnFeDMELha8YqX141iYhhZuLibuM4toNJhVoEc1vBATYRhNejYFj1otM",
  "key34": "5j5DM9b6RS1hTjEognQ6GJD9uwJyAS8YasfBDNipuctPHvYdKsmkssM4CrF5weMXopb32C8oWZ12nLvRXazWn2YV",
  "key35": "2XwEU6fM8UW3mJSoQxPbEAx9Y4pYqimnW4pBygbUFF9zRTcpaANxudsd4SqsqpmoxTH6YLRZ1AhLYpgeohqNBTkQ",
  "key36": "2LTe51HXvoKwU8j4Fizitky4a7c7gCb3tx5YN47Ho1kWch9ZuzDVa5vqUYnL5ZamUKR3JssWsoinpnbqKmToLaD5",
  "key37": "3HdtRMknaN6vQv4rspMqJzUZKYNojKBizAkVTgV3v9v6mZLZpMQ2DnWhXGV4rk1WbBchzYZ7SGGcgwbNa6sBCiMc",
  "key38": "3kjwrVdKRQRLpKgwL8XSyn9ccvD4mYj6wPJ84E6mAAHEfrwFhyaBJDBf5M3vyd7SvLQC6NbQ9W4mHqy9CWG1GiHP",
  "key39": "FdXB2vo5Mc5arEMTfvAHvwBMg3NZUH6nc3meQthZDKS7xGXAgMAJz3fjuFzopQC2RmXzkpsnycgfRZUR7a9FzFL",
  "key40": "2yu9H9RL8LtmdWru4H5msJzBeh3GwMP8GtMP6gPMEABbbVrpzfz4GRc4c8tqVqGPQXW45d3RSgQA1uhNsUfEMkhQ"
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
