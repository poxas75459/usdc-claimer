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
    "5xF7qpBQgPQUskkAVRqpwv332Pc8HAyUxnHWJ2D2VW5C9Q1zq3i1C2PhDwvej3eM9JDcc3tYfrpyJvd3TE5QAzrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eURcm4DBGY6DVaz5gTJJEN9ZYyGYXGNtQozhwwHTjwRZ6sq82xf8wd3Bth4GrBWUd4iSoK7pZqpjKBEao8A9pkd",
  "key1": "61jZ8ywqUzDr1HvMwbyVuE3QG824KGw5zsho3HnNKYZMdCidvs1Bjx4H2Y8VHV697dvPGpC4QYvCDAUCgeJc5KWa",
  "key2": "4ornnT531S9VQBGFHW5dsCbDUKcc5iCfXiNm7hnvexLUfTN3dyGr6NEsinJMYFo84JMpRJDNj9RMUGUo9U5izzif",
  "key3": "5eA7yKm7FMQ3iHYL1QpRKRV2qBJVEwAHaawBpbG2NcCW5PYynHZ8mewdGw7VpJJdUs4xhdBFUyPKApye6exXYtVa",
  "key4": "VnsVCVh1MWsHo83yRtXPjq5D1TjPqBM4hiJnoH1kUF5p2q1jigtQsqxZxW495HNkmuxGfKD3LmDz7DzxcdAJkid",
  "key5": "3ckhj8xwUXmxjez35Ji3xa3GkdJzd5tsZrmhF8mUFpCz9uuEgj3hApcCfbdR4BptyZgDUWXyBw3QytFhBWm6mYgg",
  "key6": "2mKw8zVAYS3fCmcXx6gQVJkJqMMczDmfH2V42mqiAaZmpJVVc32g1iSXpAJ2UwUpqty2EvdpyHBjZvRkxDiCmbbB",
  "key7": "45UEtcagbq65R69LJcgUjFEvmMfZf7kVr8UHBfPTj9DrZSuwKmHntTKhMKAegfNtHawTWUgyxzebj3zeErqxC6M9",
  "key8": "o8GjEGNcgitEMPLz8nzc5jtefAiNdMuDL6PYazvDyPBF4Wo1pPHAHE8Eg1EyNAbvB35JkCs8rkT3rFyGZqSHqhu",
  "key9": "33TWNrU4dRcZEdv6h48GD6gh8NWQdaYqczHNdPTsYwPRRPZESYZaQKNVWGMnUzdFu82EUmvMtMJs2Jq7415AY3TB",
  "key10": "3gZF1oc9s7Sf88kduPmYJJkVeHqMEDfmnMtNMFcckn8zts46urdnBUm865Y3igXt3TBGgeCaLBqoFM5PiHEHFzJs",
  "key11": "2edRgFWsv3AJXt367NyyhtwegYaaBhXzEuEpHQCR7G9chBeouHWSmDhg2aa1SH8xhMtkZDaupTp7SPUKopfYcVDj",
  "key12": "b6TTmA9Y4FT3X3rRg7fLQBdeZ488HzKEjuetWaRL4wyFwZka7sfC4RajK5WSfWc14FXp467JLmCGQKyEoDxSvYX",
  "key13": "4k7jKAxcjSGiAzqkfJDJHmxnYsCYiPFqDHL13mRHJ6QDQLRhYk5MDqQjw3Ck68z5LJunHVbyg1vs4zqeDkWdrTU6",
  "key14": "3ADbbR7pjRKCpqgGEJuGDtpQCq5CtKfZhLFfjgr38UZwqqCRXcbtG9doMGKsXo75mRWoAx1PrtWJbC6n99jfd1Kg",
  "key15": "XSTQHuYt3RYkVaZbWYHQ7SBnS2ULcZBWVc7ZBEAXinPbmcBMhiTT9BC7Rs8BDhjaZhhAG7nhWNugmjgpxVazdVf",
  "key16": "36Fc6unSzS9zMEL2KVHWsXb78Vmxr8MiVLZK9KxFrfNqmtJZczFbSETL93N3AnxEVFdBsCViXjKVe9g4dH1E1XM8",
  "key17": "3Mvf4e42rYKSxZEuqHgKc5bJaG2c5qF7U6eztasMqqhkXXYdM16UYD2nSdbL6AR8XQdWPeRTTWNNX4t8dexxgjNV",
  "key18": "3VtdqK9EemMYSq2Fj14PqjkZUjDj3Ahs9Sq4NWntddYDtE9EACkEn67aMysYJLfZ876dTQ996tVawRyXHmvjK9ot",
  "key19": "5MDTyehw9pSnzC4a9mWtWG3gTViqjiaTXVgcT2qJuVsufYmPmDPjJAURNxeB9iXGypK7uMgjtpSU7CCpYcZWweXj",
  "key20": "2h3WqHWKLxo6UeuqMbXm9hpyYzN4SsKY4hyVXmWURnrdt1yYqtDHM55aWLbFBRYaFK2CKdZnxU8Sz1pTNWW5VMsk",
  "key21": "3dDQt8DxeiNpLCmKjM5LuhQY2GVk4mjZFCZvYrDxbkNdtbW9Tt6Q7siQccdnwbC2NS4oHYeTKocrdx9n6aYUsTLT",
  "key22": "3SGUtyRQSmPrRKN1aVo1Z8VtUUDyEnGc1PWbwYRUav7MH7AwC5JUBT6SDgg5r5EEWSsdGnVyou4UuxjrSExyVc6E",
  "key23": "y8smsPyQemCdL4VK5LX3RujtZH2vhShRZx1FwzJT5W8SdgA6H2XjpWw4UMPbuxMvDUaGUzKX4SuGo4BrXWmRa6d",
  "key24": "395jPCrtFt1qB49dLXpuumc2CixsCyTQmidxqnZ9Zps7MCHfjfHeberHhrNR9sWUrtmzFxiPJsSt3xJbkoQZyAwQ"
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
