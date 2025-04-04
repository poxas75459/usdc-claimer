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
    "2Qt9H9jESGShDV6hqsxZjZs1jh5RtoDAgQ2EUW5K8mBZ6GfDK6ToxmsKvXX1krRFUWeAHLQwLk4Z4je6S8MgsdrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mr2ZN9JxKCxt8GDeMWx4qfaXMAhm45gGarfCTopviHdV5uHE3ts4dUbaKfonQ4qAXcMp3a1LCemG5kjpwEmGyH3",
  "key1": "4UKY53gTASxwZtKeR8oA3tSdDULf1g78kB9VSNWLgdNcugAkMzAXG338v1zYMt87tWKtEmeesYXcQB3pk1dvyoFn",
  "key2": "79aaJVkPBRFzSBGtfHJikmL4eMwuopMCDLJpjMh7VstiDJaEc2CrYAc9BTyByc61xxDTfiNUVv4BLsDcwc5DPZj",
  "key3": "gPKDVXhepeT13wzbfjbcEuUBSoyHzbAQssVXRvxXCLc13NFnVEwkvCf9D3LUqv2RLP7yU2WH1mK2yWuyqj6tY7a",
  "key4": "JFieMNScwxk1Y8pEbDTc7gZpqT8YXpbrx18DsBDf5uzngZMTSNF87vPMfU6xKw4FtRzV6CQeBxw514YHdEto7KD",
  "key5": "5DLufGq8KNJrT6x9mxfepkrkRxUfyhCniN9ZikZVrMu5ffAZCR8KjUrc1z4PkgXVFWiTMnub7xt6WBWF8QHoCGPb",
  "key6": "2fjb7i8bygAxwo1XHswK3swXVVUmN6cHWdnU7cZRhdQQ91nF35zA3Yv8WUJRQ48wsCYiSi5W19T7bQVVfxiaRQsT",
  "key7": "2Wpgvk9a95Xzdvgd8j5piLZtZQB8h96MvxbY9fpnY12qde1pftZGBsxa7qVzc4pbrkBcR4iTrD6o72xV1ftXSuLG",
  "key8": "23t6RFjDySw7PNWNV8itdpd6Qvk6WZEDiSYkNVPuisDZJYiW7vkpRBPiszcMrQtz4PaTBWJBGuRZ1rmCMULTyRHQ",
  "key9": "2EGcYcDTJspTSjetRtUf7mnpXiUdRquFCQ6z2ZD673793T7bdzxv2X9w5kvaHo4fY9cKCH9cvkHYQFny543zBWWP",
  "key10": "45ASrQMXoGzZy6xe821GAt9pUnLoqKW6Pqrn32v7MuHWNzafovd11UZHnNmr9UaKFXKhWXx5yvcpAFxk2yFVLnW7",
  "key11": "zfEWn2SoNpxJX4Xh2NBtTx2cTWHxD9dyVRfbzBuwWvFEg7LDZ7PtDdyVxcFcBwmVAnaAci56fjNXQgEgX6fE3dQ",
  "key12": "5PpFKGeis7tv5wLdPFHSHRrjWCkdAZ4pxK1Apqjsby4MoD4vpepyUpQNxZuW6WnJ1njaRno71GvQKbByaY9B5E4Y",
  "key13": "5j1WMai7G3cseyJsjVU5jUUSBhbivaKMEj5hdfcnUDdiqTAFLarM517YgMvYkkAkpo3XDT1iejZXHS34gHm41skU",
  "key14": "51ud9qbt2eXnnKTqrzih2KdD6d52gEyAe9QCi48ujA1UPr6FVa7y7777Tees3vXEAxhVDSULqTRsuit6ZgHSAJYy",
  "key15": "52nkkLSZkFTResHVFCQ6dUasXeLNTenjNSrXJ3mmGhssGbnd25gX2qLssj3kW2Hm9JFxcY6NC9kFdU8LBSqZaVBq",
  "key16": "5Wj1yGRii2VpN7bhyvYEbJJGN7Lkbakm5RpENG1wBAoCGY4JYXxMSuRsPz8VrG1Sb3ouuDD2ebwZkzmWHW8YHwEe",
  "key17": "2ytfRg5v5iubmyfNahMerjSeC4FFLQrADtgmsLjGvYxY2Jp9EVNJoSPaK6Z4JbWwhc8KC6NfCzeNZShZGXvJKAoV",
  "key18": "Pdt42LaVYabEDZLF5WaV5Czis2dsUZpEhkf2QgAq2gqdHSsVL1siMpxA2EaJ4DxYNU8JGFqg3y5pnLUV5JP7LM2",
  "key19": "4CFBoBErcqMk4YdoRPw7ZR9f6jJR5cQQTSDhjpReTwMqHVw249Z7rLPE7KbCNF9576w7PGm98WNmRf6RN2uDDFHP",
  "key20": "Vh5dpd7BChprQ1wMpr9aLh6XrU2NkyH2hh1Aoyr4KEhFbcg619fr4HBej5EjBFhoAbeq3JvxqDwZiNt3tmiV3a2",
  "key21": "33ZUnMBpfY8BNrqVo1FNBAanapzPkPa2GTUCK8zcgLdAWaNUy2ykLqD1brijdKgpwZgJaRvJmgLqrzwAMUwjb9DQ",
  "key22": "31SCUEgTiZ1xAUkurdrPNqd92o4owZYE9xzQRhGDXa12yTaYdBJWJusQ5sYvzxsNp7KTeTEbL2fbEFojYCBo8DEE",
  "key23": "5it9G5XaCbGL3JWKNEyxA9KCmbcvetEv39c3rXCuwYw2o6fKLGB1L11fodGc2uwQdEwBVPx6QhtV3WFkZKrxF5dJ",
  "key24": "nFfJ4iTLovLT4Yuqm4aDuPa6kJ2dHgDtFKjmRnEyqEetbvRyeMVChX43sbJFennQxWHdc4BYMq8CVAARnznZcaV",
  "key25": "2ZrmDGbYaBNMutmPpTb9dAmDjv9QSS94p2M9aR63695DzzsHr6zu1S7gZsVh88tXET4ugkfb4o2QQ8sJnbXb6bv3",
  "key26": "4fqsw9Ms9SzC5cDsnLbrT18AAMU7BBVZt27aLCYCUMf3cC1oRHa26dXQGqo7jvktLdgEe7RhAx26ZZXZ5bKY2crK"
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
