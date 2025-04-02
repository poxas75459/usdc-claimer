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
    "3zF2eBAzYeaYpHzzbiAZfz3sf8m1UKWbgAh5xcpSLYjGTTieQ7ZF6yq454jqzeyLeP2qs7w55G6x8Z2TdKsU2YvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6oErZ3zBdSGrPRVbbya5qwnbog9CJiKYAjDiwRVsavdyGtWUrciW1Vx9KfsYj8JpiN9yAVDVzgDL7af2PxJ2qV",
  "key1": "VUEqjz4JWC4kB24XxAEqYKPtn482R6BXH6CNT2dqPmZ8Hnv6Cb1Bc6qmop1Ss4vQJEJkgmHLTsq1ugDBgYjYRf4",
  "key2": "676s5yGndFog1M3k9GjxL1Paf3XuaJfEd4b9Lg9jwD3M51UhLR1fUr88cn66VRdC8kcWLPNZ5WBhpJVUw5JxyyQi",
  "key3": "5N7LhDmEtzbogcSpoBA4QDWfiWtARWKPu4mFU2CeKDYGwk9xjaVzXyMAa6kQJTxBP9NBuSaUrQy7w1PhLKWKD73k",
  "key4": "3an9dQMQo36Rm41Bh89THDdtXspDgDMZAfSM4Jv1jeLzWb1CQBC8ZnRkddde9nV3ShWpJKTznb9SrU18chXnkfWh",
  "key5": "26pZUTzYka38Q9Xv6uJr3qNJfGfrneoDCh8MTySNQDfZqeq2CfxYVsiDUtuyP7tPnKzhQeSsXRiQHeaAwczPswJp",
  "key6": "4ywnKJCKpxxdyjEXnkGaw1ULT9XQBLD7sjF7xQuJCpTvfNYy2jbLuFM9uSkss7DwNjHUnSzsENTGjJttgVpZp4XC",
  "key7": "5PT7bcTpStLkr4QUUA7L6NWX4XK7U1PT56tPpJvu75AgQ4wsAUp8KXpzUrvpuufdQDPUBQjrX8k48b2BHYqJNmtL",
  "key8": "5Lf2sgMge1o1uVZHLtpbqD12ec291YNBGsbY1EByw8abSZKrm3N3tFHGHJKtoxqjoeSkHDborUisM4zGJoVi4NQv",
  "key9": "3uyPN3x5UEnNfbZBFZ3LqN1Ce8XhJLtw19h7Rsj3qYNDXBVSu6R6MVpA7M9xMYvKBEWjfiAHLuX2FLc7eHzTjBCJ",
  "key10": "4LiFkLZjHppjazqj1Tnv9w9gsPtHqiN6ZoCTLen6amSV1q3NMNsXCHSS7AEhvxvPGKJ9K5NfG5ucycUuogWoZ1f2",
  "key11": "4zjUF1e5xkLivg9yxX6ZhNRqC62tbCcm6zPdk2xEx8AzedGxCpJxU7LWZDMvp6fR43GAhzUmK6p2B8RsAtVts7Wn",
  "key12": "34ncAUJRGUUR3PnfVhrAtAbGqTjerv9qA8ihcE5nQJ1sBkiX54sTVB48pfrVtSFHmpqfDpVgXQShrpUohhwtdACR",
  "key13": "22Nm5bUZSGa9ywf3gR4bhf2fgGfEFu8WySbnr5L7RJderyqnzRf4AqchFVHHiXFh4gYL2QtNoT6zx3njs87C547F",
  "key14": "2JvCGpNvkQenf7hSr1PPV7cHFgUqMUTdY7zLDxYgpYE2HPZ5TwJdpRzFGBgMMzt7PrimyLAxFZ2wKNmvfJyKp3eR",
  "key15": "3uBB5kVdGDkAJeEbv1sBG7b89Ld17c9oFjhYycbYN95qz28d7veoHi6bKE29LWcCqnoymQMpgMRaAAFsUzH6FAcK",
  "key16": "5RK8BBdYjjGHH98NYjTR1jKTeLZm4jp12qt6AbadbTa7omWXhoFfycUiPzVxWLek8MQYzEuHE9VufcJBuVEfw5SL",
  "key17": "5UvDyuH1LkLcMScSLU7ZZZkbe7itqjLTRa5vs3CPnx7nY5iM5FAxNcFSmcJQA9ezJNh2dfJiivpEw6ZVHjx3Qfnn",
  "key18": "4Z71815aoyp3bTNi97KTLskSLCp1vYamnXaFXxF2THiC7B8VMrhoZ8oky4C6R5BCjvdRfvHRboGd8DzGwzw1uzEe",
  "key19": "2bE9R1PtdoEFXYLnBfVJuJFv5uaRK2VLFyMVLDGUDP2o6hg8nxetPxqcaxK3VsQwEsX7D8ABfUSyH66Gcmaz6y4x",
  "key20": "4PyMyvvSd11QgJ6i32NBsXYrSifC7H59aZi5AqLqrAGpDL9Rdo2D9eoF4JhXjcenWomyv2je6TdHVz4EK7Mruv1B",
  "key21": "7qAMG45pc1VCK3wftARAxasijqNheEQNfpUCtdP4H3CckPXnLtyEsS9NoYvMVoSmamEsx3VFDMnU8CZFQGnJs6X",
  "key22": "4UVB9SropG9CDkMPqDY2rWg6nJsnKKLfXJiq1ZvJZN3CRgC6TBPUkfPzFqvxSqe214Ta9MkAxYXjBm95N9LBbYhJ",
  "key23": "3G3TMqBXsraZCbStCMDGVTvvLgk4md2aW1CKLWfxy7NGrzW4cDyciyW7rDTMjKUT7i34YAyiDmeSwud8TxcYfLta",
  "key24": "67fkqoftUPCaP1UDywYHHho1qckgQ8hbDWf4bXdKuH3DY8wduAs33K2U84EEfz8UngdAWyvM2WFsyDHAuFhafEr3",
  "key25": "4jJvFva74b8aZ3WAQPoQqnJU9s12985bJxz3vjARF1YeWYiGBT7VyYC4q14JbxmfsowhVdZnFMpjSvdCUkapff9d",
  "key26": "5ZzDRBuqEXNiJb6wQe1Vt5gCfzuXVRZ5VXM2yvmLyuwDZaCJTx9CB8eHx5axPcYuib7QHR8i5NZfTAz1xLFhh7C8",
  "key27": "3MrFNnkw2FvaBvuodvsfrPESNRCbZbYo4Za8UqB7Taz7wCR6tokPgdtpCFpS3yNrsJDLueFB1Xjia1MQzvQa5tzX",
  "key28": "3sk65c8WYuPJJ5WyUTH1kpB5rNsuvxLWjZfsp8E5tYYbNwskNZRyTefZvJggELv48UtXjZqgPjgRw5uMsqPgS2cy"
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
