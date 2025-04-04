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
    "45A6DQmLaTEq81UkPcP7zVSXw7j79DXTKCVFofFCE6sLWzwvLryYnDQuRDwq6oqSsAURYcLQ6C1XukKhECwhF3cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXDESRVCjKpD5sh45ZNW32TZ2oLHXkh9Lh2BtuDGkT7G5VqGqDcUjs2SNfThnfCQNtSV5AbjBa4yuGwAtMLQeK8",
  "key1": "1Zrkk1kV3fANzmzy6tQoiU4uxVQnwiq136xDfpBWR9tzWFPGo8r9gwovJ8bK8L232DfzrjUTNDQ4dqEsidKybZn",
  "key2": "tkcVsvt3ZVU1PKWNd5e2qhWwmdxbJnv41sPR5UuK6AEya8sbVTRG6oGE3pqZgSHsz4wKxZ42dAiiEm2kYDPscyD",
  "key3": "3hHDXoHBAAuE5Ksj26dDse5xWZiS27pkrgEDW1QBMa81Ni2j2N4cU7tdhpKGQP8X8pXGJEJm3mewxJPJ4ZM7mp8f",
  "key4": "5yELMkSqNxfaSuqnS7PFsjx1r537dtYv2ZouY5LiD3a5j48QaXoqieeniNp1KeLPB8UoW2WRfDb8Q1j62hW44qDs",
  "key5": "3Ni8Y5ewLZZyw5GqVQWAYvWn6bpJN7UT8yos6T3FLyFo1QiBJJNCtHwKuLAxXk6FxBWgmDDv7WXpiSCqLnNKWoXP",
  "key6": "2XSM1hbpya5ct5SaM1xuW2VA1H155cjGapU2xLJrmEr6PJFhBxe4U8rYZBDX5Ci6FZ7MxQdkDUGzeVEQWcxCNH3n",
  "key7": "3zRATD36isX1XxrnfBH9aAHby4AncXtSF4NHjenJydF49g8YSbEJfqHU68dtY8sB13Ztsbdm2Bk5jqo2daw9YAuA",
  "key8": "VwPkFsMyjGQd1YkHmtmfZfKXhoChanu4wM9CMMboroFMoPQuVE4rx1XFcxX4ZLFrPWG74BThs4G9u3JoZUHrHxT",
  "key9": "4i1fDwPkeiew5jYR2HMhJL9jF3i29MuAbnZPTCCx7Q4eMTV4iwoBRTbsxhcyCZWDSH4Zj1YZHBqk73fZ5YgpU8HW",
  "key10": "5yXHg5GEdTtc5XukRFQaSDCvfKeXLTX8NDg1EQjpohfBL83e37tibaxRMJz8xSg3afRsHNWVDZ5HHr7FQcPwC1H3",
  "key11": "61GW3jGuJWjPEbLXe3Z1ygNuhRUPt37Lv5BhUdgLnLjVtNGdTfagpX6PNeiwAUoTPwzfQQP46BARiqJHWSAfdghJ",
  "key12": "54d531GqEowMZQYWhHT8G2HEcik2KAtLzXMTPhmiTJQuBm5FnqF9ov4rbHBZfb67g4hb1kLSAEj4NbRGJQiCQXxJ",
  "key13": "56U2JaaVUDc9Y7m9capstm39Xxtbyp25c7SU71NDGUAKFhdyQkapBxbWWibL6H22c1fVdEgb1GwiwWMn7Tz54kAF",
  "key14": "pS5jPrPbKgVuVMbeb1RqJ1VfV7FAnLZC2m338kM5TGiRHTzCuxkt9CVtBveh383vRZXqHN5YiqMKCNiozwcoeK3",
  "key15": "4khKCbQaj39v1hG3DXmf8YdvJunGdN3k4V3brSu5BVxuGEr6cAnE1fA1y1137PWBFhmq1WCE1A8KMZAcPrC95BvG",
  "key16": "KT8zL6aLKE9LqFoTD39DmTEJsjDxn7b961QNq1bX8U8QUFgTtHidp7HFrduYG6ny6Tc4FiGoeLcaxMk4mNqw12h",
  "key17": "56f2hQCZM8su1PTJ5xhGyQBeEecwy2Q4gDGZAFGf5prhet7iK5nNfBWfN5y3Vq1sf8zbVC1XPFWpaneHZdVzpjcS",
  "key18": "WGrkzxrh1SitkkavjQezDgjBnLZCZXXSwEJjvrwLXWbuA9jF5bkRDKcJL4tKqc1JUZgs9kZRojHBmHyDKGXnYa9",
  "key19": "2G754P9ar3z6EViYdXZVxkXmutrb3AiXn3X4wNLCrjN1uJj5SHK8Ly8Co2w8imBG7Uny7ecSkGoirrqCtyddDw1b",
  "key20": "53aFZpJFkAUEjx7J9qVmYoHkGx23eGwe5d6nw9TwobBnBp1eh56Dnh6KumvzFSs4EKSXVDLryqwkf1ACszMirpMG",
  "key21": "4qd3dgbX1UCBhQ2iWE9a1ZaEP5Cm3rpPEY4kkR81kVu5ZxVsqMw2DPJcxZQduoFWVPZpJ6wEi1fE6wkCnXDMJYEu",
  "key22": "5pXywkshXaqSjSjJg91bzGUXwfbaRhTE8PRhapqF5bfSKGhSEBtHhYCFBeehW7yDB7pQqeYQZWXs4f5k3HL4X3hh",
  "key23": "3eoVKzkS6hNPAkpKrHsLtpoW5RFUvjdoY9uDARgzwvbtcaTzcz4kkWEMgYbVTQB4dmGC4hDk6DnDdH6y14B1vGYS",
  "key24": "2A85yc44YksEDa8XJ9jduEM5erEbNmGHevdG5sYo4Rg1N217A1M31gkH8GGsZjfB8apdZhSK7LFAst6zAVkXXZoc",
  "key25": "5Xejw4ZVmQkpLP14EBjnKxzPqBiUn5yMFUeLYmL5LUrDBMEpRPLrHXrZowDMQH2SPpLQ6PFpfSUZN79NowcNUStF",
  "key26": "239PAjQtxMBPMQZWLMrTv229dB5Fq82EsvEBwFtXkNgLaKrqaf894oDTGe7oUMFCzKqrgJcsaKNFhj3SkshkPBhb"
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
