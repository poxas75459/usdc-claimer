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
    "3c5CqnGitixdrqkPCu4s9zihHYbKzUZRLZBvWCEfQtU6tLmChUbWtNMvwCMMVksSYF8Kb6Wb8UL5vWMUgUE2eutn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycmMEYHJbCC1AKvxn7s3J4L1mMaMg7qjkT7smE4sp6RLm8uR8KSx5Sj7wmF62nSpKkPiXeJTK5ZHvoK4dhuGzQC",
  "key1": "315PYhYjo3M3RV7xouQQrf5tcmCoCkufrityDRCZHGy17m1hRz9R2AbrP1jrt8ft12xvQSvcqHJyaodHNaFQoeQy",
  "key2": "a65tEZABpKNya6YDM8bVpFqUVVQKVU5tFPUrPPQMNMSFrjEyxRv9yEGWRB726GKs7D3xGxe9jWPsh2GmECCWUV4",
  "key3": "3E4qKUsbQvbbPjtQbHfmJV7eB38HubV5NGm8iq7Veh4uQmej5XYpcsBndqm9VmLXcD4E1Ek19TufxyN4YpoEMy1o",
  "key4": "i4YADhzsthKKbQfEyjNFrbWmgiQxaZCmHJgMpjfe95ZUW5u9ZZTKysYcV5TmBHFKZn2GKEJ4AqucTW47QNHaw8R",
  "key5": "5TFjF8aRDc3GQrM175dBL9TSy6NqGoj21Pz1ThS5vZTAzTgHLgfLm5kFU6L77mQ9rGMkwygGvC9rszNouiaXJkbY",
  "key6": "4LbVrc82EoUs6RkNpRYeq1xUEwkVvJRBvdMwVzbTmE7Rkr7CHKAyUjAwUzuACHPF35KfUWjXghFuY4RDbgF9sk6q",
  "key7": "44vPsbgkpKT61yf1CDBpbbsmzMv3NadPakbHhgUwDm6axxhToJXa2Ut5FC5dxT6Y4rqmYcj8n2cCqYrZFbWrJEsk",
  "key8": "3CXc9QG5mWTNdEp8MS9kNnp5thVTFDKq9EWgya9sPxsWd7WbhBrhjd8P2d787ss6NaPE46R2mp1Xc8hTvCBYF86C",
  "key9": "2nJt1cw9enD9wEMyvWwct6nefDLy6pSLb7uuJ4BP8e8Jf4r9K2XFJef1cF8Vu5QpeKvR4aUFmDBrt5WK73D3LaZk",
  "key10": "44pWeP9abjeSNfd8iD5JMNMWqMv1usURMSzKnguMkRJ2b8Mt2CFumEfnccywHFL9NsiWEnVejyi9YYoQJJRYe5c2",
  "key11": "qdZEkCUwxSR7V1yxKdjpjbGWnzgXD47Kz4Sux5WZiqy5vWGqHhx7koYEAj5yMckvRTuDGrV99K1C6NGhEEqgrjW",
  "key12": "5cmLuvdDmj7pivTajadqJ7TbHBsUKvy65UTcWCVhxKofdmC1LDVBpceVb2HpGQDQy2FZfQi9zkkTq921X3TLGa8D",
  "key13": "ZA1fnmVEyhTVkCNegYZ55g8UzMW9y72Jkd9jVsJfXZMTVWGYuF2M9c6ry1peqQxU9oXN2E9KPd9uj86pXCeb4xH",
  "key14": "31m4rF5pUMnzgZiG6Zob6SW1dVsQMMUB2dCZueXgYW5GU7uWwSqaPos7o16bpR2dpGvLsamSPUGG9WEqBQ5TdTd",
  "key15": "7PWvP4yJifyQjz1egF8xs2ttAbibtUddibrUHKd8i7NhtQb6GKaJyxy3NkBQNMfmsd9Hahpj9NWDshq7vHayTtf",
  "key16": "4idgfhtpCoZAYfudjPxuPFtCnmmok57PdE4d5qYoaXHAsy6w1tEBffG3qFB9qgh5GMjjchcaJHVcHgDtzZ5jV8YT",
  "key17": "21qtN3RJfmUY1vFNMKfGqdDSiu5Ux5SVtFHfFKdor9ywkjT4tTWNb2SJVsCH8wcdBD3WMKkmb6UCpu7VnRQcnY3R",
  "key18": "2dgpNYSnRbhYTDrKPQCCa4yCsQCG4rZegUA2deULS7y9gfM4wP6eLjgbjAhcgqrySdPS8VmoUSqH2w14RDmpc8d2",
  "key19": "22RDt6wt22ywqSATPDy5KNUKhW755QPMenxmYDyGR6AWfPC15oKDEPr2i2HibnvFsSMZBqbG1CCoftitFKEUvibv",
  "key20": "yRrwNeRofAXcVjeun5syRANPZ7t9eCwkBXfznSxYXbjTFL9jfd5cRJKcUnCaRdmqDasXyQbGUn691t5AiHgUzjy",
  "key21": "5xvBkbfu24opiD6cQrq4aBgNCNqasheUUaVmtAxZ3jeLJrUGfncJ5pr7nMUVNsbx1x33aEmE17g2JhdvQ1s399Jm",
  "key22": "23tKQ7fVyt8NVF8mPhth8QL6Ao2gvGai9vFfWW3TLcLUZy31XUZaaVeHwHHFojy53mKskXcbcMrmUdrhDw4v9oXX",
  "key23": "pEmzQtCsS5i8THYeEuNUcV8NVbCpY1cYEGcBNqbkBYTibrzuA5fSJFN6Kuets5s5SvJQRrLtfCv5NkxUWbH6FTk",
  "key24": "23eZ9bhU7wMkEi9ZbZB7Ht1jCG7TGLzGY4aJmNJ4BiGLrinMRz34zJvap3hpJupSBidr2p7sGbGWzt6gqz7P2pu5",
  "key25": "nMBorcUsRUzhsQ2i99M1QzEUYKUdt9iAmMEpfx2rYzuzRHcH5es5Cmjs3UfTQooK72vDEgYHeM9sjodKdrVvXbE",
  "key26": "5DAc2ZW9MPuu6w5YB85w9mctfGKHmKnaQaDafyvjgLNxfzajgaKEaPqcU1C9s7q4N4THZuuwVbkhbtHfTTQon2vg"
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
