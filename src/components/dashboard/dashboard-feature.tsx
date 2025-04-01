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
    "4TbotpUF4jEVTRABHi9XcyZeFMAZCs4bsomZX8koqKLKq8YMDQNsBRuCkrkGhQiSzcXn65f3jb2LMU7u1rDudbUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrdeKTkrGscWfToHyQF1AjuUpBmaLRxhqkMrv4TiDNRUQFoCCmCd32MT3N4TzrLYAg5W7kF1ynUUDfMJUwuP7Gb",
  "key1": "34mPfBnWNXBdXyaWZt9oXds6hyceQbsM8NL7yaPLMY2gQ9mpzjXGwMDjdQEmfvwpn6z7Q6SKubpQoyM8PgtXVXxQ",
  "key2": "KZefYikQNwGhSoxjERGwfuaXoGNb2vgMS12D9pp3na89bM15z13yyz48REhY42sbwF5X4bQKQQpqpqFj5fYKDA9",
  "key3": "4BSUkfRAZMiV749qtUqgcTndKf3ySF34rG1kVwwa6aDCPMQHouvadkHJSa76UbDJEnHhG5NM5dwXgUC5X1AV2fDN",
  "key4": "5cVXKa3Sotny4RCxseUeEDLBng2rvqxvGuBhnMHkau5ukFjh3spjY1pYpAr8JzgWHpLTwrYGKwxpctMA7X6mJjvE",
  "key5": "rzRADoUAyAXWQviY3Fmdnuy9RQMymgJBPaCMGVs4yRTmWYymgap9ACUjWnb4dHpnHw9caATxDSHczuC9hJM3fkg",
  "key6": "2GVDw8GqMmacF1g1vVmB12NcUNtiwxVP6amkfzt1ghtLDvRHG573oF4HJFkftstgdo4upQ7yoJz6aCnLUKgUHvKP",
  "key7": "6VYuu2QbeCHkMfvdDdKoLePT2se98FsB2vr3iz1NvDs3L9tXYHNBuHymw7hfKgxbCyifEgZEuvmUJcSYDPk1Hxa",
  "key8": "54SG8C8ZCd5o9xV3PnGp8YM8VVVcVkXdvr57nNB9qknR9Gu9ppT6dxRy6wsBxWy3XPPKn7k7ApDXR7H3CZjVy8y2",
  "key9": "NrXTAb7fRKuGzqnH6kcjL589hPCe5GP5yMSG5tzKqDUbG8ajreL1NBJEPbt9UkaXwnjJP7BCEPaAeHkLBdGmEgr",
  "key10": "5eVXy8mYqAtpicfHvV5SMZyq5YsU4bb5RTdDfLKChPvMX3ZNgYLCiUUSeADcSzGw7UQbnj4mCLedBN6j7TuYAXJZ",
  "key11": "32ue1oP2saGvzfXyz4FFzYb12RmDLZmH2nKJWorAzD7cTtRTchgAm44JsEmBdfwpJa9tk44ZbQrhJkqE6TtPz8UQ",
  "key12": "3DFawr7TNyLfL3iZBn2QJLwpAWEMygqQoCRRFucqNph3rE2RJgScCo7BLxrMPBExp6B6AxNkBweXxUKmYZ2ha4eL",
  "key13": "4KeUpm8rGUi3MxRzQaszg8v6bkAZ1bugvTwhun7XASMBbYTbRdC9no3aXcNPcxqA9xx1ovi2nvoY37x8nLgkdeLf",
  "key14": "4zQbCgQRcVNzeFsVYBZxox2SvMCSiWKwr7hAroPEV8m94g1XqJoYyrrnhEPj6Kc2MevXYYbpsg6wfsQAXkdyWz7S",
  "key15": "2pXn8SB76P1N7b5Dcie7YiStpDUCi6N6de9SHBgutAhACPVcUQmR36qMgkMu1SZoLHkFRL1vnw5bEFARG3trbXTT",
  "key16": "4E3pnLTc4fZmTkMvoUQbvtpcm8T4txDyf3MdGxqTGnFSMXKFZVhFUEA4e4q7FfnjSWPnzVSJbynqdMc8S9b22mRk",
  "key17": "2MkkBxrUxo6QvTpSSZ2Qz6dR7NXapfvM8UmfuU7CW8KXqgvXVt9etURUbioZUacXYfxD97UTPuB4Tm9u8CvXqEtF",
  "key18": "25DoebPSyTF9Yi2JKe5oo9bvvP2p7ZwW236BUKcYNq6bcnyUA4MhA91p2dGrN3N2umRFnLyNGWV1KtVLnCpFEgvy",
  "key19": "3WyHpPubg8HYwpx8qqmaKFUrxZHdqsrLHvCayvJAkRxgUp4F58HNTiEuewYSB7joLx5x1FmLm2P9gMWWPexDA6Qz",
  "key20": "2gNYVoNHdT9FLmoL6v8KvC1jizFE6qCXvYfet8SxQBjrjWmVheVHgkJNHwYjtz5LQpQ8LQBFLXWq5vN4gsVQtG5w",
  "key21": "376U89x1fPbPRXTwkJLKRaeKwz7VJvkFLNWZp44iu3GXFQQMWTvCW3bDRdJYWni4JRoxM8mVvrjPwevwSqKh37Te",
  "key22": "3EiVpEnHY5jCgm6Q29LUCdTSC7MvNwUSJMLK35SSF97pJWsiY2tT2JFMTCvyDVqJUfdApFxhXVTrp4WChsb2sDEh",
  "key23": "3bW4jNcp55oAmkzWZpf8W7qvyJyEgiSvkXU1B8EFJPhUWSms2ZHHkGUk913gERXPyGG2xL3fn5kN7HQb1nGTR7yK",
  "key24": "QTMD7bTa67eb1vrady8z7ABUiKKPPsCrj4C8mERXTL39qwSEaYaENqWwwTZXsjcpCiU2VWQ5SDroZu6EPt2ZNi5",
  "key25": "5buHqXbyZ8hpZipo3MxVNqktE8oHvLN1VjECQQzoaUUj7Sz7DUeA9iHFWeuzTRBqAasQJhFGrxWvjhqWiubtSMoR"
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
