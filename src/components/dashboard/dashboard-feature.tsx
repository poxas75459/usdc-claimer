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
    "5pQV51u8uvX8pvPj5zuVZCnA4hfbD5P2C97zGbpiMVB3dEvtvq41PFa1WmsKvzeTc5kSnoysE3Mg1aQ5m3Xebtg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8HDt8SxEtz2KADYw9s9LJFeu4keZxP1dH8FY3cgacR7chpb3qBZ7sNTWi75rYEgKicRLHxWydXgoaAbW4Aagcx",
  "key1": "4qQi29cyUNte4kWm3CY9tVmGw2Di7dw79VeX8xn7BWHtBY76HEd39pJCK3BowrizjrxjWyR4pdFT1FvyWLT3bhuT",
  "key2": "2P88NUhYYqD6gVdygPZtwDeJV2QK7AxPZgKJSLuBeZWPswSJPSxVqmdE5k1DZGyyxk4iG94xV6aMvRs9pu98oshS",
  "key3": "2D4D1Q2C5xtuizxN7sVHPoLRiqtZfihSvBzR22LJmGZ6KJgGvAiECwsvSmDDYR3L2zYj7cT4jbeekVx1YRpqA4km",
  "key4": "FRsPcyaTXNc6KfPXkjPc8KrM7DL3urGuNQYLcyx6RzsbAz8VSyMfbjZPS1CDZPTa9csiH8Emw7VHegnJXLugwvH",
  "key5": "5smK15wcQ9PZURjZ8mNLh4rUNooA7yvm5Wf4x6DLrX5nMnooXc2rrG43CYAEeFih7XZKEnTQk6Jii36PPuZm3uss",
  "key6": "5argD518QB9wcezrZJZaVgTKwgfP4ABkgqpXcBL7XvfUYHJp8mzxdiwS5T2M3z92o5ug5NPG21CiBi9bfzzMQvK2",
  "key7": "4qgLdXAZ4M5EvX1gTshETdfkUT6eU3xcZNxLasZgyApipBCLtNmA6dYebgP9CYT2guc6Hu6qwhhzVSevg5VdYUpZ",
  "key8": "3TrWyn7Czt7puL9j7wQbig3ygKxaxrD6jWX3aPLEvdoHBDytnsPhCmWiggu1HmWi9mMpSi89G6EXFt7vKEivm6Ti",
  "key9": "3ud3BrNDxPeuexCvKpekBXxp9yJ2esUavms4BBLvYqf9byoffwarq6EkZf56F2FeQF1LtgjHybHFywMg4Lz5www3",
  "key10": "5sDLfuYbvrrLWARXratujUCpfSAg8NubmZQQBuBmhNJfyWmLp3rszmpzFPDG4Ayz8EMdZDMCtUNfXo1kBUGEv4Dq",
  "key11": "66s88LshtQJovEuyatSqsU5SXo4hY3oVzXbHfwoXAD4hX6udXf2btDgdSQqdnmpFvhs5bnHp4YrSij4tHzMZ76iZ",
  "key12": "3pnQ7HDBjsYHrzn6ShfC1odouCm24ouAaLMvWCicyT2EmvYtV5v8WudM1dYY8w8wvGsZavn9EXbmS3UkaKxys9E2",
  "key13": "5Kjb2Lw6mxeLnqzUKtgJxDyjnr7Prk3hruen3AeWXa8XxE8d9KgR47NfLuXgE6chUqY9dNLt2fT3cJN2T4Gy2scY",
  "key14": "3LYwcZKxNoRpkugUXaVGrebnNB3u4HshiWiAb36N97BzEcXo82uZnb51FaryaCQip19rn2nixrRw7uvmUNx7ZqDu",
  "key15": "w7AZvGkRd4RRd6QMSETtTR8brTQQZq9nbPjA4L9QCah1vPEd4Cz68T7nrQaFVDteQkiMWXZmiRroUEqN51NYki1",
  "key16": "5beqU7uZPqqojRs2sjCTqju2nrmxgr5LiXvHBE9ZH5r81S91qBNGRifYN8daK2hC7PVH18SoEbNwXQgs5JdMPUdP",
  "key17": "43hLMJ4xqmSJWSGz7hR7Nz2KSzBtxt3yfToNeHwQxF1QrGyYM7HbTQy7vusuGrqwXw9nQh8Sr8YUYAzPGbBV56Up",
  "key18": "57fTUKDrDFPe1eS14E4HmAssySPE8n6yKZ1DuFTrUtJ8UjJbn97wvqWxUT4Bp6AALTFFruUcavdn5mAiareDUzxw",
  "key19": "4XFmgAqw9N9AJJ9U1ZyjDGxmFASp6Y71AMibAdrQFucF7txWRyUpRxvN1D9fA1Lxz63nQqSguJdjZvdG4NjDXSCk",
  "key20": "52rJB5t747gBFnWqdNknrv33XmKMyzFoTMpoymch1H1huwpoBikNSBDWNMjhbkZ6LAKcjBkPhk1hHrpPc8b4PhWi",
  "key21": "5A3SqHpK6xW2nCKTRkCZjSQbhBZ5fuxwiwN3Mk7w1JA9KyA2Je7oVArP4daJ5mCqF2511DkCCXaUGYX29J7gwR7h",
  "key22": "4T7oNiKJnrDs1tsr3xsXpHAjmPM8hDTUoDndzbEFwWxtTokAi3L3Yk7HSCqodngvkGemPKMjYzA9akqFAZUMKL7p",
  "key23": "31r6B9TtPubtLkDx7h2Hh7bhXsPxwzpg9PfWgqFGQM4wJJgxjHCsjfU5e8JZbMnjHd4qqfedFizxVZs8iRer5U7S",
  "key24": "KVJuoiqFeYJKPYPmwG9irmaWMuvNvFSX5Ny2R76cV7xLkGBpL9kJV19Fm7E5r8tkQjNfzr6nRo6MCVQFWb7Xuty",
  "key25": "5WUAELrDg8fAUAUUvovHyc25VmZDF9ubVvnjMzihMpaQ4KpyNhgkiSCysgp5BpWL68ytjbKT5kNJDHveizCiMYCq",
  "key26": "28JE4V8XJXQ8UDGNi9N9oyGVt3YBUakSZEJJdGcf2tibdjwhkkyQUuwKK96v76c5AVuBqXYWDRPU5jciUqJNQNUd",
  "key27": "EKXB9YxHTKBBWMXLueydmDSqhRpp4vT2swxczZLrYsky7rEFYacjMdC9nGaAGnhaRWMnhbyDL9xZ1Mifht2YxK7",
  "key28": "2ZyJzPzswweV9v1fFNYkjCRfiYSU4eVCzRVKigxV3va8FJqQAdnxAMPWJjyEyHZLtk6KAiwKQewV7iHqsmperEbA",
  "key29": "5WTuAdNvrse53X2U8n16LSKhF2FfF1FjTXbtP3E74X8qGJ2B2b4ReTyd8UFiG5cGroxi4GardTFKebLuED2utkEB",
  "key30": "46bALmei1RuYkjhoaW2Je5H388UxG3qkF71jKgR9WT4vCsSZV7wq87QT1EcbJkwKJQvQBuWAJcwo2RwXbXXegvhV"
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
