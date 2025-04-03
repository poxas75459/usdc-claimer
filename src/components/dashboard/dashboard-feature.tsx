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
    "4RvJ6XHqkhbj7e6967gVo7UQ1vPMh9fbMiCJJUZgRAbatCWkyZFpmY14XxDLKNPTdx4zetMtyBARGnB7K983zRYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZD1BTpXEGCcNjTiraDsR4amCPXgPK8upCYhfHDqzv1abj2fHGujJU5UiW7X5kumqt1mLJF7KHosNVghAmsV3gr",
  "key1": "5dq4fwYNoTE8VyakgD4zbwdhjnaK3vosErjE8Gn9MBQBmBUVgjTnsEY4t95sX9dr81Nyu9Kk2svvTWnceSrNv7Fy",
  "key2": "sE54so8ZgMS1d1vMc3m2uUyH7c3fSBCsBaG14Xmf7uqn97HMknVYx6NAwDBTQ1XXWkGAbwgTsaUfCPFq9bH5mBq",
  "key3": "5vwZqQunNbKXzzQMQR7tZMqeufY59zNVy9vUFiR2vRVZeR85XxMQUdySaSv625WqrUxYW7vWCmQ6bfaCW77TtRWZ",
  "key4": "46tF222X9SGGPV88RwAgC8DatMMYVWBm3EZp3nuK777wdDh6DDRV9kj3fW6rJ4EzKG6dp5qYYt9oRdrA4qbu4Z1K",
  "key5": "4WUvzcgreg9N24kAjKJfSHUsmziCzUmTxxzVzM2LoDnkP6Kk596Su1Z17e4WccUFaXUjyifvjisfY9sifqHcQKde",
  "key6": "24JUsUweabDMJ8WznfwqHYYMPqNmCNPyEv1pRS4EU8XTJChtR18w8vujaZvd2sVLAGJmNLR74VbjjDJsKBrpxmFN",
  "key7": "424XtNNqQcgekHEyxgsMDZJzfTNZL38PGj9Y7wMb2LYkPVMk6bEgs8t9HE6p2gC5ovxXhEWNtqPDUhXkg5zRBKoM",
  "key8": "59pBr1XjWLEMfZhA8DxocCd4FWWS9JSVio7KP1Vtwpx29K5gYyFuopgSTF1FjS4BwZDfmcVW73giyQJWjcdWj2iT",
  "key9": "4z4GRb9ZBS6cAwQ9NxbC4iU4AZYyPZCeF84EuUrFFSgd9jkCfwT31nNjZdEErien7qAXRtGu6JCmmrRg8E1AU2rW",
  "key10": "3Do7X5PXqLEb1ego1KDnCfJx3yneaEsiyyCQQeTdutX2wzuZqByx4vbGfU6pFK7rSF8W8Se4xXzNeWFQHBKRoRQx",
  "key11": "2CuSu3tyyjRuAcMuUAWi6qYCuVvSVmXJ8CsncidyBDfQAnoJipbuUtRXgMgxegyFC1NjitNRwn9K8j8d2emQXF3o",
  "key12": "Z4MU9SrBeYa16WeL3Dsf9SR9ktnPveQNAiBXo3FBsWQKdMj4NjoFabZwXEfAR6T7UTVaD5fWqjqGfJq7X7jqGxU",
  "key13": "3iiER9E9rXkkb1CqpdoxkdbgckhjmgJv5iAKDCKDpg92cJe7K4UFdWyHLng9rzboXPJYVeos6i7soa4nVynajGPU",
  "key14": "47Wga7ErUMBA9pdwEu4JBFCGftRk3J17o34KgonVuGB1CxPjKEcv1pdaFQwJFtAZrJRpAeP6XTNprTAVBMPJHqtV",
  "key15": "vuS1csFMYNHwGvLknvkwxE4xNtFreXAnPcWAJeBFoDrf3E7xuK7dsTeGPUshzfAY4LQKgMvUEEZDwycSvY7hGd1",
  "key16": "614tefpiAoqHieDTDdduBiXsEgTaDrNgSb9dJgpTPQuAh6cvZ61MfX2CXJJToN4xiqndfpcYNqtcR1PqNbaMUtKG",
  "key17": "3QkoHN5mtPbUfbXz8YRfFwzmbAuMGuhXhHxBvX7MTDAXnQmzKzhiFtoHMBydVvjZJzYQDhnxJFVtxR3F6eT6h8H4",
  "key18": "2feRF39saF8YAdP1Nczvtnzi37tE8pN9F1h54xS7fVVPszjwTnB3vHasw5qtHWzxrErZd5n1jnVgTcE4f1ZKtU2W",
  "key19": "55ex6ZVqVYQPz158gWnXYFw4EJvYjcd2ZwfjNPsSuVBAi2UXGavL4pwPbkRhYnQigN8321fpDoXnBzSd2Zw4pNmn",
  "key20": "3zttrnJo8i3p3wxzcFz2xqDVDK2RpoYc5ote5XP68E2smFBHjNcCiD9yZZtf9JR7hSjN13Cpx1PxoBKDmXY7DtMe",
  "key21": "MNCoEtbjHDwtSLxHDzPF1p1aBBxSppRscF3NXVitHFvAYp5kAoBPAz9w7yhASTauB1k3cfqP4KwW2PGemYiuyrX",
  "key22": "3STALNvnQrhdtfE4fTxMdPfV4qhCiBLqyV8zKdXvELmAVzNhPTyeNXGqcvTpcXivihjVxC287VvoqKVkJ2DWtdAr",
  "key23": "rRGUpGewe71qkyS2QnhARNARRhwMU4k8EUWM1rGniCsCFWvepPcsvLLKVpJaVv5dXMFtXmRiB8Xe9dSVwVMkAtm",
  "key24": "3WtdR8TJVbMp5dVQs5mVUSDcMy9LVXB9zPUTbkKPUeSYL7CFUiUiitrbdq3pJvSq33YtgJWtG8jMsdCYt5Rq7StX",
  "key25": "5RQCiif91YoMi4kpryrUa72EU4fctgwpoSNh6ZfBygRMdRUCN8NFnDRvuKu8Cwb4wyvzo53gzcDaf8zptxMJYTVi",
  "key26": "JCM49P6cMrUMQZdbQHgNiYq7hFH8N3F94UNFc72SeqgeS6wWfwH5SRZ2m9rCresGAnuqEiifkQaanJkPBmcWuTh",
  "key27": "56JC1FYb9UF1enpBLyu4BKu13qABTPqjvVvdrfj6N7f9JAZfmvzxyjaX5ucR64ssvxDpdmt7kLd41PUBtMYczdpH",
  "key28": "48MbXov8qwCES33M7PS4gVCBUwLSf6S7uWbgM6qL9JaskBW1wZCgB593jdsqZ9TYyZQJ5JyxpMiGb1ETV3a91pC7",
  "key29": "2vN9qvqmWghUAkVzw72jEfA4ZtFM2QfLDQdPa43K14xSRMvGZ6xGgMZeMJjydbvs16VSYkmPbBDyzzM4c2bCMGPc"
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
