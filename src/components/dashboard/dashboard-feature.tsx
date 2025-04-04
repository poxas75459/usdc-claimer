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
    "4t3F15rVpSPrpqmC6XiTSbs2tgqk7m4xtxotaYnjv6gAYmuSHv6Npc7QedAoDaUca82HFee1quVJhaKnykYTaYVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxQbc8HrJcdSj4w2tFJpz2RGvV1tbiVUuqfymbqPYo6qPjhYPpMWBFooMgnCnT4BQDYX2Qp1p1z4FhBrqNDP6u9",
  "key1": "5SXB9uzuZ1U3kcnmTLphphMCMmmFgQ9uiTFiwj2SYfnrvQeZLo8DimgcvzuBHi9Nki8V7HGosdCuUt1Tutqgi9PR",
  "key2": "5SFTvbJVnNMkjtkd1VhsCmJzUveP5uqUjTuMiLQ2zNMn7bUmtWGEguyqhumGDa8amRtm5dPgcu7hWbZx5xZWGtDz",
  "key3": "PK41GBHsH5x7xLCJDqmSNSYrD3x6zzqPCYiU683byDxdcFvNYWf1TeC5nRjAyQRCKLyQWyvfXWe9vCFdc6a8c9C",
  "key4": "5LYdH7fgCMqBMDRPFnHJBEjetv2bPRx3Uhupn1uTkrxHzz1ZQg1NoBpVDW2FMUQyvvQ7hUqEvz9pTtjqSGyANn3Q",
  "key5": "4D3QAbHMC2h6XUwRKbzmHUAV9HRZdqhhfDRbCLHo9TMdiNWwqf1Eh8h3eWewcuSHSpHK2xbQCbmfxTBcbvNHjkL5",
  "key6": "m5nFwfuBEVxXxDmAi3vCpSciG8951ZY2SL12T5Q82xqk3nrFriGKSh5eEcwfVdfQqNp4Ay7755FRLUXhutXicX7",
  "key7": "5pdkz5ZTJkxY1QCPf3AGF5qTJz6YvyaTpYNXjp8rGwsGeoMB5MSfciP8FXENdb111VkwiTGa1EJwBo1iGWH3gmi1",
  "key8": "3CWg2tEBXmwX8vk2Tt56tvXsEbfKD8GE3SzFw6fMoQrdXxXBxgiSVAoWK8FnQQZJQr1jtK7duhce6Z3wMXMb88ie",
  "key9": "4CMEi8E6muUPFY2iuR51L6CuG8M4iuChySsh9sK3ub2yD7NDfVtEEo4XsSnif38HLPsuziKFdvpvyNFE2itiv3YA",
  "key10": "4ZTR8QPWQDjyiumYvc63YT8Ao923LF25SPH35FYWcJXUzU1sj5LwL1iwGEUxJXWnkP11vjhBghXhNmAf6jn7WSQg",
  "key11": "4MrW1u5zq4tWuxxpnMCrjNx2TWyYpCpXBq1g1pKpVw5ihhoj1RVchxk5qTVawU1SgPYURdPRF9BVRwMxF8MiuSJm",
  "key12": "9ZZHqnnRxVc7DFPYAcohvrt73hC6xET7v6BPPSdEdGPw9eTH7gduZyN1BkDdXpEDAKBWXyXv9pM6scaZpNtRmDG",
  "key13": "3eWPAJyWqLurJBks2HbxcXwYT5MeBzJyovA239zUkCh6BgN1g98nhtKGTLBgqRHcugFf2Z6sGHJRkKro7EsLo3Xd",
  "key14": "4F3rCA7pkHna7MewdUVPMsYk2tMPbGP5iEPAWoSeKizUCygfSLxcXBLYam7LECtF78cfM1r3gMem1UWm5ciBD6kS",
  "key15": "3mFEh3xut25QDycj3cHbuoAj6GYYMHDtdXLEyfDdZS4NY9bYBFbbpuFBbqTj5cQZHYNy6B3qxa7FEt8fVVojMLww",
  "key16": "4kDHmv9C8S9FFTYo8YKQFjS5RyRuD6kQJqd1G1RdSWYiC8DxPkEjMFQ9KRQpU7rUDdSdKAbVjTC6288wdpHsBe5S",
  "key17": "3nF9jeY4opdzJmx3DXD7Q495c73qJC56Av178TNyfneuAPPoLPbirTsPnKJ3oBJ4K5VSzbezr57HWTNqNpynLu5f",
  "key18": "5P4u4rNNVjeFErMN3yfcs2bxT36SqyM6NwyJD8Nf1h245xC1UthsGSfEemzfMDzxdLuiisJ4SCoHmrdivENdSz47",
  "key19": "3UAqhvucAMuXWCCo28BT3FNoPEg6ncr3EPUARZUt7bZoxBqx56iiGeNBRfCmxGwUse18MPankA7pMmqmj69cqUC7",
  "key20": "VLUfSkDY1FewWMjTQp46LH4FvzJU5gGESmwCJEMcPkDxd8ENC7reBdaRphz1Zn6npSZzAQft8qENd7MPy455UbJ",
  "key21": "3hmNcTVZxTmQWifNyw9NHTJnvJUVsX23VRPTCZFdztiqZfWbTayDc2GGhreq5k6rmNmhGFyWR9icaES6R8CvrrFF",
  "key22": "31EGvWNBmYT6PSnZ5hZuKw8cnXdrFjpqiqLrjbF9Qy6Atay6xm6aUhuzaMgn8NHHSTAnF7cq53w3TY1FKHhQdEdX",
  "key23": "4jbxkGRxFjo4pid7FfZ1ucG6VPY2kcofRbCccuVS6JmQ9gfYmb2YQkVdZeD1j791fEyD1XFS8TAUCKhRYPVaNsSD",
  "key24": "4qVBkV7bV2UCAGhoG7iYwBXTag1SBACv1svC3zCtxYAsXrmY5CHbCVaxpXTuTTPJsVcaSuPVDof5MPxpXTK5z33A",
  "key25": "4tmxcvspnadbfzhpXzjxMXqQLD7hkmdsXY8TNRMQSsi3uvSfuWq5v7UmTpEgY8okSfrrRBcWbAvd8787oBBacg11",
  "key26": "muuTBNP1uPKiuZJiJRfSm8qnxmTsGjDZpYPSy9puv6D8UxoQbL8dv3MjmCsqE63BHB4JfdXuRkCAfA56EYafBZu",
  "key27": "2DjnFSHERYmJkQfHAYNKnKQmhE6DAn8ihAgmEg8xDHqvD1cTLjsCEhguaei6N5fcS8Qxm7XtVaaHhrwGr6xZsxk3",
  "key28": "8SupHXp8xSB9kEaU422BcmfobsakMHfM4p5hM9YRoUwWxtrB13B7CL1mZhxJFXeZKjWT2dpHCAmZW7nEfCdPfXg",
  "key29": "33B4SFiPd5VX6dkLz9FnaXSdK3UMrRDpPbggENrrebmt9v1SVxnDtFBSHYsuSQAnxg8okcvxL5icz8o4Z4WxJh1W"
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
