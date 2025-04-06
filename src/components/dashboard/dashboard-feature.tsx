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
    "2ELZwizrgujehrMTy3t7wtcyWTYFfPxWkRXjmE8VFAfjaPZubtgiZ2VzXvWdBTJeND9ZPdFGm2uymuCzwJL5mVqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9PvUCLo4spdAnn8rnSUAeGZahSykLHw6AJJ1fDfZPCVX7uy2DiW1sEfkMEqcnkzrezNPQJ55WSPsW7xG7v86Fjc",
  "key1": "WxLib9r5nnJGAGDxu3byyYD5m68TtMgFzJekC9RS5Q6ygFtdKg7zm8t4ue2u6CEC2FiLRVNJq1pNHKX39Kqb6k6",
  "key2": "VuWZwH3R6ZHV4fJcojhHJ5u6DFgqDaruJEsh51t5nQTvrkd7eB6XwTp5F7nQN81aB2B1u1BCynqctYWsQYMUduW",
  "key3": "4QrPnJWu89eyKuAfufA1XmtKuCUc8Zjy3iSeBMgzH2cDwWAFKH5biMaV7fgNNpuaPmuyBC2t76TTJD8xZABYEqFf",
  "key4": "121qW37KoCkHbKjeuQxgKKBo827bxTze8VRGd1xFGiwxmMSZxwD5xqrjNU3Ac9uP9hHQQwCSzwUaNJbxpCPRtgpy",
  "key5": "3C8hm4z8ULpLb4zAyMkzHWYrngzQeqHeYv5ERDuono6G4xEsK4um9Qy61kdqPSDtLu6euR2Zgaw2CPPgZ2WhgDNf",
  "key6": "2mMcHdcBxEPkKKQLe1tL2eiy15XAP6cdhgZeeQ3t3Zj1qRyU8uVY9JukQ9Lhh4pvH1SV6pefYqqKuUrUY1AnDjFq",
  "key7": "4gfaKVeuprbPHWmmSevdpwdSiBb4diTJSmFtVE3ZAYduHumTvDgAeT7GcTsLXRf2vhQfQHYbejRCyoJSNf79B7R1",
  "key8": "37VoBnwJQ2Xhpmem29CHsgu7fBVt8Y8firCy9s1zLkNVZdWmtEkazJe3UytiVrHtZWB7XEzvP2vA5kaQt6sm37uG",
  "key9": "5pPUn9SzLgzZhxKvsHDwuWjqcdvMAqg7uesroKkT9jfBfNTM9VFBnhdNWgqPZmmKjjCFocABtGRPJB2ZbgYMo44m",
  "key10": "4yQ9wQU4KVvf7aSM7uZ1YdMrEF96bviMzhVjbFSiXrhS9KNfckwHyx5RrHsLbxGj4dwyxDW2F51RjAmKCfG8FRX5",
  "key11": "2cUiSPePhA5WVDRVDUJTuxtyTFckTbok4PaRcVHnUjZLvcNDNGcQ2ngxv4Xqf7nX3U7HYHKESp6PBmJr6XvbkRRa",
  "key12": "43RpjGxobjmJe1UDJUkNPfhGX8Wr58yShPiJgvQX4eVHCUYCd2vv6afVKXt7htiwJzcnPE2zy5Gd5pTrRaLPaUfS",
  "key13": "4yvTqQnpEZv8arwk6N2hemET2h86HUir8A5mvtYykzborta4DXs6MkRCbwTrxzwCqrcPR8nE8kNJcSx8S4wDSBh9",
  "key14": "5er34R6PA4y1nmM2iXKbUxEzr26gv4uzGc9wksvWJjjsCjWSiXxwA7STXv6PviPmEZD6tDJFhYzw9rojJhC3S5hV",
  "key15": "4FYfFfZiv64huQCC2pPPMQN53K5UCSWPhdedNxCBxPHN8Ne1WK5Px5fbztehcVJenAsa538z2cFfdjaNTfReM8Rm",
  "key16": "3E5unjfiHhgW8826tC5zoxKQpcMkGCxeD2DnE5VBgCubWikPrWiFD57VW4FiSeCFrDHWMrPSvuUJALBckpMrsdjK",
  "key17": "61hbbkcM2T4XQQ3HM7veEiUPmDDTjR3JjnXSzsg4edCVghKombNGHxWHEb5UmG5xcrYbMduCzrDuPYyHHuNNemYh",
  "key18": "Y8K1vLw3JkjRubrmb6rDg8TS5wkFYxVux75Z9yThZhn7HrmPMo1FCbpHkHZoqrpCXAqKjgpiiGu4Z6ojgT9XNb9",
  "key19": "2QdtNmTA1aoiqiHpb6PEKXGHQxzuQ1mQy8oKgxHKm7fMUDPRrF5rqhrWk1L536zTCQRUex1Rf5fWnKMDF8RBdxuL",
  "key20": "3ySDCMps6r1xDf5tDLqbacTBVGCeUZtwYY8DR3BwyuLNoeR41856RiViCtEsuzg8bSMHPrkKH4EyU4RyqBpVvDCv",
  "key21": "5F5p3iBGAys5qQhxQrVsGkEGRpnRcRPMk25r9yXRAZwwGwT8A5Wb1A9aAveFHG6VorzcKikKfaGXXxFjMeaPxfE9",
  "key22": "25xj4YiSjeBSh7JvCc4UfmGeKKSnCBj3bcMpCPYnTbtRrNbg2TXX4PyGCCyNmiCKs1So9Wn34Q1gkS5HrAnn9cc1",
  "key23": "3M7sedCgrbsUxoWDZufPciey6atqF9wb1xHfPUdrgVDkUATJca9bepPzeAm2fp5eMYqg9md1SKKiaPRpiiq9c5Yx",
  "key24": "23vfGo1V12XMKhyG5hu2qc1LBrvfWCwBztskrdzsVwQDMbTrDErDSrHBsDFZUhHt7bb4twiZvA9ncEYB3M3xGv4n",
  "key25": "53t9V1rArwoEBj97iKw4de9XihBD9W7552N5rE9CueoV5JeBobAz7Q1DVyw4PaRrsP69d4oGX5LXSPnwgNuCQknN",
  "key26": "24HGh3VNNww7eJA1V7W3x24k83h2vFHkE7LPfiJNzTYqxqTec7nGL2EoagD3ucpZy8BX3nRKEwWS3CvUim2Pcz1v",
  "key27": "4uxoNLerraaNbkdfe4Cpr47ZpEd9n3JoxF6qWvW8YketVokZCJbdxG5EKkYLgMpjcC9P2pyvTckyaersDDzCTKDy"
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
