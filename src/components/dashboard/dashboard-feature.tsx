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
    "22SDLpKQ7QE2HZx4o35CsuQ1Bppfc5MGvtrHR9vZBUkKrE2YEaMDLNKkhDqWJzpBy35kK4uMUaV1SJZjg4cGQs1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDEFF4DsWmzk24bky5L2sZv7vp9xZCXhRAuS7Xe3Kwys6snANfkGeLJu253ejSdPUuFSbsLE22EXbEtDz2DZrof",
  "key1": "2cRYcDd4HrAMaxPG2jYQV3TpiWy7qHVjS6LybwbRJMU3Zo3Ev16y8cmBkkdEC347HHdWJhRndJGSzYHT95JAjMqM",
  "key2": "2KcdzQEGG7xPLutfFXvBvtN6kmdoFfCv41e3xZb3kpWDvt8NUrBA8QT4iSXkphwFX69BMWJPGx8nJgY6vgL6n5rp",
  "key3": "2FNuduLKQVShFJiUjdG2gykQwQQVScWN9zkNzpFsukJepHVfnSkRTnAFYz1NN3zkzKGWptE1maT11T1azFtHPqVQ",
  "key4": "7p1iYgWqD3yHXsq7UCU13M364m1wro6pdhT8QEe8bm1yuNcir84MX62ThS2UfPAWdmHWnM7sYbvh8iidGMBKjJv",
  "key5": "5r21CRkEF6aS123eNYHUtfvqADLmCFwtuPBuTyVVcbY7aSzZk6N4f231YMneFdDX4RZ7it2pcWK1xZD4s7DGx9St",
  "key6": "3Ri9Bd4rBFg2wpid1yEdiHeowPDSnYwXWwistq9JQAheRThG5xzDJ3nVtjGXW1rwuk65G3g9H4huK9wcJXYNkZ6C",
  "key7": "5VoBHWZdcUhHZmztn6wEBrPmas6LvJHET82XuJmBvhsqteCMsKeuED2dgBw2PEyrGCPUnVjAhocRVr8WnZpCja64",
  "key8": "59L9t8VTCVvPoD9p66cCsMRb65Eg5CFJkRZdhAqkzK1BrMikQWXnEYL744LbdtEoT1Tsjp8mqHQcJijeSWmBnbbu",
  "key9": "RzSZ8Z146Q6VCtYRmcQZZzFbWE11Y4BFT7icdij9rRxaU3LNtAr8Q1iShtLbcVRGopb25bx3vSekfF35NRY6LkQ",
  "key10": "3cMtVYoRta15jgReD7N9YchbkvDWMswgnZB9HCt9273Gm9jf63PE7riGExk6vBHCVQWMNPVwPeJdBybNFHSJJbE9",
  "key11": "2suKRqpXwz7MXFDsXGbLzc6Nu7BNxe1m3ZobvKssrmdp6U38Vj1RhuKDxWG3cQ3Faaa6oJDSNCVUSgTX3UZ9bExC",
  "key12": "hvug2Wcvr9697c3UbDHn9aymGuz4oSseyogg4S3yQpVdBoEZ72uBEddGrEQpNEy44Rs1FXck7hDPRqjNZQDfKHD",
  "key13": "gBhpSbRicCHorYKbmqTfzHErpUU7zVYV81TwqLRMaNwoQn3d7JscjzUo3feBd2rMGVXR9CoqLAr476VuYsrBeet",
  "key14": "25XFNtptguNChp4zSZoyW41C29biHJ7aiVabozw1cdjEKSSMPaNNUgVjEMcRT22WEDAF3Hn1s5MNPp7twpbcFfB9",
  "key15": "2YCaEwsSWpzCRXbb9dMzAbLDAxQ5D2aXPw7eDpPiV4YuLvCC3N692E6b9PV6wp7CGHkQPLgSo3rsZnXHhSr5o3E7",
  "key16": "3CR3UAeCzk1KRipMELYhmwST8tdff7AfzT6ZqzvLb7KKziWrWoWzhsGGAHr8tn27yQVukjc5KRFHjZMhRWhn4hxP",
  "key17": "5UBrr26FahSenMvgQmiKVHXJ6ubk5Zc4UtVnYG4KcULKkhkbpWfsYrvWXASB4pgr5v3F156us86UQjtF1fQjYq7K",
  "key18": "2fZjGVJ5rFBzihPHR6JzpvexHKoN2JcDYtxFAEfhjVV9VHuCTZiVkdqLWhTgPJgwmgWDEAJmHSXZyhyne1ftwgA6",
  "key19": "5LQ8Q5hBWZcfBG6bVJHkR6gpwKBhDLuArhofgvoqDVPAC9j467h9EPZZGTGPVb1H9ru7m8tLR5piTKGg1kyGJfDM",
  "key20": "24jZfvoGKxWpKrK28uwPLnaF6V7MzzSdMoBHX4hiExTr1kLnqKpvNzQfoeJ1kgf9J1oSyrnE3zmDLGrTpiusufEQ",
  "key21": "2ZrCv415egKYs7RTLR8WUi3Aw529UZF1XqNvBWLcN7MW3GF8Eba1bP9GZ6ePPiAi4zRSXZkDrEbSHZVNTtK4V8Wg",
  "key22": "5dau6f11w5emkDTNm7fiqrqNcLsLfWhrg7YPD9oTD9Zd1BbTQczS7a36RiRH3x8qunntrRHR9hBieAWbfgHrxAe5",
  "key23": "7DSx5bf9CxgQ7RFBQzeDgLk8mBxq3s7cShYSUEqsuaSfR8XMBMYv6crUF1xsCvXT6oUEGpernpPBgDwMFytyC5J",
  "key24": "4pVhXFPByAqSGAR4o3qgGB21qukyKoUinNfMx56HFy1FZgYJwQQKnQCJt4PU2uP42ytt1pWexwfHGBDNT2qKeoUS",
  "key25": "5bCP9PUYZYnjbp6ooc1q6c7Vb2vJJ3LhTfQNmnfQo3oTxrw1PVQZPwUU7kay4sWDGPYUbHfCM91jVr4HH6w6LnxM",
  "key26": "4odkG8m3mEvSPT6TxkLYyfRZD2WAn3TjABuFNSM3haSpLSLXxAwqapmaSwXfGWvuwvLB5EnBDwXiSS8N2TDH8yyx"
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
