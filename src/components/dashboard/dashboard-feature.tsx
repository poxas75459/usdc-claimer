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
    "ishA4C92FSUNwL64PCh6Vzt6bpQXYKA9NZULeqHvQtGc7g2cSy64hPPkbvhKJZnGtiW48VZnMRD6a71Jz8KsDsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYrXGyB2cxaZowUrvd1kexjB91kdWuWHwmHSh3fHbED9vZefycXL8xsXjbBER2sUn1uipGENS8v5sG8VMJ4eSYb",
  "key1": "gLNb688soSmXL5pGmLZPNH8UEzi8RzCpmPnDB7ddtfQsAS58aAEDhUk95YoewgQ4AzW5AYDhowvtP5yUzjc8eZG",
  "key2": "5G32GCs6aLuevEd4wpBnSKnhad1Q7sAmakGdVTFSZhCJUTckWVERAdGzop9KtqzrKS9B25L5B29LU9zXPQPKGcSA",
  "key3": "63AiUvYTMVWYf7GqPYurhzXXx1zPWDGBaVhXtWn3bEs8716aKdLpwz73bijijZEGUJFxP4LXhS9UNMrCiS2QTUhS",
  "key4": "VUUwL4xYRiw44mE7qqAkkBozx6pck9KkHgWeALjkNJJ91jTY7jsdAfJrWBSidGoJ3wVGDeEr8n9GhcULhyr1mkK",
  "key5": "dVg2WDqjEQNf8ep6KVdRqXE5GdnqBggNoghgNFf3w2tmo7snkmfexV3RTzpNU4QxK1uVpgdQM9Bh2SbBzgMqp42",
  "key6": "5u3HZLqLcEdM1aNFjwaQU33yPvuwun6VEnCjQb8UxgsbX5BVAahKnn4cXFZh3cTxydSsMLFp78QBepAbBKJjcdtA",
  "key7": "5E7dNWqpaDmBjvxfXgH1JXzzqzkbQoo9ud5Kawvto8nfT2UfLUtgXCM1D9Qpe62SXE7CsTVGPydM63W5UBjNK51g",
  "key8": "a3TyqLgyb6Bu7rm5VRD75iAUJ8d6cBpxKqmYKRP7dZKc8bSPF7EXM3jrFyWH9SVi4mhNrTTFCHnyKBmPRFyMrqh",
  "key9": "PMLCL23BSEGGxWF4dZkDZf7mM6hjgUEcRB2vuYhJYBE6U2K6tdnX9YstKF6EJUjWYR9vYMdC4MJCDiyv7xm7oyJ",
  "key10": "29NUpmd1T2E3WD4P37JuAsmvcWCbzWUKNJk7VoVn4jvUjtdGMRhHfsa3KzeyFkubsBfvJ6pUJSKXQmt9z3UHSvf7",
  "key11": "3LHG5kayQMdkxBy1C7Hapn1FTz1LHkpcVvqkHhJ5gWWiew2rES1aW7DQothgyLP4MtYGJXvncoUwyaxiNyNShBpT",
  "key12": "2BGwkw3LniDv1YGvhQsBEkXvPMJ38XjxhDeFu7aptTHP1YTkFfWeuqsP3ZWoUuaAc9bWYibGJH2b3ZRuU9hWf2dG",
  "key13": "5Y9v88kyLtfcNckFH9m7xsPEwmb28JmMSYaD69P7sXMYgjQB5VqgEMoSTLJCBJzmth1daSBcgPd4MBMXHYoGsphR",
  "key14": "5ZQDbsczGQHDZLRV9RQnoWwh15UmLYCwsEn11MddtL7X29bbbnvZF2GzzGkDJhdwZHZDjW2fCnSeE1sN4SSyoTDt",
  "key15": "YKYNGWkgHvZFg513QFmYPNwCHtX5qEh5AbgKR6g6dRACsAg7dDLvSWT5zG6m3aZ1iyUA4aj9QE6GJYAy6ttLDRk",
  "key16": "XWM3r6p7ySDeCn3Z2FEFPsALrzkp2QhE1eZtHEVRQgMHVELeFgT94PENQ7Wa5SiSD2bRuUzN4YhudbwdP7JZtZ6",
  "key17": "4xrrBXfRi1GuWjKGpqXgT3TViXFyxKVHEhnqb7CQG7X79orLheFQpTPfBKagteFUWnxW7CYDnUyWRjLUBALtv2dg",
  "key18": "2HTZ7zvn4XMwuCafZiXjpxucAfXvTPzUX4RgtHvoJyhNUU1BkSeKedcX2dfdpzdtuSMhFs9MSiwxEzmjTSZntUuk",
  "key19": "3DdMP3D5DQkFtecF29vy6C5LEup3DidCMQ72gSctMyRzMsN5J4JcyrSWH1f3BHk8BqoHfmwqpo1xQeXrbAnb58a3",
  "key20": "4fiiy891z1bX1BwKKTrhEoj8T61MqHXr3uAKggwFLbZYoQerAyyvmEzrQCLqwvsUVsrnQCsGKh4JmSPk8Y2KQHqr",
  "key21": "4dpmPCtsDnyqAUt5u4Dsgu2UfnwEDxTbwjvqNkj342qTrMZ7grPsC4WbHNpXKEgDPWDTRXKBgxqbaUPFCytqAGaU",
  "key22": "59MW4crBi2JZWayQUbnPyvDXWMTyrhg6LCpH1SufUNh6MPSd4p2pFiX4hKY6xEKjm2AwdfcYU2Vo6Jf1EPnEKrH7",
  "key23": "43P8SVoc7fu4ahMtxcVTNo35VsiqvKzusY5B6Fqa1s8PDSF7EkHS12nTrrxMzRSJx7638rcm4JWPRA6QUz5Xj3Ep",
  "key24": "ayjY85GLeDdAdHUg8GBTyWmNPK3s8rmrZdsL6CvGRC5zT6bTxgk2d2JPAR15fztvkfB75bWBGYeSMkgEHRLD54Y",
  "key25": "3WXopsAwtQt1Ryq4AZfRJZYhU86WsomAYMsA4PeRK6WA9xK4tPjmgDJ42ouTokJKHRcGXh9KE9HKpamWVdjqDM1M",
  "key26": "5oK9S3jLtHNqrFyivnB1XHbupKvNZGFTxmHwAkzZuS9cDxHztFTLSrx4u7faQZf9PuP64XcWnfa9tYQfYQmsRoQK",
  "key27": "3ee3dWvh75AjCsRENK9fvLsRszHyMzCoHMZfNPLdmu3aPGxnDP971GKmdqVWrLqbFxPenkJwDmNarpHGADY97gEk",
  "key28": "5E1SRqALiQUEd5Z919hsxXPzP72r5gNhqRxoiWpkgHcJm2qncacriTeN9zj3evXV76PykGouKXyLpkMTib8SVyDz",
  "key29": "5H1MRXYa5YpYM2nNjZgHxfqofaLdo2tL3RFKsK69XvvkMDjzV1fLD8Bfqa6n3wM3LxtjpPx61uXDpnHjqjBqEKvG",
  "key30": "5uPXKEVb5XdLA6dDMJZXHosh9eiYKg5aY3LJJYJ3UcTDvs55RBwMMKqfZLC1EaXNQUHevG41C8uZSeNbMf2qcBYj",
  "key31": "PEQTiPsfWMnhCE25npUCREkdPx19WKpu5knWRbDWp4DW3gCAXMu8aaZnRrSGYBjh8TDzcVEeQmTDbPSC76BpJxD",
  "key32": "uqkd5uc7PzCYufqwevwW2QZwwZsjwAGDPa8Y2UcF6iUJbZJXKpzGjGKfBaCK9pQ4qRgBPF6U2n49YYvcf6kHRCj",
  "key33": "29RBMv53NEnpMgNUukToLE8aSkAxNceZ7vatRwrmd9CRv4QmBUogHFmZr8y5ca1vka75wTQnfKyf6DXRgRFQjTKZ",
  "key34": "3S9Vx322X4k2QKKkJwj4rTAkT2vHMK174uDjJtLEido9QxkS1B1WFPPdYsAqyUoLvWKu1wjmMSQiHTveaU6pGRKS"
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
