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
    "5669koHP49gh8ikM2h9SwpCsr7cc1MzCVHpP68nKWseBR9XfoG4rQHu4pSw6WPPcD67LyWiuNXkEV3LaWpVJLket"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SnkKGrXe8r23LLgPbUqVPzYEBEWgR6jSZiD5bHPEKN5WRiJn2Hq57kb234EmXZ6nQdxXb2Q8gFijUdqtN9BmPB",
  "key1": "2ssGRhkHW7nvQahEYiNE3rhz8DiPWRzcX7hUwoGGzzxehUfFubS9fQVB4U5Va5Ah6uxk8c2rgB9ngYdSShQ5n76H",
  "key2": "9WsRb88aTrLUDs261ALJ3L7zYoCD5LcdpgQ8iZrepyQPWVMPdtYpsTJj7uxV73hvnnxpKBWbUy8gfzsUbAxW2Ai",
  "key3": "3SJRHDp8Tk1gvMdrzNhmisHVUBL2YqPiLatmMSBQNzSrJHszJsTjjeK1KKeW3R8fpniFTkj25gQxYDWReYmJiRRB",
  "key4": "28SdoNdbN2XBkhD91dxgsvGzyhTzokqdKGrD2tKEj6NjJSnxAtQGLJDTdTHhjyL14mpPBEGn2GxWtmjRnbNgNz7p",
  "key5": "3fzAqgBULiAsBS9AHBNXmASq4KUoQQgoKgM96TLAc3BHwQ1yBuXNC8Jy21mYQ1fdAdkRF1nxhMNbYt1S38SYAZ8S",
  "key6": "4XdHD9FCHujvfRJoR79S6B54UqCwAYCo15gJAr48PGDoMPi34UyWLN5Egnt4irCS93wK4oLFSEudBCWmtCEZiWGx",
  "key7": "3UnEnfN5owmJABqLPkfAbpaiL5mi9ZAGwSQFKbXZPZ1HZnHBaVBmeq9r3TATGBrW2B1ey2u915jwDqrnaZc6chNL",
  "key8": "2gDLh53ZPaW5e51zsekgRgMwRVfbvqZ61piMoj7dwXo3YXYU7JJHSdvFn8kpW2ZAT41TnYW7xtSx9SRcgvzWY2Gg",
  "key9": "633M6FnQiUkQmHdbwm7ELfpJLhWxScqyoV1CTDJkHQGyk5TdrtMr7Hvba7PReUCsu8xLMKvXc5jtxqGU6vVe3g22",
  "key10": "4b5nEZDHFgeXt1J4qqhoxrd2HJuUNzZzXfksbUdxDgNXXoSzpVaCMo7hRmicJbgZe3i21GKyZkPp9mRktj43TaYX",
  "key11": "9fdMtGxNqcS2fNdtouHuHp569mWkx5uui2mEda2jfqtVZXUq9u8QDuJt1o6YwWsFbJf1aSNiJ2JuR8XkSVRZger",
  "key12": "59ZFp8ZULZcFCqBYGNXKQUvkwb2ZLonmQojDwst9HnfHdzXbGZfsUP6nvhXha7nhhEjTQu86yT97sAgEqFqWJL7b",
  "key13": "2cGKUDN5PQxmqjT69cT8QFJtWKW8hdHtAmtzgWptoPb4oX3FrdhMdFY2DcFStKvLJg4oexKNTeNKKuXyUFjV4Fzq",
  "key14": "T4ffSyH5cG9magVbLmt9z1xgCAxi47jXmx8NpwMPxfYDjoHLHgPTdAoa1gnd37pRqsCKi7RobstUnUkW1CUAeWy",
  "key15": "3EBnKY8yqf8fXMBDVtb2MA2HKXgjVL7WVfH3P7j5S9JgmSRxzyQnweZvLZ6yWykwm6G59bb5FCDRVKC7ujZzwyyu",
  "key16": "5bV37BULYVWpKevjjX1JqWo5FUMGXyNuSeXEzmsKVenLUfTVXoibXZgThGQDmm6fyvzo4mL84UFEpMJ44XZYedgf",
  "key17": "dEX8R4Uf3xezgZAazdkbdV9xqvPioBhGPF4KrkEM65C5vtjzEsvUmgwiMUZmA35CywuKAW6qEwpVnzZHtCkXsFA",
  "key18": "EBpr5GqUWX1ret4DkwG5gtDzeJNSBXS7TjXHiakCoKUepzY5tkVELbawUeWpeBPVf3bV6DMoE3LeAu3QkMY3ihE",
  "key19": "tSaDAFkg5Sbo4Nmr1MYWtHFnBXL2NLV4wGwTFx6ZL4BzMdfHSWzCFuEYMzusgY2N9xfQYnTtV6hdzHbxXKPY36y",
  "key20": "2AViUGagBnWatxmWsvBkrZDtpCEpfa6zt2Ku22tKK7nVoE7buAsB2eoN2xN7oUo4YC5ufHj7wxWyqScpTdeJQVsc",
  "key21": "44yFWNZidTWZ27qM9tfVRoucwUmUPa6VJr9fm9CEz22W8KnhsdMkZJcAhGzuHWQQnre6KmyW85XXdVBivNS4ezqz",
  "key22": "3CXLUwUomrKCvRiNqsuVm9fZUbP7AxKTWrfBMGEZqz4APK84bCz663w27EhKjeyDq6r6dTizG3Sk1ncgPqRVR6Ug",
  "key23": "3k5w6hw5B634WZsMG8ozRG1Qo8zDA4oR97ZMJHQYaqHPTTJW1tgFZtTebVPUQbc1jXNkaNX2H5mZqYiAt2D1kJXf",
  "key24": "3ZMHMeCnsAETPicxCWSUWSZFzY4sKiznhaK8ukjXkXWH9u1Ls25SUc9Uuej66P3q3v96eo14t73YctYDDcbD8a1p",
  "key25": "57jB4jiYV846R3n83mDexP7jWWGLPbYVNWVQsGnhkksWjjNWtf42MixySAF1yPaUkLGNM3JurqDVCPgcbbVYwrCz"
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
