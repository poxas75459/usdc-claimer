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
    "5dVPs3qWB3kgAfih3aNbPmJagbhSopazQMXGtoMqpPWZqreTXQxc9B2h4KnZSgVUoXbbi3yuX4k1ExJCa9LPdcxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u45ThW4SUNp36NKJ3a9z9Wu9osp28cGEHLJ8dyreN7oU45nixeqRUqPdnvX5BSsMNiFW9zU3cZRn2wDzRiHCyWf",
  "key1": "xKPKjaqYVDyBCGYvL55a1NsWnYdVDFB2bzNBJJqJokSJFFxzU7Lh7BnNZPvyDvLocS3HnvVk5YoHos3zUQBDjei",
  "key2": "PxLHejEe3ncPfv8eRV6WLvKzBfkkrGzGzxiCs6rJcxLiEPWuCH4uQdoPCEEQqUNJjZrywxXL232BEcjAJk6EhP6",
  "key3": "3VXoQNSsRMg7cv4Nbu3cFG3stMVsamGk8LCoUSYEPqZhGnye42kggKzxGgeCJfTygajm5KKaRgaE8V2B5wc3yJyi",
  "key4": "317ccaopd1ScXXGbQtxed5XtCGgTiZ6w7HvD3fDzwRMwzQ58SVfG1UFxFN44RvBMRQR3Sd798o1oqNry6tFhzh5a",
  "key5": "3iFXVBAokQ7sDYaTNPCLxjTYMmtLSH97ydVDs7axhVzyQpXaGkrU9QnGsSipGFaUfFuySkMVyaD64kg93UMNxJ4T",
  "key6": "2XMHe99QoXYHq1JwTbAy6iuVNj6AMEvQuPkSbvFjKJGFcMu8UhtyR35ftrUgGtcXxAG66djGAF6NbtC5tfmijJ9i",
  "key7": "51u8doJCPKHnC7PBXHsdHwq4DcytYuEemxx6fLXz75tTLGR7CBaAwagMs4w2Exuk27qJC7EKZxCMPezkCVQF1JAb",
  "key8": "VHptTDjxfVxoCz3vMHVh5eS9AhtdWu7Vf78nQiseXw5YyLppFkAq1RwSQqM8xAerieS2KJHGW8J9Trdy2qF2P92",
  "key9": "39j7meQeXXKsPGzEj62thDUiCx6bwnDQoYamWkJ1gNqxRXSbwVJ7cGmRqpL74vv3eZrCLeoHsdxUYmPraw2cRA9Z",
  "key10": "r8fC8sCP4XEVtBBpgcJyVHkuDPk755sBfjLebFb2fSmoGwHAMstXZcU9tcHyYguLZD8aAcHz1sSUkhwzfPSpZSF",
  "key11": "57nc5i9D5PqF5ronizfxHYRHd4aNcEQVAMFERAzZou6KPkZvoZ2qPcmfP1o6NrUtLw6chG97pbHfEF5yEv9kC8xp",
  "key12": "4t3Q4sJbSFbvndNnNQrX6xeis4m6JVmQGm3X5kf6F6hh1MfCuyb6rCfNVjFX2ZnRCappHzFAmso76BXgmSpL4z6d",
  "key13": "57TY36ULxREqPZeV5Z3TdSxa343eA9bDR1UhTv8DUnaVuAZp7WvzRm4e16PNuzH2UBgiKZGo4HayxkUyF8bBsm8a",
  "key14": "3a3kAH6ccBJA51bWVJHzbcJdkf6oQhaLUjKKqjEtXua5AcArFM6kCfYraDoRjTdZDpRAtvdjLwACyWvsz6WPMwRi",
  "key15": "413VTc1VmGYMTbkuMg3u3yPXpDFYKtnzgYjyW16N5Yhb3nazx1E1QfZWac1rV1KR7SotfEHSBN9ZuEspvR2krBQJ",
  "key16": "2SR5ckbPwLTzmNpSyB3Kh8LcrfVUMvYMzjEgtG5b9JVNsetuCk3JwNBU7U9GtkAPAjDvuZiMLVQBCgzRzBYkyuec",
  "key17": "goVsZu47CWLL2LpWMJ97Bh9BQUSjqJRY6oHHSYuH3Y96Pxk8eABHKhC9Kg2si8hm4dhw1gAycD6k8RDBwVXnk24",
  "key18": "61rFkK2weBgGw17Fk5J4yvS4JMjeSszxAPUYhWwqbrE6M7LwG3h8r3kn6ZgkAq92bU1EdkJ8f8j5Hxaoubhkg3fz",
  "key19": "5RrLR4Mj4ELui7nCA3GKNujArjfb6H9uii1j19PwvrZBa6F611EyHBMBU6ZW39mhjfFQCXTiCqS8s6pZ9FjoWBMY",
  "key20": "3FMnwmC5Bq3f6tNZXiB8qTk6pAzi9YFNCUXHkCLTu1YYqRaA1hEBbUptcuKzWoMAn6hGqcamKV3GbbsUaD4SGahj",
  "key21": "4Ey4dqvx5vZGwAZQZNttyFZWDrzNshRrVUhYrfQXLfd2MxxjzExJachfEEBURraWR3kqr3VFxoLDwYZrU7zPg8hr",
  "key22": "5bsKxUFqU6bkB7qrXrphWsK2EZYUQv8qZbTLJTHHsW6h6XZi1r8rk8cBnx7uDLH2oZFTfbKUi7JFyPm2iF9tXhq6",
  "key23": "5rn7j3D31HVG9JWnLam4eyUgib37TYYBtptjdfoD52m4ezHAEmvPdCXSp7u7sXbwNzTPgRtEuj9w8JyiLDeYuFJU",
  "key24": "5Yk5tzGshBTh9dGHLwBsQVs3SN7pdfYAVw8hNr3LVEHD7twm3Q161e15mSTcGwA3M6yBYfeK4xU1VQs7Dc6VVZJY",
  "key25": "WWfEXyvfCKNFCD8FxVJ1F8VeaLjuAMMcLj9yt8hoc1tABJbNcy19kTuw4gyueZT5juriZUiBSvamGFHmqkSX78q",
  "key26": "3AomfvkhDZikMwkFZc2EFCcMm8kZ2YbKcACeUa2ube4dFZDmYocfxmLuFKAsd6cxq51SHgiWzMES9ygFLdPtHM8J"
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
