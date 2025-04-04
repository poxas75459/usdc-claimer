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
    "2geeT7xw6fxoFCmgyid9NRK2DUDLj4zZuSMfs7cNM3faoqZLiLHGgFjzWVDXCMLiQUq4oJsiwZhsUPQ2uK49qmjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugFTQgNwjD9Ew5ybZiETPudoMVhVrNZ354W7xBrSxbqTyCDSpsBafxVVDQRCtmXsbNS9Pe6BghGwCNzai6WtgAY",
  "key1": "oic9oNe9KE1mC4mzKRY8B24AgvjaEhhkfK5eBo1H3r421S1oLkKimzu3wTUWZeKahWNGZEtxMHmCPGZUeyZSR2Y",
  "key2": "3Gkn9putqNdddrXW8eF3p5yyDLocgQr7RPwDsigA1unggEJ7cBniyMn8nFgJPrpy82Re4R2tvnrSsoaKksn2xjq7",
  "key3": "fFj5rYoK57qYwYsSX7SWBWcXEJC6VLzvcrjoBzg7NSVkmSh46AvydJNcmarywY3TVQdizNwmT8j6ciRHexEqom9",
  "key4": "eBmssvguLVBTSe4CmT9ADc3mBYWeUmnGLrgfBTYAhsGMeXGFoRT7nczqiBDGvMziB8wDRgA1AGSW99kEAzvoN9E",
  "key5": "43HaMouoaTZCGjUn6v7zBWyRT3QLT89iZ6R6gWPykHcRYnwEzS8QTq6Gk36schHvLhVYbez6pzBQPkbGxtNUfrug",
  "key6": "QpZLzqatxqPV9xfYZ6BaFu3dPczMfBvwkZdu9P9DEEWDrTxa8wyeh3e1wBsyTLqe1KbcVxi6Sq9HMcm54XWPa45",
  "key7": "59vdQyYEBrgrQoxLZzaa2ea6VEnAm6Eosn8uwWrNK4pKQAe1pEhTbkDWko2GDpPZNJG9Lmt8kHXjwaPcZ3SuDHXj",
  "key8": "5TRhxmMkL5441Rd8LspsEdCJ3eCPyXGoQbjtrUvZxKg5pKVkGXKQQxcXJTE3pQuoqF1ipvLp5ZvihtDHqFQuA96Z",
  "key9": "4zrbSeaxtZe14628huiURvpZbgDvqTNJbhdiES8HkAstpeZ9yRJjD5zR3VPTzLorfLzkbAaXnLM1dPxPAW2gJqoG",
  "key10": "3QrET1fwxo68Mi6ZxNgZinWd8Ao2o5gdLb3oP9Dk61jK2xyzzZU21rPu4eqRwtBQCMZVbS8oNYYeYtGcFTNL9n8U",
  "key11": "2846fnzYgeMC3iZFDsdqTWUQyKhjrmPZc5of8CsMBGZMg9TrMVQEZwV3bukN5jkw7cVr7BjBezWvhPrsi8K4ydmm",
  "key12": "3TJzdRFfRGNCCUJM8hXnxBuvKzZ5X2R3V6jr1WHAMVkvwUG2WhDHTdNnB8vexnGNHpWhZHrXjmjzfrAN2jWpEzdW",
  "key13": "jaiu1WHWuEhCkMCYnYcNhMw5rAcSsbWjixeNyMEJECtNPoa2PYMGCPtoynJtMgfkxLyD4SqQX66GUnuCwLTDi2M",
  "key14": "2oMUm7sTrfSTdqSVbPC9qnpNXNqnuXzjKAeSM4g9LBoNac7S8EfpHjpUmyJNEEUVYyMHy7L4mtNtw3GxBdQPHk7A",
  "key15": "3o7oopCFPnnRx9VszHr19U3UojoefbUpyLVpFC8sPhD4eAxSC1MJ5UQhm2PWPTZXfDrmdSej7BxwW2bpwPxyBDZs",
  "key16": "61Z5BgxkXj2VCeQNZk42Kfqugt9S2RTsuk37HrBU1vZC83N7UQ5DaeUuARM8J5MnWdbB4xD4pE6kNtA9qe3ADoAY",
  "key17": "A43VN1yS56jcSdHRHREi2Xyn5tvhyyR1XcxpJfKs6L1umtvEPk1RuJxKs3LZCG2J2njhXuJ76Bt21L2LnQgA7kg",
  "key18": "rc6gAGDLWcVzDeXto1yvYr7XyrZLHF17KA4bqJjCwxiLuxoqkkU7iCbEcCxVpR5iTMgNKxHpFoPkV1DF1MCJ3sg",
  "key19": "4cUXTaC6HpH5f3QAVwTKjJmJwWH8EvuwiE6zHzTbeQwwsJtVBxMH8aUXNDh57eMRBWiit8Pi5yKKsey9U9XPaA3e",
  "key20": "4FiMnffRjMLxRGJgBTb1eR658ZtYWcRsqqbPyCEMwtykxEJvrCzEq3mcch949k4BiMoF8MQbPUkYtYCknEULzBLX",
  "key21": "3AqybHmZqSucEcu5rbf7byscyn6EQEGiEWCfBdf9yeQqKxUEDeSYjNneGtJGfw1Wgdg3nVKTYm3KBfgSpDuf7jty",
  "key22": "41nFSEQUAaPtV3s7oTqECmqJnPmJudAUpAHRPXGeQY3cG1Q6t6hsqTrA1k69PrHCif5HSd68F481cwL82LSLbqUL",
  "key23": "igbMB6wnMLi55ybhH67oR8DuZomKj1GFzMJykJ9rfQP1qT5NLQAjKr9LujbnnEXtj4ztSvYdmdHv3fHcXRRaKX4",
  "key24": "3qMXyCJ29GurAVWFicVZQf4NQxDWjyCihkiT8Lb2gqENCFDsEZhpShntzVKGKHm5HR8pbjL9jvK1AbJRAQjrMhqK",
  "key25": "wzHxHbzTELRFf1FSfBrqShUgRySsEks59X8Adqyg9yGeGQq6Fm7N42VroSMguY5ouYFQngQPDbpaDjqD9y9zKXu"
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
