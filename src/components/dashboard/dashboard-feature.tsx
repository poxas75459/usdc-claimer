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
    "Bx46kmFszuBxKXje8MKu5KdQRZn88vjBEPSg8fBp29V7T1kGdnoRUj3dLxGnwCDarHAwJcWPioBRLFpSqmFb4MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cc7MATFXvpURKLK4GFpotWKWvmRDZDPbAzxay8LvLrAVH5ond8AX5QAiDbdL7NLvAzYthsPVRn9aYBoeXKzYQtX",
  "key1": "4AZACXsUAdXpwdDqg6zvBAvPCshseMuhb3CDNynDASgEnRudgYMUfUS9r1hAX9Q4HXnb6Syh6UBw5ipF4qBxaV1b",
  "key2": "6V4xiqvPYU73gsriXGjoKEYg9xwFDHNpXA8KnjCpfnKT2S2ZVkLRXMC3qkZJYeK6ZBNVhBXvKNv4m9WrtFP1ie6",
  "key3": "5oeBy1qMGqvpkU3AAV5rmDG7435oNc8wrWkN3oykZUtCGKF8ADhnaBLHAtfjCjoPy99Vetu6mDuUwrebYZFDgn4a",
  "key4": "4wSGhGBZou7a2qGtuy1fcTRUF6XSSA9JewEsA2vepxxSKbH4rMxnqkcNsHpENiAQefjqzg8hsYDViesnRmLwL1yF",
  "key5": "3RwkNohZkSGBjKHeN7Trn6wAsPtqxa1b34hUDvvhsEeaAogSzmNw7ZTtc5BzH1Xzz97snZWbjPA8ECCiFJway6cX",
  "key6": "5mqh7edCEfv5x765bL6irzMJeBg3PGVgeVBRMZHKwfMMoQgiDR9jiWVn1CwXKki6medoX7uKn8xsop1scwLdzBw",
  "key7": "63YqPdRpHDvwpjcqhS84xiHjkjW6WsNVQPUg2PpMMeEko65534ZG75oCUwMpoQWTmp8X8BXG4WYA8763yQMEzufG",
  "key8": "Jsy1ZxqvN8vLH3BnuQLDvXPza8KW2P9f3YX9JJhjWdBqjyNMxvfXzPczy7w6THqbDBswfjdpBEDYRMqYGmMvHGN",
  "key9": "2iy6i3kzrMqHejB3zWm3XQ51t7sBszLLhAM9bLLRADSxArH37ZMSEJwNwmJW8rDysXDpa6NnEWw8TuJo1PBkWnR",
  "key10": "4BE5yS9xxtFhNDXPXG4HZnLfqkYtrbqFLnGR9xEazUBqDW6SBsBwiaVYP8bnJe59vSHpLJ9iXfKMVdg6BorjxSvr",
  "key11": "2zpHaoHL5JsDCYTmvTWEgfxFnErTqs7hfa2oDNiG7Haq4VjY8CY34EYk6AB5Xz9eE2TtdPxtfX1Lv4zQ5X5AhNaF",
  "key12": "2eaJSqoQHqdNHG5ZxkdKZRbnCfBZAeaEF7RGqwW6WMddnmFzYoiYLr25Bi8GtLxHc6i6wfZ1FuKFpik6RSdUFXxZ",
  "key13": "2vViwxLtTbPefQFt1TJJCNa5hoKqeE3MsoFJWz4G7jDdJwSFbUMe49Mv2vMZANcnzfppfm6AhC3g9ppRPCidkA2J",
  "key14": "dsozXoY6MhC1LS484mArdc5jTE9bgMFVv4gwy6iX2mPVuaf5B8Lpocaruuo8qdTkDQx1nGcujxZ7wJECN44pZay",
  "key15": "38YryPz76qnaCNXYG8QqVr1Qb3zUPRuu88NzrKYjRC4wyosKQAXX3koqL4BLMevf42pbUMTmtcWSzw8eRJvGLcN3",
  "key16": "s52SKK5uUTKNGNozfFMbec7NnQvvAHNruLvAKU4iY3gKLutbe3TWhz6FTudpfjzqZQowqAisguqPjYZpGk98Yca",
  "key17": "5KnexrDKRkmP7UtXgWP87Q1EuhaeCJs4SN81ypYrWrBW97utdzj6MKvaVm8EwFbg2EFgt2RtAMMrDVwUdYSfUzpo",
  "key18": "4sxFqf9ta5qBpXFr6f3MLCFxd8U6LoFTqAG2AWVZsyDjgPXYWG7ULCb8x3uuhGYYpPoc1qwuAW6k2XvViQw9fpjp",
  "key19": "4jg3RgsiMMCbQrRKRUQaBfWayj4173g56qu5WgStDBgEv9sb7DmnYuyGgRyPwWnqfYc8BbVREMJQ5HGokKUdmJj9",
  "key20": "438S8RfF4S483PSbzxW6vQEmZ47sqQo9Rj3wzAPM73cGA2MPURsKcuT4R8txGPPMLJ3NJy65E6dYPhJsLXXyy16c",
  "key21": "65m9ZH9bewhhUdFauSgH2cNJszNi99qc35cXx77qfVUMnb2RuWJJYgAFYZ68D8rjVahDgfMLqwt5DpowP71oBxUU",
  "key22": "5KJtVy1LANz7W98qX69QEivgTimHSqEDvwYa9ZVrSfpTTF9yXQiYHxqVo1uu1PDgq7seLViHxKajfLDivEWJd1k2",
  "key23": "3G22k7PTGSVt4NxZ2aEtb9SsNeA95Y1LWLiu6m4DzxedaXTaAadXbMyxDL77zfNKN4cdpnhEgG5FUp5cfuNaKT4R",
  "key24": "3nQcdGkzvPwjYUYUXXmvQfRKZXfdydY4VrAdWfm2aNvb4jpDKt2J5wAuKEo4ENAuLMSroXT7CNT2xRUjroyddZWy",
  "key25": "3TqGXENGngRzKBaoPQbC9MpvewtpBp5xyATG3ywCA24Y23VSaH3NEand58fP9JpDn1hSUkLXY6Zr8ufgxLEj3f1E",
  "key26": "2naBk27HP8BkAf1QWrTRYN489kHdvbAUzjwFHtchVf6nVjeLxDLKmDPPNHaweweCxtiKrTTUxYcWRWxiEqwRzfLZ"
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
