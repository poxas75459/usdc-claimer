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
    "XYtFu9rddfomGgm4Z5ZZgt4YqB2TY2m4NDz9RiRF2gqn9RHNqdoaLSebhK6kd4FHkkroWNtUwoY8FME9CtBbDeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EA3yGCr8tuJpVyo6pGyEP9Vz8ErqruhMzRpu2C49vXDCA7mYGeXyRnZ3ARhVce5JmmevC9pqkc8nD4bQiszRCUX",
  "key1": "2VSi7oRjUoA2Kq9JEKW7QYLzBsDn1W3CKUBi6B3DbCKuaVTJimtjiGQ4bEkWcVJLHkp6iVZM6zrdDFgjwR4xSh5C",
  "key2": "5eqHsKYrG1bQGrxKq3z7eXxPmF3vAer7RptJuCgXkq8csS36VguNUTvWPy1w4yzXVAir1ZAsfYw9v4oAeiwDTS7H",
  "key3": "3sPLLWoQyroJ7QodJM7ay17tYEv8yojrrxXksKpekAWPfq1KtKrrFo7XM4AYVajkV3tvd8GtJu9eTxtivT9E1yX8",
  "key4": "3SeZ7rpUjvumDtn29nmCZqUbaGNQQ2WuYpdZNzxDo96zcbHA2nkuFqU3pYnykKVQbTapjwdcSdep1e9KpTmcTdUu",
  "key5": "51EzWxGF4bJpdMTUvRVkb5NWir2AAr6rJNdjFKdkuyYiJy7DRLpRmzWVpfdB7nTnXD5dSojbUEsL7VsrmMCVffWJ",
  "key6": "5Ehr83otEFbg4i4L8G4ANB2Kihk548ZJ3dNFGxzHAELN9GUqrueftjMZ4VudZTeVSox96c46F72qxnDTytQxBBnP",
  "key7": "2466a3jxc3HiNH5BfQaVb2donM3NAhYfNFRxBheprgpeueCfugZQpFtdntB6n5TT2rGGfyAx2bDpohjMAe9PmiLQ",
  "key8": "5aLvRZiupPiKJR6Hc8iCMSuugqcKbszUEHRL8ydkBqex9CNURDQpfwhYiW4rvC3uFRr6C3cHrFNLeF2CqQtW7w6C",
  "key9": "4hbS1A9rJTftb5dCRgYT7WzsdEzHhWMT3BpnFcieNrK48UXdgw1XC76tonsm7hNwEbVHDkbPDb5hMHa72U2HE8L6",
  "key10": "2VrSuatWcc7cEFPAtmVCydLZm3TLspDeKER8LapT1V7sCWxDaTtYMU8oRy9LRpysDjAG5DUdUuJA2vQNz8ojGAQ4",
  "key11": "4XKnMc9svYeSuyj2kDY8EzTefP7AbXZ5URSGXH1NY51zdAEKAALRiaNrhXSGPYgfngKhbosngbJoCggZrrKgWHPE",
  "key12": "54fN8wNopUd52ydtH1tXgaU9zLDsTkbeXeS5LCNKVQcoy6rCRwAFKSFooa8Xu5ysRBfbKbjVXuhygYiYHkkkjzMX",
  "key13": "667njXYtmKisWw5ruwyHAB4JLBc3r8CwjcvQVURSZMBDQTWcNxrb8PfZbMRuRF6rsVn3GWgenR172AXxzW27SqHz",
  "key14": "3uyUNtn349GftqXJLaS4R83tdRodGSZ9cU5TH6RVZzjR3zztXWPM9qKN6cYQfqAGpAmfwF1StzUnU59KYnHcgYJG",
  "key15": "cGZMdKBhtoStPQ32XxrHuNSsHGGx5RnKyaXb1q576bHyD7mvZ866udS5XMxSdHR4Qthtw2QPkS3ULh2ePvTfoo3",
  "key16": "JYbK8tdesxitUVb5zbRFzt279jknCqJkx6Vkk9LR9YX69gVZsrbH9YQ85TTqRcVMS6c9n5TXRhCggZzQ4oFtQWM",
  "key17": "4QdydfotMTwxnKJdXiWfb5Ci5bJobyvYScVfnKV8ArLoLY6N8HfXznk3PkwKj7s4sYBmsfQECcn7BrHSSDT82jBJ",
  "key18": "63DVfwWuhHSMpxSxK5qUW2HXL19LJ84Quabta1XwEba93Z94LCMLw5cYhPS9GAYvjh6GSbhgav4ce2vEaP8oRkQP",
  "key19": "52Ufm2efLynh9tMRR9cCgAQR26ita8JwxcpuvBwxuw98XU9cQ5tGwwmhBnv1SNSV1xGhhu7dHm11PbVuZfdZaS4c",
  "key20": "5uERXq3MKoY7TKdvRgdpzzzD8LULnG9pUtzXLLrLgFeJrUj4H7ppXmEchXmSwXXF1seDfK54XagiXoSsTDyqPb1g",
  "key21": "42sHokTUbhopcFVaqJfhUWrMpWaNWbHxT5gw62RxdEwJMtGLj9tZLSqumUFGULHeZkJyGA6wPQc3w1vkTt3dBJFG",
  "key22": "TZT8kQSpjDeoRNBysURg1SPiYrpDkVsa95UZvRf7V4fz7zBgcCd795iYngcAX5hcEj7MQnpWt7twJW8aVwaoQJs",
  "key23": "5FAnMDX3N4EcLdXiX7C7x27zvLJZrvmJUbmpdzfBTZuJuFw4BtXRkBphQ2smWR5QvHYgoJk1L5RvrvXNn5iYh5Zi",
  "key24": "LetEH5eCzw6Jqwzu2quqDN1fSomCvqj8YPeFyehApi5Fztv6uygjqF7SmH43Sfy1JBTnE6PmDTNiHDV1PZWFrpB",
  "key25": "ckSiaoAJCJYw2BJYoWcoLiT7t4tefNkt5oEjeAPsojnDgszvtsPLieNA5oKByeYQ7CbpRY6nBPwCL6xR1eBgxkx",
  "key26": "46CTWyZ6JRnqbxn9zohYJmDYK75WGy3EPnDfgZQAxFva3uEF7Ptk19sGcKinBYpVRkdeuc5ATVN6oavDVoTrcgGV",
  "key27": "48fxwSVx2stpFqxK4wBorfJcBRYcMmjX7ne5t1DgkzbcFHnWFKNFx9Qjrn5Dn4HHEJz3uCkVj6N4EKxH6ZsymGC8",
  "key28": "2wQrctaYR7ySN9Yd166nZhu6E2qyAy1vTD2ntXHkPzgERht9bqVGq6iapK2fxsGFgFW6myJjGo84ADM6Fwv8yhfB",
  "key29": "5SotsPnAdb4pAhVohYhBjTapaPsUCzZiEsueFyUkE7uNTuFakHffe1i4bSXeHwNjJkSQ8tvQwggbNUhx4NGifzpn"
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
