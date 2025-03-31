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
    "MD12tjMhAwazwpsLa8TqMhrGB72mMnQVC1EVuJFpBxq9XiFK9XRvFciBA5Ei9kKyvWkgSQSgVysQ6UurBAzYAzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4RcpX3umFALs9JpwurvyGpxQX3thcc67LgTUxs4Gis9CSn98abd9zgh187qUEovqn5dDmwE1ibRTEYynFuzNG9",
  "key1": "2hAqzW1zn5936JXT7xiRY9stBNzUqQRhkd1MTHwAJJMRoseL1d9LFNvjkJjT9SU8eX5XazNd9ab58W2E6uFmBp4n",
  "key2": "36EzwZNZeomPvEQqB5yfYVcPa3cTc65MT61EqGUeCfchZVtiXWfDXL3DGn6tPb9Lq3kRKunxDCvf7X27sq4QxMcZ",
  "key3": "5Zcir5GCKFKiobbfLUxvsMJPxJvr9s8XG3dY3zeD7CxotBGDFvoVppiFZsBjfcoDYiyfRkoX9yUdcEQdNKtseTTv",
  "key4": "2QrQ3GzgKEDBehn52aaJNfh8GgaPYsouushursZGKvc9iC9EmQLGTkGQQ1tvY5VQuzRD15QKdpj1Fw42L3nV555f",
  "key5": "G25QKwsznKbeyDyCGJrVLMBT9d47KGyWnpncZykAwpSssPp8Ca4YccPpMWmCq6KTCGYBRD3m9firaxwpfz5RWEr",
  "key6": "4LHSreegUnaXu5fjChyZcBoEu4k3mKF2pCd885BJy1gZZEULijV3CmeybHGCmJbDLiD8YbaS8v1kaGqojkaYYR8r",
  "key7": "3JXx3amqAzdGuTPYmJruUjW9syddQny855gP4xuG7DthKtZCS7qtyAhaGaFrHe6nnB25mVTirHDMtFvwMGkxi51v",
  "key8": "4jgkTeFeCSytN1kg9GgrPjBZaTAxqnn6ufrwVfpas9RSjHJXjZu2NiicFbQML9hnhMffKuoGPxD4XYMRPYuguBrk",
  "key9": "vQExTPRATZZ9gWoqSkXxpRLbzURTcQ1ztsgcT5a8uANrsuAZEei81uHRDWuX6pGv6fPEzU8x4NFbn5s3efEfuYK",
  "key10": "UdkB4heNLBBL2BjyBWsCKZhRsTi18nTLyJvq98Gm49cfSZ62rYggUcohm9K4XxVBA78cs6naviZQiFXM2PSo8Me",
  "key11": "yD3ZV3rtXSVQVEgXN34kh4VW8hjDKREzohGN5ayd2RdHETV6efgqyGZGj8ecTz6Er6hko5aFtdxyFPbzHCcg62b",
  "key12": "3rjGDC6Yobdt2PtqF7GmbDtrxHLhSNbnNvAJF2GYHNA1y7d41nVS99LmmNHPcNMCmX87LdJqrmHXnQM3iKKkTyxH",
  "key13": "5a4L3NJJU1D8uZSwMPNFKcSdnYrjjf23th3SPJtXhNw4VkWW8PSyioERewfn1MuCyJ9nxoSDkbY3yFSD731w1wAv",
  "key14": "5nAuj2FaYWDuPi8aNkLLk38xWEnXq3BL8ErMTD4HAu76kLv9hN2gWVQBGD54BUCFrTABLGzQbGHdaSNSgomVk6uk",
  "key15": "2HtewY1tVKhaXt5294BrLJPp5KJ8Pwif2rZAkbePgiEWRFiprGnxHhjYV35L41mq9qMD1GN5oE8BdkwERSY2LqZd",
  "key16": "3jkKM1ffwNTf2Vs3kJFhCftMxR15g5PxJWTBpcjv11dX5M6oxHvfuYfMBJFfbrQoQhbCGCokBkxnajEytCYAGDdg",
  "key17": "63ZjcykZivMwKygEVPhFTc2M1qB97ent1wVYaSBEm5Y81xYXtms9X5LECvzbrX6kjfHSFZLRQM6U3EdUVbfSABd3",
  "key18": "5RX5fLtyN6zN93fDD1nx2pok5hNRa11W968rRppjpToFX3HFu4DEE1dihvustsZPbzRSM5S7Uffd6t5Kdq9kfa9X",
  "key19": "5TFd85RiRJmtMeasnFWhDgojuFMHtj4Rt3o38WBNuXEnZEAJGcPBE5TAgmXzFU6RJfdW14UYbLfivBdfgtEnUwD7",
  "key20": "4UcyP7YtgaSU8DDa24FGrinZgmk6Jt4LeS9v2aMc8Es7zQc6EXYPfBAcfQvRY3Lqec1zhm19ezWMb2Gq39P3YfS2",
  "key21": "67eGg97V1FW8FhksvtnsVtkaaW6fxVPNZaDLh67T9o4S6C1fMF4VLoWMvVpofd9K38rygSwbd1Ywa3XSZ8ck8fyQ",
  "key22": "4ioekqqFB9CkMjzJQzZMVoCQ5rQvfW7hDZco9zNC1UwseN4XqRt7kySFwbXAHYha8n16jm2NJoWwrEbL48GRmK1H",
  "key23": "4vviArQpnrFeL6X7RoiRCFfWs2dFeK1oU4dJHfJd1YUsGkQ41Zd6i5RkBBruXAAYpWEJCvhvBj2nQKTKR19FfMiL",
  "key24": "5JLZrxx4gy8iLgEDGAXYLioQkvFTW8qrH3ApQoEq457vC2s3S7Nt3H5w4rdMdFWmoJe6RV1jkCxp1NnqbgxzNaqo",
  "key25": "5QwB4VQU4cComLFn31zzi643VTvThzxFfwhKo5JQUFhdr1oeqbvQhJqxMG4Y6FPL2oWvphgPpDc58XjdQWmBpAM7",
  "key26": "4NKXS6Ppd9nJ5XbMbRBUMMWAAe6QJRZdhhZRL2KX9fizXvDAq9iFwzitaXJeyjQp5dMZASECTfJznb15NVsiEHd5"
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
