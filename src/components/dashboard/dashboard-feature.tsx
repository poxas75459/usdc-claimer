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
    "2T2TS1RQhV2pQK6meCwTKjsbpT7X6omspHo44wkRJtkBPsEHAe84LAN1EtjAzYv4Pb2hijwJYktn4ZfSUGH8rLyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HRRSnYyRLYwPSqzWjnisCWusSEEkhfw3jd4yKXFXHqtg2bXcX2MFXUqfdbViMJz7sgUZH3GCaSaAdU3db6HLaD",
  "key1": "5nvB5tbrXuznLBCBEoYaDFmvi69gBgKQePyqFq9mvgZdtp59xSr5wq3cKUuhJBrFydP8xfTBsEVRZtbSz2KZRD4W",
  "key2": "C5TR4N1MZ4xQX3PGiKGRr1fESiWEE7vy5g6PK4Tey2vBQHBNVceY4N16gnBLExRreDhX2to6YeUUMt4bzApwdGJ",
  "key3": "4iNYkpkUq57tZkniVB2ymQQafcukKLsPDgfHDYkyAnTV5fE5DGbuNCa2VeHZGamBXCcWaVAdM7jpZsdvuGRZuhUs",
  "key4": "2z6sfEzkgyWjrcNxJQAhCZH6vXixTpmMje8e2QVUjBMd29yPhUg5woMGZ65omiW9R4S87c1maqEsEvwFUHfT6uvS",
  "key5": "FT7jYqH1VM89D4SxGSmCdGfQRLwc4v2TWde1dGchY67LZ69PPyHd1noQMfSt8yiQ8wQDvAFH4Ax2vW3VpuvQNxQ",
  "key6": "5CL2wLgPDhqDWup5t9qRPYeNcdcaSGVcw9EEz5iVEf8oiuqf4awmtUJGNa93bG7zB3dTSVwicku5PiBwdVcs6R3w",
  "key7": "3nGUB2LFrZAwEiJaxFKiM1g7i3uLv9uFEJcPScizLEz1zYHhnZ5m3GTjanwWKCfRHTb7pw1idDGTzNkMiH3XfueU",
  "key8": "2sVH4J1Bx9m49WDc1K1eY3yoBBjEovoi88naWRwFxxfn8sxtdW633ZKd38nVtwWD7kFPSAemR8KCdYHtZT68gnAq",
  "key9": "5GtB2XzokfbgkxuNczbMc72Y8FBpkK7QgqGrfdNZCk7HiGicr69JaLFFy7EGfAbNj7oMWV8TFMMoQjbETT3B8ByA",
  "key10": "3LYEV3AfKrr5f845n8uaAHhqy8ENLdxREMVmtuTvr1mkfXfQg7tMh2zqHiV7Voi8xSsmit4kxVdUBshkvngtLcoC",
  "key11": "31KaVJ9S9Kpo7o1TwgEAcSmJxCJ1dZ34QFotTVsiKwPDE5aJBXWgj5mrs9Y8b4dWE33pHY5Fg1nP2vavDBxtuMXo",
  "key12": "o8okKSBZd9RnaG2ZvkkCSd3wbPkGW1fQZTqt1Gn24JqF5dJWzxHFK7QTpbDREE8ZKszuq4nKSDNnUN78VMZotaY",
  "key13": "2gyq1dwEVjvzAJFFVfpaqxHB9ZKXFAvVHgwNZ7SqMsWgLjqTGumcjN2bRY1BPXaxqXvBvG8WpDPDV2daqWFobJLr",
  "key14": "351odvfxQYzdAx8sru8DWTCiJWorx3wzak18YdPU3X7fLMbSY4XtcQARWHx8X5knPkA8UW3b9DEUdtaQ7MmPoAbn",
  "key15": "47ZYz4csUJiv9kJaZ2cNugm5i85BELJScJ9EdFPgnfPiRbSin4C4rs6Vqiam1KBK5mjHVC3eUYbPnbdvy9ZvuR8w",
  "key16": "2jzvo7rPzKtM3NeeCyuxfZCsi64EvZsL4heuVidDLwLPKPe6mnzZkKpmxScERGBD2f4sEoZsnozc7yMSYY6Ugvct",
  "key17": "29HVVDBYZ6XmsVn2h7sCBcD9cxtYsCWZ9oFPtL7uraQ6jtNysEUTW6ta6YTnciyedwE6rCYuRobuyB3wd6ZcDHxQ",
  "key18": "cy2aJdmrx3gza8z9wymmoSGBQtDc8Yi6KJRKDt4BGhm1kHpnLDcAp4sw5z3LsqtkKoFjBZeYkaVTZFkJmUaXcRZ",
  "key19": "qciVJkhCSuCfEkSwjWzUpxHDhdjtenLsk45aUXmHZHQ8VNnWhGaxaksi47pCMfHHdU13xWujhXkWiCVFzBgzb9U",
  "key20": "4Rtd8j14sQ7R63JAzkes7qn3Npq4Un5RAEd3kbau1oHMrRWMbLS9fuoVfEaCfKzLPDyZcQKP9NZkP1bfxRCUVL8m",
  "key21": "2Jp2sWAJ8MvNAcYxCG3Qu9EHcsR5DqFqnDk99FE3zCfdZJCtb7BNyh1HT8ReDPRvxoTqhEtNC6izH5rx9pPimmH9",
  "key22": "4t3xWPWiKYkzXshAuaieF2WghevYUBGKy8KmuYkn5CwTavuDpZxB7k9iRZLC8pCvWFsbHn1kHEGJ2v9XseDxpHWC",
  "key23": "3Fy2p8NSeFG2kEcShpiTrT5CK2BJJa6tmxTVLTxFHL4jTK1Uv8UEQ8JvDzG4iE51UBRpmV1Z1LBQRAKK9FxKsUy6",
  "key24": "3WDbq9mPAABkA4cq81AJsPQ6TzRLBBNWUbfh32wgCkUzRACDh3YK7A5E31sqHazq4EjRMcbbbzCS3pcjWW9XFQxE"
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
