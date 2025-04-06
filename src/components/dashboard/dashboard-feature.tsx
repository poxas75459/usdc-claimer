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
    "5UV2Nz3bPnWgKmhFjPnUtHa1KPRDMgYFMFrXD6AvsD9XmU2QmDsaW9DcqbzNKE4R2w6FjqwxoC98Lqna6FKYYAft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuG9vSmgzs9JTEJ7bLpE4oHPJaP5DgcMbTS5JJ1WMYExK9M2DPTS4ymFAxa2p1sv5Axary9FZpbGfLFhW6uHw46",
  "key1": "2M1SWnFjs66ZAHgQv2sHLRKziT1cw5gCSsrpA7Z9FNy4PuCSYbzkwCwJg4tXYY1bHPsXqnpBQTPmtbtFGYPdWXPH",
  "key2": "bZ5kLUytxFHRTAz8p25tW93PT197cccYzzrQp35uaViVPxnxkipGWau2TXzytDgUkFMer6bpgmN4XAYw6QAgREL",
  "key3": "F28nYme82T5rP1szKFB4gUbY1DpHGL6mRpoTBdxs9gx46hLEPxCXiAJ3QfEauQy4wUQu1aUAsW4ka3TPT2rUuM7",
  "key4": "4FYASwfgMZsXbSdgCWmLQg6HYi6jku3WogCMj1jFUpZSg61L2MPDDzatiY99AEggyqMpCNVRqEPaoZU1U2MNhPUd",
  "key5": "jU7HqneLnYVR4TdY5ArhAur3vfrjiWef1a7XAi33bageCvfuFJTvfxd4rZEroqgRCnnCudysJcFYtx328DvUmEK",
  "key6": "4JhENMdgfPVnRSzu76MEmtK13pCKyUTywwVCudUYgYzvsGVjSu34dmbuhqZxVEZuuYpnzA7RWUAmTSquqszcscgW",
  "key7": "2b7W8LCBNnBBFtNdsCRWZmm9DXRr9aPf4wAirHnsTroVAMfu3Rg5wXtNWoqmfrA1fresrfWebKY1zYC4uA3pRsLY",
  "key8": "5zSEPGoJLehbJPEqyWWtTSTUQFzgvEnKnucU9LyANMWcKcgBLufZKFvfpYAMWSqybuRLjZ5qzbfqPDRL81b3gTK3",
  "key9": "5s7wPuqaAKYMNXPoPXXVVt7jk8UNxXeHB9aQRKGbLR5f9oR3fa1b5TFNgyuPp6EKgbFSgAEgsykrLCwB8ULrav6H",
  "key10": "64tS215u4QUYfWtQMRBQdKkuEGKnXMnWfxE9pBeQBicNuMAHrcDTp1mAJhbBwswTzdAHDL2PB32bx3tjqX2NZKKN",
  "key11": "3NhFLmXEF7iQck6grpSk5FteMCK1dCSZjzKfk3CzVwpQsnaEcjbwsE3BXR7XuFSTWZcni2HM8ZyFpBxYeQuZE4PX",
  "key12": "4H4dKQUiV3YhXy9GD78C1kGfAhCntP94NW9wuT2g4TfZUxPwGWMzAKPyhjdWBKk64kwJViLucZwixcxRqkgGTVnw",
  "key13": "8cSVk8z7VGUJAiChWJvAHJQ2n6yDHfjMTGM2w2FBheeESBPyBDHWXZr6okTpAUz9YyLbCYx7AZzDcknjZEyEC3T",
  "key14": "2nbtZzAQSvL5gw5RQDrJdkVHBRQnpn2UhVUjraPG8jzVwEthwbRxm5RFu4drChAjMjHmaBqrhEQe1awb8wwdbya1",
  "key15": "4uLQFsVGJJiNtTCjidyDhWwCv9d144q1KNr9pSaGpLaZYfuyEDaKz3UDq6XYgNUPEkWevkhWFVkzqcm6DfGJyahv",
  "key16": "3eY7NJkUcbCQfj2V1LEoRmEViX7TBuqXWrorTkJF5DE5At99gxcTyYxdMEnZbk92UJQt2RSdtcGy7cLttagk1yQm",
  "key17": "5Rv55aDc6tbvh98HCKYgRVQGBUq1nN5T4zqcEmXvuQ5x365f2gZ4ZuaLJHMppFKbe7y3ySqrZWKHeP5zqJKMruWj",
  "key18": "3sSQNKuiHgeYB6XqLFfx76oBMow8H1w976ofJLQmhN8jEaDHLzQYis2ZaBQiupHGeUpddpRS9Cb7RpygZQsg9T4D",
  "key19": "3Ajwdbv3A9PaaoUhgecXDh128UUjz6Es6FDHzxZQ4FbraVEeDScJuax4k3SyYeb4cr8W9xUuq6GAmgDkQyo962hu",
  "key20": "3DE9Yo9zxPEC93NpWo27mWxfHoZGrDiBMm8CSti4jiWXasYFk9hP3K6e5vFFWdDFTvHyicwTdZBnGa4Tbuh5Vy9X",
  "key21": "owWkiKWTg1oaXwXwUmtTtkpbWg81LWUvAieNJXQRbYbKoLCUHcGnfqEd1yFGQ9p6GgCP1wt2N3PWDGnRiRCHzDw",
  "key22": "EQ7e2N5oQsoVcu4pco4J8yNLEt7zgePYTstFAFhBkVrdhVtzGRjWowBcLR3gEcVsfeJi2iyqgura1vUaaSjuEfw",
  "key23": "42xcTbnmqhLSrPHtfeT53JeBLmoMqiH7t7qU5NCx1Fvv8cx78s746kNCKq5V8UAbuyhLoHEZA9F5BvQrPxMJAotF",
  "key24": "49GvSrnGs6itm2S5svQy9Tn9poHSCEhpfVZak7TRB6eckGswy7beJDktFDYRyXZjPebpxPRxWMtQ5dG2xsaNfsT4",
  "key25": "CQxhhsgsiYx8P73Ctty6VfY3pju7bgq3hQu6cdNqAPFZXcXJgRCMxtERjdQ2P2EbGR9ky53quygoTLU6aR5fdBy",
  "key26": "5KvUN5SRwBLd5dStQEDUi7wGHupvaASp8jUJsKm2ft6XN8723LKwmX9qVQmvpZxXjAPdJuxzKKyYt1bteUg8Ugcg",
  "key27": "2PapGZZphK1BDgvYhDcoA5axg9M3kp6XTJxmQFXfuT5YDER9YLTBLqUhSGHaHH59Zcza6TKWkF2nynCSM7KSP2Wf",
  "key28": "58t58kHCci8auZEweNpYmKn9bJMCsa9GxQUjphWjVPHLs8Pe6kFvnvNQRAX4wdmboND7LspUYgEMwtCQNTLpctzJ",
  "key29": "j7ZYBb3RZ9EhCv31fnWW3BfwwsagcGzr9Hwg5gNxKut8x6csTC1PtGkLt5HJw7BKwx88ujzFvgBySaRF919KtAp",
  "key30": "2NN84WhisVrrYx2fw6nTdUAAKoQeVGaKjoLUDMbeg4gs3kkqoXEsn3NqvT79FR5Vm7jYoH8UapwrYFwZdEnrYFAi"
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
