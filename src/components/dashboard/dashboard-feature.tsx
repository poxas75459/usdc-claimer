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
    "fdM4wd4dt8w32pXT9oByUYiGs483vqTA3CFuKQJWBZ3uufR2BYEV4GwiqRhGZTe1K296UAQPmpsubzeaxhE3vnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFGHbbcYjPjeykYaAWNAcLjdrT45i6zxaFpaHjET1hgQXYXHE2w71dLXQq7JkVVTFLgKguUZPoyWBhiwFafXq63",
  "key1": "VGZjAsZznvCCa5wyHLkb7dCXfjxQks2jmEXETFiRgFZk1b1f9Sst6YFqZo2vSCq9mAdpXNWk1e5pWrTCYKsQ9Qp",
  "key2": "3WbUZ9WXNTPyb6GZ1rutLJu58CPuifkrv5YKYnD5AZNHe9ELB8rBgSh2ewXPboNwmHP9E5YYZCkf9PsuhLzHqdbN",
  "key3": "2ntN8wsUrK5WErL2VuFP3GQet8ctdoFe6eCrpu7Pc59wvjC6UUmCRsZdR4KU5tycKJSqhEwKjYbQsK6JfADFk4WK",
  "key4": "5asXsesB3bvEAFZ4LdGYjkKRBwmQ4vddmYcvmbL5JvYDjR1X4CAvefhm8rc3UvGY4KCwgKPF6j75xWugv7G1zGMu",
  "key5": "3znkNmAw7JXjai8X5k4D45mHnSJ6XXyyKAUM7yrnHnij4mD1XAJ1KFrb252AUMAzt2duKZuqs8XGY1vwwLCq479L",
  "key6": "5bf5KSKvTfkPWQNauRHonX4JrNRaDmsQqKdwyrg1K8hYM8bE6TFeMmMhUDfGZLVghRsiJvsygFA8ocKadaRzGtTh",
  "key7": "3Fu1cvWorJxxz1DcUfno7QEbXkaTjyRCjLybxEZX6oL7ZURpbxaau2JhL9ccpbrH5FArLSyNDthi99Gs83ncHQaL",
  "key8": "39NkrVooiX5WQ5yciXbRd1ubT1k7PoxMz29mRQoacpMZd7TVfZJy67Z7KgExMshtb1jBKYPBDHHLMRu6uLqaSy6r",
  "key9": "59uNMsXX2odAYxYzga1u4iW5gvnGJ34QBkYrXXCbxAtX88MabW973bfZKMvLH2MKRzwL7jdNvUNeMU4qdUe7YYyM",
  "key10": "5Cq3cJRP3piwsayYE2GFrFBBoESpTnQMH9iNt4kbf4e4pXusbyhR46e3k6PVqf8N9TxrnWePH2jiGHVzY2GdskYA",
  "key11": "yQzc4or8D4EgS6ZPJdqrCbiQbY2FTj81Lo5LCNUCZGyR7KeiMup8goyLYg854GPYJLkLtxfN3kmm9QA4gdRsnsi",
  "key12": "66T2Ckf9bx99LUZFFHzJaY5VLtXGdij5ciZJgGWwJTq9GVX5c4WC7g86yUvwJtAfHTUUCf46uhPWvpaSDnKzSZxU",
  "key13": "4gG4J83UFNd14iq5PR4dBKGCHYmSi6P45mYSV6oAnq8Uwd5uxLnoqk5jPXxxDWWhtMBnAHghqhmPcK29tG38Apjk",
  "key14": "2SV8UdqbKAa9oesiVc1qUCHhxukZwfdL7nmqjtL791SB5iNtEKMLtw9RySf6MegBXFvExRezUZFwQQKjJZBzdXXh",
  "key15": "2ZS3PjZELPSTTQa76RR3nrZhXxNEaRgTN6wxhmwDS1X4xjusR8AayQi5Gzm5XuFZpKTLomTP9L6sCtG8TkRGmAC1",
  "key16": "wDPvmMAj8Qu6FuHj12Ao44P8GJf6Ygy83DUi6N8je7whe4ycrcVB89Ea9J4A2Z6cXdANVrMA2PrrgF1Z5jZ5FUx",
  "key17": "5Lr8emMwEmzbZUJGsMAGBCmgi4UeFf4N8mZx8FnG2jBE4wJjnBYVnMPDCub4aeFRC5F9Lvkb29VynmRyRGjSdgWD",
  "key18": "5f29FRqH3scWjkh2wCoqnkZH1MFosfSTuoRXMweSY8hxXpwHxDxRTvUsxUFMz6XVAYz9Zhcr2vEWCiDmRK1bfaT8",
  "key19": "4emHmq8uYsuas2XW2n2stfz1cBHGxCWS3M5uQknqWUWLANYf58e95XN91F4S37ruKfZ2F1mxF26rb8xKC8n7tzW6",
  "key20": "5RK8k2dJxUqRSC85sCgiWcBrs7u9Z4fhKRc2Hw5khmaLedfMv5ZEEj9LSSHbybJ13EkQ27y5SLgDKQTqhCiS3f98",
  "key21": "4uC7akGsNaqLsytNKikmw98XSAfX4eDYrMFA2HFmsxm56P2xRSEYPsb2nhUKwzmLdgvEA66KYVbsTXWrbkcXq1UD",
  "key22": "2pT6QCBdAUYMvV1ufaYmsP4zuidpXHpv5dhkVcLQ16KCbvekZLs2DWVtzXzuimTYYMJfUGZesLBDer8JBCjKvqJf",
  "key23": "5dG5XKYW8UpAR1tuWtgHyLNRcWfJFK5HayR6XdM3KB6NNaftbMKu5Ky3r3nvUFSDHC4yLuxb14c2bws2apBwA8kg",
  "key24": "4mVsubQnrbStQqweK4Tdm6FRKAypyYmfM76JdU4dV7MZBxumixUWM8QAJs1xsAtQMNoPmM7gEqCz4vJQZqkYuoxJ",
  "key25": "t2WMBrGshzXw7pfXj6FyNBmSziiuVaemVzXKBUG7syZG6KdMgnHHAum3hCp9Wf8vRLH1P8PEgutAEnRdVk38H97",
  "key26": "5HCNwFwwNNcRrkkSeAKRdjF9Qyn83t6SSsuT1ySfRPuhALWqtfnzUTRHL5e9dQrTLcZ1T768bvPPBWssaLzd7wT1",
  "key27": "5nmj48WgtZgx52ZM2wWnGe2zweuXEqpZB35dbxWXCEWQFdGnTKMGJvmXQfrBquJpVDJ1GorYaoKLyvBgWRoziTz4"
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
