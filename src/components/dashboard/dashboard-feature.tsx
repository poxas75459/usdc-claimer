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
    "5oncZwDSjUimfdqG9aVvn9zLC3TLaLCVdKHjQcUo2YMNTV8a6SXmQsDu3ApPD6PPPDHkTWGSYjPpJZuashRYkbfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k3t3qVYTb9c37NeTCi2uPnWpLU6YHwc8SWRGWwUiGaCjzwrPVRYU3ntbWA4Bjr5cdLhX4p3Tygz67RibuNw3GAF",
  "key1": "21V5iU5YEtPiQrXoW6t2Z241E1nzuCcUHii2FjxL8pxAfdmfGtEw3Jf1qzdviV43SN17f14BVuTBj34kdkLfCYHU",
  "key2": "3dMds9PbwfzuYCLcvPwj3fMgmkEP9oV6xpqv3QfedkKgzjS6ontdURzFN1nsxnFj2mkEAZG7S8LHf9UghtJ4ByKE",
  "key3": "5omxa23UpxngQySVDSDjWeLY4LXzNa5HpDKpAJRvyV4Vz3QnY3ARzCBZPnQr3BtkxEWqc8DnANNLhNGpfhkMTvP5",
  "key4": "4VLB73RqEnvtxCVfmGxjJArTeCDFHZa1knoc9X2Gvkeuey51Cg8VM1HJB4x5voDVxeELMphyMpvijfkLCcwQymtP",
  "key5": "2611YX8yyrmj3AmFEtAR4XqjkxrirjZnSd5v8tTTFBJbrnu6vAFkoFCqMvNWz1E9z2c8sMX2o7EfDpAp1VTsTuV2",
  "key6": "qSoj2xTGR1VYmnAKEe182Ei3QQBY98Loy97f1V9bDvDXT8JUULXishVuZd5o4t1eiWTUueRjZeeWnsyMaALbvBJ",
  "key7": "5knUajQv9SQJAGnSWaVWQyYcGctb1XugDJiqyGBLL9rj4uiuRfNBrG5HUQSniofGDzVTZ8axMEQqJVzoD5KpksB4",
  "key8": "44TJ5oQVLd45ajGQXz4oM2uFvUvGfsRuYrMNo5JXYffvoRifNzxq54itKXsHQWNSoybMigf8vBKueBtuGyyfDBgM",
  "key9": "47vnZdwWRVUHDtdowHHYKFN9guypnAc213eWZMuZ9EJsdgbkeVDockr2BkWRdhTasjXcfoqqtPHEdiDmcrsERzkk",
  "key10": "5XaeJZcnxV8pTrfMTDf79j4H2LMXbMJ2e5cwQ2Lexjv4zsT1GR1okM4CDvSuLwwrQwAkYjA2NJgRRSZTLJPTEGtz",
  "key11": "2S5UrK7SeiocPipQVdLmPUFv8KDb3DQC4EWmRuwXdjYPhnsgoSzYfCi2dWVtE9YujJcTGxtdaTr1ECyWt6xWaMDb",
  "key12": "2xk9LHsucfGFncDeHd6tVcZVXwc3XbudrDMNrutyQVUQWe593cG3PoUcwS4b6trv2wTjdWriJHNG8iktwufKe4F2",
  "key13": "hkxWK7a2bx2tbNcoTSQhfrarGMGGEYYnGKzpkAYE3x2zaL2yMuKpp4kkenDhGiFYteDr45F183i9c1BywMtkeRe",
  "key14": "oTevg4k9VTMijLzNhpvojLHmFJjbGSYQYjAxdWpeuKjPU8dT3ZuG23rBX6XGtoM2FReun5pvRhHcsxoENeGRafp",
  "key15": "4henXxK9ESb3MmYN6ByqP1KxPXcAq5nAgFkRV9rbUkV7sWGfKBMqYHKaMtxmpmxyedBCa6fGosZiCNVv2nWABbtN",
  "key16": "4yRAmF7oWgs7NHbVRjFDvyUVW7gNrTvmSsTSRxc1EDEKTGQA1FdmRShoo6bXXbfzceaykY1MKjacC2KMtatWuQhX",
  "key17": "29nE7JB7zJtyaPwSqepsLxgAXL1u2J3Y7vZ2b4sp9D9xzHbeGJnS2SBS6WZ7fX7S6vjjZRrzXPEA9dCbUZwVPxBr",
  "key18": "h4wn8Z7DyGpqmh3xUwuD2fKXshoeaBH7yWPdZBq1DrfdqHJRm7VBHbUiNJXSuw5sdP4rtPy55WF5XHVttxUXAVE",
  "key19": "5fYGUQChJLV6FyuFnjHStNZw2hKTWkccr3qCcFkKUz25b5kDBbNufdFgQARKRpKhLbgXeXciZzkkJKV43Q56C9fc",
  "key20": "oGtAAvkzh5iraXHKHkoAJna28WGi7zDis7wRFiV5adRMTnLtMHgWb3fTx5ezh2uV5pKnbqZoG9ZEoo1hGitvpz9",
  "key21": "3zLtz9KPJkcgkKhCZbHr9LM17QKnTr3es6xAZPkvChix9JsTuygx9LMcjBV1TfByFzwaiZFo8YvFKPawr6nwywae",
  "key22": "349Eo2LSDNUregPX7Sy3i1EoWJJPRbBqhPMSz8FVLRSbXov3PZwULEhuSHqjwhgNYHqL6ZqN9GrrcM41y9zqSvQs",
  "key23": "5KX2CbhvbjEGHx8Ha8K7Lany8BgNEJ9C5XJyHkPZTXhyEr2b9gCPzJZjxEzAALK8vGyFyM3B3bQ31H2QBKiagq2Q",
  "key24": "3y1KoDCSCDHWFoP4Wwyq8uqNd3osu59YFbcbYTwqSxfFRVJRMV2Ft6tcpgWdCfNDau8V9GUxJ3DDFL6xtGissrPA",
  "key25": "45b6nmjd7bMroD5Wmb2aHaRQhiuXrM1UCrqZTwH1LzehymJiAa8rM8PMb7fcziDRCbCKHE4F8e5hruinskwLze9M",
  "key26": "BZGJHW8LK2KR2Esgzh5kPo7L79rn2jrFnHDt321FkyTGCqTH7XdYoA2Cw2htLzMXeXqBvYBRDwjgM8vaFHCmUTS"
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
