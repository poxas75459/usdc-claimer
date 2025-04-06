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
    "2nqoKtGKN1DrXPiia32ieBkFuUDMTsPCBDyAYGcEBWbnz2yazTscReYcF8vKfLaLqGbAZ5WiouYkZmEJtAqzb1Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wi3umVKCFA8m8zYWkWUDMuABXZVDXzb8spq8fcVKnto1jG3DA3E3WUCTb54BsS7iAbFUFHvBUoGoZGGP8UozCbs",
  "key1": "3fRuB5KgZehkzBEw9c2eg4dzW2FFDSkAKG4sxP87QVeP2cxcSLsibhQVRyNnyD8bTaifSuUUXGjFJhibgkEipiQE",
  "key2": "27rvD7jJKK8ad6ysnR6fVZZf3YS7VUvpCKFuzUjBDqUb5JJLaQd9eAiQvdB5PqR52DJmYUR4Nn4WzXMTUJNmrcxA",
  "key3": "3rx4McLh1p1ike9nQWtKB5K1cCsoximwYmYWHCeS167ZuE9vm8H6ceq1RPzegyaKgHs1uyaf1UcsgGyyckMhdXT4",
  "key4": "34BmSbuVKRoxrMHKAdbvJ5UjxKCURL8NU53J7QAqEKg8yyCQPkpiCb4rSCNu7SsLwVFrVXJYUTGAQS4vkfDXnEve",
  "key5": "35TW9o8T1iND4WLyeW7ArktbgthCazLXCAw4j1j8q4DSWidDVeXgpguHLD5xeV3ZTeB8CDaKbCw5b4zZy2de7ber",
  "key6": "3CauMaP9mxmtvC1JLvaLbkJBmKacnUbUMQqTeyzUX6n8Gkp48V3gcc99D9v5zAB8bh8Xmzq4PFEFnjhXFiGjadeS",
  "key7": "4NWHUBnMGwiTQWqE4L8bwEFtjKk5MRFgAvUWgVexCA46mcRXb8Uo1ykm1V6ZAK1MWNWDGvmvWfq7gMG1ZD8EUWR1",
  "key8": "4MsvYAA1yUYirjMCFSVVh5V8255Ljjf9Uu4ba6NihLFWhA7arnh32nx66FF7FPXbJGtpXdFLct3S33qccETAAojL",
  "key9": "3TwhzJpedK3L7ZhiQJyw4ShhBZEBQ7jhxsmxnynuqXG3f5JdT87nQgBaDHusV5BsuAam2ZitcpS9mSGe7b2RYh3",
  "key10": "4bkUrCYN8EnzuRJCrAs8DBNrM2x9tjaiDYkb5ir2dM8JXp8q6wJMvQR3gFVF14G6fwxdQRHUNGEmHJwj3zTWAV6S",
  "key11": "3UceRvjsUjJJSniuv1fL9Vfxvi1nUxiwr4kzrResRBr3V395Nm43AdLMbqTTBqjAexHWEsBHoJUwBRC52St1SvQy",
  "key12": "3DQy5AQoG2acWfx1yxNfeyd6sgm3XsodKY91A4RiV22XpBLrBwCfqrmF3DdomVkQXhx9qsq2xD1BuAXTnYgwfgmV",
  "key13": "d8dVFtRCDwWS4YXudFkbLLuHybeLpLbENyQzscnr3HqsLzbPpgFHFLE7DiWuqbD8jhkSqPv2t9QNaozx1fuqmUc",
  "key14": "X3b9LgHVqjpdSPcC5LQNajGEAnFB2eAUa3k8y2kR2gsZ3AVEFynMMKtBQUTK9NyryTsKVPSWrTuBeFs1Xg9Ym98",
  "key15": "24jqbZbK4RwAAL1nB5NrxqNXDz5yYHN8ugtR2Gkwjv2q1YZs8JgJFLAPefhfz7QCEg7F5bqo56rXNXTXurTWS9Kv",
  "key16": "6vrheFNDNgZgYuGoqMcSwSZedcy5SQXRwcmuLVFcAYdbGdutE9a7BDraeaEgMWdzunp7EV1PYRVPHYhG3fd9jPr",
  "key17": "3nmE4CoJxeRnpX9wfT8dFshcP1k9H4WhtcJWmKPNzfePy7KwSVV6V8htXFURaigh4bckCmNYJLmXrKNFE7JbmHtR",
  "key18": "Tys2NBdSNbcQf57ewLtxC2ER6t3WRQDK6qYeRiBMd7Mfc3MBT9tp22WR8FYvSqz5wcXQLzwWuhGapJahQ3pDXqm",
  "key19": "BJMdCmYxYZcEuHEwZaywitZHUvB1LyM9s14PAHnLk7y8gZY2jTTA8Tuk89zqsZmN2mmeZFiSi6twz6Q2NCt3C9D",
  "key20": "2Uap4apZjHcfVciTqf7fngzFfTFMqz9fwcZvMSEGrTresFxdqewAGW2oj4Kecy2XaGXTXzmtZgU7zzwoXZdMLWrR",
  "key21": "4YEsy8dGqAeR5PwNDbjjTDwdhZ3KsiVCdWfeFAePFjMS3EVf3nbCdzRkarH2pVxNQjD1U2sWCb1t3NpZ7nqJ9mtx",
  "key22": "3XxonahnMn6wv6o888DtETdUPtwzVwFFc3FcfkMAMwkV6MFnLyWzUkLQA7zYzimbjCFcGoAqa6zV4Xe5N7WxoN5C",
  "key23": "5iwiMWK6FSwxY7fDtN4iNKXozSCdfkgEcXGtU5JRdZyYPsVQNopR1BiUeTkmy5xB4BuK2ihdcammSkbQNgufJwtA",
  "key24": "5SpH9oY6gxaSH7Lbzdcvbv8FB2Z19ZB78C4yta5J4SREDZP8aZVN5B8YcQabpXM3GWrwBQExzzcpVaedsYyyYQSJ",
  "key25": "4mi6jNQszcKrm6YVK6FZyYhRdroeF96owsyNXwpXhU1zLMv5zVgSrrJE96kX9HJ748eAhzCeieSfrb79TtDtW8Jx",
  "key26": "2d7J5ior1UvLhs9EfQTNpq2HuLx1kPVBn3qTaksWQJiMYdLaeZw7B5VBZ4dMJkS8ga2MuNqtKqRttMfsr6VuZDoU",
  "key27": "2gCNTV3aVMT1q4zjrupGHWkBPiw7chS3rgoa2tmPnaS9AXfyD9BrE6HLFG5mGehxcMTYenh43QAkqkTLFJkZALyT",
  "key28": "4xBvM3kc3Y2GZHGFQj3BuLtoEh1oEEpvbfc2jUMAp8qxw4wGoTPxZ1DuZFa21qPstwnEhgcWoSkV4QNNFzTTDKnr",
  "key29": "4nGMbLEAdS2M6wHGFxCpRyDG6tFkGB8g8VddU3FJPefPPefGC7c6sGvcD1h8hoawJJ5CFi812dggk837Q3wH5FU4"
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
