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
    "5rXCEGJ6BjZC33eZs1bKb2xZqZESJ8H7HMXnhajXAHnUx2iHrnPnSvzt2Q3gWHvSkCS6bPvk8jaXrGoYLCNHsQPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3qDsEdcPbCE8GG5gYCd5C9kyb2vcYgVQkzweudNDbvVS6wfk6fdjNnCoYraRancWbQGiXpsLkzYVio6w91zAa3",
  "key1": "5qR8Yesf5BcgkQhEr7twPqcbURV2apS4BhrPUcnQ9xugsdaVvaE5J367MZnLPsQxQLsnbp7YMN7EhSgtNjjEfgd4",
  "key2": "2exNksQAZ9Gm3xes5LtuAf2Udbr1f9hAWeQScPdTBpPM3LTNoXHUh2Rh4ue4gES4qHE63AqdSzjmWmXFTPo9EHNL",
  "key3": "2m731z4kLAM5gUuxvJAyDLkuVu21bSsGsBvd4FDNi87tbkVGbxyjknW8MN83oBE6pGZ5FRgM4FizLXHzyeKvuB8U",
  "key4": "2zm6sRJtT3TFiZAxyYeZ97iyqgxEdBqoEA4re4yu5HRAjYyAu3wnMro2A8QPsf9uGj2Wp3oL7SnH7NBNEQwKn7tL",
  "key5": "5qa5kQHnnENzVbRqmv8Np8weUbLq9g4Jfs59h2nxfYibaWX1rLD9ouyk3MijdC9rUx5T8AUrSSJannhSfcAjRJrX",
  "key6": "2roHhfH64MaHQxjxCVRbr93SjTcHqxkFb9PA5y4gf9ZkiNf8dz5gJN7rnWAxmvRG2kZNrVGdrcAeKTtEf5B2HTGY",
  "key7": "3b9YKd8YW9dVsJtEHqWqYapMpuDAc2qp5vMQZfm86VE5w62GCoDsz8jKBXZxv16SonHhLMGE7RLTmrNgNrCKyNDZ",
  "key8": "2r1Tr6hQpLpxbP8zRPvGH3TjSzSxRoHwmre2ypzwSs11TzduWjD4DYuDyiQ9KEnABwbvDvpF2PF8C64rBswXgxyZ",
  "key9": "4PfspuXkMXr5XLkicthEns6NV7Z9r19dQ3JG9hWYvdMhqQgM1a6doiATLCpNWdkuM1mw9jvcm4yWh51Eo5wqcQ1x",
  "key10": "3LYRPPEMXD9doTWmhBGsXz61rA2wLakdRCMdnjmhy52bnKMMfvbgWQnxFs2Er8wyUTXccWsfFXvo7hrXtCf1WY4g",
  "key11": "3CD2S1dst6wLSxW2Z3DmzDDkiPV7MzCqxGv8TAenvsLSiqTFmtqiwqiUabkXeW61hseC1joLjrvzVmgynzKiT6nZ",
  "key12": "2g7HDF8SrFUSqFX6duKkGMnt69nHUqAw2BzZsFcB89hB2kSJNqZKsuRkxCyZsor9RMTQXyAGsodsVRXVPdvQAXnf",
  "key13": "3kqsve5FNC28J1omdNDnFdstSFcP2Sop9uhv6rhTNYpv5oqxDbfWyC1kmL336obc2JBZYYVwaAMKfYpg1keLdNub",
  "key14": "4VHqv9euwEfmHqxwomWaazXPf7GzSSmkkzmRvVGN7gZjurAN4NEhqSSwFNYVjHFW54VUZhEZkQeBdiDz5TFiemtw",
  "key15": "3GokGpLVQ96SGfuShqNvdbSiTbibQk9QY2TxbKsws621HVHE54xru6oVsbY5gRVcUEwHnJNy5W2R8gLAiGcDPKfk",
  "key16": "2o73usFXdJHMpay3GdPGDgj41zN89jiK1PVK5EUmnoKbgFAhFzvTm5L7gmDMAZrdL7NJQ9r9rViHWW8anZcncVSg",
  "key17": "4S4K5w2VjzRyJYU8dwKrYhDpcRYZbmMsgPGPSQzioQYNAVSX2FJkqSu8yc7YCd4izn4TCd2MMS8F6J3kZCz595ua",
  "key18": "4BPPoUxgAPPo3CRHpYGhgKeS1N95dLZNe3uaG4M7hJZyG7fND6CrojHkBfc74cQCU3aQLyRyM47DkPDjLDCQdptS",
  "key19": "3S69UQ9yX8Pas5CtD2atJYqnLqNJJ2vtxLhvyPGtLdVS7QtgnDKAYXE6awDCGj5KvY55UpQFXjNdp5C7RaMWWemF",
  "key20": "56CYnjWu8YgAWngFcQAgoM69L3Pe9V15sib5aWkFkGrHqZBHCjunCUQYBuZRpNEixwWwLqHGK1yoyNsA7T9nKHH1",
  "key21": "5E1MbzpBh2T1etE6ZbtKM5BXdu6yqdhTBv1KK8ZNy4grgdNTe84zBFTs1tpzw5tUMNfmASC6NYbapD16Jsq9DVPe",
  "key22": "xnmw4kYjZ6mDUQmf8oXEZcA1DaK4BBDbX6htSJfeD2rdnCwfAsgEyu1XeykFWM5PZyCAuySfuhWXGWRV3KFgvLP",
  "key23": "5D92bto6XGyoMoXxtdFzm1DkoaAaLBSSVwDa9rpehox2JcaVEMFsBrfTqymRVqz7iTj7pH9j1uy5eJoroy5CQpL9",
  "key24": "3BPTQkjNtfqaiSNxJ6ekiKJqH7GP1oY5fQLGwGZ4xnqAV3EovyrQwNDz7csMESf4GHAk7P14Pw5CPEvDnfg2Easx",
  "key25": "4C7U9WxmeEsmavtrunTXR8U2gNgsBCH3T3dRonpLD183wQPoQRxY1iqjDcYdNhyLZRaykTaruuj2P18vUz4ac5ET"
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
