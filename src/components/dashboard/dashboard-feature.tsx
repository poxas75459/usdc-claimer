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
    "3zRbp32ZHbLXTCPaKqxkecWtmcVYehPnvTDtztMMS8ZuUFw2ekGU8JT1X2mjGfH42dqa66Xom12fpS9sT3HbSoJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qk2fgw69zwKA3mg7JqWo9Rsw45wr4Gw3T2XV6Nbg9UsxeudJ23EJydsad4npGTApgyVmyGMHKTT8tg5omdvuNV5",
  "key1": "33bJKi69LUXAWaoXEGJqjR76MVWEj1ZzJzSnU34BirexLFG8LuMNoMpGWCNVaufKgjhTRTHB83BcgWgsaJmh2Prr",
  "key2": "5SL5iZm8wQyZHrpxD2Uw5bGK6Srx7yQHukgAkVb4ZizSv1vdg1YQRtavj71erWZNkqGL526jm5nHyAPz37R3GHyp",
  "key3": "493gf9hSkK3VJBW847wqM4ZxfXxCKJR2yysDtapzVjtTxvwJQ6pEfg7Z3CBUdcYg2ARSjmRbL4eB3bb6S4yPJw2g",
  "key4": "2vWYu5xF5WZoiiqYS68BC5emkqNjtw1EESAdzuY51CwsqP23i1xoLYDf4pWmY5goKTfyTM1Y4C3wFnUp7Nh2f5zv",
  "key5": "fnsERHzULTcRT7CKXWt8EXmrQDnyWeaQ95b7KU6jLgnBYQdirKJh8qqej4oPQSovuGmLa8HU22za7nuRZaMRRaf",
  "key6": "5z6kbE5qkrM6iBkf9KHd7b9KMcqcAVQWkj9aKMB81wtN8tRMw1XPs9dUXSxWrvrJy1wma4NRhMpmNS3wPFLpw6gL",
  "key7": "3LU13mTt7ZncJQhDbdtjLXyNijqC6kMXTTZ54FZRdr6HEHC3HLU866w2pCRmweKT1Her8kuHH1LryxhWc8yACCib",
  "key8": "2mYumuFrGbY1P71r14grUSvD4vxbTiyE6r5iZnFqSXKtv1SDzMG4NNpFboDW5EhQVuJTqLic4GSaw6gDCLJwv3Bc",
  "key9": "2Rq8iQ8oQEievU5qkGdoMYvKfPFBBDpYaXjKMhNHm66EM4Z9ErQgevW7F3tQwxPSvgXFqH2HbMa9hKwxbbEDEbdu",
  "key10": "2DjTVb6JgDZP97EasyvXqvbWvKwWU94L4S4QnTLAe1T5wYpYRL3rycvz4kn2dWghR3AgoBdSvvW3cVi9Ngt2mz9H",
  "key11": "4mZQL3v5k2LVd9UAr52awxGiBejwjKEpj2ep86akuYQcDVdEaPmu4GKZJ4RqhAeEihDwCWD2zpbkQa38HfQZh9b4",
  "key12": "nW6grmJ84bKqZgbJvwDs8qxeQUKnsFeNNno6K87NbcoZ3eN2zK4zcTVTFE3gfJanuivQ8DuhNCkjoHzRN9D9XFc",
  "key13": "29bmMbgzFdM2KtgAQRVN8prSNbTbsc7E9hudUzkNZUep9mehEXhdGhGHx9x4Ho2MzTayA2NyGgB5NzYpTxVLWruF",
  "key14": "25zgV71a4UyMykPdw4wL7BaoTgY83QiLEzquWNH9GKHsVfHB8reaeh7oBmzG3tvPrYz8miLyX8FweTNTA2zjMSPn",
  "key15": "5ijQuKKcgUY7PWNKQGD3XZNE5ariQDUE2fjKZg5zfvpBKhyHGgrqD3fgCARdHSrxuG3m3S8oE7qmAyVBujwt9wwR",
  "key16": "43mp7fTDCjqVgQntDXzQeeLi2tnj6gtKRuVtx9AFH5JiaDGDyatt648awcqsoqggYgc7XWduXrxN6SfbxiBVTsV",
  "key17": "53PVvhTRaPR4UqLpEErNezredHctLd1CCW8nsWMKbxkSdm3qD5WfA3HB1PcKiW1p2SLpyttzE5iuTFjZ6MTKN9pK",
  "key18": "vzrYbJdsECzfYd4Zm1pc2PWU9FFKb67o4xKh24Z12hMMDFSja76pvA1q2R9GTTJrq51FixihSLyJhbLAQg8TESa",
  "key19": "5i1KRkCKNq4Fg5V9MMjJ1BFPGKvyrRdKxrxb1z61imn72VdbNxnbiS7HPp8nhDGE1khWgfXRq6wbw9tATwyBsSYB",
  "key20": "EkB2LKzCaLNcamkkymbonDqhdB9DricbCAjnG6Dw6Xtf3M7uHehq41jWuUZP2QfenWgHqafaPJ7yspQNw9pknjK",
  "key21": "JPBpeDhoRBkmQZsR6fM83pBXhYmQo72Auh28oVyrFc94zpwc2pGPJqtQNADHbBY5rrzb22JfFajbDLVFXEBkRsd",
  "key22": "5cfN9hp9iwaYu5UgWrjUsnkHdoF14LunjYGCYi6zimxPQZGbS7JswpdZchViSmnveyb7FsgWeRt358KHoGDM2qBK",
  "key23": "5TJ2rt4RWWCFh7ajU4779rpvbv4LDqps7jjPJjTFJQQj6Xq7RMWTADWcG32JKdUHPyGZ84RtiQ88giGbFE8m8nnP",
  "key24": "2KEnL3REu6muTKbjkroubdo3ARhNQfUPRLpaVBstKyGvVDznnvmeskQxAxio3xnnk5tzDRy9AkgWhtGudybGGjPh",
  "key25": "4yWMsuDTP4aQtvbzJKWxzNUTMCEmb69iZpDGzDy6e4DEJuXt4ERuYKaRWcx7NdVhUXZEQcEoJuMfBbnXswCqyyua",
  "key26": "4P2KnbekeoFkR2cANNtrKMNohtiGD1kJ4PaVXkGgi1eTUqWwySeadRVnLfoytXtPVfuNBKkwv1BdCN6Bcm4XycJb"
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
