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
    "cwxV9vRGArgzpxCwcWmRP1YQdNHUfedbP37Wj92kVaz2izL2qCZHxfuwcUv3wVSVgAqys6rU7RUcqDWJpV8pDKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrufg29ax1RRqQSkN3DDVmCjzKNSwdKzg5y8k9ns8N6JeC5uZv8SnwhSrqdSaDh4RHGYPxstr1i24TsBfYCwKw3",
  "key1": "2Thjm1YqWEQis2r2rsGQ4Mu9f8FZarqwuE5HQLh1wZpjSFHqhx9YCyrVxJ2GYjzu6ZAFumB6rEwnJPSZDy84UaVb",
  "key2": "4jmKMLZEewCY336rWmYfkienE3Xc1LYkqPAdrqYhz7CDoGwWCVrmymcWHTZ4DXHqzhsEKEeYeAfmNfnMFV7Nmctq",
  "key3": "4bQtTj44jA33UsKf9rtvMJSGogpJjEALaS4DcXEvvyD7qs9cVWaVDPUXtMfW1dSzmwQMofpy87kSvgHyrkrMG2bL",
  "key4": "5CtbUwRYeQRdPWx7G2eUNKJVyx6rEhn2Z2JehN7xfq7uysirNmYPEqdxmPCTFRRKAzejbBz2kZ9qHr5TvvLnAJ9T",
  "key5": "37XWYaHuDFAsZ48Ui8NoPSoPVUqCGSvYaGibnVpdQH7aNp8chUUeMysCHB7BXVzSkFs8ZVhY1tMNE7edAx5jwj1e",
  "key6": "4zeUsxKSj1MhhVahkdQc68FanqwRRgjMHi9fgr4yBnYWeyiFLLt8To39M4PEb4EQFrR18nkkuVgHXn6CRFNgmWpg",
  "key7": "3tBG16uVk2mMECp6qHEe65pDwH7fkaCEpbRtBvnZtR4HvJddHF5sUW5an1pL9P5Tzi4hYbjSuU592bAArvFHuQTn",
  "key8": "9NWJ4NNKsRW8F27XSFTZfor1J9BijQmLM9Q6HEiaWitdoQLPZr82k9QMmcCGUa7dz9oeux8FcuPEnwFxnXYuCnD",
  "key9": "2GoJBsWUemDFgZqivrpGBXckebZGPuffwfN5ZRpUkZ9VyBzZhYrUJEVohxF2LVTjoQ1vGKKPdNM6DmhxYsaJCSDP",
  "key10": "5NN7oXNCCnc31XHGAT7DuKQvLqSzk5UVJM5SrXuaGw2eFtSngo4dnbvCKDEkvBY1V4pjjZwWZK95Hh6sVWPvA4dQ",
  "key11": "2XDViQTKCWiu2pBG9R3PX5iPwp176r5k4xSxfgyGXkDciCZtE7fRk1a1yDYmt7iBMDExgcJS2iU7Qz4K4GyJotEU",
  "key12": "ea2JEjkeLMyRr6tYgnxqMF8Exm1AkmzG6s9Fr8Uyrjng9ZKbfW7VTAvrWQyDR1Aq5ziFZehWafQbJHiFXtqGLBu",
  "key13": "Efmya14A25TWaDBMrwFia8C5zvfsJX4YEjoPTnzKbUQFvpnqaaSq9yvVUS5GX7pZ4y93ZkFNor64BstbSWP5hNi",
  "key14": "38x2DAXG36u8tjkpRJ26yTNN4Zktd57sGzU6PTMkLPxkamDjBPznGcfSwts17PJgDw9pNdkmBQFhvTWiyY3tquAF",
  "key15": "3Eq4Wzjmza5bCpnvd2p8LTajhxvgmQT4eezMyyEuSxaGKhUzgtpPycKovpqVroHJ9bfCwZLFKN4EQSejqwjMrGqZ",
  "key16": "3JeY33G1DVZyWsWqhxg1fFXdNx6Qxno78gH3FbD1mmanf2EtBHeb8Q56aZMqW6orZeVDnVLtUDM64RqCJ6fWqkUG",
  "key17": "2WepNSFQBTSEr4JMwqBCaQqtwkV6Y1237c7HPFzgVqDyCVr3P7Bg3k9ASR9pkS9JKgquezxr6QW5pt5u1QGYVufb",
  "key18": "5Km12w2CV6nntHtBJvJy4RDZ6JyZqyuWfc7yuK8emWkaG6u9kMVB5cj6Ry46ViS4Bg4EvRTokmFbZD7ZWHTnZAw6",
  "key19": "2Uj1uePTLY74jLjq4dEqVMDDppHBuucf3WUFn4usFe66A34BPwxtWsQqDngNGxbh2hts2qiEZXoBdXU4v5C48AQA",
  "key20": "4tCTF3ASWGLNxp1Q7YSFtrTcSKuZ7xrR5LoFhzMRo4xiu3QstXkT1Aems1wQFpWXZMKFWrUJc4fGcf7s9Svdrzn4",
  "key21": "6yYqWHqrEbyhiUv86VzBzZM2WjDENhzr7exfEaua5MTDRsmDDcj3EfNxos7Nr6wtgWU6mgBbvPNDhNQvvug2hW1",
  "key22": "4q6rt7rLvTqFWRdVCmWziLxSW8CQenBVEFDcqgwrR2L62vySAJBrmBwaryLmhuwzw7NymHoqaH7QARzXvGRznc75",
  "key23": "35XV3MwZBTSRkBPvz9tgqcTPq5qdmL4xhFtt7SU2W3TJ3V8asvjsJYWz1YuKoA8SMaZEVhXiZAKVDw4wyHMFrCKE",
  "key24": "2c1gXUo8wTHVhu6yQQqGqWQZrqH9sqRZWcytSVNz7P45eZXzC95ia8eGGj5wXqCGjVJLi8jaGpEYSeEcR6YUbccP",
  "key25": "64nEQjMNfS7jPSw6SaZbm2s6xSnYhrDwwbhMToxh1ENk4dEEUMUwgS1xZ8U9iJvXMxPPs4mjjSGaCbAwY9tprCq3",
  "key26": "4VxMYwAbL9vvXyLwmW5eW2CmvyesG7eKgvaoxYi8vNG99aYdGhoqxqoivVsRSj2ykZhgpfCL4C8oNCE2gAUpBNcL",
  "key27": "4LZahHy2W763KvZkf8ZU8HhwKRLoP2ZvoSiMbNvPYzj47xn1t32UFbmN9BBBkys88eWKF9mHrC3FQouDYA5XWdgU",
  "key28": "92Seuwnz5Wqaez4d7NqtXSwwqLSA6pXUbuJ63ueaK8j9eyhJo1ZcwiKWPmurAe1w5rWZ3w6jAfSiLx6uzH4PzAe",
  "key29": "22432itSNPfJLmrvPHjE84Nrtn5f1hQYmYnmyci1jCpKvFAyrK9q5qvAEmuMYT2Yj9Lmg4RHs5EnTo8xhDTR5mPa"
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
