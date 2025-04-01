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
    "2HvRbdpM3M8AtpFkqN2FsLX3Ej7wSmyfsQNzYFHWib781JQA8gMKr2PedniqovP7oto6G8oYWUQYxN36fGCMJ1LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcF9GUVpzqk2dsaE4zLJ4vD8Z9NnNaKKYKgq6vDDkTzaST7DD8jfhpvEao8DFe2zeXAteNSC9HMwtg8CHrDzHm1",
  "key1": "LaPx2yNeJyG8FwD76aSF2yHf8xwndt8kxiQxfo88NV8wGgt6cKSYvRpj7iqMs9Uz5YVxtCzTEmEnUPF2tzjnm9S",
  "key2": "3QrFNEiwLw4L5ky2oaDfJ2fqRSNy7bB7DuE5if3nukayoMs65z5cn66d5qfS1Qghr5n8wawYKidAs1dXxoDoxChp",
  "key3": "FvPQSZqy8tny7H8kQzXge1u2U8KQyS5TGYDAcmb2z87iFezRJWHWacZk1sMHYApcpyCRGx8Fk2HnmfW5QCjcFRa",
  "key4": "2nMk82cT1pC4uRrtu1PnKXiCwWdhW5uCXXzJHk8n9VaUGdDuHHxzDviDdypuSCFdxN85174rp1yh526jbk3vU4TN",
  "key5": "37YTM7uemZWua1hdXxTQJXm8HeaVkUo62bNyJU6WuMaTDbWi2BD8sAeJVcWQDK8hmF2u6156bX3uLqWQpj3VR35H",
  "key6": "3QkGxaQShYZUSynQN8CoXBfbGZrXfQ1xS8aovLx1roeCe7UA8CmJmyzpPCGJ7cZqK7TasViKNJMpqz5ThuFe4H1w",
  "key7": "Tj5AX7qjQghPwLXhUV6kJQqCP2QgWQMvvnsVb3YjtuNjjstm2m6NJi3LoMPmgDvtza9vbkc3vAnm4cyyWnjccbu",
  "key8": "33KcwSmjACzzkjVyhXYBvRJVo8eMjj8n1XQsJLQa2waYT2tHU7VtTy6jbi32YYXcM5MfkfuR2KKLctZKK4us9AEB",
  "key9": "214RrTGnKMxTQ4PHUHTRt7NPdWh6U3v8sdFyFFe2MyrBQewvQv6EW83YTwUhp1Bk18JLR62qFJtjfvZ4oNFwp9b5",
  "key10": "472VGJwyMUFdkLw6WCGZdJpYphWmzpcHFPPiEheDsXos6uDHs7ZETwk7yT42cgEwpLgwL2UUsLX91MKA3cSfT88V",
  "key11": "4N9N47tA7VZWBsZY4NRy8Ertkop3h41v5aq2DEFXAYekcMRbDkScVWQoJJFxWBKkTC395vzz3TWUpWZ25tqn7hFu",
  "key12": "2XwwvyU6Zaovd7UDgt7o6n7aknazn7HhpBtWDzJvhPPe7MFbtYPtb6fWEWgYsESNR7vnzD8br6bUYNeDJSAGBB8p",
  "key13": "3AtZAzjMmMoSjcKUEuGXqEP2MdBKnCRyC7R8bxSbA9kYLPtuJDojrNQCdXozyjigHHkZW3K5Wc6dXz7tyPbpP3hj",
  "key14": "Rs1A4uq7oDDtjnAyQniUK9XC6vWGfXrDZ7Um1AahLrtCtvc1yQvrVC7so7gTsg5r6L98AqCBKEZWf6mKmKQto8U",
  "key15": "vrbPA3A1tr5vwXRQ3yk9Cz25Wj1hwUaZF2qBokPzrmQcNjyTkUojXQKr4PWFpVuVUzuVJ4r46VAdXaoSmVxm5tE",
  "key16": "3ywMFrnL5avh33hjc88HBkP4JxCAgcvapUFxAWUJhotsxWkjkSrJ4uWXP1QqjvmiRs9m89LuMm2cjpJScLDi1yeM",
  "key17": "5K2x8GM3a6i9oxtRuBqcxkiMh8on62PVuPBU85Q3U5AhMqRV7xgd1GCVbpwZ949BB89J3XYHH6MHmd2wsAN4g1mA",
  "key18": "4z3ccGWnQpr46awrGn3jvvSZC2uPKpaTiwnL9WKgho3ruxo44coSnqEefxJzfV8sHJYBb7fXj9Xt7DaXqhWBpgrm",
  "key19": "3RTaTp3LFg2gbKUjBr9yEqfzvw7asMcQqHLCAkGCGacvFunsHSn35TPPWw9Zxvsxw8P1b2onRVaHjEd7DqhNrJh9",
  "key20": "3i1V9Do3s83jGEFGDxTkpaZuUz5tMYFfS8KaZvjvDGS414H3KrRTrDEFLercJkcAmmcZjauKjhUEGCXiVrZNXaqJ",
  "key21": "5jfwvh6ppGM3wZKUdKKtfQDdZa41bw3cys2udZZE6eawkEyz4WRGpm8UqpFbFzHheR8wcgKbcaxajVeNjxufbFpK",
  "key22": "cQ2XKihCus9nKeTbwQKooqpRn2XDfVKynQq8TKmWNMYYya94tTCEVhQsfk5pbkMsP6Libyc2WrwNW31jfAx8e7H",
  "key23": "4qptta3KkEVcXiZat2j2fToV9wzhu1FHWUFJF6sKN1WrEttXcW5ahGDbuxj967rbetkC6fMGCp7B3FBYHRQvMDUp",
  "key24": "5RS3GittBf6Ff5UfN788NkKRth9bBfxWY9iegimFESiDNLSY6Y925V5MqirmJquCbhMJMTKRpwAsdMnHN4PigaHX",
  "key25": "5BH4AmCkt36sjhYXbJA1AM3WwYqa932erAo6EErGT4xRvYu7cYkxRnJCAE5ctAnbauf2eGF7NBxijEFszVLKmfuQ"
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
