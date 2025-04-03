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
    "DVP36DGPzPkzUJqLrVv4XG5MiV1XXkcgMxbnpuEYWZ3aJinwtrDqdCBHDWWN6VmaTaVWCDsxBgL3ngRmXUALAWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dat3ANdrkoN73UmR2cJkvv22m2FGmAJ6GS37YFbD5sEghyvnscJPrpnys5Tez1XZEq1R7QqUjbge5nBGQFVrEWZ",
  "key1": "sKqxp8Usr5Ma3GwfiUbET8L3p7541GVUgCnoQN8f3hLLfZY8nRe3vb6AXjsshiY5tJiGS1p7TMA8YVVZ5nKfckj",
  "key2": "vjd6HmQkUbTP1Aeq86VE7p3dK83Ppjc9F7xa4eDARiZnWYSPQosbVmnMdX7gzyNZWsyUwy9NbWnVGV7zvSf7j9K",
  "key3": "36q4vz2ghAbnoLZ7BE3kcEJZHTqWZyrQsZJUToTb2tyHJCRnq6PQbGMk2JxzvPbjEBFnD3nKXrNhfWsusqqb4bXi",
  "key4": "JJ4V9PyYfoT6xZJWXELSMkD6NguZAYi2SYn8tvs6iTB9LBYYEjvWWh2CyZd7iQT2fThVTsgMXaCDvLvtL3vYpGw",
  "key5": "3CQkfunTiFyuKYSF1PU85VVrtoJq1dHzvuvcAdTBRbVgKUwxJbJJhRXtNRhgckACtfAvGsHHWNNsMZC6oKyd5qzV",
  "key6": "2yqPncUKCheAPfmPXTxVYYXn7gTAPn282bm1oJPmyGkKgsSsQifFk9tcgeoKZttqhvpGCWbXytUNQSdmf2XvfsYb",
  "key7": "4byvhpdneUCzoG5TbjQvGbUiVz1g3Nuk4sd3LiMxFHa8vSaEX5aQMBrHY2cgwbvVGtM4vm7DjWg7C8evy5DQ5Mtz",
  "key8": "44qyAm1V3yD6vtxWLjKvCnEiKWhVPWBpz4RkrJb14xuzpexxhMRKZSru4ni5jGTJS46A7aKFP84aiTAeuw9k5MUA",
  "key9": "4LH3WGTMCDVMpnbuezddWc16V6V44AoTs7TaE121e1qZfKu12DQ9u7TQRZ8Dx1u5ddJQst5cERVHVABdhfPXZtMU",
  "key10": "3YTUXSMNVTQRNXbbqQXDFXi3kajaz9C9TquM9Y5yGa6CsVpjcBAMKAUPdf4NgKezBH1NEgKN6UBoM5P1ThGRwFWt",
  "key11": "5UqXgbEBz1hcuCFzx8CbyZ3u2ykv6k6S6ohCfh9DpTWjmweA1NZ547xY8PQAdQD98XuDBgEJVAzskHgM9tHBHrff",
  "key12": "iKPzS2XMRL6Fj3c3ZRSXQpkqkdM86KCTMJyZ84Gapk32MwzVNdcwbaxrrNUwcWpFTc9Ubh2wMR1ikK13N3QZEpZ",
  "key13": "2twhHhr2Cz7cTvX5YEBTjbjoQ4PmVnJEUCrgFQEw7mFSv3UpJpS4nTR8EuESo9gFGtgJqKZjyaUwsZpKBAcNx1CZ",
  "key14": "3wL6jw8ePUVdz5t6gcUxS3jRny6Ph1MdQMK5DwLzocLpgMzudBKPBoZc4zeKtsFqM1itiWwgjyEYMxYe2NefmaZC",
  "key15": "5bQWpbVeMHcvmpPJr1DR1ysdmbyVxudmJhRS4AFgXJKABj1aJPy6Aaj4z23jpdf4Q163FqqjZTJUfrxXvivLtgcn",
  "key16": "2rkP1dqoqfZwbNeKao5468rERVjg5PXsAHtytjVVfy5Q4eNuLtTeDNG2YdFMYBup1nUkWkGrWYqRdxb8wUKVuFEy",
  "key17": "49HbhYspbxGGYsSQu21JMsfSWuXo8jwHdQv5S4o9VKkbrmMued5GCfUpWkG5qHqTw4Ys8TzYsqAwc4ryn5YCSRbP",
  "key18": "fKk9gRwAoxoNWJrUAmLBxhyjsohVhWNcg5t5LDRHyx4nXg8WuJy8aTy9aybuimWifmh9SmW7CgQJaLgWkrp9JrM",
  "key19": "db97Yrf7imfqkoDAEozUG3kq1UdQh1b81arMQvsSxac6fVpV9RivWfEJUSUVGMdjSen1kT21bjtbQKvf4ZFS3qE",
  "key20": "4ALwDNAfWKVrriA78n3VkMvb1azui9A8zhwadfCHqQYAN8wJhWp9BDzZbuiQoxUokQ9JcNqKM8gdvZjRa5vSZpvi",
  "key21": "3fnU9S1MuBfniGqnt2QG13mMTJJy5oMBouserb1FAfzE6k8WUXSkB22aG995bArrmvUqu2JrY6dU289KpMxAikRt",
  "key22": "2qWpXJzycifLq6FEG8JgreXBhEyzmT79sA7WdonpD1kMomdWNG4BAYLHwk9ckGaNPV9bA7Ceor87L1YqwU74LEty",
  "key23": "Kfr3fPsYHFZmxP8DHULcaoxzqkQ7eqZNZwK4M2M342KA6Dei3cd1AJNNeEJ9Q5iRuaDeFvhrdDEpqhScVaGgYB9",
  "key24": "3ESYc14Qjfajifgy493QEenbrSnMg9pxAQiSNX57B2feBEz19Pn91P1Y9p4bpoAozYNYM3cS3y4C2zZGddj6Lpbt",
  "key25": "2YpvhTQnEC1UQuwqr1SuQwcn9o7s8g3dy5N51LthTz3dNM59YxEnFTwbFJs5KUaekcxo7TR6AePhSahqMUbAEevd",
  "key26": "FpgMkNFLkmR2A5Hn8cu9SSGGTxKaGy5N3DW8a4DzPeqdoD51TrgSZ2Qf76u4bFUE3Zwp1NxJ5qwbDsGdGw7LAnp",
  "key27": "4mhgH9iAWN3YCaKnktbBmBgPb7i4s3U9nyzKkxs291SAcuR6Eu5VM6wn2E29HCMATNmpYVv7MkQ1Zikm6xaDUfXY"
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
