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
    "4wg8c6taL4hB24qw9FJwpGkB5wBju6B1XbFTHR5RMbGG6fYG11K7S5hd19EaubsNL8sdBmxpZobCRs3KhRE6qYij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eh8ZpjUaWYpVCWiQMEZBCrnVhCmVWE96aggZcompznphQj5ySWY55oRJ8PTHuhCEJ8ebE4tb8yKw5BgngBmcxtN",
  "key1": "2EKiBjhkFhK8WFrA8TCcR5FkJdp5U3kg7Zmeg1yCL33D2xpiK2omwxJDpbARczSVTvdmtpzy3iBzExexb3iN6zY5",
  "key2": "3xibZpXKxXeUw3djNNAWzG1zjrSr7xoK6rL8k8fcjdUnHSw5K3JFhXsgsDkexdjHxWvdhiR1EziVVjMgVYXQmirf",
  "key3": "35gMgCeue6XUddU5sBWyHGfcx8QAqfYUkshEwoF5cQ4sEtZv4eDc62bEfG7o1zTMTJw6KiPuAmM6jAPuCErFfBzu",
  "key4": "2jRnPHba3o4mdELitzpKhEAUbrpT9X38tmxRn5cHmEXxGCnJ2CLHNLFBiavYjNKBtjb1PEzvZ29Nn4C8vf65aPgR",
  "key5": "2tfXUzVNZYmJrr72Wo5oYoWYBVwczuEirs4UmBisujvJPHCfgZe9Kx5fqizbJaMGJBpPctUjL6MhjzshbMoPqGrJ",
  "key6": "63evM311XnqUxtK2ewVAnRSXcLBS1HFzWzk4FfUEg1WwdyUEirkWTniF6fxiRYyKREXBW1BidRL1bpchPhj9M8dN",
  "key7": "5U3aS6Rv8s3uN4WY9UVfnuD3kv1yvnJUvsQLsD3h6XE52i4jT2Rq1DfXmYjkmEcvb8tFAwXFbqAHHjy7mvSv2Ypy",
  "key8": "5amQ7J66QhxBReFh9fDkcu5z5NWJ1UZFU8yQLmLTEbTf41SjnKZu4F7acyfMSebxg2PzEU9q7pagxi4HG3Xkhege",
  "key9": "38XDndwissZtB7fD5ZXJ75CSDm57zERe4Ec3Swmcvh83SJASsanHUrW9LpQo78kNDDR2M5GZvJGN797aXvVKEQjN",
  "key10": "4LsCSZbPfQ9jqC7HbvKKvHX3mo5VRvWU9n4iqeVHJVnyo36VXCBMn8MyFfhgLDG55XoLCF993poRrByVFrLoSpxW",
  "key11": "3PnD2zsMTDXdCf7Fd112s74Be7nKqWdvajxGsVQvtoWjy6HaPAHJioqyv2B1fJZbTkng2BB4d2qgBLFn523KB5Jc",
  "key12": "4hxE2b17YYvixdiropFTqUHGKjRecN68bJ3ttw4au26JF8aDRGLDxM5aDAddMVAVYX5Ti6PjHkwNAfZ1bk7EBMkM",
  "key13": "36MjCRtkMQuRmDUstBxaSmFdsHUufDHK6m7xvnACAMFEaKvhc1zQNzaKdcvx9gvnNwnmqFABNWsUXXJzrRdAeFpt",
  "key14": "55Jse4xpCm9zjPGcZ4i9GHgh73ZGn1s9MHRW9DeWPLZ8CefqvCU4MUHF5vzaUm2j5SLp32KQA8R8CEJGuWopPHgX",
  "key15": "62qYbyhRwZXFS6pHzoD7ApcrpxkoZXPTmiXB1e5wYXUr4YdddyAs5G215AvUg2oq9cjrN9ssbQHyEjzfjMQakwAy",
  "key16": "5xJYSHSJ2p9QKagxwYq85zQPgN78txsTAHwcSC5wV2Vbsftnn9HSEUfMUbfpD9HKFTy6F2UWMPRCRo6fLm9LurYX",
  "key17": "tuUE34uZ4thirgHrNnL8rZ8hxWGvSMNKPADjzBjrPMp4BxHKc1T5BBQ9ZTLFw8atJiNE6WbHuJsXFyRTCSDgBSa",
  "key18": "5yGfHEYurfAk12tRfdggPFhWwyQzSwoqNLk48Xb4LsR1UFiKqnQnLsWy2HHgifEXQESuwx5txDb9xAzuFevScPpj",
  "key19": "s2ctKGp7bTX8pniwxtaKxPVF6xjjbLN713XpidzDRt7BozodLtBdHzVJTCK4St8tgX6uuUCWNNvfSLP9KLR6VnD",
  "key20": "5uraVgtybUNAJHEhKFfTakZ2cxMrVZayPJsA9aRW1DzznvHV53LzzajddSDb37h3imDCrMhAUXazyeBP6Qko7uS7",
  "key21": "4DvJ3xBD84q3mkdXtpGTaTCeYaB7h1rncEfcVBHPAYkZ4RL8g37g3BA2qG1Vq7FGpdQdTvJMUQsRbySsChgF41W9",
  "key22": "5vXZYuUrL4s7paRNxeXmqxZxe3fWEPAiTUhBw8kkUPCDu7NbjWKCEuRtmT4PdZrUXtQom8g2iAfdSW728ZM9Qvh9",
  "key23": "3KQsNqqjdedzJKKMpiYBQznzG2nVxhdpihna1H825oRphkfMr1twxJfyikZGXnLVgFkT18F5QFr8CvB6fWFLecz8",
  "key24": "2kqvZept2Ht6gS6bCwzVfEu8nWkjbmGWSHy3nmHjtWcQty2mfP6xEMpePncmTyoiGLHUcAwJjwM48cfMGFcknt3x",
  "key25": "3ZVJZixts6tZrqdHJw6XVKQ2fxsuwW5T1HkrbK89tQ4hUHYmqTXxFMdmMu6FE5vgpdJsaNPL5SKwtSW8nqBhtrqd",
  "key26": "AmfhTRtkm7F5rfmBi7DJdqAQHe2A3NY1JiJuPxQLbGYo2RQXSgNhaRXaCkMVAWoQ94Pkg97K9f6AhbvZiVdCSzY",
  "key27": "5dDHzjmMVUvk8zWj9pNoSQgAZWhoRxPB6gyG7dWQUof27TidBG9u5cwXeiL1TpX2VqiTc3y9YfHu6waSTSu9qAwb"
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
