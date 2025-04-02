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
    "2ok8kYLWzhYhiUimLKvjUa44vCeC6cGfoXG2bggrGfUufiy7BC168LiwkWcrSnC2gDMCgKXCHLMKSPu18De9PVrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YixHKqJ9Mduc3Dr5PKb3mSPP2bVkDmpyhF1wSSyRAP7bCqZAhRN8AbG4Cfdfw9USQnWhYv1qiJLCfLB91JdivYb",
  "key1": "4Qe8SL9WHKXJsNAqbqysR41c37T3fkrp6uyGuiJ6xubiz5YdjbigfZVgHQgG4WLPdRTW2bTjDt4uBK9PpjULUTfo",
  "key2": "35YKwEJZrGGxa8L7Yu5MTU1guaLfFA9c5fVAWxajGtRJHvkkMuRPftL4ERfbzsNMK1AcQxqE6f4dFefaTLbR8knf",
  "key3": "5YfMfsxwUkj9sPHVrXvoDiVfe9Kphxmh2ZRKcmmQitUAwT1AK9z6zJcGKMtDmyUudwQ33xrYDs5iEX9yDMxAYjAd",
  "key4": "3uefVgZPbxfmPfNDzWwEffp3xiFphrNhDMYwPamAwSPgx2PWA3bVDm95osSsnmoS15UMVeHtZ8u7Y6Ab6sHXLSC9",
  "key5": "2AcwmaqWYnaDY1RU9oEKZraAkXYxcG9He2KY6BGHqBNqchMEm8bMMNZtKFaSCCf3rn4jb4b2S1WQJo6gWci2wVMC",
  "key6": "2wLD1MWLNTCDpnykiwFRcnA6oDt3zHTPinprSs3S5QiGRxP278C4mpaJathBCW49PUeM6aRRYEMtvYLv9B3uwVT",
  "key7": "29CsNCmWU7t67JByfmiuYKbPUXjN6BjVeWLVGtF99sntid5RxV5HJqt8p5ESMD4GrKkMKJUwP7tm6MMEmeCcd3Vc",
  "key8": "3q9ynUNqcsYsWdwckmcHAqRiaQLovyQZPoASoSdGS8EKj9Vb3f8pbuZZiKKKzJJjqjdHxDqxrLscXy8fDQ6arPPr",
  "key9": "4J7SJrJudMH3N1qiNuXKPW6wqr48FDFHdUR5DRiW1VvgMPQR9iVRMwjBuCNdsNmsvXoqan18RiqFbGU1zBSpz24g",
  "key10": "hyh6tijxf1KLj62YiYPVshhEV2LWP2uRQn3bBxQ4rwZtkKnazUwUaQFRKHJkS7EUmoTqcCaAwkdDLjXX79QWFFb",
  "key11": "3whhx6NvBZCFJ8e1dtWDV9azfqsLph1XB5a8V4sDWdjBxg73Bx6WyMev3AhvEAWe7359iKRboVZhENQ6Z94QoQZF",
  "key12": "4T55ZThqAfxQ7nN69eyER2dztEVPtjGW3DMADZ1V392CBd6RLW6cTsaL3cicHmr96ooFVcGcNjx8LywcnNLTHyFc",
  "key13": "h2LWfXQ92qyJru4X2npRtqzGgc1ACqYEx7NjWcnvPdW6J1HFqHehsaogVKGhBnK5AT2775meaJ5i2XUXk99bo1m",
  "key14": "2L6PVALb2dL2KoHmVaJsQMqNnciBp7NPCwgXbLN8wz9hZJae2ApW38tAaTgxwWphVVaAhB1JKexwMoqoSBAP8s8e",
  "key15": "A3fmLhwdTmxKvYRPvxjd8DmX9iR9hkrwmjvW2RQ6Lq22Z7x8Z3wPza4t1Nj9GcmThhohYJXMSQpPDNvY3dcx6Gk",
  "key16": "2UXGAmRMfUhrhK7XsrPhqKxz7TZRSb78fKhgxPexKBWR2TvrnsP5npz48FzJHA68tfJt4PA1H2kf3vxGqSjFzSf",
  "key17": "T2NpebceRjTCTgHD9nUsGLE8GsNJt7Bxh4fxqbFKvmcSFt5J3ueCpzNN8hteX7ZNpAVrJUTgHu9oswzpDocjUtj",
  "key18": "4Et7k9q7PHqtVaV8jJ6Dw7zNMMgqsRRmgzGTeYZBXp3PAFxKr2zS8d5YFYtzt5Hj1bnknN6LhWsyKKoWR9nCHUX",
  "key19": "5cwkerEe8WGThT26WfRdpqEMJLYijVWBZTN52583VixZFBkH5R4B3QD6iFzRGYEqabAZMzz4ed9YnDuGvgZ7LWyn",
  "key20": "25R6jpScTTrmS3Ye2cmD7txwDPKkV8dyY23JpSbQufM4gqromZs28fHNzb6dW9oDPs3ksAww8PckFJ6TwxzS5PbV",
  "key21": "3UraW8rLo98NjE39RSJo7A2kvp1MKDqG5vfrK5SJyfjtgfaVytm6Yoz8oqJjdF6n1wJqzsyCgjWKyuoMdETHLPRD",
  "key22": "2KFM5CW6QVD2otzFDsWSY8NRuzr2RJoTNYfyc5tEXdfCSUYdRroAvib9Nvf8j8onQFdmvuS36wtXyozrs7w7abQT",
  "key23": "2mqDqnBNDGsrZgrX1Q9xHJgiWjKdbBsjB1xpniQxMhdRVVRVPW6kGASchRpYHakmfhsSkRiMSaDvaCzeTE6FKw69",
  "key24": "2mxejujFE26R6eX5gJ7BqvE9mhdeSXpQLkzL1jG7e96k1XsfDt1KKyMYkCG5Phw4BJdZiKjpzyN5rvDUHUemNQty",
  "key25": "5iL67T16PUNZ6h8d6Gx3fnxw6BXhyn7UMNtWRo7iwUSFUuFbeRWHwwvDK1CZGCfMnAQcrKnV6qpcbvv5d9z2YXCH"
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
