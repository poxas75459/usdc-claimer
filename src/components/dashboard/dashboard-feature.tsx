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
    "JzWFukHyxBae9D7LHCAn7QLybve9Tbqd51wNx2KfE3J8TWR48D1chGqV3GUBTVb4kyAa5hBs5V9hnswdaXWYkJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvWssxC3KR9VxP3RQSKNnY7uP3Uw3aNK4U3HW95gF4AzC1LJng6x7z1KAwoBxQyQNMyuC1qGcU7EA5yzWaVD6iF",
  "key1": "1ec4FNqFfEjVsfWPNNmLKYoWFhVJ1D4QdytzPxQQbgGCwS7QK8bWgNzRHZzpAZU6QthGvCa2XFkY8zfAETLUpJt",
  "key2": "5CDhxCukxsmzW3xNQ83U5aV6nyfFXWxRnaTU5qRw93C9Zq4yjK2HTJQtPBA9KfqMs6Wp4EHwnJR9fbQMDygeUM5u",
  "key3": "38qvgKskm3ebSYPyegeY8PQmixFL9CtiRwRVt5N84ktkpvzET8uyUFRFkLrCfP7QjQo9Y6q8Ua9AkQySdd1fh9fL",
  "key4": "4Gs7EiucK4X6u3iKYpeNDFYAoK4UFo82pxcka8FNRzpVTDCzZGJrLHVf8M9BqhJLyr6g53Z4f39U8pshznvuKtXK",
  "key5": "4Y33uCP4Yt4oQ1dCYntxUJBDXKyQfv661oC5EjMo2xzxqV9cmStCh3toHs8AQbmSYoTRviUrr1r8bk4ZAbKXQZry",
  "key6": "22FPgBdQMR4AhaWdvZ5e9CynDcpNErXVoMNNwYgD31X5LhJH26sKmu7boacDACWXaUJ7RGi6qbXZBSUi3FxDBXUo",
  "key7": "2DfaikDDynzHgt39VmLjpPjhB6Qg5yvAbNrTQ3tQMTrNmNUFF5u3kzSDwEiRGZ92RWDv8JBAeGv9wqSeM5GtdFXk",
  "key8": "5yZ2SVVRYbfnW4p4yMoy3oPys3HPNjZu44BJhCvEKzDKM3nrzkRK1mQgvCez7CjcgnoJR22XA3shjVAZ9Hvo6BM3",
  "key9": "3tnYwsDcJqZaC8tiN5NYaTmcGE2dvS2pm4tWdKnTz5xjV7uksBnxc8RFZPQ5CEyJ9TzAgHtfCfjoGvThWibov8Cg",
  "key10": "2DD3doCBpDAsZvoDy6xiMuxLDg7PHBipxB9tYY6Dup52jhsFHqc4k6wUYm3r1DVqMCUn2AyY3qH1To4boDVTEPqE",
  "key11": "3xS61eVgnxXGsRBpMd8ii34tFYuWYkNGs29oabvL2qd26hyJFfgFuB7L7mWZusipp5SX7wPV9xYF8orJgGN2fsoh",
  "key12": "2EMNHmQ5esuoJFuKozwfEHyFmfdf1qyNqs83piVwFv6cL8kCrdDbBdyTXiNbbpDdDGGzw652Epbwwt7bc1fmgKVZ",
  "key13": "5KbvLtVaQ5YCUzrFgpe9aX8FwmAt3tyryLcq5mAaXy7yWTL8gNM4PgPq6U5KTdGWnS1Etjz9M4pfLKGWPrLVi1f6",
  "key14": "2tTfCqk7iV7h75vLP1abQopz4PGEy2R58AfQQYhEoTqPdC5FKFywrNcDTiBspkCyQwiEhSYw2UghwMLESrf9BESD",
  "key15": "2s6F7kDC5JPMkSxb5wehipciRfrvnUgD9UWVY1Yz3ZEFCefFhhWd1DHgM7WoEGKo27ELsV4qqpFqVPXZJ9iwroiq",
  "key16": "23fzFU6V6H72FXZXavWstZxchRMx41tFmCJ69wQdNY4WPBFabhMD1fbSCq2vJYuU65YamT8n5LTfUa8X86GQ7MSx",
  "key17": "37Hdm4povAukzGNhKQSV2ZW9Tv9B8FJgMUfc4uY3U5fNctmeidatxvZ1sW9VgPLvEg4aENBneTULUxh3tMttbLVz",
  "key18": "zHpxV9rTPizFyFsXDdJL7xiqF6YyiEjdszkPdiSG5k1KPG1xnuaBzo9Y69SmkBRcxDiZavyyTg29XREpoKPunie",
  "key19": "358Tm8M4ATELgyVr37W1xk12xvxgfg3tf21f5d8xGzm2M47bHFkZJurUyLCBApTrS1UGy9FN7NdsLvdKTuTN1vS4",
  "key20": "27XBviuU1q9azffQ4hriHy97FFYo6jFF3hNCdZjXXMfGaZTdvtk7gRYy5gsTGpzJobnmxHC7JgrSn8cMXQxaC4sm",
  "key21": "2v451uXC1hFGVRiA9SBvxmQCacdmZG9DCu4GHWKbwjK8smhXmAptAYeeHCJ2MRMkZ79TCYcQpT3YB7HMGmNZUCnL",
  "key22": "2iCnVc75WRQN8vhzENwHKWmLWFxWSEgKxZKL8GqzZFRvhczNxJoGvMat7BgYqsfiZaM92p4d6JBNo3hCBSkdVo6u",
  "key23": "2uhPPwaNumpuwxV5eX7kVcMmQt9XrEvujKpPNKhKQRXL2jVf9Jpensra6MRWYUraEogcW8WeK7EeSWr52kXD2gBP",
  "key24": "3bnbUwrwC3ZmpNQxLp1ra7p6VzNBwF5DCAjLnHUTn8MKAYUrftWdbkw8mHcUoLkDdRTZy4UF3tDQnn2LcDgwpNio",
  "key25": "3AaizCRumFVVDpByFZsLHYHzXAfJrC6yw1x6z7sa6JHnDGBDtuTfV5rpDrcNXsfPyTF93kJn3cFohA2x1jkjJNtK",
  "key26": "5Ab4rbkLDnyJHJ5P4zhQdiAqUdwPkKH5A9JDp5i5UPRZFcuTAFmhFHhNFbGgByoa7Abs7W4TSsPpLtDeB1EnR8qh",
  "key27": "3WDkoo3trV1n78brX8uAe4TaPPFoMeLQqchQhwaLgMzvCgJYVoiPCA5Q7boVFpLz84f7jvFvYDiyLnf6jhwkNsAq",
  "key28": "5eoKCGvXZ4LaT1VaNuAznnVfuGsBCdf62cmZaJxJBnWuXD2LyStZoXUqkvK8GTMjBfk9VZHwWeBWLktFibByvz2k",
  "key29": "3JGqa6d9ygLLuYffFo4pNKV8Qya25kJFkg2xn3tzR4pNmDgGk2yiEptBJvUgmUDJyabFRaXv72u1mqYY8tXmyKs8",
  "key30": "4ZFEiERPsLgJmRB139kL2ksrpJNGJuBRYpPTrkYEEvwXo2ubmWS6hEz188uDaUsutyujreijTK5suBC9JYnd1ffq",
  "key31": "24GKeCv76mrEFBVMVisFo24E1hwU3ouRnKEUqJDQC5ywXkw83w3hEPoP4W8pK71cTBsFMUaSBfvN8nFSC8F62CU4"
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
