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
    "3j3v1qzHL6VuabRizn6zx79sLJMUvB5qUuzRhSBQbmSpu6BsMWDqrMzm6e3vcFvoioA9hRUeYtVXBxgVujKrx5wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrbAiR4U3VnBTCLmvL8AqQNJFQuQCQqTyX2gNYHrpzJRPk11XVVWkKCWiaAF1j9objxBfT1mCvPdQvtf7mqaFwK",
  "key1": "459DCT28Z19a7AFWhTMybVg9YrQqZk5K4Ao5DL2j2xF7BppDrKNiKWpKPLQxzXmAj8Y4w8BQqRQE6pAYuiZsq8Gu",
  "key2": "4vaKzFMAmMyrtMnJYezMNNResZJT1pD6tV1UJw7hHEaLc3VgmqJ3FpQ6uJeJfTYVaKwVN4G9VaapuLuyNcQim9Rh",
  "key3": "51zJxjonozoqGe8ZL1drkDpQZGqXUj3r89tc5L5hc2QLrHXwu2hfRLjAeH4K14NKNbiar41TUCmgXDTRHzTvsRY",
  "key4": "5V6hDYejyCCoQVVygCecZwMxfETZqSFjRGkxpDEqVLqVWZ3z8bC9WxBcGX82vWaNZ1W7ujv6ZdheGV8mttSK2wZU",
  "key5": "3tpZVdwEq9uPxK1h5Yj9LE453hxyoCtYa26nnz9DD6NZzSjTP4ARRJi8JaPUH7KThuDM3vQ6LxG5DFw2RQqLiGGe",
  "key6": "2Tr3Jox5w9s9Jt39zo8fQhenGHrMCvs387zqz2JVSDNts44qsABsbXZRfUMvmZXZPRbyucyw2fHCqUTzxjHT6j5a",
  "key7": "yFDtDpg3znM31dUwueEPkb1CLrJFJoRV5VPeLTqdqANCDntwKL11VfftLo22hfUCNTtqSLnBQX5ytS9crzuPA9L",
  "key8": "5dovj3YpwCMWBQa6GUKdgdQuErPxPfTnfkXk9QLxjzTQFMcwmKY5PH2vdHxu1mMpuqevJwVy7yRU5BgxQMsouw1A",
  "key9": "4FHXcpczNQXotokqJpcsv1KHzyeuFds2TvRj5tH9DFbfvcqrGRkKERtPjtYte6b1rXEd6THQKYsVgFiknjDhXPwT",
  "key10": "fCDRZykmy5JorFg1P8veKKenZTi1yXYEVoDAy7YoAY31odza5G7EWDC4XJH5UsVmrppq5nPWyZBBEVMdwHdfFuM",
  "key11": "7tLBKhDcvm2rbMhTe7fwpKV967NyB9PQHoEMzAAC77PREzYfW8jm76mkhAEr7CAnn6XFRAmcMPUYiMrznw1RWf9",
  "key12": "5T3RQnMzyfPtTcbg39Spv43g4CjhJWefbmR5uZMw59FVFyah6uY8gY1bhGaru55qw9NHkvTJadC77kEfySvhBYkU",
  "key13": "2cUatDNfEkEFKwowT4kwLxvdBYxiozwGX92WE33cxvtK8XxsNdSKKy8Mdh27tfBGeaWCgSUR4pLN6yxi6WYn7FtM",
  "key14": "5f4chbGKnwyuek2tTaJCrgcCLaCdAPffBuRJfduoMTB6Wr4i88UrEG1HSXs8sJsuwCpzisVS75CmGgSRAsbzNctH",
  "key15": "3KtRyKQy72EAT99sgMXT1VHyc6WUQPrdcgdtphMYTB8yuaVdFd9T5z3VNYDY8p6haiE3m5JwHpr78CX9yJpqMsbx",
  "key16": "5EE6zrNsEGHdi4UsYYSYnwiQNMdPoVe4LVXjqL96grnuh1n1fQg39ABR8SWEeEsivxMfXtTVCcJDZV3p91yXZ4vz",
  "key17": "3fHAm59xu1VjcD7UWjN8BTDokEafeWivbTMHVjEhVRKg7JLoXMi99nRN1ac1kemK9bjZrkJgdDdPGNTz5aEBG3ko",
  "key18": "3vxtJVWVNjWNZQMxdvUaTmW5sASjBQAy8HAcvrbAGiKcXc1VGAxZdJkPmU5TUiwt7h8Uomwf2QkUWyXE5EV6ZPva",
  "key19": "DSp6hxMrc8hck69PKwd52P2GLCwWrLm85Zi9czmazTvB6CL1yuQWT8HZCEvuKT29H58GyAi3FPT2KuZTMrnWxyL",
  "key20": "2PzyaMJFyS5batg28g8woJYK4ERNJGEAeg6pf2yrVMpcfyPnyBv1FvXHMs63zKyJpDTYQ6ARZhQNfbeJWYXu9jRM",
  "key21": "5suGiXobQgkEGb6Q6k9XyMwdepuMqFXPGvGnW8mZ3QsUk2PZru5ijPF6QtrzhFFdLsS15WxRA8zPVxzu3gdB1mQZ",
  "key22": "5EVvHTYkRB1H9cLArjU4yzXjyTbRHrDoVZhqCxVQz76VceBGpxn8igYmhV19PHqEvJKgMvsYQWVmqUeBCMzveu49",
  "key23": "4oU1cRB5WPt6mPRQHq954yTqN56ChqzcYAh9pZfmb6B1rbrdVtbbkt5bNYb4RDQMFfBc3ef1B889sXyPTrC5BxBf",
  "key24": "5ZAPBt1PFmtMiDZCd7pveXcmah1NSUBLkQdDUBUXn39ioY67yeKQDBEDcWqW8P23gBzrvb9UJfd9MyV1cK5EQ8pm"
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
