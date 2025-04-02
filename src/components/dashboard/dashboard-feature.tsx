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
    "ZjT84aP9h5KzVpN3vHkaapet2nc88wg5g3jnqNpxN2ucwFWRZ4AWAzidLUhVyeZ15PgpwEpDzcJuHbw287v9XBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xG77AUd7ya5JT6hcEcr7htSvnN6SAzEyCWmWowixt9ykVZv81bKWncWjS9okwJ4u7iGKkzeqLKvjHT32eLBX9BX",
  "key1": "3QcWnPZyDCJPCQPNKHr48KwaRzU43vgyQ6tKLHaRTu7zhig49vdJUf2TcEysqTS22AqDDkeFGSyzLcKigXNxazTX",
  "key2": "53zbk2yGE95zgbrzkPiPUtq6tw3GDiv4jxgZz87SzuFXM74RRoKqqNxtF1HLnxdH51Gtm9VnQFJLvH2hMLGZodWq",
  "key3": "4R9zGb9L7BCjbR4AdhNtExy5bsxaYgPkd85UmZiREvuwjbGgBGzNHjCnYiPehNa4TBeqjXgpXsKy3iLa3R3TADJD",
  "key4": "4PJSZFXsUX5o5NPUheaJzTod4o7Qp5AUPc14cJJYCs3a8GGzreM1uZVH55CTWtmVUaDusDsBodDxtqY7WhNysAS8",
  "key5": "2RNg8KfDwryLQiotpKYRtr4knSX7uih5o1YkYZpV6xwLqrWAfTZJp8gWJkM2s4HPJEJxYTAmQSPM1PfgcHKqtadv",
  "key6": "2eSkWT2YzhJdzjBHqRAkxsSs43T1GGRMAm8Qq3S11Td5DiYcEo1L9zPGECfK3oWck87SSiUqvb8cv2ErFcP5SKzF",
  "key7": "5CzgyNJeVQcPD9G3YMUMv4hCAh9Lp1u5SjsoJ5HtLybJAXZn1Dim5K3PBeHCDgLEHZLXywbrZKdtah5v2BQKb7qC",
  "key8": "3Uy5WvZUiX1R1Eti79k3dwv59RfZzy63C9BT9Z6xCU7CEsby62ZCVaPbofNksi5RHJZXcXe2v4t7KyJpjiaFptcq",
  "key9": "4tEUjrzicc6Kn1FD3uKYKRemuaw4rXX8uBBUM5zQnExwPyFu7h8ary3tL5d6Z9uG9uD3DjNwUCJTerGhyFofRc5V",
  "key10": "2CC9RJbAQWTDNpMddbg1mXbagri9dcx34JrfCcUU92HRGvwT9YZNtMTPXqrcyabuhNTQuAe5FXs9pj14JiB1XrVp",
  "key11": "2aXB3oxTsXGUV48g6Y3JjKhnsMLGPXqcSmKBMX3xLbMpi2VDPfZU16co61PnHAg9jSzqWmUxTiA28cATPfuevg1x",
  "key12": "4NMV94sVc9DA4TBQ2yt9twXdJMcdpsSLRjnFbcFH2baJehs5MFZcirfmqFmV35R1nhPY6FdeJA6fdyRUy2MYvZQm",
  "key13": "3pnpg82uxr9tReqqvGHmJDcYmmPDCxbTi5chWLuZzEz4HtGHRmtMTwWenzWCDQkzXvWQksuaNeqwA8EhF7T2EFzv",
  "key14": "2eDj6q81UWCkSt8CjpoTzTkMPb6dTbK6vwewykX6EqiDtbCTbeGXFWXLVNLAKT4eP7P6qTEW4qDU6jNWMZq86UuH",
  "key15": "LpC3mwRDixVr3V7bi6aEjxcx3ExfENcPSzZgmfZMH1ppggm7koDBXdxmxxzp5T2CvQQMxXc6KFqoyKgfmQz7sFA",
  "key16": "2tJifKaRWdF87VpFVdMzbLzJqSzaiaTv64UA6oGXusgXXQfk1FFo5BLU4VhcM9pbAgKBxfhMJvJEwUYrdmQb8zXF",
  "key17": "3sDSMpMHWN6e1Dz1AytysyL2TracVRqJGQb5BV5LzQTaU9wDT5dTEp9FaDSvLDyWZ9DSNsUDJ2MuWS3Tq4MeKpU6",
  "key18": "4W6iJQyRp5SoaT9PCGuaVuRGF9nWtPumHgaorozESc7a6bqLVgKfgtuZPJEDM9ex2zGaBMLmDTm5KrjGvzDmSAhk",
  "key19": "21hQSbNNu6jiQn89Vnu8iwB6nnV41XJp8cspp6bfzC16PLcBJ4HfjVKirJrf92kayWTeaZ4mC56eAMKfV1Q7aCXP",
  "key20": "2wyMq9yvvd92hiS84Es9uFixgEVjUBb8kSh8DSnHVdhtxisKE4JKM3sw6pHUsV1NkRtZ1hmhh5mWsRqCwkmXF9Lh",
  "key21": "5j33uWtN4pEQ8kiPaVMT4VDsLxfKHAa7DrcgVq5PF46BhpGGoLbPKt2mFpAZPA6F321Q5B5ZuYwJ8zefaCTeTAvW",
  "key22": "2g2dhDPAvpkJTbJe59NEhrsVueMZCMmuUHyDt4XFrJ8HgLX6FhgFqkbv8FYYqNUV2Rcnx4zBmbNSr3gaNskG5KC6",
  "key23": "48WnjNmrGmJV7bfm6rorJsRD8yRgrxxK6UXzmAwLgQB6ZMT7f3AMTQGwKH7fuLUcB5ki3JZv7dFUyV1e6Ffg1DfU",
  "key24": "5PegKdsuxgYTamC2bPo5oqoYCCF9CpZR8yDP2DHKK2YpSDudkPA6hbbsTwsdk1RgN3eugYREiLNbcFkjMr33Jdsf",
  "key25": "36QPXkdXdZHWggxxjE9S5YwGggGo8ynbodHgPvUqQvcNjqPmbeNsV1sL2LPD5bPvRY4uZmez1XPqF8yEmZUt6c1a",
  "key26": "2ccp3WH75QsrbcmbfxJpb88EAwotREibSPQgVN7netjjVXcw5r9bgDBLd6EnRQ95zrVjcD8exx5miydG2n4DMSkL"
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
