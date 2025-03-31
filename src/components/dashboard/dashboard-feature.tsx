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
    "2ZTU49fwURQo8yQfqQXYqJ17kFFzNwoMUuTTXr5FJiSPi3QYqWJ6j8amkritgwzExzsQ5R6cXHU3eaEB8y79SP2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTRY96AzQikpZ6hifCKUq9ddwimi7uG6i3vGLcBNiDW9jZMYyiUAXkMDgJjfNpHeS7NX8pLt9Ar2yFUdixgxQgy",
  "key1": "3xeK2iGdbTyFw9BfXRzDG72Y5Ebj4NtxkM5omzFCCz2aKWmxNKrwjpVz87icTLe6KToU2MxuEYi4XoDj2VnfvhEG",
  "key2": "4yaw5Ut2dzURoHCyHUEJSMFfzPuv7r5NDiPQ65s4sbj7jZp78MBCLUFV5zmwRmzjoP6EpvCBsJCPxoQ8KTCTDdH1",
  "key3": "zKqgWBo8834bqXSpJ23zAF1uw7sGqf6k5hcvMDQh2VrUgijDaXEbPUwgSz3pdJgYjVPz18PSAbp1Woks98vZf8J",
  "key4": "66pNmcUCrSzFYXw49jriNkEJX8UhwDTjym1emCFELtZK1faJjqd1YyWnm1nzh85NnGeySUjomQ472hnJq6ExkpU8",
  "key5": "64Qo6Mw31R3znYcW13DzNXuBNnHMzinwcYLoeZUeMADos9j6yrySJrnkB2LX43QArDZPZub6frbHhwEhewUK2x16",
  "key6": "4t3egqFAs3jx9VuZe2WXodeExfLBk3Jap9JuGq3MEHQb3yFZQxcNd3mprhPRWztykZ2jZ4DYdMgVZ8Wht4itwA9s",
  "key7": "2Jfk8AULwdmvkonZX4kroVMKgWgW5nmemcS7c9dBnYnQ1suuN6tMiNBYRvD96rRdZUvcxoHQvmF17JfHCG5Zy33H",
  "key8": "3xH7R36Jem7edxqfcKXkoCvLpk3pZT2bPCfDDTKhWqd5ueZtx5b8XDrwizQyzKQcfaEqRcBy6Z8EwWRqeWjFcFwN",
  "key9": "5rzkGT3wJuXKja6gs8iNn896GFjLYen4by68fVn4UuQZjfpCYqedNyFFDzu9hp7qNC6oHRXNXzh8akhq99A3TiRa",
  "key10": "4DZx4Je9Bu4kEAhwjAWUGDUZsRg6oz6JRrksDQPSBrRRrvQs1UGEGngykFxc2EhHHHKXD7DnzmjL45142TSCNUUE",
  "key11": "5agnUDUwf5Qii9PPT8bzqTiszjZybfFByUXxkh9JTx6cwXRc2Kt4A518VRx6rqoyqgVfufhHyvWpvuh21goT5VQ",
  "key12": "3hnF3TjoyUVC4FRaXojeb44LUex3HPk8KfjKNmu68xTU7f2NKJdFPpxb3vVSivMGFBZbTxPR7rknD3XH7TMc1rwH",
  "key13": "wikDyWowQAhdgjMSq2oxjxRJrivcPx1JDJV7J5jNx6KDYMCAM89FCrmsn4RHKXsJUYsUFD8weDmy5GhNK2NhvjH",
  "key14": "5rkz5Hs58EZFH7pT9Sfm88oiR764fi8tWq1ZU4np1r1pGHiWonvCGjFKjWQtn5zEprELwNxywwMUi4TLQKDzE6uw",
  "key15": "rMWesupLzpi7EgXnPCc29gKm9kVrhpbErk9sCpnMNwP4nTc3rkhCxZMCXjSwtnJXpysXi5hfHwazJL6whMMBbms",
  "key16": "5TxRQEiATSXBAWnzqvMD7yZbaiYUy23vjD8b4qa2yVAWkzHUqRKrL72hjavwfe7dX9Ctg4hQKjxKk5e8KkGr5KdX",
  "key17": "3FPxEQ8goPujgaLEbrkmM2BwRP9PTVMkpsSdwnyBBCHNupMztpFvJQwnbnVQYvyr52Tn3XBtLzp3S8rYk6p8GQNy",
  "key18": "5N7LmonfaUPFW6PpUVuEs84EpTNtKm74t26yd2vxNNwG74ZwZkg1UdH1C1X8aznwQmYTV1XgAesPcDfSD1rfs6DN",
  "key19": "Y9mPLZpfsunrNQCLvLK8K1E2FPJa9XotPBgyVz42WpEdmLMrvtPD6AgHmGNV2jqmVSd48XUkCy5Gjsj4T8uSDJV",
  "key20": "5DqeoyQnijKpLkV5DzPcQ8SnLxkufuPtF5xseEr1Y9QTtom8XXUq88VSNkSryyWMSuC8maTeyYrpZu9bmFjmrcs5",
  "key21": "3WkdRC2ZEKj1iRrmDLH3RTxeTr6DxrRkByXCUYgXuvkFDT2aULpmV1ehzktJZVBBsSrEAvVheJe9vn46SasZCKYv",
  "key22": "4eUWyZcccWMguDB2M6tQs84XjGyFwApLh8YgCvNCB1waxBx9beQrWqD5w9UH3g29ucqDnFKi8gdZ9sqBt7yrXVGF",
  "key23": "5717Kv227ttwfAbmV9wKovnyK1KYEzzEjUyM8Bxqzxw8WwKEk6XfJayJarApA7QwmLaXUzaZTAV7jU8MLyYMxLz3",
  "key24": "2ZJ4YipDqrLiViPzJBAmyHqs8nPj6sZk836QDk6xTWShJ3Q1kdQU7edZrS3MHNFazkVbZt2ZmJ91oqituoZWo6hh",
  "key25": "muUVzjzdZZ1Bu1J7nYAjqrwLGrCGz6123StybkY77RF6x1E2MWHA28J25NsxPtaKMMA39XsTyGeKvjNj6VxT3eJ",
  "key26": "3TmU3MjU3NkF7ALbsfeq14Av2JWDZu8KXzZQUZdcxcXBvzQAhuxBNgXy6gqusTywyjar5njjuSfiK2Uj7jCL6E8o"
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
