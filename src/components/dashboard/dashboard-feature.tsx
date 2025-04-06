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
    "616T9kSk7eMRveF4CeTbGfdVFQZX3aNbbYvzRU6abXNRDLmvBz18dcoyCjqw1nUx7aGLdXk6jdAVCzb9PhGDG7YC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTFdRqtzCQjebjRA5SthsErFUCZmwbsDkFgspqn9wLJmQjkWoaUvjPu7pHxFS4ASHu7gnWRMLrLJYaAEzAmhzZt",
  "key1": "2CuSadsJQEMi2qL8pK5JdfHNgdwEzWsrRAXVf9KwLdL4oUc7fB6PcfjzmPy6HXXggfc6sR8ivEAxhRbCqMSP4cMU",
  "key2": "MpAJ7QUFHAFVGJp7mnYWZaYL9ZGDMLQY3vRsdkk1vgvjEydBJf7zCnXVC2CdS1FvKQgsjeHfZtChkPGvhAuRRB7",
  "key3": "2d7Zj1N66nztJA4ZstXbgfgeFsxFFrn7oc7LBjMYeh1mfcnWczFLmH7WMvL8afpV968F9d99R8AnXgWL8uFGD7f2",
  "key4": "2YidQbusqKKnV6zRkXg8QhWY4wsJXzK6NSyo7JeUHFHto7yNfx3qpwshsjCE34MUim94YcHw6go3yByzpyqxZyPq",
  "key5": "5S2JmD8CY6EfKooYbs6nFzUZUD251EDwuBUXcQvwvgUC9nkKmEwJ4kH7aMHLbBxMW47TWiJTnaFYQPJWwSdd3UVg",
  "key6": "5teT21qpQf72XVyXty5u2dbieABEyBfoN2sDHzAeYMc4kVVcBB8MVRjBotWCxaG4QqpjwehG1RERbgg1MQEpZNN8",
  "key7": "2kQMHie7zxwaoAoF9aKEp1H3AGkc9i35ARvP2VE9y3tcNoUtTDfvb33dqd95xhNDXRsQ2EyyTwXAPmhNGj24i1DA",
  "key8": "3Q9w6FiYHtKwXMWtD4Wzt4rqY1Je1ohpeiYbuhbvpmZYKTViRA25t1jJdeHoT3rBBpuEz34EoRKBjWV5iw6nzrZv",
  "key9": "39QeCQ7a3P4P2o2pVxb5XSLb48iEacjsEm69hDomd4rp8DJUb7tUQLHGZxALcBgAEfPD8mgVb1niD8tkzTwxCfCb",
  "key10": "2pa4fptnqVpK7qKvmNrYZkvvDGGvZwGGKQxKDdNJHVzWimqUxnj6wXUZhLKysiXu5tBN4zd5r9wEamK1XMi6a43z",
  "key11": "31pHhDdUP2XqeyTvbjmqQ932KGgxzMryXG6E6QZFC821tFrc7F53X6beBXXbiry9FrzRsnHLYiw16ixKH4Hn6kjs",
  "key12": "3kJbzRUYBXWHpQas5itewQNRShiy66Fz6MYW5uJDzeCNNsTnz2gDzJt96FMiw45hLgxsQP7YZmM4kdgzV8r6FViX",
  "key13": "2UriqBJ8YgGVapE5Q28fR3ywppDKVhMuhHhJrxfxQw9zjQoyZECfeqpP3fiyj1A5iZSDvUgjN5dQkpgg5XuTRgRM",
  "key14": "3JTfZdUUmtJbnic8NpixgR5imp3x6Nb9MWPUUiiFjyfkWM53PagmVbCHiUeRV7irZrVHLDUsXcASH86QxVwGjdgQ",
  "key15": "4PS7rmDsmat8FD6UHtHD7dnuLHqt1HWbExQ4YUNa591eFbzzzk7DCFLbMjqxCRebDgvQcSziUDthfuST8dwtg3zh",
  "key16": "5kGWgkmwoZ9WEcag9GS9iAtiS61M8tRVG5pK2SLsZDDtQBB9S81Ka9Lf9p6YjBxter2aJJrHZktrnPErXCKQntR5",
  "key17": "4sAXBEXtFngxA5FJz5H7DzSSvRh7aWijW8ZcmL9M6fACEgBfWkHinL9gZAXTLr8VBGWju4C3RdLsXKdFhKuN1Xd5",
  "key18": "5hHH4oxvQ7W5xvnpLVktHqcZFmuxyJsEfV8GnPoRfkkpyAgEQTrn37rxehMC2CsRDGt3MLWoMyHjWwsppXzWjA6e",
  "key19": "4fZhMUgSCsCGudhWerTzNXdb1bfZ5EDLaD1LSMPFkKo9HsP4QRcceg7FFLrJyQeWuEZv78Hk3QEVwFreqvCT3xos",
  "key20": "5rJqj3U6wBebfUeVHK5XXt33x18XzThE9mdq6oXf53Xu3mCHzxG1k5U49KXnayYsb2bmkAi69BmZJM38roz4zK89",
  "key21": "4DXqnpty7jfAr26WhpvrzeMbD2qxrkj9Dh13Ke2cxRkrYCW4U9tvTmATxjpEXMwAnQebZSdt3xw8k8NJkymB6LvS",
  "key22": "3i2Qje8ZXJuZChSWd8aKvSxmYfSmfWCkSAwtRhsVQd8A8LKvsrfmCNQ7KJMMAceb3Y9KagmGjENaTGEinRepJJq4",
  "key23": "4mkBAH8ZP2RDGU1hRz6bFF1hmy8SokcrQATbMQB9S8LkP2oKVfJXHAPnopQP8k666A7JF44QkgoFVN5SG5NJiuH5",
  "key24": "5RTxiBT13PW1szERsmuNfYjEg7bPAt1F1Kg6cgUGBZHfgmTp5dM5JcBCwhPfGU543r7tLM4Eu9cBc1tDJjqhX8F4",
  "key25": "4g3Zjxio75zWivi4BTQGfBHoxum9FodBTsme7Gh7793dFx2yP8eNAjpwkzv7i2kHW4FTWYspG7JxYWNA8yoDNkf4",
  "key26": "2GhzoJjXUSuUyJomMpDoLahgko7NpyZvRT9GepBXCrwm8U8nSSt5tn7HfboVmG26ZnxsHpwZrL4BmAPLGfJCQpqC",
  "key27": "2A3UhJCfmERq8p6nncNeKXm2zMELdzyoJ2jc7RhwkXbKHYtrEFPxaLNmGjiRxJ13RnwuNmxE3YzDGf6887eQD4Rc",
  "key28": "5QiBUUwb78RpstfT11K9k3AKtrb1yNQwT7EKiTDG7TsJsZr8Pi99NQrTCE4pgAuP8cCR8CNffy8CgNFjf9kkfZFG"
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
