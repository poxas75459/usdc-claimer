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
    "4ztGngsij8JbXFzZDT1kPyryA19TVN75EP2H8CRqFr2XknL5nKA9KJHx5Qyi31iv4uUsxLbgYCNCym9ZU3fgnEBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LFrEzcrnjwXz5PnwFVEeqsf4mJsu2BJ5PUQjMmcadUrrNKFAdYBYSVkgLFbMT8TXpH51i8rMq1m1EcftHojj3B",
  "key1": "5xCx33YaTr2oR3bVuErYFNjy3e5VTrJZ2qGa7s86bQhK3vyhLETF3B67Br9ufYcdhEr9vzZbwqt7jqjo1VBEFCsD",
  "key2": "49V777YuZBAjv9eNyMTcih5EVgKEpBbVpssRQcQyvpK16VvcbJA88GjqbM3nQBM6yXyqRBFSvNbLrF12WX2mNgfd",
  "key3": "f83EqvByz97M9jVzhwamxqjp94pPahX23cnD8hbjjg8TqM5iVJrkCLY3eUXJU9reneRhcCDC8BpuLgTtEdApGhJ",
  "key4": "5QatRusgZjiUoHVtG2CyeoKZvZzzGTkP1M5EEHWDFBhZqhwnVMYtFn7idpJ7QbQnkaPjowadBsfRtQKdTASG3KH1",
  "key5": "pDvRgktMonoAxxh6y2QLqAuaN5o1WvF8fHFnpWt8r5JWjkAdkmjgRRkVrhehvVGyde9XffETy2GGiEaJGF94x5K",
  "key6": "4ddtwxmPfjkqbb8FpUTbrtRtc19f358u4ZSGGqEiTtEH5pdRnRBDYdpzrwY6BYZi5aoz9y1n7MxrArsHEakzLhCa",
  "key7": "3TDGzS3GUbdjdDta4UxFXZSqpf5YVgtGii3otwc3RvZonAJZLqLaoQZ5wcR1M141MDSEXgpyN8j5ooBjYiHNMrjC",
  "key8": "2DKSFQ1d29rtkiyznrXDfGbFvm3dCVToDtAUjbTfPd2qmvWkFmaGxtoWgfQ2LW6b69WVkKkftipmLJyEWX9TgjwY",
  "key9": "4MQcBGsW7FrHMBETRGCBAqYoDM9pZeXFAm7f6Z4YvECchY24Hrw4pZMUMoyy3iEifKSypy9JqsjdZa675z65RZ8X",
  "key10": "2Fo8YsuRg3EBYyi5sTXPswnfoGCP31d8uc7DhkA5ArS4nCkutheBbphU2GrjajrvYW3XzviGuEb8JJqkghWSdTdE",
  "key11": "4sC35VVtAivk3KeRNcw83B9BFn5LNYW4mowts3gXFfmhZ3wUc5n1cmcPxZwcThPk2gxSwYpeWGNBSSRKv6q4P5bn",
  "key12": "5PjZi9XXKhspwbL9Cjwbua2GhX8KPUupWzTmDv3fkNHMCV7KFtqDThG2BnduH46owiFAavD7Pf2hyxGGMZk5g8XD",
  "key13": "5nVUfCXeuGZ5iz1zJNZVEbmmLjUEphN6xxRjdRdtinT8xKcgq13LRSavQ7SwqGYmatDg39r5wZssBA9NEcH2McVL",
  "key14": "3VsLZSNAoeTxXCijoactcRzohYBhikBWWMnLD23wcPTEaD3w2jEBNsQansXRhiXsZ7nP4Csm49vpLUbzpxovYoJh",
  "key15": "3V6uoUa87gc8etk2a4Bffidu4dsno67B1xgLC9Srs14f5G6itHmAjhUVkqcWWL1hGZScsiG531RqcLmwE8CV5QZc",
  "key16": "2rhN1fp7unpMjfowHrSFFuq9CTrNNmSVvjvzUW5xqs9hHkaHVJgaHncLT5gZLHECPSQkYvMwgFZ74BmVcgYvrHdQ",
  "key17": "4PFECck31JPLXWStVhuLpaL4JpZQdoPEPfEG3RddSoBBdBqihXukGKXbqpbkoy6Utjpqm375CHAY2MxivgqHxX3w",
  "key18": "2cbYDcMybLH1Ze6D7x6hPaf87UZLCB3S3tSi8YKrvswStDtsHa9j91M7ZMauh7DmTFJgS8wkqHVH2KwKB3JcUpq",
  "key19": "3Xzby2E2Jrg1Yu3s9yyizX6EGXsJiFSbmvAoVwtyBPzXR5rhudV74svj9gxhPcKFghGhXqYBopANGpNS84RUqySx",
  "key20": "AFR2ZqzsC1TkJAgRkkXWtdafRPa6B265Hb7Q35CceBeihX4NcRFvaYFASammd7eAFQ9bFmZE7BUyKX3RZ1oSvNQ",
  "key21": "KSRpLgMCRWDoEnAAnczHAzfALwKXshzYJaeXjwzp1tCUr1u4G2DXyM9H35vPHtfj5tQqQSPmPh6hBhRRx75cXv9",
  "key22": "52cbsacugzZcJLqnBnE4zx5twFAzHtdiCzvgW7hxB5383pjVmgUrC5jgqWpzPQhxwzRRhUq73iAWwCH1nXBsBXUr",
  "key23": "4GGxwQxsRQvR5nDv5Kmr6k4k6fSL7j9xbRNFUB9M34Uia6GtnGSTaqTf2Mj5NvWdL86R1knwLdRcwqAUEU5Z6KTV",
  "key24": "42bLGN5671gKFj3abWD6KDhspeqtAwTeu7krrWGiEXf2X9yDLdobupRhxrci9cxmfmr5cJUy4Q5NAtydQMtC6tE6",
  "key25": "4JE7wSAES1LV4xWciXWyfXEHE2ME3RRqqSKy2TChZgdmLyNQrU6fvAc2h65wD8PVS3LgawgGLp1De1q3N8EvXaUL",
  "key26": "zAxUKeyrvN3d3NyJMBu5Nj3gdaLjKoF3dCywyD1QirJDuhpWuVo1BcD5porNQMvwvHoXC4GqXE2k4Q555pVDJdi",
  "key27": "CYBEVEG92VjtcLHbYRtrUMzYjCAoSZrgfZ5EhftSQ1m256uSC4MPPdqTfaXBzGyg67FyiXT4gE4JozbS4LPXAgg",
  "key28": "2YSJMeot2k8e5fxZ4hSkj85vRJzAzf4SMCzYLSybTBzknAJAaSq9wj9gNnj34QnqeB2Z8frr2emKe8Y4LR4ejYfd",
  "key29": "2E7cDN8sqiF4kz8gHWGS4RJaAKvYwKZiaPYzf6DE6bWmJcknJeFj8UUTzbmqUQPWfVQndUQLKKAy8gCnvUoG6eT8"
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
