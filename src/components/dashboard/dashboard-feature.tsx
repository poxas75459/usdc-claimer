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
    "EhJeHMC1krieS28br52rk4Y8ELNVPagZt5dipNVNyBBYPMji3hVMDnz3KKofz56TAmVsk7Wi9xwoxwnpreDZJp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rv73cGGNnwz6mphTV6s5LDjtPHyBUuTPyhQP3zoB447WR3BfR1eT22dbu5P4r1nmNzRHRRTTjNd2QuZThoWrTPR",
  "key1": "5n8X8ULqXYg2f4UKwxQN62vQgLRjWWg5ipsDpvBhgTjWhFMHzUimz391rW5P1zFUCiEn4egsPhGNZp8NhqY3iSwn",
  "key2": "5g38HyzWRGgF1CanpHN1gSmR6XFmWC4GtQwe8nfwikXtkshhnHHmKBEzArqMXC9PfVspUgkvt3HSwCy1UonBt56P",
  "key3": "2ZiL1Zxg7um5WZsBCXY3uuKrveBxWtvQPDbhaTNfqBVwYeQHW8CoviiWABZymrBekoj5GCmLgeeeuGpCSkM2Sfk4",
  "key4": "3kiPM4Lu1q5UnUc7Hr7ybKrG8mZHxaa3bo7WVLx6t8LE5fA1SEF2bszNikKJ8aN85PfJt2t4fSdSaqybKoPnAA9M",
  "key5": "4M4HJV72JPuameRzYEd33xqMCMucvfs5AVdU91QWVQHvpFqXp7pua6J9RmGniL1QtE3M3T1qEkg7ipJy8xodiUPS",
  "key6": "yfKNeuogEMGTeh9NsQvJ4ZUs4e6scadagAS7gnc5REYRZS6XbZGpwcGWsLzcuC8FoBhBx1DkxKqZxsbhb12bbkh",
  "key7": "PPraLQVgoS3gCBnnprMrHwaEPrPhQ4KZT25NaxVmWszRPteR7JFWmz3WuUxmd4A5N4qSaravCHLvDzyBffxhYJz",
  "key8": "4gzSKjkhSaQLvCgh8kkkpQoCXbJNXELs6JbRNdnC2MogBXVEhewRkWXoHSGbPwvEGhMidqHHMdKYsXgjyuYz6NFM",
  "key9": "4MhUCKwNKvfPg4gNShtzwV4EZ15nRi5FX2mfWb5wRJxhtTNCCJXBerjdUidVf3Tis3VQvBDjNBR6yZVFuvxb55Rd",
  "key10": "45kkVnzsZQyi4M8zYrHRYoVstK3hQYqEvhrFZ6aM2gGYDnEZAMkWyxQsoHL6XoVeq1zwYa9oRRhj7cimhG8YR6Tc",
  "key11": "5ejBXkqSH1RsoP4Hftu8KVgCKTngs9QAfwNXoKtL8Bhbeo89x7p8NYkkjax7x3Q9GBeyzmnNjzQoqndhGr9WDrqY",
  "key12": "5JLg1R9PoForJssjjt64yfMTPjkmVGnUiuq96Ry1KYubFPLFv296uqw6qpEvSY3nsK5fX12YsJqzqTL7qE3UcHwq",
  "key13": "2oULKqjp2gHYYeD81cgufybDgsbMZXjrkiu4RNtxurPXX8BLRkRFBt9xSocnpdC6S2wBiV45MA2JKkfwEFEQ56PN",
  "key14": "4c8SZLWA3AispgZ1JPSzk9rp2Z4ZYMkZNZbV1UNoCxhNGz9grVPktZxNf2RJ42Rx9GPVB3xVZAcpYvPYNRd5Dgis",
  "key15": "27WtuTvighAZYJvPGtkYRhGWbyRZnJqKur8pnjNdaMxXAcJbapEptHTKgjmaJLajteahaFpq9RZGz8ATe228FyYU",
  "key16": "4jyPhjqvRqSD8ze8CDrJfEtTmBo4pTAnapYcXQccpeqn3iKFUrFsRXCGhUtk3m3MBUAvnwocTHgQNwksguAaonZm",
  "key17": "2xjUboocP2YXtth7pZAicYAXNhH38LYojkd4NMy3PVY44hzVoVKNcWCYJ86UHVXVAyTZ46og6gGnCMyLKWyzeLjj",
  "key18": "4joKPABQehGjYrFycNFZLEujgwzY5Yz3hpWsa55dQJztrBWCkeSyZjgpHSgXJBqQV1ms4U4aPBECaHBfbyqb8yQg",
  "key19": "ugUuXtEYVPehWtFRoJ5kVowARns3q1d8KU7RC8JX9mmFbwGS2nWbDLvR9mgFa4oR1cKrgpw33GJJqJP2upYPEUD",
  "key20": "5P6gXj5vUNj9tpodVFYsbivyA3Fg8Sj5QUpg38eSUDznYZGPhNoR2ZNguY3jFdRt5ebaENrVWxPJBtbmmcedJ865",
  "key21": "3vHuMvessjvdpLAW8gxmtsL8Assz38P73zJiGSqGrG9Q5R5aAoxxfRhFxW85Yr3c3norGfiW2uqp484rcdhd3MFR",
  "key22": "AVf9gtq3vWT7vvf6PEqPMTaRvZdwkfvtFyxx7HDW2xaQukRPP2BLoicqbQw2LHmcNRtwrWTwE5eVWcrxRk8Uqp5",
  "key23": "4w1jv7fBh11v9kNbAmnmV33rdJ5YwVUJjWnhUt4Uyg2fUCDLAsTNFeY1Nm9TPxEkWAYmtAo36BCEwCzyuwbSutXp",
  "key24": "5G1RqX9fXeDnCWzXPo9sLr5k2cZ9TjfS4AKCk922k9nG7bM6sTG56TVTv95FyHtiD6PbAxCQUDt6vrEVhgSHK4aH",
  "key25": "32C4tAws9KH8SQYWpv34S2WH79ivpH2d8TpGXnvyyBmxeJY3912QH3pZXVURfNEwKbUvYHzVn5tug9XVZt1K1xzm",
  "key26": "4mAQWWpuNSxtC1rsXtP3ZfJy4h7hQdQtkEk2DN3ZTUnZCKQp6UbsEDAYxdRyCbyXtLXjin81KtPjUQw6A9MEeTCd",
  "key27": "5y8YoDYbpQ88ud9nTU8uWkiujC4988DcZyPhXBbGfxBdAPUYgUTM4C2JUS6TLsSH9MS9gkPdYFedY3SJENXdN27E"
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
